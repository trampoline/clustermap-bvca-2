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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12534 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12534 = (function (f,fn_handler,meta12535){
this.f = f;
this.fn_handler = fn_handler;
this.meta12535 = meta12535;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12534.cljs$lang$type = true;
cljs.core.async.t12534.cljs$lang$ctorStr = "cljs.core.async/t12534";
cljs.core.async.t12534.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12534");
});
cljs.core.async.t12534.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12534.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12534.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12534.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12536){var self__ = this;
var _12536__$1 = this;return self__.meta12535;
});
cljs.core.async.t12534.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12536,meta12535__$1){var self__ = this;
var _12536__$1 = this;return (new cljs.core.async.t12534(self__.f,self__.fn_handler,meta12535__$1));
});
cljs.core.async.__GT_t12534 = (function __GT_t12534(f__$1,fn_handler__$1,meta12535){return (new cljs.core.async.t12534(f__$1,fn_handler__$1,meta12535));
});
}
return (new cljs.core.async.t12534(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12538 = buff;if(G__12538)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12538.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12538.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12538);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12538);
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
{var val_12539 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12539);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12539);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12540 = n;var x_12541 = 0;while(true){
if((x_12541 < n__4248__auto___12540))
{(a[x_12541] = 0);
{
var G__12542 = (x_12541 + 1);
x_12541 = G__12542;
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
var G__12543 = (i + 1);
i = G__12543;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12547 = (function (flag,alt_flag,meta12548){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12548 = meta12548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12547.cljs$lang$type = true;
cljs.core.async.t12547.cljs$lang$ctorStr = "cljs.core.async/t12547";
cljs.core.async.t12547.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12547");
});
cljs.core.async.t12547.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12549){var self__ = this;
var _12549__$1 = this;return self__.meta12548;
});
cljs.core.async.t12547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12549,meta12548__$1){var self__ = this;
var _12549__$1 = this;return (new cljs.core.async.t12547(self__.flag,self__.alt_flag,meta12548__$1));
});
cljs.core.async.__GT_t12547 = (function __GT_t12547(flag__$1,alt_flag__$1,meta12548){return (new cljs.core.async.t12547(flag__$1,alt_flag__$1,meta12548));
});
}
return (new cljs.core.async.t12547(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12553 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12553 = (function (cb,flag,alt_handler,meta12554){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12554 = meta12554;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12553.cljs$lang$type = true;
cljs.core.async.t12553.cljs$lang$ctorStr = "cljs.core.async/t12553";
cljs.core.async.t12553.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12553");
});
cljs.core.async.t12553.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12553.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12553.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12553.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12555){var self__ = this;
var _12555__$1 = this;return self__.meta12554;
});
cljs.core.async.t12553.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12555,meta12554__$1){var self__ = this;
var _12555__$1 = this;return (new cljs.core.async.t12553(self__.cb,self__.flag,self__.alt_handler,meta12554__$1));
});
cljs.core.async.__GT_t12553 = (function __GT_t12553(cb__$1,flag__$1,alt_handler__$1,meta12554){return (new cljs.core.async.t12553(cb__$1,flag__$1,alt_handler__$1,meta12554));
});
}
return (new cljs.core.async.t12553(cb,flag,alt_handler,null));
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
return (function (p1__12556_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12556_SHARP_,port], null));
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
var G__12557 = (i + 1);
i = G__12557;
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
var alts_BANG___delegate = function (ports,p__12558){var map__12560 = p__12558;var map__12560__$1 = ((cljs.core.seq_QMARK_.call(null,map__12560))?cljs.core.apply.call(null,cljs.core.hash_map,map__12560):map__12560);var opts = map__12560__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12558 = null;if (arguments.length > 1) {
  p__12558 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12558);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12561){
var ports = cljs.core.first(arglist__12561);
var p__12558 = cljs.core.rest(arglist__12561);
return alts_BANG___delegate(ports,p__12558);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12569 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12569 = (function (ch,f,map_LT_,meta12570){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12570 = meta12570;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12569.cljs$lang$type = true;
cljs.core.async.t12569.cljs$lang$ctorStr = "cljs.core.async/t12569";
cljs.core.async.t12569.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12569");
});
cljs.core.async.t12569.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12569.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12569.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12569.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12572 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12572 = (function (fn1,_,meta12570,ch,f,map_LT_,meta12573){
this.fn1 = fn1;
this._ = _;
this.meta12570 = meta12570;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12573 = meta12573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12572.cljs$lang$type = true;
cljs.core.async.t12572.cljs$lang$ctorStr = "cljs.core.async/t12572";
cljs.core.async.t12572.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12572");
});
cljs.core.async.t12572.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12572.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12572.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12572.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12562_SHARP_){return f1.call(null,(((p1__12562_SHARP_ == null))?null:self__.f.call(null,p1__12562_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12574){var self__ = this;
var _12574__$1 = this;return self__.meta12573;
});
cljs.core.async.t12572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12574,meta12573__$1){var self__ = this;
var _12574__$1 = this;return (new cljs.core.async.t12572(self__.fn1,self__._,self__.meta12570,self__.ch,self__.f,self__.map_LT_,meta12573__$1));
});
cljs.core.async.__GT_t12572 = (function __GT_t12572(fn1__$1,___$2,meta12570__$1,ch__$2,f__$2,map_LT___$2,meta12573){return (new cljs.core.async.t12572(fn1__$1,___$2,meta12570__$1,ch__$2,f__$2,map_LT___$2,meta12573));
});
}
return (new cljs.core.async.t12572(fn1,___$1,self__.meta12570,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12569.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12569.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12569.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12571){var self__ = this;
var _12571__$1 = this;return self__.meta12570;
});
cljs.core.async.t12569.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12571,meta12570__$1){var self__ = this;
var _12571__$1 = this;return (new cljs.core.async.t12569(self__.ch,self__.f,self__.map_LT_,meta12570__$1));
});
cljs.core.async.__GT_t12569 = (function __GT_t12569(ch__$1,f__$1,map_LT___$1,meta12570){return (new cljs.core.async.t12569(ch__$1,f__$1,map_LT___$1,meta12570));
});
}
return (new cljs.core.async.t12569(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12578 = (function (ch,f,map_GT_,meta12579){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12579 = meta12579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12578.cljs$lang$type = true;
cljs.core.async.t12578.cljs$lang$ctorStr = "cljs.core.async/t12578";
cljs.core.async.t12578.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12578");
});
cljs.core.async.t12578.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12578.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12578.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12580){var self__ = this;
var _12580__$1 = this;return self__.meta12579;
});
cljs.core.async.t12578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12580,meta12579__$1){var self__ = this;
var _12580__$1 = this;return (new cljs.core.async.t12578(self__.ch,self__.f,self__.map_GT_,meta12579__$1));
});
cljs.core.async.__GT_t12578 = (function __GT_t12578(ch__$1,f__$1,map_GT___$1,meta12579){return (new cljs.core.async.t12578(ch__$1,f__$1,map_GT___$1,meta12579));
});
}
return (new cljs.core.async.t12578(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12584 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12584 = (function (ch,p,filter_GT_,meta12585){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12585 = meta12585;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12584.cljs$lang$type = true;
cljs.core.async.t12584.cljs$lang$ctorStr = "cljs.core.async/t12584";
cljs.core.async.t12584.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12584");
});
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12584.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12586){var self__ = this;
var _12586__$1 = this;return self__.meta12585;
});
cljs.core.async.t12584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12586,meta12585__$1){var self__ = this;
var _12586__$1 = this;return (new cljs.core.async.t12584(self__.ch,self__.p,self__.filter_GT_,meta12585__$1));
});
cljs.core.async.__GT_t12584 = (function __GT_t12584(ch__$1,p__$1,filter_GT___$1,meta12585){return (new cljs.core.async.t12584(ch__$1,p__$1,filter_GT___$1,meta12585));
});
}
return (new cljs.core.async.t12584(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12669 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12648){var state_val_12649 = (state_12648[1]);if((state_val_12649 === 1))
{var state_12648__$1 = state_12648;var statearr_12650_12670 = state_12648__$1;(statearr_12650_12670[2] = null);
(statearr_12650_12670[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 2))
{var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12648__$1,4,ch);
} else
{if((state_val_12649 === 3))
{var inst_12646 = (state_12648[2]);var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12648__$1,inst_12646);
} else
{if((state_val_12649 === 4))
{var inst_12630 = (state_12648[7]);var inst_12630__$1 = (state_12648[2]);var inst_12631 = (inst_12630__$1 == null);var state_12648__$1 = (function (){var statearr_12651 = state_12648;(statearr_12651[7] = inst_12630__$1);
return statearr_12651;
})();if(cljs.core.truth_(inst_12631))
{var statearr_12652_12671 = state_12648__$1;(statearr_12652_12671[1] = 5);
} else
{var statearr_12653_12672 = state_12648__$1;(statearr_12653_12672[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 5))
{var inst_12633 = cljs.core.async.close_BANG_.call(null,out);var state_12648__$1 = state_12648;var statearr_12654_12673 = state_12648__$1;(statearr_12654_12673[2] = inst_12633);
(statearr_12654_12673[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 6))
{var inst_12630 = (state_12648[7]);var inst_12635 = p.call(null,inst_12630);var state_12648__$1 = state_12648;if(cljs.core.truth_(inst_12635))
{var statearr_12655_12674 = state_12648__$1;(statearr_12655_12674[1] = 8);
} else
{var statearr_12656_12675 = state_12648__$1;(statearr_12656_12675[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 7))
{var inst_12644 = (state_12648[2]);var state_12648__$1 = state_12648;var statearr_12657_12676 = state_12648__$1;(statearr_12657_12676[2] = inst_12644);
(statearr_12657_12676[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 8))
{var inst_12630 = (state_12648[7]);var state_12648__$1 = state_12648;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12648__$1,11,out,inst_12630);
} else
{if((state_val_12649 === 9))
{var state_12648__$1 = state_12648;var statearr_12658_12677 = state_12648__$1;(statearr_12658_12677[2] = null);
(statearr_12658_12677[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 10))
{var inst_12641 = (state_12648[2]);var state_12648__$1 = (function (){var statearr_12659 = state_12648;(statearr_12659[8] = inst_12641);
return statearr_12659;
})();var statearr_12660_12678 = state_12648__$1;(statearr_12660_12678[2] = null);
(statearr_12660_12678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12649 === 11))
{var inst_12638 = (state_12648[2]);var state_12648__$1 = state_12648;var statearr_12661_12679 = state_12648__$1;(statearr_12661_12679[2] = inst_12638);
(statearr_12661_12679[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12665 = [null,null,null,null,null,null,null,null,null];(statearr_12665[0] = state_machine__5507__auto__);
(statearr_12665[1] = 1);
return statearr_12665;
});
var state_machine__5507__auto____1 = (function (state_12648){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12648);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12666){if((e12666 instanceof Object))
{var ex__5510__auto__ = e12666;var statearr_12667_12680 = state_12648;(statearr_12667_12680[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12648);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12666;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12681 = state_12648;
state_12648 = G__12681;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12648){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12668 = f__5522__auto__.call(null);(statearr_12668[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12669);
return statearr_12668;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12833){var state_val_12834 = (state_12833[1]);if((state_val_12834 === 1))
{var state_12833__$1 = state_12833;var statearr_12835_12872 = state_12833__$1;(statearr_12835_12872[2] = null);
(statearr_12835_12872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 2))
{var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12833__$1,4,in$);
} else
{if((state_val_12834 === 3))
{var inst_12831 = (state_12833[2]);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12833__$1,inst_12831);
} else
{if((state_val_12834 === 4))
{var inst_12779 = (state_12833[7]);var inst_12779__$1 = (state_12833[2]);var inst_12780 = (inst_12779__$1 == null);var state_12833__$1 = (function (){var statearr_12836 = state_12833;(statearr_12836[7] = inst_12779__$1);
return statearr_12836;
})();if(cljs.core.truth_(inst_12780))
{var statearr_12837_12873 = state_12833__$1;(statearr_12837_12873[1] = 5);
} else
{var statearr_12838_12874 = state_12833__$1;(statearr_12838_12874[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 5))
{var inst_12782 = cljs.core.async.close_BANG_.call(null,out);var state_12833__$1 = state_12833;var statearr_12839_12875 = state_12833__$1;(statearr_12839_12875[2] = inst_12782);
(statearr_12839_12875[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 6))
{var inst_12779 = (state_12833[7]);var inst_12784 = f.call(null,inst_12779);var inst_12789 = cljs.core.seq.call(null,inst_12784);var inst_12790 = inst_12789;var inst_12791 = null;var inst_12792 = 0;var inst_12793 = 0;var state_12833__$1 = (function (){var statearr_12840 = state_12833;(statearr_12840[8] = inst_12792);
(statearr_12840[9] = inst_12793);
(statearr_12840[10] = inst_12790);
(statearr_12840[11] = inst_12791);
return statearr_12840;
})();var statearr_12841_12876 = state_12833__$1;(statearr_12841_12876[2] = null);
(statearr_12841_12876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 7))
{var inst_12829 = (state_12833[2]);var state_12833__$1 = state_12833;var statearr_12842_12877 = state_12833__$1;(statearr_12842_12877[2] = inst_12829);
(statearr_12842_12877[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 8))
{var inst_12792 = (state_12833[8]);var inst_12793 = (state_12833[9]);var inst_12795 = (inst_12793 < inst_12792);var inst_12796 = inst_12795;var state_12833__$1 = state_12833;if(cljs.core.truth_(inst_12796))
{var statearr_12843_12878 = state_12833__$1;(statearr_12843_12878[1] = 10);
} else
{var statearr_12844_12879 = state_12833__$1;(statearr_12844_12879[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 9))
{var inst_12826 = (state_12833[2]);var state_12833__$1 = (function (){var statearr_12845 = state_12833;(statearr_12845[12] = inst_12826);
return statearr_12845;
})();var statearr_12846_12880 = state_12833__$1;(statearr_12846_12880[2] = null);
(statearr_12846_12880[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 10))
{var inst_12793 = (state_12833[9]);var inst_12791 = (state_12833[11]);var inst_12798 = cljs.core._nth.call(null,inst_12791,inst_12793);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12833__$1,13,out,inst_12798);
} else
{if((state_val_12834 === 11))
{var inst_12790 = (state_12833[10]);var inst_12804 = (state_12833[13]);var inst_12804__$1 = cljs.core.seq.call(null,inst_12790);var state_12833__$1 = (function (){var statearr_12850 = state_12833;(statearr_12850[13] = inst_12804__$1);
return statearr_12850;
})();if(inst_12804__$1)
{var statearr_12851_12881 = state_12833__$1;(statearr_12851_12881[1] = 14);
} else
{var statearr_12852_12882 = state_12833__$1;(statearr_12852_12882[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 12))
{var inst_12824 = (state_12833[2]);var state_12833__$1 = state_12833;var statearr_12853_12883 = state_12833__$1;(statearr_12853_12883[2] = inst_12824);
(statearr_12853_12883[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 13))
{var inst_12792 = (state_12833[8]);var inst_12793 = (state_12833[9]);var inst_12790 = (state_12833[10]);var inst_12791 = (state_12833[11]);var inst_12800 = (state_12833[2]);var inst_12801 = (inst_12793 + 1);var tmp12847 = inst_12792;var tmp12848 = inst_12790;var tmp12849 = inst_12791;var inst_12790__$1 = tmp12848;var inst_12791__$1 = tmp12849;var inst_12792__$1 = tmp12847;var inst_12793__$1 = inst_12801;var state_12833__$1 = (function (){var statearr_12854 = state_12833;(statearr_12854[8] = inst_12792__$1);
(statearr_12854[9] = inst_12793__$1);
(statearr_12854[10] = inst_12790__$1);
(statearr_12854[11] = inst_12791__$1);
(statearr_12854[14] = inst_12800);
return statearr_12854;
})();var statearr_12855_12884 = state_12833__$1;(statearr_12855_12884[2] = null);
(statearr_12855_12884[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 14))
{var inst_12804 = (state_12833[13]);var inst_12806 = cljs.core.chunked_seq_QMARK_.call(null,inst_12804);var state_12833__$1 = state_12833;if(inst_12806)
{var statearr_12856_12885 = state_12833__$1;(statearr_12856_12885[1] = 17);
} else
{var statearr_12857_12886 = state_12833__$1;(statearr_12857_12886[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 15))
{var state_12833__$1 = state_12833;var statearr_12858_12887 = state_12833__$1;(statearr_12858_12887[2] = null);
(statearr_12858_12887[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 16))
{var inst_12822 = (state_12833[2]);var state_12833__$1 = state_12833;var statearr_12859_12888 = state_12833__$1;(statearr_12859_12888[2] = inst_12822);
(statearr_12859_12888[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 17))
{var inst_12804 = (state_12833[13]);var inst_12808 = cljs.core.chunk_first.call(null,inst_12804);var inst_12809 = cljs.core.chunk_rest.call(null,inst_12804);var inst_12810 = cljs.core.count.call(null,inst_12808);var inst_12790 = inst_12809;var inst_12791 = inst_12808;var inst_12792 = inst_12810;var inst_12793 = 0;var state_12833__$1 = (function (){var statearr_12860 = state_12833;(statearr_12860[8] = inst_12792);
(statearr_12860[9] = inst_12793);
(statearr_12860[10] = inst_12790);
(statearr_12860[11] = inst_12791);
return statearr_12860;
})();var statearr_12861_12889 = state_12833__$1;(statearr_12861_12889[2] = null);
(statearr_12861_12889[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 18))
{var inst_12804 = (state_12833[13]);var inst_12813 = cljs.core.first.call(null,inst_12804);var state_12833__$1 = state_12833;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12833__$1,20,out,inst_12813);
} else
{if((state_val_12834 === 19))
{var inst_12819 = (state_12833[2]);var state_12833__$1 = state_12833;var statearr_12862_12890 = state_12833__$1;(statearr_12862_12890[2] = inst_12819);
(statearr_12862_12890[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12834 === 20))
{var inst_12804 = (state_12833[13]);var inst_12815 = (state_12833[2]);var inst_12816 = cljs.core.next.call(null,inst_12804);var inst_12790 = inst_12816;var inst_12791 = null;var inst_12792 = 0;var inst_12793 = 0;var state_12833__$1 = (function (){var statearr_12863 = state_12833;(statearr_12863[8] = inst_12792);
(statearr_12863[9] = inst_12793);
(statearr_12863[10] = inst_12790);
(statearr_12863[11] = inst_12791);
(statearr_12863[15] = inst_12815);
return statearr_12863;
})();var statearr_12864_12891 = state_12833__$1;(statearr_12864_12891[2] = null);
(statearr_12864_12891[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12868[0] = state_machine__5507__auto__);
(statearr_12868[1] = 1);
return statearr_12868;
});
var state_machine__5507__auto____1 = (function (state_12833){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12833);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12869){if((e12869 instanceof Object))
{var ex__5510__auto__ = e12869;var statearr_12870_12892 = state_12833;(statearr_12870_12892[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12833);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12869;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12893 = state_12833;
state_12833 = G__12893;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12833){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12833);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12871 = f__5522__auto__.call(null);(statearr_12871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12871;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12974 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12953){var state_val_12954 = (state_12953[1]);if((state_val_12954 === 1))
{var state_12953__$1 = state_12953;var statearr_12955_12975 = state_12953__$1;(statearr_12955_12975[2] = null);
(statearr_12955_12975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 2))
{var state_12953__$1 = state_12953;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12953__$1,4,from);
} else
{if((state_val_12954 === 3))
{var inst_12951 = (state_12953[2]);var state_12953__$1 = state_12953;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12953__$1,inst_12951);
} else
{if((state_val_12954 === 4))
{var inst_12936 = (state_12953[7]);var inst_12936__$1 = (state_12953[2]);var inst_12937 = (inst_12936__$1 == null);var state_12953__$1 = (function (){var statearr_12956 = state_12953;(statearr_12956[7] = inst_12936__$1);
return statearr_12956;
})();if(cljs.core.truth_(inst_12937))
{var statearr_12957_12976 = state_12953__$1;(statearr_12957_12976[1] = 5);
} else
{var statearr_12958_12977 = state_12953__$1;(statearr_12958_12977[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 5))
{var state_12953__$1 = state_12953;if(cljs.core.truth_(close_QMARK_))
{var statearr_12959_12978 = state_12953__$1;(statearr_12959_12978[1] = 8);
} else
{var statearr_12960_12979 = state_12953__$1;(statearr_12960_12979[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 6))
{var inst_12936 = (state_12953[7]);var state_12953__$1 = state_12953;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12953__$1,11,to,inst_12936);
} else
{if((state_val_12954 === 7))
{var inst_12949 = (state_12953[2]);var state_12953__$1 = state_12953;var statearr_12961_12980 = state_12953__$1;(statearr_12961_12980[2] = inst_12949);
(statearr_12961_12980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 8))
{var inst_12940 = cljs.core.async.close_BANG_.call(null,to);var state_12953__$1 = state_12953;var statearr_12962_12981 = state_12953__$1;(statearr_12962_12981[2] = inst_12940);
(statearr_12962_12981[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 9))
{var state_12953__$1 = state_12953;var statearr_12963_12982 = state_12953__$1;(statearr_12963_12982[2] = null);
(statearr_12963_12982[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 10))
{var inst_12943 = (state_12953[2]);var state_12953__$1 = state_12953;var statearr_12964_12983 = state_12953__$1;(statearr_12964_12983[2] = inst_12943);
(statearr_12964_12983[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12954 === 11))
{var inst_12946 = (state_12953[2]);var state_12953__$1 = (function (){var statearr_12965 = state_12953;(statearr_12965[8] = inst_12946);
return statearr_12965;
})();var statearr_12966_12984 = state_12953__$1;(statearr_12966_12984[2] = null);
(statearr_12966_12984[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12970 = [null,null,null,null,null,null,null,null,null];(statearr_12970[0] = state_machine__5507__auto__);
(statearr_12970[1] = 1);
return statearr_12970;
});
var state_machine__5507__auto____1 = (function (state_12953){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12953);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12971){if((e12971 instanceof Object))
{var ex__5510__auto__ = e12971;var statearr_12972_12985 = state_12953;(statearr_12972_12985[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12953);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12986 = state_12953;
state_12953 = G__12986;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12953){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12953);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12973 = f__5522__auto__.call(null);(statearr_12973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12974);
return statearr_12973;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13073 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13051){var state_val_13052 = (state_13051[1]);if((state_val_13052 === 1))
{var state_13051__$1 = state_13051;var statearr_13053_13074 = state_13051__$1;(statearr_13053_13074[2] = null);
(statearr_13053_13074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13052 === 2))
{var state_13051__$1 = state_13051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13051__$1,4,ch);
} else
{if((state_val_13052 === 3))
{var inst_13049 = (state_13051[2]);var state_13051__$1 = state_13051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13051__$1,inst_13049);
} else
{if((state_val_13052 === 4))
{var inst_13032 = (state_13051[7]);var inst_13032__$1 = (state_13051[2]);var inst_13033 = (inst_13032__$1 == null);var state_13051__$1 = (function (){var statearr_13054 = state_13051;(statearr_13054[7] = inst_13032__$1);
return statearr_13054;
})();if(cljs.core.truth_(inst_13033))
{var statearr_13055_13075 = state_13051__$1;(statearr_13055_13075[1] = 5);
} else
{var statearr_13056_13076 = state_13051__$1;(statearr_13056_13076[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13052 === 5))
{var inst_13035 = cljs.core.async.close_BANG_.call(null,tc);var inst_13036 = cljs.core.async.close_BANG_.call(null,fc);var state_13051__$1 = (function (){var statearr_13057 = state_13051;(statearr_13057[8] = inst_13035);
return statearr_13057;
})();var statearr_13058_13077 = state_13051__$1;(statearr_13058_13077[2] = inst_13036);
(statearr_13058_13077[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13052 === 6))
{var inst_13032 = (state_13051[7]);var inst_13038 = p.call(null,inst_13032);var state_13051__$1 = state_13051;if(cljs.core.truth_(inst_13038))
{var statearr_13059_13078 = state_13051__$1;(statearr_13059_13078[1] = 9);
} else
{var statearr_13060_13079 = state_13051__$1;(statearr_13060_13079[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13052 === 7))
{var inst_13047 = (state_13051[2]);var state_13051__$1 = state_13051;var statearr_13061_13080 = state_13051__$1;(statearr_13061_13080[2] = inst_13047);
(statearr_13061_13080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13052 === 8))
{var inst_13044 = (state_13051[2]);var state_13051__$1 = (function (){var statearr_13062 = state_13051;(statearr_13062[9] = inst_13044);
return statearr_13062;
})();var statearr_13063_13081 = state_13051__$1;(statearr_13063_13081[2] = null);
(statearr_13063_13081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13052 === 9))
{var state_13051__$1 = state_13051;var statearr_13064_13082 = state_13051__$1;(statearr_13064_13082[2] = tc);
(statearr_13064_13082[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13052 === 10))
{var state_13051__$1 = state_13051;var statearr_13065_13083 = state_13051__$1;(statearr_13065_13083[2] = fc);
(statearr_13065_13083[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13052 === 11))
{var inst_13032 = (state_13051[7]);var inst_13042 = (state_13051[2]);var state_13051__$1 = state_13051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13051__$1,8,inst_13042,inst_13032);
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
var state_machine__5507__auto____0 = (function (){var statearr_13069 = [null,null,null,null,null,null,null,null,null,null];(statearr_13069[0] = state_machine__5507__auto__);
(statearr_13069[1] = 1);
return statearr_13069;
});
var state_machine__5507__auto____1 = (function (state_13051){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13070){if((e13070 instanceof Object))
{var ex__5510__auto__ = e13070;var statearr_13071_13084 = state_13051;(statearr_13071_13084[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13070;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13085 = state_13051;
state_13051 = G__13085;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13051){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13072 = f__5522__auto__.call(null);(statearr_13072[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13073);
return statearr_13072;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13132){var state_val_13133 = (state_13132[1]);if((state_val_13133 === 7))
{var inst_13128 = (state_13132[2]);var state_13132__$1 = state_13132;var statearr_13134_13150 = state_13132__$1;(statearr_13134_13150[2] = inst_13128);
(statearr_13134_13150[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13133 === 6))
{var inst_13118 = (state_13132[7]);var inst_13121 = (state_13132[8]);var inst_13125 = f.call(null,inst_13118,inst_13121);var inst_13118__$1 = inst_13125;var state_13132__$1 = (function (){var statearr_13135 = state_13132;(statearr_13135[7] = inst_13118__$1);
return statearr_13135;
})();var statearr_13136_13151 = state_13132__$1;(statearr_13136_13151[2] = null);
(statearr_13136_13151[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13133 === 5))
{var inst_13118 = (state_13132[7]);var state_13132__$1 = state_13132;var statearr_13137_13152 = state_13132__$1;(statearr_13137_13152[2] = inst_13118);
(statearr_13137_13152[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13133 === 4))
{var inst_13121 = (state_13132[8]);var inst_13121__$1 = (state_13132[2]);var inst_13122 = (inst_13121__$1 == null);var state_13132__$1 = (function (){var statearr_13138 = state_13132;(statearr_13138[8] = inst_13121__$1);
return statearr_13138;
})();if(cljs.core.truth_(inst_13122))
{var statearr_13139_13153 = state_13132__$1;(statearr_13139_13153[1] = 5);
} else
{var statearr_13140_13154 = state_13132__$1;(statearr_13140_13154[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13133 === 3))
{var inst_13130 = (state_13132[2]);var state_13132__$1 = state_13132;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13132__$1,inst_13130);
} else
{if((state_val_13133 === 2))
{var state_13132__$1 = state_13132;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13132__$1,4,ch);
} else
{if((state_val_13133 === 1))
{var inst_13118 = init;var state_13132__$1 = (function (){var statearr_13141 = state_13132;(statearr_13141[7] = inst_13118);
return statearr_13141;
})();var statearr_13142_13155 = state_13132__$1;(statearr_13142_13155[2] = null);
(statearr_13142_13155[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13146 = [null,null,null,null,null,null,null,null,null];(statearr_13146[0] = state_machine__5507__auto__);
(statearr_13146[1] = 1);
return statearr_13146;
});
var state_machine__5507__auto____1 = (function (state_13132){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13132);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13147){if((e13147 instanceof Object))
{var ex__5510__auto__ = e13147;var statearr_13148_13156 = state_13132;(statearr_13148_13156[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13132);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13147;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13157 = state_13132;
state_13132 = G__13157;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13132){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13132);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13149 = f__5522__auto__.call(null);(statearr_13149[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13149;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13219){var state_val_13220 = (state_13219[1]);if((state_val_13220 === 1))
{var inst_13199 = cljs.core.seq.call(null,coll);var inst_13200 = inst_13199;var state_13219__$1 = (function (){var statearr_13221 = state_13219;(statearr_13221[7] = inst_13200);
return statearr_13221;
})();var statearr_13222_13240 = state_13219__$1;(statearr_13222_13240[2] = null);
(statearr_13222_13240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 2))
{var inst_13200 = (state_13219[7]);var state_13219__$1 = state_13219;if(cljs.core.truth_(inst_13200))
{var statearr_13223_13241 = state_13219__$1;(statearr_13223_13241[1] = 4);
} else
{var statearr_13224_13242 = state_13219__$1;(statearr_13224_13242[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 3))
{var inst_13217 = (state_13219[2]);var state_13219__$1 = state_13219;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13219__$1,inst_13217);
} else
{if((state_val_13220 === 4))
{var inst_13200 = (state_13219[7]);var inst_13203 = cljs.core.first.call(null,inst_13200);var state_13219__$1 = state_13219;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13219__$1,7,ch,inst_13203);
} else
{if((state_val_13220 === 5))
{var state_13219__$1 = state_13219;if(cljs.core.truth_(close_QMARK_))
{var statearr_13225_13243 = state_13219__$1;(statearr_13225_13243[1] = 8);
} else
{var statearr_13226_13244 = state_13219__$1;(statearr_13226_13244[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 6))
{var inst_13215 = (state_13219[2]);var state_13219__$1 = state_13219;var statearr_13227_13245 = state_13219__$1;(statearr_13227_13245[2] = inst_13215);
(statearr_13227_13245[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 7))
{var inst_13200 = (state_13219[7]);var inst_13205 = (state_13219[2]);var inst_13206 = cljs.core.next.call(null,inst_13200);var inst_13200__$1 = inst_13206;var state_13219__$1 = (function (){var statearr_13228 = state_13219;(statearr_13228[7] = inst_13200__$1);
(statearr_13228[8] = inst_13205);
return statearr_13228;
})();var statearr_13229_13246 = state_13219__$1;(statearr_13229_13246[2] = null);
(statearr_13229_13246[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 8))
{var inst_13210 = cljs.core.async.close_BANG_.call(null,ch);var state_13219__$1 = state_13219;var statearr_13230_13247 = state_13219__$1;(statearr_13230_13247[2] = inst_13210);
(statearr_13230_13247[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 9))
{var state_13219__$1 = state_13219;var statearr_13231_13248 = state_13219__$1;(statearr_13231_13248[2] = null);
(statearr_13231_13248[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13220 === 10))
{var inst_13213 = (state_13219[2]);var state_13219__$1 = state_13219;var statearr_13232_13249 = state_13219__$1;(statearr_13232_13249[2] = inst_13213);
(statearr_13232_13249[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13236 = [null,null,null,null,null,null,null,null,null];(statearr_13236[0] = state_machine__5507__auto__);
(statearr_13236[1] = 1);
return statearr_13236;
});
var state_machine__5507__auto____1 = (function (state_13219){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13219);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13237){if((e13237 instanceof Object))
{var ex__5510__auto__ = e13237;var statearr_13238_13250 = state_13219;(statearr_13238_13250[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13219);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13237;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13251 = state_13219;
state_13219 = G__13251;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13219){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13239 = f__5522__auto__.call(null);(statearr_13239[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13239;
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
cljs.core.async.Mux = (function (){var obj13253 = {};return obj13253;
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
cljs.core.async.Mult = (function (){var obj13255 = {};return obj13255;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13479 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13479 = (function (cs,ch,mult,meta13480){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13480 = meta13480;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13479.cljs$lang$type = true;
cljs.core.async.t13479.cljs$lang$ctorStr = "cljs.core.async/t13479";
cljs.core.async.t13479.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13479");
});})(cs))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13479.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13479.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13479.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13479.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13481){var self__ = this;
var _13481__$1 = this;return self__.meta13480;
});})(cs))
;
cljs.core.async.t13479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13481,meta13480__$1){var self__ = this;
var _13481__$1 = this;return (new cljs.core.async.t13479(self__.cs,self__.ch,self__.mult,meta13480__$1));
});})(cs))
;
cljs.core.async.__GT_t13479 = ((function (cs){
return (function __GT_t13479(cs__$1,ch__$1,mult__$1,meta13480){return (new cljs.core.async.t13479(cs__$1,ch__$1,mult__$1,meta13480));
});})(cs))
;
}
return (new cljs.core.async.t13479(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13702 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13616){var state_val_13617 = (state_13616[1]);if((state_val_13617 === 32))
{var inst_13560 = (state_13616[7]);var inst_13484 = (state_13616[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13616,31,Object,null,30);var inst_13567 = cljs.core.async.put_BANG_.call(null,inst_13560,inst_13484,done);var state_13616__$1 = state_13616;var statearr_13618_13703 = state_13616__$1;(statearr_13618_13703[2] = inst_13567);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13616__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 1))
{var state_13616__$1 = state_13616;var statearr_13619_13704 = state_13616__$1;(statearr_13619_13704[2] = null);
(statearr_13619_13704[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 33))
{var inst_13573 = (state_13616[9]);var inst_13575 = cljs.core.chunked_seq_QMARK_.call(null,inst_13573);var state_13616__$1 = state_13616;if(inst_13575)
{var statearr_13620_13705 = state_13616__$1;(statearr_13620_13705[1] = 36);
} else
{var statearr_13621_13706 = state_13616__$1;(statearr_13621_13706[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 2))
{var state_13616__$1 = state_13616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13616__$1,4,ch);
} else
{if((state_val_13617 === 34))
{var state_13616__$1 = state_13616;var statearr_13622_13707 = state_13616__$1;(statearr_13622_13707[2] = null);
(statearr_13622_13707[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 3))
{var inst_13614 = (state_13616[2]);var state_13616__$1 = state_13616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13616__$1,inst_13614);
} else
{if((state_val_13617 === 35))
{var inst_13598 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13623_13708 = state_13616__$1;(statearr_13623_13708[2] = inst_13598);
(statearr_13623_13708[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 4))
{var inst_13484 = (state_13616[8]);var inst_13484__$1 = (state_13616[2]);var inst_13485 = (inst_13484__$1 == null);var state_13616__$1 = (function (){var statearr_13624 = state_13616;(statearr_13624[8] = inst_13484__$1);
return statearr_13624;
})();if(cljs.core.truth_(inst_13485))
{var statearr_13625_13709 = state_13616__$1;(statearr_13625_13709[1] = 5);
} else
{var statearr_13626_13710 = state_13616__$1;(statearr_13626_13710[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 36))
{var inst_13573 = (state_13616[9]);var inst_13577 = cljs.core.chunk_first.call(null,inst_13573);var inst_13578 = cljs.core.chunk_rest.call(null,inst_13573);var inst_13579 = cljs.core.count.call(null,inst_13577);var inst_13552 = inst_13578;var inst_13553 = inst_13577;var inst_13554 = inst_13579;var inst_13555 = 0;var state_13616__$1 = (function (){var statearr_13627 = state_13616;(statearr_13627[10] = inst_13552);
(statearr_13627[11] = inst_13555);
(statearr_13627[12] = inst_13554);
(statearr_13627[13] = inst_13553);
return statearr_13627;
})();var statearr_13628_13711 = state_13616__$1;(statearr_13628_13711[2] = null);
(statearr_13628_13711[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 5))
{var inst_13491 = cljs.core.deref.call(null,cs);var inst_13492 = cljs.core.seq.call(null,inst_13491);var inst_13493 = inst_13492;var inst_13494 = null;var inst_13495 = 0;var inst_13496 = 0;var state_13616__$1 = (function (){var statearr_13629 = state_13616;(statearr_13629[14] = inst_13496);
(statearr_13629[15] = inst_13494);
(statearr_13629[16] = inst_13495);
(statearr_13629[17] = inst_13493);
return statearr_13629;
})();var statearr_13630_13712 = state_13616__$1;(statearr_13630_13712[2] = null);
(statearr_13630_13712[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 37))
{var inst_13573 = (state_13616[9]);var inst_13582 = cljs.core.first.call(null,inst_13573);var state_13616__$1 = (function (){var statearr_13631 = state_13616;(statearr_13631[18] = inst_13582);
return statearr_13631;
})();var statearr_13632_13713 = state_13616__$1;(statearr_13632_13713[2] = null);
(statearr_13632_13713[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 6))
{var inst_13544 = (state_13616[19]);var inst_13543 = cljs.core.deref.call(null,cs);var inst_13544__$1 = cljs.core.keys.call(null,inst_13543);var inst_13545 = cljs.core.count.call(null,inst_13544__$1);var inst_13546 = cljs.core.reset_BANG_.call(null,dctr,inst_13545);var inst_13551 = cljs.core.seq.call(null,inst_13544__$1);var inst_13552 = inst_13551;var inst_13553 = null;var inst_13554 = 0;var inst_13555 = 0;var state_13616__$1 = (function (){var statearr_13633 = state_13616;(statearr_13633[10] = inst_13552);
(statearr_13633[20] = inst_13546);
(statearr_13633[11] = inst_13555);
(statearr_13633[12] = inst_13554);
(statearr_13633[13] = inst_13553);
(statearr_13633[19] = inst_13544__$1);
return statearr_13633;
})();var statearr_13634_13714 = state_13616__$1;(statearr_13634_13714[2] = null);
(statearr_13634_13714[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 38))
{var inst_13595 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13635_13715 = state_13616__$1;(statearr_13635_13715[2] = inst_13595);
(statearr_13635_13715[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 7))
{var inst_13612 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13636_13716 = state_13616__$1;(statearr_13636_13716[2] = inst_13612);
(statearr_13636_13716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 39))
{var inst_13573 = (state_13616[9]);var inst_13591 = (state_13616[2]);var inst_13592 = cljs.core.next.call(null,inst_13573);var inst_13552 = inst_13592;var inst_13553 = null;var inst_13554 = 0;var inst_13555 = 0;var state_13616__$1 = (function (){var statearr_13637 = state_13616;(statearr_13637[10] = inst_13552);
(statearr_13637[21] = inst_13591);
(statearr_13637[11] = inst_13555);
(statearr_13637[12] = inst_13554);
(statearr_13637[13] = inst_13553);
return statearr_13637;
})();var statearr_13638_13717 = state_13616__$1;(statearr_13638_13717[2] = null);
(statearr_13638_13717[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 8))
{var inst_13496 = (state_13616[14]);var inst_13495 = (state_13616[16]);var inst_13498 = (inst_13496 < inst_13495);var inst_13499 = inst_13498;var state_13616__$1 = state_13616;if(cljs.core.truth_(inst_13499))
{var statearr_13639_13718 = state_13616__$1;(statearr_13639_13718[1] = 10);
} else
{var statearr_13640_13719 = state_13616__$1;(statearr_13640_13719[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 40))
{var inst_13582 = (state_13616[18]);var inst_13583 = (state_13616[2]);var inst_13584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13585 = cljs.core.async.untap_STAR_.call(null,m,inst_13582);var state_13616__$1 = (function (){var statearr_13641 = state_13616;(statearr_13641[22] = inst_13584);
(statearr_13641[23] = inst_13583);
return statearr_13641;
})();var statearr_13642_13720 = state_13616__$1;(statearr_13642_13720[2] = inst_13585);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13616__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 9))
{var inst_13541 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13643_13721 = state_13616__$1;(statearr_13643_13721[2] = inst_13541);
(statearr_13643_13721[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 41))
{var inst_13484 = (state_13616[8]);var inst_13582 = (state_13616[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13616,40,Object,null,39);var inst_13589 = cljs.core.async.put_BANG_.call(null,inst_13582,inst_13484,done);var state_13616__$1 = state_13616;var statearr_13644_13722 = state_13616__$1;(statearr_13644_13722[2] = inst_13589);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13616__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 10))
{var inst_13496 = (state_13616[14]);var inst_13494 = (state_13616[15]);var inst_13502 = cljs.core._nth.call(null,inst_13494,inst_13496);var inst_13503 = cljs.core.nth.call(null,inst_13502,0,null);var inst_13504 = cljs.core.nth.call(null,inst_13502,1,null);var state_13616__$1 = (function (){var statearr_13645 = state_13616;(statearr_13645[24] = inst_13503);
return statearr_13645;
})();if(cljs.core.truth_(inst_13504))
{var statearr_13646_13723 = state_13616__$1;(statearr_13646_13723[1] = 13);
} else
{var statearr_13647_13724 = state_13616__$1;(statearr_13647_13724[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 42))
{var state_13616__$1 = state_13616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13616__$1,45,dchan);
} else
{if((state_val_13617 === 11))
{var inst_13513 = (state_13616[25]);var inst_13493 = (state_13616[17]);var inst_13513__$1 = cljs.core.seq.call(null,inst_13493);var state_13616__$1 = (function (){var statearr_13648 = state_13616;(statearr_13648[25] = inst_13513__$1);
return statearr_13648;
})();if(inst_13513__$1)
{var statearr_13649_13725 = state_13616__$1;(statearr_13649_13725[1] = 16);
} else
{var statearr_13650_13726 = state_13616__$1;(statearr_13650_13726[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 43))
{var state_13616__$1 = state_13616;var statearr_13651_13727 = state_13616__$1;(statearr_13651_13727[2] = null);
(statearr_13651_13727[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 12))
{var inst_13539 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13652_13728 = state_13616__$1;(statearr_13652_13728[2] = inst_13539);
(statearr_13652_13728[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 44))
{var inst_13609 = (state_13616[2]);var state_13616__$1 = (function (){var statearr_13653 = state_13616;(statearr_13653[26] = inst_13609);
return statearr_13653;
})();var statearr_13654_13729 = state_13616__$1;(statearr_13654_13729[2] = null);
(statearr_13654_13729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 13))
{var inst_13503 = (state_13616[24]);var inst_13506 = cljs.core.async.close_BANG_.call(null,inst_13503);var state_13616__$1 = state_13616;var statearr_13655_13730 = state_13616__$1;(statearr_13655_13730[2] = inst_13506);
(statearr_13655_13730[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 45))
{var inst_13606 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13659_13731 = state_13616__$1;(statearr_13659_13731[2] = inst_13606);
(statearr_13659_13731[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 14))
{var state_13616__$1 = state_13616;var statearr_13660_13732 = state_13616__$1;(statearr_13660_13732[2] = null);
(statearr_13660_13732[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 15))
{var inst_13496 = (state_13616[14]);var inst_13494 = (state_13616[15]);var inst_13495 = (state_13616[16]);var inst_13493 = (state_13616[17]);var inst_13509 = (state_13616[2]);var inst_13510 = (inst_13496 + 1);var tmp13656 = inst_13494;var tmp13657 = inst_13495;var tmp13658 = inst_13493;var inst_13493__$1 = tmp13658;var inst_13494__$1 = tmp13656;var inst_13495__$1 = tmp13657;var inst_13496__$1 = inst_13510;var state_13616__$1 = (function (){var statearr_13661 = state_13616;(statearr_13661[14] = inst_13496__$1);
(statearr_13661[27] = inst_13509);
(statearr_13661[15] = inst_13494__$1);
(statearr_13661[16] = inst_13495__$1);
(statearr_13661[17] = inst_13493__$1);
return statearr_13661;
})();var statearr_13662_13733 = state_13616__$1;(statearr_13662_13733[2] = null);
(statearr_13662_13733[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 16))
{var inst_13513 = (state_13616[25]);var inst_13515 = cljs.core.chunked_seq_QMARK_.call(null,inst_13513);var state_13616__$1 = state_13616;if(inst_13515)
{var statearr_13663_13734 = state_13616__$1;(statearr_13663_13734[1] = 19);
} else
{var statearr_13664_13735 = state_13616__$1;(statearr_13664_13735[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 17))
{var state_13616__$1 = state_13616;var statearr_13665_13736 = state_13616__$1;(statearr_13665_13736[2] = null);
(statearr_13665_13736[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 18))
{var inst_13537 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13666_13737 = state_13616__$1;(statearr_13666_13737[2] = inst_13537);
(statearr_13666_13737[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 19))
{var inst_13513 = (state_13616[25]);var inst_13517 = cljs.core.chunk_first.call(null,inst_13513);var inst_13518 = cljs.core.chunk_rest.call(null,inst_13513);var inst_13519 = cljs.core.count.call(null,inst_13517);var inst_13493 = inst_13518;var inst_13494 = inst_13517;var inst_13495 = inst_13519;var inst_13496 = 0;var state_13616__$1 = (function (){var statearr_13667 = state_13616;(statearr_13667[14] = inst_13496);
(statearr_13667[15] = inst_13494);
(statearr_13667[16] = inst_13495);
(statearr_13667[17] = inst_13493);
return statearr_13667;
})();var statearr_13668_13738 = state_13616__$1;(statearr_13668_13738[2] = null);
(statearr_13668_13738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 20))
{var inst_13513 = (state_13616[25]);var inst_13523 = cljs.core.first.call(null,inst_13513);var inst_13524 = cljs.core.nth.call(null,inst_13523,0,null);var inst_13525 = cljs.core.nth.call(null,inst_13523,1,null);var state_13616__$1 = (function (){var statearr_13669 = state_13616;(statearr_13669[28] = inst_13524);
return statearr_13669;
})();if(cljs.core.truth_(inst_13525))
{var statearr_13670_13739 = state_13616__$1;(statearr_13670_13739[1] = 22);
} else
{var statearr_13671_13740 = state_13616__$1;(statearr_13671_13740[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 21))
{var inst_13534 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13672_13741 = state_13616__$1;(statearr_13672_13741[2] = inst_13534);
(statearr_13672_13741[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 22))
{var inst_13524 = (state_13616[28]);var inst_13527 = cljs.core.async.close_BANG_.call(null,inst_13524);var state_13616__$1 = state_13616;var statearr_13673_13742 = state_13616__$1;(statearr_13673_13742[2] = inst_13527);
(statearr_13673_13742[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 23))
{var state_13616__$1 = state_13616;var statearr_13674_13743 = state_13616__$1;(statearr_13674_13743[2] = null);
(statearr_13674_13743[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 24))
{var inst_13513 = (state_13616[25]);var inst_13530 = (state_13616[2]);var inst_13531 = cljs.core.next.call(null,inst_13513);var inst_13493 = inst_13531;var inst_13494 = null;var inst_13495 = 0;var inst_13496 = 0;var state_13616__$1 = (function (){var statearr_13675 = state_13616;(statearr_13675[14] = inst_13496);
(statearr_13675[29] = inst_13530);
(statearr_13675[15] = inst_13494);
(statearr_13675[16] = inst_13495);
(statearr_13675[17] = inst_13493);
return statearr_13675;
})();var statearr_13676_13744 = state_13616__$1;(statearr_13676_13744[2] = null);
(statearr_13676_13744[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 25))
{var inst_13555 = (state_13616[11]);var inst_13554 = (state_13616[12]);var inst_13557 = (inst_13555 < inst_13554);var inst_13558 = inst_13557;var state_13616__$1 = state_13616;if(cljs.core.truth_(inst_13558))
{var statearr_13677_13745 = state_13616__$1;(statearr_13677_13745[1] = 27);
} else
{var statearr_13678_13746 = state_13616__$1;(statearr_13678_13746[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 26))
{var inst_13544 = (state_13616[19]);var inst_13602 = (state_13616[2]);var inst_13603 = cljs.core.seq.call(null,inst_13544);var state_13616__$1 = (function (){var statearr_13679 = state_13616;(statearr_13679[30] = inst_13602);
return statearr_13679;
})();if(inst_13603)
{var statearr_13680_13747 = state_13616__$1;(statearr_13680_13747[1] = 42);
} else
{var statearr_13681_13748 = state_13616__$1;(statearr_13681_13748[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 27))
{var inst_13555 = (state_13616[11]);var inst_13553 = (state_13616[13]);var inst_13560 = cljs.core._nth.call(null,inst_13553,inst_13555);var state_13616__$1 = (function (){var statearr_13682 = state_13616;(statearr_13682[7] = inst_13560);
return statearr_13682;
})();var statearr_13683_13749 = state_13616__$1;(statearr_13683_13749[2] = null);
(statearr_13683_13749[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 28))
{var inst_13552 = (state_13616[10]);var inst_13573 = (state_13616[9]);var inst_13573__$1 = cljs.core.seq.call(null,inst_13552);var state_13616__$1 = (function (){var statearr_13687 = state_13616;(statearr_13687[9] = inst_13573__$1);
return statearr_13687;
})();if(inst_13573__$1)
{var statearr_13688_13750 = state_13616__$1;(statearr_13688_13750[1] = 33);
} else
{var statearr_13689_13751 = state_13616__$1;(statearr_13689_13751[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 29))
{var inst_13600 = (state_13616[2]);var state_13616__$1 = state_13616;var statearr_13690_13752 = state_13616__$1;(statearr_13690_13752[2] = inst_13600);
(statearr_13690_13752[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 30))
{var inst_13552 = (state_13616[10]);var inst_13555 = (state_13616[11]);var inst_13554 = (state_13616[12]);var inst_13553 = (state_13616[13]);var inst_13569 = (state_13616[2]);var inst_13570 = (inst_13555 + 1);var tmp13684 = inst_13552;var tmp13685 = inst_13554;var tmp13686 = inst_13553;var inst_13552__$1 = tmp13684;var inst_13553__$1 = tmp13686;var inst_13554__$1 = tmp13685;var inst_13555__$1 = inst_13570;var state_13616__$1 = (function (){var statearr_13691 = state_13616;(statearr_13691[10] = inst_13552__$1);
(statearr_13691[11] = inst_13555__$1);
(statearr_13691[12] = inst_13554__$1);
(statearr_13691[13] = inst_13553__$1);
(statearr_13691[31] = inst_13569);
return statearr_13691;
})();var statearr_13692_13753 = state_13616__$1;(statearr_13692_13753[2] = null);
(statearr_13692_13753[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13617 === 31))
{var inst_13560 = (state_13616[7]);var inst_13561 = (state_13616[2]);var inst_13562 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13563 = cljs.core.async.untap_STAR_.call(null,m,inst_13560);var state_13616__$1 = (function (){var statearr_13693 = state_13616;(statearr_13693[32] = inst_13562);
(statearr_13693[33] = inst_13561);
return statearr_13693;
})();var statearr_13694_13754 = state_13616__$1;(statearr_13694_13754[2] = inst_13563);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13616__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13698 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13698[0] = state_machine__5507__auto__);
(statearr_13698[1] = 1);
return statearr_13698;
});
var state_machine__5507__auto____1 = (function (state_13616){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13616);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13699){if((e13699 instanceof Object))
{var ex__5510__auto__ = e13699;var statearr_13700_13755 = state_13616;(statearr_13700_13755[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13616);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13699;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13756 = state_13616;
state_13616 = G__13756;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13616){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13701 = f__5522__auto__.call(null);(statearr_13701[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13702);
return statearr_13701;
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
cljs.core.async.Mix = (function (){var obj13758 = {};return obj13758;
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
;var m = (function (){if(typeof cljs.core.async.t13868 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13868 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13869){
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
this.meta13869 = meta13869;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13868.cljs$lang$type = true;
cljs.core.async.t13868.cljs$lang$ctorStr = "cljs.core.async/t13868";
cljs.core.async.t13868.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13868");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13868.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13868.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13868.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13868.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13868.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13868.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13868.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13868.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13868.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13870){var self__ = this;
var _13870__$1 = this;return self__.meta13869;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13868.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13870,meta13869__$1){var self__ = this;
var _13870__$1 = this;return (new cljs.core.async.t13868(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13869__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13868 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13868(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13869){return (new cljs.core.async.t13868(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13869));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13868(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13977 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13935){var state_val_13936 = (state_13935[1]);if((state_val_13936 === 1))
{var inst_13874 = (state_13935[7]);var inst_13874__$1 = calc_state.call(null);var inst_13875 = cljs.core.seq_QMARK_.call(null,inst_13874__$1);var state_13935__$1 = (function (){var statearr_13937 = state_13935;(statearr_13937[7] = inst_13874__$1);
return statearr_13937;
})();if(inst_13875)
{var statearr_13938_13978 = state_13935__$1;(statearr_13938_13978[1] = 2);
} else
{var statearr_13939_13979 = state_13935__$1;(statearr_13939_13979[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 2))
{var inst_13874 = (state_13935[7]);var inst_13877 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13874);var state_13935__$1 = state_13935;var statearr_13940_13980 = state_13935__$1;(statearr_13940_13980[2] = inst_13877);
(statearr_13940_13980[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 3))
{var inst_13874 = (state_13935[7]);var state_13935__$1 = state_13935;var statearr_13941_13981 = state_13935__$1;(statearr_13941_13981[2] = inst_13874);
(statearr_13941_13981[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 4))
{var inst_13874 = (state_13935[7]);var inst_13880 = (state_13935[2]);var inst_13881 = cljs.core.get.call(null,inst_13880,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13882 = cljs.core.get.call(null,inst_13880,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13883 = cljs.core.get.call(null,inst_13880,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13884 = inst_13874;var state_13935__$1 = (function (){var statearr_13942 = state_13935;(statearr_13942[8] = inst_13884);
(statearr_13942[9] = inst_13883);
(statearr_13942[10] = inst_13881);
(statearr_13942[11] = inst_13882);
return statearr_13942;
})();var statearr_13943_13982 = state_13935__$1;(statearr_13943_13982[2] = null);
(statearr_13943_13982[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 5))
{var inst_13884 = (state_13935[8]);var inst_13887 = cljs.core.seq_QMARK_.call(null,inst_13884);var state_13935__$1 = state_13935;if(inst_13887)
{var statearr_13944_13983 = state_13935__$1;(statearr_13944_13983[1] = 7);
} else
{var statearr_13945_13984 = state_13935__$1;(statearr_13945_13984[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 6))
{var inst_13933 = (state_13935[2]);var state_13935__$1 = state_13935;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13935__$1,inst_13933);
} else
{if((state_val_13936 === 7))
{var inst_13884 = (state_13935[8]);var inst_13889 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13884);var state_13935__$1 = state_13935;var statearr_13946_13985 = state_13935__$1;(statearr_13946_13985[2] = inst_13889);
(statearr_13946_13985[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 8))
{var inst_13884 = (state_13935[8]);var state_13935__$1 = state_13935;var statearr_13947_13986 = state_13935__$1;(statearr_13947_13986[2] = inst_13884);
(statearr_13947_13986[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 9))
{var inst_13892 = (state_13935[12]);var inst_13892__$1 = (state_13935[2]);var inst_13893 = cljs.core.get.call(null,inst_13892__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13894 = cljs.core.get.call(null,inst_13892__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13895 = cljs.core.get.call(null,inst_13892__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13935__$1 = (function (){var statearr_13948 = state_13935;(statearr_13948[12] = inst_13892__$1);
(statearr_13948[13] = inst_13895);
(statearr_13948[14] = inst_13894);
return statearr_13948;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13935__$1,10,inst_13893);
} else
{if((state_val_13936 === 10))
{var inst_13900 = (state_13935[15]);var inst_13899 = (state_13935[16]);var inst_13898 = (state_13935[2]);var inst_13899__$1 = cljs.core.nth.call(null,inst_13898,0,null);var inst_13900__$1 = cljs.core.nth.call(null,inst_13898,1,null);var inst_13901 = (inst_13899__$1 == null);var inst_13902 = cljs.core._EQ_.call(null,inst_13900__$1,change);var inst_13903 = (inst_13901) || (inst_13902);var state_13935__$1 = (function (){var statearr_13949 = state_13935;(statearr_13949[15] = inst_13900__$1);
(statearr_13949[16] = inst_13899__$1);
return statearr_13949;
})();if(cljs.core.truth_(inst_13903))
{var statearr_13950_13987 = state_13935__$1;(statearr_13950_13987[1] = 11);
} else
{var statearr_13951_13988 = state_13935__$1;(statearr_13951_13988[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 11))
{var inst_13899 = (state_13935[16]);var inst_13905 = (inst_13899 == null);var state_13935__$1 = state_13935;if(cljs.core.truth_(inst_13905))
{var statearr_13952_13989 = state_13935__$1;(statearr_13952_13989[1] = 14);
} else
{var statearr_13953_13990 = state_13935__$1;(statearr_13953_13990[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 12))
{var inst_13900 = (state_13935[15]);var inst_13914 = (state_13935[17]);var inst_13895 = (state_13935[13]);var inst_13914__$1 = inst_13895.call(null,inst_13900);var state_13935__$1 = (function (){var statearr_13954 = state_13935;(statearr_13954[17] = inst_13914__$1);
return statearr_13954;
})();if(cljs.core.truth_(inst_13914__$1))
{var statearr_13955_13991 = state_13935__$1;(statearr_13955_13991[1] = 17);
} else
{var statearr_13956_13992 = state_13935__$1;(statearr_13956_13992[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 13))
{var inst_13931 = (state_13935[2]);var state_13935__$1 = state_13935;var statearr_13957_13993 = state_13935__$1;(statearr_13957_13993[2] = inst_13931);
(statearr_13957_13993[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 14))
{var inst_13900 = (state_13935[15]);var inst_13907 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13900);var state_13935__$1 = state_13935;var statearr_13958_13994 = state_13935__$1;(statearr_13958_13994[2] = inst_13907);
(statearr_13958_13994[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 15))
{var state_13935__$1 = state_13935;var statearr_13959_13995 = state_13935__$1;(statearr_13959_13995[2] = null);
(statearr_13959_13995[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 16))
{var inst_13910 = (state_13935[2]);var inst_13911 = calc_state.call(null);var inst_13884 = inst_13911;var state_13935__$1 = (function (){var statearr_13960 = state_13935;(statearr_13960[18] = inst_13910);
(statearr_13960[8] = inst_13884);
return statearr_13960;
})();var statearr_13961_13996 = state_13935__$1;(statearr_13961_13996[2] = null);
(statearr_13961_13996[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 17))
{var inst_13914 = (state_13935[17]);var state_13935__$1 = state_13935;var statearr_13962_13997 = state_13935__$1;(statearr_13962_13997[2] = inst_13914);
(statearr_13962_13997[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 18))
{var inst_13900 = (state_13935[15]);var inst_13895 = (state_13935[13]);var inst_13894 = (state_13935[14]);var inst_13917 = cljs.core.empty_QMARK_.call(null,inst_13895);var inst_13918 = inst_13894.call(null,inst_13900);var inst_13919 = cljs.core.not.call(null,inst_13918);var inst_13920 = (inst_13917) && (inst_13919);var state_13935__$1 = state_13935;var statearr_13963_13998 = state_13935__$1;(statearr_13963_13998[2] = inst_13920);
(statearr_13963_13998[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 19))
{var inst_13922 = (state_13935[2]);var state_13935__$1 = state_13935;if(cljs.core.truth_(inst_13922))
{var statearr_13964_13999 = state_13935__$1;(statearr_13964_13999[1] = 20);
} else
{var statearr_13965_14000 = state_13935__$1;(statearr_13965_14000[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 20))
{var inst_13899 = (state_13935[16]);var state_13935__$1 = state_13935;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13935__$1,23,out,inst_13899);
} else
{if((state_val_13936 === 21))
{var state_13935__$1 = state_13935;var statearr_13966_14001 = state_13935__$1;(statearr_13966_14001[2] = null);
(statearr_13966_14001[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 22))
{var inst_13892 = (state_13935[12]);var inst_13928 = (state_13935[2]);var inst_13884 = inst_13892;var state_13935__$1 = (function (){var statearr_13967 = state_13935;(statearr_13967[8] = inst_13884);
(statearr_13967[19] = inst_13928);
return statearr_13967;
})();var statearr_13968_14002 = state_13935__$1;(statearr_13968_14002[2] = null);
(statearr_13968_14002[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13936 === 23))
{var inst_13925 = (state_13935[2]);var state_13935__$1 = state_13935;var statearr_13969_14003 = state_13935__$1;(statearr_13969_14003[2] = inst_13925);
(statearr_13969_14003[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13973[0] = state_machine__5507__auto__);
(statearr_13973[1] = 1);
return statearr_13973;
});
var state_machine__5507__auto____1 = (function (state_13935){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13935);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13974){if((e13974 instanceof Object))
{var ex__5510__auto__ = e13974;var statearr_13975_14004 = state_13935;(statearr_13975_14004[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13935);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14005 = state_13935;
state_13935 = G__14005;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13935){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13935);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13976 = f__5522__auto__.call(null);(statearr_13976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13977);
return statearr_13976;
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
cljs.core.async.Pub = (function (){var obj14007 = {};return obj14007;
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
return (function (p1__14008_SHARP_){if(cljs.core.truth_(p1__14008_SHARP_.call(null,topic)))
{return p1__14008_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14008_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14133 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14133 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14134){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14134 = meta14134;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14133.cljs$lang$type = true;
cljs.core.async.t14133.cljs$lang$ctorStr = "cljs.core.async/t14133";
cljs.core.async.t14133.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14133");
});})(mults,ensure_mult))
;
cljs.core.async.t14133.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14133.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14133.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14133.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14133.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14133.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14133.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14135){var self__ = this;
var _14135__$1 = this;return self__.meta14134;
});})(mults,ensure_mult))
;
cljs.core.async.t14133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14135,meta14134__$1){var self__ = this;
var _14135__$1 = this;return (new cljs.core.async.t14133(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14134__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14133 = ((function (mults,ensure_mult){
return (function __GT_t14133(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14134){return (new cljs.core.async.t14133(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14134));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14133(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14257 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14209){var state_val_14210 = (state_14209[1]);if((state_val_14210 === 1))
{var state_14209__$1 = state_14209;var statearr_14211_14258 = state_14209__$1;(statearr_14211_14258[2] = null);
(statearr_14211_14258[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 2))
{var state_14209__$1 = state_14209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14209__$1,4,ch);
} else
{if((state_val_14210 === 3))
{var inst_14207 = (state_14209[2]);var state_14209__$1 = state_14209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14209__$1,inst_14207);
} else
{if((state_val_14210 === 4))
{var inst_14138 = (state_14209[7]);var inst_14138__$1 = (state_14209[2]);var inst_14139 = (inst_14138__$1 == null);var state_14209__$1 = (function (){var statearr_14212 = state_14209;(statearr_14212[7] = inst_14138__$1);
return statearr_14212;
})();if(cljs.core.truth_(inst_14139))
{var statearr_14213_14259 = state_14209__$1;(statearr_14213_14259[1] = 5);
} else
{var statearr_14214_14260 = state_14209__$1;(statearr_14214_14260[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 5))
{var inst_14145 = cljs.core.deref.call(null,mults);var inst_14146 = cljs.core.vals.call(null,inst_14145);var inst_14147 = cljs.core.seq.call(null,inst_14146);var inst_14148 = inst_14147;var inst_14149 = null;var inst_14150 = 0;var inst_14151 = 0;var state_14209__$1 = (function (){var statearr_14215 = state_14209;(statearr_14215[8] = inst_14151);
(statearr_14215[9] = inst_14149);
(statearr_14215[10] = inst_14150);
(statearr_14215[11] = inst_14148);
return statearr_14215;
})();var statearr_14216_14261 = state_14209__$1;(statearr_14216_14261[2] = null);
(statearr_14216_14261[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 6))
{var inst_14138 = (state_14209[7]);var inst_14188 = (state_14209[12]);var inst_14186 = (state_14209[13]);var inst_14186__$1 = topic_fn.call(null,inst_14138);var inst_14187 = cljs.core.deref.call(null,mults);var inst_14188__$1 = cljs.core.get.call(null,inst_14187,inst_14186__$1);var state_14209__$1 = (function (){var statearr_14217 = state_14209;(statearr_14217[12] = inst_14188__$1);
(statearr_14217[13] = inst_14186__$1);
return statearr_14217;
})();if(cljs.core.truth_(inst_14188__$1))
{var statearr_14218_14262 = state_14209__$1;(statearr_14218_14262[1] = 19);
} else
{var statearr_14219_14263 = state_14209__$1;(statearr_14219_14263[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 7))
{var inst_14205 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14220_14264 = state_14209__$1;(statearr_14220_14264[2] = inst_14205);
(statearr_14220_14264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 8))
{var inst_14151 = (state_14209[8]);var inst_14150 = (state_14209[10]);var inst_14153 = (inst_14151 < inst_14150);var inst_14154 = inst_14153;var state_14209__$1 = state_14209;if(cljs.core.truth_(inst_14154))
{var statearr_14224_14265 = state_14209__$1;(statearr_14224_14265[1] = 10);
} else
{var statearr_14225_14266 = state_14209__$1;(statearr_14225_14266[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 9))
{var inst_14184 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14226_14267 = state_14209__$1;(statearr_14226_14267[2] = inst_14184);
(statearr_14226_14267[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 10))
{var inst_14151 = (state_14209[8]);var inst_14149 = (state_14209[9]);var inst_14150 = (state_14209[10]);var inst_14148 = (state_14209[11]);var inst_14156 = cljs.core._nth.call(null,inst_14149,inst_14151);var inst_14157 = cljs.core.async.muxch_STAR_.call(null,inst_14156);var inst_14158 = cljs.core.async.close_BANG_.call(null,inst_14157);var inst_14159 = (inst_14151 + 1);var tmp14221 = inst_14149;var tmp14222 = inst_14150;var tmp14223 = inst_14148;var inst_14148__$1 = tmp14223;var inst_14149__$1 = tmp14221;var inst_14150__$1 = tmp14222;var inst_14151__$1 = inst_14159;var state_14209__$1 = (function (){var statearr_14227 = state_14209;(statearr_14227[14] = inst_14158);
(statearr_14227[8] = inst_14151__$1);
(statearr_14227[9] = inst_14149__$1);
(statearr_14227[10] = inst_14150__$1);
(statearr_14227[11] = inst_14148__$1);
return statearr_14227;
})();var statearr_14228_14268 = state_14209__$1;(statearr_14228_14268[2] = null);
(statearr_14228_14268[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 11))
{var inst_14162 = (state_14209[15]);var inst_14148 = (state_14209[11]);var inst_14162__$1 = cljs.core.seq.call(null,inst_14148);var state_14209__$1 = (function (){var statearr_14229 = state_14209;(statearr_14229[15] = inst_14162__$1);
return statearr_14229;
})();if(inst_14162__$1)
{var statearr_14230_14269 = state_14209__$1;(statearr_14230_14269[1] = 13);
} else
{var statearr_14231_14270 = state_14209__$1;(statearr_14231_14270[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 12))
{var inst_14182 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14232_14271 = state_14209__$1;(statearr_14232_14271[2] = inst_14182);
(statearr_14232_14271[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 13))
{var inst_14162 = (state_14209[15]);var inst_14164 = cljs.core.chunked_seq_QMARK_.call(null,inst_14162);var state_14209__$1 = state_14209;if(inst_14164)
{var statearr_14233_14272 = state_14209__$1;(statearr_14233_14272[1] = 16);
} else
{var statearr_14234_14273 = state_14209__$1;(statearr_14234_14273[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 14))
{var state_14209__$1 = state_14209;var statearr_14235_14274 = state_14209__$1;(statearr_14235_14274[2] = null);
(statearr_14235_14274[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 15))
{var inst_14180 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14236_14275 = state_14209__$1;(statearr_14236_14275[2] = inst_14180);
(statearr_14236_14275[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 16))
{var inst_14162 = (state_14209[15]);var inst_14166 = cljs.core.chunk_first.call(null,inst_14162);var inst_14167 = cljs.core.chunk_rest.call(null,inst_14162);var inst_14168 = cljs.core.count.call(null,inst_14166);var inst_14148 = inst_14167;var inst_14149 = inst_14166;var inst_14150 = inst_14168;var inst_14151 = 0;var state_14209__$1 = (function (){var statearr_14237 = state_14209;(statearr_14237[8] = inst_14151);
(statearr_14237[9] = inst_14149);
(statearr_14237[10] = inst_14150);
(statearr_14237[11] = inst_14148);
return statearr_14237;
})();var statearr_14238_14276 = state_14209__$1;(statearr_14238_14276[2] = null);
(statearr_14238_14276[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 17))
{var inst_14162 = (state_14209[15]);var inst_14171 = cljs.core.first.call(null,inst_14162);var inst_14172 = cljs.core.async.muxch_STAR_.call(null,inst_14171);var inst_14173 = cljs.core.async.close_BANG_.call(null,inst_14172);var inst_14174 = cljs.core.next.call(null,inst_14162);var inst_14148 = inst_14174;var inst_14149 = null;var inst_14150 = 0;var inst_14151 = 0;var state_14209__$1 = (function (){var statearr_14239 = state_14209;(statearr_14239[16] = inst_14173);
(statearr_14239[8] = inst_14151);
(statearr_14239[9] = inst_14149);
(statearr_14239[10] = inst_14150);
(statearr_14239[11] = inst_14148);
return statearr_14239;
})();var statearr_14240_14277 = state_14209__$1;(statearr_14240_14277[2] = null);
(statearr_14240_14277[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 18))
{var inst_14177 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14241_14278 = state_14209__$1;(statearr_14241_14278[2] = inst_14177);
(statearr_14241_14278[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 19))
{var state_14209__$1 = state_14209;var statearr_14242_14279 = state_14209__$1;(statearr_14242_14279[2] = null);
(statearr_14242_14279[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 20))
{var state_14209__$1 = state_14209;var statearr_14243_14280 = state_14209__$1;(statearr_14243_14280[2] = null);
(statearr_14243_14280[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 21))
{var inst_14202 = (state_14209[2]);var state_14209__$1 = (function (){var statearr_14244 = state_14209;(statearr_14244[17] = inst_14202);
return statearr_14244;
})();var statearr_14245_14281 = state_14209__$1;(statearr_14245_14281[2] = null);
(statearr_14245_14281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 22))
{var inst_14199 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14246_14282 = state_14209__$1;(statearr_14246_14282[2] = inst_14199);
(statearr_14246_14282[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 23))
{var inst_14186 = (state_14209[13]);var inst_14190 = (state_14209[2]);var inst_14191 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14186);var state_14209__$1 = (function (){var statearr_14247 = state_14209;(statearr_14247[18] = inst_14190);
return statearr_14247;
})();var statearr_14248_14283 = state_14209__$1;(statearr_14248_14283[2] = inst_14191);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14209__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14210 === 24))
{var inst_14138 = (state_14209[7]);var inst_14188 = (state_14209[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14209,23,Object,null,22);var inst_14195 = cljs.core.async.muxch_STAR_.call(null,inst_14188);var state_14209__$1 = state_14209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14209__$1,25,inst_14195,inst_14138);
} else
{if((state_val_14210 === 25))
{var inst_14197 = (state_14209[2]);var state_14209__$1 = state_14209;var statearr_14249_14284 = state_14209__$1;(statearr_14249_14284[2] = inst_14197);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14209__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14253 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14253[0] = state_machine__5507__auto__);
(statearr_14253[1] = 1);
return statearr_14253;
});
var state_machine__5507__auto____1 = (function (state_14209){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14209);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14254){if((e14254 instanceof Object))
{var ex__5510__auto__ = e14254;var statearr_14255_14285 = state_14209;(statearr_14255_14285[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14209);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14254;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14286 = state_14209;
state_14209 = G__14286;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14209){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14256 = f__5522__auto__.call(null);(statearr_14256[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14257);
return statearr_14256;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14423 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14393){var state_val_14394 = (state_14393[1]);if((state_val_14394 === 1))
{var state_14393__$1 = state_14393;var statearr_14395_14424 = state_14393__$1;(statearr_14395_14424[2] = null);
(statearr_14395_14424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 2))
{var inst_14356 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14357 = 0;var state_14393__$1 = (function (){var statearr_14396 = state_14393;(statearr_14396[7] = inst_14357);
(statearr_14396[8] = inst_14356);
return statearr_14396;
})();var statearr_14397_14425 = state_14393__$1;(statearr_14397_14425[2] = null);
(statearr_14397_14425[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 3))
{var inst_14391 = (state_14393[2]);var state_14393__$1 = state_14393;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14393__$1,inst_14391);
} else
{if((state_val_14394 === 4))
{var inst_14357 = (state_14393[7]);var inst_14359 = (inst_14357 < cnt);var state_14393__$1 = state_14393;if(cljs.core.truth_(inst_14359))
{var statearr_14398_14426 = state_14393__$1;(statearr_14398_14426[1] = 6);
} else
{var statearr_14399_14427 = state_14393__$1;(statearr_14399_14427[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 5))
{var inst_14377 = (state_14393[2]);var state_14393__$1 = (function (){var statearr_14400 = state_14393;(statearr_14400[9] = inst_14377);
return statearr_14400;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14393__$1,12,dchan);
} else
{if((state_val_14394 === 6))
{var state_14393__$1 = state_14393;var statearr_14401_14428 = state_14393__$1;(statearr_14401_14428[2] = null);
(statearr_14401_14428[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 7))
{var state_14393__$1 = state_14393;var statearr_14402_14429 = state_14393__$1;(statearr_14402_14429[2] = null);
(statearr_14402_14429[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 8))
{var inst_14375 = (state_14393[2]);var state_14393__$1 = state_14393;var statearr_14403_14430 = state_14393__$1;(statearr_14403_14430[2] = inst_14375);
(statearr_14403_14430[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 9))
{var inst_14357 = (state_14393[7]);var inst_14370 = (state_14393[2]);var inst_14371 = (inst_14357 + 1);var inst_14357__$1 = inst_14371;var state_14393__$1 = (function (){var statearr_14404 = state_14393;(statearr_14404[10] = inst_14370);
(statearr_14404[7] = inst_14357__$1);
return statearr_14404;
})();var statearr_14405_14431 = state_14393__$1;(statearr_14405_14431[2] = null);
(statearr_14405_14431[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 10))
{var inst_14361 = (state_14393[2]);var inst_14362 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14393__$1 = (function (){var statearr_14406 = state_14393;(statearr_14406[11] = inst_14361);
return statearr_14406;
})();var statearr_14407_14432 = state_14393__$1;(statearr_14407_14432[2] = inst_14362);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14393__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 11))
{var inst_14357 = (state_14393[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14393,10,Object,null,9);var inst_14366 = chs__$1.call(null,inst_14357);var inst_14367 = done.call(null,inst_14357);var inst_14368 = cljs.core.async.take_BANG_.call(null,inst_14366,inst_14367);var state_14393__$1 = state_14393;var statearr_14408_14433 = state_14393__$1;(statearr_14408_14433[2] = inst_14368);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14393__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 12))
{var inst_14379 = (state_14393[12]);var inst_14379__$1 = (state_14393[2]);var inst_14380 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14379__$1);var state_14393__$1 = (function (){var statearr_14409 = state_14393;(statearr_14409[12] = inst_14379__$1);
return statearr_14409;
})();if(cljs.core.truth_(inst_14380))
{var statearr_14410_14434 = state_14393__$1;(statearr_14410_14434[1] = 13);
} else
{var statearr_14411_14435 = state_14393__$1;(statearr_14411_14435[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 13))
{var inst_14382 = cljs.core.async.close_BANG_.call(null,out);var state_14393__$1 = state_14393;var statearr_14412_14436 = state_14393__$1;(statearr_14412_14436[2] = inst_14382);
(statearr_14412_14436[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 14))
{var inst_14379 = (state_14393[12]);var inst_14384 = cljs.core.apply.call(null,f,inst_14379);var state_14393__$1 = state_14393;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14393__$1,16,out,inst_14384);
} else
{if((state_val_14394 === 15))
{var inst_14389 = (state_14393[2]);var state_14393__$1 = state_14393;var statearr_14413_14437 = state_14393__$1;(statearr_14413_14437[2] = inst_14389);
(statearr_14413_14437[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14394 === 16))
{var inst_14386 = (state_14393[2]);var state_14393__$1 = (function (){var statearr_14414 = state_14393;(statearr_14414[13] = inst_14386);
return statearr_14414;
})();var statearr_14415_14438 = state_14393__$1;(statearr_14415_14438[2] = null);
(statearr_14415_14438[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14419[0] = state_machine__5507__auto__);
(statearr_14419[1] = 1);
return statearr_14419;
});
var state_machine__5507__auto____1 = (function (state_14393){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14393);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14420){if((e14420 instanceof Object))
{var ex__5510__auto__ = e14420;var statearr_14421_14439 = state_14393;(statearr_14421_14439[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14393);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14420;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14440 = state_14393;
state_14393 = G__14440;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14393){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14393);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14422 = f__5522__auto__.call(null);(statearr_14422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14423);
return statearr_14422;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14548 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14524){var state_val_14525 = (state_14524[1]);if((state_val_14525 === 1))
{var inst_14495 = cljs.core.vec.call(null,chs);var inst_14496 = inst_14495;var state_14524__$1 = (function (){var statearr_14526 = state_14524;(statearr_14526[7] = inst_14496);
return statearr_14526;
})();var statearr_14527_14549 = state_14524__$1;(statearr_14527_14549[2] = null);
(statearr_14527_14549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14525 === 2))
{var inst_14496 = (state_14524[7]);var inst_14498 = cljs.core.count.call(null,inst_14496);var inst_14499 = (inst_14498 > 0);var state_14524__$1 = state_14524;if(cljs.core.truth_(inst_14499))
{var statearr_14528_14550 = state_14524__$1;(statearr_14528_14550[1] = 4);
} else
{var statearr_14529_14551 = state_14524__$1;(statearr_14529_14551[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14525 === 3))
{var inst_14522 = (state_14524[2]);var state_14524__$1 = state_14524;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14524__$1,inst_14522);
} else
{if((state_val_14525 === 4))
{var inst_14496 = (state_14524[7]);var state_14524__$1 = state_14524;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14524__$1,7,inst_14496);
} else
{if((state_val_14525 === 5))
{var inst_14518 = cljs.core.async.close_BANG_.call(null,out);var state_14524__$1 = state_14524;var statearr_14530_14552 = state_14524__$1;(statearr_14530_14552[2] = inst_14518);
(statearr_14530_14552[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14525 === 6))
{var inst_14520 = (state_14524[2]);var state_14524__$1 = state_14524;var statearr_14531_14553 = state_14524__$1;(statearr_14531_14553[2] = inst_14520);
(statearr_14531_14553[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14525 === 7))
{var inst_14503 = (state_14524[8]);var inst_14504 = (state_14524[9]);var inst_14503__$1 = (state_14524[2]);var inst_14504__$1 = cljs.core.nth.call(null,inst_14503__$1,0,null);var inst_14505 = cljs.core.nth.call(null,inst_14503__$1,1,null);var inst_14506 = (inst_14504__$1 == null);var state_14524__$1 = (function (){var statearr_14532 = state_14524;(statearr_14532[8] = inst_14503__$1);
(statearr_14532[9] = inst_14504__$1);
(statearr_14532[10] = inst_14505);
return statearr_14532;
})();if(cljs.core.truth_(inst_14506))
{var statearr_14533_14554 = state_14524__$1;(statearr_14533_14554[1] = 8);
} else
{var statearr_14534_14555 = state_14524__$1;(statearr_14534_14555[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14525 === 8))
{var inst_14496 = (state_14524[7]);var inst_14503 = (state_14524[8]);var inst_14504 = (state_14524[9]);var inst_14505 = (state_14524[10]);var inst_14508 = (function (){var c = inst_14505;var v = inst_14504;var vec__14501 = inst_14503;var cs = inst_14496;return ((function (c,v,vec__14501,cs,inst_14496,inst_14503,inst_14504,inst_14505,state_val_14525){
return (function (p1__14441_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14441_SHARP_);
});
;})(c,v,vec__14501,cs,inst_14496,inst_14503,inst_14504,inst_14505,state_val_14525))
})();var inst_14509 = cljs.core.filterv.call(null,inst_14508,inst_14496);var inst_14496__$1 = inst_14509;var state_14524__$1 = (function (){var statearr_14535 = state_14524;(statearr_14535[7] = inst_14496__$1);
return statearr_14535;
})();var statearr_14536_14556 = state_14524__$1;(statearr_14536_14556[2] = null);
(statearr_14536_14556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14525 === 9))
{var inst_14504 = (state_14524[9]);var state_14524__$1 = state_14524;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14524__$1,11,out,inst_14504);
} else
{if((state_val_14525 === 10))
{var inst_14516 = (state_14524[2]);var state_14524__$1 = state_14524;var statearr_14538_14557 = state_14524__$1;(statearr_14538_14557[2] = inst_14516);
(statearr_14538_14557[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14525 === 11))
{var inst_14496 = (state_14524[7]);var inst_14513 = (state_14524[2]);var tmp14537 = inst_14496;var inst_14496__$1 = tmp14537;var state_14524__$1 = (function (){var statearr_14539 = state_14524;(statearr_14539[7] = inst_14496__$1);
(statearr_14539[11] = inst_14513);
return statearr_14539;
})();var statearr_14540_14558 = state_14524__$1;(statearr_14540_14558[2] = null);
(statearr_14540_14558[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14544 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14544[0] = state_machine__5507__auto__);
(statearr_14544[1] = 1);
return statearr_14544;
});
var state_machine__5507__auto____1 = (function (state_14524){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14524);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14545){if((e14545 instanceof Object))
{var ex__5510__auto__ = e14545;var statearr_14546_14559 = state_14524;(statearr_14546_14559[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14524);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14545;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14560 = state_14524;
state_14524 = G__14560;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14524){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14547 = f__5522__auto__.call(null);(statearr_14547[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14548);
return statearr_14547;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14653 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14630){var state_val_14631 = (state_14630[1]);if((state_val_14631 === 1))
{var inst_14607 = 0;var state_14630__$1 = (function (){var statearr_14632 = state_14630;(statearr_14632[7] = inst_14607);
return statearr_14632;
})();var statearr_14633_14654 = state_14630__$1;(statearr_14633_14654[2] = null);
(statearr_14633_14654[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14631 === 2))
{var inst_14607 = (state_14630[7]);var inst_14609 = (inst_14607 < n);var state_14630__$1 = state_14630;if(cljs.core.truth_(inst_14609))
{var statearr_14634_14655 = state_14630__$1;(statearr_14634_14655[1] = 4);
} else
{var statearr_14635_14656 = state_14630__$1;(statearr_14635_14656[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14631 === 3))
{var inst_14627 = (state_14630[2]);var inst_14628 = cljs.core.async.close_BANG_.call(null,out);var state_14630__$1 = (function (){var statearr_14636 = state_14630;(statearr_14636[8] = inst_14627);
return statearr_14636;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14630__$1,inst_14628);
} else
{if((state_val_14631 === 4))
{var state_14630__$1 = state_14630;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14630__$1,7,ch);
} else
{if((state_val_14631 === 5))
{var state_14630__$1 = state_14630;var statearr_14637_14657 = state_14630__$1;(statearr_14637_14657[2] = null);
(statearr_14637_14657[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14631 === 6))
{var inst_14625 = (state_14630[2]);var state_14630__$1 = state_14630;var statearr_14638_14658 = state_14630__$1;(statearr_14638_14658[2] = inst_14625);
(statearr_14638_14658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14631 === 7))
{var inst_14612 = (state_14630[9]);var inst_14612__$1 = (state_14630[2]);var inst_14613 = (inst_14612__$1 == null);var inst_14614 = cljs.core.not.call(null,inst_14613);var state_14630__$1 = (function (){var statearr_14639 = state_14630;(statearr_14639[9] = inst_14612__$1);
return statearr_14639;
})();if(inst_14614)
{var statearr_14640_14659 = state_14630__$1;(statearr_14640_14659[1] = 8);
} else
{var statearr_14641_14660 = state_14630__$1;(statearr_14641_14660[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14631 === 8))
{var inst_14612 = (state_14630[9]);var state_14630__$1 = state_14630;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14630__$1,11,out,inst_14612);
} else
{if((state_val_14631 === 9))
{var state_14630__$1 = state_14630;var statearr_14642_14661 = state_14630__$1;(statearr_14642_14661[2] = null);
(statearr_14642_14661[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14631 === 10))
{var inst_14622 = (state_14630[2]);var state_14630__$1 = state_14630;var statearr_14643_14662 = state_14630__$1;(statearr_14643_14662[2] = inst_14622);
(statearr_14643_14662[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14631 === 11))
{var inst_14607 = (state_14630[7]);var inst_14617 = (state_14630[2]);var inst_14618 = (inst_14607 + 1);var inst_14607__$1 = inst_14618;var state_14630__$1 = (function (){var statearr_14644 = state_14630;(statearr_14644[10] = inst_14617);
(statearr_14644[7] = inst_14607__$1);
return statearr_14644;
})();var statearr_14645_14663 = state_14630__$1;(statearr_14645_14663[2] = null);
(statearr_14645_14663[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14649 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14649[0] = state_machine__5507__auto__);
(statearr_14649[1] = 1);
return statearr_14649;
});
var state_machine__5507__auto____1 = (function (state_14630){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14630);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14650){if((e14650 instanceof Object))
{var ex__5510__auto__ = e14650;var statearr_14651_14664 = state_14630;(statearr_14651_14664[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14630);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14650;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14665 = state_14630;
state_14630 = G__14665;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14630){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14630);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14652 = f__5522__auto__.call(null);(statearr_14652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14653);
return statearr_14652;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14762 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14737){var state_val_14738 = (state_14737[1]);if((state_val_14738 === 1))
{var inst_14714 = null;var state_14737__$1 = (function (){var statearr_14739 = state_14737;(statearr_14739[7] = inst_14714);
return statearr_14739;
})();var statearr_14740_14763 = state_14737__$1;(statearr_14740_14763[2] = null);
(statearr_14740_14763[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14738 === 2))
{var state_14737__$1 = state_14737;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14737__$1,4,ch);
} else
{if((state_val_14738 === 3))
{var inst_14734 = (state_14737[2]);var inst_14735 = cljs.core.async.close_BANG_.call(null,out);var state_14737__$1 = (function (){var statearr_14741 = state_14737;(statearr_14741[8] = inst_14734);
return statearr_14741;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14737__$1,inst_14735);
} else
{if((state_val_14738 === 4))
{var inst_14717 = (state_14737[9]);var inst_14717__$1 = (state_14737[2]);var inst_14718 = (inst_14717__$1 == null);var inst_14719 = cljs.core.not.call(null,inst_14718);var state_14737__$1 = (function (){var statearr_14742 = state_14737;(statearr_14742[9] = inst_14717__$1);
return statearr_14742;
})();if(inst_14719)
{var statearr_14743_14764 = state_14737__$1;(statearr_14743_14764[1] = 5);
} else
{var statearr_14744_14765 = state_14737__$1;(statearr_14744_14765[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14738 === 5))
{var inst_14714 = (state_14737[7]);var inst_14717 = (state_14737[9]);var inst_14721 = cljs.core._EQ_.call(null,inst_14717,inst_14714);var state_14737__$1 = state_14737;if(inst_14721)
{var statearr_14745_14766 = state_14737__$1;(statearr_14745_14766[1] = 8);
} else
{var statearr_14746_14767 = state_14737__$1;(statearr_14746_14767[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14738 === 6))
{var state_14737__$1 = state_14737;var statearr_14748_14768 = state_14737__$1;(statearr_14748_14768[2] = null);
(statearr_14748_14768[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14738 === 7))
{var inst_14732 = (state_14737[2]);var state_14737__$1 = state_14737;var statearr_14749_14769 = state_14737__$1;(statearr_14749_14769[2] = inst_14732);
(statearr_14749_14769[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14738 === 8))
{var inst_14714 = (state_14737[7]);var tmp14747 = inst_14714;var inst_14714__$1 = tmp14747;var state_14737__$1 = (function (){var statearr_14750 = state_14737;(statearr_14750[7] = inst_14714__$1);
return statearr_14750;
})();var statearr_14751_14770 = state_14737__$1;(statearr_14751_14770[2] = null);
(statearr_14751_14770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14738 === 9))
{var inst_14717 = (state_14737[9]);var state_14737__$1 = state_14737;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14737__$1,11,out,inst_14717);
} else
{if((state_val_14738 === 10))
{var inst_14729 = (state_14737[2]);var state_14737__$1 = state_14737;var statearr_14752_14771 = state_14737__$1;(statearr_14752_14771[2] = inst_14729);
(statearr_14752_14771[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14738 === 11))
{var inst_14717 = (state_14737[9]);var inst_14726 = (state_14737[2]);var inst_14714 = inst_14717;var state_14737__$1 = (function (){var statearr_14753 = state_14737;(statearr_14753[10] = inst_14726);
(statearr_14753[7] = inst_14714);
return statearr_14753;
})();var statearr_14754_14772 = state_14737__$1;(statearr_14754_14772[2] = null);
(statearr_14754_14772[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14758 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14758[0] = state_machine__5507__auto__);
(statearr_14758[1] = 1);
return statearr_14758;
});
var state_machine__5507__auto____1 = (function (state_14737){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14737);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14759){if((e14759 instanceof Object))
{var ex__5510__auto__ = e14759;var statearr_14760_14773 = state_14737;(statearr_14760_14773[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14737);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14759;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14774 = state_14737;
state_14737 = G__14774;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14737){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14737);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14761 = f__5522__auto__.call(null);(statearr_14761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14762);
return statearr_14761;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14909 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14879){var state_val_14880 = (state_14879[1]);if((state_val_14880 === 1))
{var inst_14842 = (new Array(n));var inst_14843 = inst_14842;var inst_14844 = 0;var state_14879__$1 = (function (){var statearr_14881 = state_14879;(statearr_14881[7] = inst_14844);
(statearr_14881[8] = inst_14843);
return statearr_14881;
})();var statearr_14882_14910 = state_14879__$1;(statearr_14882_14910[2] = null);
(statearr_14882_14910[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 2))
{var state_14879__$1 = state_14879;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14879__$1,4,ch);
} else
{if((state_val_14880 === 3))
{var inst_14877 = (state_14879[2]);var state_14879__$1 = state_14879;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14879__$1,inst_14877);
} else
{if((state_val_14880 === 4))
{var inst_14847 = (state_14879[9]);var inst_14847__$1 = (state_14879[2]);var inst_14848 = (inst_14847__$1 == null);var inst_14849 = cljs.core.not.call(null,inst_14848);var state_14879__$1 = (function (){var statearr_14883 = state_14879;(statearr_14883[9] = inst_14847__$1);
return statearr_14883;
})();if(inst_14849)
{var statearr_14884_14911 = state_14879__$1;(statearr_14884_14911[1] = 5);
} else
{var statearr_14885_14912 = state_14879__$1;(statearr_14885_14912[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 5))
{var inst_14844 = (state_14879[7]);var inst_14852 = (state_14879[10]);var inst_14847 = (state_14879[9]);var inst_14843 = (state_14879[8]);var inst_14851 = (inst_14843[inst_14844] = inst_14847);var inst_14852__$1 = (inst_14844 + 1);var inst_14853 = (inst_14852__$1 < n);var state_14879__$1 = (function (){var statearr_14886 = state_14879;(statearr_14886[10] = inst_14852__$1);
(statearr_14886[11] = inst_14851);
return statearr_14886;
})();if(cljs.core.truth_(inst_14853))
{var statearr_14887_14913 = state_14879__$1;(statearr_14887_14913[1] = 8);
} else
{var statearr_14888_14914 = state_14879__$1;(statearr_14888_14914[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 6))
{var inst_14844 = (state_14879[7]);var inst_14865 = (inst_14844 > 0);var state_14879__$1 = state_14879;if(cljs.core.truth_(inst_14865))
{var statearr_14890_14915 = state_14879__$1;(statearr_14890_14915[1] = 12);
} else
{var statearr_14891_14916 = state_14879__$1;(statearr_14891_14916[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 7))
{var inst_14875 = (state_14879[2]);var state_14879__$1 = state_14879;var statearr_14892_14917 = state_14879__$1;(statearr_14892_14917[2] = inst_14875);
(statearr_14892_14917[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 8))
{var inst_14852 = (state_14879[10]);var inst_14843 = (state_14879[8]);var tmp14889 = inst_14843;var inst_14843__$1 = tmp14889;var inst_14844 = inst_14852;var state_14879__$1 = (function (){var statearr_14893 = state_14879;(statearr_14893[7] = inst_14844);
(statearr_14893[8] = inst_14843__$1);
return statearr_14893;
})();var statearr_14894_14918 = state_14879__$1;(statearr_14894_14918[2] = null);
(statearr_14894_14918[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 9))
{var inst_14843 = (state_14879[8]);var inst_14857 = cljs.core.vec.call(null,inst_14843);var state_14879__$1 = state_14879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14879__$1,11,out,inst_14857);
} else
{if((state_val_14880 === 10))
{var inst_14863 = (state_14879[2]);var state_14879__$1 = state_14879;var statearr_14895_14919 = state_14879__$1;(statearr_14895_14919[2] = inst_14863);
(statearr_14895_14919[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 11))
{var inst_14859 = (state_14879[2]);var inst_14860 = (new Array(n));var inst_14843 = inst_14860;var inst_14844 = 0;var state_14879__$1 = (function (){var statearr_14896 = state_14879;(statearr_14896[12] = inst_14859);
(statearr_14896[7] = inst_14844);
(statearr_14896[8] = inst_14843);
return statearr_14896;
})();var statearr_14897_14920 = state_14879__$1;(statearr_14897_14920[2] = null);
(statearr_14897_14920[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 12))
{var inst_14843 = (state_14879[8]);var inst_14867 = cljs.core.vec.call(null,inst_14843);var state_14879__$1 = state_14879;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14879__$1,15,out,inst_14867);
} else
{if((state_val_14880 === 13))
{var state_14879__$1 = state_14879;var statearr_14898_14921 = state_14879__$1;(statearr_14898_14921[2] = null);
(statearr_14898_14921[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 14))
{var inst_14872 = (state_14879[2]);var inst_14873 = cljs.core.async.close_BANG_.call(null,out);var state_14879__$1 = (function (){var statearr_14899 = state_14879;(statearr_14899[13] = inst_14872);
return statearr_14899;
})();var statearr_14900_14922 = state_14879__$1;(statearr_14900_14922[2] = inst_14873);
(statearr_14900_14922[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14880 === 15))
{var inst_14869 = (state_14879[2]);var state_14879__$1 = state_14879;var statearr_14901_14923 = state_14879__$1;(statearr_14901_14923[2] = inst_14869);
(statearr_14901_14923[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14905 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14905[0] = state_machine__5507__auto__);
(statearr_14905[1] = 1);
return statearr_14905;
});
var state_machine__5507__auto____1 = (function (state_14879){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14879);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14906){if((e14906 instanceof Object))
{var ex__5510__auto__ = e14906;var statearr_14907_14924 = state_14879;(statearr_14907_14924[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14879);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14906;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14925 = state_14879;
state_14879 = G__14925;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14879){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14879);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14908 = f__5522__auto__.call(null);(statearr_14908[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14909);
return statearr_14908;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15068 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15038){var state_val_15039 = (state_15038[1]);if((state_val_15039 === 1))
{var inst_14997 = [];var inst_14998 = inst_14997;var inst_14999 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15038__$1 = (function (){var statearr_15040 = state_15038;(statearr_15040[7] = inst_14998);
(statearr_15040[8] = inst_14999);
return statearr_15040;
})();var statearr_15041_15069 = state_15038__$1;(statearr_15041_15069[2] = null);
(statearr_15041_15069[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 2))
{var state_15038__$1 = state_15038;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15038__$1,4,ch);
} else
{if((state_val_15039 === 3))
{var inst_15036 = (state_15038[2]);var state_15038__$1 = state_15038;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15038__$1,inst_15036);
} else
{if((state_val_15039 === 4))
{var inst_15002 = (state_15038[9]);var inst_15002__$1 = (state_15038[2]);var inst_15003 = (inst_15002__$1 == null);var inst_15004 = cljs.core.not.call(null,inst_15003);var state_15038__$1 = (function (){var statearr_15042 = state_15038;(statearr_15042[9] = inst_15002__$1);
return statearr_15042;
})();if(inst_15004)
{var statearr_15043_15070 = state_15038__$1;(statearr_15043_15070[1] = 5);
} else
{var statearr_15044_15071 = state_15038__$1;(statearr_15044_15071[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 5))
{var inst_14999 = (state_15038[8]);var inst_15006 = (state_15038[10]);var inst_15002 = (state_15038[9]);var inst_15006__$1 = f.call(null,inst_15002);var inst_15007 = cljs.core._EQ_.call(null,inst_15006__$1,inst_14999);var inst_15008 = cljs.core.keyword_identical_QMARK_.call(null,inst_14999,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15009 = (inst_15007) || (inst_15008);var state_15038__$1 = (function (){var statearr_15045 = state_15038;(statearr_15045[10] = inst_15006__$1);
return statearr_15045;
})();if(cljs.core.truth_(inst_15009))
{var statearr_15046_15072 = state_15038__$1;(statearr_15046_15072[1] = 8);
} else
{var statearr_15047_15073 = state_15038__$1;(statearr_15047_15073[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 6))
{var inst_14998 = (state_15038[7]);var inst_15023 = inst_14998.length;var inst_15024 = (inst_15023 > 0);var state_15038__$1 = state_15038;if(cljs.core.truth_(inst_15024))
{var statearr_15049_15074 = state_15038__$1;(statearr_15049_15074[1] = 12);
} else
{var statearr_15050_15075 = state_15038__$1;(statearr_15050_15075[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 7))
{var inst_15034 = (state_15038[2]);var state_15038__$1 = state_15038;var statearr_15051_15076 = state_15038__$1;(statearr_15051_15076[2] = inst_15034);
(statearr_15051_15076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 8))
{var inst_14998 = (state_15038[7]);var inst_15006 = (state_15038[10]);var inst_15002 = (state_15038[9]);var inst_15011 = inst_14998.push(inst_15002);var tmp15048 = inst_14998;var inst_14998__$1 = tmp15048;var inst_14999 = inst_15006;var state_15038__$1 = (function (){var statearr_15052 = state_15038;(statearr_15052[11] = inst_15011);
(statearr_15052[7] = inst_14998__$1);
(statearr_15052[8] = inst_14999);
return statearr_15052;
})();var statearr_15053_15077 = state_15038__$1;(statearr_15053_15077[2] = null);
(statearr_15053_15077[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 9))
{var inst_14998 = (state_15038[7]);var inst_15014 = cljs.core.vec.call(null,inst_14998);var state_15038__$1 = state_15038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15038__$1,11,out,inst_15014);
} else
{if((state_val_15039 === 10))
{var inst_15021 = (state_15038[2]);var state_15038__$1 = state_15038;var statearr_15054_15078 = state_15038__$1;(statearr_15054_15078[2] = inst_15021);
(statearr_15054_15078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 11))
{var inst_15006 = (state_15038[10]);var inst_15002 = (state_15038[9]);var inst_15016 = (state_15038[2]);var inst_15017 = [];var inst_15018 = inst_15017.push(inst_15002);var inst_14998 = inst_15017;var inst_14999 = inst_15006;var state_15038__$1 = (function (){var statearr_15055 = state_15038;(statearr_15055[7] = inst_14998);
(statearr_15055[8] = inst_14999);
(statearr_15055[12] = inst_15018);
(statearr_15055[13] = inst_15016);
return statearr_15055;
})();var statearr_15056_15079 = state_15038__$1;(statearr_15056_15079[2] = null);
(statearr_15056_15079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 12))
{var inst_14998 = (state_15038[7]);var inst_15026 = cljs.core.vec.call(null,inst_14998);var state_15038__$1 = state_15038;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15038__$1,15,out,inst_15026);
} else
{if((state_val_15039 === 13))
{var state_15038__$1 = state_15038;var statearr_15057_15080 = state_15038__$1;(statearr_15057_15080[2] = null);
(statearr_15057_15080[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 14))
{var inst_15031 = (state_15038[2]);var inst_15032 = cljs.core.async.close_BANG_.call(null,out);var state_15038__$1 = (function (){var statearr_15058 = state_15038;(statearr_15058[14] = inst_15031);
return statearr_15058;
})();var statearr_15059_15081 = state_15038__$1;(statearr_15059_15081[2] = inst_15032);
(statearr_15059_15081[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15039 === 15))
{var inst_15028 = (state_15038[2]);var state_15038__$1 = state_15038;var statearr_15060_15082 = state_15038__$1;(statearr_15060_15082[2] = inst_15028);
(statearr_15060_15082[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15064 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15064[0] = state_machine__5507__auto__);
(statearr_15064[1] = 1);
return statearr_15064;
});
var state_machine__5507__auto____1 = (function (state_15038){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15038);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15065){if((e15065 instanceof Object))
{var ex__5510__auto__ = e15065;var statearr_15066_15083 = state_15038;(statearr_15066_15083[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15038);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15084 = state_15038;
state_15038 = G__15084;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15038){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15038);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15067 = f__5522__auto__.call(null);(statearr_15067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15068);
return statearr_15067;
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

//# sourceMappingURL=async.js.map