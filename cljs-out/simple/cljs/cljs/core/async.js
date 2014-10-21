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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t32546 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32546 = (function (f,fn_handler,meta32547){
this.f = f;
this.fn_handler = fn_handler;
this.meta32547 = meta32547;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32546.cljs$lang$type = true;
cljs.core.async.t32546.cljs$lang$ctorStr = "cljs.core.async/t32546";
cljs.core.async.t32546.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t32546");
});
cljs.core.async.t32546.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32546.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t32546.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t32546.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32548){var self__ = this;
var _32548__$1 = this;return self__.meta32547;
});
cljs.core.async.t32546.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32548,meta32547__$1){var self__ = this;
var _32548__$1 = this;return (new cljs.core.async.t32546(self__.f,self__.fn_handler,meta32547__$1));
});
cljs.core.async.__GT_t32546 = (function __GT_t32546(f__$1,fn_handler__$1,meta32547){return (new cljs.core.async.t32546(f__$1,fn_handler__$1,meta32547));
});
}
return (new cljs.core.async.t32546(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__32550 = buff;if(G__32550)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__32550.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__32550.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32550);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32550);
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
{var val_32551 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_32551);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_32551,ret){
return (function (){return fn1.call(null,val_32551);
});})(val_32551,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___32552 = n;var x_32553 = (0);while(true){
if((x_32553 < n__4414__auto___32552))
{(a[x_32553] = (0));
{
var G__32554 = (x_32553 + (1));
x_32553 = G__32554;
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
var G__32555 = (i + (1));
i = G__32555;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t32559 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32559 = (function (flag,alt_flag,meta32560){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32560 = meta32560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32559.cljs$lang$type = true;
cljs.core.async.t32559.cljs$lang$ctorStr = "cljs.core.async/t32559";
cljs.core.async.t32559.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t32559");
});})(flag))
;
cljs.core.async.t32559.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32559.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t32559.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t32559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_32561){var self__ = this;
var _32561__$1 = this;return self__.meta32560;
});})(flag))
;
cljs.core.async.t32559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_32561,meta32560__$1){var self__ = this;
var _32561__$1 = this;return (new cljs.core.async.t32559(self__.flag,self__.alt_flag,meta32560__$1));
});})(flag))
;
cljs.core.async.__GT_t32559 = ((function (flag){
return (function __GT_t32559(flag__$1,alt_flag__$1,meta32560){return (new cljs.core.async.t32559(flag__$1,alt_flag__$1,meta32560));
});})(flag))
;
}
return (new cljs.core.async.t32559(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t32565 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32565 = (function (cb,flag,alt_handler,meta32566){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32566 = meta32566;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32565.cljs$lang$type = true;
cljs.core.async.t32565.cljs$lang$ctorStr = "cljs.core.async/t32565";
cljs.core.async.t32565.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t32565");
});
cljs.core.async.t32565.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32565.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t32565.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t32565.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32567){var self__ = this;
var _32567__$1 = this;return self__.meta32566;
});
cljs.core.async.t32565.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32567,meta32566__$1){var self__ = this;
var _32567__$1 = this;return (new cljs.core.async.t32565(self__.cb,self__.flag,self__.alt_handler,meta32566__$1));
});
cljs.core.async.__GT_t32565 = (function __GT_t32565(cb__$1,flag__$1,alt_handler__$1,meta32566){return (new cljs.core.async.t32565(cb__$1,flag__$1,alt_handler__$1,meta32566));
});
}
return (new cljs.core.async.t32565(cb,flag,alt_handler,null));
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
return (function (p1__32568_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32568_SHARP_,port], null));
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
var G__32569 = (i + (1));
i = G__32569;
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
var alts_BANG___delegate = function (ports,p__32570){var map__32572 = p__32570;var map__32572__$1 = ((cljs.core.seq_QMARK_.call(null,map__32572))?cljs.core.apply.call(null,cljs.core.hash_map,map__32572):map__32572);var opts = map__32572__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__32570 = null;if (arguments.length > 1) {
  p__32570 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__32570);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32573){
var ports = cljs.core.first(arglist__32573);
var p__32570 = cljs.core.rest(arglist__32573);
return alts_BANG___delegate(ports,p__32570);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t32581 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32581 = (function (ch,f,map_LT_,meta32582){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32582 = meta32582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32581.cljs$lang$type = true;
cljs.core.async.t32581.cljs$lang$ctorStr = "cljs.core.async/t32581";
cljs.core.async.t32581.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t32581");
});
cljs.core.async.t32581.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32581.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t32581.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32581.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t32584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32584 = (function (fn1,_,meta32582,ch,f,map_LT_,meta32585){
this.fn1 = fn1;
this._ = _;
this.meta32582 = meta32582;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32585 = meta32585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32584.cljs$lang$type = true;
cljs.core.async.t32584.cljs$lang$ctorStr = "cljs.core.async/t32584";
cljs.core.async.t32584.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t32584");
});})(___$1))
;
cljs.core.async.t32584.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t32584.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t32584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__32574_SHARP_){return f1.call(null,(((p1__32574_SHARP_ == null))?null:self__.f.call(null,p1__32574_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t32584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_32586){var self__ = this;
var _32586__$1 = this;return self__.meta32585;
});})(___$1))
;
cljs.core.async.t32584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_32586,meta32585__$1){var self__ = this;
var _32586__$1 = this;return (new cljs.core.async.t32584(self__.fn1,self__._,self__.meta32582,self__.ch,self__.f,self__.map_LT_,meta32585__$1));
});})(___$1))
;
cljs.core.async.__GT_t32584 = ((function (___$1){
return (function __GT_t32584(fn1__$1,___$2,meta32582__$1,ch__$2,f__$2,map_LT___$2,meta32585){return (new cljs.core.async.t32584(fn1__$1,___$2,meta32582__$1,ch__$2,f__$2,map_LT___$2,meta32585));
});})(___$1))
;
}
return (new cljs.core.async.t32584(fn1,___$1,self__.meta32582,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t32581.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32581.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32583){var self__ = this;
var _32583__$1 = this;return self__.meta32582;
});
cljs.core.async.t32581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32583,meta32582__$1){var self__ = this;
var _32583__$1 = this;return (new cljs.core.async.t32581(self__.ch,self__.f,self__.map_LT_,meta32582__$1));
});
cljs.core.async.__GT_t32581 = (function __GT_t32581(ch__$1,f__$1,map_LT___$1,meta32582){return (new cljs.core.async.t32581(ch__$1,f__$1,map_LT___$1,meta32582));
});
}
return (new cljs.core.async.t32581(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t32590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32590 = (function (ch,f,map_GT_,meta32591){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32591 = meta32591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32590.cljs$lang$type = true;
cljs.core.async.t32590.cljs$lang$ctorStr = "cljs.core.async/t32590";
cljs.core.async.t32590.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t32590");
});
cljs.core.async.t32590.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32590.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t32590.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32590.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32590.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32590.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32592){var self__ = this;
var _32592__$1 = this;return self__.meta32591;
});
cljs.core.async.t32590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32592,meta32591__$1){var self__ = this;
var _32592__$1 = this;return (new cljs.core.async.t32590(self__.ch,self__.f,self__.map_GT_,meta32591__$1));
});
cljs.core.async.__GT_t32590 = (function __GT_t32590(ch__$1,f__$1,map_GT___$1,meta32591){return (new cljs.core.async.t32590(ch__$1,f__$1,map_GT___$1,meta32591));
});
}
return (new cljs.core.async.t32590(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t32596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32596 = (function (ch,p,filter_GT_,meta32597){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32597 = meta32597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32596.cljs$lang$type = true;
cljs.core.async.t32596.cljs$lang$ctorStr = "cljs.core.async/t32596";
cljs.core.async.t32596.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t32596");
});
cljs.core.async.t32596.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32596.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t32596.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32596.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32596.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32596.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32598){var self__ = this;
var _32598__$1 = this;return self__.meta32597;
});
cljs.core.async.t32596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32598,meta32597__$1){var self__ = this;
var _32598__$1 = this;return (new cljs.core.async.t32596(self__.ch,self__.p,self__.filter_GT_,meta32597__$1));
});
cljs.core.async.__GT_t32596 = (function __GT_t32596(ch__$1,p__$1,filter_GT___$1,meta32597){return (new cljs.core.async.t32596(ch__$1,p__$1,filter_GT___$1,meta32597));
});
}
return (new cljs.core.async.t32596(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___32681 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___32681,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___32681,out){
return (function (state_32660){var state_val_32661 = (state_32660[(1)]);if((state_val_32661 === (7)))
{var inst_32656 = (state_32660[(2)]);var state_32660__$1 = state_32660;var statearr_32662_32682 = state_32660__$1;(statearr_32662_32682[(2)] = inst_32656);
(statearr_32662_32682[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32661 === (1)))
{var state_32660__$1 = state_32660;var statearr_32663_32683 = state_32660__$1;(statearr_32663_32683[(2)] = null);
(statearr_32663_32683[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32661 === (4)))
{var inst_32642 = (state_32660[(7)]);var inst_32642__$1 = (state_32660[(2)]);var inst_32643 = (inst_32642__$1 == null);var state_32660__$1 = (function (){var statearr_32664 = state_32660;(statearr_32664[(7)] = inst_32642__$1);
return statearr_32664;
})();if(cljs.core.truth_(inst_32643))
{var statearr_32665_32684 = state_32660__$1;(statearr_32665_32684[(1)] = (5));
} else
{var statearr_32666_32685 = state_32660__$1;(statearr_32666_32685[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32661 === (6)))
{var inst_32642 = (state_32660[(7)]);var inst_32647 = p.call(null,inst_32642);var state_32660__$1 = state_32660;if(cljs.core.truth_(inst_32647))
{var statearr_32667_32686 = state_32660__$1;(statearr_32667_32686[(1)] = (8));
} else
{var statearr_32668_32687 = state_32660__$1;(statearr_32668_32687[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32661 === (3)))
{var inst_32658 = (state_32660[(2)]);var state_32660__$1 = state_32660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32660__$1,inst_32658);
} else
{if((state_val_32661 === (2)))
{var state_32660__$1 = state_32660;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32660__$1,(4),ch);
} else
{if((state_val_32661 === (11)))
{var inst_32650 = (state_32660[(2)]);var state_32660__$1 = state_32660;var statearr_32669_32688 = state_32660__$1;(statearr_32669_32688[(2)] = inst_32650);
(statearr_32669_32688[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32661 === (9)))
{var state_32660__$1 = state_32660;var statearr_32670_32689 = state_32660__$1;(statearr_32670_32689[(2)] = null);
(statearr_32670_32689[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32661 === (5)))
{var inst_32645 = cljs.core.async.close_BANG_.call(null,out);var state_32660__$1 = state_32660;var statearr_32671_32690 = state_32660__$1;(statearr_32671_32690[(2)] = inst_32645);
(statearr_32671_32690[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32661 === (10)))
{var inst_32653 = (state_32660[(2)]);var state_32660__$1 = (function (){var statearr_32672 = state_32660;(statearr_32672[(8)] = inst_32653);
return statearr_32672;
})();var statearr_32673_32691 = state_32660__$1;(statearr_32673_32691[(2)] = null);
(statearr_32673_32691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32661 === (8)))
{var inst_32642 = (state_32660[(7)]);var state_32660__$1 = state_32660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32660__$1,(11),out,inst_32642);
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
});})(c__5708__auto___32681,out))
;return ((function (switch__5693__auto__,c__5708__auto___32681,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_32677 = [null,null,null,null,null,null,null,null,null];(statearr_32677[(0)] = state_machine__5694__auto__);
(statearr_32677[(1)] = (1));
return statearr_32677;
});
var state_machine__5694__auto____1 = (function (state_32660){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_32660);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e32678){if((e32678 instanceof Object))
{var ex__5697__auto__ = e32678;var statearr_32679_32692 = state_32660;(statearr_32679_32692[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32678;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32693 = state_32660;
state_32660 = G__32693;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_32660){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_32660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___32681,out))
})();var state__5710__auto__ = (function (){var statearr_32680 = f__5709__auto__.call(null);(statearr_32680[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___32681);
return statearr_32680;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___32681,out))
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
return (function (state_32845){var state_val_32846 = (state_32845[(1)]);if((state_val_32846 === (7)))
{var inst_32841 = (state_32845[(2)]);var state_32845__$1 = state_32845;var statearr_32847_32884 = state_32845__$1;(statearr_32847_32884[(2)] = inst_32841);
(statearr_32847_32884[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (20)))
{var inst_32816 = (state_32845[(7)]);var inst_32827 = (state_32845[(2)]);var inst_32828 = cljs.core.next.call(null,inst_32816);var inst_32802 = inst_32828;var inst_32803 = null;var inst_32804 = (0);var inst_32805 = (0);var state_32845__$1 = (function (){var statearr_32848 = state_32845;(statearr_32848[(8)] = inst_32803);
(statearr_32848[(9)] = inst_32802);
(statearr_32848[(10)] = inst_32827);
(statearr_32848[(11)] = inst_32804);
(statearr_32848[(12)] = inst_32805);
return statearr_32848;
})();var statearr_32849_32885 = state_32845__$1;(statearr_32849_32885[(2)] = null);
(statearr_32849_32885[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (1)))
{var state_32845__$1 = state_32845;var statearr_32850_32886 = state_32845__$1;(statearr_32850_32886[(2)] = null);
(statearr_32850_32886[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (4)))
{var inst_32791 = (state_32845[(13)]);var inst_32791__$1 = (state_32845[(2)]);var inst_32792 = (inst_32791__$1 == null);var state_32845__$1 = (function (){var statearr_32854 = state_32845;(statearr_32854[(13)] = inst_32791__$1);
return statearr_32854;
})();if(cljs.core.truth_(inst_32792))
{var statearr_32855_32887 = state_32845__$1;(statearr_32855_32887[(1)] = (5));
} else
{var statearr_32856_32888 = state_32845__$1;(statearr_32856_32888[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (15)))
{var state_32845__$1 = state_32845;var statearr_32857_32889 = state_32845__$1;(statearr_32857_32889[(2)] = null);
(statearr_32857_32889[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (13)))
{var inst_32803 = (state_32845[(8)]);var inst_32802 = (state_32845[(9)]);var inst_32804 = (state_32845[(11)]);var inst_32805 = (state_32845[(12)]);var inst_32812 = (state_32845[(2)]);var inst_32813 = (inst_32805 + (1));var tmp32851 = inst_32803;var tmp32852 = inst_32802;var tmp32853 = inst_32804;var inst_32802__$1 = tmp32852;var inst_32803__$1 = tmp32851;var inst_32804__$1 = tmp32853;var inst_32805__$1 = inst_32813;var state_32845__$1 = (function (){var statearr_32858 = state_32845;(statearr_32858[(8)] = inst_32803__$1);
(statearr_32858[(9)] = inst_32802__$1);
(statearr_32858[(14)] = inst_32812);
(statearr_32858[(11)] = inst_32804__$1);
(statearr_32858[(12)] = inst_32805__$1);
return statearr_32858;
})();var statearr_32859_32890 = state_32845__$1;(statearr_32859_32890[(2)] = null);
(statearr_32859_32890[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (6)))
{var inst_32791 = (state_32845[(13)]);var inst_32796 = f.call(null,inst_32791);var inst_32801 = cljs.core.seq.call(null,inst_32796);var inst_32802 = inst_32801;var inst_32803 = null;var inst_32804 = (0);var inst_32805 = (0);var state_32845__$1 = (function (){var statearr_32860 = state_32845;(statearr_32860[(8)] = inst_32803);
(statearr_32860[(9)] = inst_32802);
(statearr_32860[(11)] = inst_32804);
(statearr_32860[(12)] = inst_32805);
return statearr_32860;
})();var statearr_32861_32891 = state_32845__$1;(statearr_32861_32891[(2)] = null);
(statearr_32861_32891[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (17)))
{var inst_32816 = (state_32845[(7)]);var inst_32820 = cljs.core.chunk_first.call(null,inst_32816);var inst_32821 = cljs.core.chunk_rest.call(null,inst_32816);var inst_32822 = cljs.core.count.call(null,inst_32820);var inst_32802 = inst_32821;var inst_32803 = inst_32820;var inst_32804 = inst_32822;var inst_32805 = (0);var state_32845__$1 = (function (){var statearr_32862 = state_32845;(statearr_32862[(8)] = inst_32803);
(statearr_32862[(9)] = inst_32802);
(statearr_32862[(11)] = inst_32804);
(statearr_32862[(12)] = inst_32805);
return statearr_32862;
})();var statearr_32863_32892 = state_32845__$1;(statearr_32863_32892[(2)] = null);
(statearr_32863_32892[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (3)))
{var inst_32843 = (state_32845[(2)]);var state_32845__$1 = state_32845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32845__$1,inst_32843);
} else
{if((state_val_32846 === (12)))
{var inst_32836 = (state_32845[(2)]);var state_32845__$1 = state_32845;var statearr_32864_32893 = state_32845__$1;(statearr_32864_32893[(2)] = inst_32836);
(statearr_32864_32893[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (2)))
{var state_32845__$1 = state_32845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32845__$1,(4),in$);
} else
{if((state_val_32846 === (19)))
{var inst_32831 = (state_32845[(2)]);var state_32845__$1 = state_32845;var statearr_32865_32894 = state_32845__$1;(statearr_32865_32894[(2)] = inst_32831);
(statearr_32865_32894[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (11)))
{var inst_32802 = (state_32845[(9)]);var inst_32816 = (state_32845[(7)]);var inst_32816__$1 = cljs.core.seq.call(null,inst_32802);var state_32845__$1 = (function (){var statearr_32866 = state_32845;(statearr_32866[(7)] = inst_32816__$1);
return statearr_32866;
})();if(inst_32816__$1)
{var statearr_32867_32895 = state_32845__$1;(statearr_32867_32895[(1)] = (14));
} else
{var statearr_32868_32896 = state_32845__$1;(statearr_32868_32896[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (9)))
{var inst_32838 = (state_32845[(2)]);var state_32845__$1 = (function (){var statearr_32869 = state_32845;(statearr_32869[(15)] = inst_32838);
return statearr_32869;
})();var statearr_32870_32897 = state_32845__$1;(statearr_32870_32897[(2)] = null);
(statearr_32870_32897[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (5)))
{var inst_32794 = cljs.core.async.close_BANG_.call(null,out);var state_32845__$1 = state_32845;var statearr_32871_32898 = state_32845__$1;(statearr_32871_32898[(2)] = inst_32794);
(statearr_32871_32898[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (14)))
{var inst_32816 = (state_32845[(7)]);var inst_32818 = cljs.core.chunked_seq_QMARK_.call(null,inst_32816);var state_32845__$1 = state_32845;if(inst_32818)
{var statearr_32872_32899 = state_32845__$1;(statearr_32872_32899[(1)] = (17));
} else
{var statearr_32873_32900 = state_32845__$1;(statearr_32873_32900[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (16)))
{var inst_32834 = (state_32845[(2)]);var state_32845__$1 = state_32845;var statearr_32874_32901 = state_32845__$1;(statearr_32874_32901[(2)] = inst_32834);
(statearr_32874_32901[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32846 === (10)))
{var inst_32803 = (state_32845[(8)]);var inst_32805 = (state_32845[(12)]);var inst_32810 = cljs.core._nth.call(null,inst_32803,inst_32805);var state_32845__$1 = state_32845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32845__$1,(13),out,inst_32810);
} else
{if((state_val_32846 === (18)))
{var inst_32816 = (state_32845[(7)]);var inst_32825 = cljs.core.first.call(null,inst_32816);var state_32845__$1 = state_32845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32845__$1,(20),out,inst_32825);
} else
{if((state_val_32846 === (8)))
{var inst_32804 = (state_32845[(11)]);var inst_32805 = (state_32845[(12)]);var inst_32807 = (inst_32805 < inst_32804);var inst_32808 = inst_32807;var state_32845__$1 = state_32845;if(cljs.core.truth_(inst_32808))
{var statearr_32875_32902 = state_32845__$1;(statearr_32875_32902[(1)] = (10));
} else
{var statearr_32876_32903 = state_32845__$1;(statearr_32876_32903[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_32880 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32880[(0)] = state_machine__5694__auto__);
(statearr_32880[(1)] = (1));
return statearr_32880;
});
var state_machine__5694__auto____1 = (function (state_32845){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_32845);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e32881){if((e32881 instanceof Object))
{var ex__5697__auto__ = e32881;var statearr_32882_32904 = state_32845;(statearr_32882_32904[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32845);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32881;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32905 = state_32845;
state_32845 = G__32905;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_32845){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_32845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_32883 = f__5709__auto__.call(null);(statearr_32883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_32883;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___32986 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___32986){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___32986){
return (function (state_32965){var state_val_32966 = (state_32965[(1)]);if((state_val_32966 === (7)))
{var inst_32961 = (state_32965[(2)]);var state_32965__$1 = state_32965;var statearr_32967_32987 = state_32965__$1;(statearr_32967_32987[(2)] = inst_32961);
(statearr_32967_32987[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32966 === (1)))
{var state_32965__$1 = state_32965;var statearr_32968_32988 = state_32965__$1;(statearr_32968_32988[(2)] = null);
(statearr_32968_32988[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32966 === (4)))
{var inst_32948 = (state_32965[(7)]);var inst_32948__$1 = (state_32965[(2)]);var inst_32949 = (inst_32948__$1 == null);var state_32965__$1 = (function (){var statearr_32969 = state_32965;(statearr_32969[(7)] = inst_32948__$1);
return statearr_32969;
})();if(cljs.core.truth_(inst_32949))
{var statearr_32970_32989 = state_32965__$1;(statearr_32970_32989[(1)] = (5));
} else
{var statearr_32971_32990 = state_32965__$1;(statearr_32971_32990[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32966 === (6)))
{var inst_32948 = (state_32965[(7)]);var state_32965__$1 = state_32965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32965__$1,(11),to,inst_32948);
} else
{if((state_val_32966 === (3)))
{var inst_32963 = (state_32965[(2)]);var state_32965__$1 = state_32965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32965__$1,inst_32963);
} else
{if((state_val_32966 === (2)))
{var state_32965__$1 = state_32965;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32965__$1,(4),from);
} else
{if((state_val_32966 === (11)))
{var inst_32958 = (state_32965[(2)]);var state_32965__$1 = (function (){var statearr_32972 = state_32965;(statearr_32972[(8)] = inst_32958);
return statearr_32972;
})();var statearr_32973_32991 = state_32965__$1;(statearr_32973_32991[(2)] = null);
(statearr_32973_32991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32966 === (9)))
{var state_32965__$1 = state_32965;var statearr_32974_32992 = state_32965__$1;(statearr_32974_32992[(2)] = null);
(statearr_32974_32992[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32966 === (5)))
{var state_32965__$1 = state_32965;if(cljs.core.truth_(close_QMARK_))
{var statearr_32975_32993 = state_32965__$1;(statearr_32975_32993[(1)] = (8));
} else
{var statearr_32976_32994 = state_32965__$1;(statearr_32976_32994[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32966 === (10)))
{var inst_32955 = (state_32965[(2)]);var state_32965__$1 = state_32965;var statearr_32977_32995 = state_32965__$1;(statearr_32977_32995[(2)] = inst_32955);
(statearr_32977_32995[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_32966 === (8)))
{var inst_32952 = cljs.core.async.close_BANG_.call(null,to);var state_32965__$1 = state_32965;var statearr_32978_32996 = state_32965__$1;(statearr_32978_32996[(2)] = inst_32952);
(statearr_32978_32996[(1)] = (10));
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
});})(c__5708__auto___32986))
;return ((function (switch__5693__auto__,c__5708__auto___32986){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_32982 = [null,null,null,null,null,null,null,null,null];(statearr_32982[(0)] = state_machine__5694__auto__);
(statearr_32982[(1)] = (1));
return statearr_32982;
});
var state_machine__5694__auto____1 = (function (state_32965){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_32965);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e32983){if((e32983 instanceof Object))
{var ex__5697__auto__ = e32983;var statearr_32984_32997 = state_32965;(statearr_32984_32997[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32965);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e32983;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__32998 = state_32965;
state_32965 = G__32998;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_32965){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_32965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___32986))
})();var state__5710__auto__ = (function (){var statearr_32985 = f__5709__auto__.call(null);(statearr_32985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___32986);
return statearr_32985;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___32986))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___33085 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___33085,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___33085,tc,fc){
return (function (state_33063){var state_val_33064 = (state_33063[(1)]);if((state_val_33064 === (7)))
{var inst_33059 = (state_33063[(2)]);var state_33063__$1 = state_33063;var statearr_33065_33086 = state_33063__$1;(statearr_33065_33086[(2)] = inst_33059);
(statearr_33065_33086[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33064 === (1)))
{var state_33063__$1 = state_33063;var statearr_33066_33087 = state_33063__$1;(statearr_33066_33087[(2)] = null);
(statearr_33066_33087[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33064 === (4)))
{var inst_33044 = (state_33063[(7)]);var inst_33044__$1 = (state_33063[(2)]);var inst_33045 = (inst_33044__$1 == null);var state_33063__$1 = (function (){var statearr_33067 = state_33063;(statearr_33067[(7)] = inst_33044__$1);
return statearr_33067;
})();if(cljs.core.truth_(inst_33045))
{var statearr_33068_33088 = state_33063__$1;(statearr_33068_33088[(1)] = (5));
} else
{var statearr_33069_33089 = state_33063__$1;(statearr_33069_33089[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33064 === (6)))
{var inst_33044 = (state_33063[(7)]);var inst_33050 = p.call(null,inst_33044);var state_33063__$1 = state_33063;if(cljs.core.truth_(inst_33050))
{var statearr_33070_33090 = state_33063__$1;(statearr_33070_33090[(1)] = (9));
} else
{var statearr_33071_33091 = state_33063__$1;(statearr_33071_33091[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33064 === (3)))
{var inst_33061 = (state_33063[(2)]);var state_33063__$1 = state_33063;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33063__$1,inst_33061);
} else
{if((state_val_33064 === (2)))
{var state_33063__$1 = state_33063;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33063__$1,(4),ch);
} else
{if((state_val_33064 === (11)))
{var inst_33044 = (state_33063[(7)]);var inst_33054 = (state_33063[(2)]);var state_33063__$1 = state_33063;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33063__$1,(8),inst_33054,inst_33044);
} else
{if((state_val_33064 === (9)))
{var state_33063__$1 = state_33063;var statearr_33072_33092 = state_33063__$1;(statearr_33072_33092[(2)] = tc);
(statearr_33072_33092[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33064 === (5)))
{var inst_33047 = cljs.core.async.close_BANG_.call(null,tc);var inst_33048 = cljs.core.async.close_BANG_.call(null,fc);var state_33063__$1 = (function (){var statearr_33073 = state_33063;(statearr_33073[(8)] = inst_33047);
return statearr_33073;
})();var statearr_33074_33093 = state_33063__$1;(statearr_33074_33093[(2)] = inst_33048);
(statearr_33074_33093[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33064 === (10)))
{var state_33063__$1 = state_33063;var statearr_33075_33094 = state_33063__$1;(statearr_33075_33094[(2)] = fc);
(statearr_33075_33094[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33064 === (8)))
{var inst_33056 = (state_33063[(2)]);var state_33063__$1 = (function (){var statearr_33076 = state_33063;(statearr_33076[(9)] = inst_33056);
return statearr_33076;
})();var statearr_33077_33095 = state_33063__$1;(statearr_33077_33095[(2)] = null);
(statearr_33077_33095[(1)] = (2));
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
});})(c__5708__auto___33085,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___33085,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_33081 = [null,null,null,null,null,null,null,null,null,null];(statearr_33081[(0)] = state_machine__5694__auto__);
(statearr_33081[(1)] = (1));
return statearr_33081;
});
var state_machine__5694__auto____1 = (function (state_33063){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_33063);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e33082){if((e33082 instanceof Object))
{var ex__5697__auto__ = e33082;var statearr_33083_33096 = state_33063;(statearr_33083_33096[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33063);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33082;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33097 = state_33063;
state_33063 = G__33097;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_33063){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_33063);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___33085,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_33084 = f__5709__auto__.call(null);(statearr_33084[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___33085);
return statearr_33084;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___33085,tc,fc))
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
return (function (state_33144){var state_val_33145 = (state_33144[(1)]);if((state_val_33145 === (7)))
{var inst_33140 = (state_33144[(2)]);var state_33144__$1 = state_33144;var statearr_33146_33162 = state_33144__$1;(statearr_33146_33162[(2)] = inst_33140);
(statearr_33146_33162[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33145 === (6)))
{var inst_33133 = (state_33144[(7)]);var inst_33130 = (state_33144[(8)]);var inst_33137 = f.call(null,inst_33130,inst_33133);var inst_33130__$1 = inst_33137;var state_33144__$1 = (function (){var statearr_33147 = state_33144;(statearr_33147[(8)] = inst_33130__$1);
return statearr_33147;
})();var statearr_33148_33163 = state_33144__$1;(statearr_33148_33163[(2)] = null);
(statearr_33148_33163[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33145 === (5)))
{var inst_33130 = (state_33144[(8)]);var state_33144__$1 = state_33144;var statearr_33149_33164 = state_33144__$1;(statearr_33149_33164[(2)] = inst_33130);
(statearr_33149_33164[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33145 === (4)))
{var inst_33133 = (state_33144[(7)]);var inst_33133__$1 = (state_33144[(2)]);var inst_33134 = (inst_33133__$1 == null);var state_33144__$1 = (function (){var statearr_33150 = state_33144;(statearr_33150[(7)] = inst_33133__$1);
return statearr_33150;
})();if(cljs.core.truth_(inst_33134))
{var statearr_33151_33165 = state_33144__$1;(statearr_33151_33165[(1)] = (5));
} else
{var statearr_33152_33166 = state_33144__$1;(statearr_33152_33166[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33145 === (3)))
{var inst_33142 = (state_33144[(2)]);var state_33144__$1 = state_33144;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33144__$1,inst_33142);
} else
{if((state_val_33145 === (2)))
{var state_33144__$1 = state_33144;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33144__$1,(4),ch);
} else
{if((state_val_33145 === (1)))
{var inst_33130 = init;var state_33144__$1 = (function (){var statearr_33153 = state_33144;(statearr_33153[(8)] = inst_33130);
return statearr_33153;
})();var statearr_33154_33167 = state_33144__$1;(statearr_33154_33167[(2)] = null);
(statearr_33154_33167[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_33158 = [null,null,null,null,null,null,null,null,null];(statearr_33158[(0)] = state_machine__5694__auto__);
(statearr_33158[(1)] = (1));
return statearr_33158;
});
var state_machine__5694__auto____1 = (function (state_33144){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_33144);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e33159){if((e33159 instanceof Object))
{var ex__5697__auto__ = e33159;var statearr_33160_33168 = state_33144;(statearr_33160_33168[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33144);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33159;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33169 = state_33144;
state_33144 = G__33169;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_33144){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_33144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_33161 = f__5709__auto__.call(null);(statearr_33161[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_33161;
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
return (function (state_33231){var state_val_33232 = (state_33231[(1)]);if((state_val_33232 === (7)))
{var inst_33212 = (state_33231[(7)]);var inst_33217 = (state_33231[(2)]);var inst_33218 = cljs.core.next.call(null,inst_33212);var inst_33212__$1 = inst_33218;var state_33231__$1 = (function (){var statearr_33233 = state_33231;(statearr_33233[(8)] = inst_33217);
(statearr_33233[(7)] = inst_33212__$1);
return statearr_33233;
})();var statearr_33234_33252 = state_33231__$1;(statearr_33234_33252[(2)] = null);
(statearr_33234_33252[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33232 === (1)))
{var inst_33211 = cljs.core.seq.call(null,coll);var inst_33212 = inst_33211;var state_33231__$1 = (function (){var statearr_33235 = state_33231;(statearr_33235[(7)] = inst_33212);
return statearr_33235;
})();var statearr_33236_33253 = state_33231__$1;(statearr_33236_33253[(2)] = null);
(statearr_33236_33253[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33232 === (4)))
{var inst_33212 = (state_33231[(7)]);var inst_33215 = cljs.core.first.call(null,inst_33212);var state_33231__$1 = state_33231;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33231__$1,(7),ch,inst_33215);
} else
{if((state_val_33232 === (6)))
{var inst_33227 = (state_33231[(2)]);var state_33231__$1 = state_33231;var statearr_33237_33254 = state_33231__$1;(statearr_33237_33254[(2)] = inst_33227);
(statearr_33237_33254[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33232 === (3)))
{var inst_33229 = (state_33231[(2)]);var state_33231__$1 = state_33231;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33231__$1,inst_33229);
} else
{if((state_val_33232 === (2)))
{var inst_33212 = (state_33231[(7)]);var state_33231__$1 = state_33231;if(cljs.core.truth_(inst_33212))
{var statearr_33238_33255 = state_33231__$1;(statearr_33238_33255[(1)] = (4));
} else
{var statearr_33239_33256 = state_33231__$1;(statearr_33239_33256[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33232 === (9)))
{var state_33231__$1 = state_33231;var statearr_33240_33257 = state_33231__$1;(statearr_33240_33257[(2)] = null);
(statearr_33240_33257[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33232 === (5)))
{var state_33231__$1 = state_33231;if(cljs.core.truth_(close_QMARK_))
{var statearr_33241_33258 = state_33231__$1;(statearr_33241_33258[(1)] = (8));
} else
{var statearr_33242_33259 = state_33231__$1;(statearr_33242_33259[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33232 === (10)))
{var inst_33225 = (state_33231[(2)]);var state_33231__$1 = state_33231;var statearr_33243_33260 = state_33231__$1;(statearr_33243_33260[(2)] = inst_33225);
(statearr_33243_33260[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33232 === (8)))
{var inst_33222 = cljs.core.async.close_BANG_.call(null,ch);var state_33231__$1 = state_33231;var statearr_33244_33261 = state_33231__$1;(statearr_33244_33261[(2)] = inst_33222);
(statearr_33244_33261[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_33248 = [null,null,null,null,null,null,null,null,null];(statearr_33248[(0)] = state_machine__5694__auto__);
(statearr_33248[(1)] = (1));
return statearr_33248;
});
var state_machine__5694__auto____1 = (function (state_33231){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_33231);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e33249){if((e33249 instanceof Object))
{var ex__5697__auto__ = e33249;var statearr_33250_33262 = state_33231;(statearr_33250_33262[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33231);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33249;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33263 = state_33231;
state_33231 = G__33263;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_33231){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_33231);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_33251 = f__5709__auto__.call(null);(statearr_33251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_33251;
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
cljs.core.async.Mux = (function (){var obj33265 = {};return obj33265;
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
cljs.core.async.Mult = (function (){var obj33267 = {};return obj33267;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t33491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33491 = (function (cs,ch,mult,meta33492){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33492 = meta33492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33491.cljs$lang$type = true;
cljs.core.async.t33491.cljs$lang$ctorStr = "cljs.core.async/t33491";
cljs.core.async.t33491.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t33491");
});})(cs))
;
cljs.core.async.t33491.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t33491.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t33491.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t33491.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t33491.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t33491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33493){var self__ = this;
var _33493__$1 = this;return self__.meta33492;
});})(cs))
;
cljs.core.async.t33491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33493,meta33492__$1){var self__ = this;
var _33493__$1 = this;return (new cljs.core.async.t33491(self__.cs,self__.ch,self__.mult,meta33492__$1));
});})(cs))
;
cljs.core.async.__GT_t33491 = ((function (cs){
return (function __GT_t33491(cs__$1,ch__$1,mult__$1,meta33492){return (new cljs.core.async.t33491(cs__$1,ch__$1,mult__$1,meta33492));
});})(cs))
;
}
return (new cljs.core.async.t33491(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___33714 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___33714,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___33714,cs,m,dchan,dctr,done){
return (function (state_33628){var state_val_33629 = (state_33628[(1)]);if((state_val_33629 === (7)))
{var inst_33624 = (state_33628[(2)]);var state_33628__$1 = state_33628;var statearr_33630_33715 = state_33628__$1;(statearr_33630_33715[(2)] = inst_33624);
(statearr_33630_33715[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (20)))
{var inst_33525 = (state_33628[(7)]);var inst_33535 = cljs.core.first.call(null,inst_33525);var inst_33536 = cljs.core.nth.call(null,inst_33535,(0),null);var inst_33537 = cljs.core.nth.call(null,inst_33535,(1),null);var state_33628__$1 = (function (){var statearr_33631 = state_33628;(statearr_33631[(8)] = inst_33536);
return statearr_33631;
})();if(cljs.core.truth_(inst_33537))
{var statearr_33632_33716 = state_33628__$1;(statearr_33632_33716[(1)] = (22));
} else
{var statearr_33633_33717 = state_33628__$1;(statearr_33633_33717[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (27)))
{var inst_33565 = (state_33628[(9)]);var inst_33567 = (state_33628[(10)]);var inst_33572 = cljs.core._nth.call(null,inst_33565,inst_33567);var state_33628__$1 = (function (){var statearr_33634 = state_33628;(statearr_33634[(11)] = inst_33572);
return statearr_33634;
})();var statearr_33635_33718 = state_33628__$1;(statearr_33635_33718[(2)] = null);
(statearr_33635_33718[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (1)))
{var state_33628__$1 = state_33628;var statearr_33636_33719 = state_33628__$1;(statearr_33636_33719[(2)] = null);
(statearr_33636_33719[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (24)))
{var inst_33525 = (state_33628[(7)]);var inst_33542 = (state_33628[(2)]);var inst_33543 = cljs.core.next.call(null,inst_33525);var inst_33505 = inst_33543;var inst_33506 = null;var inst_33507 = (0);var inst_33508 = (0);var state_33628__$1 = (function (){var statearr_33637 = state_33628;(statearr_33637[(12)] = inst_33507);
(statearr_33637[(13)] = inst_33506);
(statearr_33637[(14)] = inst_33508);
(statearr_33637[(15)] = inst_33505);
(statearr_33637[(16)] = inst_33542);
return statearr_33637;
})();var statearr_33638_33720 = state_33628__$1;(statearr_33638_33720[(2)] = null);
(statearr_33638_33720[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (39)))
{var inst_33585 = (state_33628[(17)]);var inst_33603 = (state_33628[(2)]);var inst_33604 = cljs.core.next.call(null,inst_33585);var inst_33564 = inst_33604;var inst_33565 = null;var inst_33566 = (0);var inst_33567 = (0);var state_33628__$1 = (function (){var statearr_33642 = state_33628;(statearr_33642[(18)] = inst_33603);
(statearr_33642[(19)] = inst_33564);
(statearr_33642[(9)] = inst_33565);
(statearr_33642[(10)] = inst_33567);
(statearr_33642[(20)] = inst_33566);
return statearr_33642;
})();var statearr_33643_33721 = state_33628__$1;(statearr_33643_33721[(2)] = null);
(statearr_33643_33721[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (4)))
{var inst_33496 = (state_33628[(21)]);var inst_33496__$1 = (state_33628[(2)]);var inst_33497 = (inst_33496__$1 == null);var state_33628__$1 = (function (){var statearr_33644 = state_33628;(statearr_33644[(21)] = inst_33496__$1);
return statearr_33644;
})();if(cljs.core.truth_(inst_33497))
{var statearr_33645_33722 = state_33628__$1;(statearr_33645_33722[(1)] = (5));
} else
{var statearr_33646_33723 = state_33628__$1;(statearr_33646_33723[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (15)))
{var inst_33507 = (state_33628[(12)]);var inst_33506 = (state_33628[(13)]);var inst_33508 = (state_33628[(14)]);var inst_33505 = (state_33628[(15)]);var inst_33521 = (state_33628[(2)]);var inst_33522 = (inst_33508 + (1));var tmp33639 = inst_33507;var tmp33640 = inst_33506;var tmp33641 = inst_33505;var inst_33505__$1 = tmp33641;var inst_33506__$1 = tmp33640;var inst_33507__$1 = tmp33639;var inst_33508__$1 = inst_33522;var state_33628__$1 = (function (){var statearr_33647 = state_33628;(statearr_33647[(12)] = inst_33507__$1);
(statearr_33647[(13)] = inst_33506__$1);
(statearr_33647[(14)] = inst_33508__$1);
(statearr_33647[(15)] = inst_33505__$1);
(statearr_33647[(22)] = inst_33521);
return statearr_33647;
})();var statearr_33648_33724 = state_33628__$1;(statearr_33648_33724[(2)] = null);
(statearr_33648_33724[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (21)))
{var inst_33546 = (state_33628[(2)]);var state_33628__$1 = state_33628;var statearr_33649_33725 = state_33628__$1;(statearr_33649_33725[(2)] = inst_33546);
(statearr_33649_33725[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (31)))
{var inst_33572 = (state_33628[(11)]);var inst_33573 = (state_33628[(2)]);var inst_33574 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33575 = cljs.core.async.untap_STAR_.call(null,m,inst_33572);var state_33628__$1 = (function (){var statearr_33650 = state_33628;(statearr_33650[(23)] = inst_33573);
(statearr_33650[(24)] = inst_33574);
return statearr_33650;
})();var statearr_33651_33726 = state_33628__$1;(statearr_33651_33726[(2)] = inst_33575);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33628__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (32)))
{var inst_33572 = (state_33628[(11)]);var inst_33496 = (state_33628[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33628,(31),Object,null,(30));var inst_33579 = cljs.core.async.put_BANG_.call(null,inst_33572,inst_33496,done);var state_33628__$1 = state_33628;var statearr_33652_33727 = state_33628__$1;(statearr_33652_33727[(2)] = inst_33579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33628__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (40)))
{var inst_33594 = (state_33628[(25)]);var inst_33595 = (state_33628[(2)]);var inst_33596 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33597 = cljs.core.async.untap_STAR_.call(null,m,inst_33594);var state_33628__$1 = (function (){var statearr_33653 = state_33628;(statearr_33653[(26)] = inst_33596);
(statearr_33653[(27)] = inst_33595);
return statearr_33653;
})();var statearr_33654_33728 = state_33628__$1;(statearr_33654_33728[(2)] = inst_33597);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33628__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (33)))
{var inst_33585 = (state_33628[(17)]);var inst_33587 = cljs.core.chunked_seq_QMARK_.call(null,inst_33585);var state_33628__$1 = state_33628;if(inst_33587)
{var statearr_33655_33729 = state_33628__$1;(statearr_33655_33729[(1)] = (36));
} else
{var statearr_33656_33730 = state_33628__$1;(statearr_33656_33730[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (13)))
{var inst_33515 = (state_33628[(28)]);var inst_33518 = cljs.core.async.close_BANG_.call(null,inst_33515);var state_33628__$1 = state_33628;var statearr_33657_33731 = state_33628__$1;(statearr_33657_33731[(2)] = inst_33518);
(statearr_33657_33731[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (22)))
{var inst_33536 = (state_33628[(8)]);var inst_33539 = cljs.core.async.close_BANG_.call(null,inst_33536);var state_33628__$1 = state_33628;var statearr_33658_33732 = state_33628__$1;(statearr_33658_33732[(2)] = inst_33539);
(statearr_33658_33732[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (36)))
{var inst_33585 = (state_33628[(17)]);var inst_33589 = cljs.core.chunk_first.call(null,inst_33585);var inst_33590 = cljs.core.chunk_rest.call(null,inst_33585);var inst_33591 = cljs.core.count.call(null,inst_33589);var inst_33564 = inst_33590;var inst_33565 = inst_33589;var inst_33566 = inst_33591;var inst_33567 = (0);var state_33628__$1 = (function (){var statearr_33659 = state_33628;(statearr_33659[(19)] = inst_33564);
(statearr_33659[(9)] = inst_33565);
(statearr_33659[(10)] = inst_33567);
(statearr_33659[(20)] = inst_33566);
return statearr_33659;
})();var statearr_33660_33733 = state_33628__$1;(statearr_33660_33733[(2)] = null);
(statearr_33660_33733[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (41)))
{var inst_33594 = (state_33628[(25)]);var inst_33496 = (state_33628[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33628,(40),Object,null,(39));var inst_33601 = cljs.core.async.put_BANG_.call(null,inst_33594,inst_33496,done);var state_33628__$1 = state_33628;var statearr_33661_33734 = state_33628__$1;(statearr_33661_33734[(2)] = inst_33601);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33628__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (43)))
{var state_33628__$1 = state_33628;var statearr_33662_33735 = state_33628__$1;(statearr_33662_33735[(2)] = null);
(statearr_33662_33735[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (29)))
{var inst_33612 = (state_33628[(2)]);var state_33628__$1 = state_33628;var statearr_33663_33736 = state_33628__$1;(statearr_33663_33736[(2)] = inst_33612);
(statearr_33663_33736[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (44)))
{var inst_33621 = (state_33628[(2)]);var state_33628__$1 = (function (){var statearr_33664 = state_33628;(statearr_33664[(29)] = inst_33621);
return statearr_33664;
})();var statearr_33665_33737 = state_33628__$1;(statearr_33665_33737[(2)] = null);
(statearr_33665_33737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (6)))
{var inst_33556 = (state_33628[(30)]);var inst_33555 = cljs.core.deref.call(null,cs);var inst_33556__$1 = cljs.core.keys.call(null,inst_33555);var inst_33557 = cljs.core.count.call(null,inst_33556__$1);var inst_33558 = cljs.core.reset_BANG_.call(null,dctr,inst_33557);var inst_33563 = cljs.core.seq.call(null,inst_33556__$1);var inst_33564 = inst_33563;var inst_33565 = null;var inst_33566 = (0);var inst_33567 = (0);var state_33628__$1 = (function (){var statearr_33666 = state_33628;(statearr_33666[(19)] = inst_33564);
(statearr_33666[(31)] = inst_33558);
(statearr_33666[(9)] = inst_33565);
(statearr_33666[(10)] = inst_33567);
(statearr_33666[(20)] = inst_33566);
(statearr_33666[(30)] = inst_33556__$1);
return statearr_33666;
})();var statearr_33667_33738 = state_33628__$1;(statearr_33667_33738[(2)] = null);
(statearr_33667_33738[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (28)))
{var inst_33564 = (state_33628[(19)]);var inst_33585 = (state_33628[(17)]);var inst_33585__$1 = cljs.core.seq.call(null,inst_33564);var state_33628__$1 = (function (){var statearr_33668 = state_33628;(statearr_33668[(17)] = inst_33585__$1);
return statearr_33668;
})();if(inst_33585__$1)
{var statearr_33669_33739 = state_33628__$1;(statearr_33669_33739[(1)] = (33));
} else
{var statearr_33670_33740 = state_33628__$1;(statearr_33670_33740[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (25)))
{var inst_33567 = (state_33628[(10)]);var inst_33566 = (state_33628[(20)]);var inst_33569 = (inst_33567 < inst_33566);var inst_33570 = inst_33569;var state_33628__$1 = state_33628;if(cljs.core.truth_(inst_33570))
{var statearr_33671_33741 = state_33628__$1;(statearr_33671_33741[(1)] = (27));
} else
{var statearr_33672_33742 = state_33628__$1;(statearr_33672_33742[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (34)))
{var state_33628__$1 = state_33628;var statearr_33673_33743 = state_33628__$1;(statearr_33673_33743[(2)] = null);
(statearr_33673_33743[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (17)))
{var state_33628__$1 = state_33628;var statearr_33674_33744 = state_33628__$1;(statearr_33674_33744[(2)] = null);
(statearr_33674_33744[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (3)))
{var inst_33626 = (state_33628[(2)]);var state_33628__$1 = state_33628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33628__$1,inst_33626);
} else
{if((state_val_33629 === (12)))
{var inst_33551 = (state_33628[(2)]);var state_33628__$1 = state_33628;var statearr_33675_33745 = state_33628__$1;(statearr_33675_33745[(2)] = inst_33551);
(statearr_33675_33745[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (2)))
{var state_33628__$1 = state_33628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33628__$1,(4),ch);
} else
{if((state_val_33629 === (23)))
{var state_33628__$1 = state_33628;var statearr_33676_33746 = state_33628__$1;(statearr_33676_33746[(2)] = null);
(statearr_33676_33746[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (35)))
{var inst_33610 = (state_33628[(2)]);var state_33628__$1 = state_33628;var statearr_33677_33747 = state_33628__$1;(statearr_33677_33747[(2)] = inst_33610);
(statearr_33677_33747[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (19)))
{var inst_33525 = (state_33628[(7)]);var inst_33529 = cljs.core.chunk_first.call(null,inst_33525);var inst_33530 = cljs.core.chunk_rest.call(null,inst_33525);var inst_33531 = cljs.core.count.call(null,inst_33529);var inst_33505 = inst_33530;var inst_33506 = inst_33529;var inst_33507 = inst_33531;var inst_33508 = (0);var state_33628__$1 = (function (){var statearr_33678 = state_33628;(statearr_33678[(12)] = inst_33507);
(statearr_33678[(13)] = inst_33506);
(statearr_33678[(14)] = inst_33508);
(statearr_33678[(15)] = inst_33505);
return statearr_33678;
})();var statearr_33679_33748 = state_33628__$1;(statearr_33679_33748[(2)] = null);
(statearr_33679_33748[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (11)))
{var inst_33525 = (state_33628[(7)]);var inst_33505 = (state_33628[(15)]);var inst_33525__$1 = cljs.core.seq.call(null,inst_33505);var state_33628__$1 = (function (){var statearr_33680 = state_33628;(statearr_33680[(7)] = inst_33525__$1);
return statearr_33680;
})();if(inst_33525__$1)
{var statearr_33681_33749 = state_33628__$1;(statearr_33681_33749[(1)] = (16));
} else
{var statearr_33682_33750 = state_33628__$1;(statearr_33682_33750[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (9)))
{var inst_33553 = (state_33628[(2)]);var state_33628__$1 = state_33628;var statearr_33683_33751 = state_33628__$1;(statearr_33683_33751[(2)] = inst_33553);
(statearr_33683_33751[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (5)))
{var inst_33503 = cljs.core.deref.call(null,cs);var inst_33504 = cljs.core.seq.call(null,inst_33503);var inst_33505 = inst_33504;var inst_33506 = null;var inst_33507 = (0);var inst_33508 = (0);var state_33628__$1 = (function (){var statearr_33684 = state_33628;(statearr_33684[(12)] = inst_33507);
(statearr_33684[(13)] = inst_33506);
(statearr_33684[(14)] = inst_33508);
(statearr_33684[(15)] = inst_33505);
return statearr_33684;
})();var statearr_33685_33752 = state_33628__$1;(statearr_33685_33752[(2)] = null);
(statearr_33685_33752[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (14)))
{var state_33628__$1 = state_33628;var statearr_33686_33753 = state_33628__$1;(statearr_33686_33753[(2)] = null);
(statearr_33686_33753[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (45)))
{var inst_33618 = (state_33628[(2)]);var state_33628__$1 = state_33628;var statearr_33687_33754 = state_33628__$1;(statearr_33687_33754[(2)] = inst_33618);
(statearr_33687_33754[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (26)))
{var inst_33556 = (state_33628[(30)]);var inst_33614 = (state_33628[(2)]);var inst_33615 = cljs.core.seq.call(null,inst_33556);var state_33628__$1 = (function (){var statearr_33688 = state_33628;(statearr_33688[(32)] = inst_33614);
return statearr_33688;
})();if(inst_33615)
{var statearr_33689_33755 = state_33628__$1;(statearr_33689_33755[(1)] = (42));
} else
{var statearr_33690_33756 = state_33628__$1;(statearr_33690_33756[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (16)))
{var inst_33525 = (state_33628[(7)]);var inst_33527 = cljs.core.chunked_seq_QMARK_.call(null,inst_33525);var state_33628__$1 = state_33628;if(inst_33527)
{var statearr_33694_33757 = state_33628__$1;(statearr_33694_33757[(1)] = (19));
} else
{var statearr_33695_33758 = state_33628__$1;(statearr_33695_33758[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (38)))
{var inst_33607 = (state_33628[(2)]);var state_33628__$1 = state_33628;var statearr_33696_33759 = state_33628__$1;(statearr_33696_33759[(2)] = inst_33607);
(statearr_33696_33759[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (30)))
{var inst_33564 = (state_33628[(19)]);var inst_33565 = (state_33628[(9)]);var inst_33567 = (state_33628[(10)]);var inst_33566 = (state_33628[(20)]);var inst_33581 = (state_33628[(2)]);var inst_33582 = (inst_33567 + (1));var tmp33691 = inst_33564;var tmp33692 = inst_33565;var tmp33693 = inst_33566;var inst_33564__$1 = tmp33691;var inst_33565__$1 = tmp33692;var inst_33566__$1 = tmp33693;var inst_33567__$1 = inst_33582;var state_33628__$1 = (function (){var statearr_33697 = state_33628;(statearr_33697[(33)] = inst_33581);
(statearr_33697[(19)] = inst_33564__$1);
(statearr_33697[(9)] = inst_33565__$1);
(statearr_33697[(10)] = inst_33567__$1);
(statearr_33697[(20)] = inst_33566__$1);
return statearr_33697;
})();var statearr_33698_33760 = state_33628__$1;(statearr_33698_33760[(2)] = null);
(statearr_33698_33760[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (10)))
{var inst_33506 = (state_33628[(13)]);var inst_33508 = (state_33628[(14)]);var inst_33514 = cljs.core._nth.call(null,inst_33506,inst_33508);var inst_33515 = cljs.core.nth.call(null,inst_33514,(0),null);var inst_33516 = cljs.core.nth.call(null,inst_33514,(1),null);var state_33628__$1 = (function (){var statearr_33699 = state_33628;(statearr_33699[(28)] = inst_33515);
return statearr_33699;
})();if(cljs.core.truth_(inst_33516))
{var statearr_33700_33761 = state_33628__$1;(statearr_33700_33761[(1)] = (13));
} else
{var statearr_33701_33762 = state_33628__$1;(statearr_33701_33762[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (18)))
{var inst_33549 = (state_33628[(2)]);var state_33628__$1 = state_33628;var statearr_33702_33763 = state_33628__$1;(statearr_33702_33763[(2)] = inst_33549);
(statearr_33702_33763[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (42)))
{var state_33628__$1 = state_33628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33628__$1,(45),dchan);
} else
{if((state_val_33629 === (37)))
{var inst_33585 = (state_33628[(17)]);var inst_33594 = cljs.core.first.call(null,inst_33585);var state_33628__$1 = (function (){var statearr_33703 = state_33628;(statearr_33703[(25)] = inst_33594);
return statearr_33703;
})();var statearr_33704_33764 = state_33628__$1;(statearr_33704_33764[(2)] = null);
(statearr_33704_33764[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33629 === (8)))
{var inst_33507 = (state_33628[(12)]);var inst_33508 = (state_33628[(14)]);var inst_33510 = (inst_33508 < inst_33507);var inst_33511 = inst_33510;var state_33628__$1 = state_33628;if(cljs.core.truth_(inst_33511))
{var statearr_33705_33765 = state_33628__$1;(statearr_33705_33765[(1)] = (10));
} else
{var statearr_33706_33766 = state_33628__$1;(statearr_33706_33766[(1)] = (11));
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
});})(c__5708__auto___33714,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___33714,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_33710 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33710[(0)] = state_machine__5694__auto__);
(statearr_33710[(1)] = (1));
return statearr_33710;
});
var state_machine__5694__auto____1 = (function (state_33628){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_33628);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e33711){if((e33711 instanceof Object))
{var ex__5697__auto__ = e33711;var statearr_33712_33767 = state_33628;(statearr_33712_33767[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33628);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33711;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__33768 = state_33628;
state_33628 = G__33768;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_33628){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_33628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___33714,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_33713 = f__5709__auto__.call(null);(statearr_33713[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___33714);
return statearr_33713;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___33714,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj33770 = {};return obj33770;
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
;var m = (function (){if(typeof cljs.core.async.t33880 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33880 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta33881){
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
this.meta33881 = meta33881;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33880.cljs$lang$type = true;
cljs.core.async.t33880.cljs$lang$ctorStr = "cljs.core.async/t33880";
cljs.core.async.t33880.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t33880");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33880.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33880.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33880.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33880.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33880.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33880.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33880.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33880.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33880.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33882){var self__ = this;
var _33882__$1 = this;return self__.meta33881;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33880.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33882,meta33881__$1){var self__ = this;
var _33882__$1 = this;return (new cljs.core.async.t33880(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta33881__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33880 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33880(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33881){return (new cljs.core.async.t33880(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta33881));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33880(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___33989 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___33989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___33989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_33947){var state_val_33948 = (state_33947[(1)]);if((state_val_33948 === (7)))
{var inst_33896 = (state_33947[(7)]);var inst_33901 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33896);var state_33947__$1 = state_33947;var statearr_33949_33990 = state_33947__$1;(statearr_33949_33990[(2)] = inst_33901);
(statearr_33949_33990[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (20)))
{var inst_33911 = (state_33947[(8)]);var state_33947__$1 = state_33947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33947__$1,(23),out,inst_33911);
} else
{if((state_val_33948 === (1)))
{var inst_33886 = (state_33947[(9)]);var inst_33886__$1 = calc_state.call(null);var inst_33887 = cljs.core.seq_QMARK_.call(null,inst_33886__$1);var state_33947__$1 = (function (){var statearr_33950 = state_33947;(statearr_33950[(9)] = inst_33886__$1);
return statearr_33950;
})();if(inst_33887)
{var statearr_33951_33991 = state_33947__$1;(statearr_33951_33991[(1)] = (2));
} else
{var statearr_33952_33992 = state_33947__$1;(statearr_33952_33992[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (4)))
{var inst_33886 = (state_33947[(9)]);var inst_33892 = (state_33947[(2)]);var inst_33893 = cljs.core.get.call(null,inst_33892,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_33894 = cljs.core.get.call(null,inst_33892,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_33895 = cljs.core.get.call(null,inst_33892,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_33896 = inst_33886;var state_33947__$1 = (function (){var statearr_33953 = state_33947;(statearr_33953[(10)] = inst_33893);
(statearr_33953[(11)] = inst_33894);
(statearr_33953[(12)] = inst_33895);
(statearr_33953[(7)] = inst_33896);
return statearr_33953;
})();var statearr_33954_33993 = state_33947__$1;(statearr_33954_33993[(2)] = null);
(statearr_33954_33993[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (15)))
{var state_33947__$1 = state_33947;var statearr_33955_33994 = state_33947__$1;(statearr_33955_33994[(2)] = null);
(statearr_33955_33994[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (21)))
{var state_33947__$1 = state_33947;var statearr_33956_33995 = state_33947__$1;(statearr_33956_33995[(2)] = null);
(statearr_33956_33995[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (13)))
{var inst_33943 = (state_33947[(2)]);var state_33947__$1 = state_33947;var statearr_33957_33996 = state_33947__$1;(statearr_33957_33996[(2)] = inst_33943);
(statearr_33957_33996[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (22)))
{var inst_33904 = (state_33947[(13)]);var inst_33940 = (state_33947[(2)]);var inst_33896 = inst_33904;var state_33947__$1 = (function (){var statearr_33958 = state_33947;(statearr_33958[(14)] = inst_33940);
(statearr_33958[(7)] = inst_33896);
return statearr_33958;
})();var statearr_33959_33997 = state_33947__$1;(statearr_33959_33997[(2)] = null);
(statearr_33959_33997[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (6)))
{var inst_33945 = (state_33947[(2)]);var state_33947__$1 = state_33947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33947__$1,inst_33945);
} else
{if((state_val_33948 === (17)))
{var inst_33926 = (state_33947[(15)]);var state_33947__$1 = state_33947;var statearr_33960_33998 = state_33947__$1;(statearr_33960_33998[(2)] = inst_33926);
(statearr_33960_33998[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (3)))
{var inst_33886 = (state_33947[(9)]);var state_33947__$1 = state_33947;var statearr_33961_33999 = state_33947__$1;(statearr_33961_33999[(2)] = inst_33886);
(statearr_33961_33999[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (12)))
{var inst_33907 = (state_33947[(16)]);var inst_33926 = (state_33947[(15)]);var inst_33912 = (state_33947[(17)]);var inst_33926__$1 = inst_33907.call(null,inst_33912);var state_33947__$1 = (function (){var statearr_33962 = state_33947;(statearr_33962[(15)] = inst_33926__$1);
return statearr_33962;
})();if(cljs.core.truth_(inst_33926__$1))
{var statearr_33963_34000 = state_33947__$1;(statearr_33963_34000[(1)] = (17));
} else
{var statearr_33964_34001 = state_33947__$1;(statearr_33964_34001[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (2)))
{var inst_33886 = (state_33947[(9)]);var inst_33889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33886);var state_33947__$1 = state_33947;var statearr_33965_34002 = state_33947__$1;(statearr_33965_34002[(2)] = inst_33889);
(statearr_33965_34002[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (23)))
{var inst_33937 = (state_33947[(2)]);var state_33947__$1 = state_33947;var statearr_33966_34003 = state_33947__$1;(statearr_33966_34003[(2)] = inst_33937);
(statearr_33966_34003[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (19)))
{var inst_33934 = (state_33947[(2)]);var state_33947__$1 = state_33947;if(cljs.core.truth_(inst_33934))
{var statearr_33967_34004 = state_33947__$1;(statearr_33967_34004[(1)] = (20));
} else
{var statearr_33968_34005 = state_33947__$1;(statearr_33968_34005[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (11)))
{var inst_33911 = (state_33947[(8)]);var inst_33917 = (inst_33911 == null);var state_33947__$1 = state_33947;if(cljs.core.truth_(inst_33917))
{var statearr_33969_34006 = state_33947__$1;(statearr_33969_34006[(1)] = (14));
} else
{var statearr_33970_34007 = state_33947__$1;(statearr_33970_34007[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (9)))
{var inst_33904 = (state_33947[(13)]);var inst_33904__$1 = (state_33947[(2)]);var inst_33905 = cljs.core.get.call(null,inst_33904__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_33906 = cljs.core.get.call(null,inst_33904__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_33907 = cljs.core.get.call(null,inst_33904__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_33947__$1 = (function (){var statearr_33971 = state_33947;(statearr_33971[(16)] = inst_33907);
(statearr_33971[(13)] = inst_33904__$1);
(statearr_33971[(18)] = inst_33906);
return statearr_33971;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33947__$1,(10),inst_33905);
} else
{if((state_val_33948 === (5)))
{var inst_33896 = (state_33947[(7)]);var inst_33899 = cljs.core.seq_QMARK_.call(null,inst_33896);var state_33947__$1 = state_33947;if(inst_33899)
{var statearr_33972_34008 = state_33947__$1;(statearr_33972_34008[(1)] = (7));
} else
{var statearr_33973_34009 = state_33947__$1;(statearr_33973_34009[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (14)))
{var inst_33912 = (state_33947[(17)]);var inst_33919 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33912);var state_33947__$1 = state_33947;var statearr_33974_34010 = state_33947__$1;(statearr_33974_34010[(2)] = inst_33919);
(statearr_33974_34010[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (16)))
{var inst_33922 = (state_33947[(2)]);var inst_33923 = calc_state.call(null);var inst_33896 = inst_33923;var state_33947__$1 = (function (){var statearr_33975 = state_33947;(statearr_33975[(7)] = inst_33896);
(statearr_33975[(19)] = inst_33922);
return statearr_33975;
})();var statearr_33976_34011 = state_33947__$1;(statearr_33976_34011[(2)] = null);
(statearr_33976_34011[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (10)))
{var inst_33911 = (state_33947[(8)]);var inst_33912 = (state_33947[(17)]);var inst_33910 = (state_33947[(2)]);var inst_33911__$1 = cljs.core.nth.call(null,inst_33910,(0),null);var inst_33912__$1 = cljs.core.nth.call(null,inst_33910,(1),null);var inst_33913 = (inst_33911__$1 == null);var inst_33914 = cljs.core._EQ_.call(null,inst_33912__$1,change);var inst_33915 = (inst_33913) || (inst_33914);var state_33947__$1 = (function (){var statearr_33977 = state_33947;(statearr_33977[(8)] = inst_33911__$1);
(statearr_33977[(17)] = inst_33912__$1);
return statearr_33977;
})();if(cljs.core.truth_(inst_33915))
{var statearr_33978_34012 = state_33947__$1;(statearr_33978_34012[(1)] = (11));
} else
{var statearr_33979_34013 = state_33947__$1;(statearr_33979_34013[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (18)))
{var inst_33907 = (state_33947[(16)]);var inst_33906 = (state_33947[(18)]);var inst_33912 = (state_33947[(17)]);var inst_33929 = cljs.core.empty_QMARK_.call(null,inst_33907);var inst_33930 = inst_33906.call(null,inst_33912);var inst_33931 = cljs.core.not.call(null,inst_33930);var inst_33932 = (inst_33929) && (inst_33931);var state_33947__$1 = state_33947;var statearr_33980_34014 = state_33947__$1;(statearr_33980_34014[(2)] = inst_33932);
(statearr_33980_34014[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_33948 === (8)))
{var inst_33896 = (state_33947[(7)]);var state_33947__$1 = state_33947;var statearr_33981_34015 = state_33947__$1;(statearr_33981_34015[(2)] = inst_33896);
(statearr_33981_34015[(1)] = (9));
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
});})(c__5708__auto___33989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___33989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_33985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33985[(0)] = state_machine__5694__auto__);
(statearr_33985[(1)] = (1));
return statearr_33985;
});
var state_machine__5694__auto____1 = (function (state_33947){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_33947);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e33986){if((e33986 instanceof Object))
{var ex__5697__auto__ = e33986;var statearr_33987_34016 = state_33947;(statearr_33987_34016[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33947);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e33986;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34017 = state_33947;
state_33947 = G__34017;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_33947){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_33947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___33989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_33988 = f__5709__auto__.call(null);(statearr_33988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___33989);
return statearr_33988;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___33989,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj34019 = {};return obj34019;
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
return (function (p1__34020_SHARP_){if(cljs.core.truth_(p1__34020_SHARP_.call(null,topic)))
{return p1__34020_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34020_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34145 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34145 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34146){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34146 = meta34146;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34145.cljs$lang$type = true;
cljs.core.async.t34145.cljs$lang$ctorStr = "cljs.core.async/t34145";
cljs.core.async.t34145.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t34145");
});})(mults,ensure_mult))
;
cljs.core.async.t34145.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34145.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34145.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34145.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34145.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34145.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34145.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34147){var self__ = this;
var _34147__$1 = this;return self__.meta34146;
});})(mults,ensure_mult))
;
cljs.core.async.t34145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34147,meta34146__$1){var self__ = this;
var _34147__$1 = this;return (new cljs.core.async.t34145(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34146__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34145 = ((function (mults,ensure_mult){
return (function __GT_t34145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34146){return (new cljs.core.async.t34145(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34146));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34145(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___34269 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34269,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34269,mults,ensure_mult,p){
return (function (state_34221){var state_val_34222 = (state_34221[(1)]);if((state_val_34222 === (7)))
{var inst_34217 = (state_34221[(2)]);var state_34221__$1 = state_34221;var statearr_34223_34270 = state_34221__$1;(statearr_34223_34270[(2)] = inst_34217);
(statearr_34223_34270[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (20)))
{var state_34221__$1 = state_34221;var statearr_34224_34271 = state_34221__$1;(statearr_34224_34271[(2)] = null);
(statearr_34224_34271[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (1)))
{var state_34221__$1 = state_34221;var statearr_34225_34272 = state_34221__$1;(statearr_34225_34272[(2)] = null);
(statearr_34225_34272[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (24)))
{var inst_34200 = (state_34221[(7)]);var inst_34150 = (state_34221[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34221,(23),Object,null,(22));var inst_34207 = cljs.core.async.muxch_STAR_.call(null,inst_34200);var state_34221__$1 = state_34221;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34221__$1,(25),inst_34207,inst_34150);
} else
{if((state_val_34222 === (4)))
{var inst_34150 = (state_34221[(8)]);var inst_34150__$1 = (state_34221[(2)]);var inst_34151 = (inst_34150__$1 == null);var state_34221__$1 = (function (){var statearr_34226 = state_34221;(statearr_34226[(8)] = inst_34150__$1);
return statearr_34226;
})();if(cljs.core.truth_(inst_34151))
{var statearr_34227_34273 = state_34221__$1;(statearr_34227_34273[(1)] = (5));
} else
{var statearr_34228_34274 = state_34221__$1;(statearr_34228_34274[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (15)))
{var inst_34192 = (state_34221[(2)]);var state_34221__$1 = state_34221;var statearr_34229_34275 = state_34221__$1;(statearr_34229_34275[(2)] = inst_34192);
(statearr_34229_34275[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (21)))
{var inst_34214 = (state_34221[(2)]);var state_34221__$1 = (function (){var statearr_34230 = state_34221;(statearr_34230[(9)] = inst_34214);
return statearr_34230;
})();var statearr_34231_34276 = state_34221__$1;(statearr_34231_34276[(2)] = null);
(statearr_34231_34276[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (13)))
{var inst_34174 = (state_34221[(10)]);var inst_34176 = cljs.core.chunked_seq_QMARK_.call(null,inst_34174);var state_34221__$1 = state_34221;if(inst_34176)
{var statearr_34232_34277 = state_34221__$1;(statearr_34232_34277[(1)] = (16));
} else
{var statearr_34233_34278 = state_34221__$1;(statearr_34233_34278[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (22)))
{var inst_34211 = (state_34221[(2)]);var state_34221__$1 = state_34221;var statearr_34234_34279 = state_34221__$1;(statearr_34234_34279[(2)] = inst_34211);
(statearr_34234_34279[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (6)))
{var inst_34198 = (state_34221[(11)]);var inst_34200 = (state_34221[(7)]);var inst_34150 = (state_34221[(8)]);var inst_34198__$1 = topic_fn.call(null,inst_34150);var inst_34199 = cljs.core.deref.call(null,mults);var inst_34200__$1 = cljs.core.get.call(null,inst_34199,inst_34198__$1);var state_34221__$1 = (function (){var statearr_34235 = state_34221;(statearr_34235[(11)] = inst_34198__$1);
(statearr_34235[(7)] = inst_34200__$1);
return statearr_34235;
})();if(cljs.core.truth_(inst_34200__$1))
{var statearr_34236_34280 = state_34221__$1;(statearr_34236_34280[(1)] = (19));
} else
{var statearr_34237_34281 = state_34221__$1;(statearr_34237_34281[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (25)))
{var inst_34209 = (state_34221[(2)]);var state_34221__$1 = state_34221;var statearr_34238_34282 = state_34221__$1;(statearr_34238_34282[(2)] = inst_34209);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34221__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (17)))
{var inst_34174 = (state_34221[(10)]);var inst_34183 = cljs.core.first.call(null,inst_34174);var inst_34184 = cljs.core.async.muxch_STAR_.call(null,inst_34183);var inst_34185 = cljs.core.async.close_BANG_.call(null,inst_34184);var inst_34186 = cljs.core.next.call(null,inst_34174);var inst_34160 = inst_34186;var inst_34161 = null;var inst_34162 = (0);var inst_34163 = (0);var state_34221__$1 = (function (){var statearr_34239 = state_34221;(statearr_34239[(12)] = inst_34160);
(statearr_34239[(13)] = inst_34161);
(statearr_34239[(14)] = inst_34162);
(statearr_34239[(15)] = inst_34163);
(statearr_34239[(16)] = inst_34185);
return statearr_34239;
})();var statearr_34240_34283 = state_34221__$1;(statearr_34240_34283[(2)] = null);
(statearr_34240_34283[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (3)))
{var inst_34219 = (state_34221[(2)]);var state_34221__$1 = state_34221;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34221__$1,inst_34219);
} else
{if((state_val_34222 === (12)))
{var inst_34194 = (state_34221[(2)]);var state_34221__$1 = state_34221;var statearr_34241_34284 = state_34221__$1;(statearr_34241_34284[(2)] = inst_34194);
(statearr_34241_34284[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (2)))
{var state_34221__$1 = state_34221;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34221__$1,(4),ch);
} else
{if((state_val_34222 === (23)))
{var inst_34198 = (state_34221[(11)]);var inst_34202 = (state_34221[(2)]);var inst_34203 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34198);var state_34221__$1 = (function (){var statearr_34242 = state_34221;(statearr_34242[(17)] = inst_34202);
return statearr_34242;
})();var statearr_34243_34285 = state_34221__$1;(statearr_34243_34285[(2)] = inst_34203);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34221__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (19)))
{var state_34221__$1 = state_34221;var statearr_34244_34286 = state_34221__$1;(statearr_34244_34286[(2)] = null);
(statearr_34244_34286[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (11)))
{var inst_34160 = (state_34221[(12)]);var inst_34174 = (state_34221[(10)]);var inst_34174__$1 = cljs.core.seq.call(null,inst_34160);var state_34221__$1 = (function (){var statearr_34245 = state_34221;(statearr_34245[(10)] = inst_34174__$1);
return statearr_34245;
})();if(inst_34174__$1)
{var statearr_34246_34287 = state_34221__$1;(statearr_34246_34287[(1)] = (13));
} else
{var statearr_34247_34288 = state_34221__$1;(statearr_34247_34288[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (9)))
{var inst_34196 = (state_34221[(2)]);var state_34221__$1 = state_34221;var statearr_34248_34289 = state_34221__$1;(statearr_34248_34289[(2)] = inst_34196);
(statearr_34248_34289[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (5)))
{var inst_34157 = cljs.core.deref.call(null,mults);var inst_34158 = cljs.core.vals.call(null,inst_34157);var inst_34159 = cljs.core.seq.call(null,inst_34158);var inst_34160 = inst_34159;var inst_34161 = null;var inst_34162 = (0);var inst_34163 = (0);var state_34221__$1 = (function (){var statearr_34249 = state_34221;(statearr_34249[(12)] = inst_34160);
(statearr_34249[(13)] = inst_34161);
(statearr_34249[(14)] = inst_34162);
(statearr_34249[(15)] = inst_34163);
return statearr_34249;
})();var statearr_34250_34290 = state_34221__$1;(statearr_34250_34290[(2)] = null);
(statearr_34250_34290[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (14)))
{var state_34221__$1 = state_34221;var statearr_34254_34291 = state_34221__$1;(statearr_34254_34291[(2)] = null);
(statearr_34254_34291[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (16)))
{var inst_34174 = (state_34221[(10)]);var inst_34178 = cljs.core.chunk_first.call(null,inst_34174);var inst_34179 = cljs.core.chunk_rest.call(null,inst_34174);var inst_34180 = cljs.core.count.call(null,inst_34178);var inst_34160 = inst_34179;var inst_34161 = inst_34178;var inst_34162 = inst_34180;var inst_34163 = (0);var state_34221__$1 = (function (){var statearr_34255 = state_34221;(statearr_34255[(12)] = inst_34160);
(statearr_34255[(13)] = inst_34161);
(statearr_34255[(14)] = inst_34162);
(statearr_34255[(15)] = inst_34163);
return statearr_34255;
})();var statearr_34256_34292 = state_34221__$1;(statearr_34256_34292[(2)] = null);
(statearr_34256_34292[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (10)))
{var inst_34160 = (state_34221[(12)]);var inst_34161 = (state_34221[(13)]);var inst_34162 = (state_34221[(14)]);var inst_34163 = (state_34221[(15)]);var inst_34168 = cljs.core._nth.call(null,inst_34161,inst_34163);var inst_34169 = cljs.core.async.muxch_STAR_.call(null,inst_34168);var inst_34170 = cljs.core.async.close_BANG_.call(null,inst_34169);var inst_34171 = (inst_34163 + (1));var tmp34251 = inst_34160;var tmp34252 = inst_34161;var tmp34253 = inst_34162;var inst_34160__$1 = tmp34251;var inst_34161__$1 = tmp34252;var inst_34162__$1 = tmp34253;var inst_34163__$1 = inst_34171;var state_34221__$1 = (function (){var statearr_34257 = state_34221;(statearr_34257[(18)] = inst_34170);
(statearr_34257[(12)] = inst_34160__$1);
(statearr_34257[(13)] = inst_34161__$1);
(statearr_34257[(14)] = inst_34162__$1);
(statearr_34257[(15)] = inst_34163__$1);
return statearr_34257;
})();var statearr_34258_34293 = state_34221__$1;(statearr_34258_34293[(2)] = null);
(statearr_34258_34293[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (18)))
{var inst_34189 = (state_34221[(2)]);var state_34221__$1 = state_34221;var statearr_34259_34294 = state_34221__$1;(statearr_34259_34294[(2)] = inst_34189);
(statearr_34259_34294[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34222 === (8)))
{var inst_34162 = (state_34221[(14)]);var inst_34163 = (state_34221[(15)]);var inst_34165 = (inst_34163 < inst_34162);var inst_34166 = inst_34165;var state_34221__$1 = state_34221;if(cljs.core.truth_(inst_34166))
{var statearr_34260_34295 = state_34221__$1;(statearr_34260_34295[(1)] = (10));
} else
{var statearr_34261_34296 = state_34221__$1;(statearr_34261_34296[(1)] = (11));
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
});})(c__5708__auto___34269,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___34269,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34265 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34265[(0)] = state_machine__5694__auto__);
(statearr_34265[(1)] = (1));
return statearr_34265;
});
var state_machine__5694__auto____1 = (function (state_34221){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34221);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34266){if((e34266 instanceof Object))
{var ex__5697__auto__ = e34266;var statearr_34267_34297 = state_34221;(statearr_34267_34297[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34221);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34266;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34298 = state_34221;
state_34221 = G__34298;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34221){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34221);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34269,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_34268 = f__5709__auto__.call(null);(statearr_34268[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34269);
return statearr_34268;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34269,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___34435 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34405){var state_val_34406 = (state_34405[(1)]);if((state_val_34406 === (7)))
{var state_34405__$1 = state_34405;var statearr_34407_34436 = state_34405__$1;(statearr_34407_34436[(2)] = null);
(statearr_34407_34436[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (1)))
{var state_34405__$1 = state_34405;var statearr_34408_34437 = state_34405__$1;(statearr_34408_34437[(2)] = null);
(statearr_34408_34437[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (4)))
{var inst_34369 = (state_34405[(7)]);var inst_34371 = (inst_34369 < cnt);var state_34405__$1 = state_34405;if(cljs.core.truth_(inst_34371))
{var statearr_34409_34438 = state_34405__$1;(statearr_34409_34438[(1)] = (6));
} else
{var statearr_34410_34439 = state_34405__$1;(statearr_34410_34439[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (15)))
{var inst_34401 = (state_34405[(2)]);var state_34405__$1 = state_34405;var statearr_34411_34440 = state_34405__$1;(statearr_34411_34440[(2)] = inst_34401);
(statearr_34411_34440[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (13)))
{var inst_34394 = cljs.core.async.close_BANG_.call(null,out);var state_34405__$1 = state_34405;var statearr_34412_34441 = state_34405__$1;(statearr_34412_34441[(2)] = inst_34394);
(statearr_34412_34441[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (6)))
{var state_34405__$1 = state_34405;var statearr_34413_34442 = state_34405__$1;(statearr_34413_34442[(2)] = null);
(statearr_34413_34442[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (3)))
{var inst_34403 = (state_34405[(2)]);var state_34405__$1 = state_34405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34405__$1,inst_34403);
} else
{if((state_val_34406 === (12)))
{var inst_34391 = (state_34405[(8)]);var inst_34391__$1 = (state_34405[(2)]);var inst_34392 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34391__$1);var state_34405__$1 = (function (){var statearr_34414 = state_34405;(statearr_34414[(8)] = inst_34391__$1);
return statearr_34414;
})();if(cljs.core.truth_(inst_34392))
{var statearr_34415_34443 = state_34405__$1;(statearr_34415_34443[(1)] = (13));
} else
{var statearr_34416_34444 = state_34405__$1;(statearr_34416_34444[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (2)))
{var inst_34368 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34369 = (0);var state_34405__$1 = (function (){var statearr_34417 = state_34405;(statearr_34417[(7)] = inst_34369);
(statearr_34417[(9)] = inst_34368);
return statearr_34417;
})();var statearr_34418_34445 = state_34405__$1;(statearr_34418_34445[(2)] = null);
(statearr_34418_34445[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (11)))
{var inst_34369 = (state_34405[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34405,(10),Object,null,(9));var inst_34378 = chs__$1.call(null,inst_34369);var inst_34379 = done.call(null,inst_34369);var inst_34380 = cljs.core.async.take_BANG_.call(null,inst_34378,inst_34379);var state_34405__$1 = state_34405;var statearr_34419_34446 = state_34405__$1;(statearr_34419_34446[(2)] = inst_34380);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34405__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (9)))
{var inst_34369 = (state_34405[(7)]);var inst_34382 = (state_34405[(2)]);var inst_34383 = (inst_34369 + (1));var inst_34369__$1 = inst_34383;var state_34405__$1 = (function (){var statearr_34420 = state_34405;(statearr_34420[(7)] = inst_34369__$1);
(statearr_34420[(10)] = inst_34382);
return statearr_34420;
})();var statearr_34421_34447 = state_34405__$1;(statearr_34421_34447[(2)] = null);
(statearr_34421_34447[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (5)))
{var inst_34389 = (state_34405[(2)]);var state_34405__$1 = (function (){var statearr_34422 = state_34405;(statearr_34422[(11)] = inst_34389);
return statearr_34422;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34405__$1,(12),dchan);
} else
{if((state_val_34406 === (14)))
{var inst_34391 = (state_34405[(8)]);var inst_34396 = cljs.core.apply.call(null,f,inst_34391);var state_34405__$1 = state_34405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34405__$1,(16),out,inst_34396);
} else
{if((state_val_34406 === (16)))
{var inst_34398 = (state_34405[(2)]);var state_34405__$1 = (function (){var statearr_34423 = state_34405;(statearr_34423[(12)] = inst_34398);
return statearr_34423;
})();var statearr_34424_34448 = state_34405__$1;(statearr_34424_34448[(2)] = null);
(statearr_34424_34448[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (10)))
{var inst_34373 = (state_34405[(2)]);var inst_34374 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34405__$1 = (function (){var statearr_34425 = state_34405;(statearr_34425[(13)] = inst_34373);
return statearr_34425;
})();var statearr_34426_34449 = state_34405__$1;(statearr_34426_34449[(2)] = inst_34374);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34405__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34406 === (8)))
{var inst_34387 = (state_34405[(2)]);var state_34405__$1 = state_34405;var statearr_34427_34450 = state_34405__$1;(statearr_34427_34450[(2)] = inst_34387);
(statearr_34427_34450[(1)] = (5));
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
});})(c__5708__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34431[(0)] = state_machine__5694__auto__);
(statearr_34431[(1)] = (1));
return statearr_34431;
});
var state_machine__5694__auto____1 = (function (state_34405){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34405);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34432){if((e34432 instanceof Object))
{var ex__5697__auto__ = e34432;var statearr_34433_34451 = state_34405;(statearr_34433_34451[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34405);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34432;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34452 = state_34405;
state_34405 = G__34452;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34405){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_34434 = f__5709__auto__.call(null);(statearr_34434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34435);
return statearr_34434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34435,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___34560 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34560,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34560,out){
return (function (state_34536){var state_val_34537 = (state_34536[(1)]);if((state_val_34537 === (7)))
{var inst_34515 = (state_34536[(7)]);var inst_34516 = (state_34536[(8)]);var inst_34515__$1 = (state_34536[(2)]);var inst_34516__$1 = cljs.core.nth.call(null,inst_34515__$1,(0),null);var inst_34517 = cljs.core.nth.call(null,inst_34515__$1,(1),null);var inst_34518 = (inst_34516__$1 == null);var state_34536__$1 = (function (){var statearr_34538 = state_34536;(statearr_34538[(7)] = inst_34515__$1);
(statearr_34538[(9)] = inst_34517);
(statearr_34538[(8)] = inst_34516__$1);
return statearr_34538;
})();if(cljs.core.truth_(inst_34518))
{var statearr_34539_34561 = state_34536__$1;(statearr_34539_34561[(1)] = (8));
} else
{var statearr_34540_34562 = state_34536__$1;(statearr_34540_34562[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34537 === (1)))
{var inst_34507 = cljs.core.vec.call(null,chs);var inst_34508 = inst_34507;var state_34536__$1 = (function (){var statearr_34541 = state_34536;(statearr_34541[(10)] = inst_34508);
return statearr_34541;
})();var statearr_34542_34563 = state_34536__$1;(statearr_34542_34563[(2)] = null);
(statearr_34542_34563[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34537 === (4)))
{var inst_34508 = (state_34536[(10)]);var state_34536__$1 = state_34536;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34536__$1,(7),inst_34508);
} else
{if((state_val_34537 === (6)))
{var inst_34532 = (state_34536[(2)]);var state_34536__$1 = state_34536;var statearr_34543_34564 = state_34536__$1;(statearr_34543_34564[(2)] = inst_34532);
(statearr_34543_34564[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34537 === (3)))
{var inst_34534 = (state_34536[(2)]);var state_34536__$1 = state_34536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34536__$1,inst_34534);
} else
{if((state_val_34537 === (2)))
{var inst_34508 = (state_34536[(10)]);var inst_34510 = cljs.core.count.call(null,inst_34508);var inst_34511 = (inst_34510 > (0));var state_34536__$1 = state_34536;if(cljs.core.truth_(inst_34511))
{var statearr_34545_34565 = state_34536__$1;(statearr_34545_34565[(1)] = (4));
} else
{var statearr_34546_34566 = state_34536__$1;(statearr_34546_34566[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34537 === (11)))
{var inst_34508 = (state_34536[(10)]);var inst_34525 = (state_34536[(2)]);var tmp34544 = inst_34508;var inst_34508__$1 = tmp34544;var state_34536__$1 = (function (){var statearr_34547 = state_34536;(statearr_34547[(11)] = inst_34525);
(statearr_34547[(10)] = inst_34508__$1);
return statearr_34547;
})();var statearr_34548_34567 = state_34536__$1;(statearr_34548_34567[(2)] = null);
(statearr_34548_34567[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34537 === (9)))
{var inst_34516 = (state_34536[(8)]);var state_34536__$1 = state_34536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34536__$1,(11),out,inst_34516);
} else
{if((state_val_34537 === (5)))
{var inst_34530 = cljs.core.async.close_BANG_.call(null,out);var state_34536__$1 = state_34536;var statearr_34549_34568 = state_34536__$1;(statearr_34549_34568[(2)] = inst_34530);
(statearr_34549_34568[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34537 === (10)))
{var inst_34528 = (state_34536[(2)]);var state_34536__$1 = state_34536;var statearr_34550_34569 = state_34536__$1;(statearr_34550_34569[(2)] = inst_34528);
(statearr_34550_34569[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34537 === (8)))
{var inst_34515 = (state_34536[(7)]);var inst_34517 = (state_34536[(9)]);var inst_34516 = (state_34536[(8)]);var inst_34508 = (state_34536[(10)]);var inst_34520 = (function (){var c = inst_34517;var v = inst_34516;var vec__34513 = inst_34515;var cs = inst_34508;return ((function (c,v,vec__34513,cs,inst_34515,inst_34517,inst_34516,inst_34508,state_val_34537,c__5708__auto___34560,out){
return (function (p1__34453_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34453_SHARP_);
});
;})(c,v,vec__34513,cs,inst_34515,inst_34517,inst_34516,inst_34508,state_val_34537,c__5708__auto___34560,out))
})();var inst_34521 = cljs.core.filterv.call(null,inst_34520,inst_34508);var inst_34508__$1 = inst_34521;var state_34536__$1 = (function (){var statearr_34551 = state_34536;(statearr_34551[(10)] = inst_34508__$1);
return statearr_34551;
})();var statearr_34552_34570 = state_34536__$1;(statearr_34552_34570[(2)] = null);
(statearr_34552_34570[(1)] = (2));
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
});})(c__5708__auto___34560,out))
;return ((function (switch__5693__auto__,c__5708__auto___34560,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34556 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34556[(0)] = state_machine__5694__auto__);
(statearr_34556[(1)] = (1));
return statearr_34556;
});
var state_machine__5694__auto____1 = (function (state_34536){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34536);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34557){if((e34557 instanceof Object))
{var ex__5697__auto__ = e34557;var statearr_34558_34571 = state_34536;(statearr_34558_34571[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34536);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34557;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34572 = state_34536;
state_34536 = G__34572;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34536){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34560,out))
})();var state__5710__auto__ = (function (){var statearr_34559 = f__5709__auto__.call(null);(statearr_34559[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34560);
return statearr_34559;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34560,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___34665 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34665,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34665,out){
return (function (state_34642){var state_val_34643 = (state_34642[(1)]);if((state_val_34643 === (7)))
{var inst_34624 = (state_34642[(7)]);var inst_34624__$1 = (state_34642[(2)]);var inst_34625 = (inst_34624__$1 == null);var inst_34626 = cljs.core.not.call(null,inst_34625);var state_34642__$1 = (function (){var statearr_34644 = state_34642;(statearr_34644[(7)] = inst_34624__$1);
return statearr_34644;
})();if(inst_34626)
{var statearr_34645_34666 = state_34642__$1;(statearr_34645_34666[(1)] = (8));
} else
{var statearr_34646_34667 = state_34642__$1;(statearr_34646_34667[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34643 === (1)))
{var inst_34619 = (0);var state_34642__$1 = (function (){var statearr_34647 = state_34642;(statearr_34647[(8)] = inst_34619);
return statearr_34647;
})();var statearr_34648_34668 = state_34642__$1;(statearr_34648_34668[(2)] = null);
(statearr_34648_34668[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34643 === (4)))
{var state_34642__$1 = state_34642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34642__$1,(7),ch);
} else
{if((state_val_34643 === (6)))
{var inst_34637 = (state_34642[(2)]);var state_34642__$1 = state_34642;var statearr_34649_34669 = state_34642__$1;(statearr_34649_34669[(2)] = inst_34637);
(statearr_34649_34669[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34643 === (3)))
{var inst_34639 = (state_34642[(2)]);var inst_34640 = cljs.core.async.close_BANG_.call(null,out);var state_34642__$1 = (function (){var statearr_34650 = state_34642;(statearr_34650[(9)] = inst_34639);
return statearr_34650;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34642__$1,inst_34640);
} else
{if((state_val_34643 === (2)))
{var inst_34619 = (state_34642[(8)]);var inst_34621 = (inst_34619 < n);var state_34642__$1 = state_34642;if(cljs.core.truth_(inst_34621))
{var statearr_34651_34670 = state_34642__$1;(statearr_34651_34670[(1)] = (4));
} else
{var statearr_34652_34671 = state_34642__$1;(statearr_34652_34671[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34643 === (11)))
{var inst_34619 = (state_34642[(8)]);var inst_34629 = (state_34642[(2)]);var inst_34630 = (inst_34619 + (1));var inst_34619__$1 = inst_34630;var state_34642__$1 = (function (){var statearr_34653 = state_34642;(statearr_34653[(8)] = inst_34619__$1);
(statearr_34653[(10)] = inst_34629);
return statearr_34653;
})();var statearr_34654_34672 = state_34642__$1;(statearr_34654_34672[(2)] = null);
(statearr_34654_34672[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34643 === (9)))
{var state_34642__$1 = state_34642;var statearr_34655_34673 = state_34642__$1;(statearr_34655_34673[(2)] = null);
(statearr_34655_34673[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34643 === (5)))
{var state_34642__$1 = state_34642;var statearr_34656_34674 = state_34642__$1;(statearr_34656_34674[(2)] = null);
(statearr_34656_34674[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34643 === (10)))
{var inst_34634 = (state_34642[(2)]);var state_34642__$1 = state_34642;var statearr_34657_34675 = state_34642__$1;(statearr_34657_34675[(2)] = inst_34634);
(statearr_34657_34675[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34643 === (8)))
{var inst_34624 = (state_34642[(7)]);var state_34642__$1 = state_34642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34642__$1,(11),out,inst_34624);
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
});})(c__5708__auto___34665,out))
;return ((function (switch__5693__auto__,c__5708__auto___34665,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34661 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34661[(0)] = state_machine__5694__auto__);
(statearr_34661[(1)] = (1));
return statearr_34661;
});
var state_machine__5694__auto____1 = (function (state_34642){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34642);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34662){if((e34662 instanceof Object))
{var ex__5697__auto__ = e34662;var statearr_34663_34676 = state_34642;(statearr_34663_34676[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34642);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34662;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34677 = state_34642;
state_34642 = G__34677;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34642){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34665,out))
})();var state__5710__auto__ = (function (){var statearr_34664 = f__5709__auto__.call(null);(statearr_34664[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34665);
return statearr_34664;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34665,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___34774 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34774,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34774,out){
return (function (state_34749){var state_val_34750 = (state_34749[(1)]);if((state_val_34750 === (7)))
{var inst_34744 = (state_34749[(2)]);var state_34749__$1 = state_34749;var statearr_34751_34775 = state_34749__$1;(statearr_34751_34775[(2)] = inst_34744);
(statearr_34751_34775[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34750 === (1)))
{var inst_34726 = null;var state_34749__$1 = (function (){var statearr_34752 = state_34749;(statearr_34752[(7)] = inst_34726);
return statearr_34752;
})();var statearr_34753_34776 = state_34749__$1;(statearr_34753_34776[(2)] = null);
(statearr_34753_34776[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34750 === (4)))
{var inst_34729 = (state_34749[(8)]);var inst_34729__$1 = (state_34749[(2)]);var inst_34730 = (inst_34729__$1 == null);var inst_34731 = cljs.core.not.call(null,inst_34730);var state_34749__$1 = (function (){var statearr_34754 = state_34749;(statearr_34754[(8)] = inst_34729__$1);
return statearr_34754;
})();if(inst_34731)
{var statearr_34755_34777 = state_34749__$1;(statearr_34755_34777[(1)] = (5));
} else
{var statearr_34756_34778 = state_34749__$1;(statearr_34756_34778[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34750 === (6)))
{var state_34749__$1 = state_34749;var statearr_34757_34779 = state_34749__$1;(statearr_34757_34779[(2)] = null);
(statearr_34757_34779[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34750 === (3)))
{var inst_34746 = (state_34749[(2)]);var inst_34747 = cljs.core.async.close_BANG_.call(null,out);var state_34749__$1 = (function (){var statearr_34758 = state_34749;(statearr_34758[(9)] = inst_34746);
return statearr_34758;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34749__$1,inst_34747);
} else
{if((state_val_34750 === (2)))
{var state_34749__$1 = state_34749;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34749__$1,(4),ch);
} else
{if((state_val_34750 === (11)))
{var inst_34729 = (state_34749[(8)]);var inst_34738 = (state_34749[(2)]);var inst_34726 = inst_34729;var state_34749__$1 = (function (){var statearr_34759 = state_34749;(statearr_34759[(7)] = inst_34726);
(statearr_34759[(10)] = inst_34738);
return statearr_34759;
})();var statearr_34760_34780 = state_34749__$1;(statearr_34760_34780[(2)] = null);
(statearr_34760_34780[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34750 === (9)))
{var inst_34729 = (state_34749[(8)]);var state_34749__$1 = state_34749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34749__$1,(11),out,inst_34729);
} else
{if((state_val_34750 === (5)))
{var inst_34726 = (state_34749[(7)]);var inst_34729 = (state_34749[(8)]);var inst_34733 = cljs.core._EQ_.call(null,inst_34729,inst_34726);var state_34749__$1 = state_34749;if(inst_34733)
{var statearr_34762_34781 = state_34749__$1;(statearr_34762_34781[(1)] = (8));
} else
{var statearr_34763_34782 = state_34749__$1;(statearr_34763_34782[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34750 === (10)))
{var inst_34741 = (state_34749[(2)]);var state_34749__$1 = state_34749;var statearr_34764_34783 = state_34749__$1;(statearr_34764_34783[(2)] = inst_34741);
(statearr_34764_34783[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34750 === (8)))
{var inst_34726 = (state_34749[(7)]);var tmp34761 = inst_34726;var inst_34726__$1 = tmp34761;var state_34749__$1 = (function (){var statearr_34765 = state_34749;(statearr_34765[(7)] = inst_34726__$1);
return statearr_34765;
})();var statearr_34766_34784 = state_34749__$1;(statearr_34766_34784[(2)] = null);
(statearr_34766_34784[(1)] = (2));
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
});})(c__5708__auto___34774,out))
;return ((function (switch__5693__auto__,c__5708__auto___34774,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34770 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34770[(0)] = state_machine__5694__auto__);
(statearr_34770[(1)] = (1));
return statearr_34770;
});
var state_machine__5694__auto____1 = (function (state_34749){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34771){if((e34771 instanceof Object))
{var ex__5697__auto__ = e34771;var statearr_34772_34785 = state_34749;(statearr_34772_34785[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34749);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34771;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34786 = state_34749;
state_34749 = G__34786;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34749){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34774,out))
})();var state__5710__auto__ = (function (){var statearr_34773 = f__5709__auto__.call(null);(statearr_34773[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34774);
return statearr_34773;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34774,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___34921 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___34921,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___34921,out){
return (function (state_34891){var state_val_34892 = (state_34891[(1)]);if((state_val_34892 === (7)))
{var inst_34887 = (state_34891[(2)]);var state_34891__$1 = state_34891;var statearr_34893_34922 = state_34891__$1;(statearr_34893_34922[(2)] = inst_34887);
(statearr_34893_34922[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (1)))
{var inst_34854 = (new Array(n));var inst_34855 = inst_34854;var inst_34856 = (0);var state_34891__$1 = (function (){var statearr_34894 = state_34891;(statearr_34894[(7)] = inst_34856);
(statearr_34894[(8)] = inst_34855);
return statearr_34894;
})();var statearr_34895_34923 = state_34891__$1;(statearr_34895_34923[(2)] = null);
(statearr_34895_34923[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (4)))
{var inst_34859 = (state_34891[(9)]);var inst_34859__$1 = (state_34891[(2)]);var inst_34860 = (inst_34859__$1 == null);var inst_34861 = cljs.core.not.call(null,inst_34860);var state_34891__$1 = (function (){var statearr_34896 = state_34891;(statearr_34896[(9)] = inst_34859__$1);
return statearr_34896;
})();if(inst_34861)
{var statearr_34897_34924 = state_34891__$1;(statearr_34897_34924[(1)] = (5));
} else
{var statearr_34898_34925 = state_34891__$1;(statearr_34898_34925[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (15)))
{var inst_34881 = (state_34891[(2)]);var state_34891__$1 = state_34891;var statearr_34899_34926 = state_34891__$1;(statearr_34899_34926[(2)] = inst_34881);
(statearr_34899_34926[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (13)))
{var state_34891__$1 = state_34891;var statearr_34900_34927 = state_34891__$1;(statearr_34900_34927[(2)] = null);
(statearr_34900_34927[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (6)))
{var inst_34856 = (state_34891[(7)]);var inst_34877 = (inst_34856 > (0));var state_34891__$1 = state_34891;if(cljs.core.truth_(inst_34877))
{var statearr_34901_34928 = state_34891__$1;(statearr_34901_34928[(1)] = (12));
} else
{var statearr_34902_34929 = state_34891__$1;(statearr_34902_34929[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (3)))
{var inst_34889 = (state_34891[(2)]);var state_34891__$1 = state_34891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34891__$1,inst_34889);
} else
{if((state_val_34892 === (12)))
{var inst_34855 = (state_34891[(8)]);var inst_34879 = cljs.core.vec.call(null,inst_34855);var state_34891__$1 = state_34891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34891__$1,(15),out,inst_34879);
} else
{if((state_val_34892 === (2)))
{var state_34891__$1 = state_34891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34891__$1,(4),ch);
} else
{if((state_val_34892 === (11)))
{var inst_34871 = (state_34891[(2)]);var inst_34872 = (new Array(n));var inst_34855 = inst_34872;var inst_34856 = (0);var state_34891__$1 = (function (){var statearr_34903 = state_34891;(statearr_34903[(7)] = inst_34856);
(statearr_34903[(10)] = inst_34871);
(statearr_34903[(8)] = inst_34855);
return statearr_34903;
})();var statearr_34904_34930 = state_34891__$1;(statearr_34904_34930[(2)] = null);
(statearr_34904_34930[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (9)))
{var inst_34855 = (state_34891[(8)]);var inst_34869 = cljs.core.vec.call(null,inst_34855);var state_34891__$1 = state_34891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34891__$1,(11),out,inst_34869);
} else
{if((state_val_34892 === (5)))
{var inst_34856 = (state_34891[(7)]);var inst_34859 = (state_34891[(9)]);var inst_34864 = (state_34891[(11)]);var inst_34855 = (state_34891[(8)]);var inst_34863 = (inst_34855[inst_34856] = inst_34859);var inst_34864__$1 = (inst_34856 + (1));var inst_34865 = (inst_34864__$1 < n);var state_34891__$1 = (function (){var statearr_34905 = state_34891;(statearr_34905[(12)] = inst_34863);
(statearr_34905[(11)] = inst_34864__$1);
return statearr_34905;
})();if(cljs.core.truth_(inst_34865))
{var statearr_34906_34931 = state_34891__$1;(statearr_34906_34931[(1)] = (8));
} else
{var statearr_34907_34932 = state_34891__$1;(statearr_34907_34932[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (14)))
{var inst_34884 = (state_34891[(2)]);var inst_34885 = cljs.core.async.close_BANG_.call(null,out);var state_34891__$1 = (function (){var statearr_34909 = state_34891;(statearr_34909[(13)] = inst_34884);
return statearr_34909;
})();var statearr_34910_34933 = state_34891__$1;(statearr_34910_34933[(2)] = inst_34885);
(statearr_34910_34933[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (10)))
{var inst_34875 = (state_34891[(2)]);var state_34891__$1 = state_34891;var statearr_34911_34934 = state_34891__$1;(statearr_34911_34934[(2)] = inst_34875);
(statearr_34911_34934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_34892 === (8)))
{var inst_34864 = (state_34891[(11)]);var inst_34855 = (state_34891[(8)]);var tmp34908 = inst_34855;var inst_34855__$1 = tmp34908;var inst_34856 = inst_34864;var state_34891__$1 = (function (){var statearr_34912 = state_34891;(statearr_34912[(7)] = inst_34856);
(statearr_34912[(8)] = inst_34855__$1);
return statearr_34912;
})();var statearr_34913_34935 = state_34891__$1;(statearr_34913_34935[(2)] = null);
(statearr_34913_34935[(1)] = (2));
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
});})(c__5708__auto___34921,out))
;return ((function (switch__5693__auto__,c__5708__auto___34921,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_34917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34917[(0)] = state_machine__5694__auto__);
(statearr_34917[(1)] = (1));
return statearr_34917;
});
var state_machine__5694__auto____1 = (function (state_34891){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_34891);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e34918){if((e34918 instanceof Object))
{var ex__5697__auto__ = e34918;var statearr_34919_34936 = state_34891;(statearr_34919_34936[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34891);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e34918;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__34937 = state_34891;
state_34891 = G__34937;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_34891){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_34891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___34921,out))
})();var state__5710__auto__ = (function (){var statearr_34920 = f__5709__auto__.call(null);(statearr_34920[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___34921);
return statearr_34920;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___34921,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___35080 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___35080,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___35080,out){
return (function (state_35050){var state_val_35051 = (state_35050[(1)]);if((state_val_35051 === (7)))
{var inst_35046 = (state_35050[(2)]);var state_35050__$1 = state_35050;var statearr_35052_35081 = state_35050__$1;(statearr_35052_35081[(2)] = inst_35046);
(statearr_35052_35081[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (1)))
{var inst_35009 = [];var inst_35010 = inst_35009;var inst_35011 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_35050__$1 = (function (){var statearr_35053 = state_35050;(statearr_35053[(7)] = inst_35010);
(statearr_35053[(8)] = inst_35011);
return statearr_35053;
})();var statearr_35054_35082 = state_35050__$1;(statearr_35054_35082[(2)] = null);
(statearr_35054_35082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (4)))
{var inst_35014 = (state_35050[(9)]);var inst_35014__$1 = (state_35050[(2)]);var inst_35015 = (inst_35014__$1 == null);var inst_35016 = cljs.core.not.call(null,inst_35015);var state_35050__$1 = (function (){var statearr_35055 = state_35050;(statearr_35055[(9)] = inst_35014__$1);
return statearr_35055;
})();if(inst_35016)
{var statearr_35056_35083 = state_35050__$1;(statearr_35056_35083[(1)] = (5));
} else
{var statearr_35057_35084 = state_35050__$1;(statearr_35057_35084[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (15)))
{var inst_35040 = (state_35050[(2)]);var state_35050__$1 = state_35050;var statearr_35058_35085 = state_35050__$1;(statearr_35058_35085[(2)] = inst_35040);
(statearr_35058_35085[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (13)))
{var state_35050__$1 = state_35050;var statearr_35059_35086 = state_35050__$1;(statearr_35059_35086[(2)] = null);
(statearr_35059_35086[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (6)))
{var inst_35010 = (state_35050[(7)]);var inst_35035 = inst_35010.length;var inst_35036 = (inst_35035 > (0));var state_35050__$1 = state_35050;if(cljs.core.truth_(inst_35036))
{var statearr_35060_35087 = state_35050__$1;(statearr_35060_35087[(1)] = (12));
} else
{var statearr_35061_35088 = state_35050__$1;(statearr_35061_35088[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (3)))
{var inst_35048 = (state_35050[(2)]);var state_35050__$1 = state_35050;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35050__$1,inst_35048);
} else
{if((state_val_35051 === (12)))
{var inst_35010 = (state_35050[(7)]);var inst_35038 = cljs.core.vec.call(null,inst_35010);var state_35050__$1 = state_35050;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35050__$1,(15),out,inst_35038);
} else
{if((state_val_35051 === (2)))
{var state_35050__$1 = state_35050;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35050__$1,(4),ch);
} else
{if((state_val_35051 === (11)))
{var inst_35018 = (state_35050[(10)]);var inst_35014 = (state_35050[(9)]);var inst_35028 = (state_35050[(2)]);var inst_35029 = [];var inst_35030 = inst_35029.push(inst_35014);var inst_35010 = inst_35029;var inst_35011 = inst_35018;var state_35050__$1 = (function (){var statearr_35062 = state_35050;(statearr_35062[(7)] = inst_35010);
(statearr_35062[(8)] = inst_35011);
(statearr_35062[(11)] = inst_35030);
(statearr_35062[(12)] = inst_35028);
return statearr_35062;
})();var statearr_35063_35089 = state_35050__$1;(statearr_35063_35089[(2)] = null);
(statearr_35063_35089[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (9)))
{var inst_35010 = (state_35050[(7)]);var inst_35026 = cljs.core.vec.call(null,inst_35010);var state_35050__$1 = state_35050;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35050__$1,(11),out,inst_35026);
} else
{if((state_val_35051 === (5)))
{var inst_35018 = (state_35050[(10)]);var inst_35014 = (state_35050[(9)]);var inst_35011 = (state_35050[(8)]);var inst_35018__$1 = f.call(null,inst_35014);var inst_35019 = cljs.core._EQ_.call(null,inst_35018__$1,inst_35011);var inst_35020 = cljs.core.keyword_identical_QMARK_.call(null,inst_35011,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_35021 = (inst_35019) || (inst_35020);var state_35050__$1 = (function (){var statearr_35064 = state_35050;(statearr_35064[(10)] = inst_35018__$1);
return statearr_35064;
})();if(cljs.core.truth_(inst_35021))
{var statearr_35065_35090 = state_35050__$1;(statearr_35065_35090[(1)] = (8));
} else
{var statearr_35066_35091 = state_35050__$1;(statearr_35066_35091[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (14)))
{var inst_35043 = (state_35050[(2)]);var inst_35044 = cljs.core.async.close_BANG_.call(null,out);var state_35050__$1 = (function (){var statearr_35068 = state_35050;(statearr_35068[(13)] = inst_35043);
return statearr_35068;
})();var statearr_35069_35092 = state_35050__$1;(statearr_35069_35092[(2)] = inst_35044);
(statearr_35069_35092[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (10)))
{var inst_35033 = (state_35050[(2)]);var state_35050__$1 = state_35050;var statearr_35070_35093 = state_35050__$1;(statearr_35070_35093[(2)] = inst_35033);
(statearr_35070_35093[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_35051 === (8)))
{var inst_35018 = (state_35050[(10)]);var inst_35014 = (state_35050[(9)]);var inst_35010 = (state_35050[(7)]);var inst_35023 = inst_35010.push(inst_35014);var tmp35067 = inst_35010;var inst_35010__$1 = tmp35067;var inst_35011 = inst_35018;var state_35050__$1 = (function (){var statearr_35071 = state_35050;(statearr_35071[(14)] = inst_35023);
(statearr_35071[(7)] = inst_35010__$1);
(statearr_35071[(8)] = inst_35011);
return statearr_35071;
})();var statearr_35072_35094 = state_35050__$1;(statearr_35072_35094[(2)] = null);
(statearr_35072_35094[(1)] = (2));
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
});})(c__5708__auto___35080,out))
;return ((function (switch__5693__auto__,c__5708__auto___35080,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_35076 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35076[(0)] = state_machine__5694__auto__);
(statearr_35076[(1)] = (1));
return statearr_35076;
});
var state_machine__5694__auto____1 = (function (state_35050){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_35050);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e35077){if((e35077 instanceof Object))
{var ex__5697__auto__ = e35077;var statearr_35078_35095 = state_35050;(statearr_35078_35095[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35050);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e35077;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__35096 = state_35050;
state_35050 = G__35096;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_35050){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_35050);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___35080,out))
})();var state__5710__auto__ = (function (){var statearr_35079 = f__5709__auto__.call(null);(statearr_35079[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___35080);
return statearr_35079;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___35080,out))
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
