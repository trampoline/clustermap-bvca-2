// Compiled by ClojureScript 0.0-2080
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31625 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31625 = (function (f,fn_handler,meta31626){
this.f = f;
this.fn_handler = fn_handler;
this.meta31626 = meta31626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31625.cljs$lang$type = true;
cljs.core.async.t31625.cljs$lang$ctorStr = "cljs.core.async/t31625";
cljs.core.async.t31625.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31625");
});
cljs.core.async.t31625.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31625.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31625.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31627){var self__ = this;
var _31627__$1 = this;return self__.meta31626;
});
cljs.core.async.t31625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31627,meta31626__$1){var self__ = this;
var _31627__$1 = this;return (new cljs.core.async.t31625(self__.f,self__.fn_handler,meta31626__$1));
});
cljs.core.async.__GT_t31625 = (function __GT_t31625(f__$1,fn_handler__$1,meta31626){return (new cljs.core.async.t31625(f__$1,fn_handler__$1,meta31626));
});
}
return (new cljs.core.async.t31625(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31629 = buff;if(G__31629)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__31629.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31629.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31629);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31629);
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
{var val_31630 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31630);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31630);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3279__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___31631 = n;var x_31632 = 0;while(true){
if((x_31632 < n__4114__auto___31631))
{(a[x_31632] = 0);
{
var G__31633 = (x_31632 + 1);
x_31632 = G__31633;
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
var G__31634 = (i + 1);
i = G__31634;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31638 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31638 = (function (flag,alt_flag,meta31639){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31639 = meta31639;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31638.cljs$lang$type = true;
cljs.core.async.t31638.cljs$lang$ctorStr = "cljs.core.async/t31638";
cljs.core.async.t31638.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31638");
});
cljs.core.async.t31638.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31638.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31638.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31638.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31640){var self__ = this;
var _31640__$1 = this;return self__.meta31639;
});
cljs.core.async.t31638.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31640,meta31639__$1){var self__ = this;
var _31640__$1 = this;return (new cljs.core.async.t31638(self__.flag,self__.alt_flag,meta31639__$1));
});
cljs.core.async.__GT_t31638 = (function __GT_t31638(flag__$1,alt_flag__$1,meta31639){return (new cljs.core.async.t31638(flag__$1,alt_flag__$1,meta31639));
});
}
return (new cljs.core.async.t31638(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31644 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31644 = (function (cb,flag,alt_handler,meta31645){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31645 = meta31645;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31644.cljs$lang$type = true;
cljs.core.async.t31644.cljs$lang$ctorStr = "cljs.core.async/t31644";
cljs.core.async.t31644.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31644");
});
cljs.core.async.t31644.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31644.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31644.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31644.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31646){var self__ = this;
var _31646__$1 = this;return self__.meta31645;
});
cljs.core.async.t31644.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31646,meta31645__$1){var self__ = this;
var _31646__$1 = this;return (new cljs.core.async.t31644(self__.cb,self__.flag,self__.alt_handler,meta31645__$1));
});
cljs.core.async.__GT_t31644 = (function __GT_t31644(cb__$1,flag__$1,alt_handler__$1,meta31645){return (new cljs.core.async.t31644(cb__$1,flag__$1,alt_handler__$1,meta31645));
});
}
return (new cljs.core.async.t31644(cb,flag,alt_handler,null));
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
return (function (p1__31647_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31647_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3291__auto__ = wport;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__31648 = (i + 1);
i = G__31648;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3291__auto__ = ret;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3279__auto__;
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
var alts_BANG___delegate = function (ports,p__31649){var map__31651 = p__31649;var map__31651__$1 = ((cljs.core.seq_QMARK_.call(null,map__31651))?cljs.core.apply.call(null,cljs.core.hash_map,map__31651):map__31651);var opts = map__31651__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31649 = null;if (arguments.length > 1) {
  p__31649 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31649);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31652){
var ports = cljs.core.first(arglist__31652);
var p__31649 = cljs.core.rest(arglist__31652);
return alts_BANG___delegate(ports,p__31649);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31660 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31660 = (function (ch,f,map_LT_,meta31661){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31661 = meta31661;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31660.cljs$lang$type = true;
cljs.core.async.t31660.cljs$lang$ctorStr = "cljs.core.async/t31660";
cljs.core.async.t31660.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31660");
});
cljs.core.async.t31660.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31660.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31660.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31660.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31663 = (function (fn1,_,meta31661,ch,f,map_LT_,meta31664){
this.fn1 = fn1;
this._ = _;
this.meta31661 = meta31661;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31664 = meta31664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31663.cljs$lang$type = true;
cljs.core.async.t31663.cljs$lang$ctorStr = "cljs.core.async/t31663";
cljs.core.async.t31663.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31663");
});
cljs.core.async.t31663.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31663.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31663.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31663.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31653_SHARP_){return f1.call(null,(((p1__31653_SHARP_ == null))?null:self__.f.call(null,p1__31653_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31663.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31665){var self__ = this;
var _31665__$1 = this;return self__.meta31664;
});
cljs.core.async.t31663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31665,meta31664__$1){var self__ = this;
var _31665__$1 = this;return (new cljs.core.async.t31663(self__.fn1,self__._,self__.meta31661,self__.ch,self__.f,self__.map_LT_,meta31664__$1));
});
cljs.core.async.__GT_t31663 = (function __GT_t31663(fn1__$1,___$2,meta31661__$1,ch__$2,f__$2,map_LT___$2,meta31664){return (new cljs.core.async.t31663(fn1__$1,___$2,meta31661__$1,ch__$2,f__$2,map_LT___$2,meta31664));
});
}
return (new cljs.core.async.t31663(fn1,___$1,self__.meta31661,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t31660.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31660.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31660.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31662){var self__ = this;
var _31662__$1 = this;return self__.meta31661;
});
cljs.core.async.t31660.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31662,meta31661__$1){var self__ = this;
var _31662__$1 = this;return (new cljs.core.async.t31660(self__.ch,self__.f,self__.map_LT_,meta31661__$1));
});
cljs.core.async.__GT_t31660 = (function __GT_t31660(ch__$1,f__$1,map_LT___$1,meta31661){return (new cljs.core.async.t31660(ch__$1,f__$1,map_LT___$1,meta31661));
});
}
return (new cljs.core.async.t31660(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31669 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31669 = (function (ch,f,map_GT_,meta31670){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31670 = meta31670;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31669.cljs$lang$type = true;
cljs.core.async.t31669.cljs$lang$ctorStr = "cljs.core.async/t31669";
cljs.core.async.t31669.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31669");
});
cljs.core.async.t31669.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31669.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31669.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31669.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31669.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31669.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31669.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31671){var self__ = this;
var _31671__$1 = this;return self__.meta31670;
});
cljs.core.async.t31669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31671,meta31670__$1){var self__ = this;
var _31671__$1 = this;return (new cljs.core.async.t31669(self__.ch,self__.f,self__.map_GT_,meta31670__$1));
});
cljs.core.async.__GT_t31669 = (function __GT_t31669(ch__$1,f__$1,map_GT___$1,meta31670){return (new cljs.core.async.t31669(ch__$1,f__$1,map_GT___$1,meta31670));
});
}
return (new cljs.core.async.t31669(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31675 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31675 = (function (ch,p,filter_GT_,meta31676){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31676 = meta31676;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31675.cljs$lang$type = true;
cljs.core.async.t31675.cljs$lang$ctorStr = "cljs.core.async/t31675";
cljs.core.async.t31675.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31675");
});
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31675.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31675.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31677){var self__ = this;
var _31677__$1 = this;return self__.meta31676;
});
cljs.core.async.t31675.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31677,meta31676__$1){var self__ = this;
var _31677__$1 = this;return (new cljs.core.async.t31675(self__.ch,self__.p,self__.filter_GT_,meta31676__$1));
});
cljs.core.async.__GT_t31675 = (function __GT_t31675(ch__$1,p__$1,filter_GT___$1,meta31676){return (new cljs.core.async.t31675(ch__$1,p__$1,filter_GT___$1,meta31676));
});
}
return (new cljs.core.async.t31675(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___31760 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_31739){var state_val_31740 = (state_31739[1]);if((state_val_31740 === 1))
{var state_31739__$1 = state_31739;var statearr_31741_31761 = state_31739__$1;(statearr_31741_31761[2] = null);
(statearr_31741_31761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31740 === 2))
{var state_31739__$1 = state_31739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31739__$1,4,ch);
} else
{if((state_val_31740 === 3))
{var inst_31737 = (state_31739[2]);var state_31739__$1 = state_31739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31739__$1,inst_31737);
} else
{if((state_val_31740 === 4))
{var inst_31721 = (state_31739[7]);var inst_31721__$1 = (state_31739[2]);var inst_31722 = (inst_31721__$1 == null);var state_31739__$1 = (function (){var statearr_31742 = state_31739;(statearr_31742[7] = inst_31721__$1);
return statearr_31742;
})();if(cljs.core.truth_(inst_31722))
{var statearr_31743_31762 = state_31739__$1;(statearr_31743_31762[1] = 5);
} else
{var statearr_31744_31763 = state_31739__$1;(statearr_31744_31763[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31740 === 5))
{var inst_31724 = cljs.core.async.close_BANG_.call(null,out);var state_31739__$1 = state_31739;var statearr_31745_31764 = state_31739__$1;(statearr_31745_31764[2] = inst_31724);
(statearr_31745_31764[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31740 === 6))
{var inst_31721 = (state_31739[7]);var inst_31726 = p.call(null,inst_31721);var state_31739__$1 = state_31739;if(cljs.core.truth_(inst_31726))
{var statearr_31746_31765 = state_31739__$1;(statearr_31746_31765[1] = 8);
} else
{var statearr_31747_31766 = state_31739__$1;(statearr_31747_31766[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31740 === 7))
{var inst_31735 = (state_31739[2]);var state_31739__$1 = state_31739;var statearr_31748_31767 = state_31739__$1;(statearr_31748_31767[2] = inst_31735);
(statearr_31748_31767[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31740 === 8))
{var inst_31721 = (state_31739[7]);var state_31739__$1 = state_31739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31739__$1,11,out,inst_31721);
} else
{if((state_val_31740 === 9))
{var state_31739__$1 = state_31739;var statearr_31749_31768 = state_31739__$1;(statearr_31749_31768[2] = null);
(statearr_31749_31768[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31740 === 10))
{var inst_31732 = (state_31739[2]);var state_31739__$1 = (function (){var statearr_31750 = state_31739;(statearr_31750[8] = inst_31732);
return statearr_31750;
})();var statearr_31751_31769 = state_31739__$1;(statearr_31751_31769[2] = null);
(statearr_31751_31769[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31740 === 11))
{var inst_31729 = (state_31739[2]);var state_31739__$1 = state_31739;var statearr_31752_31770 = state_31739__$1;(statearr_31752_31770[2] = inst_31729);
(statearr_31752_31770[1] = 10);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_31756 = (new Array(9));(statearr_31756[0] = state_machine__5792__auto__);
(statearr_31756[1] = 1);
return statearr_31756;
});
var state_machine__5792__auto____1 = (function (state_31739){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_31739);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e31757){if((e31757 instanceof Object))
{var ex__5795__auto__ = e31757;var statearr_31758_31771 = state_31739;(statearr_31758_31771[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31739);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31772 = state_31739;
state_31739 = G__31772;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_31739){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_31739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_31759 = f__5862__auto__.call(null);(statearr_31759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___31760);
return statearr_31759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_31924){var state_val_31925 = (state_31924[1]);if((state_val_31925 === 1))
{var state_31924__$1 = state_31924;var statearr_31926_31963 = state_31924__$1;(statearr_31926_31963[2] = null);
(statearr_31926_31963[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 2))
{var state_31924__$1 = state_31924;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31924__$1,4,in$);
} else
{if((state_val_31925 === 3))
{var inst_31922 = (state_31924[2]);var state_31924__$1 = state_31924;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31924__$1,inst_31922);
} else
{if((state_val_31925 === 4))
{var inst_31870 = (state_31924[7]);var inst_31870__$1 = (state_31924[2]);var inst_31871 = (inst_31870__$1 == null);var state_31924__$1 = (function (){var statearr_31927 = state_31924;(statearr_31927[7] = inst_31870__$1);
return statearr_31927;
})();if(cljs.core.truth_(inst_31871))
{var statearr_31928_31964 = state_31924__$1;(statearr_31928_31964[1] = 5);
} else
{var statearr_31929_31965 = state_31924__$1;(statearr_31929_31965[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 5))
{var inst_31873 = cljs.core.async.close_BANG_.call(null,out);var state_31924__$1 = state_31924;var statearr_31930_31966 = state_31924__$1;(statearr_31930_31966[2] = inst_31873);
(statearr_31930_31966[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 6))
{var inst_31870 = (state_31924[7]);var inst_31875 = f.call(null,inst_31870);var inst_31880 = cljs.core.seq.call(null,inst_31875);var inst_31881 = inst_31880;var inst_31882 = null;var inst_31883 = 0;var inst_31884 = 0;var state_31924__$1 = (function (){var statearr_31931 = state_31924;(statearr_31931[8] = inst_31883);
(statearr_31931[9] = inst_31884);
(statearr_31931[10] = inst_31882);
(statearr_31931[11] = inst_31881);
return statearr_31931;
})();var statearr_31932_31967 = state_31924__$1;(statearr_31932_31967[2] = null);
(statearr_31932_31967[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 7))
{var inst_31920 = (state_31924[2]);var state_31924__$1 = state_31924;var statearr_31933_31968 = state_31924__$1;(statearr_31933_31968[2] = inst_31920);
(statearr_31933_31968[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 8))
{var inst_31883 = (state_31924[8]);var inst_31884 = (state_31924[9]);var inst_31886 = (inst_31884 < inst_31883);var inst_31887 = inst_31886;var state_31924__$1 = state_31924;if(cljs.core.truth_(inst_31887))
{var statearr_31934_31969 = state_31924__$1;(statearr_31934_31969[1] = 10);
} else
{var statearr_31935_31970 = state_31924__$1;(statearr_31935_31970[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 9))
{var inst_31917 = (state_31924[2]);var state_31924__$1 = (function (){var statearr_31936 = state_31924;(statearr_31936[12] = inst_31917);
return statearr_31936;
})();var statearr_31937_31971 = state_31924__$1;(statearr_31937_31971[2] = null);
(statearr_31937_31971[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 10))
{var inst_31884 = (state_31924[9]);var inst_31882 = (state_31924[10]);var inst_31889 = cljs.core._nth.call(null,inst_31882,inst_31884);var state_31924__$1 = state_31924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31924__$1,13,out,inst_31889);
} else
{if((state_val_31925 === 11))
{var inst_31895 = (state_31924[13]);var inst_31881 = (state_31924[11]);var inst_31895__$1 = cljs.core.seq.call(null,inst_31881);var state_31924__$1 = (function (){var statearr_31941 = state_31924;(statearr_31941[13] = inst_31895__$1);
return statearr_31941;
})();if(inst_31895__$1)
{var statearr_31942_31972 = state_31924__$1;(statearr_31942_31972[1] = 14);
} else
{var statearr_31943_31973 = state_31924__$1;(statearr_31943_31973[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 12))
{var inst_31915 = (state_31924[2]);var state_31924__$1 = state_31924;var statearr_31944_31974 = state_31924__$1;(statearr_31944_31974[2] = inst_31915);
(statearr_31944_31974[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 13))
{var inst_31883 = (state_31924[8]);var inst_31884 = (state_31924[9]);var inst_31882 = (state_31924[10]);var inst_31881 = (state_31924[11]);var inst_31891 = (state_31924[2]);var inst_31892 = (inst_31884 + 1);var tmp31938 = inst_31883;var tmp31939 = inst_31882;var tmp31940 = inst_31881;var inst_31881__$1 = tmp31940;var inst_31882__$1 = tmp31939;var inst_31883__$1 = tmp31938;var inst_31884__$1 = inst_31892;var state_31924__$1 = (function (){var statearr_31945 = state_31924;(statearr_31945[8] = inst_31883__$1);
(statearr_31945[9] = inst_31884__$1);
(statearr_31945[14] = inst_31891);
(statearr_31945[10] = inst_31882__$1);
(statearr_31945[11] = inst_31881__$1);
return statearr_31945;
})();var statearr_31946_31975 = state_31924__$1;(statearr_31946_31975[2] = null);
(statearr_31946_31975[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 14))
{var inst_31895 = (state_31924[13]);var inst_31897 = cljs.core.chunked_seq_QMARK_.call(null,inst_31895);var state_31924__$1 = state_31924;if(inst_31897)
{var statearr_31947_31976 = state_31924__$1;(statearr_31947_31976[1] = 17);
} else
{var statearr_31948_31977 = state_31924__$1;(statearr_31948_31977[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 15))
{var state_31924__$1 = state_31924;var statearr_31949_31978 = state_31924__$1;(statearr_31949_31978[2] = null);
(statearr_31949_31978[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 16))
{var inst_31913 = (state_31924[2]);var state_31924__$1 = state_31924;var statearr_31950_31979 = state_31924__$1;(statearr_31950_31979[2] = inst_31913);
(statearr_31950_31979[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 17))
{var inst_31895 = (state_31924[13]);var inst_31899 = cljs.core.chunk_first.call(null,inst_31895);var inst_31900 = cljs.core.chunk_rest.call(null,inst_31895);var inst_31901 = cljs.core.count.call(null,inst_31899);var inst_31881 = inst_31900;var inst_31882 = inst_31899;var inst_31883 = inst_31901;var inst_31884 = 0;var state_31924__$1 = (function (){var statearr_31951 = state_31924;(statearr_31951[8] = inst_31883);
(statearr_31951[9] = inst_31884);
(statearr_31951[10] = inst_31882);
(statearr_31951[11] = inst_31881);
return statearr_31951;
})();var statearr_31952_31980 = state_31924__$1;(statearr_31952_31980[2] = null);
(statearr_31952_31980[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 18))
{var inst_31895 = (state_31924[13]);var inst_31904 = cljs.core.first.call(null,inst_31895);var state_31924__$1 = state_31924;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31924__$1,20,out,inst_31904);
} else
{if((state_val_31925 === 19))
{var inst_31910 = (state_31924[2]);var state_31924__$1 = state_31924;var statearr_31953_31981 = state_31924__$1;(statearr_31953_31981[2] = inst_31910);
(statearr_31953_31981[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31925 === 20))
{var inst_31895 = (state_31924[13]);var inst_31906 = (state_31924[2]);var inst_31907 = cljs.core.next.call(null,inst_31895);var inst_31881 = inst_31907;var inst_31882 = null;var inst_31883 = 0;var inst_31884 = 0;var state_31924__$1 = (function (){var statearr_31954 = state_31924;(statearr_31954[15] = inst_31906);
(statearr_31954[8] = inst_31883);
(statearr_31954[9] = inst_31884);
(statearr_31954[10] = inst_31882);
(statearr_31954[11] = inst_31881);
return statearr_31954;
})();var statearr_31955_31982 = state_31924__$1;(statearr_31955_31982[2] = null);
(statearr_31955_31982[1] = 8);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_31959 = (new Array(16));(statearr_31959[0] = state_machine__5792__auto__);
(statearr_31959[1] = 1);
return statearr_31959;
});
var state_machine__5792__auto____1 = (function (state_31924){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_31924);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e31960){if((e31960 instanceof Object))
{var ex__5795__auto__ = e31960;var statearr_31961_31983 = state_31924;(statearr_31961_31983[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31924);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31960;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31984 = state_31924;
state_31924 = G__31984;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_31924){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_31924);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_31962 = f__5862__auto__.call(null);(statearr_31962[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_31962;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5861__auto___32065 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32044){var state_val_32045 = (state_32044[1]);if((state_val_32045 === 1))
{var state_32044__$1 = state_32044;var statearr_32046_32066 = state_32044__$1;(statearr_32046_32066[2] = null);
(statearr_32046_32066[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32045 === 2))
{var state_32044__$1 = state_32044;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32044__$1,4,from);
} else
{if((state_val_32045 === 3))
{var inst_32042 = (state_32044[2]);var state_32044__$1 = state_32044;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32044__$1,inst_32042);
} else
{if((state_val_32045 === 4))
{var inst_32027 = (state_32044[7]);var inst_32027__$1 = (state_32044[2]);var inst_32028 = (inst_32027__$1 == null);var state_32044__$1 = (function (){var statearr_32047 = state_32044;(statearr_32047[7] = inst_32027__$1);
return statearr_32047;
})();if(cljs.core.truth_(inst_32028))
{var statearr_32048_32067 = state_32044__$1;(statearr_32048_32067[1] = 5);
} else
{var statearr_32049_32068 = state_32044__$1;(statearr_32049_32068[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32045 === 5))
{var state_32044__$1 = state_32044;if(cljs.core.truth_(close_QMARK_))
{var statearr_32050_32069 = state_32044__$1;(statearr_32050_32069[1] = 8);
} else
{var statearr_32051_32070 = state_32044__$1;(statearr_32051_32070[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32045 === 6))
{var inst_32027 = (state_32044[7]);var state_32044__$1 = state_32044;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32044__$1,11,to,inst_32027);
} else
{if((state_val_32045 === 7))
{var inst_32040 = (state_32044[2]);var state_32044__$1 = state_32044;var statearr_32052_32071 = state_32044__$1;(statearr_32052_32071[2] = inst_32040);
(statearr_32052_32071[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32045 === 8))
{var inst_32031 = cljs.core.async.close_BANG_.call(null,to);var state_32044__$1 = state_32044;var statearr_32053_32072 = state_32044__$1;(statearr_32053_32072[2] = inst_32031);
(statearr_32053_32072[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32045 === 9))
{var state_32044__$1 = state_32044;var statearr_32054_32073 = state_32044__$1;(statearr_32054_32073[2] = null);
(statearr_32054_32073[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32045 === 10))
{var inst_32034 = (state_32044[2]);var state_32044__$1 = state_32044;var statearr_32055_32074 = state_32044__$1;(statearr_32055_32074[2] = inst_32034);
(statearr_32055_32074[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32045 === 11))
{var inst_32037 = (state_32044[2]);var state_32044__$1 = (function (){var statearr_32056 = state_32044;(statearr_32056[8] = inst_32037);
return statearr_32056;
})();var statearr_32057_32075 = state_32044__$1;(statearr_32057_32075[2] = null);
(statearr_32057_32075[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32061 = (new Array(9));(statearr_32061[0] = state_machine__5792__auto__);
(statearr_32061[1] = 1);
return statearr_32061;
});
var state_machine__5792__auto____1 = (function (state_32044){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32044);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32062){if((e32062 instanceof Object))
{var ex__5795__auto__ = e32062;var statearr_32063_32076 = state_32044;(statearr_32063_32076[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32044);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32062;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32077 = state_32044;
state_32044 = G__32077;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32044){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32044);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32064 = f__5862__auto__.call(null);(statearr_32064[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___32065);
return statearr_32064;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5861__auto___32164 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32142){var state_val_32143 = (state_32142[1]);if((state_val_32143 === 1))
{var state_32142__$1 = state_32142;var statearr_32144_32165 = state_32142__$1;(statearr_32144_32165[2] = null);
(statearr_32144_32165[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32143 === 2))
{var state_32142__$1 = state_32142;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32142__$1,4,ch);
} else
{if((state_val_32143 === 3))
{var inst_32140 = (state_32142[2]);var state_32142__$1 = state_32142;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32142__$1,inst_32140);
} else
{if((state_val_32143 === 4))
{var inst_32123 = (state_32142[7]);var inst_32123__$1 = (state_32142[2]);var inst_32124 = (inst_32123__$1 == null);var state_32142__$1 = (function (){var statearr_32145 = state_32142;(statearr_32145[7] = inst_32123__$1);
return statearr_32145;
})();if(cljs.core.truth_(inst_32124))
{var statearr_32146_32166 = state_32142__$1;(statearr_32146_32166[1] = 5);
} else
{var statearr_32147_32167 = state_32142__$1;(statearr_32147_32167[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32143 === 5))
{var inst_32126 = cljs.core.async.close_BANG_.call(null,tc);var inst_32127 = cljs.core.async.close_BANG_.call(null,fc);var state_32142__$1 = (function (){var statearr_32148 = state_32142;(statearr_32148[8] = inst_32126);
return statearr_32148;
})();var statearr_32149_32168 = state_32142__$1;(statearr_32149_32168[2] = inst_32127);
(statearr_32149_32168[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32143 === 6))
{var inst_32123 = (state_32142[7]);var inst_32129 = p.call(null,inst_32123);var state_32142__$1 = state_32142;if(cljs.core.truth_(inst_32129))
{var statearr_32150_32169 = state_32142__$1;(statearr_32150_32169[1] = 9);
} else
{var statearr_32151_32170 = state_32142__$1;(statearr_32151_32170[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32143 === 7))
{var inst_32138 = (state_32142[2]);var state_32142__$1 = state_32142;var statearr_32152_32171 = state_32142__$1;(statearr_32152_32171[2] = inst_32138);
(statearr_32152_32171[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32143 === 8))
{var inst_32135 = (state_32142[2]);var state_32142__$1 = (function (){var statearr_32153 = state_32142;(statearr_32153[9] = inst_32135);
return statearr_32153;
})();var statearr_32154_32172 = state_32142__$1;(statearr_32154_32172[2] = null);
(statearr_32154_32172[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32143 === 9))
{var state_32142__$1 = state_32142;var statearr_32155_32173 = state_32142__$1;(statearr_32155_32173[2] = tc);
(statearr_32155_32173[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32143 === 10))
{var state_32142__$1 = state_32142;var statearr_32156_32174 = state_32142__$1;(statearr_32156_32174[2] = fc);
(statearr_32156_32174[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32143 === 11))
{var inst_32123 = (state_32142[7]);var inst_32133 = (state_32142[2]);var state_32142__$1 = state_32142;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32142__$1,8,inst_32133,inst_32123);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32160 = (new Array(10));(statearr_32160[0] = state_machine__5792__auto__);
(statearr_32160[1] = 1);
return statearr_32160;
});
var state_machine__5792__auto____1 = (function (state_32142){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32142);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32161){if((e32161 instanceof Object))
{var ex__5795__auto__ = e32161;var statearr_32162_32175 = state_32142;(statearr_32162_32175[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32142);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32161;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32176 = state_32142;
state_32142 = G__32176;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32142){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32163 = f__5862__auto__.call(null);(statearr_32163[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___32164);
return statearr_32163;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32223){var state_val_32224 = (state_32223[1]);if((state_val_32224 === 7))
{var inst_32219 = (state_32223[2]);var state_32223__$1 = state_32223;var statearr_32225_32241 = state_32223__$1;(statearr_32225_32241[2] = inst_32219);
(statearr_32225_32241[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32224 === 6))
{var inst_32209 = (state_32223[7]);var inst_32212 = (state_32223[8]);var inst_32216 = f.call(null,inst_32209,inst_32212);var inst_32209__$1 = inst_32216;var state_32223__$1 = (function (){var statearr_32226 = state_32223;(statearr_32226[7] = inst_32209__$1);
return statearr_32226;
})();var statearr_32227_32242 = state_32223__$1;(statearr_32227_32242[2] = null);
(statearr_32227_32242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32224 === 5))
{var inst_32209 = (state_32223[7]);var state_32223__$1 = state_32223;var statearr_32228_32243 = state_32223__$1;(statearr_32228_32243[2] = inst_32209);
(statearr_32228_32243[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32224 === 4))
{var inst_32212 = (state_32223[8]);var inst_32212__$1 = (state_32223[2]);var inst_32213 = (inst_32212__$1 == null);var state_32223__$1 = (function (){var statearr_32229 = state_32223;(statearr_32229[8] = inst_32212__$1);
return statearr_32229;
})();if(cljs.core.truth_(inst_32213))
{var statearr_32230_32244 = state_32223__$1;(statearr_32230_32244[1] = 5);
} else
{var statearr_32231_32245 = state_32223__$1;(statearr_32231_32245[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32224 === 3))
{var inst_32221 = (state_32223[2]);var state_32223__$1 = state_32223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32223__$1,inst_32221);
} else
{if((state_val_32224 === 2))
{var state_32223__$1 = state_32223;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32223__$1,4,ch);
} else
{if((state_val_32224 === 1))
{var inst_32209 = init;var state_32223__$1 = (function (){var statearr_32232 = state_32223;(statearr_32232[7] = inst_32209);
return statearr_32232;
})();var statearr_32233_32246 = state_32223__$1;(statearr_32233_32246[2] = null);
(statearr_32233_32246[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32237 = (new Array(9));(statearr_32237[0] = state_machine__5792__auto__);
(statearr_32237[1] = 1);
return statearr_32237;
});
var state_machine__5792__auto____1 = (function (state_32223){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32223);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32238){if((e32238 instanceof Object))
{var ex__5795__auto__ = e32238;var statearr_32239_32247 = state_32223;(statearr_32239_32247[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32223);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32248 = state_32223;
state_32223 = G__32248;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32223){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32240 = f__5862__auto__.call(null);(statearr_32240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_32240;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5861__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32310){var state_val_32311 = (state_32310[1]);if((state_val_32311 === 1))
{var inst_32290 = cljs.core.seq.call(null,coll);var inst_32291 = inst_32290;var state_32310__$1 = (function (){var statearr_32312 = state_32310;(statearr_32312[7] = inst_32291);
return statearr_32312;
})();var statearr_32313_32331 = state_32310__$1;(statearr_32313_32331[2] = null);
(statearr_32313_32331[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32311 === 2))
{var inst_32291 = (state_32310[7]);var state_32310__$1 = state_32310;if(cljs.core.truth_(inst_32291))
{var statearr_32314_32332 = state_32310__$1;(statearr_32314_32332[1] = 4);
} else
{var statearr_32315_32333 = state_32310__$1;(statearr_32315_32333[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32311 === 3))
{var inst_32308 = (state_32310[2]);var state_32310__$1 = state_32310;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32310__$1,inst_32308);
} else
{if((state_val_32311 === 4))
{var inst_32291 = (state_32310[7]);var inst_32294 = cljs.core.first.call(null,inst_32291);var state_32310__$1 = state_32310;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32310__$1,7,ch,inst_32294);
} else
{if((state_val_32311 === 5))
{var state_32310__$1 = state_32310;if(cljs.core.truth_(close_QMARK_))
{var statearr_32316_32334 = state_32310__$1;(statearr_32316_32334[1] = 8);
} else
{var statearr_32317_32335 = state_32310__$1;(statearr_32317_32335[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32311 === 6))
{var inst_32306 = (state_32310[2]);var state_32310__$1 = state_32310;var statearr_32318_32336 = state_32310__$1;(statearr_32318_32336[2] = inst_32306);
(statearr_32318_32336[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32311 === 7))
{var inst_32291 = (state_32310[7]);var inst_32296 = (state_32310[2]);var inst_32297 = cljs.core.next.call(null,inst_32291);var inst_32291__$1 = inst_32297;var state_32310__$1 = (function (){var statearr_32319 = state_32310;(statearr_32319[8] = inst_32296);
(statearr_32319[7] = inst_32291__$1);
return statearr_32319;
})();var statearr_32320_32337 = state_32310__$1;(statearr_32320_32337[2] = null);
(statearr_32320_32337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32311 === 8))
{var inst_32301 = cljs.core.async.close_BANG_.call(null,ch);var state_32310__$1 = state_32310;var statearr_32321_32338 = state_32310__$1;(statearr_32321_32338[2] = inst_32301);
(statearr_32321_32338[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32311 === 9))
{var state_32310__$1 = state_32310;var statearr_32322_32339 = state_32310__$1;(statearr_32322_32339[2] = null);
(statearr_32322_32339[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32311 === 10))
{var inst_32304 = (state_32310[2]);var state_32310__$1 = state_32310;var statearr_32323_32340 = state_32310__$1;(statearr_32323_32340[2] = inst_32304);
(statearr_32323_32340[1] = 6);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32327 = (new Array(9));(statearr_32327[0] = state_machine__5792__auto__);
(statearr_32327[1] = 1);
return statearr_32327;
});
var state_machine__5792__auto____1 = (function (state_32310){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32310);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32328){if((e32328 instanceof Object))
{var ex__5795__auto__ = e32328;var statearr_32329_32341 = state_32310;(statearr_32329_32341[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32310);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32328;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32342 = state_32310;
state_32310 = G__32342;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32310){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32310);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32330 = f__5862__auto__.call(null);(statearr_32330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto__);
return statearr_32330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
}));
return c__5861__auto__;
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
cljs.core.async.Mux = (function (){var obj32344 = {};return obj32344;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3279__auto__ = _;if(and__3279__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3894__auto__ = (((_ == null))?null:_);return (function (){var or__3291__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj32346 = {};return obj32346;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32570 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32570 = (function (cs,ch,mult,meta32571){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32571 = meta32571;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32570.cljs$lang$type = true;
cljs.core.async.t32570.cljs$lang$ctorStr = "cljs.core.async/t32570";
cljs.core.async.t32570.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t32570");
});})(cs))
;
cljs.core.async.t32570.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32570.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32570.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32570.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32570.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32570.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32570.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32572){var self__ = this;
var _32572__$1 = this;return self__.meta32571;
});})(cs))
;
cljs.core.async.t32570.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32572,meta32571__$1){var self__ = this;
var _32572__$1 = this;return (new cljs.core.async.t32570(self__.cs,self__.ch,self__.mult,meta32571__$1));
});})(cs))
;
cljs.core.async.__GT_t32570 = ((function (cs){
return (function __GT_t32570(cs__$1,ch__$1,mult__$1,meta32571){return (new cljs.core.async.t32570(cs__$1,ch__$1,mult__$1,meta32571));
});})(cs))
;
}
return (new cljs.core.async.t32570(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5861__auto___32793 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_32707){var state_val_32708 = (state_32707[1]);if((state_val_32708 === 32))
{var inst_32575 = (state_32707[7]);var inst_32651 = (state_32707[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32707,31,Object,null,30);var inst_32658 = cljs.core.async.put_BANG_.call(null,inst_32651,inst_32575,done);var state_32707__$1 = state_32707;var statearr_32709_32794 = state_32707__$1;(statearr_32709_32794[2] = inst_32658);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32707__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 1))
{var state_32707__$1 = state_32707;var statearr_32710_32795 = state_32707__$1;(statearr_32710_32795[2] = null);
(statearr_32710_32795[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 33))
{var inst_32664 = (state_32707[9]);var inst_32666 = cljs.core.chunked_seq_QMARK_.call(null,inst_32664);var state_32707__$1 = state_32707;if(inst_32666)
{var statearr_32711_32796 = state_32707__$1;(statearr_32711_32796[1] = 36);
} else
{var statearr_32712_32797 = state_32707__$1;(statearr_32712_32797[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 2))
{var state_32707__$1 = state_32707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32707__$1,4,ch);
} else
{if((state_val_32708 === 34))
{var state_32707__$1 = state_32707;var statearr_32713_32798 = state_32707__$1;(statearr_32713_32798[2] = null);
(statearr_32713_32798[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 3))
{var inst_32705 = (state_32707[2]);var state_32707__$1 = state_32707;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32707__$1,inst_32705);
} else
{if((state_val_32708 === 35))
{var inst_32689 = (state_32707[2]);var state_32707__$1 = state_32707;var statearr_32714_32799 = state_32707__$1;(statearr_32714_32799[2] = inst_32689);
(statearr_32714_32799[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 4))
{var inst_32575 = (state_32707[7]);var inst_32575__$1 = (state_32707[2]);var inst_32576 = (inst_32575__$1 == null);var state_32707__$1 = (function (){var statearr_32715 = state_32707;(statearr_32715[7] = inst_32575__$1);
return statearr_32715;
})();if(cljs.core.truth_(inst_32576))
{var statearr_32716_32800 = state_32707__$1;(statearr_32716_32800[1] = 5);
} else
{var statearr_32717_32801 = state_32707__$1;(statearr_32717_32801[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 36))
{var inst_32664 = (state_32707[9]);var inst_32668 = cljs.core.chunk_first.call(null,inst_32664);var inst_32669 = cljs.core.chunk_rest.call(null,inst_32664);var inst_32670 = cljs.core.count.call(null,inst_32668);var inst_32643 = inst_32669;var inst_32644 = inst_32668;var inst_32645 = inst_32670;var inst_32646 = 0;var state_32707__$1 = (function (){var statearr_32718 = state_32707;(statearr_32718[10] = inst_32646);
(statearr_32718[11] = inst_32643);
(statearr_32718[12] = inst_32644);
(statearr_32718[13] = inst_32645);
return statearr_32718;
})();var statearr_32719_32802 = state_32707__$1;(statearr_32719_32802[2] = null);
(statearr_32719_32802[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 5))
{var inst_32582 = cljs.core.deref.call(null,cs);var inst_32583 = cljs.core.seq.call(null,inst_32582);var inst_32584 = inst_32583;var inst_32585 = null;var inst_32586 = 0;var inst_32587 = 0;var state_32707__$1 = (function (){var statearr_32720 = state_32707;(statearr_32720[14] = inst_32587);
(statearr_32720[15] = inst_32586);
(statearr_32720[16] = inst_32585);
(statearr_32720[17] = inst_32584);
return statearr_32720;
})();var statearr_32721_32803 = state_32707__$1;(statearr_32721_32803[2] = null);
(statearr_32721_32803[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 37))
{var inst_32664 = (state_32707[9]);var inst_32673 = cljs.core.first.call(null,inst_32664);var state_32707__$1 = (function (){var statearr_32722 = state_32707;(statearr_32722[18] = inst_32673);
return statearr_32722;
})();var statearr_32723_32804 = state_32707__$1;(statearr_32723_32804[2] = null);
(statearr_32723_32804[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 6))
{var inst_32635 = (state_32707[19]);var inst_32634 = cljs.core.deref.call(null,cs);var inst_32635__$1 = cljs.core.keys.call(null,inst_32634);var inst_32636 = cljs.core.count.call(null,inst_32635__$1);var inst_32637 = cljs.core.reset_BANG_.call(null,dctr,inst_32636);var inst_32642 = cljs.core.seq.call(null,inst_32635__$1);var inst_32643 = inst_32642;var inst_32644 = null;var inst_32645 = 0;var inst_32646 = 0;var state_32707__$1 = (function (){var statearr_32724 = state_32707;(statearr_32724[19] = inst_32635__$1);
(statearr_32724[20] = inst_32637);
(statearr_32724[10] = inst_32646);
(statearr_32724[11] = inst_32643);
(statearr_32724[12] = inst_32644);
(statearr_32724[13] = inst_32645);
return statearr_32724;
})();var statearr_32725_32805 = state_32707__$1;(statearr_32725_32805[2] = null);
(statearr_32725_32805[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 38))
{var inst_32686 = (state_32707[2]);var state_32707__$1 = state_32707;var statearr_32726_32806 = state_32707__$1;(statearr_32726_32806[2] = inst_32686);
(statearr_32726_32806[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 7))
{var inst_32703 = (state_32707[2]);var state_32707__$1 = state_32707;var statearr_32727_32807 = state_32707__$1;(statearr_32727_32807[2] = inst_32703);
(statearr_32727_32807[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 39))
{var inst_32664 = (state_32707[9]);var inst_32682 = (state_32707[2]);var inst_32683 = cljs.core.next.call(null,inst_32664);var inst_32643 = inst_32683;var inst_32644 = null;var inst_32645 = 0;var inst_32646 = 0;var state_32707__$1 = (function (){var statearr_32728 = state_32707;(statearr_32728[10] = inst_32646);
(statearr_32728[11] = inst_32643);
(statearr_32728[12] = inst_32644);
(statearr_32728[13] = inst_32645);
(statearr_32728[21] = inst_32682);
return statearr_32728;
})();var statearr_32729_32808 = state_32707__$1;(statearr_32729_32808[2] = null);
(statearr_32729_32808[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 8))
{var inst_32587 = (state_32707[14]);var inst_32586 = (state_32707[15]);var inst_32589 = (inst_32587 < inst_32586);var inst_32590 = inst_32589;var state_32707__$1 = state_32707;if(cljs.core.truth_(inst_32590))
{var statearr_32730_32809 = state_32707__$1;(statearr_32730_32809[1] = 10);
} else
{var statearr_32731_32810 = state_32707__$1;(statearr_32731_32810[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 40))
{var inst_32673 = (state_32707[18]);var inst_32674 = (state_32707[2]);var inst_32675 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32676 = cljs.core.async.untap_STAR_.call(null,m,inst_32673);var state_32707__$1 = (function (){var statearr_32732 = state_32707;(statearr_32732[22] = inst_32674);
(statearr_32732[23] = inst_32675);
return statearr_32732;
})();var statearr_32733_32811 = state_32707__$1;(statearr_32733_32811[2] = inst_32676);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32707__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 9))
{var inst_32632 = (state_32707[2]);var state_32707__$1 = state_32707;var statearr_32734_32812 = state_32707__$1;(statearr_32734_32812[2] = inst_32632);
(statearr_32734_32812[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 41))
{var inst_32673 = (state_32707[18]);var inst_32575 = (state_32707[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32707,40,Object,null,39);var inst_32680 = cljs.core.async.put_BANG_.call(null,inst_32673,inst_32575,done);var state_32707__$1 = state_32707;var statearr_32735_32813 = state_32707__$1;(statearr_32735_32813[2] = inst_32680);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32707__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 10))
{var inst_32587 = (state_32707[14]);var inst_32585 = (state_32707[16]);var inst_32593 = cljs.core._nth.call(null,inst_32585,inst_32587);var inst_32594 = cljs.core.nth.call(null,inst_32593,0,null);var inst_32595 = cljs.core.nth.call(null,inst_32593,1,null);var state_32707__$1 = (function (){var statearr_32736 = state_32707;(statearr_32736[24] = inst_32594);
return statearr_32736;
})();if(cljs.core.truth_(inst_32595))
{var statearr_32737_32814 = state_32707__$1;(statearr_32737_32814[1] = 13);
} else
{var statearr_32738_32815 = state_32707__$1;(statearr_32738_32815[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 42))
{var state_32707__$1 = state_32707;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32707__$1,45,dchan);
} else
{if((state_val_32708 === 11))
{var inst_32604 = (state_32707[25]);var inst_32584 = (state_32707[17]);var inst_32604__$1 = cljs.core.seq.call(null,inst_32584);var state_32707__$1 = (function (){var statearr_32739 = state_32707;(statearr_32739[25] = inst_32604__$1);
return statearr_32739;
})();if(inst_32604__$1)
{var statearr_32740_32816 = state_32707__$1;(statearr_32740_32816[1] = 16);
} else
{var statearr_32741_32817 = state_32707__$1;(statearr_32741_32817[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 43))
{var state_32707__$1 = state_32707;var statearr_32742_32818 = state_32707__$1;(statearr_32742_32818[2] = null);
(statearr_32742_32818[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 12))
{var inst_32630 = (state_32707[2]);var state_32707__$1 = state_32707;var statearr_32743_32819 = state_32707__$1;(statearr_32743_32819[2] = inst_32630);
(statearr_32743_32819[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 44))
{var inst_32700 = (state_32707[2]);var state_32707__$1 = (function (){var statearr_32744 = state_32707;(statearr_32744[26] = inst_32700);
return statearr_32744;
})();var statearr_32745_32820 = state_32707__$1;(statearr_32745_32820[2] = null);
(statearr_32745_32820[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 13))
{var inst_32594 = (state_32707[24]);var inst_32597 = cljs.core.async.close_BANG_.call(null,inst_32594);var state_32707__$1 = state_32707;var statearr_32746_32821 = state_32707__$1;(statearr_32746_32821[2] = inst_32597);
(statearr_32746_32821[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 45))
{var inst_32697 = (state_32707[2]);var state_32707__$1 = state_32707;var statearr_32750_32822 = state_32707__$1;(statearr_32750_32822[2] = inst_32697);
(statearr_32750_32822[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 14))
{var state_32707__$1 = state_32707;var statearr_32751_32823 = state_32707__$1;(statearr_32751_32823[2] = null);
(statearr_32751_32823[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 15))
{var inst_32587 = (state_32707[14]);var inst_32586 = (state_32707[15]);var inst_32585 = (state_32707[16]);var inst_32584 = (state_32707[17]);var inst_32600 = (state_32707[2]);var inst_32601 = (inst_32587 + 1);var tmp32747 = inst_32586;var tmp32748 = inst_32585;var tmp32749 = inst_32584;var inst_32584__$1 = tmp32749;var inst_32585__$1 = tmp32748;var inst_32586__$1 = tmp32747;var inst_32587__$1 = inst_32601;var state_32707__$1 = (function (){var statearr_32752 = state_32707;(statearr_32752[14] = inst_32587__$1);
(statearr_32752[15] = inst_32586__$1);
(statearr_32752[16] = inst_32585__$1);
(statearr_32752[17] = inst_32584__$1);
(statearr_32752[27] = inst_32600);
return statearr_32752;
})();var statearr_32753_32824 = state_32707__$1;(statearr_32753_32824[2] = null);
(statearr_32753_32824[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 16))
{var inst_32604 = (state_32707[25]);var inst_32606 = cljs.core.chunked_seq_QMARK_.call(null,inst_32604);var state_32707__$1 = state_32707;if(inst_32606)
{var statearr_32754_32825 = state_32707__$1;(statearr_32754_32825[1] = 19);
} else
{var statearr_32755_32826 = state_32707__$1;(statearr_32755_32826[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 17))
{var state_32707__$1 = state_32707;var statearr_32756_32827 = state_32707__$1;(statearr_32756_32827[2] = null);
(statearr_32756_32827[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 18))
{var inst_32628 = (state_32707[2]);var state_32707__$1 = state_32707;var statearr_32757_32828 = state_32707__$1;(statearr_32757_32828[2] = inst_32628);
(statearr_32757_32828[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 19))
{var inst_32604 = (state_32707[25]);var inst_32608 = cljs.core.chunk_first.call(null,inst_32604);var inst_32609 = cljs.core.chunk_rest.call(null,inst_32604);var inst_32610 = cljs.core.count.call(null,inst_32608);var inst_32584 = inst_32609;var inst_32585 = inst_32608;var inst_32586 = inst_32610;var inst_32587 = 0;var state_32707__$1 = (function (){var statearr_32758 = state_32707;(statearr_32758[14] = inst_32587);
(statearr_32758[15] = inst_32586);
(statearr_32758[16] = inst_32585);
(statearr_32758[17] = inst_32584);
return statearr_32758;
})();var statearr_32759_32829 = state_32707__$1;(statearr_32759_32829[2] = null);
(statearr_32759_32829[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 20))
{var inst_32604 = (state_32707[25]);var inst_32614 = cljs.core.first.call(null,inst_32604);var inst_32615 = cljs.core.nth.call(null,inst_32614,0,null);var inst_32616 = cljs.core.nth.call(null,inst_32614,1,null);var state_32707__$1 = (function (){var statearr_32760 = state_32707;(statearr_32760[28] = inst_32615);
return statearr_32760;
})();if(cljs.core.truth_(inst_32616))
{var statearr_32761_32830 = state_32707__$1;(statearr_32761_32830[1] = 22);
} else
{var statearr_32762_32831 = state_32707__$1;(statearr_32762_32831[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 21))
{var inst_32625 = (state_32707[2]);var state_32707__$1 = state_32707;var statearr_32763_32832 = state_32707__$1;(statearr_32763_32832[2] = inst_32625);
(statearr_32763_32832[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 22))
{var inst_32615 = (state_32707[28]);var inst_32618 = cljs.core.async.close_BANG_.call(null,inst_32615);var state_32707__$1 = state_32707;var statearr_32764_32833 = state_32707__$1;(statearr_32764_32833[2] = inst_32618);
(statearr_32764_32833[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 23))
{var state_32707__$1 = state_32707;var statearr_32765_32834 = state_32707__$1;(statearr_32765_32834[2] = null);
(statearr_32765_32834[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 24))
{var inst_32604 = (state_32707[25]);var inst_32621 = (state_32707[2]);var inst_32622 = cljs.core.next.call(null,inst_32604);var inst_32584 = inst_32622;var inst_32585 = null;var inst_32586 = 0;var inst_32587 = 0;var state_32707__$1 = (function (){var statearr_32766 = state_32707;(statearr_32766[14] = inst_32587);
(statearr_32766[29] = inst_32621);
(statearr_32766[15] = inst_32586);
(statearr_32766[16] = inst_32585);
(statearr_32766[17] = inst_32584);
return statearr_32766;
})();var statearr_32767_32835 = state_32707__$1;(statearr_32767_32835[2] = null);
(statearr_32767_32835[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 25))
{var inst_32646 = (state_32707[10]);var inst_32645 = (state_32707[13]);var inst_32648 = (inst_32646 < inst_32645);var inst_32649 = inst_32648;var state_32707__$1 = state_32707;if(cljs.core.truth_(inst_32649))
{var statearr_32768_32836 = state_32707__$1;(statearr_32768_32836[1] = 27);
} else
{var statearr_32769_32837 = state_32707__$1;(statearr_32769_32837[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 26))
{var inst_32635 = (state_32707[19]);var inst_32693 = (state_32707[2]);var inst_32694 = cljs.core.seq.call(null,inst_32635);var state_32707__$1 = (function (){var statearr_32770 = state_32707;(statearr_32770[30] = inst_32693);
return statearr_32770;
})();if(inst_32694)
{var statearr_32771_32838 = state_32707__$1;(statearr_32771_32838[1] = 42);
} else
{var statearr_32772_32839 = state_32707__$1;(statearr_32772_32839[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 27))
{var inst_32646 = (state_32707[10]);var inst_32644 = (state_32707[12]);var inst_32651 = cljs.core._nth.call(null,inst_32644,inst_32646);var state_32707__$1 = (function (){var statearr_32773 = state_32707;(statearr_32773[8] = inst_32651);
return statearr_32773;
})();var statearr_32774_32840 = state_32707__$1;(statearr_32774_32840[2] = null);
(statearr_32774_32840[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 28))
{var inst_32664 = (state_32707[9]);var inst_32643 = (state_32707[11]);var inst_32664__$1 = cljs.core.seq.call(null,inst_32643);var state_32707__$1 = (function (){var statearr_32778 = state_32707;(statearr_32778[9] = inst_32664__$1);
return statearr_32778;
})();if(inst_32664__$1)
{var statearr_32779_32841 = state_32707__$1;(statearr_32779_32841[1] = 33);
} else
{var statearr_32780_32842 = state_32707__$1;(statearr_32780_32842[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 29))
{var inst_32691 = (state_32707[2]);var state_32707__$1 = state_32707;var statearr_32781_32843 = state_32707__$1;(statearr_32781_32843[2] = inst_32691);
(statearr_32781_32843[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 30))
{var inst_32646 = (state_32707[10]);var inst_32643 = (state_32707[11]);var inst_32644 = (state_32707[12]);var inst_32645 = (state_32707[13]);var inst_32660 = (state_32707[2]);var inst_32661 = (inst_32646 + 1);var tmp32775 = inst_32643;var tmp32776 = inst_32644;var tmp32777 = inst_32645;var inst_32643__$1 = tmp32775;var inst_32644__$1 = tmp32776;var inst_32645__$1 = tmp32777;var inst_32646__$1 = inst_32661;var state_32707__$1 = (function (){var statearr_32782 = state_32707;(statearr_32782[10] = inst_32646__$1);
(statearr_32782[31] = inst_32660);
(statearr_32782[11] = inst_32643__$1);
(statearr_32782[12] = inst_32644__$1);
(statearr_32782[13] = inst_32645__$1);
return statearr_32782;
})();var statearr_32783_32844 = state_32707__$1;(statearr_32783_32844[2] = null);
(statearr_32783_32844[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32708 === 31))
{var inst_32651 = (state_32707[8]);var inst_32652 = (state_32707[2]);var inst_32653 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32654 = cljs.core.async.untap_STAR_.call(null,m,inst_32651);var state_32707__$1 = (function (){var statearr_32784 = state_32707;(statearr_32784[32] = inst_32653);
(statearr_32784[33] = inst_32652);
return statearr_32784;
})();var statearr_32785_32845 = state_32707__$1;(statearr_32785_32845[2] = inst_32654);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32707__$1);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_32789 = (new Array(34));(statearr_32789[0] = state_machine__5792__auto__);
(statearr_32789[1] = 1);
return statearr_32789;
});
var state_machine__5792__auto____1 = (function (state_32707){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_32707);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e32790){if((e32790 instanceof Object))
{var ex__5795__auto__ = e32790;var statearr_32791_32846 = state_32707;(statearr_32791_32846[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32707);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32790;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32847 = state_32707;
state_32707 = G__32847;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_32707){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_32707);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_32792 = f__5862__auto__.call(null);(statearr_32792[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___32793);
return statearr_32792;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.Mix = (function (){var obj32849 = {};return obj32849;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t32959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32959 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta32960){
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
this.meta32960 = meta32960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32959.cljs$lang$type = true;
cljs.core.async.t32959.cljs$lang$ctorStr = "cljs.core.async/t32959";
cljs.core.async.t32959.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t32959");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32959.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32959.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32959.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32959.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32959.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32959.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32959.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32959.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32959.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32961){var self__ = this;
var _32961__$1 = this;return self__.meta32960;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32961,meta32960__$1){var self__ = this;
var _32961__$1 = this;return (new cljs.core.async.t32959(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta32960__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32959 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32959(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32960){return (new cljs.core.async.t32959(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32960));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32959(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5861__auto___33068 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_33026){var state_val_33027 = (state_33026[1]);if((state_val_33027 === 1))
{var inst_32965 = (state_33026[7]);var inst_32965__$1 = calc_state.call(null);var inst_32966 = cljs.core.seq_QMARK_.call(null,inst_32965__$1);var state_33026__$1 = (function (){var statearr_33028 = state_33026;(statearr_33028[7] = inst_32965__$1);
return statearr_33028;
})();if(inst_32966)
{var statearr_33029_33069 = state_33026__$1;(statearr_33029_33069[1] = 2);
} else
{var statearr_33030_33070 = state_33026__$1;(statearr_33030_33070[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 2))
{var inst_32965 = (state_33026[7]);var inst_32968 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32965);var state_33026__$1 = state_33026;var statearr_33031_33071 = state_33026__$1;(statearr_33031_33071[2] = inst_32968);
(statearr_33031_33071[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 3))
{var inst_32965 = (state_33026[7]);var state_33026__$1 = state_33026;var statearr_33032_33072 = state_33026__$1;(statearr_33032_33072[2] = inst_32965);
(statearr_33032_33072[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 4))
{var inst_32965 = (state_33026[7]);var inst_32971 = (state_33026[2]);var inst_32972 = cljs.core.get.call(null,inst_32971,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32973 = cljs.core.get.call(null,inst_32971,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32974 = cljs.core.get.call(null,inst_32971,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_32975 = inst_32965;var state_33026__$1 = (function (){var statearr_33033 = state_33026;(statearr_33033[8] = inst_32972);
(statearr_33033[9] = inst_32973);
(statearr_33033[10] = inst_32974);
(statearr_33033[11] = inst_32975);
return statearr_33033;
})();var statearr_33034_33073 = state_33026__$1;(statearr_33034_33073[2] = null);
(statearr_33034_33073[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 5))
{var inst_32975 = (state_33026[11]);var inst_32978 = cljs.core.seq_QMARK_.call(null,inst_32975);var state_33026__$1 = state_33026;if(inst_32978)
{var statearr_33035_33074 = state_33026__$1;(statearr_33035_33074[1] = 7);
} else
{var statearr_33036_33075 = state_33026__$1;(statearr_33036_33075[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 6))
{var inst_33024 = (state_33026[2]);var state_33026__$1 = state_33026;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33026__$1,inst_33024);
} else
{if((state_val_33027 === 7))
{var inst_32975 = (state_33026[11]);var inst_32980 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32975);var state_33026__$1 = state_33026;var statearr_33037_33076 = state_33026__$1;(statearr_33037_33076[2] = inst_32980);
(statearr_33037_33076[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 8))
{var inst_32975 = (state_33026[11]);var state_33026__$1 = state_33026;var statearr_33038_33077 = state_33026__$1;(statearr_33038_33077[2] = inst_32975);
(statearr_33038_33077[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 9))
{var inst_32983 = (state_33026[12]);var inst_32983__$1 = (state_33026[2]);var inst_32984 = cljs.core.get.call(null,inst_32983__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32985 = cljs.core.get.call(null,inst_32983__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32986 = cljs.core.get.call(null,inst_32983__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33026__$1 = (function (){var statearr_33039 = state_33026;(statearr_33039[12] = inst_32983__$1);
(statearr_33039[13] = inst_32985);
(statearr_33039[14] = inst_32986);
return statearr_33039;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33026__$1,10,inst_32984);
} else
{if((state_val_33027 === 10))
{var inst_32991 = (state_33026[15]);var inst_32990 = (state_33026[16]);var inst_32989 = (state_33026[2]);var inst_32990__$1 = cljs.core.nth.call(null,inst_32989,0,null);var inst_32991__$1 = cljs.core.nth.call(null,inst_32989,1,null);var inst_32992 = (inst_32990__$1 == null);var inst_32993 = cljs.core._EQ_.call(null,inst_32991__$1,change);var inst_32994 = (inst_32992) || (inst_32993);var state_33026__$1 = (function (){var statearr_33040 = state_33026;(statearr_33040[15] = inst_32991__$1);
(statearr_33040[16] = inst_32990__$1);
return statearr_33040;
})();if(cljs.core.truth_(inst_32994))
{var statearr_33041_33078 = state_33026__$1;(statearr_33041_33078[1] = 11);
} else
{var statearr_33042_33079 = state_33026__$1;(statearr_33042_33079[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 11))
{var inst_32990 = (state_33026[16]);var inst_32996 = (inst_32990 == null);var state_33026__$1 = state_33026;if(cljs.core.truth_(inst_32996))
{var statearr_33043_33080 = state_33026__$1;(statearr_33043_33080[1] = 14);
} else
{var statearr_33044_33081 = state_33026__$1;(statearr_33044_33081[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 12))
{var inst_32991 = (state_33026[15]);var inst_32986 = (state_33026[14]);var inst_33005 = (state_33026[17]);var inst_33005__$1 = inst_32986.call(null,inst_32991);var state_33026__$1 = (function (){var statearr_33045 = state_33026;(statearr_33045[17] = inst_33005__$1);
return statearr_33045;
})();if(cljs.core.truth_(inst_33005__$1))
{var statearr_33046_33082 = state_33026__$1;(statearr_33046_33082[1] = 17);
} else
{var statearr_33047_33083 = state_33026__$1;(statearr_33047_33083[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 13))
{var inst_33022 = (state_33026[2]);var state_33026__$1 = state_33026;var statearr_33048_33084 = state_33026__$1;(statearr_33048_33084[2] = inst_33022);
(statearr_33048_33084[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 14))
{var inst_32991 = (state_33026[15]);var inst_32998 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32991);var state_33026__$1 = state_33026;var statearr_33049_33085 = state_33026__$1;(statearr_33049_33085[2] = inst_32998);
(statearr_33049_33085[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 15))
{var state_33026__$1 = state_33026;var statearr_33050_33086 = state_33026__$1;(statearr_33050_33086[2] = null);
(statearr_33050_33086[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 16))
{var inst_33001 = (state_33026[2]);var inst_33002 = calc_state.call(null);var inst_32975 = inst_33002;var state_33026__$1 = (function (){var statearr_33051 = state_33026;(statearr_33051[18] = inst_33001);
(statearr_33051[11] = inst_32975);
return statearr_33051;
})();var statearr_33052_33087 = state_33026__$1;(statearr_33052_33087[2] = null);
(statearr_33052_33087[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 17))
{var inst_33005 = (state_33026[17]);var state_33026__$1 = state_33026;var statearr_33053_33088 = state_33026__$1;(statearr_33053_33088[2] = inst_33005);
(statearr_33053_33088[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 18))
{var inst_32985 = (state_33026[13]);var inst_32991 = (state_33026[15]);var inst_32986 = (state_33026[14]);var inst_33008 = cljs.core.empty_QMARK_.call(null,inst_32986);var inst_33009 = inst_32985.call(null,inst_32991);var inst_33010 = cljs.core.not.call(null,inst_33009);var inst_33011 = (inst_33008) && (inst_33010);var state_33026__$1 = state_33026;var statearr_33054_33089 = state_33026__$1;(statearr_33054_33089[2] = inst_33011);
(statearr_33054_33089[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 19))
{var inst_33013 = (state_33026[2]);var state_33026__$1 = state_33026;if(cljs.core.truth_(inst_33013))
{var statearr_33055_33090 = state_33026__$1;(statearr_33055_33090[1] = 20);
} else
{var statearr_33056_33091 = state_33026__$1;(statearr_33056_33091[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 20))
{var inst_32990 = (state_33026[16]);var state_33026__$1 = state_33026;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33026__$1,23,out,inst_32990);
} else
{if((state_val_33027 === 21))
{var state_33026__$1 = state_33026;var statearr_33057_33092 = state_33026__$1;(statearr_33057_33092[2] = null);
(statearr_33057_33092[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 22))
{var inst_32983 = (state_33026[12]);var inst_33019 = (state_33026[2]);var inst_32975 = inst_32983;var state_33026__$1 = (function (){var statearr_33058 = state_33026;(statearr_33058[11] = inst_32975);
(statearr_33058[19] = inst_33019);
return statearr_33058;
})();var statearr_33059_33093 = state_33026__$1;(statearr_33059_33093[2] = null);
(statearr_33059_33093[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33027 === 23))
{var inst_33016 = (state_33026[2]);var state_33026__$1 = state_33026;var statearr_33060_33094 = state_33026__$1;(statearr_33060_33094[2] = inst_33016);
(statearr_33060_33094[1] = 22);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_33064 = (new Array(20));(statearr_33064[0] = state_machine__5792__auto__);
(statearr_33064[1] = 1);
return statearr_33064;
});
var state_machine__5792__auto____1 = (function (state_33026){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_33026);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e33065){if((e33065 instanceof Object))
{var ex__5795__auto__ = e33065;var statearr_33066_33095 = state_33026;(statearr_33066_33095[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33026);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33065;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33096 = state_33026;
state_33026 = G__33096;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_33026){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_33026);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_33067 = f__5862__auto__.call(null);(statearr_33067[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___33068);
return statearr_33067;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
cljs.core.async.Pub = (function (){var obj33098 = {};return obj33098;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
return (function (topic){var or__3291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3291__auto__,mults){
return (function (p1__33099_SHARP_){if(cljs.core.truth_(p1__33099_SHARP_.call(null,topic)))
{return p1__33099_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33099_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33224 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33224 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33225){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33225 = meta33225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33224.cljs$lang$type = true;
cljs.core.async.t33224.cljs$lang$ctorStr = "cljs.core.async/t33224";
cljs.core.async.t33224.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t33224");
});})(mults,ensure_mult))
;
cljs.core.async.t33224.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33224.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33224.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33224.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33224.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33224.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33224.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33226){var self__ = this;
var _33226__$1 = this;return self__.meta33225;
});})(mults,ensure_mult))
;
cljs.core.async.t33224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33226,meta33225__$1){var self__ = this;
var _33226__$1 = this;return (new cljs.core.async.t33224(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33225__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33224 = ((function (mults,ensure_mult){
return (function __GT_t33224(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33225){return (new cljs.core.async.t33224(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33225));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33224(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5861__auto___33348 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_33300){var state_val_33301 = (state_33300[1]);if((state_val_33301 === 1))
{var state_33300__$1 = state_33300;var statearr_33302_33349 = state_33300__$1;(statearr_33302_33349[2] = null);
(statearr_33302_33349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 2))
{var state_33300__$1 = state_33300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33300__$1,4,ch);
} else
{if((state_val_33301 === 3))
{var inst_33298 = (state_33300[2]);var state_33300__$1 = state_33300;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33300__$1,inst_33298);
} else
{if((state_val_33301 === 4))
{var inst_33229 = (state_33300[7]);var inst_33229__$1 = (state_33300[2]);var inst_33230 = (inst_33229__$1 == null);var state_33300__$1 = (function (){var statearr_33303 = state_33300;(statearr_33303[7] = inst_33229__$1);
return statearr_33303;
})();if(cljs.core.truth_(inst_33230))
{var statearr_33304_33350 = state_33300__$1;(statearr_33304_33350[1] = 5);
} else
{var statearr_33305_33351 = state_33300__$1;(statearr_33305_33351[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 5))
{var inst_33236 = cljs.core.deref.call(null,mults);var inst_33237 = cljs.core.vals.call(null,inst_33236);var inst_33238 = cljs.core.seq.call(null,inst_33237);var inst_33239 = inst_33238;var inst_33240 = null;var inst_33241 = 0;var inst_33242 = 0;var state_33300__$1 = (function (){var statearr_33306 = state_33300;(statearr_33306[8] = inst_33239);
(statearr_33306[9] = inst_33241);
(statearr_33306[10] = inst_33242);
(statearr_33306[11] = inst_33240);
return statearr_33306;
})();var statearr_33307_33352 = state_33300__$1;(statearr_33307_33352[2] = null);
(statearr_33307_33352[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 6))
{var inst_33279 = (state_33300[12]);var inst_33277 = (state_33300[13]);var inst_33229 = (state_33300[7]);var inst_33277__$1 = topic_fn.call(null,inst_33229);var inst_33278 = cljs.core.deref.call(null,mults);var inst_33279__$1 = cljs.core.get.call(null,inst_33278,inst_33277__$1);var state_33300__$1 = (function (){var statearr_33308 = state_33300;(statearr_33308[12] = inst_33279__$1);
(statearr_33308[13] = inst_33277__$1);
return statearr_33308;
})();if(cljs.core.truth_(inst_33279__$1))
{var statearr_33309_33353 = state_33300__$1;(statearr_33309_33353[1] = 19);
} else
{var statearr_33310_33354 = state_33300__$1;(statearr_33310_33354[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 7))
{var inst_33296 = (state_33300[2]);var state_33300__$1 = state_33300;var statearr_33311_33355 = state_33300__$1;(statearr_33311_33355[2] = inst_33296);
(statearr_33311_33355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 8))
{var inst_33241 = (state_33300[9]);var inst_33242 = (state_33300[10]);var inst_33244 = (inst_33242 < inst_33241);var inst_33245 = inst_33244;var state_33300__$1 = state_33300;if(cljs.core.truth_(inst_33245))
{var statearr_33315_33356 = state_33300__$1;(statearr_33315_33356[1] = 10);
} else
{var statearr_33316_33357 = state_33300__$1;(statearr_33316_33357[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 9))
{var inst_33275 = (state_33300[2]);var state_33300__$1 = state_33300;var statearr_33317_33358 = state_33300__$1;(statearr_33317_33358[2] = inst_33275);
(statearr_33317_33358[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 10))
{var inst_33239 = (state_33300[8]);var inst_33241 = (state_33300[9]);var inst_33242 = (state_33300[10]);var inst_33240 = (state_33300[11]);var inst_33247 = cljs.core._nth.call(null,inst_33240,inst_33242);var inst_33248 = cljs.core.async.muxch_STAR_.call(null,inst_33247);var inst_33249 = cljs.core.async.close_BANG_.call(null,inst_33248);var inst_33250 = (inst_33242 + 1);var tmp33312 = inst_33239;var tmp33313 = inst_33241;var tmp33314 = inst_33240;var inst_33239__$1 = tmp33312;var inst_33240__$1 = tmp33314;var inst_33241__$1 = tmp33313;var inst_33242__$1 = inst_33250;var state_33300__$1 = (function (){var statearr_33318 = state_33300;(statearr_33318[8] = inst_33239__$1);
(statearr_33318[9] = inst_33241__$1);
(statearr_33318[10] = inst_33242__$1);
(statearr_33318[11] = inst_33240__$1);
(statearr_33318[14] = inst_33249);
return statearr_33318;
})();var statearr_33319_33359 = state_33300__$1;(statearr_33319_33359[2] = null);
(statearr_33319_33359[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 11))
{var inst_33239 = (state_33300[8]);var inst_33253 = (state_33300[15]);var inst_33253__$1 = cljs.core.seq.call(null,inst_33239);var state_33300__$1 = (function (){var statearr_33320 = state_33300;(statearr_33320[15] = inst_33253__$1);
return statearr_33320;
})();if(inst_33253__$1)
{var statearr_33321_33360 = state_33300__$1;(statearr_33321_33360[1] = 13);
} else
{var statearr_33322_33361 = state_33300__$1;(statearr_33322_33361[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 12))
{var inst_33273 = (state_33300[2]);var state_33300__$1 = state_33300;var statearr_33323_33362 = state_33300__$1;(statearr_33323_33362[2] = inst_33273);
(statearr_33323_33362[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 13))
{var inst_33253 = (state_33300[15]);var inst_33255 = cljs.core.chunked_seq_QMARK_.call(null,inst_33253);var state_33300__$1 = state_33300;if(inst_33255)
{var statearr_33324_33363 = state_33300__$1;(statearr_33324_33363[1] = 16);
} else
{var statearr_33325_33364 = state_33300__$1;(statearr_33325_33364[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 14))
{var state_33300__$1 = state_33300;var statearr_33326_33365 = state_33300__$1;(statearr_33326_33365[2] = null);
(statearr_33326_33365[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 15))
{var inst_33271 = (state_33300[2]);var state_33300__$1 = state_33300;var statearr_33327_33366 = state_33300__$1;(statearr_33327_33366[2] = inst_33271);
(statearr_33327_33366[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 16))
{var inst_33253 = (state_33300[15]);var inst_33257 = cljs.core.chunk_first.call(null,inst_33253);var inst_33258 = cljs.core.chunk_rest.call(null,inst_33253);var inst_33259 = cljs.core.count.call(null,inst_33257);var inst_33239 = inst_33258;var inst_33240 = inst_33257;var inst_33241 = inst_33259;var inst_33242 = 0;var state_33300__$1 = (function (){var statearr_33328 = state_33300;(statearr_33328[8] = inst_33239);
(statearr_33328[9] = inst_33241);
(statearr_33328[10] = inst_33242);
(statearr_33328[11] = inst_33240);
return statearr_33328;
})();var statearr_33329_33367 = state_33300__$1;(statearr_33329_33367[2] = null);
(statearr_33329_33367[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 17))
{var inst_33253 = (state_33300[15]);var inst_33262 = cljs.core.first.call(null,inst_33253);var inst_33263 = cljs.core.async.muxch_STAR_.call(null,inst_33262);var inst_33264 = cljs.core.async.close_BANG_.call(null,inst_33263);var inst_33265 = cljs.core.next.call(null,inst_33253);var inst_33239 = inst_33265;var inst_33240 = null;var inst_33241 = 0;var inst_33242 = 0;var state_33300__$1 = (function (){var statearr_33330 = state_33300;(statearr_33330[8] = inst_33239);
(statearr_33330[9] = inst_33241);
(statearr_33330[10] = inst_33242);
(statearr_33330[11] = inst_33240);
(statearr_33330[16] = inst_33264);
return statearr_33330;
})();var statearr_33331_33368 = state_33300__$1;(statearr_33331_33368[2] = null);
(statearr_33331_33368[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 18))
{var inst_33268 = (state_33300[2]);var state_33300__$1 = state_33300;var statearr_33332_33369 = state_33300__$1;(statearr_33332_33369[2] = inst_33268);
(statearr_33332_33369[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 19))
{var state_33300__$1 = state_33300;var statearr_33333_33370 = state_33300__$1;(statearr_33333_33370[2] = null);
(statearr_33333_33370[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 20))
{var state_33300__$1 = state_33300;var statearr_33334_33371 = state_33300__$1;(statearr_33334_33371[2] = null);
(statearr_33334_33371[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 21))
{var inst_33293 = (state_33300[2]);var state_33300__$1 = (function (){var statearr_33335 = state_33300;(statearr_33335[17] = inst_33293);
return statearr_33335;
})();var statearr_33336_33372 = state_33300__$1;(statearr_33336_33372[2] = null);
(statearr_33336_33372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 22))
{var inst_33290 = (state_33300[2]);var state_33300__$1 = state_33300;var statearr_33337_33373 = state_33300__$1;(statearr_33337_33373[2] = inst_33290);
(statearr_33337_33373[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 23))
{var inst_33277 = (state_33300[13]);var inst_33281 = (state_33300[2]);var inst_33282 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33277);var state_33300__$1 = (function (){var statearr_33338 = state_33300;(statearr_33338[18] = inst_33281);
return statearr_33338;
})();var statearr_33339_33374 = state_33300__$1;(statearr_33339_33374[2] = inst_33282);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33300__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33301 === 24))
{var inst_33279 = (state_33300[12]);var inst_33229 = (state_33300[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33300,23,Object,null,22);var inst_33286 = cljs.core.async.muxch_STAR_.call(null,inst_33279);var state_33300__$1 = state_33300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33300__$1,25,inst_33286,inst_33229);
} else
{if((state_val_33301 === 25))
{var inst_33288 = (state_33300[2]);var state_33300__$1 = state_33300;var statearr_33340_33375 = state_33300__$1;(statearr_33340_33375[2] = inst_33288);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33300__$1);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_33344 = (new Array(19));(statearr_33344[0] = state_machine__5792__auto__);
(statearr_33344[1] = 1);
return statearr_33344;
});
var state_machine__5792__auto____1 = (function (state_33300){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_33300);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e33345){if((e33345 instanceof Object))
{var ex__5795__auto__ = e33345;var statearr_33346_33376 = state_33300;(statearr_33346_33376[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33300);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33377 = state_33300;
state_33300 = G__33377;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_33300){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_33300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_33347 = f__5862__auto__.call(null);(statearr_33347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___33348);
return statearr_33347;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
,cljs.core.range.call(null,cnt));var c__5861__auto___33514 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_33484){var state_val_33485 = (state_33484[1]);if((state_val_33485 === 1))
{var state_33484__$1 = state_33484;var statearr_33486_33515 = state_33484__$1;(statearr_33486_33515[2] = null);
(statearr_33486_33515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 2))
{var inst_33447 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33448 = 0;var state_33484__$1 = (function (){var statearr_33487 = state_33484;(statearr_33487[7] = inst_33447);
(statearr_33487[8] = inst_33448);
return statearr_33487;
})();var statearr_33488_33516 = state_33484__$1;(statearr_33488_33516[2] = null);
(statearr_33488_33516[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 3))
{var inst_33482 = (state_33484[2]);var state_33484__$1 = state_33484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33484__$1,inst_33482);
} else
{if((state_val_33485 === 4))
{var inst_33448 = (state_33484[8]);var inst_33450 = (inst_33448 < cnt);var state_33484__$1 = state_33484;if(cljs.core.truth_(inst_33450))
{var statearr_33489_33517 = state_33484__$1;(statearr_33489_33517[1] = 6);
} else
{var statearr_33490_33518 = state_33484__$1;(statearr_33490_33518[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 5))
{var inst_33468 = (state_33484[2]);var state_33484__$1 = (function (){var statearr_33491 = state_33484;(statearr_33491[9] = inst_33468);
return statearr_33491;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33484__$1,12,dchan);
} else
{if((state_val_33485 === 6))
{var state_33484__$1 = state_33484;var statearr_33492_33519 = state_33484__$1;(statearr_33492_33519[2] = null);
(statearr_33492_33519[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 7))
{var state_33484__$1 = state_33484;var statearr_33493_33520 = state_33484__$1;(statearr_33493_33520[2] = null);
(statearr_33493_33520[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 8))
{var inst_33466 = (state_33484[2]);var state_33484__$1 = state_33484;var statearr_33494_33521 = state_33484__$1;(statearr_33494_33521[2] = inst_33466);
(statearr_33494_33521[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 9))
{var inst_33448 = (state_33484[8]);var inst_33461 = (state_33484[2]);var inst_33462 = (inst_33448 + 1);var inst_33448__$1 = inst_33462;var state_33484__$1 = (function (){var statearr_33495 = state_33484;(statearr_33495[10] = inst_33461);
(statearr_33495[8] = inst_33448__$1);
return statearr_33495;
})();var statearr_33496_33522 = state_33484__$1;(statearr_33496_33522[2] = null);
(statearr_33496_33522[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 10))
{var inst_33452 = (state_33484[2]);var inst_33453 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33484__$1 = (function (){var statearr_33497 = state_33484;(statearr_33497[11] = inst_33452);
return statearr_33497;
})();var statearr_33498_33523 = state_33484__$1;(statearr_33498_33523[2] = inst_33453);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33484__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 11))
{var inst_33448 = (state_33484[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33484,10,Object,null,9);var inst_33457 = chs__$1.call(null,inst_33448);var inst_33458 = done.call(null,inst_33448);var inst_33459 = cljs.core.async.take_BANG_.call(null,inst_33457,inst_33458);var state_33484__$1 = state_33484;var statearr_33499_33524 = state_33484__$1;(statearr_33499_33524[2] = inst_33459);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33484__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 12))
{var inst_33470 = (state_33484[12]);var inst_33470__$1 = (state_33484[2]);var inst_33471 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33470__$1);var state_33484__$1 = (function (){var statearr_33500 = state_33484;(statearr_33500[12] = inst_33470__$1);
return statearr_33500;
})();if(cljs.core.truth_(inst_33471))
{var statearr_33501_33525 = state_33484__$1;(statearr_33501_33525[1] = 13);
} else
{var statearr_33502_33526 = state_33484__$1;(statearr_33502_33526[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 13))
{var inst_33473 = cljs.core.async.close_BANG_.call(null,out);var state_33484__$1 = state_33484;var statearr_33503_33527 = state_33484__$1;(statearr_33503_33527[2] = inst_33473);
(statearr_33503_33527[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 14))
{var inst_33470 = (state_33484[12]);var inst_33475 = cljs.core.apply.call(null,f,inst_33470);var state_33484__$1 = state_33484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33484__$1,16,out,inst_33475);
} else
{if((state_val_33485 === 15))
{var inst_33480 = (state_33484[2]);var state_33484__$1 = state_33484;var statearr_33504_33528 = state_33484__$1;(statearr_33504_33528[2] = inst_33480);
(statearr_33504_33528[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33485 === 16))
{var inst_33477 = (state_33484[2]);var state_33484__$1 = (function (){var statearr_33505 = state_33484;(statearr_33505[13] = inst_33477);
return statearr_33505;
})();var statearr_33506_33529 = state_33484__$1;(statearr_33506_33529[2] = null);
(statearr_33506_33529[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_33510 = (new Array(14));(statearr_33510[0] = state_machine__5792__auto__);
(statearr_33510[1] = 1);
return statearr_33510;
});
var state_machine__5792__auto____1 = (function (state_33484){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_33484);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e33511){if((e33511 instanceof Object))
{var ex__5795__auto__ = e33511;var statearr_33512_33530 = state_33484;(statearr_33512_33530[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33531 = state_33484;
state_33484 = G__33531;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_33484){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_33484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_33513 = f__5862__auto__.call(null);(statearr_33513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___33514);
return statearr_33513;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___33639 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_33615){var state_val_33616 = (state_33615[1]);if((state_val_33616 === 1))
{var inst_33586 = cljs.core.vec.call(null,chs);var inst_33587 = inst_33586;var state_33615__$1 = (function (){var statearr_33617 = state_33615;(statearr_33617[7] = inst_33587);
return statearr_33617;
})();var statearr_33618_33640 = state_33615__$1;(statearr_33618_33640[2] = null);
(statearr_33618_33640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33616 === 2))
{var inst_33587 = (state_33615[7]);var inst_33589 = cljs.core.count.call(null,inst_33587);var inst_33590 = (inst_33589 > 0);var state_33615__$1 = state_33615;if(cljs.core.truth_(inst_33590))
{var statearr_33619_33641 = state_33615__$1;(statearr_33619_33641[1] = 4);
} else
{var statearr_33620_33642 = state_33615__$1;(statearr_33620_33642[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33616 === 3))
{var inst_33613 = (state_33615[2]);var state_33615__$1 = state_33615;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33615__$1,inst_33613);
} else
{if((state_val_33616 === 4))
{var inst_33587 = (state_33615[7]);var state_33615__$1 = state_33615;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33615__$1,7,inst_33587);
} else
{if((state_val_33616 === 5))
{var inst_33609 = cljs.core.async.close_BANG_.call(null,out);var state_33615__$1 = state_33615;var statearr_33621_33643 = state_33615__$1;(statearr_33621_33643[2] = inst_33609);
(statearr_33621_33643[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33616 === 6))
{var inst_33611 = (state_33615[2]);var state_33615__$1 = state_33615;var statearr_33622_33644 = state_33615__$1;(statearr_33622_33644[2] = inst_33611);
(statearr_33622_33644[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33616 === 7))
{var inst_33594 = (state_33615[8]);var inst_33595 = (state_33615[9]);var inst_33594__$1 = (state_33615[2]);var inst_33595__$1 = cljs.core.nth.call(null,inst_33594__$1,0,null);var inst_33596 = cljs.core.nth.call(null,inst_33594__$1,1,null);var inst_33597 = (inst_33595__$1 == null);var state_33615__$1 = (function (){var statearr_33623 = state_33615;(statearr_33623[8] = inst_33594__$1);
(statearr_33623[10] = inst_33596);
(statearr_33623[9] = inst_33595__$1);
return statearr_33623;
})();if(cljs.core.truth_(inst_33597))
{var statearr_33624_33645 = state_33615__$1;(statearr_33624_33645[1] = 8);
} else
{var statearr_33625_33646 = state_33615__$1;(statearr_33625_33646[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33616 === 8))
{var inst_33594 = (state_33615[8]);var inst_33596 = (state_33615[10]);var inst_33595 = (state_33615[9]);var inst_33587 = (state_33615[7]);var inst_33599 = (function (){var c = inst_33596;var v = inst_33595;var vec__33592 = inst_33594;var cs = inst_33587;return ((function (c,v,vec__33592,cs,inst_33594,inst_33596,inst_33595,inst_33587,state_val_33616){
return (function (p1__33532_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33532_SHARP_);
});
;})(c,v,vec__33592,cs,inst_33594,inst_33596,inst_33595,inst_33587,state_val_33616))
})();var inst_33600 = cljs.core.filterv.call(null,inst_33599,inst_33587);var inst_33587__$1 = inst_33600;var state_33615__$1 = (function (){var statearr_33626 = state_33615;(statearr_33626[7] = inst_33587__$1);
return statearr_33626;
})();var statearr_33627_33647 = state_33615__$1;(statearr_33627_33647[2] = null);
(statearr_33627_33647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33616 === 9))
{var inst_33595 = (state_33615[9]);var state_33615__$1 = state_33615;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33615__$1,11,out,inst_33595);
} else
{if((state_val_33616 === 10))
{var inst_33607 = (state_33615[2]);var state_33615__$1 = state_33615;var statearr_33629_33648 = state_33615__$1;(statearr_33629_33648[2] = inst_33607);
(statearr_33629_33648[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33616 === 11))
{var inst_33587 = (state_33615[7]);var inst_33604 = (state_33615[2]);var tmp33628 = inst_33587;var inst_33587__$1 = tmp33628;var state_33615__$1 = (function (){var statearr_33630 = state_33615;(statearr_33630[11] = inst_33604);
(statearr_33630[7] = inst_33587__$1);
return statearr_33630;
})();var statearr_33631_33649 = state_33615__$1;(statearr_33631_33649[2] = null);
(statearr_33631_33649[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_33635 = (new Array(12));(statearr_33635[0] = state_machine__5792__auto__);
(statearr_33635[1] = 1);
return statearr_33635;
});
var state_machine__5792__auto____1 = (function (state_33615){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_33615);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e33636){if((e33636 instanceof Object))
{var ex__5795__auto__ = e33636;var statearr_33637_33650 = state_33615;(statearr_33637_33650[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33615);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33651 = state_33615;
state_33615 = G__33651;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_33615){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_33615);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_33638 = f__5862__auto__.call(null);(statearr_33638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___33639);
return statearr_33638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___33744 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_33721){var state_val_33722 = (state_33721[1]);if((state_val_33722 === 1))
{var inst_33698 = 0;var state_33721__$1 = (function (){var statearr_33723 = state_33721;(statearr_33723[7] = inst_33698);
return statearr_33723;
})();var statearr_33724_33745 = state_33721__$1;(statearr_33724_33745[2] = null);
(statearr_33724_33745[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33722 === 2))
{var inst_33698 = (state_33721[7]);var inst_33700 = (inst_33698 < n);var state_33721__$1 = state_33721;if(cljs.core.truth_(inst_33700))
{var statearr_33725_33746 = state_33721__$1;(statearr_33725_33746[1] = 4);
} else
{var statearr_33726_33747 = state_33721__$1;(statearr_33726_33747[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33722 === 3))
{var inst_33718 = (state_33721[2]);var inst_33719 = cljs.core.async.close_BANG_.call(null,out);var state_33721__$1 = (function (){var statearr_33727 = state_33721;(statearr_33727[8] = inst_33718);
return statearr_33727;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33721__$1,inst_33719);
} else
{if((state_val_33722 === 4))
{var state_33721__$1 = state_33721;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33721__$1,7,ch);
} else
{if((state_val_33722 === 5))
{var state_33721__$1 = state_33721;var statearr_33728_33748 = state_33721__$1;(statearr_33728_33748[2] = null);
(statearr_33728_33748[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33722 === 6))
{var inst_33716 = (state_33721[2]);var state_33721__$1 = state_33721;var statearr_33729_33749 = state_33721__$1;(statearr_33729_33749[2] = inst_33716);
(statearr_33729_33749[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33722 === 7))
{var inst_33703 = (state_33721[9]);var inst_33703__$1 = (state_33721[2]);var inst_33704 = (inst_33703__$1 == null);var inst_33705 = cljs.core.not.call(null,inst_33704);var state_33721__$1 = (function (){var statearr_33730 = state_33721;(statearr_33730[9] = inst_33703__$1);
return statearr_33730;
})();if(inst_33705)
{var statearr_33731_33750 = state_33721__$1;(statearr_33731_33750[1] = 8);
} else
{var statearr_33732_33751 = state_33721__$1;(statearr_33732_33751[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33722 === 8))
{var inst_33703 = (state_33721[9]);var state_33721__$1 = state_33721;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33721__$1,11,out,inst_33703);
} else
{if((state_val_33722 === 9))
{var state_33721__$1 = state_33721;var statearr_33733_33752 = state_33721__$1;(statearr_33733_33752[2] = null);
(statearr_33733_33752[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33722 === 10))
{var inst_33713 = (state_33721[2]);var state_33721__$1 = state_33721;var statearr_33734_33753 = state_33721__$1;(statearr_33734_33753[2] = inst_33713);
(statearr_33734_33753[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33722 === 11))
{var inst_33698 = (state_33721[7]);var inst_33708 = (state_33721[2]);var inst_33709 = (inst_33698 + 1);var inst_33698__$1 = inst_33709;var state_33721__$1 = (function (){var statearr_33735 = state_33721;(statearr_33735[10] = inst_33708);
(statearr_33735[7] = inst_33698__$1);
return statearr_33735;
})();var statearr_33736_33754 = state_33721__$1;(statearr_33736_33754[2] = null);
(statearr_33736_33754[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_33740 = (new Array(11));(statearr_33740[0] = state_machine__5792__auto__);
(statearr_33740[1] = 1);
return statearr_33740;
});
var state_machine__5792__auto____1 = (function (state_33721){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_33721);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e33741){if((e33741 instanceof Object))
{var ex__5795__auto__ = e33741;var statearr_33742_33755 = state_33721;(statearr_33742_33755[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33721);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33741;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33756 = state_33721;
state_33721 = G__33756;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_33721){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_33721);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_33743 = f__5862__auto__.call(null);(statearr_33743[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___33744);
return statearr_33743;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___33853 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_33828){var state_val_33829 = (state_33828[1]);if((state_val_33829 === 1))
{var inst_33805 = null;var state_33828__$1 = (function (){var statearr_33830 = state_33828;(statearr_33830[7] = inst_33805);
return statearr_33830;
})();var statearr_33831_33854 = state_33828__$1;(statearr_33831_33854[2] = null);
(statearr_33831_33854[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33829 === 2))
{var state_33828__$1 = state_33828;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33828__$1,4,ch);
} else
{if((state_val_33829 === 3))
{var inst_33825 = (state_33828[2]);var inst_33826 = cljs.core.async.close_BANG_.call(null,out);var state_33828__$1 = (function (){var statearr_33832 = state_33828;(statearr_33832[8] = inst_33825);
return statearr_33832;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33828__$1,inst_33826);
} else
{if((state_val_33829 === 4))
{var inst_33808 = (state_33828[9]);var inst_33808__$1 = (state_33828[2]);var inst_33809 = (inst_33808__$1 == null);var inst_33810 = cljs.core.not.call(null,inst_33809);var state_33828__$1 = (function (){var statearr_33833 = state_33828;(statearr_33833[9] = inst_33808__$1);
return statearr_33833;
})();if(inst_33810)
{var statearr_33834_33855 = state_33828__$1;(statearr_33834_33855[1] = 5);
} else
{var statearr_33835_33856 = state_33828__$1;(statearr_33835_33856[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33829 === 5))
{var inst_33808 = (state_33828[9]);var inst_33805 = (state_33828[7]);var inst_33812 = cljs.core._EQ_.call(null,inst_33808,inst_33805);var state_33828__$1 = state_33828;if(inst_33812)
{var statearr_33836_33857 = state_33828__$1;(statearr_33836_33857[1] = 8);
} else
{var statearr_33837_33858 = state_33828__$1;(statearr_33837_33858[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33829 === 6))
{var state_33828__$1 = state_33828;var statearr_33839_33859 = state_33828__$1;(statearr_33839_33859[2] = null);
(statearr_33839_33859[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33829 === 7))
{var inst_33823 = (state_33828[2]);var state_33828__$1 = state_33828;var statearr_33840_33860 = state_33828__$1;(statearr_33840_33860[2] = inst_33823);
(statearr_33840_33860[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33829 === 8))
{var inst_33805 = (state_33828[7]);var tmp33838 = inst_33805;var inst_33805__$1 = tmp33838;var state_33828__$1 = (function (){var statearr_33841 = state_33828;(statearr_33841[7] = inst_33805__$1);
return statearr_33841;
})();var statearr_33842_33861 = state_33828__$1;(statearr_33842_33861[2] = null);
(statearr_33842_33861[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33829 === 9))
{var inst_33808 = (state_33828[9]);var state_33828__$1 = state_33828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33828__$1,11,out,inst_33808);
} else
{if((state_val_33829 === 10))
{var inst_33820 = (state_33828[2]);var state_33828__$1 = state_33828;var statearr_33843_33862 = state_33828__$1;(statearr_33843_33862[2] = inst_33820);
(statearr_33843_33862[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33829 === 11))
{var inst_33808 = (state_33828[9]);var inst_33817 = (state_33828[2]);var inst_33805 = inst_33808;var state_33828__$1 = (function (){var statearr_33844 = state_33828;(statearr_33844[7] = inst_33805);
(statearr_33844[10] = inst_33817);
return statearr_33844;
})();var statearr_33845_33863 = state_33828__$1;(statearr_33845_33863[2] = null);
(statearr_33845_33863[1] = 2);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_33849 = (new Array(11));(statearr_33849[0] = state_machine__5792__auto__);
(statearr_33849[1] = 1);
return statearr_33849;
});
var state_machine__5792__auto____1 = (function (state_33828){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_33828);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e33850){if((e33850 instanceof Object))
{var ex__5795__auto__ = e33850;var statearr_33851_33864 = state_33828;(statearr_33851_33864[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33850;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33865 = state_33828;
state_33828 = G__33865;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_33828){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_33828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_33852 = f__5862__auto__.call(null);(statearr_33852[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___33853);
return statearr_33852;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___34000 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_33970){var state_val_33971 = (state_33970[1]);if((state_val_33971 === 1))
{var inst_33933 = (new Array(n));var inst_33934 = inst_33933;var inst_33935 = 0;var state_33970__$1 = (function (){var statearr_33972 = state_33970;(statearr_33972[7] = inst_33934);
(statearr_33972[8] = inst_33935);
return statearr_33972;
})();var statearr_33973_34001 = state_33970__$1;(statearr_33973_34001[2] = null);
(statearr_33973_34001[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 2))
{var state_33970__$1 = state_33970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33970__$1,4,ch);
} else
{if((state_val_33971 === 3))
{var inst_33968 = (state_33970[2]);var state_33970__$1 = state_33970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33970__$1,inst_33968);
} else
{if((state_val_33971 === 4))
{var inst_33938 = (state_33970[9]);var inst_33938__$1 = (state_33970[2]);var inst_33939 = (inst_33938__$1 == null);var inst_33940 = cljs.core.not.call(null,inst_33939);var state_33970__$1 = (function (){var statearr_33974 = state_33970;(statearr_33974[9] = inst_33938__$1);
return statearr_33974;
})();if(inst_33940)
{var statearr_33975_34002 = state_33970__$1;(statearr_33975_34002[1] = 5);
} else
{var statearr_33976_34003 = state_33970__$1;(statearr_33976_34003[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 5))
{var inst_33934 = (state_33970[7]);var inst_33935 = (state_33970[8]);var inst_33943 = (state_33970[10]);var inst_33938 = (state_33970[9]);var inst_33942 = (inst_33934[inst_33935] = inst_33938);var inst_33943__$1 = (inst_33935 + 1);var inst_33944 = (inst_33943__$1 < n);var state_33970__$1 = (function (){var statearr_33977 = state_33970;(statearr_33977[11] = inst_33942);
(statearr_33977[10] = inst_33943__$1);
return statearr_33977;
})();if(cljs.core.truth_(inst_33944))
{var statearr_33978_34004 = state_33970__$1;(statearr_33978_34004[1] = 8);
} else
{var statearr_33979_34005 = state_33970__$1;(statearr_33979_34005[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 6))
{var inst_33935 = (state_33970[8]);var inst_33956 = (inst_33935 > 0);var state_33970__$1 = state_33970;if(cljs.core.truth_(inst_33956))
{var statearr_33981_34006 = state_33970__$1;(statearr_33981_34006[1] = 12);
} else
{var statearr_33982_34007 = state_33970__$1;(statearr_33982_34007[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 7))
{var inst_33966 = (state_33970[2]);var state_33970__$1 = state_33970;var statearr_33983_34008 = state_33970__$1;(statearr_33983_34008[2] = inst_33966);
(statearr_33983_34008[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 8))
{var inst_33934 = (state_33970[7]);var inst_33943 = (state_33970[10]);var tmp33980 = inst_33934;var inst_33934__$1 = tmp33980;var inst_33935 = inst_33943;var state_33970__$1 = (function (){var statearr_33984 = state_33970;(statearr_33984[7] = inst_33934__$1);
(statearr_33984[8] = inst_33935);
return statearr_33984;
})();var statearr_33985_34009 = state_33970__$1;(statearr_33985_34009[2] = null);
(statearr_33985_34009[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 9))
{var inst_33934 = (state_33970[7]);var inst_33948 = cljs.core.vec.call(null,inst_33934);var state_33970__$1 = state_33970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33970__$1,11,out,inst_33948);
} else
{if((state_val_33971 === 10))
{var inst_33954 = (state_33970[2]);var state_33970__$1 = state_33970;var statearr_33986_34010 = state_33970__$1;(statearr_33986_34010[2] = inst_33954);
(statearr_33986_34010[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 11))
{var inst_33950 = (state_33970[2]);var inst_33951 = (new Array(n));var inst_33934 = inst_33951;var inst_33935 = 0;var state_33970__$1 = (function (){var statearr_33987 = state_33970;(statearr_33987[7] = inst_33934);
(statearr_33987[8] = inst_33935);
(statearr_33987[12] = inst_33950);
return statearr_33987;
})();var statearr_33988_34011 = state_33970__$1;(statearr_33988_34011[2] = null);
(statearr_33988_34011[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 12))
{var inst_33934 = (state_33970[7]);var inst_33958 = cljs.core.vec.call(null,inst_33934);var state_33970__$1 = state_33970;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33970__$1,15,out,inst_33958);
} else
{if((state_val_33971 === 13))
{var state_33970__$1 = state_33970;var statearr_33989_34012 = state_33970__$1;(statearr_33989_34012[2] = null);
(statearr_33989_34012[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 14))
{var inst_33963 = (state_33970[2]);var inst_33964 = cljs.core.async.close_BANG_.call(null,out);var state_33970__$1 = (function (){var statearr_33990 = state_33970;(statearr_33990[13] = inst_33963);
return statearr_33990;
})();var statearr_33991_34013 = state_33970__$1;(statearr_33991_34013[2] = inst_33964);
(statearr_33991_34013[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33971 === 15))
{var inst_33960 = (state_33970[2]);var state_33970__$1 = state_33970;var statearr_33992_34014 = state_33970__$1;(statearr_33992_34014[2] = inst_33960);
(statearr_33992_34014[1] = 14);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_33996 = (new Array(14));(statearr_33996[0] = state_machine__5792__auto__);
(statearr_33996[1] = 1);
return statearr_33996;
});
var state_machine__5792__auto____1 = (function (state_33970){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_33970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e33997){if((e33997 instanceof Object))
{var ex__5795__auto__ = e33997;var statearr_33998_34015 = state_33970;(statearr_33998_34015[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33970);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33997;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34016 = state_33970;
state_33970 = G__34016;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_33970){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_33970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_33999 = f__5862__auto__.call(null);(statearr_33999[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___34000);
return statearr_33999;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5861__auto___34159 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5862__auto__ = (function (){var switch__5791__auto__ = (function (state_34129){var state_val_34130 = (state_34129[1]);if((state_val_34130 === 1))
{var inst_34088 = (new Array(0));var inst_34089 = inst_34088;var inst_34090 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34129__$1 = (function (){var statearr_34131 = state_34129;(statearr_34131[7] = inst_34089);
(statearr_34131[8] = inst_34090);
return statearr_34131;
})();var statearr_34132_34160 = state_34129__$1;(statearr_34132_34160[2] = null);
(statearr_34132_34160[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 2))
{var state_34129__$1 = state_34129;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34129__$1,4,ch);
} else
{if((state_val_34130 === 3))
{var inst_34127 = (state_34129[2]);var state_34129__$1 = state_34129;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34129__$1,inst_34127);
} else
{if((state_val_34130 === 4))
{var inst_34093 = (state_34129[9]);var inst_34093__$1 = (state_34129[2]);var inst_34094 = (inst_34093__$1 == null);var inst_34095 = cljs.core.not.call(null,inst_34094);var state_34129__$1 = (function (){var statearr_34133 = state_34129;(statearr_34133[9] = inst_34093__$1);
return statearr_34133;
})();if(inst_34095)
{var statearr_34134_34161 = state_34129__$1;(statearr_34134_34161[1] = 5);
} else
{var statearr_34135_34162 = state_34129__$1;(statearr_34135_34162[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 5))
{var inst_34097 = (state_34129[10]);var inst_34093 = (state_34129[9]);var inst_34090 = (state_34129[8]);var inst_34097__$1 = f.call(null,inst_34093);var inst_34098 = cljs.core._EQ_.call(null,inst_34097__$1,inst_34090);var inst_34099 = cljs.core.keyword_identical_QMARK_.call(null,inst_34090,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34100 = (inst_34098) || (inst_34099);var state_34129__$1 = (function (){var statearr_34136 = state_34129;(statearr_34136[10] = inst_34097__$1);
return statearr_34136;
})();if(cljs.core.truth_(inst_34100))
{var statearr_34137_34163 = state_34129__$1;(statearr_34137_34163[1] = 8);
} else
{var statearr_34138_34164 = state_34129__$1;(statearr_34138_34164[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 6))
{var inst_34089 = (state_34129[7]);var inst_34114 = inst_34089.length;var inst_34115 = (inst_34114 > 0);var state_34129__$1 = state_34129;if(cljs.core.truth_(inst_34115))
{var statearr_34140_34165 = state_34129__$1;(statearr_34140_34165[1] = 12);
} else
{var statearr_34141_34166 = state_34129__$1;(statearr_34141_34166[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 7))
{var inst_34125 = (state_34129[2]);var state_34129__$1 = state_34129;var statearr_34142_34167 = state_34129__$1;(statearr_34142_34167[2] = inst_34125);
(statearr_34142_34167[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 8))
{var inst_34089 = (state_34129[7]);var inst_34097 = (state_34129[10]);var inst_34093 = (state_34129[9]);var inst_34102 = inst_34089.push(inst_34093);var tmp34139 = inst_34089;var inst_34089__$1 = tmp34139;var inst_34090 = inst_34097;var state_34129__$1 = (function (){var statearr_34143 = state_34129;(statearr_34143[7] = inst_34089__$1);
(statearr_34143[8] = inst_34090);
(statearr_34143[11] = inst_34102);
return statearr_34143;
})();var statearr_34144_34168 = state_34129__$1;(statearr_34144_34168[2] = null);
(statearr_34144_34168[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 9))
{var inst_34089 = (state_34129[7]);var inst_34105 = cljs.core.vec.call(null,inst_34089);var state_34129__$1 = state_34129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34129__$1,11,out,inst_34105);
} else
{if((state_val_34130 === 10))
{var inst_34112 = (state_34129[2]);var state_34129__$1 = state_34129;var statearr_34145_34169 = state_34129__$1;(statearr_34145_34169[2] = inst_34112);
(statearr_34145_34169[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 11))
{var inst_34097 = (state_34129[10]);var inst_34093 = (state_34129[9]);var inst_34107 = (state_34129[2]);var inst_34108 = (new Array(0));var inst_34109 = inst_34108.push(inst_34093);var inst_34089 = inst_34108;var inst_34090 = inst_34097;var state_34129__$1 = (function (){var statearr_34146 = state_34129;(statearr_34146[7] = inst_34089);
(statearr_34146[12] = inst_34109);
(statearr_34146[8] = inst_34090);
(statearr_34146[13] = inst_34107);
return statearr_34146;
})();var statearr_34147_34170 = state_34129__$1;(statearr_34147_34170[2] = null);
(statearr_34147_34170[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 12))
{var inst_34089 = (state_34129[7]);var inst_34117 = cljs.core.vec.call(null,inst_34089);var state_34129__$1 = state_34129;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34129__$1,15,out,inst_34117);
} else
{if((state_val_34130 === 13))
{var state_34129__$1 = state_34129;var statearr_34148_34171 = state_34129__$1;(statearr_34148_34171[2] = null);
(statearr_34148_34171[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 14))
{var inst_34122 = (state_34129[2]);var inst_34123 = cljs.core.async.close_BANG_.call(null,out);var state_34129__$1 = (function (){var statearr_34149 = state_34129;(statearr_34149[14] = inst_34122);
return statearr_34149;
})();var statearr_34150_34172 = state_34129__$1;(statearr_34150_34172[2] = inst_34123);
(statearr_34150_34172[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34130 === 15))
{var inst_34119 = (state_34129[2]);var state_34129__$1 = state_34129;var statearr_34151_34173 = state_34129__$1;(statearr_34151_34173[2] = inst_34119);
(statearr_34151_34173[1] = 14);
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
});return ((function (switch__5791__auto__){
return (function() {
var state_machine__5792__auto__ = null;
var state_machine__5792__auto____0 = (function (){var statearr_34155 = (new Array(15));(statearr_34155[0] = state_machine__5792__auto__);
(statearr_34155[1] = 1);
return statearr_34155;
});
var state_machine__5792__auto____1 = (function (state_34129){while(true){
var ret_value__5793__auto__ = (function (){try{while(true){
var result__5794__auto__ = switch__5791__auto__.call(null,state_34129);if(cljs.core.keyword_identical_QMARK_.call(null,result__5794__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5794__auto__;
}
break;
}
}catch (e34156){if((e34156 instanceof Object))
{var ex__5795__auto__ = e34156;var statearr_34157_34174 = state_34129;(statearr_34157_34174[5] = ex__5795__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34129);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34156;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5793__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34175 = state_34129;
state_34129 = G__34175;
continue;
}
} else
{return ret_value__5793__auto__;
}
break;
}
});
state_machine__5792__auto__ = function(state_34129){
switch(arguments.length){
case 0:
return state_machine__5792__auto____0.call(this);
case 1:
return state_machine__5792__auto____1.call(this,state_34129);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5792__auto____0;
state_machine__5792__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5792__auto____1;
return state_machine__5792__auto__;
})()
;})(switch__5791__auto__))
})();var state__5863__auto__ = (function (){var statearr_34158 = f__5862__auto__.call(null);(statearr_34158[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5861__auto___34159);
return statearr_34158;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5863__auto__);
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
