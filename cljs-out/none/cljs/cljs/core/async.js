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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t52013 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52013 = (function (f,fn_handler,meta52014){
this.f = f;
this.fn_handler = fn_handler;
this.meta52014 = meta52014;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52013.cljs$lang$type = true;
cljs.core.async.t52013.cljs$lang$ctorStr = "cljs.core.async/t52013";
cljs.core.async.t52013.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52013");
});
cljs.core.async.t52013.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52013.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t52013.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t52013.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52015){var self__ = this;
var _52015__$1 = this;return self__.meta52014;
});
cljs.core.async.t52013.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52015,meta52014__$1){var self__ = this;
var _52015__$1 = this;return (new cljs.core.async.t52013(self__.f,self__.fn_handler,meta52014__$1));
});
cljs.core.async.__GT_t52013 = (function __GT_t52013(f__$1,fn_handler__$1,meta52014){return (new cljs.core.async.t52013(f__$1,fn_handler__$1,meta52014));
});
}
return (new cljs.core.async.t52013(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__52017 = buff;if(G__52017)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__52017.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__52017.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__52017);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__52017);
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
{var val_52018 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_52018);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_52018,ret){
return (function (){return fn1.call(null,val_52018);
});})(val_52018,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___52019 = n;var x_52020 = (0);while(true){
if((x_52020 < n__4399__auto___52019))
{(a[x_52020] = (0));
{
var G__52021 = (x_52020 + (1));
x_52020 = G__52021;
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
var G__52022 = (i + (1));
i = G__52022;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t52026 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52026 = (function (flag,alt_flag,meta52027){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta52027 = meta52027;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52026.cljs$lang$type = true;
cljs.core.async.t52026.cljs$lang$ctorStr = "cljs.core.async/t52026";
cljs.core.async.t52026.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52026");
});})(flag))
;
cljs.core.async.t52026.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52026.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t52026.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t52026.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_52028){var self__ = this;
var _52028__$1 = this;return self__.meta52027;
});})(flag))
;
cljs.core.async.t52026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_52028,meta52027__$1){var self__ = this;
var _52028__$1 = this;return (new cljs.core.async.t52026(self__.flag,self__.alt_flag,meta52027__$1));
});})(flag))
;
cljs.core.async.__GT_t52026 = ((function (flag){
return (function __GT_t52026(flag__$1,alt_flag__$1,meta52027){return (new cljs.core.async.t52026(flag__$1,alt_flag__$1,meta52027));
});})(flag))
;
}
return (new cljs.core.async.t52026(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t52032 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52032 = (function (cb,flag,alt_handler,meta52033){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta52033 = meta52033;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52032.cljs$lang$type = true;
cljs.core.async.t52032.cljs$lang$ctorStr = "cljs.core.async/t52032";
cljs.core.async.t52032.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52032");
});
cljs.core.async.t52032.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52032.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t52032.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t52032.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52034){var self__ = this;
var _52034__$1 = this;return self__.meta52033;
});
cljs.core.async.t52032.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52034,meta52033__$1){var self__ = this;
var _52034__$1 = this;return (new cljs.core.async.t52032(self__.cb,self__.flag,self__.alt_handler,meta52033__$1));
});
cljs.core.async.__GT_t52032 = (function __GT_t52032(cb__$1,flag__$1,alt_handler__$1,meta52033){return (new cljs.core.async.t52032(cb__$1,flag__$1,alt_handler__$1,meta52033));
});
}
return (new cljs.core.async.t52032(cb,flag,alt_handler,null));
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
return (function (p1__52035_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__52035_SHARP_,port], null));
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
var G__52036 = (i + (1));
i = G__52036;
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
var alts_BANG___delegate = function (ports,p__52037){var map__52039 = p__52037;var map__52039__$1 = ((cljs.core.seq_QMARK_.call(null,map__52039))?cljs.core.apply.call(null,cljs.core.hash_map,map__52039):map__52039);var opts = map__52039__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__52037 = null;if (arguments.length > 1) {
  p__52037 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__52037);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__52040){
var ports = cljs.core.first(arglist__52040);
var p__52037 = cljs.core.rest(arglist__52040);
return alts_BANG___delegate(ports,p__52037);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t52048 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52048 = (function (ch,f,map_LT_,meta52049){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta52049 = meta52049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52048.cljs$lang$type = true;
cljs.core.async.t52048.cljs$lang$ctorStr = "cljs.core.async/t52048";
cljs.core.async.t52048.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52048");
});
cljs.core.async.t52048.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t52048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t52048.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t52048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t52051 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52051 = (function (fn1,_,meta52049,ch,f,map_LT_,meta52052){
this.fn1 = fn1;
this._ = _;
this.meta52049 = meta52049;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta52052 = meta52052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52051.cljs$lang$type = true;
cljs.core.async.t52051.cljs$lang$ctorStr = "cljs.core.async/t52051";
cljs.core.async.t52051.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52051");
});})(___$1))
;
cljs.core.async.t52051.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t52051.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t52051.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t52051.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__52041_SHARP_){return f1.call(null,(((p1__52041_SHARP_ == null))?null:self__.f.call(null,p1__52041_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t52051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_52053){var self__ = this;
var _52053__$1 = this;return self__.meta52052;
});})(___$1))
;
cljs.core.async.t52051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_52053,meta52052__$1){var self__ = this;
var _52053__$1 = this;return (new cljs.core.async.t52051(self__.fn1,self__._,self__.meta52049,self__.ch,self__.f,self__.map_LT_,meta52052__$1));
});})(___$1))
;
cljs.core.async.__GT_t52051 = ((function (___$1){
return (function __GT_t52051(fn1__$1,___$2,meta52049__$1,ch__$2,f__$2,map_LT___$2,meta52052){return (new cljs.core.async.t52051(fn1__$1,___$2,meta52049__$1,ch__$2,f__$2,map_LT___$2,meta52052));
});})(___$1))
;
}
return (new cljs.core.async.t52051(fn1,___$1,self__.meta52049,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t52048.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t52048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t52048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52050){var self__ = this;
var _52050__$1 = this;return self__.meta52049;
});
cljs.core.async.t52048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52050,meta52049__$1){var self__ = this;
var _52050__$1 = this;return (new cljs.core.async.t52048(self__.ch,self__.f,self__.map_LT_,meta52049__$1));
});
cljs.core.async.__GT_t52048 = (function __GT_t52048(ch__$1,f__$1,map_LT___$1,meta52049){return (new cljs.core.async.t52048(ch__$1,f__$1,map_LT___$1,meta52049));
});
}
return (new cljs.core.async.t52048(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t52057 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52057 = (function (ch,f,map_GT_,meta52058){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta52058 = meta52058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52057.cljs$lang$type = true;
cljs.core.async.t52057.cljs$lang$ctorStr = "cljs.core.async/t52057";
cljs.core.async.t52057.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52057");
});
cljs.core.async.t52057.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t52057.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t52057.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t52057.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t52057.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t52057.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t52057.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52059){var self__ = this;
var _52059__$1 = this;return self__.meta52058;
});
cljs.core.async.t52057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52059,meta52058__$1){var self__ = this;
var _52059__$1 = this;return (new cljs.core.async.t52057(self__.ch,self__.f,self__.map_GT_,meta52058__$1));
});
cljs.core.async.__GT_t52057 = (function __GT_t52057(ch__$1,f__$1,map_GT___$1,meta52058){return (new cljs.core.async.t52057(ch__$1,f__$1,map_GT___$1,meta52058));
});
}
return (new cljs.core.async.t52057(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t52063 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52063 = (function (ch,p,filter_GT_,meta52064){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta52064 = meta52064;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52063.cljs$lang$type = true;
cljs.core.async.t52063.cljs$lang$ctorStr = "cljs.core.async/t52063";
cljs.core.async.t52063.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52063");
});
cljs.core.async.t52063.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t52063.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t52063.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t52063.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t52063.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t52063.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t52063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52065){var self__ = this;
var _52065__$1 = this;return self__.meta52064;
});
cljs.core.async.t52063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52065,meta52064__$1){var self__ = this;
var _52065__$1 = this;return (new cljs.core.async.t52063(self__.ch,self__.p,self__.filter_GT_,meta52064__$1));
});
cljs.core.async.__GT_t52063 = (function __GT_t52063(ch__$1,p__$1,filter_GT___$1,meta52064){return (new cljs.core.async.t52063(ch__$1,p__$1,filter_GT___$1,meta52064));
});
}
return (new cljs.core.async.t52063(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___52148 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52148,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52148,out){
return (function (state_52127){var state_val_52128 = (state_52127[(1)]);if((state_val_52128 === (7)))
{var inst_52123 = (state_52127[(2)]);var state_52127__$1 = state_52127;var statearr_52129_52149 = state_52127__$1;(statearr_52129_52149[(2)] = inst_52123);
(statearr_52129_52149[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52128 === (1)))
{var state_52127__$1 = state_52127;var statearr_52130_52150 = state_52127__$1;(statearr_52130_52150[(2)] = null);
(statearr_52130_52150[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52128 === (4)))
{var inst_52109 = (state_52127[(7)]);var inst_52109__$1 = (state_52127[(2)]);var inst_52110 = (inst_52109__$1 == null);var state_52127__$1 = (function (){var statearr_52131 = state_52127;(statearr_52131[(7)] = inst_52109__$1);
return statearr_52131;
})();if(cljs.core.truth_(inst_52110))
{var statearr_52132_52151 = state_52127__$1;(statearr_52132_52151[(1)] = (5));
} else
{var statearr_52133_52152 = state_52127__$1;(statearr_52133_52152[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52128 === (6)))
{var inst_52109 = (state_52127[(7)]);var inst_52114 = p.call(null,inst_52109);var state_52127__$1 = state_52127;if(cljs.core.truth_(inst_52114))
{var statearr_52134_52153 = state_52127__$1;(statearr_52134_52153[(1)] = (8));
} else
{var statearr_52135_52154 = state_52127__$1;(statearr_52135_52154[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52128 === (3)))
{var inst_52125 = (state_52127[(2)]);var state_52127__$1 = state_52127;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52127__$1,inst_52125);
} else
{if((state_val_52128 === (2)))
{var state_52127__$1 = state_52127;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52127__$1,(4),ch);
} else
{if((state_val_52128 === (11)))
{var inst_52117 = (state_52127[(2)]);var state_52127__$1 = state_52127;var statearr_52136_52155 = state_52127__$1;(statearr_52136_52155[(2)] = inst_52117);
(statearr_52136_52155[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52128 === (9)))
{var state_52127__$1 = state_52127;var statearr_52137_52156 = state_52127__$1;(statearr_52137_52156[(2)] = null);
(statearr_52137_52156[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52128 === (5)))
{var inst_52112 = cljs.core.async.close_BANG_.call(null,out);var state_52127__$1 = state_52127;var statearr_52138_52157 = state_52127__$1;(statearr_52138_52157[(2)] = inst_52112);
(statearr_52138_52157[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52128 === (10)))
{var inst_52120 = (state_52127[(2)]);var state_52127__$1 = (function (){var statearr_52139 = state_52127;(statearr_52139[(8)] = inst_52120);
return statearr_52139;
})();var statearr_52140_52158 = state_52127__$1;(statearr_52140_52158[(2)] = null);
(statearr_52140_52158[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52128 === (8)))
{var inst_52109 = (state_52127[(7)]);var state_52127__$1 = state_52127;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52127__$1,(11),out,inst_52109);
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
});})(c__5693__auto___52148,out))
;return ((function (switch__5678__auto__,c__5693__auto___52148,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52144 = [null,null,null,null,null,null,null,null,null];(statearr_52144[(0)] = state_machine__5679__auto__);
(statearr_52144[(1)] = (1));
return statearr_52144;
});
var state_machine__5679__auto____1 = (function (state_52127){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52127);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52145){if((e52145 instanceof Object))
{var ex__5682__auto__ = e52145;var statearr_52146_52159 = state_52127;(statearr_52146_52159[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52127);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52145;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52160 = state_52127;
state_52127 = G__52160;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52127){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52127);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52148,out))
})();var state__5695__auto__ = (function (){var statearr_52147 = f__5694__auto__.call(null);(statearr_52147[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52148);
return statearr_52147;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52148,out))
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
return (function (state_52312){var state_val_52313 = (state_52312[(1)]);if((state_val_52313 === (7)))
{var inst_52308 = (state_52312[(2)]);var state_52312__$1 = state_52312;var statearr_52314_52351 = state_52312__$1;(statearr_52314_52351[(2)] = inst_52308);
(statearr_52314_52351[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (20)))
{var inst_52283 = (state_52312[(7)]);var inst_52294 = (state_52312[(2)]);var inst_52295 = cljs.core.next.call(null,inst_52283);var inst_52269 = inst_52295;var inst_52270 = null;var inst_52271 = (0);var inst_52272 = (0);var state_52312__$1 = (function (){var statearr_52315 = state_52312;(statearr_52315[(8)] = inst_52271);
(statearr_52315[(9)] = inst_52272);
(statearr_52315[(10)] = inst_52294);
(statearr_52315[(11)] = inst_52270);
(statearr_52315[(12)] = inst_52269);
return statearr_52315;
})();var statearr_52316_52352 = state_52312__$1;(statearr_52316_52352[(2)] = null);
(statearr_52316_52352[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (1)))
{var state_52312__$1 = state_52312;var statearr_52317_52353 = state_52312__$1;(statearr_52317_52353[(2)] = null);
(statearr_52317_52353[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (4)))
{var inst_52258 = (state_52312[(13)]);var inst_52258__$1 = (state_52312[(2)]);var inst_52259 = (inst_52258__$1 == null);var state_52312__$1 = (function (){var statearr_52321 = state_52312;(statearr_52321[(13)] = inst_52258__$1);
return statearr_52321;
})();if(cljs.core.truth_(inst_52259))
{var statearr_52322_52354 = state_52312__$1;(statearr_52322_52354[(1)] = (5));
} else
{var statearr_52323_52355 = state_52312__$1;(statearr_52323_52355[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (15)))
{var state_52312__$1 = state_52312;var statearr_52324_52356 = state_52312__$1;(statearr_52324_52356[(2)] = null);
(statearr_52324_52356[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (13)))
{var inst_52271 = (state_52312[(8)]);var inst_52272 = (state_52312[(9)]);var inst_52270 = (state_52312[(11)]);var inst_52269 = (state_52312[(12)]);var inst_52279 = (state_52312[(2)]);var inst_52280 = (inst_52272 + (1));var tmp52318 = inst_52271;var tmp52319 = inst_52270;var tmp52320 = inst_52269;var inst_52269__$1 = tmp52320;var inst_52270__$1 = tmp52319;var inst_52271__$1 = tmp52318;var inst_52272__$1 = inst_52280;var state_52312__$1 = (function (){var statearr_52325 = state_52312;(statearr_52325[(8)] = inst_52271__$1);
(statearr_52325[(9)] = inst_52272__$1);
(statearr_52325[(14)] = inst_52279);
(statearr_52325[(11)] = inst_52270__$1);
(statearr_52325[(12)] = inst_52269__$1);
return statearr_52325;
})();var statearr_52326_52357 = state_52312__$1;(statearr_52326_52357[(2)] = null);
(statearr_52326_52357[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (6)))
{var inst_52258 = (state_52312[(13)]);var inst_52263 = f.call(null,inst_52258);var inst_52268 = cljs.core.seq.call(null,inst_52263);var inst_52269 = inst_52268;var inst_52270 = null;var inst_52271 = (0);var inst_52272 = (0);var state_52312__$1 = (function (){var statearr_52327 = state_52312;(statearr_52327[(8)] = inst_52271);
(statearr_52327[(9)] = inst_52272);
(statearr_52327[(11)] = inst_52270);
(statearr_52327[(12)] = inst_52269);
return statearr_52327;
})();var statearr_52328_52358 = state_52312__$1;(statearr_52328_52358[(2)] = null);
(statearr_52328_52358[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (17)))
{var inst_52283 = (state_52312[(7)]);var inst_52287 = cljs.core.chunk_first.call(null,inst_52283);var inst_52288 = cljs.core.chunk_rest.call(null,inst_52283);var inst_52289 = cljs.core.count.call(null,inst_52287);var inst_52269 = inst_52288;var inst_52270 = inst_52287;var inst_52271 = inst_52289;var inst_52272 = (0);var state_52312__$1 = (function (){var statearr_52329 = state_52312;(statearr_52329[(8)] = inst_52271);
(statearr_52329[(9)] = inst_52272);
(statearr_52329[(11)] = inst_52270);
(statearr_52329[(12)] = inst_52269);
return statearr_52329;
})();var statearr_52330_52359 = state_52312__$1;(statearr_52330_52359[(2)] = null);
(statearr_52330_52359[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (3)))
{var inst_52310 = (state_52312[(2)]);var state_52312__$1 = state_52312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52312__$1,inst_52310);
} else
{if((state_val_52313 === (12)))
{var inst_52303 = (state_52312[(2)]);var state_52312__$1 = state_52312;var statearr_52331_52360 = state_52312__$1;(statearr_52331_52360[(2)] = inst_52303);
(statearr_52331_52360[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (2)))
{var state_52312__$1 = state_52312;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52312__$1,(4),in$);
} else
{if((state_val_52313 === (19)))
{var inst_52298 = (state_52312[(2)]);var state_52312__$1 = state_52312;var statearr_52332_52361 = state_52312__$1;(statearr_52332_52361[(2)] = inst_52298);
(statearr_52332_52361[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (11)))
{var inst_52283 = (state_52312[(7)]);var inst_52269 = (state_52312[(12)]);var inst_52283__$1 = cljs.core.seq.call(null,inst_52269);var state_52312__$1 = (function (){var statearr_52333 = state_52312;(statearr_52333[(7)] = inst_52283__$1);
return statearr_52333;
})();if(inst_52283__$1)
{var statearr_52334_52362 = state_52312__$1;(statearr_52334_52362[(1)] = (14));
} else
{var statearr_52335_52363 = state_52312__$1;(statearr_52335_52363[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (9)))
{var inst_52305 = (state_52312[(2)]);var state_52312__$1 = (function (){var statearr_52336 = state_52312;(statearr_52336[(15)] = inst_52305);
return statearr_52336;
})();var statearr_52337_52364 = state_52312__$1;(statearr_52337_52364[(2)] = null);
(statearr_52337_52364[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (5)))
{var inst_52261 = cljs.core.async.close_BANG_.call(null,out);var state_52312__$1 = state_52312;var statearr_52338_52365 = state_52312__$1;(statearr_52338_52365[(2)] = inst_52261);
(statearr_52338_52365[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (14)))
{var inst_52283 = (state_52312[(7)]);var inst_52285 = cljs.core.chunked_seq_QMARK_.call(null,inst_52283);var state_52312__$1 = state_52312;if(inst_52285)
{var statearr_52339_52366 = state_52312__$1;(statearr_52339_52366[(1)] = (17));
} else
{var statearr_52340_52367 = state_52312__$1;(statearr_52340_52367[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (16)))
{var inst_52301 = (state_52312[(2)]);var state_52312__$1 = state_52312;var statearr_52341_52368 = state_52312__$1;(statearr_52341_52368[(2)] = inst_52301);
(statearr_52341_52368[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52313 === (10)))
{var inst_52272 = (state_52312[(9)]);var inst_52270 = (state_52312[(11)]);var inst_52277 = cljs.core._nth.call(null,inst_52270,inst_52272);var state_52312__$1 = state_52312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52312__$1,(13),out,inst_52277);
} else
{if((state_val_52313 === (18)))
{var inst_52283 = (state_52312[(7)]);var inst_52292 = cljs.core.first.call(null,inst_52283);var state_52312__$1 = state_52312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52312__$1,(20),out,inst_52292);
} else
{if((state_val_52313 === (8)))
{var inst_52271 = (state_52312[(8)]);var inst_52272 = (state_52312[(9)]);var inst_52274 = (inst_52272 < inst_52271);var inst_52275 = inst_52274;var state_52312__$1 = state_52312;if(cljs.core.truth_(inst_52275))
{var statearr_52342_52369 = state_52312__$1;(statearr_52342_52369[(1)] = (10));
} else
{var statearr_52343_52370 = state_52312__$1;(statearr_52343_52370[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_52347 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_52347[(0)] = state_machine__5679__auto__);
(statearr_52347[(1)] = (1));
return statearr_52347;
});
var state_machine__5679__auto____1 = (function (state_52312){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52312);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52348){if((e52348 instanceof Object))
{var ex__5682__auto__ = e52348;var statearr_52349_52371 = state_52312;(statearr_52349_52371[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52312);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52372 = state_52312;
state_52312 = G__52372;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52312){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_52350 = f__5694__auto__.call(null);(statearr_52350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_52350;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___52453 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52453){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52453){
return (function (state_52432){var state_val_52433 = (state_52432[(1)]);if((state_val_52433 === (7)))
{var inst_52428 = (state_52432[(2)]);var state_52432__$1 = state_52432;var statearr_52434_52454 = state_52432__$1;(statearr_52434_52454[(2)] = inst_52428);
(statearr_52434_52454[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52433 === (1)))
{var state_52432__$1 = state_52432;var statearr_52435_52455 = state_52432__$1;(statearr_52435_52455[(2)] = null);
(statearr_52435_52455[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52433 === (4)))
{var inst_52415 = (state_52432[(7)]);var inst_52415__$1 = (state_52432[(2)]);var inst_52416 = (inst_52415__$1 == null);var state_52432__$1 = (function (){var statearr_52436 = state_52432;(statearr_52436[(7)] = inst_52415__$1);
return statearr_52436;
})();if(cljs.core.truth_(inst_52416))
{var statearr_52437_52456 = state_52432__$1;(statearr_52437_52456[(1)] = (5));
} else
{var statearr_52438_52457 = state_52432__$1;(statearr_52438_52457[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52433 === (6)))
{var inst_52415 = (state_52432[(7)]);var state_52432__$1 = state_52432;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52432__$1,(11),to,inst_52415);
} else
{if((state_val_52433 === (3)))
{var inst_52430 = (state_52432[(2)]);var state_52432__$1 = state_52432;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52432__$1,inst_52430);
} else
{if((state_val_52433 === (2)))
{var state_52432__$1 = state_52432;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52432__$1,(4),from);
} else
{if((state_val_52433 === (11)))
{var inst_52425 = (state_52432[(2)]);var state_52432__$1 = (function (){var statearr_52439 = state_52432;(statearr_52439[(8)] = inst_52425);
return statearr_52439;
})();var statearr_52440_52458 = state_52432__$1;(statearr_52440_52458[(2)] = null);
(statearr_52440_52458[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52433 === (9)))
{var state_52432__$1 = state_52432;var statearr_52441_52459 = state_52432__$1;(statearr_52441_52459[(2)] = null);
(statearr_52441_52459[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52433 === (5)))
{var state_52432__$1 = state_52432;if(cljs.core.truth_(close_QMARK_))
{var statearr_52442_52460 = state_52432__$1;(statearr_52442_52460[(1)] = (8));
} else
{var statearr_52443_52461 = state_52432__$1;(statearr_52443_52461[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52433 === (10)))
{var inst_52422 = (state_52432[(2)]);var state_52432__$1 = state_52432;var statearr_52444_52462 = state_52432__$1;(statearr_52444_52462[(2)] = inst_52422);
(statearr_52444_52462[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52433 === (8)))
{var inst_52419 = cljs.core.async.close_BANG_.call(null,to);var state_52432__$1 = state_52432;var statearr_52445_52463 = state_52432__$1;(statearr_52445_52463[(2)] = inst_52419);
(statearr_52445_52463[(1)] = (10));
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
});})(c__5693__auto___52453))
;return ((function (switch__5678__auto__,c__5693__auto___52453){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52449 = [null,null,null,null,null,null,null,null,null];(statearr_52449[(0)] = state_machine__5679__auto__);
(statearr_52449[(1)] = (1));
return statearr_52449;
});
var state_machine__5679__auto____1 = (function (state_52432){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52432);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52450){if((e52450 instanceof Object))
{var ex__5682__auto__ = e52450;var statearr_52451_52464 = state_52432;(statearr_52451_52464[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52432);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52450;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52465 = state_52432;
state_52432 = G__52465;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52432){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52453))
})();var state__5695__auto__ = (function (){var statearr_52452 = f__5694__auto__.call(null);(statearr_52452[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52453);
return statearr_52452;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52453))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___52552 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___52552,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___52552,tc,fc){
return (function (state_52530){var state_val_52531 = (state_52530[(1)]);if((state_val_52531 === (7)))
{var inst_52526 = (state_52530[(2)]);var state_52530__$1 = state_52530;var statearr_52532_52553 = state_52530__$1;(statearr_52532_52553[(2)] = inst_52526);
(statearr_52532_52553[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52531 === (1)))
{var state_52530__$1 = state_52530;var statearr_52533_52554 = state_52530__$1;(statearr_52533_52554[(2)] = null);
(statearr_52533_52554[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52531 === (4)))
{var inst_52511 = (state_52530[(7)]);var inst_52511__$1 = (state_52530[(2)]);var inst_52512 = (inst_52511__$1 == null);var state_52530__$1 = (function (){var statearr_52534 = state_52530;(statearr_52534[(7)] = inst_52511__$1);
return statearr_52534;
})();if(cljs.core.truth_(inst_52512))
{var statearr_52535_52555 = state_52530__$1;(statearr_52535_52555[(1)] = (5));
} else
{var statearr_52536_52556 = state_52530__$1;(statearr_52536_52556[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52531 === (6)))
{var inst_52511 = (state_52530[(7)]);var inst_52517 = p.call(null,inst_52511);var state_52530__$1 = state_52530;if(cljs.core.truth_(inst_52517))
{var statearr_52537_52557 = state_52530__$1;(statearr_52537_52557[(1)] = (9));
} else
{var statearr_52538_52558 = state_52530__$1;(statearr_52538_52558[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52531 === (3)))
{var inst_52528 = (state_52530[(2)]);var state_52530__$1 = state_52530;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52530__$1,inst_52528);
} else
{if((state_val_52531 === (2)))
{var state_52530__$1 = state_52530;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52530__$1,(4),ch);
} else
{if((state_val_52531 === (11)))
{var inst_52511 = (state_52530[(7)]);var inst_52521 = (state_52530[(2)]);var state_52530__$1 = state_52530;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52530__$1,(8),inst_52521,inst_52511);
} else
{if((state_val_52531 === (9)))
{var state_52530__$1 = state_52530;var statearr_52539_52559 = state_52530__$1;(statearr_52539_52559[(2)] = tc);
(statearr_52539_52559[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52531 === (5)))
{var inst_52514 = cljs.core.async.close_BANG_.call(null,tc);var inst_52515 = cljs.core.async.close_BANG_.call(null,fc);var state_52530__$1 = (function (){var statearr_52540 = state_52530;(statearr_52540[(8)] = inst_52514);
return statearr_52540;
})();var statearr_52541_52560 = state_52530__$1;(statearr_52541_52560[(2)] = inst_52515);
(statearr_52541_52560[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52531 === (10)))
{var state_52530__$1 = state_52530;var statearr_52542_52561 = state_52530__$1;(statearr_52542_52561[(2)] = fc);
(statearr_52542_52561[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52531 === (8)))
{var inst_52523 = (state_52530[(2)]);var state_52530__$1 = (function (){var statearr_52543 = state_52530;(statearr_52543[(9)] = inst_52523);
return statearr_52543;
})();var statearr_52544_52562 = state_52530__$1;(statearr_52544_52562[(2)] = null);
(statearr_52544_52562[(1)] = (2));
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
});})(c__5693__auto___52552,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___52552,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_52548 = [null,null,null,null,null,null,null,null,null,null];(statearr_52548[(0)] = state_machine__5679__auto__);
(statearr_52548[(1)] = (1));
return statearr_52548;
});
var state_machine__5679__auto____1 = (function (state_52530){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52530);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52549){if((e52549 instanceof Object))
{var ex__5682__auto__ = e52549;var statearr_52550_52563 = state_52530;(statearr_52550_52563[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52530);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52564 = state_52530;
state_52530 = G__52564;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52530){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52530);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___52552,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_52551 = f__5694__auto__.call(null);(statearr_52551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___52552);
return statearr_52551;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___52552,tc,fc))
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
return (function (state_52611){var state_val_52612 = (state_52611[(1)]);if((state_val_52612 === (7)))
{var inst_52607 = (state_52611[(2)]);var state_52611__$1 = state_52611;var statearr_52613_52629 = state_52611__$1;(statearr_52613_52629[(2)] = inst_52607);
(statearr_52613_52629[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52612 === (6)))
{var inst_52600 = (state_52611[(7)]);var inst_52597 = (state_52611[(8)]);var inst_52604 = f.call(null,inst_52597,inst_52600);var inst_52597__$1 = inst_52604;var state_52611__$1 = (function (){var statearr_52614 = state_52611;(statearr_52614[(8)] = inst_52597__$1);
return statearr_52614;
})();var statearr_52615_52630 = state_52611__$1;(statearr_52615_52630[(2)] = null);
(statearr_52615_52630[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52612 === (5)))
{var inst_52597 = (state_52611[(8)]);var state_52611__$1 = state_52611;var statearr_52616_52631 = state_52611__$1;(statearr_52616_52631[(2)] = inst_52597);
(statearr_52616_52631[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52612 === (4)))
{var inst_52600 = (state_52611[(7)]);var inst_52600__$1 = (state_52611[(2)]);var inst_52601 = (inst_52600__$1 == null);var state_52611__$1 = (function (){var statearr_52617 = state_52611;(statearr_52617[(7)] = inst_52600__$1);
return statearr_52617;
})();if(cljs.core.truth_(inst_52601))
{var statearr_52618_52632 = state_52611__$1;(statearr_52618_52632[(1)] = (5));
} else
{var statearr_52619_52633 = state_52611__$1;(statearr_52619_52633[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52612 === (3)))
{var inst_52609 = (state_52611[(2)]);var state_52611__$1 = state_52611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52611__$1,inst_52609);
} else
{if((state_val_52612 === (2)))
{var state_52611__$1 = state_52611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_52611__$1,(4),ch);
} else
{if((state_val_52612 === (1)))
{var inst_52597 = init;var state_52611__$1 = (function (){var statearr_52620 = state_52611;(statearr_52620[(8)] = inst_52597);
return statearr_52620;
})();var statearr_52621_52634 = state_52611__$1;(statearr_52621_52634[(2)] = null);
(statearr_52621_52634[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_52625 = [null,null,null,null,null,null,null,null,null];(statearr_52625[(0)] = state_machine__5679__auto__);
(statearr_52625[(1)] = (1));
return statearr_52625;
});
var state_machine__5679__auto____1 = (function (state_52611){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52611);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52626){if((e52626 instanceof Object))
{var ex__5682__auto__ = e52626;var statearr_52627_52635 = state_52611;(statearr_52627_52635[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52611);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52626;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52636 = state_52611;
state_52611 = G__52636;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52611){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_52628 = f__5694__auto__.call(null);(statearr_52628[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_52628;
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
return (function (state_52698){var state_val_52699 = (state_52698[(1)]);if((state_val_52699 === (7)))
{var inst_52679 = (state_52698[(7)]);var inst_52684 = (state_52698[(2)]);var inst_52685 = cljs.core.next.call(null,inst_52679);var inst_52679__$1 = inst_52685;var state_52698__$1 = (function (){var statearr_52700 = state_52698;(statearr_52700[(8)] = inst_52684);
(statearr_52700[(7)] = inst_52679__$1);
return statearr_52700;
})();var statearr_52701_52719 = state_52698__$1;(statearr_52701_52719[(2)] = null);
(statearr_52701_52719[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52699 === (1)))
{var inst_52678 = cljs.core.seq.call(null,coll);var inst_52679 = inst_52678;var state_52698__$1 = (function (){var statearr_52702 = state_52698;(statearr_52702[(7)] = inst_52679);
return statearr_52702;
})();var statearr_52703_52720 = state_52698__$1;(statearr_52703_52720[(2)] = null);
(statearr_52703_52720[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52699 === (4)))
{var inst_52679 = (state_52698[(7)]);var inst_52682 = cljs.core.first.call(null,inst_52679);var state_52698__$1 = state_52698;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_52698__$1,(7),ch,inst_52682);
} else
{if((state_val_52699 === (6)))
{var inst_52694 = (state_52698[(2)]);var state_52698__$1 = state_52698;var statearr_52704_52721 = state_52698__$1;(statearr_52704_52721[(2)] = inst_52694);
(statearr_52704_52721[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52699 === (3)))
{var inst_52696 = (state_52698[(2)]);var state_52698__$1 = state_52698;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_52698__$1,inst_52696);
} else
{if((state_val_52699 === (2)))
{var inst_52679 = (state_52698[(7)]);var state_52698__$1 = state_52698;if(cljs.core.truth_(inst_52679))
{var statearr_52705_52722 = state_52698__$1;(statearr_52705_52722[(1)] = (4));
} else
{var statearr_52706_52723 = state_52698__$1;(statearr_52706_52723[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52699 === (9)))
{var state_52698__$1 = state_52698;var statearr_52707_52724 = state_52698__$1;(statearr_52707_52724[(2)] = null);
(statearr_52707_52724[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52699 === (5)))
{var state_52698__$1 = state_52698;if(cljs.core.truth_(close_QMARK_))
{var statearr_52708_52725 = state_52698__$1;(statearr_52708_52725[(1)] = (8));
} else
{var statearr_52709_52726 = state_52698__$1;(statearr_52709_52726[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52699 === (10)))
{var inst_52692 = (state_52698[(2)]);var state_52698__$1 = state_52698;var statearr_52710_52727 = state_52698__$1;(statearr_52710_52727[(2)] = inst_52692);
(statearr_52710_52727[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_52699 === (8)))
{var inst_52689 = cljs.core.async.close_BANG_.call(null,ch);var state_52698__$1 = state_52698;var statearr_52711_52728 = state_52698__$1;(statearr_52711_52728[(2)] = inst_52689);
(statearr_52711_52728[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_52715 = [null,null,null,null,null,null,null,null,null];(statearr_52715[(0)] = state_machine__5679__auto__);
(statearr_52715[(1)] = (1));
return statearr_52715;
});
var state_machine__5679__auto____1 = (function (state_52698){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_52698);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e52716){if((e52716 instanceof Object))
{var ex__5682__auto__ = e52716;var statearr_52717_52729 = state_52698;(statearr_52717_52729[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_52698);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e52716;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__52730 = state_52698;
state_52698 = G__52730;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_52698){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_52698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_52718 = f__5694__auto__.call(null);(statearr_52718[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_52718;
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
cljs.core.async.Mux = (function (){var obj52732 = {};return obj52732;
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
cljs.core.async.Mult = (function (){var obj52734 = {};return obj52734;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t52958 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t52958 = (function (cs,ch,mult,meta52959){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta52959 = meta52959;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t52958.cljs$lang$type = true;
cljs.core.async.t52958.cljs$lang$ctorStr = "cljs.core.async/t52958";
cljs.core.async.t52958.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t52958");
});})(cs))
;
cljs.core.async.t52958.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t52958.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t52958.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t52958.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t52958.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t52958.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t52958.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_52960){var self__ = this;
var _52960__$1 = this;return self__.meta52959;
});})(cs))
;
cljs.core.async.t52958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_52960,meta52959__$1){var self__ = this;
var _52960__$1 = this;return (new cljs.core.async.t52958(self__.cs,self__.ch,self__.mult,meta52959__$1));
});})(cs))
;
cljs.core.async.__GT_t52958 = ((function (cs){
return (function __GT_t52958(cs__$1,ch__$1,mult__$1,meta52959){return (new cljs.core.async.t52958(cs__$1,ch__$1,mult__$1,meta52959));
});})(cs))
;
}
return (new cljs.core.async.t52958(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___53181 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53181,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53181,cs,m,dchan,dctr,done){
return (function (state_53095){var state_val_53096 = (state_53095[(1)]);if((state_val_53096 === (7)))
{var inst_53091 = (state_53095[(2)]);var state_53095__$1 = state_53095;var statearr_53097_53182 = state_53095__$1;(statearr_53097_53182[(2)] = inst_53091);
(statearr_53097_53182[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (20)))
{var inst_52992 = (state_53095[(7)]);var inst_53002 = cljs.core.first.call(null,inst_52992);var inst_53003 = cljs.core.nth.call(null,inst_53002,(0),null);var inst_53004 = cljs.core.nth.call(null,inst_53002,(1),null);var state_53095__$1 = (function (){var statearr_53098 = state_53095;(statearr_53098[(8)] = inst_53003);
return statearr_53098;
})();if(cljs.core.truth_(inst_53004))
{var statearr_53099_53183 = state_53095__$1;(statearr_53099_53183[(1)] = (22));
} else
{var statearr_53100_53184 = state_53095__$1;(statearr_53100_53184[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (27)))
{var inst_53032 = (state_53095[(9)]);var inst_53034 = (state_53095[(10)]);var inst_53039 = cljs.core._nth.call(null,inst_53032,inst_53034);var state_53095__$1 = (function (){var statearr_53101 = state_53095;(statearr_53101[(11)] = inst_53039);
return statearr_53101;
})();var statearr_53102_53185 = state_53095__$1;(statearr_53102_53185[(2)] = null);
(statearr_53102_53185[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (1)))
{var state_53095__$1 = state_53095;var statearr_53103_53186 = state_53095__$1;(statearr_53103_53186[(2)] = null);
(statearr_53103_53186[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (24)))
{var inst_52992 = (state_53095[(7)]);var inst_53009 = (state_53095[(2)]);var inst_53010 = cljs.core.next.call(null,inst_52992);var inst_52972 = inst_53010;var inst_52973 = null;var inst_52974 = (0);var inst_52975 = (0);var state_53095__$1 = (function (){var statearr_53104 = state_53095;(statearr_53104[(12)] = inst_52975);
(statearr_53104[(13)] = inst_53009);
(statearr_53104[(14)] = inst_52972);
(statearr_53104[(15)] = inst_52973);
(statearr_53104[(16)] = inst_52974);
return statearr_53104;
})();var statearr_53105_53187 = state_53095__$1;(statearr_53105_53187[(2)] = null);
(statearr_53105_53187[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (39)))
{var inst_53052 = (state_53095[(17)]);var inst_53070 = (state_53095[(2)]);var inst_53071 = cljs.core.next.call(null,inst_53052);var inst_53031 = inst_53071;var inst_53032 = null;var inst_53033 = (0);var inst_53034 = (0);var state_53095__$1 = (function (){var statearr_53109 = state_53095;(statearr_53109[(18)] = inst_53033);
(statearr_53109[(9)] = inst_53032);
(statearr_53109[(19)] = inst_53031);
(statearr_53109[(20)] = inst_53070);
(statearr_53109[(10)] = inst_53034);
return statearr_53109;
})();var statearr_53110_53188 = state_53095__$1;(statearr_53110_53188[(2)] = null);
(statearr_53110_53188[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (4)))
{var inst_52963 = (state_53095[(21)]);var inst_52963__$1 = (state_53095[(2)]);var inst_52964 = (inst_52963__$1 == null);var state_53095__$1 = (function (){var statearr_53111 = state_53095;(statearr_53111[(21)] = inst_52963__$1);
return statearr_53111;
})();if(cljs.core.truth_(inst_52964))
{var statearr_53112_53189 = state_53095__$1;(statearr_53112_53189[(1)] = (5));
} else
{var statearr_53113_53190 = state_53095__$1;(statearr_53113_53190[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (15)))
{var inst_52975 = (state_53095[(12)]);var inst_52972 = (state_53095[(14)]);var inst_52973 = (state_53095[(15)]);var inst_52974 = (state_53095[(16)]);var inst_52988 = (state_53095[(2)]);var inst_52989 = (inst_52975 + (1));var tmp53106 = inst_52972;var tmp53107 = inst_52973;var tmp53108 = inst_52974;var inst_52972__$1 = tmp53106;var inst_52973__$1 = tmp53107;var inst_52974__$1 = tmp53108;var inst_52975__$1 = inst_52989;var state_53095__$1 = (function (){var statearr_53114 = state_53095;(statearr_53114[(12)] = inst_52975__$1);
(statearr_53114[(22)] = inst_52988);
(statearr_53114[(14)] = inst_52972__$1);
(statearr_53114[(15)] = inst_52973__$1);
(statearr_53114[(16)] = inst_52974__$1);
return statearr_53114;
})();var statearr_53115_53191 = state_53095__$1;(statearr_53115_53191[(2)] = null);
(statearr_53115_53191[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (21)))
{var inst_53013 = (state_53095[(2)]);var state_53095__$1 = state_53095;var statearr_53116_53192 = state_53095__$1;(statearr_53116_53192[(2)] = inst_53013);
(statearr_53116_53192[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (31)))
{var inst_53039 = (state_53095[(11)]);var inst_53040 = (state_53095[(2)]);var inst_53041 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_53042 = cljs.core.async.untap_STAR_.call(null,m,inst_53039);var state_53095__$1 = (function (){var statearr_53117 = state_53095;(statearr_53117[(23)] = inst_53040);
(statearr_53117[(24)] = inst_53041);
return statearr_53117;
})();var statearr_53118_53193 = state_53095__$1;(statearr_53118_53193[(2)] = inst_53042);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53095__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (32)))
{var inst_52963 = (state_53095[(21)]);var inst_53039 = (state_53095[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53095,(31),Object,null,(30));var inst_53046 = cljs.core.async.put_BANG_.call(null,inst_53039,inst_52963,done);var state_53095__$1 = state_53095;var statearr_53119_53194 = state_53095__$1;(statearr_53119_53194[(2)] = inst_53046);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53095__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (40)))
{var inst_53061 = (state_53095[(25)]);var inst_53062 = (state_53095[(2)]);var inst_53063 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_53064 = cljs.core.async.untap_STAR_.call(null,m,inst_53061);var state_53095__$1 = (function (){var statearr_53120 = state_53095;(statearr_53120[(26)] = inst_53063);
(statearr_53120[(27)] = inst_53062);
return statearr_53120;
})();var statearr_53121_53195 = state_53095__$1;(statearr_53121_53195[(2)] = inst_53064);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53095__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (33)))
{var inst_53052 = (state_53095[(17)]);var inst_53054 = cljs.core.chunked_seq_QMARK_.call(null,inst_53052);var state_53095__$1 = state_53095;if(inst_53054)
{var statearr_53122_53196 = state_53095__$1;(statearr_53122_53196[(1)] = (36));
} else
{var statearr_53123_53197 = state_53095__$1;(statearr_53123_53197[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (13)))
{var inst_52982 = (state_53095[(28)]);var inst_52985 = cljs.core.async.close_BANG_.call(null,inst_52982);var state_53095__$1 = state_53095;var statearr_53124_53198 = state_53095__$1;(statearr_53124_53198[(2)] = inst_52985);
(statearr_53124_53198[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (22)))
{var inst_53003 = (state_53095[(8)]);var inst_53006 = cljs.core.async.close_BANG_.call(null,inst_53003);var state_53095__$1 = state_53095;var statearr_53125_53199 = state_53095__$1;(statearr_53125_53199[(2)] = inst_53006);
(statearr_53125_53199[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (36)))
{var inst_53052 = (state_53095[(17)]);var inst_53056 = cljs.core.chunk_first.call(null,inst_53052);var inst_53057 = cljs.core.chunk_rest.call(null,inst_53052);var inst_53058 = cljs.core.count.call(null,inst_53056);var inst_53031 = inst_53057;var inst_53032 = inst_53056;var inst_53033 = inst_53058;var inst_53034 = (0);var state_53095__$1 = (function (){var statearr_53126 = state_53095;(statearr_53126[(18)] = inst_53033);
(statearr_53126[(9)] = inst_53032);
(statearr_53126[(19)] = inst_53031);
(statearr_53126[(10)] = inst_53034);
return statearr_53126;
})();var statearr_53127_53200 = state_53095__$1;(statearr_53127_53200[(2)] = null);
(statearr_53127_53200[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (41)))
{var inst_52963 = (state_53095[(21)]);var inst_53061 = (state_53095[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53095,(40),Object,null,(39));var inst_53068 = cljs.core.async.put_BANG_.call(null,inst_53061,inst_52963,done);var state_53095__$1 = state_53095;var statearr_53128_53201 = state_53095__$1;(statearr_53128_53201[(2)] = inst_53068);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53095__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (43)))
{var state_53095__$1 = state_53095;var statearr_53129_53202 = state_53095__$1;(statearr_53129_53202[(2)] = null);
(statearr_53129_53202[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (29)))
{var inst_53079 = (state_53095[(2)]);var state_53095__$1 = state_53095;var statearr_53130_53203 = state_53095__$1;(statearr_53130_53203[(2)] = inst_53079);
(statearr_53130_53203[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (44)))
{var inst_53088 = (state_53095[(2)]);var state_53095__$1 = (function (){var statearr_53131 = state_53095;(statearr_53131[(29)] = inst_53088);
return statearr_53131;
})();var statearr_53132_53204 = state_53095__$1;(statearr_53132_53204[(2)] = null);
(statearr_53132_53204[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (6)))
{var inst_53023 = (state_53095[(30)]);var inst_53022 = cljs.core.deref.call(null,cs);var inst_53023__$1 = cljs.core.keys.call(null,inst_53022);var inst_53024 = cljs.core.count.call(null,inst_53023__$1);var inst_53025 = cljs.core.reset_BANG_.call(null,dctr,inst_53024);var inst_53030 = cljs.core.seq.call(null,inst_53023__$1);var inst_53031 = inst_53030;var inst_53032 = null;var inst_53033 = (0);var inst_53034 = (0);var state_53095__$1 = (function (){var statearr_53133 = state_53095;(statearr_53133[(18)] = inst_53033);
(statearr_53133[(9)] = inst_53032);
(statearr_53133[(31)] = inst_53025);
(statearr_53133[(19)] = inst_53031);
(statearr_53133[(30)] = inst_53023__$1);
(statearr_53133[(10)] = inst_53034);
return statearr_53133;
})();var statearr_53134_53205 = state_53095__$1;(statearr_53134_53205[(2)] = null);
(statearr_53134_53205[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (28)))
{var inst_53052 = (state_53095[(17)]);var inst_53031 = (state_53095[(19)]);var inst_53052__$1 = cljs.core.seq.call(null,inst_53031);var state_53095__$1 = (function (){var statearr_53135 = state_53095;(statearr_53135[(17)] = inst_53052__$1);
return statearr_53135;
})();if(inst_53052__$1)
{var statearr_53136_53206 = state_53095__$1;(statearr_53136_53206[(1)] = (33));
} else
{var statearr_53137_53207 = state_53095__$1;(statearr_53137_53207[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (25)))
{var inst_53033 = (state_53095[(18)]);var inst_53034 = (state_53095[(10)]);var inst_53036 = (inst_53034 < inst_53033);var inst_53037 = inst_53036;var state_53095__$1 = state_53095;if(cljs.core.truth_(inst_53037))
{var statearr_53138_53208 = state_53095__$1;(statearr_53138_53208[(1)] = (27));
} else
{var statearr_53139_53209 = state_53095__$1;(statearr_53139_53209[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (34)))
{var state_53095__$1 = state_53095;var statearr_53140_53210 = state_53095__$1;(statearr_53140_53210[(2)] = null);
(statearr_53140_53210[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (17)))
{var state_53095__$1 = state_53095;var statearr_53141_53211 = state_53095__$1;(statearr_53141_53211[(2)] = null);
(statearr_53141_53211[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (3)))
{var inst_53093 = (state_53095[(2)]);var state_53095__$1 = state_53095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53095__$1,inst_53093);
} else
{if((state_val_53096 === (12)))
{var inst_53018 = (state_53095[(2)]);var state_53095__$1 = state_53095;var statearr_53142_53212 = state_53095__$1;(statearr_53142_53212[(2)] = inst_53018);
(statearr_53142_53212[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (2)))
{var state_53095__$1 = state_53095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53095__$1,(4),ch);
} else
{if((state_val_53096 === (23)))
{var state_53095__$1 = state_53095;var statearr_53143_53213 = state_53095__$1;(statearr_53143_53213[(2)] = null);
(statearr_53143_53213[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (35)))
{var inst_53077 = (state_53095[(2)]);var state_53095__$1 = state_53095;var statearr_53144_53214 = state_53095__$1;(statearr_53144_53214[(2)] = inst_53077);
(statearr_53144_53214[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (19)))
{var inst_52992 = (state_53095[(7)]);var inst_52996 = cljs.core.chunk_first.call(null,inst_52992);var inst_52997 = cljs.core.chunk_rest.call(null,inst_52992);var inst_52998 = cljs.core.count.call(null,inst_52996);var inst_52972 = inst_52997;var inst_52973 = inst_52996;var inst_52974 = inst_52998;var inst_52975 = (0);var state_53095__$1 = (function (){var statearr_53145 = state_53095;(statearr_53145[(12)] = inst_52975);
(statearr_53145[(14)] = inst_52972);
(statearr_53145[(15)] = inst_52973);
(statearr_53145[(16)] = inst_52974);
return statearr_53145;
})();var statearr_53146_53215 = state_53095__$1;(statearr_53146_53215[(2)] = null);
(statearr_53146_53215[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (11)))
{var inst_52992 = (state_53095[(7)]);var inst_52972 = (state_53095[(14)]);var inst_52992__$1 = cljs.core.seq.call(null,inst_52972);var state_53095__$1 = (function (){var statearr_53147 = state_53095;(statearr_53147[(7)] = inst_52992__$1);
return statearr_53147;
})();if(inst_52992__$1)
{var statearr_53148_53216 = state_53095__$1;(statearr_53148_53216[(1)] = (16));
} else
{var statearr_53149_53217 = state_53095__$1;(statearr_53149_53217[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (9)))
{var inst_53020 = (state_53095[(2)]);var state_53095__$1 = state_53095;var statearr_53150_53218 = state_53095__$1;(statearr_53150_53218[(2)] = inst_53020);
(statearr_53150_53218[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (5)))
{var inst_52970 = cljs.core.deref.call(null,cs);var inst_52971 = cljs.core.seq.call(null,inst_52970);var inst_52972 = inst_52971;var inst_52973 = null;var inst_52974 = (0);var inst_52975 = (0);var state_53095__$1 = (function (){var statearr_53151 = state_53095;(statearr_53151[(12)] = inst_52975);
(statearr_53151[(14)] = inst_52972);
(statearr_53151[(15)] = inst_52973);
(statearr_53151[(16)] = inst_52974);
return statearr_53151;
})();var statearr_53152_53219 = state_53095__$1;(statearr_53152_53219[(2)] = null);
(statearr_53152_53219[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (14)))
{var state_53095__$1 = state_53095;var statearr_53153_53220 = state_53095__$1;(statearr_53153_53220[(2)] = null);
(statearr_53153_53220[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (45)))
{var inst_53085 = (state_53095[(2)]);var state_53095__$1 = state_53095;var statearr_53154_53221 = state_53095__$1;(statearr_53154_53221[(2)] = inst_53085);
(statearr_53154_53221[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (26)))
{var inst_53023 = (state_53095[(30)]);var inst_53081 = (state_53095[(2)]);var inst_53082 = cljs.core.seq.call(null,inst_53023);var state_53095__$1 = (function (){var statearr_53155 = state_53095;(statearr_53155[(32)] = inst_53081);
return statearr_53155;
})();if(inst_53082)
{var statearr_53156_53222 = state_53095__$1;(statearr_53156_53222[(1)] = (42));
} else
{var statearr_53157_53223 = state_53095__$1;(statearr_53157_53223[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (16)))
{var inst_52992 = (state_53095[(7)]);var inst_52994 = cljs.core.chunked_seq_QMARK_.call(null,inst_52992);var state_53095__$1 = state_53095;if(inst_52994)
{var statearr_53161_53224 = state_53095__$1;(statearr_53161_53224[(1)] = (19));
} else
{var statearr_53162_53225 = state_53095__$1;(statearr_53162_53225[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (38)))
{var inst_53074 = (state_53095[(2)]);var state_53095__$1 = state_53095;var statearr_53163_53226 = state_53095__$1;(statearr_53163_53226[(2)] = inst_53074);
(statearr_53163_53226[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (30)))
{var inst_53033 = (state_53095[(18)]);var inst_53032 = (state_53095[(9)]);var inst_53031 = (state_53095[(19)]);var inst_53034 = (state_53095[(10)]);var inst_53048 = (state_53095[(2)]);var inst_53049 = (inst_53034 + (1));var tmp53158 = inst_53033;var tmp53159 = inst_53032;var tmp53160 = inst_53031;var inst_53031__$1 = tmp53160;var inst_53032__$1 = tmp53159;var inst_53033__$1 = tmp53158;var inst_53034__$1 = inst_53049;var state_53095__$1 = (function (){var statearr_53164 = state_53095;(statearr_53164[(18)] = inst_53033__$1);
(statearr_53164[(9)] = inst_53032__$1);
(statearr_53164[(19)] = inst_53031__$1);
(statearr_53164[(33)] = inst_53048);
(statearr_53164[(10)] = inst_53034__$1);
return statearr_53164;
})();var statearr_53165_53227 = state_53095__$1;(statearr_53165_53227[(2)] = null);
(statearr_53165_53227[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (10)))
{var inst_52975 = (state_53095[(12)]);var inst_52973 = (state_53095[(15)]);var inst_52981 = cljs.core._nth.call(null,inst_52973,inst_52975);var inst_52982 = cljs.core.nth.call(null,inst_52981,(0),null);var inst_52983 = cljs.core.nth.call(null,inst_52981,(1),null);var state_53095__$1 = (function (){var statearr_53166 = state_53095;(statearr_53166[(28)] = inst_52982);
return statearr_53166;
})();if(cljs.core.truth_(inst_52983))
{var statearr_53167_53228 = state_53095__$1;(statearr_53167_53228[(1)] = (13));
} else
{var statearr_53168_53229 = state_53095__$1;(statearr_53168_53229[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (18)))
{var inst_53016 = (state_53095[(2)]);var state_53095__$1 = state_53095;var statearr_53169_53230 = state_53095__$1;(statearr_53169_53230[(2)] = inst_53016);
(statearr_53169_53230[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (42)))
{var state_53095__$1 = state_53095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53095__$1,(45),dchan);
} else
{if((state_val_53096 === (37)))
{var inst_53052 = (state_53095[(17)]);var inst_53061 = cljs.core.first.call(null,inst_53052);var state_53095__$1 = (function (){var statearr_53170 = state_53095;(statearr_53170[(25)] = inst_53061);
return statearr_53170;
})();var statearr_53171_53231 = state_53095__$1;(statearr_53171_53231[(2)] = null);
(statearr_53171_53231[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53096 === (8)))
{var inst_52975 = (state_53095[(12)]);var inst_52974 = (state_53095[(16)]);var inst_52977 = (inst_52975 < inst_52974);var inst_52978 = inst_52977;var state_53095__$1 = state_53095;if(cljs.core.truth_(inst_52978))
{var statearr_53172_53232 = state_53095__$1;(statearr_53172_53232[(1)] = (10));
} else
{var statearr_53173_53233 = state_53095__$1;(statearr_53173_53233[(1)] = (11));
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
});})(c__5693__auto___53181,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___53181,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53177 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53177[(0)] = state_machine__5679__auto__);
(statearr_53177[(1)] = (1));
return statearr_53177;
});
var state_machine__5679__auto____1 = (function (state_53095){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53095);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53178){if((e53178 instanceof Object))
{var ex__5682__auto__ = e53178;var statearr_53179_53234 = state_53095;(statearr_53179_53234[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53095);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53235 = state_53095;
state_53095 = G__53235;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53095){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53181,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_53180 = f__5694__auto__.call(null);(statearr_53180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53181);
return statearr_53180;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53181,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj53237 = {};return obj53237;
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
;var m = (function (){if(typeof cljs.core.async.t53347 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53347 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta53348){
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
this.meta53348 = meta53348;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53347.cljs$lang$type = true;
cljs.core.async.t53347.cljs$lang$ctorStr = "cljs.core.async/t53347";
cljs.core.async.t53347.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53347");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53347.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t53347.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53347.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53347.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53347.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53347.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53347.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t53347.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53347.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53349){var self__ = this;
var _53349__$1 = this;return self__.meta53348;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t53347.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_53349,meta53348__$1){var self__ = this;
var _53349__$1 = this;return (new cljs.core.async.t53347(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta53348__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t53347 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t53347(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53348){return (new cljs.core.async.t53347(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta53348));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t53347(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___53456 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_53414){var state_val_53415 = (state_53414[(1)]);if((state_val_53415 === (7)))
{var inst_53363 = (state_53414[(7)]);var inst_53368 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53363);var state_53414__$1 = state_53414;var statearr_53416_53457 = state_53414__$1;(statearr_53416_53457[(2)] = inst_53368);
(statearr_53416_53457[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (20)))
{var inst_53378 = (state_53414[(8)]);var state_53414__$1 = state_53414;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53414__$1,(23),out,inst_53378);
} else
{if((state_val_53415 === (1)))
{var inst_53353 = (state_53414[(9)]);var inst_53353__$1 = calc_state.call(null);var inst_53354 = cljs.core.seq_QMARK_.call(null,inst_53353__$1);var state_53414__$1 = (function (){var statearr_53417 = state_53414;(statearr_53417[(9)] = inst_53353__$1);
return statearr_53417;
})();if(inst_53354)
{var statearr_53418_53458 = state_53414__$1;(statearr_53418_53458[(1)] = (2));
} else
{var statearr_53419_53459 = state_53414__$1;(statearr_53419_53459[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (4)))
{var inst_53353 = (state_53414[(9)]);var inst_53359 = (state_53414[(2)]);var inst_53360 = cljs.core.get.call(null,inst_53359,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_53361 = cljs.core.get.call(null,inst_53359,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_53362 = cljs.core.get.call(null,inst_53359,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_53363 = inst_53353;var state_53414__$1 = (function (){var statearr_53420 = state_53414;(statearr_53420[(10)] = inst_53360);
(statearr_53420[(11)] = inst_53362);
(statearr_53420[(7)] = inst_53363);
(statearr_53420[(12)] = inst_53361);
return statearr_53420;
})();var statearr_53421_53460 = state_53414__$1;(statearr_53421_53460[(2)] = null);
(statearr_53421_53460[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (15)))
{var state_53414__$1 = state_53414;var statearr_53422_53461 = state_53414__$1;(statearr_53422_53461[(2)] = null);
(statearr_53422_53461[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (21)))
{var state_53414__$1 = state_53414;var statearr_53423_53462 = state_53414__$1;(statearr_53423_53462[(2)] = null);
(statearr_53423_53462[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (13)))
{var inst_53410 = (state_53414[(2)]);var state_53414__$1 = state_53414;var statearr_53424_53463 = state_53414__$1;(statearr_53424_53463[(2)] = inst_53410);
(statearr_53424_53463[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (22)))
{var inst_53371 = (state_53414[(13)]);var inst_53407 = (state_53414[(2)]);var inst_53363 = inst_53371;var state_53414__$1 = (function (){var statearr_53425 = state_53414;(statearr_53425[(14)] = inst_53407);
(statearr_53425[(7)] = inst_53363);
return statearr_53425;
})();var statearr_53426_53464 = state_53414__$1;(statearr_53426_53464[(2)] = null);
(statearr_53426_53464[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (6)))
{var inst_53412 = (state_53414[(2)]);var state_53414__$1 = state_53414;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53414__$1,inst_53412);
} else
{if((state_val_53415 === (17)))
{var inst_53393 = (state_53414[(15)]);var state_53414__$1 = state_53414;var statearr_53427_53465 = state_53414__$1;(statearr_53427_53465[(2)] = inst_53393);
(statearr_53427_53465[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (3)))
{var inst_53353 = (state_53414[(9)]);var state_53414__$1 = state_53414;var statearr_53428_53466 = state_53414__$1;(statearr_53428_53466[(2)] = inst_53353);
(statearr_53428_53466[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (12)))
{var inst_53393 = (state_53414[(15)]);var inst_53374 = (state_53414[(16)]);var inst_53379 = (state_53414[(17)]);var inst_53393__$1 = inst_53374.call(null,inst_53379);var state_53414__$1 = (function (){var statearr_53429 = state_53414;(statearr_53429[(15)] = inst_53393__$1);
return statearr_53429;
})();if(cljs.core.truth_(inst_53393__$1))
{var statearr_53430_53467 = state_53414__$1;(statearr_53430_53467[(1)] = (17));
} else
{var statearr_53431_53468 = state_53414__$1;(statearr_53431_53468[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (2)))
{var inst_53353 = (state_53414[(9)]);var inst_53356 = cljs.core.apply.call(null,cljs.core.hash_map,inst_53353);var state_53414__$1 = state_53414;var statearr_53432_53469 = state_53414__$1;(statearr_53432_53469[(2)] = inst_53356);
(statearr_53432_53469[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (23)))
{var inst_53404 = (state_53414[(2)]);var state_53414__$1 = state_53414;var statearr_53433_53470 = state_53414__$1;(statearr_53433_53470[(2)] = inst_53404);
(statearr_53433_53470[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (19)))
{var inst_53401 = (state_53414[(2)]);var state_53414__$1 = state_53414;if(cljs.core.truth_(inst_53401))
{var statearr_53434_53471 = state_53414__$1;(statearr_53434_53471[(1)] = (20));
} else
{var statearr_53435_53472 = state_53414__$1;(statearr_53435_53472[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (11)))
{var inst_53378 = (state_53414[(8)]);var inst_53384 = (inst_53378 == null);var state_53414__$1 = state_53414;if(cljs.core.truth_(inst_53384))
{var statearr_53436_53473 = state_53414__$1;(statearr_53436_53473[(1)] = (14));
} else
{var statearr_53437_53474 = state_53414__$1;(statearr_53437_53474[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (9)))
{var inst_53371 = (state_53414[(13)]);var inst_53371__$1 = (state_53414[(2)]);var inst_53372 = cljs.core.get.call(null,inst_53371__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_53373 = cljs.core.get.call(null,inst_53371__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_53374 = cljs.core.get.call(null,inst_53371__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_53414__$1 = (function (){var statearr_53438 = state_53414;(statearr_53438[(13)] = inst_53371__$1);
(statearr_53438[(18)] = inst_53373);
(statearr_53438[(16)] = inst_53374);
return statearr_53438;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_53414__$1,(10),inst_53372);
} else
{if((state_val_53415 === (5)))
{var inst_53363 = (state_53414[(7)]);var inst_53366 = cljs.core.seq_QMARK_.call(null,inst_53363);var state_53414__$1 = state_53414;if(inst_53366)
{var statearr_53439_53475 = state_53414__$1;(statearr_53439_53475[(1)] = (7));
} else
{var statearr_53440_53476 = state_53414__$1;(statearr_53440_53476[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (14)))
{var inst_53379 = (state_53414[(17)]);var inst_53386 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_53379);var state_53414__$1 = state_53414;var statearr_53441_53477 = state_53414__$1;(statearr_53441_53477[(2)] = inst_53386);
(statearr_53441_53477[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (16)))
{var inst_53389 = (state_53414[(2)]);var inst_53390 = calc_state.call(null);var inst_53363 = inst_53390;var state_53414__$1 = (function (){var statearr_53442 = state_53414;(statearr_53442[(19)] = inst_53389);
(statearr_53442[(7)] = inst_53363);
return statearr_53442;
})();var statearr_53443_53478 = state_53414__$1;(statearr_53443_53478[(2)] = null);
(statearr_53443_53478[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (10)))
{var inst_53379 = (state_53414[(17)]);var inst_53378 = (state_53414[(8)]);var inst_53377 = (state_53414[(2)]);var inst_53378__$1 = cljs.core.nth.call(null,inst_53377,(0),null);var inst_53379__$1 = cljs.core.nth.call(null,inst_53377,(1),null);var inst_53380 = (inst_53378__$1 == null);var inst_53381 = cljs.core._EQ_.call(null,inst_53379__$1,change);var inst_53382 = (inst_53380) || (inst_53381);var state_53414__$1 = (function (){var statearr_53444 = state_53414;(statearr_53444[(17)] = inst_53379__$1);
(statearr_53444[(8)] = inst_53378__$1);
return statearr_53444;
})();if(cljs.core.truth_(inst_53382))
{var statearr_53445_53479 = state_53414__$1;(statearr_53445_53479[(1)] = (11));
} else
{var statearr_53446_53480 = state_53414__$1;(statearr_53446_53480[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (18)))
{var inst_53373 = (state_53414[(18)]);var inst_53374 = (state_53414[(16)]);var inst_53379 = (state_53414[(17)]);var inst_53396 = cljs.core.empty_QMARK_.call(null,inst_53374);var inst_53397 = inst_53373.call(null,inst_53379);var inst_53398 = cljs.core.not.call(null,inst_53397);var inst_53399 = (inst_53396) && (inst_53398);var state_53414__$1 = state_53414;var statearr_53447_53481 = state_53414__$1;(statearr_53447_53481[(2)] = inst_53399);
(statearr_53447_53481[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53415 === (8)))
{var inst_53363 = (state_53414[(7)]);var state_53414__$1 = state_53414;var statearr_53448_53482 = state_53414__$1;(statearr_53448_53482[(2)] = inst_53363);
(statearr_53448_53482[(1)] = (9));
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
});})(c__5693__auto___53456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___53456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53452 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53452[(0)] = state_machine__5679__auto__);
(statearr_53452[(1)] = (1));
return statearr_53452;
});
var state_machine__5679__auto____1 = (function (state_53414){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53414);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53453){if((e53453 instanceof Object))
{var ex__5682__auto__ = e53453;var statearr_53454_53483 = state_53414;(statearr_53454_53483[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53414);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53453;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53484 = state_53414;
state_53414 = G__53484;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53414){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53414);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_53455 = f__5694__auto__.call(null);(statearr_53455[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53456);
return statearr_53455;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53456,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj53486 = {};return obj53486;
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
return (function (p1__53487_SHARP_){if(cljs.core.truth_(p1__53487_SHARP_.call(null,topic)))
{return p1__53487_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__53487_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t53612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t53612 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta53613){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta53613 = meta53613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t53612.cljs$lang$type = true;
cljs.core.async.t53612.cljs$lang$ctorStr = "cljs.core.async/t53612";
cljs.core.async.t53612.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t53612");
});})(mults,ensure_mult))
;
cljs.core.async.t53612.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t53612.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t53612.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t53612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t53612.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t53612.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t53612.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t53612.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_53614){var self__ = this;
var _53614__$1 = this;return self__.meta53613;
});})(mults,ensure_mult))
;
cljs.core.async.t53612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_53614,meta53613__$1){var self__ = this;
var _53614__$1 = this;return (new cljs.core.async.t53612(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta53613__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t53612 = ((function (mults,ensure_mult){
return (function __GT_t53612(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta53613){return (new cljs.core.async.t53612(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta53613));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t53612(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___53736 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53736,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53736,mults,ensure_mult,p){
return (function (state_53688){var state_val_53689 = (state_53688[(1)]);if((state_val_53689 === (7)))
{var inst_53684 = (state_53688[(2)]);var state_53688__$1 = state_53688;var statearr_53690_53737 = state_53688__$1;(statearr_53690_53737[(2)] = inst_53684);
(statearr_53690_53737[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (20)))
{var state_53688__$1 = state_53688;var statearr_53691_53738 = state_53688__$1;(statearr_53691_53738[(2)] = null);
(statearr_53691_53738[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (1)))
{var state_53688__$1 = state_53688;var statearr_53692_53739 = state_53688__$1;(statearr_53692_53739[(2)] = null);
(statearr_53692_53739[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (24)))
{var inst_53617 = (state_53688[(7)]);var inst_53667 = (state_53688[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53688,(23),Object,null,(22));var inst_53674 = cljs.core.async.muxch_STAR_.call(null,inst_53667);var state_53688__$1 = state_53688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53688__$1,(25),inst_53674,inst_53617);
} else
{if((state_val_53689 === (4)))
{var inst_53617 = (state_53688[(7)]);var inst_53617__$1 = (state_53688[(2)]);var inst_53618 = (inst_53617__$1 == null);var state_53688__$1 = (function (){var statearr_53693 = state_53688;(statearr_53693[(7)] = inst_53617__$1);
return statearr_53693;
})();if(cljs.core.truth_(inst_53618))
{var statearr_53694_53740 = state_53688__$1;(statearr_53694_53740[(1)] = (5));
} else
{var statearr_53695_53741 = state_53688__$1;(statearr_53695_53741[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (15)))
{var inst_53659 = (state_53688[(2)]);var state_53688__$1 = state_53688;var statearr_53696_53742 = state_53688__$1;(statearr_53696_53742[(2)] = inst_53659);
(statearr_53696_53742[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (21)))
{var inst_53681 = (state_53688[(2)]);var state_53688__$1 = (function (){var statearr_53697 = state_53688;(statearr_53697[(9)] = inst_53681);
return statearr_53697;
})();var statearr_53698_53743 = state_53688__$1;(statearr_53698_53743[(2)] = null);
(statearr_53698_53743[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (13)))
{var inst_53641 = (state_53688[(10)]);var inst_53643 = cljs.core.chunked_seq_QMARK_.call(null,inst_53641);var state_53688__$1 = state_53688;if(inst_53643)
{var statearr_53699_53744 = state_53688__$1;(statearr_53699_53744[(1)] = (16));
} else
{var statearr_53700_53745 = state_53688__$1;(statearr_53700_53745[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (22)))
{var inst_53678 = (state_53688[(2)]);var state_53688__$1 = state_53688;var statearr_53701_53746 = state_53688__$1;(statearr_53701_53746[(2)] = inst_53678);
(statearr_53701_53746[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (6)))
{var inst_53665 = (state_53688[(11)]);var inst_53617 = (state_53688[(7)]);var inst_53667 = (state_53688[(8)]);var inst_53665__$1 = topic_fn.call(null,inst_53617);var inst_53666 = cljs.core.deref.call(null,mults);var inst_53667__$1 = cljs.core.get.call(null,inst_53666,inst_53665__$1);var state_53688__$1 = (function (){var statearr_53702 = state_53688;(statearr_53702[(11)] = inst_53665__$1);
(statearr_53702[(8)] = inst_53667__$1);
return statearr_53702;
})();if(cljs.core.truth_(inst_53667__$1))
{var statearr_53703_53747 = state_53688__$1;(statearr_53703_53747[(1)] = (19));
} else
{var statearr_53704_53748 = state_53688__$1;(statearr_53704_53748[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (25)))
{var inst_53676 = (state_53688[(2)]);var state_53688__$1 = state_53688;var statearr_53705_53749 = state_53688__$1;(statearr_53705_53749[(2)] = inst_53676);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53688__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (17)))
{var inst_53641 = (state_53688[(10)]);var inst_53650 = cljs.core.first.call(null,inst_53641);var inst_53651 = cljs.core.async.muxch_STAR_.call(null,inst_53650);var inst_53652 = cljs.core.async.close_BANG_.call(null,inst_53651);var inst_53653 = cljs.core.next.call(null,inst_53641);var inst_53627 = inst_53653;var inst_53628 = null;var inst_53629 = (0);var inst_53630 = (0);var state_53688__$1 = (function (){var statearr_53706 = state_53688;(statearr_53706[(12)] = inst_53629);
(statearr_53706[(13)] = inst_53652);
(statearr_53706[(14)] = inst_53627);
(statearr_53706[(15)] = inst_53630);
(statearr_53706[(16)] = inst_53628);
return statearr_53706;
})();var statearr_53707_53750 = state_53688__$1;(statearr_53707_53750[(2)] = null);
(statearr_53707_53750[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (3)))
{var inst_53686 = (state_53688[(2)]);var state_53688__$1 = state_53688;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53688__$1,inst_53686);
} else
{if((state_val_53689 === (12)))
{var inst_53661 = (state_53688[(2)]);var state_53688__$1 = state_53688;var statearr_53708_53751 = state_53688__$1;(statearr_53708_53751[(2)] = inst_53661);
(statearr_53708_53751[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (2)))
{var state_53688__$1 = state_53688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53688__$1,(4),ch);
} else
{if((state_val_53689 === (23)))
{var inst_53665 = (state_53688[(11)]);var inst_53669 = (state_53688[(2)]);var inst_53670 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_53665);var state_53688__$1 = (function (){var statearr_53709 = state_53688;(statearr_53709[(17)] = inst_53669);
return statearr_53709;
})();var statearr_53710_53752 = state_53688__$1;(statearr_53710_53752[(2)] = inst_53670);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53688__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (19)))
{var state_53688__$1 = state_53688;var statearr_53711_53753 = state_53688__$1;(statearr_53711_53753[(2)] = null);
(statearr_53711_53753[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (11)))
{var inst_53627 = (state_53688[(14)]);var inst_53641 = (state_53688[(10)]);var inst_53641__$1 = cljs.core.seq.call(null,inst_53627);var state_53688__$1 = (function (){var statearr_53712 = state_53688;(statearr_53712[(10)] = inst_53641__$1);
return statearr_53712;
})();if(inst_53641__$1)
{var statearr_53713_53754 = state_53688__$1;(statearr_53713_53754[(1)] = (13));
} else
{var statearr_53714_53755 = state_53688__$1;(statearr_53714_53755[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (9)))
{var inst_53663 = (state_53688[(2)]);var state_53688__$1 = state_53688;var statearr_53715_53756 = state_53688__$1;(statearr_53715_53756[(2)] = inst_53663);
(statearr_53715_53756[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (5)))
{var inst_53624 = cljs.core.deref.call(null,mults);var inst_53625 = cljs.core.vals.call(null,inst_53624);var inst_53626 = cljs.core.seq.call(null,inst_53625);var inst_53627 = inst_53626;var inst_53628 = null;var inst_53629 = (0);var inst_53630 = (0);var state_53688__$1 = (function (){var statearr_53716 = state_53688;(statearr_53716[(12)] = inst_53629);
(statearr_53716[(14)] = inst_53627);
(statearr_53716[(15)] = inst_53630);
(statearr_53716[(16)] = inst_53628);
return statearr_53716;
})();var statearr_53717_53757 = state_53688__$1;(statearr_53717_53757[(2)] = null);
(statearr_53717_53757[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (14)))
{var state_53688__$1 = state_53688;var statearr_53721_53758 = state_53688__$1;(statearr_53721_53758[(2)] = null);
(statearr_53721_53758[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (16)))
{var inst_53641 = (state_53688[(10)]);var inst_53645 = cljs.core.chunk_first.call(null,inst_53641);var inst_53646 = cljs.core.chunk_rest.call(null,inst_53641);var inst_53647 = cljs.core.count.call(null,inst_53645);var inst_53627 = inst_53646;var inst_53628 = inst_53645;var inst_53629 = inst_53647;var inst_53630 = (0);var state_53688__$1 = (function (){var statearr_53722 = state_53688;(statearr_53722[(12)] = inst_53629);
(statearr_53722[(14)] = inst_53627);
(statearr_53722[(15)] = inst_53630);
(statearr_53722[(16)] = inst_53628);
return statearr_53722;
})();var statearr_53723_53759 = state_53688__$1;(statearr_53723_53759[(2)] = null);
(statearr_53723_53759[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (10)))
{var inst_53629 = (state_53688[(12)]);var inst_53627 = (state_53688[(14)]);var inst_53630 = (state_53688[(15)]);var inst_53628 = (state_53688[(16)]);var inst_53635 = cljs.core._nth.call(null,inst_53628,inst_53630);var inst_53636 = cljs.core.async.muxch_STAR_.call(null,inst_53635);var inst_53637 = cljs.core.async.close_BANG_.call(null,inst_53636);var inst_53638 = (inst_53630 + (1));var tmp53718 = inst_53629;var tmp53719 = inst_53627;var tmp53720 = inst_53628;var inst_53627__$1 = tmp53719;var inst_53628__$1 = tmp53720;var inst_53629__$1 = tmp53718;var inst_53630__$1 = inst_53638;var state_53688__$1 = (function (){var statearr_53724 = state_53688;(statearr_53724[(12)] = inst_53629__$1);
(statearr_53724[(18)] = inst_53637);
(statearr_53724[(14)] = inst_53627__$1);
(statearr_53724[(15)] = inst_53630__$1);
(statearr_53724[(16)] = inst_53628__$1);
return statearr_53724;
})();var statearr_53725_53760 = state_53688__$1;(statearr_53725_53760[(2)] = null);
(statearr_53725_53760[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (18)))
{var inst_53656 = (state_53688[(2)]);var state_53688__$1 = state_53688;var statearr_53726_53761 = state_53688__$1;(statearr_53726_53761[(2)] = inst_53656);
(statearr_53726_53761[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53689 === (8)))
{var inst_53629 = (state_53688[(12)]);var inst_53630 = (state_53688[(15)]);var inst_53632 = (inst_53630 < inst_53629);var inst_53633 = inst_53632;var state_53688__$1 = state_53688;if(cljs.core.truth_(inst_53633))
{var statearr_53727_53762 = state_53688__$1;(statearr_53727_53762[(1)] = (10));
} else
{var statearr_53728_53763 = state_53688__$1;(statearr_53728_53763[(1)] = (11));
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
});})(c__5693__auto___53736,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___53736,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53732 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53732[(0)] = state_machine__5679__auto__);
(statearr_53732[(1)] = (1));
return statearr_53732;
});
var state_machine__5679__auto____1 = (function (state_53688){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53688);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53733){if((e53733 instanceof Object))
{var ex__5682__auto__ = e53733;var statearr_53734_53764 = state_53688;(statearr_53734_53764[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53688);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53733;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53765 = state_53688;
state_53688 = G__53765;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53688){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53736,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_53735 = f__5694__auto__.call(null);(statearr_53735[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53736);
return statearr_53735;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53736,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___53902 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___53902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___53902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_53872){var state_val_53873 = (state_53872[(1)]);if((state_val_53873 === (7)))
{var state_53872__$1 = state_53872;var statearr_53874_53903 = state_53872__$1;(statearr_53874_53903[(2)] = null);
(statearr_53874_53903[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (1)))
{var state_53872__$1 = state_53872;var statearr_53875_53904 = state_53872__$1;(statearr_53875_53904[(2)] = null);
(statearr_53875_53904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (4)))
{var inst_53836 = (state_53872[(7)]);var inst_53838 = (inst_53836 < cnt);var state_53872__$1 = state_53872;if(cljs.core.truth_(inst_53838))
{var statearr_53876_53905 = state_53872__$1;(statearr_53876_53905[(1)] = (6));
} else
{var statearr_53877_53906 = state_53872__$1;(statearr_53877_53906[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (15)))
{var inst_53868 = (state_53872[(2)]);var state_53872__$1 = state_53872;var statearr_53878_53907 = state_53872__$1;(statearr_53878_53907[(2)] = inst_53868);
(statearr_53878_53907[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (13)))
{var inst_53861 = cljs.core.async.close_BANG_.call(null,out);var state_53872__$1 = state_53872;var statearr_53879_53908 = state_53872__$1;(statearr_53879_53908[(2)] = inst_53861);
(statearr_53879_53908[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (6)))
{var state_53872__$1 = state_53872;var statearr_53880_53909 = state_53872__$1;(statearr_53880_53909[(2)] = null);
(statearr_53880_53909[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (3)))
{var inst_53870 = (state_53872[(2)]);var state_53872__$1 = state_53872;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_53872__$1,inst_53870);
} else
{if((state_val_53873 === (12)))
{var inst_53858 = (state_53872[(8)]);var inst_53858__$1 = (state_53872[(2)]);var inst_53859 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_53858__$1);var state_53872__$1 = (function (){var statearr_53881 = state_53872;(statearr_53881[(8)] = inst_53858__$1);
return statearr_53881;
})();if(cljs.core.truth_(inst_53859))
{var statearr_53882_53910 = state_53872__$1;(statearr_53882_53910[(1)] = (13));
} else
{var statearr_53883_53911 = state_53872__$1;(statearr_53883_53911[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (2)))
{var inst_53835 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_53836 = (0);var state_53872__$1 = (function (){var statearr_53884 = state_53872;(statearr_53884[(7)] = inst_53836);
(statearr_53884[(9)] = inst_53835);
return statearr_53884;
})();var statearr_53885_53912 = state_53872__$1;(statearr_53885_53912[(2)] = null);
(statearr_53885_53912[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (11)))
{var inst_53836 = (state_53872[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_53872,(10),Object,null,(9));var inst_53845 = chs__$1.call(null,inst_53836);var inst_53846 = done.call(null,inst_53836);var inst_53847 = cljs.core.async.take_BANG_.call(null,inst_53845,inst_53846);var state_53872__$1 = state_53872;var statearr_53886_53913 = state_53872__$1;(statearr_53886_53913[(2)] = inst_53847);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53872__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (9)))
{var inst_53836 = (state_53872[(7)]);var inst_53849 = (state_53872[(2)]);var inst_53850 = (inst_53836 + (1));var inst_53836__$1 = inst_53850;var state_53872__$1 = (function (){var statearr_53887 = state_53872;(statearr_53887[(7)] = inst_53836__$1);
(statearr_53887[(10)] = inst_53849);
return statearr_53887;
})();var statearr_53888_53914 = state_53872__$1;(statearr_53888_53914[(2)] = null);
(statearr_53888_53914[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (5)))
{var inst_53856 = (state_53872[(2)]);var state_53872__$1 = (function (){var statearr_53889 = state_53872;(statearr_53889[(11)] = inst_53856);
return statearr_53889;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_53872__$1,(12),dchan);
} else
{if((state_val_53873 === (14)))
{var inst_53858 = (state_53872[(8)]);var inst_53863 = cljs.core.apply.call(null,f,inst_53858);var state_53872__$1 = state_53872;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_53872__$1,(16),out,inst_53863);
} else
{if((state_val_53873 === (16)))
{var inst_53865 = (state_53872[(2)]);var state_53872__$1 = (function (){var statearr_53890 = state_53872;(statearr_53890[(12)] = inst_53865);
return statearr_53890;
})();var statearr_53891_53915 = state_53872__$1;(statearr_53891_53915[(2)] = null);
(statearr_53891_53915[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (10)))
{var inst_53840 = (state_53872[(2)]);var inst_53841 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_53872__$1 = (function (){var statearr_53892 = state_53872;(statearr_53892[(13)] = inst_53840);
return statearr_53892;
})();var statearr_53893_53916 = state_53872__$1;(statearr_53893_53916[(2)] = inst_53841);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53872__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_53873 === (8)))
{var inst_53854 = (state_53872[(2)]);var state_53872__$1 = state_53872;var statearr_53894_53917 = state_53872__$1;(statearr_53894_53917[(2)] = inst_53854);
(statearr_53894_53917[(1)] = (5));
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
});})(c__5693__auto___53902,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___53902,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_53898 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_53898[(0)] = state_machine__5679__auto__);
(statearr_53898[(1)] = (1));
return statearr_53898;
});
var state_machine__5679__auto____1 = (function (state_53872){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_53872);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e53899){if((e53899 instanceof Object))
{var ex__5682__auto__ = e53899;var statearr_53900_53918 = state_53872;(statearr_53900_53918[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_53872);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e53899;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__53919 = state_53872;
state_53872 = G__53919;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_53872){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_53872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___53902,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_53901 = f__5694__auto__.call(null);(statearr_53901[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___53902);
return statearr_53901;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___53902,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___54027 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54027,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54027,out){
return (function (state_54003){var state_val_54004 = (state_54003[(1)]);if((state_val_54004 === (7)))
{var inst_53982 = (state_54003[(7)]);var inst_53983 = (state_54003[(8)]);var inst_53982__$1 = (state_54003[(2)]);var inst_53983__$1 = cljs.core.nth.call(null,inst_53982__$1,(0),null);var inst_53984 = cljs.core.nth.call(null,inst_53982__$1,(1),null);var inst_53985 = (inst_53983__$1 == null);var state_54003__$1 = (function (){var statearr_54005 = state_54003;(statearr_54005[(7)] = inst_53982__$1);
(statearr_54005[(9)] = inst_53984);
(statearr_54005[(8)] = inst_53983__$1);
return statearr_54005;
})();if(cljs.core.truth_(inst_53985))
{var statearr_54006_54028 = state_54003__$1;(statearr_54006_54028[(1)] = (8));
} else
{var statearr_54007_54029 = state_54003__$1;(statearr_54007_54029[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54004 === (1)))
{var inst_53974 = cljs.core.vec.call(null,chs);var inst_53975 = inst_53974;var state_54003__$1 = (function (){var statearr_54008 = state_54003;(statearr_54008[(10)] = inst_53975);
return statearr_54008;
})();var statearr_54009_54030 = state_54003__$1;(statearr_54009_54030[(2)] = null);
(statearr_54009_54030[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54004 === (4)))
{var inst_53975 = (state_54003[(10)]);var state_54003__$1 = state_54003;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_54003__$1,(7),inst_53975);
} else
{if((state_val_54004 === (6)))
{var inst_53999 = (state_54003[(2)]);var state_54003__$1 = state_54003;var statearr_54010_54031 = state_54003__$1;(statearr_54010_54031[(2)] = inst_53999);
(statearr_54010_54031[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54004 === (3)))
{var inst_54001 = (state_54003[(2)]);var state_54003__$1 = state_54003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54003__$1,inst_54001);
} else
{if((state_val_54004 === (2)))
{var inst_53975 = (state_54003[(10)]);var inst_53977 = cljs.core.count.call(null,inst_53975);var inst_53978 = (inst_53977 > (0));var state_54003__$1 = state_54003;if(cljs.core.truth_(inst_53978))
{var statearr_54012_54032 = state_54003__$1;(statearr_54012_54032[(1)] = (4));
} else
{var statearr_54013_54033 = state_54003__$1;(statearr_54013_54033[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54004 === (11)))
{var inst_53975 = (state_54003[(10)]);var inst_53992 = (state_54003[(2)]);var tmp54011 = inst_53975;var inst_53975__$1 = tmp54011;var state_54003__$1 = (function (){var statearr_54014 = state_54003;(statearr_54014[(10)] = inst_53975__$1);
(statearr_54014[(11)] = inst_53992);
return statearr_54014;
})();var statearr_54015_54034 = state_54003__$1;(statearr_54015_54034[(2)] = null);
(statearr_54015_54034[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54004 === (9)))
{var inst_53983 = (state_54003[(8)]);var state_54003__$1 = state_54003;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54003__$1,(11),out,inst_53983);
} else
{if((state_val_54004 === (5)))
{var inst_53997 = cljs.core.async.close_BANG_.call(null,out);var state_54003__$1 = state_54003;var statearr_54016_54035 = state_54003__$1;(statearr_54016_54035[(2)] = inst_53997);
(statearr_54016_54035[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54004 === (10)))
{var inst_53995 = (state_54003[(2)]);var state_54003__$1 = state_54003;var statearr_54017_54036 = state_54003__$1;(statearr_54017_54036[(2)] = inst_53995);
(statearr_54017_54036[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54004 === (8)))
{var inst_53982 = (state_54003[(7)]);var inst_53975 = (state_54003[(10)]);var inst_53984 = (state_54003[(9)]);var inst_53983 = (state_54003[(8)]);var inst_53987 = (function (){var c = inst_53984;var v = inst_53983;var vec__53980 = inst_53982;var cs = inst_53975;return ((function (c,v,vec__53980,cs,inst_53982,inst_53975,inst_53984,inst_53983,state_val_54004,c__5693__auto___54027,out){
return (function (p1__53920_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__53920_SHARP_);
});
;})(c,v,vec__53980,cs,inst_53982,inst_53975,inst_53984,inst_53983,state_val_54004,c__5693__auto___54027,out))
})();var inst_53988 = cljs.core.filterv.call(null,inst_53987,inst_53975);var inst_53975__$1 = inst_53988;var state_54003__$1 = (function (){var statearr_54018 = state_54003;(statearr_54018[(10)] = inst_53975__$1);
return statearr_54018;
})();var statearr_54019_54037 = state_54003__$1;(statearr_54019_54037[(2)] = null);
(statearr_54019_54037[(1)] = (2));
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
});})(c__5693__auto___54027,out))
;return ((function (switch__5678__auto__,c__5693__auto___54027,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54023 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54023[(0)] = state_machine__5679__auto__);
(statearr_54023[(1)] = (1));
return statearr_54023;
});
var state_machine__5679__auto____1 = (function (state_54003){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54003);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54024){if((e54024 instanceof Object))
{var ex__5682__auto__ = e54024;var statearr_54025_54038 = state_54003;(statearr_54025_54038[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54039 = state_54003;
state_54003 = G__54039;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54003){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54027,out))
})();var state__5695__auto__ = (function (){var statearr_54026 = f__5694__auto__.call(null);(statearr_54026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54027);
return statearr_54026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54027,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___54132 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54132,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54132,out){
return (function (state_54109){var state_val_54110 = (state_54109[(1)]);if((state_val_54110 === (7)))
{var inst_54091 = (state_54109[(7)]);var inst_54091__$1 = (state_54109[(2)]);var inst_54092 = (inst_54091__$1 == null);var inst_54093 = cljs.core.not.call(null,inst_54092);var state_54109__$1 = (function (){var statearr_54111 = state_54109;(statearr_54111[(7)] = inst_54091__$1);
return statearr_54111;
})();if(inst_54093)
{var statearr_54112_54133 = state_54109__$1;(statearr_54112_54133[(1)] = (8));
} else
{var statearr_54113_54134 = state_54109__$1;(statearr_54113_54134[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54110 === (1)))
{var inst_54086 = (0);var state_54109__$1 = (function (){var statearr_54114 = state_54109;(statearr_54114[(8)] = inst_54086);
return statearr_54114;
})();var statearr_54115_54135 = state_54109__$1;(statearr_54115_54135[(2)] = null);
(statearr_54115_54135[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54110 === (4)))
{var state_54109__$1 = state_54109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54109__$1,(7),ch);
} else
{if((state_val_54110 === (6)))
{var inst_54104 = (state_54109[(2)]);var state_54109__$1 = state_54109;var statearr_54116_54136 = state_54109__$1;(statearr_54116_54136[(2)] = inst_54104);
(statearr_54116_54136[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54110 === (3)))
{var inst_54106 = (state_54109[(2)]);var inst_54107 = cljs.core.async.close_BANG_.call(null,out);var state_54109__$1 = (function (){var statearr_54117 = state_54109;(statearr_54117[(9)] = inst_54106);
return statearr_54117;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54109__$1,inst_54107);
} else
{if((state_val_54110 === (2)))
{var inst_54086 = (state_54109[(8)]);var inst_54088 = (inst_54086 < n);var state_54109__$1 = state_54109;if(cljs.core.truth_(inst_54088))
{var statearr_54118_54137 = state_54109__$1;(statearr_54118_54137[(1)] = (4));
} else
{var statearr_54119_54138 = state_54109__$1;(statearr_54119_54138[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54110 === (11)))
{var inst_54086 = (state_54109[(8)]);var inst_54096 = (state_54109[(2)]);var inst_54097 = (inst_54086 + (1));var inst_54086__$1 = inst_54097;var state_54109__$1 = (function (){var statearr_54120 = state_54109;(statearr_54120[(10)] = inst_54096);
(statearr_54120[(8)] = inst_54086__$1);
return statearr_54120;
})();var statearr_54121_54139 = state_54109__$1;(statearr_54121_54139[(2)] = null);
(statearr_54121_54139[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54110 === (9)))
{var state_54109__$1 = state_54109;var statearr_54122_54140 = state_54109__$1;(statearr_54122_54140[(2)] = null);
(statearr_54122_54140[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54110 === (5)))
{var state_54109__$1 = state_54109;var statearr_54123_54141 = state_54109__$1;(statearr_54123_54141[(2)] = null);
(statearr_54123_54141[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54110 === (10)))
{var inst_54101 = (state_54109[(2)]);var state_54109__$1 = state_54109;var statearr_54124_54142 = state_54109__$1;(statearr_54124_54142[(2)] = inst_54101);
(statearr_54124_54142[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54110 === (8)))
{var inst_54091 = (state_54109[(7)]);var state_54109__$1 = state_54109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54109__$1,(11),out,inst_54091);
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
});})(c__5693__auto___54132,out))
;return ((function (switch__5678__auto__,c__5693__auto___54132,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54128 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_54128[(0)] = state_machine__5679__auto__);
(statearr_54128[(1)] = (1));
return statearr_54128;
});
var state_machine__5679__auto____1 = (function (state_54109){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54109);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54129){if((e54129 instanceof Object))
{var ex__5682__auto__ = e54129;var statearr_54130_54143 = state_54109;(statearr_54130_54143[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54109);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54129;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54144 = state_54109;
state_54109 = G__54144;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54109){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54132,out))
})();var state__5695__auto__ = (function (){var statearr_54131 = f__5694__auto__.call(null);(statearr_54131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54132);
return statearr_54131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54132,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___54241 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54241,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54241,out){
return (function (state_54216){var state_val_54217 = (state_54216[(1)]);if((state_val_54217 === (7)))
{var inst_54211 = (state_54216[(2)]);var state_54216__$1 = state_54216;var statearr_54218_54242 = state_54216__$1;(statearr_54218_54242[(2)] = inst_54211);
(statearr_54218_54242[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54217 === (1)))
{var inst_54193 = null;var state_54216__$1 = (function (){var statearr_54219 = state_54216;(statearr_54219[(7)] = inst_54193);
return statearr_54219;
})();var statearr_54220_54243 = state_54216__$1;(statearr_54220_54243[(2)] = null);
(statearr_54220_54243[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54217 === (4)))
{var inst_54196 = (state_54216[(8)]);var inst_54196__$1 = (state_54216[(2)]);var inst_54197 = (inst_54196__$1 == null);var inst_54198 = cljs.core.not.call(null,inst_54197);var state_54216__$1 = (function (){var statearr_54221 = state_54216;(statearr_54221[(8)] = inst_54196__$1);
return statearr_54221;
})();if(inst_54198)
{var statearr_54222_54244 = state_54216__$1;(statearr_54222_54244[(1)] = (5));
} else
{var statearr_54223_54245 = state_54216__$1;(statearr_54223_54245[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54217 === (6)))
{var state_54216__$1 = state_54216;var statearr_54224_54246 = state_54216__$1;(statearr_54224_54246[(2)] = null);
(statearr_54224_54246[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54217 === (3)))
{var inst_54213 = (state_54216[(2)]);var inst_54214 = cljs.core.async.close_BANG_.call(null,out);var state_54216__$1 = (function (){var statearr_54225 = state_54216;(statearr_54225[(9)] = inst_54213);
return statearr_54225;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54216__$1,inst_54214);
} else
{if((state_val_54217 === (2)))
{var state_54216__$1 = state_54216;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54216__$1,(4),ch);
} else
{if((state_val_54217 === (11)))
{var inst_54196 = (state_54216[(8)]);var inst_54205 = (state_54216[(2)]);var inst_54193 = inst_54196;var state_54216__$1 = (function (){var statearr_54226 = state_54216;(statearr_54226[(7)] = inst_54193);
(statearr_54226[(10)] = inst_54205);
return statearr_54226;
})();var statearr_54227_54247 = state_54216__$1;(statearr_54227_54247[(2)] = null);
(statearr_54227_54247[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54217 === (9)))
{var inst_54196 = (state_54216[(8)]);var state_54216__$1 = state_54216;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54216__$1,(11),out,inst_54196);
} else
{if((state_val_54217 === (5)))
{var inst_54196 = (state_54216[(8)]);var inst_54193 = (state_54216[(7)]);var inst_54200 = cljs.core._EQ_.call(null,inst_54196,inst_54193);var state_54216__$1 = state_54216;if(inst_54200)
{var statearr_54229_54248 = state_54216__$1;(statearr_54229_54248[(1)] = (8));
} else
{var statearr_54230_54249 = state_54216__$1;(statearr_54230_54249[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54217 === (10)))
{var inst_54208 = (state_54216[(2)]);var state_54216__$1 = state_54216;var statearr_54231_54250 = state_54216__$1;(statearr_54231_54250[(2)] = inst_54208);
(statearr_54231_54250[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54217 === (8)))
{var inst_54193 = (state_54216[(7)]);var tmp54228 = inst_54193;var inst_54193__$1 = tmp54228;var state_54216__$1 = (function (){var statearr_54232 = state_54216;(statearr_54232[(7)] = inst_54193__$1);
return statearr_54232;
})();var statearr_54233_54251 = state_54216__$1;(statearr_54233_54251[(2)] = null);
(statearr_54233_54251[(1)] = (2));
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
});})(c__5693__auto___54241,out))
;return ((function (switch__5678__auto__,c__5693__auto___54241,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54237 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_54237[(0)] = state_machine__5679__auto__);
(statearr_54237[(1)] = (1));
return statearr_54237;
});
var state_machine__5679__auto____1 = (function (state_54216){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54216);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54238){if((e54238 instanceof Object))
{var ex__5682__auto__ = e54238;var statearr_54239_54252 = state_54216;(statearr_54239_54252[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54216);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54253 = state_54216;
state_54216 = G__54253;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54216){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54241,out))
})();var state__5695__auto__ = (function (){var statearr_54240 = f__5694__auto__.call(null);(statearr_54240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54241);
return statearr_54240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54241,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___54388 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54388,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54388,out){
return (function (state_54358){var state_val_54359 = (state_54358[(1)]);if((state_val_54359 === (7)))
{var inst_54354 = (state_54358[(2)]);var state_54358__$1 = state_54358;var statearr_54360_54389 = state_54358__$1;(statearr_54360_54389[(2)] = inst_54354);
(statearr_54360_54389[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (1)))
{var inst_54321 = (new Array(n));var inst_54322 = inst_54321;var inst_54323 = (0);var state_54358__$1 = (function (){var statearr_54361 = state_54358;(statearr_54361[(7)] = inst_54322);
(statearr_54361[(8)] = inst_54323);
return statearr_54361;
})();var statearr_54362_54390 = state_54358__$1;(statearr_54362_54390[(2)] = null);
(statearr_54362_54390[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (4)))
{var inst_54326 = (state_54358[(9)]);var inst_54326__$1 = (state_54358[(2)]);var inst_54327 = (inst_54326__$1 == null);var inst_54328 = cljs.core.not.call(null,inst_54327);var state_54358__$1 = (function (){var statearr_54363 = state_54358;(statearr_54363[(9)] = inst_54326__$1);
return statearr_54363;
})();if(inst_54328)
{var statearr_54364_54391 = state_54358__$1;(statearr_54364_54391[(1)] = (5));
} else
{var statearr_54365_54392 = state_54358__$1;(statearr_54365_54392[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (15)))
{var inst_54348 = (state_54358[(2)]);var state_54358__$1 = state_54358;var statearr_54366_54393 = state_54358__$1;(statearr_54366_54393[(2)] = inst_54348);
(statearr_54366_54393[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (13)))
{var state_54358__$1 = state_54358;var statearr_54367_54394 = state_54358__$1;(statearr_54367_54394[(2)] = null);
(statearr_54367_54394[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (6)))
{var inst_54323 = (state_54358[(8)]);var inst_54344 = (inst_54323 > (0));var state_54358__$1 = state_54358;if(cljs.core.truth_(inst_54344))
{var statearr_54368_54395 = state_54358__$1;(statearr_54368_54395[(1)] = (12));
} else
{var statearr_54369_54396 = state_54358__$1;(statearr_54369_54396[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (3)))
{var inst_54356 = (state_54358[(2)]);var state_54358__$1 = state_54358;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54358__$1,inst_54356);
} else
{if((state_val_54359 === (12)))
{var inst_54322 = (state_54358[(7)]);var inst_54346 = cljs.core.vec.call(null,inst_54322);var state_54358__$1 = state_54358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54358__$1,(15),out,inst_54346);
} else
{if((state_val_54359 === (2)))
{var state_54358__$1 = state_54358;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54358__$1,(4),ch);
} else
{if((state_val_54359 === (11)))
{var inst_54338 = (state_54358[(2)]);var inst_54339 = (new Array(n));var inst_54322 = inst_54339;var inst_54323 = (0);var state_54358__$1 = (function (){var statearr_54370 = state_54358;(statearr_54370[(7)] = inst_54322);
(statearr_54370[(10)] = inst_54338);
(statearr_54370[(8)] = inst_54323);
return statearr_54370;
})();var statearr_54371_54397 = state_54358__$1;(statearr_54371_54397[(2)] = null);
(statearr_54371_54397[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (9)))
{var inst_54322 = (state_54358[(7)]);var inst_54336 = cljs.core.vec.call(null,inst_54322);var state_54358__$1 = state_54358;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54358__$1,(11),out,inst_54336);
} else
{if((state_val_54359 === (5)))
{var inst_54326 = (state_54358[(9)]);var inst_54331 = (state_54358[(11)]);var inst_54322 = (state_54358[(7)]);var inst_54323 = (state_54358[(8)]);var inst_54330 = (inst_54322[inst_54323] = inst_54326);var inst_54331__$1 = (inst_54323 + (1));var inst_54332 = (inst_54331__$1 < n);var state_54358__$1 = (function (){var statearr_54372 = state_54358;(statearr_54372[(11)] = inst_54331__$1);
(statearr_54372[(12)] = inst_54330);
return statearr_54372;
})();if(cljs.core.truth_(inst_54332))
{var statearr_54373_54398 = state_54358__$1;(statearr_54373_54398[(1)] = (8));
} else
{var statearr_54374_54399 = state_54358__$1;(statearr_54374_54399[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (14)))
{var inst_54351 = (state_54358[(2)]);var inst_54352 = cljs.core.async.close_BANG_.call(null,out);var state_54358__$1 = (function (){var statearr_54376 = state_54358;(statearr_54376[(13)] = inst_54351);
return statearr_54376;
})();var statearr_54377_54400 = state_54358__$1;(statearr_54377_54400[(2)] = inst_54352);
(statearr_54377_54400[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (10)))
{var inst_54342 = (state_54358[(2)]);var state_54358__$1 = state_54358;var statearr_54378_54401 = state_54358__$1;(statearr_54378_54401[(2)] = inst_54342);
(statearr_54378_54401[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54359 === (8)))
{var inst_54331 = (state_54358[(11)]);var inst_54322 = (state_54358[(7)]);var tmp54375 = inst_54322;var inst_54322__$1 = tmp54375;var inst_54323 = inst_54331;var state_54358__$1 = (function (){var statearr_54379 = state_54358;(statearr_54379[(7)] = inst_54322__$1);
(statearr_54379[(8)] = inst_54323);
return statearr_54379;
})();var statearr_54380_54402 = state_54358__$1;(statearr_54380_54402[(2)] = null);
(statearr_54380_54402[(1)] = (2));
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
});})(c__5693__auto___54388,out))
;return ((function (switch__5678__auto__,c__5693__auto___54388,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54384 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54384[(0)] = state_machine__5679__auto__);
(statearr_54384[(1)] = (1));
return statearr_54384;
});
var state_machine__5679__auto____1 = (function (state_54358){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54358);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54385){if((e54385 instanceof Object))
{var ex__5682__auto__ = e54385;var statearr_54386_54403 = state_54358;(statearr_54386_54403[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54358);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54385;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54404 = state_54358;
state_54358 = G__54404;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54358){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54358);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54388,out))
})();var state__5695__auto__ = (function (){var statearr_54387 = f__5694__auto__.call(null);(statearr_54387[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54388);
return statearr_54387;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54388,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___54547 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___54547,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___54547,out){
return (function (state_54517){var state_val_54518 = (state_54517[(1)]);if((state_val_54518 === (7)))
{var inst_54513 = (state_54517[(2)]);var state_54517__$1 = state_54517;var statearr_54519_54548 = state_54517__$1;(statearr_54519_54548[(2)] = inst_54513);
(statearr_54519_54548[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (1)))
{var inst_54476 = [];var inst_54477 = inst_54476;var inst_54478 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_54517__$1 = (function (){var statearr_54520 = state_54517;(statearr_54520[(7)] = inst_54478);
(statearr_54520[(8)] = inst_54477);
return statearr_54520;
})();var statearr_54521_54549 = state_54517__$1;(statearr_54521_54549[(2)] = null);
(statearr_54521_54549[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (4)))
{var inst_54481 = (state_54517[(9)]);var inst_54481__$1 = (state_54517[(2)]);var inst_54482 = (inst_54481__$1 == null);var inst_54483 = cljs.core.not.call(null,inst_54482);var state_54517__$1 = (function (){var statearr_54522 = state_54517;(statearr_54522[(9)] = inst_54481__$1);
return statearr_54522;
})();if(inst_54483)
{var statearr_54523_54550 = state_54517__$1;(statearr_54523_54550[(1)] = (5));
} else
{var statearr_54524_54551 = state_54517__$1;(statearr_54524_54551[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (15)))
{var inst_54507 = (state_54517[(2)]);var state_54517__$1 = state_54517;var statearr_54525_54552 = state_54517__$1;(statearr_54525_54552[(2)] = inst_54507);
(statearr_54525_54552[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (13)))
{var state_54517__$1 = state_54517;var statearr_54526_54553 = state_54517__$1;(statearr_54526_54553[(2)] = null);
(statearr_54526_54553[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (6)))
{var inst_54477 = (state_54517[(8)]);var inst_54502 = inst_54477.length;var inst_54503 = (inst_54502 > (0));var state_54517__$1 = state_54517;if(cljs.core.truth_(inst_54503))
{var statearr_54527_54554 = state_54517__$1;(statearr_54527_54554[(1)] = (12));
} else
{var statearr_54528_54555 = state_54517__$1;(statearr_54528_54555[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (3)))
{var inst_54515 = (state_54517[(2)]);var state_54517__$1 = state_54517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54517__$1,inst_54515);
} else
{if((state_val_54518 === (12)))
{var inst_54477 = (state_54517[(8)]);var inst_54505 = cljs.core.vec.call(null,inst_54477);var state_54517__$1 = state_54517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54517__$1,(15),out,inst_54505);
} else
{if((state_val_54518 === (2)))
{var state_54517__$1 = state_54517;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54517__$1,(4),ch);
} else
{if((state_val_54518 === (11)))
{var inst_54481 = (state_54517[(9)]);var inst_54485 = (state_54517[(10)]);var inst_54495 = (state_54517[(2)]);var inst_54496 = [];var inst_54497 = inst_54496.push(inst_54481);var inst_54477 = inst_54496;var inst_54478 = inst_54485;var state_54517__$1 = (function (){var statearr_54529 = state_54517;(statearr_54529[(11)] = inst_54497);
(statearr_54529[(12)] = inst_54495);
(statearr_54529[(7)] = inst_54478);
(statearr_54529[(8)] = inst_54477);
return statearr_54529;
})();var statearr_54530_54556 = state_54517__$1;(statearr_54530_54556[(2)] = null);
(statearr_54530_54556[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (9)))
{var inst_54477 = (state_54517[(8)]);var inst_54493 = cljs.core.vec.call(null,inst_54477);var state_54517__$1 = state_54517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_54517__$1,(11),out,inst_54493);
} else
{if((state_val_54518 === (5)))
{var inst_54478 = (state_54517[(7)]);var inst_54481 = (state_54517[(9)]);var inst_54485 = (state_54517[(10)]);var inst_54485__$1 = f.call(null,inst_54481);var inst_54486 = cljs.core._EQ_.call(null,inst_54485__$1,inst_54478);var inst_54487 = cljs.core.keyword_identical_QMARK_.call(null,inst_54478,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_54488 = (inst_54486) || (inst_54487);var state_54517__$1 = (function (){var statearr_54531 = state_54517;(statearr_54531[(10)] = inst_54485__$1);
return statearr_54531;
})();if(cljs.core.truth_(inst_54488))
{var statearr_54532_54557 = state_54517__$1;(statearr_54532_54557[(1)] = (8));
} else
{var statearr_54533_54558 = state_54517__$1;(statearr_54533_54558[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (14)))
{var inst_54510 = (state_54517[(2)]);var inst_54511 = cljs.core.async.close_BANG_.call(null,out);var state_54517__$1 = (function (){var statearr_54535 = state_54517;(statearr_54535[(13)] = inst_54510);
return statearr_54535;
})();var statearr_54536_54559 = state_54517__$1;(statearr_54536_54559[(2)] = inst_54511);
(statearr_54536_54559[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (10)))
{var inst_54500 = (state_54517[(2)]);var state_54517__$1 = state_54517;var statearr_54537_54560 = state_54517__$1;(statearr_54537_54560[(2)] = inst_54500);
(statearr_54537_54560[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_54518 === (8)))
{var inst_54477 = (state_54517[(8)]);var inst_54481 = (state_54517[(9)]);var inst_54485 = (state_54517[(10)]);var inst_54490 = inst_54477.push(inst_54481);var tmp54534 = inst_54477;var inst_54477__$1 = tmp54534;var inst_54478 = inst_54485;var state_54517__$1 = (function (){var statearr_54538 = state_54517;(statearr_54538[(7)] = inst_54478);
(statearr_54538[(8)] = inst_54477__$1);
(statearr_54538[(14)] = inst_54490);
return statearr_54538;
})();var statearr_54539_54561 = state_54517__$1;(statearr_54539_54561[(2)] = null);
(statearr_54539_54561[(1)] = (2));
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
});})(c__5693__auto___54547,out))
;return ((function (switch__5678__auto__,c__5693__auto___54547,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_54543 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_54543[(0)] = state_machine__5679__auto__);
(statearr_54543[(1)] = (1));
return statearr_54543;
});
var state_machine__5679__auto____1 = (function (state_54517){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_54517);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e54544){if((e54544 instanceof Object))
{var ex__5682__auto__ = e54544;var statearr_54545_54562 = state_54517;(statearr_54545_54562[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54517);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e54544;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__54563 = state_54517;
state_54517 = G__54563;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_54517){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_54517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___54547,out))
})();var state__5695__auto__ = (function (){var statearr_54546 = f__5694__auto__.call(null);(statearr_54546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___54547);
return statearr_54546;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___54547,out))
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