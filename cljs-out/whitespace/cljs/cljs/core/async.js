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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15064 = (function (f,fn_handler,meta15065){
this.f = f;
this.fn_handler = fn_handler;
this.meta15065 = meta15065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15064.cljs$lang$type = true;
cljs.core.async.t15064.cljs$lang$ctorStr = "cljs.core.async/t15064";
cljs.core.async.t15064.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15064");
});
cljs.core.async.t15064.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15066){var self__ = this;
var _15066__$1 = this;return self__.meta15065;
});
cljs.core.async.t15064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15066,meta15065__$1){var self__ = this;
var _15066__$1 = this;return (new cljs.core.async.t15064(self__.f,self__.fn_handler,meta15065__$1));
});
cljs.core.async.__GT_t15064 = (function __GT_t15064(f__$1,fn_handler__$1,meta15065){return (new cljs.core.async.t15064(f__$1,fn_handler__$1,meta15065));
});
}
return (new cljs.core.async.t15064(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15068 = buff;if(G__15068)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15068.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15068.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15068);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15068);
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
{var val_15069 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15069);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15069,ret){
return (function (){return fn1.call(null,val_15069);
});})(val_15069,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___15070 = n;var x_15071 = (0);while(true){
if((x_15071 < n__4399__auto___15070))
{(a[x_15071] = (0));
{
var G__15072 = (x_15071 + (1));
x_15071 = G__15072;
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
var G__15073 = (i + (1));
i = G__15073;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15077 = (function (flag,alt_flag,meta15078){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15078 = meta15078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15077.cljs$lang$type = true;
cljs.core.async.t15077.cljs$lang$ctorStr = "cljs.core.async/t15077";
cljs.core.async.t15077.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15077");
});})(flag))
;
cljs.core.async.t15077.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15077.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15079){var self__ = this;
var _15079__$1 = this;return self__.meta15078;
});})(flag))
;
cljs.core.async.t15077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15079,meta15078__$1){var self__ = this;
var _15079__$1 = this;return (new cljs.core.async.t15077(self__.flag,self__.alt_flag,meta15078__$1));
});})(flag))
;
cljs.core.async.__GT_t15077 = ((function (flag){
return (function __GT_t15077(flag__$1,alt_flag__$1,meta15078){return (new cljs.core.async.t15077(flag__$1,alt_flag__$1,meta15078));
});})(flag))
;
}
return (new cljs.core.async.t15077(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15083 = (function (cb,flag,alt_handler,meta15084){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15084 = meta15084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15083.cljs$lang$type = true;
cljs.core.async.t15083.cljs$lang$ctorStr = "cljs.core.async/t15083";
cljs.core.async.t15083.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15083");
});
cljs.core.async.t15083.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15085){var self__ = this;
var _15085__$1 = this;return self__.meta15084;
});
cljs.core.async.t15083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15085,meta15084__$1){var self__ = this;
var _15085__$1 = this;return (new cljs.core.async.t15083(self__.cb,self__.flag,self__.alt_handler,meta15084__$1));
});
cljs.core.async.__GT_t15083 = (function __GT_t15083(cb__$1,flag__$1,alt_handler__$1,meta15084){return (new cljs.core.async.t15083(cb__$1,flag__$1,alt_handler__$1,meta15084));
});
}
return (new cljs.core.async.t15083(cb,flag,alt_handler,null));
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
return (function (p1__15086_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15086_SHARP_,port], null));
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
var G__15087 = (i + (1));
i = G__15087;
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
var alts_BANG___delegate = function (ports,p__15088){var map__15090 = p__15088;var map__15090__$1 = ((cljs.core.seq_QMARK_.call(null,map__15090))?cljs.core.apply.call(null,cljs.core.hash_map,map__15090):map__15090);var opts = map__15090__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15088 = null;if (arguments.length > 1) {
  p__15088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15088);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15091){
var ports = cljs.core.first(arglist__15091);
var p__15088 = cljs.core.rest(arglist__15091);
return alts_BANG___delegate(ports,p__15088);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15099 = (function (ch,f,map_LT_,meta15100){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15100 = meta15100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15099.cljs$lang$type = true;
cljs.core.async.t15099.cljs$lang$ctorStr = "cljs.core.async/t15099";
cljs.core.async.t15099.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15099");
});
cljs.core.async.t15099.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15099.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15102 = (function (fn1,_,meta15100,ch,f,map_LT_,meta15103){
this.fn1 = fn1;
this._ = _;
this.meta15100 = meta15100;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15103 = meta15103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15102.cljs$lang$type = true;
cljs.core.async.t15102.cljs$lang$ctorStr = "cljs.core.async/t15102";
cljs.core.async.t15102.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15102");
});})(___$1))
;
cljs.core.async.t15102.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15102.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15092_SHARP_){return f1.call(null,(((p1__15092_SHARP_ == null))?null:self__.f.call(null,p1__15092_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15104){var self__ = this;
var _15104__$1 = this;return self__.meta15103;
});})(___$1))
;
cljs.core.async.t15102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15104,meta15103__$1){var self__ = this;
var _15104__$1 = this;return (new cljs.core.async.t15102(self__.fn1,self__._,self__.meta15100,self__.ch,self__.f,self__.map_LT_,meta15103__$1));
});})(___$1))
;
cljs.core.async.__GT_t15102 = ((function (___$1){
return (function __GT_t15102(fn1__$1,___$2,meta15100__$1,ch__$2,f__$2,map_LT___$2,meta15103){return (new cljs.core.async.t15102(fn1__$1,___$2,meta15100__$1,ch__$2,f__$2,map_LT___$2,meta15103));
});})(___$1))
;
}
return (new cljs.core.async.t15102(fn1,___$1,self__.meta15100,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15099.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15101){var self__ = this;
var _15101__$1 = this;return self__.meta15100;
});
cljs.core.async.t15099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15101,meta15100__$1){var self__ = this;
var _15101__$1 = this;return (new cljs.core.async.t15099(self__.ch,self__.f,self__.map_LT_,meta15100__$1));
});
cljs.core.async.__GT_t15099 = (function __GT_t15099(ch__$1,f__$1,map_LT___$1,meta15100){return (new cljs.core.async.t15099(ch__$1,f__$1,map_LT___$1,meta15100));
});
}
return (new cljs.core.async.t15099(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15108 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15108 = (function (ch,f,map_GT_,meta15109){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15109 = meta15109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15108.cljs$lang$type = true;
cljs.core.async.t15108.cljs$lang$ctorStr = "cljs.core.async/t15108";
cljs.core.async.t15108.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15108");
});
cljs.core.async.t15108.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15108.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15108.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15110){var self__ = this;
var _15110__$1 = this;return self__.meta15109;
});
cljs.core.async.t15108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15110,meta15109__$1){var self__ = this;
var _15110__$1 = this;return (new cljs.core.async.t15108(self__.ch,self__.f,self__.map_GT_,meta15109__$1));
});
cljs.core.async.__GT_t15108 = (function __GT_t15108(ch__$1,f__$1,map_GT___$1,meta15109){return (new cljs.core.async.t15108(ch__$1,f__$1,map_GT___$1,meta15109));
});
}
return (new cljs.core.async.t15108(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15114 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15114 = (function (ch,p,filter_GT_,meta15115){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15115 = meta15115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15114.cljs$lang$type = true;
cljs.core.async.t15114.cljs$lang$ctorStr = "cljs.core.async/t15114";
cljs.core.async.t15114.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15114");
});
cljs.core.async.t15114.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15114.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15114.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15116){var self__ = this;
var _15116__$1 = this;return self__.meta15115;
});
cljs.core.async.t15114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15116,meta15115__$1){var self__ = this;
var _15116__$1 = this;return (new cljs.core.async.t15114(self__.ch,self__.p,self__.filter_GT_,meta15115__$1));
});
cljs.core.async.__GT_t15114 = (function __GT_t15114(ch__$1,p__$1,filter_GT___$1,meta15115){return (new cljs.core.async.t15114(ch__$1,p__$1,filter_GT___$1,meta15115));
});
}
return (new cljs.core.async.t15114(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___15199 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15199,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15199,out){
return (function (state_15178){var state_val_15179 = (state_15178[(1)]);if((state_val_15179 === (7)))
{var inst_15174 = (state_15178[(2)]);var state_15178__$1 = state_15178;var statearr_15180_15200 = state_15178__$1;(statearr_15180_15200[(2)] = inst_15174);
(statearr_15180_15200[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15179 === (1)))
{var state_15178__$1 = state_15178;var statearr_15181_15201 = state_15178__$1;(statearr_15181_15201[(2)] = null);
(statearr_15181_15201[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15179 === (4)))
{var inst_15160 = (state_15178[(7)]);var inst_15160__$1 = (state_15178[(2)]);var inst_15161 = (inst_15160__$1 == null);var state_15178__$1 = (function (){var statearr_15182 = state_15178;(statearr_15182[(7)] = inst_15160__$1);
return statearr_15182;
})();if(cljs.core.truth_(inst_15161))
{var statearr_15183_15202 = state_15178__$1;(statearr_15183_15202[(1)] = (5));
} else
{var statearr_15184_15203 = state_15178__$1;(statearr_15184_15203[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15179 === (6)))
{var inst_15160 = (state_15178[(7)]);var inst_15165 = p.call(null,inst_15160);var state_15178__$1 = state_15178;if(cljs.core.truth_(inst_15165))
{var statearr_15185_15204 = state_15178__$1;(statearr_15185_15204[(1)] = (8));
} else
{var statearr_15186_15205 = state_15178__$1;(statearr_15186_15205[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15179 === (3)))
{var inst_15176 = (state_15178[(2)]);var state_15178__$1 = state_15178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15178__$1,inst_15176);
} else
{if((state_val_15179 === (2)))
{var state_15178__$1 = state_15178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15178__$1,(4),ch);
} else
{if((state_val_15179 === (11)))
{var inst_15168 = (state_15178[(2)]);var state_15178__$1 = state_15178;var statearr_15187_15206 = state_15178__$1;(statearr_15187_15206[(2)] = inst_15168);
(statearr_15187_15206[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15179 === (9)))
{var state_15178__$1 = state_15178;var statearr_15188_15207 = state_15178__$1;(statearr_15188_15207[(2)] = null);
(statearr_15188_15207[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15179 === (5)))
{var inst_15163 = cljs.core.async.close_BANG_.call(null,out);var state_15178__$1 = state_15178;var statearr_15189_15208 = state_15178__$1;(statearr_15189_15208[(2)] = inst_15163);
(statearr_15189_15208[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15179 === (10)))
{var inst_15171 = (state_15178[(2)]);var state_15178__$1 = (function (){var statearr_15190 = state_15178;(statearr_15190[(8)] = inst_15171);
return statearr_15190;
})();var statearr_15191_15209 = state_15178__$1;(statearr_15191_15209[(2)] = null);
(statearr_15191_15209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15179 === (8)))
{var inst_15160 = (state_15178[(7)]);var state_15178__$1 = state_15178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15178__$1,(11),out,inst_15160);
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
});})(c__5693__auto___15199,out))
;return ((function (switch__5678__auto__,c__5693__auto___15199,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15195 = [null,null,null,null,null,null,null,null,null];(statearr_15195[(0)] = state_machine__5679__auto__);
(statearr_15195[(1)] = (1));
return statearr_15195;
});
var state_machine__5679__auto____1 = (function (state_15178){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15178);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15196){if((e15196 instanceof Object))
{var ex__5682__auto__ = e15196;var statearr_15197_15210 = state_15178;(statearr_15197_15210[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15178);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15211 = state_15178;
state_15178 = G__15211;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15178){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15199,out))
})();var state__5695__auto__ = (function (){var statearr_15198 = f__5694__auto__.call(null);(statearr_15198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15199);
return statearr_15198;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15199,out))
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
return (function (state_15363){var state_val_15364 = (state_15363[(1)]);if((state_val_15364 === (7)))
{var inst_15359 = (state_15363[(2)]);var state_15363__$1 = state_15363;var statearr_15365_15402 = state_15363__$1;(statearr_15365_15402[(2)] = inst_15359);
(statearr_15365_15402[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (20)))
{var inst_15334 = (state_15363[(7)]);var inst_15345 = (state_15363[(2)]);var inst_15346 = cljs.core.next.call(null,inst_15334);var inst_15320 = inst_15346;var inst_15321 = null;var inst_15322 = (0);var inst_15323 = (0);var state_15363__$1 = (function (){var statearr_15366 = state_15363;(statearr_15366[(8)] = inst_15321);
(statearr_15366[(9)] = inst_15323);
(statearr_15366[(10)] = inst_15320);
(statearr_15366[(11)] = inst_15322);
(statearr_15366[(12)] = inst_15345);
return statearr_15366;
})();var statearr_15367_15403 = state_15363__$1;(statearr_15367_15403[(2)] = null);
(statearr_15367_15403[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (1)))
{var state_15363__$1 = state_15363;var statearr_15368_15404 = state_15363__$1;(statearr_15368_15404[(2)] = null);
(statearr_15368_15404[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (4)))
{var inst_15309 = (state_15363[(13)]);var inst_15309__$1 = (state_15363[(2)]);var inst_15310 = (inst_15309__$1 == null);var state_15363__$1 = (function (){var statearr_15372 = state_15363;(statearr_15372[(13)] = inst_15309__$1);
return statearr_15372;
})();if(cljs.core.truth_(inst_15310))
{var statearr_15373_15405 = state_15363__$1;(statearr_15373_15405[(1)] = (5));
} else
{var statearr_15374_15406 = state_15363__$1;(statearr_15374_15406[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (15)))
{var state_15363__$1 = state_15363;var statearr_15375_15407 = state_15363__$1;(statearr_15375_15407[(2)] = null);
(statearr_15375_15407[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (13)))
{var inst_15321 = (state_15363[(8)]);var inst_15323 = (state_15363[(9)]);var inst_15320 = (state_15363[(10)]);var inst_15322 = (state_15363[(11)]);var inst_15330 = (state_15363[(2)]);var inst_15331 = (inst_15323 + (1));var tmp15369 = inst_15321;var tmp15370 = inst_15320;var tmp15371 = inst_15322;var inst_15320__$1 = tmp15370;var inst_15321__$1 = tmp15369;var inst_15322__$1 = tmp15371;var inst_15323__$1 = inst_15331;var state_15363__$1 = (function (){var statearr_15376 = state_15363;(statearr_15376[(14)] = inst_15330);
(statearr_15376[(8)] = inst_15321__$1);
(statearr_15376[(9)] = inst_15323__$1);
(statearr_15376[(10)] = inst_15320__$1);
(statearr_15376[(11)] = inst_15322__$1);
return statearr_15376;
})();var statearr_15377_15408 = state_15363__$1;(statearr_15377_15408[(2)] = null);
(statearr_15377_15408[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (6)))
{var inst_15309 = (state_15363[(13)]);var inst_15314 = f.call(null,inst_15309);var inst_15319 = cljs.core.seq.call(null,inst_15314);var inst_15320 = inst_15319;var inst_15321 = null;var inst_15322 = (0);var inst_15323 = (0);var state_15363__$1 = (function (){var statearr_15378 = state_15363;(statearr_15378[(8)] = inst_15321);
(statearr_15378[(9)] = inst_15323);
(statearr_15378[(10)] = inst_15320);
(statearr_15378[(11)] = inst_15322);
return statearr_15378;
})();var statearr_15379_15409 = state_15363__$1;(statearr_15379_15409[(2)] = null);
(statearr_15379_15409[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (17)))
{var inst_15334 = (state_15363[(7)]);var inst_15338 = cljs.core.chunk_first.call(null,inst_15334);var inst_15339 = cljs.core.chunk_rest.call(null,inst_15334);var inst_15340 = cljs.core.count.call(null,inst_15338);var inst_15320 = inst_15339;var inst_15321 = inst_15338;var inst_15322 = inst_15340;var inst_15323 = (0);var state_15363__$1 = (function (){var statearr_15380 = state_15363;(statearr_15380[(8)] = inst_15321);
(statearr_15380[(9)] = inst_15323);
(statearr_15380[(10)] = inst_15320);
(statearr_15380[(11)] = inst_15322);
return statearr_15380;
})();var statearr_15381_15410 = state_15363__$1;(statearr_15381_15410[(2)] = null);
(statearr_15381_15410[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (3)))
{var inst_15361 = (state_15363[(2)]);var state_15363__$1 = state_15363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15363__$1,inst_15361);
} else
{if((state_val_15364 === (12)))
{var inst_15354 = (state_15363[(2)]);var state_15363__$1 = state_15363;var statearr_15382_15411 = state_15363__$1;(statearr_15382_15411[(2)] = inst_15354);
(statearr_15382_15411[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (2)))
{var state_15363__$1 = state_15363;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15363__$1,(4),in$);
} else
{if((state_val_15364 === (19)))
{var inst_15349 = (state_15363[(2)]);var state_15363__$1 = state_15363;var statearr_15383_15412 = state_15363__$1;(statearr_15383_15412[(2)] = inst_15349);
(statearr_15383_15412[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (11)))
{var inst_15334 = (state_15363[(7)]);var inst_15320 = (state_15363[(10)]);var inst_15334__$1 = cljs.core.seq.call(null,inst_15320);var state_15363__$1 = (function (){var statearr_15384 = state_15363;(statearr_15384[(7)] = inst_15334__$1);
return statearr_15384;
})();if(inst_15334__$1)
{var statearr_15385_15413 = state_15363__$1;(statearr_15385_15413[(1)] = (14));
} else
{var statearr_15386_15414 = state_15363__$1;(statearr_15386_15414[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (9)))
{var inst_15356 = (state_15363[(2)]);var state_15363__$1 = (function (){var statearr_15387 = state_15363;(statearr_15387[(15)] = inst_15356);
return statearr_15387;
})();var statearr_15388_15415 = state_15363__$1;(statearr_15388_15415[(2)] = null);
(statearr_15388_15415[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (5)))
{var inst_15312 = cljs.core.async.close_BANG_.call(null,out);var state_15363__$1 = state_15363;var statearr_15389_15416 = state_15363__$1;(statearr_15389_15416[(2)] = inst_15312);
(statearr_15389_15416[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (14)))
{var inst_15334 = (state_15363[(7)]);var inst_15336 = cljs.core.chunked_seq_QMARK_.call(null,inst_15334);var state_15363__$1 = state_15363;if(inst_15336)
{var statearr_15390_15417 = state_15363__$1;(statearr_15390_15417[(1)] = (17));
} else
{var statearr_15391_15418 = state_15363__$1;(statearr_15391_15418[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (16)))
{var inst_15352 = (state_15363[(2)]);var state_15363__$1 = state_15363;var statearr_15392_15419 = state_15363__$1;(statearr_15392_15419[(2)] = inst_15352);
(statearr_15392_15419[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15364 === (10)))
{var inst_15321 = (state_15363[(8)]);var inst_15323 = (state_15363[(9)]);var inst_15328 = cljs.core._nth.call(null,inst_15321,inst_15323);var state_15363__$1 = state_15363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15363__$1,(13),out,inst_15328);
} else
{if((state_val_15364 === (18)))
{var inst_15334 = (state_15363[(7)]);var inst_15343 = cljs.core.first.call(null,inst_15334);var state_15363__$1 = state_15363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15363__$1,(20),out,inst_15343);
} else
{if((state_val_15364 === (8)))
{var inst_15323 = (state_15363[(9)]);var inst_15322 = (state_15363[(11)]);var inst_15325 = (inst_15323 < inst_15322);var inst_15326 = inst_15325;var state_15363__$1 = state_15363;if(cljs.core.truth_(inst_15326))
{var statearr_15393_15420 = state_15363__$1;(statearr_15393_15420[(1)] = (10));
} else
{var statearr_15394_15421 = state_15363__$1;(statearr_15394_15421[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_15398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15398[(0)] = state_machine__5679__auto__);
(statearr_15398[(1)] = (1));
return statearr_15398;
});
var state_machine__5679__auto____1 = (function (state_15363){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15363);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15399){if((e15399 instanceof Object))
{var ex__5682__auto__ = e15399;var statearr_15400_15422 = state_15363;(statearr_15400_15422[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15363);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15423 = state_15363;
state_15363 = G__15423;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15363){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15401 = f__5694__auto__.call(null);(statearr_15401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15401;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___15504 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15504){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15504){
return (function (state_15483){var state_val_15484 = (state_15483[(1)]);if((state_val_15484 === (7)))
{var inst_15479 = (state_15483[(2)]);var state_15483__$1 = state_15483;var statearr_15485_15505 = state_15483__$1;(statearr_15485_15505[(2)] = inst_15479);
(statearr_15485_15505[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15484 === (1)))
{var state_15483__$1 = state_15483;var statearr_15486_15506 = state_15483__$1;(statearr_15486_15506[(2)] = null);
(statearr_15486_15506[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15484 === (4)))
{var inst_15466 = (state_15483[(7)]);var inst_15466__$1 = (state_15483[(2)]);var inst_15467 = (inst_15466__$1 == null);var state_15483__$1 = (function (){var statearr_15487 = state_15483;(statearr_15487[(7)] = inst_15466__$1);
return statearr_15487;
})();if(cljs.core.truth_(inst_15467))
{var statearr_15488_15507 = state_15483__$1;(statearr_15488_15507[(1)] = (5));
} else
{var statearr_15489_15508 = state_15483__$1;(statearr_15489_15508[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15484 === (6)))
{var inst_15466 = (state_15483[(7)]);var state_15483__$1 = state_15483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15483__$1,(11),to,inst_15466);
} else
{if((state_val_15484 === (3)))
{var inst_15481 = (state_15483[(2)]);var state_15483__$1 = state_15483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15483__$1,inst_15481);
} else
{if((state_val_15484 === (2)))
{var state_15483__$1 = state_15483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15483__$1,(4),from);
} else
{if((state_val_15484 === (11)))
{var inst_15476 = (state_15483[(2)]);var state_15483__$1 = (function (){var statearr_15490 = state_15483;(statearr_15490[(8)] = inst_15476);
return statearr_15490;
})();var statearr_15491_15509 = state_15483__$1;(statearr_15491_15509[(2)] = null);
(statearr_15491_15509[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15484 === (9)))
{var state_15483__$1 = state_15483;var statearr_15492_15510 = state_15483__$1;(statearr_15492_15510[(2)] = null);
(statearr_15492_15510[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15484 === (5)))
{var state_15483__$1 = state_15483;if(cljs.core.truth_(close_QMARK_))
{var statearr_15493_15511 = state_15483__$1;(statearr_15493_15511[(1)] = (8));
} else
{var statearr_15494_15512 = state_15483__$1;(statearr_15494_15512[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15484 === (10)))
{var inst_15473 = (state_15483[(2)]);var state_15483__$1 = state_15483;var statearr_15495_15513 = state_15483__$1;(statearr_15495_15513[(2)] = inst_15473);
(statearr_15495_15513[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15484 === (8)))
{var inst_15470 = cljs.core.async.close_BANG_.call(null,to);var state_15483__$1 = state_15483;var statearr_15496_15514 = state_15483__$1;(statearr_15496_15514[(2)] = inst_15470);
(statearr_15496_15514[(1)] = (10));
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
});})(c__5693__auto___15504))
;return ((function (switch__5678__auto__,c__5693__auto___15504){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15500 = [null,null,null,null,null,null,null,null,null];(statearr_15500[(0)] = state_machine__5679__auto__);
(statearr_15500[(1)] = (1));
return statearr_15500;
});
var state_machine__5679__auto____1 = (function (state_15483){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15483);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15501){if((e15501 instanceof Object))
{var ex__5682__auto__ = e15501;var statearr_15502_15515 = state_15483;(statearr_15502_15515[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15483);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15516 = state_15483;
state_15483 = G__15516;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15483){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15504))
})();var state__5695__auto__ = (function (){var statearr_15503 = f__5694__auto__.call(null);(statearr_15503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15504);
return statearr_15503;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15504))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___15603 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15603,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15603,tc,fc){
return (function (state_15581){var state_val_15582 = (state_15581[(1)]);if((state_val_15582 === (7)))
{var inst_15577 = (state_15581[(2)]);var state_15581__$1 = state_15581;var statearr_15583_15604 = state_15581__$1;(statearr_15583_15604[(2)] = inst_15577);
(statearr_15583_15604[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (1)))
{var state_15581__$1 = state_15581;var statearr_15584_15605 = state_15581__$1;(statearr_15584_15605[(2)] = null);
(statearr_15584_15605[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (4)))
{var inst_15562 = (state_15581[(7)]);var inst_15562__$1 = (state_15581[(2)]);var inst_15563 = (inst_15562__$1 == null);var state_15581__$1 = (function (){var statearr_15585 = state_15581;(statearr_15585[(7)] = inst_15562__$1);
return statearr_15585;
})();if(cljs.core.truth_(inst_15563))
{var statearr_15586_15606 = state_15581__$1;(statearr_15586_15606[(1)] = (5));
} else
{var statearr_15587_15607 = state_15581__$1;(statearr_15587_15607[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (6)))
{var inst_15562 = (state_15581[(7)]);var inst_15568 = p.call(null,inst_15562);var state_15581__$1 = state_15581;if(cljs.core.truth_(inst_15568))
{var statearr_15588_15608 = state_15581__$1;(statearr_15588_15608[(1)] = (9));
} else
{var statearr_15589_15609 = state_15581__$1;(statearr_15589_15609[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (3)))
{var inst_15579 = (state_15581[(2)]);var state_15581__$1 = state_15581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15581__$1,inst_15579);
} else
{if((state_val_15582 === (2)))
{var state_15581__$1 = state_15581;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15581__$1,(4),ch);
} else
{if((state_val_15582 === (11)))
{var inst_15562 = (state_15581[(7)]);var inst_15572 = (state_15581[(2)]);var state_15581__$1 = state_15581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15581__$1,(8),inst_15572,inst_15562);
} else
{if((state_val_15582 === (9)))
{var state_15581__$1 = state_15581;var statearr_15590_15610 = state_15581__$1;(statearr_15590_15610[(2)] = tc);
(statearr_15590_15610[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (5)))
{var inst_15565 = cljs.core.async.close_BANG_.call(null,tc);var inst_15566 = cljs.core.async.close_BANG_.call(null,fc);var state_15581__$1 = (function (){var statearr_15591 = state_15581;(statearr_15591[(8)] = inst_15565);
return statearr_15591;
})();var statearr_15592_15611 = state_15581__$1;(statearr_15592_15611[(2)] = inst_15566);
(statearr_15592_15611[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (10)))
{var state_15581__$1 = state_15581;var statearr_15593_15612 = state_15581__$1;(statearr_15593_15612[(2)] = fc);
(statearr_15593_15612[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15582 === (8)))
{var inst_15574 = (state_15581[(2)]);var state_15581__$1 = (function (){var statearr_15594 = state_15581;(statearr_15594[(9)] = inst_15574);
return statearr_15594;
})();var statearr_15595_15613 = state_15581__$1;(statearr_15595_15613[(2)] = null);
(statearr_15595_15613[(1)] = (2));
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
});})(c__5693__auto___15603,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___15603,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15599 = [null,null,null,null,null,null,null,null,null,null];(statearr_15599[(0)] = state_machine__5679__auto__);
(statearr_15599[(1)] = (1));
return statearr_15599;
});
var state_machine__5679__auto____1 = (function (state_15581){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15600){if((e15600 instanceof Object))
{var ex__5682__auto__ = e15600;var statearr_15601_15614 = state_15581;(statearr_15601_15614[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15581);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15615 = state_15581;
state_15581 = G__15615;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15581){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15603,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_15602 = f__5694__auto__.call(null);(statearr_15602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15603);
return statearr_15602;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15603,tc,fc))
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
return (function (state_15662){var state_val_15663 = (state_15662[(1)]);if((state_val_15663 === (7)))
{var inst_15658 = (state_15662[(2)]);var state_15662__$1 = state_15662;var statearr_15664_15680 = state_15662__$1;(statearr_15664_15680[(2)] = inst_15658);
(statearr_15664_15680[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15663 === (6)))
{var inst_15651 = (state_15662[(7)]);var inst_15648 = (state_15662[(8)]);var inst_15655 = f.call(null,inst_15648,inst_15651);var inst_15648__$1 = inst_15655;var state_15662__$1 = (function (){var statearr_15665 = state_15662;(statearr_15665[(8)] = inst_15648__$1);
return statearr_15665;
})();var statearr_15666_15681 = state_15662__$1;(statearr_15666_15681[(2)] = null);
(statearr_15666_15681[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15663 === (5)))
{var inst_15648 = (state_15662[(8)]);var state_15662__$1 = state_15662;var statearr_15667_15682 = state_15662__$1;(statearr_15667_15682[(2)] = inst_15648);
(statearr_15667_15682[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15663 === (4)))
{var inst_15651 = (state_15662[(7)]);var inst_15651__$1 = (state_15662[(2)]);var inst_15652 = (inst_15651__$1 == null);var state_15662__$1 = (function (){var statearr_15668 = state_15662;(statearr_15668[(7)] = inst_15651__$1);
return statearr_15668;
})();if(cljs.core.truth_(inst_15652))
{var statearr_15669_15683 = state_15662__$1;(statearr_15669_15683[(1)] = (5));
} else
{var statearr_15670_15684 = state_15662__$1;(statearr_15670_15684[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15663 === (3)))
{var inst_15660 = (state_15662[(2)]);var state_15662__$1 = state_15662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15662__$1,inst_15660);
} else
{if((state_val_15663 === (2)))
{var state_15662__$1 = state_15662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15662__$1,(4),ch);
} else
{if((state_val_15663 === (1)))
{var inst_15648 = init;var state_15662__$1 = (function (){var statearr_15671 = state_15662;(statearr_15671[(8)] = inst_15648);
return statearr_15671;
})();var statearr_15672_15685 = state_15662__$1;(statearr_15672_15685[(2)] = null);
(statearr_15672_15685[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_15676 = [null,null,null,null,null,null,null,null,null];(statearr_15676[(0)] = state_machine__5679__auto__);
(statearr_15676[(1)] = (1));
return statearr_15676;
});
var state_machine__5679__auto____1 = (function (state_15662){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15662);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15677){if((e15677 instanceof Object))
{var ex__5682__auto__ = e15677;var statearr_15678_15686 = state_15662;(statearr_15678_15686[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15662);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15687 = state_15662;
state_15662 = G__15687;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15662){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15679 = f__5694__auto__.call(null);(statearr_15679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15679;
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
return (function (state_15749){var state_val_15750 = (state_15749[(1)]);if((state_val_15750 === (7)))
{var inst_15730 = (state_15749[(7)]);var inst_15735 = (state_15749[(2)]);var inst_15736 = cljs.core.next.call(null,inst_15730);var inst_15730__$1 = inst_15736;var state_15749__$1 = (function (){var statearr_15751 = state_15749;(statearr_15751[(8)] = inst_15735);
(statearr_15751[(7)] = inst_15730__$1);
return statearr_15751;
})();var statearr_15752_15770 = state_15749__$1;(statearr_15752_15770[(2)] = null);
(statearr_15752_15770[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (1)))
{var inst_15729 = cljs.core.seq.call(null,coll);var inst_15730 = inst_15729;var state_15749__$1 = (function (){var statearr_15753 = state_15749;(statearr_15753[(7)] = inst_15730);
return statearr_15753;
})();var statearr_15754_15771 = state_15749__$1;(statearr_15754_15771[(2)] = null);
(statearr_15754_15771[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (4)))
{var inst_15730 = (state_15749[(7)]);var inst_15733 = cljs.core.first.call(null,inst_15730);var state_15749__$1 = state_15749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15749__$1,(7),ch,inst_15733);
} else
{if((state_val_15750 === (6)))
{var inst_15745 = (state_15749[(2)]);var state_15749__$1 = state_15749;var statearr_15755_15772 = state_15749__$1;(statearr_15755_15772[(2)] = inst_15745);
(statearr_15755_15772[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (3)))
{var inst_15747 = (state_15749[(2)]);var state_15749__$1 = state_15749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15749__$1,inst_15747);
} else
{if((state_val_15750 === (2)))
{var inst_15730 = (state_15749[(7)]);var state_15749__$1 = state_15749;if(cljs.core.truth_(inst_15730))
{var statearr_15756_15773 = state_15749__$1;(statearr_15756_15773[(1)] = (4));
} else
{var statearr_15757_15774 = state_15749__$1;(statearr_15757_15774[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (9)))
{var state_15749__$1 = state_15749;var statearr_15758_15775 = state_15749__$1;(statearr_15758_15775[(2)] = null);
(statearr_15758_15775[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (5)))
{var state_15749__$1 = state_15749;if(cljs.core.truth_(close_QMARK_))
{var statearr_15759_15776 = state_15749__$1;(statearr_15759_15776[(1)] = (8));
} else
{var statearr_15760_15777 = state_15749__$1;(statearr_15760_15777[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (10)))
{var inst_15743 = (state_15749[(2)]);var state_15749__$1 = state_15749;var statearr_15761_15778 = state_15749__$1;(statearr_15761_15778[(2)] = inst_15743);
(statearr_15761_15778[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15750 === (8)))
{var inst_15740 = cljs.core.async.close_BANG_.call(null,ch);var state_15749__$1 = state_15749;var statearr_15762_15779 = state_15749__$1;(statearr_15762_15779[(2)] = inst_15740);
(statearr_15762_15779[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_15766 = [null,null,null,null,null,null,null,null,null];(statearr_15766[(0)] = state_machine__5679__auto__);
(statearr_15766[(1)] = (1));
return statearr_15766;
});
var state_machine__5679__auto____1 = (function (state_15749){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15767){if((e15767 instanceof Object))
{var ex__5682__auto__ = e15767;var statearr_15768_15780 = state_15749;(statearr_15768_15780[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15749);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15781 = state_15749;
state_15749 = G__15781;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15749){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15769 = f__5694__auto__.call(null);(statearr_15769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15769;
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
cljs.core.async.Mux = (function (){var obj15783 = {};return obj15783;
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
cljs.core.async.Mult = (function (){var obj15785 = {};return obj15785;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16009 = (function (cs,ch,mult,meta16010){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16010 = meta16010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16009.cljs$lang$type = true;
cljs.core.async.t16009.cljs$lang$ctorStr = "cljs.core.async/t16009";
cljs.core.async.t16009.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16009");
});})(cs))
;
cljs.core.async.t16009.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16009.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16009.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16009.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16009.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16009.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16011){var self__ = this;
var _16011__$1 = this;return self__.meta16010;
});})(cs))
;
cljs.core.async.t16009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16011,meta16010__$1){var self__ = this;
var _16011__$1 = this;return (new cljs.core.async.t16009(self__.cs,self__.ch,self__.mult,meta16010__$1));
});})(cs))
;
cljs.core.async.__GT_t16009 = ((function (cs){
return (function __GT_t16009(cs__$1,ch__$1,mult__$1,meta16010){return (new cljs.core.async.t16009(cs__$1,ch__$1,mult__$1,meta16010));
});})(cs))
;
}
return (new cljs.core.async.t16009(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___16232 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16232,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16232,cs,m,dchan,dctr,done){
return (function (state_16146){var state_val_16147 = (state_16146[(1)]);if((state_val_16147 === (7)))
{var inst_16142 = (state_16146[(2)]);var state_16146__$1 = state_16146;var statearr_16148_16233 = state_16146__$1;(statearr_16148_16233[(2)] = inst_16142);
(statearr_16148_16233[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (20)))
{var inst_16043 = (state_16146[(7)]);var inst_16053 = cljs.core.first.call(null,inst_16043);var inst_16054 = cljs.core.nth.call(null,inst_16053,(0),null);var inst_16055 = cljs.core.nth.call(null,inst_16053,(1),null);var state_16146__$1 = (function (){var statearr_16149 = state_16146;(statearr_16149[(8)] = inst_16054);
return statearr_16149;
})();if(cljs.core.truth_(inst_16055))
{var statearr_16150_16234 = state_16146__$1;(statearr_16150_16234[(1)] = (22));
} else
{var statearr_16151_16235 = state_16146__$1;(statearr_16151_16235[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (27)))
{var inst_16083 = (state_16146[(9)]);var inst_16085 = (state_16146[(10)]);var inst_16090 = cljs.core._nth.call(null,inst_16083,inst_16085);var state_16146__$1 = (function (){var statearr_16152 = state_16146;(statearr_16152[(11)] = inst_16090);
return statearr_16152;
})();var statearr_16153_16236 = state_16146__$1;(statearr_16153_16236[(2)] = null);
(statearr_16153_16236[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (1)))
{var state_16146__$1 = state_16146;var statearr_16154_16237 = state_16146__$1;(statearr_16154_16237[(2)] = null);
(statearr_16154_16237[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (24)))
{var inst_16043 = (state_16146[(7)]);var inst_16060 = (state_16146[(2)]);var inst_16061 = cljs.core.next.call(null,inst_16043);var inst_16023 = inst_16061;var inst_16024 = null;var inst_16025 = (0);var inst_16026 = (0);var state_16146__$1 = (function (){var statearr_16155 = state_16146;(statearr_16155[(12)] = inst_16025);
(statearr_16155[(13)] = inst_16024);
(statearr_16155[(14)] = inst_16023);
(statearr_16155[(15)] = inst_16060);
(statearr_16155[(16)] = inst_16026);
return statearr_16155;
})();var statearr_16156_16238 = state_16146__$1;(statearr_16156_16238[(2)] = null);
(statearr_16156_16238[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (39)))
{var inst_16103 = (state_16146[(17)]);var inst_16121 = (state_16146[(2)]);var inst_16122 = cljs.core.next.call(null,inst_16103);var inst_16082 = inst_16122;var inst_16083 = null;var inst_16084 = (0);var inst_16085 = (0);var state_16146__$1 = (function (){var statearr_16160 = state_16146;(statearr_16160[(9)] = inst_16083);
(statearr_16160[(18)] = inst_16084);
(statearr_16160[(19)] = inst_16082);
(statearr_16160[(20)] = inst_16121);
(statearr_16160[(10)] = inst_16085);
return statearr_16160;
})();var statearr_16161_16239 = state_16146__$1;(statearr_16161_16239[(2)] = null);
(statearr_16161_16239[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (4)))
{var inst_16014 = (state_16146[(21)]);var inst_16014__$1 = (state_16146[(2)]);var inst_16015 = (inst_16014__$1 == null);var state_16146__$1 = (function (){var statearr_16162 = state_16146;(statearr_16162[(21)] = inst_16014__$1);
return statearr_16162;
})();if(cljs.core.truth_(inst_16015))
{var statearr_16163_16240 = state_16146__$1;(statearr_16163_16240[(1)] = (5));
} else
{var statearr_16164_16241 = state_16146__$1;(statearr_16164_16241[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (15)))
{var inst_16025 = (state_16146[(12)]);var inst_16024 = (state_16146[(13)]);var inst_16023 = (state_16146[(14)]);var inst_16026 = (state_16146[(16)]);var inst_16039 = (state_16146[(2)]);var inst_16040 = (inst_16026 + (1));var tmp16157 = inst_16025;var tmp16158 = inst_16024;var tmp16159 = inst_16023;var inst_16023__$1 = tmp16159;var inst_16024__$1 = tmp16158;var inst_16025__$1 = tmp16157;var inst_16026__$1 = inst_16040;var state_16146__$1 = (function (){var statearr_16165 = state_16146;(statearr_16165[(12)] = inst_16025__$1);
(statearr_16165[(22)] = inst_16039);
(statearr_16165[(13)] = inst_16024__$1);
(statearr_16165[(14)] = inst_16023__$1);
(statearr_16165[(16)] = inst_16026__$1);
return statearr_16165;
})();var statearr_16166_16242 = state_16146__$1;(statearr_16166_16242[(2)] = null);
(statearr_16166_16242[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (21)))
{var inst_16064 = (state_16146[(2)]);var state_16146__$1 = state_16146;var statearr_16167_16243 = state_16146__$1;(statearr_16167_16243[(2)] = inst_16064);
(statearr_16167_16243[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (31)))
{var inst_16090 = (state_16146[(11)]);var inst_16091 = (state_16146[(2)]);var inst_16092 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16093 = cljs.core.async.untap_STAR_.call(null,m,inst_16090);var state_16146__$1 = (function (){var statearr_16168 = state_16146;(statearr_16168[(23)] = inst_16092);
(statearr_16168[(24)] = inst_16091);
return statearr_16168;
})();var statearr_16169_16244 = state_16146__$1;(statearr_16169_16244[(2)] = inst_16093);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16146__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (32)))
{var inst_16090 = (state_16146[(11)]);var inst_16014 = (state_16146[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16146,(31),Object,null,(30));var inst_16097 = cljs.core.async.put_BANG_.call(null,inst_16090,inst_16014,done);var state_16146__$1 = state_16146;var statearr_16170_16245 = state_16146__$1;(statearr_16170_16245[(2)] = inst_16097);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16146__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (40)))
{var inst_16112 = (state_16146[(25)]);var inst_16113 = (state_16146[(2)]);var inst_16114 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16115 = cljs.core.async.untap_STAR_.call(null,m,inst_16112);var state_16146__$1 = (function (){var statearr_16171 = state_16146;(statearr_16171[(26)] = inst_16113);
(statearr_16171[(27)] = inst_16114);
return statearr_16171;
})();var statearr_16172_16246 = state_16146__$1;(statearr_16172_16246[(2)] = inst_16115);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16146__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (33)))
{var inst_16103 = (state_16146[(17)]);var inst_16105 = cljs.core.chunked_seq_QMARK_.call(null,inst_16103);var state_16146__$1 = state_16146;if(inst_16105)
{var statearr_16173_16247 = state_16146__$1;(statearr_16173_16247[(1)] = (36));
} else
{var statearr_16174_16248 = state_16146__$1;(statearr_16174_16248[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (13)))
{var inst_16033 = (state_16146[(28)]);var inst_16036 = cljs.core.async.close_BANG_.call(null,inst_16033);var state_16146__$1 = state_16146;var statearr_16175_16249 = state_16146__$1;(statearr_16175_16249[(2)] = inst_16036);
(statearr_16175_16249[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (22)))
{var inst_16054 = (state_16146[(8)]);var inst_16057 = cljs.core.async.close_BANG_.call(null,inst_16054);var state_16146__$1 = state_16146;var statearr_16176_16250 = state_16146__$1;(statearr_16176_16250[(2)] = inst_16057);
(statearr_16176_16250[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (36)))
{var inst_16103 = (state_16146[(17)]);var inst_16107 = cljs.core.chunk_first.call(null,inst_16103);var inst_16108 = cljs.core.chunk_rest.call(null,inst_16103);var inst_16109 = cljs.core.count.call(null,inst_16107);var inst_16082 = inst_16108;var inst_16083 = inst_16107;var inst_16084 = inst_16109;var inst_16085 = (0);var state_16146__$1 = (function (){var statearr_16177 = state_16146;(statearr_16177[(9)] = inst_16083);
(statearr_16177[(18)] = inst_16084);
(statearr_16177[(19)] = inst_16082);
(statearr_16177[(10)] = inst_16085);
return statearr_16177;
})();var statearr_16178_16251 = state_16146__$1;(statearr_16178_16251[(2)] = null);
(statearr_16178_16251[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (41)))
{var inst_16112 = (state_16146[(25)]);var inst_16014 = (state_16146[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16146,(40),Object,null,(39));var inst_16119 = cljs.core.async.put_BANG_.call(null,inst_16112,inst_16014,done);var state_16146__$1 = state_16146;var statearr_16179_16252 = state_16146__$1;(statearr_16179_16252[(2)] = inst_16119);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16146__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (43)))
{var state_16146__$1 = state_16146;var statearr_16180_16253 = state_16146__$1;(statearr_16180_16253[(2)] = null);
(statearr_16180_16253[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (29)))
{var inst_16130 = (state_16146[(2)]);var state_16146__$1 = state_16146;var statearr_16181_16254 = state_16146__$1;(statearr_16181_16254[(2)] = inst_16130);
(statearr_16181_16254[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (44)))
{var inst_16139 = (state_16146[(2)]);var state_16146__$1 = (function (){var statearr_16182 = state_16146;(statearr_16182[(29)] = inst_16139);
return statearr_16182;
})();var statearr_16183_16255 = state_16146__$1;(statearr_16183_16255[(2)] = null);
(statearr_16183_16255[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (6)))
{var inst_16074 = (state_16146[(30)]);var inst_16073 = cljs.core.deref.call(null,cs);var inst_16074__$1 = cljs.core.keys.call(null,inst_16073);var inst_16075 = cljs.core.count.call(null,inst_16074__$1);var inst_16076 = cljs.core.reset_BANG_.call(null,dctr,inst_16075);var inst_16081 = cljs.core.seq.call(null,inst_16074__$1);var inst_16082 = inst_16081;var inst_16083 = null;var inst_16084 = (0);var inst_16085 = (0);var state_16146__$1 = (function (){var statearr_16184 = state_16146;(statearr_16184[(31)] = inst_16076);
(statearr_16184[(9)] = inst_16083);
(statearr_16184[(18)] = inst_16084);
(statearr_16184[(30)] = inst_16074__$1);
(statearr_16184[(19)] = inst_16082);
(statearr_16184[(10)] = inst_16085);
return statearr_16184;
})();var statearr_16185_16256 = state_16146__$1;(statearr_16185_16256[(2)] = null);
(statearr_16185_16256[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (28)))
{var inst_16103 = (state_16146[(17)]);var inst_16082 = (state_16146[(19)]);var inst_16103__$1 = cljs.core.seq.call(null,inst_16082);var state_16146__$1 = (function (){var statearr_16186 = state_16146;(statearr_16186[(17)] = inst_16103__$1);
return statearr_16186;
})();if(inst_16103__$1)
{var statearr_16187_16257 = state_16146__$1;(statearr_16187_16257[(1)] = (33));
} else
{var statearr_16188_16258 = state_16146__$1;(statearr_16188_16258[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (25)))
{var inst_16084 = (state_16146[(18)]);var inst_16085 = (state_16146[(10)]);var inst_16087 = (inst_16085 < inst_16084);var inst_16088 = inst_16087;var state_16146__$1 = state_16146;if(cljs.core.truth_(inst_16088))
{var statearr_16189_16259 = state_16146__$1;(statearr_16189_16259[(1)] = (27));
} else
{var statearr_16190_16260 = state_16146__$1;(statearr_16190_16260[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (34)))
{var state_16146__$1 = state_16146;var statearr_16191_16261 = state_16146__$1;(statearr_16191_16261[(2)] = null);
(statearr_16191_16261[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (17)))
{var state_16146__$1 = state_16146;var statearr_16192_16262 = state_16146__$1;(statearr_16192_16262[(2)] = null);
(statearr_16192_16262[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (3)))
{var inst_16144 = (state_16146[(2)]);var state_16146__$1 = state_16146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16146__$1,inst_16144);
} else
{if((state_val_16147 === (12)))
{var inst_16069 = (state_16146[(2)]);var state_16146__$1 = state_16146;var statearr_16193_16263 = state_16146__$1;(statearr_16193_16263[(2)] = inst_16069);
(statearr_16193_16263[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (2)))
{var state_16146__$1 = state_16146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16146__$1,(4),ch);
} else
{if((state_val_16147 === (23)))
{var state_16146__$1 = state_16146;var statearr_16194_16264 = state_16146__$1;(statearr_16194_16264[(2)] = null);
(statearr_16194_16264[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (35)))
{var inst_16128 = (state_16146[(2)]);var state_16146__$1 = state_16146;var statearr_16195_16265 = state_16146__$1;(statearr_16195_16265[(2)] = inst_16128);
(statearr_16195_16265[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (19)))
{var inst_16043 = (state_16146[(7)]);var inst_16047 = cljs.core.chunk_first.call(null,inst_16043);var inst_16048 = cljs.core.chunk_rest.call(null,inst_16043);var inst_16049 = cljs.core.count.call(null,inst_16047);var inst_16023 = inst_16048;var inst_16024 = inst_16047;var inst_16025 = inst_16049;var inst_16026 = (0);var state_16146__$1 = (function (){var statearr_16196 = state_16146;(statearr_16196[(12)] = inst_16025);
(statearr_16196[(13)] = inst_16024);
(statearr_16196[(14)] = inst_16023);
(statearr_16196[(16)] = inst_16026);
return statearr_16196;
})();var statearr_16197_16266 = state_16146__$1;(statearr_16197_16266[(2)] = null);
(statearr_16197_16266[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (11)))
{var inst_16043 = (state_16146[(7)]);var inst_16023 = (state_16146[(14)]);var inst_16043__$1 = cljs.core.seq.call(null,inst_16023);var state_16146__$1 = (function (){var statearr_16198 = state_16146;(statearr_16198[(7)] = inst_16043__$1);
return statearr_16198;
})();if(inst_16043__$1)
{var statearr_16199_16267 = state_16146__$1;(statearr_16199_16267[(1)] = (16));
} else
{var statearr_16200_16268 = state_16146__$1;(statearr_16200_16268[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (9)))
{var inst_16071 = (state_16146[(2)]);var state_16146__$1 = state_16146;var statearr_16201_16269 = state_16146__$1;(statearr_16201_16269[(2)] = inst_16071);
(statearr_16201_16269[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (5)))
{var inst_16021 = cljs.core.deref.call(null,cs);var inst_16022 = cljs.core.seq.call(null,inst_16021);var inst_16023 = inst_16022;var inst_16024 = null;var inst_16025 = (0);var inst_16026 = (0);var state_16146__$1 = (function (){var statearr_16202 = state_16146;(statearr_16202[(12)] = inst_16025);
(statearr_16202[(13)] = inst_16024);
(statearr_16202[(14)] = inst_16023);
(statearr_16202[(16)] = inst_16026);
return statearr_16202;
})();var statearr_16203_16270 = state_16146__$1;(statearr_16203_16270[(2)] = null);
(statearr_16203_16270[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (14)))
{var state_16146__$1 = state_16146;var statearr_16204_16271 = state_16146__$1;(statearr_16204_16271[(2)] = null);
(statearr_16204_16271[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (45)))
{var inst_16136 = (state_16146[(2)]);var state_16146__$1 = state_16146;var statearr_16205_16272 = state_16146__$1;(statearr_16205_16272[(2)] = inst_16136);
(statearr_16205_16272[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (26)))
{var inst_16074 = (state_16146[(30)]);var inst_16132 = (state_16146[(2)]);var inst_16133 = cljs.core.seq.call(null,inst_16074);var state_16146__$1 = (function (){var statearr_16206 = state_16146;(statearr_16206[(32)] = inst_16132);
return statearr_16206;
})();if(inst_16133)
{var statearr_16207_16273 = state_16146__$1;(statearr_16207_16273[(1)] = (42));
} else
{var statearr_16208_16274 = state_16146__$1;(statearr_16208_16274[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (16)))
{var inst_16043 = (state_16146[(7)]);var inst_16045 = cljs.core.chunked_seq_QMARK_.call(null,inst_16043);var state_16146__$1 = state_16146;if(inst_16045)
{var statearr_16212_16275 = state_16146__$1;(statearr_16212_16275[(1)] = (19));
} else
{var statearr_16213_16276 = state_16146__$1;(statearr_16213_16276[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (38)))
{var inst_16125 = (state_16146[(2)]);var state_16146__$1 = state_16146;var statearr_16214_16277 = state_16146__$1;(statearr_16214_16277[(2)] = inst_16125);
(statearr_16214_16277[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (30)))
{var inst_16083 = (state_16146[(9)]);var inst_16084 = (state_16146[(18)]);var inst_16082 = (state_16146[(19)]);var inst_16085 = (state_16146[(10)]);var inst_16099 = (state_16146[(2)]);var inst_16100 = (inst_16085 + (1));var tmp16209 = inst_16083;var tmp16210 = inst_16084;var tmp16211 = inst_16082;var inst_16082__$1 = tmp16211;var inst_16083__$1 = tmp16209;var inst_16084__$1 = tmp16210;var inst_16085__$1 = inst_16100;var state_16146__$1 = (function (){var statearr_16215 = state_16146;(statearr_16215[(9)] = inst_16083__$1);
(statearr_16215[(18)] = inst_16084__$1);
(statearr_16215[(19)] = inst_16082__$1);
(statearr_16215[(10)] = inst_16085__$1);
(statearr_16215[(33)] = inst_16099);
return statearr_16215;
})();var statearr_16216_16278 = state_16146__$1;(statearr_16216_16278[(2)] = null);
(statearr_16216_16278[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (10)))
{var inst_16024 = (state_16146[(13)]);var inst_16026 = (state_16146[(16)]);var inst_16032 = cljs.core._nth.call(null,inst_16024,inst_16026);var inst_16033 = cljs.core.nth.call(null,inst_16032,(0),null);var inst_16034 = cljs.core.nth.call(null,inst_16032,(1),null);var state_16146__$1 = (function (){var statearr_16217 = state_16146;(statearr_16217[(28)] = inst_16033);
return statearr_16217;
})();if(cljs.core.truth_(inst_16034))
{var statearr_16218_16279 = state_16146__$1;(statearr_16218_16279[(1)] = (13));
} else
{var statearr_16219_16280 = state_16146__$1;(statearr_16219_16280[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (18)))
{var inst_16067 = (state_16146[(2)]);var state_16146__$1 = state_16146;var statearr_16220_16281 = state_16146__$1;(statearr_16220_16281[(2)] = inst_16067);
(statearr_16220_16281[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (42)))
{var state_16146__$1 = state_16146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16146__$1,(45),dchan);
} else
{if((state_val_16147 === (37)))
{var inst_16103 = (state_16146[(17)]);var inst_16112 = cljs.core.first.call(null,inst_16103);var state_16146__$1 = (function (){var statearr_16221 = state_16146;(statearr_16221[(25)] = inst_16112);
return statearr_16221;
})();var statearr_16222_16282 = state_16146__$1;(statearr_16222_16282[(2)] = null);
(statearr_16222_16282[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16147 === (8)))
{var inst_16025 = (state_16146[(12)]);var inst_16026 = (state_16146[(16)]);var inst_16028 = (inst_16026 < inst_16025);var inst_16029 = inst_16028;var state_16146__$1 = state_16146;if(cljs.core.truth_(inst_16029))
{var statearr_16223_16283 = state_16146__$1;(statearr_16223_16283[(1)] = (10));
} else
{var statearr_16224_16284 = state_16146__$1;(statearr_16224_16284[(1)] = (11));
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
});})(c__5693__auto___16232,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16232,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16228[(0)] = state_machine__5679__auto__);
(statearr_16228[(1)] = (1));
return statearr_16228;
});
var state_machine__5679__auto____1 = (function (state_16146){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16146);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16229){if((e16229 instanceof Object))
{var ex__5682__auto__ = e16229;var statearr_16230_16285 = state_16146;(statearr_16230_16285[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16146);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16286 = state_16146;
state_16146 = G__16286;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16146){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16232,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16231 = f__5694__auto__.call(null);(statearr_16231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16232);
return statearr_16231;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16232,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16288 = {};return obj16288;
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
;var m = (function (){if(typeof cljs.core.async.t16398 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16398 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16399){
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
this.meta16399 = meta16399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16398.cljs$lang$type = true;
cljs.core.async.t16398.cljs$lang$ctorStr = "cljs.core.async/t16398";
cljs.core.async.t16398.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16398");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16398.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16398.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16398.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16398.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16398.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16398.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16398.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16400){var self__ = this;
var _16400__$1 = this;return self__.meta16399;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16400,meta16399__$1){var self__ = this;
var _16400__$1 = this;return (new cljs.core.async.t16398(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16399__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16398 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16398(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16399){return (new cljs.core.async.t16398(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16399));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16398(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___16507 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16465){var state_val_16466 = (state_16465[(1)]);if((state_val_16466 === (7)))
{var inst_16414 = (state_16465[(7)]);var inst_16419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16414);var state_16465__$1 = state_16465;var statearr_16467_16508 = state_16465__$1;(statearr_16467_16508[(2)] = inst_16419);
(statearr_16467_16508[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (20)))
{var inst_16429 = (state_16465[(8)]);var state_16465__$1 = state_16465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16465__$1,(23),out,inst_16429);
} else
{if((state_val_16466 === (1)))
{var inst_16404 = (state_16465[(9)]);var inst_16404__$1 = calc_state.call(null);var inst_16405 = cljs.core.seq_QMARK_.call(null,inst_16404__$1);var state_16465__$1 = (function (){var statearr_16468 = state_16465;(statearr_16468[(9)] = inst_16404__$1);
return statearr_16468;
})();if(inst_16405)
{var statearr_16469_16509 = state_16465__$1;(statearr_16469_16509[(1)] = (2));
} else
{var statearr_16470_16510 = state_16465__$1;(statearr_16470_16510[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (4)))
{var inst_16404 = (state_16465[(9)]);var inst_16410 = (state_16465[(2)]);var inst_16411 = cljs.core.get.call(null,inst_16410,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16412 = cljs.core.get.call(null,inst_16410,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16413 = cljs.core.get.call(null,inst_16410,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16414 = inst_16404;var state_16465__$1 = (function (){var statearr_16471 = state_16465;(statearr_16471[(10)] = inst_16412);
(statearr_16471[(7)] = inst_16414);
(statearr_16471[(11)] = inst_16413);
(statearr_16471[(12)] = inst_16411);
return statearr_16471;
})();var statearr_16472_16511 = state_16465__$1;(statearr_16472_16511[(2)] = null);
(statearr_16472_16511[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (15)))
{var state_16465__$1 = state_16465;var statearr_16473_16512 = state_16465__$1;(statearr_16473_16512[(2)] = null);
(statearr_16473_16512[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (21)))
{var state_16465__$1 = state_16465;var statearr_16474_16513 = state_16465__$1;(statearr_16474_16513[(2)] = null);
(statearr_16474_16513[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (13)))
{var inst_16461 = (state_16465[(2)]);var state_16465__$1 = state_16465;var statearr_16475_16514 = state_16465__$1;(statearr_16475_16514[(2)] = inst_16461);
(statearr_16475_16514[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (22)))
{var inst_16422 = (state_16465[(13)]);var inst_16458 = (state_16465[(2)]);var inst_16414 = inst_16422;var state_16465__$1 = (function (){var statearr_16476 = state_16465;(statearr_16476[(7)] = inst_16414);
(statearr_16476[(14)] = inst_16458);
return statearr_16476;
})();var statearr_16477_16515 = state_16465__$1;(statearr_16477_16515[(2)] = null);
(statearr_16477_16515[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (6)))
{var inst_16463 = (state_16465[(2)]);var state_16465__$1 = state_16465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16465__$1,inst_16463);
} else
{if((state_val_16466 === (17)))
{var inst_16444 = (state_16465[(15)]);var state_16465__$1 = state_16465;var statearr_16478_16516 = state_16465__$1;(statearr_16478_16516[(2)] = inst_16444);
(statearr_16478_16516[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (3)))
{var inst_16404 = (state_16465[(9)]);var state_16465__$1 = state_16465;var statearr_16479_16517 = state_16465__$1;(statearr_16479_16517[(2)] = inst_16404);
(statearr_16479_16517[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (12)))
{var inst_16430 = (state_16465[(16)]);var inst_16425 = (state_16465[(17)]);var inst_16444 = (state_16465[(15)]);var inst_16444__$1 = inst_16425.call(null,inst_16430);var state_16465__$1 = (function (){var statearr_16480 = state_16465;(statearr_16480[(15)] = inst_16444__$1);
return statearr_16480;
})();if(cljs.core.truth_(inst_16444__$1))
{var statearr_16481_16518 = state_16465__$1;(statearr_16481_16518[(1)] = (17));
} else
{var statearr_16482_16519 = state_16465__$1;(statearr_16482_16519[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (2)))
{var inst_16404 = (state_16465[(9)]);var inst_16407 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16404);var state_16465__$1 = state_16465;var statearr_16483_16520 = state_16465__$1;(statearr_16483_16520[(2)] = inst_16407);
(statearr_16483_16520[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (23)))
{var inst_16455 = (state_16465[(2)]);var state_16465__$1 = state_16465;var statearr_16484_16521 = state_16465__$1;(statearr_16484_16521[(2)] = inst_16455);
(statearr_16484_16521[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (19)))
{var inst_16452 = (state_16465[(2)]);var state_16465__$1 = state_16465;if(cljs.core.truth_(inst_16452))
{var statearr_16485_16522 = state_16465__$1;(statearr_16485_16522[(1)] = (20));
} else
{var statearr_16486_16523 = state_16465__$1;(statearr_16486_16523[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (11)))
{var inst_16429 = (state_16465[(8)]);var inst_16435 = (inst_16429 == null);var state_16465__$1 = state_16465;if(cljs.core.truth_(inst_16435))
{var statearr_16487_16524 = state_16465__$1;(statearr_16487_16524[(1)] = (14));
} else
{var statearr_16488_16525 = state_16465__$1;(statearr_16488_16525[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (9)))
{var inst_16422 = (state_16465[(13)]);var inst_16422__$1 = (state_16465[(2)]);var inst_16423 = cljs.core.get.call(null,inst_16422__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16424 = cljs.core.get.call(null,inst_16422__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16425 = cljs.core.get.call(null,inst_16422__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16465__$1 = (function (){var statearr_16489 = state_16465;(statearr_16489[(18)] = inst_16424);
(statearr_16489[(13)] = inst_16422__$1);
(statearr_16489[(17)] = inst_16425);
return statearr_16489;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16465__$1,(10),inst_16423);
} else
{if((state_val_16466 === (5)))
{var inst_16414 = (state_16465[(7)]);var inst_16417 = cljs.core.seq_QMARK_.call(null,inst_16414);var state_16465__$1 = state_16465;if(inst_16417)
{var statearr_16490_16526 = state_16465__$1;(statearr_16490_16526[(1)] = (7));
} else
{var statearr_16491_16527 = state_16465__$1;(statearr_16491_16527[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (14)))
{var inst_16430 = (state_16465[(16)]);var inst_16437 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16430);var state_16465__$1 = state_16465;var statearr_16492_16528 = state_16465__$1;(statearr_16492_16528[(2)] = inst_16437);
(statearr_16492_16528[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (16)))
{var inst_16440 = (state_16465[(2)]);var inst_16441 = calc_state.call(null);var inst_16414 = inst_16441;var state_16465__$1 = (function (){var statearr_16493 = state_16465;(statearr_16493[(7)] = inst_16414);
(statearr_16493[(19)] = inst_16440);
return statearr_16493;
})();var statearr_16494_16529 = state_16465__$1;(statearr_16494_16529[(2)] = null);
(statearr_16494_16529[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (10)))
{var inst_16430 = (state_16465[(16)]);var inst_16429 = (state_16465[(8)]);var inst_16428 = (state_16465[(2)]);var inst_16429__$1 = cljs.core.nth.call(null,inst_16428,(0),null);var inst_16430__$1 = cljs.core.nth.call(null,inst_16428,(1),null);var inst_16431 = (inst_16429__$1 == null);var inst_16432 = cljs.core._EQ_.call(null,inst_16430__$1,change);var inst_16433 = (inst_16431) || (inst_16432);var state_16465__$1 = (function (){var statearr_16495 = state_16465;(statearr_16495[(16)] = inst_16430__$1);
(statearr_16495[(8)] = inst_16429__$1);
return statearr_16495;
})();if(cljs.core.truth_(inst_16433))
{var statearr_16496_16530 = state_16465__$1;(statearr_16496_16530[(1)] = (11));
} else
{var statearr_16497_16531 = state_16465__$1;(statearr_16497_16531[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (18)))
{var inst_16424 = (state_16465[(18)]);var inst_16430 = (state_16465[(16)]);var inst_16425 = (state_16465[(17)]);var inst_16447 = cljs.core.empty_QMARK_.call(null,inst_16425);var inst_16448 = inst_16424.call(null,inst_16430);var inst_16449 = cljs.core.not.call(null,inst_16448);var inst_16450 = (inst_16447) && (inst_16449);var state_16465__$1 = state_16465;var statearr_16498_16532 = state_16465__$1;(statearr_16498_16532[(2)] = inst_16450);
(statearr_16498_16532[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16466 === (8)))
{var inst_16414 = (state_16465[(7)]);var state_16465__$1 = state_16465;var statearr_16499_16533 = state_16465__$1;(statearr_16499_16533[(2)] = inst_16414);
(statearr_16499_16533[(1)] = (9));
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
});})(c__5693__auto___16507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___16507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16503[(0)] = state_machine__5679__auto__);
(statearr_16503[(1)] = (1));
return statearr_16503;
});
var state_machine__5679__auto____1 = (function (state_16465){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16465);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16504){if((e16504 instanceof Object))
{var ex__5682__auto__ = e16504;var statearr_16505_16534 = state_16465;(statearr_16505_16534[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16465);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16535 = state_16465;
state_16465 = G__16535;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16465){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_16506 = f__5694__auto__.call(null);(statearr_16506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16507);
return statearr_16506;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16507,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16537 = {};return obj16537;
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
return (function (p1__16538_SHARP_){if(cljs.core.truth_(p1__16538_SHARP_.call(null,topic)))
{return p1__16538_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16538_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16663 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16664){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16664 = meta16664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16663.cljs$lang$type = true;
cljs.core.async.t16663.cljs$lang$ctorStr = "cljs.core.async/t16663";
cljs.core.async.t16663.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16663");
});})(mults,ensure_mult))
;
cljs.core.async.t16663.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16663.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16663.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16663.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16665){var self__ = this;
var _16665__$1 = this;return self__.meta16664;
});})(mults,ensure_mult))
;
cljs.core.async.t16663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16665,meta16664__$1){var self__ = this;
var _16665__$1 = this;return (new cljs.core.async.t16663(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16664__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16663 = ((function (mults,ensure_mult){
return (function __GT_t16663(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16664){return (new cljs.core.async.t16663(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16664));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16663(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___16787 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16787,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16787,mults,ensure_mult,p){
return (function (state_16739){var state_val_16740 = (state_16739[(1)]);if((state_val_16740 === (7)))
{var inst_16735 = (state_16739[(2)]);var state_16739__$1 = state_16739;var statearr_16741_16788 = state_16739__$1;(statearr_16741_16788[(2)] = inst_16735);
(statearr_16741_16788[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (20)))
{var state_16739__$1 = state_16739;var statearr_16742_16789 = state_16739__$1;(statearr_16742_16789[(2)] = null);
(statearr_16742_16789[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (1)))
{var state_16739__$1 = state_16739;var statearr_16743_16790 = state_16739__$1;(statearr_16743_16790[(2)] = null);
(statearr_16743_16790[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (24)))
{var inst_16668 = (state_16739[(7)]);var inst_16718 = (state_16739[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16739,(23),Object,null,(22));var inst_16725 = cljs.core.async.muxch_STAR_.call(null,inst_16718);var state_16739__$1 = state_16739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16739__$1,(25),inst_16725,inst_16668);
} else
{if((state_val_16740 === (4)))
{var inst_16668 = (state_16739[(7)]);var inst_16668__$1 = (state_16739[(2)]);var inst_16669 = (inst_16668__$1 == null);var state_16739__$1 = (function (){var statearr_16744 = state_16739;(statearr_16744[(7)] = inst_16668__$1);
return statearr_16744;
})();if(cljs.core.truth_(inst_16669))
{var statearr_16745_16791 = state_16739__$1;(statearr_16745_16791[(1)] = (5));
} else
{var statearr_16746_16792 = state_16739__$1;(statearr_16746_16792[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (15)))
{var inst_16710 = (state_16739[(2)]);var state_16739__$1 = state_16739;var statearr_16747_16793 = state_16739__$1;(statearr_16747_16793[(2)] = inst_16710);
(statearr_16747_16793[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (21)))
{var inst_16732 = (state_16739[(2)]);var state_16739__$1 = (function (){var statearr_16748 = state_16739;(statearr_16748[(9)] = inst_16732);
return statearr_16748;
})();var statearr_16749_16794 = state_16739__$1;(statearr_16749_16794[(2)] = null);
(statearr_16749_16794[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (13)))
{var inst_16692 = (state_16739[(10)]);var inst_16694 = cljs.core.chunked_seq_QMARK_.call(null,inst_16692);var state_16739__$1 = state_16739;if(inst_16694)
{var statearr_16750_16795 = state_16739__$1;(statearr_16750_16795[(1)] = (16));
} else
{var statearr_16751_16796 = state_16739__$1;(statearr_16751_16796[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (22)))
{var inst_16729 = (state_16739[(2)]);var state_16739__$1 = state_16739;var statearr_16752_16797 = state_16739__$1;(statearr_16752_16797[(2)] = inst_16729);
(statearr_16752_16797[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (6)))
{var inst_16716 = (state_16739[(11)]);var inst_16668 = (state_16739[(7)]);var inst_16718 = (state_16739[(8)]);var inst_16716__$1 = topic_fn.call(null,inst_16668);var inst_16717 = cljs.core.deref.call(null,mults);var inst_16718__$1 = cljs.core.get.call(null,inst_16717,inst_16716__$1);var state_16739__$1 = (function (){var statearr_16753 = state_16739;(statearr_16753[(11)] = inst_16716__$1);
(statearr_16753[(8)] = inst_16718__$1);
return statearr_16753;
})();if(cljs.core.truth_(inst_16718__$1))
{var statearr_16754_16798 = state_16739__$1;(statearr_16754_16798[(1)] = (19));
} else
{var statearr_16755_16799 = state_16739__$1;(statearr_16755_16799[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (25)))
{var inst_16727 = (state_16739[(2)]);var state_16739__$1 = state_16739;var statearr_16756_16800 = state_16739__$1;(statearr_16756_16800[(2)] = inst_16727);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16739__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (17)))
{var inst_16692 = (state_16739[(10)]);var inst_16701 = cljs.core.first.call(null,inst_16692);var inst_16702 = cljs.core.async.muxch_STAR_.call(null,inst_16701);var inst_16703 = cljs.core.async.close_BANG_.call(null,inst_16702);var inst_16704 = cljs.core.next.call(null,inst_16692);var inst_16678 = inst_16704;var inst_16679 = null;var inst_16680 = (0);var inst_16681 = (0);var state_16739__$1 = (function (){var statearr_16757 = state_16739;(statearr_16757[(12)] = inst_16703);
(statearr_16757[(13)] = inst_16680);
(statearr_16757[(14)] = inst_16681);
(statearr_16757[(15)] = inst_16678);
(statearr_16757[(16)] = inst_16679);
return statearr_16757;
})();var statearr_16758_16801 = state_16739__$1;(statearr_16758_16801[(2)] = null);
(statearr_16758_16801[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (3)))
{var inst_16737 = (state_16739[(2)]);var state_16739__$1 = state_16739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16739__$1,inst_16737);
} else
{if((state_val_16740 === (12)))
{var inst_16712 = (state_16739[(2)]);var state_16739__$1 = state_16739;var statearr_16759_16802 = state_16739__$1;(statearr_16759_16802[(2)] = inst_16712);
(statearr_16759_16802[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (2)))
{var state_16739__$1 = state_16739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16739__$1,(4),ch);
} else
{if((state_val_16740 === (23)))
{var inst_16716 = (state_16739[(11)]);var inst_16720 = (state_16739[(2)]);var inst_16721 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16716);var state_16739__$1 = (function (){var statearr_16760 = state_16739;(statearr_16760[(17)] = inst_16720);
return statearr_16760;
})();var statearr_16761_16803 = state_16739__$1;(statearr_16761_16803[(2)] = inst_16721);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16739__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (19)))
{var state_16739__$1 = state_16739;var statearr_16762_16804 = state_16739__$1;(statearr_16762_16804[(2)] = null);
(statearr_16762_16804[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (11)))
{var inst_16692 = (state_16739[(10)]);var inst_16678 = (state_16739[(15)]);var inst_16692__$1 = cljs.core.seq.call(null,inst_16678);var state_16739__$1 = (function (){var statearr_16763 = state_16739;(statearr_16763[(10)] = inst_16692__$1);
return statearr_16763;
})();if(inst_16692__$1)
{var statearr_16764_16805 = state_16739__$1;(statearr_16764_16805[(1)] = (13));
} else
{var statearr_16765_16806 = state_16739__$1;(statearr_16765_16806[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (9)))
{var inst_16714 = (state_16739[(2)]);var state_16739__$1 = state_16739;var statearr_16766_16807 = state_16739__$1;(statearr_16766_16807[(2)] = inst_16714);
(statearr_16766_16807[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (5)))
{var inst_16675 = cljs.core.deref.call(null,mults);var inst_16676 = cljs.core.vals.call(null,inst_16675);var inst_16677 = cljs.core.seq.call(null,inst_16676);var inst_16678 = inst_16677;var inst_16679 = null;var inst_16680 = (0);var inst_16681 = (0);var state_16739__$1 = (function (){var statearr_16767 = state_16739;(statearr_16767[(13)] = inst_16680);
(statearr_16767[(14)] = inst_16681);
(statearr_16767[(15)] = inst_16678);
(statearr_16767[(16)] = inst_16679);
return statearr_16767;
})();var statearr_16768_16808 = state_16739__$1;(statearr_16768_16808[(2)] = null);
(statearr_16768_16808[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (14)))
{var state_16739__$1 = state_16739;var statearr_16772_16809 = state_16739__$1;(statearr_16772_16809[(2)] = null);
(statearr_16772_16809[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (16)))
{var inst_16692 = (state_16739[(10)]);var inst_16696 = cljs.core.chunk_first.call(null,inst_16692);var inst_16697 = cljs.core.chunk_rest.call(null,inst_16692);var inst_16698 = cljs.core.count.call(null,inst_16696);var inst_16678 = inst_16697;var inst_16679 = inst_16696;var inst_16680 = inst_16698;var inst_16681 = (0);var state_16739__$1 = (function (){var statearr_16773 = state_16739;(statearr_16773[(13)] = inst_16680);
(statearr_16773[(14)] = inst_16681);
(statearr_16773[(15)] = inst_16678);
(statearr_16773[(16)] = inst_16679);
return statearr_16773;
})();var statearr_16774_16810 = state_16739__$1;(statearr_16774_16810[(2)] = null);
(statearr_16774_16810[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (10)))
{var inst_16680 = (state_16739[(13)]);var inst_16681 = (state_16739[(14)]);var inst_16678 = (state_16739[(15)]);var inst_16679 = (state_16739[(16)]);var inst_16686 = cljs.core._nth.call(null,inst_16679,inst_16681);var inst_16687 = cljs.core.async.muxch_STAR_.call(null,inst_16686);var inst_16688 = cljs.core.async.close_BANG_.call(null,inst_16687);var inst_16689 = (inst_16681 + (1));var tmp16769 = inst_16680;var tmp16770 = inst_16678;var tmp16771 = inst_16679;var inst_16678__$1 = tmp16770;var inst_16679__$1 = tmp16771;var inst_16680__$1 = tmp16769;var inst_16681__$1 = inst_16689;var state_16739__$1 = (function (){var statearr_16775 = state_16739;(statearr_16775[(13)] = inst_16680__$1);
(statearr_16775[(18)] = inst_16688);
(statearr_16775[(14)] = inst_16681__$1);
(statearr_16775[(15)] = inst_16678__$1);
(statearr_16775[(16)] = inst_16679__$1);
return statearr_16775;
})();var statearr_16776_16811 = state_16739__$1;(statearr_16776_16811[(2)] = null);
(statearr_16776_16811[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (18)))
{var inst_16707 = (state_16739[(2)]);var state_16739__$1 = state_16739;var statearr_16777_16812 = state_16739__$1;(statearr_16777_16812[(2)] = inst_16707);
(statearr_16777_16812[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16740 === (8)))
{var inst_16680 = (state_16739[(13)]);var inst_16681 = (state_16739[(14)]);var inst_16683 = (inst_16681 < inst_16680);var inst_16684 = inst_16683;var state_16739__$1 = state_16739;if(cljs.core.truth_(inst_16684))
{var statearr_16778_16813 = state_16739__$1;(statearr_16778_16813[(1)] = (10));
} else
{var statearr_16779_16814 = state_16739__$1;(statearr_16779_16814[(1)] = (11));
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
});})(c__5693__auto___16787,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___16787,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16783[(0)] = state_machine__5679__auto__);
(statearr_16783[(1)] = (1));
return statearr_16783;
});
var state_machine__5679__auto____1 = (function (state_16739){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16739);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16784){if((e16784 instanceof Object))
{var ex__5682__auto__ = e16784;var statearr_16785_16815 = state_16739;(statearr_16785_16815[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16739);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16816 = state_16739;
state_16739 = G__16816;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16739){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16787,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_16786 = f__5694__auto__.call(null);(statearr_16786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16787);
return statearr_16786;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16787,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___16953 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16953,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16953,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16923){var state_val_16924 = (state_16923[(1)]);if((state_val_16924 === (7)))
{var state_16923__$1 = state_16923;var statearr_16925_16954 = state_16923__$1;(statearr_16925_16954[(2)] = null);
(statearr_16925_16954[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (1)))
{var state_16923__$1 = state_16923;var statearr_16926_16955 = state_16923__$1;(statearr_16926_16955[(2)] = null);
(statearr_16926_16955[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (4)))
{var inst_16887 = (state_16923[(7)]);var inst_16889 = (inst_16887 < cnt);var state_16923__$1 = state_16923;if(cljs.core.truth_(inst_16889))
{var statearr_16927_16956 = state_16923__$1;(statearr_16927_16956[(1)] = (6));
} else
{var statearr_16928_16957 = state_16923__$1;(statearr_16928_16957[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (15)))
{var inst_16919 = (state_16923[(2)]);var state_16923__$1 = state_16923;var statearr_16929_16958 = state_16923__$1;(statearr_16929_16958[(2)] = inst_16919);
(statearr_16929_16958[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (13)))
{var inst_16912 = cljs.core.async.close_BANG_.call(null,out);var state_16923__$1 = state_16923;var statearr_16930_16959 = state_16923__$1;(statearr_16930_16959[(2)] = inst_16912);
(statearr_16930_16959[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (6)))
{var state_16923__$1 = state_16923;var statearr_16931_16960 = state_16923__$1;(statearr_16931_16960[(2)] = null);
(statearr_16931_16960[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (3)))
{var inst_16921 = (state_16923[(2)]);var state_16923__$1 = state_16923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16923__$1,inst_16921);
} else
{if((state_val_16924 === (12)))
{var inst_16909 = (state_16923[(8)]);var inst_16909__$1 = (state_16923[(2)]);var inst_16910 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16909__$1);var state_16923__$1 = (function (){var statearr_16932 = state_16923;(statearr_16932[(8)] = inst_16909__$1);
return statearr_16932;
})();if(cljs.core.truth_(inst_16910))
{var statearr_16933_16961 = state_16923__$1;(statearr_16933_16961[(1)] = (13));
} else
{var statearr_16934_16962 = state_16923__$1;(statearr_16934_16962[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (2)))
{var inst_16886 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16887 = (0);var state_16923__$1 = (function (){var statearr_16935 = state_16923;(statearr_16935[(9)] = inst_16886);
(statearr_16935[(7)] = inst_16887);
return statearr_16935;
})();var statearr_16936_16963 = state_16923__$1;(statearr_16936_16963[(2)] = null);
(statearr_16936_16963[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (11)))
{var inst_16887 = (state_16923[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16923,(10),Object,null,(9));var inst_16896 = chs__$1.call(null,inst_16887);var inst_16897 = done.call(null,inst_16887);var inst_16898 = cljs.core.async.take_BANG_.call(null,inst_16896,inst_16897);var state_16923__$1 = state_16923;var statearr_16937_16964 = state_16923__$1;(statearr_16937_16964[(2)] = inst_16898);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16923__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (9)))
{var inst_16887 = (state_16923[(7)]);var inst_16900 = (state_16923[(2)]);var inst_16901 = (inst_16887 + (1));var inst_16887__$1 = inst_16901;var state_16923__$1 = (function (){var statearr_16938 = state_16923;(statearr_16938[(10)] = inst_16900);
(statearr_16938[(7)] = inst_16887__$1);
return statearr_16938;
})();var statearr_16939_16965 = state_16923__$1;(statearr_16939_16965[(2)] = null);
(statearr_16939_16965[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (5)))
{var inst_16907 = (state_16923[(2)]);var state_16923__$1 = (function (){var statearr_16940 = state_16923;(statearr_16940[(11)] = inst_16907);
return statearr_16940;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16923__$1,(12),dchan);
} else
{if((state_val_16924 === (14)))
{var inst_16909 = (state_16923[(8)]);var inst_16914 = cljs.core.apply.call(null,f,inst_16909);var state_16923__$1 = state_16923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16923__$1,(16),out,inst_16914);
} else
{if((state_val_16924 === (16)))
{var inst_16916 = (state_16923[(2)]);var state_16923__$1 = (function (){var statearr_16941 = state_16923;(statearr_16941[(12)] = inst_16916);
return statearr_16941;
})();var statearr_16942_16966 = state_16923__$1;(statearr_16942_16966[(2)] = null);
(statearr_16942_16966[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (10)))
{var inst_16891 = (state_16923[(2)]);var inst_16892 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16923__$1 = (function (){var statearr_16943 = state_16923;(statearr_16943[(13)] = inst_16891);
return statearr_16943;
})();var statearr_16944_16967 = state_16923__$1;(statearr_16944_16967[(2)] = inst_16892);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16923__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16924 === (8)))
{var inst_16905 = (state_16923[(2)]);var state_16923__$1 = state_16923;var statearr_16945_16968 = state_16923__$1;(statearr_16945_16968[(2)] = inst_16905);
(statearr_16945_16968[(1)] = (5));
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
});})(c__5693__auto___16953,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16953,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16949[(0)] = state_machine__5679__auto__);
(statearr_16949[(1)] = (1));
return statearr_16949;
});
var state_machine__5679__auto____1 = (function (state_16923){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16923);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16950){if((e16950 instanceof Object))
{var ex__5682__auto__ = e16950;var statearr_16951_16969 = state_16923;(statearr_16951_16969[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16923);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16970 = state_16923;
state_16923 = G__16970;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16923){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16953,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16952 = f__5694__auto__.call(null);(statearr_16952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16953);
return statearr_16952;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16953,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17078 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17078,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17078,out){
return (function (state_17054){var state_val_17055 = (state_17054[(1)]);if((state_val_17055 === (7)))
{var inst_17034 = (state_17054[(7)]);var inst_17033 = (state_17054[(8)]);var inst_17033__$1 = (state_17054[(2)]);var inst_17034__$1 = cljs.core.nth.call(null,inst_17033__$1,(0),null);var inst_17035 = cljs.core.nth.call(null,inst_17033__$1,(1),null);var inst_17036 = (inst_17034__$1 == null);var state_17054__$1 = (function (){var statearr_17056 = state_17054;(statearr_17056[(7)] = inst_17034__$1);
(statearr_17056[(9)] = inst_17035);
(statearr_17056[(8)] = inst_17033__$1);
return statearr_17056;
})();if(cljs.core.truth_(inst_17036))
{var statearr_17057_17079 = state_17054__$1;(statearr_17057_17079[(1)] = (8));
} else
{var statearr_17058_17080 = state_17054__$1;(statearr_17058_17080[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17055 === (1)))
{var inst_17025 = cljs.core.vec.call(null,chs);var inst_17026 = inst_17025;var state_17054__$1 = (function (){var statearr_17059 = state_17054;(statearr_17059[(10)] = inst_17026);
return statearr_17059;
})();var statearr_17060_17081 = state_17054__$1;(statearr_17060_17081[(2)] = null);
(statearr_17060_17081[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17055 === (4)))
{var inst_17026 = (state_17054[(10)]);var state_17054__$1 = state_17054;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17054__$1,(7),inst_17026);
} else
{if((state_val_17055 === (6)))
{var inst_17050 = (state_17054[(2)]);var state_17054__$1 = state_17054;var statearr_17061_17082 = state_17054__$1;(statearr_17061_17082[(2)] = inst_17050);
(statearr_17061_17082[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17055 === (3)))
{var inst_17052 = (state_17054[(2)]);var state_17054__$1 = state_17054;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17054__$1,inst_17052);
} else
{if((state_val_17055 === (2)))
{var inst_17026 = (state_17054[(10)]);var inst_17028 = cljs.core.count.call(null,inst_17026);var inst_17029 = (inst_17028 > (0));var state_17054__$1 = state_17054;if(cljs.core.truth_(inst_17029))
{var statearr_17063_17083 = state_17054__$1;(statearr_17063_17083[(1)] = (4));
} else
{var statearr_17064_17084 = state_17054__$1;(statearr_17064_17084[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17055 === (11)))
{var inst_17026 = (state_17054[(10)]);var inst_17043 = (state_17054[(2)]);var tmp17062 = inst_17026;var inst_17026__$1 = tmp17062;var state_17054__$1 = (function (){var statearr_17065 = state_17054;(statearr_17065[(10)] = inst_17026__$1);
(statearr_17065[(11)] = inst_17043);
return statearr_17065;
})();var statearr_17066_17085 = state_17054__$1;(statearr_17066_17085[(2)] = null);
(statearr_17066_17085[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17055 === (9)))
{var inst_17034 = (state_17054[(7)]);var state_17054__$1 = state_17054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17054__$1,(11),out,inst_17034);
} else
{if((state_val_17055 === (5)))
{var inst_17048 = cljs.core.async.close_BANG_.call(null,out);var state_17054__$1 = state_17054;var statearr_17067_17086 = state_17054__$1;(statearr_17067_17086[(2)] = inst_17048);
(statearr_17067_17086[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17055 === (10)))
{var inst_17046 = (state_17054[(2)]);var state_17054__$1 = state_17054;var statearr_17068_17087 = state_17054__$1;(statearr_17068_17087[(2)] = inst_17046);
(statearr_17068_17087[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17055 === (8)))
{var inst_17026 = (state_17054[(10)]);var inst_17034 = (state_17054[(7)]);var inst_17035 = (state_17054[(9)]);var inst_17033 = (state_17054[(8)]);var inst_17038 = (function (){var c = inst_17035;var v = inst_17034;var vec__17031 = inst_17033;var cs = inst_17026;return ((function (c,v,vec__17031,cs,inst_17026,inst_17034,inst_17035,inst_17033,state_val_17055,c__5693__auto___17078,out){
return (function (p1__16971_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16971_SHARP_);
});
;})(c,v,vec__17031,cs,inst_17026,inst_17034,inst_17035,inst_17033,state_val_17055,c__5693__auto___17078,out))
})();var inst_17039 = cljs.core.filterv.call(null,inst_17038,inst_17026);var inst_17026__$1 = inst_17039;var state_17054__$1 = (function (){var statearr_17069 = state_17054;(statearr_17069[(10)] = inst_17026__$1);
return statearr_17069;
})();var statearr_17070_17088 = state_17054__$1;(statearr_17070_17088[(2)] = null);
(statearr_17070_17088[(1)] = (2));
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
});})(c__5693__auto___17078,out))
;return ((function (switch__5678__auto__,c__5693__auto___17078,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17074 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17074[(0)] = state_machine__5679__auto__);
(statearr_17074[(1)] = (1));
return statearr_17074;
});
var state_machine__5679__auto____1 = (function (state_17054){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17054);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17075){if((e17075 instanceof Object))
{var ex__5682__auto__ = e17075;var statearr_17076_17089 = state_17054;(statearr_17076_17089[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17054);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17090 = state_17054;
state_17054 = G__17090;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17054){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17078,out))
})();var state__5695__auto__ = (function (){var statearr_17077 = f__5694__auto__.call(null);(statearr_17077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17078);
return statearr_17077;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17078,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17183 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17183,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17183,out){
return (function (state_17160){var state_val_17161 = (state_17160[(1)]);if((state_val_17161 === (7)))
{var inst_17142 = (state_17160[(7)]);var inst_17142__$1 = (state_17160[(2)]);var inst_17143 = (inst_17142__$1 == null);var inst_17144 = cljs.core.not.call(null,inst_17143);var state_17160__$1 = (function (){var statearr_17162 = state_17160;(statearr_17162[(7)] = inst_17142__$1);
return statearr_17162;
})();if(inst_17144)
{var statearr_17163_17184 = state_17160__$1;(statearr_17163_17184[(1)] = (8));
} else
{var statearr_17164_17185 = state_17160__$1;(statearr_17164_17185[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17161 === (1)))
{var inst_17137 = (0);var state_17160__$1 = (function (){var statearr_17165 = state_17160;(statearr_17165[(8)] = inst_17137);
return statearr_17165;
})();var statearr_17166_17186 = state_17160__$1;(statearr_17166_17186[(2)] = null);
(statearr_17166_17186[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17161 === (4)))
{var state_17160__$1 = state_17160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17160__$1,(7),ch);
} else
{if((state_val_17161 === (6)))
{var inst_17155 = (state_17160[(2)]);var state_17160__$1 = state_17160;var statearr_17167_17187 = state_17160__$1;(statearr_17167_17187[(2)] = inst_17155);
(statearr_17167_17187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17161 === (3)))
{var inst_17157 = (state_17160[(2)]);var inst_17158 = cljs.core.async.close_BANG_.call(null,out);var state_17160__$1 = (function (){var statearr_17168 = state_17160;(statearr_17168[(9)] = inst_17157);
return statearr_17168;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17160__$1,inst_17158);
} else
{if((state_val_17161 === (2)))
{var inst_17137 = (state_17160[(8)]);var inst_17139 = (inst_17137 < n);var state_17160__$1 = state_17160;if(cljs.core.truth_(inst_17139))
{var statearr_17169_17188 = state_17160__$1;(statearr_17169_17188[(1)] = (4));
} else
{var statearr_17170_17189 = state_17160__$1;(statearr_17170_17189[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17161 === (11)))
{var inst_17137 = (state_17160[(8)]);var inst_17147 = (state_17160[(2)]);var inst_17148 = (inst_17137 + (1));var inst_17137__$1 = inst_17148;var state_17160__$1 = (function (){var statearr_17171 = state_17160;(statearr_17171[(10)] = inst_17147);
(statearr_17171[(8)] = inst_17137__$1);
return statearr_17171;
})();var statearr_17172_17190 = state_17160__$1;(statearr_17172_17190[(2)] = null);
(statearr_17172_17190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17161 === (9)))
{var state_17160__$1 = state_17160;var statearr_17173_17191 = state_17160__$1;(statearr_17173_17191[(2)] = null);
(statearr_17173_17191[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17161 === (5)))
{var state_17160__$1 = state_17160;var statearr_17174_17192 = state_17160__$1;(statearr_17174_17192[(2)] = null);
(statearr_17174_17192[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17161 === (10)))
{var inst_17152 = (state_17160[(2)]);var state_17160__$1 = state_17160;var statearr_17175_17193 = state_17160__$1;(statearr_17175_17193[(2)] = inst_17152);
(statearr_17175_17193[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17161 === (8)))
{var inst_17142 = (state_17160[(7)]);var state_17160__$1 = state_17160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17160__$1,(11),out,inst_17142);
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
});})(c__5693__auto___17183,out))
;return ((function (switch__5678__auto__,c__5693__auto___17183,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17179 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17179[(0)] = state_machine__5679__auto__);
(statearr_17179[(1)] = (1));
return statearr_17179;
});
var state_machine__5679__auto____1 = (function (state_17160){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17160);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17180){if((e17180 instanceof Object))
{var ex__5682__auto__ = e17180;var statearr_17181_17194 = state_17160;(statearr_17181_17194[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17160);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17195 = state_17160;
state_17160 = G__17195;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17160){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17183,out))
})();var state__5695__auto__ = (function (){var statearr_17182 = f__5694__auto__.call(null);(statearr_17182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17183);
return statearr_17182;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17183,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17292 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17292,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17292,out){
return (function (state_17267){var state_val_17268 = (state_17267[(1)]);if((state_val_17268 === (7)))
{var inst_17262 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17269_17293 = state_17267__$1;(statearr_17269_17293[(2)] = inst_17262);
(statearr_17269_17293[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (1)))
{var inst_17244 = null;var state_17267__$1 = (function (){var statearr_17270 = state_17267;(statearr_17270[(7)] = inst_17244);
return statearr_17270;
})();var statearr_17271_17294 = state_17267__$1;(statearr_17271_17294[(2)] = null);
(statearr_17271_17294[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (4)))
{var inst_17247 = (state_17267[(8)]);var inst_17247__$1 = (state_17267[(2)]);var inst_17248 = (inst_17247__$1 == null);var inst_17249 = cljs.core.not.call(null,inst_17248);var state_17267__$1 = (function (){var statearr_17272 = state_17267;(statearr_17272[(8)] = inst_17247__$1);
return statearr_17272;
})();if(inst_17249)
{var statearr_17273_17295 = state_17267__$1;(statearr_17273_17295[(1)] = (5));
} else
{var statearr_17274_17296 = state_17267__$1;(statearr_17274_17296[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (6)))
{var state_17267__$1 = state_17267;var statearr_17275_17297 = state_17267__$1;(statearr_17275_17297[(2)] = null);
(statearr_17275_17297[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (3)))
{var inst_17264 = (state_17267[(2)]);var inst_17265 = cljs.core.async.close_BANG_.call(null,out);var state_17267__$1 = (function (){var statearr_17276 = state_17267;(statearr_17276[(9)] = inst_17264);
return statearr_17276;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17267__$1,inst_17265);
} else
{if((state_val_17268 === (2)))
{var state_17267__$1 = state_17267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17267__$1,(4),ch);
} else
{if((state_val_17268 === (11)))
{var inst_17247 = (state_17267[(8)]);var inst_17256 = (state_17267[(2)]);var inst_17244 = inst_17247;var state_17267__$1 = (function (){var statearr_17277 = state_17267;(statearr_17277[(10)] = inst_17256);
(statearr_17277[(7)] = inst_17244);
return statearr_17277;
})();var statearr_17278_17298 = state_17267__$1;(statearr_17278_17298[(2)] = null);
(statearr_17278_17298[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (9)))
{var inst_17247 = (state_17267[(8)]);var state_17267__$1 = state_17267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17267__$1,(11),out,inst_17247);
} else
{if((state_val_17268 === (5)))
{var inst_17247 = (state_17267[(8)]);var inst_17244 = (state_17267[(7)]);var inst_17251 = cljs.core._EQ_.call(null,inst_17247,inst_17244);var state_17267__$1 = state_17267;if(inst_17251)
{var statearr_17280_17299 = state_17267__$1;(statearr_17280_17299[(1)] = (8));
} else
{var statearr_17281_17300 = state_17267__$1;(statearr_17281_17300[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (10)))
{var inst_17259 = (state_17267[(2)]);var state_17267__$1 = state_17267;var statearr_17282_17301 = state_17267__$1;(statearr_17282_17301[(2)] = inst_17259);
(statearr_17282_17301[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17268 === (8)))
{var inst_17244 = (state_17267[(7)]);var tmp17279 = inst_17244;var inst_17244__$1 = tmp17279;var state_17267__$1 = (function (){var statearr_17283 = state_17267;(statearr_17283[(7)] = inst_17244__$1);
return statearr_17283;
})();var statearr_17284_17302 = state_17267__$1;(statearr_17284_17302[(2)] = null);
(statearr_17284_17302[(1)] = (2));
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
});})(c__5693__auto___17292,out))
;return ((function (switch__5678__auto__,c__5693__auto___17292,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17288 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17288[(0)] = state_machine__5679__auto__);
(statearr_17288[(1)] = (1));
return statearr_17288;
});
var state_machine__5679__auto____1 = (function (state_17267){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17267);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17289){if((e17289 instanceof Object))
{var ex__5682__auto__ = e17289;var statearr_17290_17303 = state_17267;(statearr_17290_17303[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17267);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17304 = state_17267;
state_17267 = G__17304;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17267){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17292,out))
})();var state__5695__auto__ = (function (){var statearr_17291 = f__5694__auto__.call(null);(statearr_17291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17292);
return statearr_17291;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17292,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17439 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17439,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17439,out){
return (function (state_17409){var state_val_17410 = (state_17409[(1)]);if((state_val_17410 === (7)))
{var inst_17405 = (state_17409[(2)]);var state_17409__$1 = state_17409;var statearr_17411_17440 = state_17409__$1;(statearr_17411_17440[(2)] = inst_17405);
(statearr_17411_17440[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (1)))
{var inst_17372 = (new Array(n));var inst_17373 = inst_17372;var inst_17374 = (0);var state_17409__$1 = (function (){var statearr_17412 = state_17409;(statearr_17412[(7)] = inst_17374);
(statearr_17412[(8)] = inst_17373);
return statearr_17412;
})();var statearr_17413_17441 = state_17409__$1;(statearr_17413_17441[(2)] = null);
(statearr_17413_17441[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (4)))
{var inst_17377 = (state_17409[(9)]);var inst_17377__$1 = (state_17409[(2)]);var inst_17378 = (inst_17377__$1 == null);var inst_17379 = cljs.core.not.call(null,inst_17378);var state_17409__$1 = (function (){var statearr_17414 = state_17409;(statearr_17414[(9)] = inst_17377__$1);
return statearr_17414;
})();if(inst_17379)
{var statearr_17415_17442 = state_17409__$1;(statearr_17415_17442[(1)] = (5));
} else
{var statearr_17416_17443 = state_17409__$1;(statearr_17416_17443[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (15)))
{var inst_17399 = (state_17409[(2)]);var state_17409__$1 = state_17409;var statearr_17417_17444 = state_17409__$1;(statearr_17417_17444[(2)] = inst_17399);
(statearr_17417_17444[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (13)))
{var state_17409__$1 = state_17409;var statearr_17418_17445 = state_17409__$1;(statearr_17418_17445[(2)] = null);
(statearr_17418_17445[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (6)))
{var inst_17374 = (state_17409[(7)]);var inst_17395 = (inst_17374 > (0));var state_17409__$1 = state_17409;if(cljs.core.truth_(inst_17395))
{var statearr_17419_17446 = state_17409__$1;(statearr_17419_17446[(1)] = (12));
} else
{var statearr_17420_17447 = state_17409__$1;(statearr_17420_17447[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (3)))
{var inst_17407 = (state_17409[(2)]);var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17409__$1,inst_17407);
} else
{if((state_val_17410 === (12)))
{var inst_17373 = (state_17409[(8)]);var inst_17397 = cljs.core.vec.call(null,inst_17373);var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17409__$1,(15),out,inst_17397);
} else
{if((state_val_17410 === (2)))
{var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17409__$1,(4),ch);
} else
{if((state_val_17410 === (11)))
{var inst_17389 = (state_17409[(2)]);var inst_17390 = (new Array(n));var inst_17373 = inst_17390;var inst_17374 = (0);var state_17409__$1 = (function (){var statearr_17421 = state_17409;(statearr_17421[(7)] = inst_17374);
(statearr_17421[(8)] = inst_17373);
(statearr_17421[(10)] = inst_17389);
return statearr_17421;
})();var statearr_17422_17448 = state_17409__$1;(statearr_17422_17448[(2)] = null);
(statearr_17422_17448[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (9)))
{var inst_17373 = (state_17409[(8)]);var inst_17387 = cljs.core.vec.call(null,inst_17373);var state_17409__$1 = state_17409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17409__$1,(11),out,inst_17387);
} else
{if((state_val_17410 === (5)))
{var inst_17374 = (state_17409[(7)]);var inst_17377 = (state_17409[(9)]);var inst_17373 = (state_17409[(8)]);var inst_17382 = (state_17409[(11)]);var inst_17381 = (inst_17373[inst_17374] = inst_17377);var inst_17382__$1 = (inst_17374 + (1));var inst_17383 = (inst_17382__$1 < n);var state_17409__$1 = (function (){var statearr_17423 = state_17409;(statearr_17423[(12)] = inst_17381);
(statearr_17423[(11)] = inst_17382__$1);
return statearr_17423;
})();if(cljs.core.truth_(inst_17383))
{var statearr_17424_17449 = state_17409__$1;(statearr_17424_17449[(1)] = (8));
} else
{var statearr_17425_17450 = state_17409__$1;(statearr_17425_17450[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (14)))
{var inst_17402 = (state_17409[(2)]);var inst_17403 = cljs.core.async.close_BANG_.call(null,out);var state_17409__$1 = (function (){var statearr_17427 = state_17409;(statearr_17427[(13)] = inst_17402);
return statearr_17427;
})();var statearr_17428_17451 = state_17409__$1;(statearr_17428_17451[(2)] = inst_17403);
(statearr_17428_17451[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (10)))
{var inst_17393 = (state_17409[(2)]);var state_17409__$1 = state_17409;var statearr_17429_17452 = state_17409__$1;(statearr_17429_17452[(2)] = inst_17393);
(statearr_17429_17452[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17410 === (8)))
{var inst_17373 = (state_17409[(8)]);var inst_17382 = (state_17409[(11)]);var tmp17426 = inst_17373;var inst_17373__$1 = tmp17426;var inst_17374 = inst_17382;var state_17409__$1 = (function (){var statearr_17430 = state_17409;(statearr_17430[(7)] = inst_17374);
(statearr_17430[(8)] = inst_17373__$1);
return statearr_17430;
})();var statearr_17431_17453 = state_17409__$1;(statearr_17431_17453[(2)] = null);
(statearr_17431_17453[(1)] = (2));
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
});})(c__5693__auto___17439,out))
;return ((function (switch__5678__auto__,c__5693__auto___17439,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17435[(0)] = state_machine__5679__auto__);
(statearr_17435[(1)] = (1));
return statearr_17435;
});
var state_machine__5679__auto____1 = (function (state_17409){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17409);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17436){if((e17436 instanceof Object))
{var ex__5682__auto__ = e17436;var statearr_17437_17454 = state_17409;(statearr_17437_17454[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17409);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17455 = state_17409;
state_17409 = G__17455;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17409){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17439,out))
})();var state__5695__auto__ = (function (){var statearr_17438 = f__5694__auto__.call(null);(statearr_17438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17439);
return statearr_17438;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17439,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17598 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17598,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17598,out){
return (function (state_17568){var state_val_17569 = (state_17568[(1)]);if((state_val_17569 === (7)))
{var inst_17564 = (state_17568[(2)]);var state_17568__$1 = state_17568;var statearr_17570_17599 = state_17568__$1;(statearr_17570_17599[(2)] = inst_17564);
(statearr_17570_17599[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (1)))
{var inst_17527 = [];var inst_17528 = inst_17527;var inst_17529 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17568__$1 = (function (){var statearr_17571 = state_17568;(statearr_17571[(7)] = inst_17529);
(statearr_17571[(8)] = inst_17528);
return statearr_17571;
})();var statearr_17572_17600 = state_17568__$1;(statearr_17572_17600[(2)] = null);
(statearr_17572_17600[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (4)))
{var inst_17532 = (state_17568[(9)]);var inst_17532__$1 = (state_17568[(2)]);var inst_17533 = (inst_17532__$1 == null);var inst_17534 = cljs.core.not.call(null,inst_17533);var state_17568__$1 = (function (){var statearr_17573 = state_17568;(statearr_17573[(9)] = inst_17532__$1);
return statearr_17573;
})();if(inst_17534)
{var statearr_17574_17601 = state_17568__$1;(statearr_17574_17601[(1)] = (5));
} else
{var statearr_17575_17602 = state_17568__$1;(statearr_17575_17602[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (15)))
{var inst_17558 = (state_17568[(2)]);var state_17568__$1 = state_17568;var statearr_17576_17603 = state_17568__$1;(statearr_17576_17603[(2)] = inst_17558);
(statearr_17576_17603[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (13)))
{var state_17568__$1 = state_17568;var statearr_17577_17604 = state_17568__$1;(statearr_17577_17604[(2)] = null);
(statearr_17577_17604[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (6)))
{var inst_17528 = (state_17568[(8)]);var inst_17553 = inst_17528.length;var inst_17554 = (inst_17553 > (0));var state_17568__$1 = state_17568;if(cljs.core.truth_(inst_17554))
{var statearr_17578_17605 = state_17568__$1;(statearr_17578_17605[(1)] = (12));
} else
{var statearr_17579_17606 = state_17568__$1;(statearr_17579_17606[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (3)))
{var inst_17566 = (state_17568[(2)]);var state_17568__$1 = state_17568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17568__$1,inst_17566);
} else
{if((state_val_17569 === (12)))
{var inst_17528 = (state_17568[(8)]);var inst_17556 = cljs.core.vec.call(null,inst_17528);var state_17568__$1 = state_17568;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17568__$1,(15),out,inst_17556);
} else
{if((state_val_17569 === (2)))
{var state_17568__$1 = state_17568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17568__$1,(4),ch);
} else
{if((state_val_17569 === (11)))
{var inst_17532 = (state_17568[(9)]);var inst_17536 = (state_17568[(10)]);var inst_17546 = (state_17568[(2)]);var inst_17547 = [];var inst_17548 = inst_17547.push(inst_17532);var inst_17528 = inst_17547;var inst_17529 = inst_17536;var state_17568__$1 = (function (){var statearr_17580 = state_17568;(statearr_17580[(7)] = inst_17529);
(statearr_17580[(11)] = inst_17546);
(statearr_17580[(8)] = inst_17528);
(statearr_17580[(12)] = inst_17548);
return statearr_17580;
})();var statearr_17581_17607 = state_17568__$1;(statearr_17581_17607[(2)] = null);
(statearr_17581_17607[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (9)))
{var inst_17528 = (state_17568[(8)]);var inst_17544 = cljs.core.vec.call(null,inst_17528);var state_17568__$1 = state_17568;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17568__$1,(11),out,inst_17544);
} else
{if((state_val_17569 === (5)))
{var inst_17529 = (state_17568[(7)]);var inst_17532 = (state_17568[(9)]);var inst_17536 = (state_17568[(10)]);var inst_17536__$1 = f.call(null,inst_17532);var inst_17537 = cljs.core._EQ_.call(null,inst_17536__$1,inst_17529);var inst_17538 = cljs.core.keyword_identical_QMARK_.call(null,inst_17529,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17539 = (inst_17537) || (inst_17538);var state_17568__$1 = (function (){var statearr_17582 = state_17568;(statearr_17582[(10)] = inst_17536__$1);
return statearr_17582;
})();if(cljs.core.truth_(inst_17539))
{var statearr_17583_17608 = state_17568__$1;(statearr_17583_17608[(1)] = (8));
} else
{var statearr_17584_17609 = state_17568__$1;(statearr_17584_17609[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (14)))
{var inst_17561 = (state_17568[(2)]);var inst_17562 = cljs.core.async.close_BANG_.call(null,out);var state_17568__$1 = (function (){var statearr_17586 = state_17568;(statearr_17586[(13)] = inst_17561);
return statearr_17586;
})();var statearr_17587_17610 = state_17568__$1;(statearr_17587_17610[(2)] = inst_17562);
(statearr_17587_17610[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (10)))
{var inst_17551 = (state_17568[(2)]);var state_17568__$1 = state_17568;var statearr_17588_17611 = state_17568__$1;(statearr_17588_17611[(2)] = inst_17551);
(statearr_17588_17611[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17569 === (8)))
{var inst_17532 = (state_17568[(9)]);var inst_17528 = (state_17568[(8)]);var inst_17536 = (state_17568[(10)]);var inst_17541 = inst_17528.push(inst_17532);var tmp17585 = inst_17528;var inst_17528__$1 = tmp17585;var inst_17529 = inst_17536;var state_17568__$1 = (function (){var statearr_17589 = state_17568;(statearr_17589[(7)] = inst_17529);
(statearr_17589[(8)] = inst_17528__$1);
(statearr_17589[(14)] = inst_17541);
return statearr_17589;
})();var statearr_17590_17612 = state_17568__$1;(statearr_17590_17612[(2)] = null);
(statearr_17590_17612[(1)] = (2));
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
});})(c__5693__auto___17598,out))
;return ((function (switch__5678__auto__,c__5693__auto___17598,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17594[(0)] = state_machine__5679__auto__);
(statearr_17594[(1)] = (1));
return statearr_17594;
});
var state_machine__5679__auto____1 = (function (state_17568){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17568);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17595){if((e17595 instanceof Object))
{var ex__5682__auto__ = e17595;var statearr_17596_17613 = state_17568;(statearr_17596_17613[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17568);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17614 = state_17568;
state_17568 = G__17614;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17568){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17598,out))
})();var state__5695__auto__ = (function (){var statearr_17597 = f__5694__auto__.call(null);(statearr_17597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17598);
return statearr_17597;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17598,out))
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
