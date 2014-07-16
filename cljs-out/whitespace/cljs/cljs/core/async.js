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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t14960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14960 = (function (f,fn_handler,meta14961){
this.f = f;
this.fn_handler = fn_handler;
this.meta14961 = meta14961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14960.cljs$lang$type = true;
cljs.core.async.t14960.cljs$lang$ctorStr = "cljs.core.async/t14960";
cljs.core.async.t14960.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14960");
});
cljs.core.async.t14960.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14960.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t14960.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t14960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14962){var self__ = this;
var _14962__$1 = this;return self__.meta14961;
});
cljs.core.async.t14960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14962,meta14961__$1){var self__ = this;
var _14962__$1 = this;return (new cljs.core.async.t14960(self__.f,self__.fn_handler,meta14961__$1));
});
cljs.core.async.__GT_t14960 = (function __GT_t14960(f__$1,fn_handler__$1,meta14961){return (new cljs.core.async.t14960(f__$1,fn_handler__$1,meta14961));
});
}
return (new cljs.core.async.t14960(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__14964 = buff;if(G__14964)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__14964.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__14964.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14964);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__14964);
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
{var val_14965 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_14965);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_14965,ret){
return (function (){return fn1.call(null,val_14965);
});})(val_14965,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___14966 = n;var x_14967 = (0);while(true){
if((x_14967 < n__4399__auto___14966))
{(a[x_14967] = (0));
{
var G__14968 = (x_14967 + (1));
x_14967 = G__14968;
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
var G__14969 = (i + (1));
i = G__14969;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t14973 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14973 = (function (flag,alt_flag,meta14974){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta14974 = meta14974;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14973.cljs$lang$type = true;
cljs.core.async.t14973.cljs$lang$ctorStr = "cljs.core.async/t14973";
cljs.core.async.t14973.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14973");
});})(flag))
;
cljs.core.async.t14973.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14973.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t14973.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t14973.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_14975){var self__ = this;
var _14975__$1 = this;return self__.meta14974;
});})(flag))
;
cljs.core.async.t14973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_14975,meta14974__$1){var self__ = this;
var _14975__$1 = this;return (new cljs.core.async.t14973(self__.flag,self__.alt_flag,meta14974__$1));
});})(flag))
;
cljs.core.async.__GT_t14973 = ((function (flag){
return (function __GT_t14973(flag__$1,alt_flag__$1,meta14974){return (new cljs.core.async.t14973(flag__$1,alt_flag__$1,meta14974));
});})(flag))
;
}
return (new cljs.core.async.t14973(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t14979 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14979 = (function (cb,flag,alt_handler,meta14980){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta14980 = meta14980;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14979.cljs$lang$type = true;
cljs.core.async.t14979.cljs$lang$ctorStr = "cljs.core.async/t14979";
cljs.core.async.t14979.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14979");
});
cljs.core.async.t14979.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14979.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t14979.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t14979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14981){var self__ = this;
var _14981__$1 = this;return self__.meta14980;
});
cljs.core.async.t14979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14981,meta14980__$1){var self__ = this;
var _14981__$1 = this;return (new cljs.core.async.t14979(self__.cb,self__.flag,self__.alt_handler,meta14980__$1));
});
cljs.core.async.__GT_t14979 = (function __GT_t14979(cb__$1,flag__$1,alt_handler__$1,meta14980){return (new cljs.core.async.t14979(cb__$1,flag__$1,alt_handler__$1,meta14980));
});
}
return (new cljs.core.async.t14979(cb,flag,alt_handler,null));
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
return (function (p1__14982_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__14982_SHARP_,port], null));
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
var G__14983 = (i + (1));
i = G__14983;
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
var alts_BANG___delegate = function (ports,p__14984){var map__14986 = p__14984;var map__14986__$1 = ((cljs.core.seq_QMARK_.call(null,map__14986))?cljs.core.apply.call(null,cljs.core.hash_map,map__14986):map__14986);var opts = map__14986__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__14984 = null;if (arguments.length > 1) {
  p__14984 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__14984);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__14987){
var ports = cljs.core.first(arglist__14987);
var p__14984 = cljs.core.rest(arglist__14987);
return alts_BANG___delegate(ports,p__14984);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14995 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14995 = (function (ch,f,map_LT_,meta14996){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14996 = meta14996;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14995.cljs$lang$type = true;
cljs.core.async.t14995.cljs$lang$ctorStr = "cljs.core.async/t14995";
cljs.core.async.t14995.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14995");
});
cljs.core.async.t14995.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14995.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14995.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14995.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14998 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14998 = (function (fn1,_,meta14996,ch,f,map_LT_,meta14999){
this.fn1 = fn1;
this._ = _;
this.meta14996 = meta14996;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14999 = meta14999;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14998.cljs$lang$type = true;
cljs.core.async.t14998.cljs$lang$ctorStr = "cljs.core.async/t14998";
cljs.core.async.t14998.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t14998");
});})(___$1))
;
cljs.core.async.t14998.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14998.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14998.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t14998.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__14988_SHARP_){return f1.call(null,(((p1__14988_SHARP_ == null))?null:self__.f.call(null,p1__14988_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t14998.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_15000){var self__ = this;
var _15000__$1 = this;return self__.meta14999;
});})(___$1))
;
cljs.core.async.t14998.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_15000,meta14999__$1){var self__ = this;
var _15000__$1 = this;return (new cljs.core.async.t14998(self__.fn1,self__._,self__.meta14996,self__.ch,self__.f,self__.map_LT_,meta14999__$1));
});})(___$1))
;
cljs.core.async.__GT_t14998 = ((function (___$1){
return (function __GT_t14998(fn1__$1,___$2,meta14996__$1,ch__$2,f__$2,map_LT___$2,meta14999){return (new cljs.core.async.t14998(fn1__$1,___$2,meta14996__$1,ch__$2,f__$2,map_LT___$2,meta14999));
});})(___$1))
;
}
return (new cljs.core.async.t14998(fn1,___$1,self__.meta14996,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14995.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14995.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14997){var self__ = this;
var _14997__$1 = this;return self__.meta14996;
});
cljs.core.async.t14995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14997,meta14996__$1){var self__ = this;
var _14997__$1 = this;return (new cljs.core.async.t14995(self__.ch,self__.f,self__.map_LT_,meta14996__$1));
});
cljs.core.async.__GT_t14995 = (function __GT_t14995(ch__$1,f__$1,map_LT___$1,meta14996){return (new cljs.core.async.t14995(ch__$1,f__$1,map_LT___$1,meta14996));
});
}
return (new cljs.core.async.t14995(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15004 = (function (ch,f,map_GT_,meta15005){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15005 = meta15005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15004.cljs$lang$type = true;
cljs.core.async.t15004.cljs$lang$ctorStr = "cljs.core.async/t15004";
cljs.core.async.t15004.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15004");
});
cljs.core.async.t15004.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15004.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15004.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15004.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15004.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15004.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15006){var self__ = this;
var _15006__$1 = this;return self__.meta15005;
});
cljs.core.async.t15004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15006,meta15005__$1){var self__ = this;
var _15006__$1 = this;return (new cljs.core.async.t15004(self__.ch,self__.f,self__.map_GT_,meta15005__$1));
});
cljs.core.async.__GT_t15004 = (function __GT_t15004(ch__$1,f__$1,map_GT___$1,meta15005){return (new cljs.core.async.t15004(ch__$1,f__$1,map_GT___$1,meta15005));
});
}
return (new cljs.core.async.t15004(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15010 = (function (ch,p,filter_GT_,meta15011){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15011 = meta15011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15010.cljs$lang$type = true;
cljs.core.async.t15010.cljs$lang$ctorStr = "cljs.core.async/t15010";
cljs.core.async.t15010.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15010");
});
cljs.core.async.t15010.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15010.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15010.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15010.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15010.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15010.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15012){var self__ = this;
var _15012__$1 = this;return self__.meta15011;
});
cljs.core.async.t15010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15012,meta15011__$1){var self__ = this;
var _15012__$1 = this;return (new cljs.core.async.t15010(self__.ch,self__.p,self__.filter_GT_,meta15011__$1));
});
cljs.core.async.__GT_t15010 = (function __GT_t15010(ch__$1,p__$1,filter_GT___$1,meta15011){return (new cljs.core.async.t15010(ch__$1,p__$1,filter_GT___$1,meta15011));
});
}
return (new cljs.core.async.t15010(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___15095 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15095,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15095,out){
return (function (state_15074){var state_val_15075 = (state_15074[(1)]);if((state_val_15075 === (7)))
{var inst_15070 = (state_15074[(2)]);var state_15074__$1 = state_15074;var statearr_15076_15096 = state_15074__$1;(statearr_15076_15096[(2)] = inst_15070);
(statearr_15076_15096[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (1)))
{var state_15074__$1 = state_15074;var statearr_15077_15097 = state_15074__$1;(statearr_15077_15097[(2)] = null);
(statearr_15077_15097[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (4)))
{var inst_15056 = (state_15074[(7)]);var inst_15056__$1 = (state_15074[(2)]);var inst_15057 = (inst_15056__$1 == null);var state_15074__$1 = (function (){var statearr_15078 = state_15074;(statearr_15078[(7)] = inst_15056__$1);
return statearr_15078;
})();if(cljs.core.truth_(inst_15057))
{var statearr_15079_15098 = state_15074__$1;(statearr_15079_15098[(1)] = (5));
} else
{var statearr_15080_15099 = state_15074__$1;(statearr_15080_15099[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (6)))
{var inst_15056 = (state_15074[(7)]);var inst_15061 = p.call(null,inst_15056);var state_15074__$1 = state_15074;if(cljs.core.truth_(inst_15061))
{var statearr_15081_15100 = state_15074__$1;(statearr_15081_15100[(1)] = (8));
} else
{var statearr_15082_15101 = state_15074__$1;(statearr_15082_15101[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (3)))
{var inst_15072 = (state_15074[(2)]);var state_15074__$1 = state_15074;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15074__$1,inst_15072);
} else
{if((state_val_15075 === (2)))
{var state_15074__$1 = state_15074;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15074__$1,(4),ch);
} else
{if((state_val_15075 === (11)))
{var inst_15064 = (state_15074[(2)]);var state_15074__$1 = state_15074;var statearr_15083_15102 = state_15074__$1;(statearr_15083_15102[(2)] = inst_15064);
(statearr_15083_15102[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (9)))
{var state_15074__$1 = state_15074;var statearr_15084_15103 = state_15074__$1;(statearr_15084_15103[(2)] = null);
(statearr_15084_15103[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (5)))
{var inst_15059 = cljs.core.async.close_BANG_.call(null,out);var state_15074__$1 = state_15074;var statearr_15085_15104 = state_15074__$1;(statearr_15085_15104[(2)] = inst_15059);
(statearr_15085_15104[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (10)))
{var inst_15067 = (state_15074[(2)]);var state_15074__$1 = (function (){var statearr_15086 = state_15074;(statearr_15086[(8)] = inst_15067);
return statearr_15086;
})();var statearr_15087_15105 = state_15074__$1;(statearr_15087_15105[(2)] = null);
(statearr_15087_15105[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15075 === (8)))
{var inst_15056 = (state_15074[(7)]);var state_15074__$1 = state_15074;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15074__$1,(11),out,inst_15056);
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
});})(c__5693__auto___15095,out))
;return ((function (switch__5678__auto__,c__5693__auto___15095,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15091 = [null,null,null,null,null,null,null,null,null];(statearr_15091[(0)] = state_machine__5679__auto__);
(statearr_15091[(1)] = (1));
return statearr_15091;
});
var state_machine__5679__auto____1 = (function (state_15074){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15074);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15092){if((e15092 instanceof Object))
{var ex__5682__auto__ = e15092;var statearr_15093_15106 = state_15074;(statearr_15093_15106[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15074);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15092;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15107 = state_15074;
state_15074 = G__15107;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15074){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15074);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15095,out))
})();var state__5695__auto__ = (function (){var statearr_15094 = f__5694__auto__.call(null);(statearr_15094[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15095);
return statearr_15094;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15095,out))
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
return (function (state_15259){var state_val_15260 = (state_15259[(1)]);if((state_val_15260 === (7)))
{var inst_15255 = (state_15259[(2)]);var state_15259__$1 = state_15259;var statearr_15261_15298 = state_15259__$1;(statearr_15261_15298[(2)] = inst_15255);
(statearr_15261_15298[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (20)))
{var inst_15230 = (state_15259[(7)]);var inst_15241 = (state_15259[(2)]);var inst_15242 = cljs.core.next.call(null,inst_15230);var inst_15216 = inst_15242;var inst_15217 = null;var inst_15218 = (0);var inst_15219 = (0);var state_15259__$1 = (function (){var statearr_15262 = state_15259;(statearr_15262[(8)] = inst_15219);
(statearr_15262[(9)] = inst_15216);
(statearr_15262[(10)] = inst_15241);
(statearr_15262[(11)] = inst_15218);
(statearr_15262[(12)] = inst_15217);
return statearr_15262;
})();var statearr_15263_15299 = state_15259__$1;(statearr_15263_15299[(2)] = null);
(statearr_15263_15299[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (1)))
{var state_15259__$1 = state_15259;var statearr_15264_15300 = state_15259__$1;(statearr_15264_15300[(2)] = null);
(statearr_15264_15300[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (4)))
{var inst_15205 = (state_15259[(13)]);var inst_15205__$1 = (state_15259[(2)]);var inst_15206 = (inst_15205__$1 == null);var state_15259__$1 = (function (){var statearr_15268 = state_15259;(statearr_15268[(13)] = inst_15205__$1);
return statearr_15268;
})();if(cljs.core.truth_(inst_15206))
{var statearr_15269_15301 = state_15259__$1;(statearr_15269_15301[(1)] = (5));
} else
{var statearr_15270_15302 = state_15259__$1;(statearr_15270_15302[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (15)))
{var state_15259__$1 = state_15259;var statearr_15271_15303 = state_15259__$1;(statearr_15271_15303[(2)] = null);
(statearr_15271_15303[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (13)))
{var inst_15219 = (state_15259[(8)]);var inst_15216 = (state_15259[(9)]);var inst_15218 = (state_15259[(11)]);var inst_15217 = (state_15259[(12)]);var inst_15226 = (state_15259[(2)]);var inst_15227 = (inst_15219 + (1));var tmp15265 = inst_15216;var tmp15266 = inst_15218;var tmp15267 = inst_15217;var inst_15216__$1 = tmp15265;var inst_15217__$1 = tmp15267;var inst_15218__$1 = tmp15266;var inst_15219__$1 = inst_15227;var state_15259__$1 = (function (){var statearr_15272 = state_15259;(statearr_15272[(8)] = inst_15219__$1);
(statearr_15272[(9)] = inst_15216__$1);
(statearr_15272[(11)] = inst_15218__$1);
(statearr_15272[(14)] = inst_15226);
(statearr_15272[(12)] = inst_15217__$1);
return statearr_15272;
})();var statearr_15273_15304 = state_15259__$1;(statearr_15273_15304[(2)] = null);
(statearr_15273_15304[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (6)))
{var inst_15205 = (state_15259[(13)]);var inst_15210 = f.call(null,inst_15205);var inst_15215 = cljs.core.seq.call(null,inst_15210);var inst_15216 = inst_15215;var inst_15217 = null;var inst_15218 = (0);var inst_15219 = (0);var state_15259__$1 = (function (){var statearr_15274 = state_15259;(statearr_15274[(8)] = inst_15219);
(statearr_15274[(9)] = inst_15216);
(statearr_15274[(11)] = inst_15218);
(statearr_15274[(12)] = inst_15217);
return statearr_15274;
})();var statearr_15275_15305 = state_15259__$1;(statearr_15275_15305[(2)] = null);
(statearr_15275_15305[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (17)))
{var inst_15230 = (state_15259[(7)]);var inst_15234 = cljs.core.chunk_first.call(null,inst_15230);var inst_15235 = cljs.core.chunk_rest.call(null,inst_15230);var inst_15236 = cljs.core.count.call(null,inst_15234);var inst_15216 = inst_15235;var inst_15217 = inst_15234;var inst_15218 = inst_15236;var inst_15219 = (0);var state_15259__$1 = (function (){var statearr_15276 = state_15259;(statearr_15276[(8)] = inst_15219);
(statearr_15276[(9)] = inst_15216);
(statearr_15276[(11)] = inst_15218);
(statearr_15276[(12)] = inst_15217);
return statearr_15276;
})();var statearr_15277_15306 = state_15259__$1;(statearr_15277_15306[(2)] = null);
(statearr_15277_15306[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (3)))
{var inst_15257 = (state_15259[(2)]);var state_15259__$1 = state_15259;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15259__$1,inst_15257);
} else
{if((state_val_15260 === (12)))
{var inst_15250 = (state_15259[(2)]);var state_15259__$1 = state_15259;var statearr_15278_15307 = state_15259__$1;(statearr_15278_15307[(2)] = inst_15250);
(statearr_15278_15307[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (2)))
{var state_15259__$1 = state_15259;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15259__$1,(4),in$);
} else
{if((state_val_15260 === (19)))
{var inst_15245 = (state_15259[(2)]);var state_15259__$1 = state_15259;var statearr_15279_15308 = state_15259__$1;(statearr_15279_15308[(2)] = inst_15245);
(statearr_15279_15308[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (11)))
{var inst_15216 = (state_15259[(9)]);var inst_15230 = (state_15259[(7)]);var inst_15230__$1 = cljs.core.seq.call(null,inst_15216);var state_15259__$1 = (function (){var statearr_15280 = state_15259;(statearr_15280[(7)] = inst_15230__$1);
return statearr_15280;
})();if(inst_15230__$1)
{var statearr_15281_15309 = state_15259__$1;(statearr_15281_15309[(1)] = (14));
} else
{var statearr_15282_15310 = state_15259__$1;(statearr_15282_15310[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (9)))
{var inst_15252 = (state_15259[(2)]);var state_15259__$1 = (function (){var statearr_15283 = state_15259;(statearr_15283[(15)] = inst_15252);
return statearr_15283;
})();var statearr_15284_15311 = state_15259__$1;(statearr_15284_15311[(2)] = null);
(statearr_15284_15311[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (5)))
{var inst_15208 = cljs.core.async.close_BANG_.call(null,out);var state_15259__$1 = state_15259;var statearr_15285_15312 = state_15259__$1;(statearr_15285_15312[(2)] = inst_15208);
(statearr_15285_15312[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (14)))
{var inst_15230 = (state_15259[(7)]);var inst_15232 = cljs.core.chunked_seq_QMARK_.call(null,inst_15230);var state_15259__$1 = state_15259;if(inst_15232)
{var statearr_15286_15313 = state_15259__$1;(statearr_15286_15313[(1)] = (17));
} else
{var statearr_15287_15314 = state_15259__$1;(statearr_15287_15314[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (16)))
{var inst_15248 = (state_15259[(2)]);var state_15259__$1 = state_15259;var statearr_15288_15315 = state_15259__$1;(statearr_15288_15315[(2)] = inst_15248);
(statearr_15288_15315[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15260 === (10)))
{var inst_15219 = (state_15259[(8)]);var inst_15217 = (state_15259[(12)]);var inst_15224 = cljs.core._nth.call(null,inst_15217,inst_15219);var state_15259__$1 = state_15259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15259__$1,(13),out,inst_15224);
} else
{if((state_val_15260 === (18)))
{var inst_15230 = (state_15259[(7)]);var inst_15239 = cljs.core.first.call(null,inst_15230);var state_15259__$1 = state_15259;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15259__$1,(20),out,inst_15239);
} else
{if((state_val_15260 === (8)))
{var inst_15219 = (state_15259[(8)]);var inst_15218 = (state_15259[(11)]);var inst_15221 = (inst_15219 < inst_15218);var inst_15222 = inst_15221;var state_15259__$1 = state_15259;if(cljs.core.truth_(inst_15222))
{var statearr_15289_15316 = state_15259__$1;(statearr_15289_15316[(1)] = (10));
} else
{var statearr_15290_15317 = state_15259__$1;(statearr_15290_15317[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_15294 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15294[(0)] = state_machine__5679__auto__);
(statearr_15294[(1)] = (1));
return statearr_15294;
});
var state_machine__5679__auto____1 = (function (state_15259){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15259);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15295){if((e15295 instanceof Object))
{var ex__5682__auto__ = e15295;var statearr_15296_15318 = state_15259;(statearr_15296_15318[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15259);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15319 = state_15259;
state_15259 = G__15319;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15259){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15259);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15297 = f__5694__auto__.call(null);(statearr_15297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15297;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___15400 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15400){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15400){
return (function (state_15379){var state_val_15380 = (state_15379[(1)]);if((state_val_15380 === (7)))
{var inst_15375 = (state_15379[(2)]);var state_15379__$1 = state_15379;var statearr_15381_15401 = state_15379__$1;(statearr_15381_15401[(2)] = inst_15375);
(statearr_15381_15401[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (1)))
{var state_15379__$1 = state_15379;var statearr_15382_15402 = state_15379__$1;(statearr_15382_15402[(2)] = null);
(statearr_15382_15402[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (4)))
{var inst_15362 = (state_15379[(7)]);var inst_15362__$1 = (state_15379[(2)]);var inst_15363 = (inst_15362__$1 == null);var state_15379__$1 = (function (){var statearr_15383 = state_15379;(statearr_15383[(7)] = inst_15362__$1);
return statearr_15383;
})();if(cljs.core.truth_(inst_15363))
{var statearr_15384_15403 = state_15379__$1;(statearr_15384_15403[(1)] = (5));
} else
{var statearr_15385_15404 = state_15379__$1;(statearr_15385_15404[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (6)))
{var inst_15362 = (state_15379[(7)]);var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15379__$1,(11),to,inst_15362);
} else
{if((state_val_15380 === (3)))
{var inst_15377 = (state_15379[(2)]);var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15379__$1,inst_15377);
} else
{if((state_val_15380 === (2)))
{var state_15379__$1 = state_15379;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15379__$1,(4),from);
} else
{if((state_val_15380 === (11)))
{var inst_15372 = (state_15379[(2)]);var state_15379__$1 = (function (){var statearr_15386 = state_15379;(statearr_15386[(8)] = inst_15372);
return statearr_15386;
})();var statearr_15387_15405 = state_15379__$1;(statearr_15387_15405[(2)] = null);
(statearr_15387_15405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (9)))
{var state_15379__$1 = state_15379;var statearr_15388_15406 = state_15379__$1;(statearr_15388_15406[(2)] = null);
(statearr_15388_15406[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (5)))
{var state_15379__$1 = state_15379;if(cljs.core.truth_(close_QMARK_))
{var statearr_15389_15407 = state_15379__$1;(statearr_15389_15407[(1)] = (8));
} else
{var statearr_15390_15408 = state_15379__$1;(statearr_15390_15408[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (10)))
{var inst_15369 = (state_15379[(2)]);var state_15379__$1 = state_15379;var statearr_15391_15409 = state_15379__$1;(statearr_15391_15409[(2)] = inst_15369);
(statearr_15391_15409[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15380 === (8)))
{var inst_15366 = cljs.core.async.close_BANG_.call(null,to);var state_15379__$1 = state_15379;var statearr_15392_15410 = state_15379__$1;(statearr_15392_15410[(2)] = inst_15366);
(statearr_15392_15410[(1)] = (10));
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
});})(c__5693__auto___15400))
;return ((function (switch__5678__auto__,c__5693__auto___15400){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15396 = [null,null,null,null,null,null,null,null,null];(statearr_15396[(0)] = state_machine__5679__auto__);
(statearr_15396[(1)] = (1));
return statearr_15396;
});
var state_machine__5679__auto____1 = (function (state_15379){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15397){if((e15397 instanceof Object))
{var ex__5682__auto__ = e15397;var statearr_15398_15411 = state_15379;(statearr_15398_15411[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15379);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15412 = state_15379;
state_15379 = G__15412;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15379){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15400))
})();var state__5695__auto__ = (function (){var statearr_15399 = f__5694__auto__.call(null);(statearr_15399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15400);
return statearr_15399;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15400))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___15499 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___15499,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___15499,tc,fc){
return (function (state_15477){var state_val_15478 = (state_15477[(1)]);if((state_val_15478 === (7)))
{var inst_15473 = (state_15477[(2)]);var state_15477__$1 = state_15477;var statearr_15479_15500 = state_15477__$1;(statearr_15479_15500[(2)] = inst_15473);
(statearr_15479_15500[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15478 === (1)))
{var state_15477__$1 = state_15477;var statearr_15480_15501 = state_15477__$1;(statearr_15480_15501[(2)] = null);
(statearr_15480_15501[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15478 === (4)))
{var inst_15458 = (state_15477[(7)]);var inst_15458__$1 = (state_15477[(2)]);var inst_15459 = (inst_15458__$1 == null);var state_15477__$1 = (function (){var statearr_15481 = state_15477;(statearr_15481[(7)] = inst_15458__$1);
return statearr_15481;
})();if(cljs.core.truth_(inst_15459))
{var statearr_15482_15502 = state_15477__$1;(statearr_15482_15502[(1)] = (5));
} else
{var statearr_15483_15503 = state_15477__$1;(statearr_15483_15503[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15478 === (6)))
{var inst_15458 = (state_15477[(7)]);var inst_15464 = p.call(null,inst_15458);var state_15477__$1 = state_15477;if(cljs.core.truth_(inst_15464))
{var statearr_15484_15504 = state_15477__$1;(statearr_15484_15504[(1)] = (9));
} else
{var statearr_15485_15505 = state_15477__$1;(statearr_15485_15505[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15478 === (3)))
{var inst_15475 = (state_15477[(2)]);var state_15477__$1 = state_15477;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15477__$1,inst_15475);
} else
{if((state_val_15478 === (2)))
{var state_15477__$1 = state_15477;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15477__$1,(4),ch);
} else
{if((state_val_15478 === (11)))
{var inst_15458 = (state_15477[(7)]);var inst_15468 = (state_15477[(2)]);var state_15477__$1 = state_15477;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15477__$1,(8),inst_15468,inst_15458);
} else
{if((state_val_15478 === (9)))
{var state_15477__$1 = state_15477;var statearr_15486_15506 = state_15477__$1;(statearr_15486_15506[(2)] = tc);
(statearr_15486_15506[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15478 === (5)))
{var inst_15461 = cljs.core.async.close_BANG_.call(null,tc);var inst_15462 = cljs.core.async.close_BANG_.call(null,fc);var state_15477__$1 = (function (){var statearr_15487 = state_15477;(statearr_15487[(8)] = inst_15461);
return statearr_15487;
})();var statearr_15488_15507 = state_15477__$1;(statearr_15488_15507[(2)] = inst_15462);
(statearr_15488_15507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15478 === (10)))
{var state_15477__$1 = state_15477;var statearr_15489_15508 = state_15477__$1;(statearr_15489_15508[(2)] = fc);
(statearr_15489_15508[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15478 === (8)))
{var inst_15470 = (state_15477[(2)]);var state_15477__$1 = (function (){var statearr_15490 = state_15477;(statearr_15490[(9)] = inst_15470);
return statearr_15490;
})();var statearr_15491_15509 = state_15477__$1;(statearr_15491_15509[(2)] = null);
(statearr_15491_15509[(1)] = (2));
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
});})(c__5693__auto___15499,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___15499,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_15495 = [null,null,null,null,null,null,null,null,null,null];(statearr_15495[(0)] = state_machine__5679__auto__);
(statearr_15495[(1)] = (1));
return statearr_15495;
});
var state_machine__5679__auto____1 = (function (state_15477){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15477);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15496){if((e15496 instanceof Object))
{var ex__5682__auto__ = e15496;var statearr_15497_15510 = state_15477;(statearr_15497_15510[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15477);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15496;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15511 = state_15477;
state_15477 = G__15511;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15477){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15477);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___15499,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_15498 = f__5694__auto__.call(null);(statearr_15498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___15499);
return statearr_15498;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___15499,tc,fc))
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
return (function (state_15558){var state_val_15559 = (state_15558[(1)]);if((state_val_15559 === (7)))
{var inst_15554 = (state_15558[(2)]);var state_15558__$1 = state_15558;var statearr_15560_15576 = state_15558__$1;(statearr_15560_15576[(2)] = inst_15554);
(statearr_15560_15576[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (6)))
{var inst_15547 = (state_15558[(7)]);var inst_15544 = (state_15558[(8)]);var inst_15551 = f.call(null,inst_15544,inst_15547);var inst_15544__$1 = inst_15551;var state_15558__$1 = (function (){var statearr_15561 = state_15558;(statearr_15561[(8)] = inst_15544__$1);
return statearr_15561;
})();var statearr_15562_15577 = state_15558__$1;(statearr_15562_15577[(2)] = null);
(statearr_15562_15577[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (5)))
{var inst_15544 = (state_15558[(8)]);var state_15558__$1 = state_15558;var statearr_15563_15578 = state_15558__$1;(statearr_15563_15578[(2)] = inst_15544);
(statearr_15563_15578[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (4)))
{var inst_15547 = (state_15558[(7)]);var inst_15547__$1 = (state_15558[(2)]);var inst_15548 = (inst_15547__$1 == null);var state_15558__$1 = (function (){var statearr_15564 = state_15558;(statearr_15564[(7)] = inst_15547__$1);
return statearr_15564;
})();if(cljs.core.truth_(inst_15548))
{var statearr_15565_15579 = state_15558__$1;(statearr_15565_15579[(1)] = (5));
} else
{var statearr_15566_15580 = state_15558__$1;(statearr_15566_15580[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15559 === (3)))
{var inst_15556 = (state_15558[(2)]);var state_15558__$1 = state_15558;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15558__$1,inst_15556);
} else
{if((state_val_15559 === (2)))
{var state_15558__$1 = state_15558;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15558__$1,(4),ch);
} else
{if((state_val_15559 === (1)))
{var inst_15544 = init;var state_15558__$1 = (function (){var statearr_15567 = state_15558;(statearr_15567[(8)] = inst_15544);
return statearr_15567;
})();var statearr_15568_15581 = state_15558__$1;(statearr_15568_15581[(2)] = null);
(statearr_15568_15581[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_15572 = [null,null,null,null,null,null,null,null,null];(statearr_15572[(0)] = state_machine__5679__auto__);
(statearr_15572[(1)] = (1));
return statearr_15572;
});
var state_machine__5679__auto____1 = (function (state_15558){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15558);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15573){if((e15573 instanceof Object))
{var ex__5682__auto__ = e15573;var statearr_15574_15582 = state_15558;(statearr_15574_15582[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15558);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15573;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15583 = state_15558;
state_15558 = G__15583;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15558){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15575 = f__5694__auto__.call(null);(statearr_15575[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15575;
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
return (function (state_15645){var state_val_15646 = (state_15645[(1)]);if((state_val_15646 === (7)))
{var inst_15626 = (state_15645[(7)]);var inst_15631 = (state_15645[(2)]);var inst_15632 = cljs.core.next.call(null,inst_15626);var inst_15626__$1 = inst_15632;var state_15645__$1 = (function (){var statearr_15647 = state_15645;(statearr_15647[(8)] = inst_15631);
(statearr_15647[(7)] = inst_15626__$1);
return statearr_15647;
})();var statearr_15648_15666 = state_15645__$1;(statearr_15648_15666[(2)] = null);
(statearr_15648_15666[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15646 === (1)))
{var inst_15625 = cljs.core.seq.call(null,coll);var inst_15626 = inst_15625;var state_15645__$1 = (function (){var statearr_15649 = state_15645;(statearr_15649[(7)] = inst_15626);
return statearr_15649;
})();var statearr_15650_15667 = state_15645__$1;(statearr_15650_15667[(2)] = null);
(statearr_15650_15667[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15646 === (4)))
{var inst_15626 = (state_15645[(7)]);var inst_15629 = cljs.core.first.call(null,inst_15626);var state_15645__$1 = state_15645;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15645__$1,(7),ch,inst_15629);
} else
{if((state_val_15646 === (6)))
{var inst_15641 = (state_15645[(2)]);var state_15645__$1 = state_15645;var statearr_15651_15668 = state_15645__$1;(statearr_15651_15668[(2)] = inst_15641);
(statearr_15651_15668[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15646 === (3)))
{var inst_15643 = (state_15645[(2)]);var state_15645__$1 = state_15645;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15645__$1,inst_15643);
} else
{if((state_val_15646 === (2)))
{var inst_15626 = (state_15645[(7)]);var state_15645__$1 = state_15645;if(cljs.core.truth_(inst_15626))
{var statearr_15652_15669 = state_15645__$1;(statearr_15652_15669[(1)] = (4));
} else
{var statearr_15653_15670 = state_15645__$1;(statearr_15653_15670[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15646 === (9)))
{var state_15645__$1 = state_15645;var statearr_15654_15671 = state_15645__$1;(statearr_15654_15671[(2)] = null);
(statearr_15654_15671[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15646 === (5)))
{var state_15645__$1 = state_15645;if(cljs.core.truth_(close_QMARK_))
{var statearr_15655_15672 = state_15645__$1;(statearr_15655_15672[(1)] = (8));
} else
{var statearr_15656_15673 = state_15645__$1;(statearr_15656_15673[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15646 === (10)))
{var inst_15639 = (state_15645[(2)]);var state_15645__$1 = state_15645;var statearr_15657_15674 = state_15645__$1;(statearr_15657_15674[(2)] = inst_15639);
(statearr_15657_15674[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_15646 === (8)))
{var inst_15636 = cljs.core.async.close_BANG_.call(null,ch);var state_15645__$1 = state_15645;var statearr_15658_15675 = state_15645__$1;(statearr_15658_15675[(2)] = inst_15636);
(statearr_15658_15675[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_15662 = [null,null,null,null,null,null,null,null,null];(statearr_15662[(0)] = state_machine__5679__auto__);
(statearr_15662[(1)] = (1));
return statearr_15662;
});
var state_machine__5679__auto____1 = (function (state_15645){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_15645);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e15663){if((e15663 instanceof Object))
{var ex__5682__auto__ = e15663;var statearr_15664_15676 = state_15645;(statearr_15664_15676[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15645);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e15663;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__15677 = state_15645;
state_15645 = G__15677;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_15645){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_15645);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_15665 = f__5694__auto__.call(null);(statearr_15665[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_15665;
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
cljs.core.async.Mux = (function (){var obj15679 = {};return obj15679;
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
cljs.core.async.Mult = (function (){var obj15681 = {};return obj15681;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t15905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15905 = (function (cs,ch,mult,meta15906){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta15906 = meta15906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15905.cljs$lang$type = true;
cljs.core.async.t15905.cljs$lang$ctorStr = "cljs.core.async/t15905";
cljs.core.async.t15905.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t15905");
});})(cs))
;
cljs.core.async.t15905.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t15905.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t15905.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t15905.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t15905.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t15905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_15907){var self__ = this;
var _15907__$1 = this;return self__.meta15906;
});})(cs))
;
cljs.core.async.t15905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_15907,meta15906__$1){var self__ = this;
var _15907__$1 = this;return (new cljs.core.async.t15905(self__.cs,self__.ch,self__.mult,meta15906__$1));
});})(cs))
;
cljs.core.async.__GT_t15905 = ((function (cs){
return (function __GT_t15905(cs__$1,ch__$1,mult__$1,meta15906){return (new cljs.core.async.t15905(cs__$1,ch__$1,mult__$1,meta15906));
});})(cs))
;
}
return (new cljs.core.async.t15905(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___16128 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16128,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16128,cs,m,dchan,dctr,done){
return (function (state_16042){var state_val_16043 = (state_16042[(1)]);if((state_val_16043 === (7)))
{var inst_16038 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16044_16129 = state_16042__$1;(statearr_16044_16129[(2)] = inst_16038);
(statearr_16044_16129[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (20)))
{var inst_15939 = (state_16042[(7)]);var inst_15949 = cljs.core.first.call(null,inst_15939);var inst_15950 = cljs.core.nth.call(null,inst_15949,(0),null);var inst_15951 = cljs.core.nth.call(null,inst_15949,(1),null);var state_16042__$1 = (function (){var statearr_16045 = state_16042;(statearr_16045[(8)] = inst_15950);
return statearr_16045;
})();if(cljs.core.truth_(inst_15951))
{var statearr_16046_16130 = state_16042__$1;(statearr_16046_16130[(1)] = (22));
} else
{var statearr_16047_16131 = state_16042__$1;(statearr_16047_16131[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (27)))
{var inst_15981 = (state_16042[(9)]);var inst_15979 = (state_16042[(10)]);var inst_15986 = cljs.core._nth.call(null,inst_15979,inst_15981);var state_16042__$1 = (function (){var statearr_16048 = state_16042;(statearr_16048[(11)] = inst_15986);
return statearr_16048;
})();var statearr_16049_16132 = state_16042__$1;(statearr_16049_16132[(2)] = null);
(statearr_16049_16132[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (1)))
{var state_16042__$1 = state_16042;var statearr_16050_16133 = state_16042__$1;(statearr_16050_16133[(2)] = null);
(statearr_16050_16133[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (24)))
{var inst_15939 = (state_16042[(7)]);var inst_15956 = (state_16042[(2)]);var inst_15957 = cljs.core.next.call(null,inst_15939);var inst_15919 = inst_15957;var inst_15920 = null;var inst_15921 = (0);var inst_15922 = (0);var state_16042__$1 = (function (){var statearr_16051 = state_16042;(statearr_16051[(12)] = inst_15920);
(statearr_16051[(13)] = inst_15919);
(statearr_16051[(14)] = inst_15922);
(statearr_16051[(15)] = inst_15921);
(statearr_16051[(16)] = inst_15956);
return statearr_16051;
})();var statearr_16052_16134 = state_16042__$1;(statearr_16052_16134[(2)] = null);
(statearr_16052_16134[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (39)))
{var inst_15999 = (state_16042[(17)]);var inst_16017 = (state_16042[(2)]);var inst_16018 = cljs.core.next.call(null,inst_15999);var inst_15978 = inst_16018;var inst_15979 = null;var inst_15980 = (0);var inst_15981 = (0);var state_16042__$1 = (function (){var statearr_16056 = state_16042;(statearr_16056[(18)] = inst_15978);
(statearr_16056[(19)] = inst_15980);
(statearr_16056[(20)] = inst_16017);
(statearr_16056[(9)] = inst_15981);
(statearr_16056[(10)] = inst_15979);
return statearr_16056;
})();var statearr_16057_16135 = state_16042__$1;(statearr_16057_16135[(2)] = null);
(statearr_16057_16135[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (4)))
{var inst_15910 = (state_16042[(21)]);var inst_15910__$1 = (state_16042[(2)]);var inst_15911 = (inst_15910__$1 == null);var state_16042__$1 = (function (){var statearr_16058 = state_16042;(statearr_16058[(21)] = inst_15910__$1);
return statearr_16058;
})();if(cljs.core.truth_(inst_15911))
{var statearr_16059_16136 = state_16042__$1;(statearr_16059_16136[(1)] = (5));
} else
{var statearr_16060_16137 = state_16042__$1;(statearr_16060_16137[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (15)))
{var inst_15920 = (state_16042[(12)]);var inst_15919 = (state_16042[(13)]);var inst_15922 = (state_16042[(14)]);var inst_15921 = (state_16042[(15)]);var inst_15935 = (state_16042[(2)]);var inst_15936 = (inst_15922 + (1));var tmp16053 = inst_15920;var tmp16054 = inst_15919;var tmp16055 = inst_15921;var inst_15919__$1 = tmp16054;var inst_15920__$1 = tmp16053;var inst_15921__$1 = tmp16055;var inst_15922__$1 = inst_15936;var state_16042__$1 = (function (){var statearr_16061 = state_16042;(statearr_16061[(12)] = inst_15920__$1);
(statearr_16061[(13)] = inst_15919__$1);
(statearr_16061[(22)] = inst_15935);
(statearr_16061[(14)] = inst_15922__$1);
(statearr_16061[(15)] = inst_15921__$1);
return statearr_16061;
})();var statearr_16062_16138 = state_16042__$1;(statearr_16062_16138[(2)] = null);
(statearr_16062_16138[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (21)))
{var inst_15960 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16063_16139 = state_16042__$1;(statearr_16063_16139[(2)] = inst_15960);
(statearr_16063_16139[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (31)))
{var inst_15986 = (state_16042[(11)]);var inst_15987 = (state_16042[(2)]);var inst_15988 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15989 = cljs.core.async.untap_STAR_.call(null,m,inst_15986);var state_16042__$1 = (function (){var statearr_16064 = state_16042;(statearr_16064[(23)] = inst_15987);
(statearr_16064[(24)] = inst_15988);
return statearr_16064;
})();var statearr_16065_16140 = state_16042__$1;(statearr_16065_16140[(2)] = inst_15989);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16042__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (32)))
{var inst_15910 = (state_16042[(21)]);var inst_15986 = (state_16042[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16042,(31),Object,null,(30));var inst_15993 = cljs.core.async.put_BANG_.call(null,inst_15986,inst_15910,done);var state_16042__$1 = state_16042;var statearr_16066_16141 = state_16042__$1;(statearr_16066_16141[(2)] = inst_15993);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16042__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (40)))
{var inst_16008 = (state_16042[(25)]);var inst_16009 = (state_16042[(2)]);var inst_16010 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16011 = cljs.core.async.untap_STAR_.call(null,m,inst_16008);var state_16042__$1 = (function (){var statearr_16067 = state_16042;(statearr_16067[(26)] = inst_16010);
(statearr_16067[(27)] = inst_16009);
return statearr_16067;
})();var statearr_16068_16142 = state_16042__$1;(statearr_16068_16142[(2)] = inst_16011);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16042__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (33)))
{var inst_15999 = (state_16042[(17)]);var inst_16001 = cljs.core.chunked_seq_QMARK_.call(null,inst_15999);var state_16042__$1 = state_16042;if(inst_16001)
{var statearr_16069_16143 = state_16042__$1;(statearr_16069_16143[(1)] = (36));
} else
{var statearr_16070_16144 = state_16042__$1;(statearr_16070_16144[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (13)))
{var inst_15929 = (state_16042[(28)]);var inst_15932 = cljs.core.async.close_BANG_.call(null,inst_15929);var state_16042__$1 = state_16042;var statearr_16071_16145 = state_16042__$1;(statearr_16071_16145[(2)] = inst_15932);
(statearr_16071_16145[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (22)))
{var inst_15950 = (state_16042[(8)]);var inst_15953 = cljs.core.async.close_BANG_.call(null,inst_15950);var state_16042__$1 = state_16042;var statearr_16072_16146 = state_16042__$1;(statearr_16072_16146[(2)] = inst_15953);
(statearr_16072_16146[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (36)))
{var inst_15999 = (state_16042[(17)]);var inst_16003 = cljs.core.chunk_first.call(null,inst_15999);var inst_16004 = cljs.core.chunk_rest.call(null,inst_15999);var inst_16005 = cljs.core.count.call(null,inst_16003);var inst_15978 = inst_16004;var inst_15979 = inst_16003;var inst_15980 = inst_16005;var inst_15981 = (0);var state_16042__$1 = (function (){var statearr_16073 = state_16042;(statearr_16073[(18)] = inst_15978);
(statearr_16073[(19)] = inst_15980);
(statearr_16073[(9)] = inst_15981);
(statearr_16073[(10)] = inst_15979);
return statearr_16073;
})();var statearr_16074_16147 = state_16042__$1;(statearr_16074_16147[(2)] = null);
(statearr_16074_16147[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (41)))
{var inst_15910 = (state_16042[(21)]);var inst_16008 = (state_16042[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16042,(40),Object,null,(39));var inst_16015 = cljs.core.async.put_BANG_.call(null,inst_16008,inst_15910,done);var state_16042__$1 = state_16042;var statearr_16075_16148 = state_16042__$1;(statearr_16075_16148[(2)] = inst_16015);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16042__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (43)))
{var state_16042__$1 = state_16042;var statearr_16076_16149 = state_16042__$1;(statearr_16076_16149[(2)] = null);
(statearr_16076_16149[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (29)))
{var inst_16026 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16077_16150 = state_16042__$1;(statearr_16077_16150[(2)] = inst_16026);
(statearr_16077_16150[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (44)))
{var inst_16035 = (state_16042[(2)]);var state_16042__$1 = (function (){var statearr_16078 = state_16042;(statearr_16078[(29)] = inst_16035);
return statearr_16078;
})();var statearr_16079_16151 = state_16042__$1;(statearr_16079_16151[(2)] = null);
(statearr_16079_16151[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (6)))
{var inst_15970 = (state_16042[(30)]);var inst_15969 = cljs.core.deref.call(null,cs);var inst_15970__$1 = cljs.core.keys.call(null,inst_15969);var inst_15971 = cljs.core.count.call(null,inst_15970__$1);var inst_15972 = cljs.core.reset_BANG_.call(null,dctr,inst_15971);var inst_15977 = cljs.core.seq.call(null,inst_15970__$1);var inst_15978 = inst_15977;var inst_15979 = null;var inst_15980 = (0);var inst_15981 = (0);var state_16042__$1 = (function (){var statearr_16080 = state_16042;(statearr_16080[(30)] = inst_15970__$1);
(statearr_16080[(18)] = inst_15978);
(statearr_16080[(19)] = inst_15980);
(statearr_16080[(9)] = inst_15981);
(statearr_16080[(10)] = inst_15979);
(statearr_16080[(31)] = inst_15972);
return statearr_16080;
})();var statearr_16081_16152 = state_16042__$1;(statearr_16081_16152[(2)] = null);
(statearr_16081_16152[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (28)))
{var inst_15978 = (state_16042[(18)]);var inst_15999 = (state_16042[(17)]);var inst_15999__$1 = cljs.core.seq.call(null,inst_15978);var state_16042__$1 = (function (){var statearr_16082 = state_16042;(statearr_16082[(17)] = inst_15999__$1);
return statearr_16082;
})();if(inst_15999__$1)
{var statearr_16083_16153 = state_16042__$1;(statearr_16083_16153[(1)] = (33));
} else
{var statearr_16084_16154 = state_16042__$1;(statearr_16084_16154[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (25)))
{var inst_15980 = (state_16042[(19)]);var inst_15981 = (state_16042[(9)]);var inst_15983 = (inst_15981 < inst_15980);var inst_15984 = inst_15983;var state_16042__$1 = state_16042;if(cljs.core.truth_(inst_15984))
{var statearr_16085_16155 = state_16042__$1;(statearr_16085_16155[(1)] = (27));
} else
{var statearr_16086_16156 = state_16042__$1;(statearr_16086_16156[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (34)))
{var state_16042__$1 = state_16042;var statearr_16087_16157 = state_16042__$1;(statearr_16087_16157[(2)] = null);
(statearr_16087_16157[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (17)))
{var state_16042__$1 = state_16042;var statearr_16088_16158 = state_16042__$1;(statearr_16088_16158[(2)] = null);
(statearr_16088_16158[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (3)))
{var inst_16040 = (state_16042[(2)]);var state_16042__$1 = state_16042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16042__$1,inst_16040);
} else
{if((state_val_16043 === (12)))
{var inst_15965 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16089_16159 = state_16042__$1;(statearr_16089_16159[(2)] = inst_15965);
(statearr_16089_16159[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (2)))
{var state_16042__$1 = state_16042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16042__$1,(4),ch);
} else
{if((state_val_16043 === (23)))
{var state_16042__$1 = state_16042;var statearr_16090_16160 = state_16042__$1;(statearr_16090_16160[(2)] = null);
(statearr_16090_16160[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (35)))
{var inst_16024 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16091_16161 = state_16042__$1;(statearr_16091_16161[(2)] = inst_16024);
(statearr_16091_16161[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (19)))
{var inst_15939 = (state_16042[(7)]);var inst_15943 = cljs.core.chunk_first.call(null,inst_15939);var inst_15944 = cljs.core.chunk_rest.call(null,inst_15939);var inst_15945 = cljs.core.count.call(null,inst_15943);var inst_15919 = inst_15944;var inst_15920 = inst_15943;var inst_15921 = inst_15945;var inst_15922 = (0);var state_16042__$1 = (function (){var statearr_16092 = state_16042;(statearr_16092[(12)] = inst_15920);
(statearr_16092[(13)] = inst_15919);
(statearr_16092[(14)] = inst_15922);
(statearr_16092[(15)] = inst_15921);
return statearr_16092;
})();var statearr_16093_16162 = state_16042__$1;(statearr_16093_16162[(2)] = null);
(statearr_16093_16162[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (11)))
{var inst_15919 = (state_16042[(13)]);var inst_15939 = (state_16042[(7)]);var inst_15939__$1 = cljs.core.seq.call(null,inst_15919);var state_16042__$1 = (function (){var statearr_16094 = state_16042;(statearr_16094[(7)] = inst_15939__$1);
return statearr_16094;
})();if(inst_15939__$1)
{var statearr_16095_16163 = state_16042__$1;(statearr_16095_16163[(1)] = (16));
} else
{var statearr_16096_16164 = state_16042__$1;(statearr_16096_16164[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (9)))
{var inst_15967 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16097_16165 = state_16042__$1;(statearr_16097_16165[(2)] = inst_15967);
(statearr_16097_16165[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (5)))
{var inst_15917 = cljs.core.deref.call(null,cs);var inst_15918 = cljs.core.seq.call(null,inst_15917);var inst_15919 = inst_15918;var inst_15920 = null;var inst_15921 = (0);var inst_15922 = (0);var state_16042__$1 = (function (){var statearr_16098 = state_16042;(statearr_16098[(12)] = inst_15920);
(statearr_16098[(13)] = inst_15919);
(statearr_16098[(14)] = inst_15922);
(statearr_16098[(15)] = inst_15921);
return statearr_16098;
})();var statearr_16099_16166 = state_16042__$1;(statearr_16099_16166[(2)] = null);
(statearr_16099_16166[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (14)))
{var state_16042__$1 = state_16042;var statearr_16100_16167 = state_16042__$1;(statearr_16100_16167[(2)] = null);
(statearr_16100_16167[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (45)))
{var inst_16032 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16101_16168 = state_16042__$1;(statearr_16101_16168[(2)] = inst_16032);
(statearr_16101_16168[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (26)))
{var inst_15970 = (state_16042[(30)]);var inst_16028 = (state_16042[(2)]);var inst_16029 = cljs.core.seq.call(null,inst_15970);var state_16042__$1 = (function (){var statearr_16102 = state_16042;(statearr_16102[(32)] = inst_16028);
return statearr_16102;
})();if(inst_16029)
{var statearr_16103_16169 = state_16042__$1;(statearr_16103_16169[(1)] = (42));
} else
{var statearr_16104_16170 = state_16042__$1;(statearr_16104_16170[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (16)))
{var inst_15939 = (state_16042[(7)]);var inst_15941 = cljs.core.chunked_seq_QMARK_.call(null,inst_15939);var state_16042__$1 = state_16042;if(inst_15941)
{var statearr_16108_16171 = state_16042__$1;(statearr_16108_16171[(1)] = (19));
} else
{var statearr_16109_16172 = state_16042__$1;(statearr_16109_16172[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (38)))
{var inst_16021 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16110_16173 = state_16042__$1;(statearr_16110_16173[(2)] = inst_16021);
(statearr_16110_16173[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (30)))
{var inst_15978 = (state_16042[(18)]);var inst_15980 = (state_16042[(19)]);var inst_15981 = (state_16042[(9)]);var inst_15979 = (state_16042[(10)]);var inst_15995 = (state_16042[(2)]);var inst_15996 = (inst_15981 + (1));var tmp16105 = inst_15978;var tmp16106 = inst_15980;var tmp16107 = inst_15979;var inst_15978__$1 = tmp16105;var inst_15979__$1 = tmp16107;var inst_15980__$1 = tmp16106;var inst_15981__$1 = inst_15996;var state_16042__$1 = (function (){var statearr_16111 = state_16042;(statearr_16111[(18)] = inst_15978__$1);
(statearr_16111[(19)] = inst_15980__$1);
(statearr_16111[(9)] = inst_15981__$1);
(statearr_16111[(33)] = inst_15995);
(statearr_16111[(10)] = inst_15979__$1);
return statearr_16111;
})();var statearr_16112_16174 = state_16042__$1;(statearr_16112_16174[(2)] = null);
(statearr_16112_16174[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (10)))
{var inst_15920 = (state_16042[(12)]);var inst_15922 = (state_16042[(14)]);var inst_15928 = cljs.core._nth.call(null,inst_15920,inst_15922);var inst_15929 = cljs.core.nth.call(null,inst_15928,(0),null);var inst_15930 = cljs.core.nth.call(null,inst_15928,(1),null);var state_16042__$1 = (function (){var statearr_16113 = state_16042;(statearr_16113[(28)] = inst_15929);
return statearr_16113;
})();if(cljs.core.truth_(inst_15930))
{var statearr_16114_16175 = state_16042__$1;(statearr_16114_16175[(1)] = (13));
} else
{var statearr_16115_16176 = state_16042__$1;(statearr_16115_16176[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (18)))
{var inst_15963 = (state_16042[(2)]);var state_16042__$1 = state_16042;var statearr_16116_16177 = state_16042__$1;(statearr_16116_16177[(2)] = inst_15963);
(statearr_16116_16177[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (42)))
{var state_16042__$1 = state_16042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16042__$1,(45),dchan);
} else
{if((state_val_16043 === (37)))
{var inst_15999 = (state_16042[(17)]);var inst_16008 = cljs.core.first.call(null,inst_15999);var state_16042__$1 = (function (){var statearr_16117 = state_16042;(statearr_16117[(25)] = inst_16008);
return statearr_16117;
})();var statearr_16118_16178 = state_16042__$1;(statearr_16118_16178[(2)] = null);
(statearr_16118_16178[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16043 === (8)))
{var inst_15922 = (state_16042[(14)]);var inst_15921 = (state_16042[(15)]);var inst_15924 = (inst_15922 < inst_15921);var inst_15925 = inst_15924;var state_16042__$1 = state_16042;if(cljs.core.truth_(inst_15925))
{var statearr_16119_16179 = state_16042__$1;(statearr_16119_16179[(1)] = (10));
} else
{var statearr_16120_16180 = state_16042__$1;(statearr_16120_16180[(1)] = (11));
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
});})(c__5693__auto___16128,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16128,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16124 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16124[(0)] = state_machine__5679__auto__);
(statearr_16124[(1)] = (1));
return statearr_16124;
});
var state_machine__5679__auto____1 = (function (state_16042){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16125){if((e16125 instanceof Object))
{var ex__5682__auto__ = e16125;var statearr_16126_16181 = state_16042;(statearr_16126_16181[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16042);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16125;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16182 = state_16042;
state_16042 = G__16182;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16042){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16128,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16127 = f__5694__auto__.call(null);(statearr_16127[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16128);
return statearr_16127;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16128,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj16184 = {};return obj16184;
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
;var m = (function (){if(typeof cljs.core.async.t16294 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16294 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta16295){
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
this.meta16295 = meta16295;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16294.cljs$lang$type = true;
cljs.core.async.t16294.cljs$lang$ctorStr = "cljs.core.async/t16294";
cljs.core.async.t16294.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16294");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16294.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16294.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16294.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16294.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16294.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16294.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16294.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16294.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16294.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16296){var self__ = this;
var _16296__$1 = this;return self__.meta16295;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16296,meta16295__$1){var self__ = this;
var _16296__$1 = this;return (new cljs.core.async.t16294(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta16295__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16294 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16294(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16295){return (new cljs.core.async.t16294(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta16295));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16294(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___16403 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_16361){var state_val_16362 = (state_16361[(1)]);if((state_val_16362 === (7)))
{var inst_16310 = (state_16361[(7)]);var inst_16315 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16310);var state_16361__$1 = state_16361;var statearr_16363_16404 = state_16361__$1;(statearr_16363_16404[(2)] = inst_16315);
(statearr_16363_16404[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (20)))
{var inst_16325 = (state_16361[(8)]);var state_16361__$1 = state_16361;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16361__$1,(23),out,inst_16325);
} else
{if((state_val_16362 === (1)))
{var inst_16300 = (state_16361[(9)]);var inst_16300__$1 = calc_state.call(null);var inst_16301 = cljs.core.seq_QMARK_.call(null,inst_16300__$1);var state_16361__$1 = (function (){var statearr_16364 = state_16361;(statearr_16364[(9)] = inst_16300__$1);
return statearr_16364;
})();if(inst_16301)
{var statearr_16365_16405 = state_16361__$1;(statearr_16365_16405[(1)] = (2));
} else
{var statearr_16366_16406 = state_16361__$1;(statearr_16366_16406[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (4)))
{var inst_16300 = (state_16361[(9)]);var inst_16306 = (state_16361[(2)]);var inst_16307 = cljs.core.get.call(null,inst_16306,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16308 = cljs.core.get.call(null,inst_16306,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16309 = cljs.core.get.call(null,inst_16306,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_16310 = inst_16300;var state_16361__$1 = (function (){var statearr_16367 = state_16361;(statearr_16367[(10)] = inst_16309);
(statearr_16367[(11)] = inst_16308);
(statearr_16367[(7)] = inst_16310);
(statearr_16367[(12)] = inst_16307);
return statearr_16367;
})();var statearr_16368_16407 = state_16361__$1;(statearr_16368_16407[(2)] = null);
(statearr_16368_16407[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (15)))
{var state_16361__$1 = state_16361;var statearr_16369_16408 = state_16361__$1;(statearr_16369_16408[(2)] = null);
(statearr_16369_16408[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (21)))
{var state_16361__$1 = state_16361;var statearr_16370_16409 = state_16361__$1;(statearr_16370_16409[(2)] = null);
(statearr_16370_16409[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (13)))
{var inst_16357 = (state_16361[(2)]);var state_16361__$1 = state_16361;var statearr_16371_16410 = state_16361__$1;(statearr_16371_16410[(2)] = inst_16357);
(statearr_16371_16410[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (22)))
{var inst_16318 = (state_16361[(13)]);var inst_16354 = (state_16361[(2)]);var inst_16310 = inst_16318;var state_16361__$1 = (function (){var statearr_16372 = state_16361;(statearr_16372[(14)] = inst_16354);
(statearr_16372[(7)] = inst_16310);
return statearr_16372;
})();var statearr_16373_16411 = state_16361__$1;(statearr_16373_16411[(2)] = null);
(statearr_16373_16411[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (6)))
{var inst_16359 = (state_16361[(2)]);var state_16361__$1 = state_16361;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16361__$1,inst_16359);
} else
{if((state_val_16362 === (17)))
{var inst_16340 = (state_16361[(15)]);var state_16361__$1 = state_16361;var statearr_16374_16412 = state_16361__$1;(statearr_16374_16412[(2)] = inst_16340);
(statearr_16374_16412[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (3)))
{var inst_16300 = (state_16361[(9)]);var state_16361__$1 = state_16361;var statearr_16375_16413 = state_16361__$1;(statearr_16375_16413[(2)] = inst_16300);
(statearr_16375_16413[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (12)))
{var inst_16321 = (state_16361[(16)]);var inst_16340 = (state_16361[(15)]);var inst_16326 = (state_16361[(17)]);var inst_16340__$1 = inst_16321.call(null,inst_16326);var state_16361__$1 = (function (){var statearr_16376 = state_16361;(statearr_16376[(15)] = inst_16340__$1);
return statearr_16376;
})();if(cljs.core.truth_(inst_16340__$1))
{var statearr_16377_16414 = state_16361__$1;(statearr_16377_16414[(1)] = (17));
} else
{var statearr_16378_16415 = state_16361__$1;(statearr_16378_16415[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (2)))
{var inst_16300 = (state_16361[(9)]);var inst_16303 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16300);var state_16361__$1 = state_16361;var statearr_16379_16416 = state_16361__$1;(statearr_16379_16416[(2)] = inst_16303);
(statearr_16379_16416[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (23)))
{var inst_16351 = (state_16361[(2)]);var state_16361__$1 = state_16361;var statearr_16380_16417 = state_16361__$1;(statearr_16380_16417[(2)] = inst_16351);
(statearr_16380_16417[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (19)))
{var inst_16348 = (state_16361[(2)]);var state_16361__$1 = state_16361;if(cljs.core.truth_(inst_16348))
{var statearr_16381_16418 = state_16361__$1;(statearr_16381_16418[(1)] = (20));
} else
{var statearr_16382_16419 = state_16361__$1;(statearr_16382_16419[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (11)))
{var inst_16325 = (state_16361[(8)]);var inst_16331 = (inst_16325 == null);var state_16361__$1 = state_16361;if(cljs.core.truth_(inst_16331))
{var statearr_16383_16420 = state_16361__$1;(statearr_16383_16420[(1)] = (14));
} else
{var statearr_16384_16421 = state_16361__$1;(statearr_16384_16421[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (9)))
{var inst_16318 = (state_16361[(13)]);var inst_16318__$1 = (state_16361[(2)]);var inst_16319 = cljs.core.get.call(null,inst_16318__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_16320 = cljs.core.get.call(null,inst_16318__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_16321 = cljs.core.get.call(null,inst_16318__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_16361__$1 = (function (){var statearr_16385 = state_16361;(statearr_16385[(16)] = inst_16321);
(statearr_16385[(13)] = inst_16318__$1);
(statearr_16385[(18)] = inst_16320);
return statearr_16385;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16361__$1,(10),inst_16319);
} else
{if((state_val_16362 === (5)))
{var inst_16310 = (state_16361[(7)]);var inst_16313 = cljs.core.seq_QMARK_.call(null,inst_16310);var state_16361__$1 = state_16361;if(inst_16313)
{var statearr_16386_16422 = state_16361__$1;(statearr_16386_16422[(1)] = (7));
} else
{var statearr_16387_16423 = state_16361__$1;(statearr_16387_16423[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (14)))
{var inst_16326 = (state_16361[(17)]);var inst_16333 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16326);var state_16361__$1 = state_16361;var statearr_16388_16424 = state_16361__$1;(statearr_16388_16424[(2)] = inst_16333);
(statearr_16388_16424[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (16)))
{var inst_16336 = (state_16361[(2)]);var inst_16337 = calc_state.call(null);var inst_16310 = inst_16337;var state_16361__$1 = (function (){var statearr_16389 = state_16361;(statearr_16389[(19)] = inst_16336);
(statearr_16389[(7)] = inst_16310);
return statearr_16389;
})();var statearr_16390_16425 = state_16361__$1;(statearr_16390_16425[(2)] = null);
(statearr_16390_16425[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (10)))
{var inst_16326 = (state_16361[(17)]);var inst_16325 = (state_16361[(8)]);var inst_16324 = (state_16361[(2)]);var inst_16325__$1 = cljs.core.nth.call(null,inst_16324,(0),null);var inst_16326__$1 = cljs.core.nth.call(null,inst_16324,(1),null);var inst_16327 = (inst_16325__$1 == null);var inst_16328 = cljs.core._EQ_.call(null,inst_16326__$1,change);var inst_16329 = (inst_16327) || (inst_16328);var state_16361__$1 = (function (){var statearr_16391 = state_16361;(statearr_16391[(17)] = inst_16326__$1);
(statearr_16391[(8)] = inst_16325__$1);
return statearr_16391;
})();if(cljs.core.truth_(inst_16329))
{var statearr_16392_16426 = state_16361__$1;(statearr_16392_16426[(1)] = (11));
} else
{var statearr_16393_16427 = state_16361__$1;(statearr_16393_16427[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (18)))
{var inst_16321 = (state_16361[(16)]);var inst_16326 = (state_16361[(17)]);var inst_16320 = (state_16361[(18)]);var inst_16343 = cljs.core.empty_QMARK_.call(null,inst_16321);var inst_16344 = inst_16320.call(null,inst_16326);var inst_16345 = cljs.core.not.call(null,inst_16344);var inst_16346 = (inst_16343) && (inst_16345);var state_16361__$1 = state_16361;var statearr_16394_16428 = state_16361__$1;(statearr_16394_16428[(2)] = inst_16346);
(statearr_16394_16428[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16362 === (8)))
{var inst_16310 = (state_16361[(7)]);var state_16361__$1 = state_16361;var statearr_16395_16429 = state_16361__$1;(statearr_16395_16429[(2)] = inst_16310);
(statearr_16395_16429[(1)] = (9));
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
});})(c__5693__auto___16403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___16403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16399[(0)] = state_machine__5679__auto__);
(statearr_16399[(1)] = (1));
return statearr_16399;
});
var state_machine__5679__auto____1 = (function (state_16361){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16361);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16400){if((e16400 instanceof Object))
{var ex__5682__auto__ = e16400;var statearr_16401_16430 = state_16361;(statearr_16401_16430[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16361);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16400;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16431 = state_16361;
state_16361 = G__16431;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16361){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16361);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_16402 = f__5694__auto__.call(null);(statearr_16402[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16403);
return statearr_16402;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16403,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj16433 = {};return obj16433;
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
return (function (p1__16434_SHARP_){if(cljs.core.truth_(p1__16434_SHARP_.call(null,topic)))
{return p1__16434_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16434_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16559 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16559 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16560){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16560 = meta16560;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16559.cljs$lang$type = true;
cljs.core.async.t16559.cljs$lang$ctorStr = "cljs.core.async/t16559";
cljs.core.async.t16559.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t16559");
});})(mults,ensure_mult))
;
cljs.core.async.t16559.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16559.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16559.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16559.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16559.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16559.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16559.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16559.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16561){var self__ = this;
var _16561__$1 = this;return self__.meta16560;
});})(mults,ensure_mult))
;
cljs.core.async.t16559.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16561,meta16560__$1){var self__ = this;
var _16561__$1 = this;return (new cljs.core.async.t16559(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16560__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16559 = ((function (mults,ensure_mult){
return (function __GT_t16559(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16560){return (new cljs.core.async.t16559(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16560));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16559(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___16683 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16683,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16683,mults,ensure_mult,p){
return (function (state_16635){var state_val_16636 = (state_16635[(1)]);if((state_val_16636 === (7)))
{var inst_16631 = (state_16635[(2)]);var state_16635__$1 = state_16635;var statearr_16637_16684 = state_16635__$1;(statearr_16637_16684[(2)] = inst_16631);
(statearr_16637_16684[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (20)))
{var state_16635__$1 = state_16635;var statearr_16638_16685 = state_16635__$1;(statearr_16638_16685[(2)] = null);
(statearr_16638_16685[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (1)))
{var state_16635__$1 = state_16635;var statearr_16639_16686 = state_16635__$1;(statearr_16639_16686[(2)] = null);
(statearr_16639_16686[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (24)))
{var inst_16614 = (state_16635[(7)]);var inst_16564 = (state_16635[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16635,(23),Object,null,(22));var inst_16621 = cljs.core.async.muxch_STAR_.call(null,inst_16614);var state_16635__$1 = state_16635;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16635__$1,(25),inst_16621,inst_16564);
} else
{if((state_val_16636 === (4)))
{var inst_16564 = (state_16635[(8)]);var inst_16564__$1 = (state_16635[(2)]);var inst_16565 = (inst_16564__$1 == null);var state_16635__$1 = (function (){var statearr_16640 = state_16635;(statearr_16640[(8)] = inst_16564__$1);
return statearr_16640;
})();if(cljs.core.truth_(inst_16565))
{var statearr_16641_16687 = state_16635__$1;(statearr_16641_16687[(1)] = (5));
} else
{var statearr_16642_16688 = state_16635__$1;(statearr_16642_16688[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (15)))
{var inst_16606 = (state_16635[(2)]);var state_16635__$1 = state_16635;var statearr_16643_16689 = state_16635__$1;(statearr_16643_16689[(2)] = inst_16606);
(statearr_16643_16689[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (21)))
{var inst_16628 = (state_16635[(2)]);var state_16635__$1 = (function (){var statearr_16644 = state_16635;(statearr_16644[(9)] = inst_16628);
return statearr_16644;
})();var statearr_16645_16690 = state_16635__$1;(statearr_16645_16690[(2)] = null);
(statearr_16645_16690[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (13)))
{var inst_16588 = (state_16635[(10)]);var inst_16590 = cljs.core.chunked_seq_QMARK_.call(null,inst_16588);var state_16635__$1 = state_16635;if(inst_16590)
{var statearr_16646_16691 = state_16635__$1;(statearr_16646_16691[(1)] = (16));
} else
{var statearr_16647_16692 = state_16635__$1;(statearr_16647_16692[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (22)))
{var inst_16625 = (state_16635[(2)]);var state_16635__$1 = state_16635;var statearr_16648_16693 = state_16635__$1;(statearr_16648_16693[(2)] = inst_16625);
(statearr_16648_16693[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (6)))
{var inst_16614 = (state_16635[(7)]);var inst_16564 = (state_16635[(8)]);var inst_16612 = (state_16635[(11)]);var inst_16612__$1 = topic_fn.call(null,inst_16564);var inst_16613 = cljs.core.deref.call(null,mults);var inst_16614__$1 = cljs.core.get.call(null,inst_16613,inst_16612__$1);var state_16635__$1 = (function (){var statearr_16649 = state_16635;(statearr_16649[(7)] = inst_16614__$1);
(statearr_16649[(11)] = inst_16612__$1);
return statearr_16649;
})();if(cljs.core.truth_(inst_16614__$1))
{var statearr_16650_16694 = state_16635__$1;(statearr_16650_16694[(1)] = (19));
} else
{var statearr_16651_16695 = state_16635__$1;(statearr_16651_16695[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (25)))
{var inst_16623 = (state_16635[(2)]);var state_16635__$1 = state_16635;var statearr_16652_16696 = state_16635__$1;(statearr_16652_16696[(2)] = inst_16623);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16635__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (17)))
{var inst_16588 = (state_16635[(10)]);var inst_16597 = cljs.core.first.call(null,inst_16588);var inst_16598 = cljs.core.async.muxch_STAR_.call(null,inst_16597);var inst_16599 = cljs.core.async.close_BANG_.call(null,inst_16598);var inst_16600 = cljs.core.next.call(null,inst_16588);var inst_16574 = inst_16600;var inst_16575 = null;var inst_16576 = (0);var inst_16577 = (0);var state_16635__$1 = (function (){var statearr_16653 = state_16635;(statearr_16653[(12)] = inst_16575);
(statearr_16653[(13)] = inst_16577);
(statearr_16653[(14)] = inst_16599);
(statearr_16653[(15)] = inst_16576);
(statearr_16653[(16)] = inst_16574);
return statearr_16653;
})();var statearr_16654_16697 = state_16635__$1;(statearr_16654_16697[(2)] = null);
(statearr_16654_16697[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (3)))
{var inst_16633 = (state_16635[(2)]);var state_16635__$1 = state_16635;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16635__$1,inst_16633);
} else
{if((state_val_16636 === (12)))
{var inst_16608 = (state_16635[(2)]);var state_16635__$1 = state_16635;var statearr_16655_16698 = state_16635__$1;(statearr_16655_16698[(2)] = inst_16608);
(statearr_16655_16698[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (2)))
{var state_16635__$1 = state_16635;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16635__$1,(4),ch);
} else
{if((state_val_16636 === (23)))
{var inst_16612 = (state_16635[(11)]);var inst_16616 = (state_16635[(2)]);var inst_16617 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16612);var state_16635__$1 = (function (){var statearr_16656 = state_16635;(statearr_16656[(17)] = inst_16616);
return statearr_16656;
})();var statearr_16657_16699 = state_16635__$1;(statearr_16657_16699[(2)] = inst_16617);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16635__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (19)))
{var state_16635__$1 = state_16635;var statearr_16658_16700 = state_16635__$1;(statearr_16658_16700[(2)] = null);
(statearr_16658_16700[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (11)))
{var inst_16574 = (state_16635[(16)]);var inst_16588 = (state_16635[(10)]);var inst_16588__$1 = cljs.core.seq.call(null,inst_16574);var state_16635__$1 = (function (){var statearr_16659 = state_16635;(statearr_16659[(10)] = inst_16588__$1);
return statearr_16659;
})();if(inst_16588__$1)
{var statearr_16660_16701 = state_16635__$1;(statearr_16660_16701[(1)] = (13));
} else
{var statearr_16661_16702 = state_16635__$1;(statearr_16661_16702[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (9)))
{var inst_16610 = (state_16635[(2)]);var state_16635__$1 = state_16635;var statearr_16662_16703 = state_16635__$1;(statearr_16662_16703[(2)] = inst_16610);
(statearr_16662_16703[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (5)))
{var inst_16571 = cljs.core.deref.call(null,mults);var inst_16572 = cljs.core.vals.call(null,inst_16571);var inst_16573 = cljs.core.seq.call(null,inst_16572);var inst_16574 = inst_16573;var inst_16575 = null;var inst_16576 = (0);var inst_16577 = (0);var state_16635__$1 = (function (){var statearr_16663 = state_16635;(statearr_16663[(12)] = inst_16575);
(statearr_16663[(13)] = inst_16577);
(statearr_16663[(15)] = inst_16576);
(statearr_16663[(16)] = inst_16574);
return statearr_16663;
})();var statearr_16664_16704 = state_16635__$1;(statearr_16664_16704[(2)] = null);
(statearr_16664_16704[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (14)))
{var state_16635__$1 = state_16635;var statearr_16668_16705 = state_16635__$1;(statearr_16668_16705[(2)] = null);
(statearr_16668_16705[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (16)))
{var inst_16588 = (state_16635[(10)]);var inst_16592 = cljs.core.chunk_first.call(null,inst_16588);var inst_16593 = cljs.core.chunk_rest.call(null,inst_16588);var inst_16594 = cljs.core.count.call(null,inst_16592);var inst_16574 = inst_16593;var inst_16575 = inst_16592;var inst_16576 = inst_16594;var inst_16577 = (0);var state_16635__$1 = (function (){var statearr_16669 = state_16635;(statearr_16669[(12)] = inst_16575);
(statearr_16669[(13)] = inst_16577);
(statearr_16669[(15)] = inst_16576);
(statearr_16669[(16)] = inst_16574);
return statearr_16669;
})();var statearr_16670_16706 = state_16635__$1;(statearr_16670_16706[(2)] = null);
(statearr_16670_16706[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (10)))
{var inst_16575 = (state_16635[(12)]);var inst_16577 = (state_16635[(13)]);var inst_16576 = (state_16635[(15)]);var inst_16574 = (state_16635[(16)]);var inst_16582 = cljs.core._nth.call(null,inst_16575,inst_16577);var inst_16583 = cljs.core.async.muxch_STAR_.call(null,inst_16582);var inst_16584 = cljs.core.async.close_BANG_.call(null,inst_16583);var inst_16585 = (inst_16577 + (1));var tmp16665 = inst_16575;var tmp16666 = inst_16576;var tmp16667 = inst_16574;var inst_16574__$1 = tmp16667;var inst_16575__$1 = tmp16665;var inst_16576__$1 = tmp16666;var inst_16577__$1 = inst_16585;var state_16635__$1 = (function (){var statearr_16671 = state_16635;(statearr_16671[(12)] = inst_16575__$1);
(statearr_16671[(13)] = inst_16577__$1);
(statearr_16671[(18)] = inst_16584);
(statearr_16671[(15)] = inst_16576__$1);
(statearr_16671[(16)] = inst_16574__$1);
return statearr_16671;
})();var statearr_16672_16707 = state_16635__$1;(statearr_16672_16707[(2)] = null);
(statearr_16672_16707[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (18)))
{var inst_16603 = (state_16635[(2)]);var state_16635__$1 = state_16635;var statearr_16673_16708 = state_16635__$1;(statearr_16673_16708[(2)] = inst_16603);
(statearr_16673_16708[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16636 === (8)))
{var inst_16577 = (state_16635[(13)]);var inst_16576 = (state_16635[(15)]);var inst_16579 = (inst_16577 < inst_16576);var inst_16580 = inst_16579;var state_16635__$1 = state_16635;if(cljs.core.truth_(inst_16580))
{var statearr_16674_16709 = state_16635__$1;(statearr_16674_16709[(1)] = (10));
} else
{var statearr_16675_16710 = state_16635__$1;(statearr_16675_16710[(1)] = (11));
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
});})(c__5693__auto___16683,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___16683,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16679 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16679[(0)] = state_machine__5679__auto__);
(statearr_16679[(1)] = (1));
return statearr_16679;
});
var state_machine__5679__auto____1 = (function (state_16635){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16635);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16680){if((e16680 instanceof Object))
{var ex__5682__auto__ = e16680;var statearr_16681_16711 = state_16635;(statearr_16681_16711[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16635);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16680;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16712 = state_16635;
state_16635 = G__16712;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16635){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16683,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_16682 = f__5694__auto__.call(null);(statearr_16682[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16683);
return statearr_16682;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16683,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___16849 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_16819){var state_val_16820 = (state_16819[(1)]);if((state_val_16820 === (7)))
{var state_16819__$1 = state_16819;var statearr_16821_16850 = state_16819__$1;(statearr_16821_16850[(2)] = null);
(statearr_16821_16850[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (1)))
{var state_16819__$1 = state_16819;var statearr_16822_16851 = state_16819__$1;(statearr_16822_16851[(2)] = null);
(statearr_16822_16851[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (4)))
{var inst_16783 = (state_16819[(7)]);var inst_16785 = (inst_16783 < cnt);var state_16819__$1 = state_16819;if(cljs.core.truth_(inst_16785))
{var statearr_16823_16852 = state_16819__$1;(statearr_16823_16852[(1)] = (6));
} else
{var statearr_16824_16853 = state_16819__$1;(statearr_16824_16853[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (15)))
{var inst_16815 = (state_16819[(2)]);var state_16819__$1 = state_16819;var statearr_16825_16854 = state_16819__$1;(statearr_16825_16854[(2)] = inst_16815);
(statearr_16825_16854[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (13)))
{var inst_16808 = cljs.core.async.close_BANG_.call(null,out);var state_16819__$1 = state_16819;var statearr_16826_16855 = state_16819__$1;(statearr_16826_16855[(2)] = inst_16808);
(statearr_16826_16855[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (6)))
{var state_16819__$1 = state_16819;var statearr_16827_16856 = state_16819__$1;(statearr_16827_16856[(2)] = null);
(statearr_16827_16856[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (3)))
{var inst_16817 = (state_16819[(2)]);var state_16819__$1 = state_16819;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16819__$1,inst_16817);
} else
{if((state_val_16820 === (12)))
{var inst_16805 = (state_16819[(8)]);var inst_16805__$1 = (state_16819[(2)]);var inst_16806 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16805__$1);var state_16819__$1 = (function (){var statearr_16828 = state_16819;(statearr_16828[(8)] = inst_16805__$1);
return statearr_16828;
})();if(cljs.core.truth_(inst_16806))
{var statearr_16829_16857 = state_16819__$1;(statearr_16829_16857[(1)] = (13));
} else
{var statearr_16830_16858 = state_16819__$1;(statearr_16830_16858[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (2)))
{var inst_16782 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16783 = (0);var state_16819__$1 = (function (){var statearr_16831 = state_16819;(statearr_16831[(7)] = inst_16783);
(statearr_16831[(9)] = inst_16782);
return statearr_16831;
})();var statearr_16832_16859 = state_16819__$1;(statearr_16832_16859[(2)] = null);
(statearr_16832_16859[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (11)))
{var inst_16783 = (state_16819[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16819,(10),Object,null,(9));var inst_16792 = chs__$1.call(null,inst_16783);var inst_16793 = done.call(null,inst_16783);var inst_16794 = cljs.core.async.take_BANG_.call(null,inst_16792,inst_16793);var state_16819__$1 = state_16819;var statearr_16833_16860 = state_16819__$1;(statearr_16833_16860[(2)] = inst_16794);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16819__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (9)))
{var inst_16783 = (state_16819[(7)]);var inst_16796 = (state_16819[(2)]);var inst_16797 = (inst_16783 + (1));var inst_16783__$1 = inst_16797;var state_16819__$1 = (function (){var statearr_16834 = state_16819;(statearr_16834[(7)] = inst_16783__$1);
(statearr_16834[(10)] = inst_16796);
return statearr_16834;
})();var statearr_16835_16861 = state_16819__$1;(statearr_16835_16861[(2)] = null);
(statearr_16835_16861[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (5)))
{var inst_16803 = (state_16819[(2)]);var state_16819__$1 = (function (){var statearr_16836 = state_16819;(statearr_16836[(11)] = inst_16803);
return statearr_16836;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16819__$1,(12),dchan);
} else
{if((state_val_16820 === (14)))
{var inst_16805 = (state_16819[(8)]);var inst_16810 = cljs.core.apply.call(null,f,inst_16805);var state_16819__$1 = state_16819;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16819__$1,(16),out,inst_16810);
} else
{if((state_val_16820 === (16)))
{var inst_16812 = (state_16819[(2)]);var state_16819__$1 = (function (){var statearr_16837 = state_16819;(statearr_16837[(12)] = inst_16812);
return statearr_16837;
})();var statearr_16838_16862 = state_16819__$1;(statearr_16838_16862[(2)] = null);
(statearr_16838_16862[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (10)))
{var inst_16787 = (state_16819[(2)]);var inst_16788 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16819__$1 = (function (){var statearr_16839 = state_16819;(statearr_16839[(13)] = inst_16787);
return statearr_16839;
})();var statearr_16840_16863 = state_16819__$1;(statearr_16840_16863[(2)] = inst_16788);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16819__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16820 === (8)))
{var inst_16801 = (state_16819[(2)]);var state_16819__$1 = state_16819;var statearr_16841_16864 = state_16819__$1;(statearr_16841_16864[(2)] = inst_16801);
(statearr_16841_16864[(1)] = (5));
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
});})(c__5693__auto___16849,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___16849,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16845 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16845[(0)] = state_machine__5679__auto__);
(statearr_16845[(1)] = (1));
return statearr_16845;
});
var state_machine__5679__auto____1 = (function (state_16819){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16819);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16846){if((e16846 instanceof Object))
{var ex__5682__auto__ = e16846;var statearr_16847_16865 = state_16819;(statearr_16847_16865[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16819);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16846;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16866 = state_16819;
state_16819 = G__16866;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16819){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16819);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16849,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_16848 = f__5694__auto__.call(null);(statearr_16848[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16849);
return statearr_16848;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16849,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___16974 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___16974,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___16974,out){
return (function (state_16950){var state_val_16951 = (state_16950[(1)]);if((state_val_16951 === (7)))
{var inst_16930 = (state_16950[(7)]);var inst_16929 = (state_16950[(8)]);var inst_16929__$1 = (state_16950[(2)]);var inst_16930__$1 = cljs.core.nth.call(null,inst_16929__$1,(0),null);var inst_16931 = cljs.core.nth.call(null,inst_16929__$1,(1),null);var inst_16932 = (inst_16930__$1 == null);var state_16950__$1 = (function (){var statearr_16952 = state_16950;(statearr_16952[(7)] = inst_16930__$1);
(statearr_16952[(9)] = inst_16931);
(statearr_16952[(8)] = inst_16929__$1);
return statearr_16952;
})();if(cljs.core.truth_(inst_16932))
{var statearr_16953_16975 = state_16950__$1;(statearr_16953_16975[(1)] = (8));
} else
{var statearr_16954_16976 = state_16950__$1;(statearr_16954_16976[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16951 === (1)))
{var inst_16921 = cljs.core.vec.call(null,chs);var inst_16922 = inst_16921;var state_16950__$1 = (function (){var statearr_16955 = state_16950;(statearr_16955[(10)] = inst_16922);
return statearr_16955;
})();var statearr_16956_16977 = state_16950__$1;(statearr_16956_16977[(2)] = null);
(statearr_16956_16977[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16951 === (4)))
{var inst_16922 = (state_16950[(10)]);var state_16950__$1 = state_16950;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16950__$1,(7),inst_16922);
} else
{if((state_val_16951 === (6)))
{var inst_16946 = (state_16950[(2)]);var state_16950__$1 = state_16950;var statearr_16957_16978 = state_16950__$1;(statearr_16957_16978[(2)] = inst_16946);
(statearr_16957_16978[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16951 === (3)))
{var inst_16948 = (state_16950[(2)]);var state_16950__$1 = state_16950;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16950__$1,inst_16948);
} else
{if((state_val_16951 === (2)))
{var inst_16922 = (state_16950[(10)]);var inst_16924 = cljs.core.count.call(null,inst_16922);var inst_16925 = (inst_16924 > (0));var state_16950__$1 = state_16950;if(cljs.core.truth_(inst_16925))
{var statearr_16959_16979 = state_16950__$1;(statearr_16959_16979[(1)] = (4));
} else
{var statearr_16960_16980 = state_16950__$1;(statearr_16960_16980[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16951 === (11)))
{var inst_16922 = (state_16950[(10)]);var inst_16939 = (state_16950[(2)]);var tmp16958 = inst_16922;var inst_16922__$1 = tmp16958;var state_16950__$1 = (function (){var statearr_16961 = state_16950;(statearr_16961[(10)] = inst_16922__$1);
(statearr_16961[(11)] = inst_16939);
return statearr_16961;
})();var statearr_16962_16981 = state_16950__$1;(statearr_16962_16981[(2)] = null);
(statearr_16962_16981[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16951 === (9)))
{var inst_16930 = (state_16950[(7)]);var state_16950__$1 = state_16950;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16950__$1,(11),out,inst_16930);
} else
{if((state_val_16951 === (5)))
{var inst_16944 = cljs.core.async.close_BANG_.call(null,out);var state_16950__$1 = state_16950;var statearr_16963_16982 = state_16950__$1;(statearr_16963_16982[(2)] = inst_16944);
(statearr_16963_16982[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16951 === (10)))
{var inst_16942 = (state_16950[(2)]);var state_16950__$1 = state_16950;var statearr_16964_16983 = state_16950__$1;(statearr_16964_16983[(2)] = inst_16942);
(statearr_16964_16983[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_16951 === (8)))
{var inst_16930 = (state_16950[(7)]);var inst_16931 = (state_16950[(9)]);var inst_16922 = (state_16950[(10)]);var inst_16929 = (state_16950[(8)]);var inst_16934 = (function (){var c = inst_16931;var v = inst_16930;var vec__16927 = inst_16929;var cs = inst_16922;return ((function (c,v,vec__16927,cs,inst_16930,inst_16931,inst_16922,inst_16929,state_val_16951,c__5693__auto___16974,out){
return (function (p1__16867_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__16867_SHARP_);
});
;})(c,v,vec__16927,cs,inst_16930,inst_16931,inst_16922,inst_16929,state_val_16951,c__5693__auto___16974,out))
})();var inst_16935 = cljs.core.filterv.call(null,inst_16934,inst_16922);var inst_16922__$1 = inst_16935;var state_16950__$1 = (function (){var statearr_16965 = state_16950;(statearr_16965[(10)] = inst_16922__$1);
return statearr_16965;
})();var statearr_16966_16984 = state_16950__$1;(statearr_16966_16984[(2)] = null);
(statearr_16966_16984[(1)] = (2));
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
});})(c__5693__auto___16974,out))
;return ((function (switch__5678__auto__,c__5693__auto___16974,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_16970 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16970[(0)] = state_machine__5679__auto__);
(statearr_16970[(1)] = (1));
return statearr_16970;
});
var state_machine__5679__auto____1 = (function (state_16950){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_16950);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e16971){if((e16971 instanceof Object))
{var ex__5682__auto__ = e16971;var statearr_16972_16985 = state_16950;(statearr_16972_16985[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16950);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e16971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__16986 = state_16950;
state_16950 = G__16986;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_16950){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_16950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___16974,out))
})();var state__5695__auto__ = (function (){var statearr_16973 = f__5694__auto__.call(null);(statearr_16973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___16974);
return statearr_16973;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___16974,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17079 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17079,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17079,out){
return (function (state_17056){var state_val_17057 = (state_17056[(1)]);if((state_val_17057 === (7)))
{var inst_17038 = (state_17056[(7)]);var inst_17038__$1 = (state_17056[(2)]);var inst_17039 = (inst_17038__$1 == null);var inst_17040 = cljs.core.not.call(null,inst_17039);var state_17056__$1 = (function (){var statearr_17058 = state_17056;(statearr_17058[(7)] = inst_17038__$1);
return statearr_17058;
})();if(inst_17040)
{var statearr_17059_17080 = state_17056__$1;(statearr_17059_17080[(1)] = (8));
} else
{var statearr_17060_17081 = state_17056__$1;(statearr_17060_17081[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17057 === (1)))
{var inst_17033 = (0);var state_17056__$1 = (function (){var statearr_17061 = state_17056;(statearr_17061[(8)] = inst_17033);
return statearr_17061;
})();var statearr_17062_17082 = state_17056__$1;(statearr_17062_17082[(2)] = null);
(statearr_17062_17082[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17057 === (4)))
{var state_17056__$1 = state_17056;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17056__$1,(7),ch);
} else
{if((state_val_17057 === (6)))
{var inst_17051 = (state_17056[(2)]);var state_17056__$1 = state_17056;var statearr_17063_17083 = state_17056__$1;(statearr_17063_17083[(2)] = inst_17051);
(statearr_17063_17083[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17057 === (3)))
{var inst_17053 = (state_17056[(2)]);var inst_17054 = cljs.core.async.close_BANG_.call(null,out);var state_17056__$1 = (function (){var statearr_17064 = state_17056;(statearr_17064[(9)] = inst_17053);
return statearr_17064;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17056__$1,inst_17054);
} else
{if((state_val_17057 === (2)))
{var inst_17033 = (state_17056[(8)]);var inst_17035 = (inst_17033 < n);var state_17056__$1 = state_17056;if(cljs.core.truth_(inst_17035))
{var statearr_17065_17084 = state_17056__$1;(statearr_17065_17084[(1)] = (4));
} else
{var statearr_17066_17085 = state_17056__$1;(statearr_17066_17085[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17057 === (11)))
{var inst_17033 = (state_17056[(8)]);var inst_17043 = (state_17056[(2)]);var inst_17044 = (inst_17033 + (1));var inst_17033__$1 = inst_17044;var state_17056__$1 = (function (){var statearr_17067 = state_17056;(statearr_17067[(10)] = inst_17043);
(statearr_17067[(8)] = inst_17033__$1);
return statearr_17067;
})();var statearr_17068_17086 = state_17056__$1;(statearr_17068_17086[(2)] = null);
(statearr_17068_17086[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17057 === (9)))
{var state_17056__$1 = state_17056;var statearr_17069_17087 = state_17056__$1;(statearr_17069_17087[(2)] = null);
(statearr_17069_17087[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17057 === (5)))
{var state_17056__$1 = state_17056;var statearr_17070_17088 = state_17056__$1;(statearr_17070_17088[(2)] = null);
(statearr_17070_17088[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17057 === (10)))
{var inst_17048 = (state_17056[(2)]);var state_17056__$1 = state_17056;var statearr_17071_17089 = state_17056__$1;(statearr_17071_17089[(2)] = inst_17048);
(statearr_17071_17089[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17057 === (8)))
{var inst_17038 = (state_17056[(7)]);var state_17056__$1 = state_17056;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17056__$1,(11),out,inst_17038);
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
});})(c__5693__auto___17079,out))
;return ((function (switch__5678__auto__,c__5693__auto___17079,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17075 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17075[(0)] = state_machine__5679__auto__);
(statearr_17075[(1)] = (1));
return statearr_17075;
});
var state_machine__5679__auto____1 = (function (state_17056){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17056);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17076){if((e17076 instanceof Object))
{var ex__5682__auto__ = e17076;var statearr_17077_17090 = state_17056;(statearr_17077_17090[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17056);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17091 = state_17056;
state_17056 = G__17091;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17056){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17056);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17079,out))
})();var state__5695__auto__ = (function (){var statearr_17078 = f__5694__auto__.call(null);(statearr_17078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17079);
return statearr_17078;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17079,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17188 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17188,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17188,out){
return (function (state_17163){var state_val_17164 = (state_17163[(1)]);if((state_val_17164 === (7)))
{var inst_17158 = (state_17163[(2)]);var state_17163__$1 = state_17163;var statearr_17165_17189 = state_17163__$1;(statearr_17165_17189[(2)] = inst_17158);
(statearr_17165_17189[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17164 === (1)))
{var inst_17140 = null;var state_17163__$1 = (function (){var statearr_17166 = state_17163;(statearr_17166[(7)] = inst_17140);
return statearr_17166;
})();var statearr_17167_17190 = state_17163__$1;(statearr_17167_17190[(2)] = null);
(statearr_17167_17190[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17164 === (4)))
{var inst_17143 = (state_17163[(8)]);var inst_17143__$1 = (state_17163[(2)]);var inst_17144 = (inst_17143__$1 == null);var inst_17145 = cljs.core.not.call(null,inst_17144);var state_17163__$1 = (function (){var statearr_17168 = state_17163;(statearr_17168[(8)] = inst_17143__$1);
return statearr_17168;
})();if(inst_17145)
{var statearr_17169_17191 = state_17163__$1;(statearr_17169_17191[(1)] = (5));
} else
{var statearr_17170_17192 = state_17163__$1;(statearr_17170_17192[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17164 === (6)))
{var state_17163__$1 = state_17163;var statearr_17171_17193 = state_17163__$1;(statearr_17171_17193[(2)] = null);
(statearr_17171_17193[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17164 === (3)))
{var inst_17160 = (state_17163[(2)]);var inst_17161 = cljs.core.async.close_BANG_.call(null,out);var state_17163__$1 = (function (){var statearr_17172 = state_17163;(statearr_17172[(9)] = inst_17160);
return statearr_17172;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17163__$1,inst_17161);
} else
{if((state_val_17164 === (2)))
{var state_17163__$1 = state_17163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17163__$1,(4),ch);
} else
{if((state_val_17164 === (11)))
{var inst_17143 = (state_17163[(8)]);var inst_17152 = (state_17163[(2)]);var inst_17140 = inst_17143;var state_17163__$1 = (function (){var statearr_17173 = state_17163;(statearr_17173[(7)] = inst_17140);
(statearr_17173[(10)] = inst_17152);
return statearr_17173;
})();var statearr_17174_17194 = state_17163__$1;(statearr_17174_17194[(2)] = null);
(statearr_17174_17194[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17164 === (9)))
{var inst_17143 = (state_17163[(8)]);var state_17163__$1 = state_17163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17163__$1,(11),out,inst_17143);
} else
{if((state_val_17164 === (5)))
{var inst_17140 = (state_17163[(7)]);var inst_17143 = (state_17163[(8)]);var inst_17147 = cljs.core._EQ_.call(null,inst_17143,inst_17140);var state_17163__$1 = state_17163;if(inst_17147)
{var statearr_17176_17195 = state_17163__$1;(statearr_17176_17195[(1)] = (8));
} else
{var statearr_17177_17196 = state_17163__$1;(statearr_17177_17196[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17164 === (10)))
{var inst_17155 = (state_17163[(2)]);var state_17163__$1 = state_17163;var statearr_17178_17197 = state_17163__$1;(statearr_17178_17197[(2)] = inst_17155);
(statearr_17178_17197[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17164 === (8)))
{var inst_17140 = (state_17163[(7)]);var tmp17175 = inst_17140;var inst_17140__$1 = tmp17175;var state_17163__$1 = (function (){var statearr_17179 = state_17163;(statearr_17179[(7)] = inst_17140__$1);
return statearr_17179;
})();var statearr_17180_17198 = state_17163__$1;(statearr_17180_17198[(2)] = null);
(statearr_17180_17198[(1)] = (2));
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
});})(c__5693__auto___17188,out))
;return ((function (switch__5678__auto__,c__5693__auto___17188,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17184 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_17184[(0)] = state_machine__5679__auto__);
(statearr_17184[(1)] = (1));
return statearr_17184;
});
var state_machine__5679__auto____1 = (function (state_17163){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17163);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17185){if((e17185 instanceof Object))
{var ex__5682__auto__ = e17185;var statearr_17186_17199 = state_17163;(statearr_17186_17199[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17163);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17185;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17200 = state_17163;
state_17163 = G__17200;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17163){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17188,out))
})();var state__5695__auto__ = (function (){var statearr_17187 = f__5694__auto__.call(null);(statearr_17187[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17188);
return statearr_17187;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17188,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17335 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17335,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17335,out){
return (function (state_17305){var state_val_17306 = (state_17305[(1)]);if((state_val_17306 === (7)))
{var inst_17301 = (state_17305[(2)]);var state_17305__$1 = state_17305;var statearr_17307_17336 = state_17305__$1;(statearr_17307_17336[(2)] = inst_17301);
(statearr_17307_17336[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (1)))
{var inst_17268 = (new Array(n));var inst_17269 = inst_17268;var inst_17270 = (0);var state_17305__$1 = (function (){var statearr_17308 = state_17305;(statearr_17308[(7)] = inst_17270);
(statearr_17308[(8)] = inst_17269);
return statearr_17308;
})();var statearr_17309_17337 = state_17305__$1;(statearr_17309_17337[(2)] = null);
(statearr_17309_17337[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (4)))
{var inst_17273 = (state_17305[(9)]);var inst_17273__$1 = (state_17305[(2)]);var inst_17274 = (inst_17273__$1 == null);var inst_17275 = cljs.core.not.call(null,inst_17274);var state_17305__$1 = (function (){var statearr_17310 = state_17305;(statearr_17310[(9)] = inst_17273__$1);
return statearr_17310;
})();if(inst_17275)
{var statearr_17311_17338 = state_17305__$1;(statearr_17311_17338[(1)] = (5));
} else
{var statearr_17312_17339 = state_17305__$1;(statearr_17312_17339[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (15)))
{var inst_17295 = (state_17305[(2)]);var state_17305__$1 = state_17305;var statearr_17313_17340 = state_17305__$1;(statearr_17313_17340[(2)] = inst_17295);
(statearr_17313_17340[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (13)))
{var state_17305__$1 = state_17305;var statearr_17314_17341 = state_17305__$1;(statearr_17314_17341[(2)] = null);
(statearr_17314_17341[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (6)))
{var inst_17270 = (state_17305[(7)]);var inst_17291 = (inst_17270 > (0));var state_17305__$1 = state_17305;if(cljs.core.truth_(inst_17291))
{var statearr_17315_17342 = state_17305__$1;(statearr_17315_17342[(1)] = (12));
} else
{var statearr_17316_17343 = state_17305__$1;(statearr_17316_17343[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (3)))
{var inst_17303 = (state_17305[(2)]);var state_17305__$1 = state_17305;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17305__$1,inst_17303);
} else
{if((state_val_17306 === (12)))
{var inst_17269 = (state_17305[(8)]);var inst_17293 = cljs.core.vec.call(null,inst_17269);var state_17305__$1 = state_17305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17305__$1,(15),out,inst_17293);
} else
{if((state_val_17306 === (2)))
{var state_17305__$1 = state_17305;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17305__$1,(4),ch);
} else
{if((state_val_17306 === (11)))
{var inst_17285 = (state_17305[(2)]);var inst_17286 = (new Array(n));var inst_17269 = inst_17286;var inst_17270 = (0);var state_17305__$1 = (function (){var statearr_17317 = state_17305;(statearr_17317[(10)] = inst_17285);
(statearr_17317[(7)] = inst_17270);
(statearr_17317[(8)] = inst_17269);
return statearr_17317;
})();var statearr_17318_17344 = state_17305__$1;(statearr_17318_17344[(2)] = null);
(statearr_17318_17344[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (9)))
{var inst_17269 = (state_17305[(8)]);var inst_17283 = cljs.core.vec.call(null,inst_17269);var state_17305__$1 = state_17305;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17305__$1,(11),out,inst_17283);
} else
{if((state_val_17306 === (5)))
{var inst_17270 = (state_17305[(7)]);var inst_17273 = (state_17305[(9)]);var inst_17278 = (state_17305[(11)]);var inst_17269 = (state_17305[(8)]);var inst_17277 = (inst_17269[inst_17270] = inst_17273);var inst_17278__$1 = (inst_17270 + (1));var inst_17279 = (inst_17278__$1 < n);var state_17305__$1 = (function (){var statearr_17319 = state_17305;(statearr_17319[(12)] = inst_17277);
(statearr_17319[(11)] = inst_17278__$1);
return statearr_17319;
})();if(cljs.core.truth_(inst_17279))
{var statearr_17320_17345 = state_17305__$1;(statearr_17320_17345[(1)] = (8));
} else
{var statearr_17321_17346 = state_17305__$1;(statearr_17321_17346[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (14)))
{var inst_17298 = (state_17305[(2)]);var inst_17299 = cljs.core.async.close_BANG_.call(null,out);var state_17305__$1 = (function (){var statearr_17323 = state_17305;(statearr_17323[(13)] = inst_17298);
return statearr_17323;
})();var statearr_17324_17347 = state_17305__$1;(statearr_17324_17347[(2)] = inst_17299);
(statearr_17324_17347[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (10)))
{var inst_17289 = (state_17305[(2)]);var state_17305__$1 = state_17305;var statearr_17325_17348 = state_17305__$1;(statearr_17325_17348[(2)] = inst_17289);
(statearr_17325_17348[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17306 === (8)))
{var inst_17278 = (state_17305[(11)]);var inst_17269 = (state_17305[(8)]);var tmp17322 = inst_17269;var inst_17269__$1 = tmp17322;var inst_17270 = inst_17278;var state_17305__$1 = (function (){var statearr_17326 = state_17305;(statearr_17326[(7)] = inst_17270);
(statearr_17326[(8)] = inst_17269__$1);
return statearr_17326;
})();var statearr_17327_17349 = state_17305__$1;(statearr_17327_17349[(2)] = null);
(statearr_17327_17349[(1)] = (2));
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
});})(c__5693__auto___17335,out))
;return ((function (switch__5678__auto__,c__5693__auto___17335,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17331 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17331[(0)] = state_machine__5679__auto__);
(statearr_17331[(1)] = (1));
return statearr_17331;
});
var state_machine__5679__auto____1 = (function (state_17305){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17305);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17332){if((e17332 instanceof Object))
{var ex__5682__auto__ = e17332;var statearr_17333_17350 = state_17305;(statearr_17333_17350[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17305);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17332;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17351 = state_17305;
state_17305 = G__17351;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17305){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17305);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17335,out))
})();var state__5695__auto__ = (function (){var statearr_17334 = f__5694__auto__.call(null);(statearr_17334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17335);
return statearr_17334;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17335,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___17494 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___17494,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___17494,out){
return (function (state_17464){var state_val_17465 = (state_17464[(1)]);if((state_val_17465 === (7)))
{var inst_17460 = (state_17464[(2)]);var state_17464__$1 = state_17464;var statearr_17466_17495 = state_17464__$1;(statearr_17466_17495[(2)] = inst_17460);
(statearr_17466_17495[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (1)))
{var inst_17423 = [];var inst_17424 = inst_17423;var inst_17425 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_17464__$1 = (function (){var statearr_17467 = state_17464;(statearr_17467[(7)] = inst_17424);
(statearr_17467[(8)] = inst_17425);
return statearr_17467;
})();var statearr_17468_17496 = state_17464__$1;(statearr_17468_17496[(2)] = null);
(statearr_17468_17496[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (4)))
{var inst_17428 = (state_17464[(9)]);var inst_17428__$1 = (state_17464[(2)]);var inst_17429 = (inst_17428__$1 == null);var inst_17430 = cljs.core.not.call(null,inst_17429);var state_17464__$1 = (function (){var statearr_17469 = state_17464;(statearr_17469[(9)] = inst_17428__$1);
return statearr_17469;
})();if(inst_17430)
{var statearr_17470_17497 = state_17464__$1;(statearr_17470_17497[(1)] = (5));
} else
{var statearr_17471_17498 = state_17464__$1;(statearr_17471_17498[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (15)))
{var inst_17454 = (state_17464[(2)]);var state_17464__$1 = state_17464;var statearr_17472_17499 = state_17464__$1;(statearr_17472_17499[(2)] = inst_17454);
(statearr_17472_17499[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (13)))
{var state_17464__$1 = state_17464;var statearr_17473_17500 = state_17464__$1;(statearr_17473_17500[(2)] = null);
(statearr_17473_17500[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (6)))
{var inst_17424 = (state_17464[(7)]);var inst_17449 = inst_17424.length;var inst_17450 = (inst_17449 > (0));var state_17464__$1 = state_17464;if(cljs.core.truth_(inst_17450))
{var statearr_17474_17501 = state_17464__$1;(statearr_17474_17501[(1)] = (12));
} else
{var statearr_17475_17502 = state_17464__$1;(statearr_17475_17502[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (3)))
{var inst_17462 = (state_17464[(2)]);var state_17464__$1 = state_17464;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17464__$1,inst_17462);
} else
{if((state_val_17465 === (12)))
{var inst_17424 = (state_17464[(7)]);var inst_17452 = cljs.core.vec.call(null,inst_17424);var state_17464__$1 = state_17464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17464__$1,(15),out,inst_17452);
} else
{if((state_val_17465 === (2)))
{var state_17464__$1 = state_17464;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17464__$1,(4),ch);
} else
{if((state_val_17465 === (11)))
{var inst_17432 = (state_17464[(10)]);var inst_17428 = (state_17464[(9)]);var inst_17442 = (state_17464[(2)]);var inst_17443 = [];var inst_17444 = inst_17443.push(inst_17428);var inst_17424 = inst_17443;var inst_17425 = inst_17432;var state_17464__$1 = (function (){var statearr_17476 = state_17464;(statearr_17476[(7)] = inst_17424);
(statearr_17476[(8)] = inst_17425);
(statearr_17476[(11)] = inst_17444);
(statearr_17476[(12)] = inst_17442);
return statearr_17476;
})();var statearr_17477_17503 = state_17464__$1;(statearr_17477_17503[(2)] = null);
(statearr_17477_17503[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (9)))
{var inst_17424 = (state_17464[(7)]);var inst_17440 = cljs.core.vec.call(null,inst_17424);var state_17464__$1 = state_17464;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17464__$1,(11),out,inst_17440);
} else
{if((state_val_17465 === (5)))
{var inst_17432 = (state_17464[(10)]);var inst_17428 = (state_17464[(9)]);var inst_17425 = (state_17464[(8)]);var inst_17432__$1 = f.call(null,inst_17428);var inst_17433 = cljs.core._EQ_.call(null,inst_17432__$1,inst_17425);var inst_17434 = cljs.core.keyword_identical_QMARK_.call(null,inst_17425,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_17435 = (inst_17433) || (inst_17434);var state_17464__$1 = (function (){var statearr_17478 = state_17464;(statearr_17478[(10)] = inst_17432__$1);
return statearr_17478;
})();if(cljs.core.truth_(inst_17435))
{var statearr_17479_17504 = state_17464__$1;(statearr_17479_17504[(1)] = (8));
} else
{var statearr_17480_17505 = state_17464__$1;(statearr_17480_17505[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (14)))
{var inst_17457 = (state_17464[(2)]);var inst_17458 = cljs.core.async.close_BANG_.call(null,out);var state_17464__$1 = (function (){var statearr_17482 = state_17464;(statearr_17482[(13)] = inst_17457);
return statearr_17482;
})();var statearr_17483_17506 = state_17464__$1;(statearr_17483_17506[(2)] = inst_17458);
(statearr_17483_17506[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (10)))
{var inst_17447 = (state_17464[(2)]);var state_17464__$1 = state_17464;var statearr_17484_17507 = state_17464__$1;(statearr_17484_17507[(2)] = inst_17447);
(statearr_17484_17507[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_17465 === (8)))
{var inst_17424 = (state_17464[(7)]);var inst_17432 = (state_17464[(10)]);var inst_17428 = (state_17464[(9)]);var inst_17437 = inst_17424.push(inst_17428);var tmp17481 = inst_17424;var inst_17424__$1 = tmp17481;var inst_17425 = inst_17432;var state_17464__$1 = (function (){var statearr_17485 = state_17464;(statearr_17485[(7)] = inst_17424__$1);
(statearr_17485[(8)] = inst_17425);
(statearr_17485[(14)] = inst_17437);
return statearr_17485;
})();var statearr_17486_17508 = state_17464__$1;(statearr_17486_17508[(2)] = null);
(statearr_17486_17508[(1)] = (2));
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
});})(c__5693__auto___17494,out))
;return ((function (switch__5678__auto__,c__5693__auto___17494,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_17490 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_17490[(0)] = state_machine__5679__auto__);
(statearr_17490[(1)] = (1));
return statearr_17490;
});
var state_machine__5679__auto____1 = (function (state_17464){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_17464);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e17491){if((e17491 instanceof Object))
{var ex__5682__auto__ = e17491;var statearr_17492_17509 = state_17464;(statearr_17492_17509[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17464);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e17491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__17510 = state_17464;
state_17464 = G__17510;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_17464){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_17464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___17494,out))
})();var state__5695__auto__ = (function (){var statearr_17493 = f__5694__auto__.call(null);(statearr_17493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___17494);
return statearr_17493;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___17494,out))
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
