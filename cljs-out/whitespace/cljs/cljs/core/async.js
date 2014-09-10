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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15455 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15455 = (function (f,fn_handler,meta15456){
this.f = f;
this.fn_handler = fn_handler;
this.meta15456 = meta15456;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15455.cljs$lang$type = true;
cljs.core.async.t15455.cljs$lang$ctorStr = "cljs.core.async/t15455";
cljs.core.async.t15455.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15455");
});
cljs.core.async.t15455.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15455.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15455.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15457){var self__ = this;
var _15457__$1 = this;return self__.meta15456;
});
cljs.core.async.t15455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15457,meta15456__$1){var self__ = this;
var _15457__$1 = this;return (new cljs.core.async.t15455(self__.f,self__.fn_handler,meta15456__$1));
});
cljs.core.async.__GT_t15455 = (function __GT_t15455(f__$1,fn_handler__$1,meta15456){return (new cljs.core.async.t15455(f__$1,fn_handler__$1,meta15456));
});
}
return (new cljs.core.async.t15455(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15459 = buff;if(G__15459)
{var bit__4191__auto__ = null;if(cljs.core.truth_((function (){var or__3541__auto__ = bit__4191__auto__;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return G__15459.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15459.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15459);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15459);
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
{var val_15460 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15460);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15460,ret){
return (function (){return fn1.call(null,val_15460);
});})(val_15460,ret))
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3529__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4397__auto___15461 = n;var x_15462 = (0);while(true){
if((x_15462 < n__4397__auto___15461))
{(a[x_15462] = (0));
{
var G__15463 = (x_15462 + (1));
x_15462 = G__15463;
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
var G__15464 = (i + (1));
i = G__15464;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15468 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15468 = (function (flag,alt_flag,meta15469){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15469 = meta15469;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15468.cljs$lang$type = true;
cljs.core.async.t15468.cljs$lang$ctorStr = "cljs.core.async/t15468";
cljs.core.async.t15468.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15468");
});})(flag))
;
cljs.core.async.t15468.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15468.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15468.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15468.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15470){var self__ = this;
var _15470__$1 = this;return self__.meta15469;
});})(flag))
;
cljs.core.async.t15468.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15470,meta15469__$1){var self__ = this;
var _15470__$1 = this;return (new cljs.core.async.t15468(self__.flag,self__.alt_flag,meta15469__$1));
});})(flag))
;
cljs.core.async.__GT_t15468 = ((function (flag){
return (function __GT_t15468(flag__$1,alt_flag__$1,meta15469){return (new cljs.core.async.t15468(flag__$1,alt_flag__$1,meta15469));
});})(flag))
;
}
return (new cljs.core.async.t15468(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15474 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15474 = (function (cb,flag,alt_handler,meta15475){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15475 = meta15475;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15474.cljs$lang$type = true;
cljs.core.async.t15474.cljs$lang$ctorStr = "cljs.core.async/t15474";
cljs.core.async.t15474.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15474");
});
cljs.core.async.t15474.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15474.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15474.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15474.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15476){var self__ = this;
var _15476__$1 = this;return self__.meta15475;
});
cljs.core.async.t15474.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15476,meta15475__$1){var self__ = this;
var _15476__$1 = this;return (new cljs.core.async.t15474(self__.cb,self__.flag,self__.alt_handler,meta15475__$1));
});
cljs.core.async.__GT_t15474 = (function __GT_t15474(cb__$1,flag__$1,alt_handler__$1,meta15475){return (new cljs.core.async.t15474(cb__$1,flag__$1,alt_handler__$1,meta15475));
});
}
return (new cljs.core.async.t15474(cb,flag,alt_handler,null));
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
return (function (p1__15477_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15477_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3541__auto__ = wport;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15478 = (i + (1));
i = G__15478;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3541__auto__ = ret;if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3529__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3529__auto__;
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
var alts_BANG___delegate = function (ports,p__15479){var map__15481 = p__15479;var map__15481__$1 = ((cljs.core.seq_QMARK_.call(null,map__15481))?cljs.core.apply.call(null,cljs.core.hash_map,map__15481):map__15481);var opts = map__15481__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15479 = null;if (arguments.length > 1) {
  p__15479 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15479);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15482){
var ports = cljs.core.first(arglist__15482);
var p__15479 = cljs.core.rest(arglist__15482);
return alts_BANG___delegate(ports,p__15479);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15490 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15490 = (function (ch,f,map_LT_,meta15491){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15491 = meta15491;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15490.cljs$lang$type = true;
cljs.core.async.t15490.cljs$lang$ctorStr = "cljs.core.async/t15490";
cljs.core.async.t15490.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15490");
});
cljs.core.async.t15490.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15490.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15490.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15490.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15493 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15493 = (function (fn1,_,meta15491,ch,f,map_LT_,meta15494){
this.fn1 = fn1;
this._ = _;
this.meta15491 = meta15491;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15494 = meta15494;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15493.cljs$lang$type = true;
cljs.core.async.t15493.cljs$lang$ctorStr = "cljs.core.async/t15493";
cljs.core.async.t15493.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15493");
});})(___$1))
;
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15493.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15483_SHARP_){return f1.call(null,(((p1__15483_SHARP_ == null))?null:self__.f.call(null,p1__15483_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15493.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15495){var self__ = this;
var _15495__$1 = this;return self__.meta15494;
});})(___$1))
;
cljs.core.async.t15493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15495,meta15494__$1){var self__ = this;
var _15495__$1 = this;return (new cljs.core.async.t15493(self__.fn1,self__._,self__.meta15491,self__.ch,self__.f,self__.map_LT_,meta15494__$1));
});})(___$1))
;
cljs.core.async.__GT_t15493 = ((function (___$1){
return (function __GT_t15493(fn1__$1,___$2,meta15491__$1,ch__$2,f__$2,map_LT___$2,meta15494){return (new cljs.core.async.t15493(fn1__$1,___$2,meta15491__$1,ch__$2,f__$2,map_LT___$2,meta15494));
});})(___$1))
;
}
return (new cljs.core.async.t15493(fn1,___$1,self__.meta15491,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3529__auto__ = ret;if(cljs.core.truth_(and__3529__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3529__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15490.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15490.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15492){var self__ = this;
var _15492__$1 = this;return self__.meta15491;
});
cljs.core.async.t15490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15492,meta15491__$1){var self__ = this;
var _15492__$1 = this;return (new cljs.core.async.t15490(self__.ch,self__.f,self__.map_LT_,meta15491__$1));
});
cljs.core.async.__GT_t15490 = (function __GT_t15490(ch__$1,f__$1,map_LT___$1,meta15491){return (new cljs.core.async.t15490(ch__$1,f__$1,map_LT___$1,meta15491));
});
}
return (new cljs.core.async.t15490(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15499 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15499 = (function (ch,f,map_GT_,meta15500){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15500 = meta15500;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15499.cljs$lang$type = true;
cljs.core.async.t15499.cljs$lang$ctorStr = "cljs.core.async/t15499";
cljs.core.async.t15499.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15499");
});
cljs.core.async.t15499.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15499.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15499.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15499.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15499.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15499.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15501){var self__ = this;
var _15501__$1 = this;return self__.meta15500;
});
cljs.core.async.t15499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15501,meta15500__$1){var self__ = this;
var _15501__$1 = this;return (new cljs.core.async.t15499(self__.ch,self__.f,self__.map_GT_,meta15500__$1));
});
cljs.core.async.__GT_t15499 = (function __GT_t15499(ch__$1,f__$1,map_GT___$1,meta15500){return (new cljs.core.async.t15499(ch__$1,f__$1,map_GT___$1,meta15500));
});
}
return (new cljs.core.async.t15499(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15505 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15505 = (function (ch,p,filter_GT_,meta15506){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15506 = meta15506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15505.cljs$lang$type = true;
cljs.core.async.t15505.cljs$lang$ctorStr = "cljs.core.async/t15505";
cljs.core.async.t15505.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t15505");
});
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15505.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15507){var self__ = this;
var _15507__$1 = this;return self__.meta15506;
});
cljs.core.async.t15505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15507,meta15506__$1){var self__ = this;
var _15507__$1 = this;return (new cljs.core.async.t15505(self__.ch,self__.p,self__.filter_GT_,meta15506__$1));
});
cljs.core.async.__GT_t15505 = (function __GT_t15505(ch__$1,p__$1,filter_GT___$1,meta15506){return (new cljs.core.async.t15505(ch__$1,p__$1,filter_GT___$1,meta15506));
});
}
return (new cljs.core.async.t15505(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___15590 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___15590,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___15590,out){
return (function (state_15569){var state_val_15570 = (state_15569[(1)]);if((state_val_15570 === (7)))
{var inst_15565 = (state_15569[(2)]);var state_15569__$1 = state_15569;var statearr_15571_15591 = state_15569__$1;(statearr_15571_15591[(2)] = inst_15565);
(statearr_15571_15591[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15570 === (1)))
{var state_15569__$1 = state_15569;var statearr_15572_15592 = state_15569__$1;(statearr_15572_15592[(2)] = null);
(statearr_15572_15592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15570 === (4)))
{var inst_15551 = (state_15569[(7)]);var inst_15551__$1 = (state_15569[(2)]);var inst_15552 = (inst_15551__$1 == null);var state_15569__$1 = (function (){var statearr_15573 = state_15569;(statearr_15573[(7)] = inst_15551__$1);
return statearr_15573;
})();if(cljs.core.truth_(inst_15552))
{var statearr_15574_15593 = state_15569__$1;(statearr_15574_15593[(1)] = (5));
} else
{var statearr_15575_15594 = state_15569__$1;(statearr_15575_15594[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15570 === (6)))
{var inst_15551 = (state_15569[(7)]);var inst_15556 = p.call(null,inst_15551);var state_15569__$1 = state_15569;if(cljs.core.truth_(inst_15556))
{var statearr_15576_15595 = state_15569__$1;(statearr_15576_15595[(1)] = (8));
} else
{var statearr_15577_15596 = state_15569__$1;(statearr_15577_15596[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15570 === (3)))
{var inst_15567 = (state_15569[(2)]);var state_15569__$1 = state_15569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15569__$1,inst_15567);
} else
{if((state_val_15570 === (2)))
{var state_15569__$1 = state_15569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15569__$1,(4),ch);
} else
{if((state_val_15570 === (11)))
{var inst_15559 = (state_15569[(2)]);var state_15569__$1 = state_15569;var statearr_15578_15597 = state_15569__$1;(statearr_15578_15597[(2)] = inst_15559);
(statearr_15578_15597[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15570 === (9)))
{var state_15569__$1 = state_15569;var statearr_15579_15598 = state_15569__$1;(statearr_15579_15598[(2)] = null);
(statearr_15579_15598[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15570 === (5)))
{var inst_15554 = cljs.core.async.close_BANG_.call(null,out);var state_15569__$1 = state_15569;var statearr_15580_15599 = state_15569__$1;(statearr_15580_15599[(2)] = inst_15554);
(statearr_15580_15599[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15570 === (10)))
{var inst_15562 = (state_15569[(2)]);var state_15569__$1 = (function (){var statearr_15581 = state_15569;(statearr_15581[(8)] = inst_15562);
return statearr_15581;
})();var statearr_15582_15600 = state_15569__$1;(statearr_15582_15600[(2)] = null);
(statearr_15582_15600[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15570 === (8)))
{var inst_15551 = (state_15569[(7)]);var state_15569__$1 = state_15569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15569__$1,(11),out,inst_15551);
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
});})(c__5691__auto___15590,out))
;return ((function (switch__5676__auto__,c__5691__auto___15590,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_15586 = [null,null,null,null,null,null,null,null,null];(statearr_15586[(0)] = state_machine__5677__auto__);
(statearr_15586[(1)] = (1));
return statearr_15586;
});
var state_machine__5677__auto____1 = (function (state_15569){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_15569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e15587){if((e15587 instanceof Object))
{var ex__5680__auto__ = e15587;var statearr_15588_15601 = state_15569;(statearr_15588_15601[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15569);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15602 = state_15569;
state_15569 = G__15602;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_15569){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_15569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___15590,out))
})();var state__5693__auto__ = (function (){var statearr_15589 = f__5692__auto__.call(null);(statearr_15589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___15590);
return statearr_15589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___15590,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_15754){var state_val_15755 = (state_15754[(1)]);if((state_val_15755 === (7)))
{var inst_15750 = (state_15754[(2)]);var state_15754__$1 = state_15754;var statearr_15756_15793 = state_15754__$1;(statearr_15756_15793[(2)] = inst_15750);
(statearr_15756_15793[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (20)))
{var inst_15725 = (state_15754[(7)]);var inst_15736 = (state_15754[(2)]);var inst_15737 = cljs.core.next.call(null,inst_15725);var inst_15711 = inst_15737;var inst_15712 = null;var inst_15713 = (0);var inst_15714 = (0);var state_15754__$1 = (function (){var statearr_15757 = state_15754;(statearr_15757[(8)] = inst_15714);
(statearr_15757[(9)] = inst_15736);
(statearr_15757[(10)] = inst_15711);
(statearr_15757[(11)] = inst_15713);
(statearr_15757[(12)] = inst_15712);
return statearr_15757;
})();var statearr_15758_15794 = state_15754__$1;(statearr_15758_15794[(2)] = null);
(statearr_15758_15794[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (1)))
{var state_15754__$1 = state_15754;var statearr_15759_15795 = state_15754__$1;(statearr_15759_15795[(2)] = null);
(statearr_15759_15795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (4)))
{var inst_15700 = (state_15754[(13)]);var inst_15700__$1 = (state_15754[(2)]);var inst_15701 = (inst_15700__$1 == null);var state_15754__$1 = (function (){var statearr_15763 = state_15754;(statearr_15763[(13)] = inst_15700__$1);
return statearr_15763;
})();if(cljs.core.truth_(inst_15701))
{var statearr_15764_15796 = state_15754__$1;(statearr_15764_15796[(1)] = (5));
} else
{var statearr_15765_15797 = state_15754__$1;(statearr_15765_15797[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (15)))
{var state_15754__$1 = state_15754;var statearr_15766_15798 = state_15754__$1;(statearr_15766_15798[(2)] = null);
(statearr_15766_15798[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (13)))
{var inst_15714 = (state_15754[(8)]);var inst_15711 = (state_15754[(10)]);var inst_15713 = (state_15754[(11)]);var inst_15712 = (state_15754[(12)]);var inst_15721 = (state_15754[(2)]);var inst_15722 = (inst_15714 + (1));var tmp15760 = inst_15711;var tmp15761 = inst_15713;var tmp15762 = inst_15712;var inst_15711__$1 = tmp15760;var inst_15712__$1 = tmp15762;var inst_15713__$1 = tmp15761;var inst_15714__$1 = inst_15722;var state_15754__$1 = (function (){var statearr_15767 = state_15754;(statearr_15767[(14)] = inst_15721);
(statearr_15767[(8)] = inst_15714__$1);
(statearr_15767[(10)] = inst_15711__$1);
(statearr_15767[(11)] = inst_15713__$1);
(statearr_15767[(12)] = inst_15712__$1);
return statearr_15767;
})();var statearr_15768_15799 = state_15754__$1;(statearr_15768_15799[(2)] = null);
(statearr_15768_15799[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (6)))
{var inst_15700 = (state_15754[(13)]);var inst_15705 = f.call(null,inst_15700);var inst_15710 = cljs.core.seq.call(null,inst_15705);var inst_15711 = inst_15710;var inst_15712 = null;var inst_15713 = (0);var inst_15714 = (0);var state_15754__$1 = (function (){var statearr_15769 = state_15754;(statearr_15769[(8)] = inst_15714);
(statearr_15769[(10)] = inst_15711);
(statearr_15769[(11)] = inst_15713);
(statearr_15769[(12)] = inst_15712);
return statearr_15769;
})();var statearr_15770_15800 = state_15754__$1;(statearr_15770_15800[(2)] = null);
(statearr_15770_15800[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (17)))
{var inst_15725 = (state_15754[(7)]);var inst_15729 = cljs.core.chunk_first.call(null,inst_15725);var inst_15730 = cljs.core.chunk_rest.call(null,inst_15725);var inst_15731 = cljs.core.count.call(null,inst_15729);var inst_15711 = inst_15730;var inst_15712 = inst_15729;var inst_15713 = inst_15731;var inst_15714 = (0);var state_15754__$1 = (function (){var statearr_15771 = state_15754;(statearr_15771[(8)] = inst_15714);
(statearr_15771[(10)] = inst_15711);
(statearr_15771[(11)] = inst_15713);
(statearr_15771[(12)] = inst_15712);
return statearr_15771;
})();var statearr_15772_15801 = state_15754__$1;(statearr_15772_15801[(2)] = null);
(statearr_15772_15801[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (3)))
{var inst_15752 = (state_15754[(2)]);var state_15754__$1 = state_15754;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15754__$1,inst_15752);
} else
{if((state_val_15755 === (12)))
{var inst_15745 = (state_15754[(2)]);var state_15754__$1 = state_15754;var statearr_15773_15802 = state_15754__$1;(statearr_15773_15802[(2)] = inst_15745);
(statearr_15773_15802[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (2)))
{var state_15754__$1 = state_15754;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15754__$1,(4),in$);
} else
{if((state_val_15755 === (19)))
{var inst_15740 = (state_15754[(2)]);var state_15754__$1 = state_15754;var statearr_15774_15803 = state_15754__$1;(statearr_15774_15803[(2)] = inst_15740);
(statearr_15774_15803[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (11)))
{var inst_15725 = (state_15754[(7)]);var inst_15711 = (state_15754[(10)]);var inst_15725__$1 = cljs.core.seq.call(null,inst_15711);var state_15754__$1 = (function (){var statearr_15775 = state_15754;(statearr_15775[(7)] = inst_15725__$1);
return statearr_15775;
})();if(inst_15725__$1)
{var statearr_15776_15804 = state_15754__$1;(statearr_15776_15804[(1)] = (14));
} else
{var statearr_15777_15805 = state_15754__$1;(statearr_15777_15805[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (9)))
{var inst_15747 = (state_15754[(2)]);var state_15754__$1 = (function (){var statearr_15778 = state_15754;(statearr_15778[(15)] = inst_15747);
return statearr_15778;
})();var statearr_15779_15806 = state_15754__$1;(statearr_15779_15806[(2)] = null);
(statearr_15779_15806[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (5)))
{var inst_15703 = cljs.core.async.close_BANG_.call(null,out);var state_15754__$1 = state_15754;var statearr_15780_15807 = state_15754__$1;(statearr_15780_15807[(2)] = inst_15703);
(statearr_15780_15807[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (14)))
{var inst_15725 = (state_15754[(7)]);var inst_15727 = cljs.core.chunked_seq_QMARK_.call(null,inst_15725);var state_15754__$1 = state_15754;if(inst_15727)
{var statearr_15781_15808 = state_15754__$1;(statearr_15781_15808[(1)] = (17));
} else
{var statearr_15782_15809 = state_15754__$1;(statearr_15782_15809[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (16)))
{var inst_15743 = (state_15754[(2)]);var state_15754__$1 = state_15754;var statearr_15783_15810 = state_15754__$1;(statearr_15783_15810[(2)] = inst_15743);
(statearr_15783_15810[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15755 === (10)))
{var inst_15714 = (state_15754[(8)]);var inst_15712 = (state_15754[(12)]);var inst_15719 = cljs.core._nth.call(null,inst_15712,inst_15714);var state_15754__$1 = state_15754;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15754__$1,(13),out,inst_15719);
} else
{if((state_val_15755 === (18)))
{var inst_15725 = (state_15754[(7)]);var inst_15734 = cljs.core.first.call(null,inst_15725);var state_15754__$1 = state_15754;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15754__$1,(20),out,inst_15734);
} else
{if((state_val_15755 === (8)))
{var inst_15714 = (state_15754[(8)]);var inst_15713 = (state_15754[(11)]);var inst_15716 = (inst_15714 < inst_15713);var inst_15717 = inst_15716;var state_15754__$1 = state_15754;if(cljs.core.truth_(inst_15717))
{var statearr_15784_15811 = state_15754__$1;(statearr_15784_15811[(1)] = (10));
} else
{var statearr_15785_15812 = state_15754__$1;(statearr_15785_15812[(1)] = (11));
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_15789 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15789[(0)] = state_machine__5677__auto__);
(statearr_15789[(1)] = (1));
return statearr_15789;
});
var state_machine__5677__auto____1 = (function (state_15754){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_15754);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e15790){if((e15790 instanceof Object))
{var ex__5680__auto__ = e15790;var statearr_15791_15813 = state_15754;(statearr_15791_15813[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15754);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15790;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15814 = state_15754;
state_15754 = G__15814;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_15754){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_15754);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_15792 = f__5692__auto__.call(null);(statearr_15792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_15792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5691__auto___15895 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___15895){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___15895){
return (function (state_15874){var state_val_15875 = (state_15874[(1)]);if((state_val_15875 === (7)))
{var inst_15870 = (state_15874[(2)]);var state_15874__$1 = state_15874;var statearr_15876_15896 = state_15874__$1;(statearr_15876_15896[(2)] = inst_15870);
(statearr_15876_15896[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15875 === (1)))
{var state_15874__$1 = state_15874;var statearr_15877_15897 = state_15874__$1;(statearr_15877_15897[(2)] = null);
(statearr_15877_15897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15875 === (4)))
{var inst_15857 = (state_15874[(7)]);var inst_15857__$1 = (state_15874[(2)]);var inst_15858 = (inst_15857__$1 == null);var state_15874__$1 = (function (){var statearr_15878 = state_15874;(statearr_15878[(7)] = inst_15857__$1);
return statearr_15878;
})();if(cljs.core.truth_(inst_15858))
{var statearr_15879_15898 = state_15874__$1;(statearr_15879_15898[(1)] = (5));
} else
{var statearr_15880_15899 = state_15874__$1;(statearr_15880_15899[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15875 === (6)))
{var inst_15857 = (state_15874[(7)]);var state_15874__$1 = state_15874;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15874__$1,(11),to,inst_15857);
} else
{if((state_val_15875 === (3)))
{var inst_15872 = (state_15874[(2)]);var state_15874__$1 = state_15874;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15874__$1,inst_15872);
} else
{if((state_val_15875 === (2)))
{var state_15874__$1 = state_15874;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15874__$1,(4),from);
} else
{if((state_val_15875 === (11)))
{var inst_15867 = (state_15874[(2)]);var state_15874__$1 = (function (){var statearr_15881 = state_15874;(statearr_15881[(8)] = inst_15867);
return statearr_15881;
})();var statearr_15882_15900 = state_15874__$1;(statearr_15882_15900[(2)] = null);
(statearr_15882_15900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15875 === (9)))
{var state_15874__$1 = state_15874;var statearr_15883_15901 = state_15874__$1;(statearr_15883_15901[(2)] = null);
(statearr_15883_15901[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15875 === (5)))
{var state_15874__$1 = state_15874;if(cljs.core.truth_(close_QMARK_))
{var statearr_15884_15902 = state_15874__$1;(statearr_15884_15902[(1)] = (8));
} else
{var statearr_15885_15903 = state_15874__$1;(statearr_15885_15903[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15875 === (10)))
{var inst_15864 = (state_15874[(2)]);var state_15874__$1 = state_15874;var statearr_15886_15904 = state_15874__$1;(statearr_15886_15904[(2)] = inst_15864);
(statearr_15886_15904[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15875 === (8)))
{var inst_15861 = cljs.core.async.close_BANG_.call(null,to);var state_15874__$1 = state_15874;var statearr_15887_15905 = state_15874__$1;(statearr_15887_15905[(2)] = inst_15861);
(statearr_15887_15905[(1)] = (10));
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
});})(c__5691__auto___15895))
;return ((function (switch__5676__auto__,c__5691__auto___15895){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_15891 = [null,null,null,null,null,null,null,null,null];(statearr_15891[(0)] = state_machine__5677__auto__);
(statearr_15891[(1)] = (1));
return statearr_15891;
});
var state_machine__5677__auto____1 = (function (state_15874){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_15874);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e15892){if((e15892 instanceof Object))
{var ex__5680__auto__ = e15892;var statearr_15893_15906 = state_15874;(statearr_15893_15906[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15874);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15892;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15907 = state_15874;
state_15874 = G__15907;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_15874){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_15874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___15895))
})();var state__5693__auto__ = (function (){var statearr_15894 = f__5692__auto__.call(null);(statearr_15894[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___15895);
return statearr_15894;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___15895))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5691__auto___15994 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___15994,tc,fc){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___15994,tc,fc){
return (function (state_15972){var state_val_15973 = (state_15972[(1)]);if((state_val_15973 === (7)))
{var inst_15968 = (state_15972[(2)]);var state_15972__$1 = state_15972;var statearr_15974_15995 = state_15972__$1;(statearr_15974_15995[(2)] = inst_15968);
(statearr_15974_15995[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (1)))
{var state_15972__$1 = state_15972;var statearr_15975_15996 = state_15972__$1;(statearr_15975_15996[(2)] = null);
(statearr_15975_15996[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (4)))
{var inst_15953 = (state_15972[(7)]);var inst_15953__$1 = (state_15972[(2)]);var inst_15954 = (inst_15953__$1 == null);var state_15972__$1 = (function (){var statearr_15976 = state_15972;(statearr_15976[(7)] = inst_15953__$1);
return statearr_15976;
})();if(cljs.core.truth_(inst_15954))
{var statearr_15977_15997 = state_15972__$1;(statearr_15977_15997[(1)] = (5));
} else
{var statearr_15978_15998 = state_15972__$1;(statearr_15978_15998[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (6)))
{var inst_15953 = (state_15972[(7)]);var inst_15959 = p.call(null,inst_15953);var state_15972__$1 = state_15972;if(cljs.core.truth_(inst_15959))
{var statearr_15979_15999 = state_15972__$1;(statearr_15979_15999[(1)] = (9));
} else
{var statearr_15980_16000 = state_15972__$1;(statearr_15980_16000[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (3)))
{var inst_15970 = (state_15972[(2)]);var state_15972__$1 = state_15972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15972__$1,inst_15970);
} else
{if((state_val_15973 === (2)))
{var state_15972__$1 = state_15972;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15972__$1,(4),ch);
} else
{if((state_val_15973 === (11)))
{var inst_15953 = (state_15972[(7)]);var inst_15963 = (state_15972[(2)]);var state_15972__$1 = state_15972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15972__$1,(8),inst_15963,inst_15953);
} else
{if((state_val_15973 === (9)))
{var state_15972__$1 = state_15972;var statearr_15981_16001 = state_15972__$1;(statearr_15981_16001[(2)] = tc);
(statearr_15981_16001[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (5)))
{var inst_15956 = cljs.core.async.close_BANG_.call(null,tc);var inst_15957 = cljs.core.async.close_BANG_.call(null,fc);var state_15972__$1 = (function (){var statearr_15982 = state_15972;(statearr_15982[(8)] = inst_15956);
return statearr_15982;
})();var statearr_15983_16002 = state_15972__$1;(statearr_15983_16002[(2)] = inst_15957);
(statearr_15983_16002[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (10)))
{var state_15972__$1 = state_15972;var statearr_15984_16003 = state_15972__$1;(statearr_15984_16003[(2)] = fc);
(statearr_15984_16003[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15973 === (8)))
{var inst_15965 = (state_15972[(2)]);var state_15972__$1 = (function (){var statearr_15985 = state_15972;(statearr_15985[(9)] = inst_15965);
return statearr_15985;
})();var statearr_15986_16004 = state_15972__$1;(statearr_15986_16004[(2)] = null);
(statearr_15986_16004[(1)] = (2));
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
});})(c__5691__auto___15994,tc,fc))
;return ((function (switch__5676__auto__,c__5691__auto___15994,tc,fc){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_15990 = [null,null,null,null,null,null,null,null,null,null];(statearr_15990[(0)] = state_machine__5677__auto__);
(statearr_15990[(1)] = (1));
return statearr_15990;
});
var state_machine__5677__auto____1 = (function (state_15972){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_15972);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e15991){if((e15991 instanceof Object))
{var ex__5680__auto__ = e15991;var statearr_15992_16005 = state_15972;(statearr_15992_16005[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15991;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16006 = state_15972;
state_15972 = G__16006;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_15972){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_15972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___15994,tc,fc))
})();var state__5693__auto__ = (function (){var statearr_15993 = f__5692__auto__.call(null);(statearr_15993[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___15994);
return statearr_15993;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___15994,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_16053){var state_val_16054 = (state_16053[(1)]);if((state_val_16054 === (7)))
{var inst_16049 = (state_16053[(2)]);var state_16053__$1 = state_16053;var statearr_16055_16071 = state_16053__$1;(statearr_16055_16071[(2)] = inst_16049);
(statearr_16055_16071[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16054 === (6)))
{var inst_16039 = (state_16053[(7)]);var inst_16042 = (state_16053[(8)]);var inst_16046 = f.call(null,inst_16039,inst_16042);var inst_16039__$1 = inst_16046;var state_16053__$1 = (function (){var statearr_16056 = state_16053;(statearr_16056[(7)] = inst_16039__$1);
return statearr_16056;
})();var statearr_16057_16072 = state_16053__$1;(statearr_16057_16072[(2)] = null);
(statearr_16057_16072[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16054 === (5)))
{var inst_16039 = (state_16053[(7)]);var state_16053__$1 = state_16053;var statearr_16058_16073 = state_16053__$1;(statearr_16058_16073[(2)] = inst_16039);
(statearr_16058_16073[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16054 === (4)))
{var inst_16042 = (state_16053[(8)]);var inst_16042__$1 = (state_16053[(2)]);var inst_16043 = (inst_16042__$1 == null);var state_16053__$1 = (function (){var statearr_16059 = state_16053;(statearr_16059[(8)] = inst_16042__$1);
return statearr_16059;
})();if(cljs.core.truth_(inst_16043))
{var statearr_16060_16074 = state_16053__$1;(statearr_16060_16074[(1)] = (5));
} else
{var statearr_16061_16075 = state_16053__$1;(statearr_16061_16075[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16054 === (3)))
{var inst_16051 = (state_16053[(2)]);var state_16053__$1 = state_16053;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16053__$1,inst_16051);
} else
{if((state_val_16054 === (2)))
{var state_16053__$1 = state_16053;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16053__$1,(4),ch);
} else
{if((state_val_16054 === (1)))
{var inst_16039 = init;var state_16053__$1 = (function (){var statearr_16062 = state_16053;(statearr_16062[(7)] = inst_16039);
return statearr_16062;
})();var statearr_16063_16076 = state_16053__$1;(statearr_16063_16076[(2)] = null);
(statearr_16063_16076[(1)] = (2));
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16067 = [null,null,null,null,null,null,null,null,null];(statearr_16067[(0)] = state_machine__5677__auto__);
(statearr_16067[(1)] = (1));
return statearr_16067;
});
var state_machine__5677__auto____1 = (function (state_16053){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16053);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16068){if((e16068 instanceof Object))
{var ex__5680__auto__ = e16068;var statearr_16069_16077 = state_16053;(statearr_16069_16077[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16053);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16078 = state_16053;
state_16053 = G__16078;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16053){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16053);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_16070 = f__5692__auto__.call(null);(statearr_16070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_16070;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5691__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto__){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto__){
return (function (state_16140){var state_val_16141 = (state_16140[(1)]);if((state_val_16141 === (7)))
{var inst_16121 = (state_16140[(7)]);var inst_16126 = (state_16140[(2)]);var inst_16127 = cljs.core.next.call(null,inst_16121);var inst_16121__$1 = inst_16127;var state_16140__$1 = (function (){var statearr_16142 = state_16140;(statearr_16142[(7)] = inst_16121__$1);
(statearr_16142[(8)] = inst_16126);
return statearr_16142;
})();var statearr_16143_16161 = state_16140__$1;(statearr_16143_16161[(2)] = null);
(statearr_16143_16161[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16141 === (1)))
{var inst_16120 = cljs.core.seq.call(null,coll);var inst_16121 = inst_16120;var state_16140__$1 = (function (){var statearr_16144 = state_16140;(statearr_16144[(7)] = inst_16121);
return statearr_16144;
})();var statearr_16145_16162 = state_16140__$1;(statearr_16145_16162[(2)] = null);
(statearr_16145_16162[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16141 === (4)))
{var inst_16121 = (state_16140[(7)]);var inst_16124 = cljs.core.first.call(null,inst_16121);var state_16140__$1 = state_16140;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16140__$1,(7),ch,inst_16124);
} else
{if((state_val_16141 === (6)))
{var inst_16136 = (state_16140[(2)]);var state_16140__$1 = state_16140;var statearr_16146_16163 = state_16140__$1;(statearr_16146_16163[(2)] = inst_16136);
(statearr_16146_16163[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16141 === (3)))
{var inst_16138 = (state_16140[(2)]);var state_16140__$1 = state_16140;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16140__$1,inst_16138);
} else
{if((state_val_16141 === (2)))
{var inst_16121 = (state_16140[(7)]);var state_16140__$1 = state_16140;if(cljs.core.truth_(inst_16121))
{var statearr_16147_16164 = state_16140__$1;(statearr_16147_16164[(1)] = (4));
} else
{var statearr_16148_16165 = state_16140__$1;(statearr_16148_16165[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16141 === (9)))
{var state_16140__$1 = state_16140;var statearr_16149_16166 = state_16140__$1;(statearr_16149_16166[(2)] = null);
(statearr_16149_16166[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16141 === (5)))
{var state_16140__$1 = state_16140;if(cljs.core.truth_(close_QMARK_))
{var statearr_16150_16167 = state_16140__$1;(statearr_16150_16167[(1)] = (8));
} else
{var statearr_16151_16168 = state_16140__$1;(statearr_16151_16168[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16141 === (10)))
{var inst_16134 = (state_16140[(2)]);var state_16140__$1 = state_16140;var statearr_16152_16169 = state_16140__$1;(statearr_16152_16169[(2)] = inst_16134);
(statearr_16152_16169[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16141 === (8)))
{var inst_16131 = cljs.core.async.close_BANG_.call(null,ch);var state_16140__$1 = state_16140;var statearr_16153_16170 = state_16140__$1;(statearr_16153_16170[(2)] = inst_16131);
(statearr_16153_16170[(1)] = (10));
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
});})(c__5691__auto__))
;return ((function (switch__5676__auto__,c__5691__auto__){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16157 = [null,null,null,null,null,null,null,null,null];(statearr_16157[(0)] = state_machine__5677__auto__);
(statearr_16157[(1)] = (1));
return statearr_16157;
});
var state_machine__5677__auto____1 = (function (state_16140){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16140);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16158){if((e16158 instanceof Object))
{var ex__5680__auto__ = e16158;var statearr_16159_16171 = state_16140;(statearr_16159_16171[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16140);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16158;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16172 = state_16140;
state_16140 = G__16172;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16140){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16140);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto__))
})();var state__5693__auto__ = (function (){var statearr_16160 = f__5692__auto__.call(null);(statearr_16160[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto__);
return statearr_16160;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto__))
);
return c__5691__auto__;
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
cljs.core.async.Mux = (function (){var obj16174 = {};return obj16174;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3529__auto__ = _;if(and__3529__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4168__auto__ = (((_ == null))?null:_);return (function (){var or__3541__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16176 = {};return obj16176;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16400 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16400 = (function (cs,ch,mult,meta16401){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16401 = meta16401;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16400.cljs$lang$type = true;
cljs.core.async.t16400.cljs$lang$ctorStr = "cljs.core.async/t16400";
cljs.core.async.t16400.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t16400");
});})(cs))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16400.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16400.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16400.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16400.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16402){var self__ = this;
var _16402__$1 = this;return self__.meta16401;
});})(cs))
;
cljs.core.async.t16400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16402,meta16401__$1){var self__ = this;
var _16402__$1 = this;return (new cljs.core.async.t16400(self__.cs,self__.ch,self__.mult,meta16401__$1));
});})(cs))
;
cljs.core.async.__GT_t16400 = ((function (cs){
return (function __GT_t16400(cs__$1,ch__$1,mult__$1,meta16401){return (new cljs.core.async.t16400(cs__$1,ch__$1,mult__$1,meta16401));
});})(cs))
;
}
return (new cljs.core.async.t16400(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5691__auto___16623 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___16623,cs,m,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___16623,cs,m,dchan,dctr,done){
return (function (state_16537){var state_val_16538 = (state_16537[(1)]);if((state_val_16538 === (7)))
{var inst_16533 = (state_16537[(2)]);var state_16537__$1 = state_16537;var statearr_16539_16624 = state_16537__$1;(statearr_16539_16624[(2)] = inst_16533);
(statearr_16539_16624[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (20)))
{var inst_16434 = (state_16537[(7)]);var inst_16444 = cljs.core.first.call(null,inst_16434);var inst_16445 = cljs.core.nth.call(null,inst_16444,(0),null);var inst_16446 = cljs.core.nth.call(null,inst_16444,(1),null);var state_16537__$1 = (function (){var statearr_16540 = state_16537;(statearr_16540[(8)] = inst_16445);
return statearr_16540;
})();if(cljs.core.truth_(inst_16446))
{var statearr_16541_16625 = state_16537__$1;(statearr_16541_16625[(1)] = (22));
} else
{var statearr_16542_16626 = state_16537__$1;(statearr_16542_16626[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (27)))
{var inst_16476 = (state_16537[(9)]);var inst_16474 = (state_16537[(10)]);var inst_16481 = cljs.core._nth.call(null,inst_16474,inst_16476);var state_16537__$1 = (function (){var statearr_16543 = state_16537;(statearr_16543[(11)] = inst_16481);
return statearr_16543;
})();var statearr_16544_16627 = state_16537__$1;(statearr_16544_16627[(2)] = null);
(statearr_16544_16627[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (1)))
{var state_16537__$1 = state_16537;var statearr_16545_16628 = state_16537__$1;(statearr_16545_16628[(2)] = null);
(statearr_16545_16628[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (24)))
{var inst_16434 = (state_16537[(7)]);var inst_16451 = (state_16537[(2)]);var inst_16452 = cljs.core.next.call(null,inst_16434);var inst_16414 = inst_16452;var inst_16415 = null;var inst_16416 = (0);var inst_16417 = (0);var state_16537__$1 = (function (){var statearr_16546 = state_16537;(statearr_16546[(12)] = inst_16415);
(statearr_16546[(13)] = inst_16414);
(statearr_16546[(14)] = inst_16451);
(statearr_16546[(15)] = inst_16417);
(statearr_16546[(16)] = inst_16416);
return statearr_16546;
})();var statearr_16547_16629 = state_16537__$1;(statearr_16547_16629[(2)] = null);
(statearr_16547_16629[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (39)))
{var inst_16494 = (state_16537[(17)]);var inst_16512 = (state_16537[(2)]);var inst_16513 = cljs.core.next.call(null,inst_16494);var inst_16473 = inst_16513;var inst_16474 = null;var inst_16475 = (0);var inst_16476 = (0);var state_16537__$1 = (function (){var statearr_16551 = state_16537;(statearr_16551[(18)] = inst_16512);
(statearr_16551[(9)] = inst_16476);
(statearr_16551[(19)] = inst_16475);
(statearr_16551[(10)] = inst_16474);
(statearr_16551[(20)] = inst_16473);
return statearr_16551;
})();var statearr_16552_16630 = state_16537__$1;(statearr_16552_16630[(2)] = null);
(statearr_16552_16630[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (4)))
{var inst_16405 = (state_16537[(21)]);var inst_16405__$1 = (state_16537[(2)]);var inst_16406 = (inst_16405__$1 == null);var state_16537__$1 = (function (){var statearr_16553 = state_16537;(statearr_16553[(21)] = inst_16405__$1);
return statearr_16553;
})();if(cljs.core.truth_(inst_16406))
{var statearr_16554_16631 = state_16537__$1;(statearr_16554_16631[(1)] = (5));
} else
{var statearr_16555_16632 = state_16537__$1;(statearr_16555_16632[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (15)))
{var inst_16415 = (state_16537[(12)]);var inst_16414 = (state_16537[(13)]);var inst_16417 = (state_16537[(15)]);var inst_16416 = (state_16537[(16)]);var inst_16430 = (state_16537[(2)]);var inst_16431 = (inst_16417 + (1));var tmp16548 = inst_16415;var tmp16549 = inst_16414;var tmp16550 = inst_16416;var inst_16414__$1 = tmp16549;var inst_16415__$1 = tmp16548;var inst_16416__$1 = tmp16550;var inst_16417__$1 = inst_16431;var state_16537__$1 = (function (){var statearr_16556 = state_16537;(statearr_16556[(22)] = inst_16430);
(statearr_16556[(12)] = inst_16415__$1);
(statearr_16556[(13)] = inst_16414__$1);
(statearr_16556[(15)] = inst_16417__$1);
(statearr_16556[(16)] = inst_16416__$1);
return statearr_16556;
})();var statearr_16557_16633 = state_16537__$1;(statearr_16557_16633[(2)] = null);
(statearr_16557_16633[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (21)))
{var inst_16455 = (state_16537[(2)]);var state_16537__$1 = state_16537;var statearr_16558_16634 = state_16537__$1;(statearr_16558_16634[(2)] = inst_16455);
(statearr_16558_16634[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (31)))
{var inst_16481 = (state_16537[(11)]);var inst_16482 = (state_16537[(2)]);var inst_16483 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16484 = cljs.core.async.untap_STAR_.call(null,m,inst_16481);var state_16537__$1 = (function (){var statearr_16559 = state_16537;(statearr_16559[(23)] = inst_16482);
(statearr_16559[(24)] = inst_16483);
return statearr_16559;
})();var statearr_16560_16635 = state_16537__$1;(statearr_16560_16635[(2)] = inst_16484);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16537__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (32)))
{var inst_16481 = (state_16537[(11)]);var inst_16405 = (state_16537[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16537,(31),Object,null,(30));var inst_16488 = cljs.core.async.put_BANG_.call(null,inst_16481,inst_16405,done);var state_16537__$1 = state_16537;var statearr_16561_16636 = state_16537__$1;(statearr_16561_16636[(2)] = inst_16488);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16537__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (40)))
{var inst_16503 = (state_16537[(25)]);var inst_16504 = (state_16537[(2)]);var inst_16505 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16506 = cljs.core.async.untap_STAR_.call(null,m,inst_16503);var state_16537__$1 = (function (){var statearr_16562 = state_16537;(statearr_16562[(26)] = inst_16504);
(statearr_16562[(27)] = inst_16505);
return statearr_16562;
})();var statearr_16563_16637 = state_16537__$1;(statearr_16563_16637[(2)] = inst_16506);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16537__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (33)))
{var inst_16494 = (state_16537[(17)]);var inst_16496 = cljs.core.chunked_seq_QMARK_.call(null,inst_16494);var state_16537__$1 = state_16537;if(inst_16496)
{var statearr_16564_16638 = state_16537__$1;(statearr_16564_16638[(1)] = (36));
} else
{var statearr_16565_16639 = state_16537__$1;(statearr_16565_16639[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (13)))
{var inst_16424 = (state_16537[(28)]);var inst_16427 = cljs.core.async.close_BANG_.call(null,inst_16424);var state_16537__$1 = state_16537;var statearr_16566_16640 = state_16537__$1;(statearr_16566_16640[(2)] = inst_16427);
(statearr_16566_16640[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (22)))
{var inst_16445 = (state_16537[(8)]);var inst_16448 = cljs.core.async.close_BANG_.call(null,inst_16445);var state_16537__$1 = state_16537;var statearr_16567_16641 = state_16537__$1;(statearr_16567_16641[(2)] = inst_16448);
(statearr_16567_16641[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (36)))
{var inst_16494 = (state_16537[(17)]);var inst_16498 = cljs.core.chunk_first.call(null,inst_16494);var inst_16499 = cljs.core.chunk_rest.call(null,inst_16494);var inst_16500 = cljs.core.count.call(null,inst_16498);var inst_16473 = inst_16499;var inst_16474 = inst_16498;var inst_16475 = inst_16500;var inst_16476 = (0);var state_16537__$1 = (function (){var statearr_16568 = state_16537;(statearr_16568[(9)] = inst_16476);
(statearr_16568[(19)] = inst_16475);
(statearr_16568[(10)] = inst_16474);
(statearr_16568[(20)] = inst_16473);
return statearr_16568;
})();var statearr_16569_16642 = state_16537__$1;(statearr_16569_16642[(2)] = null);
(statearr_16569_16642[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (41)))
{var inst_16405 = (state_16537[(21)]);var inst_16503 = (state_16537[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16537,(40),Object,null,(39));var inst_16510 = cljs.core.async.put_BANG_.call(null,inst_16503,inst_16405,done);var state_16537__$1 = state_16537;var statearr_16570_16643 = state_16537__$1;(statearr_16570_16643[(2)] = inst_16510);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16537__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (43)))
{var state_16537__$1 = state_16537;var statearr_16571_16644 = state_16537__$1;(statearr_16571_16644[(2)] = null);
(statearr_16571_16644[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (29)))
{var inst_16521 = (state_16537[(2)]);var state_16537__$1 = state_16537;var statearr_16572_16645 = state_16537__$1;(statearr_16572_16645[(2)] = inst_16521);
(statearr_16572_16645[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (44)))
{var inst_16530 = (state_16537[(2)]);var state_16537__$1 = (function (){var statearr_16573 = state_16537;(statearr_16573[(29)] = inst_16530);
return statearr_16573;
})();var statearr_16574_16646 = state_16537__$1;(statearr_16574_16646[(2)] = null);
(statearr_16574_16646[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (6)))
{var inst_16465 = (state_16537[(30)]);var inst_16464 = cljs.core.deref.call(null,cs);var inst_16465__$1 = cljs.core.keys.call(null,inst_16464);var inst_16466 = cljs.core.count.call(null,inst_16465__$1);var inst_16467 = cljs.core.reset_BANG_.call(null,dctr,inst_16466);var inst_16472 = cljs.core.seq.call(null,inst_16465__$1);var inst_16473 = inst_16472;var inst_16474 = null;var inst_16475 = (0);var inst_16476 = (0);var state_16537__$1 = (function (){var statearr_16575 = state_16537;(statearr_16575[(9)] = inst_16476);
(statearr_16575[(31)] = inst_16467);
(statearr_16575[(19)] = inst_16475);
(statearr_16575[(10)] = inst_16474);
(statearr_16575[(30)] = inst_16465__$1);
(statearr_16575[(20)] = inst_16473);
return statearr_16575;
})();var statearr_16576_16647 = state_16537__$1;(statearr_16576_16647[(2)] = null);
(statearr_16576_16647[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (28)))
{var inst_16494 = (state_16537[(17)]);var inst_16473 = (state_16537[(20)]);var inst_16494__$1 = cljs.core.seq.call(null,inst_16473);var state_16537__$1 = (function (){var statearr_16577 = state_16537;(statearr_16577[(17)] = inst_16494__$1);
return statearr_16577;
})();if(inst_16494__$1)
{var statearr_16578_16648 = state_16537__$1;(statearr_16578_16648[(1)] = (33));
} else
{var statearr_16579_16649 = state_16537__$1;(statearr_16579_16649[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (25)))
{var inst_16476 = (state_16537[(9)]);var inst_16475 = (state_16537[(19)]);var inst_16478 = (inst_16476 < inst_16475);var inst_16479 = inst_16478;var state_16537__$1 = state_16537;if(cljs.core.truth_(inst_16479))
{var statearr_16580_16650 = state_16537__$1;(statearr_16580_16650[(1)] = (27));
} else
{var statearr_16581_16651 = state_16537__$1;(statearr_16581_16651[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (34)))
{var state_16537__$1 = state_16537;var statearr_16582_16652 = state_16537__$1;(statearr_16582_16652[(2)] = null);
(statearr_16582_16652[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (17)))
{var state_16537__$1 = state_16537;var statearr_16583_16653 = state_16537__$1;(statearr_16583_16653[(2)] = null);
(statearr_16583_16653[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (3)))
{var inst_16535 = (state_16537[(2)]);var state_16537__$1 = state_16537;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16537__$1,inst_16535);
} else
{if((state_val_16538 === (12)))
{var inst_16460 = (state_16537[(2)]);var state_16537__$1 = state_16537;var statearr_16584_16654 = state_16537__$1;(statearr_16584_16654[(2)] = inst_16460);
(statearr_16584_16654[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (2)))
{var state_16537__$1 = state_16537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16537__$1,(4),ch);
} else
{if((state_val_16538 === (23)))
{var state_16537__$1 = state_16537;var statearr_16585_16655 = state_16537__$1;(statearr_16585_16655[(2)] = null);
(statearr_16585_16655[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (35)))
{var inst_16519 = (state_16537[(2)]);var state_16537__$1 = state_16537;var statearr_16586_16656 = state_16537__$1;(statearr_16586_16656[(2)] = inst_16519);
(statearr_16586_16656[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (19)))
{var inst_16434 = (state_16537[(7)]);var inst_16438 = cljs.core.chunk_first.call(null,inst_16434);var inst_16439 = cljs.core.chunk_rest.call(null,inst_16434);var inst_16440 = cljs.core.count.call(null,inst_16438);var inst_16414 = inst_16439;var inst_16415 = inst_16438;var inst_16416 = inst_16440;var inst_16417 = (0);var state_16537__$1 = (function (){var statearr_16587 = state_16537;(statearr_16587[(12)] = inst_16415);
(statearr_16587[(13)] = inst_16414);
(statearr_16587[(15)] = inst_16417);
(statearr_16587[(16)] = inst_16416);
return statearr_16587;
})();var statearr_16588_16657 = state_16537__$1;(statearr_16588_16657[(2)] = null);
(statearr_16588_16657[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (11)))
{var inst_16414 = (state_16537[(13)]);var inst_16434 = (state_16537[(7)]);var inst_16434__$1 = cljs.core.seq.call(null,inst_16414);var state_16537__$1 = (function (){var statearr_16589 = state_16537;(statearr_16589[(7)] = inst_16434__$1);
return statearr_16589;
})();if(inst_16434__$1)
{var statearr_16590_16658 = state_16537__$1;(statearr_16590_16658[(1)] = (16));
} else
{var statearr_16591_16659 = state_16537__$1;(statearr_16591_16659[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (9)))
{var inst_16462 = (state_16537[(2)]);var state_16537__$1 = state_16537;var statearr_16592_16660 = state_16537__$1;(statearr_16592_16660[(2)] = inst_16462);
(statearr_16592_16660[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (5)))
{var inst_16412 = cljs.core.deref.call(null,cs);var inst_16413 = cljs.core.seq.call(null,inst_16412);var inst_16414 = inst_16413;var inst_16415 = null;var inst_16416 = (0);var inst_16417 = (0);var state_16537__$1 = (function (){var statearr_16593 = state_16537;(statearr_16593[(12)] = inst_16415);
(statearr_16593[(13)] = inst_16414);
(statearr_16593[(15)] = inst_16417);
(statearr_16593[(16)] = inst_16416);
return statearr_16593;
})();var statearr_16594_16661 = state_16537__$1;(statearr_16594_16661[(2)] = null);
(statearr_16594_16661[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (14)))
{var state_16537__$1 = state_16537;var statearr_16595_16662 = state_16537__$1;(statearr_16595_16662[(2)] = null);
(statearr_16595_16662[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (45)))
{var inst_16527 = (state_16537[(2)]);var state_16537__$1 = state_16537;var statearr_16596_16663 = state_16537__$1;(statearr_16596_16663[(2)] = inst_16527);
(statearr_16596_16663[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (26)))
{var inst_16465 = (state_16537[(30)]);var inst_16523 = (state_16537[(2)]);var inst_16524 = cljs.core.seq.call(null,inst_16465);var state_16537__$1 = (function (){var statearr_16597 = state_16537;(statearr_16597[(32)] = inst_16523);
return statearr_16597;
})();if(inst_16524)
{var statearr_16598_16664 = state_16537__$1;(statearr_16598_16664[(1)] = (42));
} else
{var statearr_16599_16665 = state_16537__$1;(statearr_16599_16665[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (16)))
{var inst_16434 = (state_16537[(7)]);var inst_16436 = cljs.core.chunked_seq_QMARK_.call(null,inst_16434);var state_16537__$1 = state_16537;if(inst_16436)
{var statearr_16603_16666 = state_16537__$1;(statearr_16603_16666[(1)] = (19));
} else
{var statearr_16604_16667 = state_16537__$1;(statearr_16604_16667[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (38)))
{var inst_16516 = (state_16537[(2)]);var state_16537__$1 = state_16537;var statearr_16605_16668 = state_16537__$1;(statearr_16605_16668[(2)] = inst_16516);
(statearr_16605_16668[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (30)))
{var inst_16476 = (state_16537[(9)]);var inst_16475 = (state_16537[(19)]);var inst_16474 = (state_16537[(10)]);var inst_16473 = (state_16537[(20)]);var inst_16490 = (state_16537[(2)]);var inst_16491 = (inst_16476 + (1));var tmp16600 = inst_16475;var tmp16601 = inst_16474;var tmp16602 = inst_16473;var inst_16473__$1 = tmp16602;var inst_16474__$1 = tmp16601;var inst_16475__$1 = tmp16600;var inst_16476__$1 = inst_16491;var state_16537__$1 = (function (){var statearr_16606 = state_16537;(statearr_16606[(9)] = inst_16476__$1);
(statearr_16606[(33)] = inst_16490);
(statearr_16606[(19)] = inst_16475__$1);
(statearr_16606[(10)] = inst_16474__$1);
(statearr_16606[(20)] = inst_16473__$1);
return statearr_16606;
})();var statearr_16607_16669 = state_16537__$1;(statearr_16607_16669[(2)] = null);
(statearr_16607_16669[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (10)))
{var inst_16415 = (state_16537[(12)]);var inst_16417 = (state_16537[(15)]);var inst_16423 = cljs.core._nth.call(null,inst_16415,inst_16417);var inst_16424 = cljs.core.nth.call(null,inst_16423,(0),null);var inst_16425 = cljs.core.nth.call(null,inst_16423,(1),null);var state_16537__$1 = (function (){var statearr_16608 = state_16537;(statearr_16608[(28)] = inst_16424);
return statearr_16608;
})();if(cljs.core.truth_(inst_16425))
{var statearr_16609_16670 = state_16537__$1;(statearr_16609_16670[(1)] = (13));
} else
{var statearr_16610_16671 = state_16537__$1;(statearr_16610_16671[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (18)))
{var inst_16458 = (state_16537[(2)]);var state_16537__$1 = state_16537;var statearr_16611_16672 = state_16537__$1;(statearr_16611_16672[(2)] = inst_16458);
(statearr_16611_16672[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (42)))
{var state_16537__$1 = state_16537;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16537__$1,(45),dchan);
} else
{if((state_val_16538 === (37)))
{var inst_16494 = (state_16537[(17)]);var inst_16503 = cljs.core.first.call(null,inst_16494);var state_16537__$1 = (function (){var statearr_16612 = state_16537;(statearr_16612[(25)] = inst_16503);
return statearr_16612;
})();var statearr_16613_16673 = state_16537__$1;(statearr_16613_16673[(2)] = null);
(statearr_16613_16673[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16538 === (8)))
{var inst_16417 = (state_16537[(15)]);var inst_16416 = (state_16537[(16)]);var inst_16419 = (inst_16417 < inst_16416);var inst_16420 = inst_16419;var state_16537__$1 = state_16537;if(cljs.core.truth_(inst_16420))
{var statearr_16614_16674 = state_16537__$1;(statearr_16614_16674[(1)] = (10));
} else
{var statearr_16615_16675 = state_16537__$1;(statearr_16615_16675[(1)] = (11));
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
});})(c__5691__auto___16623,cs,m,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___16623,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16619[(0)] = state_machine__5677__auto__);
(statearr_16619[(1)] = (1));
return statearr_16619;
});
var state_machine__5677__auto____1 = (function (state_16537){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16537);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16620){if((e16620 instanceof Object))
{var ex__5680__auto__ = e16620;var statearr_16621_16676 = state_16537;(statearr_16621_16676[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16537);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16677 = state_16537;
state_16537 = G__16677;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16537){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___16623,cs,m,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_16622 = f__5692__auto__.call(null);(statearr_16622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___16623);
return statearr_16622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___16623,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16679 = {};return obj16679;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3529__auto__ = m;if(and__3529__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4168__auto__ = (((m == null))?null:m);return (function (){var or__3541__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t16789 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16789 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16790){
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
this.meta16790 = meta16790;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16789.cljs$lang$type = true;
cljs.core.async.t16789.cljs$lang$ctorStr = "cljs.core.async/t16789";
cljs.core.async.t16789.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t16789");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16789.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16789.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16789.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16789.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16789.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16789.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16789.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16789.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16789.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16791){var self__ = this;
var _16791__$1 = this;return self__.meta16790;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16789.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16791,meta16790__$1){var self__ = this;
var _16791__$1 = this;return (new cljs.core.async.t16789(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16790__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16789 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16789(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16790){return (new cljs.core.async.t16789(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16790));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16789(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5691__auto___16898 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___16898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___16898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16856){var state_val_16857 = (state_16856[(1)]);if((state_val_16857 === (7)))
{var inst_16805 = (state_16856[(7)]);var inst_16810 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16805);var state_16856__$1 = state_16856;var statearr_16858_16899 = state_16856__$1;(statearr_16858_16899[(2)] = inst_16810);
(statearr_16858_16899[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (20)))
{var inst_16820 = (state_16856[(8)]);var state_16856__$1 = state_16856;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16856__$1,(23),out,inst_16820);
} else
{if((state_val_16857 === (1)))
{var inst_16795 = (state_16856[(9)]);var inst_16795__$1 = calc_state.call(null);var inst_16796 = cljs.core.seq_QMARK_.call(null,inst_16795__$1);var state_16856__$1 = (function (){var statearr_16859 = state_16856;(statearr_16859[(9)] = inst_16795__$1);
return statearr_16859;
})();if(inst_16796)
{var statearr_16860_16900 = state_16856__$1;(statearr_16860_16900[(1)] = (2));
} else
{var statearr_16861_16901 = state_16856__$1;(statearr_16861_16901[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (4)))
{var inst_16795 = (state_16856[(9)]);var inst_16801 = (state_16856[(2)]);var inst_16802 = cljs.core.get.call(null,inst_16801,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16803 = cljs.core.get.call(null,inst_16801,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16804 = cljs.core.get.call(null,inst_16801,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16805 = inst_16795;var state_16856__$1 = (function (){var statearr_16862 = state_16856;(statearr_16862[(10)] = inst_16803);
(statearr_16862[(11)] = inst_16802);
(statearr_16862[(7)] = inst_16805);
(statearr_16862[(12)] = inst_16804);
return statearr_16862;
})();var statearr_16863_16902 = state_16856__$1;(statearr_16863_16902[(2)] = null);
(statearr_16863_16902[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (15)))
{var state_16856__$1 = state_16856;var statearr_16864_16903 = state_16856__$1;(statearr_16864_16903[(2)] = null);
(statearr_16864_16903[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (21)))
{var state_16856__$1 = state_16856;var statearr_16865_16904 = state_16856__$1;(statearr_16865_16904[(2)] = null);
(statearr_16865_16904[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (13)))
{var inst_16852 = (state_16856[(2)]);var state_16856__$1 = state_16856;var statearr_16866_16905 = state_16856__$1;(statearr_16866_16905[(2)] = inst_16852);
(statearr_16866_16905[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (22)))
{var inst_16813 = (state_16856[(13)]);var inst_16849 = (state_16856[(2)]);var inst_16805 = inst_16813;var state_16856__$1 = (function (){var statearr_16867 = state_16856;(statearr_16867[(14)] = inst_16849);
(statearr_16867[(7)] = inst_16805);
return statearr_16867;
})();var statearr_16868_16906 = state_16856__$1;(statearr_16868_16906[(2)] = null);
(statearr_16868_16906[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (6)))
{var inst_16854 = (state_16856[(2)]);var state_16856__$1 = state_16856;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16856__$1,inst_16854);
} else
{if((state_val_16857 === (17)))
{var inst_16835 = (state_16856[(15)]);var state_16856__$1 = state_16856;var statearr_16869_16907 = state_16856__$1;(statearr_16869_16907[(2)] = inst_16835);
(statearr_16869_16907[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (3)))
{var inst_16795 = (state_16856[(9)]);var state_16856__$1 = state_16856;var statearr_16870_16908 = state_16856__$1;(statearr_16870_16908[(2)] = inst_16795);
(statearr_16870_16908[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (12)))
{var inst_16821 = (state_16856[(16)]);var inst_16835 = (state_16856[(15)]);var inst_16816 = (state_16856[(17)]);var inst_16835__$1 = inst_16816.call(null,inst_16821);var state_16856__$1 = (function (){var statearr_16871 = state_16856;(statearr_16871[(15)] = inst_16835__$1);
return statearr_16871;
})();if(cljs.core.truth_(inst_16835__$1))
{var statearr_16872_16909 = state_16856__$1;(statearr_16872_16909[(1)] = (17));
} else
{var statearr_16873_16910 = state_16856__$1;(statearr_16873_16910[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (2)))
{var inst_16795 = (state_16856[(9)]);var inst_16798 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16795);var state_16856__$1 = state_16856;var statearr_16874_16911 = state_16856__$1;(statearr_16874_16911[(2)] = inst_16798);
(statearr_16874_16911[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (23)))
{var inst_16846 = (state_16856[(2)]);var state_16856__$1 = state_16856;var statearr_16875_16912 = state_16856__$1;(statearr_16875_16912[(2)] = inst_16846);
(statearr_16875_16912[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (19)))
{var inst_16843 = (state_16856[(2)]);var state_16856__$1 = state_16856;if(cljs.core.truth_(inst_16843))
{var statearr_16876_16913 = state_16856__$1;(statearr_16876_16913[(1)] = (20));
} else
{var statearr_16877_16914 = state_16856__$1;(statearr_16877_16914[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (11)))
{var inst_16820 = (state_16856[(8)]);var inst_16826 = (inst_16820 == null);var state_16856__$1 = state_16856;if(cljs.core.truth_(inst_16826))
{var statearr_16878_16915 = state_16856__$1;(statearr_16878_16915[(1)] = (14));
} else
{var statearr_16879_16916 = state_16856__$1;(statearr_16879_16916[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (9)))
{var inst_16813 = (state_16856[(13)]);var inst_16813__$1 = (state_16856[(2)]);var inst_16814 = cljs.core.get.call(null,inst_16813__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16815 = cljs.core.get.call(null,inst_16813__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16816 = cljs.core.get.call(null,inst_16813__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16856__$1 = (function (){var statearr_16880 = state_16856;(statearr_16880[(17)] = inst_16816);
(statearr_16880[(18)] = inst_16815);
(statearr_16880[(13)] = inst_16813__$1);
return statearr_16880;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16856__$1,(10),inst_16814);
} else
{if((state_val_16857 === (5)))
{var inst_16805 = (state_16856[(7)]);var inst_16808 = cljs.core.seq_QMARK_.call(null,inst_16805);var state_16856__$1 = state_16856;if(inst_16808)
{var statearr_16881_16917 = state_16856__$1;(statearr_16881_16917[(1)] = (7));
} else
{var statearr_16882_16918 = state_16856__$1;(statearr_16882_16918[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (14)))
{var inst_16821 = (state_16856[(16)]);var inst_16828 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16821);var state_16856__$1 = state_16856;var statearr_16883_16919 = state_16856__$1;(statearr_16883_16919[(2)] = inst_16828);
(statearr_16883_16919[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (16)))
{var inst_16831 = (state_16856[(2)]);var inst_16832 = calc_state.call(null);var inst_16805 = inst_16832;var state_16856__$1 = (function (){var statearr_16884 = state_16856;(statearr_16884[(7)] = inst_16805);
(statearr_16884[(19)] = inst_16831);
return statearr_16884;
})();var statearr_16885_16920 = state_16856__$1;(statearr_16885_16920[(2)] = null);
(statearr_16885_16920[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (10)))
{var inst_16821 = (state_16856[(16)]);var inst_16820 = (state_16856[(8)]);var inst_16819 = (state_16856[(2)]);var inst_16820__$1 = cljs.core.nth.call(null,inst_16819,(0),null);var inst_16821__$1 = cljs.core.nth.call(null,inst_16819,(1),null);var inst_16822 = (inst_16820__$1 == null);var inst_16823 = cljs.core._EQ_.call(null,inst_16821__$1,change);var inst_16824 = (inst_16822) || (inst_16823);var state_16856__$1 = (function (){var statearr_16886 = state_16856;(statearr_16886[(16)] = inst_16821__$1);
(statearr_16886[(8)] = inst_16820__$1);
return statearr_16886;
})();if(cljs.core.truth_(inst_16824))
{var statearr_16887_16921 = state_16856__$1;(statearr_16887_16921[(1)] = (11));
} else
{var statearr_16888_16922 = state_16856__$1;(statearr_16888_16922[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (18)))
{var inst_16821 = (state_16856[(16)]);var inst_16816 = (state_16856[(17)]);var inst_16815 = (state_16856[(18)]);var inst_16838 = cljs.core.empty_QMARK_.call(null,inst_16816);var inst_16839 = inst_16815.call(null,inst_16821);var inst_16840 = cljs.core.not.call(null,inst_16839);var inst_16841 = (inst_16838) && (inst_16840);var state_16856__$1 = state_16856;var statearr_16889_16923 = state_16856__$1;(statearr_16889_16923[(2)] = inst_16841);
(statearr_16889_16923[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16857 === (8)))
{var inst_16805 = (state_16856[(7)]);var state_16856__$1 = state_16856;var statearr_16890_16924 = state_16856__$1;(statearr_16890_16924[(2)] = inst_16805);
(statearr_16890_16924[(1)] = (9));
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
});})(c__5691__auto___16898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5676__auto__,c__5691__auto___16898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_16894 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16894[(0)] = state_machine__5677__auto__);
(statearr_16894[(1)] = (1));
return statearr_16894;
});
var state_machine__5677__auto____1 = (function (state_16856){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_16856);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e16895){if((e16895 instanceof Object))
{var ex__5680__auto__ = e16895;var statearr_16896_16925 = state_16856;(statearr_16896_16925[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16856);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16895;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16926 = state_16856;
state_16856 = G__16926;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_16856){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_16856);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___16898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5693__auto__ = (function (){var statearr_16897 = f__5692__auto__.call(null);(statearr_16897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___16898);
return statearr_16897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___16898,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16928 = {};return obj16928;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3529__auto__ = p;if(and__3529__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3529__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4168__auto__ = (((p == null))?null:p);return (function (){var or__3541__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4168__auto__)]);if(or__3541__auto__)
{return or__3541__auto__;
} else
{var or__3541__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3541__auto____$1)
{return or__3541__auto____$1;
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
return (function (topic){var or__3541__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3541__auto__))
{return or__3541__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3541__auto__,mults){
return (function (p1__16929_SHARP_){if(cljs.core.truth_(p1__16929_SHARP_.call(null,topic)))
{return p1__16929_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16929_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3541__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17054 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17055){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17055 = meta17055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17054.cljs$lang$type = true;
cljs.core.async.t17054.cljs$lang$ctorStr = "cljs.core.async/t17054";
cljs.core.async.t17054.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write.call(null,writer__4109__auto__,"cljs.core.async/t17054");
});})(mults,ensure_mult))
;
cljs.core.async.t17054.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17054.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17054.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17054.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17054.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17054.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17054.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17054.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17056){var self__ = this;
var _17056__$1 = this;return self__.meta17055;
});})(mults,ensure_mult))
;
cljs.core.async.t17054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17056,meta17055__$1){var self__ = this;
var _17056__$1 = this;return (new cljs.core.async.t17054(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17055__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17054 = ((function (mults,ensure_mult){
return (function __GT_t17054(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17055){return (new cljs.core.async.t17054(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17055));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17054(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5691__auto___17178 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___17178,mults,ensure_mult,p){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___17178,mults,ensure_mult,p){
return (function (state_17130){var state_val_17131 = (state_17130[(1)]);if((state_val_17131 === (7)))
{var inst_17126 = (state_17130[(2)]);var state_17130__$1 = state_17130;var statearr_17132_17179 = state_17130__$1;(statearr_17132_17179[(2)] = inst_17126);
(statearr_17132_17179[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (20)))
{var state_17130__$1 = state_17130;var statearr_17133_17180 = state_17130__$1;(statearr_17133_17180[(2)] = null);
(statearr_17133_17180[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (1)))
{var state_17130__$1 = state_17130;var statearr_17134_17181 = state_17130__$1;(statearr_17134_17181[(2)] = null);
(statearr_17134_17181[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (24)))
{var inst_17109 = (state_17130[(7)]);var inst_17059 = (state_17130[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17130,(23),Object,null,(22));var inst_17116 = cljs.core.async.muxch_STAR_.call(null,inst_17109);var state_17130__$1 = state_17130;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17130__$1,(25),inst_17116,inst_17059);
} else
{if((state_val_17131 === (4)))
{var inst_17059 = (state_17130[(8)]);var inst_17059__$1 = (state_17130[(2)]);var inst_17060 = (inst_17059__$1 == null);var state_17130__$1 = (function (){var statearr_17135 = state_17130;(statearr_17135[(8)] = inst_17059__$1);
return statearr_17135;
})();if(cljs.core.truth_(inst_17060))
{var statearr_17136_17182 = state_17130__$1;(statearr_17136_17182[(1)] = (5));
} else
{var statearr_17137_17183 = state_17130__$1;(statearr_17137_17183[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (15)))
{var inst_17101 = (state_17130[(2)]);var state_17130__$1 = state_17130;var statearr_17138_17184 = state_17130__$1;(statearr_17138_17184[(2)] = inst_17101);
(statearr_17138_17184[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (21)))
{var inst_17123 = (state_17130[(2)]);var state_17130__$1 = (function (){var statearr_17139 = state_17130;(statearr_17139[(9)] = inst_17123);
return statearr_17139;
})();var statearr_17140_17185 = state_17130__$1;(statearr_17140_17185[(2)] = null);
(statearr_17140_17185[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (13)))
{var inst_17083 = (state_17130[(10)]);var inst_17085 = cljs.core.chunked_seq_QMARK_.call(null,inst_17083);var state_17130__$1 = state_17130;if(inst_17085)
{var statearr_17141_17186 = state_17130__$1;(statearr_17141_17186[(1)] = (16));
} else
{var statearr_17142_17187 = state_17130__$1;(statearr_17142_17187[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (22)))
{var inst_17120 = (state_17130[(2)]);var state_17130__$1 = state_17130;var statearr_17143_17188 = state_17130__$1;(statearr_17143_17188[(2)] = inst_17120);
(statearr_17143_17188[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (6)))
{var inst_17109 = (state_17130[(7)]);var inst_17107 = (state_17130[(11)]);var inst_17059 = (state_17130[(8)]);var inst_17107__$1 = topic_fn.call(null,inst_17059);var inst_17108 = cljs.core.deref.call(null,mults);var inst_17109__$1 = cljs.core.get.call(null,inst_17108,inst_17107__$1);var state_17130__$1 = (function (){var statearr_17144 = state_17130;(statearr_17144[(7)] = inst_17109__$1);
(statearr_17144[(11)] = inst_17107__$1);
return statearr_17144;
})();if(cljs.core.truth_(inst_17109__$1))
{var statearr_17145_17189 = state_17130__$1;(statearr_17145_17189[(1)] = (19));
} else
{var statearr_17146_17190 = state_17130__$1;(statearr_17146_17190[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (25)))
{var inst_17118 = (state_17130[(2)]);var state_17130__$1 = state_17130;var statearr_17147_17191 = state_17130__$1;(statearr_17147_17191[(2)] = inst_17118);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17130__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (17)))
{var inst_17083 = (state_17130[(10)]);var inst_17092 = cljs.core.first.call(null,inst_17083);var inst_17093 = cljs.core.async.muxch_STAR_.call(null,inst_17092);var inst_17094 = cljs.core.async.close_BANG_.call(null,inst_17093);var inst_17095 = cljs.core.next.call(null,inst_17083);var inst_17069 = inst_17095;var inst_17070 = null;var inst_17071 = (0);var inst_17072 = (0);var state_17130__$1 = (function (){var statearr_17148 = state_17130;(statearr_17148[(12)] = inst_17094);
(statearr_17148[(13)] = inst_17069);
(statearr_17148[(14)] = inst_17072);
(statearr_17148[(15)] = inst_17071);
(statearr_17148[(16)] = inst_17070);
return statearr_17148;
})();var statearr_17149_17192 = state_17130__$1;(statearr_17149_17192[(2)] = null);
(statearr_17149_17192[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (3)))
{var inst_17128 = (state_17130[(2)]);var state_17130__$1 = state_17130;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17130__$1,inst_17128);
} else
{if((state_val_17131 === (12)))
{var inst_17103 = (state_17130[(2)]);var state_17130__$1 = state_17130;var statearr_17150_17193 = state_17130__$1;(statearr_17150_17193[(2)] = inst_17103);
(statearr_17150_17193[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (2)))
{var state_17130__$1 = state_17130;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17130__$1,(4),ch);
} else
{if((state_val_17131 === (23)))
{var inst_17107 = (state_17130[(11)]);var inst_17111 = (state_17130[(2)]);var inst_17112 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17107);var state_17130__$1 = (function (){var statearr_17151 = state_17130;(statearr_17151[(17)] = inst_17111);
return statearr_17151;
})();var statearr_17152_17194 = state_17130__$1;(statearr_17152_17194[(2)] = inst_17112);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17130__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (19)))
{var state_17130__$1 = state_17130;var statearr_17153_17195 = state_17130__$1;(statearr_17153_17195[(2)] = null);
(statearr_17153_17195[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (11)))
{var inst_17083 = (state_17130[(10)]);var inst_17069 = (state_17130[(13)]);var inst_17083__$1 = cljs.core.seq.call(null,inst_17069);var state_17130__$1 = (function (){var statearr_17154 = state_17130;(statearr_17154[(10)] = inst_17083__$1);
return statearr_17154;
})();if(inst_17083__$1)
{var statearr_17155_17196 = state_17130__$1;(statearr_17155_17196[(1)] = (13));
} else
{var statearr_17156_17197 = state_17130__$1;(statearr_17156_17197[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (9)))
{var inst_17105 = (state_17130[(2)]);var state_17130__$1 = state_17130;var statearr_17157_17198 = state_17130__$1;(statearr_17157_17198[(2)] = inst_17105);
(statearr_17157_17198[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (5)))
{var inst_17066 = cljs.core.deref.call(null,mults);var inst_17067 = cljs.core.vals.call(null,inst_17066);var inst_17068 = cljs.core.seq.call(null,inst_17067);var inst_17069 = inst_17068;var inst_17070 = null;var inst_17071 = (0);var inst_17072 = (0);var state_17130__$1 = (function (){var statearr_17158 = state_17130;(statearr_17158[(13)] = inst_17069);
(statearr_17158[(14)] = inst_17072);
(statearr_17158[(15)] = inst_17071);
(statearr_17158[(16)] = inst_17070);
return statearr_17158;
})();var statearr_17159_17199 = state_17130__$1;(statearr_17159_17199[(2)] = null);
(statearr_17159_17199[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (14)))
{var state_17130__$1 = state_17130;var statearr_17163_17200 = state_17130__$1;(statearr_17163_17200[(2)] = null);
(statearr_17163_17200[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (16)))
{var inst_17083 = (state_17130[(10)]);var inst_17087 = cljs.core.chunk_first.call(null,inst_17083);var inst_17088 = cljs.core.chunk_rest.call(null,inst_17083);var inst_17089 = cljs.core.count.call(null,inst_17087);var inst_17069 = inst_17088;var inst_17070 = inst_17087;var inst_17071 = inst_17089;var inst_17072 = (0);var state_17130__$1 = (function (){var statearr_17164 = state_17130;(statearr_17164[(13)] = inst_17069);
(statearr_17164[(14)] = inst_17072);
(statearr_17164[(15)] = inst_17071);
(statearr_17164[(16)] = inst_17070);
return statearr_17164;
})();var statearr_17165_17201 = state_17130__$1;(statearr_17165_17201[(2)] = null);
(statearr_17165_17201[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (10)))
{var inst_17069 = (state_17130[(13)]);var inst_17072 = (state_17130[(14)]);var inst_17071 = (state_17130[(15)]);var inst_17070 = (state_17130[(16)]);var inst_17077 = cljs.core._nth.call(null,inst_17070,inst_17072);var inst_17078 = cljs.core.async.muxch_STAR_.call(null,inst_17077);var inst_17079 = cljs.core.async.close_BANG_.call(null,inst_17078);var inst_17080 = (inst_17072 + (1));var tmp17160 = inst_17069;var tmp17161 = inst_17071;var tmp17162 = inst_17070;var inst_17069__$1 = tmp17160;var inst_17070__$1 = tmp17162;var inst_17071__$1 = tmp17161;var inst_17072__$1 = inst_17080;var state_17130__$1 = (function (){var statearr_17166 = state_17130;(statearr_17166[(13)] = inst_17069__$1);
(statearr_17166[(14)] = inst_17072__$1);
(statearr_17166[(15)] = inst_17071__$1);
(statearr_17166[(18)] = inst_17079);
(statearr_17166[(16)] = inst_17070__$1);
return statearr_17166;
})();var statearr_17167_17202 = state_17130__$1;(statearr_17167_17202[(2)] = null);
(statearr_17167_17202[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (18)))
{var inst_17098 = (state_17130[(2)]);var state_17130__$1 = state_17130;var statearr_17168_17203 = state_17130__$1;(statearr_17168_17203[(2)] = inst_17098);
(statearr_17168_17203[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17131 === (8)))
{var inst_17072 = (state_17130[(14)]);var inst_17071 = (state_17130[(15)]);var inst_17074 = (inst_17072 < inst_17071);var inst_17075 = inst_17074;var state_17130__$1 = state_17130;if(cljs.core.truth_(inst_17075))
{var statearr_17169_17204 = state_17130__$1;(statearr_17169_17204[(1)] = (10));
} else
{var statearr_17170_17205 = state_17130__$1;(statearr_17170_17205[(1)] = (11));
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
});})(c__5691__auto___17178,mults,ensure_mult,p))
;return ((function (switch__5676__auto__,c__5691__auto___17178,mults,ensure_mult,p){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_17174 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17174[(0)] = state_machine__5677__auto__);
(statearr_17174[(1)] = (1));
return statearr_17174;
});
var state_machine__5677__auto____1 = (function (state_17130){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_17130);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e17175){if((e17175 instanceof Object))
{var ex__5680__auto__ = e17175;var statearr_17176_17206 = state_17130;(statearr_17176_17206[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17130);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17175;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17207 = state_17130;
state_17130 = G__17207;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_17130){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_17130);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___17178,mults,ensure_mult,p))
})();var state__5693__auto__ = (function (){var statearr_17177 = f__5692__auto__.call(null);(statearr_17177[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___17178);
return statearr_17177;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___17178,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5691__auto___17344 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___17344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___17344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17314){var state_val_17315 = (state_17314[(1)]);if((state_val_17315 === (7)))
{var state_17314__$1 = state_17314;var statearr_17316_17345 = state_17314__$1;(statearr_17316_17345[(2)] = null);
(statearr_17316_17345[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (1)))
{var state_17314__$1 = state_17314;var statearr_17317_17346 = state_17314__$1;(statearr_17317_17346[(2)] = null);
(statearr_17317_17346[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (4)))
{var inst_17278 = (state_17314[(7)]);var inst_17280 = (inst_17278 < cnt);var state_17314__$1 = state_17314;if(cljs.core.truth_(inst_17280))
{var statearr_17318_17347 = state_17314__$1;(statearr_17318_17347[(1)] = (6));
} else
{var statearr_17319_17348 = state_17314__$1;(statearr_17319_17348[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (15)))
{var inst_17310 = (state_17314[(2)]);var state_17314__$1 = state_17314;var statearr_17320_17349 = state_17314__$1;(statearr_17320_17349[(2)] = inst_17310);
(statearr_17320_17349[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (13)))
{var inst_17303 = cljs.core.async.close_BANG_.call(null,out);var state_17314__$1 = state_17314;var statearr_17321_17350 = state_17314__$1;(statearr_17321_17350[(2)] = inst_17303);
(statearr_17321_17350[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (6)))
{var state_17314__$1 = state_17314;var statearr_17322_17351 = state_17314__$1;(statearr_17322_17351[(2)] = null);
(statearr_17322_17351[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (3)))
{var inst_17312 = (state_17314[(2)]);var state_17314__$1 = state_17314;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17314__$1,inst_17312);
} else
{if((state_val_17315 === (12)))
{var inst_17300 = (state_17314[(8)]);var inst_17300__$1 = (state_17314[(2)]);var inst_17301 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17300__$1);var state_17314__$1 = (function (){var statearr_17323 = state_17314;(statearr_17323[(8)] = inst_17300__$1);
return statearr_17323;
})();if(cljs.core.truth_(inst_17301))
{var statearr_17324_17352 = state_17314__$1;(statearr_17324_17352[(1)] = (13));
} else
{var statearr_17325_17353 = state_17314__$1;(statearr_17325_17353[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (2)))
{var inst_17277 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17278 = (0);var state_17314__$1 = (function (){var statearr_17326 = state_17314;(statearr_17326[(9)] = inst_17277);
(statearr_17326[(7)] = inst_17278);
return statearr_17326;
})();var statearr_17327_17354 = state_17314__$1;(statearr_17327_17354[(2)] = null);
(statearr_17327_17354[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (11)))
{var inst_17278 = (state_17314[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17314,(10),Object,null,(9));var inst_17287 = chs__$1.call(null,inst_17278);var inst_17288 = done.call(null,inst_17278);var inst_17289 = cljs.core.async.take_BANG_.call(null,inst_17287,inst_17288);var state_17314__$1 = state_17314;var statearr_17328_17355 = state_17314__$1;(statearr_17328_17355[(2)] = inst_17289);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17314__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (9)))
{var inst_17278 = (state_17314[(7)]);var inst_17291 = (state_17314[(2)]);var inst_17292 = (inst_17278 + (1));var inst_17278__$1 = inst_17292;var state_17314__$1 = (function (){var statearr_17329 = state_17314;(statearr_17329[(7)] = inst_17278__$1);
(statearr_17329[(10)] = inst_17291);
return statearr_17329;
})();var statearr_17330_17356 = state_17314__$1;(statearr_17330_17356[(2)] = null);
(statearr_17330_17356[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (5)))
{var inst_17298 = (state_17314[(2)]);var state_17314__$1 = (function (){var statearr_17331 = state_17314;(statearr_17331[(11)] = inst_17298);
return statearr_17331;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17314__$1,(12),dchan);
} else
{if((state_val_17315 === (14)))
{var inst_17300 = (state_17314[(8)]);var inst_17305 = cljs.core.apply.call(null,f,inst_17300);var state_17314__$1 = state_17314;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17314__$1,(16),out,inst_17305);
} else
{if((state_val_17315 === (16)))
{var inst_17307 = (state_17314[(2)]);var state_17314__$1 = (function (){var statearr_17332 = state_17314;(statearr_17332[(12)] = inst_17307);
return statearr_17332;
})();var statearr_17333_17357 = state_17314__$1;(statearr_17333_17357[(2)] = null);
(statearr_17333_17357[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (10)))
{var inst_17282 = (state_17314[(2)]);var inst_17283 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17314__$1 = (function (){var statearr_17334 = state_17314;(statearr_17334[(13)] = inst_17282);
return statearr_17334;
})();var statearr_17335_17358 = state_17314__$1;(statearr_17335_17358[(2)] = inst_17283);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17314__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17315 === (8)))
{var inst_17296 = (state_17314[(2)]);var state_17314__$1 = state_17314;var statearr_17336_17359 = state_17314__$1;(statearr_17336_17359[(2)] = inst_17296);
(statearr_17336_17359[(1)] = (5));
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
});})(c__5691__auto___17344,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5676__auto__,c__5691__auto___17344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_17340 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17340[(0)] = state_machine__5677__auto__);
(statearr_17340[(1)] = (1));
return statearr_17340;
});
var state_machine__5677__auto____1 = (function (state_17314){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_17314);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e17341){if((e17341 instanceof Object))
{var ex__5680__auto__ = e17341;var statearr_17342_17360 = state_17314;(statearr_17342_17360[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17314);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17361 = state_17314;
state_17314 = G__17361;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_17314){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_17314);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___17344,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5693__auto__ = (function (){var statearr_17343 = f__5692__auto__.call(null);(statearr_17343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___17344);
return statearr_17343;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___17344,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___17469 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___17469,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___17469,out){
return (function (state_17445){var state_val_17446 = (state_17445[(1)]);if((state_val_17446 === (7)))
{var inst_17424 = (state_17445[(7)]);var inst_17425 = (state_17445[(8)]);var inst_17424__$1 = (state_17445[(2)]);var inst_17425__$1 = cljs.core.nth.call(null,inst_17424__$1,(0),null);var inst_17426 = cljs.core.nth.call(null,inst_17424__$1,(1),null);var inst_17427 = (inst_17425__$1 == null);var state_17445__$1 = (function (){var statearr_17447 = state_17445;(statearr_17447[(7)] = inst_17424__$1);
(statearr_17447[(9)] = inst_17426);
(statearr_17447[(8)] = inst_17425__$1);
return statearr_17447;
})();if(cljs.core.truth_(inst_17427))
{var statearr_17448_17470 = state_17445__$1;(statearr_17448_17470[(1)] = (8));
} else
{var statearr_17449_17471 = state_17445__$1;(statearr_17449_17471[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17446 === (1)))
{var inst_17416 = cljs.core.vec.call(null,chs);var inst_17417 = inst_17416;var state_17445__$1 = (function (){var statearr_17450 = state_17445;(statearr_17450[(10)] = inst_17417);
return statearr_17450;
})();var statearr_17451_17472 = state_17445__$1;(statearr_17451_17472[(2)] = null);
(statearr_17451_17472[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17446 === (4)))
{var inst_17417 = (state_17445[(10)]);var state_17445__$1 = state_17445;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17445__$1,(7),inst_17417);
} else
{if((state_val_17446 === (6)))
{var inst_17441 = (state_17445[(2)]);var state_17445__$1 = state_17445;var statearr_17452_17473 = state_17445__$1;(statearr_17452_17473[(2)] = inst_17441);
(statearr_17452_17473[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17446 === (3)))
{var inst_17443 = (state_17445[(2)]);var state_17445__$1 = state_17445;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17445__$1,inst_17443);
} else
{if((state_val_17446 === (2)))
{var inst_17417 = (state_17445[(10)]);var inst_17419 = cljs.core.count.call(null,inst_17417);var inst_17420 = (inst_17419 > (0));var state_17445__$1 = state_17445;if(cljs.core.truth_(inst_17420))
{var statearr_17454_17474 = state_17445__$1;(statearr_17454_17474[(1)] = (4));
} else
{var statearr_17455_17475 = state_17445__$1;(statearr_17455_17475[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17446 === (11)))
{var inst_17417 = (state_17445[(10)]);var inst_17434 = (state_17445[(2)]);var tmp17453 = inst_17417;var inst_17417__$1 = tmp17453;var state_17445__$1 = (function (){var statearr_17456 = state_17445;(statearr_17456[(11)] = inst_17434);
(statearr_17456[(10)] = inst_17417__$1);
return statearr_17456;
})();var statearr_17457_17476 = state_17445__$1;(statearr_17457_17476[(2)] = null);
(statearr_17457_17476[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17446 === (9)))
{var inst_17425 = (state_17445[(8)]);var state_17445__$1 = state_17445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17445__$1,(11),out,inst_17425);
} else
{if((state_val_17446 === (5)))
{var inst_17439 = cljs.core.async.close_BANG_.call(null,out);var state_17445__$1 = state_17445;var statearr_17458_17477 = state_17445__$1;(statearr_17458_17477[(2)] = inst_17439);
(statearr_17458_17477[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17446 === (10)))
{var inst_17437 = (state_17445[(2)]);var state_17445__$1 = state_17445;var statearr_17459_17478 = state_17445__$1;(statearr_17459_17478[(2)] = inst_17437);
(statearr_17459_17478[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17446 === (8)))
{var inst_17424 = (state_17445[(7)]);var inst_17426 = (state_17445[(9)]);var inst_17417 = (state_17445[(10)]);var inst_17425 = (state_17445[(8)]);var inst_17429 = (function (){var c = inst_17426;var v = inst_17425;var vec__17422 = inst_17424;var cs = inst_17417;return ((function (c,v,vec__17422,cs,inst_17424,inst_17426,inst_17417,inst_17425,state_val_17446,c__5691__auto___17469,out){
return (function (p1__17362_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17362_SHARP_);
});
;})(c,v,vec__17422,cs,inst_17424,inst_17426,inst_17417,inst_17425,state_val_17446,c__5691__auto___17469,out))
})();var inst_17430 = cljs.core.filterv.call(null,inst_17429,inst_17417);var inst_17417__$1 = inst_17430;var state_17445__$1 = (function (){var statearr_17460 = state_17445;(statearr_17460[(10)] = inst_17417__$1);
return statearr_17460;
})();var statearr_17461_17479 = state_17445__$1;(statearr_17461_17479[(2)] = null);
(statearr_17461_17479[(1)] = (2));
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
});})(c__5691__auto___17469,out))
;return ((function (switch__5676__auto__,c__5691__auto___17469,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_17465 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17465[(0)] = state_machine__5677__auto__);
(statearr_17465[(1)] = (1));
return statearr_17465;
});
var state_machine__5677__auto____1 = (function (state_17445){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_17445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e17466){if((e17466 instanceof Object))
{var ex__5680__auto__ = e17466;var statearr_17467_17480 = state_17445;(statearr_17467_17480[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17445);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17466;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17481 = state_17445;
state_17445 = G__17481;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_17445){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_17445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___17469,out))
})();var state__5693__auto__ = (function (){var statearr_17468 = f__5692__auto__.call(null);(statearr_17468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___17469);
return statearr_17468;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___17469,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___17574 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___17574,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___17574,out){
return (function (state_17551){var state_val_17552 = (state_17551[(1)]);if((state_val_17552 === (7)))
{var inst_17533 = (state_17551[(7)]);var inst_17533__$1 = (state_17551[(2)]);var inst_17534 = (inst_17533__$1 == null);var inst_17535 = cljs.core.not.call(null,inst_17534);var state_17551__$1 = (function (){var statearr_17553 = state_17551;(statearr_17553[(7)] = inst_17533__$1);
return statearr_17553;
})();if(inst_17535)
{var statearr_17554_17575 = state_17551__$1;(statearr_17554_17575[(1)] = (8));
} else
{var statearr_17555_17576 = state_17551__$1;(statearr_17555_17576[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17552 === (1)))
{var inst_17528 = (0);var state_17551__$1 = (function (){var statearr_17556 = state_17551;(statearr_17556[(8)] = inst_17528);
return statearr_17556;
})();var statearr_17557_17577 = state_17551__$1;(statearr_17557_17577[(2)] = null);
(statearr_17557_17577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17552 === (4)))
{var state_17551__$1 = state_17551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17551__$1,(7),ch);
} else
{if((state_val_17552 === (6)))
{var inst_17546 = (state_17551[(2)]);var state_17551__$1 = state_17551;var statearr_17558_17578 = state_17551__$1;(statearr_17558_17578[(2)] = inst_17546);
(statearr_17558_17578[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17552 === (3)))
{var inst_17548 = (state_17551[(2)]);var inst_17549 = cljs.core.async.close_BANG_.call(null,out);var state_17551__$1 = (function (){var statearr_17559 = state_17551;(statearr_17559[(9)] = inst_17548);
return statearr_17559;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17551__$1,inst_17549);
} else
{if((state_val_17552 === (2)))
{var inst_17528 = (state_17551[(8)]);var inst_17530 = (inst_17528 < n);var state_17551__$1 = state_17551;if(cljs.core.truth_(inst_17530))
{var statearr_17560_17579 = state_17551__$1;(statearr_17560_17579[(1)] = (4));
} else
{var statearr_17561_17580 = state_17551__$1;(statearr_17561_17580[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17552 === (11)))
{var inst_17528 = (state_17551[(8)]);var inst_17538 = (state_17551[(2)]);var inst_17539 = (inst_17528 + (1));var inst_17528__$1 = inst_17539;var state_17551__$1 = (function (){var statearr_17562 = state_17551;(statearr_17562[(10)] = inst_17538);
(statearr_17562[(8)] = inst_17528__$1);
return statearr_17562;
})();var statearr_17563_17581 = state_17551__$1;(statearr_17563_17581[(2)] = null);
(statearr_17563_17581[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17552 === (9)))
{var state_17551__$1 = state_17551;var statearr_17564_17582 = state_17551__$1;(statearr_17564_17582[(2)] = null);
(statearr_17564_17582[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17552 === (5)))
{var state_17551__$1 = state_17551;var statearr_17565_17583 = state_17551__$1;(statearr_17565_17583[(2)] = null);
(statearr_17565_17583[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17552 === (10)))
{var inst_17543 = (state_17551[(2)]);var state_17551__$1 = state_17551;var statearr_17566_17584 = state_17551__$1;(statearr_17566_17584[(2)] = inst_17543);
(statearr_17566_17584[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17552 === (8)))
{var inst_17533 = (state_17551[(7)]);var state_17551__$1 = state_17551;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17551__$1,(11),out,inst_17533);
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
});})(c__5691__auto___17574,out))
;return ((function (switch__5676__auto__,c__5691__auto___17574,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_17570 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17570[(0)] = state_machine__5677__auto__);
(statearr_17570[(1)] = (1));
return statearr_17570;
});
var state_machine__5677__auto____1 = (function (state_17551){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_17551);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e17571){if((e17571 instanceof Object))
{var ex__5680__auto__ = e17571;var statearr_17572_17585 = state_17551;(statearr_17572_17585[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17551);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17571;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17586 = state_17551;
state_17551 = G__17586;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_17551){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_17551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___17574,out))
})();var state__5693__auto__ = (function (){var statearr_17573 = f__5692__auto__.call(null);(statearr_17573[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___17574);
return statearr_17573;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___17574,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___17683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___17683,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___17683,out){
return (function (state_17658){var state_val_17659 = (state_17658[(1)]);if((state_val_17659 === (7)))
{var inst_17653 = (state_17658[(2)]);var state_17658__$1 = state_17658;var statearr_17660_17684 = state_17658__$1;(statearr_17660_17684[(2)] = inst_17653);
(statearr_17660_17684[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17659 === (1)))
{var inst_17635 = null;var state_17658__$1 = (function (){var statearr_17661 = state_17658;(statearr_17661[(7)] = inst_17635);
return statearr_17661;
})();var statearr_17662_17685 = state_17658__$1;(statearr_17662_17685[(2)] = null);
(statearr_17662_17685[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17659 === (4)))
{var inst_17638 = (state_17658[(8)]);var inst_17638__$1 = (state_17658[(2)]);var inst_17639 = (inst_17638__$1 == null);var inst_17640 = cljs.core.not.call(null,inst_17639);var state_17658__$1 = (function (){var statearr_17663 = state_17658;(statearr_17663[(8)] = inst_17638__$1);
return statearr_17663;
})();if(inst_17640)
{var statearr_17664_17686 = state_17658__$1;(statearr_17664_17686[(1)] = (5));
} else
{var statearr_17665_17687 = state_17658__$1;(statearr_17665_17687[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17659 === (6)))
{var state_17658__$1 = state_17658;var statearr_17666_17688 = state_17658__$1;(statearr_17666_17688[(2)] = null);
(statearr_17666_17688[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17659 === (3)))
{var inst_17655 = (state_17658[(2)]);var inst_17656 = cljs.core.async.close_BANG_.call(null,out);var state_17658__$1 = (function (){var statearr_17667 = state_17658;(statearr_17667[(9)] = inst_17655);
return statearr_17667;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17658__$1,inst_17656);
} else
{if((state_val_17659 === (2)))
{var state_17658__$1 = state_17658;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17658__$1,(4),ch);
} else
{if((state_val_17659 === (11)))
{var inst_17638 = (state_17658[(8)]);var inst_17647 = (state_17658[(2)]);var inst_17635 = inst_17638;var state_17658__$1 = (function (){var statearr_17668 = state_17658;(statearr_17668[(10)] = inst_17647);
(statearr_17668[(7)] = inst_17635);
return statearr_17668;
})();var statearr_17669_17689 = state_17658__$1;(statearr_17669_17689[(2)] = null);
(statearr_17669_17689[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17659 === (9)))
{var inst_17638 = (state_17658[(8)]);var state_17658__$1 = state_17658;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17658__$1,(11),out,inst_17638);
} else
{if((state_val_17659 === (5)))
{var inst_17638 = (state_17658[(8)]);var inst_17635 = (state_17658[(7)]);var inst_17642 = cljs.core._EQ_.call(null,inst_17638,inst_17635);var state_17658__$1 = state_17658;if(inst_17642)
{var statearr_17671_17690 = state_17658__$1;(statearr_17671_17690[(1)] = (8));
} else
{var statearr_17672_17691 = state_17658__$1;(statearr_17672_17691[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17659 === (10)))
{var inst_17650 = (state_17658[(2)]);var state_17658__$1 = state_17658;var statearr_17673_17692 = state_17658__$1;(statearr_17673_17692[(2)] = inst_17650);
(statearr_17673_17692[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17659 === (8)))
{var inst_17635 = (state_17658[(7)]);var tmp17670 = inst_17635;var inst_17635__$1 = tmp17670;var state_17658__$1 = (function (){var statearr_17674 = state_17658;(statearr_17674[(7)] = inst_17635__$1);
return statearr_17674;
})();var statearr_17675_17693 = state_17658__$1;(statearr_17675_17693[(2)] = null);
(statearr_17675_17693[(1)] = (2));
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
});})(c__5691__auto___17683,out))
;return ((function (switch__5676__auto__,c__5691__auto___17683,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_17679 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17679[(0)] = state_machine__5677__auto__);
(statearr_17679[(1)] = (1));
return statearr_17679;
});
var state_machine__5677__auto____1 = (function (state_17658){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_17658);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e17680){if((e17680 instanceof Object))
{var ex__5680__auto__ = e17680;var statearr_17681_17694 = state_17658;(statearr_17681_17694[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17658);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17695 = state_17658;
state_17658 = G__17695;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_17658){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_17658);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___17683,out))
})();var state__5693__auto__ = (function (){var statearr_17682 = f__5692__auto__.call(null);(statearr_17682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___17683);
return statearr_17682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___17683,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___17830 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___17830,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___17830,out){
return (function (state_17800){var state_val_17801 = (state_17800[(1)]);if((state_val_17801 === (7)))
{var inst_17796 = (state_17800[(2)]);var state_17800__$1 = state_17800;var statearr_17802_17831 = state_17800__$1;(statearr_17802_17831[(2)] = inst_17796);
(statearr_17802_17831[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (1)))
{var inst_17763 = (new Array(n));var inst_17764 = inst_17763;var inst_17765 = (0);var state_17800__$1 = (function (){var statearr_17803 = state_17800;(statearr_17803[(7)] = inst_17764);
(statearr_17803[(8)] = inst_17765);
return statearr_17803;
})();var statearr_17804_17832 = state_17800__$1;(statearr_17804_17832[(2)] = null);
(statearr_17804_17832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (4)))
{var inst_17768 = (state_17800[(9)]);var inst_17768__$1 = (state_17800[(2)]);var inst_17769 = (inst_17768__$1 == null);var inst_17770 = cljs.core.not.call(null,inst_17769);var state_17800__$1 = (function (){var statearr_17805 = state_17800;(statearr_17805[(9)] = inst_17768__$1);
return statearr_17805;
})();if(inst_17770)
{var statearr_17806_17833 = state_17800__$1;(statearr_17806_17833[(1)] = (5));
} else
{var statearr_17807_17834 = state_17800__$1;(statearr_17807_17834[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (15)))
{var inst_17790 = (state_17800[(2)]);var state_17800__$1 = state_17800;var statearr_17808_17835 = state_17800__$1;(statearr_17808_17835[(2)] = inst_17790);
(statearr_17808_17835[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (13)))
{var state_17800__$1 = state_17800;var statearr_17809_17836 = state_17800__$1;(statearr_17809_17836[(2)] = null);
(statearr_17809_17836[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (6)))
{var inst_17765 = (state_17800[(8)]);var inst_17786 = (inst_17765 > (0));var state_17800__$1 = state_17800;if(cljs.core.truth_(inst_17786))
{var statearr_17810_17837 = state_17800__$1;(statearr_17810_17837[(1)] = (12));
} else
{var statearr_17811_17838 = state_17800__$1;(statearr_17811_17838[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (3)))
{var inst_17798 = (state_17800[(2)]);var state_17800__$1 = state_17800;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17800__$1,inst_17798);
} else
{if((state_val_17801 === (12)))
{var inst_17764 = (state_17800[(7)]);var inst_17788 = cljs.core.vec.call(null,inst_17764);var state_17800__$1 = state_17800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17800__$1,(15),out,inst_17788);
} else
{if((state_val_17801 === (2)))
{var state_17800__$1 = state_17800;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17800__$1,(4),ch);
} else
{if((state_val_17801 === (11)))
{var inst_17780 = (state_17800[(2)]);var inst_17781 = (new Array(n));var inst_17764 = inst_17781;var inst_17765 = (0);var state_17800__$1 = (function (){var statearr_17812 = state_17800;(statearr_17812[(10)] = inst_17780);
(statearr_17812[(7)] = inst_17764);
(statearr_17812[(8)] = inst_17765);
return statearr_17812;
})();var statearr_17813_17839 = state_17800__$1;(statearr_17813_17839[(2)] = null);
(statearr_17813_17839[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (9)))
{var inst_17764 = (state_17800[(7)]);var inst_17778 = cljs.core.vec.call(null,inst_17764);var state_17800__$1 = state_17800;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17800__$1,(11),out,inst_17778);
} else
{if((state_val_17801 === (5)))
{var inst_17768 = (state_17800[(9)]);var inst_17764 = (state_17800[(7)]);var inst_17773 = (state_17800[(11)]);var inst_17765 = (state_17800[(8)]);var inst_17772 = (inst_17764[inst_17765] = inst_17768);var inst_17773__$1 = (inst_17765 + (1));var inst_17774 = (inst_17773__$1 < n);var state_17800__$1 = (function (){var statearr_17814 = state_17800;(statearr_17814[(12)] = inst_17772);
(statearr_17814[(11)] = inst_17773__$1);
return statearr_17814;
})();if(cljs.core.truth_(inst_17774))
{var statearr_17815_17840 = state_17800__$1;(statearr_17815_17840[(1)] = (8));
} else
{var statearr_17816_17841 = state_17800__$1;(statearr_17816_17841[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (14)))
{var inst_17793 = (state_17800[(2)]);var inst_17794 = cljs.core.async.close_BANG_.call(null,out);var state_17800__$1 = (function (){var statearr_17818 = state_17800;(statearr_17818[(13)] = inst_17793);
return statearr_17818;
})();var statearr_17819_17842 = state_17800__$1;(statearr_17819_17842[(2)] = inst_17794);
(statearr_17819_17842[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (10)))
{var inst_17784 = (state_17800[(2)]);var state_17800__$1 = state_17800;var statearr_17820_17843 = state_17800__$1;(statearr_17820_17843[(2)] = inst_17784);
(statearr_17820_17843[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17801 === (8)))
{var inst_17764 = (state_17800[(7)]);var inst_17773 = (state_17800[(11)]);var tmp17817 = inst_17764;var inst_17764__$1 = tmp17817;var inst_17765 = inst_17773;var state_17800__$1 = (function (){var statearr_17821 = state_17800;(statearr_17821[(7)] = inst_17764__$1);
(statearr_17821[(8)] = inst_17765);
return statearr_17821;
})();var statearr_17822_17844 = state_17800__$1;(statearr_17822_17844[(2)] = null);
(statearr_17822_17844[(1)] = (2));
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
});})(c__5691__auto___17830,out))
;return ((function (switch__5676__auto__,c__5691__auto___17830,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_17826 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17826[(0)] = state_machine__5677__auto__);
(statearr_17826[(1)] = (1));
return statearr_17826;
});
var state_machine__5677__auto____1 = (function (state_17800){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_17800);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e17827){if((e17827 instanceof Object))
{var ex__5680__auto__ = e17827;var statearr_17828_17845 = state_17800;(statearr_17828_17845[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17800);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17827;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17846 = state_17800;
state_17800 = G__17846;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_17800){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_17800);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___17830,out))
})();var state__5693__auto__ = (function (){var statearr_17829 = f__5692__auto__.call(null);(statearr_17829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___17830);
return statearr_17829;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___17830,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5691__auto___17989 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5691__auto___17989,out){
return (function (){var f__5692__auto__ = (function (){var switch__5676__auto__ = ((function (c__5691__auto___17989,out){
return (function (state_17959){var state_val_17960 = (state_17959[(1)]);if((state_val_17960 === (7)))
{var inst_17955 = (state_17959[(2)]);var state_17959__$1 = state_17959;var statearr_17961_17990 = state_17959__$1;(statearr_17961_17990[(2)] = inst_17955);
(statearr_17961_17990[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (1)))
{var inst_17918 = [];var inst_17919 = inst_17918;var inst_17920 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17959__$1 = (function (){var statearr_17962 = state_17959;(statearr_17962[(7)] = inst_17920);
(statearr_17962[(8)] = inst_17919);
return statearr_17962;
})();var statearr_17963_17991 = state_17959__$1;(statearr_17963_17991[(2)] = null);
(statearr_17963_17991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (4)))
{var inst_17923 = (state_17959[(9)]);var inst_17923__$1 = (state_17959[(2)]);var inst_17924 = (inst_17923__$1 == null);var inst_17925 = cljs.core.not.call(null,inst_17924);var state_17959__$1 = (function (){var statearr_17964 = state_17959;(statearr_17964[(9)] = inst_17923__$1);
return statearr_17964;
})();if(inst_17925)
{var statearr_17965_17992 = state_17959__$1;(statearr_17965_17992[(1)] = (5));
} else
{var statearr_17966_17993 = state_17959__$1;(statearr_17966_17993[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (15)))
{var inst_17949 = (state_17959[(2)]);var state_17959__$1 = state_17959;var statearr_17967_17994 = state_17959__$1;(statearr_17967_17994[(2)] = inst_17949);
(statearr_17967_17994[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (13)))
{var state_17959__$1 = state_17959;var statearr_17968_17995 = state_17959__$1;(statearr_17968_17995[(2)] = null);
(statearr_17968_17995[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (6)))
{var inst_17919 = (state_17959[(8)]);var inst_17944 = inst_17919.length;var inst_17945 = (inst_17944 > (0));var state_17959__$1 = state_17959;if(cljs.core.truth_(inst_17945))
{var statearr_17969_17996 = state_17959__$1;(statearr_17969_17996[(1)] = (12));
} else
{var statearr_17970_17997 = state_17959__$1;(statearr_17970_17997[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (3)))
{var inst_17957 = (state_17959[(2)]);var state_17959__$1 = state_17959;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17959__$1,inst_17957);
} else
{if((state_val_17960 === (12)))
{var inst_17919 = (state_17959[(8)]);var inst_17947 = cljs.core.vec.call(null,inst_17919);var state_17959__$1 = state_17959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17959__$1,(15),out,inst_17947);
} else
{if((state_val_17960 === (2)))
{var state_17959__$1 = state_17959;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17959__$1,(4),ch);
} else
{if((state_val_17960 === (11)))
{var inst_17923 = (state_17959[(9)]);var inst_17927 = (state_17959[(10)]);var inst_17937 = (state_17959[(2)]);var inst_17938 = [];var inst_17939 = inst_17938.push(inst_17923);var inst_17919 = inst_17938;var inst_17920 = inst_17927;var state_17959__$1 = (function (){var statearr_17971 = state_17959;(statearr_17971[(11)] = inst_17937);
(statearr_17971[(7)] = inst_17920);
(statearr_17971[(8)] = inst_17919);
(statearr_17971[(12)] = inst_17939);
return statearr_17971;
})();var statearr_17972_17998 = state_17959__$1;(statearr_17972_17998[(2)] = null);
(statearr_17972_17998[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (9)))
{var inst_17919 = (state_17959[(8)]);var inst_17935 = cljs.core.vec.call(null,inst_17919);var state_17959__$1 = state_17959;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17959__$1,(11),out,inst_17935);
} else
{if((state_val_17960 === (5)))
{var inst_17923 = (state_17959[(9)]);var inst_17920 = (state_17959[(7)]);var inst_17927 = (state_17959[(10)]);var inst_17927__$1 = f.call(null,inst_17923);var inst_17928 = cljs.core._EQ_.call(null,inst_17927__$1,inst_17920);var inst_17929 = cljs.core.keyword_identical_QMARK_.call(null,inst_17920,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17930 = (inst_17928) || (inst_17929);var state_17959__$1 = (function (){var statearr_17973 = state_17959;(statearr_17973[(10)] = inst_17927__$1);
return statearr_17973;
})();if(cljs.core.truth_(inst_17930))
{var statearr_17974_17999 = state_17959__$1;(statearr_17974_17999[(1)] = (8));
} else
{var statearr_17975_18000 = state_17959__$1;(statearr_17975_18000[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (14)))
{var inst_17952 = (state_17959[(2)]);var inst_17953 = cljs.core.async.close_BANG_.call(null,out);var state_17959__$1 = (function (){var statearr_17977 = state_17959;(statearr_17977[(13)] = inst_17952);
return statearr_17977;
})();var statearr_17978_18001 = state_17959__$1;(statearr_17978_18001[(2)] = inst_17953);
(statearr_17978_18001[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (10)))
{var inst_17942 = (state_17959[(2)]);var state_17959__$1 = state_17959;var statearr_17979_18002 = state_17959__$1;(statearr_17979_18002[(2)] = inst_17942);
(statearr_17979_18002[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17960 === (8)))
{var inst_17923 = (state_17959[(9)]);var inst_17927 = (state_17959[(10)]);var inst_17919 = (state_17959[(8)]);var inst_17932 = inst_17919.push(inst_17923);var tmp17976 = inst_17919;var inst_17919__$1 = tmp17976;var inst_17920 = inst_17927;var state_17959__$1 = (function (){var statearr_17980 = state_17959;(statearr_17980[(14)] = inst_17932);
(statearr_17980[(7)] = inst_17920);
(statearr_17980[(8)] = inst_17919__$1);
return statearr_17980;
})();var statearr_17981_18003 = state_17959__$1;(statearr_17981_18003[(2)] = null);
(statearr_17981_18003[(1)] = (2));
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
});})(c__5691__auto___17989,out))
;return ((function (switch__5676__auto__,c__5691__auto___17989,out){
return (function() {
var state_machine__5677__auto__ = null;
var state_machine__5677__auto____0 = (function (){var statearr_17985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17985[(0)] = state_machine__5677__auto__);
(statearr_17985[(1)] = (1));
return statearr_17985;
});
var state_machine__5677__auto____1 = (function (state_17959){while(true){
var ret_value__5678__auto__ = (function (){try{while(true){
var result__5679__auto__ = switch__5676__auto__.call(null,state_17959);if(cljs.core.keyword_identical_QMARK_.call(null,result__5679__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5679__auto__;
}
break;
}
}catch (e17986){if((e17986 instanceof Object))
{var ex__5680__auto__ = e17986;var statearr_17987_18004 = state_17959;(statearr_17987_18004[(5)] = ex__5680__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17959);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5678__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18005 = state_17959;
state_17959 = G__18005;
continue;
}
} else
{return ret_value__5678__auto__;
}
break;
}
});
state_machine__5677__auto__ = function(state_17959){
switch(arguments.length){
case 0:
return state_machine__5677__auto____0.call(this);
case 1:
return state_machine__5677__auto____1.call(this,state_17959);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5677__auto____0;
state_machine__5677__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5677__auto____1;
return state_machine__5677__auto__;
})()
;})(switch__5676__auto__,c__5691__auto___17989,out))
})();var state__5693__auto__ = (function (){var statearr_17988 = f__5692__auto__.call(null);(statearr_17988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5691__auto___17989);
return statearr_17988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5693__auto__);
});})(c__5691__auto___17989,out))
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
