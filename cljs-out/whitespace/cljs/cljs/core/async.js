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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t18481 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18481 = (function (f,fn_handler,meta18482){
this.f = f;
this.fn_handler = fn_handler;
this.meta18482 = meta18482;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18481.cljs$lang$type = true;
cljs.core.async.t18481.cljs$lang$ctorStr = "cljs.core.async/t18481";
cljs.core.async.t18481.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t18481");
});
cljs.core.async.t18481.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18481.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t18481.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t18481.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18483){var self__ = this;
var _18483__$1 = this;return self__.meta18482;
});
cljs.core.async.t18481.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18483,meta18482__$1){var self__ = this;
var _18483__$1 = this;return (new cljs.core.async.t18481(self__.f,self__.fn_handler,meta18482__$1));
});
cljs.core.async.__GT_t18481 = (function __GT_t18481(f__$1,fn_handler__$1,meta18482){return (new cljs.core.async.t18481(f__$1,fn_handler__$1,meta18482));
});
}
return (new cljs.core.async.t18481(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__18485 = buff;if(G__18485)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__18485.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__18485.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18485);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__18485);
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
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
{var val_18486 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_18486);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_18486,ret){
return (function (){return fn1.call(null,val_18486);
});})(val_18486,ret))
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
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3546__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___18487 = n;var x_18488 = (0);while(true){
if((x_18488 < n__4414__auto___18487))
{(a[x_18488] = (0));
{
var G__18489 = (x_18488 + (1));
x_18488 = G__18489;
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
var G__18490 = (i + (1));
i = G__18490;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t18494 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18494 = (function (flag,alt_flag,meta18495){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta18495 = meta18495;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18494.cljs$lang$type = true;
cljs.core.async.t18494.cljs$lang$ctorStr = "cljs.core.async/t18494";
cljs.core.async.t18494.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t18494");
});})(flag))
;
cljs.core.async.t18494.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t18494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t18494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_18496){var self__ = this;
var _18496__$1 = this;return self__.meta18495;
});})(flag))
;
cljs.core.async.t18494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_18496,meta18495__$1){var self__ = this;
var _18496__$1 = this;return (new cljs.core.async.t18494(self__.flag,self__.alt_flag,meta18495__$1));
});})(flag))
;
cljs.core.async.__GT_t18494 = ((function (flag){
return (function __GT_t18494(flag__$1,alt_flag__$1,meta18495){return (new cljs.core.async.t18494(flag__$1,alt_flag__$1,meta18495));
});})(flag))
;
}
return (new cljs.core.async.t18494(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t18500 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18500 = (function (cb,flag,alt_handler,meta18501){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta18501 = meta18501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18500.cljs$lang$type = true;
cljs.core.async.t18500.cljs$lang$ctorStr = "cljs.core.async/t18500";
cljs.core.async.t18500.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t18500");
});
cljs.core.async.t18500.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t18500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t18500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18502){var self__ = this;
var _18502__$1 = this;return self__.meta18501;
});
cljs.core.async.t18500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18502,meta18501__$1){var self__ = this;
var _18502__$1 = this;return (new cljs.core.async.t18500(self__.cb,self__.flag,self__.alt_handler,meta18501__$1));
});
cljs.core.async.__GT_t18500 = (function __GT_t18500(cb__$1,flag__$1,alt_handler__$1,meta18501){return (new cljs.core.async.t18500(cb__$1,flag__$1,alt_handler__$1,meta18501));
});
}
return (new cljs.core.async.t18500(cb,flag,alt_handler,null));
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
return (function (p1__18503_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__18503_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3558__auto__ = wport;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__18504 = (i + (1));
i = G__18504;
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
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3546__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3546__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3546__auto__;
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
var alts_BANG___delegate = function (ports,p__18505){var map__18507 = p__18505;var map__18507__$1 = ((cljs.core.seq_QMARK_.call(null,map__18507))?cljs.core.apply.call(null,cljs.core.hash_map,map__18507):map__18507);var opts = map__18507__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__18505 = null;if (arguments.length > 1) {
  p__18505 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__18505);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__18508){
var ports = cljs.core.first(arglist__18508);
var p__18505 = cljs.core.rest(arglist__18508);
return alts_BANG___delegate(ports,p__18505);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t18516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18516 = (function (ch,f,map_LT_,meta18517){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18517 = meta18517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18516.cljs$lang$type = true;
cljs.core.async.t18516.cljs$lang$ctorStr = "cljs.core.async/t18516";
cljs.core.async.t18516.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t18516");
});
cljs.core.async.t18516.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18516.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t18516.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18516.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t18519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18519 = (function (fn1,_,meta18517,ch,f,map_LT_,meta18520){
this.fn1 = fn1;
this._ = _;
this.meta18517 = meta18517;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta18520 = meta18520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18519.cljs$lang$type = true;
cljs.core.async.t18519.cljs$lang$ctorStr = "cljs.core.async/t18519";
cljs.core.async.t18519.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t18519");
});})(___$1))
;
cljs.core.async.t18519.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t18519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18519.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t18519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__18509_SHARP_){return f1.call(null,(((p1__18509_SHARP_ == null))?null:self__.f.call(null,p1__18509_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t18519.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_18521){var self__ = this;
var _18521__$1 = this;return self__.meta18520;
});})(___$1))
;
cljs.core.async.t18519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_18521,meta18520__$1){var self__ = this;
var _18521__$1 = this;return (new cljs.core.async.t18519(self__.fn1,self__._,self__.meta18517,self__.ch,self__.f,self__.map_LT_,meta18520__$1));
});})(___$1))
;
cljs.core.async.__GT_t18519 = ((function (___$1){
return (function __GT_t18519(fn1__$1,___$2,meta18517__$1,ch__$2,f__$2,map_LT___$2,meta18520){return (new cljs.core.async.t18519(fn1__$1,___$2,meta18517__$1,ch__$2,f__$2,map_LT___$2,meta18520));
});})(___$1))
;
}
return (new cljs.core.async.t18519(fn1,___$1,self__.meta18517,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3546__auto__ = ret;if(cljs.core.truth_(and__3546__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3546__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t18516.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18516.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18516.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18518){var self__ = this;
var _18518__$1 = this;return self__.meta18517;
});
cljs.core.async.t18516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18518,meta18517__$1){var self__ = this;
var _18518__$1 = this;return (new cljs.core.async.t18516(self__.ch,self__.f,self__.map_LT_,meta18517__$1));
});
cljs.core.async.__GT_t18516 = (function __GT_t18516(ch__$1,f__$1,map_LT___$1,meta18517){return (new cljs.core.async.t18516(ch__$1,f__$1,map_LT___$1,meta18517));
});
}
return (new cljs.core.async.t18516(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t18525 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18525 = (function (ch,f,map_GT_,meta18526){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta18526 = meta18526;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18525.cljs$lang$type = true;
cljs.core.async.t18525.cljs$lang$ctorStr = "cljs.core.async/t18525";
cljs.core.async.t18525.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t18525");
});
cljs.core.async.t18525.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18525.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t18525.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18525.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18525.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18525.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18527){var self__ = this;
var _18527__$1 = this;return self__.meta18526;
});
cljs.core.async.t18525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18527,meta18526__$1){var self__ = this;
var _18527__$1 = this;return (new cljs.core.async.t18525(self__.ch,self__.f,self__.map_GT_,meta18526__$1));
});
cljs.core.async.__GT_t18525 = (function __GT_t18525(ch__$1,f__$1,map_GT___$1,meta18526){return (new cljs.core.async.t18525(ch__$1,f__$1,map_GT___$1,meta18526));
});
}
return (new cljs.core.async.t18525(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t18531 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t18531 = (function (ch,p,filter_GT_,meta18532){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta18532 = meta18532;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t18531.cljs$lang$type = true;
cljs.core.async.t18531.cljs$lang$ctorStr = "cljs.core.async/t18531";
cljs.core.async.t18531.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t18531");
});
cljs.core.async.t18531.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t18531.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t18531.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t18531.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t18531.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t18531.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t18531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_18533){var self__ = this;
var _18533__$1 = this;return self__.meta18532;
});
cljs.core.async.t18531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_18533,meta18532__$1){var self__ = this;
var _18533__$1 = this;return (new cljs.core.async.t18531(self__.ch,self__.p,self__.filter_GT_,meta18532__$1));
});
cljs.core.async.__GT_t18531 = (function __GT_t18531(ch__$1,p__$1,filter_GT___$1,meta18532){return (new cljs.core.async.t18531(ch__$1,p__$1,filter_GT___$1,meta18532));
});
}
return (new cljs.core.async.t18531(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18616 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18616,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18616,out){
return (function (state_18595){var state_val_18596 = (state_18595[(1)]);if((state_val_18596 === (7)))
{var inst_18591 = (state_18595[(2)]);var state_18595__$1 = state_18595;var statearr_18597_18617 = state_18595__$1;(statearr_18597_18617[(2)] = inst_18591);
(statearr_18597_18617[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18596 === (1)))
{var state_18595__$1 = state_18595;var statearr_18598_18618 = state_18595__$1;(statearr_18598_18618[(2)] = null);
(statearr_18598_18618[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18596 === (4)))
{var inst_18577 = (state_18595[(7)]);var inst_18577__$1 = (state_18595[(2)]);var inst_18578 = (inst_18577__$1 == null);var state_18595__$1 = (function (){var statearr_18599 = state_18595;(statearr_18599[(7)] = inst_18577__$1);
return statearr_18599;
})();if(cljs.core.truth_(inst_18578))
{var statearr_18600_18619 = state_18595__$1;(statearr_18600_18619[(1)] = (5));
} else
{var statearr_18601_18620 = state_18595__$1;(statearr_18601_18620[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18596 === (6)))
{var inst_18577 = (state_18595[(7)]);var inst_18582 = p.call(null,inst_18577);var state_18595__$1 = state_18595;if(cljs.core.truth_(inst_18582))
{var statearr_18602_18621 = state_18595__$1;(statearr_18602_18621[(1)] = (8));
} else
{var statearr_18603_18622 = state_18595__$1;(statearr_18603_18622[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18596 === (3)))
{var inst_18593 = (state_18595[(2)]);var state_18595__$1 = state_18595;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18595__$1,inst_18593);
} else
{if((state_val_18596 === (2)))
{var state_18595__$1 = state_18595;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18595__$1,(4),ch);
} else
{if((state_val_18596 === (11)))
{var inst_18585 = (state_18595[(2)]);var state_18595__$1 = state_18595;var statearr_18604_18623 = state_18595__$1;(statearr_18604_18623[(2)] = inst_18585);
(statearr_18604_18623[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18596 === (9)))
{var state_18595__$1 = state_18595;var statearr_18605_18624 = state_18595__$1;(statearr_18605_18624[(2)] = null);
(statearr_18605_18624[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18596 === (5)))
{var inst_18580 = cljs.core.async.close_BANG_.call(null,out);var state_18595__$1 = state_18595;var statearr_18606_18625 = state_18595__$1;(statearr_18606_18625[(2)] = inst_18580);
(statearr_18606_18625[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18596 === (10)))
{var inst_18588 = (state_18595[(2)]);var state_18595__$1 = (function (){var statearr_18607 = state_18595;(statearr_18607[(8)] = inst_18588);
return statearr_18607;
})();var statearr_18608_18626 = state_18595__$1;(statearr_18608_18626[(2)] = null);
(statearr_18608_18626[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18596 === (8)))
{var inst_18577 = (state_18595[(7)]);var state_18595__$1 = state_18595;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18595__$1,(11),out,inst_18577);
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
});})(c__5708__auto___18616,out))
;return ((function (switch__5693__auto__,c__5708__auto___18616,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18612 = [null,null,null,null,null,null,null,null,null];(statearr_18612[(0)] = state_machine__5694__auto__);
(statearr_18612[(1)] = (1));
return statearr_18612;
});
var state_machine__5694__auto____1 = (function (state_18595){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18595);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18613){if((e18613 instanceof Object))
{var ex__5697__auto__ = e18613;var statearr_18614_18627 = state_18595;(statearr_18614_18627[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18595);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18613;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18628 = state_18595;
state_18595 = G__18628;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18595){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18616,out))
})();var state__5710__auto__ = (function (){var statearr_18615 = f__5709__auto__.call(null);(statearr_18615[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18616);
return statearr_18615;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18616,out))
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_18780){var state_val_18781 = (state_18780[(1)]);if((state_val_18781 === (7)))
{var inst_18776 = (state_18780[(2)]);var state_18780__$1 = state_18780;var statearr_18782_18819 = state_18780__$1;(statearr_18782_18819[(2)] = inst_18776);
(statearr_18782_18819[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (20)))
{var inst_18751 = (state_18780[(7)]);var inst_18762 = (state_18780[(2)]);var inst_18763 = cljs.core.next.call(null,inst_18751);var inst_18737 = inst_18763;var inst_18738 = null;var inst_18739 = (0);var inst_18740 = (0);var state_18780__$1 = (function (){var statearr_18783 = state_18780;(statearr_18783[(8)] = inst_18739);
(statearr_18783[(9)] = inst_18738);
(statearr_18783[(10)] = inst_18740);
(statearr_18783[(11)] = inst_18762);
(statearr_18783[(12)] = inst_18737);
return statearr_18783;
})();var statearr_18784_18820 = state_18780__$1;(statearr_18784_18820[(2)] = null);
(statearr_18784_18820[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (1)))
{var state_18780__$1 = state_18780;var statearr_18785_18821 = state_18780__$1;(statearr_18785_18821[(2)] = null);
(statearr_18785_18821[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (4)))
{var inst_18726 = (state_18780[(13)]);var inst_18726__$1 = (state_18780[(2)]);var inst_18727 = (inst_18726__$1 == null);var state_18780__$1 = (function (){var statearr_18789 = state_18780;(statearr_18789[(13)] = inst_18726__$1);
return statearr_18789;
})();if(cljs.core.truth_(inst_18727))
{var statearr_18790_18822 = state_18780__$1;(statearr_18790_18822[(1)] = (5));
} else
{var statearr_18791_18823 = state_18780__$1;(statearr_18791_18823[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (15)))
{var state_18780__$1 = state_18780;var statearr_18792_18824 = state_18780__$1;(statearr_18792_18824[(2)] = null);
(statearr_18792_18824[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (13)))
{var inst_18739 = (state_18780[(8)]);var inst_18738 = (state_18780[(9)]);var inst_18740 = (state_18780[(10)]);var inst_18737 = (state_18780[(12)]);var inst_18747 = (state_18780[(2)]);var inst_18748 = (inst_18740 + (1));var tmp18786 = inst_18739;var tmp18787 = inst_18738;var tmp18788 = inst_18737;var inst_18737__$1 = tmp18788;var inst_18738__$1 = tmp18787;var inst_18739__$1 = tmp18786;var inst_18740__$1 = inst_18748;var state_18780__$1 = (function (){var statearr_18793 = state_18780;(statearr_18793[(8)] = inst_18739__$1);
(statearr_18793[(14)] = inst_18747);
(statearr_18793[(9)] = inst_18738__$1);
(statearr_18793[(10)] = inst_18740__$1);
(statearr_18793[(12)] = inst_18737__$1);
return statearr_18793;
})();var statearr_18794_18825 = state_18780__$1;(statearr_18794_18825[(2)] = null);
(statearr_18794_18825[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (6)))
{var inst_18726 = (state_18780[(13)]);var inst_18731 = f.call(null,inst_18726);var inst_18736 = cljs.core.seq.call(null,inst_18731);var inst_18737 = inst_18736;var inst_18738 = null;var inst_18739 = (0);var inst_18740 = (0);var state_18780__$1 = (function (){var statearr_18795 = state_18780;(statearr_18795[(8)] = inst_18739);
(statearr_18795[(9)] = inst_18738);
(statearr_18795[(10)] = inst_18740);
(statearr_18795[(12)] = inst_18737);
return statearr_18795;
})();var statearr_18796_18826 = state_18780__$1;(statearr_18796_18826[(2)] = null);
(statearr_18796_18826[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (17)))
{var inst_18751 = (state_18780[(7)]);var inst_18755 = cljs.core.chunk_first.call(null,inst_18751);var inst_18756 = cljs.core.chunk_rest.call(null,inst_18751);var inst_18757 = cljs.core.count.call(null,inst_18755);var inst_18737 = inst_18756;var inst_18738 = inst_18755;var inst_18739 = inst_18757;var inst_18740 = (0);var state_18780__$1 = (function (){var statearr_18797 = state_18780;(statearr_18797[(8)] = inst_18739);
(statearr_18797[(9)] = inst_18738);
(statearr_18797[(10)] = inst_18740);
(statearr_18797[(12)] = inst_18737);
return statearr_18797;
})();var statearr_18798_18827 = state_18780__$1;(statearr_18798_18827[(2)] = null);
(statearr_18798_18827[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (3)))
{var inst_18778 = (state_18780[(2)]);var state_18780__$1 = state_18780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18780__$1,inst_18778);
} else
{if((state_val_18781 === (12)))
{var inst_18771 = (state_18780[(2)]);var state_18780__$1 = state_18780;var statearr_18799_18828 = state_18780__$1;(statearr_18799_18828[(2)] = inst_18771);
(statearr_18799_18828[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (2)))
{var state_18780__$1 = state_18780;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18780__$1,(4),in$);
} else
{if((state_val_18781 === (19)))
{var inst_18766 = (state_18780[(2)]);var state_18780__$1 = state_18780;var statearr_18800_18829 = state_18780__$1;(statearr_18800_18829[(2)] = inst_18766);
(statearr_18800_18829[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (11)))
{var inst_18751 = (state_18780[(7)]);var inst_18737 = (state_18780[(12)]);var inst_18751__$1 = cljs.core.seq.call(null,inst_18737);var state_18780__$1 = (function (){var statearr_18801 = state_18780;(statearr_18801[(7)] = inst_18751__$1);
return statearr_18801;
})();if(inst_18751__$1)
{var statearr_18802_18830 = state_18780__$1;(statearr_18802_18830[(1)] = (14));
} else
{var statearr_18803_18831 = state_18780__$1;(statearr_18803_18831[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (9)))
{var inst_18773 = (state_18780[(2)]);var state_18780__$1 = (function (){var statearr_18804 = state_18780;(statearr_18804[(15)] = inst_18773);
return statearr_18804;
})();var statearr_18805_18832 = state_18780__$1;(statearr_18805_18832[(2)] = null);
(statearr_18805_18832[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (5)))
{var inst_18729 = cljs.core.async.close_BANG_.call(null,out);var state_18780__$1 = state_18780;var statearr_18806_18833 = state_18780__$1;(statearr_18806_18833[(2)] = inst_18729);
(statearr_18806_18833[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (14)))
{var inst_18751 = (state_18780[(7)]);var inst_18753 = cljs.core.chunked_seq_QMARK_.call(null,inst_18751);var state_18780__$1 = state_18780;if(inst_18753)
{var statearr_18807_18834 = state_18780__$1;(statearr_18807_18834[(1)] = (17));
} else
{var statearr_18808_18835 = state_18780__$1;(statearr_18808_18835[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (16)))
{var inst_18769 = (state_18780[(2)]);var state_18780__$1 = state_18780;var statearr_18809_18836 = state_18780__$1;(statearr_18809_18836[(2)] = inst_18769);
(statearr_18809_18836[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18781 === (10)))
{var inst_18738 = (state_18780[(9)]);var inst_18740 = (state_18780[(10)]);var inst_18745 = cljs.core._nth.call(null,inst_18738,inst_18740);var state_18780__$1 = state_18780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18780__$1,(13),out,inst_18745);
} else
{if((state_val_18781 === (18)))
{var inst_18751 = (state_18780[(7)]);var inst_18760 = cljs.core.first.call(null,inst_18751);var state_18780__$1 = state_18780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18780__$1,(20),out,inst_18760);
} else
{if((state_val_18781 === (8)))
{var inst_18739 = (state_18780[(8)]);var inst_18740 = (state_18780[(10)]);var inst_18742 = (inst_18740 < inst_18739);var inst_18743 = inst_18742;var state_18780__$1 = state_18780;if(cljs.core.truth_(inst_18743))
{var statearr_18810_18837 = state_18780__$1;(statearr_18810_18837[(1)] = (10));
} else
{var statearr_18811_18838 = state_18780__$1;(statearr_18811_18838[(1)] = (11));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18815[(0)] = state_machine__5694__auto__);
(statearr_18815[(1)] = (1));
return statearr_18815;
});
var state_machine__5694__auto____1 = (function (state_18780){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18780);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18816){if((e18816 instanceof Object))
{var ex__5697__auto__ = e18816;var statearr_18817_18839 = state_18780;(statearr_18817_18839[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18780);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18816;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18840 = state_18780;
state_18780 = G__18840;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18780){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_18818 = f__5709__auto__.call(null);(statearr_18818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_18818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___18921 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18921){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18921){
return (function (state_18900){var state_val_18901 = (state_18900[(1)]);if((state_val_18901 === (7)))
{var inst_18896 = (state_18900[(2)]);var state_18900__$1 = state_18900;var statearr_18902_18922 = state_18900__$1;(statearr_18902_18922[(2)] = inst_18896);
(statearr_18902_18922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18901 === (1)))
{var state_18900__$1 = state_18900;var statearr_18903_18923 = state_18900__$1;(statearr_18903_18923[(2)] = null);
(statearr_18903_18923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18901 === (4)))
{var inst_18883 = (state_18900[(7)]);var inst_18883__$1 = (state_18900[(2)]);var inst_18884 = (inst_18883__$1 == null);var state_18900__$1 = (function (){var statearr_18904 = state_18900;(statearr_18904[(7)] = inst_18883__$1);
return statearr_18904;
})();if(cljs.core.truth_(inst_18884))
{var statearr_18905_18924 = state_18900__$1;(statearr_18905_18924[(1)] = (5));
} else
{var statearr_18906_18925 = state_18900__$1;(statearr_18906_18925[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18901 === (6)))
{var inst_18883 = (state_18900[(7)]);var state_18900__$1 = state_18900;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18900__$1,(11),to,inst_18883);
} else
{if((state_val_18901 === (3)))
{var inst_18898 = (state_18900[(2)]);var state_18900__$1 = state_18900;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18900__$1,inst_18898);
} else
{if((state_val_18901 === (2)))
{var state_18900__$1 = state_18900;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18900__$1,(4),from);
} else
{if((state_val_18901 === (11)))
{var inst_18893 = (state_18900[(2)]);var state_18900__$1 = (function (){var statearr_18907 = state_18900;(statearr_18907[(8)] = inst_18893);
return statearr_18907;
})();var statearr_18908_18926 = state_18900__$1;(statearr_18908_18926[(2)] = null);
(statearr_18908_18926[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18901 === (9)))
{var state_18900__$1 = state_18900;var statearr_18909_18927 = state_18900__$1;(statearr_18909_18927[(2)] = null);
(statearr_18909_18927[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18901 === (5)))
{var state_18900__$1 = state_18900;if(cljs.core.truth_(close_QMARK_))
{var statearr_18910_18928 = state_18900__$1;(statearr_18910_18928[(1)] = (8));
} else
{var statearr_18911_18929 = state_18900__$1;(statearr_18911_18929[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18901 === (10)))
{var inst_18890 = (state_18900[(2)]);var state_18900__$1 = state_18900;var statearr_18912_18930 = state_18900__$1;(statearr_18912_18930[(2)] = inst_18890);
(statearr_18912_18930[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18901 === (8)))
{var inst_18887 = cljs.core.async.close_BANG_.call(null,to);var state_18900__$1 = state_18900;var statearr_18913_18931 = state_18900__$1;(statearr_18913_18931[(2)] = inst_18887);
(statearr_18913_18931[(1)] = (10));
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
});})(c__5708__auto___18921))
;return ((function (switch__5693__auto__,c__5708__auto___18921){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18917 = [null,null,null,null,null,null,null,null,null];(statearr_18917[(0)] = state_machine__5694__auto__);
(statearr_18917[(1)] = (1));
return statearr_18917;
});
var state_machine__5694__auto____1 = (function (state_18900){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18900);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18918){if((e18918 instanceof Object))
{var ex__5697__auto__ = e18918;var statearr_18919_18932 = state_18900;(statearr_18919_18932[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18900);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18918;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18933 = state_18900;
state_18900 = G__18933;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18900){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18900);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18921))
})();var state__5710__auto__ = (function (){var statearr_18920 = f__5709__auto__.call(null);(statearr_18920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18921);
return statearr_18920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18921))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___19020 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19020,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19020,tc,fc){
return (function (state_18998){var state_val_18999 = (state_18998[(1)]);if((state_val_18999 === (7)))
{var inst_18994 = (state_18998[(2)]);var state_18998__$1 = state_18998;var statearr_19000_19021 = state_18998__$1;(statearr_19000_19021[(2)] = inst_18994);
(statearr_19000_19021[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18999 === (1)))
{var state_18998__$1 = state_18998;var statearr_19001_19022 = state_18998__$1;(statearr_19001_19022[(2)] = null);
(statearr_19001_19022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18999 === (4)))
{var inst_18979 = (state_18998[(7)]);var inst_18979__$1 = (state_18998[(2)]);var inst_18980 = (inst_18979__$1 == null);var state_18998__$1 = (function (){var statearr_19002 = state_18998;(statearr_19002[(7)] = inst_18979__$1);
return statearr_19002;
})();if(cljs.core.truth_(inst_18980))
{var statearr_19003_19023 = state_18998__$1;(statearr_19003_19023[(1)] = (5));
} else
{var statearr_19004_19024 = state_18998__$1;(statearr_19004_19024[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18999 === (6)))
{var inst_18979 = (state_18998[(7)]);var inst_18985 = p.call(null,inst_18979);var state_18998__$1 = state_18998;if(cljs.core.truth_(inst_18985))
{var statearr_19005_19025 = state_18998__$1;(statearr_19005_19025[(1)] = (9));
} else
{var statearr_19006_19026 = state_18998__$1;(statearr_19006_19026[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18999 === (3)))
{var inst_18996 = (state_18998[(2)]);var state_18998__$1 = state_18998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18998__$1,inst_18996);
} else
{if((state_val_18999 === (2)))
{var state_18998__$1 = state_18998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18998__$1,(4),ch);
} else
{if((state_val_18999 === (11)))
{var inst_18979 = (state_18998[(7)]);var inst_18989 = (state_18998[(2)]);var state_18998__$1 = state_18998;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18998__$1,(8),inst_18989,inst_18979);
} else
{if((state_val_18999 === (9)))
{var state_18998__$1 = state_18998;var statearr_19007_19027 = state_18998__$1;(statearr_19007_19027[(2)] = tc);
(statearr_19007_19027[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18999 === (5)))
{var inst_18982 = cljs.core.async.close_BANG_.call(null,tc);var inst_18983 = cljs.core.async.close_BANG_.call(null,fc);var state_18998__$1 = (function (){var statearr_19008 = state_18998;(statearr_19008[(8)] = inst_18982);
return statearr_19008;
})();var statearr_19009_19028 = state_18998__$1;(statearr_19009_19028[(2)] = inst_18983);
(statearr_19009_19028[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18999 === (10)))
{var state_18998__$1 = state_18998;var statearr_19010_19029 = state_18998__$1;(statearr_19010_19029[(2)] = fc);
(statearr_19010_19029[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18999 === (8)))
{var inst_18991 = (state_18998[(2)]);var state_18998__$1 = (function (){var statearr_19011 = state_18998;(statearr_19011[(9)] = inst_18991);
return statearr_19011;
})();var statearr_19012_19030 = state_18998__$1;(statearr_19012_19030[(2)] = null);
(statearr_19012_19030[(1)] = (2));
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
});})(c__5708__auto___19020,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___19020,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19016 = [null,null,null,null,null,null,null,null,null,null];(statearr_19016[(0)] = state_machine__5694__auto__);
(statearr_19016[(1)] = (1));
return statearr_19016;
});
var state_machine__5694__auto____1 = (function (state_18998){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18998);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19017){if((e19017 instanceof Object))
{var ex__5697__auto__ = e19017;var statearr_19018_19031 = state_18998;(statearr_19018_19031[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18998);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19017;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19032 = state_18998;
state_18998 = G__19032;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18998){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19020,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_19019 = f__5709__auto__.call(null);(statearr_19019[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19020);
return statearr_19019;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19020,tc,fc))
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_19079){var state_val_19080 = (state_19079[(1)]);if((state_val_19080 === (7)))
{var inst_19075 = (state_19079[(2)]);var state_19079__$1 = state_19079;var statearr_19081_19097 = state_19079__$1;(statearr_19081_19097[(2)] = inst_19075);
(statearr_19081_19097[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19080 === (6)))
{var inst_19065 = (state_19079[(7)]);var inst_19068 = (state_19079[(8)]);var inst_19072 = f.call(null,inst_19065,inst_19068);var inst_19065__$1 = inst_19072;var state_19079__$1 = (function (){var statearr_19082 = state_19079;(statearr_19082[(7)] = inst_19065__$1);
return statearr_19082;
})();var statearr_19083_19098 = state_19079__$1;(statearr_19083_19098[(2)] = null);
(statearr_19083_19098[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19080 === (5)))
{var inst_19065 = (state_19079[(7)]);var state_19079__$1 = state_19079;var statearr_19084_19099 = state_19079__$1;(statearr_19084_19099[(2)] = inst_19065);
(statearr_19084_19099[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19080 === (4)))
{var inst_19068 = (state_19079[(8)]);var inst_19068__$1 = (state_19079[(2)]);var inst_19069 = (inst_19068__$1 == null);var state_19079__$1 = (function (){var statearr_19085 = state_19079;(statearr_19085[(8)] = inst_19068__$1);
return statearr_19085;
})();if(cljs.core.truth_(inst_19069))
{var statearr_19086_19100 = state_19079__$1;(statearr_19086_19100[(1)] = (5));
} else
{var statearr_19087_19101 = state_19079__$1;(statearr_19087_19101[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19080 === (3)))
{var inst_19077 = (state_19079[(2)]);var state_19079__$1 = state_19079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19079__$1,inst_19077);
} else
{if((state_val_19080 === (2)))
{var state_19079__$1 = state_19079;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19079__$1,(4),ch);
} else
{if((state_val_19080 === (1)))
{var inst_19065 = init;var state_19079__$1 = (function (){var statearr_19088 = state_19079;(statearr_19088[(7)] = inst_19065);
return statearr_19088;
})();var statearr_19089_19102 = state_19079__$1;(statearr_19089_19102[(2)] = null);
(statearr_19089_19102[(1)] = (2));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19093 = [null,null,null,null,null,null,null,null,null];(statearr_19093[(0)] = state_machine__5694__auto__);
(statearr_19093[(1)] = (1));
return statearr_19093;
});
var state_machine__5694__auto____1 = (function (state_19079){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19094){if((e19094 instanceof Object))
{var ex__5697__auto__ = e19094;var statearr_19095_19103 = state_19079;(statearr_19095_19103[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19094;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19104 = state_19079;
state_19079 = G__19104;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19079){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_19096 = f__5709__auto__.call(null);(statearr_19096[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19096;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
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
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_19166){var state_val_19167 = (state_19166[(1)]);if((state_val_19167 === (7)))
{var inst_19147 = (state_19166[(7)]);var inst_19152 = (state_19166[(2)]);var inst_19153 = cljs.core.next.call(null,inst_19147);var inst_19147__$1 = inst_19153;var state_19166__$1 = (function (){var statearr_19168 = state_19166;(statearr_19168[(8)] = inst_19152);
(statearr_19168[(7)] = inst_19147__$1);
return statearr_19168;
})();var statearr_19169_19187 = state_19166__$1;(statearr_19169_19187[(2)] = null);
(statearr_19169_19187[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19167 === (1)))
{var inst_19146 = cljs.core.seq.call(null,coll);var inst_19147 = inst_19146;var state_19166__$1 = (function (){var statearr_19170 = state_19166;(statearr_19170[(7)] = inst_19147);
return statearr_19170;
})();var statearr_19171_19188 = state_19166__$1;(statearr_19171_19188[(2)] = null);
(statearr_19171_19188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19167 === (4)))
{var inst_19147 = (state_19166[(7)]);var inst_19150 = cljs.core.first.call(null,inst_19147);var state_19166__$1 = state_19166;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19166__$1,(7),ch,inst_19150);
} else
{if((state_val_19167 === (6)))
{var inst_19162 = (state_19166[(2)]);var state_19166__$1 = state_19166;var statearr_19172_19189 = state_19166__$1;(statearr_19172_19189[(2)] = inst_19162);
(statearr_19172_19189[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19167 === (3)))
{var inst_19164 = (state_19166[(2)]);var state_19166__$1 = state_19166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19166__$1,inst_19164);
} else
{if((state_val_19167 === (2)))
{var inst_19147 = (state_19166[(7)]);var state_19166__$1 = state_19166;if(cljs.core.truth_(inst_19147))
{var statearr_19173_19190 = state_19166__$1;(statearr_19173_19190[(1)] = (4));
} else
{var statearr_19174_19191 = state_19166__$1;(statearr_19174_19191[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19167 === (9)))
{var state_19166__$1 = state_19166;var statearr_19175_19192 = state_19166__$1;(statearr_19175_19192[(2)] = null);
(statearr_19175_19192[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19167 === (5)))
{var state_19166__$1 = state_19166;if(cljs.core.truth_(close_QMARK_))
{var statearr_19176_19193 = state_19166__$1;(statearr_19176_19193[(1)] = (8));
} else
{var statearr_19177_19194 = state_19166__$1;(statearr_19177_19194[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19167 === (10)))
{var inst_19160 = (state_19166[(2)]);var state_19166__$1 = state_19166;var statearr_19178_19195 = state_19166__$1;(statearr_19178_19195[(2)] = inst_19160);
(statearr_19178_19195[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19167 === (8)))
{var inst_19157 = cljs.core.async.close_BANG_.call(null,ch);var state_19166__$1 = state_19166;var statearr_19179_19196 = state_19166__$1;(statearr_19179_19196[(2)] = inst_19157);
(statearr_19179_19196[(1)] = (10));
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
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19183 = [null,null,null,null,null,null,null,null,null];(statearr_19183[(0)] = state_machine__5694__auto__);
(statearr_19183[(1)] = (1));
return statearr_19183;
});
var state_machine__5694__auto____1 = (function (state_19166){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19166);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19184){if((e19184 instanceof Object))
{var ex__5697__auto__ = e19184;var statearr_19185_19197 = state_19166;(statearr_19185_19197[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19166);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19184;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19198 = state_19166;
state_19166 = G__19198;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19166){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_19186 = f__5709__auto__.call(null);(statearr_19186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_19186;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj19200 = {};return obj19200;
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
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj19202 = {};return obj19202;
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
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t19426 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19426 = (function (cs,ch,mult,meta19427){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta19427 = meta19427;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19426.cljs$lang$type = true;
cljs.core.async.t19426.cljs$lang$ctorStr = "cljs.core.async/t19426";
cljs.core.async.t19426.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19426");
});})(cs))
;
cljs.core.async.t19426.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t19426.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t19426.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t19426.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t19426.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19426.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t19426.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_19428){var self__ = this;
var _19428__$1 = this;return self__.meta19427;
});})(cs))
;
cljs.core.async.t19426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_19428,meta19427__$1){var self__ = this;
var _19428__$1 = this;return (new cljs.core.async.t19426(self__.cs,self__.ch,self__.mult,meta19427__$1));
});})(cs))
;
cljs.core.async.__GT_t19426 = ((function (cs){
return (function __GT_t19426(cs__$1,ch__$1,mult__$1,meta19427){return (new cljs.core.async.t19426(cs__$1,ch__$1,mult__$1,meta19427));
});})(cs))
;
}
return (new cljs.core.async.t19426(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___19649 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19649,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19649,cs,m,dchan,dctr,done){
return (function (state_19563){var state_val_19564 = (state_19563[(1)]);if((state_val_19564 === (7)))
{var inst_19559 = (state_19563[(2)]);var state_19563__$1 = state_19563;var statearr_19565_19650 = state_19563__$1;(statearr_19565_19650[(2)] = inst_19559);
(statearr_19565_19650[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (20)))
{var inst_19460 = (state_19563[(7)]);var inst_19470 = cljs.core.first.call(null,inst_19460);var inst_19471 = cljs.core.nth.call(null,inst_19470,(0),null);var inst_19472 = cljs.core.nth.call(null,inst_19470,(1),null);var state_19563__$1 = (function (){var statearr_19566 = state_19563;(statearr_19566[(8)] = inst_19471);
return statearr_19566;
})();if(cljs.core.truth_(inst_19472))
{var statearr_19567_19651 = state_19563__$1;(statearr_19567_19651[(1)] = (22));
} else
{var statearr_19568_19652 = state_19563__$1;(statearr_19568_19652[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (27)))
{var inst_19500 = (state_19563[(9)]);var inst_19502 = (state_19563[(10)]);var inst_19507 = cljs.core._nth.call(null,inst_19500,inst_19502);var state_19563__$1 = (function (){var statearr_19569 = state_19563;(statearr_19569[(11)] = inst_19507);
return statearr_19569;
})();var statearr_19570_19653 = state_19563__$1;(statearr_19570_19653[(2)] = null);
(statearr_19570_19653[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (1)))
{var state_19563__$1 = state_19563;var statearr_19571_19654 = state_19563__$1;(statearr_19571_19654[(2)] = null);
(statearr_19571_19654[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (24)))
{var inst_19460 = (state_19563[(7)]);var inst_19477 = (state_19563[(2)]);var inst_19478 = cljs.core.next.call(null,inst_19460);var inst_19440 = inst_19478;var inst_19441 = null;var inst_19442 = (0);var inst_19443 = (0);var state_19563__$1 = (function (){var statearr_19572 = state_19563;(statearr_19572[(12)] = inst_19442);
(statearr_19572[(13)] = inst_19440);
(statearr_19572[(14)] = inst_19441);
(statearr_19572[(15)] = inst_19477);
(statearr_19572[(16)] = inst_19443);
return statearr_19572;
})();var statearr_19573_19655 = state_19563__$1;(statearr_19573_19655[(2)] = null);
(statearr_19573_19655[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (39)))
{var inst_19520 = (state_19563[(17)]);var inst_19538 = (state_19563[(2)]);var inst_19539 = cljs.core.next.call(null,inst_19520);var inst_19499 = inst_19539;var inst_19500 = null;var inst_19501 = (0);var inst_19502 = (0);var state_19563__$1 = (function (){var statearr_19577 = state_19563;(statearr_19577[(18)] = inst_19501);
(statearr_19577[(19)] = inst_19499);
(statearr_19577[(20)] = inst_19538);
(statearr_19577[(9)] = inst_19500);
(statearr_19577[(10)] = inst_19502);
return statearr_19577;
})();var statearr_19578_19656 = state_19563__$1;(statearr_19578_19656[(2)] = null);
(statearr_19578_19656[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (4)))
{var inst_19431 = (state_19563[(21)]);var inst_19431__$1 = (state_19563[(2)]);var inst_19432 = (inst_19431__$1 == null);var state_19563__$1 = (function (){var statearr_19579 = state_19563;(statearr_19579[(21)] = inst_19431__$1);
return statearr_19579;
})();if(cljs.core.truth_(inst_19432))
{var statearr_19580_19657 = state_19563__$1;(statearr_19580_19657[(1)] = (5));
} else
{var statearr_19581_19658 = state_19563__$1;(statearr_19581_19658[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (15)))
{var inst_19442 = (state_19563[(12)]);var inst_19440 = (state_19563[(13)]);var inst_19441 = (state_19563[(14)]);var inst_19443 = (state_19563[(16)]);var inst_19456 = (state_19563[(2)]);var inst_19457 = (inst_19443 + (1));var tmp19574 = inst_19442;var tmp19575 = inst_19440;var tmp19576 = inst_19441;var inst_19440__$1 = tmp19575;var inst_19441__$1 = tmp19576;var inst_19442__$1 = tmp19574;var inst_19443__$1 = inst_19457;var state_19563__$1 = (function (){var statearr_19582 = state_19563;(statearr_19582[(12)] = inst_19442__$1);
(statearr_19582[(13)] = inst_19440__$1);
(statearr_19582[(14)] = inst_19441__$1);
(statearr_19582[(22)] = inst_19456);
(statearr_19582[(16)] = inst_19443__$1);
return statearr_19582;
})();var statearr_19583_19659 = state_19563__$1;(statearr_19583_19659[(2)] = null);
(statearr_19583_19659[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (21)))
{var inst_19481 = (state_19563[(2)]);var state_19563__$1 = state_19563;var statearr_19584_19660 = state_19563__$1;(statearr_19584_19660[(2)] = inst_19481);
(statearr_19584_19660[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (31)))
{var inst_19507 = (state_19563[(11)]);var inst_19508 = (state_19563[(2)]);var inst_19509 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19510 = cljs.core.async.untap_STAR_.call(null,m,inst_19507);var state_19563__$1 = (function (){var statearr_19585 = state_19563;(statearr_19585[(23)] = inst_19508);
(statearr_19585[(24)] = inst_19509);
return statearr_19585;
})();var statearr_19586_19661 = state_19563__$1;(statearr_19586_19661[(2)] = inst_19510);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19563__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (32)))
{var inst_19431 = (state_19563[(21)]);var inst_19507 = (state_19563[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19563,(31),Object,null,(30));var inst_19514 = cljs.core.async.put_BANG_.call(null,inst_19507,inst_19431,done);var state_19563__$1 = state_19563;var statearr_19587_19662 = state_19563__$1;(statearr_19587_19662[(2)] = inst_19514);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19563__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (40)))
{var inst_19529 = (state_19563[(25)]);var inst_19530 = (state_19563[(2)]);var inst_19531 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_19532 = cljs.core.async.untap_STAR_.call(null,m,inst_19529);var state_19563__$1 = (function (){var statearr_19588 = state_19563;(statearr_19588[(26)] = inst_19531);
(statearr_19588[(27)] = inst_19530);
return statearr_19588;
})();var statearr_19589_19663 = state_19563__$1;(statearr_19589_19663[(2)] = inst_19532);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19563__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (33)))
{var inst_19520 = (state_19563[(17)]);var inst_19522 = cljs.core.chunked_seq_QMARK_.call(null,inst_19520);var state_19563__$1 = state_19563;if(inst_19522)
{var statearr_19590_19664 = state_19563__$1;(statearr_19590_19664[(1)] = (36));
} else
{var statearr_19591_19665 = state_19563__$1;(statearr_19591_19665[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (13)))
{var inst_19450 = (state_19563[(28)]);var inst_19453 = cljs.core.async.close_BANG_.call(null,inst_19450);var state_19563__$1 = state_19563;var statearr_19592_19666 = state_19563__$1;(statearr_19592_19666[(2)] = inst_19453);
(statearr_19592_19666[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (22)))
{var inst_19471 = (state_19563[(8)]);var inst_19474 = cljs.core.async.close_BANG_.call(null,inst_19471);var state_19563__$1 = state_19563;var statearr_19593_19667 = state_19563__$1;(statearr_19593_19667[(2)] = inst_19474);
(statearr_19593_19667[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (36)))
{var inst_19520 = (state_19563[(17)]);var inst_19524 = cljs.core.chunk_first.call(null,inst_19520);var inst_19525 = cljs.core.chunk_rest.call(null,inst_19520);var inst_19526 = cljs.core.count.call(null,inst_19524);var inst_19499 = inst_19525;var inst_19500 = inst_19524;var inst_19501 = inst_19526;var inst_19502 = (0);var state_19563__$1 = (function (){var statearr_19594 = state_19563;(statearr_19594[(18)] = inst_19501);
(statearr_19594[(19)] = inst_19499);
(statearr_19594[(9)] = inst_19500);
(statearr_19594[(10)] = inst_19502);
return statearr_19594;
})();var statearr_19595_19668 = state_19563__$1;(statearr_19595_19668[(2)] = null);
(statearr_19595_19668[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (41)))
{var inst_19529 = (state_19563[(25)]);var inst_19431 = (state_19563[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_19563,(40),Object,null,(39));var inst_19536 = cljs.core.async.put_BANG_.call(null,inst_19529,inst_19431,done);var state_19563__$1 = state_19563;var statearr_19596_19669 = state_19563__$1;(statearr_19596_19669[(2)] = inst_19536);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19563__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (43)))
{var state_19563__$1 = state_19563;var statearr_19597_19670 = state_19563__$1;(statearr_19597_19670[(2)] = null);
(statearr_19597_19670[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (29)))
{var inst_19547 = (state_19563[(2)]);var state_19563__$1 = state_19563;var statearr_19598_19671 = state_19563__$1;(statearr_19598_19671[(2)] = inst_19547);
(statearr_19598_19671[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (44)))
{var inst_19556 = (state_19563[(2)]);var state_19563__$1 = (function (){var statearr_19599 = state_19563;(statearr_19599[(29)] = inst_19556);
return statearr_19599;
})();var statearr_19600_19672 = state_19563__$1;(statearr_19600_19672[(2)] = null);
(statearr_19600_19672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (6)))
{var inst_19491 = (state_19563[(30)]);var inst_19490 = cljs.core.deref.call(null,cs);var inst_19491__$1 = cljs.core.keys.call(null,inst_19490);var inst_19492 = cljs.core.count.call(null,inst_19491__$1);var inst_19493 = cljs.core.reset_BANG_.call(null,dctr,inst_19492);var inst_19498 = cljs.core.seq.call(null,inst_19491__$1);var inst_19499 = inst_19498;var inst_19500 = null;var inst_19501 = (0);var inst_19502 = (0);var state_19563__$1 = (function (){var statearr_19601 = state_19563;(statearr_19601[(18)] = inst_19501);
(statearr_19601[(19)] = inst_19499);
(statearr_19601[(9)] = inst_19500);
(statearr_19601[(10)] = inst_19502);
(statearr_19601[(31)] = inst_19493);
(statearr_19601[(30)] = inst_19491__$1);
return statearr_19601;
})();var statearr_19602_19673 = state_19563__$1;(statearr_19602_19673[(2)] = null);
(statearr_19602_19673[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (28)))
{var inst_19520 = (state_19563[(17)]);var inst_19499 = (state_19563[(19)]);var inst_19520__$1 = cljs.core.seq.call(null,inst_19499);var state_19563__$1 = (function (){var statearr_19603 = state_19563;(statearr_19603[(17)] = inst_19520__$1);
return statearr_19603;
})();if(inst_19520__$1)
{var statearr_19604_19674 = state_19563__$1;(statearr_19604_19674[(1)] = (33));
} else
{var statearr_19605_19675 = state_19563__$1;(statearr_19605_19675[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (25)))
{var inst_19501 = (state_19563[(18)]);var inst_19502 = (state_19563[(10)]);var inst_19504 = (inst_19502 < inst_19501);var inst_19505 = inst_19504;var state_19563__$1 = state_19563;if(cljs.core.truth_(inst_19505))
{var statearr_19606_19676 = state_19563__$1;(statearr_19606_19676[(1)] = (27));
} else
{var statearr_19607_19677 = state_19563__$1;(statearr_19607_19677[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (34)))
{var state_19563__$1 = state_19563;var statearr_19608_19678 = state_19563__$1;(statearr_19608_19678[(2)] = null);
(statearr_19608_19678[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (17)))
{var state_19563__$1 = state_19563;var statearr_19609_19679 = state_19563__$1;(statearr_19609_19679[(2)] = null);
(statearr_19609_19679[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (3)))
{var inst_19561 = (state_19563[(2)]);var state_19563__$1 = state_19563;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19563__$1,inst_19561);
} else
{if((state_val_19564 === (12)))
{var inst_19486 = (state_19563[(2)]);var state_19563__$1 = state_19563;var statearr_19610_19680 = state_19563__$1;(statearr_19610_19680[(2)] = inst_19486);
(statearr_19610_19680[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (2)))
{var state_19563__$1 = state_19563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19563__$1,(4),ch);
} else
{if((state_val_19564 === (23)))
{var state_19563__$1 = state_19563;var statearr_19611_19681 = state_19563__$1;(statearr_19611_19681[(2)] = null);
(statearr_19611_19681[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (35)))
{var inst_19545 = (state_19563[(2)]);var state_19563__$1 = state_19563;var statearr_19612_19682 = state_19563__$1;(statearr_19612_19682[(2)] = inst_19545);
(statearr_19612_19682[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (19)))
{var inst_19460 = (state_19563[(7)]);var inst_19464 = cljs.core.chunk_first.call(null,inst_19460);var inst_19465 = cljs.core.chunk_rest.call(null,inst_19460);var inst_19466 = cljs.core.count.call(null,inst_19464);var inst_19440 = inst_19465;var inst_19441 = inst_19464;var inst_19442 = inst_19466;var inst_19443 = (0);var state_19563__$1 = (function (){var statearr_19613 = state_19563;(statearr_19613[(12)] = inst_19442);
(statearr_19613[(13)] = inst_19440);
(statearr_19613[(14)] = inst_19441);
(statearr_19613[(16)] = inst_19443);
return statearr_19613;
})();var statearr_19614_19683 = state_19563__$1;(statearr_19614_19683[(2)] = null);
(statearr_19614_19683[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (11)))
{var inst_19440 = (state_19563[(13)]);var inst_19460 = (state_19563[(7)]);var inst_19460__$1 = cljs.core.seq.call(null,inst_19440);var state_19563__$1 = (function (){var statearr_19615 = state_19563;(statearr_19615[(7)] = inst_19460__$1);
return statearr_19615;
})();if(inst_19460__$1)
{var statearr_19616_19684 = state_19563__$1;(statearr_19616_19684[(1)] = (16));
} else
{var statearr_19617_19685 = state_19563__$1;(statearr_19617_19685[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (9)))
{var inst_19488 = (state_19563[(2)]);var state_19563__$1 = state_19563;var statearr_19618_19686 = state_19563__$1;(statearr_19618_19686[(2)] = inst_19488);
(statearr_19618_19686[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (5)))
{var inst_19438 = cljs.core.deref.call(null,cs);var inst_19439 = cljs.core.seq.call(null,inst_19438);var inst_19440 = inst_19439;var inst_19441 = null;var inst_19442 = (0);var inst_19443 = (0);var state_19563__$1 = (function (){var statearr_19619 = state_19563;(statearr_19619[(12)] = inst_19442);
(statearr_19619[(13)] = inst_19440);
(statearr_19619[(14)] = inst_19441);
(statearr_19619[(16)] = inst_19443);
return statearr_19619;
})();var statearr_19620_19687 = state_19563__$1;(statearr_19620_19687[(2)] = null);
(statearr_19620_19687[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (14)))
{var state_19563__$1 = state_19563;var statearr_19621_19688 = state_19563__$1;(statearr_19621_19688[(2)] = null);
(statearr_19621_19688[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (45)))
{var inst_19553 = (state_19563[(2)]);var state_19563__$1 = state_19563;var statearr_19622_19689 = state_19563__$1;(statearr_19622_19689[(2)] = inst_19553);
(statearr_19622_19689[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (26)))
{var inst_19491 = (state_19563[(30)]);var inst_19549 = (state_19563[(2)]);var inst_19550 = cljs.core.seq.call(null,inst_19491);var state_19563__$1 = (function (){var statearr_19623 = state_19563;(statearr_19623[(32)] = inst_19549);
return statearr_19623;
})();if(inst_19550)
{var statearr_19624_19690 = state_19563__$1;(statearr_19624_19690[(1)] = (42));
} else
{var statearr_19625_19691 = state_19563__$1;(statearr_19625_19691[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (16)))
{var inst_19460 = (state_19563[(7)]);var inst_19462 = cljs.core.chunked_seq_QMARK_.call(null,inst_19460);var state_19563__$1 = state_19563;if(inst_19462)
{var statearr_19629_19692 = state_19563__$1;(statearr_19629_19692[(1)] = (19));
} else
{var statearr_19630_19693 = state_19563__$1;(statearr_19630_19693[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (38)))
{var inst_19542 = (state_19563[(2)]);var state_19563__$1 = state_19563;var statearr_19631_19694 = state_19563__$1;(statearr_19631_19694[(2)] = inst_19542);
(statearr_19631_19694[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (30)))
{var inst_19501 = (state_19563[(18)]);var inst_19499 = (state_19563[(19)]);var inst_19500 = (state_19563[(9)]);var inst_19502 = (state_19563[(10)]);var inst_19516 = (state_19563[(2)]);var inst_19517 = (inst_19502 + (1));var tmp19626 = inst_19501;var tmp19627 = inst_19499;var tmp19628 = inst_19500;var inst_19499__$1 = tmp19627;var inst_19500__$1 = tmp19628;var inst_19501__$1 = tmp19626;var inst_19502__$1 = inst_19517;var state_19563__$1 = (function (){var statearr_19632 = state_19563;(statearr_19632[(18)] = inst_19501__$1);
(statearr_19632[(19)] = inst_19499__$1);
(statearr_19632[(33)] = inst_19516);
(statearr_19632[(9)] = inst_19500__$1);
(statearr_19632[(10)] = inst_19502__$1);
return statearr_19632;
})();var statearr_19633_19695 = state_19563__$1;(statearr_19633_19695[(2)] = null);
(statearr_19633_19695[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (10)))
{var inst_19441 = (state_19563[(14)]);var inst_19443 = (state_19563[(16)]);var inst_19449 = cljs.core._nth.call(null,inst_19441,inst_19443);var inst_19450 = cljs.core.nth.call(null,inst_19449,(0),null);var inst_19451 = cljs.core.nth.call(null,inst_19449,(1),null);var state_19563__$1 = (function (){var statearr_19634 = state_19563;(statearr_19634[(28)] = inst_19450);
return statearr_19634;
})();if(cljs.core.truth_(inst_19451))
{var statearr_19635_19696 = state_19563__$1;(statearr_19635_19696[(1)] = (13));
} else
{var statearr_19636_19697 = state_19563__$1;(statearr_19636_19697[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (18)))
{var inst_19484 = (state_19563[(2)]);var state_19563__$1 = state_19563;var statearr_19637_19698 = state_19563__$1;(statearr_19637_19698[(2)] = inst_19484);
(statearr_19637_19698[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (42)))
{var state_19563__$1 = state_19563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_19563__$1,(45),dchan);
} else
{if((state_val_19564 === (37)))
{var inst_19520 = (state_19563[(17)]);var inst_19529 = cljs.core.first.call(null,inst_19520);var state_19563__$1 = (function (){var statearr_19638 = state_19563;(statearr_19638[(25)] = inst_19529);
return statearr_19638;
})();var statearr_19639_19699 = state_19563__$1;(statearr_19639_19699[(2)] = null);
(statearr_19639_19699[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19564 === (8)))
{var inst_19442 = (state_19563[(12)]);var inst_19443 = (state_19563[(16)]);var inst_19445 = (inst_19443 < inst_19442);var inst_19446 = inst_19445;var state_19563__$1 = state_19563;if(cljs.core.truth_(inst_19446))
{var statearr_19640_19700 = state_19563__$1;(statearr_19640_19700[(1)] = (10));
} else
{var statearr_19641_19701 = state_19563__$1;(statearr_19641_19701[(1)] = (11));
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
});})(c__5708__auto___19649,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___19649,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19645 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19645[(0)] = state_machine__5694__auto__);
(statearr_19645[(1)] = (1));
return statearr_19645;
});
var state_machine__5694__auto____1 = (function (state_19563){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19563);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19646){if((e19646 instanceof Object))
{var ex__5697__auto__ = e19646;var statearr_19647_19702 = state_19563;(statearr_19647_19702[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19563);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19646;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19703 = state_19563;
state_19563 = G__19703;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19563){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19649,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_19648 = f__5709__auto__.call(null);(statearr_19648[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19649);
return statearr_19648;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19649,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj19705 = {};return obj19705;
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
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
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
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
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
;var m = (function (){if(typeof cljs.core.async.t19815 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t19815 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta19816){
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
this.meta19816 = meta19816;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t19815.cljs$lang$type = true;
cljs.core.async.t19815.cljs$lang$ctorStr = "cljs.core.async/t19815";
cljs.core.async.t19815.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t19815");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19815.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t19815.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19815.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19815.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19815.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19815.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19815.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t19815.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19815.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19817){var self__ = this;
var _19817__$1 = this;return self__.meta19816;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t19815.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_19817,meta19816__$1){var self__ = this;
var _19817__$1 = this;return (new cljs.core.async.t19815(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta19816__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t19815 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t19815(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19816){return (new cljs.core.async.t19815(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta19816));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t19815(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___19924 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___19924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___19924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_19882){var state_val_19883 = (state_19882[(1)]);if((state_val_19883 === (7)))
{var inst_19831 = (state_19882[(7)]);var inst_19836 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19831);var state_19882__$1 = state_19882;var statearr_19884_19925 = state_19882__$1;(statearr_19884_19925[(2)] = inst_19836);
(statearr_19884_19925[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (20)))
{var inst_19846 = (state_19882[(8)]);var state_19882__$1 = state_19882;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_19882__$1,(23),out,inst_19846);
} else
{if((state_val_19883 === (1)))
{var inst_19821 = (state_19882[(9)]);var inst_19821__$1 = calc_state.call(null);var inst_19822 = cljs.core.seq_QMARK_.call(null,inst_19821__$1);var state_19882__$1 = (function (){var statearr_19885 = state_19882;(statearr_19885[(9)] = inst_19821__$1);
return statearr_19885;
})();if(inst_19822)
{var statearr_19886_19926 = state_19882__$1;(statearr_19886_19926[(1)] = (2));
} else
{var statearr_19887_19927 = state_19882__$1;(statearr_19887_19927[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (4)))
{var inst_19821 = (state_19882[(9)]);var inst_19827 = (state_19882[(2)]);var inst_19828 = cljs.core.get.call(null,inst_19827,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19829 = cljs.core.get.call(null,inst_19827,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19830 = cljs.core.get.call(null,inst_19827,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_19831 = inst_19821;var state_19882__$1 = (function (){var statearr_19888 = state_19882;(statearr_19888[(10)] = inst_19828);
(statearr_19888[(11)] = inst_19829);
(statearr_19888[(7)] = inst_19831);
(statearr_19888[(12)] = inst_19830);
return statearr_19888;
})();var statearr_19889_19928 = state_19882__$1;(statearr_19889_19928[(2)] = null);
(statearr_19889_19928[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (15)))
{var state_19882__$1 = state_19882;var statearr_19890_19929 = state_19882__$1;(statearr_19890_19929[(2)] = null);
(statearr_19890_19929[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (21)))
{var state_19882__$1 = state_19882;var statearr_19891_19930 = state_19882__$1;(statearr_19891_19930[(2)] = null);
(statearr_19891_19930[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (13)))
{var inst_19878 = (state_19882[(2)]);var state_19882__$1 = state_19882;var statearr_19892_19931 = state_19882__$1;(statearr_19892_19931[(2)] = inst_19878);
(statearr_19892_19931[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (22)))
{var inst_19839 = (state_19882[(13)]);var inst_19875 = (state_19882[(2)]);var inst_19831 = inst_19839;var state_19882__$1 = (function (){var statearr_19893 = state_19882;(statearr_19893[(7)] = inst_19831);
(statearr_19893[(14)] = inst_19875);
return statearr_19893;
})();var statearr_19894_19932 = state_19882__$1;(statearr_19894_19932[(2)] = null);
(statearr_19894_19932[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (6)))
{var inst_19880 = (state_19882[(2)]);var state_19882__$1 = state_19882;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_19882__$1,inst_19880);
} else
{if((state_val_19883 === (17)))
{var inst_19861 = (state_19882[(15)]);var state_19882__$1 = state_19882;var statearr_19895_19933 = state_19882__$1;(statearr_19895_19933[(2)] = inst_19861);
(statearr_19895_19933[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (3)))
{var inst_19821 = (state_19882[(9)]);var state_19882__$1 = state_19882;var statearr_19896_19934 = state_19882__$1;(statearr_19896_19934[(2)] = inst_19821);
(statearr_19896_19934[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (12)))
{var inst_19842 = (state_19882[(16)]);var inst_19861 = (state_19882[(15)]);var inst_19847 = (state_19882[(17)]);var inst_19861__$1 = inst_19842.call(null,inst_19847);var state_19882__$1 = (function (){var statearr_19897 = state_19882;(statearr_19897[(15)] = inst_19861__$1);
return statearr_19897;
})();if(cljs.core.truth_(inst_19861__$1))
{var statearr_19898_19935 = state_19882__$1;(statearr_19898_19935[(1)] = (17));
} else
{var statearr_19899_19936 = state_19882__$1;(statearr_19899_19936[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (2)))
{var inst_19821 = (state_19882[(9)]);var inst_19824 = cljs.core.apply.call(null,cljs.core.hash_map,inst_19821);var state_19882__$1 = state_19882;var statearr_19900_19937 = state_19882__$1;(statearr_19900_19937[(2)] = inst_19824);
(statearr_19900_19937[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (23)))
{var inst_19872 = (state_19882[(2)]);var state_19882__$1 = state_19882;var statearr_19901_19938 = state_19882__$1;(statearr_19901_19938[(2)] = inst_19872);
(statearr_19901_19938[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (19)))
{var inst_19869 = (state_19882[(2)]);var state_19882__$1 = state_19882;if(cljs.core.truth_(inst_19869))
{var statearr_19902_19939 = state_19882__$1;(statearr_19902_19939[(1)] = (20));
} else
{var statearr_19903_19940 = state_19882__$1;(statearr_19903_19940[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (11)))
{var inst_19846 = (state_19882[(8)]);var inst_19852 = (inst_19846 == null);var state_19882__$1 = state_19882;if(cljs.core.truth_(inst_19852))
{var statearr_19904_19941 = state_19882__$1;(statearr_19904_19941[(1)] = (14));
} else
{var statearr_19905_19942 = state_19882__$1;(statearr_19905_19942[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (9)))
{var inst_19839 = (state_19882[(13)]);var inst_19839__$1 = (state_19882[(2)]);var inst_19840 = cljs.core.get.call(null,inst_19839__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_19841 = cljs.core.get.call(null,inst_19839__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_19842 = cljs.core.get.call(null,inst_19839__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_19882__$1 = (function (){var statearr_19906 = state_19882;(statearr_19906[(16)] = inst_19842);
(statearr_19906[(18)] = inst_19841);
(statearr_19906[(13)] = inst_19839__$1);
return statearr_19906;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_19882__$1,(10),inst_19840);
} else
{if((state_val_19883 === (5)))
{var inst_19831 = (state_19882[(7)]);var inst_19834 = cljs.core.seq_QMARK_.call(null,inst_19831);var state_19882__$1 = state_19882;if(inst_19834)
{var statearr_19907_19943 = state_19882__$1;(statearr_19907_19943[(1)] = (7));
} else
{var statearr_19908_19944 = state_19882__$1;(statearr_19908_19944[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (14)))
{var inst_19847 = (state_19882[(17)]);var inst_19854 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_19847);var state_19882__$1 = state_19882;var statearr_19909_19945 = state_19882__$1;(statearr_19909_19945[(2)] = inst_19854);
(statearr_19909_19945[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (16)))
{var inst_19857 = (state_19882[(2)]);var inst_19858 = calc_state.call(null);var inst_19831 = inst_19858;var state_19882__$1 = (function (){var statearr_19910 = state_19882;(statearr_19910[(19)] = inst_19857);
(statearr_19910[(7)] = inst_19831);
return statearr_19910;
})();var statearr_19911_19946 = state_19882__$1;(statearr_19911_19946[(2)] = null);
(statearr_19911_19946[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (10)))
{var inst_19846 = (state_19882[(8)]);var inst_19847 = (state_19882[(17)]);var inst_19845 = (state_19882[(2)]);var inst_19846__$1 = cljs.core.nth.call(null,inst_19845,(0),null);var inst_19847__$1 = cljs.core.nth.call(null,inst_19845,(1),null);var inst_19848 = (inst_19846__$1 == null);var inst_19849 = cljs.core._EQ_.call(null,inst_19847__$1,change);var inst_19850 = (inst_19848) || (inst_19849);var state_19882__$1 = (function (){var statearr_19912 = state_19882;(statearr_19912[(8)] = inst_19846__$1);
(statearr_19912[(17)] = inst_19847__$1);
return statearr_19912;
})();if(cljs.core.truth_(inst_19850))
{var statearr_19913_19947 = state_19882__$1;(statearr_19913_19947[(1)] = (11));
} else
{var statearr_19914_19948 = state_19882__$1;(statearr_19914_19948[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (18)))
{var inst_19842 = (state_19882[(16)]);var inst_19841 = (state_19882[(18)]);var inst_19847 = (state_19882[(17)]);var inst_19864 = cljs.core.empty_QMARK_.call(null,inst_19842);var inst_19865 = inst_19841.call(null,inst_19847);var inst_19866 = cljs.core.not.call(null,inst_19865);var inst_19867 = (inst_19864) && (inst_19866);var state_19882__$1 = state_19882;var statearr_19915_19949 = state_19882__$1;(statearr_19915_19949[(2)] = inst_19867);
(statearr_19915_19949[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_19883 === (8)))
{var inst_19831 = (state_19882[(7)]);var state_19882__$1 = state_19882;var statearr_19916_19950 = state_19882__$1;(statearr_19916_19950[(2)] = inst_19831);
(statearr_19916_19950[(1)] = (9));
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
});})(c__5708__auto___19924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___19924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_19920 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_19920[(0)] = state_machine__5694__auto__);
(statearr_19920[(1)] = (1));
return statearr_19920;
});
var state_machine__5694__auto____1 = (function (state_19882){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_19882);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e19921){if((e19921 instanceof Object))
{var ex__5697__auto__ = e19921;var statearr_19922_19951 = state_19882;(statearr_19922_19951[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_19882);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e19921;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__19952 = state_19882;
state_19882 = G__19952;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_19882){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_19882);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___19924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_19923 = f__5709__auto__.call(null);(statearr_19923[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___19924);
return statearr_19923;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___19924,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj19954 = {};return obj19954;
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
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
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
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
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
return (function (topic){var or__3558__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3558__auto__,mults){
return (function (p1__19955_SHARP_){if(cljs.core.truth_(p1__19955_SHARP_.call(null,topic)))
{return p1__19955_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__19955_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t20080 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t20080 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta20081){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta20081 = meta20081;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t20080.cljs$lang$type = true;
cljs.core.async.t20080.cljs$lang$ctorStr = "cljs.core.async/t20080";
cljs.core.async.t20080.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t20080");
});})(mults,ensure_mult))
;
cljs.core.async.t20080.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t20080.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t20080.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t20080.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t20080.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t20080.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t20080.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t20080.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_20082){var self__ = this;
var _20082__$1 = this;return self__.meta20081;
});})(mults,ensure_mult))
;
cljs.core.async.t20080.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_20082,meta20081__$1){var self__ = this;
var _20082__$1 = this;return (new cljs.core.async.t20080(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta20081__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t20080 = ((function (mults,ensure_mult){
return (function __GT_t20080(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20081){return (new cljs.core.async.t20080(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta20081));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t20080(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___20204 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20204,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20204,mults,ensure_mult,p){
return (function (state_20156){var state_val_20157 = (state_20156[(1)]);if((state_val_20157 === (7)))
{var inst_20152 = (state_20156[(2)]);var state_20156__$1 = state_20156;var statearr_20158_20205 = state_20156__$1;(statearr_20158_20205[(2)] = inst_20152);
(statearr_20158_20205[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (20)))
{var state_20156__$1 = state_20156;var statearr_20159_20206 = state_20156__$1;(statearr_20159_20206[(2)] = null);
(statearr_20159_20206[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (1)))
{var state_20156__$1 = state_20156;var statearr_20160_20207 = state_20156__$1;(statearr_20160_20207[(2)] = null);
(statearr_20160_20207[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (24)))
{var inst_20135 = (state_20156[(7)]);var inst_20085 = (state_20156[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20156,(23),Object,null,(22));var inst_20142 = cljs.core.async.muxch_STAR_.call(null,inst_20135);var state_20156__$1 = state_20156;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20156__$1,(25),inst_20142,inst_20085);
} else
{if((state_val_20157 === (4)))
{var inst_20085 = (state_20156[(8)]);var inst_20085__$1 = (state_20156[(2)]);var inst_20086 = (inst_20085__$1 == null);var state_20156__$1 = (function (){var statearr_20161 = state_20156;(statearr_20161[(8)] = inst_20085__$1);
return statearr_20161;
})();if(cljs.core.truth_(inst_20086))
{var statearr_20162_20208 = state_20156__$1;(statearr_20162_20208[(1)] = (5));
} else
{var statearr_20163_20209 = state_20156__$1;(statearr_20163_20209[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (15)))
{var inst_20127 = (state_20156[(2)]);var state_20156__$1 = state_20156;var statearr_20164_20210 = state_20156__$1;(statearr_20164_20210[(2)] = inst_20127);
(statearr_20164_20210[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (21)))
{var inst_20149 = (state_20156[(2)]);var state_20156__$1 = (function (){var statearr_20165 = state_20156;(statearr_20165[(9)] = inst_20149);
return statearr_20165;
})();var statearr_20166_20211 = state_20156__$1;(statearr_20166_20211[(2)] = null);
(statearr_20166_20211[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (13)))
{var inst_20109 = (state_20156[(10)]);var inst_20111 = cljs.core.chunked_seq_QMARK_.call(null,inst_20109);var state_20156__$1 = state_20156;if(inst_20111)
{var statearr_20167_20212 = state_20156__$1;(statearr_20167_20212[(1)] = (16));
} else
{var statearr_20168_20213 = state_20156__$1;(statearr_20168_20213[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (22)))
{var inst_20146 = (state_20156[(2)]);var state_20156__$1 = state_20156;var statearr_20169_20214 = state_20156__$1;(statearr_20169_20214[(2)] = inst_20146);
(statearr_20169_20214[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (6)))
{var inst_20133 = (state_20156[(11)]);var inst_20135 = (state_20156[(7)]);var inst_20085 = (state_20156[(8)]);var inst_20133__$1 = topic_fn.call(null,inst_20085);var inst_20134 = cljs.core.deref.call(null,mults);var inst_20135__$1 = cljs.core.get.call(null,inst_20134,inst_20133__$1);var state_20156__$1 = (function (){var statearr_20170 = state_20156;(statearr_20170[(11)] = inst_20133__$1);
(statearr_20170[(7)] = inst_20135__$1);
return statearr_20170;
})();if(cljs.core.truth_(inst_20135__$1))
{var statearr_20171_20215 = state_20156__$1;(statearr_20171_20215[(1)] = (19));
} else
{var statearr_20172_20216 = state_20156__$1;(statearr_20172_20216[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (25)))
{var inst_20144 = (state_20156[(2)]);var state_20156__$1 = state_20156;var statearr_20173_20217 = state_20156__$1;(statearr_20173_20217[(2)] = inst_20144);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20156__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (17)))
{var inst_20109 = (state_20156[(10)]);var inst_20118 = cljs.core.first.call(null,inst_20109);var inst_20119 = cljs.core.async.muxch_STAR_.call(null,inst_20118);var inst_20120 = cljs.core.async.close_BANG_.call(null,inst_20119);var inst_20121 = cljs.core.next.call(null,inst_20109);var inst_20095 = inst_20121;var inst_20096 = null;var inst_20097 = (0);var inst_20098 = (0);var state_20156__$1 = (function (){var statearr_20174 = state_20156;(statearr_20174[(12)] = inst_20097);
(statearr_20174[(13)] = inst_20096);
(statearr_20174[(14)] = inst_20120);
(statearr_20174[(15)] = inst_20098);
(statearr_20174[(16)] = inst_20095);
return statearr_20174;
})();var statearr_20175_20218 = state_20156__$1;(statearr_20175_20218[(2)] = null);
(statearr_20175_20218[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (3)))
{var inst_20154 = (state_20156[(2)]);var state_20156__$1 = state_20156;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20156__$1,inst_20154);
} else
{if((state_val_20157 === (12)))
{var inst_20129 = (state_20156[(2)]);var state_20156__$1 = state_20156;var statearr_20176_20219 = state_20156__$1;(statearr_20176_20219[(2)] = inst_20129);
(statearr_20176_20219[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (2)))
{var state_20156__$1 = state_20156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20156__$1,(4),ch);
} else
{if((state_val_20157 === (23)))
{var inst_20133 = (state_20156[(11)]);var inst_20137 = (state_20156[(2)]);var inst_20138 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_20133);var state_20156__$1 = (function (){var statearr_20177 = state_20156;(statearr_20177[(17)] = inst_20137);
return statearr_20177;
})();var statearr_20178_20220 = state_20156__$1;(statearr_20178_20220[(2)] = inst_20138);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20156__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (19)))
{var state_20156__$1 = state_20156;var statearr_20179_20221 = state_20156__$1;(statearr_20179_20221[(2)] = null);
(statearr_20179_20221[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (11)))
{var inst_20109 = (state_20156[(10)]);var inst_20095 = (state_20156[(16)]);var inst_20109__$1 = cljs.core.seq.call(null,inst_20095);var state_20156__$1 = (function (){var statearr_20180 = state_20156;(statearr_20180[(10)] = inst_20109__$1);
return statearr_20180;
})();if(inst_20109__$1)
{var statearr_20181_20222 = state_20156__$1;(statearr_20181_20222[(1)] = (13));
} else
{var statearr_20182_20223 = state_20156__$1;(statearr_20182_20223[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (9)))
{var inst_20131 = (state_20156[(2)]);var state_20156__$1 = state_20156;var statearr_20183_20224 = state_20156__$1;(statearr_20183_20224[(2)] = inst_20131);
(statearr_20183_20224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (5)))
{var inst_20092 = cljs.core.deref.call(null,mults);var inst_20093 = cljs.core.vals.call(null,inst_20092);var inst_20094 = cljs.core.seq.call(null,inst_20093);var inst_20095 = inst_20094;var inst_20096 = null;var inst_20097 = (0);var inst_20098 = (0);var state_20156__$1 = (function (){var statearr_20184 = state_20156;(statearr_20184[(12)] = inst_20097);
(statearr_20184[(13)] = inst_20096);
(statearr_20184[(15)] = inst_20098);
(statearr_20184[(16)] = inst_20095);
return statearr_20184;
})();var statearr_20185_20225 = state_20156__$1;(statearr_20185_20225[(2)] = null);
(statearr_20185_20225[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (14)))
{var state_20156__$1 = state_20156;var statearr_20189_20226 = state_20156__$1;(statearr_20189_20226[(2)] = null);
(statearr_20189_20226[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (16)))
{var inst_20109 = (state_20156[(10)]);var inst_20113 = cljs.core.chunk_first.call(null,inst_20109);var inst_20114 = cljs.core.chunk_rest.call(null,inst_20109);var inst_20115 = cljs.core.count.call(null,inst_20113);var inst_20095 = inst_20114;var inst_20096 = inst_20113;var inst_20097 = inst_20115;var inst_20098 = (0);var state_20156__$1 = (function (){var statearr_20190 = state_20156;(statearr_20190[(12)] = inst_20097);
(statearr_20190[(13)] = inst_20096);
(statearr_20190[(15)] = inst_20098);
(statearr_20190[(16)] = inst_20095);
return statearr_20190;
})();var statearr_20191_20227 = state_20156__$1;(statearr_20191_20227[(2)] = null);
(statearr_20191_20227[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (10)))
{var inst_20097 = (state_20156[(12)]);var inst_20096 = (state_20156[(13)]);var inst_20098 = (state_20156[(15)]);var inst_20095 = (state_20156[(16)]);var inst_20103 = cljs.core._nth.call(null,inst_20096,inst_20098);var inst_20104 = cljs.core.async.muxch_STAR_.call(null,inst_20103);var inst_20105 = cljs.core.async.close_BANG_.call(null,inst_20104);var inst_20106 = (inst_20098 + (1));var tmp20186 = inst_20097;var tmp20187 = inst_20096;var tmp20188 = inst_20095;var inst_20095__$1 = tmp20188;var inst_20096__$1 = tmp20187;var inst_20097__$1 = tmp20186;var inst_20098__$1 = inst_20106;var state_20156__$1 = (function (){var statearr_20192 = state_20156;(statearr_20192[(12)] = inst_20097__$1);
(statearr_20192[(13)] = inst_20096__$1);
(statearr_20192[(15)] = inst_20098__$1);
(statearr_20192[(16)] = inst_20095__$1);
(statearr_20192[(18)] = inst_20105);
return statearr_20192;
})();var statearr_20193_20228 = state_20156__$1;(statearr_20193_20228[(2)] = null);
(statearr_20193_20228[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (18)))
{var inst_20124 = (state_20156[(2)]);var state_20156__$1 = state_20156;var statearr_20194_20229 = state_20156__$1;(statearr_20194_20229[(2)] = inst_20124);
(statearr_20194_20229[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20157 === (8)))
{var inst_20097 = (state_20156[(12)]);var inst_20098 = (state_20156[(15)]);var inst_20100 = (inst_20098 < inst_20097);var inst_20101 = inst_20100;var state_20156__$1 = state_20156;if(cljs.core.truth_(inst_20101))
{var statearr_20195_20230 = state_20156__$1;(statearr_20195_20230[(1)] = (10));
} else
{var statearr_20196_20231 = state_20156__$1;(statearr_20196_20231[(1)] = (11));
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
});})(c__5708__auto___20204,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___20204,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20200[(0)] = state_machine__5694__auto__);
(statearr_20200[(1)] = (1));
return statearr_20200;
});
var state_machine__5694__auto____1 = (function (state_20156){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20156);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20201){if((e20201 instanceof Object))
{var ex__5697__auto__ = e20201;var statearr_20202_20232 = state_20156;(statearr_20202_20232[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20156);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20201;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20233 = state_20156;
state_20156 = G__20233;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20156){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20204,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_20203 = f__5709__auto__.call(null);(statearr_20203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20204);
return statearr_20203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20204,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___20370 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_20340){var state_val_20341 = (state_20340[(1)]);if((state_val_20341 === (7)))
{var state_20340__$1 = state_20340;var statearr_20342_20371 = state_20340__$1;(statearr_20342_20371[(2)] = null);
(statearr_20342_20371[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (1)))
{var state_20340__$1 = state_20340;var statearr_20343_20372 = state_20340__$1;(statearr_20343_20372[(2)] = null);
(statearr_20343_20372[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (4)))
{var inst_20304 = (state_20340[(7)]);var inst_20306 = (inst_20304 < cnt);var state_20340__$1 = state_20340;if(cljs.core.truth_(inst_20306))
{var statearr_20344_20373 = state_20340__$1;(statearr_20344_20373[(1)] = (6));
} else
{var statearr_20345_20374 = state_20340__$1;(statearr_20345_20374[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (15)))
{var inst_20336 = (state_20340[(2)]);var state_20340__$1 = state_20340;var statearr_20346_20375 = state_20340__$1;(statearr_20346_20375[(2)] = inst_20336);
(statearr_20346_20375[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (13)))
{var inst_20329 = cljs.core.async.close_BANG_.call(null,out);var state_20340__$1 = state_20340;var statearr_20347_20376 = state_20340__$1;(statearr_20347_20376[(2)] = inst_20329);
(statearr_20347_20376[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (6)))
{var state_20340__$1 = state_20340;var statearr_20348_20377 = state_20340__$1;(statearr_20348_20377[(2)] = null);
(statearr_20348_20377[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (3)))
{var inst_20338 = (state_20340[(2)]);var state_20340__$1 = state_20340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20340__$1,inst_20338);
} else
{if((state_val_20341 === (12)))
{var inst_20326 = (state_20340[(8)]);var inst_20326__$1 = (state_20340[(2)]);var inst_20327 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_20326__$1);var state_20340__$1 = (function (){var statearr_20349 = state_20340;(statearr_20349[(8)] = inst_20326__$1);
return statearr_20349;
})();if(cljs.core.truth_(inst_20327))
{var statearr_20350_20378 = state_20340__$1;(statearr_20350_20378[(1)] = (13));
} else
{var statearr_20351_20379 = state_20340__$1;(statearr_20351_20379[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (2)))
{var inst_20303 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_20304 = (0);var state_20340__$1 = (function (){var statearr_20352 = state_20340;(statearr_20352[(9)] = inst_20303);
(statearr_20352[(7)] = inst_20304);
return statearr_20352;
})();var statearr_20353_20380 = state_20340__$1;(statearr_20353_20380[(2)] = null);
(statearr_20353_20380[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (11)))
{var inst_20304 = (state_20340[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_20340,(10),Object,null,(9));var inst_20313 = chs__$1.call(null,inst_20304);var inst_20314 = done.call(null,inst_20304);var inst_20315 = cljs.core.async.take_BANG_.call(null,inst_20313,inst_20314);var state_20340__$1 = state_20340;var statearr_20354_20381 = state_20340__$1;(statearr_20354_20381[(2)] = inst_20315);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20340__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (9)))
{var inst_20304 = (state_20340[(7)]);var inst_20317 = (state_20340[(2)]);var inst_20318 = (inst_20304 + (1));var inst_20304__$1 = inst_20318;var state_20340__$1 = (function (){var statearr_20355 = state_20340;(statearr_20355[(10)] = inst_20317);
(statearr_20355[(7)] = inst_20304__$1);
return statearr_20355;
})();var statearr_20356_20382 = state_20340__$1;(statearr_20356_20382[(2)] = null);
(statearr_20356_20382[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (5)))
{var inst_20324 = (state_20340[(2)]);var state_20340__$1 = (function (){var statearr_20357 = state_20340;(statearr_20357[(11)] = inst_20324);
return statearr_20357;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20340__$1,(12),dchan);
} else
{if((state_val_20341 === (14)))
{var inst_20326 = (state_20340[(8)]);var inst_20331 = cljs.core.apply.call(null,f,inst_20326);var state_20340__$1 = state_20340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20340__$1,(16),out,inst_20331);
} else
{if((state_val_20341 === (16)))
{var inst_20333 = (state_20340[(2)]);var state_20340__$1 = (function (){var statearr_20358 = state_20340;(statearr_20358[(12)] = inst_20333);
return statearr_20358;
})();var statearr_20359_20383 = state_20340__$1;(statearr_20359_20383[(2)] = null);
(statearr_20359_20383[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (10)))
{var inst_20308 = (state_20340[(2)]);var inst_20309 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_20340__$1 = (function (){var statearr_20360 = state_20340;(statearr_20360[(13)] = inst_20308);
return statearr_20360;
})();var statearr_20361_20384 = state_20340__$1;(statearr_20361_20384[(2)] = inst_20309);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20340__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20341 === (8)))
{var inst_20322 = (state_20340[(2)]);var state_20340__$1 = state_20340;var statearr_20362_20385 = state_20340__$1;(statearr_20362_20385[(2)] = inst_20322);
(statearr_20362_20385[(1)] = (5));
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
});})(c__5708__auto___20370,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___20370,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20366 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20366[(0)] = state_machine__5694__auto__);
(statearr_20366[(1)] = (1));
return statearr_20366;
});
var state_machine__5694__auto____1 = (function (state_20340){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20340);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20367){if((e20367 instanceof Object))
{var ex__5697__auto__ = e20367;var statearr_20368_20386 = state_20340;(statearr_20368_20386[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20340);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20367;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20387 = state_20340;
state_20340 = G__20387;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20340){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20370,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_20369 = f__5709__auto__.call(null);(statearr_20369[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20370);
return statearr_20369;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20370,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___20495 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20495,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20495,out){
return (function (state_20471){var state_val_20472 = (state_20471[(1)]);if((state_val_20472 === (7)))
{var inst_20450 = (state_20471[(7)]);var inst_20451 = (state_20471[(8)]);var inst_20450__$1 = (state_20471[(2)]);var inst_20451__$1 = cljs.core.nth.call(null,inst_20450__$1,(0),null);var inst_20452 = cljs.core.nth.call(null,inst_20450__$1,(1),null);var inst_20453 = (inst_20451__$1 == null);var state_20471__$1 = (function (){var statearr_20473 = state_20471;(statearr_20473[(7)] = inst_20450__$1);
(statearr_20473[(8)] = inst_20451__$1);
(statearr_20473[(9)] = inst_20452);
return statearr_20473;
})();if(cljs.core.truth_(inst_20453))
{var statearr_20474_20496 = state_20471__$1;(statearr_20474_20496[(1)] = (8));
} else
{var statearr_20475_20497 = state_20471__$1;(statearr_20475_20497[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20472 === (1)))
{var inst_20442 = cljs.core.vec.call(null,chs);var inst_20443 = inst_20442;var state_20471__$1 = (function (){var statearr_20476 = state_20471;(statearr_20476[(10)] = inst_20443);
return statearr_20476;
})();var statearr_20477_20498 = state_20471__$1;(statearr_20477_20498[(2)] = null);
(statearr_20477_20498[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20472 === (4)))
{var inst_20443 = (state_20471[(10)]);var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_20471__$1,(7),inst_20443);
} else
{if((state_val_20472 === (6)))
{var inst_20467 = (state_20471[(2)]);var state_20471__$1 = state_20471;var statearr_20478_20499 = state_20471__$1;(statearr_20478_20499[(2)] = inst_20467);
(statearr_20478_20499[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20472 === (3)))
{var inst_20469 = (state_20471[(2)]);var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20471__$1,inst_20469);
} else
{if((state_val_20472 === (2)))
{var inst_20443 = (state_20471[(10)]);var inst_20445 = cljs.core.count.call(null,inst_20443);var inst_20446 = (inst_20445 > (0));var state_20471__$1 = state_20471;if(cljs.core.truth_(inst_20446))
{var statearr_20480_20500 = state_20471__$1;(statearr_20480_20500[(1)] = (4));
} else
{var statearr_20481_20501 = state_20471__$1;(statearr_20481_20501[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20472 === (11)))
{var inst_20443 = (state_20471[(10)]);var inst_20460 = (state_20471[(2)]);var tmp20479 = inst_20443;var inst_20443__$1 = tmp20479;var state_20471__$1 = (function (){var statearr_20482 = state_20471;(statearr_20482[(10)] = inst_20443__$1);
(statearr_20482[(11)] = inst_20460);
return statearr_20482;
})();var statearr_20483_20502 = state_20471__$1;(statearr_20483_20502[(2)] = null);
(statearr_20483_20502[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20472 === (9)))
{var inst_20451 = (state_20471[(8)]);var state_20471__$1 = state_20471;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20471__$1,(11),out,inst_20451);
} else
{if((state_val_20472 === (5)))
{var inst_20465 = cljs.core.async.close_BANG_.call(null,out);var state_20471__$1 = state_20471;var statearr_20484_20503 = state_20471__$1;(statearr_20484_20503[(2)] = inst_20465);
(statearr_20484_20503[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20472 === (10)))
{var inst_20463 = (state_20471[(2)]);var state_20471__$1 = state_20471;var statearr_20485_20504 = state_20471__$1;(statearr_20485_20504[(2)] = inst_20463);
(statearr_20485_20504[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20472 === (8)))
{var inst_20450 = (state_20471[(7)]);var inst_20451 = (state_20471[(8)]);var inst_20443 = (state_20471[(10)]);var inst_20452 = (state_20471[(9)]);var inst_20455 = (function (){var c = inst_20452;var v = inst_20451;var vec__20448 = inst_20450;var cs = inst_20443;return ((function (c,v,vec__20448,cs,inst_20450,inst_20451,inst_20443,inst_20452,state_val_20472,c__5708__auto___20495,out){
return (function (p1__20388_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__20388_SHARP_);
});
;})(c,v,vec__20448,cs,inst_20450,inst_20451,inst_20443,inst_20452,state_val_20472,c__5708__auto___20495,out))
})();var inst_20456 = cljs.core.filterv.call(null,inst_20455,inst_20443);var inst_20443__$1 = inst_20456;var state_20471__$1 = (function (){var statearr_20486 = state_20471;(statearr_20486[(10)] = inst_20443__$1);
return statearr_20486;
})();var statearr_20487_20505 = state_20471__$1;(statearr_20487_20505[(2)] = null);
(statearr_20487_20505[(1)] = (2));
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
});})(c__5708__auto___20495,out))
;return ((function (switch__5693__auto__,c__5708__auto___20495,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20491 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20491[(0)] = state_machine__5694__auto__);
(statearr_20491[(1)] = (1));
return statearr_20491;
});
var state_machine__5694__auto____1 = (function (state_20471){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20471);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20492){if((e20492 instanceof Object))
{var ex__5697__auto__ = e20492;var statearr_20493_20506 = state_20471;(statearr_20493_20506[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20471);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20492;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20507 = state_20471;
state_20471 = G__20507;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20471){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20495,out))
})();var state__5710__auto__ = (function (){var statearr_20494 = f__5709__auto__.call(null);(statearr_20494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20495);
return statearr_20494;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20495,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___20600 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20600,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20600,out){
return (function (state_20577){var state_val_20578 = (state_20577[(1)]);if((state_val_20578 === (7)))
{var inst_20559 = (state_20577[(7)]);var inst_20559__$1 = (state_20577[(2)]);var inst_20560 = (inst_20559__$1 == null);var inst_20561 = cljs.core.not.call(null,inst_20560);var state_20577__$1 = (function (){var statearr_20579 = state_20577;(statearr_20579[(7)] = inst_20559__$1);
return statearr_20579;
})();if(inst_20561)
{var statearr_20580_20601 = state_20577__$1;(statearr_20580_20601[(1)] = (8));
} else
{var statearr_20581_20602 = state_20577__$1;(statearr_20581_20602[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20578 === (1)))
{var inst_20554 = (0);var state_20577__$1 = (function (){var statearr_20582 = state_20577;(statearr_20582[(8)] = inst_20554);
return statearr_20582;
})();var statearr_20583_20603 = state_20577__$1;(statearr_20583_20603[(2)] = null);
(statearr_20583_20603[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20578 === (4)))
{var state_20577__$1 = state_20577;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20577__$1,(7),ch);
} else
{if((state_val_20578 === (6)))
{var inst_20572 = (state_20577[(2)]);var state_20577__$1 = state_20577;var statearr_20584_20604 = state_20577__$1;(statearr_20584_20604[(2)] = inst_20572);
(statearr_20584_20604[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20578 === (3)))
{var inst_20574 = (state_20577[(2)]);var inst_20575 = cljs.core.async.close_BANG_.call(null,out);var state_20577__$1 = (function (){var statearr_20585 = state_20577;(statearr_20585[(9)] = inst_20574);
return statearr_20585;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20577__$1,inst_20575);
} else
{if((state_val_20578 === (2)))
{var inst_20554 = (state_20577[(8)]);var inst_20556 = (inst_20554 < n);var state_20577__$1 = state_20577;if(cljs.core.truth_(inst_20556))
{var statearr_20586_20605 = state_20577__$1;(statearr_20586_20605[(1)] = (4));
} else
{var statearr_20587_20606 = state_20577__$1;(statearr_20587_20606[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20578 === (11)))
{var inst_20554 = (state_20577[(8)]);var inst_20564 = (state_20577[(2)]);var inst_20565 = (inst_20554 + (1));var inst_20554__$1 = inst_20565;var state_20577__$1 = (function (){var statearr_20588 = state_20577;(statearr_20588[(10)] = inst_20564);
(statearr_20588[(8)] = inst_20554__$1);
return statearr_20588;
})();var statearr_20589_20607 = state_20577__$1;(statearr_20589_20607[(2)] = null);
(statearr_20589_20607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20578 === (9)))
{var state_20577__$1 = state_20577;var statearr_20590_20608 = state_20577__$1;(statearr_20590_20608[(2)] = null);
(statearr_20590_20608[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20578 === (5)))
{var state_20577__$1 = state_20577;var statearr_20591_20609 = state_20577__$1;(statearr_20591_20609[(2)] = null);
(statearr_20591_20609[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20578 === (10)))
{var inst_20569 = (state_20577[(2)]);var state_20577__$1 = state_20577;var statearr_20592_20610 = state_20577__$1;(statearr_20592_20610[(2)] = inst_20569);
(statearr_20592_20610[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20578 === (8)))
{var inst_20559 = (state_20577[(7)]);var state_20577__$1 = state_20577;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20577__$1,(11),out,inst_20559);
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
});})(c__5708__auto___20600,out))
;return ((function (switch__5693__auto__,c__5708__auto___20600,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20596 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20596[(0)] = state_machine__5694__auto__);
(statearr_20596[(1)] = (1));
return statearr_20596;
});
var state_machine__5694__auto____1 = (function (state_20577){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20577);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20597){if((e20597 instanceof Object))
{var ex__5697__auto__ = e20597;var statearr_20598_20611 = state_20577;(statearr_20598_20611[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20577);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20597;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20612 = state_20577;
state_20577 = G__20612;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20577){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20577);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20600,out))
})();var state__5710__auto__ = (function (){var statearr_20599 = f__5709__auto__.call(null);(statearr_20599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20600);
return statearr_20599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20600,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___20709 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20709,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20709,out){
return (function (state_20684){var state_val_20685 = (state_20684[(1)]);if((state_val_20685 === (7)))
{var inst_20679 = (state_20684[(2)]);var state_20684__$1 = state_20684;var statearr_20686_20710 = state_20684__$1;(statearr_20686_20710[(2)] = inst_20679);
(statearr_20686_20710[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20685 === (1)))
{var inst_20661 = null;var state_20684__$1 = (function (){var statearr_20687 = state_20684;(statearr_20687[(7)] = inst_20661);
return statearr_20687;
})();var statearr_20688_20711 = state_20684__$1;(statearr_20688_20711[(2)] = null);
(statearr_20688_20711[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20685 === (4)))
{var inst_20664 = (state_20684[(8)]);var inst_20664__$1 = (state_20684[(2)]);var inst_20665 = (inst_20664__$1 == null);var inst_20666 = cljs.core.not.call(null,inst_20665);var state_20684__$1 = (function (){var statearr_20689 = state_20684;(statearr_20689[(8)] = inst_20664__$1);
return statearr_20689;
})();if(inst_20666)
{var statearr_20690_20712 = state_20684__$1;(statearr_20690_20712[(1)] = (5));
} else
{var statearr_20691_20713 = state_20684__$1;(statearr_20691_20713[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20685 === (6)))
{var state_20684__$1 = state_20684;var statearr_20692_20714 = state_20684__$1;(statearr_20692_20714[(2)] = null);
(statearr_20692_20714[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20685 === (3)))
{var inst_20681 = (state_20684[(2)]);var inst_20682 = cljs.core.async.close_BANG_.call(null,out);var state_20684__$1 = (function (){var statearr_20693 = state_20684;(statearr_20693[(9)] = inst_20681);
return statearr_20693;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20684__$1,inst_20682);
} else
{if((state_val_20685 === (2)))
{var state_20684__$1 = state_20684;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20684__$1,(4),ch);
} else
{if((state_val_20685 === (11)))
{var inst_20664 = (state_20684[(8)]);var inst_20673 = (state_20684[(2)]);var inst_20661 = inst_20664;var state_20684__$1 = (function (){var statearr_20694 = state_20684;(statearr_20694[(10)] = inst_20673);
(statearr_20694[(7)] = inst_20661);
return statearr_20694;
})();var statearr_20695_20715 = state_20684__$1;(statearr_20695_20715[(2)] = null);
(statearr_20695_20715[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20685 === (9)))
{var inst_20664 = (state_20684[(8)]);var state_20684__$1 = state_20684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20684__$1,(11),out,inst_20664);
} else
{if((state_val_20685 === (5)))
{var inst_20664 = (state_20684[(8)]);var inst_20661 = (state_20684[(7)]);var inst_20668 = cljs.core._EQ_.call(null,inst_20664,inst_20661);var state_20684__$1 = state_20684;if(inst_20668)
{var statearr_20697_20716 = state_20684__$1;(statearr_20697_20716[(1)] = (8));
} else
{var statearr_20698_20717 = state_20684__$1;(statearr_20698_20717[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20685 === (10)))
{var inst_20676 = (state_20684[(2)]);var state_20684__$1 = state_20684;var statearr_20699_20718 = state_20684__$1;(statearr_20699_20718[(2)] = inst_20676);
(statearr_20699_20718[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20685 === (8)))
{var inst_20661 = (state_20684[(7)]);var tmp20696 = inst_20661;var inst_20661__$1 = tmp20696;var state_20684__$1 = (function (){var statearr_20700 = state_20684;(statearr_20700[(7)] = inst_20661__$1);
return statearr_20700;
})();var statearr_20701_20719 = state_20684__$1;(statearr_20701_20719[(2)] = null);
(statearr_20701_20719[(1)] = (2));
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
});})(c__5708__auto___20709,out))
;return ((function (switch__5693__auto__,c__5708__auto___20709,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20705 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_20705[(0)] = state_machine__5694__auto__);
(statearr_20705[(1)] = (1));
return statearr_20705;
});
var state_machine__5694__auto____1 = (function (state_20684){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20684);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20706){if((e20706 instanceof Object))
{var ex__5697__auto__ = e20706;var statearr_20707_20720 = state_20684;(statearr_20707_20720[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20684);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20706;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20721 = state_20684;
state_20684 = G__20721;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20684){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20709,out))
})();var state__5710__auto__ = (function (){var statearr_20708 = f__5709__auto__.call(null);(statearr_20708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20709);
return statearr_20708;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20709,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___20856 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___20856,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___20856,out){
return (function (state_20826){var state_val_20827 = (state_20826[(1)]);if((state_val_20827 === (7)))
{var inst_20822 = (state_20826[(2)]);var state_20826__$1 = state_20826;var statearr_20828_20857 = state_20826__$1;(statearr_20828_20857[(2)] = inst_20822);
(statearr_20828_20857[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (1)))
{var inst_20789 = (new Array(n));var inst_20790 = inst_20789;var inst_20791 = (0);var state_20826__$1 = (function (){var statearr_20829 = state_20826;(statearr_20829[(7)] = inst_20790);
(statearr_20829[(8)] = inst_20791);
return statearr_20829;
})();var statearr_20830_20858 = state_20826__$1;(statearr_20830_20858[(2)] = null);
(statearr_20830_20858[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (4)))
{var inst_20794 = (state_20826[(9)]);var inst_20794__$1 = (state_20826[(2)]);var inst_20795 = (inst_20794__$1 == null);var inst_20796 = cljs.core.not.call(null,inst_20795);var state_20826__$1 = (function (){var statearr_20831 = state_20826;(statearr_20831[(9)] = inst_20794__$1);
return statearr_20831;
})();if(inst_20796)
{var statearr_20832_20859 = state_20826__$1;(statearr_20832_20859[(1)] = (5));
} else
{var statearr_20833_20860 = state_20826__$1;(statearr_20833_20860[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (15)))
{var inst_20816 = (state_20826[(2)]);var state_20826__$1 = state_20826;var statearr_20834_20861 = state_20826__$1;(statearr_20834_20861[(2)] = inst_20816);
(statearr_20834_20861[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (13)))
{var state_20826__$1 = state_20826;var statearr_20835_20862 = state_20826__$1;(statearr_20835_20862[(2)] = null);
(statearr_20835_20862[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (6)))
{var inst_20791 = (state_20826[(8)]);var inst_20812 = (inst_20791 > (0));var state_20826__$1 = state_20826;if(cljs.core.truth_(inst_20812))
{var statearr_20836_20863 = state_20826__$1;(statearr_20836_20863[(1)] = (12));
} else
{var statearr_20837_20864 = state_20826__$1;(statearr_20837_20864[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (3)))
{var inst_20824 = (state_20826[(2)]);var state_20826__$1 = state_20826;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20826__$1,inst_20824);
} else
{if((state_val_20827 === (12)))
{var inst_20790 = (state_20826[(7)]);var inst_20814 = cljs.core.vec.call(null,inst_20790);var state_20826__$1 = state_20826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20826__$1,(15),out,inst_20814);
} else
{if((state_val_20827 === (2)))
{var state_20826__$1 = state_20826;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20826__$1,(4),ch);
} else
{if((state_val_20827 === (11)))
{var inst_20806 = (state_20826[(2)]);var inst_20807 = (new Array(n));var inst_20790 = inst_20807;var inst_20791 = (0);var state_20826__$1 = (function (){var statearr_20838 = state_20826;(statearr_20838[(10)] = inst_20806);
(statearr_20838[(7)] = inst_20790);
(statearr_20838[(8)] = inst_20791);
return statearr_20838;
})();var statearr_20839_20865 = state_20826__$1;(statearr_20839_20865[(2)] = null);
(statearr_20839_20865[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (9)))
{var inst_20790 = (state_20826[(7)]);var inst_20804 = cljs.core.vec.call(null,inst_20790);var state_20826__$1 = state_20826;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20826__$1,(11),out,inst_20804);
} else
{if((state_val_20827 === (5)))
{var inst_20790 = (state_20826[(7)]);var inst_20794 = (state_20826[(9)]);var inst_20791 = (state_20826[(8)]);var inst_20799 = (state_20826[(11)]);var inst_20798 = (inst_20790[inst_20791] = inst_20794);var inst_20799__$1 = (inst_20791 + (1));var inst_20800 = (inst_20799__$1 < n);var state_20826__$1 = (function (){var statearr_20840 = state_20826;(statearr_20840[(12)] = inst_20798);
(statearr_20840[(11)] = inst_20799__$1);
return statearr_20840;
})();if(cljs.core.truth_(inst_20800))
{var statearr_20841_20866 = state_20826__$1;(statearr_20841_20866[(1)] = (8));
} else
{var statearr_20842_20867 = state_20826__$1;(statearr_20842_20867[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (14)))
{var inst_20819 = (state_20826[(2)]);var inst_20820 = cljs.core.async.close_BANG_.call(null,out);var state_20826__$1 = (function (){var statearr_20844 = state_20826;(statearr_20844[(13)] = inst_20819);
return statearr_20844;
})();var statearr_20845_20868 = state_20826__$1;(statearr_20845_20868[(2)] = inst_20820);
(statearr_20845_20868[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (10)))
{var inst_20810 = (state_20826[(2)]);var state_20826__$1 = state_20826;var statearr_20846_20869 = state_20826__$1;(statearr_20846_20869[(2)] = inst_20810);
(statearr_20846_20869[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20827 === (8)))
{var inst_20790 = (state_20826[(7)]);var inst_20799 = (state_20826[(11)]);var tmp20843 = inst_20790;var inst_20790__$1 = tmp20843;var inst_20791 = inst_20799;var state_20826__$1 = (function (){var statearr_20847 = state_20826;(statearr_20847[(7)] = inst_20790__$1);
(statearr_20847[(8)] = inst_20791);
return statearr_20847;
})();var statearr_20848_20870 = state_20826__$1;(statearr_20848_20870[(2)] = null);
(statearr_20848_20870[(1)] = (2));
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
});})(c__5708__auto___20856,out))
;return ((function (switch__5693__auto__,c__5708__auto___20856,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_20852 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_20852[(0)] = state_machine__5694__auto__);
(statearr_20852[(1)] = (1));
return statearr_20852;
});
var state_machine__5694__auto____1 = (function (state_20826){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20826);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e20853){if((e20853 instanceof Object))
{var ex__5697__auto__ = e20853;var statearr_20854_20871 = state_20826;(statearr_20854_20871[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20826);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e20853;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__20872 = state_20826;
state_20826 = G__20872;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20826){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___20856,out))
})();var state__5710__auto__ = (function (){var statearr_20855 = f__5709__auto__.call(null);(statearr_20855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___20856);
return statearr_20855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___20856,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___21015 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___21015,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___21015,out){
return (function (state_20985){var state_val_20986 = (state_20985[(1)]);if((state_val_20986 === (7)))
{var inst_20981 = (state_20985[(2)]);var state_20985__$1 = state_20985;var statearr_20987_21016 = state_20985__$1;(statearr_20987_21016[(2)] = inst_20981);
(statearr_20987_21016[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (1)))
{var inst_20944 = [];var inst_20945 = inst_20944;var inst_20946 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_20985__$1 = (function (){var statearr_20988 = state_20985;(statearr_20988[(7)] = inst_20945);
(statearr_20988[(8)] = inst_20946);
return statearr_20988;
})();var statearr_20989_21017 = state_20985__$1;(statearr_20989_21017[(2)] = null);
(statearr_20989_21017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (4)))
{var inst_20949 = (state_20985[(9)]);var inst_20949__$1 = (state_20985[(2)]);var inst_20950 = (inst_20949__$1 == null);var inst_20951 = cljs.core.not.call(null,inst_20950);var state_20985__$1 = (function (){var statearr_20990 = state_20985;(statearr_20990[(9)] = inst_20949__$1);
return statearr_20990;
})();if(inst_20951)
{var statearr_20991_21018 = state_20985__$1;(statearr_20991_21018[(1)] = (5));
} else
{var statearr_20992_21019 = state_20985__$1;(statearr_20992_21019[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (15)))
{var inst_20975 = (state_20985[(2)]);var state_20985__$1 = state_20985;var statearr_20993_21020 = state_20985__$1;(statearr_20993_21020[(2)] = inst_20975);
(statearr_20993_21020[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (13)))
{var state_20985__$1 = state_20985;var statearr_20994_21021 = state_20985__$1;(statearr_20994_21021[(2)] = null);
(statearr_20994_21021[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (6)))
{var inst_20945 = (state_20985[(7)]);var inst_20970 = inst_20945.length;var inst_20971 = (inst_20970 > (0));var state_20985__$1 = state_20985;if(cljs.core.truth_(inst_20971))
{var statearr_20995_21022 = state_20985__$1;(statearr_20995_21022[(1)] = (12));
} else
{var statearr_20996_21023 = state_20985__$1;(statearr_20996_21023[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (3)))
{var inst_20983 = (state_20985[(2)]);var state_20985__$1 = state_20985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_20985__$1,inst_20983);
} else
{if((state_val_20986 === (12)))
{var inst_20945 = (state_20985[(7)]);var inst_20973 = cljs.core.vec.call(null,inst_20945);var state_20985__$1 = state_20985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20985__$1,(15),out,inst_20973);
} else
{if((state_val_20986 === (2)))
{var state_20985__$1 = state_20985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_20985__$1,(4),ch);
} else
{if((state_val_20986 === (11)))
{var inst_20949 = (state_20985[(9)]);var inst_20953 = (state_20985[(10)]);var inst_20963 = (state_20985[(2)]);var inst_20964 = [];var inst_20965 = inst_20964.push(inst_20949);var inst_20945 = inst_20964;var inst_20946 = inst_20953;var state_20985__$1 = (function (){var statearr_20997 = state_20985;(statearr_20997[(7)] = inst_20945);
(statearr_20997[(8)] = inst_20946);
(statearr_20997[(11)] = inst_20965);
(statearr_20997[(12)] = inst_20963);
return statearr_20997;
})();var statearr_20998_21024 = state_20985__$1;(statearr_20998_21024[(2)] = null);
(statearr_20998_21024[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (9)))
{var inst_20945 = (state_20985[(7)]);var inst_20961 = cljs.core.vec.call(null,inst_20945);var state_20985__$1 = state_20985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_20985__$1,(11),out,inst_20961);
} else
{if((state_val_20986 === (5)))
{var inst_20946 = (state_20985[(8)]);var inst_20949 = (state_20985[(9)]);var inst_20953 = (state_20985[(10)]);var inst_20953__$1 = f.call(null,inst_20949);var inst_20954 = cljs.core._EQ_.call(null,inst_20953__$1,inst_20946);var inst_20955 = cljs.core.keyword_identical_QMARK_.call(null,inst_20946,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_20956 = (inst_20954) || (inst_20955);var state_20985__$1 = (function (){var statearr_20999 = state_20985;(statearr_20999[(10)] = inst_20953__$1);
return statearr_20999;
})();if(cljs.core.truth_(inst_20956))
{var statearr_21000_21025 = state_20985__$1;(statearr_21000_21025[(1)] = (8));
} else
{var statearr_21001_21026 = state_20985__$1;(statearr_21001_21026[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (14)))
{var inst_20978 = (state_20985[(2)]);var inst_20979 = cljs.core.async.close_BANG_.call(null,out);var state_20985__$1 = (function (){var statearr_21003 = state_20985;(statearr_21003[(13)] = inst_20978);
return statearr_21003;
})();var statearr_21004_21027 = state_20985__$1;(statearr_21004_21027[(2)] = inst_20979);
(statearr_21004_21027[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (10)))
{var inst_20968 = (state_20985[(2)]);var state_20985__$1 = state_20985;var statearr_21005_21028 = state_20985__$1;(statearr_21005_21028[(2)] = inst_20968);
(statearr_21005_21028[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_20986 === (8)))
{var inst_20945 = (state_20985[(7)]);var inst_20949 = (state_20985[(9)]);var inst_20953 = (state_20985[(10)]);var inst_20958 = inst_20945.push(inst_20949);var tmp21002 = inst_20945;var inst_20945__$1 = tmp21002;var inst_20946 = inst_20953;var state_20985__$1 = (function (){var statearr_21006 = state_20985;(statearr_21006[(7)] = inst_20945__$1);
(statearr_21006[(8)] = inst_20946);
(statearr_21006[(14)] = inst_20958);
return statearr_21006;
})();var statearr_21007_21029 = state_20985__$1;(statearr_21007_21029[(2)] = null);
(statearr_21007_21029[(1)] = (2));
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
});})(c__5708__auto___21015,out))
;return ((function (switch__5693__auto__,c__5708__auto___21015,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_21011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_21011[(0)] = state_machine__5694__auto__);
(statearr_21011[(1)] = (1));
return statearr_21011;
});
var state_machine__5694__auto____1 = (function (state_20985){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_20985);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e21012){if((e21012 instanceof Object))
{var ex__5697__auto__ = e21012;var statearr_21013_21030 = state_20985;(statearr_21013_21030[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_20985);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e21012;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__21031 = state_20985;
state_20985 = G__21031;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_20985){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_20985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___21015,out))
})();var state__5710__auto__ = (function (){var statearr_21014 = f__5709__auto__.call(null);(statearr_21014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___21015);
return statearr_21014;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___21015,out))
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
