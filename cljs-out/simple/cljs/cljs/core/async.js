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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t27571 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27571 = (function (f,fn_handler,meta27572){
this.f = f;
this.fn_handler = fn_handler;
this.meta27572 = meta27572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27571.cljs$lang$type = true;
cljs.core.async.t27571.cljs$lang$ctorStr = "cljs.core.async/t27571";
cljs.core.async.t27571.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27571");
});
cljs.core.async.t27571.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27571.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t27571.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t27571.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27573){var self__ = this;
var _27573__$1 = this;return self__.meta27572;
});
cljs.core.async.t27571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27573,meta27572__$1){var self__ = this;
var _27573__$1 = this;return (new cljs.core.async.t27571(self__.f,self__.fn_handler,meta27572__$1));
});
cljs.core.async.__GT_t27571 = (function __GT_t27571(f__$1,fn_handler__$1,meta27572){return (new cljs.core.async.t27571(f__$1,fn_handler__$1,meta27572));
});
}
return (new cljs.core.async.t27571(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__27575 = buff;if(G__27575)
{var bit__4193__auto__ = null;if(cljs.core.truth_((function (){var or__3543__auto__ = bit__4193__auto__;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return G__27575.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__27575.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27575);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__27575);
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
{var val_27576 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_27576);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_27576,ret){
return (function (){return fn1.call(null,val_27576);
});})(val_27576,ret))
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4399__auto___27577 = n;var x_27578 = (0);while(true){
if((x_27578 < n__4399__auto___27577))
{(a[x_27578] = (0));
{
var G__27579 = (x_27578 + (1));
x_27578 = G__27579;
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
var G__27580 = (i + (1));
i = G__27580;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t27584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27584 = (function (flag,alt_flag,meta27585){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta27585 = meta27585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27584.cljs$lang$type = true;
cljs.core.async.t27584.cljs$lang$ctorStr = "cljs.core.async/t27584";
cljs.core.async.t27584.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27584");
});})(flag))
;
cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t27584.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t27584.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_27586){var self__ = this;
var _27586__$1 = this;return self__.meta27585;
});})(flag))
;
cljs.core.async.t27584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_27586,meta27585__$1){var self__ = this;
var _27586__$1 = this;return (new cljs.core.async.t27584(self__.flag,self__.alt_flag,meta27585__$1));
});})(flag))
;
cljs.core.async.__GT_t27584 = ((function (flag){
return (function __GT_t27584(flag__$1,alt_flag__$1,meta27585){return (new cljs.core.async.t27584(flag__$1,alt_flag__$1,meta27585));
});})(flag))
;
}
return (new cljs.core.async.t27584(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t27590 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27590 = (function (cb,flag,alt_handler,meta27591){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta27591 = meta27591;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27590.cljs$lang$type = true;
cljs.core.async.t27590.cljs$lang$ctorStr = "cljs.core.async/t27590";
cljs.core.async.t27590.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27590");
});
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t27590.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t27590.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27592){var self__ = this;
var _27592__$1 = this;return self__.meta27591;
});
cljs.core.async.t27590.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27592,meta27591__$1){var self__ = this;
var _27592__$1 = this;return (new cljs.core.async.t27590(self__.cb,self__.flag,self__.alt_handler,meta27591__$1));
});
cljs.core.async.__GT_t27590 = (function __GT_t27590(cb__$1,flag__$1,alt_handler__$1,meta27591){return (new cljs.core.async.t27590(cb__$1,flag__$1,alt_handler__$1,meta27591));
});
}
return (new cljs.core.async.t27590(cb,flag,alt_handler,null));
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
return (function (p1__27593_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__27593_SHARP_,port], null));
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
var G__27594 = (i + (1));
i = G__27594;
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
var alts_BANG___delegate = function (ports,p__27595){var map__27597 = p__27595;var map__27597__$1 = ((cljs.core.seq_QMARK_.call(null,map__27597))?cljs.core.apply.call(null,cljs.core.hash_map,map__27597):map__27597);var opts = map__27597__$1;if(null)
{return null;
} else
{throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));
}
};
var alts_BANG_ = function (ports,var_args){
var p__27595 = null;if (arguments.length > 1) {
  p__27595 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__27595);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__27598){
var ports = cljs.core.first(arglist__27598);
var p__27595 = cljs.core.rest(arglist__27598);
return alts_BANG___delegate(ports,p__27595);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t27606 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27606 = (function (ch,f,map_LT_,meta27607){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27607 = meta27607;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27606.cljs$lang$type = true;
cljs.core.async.t27606.cljs$lang$ctorStr = "cljs.core.async/t27606";
cljs.core.async.t27606.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27606");
});
cljs.core.async.t27606.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27606.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t27606.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27606.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t27609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27609 = (function (fn1,_,meta27607,ch,f,map_LT_,meta27610){
this.fn1 = fn1;
this._ = _;
this.meta27607 = meta27607;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta27610 = meta27610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27609.cljs$lang$type = true;
cljs.core.async.t27609.cljs$lang$ctorStr = "cljs.core.async/t27609";
cljs.core.async.t27609.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27609");
});})(___$1))
;
cljs.core.async.t27609.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t27609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27609.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t27609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__27599_SHARP_){return f1.call(null,(((p1__27599_SHARP_ == null))?null:self__.f.call(null,p1__27599_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t27609.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27611){var self__ = this;
var _27611__$1 = this;return self__.meta27610;
});})(___$1))
;
cljs.core.async.t27609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27611,meta27610__$1){var self__ = this;
var _27611__$1 = this;return (new cljs.core.async.t27609(self__.fn1,self__._,self__.meta27607,self__.ch,self__.f,self__.map_LT_,meta27610__$1));
});})(___$1))
;
cljs.core.async.__GT_t27609 = ((function (___$1){
return (function __GT_t27609(fn1__$1,___$2,meta27607__$1,ch__$2,f__$2,map_LT___$2,meta27610){return (new cljs.core.async.t27609(fn1__$1,___$2,meta27607__$1,ch__$2,f__$2,map_LT___$2,meta27610));
});})(___$1))
;
}
return (new cljs.core.async.t27609(fn1,___$1,self__.meta27607,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t27606.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27606.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27606.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27608){var self__ = this;
var _27608__$1 = this;return self__.meta27607;
});
cljs.core.async.t27606.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27608,meta27607__$1){var self__ = this;
var _27608__$1 = this;return (new cljs.core.async.t27606(self__.ch,self__.f,self__.map_LT_,meta27607__$1));
});
cljs.core.async.__GT_t27606 = (function __GT_t27606(ch__$1,f__$1,map_LT___$1,meta27607){return (new cljs.core.async.t27606(ch__$1,f__$1,map_LT___$1,meta27607));
});
}
return (new cljs.core.async.t27606(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t27615 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27615 = (function (ch,f,map_GT_,meta27616){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta27616 = meta27616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27615.cljs$lang$type = true;
cljs.core.async.t27615.cljs$lang$ctorStr = "cljs.core.async/t27615";
cljs.core.async.t27615.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27615");
});
cljs.core.async.t27615.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27615.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t27615.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27615.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27615.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27615.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27617){var self__ = this;
var _27617__$1 = this;return self__.meta27616;
});
cljs.core.async.t27615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27617,meta27616__$1){var self__ = this;
var _27617__$1 = this;return (new cljs.core.async.t27615(self__.ch,self__.f,self__.map_GT_,meta27616__$1));
});
cljs.core.async.__GT_t27615 = (function __GT_t27615(ch__$1,f__$1,map_GT___$1,meta27616){return (new cljs.core.async.t27615(ch__$1,f__$1,map_GT___$1,meta27616));
});
}
return (new cljs.core.async.t27615(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t27621 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t27621 = (function (ch,p,filter_GT_,meta27622){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta27622 = meta27622;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t27621.cljs$lang$type = true;
cljs.core.async.t27621.cljs$lang$ctorStr = "cljs.core.async/t27621";
cljs.core.async.t27621.cljs$lang$ctorPrWriter = (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t27621");
});
cljs.core.async.t27621.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t27621.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t27621.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t27621.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t27621.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t27621.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t27621.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27623){var self__ = this;
var _27623__$1 = this;return self__.meta27622;
});
cljs.core.async.t27621.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27623,meta27622__$1){var self__ = this;
var _27623__$1 = this;return (new cljs.core.async.t27621(self__.ch,self__.p,self__.filter_GT_,meta27622__$1));
});
cljs.core.async.__GT_t27621 = (function __GT_t27621(ch__$1,p__$1,filter_GT___$1,meta27622){return (new cljs.core.async.t27621(ch__$1,p__$1,filter_GT___$1,meta27622));
});
}
return (new cljs.core.async.t27621(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___27706 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___27706,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___27706,out){
return (function (state_27685){var state_val_27686 = (state_27685[(1)]);if((state_val_27686 === (7)))
{var inst_27681 = (state_27685[(2)]);var state_27685__$1 = state_27685;var statearr_27687_27707 = state_27685__$1;(statearr_27687_27707[(2)] = inst_27681);
(statearr_27687_27707[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27686 === (1)))
{var state_27685__$1 = state_27685;var statearr_27688_27708 = state_27685__$1;(statearr_27688_27708[(2)] = null);
(statearr_27688_27708[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27686 === (4)))
{var inst_27667 = (state_27685[(7)]);var inst_27667__$1 = (state_27685[(2)]);var inst_27668 = (inst_27667__$1 == null);var state_27685__$1 = (function (){var statearr_27689 = state_27685;(statearr_27689[(7)] = inst_27667__$1);
return statearr_27689;
})();if(cljs.core.truth_(inst_27668))
{var statearr_27690_27709 = state_27685__$1;(statearr_27690_27709[(1)] = (5));
} else
{var statearr_27691_27710 = state_27685__$1;(statearr_27691_27710[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27686 === (6)))
{var inst_27667 = (state_27685[(7)]);var inst_27672 = p.call(null,inst_27667);var state_27685__$1 = state_27685;if(cljs.core.truth_(inst_27672))
{var statearr_27692_27711 = state_27685__$1;(statearr_27692_27711[(1)] = (8));
} else
{var statearr_27693_27712 = state_27685__$1;(statearr_27693_27712[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27686 === (3)))
{var inst_27683 = (state_27685[(2)]);var state_27685__$1 = state_27685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27685__$1,inst_27683);
} else
{if((state_val_27686 === (2)))
{var state_27685__$1 = state_27685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27685__$1,(4),ch);
} else
{if((state_val_27686 === (11)))
{var inst_27675 = (state_27685[(2)]);var state_27685__$1 = state_27685;var statearr_27694_27713 = state_27685__$1;(statearr_27694_27713[(2)] = inst_27675);
(statearr_27694_27713[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27686 === (9)))
{var state_27685__$1 = state_27685;var statearr_27695_27714 = state_27685__$1;(statearr_27695_27714[(2)] = null);
(statearr_27695_27714[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27686 === (5)))
{var inst_27670 = cljs.core.async.close_BANG_.call(null,out);var state_27685__$1 = state_27685;var statearr_27696_27715 = state_27685__$1;(statearr_27696_27715[(2)] = inst_27670);
(statearr_27696_27715[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27686 === (10)))
{var inst_27678 = (state_27685[(2)]);var state_27685__$1 = (function (){var statearr_27697 = state_27685;(statearr_27697[(8)] = inst_27678);
return statearr_27697;
})();var statearr_27698_27716 = state_27685__$1;(statearr_27698_27716[(2)] = null);
(statearr_27698_27716[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27686 === (8)))
{var inst_27667 = (state_27685[(7)]);var state_27685__$1 = state_27685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27685__$1,(11),out,inst_27667);
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
});})(c__5693__auto___27706,out))
;return ((function (switch__5678__auto__,c__5693__auto___27706,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_27702 = [null,null,null,null,null,null,null,null,null];(statearr_27702[(0)] = state_machine__5679__auto__);
(statearr_27702[(1)] = (1));
return statearr_27702;
});
var state_machine__5679__auto____1 = (function (state_27685){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27703){if((e27703 instanceof Object))
{var ex__5682__auto__ = e27703;var statearr_27704_27717 = state_27685;(statearr_27704_27717[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27685);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27718 = state_27685;
state_27685 = G__27718;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27685){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___27706,out))
})();var state__5695__auto__ = (function (){var statearr_27705 = f__5694__auto__.call(null);(statearr_27705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___27706);
return statearr_27705;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___27706,out))
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
return (function (state_27870){var state_val_27871 = (state_27870[(1)]);if((state_val_27871 === (7)))
{var inst_27866 = (state_27870[(2)]);var state_27870__$1 = state_27870;var statearr_27872_27909 = state_27870__$1;(statearr_27872_27909[(2)] = inst_27866);
(statearr_27872_27909[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (20)))
{var inst_27841 = (state_27870[(7)]);var inst_27852 = (state_27870[(2)]);var inst_27853 = cljs.core.next.call(null,inst_27841);var inst_27827 = inst_27853;var inst_27828 = null;var inst_27829 = (0);var inst_27830 = (0);var state_27870__$1 = (function (){var statearr_27873 = state_27870;(statearr_27873[(8)] = inst_27852);
(statearr_27873[(9)] = inst_27830);
(statearr_27873[(10)] = inst_27828);
(statearr_27873[(11)] = inst_27827);
(statearr_27873[(12)] = inst_27829);
return statearr_27873;
})();var statearr_27874_27910 = state_27870__$1;(statearr_27874_27910[(2)] = null);
(statearr_27874_27910[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (1)))
{var state_27870__$1 = state_27870;var statearr_27875_27911 = state_27870__$1;(statearr_27875_27911[(2)] = null);
(statearr_27875_27911[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (4)))
{var inst_27816 = (state_27870[(13)]);var inst_27816__$1 = (state_27870[(2)]);var inst_27817 = (inst_27816__$1 == null);var state_27870__$1 = (function (){var statearr_27879 = state_27870;(statearr_27879[(13)] = inst_27816__$1);
return statearr_27879;
})();if(cljs.core.truth_(inst_27817))
{var statearr_27880_27912 = state_27870__$1;(statearr_27880_27912[(1)] = (5));
} else
{var statearr_27881_27913 = state_27870__$1;(statearr_27881_27913[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (15)))
{var state_27870__$1 = state_27870;var statearr_27882_27914 = state_27870__$1;(statearr_27882_27914[(2)] = null);
(statearr_27882_27914[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (13)))
{var inst_27830 = (state_27870[(9)]);var inst_27828 = (state_27870[(10)]);var inst_27827 = (state_27870[(11)]);var inst_27829 = (state_27870[(12)]);var inst_27837 = (state_27870[(2)]);var inst_27838 = (inst_27830 + (1));var tmp27876 = inst_27828;var tmp27877 = inst_27827;var tmp27878 = inst_27829;var inst_27827__$1 = tmp27877;var inst_27828__$1 = tmp27876;var inst_27829__$1 = tmp27878;var inst_27830__$1 = inst_27838;var state_27870__$1 = (function (){var statearr_27883 = state_27870;(statearr_27883[(14)] = inst_27837);
(statearr_27883[(9)] = inst_27830__$1);
(statearr_27883[(10)] = inst_27828__$1);
(statearr_27883[(11)] = inst_27827__$1);
(statearr_27883[(12)] = inst_27829__$1);
return statearr_27883;
})();var statearr_27884_27915 = state_27870__$1;(statearr_27884_27915[(2)] = null);
(statearr_27884_27915[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (6)))
{var inst_27816 = (state_27870[(13)]);var inst_27821 = f.call(null,inst_27816);var inst_27826 = cljs.core.seq.call(null,inst_27821);var inst_27827 = inst_27826;var inst_27828 = null;var inst_27829 = (0);var inst_27830 = (0);var state_27870__$1 = (function (){var statearr_27885 = state_27870;(statearr_27885[(9)] = inst_27830);
(statearr_27885[(10)] = inst_27828);
(statearr_27885[(11)] = inst_27827);
(statearr_27885[(12)] = inst_27829);
return statearr_27885;
})();var statearr_27886_27916 = state_27870__$1;(statearr_27886_27916[(2)] = null);
(statearr_27886_27916[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (17)))
{var inst_27841 = (state_27870[(7)]);var inst_27845 = cljs.core.chunk_first.call(null,inst_27841);var inst_27846 = cljs.core.chunk_rest.call(null,inst_27841);var inst_27847 = cljs.core.count.call(null,inst_27845);var inst_27827 = inst_27846;var inst_27828 = inst_27845;var inst_27829 = inst_27847;var inst_27830 = (0);var state_27870__$1 = (function (){var statearr_27887 = state_27870;(statearr_27887[(9)] = inst_27830);
(statearr_27887[(10)] = inst_27828);
(statearr_27887[(11)] = inst_27827);
(statearr_27887[(12)] = inst_27829);
return statearr_27887;
})();var statearr_27888_27917 = state_27870__$1;(statearr_27888_27917[(2)] = null);
(statearr_27888_27917[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (3)))
{var inst_27868 = (state_27870[(2)]);var state_27870__$1 = state_27870;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27870__$1,inst_27868);
} else
{if((state_val_27871 === (12)))
{var inst_27861 = (state_27870[(2)]);var state_27870__$1 = state_27870;var statearr_27889_27918 = state_27870__$1;(statearr_27889_27918[(2)] = inst_27861);
(statearr_27889_27918[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (2)))
{var state_27870__$1 = state_27870;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27870__$1,(4),in$);
} else
{if((state_val_27871 === (19)))
{var inst_27856 = (state_27870[(2)]);var state_27870__$1 = state_27870;var statearr_27890_27919 = state_27870__$1;(statearr_27890_27919[(2)] = inst_27856);
(statearr_27890_27919[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (11)))
{var inst_27841 = (state_27870[(7)]);var inst_27827 = (state_27870[(11)]);var inst_27841__$1 = cljs.core.seq.call(null,inst_27827);var state_27870__$1 = (function (){var statearr_27891 = state_27870;(statearr_27891[(7)] = inst_27841__$1);
return statearr_27891;
})();if(inst_27841__$1)
{var statearr_27892_27920 = state_27870__$1;(statearr_27892_27920[(1)] = (14));
} else
{var statearr_27893_27921 = state_27870__$1;(statearr_27893_27921[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (9)))
{var inst_27863 = (state_27870[(2)]);var state_27870__$1 = (function (){var statearr_27894 = state_27870;(statearr_27894[(15)] = inst_27863);
return statearr_27894;
})();var statearr_27895_27922 = state_27870__$1;(statearr_27895_27922[(2)] = null);
(statearr_27895_27922[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (5)))
{var inst_27819 = cljs.core.async.close_BANG_.call(null,out);var state_27870__$1 = state_27870;var statearr_27896_27923 = state_27870__$1;(statearr_27896_27923[(2)] = inst_27819);
(statearr_27896_27923[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (14)))
{var inst_27841 = (state_27870[(7)]);var inst_27843 = cljs.core.chunked_seq_QMARK_.call(null,inst_27841);var state_27870__$1 = state_27870;if(inst_27843)
{var statearr_27897_27924 = state_27870__$1;(statearr_27897_27924[(1)] = (17));
} else
{var statearr_27898_27925 = state_27870__$1;(statearr_27898_27925[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (16)))
{var inst_27859 = (state_27870[(2)]);var state_27870__$1 = state_27870;var statearr_27899_27926 = state_27870__$1;(statearr_27899_27926[(2)] = inst_27859);
(statearr_27899_27926[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27871 === (10)))
{var inst_27830 = (state_27870[(9)]);var inst_27828 = (state_27870[(10)]);var inst_27835 = cljs.core._nth.call(null,inst_27828,inst_27830);var state_27870__$1 = state_27870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27870__$1,(13),out,inst_27835);
} else
{if((state_val_27871 === (18)))
{var inst_27841 = (state_27870[(7)]);var inst_27850 = cljs.core.first.call(null,inst_27841);var state_27870__$1 = state_27870;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27870__$1,(20),out,inst_27850);
} else
{if((state_val_27871 === (8)))
{var inst_27830 = (state_27870[(9)]);var inst_27829 = (state_27870[(12)]);var inst_27832 = (inst_27830 < inst_27829);var inst_27833 = inst_27832;var state_27870__$1 = state_27870;if(cljs.core.truth_(inst_27833))
{var statearr_27900_27927 = state_27870__$1;(statearr_27900_27927[(1)] = (10));
} else
{var statearr_27901_27928 = state_27870__$1;(statearr_27901_27928[(1)] = (11));
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
var state_machine__5679__auto____0 = (function (){var statearr_27905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_27905[(0)] = state_machine__5679__auto__);
(statearr_27905[(1)] = (1));
return statearr_27905;
});
var state_machine__5679__auto____1 = (function (state_27870){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27870);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e27906){if((e27906 instanceof Object))
{var ex__5682__auto__ = e27906;var statearr_27907_27929 = state_27870;(statearr_27907_27929[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27870);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e27906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__27930 = state_27870;
state_27870 = G__27930;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27870){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27870);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_27908 = f__5694__auto__.call(null);(statearr_27908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_27908;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5693__auto___28011 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28011){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28011){
return (function (state_27990){var state_val_27991 = (state_27990[(1)]);if((state_val_27991 === (7)))
{var inst_27986 = (state_27990[(2)]);var state_27990__$1 = state_27990;var statearr_27992_28012 = state_27990__$1;(statearr_27992_28012[(2)] = inst_27986);
(statearr_27992_28012[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27991 === (1)))
{var state_27990__$1 = state_27990;var statearr_27993_28013 = state_27990__$1;(statearr_27993_28013[(2)] = null);
(statearr_27993_28013[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27991 === (4)))
{var inst_27973 = (state_27990[(7)]);var inst_27973__$1 = (state_27990[(2)]);var inst_27974 = (inst_27973__$1 == null);var state_27990__$1 = (function (){var statearr_27994 = state_27990;(statearr_27994[(7)] = inst_27973__$1);
return statearr_27994;
})();if(cljs.core.truth_(inst_27974))
{var statearr_27995_28014 = state_27990__$1;(statearr_27995_28014[(1)] = (5));
} else
{var statearr_27996_28015 = state_27990__$1;(statearr_27996_28015[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27991 === (6)))
{var inst_27973 = (state_27990[(7)]);var state_27990__$1 = state_27990;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27990__$1,(11),to,inst_27973);
} else
{if((state_val_27991 === (3)))
{var inst_27988 = (state_27990[(2)]);var state_27990__$1 = state_27990;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27990__$1,inst_27988);
} else
{if((state_val_27991 === (2)))
{var state_27990__$1 = state_27990;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27990__$1,(4),from);
} else
{if((state_val_27991 === (11)))
{var inst_27983 = (state_27990[(2)]);var state_27990__$1 = (function (){var statearr_27997 = state_27990;(statearr_27997[(8)] = inst_27983);
return statearr_27997;
})();var statearr_27998_28016 = state_27990__$1;(statearr_27998_28016[(2)] = null);
(statearr_27998_28016[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27991 === (9)))
{var state_27990__$1 = state_27990;var statearr_27999_28017 = state_27990__$1;(statearr_27999_28017[(2)] = null);
(statearr_27999_28017[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27991 === (5)))
{var state_27990__$1 = state_27990;if(cljs.core.truth_(close_QMARK_))
{var statearr_28000_28018 = state_27990__$1;(statearr_28000_28018[(1)] = (8));
} else
{var statearr_28001_28019 = state_27990__$1;(statearr_28001_28019[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27991 === (10)))
{var inst_27980 = (state_27990[(2)]);var state_27990__$1 = state_27990;var statearr_28002_28020 = state_27990__$1;(statearr_28002_28020[(2)] = inst_27980);
(statearr_28002_28020[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_27991 === (8)))
{var inst_27977 = cljs.core.async.close_BANG_.call(null,to);var state_27990__$1 = state_27990;var statearr_28003_28021 = state_27990__$1;(statearr_28003_28021[(2)] = inst_27977);
(statearr_28003_28021[(1)] = (10));
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
});})(c__5693__auto___28011))
;return ((function (switch__5678__auto__,c__5693__auto___28011){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28007 = [null,null,null,null,null,null,null,null,null];(statearr_28007[(0)] = state_machine__5679__auto__);
(statearr_28007[(1)] = (1));
return statearr_28007;
});
var state_machine__5679__auto____1 = (function (state_27990){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_27990);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28008){if((e28008 instanceof Object))
{var ex__5682__auto__ = e28008;var statearr_28009_28022 = state_27990;(statearr_28009_28022[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27990);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28008;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28023 = state_27990;
state_27990 = G__28023;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_27990){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_27990);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28011))
})();var state__5695__auto__ = (function (){var statearr_28010 = f__5694__auto__.call(null);(statearr_28010[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28011);
return statearr_28010;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28011))
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5693__auto___28110 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28110,tc,fc){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28110,tc,fc){
return (function (state_28088){var state_val_28089 = (state_28088[(1)]);if((state_val_28089 === (7)))
{var inst_28084 = (state_28088[(2)]);var state_28088__$1 = state_28088;var statearr_28090_28111 = state_28088__$1;(statearr_28090_28111[(2)] = inst_28084);
(statearr_28090_28111[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28089 === (1)))
{var state_28088__$1 = state_28088;var statearr_28091_28112 = state_28088__$1;(statearr_28091_28112[(2)] = null);
(statearr_28091_28112[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28089 === (4)))
{var inst_28069 = (state_28088[(7)]);var inst_28069__$1 = (state_28088[(2)]);var inst_28070 = (inst_28069__$1 == null);var state_28088__$1 = (function (){var statearr_28092 = state_28088;(statearr_28092[(7)] = inst_28069__$1);
return statearr_28092;
})();if(cljs.core.truth_(inst_28070))
{var statearr_28093_28113 = state_28088__$1;(statearr_28093_28113[(1)] = (5));
} else
{var statearr_28094_28114 = state_28088__$1;(statearr_28094_28114[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28089 === (6)))
{var inst_28069 = (state_28088[(7)]);var inst_28075 = p.call(null,inst_28069);var state_28088__$1 = state_28088;if(cljs.core.truth_(inst_28075))
{var statearr_28095_28115 = state_28088__$1;(statearr_28095_28115[(1)] = (9));
} else
{var statearr_28096_28116 = state_28088__$1;(statearr_28096_28116[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28089 === (3)))
{var inst_28086 = (state_28088[(2)]);var state_28088__$1 = state_28088;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28088__$1,inst_28086);
} else
{if((state_val_28089 === (2)))
{var state_28088__$1 = state_28088;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28088__$1,(4),ch);
} else
{if((state_val_28089 === (11)))
{var inst_28069 = (state_28088[(7)]);var inst_28079 = (state_28088[(2)]);var state_28088__$1 = state_28088;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28088__$1,(8),inst_28079,inst_28069);
} else
{if((state_val_28089 === (9)))
{var state_28088__$1 = state_28088;var statearr_28097_28117 = state_28088__$1;(statearr_28097_28117[(2)] = tc);
(statearr_28097_28117[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28089 === (5)))
{var inst_28072 = cljs.core.async.close_BANG_.call(null,tc);var inst_28073 = cljs.core.async.close_BANG_.call(null,fc);var state_28088__$1 = (function (){var statearr_28098 = state_28088;(statearr_28098[(8)] = inst_28072);
return statearr_28098;
})();var statearr_28099_28118 = state_28088__$1;(statearr_28099_28118[(2)] = inst_28073);
(statearr_28099_28118[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28089 === (10)))
{var state_28088__$1 = state_28088;var statearr_28100_28119 = state_28088__$1;(statearr_28100_28119[(2)] = fc);
(statearr_28100_28119[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28089 === (8)))
{var inst_28081 = (state_28088[(2)]);var state_28088__$1 = (function (){var statearr_28101 = state_28088;(statearr_28101[(9)] = inst_28081);
return statearr_28101;
})();var statearr_28102_28120 = state_28088__$1;(statearr_28102_28120[(2)] = null);
(statearr_28102_28120[(1)] = (2));
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
});})(c__5693__auto___28110,tc,fc))
;return ((function (switch__5678__auto__,c__5693__auto___28110,tc,fc){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28106 = [null,null,null,null,null,null,null,null,null,null];(statearr_28106[(0)] = state_machine__5679__auto__);
(statearr_28106[(1)] = (1));
return statearr_28106;
});
var state_machine__5679__auto____1 = (function (state_28088){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28088);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28107){if((e28107 instanceof Object))
{var ex__5682__auto__ = e28107;var statearr_28108_28121 = state_28088;(statearr_28108_28121[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28088);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28107;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28122 = state_28088;
state_28088 = G__28122;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28088){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28088);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28110,tc,fc))
})();var state__5695__auto__ = (function (){var statearr_28109 = f__5694__auto__.call(null);(statearr_28109[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28110);
return statearr_28109;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28110,tc,fc))
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
return (function (state_28169){var state_val_28170 = (state_28169[(1)]);if((state_val_28170 === (7)))
{var inst_28165 = (state_28169[(2)]);var state_28169__$1 = state_28169;var statearr_28171_28187 = state_28169__$1;(statearr_28171_28187[(2)] = inst_28165);
(statearr_28171_28187[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28170 === (6)))
{var inst_28155 = (state_28169[(7)]);var inst_28158 = (state_28169[(8)]);var inst_28162 = f.call(null,inst_28155,inst_28158);var inst_28155__$1 = inst_28162;var state_28169__$1 = (function (){var statearr_28172 = state_28169;(statearr_28172[(7)] = inst_28155__$1);
return statearr_28172;
})();var statearr_28173_28188 = state_28169__$1;(statearr_28173_28188[(2)] = null);
(statearr_28173_28188[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28170 === (5)))
{var inst_28155 = (state_28169[(7)]);var state_28169__$1 = state_28169;var statearr_28174_28189 = state_28169__$1;(statearr_28174_28189[(2)] = inst_28155);
(statearr_28174_28189[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28170 === (4)))
{var inst_28158 = (state_28169[(8)]);var inst_28158__$1 = (state_28169[(2)]);var inst_28159 = (inst_28158__$1 == null);var state_28169__$1 = (function (){var statearr_28175 = state_28169;(statearr_28175[(8)] = inst_28158__$1);
return statearr_28175;
})();if(cljs.core.truth_(inst_28159))
{var statearr_28176_28190 = state_28169__$1;(statearr_28176_28190[(1)] = (5));
} else
{var statearr_28177_28191 = state_28169__$1;(statearr_28177_28191[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28170 === (3)))
{var inst_28167 = (state_28169[(2)]);var state_28169__$1 = state_28169;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28169__$1,inst_28167);
} else
{if((state_val_28170 === (2)))
{var state_28169__$1 = state_28169;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28169__$1,(4),ch);
} else
{if((state_val_28170 === (1)))
{var inst_28155 = init;var state_28169__$1 = (function (){var statearr_28178 = state_28169;(statearr_28178[(7)] = inst_28155);
return statearr_28178;
})();var statearr_28179_28192 = state_28169__$1;(statearr_28179_28192[(2)] = null);
(statearr_28179_28192[(1)] = (2));
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
var state_machine__5679__auto____0 = (function (){var statearr_28183 = [null,null,null,null,null,null,null,null,null];(statearr_28183[(0)] = state_machine__5679__auto__);
(statearr_28183[(1)] = (1));
return statearr_28183;
});
var state_machine__5679__auto____1 = (function (state_28169){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28169);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28184){if((e28184 instanceof Object))
{var ex__5682__auto__ = e28184;var statearr_28185_28193 = state_28169;(statearr_28185_28193[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28169);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28184;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28194 = state_28169;
state_28169 = G__28194;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28169){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28169);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_28186 = f__5694__auto__.call(null);(statearr_28186[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_28186;
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
return (function (state_28256){var state_val_28257 = (state_28256[(1)]);if((state_val_28257 === (7)))
{var inst_28237 = (state_28256[(7)]);var inst_28242 = (state_28256[(2)]);var inst_28243 = cljs.core.next.call(null,inst_28237);var inst_28237__$1 = inst_28243;var state_28256__$1 = (function (){var statearr_28258 = state_28256;(statearr_28258[(7)] = inst_28237__$1);
(statearr_28258[(8)] = inst_28242);
return statearr_28258;
})();var statearr_28259_28277 = state_28256__$1;(statearr_28259_28277[(2)] = null);
(statearr_28259_28277[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28257 === (1)))
{var inst_28236 = cljs.core.seq.call(null,coll);var inst_28237 = inst_28236;var state_28256__$1 = (function (){var statearr_28260 = state_28256;(statearr_28260[(7)] = inst_28237);
return statearr_28260;
})();var statearr_28261_28278 = state_28256__$1;(statearr_28261_28278[(2)] = null);
(statearr_28261_28278[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28257 === (4)))
{var inst_28237 = (state_28256[(7)]);var inst_28240 = cljs.core.first.call(null,inst_28237);var state_28256__$1 = state_28256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28256__$1,(7),ch,inst_28240);
} else
{if((state_val_28257 === (6)))
{var inst_28252 = (state_28256[(2)]);var state_28256__$1 = state_28256;var statearr_28262_28279 = state_28256__$1;(statearr_28262_28279[(2)] = inst_28252);
(statearr_28262_28279[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28257 === (3)))
{var inst_28254 = (state_28256[(2)]);var state_28256__$1 = state_28256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28256__$1,inst_28254);
} else
{if((state_val_28257 === (2)))
{var inst_28237 = (state_28256[(7)]);var state_28256__$1 = state_28256;if(cljs.core.truth_(inst_28237))
{var statearr_28263_28280 = state_28256__$1;(statearr_28263_28280[(1)] = (4));
} else
{var statearr_28264_28281 = state_28256__$1;(statearr_28264_28281[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28257 === (9)))
{var state_28256__$1 = state_28256;var statearr_28265_28282 = state_28256__$1;(statearr_28265_28282[(2)] = null);
(statearr_28265_28282[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28257 === (5)))
{var state_28256__$1 = state_28256;if(cljs.core.truth_(close_QMARK_))
{var statearr_28266_28283 = state_28256__$1;(statearr_28266_28283[(1)] = (8));
} else
{var statearr_28267_28284 = state_28256__$1;(statearr_28267_28284[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28257 === (10)))
{var inst_28250 = (state_28256[(2)]);var state_28256__$1 = state_28256;var statearr_28268_28285 = state_28256__$1;(statearr_28268_28285[(2)] = inst_28250);
(statearr_28268_28285[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28257 === (8)))
{var inst_28247 = cljs.core.async.close_BANG_.call(null,ch);var state_28256__$1 = state_28256;var statearr_28269_28286 = state_28256__$1;(statearr_28269_28286[(2)] = inst_28247);
(statearr_28269_28286[(1)] = (10));
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
var state_machine__5679__auto____0 = (function (){var statearr_28273 = [null,null,null,null,null,null,null,null,null];(statearr_28273[(0)] = state_machine__5679__auto__);
(statearr_28273[(1)] = (1));
return statearr_28273;
});
var state_machine__5679__auto____1 = (function (state_28256){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28256);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28274){if((e28274 instanceof Object))
{var ex__5682__auto__ = e28274;var statearr_28275_28287 = state_28256;(statearr_28275_28287[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28256);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28274;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28288 = state_28256;
state_28256 = G__28288;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28256){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_28276 = f__5694__auto__.call(null);(statearr_28276[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_28276;
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
cljs.core.async.Mux = (function (){var obj28290 = {};return obj28290;
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
cljs.core.async.Mult = (function (){var obj28292 = {};return obj28292;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t28516 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28516 = (function (cs,ch,mult,meta28517){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta28517 = meta28517;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28516.cljs$lang$type = true;
cljs.core.async.t28516.cljs$lang$ctorStr = "cljs.core.async/t28516";
cljs.core.async.t28516.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28516");
});})(cs))
;
cljs.core.async.t28516.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t28516.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t28516.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t28516.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t28516.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28516.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t28516.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_28518){var self__ = this;
var _28518__$1 = this;return self__.meta28517;
});})(cs))
;
cljs.core.async.t28516.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_28518,meta28517__$1){var self__ = this;
var _28518__$1 = this;return (new cljs.core.async.t28516(self__.cs,self__.ch,self__.mult,meta28517__$1));
});})(cs))
;
cljs.core.async.__GT_t28516 = ((function (cs){
return (function __GT_t28516(cs__$1,ch__$1,mult__$1,meta28517){return (new cljs.core.async.t28516(cs__$1,ch__$1,mult__$1,meta28517));
});})(cs))
;
}
return (new cljs.core.async.t28516(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5693__auto___28739 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___28739,cs,m,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___28739,cs,m,dchan,dctr,done){
return (function (state_28653){var state_val_28654 = (state_28653[(1)]);if((state_val_28654 === (7)))
{var inst_28649 = (state_28653[(2)]);var state_28653__$1 = state_28653;var statearr_28655_28740 = state_28653__$1;(statearr_28655_28740[(2)] = inst_28649);
(statearr_28655_28740[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (20)))
{var inst_28550 = (state_28653[(7)]);var inst_28560 = cljs.core.first.call(null,inst_28550);var inst_28561 = cljs.core.nth.call(null,inst_28560,(0),null);var inst_28562 = cljs.core.nth.call(null,inst_28560,(1),null);var state_28653__$1 = (function (){var statearr_28656 = state_28653;(statearr_28656[(8)] = inst_28561);
return statearr_28656;
})();if(cljs.core.truth_(inst_28562))
{var statearr_28657_28741 = state_28653__$1;(statearr_28657_28741[(1)] = (22));
} else
{var statearr_28658_28742 = state_28653__$1;(statearr_28658_28742[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (27)))
{var inst_28592 = (state_28653[(9)]);var inst_28590 = (state_28653[(10)]);var inst_28597 = cljs.core._nth.call(null,inst_28590,inst_28592);var state_28653__$1 = (function (){var statearr_28659 = state_28653;(statearr_28659[(11)] = inst_28597);
return statearr_28659;
})();var statearr_28660_28743 = state_28653__$1;(statearr_28660_28743[(2)] = null);
(statearr_28660_28743[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (1)))
{var state_28653__$1 = state_28653;var statearr_28661_28744 = state_28653__$1;(statearr_28661_28744[(2)] = null);
(statearr_28661_28744[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (24)))
{var inst_28550 = (state_28653[(7)]);var inst_28567 = (state_28653[(2)]);var inst_28568 = cljs.core.next.call(null,inst_28550);var inst_28530 = inst_28568;var inst_28531 = null;var inst_28532 = (0);var inst_28533 = (0);var state_28653__$1 = (function (){var statearr_28662 = state_28653;(statearr_28662[(12)] = inst_28530);
(statearr_28662[(13)] = inst_28532);
(statearr_28662[(14)] = inst_28531);
(statearr_28662[(15)] = inst_28567);
(statearr_28662[(16)] = inst_28533);
return statearr_28662;
})();var statearr_28663_28745 = state_28653__$1;(statearr_28663_28745[(2)] = null);
(statearr_28663_28745[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (39)))
{var inst_28610 = (state_28653[(17)]);var inst_28628 = (state_28653[(2)]);var inst_28629 = cljs.core.next.call(null,inst_28610);var inst_28589 = inst_28629;var inst_28590 = null;var inst_28591 = (0);var inst_28592 = (0);var state_28653__$1 = (function (){var statearr_28667 = state_28653;(statearr_28667[(18)] = inst_28628);
(statearr_28667[(9)] = inst_28592);
(statearr_28667[(19)] = inst_28591);
(statearr_28667[(10)] = inst_28590);
(statearr_28667[(20)] = inst_28589);
return statearr_28667;
})();var statearr_28668_28746 = state_28653__$1;(statearr_28668_28746[(2)] = null);
(statearr_28668_28746[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (4)))
{var inst_28521 = (state_28653[(21)]);var inst_28521__$1 = (state_28653[(2)]);var inst_28522 = (inst_28521__$1 == null);var state_28653__$1 = (function (){var statearr_28669 = state_28653;(statearr_28669[(21)] = inst_28521__$1);
return statearr_28669;
})();if(cljs.core.truth_(inst_28522))
{var statearr_28670_28747 = state_28653__$1;(statearr_28670_28747[(1)] = (5));
} else
{var statearr_28671_28748 = state_28653__$1;(statearr_28671_28748[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (15)))
{var inst_28530 = (state_28653[(12)]);var inst_28532 = (state_28653[(13)]);var inst_28531 = (state_28653[(14)]);var inst_28533 = (state_28653[(16)]);var inst_28546 = (state_28653[(2)]);var inst_28547 = (inst_28533 + (1));var tmp28664 = inst_28530;var tmp28665 = inst_28532;var tmp28666 = inst_28531;var inst_28530__$1 = tmp28664;var inst_28531__$1 = tmp28666;var inst_28532__$1 = tmp28665;var inst_28533__$1 = inst_28547;var state_28653__$1 = (function (){var statearr_28672 = state_28653;(statearr_28672[(12)] = inst_28530__$1);
(statearr_28672[(13)] = inst_28532__$1);
(statearr_28672[(14)] = inst_28531__$1);
(statearr_28672[(22)] = inst_28546);
(statearr_28672[(16)] = inst_28533__$1);
return statearr_28672;
})();var statearr_28673_28749 = state_28653__$1;(statearr_28673_28749[(2)] = null);
(statearr_28673_28749[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (21)))
{var inst_28571 = (state_28653[(2)]);var state_28653__$1 = state_28653;var statearr_28674_28750 = state_28653__$1;(statearr_28674_28750[(2)] = inst_28571);
(statearr_28674_28750[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (31)))
{var inst_28597 = (state_28653[(11)]);var inst_28598 = (state_28653[(2)]);var inst_28599 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28600 = cljs.core.async.untap_STAR_.call(null,m,inst_28597);var state_28653__$1 = (function (){var statearr_28675 = state_28653;(statearr_28675[(23)] = inst_28599);
(statearr_28675[(24)] = inst_28598);
return statearr_28675;
})();var statearr_28676_28751 = state_28653__$1;(statearr_28676_28751[(2)] = inst_28600);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (32)))
{var inst_28521 = (state_28653[(21)]);var inst_28597 = (state_28653[(11)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28653,(31),Object,null,(30));var inst_28604 = cljs.core.async.put_BANG_.call(null,inst_28597,inst_28521,done);var state_28653__$1 = state_28653;var statearr_28677_28752 = state_28653__$1;(statearr_28677_28752[(2)] = inst_28604);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (40)))
{var inst_28619 = (state_28653[(25)]);var inst_28620 = (state_28653[(2)]);var inst_28621 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_28622 = cljs.core.async.untap_STAR_.call(null,m,inst_28619);var state_28653__$1 = (function (){var statearr_28678 = state_28653;(statearr_28678[(26)] = inst_28620);
(statearr_28678[(27)] = inst_28621);
return statearr_28678;
})();var statearr_28679_28753 = state_28653__$1;(statearr_28679_28753[(2)] = inst_28622);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (33)))
{var inst_28610 = (state_28653[(17)]);var inst_28612 = cljs.core.chunked_seq_QMARK_.call(null,inst_28610);var state_28653__$1 = state_28653;if(inst_28612)
{var statearr_28680_28754 = state_28653__$1;(statearr_28680_28754[(1)] = (36));
} else
{var statearr_28681_28755 = state_28653__$1;(statearr_28681_28755[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (13)))
{var inst_28540 = (state_28653[(28)]);var inst_28543 = cljs.core.async.close_BANG_.call(null,inst_28540);var state_28653__$1 = state_28653;var statearr_28682_28756 = state_28653__$1;(statearr_28682_28756[(2)] = inst_28543);
(statearr_28682_28756[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (22)))
{var inst_28561 = (state_28653[(8)]);var inst_28564 = cljs.core.async.close_BANG_.call(null,inst_28561);var state_28653__$1 = state_28653;var statearr_28683_28757 = state_28653__$1;(statearr_28683_28757[(2)] = inst_28564);
(statearr_28683_28757[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (36)))
{var inst_28610 = (state_28653[(17)]);var inst_28614 = cljs.core.chunk_first.call(null,inst_28610);var inst_28615 = cljs.core.chunk_rest.call(null,inst_28610);var inst_28616 = cljs.core.count.call(null,inst_28614);var inst_28589 = inst_28615;var inst_28590 = inst_28614;var inst_28591 = inst_28616;var inst_28592 = (0);var state_28653__$1 = (function (){var statearr_28684 = state_28653;(statearr_28684[(9)] = inst_28592);
(statearr_28684[(19)] = inst_28591);
(statearr_28684[(10)] = inst_28590);
(statearr_28684[(20)] = inst_28589);
return statearr_28684;
})();var statearr_28685_28758 = state_28653__$1;(statearr_28685_28758[(2)] = null);
(statearr_28685_28758[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (41)))
{var inst_28521 = (state_28653[(21)]);var inst_28619 = (state_28653[(25)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28653,(40),Object,null,(39));var inst_28626 = cljs.core.async.put_BANG_.call(null,inst_28619,inst_28521,done);var state_28653__$1 = state_28653;var statearr_28686_28759 = state_28653__$1;(statearr_28686_28759[(2)] = inst_28626);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (43)))
{var state_28653__$1 = state_28653;var statearr_28687_28760 = state_28653__$1;(statearr_28687_28760[(2)] = null);
(statearr_28687_28760[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (29)))
{var inst_28637 = (state_28653[(2)]);var state_28653__$1 = state_28653;var statearr_28688_28761 = state_28653__$1;(statearr_28688_28761[(2)] = inst_28637);
(statearr_28688_28761[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (44)))
{var inst_28646 = (state_28653[(2)]);var state_28653__$1 = (function (){var statearr_28689 = state_28653;(statearr_28689[(29)] = inst_28646);
return statearr_28689;
})();var statearr_28690_28762 = state_28653__$1;(statearr_28690_28762[(2)] = null);
(statearr_28690_28762[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (6)))
{var inst_28581 = (state_28653[(30)]);var inst_28580 = cljs.core.deref.call(null,cs);var inst_28581__$1 = cljs.core.keys.call(null,inst_28580);var inst_28582 = cljs.core.count.call(null,inst_28581__$1);var inst_28583 = cljs.core.reset_BANG_.call(null,dctr,inst_28582);var inst_28588 = cljs.core.seq.call(null,inst_28581__$1);var inst_28589 = inst_28588;var inst_28590 = null;var inst_28591 = (0);var inst_28592 = (0);var state_28653__$1 = (function (){var statearr_28691 = state_28653;(statearr_28691[(9)] = inst_28592);
(statearr_28691[(19)] = inst_28591);
(statearr_28691[(10)] = inst_28590);
(statearr_28691[(20)] = inst_28589);
(statearr_28691[(30)] = inst_28581__$1);
(statearr_28691[(31)] = inst_28583);
return statearr_28691;
})();var statearr_28692_28763 = state_28653__$1;(statearr_28692_28763[(2)] = null);
(statearr_28692_28763[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (28)))
{var inst_28610 = (state_28653[(17)]);var inst_28589 = (state_28653[(20)]);var inst_28610__$1 = cljs.core.seq.call(null,inst_28589);var state_28653__$1 = (function (){var statearr_28693 = state_28653;(statearr_28693[(17)] = inst_28610__$1);
return statearr_28693;
})();if(inst_28610__$1)
{var statearr_28694_28764 = state_28653__$1;(statearr_28694_28764[(1)] = (33));
} else
{var statearr_28695_28765 = state_28653__$1;(statearr_28695_28765[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (25)))
{var inst_28592 = (state_28653[(9)]);var inst_28591 = (state_28653[(19)]);var inst_28594 = (inst_28592 < inst_28591);var inst_28595 = inst_28594;var state_28653__$1 = state_28653;if(cljs.core.truth_(inst_28595))
{var statearr_28696_28766 = state_28653__$1;(statearr_28696_28766[(1)] = (27));
} else
{var statearr_28697_28767 = state_28653__$1;(statearr_28697_28767[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (34)))
{var state_28653__$1 = state_28653;var statearr_28698_28768 = state_28653__$1;(statearr_28698_28768[(2)] = null);
(statearr_28698_28768[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (17)))
{var state_28653__$1 = state_28653;var statearr_28699_28769 = state_28653__$1;(statearr_28699_28769[(2)] = null);
(statearr_28699_28769[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (3)))
{var inst_28651 = (state_28653[(2)]);var state_28653__$1 = state_28653;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28653__$1,inst_28651);
} else
{if((state_val_28654 === (12)))
{var inst_28576 = (state_28653[(2)]);var state_28653__$1 = state_28653;var statearr_28700_28770 = state_28653__$1;(statearr_28700_28770[(2)] = inst_28576);
(statearr_28700_28770[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (2)))
{var state_28653__$1 = state_28653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28653__$1,(4),ch);
} else
{if((state_val_28654 === (23)))
{var state_28653__$1 = state_28653;var statearr_28701_28771 = state_28653__$1;(statearr_28701_28771[(2)] = null);
(statearr_28701_28771[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (35)))
{var inst_28635 = (state_28653[(2)]);var state_28653__$1 = state_28653;var statearr_28702_28772 = state_28653__$1;(statearr_28702_28772[(2)] = inst_28635);
(statearr_28702_28772[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (19)))
{var inst_28550 = (state_28653[(7)]);var inst_28554 = cljs.core.chunk_first.call(null,inst_28550);var inst_28555 = cljs.core.chunk_rest.call(null,inst_28550);var inst_28556 = cljs.core.count.call(null,inst_28554);var inst_28530 = inst_28555;var inst_28531 = inst_28554;var inst_28532 = inst_28556;var inst_28533 = (0);var state_28653__$1 = (function (){var statearr_28703 = state_28653;(statearr_28703[(12)] = inst_28530);
(statearr_28703[(13)] = inst_28532);
(statearr_28703[(14)] = inst_28531);
(statearr_28703[(16)] = inst_28533);
return statearr_28703;
})();var statearr_28704_28773 = state_28653__$1;(statearr_28704_28773[(2)] = null);
(statearr_28704_28773[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (11)))
{var inst_28530 = (state_28653[(12)]);var inst_28550 = (state_28653[(7)]);var inst_28550__$1 = cljs.core.seq.call(null,inst_28530);var state_28653__$1 = (function (){var statearr_28705 = state_28653;(statearr_28705[(7)] = inst_28550__$1);
return statearr_28705;
})();if(inst_28550__$1)
{var statearr_28706_28774 = state_28653__$1;(statearr_28706_28774[(1)] = (16));
} else
{var statearr_28707_28775 = state_28653__$1;(statearr_28707_28775[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (9)))
{var inst_28578 = (state_28653[(2)]);var state_28653__$1 = state_28653;var statearr_28708_28776 = state_28653__$1;(statearr_28708_28776[(2)] = inst_28578);
(statearr_28708_28776[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (5)))
{var inst_28528 = cljs.core.deref.call(null,cs);var inst_28529 = cljs.core.seq.call(null,inst_28528);var inst_28530 = inst_28529;var inst_28531 = null;var inst_28532 = (0);var inst_28533 = (0);var state_28653__$1 = (function (){var statearr_28709 = state_28653;(statearr_28709[(12)] = inst_28530);
(statearr_28709[(13)] = inst_28532);
(statearr_28709[(14)] = inst_28531);
(statearr_28709[(16)] = inst_28533);
return statearr_28709;
})();var statearr_28710_28777 = state_28653__$1;(statearr_28710_28777[(2)] = null);
(statearr_28710_28777[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (14)))
{var state_28653__$1 = state_28653;var statearr_28711_28778 = state_28653__$1;(statearr_28711_28778[(2)] = null);
(statearr_28711_28778[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (45)))
{var inst_28643 = (state_28653[(2)]);var state_28653__$1 = state_28653;var statearr_28712_28779 = state_28653__$1;(statearr_28712_28779[(2)] = inst_28643);
(statearr_28712_28779[(1)] = (44));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (26)))
{var inst_28581 = (state_28653[(30)]);var inst_28639 = (state_28653[(2)]);var inst_28640 = cljs.core.seq.call(null,inst_28581);var state_28653__$1 = (function (){var statearr_28713 = state_28653;(statearr_28713[(32)] = inst_28639);
return statearr_28713;
})();if(inst_28640)
{var statearr_28714_28780 = state_28653__$1;(statearr_28714_28780[(1)] = (42));
} else
{var statearr_28715_28781 = state_28653__$1;(statearr_28715_28781[(1)] = (43));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (16)))
{var inst_28550 = (state_28653[(7)]);var inst_28552 = cljs.core.chunked_seq_QMARK_.call(null,inst_28550);var state_28653__$1 = state_28653;if(inst_28552)
{var statearr_28719_28782 = state_28653__$1;(statearr_28719_28782[(1)] = (19));
} else
{var statearr_28720_28783 = state_28653__$1;(statearr_28720_28783[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (38)))
{var inst_28632 = (state_28653[(2)]);var state_28653__$1 = state_28653;var statearr_28721_28784 = state_28653__$1;(statearr_28721_28784[(2)] = inst_28632);
(statearr_28721_28784[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (30)))
{var inst_28592 = (state_28653[(9)]);var inst_28591 = (state_28653[(19)]);var inst_28590 = (state_28653[(10)]);var inst_28589 = (state_28653[(20)]);var inst_28606 = (state_28653[(2)]);var inst_28607 = (inst_28592 + (1));var tmp28716 = inst_28591;var tmp28717 = inst_28590;var tmp28718 = inst_28589;var inst_28589__$1 = tmp28718;var inst_28590__$1 = tmp28717;var inst_28591__$1 = tmp28716;var inst_28592__$1 = inst_28607;var state_28653__$1 = (function (){var statearr_28722 = state_28653;(statearr_28722[(9)] = inst_28592__$1);
(statearr_28722[(19)] = inst_28591__$1);
(statearr_28722[(10)] = inst_28590__$1);
(statearr_28722[(20)] = inst_28589__$1);
(statearr_28722[(33)] = inst_28606);
return statearr_28722;
})();var statearr_28723_28785 = state_28653__$1;(statearr_28723_28785[(2)] = null);
(statearr_28723_28785[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (10)))
{var inst_28531 = (state_28653[(14)]);var inst_28533 = (state_28653[(16)]);var inst_28539 = cljs.core._nth.call(null,inst_28531,inst_28533);var inst_28540 = cljs.core.nth.call(null,inst_28539,(0),null);var inst_28541 = cljs.core.nth.call(null,inst_28539,(1),null);var state_28653__$1 = (function (){var statearr_28724 = state_28653;(statearr_28724[(28)] = inst_28540);
return statearr_28724;
})();if(cljs.core.truth_(inst_28541))
{var statearr_28725_28786 = state_28653__$1;(statearr_28725_28786[(1)] = (13));
} else
{var statearr_28726_28787 = state_28653__$1;(statearr_28726_28787[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (18)))
{var inst_28574 = (state_28653[(2)]);var state_28653__$1 = state_28653;var statearr_28727_28788 = state_28653__$1;(statearr_28727_28788[(2)] = inst_28574);
(statearr_28727_28788[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (42)))
{var state_28653__$1 = state_28653;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28653__$1,(45),dchan);
} else
{if((state_val_28654 === (37)))
{var inst_28610 = (state_28653[(17)]);var inst_28619 = cljs.core.first.call(null,inst_28610);var state_28653__$1 = (function (){var statearr_28728 = state_28653;(statearr_28728[(25)] = inst_28619);
return statearr_28728;
})();var statearr_28729_28789 = state_28653__$1;(statearr_28729_28789[(2)] = null);
(statearr_28729_28789[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28654 === (8)))
{var inst_28532 = (state_28653[(13)]);var inst_28533 = (state_28653[(16)]);var inst_28535 = (inst_28533 < inst_28532);var inst_28536 = inst_28535;var state_28653__$1 = state_28653;if(cljs.core.truth_(inst_28536))
{var statearr_28730_28790 = state_28653__$1;(statearr_28730_28790[(1)] = (10));
} else
{var statearr_28731_28791 = state_28653__$1;(statearr_28731_28791[(1)] = (11));
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
});})(c__5693__auto___28739,cs,m,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___28739,cs,m,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_28735 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_28735[(0)] = state_machine__5679__auto__);
(statearr_28735[(1)] = (1));
return statearr_28735;
});
var state_machine__5679__auto____1 = (function (state_28653){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28653);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e28736){if((e28736 instanceof Object))
{var ex__5682__auto__ = e28736;var statearr_28737_28792 = state_28653;(statearr_28737_28792[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28653);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e28736;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__28793 = state_28653;
state_28653 = G__28793;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28653){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28653);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___28739,cs,m,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_28738 = f__5694__auto__.call(null);(statearr_28738[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___28739);
return statearr_28738;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___28739,cs,m,dchan,dctr,done))
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
cljs.core.async.Mix = (function (){var obj28795 = {};return obj28795;
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
;var m = (function (){if(typeof cljs.core.async.t28905 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t28905 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta28906){
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
this.meta28906 = meta28906;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t28905.cljs$lang$type = true;
cljs.core.async.t28905.cljs$lang$ctorStr = "cljs.core.async/t28905";
cljs.core.async.t28905.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t28905");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t28905.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28905.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t28905.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28905.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28907){var self__ = this;
var _28907__$1 = this;return self__.meta28906;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t28905.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_28907,meta28906__$1){var self__ = this;
var _28907__$1 = this;return (new cljs.core.async.t28905(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta28906__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t28905 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t28905(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28906){return (new cljs.core.async.t28905(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta28906));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t28905(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__5693__auto___29014 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_28972){var state_val_28973 = (state_28972[(1)]);if((state_val_28973 === (7)))
{var inst_28921 = (state_28972[(7)]);var inst_28926 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28921);var state_28972__$1 = state_28972;var statearr_28974_29015 = state_28972__$1;(statearr_28974_29015[(2)] = inst_28926);
(statearr_28974_29015[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (20)))
{var inst_28936 = (state_28972[(8)]);var state_28972__$1 = state_28972;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28972__$1,(23),out,inst_28936);
} else
{if((state_val_28973 === (1)))
{var inst_28911 = (state_28972[(9)]);var inst_28911__$1 = calc_state.call(null);var inst_28912 = cljs.core.seq_QMARK_.call(null,inst_28911__$1);var state_28972__$1 = (function (){var statearr_28975 = state_28972;(statearr_28975[(9)] = inst_28911__$1);
return statearr_28975;
})();if(inst_28912)
{var statearr_28976_29016 = state_28972__$1;(statearr_28976_29016[(1)] = (2));
} else
{var statearr_28977_29017 = state_28972__$1;(statearr_28977_29017[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (4)))
{var inst_28911 = (state_28972[(9)]);var inst_28917 = (state_28972[(2)]);var inst_28918 = cljs.core.get.call(null,inst_28917,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28919 = cljs.core.get.call(null,inst_28917,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28920 = cljs.core.get.call(null,inst_28917,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_28921 = inst_28911;var state_28972__$1 = (function (){var statearr_28978 = state_28972;(statearr_28978[(7)] = inst_28921);
(statearr_28978[(10)] = inst_28920);
(statearr_28978[(11)] = inst_28919);
(statearr_28978[(12)] = inst_28918);
return statearr_28978;
})();var statearr_28979_29018 = state_28972__$1;(statearr_28979_29018[(2)] = null);
(statearr_28979_29018[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (15)))
{var state_28972__$1 = state_28972;var statearr_28980_29019 = state_28972__$1;(statearr_28980_29019[(2)] = null);
(statearr_28980_29019[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (21)))
{var state_28972__$1 = state_28972;var statearr_28981_29020 = state_28972__$1;(statearr_28981_29020[(2)] = null);
(statearr_28981_29020[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (13)))
{var inst_28968 = (state_28972[(2)]);var state_28972__$1 = state_28972;var statearr_28982_29021 = state_28972__$1;(statearr_28982_29021[(2)] = inst_28968);
(statearr_28982_29021[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (22)))
{var inst_28929 = (state_28972[(13)]);var inst_28965 = (state_28972[(2)]);var inst_28921 = inst_28929;var state_28972__$1 = (function (){var statearr_28983 = state_28972;(statearr_28983[(7)] = inst_28921);
(statearr_28983[(14)] = inst_28965);
return statearr_28983;
})();var statearr_28984_29022 = state_28972__$1;(statearr_28984_29022[(2)] = null);
(statearr_28984_29022[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (6)))
{var inst_28970 = (state_28972[(2)]);var state_28972__$1 = state_28972;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28972__$1,inst_28970);
} else
{if((state_val_28973 === (17)))
{var inst_28951 = (state_28972[(15)]);var state_28972__$1 = state_28972;var statearr_28985_29023 = state_28972__$1;(statearr_28985_29023[(2)] = inst_28951);
(statearr_28985_29023[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (3)))
{var inst_28911 = (state_28972[(9)]);var state_28972__$1 = state_28972;var statearr_28986_29024 = state_28972__$1;(statearr_28986_29024[(2)] = inst_28911);
(statearr_28986_29024[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (12)))
{var inst_28951 = (state_28972[(15)]);var inst_28932 = (state_28972[(16)]);var inst_28937 = (state_28972[(17)]);var inst_28951__$1 = inst_28932.call(null,inst_28937);var state_28972__$1 = (function (){var statearr_28987 = state_28972;(statearr_28987[(15)] = inst_28951__$1);
return statearr_28987;
})();if(cljs.core.truth_(inst_28951__$1))
{var statearr_28988_29025 = state_28972__$1;(statearr_28988_29025[(1)] = (17));
} else
{var statearr_28989_29026 = state_28972__$1;(statearr_28989_29026[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (2)))
{var inst_28911 = (state_28972[(9)]);var inst_28914 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28911);var state_28972__$1 = state_28972;var statearr_28990_29027 = state_28972__$1;(statearr_28990_29027[(2)] = inst_28914);
(statearr_28990_29027[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (23)))
{var inst_28962 = (state_28972[(2)]);var state_28972__$1 = state_28972;var statearr_28991_29028 = state_28972__$1;(statearr_28991_29028[(2)] = inst_28962);
(statearr_28991_29028[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (19)))
{var inst_28959 = (state_28972[(2)]);var state_28972__$1 = state_28972;if(cljs.core.truth_(inst_28959))
{var statearr_28992_29029 = state_28972__$1;(statearr_28992_29029[(1)] = (20));
} else
{var statearr_28993_29030 = state_28972__$1;(statearr_28993_29030[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (11)))
{var inst_28936 = (state_28972[(8)]);var inst_28942 = (inst_28936 == null);var state_28972__$1 = state_28972;if(cljs.core.truth_(inst_28942))
{var statearr_28994_29031 = state_28972__$1;(statearr_28994_29031[(1)] = (14));
} else
{var statearr_28995_29032 = state_28972__$1;(statearr_28995_29032[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (9)))
{var inst_28929 = (state_28972[(13)]);var inst_28929__$1 = (state_28972[(2)]);var inst_28930 = cljs.core.get.call(null,inst_28929__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_28931 = cljs.core.get.call(null,inst_28929__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_28932 = cljs.core.get.call(null,inst_28929__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_28972__$1 = (function (){var statearr_28996 = state_28972;(statearr_28996[(18)] = inst_28931);
(statearr_28996[(13)] = inst_28929__$1);
(statearr_28996[(16)] = inst_28932);
return statearr_28996;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_28972__$1,(10),inst_28930);
} else
{if((state_val_28973 === (5)))
{var inst_28921 = (state_28972[(7)]);var inst_28924 = cljs.core.seq_QMARK_.call(null,inst_28921);var state_28972__$1 = state_28972;if(inst_28924)
{var statearr_28997_29033 = state_28972__$1;(statearr_28997_29033[(1)] = (7));
} else
{var statearr_28998_29034 = state_28972__$1;(statearr_28998_29034[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (14)))
{var inst_28937 = (state_28972[(17)]);var inst_28944 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_28937);var state_28972__$1 = state_28972;var statearr_28999_29035 = state_28972__$1;(statearr_28999_29035[(2)] = inst_28944);
(statearr_28999_29035[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (16)))
{var inst_28947 = (state_28972[(2)]);var inst_28948 = calc_state.call(null);var inst_28921 = inst_28948;var state_28972__$1 = (function (){var statearr_29000 = state_28972;(statearr_29000[(7)] = inst_28921);
(statearr_29000[(19)] = inst_28947);
return statearr_29000;
})();var statearr_29001_29036 = state_28972__$1;(statearr_29001_29036[(2)] = null);
(statearr_29001_29036[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (10)))
{var inst_28936 = (state_28972[(8)]);var inst_28937 = (state_28972[(17)]);var inst_28935 = (state_28972[(2)]);var inst_28936__$1 = cljs.core.nth.call(null,inst_28935,(0),null);var inst_28937__$1 = cljs.core.nth.call(null,inst_28935,(1),null);var inst_28938 = (inst_28936__$1 == null);var inst_28939 = cljs.core._EQ_.call(null,inst_28937__$1,change);var inst_28940 = (inst_28938) || (inst_28939);var state_28972__$1 = (function (){var statearr_29002 = state_28972;(statearr_29002[(8)] = inst_28936__$1);
(statearr_29002[(17)] = inst_28937__$1);
return statearr_29002;
})();if(cljs.core.truth_(inst_28940))
{var statearr_29003_29037 = state_28972__$1;(statearr_29003_29037[(1)] = (11));
} else
{var statearr_29004_29038 = state_28972__$1;(statearr_29004_29038[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (18)))
{var inst_28931 = (state_28972[(18)]);var inst_28932 = (state_28972[(16)]);var inst_28937 = (state_28972[(17)]);var inst_28954 = cljs.core.empty_QMARK_.call(null,inst_28932);var inst_28955 = inst_28931.call(null,inst_28937);var inst_28956 = cljs.core.not.call(null,inst_28955);var inst_28957 = (inst_28954) && (inst_28956);var state_28972__$1 = state_28972;var statearr_29005_29039 = state_28972__$1;(statearr_29005_29039[(2)] = inst_28957);
(statearr_29005_29039[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_28973 === (8)))
{var inst_28921 = (state_28972[(7)]);var state_28972__$1 = state_28972;var statearr_29006_29040 = state_28972__$1;(statearr_29006_29040[(2)] = inst_28921);
(statearr_29006_29040[(1)] = (9));
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
});})(c__5693__auto___29014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__5678__auto__,c__5693__auto___29014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29010 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29010[(0)] = state_machine__5679__auto__);
(statearr_29010[(1)] = (1));
return statearr_29010;
});
var state_machine__5679__auto____1 = (function (state_28972){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_28972);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29011){if((e29011 instanceof Object))
{var ex__5682__auto__ = e29011;var statearr_29012_29041 = state_28972;(statearr_29012_29041[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28972);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29011;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29042 = state_28972;
state_28972 = G__29042;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_28972){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_28972);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__5695__auto__ = (function (){var statearr_29013 = f__5694__auto__.call(null);(statearr_29013[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29014);
return statearr_29013;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29014,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
cljs.core.async.Pub = (function (){var obj29044 = {};return obj29044;
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
return (function (p1__29045_SHARP_){if(cljs.core.truth_(p1__29045_SHARP_.call(null,topic)))
{return p1__29045_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__29045_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3543__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t29170 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t29170 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta29171){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta29171 = meta29171;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t29170.cljs$lang$type = true;
cljs.core.async.t29170.cljs$lang$ctorStr = "cljs.core.async/t29170";
cljs.core.async.t29170.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4110__auto__,writer__4111__auto__,opt__4112__auto__){return cljs.core._write.call(null,writer__4111__auto__,"cljs.core.async/t29170");
});})(mults,ensure_mult))
;
cljs.core.async.t29170.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t29170.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t29170.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t29170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t29170.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t29170.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t29170.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t29170.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_29172){var self__ = this;
var _29172__$1 = this;return self__.meta29171;
});})(mults,ensure_mult))
;
cljs.core.async.t29170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_29172,meta29171__$1){var self__ = this;
var _29172__$1 = this;return (new cljs.core.async.t29170(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta29171__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t29170 = ((function (mults,ensure_mult){
return (function __GT_t29170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29171){return (new cljs.core.async.t29170(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta29171));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t29170(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5693__auto___29294 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29294,mults,ensure_mult,p){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29294,mults,ensure_mult,p){
return (function (state_29246){var state_val_29247 = (state_29246[(1)]);if((state_val_29247 === (7)))
{var inst_29242 = (state_29246[(2)]);var state_29246__$1 = state_29246;var statearr_29248_29295 = state_29246__$1;(statearr_29248_29295[(2)] = inst_29242);
(statearr_29248_29295[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (20)))
{var state_29246__$1 = state_29246;var statearr_29249_29296 = state_29246__$1;(statearr_29249_29296[(2)] = null);
(statearr_29249_29296[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (1)))
{var state_29246__$1 = state_29246;var statearr_29250_29297 = state_29246__$1;(statearr_29250_29297[(2)] = null);
(statearr_29250_29297[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (24)))
{var inst_29225 = (state_29246[(7)]);var inst_29175 = (state_29246[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29246,(23),Object,null,(22));var inst_29232 = cljs.core.async.muxch_STAR_.call(null,inst_29225);var state_29246__$1 = state_29246;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29246__$1,(25),inst_29232,inst_29175);
} else
{if((state_val_29247 === (4)))
{var inst_29175 = (state_29246[(8)]);var inst_29175__$1 = (state_29246[(2)]);var inst_29176 = (inst_29175__$1 == null);var state_29246__$1 = (function (){var statearr_29251 = state_29246;(statearr_29251[(8)] = inst_29175__$1);
return statearr_29251;
})();if(cljs.core.truth_(inst_29176))
{var statearr_29252_29298 = state_29246__$1;(statearr_29252_29298[(1)] = (5));
} else
{var statearr_29253_29299 = state_29246__$1;(statearr_29253_29299[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (15)))
{var inst_29217 = (state_29246[(2)]);var state_29246__$1 = state_29246;var statearr_29254_29300 = state_29246__$1;(statearr_29254_29300[(2)] = inst_29217);
(statearr_29254_29300[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (21)))
{var inst_29239 = (state_29246[(2)]);var state_29246__$1 = (function (){var statearr_29255 = state_29246;(statearr_29255[(9)] = inst_29239);
return statearr_29255;
})();var statearr_29256_29301 = state_29246__$1;(statearr_29256_29301[(2)] = null);
(statearr_29256_29301[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (13)))
{var inst_29199 = (state_29246[(10)]);var inst_29201 = cljs.core.chunked_seq_QMARK_.call(null,inst_29199);var state_29246__$1 = state_29246;if(inst_29201)
{var statearr_29257_29302 = state_29246__$1;(statearr_29257_29302[(1)] = (16));
} else
{var statearr_29258_29303 = state_29246__$1;(statearr_29258_29303[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (22)))
{var inst_29236 = (state_29246[(2)]);var state_29246__$1 = state_29246;var statearr_29259_29304 = state_29246__$1;(statearr_29259_29304[(2)] = inst_29236);
(statearr_29259_29304[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (6)))
{var inst_29223 = (state_29246[(11)]);var inst_29225 = (state_29246[(7)]);var inst_29175 = (state_29246[(8)]);var inst_29223__$1 = topic_fn.call(null,inst_29175);var inst_29224 = cljs.core.deref.call(null,mults);var inst_29225__$1 = cljs.core.get.call(null,inst_29224,inst_29223__$1);var state_29246__$1 = (function (){var statearr_29260 = state_29246;(statearr_29260[(11)] = inst_29223__$1);
(statearr_29260[(7)] = inst_29225__$1);
return statearr_29260;
})();if(cljs.core.truth_(inst_29225__$1))
{var statearr_29261_29305 = state_29246__$1;(statearr_29261_29305[(1)] = (19));
} else
{var statearr_29262_29306 = state_29246__$1;(statearr_29262_29306[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (25)))
{var inst_29234 = (state_29246[(2)]);var state_29246__$1 = state_29246;var statearr_29263_29307 = state_29246__$1;(statearr_29263_29307[(2)] = inst_29234);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29246__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (17)))
{var inst_29199 = (state_29246[(10)]);var inst_29208 = cljs.core.first.call(null,inst_29199);var inst_29209 = cljs.core.async.muxch_STAR_.call(null,inst_29208);var inst_29210 = cljs.core.async.close_BANG_.call(null,inst_29209);var inst_29211 = cljs.core.next.call(null,inst_29199);var inst_29185 = inst_29211;var inst_29186 = null;var inst_29187 = (0);var inst_29188 = (0);var state_29246__$1 = (function (){var statearr_29264 = state_29246;(statearr_29264[(12)] = inst_29188);
(statearr_29264[(13)] = inst_29187);
(statearr_29264[(14)] = inst_29186);
(statearr_29264[(15)] = inst_29185);
(statearr_29264[(16)] = inst_29210);
return statearr_29264;
})();var statearr_29265_29308 = state_29246__$1;(statearr_29265_29308[(2)] = null);
(statearr_29265_29308[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (3)))
{var inst_29244 = (state_29246[(2)]);var state_29246__$1 = state_29246;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29246__$1,inst_29244);
} else
{if((state_val_29247 === (12)))
{var inst_29219 = (state_29246[(2)]);var state_29246__$1 = state_29246;var statearr_29266_29309 = state_29246__$1;(statearr_29266_29309[(2)] = inst_29219);
(statearr_29266_29309[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (2)))
{var state_29246__$1 = state_29246;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29246__$1,(4),ch);
} else
{if((state_val_29247 === (23)))
{var inst_29223 = (state_29246[(11)]);var inst_29227 = (state_29246[(2)]);var inst_29228 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_29223);var state_29246__$1 = (function (){var statearr_29267 = state_29246;(statearr_29267[(17)] = inst_29227);
return statearr_29267;
})();var statearr_29268_29310 = state_29246__$1;(statearr_29268_29310[(2)] = inst_29228);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29246__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (19)))
{var state_29246__$1 = state_29246;var statearr_29269_29311 = state_29246__$1;(statearr_29269_29311[(2)] = null);
(statearr_29269_29311[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (11)))
{var inst_29199 = (state_29246[(10)]);var inst_29185 = (state_29246[(15)]);var inst_29199__$1 = cljs.core.seq.call(null,inst_29185);var state_29246__$1 = (function (){var statearr_29270 = state_29246;(statearr_29270[(10)] = inst_29199__$1);
return statearr_29270;
})();if(inst_29199__$1)
{var statearr_29271_29312 = state_29246__$1;(statearr_29271_29312[(1)] = (13));
} else
{var statearr_29272_29313 = state_29246__$1;(statearr_29272_29313[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (9)))
{var inst_29221 = (state_29246[(2)]);var state_29246__$1 = state_29246;var statearr_29273_29314 = state_29246__$1;(statearr_29273_29314[(2)] = inst_29221);
(statearr_29273_29314[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (5)))
{var inst_29182 = cljs.core.deref.call(null,mults);var inst_29183 = cljs.core.vals.call(null,inst_29182);var inst_29184 = cljs.core.seq.call(null,inst_29183);var inst_29185 = inst_29184;var inst_29186 = null;var inst_29187 = (0);var inst_29188 = (0);var state_29246__$1 = (function (){var statearr_29274 = state_29246;(statearr_29274[(12)] = inst_29188);
(statearr_29274[(13)] = inst_29187);
(statearr_29274[(14)] = inst_29186);
(statearr_29274[(15)] = inst_29185);
return statearr_29274;
})();var statearr_29275_29315 = state_29246__$1;(statearr_29275_29315[(2)] = null);
(statearr_29275_29315[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (14)))
{var state_29246__$1 = state_29246;var statearr_29279_29316 = state_29246__$1;(statearr_29279_29316[(2)] = null);
(statearr_29279_29316[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (16)))
{var inst_29199 = (state_29246[(10)]);var inst_29203 = cljs.core.chunk_first.call(null,inst_29199);var inst_29204 = cljs.core.chunk_rest.call(null,inst_29199);var inst_29205 = cljs.core.count.call(null,inst_29203);var inst_29185 = inst_29204;var inst_29186 = inst_29203;var inst_29187 = inst_29205;var inst_29188 = (0);var state_29246__$1 = (function (){var statearr_29280 = state_29246;(statearr_29280[(12)] = inst_29188);
(statearr_29280[(13)] = inst_29187);
(statearr_29280[(14)] = inst_29186);
(statearr_29280[(15)] = inst_29185);
return statearr_29280;
})();var statearr_29281_29317 = state_29246__$1;(statearr_29281_29317[(2)] = null);
(statearr_29281_29317[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (10)))
{var inst_29188 = (state_29246[(12)]);var inst_29187 = (state_29246[(13)]);var inst_29186 = (state_29246[(14)]);var inst_29185 = (state_29246[(15)]);var inst_29193 = cljs.core._nth.call(null,inst_29186,inst_29188);var inst_29194 = cljs.core.async.muxch_STAR_.call(null,inst_29193);var inst_29195 = cljs.core.async.close_BANG_.call(null,inst_29194);var inst_29196 = (inst_29188 + (1));var tmp29276 = inst_29187;var tmp29277 = inst_29186;var tmp29278 = inst_29185;var inst_29185__$1 = tmp29278;var inst_29186__$1 = tmp29277;var inst_29187__$1 = tmp29276;var inst_29188__$1 = inst_29196;var state_29246__$1 = (function (){var statearr_29282 = state_29246;(statearr_29282[(12)] = inst_29188__$1);
(statearr_29282[(13)] = inst_29187__$1);
(statearr_29282[(18)] = inst_29195);
(statearr_29282[(14)] = inst_29186__$1);
(statearr_29282[(15)] = inst_29185__$1);
return statearr_29282;
})();var statearr_29283_29318 = state_29246__$1;(statearr_29283_29318[(2)] = null);
(statearr_29283_29318[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (18)))
{var inst_29214 = (state_29246[(2)]);var state_29246__$1 = state_29246;var statearr_29284_29319 = state_29246__$1;(statearr_29284_29319[(2)] = inst_29214);
(statearr_29284_29319[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29247 === (8)))
{var inst_29188 = (state_29246[(12)]);var inst_29187 = (state_29246[(13)]);var inst_29190 = (inst_29188 < inst_29187);var inst_29191 = inst_29190;var state_29246__$1 = state_29246;if(cljs.core.truth_(inst_29191))
{var statearr_29285_29320 = state_29246__$1;(statearr_29285_29320[(1)] = (10));
} else
{var statearr_29286_29321 = state_29246__$1;(statearr_29286_29321[(1)] = (11));
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
});})(c__5693__auto___29294,mults,ensure_mult,p))
;return ((function (switch__5678__auto__,c__5693__auto___29294,mults,ensure_mult,p){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29290 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29290[(0)] = state_machine__5679__auto__);
(statearr_29290[(1)] = (1));
return statearr_29290;
});
var state_machine__5679__auto____1 = (function (state_29246){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29246);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29291){if((e29291 instanceof Object))
{var ex__5682__auto__ = e29291;var statearr_29292_29322 = state_29246;(statearr_29292_29322[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29246);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29291;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29323 = state_29246;
state_29246 = G__29323;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29246){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29246);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29294,mults,ensure_mult,p))
})();var state__5695__auto__ = (function (){var statearr_29293 = f__5694__auto__.call(null);(statearr_29293[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29294);
return statearr_29293;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29294,mults,ensure_mult,p))
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
,cljs.core.range.call(null,cnt));var c__5693__auto___29460 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_29430){var state_val_29431 = (state_29430[(1)]);if((state_val_29431 === (7)))
{var state_29430__$1 = state_29430;var statearr_29432_29461 = state_29430__$1;(statearr_29432_29461[(2)] = null);
(statearr_29432_29461[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (1)))
{var state_29430__$1 = state_29430;var statearr_29433_29462 = state_29430__$1;(statearr_29433_29462[(2)] = null);
(statearr_29433_29462[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (4)))
{var inst_29394 = (state_29430[(7)]);var inst_29396 = (inst_29394 < cnt);var state_29430__$1 = state_29430;if(cljs.core.truth_(inst_29396))
{var statearr_29434_29463 = state_29430__$1;(statearr_29434_29463[(1)] = (6));
} else
{var statearr_29435_29464 = state_29430__$1;(statearr_29435_29464[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (15)))
{var inst_29426 = (state_29430[(2)]);var state_29430__$1 = state_29430;var statearr_29436_29465 = state_29430__$1;(statearr_29436_29465[(2)] = inst_29426);
(statearr_29436_29465[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (13)))
{var inst_29419 = cljs.core.async.close_BANG_.call(null,out);var state_29430__$1 = state_29430;var statearr_29437_29466 = state_29430__$1;(statearr_29437_29466[(2)] = inst_29419);
(statearr_29437_29466[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (6)))
{var state_29430__$1 = state_29430;var statearr_29438_29467 = state_29430__$1;(statearr_29438_29467[(2)] = null);
(statearr_29438_29467[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (3)))
{var inst_29428 = (state_29430[(2)]);var state_29430__$1 = state_29430;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29430__$1,inst_29428);
} else
{if((state_val_29431 === (12)))
{var inst_29416 = (state_29430[(8)]);var inst_29416__$1 = (state_29430[(2)]);var inst_29417 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_29416__$1);var state_29430__$1 = (function (){var statearr_29439 = state_29430;(statearr_29439[(8)] = inst_29416__$1);
return statearr_29439;
})();if(cljs.core.truth_(inst_29417))
{var statearr_29440_29468 = state_29430__$1;(statearr_29440_29468[(1)] = (13));
} else
{var statearr_29441_29469 = state_29430__$1;(statearr_29441_29469[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (2)))
{var inst_29393 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_29394 = (0);var state_29430__$1 = (function (){var statearr_29442 = state_29430;(statearr_29442[(9)] = inst_29393);
(statearr_29442[(7)] = inst_29394);
return statearr_29442;
})();var statearr_29443_29470 = state_29430__$1;(statearr_29443_29470[(2)] = null);
(statearr_29443_29470[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (11)))
{var inst_29394 = (state_29430[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_29430,(10),Object,null,(9));var inst_29403 = chs__$1.call(null,inst_29394);var inst_29404 = done.call(null,inst_29394);var inst_29405 = cljs.core.async.take_BANG_.call(null,inst_29403,inst_29404);var state_29430__$1 = state_29430;var statearr_29444_29471 = state_29430__$1;(statearr_29444_29471[(2)] = inst_29405);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29430__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (9)))
{var inst_29394 = (state_29430[(7)]);var inst_29407 = (state_29430[(2)]);var inst_29408 = (inst_29394 + (1));var inst_29394__$1 = inst_29408;var state_29430__$1 = (function (){var statearr_29445 = state_29430;(statearr_29445[(10)] = inst_29407);
(statearr_29445[(7)] = inst_29394__$1);
return statearr_29445;
})();var statearr_29446_29472 = state_29430__$1;(statearr_29446_29472[(2)] = null);
(statearr_29446_29472[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (5)))
{var inst_29414 = (state_29430[(2)]);var state_29430__$1 = (function (){var statearr_29447 = state_29430;(statearr_29447[(11)] = inst_29414);
return statearr_29447;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29430__$1,(12),dchan);
} else
{if((state_val_29431 === (14)))
{var inst_29416 = (state_29430[(8)]);var inst_29421 = cljs.core.apply.call(null,f,inst_29416);var state_29430__$1 = state_29430;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29430__$1,(16),out,inst_29421);
} else
{if((state_val_29431 === (16)))
{var inst_29423 = (state_29430[(2)]);var state_29430__$1 = (function (){var statearr_29448 = state_29430;(statearr_29448[(12)] = inst_29423);
return statearr_29448;
})();var statearr_29449_29473 = state_29430__$1;(statearr_29449_29473[(2)] = null);
(statearr_29449_29473[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (10)))
{var inst_29398 = (state_29430[(2)]);var inst_29399 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_29430__$1 = (function (){var statearr_29450 = state_29430;(statearr_29450[(13)] = inst_29398);
return statearr_29450;
})();var statearr_29451_29474 = state_29430__$1;(statearr_29451_29474[(2)] = inst_29399);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29430__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29431 === (8)))
{var inst_29412 = (state_29430[(2)]);var state_29430__$1 = state_29430;var statearr_29452_29475 = state_29430__$1;(statearr_29452_29475[(2)] = inst_29412);
(statearr_29452_29475[(1)] = (5));
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
});})(c__5693__auto___29460,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__5678__auto__,c__5693__auto___29460,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29456 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29456[(0)] = state_machine__5679__auto__);
(statearr_29456[(1)] = (1));
return statearr_29456;
});
var state_machine__5679__auto____1 = (function (state_29430){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29430);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29457){if((e29457 instanceof Object))
{var ex__5682__auto__ = e29457;var statearr_29458_29476 = state_29430;(statearr_29458_29476[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29430);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29477 = state_29430;
state_29430 = G__29477;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29430){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29430);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29460,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__5695__auto__ = (function (){var statearr_29459 = f__5694__auto__.call(null);(statearr_29459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29460);
return statearr_29459;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29460,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29585 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29585,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29585,out){
return (function (state_29561){var state_val_29562 = (state_29561[(1)]);if((state_val_29562 === (7)))
{var inst_29540 = (state_29561[(7)]);var inst_29541 = (state_29561[(8)]);var inst_29540__$1 = (state_29561[(2)]);var inst_29541__$1 = cljs.core.nth.call(null,inst_29540__$1,(0),null);var inst_29542 = cljs.core.nth.call(null,inst_29540__$1,(1),null);var inst_29543 = (inst_29541__$1 == null);var state_29561__$1 = (function (){var statearr_29563 = state_29561;(statearr_29563[(9)] = inst_29542);
(statearr_29563[(7)] = inst_29540__$1);
(statearr_29563[(8)] = inst_29541__$1);
return statearr_29563;
})();if(cljs.core.truth_(inst_29543))
{var statearr_29564_29586 = state_29561__$1;(statearr_29564_29586[(1)] = (8));
} else
{var statearr_29565_29587 = state_29561__$1;(statearr_29565_29587[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29562 === (1)))
{var inst_29532 = cljs.core.vec.call(null,chs);var inst_29533 = inst_29532;var state_29561__$1 = (function (){var statearr_29566 = state_29561;(statearr_29566[(10)] = inst_29533);
return statearr_29566;
})();var statearr_29567_29588 = state_29561__$1;(statearr_29567_29588[(2)] = null);
(statearr_29567_29588[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29562 === (4)))
{var inst_29533 = (state_29561[(10)]);var state_29561__$1 = state_29561;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_29561__$1,(7),inst_29533);
} else
{if((state_val_29562 === (6)))
{var inst_29557 = (state_29561[(2)]);var state_29561__$1 = state_29561;var statearr_29568_29589 = state_29561__$1;(statearr_29568_29589[(2)] = inst_29557);
(statearr_29568_29589[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29562 === (3)))
{var inst_29559 = (state_29561[(2)]);var state_29561__$1 = state_29561;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29561__$1,inst_29559);
} else
{if((state_val_29562 === (2)))
{var inst_29533 = (state_29561[(10)]);var inst_29535 = cljs.core.count.call(null,inst_29533);var inst_29536 = (inst_29535 > (0));var state_29561__$1 = state_29561;if(cljs.core.truth_(inst_29536))
{var statearr_29570_29590 = state_29561__$1;(statearr_29570_29590[(1)] = (4));
} else
{var statearr_29571_29591 = state_29561__$1;(statearr_29571_29591[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29562 === (11)))
{var inst_29533 = (state_29561[(10)]);var inst_29550 = (state_29561[(2)]);var tmp29569 = inst_29533;var inst_29533__$1 = tmp29569;var state_29561__$1 = (function (){var statearr_29572 = state_29561;(statearr_29572[(11)] = inst_29550);
(statearr_29572[(10)] = inst_29533__$1);
return statearr_29572;
})();var statearr_29573_29592 = state_29561__$1;(statearr_29573_29592[(2)] = null);
(statearr_29573_29592[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29562 === (9)))
{var inst_29541 = (state_29561[(8)]);var state_29561__$1 = state_29561;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29561__$1,(11),out,inst_29541);
} else
{if((state_val_29562 === (5)))
{var inst_29555 = cljs.core.async.close_BANG_.call(null,out);var state_29561__$1 = state_29561;var statearr_29574_29593 = state_29561__$1;(statearr_29574_29593[(2)] = inst_29555);
(statearr_29574_29593[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29562 === (10)))
{var inst_29553 = (state_29561[(2)]);var state_29561__$1 = state_29561;var statearr_29575_29594 = state_29561__$1;(statearr_29575_29594[(2)] = inst_29553);
(statearr_29575_29594[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29562 === (8)))
{var inst_29542 = (state_29561[(9)]);var inst_29533 = (state_29561[(10)]);var inst_29540 = (state_29561[(7)]);var inst_29541 = (state_29561[(8)]);var inst_29545 = (function (){var c = inst_29542;var v = inst_29541;var vec__29538 = inst_29540;var cs = inst_29533;return ((function (c,v,vec__29538,cs,inst_29542,inst_29533,inst_29540,inst_29541,state_val_29562,c__5693__auto___29585,out){
return (function (p1__29478_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__29478_SHARP_);
});
;})(c,v,vec__29538,cs,inst_29542,inst_29533,inst_29540,inst_29541,state_val_29562,c__5693__auto___29585,out))
})();var inst_29546 = cljs.core.filterv.call(null,inst_29545,inst_29533);var inst_29533__$1 = inst_29546;var state_29561__$1 = (function (){var statearr_29576 = state_29561;(statearr_29576[(10)] = inst_29533__$1);
return statearr_29576;
})();var statearr_29577_29595 = state_29561__$1;(statearr_29577_29595[(2)] = null);
(statearr_29577_29595[(1)] = (2));
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
});})(c__5693__auto___29585,out))
;return ((function (switch__5678__auto__,c__5693__auto___29585,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29581 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29581[(0)] = state_machine__5679__auto__);
(statearr_29581[(1)] = (1));
return statearr_29581;
});
var state_machine__5679__auto____1 = (function (state_29561){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29561);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29582){if((e29582 instanceof Object))
{var ex__5682__auto__ = e29582;var statearr_29583_29596 = state_29561;(statearr_29583_29596[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29561);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29582;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29597 = state_29561;
state_29561 = G__29597;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29561){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29561);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29585,out))
})();var state__5695__auto__ = (function (){var statearr_29584 = f__5694__auto__.call(null);(statearr_29584[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29585);
return statearr_29584;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29585,out))
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29690 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29690,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29690,out){
return (function (state_29667){var state_val_29668 = (state_29667[(1)]);if((state_val_29668 === (7)))
{var inst_29649 = (state_29667[(7)]);var inst_29649__$1 = (state_29667[(2)]);var inst_29650 = (inst_29649__$1 == null);var inst_29651 = cljs.core.not.call(null,inst_29650);var state_29667__$1 = (function (){var statearr_29669 = state_29667;(statearr_29669[(7)] = inst_29649__$1);
return statearr_29669;
})();if(inst_29651)
{var statearr_29670_29691 = state_29667__$1;(statearr_29670_29691[(1)] = (8));
} else
{var statearr_29671_29692 = state_29667__$1;(statearr_29671_29692[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29668 === (1)))
{var inst_29644 = (0);var state_29667__$1 = (function (){var statearr_29672 = state_29667;(statearr_29672[(8)] = inst_29644);
return statearr_29672;
})();var statearr_29673_29693 = state_29667__$1;(statearr_29673_29693[(2)] = null);
(statearr_29673_29693[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29668 === (4)))
{var state_29667__$1 = state_29667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29667__$1,(7),ch);
} else
{if((state_val_29668 === (6)))
{var inst_29662 = (state_29667[(2)]);var state_29667__$1 = state_29667;var statearr_29674_29694 = state_29667__$1;(statearr_29674_29694[(2)] = inst_29662);
(statearr_29674_29694[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29668 === (3)))
{var inst_29664 = (state_29667[(2)]);var inst_29665 = cljs.core.async.close_BANG_.call(null,out);var state_29667__$1 = (function (){var statearr_29675 = state_29667;(statearr_29675[(9)] = inst_29664);
return statearr_29675;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29667__$1,inst_29665);
} else
{if((state_val_29668 === (2)))
{var inst_29644 = (state_29667[(8)]);var inst_29646 = (inst_29644 < n);var state_29667__$1 = state_29667;if(cljs.core.truth_(inst_29646))
{var statearr_29676_29695 = state_29667__$1;(statearr_29676_29695[(1)] = (4));
} else
{var statearr_29677_29696 = state_29667__$1;(statearr_29677_29696[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29668 === (11)))
{var inst_29644 = (state_29667[(8)]);var inst_29654 = (state_29667[(2)]);var inst_29655 = (inst_29644 + (1));var inst_29644__$1 = inst_29655;var state_29667__$1 = (function (){var statearr_29678 = state_29667;(statearr_29678[(10)] = inst_29654);
(statearr_29678[(8)] = inst_29644__$1);
return statearr_29678;
})();var statearr_29679_29697 = state_29667__$1;(statearr_29679_29697[(2)] = null);
(statearr_29679_29697[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29668 === (9)))
{var state_29667__$1 = state_29667;var statearr_29680_29698 = state_29667__$1;(statearr_29680_29698[(2)] = null);
(statearr_29680_29698[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29668 === (5)))
{var state_29667__$1 = state_29667;var statearr_29681_29699 = state_29667__$1;(statearr_29681_29699[(2)] = null);
(statearr_29681_29699[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29668 === (10)))
{var inst_29659 = (state_29667[(2)]);var state_29667__$1 = state_29667;var statearr_29682_29700 = state_29667__$1;(statearr_29682_29700[(2)] = inst_29659);
(statearr_29682_29700[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29668 === (8)))
{var inst_29649 = (state_29667[(7)]);var state_29667__$1 = state_29667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29667__$1,(11),out,inst_29649);
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
});})(c__5693__auto___29690,out))
;return ((function (switch__5678__auto__,c__5693__auto___29690,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29686 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29686[(0)] = state_machine__5679__auto__);
(statearr_29686[(1)] = (1));
return statearr_29686;
});
var state_machine__5679__auto____1 = (function (state_29667){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29667);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29687){if((e29687 instanceof Object))
{var ex__5682__auto__ = e29687;var statearr_29688_29701 = state_29667;(statearr_29688_29701[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29667);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29687;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29702 = state_29667;
state_29667 = G__29702;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29667){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29690,out))
})();var state__5695__auto__ = (function (){var statearr_29689 = f__5694__auto__.call(null);(statearr_29689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29690);
return statearr_29689;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29690,out))
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29799 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29799,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29799,out){
return (function (state_29774){var state_val_29775 = (state_29774[(1)]);if((state_val_29775 === (7)))
{var inst_29769 = (state_29774[(2)]);var state_29774__$1 = state_29774;var statearr_29776_29800 = state_29774__$1;(statearr_29776_29800[(2)] = inst_29769);
(statearr_29776_29800[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29775 === (1)))
{var inst_29751 = null;var state_29774__$1 = (function (){var statearr_29777 = state_29774;(statearr_29777[(7)] = inst_29751);
return statearr_29777;
})();var statearr_29778_29801 = state_29774__$1;(statearr_29778_29801[(2)] = null);
(statearr_29778_29801[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29775 === (4)))
{var inst_29754 = (state_29774[(8)]);var inst_29754__$1 = (state_29774[(2)]);var inst_29755 = (inst_29754__$1 == null);var inst_29756 = cljs.core.not.call(null,inst_29755);var state_29774__$1 = (function (){var statearr_29779 = state_29774;(statearr_29779[(8)] = inst_29754__$1);
return statearr_29779;
})();if(inst_29756)
{var statearr_29780_29802 = state_29774__$1;(statearr_29780_29802[(1)] = (5));
} else
{var statearr_29781_29803 = state_29774__$1;(statearr_29781_29803[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29775 === (6)))
{var state_29774__$1 = state_29774;var statearr_29782_29804 = state_29774__$1;(statearr_29782_29804[(2)] = null);
(statearr_29782_29804[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29775 === (3)))
{var inst_29771 = (state_29774[(2)]);var inst_29772 = cljs.core.async.close_BANG_.call(null,out);var state_29774__$1 = (function (){var statearr_29783 = state_29774;(statearr_29783[(9)] = inst_29771);
return statearr_29783;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29774__$1,inst_29772);
} else
{if((state_val_29775 === (2)))
{var state_29774__$1 = state_29774;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29774__$1,(4),ch);
} else
{if((state_val_29775 === (11)))
{var inst_29754 = (state_29774[(8)]);var inst_29763 = (state_29774[(2)]);var inst_29751 = inst_29754;var state_29774__$1 = (function (){var statearr_29784 = state_29774;(statearr_29784[(10)] = inst_29763);
(statearr_29784[(7)] = inst_29751);
return statearr_29784;
})();var statearr_29785_29805 = state_29774__$1;(statearr_29785_29805[(2)] = null);
(statearr_29785_29805[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29775 === (9)))
{var inst_29754 = (state_29774[(8)]);var state_29774__$1 = state_29774;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29774__$1,(11),out,inst_29754);
} else
{if((state_val_29775 === (5)))
{var inst_29751 = (state_29774[(7)]);var inst_29754 = (state_29774[(8)]);var inst_29758 = cljs.core._EQ_.call(null,inst_29754,inst_29751);var state_29774__$1 = state_29774;if(inst_29758)
{var statearr_29787_29806 = state_29774__$1;(statearr_29787_29806[(1)] = (8));
} else
{var statearr_29788_29807 = state_29774__$1;(statearr_29788_29807[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29775 === (10)))
{var inst_29766 = (state_29774[(2)]);var state_29774__$1 = state_29774;var statearr_29789_29808 = state_29774__$1;(statearr_29789_29808[(2)] = inst_29766);
(statearr_29789_29808[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29775 === (8)))
{var inst_29751 = (state_29774[(7)]);var tmp29786 = inst_29751;var inst_29751__$1 = tmp29786;var state_29774__$1 = (function (){var statearr_29790 = state_29774;(statearr_29790[(7)] = inst_29751__$1);
return statearr_29790;
})();var statearr_29791_29809 = state_29774__$1;(statearr_29791_29809[(2)] = null);
(statearr_29791_29809[(1)] = (2));
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
});})(c__5693__auto___29799,out))
;return ((function (switch__5678__auto__,c__5693__auto___29799,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29795 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_29795[(0)] = state_machine__5679__auto__);
(statearr_29795[(1)] = (1));
return statearr_29795;
});
var state_machine__5679__auto____1 = (function (state_29774){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29774);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29796){if((e29796 instanceof Object))
{var ex__5682__auto__ = e29796;var statearr_29797_29810 = state_29774;(statearr_29797_29810[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29774);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29796;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29811 = state_29774;
state_29774 = G__29811;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29774){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29774);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29799,out))
})();var state__5695__auto__ = (function (){var statearr_29798 = f__5694__auto__.call(null);(statearr_29798[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29799);
return statearr_29798;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29799,out))
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___29946 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___29946,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___29946,out){
return (function (state_29916){var state_val_29917 = (state_29916[(1)]);if((state_val_29917 === (7)))
{var inst_29912 = (state_29916[(2)]);var state_29916__$1 = state_29916;var statearr_29918_29947 = state_29916__$1;(statearr_29918_29947[(2)] = inst_29912);
(statearr_29918_29947[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (1)))
{var inst_29879 = (new Array(n));var inst_29880 = inst_29879;var inst_29881 = (0);var state_29916__$1 = (function (){var statearr_29919 = state_29916;(statearr_29919[(7)] = inst_29880);
(statearr_29919[(8)] = inst_29881);
return statearr_29919;
})();var statearr_29920_29948 = state_29916__$1;(statearr_29920_29948[(2)] = null);
(statearr_29920_29948[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (4)))
{var inst_29884 = (state_29916[(9)]);var inst_29884__$1 = (state_29916[(2)]);var inst_29885 = (inst_29884__$1 == null);var inst_29886 = cljs.core.not.call(null,inst_29885);var state_29916__$1 = (function (){var statearr_29921 = state_29916;(statearr_29921[(9)] = inst_29884__$1);
return statearr_29921;
})();if(inst_29886)
{var statearr_29922_29949 = state_29916__$1;(statearr_29922_29949[(1)] = (5));
} else
{var statearr_29923_29950 = state_29916__$1;(statearr_29923_29950[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (15)))
{var inst_29906 = (state_29916[(2)]);var state_29916__$1 = state_29916;var statearr_29924_29951 = state_29916__$1;(statearr_29924_29951[(2)] = inst_29906);
(statearr_29924_29951[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (13)))
{var state_29916__$1 = state_29916;var statearr_29925_29952 = state_29916__$1;(statearr_29925_29952[(2)] = null);
(statearr_29925_29952[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (6)))
{var inst_29881 = (state_29916[(8)]);var inst_29902 = (inst_29881 > (0));var state_29916__$1 = state_29916;if(cljs.core.truth_(inst_29902))
{var statearr_29926_29953 = state_29916__$1;(statearr_29926_29953[(1)] = (12));
} else
{var statearr_29927_29954 = state_29916__$1;(statearr_29927_29954[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (3)))
{var inst_29914 = (state_29916[(2)]);var state_29916__$1 = state_29916;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29916__$1,inst_29914);
} else
{if((state_val_29917 === (12)))
{var inst_29880 = (state_29916[(7)]);var inst_29904 = cljs.core.vec.call(null,inst_29880);var state_29916__$1 = state_29916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29916__$1,(15),out,inst_29904);
} else
{if((state_val_29917 === (2)))
{var state_29916__$1 = state_29916;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29916__$1,(4),ch);
} else
{if((state_val_29917 === (11)))
{var inst_29896 = (state_29916[(2)]);var inst_29897 = (new Array(n));var inst_29880 = inst_29897;var inst_29881 = (0);var state_29916__$1 = (function (){var statearr_29928 = state_29916;(statearr_29928[(10)] = inst_29896);
(statearr_29928[(7)] = inst_29880);
(statearr_29928[(8)] = inst_29881);
return statearr_29928;
})();var statearr_29929_29955 = state_29916__$1;(statearr_29929_29955[(2)] = null);
(statearr_29929_29955[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (9)))
{var inst_29880 = (state_29916[(7)]);var inst_29894 = cljs.core.vec.call(null,inst_29880);var state_29916__$1 = state_29916;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29916__$1,(11),out,inst_29894);
} else
{if((state_val_29917 === (5)))
{var inst_29884 = (state_29916[(9)]);var inst_29880 = (state_29916[(7)]);var inst_29889 = (state_29916[(11)]);var inst_29881 = (state_29916[(8)]);var inst_29888 = (inst_29880[inst_29881] = inst_29884);var inst_29889__$1 = (inst_29881 + (1));var inst_29890 = (inst_29889__$1 < n);var state_29916__$1 = (function (){var statearr_29930 = state_29916;(statearr_29930[(12)] = inst_29888);
(statearr_29930[(11)] = inst_29889__$1);
return statearr_29930;
})();if(cljs.core.truth_(inst_29890))
{var statearr_29931_29956 = state_29916__$1;(statearr_29931_29956[(1)] = (8));
} else
{var statearr_29932_29957 = state_29916__$1;(statearr_29932_29957[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (14)))
{var inst_29909 = (state_29916[(2)]);var inst_29910 = cljs.core.async.close_BANG_.call(null,out);var state_29916__$1 = (function (){var statearr_29934 = state_29916;(statearr_29934[(13)] = inst_29909);
return statearr_29934;
})();var statearr_29935_29958 = state_29916__$1;(statearr_29935_29958[(2)] = inst_29910);
(statearr_29935_29958[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (10)))
{var inst_29900 = (state_29916[(2)]);var state_29916__$1 = state_29916;var statearr_29936_29959 = state_29916__$1;(statearr_29936_29959[(2)] = inst_29900);
(statearr_29936_29959[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_29917 === (8)))
{var inst_29880 = (state_29916[(7)]);var inst_29889 = (state_29916[(11)]);var tmp29933 = inst_29880;var inst_29880__$1 = tmp29933;var inst_29881 = inst_29889;var state_29916__$1 = (function (){var statearr_29937 = state_29916;(statearr_29937[(7)] = inst_29880__$1);
(statearr_29937[(8)] = inst_29881);
return statearr_29937;
})();var statearr_29938_29960 = state_29916__$1;(statearr_29938_29960[(2)] = null);
(statearr_29938_29960[(1)] = (2));
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
});})(c__5693__auto___29946,out))
;return ((function (switch__5678__auto__,c__5693__auto___29946,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_29942 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_29942[(0)] = state_machine__5679__auto__);
(statearr_29942[(1)] = (1));
return statearr_29942;
});
var state_machine__5679__auto____1 = (function (state_29916){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_29916);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e29943){if((e29943 instanceof Object))
{var ex__5682__auto__ = e29943;var statearr_29944_29961 = state_29916;(statearr_29944_29961[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29916);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e29943;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__29962 = state_29916;
state_29916 = G__29962;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_29916){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_29916);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___29946,out))
})();var state__5695__auto__ = (function (){var statearr_29945 = f__5694__auto__.call(null);(statearr_29945[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___29946);
return statearr_29945;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___29946,out))
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5693__auto___30105 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___30105,out){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___30105,out){
return (function (state_30075){var state_val_30076 = (state_30075[(1)]);if((state_val_30076 === (7)))
{var inst_30071 = (state_30075[(2)]);var state_30075__$1 = state_30075;var statearr_30077_30106 = state_30075__$1;(statearr_30077_30106[(2)] = inst_30071);
(statearr_30077_30106[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (1)))
{var inst_30034 = [];var inst_30035 = inst_30034;var inst_30036 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_30075__$1 = (function (){var statearr_30078 = state_30075;(statearr_30078[(7)] = inst_30036);
(statearr_30078[(8)] = inst_30035);
return statearr_30078;
})();var statearr_30079_30107 = state_30075__$1;(statearr_30079_30107[(2)] = null);
(statearr_30079_30107[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (4)))
{var inst_30039 = (state_30075[(9)]);var inst_30039__$1 = (state_30075[(2)]);var inst_30040 = (inst_30039__$1 == null);var inst_30041 = cljs.core.not.call(null,inst_30040);var state_30075__$1 = (function (){var statearr_30080 = state_30075;(statearr_30080[(9)] = inst_30039__$1);
return statearr_30080;
})();if(inst_30041)
{var statearr_30081_30108 = state_30075__$1;(statearr_30081_30108[(1)] = (5));
} else
{var statearr_30082_30109 = state_30075__$1;(statearr_30082_30109[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (15)))
{var inst_30065 = (state_30075[(2)]);var state_30075__$1 = state_30075;var statearr_30083_30110 = state_30075__$1;(statearr_30083_30110[(2)] = inst_30065);
(statearr_30083_30110[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (13)))
{var state_30075__$1 = state_30075;var statearr_30084_30111 = state_30075__$1;(statearr_30084_30111[(2)] = null);
(statearr_30084_30111[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (6)))
{var inst_30035 = (state_30075[(8)]);var inst_30060 = inst_30035.length;var inst_30061 = (inst_30060 > (0));var state_30075__$1 = state_30075;if(cljs.core.truth_(inst_30061))
{var statearr_30085_30112 = state_30075__$1;(statearr_30085_30112[(1)] = (12));
} else
{var statearr_30086_30113 = state_30075__$1;(statearr_30086_30113[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (3)))
{var inst_30073 = (state_30075[(2)]);var state_30075__$1 = state_30075;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30075__$1,inst_30073);
} else
{if((state_val_30076 === (12)))
{var inst_30035 = (state_30075[(8)]);var inst_30063 = cljs.core.vec.call(null,inst_30035);var state_30075__$1 = state_30075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30075__$1,(15),out,inst_30063);
} else
{if((state_val_30076 === (2)))
{var state_30075__$1 = state_30075;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30075__$1,(4),ch);
} else
{if((state_val_30076 === (11)))
{var inst_30039 = (state_30075[(9)]);var inst_30043 = (state_30075[(10)]);var inst_30053 = (state_30075[(2)]);var inst_30054 = [];var inst_30055 = inst_30054.push(inst_30039);var inst_30035 = inst_30054;var inst_30036 = inst_30043;var state_30075__$1 = (function (){var statearr_30087 = state_30075;(statearr_30087[(7)] = inst_30036);
(statearr_30087[(8)] = inst_30035);
(statearr_30087[(11)] = inst_30053);
(statearr_30087[(12)] = inst_30055);
return statearr_30087;
})();var statearr_30088_30114 = state_30075__$1;(statearr_30088_30114[(2)] = null);
(statearr_30088_30114[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (9)))
{var inst_30035 = (state_30075[(8)]);var inst_30051 = cljs.core.vec.call(null,inst_30035);var state_30075__$1 = state_30075;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30075__$1,(11),out,inst_30051);
} else
{if((state_val_30076 === (5)))
{var inst_30036 = (state_30075[(7)]);var inst_30039 = (state_30075[(9)]);var inst_30043 = (state_30075[(10)]);var inst_30043__$1 = f.call(null,inst_30039);var inst_30044 = cljs.core._EQ_.call(null,inst_30043__$1,inst_30036);var inst_30045 = cljs.core.keyword_identical_QMARK_.call(null,inst_30036,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_30046 = (inst_30044) || (inst_30045);var state_30075__$1 = (function (){var statearr_30089 = state_30075;(statearr_30089[(10)] = inst_30043__$1);
return statearr_30089;
})();if(cljs.core.truth_(inst_30046))
{var statearr_30090_30115 = state_30075__$1;(statearr_30090_30115[(1)] = (8));
} else
{var statearr_30091_30116 = state_30075__$1;(statearr_30091_30116[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (14)))
{var inst_30068 = (state_30075[(2)]);var inst_30069 = cljs.core.async.close_BANG_.call(null,out);var state_30075__$1 = (function (){var statearr_30093 = state_30075;(statearr_30093[(13)] = inst_30068);
return statearr_30093;
})();var statearr_30094_30117 = state_30075__$1;(statearr_30094_30117[(2)] = inst_30069);
(statearr_30094_30117[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (10)))
{var inst_30058 = (state_30075[(2)]);var state_30075__$1 = state_30075;var statearr_30095_30118 = state_30075__$1;(statearr_30095_30118[(2)] = inst_30058);
(statearr_30095_30118[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_30076 === (8)))
{var inst_30035 = (state_30075[(8)]);var inst_30039 = (state_30075[(9)]);var inst_30043 = (state_30075[(10)]);var inst_30048 = inst_30035.push(inst_30039);var tmp30092 = inst_30035;var inst_30035__$1 = tmp30092;var inst_30036 = inst_30043;var state_30075__$1 = (function (){var statearr_30096 = state_30075;(statearr_30096[(7)] = inst_30036);
(statearr_30096[(8)] = inst_30035__$1);
(statearr_30096[(14)] = inst_30048);
return statearr_30096;
})();var statearr_30097_30119 = state_30075__$1;(statearr_30097_30119[(2)] = null);
(statearr_30097_30119[(1)] = (2));
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
});})(c__5693__auto___30105,out))
;return ((function (switch__5678__auto__,c__5693__auto___30105,out){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_30101 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_30101[(0)] = state_machine__5679__auto__);
(statearr_30101[(1)] = (1));
return statearr_30101;
});
var state_machine__5679__auto____1 = (function (state_30075){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_30075);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e30102){if((e30102 instanceof Object))
{var ex__5682__auto__ = e30102;var statearr_30103_30120 = state_30075;(statearr_30103_30120[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30075);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e30102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__30121 = state_30075;
state_30075 = G__30121;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_30075){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_30075);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___30105,out))
})();var state__5695__auto__ = (function (){var statearr_30104 = f__5694__auto__.call(null);(statearr_30104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___30105);
return statearr_30104;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___30105,out))
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
