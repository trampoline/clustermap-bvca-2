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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12467 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12467 = (function (f,fn_handler,meta12468){
this.f = f;
this.fn_handler = fn_handler;
this.meta12468 = meta12468;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12467.cljs$lang$type = true;
cljs.core.async.t12467.cljs$lang$ctorStr = "cljs.core.async/t12467";
cljs.core.async.t12467.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12467");
});
cljs.core.async.t12467.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12467.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12467.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12467.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12469){var self__ = this;
var _12469__$1 = this;return self__.meta12468;
});
cljs.core.async.t12467.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12469,meta12468__$1){var self__ = this;
var _12469__$1 = this;return (new cljs.core.async.t12467(self__.f,self__.fn_handler,meta12468__$1));
});
cljs.core.async.__GT_t12467 = (function __GT_t12467(f__$1,fn_handler__$1,meta12468){return (new cljs.core.async.t12467(f__$1,fn_handler__$1,meta12468));
});
}
return (new cljs.core.async.t12467(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12471 = buff;if(G__12471)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12471.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12471.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12471);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12471);
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
{var val_12472 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12472);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12472);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12473 = n;var x_12474 = 0;while(true){
if((x_12474 < n__4248__auto___12473))
{(a[x_12474] = 0);
{
var G__12475 = (x_12474 + 1);
x_12474 = G__12475;
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
var G__12476 = (i + 1);
i = G__12476;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12480 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12480 = (function (flag,alt_flag,meta12481){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12481 = meta12481;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12480.cljs$lang$type = true;
cljs.core.async.t12480.cljs$lang$ctorStr = "cljs.core.async/t12480";
cljs.core.async.t12480.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12480");
});
cljs.core.async.t12480.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12480.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12480.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12480.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12482){var self__ = this;
var _12482__$1 = this;return self__.meta12481;
});
cljs.core.async.t12480.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12482,meta12481__$1){var self__ = this;
var _12482__$1 = this;return (new cljs.core.async.t12480(self__.flag,self__.alt_flag,meta12481__$1));
});
cljs.core.async.__GT_t12480 = (function __GT_t12480(flag__$1,alt_flag__$1,meta12481){return (new cljs.core.async.t12480(flag__$1,alt_flag__$1,meta12481));
});
}
return (new cljs.core.async.t12480(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12486 = (function (cb,flag,alt_handler,meta12487){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12487 = meta12487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12486.cljs$lang$type = true;
cljs.core.async.t12486.cljs$lang$ctorStr = "cljs.core.async/t12486";
cljs.core.async.t12486.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12486");
});
cljs.core.async.t12486.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12486.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12486.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12486.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12488){var self__ = this;
var _12488__$1 = this;return self__.meta12487;
});
cljs.core.async.t12486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12488,meta12487__$1){var self__ = this;
var _12488__$1 = this;return (new cljs.core.async.t12486(self__.cb,self__.flag,self__.alt_handler,meta12487__$1));
});
cljs.core.async.__GT_t12486 = (function __GT_t12486(cb__$1,flag__$1,alt_handler__$1,meta12487){return (new cljs.core.async.t12486(cb__$1,flag__$1,alt_handler__$1,meta12487));
});
}
return (new cljs.core.async.t12486(cb,flag,alt_handler,null));
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
return (function (p1__12489_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12489_SHARP_,port], null));
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
var G__12490 = (i + 1);
i = G__12490;
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
var alts_BANG___delegate = function (ports,p__12491){var map__12493 = p__12491;var map__12493__$1 = ((cljs.core.seq_QMARK_.call(null,map__12493))?cljs.core.apply.call(null,cljs.core.hash_map,map__12493):map__12493);var opts = map__12493__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12491 = null;if (arguments.length > 1) {
  p__12491 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12491);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12494){
var ports = cljs.core.first(arglist__12494);
var p__12491 = cljs.core.rest(arglist__12494);
return alts_BANG___delegate(ports,p__12491);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12502 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12502 = (function (ch,f,map_LT_,meta12503){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12503 = meta12503;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12502.cljs$lang$type = true;
cljs.core.async.t12502.cljs$lang$ctorStr = "cljs.core.async/t12502";
cljs.core.async.t12502.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12502");
});
cljs.core.async.t12502.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12502.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12502.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12502.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12505 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12505 = (function (fn1,_,meta12503,ch,f,map_LT_,meta12506){
this.fn1 = fn1;
this._ = _;
this.meta12503 = meta12503;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12506 = meta12506;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12505.cljs$lang$type = true;
cljs.core.async.t12505.cljs$lang$ctorStr = "cljs.core.async/t12505";
cljs.core.async.t12505.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12505");
});
cljs.core.async.t12505.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12505.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12505.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12505.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12495_SHARP_){return f1.call(null,(((p1__12495_SHARP_ == null))?null:self__.f.call(null,p1__12495_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12505.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12507){var self__ = this;
var _12507__$1 = this;return self__.meta12506;
});
cljs.core.async.t12505.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12507,meta12506__$1){var self__ = this;
var _12507__$1 = this;return (new cljs.core.async.t12505(self__.fn1,self__._,self__.meta12503,self__.ch,self__.f,self__.map_LT_,meta12506__$1));
});
cljs.core.async.__GT_t12505 = (function __GT_t12505(fn1__$1,___$2,meta12503__$1,ch__$2,f__$2,map_LT___$2,meta12506){return (new cljs.core.async.t12505(fn1__$1,___$2,meta12503__$1,ch__$2,f__$2,map_LT___$2,meta12506));
});
}
return (new cljs.core.async.t12505(fn1,___$1,self__.meta12503,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12502.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12502.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12502.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12504){var self__ = this;
var _12504__$1 = this;return self__.meta12503;
});
cljs.core.async.t12502.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12504,meta12503__$1){var self__ = this;
var _12504__$1 = this;return (new cljs.core.async.t12502(self__.ch,self__.f,self__.map_LT_,meta12503__$1));
});
cljs.core.async.__GT_t12502 = (function __GT_t12502(ch__$1,f__$1,map_LT___$1,meta12503){return (new cljs.core.async.t12502(ch__$1,f__$1,map_LT___$1,meta12503));
});
}
return (new cljs.core.async.t12502(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12511 = (function (ch,f,map_GT_,meta12512){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12512 = meta12512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12511.cljs$lang$type = true;
cljs.core.async.t12511.cljs$lang$ctorStr = "cljs.core.async/t12511";
cljs.core.async.t12511.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12511");
});
cljs.core.async.t12511.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12511.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12511.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12511.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12511.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12511.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12511.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12513){var self__ = this;
var _12513__$1 = this;return self__.meta12512;
});
cljs.core.async.t12511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12513,meta12512__$1){var self__ = this;
var _12513__$1 = this;return (new cljs.core.async.t12511(self__.ch,self__.f,self__.map_GT_,meta12512__$1));
});
cljs.core.async.__GT_t12511 = (function __GT_t12511(ch__$1,f__$1,map_GT___$1,meta12512){return (new cljs.core.async.t12511(ch__$1,f__$1,map_GT___$1,meta12512));
});
}
return (new cljs.core.async.t12511(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12517 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12517 = (function (ch,p,filter_GT_,meta12518){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12518 = meta12518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12517.cljs$lang$type = true;
cljs.core.async.t12517.cljs$lang$ctorStr = "cljs.core.async/t12517";
cljs.core.async.t12517.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12517");
});
cljs.core.async.t12517.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12517.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12517.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12519){var self__ = this;
var _12519__$1 = this;return self__.meta12518;
});
cljs.core.async.t12517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12519,meta12518__$1){var self__ = this;
var _12519__$1 = this;return (new cljs.core.async.t12517(self__.ch,self__.p,self__.filter_GT_,meta12518__$1));
});
cljs.core.async.__GT_t12517 = (function __GT_t12517(ch__$1,p__$1,filter_GT___$1,meta12518){return (new cljs.core.async.t12517(ch__$1,p__$1,filter_GT___$1,meta12518));
});
}
return (new cljs.core.async.t12517(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12602 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12581){var state_val_12582 = (state_12581[1]);if((state_val_12582 === 1))
{var state_12581__$1 = state_12581;var statearr_12583_12603 = state_12581__$1;(statearr_12583_12603[2] = null);
(statearr_12583_12603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 2))
{var state_12581__$1 = state_12581;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12581__$1,4,ch);
} else
{if((state_val_12582 === 3))
{var inst_12579 = (state_12581[2]);var state_12581__$1 = state_12581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12581__$1,inst_12579);
} else
{if((state_val_12582 === 4))
{var inst_12563 = (state_12581[7]);var inst_12563__$1 = (state_12581[2]);var inst_12564 = (inst_12563__$1 == null);var state_12581__$1 = (function (){var statearr_12584 = state_12581;(statearr_12584[7] = inst_12563__$1);
return statearr_12584;
})();if(cljs.core.truth_(inst_12564))
{var statearr_12585_12604 = state_12581__$1;(statearr_12585_12604[1] = 5);
} else
{var statearr_12586_12605 = state_12581__$1;(statearr_12586_12605[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 5))
{var inst_12566 = cljs.core.async.close_BANG_.call(null,out);var state_12581__$1 = state_12581;var statearr_12587_12606 = state_12581__$1;(statearr_12587_12606[2] = inst_12566);
(statearr_12587_12606[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 6))
{var inst_12563 = (state_12581[7]);var inst_12568 = p.call(null,inst_12563);var state_12581__$1 = state_12581;if(cljs.core.truth_(inst_12568))
{var statearr_12588_12607 = state_12581__$1;(statearr_12588_12607[1] = 8);
} else
{var statearr_12589_12608 = state_12581__$1;(statearr_12589_12608[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 7))
{var inst_12577 = (state_12581[2]);var state_12581__$1 = state_12581;var statearr_12590_12609 = state_12581__$1;(statearr_12590_12609[2] = inst_12577);
(statearr_12590_12609[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 8))
{var inst_12563 = (state_12581[7]);var state_12581__$1 = state_12581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12581__$1,11,out,inst_12563);
} else
{if((state_val_12582 === 9))
{var state_12581__$1 = state_12581;var statearr_12591_12610 = state_12581__$1;(statearr_12591_12610[2] = null);
(statearr_12591_12610[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 10))
{var inst_12574 = (state_12581[2]);var state_12581__$1 = (function (){var statearr_12592 = state_12581;(statearr_12592[8] = inst_12574);
return statearr_12592;
})();var statearr_12593_12611 = state_12581__$1;(statearr_12593_12611[2] = null);
(statearr_12593_12611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12582 === 11))
{var inst_12571 = (state_12581[2]);var state_12581__$1 = state_12581;var statearr_12594_12612 = state_12581__$1;(statearr_12594_12612[2] = inst_12571);
(statearr_12594_12612[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12598 = [null,null,null,null,null,null,null,null,null];(statearr_12598[0] = state_machine__5507__auto__);
(statearr_12598[1] = 1);
return statearr_12598;
});
var state_machine__5507__auto____1 = (function (state_12581){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12599){if((e12599 instanceof Object))
{var ex__5510__auto__ = e12599;var statearr_12600_12613 = state_12581;(statearr_12600_12613[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12581);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12599;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12614 = state_12581;
state_12581 = G__12614;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12581){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12601 = f__5522__auto__.call(null);(statearr_12601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12602);
return statearr_12601;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12766){var state_val_12767 = (state_12766[1]);if((state_val_12767 === 1))
{var state_12766__$1 = state_12766;var statearr_12768_12805 = state_12766__$1;(statearr_12768_12805[2] = null);
(statearr_12768_12805[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 2))
{var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12766__$1,4,in$);
} else
{if((state_val_12767 === 3))
{var inst_12764 = (state_12766[2]);var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12766__$1,inst_12764);
} else
{if((state_val_12767 === 4))
{var inst_12712 = (state_12766[7]);var inst_12712__$1 = (state_12766[2]);var inst_12713 = (inst_12712__$1 == null);var state_12766__$1 = (function (){var statearr_12769 = state_12766;(statearr_12769[7] = inst_12712__$1);
return statearr_12769;
})();if(cljs.core.truth_(inst_12713))
{var statearr_12770_12806 = state_12766__$1;(statearr_12770_12806[1] = 5);
} else
{var statearr_12771_12807 = state_12766__$1;(statearr_12771_12807[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 5))
{var inst_12715 = cljs.core.async.close_BANG_.call(null,out);var state_12766__$1 = state_12766;var statearr_12772_12808 = state_12766__$1;(statearr_12772_12808[2] = inst_12715);
(statearr_12772_12808[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 6))
{var inst_12712 = (state_12766[7]);var inst_12717 = f.call(null,inst_12712);var inst_12722 = cljs.core.seq.call(null,inst_12717);var inst_12723 = inst_12722;var inst_12724 = null;var inst_12725 = 0;var inst_12726 = 0;var state_12766__$1 = (function (){var statearr_12773 = state_12766;(statearr_12773[8] = inst_12726);
(statearr_12773[9] = inst_12725);
(statearr_12773[10] = inst_12723);
(statearr_12773[11] = inst_12724);
return statearr_12773;
})();var statearr_12774_12809 = state_12766__$1;(statearr_12774_12809[2] = null);
(statearr_12774_12809[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 7))
{var inst_12762 = (state_12766[2]);var state_12766__$1 = state_12766;var statearr_12775_12810 = state_12766__$1;(statearr_12775_12810[2] = inst_12762);
(statearr_12775_12810[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 8))
{var inst_12726 = (state_12766[8]);var inst_12725 = (state_12766[9]);var inst_12728 = (inst_12726 < inst_12725);var inst_12729 = inst_12728;var state_12766__$1 = state_12766;if(cljs.core.truth_(inst_12729))
{var statearr_12776_12811 = state_12766__$1;(statearr_12776_12811[1] = 10);
} else
{var statearr_12777_12812 = state_12766__$1;(statearr_12777_12812[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 9))
{var inst_12759 = (state_12766[2]);var state_12766__$1 = (function (){var statearr_12778 = state_12766;(statearr_12778[12] = inst_12759);
return statearr_12778;
})();var statearr_12779_12813 = state_12766__$1;(statearr_12779_12813[2] = null);
(statearr_12779_12813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 10))
{var inst_12726 = (state_12766[8]);var inst_12724 = (state_12766[11]);var inst_12731 = cljs.core._nth.call(null,inst_12724,inst_12726);var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12766__$1,13,out,inst_12731);
} else
{if((state_val_12767 === 11))
{var inst_12737 = (state_12766[13]);var inst_12723 = (state_12766[10]);var inst_12737__$1 = cljs.core.seq.call(null,inst_12723);var state_12766__$1 = (function (){var statearr_12783 = state_12766;(statearr_12783[13] = inst_12737__$1);
return statearr_12783;
})();if(inst_12737__$1)
{var statearr_12784_12814 = state_12766__$1;(statearr_12784_12814[1] = 14);
} else
{var statearr_12785_12815 = state_12766__$1;(statearr_12785_12815[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 12))
{var inst_12757 = (state_12766[2]);var state_12766__$1 = state_12766;var statearr_12786_12816 = state_12766__$1;(statearr_12786_12816[2] = inst_12757);
(statearr_12786_12816[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 13))
{var inst_12726 = (state_12766[8]);var inst_12725 = (state_12766[9]);var inst_12723 = (state_12766[10]);var inst_12724 = (state_12766[11]);var inst_12733 = (state_12766[2]);var inst_12734 = (inst_12726 + 1);var tmp12780 = inst_12725;var tmp12781 = inst_12723;var tmp12782 = inst_12724;var inst_12723__$1 = tmp12781;var inst_12724__$1 = tmp12782;var inst_12725__$1 = tmp12780;var inst_12726__$1 = inst_12734;var state_12766__$1 = (function (){var statearr_12787 = state_12766;(statearr_12787[8] = inst_12726__$1);
(statearr_12787[9] = inst_12725__$1);
(statearr_12787[14] = inst_12733);
(statearr_12787[10] = inst_12723__$1);
(statearr_12787[11] = inst_12724__$1);
return statearr_12787;
})();var statearr_12788_12817 = state_12766__$1;(statearr_12788_12817[2] = null);
(statearr_12788_12817[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 14))
{var inst_12737 = (state_12766[13]);var inst_12739 = cljs.core.chunked_seq_QMARK_.call(null,inst_12737);var state_12766__$1 = state_12766;if(inst_12739)
{var statearr_12789_12818 = state_12766__$1;(statearr_12789_12818[1] = 17);
} else
{var statearr_12790_12819 = state_12766__$1;(statearr_12790_12819[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 15))
{var state_12766__$1 = state_12766;var statearr_12791_12820 = state_12766__$1;(statearr_12791_12820[2] = null);
(statearr_12791_12820[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 16))
{var inst_12755 = (state_12766[2]);var state_12766__$1 = state_12766;var statearr_12792_12821 = state_12766__$1;(statearr_12792_12821[2] = inst_12755);
(statearr_12792_12821[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 17))
{var inst_12737 = (state_12766[13]);var inst_12741 = cljs.core.chunk_first.call(null,inst_12737);var inst_12742 = cljs.core.chunk_rest.call(null,inst_12737);var inst_12743 = cljs.core.count.call(null,inst_12741);var inst_12723 = inst_12742;var inst_12724 = inst_12741;var inst_12725 = inst_12743;var inst_12726 = 0;var state_12766__$1 = (function (){var statearr_12793 = state_12766;(statearr_12793[8] = inst_12726);
(statearr_12793[9] = inst_12725);
(statearr_12793[10] = inst_12723);
(statearr_12793[11] = inst_12724);
return statearr_12793;
})();var statearr_12794_12822 = state_12766__$1;(statearr_12794_12822[2] = null);
(statearr_12794_12822[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 18))
{var inst_12737 = (state_12766[13]);var inst_12746 = cljs.core.first.call(null,inst_12737);var state_12766__$1 = state_12766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12766__$1,20,out,inst_12746);
} else
{if((state_val_12767 === 19))
{var inst_12752 = (state_12766[2]);var state_12766__$1 = state_12766;var statearr_12795_12823 = state_12766__$1;(statearr_12795_12823[2] = inst_12752);
(statearr_12795_12823[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12767 === 20))
{var inst_12737 = (state_12766[13]);var inst_12748 = (state_12766[2]);var inst_12749 = cljs.core.next.call(null,inst_12737);var inst_12723 = inst_12749;var inst_12724 = null;var inst_12725 = 0;var inst_12726 = 0;var state_12766__$1 = (function (){var statearr_12796 = state_12766;(statearr_12796[8] = inst_12726);
(statearr_12796[9] = inst_12725);
(statearr_12796[10] = inst_12723);
(statearr_12796[11] = inst_12724);
(statearr_12796[15] = inst_12748);
return statearr_12796;
})();var statearr_12797_12824 = state_12766__$1;(statearr_12797_12824[2] = null);
(statearr_12797_12824[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12801[0] = state_machine__5507__auto__);
(statearr_12801[1] = 1);
return statearr_12801;
});
var state_machine__5507__auto____1 = (function (state_12766){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12766);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12802){if((e12802 instanceof Object))
{var ex__5510__auto__ = e12802;var statearr_12803_12825 = state_12766;(statearr_12803_12825[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12766);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12826 = state_12766;
state_12766 = G__12826;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12766){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12804 = f__5522__auto__.call(null);(statearr_12804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12804;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12907 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12886){var state_val_12887 = (state_12886[1]);if((state_val_12887 === 1))
{var state_12886__$1 = state_12886;var statearr_12888_12908 = state_12886__$1;(statearr_12888_12908[2] = null);
(statearr_12888_12908[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 2))
{var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12886__$1,4,from);
} else
{if((state_val_12887 === 3))
{var inst_12884 = (state_12886[2]);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12886__$1,inst_12884);
} else
{if((state_val_12887 === 4))
{var inst_12869 = (state_12886[7]);var inst_12869__$1 = (state_12886[2]);var inst_12870 = (inst_12869__$1 == null);var state_12886__$1 = (function (){var statearr_12889 = state_12886;(statearr_12889[7] = inst_12869__$1);
return statearr_12889;
})();if(cljs.core.truth_(inst_12870))
{var statearr_12890_12909 = state_12886__$1;(statearr_12890_12909[1] = 5);
} else
{var statearr_12891_12910 = state_12886__$1;(statearr_12891_12910[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 5))
{var state_12886__$1 = state_12886;if(cljs.core.truth_(close_QMARK_))
{var statearr_12892_12911 = state_12886__$1;(statearr_12892_12911[1] = 8);
} else
{var statearr_12893_12912 = state_12886__$1;(statearr_12893_12912[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 6))
{var inst_12869 = (state_12886[7]);var state_12886__$1 = state_12886;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12886__$1,11,to,inst_12869);
} else
{if((state_val_12887 === 7))
{var inst_12882 = (state_12886[2]);var state_12886__$1 = state_12886;var statearr_12894_12913 = state_12886__$1;(statearr_12894_12913[2] = inst_12882);
(statearr_12894_12913[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 8))
{var inst_12873 = cljs.core.async.close_BANG_.call(null,to);var state_12886__$1 = state_12886;var statearr_12895_12914 = state_12886__$1;(statearr_12895_12914[2] = inst_12873);
(statearr_12895_12914[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 9))
{var state_12886__$1 = state_12886;var statearr_12896_12915 = state_12886__$1;(statearr_12896_12915[2] = null);
(statearr_12896_12915[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 10))
{var inst_12876 = (state_12886[2]);var state_12886__$1 = state_12886;var statearr_12897_12916 = state_12886__$1;(statearr_12897_12916[2] = inst_12876);
(statearr_12897_12916[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12887 === 11))
{var inst_12879 = (state_12886[2]);var state_12886__$1 = (function (){var statearr_12898 = state_12886;(statearr_12898[8] = inst_12879);
return statearr_12898;
})();var statearr_12899_12917 = state_12886__$1;(statearr_12899_12917[2] = null);
(statearr_12899_12917[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12903 = [null,null,null,null,null,null,null,null,null];(statearr_12903[0] = state_machine__5507__auto__);
(statearr_12903[1] = 1);
return statearr_12903;
});
var state_machine__5507__auto____1 = (function (state_12886){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12886);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12904){if((e12904 instanceof Object))
{var ex__5510__auto__ = e12904;var statearr_12905_12918 = state_12886;(statearr_12905_12918[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12886);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12904;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12919 = state_12886;
state_12886 = G__12919;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12886){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12886);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12906 = f__5522__auto__.call(null);(statearr_12906[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12907);
return statearr_12906;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13006 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12984){var state_val_12985 = (state_12984[1]);if((state_val_12985 === 1))
{var state_12984__$1 = state_12984;var statearr_12986_13007 = state_12984__$1;(statearr_12986_13007[2] = null);
(statearr_12986_13007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 2))
{var state_12984__$1 = state_12984;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12984__$1,4,ch);
} else
{if((state_val_12985 === 3))
{var inst_12982 = (state_12984[2]);var state_12984__$1 = state_12984;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12984__$1,inst_12982);
} else
{if((state_val_12985 === 4))
{var inst_12965 = (state_12984[7]);var inst_12965__$1 = (state_12984[2]);var inst_12966 = (inst_12965__$1 == null);var state_12984__$1 = (function (){var statearr_12987 = state_12984;(statearr_12987[7] = inst_12965__$1);
return statearr_12987;
})();if(cljs.core.truth_(inst_12966))
{var statearr_12988_13008 = state_12984__$1;(statearr_12988_13008[1] = 5);
} else
{var statearr_12989_13009 = state_12984__$1;(statearr_12989_13009[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 5))
{var inst_12968 = cljs.core.async.close_BANG_.call(null,tc);var inst_12969 = cljs.core.async.close_BANG_.call(null,fc);var state_12984__$1 = (function (){var statearr_12990 = state_12984;(statearr_12990[8] = inst_12968);
return statearr_12990;
})();var statearr_12991_13010 = state_12984__$1;(statearr_12991_13010[2] = inst_12969);
(statearr_12991_13010[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 6))
{var inst_12965 = (state_12984[7]);var inst_12971 = p.call(null,inst_12965);var state_12984__$1 = state_12984;if(cljs.core.truth_(inst_12971))
{var statearr_12992_13011 = state_12984__$1;(statearr_12992_13011[1] = 9);
} else
{var statearr_12993_13012 = state_12984__$1;(statearr_12993_13012[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 7))
{var inst_12980 = (state_12984[2]);var state_12984__$1 = state_12984;var statearr_12994_13013 = state_12984__$1;(statearr_12994_13013[2] = inst_12980);
(statearr_12994_13013[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 8))
{var inst_12977 = (state_12984[2]);var state_12984__$1 = (function (){var statearr_12995 = state_12984;(statearr_12995[9] = inst_12977);
return statearr_12995;
})();var statearr_12996_13014 = state_12984__$1;(statearr_12996_13014[2] = null);
(statearr_12996_13014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 9))
{var state_12984__$1 = state_12984;var statearr_12997_13015 = state_12984__$1;(statearr_12997_13015[2] = tc);
(statearr_12997_13015[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 10))
{var state_12984__$1 = state_12984;var statearr_12998_13016 = state_12984__$1;(statearr_12998_13016[2] = fc);
(statearr_12998_13016[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12985 === 11))
{var inst_12965 = (state_12984[7]);var inst_12975 = (state_12984[2]);var state_12984__$1 = state_12984;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12984__$1,8,inst_12975,inst_12965);
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
var state_machine__5507__auto____0 = (function (){var statearr_13002 = [null,null,null,null,null,null,null,null,null,null];(statearr_13002[0] = state_machine__5507__auto__);
(statearr_13002[1] = 1);
return statearr_13002;
});
var state_machine__5507__auto____1 = (function (state_12984){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12984);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13003){if((e13003 instanceof Object))
{var ex__5510__auto__ = e13003;var statearr_13004_13017 = state_12984;(statearr_13004_13017[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12984);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13018 = state_12984;
state_12984 = G__13018;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12984){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12984);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13005 = f__5522__auto__.call(null);(statearr_13005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13006);
return statearr_13005;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13065){var state_val_13066 = (state_13065[1]);if((state_val_13066 === 7))
{var inst_13061 = (state_13065[2]);var state_13065__$1 = state_13065;var statearr_13067_13083 = state_13065__$1;(statearr_13067_13083[2] = inst_13061);
(statearr_13067_13083[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 6))
{var inst_13054 = (state_13065[7]);var inst_13051 = (state_13065[8]);var inst_13058 = f.call(null,inst_13051,inst_13054);var inst_13051__$1 = inst_13058;var state_13065__$1 = (function (){var statearr_13068 = state_13065;(statearr_13068[8] = inst_13051__$1);
return statearr_13068;
})();var statearr_13069_13084 = state_13065__$1;(statearr_13069_13084[2] = null);
(statearr_13069_13084[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 5))
{var inst_13051 = (state_13065[8]);var state_13065__$1 = state_13065;var statearr_13070_13085 = state_13065__$1;(statearr_13070_13085[2] = inst_13051);
(statearr_13070_13085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 4))
{var inst_13054 = (state_13065[7]);var inst_13054__$1 = (state_13065[2]);var inst_13055 = (inst_13054__$1 == null);var state_13065__$1 = (function (){var statearr_13071 = state_13065;(statearr_13071[7] = inst_13054__$1);
return statearr_13071;
})();if(cljs.core.truth_(inst_13055))
{var statearr_13072_13086 = state_13065__$1;(statearr_13072_13086[1] = 5);
} else
{var statearr_13073_13087 = state_13065__$1;(statearr_13073_13087[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13066 === 3))
{var inst_13063 = (state_13065[2]);var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13065__$1,inst_13063);
} else
{if((state_val_13066 === 2))
{var state_13065__$1 = state_13065;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13065__$1,4,ch);
} else
{if((state_val_13066 === 1))
{var inst_13051 = init;var state_13065__$1 = (function (){var statearr_13074 = state_13065;(statearr_13074[8] = inst_13051);
return statearr_13074;
})();var statearr_13075_13088 = state_13065__$1;(statearr_13075_13088[2] = null);
(statearr_13075_13088[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13079 = [null,null,null,null,null,null,null,null,null];(statearr_13079[0] = state_machine__5507__auto__);
(statearr_13079[1] = 1);
return statearr_13079;
});
var state_machine__5507__auto____1 = (function (state_13065){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13065);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13080){if((e13080 instanceof Object))
{var ex__5510__auto__ = e13080;var statearr_13081_13089 = state_13065;(statearr_13081_13089[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13065);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13080;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13090 = state_13065;
state_13065 = G__13090;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13065){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13082 = f__5522__auto__.call(null);(statearr_13082[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13082;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13152){var state_val_13153 = (state_13152[1]);if((state_val_13153 === 1))
{var inst_13132 = cljs.core.seq.call(null,coll);var inst_13133 = inst_13132;var state_13152__$1 = (function (){var statearr_13154 = state_13152;(statearr_13154[7] = inst_13133);
return statearr_13154;
})();var statearr_13155_13173 = state_13152__$1;(statearr_13155_13173[2] = null);
(statearr_13155_13173[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13153 === 2))
{var inst_13133 = (state_13152[7]);var state_13152__$1 = state_13152;if(cljs.core.truth_(inst_13133))
{var statearr_13156_13174 = state_13152__$1;(statearr_13156_13174[1] = 4);
} else
{var statearr_13157_13175 = state_13152__$1;(statearr_13157_13175[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13153 === 3))
{var inst_13150 = (state_13152[2]);var state_13152__$1 = state_13152;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13152__$1,inst_13150);
} else
{if((state_val_13153 === 4))
{var inst_13133 = (state_13152[7]);var inst_13136 = cljs.core.first.call(null,inst_13133);var state_13152__$1 = state_13152;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13152__$1,7,ch,inst_13136);
} else
{if((state_val_13153 === 5))
{var state_13152__$1 = state_13152;if(cljs.core.truth_(close_QMARK_))
{var statearr_13158_13176 = state_13152__$1;(statearr_13158_13176[1] = 8);
} else
{var statearr_13159_13177 = state_13152__$1;(statearr_13159_13177[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13153 === 6))
{var inst_13148 = (state_13152[2]);var state_13152__$1 = state_13152;var statearr_13160_13178 = state_13152__$1;(statearr_13160_13178[2] = inst_13148);
(statearr_13160_13178[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13153 === 7))
{var inst_13133 = (state_13152[7]);var inst_13138 = (state_13152[2]);var inst_13139 = cljs.core.next.call(null,inst_13133);var inst_13133__$1 = inst_13139;var state_13152__$1 = (function (){var statearr_13161 = state_13152;(statearr_13161[7] = inst_13133__$1);
(statearr_13161[8] = inst_13138);
return statearr_13161;
})();var statearr_13162_13179 = state_13152__$1;(statearr_13162_13179[2] = null);
(statearr_13162_13179[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13153 === 8))
{var inst_13143 = cljs.core.async.close_BANG_.call(null,ch);var state_13152__$1 = state_13152;var statearr_13163_13180 = state_13152__$1;(statearr_13163_13180[2] = inst_13143);
(statearr_13163_13180[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13153 === 9))
{var state_13152__$1 = state_13152;var statearr_13164_13181 = state_13152__$1;(statearr_13164_13181[2] = null);
(statearr_13164_13181[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13153 === 10))
{var inst_13146 = (state_13152[2]);var state_13152__$1 = state_13152;var statearr_13165_13182 = state_13152__$1;(statearr_13165_13182[2] = inst_13146);
(statearr_13165_13182[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13169 = [null,null,null,null,null,null,null,null,null];(statearr_13169[0] = state_machine__5507__auto__);
(statearr_13169[1] = 1);
return statearr_13169;
});
var state_machine__5507__auto____1 = (function (state_13152){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13152);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13170){if((e13170 instanceof Object))
{var ex__5510__auto__ = e13170;var statearr_13171_13183 = state_13152;(statearr_13171_13183[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13152);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13170;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13184 = state_13152;
state_13152 = G__13184;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13152){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13172 = f__5522__auto__.call(null);(statearr_13172[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13172;
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
cljs.core.async.Mux = (function (){var obj13186 = {};return obj13186;
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
cljs.core.async.Mult = (function (){var obj13188 = {};return obj13188;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13412 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13412 = (function (cs,ch,mult,meta13413){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13413 = meta13413;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13412.cljs$lang$type = true;
cljs.core.async.t13412.cljs$lang$ctorStr = "cljs.core.async/t13412";
cljs.core.async.t13412.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13412");
});})(cs))
;
cljs.core.async.t13412.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13412.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13412.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13412.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13412.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13412.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13412.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13414){var self__ = this;
var _13414__$1 = this;return self__.meta13413;
});})(cs))
;
cljs.core.async.t13412.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13414,meta13413__$1){var self__ = this;
var _13414__$1 = this;return (new cljs.core.async.t13412(self__.cs,self__.ch,self__.mult,meta13413__$1));
});})(cs))
;
cljs.core.async.__GT_t13412 = ((function (cs){
return (function __GT_t13412(cs__$1,ch__$1,mult__$1,meta13413){return (new cljs.core.async.t13412(cs__$1,ch__$1,mult__$1,meta13413));
});})(cs))
;
}
return (new cljs.core.async.t13412(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13635 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13549){var state_val_13550 = (state_13549[1]);if((state_val_13550 === 32))
{var inst_13493 = (state_13549[7]);var inst_13417 = (state_13549[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13549,31,Object,null,30);var inst_13500 = cljs.core.async.put_BANG_.call(null,inst_13493,inst_13417,done);var state_13549__$1 = state_13549;var statearr_13551_13636 = state_13549__$1;(statearr_13551_13636[2] = inst_13500);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13549__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 1))
{var state_13549__$1 = state_13549;var statearr_13552_13637 = state_13549__$1;(statearr_13552_13637[2] = null);
(statearr_13552_13637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 33))
{var inst_13506 = (state_13549[9]);var inst_13508 = cljs.core.chunked_seq_QMARK_.call(null,inst_13506);var state_13549__$1 = state_13549;if(inst_13508)
{var statearr_13553_13638 = state_13549__$1;(statearr_13553_13638[1] = 36);
} else
{var statearr_13554_13639 = state_13549__$1;(statearr_13554_13639[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 2))
{var state_13549__$1 = state_13549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13549__$1,4,ch);
} else
{if((state_val_13550 === 34))
{var state_13549__$1 = state_13549;var statearr_13555_13640 = state_13549__$1;(statearr_13555_13640[2] = null);
(statearr_13555_13640[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 3))
{var inst_13547 = (state_13549[2]);var state_13549__$1 = state_13549;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13549__$1,inst_13547);
} else
{if((state_val_13550 === 35))
{var inst_13531 = (state_13549[2]);var state_13549__$1 = state_13549;var statearr_13556_13641 = state_13549__$1;(statearr_13556_13641[2] = inst_13531);
(statearr_13556_13641[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 4))
{var inst_13417 = (state_13549[8]);var inst_13417__$1 = (state_13549[2]);var inst_13418 = (inst_13417__$1 == null);var state_13549__$1 = (function (){var statearr_13557 = state_13549;(statearr_13557[8] = inst_13417__$1);
return statearr_13557;
})();if(cljs.core.truth_(inst_13418))
{var statearr_13558_13642 = state_13549__$1;(statearr_13558_13642[1] = 5);
} else
{var statearr_13559_13643 = state_13549__$1;(statearr_13559_13643[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 36))
{var inst_13506 = (state_13549[9]);var inst_13510 = cljs.core.chunk_first.call(null,inst_13506);var inst_13511 = cljs.core.chunk_rest.call(null,inst_13506);var inst_13512 = cljs.core.count.call(null,inst_13510);var inst_13485 = inst_13511;var inst_13486 = inst_13510;var inst_13487 = inst_13512;var inst_13488 = 0;var state_13549__$1 = (function (){var statearr_13560 = state_13549;(statearr_13560[10] = inst_13488);
(statearr_13560[11] = inst_13487);
(statearr_13560[12] = inst_13485);
(statearr_13560[13] = inst_13486);
return statearr_13560;
})();var statearr_13561_13644 = state_13549__$1;(statearr_13561_13644[2] = null);
(statearr_13561_13644[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 5))
{var inst_13424 = cljs.core.deref.call(null,cs);var inst_13425 = cljs.core.seq.call(null,inst_13424);var inst_13426 = inst_13425;var inst_13427 = null;var inst_13428 = 0;var inst_13429 = 0;var state_13549__$1 = (function (){var statearr_13562 = state_13549;(statearr_13562[14] = inst_13426);
(statearr_13562[15] = inst_13427);
(statearr_13562[16] = inst_13428);
(statearr_13562[17] = inst_13429);
return statearr_13562;
})();var statearr_13563_13645 = state_13549__$1;(statearr_13563_13645[2] = null);
(statearr_13563_13645[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 37))
{var inst_13506 = (state_13549[9]);var inst_13515 = cljs.core.first.call(null,inst_13506);var state_13549__$1 = (function (){var statearr_13564 = state_13549;(statearr_13564[18] = inst_13515);
return statearr_13564;
})();var statearr_13565_13646 = state_13549__$1;(statearr_13565_13646[2] = null);
(statearr_13565_13646[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 6))
{var inst_13477 = (state_13549[19]);var inst_13476 = cljs.core.deref.call(null,cs);var inst_13477__$1 = cljs.core.keys.call(null,inst_13476);var inst_13478 = cljs.core.count.call(null,inst_13477__$1);var inst_13479 = cljs.core.reset_BANG_.call(null,dctr,inst_13478);var inst_13484 = cljs.core.seq.call(null,inst_13477__$1);var inst_13485 = inst_13484;var inst_13486 = null;var inst_13487 = 0;var inst_13488 = 0;var state_13549__$1 = (function (){var statearr_13566 = state_13549;(statearr_13566[10] = inst_13488);
(statearr_13566[11] = inst_13487);
(statearr_13566[12] = inst_13485);
(statearr_13566[13] = inst_13486);
(statearr_13566[20] = inst_13479);
(statearr_13566[19] = inst_13477__$1);
return statearr_13566;
})();var statearr_13567_13647 = state_13549__$1;(statearr_13567_13647[2] = null);
(statearr_13567_13647[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 38))
{var inst_13528 = (state_13549[2]);var state_13549__$1 = state_13549;var statearr_13568_13648 = state_13549__$1;(statearr_13568_13648[2] = inst_13528);
(statearr_13568_13648[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 7))
{var inst_13545 = (state_13549[2]);var state_13549__$1 = state_13549;var statearr_13569_13649 = state_13549__$1;(statearr_13569_13649[2] = inst_13545);
(statearr_13569_13649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 39))
{var inst_13506 = (state_13549[9]);var inst_13524 = (state_13549[2]);var inst_13525 = cljs.core.next.call(null,inst_13506);var inst_13485 = inst_13525;var inst_13486 = null;var inst_13487 = 0;var inst_13488 = 0;var state_13549__$1 = (function (){var statearr_13570 = state_13549;(statearr_13570[10] = inst_13488);
(statearr_13570[11] = inst_13487);
(statearr_13570[12] = inst_13485);
(statearr_13570[13] = inst_13486);
(statearr_13570[21] = inst_13524);
return statearr_13570;
})();var statearr_13571_13650 = state_13549__$1;(statearr_13571_13650[2] = null);
(statearr_13571_13650[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 8))
{var inst_13428 = (state_13549[16]);var inst_13429 = (state_13549[17]);var inst_13431 = (inst_13429 < inst_13428);var inst_13432 = inst_13431;var state_13549__$1 = state_13549;if(cljs.core.truth_(inst_13432))
{var statearr_13572_13651 = state_13549__$1;(statearr_13572_13651[1] = 10);
} else
{var statearr_13573_13652 = state_13549__$1;(statearr_13573_13652[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 40))
{var inst_13515 = (state_13549[18]);var inst_13516 = (state_13549[2]);var inst_13517 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13518 = cljs.core.async.untap_STAR_.call(null,m,inst_13515);var state_13549__$1 = (function (){var statearr_13574 = state_13549;(statearr_13574[22] = inst_13516);
(statearr_13574[23] = inst_13517);
return statearr_13574;
})();var statearr_13575_13653 = state_13549__$1;(statearr_13575_13653[2] = inst_13518);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13549__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 9))
{var inst_13474 = (state_13549[2]);var state_13549__$1 = state_13549;var statearr_13576_13654 = state_13549__$1;(statearr_13576_13654[2] = inst_13474);
(statearr_13576_13654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 41))
{var inst_13515 = (state_13549[18]);var inst_13417 = (state_13549[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13549,40,Object,null,39);var inst_13522 = cljs.core.async.put_BANG_.call(null,inst_13515,inst_13417,done);var state_13549__$1 = state_13549;var statearr_13577_13655 = state_13549__$1;(statearr_13577_13655[2] = inst_13522);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13549__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 10))
{var inst_13427 = (state_13549[15]);var inst_13429 = (state_13549[17]);var inst_13435 = cljs.core._nth.call(null,inst_13427,inst_13429);var inst_13436 = cljs.core.nth.call(null,inst_13435,0,null);var inst_13437 = cljs.core.nth.call(null,inst_13435,1,null);var state_13549__$1 = (function (){var statearr_13578 = state_13549;(statearr_13578[24] = inst_13436);
return statearr_13578;
})();if(cljs.core.truth_(inst_13437))
{var statearr_13579_13656 = state_13549__$1;(statearr_13579_13656[1] = 13);
} else
{var statearr_13580_13657 = state_13549__$1;(statearr_13580_13657[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 42))
{var state_13549__$1 = state_13549;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13549__$1,45,dchan);
} else
{if((state_val_13550 === 11))
{var inst_13446 = (state_13549[25]);var inst_13426 = (state_13549[14]);var inst_13446__$1 = cljs.core.seq.call(null,inst_13426);var state_13549__$1 = (function (){var statearr_13581 = state_13549;(statearr_13581[25] = inst_13446__$1);
return statearr_13581;
})();if(inst_13446__$1)
{var statearr_13582_13658 = state_13549__$1;(statearr_13582_13658[1] = 16);
} else
{var statearr_13583_13659 = state_13549__$1;(statearr_13583_13659[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 43))
{var state_13549__$1 = state_13549;var statearr_13584_13660 = state_13549__$1;(statearr_13584_13660[2] = null);
(statearr_13584_13660[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 12))
{var inst_13472 = (state_13549[2]);var state_13549__$1 = state_13549;var statearr_13585_13661 = state_13549__$1;(statearr_13585_13661[2] = inst_13472);
(statearr_13585_13661[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 44))
{var inst_13542 = (state_13549[2]);var state_13549__$1 = (function (){var statearr_13586 = state_13549;(statearr_13586[26] = inst_13542);
return statearr_13586;
})();var statearr_13587_13662 = state_13549__$1;(statearr_13587_13662[2] = null);
(statearr_13587_13662[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 13))
{var inst_13436 = (state_13549[24]);var inst_13439 = cljs.core.async.close_BANG_.call(null,inst_13436);var state_13549__$1 = state_13549;var statearr_13588_13663 = state_13549__$1;(statearr_13588_13663[2] = inst_13439);
(statearr_13588_13663[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 45))
{var inst_13539 = (state_13549[2]);var state_13549__$1 = state_13549;var statearr_13592_13664 = state_13549__$1;(statearr_13592_13664[2] = inst_13539);
(statearr_13592_13664[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 14))
{var state_13549__$1 = state_13549;var statearr_13593_13665 = state_13549__$1;(statearr_13593_13665[2] = null);
(statearr_13593_13665[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 15))
{var inst_13426 = (state_13549[14]);var inst_13427 = (state_13549[15]);var inst_13428 = (state_13549[16]);var inst_13429 = (state_13549[17]);var inst_13442 = (state_13549[2]);var inst_13443 = (inst_13429 + 1);var tmp13589 = inst_13426;var tmp13590 = inst_13427;var tmp13591 = inst_13428;var inst_13426__$1 = tmp13589;var inst_13427__$1 = tmp13590;var inst_13428__$1 = tmp13591;var inst_13429__$1 = inst_13443;var state_13549__$1 = (function (){var statearr_13594 = state_13549;(statearr_13594[27] = inst_13442);
(statearr_13594[14] = inst_13426__$1);
(statearr_13594[15] = inst_13427__$1);
(statearr_13594[16] = inst_13428__$1);
(statearr_13594[17] = inst_13429__$1);
return statearr_13594;
})();var statearr_13595_13666 = state_13549__$1;(statearr_13595_13666[2] = null);
(statearr_13595_13666[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 16))
{var inst_13446 = (state_13549[25]);var inst_13448 = cljs.core.chunked_seq_QMARK_.call(null,inst_13446);var state_13549__$1 = state_13549;if(inst_13448)
{var statearr_13596_13667 = state_13549__$1;(statearr_13596_13667[1] = 19);
} else
{var statearr_13597_13668 = state_13549__$1;(statearr_13597_13668[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 17))
{var state_13549__$1 = state_13549;var statearr_13598_13669 = state_13549__$1;(statearr_13598_13669[2] = null);
(statearr_13598_13669[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 18))
{var inst_13470 = (state_13549[2]);var state_13549__$1 = state_13549;var statearr_13599_13670 = state_13549__$1;(statearr_13599_13670[2] = inst_13470);
(statearr_13599_13670[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 19))
{var inst_13446 = (state_13549[25]);var inst_13450 = cljs.core.chunk_first.call(null,inst_13446);var inst_13451 = cljs.core.chunk_rest.call(null,inst_13446);var inst_13452 = cljs.core.count.call(null,inst_13450);var inst_13426 = inst_13451;var inst_13427 = inst_13450;var inst_13428 = inst_13452;var inst_13429 = 0;var state_13549__$1 = (function (){var statearr_13600 = state_13549;(statearr_13600[14] = inst_13426);
(statearr_13600[15] = inst_13427);
(statearr_13600[16] = inst_13428);
(statearr_13600[17] = inst_13429);
return statearr_13600;
})();var statearr_13601_13671 = state_13549__$1;(statearr_13601_13671[2] = null);
(statearr_13601_13671[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 20))
{var inst_13446 = (state_13549[25]);var inst_13456 = cljs.core.first.call(null,inst_13446);var inst_13457 = cljs.core.nth.call(null,inst_13456,0,null);var inst_13458 = cljs.core.nth.call(null,inst_13456,1,null);var state_13549__$1 = (function (){var statearr_13602 = state_13549;(statearr_13602[28] = inst_13457);
return statearr_13602;
})();if(cljs.core.truth_(inst_13458))
{var statearr_13603_13672 = state_13549__$1;(statearr_13603_13672[1] = 22);
} else
{var statearr_13604_13673 = state_13549__$1;(statearr_13604_13673[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 21))
{var inst_13467 = (state_13549[2]);var state_13549__$1 = state_13549;var statearr_13605_13674 = state_13549__$1;(statearr_13605_13674[2] = inst_13467);
(statearr_13605_13674[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 22))
{var inst_13457 = (state_13549[28]);var inst_13460 = cljs.core.async.close_BANG_.call(null,inst_13457);var state_13549__$1 = state_13549;var statearr_13606_13675 = state_13549__$1;(statearr_13606_13675[2] = inst_13460);
(statearr_13606_13675[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 23))
{var state_13549__$1 = state_13549;var statearr_13607_13676 = state_13549__$1;(statearr_13607_13676[2] = null);
(statearr_13607_13676[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 24))
{var inst_13446 = (state_13549[25]);var inst_13463 = (state_13549[2]);var inst_13464 = cljs.core.next.call(null,inst_13446);var inst_13426 = inst_13464;var inst_13427 = null;var inst_13428 = 0;var inst_13429 = 0;var state_13549__$1 = (function (){var statearr_13608 = state_13549;(statearr_13608[14] = inst_13426);
(statearr_13608[15] = inst_13427);
(statearr_13608[16] = inst_13428);
(statearr_13608[17] = inst_13429);
(statearr_13608[29] = inst_13463);
return statearr_13608;
})();var statearr_13609_13677 = state_13549__$1;(statearr_13609_13677[2] = null);
(statearr_13609_13677[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 25))
{var inst_13488 = (state_13549[10]);var inst_13487 = (state_13549[11]);var inst_13490 = (inst_13488 < inst_13487);var inst_13491 = inst_13490;var state_13549__$1 = state_13549;if(cljs.core.truth_(inst_13491))
{var statearr_13610_13678 = state_13549__$1;(statearr_13610_13678[1] = 27);
} else
{var statearr_13611_13679 = state_13549__$1;(statearr_13611_13679[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 26))
{var inst_13477 = (state_13549[19]);var inst_13535 = (state_13549[2]);var inst_13536 = cljs.core.seq.call(null,inst_13477);var state_13549__$1 = (function (){var statearr_13612 = state_13549;(statearr_13612[30] = inst_13535);
return statearr_13612;
})();if(inst_13536)
{var statearr_13613_13680 = state_13549__$1;(statearr_13613_13680[1] = 42);
} else
{var statearr_13614_13681 = state_13549__$1;(statearr_13614_13681[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 27))
{var inst_13488 = (state_13549[10]);var inst_13486 = (state_13549[13]);var inst_13493 = cljs.core._nth.call(null,inst_13486,inst_13488);var state_13549__$1 = (function (){var statearr_13615 = state_13549;(statearr_13615[7] = inst_13493);
return statearr_13615;
})();var statearr_13616_13682 = state_13549__$1;(statearr_13616_13682[2] = null);
(statearr_13616_13682[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 28))
{var inst_13485 = (state_13549[12]);var inst_13506 = (state_13549[9]);var inst_13506__$1 = cljs.core.seq.call(null,inst_13485);var state_13549__$1 = (function (){var statearr_13620 = state_13549;(statearr_13620[9] = inst_13506__$1);
return statearr_13620;
})();if(inst_13506__$1)
{var statearr_13621_13683 = state_13549__$1;(statearr_13621_13683[1] = 33);
} else
{var statearr_13622_13684 = state_13549__$1;(statearr_13622_13684[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 29))
{var inst_13533 = (state_13549[2]);var state_13549__$1 = state_13549;var statearr_13623_13685 = state_13549__$1;(statearr_13623_13685[2] = inst_13533);
(statearr_13623_13685[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 30))
{var inst_13488 = (state_13549[10]);var inst_13487 = (state_13549[11]);var inst_13485 = (state_13549[12]);var inst_13486 = (state_13549[13]);var inst_13502 = (state_13549[2]);var inst_13503 = (inst_13488 + 1);var tmp13617 = inst_13487;var tmp13618 = inst_13485;var tmp13619 = inst_13486;var inst_13485__$1 = tmp13618;var inst_13486__$1 = tmp13619;var inst_13487__$1 = tmp13617;var inst_13488__$1 = inst_13503;var state_13549__$1 = (function (){var statearr_13624 = state_13549;(statearr_13624[10] = inst_13488__$1);
(statearr_13624[11] = inst_13487__$1);
(statearr_13624[12] = inst_13485__$1);
(statearr_13624[13] = inst_13486__$1);
(statearr_13624[31] = inst_13502);
return statearr_13624;
})();var statearr_13625_13686 = state_13549__$1;(statearr_13625_13686[2] = null);
(statearr_13625_13686[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13550 === 31))
{var inst_13493 = (state_13549[7]);var inst_13494 = (state_13549[2]);var inst_13495 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13496 = cljs.core.async.untap_STAR_.call(null,m,inst_13493);var state_13549__$1 = (function (){var statearr_13626 = state_13549;(statearr_13626[32] = inst_13494);
(statearr_13626[33] = inst_13495);
return statearr_13626;
})();var statearr_13627_13687 = state_13549__$1;(statearr_13627_13687[2] = inst_13496);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13549__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13631 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13631[0] = state_machine__5507__auto__);
(statearr_13631[1] = 1);
return statearr_13631;
});
var state_machine__5507__auto____1 = (function (state_13549){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13549);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13632){if((e13632 instanceof Object))
{var ex__5510__auto__ = e13632;var statearr_13633_13688 = state_13549;(statearr_13633_13688[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13549);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13689 = state_13549;
state_13549 = G__13689;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13549){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13634 = f__5522__auto__.call(null);(statearr_13634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13635);
return statearr_13634;
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
cljs.core.async.Mix = (function (){var obj13691 = {};return obj13691;
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
;var m = (function (){if(typeof cljs.core.async.t13801 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13801 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13802){
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
this.meta13802 = meta13802;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13801.cljs$lang$type = true;
cljs.core.async.t13801.cljs$lang$ctorStr = "cljs.core.async/t13801";
cljs.core.async.t13801.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13801");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13801.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13801.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13801.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13801.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13801.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13801.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13801.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13801.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13801.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13803){var self__ = this;
var _13803__$1 = this;return self__.meta13802;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13801.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13803,meta13802__$1){var self__ = this;
var _13803__$1 = this;return (new cljs.core.async.t13801(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13802__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13801 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13801(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13802){return (new cljs.core.async.t13801(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13802));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13801(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13910 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13868){var state_val_13869 = (state_13868[1]);if((state_val_13869 === 1))
{var inst_13807 = (state_13868[7]);var inst_13807__$1 = calc_state.call(null);var inst_13808 = cljs.core.seq_QMARK_.call(null,inst_13807__$1);var state_13868__$1 = (function (){var statearr_13870 = state_13868;(statearr_13870[7] = inst_13807__$1);
return statearr_13870;
})();if(inst_13808)
{var statearr_13871_13911 = state_13868__$1;(statearr_13871_13911[1] = 2);
} else
{var statearr_13872_13912 = state_13868__$1;(statearr_13872_13912[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 2))
{var inst_13807 = (state_13868[7]);var inst_13810 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13807);var state_13868__$1 = state_13868;var statearr_13873_13913 = state_13868__$1;(statearr_13873_13913[2] = inst_13810);
(statearr_13873_13913[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 3))
{var inst_13807 = (state_13868[7]);var state_13868__$1 = state_13868;var statearr_13874_13914 = state_13868__$1;(statearr_13874_13914[2] = inst_13807);
(statearr_13874_13914[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 4))
{var inst_13807 = (state_13868[7]);var inst_13813 = (state_13868[2]);var inst_13814 = cljs.core.get.call(null,inst_13813,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13815 = cljs.core.get.call(null,inst_13813,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13816 = cljs.core.get.call(null,inst_13813,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13817 = inst_13807;var state_13868__$1 = (function (){var statearr_13875 = state_13868;(statearr_13875[8] = inst_13815);
(statearr_13875[9] = inst_13814);
(statearr_13875[10] = inst_13817);
(statearr_13875[11] = inst_13816);
return statearr_13875;
})();var statearr_13876_13915 = state_13868__$1;(statearr_13876_13915[2] = null);
(statearr_13876_13915[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 5))
{var inst_13817 = (state_13868[10]);var inst_13820 = cljs.core.seq_QMARK_.call(null,inst_13817);var state_13868__$1 = state_13868;if(inst_13820)
{var statearr_13877_13916 = state_13868__$1;(statearr_13877_13916[1] = 7);
} else
{var statearr_13878_13917 = state_13868__$1;(statearr_13878_13917[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 6))
{var inst_13866 = (state_13868[2]);var state_13868__$1 = state_13868;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13868__$1,inst_13866);
} else
{if((state_val_13869 === 7))
{var inst_13817 = (state_13868[10]);var inst_13822 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13817);var state_13868__$1 = state_13868;var statearr_13879_13918 = state_13868__$1;(statearr_13879_13918[2] = inst_13822);
(statearr_13879_13918[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 8))
{var inst_13817 = (state_13868[10]);var state_13868__$1 = state_13868;var statearr_13880_13919 = state_13868__$1;(statearr_13880_13919[2] = inst_13817);
(statearr_13880_13919[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 9))
{var inst_13825 = (state_13868[12]);var inst_13825__$1 = (state_13868[2]);var inst_13826 = cljs.core.get.call(null,inst_13825__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13827 = cljs.core.get.call(null,inst_13825__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13828 = cljs.core.get.call(null,inst_13825__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13868__$1 = (function (){var statearr_13881 = state_13868;(statearr_13881[12] = inst_13825__$1);
(statearr_13881[13] = inst_13828);
(statearr_13881[14] = inst_13827);
return statearr_13881;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13868__$1,10,inst_13826);
} else
{if((state_val_13869 === 10))
{var inst_13832 = (state_13868[15]);var inst_13833 = (state_13868[16]);var inst_13831 = (state_13868[2]);var inst_13832__$1 = cljs.core.nth.call(null,inst_13831,0,null);var inst_13833__$1 = cljs.core.nth.call(null,inst_13831,1,null);var inst_13834 = (inst_13832__$1 == null);var inst_13835 = cljs.core._EQ_.call(null,inst_13833__$1,change);var inst_13836 = (inst_13834) || (inst_13835);var state_13868__$1 = (function (){var statearr_13882 = state_13868;(statearr_13882[15] = inst_13832__$1);
(statearr_13882[16] = inst_13833__$1);
return statearr_13882;
})();if(cljs.core.truth_(inst_13836))
{var statearr_13883_13920 = state_13868__$1;(statearr_13883_13920[1] = 11);
} else
{var statearr_13884_13921 = state_13868__$1;(statearr_13884_13921[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 11))
{var inst_13832 = (state_13868[15]);var inst_13838 = (inst_13832 == null);var state_13868__$1 = state_13868;if(cljs.core.truth_(inst_13838))
{var statearr_13885_13922 = state_13868__$1;(statearr_13885_13922[1] = 14);
} else
{var statearr_13886_13923 = state_13868__$1;(statearr_13886_13923[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 12))
{var inst_13847 = (state_13868[17]);var inst_13833 = (state_13868[16]);var inst_13828 = (state_13868[13]);var inst_13847__$1 = inst_13828.call(null,inst_13833);var state_13868__$1 = (function (){var statearr_13887 = state_13868;(statearr_13887[17] = inst_13847__$1);
return statearr_13887;
})();if(cljs.core.truth_(inst_13847__$1))
{var statearr_13888_13924 = state_13868__$1;(statearr_13888_13924[1] = 17);
} else
{var statearr_13889_13925 = state_13868__$1;(statearr_13889_13925[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 13))
{var inst_13864 = (state_13868[2]);var state_13868__$1 = state_13868;var statearr_13890_13926 = state_13868__$1;(statearr_13890_13926[2] = inst_13864);
(statearr_13890_13926[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 14))
{var inst_13833 = (state_13868[16]);var inst_13840 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13833);var state_13868__$1 = state_13868;var statearr_13891_13927 = state_13868__$1;(statearr_13891_13927[2] = inst_13840);
(statearr_13891_13927[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 15))
{var state_13868__$1 = state_13868;var statearr_13892_13928 = state_13868__$1;(statearr_13892_13928[2] = null);
(statearr_13892_13928[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 16))
{var inst_13843 = (state_13868[2]);var inst_13844 = calc_state.call(null);var inst_13817 = inst_13844;var state_13868__$1 = (function (){var statearr_13893 = state_13868;(statearr_13893[10] = inst_13817);
(statearr_13893[18] = inst_13843);
return statearr_13893;
})();var statearr_13894_13929 = state_13868__$1;(statearr_13894_13929[2] = null);
(statearr_13894_13929[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 17))
{var inst_13847 = (state_13868[17]);var state_13868__$1 = state_13868;var statearr_13895_13930 = state_13868__$1;(statearr_13895_13930[2] = inst_13847);
(statearr_13895_13930[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 18))
{var inst_13833 = (state_13868[16]);var inst_13828 = (state_13868[13]);var inst_13827 = (state_13868[14]);var inst_13850 = cljs.core.empty_QMARK_.call(null,inst_13828);var inst_13851 = inst_13827.call(null,inst_13833);var inst_13852 = cljs.core.not.call(null,inst_13851);var inst_13853 = (inst_13850) && (inst_13852);var state_13868__$1 = state_13868;var statearr_13896_13931 = state_13868__$1;(statearr_13896_13931[2] = inst_13853);
(statearr_13896_13931[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 19))
{var inst_13855 = (state_13868[2]);var state_13868__$1 = state_13868;if(cljs.core.truth_(inst_13855))
{var statearr_13897_13932 = state_13868__$1;(statearr_13897_13932[1] = 20);
} else
{var statearr_13898_13933 = state_13868__$1;(statearr_13898_13933[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 20))
{var inst_13832 = (state_13868[15]);var state_13868__$1 = state_13868;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13868__$1,23,out,inst_13832);
} else
{if((state_val_13869 === 21))
{var state_13868__$1 = state_13868;var statearr_13899_13934 = state_13868__$1;(statearr_13899_13934[2] = null);
(statearr_13899_13934[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 22))
{var inst_13825 = (state_13868[12]);var inst_13861 = (state_13868[2]);var inst_13817 = inst_13825;var state_13868__$1 = (function (){var statearr_13900 = state_13868;(statearr_13900[10] = inst_13817);
(statearr_13900[19] = inst_13861);
return statearr_13900;
})();var statearr_13901_13935 = state_13868__$1;(statearr_13901_13935[2] = null);
(statearr_13901_13935[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13869 === 23))
{var inst_13858 = (state_13868[2]);var state_13868__$1 = state_13868;var statearr_13902_13936 = state_13868__$1;(statearr_13902_13936[2] = inst_13858);
(statearr_13902_13936[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13906 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13906[0] = state_machine__5507__auto__);
(statearr_13906[1] = 1);
return statearr_13906;
});
var state_machine__5507__auto____1 = (function (state_13868){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13868);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13907){if((e13907 instanceof Object))
{var ex__5510__auto__ = e13907;var statearr_13908_13937 = state_13868;(statearr_13908_13937[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13868);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13907;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13938 = state_13868;
state_13868 = G__13938;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13868){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13909 = f__5522__auto__.call(null);(statearr_13909[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13910);
return statearr_13909;
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
cljs.core.async.Pub = (function (){var obj13940 = {};return obj13940;
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
return (function (p1__13941_SHARP_){if(cljs.core.truth_(p1__13941_SHARP_.call(null,topic)))
{return p1__13941_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13941_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14066 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14066 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14067){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14067 = meta14067;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14066.cljs$lang$type = true;
cljs.core.async.t14066.cljs$lang$ctorStr = "cljs.core.async/t14066";
cljs.core.async.t14066.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14066");
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14066.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14068){var self__ = this;
var _14068__$1 = this;return self__.meta14067;
});})(mults,ensure_mult))
;
cljs.core.async.t14066.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14068,meta14067__$1){var self__ = this;
var _14068__$1 = this;return (new cljs.core.async.t14066(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14067__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14066 = ((function (mults,ensure_mult){
return (function __GT_t14066(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14067){return (new cljs.core.async.t14066(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14067));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14066(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14190 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14142){var state_val_14143 = (state_14142[1]);if((state_val_14143 === 1))
{var state_14142__$1 = state_14142;var statearr_14144_14191 = state_14142__$1;(statearr_14144_14191[2] = null);
(statearr_14144_14191[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 2))
{var state_14142__$1 = state_14142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14142__$1,4,ch);
} else
{if((state_val_14143 === 3))
{var inst_14140 = (state_14142[2]);var state_14142__$1 = state_14142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14142__$1,inst_14140);
} else
{if((state_val_14143 === 4))
{var inst_14071 = (state_14142[7]);var inst_14071__$1 = (state_14142[2]);var inst_14072 = (inst_14071__$1 == null);var state_14142__$1 = (function (){var statearr_14145 = state_14142;(statearr_14145[7] = inst_14071__$1);
return statearr_14145;
})();if(cljs.core.truth_(inst_14072))
{var statearr_14146_14192 = state_14142__$1;(statearr_14146_14192[1] = 5);
} else
{var statearr_14147_14193 = state_14142__$1;(statearr_14147_14193[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 5))
{var inst_14078 = cljs.core.deref.call(null,mults);var inst_14079 = cljs.core.vals.call(null,inst_14078);var inst_14080 = cljs.core.seq.call(null,inst_14079);var inst_14081 = inst_14080;var inst_14082 = null;var inst_14083 = 0;var inst_14084 = 0;var state_14142__$1 = (function (){var statearr_14148 = state_14142;(statearr_14148[8] = inst_14084);
(statearr_14148[9] = inst_14081);
(statearr_14148[10] = inst_14082);
(statearr_14148[11] = inst_14083);
return statearr_14148;
})();var statearr_14149_14194 = state_14142__$1;(statearr_14149_14194[2] = null);
(statearr_14149_14194[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 6))
{var inst_14071 = (state_14142[7]);var inst_14121 = (state_14142[12]);var inst_14119 = (state_14142[13]);var inst_14119__$1 = topic_fn.call(null,inst_14071);var inst_14120 = cljs.core.deref.call(null,mults);var inst_14121__$1 = cljs.core.get.call(null,inst_14120,inst_14119__$1);var state_14142__$1 = (function (){var statearr_14150 = state_14142;(statearr_14150[12] = inst_14121__$1);
(statearr_14150[13] = inst_14119__$1);
return statearr_14150;
})();if(cljs.core.truth_(inst_14121__$1))
{var statearr_14151_14195 = state_14142__$1;(statearr_14151_14195[1] = 19);
} else
{var statearr_14152_14196 = state_14142__$1;(statearr_14152_14196[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 7))
{var inst_14138 = (state_14142[2]);var state_14142__$1 = state_14142;var statearr_14153_14197 = state_14142__$1;(statearr_14153_14197[2] = inst_14138);
(statearr_14153_14197[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 8))
{var inst_14084 = (state_14142[8]);var inst_14083 = (state_14142[11]);var inst_14086 = (inst_14084 < inst_14083);var inst_14087 = inst_14086;var state_14142__$1 = state_14142;if(cljs.core.truth_(inst_14087))
{var statearr_14157_14198 = state_14142__$1;(statearr_14157_14198[1] = 10);
} else
{var statearr_14158_14199 = state_14142__$1;(statearr_14158_14199[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 9))
{var inst_14117 = (state_14142[2]);var state_14142__$1 = state_14142;var statearr_14159_14200 = state_14142__$1;(statearr_14159_14200[2] = inst_14117);
(statearr_14159_14200[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 10))
{var inst_14084 = (state_14142[8]);var inst_14081 = (state_14142[9]);var inst_14082 = (state_14142[10]);var inst_14083 = (state_14142[11]);var inst_14089 = cljs.core._nth.call(null,inst_14082,inst_14084);var inst_14090 = cljs.core.async.muxch_STAR_.call(null,inst_14089);var inst_14091 = cljs.core.async.close_BANG_.call(null,inst_14090);var inst_14092 = (inst_14084 + 1);var tmp14154 = inst_14081;var tmp14155 = inst_14082;var tmp14156 = inst_14083;var inst_14081__$1 = tmp14154;var inst_14082__$1 = tmp14155;var inst_14083__$1 = tmp14156;var inst_14084__$1 = inst_14092;var state_14142__$1 = (function (){var statearr_14160 = state_14142;(statearr_14160[8] = inst_14084__$1);
(statearr_14160[14] = inst_14091);
(statearr_14160[9] = inst_14081__$1);
(statearr_14160[10] = inst_14082__$1);
(statearr_14160[11] = inst_14083__$1);
return statearr_14160;
})();var statearr_14161_14201 = state_14142__$1;(statearr_14161_14201[2] = null);
(statearr_14161_14201[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 11))
{var inst_14095 = (state_14142[15]);var inst_14081 = (state_14142[9]);var inst_14095__$1 = cljs.core.seq.call(null,inst_14081);var state_14142__$1 = (function (){var statearr_14162 = state_14142;(statearr_14162[15] = inst_14095__$1);
return statearr_14162;
})();if(inst_14095__$1)
{var statearr_14163_14202 = state_14142__$1;(statearr_14163_14202[1] = 13);
} else
{var statearr_14164_14203 = state_14142__$1;(statearr_14164_14203[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 12))
{var inst_14115 = (state_14142[2]);var state_14142__$1 = state_14142;var statearr_14165_14204 = state_14142__$1;(statearr_14165_14204[2] = inst_14115);
(statearr_14165_14204[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 13))
{var inst_14095 = (state_14142[15]);var inst_14097 = cljs.core.chunked_seq_QMARK_.call(null,inst_14095);var state_14142__$1 = state_14142;if(inst_14097)
{var statearr_14166_14205 = state_14142__$1;(statearr_14166_14205[1] = 16);
} else
{var statearr_14167_14206 = state_14142__$1;(statearr_14167_14206[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 14))
{var state_14142__$1 = state_14142;var statearr_14168_14207 = state_14142__$1;(statearr_14168_14207[2] = null);
(statearr_14168_14207[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 15))
{var inst_14113 = (state_14142[2]);var state_14142__$1 = state_14142;var statearr_14169_14208 = state_14142__$1;(statearr_14169_14208[2] = inst_14113);
(statearr_14169_14208[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 16))
{var inst_14095 = (state_14142[15]);var inst_14099 = cljs.core.chunk_first.call(null,inst_14095);var inst_14100 = cljs.core.chunk_rest.call(null,inst_14095);var inst_14101 = cljs.core.count.call(null,inst_14099);var inst_14081 = inst_14100;var inst_14082 = inst_14099;var inst_14083 = inst_14101;var inst_14084 = 0;var state_14142__$1 = (function (){var statearr_14170 = state_14142;(statearr_14170[8] = inst_14084);
(statearr_14170[9] = inst_14081);
(statearr_14170[10] = inst_14082);
(statearr_14170[11] = inst_14083);
return statearr_14170;
})();var statearr_14171_14209 = state_14142__$1;(statearr_14171_14209[2] = null);
(statearr_14171_14209[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 17))
{var inst_14095 = (state_14142[15]);var inst_14104 = cljs.core.first.call(null,inst_14095);var inst_14105 = cljs.core.async.muxch_STAR_.call(null,inst_14104);var inst_14106 = cljs.core.async.close_BANG_.call(null,inst_14105);var inst_14107 = cljs.core.next.call(null,inst_14095);var inst_14081 = inst_14107;var inst_14082 = null;var inst_14083 = 0;var inst_14084 = 0;var state_14142__$1 = (function (){var statearr_14172 = state_14142;(statearr_14172[8] = inst_14084);
(statearr_14172[9] = inst_14081);
(statearr_14172[10] = inst_14082);
(statearr_14172[11] = inst_14083);
(statearr_14172[16] = inst_14106);
return statearr_14172;
})();var statearr_14173_14210 = state_14142__$1;(statearr_14173_14210[2] = null);
(statearr_14173_14210[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 18))
{var inst_14110 = (state_14142[2]);var state_14142__$1 = state_14142;var statearr_14174_14211 = state_14142__$1;(statearr_14174_14211[2] = inst_14110);
(statearr_14174_14211[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 19))
{var state_14142__$1 = state_14142;var statearr_14175_14212 = state_14142__$1;(statearr_14175_14212[2] = null);
(statearr_14175_14212[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 20))
{var state_14142__$1 = state_14142;var statearr_14176_14213 = state_14142__$1;(statearr_14176_14213[2] = null);
(statearr_14176_14213[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 21))
{var inst_14135 = (state_14142[2]);var state_14142__$1 = (function (){var statearr_14177 = state_14142;(statearr_14177[17] = inst_14135);
return statearr_14177;
})();var statearr_14178_14214 = state_14142__$1;(statearr_14178_14214[2] = null);
(statearr_14178_14214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 22))
{var inst_14132 = (state_14142[2]);var state_14142__$1 = state_14142;var statearr_14179_14215 = state_14142__$1;(statearr_14179_14215[2] = inst_14132);
(statearr_14179_14215[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 23))
{var inst_14119 = (state_14142[13]);var inst_14123 = (state_14142[2]);var inst_14124 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14119);var state_14142__$1 = (function (){var statearr_14180 = state_14142;(statearr_14180[18] = inst_14123);
return statearr_14180;
})();var statearr_14181_14216 = state_14142__$1;(statearr_14181_14216[2] = inst_14124);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14142__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14143 === 24))
{var inst_14071 = (state_14142[7]);var inst_14121 = (state_14142[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14142,23,Object,null,22);var inst_14128 = cljs.core.async.muxch_STAR_.call(null,inst_14121);var state_14142__$1 = state_14142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14142__$1,25,inst_14128,inst_14071);
} else
{if((state_val_14143 === 25))
{var inst_14130 = (state_14142[2]);var state_14142__$1 = state_14142;var statearr_14182_14217 = state_14142__$1;(statearr_14182_14217[2] = inst_14130);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14142__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14186 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14186[0] = state_machine__5507__auto__);
(statearr_14186[1] = 1);
return statearr_14186;
});
var state_machine__5507__auto____1 = (function (state_14142){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14142);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14187){if((e14187 instanceof Object))
{var ex__5510__auto__ = e14187;var statearr_14188_14218 = state_14142;(statearr_14188_14218[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14187;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14219 = state_14142;
state_14142 = G__14219;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14142){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14189 = f__5522__auto__.call(null);(statearr_14189[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14190);
return statearr_14189;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14356 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14326){var state_val_14327 = (state_14326[1]);if((state_val_14327 === 1))
{var state_14326__$1 = state_14326;var statearr_14328_14357 = state_14326__$1;(statearr_14328_14357[2] = null);
(statearr_14328_14357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 2))
{var inst_14289 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14290 = 0;var state_14326__$1 = (function (){var statearr_14329 = state_14326;(statearr_14329[7] = inst_14289);
(statearr_14329[8] = inst_14290);
return statearr_14329;
})();var statearr_14330_14358 = state_14326__$1;(statearr_14330_14358[2] = null);
(statearr_14330_14358[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 3))
{var inst_14324 = (state_14326[2]);var state_14326__$1 = state_14326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14326__$1,inst_14324);
} else
{if((state_val_14327 === 4))
{var inst_14290 = (state_14326[8]);var inst_14292 = (inst_14290 < cnt);var state_14326__$1 = state_14326;if(cljs.core.truth_(inst_14292))
{var statearr_14331_14359 = state_14326__$1;(statearr_14331_14359[1] = 6);
} else
{var statearr_14332_14360 = state_14326__$1;(statearr_14332_14360[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 5))
{var inst_14310 = (state_14326[2]);var state_14326__$1 = (function (){var statearr_14333 = state_14326;(statearr_14333[9] = inst_14310);
return statearr_14333;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14326__$1,12,dchan);
} else
{if((state_val_14327 === 6))
{var state_14326__$1 = state_14326;var statearr_14334_14361 = state_14326__$1;(statearr_14334_14361[2] = null);
(statearr_14334_14361[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 7))
{var state_14326__$1 = state_14326;var statearr_14335_14362 = state_14326__$1;(statearr_14335_14362[2] = null);
(statearr_14335_14362[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 8))
{var inst_14308 = (state_14326[2]);var state_14326__$1 = state_14326;var statearr_14336_14363 = state_14326__$1;(statearr_14336_14363[2] = inst_14308);
(statearr_14336_14363[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 9))
{var inst_14290 = (state_14326[8]);var inst_14303 = (state_14326[2]);var inst_14304 = (inst_14290 + 1);var inst_14290__$1 = inst_14304;var state_14326__$1 = (function (){var statearr_14337 = state_14326;(statearr_14337[8] = inst_14290__$1);
(statearr_14337[10] = inst_14303);
return statearr_14337;
})();var statearr_14338_14364 = state_14326__$1;(statearr_14338_14364[2] = null);
(statearr_14338_14364[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 10))
{var inst_14294 = (state_14326[2]);var inst_14295 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14326__$1 = (function (){var statearr_14339 = state_14326;(statearr_14339[11] = inst_14294);
return statearr_14339;
})();var statearr_14340_14365 = state_14326__$1;(statearr_14340_14365[2] = inst_14295);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14326__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 11))
{var inst_14290 = (state_14326[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14326,10,Object,null,9);var inst_14299 = chs__$1.call(null,inst_14290);var inst_14300 = done.call(null,inst_14290);var inst_14301 = cljs.core.async.take_BANG_.call(null,inst_14299,inst_14300);var state_14326__$1 = state_14326;var statearr_14341_14366 = state_14326__$1;(statearr_14341_14366[2] = inst_14301);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14326__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 12))
{var inst_14312 = (state_14326[12]);var inst_14312__$1 = (state_14326[2]);var inst_14313 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14312__$1);var state_14326__$1 = (function (){var statearr_14342 = state_14326;(statearr_14342[12] = inst_14312__$1);
return statearr_14342;
})();if(cljs.core.truth_(inst_14313))
{var statearr_14343_14367 = state_14326__$1;(statearr_14343_14367[1] = 13);
} else
{var statearr_14344_14368 = state_14326__$1;(statearr_14344_14368[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 13))
{var inst_14315 = cljs.core.async.close_BANG_.call(null,out);var state_14326__$1 = state_14326;var statearr_14345_14369 = state_14326__$1;(statearr_14345_14369[2] = inst_14315);
(statearr_14345_14369[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 14))
{var inst_14312 = (state_14326[12]);var inst_14317 = cljs.core.apply.call(null,f,inst_14312);var state_14326__$1 = state_14326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14326__$1,16,out,inst_14317);
} else
{if((state_val_14327 === 15))
{var inst_14322 = (state_14326[2]);var state_14326__$1 = state_14326;var statearr_14346_14370 = state_14326__$1;(statearr_14346_14370[2] = inst_14322);
(statearr_14346_14370[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14327 === 16))
{var inst_14319 = (state_14326[2]);var state_14326__$1 = (function (){var statearr_14347 = state_14326;(statearr_14347[13] = inst_14319);
return statearr_14347;
})();var statearr_14348_14371 = state_14326__$1;(statearr_14348_14371[2] = null);
(statearr_14348_14371[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14352 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14352[0] = state_machine__5507__auto__);
(statearr_14352[1] = 1);
return statearr_14352;
});
var state_machine__5507__auto____1 = (function (state_14326){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14326);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14353){if((e14353 instanceof Object))
{var ex__5510__auto__ = e14353;var statearr_14354_14372 = state_14326;(statearr_14354_14372[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14373 = state_14326;
state_14326 = G__14373;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14326){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14355 = f__5522__auto__.call(null);(statearr_14355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14356);
return statearr_14355;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14481 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14457){var state_val_14458 = (state_14457[1]);if((state_val_14458 === 1))
{var inst_14428 = cljs.core.vec.call(null,chs);var inst_14429 = inst_14428;var state_14457__$1 = (function (){var statearr_14459 = state_14457;(statearr_14459[7] = inst_14429);
return statearr_14459;
})();var statearr_14460_14482 = state_14457__$1;(statearr_14460_14482[2] = null);
(statearr_14460_14482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14458 === 2))
{var inst_14429 = (state_14457[7]);var inst_14431 = cljs.core.count.call(null,inst_14429);var inst_14432 = (inst_14431 > 0);var state_14457__$1 = state_14457;if(cljs.core.truth_(inst_14432))
{var statearr_14461_14483 = state_14457__$1;(statearr_14461_14483[1] = 4);
} else
{var statearr_14462_14484 = state_14457__$1;(statearr_14462_14484[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14458 === 3))
{var inst_14455 = (state_14457[2]);var state_14457__$1 = state_14457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14457__$1,inst_14455);
} else
{if((state_val_14458 === 4))
{var inst_14429 = (state_14457[7]);var state_14457__$1 = state_14457;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14457__$1,7,inst_14429);
} else
{if((state_val_14458 === 5))
{var inst_14451 = cljs.core.async.close_BANG_.call(null,out);var state_14457__$1 = state_14457;var statearr_14463_14485 = state_14457__$1;(statearr_14463_14485[2] = inst_14451);
(statearr_14463_14485[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14458 === 6))
{var inst_14453 = (state_14457[2]);var state_14457__$1 = state_14457;var statearr_14464_14486 = state_14457__$1;(statearr_14464_14486[2] = inst_14453);
(statearr_14464_14486[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14458 === 7))
{var inst_14437 = (state_14457[8]);var inst_14436 = (state_14457[9]);var inst_14436__$1 = (state_14457[2]);var inst_14437__$1 = cljs.core.nth.call(null,inst_14436__$1,0,null);var inst_14438 = cljs.core.nth.call(null,inst_14436__$1,1,null);var inst_14439 = (inst_14437__$1 == null);var state_14457__$1 = (function (){var statearr_14465 = state_14457;(statearr_14465[8] = inst_14437__$1);
(statearr_14465[10] = inst_14438);
(statearr_14465[9] = inst_14436__$1);
return statearr_14465;
})();if(cljs.core.truth_(inst_14439))
{var statearr_14466_14487 = state_14457__$1;(statearr_14466_14487[1] = 8);
} else
{var statearr_14467_14488 = state_14457__$1;(statearr_14467_14488[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14458 === 8))
{var inst_14437 = (state_14457[8]);var inst_14438 = (state_14457[10]);var inst_14436 = (state_14457[9]);var inst_14429 = (state_14457[7]);var inst_14441 = (function (){var c = inst_14438;var v = inst_14437;var vec__14434 = inst_14436;var cs = inst_14429;return ((function (c,v,vec__14434,cs,inst_14437,inst_14438,inst_14436,inst_14429,state_val_14458){
return (function (p1__14374_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14374_SHARP_);
});
;})(c,v,vec__14434,cs,inst_14437,inst_14438,inst_14436,inst_14429,state_val_14458))
})();var inst_14442 = cljs.core.filterv.call(null,inst_14441,inst_14429);var inst_14429__$1 = inst_14442;var state_14457__$1 = (function (){var statearr_14468 = state_14457;(statearr_14468[7] = inst_14429__$1);
return statearr_14468;
})();var statearr_14469_14489 = state_14457__$1;(statearr_14469_14489[2] = null);
(statearr_14469_14489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14458 === 9))
{var inst_14437 = (state_14457[8]);var state_14457__$1 = state_14457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14457__$1,11,out,inst_14437);
} else
{if((state_val_14458 === 10))
{var inst_14449 = (state_14457[2]);var state_14457__$1 = state_14457;var statearr_14471_14490 = state_14457__$1;(statearr_14471_14490[2] = inst_14449);
(statearr_14471_14490[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14458 === 11))
{var inst_14429 = (state_14457[7]);var inst_14446 = (state_14457[2]);var tmp14470 = inst_14429;var inst_14429__$1 = tmp14470;var state_14457__$1 = (function (){var statearr_14472 = state_14457;(statearr_14472[11] = inst_14446);
(statearr_14472[7] = inst_14429__$1);
return statearr_14472;
})();var statearr_14473_14491 = state_14457__$1;(statearr_14473_14491[2] = null);
(statearr_14473_14491[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14477 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14477[0] = state_machine__5507__auto__);
(statearr_14477[1] = 1);
return statearr_14477;
});
var state_machine__5507__auto____1 = (function (state_14457){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14457);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14478){if((e14478 instanceof Object))
{var ex__5510__auto__ = e14478;var statearr_14479_14492 = state_14457;(statearr_14479_14492[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14457);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14493 = state_14457;
state_14457 = G__14493;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14457){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14480 = f__5522__auto__.call(null);(statearr_14480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14481);
return statearr_14480;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14586 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14563){var state_val_14564 = (state_14563[1]);if((state_val_14564 === 1))
{var inst_14540 = 0;var state_14563__$1 = (function (){var statearr_14565 = state_14563;(statearr_14565[7] = inst_14540);
return statearr_14565;
})();var statearr_14566_14587 = state_14563__$1;(statearr_14566_14587[2] = null);
(statearr_14566_14587[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 2))
{var inst_14540 = (state_14563[7]);var inst_14542 = (inst_14540 < n);var state_14563__$1 = state_14563;if(cljs.core.truth_(inst_14542))
{var statearr_14567_14588 = state_14563__$1;(statearr_14567_14588[1] = 4);
} else
{var statearr_14568_14589 = state_14563__$1;(statearr_14568_14589[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 3))
{var inst_14560 = (state_14563[2]);var inst_14561 = cljs.core.async.close_BANG_.call(null,out);var state_14563__$1 = (function (){var statearr_14569 = state_14563;(statearr_14569[8] = inst_14560);
return statearr_14569;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14563__$1,inst_14561);
} else
{if((state_val_14564 === 4))
{var state_14563__$1 = state_14563;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14563__$1,7,ch);
} else
{if((state_val_14564 === 5))
{var state_14563__$1 = state_14563;var statearr_14570_14590 = state_14563__$1;(statearr_14570_14590[2] = null);
(statearr_14570_14590[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 6))
{var inst_14558 = (state_14563[2]);var state_14563__$1 = state_14563;var statearr_14571_14591 = state_14563__$1;(statearr_14571_14591[2] = inst_14558);
(statearr_14571_14591[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 7))
{var inst_14545 = (state_14563[9]);var inst_14545__$1 = (state_14563[2]);var inst_14546 = (inst_14545__$1 == null);var inst_14547 = cljs.core.not.call(null,inst_14546);var state_14563__$1 = (function (){var statearr_14572 = state_14563;(statearr_14572[9] = inst_14545__$1);
return statearr_14572;
})();if(inst_14547)
{var statearr_14573_14592 = state_14563__$1;(statearr_14573_14592[1] = 8);
} else
{var statearr_14574_14593 = state_14563__$1;(statearr_14574_14593[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 8))
{var inst_14545 = (state_14563[9]);var state_14563__$1 = state_14563;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14563__$1,11,out,inst_14545);
} else
{if((state_val_14564 === 9))
{var state_14563__$1 = state_14563;var statearr_14575_14594 = state_14563__$1;(statearr_14575_14594[2] = null);
(statearr_14575_14594[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 10))
{var inst_14555 = (state_14563[2]);var state_14563__$1 = state_14563;var statearr_14576_14595 = state_14563__$1;(statearr_14576_14595[2] = inst_14555);
(statearr_14576_14595[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14564 === 11))
{var inst_14540 = (state_14563[7]);var inst_14550 = (state_14563[2]);var inst_14551 = (inst_14540 + 1);var inst_14540__$1 = inst_14551;var state_14563__$1 = (function (){var statearr_14577 = state_14563;(statearr_14577[7] = inst_14540__$1);
(statearr_14577[10] = inst_14550);
return statearr_14577;
})();var statearr_14578_14596 = state_14563__$1;(statearr_14578_14596[2] = null);
(statearr_14578_14596[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14582 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14582[0] = state_machine__5507__auto__);
(statearr_14582[1] = 1);
return statearr_14582;
});
var state_machine__5507__auto____1 = (function (state_14563){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14563);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14583){if((e14583 instanceof Object))
{var ex__5510__auto__ = e14583;var statearr_14584_14597 = state_14563;(statearr_14584_14597[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14563);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14583;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14598 = state_14563;
state_14563 = G__14598;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14563){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14563);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14585 = f__5522__auto__.call(null);(statearr_14585[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14586);
return statearr_14585;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14695 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14670){var state_val_14671 = (state_14670[1]);if((state_val_14671 === 1))
{var inst_14647 = null;var state_14670__$1 = (function (){var statearr_14672 = state_14670;(statearr_14672[7] = inst_14647);
return statearr_14672;
})();var statearr_14673_14696 = state_14670__$1;(statearr_14673_14696[2] = null);
(statearr_14673_14696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 2))
{var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14670__$1,4,ch);
} else
{if((state_val_14671 === 3))
{var inst_14667 = (state_14670[2]);var inst_14668 = cljs.core.async.close_BANG_.call(null,out);var state_14670__$1 = (function (){var statearr_14674 = state_14670;(statearr_14674[8] = inst_14667);
return statearr_14674;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14670__$1,inst_14668);
} else
{if((state_val_14671 === 4))
{var inst_14650 = (state_14670[9]);var inst_14650__$1 = (state_14670[2]);var inst_14651 = (inst_14650__$1 == null);var inst_14652 = cljs.core.not.call(null,inst_14651);var state_14670__$1 = (function (){var statearr_14675 = state_14670;(statearr_14675[9] = inst_14650__$1);
return statearr_14675;
})();if(inst_14652)
{var statearr_14676_14697 = state_14670__$1;(statearr_14676_14697[1] = 5);
} else
{var statearr_14677_14698 = state_14670__$1;(statearr_14677_14698[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 5))
{var inst_14647 = (state_14670[7]);var inst_14650 = (state_14670[9]);var inst_14654 = cljs.core._EQ_.call(null,inst_14650,inst_14647);var state_14670__$1 = state_14670;if(inst_14654)
{var statearr_14678_14699 = state_14670__$1;(statearr_14678_14699[1] = 8);
} else
{var statearr_14679_14700 = state_14670__$1;(statearr_14679_14700[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 6))
{var state_14670__$1 = state_14670;var statearr_14681_14701 = state_14670__$1;(statearr_14681_14701[2] = null);
(statearr_14681_14701[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 7))
{var inst_14665 = (state_14670[2]);var state_14670__$1 = state_14670;var statearr_14682_14702 = state_14670__$1;(statearr_14682_14702[2] = inst_14665);
(statearr_14682_14702[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 8))
{var inst_14647 = (state_14670[7]);var tmp14680 = inst_14647;var inst_14647__$1 = tmp14680;var state_14670__$1 = (function (){var statearr_14683 = state_14670;(statearr_14683[7] = inst_14647__$1);
return statearr_14683;
})();var statearr_14684_14703 = state_14670__$1;(statearr_14684_14703[2] = null);
(statearr_14684_14703[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 9))
{var inst_14650 = (state_14670[9]);var state_14670__$1 = state_14670;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14670__$1,11,out,inst_14650);
} else
{if((state_val_14671 === 10))
{var inst_14662 = (state_14670[2]);var state_14670__$1 = state_14670;var statearr_14685_14704 = state_14670__$1;(statearr_14685_14704[2] = inst_14662);
(statearr_14685_14704[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14671 === 11))
{var inst_14650 = (state_14670[9]);var inst_14659 = (state_14670[2]);var inst_14647 = inst_14650;var state_14670__$1 = (function (){var statearr_14686 = state_14670;(statearr_14686[7] = inst_14647);
(statearr_14686[10] = inst_14659);
return statearr_14686;
})();var statearr_14687_14705 = state_14670__$1;(statearr_14687_14705[2] = null);
(statearr_14687_14705[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14691 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14691[0] = state_machine__5507__auto__);
(statearr_14691[1] = 1);
return statearr_14691;
});
var state_machine__5507__auto____1 = (function (state_14670){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14670);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14692){if((e14692 instanceof Object))
{var ex__5510__auto__ = e14692;var statearr_14693_14706 = state_14670;(statearr_14693_14706[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14670);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14707 = state_14670;
state_14670 = G__14707;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14670){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14670);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14694 = f__5522__auto__.call(null);(statearr_14694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14695);
return statearr_14694;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14842 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14812){var state_val_14813 = (state_14812[1]);if((state_val_14813 === 1))
{var inst_14775 = (new Array(n));var inst_14776 = inst_14775;var inst_14777 = 0;var state_14812__$1 = (function (){var statearr_14814 = state_14812;(statearr_14814[7] = inst_14777);
(statearr_14814[8] = inst_14776);
return statearr_14814;
})();var statearr_14815_14843 = state_14812__$1;(statearr_14815_14843[2] = null);
(statearr_14815_14843[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 2))
{var state_14812__$1 = state_14812;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14812__$1,4,ch);
} else
{if((state_val_14813 === 3))
{var inst_14810 = (state_14812[2]);var state_14812__$1 = state_14812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14812__$1,inst_14810);
} else
{if((state_val_14813 === 4))
{var inst_14780 = (state_14812[9]);var inst_14780__$1 = (state_14812[2]);var inst_14781 = (inst_14780__$1 == null);var inst_14782 = cljs.core.not.call(null,inst_14781);var state_14812__$1 = (function (){var statearr_14816 = state_14812;(statearr_14816[9] = inst_14780__$1);
return statearr_14816;
})();if(inst_14782)
{var statearr_14817_14844 = state_14812__$1;(statearr_14817_14844[1] = 5);
} else
{var statearr_14818_14845 = state_14812__$1;(statearr_14818_14845[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 5))
{var inst_14777 = (state_14812[7]);var inst_14776 = (state_14812[8]);var inst_14780 = (state_14812[9]);var inst_14785 = (state_14812[10]);var inst_14784 = (inst_14776[inst_14777] = inst_14780);var inst_14785__$1 = (inst_14777 + 1);var inst_14786 = (inst_14785__$1 < n);var state_14812__$1 = (function (){var statearr_14819 = state_14812;(statearr_14819[11] = inst_14784);
(statearr_14819[10] = inst_14785__$1);
return statearr_14819;
})();if(cljs.core.truth_(inst_14786))
{var statearr_14820_14846 = state_14812__$1;(statearr_14820_14846[1] = 8);
} else
{var statearr_14821_14847 = state_14812__$1;(statearr_14821_14847[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 6))
{var inst_14777 = (state_14812[7]);var inst_14798 = (inst_14777 > 0);var state_14812__$1 = state_14812;if(cljs.core.truth_(inst_14798))
{var statearr_14823_14848 = state_14812__$1;(statearr_14823_14848[1] = 12);
} else
{var statearr_14824_14849 = state_14812__$1;(statearr_14824_14849[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 7))
{var inst_14808 = (state_14812[2]);var state_14812__$1 = state_14812;var statearr_14825_14850 = state_14812__$1;(statearr_14825_14850[2] = inst_14808);
(statearr_14825_14850[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 8))
{var inst_14776 = (state_14812[8]);var inst_14785 = (state_14812[10]);var tmp14822 = inst_14776;var inst_14776__$1 = tmp14822;var inst_14777 = inst_14785;var state_14812__$1 = (function (){var statearr_14826 = state_14812;(statearr_14826[7] = inst_14777);
(statearr_14826[8] = inst_14776__$1);
return statearr_14826;
})();var statearr_14827_14851 = state_14812__$1;(statearr_14827_14851[2] = null);
(statearr_14827_14851[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 9))
{var inst_14776 = (state_14812[8]);var inst_14790 = cljs.core.vec.call(null,inst_14776);var state_14812__$1 = state_14812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14812__$1,11,out,inst_14790);
} else
{if((state_val_14813 === 10))
{var inst_14796 = (state_14812[2]);var state_14812__$1 = state_14812;var statearr_14828_14852 = state_14812__$1;(statearr_14828_14852[2] = inst_14796);
(statearr_14828_14852[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 11))
{var inst_14792 = (state_14812[2]);var inst_14793 = (new Array(n));var inst_14776 = inst_14793;var inst_14777 = 0;var state_14812__$1 = (function (){var statearr_14829 = state_14812;(statearr_14829[7] = inst_14777);
(statearr_14829[8] = inst_14776);
(statearr_14829[12] = inst_14792);
return statearr_14829;
})();var statearr_14830_14853 = state_14812__$1;(statearr_14830_14853[2] = null);
(statearr_14830_14853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 12))
{var inst_14776 = (state_14812[8]);var inst_14800 = cljs.core.vec.call(null,inst_14776);var state_14812__$1 = state_14812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14812__$1,15,out,inst_14800);
} else
{if((state_val_14813 === 13))
{var state_14812__$1 = state_14812;var statearr_14831_14854 = state_14812__$1;(statearr_14831_14854[2] = null);
(statearr_14831_14854[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 14))
{var inst_14805 = (state_14812[2]);var inst_14806 = cljs.core.async.close_BANG_.call(null,out);var state_14812__$1 = (function (){var statearr_14832 = state_14812;(statearr_14832[13] = inst_14805);
return statearr_14832;
})();var statearr_14833_14855 = state_14812__$1;(statearr_14833_14855[2] = inst_14806);
(statearr_14833_14855[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14813 === 15))
{var inst_14802 = (state_14812[2]);var state_14812__$1 = state_14812;var statearr_14834_14856 = state_14812__$1;(statearr_14834_14856[2] = inst_14802);
(statearr_14834_14856[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14838[0] = state_machine__5507__auto__);
(statearr_14838[1] = 1);
return statearr_14838;
});
var state_machine__5507__auto____1 = (function (state_14812){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14812);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14839){if((e14839 instanceof Object))
{var ex__5510__auto__ = e14839;var statearr_14840_14857 = state_14812;(statearr_14840_14857[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14858 = state_14812;
state_14812 = G__14858;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14812){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14841 = f__5522__auto__.call(null);(statearr_14841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14842);
return statearr_14841;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15001 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14971){var state_val_14972 = (state_14971[1]);if((state_val_14972 === 1))
{var inst_14930 = [];var inst_14931 = inst_14930;var inst_14932 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14971__$1 = (function (){var statearr_14973 = state_14971;(statearr_14973[7] = inst_14931);
(statearr_14973[8] = inst_14932);
return statearr_14973;
})();var statearr_14974_15002 = state_14971__$1;(statearr_14974_15002[2] = null);
(statearr_14974_15002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 2))
{var state_14971__$1 = state_14971;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14971__$1,4,ch);
} else
{if((state_val_14972 === 3))
{var inst_14969 = (state_14971[2]);var state_14971__$1 = state_14971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14971__$1,inst_14969);
} else
{if((state_val_14972 === 4))
{var inst_14935 = (state_14971[9]);var inst_14935__$1 = (state_14971[2]);var inst_14936 = (inst_14935__$1 == null);var inst_14937 = cljs.core.not.call(null,inst_14936);var state_14971__$1 = (function (){var statearr_14975 = state_14971;(statearr_14975[9] = inst_14935__$1);
return statearr_14975;
})();if(inst_14937)
{var statearr_14976_15003 = state_14971__$1;(statearr_14976_15003[1] = 5);
} else
{var statearr_14977_15004 = state_14971__$1;(statearr_14977_15004[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 5))
{var inst_14939 = (state_14971[10]);var inst_14932 = (state_14971[8]);var inst_14935 = (state_14971[9]);var inst_14939__$1 = f.call(null,inst_14935);var inst_14940 = cljs.core._EQ_.call(null,inst_14939__$1,inst_14932);var inst_14941 = cljs.core.keyword_identical_QMARK_.call(null,inst_14932,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14942 = (inst_14940) || (inst_14941);var state_14971__$1 = (function (){var statearr_14978 = state_14971;(statearr_14978[10] = inst_14939__$1);
return statearr_14978;
})();if(cljs.core.truth_(inst_14942))
{var statearr_14979_15005 = state_14971__$1;(statearr_14979_15005[1] = 8);
} else
{var statearr_14980_15006 = state_14971__$1;(statearr_14980_15006[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 6))
{var inst_14931 = (state_14971[7]);var inst_14956 = inst_14931.length;var inst_14957 = (inst_14956 > 0);var state_14971__$1 = state_14971;if(cljs.core.truth_(inst_14957))
{var statearr_14982_15007 = state_14971__$1;(statearr_14982_15007[1] = 12);
} else
{var statearr_14983_15008 = state_14971__$1;(statearr_14983_15008[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 7))
{var inst_14967 = (state_14971[2]);var state_14971__$1 = state_14971;var statearr_14984_15009 = state_14971__$1;(statearr_14984_15009[2] = inst_14967);
(statearr_14984_15009[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 8))
{var inst_14939 = (state_14971[10]);var inst_14931 = (state_14971[7]);var inst_14935 = (state_14971[9]);var inst_14944 = inst_14931.push(inst_14935);var tmp14981 = inst_14931;var inst_14931__$1 = tmp14981;var inst_14932 = inst_14939;var state_14971__$1 = (function (){var statearr_14985 = state_14971;(statearr_14985[7] = inst_14931__$1);
(statearr_14985[11] = inst_14944);
(statearr_14985[8] = inst_14932);
return statearr_14985;
})();var statearr_14986_15010 = state_14971__$1;(statearr_14986_15010[2] = null);
(statearr_14986_15010[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 9))
{var inst_14931 = (state_14971[7]);var inst_14947 = cljs.core.vec.call(null,inst_14931);var state_14971__$1 = state_14971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14971__$1,11,out,inst_14947);
} else
{if((state_val_14972 === 10))
{var inst_14954 = (state_14971[2]);var state_14971__$1 = state_14971;var statearr_14987_15011 = state_14971__$1;(statearr_14987_15011[2] = inst_14954);
(statearr_14987_15011[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 11))
{var inst_14939 = (state_14971[10]);var inst_14935 = (state_14971[9]);var inst_14949 = (state_14971[2]);var inst_14950 = [];var inst_14951 = inst_14950.push(inst_14935);var inst_14931 = inst_14950;var inst_14932 = inst_14939;var state_14971__$1 = (function (){var statearr_14988 = state_14971;(statearr_14988[7] = inst_14931);
(statearr_14988[12] = inst_14949);
(statearr_14988[13] = inst_14951);
(statearr_14988[8] = inst_14932);
return statearr_14988;
})();var statearr_14989_15012 = state_14971__$1;(statearr_14989_15012[2] = null);
(statearr_14989_15012[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 12))
{var inst_14931 = (state_14971[7]);var inst_14959 = cljs.core.vec.call(null,inst_14931);var state_14971__$1 = state_14971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14971__$1,15,out,inst_14959);
} else
{if((state_val_14972 === 13))
{var state_14971__$1 = state_14971;var statearr_14990_15013 = state_14971__$1;(statearr_14990_15013[2] = null);
(statearr_14990_15013[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 14))
{var inst_14964 = (state_14971[2]);var inst_14965 = cljs.core.async.close_BANG_.call(null,out);var state_14971__$1 = (function (){var statearr_14991 = state_14971;(statearr_14991[14] = inst_14964);
return statearr_14991;
})();var statearr_14992_15014 = state_14971__$1;(statearr_14992_15014[2] = inst_14965);
(statearr_14992_15014[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 15))
{var inst_14961 = (state_14971[2]);var state_14971__$1 = state_14971;var statearr_14993_15015 = state_14971__$1;(statearr_14993_15015[2] = inst_14961);
(statearr_14993_15015[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14997[0] = state_machine__5507__auto__);
(statearr_14997[1] = 1);
return statearr_14997;
});
var state_machine__5507__auto____1 = (function (state_14971){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14971);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14998){if((e14998 instanceof Object))
{var ex__5510__auto__ = e14998;var statearr_14999_15016 = state_14971;(statearr_14999_15016[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15017 = state_14971;
state_14971 = G__15017;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14971){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15000 = f__5522__auto__.call(null);(statearr_15000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15001);
return statearr_15000;
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