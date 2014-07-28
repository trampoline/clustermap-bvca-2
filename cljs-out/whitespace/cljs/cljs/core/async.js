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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15748 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15748 = (function (f,fn_handler,meta15749){
this.f = f;
this.fn_handler = fn_handler;
this.meta15749 = meta15749;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15748.cljs$lang$type = true;
cljs.core.async.t15748.cljs$lang$ctorStr = "cljs.core.async/t15748";
cljs.core.async.t15748.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15748");
});
cljs.core.async.t15748.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15748.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15748.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15748.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15750){var self__ = this;
var _15750__$1 = this;return self__.meta15749;
});
cljs.core.async.t15748.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15750,meta15749__$1){var self__ = this;
var _15750__$1 = this;return (new cljs.core.async.t15748(self__.f,self__.fn_handler,meta15749__$1));
});
cljs.core.async.__GT_t15748 = (function __GT_t15748(f__$1,fn_handler__$1,meta15749){return (new cljs.core.async.t15748(f__$1,fn_handler__$1,meta15749));
});
}
return (new cljs.core.async.t15748(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15752 = buff;if(G__15752)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15752.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15752.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15752);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15752);
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
{var val_15753 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15753);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15753,ret){
return (function (){return fn1.call(null,val_15753);
});})(val_15753,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___15754 = n;var x_15755 = (0);while(true){
if((x_15755 < n__4399__auto___15754))
{(a[x_15755] = (0));
{
var G__15756 = (x_15755 + (1));
x_15755 = G__15756;
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
var G__15757 = (i + (1));
i = G__15757;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15761 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15761 = (function (flag,alt_flag,meta15762){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15762 = meta15762;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15761.cljs$lang$type = true;
cljs.core.async.t15761.cljs$lang$ctorStr = "cljs.core.async/t15761";
cljs.core.async.t15761.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15761");
});})(flag))
;
cljs.core.async.t15761.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15761.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15761.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15761.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15763){var self__ = this;
var _15763__$1 = this;return self__.meta15762;
});})(flag))
;
cljs.core.async.t15761.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15763,meta15762__$1){var self__ = this;
var _15763__$1 = this;return (new cljs.core.async.t15761(self__.flag,self__.alt_flag,meta15762__$1));
});})(flag))
;
cljs.core.async.__GT_t15761 = ((function (flag){
return (function __GT_t15761(flag__$1,alt_flag__$1,meta15762){return (new cljs.core.async.t15761(flag__$1,alt_flag__$1,meta15762));
});})(flag))
;
}
return (new cljs.core.async.t15761(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15767 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15767 = (function (cb,flag,alt_handler,meta15768){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15768 = meta15768;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15767.cljs$lang$type = true;
cljs.core.async.t15767.cljs$lang$ctorStr = "cljs.core.async/t15767";
cljs.core.async.t15767.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15767");
});
cljs.core.async.t15767.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15767.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15767.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15767.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15769){var self__ = this;
var _15769__$1 = this;return self__.meta15768;
});
cljs.core.async.t15767.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15769,meta15768__$1){var self__ = this;
var _15769__$1 = this;return (new cljs.core.async.t15767(self__.cb,self__.flag,self__.alt_handler,meta15768__$1));
});
cljs.core.async.__GT_t15767 = (function __GT_t15767(cb__$1,flag__$1,alt_handler__$1,meta15768){return (new cljs.core.async.t15767(cb__$1,flag__$1,alt_handler__$1,meta15768));
});
}
return (new cljs.core.async.t15767(cb,flag,alt_handler,null));
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
return (function (p1__15770_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15770_SHARP_,port], null));
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
var G__15771 = (i + (1));
i = G__15771;
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
var alts_BANG___delegate = function (ports,p__15772){var map__15774 = p__15772;var map__15774__$1 = ((cljs.core.seq_QMARK_.call(null,map__15774))?cljs.core.apply.call(null,cljs.core.hash_map,map__15774):map__15774);var opts = map__15774__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15772 = null;if (arguments.length > 1) {
  p__15772 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15772);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15775){
var ports = cljs.core.first(arglist__15775);
var p__15772 = cljs.core.rest(arglist__15775);
return alts_BANG___delegate(ports,p__15772);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15783 = (function (ch,f,map_LT_,meta15784){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15784 = meta15784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15783.cljs$lang$type = true;
cljs.core.async.t15783.cljs$lang$ctorStr = "cljs.core.async/t15783";
cljs.core.async.t15783.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15783");
});
cljs.core.async.t15783.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15783.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15783.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15783.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15786 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15786 = (function (fn1,_,meta15784,ch,f,map_LT_,meta15787){
this.fn1 = fn1;
this._ = _;
this.meta15784 = meta15784;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15787 = meta15787;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15786.cljs$lang$type = true;
cljs.core.async.t15786.cljs$lang$ctorStr = "cljs.core.async/t15786";
cljs.core.async.t15786.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15786");
});})(___$1))
;
cljs.core.async.t15786.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15786.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15786.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15786.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15776_SHARP_){return f1.call(null,(((p1__15776_SHARP_ == null))?null:self__.f.call(null,p1__15776_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15786.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15788){var self__ = this;
var _15788__$1 = this;return self__.meta15787;
});})(___$1))
;
cljs.core.async.t15786.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15788,meta15787__$1){var self__ = this;
var _15788__$1 = this;return (new cljs.core.async.t15786(self__.fn1,self__._,self__.meta15784,self__.ch,self__.f,self__.map_LT_,meta15787__$1));
});})(___$1))
;
cljs.core.async.__GT_t15786 = ((function (___$1){
return (function __GT_t15786(fn1__$1,___$2,meta15784__$1,ch__$2,f__$2,map_LT___$2,meta15787){return (new cljs.core.async.t15786(fn1__$1,___$2,meta15784__$1,ch__$2,f__$2,map_LT___$2,meta15787));
});})(___$1))
;
}
return (new cljs.core.async.t15786(fn1,___$1,self__.meta15784,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15783.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15783.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15785){var self__ = this;
var _15785__$1 = this;return self__.meta15784;
});
cljs.core.async.t15783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15785,meta15784__$1){var self__ = this;
var _15785__$1 = this;return (new cljs.core.async.t15783(self__.ch,self__.f,self__.map_LT_,meta15784__$1));
});
cljs.core.async.__GT_t15783 = (function __GT_t15783(ch__$1,f__$1,map_LT___$1,meta15784){return (new cljs.core.async.t15783(ch__$1,f__$1,map_LT___$1,meta15784));
});
}
return (new cljs.core.async.t15783(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15792 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15792 = (function (ch,f,map_GT_,meta15793){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15793 = meta15793;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15792.cljs$lang$type = true;
cljs.core.async.t15792.cljs$lang$ctorStr = "cljs.core.async/t15792";
cljs.core.async.t15792.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15792");
});
cljs.core.async.t15792.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15792.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15792.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15792.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15792.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15792.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15794){var self__ = this;
var _15794__$1 = this;return self__.meta15793;
});
cljs.core.async.t15792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15794,meta15793__$1){var self__ = this;
var _15794__$1 = this;return (new cljs.core.async.t15792(self__.ch,self__.f,self__.map_GT_,meta15793__$1));
});
cljs.core.async.__GT_t15792 = (function __GT_t15792(ch__$1,f__$1,map_GT___$1,meta15793){return (new cljs.core.async.t15792(ch__$1,f__$1,map_GT___$1,meta15793));
});
}
return (new cljs.core.async.t15792(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15798 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15798 = (function (ch,p,filter_GT_,meta15799){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15799 = meta15799;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15798.cljs$lang$type = true;
cljs.core.async.t15798.cljs$lang$ctorStr = "cljs.core.async/t15798";
cljs.core.async.t15798.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15798");
});
cljs.core.async.t15798.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15798.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15798.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15798.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15798.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15798.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15798.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15800){var self__ = this;
var _15800__$1 = this;return self__.meta15799;
});
cljs.core.async.t15798.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15800,meta15799__$1){var self__ = this;
var _15800__$1 = this;return (new cljs.core.async.t15798(self__.ch,self__.p,self__.filter_GT_,meta15799__$1));
});
cljs.core.async.__GT_t15798 = (function __GT_t15798(ch__$1,p__$1,filter_GT___$1,meta15799){return (new cljs.core.async.t15798(ch__$1,p__$1,filter_GT___$1,meta15799));
});
}
return (new cljs.core.async.t15798(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___15883 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15883,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15883,out){
return (function (state_15862){var state_val_15863 = (state_15862[(1)]);if((state_val_15863 === (7)))
{var inst_15858 = (state_15862[(2)]);var state_15862__$1 = state_15862;var statearr_15864_15884 = state_15862__$1;(statearr_15864_15884[(2)] = inst_15858);
(statearr_15864_15884[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (1)))
{var state_15862__$1 = state_15862;var statearr_15865_15885 = state_15862__$1;(statearr_15865_15885[(2)] = null);
(statearr_15865_15885[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (4)))
{var inst_15844 = (state_15862[(7)]);var inst_15844__$1 = (state_15862[(2)]);var inst_15845 = (inst_15844__$1 == null);var state_15862__$1 = (function (){var statearr_15866 = state_15862;(statearr_15866[(7)] = inst_15844__$1);
return statearr_15866;
})();if(cljs.core.truth_(inst_15845))
{var statearr_15867_15886 = state_15862__$1;(statearr_15867_15886[(1)] = (5));
} else
{var statearr_15868_15887 = state_15862__$1;(statearr_15868_15887[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (6)))
{var inst_15844 = (state_15862[(7)]);var inst_15849 = p.call(null,inst_15844);var state_15862__$1 = state_15862;if(cljs.core.truth_(inst_15849))
{var statearr_15869_15888 = state_15862__$1;(statearr_15869_15888[(1)] = (8));
} else
{var statearr_15870_15889 = state_15862__$1;(statearr_15870_15889[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (3)))
{var inst_15860 = (state_15862[(2)]);var state_15862__$1 = state_15862;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15862__$1,inst_15860);
} else
{if((state_val_15863 === (2)))
{var state_15862__$1 = state_15862;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15862__$1,(4),ch);
} else
{if((state_val_15863 === (11)))
{var inst_15852 = (state_15862[(2)]);var state_15862__$1 = state_15862;var statearr_15871_15890 = state_15862__$1;(statearr_15871_15890[(2)] = inst_15852);
(statearr_15871_15890[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (9)))
{var state_15862__$1 = state_15862;var statearr_15872_15891 = state_15862__$1;(statearr_15872_15891[(2)] = null);
(statearr_15872_15891[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (5)))
{var inst_15847 = cljs.core.async.close_BANG_.call(null,out);var state_15862__$1 = state_15862;var statearr_15873_15892 = state_15862__$1;(statearr_15873_15892[(2)] = inst_15847);
(statearr_15873_15892[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (10)))
{var inst_15855 = (state_15862[(2)]);var state_15862__$1 = (function (){var statearr_15874 = state_15862;(statearr_15874[(8)] = inst_15855);
return statearr_15874;
})();var statearr_15875_15893 = state_15862__$1;(statearr_15875_15893[(2)] = null);
(statearr_15875_15893[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15863 === (8)))
{var inst_15844 = (state_15862[(7)]);var state_15862__$1 = state_15862;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15862__$1,(11),out,inst_15844);
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
});})(c__5693__auto___15883,out))
;return ((function (switch__5678__auto__,c__5693__auto___15883,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15879 = [null,null,null,null,null,null,null,null,null];(statearr_15879[(0)] = state_machine__5679__auto__);
(statearr_15879[(1)] = (1));
return statearr_15879;
});
var state_machine__5679__auto____1 = (function (state_15862){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15862);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15880){if((e15880 instanceof Object))
{var ex__5682__auto__ = e15880;var statearr_15881_15894 = state_15862;(statearr_15881_15894[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15862);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15880;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15895 = state_15862;
state_15862 = G__15895;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15862){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15862);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15883,out))
})();var state__5695__auto__ = (function (){var statearr_15882 = f__5694__auto__.call(null);(statearr_15882[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15883);
return statearr_15882;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15883,out))
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
return (function (state_16047){var state_val_16048 = (state_16047[(1)]);if((state_val_16048 === (7)))
{var inst_16043 = (state_16047[(2)]);var state_16047__$1 = state_16047;var statearr_16049_16086 = state_16047__$1;(statearr_16049_16086[(2)] = inst_16043);
(statearr_16049_16086[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (20)))
{var inst_16018 = (state_16047[(7)]);var inst_16029 = (state_16047[(2)]);var inst_16030 = cljs.core.next.call(null,inst_16018);var inst_16004 = inst_16030;var inst_16005 = null;var inst_16006 = (0);var inst_16007 = (0);var state_16047__$1 = (function (){var statearr_16050 = state_16047;(statearr_16050[(8)] = inst_16029);
(statearr_16050[(9)] = inst_16005);
(statearr_16050[(10)] = inst_16004);
(statearr_16050[(11)] = inst_16006);
(statearr_16050[(12)] = inst_16007);
return statearr_16050;
})();var statearr_16051_16087 = state_16047__$1;(statearr_16051_16087[(2)] = null);
(statearr_16051_16087[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (1)))
{var state_16047__$1 = state_16047;var statearr_16052_16088 = state_16047__$1;(statearr_16052_16088[(2)] = null);
(statearr_16052_16088[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (4)))
{var inst_15993 = (state_16047[(13)]);var inst_15993__$1 = (state_16047[(2)]);var inst_15994 = (inst_15993__$1 == null);var state_16047__$1 = (function (){var statearr_16056 = state_16047;(statearr_16056[(13)] = inst_15993__$1);
return statearr_16056;
})();if(cljs.core.truth_(inst_15994))
{var statearr_16057_16089 = state_16047__$1;(statearr_16057_16089[(1)] = (5));
} else
{var statearr_16058_16090 = state_16047__$1;(statearr_16058_16090[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (15)))
{var state_16047__$1 = state_16047;var statearr_16059_16091 = state_16047__$1;(statearr_16059_16091[(2)] = null);
(statearr_16059_16091[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (13)))
{var inst_16005 = (state_16047[(9)]);var inst_16004 = (state_16047[(10)]);var inst_16006 = (state_16047[(11)]);var inst_16007 = (state_16047[(12)]);var inst_16014 = (state_16047[(2)]);var inst_16015 = (inst_16007 + (1));var tmp16053 = inst_16005;var tmp16054 = inst_16004;var tmp16055 = inst_16006;var inst_16004__$1 = tmp16054;var inst_16005__$1 = tmp16053;var inst_16006__$1 = tmp16055;var inst_16007__$1 = inst_16015;var state_16047__$1 = (function (){var statearr_16060 = state_16047;(statearr_16060[(9)] = inst_16005__$1);
(statearr_16060[(10)] = inst_16004__$1);
(statearr_16060[(11)] = inst_16006__$1);
(statearr_16060[(14)] = inst_16014);
(statearr_16060[(12)] = inst_16007__$1);
return statearr_16060;
})();var statearr_16061_16092 = state_16047__$1;(statearr_16061_16092[(2)] = null);
(statearr_16061_16092[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (6)))
{var inst_15993 = (state_16047[(13)]);var inst_15998 = f.call(null,inst_15993);var inst_16003 = cljs.core.seq.call(null,inst_15998);var inst_16004 = inst_16003;var inst_16005 = null;var inst_16006 = (0);var inst_16007 = (0);var state_16047__$1 = (function (){var statearr_16062 = state_16047;(statearr_16062[(9)] = inst_16005);
(statearr_16062[(10)] = inst_16004);
(statearr_16062[(11)] = inst_16006);
(statearr_16062[(12)] = inst_16007);
return statearr_16062;
})();var statearr_16063_16093 = state_16047__$1;(statearr_16063_16093[(2)] = null);
(statearr_16063_16093[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (17)))
{var inst_16018 = (state_16047[(7)]);var inst_16022 = cljs.core.chunk_first.call(null,inst_16018);var inst_16023 = cljs.core.chunk_rest.call(null,inst_16018);var inst_16024 = cljs.core.count.call(null,inst_16022);var inst_16004 = inst_16023;var inst_16005 = inst_16022;var inst_16006 = inst_16024;var inst_16007 = (0);var state_16047__$1 = (function (){var statearr_16064 = state_16047;(statearr_16064[(9)] = inst_16005);
(statearr_16064[(10)] = inst_16004);
(statearr_16064[(11)] = inst_16006);
(statearr_16064[(12)] = inst_16007);
return statearr_16064;
})();var statearr_16065_16094 = state_16047__$1;(statearr_16065_16094[(2)] = null);
(statearr_16065_16094[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (3)))
{var inst_16045 = (state_16047[(2)]);var state_16047__$1 = state_16047;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16047__$1,inst_16045);
} else
{if((state_val_16048 === (12)))
{var inst_16038 = (state_16047[(2)]);var state_16047__$1 = state_16047;var statearr_16066_16095 = state_16047__$1;(statearr_16066_16095[(2)] = inst_16038);
(statearr_16066_16095[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (2)))
{var state_16047__$1 = state_16047;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16047__$1,(4),in$);
} else
{if((state_val_16048 === (19)))
{var inst_16033 = (state_16047[(2)]);var state_16047__$1 = state_16047;var statearr_16067_16096 = state_16047__$1;(statearr_16067_16096[(2)] = inst_16033);
(statearr_16067_16096[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (11)))
{var inst_16004 = (state_16047[(10)]);var inst_16018 = (state_16047[(7)]);var inst_16018__$1 = cljs.core.seq.call(null,inst_16004);var state_16047__$1 = (function (){var statearr_16068 = state_16047;(statearr_16068[(7)] = inst_16018__$1);
return statearr_16068;
})();if(inst_16018__$1)
{var statearr_16069_16097 = state_16047__$1;(statearr_16069_16097[(1)] = (14));
} else
{var statearr_16070_16098 = state_16047__$1;(statearr_16070_16098[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (9)))
{var inst_16040 = (state_16047[(2)]);var state_16047__$1 = (function (){var statearr_16071 = state_16047;(statearr_16071[(15)] = inst_16040);
return statearr_16071;
})();var statearr_16072_16099 = state_16047__$1;(statearr_16072_16099[(2)] = null);
(statearr_16072_16099[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (5)))
{var inst_15996 = cljs.core.async.close_BANG_.call(null,out);var state_16047__$1 = state_16047;var statearr_16073_16100 = state_16047__$1;(statearr_16073_16100[(2)] = inst_15996);
(statearr_16073_16100[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (14)))
{var inst_16018 = (state_16047[(7)]);var inst_16020 = cljs.core.chunked_seq_QMARK_.call(null,inst_16018);var state_16047__$1 = state_16047;if(inst_16020)
{var statearr_16074_16101 = state_16047__$1;(statearr_16074_16101[(1)] = (17));
} else
{var statearr_16075_16102 = state_16047__$1;(statearr_16075_16102[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (16)))
{var inst_16036 = (state_16047[(2)]);var state_16047__$1 = state_16047;var statearr_16076_16103 = state_16047__$1;(statearr_16076_16103[(2)] = inst_16036);
(statearr_16076_16103[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16048 === (10)))
{var inst_16005 = (state_16047[(9)]);var inst_16007 = (state_16047[(12)]);var inst_16012 = cljs.core._nth.call(null,inst_16005,inst_16007);var state_16047__$1 = state_16047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16047__$1,(13),out,inst_16012);
} else
{if((state_val_16048 === (18)))
{var inst_16018 = (state_16047[(7)]);var inst_16027 = cljs.core.first.call(null,inst_16018);var state_16047__$1 = state_16047;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16047__$1,(20),out,inst_16027);
} else
{if((state_val_16048 === (8)))
{var inst_16006 = (state_16047[(11)]);var inst_16007 = (state_16047[(12)]);var inst_16009 = (inst_16007 < inst_16006);var inst_16010 = inst_16009;var state_16047__$1 = state_16047;if(cljs.core.truth_(inst_16010))
{var statearr_16077_16104 = state_16047__$1;(statearr_16077_16104[(1)] = (10));
} else
{var statearr_16078_16105 = state_16047__$1;(statearr_16078_16105[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_16082 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16082[(0)] = state_machine__5679__auto__);
(statearr_16082[(1)] = (1));
return statearr_16082;
});
var state_machine__5679__auto____1 = (function (state_16047){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16047);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16083){if((e16083 instanceof Object))
{var ex__5682__auto__ = e16083;var statearr_16084_16106 = state_16047;(statearr_16084_16106[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16047);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16083;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16107 = state_16047;
state_16047 = G__16107;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16047){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_16085 = f__5694__auto__.call(null);(statearr_16085[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_16085;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___16188 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16188){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16188){
return (function (state_16167){var state_val_16168 = (state_16167[(1)]);if((state_val_16168 === (7)))
{var inst_16163 = (state_16167[(2)]);var state_16167__$1 = state_16167;var statearr_16169_16189 = state_16167__$1;(statearr_16169_16189[(2)] = inst_16163);
(statearr_16169_16189[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16168 === (1)))
{var state_16167__$1 = state_16167;var statearr_16170_16190 = state_16167__$1;(statearr_16170_16190[(2)] = null);
(statearr_16170_16190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16168 === (4)))
{var inst_16150 = (state_16167[(7)]);var inst_16150__$1 = (state_16167[(2)]);var inst_16151 = (inst_16150__$1 == null);var state_16167__$1 = (function (){var statearr_16171 = state_16167;(statearr_16171[(7)] = inst_16150__$1);
return statearr_16171;
})();if(cljs.core.truth_(inst_16151))
{var statearr_16172_16191 = state_16167__$1;(statearr_16172_16191[(1)] = (5));
} else
{var statearr_16173_16192 = state_16167__$1;(statearr_16173_16192[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16168 === (6)))
{var inst_16150 = (state_16167[(7)]);var state_16167__$1 = state_16167;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16167__$1,(11),to,inst_16150);
} else
{if((state_val_16168 === (3)))
{var inst_16165 = (state_16167[(2)]);var state_16167__$1 = state_16167;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16167__$1,inst_16165);
} else
{if((state_val_16168 === (2)))
{var state_16167__$1 = state_16167;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16167__$1,(4),from);
} else
{if((state_val_16168 === (11)))
{var inst_16160 = (state_16167[(2)]);var state_16167__$1 = (function (){var statearr_16174 = state_16167;(statearr_16174[(8)] = inst_16160);
return statearr_16174;
})();var statearr_16175_16193 = state_16167__$1;(statearr_16175_16193[(2)] = null);
(statearr_16175_16193[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16168 === (9)))
{var state_16167__$1 = state_16167;var statearr_16176_16194 = state_16167__$1;(statearr_16176_16194[(2)] = null);
(statearr_16176_16194[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16168 === (5)))
{var state_16167__$1 = state_16167;if(cljs.core.truth_(close_QMARK_))
{var statearr_16177_16195 = state_16167__$1;(statearr_16177_16195[(1)] = (8));
} else
{var statearr_16178_16196 = state_16167__$1;(statearr_16178_16196[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16168 === (10)))
{var inst_16157 = (state_16167[(2)]);var state_16167__$1 = state_16167;var statearr_16179_16197 = state_16167__$1;(statearr_16179_16197[(2)] = inst_16157);
(statearr_16179_16197[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16168 === (8)))
{var inst_16154 = cljs.core.async.close_BANG_.call(null,to);var state_16167__$1 = state_16167;var statearr_16180_16198 = state_16167__$1;(statearr_16180_16198[(2)] = inst_16154);
(statearr_16180_16198[(1)] = (10));
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
});})(c__5693__auto___16188))
;return ((function (switch__5678__auto__,c__5693__auto___16188){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16184 = [null,null,null,null,null,null,null,null,null];(statearr_16184[(0)] = state_machine__5679__auto__);
(statearr_16184[(1)] = (1));
return statearr_16184;
});
var state_machine__5679__auto____1 = (function (state_16167){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16167);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16185){if((e16185 instanceof Object))
{var ex__5682__auto__ = e16185;var statearr_16186_16199 = state_16167;(statearr_16186_16199[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16167);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16200 = state_16167;
state_16167 = G__16200;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16167){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16167);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16188))
})();var state__5695__auto__ = (function (){var statearr_16187 = f__5694__auto__.call(null);(statearr_16187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16188);
return statearr_16187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16188))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___16287 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16287,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16287,tc,fc){
return (function (state_16265){var state_val_16266 = (state_16265[(1)]);if((state_val_16266 === (7)))
{var inst_16261 = (state_16265[(2)]);var state_16265__$1 = state_16265;var statearr_16267_16288 = state_16265__$1;(statearr_16267_16288[(2)] = inst_16261);
(statearr_16267_16288[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16266 === (1)))
{var state_16265__$1 = state_16265;var statearr_16268_16289 = state_16265__$1;(statearr_16268_16289[(2)] = null);
(statearr_16268_16289[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16266 === (4)))
{var inst_16246 = (state_16265[(7)]);var inst_16246__$1 = (state_16265[(2)]);var inst_16247 = (inst_16246__$1 == null);var state_16265__$1 = (function (){var statearr_16269 = state_16265;(statearr_16269[(7)] = inst_16246__$1);
return statearr_16269;
})();if(cljs.core.truth_(inst_16247))
{var statearr_16270_16290 = state_16265__$1;(statearr_16270_16290[(1)] = (5));
} else
{var statearr_16271_16291 = state_16265__$1;(statearr_16271_16291[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16266 === (6)))
{var inst_16246 = (state_16265[(7)]);var inst_16252 = p.call(null,inst_16246);var state_16265__$1 = state_16265;if(cljs.core.truth_(inst_16252))
{var statearr_16272_16292 = state_16265__$1;(statearr_16272_16292[(1)] = (9));
} else
{var statearr_16273_16293 = state_16265__$1;(statearr_16273_16293[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16266 === (3)))
{var inst_16263 = (state_16265[(2)]);var state_16265__$1 = state_16265;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16265__$1,inst_16263);
} else
{if((state_val_16266 === (2)))
{var state_16265__$1 = state_16265;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16265__$1,(4),ch);
} else
{if((state_val_16266 === (11)))
{var inst_16246 = (state_16265[(7)]);var inst_16256 = (state_16265[(2)]);var state_16265__$1 = state_16265;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16265__$1,(8),inst_16256,inst_16246);
} else
{if((state_val_16266 === (9)))
{var state_16265__$1 = state_16265;var statearr_16274_16294 = state_16265__$1;(statearr_16274_16294[(2)] = tc);
(statearr_16274_16294[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16266 === (5)))
{var inst_16249 = cljs.core.async.close_BANG_.call(null,tc);var inst_16250 = cljs.core.async.close_BANG_.call(null,fc);var state_16265__$1 = (function (){var statearr_16275 = state_16265;(statearr_16275[(8)] = inst_16249);
return statearr_16275;
})();var statearr_16276_16295 = state_16265__$1;(statearr_16276_16295[(2)] = inst_16250);
(statearr_16276_16295[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16266 === (10)))
{var state_16265__$1 = state_16265;var statearr_16277_16296 = state_16265__$1;(statearr_16277_16296[(2)] = fc);
(statearr_16277_16296[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16266 === (8)))
{var inst_16258 = (state_16265[(2)]);var state_16265__$1 = (function (){var statearr_16278 = state_16265;(statearr_16278[(9)] = inst_16258);
return statearr_16278;
})();var statearr_16279_16297 = state_16265__$1;(statearr_16279_16297[(2)] = null);
(statearr_16279_16297[(1)] = (2));
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
});})(c__5693__auto___16287,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___16287,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16283 = [null,null,null,null,null,null,null,null,null,null];(statearr_16283[(0)] = state_machine__5679__auto__);
(statearr_16283[(1)] = (1));
return statearr_16283;
});
var state_machine__5679__auto____1 = (function (state_16265){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16265);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16284){if((e16284 instanceof Object))
{var ex__5682__auto__ = e16284;var statearr_16285_16298 = state_16265;(statearr_16285_16298[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16265);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16299 = state_16265;
state_16265 = G__16299;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16265){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16287,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_16286 = f__5694__auto__.call(null);(statearr_16286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16287);
return statearr_16286;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16287,tc,fc))
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
return (function (state_16346){var state_val_16347 = (state_16346[(1)]);if((state_val_16347 === (7)))
{var inst_16342 = (state_16346[(2)]);var state_16346__$1 = state_16346;var statearr_16348_16364 = state_16346__$1;(statearr_16348_16364[(2)] = inst_16342);
(statearr_16348_16364[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16347 === (6)))
{var inst_16335 = (state_16346[(7)]);var inst_16332 = (state_16346[(8)]);var inst_16339 = f.call(null,inst_16332,inst_16335);var inst_16332__$1 = inst_16339;var state_16346__$1 = (function (){var statearr_16349 = state_16346;(statearr_16349[(8)] = inst_16332__$1);
return statearr_16349;
})();var statearr_16350_16365 = state_16346__$1;(statearr_16350_16365[(2)] = null);
(statearr_16350_16365[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16347 === (5)))
{var inst_16332 = (state_16346[(8)]);var state_16346__$1 = state_16346;var statearr_16351_16366 = state_16346__$1;(statearr_16351_16366[(2)] = inst_16332);
(statearr_16351_16366[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16347 === (4)))
{var inst_16335 = (state_16346[(7)]);var inst_16335__$1 = (state_16346[(2)]);var inst_16336 = (inst_16335__$1 == null);var state_16346__$1 = (function (){var statearr_16352 = state_16346;(statearr_16352[(7)] = inst_16335__$1);
return statearr_16352;
})();if(cljs.core.truth_(inst_16336))
{var statearr_16353_16367 = state_16346__$1;(statearr_16353_16367[(1)] = (5));
} else
{var statearr_16354_16368 = state_16346__$1;(statearr_16354_16368[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16347 === (3)))
{var inst_16344 = (state_16346[(2)]);var state_16346__$1 = state_16346;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16346__$1,inst_16344);
} else
{if((state_val_16347 === (2)))
{var state_16346__$1 = state_16346;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16346__$1,(4),ch);
} else
{if((state_val_16347 === (1)))
{var inst_16332 = init;var state_16346__$1 = (function (){var statearr_16355 = state_16346;(statearr_16355[(8)] = inst_16332);
return statearr_16355;
})();var statearr_16356_16369 = state_16346__$1;(statearr_16356_16369[(2)] = null);
(statearr_16356_16369[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_16360 = [null,null,null,null,null,null,null,null,null];(statearr_16360[(0)] = state_machine__5679__auto__);
(statearr_16360[(1)] = (1));
return statearr_16360;
});
var state_machine__5679__auto____1 = (function (state_16346){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16346);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16361){if((e16361 instanceof Object))
{var ex__5682__auto__ = e16361;var statearr_16362_16370 = state_16346;(statearr_16362_16370[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16346);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16371 = state_16346;
state_16346 = G__16371;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16346){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16346);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_16363 = f__5694__auto__.call(null);(statearr_16363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_16363;
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
return (function (state_16433){var state_val_16434 = (state_16433[(1)]);if((state_val_16434 === (7)))
{var inst_16414 = (state_16433[(7)]);var inst_16419 = (state_16433[(2)]);var inst_16420 = cljs.core.next.call(null,inst_16414);var inst_16414__$1 = inst_16420;var state_16433__$1 = (function (){var statearr_16435 = state_16433;(statearr_16435[(7)] = inst_16414__$1);
(statearr_16435[(8)] = inst_16419);
return statearr_16435;
})();var statearr_16436_16454 = state_16433__$1;(statearr_16436_16454[(2)] = null);
(statearr_16436_16454[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16434 === (1)))
{var inst_16413 = cljs.core.seq.call(null,coll);var inst_16414 = inst_16413;var state_16433__$1 = (function (){var statearr_16437 = state_16433;(statearr_16437[(7)] = inst_16414);
return statearr_16437;
})();var statearr_16438_16455 = state_16433__$1;(statearr_16438_16455[(2)] = null);
(statearr_16438_16455[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16434 === (4)))
{var inst_16414 = (state_16433[(7)]);var inst_16417 = cljs.core.first.call(null,inst_16414);var state_16433__$1 = state_16433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16433__$1,(7),ch,inst_16417);
} else
{if((state_val_16434 === (6)))
{var inst_16429 = (state_16433[(2)]);var state_16433__$1 = state_16433;var statearr_16439_16456 = state_16433__$1;(statearr_16439_16456[(2)] = inst_16429);
(statearr_16439_16456[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16434 === (3)))
{var inst_16431 = (state_16433[(2)]);var state_16433__$1 = state_16433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16433__$1,inst_16431);
} else
{if((state_val_16434 === (2)))
{var inst_16414 = (state_16433[(7)]);var state_16433__$1 = state_16433;if(cljs.core.truth_(inst_16414))
{var statearr_16440_16457 = state_16433__$1;(statearr_16440_16457[(1)] = (4));
} else
{var statearr_16441_16458 = state_16433__$1;(statearr_16441_16458[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16434 === (9)))
{var state_16433__$1 = state_16433;var statearr_16442_16459 = state_16433__$1;(statearr_16442_16459[(2)] = null);
(statearr_16442_16459[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16434 === (5)))
{var state_16433__$1 = state_16433;if(cljs.core.truth_(close_QMARK_))
{var statearr_16443_16460 = state_16433__$1;(statearr_16443_16460[(1)] = (8));
} else
{var statearr_16444_16461 = state_16433__$1;(statearr_16444_16461[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16434 === (10)))
{var inst_16427 = (state_16433[(2)]);var state_16433__$1 = state_16433;var statearr_16445_16462 = state_16433__$1;(statearr_16445_16462[(2)] = inst_16427);
(statearr_16445_16462[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16434 === (8)))
{var inst_16424 = cljs.core.async.close_BANG_.call(null,ch);var state_16433__$1 = state_16433;var statearr_16446_16463 = state_16433__$1;(statearr_16446_16463[(2)] = inst_16424);
(statearr_16446_16463[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_16450 = [null,null,null,null,null,null,null,null,null];(statearr_16450[(0)] = state_machine__5679__auto__);
(statearr_16450[(1)] = (1));
return statearr_16450;
});
var state_machine__5679__auto____1 = (function (state_16433){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16433);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16451){if((e16451 instanceof Object))
{var ex__5682__auto__ = e16451;var statearr_16452_16464 = state_16433;(statearr_16452_16464[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16433);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16465 = state_16433;
state_16433 = G__16465;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16433){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_16453 = f__5694__auto__.call(null);(statearr_16453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_16453;
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
cljs.core.async.Mux = (function (){var obj16467 = {};return obj16467;
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
cljs.core.async.Mult = (function (){var obj16469 = {};return obj16469;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16693 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16693 = (function (cs,ch,mult,meta16694){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16694 = meta16694;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16693.cljs$lang$type = true;
cljs.core.async.t16693.cljs$lang$ctorStr = "cljs.core.async/t16693";
cljs.core.async.t16693.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16693");
});})(cs))
;
cljs.core.async.t16693.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16693.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16693.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16693.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16693.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16693.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16693.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16695){var self__ = this;
var _16695__$1 = this;return self__.meta16694;
});})(cs))
;
cljs.core.async.t16693.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16695,meta16694__$1){var self__ = this;
var _16695__$1 = this;return (new cljs.core.async.t16693(self__.cs,self__.ch,self__.mult,meta16694__$1));
});})(cs))
;
cljs.core.async.__GT_t16693 = ((function (cs){
return (function __GT_t16693(cs__$1,ch__$1,mult__$1,meta16694){return (new cljs.core.async.t16693(cs__$1,ch__$1,mult__$1,meta16694));
});})(cs))
;
}
return (new cljs.core.async.t16693(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___16916 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16916,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16916,cs,m,dchan,dctr,done){
return (function (state_16830){var state_val_16831 = (state_16830[(1)]);if((state_val_16831 === (7)))
{var inst_16826 = (state_16830[(2)]);var state_16830__$1 = state_16830;var statearr_16832_16917 = state_16830__$1;(statearr_16832_16917[(2)] = inst_16826);
(statearr_16832_16917[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (20)))
{var inst_16727 = (state_16830[(7)]);var inst_16737 = cljs.core.first.call(null,inst_16727);var inst_16738 = cljs.core.nth.call(null,inst_16737,(0),null);var inst_16739 = cljs.core.nth.call(null,inst_16737,(1),null);var state_16830__$1 = (function (){var statearr_16833 = state_16830;(statearr_16833[(8)] = inst_16738);
return statearr_16833;
})();if(cljs.core.truth_(inst_16739))
{var statearr_16834_16918 = state_16830__$1;(statearr_16834_16918[(1)] = (22));
} else
{var statearr_16835_16919 = state_16830__$1;(statearr_16835_16919[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (27)))
{var inst_16767 = (state_16830[(9)]);var inst_16769 = (state_16830[(10)]);var inst_16774 = cljs.core._nth.call(null,inst_16767,inst_16769);var state_16830__$1 = (function (){var statearr_16836 = state_16830;(statearr_16836[(11)] = inst_16774);
return statearr_16836;
})();var statearr_16837_16920 = state_16830__$1;(statearr_16837_16920[(2)] = null);
(statearr_16837_16920[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (1)))
{var state_16830__$1 = state_16830;var statearr_16838_16921 = state_16830__$1;(statearr_16838_16921[(2)] = null);
(statearr_16838_16921[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (24)))
{var inst_16727 = (state_16830[(7)]);var inst_16744 = (state_16830[(2)]);var inst_16745 = cljs.core.next.call(null,inst_16727);var inst_16707 = inst_16745;var inst_16708 = null;var inst_16709 = (0);var inst_16710 = (0);var state_16830__$1 = (function (){var statearr_16839 = state_16830;(statearr_16839[(12)] = inst_16709);
(statearr_16839[(13)] = inst_16744);
(statearr_16839[(14)] = inst_16707);
(statearr_16839[(15)] = inst_16710);
(statearr_16839[(16)] = inst_16708);
return statearr_16839;
})();var statearr_16840_16922 = state_16830__$1;(statearr_16840_16922[(2)] = null);
(statearr_16840_16922[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (39)))
{var inst_16787 = (state_16830[(17)]);var inst_16805 = (state_16830[(2)]);var inst_16806 = cljs.core.next.call(null,inst_16787);var inst_16766 = inst_16806;var inst_16767 = null;var inst_16768 = (0);var inst_16769 = (0);var state_16830__$1 = (function (){var statearr_16844 = state_16830;(statearr_16844[(9)] = inst_16767);
(statearr_16844[(18)] = inst_16766);
(statearr_16844[(19)] = inst_16768);
(statearr_16844[(20)] = inst_16805);
(statearr_16844[(10)] = inst_16769);
return statearr_16844;
})();var statearr_16845_16923 = state_16830__$1;(statearr_16845_16923[(2)] = null);
(statearr_16845_16923[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (4)))
{var inst_16698 = (state_16830[(21)]);var inst_16698__$1 = (state_16830[(2)]);var inst_16699 = (inst_16698__$1 == null);var state_16830__$1 = (function (){var statearr_16846 = state_16830;(statearr_16846[(21)] = inst_16698__$1);
return statearr_16846;
})();if(cljs.core.truth_(inst_16699))
{var statearr_16847_16924 = state_16830__$1;(statearr_16847_16924[(1)] = (5));
} else
{var statearr_16848_16925 = state_16830__$1;(statearr_16848_16925[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (15)))
{var inst_16709 = (state_16830[(12)]);var inst_16707 = (state_16830[(14)]);var inst_16710 = (state_16830[(15)]);var inst_16708 = (state_16830[(16)]);var inst_16723 = (state_16830[(2)]);var inst_16724 = (inst_16710 + (1));var tmp16841 = inst_16709;var tmp16842 = inst_16707;var tmp16843 = inst_16708;var inst_16707__$1 = tmp16842;var inst_16708__$1 = tmp16843;var inst_16709__$1 = tmp16841;var inst_16710__$1 = inst_16724;var state_16830__$1 = (function (){var statearr_16849 = state_16830;(statearr_16849[(12)] = inst_16709__$1);
(statearr_16849[(14)] = inst_16707__$1);
(statearr_16849[(15)] = inst_16710__$1);
(statearr_16849[(16)] = inst_16708__$1);
(statearr_16849[(22)] = inst_16723);
return statearr_16849;
})();var statearr_16850_16926 = state_16830__$1;(statearr_16850_16926[(2)] = null);
(statearr_16850_16926[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (21)))
{var inst_16748 = (state_16830[(2)]);var state_16830__$1 = state_16830;var statearr_16851_16927 = state_16830__$1;(statearr_16851_16927[(2)] = inst_16748);
(statearr_16851_16927[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (31)))
{var inst_16774 = (state_16830[(11)]);var inst_16775 = (state_16830[(2)]);var inst_16776 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16777 = cljs.core.async.untap_STAR_.call(null,m,inst_16774);var state_16830__$1 = (function (){var statearr_16852 = state_16830;(statearr_16852[(23)] = inst_16775);
(statearr_16852[(24)] = inst_16776);
return statearr_16852;
})();var statearr_16853_16928 = state_16830__$1;(statearr_16853_16928[(2)] = inst_16777);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16830__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (32)))
{var inst_16774 = (state_16830[(11)]);var inst_16698 = (state_16830[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16830,(31),Object,null,(30));var inst_16781 = cljs.core.async.put_BANG_.call(null,inst_16774,inst_16698,done);var state_16830__$1 = state_16830;var statearr_16854_16929 = state_16830__$1;(statearr_16854_16929[(2)] = inst_16781);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16830__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (40)))
{var inst_16796 = (state_16830[(25)]);var inst_16797 = (state_16830[(2)]);var inst_16798 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16799 = cljs.core.async.untap_STAR_.call(null,m,inst_16796);var state_16830__$1 = (function (){var statearr_16855 = state_16830;(statearr_16855[(26)] = inst_16797);
(statearr_16855[(27)] = inst_16798);
return statearr_16855;
})();var statearr_16856_16930 = state_16830__$1;(statearr_16856_16930[(2)] = inst_16799);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16830__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (33)))
{var inst_16787 = (state_16830[(17)]);var inst_16789 = cljs.core.chunked_seq_QMARK_.call(null,inst_16787);var state_16830__$1 = state_16830;if(inst_16789)
{var statearr_16857_16931 = state_16830__$1;(statearr_16857_16931[(1)] = (36));
} else
{var statearr_16858_16932 = state_16830__$1;(statearr_16858_16932[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (13)))
{var inst_16717 = (state_16830[(28)]);var inst_16720 = cljs.core.async.close_BANG_.call(null,inst_16717);var state_16830__$1 = state_16830;var statearr_16859_16933 = state_16830__$1;(statearr_16859_16933[(2)] = inst_16720);
(statearr_16859_16933[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (22)))
{var inst_16738 = (state_16830[(8)]);var inst_16741 = cljs.core.async.close_BANG_.call(null,inst_16738);var state_16830__$1 = state_16830;var statearr_16860_16934 = state_16830__$1;(statearr_16860_16934[(2)] = inst_16741);
(statearr_16860_16934[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (36)))
{var inst_16787 = (state_16830[(17)]);var inst_16791 = cljs.core.chunk_first.call(null,inst_16787);var inst_16792 = cljs.core.chunk_rest.call(null,inst_16787);var inst_16793 = cljs.core.count.call(null,inst_16791);var inst_16766 = inst_16792;var inst_16767 = inst_16791;var inst_16768 = inst_16793;var inst_16769 = (0);var state_16830__$1 = (function (){var statearr_16861 = state_16830;(statearr_16861[(9)] = inst_16767);
(statearr_16861[(18)] = inst_16766);
(statearr_16861[(19)] = inst_16768);
(statearr_16861[(10)] = inst_16769);
return statearr_16861;
})();var statearr_16862_16935 = state_16830__$1;(statearr_16862_16935[(2)] = null);
(statearr_16862_16935[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (41)))
{var inst_16796 = (state_16830[(25)]);var inst_16698 = (state_16830[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16830,(40),Object,null,(39));var inst_16803 = cljs.core.async.put_BANG_.call(null,inst_16796,inst_16698,done);var state_16830__$1 = state_16830;var statearr_16863_16936 = state_16830__$1;(statearr_16863_16936[(2)] = inst_16803);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16830__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (43)))
{var state_16830__$1 = state_16830;var statearr_16864_16937 = state_16830__$1;(statearr_16864_16937[(2)] = null);
(statearr_16864_16937[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (29)))
{var inst_16814 = (state_16830[(2)]);var state_16830__$1 = state_16830;var statearr_16865_16938 = state_16830__$1;(statearr_16865_16938[(2)] = inst_16814);
(statearr_16865_16938[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (44)))
{var inst_16823 = (state_16830[(2)]);var state_16830__$1 = (function (){var statearr_16866 = state_16830;(statearr_16866[(29)] = inst_16823);
return statearr_16866;
})();var statearr_16867_16939 = state_16830__$1;(statearr_16867_16939[(2)] = null);
(statearr_16867_16939[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (6)))
{var inst_16758 = (state_16830[(30)]);var inst_16757 = cljs.core.deref.call(null,cs);var inst_16758__$1 = cljs.core.keys.call(null,inst_16757);var inst_16759 = cljs.core.count.call(null,inst_16758__$1);var inst_16760 = cljs.core.reset_BANG_.call(null,dctr,inst_16759);var inst_16765 = cljs.core.seq.call(null,inst_16758__$1);var inst_16766 = inst_16765;var inst_16767 = null;var inst_16768 = (0);var inst_16769 = (0);var state_16830__$1 = (function (){var statearr_16868 = state_16830;(statearr_16868[(9)] = inst_16767);
(statearr_16868[(31)] = inst_16760);
(statearr_16868[(18)] = inst_16766);
(statearr_16868[(19)] = inst_16768);
(statearr_16868[(30)] = inst_16758__$1);
(statearr_16868[(10)] = inst_16769);
return statearr_16868;
})();var statearr_16869_16940 = state_16830__$1;(statearr_16869_16940[(2)] = null);
(statearr_16869_16940[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (28)))
{var inst_16766 = (state_16830[(18)]);var inst_16787 = (state_16830[(17)]);var inst_16787__$1 = cljs.core.seq.call(null,inst_16766);var state_16830__$1 = (function (){var statearr_16870 = state_16830;(statearr_16870[(17)] = inst_16787__$1);
return statearr_16870;
})();if(inst_16787__$1)
{var statearr_16871_16941 = state_16830__$1;(statearr_16871_16941[(1)] = (33));
} else
{var statearr_16872_16942 = state_16830__$1;(statearr_16872_16942[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (25)))
{var inst_16768 = (state_16830[(19)]);var inst_16769 = (state_16830[(10)]);var inst_16771 = (inst_16769 < inst_16768);var inst_16772 = inst_16771;var state_16830__$1 = state_16830;if(cljs.core.truth_(inst_16772))
{var statearr_16873_16943 = state_16830__$1;(statearr_16873_16943[(1)] = (27));
} else
{var statearr_16874_16944 = state_16830__$1;(statearr_16874_16944[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (34)))
{var state_16830__$1 = state_16830;var statearr_16875_16945 = state_16830__$1;(statearr_16875_16945[(2)] = null);
(statearr_16875_16945[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (17)))
{var state_16830__$1 = state_16830;var statearr_16876_16946 = state_16830__$1;(statearr_16876_16946[(2)] = null);
(statearr_16876_16946[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (3)))
{var inst_16828 = (state_16830[(2)]);var state_16830__$1 = state_16830;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16830__$1,inst_16828);
} else
{if((state_val_16831 === (12)))
{var inst_16753 = (state_16830[(2)]);var state_16830__$1 = state_16830;var statearr_16877_16947 = state_16830__$1;(statearr_16877_16947[(2)] = inst_16753);
(statearr_16877_16947[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (2)))
{var state_16830__$1 = state_16830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16830__$1,(4),ch);
} else
{if((state_val_16831 === (23)))
{var state_16830__$1 = state_16830;var statearr_16878_16948 = state_16830__$1;(statearr_16878_16948[(2)] = null);
(statearr_16878_16948[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (35)))
{var inst_16812 = (state_16830[(2)]);var state_16830__$1 = state_16830;var statearr_16879_16949 = state_16830__$1;(statearr_16879_16949[(2)] = inst_16812);
(statearr_16879_16949[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (19)))
{var inst_16727 = (state_16830[(7)]);var inst_16731 = cljs.core.chunk_first.call(null,inst_16727);var inst_16732 = cljs.core.chunk_rest.call(null,inst_16727);var inst_16733 = cljs.core.count.call(null,inst_16731);var inst_16707 = inst_16732;var inst_16708 = inst_16731;var inst_16709 = inst_16733;var inst_16710 = (0);var state_16830__$1 = (function (){var statearr_16880 = state_16830;(statearr_16880[(12)] = inst_16709);
(statearr_16880[(14)] = inst_16707);
(statearr_16880[(15)] = inst_16710);
(statearr_16880[(16)] = inst_16708);
return statearr_16880;
})();var statearr_16881_16950 = state_16830__$1;(statearr_16881_16950[(2)] = null);
(statearr_16881_16950[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (11)))
{var inst_16707 = (state_16830[(14)]);var inst_16727 = (state_16830[(7)]);var inst_16727__$1 = cljs.core.seq.call(null,inst_16707);var state_16830__$1 = (function (){var statearr_16882 = state_16830;(statearr_16882[(7)] = inst_16727__$1);
return statearr_16882;
})();if(inst_16727__$1)
{var statearr_16883_16951 = state_16830__$1;(statearr_16883_16951[(1)] = (16));
} else
{var statearr_16884_16952 = state_16830__$1;(statearr_16884_16952[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (9)))
{var inst_16755 = (state_16830[(2)]);var state_16830__$1 = state_16830;var statearr_16885_16953 = state_16830__$1;(statearr_16885_16953[(2)] = inst_16755);
(statearr_16885_16953[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (5)))
{var inst_16705 = cljs.core.deref.call(null,cs);var inst_16706 = cljs.core.seq.call(null,inst_16705);var inst_16707 = inst_16706;var inst_16708 = null;var inst_16709 = (0);var inst_16710 = (0);var state_16830__$1 = (function (){var statearr_16886 = state_16830;(statearr_16886[(12)] = inst_16709);
(statearr_16886[(14)] = inst_16707);
(statearr_16886[(15)] = inst_16710);
(statearr_16886[(16)] = inst_16708);
return statearr_16886;
})();var statearr_16887_16954 = state_16830__$1;(statearr_16887_16954[(2)] = null);
(statearr_16887_16954[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (14)))
{var state_16830__$1 = state_16830;var statearr_16888_16955 = state_16830__$1;(statearr_16888_16955[(2)] = null);
(statearr_16888_16955[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (45)))
{var inst_16820 = (state_16830[(2)]);var state_16830__$1 = state_16830;var statearr_16889_16956 = state_16830__$1;(statearr_16889_16956[(2)] = inst_16820);
(statearr_16889_16956[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (26)))
{var inst_16758 = (state_16830[(30)]);var inst_16816 = (state_16830[(2)]);var inst_16817 = cljs.core.seq.call(null,inst_16758);var state_16830__$1 = (function (){var statearr_16890 = state_16830;(statearr_16890[(32)] = inst_16816);
return statearr_16890;
})();if(inst_16817)
{var statearr_16891_16957 = state_16830__$1;(statearr_16891_16957[(1)] = (42));
} else
{var statearr_16892_16958 = state_16830__$1;(statearr_16892_16958[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (16)))
{var inst_16727 = (state_16830[(7)]);var inst_16729 = cljs.core.chunked_seq_QMARK_.call(null,inst_16727);var state_16830__$1 = state_16830;if(inst_16729)
{var statearr_16896_16959 = state_16830__$1;(statearr_16896_16959[(1)] = (19));
} else
{var statearr_16897_16960 = state_16830__$1;(statearr_16897_16960[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (38)))
{var inst_16809 = (state_16830[(2)]);var state_16830__$1 = state_16830;var statearr_16898_16961 = state_16830__$1;(statearr_16898_16961[(2)] = inst_16809);
(statearr_16898_16961[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (30)))
{var inst_16767 = (state_16830[(9)]);var inst_16766 = (state_16830[(18)]);var inst_16768 = (state_16830[(19)]);var inst_16769 = (state_16830[(10)]);var inst_16783 = (state_16830[(2)]);var inst_16784 = (inst_16769 + (1));var tmp16893 = inst_16767;var tmp16894 = inst_16766;var tmp16895 = inst_16768;var inst_16766__$1 = tmp16894;var inst_16767__$1 = tmp16893;var inst_16768__$1 = tmp16895;var inst_16769__$1 = inst_16784;var state_16830__$1 = (function (){var statearr_16899 = state_16830;(statearr_16899[(9)] = inst_16767__$1);
(statearr_16899[(33)] = inst_16783);
(statearr_16899[(18)] = inst_16766__$1);
(statearr_16899[(19)] = inst_16768__$1);
(statearr_16899[(10)] = inst_16769__$1);
return statearr_16899;
})();var statearr_16900_16962 = state_16830__$1;(statearr_16900_16962[(2)] = null);
(statearr_16900_16962[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (10)))
{var inst_16710 = (state_16830[(15)]);var inst_16708 = (state_16830[(16)]);var inst_16716 = cljs.core._nth.call(null,inst_16708,inst_16710);var inst_16717 = cljs.core.nth.call(null,inst_16716,(0),null);var inst_16718 = cljs.core.nth.call(null,inst_16716,(1),null);var state_16830__$1 = (function (){var statearr_16901 = state_16830;(statearr_16901[(28)] = inst_16717);
return statearr_16901;
})();if(cljs.core.truth_(inst_16718))
{var statearr_16902_16963 = state_16830__$1;(statearr_16902_16963[(1)] = (13));
} else
{var statearr_16903_16964 = state_16830__$1;(statearr_16903_16964[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (18)))
{var inst_16751 = (state_16830[(2)]);var state_16830__$1 = state_16830;var statearr_16904_16965 = state_16830__$1;(statearr_16904_16965[(2)] = inst_16751);
(statearr_16904_16965[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (42)))
{var state_16830__$1 = state_16830;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16830__$1,(45),dchan);
} else
{if((state_val_16831 === (37)))
{var inst_16787 = (state_16830[(17)]);var inst_16796 = cljs.core.first.call(null,inst_16787);var state_16830__$1 = (function (){var statearr_16905 = state_16830;(statearr_16905[(25)] = inst_16796);
return statearr_16905;
})();var statearr_16906_16966 = state_16830__$1;(statearr_16906_16966[(2)] = null);
(statearr_16906_16966[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16831 === (8)))
{var inst_16709 = (state_16830[(12)]);var inst_16710 = (state_16830[(15)]);var inst_16712 = (inst_16710 < inst_16709);var inst_16713 = inst_16712;var state_16830__$1 = state_16830;if(cljs.core.truth_(inst_16713))
{var statearr_16907_16967 = state_16830__$1;(statearr_16907_16967[(1)] = (10));
} else
{var statearr_16908_16968 = state_16830__$1;(statearr_16908_16968[(1)] = (11));
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
});})(c__5693__auto___16916,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16916,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16912 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16912[(0)] = state_machine__5679__auto__);
(statearr_16912[(1)] = (1));
return statearr_16912;
});
var state_machine__5679__auto____1 = (function (state_16830){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16830);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16913){if((e16913 instanceof Object))
{var ex__5682__auto__ = e16913;var statearr_16914_16969 = state_16830;(statearr_16914_16969[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16830);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16913;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16970 = state_16830;
state_16830 = G__16970;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16830){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16830);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16916,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16915 = f__5694__auto__.call(null);(statearr_16915[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16916);
return statearr_16915;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16916,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16972 = {};return obj16972;
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
;var m = (function (){if(typeof cljs.core.async.t17082 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17082 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17083){
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
this.meta17083 = meta17083;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17082.cljs$lang$type = true;
cljs.core.async.t17082.cljs$lang$ctorStr = "cljs.core.async/t17082";
cljs.core.async.t17082.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t17082");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17082.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17082.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17082.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17082.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17082.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17082.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17082.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17082.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17082.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17084){var self__ = this;
var _17084__$1 = this;return self__.meta17083;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17082.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17084,meta17083__$1){var self__ = this;
var _17084__$1 = this;return (new cljs.core.async.t17082(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17083__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17082 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17082(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17083){return (new cljs.core.async.t17082(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17083));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17082(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___17191 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17149){var state_val_17150 = (state_17149[(1)]);if((state_val_17150 === (7)))
{var inst_17098 = (state_17149[(7)]);var inst_17103 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17098);var state_17149__$1 = state_17149;var statearr_17151_17192 = state_17149__$1;(statearr_17151_17192[(2)] = inst_17103);
(statearr_17151_17192[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (20)))
{var inst_17113 = (state_17149[(8)]);var state_17149__$1 = state_17149;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17149__$1,(23),out,inst_17113);
} else
{if((state_val_17150 === (1)))
{var inst_17088 = (state_17149[(9)]);var inst_17088__$1 = calc_state.call(null);var inst_17089 = cljs.core.seq_QMARK_.call(null,inst_17088__$1);var state_17149__$1 = (function (){var statearr_17152 = state_17149;(statearr_17152[(9)] = inst_17088__$1);
return statearr_17152;
})();if(inst_17089)
{var statearr_17153_17193 = state_17149__$1;(statearr_17153_17193[(1)] = (2));
} else
{var statearr_17154_17194 = state_17149__$1;(statearr_17154_17194[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (4)))
{var inst_17088 = (state_17149[(9)]);var inst_17094 = (state_17149[(2)]);var inst_17095 = cljs.core.get.call(null,inst_17094,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17096 = cljs.core.get.call(null,inst_17094,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17097 = cljs.core.get.call(null,inst_17094,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_17098 = inst_17088;var state_17149__$1 = (function (){var statearr_17155 = state_17149;(statearr_17155[(7)] = inst_17098);
(statearr_17155[(10)] = inst_17095);
(statearr_17155[(11)] = inst_17096);
(statearr_17155[(12)] = inst_17097);
return statearr_17155;
})();var statearr_17156_17195 = state_17149__$1;(statearr_17156_17195[(2)] = null);
(statearr_17156_17195[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (15)))
{var state_17149__$1 = state_17149;var statearr_17157_17196 = state_17149__$1;(statearr_17157_17196[(2)] = null);
(statearr_17157_17196[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (21)))
{var state_17149__$1 = state_17149;var statearr_17158_17197 = state_17149__$1;(statearr_17158_17197[(2)] = null);
(statearr_17158_17197[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (13)))
{var inst_17145 = (state_17149[(2)]);var state_17149__$1 = state_17149;var statearr_17159_17198 = state_17149__$1;(statearr_17159_17198[(2)] = inst_17145);
(statearr_17159_17198[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (22)))
{var inst_17106 = (state_17149[(13)]);var inst_17142 = (state_17149[(2)]);var inst_17098 = inst_17106;var state_17149__$1 = (function (){var statearr_17160 = state_17149;(statearr_17160[(7)] = inst_17098);
(statearr_17160[(14)] = inst_17142);
return statearr_17160;
})();var statearr_17161_17199 = state_17149__$1;(statearr_17161_17199[(2)] = null);
(statearr_17161_17199[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (6)))
{var inst_17147 = (state_17149[(2)]);var state_17149__$1 = state_17149;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17149__$1,inst_17147);
} else
{if((state_val_17150 === (17)))
{var inst_17128 = (state_17149[(15)]);var state_17149__$1 = state_17149;var statearr_17162_17200 = state_17149__$1;(statearr_17162_17200[(2)] = inst_17128);
(statearr_17162_17200[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (3)))
{var inst_17088 = (state_17149[(9)]);var state_17149__$1 = state_17149;var statearr_17163_17201 = state_17149__$1;(statearr_17163_17201[(2)] = inst_17088);
(statearr_17163_17201[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (12)))
{var inst_17114 = (state_17149[(16)]);var inst_17109 = (state_17149[(17)]);var inst_17128 = (state_17149[(15)]);var inst_17128__$1 = inst_17109.call(null,inst_17114);var state_17149__$1 = (function (){var statearr_17164 = state_17149;(statearr_17164[(15)] = inst_17128__$1);
return statearr_17164;
})();if(cljs.core.truth_(inst_17128__$1))
{var statearr_17165_17202 = state_17149__$1;(statearr_17165_17202[(1)] = (17));
} else
{var statearr_17166_17203 = state_17149__$1;(statearr_17166_17203[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (2)))
{var inst_17088 = (state_17149[(9)]);var inst_17091 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17088);var state_17149__$1 = state_17149;var statearr_17167_17204 = state_17149__$1;(statearr_17167_17204[(2)] = inst_17091);
(statearr_17167_17204[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (23)))
{var inst_17139 = (state_17149[(2)]);var state_17149__$1 = state_17149;var statearr_17168_17205 = state_17149__$1;(statearr_17168_17205[(2)] = inst_17139);
(statearr_17168_17205[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (19)))
{var inst_17136 = (state_17149[(2)]);var state_17149__$1 = state_17149;if(cljs.core.truth_(inst_17136))
{var statearr_17169_17206 = state_17149__$1;(statearr_17169_17206[(1)] = (20));
} else
{var statearr_17170_17207 = state_17149__$1;(statearr_17170_17207[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (11)))
{var inst_17113 = (state_17149[(8)]);var inst_17119 = (inst_17113 == null);var state_17149__$1 = state_17149;if(cljs.core.truth_(inst_17119))
{var statearr_17171_17208 = state_17149__$1;(statearr_17171_17208[(1)] = (14));
} else
{var statearr_17172_17209 = state_17149__$1;(statearr_17172_17209[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (9)))
{var inst_17106 = (state_17149[(13)]);var inst_17106__$1 = (state_17149[(2)]);var inst_17107 = cljs.core.get.call(null,inst_17106__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17108 = cljs.core.get.call(null,inst_17106__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17109 = cljs.core.get.call(null,inst_17106__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_17149__$1 = (function (){var statearr_17173 = state_17149;(statearr_17173[(17)] = inst_17109);
(statearr_17173[(18)] = inst_17108);
(statearr_17173[(13)] = inst_17106__$1);
return statearr_17173;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17149__$1,(10),inst_17107);
} else
{if((state_val_17150 === (5)))
{var inst_17098 = (state_17149[(7)]);var inst_17101 = cljs.core.seq_QMARK_.call(null,inst_17098);var state_17149__$1 = state_17149;if(inst_17101)
{var statearr_17174_17210 = state_17149__$1;(statearr_17174_17210[(1)] = (7));
} else
{var statearr_17175_17211 = state_17149__$1;(statearr_17175_17211[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (14)))
{var inst_17114 = (state_17149[(16)]);var inst_17121 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17114);var state_17149__$1 = state_17149;var statearr_17176_17212 = state_17149__$1;(statearr_17176_17212[(2)] = inst_17121);
(statearr_17176_17212[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (16)))
{var inst_17124 = (state_17149[(2)]);var inst_17125 = calc_state.call(null);var inst_17098 = inst_17125;var state_17149__$1 = (function (){var statearr_17177 = state_17149;(statearr_17177[(7)] = inst_17098);
(statearr_17177[(19)] = inst_17124);
return statearr_17177;
})();var statearr_17178_17213 = state_17149__$1;(statearr_17178_17213[(2)] = null);
(statearr_17178_17213[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (10)))
{var inst_17114 = (state_17149[(16)]);var inst_17113 = (state_17149[(8)]);var inst_17112 = (state_17149[(2)]);var inst_17113__$1 = cljs.core.nth.call(null,inst_17112,(0),null);var inst_17114__$1 = cljs.core.nth.call(null,inst_17112,(1),null);var inst_17115 = (inst_17113__$1 == null);var inst_17116 = cljs.core._EQ_.call(null,inst_17114__$1,change);var inst_17117 = (inst_17115) || (inst_17116);var state_17149__$1 = (function (){var statearr_17179 = state_17149;(statearr_17179[(16)] = inst_17114__$1);
(statearr_17179[(8)] = inst_17113__$1);
return statearr_17179;
})();if(cljs.core.truth_(inst_17117))
{var statearr_17180_17214 = state_17149__$1;(statearr_17180_17214[(1)] = (11));
} else
{var statearr_17181_17215 = state_17149__$1;(statearr_17181_17215[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (18)))
{var inst_17114 = (state_17149[(16)]);var inst_17109 = (state_17149[(17)]);var inst_17108 = (state_17149[(18)]);var inst_17131 = cljs.core.empty_QMARK_.call(null,inst_17109);var inst_17132 = inst_17108.call(null,inst_17114);var inst_17133 = cljs.core.not.call(null,inst_17132);var inst_17134 = (inst_17131) && (inst_17133);var state_17149__$1 = state_17149;var statearr_17182_17216 = state_17149__$1;(statearr_17182_17216[(2)] = inst_17134);
(statearr_17182_17216[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17150 === (8)))
{var inst_17098 = (state_17149[(7)]);var state_17149__$1 = state_17149;var statearr_17183_17217 = state_17149__$1;(statearr_17183_17217[(2)] = inst_17098);
(statearr_17183_17217[(1)] = (9));
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
});})(c__5693__auto___17191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___17191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17187 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17187[(0)] = state_machine__5679__auto__);
(statearr_17187[(1)] = (1));
return statearr_17187;
});
var state_machine__5679__auto____1 = (function (state_17149){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17149);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17188){if((e17188 instanceof Object))
{var ex__5682__auto__ = e17188;var statearr_17189_17218 = state_17149;(statearr_17189_17218[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17149);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17188;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17219 = state_17149;
state_17149 = G__17219;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17149){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17149);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_17190 = f__5694__auto__.call(null);(statearr_17190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17191);
return statearr_17190;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17191,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17221 = {};return obj17221;
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
return (function (p1__17222_SHARP_){if(cljs.core.truth_(p1__17222_SHARP_.call(null,topic)))
{return p1__17222_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17222_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17347 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17348){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17348 = meta17348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17347.cljs$lang$type = true;
cljs.core.async.t17347.cljs$lang$ctorStr = "cljs.core.async/t17347";
cljs.core.async.t17347.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t17347");
});})(mults,ensure_mult))
;
cljs.core.async.t17347.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17347.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17347.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17347.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17347.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17349){var self__ = this;
var _17349__$1 = this;return self__.meta17348;
});})(mults,ensure_mult))
;
cljs.core.async.t17347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17349,meta17348__$1){var self__ = this;
var _17349__$1 = this;return (new cljs.core.async.t17347(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17348__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17347 = ((function (mults,ensure_mult){
return (function __GT_t17347(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17348){return (new cljs.core.async.t17347(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17348));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17347(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___17471 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17471,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17471,mults,ensure_mult,p){
return (function (state_17423){var state_val_17424 = (state_17423[(1)]);if((state_val_17424 === (7)))
{var inst_17419 = (state_17423[(2)]);var state_17423__$1 = state_17423;var statearr_17425_17472 = state_17423__$1;(statearr_17425_17472[(2)] = inst_17419);
(statearr_17425_17472[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (20)))
{var state_17423__$1 = state_17423;var statearr_17426_17473 = state_17423__$1;(statearr_17426_17473[(2)] = null);
(statearr_17426_17473[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (1)))
{var state_17423__$1 = state_17423;var statearr_17427_17474 = state_17423__$1;(statearr_17427_17474[(2)] = null);
(statearr_17427_17474[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (24)))
{var inst_17402 = (state_17423[(7)]);var inst_17352 = (state_17423[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17423,(23),Object,null,(22));var inst_17409 = cljs.core.async.muxch_STAR_.call(null,inst_17402);var state_17423__$1 = state_17423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17423__$1,(25),inst_17409,inst_17352);
} else
{if((state_val_17424 === (4)))
{var inst_17352 = (state_17423[(8)]);var inst_17352__$1 = (state_17423[(2)]);var inst_17353 = (inst_17352__$1 == null);var state_17423__$1 = (function (){var statearr_17428 = state_17423;(statearr_17428[(8)] = inst_17352__$1);
return statearr_17428;
})();if(cljs.core.truth_(inst_17353))
{var statearr_17429_17475 = state_17423__$1;(statearr_17429_17475[(1)] = (5));
} else
{var statearr_17430_17476 = state_17423__$1;(statearr_17430_17476[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (15)))
{var inst_17394 = (state_17423[(2)]);var state_17423__$1 = state_17423;var statearr_17431_17477 = state_17423__$1;(statearr_17431_17477[(2)] = inst_17394);
(statearr_17431_17477[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (21)))
{var inst_17416 = (state_17423[(2)]);var state_17423__$1 = (function (){var statearr_17432 = state_17423;(statearr_17432[(9)] = inst_17416);
return statearr_17432;
})();var statearr_17433_17478 = state_17423__$1;(statearr_17433_17478[(2)] = null);
(statearr_17433_17478[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (13)))
{var inst_17376 = (state_17423[(10)]);var inst_17378 = cljs.core.chunked_seq_QMARK_.call(null,inst_17376);var state_17423__$1 = state_17423;if(inst_17378)
{var statearr_17434_17479 = state_17423__$1;(statearr_17434_17479[(1)] = (16));
} else
{var statearr_17435_17480 = state_17423__$1;(statearr_17435_17480[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (22)))
{var inst_17413 = (state_17423[(2)]);var state_17423__$1 = state_17423;var statearr_17436_17481 = state_17423__$1;(statearr_17436_17481[(2)] = inst_17413);
(statearr_17436_17481[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (6)))
{var inst_17402 = (state_17423[(7)]);var inst_17352 = (state_17423[(8)]);var inst_17400 = (state_17423[(11)]);var inst_17400__$1 = topic_fn.call(null,inst_17352);var inst_17401 = cljs.core.deref.call(null,mults);var inst_17402__$1 = cljs.core.get.call(null,inst_17401,inst_17400__$1);var state_17423__$1 = (function (){var statearr_17437 = state_17423;(statearr_17437[(7)] = inst_17402__$1);
(statearr_17437[(11)] = inst_17400__$1);
return statearr_17437;
})();if(cljs.core.truth_(inst_17402__$1))
{var statearr_17438_17482 = state_17423__$1;(statearr_17438_17482[(1)] = (19));
} else
{var statearr_17439_17483 = state_17423__$1;(statearr_17439_17483[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (25)))
{var inst_17411 = (state_17423[(2)]);var state_17423__$1 = state_17423;var statearr_17440_17484 = state_17423__$1;(statearr_17440_17484[(2)] = inst_17411);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17423__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (17)))
{var inst_17376 = (state_17423[(10)]);var inst_17385 = cljs.core.first.call(null,inst_17376);var inst_17386 = cljs.core.async.muxch_STAR_.call(null,inst_17385);var inst_17387 = cljs.core.async.close_BANG_.call(null,inst_17386);var inst_17388 = cljs.core.next.call(null,inst_17376);var inst_17362 = inst_17388;var inst_17363 = null;var inst_17364 = (0);var inst_17365 = (0);var state_17423__$1 = (function (){var statearr_17441 = state_17423;(statearr_17441[(12)] = inst_17363);
(statearr_17441[(13)] = inst_17387);
(statearr_17441[(14)] = inst_17362);
(statearr_17441[(15)] = inst_17364);
(statearr_17441[(16)] = inst_17365);
return statearr_17441;
})();var statearr_17442_17485 = state_17423__$1;(statearr_17442_17485[(2)] = null);
(statearr_17442_17485[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (3)))
{var inst_17421 = (state_17423[(2)]);var state_17423__$1 = state_17423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17423__$1,inst_17421);
} else
{if((state_val_17424 === (12)))
{var inst_17396 = (state_17423[(2)]);var state_17423__$1 = state_17423;var statearr_17443_17486 = state_17423__$1;(statearr_17443_17486[(2)] = inst_17396);
(statearr_17443_17486[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (2)))
{var state_17423__$1 = state_17423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17423__$1,(4),ch);
} else
{if((state_val_17424 === (23)))
{var inst_17400 = (state_17423[(11)]);var inst_17404 = (state_17423[(2)]);var inst_17405 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17400);var state_17423__$1 = (function (){var statearr_17444 = state_17423;(statearr_17444[(17)] = inst_17404);
return statearr_17444;
})();var statearr_17445_17487 = state_17423__$1;(statearr_17445_17487[(2)] = inst_17405);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17423__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (19)))
{var state_17423__$1 = state_17423;var statearr_17446_17488 = state_17423__$1;(statearr_17446_17488[(2)] = null);
(statearr_17446_17488[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (11)))
{var inst_17376 = (state_17423[(10)]);var inst_17362 = (state_17423[(14)]);var inst_17376__$1 = cljs.core.seq.call(null,inst_17362);var state_17423__$1 = (function (){var statearr_17447 = state_17423;(statearr_17447[(10)] = inst_17376__$1);
return statearr_17447;
})();if(inst_17376__$1)
{var statearr_17448_17489 = state_17423__$1;(statearr_17448_17489[(1)] = (13));
} else
{var statearr_17449_17490 = state_17423__$1;(statearr_17449_17490[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (9)))
{var inst_17398 = (state_17423[(2)]);var state_17423__$1 = state_17423;var statearr_17450_17491 = state_17423__$1;(statearr_17450_17491[(2)] = inst_17398);
(statearr_17450_17491[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (5)))
{var inst_17359 = cljs.core.deref.call(null,mults);var inst_17360 = cljs.core.vals.call(null,inst_17359);var inst_17361 = cljs.core.seq.call(null,inst_17360);var inst_17362 = inst_17361;var inst_17363 = null;var inst_17364 = (0);var inst_17365 = (0);var state_17423__$1 = (function (){var statearr_17451 = state_17423;(statearr_17451[(12)] = inst_17363);
(statearr_17451[(14)] = inst_17362);
(statearr_17451[(15)] = inst_17364);
(statearr_17451[(16)] = inst_17365);
return statearr_17451;
})();var statearr_17452_17492 = state_17423__$1;(statearr_17452_17492[(2)] = null);
(statearr_17452_17492[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (14)))
{var state_17423__$1 = state_17423;var statearr_17456_17493 = state_17423__$1;(statearr_17456_17493[(2)] = null);
(statearr_17456_17493[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (16)))
{var inst_17376 = (state_17423[(10)]);var inst_17380 = cljs.core.chunk_first.call(null,inst_17376);var inst_17381 = cljs.core.chunk_rest.call(null,inst_17376);var inst_17382 = cljs.core.count.call(null,inst_17380);var inst_17362 = inst_17381;var inst_17363 = inst_17380;var inst_17364 = inst_17382;var inst_17365 = (0);var state_17423__$1 = (function (){var statearr_17457 = state_17423;(statearr_17457[(12)] = inst_17363);
(statearr_17457[(14)] = inst_17362);
(statearr_17457[(15)] = inst_17364);
(statearr_17457[(16)] = inst_17365);
return statearr_17457;
})();var statearr_17458_17494 = state_17423__$1;(statearr_17458_17494[(2)] = null);
(statearr_17458_17494[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (10)))
{var inst_17363 = (state_17423[(12)]);var inst_17362 = (state_17423[(14)]);var inst_17364 = (state_17423[(15)]);var inst_17365 = (state_17423[(16)]);var inst_17370 = cljs.core._nth.call(null,inst_17363,inst_17365);var inst_17371 = cljs.core.async.muxch_STAR_.call(null,inst_17370);var inst_17372 = cljs.core.async.close_BANG_.call(null,inst_17371);var inst_17373 = (inst_17365 + (1));var tmp17453 = inst_17363;var tmp17454 = inst_17362;var tmp17455 = inst_17364;var inst_17362__$1 = tmp17454;var inst_17363__$1 = tmp17453;var inst_17364__$1 = tmp17455;var inst_17365__$1 = inst_17373;var state_17423__$1 = (function (){var statearr_17459 = state_17423;(statearr_17459[(12)] = inst_17363__$1);
(statearr_17459[(18)] = inst_17372);
(statearr_17459[(14)] = inst_17362__$1);
(statearr_17459[(15)] = inst_17364__$1);
(statearr_17459[(16)] = inst_17365__$1);
return statearr_17459;
})();var statearr_17460_17495 = state_17423__$1;(statearr_17460_17495[(2)] = null);
(statearr_17460_17495[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (18)))
{var inst_17391 = (state_17423[(2)]);var state_17423__$1 = state_17423;var statearr_17461_17496 = state_17423__$1;(statearr_17461_17496[(2)] = inst_17391);
(statearr_17461_17496[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17424 === (8)))
{var inst_17364 = (state_17423[(15)]);var inst_17365 = (state_17423[(16)]);var inst_17367 = (inst_17365 < inst_17364);var inst_17368 = inst_17367;var state_17423__$1 = state_17423;if(cljs.core.truth_(inst_17368))
{var statearr_17462_17497 = state_17423__$1;(statearr_17462_17497[(1)] = (10));
} else
{var statearr_17463_17498 = state_17423__$1;(statearr_17463_17498[(1)] = (11));
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
});})(c__5693__auto___17471,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___17471,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17467 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17467[(0)] = state_machine__5679__auto__);
(statearr_17467[(1)] = (1));
return statearr_17467;
});
var state_machine__5679__auto____1 = (function (state_17423){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17423);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17468){if((e17468 instanceof Object))
{var ex__5682__auto__ = e17468;var statearr_17469_17499 = state_17423;(statearr_17469_17499[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17423);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17468;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17500 = state_17423;
state_17423 = G__17500;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17423){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17471,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_17470 = f__5694__auto__.call(null);(statearr_17470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17471);
return statearr_17470;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17471,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___17637 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17637,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17637,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17607){var state_val_17608 = (state_17607[(1)]);if((state_val_17608 === (7)))
{var state_17607__$1 = state_17607;var statearr_17609_17638 = state_17607__$1;(statearr_17609_17638[(2)] = null);
(statearr_17609_17638[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (1)))
{var state_17607__$1 = state_17607;var statearr_17610_17639 = state_17607__$1;(statearr_17610_17639[(2)] = null);
(statearr_17610_17639[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (4)))
{var inst_17571 = (state_17607[(7)]);var inst_17573 = (inst_17571 < cnt);var state_17607__$1 = state_17607;if(cljs.core.truth_(inst_17573))
{var statearr_17611_17640 = state_17607__$1;(statearr_17611_17640[(1)] = (6));
} else
{var statearr_17612_17641 = state_17607__$1;(statearr_17612_17641[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (15)))
{var inst_17603 = (state_17607[(2)]);var state_17607__$1 = state_17607;var statearr_17613_17642 = state_17607__$1;(statearr_17613_17642[(2)] = inst_17603);
(statearr_17613_17642[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (13)))
{var inst_17596 = cljs.core.async.close_BANG_.call(null,out);var state_17607__$1 = state_17607;var statearr_17614_17643 = state_17607__$1;(statearr_17614_17643[(2)] = inst_17596);
(statearr_17614_17643[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (6)))
{var state_17607__$1 = state_17607;var statearr_17615_17644 = state_17607__$1;(statearr_17615_17644[(2)] = null);
(statearr_17615_17644[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (3)))
{var inst_17605 = (state_17607[(2)]);var state_17607__$1 = state_17607;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17607__$1,inst_17605);
} else
{if((state_val_17608 === (12)))
{var inst_17593 = (state_17607[(8)]);var inst_17593__$1 = (state_17607[(2)]);var inst_17594 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17593__$1);var state_17607__$1 = (function (){var statearr_17616 = state_17607;(statearr_17616[(8)] = inst_17593__$1);
return statearr_17616;
})();if(cljs.core.truth_(inst_17594))
{var statearr_17617_17645 = state_17607__$1;(statearr_17617_17645[(1)] = (13));
} else
{var statearr_17618_17646 = state_17607__$1;(statearr_17618_17646[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (2)))
{var inst_17570 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17571 = (0);var state_17607__$1 = (function (){var statearr_17619 = state_17607;(statearr_17619[(7)] = inst_17571);
(statearr_17619[(9)] = inst_17570);
return statearr_17619;
})();var statearr_17620_17647 = state_17607__$1;(statearr_17620_17647[(2)] = null);
(statearr_17620_17647[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (11)))
{var inst_17571 = (state_17607[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17607,(10),Object,null,(9));var inst_17580 = chs__$1.call(null,inst_17571);var inst_17581 = done.call(null,inst_17571);var inst_17582 = cljs.core.async.take_BANG_.call(null,inst_17580,inst_17581);var state_17607__$1 = state_17607;var statearr_17621_17648 = state_17607__$1;(statearr_17621_17648[(2)] = inst_17582);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17607__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (9)))
{var inst_17571 = (state_17607[(7)]);var inst_17584 = (state_17607[(2)]);var inst_17585 = (inst_17571 + (1));var inst_17571__$1 = inst_17585;var state_17607__$1 = (function (){var statearr_17622 = state_17607;(statearr_17622[(10)] = inst_17584);
(statearr_17622[(7)] = inst_17571__$1);
return statearr_17622;
})();var statearr_17623_17649 = state_17607__$1;(statearr_17623_17649[(2)] = null);
(statearr_17623_17649[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (5)))
{var inst_17591 = (state_17607[(2)]);var state_17607__$1 = (function (){var statearr_17624 = state_17607;(statearr_17624[(11)] = inst_17591);
return statearr_17624;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17607__$1,(12),dchan);
} else
{if((state_val_17608 === (14)))
{var inst_17593 = (state_17607[(8)]);var inst_17598 = cljs.core.apply.call(null,f,inst_17593);var state_17607__$1 = state_17607;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17607__$1,(16),out,inst_17598);
} else
{if((state_val_17608 === (16)))
{var inst_17600 = (state_17607[(2)]);var state_17607__$1 = (function (){var statearr_17625 = state_17607;(statearr_17625[(12)] = inst_17600);
return statearr_17625;
})();var statearr_17626_17650 = state_17607__$1;(statearr_17626_17650[(2)] = null);
(statearr_17626_17650[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (10)))
{var inst_17575 = (state_17607[(2)]);var inst_17576 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17607__$1 = (function (){var statearr_17627 = state_17607;(statearr_17627[(13)] = inst_17575);
return statearr_17627;
})();var statearr_17628_17651 = state_17607__$1;(statearr_17628_17651[(2)] = inst_17576);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17607__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17608 === (8)))
{var inst_17589 = (state_17607[(2)]);var state_17607__$1 = state_17607;var statearr_17629_17652 = state_17607__$1;(statearr_17629_17652[(2)] = inst_17589);
(statearr_17629_17652[(1)] = (5));
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
});})(c__5693__auto___17637,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___17637,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17633 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17633[(0)] = state_machine__5679__auto__);
(statearr_17633[(1)] = (1));
return statearr_17633;
});
var state_machine__5679__auto____1 = (function (state_17607){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17607);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17634){if((e17634 instanceof Object))
{var ex__5682__auto__ = e17634;var statearr_17635_17653 = state_17607;(statearr_17635_17653[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17607);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17634;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17654 = state_17607;
state_17607 = G__17654;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17607){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17607);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17637,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_17636 = f__5694__auto__.call(null);(statearr_17636[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17637);
return statearr_17636;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17637,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17762 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17762,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17762,out){
return (function (state_17738){var state_val_17739 = (state_17738[(1)]);if((state_val_17739 === (7)))
{var inst_17717 = (state_17738[(7)]);var inst_17718 = (state_17738[(8)]);var inst_17717__$1 = (state_17738[(2)]);var inst_17718__$1 = cljs.core.nth.call(null,inst_17717__$1,(0),null);var inst_17719 = cljs.core.nth.call(null,inst_17717__$1,(1),null);var inst_17720 = (inst_17718__$1 == null);var state_17738__$1 = (function (){var statearr_17740 = state_17738;(statearr_17740[(7)] = inst_17717__$1);
(statearr_17740[(9)] = inst_17719);
(statearr_17740[(8)] = inst_17718__$1);
return statearr_17740;
})();if(cljs.core.truth_(inst_17720))
{var statearr_17741_17763 = state_17738__$1;(statearr_17741_17763[(1)] = (8));
} else
{var statearr_17742_17764 = state_17738__$1;(statearr_17742_17764[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17739 === (1)))
{var inst_17709 = cljs.core.vec.call(null,chs);var inst_17710 = inst_17709;var state_17738__$1 = (function (){var statearr_17743 = state_17738;(statearr_17743[(10)] = inst_17710);
return statearr_17743;
})();var statearr_17744_17765 = state_17738__$1;(statearr_17744_17765[(2)] = null);
(statearr_17744_17765[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17739 === (4)))
{var inst_17710 = (state_17738[(10)]);var state_17738__$1 = state_17738;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17738__$1,(7),inst_17710);
} else
{if((state_val_17739 === (6)))
{var inst_17734 = (state_17738[(2)]);var state_17738__$1 = state_17738;var statearr_17745_17766 = state_17738__$1;(statearr_17745_17766[(2)] = inst_17734);
(statearr_17745_17766[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17739 === (3)))
{var inst_17736 = (state_17738[(2)]);var state_17738__$1 = state_17738;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17738__$1,inst_17736);
} else
{if((state_val_17739 === (2)))
{var inst_17710 = (state_17738[(10)]);var inst_17712 = cljs.core.count.call(null,inst_17710);var inst_17713 = (inst_17712 > (0));var state_17738__$1 = state_17738;if(cljs.core.truth_(inst_17713))
{var statearr_17747_17767 = state_17738__$1;(statearr_17747_17767[(1)] = (4));
} else
{var statearr_17748_17768 = state_17738__$1;(statearr_17748_17768[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17739 === (11)))
{var inst_17710 = (state_17738[(10)]);var inst_17727 = (state_17738[(2)]);var tmp17746 = inst_17710;var inst_17710__$1 = tmp17746;var state_17738__$1 = (function (){var statearr_17749 = state_17738;(statearr_17749[(11)] = inst_17727);
(statearr_17749[(10)] = inst_17710__$1);
return statearr_17749;
})();var statearr_17750_17769 = state_17738__$1;(statearr_17750_17769[(2)] = null);
(statearr_17750_17769[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17739 === (9)))
{var inst_17718 = (state_17738[(8)]);var state_17738__$1 = state_17738;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17738__$1,(11),out,inst_17718);
} else
{if((state_val_17739 === (5)))
{var inst_17732 = cljs.core.async.close_BANG_.call(null,out);var state_17738__$1 = state_17738;var statearr_17751_17770 = state_17738__$1;(statearr_17751_17770[(2)] = inst_17732);
(statearr_17751_17770[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17739 === (10)))
{var inst_17730 = (state_17738[(2)]);var state_17738__$1 = state_17738;var statearr_17752_17771 = state_17738__$1;(statearr_17752_17771[(2)] = inst_17730);
(statearr_17752_17771[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17739 === (8)))
{var inst_17717 = (state_17738[(7)]);var inst_17710 = (state_17738[(10)]);var inst_17719 = (state_17738[(9)]);var inst_17718 = (state_17738[(8)]);var inst_17722 = (function (){var c = inst_17719;var v = inst_17718;var vec__17715 = inst_17717;var cs = inst_17710;return ((function (c,v,vec__17715,cs,inst_17717,inst_17710,inst_17719,inst_17718,state_val_17739,c__5693__auto___17762,out){
return (function (p1__17655_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17655_SHARP_);
});
;})(c,v,vec__17715,cs,inst_17717,inst_17710,inst_17719,inst_17718,state_val_17739,c__5693__auto___17762,out))
})();var inst_17723 = cljs.core.filterv.call(null,inst_17722,inst_17710);var inst_17710__$1 = inst_17723;var state_17738__$1 = (function (){var statearr_17753 = state_17738;(statearr_17753[(10)] = inst_17710__$1);
return statearr_17753;
})();var statearr_17754_17772 = state_17738__$1;(statearr_17754_17772[(2)] = null);
(statearr_17754_17772[(1)] = (2));
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
});})(c__5693__auto___17762,out))
;return ((function (switch__5678__auto__,c__5693__auto___17762,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17758 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17758[(0)] = state_machine__5679__auto__);
(statearr_17758[(1)] = (1));
return statearr_17758;
});
var state_machine__5679__auto____1 = (function (state_17738){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17738);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17759){if((e17759 instanceof Object))
{var ex__5682__auto__ = e17759;var statearr_17760_17773 = state_17738;(statearr_17760_17773[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17738);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17774 = state_17738;
state_17738 = G__17774;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17738){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17738);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17762,out))
})();var state__5695__auto__ = (function (){var statearr_17761 = f__5694__auto__.call(null);(statearr_17761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17762);
return statearr_17761;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17762,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17867 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17867,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17867,out){
return (function (state_17844){var state_val_17845 = (state_17844[(1)]);if((state_val_17845 === (7)))
{var inst_17826 = (state_17844[(7)]);var inst_17826__$1 = (state_17844[(2)]);var inst_17827 = (inst_17826__$1 == null);var inst_17828 = cljs.core.not.call(null,inst_17827);var state_17844__$1 = (function (){var statearr_17846 = state_17844;(statearr_17846[(7)] = inst_17826__$1);
return statearr_17846;
})();if(inst_17828)
{var statearr_17847_17868 = state_17844__$1;(statearr_17847_17868[(1)] = (8));
} else
{var statearr_17848_17869 = state_17844__$1;(statearr_17848_17869[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17845 === (1)))
{var inst_17821 = (0);var state_17844__$1 = (function (){var statearr_17849 = state_17844;(statearr_17849[(8)] = inst_17821);
return statearr_17849;
})();var statearr_17850_17870 = state_17844__$1;(statearr_17850_17870[(2)] = null);
(statearr_17850_17870[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17845 === (4)))
{var state_17844__$1 = state_17844;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17844__$1,(7),ch);
} else
{if((state_val_17845 === (6)))
{var inst_17839 = (state_17844[(2)]);var state_17844__$1 = state_17844;var statearr_17851_17871 = state_17844__$1;(statearr_17851_17871[(2)] = inst_17839);
(statearr_17851_17871[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17845 === (3)))
{var inst_17841 = (state_17844[(2)]);var inst_17842 = cljs.core.async.close_BANG_.call(null,out);var state_17844__$1 = (function (){var statearr_17852 = state_17844;(statearr_17852[(9)] = inst_17841);
return statearr_17852;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17844__$1,inst_17842);
} else
{if((state_val_17845 === (2)))
{var inst_17821 = (state_17844[(8)]);var inst_17823 = (inst_17821 < n);var state_17844__$1 = state_17844;if(cljs.core.truth_(inst_17823))
{var statearr_17853_17872 = state_17844__$1;(statearr_17853_17872[(1)] = (4));
} else
{var statearr_17854_17873 = state_17844__$1;(statearr_17854_17873[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17845 === (11)))
{var inst_17821 = (state_17844[(8)]);var inst_17831 = (state_17844[(2)]);var inst_17832 = (inst_17821 + (1));var inst_17821__$1 = inst_17832;var state_17844__$1 = (function (){var statearr_17855 = state_17844;(statearr_17855[(8)] = inst_17821__$1);
(statearr_17855[(10)] = inst_17831);
return statearr_17855;
})();var statearr_17856_17874 = state_17844__$1;(statearr_17856_17874[(2)] = null);
(statearr_17856_17874[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17845 === (9)))
{var state_17844__$1 = state_17844;var statearr_17857_17875 = state_17844__$1;(statearr_17857_17875[(2)] = null);
(statearr_17857_17875[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17845 === (5)))
{var state_17844__$1 = state_17844;var statearr_17858_17876 = state_17844__$1;(statearr_17858_17876[(2)] = null);
(statearr_17858_17876[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17845 === (10)))
{var inst_17836 = (state_17844[(2)]);var state_17844__$1 = state_17844;var statearr_17859_17877 = state_17844__$1;(statearr_17859_17877[(2)] = inst_17836);
(statearr_17859_17877[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17845 === (8)))
{var inst_17826 = (state_17844[(7)]);var state_17844__$1 = state_17844;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17844__$1,(11),out,inst_17826);
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
});})(c__5693__auto___17867,out))
;return ((function (switch__5678__auto__,c__5693__auto___17867,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17863 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17863[(0)] = state_machine__5679__auto__);
(statearr_17863[(1)] = (1));
return statearr_17863;
});
var state_machine__5679__auto____1 = (function (state_17844){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17844);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17864){if((e17864 instanceof Object))
{var ex__5682__auto__ = e17864;var statearr_17865_17878 = state_17844;(statearr_17865_17878[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17844);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17864;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17879 = state_17844;
state_17844 = G__17879;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17844){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17867,out))
})();var state__5695__auto__ = (function (){var statearr_17866 = f__5694__auto__.call(null);(statearr_17866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17867);
return statearr_17866;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17867,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17976 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17976,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17976,out){
return (function (state_17951){var state_val_17952 = (state_17951[(1)]);if((state_val_17952 === (7)))
{var inst_17946 = (state_17951[(2)]);var state_17951__$1 = state_17951;var statearr_17953_17977 = state_17951__$1;(statearr_17953_17977[(2)] = inst_17946);
(statearr_17953_17977[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17952 === (1)))
{var inst_17928 = null;var state_17951__$1 = (function (){var statearr_17954 = state_17951;(statearr_17954[(7)] = inst_17928);
return statearr_17954;
})();var statearr_17955_17978 = state_17951__$1;(statearr_17955_17978[(2)] = null);
(statearr_17955_17978[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17952 === (4)))
{var inst_17931 = (state_17951[(8)]);var inst_17931__$1 = (state_17951[(2)]);var inst_17932 = (inst_17931__$1 == null);var inst_17933 = cljs.core.not.call(null,inst_17932);var state_17951__$1 = (function (){var statearr_17956 = state_17951;(statearr_17956[(8)] = inst_17931__$1);
return statearr_17956;
})();if(inst_17933)
{var statearr_17957_17979 = state_17951__$1;(statearr_17957_17979[(1)] = (5));
} else
{var statearr_17958_17980 = state_17951__$1;(statearr_17958_17980[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17952 === (6)))
{var state_17951__$1 = state_17951;var statearr_17959_17981 = state_17951__$1;(statearr_17959_17981[(2)] = null);
(statearr_17959_17981[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17952 === (3)))
{var inst_17948 = (state_17951[(2)]);var inst_17949 = cljs.core.async.close_BANG_.call(null,out);var state_17951__$1 = (function (){var statearr_17960 = state_17951;(statearr_17960[(9)] = inst_17948);
return statearr_17960;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17951__$1,inst_17949);
} else
{if((state_val_17952 === (2)))
{var state_17951__$1 = state_17951;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17951__$1,(4),ch);
} else
{if((state_val_17952 === (11)))
{var inst_17931 = (state_17951[(8)]);var inst_17940 = (state_17951[(2)]);var inst_17928 = inst_17931;var state_17951__$1 = (function (){var statearr_17961 = state_17951;(statearr_17961[(7)] = inst_17928);
(statearr_17961[(10)] = inst_17940);
return statearr_17961;
})();var statearr_17962_17982 = state_17951__$1;(statearr_17962_17982[(2)] = null);
(statearr_17962_17982[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17952 === (9)))
{var inst_17931 = (state_17951[(8)]);var state_17951__$1 = state_17951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17951__$1,(11),out,inst_17931);
} else
{if((state_val_17952 === (5)))
{var inst_17931 = (state_17951[(8)]);var inst_17928 = (state_17951[(7)]);var inst_17935 = cljs.core._EQ_.call(null,inst_17931,inst_17928);var state_17951__$1 = state_17951;if(inst_17935)
{var statearr_17964_17983 = state_17951__$1;(statearr_17964_17983[(1)] = (8));
} else
{var statearr_17965_17984 = state_17951__$1;(statearr_17965_17984[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17952 === (10)))
{var inst_17943 = (state_17951[(2)]);var state_17951__$1 = state_17951;var statearr_17966_17985 = state_17951__$1;(statearr_17966_17985[(2)] = inst_17943);
(statearr_17966_17985[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17952 === (8)))
{var inst_17928 = (state_17951[(7)]);var tmp17963 = inst_17928;var inst_17928__$1 = tmp17963;var state_17951__$1 = (function (){var statearr_17967 = state_17951;(statearr_17967[(7)] = inst_17928__$1);
return statearr_17967;
})();var statearr_17968_17986 = state_17951__$1;(statearr_17968_17986[(2)] = null);
(statearr_17968_17986[(1)] = (2));
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
});})(c__5693__auto___17976,out))
;return ((function (switch__5678__auto__,c__5693__auto___17976,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17972 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17972[(0)] = state_machine__5679__auto__);
(statearr_17972[(1)] = (1));
return statearr_17972;
});
var state_machine__5679__auto____1 = (function (state_17951){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17951);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17973){if((e17973 instanceof Object))
{var ex__5682__auto__ = e17973;var statearr_17974_17987 = state_17951;(statearr_17974_17987[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17951);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17973;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17988 = state_17951;
state_17951 = G__17988;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17951){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17976,out))
})();var state__5695__auto__ = (function (){var statearr_17975 = f__5694__auto__.call(null);(statearr_17975[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17976);
return statearr_17975;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17976,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___18123 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___18123,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___18123,out){
return (function (state_18093){var state_val_18094 = (state_18093[(1)]);if((state_val_18094 === (7)))
{var inst_18089 = (state_18093[(2)]);var state_18093__$1 = state_18093;var statearr_18095_18124 = state_18093__$1;(statearr_18095_18124[(2)] = inst_18089);
(statearr_18095_18124[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (1)))
{var inst_18056 = (new Array(n));var inst_18057 = inst_18056;var inst_18058 = (0);var state_18093__$1 = (function (){var statearr_18096 = state_18093;(statearr_18096[(7)] = inst_18057);
(statearr_18096[(8)] = inst_18058);
return statearr_18096;
})();var statearr_18097_18125 = state_18093__$1;(statearr_18097_18125[(2)] = null);
(statearr_18097_18125[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (4)))
{var inst_18061 = (state_18093[(9)]);var inst_18061__$1 = (state_18093[(2)]);var inst_18062 = (inst_18061__$1 == null);var inst_18063 = cljs.core.not.call(null,inst_18062);var state_18093__$1 = (function (){var statearr_18098 = state_18093;(statearr_18098[(9)] = inst_18061__$1);
return statearr_18098;
})();if(inst_18063)
{var statearr_18099_18126 = state_18093__$1;(statearr_18099_18126[(1)] = (5));
} else
{var statearr_18100_18127 = state_18093__$1;(statearr_18100_18127[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (15)))
{var inst_18083 = (state_18093[(2)]);var state_18093__$1 = state_18093;var statearr_18101_18128 = state_18093__$1;(statearr_18101_18128[(2)] = inst_18083);
(statearr_18101_18128[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (13)))
{var state_18093__$1 = state_18093;var statearr_18102_18129 = state_18093__$1;(statearr_18102_18129[(2)] = null);
(statearr_18102_18129[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (6)))
{var inst_18058 = (state_18093[(8)]);var inst_18079 = (inst_18058 > (0));var state_18093__$1 = state_18093;if(cljs.core.truth_(inst_18079))
{var statearr_18103_18130 = state_18093__$1;(statearr_18103_18130[(1)] = (12));
} else
{var statearr_18104_18131 = state_18093__$1;(statearr_18104_18131[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (3)))
{var inst_18091 = (state_18093[(2)]);var state_18093__$1 = state_18093;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18093__$1,inst_18091);
} else
{if((state_val_18094 === (12)))
{var inst_18057 = (state_18093[(7)]);var inst_18081 = cljs.core.vec.call(null,inst_18057);var state_18093__$1 = state_18093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18093__$1,(15),out,inst_18081);
} else
{if((state_val_18094 === (2)))
{var state_18093__$1 = state_18093;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18093__$1,(4),ch);
} else
{if((state_val_18094 === (11)))
{var inst_18073 = (state_18093[(2)]);var inst_18074 = (new Array(n));var inst_18057 = inst_18074;var inst_18058 = (0);var state_18093__$1 = (function (){var statearr_18105 = state_18093;(statearr_18105[(7)] = inst_18057);
(statearr_18105[(8)] = inst_18058);
(statearr_18105[(10)] = inst_18073);
return statearr_18105;
})();var statearr_18106_18132 = state_18093__$1;(statearr_18106_18132[(2)] = null);
(statearr_18106_18132[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (9)))
{var inst_18057 = (state_18093[(7)]);var inst_18071 = cljs.core.vec.call(null,inst_18057);var state_18093__$1 = state_18093;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18093__$1,(11),out,inst_18071);
} else
{if((state_val_18094 === (5)))
{var inst_18057 = (state_18093[(7)]);var inst_18058 = (state_18093[(8)]);var inst_18066 = (state_18093[(11)]);var inst_18061 = (state_18093[(9)]);var inst_18065 = (inst_18057[inst_18058] = inst_18061);var inst_18066__$1 = (inst_18058 + (1));var inst_18067 = (inst_18066__$1 < n);var state_18093__$1 = (function (){var statearr_18107 = state_18093;(statearr_18107[(11)] = inst_18066__$1);
(statearr_18107[(12)] = inst_18065);
return statearr_18107;
})();if(cljs.core.truth_(inst_18067))
{var statearr_18108_18133 = state_18093__$1;(statearr_18108_18133[(1)] = (8));
} else
{var statearr_18109_18134 = state_18093__$1;(statearr_18109_18134[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (14)))
{var inst_18086 = (state_18093[(2)]);var inst_18087 = cljs.core.async.close_BANG_.call(null,out);var state_18093__$1 = (function (){var statearr_18111 = state_18093;(statearr_18111[(13)] = inst_18086);
return statearr_18111;
})();var statearr_18112_18135 = state_18093__$1;(statearr_18112_18135[(2)] = inst_18087);
(statearr_18112_18135[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (10)))
{var inst_18077 = (state_18093[(2)]);var state_18093__$1 = state_18093;var statearr_18113_18136 = state_18093__$1;(statearr_18113_18136[(2)] = inst_18077);
(statearr_18113_18136[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18094 === (8)))
{var inst_18057 = (state_18093[(7)]);var inst_18066 = (state_18093[(11)]);var tmp18110 = inst_18057;var inst_18057__$1 = tmp18110;var inst_18058 = inst_18066;var state_18093__$1 = (function (){var statearr_18114 = state_18093;(statearr_18114[(7)] = inst_18057__$1);
(statearr_18114[(8)] = inst_18058);
return statearr_18114;
})();var statearr_18115_18137 = state_18093__$1;(statearr_18115_18137[(2)] = null);
(statearr_18115_18137[(1)] = (2));
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
});})(c__5693__auto___18123,out))
;return ((function (switch__5678__auto__,c__5693__auto___18123,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_18119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18119[(0)] = state_machine__5679__auto__);
(statearr_18119[(1)] = (1));
return statearr_18119;
});
var state_machine__5679__auto____1 = (function (state_18093){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_18093);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e18120){if((e18120 instanceof Object))
{var ex__5682__auto__ = e18120;var statearr_18121_18138 = state_18093;(statearr_18121_18138[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18093);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18139 = state_18093;
state_18093 = G__18139;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_18093){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_18093);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___18123,out))
})();var state__5695__auto__ = (function (){var statearr_18122 = f__5694__auto__.call(null);(statearr_18122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___18123);
return statearr_18122;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___18123,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___18282 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___18282,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___18282,out){
return (function (state_18252){var state_val_18253 = (state_18252[(1)]);if((state_val_18253 === (7)))
{var inst_18248 = (state_18252[(2)]);var state_18252__$1 = state_18252;var statearr_18254_18283 = state_18252__$1;(statearr_18254_18283[(2)] = inst_18248);
(statearr_18254_18283[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (1)))
{var inst_18211 = [];var inst_18212 = inst_18211;var inst_18213 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18252__$1 = (function (){var statearr_18255 = state_18252;(statearr_18255[(7)] = inst_18212);
(statearr_18255[(8)] = inst_18213);
return statearr_18255;
})();var statearr_18256_18284 = state_18252__$1;(statearr_18256_18284[(2)] = null);
(statearr_18256_18284[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (4)))
{var inst_18216 = (state_18252[(9)]);var inst_18216__$1 = (state_18252[(2)]);var inst_18217 = (inst_18216__$1 == null);var inst_18218 = cljs.core.not.call(null,inst_18217);var state_18252__$1 = (function (){var statearr_18257 = state_18252;(statearr_18257[(9)] = inst_18216__$1);
return statearr_18257;
})();if(inst_18218)
{var statearr_18258_18285 = state_18252__$1;(statearr_18258_18285[(1)] = (5));
} else
{var statearr_18259_18286 = state_18252__$1;(statearr_18259_18286[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (15)))
{var inst_18242 = (state_18252[(2)]);var state_18252__$1 = state_18252;var statearr_18260_18287 = state_18252__$1;(statearr_18260_18287[(2)] = inst_18242);
(statearr_18260_18287[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (13)))
{var state_18252__$1 = state_18252;var statearr_18261_18288 = state_18252__$1;(statearr_18261_18288[(2)] = null);
(statearr_18261_18288[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (6)))
{var inst_18212 = (state_18252[(7)]);var inst_18237 = inst_18212.length;var inst_18238 = (inst_18237 > (0));var state_18252__$1 = state_18252;if(cljs.core.truth_(inst_18238))
{var statearr_18262_18289 = state_18252__$1;(statearr_18262_18289[(1)] = (12));
} else
{var statearr_18263_18290 = state_18252__$1;(statearr_18263_18290[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (3)))
{var inst_18250 = (state_18252[(2)]);var state_18252__$1 = state_18252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18252__$1,inst_18250);
} else
{if((state_val_18253 === (12)))
{var inst_18212 = (state_18252[(7)]);var inst_18240 = cljs.core.vec.call(null,inst_18212);var state_18252__$1 = state_18252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18252__$1,(15),out,inst_18240);
} else
{if((state_val_18253 === (2)))
{var state_18252__$1 = state_18252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18252__$1,(4),ch);
} else
{if((state_val_18253 === (11)))
{var inst_18220 = (state_18252[(10)]);var inst_18216 = (state_18252[(9)]);var inst_18230 = (state_18252[(2)]);var inst_18231 = [];var inst_18232 = inst_18231.push(inst_18216);var inst_18212 = inst_18231;var inst_18213 = inst_18220;var state_18252__$1 = (function (){var statearr_18264 = state_18252;(statearr_18264[(11)] = inst_18230);
(statearr_18264[(7)] = inst_18212);
(statearr_18264[(8)] = inst_18213);
(statearr_18264[(12)] = inst_18232);
return statearr_18264;
})();var statearr_18265_18291 = state_18252__$1;(statearr_18265_18291[(2)] = null);
(statearr_18265_18291[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (9)))
{var inst_18212 = (state_18252[(7)]);var inst_18228 = cljs.core.vec.call(null,inst_18212);var state_18252__$1 = state_18252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18252__$1,(11),out,inst_18228);
} else
{if((state_val_18253 === (5)))
{var inst_18220 = (state_18252[(10)]);var inst_18213 = (state_18252[(8)]);var inst_18216 = (state_18252[(9)]);var inst_18220__$1 = f.call(null,inst_18216);var inst_18221 = cljs.core._EQ_.call(null,inst_18220__$1,inst_18213);var inst_18222 = cljs.core.keyword_identical_QMARK_.call(null,inst_18213,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18223 = (inst_18221) || (inst_18222);var state_18252__$1 = (function (){var statearr_18266 = state_18252;(statearr_18266[(10)] = inst_18220__$1);
return statearr_18266;
})();if(cljs.core.truth_(inst_18223))
{var statearr_18267_18292 = state_18252__$1;(statearr_18267_18292[(1)] = (8));
} else
{var statearr_18268_18293 = state_18252__$1;(statearr_18268_18293[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (14)))
{var inst_18245 = (state_18252[(2)]);var inst_18246 = cljs.core.async.close_BANG_.call(null,out);var state_18252__$1 = (function (){var statearr_18270 = state_18252;(statearr_18270[(13)] = inst_18245);
return statearr_18270;
})();var statearr_18271_18294 = state_18252__$1;(statearr_18271_18294[(2)] = inst_18246);
(statearr_18271_18294[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (10)))
{var inst_18235 = (state_18252[(2)]);var state_18252__$1 = state_18252;var statearr_18272_18295 = state_18252__$1;(statearr_18272_18295[(2)] = inst_18235);
(statearr_18272_18295[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18253 === (8)))
{var inst_18220 = (state_18252[(10)]);var inst_18212 = (state_18252[(7)]);var inst_18216 = (state_18252[(9)]);var inst_18225 = inst_18212.push(inst_18216);var tmp18269 = inst_18212;var inst_18212__$1 = tmp18269;var inst_18213 = inst_18220;var state_18252__$1 = (function (){var statearr_18273 = state_18252;(statearr_18273[(7)] = inst_18212__$1);
(statearr_18273[(8)] = inst_18213);
(statearr_18273[(14)] = inst_18225);
return statearr_18273;
})();var statearr_18274_18296 = state_18252__$1;(statearr_18274_18296[(2)] = null);
(statearr_18274_18296[(1)] = (2));
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
});})(c__5693__auto___18282,out))
;return ((function (switch__5678__auto__,c__5693__auto___18282,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_18278 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18278[(0)] = state_machine__5679__auto__);
(statearr_18278[(1)] = (1));
return statearr_18278;
});
var state_machine__5679__auto____1 = (function (state_18252){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_18252);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e18279){if((e18279 instanceof Object))
{var ex__5682__auto__ = e18279;var statearr_18280_18297 = state_18252;(statearr_18280_18297[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18252);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18279;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18298 = state_18252;
state_18252 = G__18298;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_18252){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_18252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___18282,out))
})();var state__5695__auto__ = (function (){var statearr_18281 = f__5694__auto__.call(null);(statearr_18281[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___18282);
return statearr_18281;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___18282,out))
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
