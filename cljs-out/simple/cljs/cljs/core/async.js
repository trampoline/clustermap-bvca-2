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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t27503 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27503 = (function (f,fn_handler,meta27504){
this.f = f;
this.fn_handler = fn_handler;
this.meta27504 = meta27504;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27503.cljs$lang$type = true;
cljs.core.async.t27503.cljs$lang$ctorStr = "cljs.core.async/t27503";
cljs.core.async.t27503.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27503");
});
cljs.core.async.t27503.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27503.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t27503.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t27503.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27505){var self__ = this;
var _27505__$1 = this;return self__.meta27504;
});
cljs.core.async.t27503.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27505,meta27504__$1){var self__ = this;
var _27505__$1 = this;return (new cljs.core.async.t27503(self__.f,self__.fn_handler,meta27504__$1));
});
cljs.core.async.__GT_t27503 = (function __GT_t27503(f__$1,fn_handler__$1,meta27504){return (new cljs.core.async.t27503(f__$1,fn_handler__$1,meta27504));
});
}
return (new cljs.core.async.t27503(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__27507 = buff;if(G__27507)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__27507.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__27507.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27507);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27507);
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
{var val_27508 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_27508);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_27508,ret){
return (function (){return fn1.call(null,val_27508);
});})(val_27508,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___27509 = n;var x_27510 = (0);while(true){
if((x_27510 < n__4399__auto___27509))
{(a[x_27510] = (0));
{
var G__27511 = (x_27510 + (1));
x_27510 = G__27511;
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
var G__27512 = (i + (1));
i = G__27512;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t27516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27516 = (function (flag,alt_flag,meta27517){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27517 = meta27517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27516.cljs$lang$type = true;
cljs.core.async.t27516.cljs$lang$ctorStr = "cljs.core.async/t27516";
cljs.core.async.t27516.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27516");
});})(flag))
;
cljs.core.async.t27516.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27516.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t27516.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t27516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27518){var self__ = this;
var _27518__$1 = this;return self__.meta27517;
});})(flag))
;
cljs.core.async.t27516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27518,meta27517__$1){var self__ = this;
var _27518__$1 = this;return (new cljs.core.async.t27516(self__.flag,self__.alt_flag,meta27517__$1));
});})(flag))
;
cljs.core.async.__GT_t27516 = ((function (flag){
return (function __GT_t27516(flag__$1,alt_flag__$1,meta27517){return (new cljs.core.async.t27516(flag__$1,alt_flag__$1,meta27517));
});})(flag))
;
}
return (new cljs.core.async.t27516(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t27522 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27522 = (function (cb,flag,alt_handler,meta27523){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27523 = meta27523;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27522.cljs$lang$type = true;
cljs.core.async.t27522.cljs$lang$ctorStr = "cljs.core.async/t27522";
cljs.core.async.t27522.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27522");
});
cljs.core.async.t27522.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27522.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t27522.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t27522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27524){var self__ = this;
var _27524__$1 = this;return self__.meta27523;
});
cljs.core.async.t27522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27524,meta27523__$1){var self__ = this;
var _27524__$1 = this;return (new cljs.core.async.t27522(self__.cb,self__.flag,self__.alt_handler,meta27523__$1));
});
cljs.core.async.__GT_t27522 = (function __GT_t27522(cb__$1,flag__$1,alt_handler__$1,meta27523){return (new cljs.core.async.t27522(cb__$1,flag__$1,alt_handler__$1,meta27523));
});
}
return (new cljs.core.async.t27522(cb,flag,alt_handler,null));
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
return (function (p1__27525_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27525_SHARP_,port], null));
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
var G__27526 = (i + (1));
i = G__27526;
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
var alts_BANG___delegate = function (ports,p__27527){var map__27529 = p__27527;var map__27529__$1 = ((cljs.core.seq_QMARK_.call(null,map__27529))?cljs.core.apply.call(null,cljs.core.hash_map,map__27529):map__27529);var opts = map__27529__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__27527 = null;if (arguments.length > 1) {
  p__27527 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__27527);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27530){
var ports = cljs.core.first(arglist__27530);
var p__27527 = cljs.core.rest(arglist__27530);
return alts_BANG___delegate(ports,p__27527);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27538 = (function (ch,f,map_LT_,meta27539){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27539 = meta27539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27538.cljs$lang$type = true;
cljs.core.async.t27538.cljs$lang$ctorStr = "cljs.core.async/t27538";
cljs.core.async.t27538.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27538");
});
cljs.core.async.t27538.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t27538.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27541 = (function (fn1,_,meta27539,ch,f,map_LT_,meta27542){
this.fn1 = fn1;
this._ = _;
this.meta27539 = meta27539;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27542 = meta27542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27541.cljs$lang$type = true;
cljs.core.async.t27541.cljs$lang$ctorStr = "cljs.core.async/t27541";
cljs.core.async.t27541.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27541");
});})(___$1))
;
cljs.core.async.t27541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27541.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27531_SHARP_){return f1.call(null,(((p1__27531_SHARP_ == null))?null:self__.f.call(null,p1__27531_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27543){var self__ = this;
var _27543__$1 = this;return self__.meta27542;
});})(___$1))
;
cljs.core.async.t27541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27543,meta27542__$1){var self__ = this;
var _27543__$1 = this;return (new cljs.core.async.t27541(self__.fn1,self__._,self__.meta27539,self__.ch,self__.f,self__.map_LT_,meta27542__$1));
});})(___$1))
;
cljs.core.async.__GT_t27541 = ((function (___$1){
return (function __GT_t27541(fn1__$1,___$2,meta27539__$1,ch__$2,f__$2,map_LT___$2,meta27542){return (new cljs.core.async.t27541(fn1__$1,___$2,meta27539__$1,ch__$2,f__$2,map_LT___$2,meta27542));
});})(___$1))
;
}
return (new cljs.core.async.t27541(fn1,___$1,self__.meta27539,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27538.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27540){var self__ = this;
var _27540__$1 = this;return self__.meta27539;
});
cljs.core.async.t27538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27540,meta27539__$1){var self__ = this;
var _27540__$1 = this;return (new cljs.core.async.t27538(self__.ch,self__.f,self__.map_LT_,meta27539__$1));
});
cljs.core.async.__GT_t27538 = (function __GT_t27538(ch__$1,f__$1,map_LT___$1,meta27539){return (new cljs.core.async.t27538(ch__$1,f__$1,map_LT___$1,meta27539));
});
}
return (new cljs.core.async.t27538(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27547 = (function (ch,f,map_GT_,meta27548){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27548 = meta27548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27547.cljs$lang$type = true;
cljs.core.async.t27547.cljs$lang$ctorStr = "cljs.core.async/t27547";
cljs.core.async.t27547.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27547");
});
cljs.core.async.t27547.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27547.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t27547.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27547.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27547.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27547.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27549){var self__ = this;
var _27549__$1 = this;return self__.meta27548;
});
cljs.core.async.t27547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27549,meta27548__$1){var self__ = this;
var _27549__$1 = this;return (new cljs.core.async.t27547(self__.ch,self__.f,self__.map_GT_,meta27548__$1));
});
cljs.core.async.__GT_t27547 = (function __GT_t27547(ch__$1,f__$1,map_GT___$1,meta27548){return (new cljs.core.async.t27547(ch__$1,f__$1,map_GT___$1,meta27548));
});
}
return (new cljs.core.async.t27547(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27553 = (function (ch,p,filter_GT_,meta27554){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27554 = meta27554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27553.cljs$lang$type = true;
cljs.core.async.t27553.cljs$lang$ctorStr = "cljs.core.async/t27553";
cljs.core.async.t27553.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27553");
});
cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27553.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27555){var self__ = this;
var _27555__$1 = this;return self__.meta27554;
});
cljs.core.async.t27553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27555,meta27554__$1){var self__ = this;
var _27555__$1 = this;return (new cljs.core.async.t27553(self__.ch,self__.p,self__.filter_GT_,meta27554__$1));
});
cljs.core.async.__GT_t27553 = (function __GT_t27553(ch__$1,p__$1,filter_GT___$1,meta27554){return (new cljs.core.async.t27553(ch__$1,p__$1,filter_GT___$1,meta27554));
});
}
return (new cljs.core.async.t27553(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___27638 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27638,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27638,out){
return (function (state_27617){var state_val_27618 = (state_27617[(1)]);if((state_val_27618 === (7)))
{var inst_27613 = (state_27617[(2)]);var state_27617__$1 = state_27617;var statearr_27619_27639 = state_27617__$1;(statearr_27619_27639[(2)] = inst_27613);
(statearr_27619_27639[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27618 === (1)))
{var state_27617__$1 = state_27617;var statearr_27620_27640 = state_27617__$1;(statearr_27620_27640[(2)] = null);
(statearr_27620_27640[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27618 === (4)))
{var inst_27599 = (state_27617[(7)]);var inst_27599__$1 = (state_27617[(2)]);var inst_27600 = (inst_27599__$1 == null);var state_27617__$1 = (function (){var statearr_27621 = state_27617;(statearr_27621[(7)] = inst_27599__$1);
return statearr_27621;
})();if(cljs.core.truth_(inst_27600))
{var statearr_27622_27641 = state_27617__$1;(statearr_27622_27641[(1)] = (5));
} else
{var statearr_27623_27642 = state_27617__$1;(statearr_27623_27642[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27618 === (6)))
{var inst_27599 = (state_27617[(7)]);var inst_27604 = p.call(null,inst_27599);var state_27617__$1 = state_27617;if(cljs.core.truth_(inst_27604))
{var statearr_27624_27643 = state_27617__$1;(statearr_27624_27643[(1)] = (8));
} else
{var statearr_27625_27644 = state_27617__$1;(statearr_27625_27644[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27618 === (3)))
{var inst_27615 = (state_27617[(2)]);var state_27617__$1 = state_27617;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27617__$1,inst_27615);
} else
{if((state_val_27618 === (2)))
{var state_27617__$1 = state_27617;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27617__$1,(4),ch);
} else
{if((state_val_27618 === (11)))
{var inst_27607 = (state_27617[(2)]);var state_27617__$1 = state_27617;var statearr_27626_27645 = state_27617__$1;(statearr_27626_27645[(2)] = inst_27607);
(statearr_27626_27645[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27618 === (9)))
{var state_27617__$1 = state_27617;var statearr_27627_27646 = state_27617__$1;(statearr_27627_27646[(2)] = null);
(statearr_27627_27646[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27618 === (5)))
{var inst_27602 = cljs.core.async.close_BANG_.call(null,out);var state_27617__$1 = state_27617;var statearr_27628_27647 = state_27617__$1;(statearr_27628_27647[(2)] = inst_27602);
(statearr_27628_27647[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27618 === (10)))
{var inst_27610 = (state_27617[(2)]);var state_27617__$1 = (function (){var statearr_27629 = state_27617;(statearr_27629[(8)] = inst_27610);
return statearr_27629;
})();var statearr_27630_27648 = state_27617__$1;(statearr_27630_27648[(2)] = null);
(statearr_27630_27648[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27618 === (8)))
{var inst_27599 = (state_27617[(7)]);var state_27617__$1 = state_27617;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27617__$1,(11),out,inst_27599);
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
});})(c__5693__auto___27638,out))
;return ((function (switch__5678__auto__,c__5693__auto___27638,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27634 = [null,null,null,null,null,null,null,null,null];(statearr_27634[(0)] = state_machine__5679__auto__);
(statearr_27634[(1)] = (1));
return statearr_27634;
});
var state_machine__5679__auto____1 = (function (state_27617){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27617);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27635){if((e27635 instanceof Object))
{var ex__5682__auto__ = e27635;var statearr_27636_27649 = state_27617;(statearr_27636_27649[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27617);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27635;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27650 = state_27617;
state_27617 = G__27650;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27617){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27617);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27638,out))
})();var state__5695__auto__ = (function (){var statearr_27637 = f__5694__auto__.call(null);(statearr_27637[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27638);
return statearr_27637;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27638,out))
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
return (function (state_27802){var state_val_27803 = (state_27802[(1)]);if((state_val_27803 === (7)))
{var inst_27798 = (state_27802[(2)]);var state_27802__$1 = state_27802;var statearr_27804_27841 = state_27802__$1;(statearr_27804_27841[(2)] = inst_27798);
(statearr_27804_27841[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (20)))
{var inst_27773 = (state_27802[(7)]);var inst_27784 = (state_27802[(2)]);var inst_27785 = cljs.core.next.call(null,inst_27773);var inst_27759 = inst_27785;var inst_27760 = null;var inst_27761 = (0);var inst_27762 = (0);var state_27802__$1 = (function (){var statearr_27805 = state_27802;(statearr_27805[(8)] = inst_27760);
(statearr_27805[(9)] = inst_27762);
(statearr_27805[(10)] = inst_27761);
(statearr_27805[(11)] = inst_27784);
(statearr_27805[(12)] = inst_27759);
return statearr_27805;
})();var statearr_27806_27842 = state_27802__$1;(statearr_27806_27842[(2)] = null);
(statearr_27806_27842[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (1)))
{var state_27802__$1 = state_27802;var statearr_27807_27843 = state_27802__$1;(statearr_27807_27843[(2)] = null);
(statearr_27807_27843[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (4)))
{var inst_27748 = (state_27802[(13)]);var inst_27748__$1 = (state_27802[(2)]);var inst_27749 = (inst_27748__$1 == null);var state_27802__$1 = (function (){var statearr_27811 = state_27802;(statearr_27811[(13)] = inst_27748__$1);
return statearr_27811;
})();if(cljs.core.truth_(inst_27749))
{var statearr_27812_27844 = state_27802__$1;(statearr_27812_27844[(1)] = (5));
} else
{var statearr_27813_27845 = state_27802__$1;(statearr_27813_27845[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (15)))
{var state_27802__$1 = state_27802;var statearr_27814_27846 = state_27802__$1;(statearr_27814_27846[(2)] = null);
(statearr_27814_27846[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (13)))
{var inst_27760 = (state_27802[(8)]);var inst_27762 = (state_27802[(9)]);var inst_27761 = (state_27802[(10)]);var inst_27759 = (state_27802[(12)]);var inst_27769 = (state_27802[(2)]);var inst_27770 = (inst_27762 + (1));var tmp27808 = inst_27760;var tmp27809 = inst_27761;var tmp27810 = inst_27759;var inst_27759__$1 = tmp27810;var inst_27760__$1 = tmp27808;var inst_27761__$1 = tmp27809;var inst_27762__$1 = inst_27770;var state_27802__$1 = (function (){var statearr_27815 = state_27802;(statearr_27815[(8)] = inst_27760__$1);
(statearr_27815[(9)] = inst_27762__$1);
(statearr_27815[(10)] = inst_27761__$1);
(statearr_27815[(14)] = inst_27769);
(statearr_27815[(12)] = inst_27759__$1);
return statearr_27815;
})();var statearr_27816_27847 = state_27802__$1;(statearr_27816_27847[(2)] = null);
(statearr_27816_27847[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (6)))
{var inst_27748 = (state_27802[(13)]);var inst_27753 = f.call(null,inst_27748);var inst_27758 = cljs.core.seq.call(null,inst_27753);var inst_27759 = inst_27758;var inst_27760 = null;var inst_27761 = (0);var inst_27762 = (0);var state_27802__$1 = (function (){var statearr_27817 = state_27802;(statearr_27817[(8)] = inst_27760);
(statearr_27817[(9)] = inst_27762);
(statearr_27817[(10)] = inst_27761);
(statearr_27817[(12)] = inst_27759);
return statearr_27817;
})();var statearr_27818_27848 = state_27802__$1;(statearr_27818_27848[(2)] = null);
(statearr_27818_27848[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (17)))
{var inst_27773 = (state_27802[(7)]);var inst_27777 = cljs.core.chunk_first.call(null,inst_27773);var inst_27778 = cljs.core.chunk_rest.call(null,inst_27773);var inst_27779 = cljs.core.count.call(null,inst_27777);var inst_27759 = inst_27778;var inst_27760 = inst_27777;var inst_27761 = inst_27779;var inst_27762 = (0);var state_27802__$1 = (function (){var statearr_27819 = state_27802;(statearr_27819[(8)] = inst_27760);
(statearr_27819[(9)] = inst_27762);
(statearr_27819[(10)] = inst_27761);
(statearr_27819[(12)] = inst_27759);
return statearr_27819;
})();var statearr_27820_27849 = state_27802__$1;(statearr_27820_27849[(2)] = null);
(statearr_27820_27849[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (3)))
{var inst_27800 = (state_27802[(2)]);var state_27802__$1 = state_27802;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27802__$1,inst_27800);
} else
{if((state_val_27803 === (12)))
{var inst_27793 = (state_27802[(2)]);var state_27802__$1 = state_27802;var statearr_27821_27850 = state_27802__$1;(statearr_27821_27850[(2)] = inst_27793);
(statearr_27821_27850[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (2)))
{var state_27802__$1 = state_27802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27802__$1,(4),in$);
} else
{if((state_val_27803 === (19)))
{var inst_27788 = (state_27802[(2)]);var state_27802__$1 = state_27802;var statearr_27822_27851 = state_27802__$1;(statearr_27822_27851[(2)] = inst_27788);
(statearr_27822_27851[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (11)))
{var inst_27759 = (state_27802[(12)]);var inst_27773 = (state_27802[(7)]);var inst_27773__$1 = cljs.core.seq.call(null,inst_27759);var state_27802__$1 = (function (){var statearr_27823 = state_27802;(statearr_27823[(7)] = inst_27773__$1);
return statearr_27823;
})();if(inst_27773__$1)
{var statearr_27824_27852 = state_27802__$1;(statearr_27824_27852[(1)] = (14));
} else
{var statearr_27825_27853 = state_27802__$1;(statearr_27825_27853[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (9)))
{var inst_27795 = (state_27802[(2)]);var state_27802__$1 = (function (){var statearr_27826 = state_27802;(statearr_27826[(15)] = inst_27795);
return statearr_27826;
})();var statearr_27827_27854 = state_27802__$1;(statearr_27827_27854[(2)] = null);
(statearr_27827_27854[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (5)))
{var inst_27751 = cljs.core.async.close_BANG_.call(null,out);var state_27802__$1 = state_27802;var statearr_27828_27855 = state_27802__$1;(statearr_27828_27855[(2)] = inst_27751);
(statearr_27828_27855[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (14)))
{var inst_27773 = (state_27802[(7)]);var inst_27775 = cljs.core.chunked_seq_QMARK_.call(null,inst_27773);var state_27802__$1 = state_27802;if(inst_27775)
{var statearr_27829_27856 = state_27802__$1;(statearr_27829_27856[(1)] = (17));
} else
{var statearr_27830_27857 = state_27802__$1;(statearr_27830_27857[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (16)))
{var inst_27791 = (state_27802[(2)]);var state_27802__$1 = state_27802;var statearr_27831_27858 = state_27802__$1;(statearr_27831_27858[(2)] = inst_27791);
(statearr_27831_27858[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27803 === (10)))
{var inst_27760 = (state_27802[(8)]);var inst_27762 = (state_27802[(9)]);var inst_27767 = cljs.core._nth.call(null,inst_27760,inst_27762);var state_27802__$1 = state_27802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27802__$1,(13),out,inst_27767);
} else
{if((state_val_27803 === (18)))
{var inst_27773 = (state_27802[(7)]);var inst_27782 = cljs.core.first.call(null,inst_27773);var state_27802__$1 = state_27802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27802__$1,(20),out,inst_27782);
} else
{if((state_val_27803 === (8)))
{var inst_27762 = (state_27802[(9)]);var inst_27761 = (state_27802[(10)]);var inst_27764 = (inst_27762 < inst_27761);var inst_27765 = inst_27764;var state_27802__$1 = state_27802;if(cljs.core.truth_(inst_27765))
{var statearr_27832_27859 = state_27802__$1;(statearr_27832_27859[(1)] = (10));
} else
{var statearr_27833_27860 = state_27802__$1;(statearr_27833_27860[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_27837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27837[(0)] = state_machine__5679__auto__);
(statearr_27837[(1)] = (1));
return statearr_27837;
});
var state_machine__5679__auto____1 = (function (state_27802){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27802);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27838){if((e27838 instanceof Object))
{var ex__5682__auto__ = e27838;var statearr_27839_27861 = state_27802;(statearr_27839_27861[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27802);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27862 = state_27802;
state_27802 = G__27862;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27802){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27840 = f__5694__auto__.call(null);(statearr_27840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27840;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___27943 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27943){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27943){
return (function (state_27922){var state_val_27923 = (state_27922[(1)]);if((state_val_27923 === (7)))
{var inst_27918 = (state_27922[(2)]);var state_27922__$1 = state_27922;var statearr_27924_27944 = state_27922__$1;(statearr_27924_27944[(2)] = inst_27918);
(statearr_27924_27944[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27923 === (1)))
{var state_27922__$1 = state_27922;var statearr_27925_27945 = state_27922__$1;(statearr_27925_27945[(2)] = null);
(statearr_27925_27945[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27923 === (4)))
{var inst_27905 = (state_27922[(7)]);var inst_27905__$1 = (state_27922[(2)]);var inst_27906 = (inst_27905__$1 == null);var state_27922__$1 = (function (){var statearr_27926 = state_27922;(statearr_27926[(7)] = inst_27905__$1);
return statearr_27926;
})();if(cljs.core.truth_(inst_27906))
{var statearr_27927_27946 = state_27922__$1;(statearr_27927_27946[(1)] = (5));
} else
{var statearr_27928_27947 = state_27922__$1;(statearr_27928_27947[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27923 === (6)))
{var inst_27905 = (state_27922[(7)]);var state_27922__$1 = state_27922;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27922__$1,(11),to,inst_27905);
} else
{if((state_val_27923 === (3)))
{var inst_27920 = (state_27922[(2)]);var state_27922__$1 = state_27922;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27922__$1,inst_27920);
} else
{if((state_val_27923 === (2)))
{var state_27922__$1 = state_27922;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27922__$1,(4),from);
} else
{if((state_val_27923 === (11)))
{var inst_27915 = (state_27922[(2)]);var state_27922__$1 = (function (){var statearr_27929 = state_27922;(statearr_27929[(8)] = inst_27915);
return statearr_27929;
})();var statearr_27930_27948 = state_27922__$1;(statearr_27930_27948[(2)] = null);
(statearr_27930_27948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27923 === (9)))
{var state_27922__$1 = state_27922;var statearr_27931_27949 = state_27922__$1;(statearr_27931_27949[(2)] = null);
(statearr_27931_27949[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27923 === (5)))
{var state_27922__$1 = state_27922;if(cljs.core.truth_(close_QMARK_))
{var statearr_27932_27950 = state_27922__$1;(statearr_27932_27950[(1)] = (8));
} else
{var statearr_27933_27951 = state_27922__$1;(statearr_27933_27951[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27923 === (10)))
{var inst_27912 = (state_27922[(2)]);var state_27922__$1 = state_27922;var statearr_27934_27952 = state_27922__$1;(statearr_27934_27952[(2)] = inst_27912);
(statearr_27934_27952[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27923 === (8)))
{var inst_27909 = cljs.core.async.close_BANG_.call(null,to);var state_27922__$1 = state_27922;var statearr_27935_27953 = state_27922__$1;(statearr_27935_27953[(2)] = inst_27909);
(statearr_27935_27953[(1)] = (10));
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
});})(c__5693__auto___27943))
;return ((function (switch__5678__auto__,c__5693__auto___27943){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27939 = [null,null,null,null,null,null,null,null,null];(statearr_27939[(0)] = state_machine__5679__auto__);
(statearr_27939[(1)] = (1));
return statearr_27939;
});
var state_machine__5679__auto____1 = (function (state_27922){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27922);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27940){if((e27940 instanceof Object))
{var ex__5682__auto__ = e27940;var statearr_27941_27954 = state_27922;(statearr_27941_27954[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27922);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27955 = state_27922;
state_27922 = G__27955;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27922){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27943))
})();var state__5695__auto__ = (function (){var statearr_27942 = f__5694__auto__.call(null);(statearr_27942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27943);
return statearr_27942;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27943))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___28042 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28042,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28042,tc,fc){
return (function (state_28020){var state_val_28021 = (state_28020[(1)]);if((state_val_28021 === (7)))
{var inst_28016 = (state_28020[(2)]);var state_28020__$1 = state_28020;var statearr_28022_28043 = state_28020__$1;(statearr_28022_28043[(2)] = inst_28016);
(statearr_28022_28043[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28021 === (1)))
{var state_28020__$1 = state_28020;var statearr_28023_28044 = state_28020__$1;(statearr_28023_28044[(2)] = null);
(statearr_28023_28044[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28021 === (4)))
{var inst_28001 = (state_28020[(7)]);var inst_28001__$1 = (state_28020[(2)]);var inst_28002 = (inst_28001__$1 == null);var state_28020__$1 = (function (){var statearr_28024 = state_28020;(statearr_28024[(7)] = inst_28001__$1);
return statearr_28024;
})();if(cljs.core.truth_(inst_28002))
{var statearr_28025_28045 = state_28020__$1;(statearr_28025_28045[(1)] = (5));
} else
{var statearr_28026_28046 = state_28020__$1;(statearr_28026_28046[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28021 === (6)))
{var inst_28001 = (state_28020[(7)]);var inst_28007 = p.call(null,inst_28001);var state_28020__$1 = state_28020;if(cljs.core.truth_(inst_28007))
{var statearr_28027_28047 = state_28020__$1;(statearr_28027_28047[(1)] = (9));
} else
{var statearr_28028_28048 = state_28020__$1;(statearr_28028_28048[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28021 === (3)))
{var inst_28018 = (state_28020[(2)]);var state_28020__$1 = state_28020;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28020__$1,inst_28018);
} else
{if((state_val_28021 === (2)))
{var state_28020__$1 = state_28020;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28020__$1,(4),ch);
} else
{if((state_val_28021 === (11)))
{var inst_28001 = (state_28020[(7)]);var inst_28011 = (state_28020[(2)]);var state_28020__$1 = state_28020;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28020__$1,(8),inst_28011,inst_28001);
} else
{if((state_val_28021 === (9)))
{var state_28020__$1 = state_28020;var statearr_28029_28049 = state_28020__$1;(statearr_28029_28049[(2)] = tc);
(statearr_28029_28049[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28021 === (5)))
{var inst_28004 = cljs.core.async.close_BANG_.call(null,tc);var inst_28005 = cljs.core.async.close_BANG_.call(null,fc);var state_28020__$1 = (function (){var statearr_28030 = state_28020;(statearr_28030[(8)] = inst_28004);
return statearr_28030;
})();var statearr_28031_28050 = state_28020__$1;(statearr_28031_28050[(2)] = inst_28005);
(statearr_28031_28050[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28021 === (10)))
{var state_28020__$1 = state_28020;var statearr_28032_28051 = state_28020__$1;(statearr_28032_28051[(2)] = fc);
(statearr_28032_28051[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28021 === (8)))
{var inst_28013 = (state_28020[(2)]);var state_28020__$1 = (function (){var statearr_28033 = state_28020;(statearr_28033[(9)] = inst_28013);
return statearr_28033;
})();var statearr_28034_28052 = state_28020__$1;(statearr_28034_28052[(2)] = null);
(statearr_28034_28052[(1)] = (2));
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
});})(c__5693__auto___28042,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___28042,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28038 = [null,null,null,null,null,null,null,null,null,null];(statearr_28038[(0)] = state_machine__5679__auto__);
(statearr_28038[(1)] = (1));
return statearr_28038;
});
var state_machine__5679__auto____1 = (function (state_28020){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28020);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28039){if((e28039 instanceof Object))
{var ex__5682__auto__ = e28039;var statearr_28040_28053 = state_28020;(statearr_28040_28053[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28020);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28054 = state_28020;
state_28020 = G__28054;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28020){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28020);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28042,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_28041 = f__5694__auto__.call(null);(statearr_28041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28042);
return statearr_28041;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28042,tc,fc))
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
return (function (state_28101){var state_val_28102 = (state_28101[(1)]);if((state_val_28102 === (7)))
{var inst_28097 = (state_28101[(2)]);var state_28101__$1 = state_28101;var statearr_28103_28119 = state_28101__$1;(statearr_28103_28119[(2)] = inst_28097);
(statearr_28103_28119[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28102 === (6)))
{var inst_28090 = (state_28101[(7)]);var inst_28087 = (state_28101[(8)]);var inst_28094 = f.call(null,inst_28087,inst_28090);var inst_28087__$1 = inst_28094;var state_28101__$1 = (function (){var statearr_28104 = state_28101;(statearr_28104[(8)] = inst_28087__$1);
return statearr_28104;
})();var statearr_28105_28120 = state_28101__$1;(statearr_28105_28120[(2)] = null);
(statearr_28105_28120[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28102 === (5)))
{var inst_28087 = (state_28101[(8)]);var state_28101__$1 = state_28101;var statearr_28106_28121 = state_28101__$1;(statearr_28106_28121[(2)] = inst_28087);
(statearr_28106_28121[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28102 === (4)))
{var inst_28090 = (state_28101[(7)]);var inst_28090__$1 = (state_28101[(2)]);var inst_28091 = (inst_28090__$1 == null);var state_28101__$1 = (function (){var statearr_28107 = state_28101;(statearr_28107[(7)] = inst_28090__$1);
return statearr_28107;
})();if(cljs.core.truth_(inst_28091))
{var statearr_28108_28122 = state_28101__$1;(statearr_28108_28122[(1)] = (5));
} else
{var statearr_28109_28123 = state_28101__$1;(statearr_28109_28123[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28102 === (3)))
{var inst_28099 = (state_28101[(2)]);var state_28101__$1 = state_28101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28101__$1,inst_28099);
} else
{if((state_val_28102 === (2)))
{var state_28101__$1 = state_28101;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28101__$1,(4),ch);
} else
{if((state_val_28102 === (1)))
{var inst_28087 = init;var state_28101__$1 = (function (){var statearr_28110 = state_28101;(statearr_28110[(8)] = inst_28087);
return statearr_28110;
})();var statearr_28111_28124 = state_28101__$1;(statearr_28111_28124[(2)] = null);
(statearr_28111_28124[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_28115 = [null,null,null,null,null,null,null,null,null];(statearr_28115[(0)] = state_machine__5679__auto__);
(statearr_28115[(1)] = (1));
return statearr_28115;
});
var state_machine__5679__auto____1 = (function (state_28101){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28116){if((e28116 instanceof Object))
{var ex__5682__auto__ = e28116;var statearr_28117_28125 = state_28101;(statearr_28117_28125[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28101);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28116;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28126 = state_28101;
state_28101 = G__28126;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28101){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_28118 = f__5694__auto__.call(null);(statearr_28118[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_28118;
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
return (function (state_28188){var state_val_28189 = (state_28188[(1)]);if((state_val_28189 === (7)))
{var inst_28169 = (state_28188[(7)]);var inst_28174 = (state_28188[(2)]);var inst_28175 = cljs.core.next.call(null,inst_28169);var inst_28169__$1 = inst_28175;var state_28188__$1 = (function (){var statearr_28190 = state_28188;(statearr_28190[(8)] = inst_28174);
(statearr_28190[(7)] = inst_28169__$1);
return statearr_28190;
})();var statearr_28191_28209 = state_28188__$1;(statearr_28191_28209[(2)] = null);
(statearr_28191_28209[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28189 === (1)))
{var inst_28168 = cljs.core.seq.call(null,coll);var inst_28169 = inst_28168;var state_28188__$1 = (function (){var statearr_28192 = state_28188;(statearr_28192[(7)] = inst_28169);
return statearr_28192;
})();var statearr_28193_28210 = state_28188__$1;(statearr_28193_28210[(2)] = null);
(statearr_28193_28210[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28189 === (4)))
{var inst_28169 = (state_28188[(7)]);var inst_28172 = cljs.core.first.call(null,inst_28169);var state_28188__$1 = state_28188;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28188__$1,(7),ch,inst_28172);
} else
{if((state_val_28189 === (6)))
{var inst_28184 = (state_28188[(2)]);var state_28188__$1 = state_28188;var statearr_28194_28211 = state_28188__$1;(statearr_28194_28211[(2)] = inst_28184);
(statearr_28194_28211[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28189 === (3)))
{var inst_28186 = (state_28188[(2)]);var state_28188__$1 = state_28188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28188__$1,inst_28186);
} else
{if((state_val_28189 === (2)))
{var inst_28169 = (state_28188[(7)]);var state_28188__$1 = state_28188;if(cljs.core.truth_(inst_28169))
{var statearr_28195_28212 = state_28188__$1;(statearr_28195_28212[(1)] = (4));
} else
{var statearr_28196_28213 = state_28188__$1;(statearr_28196_28213[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28189 === (9)))
{var state_28188__$1 = state_28188;var statearr_28197_28214 = state_28188__$1;(statearr_28197_28214[(2)] = null);
(statearr_28197_28214[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28189 === (5)))
{var state_28188__$1 = state_28188;if(cljs.core.truth_(close_QMARK_))
{var statearr_28198_28215 = state_28188__$1;(statearr_28198_28215[(1)] = (8));
} else
{var statearr_28199_28216 = state_28188__$1;(statearr_28199_28216[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28189 === (10)))
{var inst_28182 = (state_28188[(2)]);var state_28188__$1 = state_28188;var statearr_28200_28217 = state_28188__$1;(statearr_28200_28217[(2)] = inst_28182);
(statearr_28200_28217[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28189 === (8)))
{var inst_28179 = cljs.core.async.close_BANG_.call(null,ch);var state_28188__$1 = state_28188;var statearr_28201_28218 = state_28188__$1;(statearr_28201_28218[(2)] = inst_28179);
(statearr_28201_28218[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_28205 = [null,null,null,null,null,null,null,null,null];(statearr_28205[(0)] = state_machine__5679__auto__);
(statearr_28205[(1)] = (1));
return statearr_28205;
});
var state_machine__5679__auto____1 = (function (state_28188){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28188);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28206){if((e28206 instanceof Object))
{var ex__5682__auto__ = e28206;var statearr_28207_28219 = state_28188;(statearr_28207_28219[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28188);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28206;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28220 = state_28188;
state_28188 = G__28220;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28188){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_28208 = f__5694__auto__.call(null);(statearr_28208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_28208;
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
cljs.core.async.Mux = (function (){var obj28222 = {};return obj28222;
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
cljs.core.async.Mult = (function (){var obj28224 = {};return obj28224;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t28448 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28448 = (function (cs,ch,mult,meta28449){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28449 = meta28449;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28448.cljs$lang$type = true;
cljs.core.async.t28448.cljs$lang$ctorStr = "cljs.core.async/t28448";
cljs.core.async.t28448.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28448");
});})(cs))
;
cljs.core.async.t28448.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t28448.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t28448.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t28448.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t28448.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28448.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t28448.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28450){var self__ = this;
var _28450__$1 = this;return self__.meta28449;
});})(cs))
;
cljs.core.async.t28448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28450,meta28449__$1){var self__ = this;
var _28450__$1 = this;return (new cljs.core.async.t28448(self__.cs,self__.ch,self__.mult,meta28449__$1));
});})(cs))
;
cljs.core.async.__GT_t28448 = ((function (cs){
return (function __GT_t28448(cs__$1,ch__$1,mult__$1,meta28449){return (new cljs.core.async.t28448(cs__$1,ch__$1,mult__$1,meta28449));
});})(cs))
;
}
return (new cljs.core.async.t28448(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___28671 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28671,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28671,cs,m,dchan,dctr,done){
return (function (state_28585){var state_val_28586 = (state_28585[(1)]);if((state_val_28586 === (7)))
{var inst_28581 = (state_28585[(2)]);var state_28585__$1 = state_28585;var statearr_28587_28672 = state_28585__$1;(statearr_28587_28672[(2)] = inst_28581);
(statearr_28587_28672[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (20)))
{var inst_28482 = (state_28585[(7)]);var inst_28492 = cljs.core.first.call(null,inst_28482);var inst_28493 = cljs.core.nth.call(null,inst_28492,(0),null);var inst_28494 = cljs.core.nth.call(null,inst_28492,(1),null);var state_28585__$1 = (function (){var statearr_28588 = state_28585;(statearr_28588[(8)] = inst_28493);
return statearr_28588;
})();if(cljs.core.truth_(inst_28494))
{var statearr_28589_28673 = state_28585__$1;(statearr_28589_28673[(1)] = (22));
} else
{var statearr_28590_28674 = state_28585__$1;(statearr_28590_28674[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (27)))
{var inst_28522 = (state_28585[(9)]);var inst_28524 = (state_28585[(10)]);var inst_28529 = cljs.core._nth.call(null,inst_28522,inst_28524);var state_28585__$1 = (function (){var statearr_28591 = state_28585;(statearr_28591[(11)] = inst_28529);
return statearr_28591;
})();var statearr_28592_28675 = state_28585__$1;(statearr_28592_28675[(2)] = null);
(statearr_28592_28675[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (1)))
{var state_28585__$1 = state_28585;var statearr_28593_28676 = state_28585__$1;(statearr_28593_28676[(2)] = null);
(statearr_28593_28676[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (24)))
{var inst_28482 = (state_28585[(7)]);var inst_28499 = (state_28585[(2)]);var inst_28500 = cljs.core.next.call(null,inst_28482);var inst_28462 = inst_28500;var inst_28463 = null;var inst_28464 = (0);var inst_28465 = (0);var state_28585__$1 = (function (){var statearr_28594 = state_28585;(statearr_28594[(12)] = inst_28499);
(statearr_28594[(13)] = inst_28463);
(statearr_28594[(14)] = inst_28464);
(statearr_28594[(15)] = inst_28465);
(statearr_28594[(16)] = inst_28462);
return statearr_28594;
})();var statearr_28595_28677 = state_28585__$1;(statearr_28595_28677[(2)] = null);
(statearr_28595_28677[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (39)))
{var inst_28542 = (state_28585[(17)]);var inst_28560 = (state_28585[(2)]);var inst_28561 = cljs.core.next.call(null,inst_28542);var inst_28521 = inst_28561;var inst_28522 = null;var inst_28523 = (0);var inst_28524 = (0);var state_28585__$1 = (function (){var statearr_28599 = state_28585;(statearr_28599[(18)] = inst_28521);
(statearr_28599[(9)] = inst_28522);
(statearr_28599[(19)] = inst_28560);
(statearr_28599[(10)] = inst_28524);
(statearr_28599[(20)] = inst_28523);
return statearr_28599;
})();var statearr_28600_28678 = state_28585__$1;(statearr_28600_28678[(2)] = null);
(statearr_28600_28678[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (4)))
{var inst_28453 = (state_28585[(21)]);var inst_28453__$1 = (state_28585[(2)]);var inst_28454 = (inst_28453__$1 == null);var state_28585__$1 = (function (){var statearr_28601 = state_28585;(statearr_28601[(21)] = inst_28453__$1);
return statearr_28601;
})();if(cljs.core.truth_(inst_28454))
{var statearr_28602_28679 = state_28585__$1;(statearr_28602_28679[(1)] = (5));
} else
{var statearr_28603_28680 = state_28585__$1;(statearr_28603_28680[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (15)))
{var inst_28463 = (state_28585[(13)]);var inst_28464 = (state_28585[(14)]);var inst_28465 = (state_28585[(15)]);var inst_28462 = (state_28585[(16)]);var inst_28478 = (state_28585[(2)]);var inst_28479 = (inst_28465 + (1));var tmp28596 = inst_28463;var tmp28597 = inst_28464;var tmp28598 = inst_28462;var inst_28462__$1 = tmp28598;var inst_28463__$1 = tmp28596;var inst_28464__$1 = tmp28597;var inst_28465__$1 = inst_28479;var state_28585__$1 = (function (){var statearr_28604 = state_28585;(statearr_28604[(13)] = inst_28463__$1);
(statearr_28604[(14)] = inst_28464__$1);
(statearr_28604[(15)] = inst_28465__$1);
(statearr_28604[(16)] = inst_28462__$1);
(statearr_28604[(22)] = inst_28478);
return statearr_28604;
})();var statearr_28605_28681 = state_28585__$1;(statearr_28605_28681[(2)] = null);
(statearr_28605_28681[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (21)))
{var inst_28503 = (state_28585[(2)]);var state_28585__$1 = state_28585;var statearr_28606_28682 = state_28585__$1;(statearr_28606_28682[(2)] = inst_28503);
(statearr_28606_28682[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (31)))
{var inst_28529 = (state_28585[(11)]);var inst_28530 = (state_28585[(2)]);var inst_28531 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28532 = cljs.core.async.untap_STAR_.call(null,m,inst_28529);var state_28585__$1 = (function (){var statearr_28607 = state_28585;(statearr_28607[(23)] = inst_28530);
(statearr_28607[(24)] = inst_28531);
return statearr_28607;
})();var statearr_28608_28683 = state_28585__$1;(statearr_28608_28683[(2)] = inst_28532);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28585__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (32)))
{var inst_28529 = (state_28585[(11)]);var inst_28453 = (state_28585[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28585,(31),Object,null,(30));var inst_28536 = cljs.core.async.put_BANG_.call(null,inst_28529,inst_28453,done);var state_28585__$1 = state_28585;var statearr_28609_28684 = state_28585__$1;(statearr_28609_28684[(2)] = inst_28536);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28585__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (40)))
{var inst_28551 = (state_28585[(25)]);var inst_28552 = (state_28585[(2)]);var inst_28553 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28554 = cljs.core.async.untap_STAR_.call(null,m,inst_28551);var state_28585__$1 = (function (){var statearr_28610 = state_28585;(statearr_28610[(26)] = inst_28552);
(statearr_28610[(27)] = inst_28553);
return statearr_28610;
})();var statearr_28611_28685 = state_28585__$1;(statearr_28611_28685[(2)] = inst_28554);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28585__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (33)))
{var inst_28542 = (state_28585[(17)]);var inst_28544 = cljs.core.chunked_seq_QMARK_.call(null,inst_28542);var state_28585__$1 = state_28585;if(inst_28544)
{var statearr_28612_28686 = state_28585__$1;(statearr_28612_28686[(1)] = (36));
} else
{var statearr_28613_28687 = state_28585__$1;(statearr_28613_28687[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (13)))
{var inst_28472 = (state_28585[(28)]);var inst_28475 = cljs.core.async.close_BANG_.call(null,inst_28472);var state_28585__$1 = state_28585;var statearr_28614_28688 = state_28585__$1;(statearr_28614_28688[(2)] = inst_28475);
(statearr_28614_28688[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (22)))
{var inst_28493 = (state_28585[(8)]);var inst_28496 = cljs.core.async.close_BANG_.call(null,inst_28493);var state_28585__$1 = state_28585;var statearr_28615_28689 = state_28585__$1;(statearr_28615_28689[(2)] = inst_28496);
(statearr_28615_28689[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (36)))
{var inst_28542 = (state_28585[(17)]);var inst_28546 = cljs.core.chunk_first.call(null,inst_28542);var inst_28547 = cljs.core.chunk_rest.call(null,inst_28542);var inst_28548 = cljs.core.count.call(null,inst_28546);var inst_28521 = inst_28547;var inst_28522 = inst_28546;var inst_28523 = inst_28548;var inst_28524 = (0);var state_28585__$1 = (function (){var statearr_28616 = state_28585;(statearr_28616[(18)] = inst_28521);
(statearr_28616[(9)] = inst_28522);
(statearr_28616[(10)] = inst_28524);
(statearr_28616[(20)] = inst_28523);
return statearr_28616;
})();var statearr_28617_28690 = state_28585__$1;(statearr_28617_28690[(2)] = null);
(statearr_28617_28690[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (41)))
{var inst_28551 = (state_28585[(25)]);var inst_28453 = (state_28585[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28585,(40),Object,null,(39));var inst_28558 = cljs.core.async.put_BANG_.call(null,inst_28551,inst_28453,done);var state_28585__$1 = state_28585;var statearr_28618_28691 = state_28585__$1;(statearr_28618_28691[(2)] = inst_28558);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28585__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (43)))
{var state_28585__$1 = state_28585;var statearr_28619_28692 = state_28585__$1;(statearr_28619_28692[(2)] = null);
(statearr_28619_28692[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (29)))
{var inst_28569 = (state_28585[(2)]);var state_28585__$1 = state_28585;var statearr_28620_28693 = state_28585__$1;(statearr_28620_28693[(2)] = inst_28569);
(statearr_28620_28693[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (44)))
{var inst_28578 = (state_28585[(2)]);var state_28585__$1 = (function (){var statearr_28621 = state_28585;(statearr_28621[(29)] = inst_28578);
return statearr_28621;
})();var statearr_28622_28694 = state_28585__$1;(statearr_28622_28694[(2)] = null);
(statearr_28622_28694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (6)))
{var inst_28513 = (state_28585[(30)]);var inst_28512 = cljs.core.deref.call(null,cs);var inst_28513__$1 = cljs.core.keys.call(null,inst_28512);var inst_28514 = cljs.core.count.call(null,inst_28513__$1);var inst_28515 = cljs.core.reset_BANG_.call(null,dctr,inst_28514);var inst_28520 = cljs.core.seq.call(null,inst_28513__$1);var inst_28521 = inst_28520;var inst_28522 = null;var inst_28523 = (0);var inst_28524 = (0);var state_28585__$1 = (function (){var statearr_28623 = state_28585;(statearr_28623[(18)] = inst_28521);
(statearr_28623[(9)] = inst_28522);
(statearr_28623[(31)] = inst_28515);
(statearr_28623[(10)] = inst_28524);
(statearr_28623[(20)] = inst_28523);
(statearr_28623[(30)] = inst_28513__$1);
return statearr_28623;
})();var statearr_28624_28695 = state_28585__$1;(statearr_28624_28695[(2)] = null);
(statearr_28624_28695[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (28)))
{var inst_28521 = (state_28585[(18)]);var inst_28542 = (state_28585[(17)]);var inst_28542__$1 = cljs.core.seq.call(null,inst_28521);var state_28585__$1 = (function (){var statearr_28625 = state_28585;(statearr_28625[(17)] = inst_28542__$1);
return statearr_28625;
})();if(inst_28542__$1)
{var statearr_28626_28696 = state_28585__$1;(statearr_28626_28696[(1)] = (33));
} else
{var statearr_28627_28697 = state_28585__$1;(statearr_28627_28697[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (25)))
{var inst_28524 = (state_28585[(10)]);var inst_28523 = (state_28585[(20)]);var inst_28526 = (inst_28524 < inst_28523);var inst_28527 = inst_28526;var state_28585__$1 = state_28585;if(cljs.core.truth_(inst_28527))
{var statearr_28628_28698 = state_28585__$1;(statearr_28628_28698[(1)] = (27));
} else
{var statearr_28629_28699 = state_28585__$1;(statearr_28629_28699[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (34)))
{var state_28585__$1 = state_28585;var statearr_28630_28700 = state_28585__$1;(statearr_28630_28700[(2)] = null);
(statearr_28630_28700[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (17)))
{var state_28585__$1 = state_28585;var statearr_28631_28701 = state_28585__$1;(statearr_28631_28701[(2)] = null);
(statearr_28631_28701[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (3)))
{var inst_28583 = (state_28585[(2)]);var state_28585__$1 = state_28585;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28585__$1,inst_28583);
} else
{if((state_val_28586 === (12)))
{var inst_28508 = (state_28585[(2)]);var state_28585__$1 = state_28585;var statearr_28632_28702 = state_28585__$1;(statearr_28632_28702[(2)] = inst_28508);
(statearr_28632_28702[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (2)))
{var state_28585__$1 = state_28585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28585__$1,(4),ch);
} else
{if((state_val_28586 === (23)))
{var state_28585__$1 = state_28585;var statearr_28633_28703 = state_28585__$1;(statearr_28633_28703[(2)] = null);
(statearr_28633_28703[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (35)))
{var inst_28567 = (state_28585[(2)]);var state_28585__$1 = state_28585;var statearr_28634_28704 = state_28585__$1;(statearr_28634_28704[(2)] = inst_28567);
(statearr_28634_28704[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (19)))
{var inst_28482 = (state_28585[(7)]);var inst_28486 = cljs.core.chunk_first.call(null,inst_28482);var inst_28487 = cljs.core.chunk_rest.call(null,inst_28482);var inst_28488 = cljs.core.count.call(null,inst_28486);var inst_28462 = inst_28487;var inst_28463 = inst_28486;var inst_28464 = inst_28488;var inst_28465 = (0);var state_28585__$1 = (function (){var statearr_28635 = state_28585;(statearr_28635[(13)] = inst_28463);
(statearr_28635[(14)] = inst_28464);
(statearr_28635[(15)] = inst_28465);
(statearr_28635[(16)] = inst_28462);
return statearr_28635;
})();var statearr_28636_28705 = state_28585__$1;(statearr_28636_28705[(2)] = null);
(statearr_28636_28705[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (11)))
{var inst_28462 = (state_28585[(16)]);var inst_28482 = (state_28585[(7)]);var inst_28482__$1 = cljs.core.seq.call(null,inst_28462);var state_28585__$1 = (function (){var statearr_28637 = state_28585;(statearr_28637[(7)] = inst_28482__$1);
return statearr_28637;
})();if(inst_28482__$1)
{var statearr_28638_28706 = state_28585__$1;(statearr_28638_28706[(1)] = (16));
} else
{var statearr_28639_28707 = state_28585__$1;(statearr_28639_28707[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (9)))
{var inst_28510 = (state_28585[(2)]);var state_28585__$1 = state_28585;var statearr_28640_28708 = state_28585__$1;(statearr_28640_28708[(2)] = inst_28510);
(statearr_28640_28708[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (5)))
{var inst_28460 = cljs.core.deref.call(null,cs);var inst_28461 = cljs.core.seq.call(null,inst_28460);var inst_28462 = inst_28461;var inst_28463 = null;var inst_28464 = (0);var inst_28465 = (0);var state_28585__$1 = (function (){var statearr_28641 = state_28585;(statearr_28641[(13)] = inst_28463);
(statearr_28641[(14)] = inst_28464);
(statearr_28641[(15)] = inst_28465);
(statearr_28641[(16)] = inst_28462);
return statearr_28641;
})();var statearr_28642_28709 = state_28585__$1;(statearr_28642_28709[(2)] = null);
(statearr_28642_28709[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (14)))
{var state_28585__$1 = state_28585;var statearr_28643_28710 = state_28585__$1;(statearr_28643_28710[(2)] = null);
(statearr_28643_28710[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (45)))
{var inst_28575 = (state_28585[(2)]);var state_28585__$1 = state_28585;var statearr_28644_28711 = state_28585__$1;(statearr_28644_28711[(2)] = inst_28575);
(statearr_28644_28711[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (26)))
{var inst_28513 = (state_28585[(30)]);var inst_28571 = (state_28585[(2)]);var inst_28572 = cljs.core.seq.call(null,inst_28513);var state_28585__$1 = (function (){var statearr_28645 = state_28585;(statearr_28645[(32)] = inst_28571);
return statearr_28645;
})();if(inst_28572)
{var statearr_28646_28712 = state_28585__$1;(statearr_28646_28712[(1)] = (42));
} else
{var statearr_28647_28713 = state_28585__$1;(statearr_28647_28713[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (16)))
{var inst_28482 = (state_28585[(7)]);var inst_28484 = cljs.core.chunked_seq_QMARK_.call(null,inst_28482);var state_28585__$1 = state_28585;if(inst_28484)
{var statearr_28651_28714 = state_28585__$1;(statearr_28651_28714[(1)] = (19));
} else
{var statearr_28652_28715 = state_28585__$1;(statearr_28652_28715[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (38)))
{var inst_28564 = (state_28585[(2)]);var state_28585__$1 = state_28585;var statearr_28653_28716 = state_28585__$1;(statearr_28653_28716[(2)] = inst_28564);
(statearr_28653_28716[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (30)))
{var inst_28521 = (state_28585[(18)]);var inst_28522 = (state_28585[(9)]);var inst_28524 = (state_28585[(10)]);var inst_28523 = (state_28585[(20)]);var inst_28538 = (state_28585[(2)]);var inst_28539 = (inst_28524 + (1));var tmp28648 = inst_28521;var tmp28649 = inst_28522;var tmp28650 = inst_28523;var inst_28521__$1 = tmp28648;var inst_28522__$1 = tmp28649;var inst_28523__$1 = tmp28650;var inst_28524__$1 = inst_28539;var state_28585__$1 = (function (){var statearr_28654 = state_28585;(statearr_28654[(18)] = inst_28521__$1);
(statearr_28654[(9)] = inst_28522__$1);
(statearr_28654[(33)] = inst_28538);
(statearr_28654[(10)] = inst_28524__$1);
(statearr_28654[(20)] = inst_28523__$1);
return statearr_28654;
})();var statearr_28655_28717 = state_28585__$1;(statearr_28655_28717[(2)] = null);
(statearr_28655_28717[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (10)))
{var inst_28463 = (state_28585[(13)]);var inst_28465 = (state_28585[(15)]);var inst_28471 = cljs.core._nth.call(null,inst_28463,inst_28465);var inst_28472 = cljs.core.nth.call(null,inst_28471,(0),null);var inst_28473 = cljs.core.nth.call(null,inst_28471,(1),null);var state_28585__$1 = (function (){var statearr_28656 = state_28585;(statearr_28656[(28)] = inst_28472);
return statearr_28656;
})();if(cljs.core.truth_(inst_28473))
{var statearr_28657_28718 = state_28585__$1;(statearr_28657_28718[(1)] = (13));
} else
{var statearr_28658_28719 = state_28585__$1;(statearr_28658_28719[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (18)))
{var inst_28506 = (state_28585[(2)]);var state_28585__$1 = state_28585;var statearr_28659_28720 = state_28585__$1;(statearr_28659_28720[(2)] = inst_28506);
(statearr_28659_28720[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (42)))
{var state_28585__$1 = state_28585;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28585__$1,(45),dchan);
} else
{if((state_val_28586 === (37)))
{var inst_28542 = (state_28585[(17)]);var inst_28551 = cljs.core.first.call(null,inst_28542);var state_28585__$1 = (function (){var statearr_28660 = state_28585;(statearr_28660[(25)] = inst_28551);
return statearr_28660;
})();var statearr_28661_28721 = state_28585__$1;(statearr_28661_28721[(2)] = null);
(statearr_28661_28721[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28586 === (8)))
{var inst_28464 = (state_28585[(14)]);var inst_28465 = (state_28585[(15)]);var inst_28467 = (inst_28465 < inst_28464);var inst_28468 = inst_28467;var state_28585__$1 = state_28585;if(cljs.core.truth_(inst_28468))
{var statearr_28662_28722 = state_28585__$1;(statearr_28662_28722[(1)] = (10));
} else
{var statearr_28663_28723 = state_28585__$1;(statearr_28663_28723[(1)] = (11));
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
});})(c__5693__auto___28671,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___28671,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28667 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28667[(0)] = state_machine__5679__auto__);
(statearr_28667[(1)] = (1));
return statearr_28667;
});
var state_machine__5679__auto____1 = (function (state_28585){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28585);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28668){if((e28668 instanceof Object))
{var ex__5682__auto__ = e28668;var statearr_28669_28724 = state_28585;(statearr_28669_28724[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28585);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28668;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28725 = state_28585;
state_28585 = G__28725;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28585){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28585);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28671,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_28670 = f__5694__auto__.call(null);(statearr_28670[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28671);
return statearr_28670;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28671,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj28727 = {};return obj28727;
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
;var m = (function (){if(typeof cljs.core.async.t28837 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28837 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28838){
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
this.meta28838 = meta28838;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28837.cljs$lang$type = true;
cljs.core.async.t28837.cljs$lang$ctorStr = "cljs.core.async/t28837";
cljs.core.async.t28837.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28837");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28837.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t28837.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28837.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28837.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28837.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28837.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28837.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28837.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28837.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28839){var self__ = this;
var _28839__$1 = this;return self__.meta28838;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28837.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28839,meta28838__$1){var self__ = this;
var _28839__$1 = this;return (new cljs.core.async.t28837(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28838__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t28837 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28837(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28838){return (new cljs.core.async.t28837(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28838));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t28837(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___28946 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28904){var state_val_28905 = (state_28904[(1)]);if((state_val_28905 === (7)))
{var inst_28853 = (state_28904[(7)]);var inst_28858 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28853);var state_28904__$1 = state_28904;var statearr_28906_28947 = state_28904__$1;(statearr_28906_28947[(2)] = inst_28858);
(statearr_28906_28947[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (20)))
{var inst_28868 = (state_28904[(8)]);var state_28904__$1 = state_28904;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28904__$1,(23),out,inst_28868);
} else
{if((state_val_28905 === (1)))
{var inst_28843 = (state_28904[(9)]);var inst_28843__$1 = calc_state.call(null);var inst_28844 = cljs.core.seq_QMARK_.call(null,inst_28843__$1);var state_28904__$1 = (function (){var statearr_28907 = state_28904;(statearr_28907[(9)] = inst_28843__$1);
return statearr_28907;
})();if(inst_28844)
{var statearr_28908_28948 = state_28904__$1;(statearr_28908_28948[(1)] = (2));
} else
{var statearr_28909_28949 = state_28904__$1;(statearr_28909_28949[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (4)))
{var inst_28843 = (state_28904[(9)]);var inst_28849 = (state_28904[(2)]);var inst_28850 = cljs.core.get.call(null,inst_28849,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28851 = cljs.core.get.call(null,inst_28849,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28852 = cljs.core.get.call(null,inst_28849,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_28853 = inst_28843;var state_28904__$1 = (function (){var statearr_28910 = state_28904;(statearr_28910[(10)] = inst_28852);
(statearr_28910[(7)] = inst_28853);
(statearr_28910[(11)] = inst_28850);
(statearr_28910[(12)] = inst_28851);
return statearr_28910;
})();var statearr_28911_28950 = state_28904__$1;(statearr_28911_28950[(2)] = null);
(statearr_28911_28950[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (15)))
{var state_28904__$1 = state_28904;var statearr_28912_28951 = state_28904__$1;(statearr_28912_28951[(2)] = null);
(statearr_28912_28951[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (21)))
{var state_28904__$1 = state_28904;var statearr_28913_28952 = state_28904__$1;(statearr_28913_28952[(2)] = null);
(statearr_28913_28952[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (13)))
{var inst_28900 = (state_28904[(2)]);var state_28904__$1 = state_28904;var statearr_28914_28953 = state_28904__$1;(statearr_28914_28953[(2)] = inst_28900);
(statearr_28914_28953[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (22)))
{var inst_28861 = (state_28904[(13)]);var inst_28897 = (state_28904[(2)]);var inst_28853 = inst_28861;var state_28904__$1 = (function (){var statearr_28915 = state_28904;(statearr_28915[(14)] = inst_28897);
(statearr_28915[(7)] = inst_28853);
return statearr_28915;
})();var statearr_28916_28954 = state_28904__$1;(statearr_28916_28954[(2)] = null);
(statearr_28916_28954[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (6)))
{var inst_28902 = (state_28904[(2)]);var state_28904__$1 = state_28904;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28904__$1,inst_28902);
} else
{if((state_val_28905 === (17)))
{var inst_28883 = (state_28904[(15)]);var state_28904__$1 = state_28904;var statearr_28917_28955 = state_28904__$1;(statearr_28917_28955[(2)] = inst_28883);
(statearr_28917_28955[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (3)))
{var inst_28843 = (state_28904[(9)]);var state_28904__$1 = state_28904;var statearr_28918_28956 = state_28904__$1;(statearr_28918_28956[(2)] = inst_28843);
(statearr_28918_28956[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (12)))
{var inst_28864 = (state_28904[(16)]);var inst_28869 = (state_28904[(17)]);var inst_28883 = (state_28904[(15)]);var inst_28883__$1 = inst_28864.call(null,inst_28869);var state_28904__$1 = (function (){var statearr_28919 = state_28904;(statearr_28919[(15)] = inst_28883__$1);
return statearr_28919;
})();if(cljs.core.truth_(inst_28883__$1))
{var statearr_28920_28957 = state_28904__$1;(statearr_28920_28957[(1)] = (17));
} else
{var statearr_28921_28958 = state_28904__$1;(statearr_28921_28958[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (2)))
{var inst_28843 = (state_28904[(9)]);var inst_28846 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28843);var state_28904__$1 = state_28904;var statearr_28922_28959 = state_28904__$1;(statearr_28922_28959[(2)] = inst_28846);
(statearr_28922_28959[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (23)))
{var inst_28894 = (state_28904[(2)]);var state_28904__$1 = state_28904;var statearr_28923_28960 = state_28904__$1;(statearr_28923_28960[(2)] = inst_28894);
(statearr_28923_28960[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (19)))
{var inst_28891 = (state_28904[(2)]);var state_28904__$1 = state_28904;if(cljs.core.truth_(inst_28891))
{var statearr_28924_28961 = state_28904__$1;(statearr_28924_28961[(1)] = (20));
} else
{var statearr_28925_28962 = state_28904__$1;(statearr_28925_28962[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (11)))
{var inst_28868 = (state_28904[(8)]);var inst_28874 = (inst_28868 == null);var state_28904__$1 = state_28904;if(cljs.core.truth_(inst_28874))
{var statearr_28926_28963 = state_28904__$1;(statearr_28926_28963[(1)] = (14));
} else
{var statearr_28927_28964 = state_28904__$1;(statearr_28927_28964[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (9)))
{var inst_28861 = (state_28904[(13)]);var inst_28861__$1 = (state_28904[(2)]);var inst_28862 = cljs.core.get.call(null,inst_28861__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28863 = cljs.core.get.call(null,inst_28861__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28864 = cljs.core.get.call(null,inst_28861__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_28904__$1 = (function (){var statearr_28928 = state_28904;(statearr_28928[(16)] = inst_28864);
(statearr_28928[(18)] = inst_28863);
(statearr_28928[(13)] = inst_28861__$1);
return statearr_28928;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28904__$1,(10),inst_28862);
} else
{if((state_val_28905 === (5)))
{var inst_28853 = (state_28904[(7)]);var inst_28856 = cljs.core.seq_QMARK_.call(null,inst_28853);var state_28904__$1 = state_28904;if(inst_28856)
{var statearr_28929_28965 = state_28904__$1;(statearr_28929_28965[(1)] = (7));
} else
{var statearr_28930_28966 = state_28904__$1;(statearr_28930_28966[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (14)))
{var inst_28869 = (state_28904[(17)]);var inst_28876 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28869);var state_28904__$1 = state_28904;var statearr_28931_28967 = state_28904__$1;(statearr_28931_28967[(2)] = inst_28876);
(statearr_28931_28967[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (16)))
{var inst_28879 = (state_28904[(2)]);var inst_28880 = calc_state.call(null);var inst_28853 = inst_28880;var state_28904__$1 = (function (){var statearr_28932 = state_28904;(statearr_28932[(7)] = inst_28853);
(statearr_28932[(19)] = inst_28879);
return statearr_28932;
})();var statearr_28933_28968 = state_28904__$1;(statearr_28933_28968[(2)] = null);
(statearr_28933_28968[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (10)))
{var inst_28869 = (state_28904[(17)]);var inst_28868 = (state_28904[(8)]);var inst_28867 = (state_28904[(2)]);var inst_28868__$1 = cljs.core.nth.call(null,inst_28867,(0),null);var inst_28869__$1 = cljs.core.nth.call(null,inst_28867,(1),null);var inst_28870 = (inst_28868__$1 == null);var inst_28871 = cljs.core._EQ_.call(null,inst_28869__$1,change);var inst_28872 = (inst_28870) || (inst_28871);var state_28904__$1 = (function (){var statearr_28934 = state_28904;(statearr_28934[(17)] = inst_28869__$1);
(statearr_28934[(8)] = inst_28868__$1);
return statearr_28934;
})();if(cljs.core.truth_(inst_28872))
{var statearr_28935_28969 = state_28904__$1;(statearr_28935_28969[(1)] = (11));
} else
{var statearr_28936_28970 = state_28904__$1;(statearr_28936_28970[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (18)))
{var inst_28864 = (state_28904[(16)]);var inst_28863 = (state_28904[(18)]);var inst_28869 = (state_28904[(17)]);var inst_28886 = cljs.core.empty_QMARK_.call(null,inst_28864);var inst_28887 = inst_28863.call(null,inst_28869);var inst_28888 = cljs.core.not.call(null,inst_28887);var inst_28889 = (inst_28886) && (inst_28888);var state_28904__$1 = state_28904;var statearr_28937_28971 = state_28904__$1;(statearr_28937_28971[(2)] = inst_28889);
(statearr_28937_28971[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28905 === (8)))
{var inst_28853 = (state_28904[(7)]);var state_28904__$1 = state_28904;var statearr_28938_28972 = state_28904__$1;(statearr_28938_28972[(2)] = inst_28853);
(statearr_28938_28972[(1)] = (9));
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
});})(c__5693__auto___28946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___28946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28942[(0)] = state_machine__5679__auto__);
(statearr_28942[(1)] = (1));
return statearr_28942;
});
var state_machine__5679__auto____1 = (function (state_28904){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28904);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28943){if((e28943 instanceof Object))
{var ex__5682__auto__ = e28943;var statearr_28944_28973 = state_28904;(statearr_28944_28973[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28904);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28974 = state_28904;
state_28904 = G__28974;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28904){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28904);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_28945 = f__5694__auto__.call(null);(statearr_28945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28946);
return statearr_28945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28946,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj28976 = {};return obj28976;
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
return (function (p1__28977_SHARP_){if(cljs.core.truth_(p1__28977_SHARP_.call(null,topic)))
{return p1__28977_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__28977_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29102 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29103){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29103 = meta29103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29102.cljs$lang$type = true;
cljs.core.async.t29102.cljs$lang$ctorStr = "cljs.core.async/t29102";
cljs.core.async.t29102.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t29102");
});})(mults,ensure_mult))
;
cljs.core.async.t29102.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29102.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29102.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29102.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29102.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29102.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29102.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29102.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29104){var self__ = this;
var _29104__$1 = this;return self__.meta29103;
});})(mults,ensure_mult))
;
cljs.core.async.t29102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29104,meta29103__$1){var self__ = this;
var _29104__$1 = this;return (new cljs.core.async.t29102(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29103__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29102 = ((function (mults,ensure_mult){
return (function __GT_t29102(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29103){return (new cljs.core.async.t29102(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29103));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29102(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___29226 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29226,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29226,mults,ensure_mult,p){
return (function (state_29178){var state_val_29179 = (state_29178[(1)]);if((state_val_29179 === (7)))
{var inst_29174 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29180_29227 = state_29178__$1;(statearr_29180_29227[(2)] = inst_29174);
(statearr_29180_29227[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (20)))
{var state_29178__$1 = state_29178;var statearr_29181_29228 = state_29178__$1;(statearr_29181_29228[(2)] = null);
(statearr_29181_29228[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (1)))
{var state_29178__$1 = state_29178;var statearr_29182_29229 = state_29178__$1;(statearr_29182_29229[(2)] = null);
(statearr_29182_29229[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (24)))
{var inst_29107 = (state_29178[(7)]);var inst_29157 = (state_29178[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29178,(23),Object,null,(22));var inst_29164 = cljs.core.async.muxch_STAR_.call(null,inst_29157);var state_29178__$1 = state_29178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29178__$1,(25),inst_29164,inst_29107);
} else
{if((state_val_29179 === (4)))
{var inst_29107 = (state_29178[(7)]);var inst_29107__$1 = (state_29178[(2)]);var inst_29108 = (inst_29107__$1 == null);var state_29178__$1 = (function (){var statearr_29183 = state_29178;(statearr_29183[(7)] = inst_29107__$1);
return statearr_29183;
})();if(cljs.core.truth_(inst_29108))
{var statearr_29184_29230 = state_29178__$1;(statearr_29184_29230[(1)] = (5));
} else
{var statearr_29185_29231 = state_29178__$1;(statearr_29185_29231[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (15)))
{var inst_29149 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29186_29232 = state_29178__$1;(statearr_29186_29232[(2)] = inst_29149);
(statearr_29186_29232[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (21)))
{var inst_29171 = (state_29178[(2)]);var state_29178__$1 = (function (){var statearr_29187 = state_29178;(statearr_29187[(9)] = inst_29171);
return statearr_29187;
})();var statearr_29188_29233 = state_29178__$1;(statearr_29188_29233[(2)] = null);
(statearr_29188_29233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (13)))
{var inst_29131 = (state_29178[(10)]);var inst_29133 = cljs.core.chunked_seq_QMARK_.call(null,inst_29131);var state_29178__$1 = state_29178;if(inst_29133)
{var statearr_29189_29234 = state_29178__$1;(statearr_29189_29234[(1)] = (16));
} else
{var statearr_29190_29235 = state_29178__$1;(statearr_29190_29235[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (22)))
{var inst_29168 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29191_29236 = state_29178__$1;(statearr_29191_29236[(2)] = inst_29168);
(statearr_29191_29236[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (6)))
{var inst_29155 = (state_29178[(11)]);var inst_29107 = (state_29178[(7)]);var inst_29157 = (state_29178[(8)]);var inst_29155__$1 = topic_fn.call(null,inst_29107);var inst_29156 = cljs.core.deref.call(null,mults);var inst_29157__$1 = cljs.core.get.call(null,inst_29156,inst_29155__$1);var state_29178__$1 = (function (){var statearr_29192 = state_29178;(statearr_29192[(11)] = inst_29155__$1);
(statearr_29192[(8)] = inst_29157__$1);
return statearr_29192;
})();if(cljs.core.truth_(inst_29157__$1))
{var statearr_29193_29237 = state_29178__$1;(statearr_29193_29237[(1)] = (19));
} else
{var statearr_29194_29238 = state_29178__$1;(statearr_29194_29238[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (25)))
{var inst_29166 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29195_29239 = state_29178__$1;(statearr_29195_29239[(2)] = inst_29166);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29178__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (17)))
{var inst_29131 = (state_29178[(10)]);var inst_29140 = cljs.core.first.call(null,inst_29131);var inst_29141 = cljs.core.async.muxch_STAR_.call(null,inst_29140);var inst_29142 = cljs.core.async.close_BANG_.call(null,inst_29141);var inst_29143 = cljs.core.next.call(null,inst_29131);var inst_29117 = inst_29143;var inst_29118 = null;var inst_29119 = (0);var inst_29120 = (0);var state_29178__$1 = (function (){var statearr_29196 = state_29178;(statearr_29196[(12)] = inst_29119);
(statearr_29196[(13)] = inst_29118);
(statearr_29196[(14)] = inst_29142);
(statearr_29196[(15)] = inst_29120);
(statearr_29196[(16)] = inst_29117);
return statearr_29196;
})();var statearr_29197_29240 = state_29178__$1;(statearr_29197_29240[(2)] = null);
(statearr_29197_29240[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (3)))
{var inst_29176 = (state_29178[(2)]);var state_29178__$1 = state_29178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29178__$1,inst_29176);
} else
{if((state_val_29179 === (12)))
{var inst_29151 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29198_29241 = state_29178__$1;(statearr_29198_29241[(2)] = inst_29151);
(statearr_29198_29241[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (2)))
{var state_29178__$1 = state_29178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29178__$1,(4),ch);
} else
{if((state_val_29179 === (23)))
{var inst_29155 = (state_29178[(11)]);var inst_29159 = (state_29178[(2)]);var inst_29160 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29155);var state_29178__$1 = (function (){var statearr_29199 = state_29178;(statearr_29199[(17)] = inst_29159);
return statearr_29199;
})();var statearr_29200_29242 = state_29178__$1;(statearr_29200_29242[(2)] = inst_29160);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29178__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (19)))
{var state_29178__$1 = state_29178;var statearr_29201_29243 = state_29178__$1;(statearr_29201_29243[(2)] = null);
(statearr_29201_29243[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (11)))
{var inst_29131 = (state_29178[(10)]);var inst_29117 = (state_29178[(16)]);var inst_29131__$1 = cljs.core.seq.call(null,inst_29117);var state_29178__$1 = (function (){var statearr_29202 = state_29178;(statearr_29202[(10)] = inst_29131__$1);
return statearr_29202;
})();if(inst_29131__$1)
{var statearr_29203_29244 = state_29178__$1;(statearr_29203_29244[(1)] = (13));
} else
{var statearr_29204_29245 = state_29178__$1;(statearr_29204_29245[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (9)))
{var inst_29153 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29205_29246 = state_29178__$1;(statearr_29205_29246[(2)] = inst_29153);
(statearr_29205_29246[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (5)))
{var inst_29114 = cljs.core.deref.call(null,mults);var inst_29115 = cljs.core.vals.call(null,inst_29114);var inst_29116 = cljs.core.seq.call(null,inst_29115);var inst_29117 = inst_29116;var inst_29118 = null;var inst_29119 = (0);var inst_29120 = (0);var state_29178__$1 = (function (){var statearr_29206 = state_29178;(statearr_29206[(12)] = inst_29119);
(statearr_29206[(13)] = inst_29118);
(statearr_29206[(15)] = inst_29120);
(statearr_29206[(16)] = inst_29117);
return statearr_29206;
})();var statearr_29207_29247 = state_29178__$1;(statearr_29207_29247[(2)] = null);
(statearr_29207_29247[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (14)))
{var state_29178__$1 = state_29178;var statearr_29211_29248 = state_29178__$1;(statearr_29211_29248[(2)] = null);
(statearr_29211_29248[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (16)))
{var inst_29131 = (state_29178[(10)]);var inst_29135 = cljs.core.chunk_first.call(null,inst_29131);var inst_29136 = cljs.core.chunk_rest.call(null,inst_29131);var inst_29137 = cljs.core.count.call(null,inst_29135);var inst_29117 = inst_29136;var inst_29118 = inst_29135;var inst_29119 = inst_29137;var inst_29120 = (0);var state_29178__$1 = (function (){var statearr_29212 = state_29178;(statearr_29212[(12)] = inst_29119);
(statearr_29212[(13)] = inst_29118);
(statearr_29212[(15)] = inst_29120);
(statearr_29212[(16)] = inst_29117);
return statearr_29212;
})();var statearr_29213_29249 = state_29178__$1;(statearr_29213_29249[(2)] = null);
(statearr_29213_29249[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (10)))
{var inst_29119 = (state_29178[(12)]);var inst_29118 = (state_29178[(13)]);var inst_29120 = (state_29178[(15)]);var inst_29117 = (state_29178[(16)]);var inst_29125 = cljs.core._nth.call(null,inst_29118,inst_29120);var inst_29126 = cljs.core.async.muxch_STAR_.call(null,inst_29125);var inst_29127 = cljs.core.async.close_BANG_.call(null,inst_29126);var inst_29128 = (inst_29120 + (1));var tmp29208 = inst_29119;var tmp29209 = inst_29118;var tmp29210 = inst_29117;var inst_29117__$1 = tmp29210;var inst_29118__$1 = tmp29209;var inst_29119__$1 = tmp29208;var inst_29120__$1 = inst_29128;var state_29178__$1 = (function (){var statearr_29214 = state_29178;(statearr_29214[(18)] = inst_29127);
(statearr_29214[(12)] = inst_29119__$1);
(statearr_29214[(13)] = inst_29118__$1);
(statearr_29214[(15)] = inst_29120__$1);
(statearr_29214[(16)] = inst_29117__$1);
return statearr_29214;
})();var statearr_29215_29250 = state_29178__$1;(statearr_29215_29250[(2)] = null);
(statearr_29215_29250[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (18)))
{var inst_29146 = (state_29178[(2)]);var state_29178__$1 = state_29178;var statearr_29216_29251 = state_29178__$1;(statearr_29216_29251[(2)] = inst_29146);
(statearr_29216_29251[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29179 === (8)))
{var inst_29119 = (state_29178[(12)]);var inst_29120 = (state_29178[(15)]);var inst_29122 = (inst_29120 < inst_29119);var inst_29123 = inst_29122;var state_29178__$1 = state_29178;if(cljs.core.truth_(inst_29123))
{var statearr_29217_29252 = state_29178__$1;(statearr_29217_29252[(1)] = (10));
} else
{var statearr_29218_29253 = state_29178__$1;(statearr_29218_29253[(1)] = (11));
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
});})(c__5693__auto___29226,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___29226,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29222 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29222[(0)] = state_machine__5679__auto__);
(statearr_29222[(1)] = (1));
return statearr_29222;
});
var state_machine__5679__auto____1 = (function (state_29178){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29178);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29223){if((e29223 instanceof Object))
{var ex__5682__auto__ = e29223;var statearr_29224_29254 = state_29178;(statearr_29224_29254[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29178);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29223;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29255 = state_29178;
state_29178 = G__29255;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29178){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29226,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_29225 = f__5694__auto__.call(null);(statearr_29225[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29226);
return statearr_29225;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29226,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___29392 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29392,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29392,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29362){var state_val_29363 = (state_29362[(1)]);if((state_val_29363 === (7)))
{var state_29362__$1 = state_29362;var statearr_29364_29393 = state_29362__$1;(statearr_29364_29393[(2)] = null);
(statearr_29364_29393[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (1)))
{var state_29362__$1 = state_29362;var statearr_29365_29394 = state_29362__$1;(statearr_29365_29394[(2)] = null);
(statearr_29365_29394[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (4)))
{var inst_29326 = (state_29362[(7)]);var inst_29328 = (inst_29326 < cnt);var state_29362__$1 = state_29362;if(cljs.core.truth_(inst_29328))
{var statearr_29366_29395 = state_29362__$1;(statearr_29366_29395[(1)] = (6));
} else
{var statearr_29367_29396 = state_29362__$1;(statearr_29367_29396[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (15)))
{var inst_29358 = (state_29362[(2)]);var state_29362__$1 = state_29362;var statearr_29368_29397 = state_29362__$1;(statearr_29368_29397[(2)] = inst_29358);
(statearr_29368_29397[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (13)))
{var inst_29351 = cljs.core.async.close_BANG_.call(null,out);var state_29362__$1 = state_29362;var statearr_29369_29398 = state_29362__$1;(statearr_29369_29398[(2)] = inst_29351);
(statearr_29369_29398[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (6)))
{var state_29362__$1 = state_29362;var statearr_29370_29399 = state_29362__$1;(statearr_29370_29399[(2)] = null);
(statearr_29370_29399[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (3)))
{var inst_29360 = (state_29362[(2)]);var state_29362__$1 = state_29362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29362__$1,inst_29360);
} else
{if((state_val_29363 === (12)))
{var inst_29348 = (state_29362[(8)]);var inst_29348__$1 = (state_29362[(2)]);var inst_29349 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29348__$1);var state_29362__$1 = (function (){var statearr_29371 = state_29362;(statearr_29371[(8)] = inst_29348__$1);
return statearr_29371;
})();if(cljs.core.truth_(inst_29349))
{var statearr_29372_29400 = state_29362__$1;(statearr_29372_29400[(1)] = (13));
} else
{var statearr_29373_29401 = state_29362__$1;(statearr_29373_29401[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (2)))
{var inst_29325 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29326 = (0);var state_29362__$1 = (function (){var statearr_29374 = state_29362;(statearr_29374[(9)] = inst_29325);
(statearr_29374[(7)] = inst_29326);
return statearr_29374;
})();var statearr_29375_29402 = state_29362__$1;(statearr_29375_29402[(2)] = null);
(statearr_29375_29402[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (11)))
{var inst_29326 = (state_29362[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29362,(10),Object,null,(9));var inst_29335 = chs__$1.call(null,inst_29326);var inst_29336 = done.call(null,inst_29326);var inst_29337 = cljs.core.async.take_BANG_.call(null,inst_29335,inst_29336);var state_29362__$1 = state_29362;var statearr_29376_29403 = state_29362__$1;(statearr_29376_29403[(2)] = inst_29337);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29362__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (9)))
{var inst_29326 = (state_29362[(7)]);var inst_29339 = (state_29362[(2)]);var inst_29340 = (inst_29326 + (1));var inst_29326__$1 = inst_29340;var state_29362__$1 = (function (){var statearr_29377 = state_29362;(statearr_29377[(10)] = inst_29339);
(statearr_29377[(7)] = inst_29326__$1);
return statearr_29377;
})();var statearr_29378_29404 = state_29362__$1;(statearr_29378_29404[(2)] = null);
(statearr_29378_29404[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (5)))
{var inst_29346 = (state_29362[(2)]);var state_29362__$1 = (function (){var statearr_29379 = state_29362;(statearr_29379[(11)] = inst_29346);
return statearr_29379;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29362__$1,(12),dchan);
} else
{if((state_val_29363 === (14)))
{var inst_29348 = (state_29362[(8)]);var inst_29353 = cljs.core.apply.call(null,f,inst_29348);var state_29362__$1 = state_29362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29362__$1,(16),out,inst_29353);
} else
{if((state_val_29363 === (16)))
{var inst_29355 = (state_29362[(2)]);var state_29362__$1 = (function (){var statearr_29380 = state_29362;(statearr_29380[(12)] = inst_29355);
return statearr_29380;
})();var statearr_29381_29405 = state_29362__$1;(statearr_29381_29405[(2)] = null);
(statearr_29381_29405[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (10)))
{var inst_29330 = (state_29362[(2)]);var inst_29331 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29362__$1 = (function (){var statearr_29382 = state_29362;(statearr_29382[(13)] = inst_29330);
return statearr_29382;
})();var statearr_29383_29406 = state_29362__$1;(statearr_29383_29406[(2)] = inst_29331);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29362__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29363 === (8)))
{var inst_29344 = (state_29362[(2)]);var state_29362__$1 = state_29362;var statearr_29384_29407 = state_29362__$1;(statearr_29384_29407[(2)] = inst_29344);
(statearr_29384_29407[(1)] = (5));
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
});})(c__5693__auto___29392,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___29392,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29388 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29388[(0)] = state_machine__5679__auto__);
(statearr_29388[(1)] = (1));
return statearr_29388;
});
var state_machine__5679__auto____1 = (function (state_29362){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29362);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29389){if((e29389 instanceof Object))
{var ex__5682__auto__ = e29389;var statearr_29390_29408 = state_29362;(statearr_29390_29408[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29362);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29409 = state_29362;
state_29362 = G__29409;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29362){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29392,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_29391 = f__5694__auto__.call(null);(statearr_29391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29392);
return statearr_29391;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29392,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29517 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29517,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29517,out){
return (function (state_29493){var state_val_29494 = (state_29493[(1)]);if((state_val_29494 === (7)))
{var inst_29473 = (state_29493[(7)]);var inst_29472 = (state_29493[(8)]);var inst_29472__$1 = (state_29493[(2)]);var inst_29473__$1 = cljs.core.nth.call(null,inst_29472__$1,(0),null);var inst_29474 = cljs.core.nth.call(null,inst_29472__$1,(1),null);var inst_29475 = (inst_29473__$1 == null);var state_29493__$1 = (function (){var statearr_29495 = state_29493;(statearr_29495[(9)] = inst_29474);
(statearr_29495[(7)] = inst_29473__$1);
(statearr_29495[(8)] = inst_29472__$1);
return statearr_29495;
})();if(cljs.core.truth_(inst_29475))
{var statearr_29496_29518 = state_29493__$1;(statearr_29496_29518[(1)] = (8));
} else
{var statearr_29497_29519 = state_29493__$1;(statearr_29497_29519[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29494 === (1)))
{var inst_29464 = cljs.core.vec.call(null,chs);var inst_29465 = inst_29464;var state_29493__$1 = (function (){var statearr_29498 = state_29493;(statearr_29498[(10)] = inst_29465);
return statearr_29498;
})();var statearr_29499_29520 = state_29493__$1;(statearr_29499_29520[(2)] = null);
(statearr_29499_29520[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29494 === (4)))
{var inst_29465 = (state_29493[(10)]);var state_29493__$1 = state_29493;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29493__$1,(7),inst_29465);
} else
{if((state_val_29494 === (6)))
{var inst_29489 = (state_29493[(2)]);var state_29493__$1 = state_29493;var statearr_29500_29521 = state_29493__$1;(statearr_29500_29521[(2)] = inst_29489);
(statearr_29500_29521[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29494 === (3)))
{var inst_29491 = (state_29493[(2)]);var state_29493__$1 = state_29493;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29493__$1,inst_29491);
} else
{if((state_val_29494 === (2)))
{var inst_29465 = (state_29493[(10)]);var inst_29467 = cljs.core.count.call(null,inst_29465);var inst_29468 = (inst_29467 > (0));var state_29493__$1 = state_29493;if(cljs.core.truth_(inst_29468))
{var statearr_29502_29522 = state_29493__$1;(statearr_29502_29522[(1)] = (4));
} else
{var statearr_29503_29523 = state_29493__$1;(statearr_29503_29523[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29494 === (11)))
{var inst_29465 = (state_29493[(10)]);var inst_29482 = (state_29493[(2)]);var tmp29501 = inst_29465;var inst_29465__$1 = tmp29501;var state_29493__$1 = (function (){var statearr_29504 = state_29493;(statearr_29504[(10)] = inst_29465__$1);
(statearr_29504[(11)] = inst_29482);
return statearr_29504;
})();var statearr_29505_29524 = state_29493__$1;(statearr_29505_29524[(2)] = null);
(statearr_29505_29524[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29494 === (9)))
{var inst_29473 = (state_29493[(7)]);var state_29493__$1 = state_29493;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29493__$1,(11),out,inst_29473);
} else
{if((state_val_29494 === (5)))
{var inst_29487 = cljs.core.async.close_BANG_.call(null,out);var state_29493__$1 = state_29493;var statearr_29506_29525 = state_29493__$1;(statearr_29506_29525[(2)] = inst_29487);
(statearr_29506_29525[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29494 === (10)))
{var inst_29485 = (state_29493[(2)]);var state_29493__$1 = state_29493;var statearr_29507_29526 = state_29493__$1;(statearr_29507_29526[(2)] = inst_29485);
(statearr_29507_29526[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29494 === (8)))
{var inst_29465 = (state_29493[(10)]);var inst_29474 = (state_29493[(9)]);var inst_29473 = (state_29493[(7)]);var inst_29472 = (state_29493[(8)]);var inst_29477 = (function (){var c = inst_29474;var v = inst_29473;var vec__29470 = inst_29472;var cs = inst_29465;return ((function (c,v,vec__29470,cs,inst_29465,inst_29474,inst_29473,inst_29472,state_val_29494,c__5693__auto___29517,out){
return (function (p1__29410_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29410_SHARP_);
});
;})(c,v,vec__29470,cs,inst_29465,inst_29474,inst_29473,inst_29472,state_val_29494,c__5693__auto___29517,out))
})();var inst_29478 = cljs.core.filterv.call(null,inst_29477,inst_29465);var inst_29465__$1 = inst_29478;var state_29493__$1 = (function (){var statearr_29508 = state_29493;(statearr_29508[(10)] = inst_29465__$1);
return statearr_29508;
})();var statearr_29509_29527 = state_29493__$1;(statearr_29509_29527[(2)] = null);
(statearr_29509_29527[(1)] = (2));
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
});})(c__5693__auto___29517,out))
;return ((function (switch__5678__auto__,c__5693__auto___29517,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29513 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29513[(0)] = state_machine__5679__auto__);
(statearr_29513[(1)] = (1));
return statearr_29513;
});
var state_machine__5679__auto____1 = (function (state_29493){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29493);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29514){if((e29514 instanceof Object))
{var ex__5682__auto__ = e29514;var statearr_29515_29528 = state_29493;(statearr_29515_29528[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29493);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29514;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29529 = state_29493;
state_29493 = G__29529;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29493){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29493);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29517,out))
})();var state__5695__auto__ = (function (){var statearr_29516 = f__5694__auto__.call(null);(statearr_29516[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29517);
return statearr_29516;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29517,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29622 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29622,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29622,out){
return (function (state_29599){var state_val_29600 = (state_29599[(1)]);if((state_val_29600 === (7)))
{var inst_29581 = (state_29599[(7)]);var inst_29581__$1 = (state_29599[(2)]);var inst_29582 = (inst_29581__$1 == null);var inst_29583 = cljs.core.not.call(null,inst_29582);var state_29599__$1 = (function (){var statearr_29601 = state_29599;(statearr_29601[(7)] = inst_29581__$1);
return statearr_29601;
})();if(inst_29583)
{var statearr_29602_29623 = state_29599__$1;(statearr_29602_29623[(1)] = (8));
} else
{var statearr_29603_29624 = state_29599__$1;(statearr_29603_29624[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29600 === (1)))
{var inst_29576 = (0);var state_29599__$1 = (function (){var statearr_29604 = state_29599;(statearr_29604[(8)] = inst_29576);
return statearr_29604;
})();var statearr_29605_29625 = state_29599__$1;(statearr_29605_29625[(2)] = null);
(statearr_29605_29625[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29600 === (4)))
{var state_29599__$1 = state_29599;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29599__$1,(7),ch);
} else
{if((state_val_29600 === (6)))
{var inst_29594 = (state_29599[(2)]);var state_29599__$1 = state_29599;var statearr_29606_29626 = state_29599__$1;(statearr_29606_29626[(2)] = inst_29594);
(statearr_29606_29626[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29600 === (3)))
{var inst_29596 = (state_29599[(2)]);var inst_29597 = cljs.core.async.close_BANG_.call(null,out);var state_29599__$1 = (function (){var statearr_29607 = state_29599;(statearr_29607[(9)] = inst_29596);
return statearr_29607;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29599__$1,inst_29597);
} else
{if((state_val_29600 === (2)))
{var inst_29576 = (state_29599[(8)]);var inst_29578 = (inst_29576 < n);var state_29599__$1 = state_29599;if(cljs.core.truth_(inst_29578))
{var statearr_29608_29627 = state_29599__$1;(statearr_29608_29627[(1)] = (4));
} else
{var statearr_29609_29628 = state_29599__$1;(statearr_29609_29628[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29600 === (11)))
{var inst_29576 = (state_29599[(8)]);var inst_29586 = (state_29599[(2)]);var inst_29587 = (inst_29576 + (1));var inst_29576__$1 = inst_29587;var state_29599__$1 = (function (){var statearr_29610 = state_29599;(statearr_29610[(10)] = inst_29586);
(statearr_29610[(8)] = inst_29576__$1);
return statearr_29610;
})();var statearr_29611_29629 = state_29599__$1;(statearr_29611_29629[(2)] = null);
(statearr_29611_29629[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29600 === (9)))
{var state_29599__$1 = state_29599;var statearr_29612_29630 = state_29599__$1;(statearr_29612_29630[(2)] = null);
(statearr_29612_29630[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29600 === (5)))
{var state_29599__$1 = state_29599;var statearr_29613_29631 = state_29599__$1;(statearr_29613_29631[(2)] = null);
(statearr_29613_29631[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29600 === (10)))
{var inst_29591 = (state_29599[(2)]);var state_29599__$1 = state_29599;var statearr_29614_29632 = state_29599__$1;(statearr_29614_29632[(2)] = inst_29591);
(statearr_29614_29632[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29600 === (8)))
{var inst_29581 = (state_29599[(7)]);var state_29599__$1 = state_29599;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29599__$1,(11),out,inst_29581);
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
});})(c__5693__auto___29622,out))
;return ((function (switch__5678__auto__,c__5693__auto___29622,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29618 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29618[(0)] = state_machine__5679__auto__);
(statearr_29618[(1)] = (1));
return statearr_29618;
});
var state_machine__5679__auto____1 = (function (state_29599){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29599);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29619){if((e29619 instanceof Object))
{var ex__5682__auto__ = e29619;var statearr_29620_29633 = state_29599;(statearr_29620_29633[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29599);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29634 = state_29599;
state_29599 = G__29634;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29599){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29599);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29622,out))
})();var state__5695__auto__ = (function (){var statearr_29621 = f__5694__auto__.call(null);(statearr_29621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29622);
return statearr_29621;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29622,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29731 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29731,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29731,out){
return (function (state_29706){var state_val_29707 = (state_29706[(1)]);if((state_val_29707 === (7)))
{var inst_29701 = (state_29706[(2)]);var state_29706__$1 = state_29706;var statearr_29708_29732 = state_29706__$1;(statearr_29708_29732[(2)] = inst_29701);
(statearr_29708_29732[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29707 === (1)))
{var inst_29683 = null;var state_29706__$1 = (function (){var statearr_29709 = state_29706;(statearr_29709[(7)] = inst_29683);
return statearr_29709;
})();var statearr_29710_29733 = state_29706__$1;(statearr_29710_29733[(2)] = null);
(statearr_29710_29733[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29707 === (4)))
{var inst_29686 = (state_29706[(8)]);var inst_29686__$1 = (state_29706[(2)]);var inst_29687 = (inst_29686__$1 == null);var inst_29688 = cljs.core.not.call(null,inst_29687);var state_29706__$1 = (function (){var statearr_29711 = state_29706;(statearr_29711[(8)] = inst_29686__$1);
return statearr_29711;
})();if(inst_29688)
{var statearr_29712_29734 = state_29706__$1;(statearr_29712_29734[(1)] = (5));
} else
{var statearr_29713_29735 = state_29706__$1;(statearr_29713_29735[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29707 === (6)))
{var state_29706__$1 = state_29706;var statearr_29714_29736 = state_29706__$1;(statearr_29714_29736[(2)] = null);
(statearr_29714_29736[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29707 === (3)))
{var inst_29703 = (state_29706[(2)]);var inst_29704 = cljs.core.async.close_BANG_.call(null,out);var state_29706__$1 = (function (){var statearr_29715 = state_29706;(statearr_29715[(9)] = inst_29703);
return statearr_29715;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29706__$1,inst_29704);
} else
{if((state_val_29707 === (2)))
{var state_29706__$1 = state_29706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29706__$1,(4),ch);
} else
{if((state_val_29707 === (11)))
{var inst_29686 = (state_29706[(8)]);var inst_29695 = (state_29706[(2)]);var inst_29683 = inst_29686;var state_29706__$1 = (function (){var statearr_29716 = state_29706;(statearr_29716[(7)] = inst_29683);
(statearr_29716[(10)] = inst_29695);
return statearr_29716;
})();var statearr_29717_29737 = state_29706__$1;(statearr_29717_29737[(2)] = null);
(statearr_29717_29737[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29707 === (9)))
{var inst_29686 = (state_29706[(8)]);var state_29706__$1 = state_29706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29706__$1,(11),out,inst_29686);
} else
{if((state_val_29707 === (5)))
{var inst_29683 = (state_29706[(7)]);var inst_29686 = (state_29706[(8)]);var inst_29690 = cljs.core._EQ_.call(null,inst_29686,inst_29683);var state_29706__$1 = state_29706;if(inst_29690)
{var statearr_29719_29738 = state_29706__$1;(statearr_29719_29738[(1)] = (8));
} else
{var statearr_29720_29739 = state_29706__$1;(statearr_29720_29739[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29707 === (10)))
{var inst_29698 = (state_29706[(2)]);var state_29706__$1 = state_29706;var statearr_29721_29740 = state_29706__$1;(statearr_29721_29740[(2)] = inst_29698);
(statearr_29721_29740[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29707 === (8)))
{var inst_29683 = (state_29706[(7)]);var tmp29718 = inst_29683;var inst_29683__$1 = tmp29718;var state_29706__$1 = (function (){var statearr_29722 = state_29706;(statearr_29722[(7)] = inst_29683__$1);
return statearr_29722;
})();var statearr_29723_29741 = state_29706__$1;(statearr_29723_29741[(2)] = null);
(statearr_29723_29741[(1)] = (2));
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
});})(c__5693__auto___29731,out))
;return ((function (switch__5678__auto__,c__5693__auto___29731,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29727 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29727[(0)] = state_machine__5679__auto__);
(statearr_29727[(1)] = (1));
return statearr_29727;
});
var state_machine__5679__auto____1 = (function (state_29706){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29706);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29728){if((e29728 instanceof Object))
{var ex__5682__auto__ = e29728;var statearr_29729_29742 = state_29706;(statearr_29729_29742[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29706);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29743 = state_29706;
state_29706 = G__29743;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29706){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29731,out))
})();var state__5695__auto__ = (function (){var statearr_29730 = f__5694__auto__.call(null);(statearr_29730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29731);
return statearr_29730;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29731,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29878 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29878,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29878,out){
return (function (state_29848){var state_val_29849 = (state_29848[(1)]);if((state_val_29849 === (7)))
{var inst_29844 = (state_29848[(2)]);var state_29848__$1 = state_29848;var statearr_29850_29879 = state_29848__$1;(statearr_29850_29879[(2)] = inst_29844);
(statearr_29850_29879[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (1)))
{var inst_29811 = (new Array(n));var inst_29812 = inst_29811;var inst_29813 = (0);var state_29848__$1 = (function (){var statearr_29851 = state_29848;(statearr_29851[(7)] = inst_29812);
(statearr_29851[(8)] = inst_29813);
return statearr_29851;
})();var statearr_29852_29880 = state_29848__$1;(statearr_29852_29880[(2)] = null);
(statearr_29852_29880[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (4)))
{var inst_29816 = (state_29848[(9)]);var inst_29816__$1 = (state_29848[(2)]);var inst_29817 = (inst_29816__$1 == null);var inst_29818 = cljs.core.not.call(null,inst_29817);var state_29848__$1 = (function (){var statearr_29853 = state_29848;(statearr_29853[(9)] = inst_29816__$1);
return statearr_29853;
})();if(inst_29818)
{var statearr_29854_29881 = state_29848__$1;(statearr_29854_29881[(1)] = (5));
} else
{var statearr_29855_29882 = state_29848__$1;(statearr_29855_29882[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (15)))
{var inst_29838 = (state_29848[(2)]);var state_29848__$1 = state_29848;var statearr_29856_29883 = state_29848__$1;(statearr_29856_29883[(2)] = inst_29838);
(statearr_29856_29883[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (13)))
{var state_29848__$1 = state_29848;var statearr_29857_29884 = state_29848__$1;(statearr_29857_29884[(2)] = null);
(statearr_29857_29884[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (6)))
{var inst_29813 = (state_29848[(8)]);var inst_29834 = (inst_29813 > (0));var state_29848__$1 = state_29848;if(cljs.core.truth_(inst_29834))
{var statearr_29858_29885 = state_29848__$1;(statearr_29858_29885[(1)] = (12));
} else
{var statearr_29859_29886 = state_29848__$1;(statearr_29859_29886[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (3)))
{var inst_29846 = (state_29848[(2)]);var state_29848__$1 = state_29848;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29848__$1,inst_29846);
} else
{if((state_val_29849 === (12)))
{var inst_29812 = (state_29848[(7)]);var inst_29836 = cljs.core.vec.call(null,inst_29812);var state_29848__$1 = state_29848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29848__$1,(15),out,inst_29836);
} else
{if((state_val_29849 === (2)))
{var state_29848__$1 = state_29848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29848__$1,(4),ch);
} else
{if((state_val_29849 === (11)))
{var inst_29828 = (state_29848[(2)]);var inst_29829 = (new Array(n));var inst_29812 = inst_29829;var inst_29813 = (0);var state_29848__$1 = (function (){var statearr_29860 = state_29848;(statearr_29860[(7)] = inst_29812);
(statearr_29860[(8)] = inst_29813);
(statearr_29860[(10)] = inst_29828);
return statearr_29860;
})();var statearr_29861_29887 = state_29848__$1;(statearr_29861_29887[(2)] = null);
(statearr_29861_29887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (9)))
{var inst_29812 = (state_29848[(7)]);var inst_29826 = cljs.core.vec.call(null,inst_29812);var state_29848__$1 = state_29848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29848__$1,(11),out,inst_29826);
} else
{if((state_val_29849 === (5)))
{var inst_29812 = (state_29848[(7)]);var inst_29821 = (state_29848[(11)]);var inst_29816 = (state_29848[(9)]);var inst_29813 = (state_29848[(8)]);var inst_29820 = (inst_29812[inst_29813] = inst_29816);var inst_29821__$1 = (inst_29813 + (1));var inst_29822 = (inst_29821__$1 < n);var state_29848__$1 = (function (){var statearr_29862 = state_29848;(statearr_29862[(11)] = inst_29821__$1);
(statearr_29862[(12)] = inst_29820);
return statearr_29862;
})();if(cljs.core.truth_(inst_29822))
{var statearr_29863_29888 = state_29848__$1;(statearr_29863_29888[(1)] = (8));
} else
{var statearr_29864_29889 = state_29848__$1;(statearr_29864_29889[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (14)))
{var inst_29841 = (state_29848[(2)]);var inst_29842 = cljs.core.async.close_BANG_.call(null,out);var state_29848__$1 = (function (){var statearr_29866 = state_29848;(statearr_29866[(13)] = inst_29841);
return statearr_29866;
})();var statearr_29867_29890 = state_29848__$1;(statearr_29867_29890[(2)] = inst_29842);
(statearr_29867_29890[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (10)))
{var inst_29832 = (state_29848[(2)]);var state_29848__$1 = state_29848;var statearr_29868_29891 = state_29848__$1;(statearr_29868_29891[(2)] = inst_29832);
(statearr_29868_29891[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29849 === (8)))
{var inst_29812 = (state_29848[(7)]);var inst_29821 = (state_29848[(11)]);var tmp29865 = inst_29812;var inst_29812__$1 = tmp29865;var inst_29813 = inst_29821;var state_29848__$1 = (function (){var statearr_29869 = state_29848;(statearr_29869[(7)] = inst_29812__$1);
(statearr_29869[(8)] = inst_29813);
return statearr_29869;
})();var statearr_29870_29892 = state_29848__$1;(statearr_29870_29892[(2)] = null);
(statearr_29870_29892[(1)] = (2));
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
});})(c__5693__auto___29878,out))
;return ((function (switch__5678__auto__,c__5693__auto___29878,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29874 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29874[(0)] = state_machine__5679__auto__);
(statearr_29874[(1)] = (1));
return statearr_29874;
});
var state_machine__5679__auto____1 = (function (state_29848){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29848);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29875){if((e29875 instanceof Object))
{var ex__5682__auto__ = e29875;var statearr_29876_29893 = state_29848;(statearr_29876_29893[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29848);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29875;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29894 = state_29848;
state_29848 = G__29894;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29848){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29878,out))
})();var state__5695__auto__ = (function (){var statearr_29877 = f__5694__auto__.call(null);(statearr_29877[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29878);
return statearr_29877;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29878,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30037 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30037,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30037,out){
return (function (state_30007){var state_val_30008 = (state_30007[(1)]);if((state_val_30008 === (7)))
{var inst_30003 = (state_30007[(2)]);var state_30007__$1 = state_30007;var statearr_30009_30038 = state_30007__$1;(statearr_30009_30038[(2)] = inst_30003);
(statearr_30009_30038[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (1)))
{var inst_29966 = [];var inst_29967 = inst_29966;var inst_29968 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_30007__$1 = (function (){var statearr_30010 = state_30007;(statearr_30010[(7)] = inst_29968);
(statearr_30010[(8)] = inst_29967);
return statearr_30010;
})();var statearr_30011_30039 = state_30007__$1;(statearr_30011_30039[(2)] = null);
(statearr_30011_30039[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (4)))
{var inst_29971 = (state_30007[(9)]);var inst_29971__$1 = (state_30007[(2)]);var inst_29972 = (inst_29971__$1 == null);var inst_29973 = cljs.core.not.call(null,inst_29972);var state_30007__$1 = (function (){var statearr_30012 = state_30007;(statearr_30012[(9)] = inst_29971__$1);
return statearr_30012;
})();if(inst_29973)
{var statearr_30013_30040 = state_30007__$1;(statearr_30013_30040[(1)] = (5));
} else
{var statearr_30014_30041 = state_30007__$1;(statearr_30014_30041[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (15)))
{var inst_29997 = (state_30007[(2)]);var state_30007__$1 = state_30007;var statearr_30015_30042 = state_30007__$1;(statearr_30015_30042[(2)] = inst_29997);
(statearr_30015_30042[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (13)))
{var state_30007__$1 = state_30007;var statearr_30016_30043 = state_30007__$1;(statearr_30016_30043[(2)] = null);
(statearr_30016_30043[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (6)))
{var inst_29967 = (state_30007[(8)]);var inst_29992 = inst_29967.length;var inst_29993 = (inst_29992 > (0));var state_30007__$1 = state_30007;if(cljs.core.truth_(inst_29993))
{var statearr_30017_30044 = state_30007__$1;(statearr_30017_30044[(1)] = (12));
} else
{var statearr_30018_30045 = state_30007__$1;(statearr_30018_30045[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (3)))
{var inst_30005 = (state_30007[(2)]);var state_30007__$1 = state_30007;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30007__$1,inst_30005);
} else
{if((state_val_30008 === (12)))
{var inst_29967 = (state_30007[(8)]);var inst_29995 = cljs.core.vec.call(null,inst_29967);var state_30007__$1 = state_30007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30007__$1,(15),out,inst_29995);
} else
{if((state_val_30008 === (2)))
{var state_30007__$1 = state_30007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30007__$1,(4),ch);
} else
{if((state_val_30008 === (11)))
{var inst_29971 = (state_30007[(9)]);var inst_29975 = (state_30007[(10)]);var inst_29985 = (state_30007[(2)]);var inst_29986 = [];var inst_29987 = inst_29986.push(inst_29971);var inst_29967 = inst_29986;var inst_29968 = inst_29975;var state_30007__$1 = (function (){var statearr_30019 = state_30007;(statearr_30019[(7)] = inst_29968);
(statearr_30019[(11)] = inst_29987);
(statearr_30019[(12)] = inst_29985);
(statearr_30019[(8)] = inst_29967);
return statearr_30019;
})();var statearr_30020_30046 = state_30007__$1;(statearr_30020_30046[(2)] = null);
(statearr_30020_30046[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (9)))
{var inst_29967 = (state_30007[(8)]);var inst_29983 = cljs.core.vec.call(null,inst_29967);var state_30007__$1 = state_30007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30007__$1,(11),out,inst_29983);
} else
{if((state_val_30008 === (5)))
{var inst_29968 = (state_30007[(7)]);var inst_29971 = (state_30007[(9)]);var inst_29975 = (state_30007[(10)]);var inst_29975__$1 = f.call(null,inst_29971);var inst_29976 = cljs.core._EQ_.call(null,inst_29975__$1,inst_29968);var inst_29977 = cljs.core.keyword_identical_QMARK_.call(null,inst_29968,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_29978 = (inst_29976) || (inst_29977);var state_30007__$1 = (function (){var statearr_30021 = state_30007;(statearr_30021[(10)] = inst_29975__$1);
return statearr_30021;
})();if(cljs.core.truth_(inst_29978))
{var statearr_30022_30047 = state_30007__$1;(statearr_30022_30047[(1)] = (8));
} else
{var statearr_30023_30048 = state_30007__$1;(statearr_30023_30048[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (14)))
{var inst_30000 = (state_30007[(2)]);var inst_30001 = cljs.core.async.close_BANG_.call(null,out);var state_30007__$1 = (function (){var statearr_30025 = state_30007;(statearr_30025[(13)] = inst_30000);
return statearr_30025;
})();var statearr_30026_30049 = state_30007__$1;(statearr_30026_30049[(2)] = inst_30001);
(statearr_30026_30049[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (10)))
{var inst_29990 = (state_30007[(2)]);var state_30007__$1 = state_30007;var statearr_30027_30050 = state_30007__$1;(statearr_30027_30050[(2)] = inst_29990);
(statearr_30027_30050[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30008 === (8)))
{var inst_29971 = (state_30007[(9)]);var inst_29975 = (state_30007[(10)]);var inst_29967 = (state_30007[(8)]);var inst_29980 = inst_29967.push(inst_29971);var tmp30024 = inst_29967;var inst_29967__$1 = tmp30024;var inst_29968 = inst_29975;var state_30007__$1 = (function (){var statearr_30028 = state_30007;(statearr_30028[(14)] = inst_29980);
(statearr_30028[(7)] = inst_29968);
(statearr_30028[(8)] = inst_29967__$1);
return statearr_30028;
})();var statearr_30029_30051 = state_30007__$1;(statearr_30029_30051[(2)] = null);
(statearr_30029_30051[(1)] = (2));
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
});})(c__5693__auto___30037,out))
;return ((function (switch__5678__auto__,c__5693__auto___30037,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30033[(0)] = state_machine__5679__auto__);
(statearr_30033[(1)] = (1));
return statearr_30033;
});
var state_machine__5679__auto____1 = (function (state_30007){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30007);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30034){if((e30034 instanceof Object))
{var ex__5682__auto__ = e30034;var statearr_30035_30052 = state_30007;(statearr_30035_30052[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30007);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30053 = state_30007;
state_30007 = G__30053;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30007){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30037,out))
})();var state__5695__auto__ = (function (){var statearr_30036 = f__5694__auto__.call(null);(statearr_30036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30037);
return statearr_30036;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30037,out))
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
