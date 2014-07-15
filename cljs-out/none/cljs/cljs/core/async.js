// Compiled by ClojureScript 0.0-2261
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t48157 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48157 = (function (f,fn_handler,meta48158){
this.f = f;
this.fn_handler = fn_handler;
this.meta48158 = meta48158;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48157.cljs$lang$type = true;
cljs.core.async.t48157.cljs$lang$ctorStr = "cljs.core.async/t48157";
cljs.core.async.t48157.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t48157");
});
cljs.core.async.t48157.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48157.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t48157.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t48157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48159){var self__ = this;
var _48159__$1 = this;return self__.meta48158;
});
cljs.core.async.t48157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48159,meta48158__$1){var self__ = this;
var _48159__$1 = this;return (new cljs.core.async.t48157(self__.f,self__.fn_handler,meta48158__$1));
});
cljs.core.async.__GT_t48157 = (function __GT_t48157(f__$1,fn_handler__$1,meta48158){return (new cljs.core.async.t48157(f__$1,fn_handler__$1,meta48158));
});
}
return (new cljs.core.async.t48157(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__48161 = buff;if(G__48161)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__48161.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__48161.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__48161);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__48161);
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
{var val_48162 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_48162);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_48162,ret){
return (function (){return fn1.call(null,val_48162);
});})(val_48162,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___48163 = n;var x_48164 = (0);while(true){
if((x_48164 < n__4399__auto___48163))
{(a[x_48164] = (0));
{
var G__48165 = (x_48164 + (1));
x_48164 = G__48165;
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
var G__48166 = (i + (1));
i = G__48166;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t48170 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48170 = (function (flag,alt_flag,meta48171){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta48171 = meta48171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48170.cljs$lang$type = true;
cljs.core.async.t48170.cljs$lang$ctorStr = "cljs.core.async/t48170";
cljs.core.async.t48170.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t48170");
});})(flag))
;
cljs.core.async.t48170.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48170.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t48170.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t48170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_48172){var self__ = this;
var _48172__$1 = this;return self__.meta48171;
});})(flag))
;
cljs.core.async.t48170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_48172,meta48171__$1){var self__ = this;
var _48172__$1 = this;return (new cljs.core.async.t48170(self__.flag,self__.alt_flag,meta48171__$1));
});})(flag))
;
cljs.core.async.__GT_t48170 = ((function (flag){
return (function __GT_t48170(flag__$1,alt_flag__$1,meta48171){return (new cljs.core.async.t48170(flag__$1,alt_flag__$1,meta48171));
});})(flag))
;
}
return (new cljs.core.async.t48170(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t48176 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48176 = (function (cb,flag,alt_handler,meta48177){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta48177 = meta48177;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48176.cljs$lang$type = true;
cljs.core.async.t48176.cljs$lang$ctorStr = "cljs.core.async/t48176";
cljs.core.async.t48176.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t48176");
});
cljs.core.async.t48176.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48176.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t48176.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t48176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48178){var self__ = this;
var _48178__$1 = this;return self__.meta48177;
});
cljs.core.async.t48176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48178,meta48177__$1){var self__ = this;
var _48178__$1 = this;return (new cljs.core.async.t48176(self__.cb,self__.flag,self__.alt_handler,meta48177__$1));
});
cljs.core.async.__GT_t48176 = (function __GT_t48176(cb__$1,flag__$1,alt_handler__$1,meta48177){return (new cljs.core.async.t48176(cb__$1,flag__$1,alt_handler__$1,meta48177));
});
}
return (new cljs.core.async.t48176(cb,flag,alt_handler,null));
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
return (function (p1__48179_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48179_SHARP_,port], null));
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
var G__48180 = (i + (1));
i = G__48180;
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
var alts_BANG___delegate = function (ports,p__48181){var map__48183 = p__48181;var map__48183__$1 = ((cljs.core.seq_QMARK_.call(null,map__48183))?cljs.core.apply.call(null,cljs.core.hash_map,map__48183):map__48183);var opts = map__48183__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__48181 = null;if (arguments.length > 1) {
  p__48181 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__48181);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__48184){
var ports = cljs.core.first(arglist__48184);
var p__48181 = cljs.core.rest(arglist__48184);
return alts_BANG___delegate(ports,p__48181);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t48192 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48192 = (function (ch,f,map_LT_,meta48193){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48193 = meta48193;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48192.cljs$lang$type = true;
cljs.core.async.t48192.cljs$lang$ctorStr = "cljs.core.async/t48192";
cljs.core.async.t48192.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t48192");
});
cljs.core.async.t48192.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48192.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t48192.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48192.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t48195 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48195 = (function (fn1,_,meta48193,ch,f,map_LT_,meta48196){
this.fn1 = fn1;
this._ = _;
this.meta48193 = meta48193;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta48196 = meta48196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48195.cljs$lang$type = true;
cljs.core.async.t48195.cljs$lang$ctorStr = "cljs.core.async/t48195";
cljs.core.async.t48195.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t48195");
});})(___$1))
;
cljs.core.async.t48195.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t48195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t48195.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t48195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__48185_SHARP_){return f1.call(null,(((p1__48185_SHARP_ == null))?null:self__.f.call(null,p1__48185_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t48195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_48197){var self__ = this;
var _48197__$1 = this;return self__.meta48196;
});})(___$1))
;
cljs.core.async.t48195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_48197,meta48196__$1){var self__ = this;
var _48197__$1 = this;return (new cljs.core.async.t48195(self__.fn1,self__._,self__.meta48193,self__.ch,self__.f,self__.map_LT_,meta48196__$1));
});})(___$1))
;
cljs.core.async.__GT_t48195 = ((function (___$1){
return (function __GT_t48195(fn1__$1,___$2,meta48193__$1,ch__$2,f__$2,map_LT___$2,meta48196){return (new cljs.core.async.t48195(fn1__$1,___$2,meta48193__$1,ch__$2,f__$2,map_LT___$2,meta48196));
});})(___$1))
;
}
return (new cljs.core.async.t48195(fn1,___$1,self__.meta48193,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t48192.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48192.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t48192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48194){var self__ = this;
var _48194__$1 = this;return self__.meta48193;
});
cljs.core.async.t48192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48194,meta48193__$1){var self__ = this;
var _48194__$1 = this;return (new cljs.core.async.t48192(self__.ch,self__.f,self__.map_LT_,meta48193__$1));
});
cljs.core.async.__GT_t48192 = (function __GT_t48192(ch__$1,f__$1,map_LT___$1,meta48193){return (new cljs.core.async.t48192(ch__$1,f__$1,map_LT___$1,meta48193));
});
}
return (new cljs.core.async.t48192(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t48201 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48201 = (function (ch,f,map_GT_,meta48202){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta48202 = meta48202;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48201.cljs$lang$type = true;
cljs.core.async.t48201.cljs$lang$ctorStr = "cljs.core.async/t48201";
cljs.core.async.t48201.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t48201");
});
cljs.core.async.t48201.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48201.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t48201.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48201.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t48201.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48201.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t48201.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48203){var self__ = this;
var _48203__$1 = this;return self__.meta48202;
});
cljs.core.async.t48201.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48203,meta48202__$1){var self__ = this;
var _48203__$1 = this;return (new cljs.core.async.t48201(self__.ch,self__.f,self__.map_GT_,meta48202__$1));
});
cljs.core.async.__GT_t48201 = (function __GT_t48201(ch__$1,f__$1,map_GT___$1,meta48202){return (new cljs.core.async.t48201(ch__$1,f__$1,map_GT___$1,meta48202));
});
}
return (new cljs.core.async.t48201(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t48207 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t48207 = (function (ch,p,filter_GT_,meta48208){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta48208 = meta48208;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t48207.cljs$lang$type = true;
cljs.core.async.t48207.cljs$lang$ctorStr = "cljs.core.async/t48207";
cljs.core.async.t48207.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t48207");
});
cljs.core.async.t48207.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t48207.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t48207.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t48207.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t48207.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t48207.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t48207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48209){var self__ = this;
var _48209__$1 = this;return self__.meta48208;
});
cljs.core.async.t48207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48209,meta48208__$1){var self__ = this;
var _48209__$1 = this;return (new cljs.core.async.t48207(self__.ch,self__.p,self__.filter_GT_,meta48208__$1));
});
cljs.core.async.__GT_t48207 = (function __GT_t48207(ch__$1,p__$1,filter_GT___$1,meta48208){return (new cljs.core.async.t48207(ch__$1,p__$1,filter_GT___$1,meta48208));
});
}
return (new cljs.core.async.t48207(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___48292 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___48292,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___48292,out){
return (function (state_48271){var state_val_48272 = (state_48271[(1)]);if((state_val_48272 === (7)))
{var inst_48267 = (state_48271[(2)]);var state_48271__$1 = state_48271;var statearr_48273_48293 = state_48271__$1;(statearr_48273_48293[(2)] = inst_48267);
(statearr_48273_48293[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48272 === (1)))
{var state_48271__$1 = state_48271;var statearr_48274_48294 = state_48271__$1;(statearr_48274_48294[(2)] = null);
(statearr_48274_48294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48272 === (4)))
{var inst_48253 = (state_48271[(7)]);var inst_48253__$1 = (state_48271[(2)]);var inst_48254 = (inst_48253__$1 == null);var state_48271__$1 = (function (){var statearr_48275 = state_48271;(statearr_48275[(7)] = inst_48253__$1);
return statearr_48275;
})();if(cljs.core.truth_(inst_48254))
{var statearr_48276_48295 = state_48271__$1;(statearr_48276_48295[(1)] = (5));
} else
{var statearr_48277_48296 = state_48271__$1;(statearr_48277_48296[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48272 === (6)))
{var inst_48253 = (state_48271[(7)]);var inst_48258 = p.call(null,inst_48253);var state_48271__$1 = state_48271;if(cljs.core.truth_(inst_48258))
{var statearr_48278_48297 = state_48271__$1;(statearr_48278_48297[(1)] = (8));
} else
{var statearr_48279_48298 = state_48271__$1;(statearr_48279_48298[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48272 === (3)))
{var inst_48269 = (state_48271[(2)]);var state_48271__$1 = state_48271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48271__$1,inst_48269);
} else
{if((state_val_48272 === (2)))
{var state_48271__$1 = state_48271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48271__$1,(4),ch);
} else
{if((state_val_48272 === (11)))
{var inst_48261 = (state_48271[(2)]);var state_48271__$1 = state_48271;var statearr_48280_48299 = state_48271__$1;(statearr_48280_48299[(2)] = inst_48261);
(statearr_48280_48299[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48272 === (9)))
{var state_48271__$1 = state_48271;var statearr_48281_48300 = state_48271__$1;(statearr_48281_48300[(2)] = null);
(statearr_48281_48300[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48272 === (5)))
{var inst_48256 = cljs.core.async.close_BANG_.call(null,out);var state_48271__$1 = state_48271;var statearr_48282_48301 = state_48271__$1;(statearr_48282_48301[(2)] = inst_48256);
(statearr_48282_48301[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48272 === (10)))
{var inst_48264 = (state_48271[(2)]);var state_48271__$1 = (function (){var statearr_48283 = state_48271;(statearr_48283[(8)] = inst_48264);
return statearr_48283;
})();var statearr_48284_48302 = state_48271__$1;(statearr_48284_48302[(2)] = null);
(statearr_48284_48302[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48272 === (8)))
{var inst_48253 = (state_48271[(7)]);var state_48271__$1 = state_48271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48271__$1,(11),out,inst_48253);
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
});})(c__5693__auto___48292,out))
;return ((function (switch__5678__auto__,c__5693__auto___48292,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48288 = [null,null,null,null,null,null,null,null,null];(statearr_48288[(0)] = state_machine__5679__auto__);
(statearr_48288[(1)] = (1));
return statearr_48288;
});
var state_machine__5679__auto____1 = (function (state_48271){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48271);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48289){if((e48289 instanceof Object))
{var ex__5682__auto__ = e48289;var statearr_48290_48303 = state_48271;(statearr_48290_48303[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48271);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48304 = state_48271;
state_48271 = G__48304;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48271){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___48292,out))
})();var state__5695__auto__ = (function (){var statearr_48291 = f__5694__auto__.call(null);(statearr_48291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___48292);
return statearr_48291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___48292,out))
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
return (function (state_48456){var state_val_48457 = (state_48456[(1)]);if((state_val_48457 === (7)))
{var inst_48452 = (state_48456[(2)]);var state_48456__$1 = state_48456;var statearr_48458_48495 = state_48456__$1;(statearr_48458_48495[(2)] = inst_48452);
(statearr_48458_48495[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (20)))
{var inst_48427 = (state_48456[(7)]);var inst_48438 = (state_48456[(2)]);var inst_48439 = cljs.core.next.call(null,inst_48427);var inst_48413 = inst_48439;var inst_48414 = null;var inst_48415 = (0);var inst_48416 = (0);var state_48456__$1 = (function (){var statearr_48459 = state_48456;(statearr_48459[(8)] = inst_48415);
(statearr_48459[(9)] = inst_48413);
(statearr_48459[(10)] = inst_48438);
(statearr_48459[(11)] = inst_48414);
(statearr_48459[(12)] = inst_48416);
return statearr_48459;
})();var statearr_48460_48496 = state_48456__$1;(statearr_48460_48496[(2)] = null);
(statearr_48460_48496[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (1)))
{var state_48456__$1 = state_48456;var statearr_48461_48497 = state_48456__$1;(statearr_48461_48497[(2)] = null);
(statearr_48461_48497[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (4)))
{var inst_48402 = (state_48456[(13)]);var inst_48402__$1 = (state_48456[(2)]);var inst_48403 = (inst_48402__$1 == null);var state_48456__$1 = (function (){var statearr_48465 = state_48456;(statearr_48465[(13)] = inst_48402__$1);
return statearr_48465;
})();if(cljs.core.truth_(inst_48403))
{var statearr_48466_48498 = state_48456__$1;(statearr_48466_48498[(1)] = (5));
} else
{var statearr_48467_48499 = state_48456__$1;(statearr_48467_48499[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (15)))
{var state_48456__$1 = state_48456;var statearr_48468_48500 = state_48456__$1;(statearr_48468_48500[(2)] = null);
(statearr_48468_48500[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (13)))
{var inst_48415 = (state_48456[(8)]);var inst_48413 = (state_48456[(9)]);var inst_48414 = (state_48456[(11)]);var inst_48416 = (state_48456[(12)]);var inst_48423 = (state_48456[(2)]);var inst_48424 = (inst_48416 + (1));var tmp48462 = inst_48415;var tmp48463 = inst_48413;var tmp48464 = inst_48414;var inst_48413__$1 = tmp48463;var inst_48414__$1 = tmp48464;var inst_48415__$1 = tmp48462;var inst_48416__$1 = inst_48424;var state_48456__$1 = (function (){var statearr_48469 = state_48456;(statearr_48469[(8)] = inst_48415__$1);
(statearr_48469[(9)] = inst_48413__$1);
(statearr_48469[(14)] = inst_48423);
(statearr_48469[(11)] = inst_48414__$1);
(statearr_48469[(12)] = inst_48416__$1);
return statearr_48469;
})();var statearr_48470_48501 = state_48456__$1;(statearr_48470_48501[(2)] = null);
(statearr_48470_48501[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (6)))
{var inst_48402 = (state_48456[(13)]);var inst_48407 = f.call(null,inst_48402);var inst_48412 = cljs.core.seq.call(null,inst_48407);var inst_48413 = inst_48412;var inst_48414 = null;var inst_48415 = (0);var inst_48416 = (0);var state_48456__$1 = (function (){var statearr_48471 = state_48456;(statearr_48471[(8)] = inst_48415);
(statearr_48471[(9)] = inst_48413);
(statearr_48471[(11)] = inst_48414);
(statearr_48471[(12)] = inst_48416);
return statearr_48471;
})();var statearr_48472_48502 = state_48456__$1;(statearr_48472_48502[(2)] = null);
(statearr_48472_48502[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (17)))
{var inst_48427 = (state_48456[(7)]);var inst_48431 = cljs.core.chunk_first.call(null,inst_48427);var inst_48432 = cljs.core.chunk_rest.call(null,inst_48427);var inst_48433 = cljs.core.count.call(null,inst_48431);var inst_48413 = inst_48432;var inst_48414 = inst_48431;var inst_48415 = inst_48433;var inst_48416 = (0);var state_48456__$1 = (function (){var statearr_48473 = state_48456;(statearr_48473[(8)] = inst_48415);
(statearr_48473[(9)] = inst_48413);
(statearr_48473[(11)] = inst_48414);
(statearr_48473[(12)] = inst_48416);
return statearr_48473;
})();var statearr_48474_48503 = state_48456__$1;(statearr_48474_48503[(2)] = null);
(statearr_48474_48503[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (3)))
{var inst_48454 = (state_48456[(2)]);var state_48456__$1 = state_48456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48456__$1,inst_48454);
} else
{if((state_val_48457 === (12)))
{var inst_48447 = (state_48456[(2)]);var state_48456__$1 = state_48456;var statearr_48475_48504 = state_48456__$1;(statearr_48475_48504[(2)] = inst_48447);
(statearr_48475_48504[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (2)))
{var state_48456__$1 = state_48456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48456__$1,(4),in$);
} else
{if((state_val_48457 === (19)))
{var inst_48442 = (state_48456[(2)]);var state_48456__$1 = state_48456;var statearr_48476_48505 = state_48456__$1;(statearr_48476_48505[(2)] = inst_48442);
(statearr_48476_48505[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (11)))
{var inst_48427 = (state_48456[(7)]);var inst_48413 = (state_48456[(9)]);var inst_48427__$1 = cljs.core.seq.call(null,inst_48413);var state_48456__$1 = (function (){var statearr_48477 = state_48456;(statearr_48477[(7)] = inst_48427__$1);
return statearr_48477;
})();if(inst_48427__$1)
{var statearr_48478_48506 = state_48456__$1;(statearr_48478_48506[(1)] = (14));
} else
{var statearr_48479_48507 = state_48456__$1;(statearr_48479_48507[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (9)))
{var inst_48449 = (state_48456[(2)]);var state_48456__$1 = (function (){var statearr_48480 = state_48456;(statearr_48480[(15)] = inst_48449);
return statearr_48480;
})();var statearr_48481_48508 = state_48456__$1;(statearr_48481_48508[(2)] = null);
(statearr_48481_48508[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (5)))
{var inst_48405 = cljs.core.async.close_BANG_.call(null,out);var state_48456__$1 = state_48456;var statearr_48482_48509 = state_48456__$1;(statearr_48482_48509[(2)] = inst_48405);
(statearr_48482_48509[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (14)))
{var inst_48427 = (state_48456[(7)]);var inst_48429 = cljs.core.chunked_seq_QMARK_.call(null,inst_48427);var state_48456__$1 = state_48456;if(inst_48429)
{var statearr_48483_48510 = state_48456__$1;(statearr_48483_48510[(1)] = (17));
} else
{var statearr_48484_48511 = state_48456__$1;(statearr_48484_48511[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (16)))
{var inst_48445 = (state_48456[(2)]);var state_48456__$1 = state_48456;var statearr_48485_48512 = state_48456__$1;(statearr_48485_48512[(2)] = inst_48445);
(statearr_48485_48512[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48457 === (10)))
{var inst_48414 = (state_48456[(11)]);var inst_48416 = (state_48456[(12)]);var inst_48421 = cljs.core._nth.call(null,inst_48414,inst_48416);var state_48456__$1 = state_48456;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48456__$1,(13),out,inst_48421);
} else
{if((state_val_48457 === (18)))
{var inst_48427 = (state_48456[(7)]);var inst_48436 = cljs.core.first.call(null,inst_48427);var state_48456__$1 = state_48456;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48456__$1,(20),out,inst_48436);
} else
{if((state_val_48457 === (8)))
{var inst_48415 = (state_48456[(8)]);var inst_48416 = (state_48456[(12)]);var inst_48418 = (inst_48416 < inst_48415);var inst_48419 = inst_48418;var state_48456__$1 = state_48456;if(cljs.core.truth_(inst_48419))
{var statearr_48486_48513 = state_48456__$1;(statearr_48486_48513[(1)] = (10));
} else
{var statearr_48487_48514 = state_48456__$1;(statearr_48487_48514[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_48491 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_48491[(0)] = state_machine__5679__auto__);
(statearr_48491[(1)] = (1));
return statearr_48491;
});
var state_machine__5679__auto____1 = (function (state_48456){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48456);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48492){if((e48492 instanceof Object))
{var ex__5682__auto__ = e48492;var statearr_48493_48515 = state_48456;(statearr_48493_48515[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48456);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48492;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48516 = state_48456;
state_48456 = G__48516;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48456){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_48494 = f__5694__auto__.call(null);(statearr_48494[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48494;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___48597 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___48597){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___48597){
return (function (state_48576){var state_val_48577 = (state_48576[(1)]);if((state_val_48577 === (7)))
{var inst_48572 = (state_48576[(2)]);var state_48576__$1 = state_48576;var statearr_48578_48598 = state_48576__$1;(statearr_48578_48598[(2)] = inst_48572);
(statearr_48578_48598[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48577 === (1)))
{var state_48576__$1 = state_48576;var statearr_48579_48599 = state_48576__$1;(statearr_48579_48599[(2)] = null);
(statearr_48579_48599[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48577 === (4)))
{var inst_48559 = (state_48576[(7)]);var inst_48559__$1 = (state_48576[(2)]);var inst_48560 = (inst_48559__$1 == null);var state_48576__$1 = (function (){var statearr_48580 = state_48576;(statearr_48580[(7)] = inst_48559__$1);
return statearr_48580;
})();if(cljs.core.truth_(inst_48560))
{var statearr_48581_48600 = state_48576__$1;(statearr_48581_48600[(1)] = (5));
} else
{var statearr_48582_48601 = state_48576__$1;(statearr_48582_48601[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48577 === (6)))
{var inst_48559 = (state_48576[(7)]);var state_48576__$1 = state_48576;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48576__$1,(11),to,inst_48559);
} else
{if((state_val_48577 === (3)))
{var inst_48574 = (state_48576[(2)]);var state_48576__$1 = state_48576;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48576__$1,inst_48574);
} else
{if((state_val_48577 === (2)))
{var state_48576__$1 = state_48576;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48576__$1,(4),from);
} else
{if((state_val_48577 === (11)))
{var inst_48569 = (state_48576[(2)]);var state_48576__$1 = (function (){var statearr_48583 = state_48576;(statearr_48583[(8)] = inst_48569);
return statearr_48583;
})();var statearr_48584_48602 = state_48576__$1;(statearr_48584_48602[(2)] = null);
(statearr_48584_48602[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48577 === (9)))
{var state_48576__$1 = state_48576;var statearr_48585_48603 = state_48576__$1;(statearr_48585_48603[(2)] = null);
(statearr_48585_48603[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48577 === (5)))
{var state_48576__$1 = state_48576;if(cljs.core.truth_(close_QMARK_))
{var statearr_48586_48604 = state_48576__$1;(statearr_48586_48604[(1)] = (8));
} else
{var statearr_48587_48605 = state_48576__$1;(statearr_48587_48605[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48577 === (10)))
{var inst_48566 = (state_48576[(2)]);var state_48576__$1 = state_48576;var statearr_48588_48606 = state_48576__$1;(statearr_48588_48606[(2)] = inst_48566);
(statearr_48588_48606[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48577 === (8)))
{var inst_48563 = cljs.core.async.close_BANG_.call(null,to);var state_48576__$1 = state_48576;var statearr_48589_48607 = state_48576__$1;(statearr_48589_48607[(2)] = inst_48563);
(statearr_48589_48607[(1)] = (10));
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
});})(c__5693__auto___48597))
;return ((function (switch__5678__auto__,c__5693__auto___48597){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48593 = [null,null,null,null,null,null,null,null,null];(statearr_48593[(0)] = state_machine__5679__auto__);
(statearr_48593[(1)] = (1));
return statearr_48593;
});
var state_machine__5679__auto____1 = (function (state_48576){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48576);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48594){if((e48594 instanceof Object))
{var ex__5682__auto__ = e48594;var statearr_48595_48608 = state_48576;(statearr_48595_48608[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48576);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48594;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48609 = state_48576;
state_48576 = G__48609;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48576){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48576);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___48597))
})();var state__5695__auto__ = (function (){var statearr_48596 = f__5694__auto__.call(null);(statearr_48596[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___48597);
return statearr_48596;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___48597))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___48696 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___48696,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___48696,tc,fc){
return (function (state_48674){var state_val_48675 = (state_48674[(1)]);if((state_val_48675 === (7)))
{var inst_48670 = (state_48674[(2)]);var state_48674__$1 = state_48674;var statearr_48676_48697 = state_48674__$1;(statearr_48676_48697[(2)] = inst_48670);
(statearr_48676_48697[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48675 === (1)))
{var state_48674__$1 = state_48674;var statearr_48677_48698 = state_48674__$1;(statearr_48677_48698[(2)] = null);
(statearr_48677_48698[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48675 === (4)))
{var inst_48655 = (state_48674[(7)]);var inst_48655__$1 = (state_48674[(2)]);var inst_48656 = (inst_48655__$1 == null);var state_48674__$1 = (function (){var statearr_48678 = state_48674;(statearr_48678[(7)] = inst_48655__$1);
return statearr_48678;
})();if(cljs.core.truth_(inst_48656))
{var statearr_48679_48699 = state_48674__$1;(statearr_48679_48699[(1)] = (5));
} else
{var statearr_48680_48700 = state_48674__$1;(statearr_48680_48700[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48675 === (6)))
{var inst_48655 = (state_48674[(7)]);var inst_48661 = p.call(null,inst_48655);var state_48674__$1 = state_48674;if(cljs.core.truth_(inst_48661))
{var statearr_48681_48701 = state_48674__$1;(statearr_48681_48701[(1)] = (9));
} else
{var statearr_48682_48702 = state_48674__$1;(statearr_48682_48702[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48675 === (3)))
{var inst_48672 = (state_48674[(2)]);var state_48674__$1 = state_48674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48674__$1,inst_48672);
} else
{if((state_val_48675 === (2)))
{var state_48674__$1 = state_48674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48674__$1,(4),ch);
} else
{if((state_val_48675 === (11)))
{var inst_48655 = (state_48674[(7)]);var inst_48665 = (state_48674[(2)]);var state_48674__$1 = state_48674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48674__$1,(8),inst_48665,inst_48655);
} else
{if((state_val_48675 === (9)))
{var state_48674__$1 = state_48674;var statearr_48683_48703 = state_48674__$1;(statearr_48683_48703[(2)] = tc);
(statearr_48683_48703[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48675 === (5)))
{var inst_48658 = cljs.core.async.close_BANG_.call(null,tc);var inst_48659 = cljs.core.async.close_BANG_.call(null,fc);var state_48674__$1 = (function (){var statearr_48684 = state_48674;(statearr_48684[(8)] = inst_48658);
return statearr_48684;
})();var statearr_48685_48704 = state_48674__$1;(statearr_48685_48704[(2)] = inst_48659);
(statearr_48685_48704[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48675 === (10)))
{var state_48674__$1 = state_48674;var statearr_48686_48705 = state_48674__$1;(statearr_48686_48705[(2)] = fc);
(statearr_48686_48705[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48675 === (8)))
{var inst_48667 = (state_48674[(2)]);var state_48674__$1 = (function (){var statearr_48687 = state_48674;(statearr_48687[(9)] = inst_48667);
return statearr_48687;
})();var statearr_48688_48706 = state_48674__$1;(statearr_48688_48706[(2)] = null);
(statearr_48688_48706[(1)] = (2));
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
});})(c__5693__auto___48696,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___48696,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_48692 = [null,null,null,null,null,null,null,null,null,null];(statearr_48692[(0)] = state_machine__5679__auto__);
(statearr_48692[(1)] = (1));
return statearr_48692;
});
var state_machine__5679__auto____1 = (function (state_48674){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48693){if((e48693 instanceof Object))
{var ex__5682__auto__ = e48693;var statearr_48694_48707 = state_48674;(statearr_48694_48707[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48674);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48708 = state_48674;
state_48674 = G__48708;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48674){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___48696,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_48695 = f__5694__auto__.call(null);(statearr_48695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___48696);
return statearr_48695;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___48696,tc,fc))
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
return (function (state_48755){var state_val_48756 = (state_48755[(1)]);if((state_val_48756 === (7)))
{var inst_48751 = (state_48755[(2)]);var state_48755__$1 = state_48755;var statearr_48757_48773 = state_48755__$1;(statearr_48757_48773[(2)] = inst_48751);
(statearr_48757_48773[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48756 === (6)))
{var inst_48741 = (state_48755[(7)]);var inst_48744 = (state_48755[(8)]);var inst_48748 = f.call(null,inst_48741,inst_48744);var inst_48741__$1 = inst_48748;var state_48755__$1 = (function (){var statearr_48758 = state_48755;(statearr_48758[(7)] = inst_48741__$1);
return statearr_48758;
})();var statearr_48759_48774 = state_48755__$1;(statearr_48759_48774[(2)] = null);
(statearr_48759_48774[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48756 === (5)))
{var inst_48741 = (state_48755[(7)]);var state_48755__$1 = state_48755;var statearr_48760_48775 = state_48755__$1;(statearr_48760_48775[(2)] = inst_48741);
(statearr_48760_48775[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48756 === (4)))
{var inst_48744 = (state_48755[(8)]);var inst_48744__$1 = (state_48755[(2)]);var inst_48745 = (inst_48744__$1 == null);var state_48755__$1 = (function (){var statearr_48761 = state_48755;(statearr_48761[(8)] = inst_48744__$1);
return statearr_48761;
})();if(cljs.core.truth_(inst_48745))
{var statearr_48762_48776 = state_48755__$1;(statearr_48762_48776[(1)] = (5));
} else
{var statearr_48763_48777 = state_48755__$1;(statearr_48763_48777[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48756 === (3)))
{var inst_48753 = (state_48755[(2)]);var state_48755__$1 = state_48755;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48755__$1,inst_48753);
} else
{if((state_val_48756 === (2)))
{var state_48755__$1 = state_48755;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48755__$1,(4),ch);
} else
{if((state_val_48756 === (1)))
{var inst_48741 = init;var state_48755__$1 = (function (){var statearr_48764 = state_48755;(statearr_48764[(7)] = inst_48741);
return statearr_48764;
})();var statearr_48765_48778 = state_48755__$1;(statearr_48765_48778[(2)] = null);
(statearr_48765_48778[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_48769 = [null,null,null,null,null,null,null,null,null];(statearr_48769[(0)] = state_machine__5679__auto__);
(statearr_48769[(1)] = (1));
return statearr_48769;
});
var state_machine__5679__auto____1 = (function (state_48755){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48755);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48770){if((e48770 instanceof Object))
{var ex__5682__auto__ = e48770;var statearr_48771_48779 = state_48755;(statearr_48771_48779[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48755);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48770;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48780 = state_48755;
state_48755 = G__48780;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48755){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48755);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_48772 = f__5694__auto__.call(null);(statearr_48772[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48772;
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
return (function (state_48842){var state_val_48843 = (state_48842[(1)]);if((state_val_48843 === (7)))
{var inst_48823 = (state_48842[(7)]);var inst_48828 = (state_48842[(2)]);var inst_48829 = cljs.core.next.call(null,inst_48823);var inst_48823__$1 = inst_48829;var state_48842__$1 = (function (){var statearr_48844 = state_48842;(statearr_48844[(7)] = inst_48823__$1);
(statearr_48844[(8)] = inst_48828);
return statearr_48844;
})();var statearr_48845_48863 = state_48842__$1;(statearr_48845_48863[(2)] = null);
(statearr_48845_48863[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48843 === (1)))
{var inst_48822 = cljs.core.seq.call(null,coll);var inst_48823 = inst_48822;var state_48842__$1 = (function (){var statearr_48846 = state_48842;(statearr_48846[(7)] = inst_48823);
return statearr_48846;
})();var statearr_48847_48864 = state_48842__$1;(statearr_48847_48864[(2)] = null);
(statearr_48847_48864[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48843 === (4)))
{var inst_48823 = (state_48842[(7)]);var inst_48826 = cljs.core.first.call(null,inst_48823);var state_48842__$1 = state_48842;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_48842__$1,(7),ch,inst_48826);
} else
{if((state_val_48843 === (6)))
{var inst_48838 = (state_48842[(2)]);var state_48842__$1 = state_48842;var statearr_48848_48865 = state_48842__$1;(statearr_48848_48865[(2)] = inst_48838);
(statearr_48848_48865[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48843 === (3)))
{var inst_48840 = (state_48842[(2)]);var state_48842__$1 = state_48842;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48842__$1,inst_48840);
} else
{if((state_val_48843 === (2)))
{var inst_48823 = (state_48842[(7)]);var state_48842__$1 = state_48842;if(cljs.core.truth_(inst_48823))
{var statearr_48849_48866 = state_48842__$1;(statearr_48849_48866[(1)] = (4));
} else
{var statearr_48850_48867 = state_48842__$1;(statearr_48850_48867[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48843 === (9)))
{var state_48842__$1 = state_48842;var statearr_48851_48868 = state_48842__$1;(statearr_48851_48868[(2)] = null);
(statearr_48851_48868[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48843 === (5)))
{var state_48842__$1 = state_48842;if(cljs.core.truth_(close_QMARK_))
{var statearr_48852_48869 = state_48842__$1;(statearr_48852_48869[(1)] = (8));
} else
{var statearr_48853_48870 = state_48842__$1;(statearr_48853_48870[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48843 === (10)))
{var inst_48836 = (state_48842[(2)]);var state_48842__$1 = state_48842;var statearr_48854_48871 = state_48842__$1;(statearr_48854_48871[(2)] = inst_48836);
(statearr_48854_48871[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_48843 === (8)))
{var inst_48833 = cljs.core.async.close_BANG_.call(null,ch);var state_48842__$1 = state_48842;var statearr_48855_48872 = state_48842__$1;(statearr_48855_48872[(2)] = inst_48833);
(statearr_48855_48872[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_48859 = [null,null,null,null,null,null,null,null,null];(statearr_48859[(0)] = state_machine__5679__auto__);
(statearr_48859[(1)] = (1));
return statearr_48859;
});
var state_machine__5679__auto____1 = (function (state_48842){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_48842);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e48860){if((e48860 instanceof Object))
{var ex__5682__auto__ = e48860;var statearr_48861_48873 = state_48842;(statearr_48861_48873[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48842);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e48860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__48874 = state_48842;
state_48842 = G__48874;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_48842){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_48842);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_48862 = f__5694__auto__.call(null);(statearr_48862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_48862;
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
cljs.core.async.Mux = (function (){var obj48876 = {};return obj48876;
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
cljs.core.async.Mult = (function (){var obj48878 = {};return obj48878;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t49102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49102 = (function (cs,ch,mult,meta49103){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta49103 = meta49103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49102.cljs$lang$type = true;
cljs.core.async.t49102.cljs$lang$ctorStr = "cljs.core.async/t49102";
cljs.core.async.t49102.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t49102");
});})(cs))
;
cljs.core.async.t49102.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t49102.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t49102.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t49102.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t49102.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49102.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t49102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_49104){var self__ = this;
var _49104__$1 = this;return self__.meta49103;
});})(cs))
;
cljs.core.async.t49102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_49104,meta49103__$1){var self__ = this;
var _49104__$1 = this;return (new cljs.core.async.t49102(self__.cs,self__.ch,self__.mult,meta49103__$1));
});})(cs))
;
cljs.core.async.__GT_t49102 = ((function (cs){
return (function __GT_t49102(cs__$1,ch__$1,mult__$1,meta49103){return (new cljs.core.async.t49102(cs__$1,ch__$1,mult__$1,meta49103));
});})(cs))
;
}
return (new cljs.core.async.t49102(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___49325 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___49325,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___49325,cs,m,dchan,dctr,done){
return (function (state_49239){var state_val_49240 = (state_49239[(1)]);if((state_val_49240 === (7)))
{var inst_49235 = (state_49239[(2)]);var state_49239__$1 = state_49239;var statearr_49241_49326 = state_49239__$1;(statearr_49241_49326[(2)] = inst_49235);
(statearr_49241_49326[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (20)))
{var inst_49136 = (state_49239[(7)]);var inst_49146 = cljs.core.first.call(null,inst_49136);var inst_49147 = cljs.core.nth.call(null,inst_49146,(0),null);var inst_49148 = cljs.core.nth.call(null,inst_49146,(1),null);var state_49239__$1 = (function (){var statearr_49242 = state_49239;(statearr_49242[(8)] = inst_49147);
return statearr_49242;
})();if(cljs.core.truth_(inst_49148))
{var statearr_49243_49327 = state_49239__$1;(statearr_49243_49327[(1)] = (22));
} else
{var statearr_49244_49328 = state_49239__$1;(statearr_49244_49328[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (27)))
{var inst_49178 = (state_49239[(9)]);var inst_49176 = (state_49239[(10)]);var inst_49183 = cljs.core._nth.call(null,inst_49176,inst_49178);var state_49239__$1 = (function (){var statearr_49245 = state_49239;(statearr_49245[(11)] = inst_49183);
return statearr_49245;
})();var statearr_49246_49329 = state_49239__$1;(statearr_49246_49329[(2)] = null);
(statearr_49246_49329[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (1)))
{var state_49239__$1 = state_49239;var statearr_49247_49330 = state_49239__$1;(statearr_49247_49330[(2)] = null);
(statearr_49247_49330[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (24)))
{var inst_49136 = (state_49239[(7)]);var inst_49153 = (state_49239[(2)]);var inst_49154 = cljs.core.next.call(null,inst_49136);var inst_49116 = inst_49154;var inst_49117 = null;var inst_49118 = (0);var inst_49119 = (0);var state_49239__$1 = (function (){var statearr_49248 = state_49239;(statearr_49248[(12)] = inst_49153);
(statearr_49248[(13)] = inst_49116);
(statearr_49248[(14)] = inst_49119);
(statearr_49248[(15)] = inst_49117);
(statearr_49248[(16)] = inst_49118);
return statearr_49248;
})();var statearr_49249_49331 = state_49239__$1;(statearr_49249_49331[(2)] = null);
(statearr_49249_49331[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (39)))
{var inst_49196 = (state_49239[(17)]);var inst_49214 = (state_49239[(2)]);var inst_49215 = cljs.core.next.call(null,inst_49196);var inst_49175 = inst_49215;var inst_49176 = null;var inst_49177 = (0);var inst_49178 = (0);var state_49239__$1 = (function (){var statearr_49253 = state_49239;(statearr_49253[(9)] = inst_49178);
(statearr_49253[(10)] = inst_49176);
(statearr_49253[(18)] = inst_49214);
(statearr_49253[(19)] = inst_49175);
(statearr_49253[(20)] = inst_49177);
return statearr_49253;
})();var statearr_49254_49332 = state_49239__$1;(statearr_49254_49332[(2)] = null);
(statearr_49254_49332[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (4)))
{var inst_49107 = (state_49239[(21)]);var inst_49107__$1 = (state_49239[(2)]);var inst_49108 = (inst_49107__$1 == null);var state_49239__$1 = (function (){var statearr_49255 = state_49239;(statearr_49255[(21)] = inst_49107__$1);
return statearr_49255;
})();if(cljs.core.truth_(inst_49108))
{var statearr_49256_49333 = state_49239__$1;(statearr_49256_49333[(1)] = (5));
} else
{var statearr_49257_49334 = state_49239__$1;(statearr_49257_49334[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (15)))
{var inst_49116 = (state_49239[(13)]);var inst_49119 = (state_49239[(14)]);var inst_49117 = (state_49239[(15)]);var inst_49118 = (state_49239[(16)]);var inst_49132 = (state_49239[(2)]);var inst_49133 = (inst_49119 + (1));var tmp49250 = inst_49116;var tmp49251 = inst_49117;var tmp49252 = inst_49118;var inst_49116__$1 = tmp49250;var inst_49117__$1 = tmp49251;var inst_49118__$1 = tmp49252;var inst_49119__$1 = inst_49133;var state_49239__$1 = (function (){var statearr_49258 = state_49239;(statearr_49258[(13)] = inst_49116__$1);
(statearr_49258[(14)] = inst_49119__$1);
(statearr_49258[(15)] = inst_49117__$1);
(statearr_49258[(16)] = inst_49118__$1);
(statearr_49258[(22)] = inst_49132);
return statearr_49258;
})();var statearr_49259_49335 = state_49239__$1;(statearr_49259_49335[(2)] = null);
(statearr_49259_49335[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (21)))
{var inst_49157 = (state_49239[(2)]);var state_49239__$1 = state_49239;var statearr_49260_49336 = state_49239__$1;(statearr_49260_49336[(2)] = inst_49157);
(statearr_49260_49336[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (31)))
{var inst_49183 = (state_49239[(11)]);var inst_49184 = (state_49239[(2)]);var inst_49185 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_49186 = cljs.core.async.untap_STAR_.call(null,m,inst_49183);var state_49239__$1 = (function (){var statearr_49261 = state_49239;(statearr_49261[(23)] = inst_49184);
(statearr_49261[(24)] = inst_49185);
return statearr_49261;
})();var statearr_49262_49337 = state_49239__$1;(statearr_49262_49337[(2)] = inst_49186);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49239__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (32)))
{var inst_49183 = (state_49239[(11)]);var inst_49107 = (state_49239[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49239,(31),Object,null,(30));var inst_49190 = cljs.core.async.put_BANG_.call(null,inst_49183,inst_49107,done);var state_49239__$1 = state_49239;var statearr_49263_49338 = state_49239__$1;(statearr_49263_49338[(2)] = inst_49190);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49239__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (40)))
{var inst_49205 = (state_49239[(25)]);var inst_49206 = (state_49239[(2)]);var inst_49207 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_49208 = cljs.core.async.untap_STAR_.call(null,m,inst_49205);var state_49239__$1 = (function (){var statearr_49264 = state_49239;(statearr_49264[(26)] = inst_49206);
(statearr_49264[(27)] = inst_49207);
return statearr_49264;
})();var statearr_49265_49339 = state_49239__$1;(statearr_49265_49339[(2)] = inst_49208);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49239__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (33)))
{var inst_49196 = (state_49239[(17)]);var inst_49198 = cljs.core.chunked_seq_QMARK_.call(null,inst_49196);var state_49239__$1 = state_49239;if(inst_49198)
{var statearr_49266_49340 = state_49239__$1;(statearr_49266_49340[(1)] = (36));
} else
{var statearr_49267_49341 = state_49239__$1;(statearr_49267_49341[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (13)))
{var inst_49126 = (state_49239[(28)]);var inst_49129 = cljs.core.async.close_BANG_.call(null,inst_49126);var state_49239__$1 = state_49239;var statearr_49268_49342 = state_49239__$1;(statearr_49268_49342[(2)] = inst_49129);
(statearr_49268_49342[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (22)))
{var inst_49147 = (state_49239[(8)]);var inst_49150 = cljs.core.async.close_BANG_.call(null,inst_49147);var state_49239__$1 = state_49239;var statearr_49269_49343 = state_49239__$1;(statearr_49269_49343[(2)] = inst_49150);
(statearr_49269_49343[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (36)))
{var inst_49196 = (state_49239[(17)]);var inst_49200 = cljs.core.chunk_first.call(null,inst_49196);var inst_49201 = cljs.core.chunk_rest.call(null,inst_49196);var inst_49202 = cljs.core.count.call(null,inst_49200);var inst_49175 = inst_49201;var inst_49176 = inst_49200;var inst_49177 = inst_49202;var inst_49178 = (0);var state_49239__$1 = (function (){var statearr_49270 = state_49239;(statearr_49270[(9)] = inst_49178);
(statearr_49270[(10)] = inst_49176);
(statearr_49270[(19)] = inst_49175);
(statearr_49270[(20)] = inst_49177);
return statearr_49270;
})();var statearr_49271_49344 = state_49239__$1;(statearr_49271_49344[(2)] = null);
(statearr_49271_49344[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (41)))
{var inst_49205 = (state_49239[(25)]);var inst_49107 = (state_49239[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49239,(40),Object,null,(39));var inst_49212 = cljs.core.async.put_BANG_.call(null,inst_49205,inst_49107,done);var state_49239__$1 = state_49239;var statearr_49272_49345 = state_49239__$1;(statearr_49272_49345[(2)] = inst_49212);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49239__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (43)))
{var state_49239__$1 = state_49239;var statearr_49273_49346 = state_49239__$1;(statearr_49273_49346[(2)] = null);
(statearr_49273_49346[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (29)))
{var inst_49223 = (state_49239[(2)]);var state_49239__$1 = state_49239;var statearr_49274_49347 = state_49239__$1;(statearr_49274_49347[(2)] = inst_49223);
(statearr_49274_49347[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (44)))
{var inst_49232 = (state_49239[(2)]);var state_49239__$1 = (function (){var statearr_49275 = state_49239;(statearr_49275[(29)] = inst_49232);
return statearr_49275;
})();var statearr_49276_49348 = state_49239__$1;(statearr_49276_49348[(2)] = null);
(statearr_49276_49348[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (6)))
{var inst_49167 = (state_49239[(30)]);var inst_49166 = cljs.core.deref.call(null,cs);var inst_49167__$1 = cljs.core.keys.call(null,inst_49166);var inst_49168 = cljs.core.count.call(null,inst_49167__$1);var inst_49169 = cljs.core.reset_BANG_.call(null,dctr,inst_49168);var inst_49174 = cljs.core.seq.call(null,inst_49167__$1);var inst_49175 = inst_49174;var inst_49176 = null;var inst_49177 = (0);var inst_49178 = (0);var state_49239__$1 = (function (){var statearr_49277 = state_49239;(statearr_49277[(30)] = inst_49167__$1);
(statearr_49277[(9)] = inst_49178);
(statearr_49277[(10)] = inst_49176);
(statearr_49277[(19)] = inst_49175);
(statearr_49277[(31)] = inst_49169);
(statearr_49277[(20)] = inst_49177);
return statearr_49277;
})();var statearr_49278_49349 = state_49239__$1;(statearr_49278_49349[(2)] = null);
(statearr_49278_49349[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (28)))
{var inst_49175 = (state_49239[(19)]);var inst_49196 = (state_49239[(17)]);var inst_49196__$1 = cljs.core.seq.call(null,inst_49175);var state_49239__$1 = (function (){var statearr_49279 = state_49239;(statearr_49279[(17)] = inst_49196__$1);
return statearr_49279;
})();if(inst_49196__$1)
{var statearr_49280_49350 = state_49239__$1;(statearr_49280_49350[(1)] = (33));
} else
{var statearr_49281_49351 = state_49239__$1;(statearr_49281_49351[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (25)))
{var inst_49178 = (state_49239[(9)]);var inst_49177 = (state_49239[(20)]);var inst_49180 = (inst_49178 < inst_49177);var inst_49181 = inst_49180;var state_49239__$1 = state_49239;if(cljs.core.truth_(inst_49181))
{var statearr_49282_49352 = state_49239__$1;(statearr_49282_49352[(1)] = (27));
} else
{var statearr_49283_49353 = state_49239__$1;(statearr_49283_49353[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (34)))
{var state_49239__$1 = state_49239;var statearr_49284_49354 = state_49239__$1;(statearr_49284_49354[(2)] = null);
(statearr_49284_49354[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (17)))
{var state_49239__$1 = state_49239;var statearr_49285_49355 = state_49239__$1;(statearr_49285_49355[(2)] = null);
(statearr_49285_49355[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (3)))
{var inst_49237 = (state_49239[(2)]);var state_49239__$1 = state_49239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49239__$1,inst_49237);
} else
{if((state_val_49240 === (12)))
{var inst_49162 = (state_49239[(2)]);var state_49239__$1 = state_49239;var statearr_49286_49356 = state_49239__$1;(statearr_49286_49356[(2)] = inst_49162);
(statearr_49286_49356[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (2)))
{var state_49239__$1 = state_49239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49239__$1,(4),ch);
} else
{if((state_val_49240 === (23)))
{var state_49239__$1 = state_49239;var statearr_49287_49357 = state_49239__$1;(statearr_49287_49357[(2)] = null);
(statearr_49287_49357[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (35)))
{var inst_49221 = (state_49239[(2)]);var state_49239__$1 = state_49239;var statearr_49288_49358 = state_49239__$1;(statearr_49288_49358[(2)] = inst_49221);
(statearr_49288_49358[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (19)))
{var inst_49136 = (state_49239[(7)]);var inst_49140 = cljs.core.chunk_first.call(null,inst_49136);var inst_49141 = cljs.core.chunk_rest.call(null,inst_49136);var inst_49142 = cljs.core.count.call(null,inst_49140);var inst_49116 = inst_49141;var inst_49117 = inst_49140;var inst_49118 = inst_49142;var inst_49119 = (0);var state_49239__$1 = (function (){var statearr_49289 = state_49239;(statearr_49289[(13)] = inst_49116);
(statearr_49289[(14)] = inst_49119);
(statearr_49289[(15)] = inst_49117);
(statearr_49289[(16)] = inst_49118);
return statearr_49289;
})();var statearr_49290_49359 = state_49239__$1;(statearr_49290_49359[(2)] = null);
(statearr_49290_49359[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (11)))
{var inst_49116 = (state_49239[(13)]);var inst_49136 = (state_49239[(7)]);var inst_49136__$1 = cljs.core.seq.call(null,inst_49116);var state_49239__$1 = (function (){var statearr_49291 = state_49239;(statearr_49291[(7)] = inst_49136__$1);
return statearr_49291;
})();if(inst_49136__$1)
{var statearr_49292_49360 = state_49239__$1;(statearr_49292_49360[(1)] = (16));
} else
{var statearr_49293_49361 = state_49239__$1;(statearr_49293_49361[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (9)))
{var inst_49164 = (state_49239[(2)]);var state_49239__$1 = state_49239;var statearr_49294_49362 = state_49239__$1;(statearr_49294_49362[(2)] = inst_49164);
(statearr_49294_49362[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (5)))
{var inst_49114 = cljs.core.deref.call(null,cs);var inst_49115 = cljs.core.seq.call(null,inst_49114);var inst_49116 = inst_49115;var inst_49117 = null;var inst_49118 = (0);var inst_49119 = (0);var state_49239__$1 = (function (){var statearr_49295 = state_49239;(statearr_49295[(13)] = inst_49116);
(statearr_49295[(14)] = inst_49119);
(statearr_49295[(15)] = inst_49117);
(statearr_49295[(16)] = inst_49118);
return statearr_49295;
})();var statearr_49296_49363 = state_49239__$1;(statearr_49296_49363[(2)] = null);
(statearr_49296_49363[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (14)))
{var state_49239__$1 = state_49239;var statearr_49297_49364 = state_49239__$1;(statearr_49297_49364[(2)] = null);
(statearr_49297_49364[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (45)))
{var inst_49229 = (state_49239[(2)]);var state_49239__$1 = state_49239;var statearr_49298_49365 = state_49239__$1;(statearr_49298_49365[(2)] = inst_49229);
(statearr_49298_49365[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (26)))
{var inst_49167 = (state_49239[(30)]);var inst_49225 = (state_49239[(2)]);var inst_49226 = cljs.core.seq.call(null,inst_49167);var state_49239__$1 = (function (){var statearr_49299 = state_49239;(statearr_49299[(32)] = inst_49225);
return statearr_49299;
})();if(inst_49226)
{var statearr_49300_49366 = state_49239__$1;(statearr_49300_49366[(1)] = (42));
} else
{var statearr_49301_49367 = state_49239__$1;(statearr_49301_49367[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (16)))
{var inst_49136 = (state_49239[(7)]);var inst_49138 = cljs.core.chunked_seq_QMARK_.call(null,inst_49136);var state_49239__$1 = state_49239;if(inst_49138)
{var statearr_49305_49368 = state_49239__$1;(statearr_49305_49368[(1)] = (19));
} else
{var statearr_49306_49369 = state_49239__$1;(statearr_49306_49369[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (38)))
{var inst_49218 = (state_49239[(2)]);var state_49239__$1 = state_49239;var statearr_49307_49370 = state_49239__$1;(statearr_49307_49370[(2)] = inst_49218);
(statearr_49307_49370[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (30)))
{var inst_49178 = (state_49239[(9)]);var inst_49176 = (state_49239[(10)]);var inst_49175 = (state_49239[(19)]);var inst_49177 = (state_49239[(20)]);var inst_49192 = (state_49239[(2)]);var inst_49193 = (inst_49178 + (1));var tmp49302 = inst_49176;var tmp49303 = inst_49175;var tmp49304 = inst_49177;var inst_49175__$1 = tmp49303;var inst_49176__$1 = tmp49302;var inst_49177__$1 = tmp49304;var inst_49178__$1 = inst_49193;var state_49239__$1 = (function (){var statearr_49308 = state_49239;(statearr_49308[(9)] = inst_49178__$1);
(statearr_49308[(10)] = inst_49176__$1);
(statearr_49308[(19)] = inst_49175__$1);
(statearr_49308[(33)] = inst_49192);
(statearr_49308[(20)] = inst_49177__$1);
return statearr_49308;
})();var statearr_49309_49371 = state_49239__$1;(statearr_49309_49371[(2)] = null);
(statearr_49309_49371[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (10)))
{var inst_49119 = (state_49239[(14)]);var inst_49117 = (state_49239[(15)]);var inst_49125 = cljs.core._nth.call(null,inst_49117,inst_49119);var inst_49126 = cljs.core.nth.call(null,inst_49125,(0),null);var inst_49127 = cljs.core.nth.call(null,inst_49125,(1),null);var state_49239__$1 = (function (){var statearr_49310 = state_49239;(statearr_49310[(28)] = inst_49126);
return statearr_49310;
})();if(cljs.core.truth_(inst_49127))
{var statearr_49311_49372 = state_49239__$1;(statearr_49311_49372[(1)] = (13));
} else
{var statearr_49312_49373 = state_49239__$1;(statearr_49312_49373[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (18)))
{var inst_49160 = (state_49239[(2)]);var state_49239__$1 = state_49239;var statearr_49313_49374 = state_49239__$1;(statearr_49313_49374[(2)] = inst_49160);
(statearr_49313_49374[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (42)))
{var state_49239__$1 = state_49239;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49239__$1,(45),dchan);
} else
{if((state_val_49240 === (37)))
{var inst_49196 = (state_49239[(17)]);var inst_49205 = cljs.core.first.call(null,inst_49196);var state_49239__$1 = (function (){var statearr_49314 = state_49239;(statearr_49314[(25)] = inst_49205);
return statearr_49314;
})();var statearr_49315_49375 = state_49239__$1;(statearr_49315_49375[(2)] = null);
(statearr_49315_49375[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49240 === (8)))
{var inst_49119 = (state_49239[(14)]);var inst_49118 = (state_49239[(16)]);var inst_49121 = (inst_49119 < inst_49118);var inst_49122 = inst_49121;var state_49239__$1 = state_49239;if(cljs.core.truth_(inst_49122))
{var statearr_49316_49376 = state_49239__$1;(statearr_49316_49376[(1)] = (10));
} else
{var statearr_49317_49377 = state_49239__$1;(statearr_49317_49377[(1)] = (11));
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
});})(c__5693__auto___49325,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___49325,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_49321 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49321[(0)] = state_machine__5679__auto__);
(statearr_49321[(1)] = (1));
return statearr_49321;
});
var state_machine__5679__auto____1 = (function (state_49239){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_49239);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e49322){if((e49322 instanceof Object))
{var ex__5682__auto__ = e49322;var statearr_49323_49378 = state_49239;(statearr_49323_49378[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49239);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49379 = state_49239;
state_49239 = G__49379;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_49239){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_49239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___49325,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_49324 = f__5694__auto__.call(null);(statearr_49324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___49325);
return statearr_49324;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___49325,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj49381 = {};return obj49381;
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
;var m = (function (){if(typeof cljs.core.async.t49491 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49491 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta49492){
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
this.meta49492 = meta49492;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49491.cljs$lang$type = true;
cljs.core.async.t49491.cljs$lang$ctorStr = "cljs.core.async/t49491";
cljs.core.async.t49491.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t49491");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49491.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t49491.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49491.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49491.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49491.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49491.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49491.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49491.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49491.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49493){var self__ = this;
var _49493__$1 = this;return self__.meta49492;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t49491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_49493,meta49492__$1){var self__ = this;
var _49493__$1 = this;return (new cljs.core.async.t49491(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta49492__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t49491 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t49491(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49492){return (new cljs.core.async.t49491(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta49492));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t49491(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___49600 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___49600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___49600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_49558){var state_val_49559 = (state_49558[(1)]);if((state_val_49559 === (7)))
{var inst_49507 = (state_49558[(7)]);var inst_49512 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49507);var state_49558__$1 = state_49558;var statearr_49560_49601 = state_49558__$1;(statearr_49560_49601[(2)] = inst_49512);
(statearr_49560_49601[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (20)))
{var inst_49522 = (state_49558[(8)]);var state_49558__$1 = state_49558;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49558__$1,(23),out,inst_49522);
} else
{if((state_val_49559 === (1)))
{var inst_49497 = (state_49558[(9)]);var inst_49497__$1 = calc_state.call(null);var inst_49498 = cljs.core.seq_QMARK_.call(null,inst_49497__$1);var state_49558__$1 = (function (){var statearr_49561 = state_49558;(statearr_49561[(9)] = inst_49497__$1);
return statearr_49561;
})();if(inst_49498)
{var statearr_49562_49602 = state_49558__$1;(statearr_49562_49602[(1)] = (2));
} else
{var statearr_49563_49603 = state_49558__$1;(statearr_49563_49603[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (4)))
{var inst_49497 = (state_49558[(9)]);var inst_49503 = (state_49558[(2)]);var inst_49504 = cljs.core.get.call(null,inst_49503,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_49505 = cljs.core.get.call(null,inst_49503,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_49506 = cljs.core.get.call(null,inst_49503,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_49507 = inst_49497;var state_49558__$1 = (function (){var statearr_49564 = state_49558;(statearr_49564[(10)] = inst_49506);
(statearr_49564[(11)] = inst_49504);
(statearr_49564[(12)] = inst_49505);
(statearr_49564[(7)] = inst_49507);
return statearr_49564;
})();var statearr_49565_49604 = state_49558__$1;(statearr_49565_49604[(2)] = null);
(statearr_49565_49604[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (15)))
{var state_49558__$1 = state_49558;var statearr_49566_49605 = state_49558__$1;(statearr_49566_49605[(2)] = null);
(statearr_49566_49605[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (21)))
{var state_49558__$1 = state_49558;var statearr_49567_49606 = state_49558__$1;(statearr_49567_49606[(2)] = null);
(statearr_49567_49606[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (13)))
{var inst_49554 = (state_49558[(2)]);var state_49558__$1 = state_49558;var statearr_49568_49607 = state_49558__$1;(statearr_49568_49607[(2)] = inst_49554);
(statearr_49568_49607[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (22)))
{var inst_49515 = (state_49558[(13)]);var inst_49551 = (state_49558[(2)]);var inst_49507 = inst_49515;var state_49558__$1 = (function (){var statearr_49569 = state_49558;(statearr_49569[(14)] = inst_49551);
(statearr_49569[(7)] = inst_49507);
return statearr_49569;
})();var statearr_49570_49608 = state_49558__$1;(statearr_49570_49608[(2)] = null);
(statearr_49570_49608[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (6)))
{var inst_49556 = (state_49558[(2)]);var state_49558__$1 = state_49558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49558__$1,inst_49556);
} else
{if((state_val_49559 === (17)))
{var inst_49537 = (state_49558[(15)]);var state_49558__$1 = state_49558;var statearr_49571_49609 = state_49558__$1;(statearr_49571_49609[(2)] = inst_49537);
(statearr_49571_49609[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (3)))
{var inst_49497 = (state_49558[(9)]);var state_49558__$1 = state_49558;var statearr_49572_49610 = state_49558__$1;(statearr_49572_49610[(2)] = inst_49497);
(statearr_49572_49610[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (12)))
{var inst_49523 = (state_49558[(16)]);var inst_49537 = (state_49558[(15)]);var inst_49518 = (state_49558[(17)]);var inst_49537__$1 = inst_49518.call(null,inst_49523);var state_49558__$1 = (function (){var statearr_49573 = state_49558;(statearr_49573[(15)] = inst_49537__$1);
return statearr_49573;
})();if(cljs.core.truth_(inst_49537__$1))
{var statearr_49574_49611 = state_49558__$1;(statearr_49574_49611[(1)] = (17));
} else
{var statearr_49575_49612 = state_49558__$1;(statearr_49575_49612[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (2)))
{var inst_49497 = (state_49558[(9)]);var inst_49500 = cljs.core.apply.call(null,cljs.core.hash_map,inst_49497);var state_49558__$1 = state_49558;var statearr_49576_49613 = state_49558__$1;(statearr_49576_49613[(2)] = inst_49500);
(statearr_49576_49613[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (23)))
{var inst_49548 = (state_49558[(2)]);var state_49558__$1 = state_49558;var statearr_49577_49614 = state_49558__$1;(statearr_49577_49614[(2)] = inst_49548);
(statearr_49577_49614[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (19)))
{var inst_49545 = (state_49558[(2)]);var state_49558__$1 = state_49558;if(cljs.core.truth_(inst_49545))
{var statearr_49578_49615 = state_49558__$1;(statearr_49578_49615[(1)] = (20));
} else
{var statearr_49579_49616 = state_49558__$1;(statearr_49579_49616[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (11)))
{var inst_49522 = (state_49558[(8)]);var inst_49528 = (inst_49522 == null);var state_49558__$1 = state_49558;if(cljs.core.truth_(inst_49528))
{var statearr_49580_49617 = state_49558__$1;(statearr_49580_49617[(1)] = (14));
} else
{var statearr_49581_49618 = state_49558__$1;(statearr_49581_49618[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (9)))
{var inst_49515 = (state_49558[(13)]);var inst_49515__$1 = (state_49558[(2)]);var inst_49516 = cljs.core.get.call(null,inst_49515__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_49517 = cljs.core.get.call(null,inst_49515__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_49518 = cljs.core.get.call(null,inst_49515__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_49558__$1 = (function (){var statearr_49582 = state_49558;(statearr_49582[(18)] = inst_49517);
(statearr_49582[(13)] = inst_49515__$1);
(statearr_49582[(17)] = inst_49518);
return statearr_49582;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_49558__$1,(10),inst_49516);
} else
{if((state_val_49559 === (5)))
{var inst_49507 = (state_49558[(7)]);var inst_49510 = cljs.core.seq_QMARK_.call(null,inst_49507);var state_49558__$1 = state_49558;if(inst_49510)
{var statearr_49583_49619 = state_49558__$1;(statearr_49583_49619[(1)] = (7));
} else
{var statearr_49584_49620 = state_49558__$1;(statearr_49584_49620[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (14)))
{var inst_49523 = (state_49558[(16)]);var inst_49530 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_49523);var state_49558__$1 = state_49558;var statearr_49585_49621 = state_49558__$1;(statearr_49585_49621[(2)] = inst_49530);
(statearr_49585_49621[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (16)))
{var inst_49533 = (state_49558[(2)]);var inst_49534 = calc_state.call(null);var inst_49507 = inst_49534;var state_49558__$1 = (function (){var statearr_49586 = state_49558;(statearr_49586[(19)] = inst_49533);
(statearr_49586[(7)] = inst_49507);
return statearr_49586;
})();var statearr_49587_49622 = state_49558__$1;(statearr_49587_49622[(2)] = null);
(statearr_49587_49622[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (10)))
{var inst_49523 = (state_49558[(16)]);var inst_49522 = (state_49558[(8)]);var inst_49521 = (state_49558[(2)]);var inst_49522__$1 = cljs.core.nth.call(null,inst_49521,(0),null);var inst_49523__$1 = cljs.core.nth.call(null,inst_49521,(1),null);var inst_49524 = (inst_49522__$1 == null);var inst_49525 = cljs.core._EQ_.call(null,inst_49523__$1,change);var inst_49526 = (inst_49524) || (inst_49525);var state_49558__$1 = (function (){var statearr_49588 = state_49558;(statearr_49588[(16)] = inst_49523__$1);
(statearr_49588[(8)] = inst_49522__$1);
return statearr_49588;
})();if(cljs.core.truth_(inst_49526))
{var statearr_49589_49623 = state_49558__$1;(statearr_49589_49623[(1)] = (11));
} else
{var statearr_49590_49624 = state_49558__$1;(statearr_49590_49624[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (18)))
{var inst_49523 = (state_49558[(16)]);var inst_49517 = (state_49558[(18)]);var inst_49518 = (state_49558[(17)]);var inst_49540 = cljs.core.empty_QMARK_.call(null,inst_49518);var inst_49541 = inst_49517.call(null,inst_49523);var inst_49542 = cljs.core.not.call(null,inst_49541);var inst_49543 = (inst_49540) && (inst_49542);var state_49558__$1 = state_49558;var statearr_49591_49625 = state_49558__$1;(statearr_49591_49625[(2)] = inst_49543);
(statearr_49591_49625[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49559 === (8)))
{var inst_49507 = (state_49558[(7)]);var state_49558__$1 = state_49558;var statearr_49592_49626 = state_49558__$1;(statearr_49592_49626[(2)] = inst_49507);
(statearr_49592_49626[(1)] = (9));
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
});})(c__5693__auto___49600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___49600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_49596 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49596[(0)] = state_machine__5679__auto__);
(statearr_49596[(1)] = (1));
return statearr_49596;
});
var state_machine__5679__auto____1 = (function (state_49558){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_49558);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e49597){if((e49597 instanceof Object))
{var ex__5682__auto__ = e49597;var statearr_49598_49627 = state_49558;(statearr_49598_49627[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49597;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49628 = state_49558;
state_49558 = G__49628;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_49558){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_49558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___49600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_49599 = f__5694__auto__.call(null);(statearr_49599[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___49600);
return statearr_49599;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___49600,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj49630 = {};return obj49630;
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
return (function (p1__49631_SHARP_){if(cljs.core.truth_(p1__49631_SHARP_.call(null,topic)))
{return p1__49631_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__49631_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t49756 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t49756 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta49757){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta49757 = meta49757;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t49756.cljs$lang$type = true;
cljs.core.async.t49756.cljs$lang$ctorStr = "cljs.core.async/t49756";
cljs.core.async.t49756.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t49756");
});})(mults,ensure_mult))
;
cljs.core.async.t49756.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t49756.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t49756.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t49756.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t49756.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t49756.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t49756.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t49756.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_49758){var self__ = this;
var _49758__$1 = this;return self__.meta49757;
});})(mults,ensure_mult))
;
cljs.core.async.t49756.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_49758,meta49757__$1){var self__ = this;
var _49758__$1 = this;return (new cljs.core.async.t49756(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta49757__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t49756 = ((function (mults,ensure_mult){
return (function __GT_t49756(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49757){return (new cljs.core.async.t49756(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta49757));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t49756(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___49880 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___49880,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___49880,mults,ensure_mult,p){
return (function (state_49832){var state_val_49833 = (state_49832[(1)]);if((state_val_49833 === (7)))
{var inst_49828 = (state_49832[(2)]);var state_49832__$1 = state_49832;var statearr_49834_49881 = state_49832__$1;(statearr_49834_49881[(2)] = inst_49828);
(statearr_49834_49881[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (20)))
{var state_49832__$1 = state_49832;var statearr_49835_49882 = state_49832__$1;(statearr_49835_49882[(2)] = null);
(statearr_49835_49882[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (1)))
{var state_49832__$1 = state_49832;var statearr_49836_49883 = state_49832__$1;(statearr_49836_49883[(2)] = null);
(statearr_49836_49883[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (24)))
{var inst_49811 = (state_49832[(7)]);var inst_49761 = (state_49832[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_49832,(23),Object,null,(22));var inst_49818 = cljs.core.async.muxch_STAR_.call(null,inst_49811);var state_49832__$1 = state_49832;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_49832__$1,(25),inst_49818,inst_49761);
} else
{if((state_val_49833 === (4)))
{var inst_49761 = (state_49832[(8)]);var inst_49761__$1 = (state_49832[(2)]);var inst_49762 = (inst_49761__$1 == null);var state_49832__$1 = (function (){var statearr_49837 = state_49832;(statearr_49837[(8)] = inst_49761__$1);
return statearr_49837;
})();if(cljs.core.truth_(inst_49762))
{var statearr_49838_49884 = state_49832__$1;(statearr_49838_49884[(1)] = (5));
} else
{var statearr_49839_49885 = state_49832__$1;(statearr_49839_49885[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (15)))
{var inst_49803 = (state_49832[(2)]);var state_49832__$1 = state_49832;var statearr_49840_49886 = state_49832__$1;(statearr_49840_49886[(2)] = inst_49803);
(statearr_49840_49886[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (21)))
{var inst_49825 = (state_49832[(2)]);var state_49832__$1 = (function (){var statearr_49841 = state_49832;(statearr_49841[(9)] = inst_49825);
return statearr_49841;
})();var statearr_49842_49887 = state_49832__$1;(statearr_49842_49887[(2)] = null);
(statearr_49842_49887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (13)))
{var inst_49785 = (state_49832[(10)]);var inst_49787 = cljs.core.chunked_seq_QMARK_.call(null,inst_49785);var state_49832__$1 = state_49832;if(inst_49787)
{var statearr_49843_49888 = state_49832__$1;(statearr_49843_49888[(1)] = (16));
} else
{var statearr_49844_49889 = state_49832__$1;(statearr_49844_49889[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (22)))
{var inst_49822 = (state_49832[(2)]);var state_49832__$1 = state_49832;var statearr_49845_49890 = state_49832__$1;(statearr_49845_49890[(2)] = inst_49822);
(statearr_49845_49890[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (6)))
{var inst_49809 = (state_49832[(11)]);var inst_49811 = (state_49832[(7)]);var inst_49761 = (state_49832[(8)]);var inst_49809__$1 = topic_fn.call(null,inst_49761);var inst_49810 = cljs.core.deref.call(null,mults);var inst_49811__$1 = cljs.core.get.call(null,inst_49810,inst_49809__$1);var state_49832__$1 = (function (){var statearr_49846 = state_49832;(statearr_49846[(11)] = inst_49809__$1);
(statearr_49846[(7)] = inst_49811__$1);
return statearr_49846;
})();if(cljs.core.truth_(inst_49811__$1))
{var statearr_49847_49891 = state_49832__$1;(statearr_49847_49891[(1)] = (19));
} else
{var statearr_49848_49892 = state_49832__$1;(statearr_49848_49892[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (25)))
{var inst_49820 = (state_49832[(2)]);var state_49832__$1 = state_49832;var statearr_49849_49893 = state_49832__$1;(statearr_49849_49893[(2)] = inst_49820);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49832__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (17)))
{var inst_49785 = (state_49832[(10)]);var inst_49794 = cljs.core.first.call(null,inst_49785);var inst_49795 = cljs.core.async.muxch_STAR_.call(null,inst_49794);var inst_49796 = cljs.core.async.close_BANG_.call(null,inst_49795);var inst_49797 = cljs.core.next.call(null,inst_49785);var inst_49771 = inst_49797;var inst_49772 = null;var inst_49773 = (0);var inst_49774 = (0);var state_49832__$1 = (function (){var statearr_49850 = state_49832;(statearr_49850[(12)] = inst_49772);
(statearr_49850[(13)] = inst_49773);
(statearr_49850[(14)] = inst_49771);
(statearr_49850[(15)] = inst_49796);
(statearr_49850[(16)] = inst_49774);
return statearr_49850;
})();var statearr_49851_49894 = state_49832__$1;(statearr_49851_49894[(2)] = null);
(statearr_49851_49894[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (3)))
{var inst_49830 = (state_49832[(2)]);var state_49832__$1 = state_49832;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49832__$1,inst_49830);
} else
{if((state_val_49833 === (12)))
{var inst_49805 = (state_49832[(2)]);var state_49832__$1 = state_49832;var statearr_49852_49895 = state_49832__$1;(statearr_49852_49895[(2)] = inst_49805);
(statearr_49852_49895[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (2)))
{var state_49832__$1 = state_49832;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49832__$1,(4),ch);
} else
{if((state_val_49833 === (23)))
{var inst_49809 = (state_49832[(11)]);var inst_49813 = (state_49832[(2)]);var inst_49814 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_49809);var state_49832__$1 = (function (){var statearr_49853 = state_49832;(statearr_49853[(17)] = inst_49813);
return statearr_49853;
})();var statearr_49854_49896 = state_49832__$1;(statearr_49854_49896[(2)] = inst_49814);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49832__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (19)))
{var state_49832__$1 = state_49832;var statearr_49855_49897 = state_49832__$1;(statearr_49855_49897[(2)] = null);
(statearr_49855_49897[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (11)))
{var inst_49785 = (state_49832[(10)]);var inst_49771 = (state_49832[(14)]);var inst_49785__$1 = cljs.core.seq.call(null,inst_49771);var state_49832__$1 = (function (){var statearr_49856 = state_49832;(statearr_49856[(10)] = inst_49785__$1);
return statearr_49856;
})();if(inst_49785__$1)
{var statearr_49857_49898 = state_49832__$1;(statearr_49857_49898[(1)] = (13));
} else
{var statearr_49858_49899 = state_49832__$1;(statearr_49858_49899[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (9)))
{var inst_49807 = (state_49832[(2)]);var state_49832__$1 = state_49832;var statearr_49859_49900 = state_49832__$1;(statearr_49859_49900[(2)] = inst_49807);
(statearr_49859_49900[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (5)))
{var inst_49768 = cljs.core.deref.call(null,mults);var inst_49769 = cljs.core.vals.call(null,inst_49768);var inst_49770 = cljs.core.seq.call(null,inst_49769);var inst_49771 = inst_49770;var inst_49772 = null;var inst_49773 = (0);var inst_49774 = (0);var state_49832__$1 = (function (){var statearr_49860 = state_49832;(statearr_49860[(12)] = inst_49772);
(statearr_49860[(13)] = inst_49773);
(statearr_49860[(14)] = inst_49771);
(statearr_49860[(16)] = inst_49774);
return statearr_49860;
})();var statearr_49861_49901 = state_49832__$1;(statearr_49861_49901[(2)] = null);
(statearr_49861_49901[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (14)))
{var state_49832__$1 = state_49832;var statearr_49865_49902 = state_49832__$1;(statearr_49865_49902[(2)] = null);
(statearr_49865_49902[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (16)))
{var inst_49785 = (state_49832[(10)]);var inst_49789 = cljs.core.chunk_first.call(null,inst_49785);var inst_49790 = cljs.core.chunk_rest.call(null,inst_49785);var inst_49791 = cljs.core.count.call(null,inst_49789);var inst_49771 = inst_49790;var inst_49772 = inst_49789;var inst_49773 = inst_49791;var inst_49774 = (0);var state_49832__$1 = (function (){var statearr_49866 = state_49832;(statearr_49866[(12)] = inst_49772);
(statearr_49866[(13)] = inst_49773);
(statearr_49866[(14)] = inst_49771);
(statearr_49866[(16)] = inst_49774);
return statearr_49866;
})();var statearr_49867_49903 = state_49832__$1;(statearr_49867_49903[(2)] = null);
(statearr_49867_49903[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (10)))
{var inst_49772 = (state_49832[(12)]);var inst_49773 = (state_49832[(13)]);var inst_49771 = (state_49832[(14)]);var inst_49774 = (state_49832[(16)]);var inst_49779 = cljs.core._nth.call(null,inst_49772,inst_49774);var inst_49780 = cljs.core.async.muxch_STAR_.call(null,inst_49779);var inst_49781 = cljs.core.async.close_BANG_.call(null,inst_49780);var inst_49782 = (inst_49774 + (1));var tmp49862 = inst_49772;var tmp49863 = inst_49773;var tmp49864 = inst_49771;var inst_49771__$1 = tmp49864;var inst_49772__$1 = tmp49862;var inst_49773__$1 = tmp49863;var inst_49774__$1 = inst_49782;var state_49832__$1 = (function (){var statearr_49868 = state_49832;(statearr_49868[(12)] = inst_49772__$1);
(statearr_49868[(13)] = inst_49773__$1);
(statearr_49868[(14)] = inst_49771__$1);
(statearr_49868[(18)] = inst_49781);
(statearr_49868[(16)] = inst_49774__$1);
return statearr_49868;
})();var statearr_49869_49904 = state_49832__$1;(statearr_49869_49904[(2)] = null);
(statearr_49869_49904[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (18)))
{var inst_49800 = (state_49832[(2)]);var state_49832__$1 = state_49832;var statearr_49870_49905 = state_49832__$1;(statearr_49870_49905[(2)] = inst_49800);
(statearr_49870_49905[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49833 === (8)))
{var inst_49773 = (state_49832[(13)]);var inst_49774 = (state_49832[(16)]);var inst_49776 = (inst_49774 < inst_49773);var inst_49777 = inst_49776;var state_49832__$1 = state_49832;if(cljs.core.truth_(inst_49777))
{var statearr_49871_49906 = state_49832__$1;(statearr_49871_49906[(1)] = (10));
} else
{var statearr_49872_49907 = state_49832__$1;(statearr_49872_49907[(1)] = (11));
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
});})(c__5693__auto___49880,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___49880,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_49876 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49876[(0)] = state_machine__5679__auto__);
(statearr_49876[(1)] = (1));
return statearr_49876;
});
var state_machine__5679__auto____1 = (function (state_49832){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_49832);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e49877){if((e49877 instanceof Object))
{var ex__5682__auto__ = e49877;var statearr_49878_49908 = state_49832;(statearr_49878_49908[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49832);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e49877;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49909 = state_49832;
state_49832 = G__49909;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_49832){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_49832);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___49880,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_49879 = f__5694__auto__.call(null);(statearr_49879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___49880);
return statearr_49879;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___49880,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___50046 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50046,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50046,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_50016){var state_val_50017 = (state_50016[(1)]);if((state_val_50017 === (7)))
{var state_50016__$1 = state_50016;var statearr_50018_50047 = state_50016__$1;(statearr_50018_50047[(2)] = null);
(statearr_50018_50047[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (1)))
{var state_50016__$1 = state_50016;var statearr_50019_50048 = state_50016__$1;(statearr_50019_50048[(2)] = null);
(statearr_50019_50048[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (4)))
{var inst_49980 = (state_50016[(7)]);var inst_49982 = (inst_49980 < cnt);var state_50016__$1 = state_50016;if(cljs.core.truth_(inst_49982))
{var statearr_50020_50049 = state_50016__$1;(statearr_50020_50049[(1)] = (6));
} else
{var statearr_50021_50050 = state_50016__$1;(statearr_50021_50050[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (15)))
{var inst_50012 = (state_50016[(2)]);var state_50016__$1 = state_50016;var statearr_50022_50051 = state_50016__$1;(statearr_50022_50051[(2)] = inst_50012);
(statearr_50022_50051[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (13)))
{var inst_50005 = cljs.core.async.close_BANG_.call(null,out);var state_50016__$1 = state_50016;var statearr_50023_50052 = state_50016__$1;(statearr_50023_50052[(2)] = inst_50005);
(statearr_50023_50052[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (6)))
{var state_50016__$1 = state_50016;var statearr_50024_50053 = state_50016__$1;(statearr_50024_50053[(2)] = null);
(statearr_50024_50053[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (3)))
{var inst_50014 = (state_50016[(2)]);var state_50016__$1 = state_50016;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50016__$1,inst_50014);
} else
{if((state_val_50017 === (12)))
{var inst_50002 = (state_50016[(8)]);var inst_50002__$1 = (state_50016[(2)]);var inst_50003 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_50002__$1);var state_50016__$1 = (function (){var statearr_50025 = state_50016;(statearr_50025[(8)] = inst_50002__$1);
return statearr_50025;
})();if(cljs.core.truth_(inst_50003))
{var statearr_50026_50054 = state_50016__$1;(statearr_50026_50054[(1)] = (13));
} else
{var statearr_50027_50055 = state_50016__$1;(statearr_50027_50055[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (2)))
{var inst_49979 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_49980 = (0);var state_50016__$1 = (function (){var statearr_50028 = state_50016;(statearr_50028[(7)] = inst_49980);
(statearr_50028[(9)] = inst_49979);
return statearr_50028;
})();var statearr_50029_50056 = state_50016__$1;(statearr_50029_50056[(2)] = null);
(statearr_50029_50056[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (11)))
{var inst_49980 = (state_50016[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_50016,(10),Object,null,(9));var inst_49989 = chs__$1.call(null,inst_49980);var inst_49990 = done.call(null,inst_49980);var inst_49991 = cljs.core.async.take_BANG_.call(null,inst_49989,inst_49990);var state_50016__$1 = state_50016;var statearr_50030_50057 = state_50016__$1;(statearr_50030_50057[(2)] = inst_49991);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50016__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (9)))
{var inst_49980 = (state_50016[(7)]);var inst_49993 = (state_50016[(2)]);var inst_49994 = (inst_49980 + (1));var inst_49980__$1 = inst_49994;var state_50016__$1 = (function (){var statearr_50031 = state_50016;(statearr_50031[(10)] = inst_49993);
(statearr_50031[(7)] = inst_49980__$1);
return statearr_50031;
})();var statearr_50032_50058 = state_50016__$1;(statearr_50032_50058[(2)] = null);
(statearr_50032_50058[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (5)))
{var inst_50000 = (state_50016[(2)]);var state_50016__$1 = (function (){var statearr_50033 = state_50016;(statearr_50033[(11)] = inst_50000);
return statearr_50033;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50016__$1,(12),dchan);
} else
{if((state_val_50017 === (14)))
{var inst_50002 = (state_50016[(8)]);var inst_50007 = cljs.core.apply.call(null,f,inst_50002);var state_50016__$1 = state_50016;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50016__$1,(16),out,inst_50007);
} else
{if((state_val_50017 === (16)))
{var inst_50009 = (state_50016[(2)]);var state_50016__$1 = (function (){var statearr_50034 = state_50016;(statearr_50034[(12)] = inst_50009);
return statearr_50034;
})();var statearr_50035_50059 = state_50016__$1;(statearr_50035_50059[(2)] = null);
(statearr_50035_50059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (10)))
{var inst_49984 = (state_50016[(2)]);var inst_49985 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_50016__$1 = (function (){var statearr_50036 = state_50016;(statearr_50036[(13)] = inst_49984);
return statearr_50036;
})();var statearr_50037_50060 = state_50016__$1;(statearr_50037_50060[(2)] = inst_49985);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50016__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50017 === (8)))
{var inst_49998 = (state_50016[(2)]);var state_50016__$1 = state_50016;var statearr_50038_50061 = state_50016__$1;(statearr_50038_50061[(2)] = inst_49998);
(statearr_50038_50061[(1)] = (5));
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
});})(c__5693__auto___50046,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___50046,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50042 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50042[(0)] = state_machine__5679__auto__);
(statearr_50042[(1)] = (1));
return statearr_50042;
});
var state_machine__5679__auto____1 = (function (state_50016){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50016);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50043){if((e50043 instanceof Object))
{var ex__5682__auto__ = e50043;var statearr_50044_50062 = state_50016;(statearr_50044_50062[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50016);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50063 = state_50016;
state_50016 = G__50063;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50016){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50016);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50046,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_50045 = f__5694__auto__.call(null);(statearr_50045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50046);
return statearr_50045;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50046,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___50171 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50171,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50171,out){
return (function (state_50147){var state_val_50148 = (state_50147[(1)]);if((state_val_50148 === (7)))
{var inst_50126 = (state_50147[(7)]);var inst_50127 = (state_50147[(8)]);var inst_50126__$1 = (state_50147[(2)]);var inst_50127__$1 = cljs.core.nth.call(null,inst_50126__$1,(0),null);var inst_50128 = cljs.core.nth.call(null,inst_50126__$1,(1),null);var inst_50129 = (inst_50127__$1 == null);var state_50147__$1 = (function (){var statearr_50149 = state_50147;(statearr_50149[(7)] = inst_50126__$1);
(statearr_50149[(8)] = inst_50127__$1);
(statearr_50149[(9)] = inst_50128);
return statearr_50149;
})();if(cljs.core.truth_(inst_50129))
{var statearr_50150_50172 = state_50147__$1;(statearr_50150_50172[(1)] = (8));
} else
{var statearr_50151_50173 = state_50147__$1;(statearr_50151_50173[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50148 === (1)))
{var inst_50118 = cljs.core.vec.call(null,chs);var inst_50119 = inst_50118;var state_50147__$1 = (function (){var statearr_50152 = state_50147;(statearr_50152[(10)] = inst_50119);
return statearr_50152;
})();var statearr_50153_50174 = state_50147__$1;(statearr_50153_50174[(2)] = null);
(statearr_50153_50174[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50148 === (4)))
{var inst_50119 = (state_50147[(10)]);var state_50147__$1 = state_50147;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_50147__$1,(7),inst_50119);
} else
{if((state_val_50148 === (6)))
{var inst_50143 = (state_50147[(2)]);var state_50147__$1 = state_50147;var statearr_50154_50175 = state_50147__$1;(statearr_50154_50175[(2)] = inst_50143);
(statearr_50154_50175[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50148 === (3)))
{var inst_50145 = (state_50147[(2)]);var state_50147__$1 = state_50147;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50147__$1,inst_50145);
} else
{if((state_val_50148 === (2)))
{var inst_50119 = (state_50147[(10)]);var inst_50121 = cljs.core.count.call(null,inst_50119);var inst_50122 = (inst_50121 > (0));var state_50147__$1 = state_50147;if(cljs.core.truth_(inst_50122))
{var statearr_50156_50176 = state_50147__$1;(statearr_50156_50176[(1)] = (4));
} else
{var statearr_50157_50177 = state_50147__$1;(statearr_50157_50177[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50148 === (11)))
{var inst_50119 = (state_50147[(10)]);var inst_50136 = (state_50147[(2)]);var tmp50155 = inst_50119;var inst_50119__$1 = tmp50155;var state_50147__$1 = (function (){var statearr_50158 = state_50147;(statearr_50158[(11)] = inst_50136);
(statearr_50158[(10)] = inst_50119__$1);
return statearr_50158;
})();var statearr_50159_50178 = state_50147__$1;(statearr_50159_50178[(2)] = null);
(statearr_50159_50178[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50148 === (9)))
{var inst_50127 = (state_50147[(8)]);var state_50147__$1 = state_50147;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50147__$1,(11),out,inst_50127);
} else
{if((state_val_50148 === (5)))
{var inst_50141 = cljs.core.async.close_BANG_.call(null,out);var state_50147__$1 = state_50147;var statearr_50160_50179 = state_50147__$1;(statearr_50160_50179[(2)] = inst_50141);
(statearr_50160_50179[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50148 === (10)))
{var inst_50139 = (state_50147[(2)]);var state_50147__$1 = state_50147;var statearr_50161_50180 = state_50147__$1;(statearr_50161_50180[(2)] = inst_50139);
(statearr_50161_50180[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50148 === (8)))
{var inst_50126 = (state_50147[(7)]);var inst_50127 = (state_50147[(8)]);var inst_50128 = (state_50147[(9)]);var inst_50119 = (state_50147[(10)]);var inst_50131 = (function (){var c = inst_50128;var v = inst_50127;var vec__50124 = inst_50126;var cs = inst_50119;return ((function (c,v,vec__50124,cs,inst_50126,inst_50127,inst_50128,inst_50119,state_val_50148,c__5693__auto___50171,out){
return (function (p1__50064_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__50064_SHARP_);
});
;})(c,v,vec__50124,cs,inst_50126,inst_50127,inst_50128,inst_50119,state_val_50148,c__5693__auto___50171,out))
})();var inst_50132 = cljs.core.filterv.call(null,inst_50131,inst_50119);var inst_50119__$1 = inst_50132;var state_50147__$1 = (function (){var statearr_50162 = state_50147;(statearr_50162[(10)] = inst_50119__$1);
return statearr_50162;
})();var statearr_50163_50181 = state_50147__$1;(statearr_50163_50181[(2)] = null);
(statearr_50163_50181[(1)] = (2));
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
});})(c__5693__auto___50171,out))
;return ((function (switch__5678__auto__,c__5693__auto___50171,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50167 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50167[(0)] = state_machine__5679__auto__);
(statearr_50167[(1)] = (1));
return statearr_50167;
});
var state_machine__5679__auto____1 = (function (state_50147){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50147);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50168){if((e50168 instanceof Object))
{var ex__5682__auto__ = e50168;var statearr_50169_50182 = state_50147;(statearr_50169_50182[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50147);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50168;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50183 = state_50147;
state_50147 = G__50183;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50147){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50147);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50171,out))
})();var state__5695__auto__ = (function (){var statearr_50170 = f__5694__auto__.call(null);(statearr_50170[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50171);
return statearr_50170;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50171,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___50276 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50276,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50276,out){
return (function (state_50253){var state_val_50254 = (state_50253[(1)]);if((state_val_50254 === (7)))
{var inst_50235 = (state_50253[(7)]);var inst_50235__$1 = (state_50253[(2)]);var inst_50236 = (inst_50235__$1 == null);var inst_50237 = cljs.core.not.call(null,inst_50236);var state_50253__$1 = (function (){var statearr_50255 = state_50253;(statearr_50255[(7)] = inst_50235__$1);
return statearr_50255;
})();if(inst_50237)
{var statearr_50256_50277 = state_50253__$1;(statearr_50256_50277[(1)] = (8));
} else
{var statearr_50257_50278 = state_50253__$1;(statearr_50257_50278[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50254 === (1)))
{var inst_50230 = (0);var state_50253__$1 = (function (){var statearr_50258 = state_50253;(statearr_50258[(8)] = inst_50230);
return statearr_50258;
})();var statearr_50259_50279 = state_50253__$1;(statearr_50259_50279[(2)] = null);
(statearr_50259_50279[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50254 === (4)))
{var state_50253__$1 = state_50253;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50253__$1,(7),ch);
} else
{if((state_val_50254 === (6)))
{var inst_50248 = (state_50253[(2)]);var state_50253__$1 = state_50253;var statearr_50260_50280 = state_50253__$1;(statearr_50260_50280[(2)] = inst_50248);
(statearr_50260_50280[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50254 === (3)))
{var inst_50250 = (state_50253[(2)]);var inst_50251 = cljs.core.async.close_BANG_.call(null,out);var state_50253__$1 = (function (){var statearr_50261 = state_50253;(statearr_50261[(9)] = inst_50250);
return statearr_50261;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50253__$1,inst_50251);
} else
{if((state_val_50254 === (2)))
{var inst_50230 = (state_50253[(8)]);var inst_50232 = (inst_50230 < n);var state_50253__$1 = state_50253;if(cljs.core.truth_(inst_50232))
{var statearr_50262_50281 = state_50253__$1;(statearr_50262_50281[(1)] = (4));
} else
{var statearr_50263_50282 = state_50253__$1;(statearr_50263_50282[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50254 === (11)))
{var inst_50230 = (state_50253[(8)]);var inst_50240 = (state_50253[(2)]);var inst_50241 = (inst_50230 + (1));var inst_50230__$1 = inst_50241;var state_50253__$1 = (function (){var statearr_50264 = state_50253;(statearr_50264[(8)] = inst_50230__$1);
(statearr_50264[(10)] = inst_50240);
return statearr_50264;
})();var statearr_50265_50283 = state_50253__$1;(statearr_50265_50283[(2)] = null);
(statearr_50265_50283[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50254 === (9)))
{var state_50253__$1 = state_50253;var statearr_50266_50284 = state_50253__$1;(statearr_50266_50284[(2)] = null);
(statearr_50266_50284[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50254 === (5)))
{var state_50253__$1 = state_50253;var statearr_50267_50285 = state_50253__$1;(statearr_50267_50285[(2)] = null);
(statearr_50267_50285[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50254 === (10)))
{var inst_50245 = (state_50253[(2)]);var state_50253__$1 = state_50253;var statearr_50268_50286 = state_50253__$1;(statearr_50268_50286[(2)] = inst_50245);
(statearr_50268_50286[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50254 === (8)))
{var inst_50235 = (state_50253[(7)]);var state_50253__$1 = state_50253;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50253__$1,(11),out,inst_50235);
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
});})(c__5693__auto___50276,out))
;return ((function (switch__5678__auto__,c__5693__auto___50276,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50272 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_50272[(0)] = state_machine__5679__auto__);
(statearr_50272[(1)] = (1));
return statearr_50272;
});
var state_machine__5679__auto____1 = (function (state_50253){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50253);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50273){if((e50273 instanceof Object))
{var ex__5682__auto__ = e50273;var statearr_50274_50287 = state_50253;(statearr_50274_50287[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50253);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50273;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50288 = state_50253;
state_50253 = G__50288;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50253){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50253);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50276,out))
})();var state__5695__auto__ = (function (){var statearr_50275 = f__5694__auto__.call(null);(statearr_50275[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50276);
return statearr_50275;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50276,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___50385 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50385,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50385,out){
return (function (state_50360){var state_val_50361 = (state_50360[(1)]);if((state_val_50361 === (7)))
{var inst_50355 = (state_50360[(2)]);var state_50360__$1 = state_50360;var statearr_50362_50386 = state_50360__$1;(statearr_50362_50386[(2)] = inst_50355);
(statearr_50362_50386[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50361 === (1)))
{var inst_50337 = null;var state_50360__$1 = (function (){var statearr_50363 = state_50360;(statearr_50363[(7)] = inst_50337);
return statearr_50363;
})();var statearr_50364_50387 = state_50360__$1;(statearr_50364_50387[(2)] = null);
(statearr_50364_50387[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50361 === (4)))
{var inst_50340 = (state_50360[(8)]);var inst_50340__$1 = (state_50360[(2)]);var inst_50341 = (inst_50340__$1 == null);var inst_50342 = cljs.core.not.call(null,inst_50341);var state_50360__$1 = (function (){var statearr_50365 = state_50360;(statearr_50365[(8)] = inst_50340__$1);
return statearr_50365;
})();if(inst_50342)
{var statearr_50366_50388 = state_50360__$1;(statearr_50366_50388[(1)] = (5));
} else
{var statearr_50367_50389 = state_50360__$1;(statearr_50367_50389[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50361 === (6)))
{var state_50360__$1 = state_50360;var statearr_50368_50390 = state_50360__$1;(statearr_50368_50390[(2)] = null);
(statearr_50368_50390[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50361 === (3)))
{var inst_50357 = (state_50360[(2)]);var inst_50358 = cljs.core.async.close_BANG_.call(null,out);var state_50360__$1 = (function (){var statearr_50369 = state_50360;(statearr_50369[(9)] = inst_50357);
return statearr_50369;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50360__$1,inst_50358);
} else
{if((state_val_50361 === (2)))
{var state_50360__$1 = state_50360;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50360__$1,(4),ch);
} else
{if((state_val_50361 === (11)))
{var inst_50340 = (state_50360[(8)]);var inst_50349 = (state_50360[(2)]);var inst_50337 = inst_50340;var state_50360__$1 = (function (){var statearr_50370 = state_50360;(statearr_50370[(10)] = inst_50349);
(statearr_50370[(7)] = inst_50337);
return statearr_50370;
})();var statearr_50371_50391 = state_50360__$1;(statearr_50371_50391[(2)] = null);
(statearr_50371_50391[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50361 === (9)))
{var inst_50340 = (state_50360[(8)]);var state_50360__$1 = state_50360;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50360__$1,(11),out,inst_50340);
} else
{if((state_val_50361 === (5)))
{var inst_50340 = (state_50360[(8)]);var inst_50337 = (state_50360[(7)]);var inst_50344 = cljs.core._EQ_.call(null,inst_50340,inst_50337);var state_50360__$1 = state_50360;if(inst_50344)
{var statearr_50373_50392 = state_50360__$1;(statearr_50373_50392[(1)] = (8));
} else
{var statearr_50374_50393 = state_50360__$1;(statearr_50374_50393[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50361 === (10)))
{var inst_50352 = (state_50360[(2)]);var state_50360__$1 = state_50360;var statearr_50375_50394 = state_50360__$1;(statearr_50375_50394[(2)] = inst_50352);
(statearr_50375_50394[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50361 === (8)))
{var inst_50337 = (state_50360[(7)]);var tmp50372 = inst_50337;var inst_50337__$1 = tmp50372;var state_50360__$1 = (function (){var statearr_50376 = state_50360;(statearr_50376[(7)] = inst_50337__$1);
return statearr_50376;
})();var statearr_50377_50395 = state_50360__$1;(statearr_50377_50395[(2)] = null);
(statearr_50377_50395[(1)] = (2));
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
});})(c__5693__auto___50385,out))
;return ((function (switch__5678__auto__,c__5693__auto___50385,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50381 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_50381[(0)] = state_machine__5679__auto__);
(statearr_50381[(1)] = (1));
return statearr_50381;
});
var state_machine__5679__auto____1 = (function (state_50360){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50360);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50382){if((e50382 instanceof Object))
{var ex__5682__auto__ = e50382;var statearr_50383_50396 = state_50360;(statearr_50383_50396[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50360);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50397 = state_50360;
state_50360 = G__50397;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50360){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50360);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50385,out))
})();var state__5695__auto__ = (function (){var statearr_50384 = f__5694__auto__.call(null);(statearr_50384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50385);
return statearr_50384;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50385,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___50532 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50532,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50532,out){
return (function (state_50502){var state_val_50503 = (state_50502[(1)]);if((state_val_50503 === (7)))
{var inst_50498 = (state_50502[(2)]);var state_50502__$1 = state_50502;var statearr_50504_50533 = state_50502__$1;(statearr_50504_50533[(2)] = inst_50498);
(statearr_50504_50533[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (1)))
{var inst_50465 = (new Array(n));var inst_50466 = inst_50465;var inst_50467 = (0);var state_50502__$1 = (function (){var statearr_50505 = state_50502;(statearr_50505[(7)] = inst_50466);
(statearr_50505[(8)] = inst_50467);
return statearr_50505;
})();var statearr_50506_50534 = state_50502__$1;(statearr_50506_50534[(2)] = null);
(statearr_50506_50534[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (4)))
{var inst_50470 = (state_50502[(9)]);var inst_50470__$1 = (state_50502[(2)]);var inst_50471 = (inst_50470__$1 == null);var inst_50472 = cljs.core.not.call(null,inst_50471);var state_50502__$1 = (function (){var statearr_50507 = state_50502;(statearr_50507[(9)] = inst_50470__$1);
return statearr_50507;
})();if(inst_50472)
{var statearr_50508_50535 = state_50502__$1;(statearr_50508_50535[(1)] = (5));
} else
{var statearr_50509_50536 = state_50502__$1;(statearr_50509_50536[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (15)))
{var inst_50492 = (state_50502[(2)]);var state_50502__$1 = state_50502;var statearr_50510_50537 = state_50502__$1;(statearr_50510_50537[(2)] = inst_50492);
(statearr_50510_50537[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (13)))
{var state_50502__$1 = state_50502;var statearr_50511_50538 = state_50502__$1;(statearr_50511_50538[(2)] = null);
(statearr_50511_50538[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (6)))
{var inst_50467 = (state_50502[(8)]);var inst_50488 = (inst_50467 > (0));var state_50502__$1 = state_50502;if(cljs.core.truth_(inst_50488))
{var statearr_50512_50539 = state_50502__$1;(statearr_50512_50539[(1)] = (12));
} else
{var statearr_50513_50540 = state_50502__$1;(statearr_50513_50540[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (3)))
{var inst_50500 = (state_50502[(2)]);var state_50502__$1 = state_50502;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50502__$1,inst_50500);
} else
{if((state_val_50503 === (12)))
{var inst_50466 = (state_50502[(7)]);var inst_50490 = cljs.core.vec.call(null,inst_50466);var state_50502__$1 = state_50502;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50502__$1,(15),out,inst_50490);
} else
{if((state_val_50503 === (2)))
{var state_50502__$1 = state_50502;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50502__$1,(4),ch);
} else
{if((state_val_50503 === (11)))
{var inst_50482 = (state_50502[(2)]);var inst_50483 = (new Array(n));var inst_50466 = inst_50483;var inst_50467 = (0);var state_50502__$1 = (function (){var statearr_50514 = state_50502;(statearr_50514[(7)] = inst_50466);
(statearr_50514[(8)] = inst_50467);
(statearr_50514[(10)] = inst_50482);
return statearr_50514;
})();var statearr_50515_50541 = state_50502__$1;(statearr_50515_50541[(2)] = null);
(statearr_50515_50541[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (9)))
{var inst_50466 = (state_50502[(7)]);var inst_50480 = cljs.core.vec.call(null,inst_50466);var state_50502__$1 = state_50502;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50502__$1,(11),out,inst_50480);
} else
{if((state_val_50503 === (5)))
{var inst_50466 = (state_50502[(7)]);var inst_50467 = (state_50502[(8)]);var inst_50475 = (state_50502[(11)]);var inst_50470 = (state_50502[(9)]);var inst_50474 = (inst_50466[inst_50467] = inst_50470);var inst_50475__$1 = (inst_50467 + (1));var inst_50476 = (inst_50475__$1 < n);var state_50502__$1 = (function (){var statearr_50516 = state_50502;(statearr_50516[(11)] = inst_50475__$1);
(statearr_50516[(12)] = inst_50474);
return statearr_50516;
})();if(cljs.core.truth_(inst_50476))
{var statearr_50517_50542 = state_50502__$1;(statearr_50517_50542[(1)] = (8));
} else
{var statearr_50518_50543 = state_50502__$1;(statearr_50518_50543[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (14)))
{var inst_50495 = (state_50502[(2)]);var inst_50496 = cljs.core.async.close_BANG_.call(null,out);var state_50502__$1 = (function (){var statearr_50520 = state_50502;(statearr_50520[(13)] = inst_50495);
return statearr_50520;
})();var statearr_50521_50544 = state_50502__$1;(statearr_50521_50544[(2)] = inst_50496);
(statearr_50521_50544[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (10)))
{var inst_50486 = (state_50502[(2)]);var state_50502__$1 = state_50502;var statearr_50522_50545 = state_50502__$1;(statearr_50522_50545[(2)] = inst_50486);
(statearr_50522_50545[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50503 === (8)))
{var inst_50466 = (state_50502[(7)]);var inst_50475 = (state_50502[(11)]);var tmp50519 = inst_50466;var inst_50466__$1 = tmp50519;var inst_50467 = inst_50475;var state_50502__$1 = (function (){var statearr_50523 = state_50502;(statearr_50523[(7)] = inst_50466__$1);
(statearr_50523[(8)] = inst_50467);
return statearr_50523;
})();var statearr_50524_50546 = state_50502__$1;(statearr_50524_50546[(2)] = null);
(statearr_50524_50546[(1)] = (2));
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
});})(c__5693__auto___50532,out))
;return ((function (switch__5678__auto__,c__5693__auto___50532,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50528[(0)] = state_machine__5679__auto__);
(statearr_50528[(1)] = (1));
return statearr_50528;
});
var state_machine__5679__auto____1 = (function (state_50502){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50502);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50529){if((e50529 instanceof Object))
{var ex__5682__auto__ = e50529;var statearr_50530_50547 = state_50502;(statearr_50530_50547[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50502);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50548 = state_50502;
state_50502 = G__50548;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50502){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50502);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50532,out))
})();var state__5695__auto__ = (function (){var statearr_50531 = f__5694__auto__.call(null);(statearr_50531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50532);
return statearr_50531;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50532,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___50691 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___50691,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___50691,out){
return (function (state_50661){var state_val_50662 = (state_50661[(1)]);if((state_val_50662 === (7)))
{var inst_50657 = (state_50661[(2)]);var state_50661__$1 = state_50661;var statearr_50663_50692 = state_50661__$1;(statearr_50663_50692[(2)] = inst_50657);
(statearr_50663_50692[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (1)))
{var inst_50620 = [];var inst_50621 = inst_50620;var inst_50622 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_50661__$1 = (function (){var statearr_50664 = state_50661;(statearr_50664[(7)] = inst_50621);
(statearr_50664[(8)] = inst_50622);
return statearr_50664;
})();var statearr_50665_50693 = state_50661__$1;(statearr_50665_50693[(2)] = null);
(statearr_50665_50693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (4)))
{var inst_50625 = (state_50661[(9)]);var inst_50625__$1 = (state_50661[(2)]);var inst_50626 = (inst_50625__$1 == null);var inst_50627 = cljs.core.not.call(null,inst_50626);var state_50661__$1 = (function (){var statearr_50666 = state_50661;(statearr_50666[(9)] = inst_50625__$1);
return statearr_50666;
})();if(inst_50627)
{var statearr_50667_50694 = state_50661__$1;(statearr_50667_50694[(1)] = (5));
} else
{var statearr_50668_50695 = state_50661__$1;(statearr_50668_50695[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (15)))
{var inst_50651 = (state_50661[(2)]);var state_50661__$1 = state_50661;var statearr_50669_50696 = state_50661__$1;(statearr_50669_50696[(2)] = inst_50651);
(statearr_50669_50696[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (13)))
{var state_50661__$1 = state_50661;var statearr_50670_50697 = state_50661__$1;(statearr_50670_50697[(2)] = null);
(statearr_50670_50697[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (6)))
{var inst_50621 = (state_50661[(7)]);var inst_50646 = inst_50621.length;var inst_50647 = (inst_50646 > (0));var state_50661__$1 = state_50661;if(cljs.core.truth_(inst_50647))
{var statearr_50671_50698 = state_50661__$1;(statearr_50671_50698[(1)] = (12));
} else
{var statearr_50672_50699 = state_50661__$1;(statearr_50672_50699[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (3)))
{var inst_50659 = (state_50661[(2)]);var state_50661__$1 = state_50661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_50661__$1,inst_50659);
} else
{if((state_val_50662 === (12)))
{var inst_50621 = (state_50661[(7)]);var inst_50649 = cljs.core.vec.call(null,inst_50621);var state_50661__$1 = state_50661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50661__$1,(15),out,inst_50649);
} else
{if((state_val_50662 === (2)))
{var state_50661__$1 = state_50661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_50661__$1,(4),ch);
} else
{if((state_val_50662 === (11)))
{var inst_50625 = (state_50661[(9)]);var inst_50629 = (state_50661[(10)]);var inst_50639 = (state_50661[(2)]);var inst_50640 = [];var inst_50641 = inst_50640.push(inst_50625);var inst_50621 = inst_50640;var inst_50622 = inst_50629;var state_50661__$1 = (function (){var statearr_50673 = state_50661;(statearr_50673[(7)] = inst_50621);
(statearr_50673[(8)] = inst_50622);
(statearr_50673[(11)] = inst_50641);
(statearr_50673[(12)] = inst_50639);
return statearr_50673;
})();var statearr_50674_50700 = state_50661__$1;(statearr_50674_50700[(2)] = null);
(statearr_50674_50700[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (9)))
{var inst_50621 = (state_50661[(7)]);var inst_50637 = cljs.core.vec.call(null,inst_50621);var state_50661__$1 = state_50661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_50661__$1,(11),out,inst_50637);
} else
{if((state_val_50662 === (5)))
{var inst_50625 = (state_50661[(9)]);var inst_50629 = (state_50661[(10)]);var inst_50622 = (state_50661[(8)]);var inst_50629__$1 = f.call(null,inst_50625);var inst_50630 = cljs.core._EQ_.call(null,inst_50629__$1,inst_50622);var inst_50631 = cljs.core.keyword_identical_QMARK_.call(null,inst_50622,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_50632 = (inst_50630) || (inst_50631);var state_50661__$1 = (function (){var statearr_50675 = state_50661;(statearr_50675[(10)] = inst_50629__$1);
return statearr_50675;
})();if(cljs.core.truth_(inst_50632))
{var statearr_50676_50701 = state_50661__$1;(statearr_50676_50701[(1)] = (8));
} else
{var statearr_50677_50702 = state_50661__$1;(statearr_50677_50702[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (14)))
{var inst_50654 = (state_50661[(2)]);var inst_50655 = cljs.core.async.close_BANG_.call(null,out);var state_50661__$1 = (function (){var statearr_50679 = state_50661;(statearr_50679[(13)] = inst_50654);
return statearr_50679;
})();var statearr_50680_50703 = state_50661__$1;(statearr_50680_50703[(2)] = inst_50655);
(statearr_50680_50703[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (10)))
{var inst_50644 = (state_50661[(2)]);var state_50661__$1 = state_50661;var statearr_50681_50704 = state_50661__$1;(statearr_50681_50704[(2)] = inst_50644);
(statearr_50681_50704[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_50662 === (8)))
{var inst_50621 = (state_50661[(7)]);var inst_50625 = (state_50661[(9)]);var inst_50629 = (state_50661[(10)]);var inst_50634 = inst_50621.push(inst_50625);var tmp50678 = inst_50621;var inst_50621__$1 = tmp50678;var inst_50622 = inst_50629;var state_50661__$1 = (function (){var statearr_50682 = state_50661;(statearr_50682[(14)] = inst_50634);
(statearr_50682[(7)] = inst_50621__$1);
(statearr_50682[(8)] = inst_50622);
return statearr_50682;
})();var statearr_50683_50705 = state_50661__$1;(statearr_50683_50705[(2)] = null);
(statearr_50683_50705[(1)] = (2));
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
});})(c__5693__auto___50691,out))
;return ((function (switch__5678__auto__,c__5693__auto___50691,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_50687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_50687[(0)] = state_machine__5679__auto__);
(statearr_50687[(1)] = (1));
return statearr_50687;
});
var state_machine__5679__auto____1 = (function (state_50661){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_50661);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e50688){if((e50688 instanceof Object))
{var ex__5682__auto__ = e50688;var statearr_50689_50706 = state_50661;(statearr_50689_50706[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_50661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e50688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__50707 = state_50661;
state_50661 = G__50707;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_50661){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_50661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___50691,out))
})();var state__5695__auto__ = (function (){var statearr_50690 = f__5694__auto__.call(null);(statearr_50690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___50691);
return statearr_50690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___50691,out))
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