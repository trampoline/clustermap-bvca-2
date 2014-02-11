// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33488 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33488 = (function (f,fn_handler,meta33489){
this.f = f;
this.fn_handler = fn_handler;
this.meta33489 = meta33489;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33488.cljs$lang$type = true;
cljs.core.async.t33488.cljs$lang$ctorStr = "cljs.core.async/t33488";
cljs.core.async.t33488.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33488");
});
cljs.core.async.t33488.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33488.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33488.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33490){var self__ = this;
var _33490__$1 = this;return self__.meta33489;
});
cljs.core.async.t33488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33490,meta33489__$1){var self__ = this;
var _33490__$1 = this;return (new cljs.core.async.t33488(self__.f,self__.fn_handler,meta33489__$1));
});
cljs.core.async.__GT_t33488 = (function __GT_t33488(f__$1,fn_handler__$1,meta33489){return (new cljs.core.async.t33488(f__$1,fn_handler__$1,meta33489));
});
}
return (new cljs.core.async.t33488(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33492 = buff;if(G__33492)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33492.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33492.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33492);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33492);
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
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
{var val_33493 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33493);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33493);
}));
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
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33494 = n;var x_33495 = 0;while(true){
if((x_33495 < n__4248__auto___33494))
{(a[x_33495] = 0);
{
var G__33496 = (x_33495 + 1);
x_33495 = G__33496;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__33497 = (i + 1);
i = G__33497;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33501 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33501 = (function (flag,alt_flag,meta33502){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33502 = meta33502;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33501.cljs$lang$type = true;
cljs.core.async.t33501.cljs$lang$ctorStr = "cljs.core.async/t33501";
cljs.core.async.t33501.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33501");
});
cljs.core.async.t33501.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33501.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33501.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33501.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33503){var self__ = this;
var _33503__$1 = this;return self__.meta33502;
});
cljs.core.async.t33501.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33503,meta33502__$1){var self__ = this;
var _33503__$1 = this;return (new cljs.core.async.t33501(self__.flag,self__.alt_flag,meta33502__$1));
});
cljs.core.async.__GT_t33501 = (function __GT_t33501(flag__$1,alt_flag__$1,meta33502){return (new cljs.core.async.t33501(flag__$1,alt_flag__$1,meta33502));
});
}
return (new cljs.core.async.t33501(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33507 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33507 = (function (cb,flag,alt_handler,meta33508){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33508 = meta33508;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33507.cljs$lang$type = true;
cljs.core.async.t33507.cljs$lang$ctorStr = "cljs.core.async/t33507";
cljs.core.async.t33507.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33507");
});
cljs.core.async.t33507.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33507.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33507.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33507.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33509){var self__ = this;
var _33509__$1 = this;return self__.meta33508;
});
cljs.core.async.t33507.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33509,meta33508__$1){var self__ = this;
var _33509__$1 = this;return (new cljs.core.async.t33507(self__.cb,self__.flag,self__.alt_handler,meta33508__$1));
});
cljs.core.async.__GT_t33507 = (function __GT_t33507(cb__$1,flag__$1,alt_handler__$1,meta33508){return (new cljs.core.async.t33507(cb__$1,flag__$1,alt_handler__$1,meta33508));
});
}
return (new cljs.core.async.t33507(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33510_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33510_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__33511 = (i + 1);
i = G__33511;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
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
var alts_BANG___delegate = function (ports,p__33512){var map__33514 = p__33512;var map__33514__$1 = ((cljs.core.seq_QMARK_.call(null,map__33514))?cljs.core.apply.call(null,cljs.core.hash_map,map__33514):map__33514);var opts = map__33514__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33512 = null;if (arguments.length > 1) {
  p__33512 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33512);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33515){
var ports = cljs.core.first(arglist__33515);
var p__33512 = cljs.core.rest(arglist__33515);
return alts_BANG___delegate(ports,p__33512);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33523 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33523 = (function (ch,f,map_LT_,meta33524){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33524 = meta33524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33523.cljs$lang$type = true;
cljs.core.async.t33523.cljs$lang$ctorStr = "cljs.core.async/t33523";
cljs.core.async.t33523.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33523");
});
cljs.core.async.t33523.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33523.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33526 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33526 = (function (fn1,_,meta33524,ch,f,map_LT_,meta33527){
this.fn1 = fn1;
this._ = _;
this.meta33524 = meta33524;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33527 = meta33527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33526.cljs$lang$type = true;
cljs.core.async.t33526.cljs$lang$ctorStr = "cljs.core.async/t33526";
cljs.core.async.t33526.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33526");
});
cljs.core.async.t33526.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33526.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33526.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33526.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33516_SHARP_){return f1.call(null,(((p1__33516_SHARP_ == null))?null:self__.f.call(null,p1__33516_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33528){var self__ = this;
var _33528__$1 = this;return self__.meta33527;
});
cljs.core.async.t33526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33528,meta33527__$1){var self__ = this;
var _33528__$1 = this;return (new cljs.core.async.t33526(self__.fn1,self__._,self__.meta33524,self__.ch,self__.f,self__.map_LT_,meta33527__$1));
});
cljs.core.async.__GT_t33526 = (function __GT_t33526(fn1__$1,___$2,meta33524__$1,ch__$2,f__$2,map_LT___$2,meta33527){return (new cljs.core.async.t33526(fn1__$1,___$2,meta33524__$1,ch__$2,f__$2,map_LT___$2,meta33527));
});
}
return (new cljs.core.async.t33526(fn1,___$1,self__.meta33524,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t33523.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33525){var self__ = this;
var _33525__$1 = this;return self__.meta33524;
});
cljs.core.async.t33523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33525,meta33524__$1){var self__ = this;
var _33525__$1 = this;return (new cljs.core.async.t33523(self__.ch,self__.f,self__.map_LT_,meta33524__$1));
});
cljs.core.async.__GT_t33523 = (function __GT_t33523(ch__$1,f__$1,map_LT___$1,meta33524){return (new cljs.core.async.t33523(ch__$1,f__$1,map_LT___$1,meta33524));
});
}
return (new cljs.core.async.t33523(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33532 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33532 = (function (ch,f,map_GT_,meta33533){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33533 = meta33533;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33532.cljs$lang$type = true;
cljs.core.async.t33532.cljs$lang$ctorStr = "cljs.core.async/t33532";
cljs.core.async.t33532.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33532");
});
cljs.core.async.t33532.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33532.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33532.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33532.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33532.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33532.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33534){var self__ = this;
var _33534__$1 = this;return self__.meta33533;
});
cljs.core.async.t33532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33534,meta33533__$1){var self__ = this;
var _33534__$1 = this;return (new cljs.core.async.t33532(self__.ch,self__.f,self__.map_GT_,meta33533__$1));
});
cljs.core.async.__GT_t33532 = (function __GT_t33532(ch__$1,f__$1,map_GT___$1,meta33533){return (new cljs.core.async.t33532(ch__$1,f__$1,map_GT___$1,meta33533));
});
}
return (new cljs.core.async.t33532(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33538 = (function (ch,p,filter_GT_,meta33539){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33539 = meta33539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33538.cljs$lang$type = true;
cljs.core.async.t33538.cljs$lang$ctorStr = "cljs.core.async/t33538";
cljs.core.async.t33538.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33538");
});
cljs.core.async.t33538.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33538.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33538.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33538.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33538.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33538.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33540){var self__ = this;
var _33540__$1 = this;return self__.meta33539;
});
cljs.core.async.t33538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33540,meta33539__$1){var self__ = this;
var _33540__$1 = this;return (new cljs.core.async.t33538(self__.ch,self__.p,self__.filter_GT_,meta33539__$1));
});
cljs.core.async.__GT_t33538 = (function __GT_t33538(ch__$1,p__$1,filter_GT___$1,meta33539){return (new cljs.core.async.t33538(ch__$1,p__$1,filter_GT___$1,meta33539));
});
}
return (new cljs.core.async.t33538(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33623 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33602){var state_val_33603 = (state_33602[1]);if((state_val_33603 === 1))
{var state_33602__$1 = state_33602;var statearr_33604_33624 = state_33602__$1;(statearr_33604_33624[2] = null);
(statearr_33604_33624[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 2))
{var state_33602__$1 = state_33602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33602__$1,4,ch);
} else
{if((state_val_33603 === 3))
{var inst_33600 = (state_33602[2]);var state_33602__$1 = state_33602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33602__$1,inst_33600);
} else
{if((state_val_33603 === 4))
{var inst_33584 = (state_33602[7]);var inst_33584__$1 = (state_33602[2]);var inst_33585 = (inst_33584__$1 == null);var state_33602__$1 = (function (){var statearr_33605 = state_33602;(statearr_33605[7] = inst_33584__$1);
return statearr_33605;
})();if(cljs.core.truth_(inst_33585))
{var statearr_33606_33625 = state_33602__$1;(statearr_33606_33625[1] = 5);
} else
{var statearr_33607_33626 = state_33602__$1;(statearr_33607_33626[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 5))
{var inst_33587 = cljs.core.async.close_BANG_.call(null,out);var state_33602__$1 = state_33602;var statearr_33608_33627 = state_33602__$1;(statearr_33608_33627[2] = inst_33587);
(statearr_33608_33627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 6))
{var inst_33584 = (state_33602[7]);var inst_33589 = p.call(null,inst_33584);var state_33602__$1 = state_33602;if(cljs.core.truth_(inst_33589))
{var statearr_33609_33628 = state_33602__$1;(statearr_33609_33628[1] = 8);
} else
{var statearr_33610_33629 = state_33602__$1;(statearr_33610_33629[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 7))
{var inst_33598 = (state_33602[2]);var state_33602__$1 = state_33602;var statearr_33611_33630 = state_33602__$1;(statearr_33611_33630[2] = inst_33598);
(statearr_33611_33630[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 8))
{var inst_33584 = (state_33602[7]);var state_33602__$1 = state_33602;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33602__$1,11,out,inst_33584);
} else
{if((state_val_33603 === 9))
{var state_33602__$1 = state_33602;var statearr_33612_33631 = state_33602__$1;(statearr_33612_33631[2] = null);
(statearr_33612_33631[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 10))
{var inst_33595 = (state_33602[2]);var state_33602__$1 = (function (){var statearr_33613 = state_33602;(statearr_33613[8] = inst_33595);
return statearr_33613;
})();var statearr_33614_33632 = state_33602__$1;(statearr_33614_33632[2] = null);
(statearr_33614_33632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33603 === 11))
{var inst_33592 = (state_33602[2]);var state_33602__$1 = state_33602;var statearr_33615_33633 = state_33602__$1;(statearr_33615_33633[2] = inst_33592);
(statearr_33615_33633[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33619 = [null,null,null,null,null,null,null,null,null];(statearr_33619[0] = state_machine__5507__auto__);
(statearr_33619[1] = 1);
return statearr_33619;
});
var state_machine__5507__auto____1 = (function (state_33602){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33602);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33620){if((e33620 instanceof Object))
{var ex__5510__auto__ = e33620;var statearr_33621_33634 = state_33602;(statearr_33621_33634[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33602);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33620;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33635 = state_33602;
state_33602 = G__33635;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33602){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33622 = f__5522__auto__.call(null);(statearr_33622[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33623);
return statearr_33622;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33787){var state_val_33788 = (state_33787[1]);if((state_val_33788 === 1))
{var state_33787__$1 = state_33787;var statearr_33789_33826 = state_33787__$1;(statearr_33789_33826[2] = null);
(statearr_33789_33826[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 2))
{var state_33787__$1 = state_33787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33787__$1,4,in$);
} else
{if((state_val_33788 === 3))
{var inst_33785 = (state_33787[2]);var state_33787__$1 = state_33787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33787__$1,inst_33785);
} else
{if((state_val_33788 === 4))
{var inst_33733 = (state_33787[7]);var inst_33733__$1 = (state_33787[2]);var inst_33734 = (inst_33733__$1 == null);var state_33787__$1 = (function (){var statearr_33790 = state_33787;(statearr_33790[7] = inst_33733__$1);
return statearr_33790;
})();if(cljs.core.truth_(inst_33734))
{var statearr_33791_33827 = state_33787__$1;(statearr_33791_33827[1] = 5);
} else
{var statearr_33792_33828 = state_33787__$1;(statearr_33792_33828[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 5))
{var inst_33736 = cljs.core.async.close_BANG_.call(null,out);var state_33787__$1 = state_33787;var statearr_33793_33829 = state_33787__$1;(statearr_33793_33829[2] = inst_33736);
(statearr_33793_33829[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 6))
{var inst_33733 = (state_33787[7]);var inst_33738 = f.call(null,inst_33733);var inst_33743 = cljs.core.seq.call(null,inst_33738);var inst_33744 = inst_33743;var inst_33745 = null;var inst_33746 = 0;var inst_33747 = 0;var state_33787__$1 = (function (){var statearr_33794 = state_33787;(statearr_33794[8] = inst_33744);
(statearr_33794[9] = inst_33745);
(statearr_33794[10] = inst_33747);
(statearr_33794[11] = inst_33746);
return statearr_33794;
})();var statearr_33795_33830 = state_33787__$1;(statearr_33795_33830[2] = null);
(statearr_33795_33830[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 7))
{var inst_33783 = (state_33787[2]);var state_33787__$1 = state_33787;var statearr_33796_33831 = state_33787__$1;(statearr_33796_33831[2] = inst_33783);
(statearr_33796_33831[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 8))
{var inst_33747 = (state_33787[10]);var inst_33746 = (state_33787[11]);var inst_33749 = (inst_33747 < inst_33746);var inst_33750 = inst_33749;var state_33787__$1 = state_33787;if(cljs.core.truth_(inst_33750))
{var statearr_33797_33832 = state_33787__$1;(statearr_33797_33832[1] = 10);
} else
{var statearr_33798_33833 = state_33787__$1;(statearr_33798_33833[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 9))
{var inst_33780 = (state_33787[2]);var state_33787__$1 = (function (){var statearr_33799 = state_33787;(statearr_33799[12] = inst_33780);
return statearr_33799;
})();var statearr_33800_33834 = state_33787__$1;(statearr_33800_33834[2] = null);
(statearr_33800_33834[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 10))
{var inst_33745 = (state_33787[9]);var inst_33747 = (state_33787[10]);var inst_33752 = cljs.core._nth.call(null,inst_33745,inst_33747);var state_33787__$1 = state_33787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33787__$1,13,out,inst_33752);
} else
{if((state_val_33788 === 11))
{var inst_33744 = (state_33787[8]);var inst_33758 = (state_33787[13]);var inst_33758__$1 = cljs.core.seq.call(null,inst_33744);var state_33787__$1 = (function (){var statearr_33804 = state_33787;(statearr_33804[13] = inst_33758__$1);
return statearr_33804;
})();if(inst_33758__$1)
{var statearr_33805_33835 = state_33787__$1;(statearr_33805_33835[1] = 14);
} else
{var statearr_33806_33836 = state_33787__$1;(statearr_33806_33836[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 12))
{var inst_33778 = (state_33787[2]);var state_33787__$1 = state_33787;var statearr_33807_33837 = state_33787__$1;(statearr_33807_33837[2] = inst_33778);
(statearr_33807_33837[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 13))
{var inst_33744 = (state_33787[8]);var inst_33745 = (state_33787[9]);var inst_33747 = (state_33787[10]);var inst_33746 = (state_33787[11]);var inst_33754 = (state_33787[2]);var inst_33755 = (inst_33747 + 1);var tmp33801 = inst_33744;var tmp33802 = inst_33745;var tmp33803 = inst_33746;var inst_33744__$1 = tmp33801;var inst_33745__$1 = tmp33802;var inst_33746__$1 = tmp33803;var inst_33747__$1 = inst_33755;var state_33787__$1 = (function (){var statearr_33808 = state_33787;(statearr_33808[14] = inst_33754);
(statearr_33808[8] = inst_33744__$1);
(statearr_33808[9] = inst_33745__$1);
(statearr_33808[10] = inst_33747__$1);
(statearr_33808[11] = inst_33746__$1);
return statearr_33808;
})();var statearr_33809_33838 = state_33787__$1;(statearr_33809_33838[2] = null);
(statearr_33809_33838[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 14))
{var inst_33758 = (state_33787[13]);var inst_33760 = cljs.core.chunked_seq_QMARK_.call(null,inst_33758);var state_33787__$1 = state_33787;if(inst_33760)
{var statearr_33810_33839 = state_33787__$1;(statearr_33810_33839[1] = 17);
} else
{var statearr_33811_33840 = state_33787__$1;(statearr_33811_33840[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 15))
{var state_33787__$1 = state_33787;var statearr_33812_33841 = state_33787__$1;(statearr_33812_33841[2] = null);
(statearr_33812_33841[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 16))
{var inst_33776 = (state_33787[2]);var state_33787__$1 = state_33787;var statearr_33813_33842 = state_33787__$1;(statearr_33813_33842[2] = inst_33776);
(statearr_33813_33842[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 17))
{var inst_33758 = (state_33787[13]);var inst_33762 = cljs.core.chunk_first.call(null,inst_33758);var inst_33763 = cljs.core.chunk_rest.call(null,inst_33758);var inst_33764 = cljs.core.count.call(null,inst_33762);var inst_33744 = inst_33763;var inst_33745 = inst_33762;var inst_33746 = inst_33764;var inst_33747 = 0;var state_33787__$1 = (function (){var statearr_33814 = state_33787;(statearr_33814[8] = inst_33744);
(statearr_33814[9] = inst_33745);
(statearr_33814[10] = inst_33747);
(statearr_33814[11] = inst_33746);
return statearr_33814;
})();var statearr_33815_33843 = state_33787__$1;(statearr_33815_33843[2] = null);
(statearr_33815_33843[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 18))
{var inst_33758 = (state_33787[13]);var inst_33767 = cljs.core.first.call(null,inst_33758);var state_33787__$1 = state_33787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33787__$1,20,out,inst_33767);
} else
{if((state_val_33788 === 19))
{var inst_33773 = (state_33787[2]);var state_33787__$1 = state_33787;var statearr_33816_33844 = state_33787__$1;(statearr_33816_33844[2] = inst_33773);
(statearr_33816_33844[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33788 === 20))
{var inst_33758 = (state_33787[13]);var inst_33769 = (state_33787[2]);var inst_33770 = cljs.core.next.call(null,inst_33758);var inst_33744 = inst_33770;var inst_33745 = null;var inst_33746 = 0;var inst_33747 = 0;var state_33787__$1 = (function (){var statearr_33817 = state_33787;(statearr_33817[15] = inst_33769);
(statearr_33817[8] = inst_33744);
(statearr_33817[9] = inst_33745);
(statearr_33817[10] = inst_33747);
(statearr_33817[11] = inst_33746);
return statearr_33817;
})();var statearr_33818_33845 = state_33787__$1;(statearr_33818_33845[2] = null);
(statearr_33818_33845[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33822 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33822[0] = state_machine__5507__auto__);
(statearr_33822[1] = 1);
return statearr_33822;
});
var state_machine__5507__auto____1 = (function (state_33787){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33787);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33823){if((e33823 instanceof Object))
{var ex__5510__auto__ = e33823;var statearr_33824_33846 = state_33787;(statearr_33824_33846[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33823;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33847 = state_33787;
state_33787 = G__33847;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33787){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33825 = f__5522__auto__.call(null);(statearr_33825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33825;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33907){var state_val_33908 = (state_33907[1]);if((state_val_33908 === 1))
{var state_33907__$1 = state_33907;var statearr_33909_33929 = state_33907__$1;(statearr_33909_33929[2] = null);
(statearr_33909_33929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33908 === 2))
{var state_33907__$1 = state_33907;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33907__$1,4,from);
} else
{if((state_val_33908 === 3))
{var inst_33905 = (state_33907[2]);var state_33907__$1 = state_33907;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33907__$1,inst_33905);
} else
{if((state_val_33908 === 4))
{var inst_33890 = (state_33907[7]);var inst_33890__$1 = (state_33907[2]);var inst_33891 = (inst_33890__$1 == null);var state_33907__$1 = (function (){var statearr_33910 = state_33907;(statearr_33910[7] = inst_33890__$1);
return statearr_33910;
})();if(cljs.core.truth_(inst_33891))
{var statearr_33911_33930 = state_33907__$1;(statearr_33911_33930[1] = 5);
} else
{var statearr_33912_33931 = state_33907__$1;(statearr_33912_33931[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33908 === 5))
{var state_33907__$1 = state_33907;if(cljs.core.truth_(close_QMARK_))
{var statearr_33913_33932 = state_33907__$1;(statearr_33913_33932[1] = 8);
} else
{var statearr_33914_33933 = state_33907__$1;(statearr_33914_33933[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33908 === 6))
{var inst_33890 = (state_33907[7]);var state_33907__$1 = state_33907;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33907__$1,11,to,inst_33890);
} else
{if((state_val_33908 === 7))
{var inst_33903 = (state_33907[2]);var state_33907__$1 = state_33907;var statearr_33915_33934 = state_33907__$1;(statearr_33915_33934[2] = inst_33903);
(statearr_33915_33934[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33908 === 8))
{var inst_33894 = cljs.core.async.close_BANG_.call(null,to);var state_33907__$1 = state_33907;var statearr_33916_33935 = state_33907__$1;(statearr_33916_33935[2] = inst_33894);
(statearr_33916_33935[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33908 === 9))
{var state_33907__$1 = state_33907;var statearr_33917_33936 = state_33907__$1;(statearr_33917_33936[2] = null);
(statearr_33917_33936[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33908 === 10))
{var inst_33897 = (state_33907[2]);var state_33907__$1 = state_33907;var statearr_33918_33937 = state_33907__$1;(statearr_33918_33937[2] = inst_33897);
(statearr_33918_33937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33908 === 11))
{var inst_33900 = (state_33907[2]);var state_33907__$1 = (function (){var statearr_33919 = state_33907;(statearr_33919[8] = inst_33900);
return statearr_33919;
})();var statearr_33920_33938 = state_33907__$1;(statearr_33920_33938[2] = null);
(statearr_33920_33938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33924 = [null,null,null,null,null,null,null,null,null];(statearr_33924[0] = state_machine__5507__auto__);
(statearr_33924[1] = 1);
return statearr_33924;
});
var state_machine__5507__auto____1 = (function (state_33907){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33907);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33925){if((e33925 instanceof Object))
{var ex__5510__auto__ = e33925;var statearr_33926_33939 = state_33907;(statearr_33926_33939[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33907);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33940 = state_33907;
state_33907 = G__33940;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33907){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33907);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33927 = f__5522__auto__.call(null);(statearr_33927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33928);
return statearr_33927;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___34027 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34005){var state_val_34006 = (state_34005[1]);if((state_val_34006 === 1))
{var state_34005__$1 = state_34005;var statearr_34007_34028 = state_34005__$1;(statearr_34007_34028[2] = null);
(statearr_34007_34028[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34006 === 2))
{var state_34005__$1 = state_34005;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34005__$1,4,ch);
} else
{if((state_val_34006 === 3))
{var inst_34003 = (state_34005[2]);var state_34005__$1 = state_34005;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34005__$1,inst_34003);
} else
{if((state_val_34006 === 4))
{var inst_33986 = (state_34005[7]);var inst_33986__$1 = (state_34005[2]);var inst_33987 = (inst_33986__$1 == null);var state_34005__$1 = (function (){var statearr_34008 = state_34005;(statearr_34008[7] = inst_33986__$1);
return statearr_34008;
})();if(cljs.core.truth_(inst_33987))
{var statearr_34009_34029 = state_34005__$1;(statearr_34009_34029[1] = 5);
} else
{var statearr_34010_34030 = state_34005__$1;(statearr_34010_34030[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34006 === 5))
{var inst_33989 = cljs.core.async.close_BANG_.call(null,tc);var inst_33990 = cljs.core.async.close_BANG_.call(null,fc);var state_34005__$1 = (function (){var statearr_34011 = state_34005;(statearr_34011[8] = inst_33989);
return statearr_34011;
})();var statearr_34012_34031 = state_34005__$1;(statearr_34012_34031[2] = inst_33990);
(statearr_34012_34031[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34006 === 6))
{var inst_33986 = (state_34005[7]);var inst_33992 = p.call(null,inst_33986);var state_34005__$1 = state_34005;if(cljs.core.truth_(inst_33992))
{var statearr_34013_34032 = state_34005__$1;(statearr_34013_34032[1] = 9);
} else
{var statearr_34014_34033 = state_34005__$1;(statearr_34014_34033[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34006 === 7))
{var inst_34001 = (state_34005[2]);var state_34005__$1 = state_34005;var statearr_34015_34034 = state_34005__$1;(statearr_34015_34034[2] = inst_34001);
(statearr_34015_34034[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34006 === 8))
{var inst_33998 = (state_34005[2]);var state_34005__$1 = (function (){var statearr_34016 = state_34005;(statearr_34016[9] = inst_33998);
return statearr_34016;
})();var statearr_34017_34035 = state_34005__$1;(statearr_34017_34035[2] = null);
(statearr_34017_34035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34006 === 9))
{var state_34005__$1 = state_34005;var statearr_34018_34036 = state_34005__$1;(statearr_34018_34036[2] = tc);
(statearr_34018_34036[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34006 === 10))
{var state_34005__$1 = state_34005;var statearr_34019_34037 = state_34005__$1;(statearr_34019_34037[2] = fc);
(statearr_34019_34037[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34006 === 11))
{var inst_33986 = (state_34005[7]);var inst_33996 = (state_34005[2]);var state_34005__$1 = state_34005;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34005__$1,8,inst_33996,inst_33986);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34023 = [null,null,null,null,null,null,null,null,null,null];(statearr_34023[0] = state_machine__5507__auto__);
(statearr_34023[1] = 1);
return statearr_34023;
});
var state_machine__5507__auto____1 = (function (state_34005){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34005);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34024){if((e34024 instanceof Object))
{var ex__5510__auto__ = e34024;var statearr_34025_34038 = state_34005;(statearr_34025_34038[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34005);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34024;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34039 = state_34005;
state_34005 = G__34039;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34005){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34005);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34026 = f__5522__auto__.call(null);(statearr_34026[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34027);
return statearr_34026;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34086){var state_val_34087 = (state_34086[1]);if((state_val_34087 === 7))
{var inst_34082 = (state_34086[2]);var state_34086__$1 = state_34086;var statearr_34088_34104 = state_34086__$1;(statearr_34088_34104[2] = inst_34082);
(statearr_34088_34104[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 6))
{var inst_34075 = (state_34086[7]);var inst_34072 = (state_34086[8]);var inst_34079 = f.call(null,inst_34072,inst_34075);var inst_34072__$1 = inst_34079;var state_34086__$1 = (function (){var statearr_34089 = state_34086;(statearr_34089[8] = inst_34072__$1);
return statearr_34089;
})();var statearr_34090_34105 = state_34086__$1;(statearr_34090_34105[2] = null);
(statearr_34090_34105[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 5))
{var inst_34072 = (state_34086[8]);var state_34086__$1 = state_34086;var statearr_34091_34106 = state_34086__$1;(statearr_34091_34106[2] = inst_34072);
(statearr_34091_34106[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 4))
{var inst_34075 = (state_34086[7]);var inst_34075__$1 = (state_34086[2]);var inst_34076 = (inst_34075__$1 == null);var state_34086__$1 = (function (){var statearr_34092 = state_34086;(statearr_34092[7] = inst_34075__$1);
return statearr_34092;
})();if(cljs.core.truth_(inst_34076))
{var statearr_34093_34107 = state_34086__$1;(statearr_34093_34107[1] = 5);
} else
{var statearr_34094_34108 = state_34086__$1;(statearr_34094_34108[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34087 === 3))
{var inst_34084 = (state_34086[2]);var state_34086__$1 = state_34086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34086__$1,inst_34084);
} else
{if((state_val_34087 === 2))
{var state_34086__$1 = state_34086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34086__$1,4,ch);
} else
{if((state_val_34087 === 1))
{var inst_34072 = init;var state_34086__$1 = (function (){var statearr_34095 = state_34086;(statearr_34095[8] = inst_34072);
return statearr_34095;
})();var statearr_34096_34109 = state_34086__$1;(statearr_34096_34109[2] = null);
(statearr_34096_34109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34100 = [null,null,null,null,null,null,null,null,null];(statearr_34100[0] = state_machine__5507__auto__);
(statearr_34100[1] = 1);
return statearr_34100;
});
var state_machine__5507__auto____1 = (function (state_34086){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34086);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34101){if((e34101 instanceof Object))
{var ex__5510__auto__ = e34101;var statearr_34102_34110 = state_34086;(statearr_34102_34110[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34086);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34101;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34111 = state_34086;
state_34086 = G__34111;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34086){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34103 = f__5522__auto__.call(null);(statearr_34103[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34103;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34173){var state_val_34174 = (state_34173[1]);if((state_val_34174 === 1))
{var inst_34153 = cljs.core.seq.call(null,coll);var inst_34154 = inst_34153;var state_34173__$1 = (function (){var statearr_34175 = state_34173;(statearr_34175[7] = inst_34154);
return statearr_34175;
})();var statearr_34176_34194 = state_34173__$1;(statearr_34176_34194[2] = null);
(statearr_34176_34194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34174 === 2))
{var inst_34154 = (state_34173[7]);var state_34173__$1 = state_34173;if(cljs.core.truth_(inst_34154))
{var statearr_34177_34195 = state_34173__$1;(statearr_34177_34195[1] = 4);
} else
{var statearr_34178_34196 = state_34173__$1;(statearr_34178_34196[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34174 === 3))
{var inst_34171 = (state_34173[2]);var state_34173__$1 = state_34173;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34173__$1,inst_34171);
} else
{if((state_val_34174 === 4))
{var inst_34154 = (state_34173[7]);var inst_34157 = cljs.core.first.call(null,inst_34154);var state_34173__$1 = state_34173;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34173__$1,7,ch,inst_34157);
} else
{if((state_val_34174 === 5))
{var state_34173__$1 = state_34173;if(cljs.core.truth_(close_QMARK_))
{var statearr_34179_34197 = state_34173__$1;(statearr_34179_34197[1] = 8);
} else
{var statearr_34180_34198 = state_34173__$1;(statearr_34180_34198[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34174 === 6))
{var inst_34169 = (state_34173[2]);var state_34173__$1 = state_34173;var statearr_34181_34199 = state_34173__$1;(statearr_34181_34199[2] = inst_34169);
(statearr_34181_34199[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34174 === 7))
{var inst_34154 = (state_34173[7]);var inst_34159 = (state_34173[2]);var inst_34160 = cljs.core.next.call(null,inst_34154);var inst_34154__$1 = inst_34160;var state_34173__$1 = (function (){var statearr_34182 = state_34173;(statearr_34182[8] = inst_34159);
(statearr_34182[7] = inst_34154__$1);
return statearr_34182;
})();var statearr_34183_34200 = state_34173__$1;(statearr_34183_34200[2] = null);
(statearr_34183_34200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34174 === 8))
{var inst_34164 = cljs.core.async.close_BANG_.call(null,ch);var state_34173__$1 = state_34173;var statearr_34184_34201 = state_34173__$1;(statearr_34184_34201[2] = inst_34164);
(statearr_34184_34201[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34174 === 9))
{var state_34173__$1 = state_34173;var statearr_34185_34202 = state_34173__$1;(statearr_34185_34202[2] = null);
(statearr_34185_34202[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34174 === 10))
{var inst_34167 = (state_34173[2]);var state_34173__$1 = state_34173;var statearr_34186_34203 = state_34173__$1;(statearr_34186_34203[2] = inst_34167);
(statearr_34186_34203[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34190 = [null,null,null,null,null,null,null,null,null];(statearr_34190[0] = state_machine__5507__auto__);
(statearr_34190[1] = 1);
return statearr_34190;
});
var state_machine__5507__auto____1 = (function (state_34173){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34173);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34191){if((e34191 instanceof Object))
{var ex__5510__auto__ = e34191;var statearr_34192_34204 = state_34173;(statearr_34192_34204[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34173);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34191;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34205 = state_34173;
state_34173 = G__34205;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34173){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34193 = f__5522__auto__.call(null);(statearr_34193[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34193;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
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
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj34207 = {};return obj34207;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj34209 = {};return obj34209;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34433 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34433 = (function (cs,ch,mult,meta34434){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34434 = meta34434;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34433.cljs$lang$type = true;
cljs.core.async.t34433.cljs$lang$ctorStr = "cljs.core.async/t34433";
cljs.core.async.t34433.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34433");
});})(cs))
;
cljs.core.async.t34433.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34433.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34433.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34433.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34433.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34433.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34433.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34435){var self__ = this;
var _34435__$1 = this;return self__.meta34434;
});})(cs))
;
cljs.core.async.t34433.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34435,meta34434__$1){var self__ = this;
var _34435__$1 = this;return (new cljs.core.async.t34433(self__.cs,self__.ch,self__.mult,meta34434__$1));
});})(cs))
;
cljs.core.async.__GT_t34433 = ((function (cs){
return (function __GT_t34433(cs__$1,ch__$1,mult__$1,meta34434){return (new cljs.core.async.t34433(cs__$1,ch__$1,mult__$1,meta34434));
});})(cs))
;
}
return (new cljs.core.async.t34433(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34656 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34570){var state_val_34571 = (state_34570[1]);if((state_val_34571 === 32))
{var inst_34514 = (state_34570[7]);var inst_34438 = (state_34570[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34570,31,Object,null,30);var inst_34521 = cljs.core.async.put_BANG_.call(null,inst_34514,inst_34438,done);var state_34570__$1 = state_34570;var statearr_34572_34657 = state_34570__$1;(statearr_34572_34657[2] = inst_34521);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34570__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 1))
{var state_34570__$1 = state_34570;var statearr_34573_34658 = state_34570__$1;(statearr_34573_34658[2] = null);
(statearr_34573_34658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 33))
{var inst_34527 = (state_34570[9]);var inst_34529 = cljs.core.chunked_seq_QMARK_.call(null,inst_34527);var state_34570__$1 = state_34570;if(inst_34529)
{var statearr_34574_34659 = state_34570__$1;(statearr_34574_34659[1] = 36);
} else
{var statearr_34575_34660 = state_34570__$1;(statearr_34575_34660[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 2))
{var state_34570__$1 = state_34570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34570__$1,4,ch);
} else
{if((state_val_34571 === 34))
{var state_34570__$1 = state_34570;var statearr_34576_34661 = state_34570__$1;(statearr_34576_34661[2] = null);
(statearr_34576_34661[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 3))
{var inst_34568 = (state_34570[2]);var state_34570__$1 = state_34570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34570__$1,inst_34568);
} else
{if((state_val_34571 === 35))
{var inst_34552 = (state_34570[2]);var state_34570__$1 = state_34570;var statearr_34577_34662 = state_34570__$1;(statearr_34577_34662[2] = inst_34552);
(statearr_34577_34662[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 4))
{var inst_34438 = (state_34570[8]);var inst_34438__$1 = (state_34570[2]);var inst_34439 = (inst_34438__$1 == null);var state_34570__$1 = (function (){var statearr_34578 = state_34570;(statearr_34578[8] = inst_34438__$1);
return statearr_34578;
})();if(cljs.core.truth_(inst_34439))
{var statearr_34579_34663 = state_34570__$1;(statearr_34579_34663[1] = 5);
} else
{var statearr_34580_34664 = state_34570__$1;(statearr_34580_34664[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 36))
{var inst_34527 = (state_34570[9]);var inst_34531 = cljs.core.chunk_first.call(null,inst_34527);var inst_34532 = cljs.core.chunk_rest.call(null,inst_34527);var inst_34533 = cljs.core.count.call(null,inst_34531);var inst_34506 = inst_34532;var inst_34507 = inst_34531;var inst_34508 = inst_34533;var inst_34509 = 0;var state_34570__$1 = (function (){var statearr_34581 = state_34570;(statearr_34581[10] = inst_34506);
(statearr_34581[11] = inst_34508);
(statearr_34581[12] = inst_34507);
(statearr_34581[13] = inst_34509);
return statearr_34581;
})();var statearr_34582_34665 = state_34570__$1;(statearr_34582_34665[2] = null);
(statearr_34582_34665[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 5))
{var inst_34445 = cljs.core.deref.call(null,cs);var inst_34446 = cljs.core.seq.call(null,inst_34445);var inst_34447 = inst_34446;var inst_34448 = null;var inst_34449 = 0;var inst_34450 = 0;var state_34570__$1 = (function (){var statearr_34583 = state_34570;(statearr_34583[14] = inst_34447);
(statearr_34583[15] = inst_34448);
(statearr_34583[16] = inst_34449);
(statearr_34583[17] = inst_34450);
return statearr_34583;
})();var statearr_34584_34666 = state_34570__$1;(statearr_34584_34666[2] = null);
(statearr_34584_34666[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 37))
{var inst_34527 = (state_34570[9]);var inst_34536 = cljs.core.first.call(null,inst_34527);var state_34570__$1 = (function (){var statearr_34585 = state_34570;(statearr_34585[18] = inst_34536);
return statearr_34585;
})();var statearr_34586_34667 = state_34570__$1;(statearr_34586_34667[2] = null);
(statearr_34586_34667[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 6))
{var inst_34498 = (state_34570[19]);var inst_34497 = cljs.core.deref.call(null,cs);var inst_34498__$1 = cljs.core.keys.call(null,inst_34497);var inst_34499 = cljs.core.count.call(null,inst_34498__$1);var inst_34500 = cljs.core.reset_BANG_.call(null,dctr,inst_34499);var inst_34505 = cljs.core.seq.call(null,inst_34498__$1);var inst_34506 = inst_34505;var inst_34507 = null;var inst_34508 = 0;var inst_34509 = 0;var state_34570__$1 = (function (){var statearr_34587 = state_34570;(statearr_34587[19] = inst_34498__$1);
(statearr_34587[10] = inst_34506);
(statearr_34587[11] = inst_34508);
(statearr_34587[12] = inst_34507);
(statearr_34587[13] = inst_34509);
(statearr_34587[20] = inst_34500);
return statearr_34587;
})();var statearr_34588_34668 = state_34570__$1;(statearr_34588_34668[2] = null);
(statearr_34588_34668[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 38))
{var inst_34549 = (state_34570[2]);var state_34570__$1 = state_34570;var statearr_34589_34669 = state_34570__$1;(statearr_34589_34669[2] = inst_34549);
(statearr_34589_34669[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 7))
{var inst_34566 = (state_34570[2]);var state_34570__$1 = state_34570;var statearr_34590_34670 = state_34570__$1;(statearr_34590_34670[2] = inst_34566);
(statearr_34590_34670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 39))
{var inst_34527 = (state_34570[9]);var inst_34545 = (state_34570[2]);var inst_34546 = cljs.core.next.call(null,inst_34527);var inst_34506 = inst_34546;var inst_34507 = null;var inst_34508 = 0;var inst_34509 = 0;var state_34570__$1 = (function (){var statearr_34591 = state_34570;(statearr_34591[10] = inst_34506);
(statearr_34591[11] = inst_34508);
(statearr_34591[12] = inst_34507);
(statearr_34591[13] = inst_34509);
(statearr_34591[21] = inst_34545);
return statearr_34591;
})();var statearr_34592_34671 = state_34570__$1;(statearr_34592_34671[2] = null);
(statearr_34592_34671[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 8))
{var inst_34449 = (state_34570[16]);var inst_34450 = (state_34570[17]);var inst_34452 = (inst_34450 < inst_34449);var inst_34453 = inst_34452;var state_34570__$1 = state_34570;if(cljs.core.truth_(inst_34453))
{var statearr_34593_34672 = state_34570__$1;(statearr_34593_34672[1] = 10);
} else
{var statearr_34594_34673 = state_34570__$1;(statearr_34594_34673[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 40))
{var inst_34536 = (state_34570[18]);var inst_34537 = (state_34570[2]);var inst_34538 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34539 = cljs.core.async.untap_STAR_.call(null,m,inst_34536);var state_34570__$1 = (function (){var statearr_34595 = state_34570;(statearr_34595[22] = inst_34538);
(statearr_34595[23] = inst_34537);
return statearr_34595;
})();var statearr_34596_34674 = state_34570__$1;(statearr_34596_34674[2] = inst_34539);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34570__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 9))
{var inst_34495 = (state_34570[2]);var state_34570__$1 = state_34570;var statearr_34597_34675 = state_34570__$1;(statearr_34597_34675[2] = inst_34495);
(statearr_34597_34675[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 41))
{var inst_34438 = (state_34570[8]);var inst_34536 = (state_34570[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34570,40,Object,null,39);var inst_34543 = cljs.core.async.put_BANG_.call(null,inst_34536,inst_34438,done);var state_34570__$1 = state_34570;var statearr_34598_34676 = state_34570__$1;(statearr_34598_34676[2] = inst_34543);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34570__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 10))
{var inst_34448 = (state_34570[15]);var inst_34450 = (state_34570[17]);var inst_34456 = cljs.core._nth.call(null,inst_34448,inst_34450);var inst_34457 = cljs.core.nth.call(null,inst_34456,0,null);var inst_34458 = cljs.core.nth.call(null,inst_34456,1,null);var state_34570__$1 = (function (){var statearr_34599 = state_34570;(statearr_34599[24] = inst_34457);
return statearr_34599;
})();if(cljs.core.truth_(inst_34458))
{var statearr_34600_34677 = state_34570__$1;(statearr_34600_34677[1] = 13);
} else
{var statearr_34601_34678 = state_34570__$1;(statearr_34601_34678[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 42))
{var state_34570__$1 = state_34570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34570__$1,45,dchan);
} else
{if((state_val_34571 === 11))
{var inst_34447 = (state_34570[14]);var inst_34467 = (state_34570[25]);var inst_34467__$1 = cljs.core.seq.call(null,inst_34447);var state_34570__$1 = (function (){var statearr_34602 = state_34570;(statearr_34602[25] = inst_34467__$1);
return statearr_34602;
})();if(inst_34467__$1)
{var statearr_34603_34679 = state_34570__$1;(statearr_34603_34679[1] = 16);
} else
{var statearr_34604_34680 = state_34570__$1;(statearr_34604_34680[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 43))
{var state_34570__$1 = state_34570;var statearr_34605_34681 = state_34570__$1;(statearr_34605_34681[2] = null);
(statearr_34605_34681[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 12))
{var inst_34493 = (state_34570[2]);var state_34570__$1 = state_34570;var statearr_34606_34682 = state_34570__$1;(statearr_34606_34682[2] = inst_34493);
(statearr_34606_34682[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 44))
{var inst_34563 = (state_34570[2]);var state_34570__$1 = (function (){var statearr_34607 = state_34570;(statearr_34607[26] = inst_34563);
return statearr_34607;
})();var statearr_34608_34683 = state_34570__$1;(statearr_34608_34683[2] = null);
(statearr_34608_34683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 13))
{var inst_34457 = (state_34570[24]);var inst_34460 = cljs.core.async.close_BANG_.call(null,inst_34457);var state_34570__$1 = state_34570;var statearr_34609_34684 = state_34570__$1;(statearr_34609_34684[2] = inst_34460);
(statearr_34609_34684[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 45))
{var inst_34560 = (state_34570[2]);var state_34570__$1 = state_34570;var statearr_34613_34685 = state_34570__$1;(statearr_34613_34685[2] = inst_34560);
(statearr_34613_34685[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 14))
{var state_34570__$1 = state_34570;var statearr_34614_34686 = state_34570__$1;(statearr_34614_34686[2] = null);
(statearr_34614_34686[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 15))
{var inst_34447 = (state_34570[14]);var inst_34448 = (state_34570[15]);var inst_34449 = (state_34570[16]);var inst_34450 = (state_34570[17]);var inst_34463 = (state_34570[2]);var inst_34464 = (inst_34450 + 1);var tmp34610 = inst_34447;var tmp34611 = inst_34448;var tmp34612 = inst_34449;var inst_34447__$1 = tmp34610;var inst_34448__$1 = tmp34611;var inst_34449__$1 = tmp34612;var inst_34450__$1 = inst_34464;var state_34570__$1 = (function (){var statearr_34615 = state_34570;(statearr_34615[14] = inst_34447__$1);
(statearr_34615[15] = inst_34448__$1);
(statearr_34615[16] = inst_34449__$1);
(statearr_34615[17] = inst_34450__$1);
(statearr_34615[27] = inst_34463);
return statearr_34615;
})();var statearr_34616_34687 = state_34570__$1;(statearr_34616_34687[2] = null);
(statearr_34616_34687[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 16))
{var inst_34467 = (state_34570[25]);var inst_34469 = cljs.core.chunked_seq_QMARK_.call(null,inst_34467);var state_34570__$1 = state_34570;if(inst_34469)
{var statearr_34617_34688 = state_34570__$1;(statearr_34617_34688[1] = 19);
} else
{var statearr_34618_34689 = state_34570__$1;(statearr_34618_34689[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 17))
{var state_34570__$1 = state_34570;var statearr_34619_34690 = state_34570__$1;(statearr_34619_34690[2] = null);
(statearr_34619_34690[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 18))
{var inst_34491 = (state_34570[2]);var state_34570__$1 = state_34570;var statearr_34620_34691 = state_34570__$1;(statearr_34620_34691[2] = inst_34491);
(statearr_34620_34691[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 19))
{var inst_34467 = (state_34570[25]);var inst_34471 = cljs.core.chunk_first.call(null,inst_34467);var inst_34472 = cljs.core.chunk_rest.call(null,inst_34467);var inst_34473 = cljs.core.count.call(null,inst_34471);var inst_34447 = inst_34472;var inst_34448 = inst_34471;var inst_34449 = inst_34473;var inst_34450 = 0;var state_34570__$1 = (function (){var statearr_34621 = state_34570;(statearr_34621[14] = inst_34447);
(statearr_34621[15] = inst_34448);
(statearr_34621[16] = inst_34449);
(statearr_34621[17] = inst_34450);
return statearr_34621;
})();var statearr_34622_34692 = state_34570__$1;(statearr_34622_34692[2] = null);
(statearr_34622_34692[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 20))
{var inst_34467 = (state_34570[25]);var inst_34477 = cljs.core.first.call(null,inst_34467);var inst_34478 = cljs.core.nth.call(null,inst_34477,0,null);var inst_34479 = cljs.core.nth.call(null,inst_34477,1,null);var state_34570__$1 = (function (){var statearr_34623 = state_34570;(statearr_34623[28] = inst_34478);
return statearr_34623;
})();if(cljs.core.truth_(inst_34479))
{var statearr_34624_34693 = state_34570__$1;(statearr_34624_34693[1] = 22);
} else
{var statearr_34625_34694 = state_34570__$1;(statearr_34625_34694[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 21))
{var inst_34488 = (state_34570[2]);var state_34570__$1 = state_34570;var statearr_34626_34695 = state_34570__$1;(statearr_34626_34695[2] = inst_34488);
(statearr_34626_34695[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 22))
{var inst_34478 = (state_34570[28]);var inst_34481 = cljs.core.async.close_BANG_.call(null,inst_34478);var state_34570__$1 = state_34570;var statearr_34627_34696 = state_34570__$1;(statearr_34627_34696[2] = inst_34481);
(statearr_34627_34696[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 23))
{var state_34570__$1 = state_34570;var statearr_34628_34697 = state_34570__$1;(statearr_34628_34697[2] = null);
(statearr_34628_34697[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 24))
{var inst_34467 = (state_34570[25]);var inst_34484 = (state_34570[2]);var inst_34485 = cljs.core.next.call(null,inst_34467);var inst_34447 = inst_34485;var inst_34448 = null;var inst_34449 = 0;var inst_34450 = 0;var state_34570__$1 = (function (){var statearr_34629 = state_34570;(statearr_34629[29] = inst_34484);
(statearr_34629[14] = inst_34447);
(statearr_34629[15] = inst_34448);
(statearr_34629[16] = inst_34449);
(statearr_34629[17] = inst_34450);
return statearr_34629;
})();var statearr_34630_34698 = state_34570__$1;(statearr_34630_34698[2] = null);
(statearr_34630_34698[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 25))
{var inst_34508 = (state_34570[11]);var inst_34509 = (state_34570[13]);var inst_34511 = (inst_34509 < inst_34508);var inst_34512 = inst_34511;var state_34570__$1 = state_34570;if(cljs.core.truth_(inst_34512))
{var statearr_34631_34699 = state_34570__$1;(statearr_34631_34699[1] = 27);
} else
{var statearr_34632_34700 = state_34570__$1;(statearr_34632_34700[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 26))
{var inst_34498 = (state_34570[19]);var inst_34556 = (state_34570[2]);var inst_34557 = cljs.core.seq.call(null,inst_34498);var state_34570__$1 = (function (){var statearr_34633 = state_34570;(statearr_34633[30] = inst_34556);
return statearr_34633;
})();if(inst_34557)
{var statearr_34634_34701 = state_34570__$1;(statearr_34634_34701[1] = 42);
} else
{var statearr_34635_34702 = state_34570__$1;(statearr_34635_34702[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 27))
{var inst_34507 = (state_34570[12]);var inst_34509 = (state_34570[13]);var inst_34514 = cljs.core._nth.call(null,inst_34507,inst_34509);var state_34570__$1 = (function (){var statearr_34636 = state_34570;(statearr_34636[7] = inst_34514);
return statearr_34636;
})();var statearr_34637_34703 = state_34570__$1;(statearr_34637_34703[2] = null);
(statearr_34637_34703[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 28))
{var inst_34506 = (state_34570[10]);var inst_34527 = (state_34570[9]);var inst_34527__$1 = cljs.core.seq.call(null,inst_34506);var state_34570__$1 = (function (){var statearr_34641 = state_34570;(statearr_34641[9] = inst_34527__$1);
return statearr_34641;
})();if(inst_34527__$1)
{var statearr_34642_34704 = state_34570__$1;(statearr_34642_34704[1] = 33);
} else
{var statearr_34643_34705 = state_34570__$1;(statearr_34643_34705[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 29))
{var inst_34554 = (state_34570[2]);var state_34570__$1 = state_34570;var statearr_34644_34706 = state_34570__$1;(statearr_34644_34706[2] = inst_34554);
(statearr_34644_34706[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 30))
{var inst_34506 = (state_34570[10]);var inst_34508 = (state_34570[11]);var inst_34507 = (state_34570[12]);var inst_34509 = (state_34570[13]);var inst_34523 = (state_34570[2]);var inst_34524 = (inst_34509 + 1);var tmp34638 = inst_34506;var tmp34639 = inst_34508;var tmp34640 = inst_34507;var inst_34506__$1 = tmp34638;var inst_34507__$1 = tmp34640;var inst_34508__$1 = tmp34639;var inst_34509__$1 = inst_34524;var state_34570__$1 = (function (){var statearr_34645 = state_34570;(statearr_34645[31] = inst_34523);
(statearr_34645[10] = inst_34506__$1);
(statearr_34645[11] = inst_34508__$1);
(statearr_34645[12] = inst_34507__$1);
(statearr_34645[13] = inst_34509__$1);
return statearr_34645;
})();var statearr_34646_34707 = state_34570__$1;(statearr_34646_34707[2] = null);
(statearr_34646_34707[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34571 === 31))
{var inst_34514 = (state_34570[7]);var inst_34515 = (state_34570[2]);var inst_34516 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34517 = cljs.core.async.untap_STAR_.call(null,m,inst_34514);var state_34570__$1 = (function (){var statearr_34647 = state_34570;(statearr_34647[32] = inst_34515);
(statearr_34647[33] = inst_34516);
return statearr_34647;
})();var statearr_34648_34708 = state_34570__$1;(statearr_34648_34708[2] = inst_34517);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34570__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34652 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34652[0] = state_machine__5507__auto__);
(statearr_34652[1] = 1);
return statearr_34652;
});
var state_machine__5507__auto____1 = (function (state_34570){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34570);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34653){if((e34653 instanceof Object))
{var ex__5510__auto__ = e34653;var statearr_34654_34709 = state_34570;(statearr_34654_34709[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34570);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34653;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34710 = state_34570;
state_34570 = G__34710;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34570){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34655 = f__5522__auto__.call(null);(statearr_34655[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34656);
return statearr_34655;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
cljs.core.async.Mix = (function (){var obj34712 = {};return obj34712;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
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
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t34822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34822 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34823){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta34823 = meta34823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34822.cljs$lang$type = true;
cljs.core.async.t34822.cljs$lang$ctorStr = "cljs.core.async/t34822";
cljs.core.async.t34822.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34822");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34822.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34822.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34822.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34822.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34822.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34822.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34822.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34822.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34822.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34824){var self__ = this;
var _34824__$1 = this;return self__.meta34823;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34824,meta34823__$1){var self__ = this;
var _34824__$1 = this;return (new cljs.core.async.t34822(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34823__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34822 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34822(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34823){return (new cljs.core.async.t34822(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34823));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34822(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34931 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34889){var state_val_34890 = (state_34889[1]);if((state_val_34890 === 1))
{var inst_34828 = (state_34889[7]);var inst_34828__$1 = calc_state.call(null);var inst_34829 = cljs.core.seq_QMARK_.call(null,inst_34828__$1);var state_34889__$1 = (function (){var statearr_34891 = state_34889;(statearr_34891[7] = inst_34828__$1);
return statearr_34891;
})();if(inst_34829)
{var statearr_34892_34932 = state_34889__$1;(statearr_34892_34932[1] = 2);
} else
{var statearr_34893_34933 = state_34889__$1;(statearr_34893_34933[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 2))
{var inst_34828 = (state_34889[7]);var inst_34831 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34828);var state_34889__$1 = state_34889;var statearr_34894_34934 = state_34889__$1;(statearr_34894_34934[2] = inst_34831);
(statearr_34894_34934[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 3))
{var inst_34828 = (state_34889[7]);var state_34889__$1 = state_34889;var statearr_34895_34935 = state_34889__$1;(statearr_34895_34935[2] = inst_34828);
(statearr_34895_34935[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 4))
{var inst_34828 = (state_34889[7]);var inst_34834 = (state_34889[2]);var inst_34835 = cljs.core.get.call(null,inst_34834,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34836 = cljs.core.get.call(null,inst_34834,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34837 = cljs.core.get.call(null,inst_34834,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34838 = inst_34828;var state_34889__$1 = (function (){var statearr_34896 = state_34889;(statearr_34896[8] = inst_34836);
(statearr_34896[9] = inst_34835);
(statearr_34896[10] = inst_34838);
(statearr_34896[11] = inst_34837);
return statearr_34896;
})();var statearr_34897_34936 = state_34889__$1;(statearr_34897_34936[2] = null);
(statearr_34897_34936[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 5))
{var inst_34838 = (state_34889[10]);var inst_34841 = cljs.core.seq_QMARK_.call(null,inst_34838);var state_34889__$1 = state_34889;if(inst_34841)
{var statearr_34898_34937 = state_34889__$1;(statearr_34898_34937[1] = 7);
} else
{var statearr_34899_34938 = state_34889__$1;(statearr_34899_34938[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 6))
{var inst_34887 = (state_34889[2]);var state_34889__$1 = state_34889;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34889__$1,inst_34887);
} else
{if((state_val_34890 === 7))
{var inst_34838 = (state_34889[10]);var inst_34843 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34838);var state_34889__$1 = state_34889;var statearr_34900_34939 = state_34889__$1;(statearr_34900_34939[2] = inst_34843);
(statearr_34900_34939[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 8))
{var inst_34838 = (state_34889[10]);var state_34889__$1 = state_34889;var statearr_34901_34940 = state_34889__$1;(statearr_34901_34940[2] = inst_34838);
(statearr_34901_34940[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 9))
{var inst_34846 = (state_34889[12]);var inst_34846__$1 = (state_34889[2]);var inst_34847 = cljs.core.get.call(null,inst_34846__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34848 = cljs.core.get.call(null,inst_34846__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34849 = cljs.core.get.call(null,inst_34846__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34889__$1 = (function (){var statearr_34902 = state_34889;(statearr_34902[12] = inst_34846__$1);
(statearr_34902[13] = inst_34849);
(statearr_34902[14] = inst_34848);
return statearr_34902;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34889__$1,10,inst_34847);
} else
{if((state_val_34890 === 10))
{var inst_34853 = (state_34889[15]);var inst_34854 = (state_34889[16]);var inst_34852 = (state_34889[2]);var inst_34853__$1 = cljs.core.nth.call(null,inst_34852,0,null);var inst_34854__$1 = cljs.core.nth.call(null,inst_34852,1,null);var inst_34855 = (inst_34853__$1 == null);var inst_34856 = cljs.core._EQ_.call(null,inst_34854__$1,change);var inst_34857 = (inst_34855) || (inst_34856);var state_34889__$1 = (function (){var statearr_34903 = state_34889;(statearr_34903[15] = inst_34853__$1);
(statearr_34903[16] = inst_34854__$1);
return statearr_34903;
})();if(cljs.core.truth_(inst_34857))
{var statearr_34904_34941 = state_34889__$1;(statearr_34904_34941[1] = 11);
} else
{var statearr_34905_34942 = state_34889__$1;(statearr_34905_34942[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 11))
{var inst_34853 = (state_34889[15]);var inst_34859 = (inst_34853 == null);var state_34889__$1 = state_34889;if(cljs.core.truth_(inst_34859))
{var statearr_34906_34943 = state_34889__$1;(statearr_34906_34943[1] = 14);
} else
{var statearr_34907_34944 = state_34889__$1;(statearr_34907_34944[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 12))
{var inst_34868 = (state_34889[17]);var inst_34849 = (state_34889[13]);var inst_34854 = (state_34889[16]);var inst_34868__$1 = inst_34849.call(null,inst_34854);var state_34889__$1 = (function (){var statearr_34908 = state_34889;(statearr_34908[17] = inst_34868__$1);
return statearr_34908;
})();if(cljs.core.truth_(inst_34868__$1))
{var statearr_34909_34945 = state_34889__$1;(statearr_34909_34945[1] = 17);
} else
{var statearr_34910_34946 = state_34889__$1;(statearr_34910_34946[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 13))
{var inst_34885 = (state_34889[2]);var state_34889__$1 = state_34889;var statearr_34911_34947 = state_34889__$1;(statearr_34911_34947[2] = inst_34885);
(statearr_34911_34947[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 14))
{var inst_34854 = (state_34889[16]);var inst_34861 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34854);var state_34889__$1 = state_34889;var statearr_34912_34948 = state_34889__$1;(statearr_34912_34948[2] = inst_34861);
(statearr_34912_34948[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 15))
{var state_34889__$1 = state_34889;var statearr_34913_34949 = state_34889__$1;(statearr_34913_34949[2] = null);
(statearr_34913_34949[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 16))
{var inst_34864 = (state_34889[2]);var inst_34865 = calc_state.call(null);var inst_34838 = inst_34865;var state_34889__$1 = (function (){var statearr_34914 = state_34889;(statearr_34914[10] = inst_34838);
(statearr_34914[18] = inst_34864);
return statearr_34914;
})();var statearr_34915_34950 = state_34889__$1;(statearr_34915_34950[2] = null);
(statearr_34915_34950[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 17))
{var inst_34868 = (state_34889[17]);var state_34889__$1 = state_34889;var statearr_34916_34951 = state_34889__$1;(statearr_34916_34951[2] = inst_34868);
(statearr_34916_34951[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 18))
{var inst_34849 = (state_34889[13]);var inst_34848 = (state_34889[14]);var inst_34854 = (state_34889[16]);var inst_34871 = cljs.core.empty_QMARK_.call(null,inst_34849);var inst_34872 = inst_34848.call(null,inst_34854);var inst_34873 = cljs.core.not.call(null,inst_34872);var inst_34874 = (inst_34871) && (inst_34873);var state_34889__$1 = state_34889;var statearr_34917_34952 = state_34889__$1;(statearr_34917_34952[2] = inst_34874);
(statearr_34917_34952[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 19))
{var inst_34876 = (state_34889[2]);var state_34889__$1 = state_34889;if(cljs.core.truth_(inst_34876))
{var statearr_34918_34953 = state_34889__$1;(statearr_34918_34953[1] = 20);
} else
{var statearr_34919_34954 = state_34889__$1;(statearr_34919_34954[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 20))
{var inst_34853 = (state_34889[15]);var state_34889__$1 = state_34889;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34889__$1,23,out,inst_34853);
} else
{if((state_val_34890 === 21))
{var state_34889__$1 = state_34889;var statearr_34920_34955 = state_34889__$1;(statearr_34920_34955[2] = null);
(statearr_34920_34955[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 22))
{var inst_34846 = (state_34889[12]);var inst_34882 = (state_34889[2]);var inst_34838 = inst_34846;var state_34889__$1 = (function (){var statearr_34921 = state_34889;(statearr_34921[19] = inst_34882);
(statearr_34921[10] = inst_34838);
return statearr_34921;
})();var statearr_34922_34956 = state_34889__$1;(statearr_34922_34956[2] = null);
(statearr_34922_34956[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34890 === 23))
{var inst_34879 = (state_34889[2]);var state_34889__$1 = state_34889;var statearr_34923_34957 = state_34889__$1;(statearr_34923_34957[2] = inst_34879);
(statearr_34923_34957[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34927 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34927[0] = state_machine__5507__auto__);
(statearr_34927[1] = 1);
return statearr_34927;
});
var state_machine__5507__auto____1 = (function (state_34889){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34889);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34928){if((e34928 instanceof Object))
{var ex__5510__auto__ = e34928;var statearr_34929_34958 = state_34889;(statearr_34929_34958[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34889);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34928;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34959 = state_34889;
state_34889 = G__34959;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34889){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34889);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34930 = f__5522__auto__.call(null);(statearr_34930[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34931);
return statearr_34930;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
cljs.core.async.Pub = (function (){var obj34961 = {};return obj34961;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
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
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__34962_SHARP_){if(cljs.core.truth_(p1__34962_SHARP_.call(null,topic)))
{return p1__34962_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34962_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35087 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35087 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35088){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35088 = meta35088;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35087.cljs$lang$type = true;
cljs.core.async.t35087.cljs$lang$ctorStr = "cljs.core.async/t35087";
cljs.core.async.t35087.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35087");
});})(mults,ensure_mult))
;
cljs.core.async.t35087.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35087.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35087.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35087.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35087.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35087.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35087.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35087.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35089){var self__ = this;
var _35089__$1 = this;return self__.meta35088;
});})(mults,ensure_mult))
;
cljs.core.async.t35087.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35089,meta35088__$1){var self__ = this;
var _35089__$1 = this;return (new cljs.core.async.t35087(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35088__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35087 = ((function (mults,ensure_mult){
return (function __GT_t35087(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35088){return (new cljs.core.async.t35087(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35088));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35087(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___35211 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35163){var state_val_35164 = (state_35163[1]);if((state_val_35164 === 1))
{var state_35163__$1 = state_35163;var statearr_35165_35212 = state_35163__$1;(statearr_35165_35212[2] = null);
(statearr_35165_35212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 2))
{var state_35163__$1 = state_35163;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35163__$1,4,ch);
} else
{if((state_val_35164 === 3))
{var inst_35161 = (state_35163[2]);var state_35163__$1 = state_35163;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35163__$1,inst_35161);
} else
{if((state_val_35164 === 4))
{var inst_35092 = (state_35163[7]);var inst_35092__$1 = (state_35163[2]);var inst_35093 = (inst_35092__$1 == null);var state_35163__$1 = (function (){var statearr_35166 = state_35163;(statearr_35166[7] = inst_35092__$1);
return statearr_35166;
})();if(cljs.core.truth_(inst_35093))
{var statearr_35167_35213 = state_35163__$1;(statearr_35167_35213[1] = 5);
} else
{var statearr_35168_35214 = state_35163__$1;(statearr_35168_35214[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 5))
{var inst_35099 = cljs.core.deref.call(null,mults);var inst_35100 = cljs.core.vals.call(null,inst_35099);var inst_35101 = cljs.core.seq.call(null,inst_35100);var inst_35102 = inst_35101;var inst_35103 = null;var inst_35104 = 0;var inst_35105 = 0;var state_35163__$1 = (function (){var statearr_35169 = state_35163;(statearr_35169[8] = inst_35105);
(statearr_35169[9] = inst_35104);
(statearr_35169[10] = inst_35103);
(statearr_35169[11] = inst_35102);
return statearr_35169;
})();var statearr_35170_35215 = state_35163__$1;(statearr_35170_35215[2] = null);
(statearr_35170_35215[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 6))
{var inst_35142 = (state_35163[12]);var inst_35140 = (state_35163[13]);var inst_35092 = (state_35163[7]);var inst_35140__$1 = topic_fn.call(null,inst_35092);var inst_35141 = cljs.core.deref.call(null,mults);var inst_35142__$1 = cljs.core.get.call(null,inst_35141,inst_35140__$1);var state_35163__$1 = (function (){var statearr_35171 = state_35163;(statearr_35171[12] = inst_35142__$1);
(statearr_35171[13] = inst_35140__$1);
return statearr_35171;
})();if(cljs.core.truth_(inst_35142__$1))
{var statearr_35172_35216 = state_35163__$1;(statearr_35172_35216[1] = 19);
} else
{var statearr_35173_35217 = state_35163__$1;(statearr_35173_35217[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 7))
{var inst_35159 = (state_35163[2]);var state_35163__$1 = state_35163;var statearr_35174_35218 = state_35163__$1;(statearr_35174_35218[2] = inst_35159);
(statearr_35174_35218[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 8))
{var inst_35105 = (state_35163[8]);var inst_35104 = (state_35163[9]);var inst_35107 = (inst_35105 < inst_35104);var inst_35108 = inst_35107;var state_35163__$1 = state_35163;if(cljs.core.truth_(inst_35108))
{var statearr_35178_35219 = state_35163__$1;(statearr_35178_35219[1] = 10);
} else
{var statearr_35179_35220 = state_35163__$1;(statearr_35179_35220[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 9))
{var inst_35138 = (state_35163[2]);var state_35163__$1 = state_35163;var statearr_35180_35221 = state_35163__$1;(statearr_35180_35221[2] = inst_35138);
(statearr_35180_35221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 10))
{var inst_35105 = (state_35163[8]);var inst_35104 = (state_35163[9]);var inst_35103 = (state_35163[10]);var inst_35102 = (state_35163[11]);var inst_35110 = cljs.core._nth.call(null,inst_35103,inst_35105);var inst_35111 = cljs.core.async.muxch_STAR_.call(null,inst_35110);var inst_35112 = cljs.core.async.close_BANG_.call(null,inst_35111);var inst_35113 = (inst_35105 + 1);var tmp35175 = inst_35104;var tmp35176 = inst_35103;var tmp35177 = inst_35102;var inst_35102__$1 = tmp35177;var inst_35103__$1 = tmp35176;var inst_35104__$1 = tmp35175;var inst_35105__$1 = inst_35113;var state_35163__$1 = (function (){var statearr_35181 = state_35163;(statearr_35181[8] = inst_35105__$1);
(statearr_35181[9] = inst_35104__$1);
(statearr_35181[10] = inst_35103__$1);
(statearr_35181[11] = inst_35102__$1);
(statearr_35181[14] = inst_35112);
return statearr_35181;
})();var statearr_35182_35222 = state_35163__$1;(statearr_35182_35222[2] = null);
(statearr_35182_35222[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 11))
{var inst_35102 = (state_35163[11]);var inst_35116 = (state_35163[15]);var inst_35116__$1 = cljs.core.seq.call(null,inst_35102);var state_35163__$1 = (function (){var statearr_35183 = state_35163;(statearr_35183[15] = inst_35116__$1);
return statearr_35183;
})();if(inst_35116__$1)
{var statearr_35184_35223 = state_35163__$1;(statearr_35184_35223[1] = 13);
} else
{var statearr_35185_35224 = state_35163__$1;(statearr_35185_35224[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 12))
{var inst_35136 = (state_35163[2]);var state_35163__$1 = state_35163;var statearr_35186_35225 = state_35163__$1;(statearr_35186_35225[2] = inst_35136);
(statearr_35186_35225[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 13))
{var inst_35116 = (state_35163[15]);var inst_35118 = cljs.core.chunked_seq_QMARK_.call(null,inst_35116);var state_35163__$1 = state_35163;if(inst_35118)
{var statearr_35187_35226 = state_35163__$1;(statearr_35187_35226[1] = 16);
} else
{var statearr_35188_35227 = state_35163__$1;(statearr_35188_35227[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 14))
{var state_35163__$1 = state_35163;var statearr_35189_35228 = state_35163__$1;(statearr_35189_35228[2] = null);
(statearr_35189_35228[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 15))
{var inst_35134 = (state_35163[2]);var state_35163__$1 = state_35163;var statearr_35190_35229 = state_35163__$1;(statearr_35190_35229[2] = inst_35134);
(statearr_35190_35229[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 16))
{var inst_35116 = (state_35163[15]);var inst_35120 = cljs.core.chunk_first.call(null,inst_35116);var inst_35121 = cljs.core.chunk_rest.call(null,inst_35116);var inst_35122 = cljs.core.count.call(null,inst_35120);var inst_35102 = inst_35121;var inst_35103 = inst_35120;var inst_35104 = inst_35122;var inst_35105 = 0;var state_35163__$1 = (function (){var statearr_35191 = state_35163;(statearr_35191[8] = inst_35105);
(statearr_35191[9] = inst_35104);
(statearr_35191[10] = inst_35103);
(statearr_35191[11] = inst_35102);
return statearr_35191;
})();var statearr_35192_35230 = state_35163__$1;(statearr_35192_35230[2] = null);
(statearr_35192_35230[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 17))
{var inst_35116 = (state_35163[15]);var inst_35125 = cljs.core.first.call(null,inst_35116);var inst_35126 = cljs.core.async.muxch_STAR_.call(null,inst_35125);var inst_35127 = cljs.core.async.close_BANG_.call(null,inst_35126);var inst_35128 = cljs.core.next.call(null,inst_35116);var inst_35102 = inst_35128;var inst_35103 = null;var inst_35104 = 0;var inst_35105 = 0;var state_35163__$1 = (function (){var statearr_35193 = state_35163;(statearr_35193[8] = inst_35105);
(statearr_35193[9] = inst_35104);
(statearr_35193[10] = inst_35103);
(statearr_35193[11] = inst_35102);
(statearr_35193[16] = inst_35127);
return statearr_35193;
})();var statearr_35194_35231 = state_35163__$1;(statearr_35194_35231[2] = null);
(statearr_35194_35231[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 18))
{var inst_35131 = (state_35163[2]);var state_35163__$1 = state_35163;var statearr_35195_35232 = state_35163__$1;(statearr_35195_35232[2] = inst_35131);
(statearr_35195_35232[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 19))
{var state_35163__$1 = state_35163;var statearr_35196_35233 = state_35163__$1;(statearr_35196_35233[2] = null);
(statearr_35196_35233[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 20))
{var state_35163__$1 = state_35163;var statearr_35197_35234 = state_35163__$1;(statearr_35197_35234[2] = null);
(statearr_35197_35234[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 21))
{var inst_35156 = (state_35163[2]);var state_35163__$1 = (function (){var statearr_35198 = state_35163;(statearr_35198[17] = inst_35156);
return statearr_35198;
})();var statearr_35199_35235 = state_35163__$1;(statearr_35199_35235[2] = null);
(statearr_35199_35235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 22))
{var inst_35153 = (state_35163[2]);var state_35163__$1 = state_35163;var statearr_35200_35236 = state_35163__$1;(statearr_35200_35236[2] = inst_35153);
(statearr_35200_35236[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 23))
{var inst_35140 = (state_35163[13]);var inst_35144 = (state_35163[2]);var inst_35145 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35140);var state_35163__$1 = (function (){var statearr_35201 = state_35163;(statearr_35201[18] = inst_35144);
return statearr_35201;
})();var statearr_35202_35237 = state_35163__$1;(statearr_35202_35237[2] = inst_35145);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35163__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35164 === 24))
{var inst_35142 = (state_35163[12]);var inst_35092 = (state_35163[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35163,23,Object,null,22);var inst_35149 = cljs.core.async.muxch_STAR_.call(null,inst_35142);var state_35163__$1 = state_35163;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35163__$1,25,inst_35149,inst_35092);
} else
{if((state_val_35164 === 25))
{var inst_35151 = (state_35163[2]);var state_35163__$1 = state_35163;var statearr_35203_35238 = state_35163__$1;(statearr_35203_35238[2] = inst_35151);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35163__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35207[0] = state_machine__5507__auto__);
(statearr_35207[1] = 1);
return statearr_35207;
});
var state_machine__5507__auto____1 = (function (state_35163){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35163);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35208){if((e35208 instanceof Object))
{var ex__5510__auto__ = e35208;var statearr_35209_35239 = state_35163;(statearr_35209_35239[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35163);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35240 = state_35163;
state_35163 = G__35240;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35163){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35163);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35210 = f__5522__auto__.call(null);(statearr_35210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35211);
return statearr_35210;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___35377 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35347){var state_val_35348 = (state_35347[1]);if((state_val_35348 === 1))
{var state_35347__$1 = state_35347;var statearr_35349_35378 = state_35347__$1;(statearr_35349_35378[2] = null);
(statearr_35349_35378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 2))
{var inst_35310 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35311 = 0;var state_35347__$1 = (function (){var statearr_35350 = state_35347;(statearr_35350[7] = inst_35310);
(statearr_35350[8] = inst_35311);
return statearr_35350;
})();var statearr_35351_35379 = state_35347__$1;(statearr_35351_35379[2] = null);
(statearr_35351_35379[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 3))
{var inst_35345 = (state_35347[2]);var state_35347__$1 = state_35347;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35347__$1,inst_35345);
} else
{if((state_val_35348 === 4))
{var inst_35311 = (state_35347[8]);var inst_35313 = (inst_35311 < cnt);var state_35347__$1 = state_35347;if(cljs.core.truth_(inst_35313))
{var statearr_35352_35380 = state_35347__$1;(statearr_35352_35380[1] = 6);
} else
{var statearr_35353_35381 = state_35347__$1;(statearr_35353_35381[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 5))
{var inst_35331 = (state_35347[2]);var state_35347__$1 = (function (){var statearr_35354 = state_35347;(statearr_35354[9] = inst_35331);
return statearr_35354;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35347__$1,12,dchan);
} else
{if((state_val_35348 === 6))
{var state_35347__$1 = state_35347;var statearr_35355_35382 = state_35347__$1;(statearr_35355_35382[2] = null);
(statearr_35355_35382[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 7))
{var state_35347__$1 = state_35347;var statearr_35356_35383 = state_35347__$1;(statearr_35356_35383[2] = null);
(statearr_35356_35383[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 8))
{var inst_35329 = (state_35347[2]);var state_35347__$1 = state_35347;var statearr_35357_35384 = state_35347__$1;(statearr_35357_35384[2] = inst_35329);
(statearr_35357_35384[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 9))
{var inst_35311 = (state_35347[8]);var inst_35324 = (state_35347[2]);var inst_35325 = (inst_35311 + 1);var inst_35311__$1 = inst_35325;var state_35347__$1 = (function (){var statearr_35358 = state_35347;(statearr_35358[10] = inst_35324);
(statearr_35358[8] = inst_35311__$1);
return statearr_35358;
})();var statearr_35359_35385 = state_35347__$1;(statearr_35359_35385[2] = null);
(statearr_35359_35385[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 10))
{var inst_35315 = (state_35347[2]);var inst_35316 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35347__$1 = (function (){var statearr_35360 = state_35347;(statearr_35360[11] = inst_35315);
return statearr_35360;
})();var statearr_35361_35386 = state_35347__$1;(statearr_35361_35386[2] = inst_35316);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35347__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 11))
{var inst_35311 = (state_35347[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35347,10,Object,null,9);var inst_35320 = chs__$1.call(null,inst_35311);var inst_35321 = done.call(null,inst_35311);var inst_35322 = cljs.core.async.take_BANG_.call(null,inst_35320,inst_35321);var state_35347__$1 = state_35347;var statearr_35362_35387 = state_35347__$1;(statearr_35362_35387[2] = inst_35322);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35347__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 12))
{var inst_35333 = (state_35347[12]);var inst_35333__$1 = (state_35347[2]);var inst_35334 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35333__$1);var state_35347__$1 = (function (){var statearr_35363 = state_35347;(statearr_35363[12] = inst_35333__$1);
return statearr_35363;
})();if(cljs.core.truth_(inst_35334))
{var statearr_35364_35388 = state_35347__$1;(statearr_35364_35388[1] = 13);
} else
{var statearr_35365_35389 = state_35347__$1;(statearr_35365_35389[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 13))
{var inst_35336 = cljs.core.async.close_BANG_.call(null,out);var state_35347__$1 = state_35347;var statearr_35366_35390 = state_35347__$1;(statearr_35366_35390[2] = inst_35336);
(statearr_35366_35390[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 14))
{var inst_35333 = (state_35347[12]);var inst_35338 = cljs.core.apply.call(null,f,inst_35333);var state_35347__$1 = state_35347;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35347__$1,16,out,inst_35338);
} else
{if((state_val_35348 === 15))
{var inst_35343 = (state_35347[2]);var state_35347__$1 = state_35347;var statearr_35367_35391 = state_35347__$1;(statearr_35367_35391[2] = inst_35343);
(statearr_35367_35391[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35348 === 16))
{var inst_35340 = (state_35347[2]);var state_35347__$1 = (function (){var statearr_35368 = state_35347;(statearr_35368[13] = inst_35340);
return statearr_35368;
})();var statearr_35369_35392 = state_35347__$1;(statearr_35369_35392[2] = null);
(statearr_35369_35392[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35373 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35373[0] = state_machine__5507__auto__);
(statearr_35373[1] = 1);
return statearr_35373;
});
var state_machine__5507__auto____1 = (function (state_35347){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35347);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35374){if((e35374 instanceof Object))
{var ex__5510__auto__ = e35374;var statearr_35375_35393 = state_35347;(statearr_35375_35393[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35347);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35394 = state_35347;
state_35347 = G__35394;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35347){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35347);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35376 = f__5522__auto__.call(null);(statearr_35376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35377);
return statearr_35376;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35502 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35478){var state_val_35479 = (state_35478[1]);if((state_val_35479 === 1))
{var inst_35449 = cljs.core.vec.call(null,chs);var inst_35450 = inst_35449;var state_35478__$1 = (function (){var statearr_35480 = state_35478;(statearr_35480[7] = inst_35450);
return statearr_35480;
})();var statearr_35481_35503 = state_35478__$1;(statearr_35481_35503[2] = null);
(statearr_35481_35503[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 2))
{var inst_35450 = (state_35478[7]);var inst_35452 = cljs.core.count.call(null,inst_35450);var inst_35453 = (inst_35452 > 0);var state_35478__$1 = state_35478;if(cljs.core.truth_(inst_35453))
{var statearr_35482_35504 = state_35478__$1;(statearr_35482_35504[1] = 4);
} else
{var statearr_35483_35505 = state_35478__$1;(statearr_35483_35505[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 3))
{var inst_35476 = (state_35478[2]);var state_35478__$1 = state_35478;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35478__$1,inst_35476);
} else
{if((state_val_35479 === 4))
{var inst_35450 = (state_35478[7]);var state_35478__$1 = state_35478;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35478__$1,7,inst_35450);
} else
{if((state_val_35479 === 5))
{var inst_35472 = cljs.core.async.close_BANG_.call(null,out);var state_35478__$1 = state_35478;var statearr_35484_35506 = state_35478__$1;(statearr_35484_35506[2] = inst_35472);
(statearr_35484_35506[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 6))
{var inst_35474 = (state_35478[2]);var state_35478__$1 = state_35478;var statearr_35485_35507 = state_35478__$1;(statearr_35485_35507[2] = inst_35474);
(statearr_35485_35507[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 7))
{var inst_35458 = (state_35478[8]);var inst_35457 = (state_35478[9]);var inst_35457__$1 = (state_35478[2]);var inst_35458__$1 = cljs.core.nth.call(null,inst_35457__$1,0,null);var inst_35459 = cljs.core.nth.call(null,inst_35457__$1,1,null);var inst_35460 = (inst_35458__$1 == null);var state_35478__$1 = (function (){var statearr_35486 = state_35478;(statearr_35486[8] = inst_35458__$1);
(statearr_35486[10] = inst_35459);
(statearr_35486[9] = inst_35457__$1);
return statearr_35486;
})();if(cljs.core.truth_(inst_35460))
{var statearr_35487_35508 = state_35478__$1;(statearr_35487_35508[1] = 8);
} else
{var statearr_35488_35509 = state_35478__$1;(statearr_35488_35509[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 8))
{var inst_35450 = (state_35478[7]);var inst_35458 = (state_35478[8]);var inst_35459 = (state_35478[10]);var inst_35457 = (state_35478[9]);var inst_35462 = (function (){var c = inst_35459;var v = inst_35458;var vec__35455 = inst_35457;var cs = inst_35450;return ((function (c,v,vec__35455,cs,inst_35450,inst_35458,inst_35459,inst_35457,state_val_35479){
return (function (p1__35395_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35395_SHARP_);
});
;})(c,v,vec__35455,cs,inst_35450,inst_35458,inst_35459,inst_35457,state_val_35479))
})();var inst_35463 = cljs.core.filterv.call(null,inst_35462,inst_35450);var inst_35450__$1 = inst_35463;var state_35478__$1 = (function (){var statearr_35489 = state_35478;(statearr_35489[7] = inst_35450__$1);
return statearr_35489;
})();var statearr_35490_35510 = state_35478__$1;(statearr_35490_35510[2] = null);
(statearr_35490_35510[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 9))
{var inst_35458 = (state_35478[8]);var state_35478__$1 = state_35478;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35478__$1,11,out,inst_35458);
} else
{if((state_val_35479 === 10))
{var inst_35470 = (state_35478[2]);var state_35478__$1 = state_35478;var statearr_35492_35511 = state_35478__$1;(statearr_35492_35511[2] = inst_35470);
(statearr_35492_35511[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35479 === 11))
{var inst_35450 = (state_35478[7]);var inst_35467 = (state_35478[2]);var tmp35491 = inst_35450;var inst_35450__$1 = tmp35491;var state_35478__$1 = (function (){var statearr_35493 = state_35478;(statearr_35493[7] = inst_35450__$1);
(statearr_35493[11] = inst_35467);
return statearr_35493;
})();var statearr_35494_35512 = state_35478__$1;(statearr_35494_35512[2] = null);
(statearr_35494_35512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35498 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35498[0] = state_machine__5507__auto__);
(statearr_35498[1] = 1);
return statearr_35498;
});
var state_machine__5507__auto____1 = (function (state_35478){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35478);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35499){if((e35499 instanceof Object))
{var ex__5510__auto__ = e35499;var statearr_35500_35513 = state_35478;(statearr_35500_35513[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35478);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35499;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35514 = state_35478;
state_35478 = G__35514;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35478){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35501 = f__5522__auto__.call(null);(statearr_35501[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35502);
return statearr_35501;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35607 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35584){var state_val_35585 = (state_35584[1]);if((state_val_35585 === 1))
{var inst_35561 = 0;var state_35584__$1 = (function (){var statearr_35586 = state_35584;(statearr_35586[7] = inst_35561);
return statearr_35586;
})();var statearr_35587_35608 = state_35584__$1;(statearr_35587_35608[2] = null);
(statearr_35587_35608[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 2))
{var inst_35561 = (state_35584[7]);var inst_35563 = (inst_35561 < n);var state_35584__$1 = state_35584;if(cljs.core.truth_(inst_35563))
{var statearr_35588_35609 = state_35584__$1;(statearr_35588_35609[1] = 4);
} else
{var statearr_35589_35610 = state_35584__$1;(statearr_35589_35610[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 3))
{var inst_35581 = (state_35584[2]);var inst_35582 = cljs.core.async.close_BANG_.call(null,out);var state_35584__$1 = (function (){var statearr_35590 = state_35584;(statearr_35590[8] = inst_35581);
return statearr_35590;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35584__$1,inst_35582);
} else
{if((state_val_35585 === 4))
{var state_35584__$1 = state_35584;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35584__$1,7,ch);
} else
{if((state_val_35585 === 5))
{var state_35584__$1 = state_35584;var statearr_35591_35611 = state_35584__$1;(statearr_35591_35611[2] = null);
(statearr_35591_35611[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 6))
{var inst_35579 = (state_35584[2]);var state_35584__$1 = state_35584;var statearr_35592_35612 = state_35584__$1;(statearr_35592_35612[2] = inst_35579);
(statearr_35592_35612[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 7))
{var inst_35566 = (state_35584[9]);var inst_35566__$1 = (state_35584[2]);var inst_35567 = (inst_35566__$1 == null);var inst_35568 = cljs.core.not.call(null,inst_35567);var state_35584__$1 = (function (){var statearr_35593 = state_35584;(statearr_35593[9] = inst_35566__$1);
return statearr_35593;
})();if(inst_35568)
{var statearr_35594_35613 = state_35584__$1;(statearr_35594_35613[1] = 8);
} else
{var statearr_35595_35614 = state_35584__$1;(statearr_35595_35614[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 8))
{var inst_35566 = (state_35584[9]);var state_35584__$1 = state_35584;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35584__$1,11,out,inst_35566);
} else
{if((state_val_35585 === 9))
{var state_35584__$1 = state_35584;var statearr_35596_35615 = state_35584__$1;(statearr_35596_35615[2] = null);
(statearr_35596_35615[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 10))
{var inst_35576 = (state_35584[2]);var state_35584__$1 = state_35584;var statearr_35597_35616 = state_35584__$1;(statearr_35597_35616[2] = inst_35576);
(statearr_35597_35616[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35585 === 11))
{var inst_35561 = (state_35584[7]);var inst_35571 = (state_35584[2]);var inst_35572 = (inst_35561 + 1);var inst_35561__$1 = inst_35572;var state_35584__$1 = (function (){var statearr_35598 = state_35584;(statearr_35598[10] = inst_35571);
(statearr_35598[7] = inst_35561__$1);
return statearr_35598;
})();var statearr_35599_35617 = state_35584__$1;(statearr_35599_35617[2] = null);
(statearr_35599_35617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35603 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35603[0] = state_machine__5507__auto__);
(statearr_35603[1] = 1);
return statearr_35603;
});
var state_machine__5507__auto____1 = (function (state_35584){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35584);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35604){if((e35604 instanceof Object))
{var ex__5510__auto__ = e35604;var statearr_35605_35618 = state_35584;(statearr_35605_35618[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35584);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35604;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35619 = state_35584;
state_35584 = G__35619;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35584){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35584);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35606 = f__5522__auto__.call(null);(statearr_35606[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35607);
return statearr_35606;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35716 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35691){var state_val_35692 = (state_35691[1]);if((state_val_35692 === 1))
{var inst_35668 = null;var state_35691__$1 = (function (){var statearr_35693 = state_35691;(statearr_35693[7] = inst_35668);
return statearr_35693;
})();var statearr_35694_35717 = state_35691__$1;(statearr_35694_35717[2] = null);
(statearr_35694_35717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 2))
{var state_35691__$1 = state_35691;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35691__$1,4,ch);
} else
{if((state_val_35692 === 3))
{var inst_35688 = (state_35691[2]);var inst_35689 = cljs.core.async.close_BANG_.call(null,out);var state_35691__$1 = (function (){var statearr_35695 = state_35691;(statearr_35695[8] = inst_35688);
return statearr_35695;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35691__$1,inst_35689);
} else
{if((state_val_35692 === 4))
{var inst_35671 = (state_35691[9]);var inst_35671__$1 = (state_35691[2]);var inst_35672 = (inst_35671__$1 == null);var inst_35673 = cljs.core.not.call(null,inst_35672);var state_35691__$1 = (function (){var statearr_35696 = state_35691;(statearr_35696[9] = inst_35671__$1);
return statearr_35696;
})();if(inst_35673)
{var statearr_35697_35718 = state_35691__$1;(statearr_35697_35718[1] = 5);
} else
{var statearr_35698_35719 = state_35691__$1;(statearr_35698_35719[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 5))
{var inst_35671 = (state_35691[9]);var inst_35668 = (state_35691[7]);var inst_35675 = cljs.core._EQ_.call(null,inst_35671,inst_35668);var state_35691__$1 = state_35691;if(inst_35675)
{var statearr_35699_35720 = state_35691__$1;(statearr_35699_35720[1] = 8);
} else
{var statearr_35700_35721 = state_35691__$1;(statearr_35700_35721[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 6))
{var state_35691__$1 = state_35691;var statearr_35702_35722 = state_35691__$1;(statearr_35702_35722[2] = null);
(statearr_35702_35722[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 7))
{var inst_35686 = (state_35691[2]);var state_35691__$1 = state_35691;var statearr_35703_35723 = state_35691__$1;(statearr_35703_35723[2] = inst_35686);
(statearr_35703_35723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 8))
{var inst_35668 = (state_35691[7]);var tmp35701 = inst_35668;var inst_35668__$1 = tmp35701;var state_35691__$1 = (function (){var statearr_35704 = state_35691;(statearr_35704[7] = inst_35668__$1);
return statearr_35704;
})();var statearr_35705_35724 = state_35691__$1;(statearr_35705_35724[2] = null);
(statearr_35705_35724[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 9))
{var inst_35671 = (state_35691[9]);var state_35691__$1 = state_35691;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35691__$1,11,out,inst_35671);
} else
{if((state_val_35692 === 10))
{var inst_35683 = (state_35691[2]);var state_35691__$1 = state_35691;var statearr_35706_35725 = state_35691__$1;(statearr_35706_35725[2] = inst_35683);
(statearr_35706_35725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35692 === 11))
{var inst_35671 = (state_35691[9]);var inst_35680 = (state_35691[2]);var inst_35668 = inst_35671;var state_35691__$1 = (function (){var statearr_35707 = state_35691;(statearr_35707[7] = inst_35668);
(statearr_35707[10] = inst_35680);
return statearr_35707;
})();var statearr_35708_35726 = state_35691__$1;(statearr_35708_35726[2] = null);
(statearr_35708_35726[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35712 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35712[0] = state_machine__5507__auto__);
(statearr_35712[1] = 1);
return statearr_35712;
});
var state_machine__5507__auto____1 = (function (state_35691){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35691);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35713){if((e35713 instanceof Object))
{var ex__5510__auto__ = e35713;var statearr_35714_35727 = state_35691;(statearr_35714_35727[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35691);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35728 = state_35691;
state_35691 = G__35728;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35691){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35691);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35715 = f__5522__auto__.call(null);(statearr_35715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35716);
return statearr_35715;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35863 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35833){var state_val_35834 = (state_35833[1]);if((state_val_35834 === 1))
{var inst_35796 = (new Array(n));var inst_35797 = inst_35796;var inst_35798 = 0;var state_35833__$1 = (function (){var statearr_35835 = state_35833;(statearr_35835[7] = inst_35798);
(statearr_35835[8] = inst_35797);
return statearr_35835;
})();var statearr_35836_35864 = state_35833__$1;(statearr_35836_35864[2] = null);
(statearr_35836_35864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 2))
{var state_35833__$1 = state_35833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35833__$1,4,ch);
} else
{if((state_val_35834 === 3))
{var inst_35831 = (state_35833[2]);var state_35833__$1 = state_35833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35833__$1,inst_35831);
} else
{if((state_val_35834 === 4))
{var inst_35801 = (state_35833[9]);var inst_35801__$1 = (state_35833[2]);var inst_35802 = (inst_35801__$1 == null);var inst_35803 = cljs.core.not.call(null,inst_35802);var state_35833__$1 = (function (){var statearr_35837 = state_35833;(statearr_35837[9] = inst_35801__$1);
return statearr_35837;
})();if(inst_35803)
{var statearr_35838_35865 = state_35833__$1;(statearr_35838_35865[1] = 5);
} else
{var statearr_35839_35866 = state_35833__$1;(statearr_35839_35866[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 5))
{var inst_35801 = (state_35833[9]);var inst_35806 = (state_35833[10]);var inst_35798 = (state_35833[7]);var inst_35797 = (state_35833[8]);var inst_35805 = (inst_35797[inst_35798] = inst_35801);var inst_35806__$1 = (inst_35798 + 1);var inst_35807 = (inst_35806__$1 < n);var state_35833__$1 = (function (){var statearr_35840 = state_35833;(statearr_35840[10] = inst_35806__$1);
(statearr_35840[11] = inst_35805);
return statearr_35840;
})();if(cljs.core.truth_(inst_35807))
{var statearr_35841_35867 = state_35833__$1;(statearr_35841_35867[1] = 8);
} else
{var statearr_35842_35868 = state_35833__$1;(statearr_35842_35868[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 6))
{var inst_35798 = (state_35833[7]);var inst_35819 = (inst_35798 > 0);var state_35833__$1 = state_35833;if(cljs.core.truth_(inst_35819))
{var statearr_35844_35869 = state_35833__$1;(statearr_35844_35869[1] = 12);
} else
{var statearr_35845_35870 = state_35833__$1;(statearr_35845_35870[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 7))
{var inst_35829 = (state_35833[2]);var state_35833__$1 = state_35833;var statearr_35846_35871 = state_35833__$1;(statearr_35846_35871[2] = inst_35829);
(statearr_35846_35871[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 8))
{var inst_35806 = (state_35833[10]);var inst_35797 = (state_35833[8]);var tmp35843 = inst_35797;var inst_35797__$1 = tmp35843;var inst_35798 = inst_35806;var state_35833__$1 = (function (){var statearr_35847 = state_35833;(statearr_35847[7] = inst_35798);
(statearr_35847[8] = inst_35797__$1);
return statearr_35847;
})();var statearr_35848_35872 = state_35833__$1;(statearr_35848_35872[2] = null);
(statearr_35848_35872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 9))
{var inst_35797 = (state_35833[8]);var inst_35811 = cljs.core.vec.call(null,inst_35797);var state_35833__$1 = state_35833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35833__$1,11,out,inst_35811);
} else
{if((state_val_35834 === 10))
{var inst_35817 = (state_35833[2]);var state_35833__$1 = state_35833;var statearr_35849_35873 = state_35833__$1;(statearr_35849_35873[2] = inst_35817);
(statearr_35849_35873[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 11))
{var inst_35813 = (state_35833[2]);var inst_35814 = (new Array(n));var inst_35797 = inst_35814;var inst_35798 = 0;var state_35833__$1 = (function (){var statearr_35850 = state_35833;(statearr_35850[12] = inst_35813);
(statearr_35850[7] = inst_35798);
(statearr_35850[8] = inst_35797);
return statearr_35850;
})();var statearr_35851_35874 = state_35833__$1;(statearr_35851_35874[2] = null);
(statearr_35851_35874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 12))
{var inst_35797 = (state_35833[8]);var inst_35821 = cljs.core.vec.call(null,inst_35797);var state_35833__$1 = state_35833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35833__$1,15,out,inst_35821);
} else
{if((state_val_35834 === 13))
{var state_35833__$1 = state_35833;var statearr_35852_35875 = state_35833__$1;(statearr_35852_35875[2] = null);
(statearr_35852_35875[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 14))
{var inst_35826 = (state_35833[2]);var inst_35827 = cljs.core.async.close_BANG_.call(null,out);var state_35833__$1 = (function (){var statearr_35853 = state_35833;(statearr_35853[13] = inst_35826);
return statearr_35853;
})();var statearr_35854_35876 = state_35833__$1;(statearr_35854_35876[2] = inst_35827);
(statearr_35854_35876[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35834 === 15))
{var inst_35823 = (state_35833[2]);var state_35833__$1 = state_35833;var statearr_35855_35877 = state_35833__$1;(statearr_35855_35877[2] = inst_35823);
(statearr_35855_35877[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35859 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35859[0] = state_machine__5507__auto__);
(statearr_35859[1] = 1);
return statearr_35859;
});
var state_machine__5507__auto____1 = (function (state_35833){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35833);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35860){if((e35860 instanceof Object))
{var ex__5510__auto__ = e35860;var statearr_35861_35878 = state_35833;(statearr_35861_35878[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35860;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35879 = state_35833;
state_35833 = G__35879;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35833){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35862 = f__5522__auto__.call(null);(statearr_35862[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35863);
return statearr_35862;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36022 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35992){var state_val_35993 = (state_35992[1]);if((state_val_35993 === 1))
{var inst_35951 = [];var inst_35952 = inst_35951;var inst_35953 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35992__$1 = (function (){var statearr_35994 = state_35992;(statearr_35994[7] = inst_35953);
(statearr_35994[8] = inst_35952);
return statearr_35994;
})();var statearr_35995_36023 = state_35992__$1;(statearr_35995_36023[2] = null);
(statearr_35995_36023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 2))
{var state_35992__$1 = state_35992;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35992__$1,4,ch);
} else
{if((state_val_35993 === 3))
{var inst_35990 = (state_35992[2]);var state_35992__$1 = state_35992;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35992__$1,inst_35990);
} else
{if((state_val_35993 === 4))
{var inst_35956 = (state_35992[9]);var inst_35956__$1 = (state_35992[2]);var inst_35957 = (inst_35956__$1 == null);var inst_35958 = cljs.core.not.call(null,inst_35957);var state_35992__$1 = (function (){var statearr_35996 = state_35992;(statearr_35996[9] = inst_35956__$1);
return statearr_35996;
})();if(inst_35958)
{var statearr_35997_36024 = state_35992__$1;(statearr_35997_36024[1] = 5);
} else
{var statearr_35998_36025 = state_35992__$1;(statearr_35998_36025[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 5))
{var inst_35953 = (state_35992[7]);var inst_35960 = (state_35992[10]);var inst_35956 = (state_35992[9]);var inst_35960__$1 = f.call(null,inst_35956);var inst_35961 = cljs.core._EQ_.call(null,inst_35960__$1,inst_35953);var inst_35962 = cljs.core.keyword_identical_QMARK_.call(null,inst_35953,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35963 = (inst_35961) || (inst_35962);var state_35992__$1 = (function (){var statearr_35999 = state_35992;(statearr_35999[10] = inst_35960__$1);
return statearr_35999;
})();if(cljs.core.truth_(inst_35963))
{var statearr_36000_36026 = state_35992__$1;(statearr_36000_36026[1] = 8);
} else
{var statearr_36001_36027 = state_35992__$1;(statearr_36001_36027[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 6))
{var inst_35952 = (state_35992[8]);var inst_35977 = inst_35952.length;var inst_35978 = (inst_35977 > 0);var state_35992__$1 = state_35992;if(cljs.core.truth_(inst_35978))
{var statearr_36003_36028 = state_35992__$1;(statearr_36003_36028[1] = 12);
} else
{var statearr_36004_36029 = state_35992__$1;(statearr_36004_36029[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 7))
{var inst_35988 = (state_35992[2]);var state_35992__$1 = state_35992;var statearr_36005_36030 = state_35992__$1;(statearr_36005_36030[2] = inst_35988);
(statearr_36005_36030[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 8))
{var inst_35960 = (state_35992[10]);var inst_35956 = (state_35992[9]);var inst_35952 = (state_35992[8]);var inst_35965 = inst_35952.push(inst_35956);var tmp36002 = inst_35952;var inst_35952__$1 = tmp36002;var inst_35953 = inst_35960;var state_35992__$1 = (function (){var statearr_36006 = state_35992;(statearr_36006[11] = inst_35965);
(statearr_36006[7] = inst_35953);
(statearr_36006[8] = inst_35952__$1);
return statearr_36006;
})();var statearr_36007_36031 = state_35992__$1;(statearr_36007_36031[2] = null);
(statearr_36007_36031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 9))
{var inst_35952 = (state_35992[8]);var inst_35968 = cljs.core.vec.call(null,inst_35952);var state_35992__$1 = state_35992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35992__$1,11,out,inst_35968);
} else
{if((state_val_35993 === 10))
{var inst_35975 = (state_35992[2]);var state_35992__$1 = state_35992;var statearr_36008_36032 = state_35992__$1;(statearr_36008_36032[2] = inst_35975);
(statearr_36008_36032[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 11))
{var inst_35960 = (state_35992[10]);var inst_35956 = (state_35992[9]);var inst_35970 = (state_35992[2]);var inst_35971 = [];var inst_35972 = inst_35971.push(inst_35956);var inst_35952 = inst_35971;var inst_35953 = inst_35960;var state_35992__$1 = (function (){var statearr_36009 = state_35992;(statearr_36009[12] = inst_35970);
(statearr_36009[13] = inst_35972);
(statearr_36009[7] = inst_35953);
(statearr_36009[8] = inst_35952);
return statearr_36009;
})();var statearr_36010_36033 = state_35992__$1;(statearr_36010_36033[2] = null);
(statearr_36010_36033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 12))
{var inst_35952 = (state_35992[8]);var inst_35980 = cljs.core.vec.call(null,inst_35952);var state_35992__$1 = state_35992;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35992__$1,15,out,inst_35980);
} else
{if((state_val_35993 === 13))
{var state_35992__$1 = state_35992;var statearr_36011_36034 = state_35992__$1;(statearr_36011_36034[2] = null);
(statearr_36011_36034[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 14))
{var inst_35985 = (state_35992[2]);var inst_35986 = cljs.core.async.close_BANG_.call(null,out);var state_35992__$1 = (function (){var statearr_36012 = state_35992;(statearr_36012[14] = inst_35985);
return statearr_36012;
})();var statearr_36013_36035 = state_35992__$1;(statearr_36013_36035[2] = inst_35986);
(statearr_36013_36035[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35993 === 15))
{var inst_35982 = (state_35992[2]);var state_35992__$1 = state_35992;var statearr_36014_36036 = state_35992__$1;(statearr_36014_36036[2] = inst_35982);
(statearr_36014_36036[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36018 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36018[0] = state_machine__5507__auto__);
(statearr_36018[1] = 1);
return statearr_36018;
});
var state_machine__5507__auto____1 = (function (state_35992){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35992);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36019){if((e36019 instanceof Object))
{var ex__5510__auto__ = e36019;var statearr_36020_36037 = state_35992;(statearr_36020_36037[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35992);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36019;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36038 = state_35992;
state_35992 = G__36038;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35992){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35992);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36021 = f__5522__auto__.call(null);(statearr_36021[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36022);
return statearr_36021;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
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
