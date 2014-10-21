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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t60677 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t60677 = (function (f,fn_handler,meta60678){
this.f = f;
this.fn_handler = fn_handler;
this.meta60678 = meta60678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t60677.cljs$lang$type = true;
cljs.core.async.t60677.cljs$lang$ctorStr = "cljs.core.async/t60677";
cljs.core.async.t60677.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t60677");
});
cljs.core.async.t60677.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t60677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t60677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t60677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60679){var self__ = this;
var _60679__$1 = this;return self__.meta60678;
});
cljs.core.async.t60677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60679,meta60678__$1){var self__ = this;
var _60679__$1 = this;return (new cljs.core.async.t60677(self__.f,self__.fn_handler,meta60678__$1));
});
cljs.core.async.__GT_t60677 = (function __GT_t60677(f__$1,fn_handler__$1,meta60678){return (new cljs.core.async.t60677(f__$1,fn_handler__$1,meta60678));
});
}
return (new cljs.core.async.t60677(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__60681 = buff;if(G__60681)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__60681.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__60681.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__60681);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__60681);
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
{var val_60682 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_60682);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_60682,ret){
return (function (){return fn1.call(null,val_60682);
});})(val_60682,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___60683 = n;var x_60684 = (0);while(true){
if((x_60684 < n__4414__auto___60683))
{(a[x_60684] = (0));
{
var G__60685 = (x_60684 + (1));
x_60684 = G__60685;
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
var G__60686 = (i + (1));
i = G__60686;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t60690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t60690 = (function (flag,alt_flag,meta60691){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta60691 = meta60691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t60690.cljs$lang$type = true;
cljs.core.async.t60690.cljs$lang$ctorStr = "cljs.core.async/t60690";
cljs.core.async.t60690.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t60690");
});})(flag))
;
cljs.core.async.t60690.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t60690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t60690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t60690.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_60692){var self__ = this;
var _60692__$1 = this;return self__.meta60691;
});})(flag))
;
cljs.core.async.t60690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_60692,meta60691__$1){var self__ = this;
var _60692__$1 = this;return (new cljs.core.async.t60690(self__.flag,self__.alt_flag,meta60691__$1));
});})(flag))
;
cljs.core.async.__GT_t60690 = ((function (flag){
return (function __GT_t60690(flag__$1,alt_flag__$1,meta60691){return (new cljs.core.async.t60690(flag__$1,alt_flag__$1,meta60691));
});})(flag))
;
}
return (new cljs.core.async.t60690(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t60696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t60696 = (function (cb,flag,alt_handler,meta60697){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta60697 = meta60697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t60696.cljs$lang$type = true;
cljs.core.async.t60696.cljs$lang$ctorStr = "cljs.core.async/t60696";
cljs.core.async.t60696.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t60696");
});
cljs.core.async.t60696.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t60696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t60696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t60696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60698){var self__ = this;
var _60698__$1 = this;return self__.meta60697;
});
cljs.core.async.t60696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60698,meta60697__$1){var self__ = this;
var _60698__$1 = this;return (new cljs.core.async.t60696(self__.cb,self__.flag,self__.alt_handler,meta60697__$1));
});
cljs.core.async.__GT_t60696 = (function __GT_t60696(cb__$1,flag__$1,alt_handler__$1,meta60697){return (new cljs.core.async.t60696(cb__$1,flag__$1,alt_handler__$1,meta60697));
});
}
return (new cljs.core.async.t60696(cb,flag,alt_handler,null));
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
return (function (p1__60699_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__60699_SHARP_,port], null));
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
var G__60700 = (i + (1));
i = G__60700;
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
var alts_BANG___delegate = function (ports,p__60701){var map__60703 = p__60701;var map__60703__$1 = ((cljs.core.seq_QMARK_.call(null,map__60703))?cljs.core.apply.call(null,cljs.core.hash_map,map__60703):map__60703);var opts = map__60703__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__60701 = null;if (arguments.length > 1) {
  p__60701 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__60701);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__60704){
var ports = cljs.core.first(arglist__60704);
var p__60701 = cljs.core.rest(arglist__60704);
return alts_BANG___delegate(ports,p__60701);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t60712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t60712 = (function (ch,f,map_LT_,meta60713){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta60713 = meta60713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t60712.cljs$lang$type = true;
cljs.core.async.t60712.cljs$lang$ctorStr = "cljs.core.async/t60712";
cljs.core.async.t60712.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t60712");
});
cljs.core.async.t60712.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t60712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t60712.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t60712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t60715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t60715 = (function (fn1,_,meta60713,ch,f,map_LT_,meta60716){
this.fn1 = fn1;
this._ = _;
this.meta60713 = meta60713;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta60716 = meta60716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t60715.cljs$lang$type = true;
cljs.core.async.t60715.cljs$lang$ctorStr = "cljs.core.async/t60715";
cljs.core.async.t60715.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t60715");
});})(___$1))
;
cljs.core.async.t60715.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t60715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t60715.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t60715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__60705_SHARP_){return f1.call(null,(((p1__60705_SHARP_ == null))?null:self__.f.call(null,p1__60705_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t60715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_60717){var self__ = this;
var _60717__$1 = this;return self__.meta60716;
});})(___$1))
;
cljs.core.async.t60715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_60717,meta60716__$1){var self__ = this;
var _60717__$1 = this;return (new cljs.core.async.t60715(self__.fn1,self__._,self__.meta60713,self__.ch,self__.f,self__.map_LT_,meta60716__$1));
});})(___$1))
;
cljs.core.async.__GT_t60715 = ((function (___$1){
return (function __GT_t60715(fn1__$1,___$2,meta60713__$1,ch__$2,f__$2,map_LT___$2,meta60716){return (new cljs.core.async.t60715(fn1__$1,___$2,meta60713__$1,ch__$2,f__$2,map_LT___$2,meta60716));
});})(___$1))
;
}
return (new cljs.core.async.t60715(fn1,___$1,self__.meta60713,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t60712.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t60712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t60712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60714){var self__ = this;
var _60714__$1 = this;return self__.meta60713;
});
cljs.core.async.t60712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60714,meta60713__$1){var self__ = this;
var _60714__$1 = this;return (new cljs.core.async.t60712(self__.ch,self__.f,self__.map_LT_,meta60713__$1));
});
cljs.core.async.__GT_t60712 = (function __GT_t60712(ch__$1,f__$1,map_LT___$1,meta60713){return (new cljs.core.async.t60712(ch__$1,f__$1,map_LT___$1,meta60713));
});
}
return (new cljs.core.async.t60712(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t60721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t60721 = (function (ch,f,map_GT_,meta60722){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta60722 = meta60722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t60721.cljs$lang$type = true;
cljs.core.async.t60721.cljs$lang$ctorStr = "cljs.core.async/t60721";
cljs.core.async.t60721.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t60721");
});
cljs.core.async.t60721.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t60721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t60721.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t60721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t60721.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t60721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t60721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60723){var self__ = this;
var _60723__$1 = this;return self__.meta60722;
});
cljs.core.async.t60721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60723,meta60722__$1){var self__ = this;
var _60723__$1 = this;return (new cljs.core.async.t60721(self__.ch,self__.f,self__.map_GT_,meta60722__$1));
});
cljs.core.async.__GT_t60721 = (function __GT_t60721(ch__$1,f__$1,map_GT___$1,meta60722){return (new cljs.core.async.t60721(ch__$1,f__$1,map_GT___$1,meta60722));
});
}
return (new cljs.core.async.t60721(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t60727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t60727 = (function (ch,p,filter_GT_,meta60728){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta60728 = meta60728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t60727.cljs$lang$type = true;
cljs.core.async.t60727.cljs$lang$ctorStr = "cljs.core.async/t60727";
cljs.core.async.t60727.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t60727");
});
cljs.core.async.t60727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t60727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t60727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t60727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t60727.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t60727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t60727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_60729){var self__ = this;
var _60729__$1 = this;return self__.meta60728;
});
cljs.core.async.t60727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_60729,meta60728__$1){var self__ = this;
var _60729__$1 = this;return (new cljs.core.async.t60727(self__.ch,self__.p,self__.filter_GT_,meta60728__$1));
});
cljs.core.async.__GT_t60727 = (function __GT_t60727(ch__$1,p__$1,filter_GT___$1,meta60728){return (new cljs.core.async.t60727(ch__$1,p__$1,filter_GT___$1,meta60728));
});
}
return (new cljs.core.async.t60727(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___60812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___60812,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___60812,out){
return (function (state_60791){var state_val_60792 = (state_60791[(1)]);if((state_val_60792 === (7)))
{var inst_60787 = (state_60791[(2)]);var state_60791__$1 = state_60791;var statearr_60793_60813 = state_60791__$1;(statearr_60793_60813[(2)] = inst_60787);
(statearr_60793_60813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60792 === (1)))
{var state_60791__$1 = state_60791;var statearr_60794_60814 = state_60791__$1;(statearr_60794_60814[(2)] = null);
(statearr_60794_60814[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60792 === (4)))
{var inst_60773 = (state_60791[(7)]);var inst_60773__$1 = (state_60791[(2)]);var inst_60774 = (inst_60773__$1 == null);var state_60791__$1 = (function (){var statearr_60795 = state_60791;(statearr_60795[(7)] = inst_60773__$1);
return statearr_60795;
})();if(cljs.core.truth_(inst_60774))
{var statearr_60796_60815 = state_60791__$1;(statearr_60796_60815[(1)] = (5));
} else
{var statearr_60797_60816 = state_60791__$1;(statearr_60797_60816[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60792 === (6)))
{var inst_60773 = (state_60791[(7)]);var inst_60778 = p.call(null,inst_60773);var state_60791__$1 = state_60791;if(cljs.core.truth_(inst_60778))
{var statearr_60798_60817 = state_60791__$1;(statearr_60798_60817[(1)] = (8));
} else
{var statearr_60799_60818 = state_60791__$1;(statearr_60799_60818[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60792 === (3)))
{var inst_60789 = (state_60791[(2)]);var state_60791__$1 = state_60791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60791__$1,inst_60789);
} else
{if((state_val_60792 === (2)))
{var state_60791__$1 = state_60791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60791__$1,(4),ch);
} else
{if((state_val_60792 === (11)))
{var inst_60781 = (state_60791[(2)]);var state_60791__$1 = state_60791;var statearr_60800_60819 = state_60791__$1;(statearr_60800_60819[(2)] = inst_60781);
(statearr_60800_60819[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60792 === (9)))
{var state_60791__$1 = state_60791;var statearr_60801_60820 = state_60791__$1;(statearr_60801_60820[(2)] = null);
(statearr_60801_60820[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60792 === (5)))
{var inst_60776 = cljs.core.async.close_BANG_.call(null,out);var state_60791__$1 = state_60791;var statearr_60802_60821 = state_60791__$1;(statearr_60802_60821[(2)] = inst_60776);
(statearr_60802_60821[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60792 === (10)))
{var inst_60784 = (state_60791[(2)]);var state_60791__$1 = (function (){var statearr_60803 = state_60791;(statearr_60803[(8)] = inst_60784);
return statearr_60803;
})();var statearr_60804_60822 = state_60791__$1;(statearr_60804_60822[(2)] = null);
(statearr_60804_60822[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60792 === (8)))
{var inst_60773 = (state_60791[(7)]);var state_60791__$1 = state_60791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60791__$1,(11),out,inst_60773);
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
});})(c__5708__auto___60812,out))
;return ((function (switch__5693__auto__,c__5708__auto___60812,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_60808 = [null,null,null,null,null,null,null,null,null];(statearr_60808[(0)] = state_machine__5694__auto__);
(statearr_60808[(1)] = (1));
return statearr_60808;
});
var state_machine__5694__auto____1 = (function (state_60791){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_60791);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e60809){if((e60809 instanceof Object))
{var ex__5697__auto__ = e60809;var statearr_60810_60823 = state_60791;(statearr_60810_60823[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60791);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e60809;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__60824 = state_60791;
state_60791 = G__60824;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_60791){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_60791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___60812,out))
})();var state__5710__auto__ = (function (){var statearr_60811 = f__5709__auto__.call(null);(statearr_60811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___60812);
return statearr_60811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___60812,out))
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
return (function (state_60976){var state_val_60977 = (state_60976[(1)]);if((state_val_60977 === (7)))
{var inst_60972 = (state_60976[(2)]);var state_60976__$1 = state_60976;var statearr_60978_61015 = state_60976__$1;(statearr_60978_61015[(2)] = inst_60972);
(statearr_60978_61015[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (20)))
{var inst_60947 = (state_60976[(7)]);var inst_60958 = (state_60976[(2)]);var inst_60959 = cljs.core.next.call(null,inst_60947);var inst_60933 = inst_60959;var inst_60934 = null;var inst_60935 = (0);var inst_60936 = (0);var state_60976__$1 = (function (){var statearr_60979 = state_60976;(statearr_60979[(8)] = inst_60935);
(statearr_60979[(9)] = inst_60936);
(statearr_60979[(10)] = inst_60958);
(statearr_60979[(11)] = inst_60934);
(statearr_60979[(12)] = inst_60933);
return statearr_60979;
})();var statearr_60980_61016 = state_60976__$1;(statearr_60980_61016[(2)] = null);
(statearr_60980_61016[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (1)))
{var state_60976__$1 = state_60976;var statearr_60981_61017 = state_60976__$1;(statearr_60981_61017[(2)] = null);
(statearr_60981_61017[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (4)))
{var inst_60922 = (state_60976[(13)]);var inst_60922__$1 = (state_60976[(2)]);var inst_60923 = (inst_60922__$1 == null);var state_60976__$1 = (function (){var statearr_60985 = state_60976;(statearr_60985[(13)] = inst_60922__$1);
return statearr_60985;
})();if(cljs.core.truth_(inst_60923))
{var statearr_60986_61018 = state_60976__$1;(statearr_60986_61018[(1)] = (5));
} else
{var statearr_60987_61019 = state_60976__$1;(statearr_60987_61019[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (15)))
{var state_60976__$1 = state_60976;var statearr_60988_61020 = state_60976__$1;(statearr_60988_61020[(2)] = null);
(statearr_60988_61020[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (13)))
{var inst_60935 = (state_60976[(8)]);var inst_60936 = (state_60976[(9)]);var inst_60934 = (state_60976[(11)]);var inst_60933 = (state_60976[(12)]);var inst_60943 = (state_60976[(2)]);var inst_60944 = (inst_60936 + (1));var tmp60982 = inst_60935;var tmp60983 = inst_60934;var tmp60984 = inst_60933;var inst_60933__$1 = tmp60984;var inst_60934__$1 = tmp60983;var inst_60935__$1 = tmp60982;var inst_60936__$1 = inst_60944;var state_60976__$1 = (function (){var statearr_60989 = state_60976;(statearr_60989[(8)] = inst_60935__$1);
(statearr_60989[(9)] = inst_60936__$1);
(statearr_60989[(14)] = inst_60943);
(statearr_60989[(11)] = inst_60934__$1);
(statearr_60989[(12)] = inst_60933__$1);
return statearr_60989;
})();var statearr_60990_61021 = state_60976__$1;(statearr_60990_61021[(2)] = null);
(statearr_60990_61021[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (6)))
{var inst_60922 = (state_60976[(13)]);var inst_60927 = f.call(null,inst_60922);var inst_60932 = cljs.core.seq.call(null,inst_60927);var inst_60933 = inst_60932;var inst_60934 = null;var inst_60935 = (0);var inst_60936 = (0);var state_60976__$1 = (function (){var statearr_60991 = state_60976;(statearr_60991[(8)] = inst_60935);
(statearr_60991[(9)] = inst_60936);
(statearr_60991[(11)] = inst_60934);
(statearr_60991[(12)] = inst_60933);
return statearr_60991;
})();var statearr_60992_61022 = state_60976__$1;(statearr_60992_61022[(2)] = null);
(statearr_60992_61022[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (17)))
{var inst_60947 = (state_60976[(7)]);var inst_60951 = cljs.core.chunk_first.call(null,inst_60947);var inst_60952 = cljs.core.chunk_rest.call(null,inst_60947);var inst_60953 = cljs.core.count.call(null,inst_60951);var inst_60933 = inst_60952;var inst_60934 = inst_60951;var inst_60935 = inst_60953;var inst_60936 = (0);var state_60976__$1 = (function (){var statearr_60993 = state_60976;(statearr_60993[(8)] = inst_60935);
(statearr_60993[(9)] = inst_60936);
(statearr_60993[(11)] = inst_60934);
(statearr_60993[(12)] = inst_60933);
return statearr_60993;
})();var statearr_60994_61023 = state_60976__$1;(statearr_60994_61023[(2)] = null);
(statearr_60994_61023[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (3)))
{var inst_60974 = (state_60976[(2)]);var state_60976__$1 = state_60976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60976__$1,inst_60974);
} else
{if((state_val_60977 === (12)))
{var inst_60967 = (state_60976[(2)]);var state_60976__$1 = state_60976;var statearr_60995_61024 = state_60976__$1;(statearr_60995_61024[(2)] = inst_60967);
(statearr_60995_61024[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (2)))
{var state_60976__$1 = state_60976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60976__$1,(4),in$);
} else
{if((state_val_60977 === (19)))
{var inst_60962 = (state_60976[(2)]);var state_60976__$1 = state_60976;var statearr_60996_61025 = state_60976__$1;(statearr_60996_61025[(2)] = inst_60962);
(statearr_60996_61025[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (11)))
{var inst_60933 = (state_60976[(12)]);var inst_60947 = (state_60976[(7)]);var inst_60947__$1 = cljs.core.seq.call(null,inst_60933);var state_60976__$1 = (function (){var statearr_60997 = state_60976;(statearr_60997[(7)] = inst_60947__$1);
return statearr_60997;
})();if(inst_60947__$1)
{var statearr_60998_61026 = state_60976__$1;(statearr_60998_61026[(1)] = (14));
} else
{var statearr_60999_61027 = state_60976__$1;(statearr_60999_61027[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (9)))
{var inst_60969 = (state_60976[(2)]);var state_60976__$1 = (function (){var statearr_61000 = state_60976;(statearr_61000[(15)] = inst_60969);
return statearr_61000;
})();var statearr_61001_61028 = state_60976__$1;(statearr_61001_61028[(2)] = null);
(statearr_61001_61028[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (5)))
{var inst_60925 = cljs.core.async.close_BANG_.call(null,out);var state_60976__$1 = state_60976;var statearr_61002_61029 = state_60976__$1;(statearr_61002_61029[(2)] = inst_60925);
(statearr_61002_61029[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (14)))
{var inst_60947 = (state_60976[(7)]);var inst_60949 = cljs.core.chunked_seq_QMARK_.call(null,inst_60947);var state_60976__$1 = state_60976;if(inst_60949)
{var statearr_61003_61030 = state_60976__$1;(statearr_61003_61030[(1)] = (17));
} else
{var statearr_61004_61031 = state_60976__$1;(statearr_61004_61031[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (16)))
{var inst_60965 = (state_60976[(2)]);var state_60976__$1 = state_60976;var statearr_61005_61032 = state_60976__$1;(statearr_61005_61032[(2)] = inst_60965);
(statearr_61005_61032[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_60977 === (10)))
{var inst_60936 = (state_60976[(9)]);var inst_60934 = (state_60976[(11)]);var inst_60941 = cljs.core._nth.call(null,inst_60934,inst_60936);var state_60976__$1 = state_60976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60976__$1,(13),out,inst_60941);
} else
{if((state_val_60977 === (18)))
{var inst_60947 = (state_60976[(7)]);var inst_60956 = cljs.core.first.call(null,inst_60947);var state_60976__$1 = state_60976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_60976__$1,(20),out,inst_60956);
} else
{if((state_val_60977 === (8)))
{var inst_60935 = (state_60976[(8)]);var inst_60936 = (state_60976[(9)]);var inst_60938 = (inst_60936 < inst_60935);var inst_60939 = inst_60938;var state_60976__$1 = state_60976;if(cljs.core.truth_(inst_60939))
{var statearr_61006_61033 = state_60976__$1;(statearr_61006_61033[(1)] = (10));
} else
{var statearr_61007_61034 = state_60976__$1;(statearr_61007_61034[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_61011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_61011[(0)] = state_machine__5694__auto__);
(statearr_61011[(1)] = (1));
return statearr_61011;
});
var state_machine__5694__auto____1 = (function (state_60976){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_60976);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e61012){if((e61012 instanceof Object))
{var ex__5697__auto__ = e61012;var statearr_61013_61035 = state_60976;(statearr_61013_61035[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60976);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e61012;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__61036 = state_60976;
state_60976 = G__61036;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_60976){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_60976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_61014 = f__5709__auto__.call(null);(statearr_61014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_61014;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___61117 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___61117){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___61117){
return (function (state_61096){var state_val_61097 = (state_61096[(1)]);if((state_val_61097 === (7)))
{var inst_61092 = (state_61096[(2)]);var state_61096__$1 = state_61096;var statearr_61098_61118 = state_61096__$1;(statearr_61098_61118[(2)] = inst_61092);
(statearr_61098_61118[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61097 === (1)))
{var state_61096__$1 = state_61096;var statearr_61099_61119 = state_61096__$1;(statearr_61099_61119[(2)] = null);
(statearr_61099_61119[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61097 === (4)))
{var inst_61079 = (state_61096[(7)]);var inst_61079__$1 = (state_61096[(2)]);var inst_61080 = (inst_61079__$1 == null);var state_61096__$1 = (function (){var statearr_61100 = state_61096;(statearr_61100[(7)] = inst_61079__$1);
return statearr_61100;
})();if(cljs.core.truth_(inst_61080))
{var statearr_61101_61120 = state_61096__$1;(statearr_61101_61120[(1)] = (5));
} else
{var statearr_61102_61121 = state_61096__$1;(statearr_61102_61121[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61097 === (6)))
{var inst_61079 = (state_61096[(7)]);var state_61096__$1 = state_61096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61096__$1,(11),to,inst_61079);
} else
{if((state_val_61097 === (3)))
{var inst_61094 = (state_61096[(2)]);var state_61096__$1 = state_61096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61096__$1,inst_61094);
} else
{if((state_val_61097 === (2)))
{var state_61096__$1 = state_61096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61096__$1,(4),from);
} else
{if((state_val_61097 === (11)))
{var inst_61089 = (state_61096[(2)]);var state_61096__$1 = (function (){var statearr_61103 = state_61096;(statearr_61103[(8)] = inst_61089);
return statearr_61103;
})();var statearr_61104_61122 = state_61096__$1;(statearr_61104_61122[(2)] = null);
(statearr_61104_61122[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61097 === (9)))
{var state_61096__$1 = state_61096;var statearr_61105_61123 = state_61096__$1;(statearr_61105_61123[(2)] = null);
(statearr_61105_61123[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61097 === (5)))
{var state_61096__$1 = state_61096;if(cljs.core.truth_(close_QMARK_))
{var statearr_61106_61124 = state_61096__$1;(statearr_61106_61124[(1)] = (8));
} else
{var statearr_61107_61125 = state_61096__$1;(statearr_61107_61125[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61097 === (10)))
{var inst_61086 = (state_61096[(2)]);var state_61096__$1 = state_61096;var statearr_61108_61126 = state_61096__$1;(statearr_61108_61126[(2)] = inst_61086);
(statearr_61108_61126[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61097 === (8)))
{var inst_61083 = cljs.core.async.close_BANG_.call(null,to);var state_61096__$1 = state_61096;var statearr_61109_61127 = state_61096__$1;(statearr_61109_61127[(2)] = inst_61083);
(statearr_61109_61127[(1)] = (10));
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
});})(c__5708__auto___61117))
;return ((function (switch__5693__auto__,c__5708__auto___61117){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_61113 = [null,null,null,null,null,null,null,null,null];(statearr_61113[(0)] = state_machine__5694__auto__);
(statearr_61113[(1)] = (1));
return statearr_61113;
});
var state_machine__5694__auto____1 = (function (state_61096){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_61096);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e61114){if((e61114 instanceof Object))
{var ex__5697__auto__ = e61114;var statearr_61115_61128 = state_61096;(statearr_61115_61128[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61096);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e61114;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__61129 = state_61096;
state_61096 = G__61129;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_61096){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_61096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___61117))
})();var state__5710__auto__ = (function (){var statearr_61116 = f__5709__auto__.call(null);(statearr_61116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___61117);
return statearr_61116;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___61117))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___61216 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___61216,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___61216,tc,fc){
return (function (state_61194){var state_val_61195 = (state_61194[(1)]);if((state_val_61195 === (7)))
{var inst_61190 = (state_61194[(2)]);var state_61194__$1 = state_61194;var statearr_61196_61217 = state_61194__$1;(statearr_61196_61217[(2)] = inst_61190);
(statearr_61196_61217[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61195 === (1)))
{var state_61194__$1 = state_61194;var statearr_61197_61218 = state_61194__$1;(statearr_61197_61218[(2)] = null);
(statearr_61197_61218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61195 === (4)))
{var inst_61175 = (state_61194[(7)]);var inst_61175__$1 = (state_61194[(2)]);var inst_61176 = (inst_61175__$1 == null);var state_61194__$1 = (function (){var statearr_61198 = state_61194;(statearr_61198[(7)] = inst_61175__$1);
return statearr_61198;
})();if(cljs.core.truth_(inst_61176))
{var statearr_61199_61219 = state_61194__$1;(statearr_61199_61219[(1)] = (5));
} else
{var statearr_61200_61220 = state_61194__$1;(statearr_61200_61220[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61195 === (6)))
{var inst_61175 = (state_61194[(7)]);var inst_61181 = p.call(null,inst_61175);var state_61194__$1 = state_61194;if(cljs.core.truth_(inst_61181))
{var statearr_61201_61221 = state_61194__$1;(statearr_61201_61221[(1)] = (9));
} else
{var statearr_61202_61222 = state_61194__$1;(statearr_61202_61222[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61195 === (3)))
{var inst_61192 = (state_61194[(2)]);var state_61194__$1 = state_61194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61194__$1,inst_61192);
} else
{if((state_val_61195 === (2)))
{var state_61194__$1 = state_61194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61194__$1,(4),ch);
} else
{if((state_val_61195 === (11)))
{var inst_61175 = (state_61194[(7)]);var inst_61185 = (state_61194[(2)]);var state_61194__$1 = state_61194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61194__$1,(8),inst_61185,inst_61175);
} else
{if((state_val_61195 === (9)))
{var state_61194__$1 = state_61194;var statearr_61203_61223 = state_61194__$1;(statearr_61203_61223[(2)] = tc);
(statearr_61203_61223[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61195 === (5)))
{var inst_61178 = cljs.core.async.close_BANG_.call(null,tc);var inst_61179 = cljs.core.async.close_BANG_.call(null,fc);var state_61194__$1 = (function (){var statearr_61204 = state_61194;(statearr_61204[(8)] = inst_61178);
return statearr_61204;
})();var statearr_61205_61224 = state_61194__$1;(statearr_61205_61224[(2)] = inst_61179);
(statearr_61205_61224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61195 === (10)))
{var state_61194__$1 = state_61194;var statearr_61206_61225 = state_61194__$1;(statearr_61206_61225[(2)] = fc);
(statearr_61206_61225[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61195 === (8)))
{var inst_61187 = (state_61194[(2)]);var state_61194__$1 = (function (){var statearr_61207 = state_61194;(statearr_61207[(9)] = inst_61187);
return statearr_61207;
})();var statearr_61208_61226 = state_61194__$1;(statearr_61208_61226[(2)] = null);
(statearr_61208_61226[(1)] = (2));
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
});})(c__5708__auto___61216,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___61216,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_61212 = [null,null,null,null,null,null,null,null,null,null];(statearr_61212[(0)] = state_machine__5694__auto__);
(statearr_61212[(1)] = (1));
return statearr_61212;
});
var state_machine__5694__auto____1 = (function (state_61194){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_61194);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e61213){if((e61213 instanceof Object))
{var ex__5697__auto__ = e61213;var statearr_61214_61227 = state_61194;(statearr_61214_61227[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61194);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e61213;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__61228 = state_61194;
state_61194 = G__61228;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_61194){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_61194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___61216,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_61215 = f__5709__auto__.call(null);(statearr_61215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___61216);
return statearr_61215;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___61216,tc,fc))
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
return (function (state_61275){var state_val_61276 = (state_61275[(1)]);if((state_val_61276 === (7)))
{var inst_61271 = (state_61275[(2)]);var state_61275__$1 = state_61275;var statearr_61277_61293 = state_61275__$1;(statearr_61277_61293[(2)] = inst_61271);
(statearr_61277_61293[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61276 === (6)))
{var inst_61261 = (state_61275[(7)]);var inst_61264 = (state_61275[(8)]);var inst_61268 = f.call(null,inst_61261,inst_61264);var inst_61261__$1 = inst_61268;var state_61275__$1 = (function (){var statearr_61278 = state_61275;(statearr_61278[(7)] = inst_61261__$1);
return statearr_61278;
})();var statearr_61279_61294 = state_61275__$1;(statearr_61279_61294[(2)] = null);
(statearr_61279_61294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61276 === (5)))
{var inst_61261 = (state_61275[(7)]);var state_61275__$1 = state_61275;var statearr_61280_61295 = state_61275__$1;(statearr_61280_61295[(2)] = inst_61261);
(statearr_61280_61295[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61276 === (4)))
{var inst_61264 = (state_61275[(8)]);var inst_61264__$1 = (state_61275[(2)]);var inst_61265 = (inst_61264__$1 == null);var state_61275__$1 = (function (){var statearr_61281 = state_61275;(statearr_61281[(8)] = inst_61264__$1);
return statearr_61281;
})();if(cljs.core.truth_(inst_61265))
{var statearr_61282_61296 = state_61275__$1;(statearr_61282_61296[(1)] = (5));
} else
{var statearr_61283_61297 = state_61275__$1;(statearr_61283_61297[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61276 === (3)))
{var inst_61273 = (state_61275[(2)]);var state_61275__$1 = state_61275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61275__$1,inst_61273);
} else
{if((state_val_61276 === (2)))
{var state_61275__$1 = state_61275;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61275__$1,(4),ch);
} else
{if((state_val_61276 === (1)))
{var inst_61261 = init;var state_61275__$1 = (function (){var statearr_61284 = state_61275;(statearr_61284[(7)] = inst_61261);
return statearr_61284;
})();var statearr_61285_61298 = state_61275__$1;(statearr_61285_61298[(2)] = null);
(statearr_61285_61298[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_61289 = [null,null,null,null,null,null,null,null,null];(statearr_61289[(0)] = state_machine__5694__auto__);
(statearr_61289[(1)] = (1));
return statearr_61289;
});
var state_machine__5694__auto____1 = (function (state_61275){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_61275);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e61290){if((e61290 instanceof Object))
{var ex__5697__auto__ = e61290;var statearr_61291_61299 = state_61275;(statearr_61291_61299[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61275);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e61290;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__61300 = state_61275;
state_61275 = G__61300;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_61275){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_61275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_61292 = f__5709__auto__.call(null);(statearr_61292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_61292;
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
return (function (state_61362){var state_val_61363 = (state_61362[(1)]);if((state_val_61363 === (7)))
{var inst_61343 = (state_61362[(7)]);var inst_61348 = (state_61362[(2)]);var inst_61349 = cljs.core.next.call(null,inst_61343);var inst_61343__$1 = inst_61349;var state_61362__$1 = (function (){var statearr_61364 = state_61362;(statearr_61364[(7)] = inst_61343__$1);
(statearr_61364[(8)] = inst_61348);
return statearr_61364;
})();var statearr_61365_61383 = state_61362__$1;(statearr_61365_61383[(2)] = null);
(statearr_61365_61383[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61363 === (1)))
{var inst_61342 = cljs.core.seq.call(null,coll);var inst_61343 = inst_61342;var state_61362__$1 = (function (){var statearr_61366 = state_61362;(statearr_61366[(7)] = inst_61343);
return statearr_61366;
})();var statearr_61367_61384 = state_61362__$1;(statearr_61367_61384[(2)] = null);
(statearr_61367_61384[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61363 === (4)))
{var inst_61343 = (state_61362[(7)]);var inst_61346 = cljs.core.first.call(null,inst_61343);var state_61362__$1 = state_61362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_61362__$1,(7),ch,inst_61346);
} else
{if((state_val_61363 === (6)))
{var inst_61358 = (state_61362[(2)]);var state_61362__$1 = state_61362;var statearr_61368_61385 = state_61362__$1;(statearr_61368_61385[(2)] = inst_61358);
(statearr_61368_61385[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61363 === (3)))
{var inst_61360 = (state_61362[(2)]);var state_61362__$1 = state_61362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61362__$1,inst_61360);
} else
{if((state_val_61363 === (2)))
{var inst_61343 = (state_61362[(7)]);var state_61362__$1 = state_61362;if(cljs.core.truth_(inst_61343))
{var statearr_61369_61386 = state_61362__$1;(statearr_61369_61386[(1)] = (4));
} else
{var statearr_61370_61387 = state_61362__$1;(statearr_61370_61387[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61363 === (9)))
{var state_61362__$1 = state_61362;var statearr_61371_61388 = state_61362__$1;(statearr_61371_61388[(2)] = null);
(statearr_61371_61388[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61363 === (5)))
{var state_61362__$1 = state_61362;if(cljs.core.truth_(close_QMARK_))
{var statearr_61372_61389 = state_61362__$1;(statearr_61372_61389[(1)] = (8));
} else
{var statearr_61373_61390 = state_61362__$1;(statearr_61373_61390[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61363 === (10)))
{var inst_61356 = (state_61362[(2)]);var state_61362__$1 = state_61362;var statearr_61374_61391 = state_61362__$1;(statearr_61374_61391[(2)] = inst_61356);
(statearr_61374_61391[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61363 === (8)))
{var inst_61353 = cljs.core.async.close_BANG_.call(null,ch);var state_61362__$1 = state_61362;var statearr_61375_61392 = state_61362__$1;(statearr_61375_61392[(2)] = inst_61353);
(statearr_61375_61392[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_61379 = [null,null,null,null,null,null,null,null,null];(statearr_61379[(0)] = state_machine__5694__auto__);
(statearr_61379[(1)] = (1));
return statearr_61379;
});
var state_machine__5694__auto____1 = (function (state_61362){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_61362);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e61380){if((e61380 instanceof Object))
{var ex__5697__auto__ = e61380;var statearr_61381_61393 = state_61362;(statearr_61381_61393[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e61380;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__61394 = state_61362;
state_61362 = G__61394;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_61362){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_61362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_61382 = f__5709__auto__.call(null);(statearr_61382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_61382;
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
cljs.core.async.Mux = (function (){var obj61396 = {};return obj61396;
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
cljs.core.async.Mult = (function (){var obj61398 = {};return obj61398;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t61622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t61622 = (function (cs,ch,mult,meta61623){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta61623 = meta61623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t61622.cljs$lang$type = true;
cljs.core.async.t61622.cljs$lang$ctorStr = "cljs.core.async/t61622";
cljs.core.async.t61622.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t61622");
});})(cs))
;
cljs.core.async.t61622.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t61622.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t61622.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t61622.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t61622.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t61622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t61622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_61624){var self__ = this;
var _61624__$1 = this;return self__.meta61623;
});})(cs))
;
cljs.core.async.t61622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_61624,meta61623__$1){var self__ = this;
var _61624__$1 = this;return (new cljs.core.async.t61622(self__.cs,self__.ch,self__.mult,meta61623__$1));
});})(cs))
;
cljs.core.async.__GT_t61622 = ((function (cs){
return (function __GT_t61622(cs__$1,ch__$1,mult__$1,meta61623){return (new cljs.core.async.t61622(cs__$1,ch__$1,mult__$1,meta61623));
});})(cs))
;
}
return (new cljs.core.async.t61622(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___61845 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___61845,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___61845,cs,m,dchan,dctr,done){
return (function (state_61759){var state_val_61760 = (state_61759[(1)]);if((state_val_61760 === (7)))
{var inst_61755 = (state_61759[(2)]);var state_61759__$1 = state_61759;var statearr_61761_61846 = state_61759__$1;(statearr_61761_61846[(2)] = inst_61755);
(statearr_61761_61846[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (20)))
{var inst_61656 = (state_61759[(7)]);var inst_61666 = cljs.core.first.call(null,inst_61656);var inst_61667 = cljs.core.nth.call(null,inst_61666,(0),null);var inst_61668 = cljs.core.nth.call(null,inst_61666,(1),null);var state_61759__$1 = (function (){var statearr_61762 = state_61759;(statearr_61762[(8)] = inst_61667);
return statearr_61762;
})();if(cljs.core.truth_(inst_61668))
{var statearr_61763_61847 = state_61759__$1;(statearr_61763_61847[(1)] = (22));
} else
{var statearr_61764_61848 = state_61759__$1;(statearr_61764_61848[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (27)))
{var inst_61696 = (state_61759[(9)]);var inst_61698 = (state_61759[(10)]);var inst_61703 = cljs.core._nth.call(null,inst_61696,inst_61698);var state_61759__$1 = (function (){var statearr_61765 = state_61759;(statearr_61765[(11)] = inst_61703);
return statearr_61765;
})();var statearr_61766_61849 = state_61759__$1;(statearr_61766_61849[(2)] = null);
(statearr_61766_61849[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (1)))
{var state_61759__$1 = state_61759;var statearr_61767_61850 = state_61759__$1;(statearr_61767_61850[(2)] = null);
(statearr_61767_61850[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (24)))
{var inst_61656 = (state_61759[(7)]);var inst_61673 = (state_61759[(2)]);var inst_61674 = cljs.core.next.call(null,inst_61656);var inst_61636 = inst_61674;var inst_61637 = null;var inst_61638 = (0);var inst_61639 = (0);var state_61759__$1 = (function (){var statearr_61768 = state_61759;(statearr_61768[(12)] = inst_61637);
(statearr_61768[(13)] = inst_61638);
(statearr_61768[(14)] = inst_61639);
(statearr_61768[(15)] = inst_61636);
(statearr_61768[(16)] = inst_61673);
return statearr_61768;
})();var statearr_61769_61851 = state_61759__$1;(statearr_61769_61851[(2)] = null);
(statearr_61769_61851[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (39)))
{var inst_61716 = (state_61759[(17)]);var inst_61734 = (state_61759[(2)]);var inst_61735 = cljs.core.next.call(null,inst_61716);var inst_61695 = inst_61735;var inst_61696 = null;var inst_61697 = (0);var inst_61698 = (0);var state_61759__$1 = (function (){var statearr_61773 = state_61759;(statearr_61773[(18)] = inst_61734);
(statearr_61773[(19)] = inst_61697);
(statearr_61773[(9)] = inst_61696);
(statearr_61773[(10)] = inst_61698);
(statearr_61773[(20)] = inst_61695);
return statearr_61773;
})();var statearr_61774_61852 = state_61759__$1;(statearr_61774_61852[(2)] = null);
(statearr_61774_61852[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (4)))
{var inst_61627 = (state_61759[(21)]);var inst_61627__$1 = (state_61759[(2)]);var inst_61628 = (inst_61627__$1 == null);var state_61759__$1 = (function (){var statearr_61775 = state_61759;(statearr_61775[(21)] = inst_61627__$1);
return statearr_61775;
})();if(cljs.core.truth_(inst_61628))
{var statearr_61776_61853 = state_61759__$1;(statearr_61776_61853[(1)] = (5));
} else
{var statearr_61777_61854 = state_61759__$1;(statearr_61777_61854[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (15)))
{var inst_61637 = (state_61759[(12)]);var inst_61638 = (state_61759[(13)]);var inst_61639 = (state_61759[(14)]);var inst_61636 = (state_61759[(15)]);var inst_61652 = (state_61759[(2)]);var inst_61653 = (inst_61639 + (1));var tmp61770 = inst_61637;var tmp61771 = inst_61638;var tmp61772 = inst_61636;var inst_61636__$1 = tmp61772;var inst_61637__$1 = tmp61770;var inst_61638__$1 = tmp61771;var inst_61639__$1 = inst_61653;var state_61759__$1 = (function (){var statearr_61778 = state_61759;(statearr_61778[(12)] = inst_61637__$1);
(statearr_61778[(13)] = inst_61638__$1);
(statearr_61778[(14)] = inst_61639__$1);
(statearr_61778[(22)] = inst_61652);
(statearr_61778[(15)] = inst_61636__$1);
return statearr_61778;
})();var statearr_61779_61855 = state_61759__$1;(statearr_61779_61855[(2)] = null);
(statearr_61779_61855[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (21)))
{var inst_61677 = (state_61759[(2)]);var state_61759__$1 = state_61759;var statearr_61780_61856 = state_61759__$1;(statearr_61780_61856[(2)] = inst_61677);
(statearr_61780_61856[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (31)))
{var inst_61703 = (state_61759[(11)]);var inst_61704 = (state_61759[(2)]);var inst_61705 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_61706 = cljs.core.async.untap_STAR_.call(null,m,inst_61703);var state_61759__$1 = (function (){var statearr_61781 = state_61759;(statearr_61781[(23)] = inst_61704);
(statearr_61781[(24)] = inst_61705);
return statearr_61781;
})();var statearr_61782_61857 = state_61759__$1;(statearr_61782_61857[(2)] = inst_61706);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61759__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (32)))
{var inst_61703 = (state_61759[(11)]);var inst_61627 = (state_61759[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61759,(31),Object,null,(30));var inst_61710 = cljs.core.async.put_BANG_.call(null,inst_61703,inst_61627,done);var state_61759__$1 = state_61759;var statearr_61783_61858 = state_61759__$1;(statearr_61783_61858[(2)] = inst_61710);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61759__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (40)))
{var inst_61725 = (state_61759[(25)]);var inst_61726 = (state_61759[(2)]);var inst_61727 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_61728 = cljs.core.async.untap_STAR_.call(null,m,inst_61725);var state_61759__$1 = (function (){var statearr_61784 = state_61759;(statearr_61784[(26)] = inst_61726);
(statearr_61784[(27)] = inst_61727);
return statearr_61784;
})();var statearr_61785_61859 = state_61759__$1;(statearr_61785_61859[(2)] = inst_61728);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61759__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (33)))
{var inst_61716 = (state_61759[(17)]);var inst_61718 = cljs.core.chunked_seq_QMARK_.call(null,inst_61716);var state_61759__$1 = state_61759;if(inst_61718)
{var statearr_61786_61860 = state_61759__$1;(statearr_61786_61860[(1)] = (36));
} else
{var statearr_61787_61861 = state_61759__$1;(statearr_61787_61861[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (13)))
{var inst_61646 = (state_61759[(28)]);var inst_61649 = cljs.core.async.close_BANG_.call(null,inst_61646);var state_61759__$1 = state_61759;var statearr_61788_61862 = state_61759__$1;(statearr_61788_61862[(2)] = inst_61649);
(statearr_61788_61862[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (22)))
{var inst_61667 = (state_61759[(8)]);var inst_61670 = cljs.core.async.close_BANG_.call(null,inst_61667);var state_61759__$1 = state_61759;var statearr_61789_61863 = state_61759__$1;(statearr_61789_61863[(2)] = inst_61670);
(statearr_61789_61863[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (36)))
{var inst_61716 = (state_61759[(17)]);var inst_61720 = cljs.core.chunk_first.call(null,inst_61716);var inst_61721 = cljs.core.chunk_rest.call(null,inst_61716);var inst_61722 = cljs.core.count.call(null,inst_61720);var inst_61695 = inst_61721;var inst_61696 = inst_61720;var inst_61697 = inst_61722;var inst_61698 = (0);var state_61759__$1 = (function (){var statearr_61790 = state_61759;(statearr_61790[(19)] = inst_61697);
(statearr_61790[(9)] = inst_61696);
(statearr_61790[(10)] = inst_61698);
(statearr_61790[(20)] = inst_61695);
return statearr_61790;
})();var statearr_61791_61864 = state_61759__$1;(statearr_61791_61864[(2)] = null);
(statearr_61791_61864[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (41)))
{var inst_61725 = (state_61759[(25)]);var inst_61627 = (state_61759[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_61759,(40),Object,null,(39));var inst_61732 = cljs.core.async.put_BANG_.call(null,inst_61725,inst_61627,done);var state_61759__$1 = state_61759;var statearr_61792_61865 = state_61759__$1;(statearr_61792_61865[(2)] = inst_61732);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61759__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (43)))
{var state_61759__$1 = state_61759;var statearr_61793_61866 = state_61759__$1;(statearr_61793_61866[(2)] = null);
(statearr_61793_61866[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (29)))
{var inst_61743 = (state_61759[(2)]);var state_61759__$1 = state_61759;var statearr_61794_61867 = state_61759__$1;(statearr_61794_61867[(2)] = inst_61743);
(statearr_61794_61867[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (44)))
{var inst_61752 = (state_61759[(2)]);var state_61759__$1 = (function (){var statearr_61795 = state_61759;(statearr_61795[(29)] = inst_61752);
return statearr_61795;
})();var statearr_61796_61868 = state_61759__$1;(statearr_61796_61868[(2)] = null);
(statearr_61796_61868[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (6)))
{var inst_61687 = (state_61759[(30)]);var inst_61686 = cljs.core.deref.call(null,cs);var inst_61687__$1 = cljs.core.keys.call(null,inst_61686);var inst_61688 = cljs.core.count.call(null,inst_61687__$1);var inst_61689 = cljs.core.reset_BANG_.call(null,dctr,inst_61688);var inst_61694 = cljs.core.seq.call(null,inst_61687__$1);var inst_61695 = inst_61694;var inst_61696 = null;var inst_61697 = (0);var inst_61698 = (0);var state_61759__$1 = (function (){var statearr_61797 = state_61759;(statearr_61797[(19)] = inst_61697);
(statearr_61797[(31)] = inst_61689);
(statearr_61797[(9)] = inst_61696);
(statearr_61797[(30)] = inst_61687__$1);
(statearr_61797[(10)] = inst_61698);
(statearr_61797[(20)] = inst_61695);
return statearr_61797;
})();var statearr_61798_61869 = state_61759__$1;(statearr_61798_61869[(2)] = null);
(statearr_61798_61869[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (28)))
{var inst_61716 = (state_61759[(17)]);var inst_61695 = (state_61759[(20)]);var inst_61716__$1 = cljs.core.seq.call(null,inst_61695);var state_61759__$1 = (function (){var statearr_61799 = state_61759;(statearr_61799[(17)] = inst_61716__$1);
return statearr_61799;
})();if(inst_61716__$1)
{var statearr_61800_61870 = state_61759__$1;(statearr_61800_61870[(1)] = (33));
} else
{var statearr_61801_61871 = state_61759__$1;(statearr_61801_61871[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (25)))
{var inst_61697 = (state_61759[(19)]);var inst_61698 = (state_61759[(10)]);var inst_61700 = (inst_61698 < inst_61697);var inst_61701 = inst_61700;var state_61759__$1 = state_61759;if(cljs.core.truth_(inst_61701))
{var statearr_61802_61872 = state_61759__$1;(statearr_61802_61872[(1)] = (27));
} else
{var statearr_61803_61873 = state_61759__$1;(statearr_61803_61873[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (34)))
{var state_61759__$1 = state_61759;var statearr_61804_61874 = state_61759__$1;(statearr_61804_61874[(2)] = null);
(statearr_61804_61874[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (17)))
{var state_61759__$1 = state_61759;var statearr_61805_61875 = state_61759__$1;(statearr_61805_61875[(2)] = null);
(statearr_61805_61875[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (3)))
{var inst_61757 = (state_61759[(2)]);var state_61759__$1 = state_61759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_61759__$1,inst_61757);
} else
{if((state_val_61760 === (12)))
{var inst_61682 = (state_61759[(2)]);var state_61759__$1 = state_61759;var statearr_61806_61876 = state_61759__$1;(statearr_61806_61876[(2)] = inst_61682);
(statearr_61806_61876[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (2)))
{var state_61759__$1 = state_61759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61759__$1,(4),ch);
} else
{if((state_val_61760 === (23)))
{var state_61759__$1 = state_61759;var statearr_61807_61877 = state_61759__$1;(statearr_61807_61877[(2)] = null);
(statearr_61807_61877[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (35)))
{var inst_61741 = (state_61759[(2)]);var state_61759__$1 = state_61759;var statearr_61808_61878 = state_61759__$1;(statearr_61808_61878[(2)] = inst_61741);
(statearr_61808_61878[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (19)))
{var inst_61656 = (state_61759[(7)]);var inst_61660 = cljs.core.chunk_first.call(null,inst_61656);var inst_61661 = cljs.core.chunk_rest.call(null,inst_61656);var inst_61662 = cljs.core.count.call(null,inst_61660);var inst_61636 = inst_61661;var inst_61637 = inst_61660;var inst_61638 = inst_61662;var inst_61639 = (0);var state_61759__$1 = (function (){var statearr_61809 = state_61759;(statearr_61809[(12)] = inst_61637);
(statearr_61809[(13)] = inst_61638);
(statearr_61809[(14)] = inst_61639);
(statearr_61809[(15)] = inst_61636);
return statearr_61809;
})();var statearr_61810_61879 = state_61759__$1;(statearr_61810_61879[(2)] = null);
(statearr_61810_61879[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (11)))
{var inst_61656 = (state_61759[(7)]);var inst_61636 = (state_61759[(15)]);var inst_61656__$1 = cljs.core.seq.call(null,inst_61636);var state_61759__$1 = (function (){var statearr_61811 = state_61759;(statearr_61811[(7)] = inst_61656__$1);
return statearr_61811;
})();if(inst_61656__$1)
{var statearr_61812_61880 = state_61759__$1;(statearr_61812_61880[(1)] = (16));
} else
{var statearr_61813_61881 = state_61759__$1;(statearr_61813_61881[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (9)))
{var inst_61684 = (state_61759[(2)]);var state_61759__$1 = state_61759;var statearr_61814_61882 = state_61759__$1;(statearr_61814_61882[(2)] = inst_61684);
(statearr_61814_61882[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (5)))
{var inst_61634 = cljs.core.deref.call(null,cs);var inst_61635 = cljs.core.seq.call(null,inst_61634);var inst_61636 = inst_61635;var inst_61637 = null;var inst_61638 = (0);var inst_61639 = (0);var state_61759__$1 = (function (){var statearr_61815 = state_61759;(statearr_61815[(12)] = inst_61637);
(statearr_61815[(13)] = inst_61638);
(statearr_61815[(14)] = inst_61639);
(statearr_61815[(15)] = inst_61636);
return statearr_61815;
})();var statearr_61816_61883 = state_61759__$1;(statearr_61816_61883[(2)] = null);
(statearr_61816_61883[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (14)))
{var state_61759__$1 = state_61759;var statearr_61817_61884 = state_61759__$1;(statearr_61817_61884[(2)] = null);
(statearr_61817_61884[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (45)))
{var inst_61749 = (state_61759[(2)]);var state_61759__$1 = state_61759;var statearr_61818_61885 = state_61759__$1;(statearr_61818_61885[(2)] = inst_61749);
(statearr_61818_61885[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (26)))
{var inst_61687 = (state_61759[(30)]);var inst_61745 = (state_61759[(2)]);var inst_61746 = cljs.core.seq.call(null,inst_61687);var state_61759__$1 = (function (){var statearr_61819 = state_61759;(statearr_61819[(32)] = inst_61745);
return statearr_61819;
})();if(inst_61746)
{var statearr_61820_61886 = state_61759__$1;(statearr_61820_61886[(1)] = (42));
} else
{var statearr_61821_61887 = state_61759__$1;(statearr_61821_61887[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (16)))
{var inst_61656 = (state_61759[(7)]);var inst_61658 = cljs.core.chunked_seq_QMARK_.call(null,inst_61656);var state_61759__$1 = state_61759;if(inst_61658)
{var statearr_61825_61888 = state_61759__$1;(statearr_61825_61888[(1)] = (19));
} else
{var statearr_61826_61889 = state_61759__$1;(statearr_61826_61889[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (38)))
{var inst_61738 = (state_61759[(2)]);var state_61759__$1 = state_61759;var statearr_61827_61890 = state_61759__$1;(statearr_61827_61890[(2)] = inst_61738);
(statearr_61827_61890[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (30)))
{var inst_61697 = (state_61759[(19)]);var inst_61696 = (state_61759[(9)]);var inst_61698 = (state_61759[(10)]);var inst_61695 = (state_61759[(20)]);var inst_61712 = (state_61759[(2)]);var inst_61713 = (inst_61698 + (1));var tmp61822 = inst_61697;var tmp61823 = inst_61696;var tmp61824 = inst_61695;var inst_61695__$1 = tmp61824;var inst_61696__$1 = tmp61823;var inst_61697__$1 = tmp61822;var inst_61698__$1 = inst_61713;var state_61759__$1 = (function (){var statearr_61828 = state_61759;(statearr_61828[(19)] = inst_61697__$1);
(statearr_61828[(9)] = inst_61696__$1);
(statearr_61828[(10)] = inst_61698__$1);
(statearr_61828[(20)] = inst_61695__$1);
(statearr_61828[(33)] = inst_61712);
return statearr_61828;
})();var statearr_61829_61891 = state_61759__$1;(statearr_61829_61891[(2)] = null);
(statearr_61829_61891[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (10)))
{var inst_61637 = (state_61759[(12)]);var inst_61639 = (state_61759[(14)]);var inst_61645 = cljs.core._nth.call(null,inst_61637,inst_61639);var inst_61646 = cljs.core.nth.call(null,inst_61645,(0),null);var inst_61647 = cljs.core.nth.call(null,inst_61645,(1),null);var state_61759__$1 = (function (){var statearr_61830 = state_61759;(statearr_61830[(28)] = inst_61646);
return statearr_61830;
})();if(cljs.core.truth_(inst_61647))
{var statearr_61831_61892 = state_61759__$1;(statearr_61831_61892[(1)] = (13));
} else
{var statearr_61832_61893 = state_61759__$1;(statearr_61832_61893[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (18)))
{var inst_61680 = (state_61759[(2)]);var state_61759__$1 = state_61759;var statearr_61833_61894 = state_61759__$1;(statearr_61833_61894[(2)] = inst_61680);
(statearr_61833_61894[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (42)))
{var state_61759__$1 = state_61759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_61759__$1,(45),dchan);
} else
{if((state_val_61760 === (37)))
{var inst_61716 = (state_61759[(17)]);var inst_61725 = cljs.core.first.call(null,inst_61716);var state_61759__$1 = (function (){var statearr_61834 = state_61759;(statearr_61834[(25)] = inst_61725);
return statearr_61834;
})();var statearr_61835_61895 = state_61759__$1;(statearr_61835_61895[(2)] = null);
(statearr_61835_61895[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_61760 === (8)))
{var inst_61638 = (state_61759[(13)]);var inst_61639 = (state_61759[(14)]);var inst_61641 = (inst_61639 < inst_61638);var inst_61642 = inst_61641;var state_61759__$1 = state_61759;if(cljs.core.truth_(inst_61642))
{var statearr_61836_61896 = state_61759__$1;(statearr_61836_61896[(1)] = (10));
} else
{var statearr_61837_61897 = state_61759__$1;(statearr_61837_61897[(1)] = (11));
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
});})(c__5708__auto___61845,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___61845,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_61841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_61841[(0)] = state_machine__5694__auto__);
(statearr_61841[(1)] = (1));
return statearr_61841;
});
var state_machine__5694__auto____1 = (function (state_61759){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_61759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e61842){if((e61842 instanceof Object))
{var ex__5697__auto__ = e61842;var statearr_61843_61898 = state_61759;(statearr_61843_61898[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_61759);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e61842;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__61899 = state_61759;
state_61759 = G__61899;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_61759){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_61759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___61845,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_61844 = f__5709__auto__.call(null);(statearr_61844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___61845);
return statearr_61844;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___61845,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj61901 = {};return obj61901;
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
;var m = (function (){if(typeof cljs.core.async.t62011 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62011 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta62012){
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
this.meta62012 = meta62012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62011.cljs$lang$type = true;
cljs.core.async.t62011.cljs$lang$ctorStr = "cljs.core.async/t62011";
cljs.core.async.t62011.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t62011");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62011.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t62011.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62011.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62011.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62011.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62011.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62011.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t62011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62013){var self__ = this;
var _62013__$1 = this;return self__.meta62012;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t62011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_62013,meta62012__$1){var self__ = this;
var _62013__$1 = this;return (new cljs.core.async.t62011(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta62012__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t62011 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t62011(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62012){return (new cljs.core.async.t62011(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta62012));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t62011(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___62120 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___62120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___62120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_62078){var state_val_62079 = (state_62078[(1)]);if((state_val_62079 === (7)))
{var inst_62027 = (state_62078[(7)]);var inst_62032 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62027);var state_62078__$1 = state_62078;var statearr_62080_62121 = state_62078__$1;(statearr_62080_62121[(2)] = inst_62032);
(statearr_62080_62121[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (20)))
{var inst_62042 = (state_62078[(8)]);var state_62078__$1 = state_62078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62078__$1,(23),out,inst_62042);
} else
{if((state_val_62079 === (1)))
{var inst_62017 = (state_62078[(9)]);var inst_62017__$1 = calc_state.call(null);var inst_62018 = cljs.core.seq_QMARK_.call(null,inst_62017__$1);var state_62078__$1 = (function (){var statearr_62081 = state_62078;(statearr_62081[(9)] = inst_62017__$1);
return statearr_62081;
})();if(inst_62018)
{var statearr_62082_62122 = state_62078__$1;(statearr_62082_62122[(1)] = (2));
} else
{var statearr_62083_62123 = state_62078__$1;(statearr_62083_62123[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (4)))
{var inst_62017 = (state_62078[(9)]);var inst_62023 = (state_62078[(2)]);var inst_62024 = cljs.core.get.call(null,inst_62023,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_62025 = cljs.core.get.call(null,inst_62023,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_62026 = cljs.core.get.call(null,inst_62023,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_62027 = inst_62017;var state_62078__$1 = (function (){var statearr_62084 = state_62078;(statearr_62084[(10)] = inst_62025);
(statearr_62084[(11)] = inst_62026);
(statearr_62084[(7)] = inst_62027);
(statearr_62084[(12)] = inst_62024);
return statearr_62084;
})();var statearr_62085_62124 = state_62078__$1;(statearr_62085_62124[(2)] = null);
(statearr_62085_62124[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (15)))
{var state_62078__$1 = state_62078;var statearr_62086_62125 = state_62078__$1;(statearr_62086_62125[(2)] = null);
(statearr_62086_62125[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (21)))
{var state_62078__$1 = state_62078;var statearr_62087_62126 = state_62078__$1;(statearr_62087_62126[(2)] = null);
(statearr_62087_62126[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (13)))
{var inst_62074 = (state_62078[(2)]);var state_62078__$1 = state_62078;var statearr_62088_62127 = state_62078__$1;(statearr_62088_62127[(2)] = inst_62074);
(statearr_62088_62127[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (22)))
{var inst_62035 = (state_62078[(13)]);var inst_62071 = (state_62078[(2)]);var inst_62027 = inst_62035;var state_62078__$1 = (function (){var statearr_62089 = state_62078;(statearr_62089[(14)] = inst_62071);
(statearr_62089[(7)] = inst_62027);
return statearr_62089;
})();var statearr_62090_62128 = state_62078__$1;(statearr_62090_62128[(2)] = null);
(statearr_62090_62128[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (6)))
{var inst_62076 = (state_62078[(2)]);var state_62078__$1 = state_62078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62078__$1,inst_62076);
} else
{if((state_val_62079 === (17)))
{var inst_62057 = (state_62078[(15)]);var state_62078__$1 = state_62078;var statearr_62091_62129 = state_62078__$1;(statearr_62091_62129[(2)] = inst_62057);
(statearr_62091_62129[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (3)))
{var inst_62017 = (state_62078[(9)]);var state_62078__$1 = state_62078;var statearr_62092_62130 = state_62078__$1;(statearr_62092_62130[(2)] = inst_62017);
(statearr_62092_62130[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (12)))
{var inst_62038 = (state_62078[(16)]);var inst_62057 = (state_62078[(15)]);var inst_62043 = (state_62078[(17)]);var inst_62057__$1 = inst_62038.call(null,inst_62043);var state_62078__$1 = (function (){var statearr_62093 = state_62078;(statearr_62093[(15)] = inst_62057__$1);
return statearr_62093;
})();if(cljs.core.truth_(inst_62057__$1))
{var statearr_62094_62131 = state_62078__$1;(statearr_62094_62131[(1)] = (17));
} else
{var statearr_62095_62132 = state_62078__$1;(statearr_62095_62132[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (2)))
{var inst_62017 = (state_62078[(9)]);var inst_62020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_62017);var state_62078__$1 = state_62078;var statearr_62096_62133 = state_62078__$1;(statearr_62096_62133[(2)] = inst_62020);
(statearr_62096_62133[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (23)))
{var inst_62068 = (state_62078[(2)]);var state_62078__$1 = state_62078;var statearr_62097_62134 = state_62078__$1;(statearr_62097_62134[(2)] = inst_62068);
(statearr_62097_62134[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (19)))
{var inst_62065 = (state_62078[(2)]);var state_62078__$1 = state_62078;if(cljs.core.truth_(inst_62065))
{var statearr_62098_62135 = state_62078__$1;(statearr_62098_62135[(1)] = (20));
} else
{var statearr_62099_62136 = state_62078__$1;(statearr_62099_62136[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (11)))
{var inst_62042 = (state_62078[(8)]);var inst_62048 = (inst_62042 == null);var state_62078__$1 = state_62078;if(cljs.core.truth_(inst_62048))
{var statearr_62100_62137 = state_62078__$1;(statearr_62100_62137[(1)] = (14));
} else
{var statearr_62101_62138 = state_62078__$1;(statearr_62101_62138[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (9)))
{var inst_62035 = (state_62078[(13)]);var inst_62035__$1 = (state_62078[(2)]);var inst_62036 = cljs.core.get.call(null,inst_62035__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_62037 = cljs.core.get.call(null,inst_62035__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_62038 = cljs.core.get.call(null,inst_62035__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_62078__$1 = (function (){var statearr_62102 = state_62078;(statearr_62102[(16)] = inst_62038);
(statearr_62102[(13)] = inst_62035__$1);
(statearr_62102[(18)] = inst_62037);
return statearr_62102;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_62078__$1,(10),inst_62036);
} else
{if((state_val_62079 === (5)))
{var inst_62027 = (state_62078[(7)]);var inst_62030 = cljs.core.seq_QMARK_.call(null,inst_62027);var state_62078__$1 = state_62078;if(inst_62030)
{var statearr_62103_62139 = state_62078__$1;(statearr_62103_62139[(1)] = (7));
} else
{var statearr_62104_62140 = state_62078__$1;(statearr_62104_62140[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (14)))
{var inst_62043 = (state_62078[(17)]);var inst_62050 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_62043);var state_62078__$1 = state_62078;var statearr_62105_62141 = state_62078__$1;(statearr_62105_62141[(2)] = inst_62050);
(statearr_62105_62141[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (16)))
{var inst_62053 = (state_62078[(2)]);var inst_62054 = calc_state.call(null);var inst_62027 = inst_62054;var state_62078__$1 = (function (){var statearr_62106 = state_62078;(statearr_62106[(19)] = inst_62053);
(statearr_62106[(7)] = inst_62027);
return statearr_62106;
})();var statearr_62107_62142 = state_62078__$1;(statearr_62107_62142[(2)] = null);
(statearr_62107_62142[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (10)))
{var inst_62042 = (state_62078[(8)]);var inst_62043 = (state_62078[(17)]);var inst_62041 = (state_62078[(2)]);var inst_62042__$1 = cljs.core.nth.call(null,inst_62041,(0),null);var inst_62043__$1 = cljs.core.nth.call(null,inst_62041,(1),null);var inst_62044 = (inst_62042__$1 == null);var inst_62045 = cljs.core._EQ_.call(null,inst_62043__$1,change);var inst_62046 = (inst_62044) || (inst_62045);var state_62078__$1 = (function (){var statearr_62108 = state_62078;(statearr_62108[(8)] = inst_62042__$1);
(statearr_62108[(17)] = inst_62043__$1);
return statearr_62108;
})();if(cljs.core.truth_(inst_62046))
{var statearr_62109_62143 = state_62078__$1;(statearr_62109_62143[(1)] = (11));
} else
{var statearr_62110_62144 = state_62078__$1;(statearr_62110_62144[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (18)))
{var inst_62038 = (state_62078[(16)]);var inst_62043 = (state_62078[(17)]);var inst_62037 = (state_62078[(18)]);var inst_62060 = cljs.core.empty_QMARK_.call(null,inst_62038);var inst_62061 = inst_62037.call(null,inst_62043);var inst_62062 = cljs.core.not.call(null,inst_62061);var inst_62063 = (inst_62060) && (inst_62062);var state_62078__$1 = state_62078;var statearr_62111_62145 = state_62078__$1;(statearr_62111_62145[(2)] = inst_62063);
(statearr_62111_62145[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62079 === (8)))
{var inst_62027 = (state_62078[(7)]);var state_62078__$1 = state_62078;var statearr_62112_62146 = state_62078__$1;(statearr_62112_62146[(2)] = inst_62027);
(statearr_62112_62146[(1)] = (9));
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
});})(c__5708__auto___62120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___62120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_62116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62116[(0)] = state_machine__5694__auto__);
(statearr_62116[(1)] = (1));
return statearr_62116;
});
var state_machine__5694__auto____1 = (function (state_62078){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62078);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62117){if((e62117 instanceof Object))
{var ex__5697__auto__ = e62117;var statearr_62118_62147 = state_62078;(statearr_62118_62147[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62078);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62117;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62148 = state_62078;
state_62078 = G__62148;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62078){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___62120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_62119 = f__5709__auto__.call(null);(statearr_62119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___62120);
return statearr_62119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___62120,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj62150 = {};return obj62150;
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
return (function (p1__62151_SHARP_){if(cljs.core.truth_(p1__62151_SHARP_.call(null,topic)))
{return p1__62151_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__62151_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t62276 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t62276 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta62277){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta62277 = meta62277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t62276.cljs$lang$type = true;
cljs.core.async.t62276.cljs$lang$ctorStr = "cljs.core.async/t62276";
cljs.core.async.t62276.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t62276");
});})(mults,ensure_mult))
;
cljs.core.async.t62276.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t62276.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t62276.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t62276.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t62276.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t62276.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t62276.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t62276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_62278){var self__ = this;
var _62278__$1 = this;return self__.meta62277;
});})(mults,ensure_mult))
;
cljs.core.async.t62276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_62278,meta62277__$1){var self__ = this;
var _62278__$1 = this;return (new cljs.core.async.t62276(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta62277__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t62276 = ((function (mults,ensure_mult){
return (function __GT_t62276(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta62277){return (new cljs.core.async.t62276(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta62277));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t62276(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___62400 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___62400,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___62400,mults,ensure_mult,p){
return (function (state_62352){var state_val_62353 = (state_62352[(1)]);if((state_val_62353 === (7)))
{var inst_62348 = (state_62352[(2)]);var state_62352__$1 = state_62352;var statearr_62354_62401 = state_62352__$1;(statearr_62354_62401[(2)] = inst_62348);
(statearr_62354_62401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (20)))
{var state_62352__$1 = state_62352;var statearr_62355_62402 = state_62352__$1;(statearr_62355_62402[(2)] = null);
(statearr_62355_62402[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (1)))
{var state_62352__$1 = state_62352;var statearr_62356_62403 = state_62352__$1;(statearr_62356_62403[(2)] = null);
(statearr_62356_62403[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (24)))
{var inst_62281 = (state_62352[(7)]);var inst_62331 = (state_62352[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_62352,(23),Object,null,(22));var inst_62338 = cljs.core.async.muxch_STAR_.call(null,inst_62331);var state_62352__$1 = state_62352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62352__$1,(25),inst_62338,inst_62281);
} else
{if((state_val_62353 === (4)))
{var inst_62281 = (state_62352[(7)]);var inst_62281__$1 = (state_62352[(2)]);var inst_62282 = (inst_62281__$1 == null);var state_62352__$1 = (function (){var statearr_62357 = state_62352;(statearr_62357[(7)] = inst_62281__$1);
return statearr_62357;
})();if(cljs.core.truth_(inst_62282))
{var statearr_62358_62404 = state_62352__$1;(statearr_62358_62404[(1)] = (5));
} else
{var statearr_62359_62405 = state_62352__$1;(statearr_62359_62405[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (15)))
{var inst_62323 = (state_62352[(2)]);var state_62352__$1 = state_62352;var statearr_62360_62406 = state_62352__$1;(statearr_62360_62406[(2)] = inst_62323);
(statearr_62360_62406[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (21)))
{var inst_62345 = (state_62352[(2)]);var state_62352__$1 = (function (){var statearr_62361 = state_62352;(statearr_62361[(9)] = inst_62345);
return statearr_62361;
})();var statearr_62362_62407 = state_62352__$1;(statearr_62362_62407[(2)] = null);
(statearr_62362_62407[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (13)))
{var inst_62305 = (state_62352[(10)]);var inst_62307 = cljs.core.chunked_seq_QMARK_.call(null,inst_62305);var state_62352__$1 = state_62352;if(inst_62307)
{var statearr_62363_62408 = state_62352__$1;(statearr_62363_62408[(1)] = (16));
} else
{var statearr_62364_62409 = state_62352__$1;(statearr_62364_62409[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (22)))
{var inst_62342 = (state_62352[(2)]);var state_62352__$1 = state_62352;var statearr_62365_62410 = state_62352__$1;(statearr_62365_62410[(2)] = inst_62342);
(statearr_62365_62410[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (6)))
{var inst_62281 = (state_62352[(7)]);var inst_62329 = (state_62352[(11)]);var inst_62331 = (state_62352[(8)]);var inst_62329__$1 = topic_fn.call(null,inst_62281);var inst_62330 = cljs.core.deref.call(null,mults);var inst_62331__$1 = cljs.core.get.call(null,inst_62330,inst_62329__$1);var state_62352__$1 = (function (){var statearr_62366 = state_62352;(statearr_62366[(11)] = inst_62329__$1);
(statearr_62366[(8)] = inst_62331__$1);
return statearr_62366;
})();if(cljs.core.truth_(inst_62331__$1))
{var statearr_62367_62411 = state_62352__$1;(statearr_62367_62411[(1)] = (19));
} else
{var statearr_62368_62412 = state_62352__$1;(statearr_62368_62412[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (25)))
{var inst_62340 = (state_62352[(2)]);var state_62352__$1 = state_62352;var statearr_62369_62413 = state_62352__$1;(statearr_62369_62413[(2)] = inst_62340);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62352__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (17)))
{var inst_62305 = (state_62352[(10)]);var inst_62314 = cljs.core.first.call(null,inst_62305);var inst_62315 = cljs.core.async.muxch_STAR_.call(null,inst_62314);var inst_62316 = cljs.core.async.close_BANG_.call(null,inst_62315);var inst_62317 = cljs.core.next.call(null,inst_62305);var inst_62291 = inst_62317;var inst_62292 = null;var inst_62293 = (0);var inst_62294 = (0);var state_62352__$1 = (function (){var statearr_62370 = state_62352;(statearr_62370[(12)] = inst_62292);
(statearr_62370[(13)] = inst_62294);
(statearr_62370[(14)] = inst_62316);
(statearr_62370[(15)] = inst_62293);
(statearr_62370[(16)] = inst_62291);
return statearr_62370;
})();var statearr_62371_62414 = state_62352__$1;(statearr_62371_62414[(2)] = null);
(statearr_62371_62414[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (3)))
{var inst_62350 = (state_62352[(2)]);var state_62352__$1 = state_62352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62352__$1,inst_62350);
} else
{if((state_val_62353 === (12)))
{var inst_62325 = (state_62352[(2)]);var state_62352__$1 = state_62352;var statearr_62372_62415 = state_62352__$1;(statearr_62372_62415[(2)] = inst_62325);
(statearr_62372_62415[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (2)))
{var state_62352__$1 = state_62352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62352__$1,(4),ch);
} else
{if((state_val_62353 === (23)))
{var inst_62329 = (state_62352[(11)]);var inst_62333 = (state_62352[(2)]);var inst_62334 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_62329);var state_62352__$1 = (function (){var statearr_62373 = state_62352;(statearr_62373[(17)] = inst_62333);
return statearr_62373;
})();var statearr_62374_62416 = state_62352__$1;(statearr_62374_62416[(2)] = inst_62334);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62352__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (19)))
{var state_62352__$1 = state_62352;var statearr_62375_62417 = state_62352__$1;(statearr_62375_62417[(2)] = null);
(statearr_62375_62417[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (11)))
{var inst_62305 = (state_62352[(10)]);var inst_62291 = (state_62352[(16)]);var inst_62305__$1 = cljs.core.seq.call(null,inst_62291);var state_62352__$1 = (function (){var statearr_62376 = state_62352;(statearr_62376[(10)] = inst_62305__$1);
return statearr_62376;
})();if(inst_62305__$1)
{var statearr_62377_62418 = state_62352__$1;(statearr_62377_62418[(1)] = (13));
} else
{var statearr_62378_62419 = state_62352__$1;(statearr_62378_62419[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (9)))
{var inst_62327 = (state_62352[(2)]);var state_62352__$1 = state_62352;var statearr_62379_62420 = state_62352__$1;(statearr_62379_62420[(2)] = inst_62327);
(statearr_62379_62420[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (5)))
{var inst_62288 = cljs.core.deref.call(null,mults);var inst_62289 = cljs.core.vals.call(null,inst_62288);var inst_62290 = cljs.core.seq.call(null,inst_62289);var inst_62291 = inst_62290;var inst_62292 = null;var inst_62293 = (0);var inst_62294 = (0);var state_62352__$1 = (function (){var statearr_62380 = state_62352;(statearr_62380[(12)] = inst_62292);
(statearr_62380[(13)] = inst_62294);
(statearr_62380[(15)] = inst_62293);
(statearr_62380[(16)] = inst_62291);
return statearr_62380;
})();var statearr_62381_62421 = state_62352__$1;(statearr_62381_62421[(2)] = null);
(statearr_62381_62421[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (14)))
{var state_62352__$1 = state_62352;var statearr_62385_62422 = state_62352__$1;(statearr_62385_62422[(2)] = null);
(statearr_62385_62422[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (16)))
{var inst_62305 = (state_62352[(10)]);var inst_62309 = cljs.core.chunk_first.call(null,inst_62305);var inst_62310 = cljs.core.chunk_rest.call(null,inst_62305);var inst_62311 = cljs.core.count.call(null,inst_62309);var inst_62291 = inst_62310;var inst_62292 = inst_62309;var inst_62293 = inst_62311;var inst_62294 = (0);var state_62352__$1 = (function (){var statearr_62386 = state_62352;(statearr_62386[(12)] = inst_62292);
(statearr_62386[(13)] = inst_62294);
(statearr_62386[(15)] = inst_62293);
(statearr_62386[(16)] = inst_62291);
return statearr_62386;
})();var statearr_62387_62423 = state_62352__$1;(statearr_62387_62423[(2)] = null);
(statearr_62387_62423[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (10)))
{var inst_62292 = (state_62352[(12)]);var inst_62294 = (state_62352[(13)]);var inst_62293 = (state_62352[(15)]);var inst_62291 = (state_62352[(16)]);var inst_62299 = cljs.core._nth.call(null,inst_62292,inst_62294);var inst_62300 = cljs.core.async.muxch_STAR_.call(null,inst_62299);var inst_62301 = cljs.core.async.close_BANG_.call(null,inst_62300);var inst_62302 = (inst_62294 + (1));var tmp62382 = inst_62292;var tmp62383 = inst_62293;var tmp62384 = inst_62291;var inst_62291__$1 = tmp62384;var inst_62292__$1 = tmp62382;var inst_62293__$1 = tmp62383;var inst_62294__$1 = inst_62302;var state_62352__$1 = (function (){var statearr_62388 = state_62352;(statearr_62388[(12)] = inst_62292__$1);
(statearr_62388[(13)] = inst_62294__$1);
(statearr_62388[(15)] = inst_62293__$1);
(statearr_62388[(16)] = inst_62291__$1);
(statearr_62388[(18)] = inst_62301);
return statearr_62388;
})();var statearr_62389_62424 = state_62352__$1;(statearr_62389_62424[(2)] = null);
(statearr_62389_62424[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (18)))
{var inst_62320 = (state_62352[(2)]);var state_62352__$1 = state_62352;var statearr_62390_62425 = state_62352__$1;(statearr_62390_62425[(2)] = inst_62320);
(statearr_62390_62425[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62353 === (8)))
{var inst_62294 = (state_62352[(13)]);var inst_62293 = (state_62352[(15)]);var inst_62296 = (inst_62294 < inst_62293);var inst_62297 = inst_62296;var state_62352__$1 = state_62352;if(cljs.core.truth_(inst_62297))
{var statearr_62391_62426 = state_62352__$1;(statearr_62391_62426[(1)] = (10));
} else
{var statearr_62392_62427 = state_62352__$1;(statearr_62392_62427[(1)] = (11));
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
});})(c__5708__auto___62400,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___62400,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_62396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62396[(0)] = state_machine__5694__auto__);
(statearr_62396[(1)] = (1));
return statearr_62396;
});
var state_machine__5694__auto____1 = (function (state_62352){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62352);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62397){if((e62397 instanceof Object))
{var ex__5697__auto__ = e62397;var statearr_62398_62428 = state_62352;(statearr_62398_62428[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62352);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62397;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62429 = state_62352;
state_62352 = G__62429;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62352){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___62400,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_62399 = f__5709__auto__.call(null);(statearr_62399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___62400);
return statearr_62399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___62400,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___62566 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___62566,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___62566,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_62536){var state_val_62537 = (state_62536[(1)]);if((state_val_62537 === (7)))
{var state_62536__$1 = state_62536;var statearr_62538_62567 = state_62536__$1;(statearr_62538_62567[(2)] = null);
(statearr_62538_62567[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (1)))
{var state_62536__$1 = state_62536;var statearr_62539_62568 = state_62536__$1;(statearr_62539_62568[(2)] = null);
(statearr_62539_62568[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (4)))
{var inst_62500 = (state_62536[(7)]);var inst_62502 = (inst_62500 < cnt);var state_62536__$1 = state_62536;if(cljs.core.truth_(inst_62502))
{var statearr_62540_62569 = state_62536__$1;(statearr_62540_62569[(1)] = (6));
} else
{var statearr_62541_62570 = state_62536__$1;(statearr_62541_62570[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (15)))
{var inst_62532 = (state_62536[(2)]);var state_62536__$1 = state_62536;var statearr_62542_62571 = state_62536__$1;(statearr_62542_62571[(2)] = inst_62532);
(statearr_62542_62571[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (13)))
{var inst_62525 = cljs.core.async.close_BANG_.call(null,out);var state_62536__$1 = state_62536;var statearr_62543_62572 = state_62536__$1;(statearr_62543_62572[(2)] = inst_62525);
(statearr_62543_62572[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (6)))
{var state_62536__$1 = state_62536;var statearr_62544_62573 = state_62536__$1;(statearr_62544_62573[(2)] = null);
(statearr_62544_62573[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (3)))
{var inst_62534 = (state_62536[(2)]);var state_62536__$1 = state_62536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62536__$1,inst_62534);
} else
{if((state_val_62537 === (12)))
{var inst_62522 = (state_62536[(8)]);var inst_62522__$1 = (state_62536[(2)]);var inst_62523 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_62522__$1);var state_62536__$1 = (function (){var statearr_62545 = state_62536;(statearr_62545[(8)] = inst_62522__$1);
return statearr_62545;
})();if(cljs.core.truth_(inst_62523))
{var statearr_62546_62574 = state_62536__$1;(statearr_62546_62574[(1)] = (13));
} else
{var statearr_62547_62575 = state_62536__$1;(statearr_62547_62575[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (2)))
{var inst_62499 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_62500 = (0);var state_62536__$1 = (function (){var statearr_62548 = state_62536;(statearr_62548[(9)] = inst_62499);
(statearr_62548[(7)] = inst_62500);
return statearr_62548;
})();var statearr_62549_62576 = state_62536__$1;(statearr_62549_62576[(2)] = null);
(statearr_62549_62576[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (11)))
{var inst_62500 = (state_62536[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_62536,(10),Object,null,(9));var inst_62509 = chs__$1.call(null,inst_62500);var inst_62510 = done.call(null,inst_62500);var inst_62511 = cljs.core.async.take_BANG_.call(null,inst_62509,inst_62510);var state_62536__$1 = state_62536;var statearr_62550_62577 = state_62536__$1;(statearr_62550_62577[(2)] = inst_62511);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62536__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (9)))
{var inst_62500 = (state_62536[(7)]);var inst_62513 = (state_62536[(2)]);var inst_62514 = (inst_62500 + (1));var inst_62500__$1 = inst_62514;var state_62536__$1 = (function (){var statearr_62551 = state_62536;(statearr_62551[(7)] = inst_62500__$1);
(statearr_62551[(10)] = inst_62513);
return statearr_62551;
})();var statearr_62552_62578 = state_62536__$1;(statearr_62552_62578[(2)] = null);
(statearr_62552_62578[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (5)))
{var inst_62520 = (state_62536[(2)]);var state_62536__$1 = (function (){var statearr_62553 = state_62536;(statearr_62553[(11)] = inst_62520);
return statearr_62553;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62536__$1,(12),dchan);
} else
{if((state_val_62537 === (14)))
{var inst_62522 = (state_62536[(8)]);var inst_62527 = cljs.core.apply.call(null,f,inst_62522);var state_62536__$1 = state_62536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62536__$1,(16),out,inst_62527);
} else
{if((state_val_62537 === (16)))
{var inst_62529 = (state_62536[(2)]);var state_62536__$1 = (function (){var statearr_62554 = state_62536;(statearr_62554[(12)] = inst_62529);
return statearr_62554;
})();var statearr_62555_62579 = state_62536__$1;(statearr_62555_62579[(2)] = null);
(statearr_62555_62579[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (10)))
{var inst_62504 = (state_62536[(2)]);var inst_62505 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_62536__$1 = (function (){var statearr_62556 = state_62536;(statearr_62556[(13)] = inst_62504);
return statearr_62556;
})();var statearr_62557_62580 = state_62536__$1;(statearr_62557_62580[(2)] = inst_62505);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62536__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62537 === (8)))
{var inst_62518 = (state_62536[(2)]);var state_62536__$1 = state_62536;var statearr_62558_62581 = state_62536__$1;(statearr_62558_62581[(2)] = inst_62518);
(statearr_62558_62581[(1)] = (5));
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
});})(c__5708__auto___62566,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___62566,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_62562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62562[(0)] = state_machine__5694__auto__);
(statearr_62562[(1)] = (1));
return statearr_62562;
});
var state_machine__5694__auto____1 = (function (state_62536){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62536);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62563){if((e62563 instanceof Object))
{var ex__5697__auto__ = e62563;var statearr_62564_62582 = state_62536;(statearr_62564_62582[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62563;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62583 = state_62536;
state_62536 = G__62583;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62536){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___62566,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_62565 = f__5709__auto__.call(null);(statearr_62565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___62566);
return statearr_62565;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___62566,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___62691 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___62691,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___62691,out){
return (function (state_62667){var state_val_62668 = (state_62667[(1)]);if((state_val_62668 === (7)))
{var inst_62646 = (state_62667[(7)]);var inst_62647 = (state_62667[(8)]);var inst_62646__$1 = (state_62667[(2)]);var inst_62647__$1 = cljs.core.nth.call(null,inst_62646__$1,(0),null);var inst_62648 = cljs.core.nth.call(null,inst_62646__$1,(1),null);var inst_62649 = (inst_62647__$1 == null);var state_62667__$1 = (function (){var statearr_62669 = state_62667;(statearr_62669[(9)] = inst_62648);
(statearr_62669[(7)] = inst_62646__$1);
(statearr_62669[(8)] = inst_62647__$1);
return statearr_62669;
})();if(cljs.core.truth_(inst_62649))
{var statearr_62670_62692 = state_62667__$1;(statearr_62670_62692[(1)] = (8));
} else
{var statearr_62671_62693 = state_62667__$1;(statearr_62671_62693[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62668 === (1)))
{var inst_62638 = cljs.core.vec.call(null,chs);var inst_62639 = inst_62638;var state_62667__$1 = (function (){var statearr_62672 = state_62667;(statearr_62672[(10)] = inst_62639);
return statearr_62672;
})();var statearr_62673_62694 = state_62667__$1;(statearr_62673_62694[(2)] = null);
(statearr_62673_62694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62668 === (4)))
{var inst_62639 = (state_62667[(10)]);var state_62667__$1 = state_62667;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_62667__$1,(7),inst_62639);
} else
{if((state_val_62668 === (6)))
{var inst_62663 = (state_62667[(2)]);var state_62667__$1 = state_62667;var statearr_62674_62695 = state_62667__$1;(statearr_62674_62695[(2)] = inst_62663);
(statearr_62674_62695[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62668 === (3)))
{var inst_62665 = (state_62667[(2)]);var state_62667__$1 = state_62667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62667__$1,inst_62665);
} else
{if((state_val_62668 === (2)))
{var inst_62639 = (state_62667[(10)]);var inst_62641 = cljs.core.count.call(null,inst_62639);var inst_62642 = (inst_62641 > (0));var state_62667__$1 = state_62667;if(cljs.core.truth_(inst_62642))
{var statearr_62676_62696 = state_62667__$1;(statearr_62676_62696[(1)] = (4));
} else
{var statearr_62677_62697 = state_62667__$1;(statearr_62677_62697[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62668 === (11)))
{var inst_62639 = (state_62667[(10)]);var inst_62656 = (state_62667[(2)]);var tmp62675 = inst_62639;var inst_62639__$1 = tmp62675;var state_62667__$1 = (function (){var statearr_62678 = state_62667;(statearr_62678[(11)] = inst_62656);
(statearr_62678[(10)] = inst_62639__$1);
return statearr_62678;
})();var statearr_62679_62698 = state_62667__$1;(statearr_62679_62698[(2)] = null);
(statearr_62679_62698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62668 === (9)))
{var inst_62647 = (state_62667[(8)]);var state_62667__$1 = state_62667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62667__$1,(11),out,inst_62647);
} else
{if((state_val_62668 === (5)))
{var inst_62661 = cljs.core.async.close_BANG_.call(null,out);var state_62667__$1 = state_62667;var statearr_62680_62699 = state_62667__$1;(statearr_62680_62699[(2)] = inst_62661);
(statearr_62680_62699[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62668 === (10)))
{var inst_62659 = (state_62667[(2)]);var state_62667__$1 = state_62667;var statearr_62681_62700 = state_62667__$1;(statearr_62681_62700[(2)] = inst_62659);
(statearr_62681_62700[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62668 === (8)))
{var inst_62648 = (state_62667[(9)]);var inst_62646 = (state_62667[(7)]);var inst_62639 = (state_62667[(10)]);var inst_62647 = (state_62667[(8)]);var inst_62651 = (function (){var c = inst_62648;var v = inst_62647;var vec__62644 = inst_62646;var cs = inst_62639;return ((function (c,v,vec__62644,cs,inst_62648,inst_62646,inst_62639,inst_62647,state_val_62668,c__5708__auto___62691,out){
return (function (p1__62584_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__62584_SHARP_);
});
;})(c,v,vec__62644,cs,inst_62648,inst_62646,inst_62639,inst_62647,state_val_62668,c__5708__auto___62691,out))
})();var inst_62652 = cljs.core.filterv.call(null,inst_62651,inst_62639);var inst_62639__$1 = inst_62652;var state_62667__$1 = (function (){var statearr_62682 = state_62667;(statearr_62682[(10)] = inst_62639__$1);
return statearr_62682;
})();var statearr_62683_62701 = state_62667__$1;(statearr_62683_62701[(2)] = null);
(statearr_62683_62701[(1)] = (2));
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
});})(c__5708__auto___62691,out))
;return ((function (switch__5693__auto__,c__5708__auto___62691,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_62687 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_62687[(0)] = state_machine__5694__auto__);
(statearr_62687[(1)] = (1));
return statearr_62687;
});
var state_machine__5694__auto____1 = (function (state_62667){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62667);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62688){if((e62688 instanceof Object))
{var ex__5697__auto__ = e62688;var statearr_62689_62702 = state_62667;(statearr_62689_62702[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62688;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62703 = state_62667;
state_62667 = G__62703;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62667){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___62691,out))
})();var state__5710__auto__ = (function (){var statearr_62690 = f__5709__auto__.call(null);(statearr_62690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___62691);
return statearr_62690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___62691,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___62796 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___62796,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___62796,out){
return (function (state_62773){var state_val_62774 = (state_62773[(1)]);if((state_val_62774 === (7)))
{var inst_62755 = (state_62773[(7)]);var inst_62755__$1 = (state_62773[(2)]);var inst_62756 = (inst_62755__$1 == null);var inst_62757 = cljs.core.not.call(null,inst_62756);var state_62773__$1 = (function (){var statearr_62775 = state_62773;(statearr_62775[(7)] = inst_62755__$1);
return statearr_62775;
})();if(inst_62757)
{var statearr_62776_62797 = state_62773__$1;(statearr_62776_62797[(1)] = (8));
} else
{var statearr_62777_62798 = state_62773__$1;(statearr_62777_62798[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62774 === (1)))
{var inst_62750 = (0);var state_62773__$1 = (function (){var statearr_62778 = state_62773;(statearr_62778[(8)] = inst_62750);
return statearr_62778;
})();var statearr_62779_62799 = state_62773__$1;(statearr_62779_62799[(2)] = null);
(statearr_62779_62799[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62774 === (4)))
{var state_62773__$1 = state_62773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62773__$1,(7),ch);
} else
{if((state_val_62774 === (6)))
{var inst_62768 = (state_62773[(2)]);var state_62773__$1 = state_62773;var statearr_62780_62800 = state_62773__$1;(statearr_62780_62800[(2)] = inst_62768);
(statearr_62780_62800[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62774 === (3)))
{var inst_62770 = (state_62773[(2)]);var inst_62771 = cljs.core.async.close_BANG_.call(null,out);var state_62773__$1 = (function (){var statearr_62781 = state_62773;(statearr_62781[(9)] = inst_62770);
return statearr_62781;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62773__$1,inst_62771);
} else
{if((state_val_62774 === (2)))
{var inst_62750 = (state_62773[(8)]);var inst_62752 = (inst_62750 < n);var state_62773__$1 = state_62773;if(cljs.core.truth_(inst_62752))
{var statearr_62782_62801 = state_62773__$1;(statearr_62782_62801[(1)] = (4));
} else
{var statearr_62783_62802 = state_62773__$1;(statearr_62783_62802[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62774 === (11)))
{var inst_62750 = (state_62773[(8)]);var inst_62760 = (state_62773[(2)]);var inst_62761 = (inst_62750 + (1));var inst_62750__$1 = inst_62761;var state_62773__$1 = (function (){var statearr_62784 = state_62773;(statearr_62784[(10)] = inst_62760);
(statearr_62784[(8)] = inst_62750__$1);
return statearr_62784;
})();var statearr_62785_62803 = state_62773__$1;(statearr_62785_62803[(2)] = null);
(statearr_62785_62803[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62774 === (9)))
{var state_62773__$1 = state_62773;var statearr_62786_62804 = state_62773__$1;(statearr_62786_62804[(2)] = null);
(statearr_62786_62804[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62774 === (5)))
{var state_62773__$1 = state_62773;var statearr_62787_62805 = state_62773__$1;(statearr_62787_62805[(2)] = null);
(statearr_62787_62805[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62774 === (10)))
{var inst_62765 = (state_62773[(2)]);var state_62773__$1 = state_62773;var statearr_62788_62806 = state_62773__$1;(statearr_62788_62806[(2)] = inst_62765);
(statearr_62788_62806[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62774 === (8)))
{var inst_62755 = (state_62773[(7)]);var state_62773__$1 = state_62773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62773__$1,(11),out,inst_62755);
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
});})(c__5708__auto___62796,out))
;return ((function (switch__5693__auto__,c__5708__auto___62796,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_62792 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_62792[(0)] = state_machine__5694__auto__);
(statearr_62792[(1)] = (1));
return statearr_62792;
});
var state_machine__5694__auto____1 = (function (state_62773){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62793){if((e62793 instanceof Object))
{var ex__5697__auto__ = e62793;var statearr_62794_62807 = state_62773;(statearr_62794_62807[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62773);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62793;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62808 = state_62773;
state_62773 = G__62808;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62773){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___62796,out))
})();var state__5710__auto__ = (function (){var statearr_62795 = f__5709__auto__.call(null);(statearr_62795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___62796);
return statearr_62795;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___62796,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___62905 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___62905,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___62905,out){
return (function (state_62880){var state_val_62881 = (state_62880[(1)]);if((state_val_62881 === (7)))
{var inst_62875 = (state_62880[(2)]);var state_62880__$1 = state_62880;var statearr_62882_62906 = state_62880__$1;(statearr_62882_62906[(2)] = inst_62875);
(statearr_62882_62906[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62881 === (1)))
{var inst_62857 = null;var state_62880__$1 = (function (){var statearr_62883 = state_62880;(statearr_62883[(7)] = inst_62857);
return statearr_62883;
})();var statearr_62884_62907 = state_62880__$1;(statearr_62884_62907[(2)] = null);
(statearr_62884_62907[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62881 === (4)))
{var inst_62860 = (state_62880[(8)]);var inst_62860__$1 = (state_62880[(2)]);var inst_62861 = (inst_62860__$1 == null);var inst_62862 = cljs.core.not.call(null,inst_62861);var state_62880__$1 = (function (){var statearr_62885 = state_62880;(statearr_62885[(8)] = inst_62860__$1);
return statearr_62885;
})();if(inst_62862)
{var statearr_62886_62908 = state_62880__$1;(statearr_62886_62908[(1)] = (5));
} else
{var statearr_62887_62909 = state_62880__$1;(statearr_62887_62909[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62881 === (6)))
{var state_62880__$1 = state_62880;var statearr_62888_62910 = state_62880__$1;(statearr_62888_62910[(2)] = null);
(statearr_62888_62910[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62881 === (3)))
{var inst_62877 = (state_62880[(2)]);var inst_62878 = cljs.core.async.close_BANG_.call(null,out);var state_62880__$1 = (function (){var statearr_62889 = state_62880;(statearr_62889[(9)] = inst_62877);
return statearr_62889;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62880__$1,inst_62878);
} else
{if((state_val_62881 === (2)))
{var state_62880__$1 = state_62880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62880__$1,(4),ch);
} else
{if((state_val_62881 === (11)))
{var inst_62860 = (state_62880[(8)]);var inst_62869 = (state_62880[(2)]);var inst_62857 = inst_62860;var state_62880__$1 = (function (){var statearr_62890 = state_62880;(statearr_62890[(7)] = inst_62857);
(statearr_62890[(10)] = inst_62869);
return statearr_62890;
})();var statearr_62891_62911 = state_62880__$1;(statearr_62891_62911[(2)] = null);
(statearr_62891_62911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62881 === (9)))
{var inst_62860 = (state_62880[(8)]);var state_62880__$1 = state_62880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62880__$1,(11),out,inst_62860);
} else
{if((state_val_62881 === (5)))
{var inst_62860 = (state_62880[(8)]);var inst_62857 = (state_62880[(7)]);var inst_62864 = cljs.core._EQ_.call(null,inst_62860,inst_62857);var state_62880__$1 = state_62880;if(inst_62864)
{var statearr_62893_62912 = state_62880__$1;(statearr_62893_62912[(1)] = (8));
} else
{var statearr_62894_62913 = state_62880__$1;(statearr_62894_62913[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62881 === (10)))
{var inst_62872 = (state_62880[(2)]);var state_62880__$1 = state_62880;var statearr_62895_62914 = state_62880__$1;(statearr_62895_62914[(2)] = inst_62872);
(statearr_62895_62914[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_62881 === (8)))
{var inst_62857 = (state_62880[(7)]);var tmp62892 = inst_62857;var inst_62857__$1 = tmp62892;var state_62880__$1 = (function (){var statearr_62896 = state_62880;(statearr_62896[(7)] = inst_62857__$1);
return statearr_62896;
})();var statearr_62897_62915 = state_62880__$1;(statearr_62897_62915[(2)] = null);
(statearr_62897_62915[(1)] = (2));
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
});})(c__5708__auto___62905,out))
;return ((function (switch__5693__auto__,c__5708__auto___62905,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_62901 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_62901[(0)] = state_machine__5694__auto__);
(statearr_62901[(1)] = (1));
return statearr_62901;
});
var state_machine__5694__auto____1 = (function (state_62880){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_62880);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e62902){if((e62902 instanceof Object))
{var ex__5697__auto__ = e62902;var statearr_62903_62916 = state_62880;(statearr_62903_62916[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62880);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e62902;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__62917 = state_62880;
state_62880 = G__62917;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_62880){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_62880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___62905,out))
})();var state__5710__auto__ = (function (){var statearr_62904 = f__5709__auto__.call(null);(statearr_62904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___62905);
return statearr_62904;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___62905,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___63052 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___63052,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___63052,out){
return (function (state_63022){var state_val_63023 = (state_63022[(1)]);if((state_val_63023 === (7)))
{var inst_63018 = (state_63022[(2)]);var state_63022__$1 = state_63022;var statearr_63024_63053 = state_63022__$1;(statearr_63024_63053[(2)] = inst_63018);
(statearr_63024_63053[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (1)))
{var inst_62985 = (new Array(n));var inst_62986 = inst_62985;var inst_62987 = (0);var state_63022__$1 = (function (){var statearr_63025 = state_63022;(statearr_63025[(7)] = inst_62986);
(statearr_63025[(8)] = inst_62987);
return statearr_63025;
})();var statearr_63026_63054 = state_63022__$1;(statearr_63026_63054[(2)] = null);
(statearr_63026_63054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (4)))
{var inst_62990 = (state_63022[(9)]);var inst_62990__$1 = (state_63022[(2)]);var inst_62991 = (inst_62990__$1 == null);var inst_62992 = cljs.core.not.call(null,inst_62991);var state_63022__$1 = (function (){var statearr_63027 = state_63022;(statearr_63027[(9)] = inst_62990__$1);
return statearr_63027;
})();if(inst_62992)
{var statearr_63028_63055 = state_63022__$1;(statearr_63028_63055[(1)] = (5));
} else
{var statearr_63029_63056 = state_63022__$1;(statearr_63029_63056[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (15)))
{var inst_63012 = (state_63022[(2)]);var state_63022__$1 = state_63022;var statearr_63030_63057 = state_63022__$1;(statearr_63030_63057[(2)] = inst_63012);
(statearr_63030_63057[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (13)))
{var state_63022__$1 = state_63022;var statearr_63031_63058 = state_63022__$1;(statearr_63031_63058[(2)] = null);
(statearr_63031_63058[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (6)))
{var inst_62987 = (state_63022[(8)]);var inst_63008 = (inst_62987 > (0));var state_63022__$1 = state_63022;if(cljs.core.truth_(inst_63008))
{var statearr_63032_63059 = state_63022__$1;(statearr_63032_63059[(1)] = (12));
} else
{var statearr_63033_63060 = state_63022__$1;(statearr_63033_63060[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (3)))
{var inst_63020 = (state_63022[(2)]);var state_63022__$1 = state_63022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63022__$1,inst_63020);
} else
{if((state_val_63023 === (12)))
{var inst_62986 = (state_63022[(7)]);var inst_63010 = cljs.core.vec.call(null,inst_62986);var state_63022__$1 = state_63022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63022__$1,(15),out,inst_63010);
} else
{if((state_val_63023 === (2)))
{var state_63022__$1 = state_63022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63022__$1,(4),ch);
} else
{if((state_val_63023 === (11)))
{var inst_63002 = (state_63022[(2)]);var inst_63003 = (new Array(n));var inst_62986 = inst_63003;var inst_62987 = (0);var state_63022__$1 = (function (){var statearr_63034 = state_63022;(statearr_63034[(7)] = inst_62986);
(statearr_63034[(10)] = inst_63002);
(statearr_63034[(8)] = inst_62987);
return statearr_63034;
})();var statearr_63035_63061 = state_63022__$1;(statearr_63035_63061[(2)] = null);
(statearr_63035_63061[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (9)))
{var inst_62986 = (state_63022[(7)]);var inst_63000 = cljs.core.vec.call(null,inst_62986);var state_63022__$1 = state_63022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63022__$1,(11),out,inst_63000);
} else
{if((state_val_63023 === (5)))
{var inst_62986 = (state_63022[(7)]);var inst_62995 = (state_63022[(11)]);var inst_62990 = (state_63022[(9)]);var inst_62987 = (state_63022[(8)]);var inst_62994 = (inst_62986[inst_62987] = inst_62990);var inst_62995__$1 = (inst_62987 + (1));var inst_62996 = (inst_62995__$1 < n);var state_63022__$1 = (function (){var statearr_63036 = state_63022;(statearr_63036[(12)] = inst_62994);
(statearr_63036[(11)] = inst_62995__$1);
return statearr_63036;
})();if(cljs.core.truth_(inst_62996))
{var statearr_63037_63062 = state_63022__$1;(statearr_63037_63062[(1)] = (8));
} else
{var statearr_63038_63063 = state_63022__$1;(statearr_63038_63063[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (14)))
{var inst_63015 = (state_63022[(2)]);var inst_63016 = cljs.core.async.close_BANG_.call(null,out);var state_63022__$1 = (function (){var statearr_63040 = state_63022;(statearr_63040[(13)] = inst_63015);
return statearr_63040;
})();var statearr_63041_63064 = state_63022__$1;(statearr_63041_63064[(2)] = inst_63016);
(statearr_63041_63064[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (10)))
{var inst_63006 = (state_63022[(2)]);var state_63022__$1 = state_63022;var statearr_63042_63065 = state_63022__$1;(statearr_63042_63065[(2)] = inst_63006);
(statearr_63042_63065[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63023 === (8)))
{var inst_62986 = (state_63022[(7)]);var inst_62995 = (state_63022[(11)]);var tmp63039 = inst_62986;var inst_62986__$1 = tmp63039;var inst_62987 = inst_62995;var state_63022__$1 = (function (){var statearr_63043 = state_63022;(statearr_63043[(7)] = inst_62986__$1);
(statearr_63043[(8)] = inst_62987);
return statearr_63043;
})();var statearr_63044_63066 = state_63022__$1;(statearr_63044_63066[(2)] = null);
(statearr_63044_63066[(1)] = (2));
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
});})(c__5708__auto___63052,out))
;return ((function (switch__5693__auto__,c__5708__auto___63052,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_63048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63048[(0)] = state_machine__5694__auto__);
(statearr_63048[(1)] = (1));
return statearr_63048;
});
var state_machine__5694__auto____1 = (function (state_63022){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_63022);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e63049){if((e63049 instanceof Object))
{var ex__5697__auto__ = e63049;var statearr_63050_63067 = state_63022;(statearr_63050_63067[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63022);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e63049;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63068 = state_63022;
state_63022 = G__63068;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_63022){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_63022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___63052,out))
})();var state__5710__auto__ = (function (){var statearr_63051 = f__5709__auto__.call(null);(statearr_63051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___63052);
return statearr_63051;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___63052,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___63211 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___63211,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___63211,out){
return (function (state_63181){var state_val_63182 = (state_63181[(1)]);if((state_val_63182 === (7)))
{var inst_63177 = (state_63181[(2)]);var state_63181__$1 = state_63181;var statearr_63183_63212 = state_63181__$1;(statearr_63183_63212[(2)] = inst_63177);
(statearr_63183_63212[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (1)))
{var inst_63140 = [];var inst_63141 = inst_63140;var inst_63142 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_63181__$1 = (function (){var statearr_63184 = state_63181;(statearr_63184[(7)] = inst_63142);
(statearr_63184[(8)] = inst_63141);
return statearr_63184;
})();var statearr_63185_63213 = state_63181__$1;(statearr_63185_63213[(2)] = null);
(statearr_63185_63213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (4)))
{var inst_63145 = (state_63181[(9)]);var inst_63145__$1 = (state_63181[(2)]);var inst_63146 = (inst_63145__$1 == null);var inst_63147 = cljs.core.not.call(null,inst_63146);var state_63181__$1 = (function (){var statearr_63186 = state_63181;(statearr_63186[(9)] = inst_63145__$1);
return statearr_63186;
})();if(inst_63147)
{var statearr_63187_63214 = state_63181__$1;(statearr_63187_63214[(1)] = (5));
} else
{var statearr_63188_63215 = state_63181__$1;(statearr_63188_63215[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (15)))
{var inst_63171 = (state_63181[(2)]);var state_63181__$1 = state_63181;var statearr_63189_63216 = state_63181__$1;(statearr_63189_63216[(2)] = inst_63171);
(statearr_63189_63216[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (13)))
{var state_63181__$1 = state_63181;var statearr_63190_63217 = state_63181__$1;(statearr_63190_63217[(2)] = null);
(statearr_63190_63217[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (6)))
{var inst_63141 = (state_63181[(8)]);var inst_63166 = inst_63141.length;var inst_63167 = (inst_63166 > (0));var state_63181__$1 = state_63181;if(cljs.core.truth_(inst_63167))
{var statearr_63191_63218 = state_63181__$1;(statearr_63191_63218[(1)] = (12));
} else
{var statearr_63192_63219 = state_63181__$1;(statearr_63192_63219[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (3)))
{var inst_63179 = (state_63181[(2)]);var state_63181__$1 = state_63181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63181__$1,inst_63179);
} else
{if((state_val_63182 === (12)))
{var inst_63141 = (state_63181[(8)]);var inst_63169 = cljs.core.vec.call(null,inst_63141);var state_63181__$1 = state_63181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63181__$1,(15),out,inst_63169);
} else
{if((state_val_63182 === (2)))
{var state_63181__$1 = state_63181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63181__$1,(4),ch);
} else
{if((state_val_63182 === (11)))
{var inst_63145 = (state_63181[(9)]);var inst_63149 = (state_63181[(10)]);var inst_63159 = (state_63181[(2)]);var inst_63160 = [];var inst_63161 = inst_63160.push(inst_63145);var inst_63141 = inst_63160;var inst_63142 = inst_63149;var state_63181__$1 = (function (){var statearr_63193 = state_63181;(statearr_63193[(11)] = inst_63159);
(statearr_63193[(12)] = inst_63161);
(statearr_63193[(7)] = inst_63142);
(statearr_63193[(8)] = inst_63141);
return statearr_63193;
})();var statearr_63194_63220 = state_63181__$1;(statearr_63194_63220[(2)] = null);
(statearr_63194_63220[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (9)))
{var inst_63141 = (state_63181[(8)]);var inst_63157 = cljs.core.vec.call(null,inst_63141);var state_63181__$1 = state_63181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63181__$1,(11),out,inst_63157);
} else
{if((state_val_63182 === (5)))
{var inst_63145 = (state_63181[(9)]);var inst_63142 = (state_63181[(7)]);var inst_63149 = (state_63181[(10)]);var inst_63149__$1 = f.call(null,inst_63145);var inst_63150 = cljs.core._EQ_.call(null,inst_63149__$1,inst_63142);var inst_63151 = cljs.core.keyword_identical_QMARK_.call(null,inst_63142,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_63152 = (inst_63150) || (inst_63151);var state_63181__$1 = (function (){var statearr_63195 = state_63181;(statearr_63195[(10)] = inst_63149__$1);
return statearr_63195;
})();if(cljs.core.truth_(inst_63152))
{var statearr_63196_63221 = state_63181__$1;(statearr_63196_63221[(1)] = (8));
} else
{var statearr_63197_63222 = state_63181__$1;(statearr_63197_63222[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (14)))
{var inst_63174 = (state_63181[(2)]);var inst_63175 = cljs.core.async.close_BANG_.call(null,out);var state_63181__$1 = (function (){var statearr_63199 = state_63181;(statearr_63199[(13)] = inst_63174);
return statearr_63199;
})();var statearr_63200_63223 = state_63181__$1;(statearr_63200_63223[(2)] = inst_63175);
(statearr_63200_63223[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (10)))
{var inst_63164 = (state_63181[(2)]);var state_63181__$1 = state_63181;var statearr_63201_63224 = state_63181__$1;(statearr_63201_63224[(2)] = inst_63164);
(statearr_63201_63224[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_63182 === (8)))
{var inst_63145 = (state_63181[(9)]);var inst_63141 = (state_63181[(8)]);var inst_63149 = (state_63181[(10)]);var inst_63154 = inst_63141.push(inst_63145);var tmp63198 = inst_63141;var inst_63141__$1 = tmp63198;var inst_63142 = inst_63149;var state_63181__$1 = (function (){var statearr_63202 = state_63181;(statearr_63202[(14)] = inst_63154);
(statearr_63202[(7)] = inst_63142);
(statearr_63202[(8)] = inst_63141__$1);
return statearr_63202;
})();var statearr_63203_63225 = state_63181__$1;(statearr_63203_63225[(2)] = null);
(statearr_63203_63225[(1)] = (2));
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
});})(c__5708__auto___63211,out))
;return ((function (switch__5693__auto__,c__5708__auto___63211,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_63207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_63207[(0)] = state_machine__5694__auto__);
(statearr_63207[(1)] = (1));
return statearr_63207;
});
var state_machine__5694__auto____1 = (function (state_63181){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_63181);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e63208){if((e63208 instanceof Object))
{var ex__5697__auto__ = e63208;var statearr_63209_63226 = state_63181;(statearr_63209_63226[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63181);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e63208;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__63227 = state_63181;
state_63181 = G__63227;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_63181){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_63181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___63211,out))
})();var state__5710__auto__ = (function (){var statearr_63210 = f__5709__auto__.call(null);(statearr_63210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___63211);
return statearr_63210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___63211,out))
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