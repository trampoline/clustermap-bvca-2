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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15316 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15316 = (function (f,fn_handler,meta15317){
this.f = f;
this.fn_handler = fn_handler;
this.meta15317 = meta15317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15316.cljs$lang$type = true;
cljs.core.async.t15316.cljs$lang$ctorStr = "cljs.core.async/t15316";
cljs.core.async.t15316.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15316");
});
cljs.core.async.t15316.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15316.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15316.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15318){var self__ = this;
var _15318__$1 = this;return self__.meta15317;
});
cljs.core.async.t15316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15318,meta15317__$1){var self__ = this;
var _15318__$1 = this;return (new cljs.core.async.t15316(self__.f,self__.fn_handler,meta15317__$1));
});
cljs.core.async.__GT_t15316 = (function __GT_t15316(f__$1,fn_handler__$1,meta15317){return (new cljs.core.async.t15316(f__$1,fn_handler__$1,meta15317));
});
}
return (new cljs.core.async.t15316(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15320 = buff;if(G__15320)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__15320.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15320.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15320);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15320);
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
{var val_15321 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15321);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_15321,ret){
return (function (){return fn1.call(null,val_15321);
});})(val_15321,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___15322 = n;var x_15323 = (0);while(true){
if((x_15323 < n__4399__auto___15322))
{(a[x_15323] = (0));
{
var G__15324 = (x_15323 + (1));
x_15323 = G__15324;
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
var G__15325 = (i + (1));
i = G__15325;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15329 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15329 = (function (flag,alt_flag,meta15330){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15330 = meta15330;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15329.cljs$lang$type = true;
cljs.core.async.t15329.cljs$lang$ctorStr = "cljs.core.async/t15329";
cljs.core.async.t15329.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15329");
});})(flag))
;
cljs.core.async.t15329.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15329.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t15329.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t15329.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_15331){var self__ = this;
var _15331__$1 = this;return self__.meta15330;
});})(flag))
;
cljs.core.async.t15329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_15331,meta15330__$1){var self__ = this;
var _15331__$1 = this;return (new cljs.core.async.t15329(self__.flag,self__.alt_flag,meta15330__$1));
});})(flag))
;
cljs.core.async.__GT_t15329 = ((function (flag){
return (function __GT_t15329(flag__$1,alt_flag__$1,meta15330){return (new cljs.core.async.t15329(flag__$1,alt_flag__$1,meta15330));
});})(flag))
;
}
return (new cljs.core.async.t15329(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15335 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15335 = (function (cb,flag,alt_handler,meta15336){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15336 = meta15336;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15335.cljs$lang$type = true;
cljs.core.async.t15335.cljs$lang$ctorStr = "cljs.core.async/t15335";
cljs.core.async.t15335.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15335");
});
cljs.core.async.t15335.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15335.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15335.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15335.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15337){var self__ = this;
var _15337__$1 = this;return self__.meta15336;
});
cljs.core.async.t15335.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15337,meta15336__$1){var self__ = this;
var _15337__$1 = this;return (new cljs.core.async.t15335(self__.cb,self__.flag,self__.alt_handler,meta15336__$1));
});
cljs.core.async.__GT_t15335 = (function __GT_t15335(cb__$1,flag__$1,alt_handler__$1,meta15336){return (new cljs.core.async.t15335(cb__$1,flag__$1,alt_handler__$1,meta15336));
});
}
return (new cljs.core.async.t15335(cb,flag,alt_handler,null));
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
return (function (p1__15338_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15338_SHARP_,port], null));
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
var G__15339 = (i + (1));
i = G__15339;
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
var alts_BANG___delegate = function (ports,p__15340){var map__15342 = p__15340;var map__15342__$1 = ((cljs.core.seq_QMARK_.call(null,map__15342))?cljs.core.apply.call(null,cljs.core.hash_map,map__15342):map__15342);var opts = map__15342__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15340 = null;if (arguments.length > 1) {
  p__15340 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15340);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15343){
var ports = cljs.core.first(arglist__15343);
var p__15340 = cljs.core.rest(arglist__15343);
return alts_BANG___delegate(ports,p__15340);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15351 = (function (ch,f,map_LT_,meta15352){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15352 = meta15352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15351.cljs$lang$type = true;
cljs.core.async.t15351.cljs$lang$ctorStr = "cljs.core.async/t15351";
cljs.core.async.t15351.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15351");
});
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15354 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15354 = (function (fn1,_,meta15352,ch,f,map_LT_,meta15355){
this.fn1 = fn1;
this._ = _;
this.meta15352 = meta15352;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15355 = meta15355;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15354.cljs$lang$type = true;
cljs.core.async.t15354.cljs$lang$ctorStr = "cljs.core.async/t15354";
cljs.core.async.t15354.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15354");
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15354.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__15344_SHARP_){return f1.call(null,(((p1__15344_SHARP_ == null))?null:self__.f.call(null,p1__15344_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15356){var self__ = this;
var _15356__$1 = this;return self__.meta15355;
});})(___$1))
;
cljs.core.async.t15354.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15356,meta15355__$1){var self__ = this;
var _15356__$1 = this;return (new cljs.core.async.t15354(self__.fn1,self__._,self__.meta15352,self__.ch,self__.f,self__.map_LT_,meta15355__$1));
});})(___$1))
;
cljs.core.async.__GT_t15354 = ((function (___$1){
return (function __GT_t15354(fn1__$1,___$2,meta15352__$1,ch__$2,f__$2,map_LT___$2,meta15355){return (new cljs.core.async.t15354(fn1__$1,___$2,meta15352__$1,ch__$2,f__$2,map_LT___$2,meta15355));
});})(___$1))
;
}
return (new cljs.core.async.t15354(fn1,___$1,self__.meta15352,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15351.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15353){var self__ = this;
var _15353__$1 = this;return self__.meta15352;
});
cljs.core.async.t15351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15353,meta15352__$1){var self__ = this;
var _15353__$1 = this;return (new cljs.core.async.t15351(self__.ch,self__.f,self__.map_LT_,meta15352__$1));
});
cljs.core.async.__GT_t15351 = (function __GT_t15351(ch__$1,f__$1,map_LT___$1,meta15352){return (new cljs.core.async.t15351(ch__$1,f__$1,map_LT___$1,meta15352));
});
}
return (new cljs.core.async.t15351(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15360 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15360 = (function (ch,f,map_GT_,meta15361){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15361 = meta15361;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15360.cljs$lang$type = true;
cljs.core.async.t15360.cljs$lang$ctorStr = "cljs.core.async/t15360";
cljs.core.async.t15360.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15360");
});
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15360.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15360.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15362){var self__ = this;
var _15362__$1 = this;return self__.meta15361;
});
cljs.core.async.t15360.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15362,meta15361__$1){var self__ = this;
var _15362__$1 = this;return (new cljs.core.async.t15360(self__.ch,self__.f,self__.map_GT_,meta15361__$1));
});
cljs.core.async.__GT_t15360 = (function __GT_t15360(ch__$1,f__$1,map_GT___$1,meta15361){return (new cljs.core.async.t15360(ch__$1,f__$1,map_GT___$1,meta15361));
});
}
return (new cljs.core.async.t15360(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15366 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15366 = (function (ch,p,filter_GT_,meta15367){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15367 = meta15367;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15366.cljs$lang$type = true;
cljs.core.async.t15366.cljs$lang$ctorStr = "cljs.core.async/t15366";
cljs.core.async.t15366.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15366");
});
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15366.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15366.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15368){var self__ = this;
var _15368__$1 = this;return self__.meta15367;
});
cljs.core.async.t15366.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15368,meta15367__$1){var self__ = this;
var _15368__$1 = this;return (new cljs.core.async.t15366(self__.ch,self__.p,self__.filter_GT_,meta15367__$1));
});
cljs.core.async.__GT_t15366 = (function __GT_t15366(ch__$1,p__$1,filter_GT___$1,meta15367){return (new cljs.core.async.t15366(ch__$1,p__$1,filter_GT___$1,meta15367));
});
}
return (new cljs.core.async.t15366(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___15451 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15451,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15451,out){
return (function (state_15430){var state_val_15431 = (state_15430[(1)]);if((state_val_15431 === (7)))
{var inst_15426 = (state_15430[(2)]);var state_15430__$1 = state_15430;var statearr_15432_15452 = state_15430__$1;(statearr_15432_15452[(2)] = inst_15426);
(statearr_15432_15452[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15431 === (1)))
{var state_15430__$1 = state_15430;var statearr_15433_15453 = state_15430__$1;(statearr_15433_15453[(2)] = null);
(statearr_15433_15453[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15431 === (4)))
{var inst_15412 = (state_15430[(7)]);var inst_15412__$1 = (state_15430[(2)]);var inst_15413 = (inst_15412__$1 == null);var state_15430__$1 = (function (){var statearr_15434 = state_15430;(statearr_15434[(7)] = inst_15412__$1);
return statearr_15434;
})();if(cljs.core.truth_(inst_15413))
{var statearr_15435_15454 = state_15430__$1;(statearr_15435_15454[(1)] = (5));
} else
{var statearr_15436_15455 = state_15430__$1;(statearr_15436_15455[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15431 === (6)))
{var inst_15412 = (state_15430[(7)]);var inst_15417 = p.call(null,inst_15412);var state_15430__$1 = state_15430;if(cljs.core.truth_(inst_15417))
{var statearr_15437_15456 = state_15430__$1;(statearr_15437_15456[(1)] = (8));
} else
{var statearr_15438_15457 = state_15430__$1;(statearr_15438_15457[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15431 === (3)))
{var inst_15428 = (state_15430[(2)]);var state_15430__$1 = state_15430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15430__$1,inst_15428);
} else
{if((state_val_15431 === (2)))
{var state_15430__$1 = state_15430;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15430__$1,(4),ch);
} else
{if((state_val_15431 === (11)))
{var inst_15420 = (state_15430[(2)]);var state_15430__$1 = state_15430;var statearr_15439_15458 = state_15430__$1;(statearr_15439_15458[(2)] = inst_15420);
(statearr_15439_15458[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15431 === (9)))
{var state_15430__$1 = state_15430;var statearr_15440_15459 = state_15430__$1;(statearr_15440_15459[(2)] = null);
(statearr_15440_15459[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15431 === (5)))
{var inst_15415 = cljs.core.async.close_BANG_.call(null,out);var state_15430__$1 = state_15430;var statearr_15441_15460 = state_15430__$1;(statearr_15441_15460[(2)] = inst_15415);
(statearr_15441_15460[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15431 === (10)))
{var inst_15423 = (state_15430[(2)]);var state_15430__$1 = (function (){var statearr_15442 = state_15430;(statearr_15442[(8)] = inst_15423);
return statearr_15442;
})();var statearr_15443_15461 = state_15430__$1;(statearr_15443_15461[(2)] = null);
(statearr_15443_15461[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15431 === (8)))
{var inst_15412 = (state_15430[(7)]);var state_15430__$1 = state_15430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15430__$1,(11),out,inst_15412);
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
});})(c__5693__auto___15451,out))
;return ((function (switch__5678__auto__,c__5693__auto___15451,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15447 = [null,null,null,null,null,null,null,null,null];(statearr_15447[(0)] = state_machine__5679__auto__);
(statearr_15447[(1)] = (1));
return statearr_15447;
});
var state_machine__5679__auto____1 = (function (state_15430){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15448){if((e15448 instanceof Object))
{var ex__5682__auto__ = e15448;var statearr_15449_15462 = state_15430;(statearr_15449_15462[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15448;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15463 = state_15430;
state_15430 = G__15463;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15430){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15451,out))
})();var state__5695__auto__ = (function (){var statearr_15450 = f__5694__auto__.call(null);(statearr_15450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15451);
return statearr_15450;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15451,out))
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
return (function (state_15615){var state_val_15616 = (state_15615[(1)]);if((state_val_15616 === (7)))
{var inst_15611 = (state_15615[(2)]);var state_15615__$1 = state_15615;var statearr_15617_15654 = state_15615__$1;(statearr_15617_15654[(2)] = inst_15611);
(statearr_15617_15654[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (20)))
{var inst_15586 = (state_15615[(7)]);var inst_15597 = (state_15615[(2)]);var inst_15598 = cljs.core.next.call(null,inst_15586);var inst_15572 = inst_15598;var inst_15573 = null;var inst_15574 = (0);var inst_15575 = (0);var state_15615__$1 = (function (){var statearr_15618 = state_15615;(statearr_15618[(8)] = inst_15575);
(statearr_15618[(9)] = inst_15572);
(statearr_15618[(10)] = inst_15597);
(statearr_15618[(11)] = inst_15574);
(statearr_15618[(12)] = inst_15573);
return statearr_15618;
})();var statearr_15619_15655 = state_15615__$1;(statearr_15619_15655[(2)] = null);
(statearr_15619_15655[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (1)))
{var state_15615__$1 = state_15615;var statearr_15620_15656 = state_15615__$1;(statearr_15620_15656[(2)] = null);
(statearr_15620_15656[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (4)))
{var inst_15561 = (state_15615[(13)]);var inst_15561__$1 = (state_15615[(2)]);var inst_15562 = (inst_15561__$1 == null);var state_15615__$1 = (function (){var statearr_15624 = state_15615;(statearr_15624[(13)] = inst_15561__$1);
return statearr_15624;
})();if(cljs.core.truth_(inst_15562))
{var statearr_15625_15657 = state_15615__$1;(statearr_15625_15657[(1)] = (5));
} else
{var statearr_15626_15658 = state_15615__$1;(statearr_15626_15658[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (15)))
{var state_15615__$1 = state_15615;var statearr_15627_15659 = state_15615__$1;(statearr_15627_15659[(2)] = null);
(statearr_15627_15659[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (13)))
{var inst_15575 = (state_15615[(8)]);var inst_15572 = (state_15615[(9)]);var inst_15574 = (state_15615[(11)]);var inst_15573 = (state_15615[(12)]);var inst_15582 = (state_15615[(2)]);var inst_15583 = (inst_15575 + (1));var tmp15621 = inst_15572;var tmp15622 = inst_15574;var tmp15623 = inst_15573;var inst_15572__$1 = tmp15621;var inst_15573__$1 = tmp15623;var inst_15574__$1 = tmp15622;var inst_15575__$1 = inst_15583;var state_15615__$1 = (function (){var statearr_15628 = state_15615;(statearr_15628[(8)] = inst_15575__$1);
(statearr_15628[(9)] = inst_15572__$1);
(statearr_15628[(11)] = inst_15574__$1);
(statearr_15628[(12)] = inst_15573__$1);
(statearr_15628[(14)] = inst_15582);
return statearr_15628;
})();var statearr_15629_15660 = state_15615__$1;(statearr_15629_15660[(2)] = null);
(statearr_15629_15660[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (6)))
{var inst_15561 = (state_15615[(13)]);var inst_15566 = f.call(null,inst_15561);var inst_15571 = cljs.core.seq.call(null,inst_15566);var inst_15572 = inst_15571;var inst_15573 = null;var inst_15574 = (0);var inst_15575 = (0);var state_15615__$1 = (function (){var statearr_15630 = state_15615;(statearr_15630[(8)] = inst_15575);
(statearr_15630[(9)] = inst_15572);
(statearr_15630[(11)] = inst_15574);
(statearr_15630[(12)] = inst_15573);
return statearr_15630;
})();var statearr_15631_15661 = state_15615__$1;(statearr_15631_15661[(2)] = null);
(statearr_15631_15661[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (17)))
{var inst_15586 = (state_15615[(7)]);var inst_15590 = cljs.core.chunk_first.call(null,inst_15586);var inst_15591 = cljs.core.chunk_rest.call(null,inst_15586);var inst_15592 = cljs.core.count.call(null,inst_15590);var inst_15572 = inst_15591;var inst_15573 = inst_15590;var inst_15574 = inst_15592;var inst_15575 = (0);var state_15615__$1 = (function (){var statearr_15632 = state_15615;(statearr_15632[(8)] = inst_15575);
(statearr_15632[(9)] = inst_15572);
(statearr_15632[(11)] = inst_15574);
(statearr_15632[(12)] = inst_15573);
return statearr_15632;
})();var statearr_15633_15662 = state_15615__$1;(statearr_15633_15662[(2)] = null);
(statearr_15633_15662[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (3)))
{var inst_15613 = (state_15615[(2)]);var state_15615__$1 = state_15615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15615__$1,inst_15613);
} else
{if((state_val_15616 === (12)))
{var inst_15606 = (state_15615[(2)]);var state_15615__$1 = state_15615;var statearr_15634_15663 = state_15615__$1;(statearr_15634_15663[(2)] = inst_15606);
(statearr_15634_15663[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (2)))
{var state_15615__$1 = state_15615;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15615__$1,(4),in$);
} else
{if((state_val_15616 === (19)))
{var inst_15601 = (state_15615[(2)]);var state_15615__$1 = state_15615;var statearr_15635_15664 = state_15615__$1;(statearr_15635_15664[(2)] = inst_15601);
(statearr_15635_15664[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (11)))
{var inst_15572 = (state_15615[(9)]);var inst_15586 = (state_15615[(7)]);var inst_15586__$1 = cljs.core.seq.call(null,inst_15572);var state_15615__$1 = (function (){var statearr_15636 = state_15615;(statearr_15636[(7)] = inst_15586__$1);
return statearr_15636;
})();if(inst_15586__$1)
{var statearr_15637_15665 = state_15615__$1;(statearr_15637_15665[(1)] = (14));
} else
{var statearr_15638_15666 = state_15615__$1;(statearr_15638_15666[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (9)))
{var inst_15608 = (state_15615[(2)]);var state_15615__$1 = (function (){var statearr_15639 = state_15615;(statearr_15639[(15)] = inst_15608);
return statearr_15639;
})();var statearr_15640_15667 = state_15615__$1;(statearr_15640_15667[(2)] = null);
(statearr_15640_15667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (5)))
{var inst_15564 = cljs.core.async.close_BANG_.call(null,out);var state_15615__$1 = state_15615;var statearr_15641_15668 = state_15615__$1;(statearr_15641_15668[(2)] = inst_15564);
(statearr_15641_15668[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (14)))
{var inst_15586 = (state_15615[(7)]);var inst_15588 = cljs.core.chunked_seq_QMARK_.call(null,inst_15586);var state_15615__$1 = state_15615;if(inst_15588)
{var statearr_15642_15669 = state_15615__$1;(statearr_15642_15669[(1)] = (17));
} else
{var statearr_15643_15670 = state_15615__$1;(statearr_15643_15670[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (16)))
{var inst_15604 = (state_15615[(2)]);var state_15615__$1 = state_15615;var statearr_15644_15671 = state_15615__$1;(statearr_15644_15671[(2)] = inst_15604);
(statearr_15644_15671[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15616 === (10)))
{var inst_15575 = (state_15615[(8)]);var inst_15573 = (state_15615[(12)]);var inst_15580 = cljs.core._nth.call(null,inst_15573,inst_15575);var state_15615__$1 = state_15615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15615__$1,(13),out,inst_15580);
} else
{if((state_val_15616 === (18)))
{var inst_15586 = (state_15615[(7)]);var inst_15595 = cljs.core.first.call(null,inst_15586);var state_15615__$1 = state_15615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15615__$1,(20),out,inst_15595);
} else
{if((state_val_15616 === (8)))
{var inst_15575 = (state_15615[(8)]);var inst_15574 = (state_15615[(11)]);var inst_15577 = (inst_15575 < inst_15574);var inst_15578 = inst_15577;var state_15615__$1 = state_15615;if(cljs.core.truth_(inst_15578))
{var statearr_15645_15672 = state_15615__$1;(statearr_15645_15672[(1)] = (10));
} else
{var statearr_15646_15673 = state_15615__$1;(statearr_15646_15673[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_15650 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15650[(0)] = state_machine__5679__auto__);
(statearr_15650[(1)] = (1));
return statearr_15650;
});
var state_machine__5679__auto____1 = (function (state_15615){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15615);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15651){if((e15651 instanceof Object))
{var ex__5682__auto__ = e15651;var statearr_15652_15674 = state_15615;(statearr_15652_15674[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15615);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15675 = state_15615;
state_15615 = G__15675;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15615){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15653 = f__5694__auto__.call(null);(statearr_15653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15653;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___15756 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15756){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15756){
return (function (state_15735){var state_val_15736 = (state_15735[(1)]);if((state_val_15736 === (7)))
{var inst_15731 = (state_15735[(2)]);var state_15735__$1 = state_15735;var statearr_15737_15757 = state_15735__$1;(statearr_15737_15757[(2)] = inst_15731);
(statearr_15737_15757[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (1)))
{var state_15735__$1 = state_15735;var statearr_15738_15758 = state_15735__$1;(statearr_15738_15758[(2)] = null);
(statearr_15738_15758[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (4)))
{var inst_15718 = (state_15735[(7)]);var inst_15718__$1 = (state_15735[(2)]);var inst_15719 = (inst_15718__$1 == null);var state_15735__$1 = (function (){var statearr_15739 = state_15735;(statearr_15739[(7)] = inst_15718__$1);
return statearr_15739;
})();if(cljs.core.truth_(inst_15719))
{var statearr_15740_15759 = state_15735__$1;(statearr_15740_15759[(1)] = (5));
} else
{var statearr_15741_15760 = state_15735__$1;(statearr_15741_15760[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (6)))
{var inst_15718 = (state_15735[(7)]);var state_15735__$1 = state_15735;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15735__$1,(11),to,inst_15718);
} else
{if((state_val_15736 === (3)))
{var inst_15733 = (state_15735[(2)]);var state_15735__$1 = state_15735;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15735__$1,inst_15733);
} else
{if((state_val_15736 === (2)))
{var state_15735__$1 = state_15735;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15735__$1,(4),from);
} else
{if((state_val_15736 === (11)))
{var inst_15728 = (state_15735[(2)]);var state_15735__$1 = (function (){var statearr_15742 = state_15735;(statearr_15742[(8)] = inst_15728);
return statearr_15742;
})();var statearr_15743_15761 = state_15735__$1;(statearr_15743_15761[(2)] = null);
(statearr_15743_15761[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (9)))
{var state_15735__$1 = state_15735;var statearr_15744_15762 = state_15735__$1;(statearr_15744_15762[(2)] = null);
(statearr_15744_15762[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (5)))
{var state_15735__$1 = state_15735;if(cljs.core.truth_(close_QMARK_))
{var statearr_15745_15763 = state_15735__$1;(statearr_15745_15763[(1)] = (8));
} else
{var statearr_15746_15764 = state_15735__$1;(statearr_15746_15764[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (10)))
{var inst_15725 = (state_15735[(2)]);var state_15735__$1 = state_15735;var statearr_15747_15765 = state_15735__$1;(statearr_15747_15765[(2)] = inst_15725);
(statearr_15747_15765[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15736 === (8)))
{var inst_15722 = cljs.core.async.close_BANG_.call(null,to);var state_15735__$1 = state_15735;var statearr_15748_15766 = state_15735__$1;(statearr_15748_15766[(2)] = inst_15722);
(statearr_15748_15766[(1)] = (10));
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
});})(c__5693__auto___15756))
;return ((function (switch__5678__auto__,c__5693__auto___15756){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15752 = [null,null,null,null,null,null,null,null,null];(statearr_15752[(0)] = state_machine__5679__auto__);
(statearr_15752[(1)] = (1));
return statearr_15752;
});
var state_machine__5679__auto____1 = (function (state_15735){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15735);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15753){if((e15753 instanceof Object))
{var ex__5682__auto__ = e15753;var statearr_15754_15767 = state_15735;(statearr_15754_15767[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15735);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15768 = state_15735;
state_15735 = G__15768;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15735){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15756))
})();var state__5695__auto__ = (function (){var statearr_15755 = f__5694__auto__.call(null);(statearr_15755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15756);
return statearr_15755;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15756))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___15855 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15855,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15855,tc,fc){
return (function (state_15833){var state_val_15834 = (state_15833[(1)]);if((state_val_15834 === (7)))
{var inst_15829 = (state_15833[(2)]);var state_15833__$1 = state_15833;var statearr_15835_15856 = state_15833__$1;(statearr_15835_15856[(2)] = inst_15829);
(statearr_15835_15856[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15834 === (1)))
{var state_15833__$1 = state_15833;var statearr_15836_15857 = state_15833__$1;(statearr_15836_15857[(2)] = null);
(statearr_15836_15857[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15834 === (4)))
{var inst_15814 = (state_15833[(7)]);var inst_15814__$1 = (state_15833[(2)]);var inst_15815 = (inst_15814__$1 == null);var state_15833__$1 = (function (){var statearr_15837 = state_15833;(statearr_15837[(7)] = inst_15814__$1);
return statearr_15837;
})();if(cljs.core.truth_(inst_15815))
{var statearr_15838_15858 = state_15833__$1;(statearr_15838_15858[(1)] = (5));
} else
{var statearr_15839_15859 = state_15833__$1;(statearr_15839_15859[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15834 === (6)))
{var inst_15814 = (state_15833[(7)]);var inst_15820 = p.call(null,inst_15814);var state_15833__$1 = state_15833;if(cljs.core.truth_(inst_15820))
{var statearr_15840_15860 = state_15833__$1;(statearr_15840_15860[(1)] = (9));
} else
{var statearr_15841_15861 = state_15833__$1;(statearr_15841_15861[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15834 === (3)))
{var inst_15831 = (state_15833[(2)]);var state_15833__$1 = state_15833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15833__$1,inst_15831);
} else
{if((state_val_15834 === (2)))
{var state_15833__$1 = state_15833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15833__$1,(4),ch);
} else
{if((state_val_15834 === (11)))
{var inst_15814 = (state_15833[(7)]);var inst_15824 = (state_15833[(2)]);var state_15833__$1 = state_15833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15833__$1,(8),inst_15824,inst_15814);
} else
{if((state_val_15834 === (9)))
{var state_15833__$1 = state_15833;var statearr_15842_15862 = state_15833__$1;(statearr_15842_15862[(2)] = tc);
(statearr_15842_15862[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15834 === (5)))
{var inst_15817 = cljs.core.async.close_BANG_.call(null,tc);var inst_15818 = cljs.core.async.close_BANG_.call(null,fc);var state_15833__$1 = (function (){var statearr_15843 = state_15833;(statearr_15843[(8)] = inst_15817);
return statearr_15843;
})();var statearr_15844_15863 = state_15833__$1;(statearr_15844_15863[(2)] = inst_15818);
(statearr_15844_15863[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15834 === (10)))
{var state_15833__$1 = state_15833;var statearr_15845_15864 = state_15833__$1;(statearr_15845_15864[(2)] = fc);
(statearr_15845_15864[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15834 === (8)))
{var inst_15826 = (state_15833[(2)]);var state_15833__$1 = (function (){var statearr_15846 = state_15833;(statearr_15846[(9)] = inst_15826);
return statearr_15846;
})();var statearr_15847_15865 = state_15833__$1;(statearr_15847_15865[(2)] = null);
(statearr_15847_15865[(1)] = (2));
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
});})(c__5693__auto___15855,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___15855,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15851 = [null,null,null,null,null,null,null,null,null,null];(statearr_15851[(0)] = state_machine__5679__auto__);
(statearr_15851[(1)] = (1));
return statearr_15851;
});
var state_machine__5679__auto____1 = (function (state_15833){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15833);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15852){if((e15852 instanceof Object))
{var ex__5682__auto__ = e15852;var statearr_15853_15866 = state_15833;(statearr_15853_15866[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15833);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15852;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15867 = state_15833;
state_15833 = G__15867;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15833){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15855,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_15854 = f__5694__auto__.call(null);(statearr_15854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15855);
return statearr_15854;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15855,tc,fc))
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
return (function (state_15914){var state_val_15915 = (state_15914[(1)]);if((state_val_15915 === (7)))
{var inst_15910 = (state_15914[(2)]);var state_15914__$1 = state_15914;var statearr_15916_15932 = state_15914__$1;(statearr_15916_15932[(2)] = inst_15910);
(statearr_15916_15932[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15915 === (6)))
{var inst_15900 = (state_15914[(7)]);var inst_15903 = (state_15914[(8)]);var inst_15907 = f.call(null,inst_15900,inst_15903);var inst_15900__$1 = inst_15907;var state_15914__$1 = (function (){var statearr_15917 = state_15914;(statearr_15917[(7)] = inst_15900__$1);
return statearr_15917;
})();var statearr_15918_15933 = state_15914__$1;(statearr_15918_15933[(2)] = null);
(statearr_15918_15933[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15915 === (5)))
{var inst_15900 = (state_15914[(7)]);var state_15914__$1 = state_15914;var statearr_15919_15934 = state_15914__$1;(statearr_15919_15934[(2)] = inst_15900);
(statearr_15919_15934[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15915 === (4)))
{var inst_15903 = (state_15914[(8)]);var inst_15903__$1 = (state_15914[(2)]);var inst_15904 = (inst_15903__$1 == null);var state_15914__$1 = (function (){var statearr_15920 = state_15914;(statearr_15920[(8)] = inst_15903__$1);
return statearr_15920;
})();if(cljs.core.truth_(inst_15904))
{var statearr_15921_15935 = state_15914__$1;(statearr_15921_15935[(1)] = (5));
} else
{var statearr_15922_15936 = state_15914__$1;(statearr_15922_15936[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15915 === (3)))
{var inst_15912 = (state_15914[(2)]);var state_15914__$1 = state_15914;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15914__$1,inst_15912);
} else
{if((state_val_15915 === (2)))
{var state_15914__$1 = state_15914;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15914__$1,(4),ch);
} else
{if((state_val_15915 === (1)))
{var inst_15900 = init;var state_15914__$1 = (function (){var statearr_15923 = state_15914;(statearr_15923[(7)] = inst_15900);
return statearr_15923;
})();var statearr_15924_15937 = state_15914__$1;(statearr_15924_15937[(2)] = null);
(statearr_15924_15937[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_15928 = [null,null,null,null,null,null,null,null,null];(statearr_15928[(0)] = state_machine__5679__auto__);
(statearr_15928[(1)] = (1));
return statearr_15928;
});
var state_machine__5679__auto____1 = (function (state_15914){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15914);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15929){if((e15929 instanceof Object))
{var ex__5682__auto__ = e15929;var statearr_15930_15938 = state_15914;(statearr_15930_15938[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15914);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15929;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15939 = state_15914;
state_15914 = G__15939;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15914){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15931 = f__5694__auto__.call(null);(statearr_15931[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15931;
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
return (function (state_16001){var state_val_16002 = (state_16001[(1)]);if((state_val_16002 === (7)))
{var inst_15982 = (state_16001[(7)]);var inst_15987 = (state_16001[(2)]);var inst_15988 = cljs.core.next.call(null,inst_15982);var inst_15982__$1 = inst_15988;var state_16001__$1 = (function (){var statearr_16003 = state_16001;(statearr_16003[(8)] = inst_15987);
(statearr_16003[(7)] = inst_15982__$1);
return statearr_16003;
})();var statearr_16004_16022 = state_16001__$1;(statearr_16004_16022[(2)] = null);
(statearr_16004_16022[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16002 === (1)))
{var inst_15981 = cljs.core.seq.call(null,coll);var inst_15982 = inst_15981;var state_16001__$1 = (function (){var statearr_16005 = state_16001;(statearr_16005[(7)] = inst_15982);
return statearr_16005;
})();var statearr_16006_16023 = state_16001__$1;(statearr_16006_16023[(2)] = null);
(statearr_16006_16023[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16002 === (4)))
{var inst_15982 = (state_16001[(7)]);var inst_15985 = cljs.core.first.call(null,inst_15982);var state_16001__$1 = state_16001;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16001__$1,(7),ch,inst_15985);
} else
{if((state_val_16002 === (6)))
{var inst_15997 = (state_16001[(2)]);var state_16001__$1 = state_16001;var statearr_16007_16024 = state_16001__$1;(statearr_16007_16024[(2)] = inst_15997);
(statearr_16007_16024[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16002 === (3)))
{var inst_15999 = (state_16001[(2)]);var state_16001__$1 = state_16001;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16001__$1,inst_15999);
} else
{if((state_val_16002 === (2)))
{var inst_15982 = (state_16001[(7)]);var state_16001__$1 = state_16001;if(cljs.core.truth_(inst_15982))
{var statearr_16008_16025 = state_16001__$1;(statearr_16008_16025[(1)] = (4));
} else
{var statearr_16009_16026 = state_16001__$1;(statearr_16009_16026[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16002 === (9)))
{var state_16001__$1 = state_16001;var statearr_16010_16027 = state_16001__$1;(statearr_16010_16027[(2)] = null);
(statearr_16010_16027[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16002 === (5)))
{var state_16001__$1 = state_16001;if(cljs.core.truth_(close_QMARK_))
{var statearr_16011_16028 = state_16001__$1;(statearr_16011_16028[(1)] = (8));
} else
{var statearr_16012_16029 = state_16001__$1;(statearr_16012_16029[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16002 === (10)))
{var inst_15995 = (state_16001[(2)]);var state_16001__$1 = state_16001;var statearr_16013_16030 = state_16001__$1;(statearr_16013_16030[(2)] = inst_15995);
(statearr_16013_16030[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16002 === (8)))
{var inst_15992 = cljs.core.async.close_BANG_.call(null,ch);var state_16001__$1 = state_16001;var statearr_16014_16031 = state_16001__$1;(statearr_16014_16031[(2)] = inst_15992);
(statearr_16014_16031[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_16018 = [null,null,null,null,null,null,null,null,null];(statearr_16018[(0)] = state_machine__5679__auto__);
(statearr_16018[(1)] = (1));
return statearr_16018;
});
var state_machine__5679__auto____1 = (function (state_16001){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16001);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16019){if((e16019 instanceof Object))
{var ex__5682__auto__ = e16019;var statearr_16020_16032 = state_16001;(statearr_16020_16032[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16001);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16033 = state_16001;
state_16001 = G__16033;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16001){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16001);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_16021 = f__5694__auto__.call(null);(statearr_16021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_16021;
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
cljs.core.async.Mux = (function (){var obj16035 = {};return obj16035;
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
cljs.core.async.Mult = (function (){var obj16037 = {};return obj16037;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16261 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16261 = (function (cs,ch,mult,meta16262){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16262 = meta16262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16261.cljs$lang$type = true;
cljs.core.async.t16261.cljs$lang$ctorStr = "cljs.core.async/t16261";
cljs.core.async.t16261.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16261");
});})(cs))
;
cljs.core.async.t16261.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16261.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16261.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16261.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16261.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16261.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16261.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16263){var self__ = this;
var _16263__$1 = this;return self__.meta16262;
});})(cs))
;
cljs.core.async.t16261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16263,meta16262__$1){var self__ = this;
var _16263__$1 = this;return (new cljs.core.async.t16261(self__.cs,self__.ch,self__.mult,meta16262__$1));
});})(cs))
;
cljs.core.async.__GT_t16261 = ((function (cs){
return (function __GT_t16261(cs__$1,ch__$1,mult__$1,meta16262){return (new cljs.core.async.t16261(cs__$1,ch__$1,mult__$1,meta16262));
});})(cs))
;
}
return (new cljs.core.async.t16261(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___16484 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16484,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16484,cs,m,dchan,dctr,done){
return (function (state_16398){var state_val_16399 = (state_16398[(1)]);if((state_val_16399 === (7)))
{var inst_16394 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16400_16485 = state_16398__$1;(statearr_16400_16485[(2)] = inst_16394);
(statearr_16400_16485[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (20)))
{var inst_16295 = (state_16398[(7)]);var inst_16305 = cljs.core.first.call(null,inst_16295);var inst_16306 = cljs.core.nth.call(null,inst_16305,(0),null);var inst_16307 = cljs.core.nth.call(null,inst_16305,(1),null);var state_16398__$1 = (function (){var statearr_16401 = state_16398;(statearr_16401[(8)] = inst_16306);
return statearr_16401;
})();if(cljs.core.truth_(inst_16307))
{var statearr_16402_16486 = state_16398__$1;(statearr_16402_16486[(1)] = (22));
} else
{var statearr_16403_16487 = state_16398__$1;(statearr_16403_16487[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (27)))
{var inst_16337 = (state_16398[(9)]);var inst_16335 = (state_16398[(10)]);var inst_16342 = cljs.core._nth.call(null,inst_16335,inst_16337);var state_16398__$1 = (function (){var statearr_16404 = state_16398;(statearr_16404[(11)] = inst_16342);
return statearr_16404;
})();var statearr_16405_16488 = state_16398__$1;(statearr_16405_16488[(2)] = null);
(statearr_16405_16488[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (1)))
{var state_16398__$1 = state_16398;var statearr_16406_16489 = state_16398__$1;(statearr_16406_16489[(2)] = null);
(statearr_16406_16489[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (24)))
{var inst_16295 = (state_16398[(7)]);var inst_16312 = (state_16398[(2)]);var inst_16313 = cljs.core.next.call(null,inst_16295);var inst_16275 = inst_16313;var inst_16276 = null;var inst_16277 = (0);var inst_16278 = (0);var state_16398__$1 = (function (){var statearr_16407 = state_16398;(statearr_16407[(12)] = inst_16276);
(statearr_16407[(13)] = inst_16312);
(statearr_16407[(14)] = inst_16275);
(statearr_16407[(15)] = inst_16278);
(statearr_16407[(16)] = inst_16277);
return statearr_16407;
})();var statearr_16408_16490 = state_16398__$1;(statearr_16408_16490[(2)] = null);
(statearr_16408_16490[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (39)))
{var inst_16355 = (state_16398[(17)]);var inst_16373 = (state_16398[(2)]);var inst_16374 = cljs.core.next.call(null,inst_16355);var inst_16334 = inst_16374;var inst_16335 = null;var inst_16336 = (0);var inst_16337 = (0);var state_16398__$1 = (function (){var statearr_16412 = state_16398;(statearr_16412[(9)] = inst_16337);
(statearr_16412[(18)] = inst_16336);
(statearr_16412[(10)] = inst_16335);
(statearr_16412[(19)] = inst_16334);
(statearr_16412[(20)] = inst_16373);
return statearr_16412;
})();var statearr_16413_16491 = state_16398__$1;(statearr_16413_16491[(2)] = null);
(statearr_16413_16491[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (4)))
{var inst_16266 = (state_16398[(21)]);var inst_16266__$1 = (state_16398[(2)]);var inst_16267 = (inst_16266__$1 == null);var state_16398__$1 = (function (){var statearr_16414 = state_16398;(statearr_16414[(21)] = inst_16266__$1);
return statearr_16414;
})();if(cljs.core.truth_(inst_16267))
{var statearr_16415_16492 = state_16398__$1;(statearr_16415_16492[(1)] = (5));
} else
{var statearr_16416_16493 = state_16398__$1;(statearr_16416_16493[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (15)))
{var inst_16276 = (state_16398[(12)]);var inst_16275 = (state_16398[(14)]);var inst_16278 = (state_16398[(15)]);var inst_16277 = (state_16398[(16)]);var inst_16291 = (state_16398[(2)]);var inst_16292 = (inst_16278 + (1));var tmp16409 = inst_16276;var tmp16410 = inst_16275;var tmp16411 = inst_16277;var inst_16275__$1 = tmp16410;var inst_16276__$1 = tmp16409;var inst_16277__$1 = tmp16411;var inst_16278__$1 = inst_16292;var state_16398__$1 = (function (){var statearr_16417 = state_16398;(statearr_16417[(12)] = inst_16276__$1);
(statearr_16417[(22)] = inst_16291);
(statearr_16417[(14)] = inst_16275__$1);
(statearr_16417[(15)] = inst_16278__$1);
(statearr_16417[(16)] = inst_16277__$1);
return statearr_16417;
})();var statearr_16418_16494 = state_16398__$1;(statearr_16418_16494[(2)] = null);
(statearr_16418_16494[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (21)))
{var inst_16316 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16419_16495 = state_16398__$1;(statearr_16419_16495[(2)] = inst_16316);
(statearr_16419_16495[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (31)))
{var inst_16342 = (state_16398[(11)]);var inst_16343 = (state_16398[(2)]);var inst_16344 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16345 = cljs.core.async.untap_STAR_.call(null,m,inst_16342);var state_16398__$1 = (function (){var statearr_16420 = state_16398;(statearr_16420[(23)] = inst_16343);
(statearr_16420[(24)] = inst_16344);
return statearr_16420;
})();var statearr_16421_16496 = state_16398__$1;(statearr_16421_16496[(2)] = inst_16345);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16398__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (32)))
{var inst_16342 = (state_16398[(11)]);var inst_16266 = (state_16398[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16398,(31),Object,null,(30));var inst_16349 = cljs.core.async.put_BANG_.call(null,inst_16342,inst_16266,done);var state_16398__$1 = state_16398;var statearr_16422_16497 = state_16398__$1;(statearr_16422_16497[(2)] = inst_16349);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16398__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (40)))
{var inst_16364 = (state_16398[(25)]);var inst_16365 = (state_16398[(2)]);var inst_16366 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16367 = cljs.core.async.untap_STAR_.call(null,m,inst_16364);var state_16398__$1 = (function (){var statearr_16423 = state_16398;(statearr_16423[(26)] = inst_16366);
(statearr_16423[(27)] = inst_16365);
return statearr_16423;
})();var statearr_16424_16498 = state_16398__$1;(statearr_16424_16498[(2)] = inst_16367);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16398__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (33)))
{var inst_16355 = (state_16398[(17)]);var inst_16357 = cljs.core.chunked_seq_QMARK_.call(null,inst_16355);var state_16398__$1 = state_16398;if(inst_16357)
{var statearr_16425_16499 = state_16398__$1;(statearr_16425_16499[(1)] = (36));
} else
{var statearr_16426_16500 = state_16398__$1;(statearr_16426_16500[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (13)))
{var inst_16285 = (state_16398[(28)]);var inst_16288 = cljs.core.async.close_BANG_.call(null,inst_16285);var state_16398__$1 = state_16398;var statearr_16427_16501 = state_16398__$1;(statearr_16427_16501[(2)] = inst_16288);
(statearr_16427_16501[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (22)))
{var inst_16306 = (state_16398[(8)]);var inst_16309 = cljs.core.async.close_BANG_.call(null,inst_16306);var state_16398__$1 = state_16398;var statearr_16428_16502 = state_16398__$1;(statearr_16428_16502[(2)] = inst_16309);
(statearr_16428_16502[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (36)))
{var inst_16355 = (state_16398[(17)]);var inst_16359 = cljs.core.chunk_first.call(null,inst_16355);var inst_16360 = cljs.core.chunk_rest.call(null,inst_16355);var inst_16361 = cljs.core.count.call(null,inst_16359);var inst_16334 = inst_16360;var inst_16335 = inst_16359;var inst_16336 = inst_16361;var inst_16337 = (0);var state_16398__$1 = (function (){var statearr_16429 = state_16398;(statearr_16429[(9)] = inst_16337);
(statearr_16429[(18)] = inst_16336);
(statearr_16429[(10)] = inst_16335);
(statearr_16429[(19)] = inst_16334);
return statearr_16429;
})();var statearr_16430_16503 = state_16398__$1;(statearr_16430_16503[(2)] = null);
(statearr_16430_16503[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (41)))
{var inst_16364 = (state_16398[(25)]);var inst_16266 = (state_16398[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16398,(40),Object,null,(39));var inst_16371 = cljs.core.async.put_BANG_.call(null,inst_16364,inst_16266,done);var state_16398__$1 = state_16398;var statearr_16431_16504 = state_16398__$1;(statearr_16431_16504[(2)] = inst_16371);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16398__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (43)))
{var state_16398__$1 = state_16398;var statearr_16432_16505 = state_16398__$1;(statearr_16432_16505[(2)] = null);
(statearr_16432_16505[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (29)))
{var inst_16382 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16433_16506 = state_16398__$1;(statearr_16433_16506[(2)] = inst_16382);
(statearr_16433_16506[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (44)))
{var inst_16391 = (state_16398[(2)]);var state_16398__$1 = (function (){var statearr_16434 = state_16398;(statearr_16434[(29)] = inst_16391);
return statearr_16434;
})();var statearr_16435_16507 = state_16398__$1;(statearr_16435_16507[(2)] = null);
(statearr_16435_16507[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (6)))
{var inst_16326 = (state_16398[(30)]);var inst_16325 = cljs.core.deref.call(null,cs);var inst_16326__$1 = cljs.core.keys.call(null,inst_16325);var inst_16327 = cljs.core.count.call(null,inst_16326__$1);var inst_16328 = cljs.core.reset_BANG_.call(null,dctr,inst_16327);var inst_16333 = cljs.core.seq.call(null,inst_16326__$1);var inst_16334 = inst_16333;var inst_16335 = null;var inst_16336 = (0);var inst_16337 = (0);var state_16398__$1 = (function (){var statearr_16436 = state_16398;(statearr_16436[(9)] = inst_16337);
(statearr_16436[(18)] = inst_16336);
(statearr_16436[(10)] = inst_16335);
(statearr_16436[(31)] = inst_16328);
(statearr_16436[(30)] = inst_16326__$1);
(statearr_16436[(19)] = inst_16334);
return statearr_16436;
})();var statearr_16437_16508 = state_16398__$1;(statearr_16437_16508[(2)] = null);
(statearr_16437_16508[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (28)))
{var inst_16355 = (state_16398[(17)]);var inst_16334 = (state_16398[(19)]);var inst_16355__$1 = cljs.core.seq.call(null,inst_16334);var state_16398__$1 = (function (){var statearr_16438 = state_16398;(statearr_16438[(17)] = inst_16355__$1);
return statearr_16438;
})();if(inst_16355__$1)
{var statearr_16439_16509 = state_16398__$1;(statearr_16439_16509[(1)] = (33));
} else
{var statearr_16440_16510 = state_16398__$1;(statearr_16440_16510[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (25)))
{var inst_16337 = (state_16398[(9)]);var inst_16336 = (state_16398[(18)]);var inst_16339 = (inst_16337 < inst_16336);var inst_16340 = inst_16339;var state_16398__$1 = state_16398;if(cljs.core.truth_(inst_16340))
{var statearr_16441_16511 = state_16398__$1;(statearr_16441_16511[(1)] = (27));
} else
{var statearr_16442_16512 = state_16398__$1;(statearr_16442_16512[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (34)))
{var state_16398__$1 = state_16398;var statearr_16443_16513 = state_16398__$1;(statearr_16443_16513[(2)] = null);
(statearr_16443_16513[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (17)))
{var state_16398__$1 = state_16398;var statearr_16444_16514 = state_16398__$1;(statearr_16444_16514[(2)] = null);
(statearr_16444_16514[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (3)))
{var inst_16396 = (state_16398[(2)]);var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16398__$1,inst_16396);
} else
{if((state_val_16399 === (12)))
{var inst_16321 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16445_16515 = state_16398__$1;(statearr_16445_16515[(2)] = inst_16321);
(statearr_16445_16515[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (2)))
{var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16398__$1,(4),ch);
} else
{if((state_val_16399 === (23)))
{var state_16398__$1 = state_16398;var statearr_16446_16516 = state_16398__$1;(statearr_16446_16516[(2)] = null);
(statearr_16446_16516[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (35)))
{var inst_16380 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16447_16517 = state_16398__$1;(statearr_16447_16517[(2)] = inst_16380);
(statearr_16447_16517[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (19)))
{var inst_16295 = (state_16398[(7)]);var inst_16299 = cljs.core.chunk_first.call(null,inst_16295);var inst_16300 = cljs.core.chunk_rest.call(null,inst_16295);var inst_16301 = cljs.core.count.call(null,inst_16299);var inst_16275 = inst_16300;var inst_16276 = inst_16299;var inst_16277 = inst_16301;var inst_16278 = (0);var state_16398__$1 = (function (){var statearr_16448 = state_16398;(statearr_16448[(12)] = inst_16276);
(statearr_16448[(14)] = inst_16275);
(statearr_16448[(15)] = inst_16278);
(statearr_16448[(16)] = inst_16277);
return statearr_16448;
})();var statearr_16449_16518 = state_16398__$1;(statearr_16449_16518[(2)] = null);
(statearr_16449_16518[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (11)))
{var inst_16275 = (state_16398[(14)]);var inst_16295 = (state_16398[(7)]);var inst_16295__$1 = cljs.core.seq.call(null,inst_16275);var state_16398__$1 = (function (){var statearr_16450 = state_16398;(statearr_16450[(7)] = inst_16295__$1);
return statearr_16450;
})();if(inst_16295__$1)
{var statearr_16451_16519 = state_16398__$1;(statearr_16451_16519[(1)] = (16));
} else
{var statearr_16452_16520 = state_16398__$1;(statearr_16452_16520[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (9)))
{var inst_16323 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16453_16521 = state_16398__$1;(statearr_16453_16521[(2)] = inst_16323);
(statearr_16453_16521[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (5)))
{var inst_16273 = cljs.core.deref.call(null,cs);var inst_16274 = cljs.core.seq.call(null,inst_16273);var inst_16275 = inst_16274;var inst_16276 = null;var inst_16277 = (0);var inst_16278 = (0);var state_16398__$1 = (function (){var statearr_16454 = state_16398;(statearr_16454[(12)] = inst_16276);
(statearr_16454[(14)] = inst_16275);
(statearr_16454[(15)] = inst_16278);
(statearr_16454[(16)] = inst_16277);
return statearr_16454;
})();var statearr_16455_16522 = state_16398__$1;(statearr_16455_16522[(2)] = null);
(statearr_16455_16522[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (14)))
{var state_16398__$1 = state_16398;var statearr_16456_16523 = state_16398__$1;(statearr_16456_16523[(2)] = null);
(statearr_16456_16523[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (45)))
{var inst_16388 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16457_16524 = state_16398__$1;(statearr_16457_16524[(2)] = inst_16388);
(statearr_16457_16524[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (26)))
{var inst_16326 = (state_16398[(30)]);var inst_16384 = (state_16398[(2)]);var inst_16385 = cljs.core.seq.call(null,inst_16326);var state_16398__$1 = (function (){var statearr_16458 = state_16398;(statearr_16458[(32)] = inst_16384);
return statearr_16458;
})();if(inst_16385)
{var statearr_16459_16525 = state_16398__$1;(statearr_16459_16525[(1)] = (42));
} else
{var statearr_16460_16526 = state_16398__$1;(statearr_16460_16526[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (16)))
{var inst_16295 = (state_16398[(7)]);var inst_16297 = cljs.core.chunked_seq_QMARK_.call(null,inst_16295);var state_16398__$1 = state_16398;if(inst_16297)
{var statearr_16464_16527 = state_16398__$1;(statearr_16464_16527[(1)] = (19));
} else
{var statearr_16465_16528 = state_16398__$1;(statearr_16465_16528[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (38)))
{var inst_16377 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16466_16529 = state_16398__$1;(statearr_16466_16529[(2)] = inst_16377);
(statearr_16466_16529[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (30)))
{var inst_16337 = (state_16398[(9)]);var inst_16336 = (state_16398[(18)]);var inst_16335 = (state_16398[(10)]);var inst_16334 = (state_16398[(19)]);var inst_16351 = (state_16398[(2)]);var inst_16352 = (inst_16337 + (1));var tmp16461 = inst_16336;var tmp16462 = inst_16335;var tmp16463 = inst_16334;var inst_16334__$1 = tmp16463;var inst_16335__$1 = tmp16462;var inst_16336__$1 = tmp16461;var inst_16337__$1 = inst_16352;var state_16398__$1 = (function (){var statearr_16467 = state_16398;(statearr_16467[(9)] = inst_16337__$1);
(statearr_16467[(18)] = inst_16336__$1);
(statearr_16467[(10)] = inst_16335__$1);
(statearr_16467[(19)] = inst_16334__$1);
(statearr_16467[(33)] = inst_16351);
return statearr_16467;
})();var statearr_16468_16530 = state_16398__$1;(statearr_16468_16530[(2)] = null);
(statearr_16468_16530[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (10)))
{var inst_16276 = (state_16398[(12)]);var inst_16278 = (state_16398[(15)]);var inst_16284 = cljs.core._nth.call(null,inst_16276,inst_16278);var inst_16285 = cljs.core.nth.call(null,inst_16284,(0),null);var inst_16286 = cljs.core.nth.call(null,inst_16284,(1),null);var state_16398__$1 = (function (){var statearr_16469 = state_16398;(statearr_16469[(28)] = inst_16285);
return statearr_16469;
})();if(cljs.core.truth_(inst_16286))
{var statearr_16470_16531 = state_16398__$1;(statearr_16470_16531[(1)] = (13));
} else
{var statearr_16471_16532 = state_16398__$1;(statearr_16471_16532[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (18)))
{var inst_16319 = (state_16398[(2)]);var state_16398__$1 = state_16398;var statearr_16472_16533 = state_16398__$1;(statearr_16472_16533[(2)] = inst_16319);
(statearr_16472_16533[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (42)))
{var state_16398__$1 = state_16398;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16398__$1,(45),dchan);
} else
{if((state_val_16399 === (37)))
{var inst_16355 = (state_16398[(17)]);var inst_16364 = cljs.core.first.call(null,inst_16355);var state_16398__$1 = (function (){var statearr_16473 = state_16398;(statearr_16473[(25)] = inst_16364);
return statearr_16473;
})();var statearr_16474_16534 = state_16398__$1;(statearr_16474_16534[(2)] = null);
(statearr_16474_16534[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16399 === (8)))
{var inst_16278 = (state_16398[(15)]);var inst_16277 = (state_16398[(16)]);var inst_16280 = (inst_16278 < inst_16277);var inst_16281 = inst_16280;var state_16398__$1 = state_16398;if(cljs.core.truth_(inst_16281))
{var statearr_16475_16535 = state_16398__$1;(statearr_16475_16535[(1)] = (10));
} else
{var statearr_16476_16536 = state_16398__$1;(statearr_16476_16536[(1)] = (11));
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
});})(c__5693__auto___16484,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16484,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16480 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16480[(0)] = state_machine__5679__auto__);
(statearr_16480[(1)] = (1));
return statearr_16480;
});
var state_machine__5679__auto____1 = (function (state_16398){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16398);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16481){if((e16481 instanceof Object))
{var ex__5682__auto__ = e16481;var statearr_16482_16537 = state_16398;(statearr_16482_16537[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16398);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16481;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16538 = state_16398;
state_16398 = G__16538;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16398){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16398);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16484,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16483 = f__5694__auto__.call(null);(statearr_16483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16484);
return statearr_16483;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16484,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16540 = {};return obj16540;
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
;var m = (function (){if(typeof cljs.core.async.t16650 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16650 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16651){
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
this.meta16651 = meta16651;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16650.cljs$lang$type = true;
cljs.core.async.t16650.cljs$lang$ctorStr = "cljs.core.async/t16650";
cljs.core.async.t16650.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16650");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16650.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16650.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16650.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16650.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16650.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16650.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16650.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16650.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16650.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16652){var self__ = this;
var _16652__$1 = this;return self__.meta16651;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16650.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16652,meta16651__$1){var self__ = this;
var _16652__$1 = this;return (new cljs.core.async.t16650(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16651__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16650 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16650(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16651){return (new cljs.core.async.t16650(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16651));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16650(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___16759 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16717){var state_val_16718 = (state_16717[(1)]);if((state_val_16718 === (7)))
{var inst_16666 = (state_16717[(7)]);var inst_16671 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16666);var state_16717__$1 = state_16717;var statearr_16719_16760 = state_16717__$1;(statearr_16719_16760[(2)] = inst_16671);
(statearr_16719_16760[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (20)))
{var inst_16681 = (state_16717[(8)]);var state_16717__$1 = state_16717;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16717__$1,(23),out,inst_16681);
} else
{if((state_val_16718 === (1)))
{var inst_16656 = (state_16717[(9)]);var inst_16656__$1 = calc_state.call(null);var inst_16657 = cljs.core.seq_QMARK_.call(null,inst_16656__$1);var state_16717__$1 = (function (){var statearr_16720 = state_16717;(statearr_16720[(9)] = inst_16656__$1);
return statearr_16720;
})();if(inst_16657)
{var statearr_16721_16761 = state_16717__$1;(statearr_16721_16761[(1)] = (2));
} else
{var statearr_16722_16762 = state_16717__$1;(statearr_16722_16762[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (4)))
{var inst_16656 = (state_16717[(9)]);var inst_16662 = (state_16717[(2)]);var inst_16663 = cljs.core.get.call(null,inst_16662,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16664 = cljs.core.get.call(null,inst_16662,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16665 = cljs.core.get.call(null,inst_16662,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16666 = inst_16656;var state_16717__$1 = (function (){var statearr_16723 = state_16717;(statearr_16723[(7)] = inst_16666);
(statearr_16723[(10)] = inst_16665);
(statearr_16723[(11)] = inst_16663);
(statearr_16723[(12)] = inst_16664);
return statearr_16723;
})();var statearr_16724_16763 = state_16717__$1;(statearr_16724_16763[(2)] = null);
(statearr_16724_16763[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (15)))
{var state_16717__$1 = state_16717;var statearr_16725_16764 = state_16717__$1;(statearr_16725_16764[(2)] = null);
(statearr_16725_16764[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (21)))
{var state_16717__$1 = state_16717;var statearr_16726_16765 = state_16717__$1;(statearr_16726_16765[(2)] = null);
(statearr_16726_16765[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (13)))
{var inst_16713 = (state_16717[(2)]);var state_16717__$1 = state_16717;var statearr_16727_16766 = state_16717__$1;(statearr_16727_16766[(2)] = inst_16713);
(statearr_16727_16766[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (22)))
{var inst_16674 = (state_16717[(13)]);var inst_16710 = (state_16717[(2)]);var inst_16666 = inst_16674;var state_16717__$1 = (function (){var statearr_16728 = state_16717;(statearr_16728[(7)] = inst_16666);
(statearr_16728[(14)] = inst_16710);
return statearr_16728;
})();var statearr_16729_16767 = state_16717__$1;(statearr_16729_16767[(2)] = null);
(statearr_16729_16767[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (6)))
{var inst_16715 = (state_16717[(2)]);var state_16717__$1 = state_16717;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16717__$1,inst_16715);
} else
{if((state_val_16718 === (17)))
{var inst_16696 = (state_16717[(15)]);var state_16717__$1 = state_16717;var statearr_16730_16768 = state_16717__$1;(statearr_16730_16768[(2)] = inst_16696);
(statearr_16730_16768[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (3)))
{var inst_16656 = (state_16717[(9)]);var state_16717__$1 = state_16717;var statearr_16731_16769 = state_16717__$1;(statearr_16731_16769[(2)] = inst_16656);
(statearr_16731_16769[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (12)))
{var inst_16682 = (state_16717[(16)]);var inst_16696 = (state_16717[(15)]);var inst_16677 = (state_16717[(17)]);var inst_16696__$1 = inst_16677.call(null,inst_16682);var state_16717__$1 = (function (){var statearr_16732 = state_16717;(statearr_16732[(15)] = inst_16696__$1);
return statearr_16732;
})();if(cljs.core.truth_(inst_16696__$1))
{var statearr_16733_16770 = state_16717__$1;(statearr_16733_16770[(1)] = (17));
} else
{var statearr_16734_16771 = state_16717__$1;(statearr_16734_16771[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (2)))
{var inst_16656 = (state_16717[(9)]);var inst_16659 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16656);var state_16717__$1 = state_16717;var statearr_16735_16772 = state_16717__$1;(statearr_16735_16772[(2)] = inst_16659);
(statearr_16735_16772[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (23)))
{var inst_16707 = (state_16717[(2)]);var state_16717__$1 = state_16717;var statearr_16736_16773 = state_16717__$1;(statearr_16736_16773[(2)] = inst_16707);
(statearr_16736_16773[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (19)))
{var inst_16704 = (state_16717[(2)]);var state_16717__$1 = state_16717;if(cljs.core.truth_(inst_16704))
{var statearr_16737_16774 = state_16717__$1;(statearr_16737_16774[(1)] = (20));
} else
{var statearr_16738_16775 = state_16717__$1;(statearr_16738_16775[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (11)))
{var inst_16681 = (state_16717[(8)]);var inst_16687 = (inst_16681 == null);var state_16717__$1 = state_16717;if(cljs.core.truth_(inst_16687))
{var statearr_16739_16776 = state_16717__$1;(statearr_16739_16776[(1)] = (14));
} else
{var statearr_16740_16777 = state_16717__$1;(statearr_16740_16777[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (9)))
{var inst_16674 = (state_16717[(13)]);var inst_16674__$1 = (state_16717[(2)]);var inst_16675 = cljs.core.get.call(null,inst_16674__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16676 = cljs.core.get.call(null,inst_16674__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16677 = cljs.core.get.call(null,inst_16674__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16717__$1 = (function (){var statearr_16741 = state_16717;(statearr_16741[(18)] = inst_16676);
(statearr_16741[(13)] = inst_16674__$1);
(statearr_16741[(17)] = inst_16677);
return statearr_16741;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16717__$1,(10),inst_16675);
} else
{if((state_val_16718 === (5)))
{var inst_16666 = (state_16717[(7)]);var inst_16669 = cljs.core.seq_QMARK_.call(null,inst_16666);var state_16717__$1 = state_16717;if(inst_16669)
{var statearr_16742_16778 = state_16717__$1;(statearr_16742_16778[(1)] = (7));
} else
{var statearr_16743_16779 = state_16717__$1;(statearr_16743_16779[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (14)))
{var inst_16682 = (state_16717[(16)]);var inst_16689 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16682);var state_16717__$1 = state_16717;var statearr_16744_16780 = state_16717__$1;(statearr_16744_16780[(2)] = inst_16689);
(statearr_16744_16780[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (16)))
{var inst_16692 = (state_16717[(2)]);var inst_16693 = calc_state.call(null);var inst_16666 = inst_16693;var state_16717__$1 = (function (){var statearr_16745 = state_16717;(statearr_16745[(7)] = inst_16666);
(statearr_16745[(19)] = inst_16692);
return statearr_16745;
})();var statearr_16746_16781 = state_16717__$1;(statearr_16746_16781[(2)] = null);
(statearr_16746_16781[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (10)))
{var inst_16682 = (state_16717[(16)]);var inst_16681 = (state_16717[(8)]);var inst_16680 = (state_16717[(2)]);var inst_16681__$1 = cljs.core.nth.call(null,inst_16680,(0),null);var inst_16682__$1 = cljs.core.nth.call(null,inst_16680,(1),null);var inst_16683 = (inst_16681__$1 == null);var inst_16684 = cljs.core._EQ_.call(null,inst_16682__$1,change);var inst_16685 = (inst_16683) || (inst_16684);var state_16717__$1 = (function (){var statearr_16747 = state_16717;(statearr_16747[(16)] = inst_16682__$1);
(statearr_16747[(8)] = inst_16681__$1);
return statearr_16747;
})();if(cljs.core.truth_(inst_16685))
{var statearr_16748_16782 = state_16717__$1;(statearr_16748_16782[(1)] = (11));
} else
{var statearr_16749_16783 = state_16717__$1;(statearr_16749_16783[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (18)))
{var inst_16676 = (state_16717[(18)]);var inst_16682 = (state_16717[(16)]);var inst_16677 = (state_16717[(17)]);var inst_16699 = cljs.core.empty_QMARK_.call(null,inst_16677);var inst_16700 = inst_16676.call(null,inst_16682);var inst_16701 = cljs.core.not.call(null,inst_16700);var inst_16702 = (inst_16699) && (inst_16701);var state_16717__$1 = state_16717;var statearr_16750_16784 = state_16717__$1;(statearr_16750_16784[(2)] = inst_16702);
(statearr_16750_16784[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16718 === (8)))
{var inst_16666 = (state_16717[(7)]);var state_16717__$1 = state_16717;var statearr_16751_16785 = state_16717__$1;(statearr_16751_16785[(2)] = inst_16666);
(statearr_16751_16785[(1)] = (9));
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
});})(c__5693__auto___16759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___16759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16755 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16755[(0)] = state_machine__5679__auto__);
(statearr_16755[(1)] = (1));
return statearr_16755;
});
var state_machine__5679__auto____1 = (function (state_16717){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16717);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16756){if((e16756 instanceof Object))
{var ex__5682__auto__ = e16756;var statearr_16757_16786 = state_16717;(statearr_16757_16786[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16717);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16756;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16787 = state_16717;
state_16717 = G__16787;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16717){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16717);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_16758 = f__5694__auto__.call(null);(statearr_16758[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16759);
return statearr_16758;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16759,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16789 = {};return obj16789;
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
return (function (p1__16790_SHARP_){if(cljs.core.truth_(p1__16790_SHARP_.call(null,topic)))
{return p1__16790_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16790_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16915 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16916){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16916 = meta16916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16915.cljs$lang$type = true;
cljs.core.async.t16915.cljs$lang$ctorStr = "cljs.core.async/t16915";
cljs.core.async.t16915.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16915");
});})(mults,ensure_mult))
;
cljs.core.async.t16915.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16915.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16915.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16915.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16915.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16915.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16917){var self__ = this;
var _16917__$1 = this;return self__.meta16916;
});})(mults,ensure_mult))
;
cljs.core.async.t16915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16917,meta16916__$1){var self__ = this;
var _16917__$1 = this;return (new cljs.core.async.t16915(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16916__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16915 = ((function (mults,ensure_mult){
return (function __GT_t16915(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16916){return (new cljs.core.async.t16915(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16916));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16915(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___17039 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17039,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17039,mults,ensure_mult,p){
return (function (state_16991){var state_val_16992 = (state_16991[(1)]);if((state_val_16992 === (7)))
{var inst_16987 = (state_16991[(2)]);var state_16991__$1 = state_16991;var statearr_16993_17040 = state_16991__$1;(statearr_16993_17040[(2)] = inst_16987);
(statearr_16993_17040[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (20)))
{var state_16991__$1 = state_16991;var statearr_16994_17041 = state_16991__$1;(statearr_16994_17041[(2)] = null);
(statearr_16994_17041[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (1)))
{var state_16991__$1 = state_16991;var statearr_16995_17042 = state_16991__$1;(statearr_16995_17042[(2)] = null);
(statearr_16995_17042[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (24)))
{var inst_16970 = (state_16991[(7)]);var inst_16920 = (state_16991[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16991,(23),Object,null,(22));var inst_16977 = cljs.core.async.muxch_STAR_.call(null,inst_16970);var state_16991__$1 = state_16991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16991__$1,(25),inst_16977,inst_16920);
} else
{if((state_val_16992 === (4)))
{var inst_16920 = (state_16991[(8)]);var inst_16920__$1 = (state_16991[(2)]);var inst_16921 = (inst_16920__$1 == null);var state_16991__$1 = (function (){var statearr_16996 = state_16991;(statearr_16996[(8)] = inst_16920__$1);
return statearr_16996;
})();if(cljs.core.truth_(inst_16921))
{var statearr_16997_17043 = state_16991__$1;(statearr_16997_17043[(1)] = (5));
} else
{var statearr_16998_17044 = state_16991__$1;(statearr_16998_17044[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (15)))
{var inst_16962 = (state_16991[(2)]);var state_16991__$1 = state_16991;var statearr_16999_17045 = state_16991__$1;(statearr_16999_17045[(2)] = inst_16962);
(statearr_16999_17045[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (21)))
{var inst_16984 = (state_16991[(2)]);var state_16991__$1 = (function (){var statearr_17000 = state_16991;(statearr_17000[(9)] = inst_16984);
return statearr_17000;
})();var statearr_17001_17046 = state_16991__$1;(statearr_17001_17046[(2)] = null);
(statearr_17001_17046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (13)))
{var inst_16944 = (state_16991[(10)]);var inst_16946 = cljs.core.chunked_seq_QMARK_.call(null,inst_16944);var state_16991__$1 = state_16991;if(inst_16946)
{var statearr_17002_17047 = state_16991__$1;(statearr_17002_17047[(1)] = (16));
} else
{var statearr_17003_17048 = state_16991__$1;(statearr_17003_17048[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (22)))
{var inst_16981 = (state_16991[(2)]);var state_16991__$1 = state_16991;var statearr_17004_17049 = state_16991__$1;(statearr_17004_17049[(2)] = inst_16981);
(statearr_17004_17049[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (6)))
{var inst_16970 = (state_16991[(7)]);var inst_16920 = (state_16991[(8)]);var inst_16968 = (state_16991[(11)]);var inst_16968__$1 = topic_fn.call(null,inst_16920);var inst_16969 = cljs.core.deref.call(null,mults);var inst_16970__$1 = cljs.core.get.call(null,inst_16969,inst_16968__$1);var state_16991__$1 = (function (){var statearr_17005 = state_16991;(statearr_17005[(7)] = inst_16970__$1);
(statearr_17005[(11)] = inst_16968__$1);
return statearr_17005;
})();if(cljs.core.truth_(inst_16970__$1))
{var statearr_17006_17050 = state_16991__$1;(statearr_17006_17050[(1)] = (19));
} else
{var statearr_17007_17051 = state_16991__$1;(statearr_17007_17051[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (25)))
{var inst_16979 = (state_16991[(2)]);var state_16991__$1 = state_16991;var statearr_17008_17052 = state_16991__$1;(statearr_17008_17052[(2)] = inst_16979);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16991__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (17)))
{var inst_16944 = (state_16991[(10)]);var inst_16953 = cljs.core.first.call(null,inst_16944);var inst_16954 = cljs.core.async.muxch_STAR_.call(null,inst_16953);var inst_16955 = cljs.core.async.close_BANG_.call(null,inst_16954);var inst_16956 = cljs.core.next.call(null,inst_16944);var inst_16930 = inst_16956;var inst_16931 = null;var inst_16932 = (0);var inst_16933 = (0);var state_16991__$1 = (function (){var statearr_17009 = state_16991;(statearr_17009[(12)] = inst_16955);
(statearr_17009[(13)] = inst_16933);
(statearr_17009[(14)] = inst_16932);
(statearr_17009[(15)] = inst_16930);
(statearr_17009[(16)] = inst_16931);
return statearr_17009;
})();var statearr_17010_17053 = state_16991__$1;(statearr_17010_17053[(2)] = null);
(statearr_17010_17053[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (3)))
{var inst_16989 = (state_16991[(2)]);var state_16991__$1 = state_16991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16991__$1,inst_16989);
} else
{if((state_val_16992 === (12)))
{var inst_16964 = (state_16991[(2)]);var state_16991__$1 = state_16991;var statearr_17011_17054 = state_16991__$1;(statearr_17011_17054[(2)] = inst_16964);
(statearr_17011_17054[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (2)))
{var state_16991__$1 = state_16991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16991__$1,(4),ch);
} else
{if((state_val_16992 === (23)))
{var inst_16968 = (state_16991[(11)]);var inst_16972 = (state_16991[(2)]);var inst_16973 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16968);var state_16991__$1 = (function (){var statearr_17012 = state_16991;(statearr_17012[(17)] = inst_16972);
return statearr_17012;
})();var statearr_17013_17055 = state_16991__$1;(statearr_17013_17055[(2)] = inst_16973);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16991__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (19)))
{var state_16991__$1 = state_16991;var statearr_17014_17056 = state_16991__$1;(statearr_17014_17056[(2)] = null);
(statearr_17014_17056[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (11)))
{var inst_16944 = (state_16991[(10)]);var inst_16930 = (state_16991[(15)]);var inst_16944__$1 = cljs.core.seq.call(null,inst_16930);var state_16991__$1 = (function (){var statearr_17015 = state_16991;(statearr_17015[(10)] = inst_16944__$1);
return statearr_17015;
})();if(inst_16944__$1)
{var statearr_17016_17057 = state_16991__$1;(statearr_17016_17057[(1)] = (13));
} else
{var statearr_17017_17058 = state_16991__$1;(statearr_17017_17058[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (9)))
{var inst_16966 = (state_16991[(2)]);var state_16991__$1 = state_16991;var statearr_17018_17059 = state_16991__$1;(statearr_17018_17059[(2)] = inst_16966);
(statearr_17018_17059[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (5)))
{var inst_16927 = cljs.core.deref.call(null,mults);var inst_16928 = cljs.core.vals.call(null,inst_16927);var inst_16929 = cljs.core.seq.call(null,inst_16928);var inst_16930 = inst_16929;var inst_16931 = null;var inst_16932 = (0);var inst_16933 = (0);var state_16991__$1 = (function (){var statearr_17019 = state_16991;(statearr_17019[(13)] = inst_16933);
(statearr_17019[(14)] = inst_16932);
(statearr_17019[(15)] = inst_16930);
(statearr_17019[(16)] = inst_16931);
return statearr_17019;
})();var statearr_17020_17060 = state_16991__$1;(statearr_17020_17060[(2)] = null);
(statearr_17020_17060[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (14)))
{var state_16991__$1 = state_16991;var statearr_17024_17061 = state_16991__$1;(statearr_17024_17061[(2)] = null);
(statearr_17024_17061[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (16)))
{var inst_16944 = (state_16991[(10)]);var inst_16948 = cljs.core.chunk_first.call(null,inst_16944);var inst_16949 = cljs.core.chunk_rest.call(null,inst_16944);var inst_16950 = cljs.core.count.call(null,inst_16948);var inst_16930 = inst_16949;var inst_16931 = inst_16948;var inst_16932 = inst_16950;var inst_16933 = (0);var state_16991__$1 = (function (){var statearr_17025 = state_16991;(statearr_17025[(13)] = inst_16933);
(statearr_17025[(14)] = inst_16932);
(statearr_17025[(15)] = inst_16930);
(statearr_17025[(16)] = inst_16931);
return statearr_17025;
})();var statearr_17026_17062 = state_16991__$1;(statearr_17026_17062[(2)] = null);
(statearr_17026_17062[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (10)))
{var inst_16933 = (state_16991[(13)]);var inst_16932 = (state_16991[(14)]);var inst_16930 = (state_16991[(15)]);var inst_16931 = (state_16991[(16)]);var inst_16938 = cljs.core._nth.call(null,inst_16931,inst_16933);var inst_16939 = cljs.core.async.muxch_STAR_.call(null,inst_16938);var inst_16940 = cljs.core.async.close_BANG_.call(null,inst_16939);var inst_16941 = (inst_16933 + (1));var tmp17021 = inst_16932;var tmp17022 = inst_16930;var tmp17023 = inst_16931;var inst_16930__$1 = tmp17022;var inst_16931__$1 = tmp17023;var inst_16932__$1 = tmp17021;var inst_16933__$1 = inst_16941;var state_16991__$1 = (function (){var statearr_17027 = state_16991;(statearr_17027[(13)] = inst_16933__$1);
(statearr_17027[(14)] = inst_16932__$1);
(statearr_17027[(15)] = inst_16930__$1);
(statearr_17027[(16)] = inst_16931__$1);
(statearr_17027[(18)] = inst_16940);
return statearr_17027;
})();var statearr_17028_17063 = state_16991__$1;(statearr_17028_17063[(2)] = null);
(statearr_17028_17063[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (18)))
{var inst_16959 = (state_16991[(2)]);var state_16991__$1 = state_16991;var statearr_17029_17064 = state_16991__$1;(statearr_17029_17064[(2)] = inst_16959);
(statearr_17029_17064[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16992 === (8)))
{var inst_16933 = (state_16991[(13)]);var inst_16932 = (state_16991[(14)]);var inst_16935 = (inst_16933 < inst_16932);var inst_16936 = inst_16935;var state_16991__$1 = state_16991;if(cljs.core.truth_(inst_16936))
{var statearr_17030_17065 = state_16991__$1;(statearr_17030_17065[(1)] = (10));
} else
{var statearr_17031_17066 = state_16991__$1;(statearr_17031_17066[(1)] = (11));
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
});})(c__5693__auto___17039,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___17039,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17035[(0)] = state_machine__5679__auto__);
(statearr_17035[(1)] = (1));
return statearr_17035;
});
var state_machine__5679__auto____1 = (function (state_16991){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16991);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17036){if((e17036 instanceof Object))
{var ex__5682__auto__ = e17036;var statearr_17037_17067 = state_16991;(statearr_17037_17067[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17068 = state_16991;
state_16991 = G__17068;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16991){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17039,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_17038 = f__5694__auto__.call(null);(statearr_17038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17039);
return statearr_17038;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17039,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___17205 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17205,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17205,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_17175){var state_val_17176 = (state_17175[(1)]);if((state_val_17176 === (7)))
{var state_17175__$1 = state_17175;var statearr_17177_17206 = state_17175__$1;(statearr_17177_17206[(2)] = null);
(statearr_17177_17206[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (1)))
{var state_17175__$1 = state_17175;var statearr_17178_17207 = state_17175__$1;(statearr_17178_17207[(2)] = null);
(statearr_17178_17207[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (4)))
{var inst_17139 = (state_17175[(7)]);var inst_17141 = (inst_17139 < cnt);var state_17175__$1 = state_17175;if(cljs.core.truth_(inst_17141))
{var statearr_17179_17208 = state_17175__$1;(statearr_17179_17208[(1)] = (6));
} else
{var statearr_17180_17209 = state_17175__$1;(statearr_17180_17209[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (15)))
{var inst_17171 = (state_17175[(2)]);var state_17175__$1 = state_17175;var statearr_17181_17210 = state_17175__$1;(statearr_17181_17210[(2)] = inst_17171);
(statearr_17181_17210[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (13)))
{var inst_17164 = cljs.core.async.close_BANG_.call(null,out);var state_17175__$1 = state_17175;var statearr_17182_17211 = state_17175__$1;(statearr_17182_17211[(2)] = inst_17164);
(statearr_17182_17211[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (6)))
{var state_17175__$1 = state_17175;var statearr_17183_17212 = state_17175__$1;(statearr_17183_17212[(2)] = null);
(statearr_17183_17212[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (3)))
{var inst_17173 = (state_17175[(2)]);var state_17175__$1 = state_17175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17175__$1,inst_17173);
} else
{if((state_val_17176 === (12)))
{var inst_17161 = (state_17175[(8)]);var inst_17161__$1 = (state_17175[(2)]);var inst_17162 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17161__$1);var state_17175__$1 = (function (){var statearr_17184 = state_17175;(statearr_17184[(8)] = inst_17161__$1);
return statearr_17184;
})();if(cljs.core.truth_(inst_17162))
{var statearr_17185_17213 = state_17175__$1;(statearr_17185_17213[(1)] = (13));
} else
{var statearr_17186_17214 = state_17175__$1;(statearr_17186_17214[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (2)))
{var inst_17138 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17139 = (0);var state_17175__$1 = (function (){var statearr_17187 = state_17175;(statearr_17187[(7)] = inst_17139);
(statearr_17187[(9)] = inst_17138);
return statearr_17187;
})();var statearr_17188_17215 = state_17175__$1;(statearr_17188_17215[(2)] = null);
(statearr_17188_17215[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (11)))
{var inst_17139 = (state_17175[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17175,(10),Object,null,(9));var inst_17148 = chs__$1.call(null,inst_17139);var inst_17149 = done.call(null,inst_17139);var inst_17150 = cljs.core.async.take_BANG_.call(null,inst_17148,inst_17149);var state_17175__$1 = state_17175;var statearr_17189_17216 = state_17175__$1;(statearr_17189_17216[(2)] = inst_17150);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17175__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (9)))
{var inst_17139 = (state_17175[(7)]);var inst_17152 = (state_17175[(2)]);var inst_17153 = (inst_17139 + (1));var inst_17139__$1 = inst_17153;var state_17175__$1 = (function (){var statearr_17190 = state_17175;(statearr_17190[(7)] = inst_17139__$1);
(statearr_17190[(10)] = inst_17152);
return statearr_17190;
})();var statearr_17191_17217 = state_17175__$1;(statearr_17191_17217[(2)] = null);
(statearr_17191_17217[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (5)))
{var inst_17159 = (state_17175[(2)]);var state_17175__$1 = (function (){var statearr_17192 = state_17175;(statearr_17192[(11)] = inst_17159);
return statearr_17192;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17175__$1,(12),dchan);
} else
{if((state_val_17176 === (14)))
{var inst_17161 = (state_17175[(8)]);var inst_17166 = cljs.core.apply.call(null,f,inst_17161);var state_17175__$1 = state_17175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17175__$1,(16),out,inst_17166);
} else
{if((state_val_17176 === (16)))
{var inst_17168 = (state_17175[(2)]);var state_17175__$1 = (function (){var statearr_17193 = state_17175;(statearr_17193[(12)] = inst_17168);
return statearr_17193;
})();var statearr_17194_17218 = state_17175__$1;(statearr_17194_17218[(2)] = null);
(statearr_17194_17218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (10)))
{var inst_17143 = (state_17175[(2)]);var inst_17144 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17175__$1 = (function (){var statearr_17195 = state_17175;(statearr_17195[(13)] = inst_17143);
return statearr_17195;
})();var statearr_17196_17219 = state_17175__$1;(statearr_17196_17219[(2)] = inst_17144);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17175__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17176 === (8)))
{var inst_17157 = (state_17175[(2)]);var state_17175__$1 = state_17175;var statearr_17197_17220 = state_17175__$1;(statearr_17197_17220[(2)] = inst_17157);
(statearr_17197_17220[(1)] = (5));
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
});})(c__5693__auto___17205,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___17205,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17201[(0)] = state_machine__5679__auto__);
(statearr_17201[(1)] = (1));
return statearr_17201;
});
var state_machine__5679__auto____1 = (function (state_17175){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17175);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17202){if((e17202 instanceof Object))
{var ex__5682__auto__ = e17202;var statearr_17203_17221 = state_17175;(statearr_17203_17221[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17175);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17222 = state_17175;
state_17175 = G__17222;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17175){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17205,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_17204 = f__5694__auto__.call(null);(statearr_17204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17205);
return statearr_17204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17205,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17330 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17330,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17330,out){
return (function (state_17306){var state_val_17307 = (state_17306[(1)]);if((state_val_17307 === (7)))
{var inst_17285 = (state_17306[(7)]);var inst_17286 = (state_17306[(8)]);var inst_17285__$1 = (state_17306[(2)]);var inst_17286__$1 = cljs.core.nth.call(null,inst_17285__$1,(0),null);var inst_17287 = cljs.core.nth.call(null,inst_17285__$1,(1),null);var inst_17288 = (inst_17286__$1 == null);var state_17306__$1 = (function (){var statearr_17308 = state_17306;(statearr_17308[(7)] = inst_17285__$1);
(statearr_17308[(9)] = inst_17287);
(statearr_17308[(8)] = inst_17286__$1);
return statearr_17308;
})();if(cljs.core.truth_(inst_17288))
{var statearr_17309_17331 = state_17306__$1;(statearr_17309_17331[(1)] = (8));
} else
{var statearr_17310_17332 = state_17306__$1;(statearr_17310_17332[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17307 === (1)))
{var inst_17277 = cljs.core.vec.call(null,chs);var inst_17278 = inst_17277;var state_17306__$1 = (function (){var statearr_17311 = state_17306;(statearr_17311[(10)] = inst_17278);
return statearr_17311;
})();var statearr_17312_17333 = state_17306__$1;(statearr_17312_17333[(2)] = null);
(statearr_17312_17333[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17307 === (4)))
{var inst_17278 = (state_17306[(10)]);var state_17306__$1 = state_17306;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17306__$1,(7),inst_17278);
} else
{if((state_val_17307 === (6)))
{var inst_17302 = (state_17306[(2)]);var state_17306__$1 = state_17306;var statearr_17313_17334 = state_17306__$1;(statearr_17313_17334[(2)] = inst_17302);
(statearr_17313_17334[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17307 === (3)))
{var inst_17304 = (state_17306[(2)]);var state_17306__$1 = state_17306;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17306__$1,inst_17304);
} else
{if((state_val_17307 === (2)))
{var inst_17278 = (state_17306[(10)]);var inst_17280 = cljs.core.count.call(null,inst_17278);var inst_17281 = (inst_17280 > (0));var state_17306__$1 = state_17306;if(cljs.core.truth_(inst_17281))
{var statearr_17315_17335 = state_17306__$1;(statearr_17315_17335[(1)] = (4));
} else
{var statearr_17316_17336 = state_17306__$1;(statearr_17316_17336[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17307 === (11)))
{var inst_17278 = (state_17306[(10)]);var inst_17295 = (state_17306[(2)]);var tmp17314 = inst_17278;var inst_17278__$1 = tmp17314;var state_17306__$1 = (function (){var statearr_17317 = state_17306;(statearr_17317[(11)] = inst_17295);
(statearr_17317[(10)] = inst_17278__$1);
return statearr_17317;
})();var statearr_17318_17337 = state_17306__$1;(statearr_17318_17337[(2)] = null);
(statearr_17318_17337[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17307 === (9)))
{var inst_17286 = (state_17306[(8)]);var state_17306__$1 = state_17306;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17306__$1,(11),out,inst_17286);
} else
{if((state_val_17307 === (5)))
{var inst_17300 = cljs.core.async.close_BANG_.call(null,out);var state_17306__$1 = state_17306;var statearr_17319_17338 = state_17306__$1;(statearr_17319_17338[(2)] = inst_17300);
(statearr_17319_17338[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17307 === (10)))
{var inst_17298 = (state_17306[(2)]);var state_17306__$1 = state_17306;var statearr_17320_17339 = state_17306__$1;(statearr_17320_17339[(2)] = inst_17298);
(statearr_17320_17339[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17307 === (8)))
{var inst_17285 = (state_17306[(7)]);var inst_17287 = (state_17306[(9)]);var inst_17278 = (state_17306[(10)]);var inst_17286 = (state_17306[(8)]);var inst_17290 = (function (){var c = inst_17287;var v = inst_17286;var vec__17283 = inst_17285;var cs = inst_17278;return ((function (c,v,vec__17283,cs,inst_17285,inst_17287,inst_17278,inst_17286,state_val_17307,c__5693__auto___17330,out){
return (function (p1__17223_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17223_SHARP_);
});
;})(c,v,vec__17283,cs,inst_17285,inst_17287,inst_17278,inst_17286,state_val_17307,c__5693__auto___17330,out))
})();var inst_17291 = cljs.core.filterv.call(null,inst_17290,inst_17278);var inst_17278__$1 = inst_17291;var state_17306__$1 = (function (){var statearr_17321 = state_17306;(statearr_17321[(10)] = inst_17278__$1);
return statearr_17321;
})();var statearr_17322_17340 = state_17306__$1;(statearr_17322_17340[(2)] = null);
(statearr_17322_17340[(1)] = (2));
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
});})(c__5693__auto___17330,out))
;return ((function (switch__5678__auto__,c__5693__auto___17330,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17326 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17326[(0)] = state_machine__5679__auto__);
(statearr_17326[(1)] = (1));
return statearr_17326;
});
var state_machine__5679__auto____1 = (function (state_17306){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17306);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17327){if((e17327 instanceof Object))
{var ex__5682__auto__ = e17327;var statearr_17328_17341 = state_17306;(statearr_17328_17341[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17306);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17342 = state_17306;
state_17306 = G__17342;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17306){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17330,out))
})();var state__5695__auto__ = (function (){var statearr_17329 = f__5694__auto__.call(null);(statearr_17329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17330);
return statearr_17329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17330,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17435 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17435,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17435,out){
return (function (state_17412){var state_val_17413 = (state_17412[(1)]);if((state_val_17413 === (7)))
{var inst_17394 = (state_17412[(7)]);var inst_17394__$1 = (state_17412[(2)]);var inst_17395 = (inst_17394__$1 == null);var inst_17396 = cljs.core.not.call(null,inst_17395);var state_17412__$1 = (function (){var statearr_17414 = state_17412;(statearr_17414[(7)] = inst_17394__$1);
return statearr_17414;
})();if(inst_17396)
{var statearr_17415_17436 = state_17412__$1;(statearr_17415_17436[(1)] = (8));
} else
{var statearr_17416_17437 = state_17412__$1;(statearr_17416_17437[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17413 === (1)))
{var inst_17389 = (0);var state_17412__$1 = (function (){var statearr_17417 = state_17412;(statearr_17417[(8)] = inst_17389);
return statearr_17417;
})();var statearr_17418_17438 = state_17412__$1;(statearr_17418_17438[(2)] = null);
(statearr_17418_17438[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17413 === (4)))
{var state_17412__$1 = state_17412;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17412__$1,(7),ch);
} else
{if((state_val_17413 === (6)))
{var inst_17407 = (state_17412[(2)]);var state_17412__$1 = state_17412;var statearr_17419_17439 = state_17412__$1;(statearr_17419_17439[(2)] = inst_17407);
(statearr_17419_17439[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17413 === (3)))
{var inst_17409 = (state_17412[(2)]);var inst_17410 = cljs.core.async.close_BANG_.call(null,out);var state_17412__$1 = (function (){var statearr_17420 = state_17412;(statearr_17420[(9)] = inst_17409);
return statearr_17420;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17412__$1,inst_17410);
} else
{if((state_val_17413 === (2)))
{var inst_17389 = (state_17412[(8)]);var inst_17391 = (inst_17389 < n);var state_17412__$1 = state_17412;if(cljs.core.truth_(inst_17391))
{var statearr_17421_17440 = state_17412__$1;(statearr_17421_17440[(1)] = (4));
} else
{var statearr_17422_17441 = state_17412__$1;(statearr_17422_17441[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17413 === (11)))
{var inst_17389 = (state_17412[(8)]);var inst_17399 = (state_17412[(2)]);var inst_17400 = (inst_17389 + (1));var inst_17389__$1 = inst_17400;var state_17412__$1 = (function (){var statearr_17423 = state_17412;(statearr_17423[(8)] = inst_17389__$1);
(statearr_17423[(10)] = inst_17399);
return statearr_17423;
})();var statearr_17424_17442 = state_17412__$1;(statearr_17424_17442[(2)] = null);
(statearr_17424_17442[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17413 === (9)))
{var state_17412__$1 = state_17412;var statearr_17425_17443 = state_17412__$1;(statearr_17425_17443[(2)] = null);
(statearr_17425_17443[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17413 === (5)))
{var state_17412__$1 = state_17412;var statearr_17426_17444 = state_17412__$1;(statearr_17426_17444[(2)] = null);
(statearr_17426_17444[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17413 === (10)))
{var inst_17404 = (state_17412[(2)]);var state_17412__$1 = state_17412;var statearr_17427_17445 = state_17412__$1;(statearr_17427_17445[(2)] = inst_17404);
(statearr_17427_17445[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17413 === (8)))
{var inst_17394 = (state_17412[(7)]);var state_17412__$1 = state_17412;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17412__$1,(11),out,inst_17394);
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
});})(c__5693__auto___17435,out))
;return ((function (switch__5678__auto__,c__5693__auto___17435,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17431 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17431[(0)] = state_machine__5679__auto__);
(statearr_17431[(1)] = (1));
return statearr_17431;
});
var state_machine__5679__auto____1 = (function (state_17412){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17412);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17432){if((e17432 instanceof Object))
{var ex__5682__auto__ = e17432;var statearr_17433_17446 = state_17412;(statearr_17433_17446[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17412);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17447 = state_17412;
state_17412 = G__17447;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17412){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17435,out))
})();var state__5695__auto__ = (function (){var statearr_17434 = f__5694__auto__.call(null);(statearr_17434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17435);
return statearr_17434;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17435,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17544 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17544,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17544,out){
return (function (state_17519){var state_val_17520 = (state_17519[(1)]);if((state_val_17520 === (7)))
{var inst_17514 = (state_17519[(2)]);var state_17519__$1 = state_17519;var statearr_17521_17545 = state_17519__$1;(statearr_17521_17545[(2)] = inst_17514);
(statearr_17521_17545[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17520 === (1)))
{var inst_17496 = null;var state_17519__$1 = (function (){var statearr_17522 = state_17519;(statearr_17522[(7)] = inst_17496);
return statearr_17522;
})();var statearr_17523_17546 = state_17519__$1;(statearr_17523_17546[(2)] = null);
(statearr_17523_17546[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17520 === (4)))
{var inst_17499 = (state_17519[(8)]);var inst_17499__$1 = (state_17519[(2)]);var inst_17500 = (inst_17499__$1 == null);var inst_17501 = cljs.core.not.call(null,inst_17500);var state_17519__$1 = (function (){var statearr_17524 = state_17519;(statearr_17524[(8)] = inst_17499__$1);
return statearr_17524;
})();if(inst_17501)
{var statearr_17525_17547 = state_17519__$1;(statearr_17525_17547[(1)] = (5));
} else
{var statearr_17526_17548 = state_17519__$1;(statearr_17526_17548[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17520 === (6)))
{var state_17519__$1 = state_17519;var statearr_17527_17549 = state_17519__$1;(statearr_17527_17549[(2)] = null);
(statearr_17527_17549[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17520 === (3)))
{var inst_17516 = (state_17519[(2)]);var inst_17517 = cljs.core.async.close_BANG_.call(null,out);var state_17519__$1 = (function (){var statearr_17528 = state_17519;(statearr_17528[(9)] = inst_17516);
return statearr_17528;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17519__$1,inst_17517);
} else
{if((state_val_17520 === (2)))
{var state_17519__$1 = state_17519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17519__$1,(4),ch);
} else
{if((state_val_17520 === (11)))
{var inst_17499 = (state_17519[(8)]);var inst_17508 = (state_17519[(2)]);var inst_17496 = inst_17499;var state_17519__$1 = (function (){var statearr_17529 = state_17519;(statearr_17529[(10)] = inst_17508);
(statearr_17529[(7)] = inst_17496);
return statearr_17529;
})();var statearr_17530_17550 = state_17519__$1;(statearr_17530_17550[(2)] = null);
(statearr_17530_17550[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17520 === (9)))
{var inst_17499 = (state_17519[(8)]);var state_17519__$1 = state_17519;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17519__$1,(11),out,inst_17499);
} else
{if((state_val_17520 === (5)))
{var inst_17499 = (state_17519[(8)]);var inst_17496 = (state_17519[(7)]);var inst_17503 = cljs.core._EQ_.call(null,inst_17499,inst_17496);var state_17519__$1 = state_17519;if(inst_17503)
{var statearr_17532_17551 = state_17519__$1;(statearr_17532_17551[(1)] = (8));
} else
{var statearr_17533_17552 = state_17519__$1;(statearr_17533_17552[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17520 === (10)))
{var inst_17511 = (state_17519[(2)]);var state_17519__$1 = state_17519;var statearr_17534_17553 = state_17519__$1;(statearr_17534_17553[(2)] = inst_17511);
(statearr_17534_17553[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17520 === (8)))
{var inst_17496 = (state_17519[(7)]);var tmp17531 = inst_17496;var inst_17496__$1 = tmp17531;var state_17519__$1 = (function (){var statearr_17535 = state_17519;(statearr_17535[(7)] = inst_17496__$1);
return statearr_17535;
})();var statearr_17536_17554 = state_17519__$1;(statearr_17536_17554[(2)] = null);
(statearr_17536_17554[(1)] = (2));
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
});})(c__5693__auto___17544,out))
;return ((function (switch__5678__auto__,c__5693__auto___17544,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17540 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17540[(0)] = state_machine__5679__auto__);
(statearr_17540[(1)] = (1));
return statearr_17540;
});
var state_machine__5679__auto____1 = (function (state_17519){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17519);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17541){if((e17541 instanceof Object))
{var ex__5682__auto__ = e17541;var statearr_17542_17555 = state_17519;(statearr_17542_17555[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17519);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17556 = state_17519;
state_17519 = G__17556;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17519){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17544,out))
})();var state__5695__auto__ = (function (){var statearr_17543 = f__5694__auto__.call(null);(statearr_17543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17544);
return statearr_17543;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17544,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17691 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17691,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17691,out){
return (function (state_17661){var state_val_17662 = (state_17661[(1)]);if((state_val_17662 === (7)))
{var inst_17657 = (state_17661[(2)]);var state_17661__$1 = state_17661;var statearr_17663_17692 = state_17661__$1;(statearr_17663_17692[(2)] = inst_17657);
(statearr_17663_17692[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (1)))
{var inst_17624 = (new Array(n));var inst_17625 = inst_17624;var inst_17626 = (0);var state_17661__$1 = (function (){var statearr_17664 = state_17661;(statearr_17664[(7)] = inst_17626);
(statearr_17664[(8)] = inst_17625);
return statearr_17664;
})();var statearr_17665_17693 = state_17661__$1;(statearr_17665_17693[(2)] = null);
(statearr_17665_17693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (4)))
{var inst_17629 = (state_17661[(9)]);var inst_17629__$1 = (state_17661[(2)]);var inst_17630 = (inst_17629__$1 == null);var inst_17631 = cljs.core.not.call(null,inst_17630);var state_17661__$1 = (function (){var statearr_17666 = state_17661;(statearr_17666[(9)] = inst_17629__$1);
return statearr_17666;
})();if(inst_17631)
{var statearr_17667_17694 = state_17661__$1;(statearr_17667_17694[(1)] = (5));
} else
{var statearr_17668_17695 = state_17661__$1;(statearr_17668_17695[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (15)))
{var inst_17651 = (state_17661[(2)]);var state_17661__$1 = state_17661;var statearr_17669_17696 = state_17661__$1;(statearr_17669_17696[(2)] = inst_17651);
(statearr_17669_17696[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (13)))
{var state_17661__$1 = state_17661;var statearr_17670_17697 = state_17661__$1;(statearr_17670_17697[(2)] = null);
(statearr_17670_17697[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (6)))
{var inst_17626 = (state_17661[(7)]);var inst_17647 = (inst_17626 > (0));var state_17661__$1 = state_17661;if(cljs.core.truth_(inst_17647))
{var statearr_17671_17698 = state_17661__$1;(statearr_17671_17698[(1)] = (12));
} else
{var statearr_17672_17699 = state_17661__$1;(statearr_17672_17699[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (3)))
{var inst_17659 = (state_17661[(2)]);var state_17661__$1 = state_17661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17661__$1,inst_17659);
} else
{if((state_val_17662 === (12)))
{var inst_17625 = (state_17661[(8)]);var inst_17649 = cljs.core.vec.call(null,inst_17625);var state_17661__$1 = state_17661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17661__$1,(15),out,inst_17649);
} else
{if((state_val_17662 === (2)))
{var state_17661__$1 = state_17661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17661__$1,(4),ch);
} else
{if((state_val_17662 === (11)))
{var inst_17641 = (state_17661[(2)]);var inst_17642 = (new Array(n));var inst_17625 = inst_17642;var inst_17626 = (0);var state_17661__$1 = (function (){var statearr_17673 = state_17661;(statearr_17673[(7)] = inst_17626);
(statearr_17673[(8)] = inst_17625);
(statearr_17673[(10)] = inst_17641);
return statearr_17673;
})();var statearr_17674_17700 = state_17661__$1;(statearr_17674_17700[(2)] = null);
(statearr_17674_17700[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (9)))
{var inst_17625 = (state_17661[(8)]);var inst_17639 = cljs.core.vec.call(null,inst_17625);var state_17661__$1 = state_17661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17661__$1,(11),out,inst_17639);
} else
{if((state_val_17662 === (5)))
{var inst_17626 = (state_17661[(7)]);var inst_17629 = (state_17661[(9)]);var inst_17625 = (state_17661[(8)]);var inst_17634 = (state_17661[(11)]);var inst_17633 = (inst_17625[inst_17626] = inst_17629);var inst_17634__$1 = (inst_17626 + (1));var inst_17635 = (inst_17634__$1 < n);var state_17661__$1 = (function (){var statearr_17675 = state_17661;(statearr_17675[(12)] = inst_17633);
(statearr_17675[(11)] = inst_17634__$1);
return statearr_17675;
})();if(cljs.core.truth_(inst_17635))
{var statearr_17676_17701 = state_17661__$1;(statearr_17676_17701[(1)] = (8));
} else
{var statearr_17677_17702 = state_17661__$1;(statearr_17677_17702[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (14)))
{var inst_17654 = (state_17661[(2)]);var inst_17655 = cljs.core.async.close_BANG_.call(null,out);var state_17661__$1 = (function (){var statearr_17679 = state_17661;(statearr_17679[(13)] = inst_17654);
return statearr_17679;
})();var statearr_17680_17703 = state_17661__$1;(statearr_17680_17703[(2)] = inst_17655);
(statearr_17680_17703[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (10)))
{var inst_17645 = (state_17661[(2)]);var state_17661__$1 = state_17661;var statearr_17681_17704 = state_17661__$1;(statearr_17681_17704[(2)] = inst_17645);
(statearr_17681_17704[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17662 === (8)))
{var inst_17625 = (state_17661[(8)]);var inst_17634 = (state_17661[(11)]);var tmp17678 = inst_17625;var inst_17625__$1 = tmp17678;var inst_17626 = inst_17634;var state_17661__$1 = (function (){var statearr_17682 = state_17661;(statearr_17682[(7)] = inst_17626);
(statearr_17682[(8)] = inst_17625__$1);
return statearr_17682;
})();var statearr_17683_17705 = state_17661__$1;(statearr_17683_17705[(2)] = null);
(statearr_17683_17705[(1)] = (2));
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
});})(c__5693__auto___17691,out))
;return ((function (switch__5678__auto__,c__5693__auto___17691,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17687 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17687[(0)] = state_machine__5679__auto__);
(statearr_17687[(1)] = (1));
return statearr_17687;
});
var state_machine__5679__auto____1 = (function (state_17661){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17661);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17688){if((e17688 instanceof Object))
{var ex__5682__auto__ = e17688;var statearr_17689_17706 = state_17661;(statearr_17689_17706[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17661);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17707 = state_17661;
state_17661 = G__17707;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17661){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17691,out))
})();var state__5695__auto__ = (function (){var statearr_17690 = f__5694__auto__.call(null);(statearr_17690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17691);
return statearr_17690;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17691,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17850 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17850,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17850,out){
return (function (state_17820){var state_val_17821 = (state_17820[(1)]);if((state_val_17821 === (7)))
{var inst_17816 = (state_17820[(2)]);var state_17820__$1 = state_17820;var statearr_17822_17851 = state_17820__$1;(statearr_17822_17851[(2)] = inst_17816);
(statearr_17822_17851[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (1)))
{var inst_17779 = [];var inst_17780 = inst_17779;var inst_17781 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17820__$1 = (function (){var statearr_17823 = state_17820;(statearr_17823[(7)] = inst_17780);
(statearr_17823[(8)] = inst_17781);
return statearr_17823;
})();var statearr_17824_17852 = state_17820__$1;(statearr_17824_17852[(2)] = null);
(statearr_17824_17852[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (4)))
{var inst_17784 = (state_17820[(9)]);var inst_17784__$1 = (state_17820[(2)]);var inst_17785 = (inst_17784__$1 == null);var inst_17786 = cljs.core.not.call(null,inst_17785);var state_17820__$1 = (function (){var statearr_17825 = state_17820;(statearr_17825[(9)] = inst_17784__$1);
return statearr_17825;
})();if(inst_17786)
{var statearr_17826_17853 = state_17820__$1;(statearr_17826_17853[(1)] = (5));
} else
{var statearr_17827_17854 = state_17820__$1;(statearr_17827_17854[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (15)))
{var inst_17810 = (state_17820[(2)]);var state_17820__$1 = state_17820;var statearr_17828_17855 = state_17820__$1;(statearr_17828_17855[(2)] = inst_17810);
(statearr_17828_17855[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (13)))
{var state_17820__$1 = state_17820;var statearr_17829_17856 = state_17820__$1;(statearr_17829_17856[(2)] = null);
(statearr_17829_17856[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (6)))
{var inst_17780 = (state_17820[(7)]);var inst_17805 = inst_17780.length;var inst_17806 = (inst_17805 > (0));var state_17820__$1 = state_17820;if(cljs.core.truth_(inst_17806))
{var statearr_17830_17857 = state_17820__$1;(statearr_17830_17857[(1)] = (12));
} else
{var statearr_17831_17858 = state_17820__$1;(statearr_17831_17858[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (3)))
{var inst_17818 = (state_17820[(2)]);var state_17820__$1 = state_17820;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17820__$1,inst_17818);
} else
{if((state_val_17821 === (12)))
{var inst_17780 = (state_17820[(7)]);var inst_17808 = cljs.core.vec.call(null,inst_17780);var state_17820__$1 = state_17820;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17820__$1,(15),out,inst_17808);
} else
{if((state_val_17821 === (2)))
{var state_17820__$1 = state_17820;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17820__$1,(4),ch);
} else
{if((state_val_17821 === (11)))
{var inst_17788 = (state_17820[(10)]);var inst_17784 = (state_17820[(9)]);var inst_17798 = (state_17820[(2)]);var inst_17799 = [];var inst_17800 = inst_17799.push(inst_17784);var inst_17780 = inst_17799;var inst_17781 = inst_17788;var state_17820__$1 = (function (){var statearr_17832 = state_17820;(statearr_17832[(11)] = inst_17800);
(statearr_17832[(12)] = inst_17798);
(statearr_17832[(7)] = inst_17780);
(statearr_17832[(8)] = inst_17781);
return statearr_17832;
})();var statearr_17833_17859 = state_17820__$1;(statearr_17833_17859[(2)] = null);
(statearr_17833_17859[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (9)))
{var inst_17780 = (state_17820[(7)]);var inst_17796 = cljs.core.vec.call(null,inst_17780);var state_17820__$1 = state_17820;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17820__$1,(11),out,inst_17796);
} else
{if((state_val_17821 === (5)))
{var inst_17788 = (state_17820[(10)]);var inst_17781 = (state_17820[(8)]);var inst_17784 = (state_17820[(9)]);var inst_17788__$1 = f.call(null,inst_17784);var inst_17789 = cljs.core._EQ_.call(null,inst_17788__$1,inst_17781);var inst_17790 = cljs.core.keyword_identical_QMARK_.call(null,inst_17781,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17791 = (inst_17789) || (inst_17790);var state_17820__$1 = (function (){var statearr_17834 = state_17820;(statearr_17834[(10)] = inst_17788__$1);
return statearr_17834;
})();if(cljs.core.truth_(inst_17791))
{var statearr_17835_17860 = state_17820__$1;(statearr_17835_17860[(1)] = (8));
} else
{var statearr_17836_17861 = state_17820__$1;(statearr_17836_17861[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (14)))
{var inst_17813 = (state_17820[(2)]);var inst_17814 = cljs.core.async.close_BANG_.call(null,out);var state_17820__$1 = (function (){var statearr_17838 = state_17820;(statearr_17838[(13)] = inst_17813);
return statearr_17838;
})();var statearr_17839_17862 = state_17820__$1;(statearr_17839_17862[(2)] = inst_17814);
(statearr_17839_17862[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (10)))
{var inst_17803 = (state_17820[(2)]);var state_17820__$1 = state_17820;var statearr_17840_17863 = state_17820__$1;(statearr_17840_17863[(2)] = inst_17803);
(statearr_17840_17863[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17821 === (8)))
{var inst_17788 = (state_17820[(10)]);var inst_17780 = (state_17820[(7)]);var inst_17784 = (state_17820[(9)]);var inst_17793 = inst_17780.push(inst_17784);var tmp17837 = inst_17780;var inst_17780__$1 = tmp17837;var inst_17781 = inst_17788;var state_17820__$1 = (function (){var statearr_17841 = state_17820;(statearr_17841[(7)] = inst_17780__$1);
(statearr_17841[(8)] = inst_17781);
(statearr_17841[(14)] = inst_17793);
return statearr_17841;
})();var statearr_17842_17864 = state_17820__$1;(statearr_17842_17864[(2)] = null);
(statearr_17842_17864[(1)] = (2));
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
});})(c__5693__auto___17850,out))
;return ((function (switch__5678__auto__,c__5693__auto___17850,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17846 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17846[(0)] = state_machine__5679__auto__);
(statearr_17846[(1)] = (1));
return statearr_17846;
});
var state_machine__5679__auto____1 = (function (state_17820){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17820);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17847){if((e17847 instanceof Object))
{var ex__5682__auto__ = e17847;var statearr_17848_17865 = state_17820;(statearr_17848_17865[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17820);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17847;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17866 = state_17820;
state_17820 = G__17866;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17820){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17820);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17850,out))
})();var state__5695__auto__ = (function (){var statearr_17849 = f__5694__auto__.call(null);(statearr_17849[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17850);
return statearr_17849;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17850,out))
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
