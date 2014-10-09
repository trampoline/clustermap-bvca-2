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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t16089 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16089 = (function (f,fn_handler,meta16090){
this.f = f;
this.fn_handler = fn_handler;
this.meta16090 = meta16090;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16089.cljs$lang$type = true;
cljs.core.async.t16089.cljs$lang$ctorStr = "cljs.core.async/t16089";
cljs.core.async.t16089.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16089");
});
cljs.core.async.t16089.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t16089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t16089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16091){var self__ = this;
var _16091__$1 = this;return self__.meta16090;
});
cljs.core.async.t16089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16091,meta16090__$1){var self__ = this;
var _16091__$1 = this;return (new cljs.core.async.t16089(self__.f,self__.fn_handler,meta16090__$1));
});
cljs.core.async.__GT_t16089 = (function __GT_t16089(f__$1,fn_handler__$1,meta16090){return (new cljs.core.async.t16089(f__$1,fn_handler__$1,meta16090));
});
}
return (new cljs.core.async.t16089(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__16093 = buff;if(G__16093)
{var bit__4208__auto__ = null;if(cljs.core.truth_((function (){var or__3558__auto__ = bit__4208__auto__;if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return G__16093.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__16093.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16093);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__16093);
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
{var val_16094 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_16094);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_16094,ret){
return (function (){return fn1.call(null,val_16094);
});})(val_16094,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4414__auto___16095 = n;var x_16096 = (0);while(true){
if((x_16096 < n__4414__auto___16095))
{(a[x_16096] = (0));
{
var G__16097 = (x_16096 + (1));
x_16096 = G__16097;
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
var G__16098 = (i + (1));
i = G__16098;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t16102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16102 = (function (flag,alt_flag,meta16103){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta16103 = meta16103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16102.cljs$lang$type = true;
cljs.core.async.t16102.cljs$lang$ctorStr = "cljs.core.async/t16102";
cljs.core.async.t16102.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16102");
});})(flag))
;
cljs.core.async.t16102.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t16102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t16102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_16104){var self__ = this;
var _16104__$1 = this;return self__.meta16103;
});})(flag))
;
cljs.core.async.t16102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_16104,meta16103__$1){var self__ = this;
var _16104__$1 = this;return (new cljs.core.async.t16102(self__.flag,self__.alt_flag,meta16103__$1));
});})(flag))
;
cljs.core.async.__GT_t16102 = ((function (flag){
return (function __GT_t16102(flag__$1,alt_flag__$1,meta16103){return (new cljs.core.async.t16102(flag__$1,alt_flag__$1,meta16103));
});})(flag))
;
}
return (new cljs.core.async.t16102(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t16108 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16108 = (function (cb,flag,alt_handler,meta16109){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta16109 = meta16109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16108.cljs$lang$type = true;
cljs.core.async.t16108.cljs$lang$ctorStr = "cljs.core.async/t16108";
cljs.core.async.t16108.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16108");
});
cljs.core.async.t16108.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16108.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t16108.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t16108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16110){var self__ = this;
var _16110__$1 = this;return self__.meta16109;
});
cljs.core.async.t16108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16110,meta16109__$1){var self__ = this;
var _16110__$1 = this;return (new cljs.core.async.t16108(self__.cb,self__.flag,self__.alt_handler,meta16109__$1));
});
cljs.core.async.__GT_t16108 = (function __GT_t16108(cb__$1,flag__$1,alt_handler__$1,meta16109){return (new cljs.core.async.t16108(cb__$1,flag__$1,alt_handler__$1,meta16109));
});
}
return (new cljs.core.async.t16108(cb,flag,alt_handler,null));
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
return (function (p1__16111_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__16111_SHARP_,port], null));
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
var G__16112 = (i + (1));
i = G__16112;
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
var alts_BANG___delegate = function (ports,p__16113){var map__16115 = p__16113;var map__16115__$1 = ((cljs.core.seq_QMARK_.call(null,map__16115))?cljs.core.apply.call(null,cljs.core.hash_map,map__16115):map__16115);var opts = map__16115__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__16113 = null;if (arguments.length > 1) {
  p__16113 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__16113);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__16116){
var ports = cljs.core.first(arglist__16116);
var p__16113 = cljs.core.rest(arglist__16116);
return alts_BANG___delegate(ports,p__16113);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t16124 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16124 = (function (ch,f,map_LT_,meta16125){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16125 = meta16125;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16124.cljs$lang$type = true;
cljs.core.async.t16124.cljs$lang$ctorStr = "cljs.core.async/t16124";
cljs.core.async.t16124.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16124");
});
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t16127 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16127 = (function (fn1,_,meta16125,ch,f,map_LT_,meta16128){
this.fn1 = fn1;
this._ = _;
this.meta16125 = meta16125;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta16128 = meta16128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16127.cljs$lang$type = true;
cljs.core.async.t16127.cljs$lang$ctorStr = "cljs.core.async/t16127";
cljs.core.async.t16127.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16127");
});})(___$1))
;
cljs.core.async.t16127.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t16127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16127.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t16127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__16117_SHARP_){return f1.call(null,(((p1__16117_SHARP_ == null))?null:self__.f.call(null,p1__16117_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t16127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_16129){var self__ = this;
var _16129__$1 = this;return self__.meta16128;
});})(___$1))
;
cljs.core.async.t16127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_16129,meta16128__$1){var self__ = this;
var _16129__$1 = this;return (new cljs.core.async.t16127(self__.fn1,self__._,self__.meta16125,self__.ch,self__.f,self__.map_LT_,meta16128__$1));
});})(___$1))
;
cljs.core.async.__GT_t16127 = ((function (___$1){
return (function __GT_t16127(fn1__$1,___$2,meta16125__$1,ch__$2,f__$2,map_LT___$2,meta16128){return (new cljs.core.async.t16127(fn1__$1,___$2,meta16125__$1,ch__$2,f__$2,map_LT___$2,meta16128));
});})(___$1))
;
}
return (new cljs.core.async.t16127(fn1,___$1,self__.meta16125,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16124.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16126){var self__ = this;
var _16126__$1 = this;return self__.meta16125;
});
cljs.core.async.t16124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16126,meta16125__$1){var self__ = this;
var _16126__$1 = this;return (new cljs.core.async.t16124(self__.ch,self__.f,self__.map_LT_,meta16125__$1));
});
cljs.core.async.__GT_t16124 = (function __GT_t16124(ch__$1,f__$1,map_LT___$1,meta16125){return (new cljs.core.async.t16124(ch__$1,f__$1,map_LT___$1,meta16125));
});
}
return (new cljs.core.async.t16124(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t16133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16133 = (function (ch,f,map_GT_,meta16134){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta16134 = meta16134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16133.cljs$lang$type = true;
cljs.core.async.t16133.cljs$lang$ctorStr = "cljs.core.async/t16133";
cljs.core.async.t16133.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16133");
});
cljs.core.async.t16133.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16133.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t16133.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16133.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16133.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16133.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16135){var self__ = this;
var _16135__$1 = this;return self__.meta16134;
});
cljs.core.async.t16133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16135,meta16134__$1){var self__ = this;
var _16135__$1 = this;return (new cljs.core.async.t16133(self__.ch,self__.f,self__.map_GT_,meta16134__$1));
});
cljs.core.async.__GT_t16133 = (function __GT_t16133(ch__$1,f__$1,map_GT___$1,meta16134){return (new cljs.core.async.t16133(ch__$1,f__$1,map_GT___$1,meta16134));
});
}
return (new cljs.core.async.t16133(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t16139 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16139 = (function (ch,p,filter_GT_,meta16140){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta16140 = meta16140;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16139.cljs$lang$type = true;
cljs.core.async.t16139.cljs$lang$ctorStr = "cljs.core.async/t16139";
cljs.core.async.t16139.cljs$lang$ctorPrWriter = (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t16139");
});
cljs.core.async.t16139.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t16139.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t16139.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t16139.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t16139.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t16139.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t16139.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_16141){var self__ = this;
var _16141__$1 = this;return self__.meta16140;
});
cljs.core.async.t16139.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_16141,meta16140__$1){var self__ = this;
var _16141__$1 = this;return (new cljs.core.async.t16139(self__.ch,self__.p,self__.filter_GT_,meta16140__$1));
});
cljs.core.async.__GT_t16139 = (function __GT_t16139(ch__$1,p__$1,filter_GT___$1,meta16140){return (new cljs.core.async.t16139(ch__$1,p__$1,filter_GT___$1,meta16140));
});
}
return (new cljs.core.async.t16139(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___16224 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16224,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16224,out){
return (function (state_16203){var state_val_16204 = (state_16203[(1)]);if((state_val_16204 === (7)))
{var inst_16199 = (state_16203[(2)]);var state_16203__$1 = state_16203;var statearr_16205_16225 = state_16203__$1;(statearr_16205_16225[(2)] = inst_16199);
(statearr_16205_16225[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16204 === (1)))
{var state_16203__$1 = state_16203;var statearr_16206_16226 = state_16203__$1;(statearr_16206_16226[(2)] = null);
(statearr_16206_16226[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16204 === (4)))
{var inst_16185 = (state_16203[(7)]);var inst_16185__$1 = (state_16203[(2)]);var inst_16186 = (inst_16185__$1 == null);var state_16203__$1 = (function (){var statearr_16207 = state_16203;(statearr_16207[(7)] = inst_16185__$1);
return statearr_16207;
})();if(cljs.core.truth_(inst_16186))
{var statearr_16208_16227 = state_16203__$1;(statearr_16208_16227[(1)] = (5));
} else
{var statearr_16209_16228 = state_16203__$1;(statearr_16209_16228[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16204 === (6)))
{var inst_16185 = (state_16203[(7)]);var inst_16190 = p.call(null,inst_16185);var state_16203__$1 = state_16203;if(cljs.core.truth_(inst_16190))
{var statearr_16210_16229 = state_16203__$1;(statearr_16210_16229[(1)] = (8));
} else
{var statearr_16211_16230 = state_16203__$1;(statearr_16211_16230[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16204 === (3)))
{var inst_16201 = (state_16203[(2)]);var state_16203__$1 = state_16203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16203__$1,inst_16201);
} else
{if((state_val_16204 === (2)))
{var state_16203__$1 = state_16203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16203__$1,(4),ch);
} else
{if((state_val_16204 === (11)))
{var inst_16193 = (state_16203[(2)]);var state_16203__$1 = state_16203;var statearr_16212_16231 = state_16203__$1;(statearr_16212_16231[(2)] = inst_16193);
(statearr_16212_16231[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16204 === (9)))
{var state_16203__$1 = state_16203;var statearr_16213_16232 = state_16203__$1;(statearr_16213_16232[(2)] = null);
(statearr_16213_16232[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16204 === (5)))
{var inst_16188 = cljs.core.async.close_BANG_.call(null,out);var state_16203__$1 = state_16203;var statearr_16214_16233 = state_16203__$1;(statearr_16214_16233[(2)] = inst_16188);
(statearr_16214_16233[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16204 === (10)))
{var inst_16196 = (state_16203[(2)]);var state_16203__$1 = (function (){var statearr_16215 = state_16203;(statearr_16215[(8)] = inst_16196);
return statearr_16215;
})();var statearr_16216_16234 = state_16203__$1;(statearr_16216_16234[(2)] = null);
(statearr_16216_16234[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16204 === (8)))
{var inst_16185 = (state_16203[(7)]);var state_16203__$1 = state_16203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16203__$1,(11),out,inst_16185);
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
});})(c__5708__auto___16224,out))
;return ((function (switch__5693__auto__,c__5708__auto___16224,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16220 = [null,null,null,null,null,null,null,null,null];(statearr_16220[(0)] = state_machine__5694__auto__);
(statearr_16220[(1)] = (1));
return statearr_16220;
});
var state_machine__5694__auto____1 = (function (state_16203){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16203);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16221){if((e16221 instanceof Object))
{var ex__5697__auto__ = e16221;var statearr_16222_16235 = state_16203;(statearr_16222_16235[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16203);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16221;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16236 = state_16203;
state_16203 = G__16236;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16203){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16224,out))
})();var state__5710__auto__ = (function (){var statearr_16223 = f__5709__auto__.call(null);(statearr_16223[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16224);
return statearr_16223;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16224,out))
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
return (function (state_16388){var state_val_16389 = (state_16388[(1)]);if((state_val_16389 === (7)))
{var inst_16384 = (state_16388[(2)]);var state_16388__$1 = state_16388;var statearr_16390_16427 = state_16388__$1;(statearr_16390_16427[(2)] = inst_16384);
(statearr_16390_16427[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (20)))
{var inst_16359 = (state_16388[(7)]);var inst_16370 = (state_16388[(2)]);var inst_16371 = cljs.core.next.call(null,inst_16359);var inst_16345 = inst_16371;var inst_16346 = null;var inst_16347 = (0);var inst_16348 = (0);var state_16388__$1 = (function (){var statearr_16391 = state_16388;(statearr_16391[(8)] = inst_16345);
(statearr_16391[(9)] = inst_16347);
(statearr_16391[(10)] = inst_16370);
(statearr_16391[(11)] = inst_16348);
(statearr_16391[(12)] = inst_16346);
return statearr_16391;
})();var statearr_16392_16428 = state_16388__$1;(statearr_16392_16428[(2)] = null);
(statearr_16392_16428[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (1)))
{var state_16388__$1 = state_16388;var statearr_16393_16429 = state_16388__$1;(statearr_16393_16429[(2)] = null);
(statearr_16393_16429[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (4)))
{var inst_16334 = (state_16388[(13)]);var inst_16334__$1 = (state_16388[(2)]);var inst_16335 = (inst_16334__$1 == null);var state_16388__$1 = (function (){var statearr_16397 = state_16388;(statearr_16397[(13)] = inst_16334__$1);
return statearr_16397;
})();if(cljs.core.truth_(inst_16335))
{var statearr_16398_16430 = state_16388__$1;(statearr_16398_16430[(1)] = (5));
} else
{var statearr_16399_16431 = state_16388__$1;(statearr_16399_16431[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (15)))
{var state_16388__$1 = state_16388;var statearr_16400_16432 = state_16388__$1;(statearr_16400_16432[(2)] = null);
(statearr_16400_16432[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (13)))
{var inst_16345 = (state_16388[(8)]);var inst_16347 = (state_16388[(9)]);var inst_16348 = (state_16388[(11)]);var inst_16346 = (state_16388[(12)]);var inst_16355 = (state_16388[(2)]);var inst_16356 = (inst_16348 + (1));var tmp16394 = inst_16345;var tmp16395 = inst_16347;var tmp16396 = inst_16346;var inst_16345__$1 = tmp16394;var inst_16346__$1 = tmp16396;var inst_16347__$1 = tmp16395;var inst_16348__$1 = inst_16356;var state_16388__$1 = (function (){var statearr_16401 = state_16388;(statearr_16401[(8)] = inst_16345__$1);
(statearr_16401[(14)] = inst_16355);
(statearr_16401[(9)] = inst_16347__$1);
(statearr_16401[(11)] = inst_16348__$1);
(statearr_16401[(12)] = inst_16346__$1);
return statearr_16401;
})();var statearr_16402_16433 = state_16388__$1;(statearr_16402_16433[(2)] = null);
(statearr_16402_16433[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (6)))
{var inst_16334 = (state_16388[(13)]);var inst_16339 = f.call(null,inst_16334);var inst_16344 = cljs.core.seq.call(null,inst_16339);var inst_16345 = inst_16344;var inst_16346 = null;var inst_16347 = (0);var inst_16348 = (0);var state_16388__$1 = (function (){var statearr_16403 = state_16388;(statearr_16403[(8)] = inst_16345);
(statearr_16403[(9)] = inst_16347);
(statearr_16403[(11)] = inst_16348);
(statearr_16403[(12)] = inst_16346);
return statearr_16403;
})();var statearr_16404_16434 = state_16388__$1;(statearr_16404_16434[(2)] = null);
(statearr_16404_16434[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (17)))
{var inst_16359 = (state_16388[(7)]);var inst_16363 = cljs.core.chunk_first.call(null,inst_16359);var inst_16364 = cljs.core.chunk_rest.call(null,inst_16359);var inst_16365 = cljs.core.count.call(null,inst_16363);var inst_16345 = inst_16364;var inst_16346 = inst_16363;var inst_16347 = inst_16365;var inst_16348 = (0);var state_16388__$1 = (function (){var statearr_16405 = state_16388;(statearr_16405[(8)] = inst_16345);
(statearr_16405[(9)] = inst_16347);
(statearr_16405[(11)] = inst_16348);
(statearr_16405[(12)] = inst_16346);
return statearr_16405;
})();var statearr_16406_16435 = state_16388__$1;(statearr_16406_16435[(2)] = null);
(statearr_16406_16435[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (3)))
{var inst_16386 = (state_16388[(2)]);var state_16388__$1 = state_16388;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16388__$1,inst_16386);
} else
{if((state_val_16389 === (12)))
{var inst_16379 = (state_16388[(2)]);var state_16388__$1 = state_16388;var statearr_16407_16436 = state_16388__$1;(statearr_16407_16436[(2)] = inst_16379);
(statearr_16407_16436[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (2)))
{var state_16388__$1 = state_16388;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16388__$1,(4),in$);
} else
{if((state_val_16389 === (19)))
{var inst_16374 = (state_16388[(2)]);var state_16388__$1 = state_16388;var statearr_16408_16437 = state_16388__$1;(statearr_16408_16437[(2)] = inst_16374);
(statearr_16408_16437[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (11)))
{var inst_16359 = (state_16388[(7)]);var inst_16345 = (state_16388[(8)]);var inst_16359__$1 = cljs.core.seq.call(null,inst_16345);var state_16388__$1 = (function (){var statearr_16409 = state_16388;(statearr_16409[(7)] = inst_16359__$1);
return statearr_16409;
})();if(inst_16359__$1)
{var statearr_16410_16438 = state_16388__$1;(statearr_16410_16438[(1)] = (14));
} else
{var statearr_16411_16439 = state_16388__$1;(statearr_16411_16439[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (9)))
{var inst_16381 = (state_16388[(2)]);var state_16388__$1 = (function (){var statearr_16412 = state_16388;(statearr_16412[(15)] = inst_16381);
return statearr_16412;
})();var statearr_16413_16440 = state_16388__$1;(statearr_16413_16440[(2)] = null);
(statearr_16413_16440[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (5)))
{var inst_16337 = cljs.core.async.close_BANG_.call(null,out);var state_16388__$1 = state_16388;var statearr_16414_16441 = state_16388__$1;(statearr_16414_16441[(2)] = inst_16337);
(statearr_16414_16441[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (14)))
{var inst_16359 = (state_16388[(7)]);var inst_16361 = cljs.core.chunked_seq_QMARK_.call(null,inst_16359);var state_16388__$1 = state_16388;if(inst_16361)
{var statearr_16415_16442 = state_16388__$1;(statearr_16415_16442[(1)] = (17));
} else
{var statearr_16416_16443 = state_16388__$1;(statearr_16416_16443[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (16)))
{var inst_16377 = (state_16388[(2)]);var state_16388__$1 = state_16388;var statearr_16417_16444 = state_16388__$1;(statearr_16417_16444[(2)] = inst_16377);
(statearr_16417_16444[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16389 === (10)))
{var inst_16348 = (state_16388[(11)]);var inst_16346 = (state_16388[(12)]);var inst_16353 = cljs.core._nth.call(null,inst_16346,inst_16348);var state_16388__$1 = state_16388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16388__$1,(13),out,inst_16353);
} else
{if((state_val_16389 === (18)))
{var inst_16359 = (state_16388[(7)]);var inst_16368 = cljs.core.first.call(null,inst_16359);var state_16388__$1 = state_16388;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16388__$1,(20),out,inst_16368);
} else
{if((state_val_16389 === (8)))
{var inst_16347 = (state_16388[(9)]);var inst_16348 = (state_16388[(11)]);var inst_16350 = (inst_16348 < inst_16347);var inst_16351 = inst_16350;var state_16388__$1 = state_16388;if(cljs.core.truth_(inst_16351))
{var statearr_16418_16445 = state_16388__$1;(statearr_16418_16445[(1)] = (10));
} else
{var statearr_16419_16446 = state_16388__$1;(statearr_16419_16446[(1)] = (11));
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
var state_machine__5694__auto____0 = (function (){var statearr_16423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16423[(0)] = state_machine__5694__auto__);
(statearr_16423[(1)] = (1));
return statearr_16423;
});
var state_machine__5694__auto____1 = (function (state_16388){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16388);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16424){if((e16424 instanceof Object))
{var ex__5697__auto__ = e16424;var statearr_16425_16447 = state_16388;(statearr_16425_16447[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16388);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16424;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16448 = state_16388;
state_16388 = G__16448;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16388){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16388);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16426 = f__5709__auto__.call(null);(statearr_16426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16426;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5708__auto___16529 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16529){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16529){
return (function (state_16508){var state_val_16509 = (state_16508[(1)]);if((state_val_16509 === (7)))
{var inst_16504 = (state_16508[(2)]);var state_16508__$1 = state_16508;var statearr_16510_16530 = state_16508__$1;(statearr_16510_16530[(2)] = inst_16504);
(statearr_16510_16530[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16509 === (1)))
{var state_16508__$1 = state_16508;var statearr_16511_16531 = state_16508__$1;(statearr_16511_16531[(2)] = null);
(statearr_16511_16531[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16509 === (4)))
{var inst_16491 = (state_16508[(7)]);var inst_16491__$1 = (state_16508[(2)]);var inst_16492 = (inst_16491__$1 == null);var state_16508__$1 = (function (){var statearr_16512 = state_16508;(statearr_16512[(7)] = inst_16491__$1);
return statearr_16512;
})();if(cljs.core.truth_(inst_16492))
{var statearr_16513_16532 = state_16508__$1;(statearr_16513_16532[(1)] = (5));
} else
{var statearr_16514_16533 = state_16508__$1;(statearr_16514_16533[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16509 === (6)))
{var inst_16491 = (state_16508[(7)]);var state_16508__$1 = state_16508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16508__$1,(11),to,inst_16491);
} else
{if((state_val_16509 === (3)))
{var inst_16506 = (state_16508[(2)]);var state_16508__$1 = state_16508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16508__$1,inst_16506);
} else
{if((state_val_16509 === (2)))
{var state_16508__$1 = state_16508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16508__$1,(4),from);
} else
{if((state_val_16509 === (11)))
{var inst_16501 = (state_16508[(2)]);var state_16508__$1 = (function (){var statearr_16515 = state_16508;(statearr_16515[(8)] = inst_16501);
return statearr_16515;
})();var statearr_16516_16534 = state_16508__$1;(statearr_16516_16534[(2)] = null);
(statearr_16516_16534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16509 === (9)))
{var state_16508__$1 = state_16508;var statearr_16517_16535 = state_16508__$1;(statearr_16517_16535[(2)] = null);
(statearr_16517_16535[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16509 === (5)))
{var state_16508__$1 = state_16508;if(cljs.core.truth_(close_QMARK_))
{var statearr_16518_16536 = state_16508__$1;(statearr_16518_16536[(1)] = (8));
} else
{var statearr_16519_16537 = state_16508__$1;(statearr_16519_16537[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16509 === (10)))
{var inst_16498 = (state_16508[(2)]);var state_16508__$1 = state_16508;var statearr_16520_16538 = state_16508__$1;(statearr_16520_16538[(2)] = inst_16498);
(statearr_16520_16538[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16509 === (8)))
{var inst_16495 = cljs.core.async.close_BANG_.call(null,to);var state_16508__$1 = state_16508;var statearr_16521_16539 = state_16508__$1;(statearr_16521_16539[(2)] = inst_16495);
(statearr_16521_16539[(1)] = (10));
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
});})(c__5708__auto___16529))
;return ((function (switch__5693__auto__,c__5708__auto___16529){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16525 = [null,null,null,null,null,null,null,null,null];(statearr_16525[(0)] = state_machine__5694__auto__);
(statearr_16525[(1)] = (1));
return statearr_16525;
});
var state_machine__5694__auto____1 = (function (state_16508){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16508);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16526){if((e16526 instanceof Object))
{var ex__5697__auto__ = e16526;var statearr_16527_16540 = state_16508;(statearr_16527_16540[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16508);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16526;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16541 = state_16508;
state_16508 = G__16541;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16508){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16529))
})();var state__5710__auto__ = (function (){var statearr_16528 = f__5709__auto__.call(null);(statearr_16528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16529);
return statearr_16528;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16529))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5708__auto___16628 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___16628,tc,fc){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___16628,tc,fc){
return (function (state_16606){var state_val_16607 = (state_16606[(1)]);if((state_val_16607 === (7)))
{var inst_16602 = (state_16606[(2)]);var state_16606__$1 = state_16606;var statearr_16608_16629 = state_16606__$1;(statearr_16608_16629[(2)] = inst_16602);
(statearr_16608_16629[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16607 === (1)))
{var state_16606__$1 = state_16606;var statearr_16609_16630 = state_16606__$1;(statearr_16609_16630[(2)] = null);
(statearr_16609_16630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16607 === (4)))
{var inst_16587 = (state_16606[(7)]);var inst_16587__$1 = (state_16606[(2)]);var inst_16588 = (inst_16587__$1 == null);var state_16606__$1 = (function (){var statearr_16610 = state_16606;(statearr_16610[(7)] = inst_16587__$1);
return statearr_16610;
})();if(cljs.core.truth_(inst_16588))
{var statearr_16611_16631 = state_16606__$1;(statearr_16611_16631[(1)] = (5));
} else
{var statearr_16612_16632 = state_16606__$1;(statearr_16612_16632[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16607 === (6)))
{var inst_16587 = (state_16606[(7)]);var inst_16593 = p.call(null,inst_16587);var state_16606__$1 = state_16606;if(cljs.core.truth_(inst_16593))
{var statearr_16613_16633 = state_16606__$1;(statearr_16613_16633[(1)] = (9));
} else
{var statearr_16614_16634 = state_16606__$1;(statearr_16614_16634[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16607 === (3)))
{var inst_16604 = (state_16606[(2)]);var state_16606__$1 = state_16606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16606__$1,inst_16604);
} else
{if((state_val_16607 === (2)))
{var state_16606__$1 = state_16606;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16606__$1,(4),ch);
} else
{if((state_val_16607 === (11)))
{var inst_16587 = (state_16606[(7)]);var inst_16597 = (state_16606[(2)]);var state_16606__$1 = state_16606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16606__$1,(8),inst_16597,inst_16587);
} else
{if((state_val_16607 === (9)))
{var state_16606__$1 = state_16606;var statearr_16615_16635 = state_16606__$1;(statearr_16615_16635[(2)] = tc);
(statearr_16615_16635[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16607 === (5)))
{var inst_16590 = cljs.core.async.close_BANG_.call(null,tc);var inst_16591 = cljs.core.async.close_BANG_.call(null,fc);var state_16606__$1 = (function (){var statearr_16616 = state_16606;(statearr_16616[(8)] = inst_16590);
return statearr_16616;
})();var statearr_16617_16636 = state_16606__$1;(statearr_16617_16636[(2)] = inst_16591);
(statearr_16617_16636[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16607 === (10)))
{var state_16606__$1 = state_16606;var statearr_16618_16637 = state_16606__$1;(statearr_16618_16637[(2)] = fc);
(statearr_16618_16637[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16607 === (8)))
{var inst_16599 = (state_16606[(2)]);var state_16606__$1 = (function (){var statearr_16619 = state_16606;(statearr_16619[(9)] = inst_16599);
return statearr_16619;
})();var statearr_16620_16638 = state_16606__$1;(statearr_16620_16638[(2)] = null);
(statearr_16620_16638[(1)] = (2));
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
});})(c__5708__auto___16628,tc,fc))
;return ((function (switch__5693__auto__,c__5708__auto___16628,tc,fc){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_16624 = [null,null,null,null,null,null,null,null,null,null];(statearr_16624[(0)] = state_machine__5694__auto__);
(statearr_16624[(1)] = (1));
return statearr_16624;
});
var state_machine__5694__auto____1 = (function (state_16606){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16606);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16625){if((e16625 instanceof Object))
{var ex__5697__auto__ = e16625;var statearr_16626_16639 = state_16606;(statearr_16626_16639[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16606);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16625;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16640 = state_16606;
state_16606 = G__16640;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16606){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___16628,tc,fc))
})();var state__5710__auto__ = (function (){var statearr_16627 = f__5709__auto__.call(null);(statearr_16627[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___16628);
return statearr_16627;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___16628,tc,fc))
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
return (function (state_16687){var state_val_16688 = (state_16687[(1)]);if((state_val_16688 === (7)))
{var inst_16683 = (state_16687[(2)]);var state_16687__$1 = state_16687;var statearr_16689_16705 = state_16687__$1;(statearr_16689_16705[(2)] = inst_16683);
(statearr_16689_16705[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16688 === (6)))
{var inst_16676 = (state_16687[(7)]);var inst_16673 = (state_16687[(8)]);var inst_16680 = f.call(null,inst_16673,inst_16676);var inst_16673__$1 = inst_16680;var state_16687__$1 = (function (){var statearr_16690 = state_16687;(statearr_16690[(8)] = inst_16673__$1);
return statearr_16690;
})();var statearr_16691_16706 = state_16687__$1;(statearr_16691_16706[(2)] = null);
(statearr_16691_16706[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16688 === (5)))
{var inst_16673 = (state_16687[(8)]);var state_16687__$1 = state_16687;var statearr_16692_16707 = state_16687__$1;(statearr_16692_16707[(2)] = inst_16673);
(statearr_16692_16707[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16688 === (4)))
{var inst_16676 = (state_16687[(7)]);var inst_16676__$1 = (state_16687[(2)]);var inst_16677 = (inst_16676__$1 == null);var state_16687__$1 = (function (){var statearr_16693 = state_16687;(statearr_16693[(7)] = inst_16676__$1);
return statearr_16693;
})();if(cljs.core.truth_(inst_16677))
{var statearr_16694_16708 = state_16687__$1;(statearr_16694_16708[(1)] = (5));
} else
{var statearr_16695_16709 = state_16687__$1;(statearr_16695_16709[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16688 === (3)))
{var inst_16685 = (state_16687[(2)]);var state_16687__$1 = state_16687;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16687__$1,inst_16685);
} else
{if((state_val_16688 === (2)))
{var state_16687__$1 = state_16687;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16687__$1,(4),ch);
} else
{if((state_val_16688 === (1)))
{var inst_16673 = init;var state_16687__$1 = (function (){var statearr_16696 = state_16687;(statearr_16696[(8)] = inst_16673);
return statearr_16696;
})();var statearr_16697_16710 = state_16687__$1;(statearr_16697_16710[(2)] = null);
(statearr_16697_16710[(1)] = (2));
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
var state_machine__5694__auto____0 = (function (){var statearr_16701 = [null,null,null,null,null,null,null,null,null];(statearr_16701[(0)] = state_machine__5694__auto__);
(statearr_16701[(1)] = (1));
return statearr_16701;
});
var state_machine__5694__auto____1 = (function (state_16687){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16687);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16702){if((e16702 instanceof Object))
{var ex__5697__auto__ = e16702;var statearr_16703_16711 = state_16687;(statearr_16703_16711[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16687);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16702;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16712 = state_16687;
state_16687 = G__16712;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16687){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16687);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16704 = f__5709__auto__.call(null);(statearr_16704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16704;
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
return (function (state_16774){var state_val_16775 = (state_16774[(1)]);if((state_val_16775 === (7)))
{var inst_16755 = (state_16774[(7)]);var inst_16760 = (state_16774[(2)]);var inst_16761 = cljs.core.next.call(null,inst_16755);var inst_16755__$1 = inst_16761;var state_16774__$1 = (function (){var statearr_16776 = state_16774;(statearr_16776[(8)] = inst_16760);
(statearr_16776[(7)] = inst_16755__$1);
return statearr_16776;
})();var statearr_16777_16795 = state_16774__$1;(statearr_16777_16795[(2)] = null);
(statearr_16777_16795[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16775 === (1)))
{var inst_16754 = cljs.core.seq.call(null,coll);var inst_16755 = inst_16754;var state_16774__$1 = (function (){var statearr_16778 = state_16774;(statearr_16778[(7)] = inst_16755);
return statearr_16778;
})();var statearr_16779_16796 = state_16774__$1;(statearr_16779_16796[(2)] = null);
(statearr_16779_16796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16775 === (4)))
{var inst_16755 = (state_16774[(7)]);var inst_16758 = cljs.core.first.call(null,inst_16755);var state_16774__$1 = state_16774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16774__$1,(7),ch,inst_16758);
} else
{if((state_val_16775 === (6)))
{var inst_16770 = (state_16774[(2)]);var state_16774__$1 = state_16774;var statearr_16780_16797 = state_16774__$1;(statearr_16780_16797[(2)] = inst_16770);
(statearr_16780_16797[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16775 === (3)))
{var inst_16772 = (state_16774[(2)]);var state_16774__$1 = state_16774;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16774__$1,inst_16772);
} else
{if((state_val_16775 === (2)))
{var inst_16755 = (state_16774[(7)]);var state_16774__$1 = state_16774;if(cljs.core.truth_(inst_16755))
{var statearr_16781_16798 = state_16774__$1;(statearr_16781_16798[(1)] = (4));
} else
{var statearr_16782_16799 = state_16774__$1;(statearr_16782_16799[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16775 === (9)))
{var state_16774__$1 = state_16774;var statearr_16783_16800 = state_16774__$1;(statearr_16783_16800[(2)] = null);
(statearr_16783_16800[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16775 === (5)))
{var state_16774__$1 = state_16774;if(cljs.core.truth_(close_QMARK_))
{var statearr_16784_16801 = state_16774__$1;(statearr_16784_16801[(1)] = (8));
} else
{var statearr_16785_16802 = state_16774__$1;(statearr_16785_16802[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16775 === (10)))
{var inst_16768 = (state_16774[(2)]);var state_16774__$1 = state_16774;var statearr_16786_16803 = state_16774__$1;(statearr_16786_16803[(2)] = inst_16768);
(statearr_16786_16803[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16775 === (8)))
{var inst_16765 = cljs.core.async.close_BANG_.call(null,ch);var state_16774__$1 = state_16774;var statearr_16787_16804 = state_16774__$1;(statearr_16787_16804[(2)] = inst_16765);
(statearr_16787_16804[(1)] = (10));
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
var state_machine__5694__auto____0 = (function (){var statearr_16791 = [null,null,null,null,null,null,null,null,null];(statearr_16791[(0)] = state_machine__5694__auto__);
(statearr_16791[(1)] = (1));
return statearr_16791;
});
var state_machine__5694__auto____1 = (function (state_16774){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_16774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e16792){if((e16792 instanceof Object))
{var ex__5697__auto__ = e16792;var statearr_16793_16805 = state_16774;(statearr_16793_16805[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e16792;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16806 = state_16774;
state_16774 = G__16806;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_16774){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_16774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_16794 = f__5709__auto__.call(null);(statearr_16794[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_16794;
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
cljs.core.async.Mux = (function (){var obj16808 = {};return obj16808;
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
cljs.core.async.Mult = (function (){var obj16810 = {};return obj16810;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t17034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17034 = (function (cs,ch,mult,meta17035){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta17035 = meta17035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17034.cljs$lang$type = true;
cljs.core.async.t17034.cljs$lang$ctorStr = "cljs.core.async/t17034";
cljs.core.async.t17034.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t17034");
});})(cs))
;
cljs.core.async.t17034.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t17034.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t17034.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t17034.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t17034.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17034.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t17034.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_17036){var self__ = this;
var _17036__$1 = this;return self__.meta17035;
});})(cs))
;
cljs.core.async.t17034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_17036,meta17035__$1){var self__ = this;
var _17036__$1 = this;return (new cljs.core.async.t17034(self__.cs,self__.ch,self__.mult,meta17035__$1));
});})(cs))
;
cljs.core.async.__GT_t17034 = ((function (cs){
return (function __GT_t17034(cs__$1,ch__$1,mult__$1,meta17035){return (new cljs.core.async.t17034(cs__$1,ch__$1,mult__$1,meta17035));
});})(cs))
;
}
return (new cljs.core.async.t17034(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5708__auto___17257 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17257,cs,m,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17257,cs,m,dchan,dctr,done){
return (function (state_17171){var state_val_17172 = (state_17171[(1)]);if((state_val_17172 === (7)))
{var inst_17167 = (state_17171[(2)]);var state_17171__$1 = state_17171;var statearr_17173_17258 = state_17171__$1;(statearr_17173_17258[(2)] = inst_17167);
(statearr_17173_17258[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (20)))
{var inst_17068 = (state_17171[(7)]);var inst_17078 = cljs.core.first.call(null,inst_17068);var inst_17079 = cljs.core.nth.call(null,inst_17078,(0),null);var inst_17080 = cljs.core.nth.call(null,inst_17078,(1),null);var state_17171__$1 = (function (){var statearr_17174 = state_17171;(statearr_17174[(8)] = inst_17079);
return statearr_17174;
})();if(cljs.core.truth_(inst_17080))
{var statearr_17175_17259 = state_17171__$1;(statearr_17175_17259[(1)] = (22));
} else
{var statearr_17176_17260 = state_17171__$1;(statearr_17176_17260[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (27)))
{var inst_17110 = (state_17171[(9)]);var inst_17108 = (state_17171[(10)]);var inst_17115 = cljs.core._nth.call(null,inst_17108,inst_17110);var state_17171__$1 = (function (){var statearr_17177 = state_17171;(statearr_17177[(11)] = inst_17115);
return statearr_17177;
})();var statearr_17178_17261 = state_17171__$1;(statearr_17178_17261[(2)] = null);
(statearr_17178_17261[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (1)))
{var state_17171__$1 = state_17171;var statearr_17179_17262 = state_17171__$1;(statearr_17179_17262[(2)] = null);
(statearr_17179_17262[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (24)))
{var inst_17068 = (state_17171[(7)]);var inst_17085 = (state_17171[(2)]);var inst_17086 = cljs.core.next.call(null,inst_17068);var inst_17048 = inst_17086;var inst_17049 = null;var inst_17050 = (0);var inst_17051 = (0);var state_17171__$1 = (function (){var statearr_17180 = state_17171;(statearr_17180[(12)] = inst_17049);
(statearr_17180[(13)] = inst_17085);
(statearr_17180[(14)] = inst_17051);
(statearr_17180[(15)] = inst_17050);
(statearr_17180[(16)] = inst_17048);
return statearr_17180;
})();var statearr_17181_17263 = state_17171__$1;(statearr_17181_17263[(2)] = null);
(statearr_17181_17263[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (39)))
{var inst_17128 = (state_17171[(17)]);var inst_17146 = (state_17171[(2)]);var inst_17147 = cljs.core.next.call(null,inst_17128);var inst_17107 = inst_17147;var inst_17108 = null;var inst_17109 = (0);var inst_17110 = (0);var state_17171__$1 = (function (){var statearr_17185 = state_17171;(statearr_17185[(9)] = inst_17110);
(statearr_17185[(18)] = inst_17109);
(statearr_17185[(19)] = inst_17146);
(statearr_17185[(20)] = inst_17107);
(statearr_17185[(10)] = inst_17108);
return statearr_17185;
})();var statearr_17186_17264 = state_17171__$1;(statearr_17186_17264[(2)] = null);
(statearr_17186_17264[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (4)))
{var inst_17039 = (state_17171[(21)]);var inst_17039__$1 = (state_17171[(2)]);var inst_17040 = (inst_17039__$1 == null);var state_17171__$1 = (function (){var statearr_17187 = state_17171;(statearr_17187[(21)] = inst_17039__$1);
return statearr_17187;
})();if(cljs.core.truth_(inst_17040))
{var statearr_17188_17265 = state_17171__$1;(statearr_17188_17265[(1)] = (5));
} else
{var statearr_17189_17266 = state_17171__$1;(statearr_17189_17266[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (15)))
{var inst_17049 = (state_17171[(12)]);var inst_17051 = (state_17171[(14)]);var inst_17050 = (state_17171[(15)]);var inst_17048 = (state_17171[(16)]);var inst_17064 = (state_17171[(2)]);var inst_17065 = (inst_17051 + (1));var tmp17182 = inst_17049;var tmp17183 = inst_17050;var tmp17184 = inst_17048;var inst_17048__$1 = tmp17184;var inst_17049__$1 = tmp17182;var inst_17050__$1 = tmp17183;var inst_17051__$1 = inst_17065;var state_17171__$1 = (function (){var statearr_17190 = state_17171;(statearr_17190[(22)] = inst_17064);
(statearr_17190[(12)] = inst_17049__$1);
(statearr_17190[(14)] = inst_17051__$1);
(statearr_17190[(15)] = inst_17050__$1);
(statearr_17190[(16)] = inst_17048__$1);
return statearr_17190;
})();var statearr_17191_17267 = state_17171__$1;(statearr_17191_17267[(2)] = null);
(statearr_17191_17267[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (21)))
{var inst_17089 = (state_17171[(2)]);var state_17171__$1 = state_17171;var statearr_17192_17268 = state_17171__$1;(statearr_17192_17268[(2)] = inst_17089);
(statearr_17192_17268[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (31)))
{var inst_17115 = (state_17171[(11)]);var inst_17116 = (state_17171[(2)]);var inst_17117 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17118 = cljs.core.async.untap_STAR_.call(null,m,inst_17115);var state_17171__$1 = (function (){var statearr_17193 = state_17171;(statearr_17193[(23)] = inst_17116);
(statearr_17193[(24)] = inst_17117);
return statearr_17193;
})();var statearr_17194_17269 = state_17171__$1;(statearr_17194_17269[(2)] = inst_17118);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17171__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (32)))
{var inst_17115 = (state_17171[(11)]);var inst_17039 = (state_17171[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17171,(31),Object,null,(30));var inst_17122 = cljs.core.async.put_BANG_.call(null,inst_17115,inst_17039,done);var state_17171__$1 = state_17171;var statearr_17195_17270 = state_17171__$1;(statearr_17195_17270[(2)] = inst_17122);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17171__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (40)))
{var inst_17137 = (state_17171[(25)]);var inst_17138 = (state_17171[(2)]);var inst_17139 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_17140 = cljs.core.async.untap_STAR_.call(null,m,inst_17137);var state_17171__$1 = (function (){var statearr_17196 = state_17171;(statearr_17196[(26)] = inst_17139);
(statearr_17196[(27)] = inst_17138);
return statearr_17196;
})();var statearr_17197_17271 = state_17171__$1;(statearr_17197_17271[(2)] = inst_17140);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17171__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (33)))
{var inst_17128 = (state_17171[(17)]);var inst_17130 = cljs.core.chunked_seq_QMARK_.call(null,inst_17128);var state_17171__$1 = state_17171;if(inst_17130)
{var statearr_17198_17272 = state_17171__$1;(statearr_17198_17272[(1)] = (36));
} else
{var statearr_17199_17273 = state_17171__$1;(statearr_17199_17273[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (13)))
{var inst_17058 = (state_17171[(28)]);var inst_17061 = cljs.core.async.close_BANG_.call(null,inst_17058);var state_17171__$1 = state_17171;var statearr_17200_17274 = state_17171__$1;(statearr_17200_17274[(2)] = inst_17061);
(statearr_17200_17274[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (22)))
{var inst_17079 = (state_17171[(8)]);var inst_17082 = cljs.core.async.close_BANG_.call(null,inst_17079);var state_17171__$1 = state_17171;var statearr_17201_17275 = state_17171__$1;(statearr_17201_17275[(2)] = inst_17082);
(statearr_17201_17275[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (36)))
{var inst_17128 = (state_17171[(17)]);var inst_17132 = cljs.core.chunk_first.call(null,inst_17128);var inst_17133 = cljs.core.chunk_rest.call(null,inst_17128);var inst_17134 = cljs.core.count.call(null,inst_17132);var inst_17107 = inst_17133;var inst_17108 = inst_17132;var inst_17109 = inst_17134;var inst_17110 = (0);var state_17171__$1 = (function (){var statearr_17202 = state_17171;(statearr_17202[(9)] = inst_17110);
(statearr_17202[(18)] = inst_17109);
(statearr_17202[(20)] = inst_17107);
(statearr_17202[(10)] = inst_17108);
return statearr_17202;
})();var statearr_17203_17276 = state_17171__$1;(statearr_17203_17276[(2)] = null);
(statearr_17203_17276[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (41)))
{var inst_17039 = (state_17171[(21)]);var inst_17137 = (state_17171[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17171,(40),Object,null,(39));var inst_17144 = cljs.core.async.put_BANG_.call(null,inst_17137,inst_17039,done);var state_17171__$1 = state_17171;var statearr_17204_17277 = state_17171__$1;(statearr_17204_17277[(2)] = inst_17144);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17171__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (43)))
{var state_17171__$1 = state_17171;var statearr_17205_17278 = state_17171__$1;(statearr_17205_17278[(2)] = null);
(statearr_17205_17278[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (29)))
{var inst_17155 = (state_17171[(2)]);var state_17171__$1 = state_17171;var statearr_17206_17279 = state_17171__$1;(statearr_17206_17279[(2)] = inst_17155);
(statearr_17206_17279[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (44)))
{var inst_17164 = (state_17171[(2)]);var state_17171__$1 = (function (){var statearr_17207 = state_17171;(statearr_17207[(29)] = inst_17164);
return statearr_17207;
})();var statearr_17208_17280 = state_17171__$1;(statearr_17208_17280[(2)] = null);
(statearr_17208_17280[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (6)))
{var inst_17099 = (state_17171[(30)]);var inst_17098 = cljs.core.deref.call(null,cs);var inst_17099__$1 = cljs.core.keys.call(null,inst_17098);var inst_17100 = cljs.core.count.call(null,inst_17099__$1);var inst_17101 = cljs.core.reset_BANG_.call(null,dctr,inst_17100);var inst_17106 = cljs.core.seq.call(null,inst_17099__$1);var inst_17107 = inst_17106;var inst_17108 = null;var inst_17109 = (0);var inst_17110 = (0);var state_17171__$1 = (function (){var statearr_17209 = state_17171;(statearr_17209[(9)] = inst_17110);
(statearr_17209[(18)] = inst_17109);
(statearr_17209[(31)] = inst_17101);
(statearr_17209[(20)] = inst_17107);
(statearr_17209[(30)] = inst_17099__$1);
(statearr_17209[(10)] = inst_17108);
return statearr_17209;
})();var statearr_17210_17281 = state_17171__$1;(statearr_17210_17281[(2)] = null);
(statearr_17210_17281[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (28)))
{var inst_17107 = (state_17171[(20)]);var inst_17128 = (state_17171[(17)]);var inst_17128__$1 = cljs.core.seq.call(null,inst_17107);var state_17171__$1 = (function (){var statearr_17211 = state_17171;(statearr_17211[(17)] = inst_17128__$1);
return statearr_17211;
})();if(inst_17128__$1)
{var statearr_17212_17282 = state_17171__$1;(statearr_17212_17282[(1)] = (33));
} else
{var statearr_17213_17283 = state_17171__$1;(statearr_17213_17283[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (25)))
{var inst_17110 = (state_17171[(9)]);var inst_17109 = (state_17171[(18)]);var inst_17112 = (inst_17110 < inst_17109);var inst_17113 = inst_17112;var state_17171__$1 = state_17171;if(cljs.core.truth_(inst_17113))
{var statearr_17214_17284 = state_17171__$1;(statearr_17214_17284[(1)] = (27));
} else
{var statearr_17215_17285 = state_17171__$1;(statearr_17215_17285[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (34)))
{var state_17171__$1 = state_17171;var statearr_17216_17286 = state_17171__$1;(statearr_17216_17286[(2)] = null);
(statearr_17216_17286[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (17)))
{var state_17171__$1 = state_17171;var statearr_17217_17287 = state_17171__$1;(statearr_17217_17287[(2)] = null);
(statearr_17217_17287[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (3)))
{var inst_17169 = (state_17171[(2)]);var state_17171__$1 = state_17171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17171__$1,inst_17169);
} else
{if((state_val_17172 === (12)))
{var inst_17094 = (state_17171[(2)]);var state_17171__$1 = state_17171;var statearr_17218_17288 = state_17171__$1;(statearr_17218_17288[(2)] = inst_17094);
(statearr_17218_17288[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (2)))
{var state_17171__$1 = state_17171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17171__$1,(4),ch);
} else
{if((state_val_17172 === (23)))
{var state_17171__$1 = state_17171;var statearr_17219_17289 = state_17171__$1;(statearr_17219_17289[(2)] = null);
(statearr_17219_17289[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (35)))
{var inst_17153 = (state_17171[(2)]);var state_17171__$1 = state_17171;var statearr_17220_17290 = state_17171__$1;(statearr_17220_17290[(2)] = inst_17153);
(statearr_17220_17290[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (19)))
{var inst_17068 = (state_17171[(7)]);var inst_17072 = cljs.core.chunk_first.call(null,inst_17068);var inst_17073 = cljs.core.chunk_rest.call(null,inst_17068);var inst_17074 = cljs.core.count.call(null,inst_17072);var inst_17048 = inst_17073;var inst_17049 = inst_17072;var inst_17050 = inst_17074;var inst_17051 = (0);var state_17171__$1 = (function (){var statearr_17221 = state_17171;(statearr_17221[(12)] = inst_17049);
(statearr_17221[(14)] = inst_17051);
(statearr_17221[(15)] = inst_17050);
(statearr_17221[(16)] = inst_17048);
return statearr_17221;
})();var statearr_17222_17291 = state_17171__$1;(statearr_17222_17291[(2)] = null);
(statearr_17222_17291[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (11)))
{var inst_17068 = (state_17171[(7)]);var inst_17048 = (state_17171[(16)]);var inst_17068__$1 = cljs.core.seq.call(null,inst_17048);var state_17171__$1 = (function (){var statearr_17223 = state_17171;(statearr_17223[(7)] = inst_17068__$1);
return statearr_17223;
})();if(inst_17068__$1)
{var statearr_17224_17292 = state_17171__$1;(statearr_17224_17292[(1)] = (16));
} else
{var statearr_17225_17293 = state_17171__$1;(statearr_17225_17293[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (9)))
{var inst_17096 = (state_17171[(2)]);var state_17171__$1 = state_17171;var statearr_17226_17294 = state_17171__$1;(statearr_17226_17294[(2)] = inst_17096);
(statearr_17226_17294[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (5)))
{var inst_17046 = cljs.core.deref.call(null,cs);var inst_17047 = cljs.core.seq.call(null,inst_17046);var inst_17048 = inst_17047;var inst_17049 = null;var inst_17050 = (0);var inst_17051 = (0);var state_17171__$1 = (function (){var statearr_17227 = state_17171;(statearr_17227[(12)] = inst_17049);
(statearr_17227[(14)] = inst_17051);
(statearr_17227[(15)] = inst_17050);
(statearr_17227[(16)] = inst_17048);
return statearr_17227;
})();var statearr_17228_17295 = state_17171__$1;(statearr_17228_17295[(2)] = null);
(statearr_17228_17295[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (14)))
{var state_17171__$1 = state_17171;var statearr_17229_17296 = state_17171__$1;(statearr_17229_17296[(2)] = null);
(statearr_17229_17296[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (45)))
{var inst_17161 = (state_17171[(2)]);var state_17171__$1 = state_17171;var statearr_17230_17297 = state_17171__$1;(statearr_17230_17297[(2)] = inst_17161);
(statearr_17230_17297[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (26)))
{var inst_17099 = (state_17171[(30)]);var inst_17157 = (state_17171[(2)]);var inst_17158 = cljs.core.seq.call(null,inst_17099);var state_17171__$1 = (function (){var statearr_17231 = state_17171;(statearr_17231[(32)] = inst_17157);
return statearr_17231;
})();if(inst_17158)
{var statearr_17232_17298 = state_17171__$1;(statearr_17232_17298[(1)] = (42));
} else
{var statearr_17233_17299 = state_17171__$1;(statearr_17233_17299[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (16)))
{var inst_17068 = (state_17171[(7)]);var inst_17070 = cljs.core.chunked_seq_QMARK_.call(null,inst_17068);var state_17171__$1 = state_17171;if(inst_17070)
{var statearr_17237_17300 = state_17171__$1;(statearr_17237_17300[(1)] = (19));
} else
{var statearr_17238_17301 = state_17171__$1;(statearr_17238_17301[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (38)))
{var inst_17150 = (state_17171[(2)]);var state_17171__$1 = state_17171;var statearr_17239_17302 = state_17171__$1;(statearr_17239_17302[(2)] = inst_17150);
(statearr_17239_17302[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (30)))
{var inst_17110 = (state_17171[(9)]);var inst_17109 = (state_17171[(18)]);var inst_17107 = (state_17171[(20)]);var inst_17108 = (state_17171[(10)]);var inst_17124 = (state_17171[(2)]);var inst_17125 = (inst_17110 + (1));var tmp17234 = inst_17109;var tmp17235 = inst_17107;var tmp17236 = inst_17108;var inst_17107__$1 = tmp17235;var inst_17108__$1 = tmp17236;var inst_17109__$1 = tmp17234;var inst_17110__$1 = inst_17125;var state_17171__$1 = (function (){var statearr_17240 = state_17171;(statearr_17240[(9)] = inst_17110__$1);
(statearr_17240[(33)] = inst_17124);
(statearr_17240[(18)] = inst_17109__$1);
(statearr_17240[(20)] = inst_17107__$1);
(statearr_17240[(10)] = inst_17108__$1);
return statearr_17240;
})();var statearr_17241_17303 = state_17171__$1;(statearr_17241_17303[(2)] = null);
(statearr_17241_17303[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (10)))
{var inst_17049 = (state_17171[(12)]);var inst_17051 = (state_17171[(14)]);var inst_17057 = cljs.core._nth.call(null,inst_17049,inst_17051);var inst_17058 = cljs.core.nth.call(null,inst_17057,(0),null);var inst_17059 = cljs.core.nth.call(null,inst_17057,(1),null);var state_17171__$1 = (function (){var statearr_17242 = state_17171;(statearr_17242[(28)] = inst_17058);
return statearr_17242;
})();if(cljs.core.truth_(inst_17059))
{var statearr_17243_17304 = state_17171__$1;(statearr_17243_17304[(1)] = (13));
} else
{var statearr_17244_17305 = state_17171__$1;(statearr_17244_17305[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (18)))
{var inst_17092 = (state_17171[(2)]);var state_17171__$1 = state_17171;var statearr_17245_17306 = state_17171__$1;(statearr_17245_17306[(2)] = inst_17092);
(statearr_17245_17306[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (42)))
{var state_17171__$1 = state_17171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17171__$1,(45),dchan);
} else
{if((state_val_17172 === (37)))
{var inst_17128 = (state_17171[(17)]);var inst_17137 = cljs.core.first.call(null,inst_17128);var state_17171__$1 = (function (){var statearr_17246 = state_17171;(statearr_17246[(25)] = inst_17137);
return statearr_17246;
})();var statearr_17247_17307 = state_17171__$1;(statearr_17247_17307[(2)] = null);
(statearr_17247_17307[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17172 === (8)))
{var inst_17051 = (state_17171[(14)]);var inst_17050 = (state_17171[(15)]);var inst_17053 = (inst_17051 < inst_17050);var inst_17054 = inst_17053;var state_17171__$1 = state_17171;if(cljs.core.truth_(inst_17054))
{var statearr_17248_17308 = state_17171__$1;(statearr_17248_17308[(1)] = (10));
} else
{var statearr_17249_17309 = state_17171__$1;(statearr_17249_17309[(1)] = (11));
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
});})(c__5708__auto___17257,cs,m,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___17257,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17253[(0)] = state_machine__5694__auto__);
(statearr_17253[(1)] = (1));
return statearr_17253;
});
var state_machine__5694__auto____1 = (function (state_17171){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17171);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17254){if((e17254 instanceof Object))
{var ex__5697__auto__ = e17254;var statearr_17255_17310 = state_17171;(statearr_17255_17310[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17171);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17254;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17311 = state_17171;
state_17171 = G__17311;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17171){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17257,cs,m,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_17256 = f__5709__auto__.call(null);(statearr_17256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17257);
return statearr_17256;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17257,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj17313 = {};return obj17313;
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
;var m = (function (){if(typeof cljs.core.async.t17423 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17423 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta17424){
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
this.meta17424 = meta17424;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17423.cljs$lang$type = true;
cljs.core.async.t17423.cljs$lang$ctorStr = "cljs.core.async/t17423";
cljs.core.async.t17423.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t17423");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17423.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17423.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17423.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17423.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17423.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17423.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17423.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17423.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17423.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17425){var self__ = this;
var _17425__$1 = this;return self__.meta17424;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17423.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17425,meta17424__$1){var self__ = this;
var _17425__$1 = this;return (new cljs.core.async.t17423(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta17424__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17423 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17423(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17424){return (new cljs.core.async.t17423(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta17424));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17423(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5708__auto___17532 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_17490){var state_val_17491 = (state_17490[(1)]);if((state_val_17491 === (7)))
{var inst_17439 = (state_17490[(7)]);var inst_17444 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17439);var state_17490__$1 = state_17490;var statearr_17492_17533 = state_17490__$1;(statearr_17492_17533[(2)] = inst_17444);
(statearr_17492_17533[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (20)))
{var inst_17454 = (state_17490[(8)]);var state_17490__$1 = state_17490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17490__$1,(23),out,inst_17454);
} else
{if((state_val_17491 === (1)))
{var inst_17429 = (state_17490[(9)]);var inst_17429__$1 = calc_state.call(null);var inst_17430 = cljs.core.seq_QMARK_.call(null,inst_17429__$1);var state_17490__$1 = (function (){var statearr_17493 = state_17490;(statearr_17493[(9)] = inst_17429__$1);
return statearr_17493;
})();if(inst_17430)
{var statearr_17494_17534 = state_17490__$1;(statearr_17494_17534[(1)] = (2));
} else
{var statearr_17495_17535 = state_17490__$1;(statearr_17495_17535[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (4)))
{var inst_17429 = (state_17490[(9)]);var inst_17435 = (state_17490[(2)]);var inst_17436 = cljs.core.get.call(null,inst_17435,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17437 = cljs.core.get.call(null,inst_17435,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17438 = cljs.core.get.call(null,inst_17435,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_17439 = inst_17429;var state_17490__$1 = (function (){var statearr_17496 = state_17490;(statearr_17496[(10)] = inst_17438);
(statearr_17496[(11)] = inst_17437);
(statearr_17496[(7)] = inst_17439);
(statearr_17496[(12)] = inst_17436);
return statearr_17496;
})();var statearr_17497_17536 = state_17490__$1;(statearr_17497_17536[(2)] = null);
(statearr_17497_17536[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (15)))
{var state_17490__$1 = state_17490;var statearr_17498_17537 = state_17490__$1;(statearr_17498_17537[(2)] = null);
(statearr_17498_17537[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (21)))
{var state_17490__$1 = state_17490;var statearr_17499_17538 = state_17490__$1;(statearr_17499_17538[(2)] = null);
(statearr_17499_17538[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (13)))
{var inst_17486 = (state_17490[(2)]);var state_17490__$1 = state_17490;var statearr_17500_17539 = state_17490__$1;(statearr_17500_17539[(2)] = inst_17486);
(statearr_17500_17539[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (22)))
{var inst_17447 = (state_17490[(13)]);var inst_17483 = (state_17490[(2)]);var inst_17439 = inst_17447;var state_17490__$1 = (function (){var statearr_17501 = state_17490;(statearr_17501[(14)] = inst_17483);
(statearr_17501[(7)] = inst_17439);
return statearr_17501;
})();var statearr_17502_17540 = state_17490__$1;(statearr_17502_17540[(2)] = null);
(statearr_17502_17540[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (6)))
{var inst_17488 = (state_17490[(2)]);var state_17490__$1 = state_17490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17490__$1,inst_17488);
} else
{if((state_val_17491 === (17)))
{var inst_17469 = (state_17490[(15)]);var state_17490__$1 = state_17490;var statearr_17503_17541 = state_17490__$1;(statearr_17503_17541[(2)] = inst_17469);
(statearr_17503_17541[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (3)))
{var inst_17429 = (state_17490[(9)]);var state_17490__$1 = state_17490;var statearr_17504_17542 = state_17490__$1;(statearr_17504_17542[(2)] = inst_17429);
(statearr_17504_17542[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (12)))
{var inst_17450 = (state_17490[(16)]);var inst_17469 = (state_17490[(15)]);var inst_17455 = (state_17490[(17)]);var inst_17469__$1 = inst_17450.call(null,inst_17455);var state_17490__$1 = (function (){var statearr_17505 = state_17490;(statearr_17505[(15)] = inst_17469__$1);
return statearr_17505;
})();if(cljs.core.truth_(inst_17469__$1))
{var statearr_17506_17543 = state_17490__$1;(statearr_17506_17543[(1)] = (17));
} else
{var statearr_17507_17544 = state_17490__$1;(statearr_17507_17544[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (2)))
{var inst_17429 = (state_17490[(9)]);var inst_17432 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17429);var state_17490__$1 = state_17490;var statearr_17508_17545 = state_17490__$1;(statearr_17508_17545[(2)] = inst_17432);
(statearr_17508_17545[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (23)))
{var inst_17480 = (state_17490[(2)]);var state_17490__$1 = state_17490;var statearr_17509_17546 = state_17490__$1;(statearr_17509_17546[(2)] = inst_17480);
(statearr_17509_17546[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (19)))
{var inst_17477 = (state_17490[(2)]);var state_17490__$1 = state_17490;if(cljs.core.truth_(inst_17477))
{var statearr_17510_17547 = state_17490__$1;(statearr_17510_17547[(1)] = (20));
} else
{var statearr_17511_17548 = state_17490__$1;(statearr_17511_17548[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (11)))
{var inst_17454 = (state_17490[(8)]);var inst_17460 = (inst_17454 == null);var state_17490__$1 = state_17490;if(cljs.core.truth_(inst_17460))
{var statearr_17512_17549 = state_17490__$1;(statearr_17512_17549[(1)] = (14));
} else
{var statearr_17513_17550 = state_17490__$1;(statearr_17513_17550[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (9)))
{var inst_17447 = (state_17490[(13)]);var inst_17447__$1 = (state_17490[(2)]);var inst_17448 = cljs.core.get.call(null,inst_17447__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_17449 = cljs.core.get.call(null,inst_17447__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_17450 = cljs.core.get.call(null,inst_17447__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_17490__$1 = (function (){var statearr_17514 = state_17490;(statearr_17514[(16)] = inst_17450);
(statearr_17514[(13)] = inst_17447__$1);
(statearr_17514[(18)] = inst_17449);
return statearr_17514;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17490__$1,(10),inst_17448);
} else
{if((state_val_17491 === (5)))
{var inst_17439 = (state_17490[(7)]);var inst_17442 = cljs.core.seq_QMARK_.call(null,inst_17439);var state_17490__$1 = state_17490;if(inst_17442)
{var statearr_17515_17551 = state_17490__$1;(statearr_17515_17551[(1)] = (7));
} else
{var statearr_17516_17552 = state_17490__$1;(statearr_17516_17552[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (14)))
{var inst_17455 = (state_17490[(17)]);var inst_17462 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17455);var state_17490__$1 = state_17490;var statearr_17517_17553 = state_17490__$1;(statearr_17517_17553[(2)] = inst_17462);
(statearr_17517_17553[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (16)))
{var inst_17465 = (state_17490[(2)]);var inst_17466 = calc_state.call(null);var inst_17439 = inst_17466;var state_17490__$1 = (function (){var statearr_17518 = state_17490;(statearr_17518[(19)] = inst_17465);
(statearr_17518[(7)] = inst_17439);
return statearr_17518;
})();var statearr_17519_17554 = state_17490__$1;(statearr_17519_17554[(2)] = null);
(statearr_17519_17554[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (10)))
{var inst_17455 = (state_17490[(17)]);var inst_17454 = (state_17490[(8)]);var inst_17453 = (state_17490[(2)]);var inst_17454__$1 = cljs.core.nth.call(null,inst_17453,(0),null);var inst_17455__$1 = cljs.core.nth.call(null,inst_17453,(1),null);var inst_17456 = (inst_17454__$1 == null);var inst_17457 = cljs.core._EQ_.call(null,inst_17455__$1,change);var inst_17458 = (inst_17456) || (inst_17457);var state_17490__$1 = (function (){var statearr_17520 = state_17490;(statearr_17520[(17)] = inst_17455__$1);
(statearr_17520[(8)] = inst_17454__$1);
return statearr_17520;
})();if(cljs.core.truth_(inst_17458))
{var statearr_17521_17555 = state_17490__$1;(statearr_17521_17555[(1)] = (11));
} else
{var statearr_17522_17556 = state_17490__$1;(statearr_17522_17556[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (18)))
{var inst_17450 = (state_17490[(16)]);var inst_17455 = (state_17490[(17)]);var inst_17449 = (state_17490[(18)]);var inst_17472 = cljs.core.empty_QMARK_.call(null,inst_17450);var inst_17473 = inst_17449.call(null,inst_17455);var inst_17474 = cljs.core.not.call(null,inst_17473);var inst_17475 = (inst_17472) && (inst_17474);var state_17490__$1 = state_17490;var statearr_17523_17557 = state_17490__$1;(statearr_17523_17557[(2)] = inst_17475);
(statearr_17523_17557[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17491 === (8)))
{var inst_17439 = (state_17490[(7)]);var state_17490__$1 = state_17490;var statearr_17524_17558 = state_17490__$1;(statearr_17524_17558[(2)] = inst_17439);
(statearr_17524_17558[(1)] = (9));
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
});})(c__5708__auto___17532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5693__auto__,c__5708__auto___17532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17528[(0)] = state_machine__5694__auto__);
(statearr_17528[(1)] = (1));
return statearr_17528;
});
var state_machine__5694__auto____1 = (function (state_17490){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17529){if((e17529 instanceof Object))
{var ex__5697__auto__ = e17529;var statearr_17530_17559 = state_17490;(statearr_17530_17559[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17490);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17529;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17560 = state_17490;
state_17490 = G__17560;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17490){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5710__auto__ = (function (){var statearr_17531 = f__5709__auto__.call(null);(statearr_17531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17532);
return statearr_17531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17532,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj17562 = {};return obj17562;
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
return (function (p1__17563_SHARP_){if(cljs.core.truth_(p1__17563_SHARP_.call(null,topic)))
{return p1__17563_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17563_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3558__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17688 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17688 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17689){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17689 = meta17689;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17688.cljs$lang$type = true;
cljs.core.async.t17688.cljs$lang$ctorStr = "cljs.core.async/t17688";
cljs.core.async.t17688.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4125__auto__,writer__4126__auto__,opt__4127__auto__){return cljs.core._write.call(null,writer__4126__auto__,"cljs.core.async/t17688");
});})(mults,ensure_mult))
;
cljs.core.async.t17688.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17688.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17688.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17688.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17688.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17688.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17688.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17690){var self__ = this;
var _17690__$1 = this;return self__.meta17689;
});})(mults,ensure_mult))
;
cljs.core.async.t17688.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17690,meta17689__$1){var self__ = this;
var _17690__$1 = this;return (new cljs.core.async.t17688(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17689__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17688 = ((function (mults,ensure_mult){
return (function __GT_t17688(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17689){return (new cljs.core.async.t17688(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17689));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17688(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5708__auto___17812 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17812,mults,ensure_mult,p){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17812,mults,ensure_mult,p){
return (function (state_17764){var state_val_17765 = (state_17764[(1)]);if((state_val_17765 === (7)))
{var inst_17760 = (state_17764[(2)]);var state_17764__$1 = state_17764;var statearr_17766_17813 = state_17764__$1;(statearr_17766_17813[(2)] = inst_17760);
(statearr_17766_17813[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (20)))
{var state_17764__$1 = state_17764;var statearr_17767_17814 = state_17764__$1;(statearr_17767_17814[(2)] = null);
(statearr_17767_17814[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (1)))
{var state_17764__$1 = state_17764;var statearr_17768_17815 = state_17764__$1;(statearr_17768_17815[(2)] = null);
(statearr_17768_17815[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (24)))
{var inst_17743 = (state_17764[(7)]);var inst_17693 = (state_17764[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17764,(23),Object,null,(22));var inst_17750 = cljs.core.async.muxch_STAR_.call(null,inst_17743);var state_17764__$1 = state_17764;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17764__$1,(25),inst_17750,inst_17693);
} else
{if((state_val_17765 === (4)))
{var inst_17693 = (state_17764[(8)]);var inst_17693__$1 = (state_17764[(2)]);var inst_17694 = (inst_17693__$1 == null);var state_17764__$1 = (function (){var statearr_17769 = state_17764;(statearr_17769[(8)] = inst_17693__$1);
return statearr_17769;
})();if(cljs.core.truth_(inst_17694))
{var statearr_17770_17816 = state_17764__$1;(statearr_17770_17816[(1)] = (5));
} else
{var statearr_17771_17817 = state_17764__$1;(statearr_17771_17817[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (15)))
{var inst_17735 = (state_17764[(2)]);var state_17764__$1 = state_17764;var statearr_17772_17818 = state_17764__$1;(statearr_17772_17818[(2)] = inst_17735);
(statearr_17772_17818[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (21)))
{var inst_17757 = (state_17764[(2)]);var state_17764__$1 = (function (){var statearr_17773 = state_17764;(statearr_17773[(9)] = inst_17757);
return statearr_17773;
})();var statearr_17774_17819 = state_17764__$1;(statearr_17774_17819[(2)] = null);
(statearr_17774_17819[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (13)))
{var inst_17717 = (state_17764[(10)]);var inst_17719 = cljs.core.chunked_seq_QMARK_.call(null,inst_17717);var state_17764__$1 = state_17764;if(inst_17719)
{var statearr_17775_17820 = state_17764__$1;(statearr_17775_17820[(1)] = (16));
} else
{var statearr_17776_17821 = state_17764__$1;(statearr_17776_17821[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (22)))
{var inst_17754 = (state_17764[(2)]);var state_17764__$1 = state_17764;var statearr_17777_17822 = state_17764__$1;(statearr_17777_17822[(2)] = inst_17754);
(statearr_17777_17822[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (6)))
{var inst_17743 = (state_17764[(7)]);var inst_17741 = (state_17764[(11)]);var inst_17693 = (state_17764[(8)]);var inst_17741__$1 = topic_fn.call(null,inst_17693);var inst_17742 = cljs.core.deref.call(null,mults);var inst_17743__$1 = cljs.core.get.call(null,inst_17742,inst_17741__$1);var state_17764__$1 = (function (){var statearr_17778 = state_17764;(statearr_17778[(7)] = inst_17743__$1);
(statearr_17778[(11)] = inst_17741__$1);
return statearr_17778;
})();if(cljs.core.truth_(inst_17743__$1))
{var statearr_17779_17823 = state_17764__$1;(statearr_17779_17823[(1)] = (19));
} else
{var statearr_17780_17824 = state_17764__$1;(statearr_17780_17824[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (25)))
{var inst_17752 = (state_17764[(2)]);var state_17764__$1 = state_17764;var statearr_17781_17825 = state_17764__$1;(statearr_17781_17825[(2)] = inst_17752);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17764__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (17)))
{var inst_17717 = (state_17764[(10)]);var inst_17726 = cljs.core.first.call(null,inst_17717);var inst_17727 = cljs.core.async.muxch_STAR_.call(null,inst_17726);var inst_17728 = cljs.core.async.close_BANG_.call(null,inst_17727);var inst_17729 = cljs.core.next.call(null,inst_17717);var inst_17703 = inst_17729;var inst_17704 = null;var inst_17705 = (0);var inst_17706 = (0);var state_17764__$1 = (function (){var statearr_17782 = state_17764;(statearr_17782[(12)] = inst_17706);
(statearr_17782[(13)] = inst_17728);
(statearr_17782[(14)] = inst_17704);
(statearr_17782[(15)] = inst_17703);
(statearr_17782[(16)] = inst_17705);
return statearr_17782;
})();var statearr_17783_17826 = state_17764__$1;(statearr_17783_17826[(2)] = null);
(statearr_17783_17826[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (3)))
{var inst_17762 = (state_17764[(2)]);var state_17764__$1 = state_17764;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17764__$1,inst_17762);
} else
{if((state_val_17765 === (12)))
{var inst_17737 = (state_17764[(2)]);var state_17764__$1 = state_17764;var statearr_17784_17827 = state_17764__$1;(statearr_17784_17827[(2)] = inst_17737);
(statearr_17784_17827[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (2)))
{var state_17764__$1 = state_17764;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17764__$1,(4),ch);
} else
{if((state_val_17765 === (23)))
{var inst_17741 = (state_17764[(11)]);var inst_17745 = (state_17764[(2)]);var inst_17746 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17741);var state_17764__$1 = (function (){var statearr_17785 = state_17764;(statearr_17785[(17)] = inst_17745);
return statearr_17785;
})();var statearr_17786_17828 = state_17764__$1;(statearr_17786_17828[(2)] = inst_17746);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17764__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (19)))
{var state_17764__$1 = state_17764;var statearr_17787_17829 = state_17764__$1;(statearr_17787_17829[(2)] = null);
(statearr_17787_17829[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (11)))
{var inst_17717 = (state_17764[(10)]);var inst_17703 = (state_17764[(15)]);var inst_17717__$1 = cljs.core.seq.call(null,inst_17703);var state_17764__$1 = (function (){var statearr_17788 = state_17764;(statearr_17788[(10)] = inst_17717__$1);
return statearr_17788;
})();if(inst_17717__$1)
{var statearr_17789_17830 = state_17764__$1;(statearr_17789_17830[(1)] = (13));
} else
{var statearr_17790_17831 = state_17764__$1;(statearr_17790_17831[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (9)))
{var inst_17739 = (state_17764[(2)]);var state_17764__$1 = state_17764;var statearr_17791_17832 = state_17764__$1;(statearr_17791_17832[(2)] = inst_17739);
(statearr_17791_17832[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (5)))
{var inst_17700 = cljs.core.deref.call(null,mults);var inst_17701 = cljs.core.vals.call(null,inst_17700);var inst_17702 = cljs.core.seq.call(null,inst_17701);var inst_17703 = inst_17702;var inst_17704 = null;var inst_17705 = (0);var inst_17706 = (0);var state_17764__$1 = (function (){var statearr_17792 = state_17764;(statearr_17792[(12)] = inst_17706);
(statearr_17792[(14)] = inst_17704);
(statearr_17792[(15)] = inst_17703);
(statearr_17792[(16)] = inst_17705);
return statearr_17792;
})();var statearr_17793_17833 = state_17764__$1;(statearr_17793_17833[(2)] = null);
(statearr_17793_17833[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (14)))
{var state_17764__$1 = state_17764;var statearr_17797_17834 = state_17764__$1;(statearr_17797_17834[(2)] = null);
(statearr_17797_17834[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (16)))
{var inst_17717 = (state_17764[(10)]);var inst_17721 = cljs.core.chunk_first.call(null,inst_17717);var inst_17722 = cljs.core.chunk_rest.call(null,inst_17717);var inst_17723 = cljs.core.count.call(null,inst_17721);var inst_17703 = inst_17722;var inst_17704 = inst_17721;var inst_17705 = inst_17723;var inst_17706 = (0);var state_17764__$1 = (function (){var statearr_17798 = state_17764;(statearr_17798[(12)] = inst_17706);
(statearr_17798[(14)] = inst_17704);
(statearr_17798[(15)] = inst_17703);
(statearr_17798[(16)] = inst_17705);
return statearr_17798;
})();var statearr_17799_17835 = state_17764__$1;(statearr_17799_17835[(2)] = null);
(statearr_17799_17835[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (10)))
{var inst_17706 = (state_17764[(12)]);var inst_17704 = (state_17764[(14)]);var inst_17703 = (state_17764[(15)]);var inst_17705 = (state_17764[(16)]);var inst_17711 = cljs.core._nth.call(null,inst_17704,inst_17706);var inst_17712 = cljs.core.async.muxch_STAR_.call(null,inst_17711);var inst_17713 = cljs.core.async.close_BANG_.call(null,inst_17712);var inst_17714 = (inst_17706 + (1));var tmp17794 = inst_17704;var tmp17795 = inst_17703;var tmp17796 = inst_17705;var inst_17703__$1 = tmp17795;var inst_17704__$1 = tmp17794;var inst_17705__$1 = tmp17796;var inst_17706__$1 = inst_17714;var state_17764__$1 = (function (){var statearr_17800 = state_17764;(statearr_17800[(12)] = inst_17706__$1);
(statearr_17800[(14)] = inst_17704__$1);
(statearr_17800[(15)] = inst_17703__$1);
(statearr_17800[(16)] = inst_17705__$1);
(statearr_17800[(18)] = inst_17713);
return statearr_17800;
})();var statearr_17801_17836 = state_17764__$1;(statearr_17801_17836[(2)] = null);
(statearr_17801_17836[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (18)))
{var inst_17732 = (state_17764[(2)]);var state_17764__$1 = state_17764;var statearr_17802_17837 = state_17764__$1;(statearr_17802_17837[(2)] = inst_17732);
(statearr_17802_17837[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17765 === (8)))
{var inst_17706 = (state_17764[(12)]);var inst_17705 = (state_17764[(16)]);var inst_17708 = (inst_17706 < inst_17705);var inst_17709 = inst_17708;var state_17764__$1 = state_17764;if(cljs.core.truth_(inst_17709))
{var statearr_17803_17838 = state_17764__$1;(statearr_17803_17838[(1)] = (10));
} else
{var statearr_17804_17839 = state_17764__$1;(statearr_17804_17839[(1)] = (11));
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
});})(c__5708__auto___17812,mults,ensure_mult,p))
;return ((function (switch__5693__auto__,c__5708__auto___17812,mults,ensure_mult,p){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17808 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17808[(0)] = state_machine__5694__auto__);
(statearr_17808[(1)] = (1));
return statearr_17808;
});
var state_machine__5694__auto____1 = (function (state_17764){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17764);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17809){if((e17809 instanceof Object))
{var ex__5697__auto__ = e17809;var statearr_17810_17840 = state_17764;(statearr_17810_17840[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17764);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17809;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17841 = state_17764;
state_17764 = G__17841;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17764){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17764);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17812,mults,ensure_mult,p))
})();var state__5710__auto__ = (function (){var statearr_17811 = f__5709__auto__.call(null);(statearr_17811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17812);
return statearr_17811;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17812,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5708__auto___17978 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___17978,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___17978,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17948){var state_val_17949 = (state_17948[(1)]);if((state_val_17949 === (7)))
{var state_17948__$1 = state_17948;var statearr_17950_17979 = state_17948__$1;(statearr_17950_17979[(2)] = null);
(statearr_17950_17979[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (1)))
{var state_17948__$1 = state_17948;var statearr_17951_17980 = state_17948__$1;(statearr_17951_17980[(2)] = null);
(statearr_17951_17980[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (4)))
{var inst_17912 = (state_17948[(7)]);var inst_17914 = (inst_17912 < cnt);var state_17948__$1 = state_17948;if(cljs.core.truth_(inst_17914))
{var statearr_17952_17981 = state_17948__$1;(statearr_17952_17981[(1)] = (6));
} else
{var statearr_17953_17982 = state_17948__$1;(statearr_17953_17982[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (15)))
{var inst_17944 = (state_17948[(2)]);var state_17948__$1 = state_17948;var statearr_17954_17983 = state_17948__$1;(statearr_17954_17983[(2)] = inst_17944);
(statearr_17954_17983[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (13)))
{var inst_17937 = cljs.core.async.close_BANG_.call(null,out);var state_17948__$1 = state_17948;var statearr_17955_17984 = state_17948__$1;(statearr_17955_17984[(2)] = inst_17937);
(statearr_17955_17984[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (6)))
{var state_17948__$1 = state_17948;var statearr_17956_17985 = state_17948__$1;(statearr_17956_17985[(2)] = null);
(statearr_17956_17985[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (3)))
{var inst_17946 = (state_17948[(2)]);var state_17948__$1 = state_17948;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17948__$1,inst_17946);
} else
{if((state_val_17949 === (12)))
{var inst_17934 = (state_17948[(8)]);var inst_17934__$1 = (state_17948[(2)]);var inst_17935 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17934__$1);var state_17948__$1 = (function (){var statearr_17957 = state_17948;(statearr_17957[(8)] = inst_17934__$1);
return statearr_17957;
})();if(cljs.core.truth_(inst_17935))
{var statearr_17958_17986 = state_17948__$1;(statearr_17958_17986[(1)] = (13));
} else
{var statearr_17959_17987 = state_17948__$1;(statearr_17959_17987[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (2)))
{var inst_17911 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17912 = (0);var state_17948__$1 = (function (){var statearr_17960 = state_17948;(statearr_17960[(9)] = inst_17911);
(statearr_17960[(7)] = inst_17912);
return statearr_17960;
})();var statearr_17961_17988 = state_17948__$1;(statearr_17961_17988[(2)] = null);
(statearr_17961_17988[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (11)))
{var inst_17912 = (state_17948[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17948,(10),Object,null,(9));var inst_17921 = chs__$1.call(null,inst_17912);var inst_17922 = done.call(null,inst_17912);var inst_17923 = cljs.core.async.take_BANG_.call(null,inst_17921,inst_17922);var state_17948__$1 = state_17948;var statearr_17962_17989 = state_17948__$1;(statearr_17962_17989[(2)] = inst_17923);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17948__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (9)))
{var inst_17912 = (state_17948[(7)]);var inst_17925 = (state_17948[(2)]);var inst_17926 = (inst_17912 + (1));var inst_17912__$1 = inst_17926;var state_17948__$1 = (function (){var statearr_17963 = state_17948;(statearr_17963[(7)] = inst_17912__$1);
(statearr_17963[(10)] = inst_17925);
return statearr_17963;
})();var statearr_17964_17990 = state_17948__$1;(statearr_17964_17990[(2)] = null);
(statearr_17964_17990[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (5)))
{var inst_17932 = (state_17948[(2)]);var state_17948__$1 = (function (){var statearr_17965 = state_17948;(statearr_17965[(11)] = inst_17932);
return statearr_17965;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17948__$1,(12),dchan);
} else
{if((state_val_17949 === (14)))
{var inst_17934 = (state_17948[(8)]);var inst_17939 = cljs.core.apply.call(null,f,inst_17934);var state_17948__$1 = state_17948;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17948__$1,(16),out,inst_17939);
} else
{if((state_val_17949 === (16)))
{var inst_17941 = (state_17948[(2)]);var state_17948__$1 = (function (){var statearr_17966 = state_17948;(statearr_17966[(12)] = inst_17941);
return statearr_17966;
})();var statearr_17967_17991 = state_17948__$1;(statearr_17967_17991[(2)] = null);
(statearr_17967_17991[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (10)))
{var inst_17916 = (state_17948[(2)]);var inst_17917 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17948__$1 = (function (){var statearr_17968 = state_17948;(statearr_17968[(13)] = inst_17916);
return statearr_17968;
})();var statearr_17969_17992 = state_17948__$1;(statearr_17969_17992[(2)] = inst_17917);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17948__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17949 === (8)))
{var inst_17930 = (state_17948[(2)]);var state_17948__$1 = state_17948;var statearr_17970_17993 = state_17948__$1;(statearr_17970_17993[(2)] = inst_17930);
(statearr_17970_17993[(1)] = (5));
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
});})(c__5708__auto___17978,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5693__auto__,c__5708__auto___17978,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_17974 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17974[(0)] = state_machine__5694__auto__);
(statearr_17974[(1)] = (1));
return statearr_17974;
});
var state_machine__5694__auto____1 = (function (state_17948){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_17948);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e17975){if((e17975 instanceof Object))
{var ex__5697__auto__ = e17975;var statearr_17976_17994 = state_17948;(statearr_17976_17994[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17948);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e17975;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17995 = state_17948;
state_17948 = G__17995;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_17948){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_17948);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___17978,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5710__auto__ = (function (){var statearr_17977 = f__5709__auto__.call(null);(statearr_17977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___17978);
return statearr_17977;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___17978,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18103 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18103,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18103,out){
return (function (state_18079){var state_val_18080 = (state_18079[(1)]);if((state_val_18080 === (7)))
{var inst_18058 = (state_18079[(7)]);var inst_18059 = (state_18079[(8)]);var inst_18058__$1 = (state_18079[(2)]);var inst_18059__$1 = cljs.core.nth.call(null,inst_18058__$1,(0),null);var inst_18060 = cljs.core.nth.call(null,inst_18058__$1,(1),null);var inst_18061 = (inst_18059__$1 == null);var state_18079__$1 = (function (){var statearr_18081 = state_18079;(statearr_18081[(7)] = inst_18058__$1);
(statearr_18081[(8)] = inst_18059__$1);
(statearr_18081[(9)] = inst_18060);
return statearr_18081;
})();if(cljs.core.truth_(inst_18061))
{var statearr_18082_18104 = state_18079__$1;(statearr_18082_18104[(1)] = (8));
} else
{var statearr_18083_18105 = state_18079__$1;(statearr_18083_18105[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18080 === (1)))
{var inst_18050 = cljs.core.vec.call(null,chs);var inst_18051 = inst_18050;var state_18079__$1 = (function (){var statearr_18084 = state_18079;(statearr_18084[(10)] = inst_18051);
return statearr_18084;
})();var statearr_18085_18106 = state_18079__$1;(statearr_18085_18106[(2)] = null);
(statearr_18085_18106[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18080 === (4)))
{var inst_18051 = (state_18079[(10)]);var state_18079__$1 = state_18079;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_18079__$1,(7),inst_18051);
} else
{if((state_val_18080 === (6)))
{var inst_18075 = (state_18079[(2)]);var state_18079__$1 = state_18079;var statearr_18086_18107 = state_18079__$1;(statearr_18086_18107[(2)] = inst_18075);
(statearr_18086_18107[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18080 === (3)))
{var inst_18077 = (state_18079[(2)]);var state_18079__$1 = state_18079;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18079__$1,inst_18077);
} else
{if((state_val_18080 === (2)))
{var inst_18051 = (state_18079[(10)]);var inst_18053 = cljs.core.count.call(null,inst_18051);var inst_18054 = (inst_18053 > (0));var state_18079__$1 = state_18079;if(cljs.core.truth_(inst_18054))
{var statearr_18088_18108 = state_18079__$1;(statearr_18088_18108[(1)] = (4));
} else
{var statearr_18089_18109 = state_18079__$1;(statearr_18089_18109[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18080 === (11)))
{var inst_18051 = (state_18079[(10)]);var inst_18068 = (state_18079[(2)]);var tmp18087 = inst_18051;var inst_18051__$1 = tmp18087;var state_18079__$1 = (function (){var statearr_18090 = state_18079;(statearr_18090[(10)] = inst_18051__$1);
(statearr_18090[(11)] = inst_18068);
return statearr_18090;
})();var statearr_18091_18110 = state_18079__$1;(statearr_18091_18110[(2)] = null);
(statearr_18091_18110[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18080 === (9)))
{var inst_18059 = (state_18079[(8)]);var state_18079__$1 = state_18079;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18079__$1,(11),out,inst_18059);
} else
{if((state_val_18080 === (5)))
{var inst_18073 = cljs.core.async.close_BANG_.call(null,out);var state_18079__$1 = state_18079;var statearr_18092_18111 = state_18079__$1;(statearr_18092_18111[(2)] = inst_18073);
(statearr_18092_18111[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18080 === (10)))
{var inst_18071 = (state_18079[(2)]);var state_18079__$1 = state_18079;var statearr_18093_18112 = state_18079__$1;(statearr_18093_18112[(2)] = inst_18071);
(statearr_18093_18112[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18080 === (8)))
{var inst_18051 = (state_18079[(10)]);var inst_18058 = (state_18079[(7)]);var inst_18059 = (state_18079[(8)]);var inst_18060 = (state_18079[(9)]);var inst_18063 = (function (){var c = inst_18060;var v = inst_18059;var vec__18056 = inst_18058;var cs = inst_18051;return ((function (c,v,vec__18056,cs,inst_18051,inst_18058,inst_18059,inst_18060,state_val_18080,c__5708__auto___18103,out){
return (function (p1__17996_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17996_SHARP_);
});
;})(c,v,vec__18056,cs,inst_18051,inst_18058,inst_18059,inst_18060,state_val_18080,c__5708__auto___18103,out))
})();var inst_18064 = cljs.core.filterv.call(null,inst_18063,inst_18051);var inst_18051__$1 = inst_18064;var state_18079__$1 = (function (){var statearr_18094 = state_18079;(statearr_18094[(10)] = inst_18051__$1);
return statearr_18094;
})();var statearr_18095_18113 = state_18079__$1;(statearr_18095_18113[(2)] = null);
(statearr_18095_18113[(1)] = (2));
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
});})(c__5708__auto___18103,out))
;return ((function (switch__5693__auto__,c__5708__auto___18103,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18099 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18099[(0)] = state_machine__5694__auto__);
(statearr_18099[(1)] = (1));
return statearr_18099;
});
var state_machine__5694__auto____1 = (function (state_18079){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18079);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18100){if((e18100 instanceof Object))
{var ex__5697__auto__ = e18100;var statearr_18101_18114 = state_18079;(statearr_18101_18114[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18079);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18100;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18115 = state_18079;
state_18079 = G__18115;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18079){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18079);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18103,out))
})();var state__5710__auto__ = (function (){var statearr_18102 = f__5709__auto__.call(null);(statearr_18102[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18103);
return statearr_18102;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18103,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18208 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18208,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18208,out){
return (function (state_18185){var state_val_18186 = (state_18185[(1)]);if((state_val_18186 === (7)))
{var inst_18167 = (state_18185[(7)]);var inst_18167__$1 = (state_18185[(2)]);var inst_18168 = (inst_18167__$1 == null);var inst_18169 = cljs.core.not.call(null,inst_18168);var state_18185__$1 = (function (){var statearr_18187 = state_18185;(statearr_18187[(7)] = inst_18167__$1);
return statearr_18187;
})();if(inst_18169)
{var statearr_18188_18209 = state_18185__$1;(statearr_18188_18209[(1)] = (8));
} else
{var statearr_18189_18210 = state_18185__$1;(statearr_18189_18210[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18186 === (1)))
{var inst_18162 = (0);var state_18185__$1 = (function (){var statearr_18190 = state_18185;(statearr_18190[(8)] = inst_18162);
return statearr_18190;
})();var statearr_18191_18211 = state_18185__$1;(statearr_18191_18211[(2)] = null);
(statearr_18191_18211[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18186 === (4)))
{var state_18185__$1 = state_18185;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18185__$1,(7),ch);
} else
{if((state_val_18186 === (6)))
{var inst_18180 = (state_18185[(2)]);var state_18185__$1 = state_18185;var statearr_18192_18212 = state_18185__$1;(statearr_18192_18212[(2)] = inst_18180);
(statearr_18192_18212[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18186 === (3)))
{var inst_18182 = (state_18185[(2)]);var inst_18183 = cljs.core.async.close_BANG_.call(null,out);var state_18185__$1 = (function (){var statearr_18193 = state_18185;(statearr_18193[(9)] = inst_18182);
return statearr_18193;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18185__$1,inst_18183);
} else
{if((state_val_18186 === (2)))
{var inst_18162 = (state_18185[(8)]);var inst_18164 = (inst_18162 < n);var state_18185__$1 = state_18185;if(cljs.core.truth_(inst_18164))
{var statearr_18194_18213 = state_18185__$1;(statearr_18194_18213[(1)] = (4));
} else
{var statearr_18195_18214 = state_18185__$1;(statearr_18195_18214[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18186 === (11)))
{var inst_18162 = (state_18185[(8)]);var inst_18172 = (state_18185[(2)]);var inst_18173 = (inst_18162 + (1));var inst_18162__$1 = inst_18173;var state_18185__$1 = (function (){var statearr_18196 = state_18185;(statearr_18196[(8)] = inst_18162__$1);
(statearr_18196[(10)] = inst_18172);
return statearr_18196;
})();var statearr_18197_18215 = state_18185__$1;(statearr_18197_18215[(2)] = null);
(statearr_18197_18215[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18186 === (9)))
{var state_18185__$1 = state_18185;var statearr_18198_18216 = state_18185__$1;(statearr_18198_18216[(2)] = null);
(statearr_18198_18216[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18186 === (5)))
{var state_18185__$1 = state_18185;var statearr_18199_18217 = state_18185__$1;(statearr_18199_18217[(2)] = null);
(statearr_18199_18217[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18186 === (10)))
{var inst_18177 = (state_18185[(2)]);var state_18185__$1 = state_18185;var statearr_18200_18218 = state_18185__$1;(statearr_18200_18218[(2)] = inst_18177);
(statearr_18200_18218[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18186 === (8)))
{var inst_18167 = (state_18185[(7)]);var state_18185__$1 = state_18185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18185__$1,(11),out,inst_18167);
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
});})(c__5708__auto___18208,out))
;return ((function (switch__5693__auto__,c__5708__auto___18208,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18204 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18204[(0)] = state_machine__5694__auto__);
(statearr_18204[(1)] = (1));
return statearr_18204;
});
var state_machine__5694__auto____1 = (function (state_18185){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18185);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18205){if((e18205 instanceof Object))
{var ex__5697__auto__ = e18205;var statearr_18206_18219 = state_18185;(statearr_18206_18219[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18185);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18205;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18220 = state_18185;
state_18185 = G__18220;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18185){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18208,out))
})();var state__5710__auto__ = (function (){var statearr_18207 = f__5709__auto__.call(null);(statearr_18207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18208);
return statearr_18207;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18208,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18317 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18317,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18317,out){
return (function (state_18292){var state_val_18293 = (state_18292[(1)]);if((state_val_18293 === (7)))
{var inst_18287 = (state_18292[(2)]);var state_18292__$1 = state_18292;var statearr_18294_18318 = state_18292__$1;(statearr_18294_18318[(2)] = inst_18287);
(statearr_18294_18318[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18293 === (1)))
{var inst_18269 = null;var state_18292__$1 = (function (){var statearr_18295 = state_18292;(statearr_18295[(7)] = inst_18269);
return statearr_18295;
})();var statearr_18296_18319 = state_18292__$1;(statearr_18296_18319[(2)] = null);
(statearr_18296_18319[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18293 === (4)))
{var inst_18272 = (state_18292[(8)]);var inst_18272__$1 = (state_18292[(2)]);var inst_18273 = (inst_18272__$1 == null);var inst_18274 = cljs.core.not.call(null,inst_18273);var state_18292__$1 = (function (){var statearr_18297 = state_18292;(statearr_18297[(8)] = inst_18272__$1);
return statearr_18297;
})();if(inst_18274)
{var statearr_18298_18320 = state_18292__$1;(statearr_18298_18320[(1)] = (5));
} else
{var statearr_18299_18321 = state_18292__$1;(statearr_18299_18321[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18293 === (6)))
{var state_18292__$1 = state_18292;var statearr_18300_18322 = state_18292__$1;(statearr_18300_18322[(2)] = null);
(statearr_18300_18322[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18293 === (3)))
{var inst_18289 = (state_18292[(2)]);var inst_18290 = cljs.core.async.close_BANG_.call(null,out);var state_18292__$1 = (function (){var statearr_18301 = state_18292;(statearr_18301[(9)] = inst_18289);
return statearr_18301;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18292__$1,inst_18290);
} else
{if((state_val_18293 === (2)))
{var state_18292__$1 = state_18292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18292__$1,(4),ch);
} else
{if((state_val_18293 === (11)))
{var inst_18272 = (state_18292[(8)]);var inst_18281 = (state_18292[(2)]);var inst_18269 = inst_18272;var state_18292__$1 = (function (){var statearr_18302 = state_18292;(statearr_18302[(10)] = inst_18281);
(statearr_18302[(7)] = inst_18269);
return statearr_18302;
})();var statearr_18303_18323 = state_18292__$1;(statearr_18303_18323[(2)] = null);
(statearr_18303_18323[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18293 === (9)))
{var inst_18272 = (state_18292[(8)]);var state_18292__$1 = state_18292;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18292__$1,(11),out,inst_18272);
} else
{if((state_val_18293 === (5)))
{var inst_18272 = (state_18292[(8)]);var inst_18269 = (state_18292[(7)]);var inst_18276 = cljs.core._EQ_.call(null,inst_18272,inst_18269);var state_18292__$1 = state_18292;if(inst_18276)
{var statearr_18305_18324 = state_18292__$1;(statearr_18305_18324[(1)] = (8));
} else
{var statearr_18306_18325 = state_18292__$1;(statearr_18306_18325[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18293 === (10)))
{var inst_18284 = (state_18292[(2)]);var state_18292__$1 = state_18292;var statearr_18307_18326 = state_18292__$1;(statearr_18307_18326[(2)] = inst_18284);
(statearr_18307_18326[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18293 === (8)))
{var inst_18269 = (state_18292[(7)]);var tmp18304 = inst_18269;var inst_18269__$1 = tmp18304;var state_18292__$1 = (function (){var statearr_18308 = state_18292;(statearr_18308[(7)] = inst_18269__$1);
return statearr_18308;
})();var statearr_18309_18327 = state_18292__$1;(statearr_18309_18327[(2)] = null);
(statearr_18309_18327[(1)] = (2));
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
});})(c__5708__auto___18317,out))
;return ((function (switch__5693__auto__,c__5708__auto___18317,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18313 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_18313[(0)] = state_machine__5694__auto__);
(statearr_18313[(1)] = (1));
return statearr_18313;
});
var state_machine__5694__auto____1 = (function (state_18292){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18292);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18314){if((e18314 instanceof Object))
{var ex__5697__auto__ = e18314;var statearr_18315_18328 = state_18292;(statearr_18315_18328[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18292);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18314;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18329 = state_18292;
state_18292 = G__18329;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18292){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18317,out))
})();var state__5710__auto__ = (function (){var statearr_18316 = f__5709__auto__.call(null);(statearr_18316[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18317);
return statearr_18316;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18317,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18464 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18464,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18464,out){
return (function (state_18434){var state_val_18435 = (state_18434[(1)]);if((state_val_18435 === (7)))
{var inst_18430 = (state_18434[(2)]);var state_18434__$1 = state_18434;var statearr_18436_18465 = state_18434__$1;(statearr_18436_18465[(2)] = inst_18430);
(statearr_18436_18465[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (1)))
{var inst_18397 = (new Array(n));var inst_18398 = inst_18397;var inst_18399 = (0);var state_18434__$1 = (function (){var statearr_18437 = state_18434;(statearr_18437[(7)] = inst_18398);
(statearr_18437[(8)] = inst_18399);
return statearr_18437;
})();var statearr_18438_18466 = state_18434__$1;(statearr_18438_18466[(2)] = null);
(statearr_18438_18466[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (4)))
{var inst_18402 = (state_18434[(9)]);var inst_18402__$1 = (state_18434[(2)]);var inst_18403 = (inst_18402__$1 == null);var inst_18404 = cljs.core.not.call(null,inst_18403);var state_18434__$1 = (function (){var statearr_18439 = state_18434;(statearr_18439[(9)] = inst_18402__$1);
return statearr_18439;
})();if(inst_18404)
{var statearr_18440_18467 = state_18434__$1;(statearr_18440_18467[(1)] = (5));
} else
{var statearr_18441_18468 = state_18434__$1;(statearr_18441_18468[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (15)))
{var inst_18424 = (state_18434[(2)]);var state_18434__$1 = state_18434;var statearr_18442_18469 = state_18434__$1;(statearr_18442_18469[(2)] = inst_18424);
(statearr_18442_18469[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (13)))
{var state_18434__$1 = state_18434;var statearr_18443_18470 = state_18434__$1;(statearr_18443_18470[(2)] = null);
(statearr_18443_18470[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (6)))
{var inst_18399 = (state_18434[(8)]);var inst_18420 = (inst_18399 > (0));var state_18434__$1 = state_18434;if(cljs.core.truth_(inst_18420))
{var statearr_18444_18471 = state_18434__$1;(statearr_18444_18471[(1)] = (12));
} else
{var statearr_18445_18472 = state_18434__$1;(statearr_18445_18472[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (3)))
{var inst_18432 = (state_18434[(2)]);var state_18434__$1 = state_18434;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18434__$1,inst_18432);
} else
{if((state_val_18435 === (12)))
{var inst_18398 = (state_18434[(7)]);var inst_18422 = cljs.core.vec.call(null,inst_18398);var state_18434__$1 = state_18434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18434__$1,(15),out,inst_18422);
} else
{if((state_val_18435 === (2)))
{var state_18434__$1 = state_18434;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18434__$1,(4),ch);
} else
{if((state_val_18435 === (11)))
{var inst_18414 = (state_18434[(2)]);var inst_18415 = (new Array(n));var inst_18398 = inst_18415;var inst_18399 = (0);var state_18434__$1 = (function (){var statearr_18446 = state_18434;(statearr_18446[(7)] = inst_18398);
(statearr_18446[(10)] = inst_18414);
(statearr_18446[(8)] = inst_18399);
return statearr_18446;
})();var statearr_18447_18473 = state_18434__$1;(statearr_18447_18473[(2)] = null);
(statearr_18447_18473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (9)))
{var inst_18398 = (state_18434[(7)]);var inst_18412 = cljs.core.vec.call(null,inst_18398);var state_18434__$1 = state_18434;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18434__$1,(11),out,inst_18412);
} else
{if((state_val_18435 === (5)))
{var inst_18402 = (state_18434[(9)]);var inst_18398 = (state_18434[(7)]);var inst_18399 = (state_18434[(8)]);var inst_18407 = (state_18434[(11)]);var inst_18406 = (inst_18398[inst_18399] = inst_18402);var inst_18407__$1 = (inst_18399 + (1));var inst_18408 = (inst_18407__$1 < n);var state_18434__$1 = (function (){var statearr_18448 = state_18434;(statearr_18448[(12)] = inst_18406);
(statearr_18448[(11)] = inst_18407__$1);
return statearr_18448;
})();if(cljs.core.truth_(inst_18408))
{var statearr_18449_18474 = state_18434__$1;(statearr_18449_18474[(1)] = (8));
} else
{var statearr_18450_18475 = state_18434__$1;(statearr_18450_18475[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (14)))
{var inst_18427 = (state_18434[(2)]);var inst_18428 = cljs.core.async.close_BANG_.call(null,out);var state_18434__$1 = (function (){var statearr_18452 = state_18434;(statearr_18452[(13)] = inst_18427);
return statearr_18452;
})();var statearr_18453_18476 = state_18434__$1;(statearr_18453_18476[(2)] = inst_18428);
(statearr_18453_18476[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (10)))
{var inst_18418 = (state_18434[(2)]);var state_18434__$1 = state_18434;var statearr_18454_18477 = state_18434__$1;(statearr_18454_18477[(2)] = inst_18418);
(statearr_18454_18477[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18435 === (8)))
{var inst_18398 = (state_18434[(7)]);var inst_18407 = (state_18434[(11)]);var tmp18451 = inst_18398;var inst_18398__$1 = tmp18451;var inst_18399 = inst_18407;var state_18434__$1 = (function (){var statearr_18455 = state_18434;(statearr_18455[(7)] = inst_18398__$1);
(statearr_18455[(8)] = inst_18399);
return statearr_18455;
})();var statearr_18456_18478 = state_18434__$1;(statearr_18456_18478[(2)] = null);
(statearr_18456_18478[(1)] = (2));
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
});})(c__5708__auto___18464,out))
;return ((function (switch__5693__auto__,c__5708__auto___18464,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18460 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18460[(0)] = state_machine__5694__auto__);
(statearr_18460[(1)] = (1));
return statearr_18460;
});
var state_machine__5694__auto____1 = (function (state_18434){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18434);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18461){if((e18461 instanceof Object))
{var ex__5697__auto__ = e18461;var statearr_18462_18479 = state_18434;(statearr_18462_18479[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18434);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18461;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18480 = state_18434;
state_18434 = G__18480;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18434){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18434);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18464,out))
})();var state__5710__auto__ = (function (){var statearr_18463 = f__5709__auto__.call(null);(statearr_18463[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18464);
return statearr_18463;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18464,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5708__auto___18623 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___18623,out){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___18623,out){
return (function (state_18593){var state_val_18594 = (state_18593[(1)]);if((state_val_18594 === (7)))
{var inst_18589 = (state_18593[(2)]);var state_18593__$1 = state_18593;var statearr_18595_18624 = state_18593__$1;(statearr_18595_18624[(2)] = inst_18589);
(statearr_18595_18624[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (1)))
{var inst_18552 = [];var inst_18553 = inst_18552;var inst_18554 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_18593__$1 = (function (){var statearr_18596 = state_18593;(statearr_18596[(7)] = inst_18553);
(statearr_18596[(8)] = inst_18554);
return statearr_18596;
})();var statearr_18597_18625 = state_18593__$1;(statearr_18597_18625[(2)] = null);
(statearr_18597_18625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (4)))
{var inst_18557 = (state_18593[(9)]);var inst_18557__$1 = (state_18593[(2)]);var inst_18558 = (inst_18557__$1 == null);var inst_18559 = cljs.core.not.call(null,inst_18558);var state_18593__$1 = (function (){var statearr_18598 = state_18593;(statearr_18598[(9)] = inst_18557__$1);
return statearr_18598;
})();if(inst_18559)
{var statearr_18599_18626 = state_18593__$1;(statearr_18599_18626[(1)] = (5));
} else
{var statearr_18600_18627 = state_18593__$1;(statearr_18600_18627[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (15)))
{var inst_18583 = (state_18593[(2)]);var state_18593__$1 = state_18593;var statearr_18601_18628 = state_18593__$1;(statearr_18601_18628[(2)] = inst_18583);
(statearr_18601_18628[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (13)))
{var state_18593__$1 = state_18593;var statearr_18602_18629 = state_18593__$1;(statearr_18602_18629[(2)] = null);
(statearr_18602_18629[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (6)))
{var inst_18553 = (state_18593[(7)]);var inst_18578 = inst_18553.length;var inst_18579 = (inst_18578 > (0));var state_18593__$1 = state_18593;if(cljs.core.truth_(inst_18579))
{var statearr_18603_18630 = state_18593__$1;(statearr_18603_18630[(1)] = (12));
} else
{var statearr_18604_18631 = state_18593__$1;(statearr_18604_18631[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (3)))
{var inst_18591 = (state_18593[(2)]);var state_18593__$1 = state_18593;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18593__$1,inst_18591);
} else
{if((state_val_18594 === (12)))
{var inst_18553 = (state_18593[(7)]);var inst_18581 = cljs.core.vec.call(null,inst_18553);var state_18593__$1 = state_18593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18593__$1,(15),out,inst_18581);
} else
{if((state_val_18594 === (2)))
{var state_18593__$1 = state_18593;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18593__$1,(4),ch);
} else
{if((state_val_18594 === (11)))
{var inst_18557 = (state_18593[(9)]);var inst_18561 = (state_18593[(10)]);var inst_18571 = (state_18593[(2)]);var inst_18572 = [];var inst_18573 = inst_18572.push(inst_18557);var inst_18553 = inst_18572;var inst_18554 = inst_18561;var state_18593__$1 = (function (){var statearr_18605 = state_18593;(statearr_18605[(11)] = inst_18571);
(statearr_18605[(7)] = inst_18553);
(statearr_18605[(12)] = inst_18573);
(statearr_18605[(8)] = inst_18554);
return statearr_18605;
})();var statearr_18606_18632 = state_18593__$1;(statearr_18606_18632[(2)] = null);
(statearr_18606_18632[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (9)))
{var inst_18553 = (state_18593[(7)]);var inst_18569 = cljs.core.vec.call(null,inst_18553);var state_18593__$1 = state_18593;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18593__$1,(11),out,inst_18569);
} else
{if((state_val_18594 === (5)))
{var inst_18557 = (state_18593[(9)]);var inst_18554 = (state_18593[(8)]);var inst_18561 = (state_18593[(10)]);var inst_18561__$1 = f.call(null,inst_18557);var inst_18562 = cljs.core._EQ_.call(null,inst_18561__$1,inst_18554);var inst_18563 = cljs.core.keyword_identical_QMARK_.call(null,inst_18554,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_18564 = (inst_18562) || (inst_18563);var state_18593__$1 = (function (){var statearr_18607 = state_18593;(statearr_18607[(10)] = inst_18561__$1);
return statearr_18607;
})();if(cljs.core.truth_(inst_18564))
{var statearr_18608_18633 = state_18593__$1;(statearr_18608_18633[(1)] = (8));
} else
{var statearr_18609_18634 = state_18593__$1;(statearr_18609_18634[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (14)))
{var inst_18586 = (state_18593[(2)]);var inst_18587 = cljs.core.async.close_BANG_.call(null,out);var state_18593__$1 = (function (){var statearr_18611 = state_18593;(statearr_18611[(13)] = inst_18586);
return statearr_18611;
})();var statearr_18612_18635 = state_18593__$1;(statearr_18612_18635[(2)] = inst_18587);
(statearr_18612_18635[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (10)))
{var inst_18576 = (state_18593[(2)]);var state_18593__$1 = state_18593;var statearr_18613_18636 = state_18593__$1;(statearr_18613_18636[(2)] = inst_18576);
(statearr_18613_18636[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_18594 === (8)))
{var inst_18557 = (state_18593[(9)]);var inst_18553 = (state_18593[(7)]);var inst_18561 = (state_18593[(10)]);var inst_18566 = inst_18553.push(inst_18557);var tmp18610 = inst_18553;var inst_18553__$1 = tmp18610;var inst_18554 = inst_18561;var state_18593__$1 = (function (){var statearr_18614 = state_18593;(statearr_18614[(14)] = inst_18566);
(statearr_18614[(7)] = inst_18553__$1);
(statearr_18614[(8)] = inst_18554);
return statearr_18614;
})();var statearr_18615_18637 = state_18593__$1;(statearr_18615_18637[(2)] = null);
(statearr_18615_18637[(1)] = (2));
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
});})(c__5708__auto___18623,out))
;return ((function (switch__5693__auto__,c__5708__auto___18623,out){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_18619 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_18619[(0)] = state_machine__5694__auto__);
(statearr_18619[(1)] = (1));
return statearr_18619;
});
var state_machine__5694__auto____1 = (function (state_18593){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_18593);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e18620){if((e18620 instanceof Object))
{var ex__5697__auto__ = e18620;var statearr_18621_18638 = state_18593;(statearr_18621_18638[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18593);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e18620;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__18639 = state_18593;
state_18593 = G__18639;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_18593){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_18593);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___18623,out))
})();var state__5710__auto__ = (function (){var statearr_18622 = f__5709__auto__.call(null);(statearr_18622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___18623);
return statearr_18622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___18623,out))
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
