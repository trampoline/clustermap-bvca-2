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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34838 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34838 = (function (f,fn_handler,meta34839){
this.f = f;
this.fn_handler = fn_handler;
this.meta34839 = meta34839;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34838.cljs$lang$type = true;
cljs.core.async.t34838.cljs$lang$ctorStr = "cljs.core.async/t34838";
cljs.core.async.t34838.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34838");
});
cljs.core.async.t34838.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34838.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34838.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34838.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34840){var self__ = this;
var _34840__$1 = this;return self__.meta34839;
});
cljs.core.async.t34838.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34840,meta34839__$1){var self__ = this;
var _34840__$1 = this;return (new cljs.core.async.t34838(self__.f,self__.fn_handler,meta34839__$1));
});
cljs.core.async.__GT_t34838 = (function __GT_t34838(f__$1,fn_handler__$1,meta34839){return (new cljs.core.async.t34838(f__$1,fn_handler__$1,meta34839));
});
}
return (new cljs.core.async.t34838(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34842 = buff;if(G__34842)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34842.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34842.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34842);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34842);
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
{var val_34843 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34843);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34843);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34844 = n;var x_34845 = 0;while(true){
if((x_34845 < n__4248__auto___34844))
{(a[x_34845] = 0);
{
var G__34846 = (x_34845 + 1);
x_34845 = G__34846;
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
var G__34847 = (i + 1);
i = G__34847;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34851 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34851 = (function (flag,alt_flag,meta34852){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34852 = meta34852;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34851.cljs$lang$type = true;
cljs.core.async.t34851.cljs$lang$ctorStr = "cljs.core.async/t34851";
cljs.core.async.t34851.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34851");
});
cljs.core.async.t34851.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34851.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34851.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34851.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34853){var self__ = this;
var _34853__$1 = this;return self__.meta34852;
});
cljs.core.async.t34851.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34853,meta34852__$1){var self__ = this;
var _34853__$1 = this;return (new cljs.core.async.t34851(self__.flag,self__.alt_flag,meta34852__$1));
});
cljs.core.async.__GT_t34851 = (function __GT_t34851(flag__$1,alt_flag__$1,meta34852){return (new cljs.core.async.t34851(flag__$1,alt_flag__$1,meta34852));
});
}
return (new cljs.core.async.t34851(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34857 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34857 = (function (cb,flag,alt_handler,meta34858){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34858 = meta34858;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34857.cljs$lang$type = true;
cljs.core.async.t34857.cljs$lang$ctorStr = "cljs.core.async/t34857";
cljs.core.async.t34857.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34857");
});
cljs.core.async.t34857.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34857.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34857.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34859){var self__ = this;
var _34859__$1 = this;return self__.meta34858;
});
cljs.core.async.t34857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34859,meta34858__$1){var self__ = this;
var _34859__$1 = this;return (new cljs.core.async.t34857(self__.cb,self__.flag,self__.alt_handler,meta34858__$1));
});
cljs.core.async.__GT_t34857 = (function __GT_t34857(cb__$1,flag__$1,alt_handler__$1,meta34858){return (new cljs.core.async.t34857(cb__$1,flag__$1,alt_handler__$1,meta34858));
});
}
return (new cljs.core.async.t34857(cb,flag,alt_handler,null));
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
return (function (p1__34860_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34860_SHARP_,port], null));
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
var G__34861 = (i + 1);
i = G__34861;
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
var alts_BANG___delegate = function (ports,p__34862){var map__34864 = p__34862;var map__34864__$1 = ((cljs.core.seq_QMARK_.call(null,map__34864))?cljs.core.apply.call(null,cljs.core.hash_map,map__34864):map__34864);var opts = map__34864__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34862 = null;if (arguments.length > 1) {
  p__34862 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34862);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34865){
var ports = cljs.core.first(arglist__34865);
var p__34862 = cljs.core.rest(arglist__34865);
return alts_BANG___delegate(ports,p__34862);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34873 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34873 = (function (ch,f,map_LT_,meta34874){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34874 = meta34874;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34873.cljs$lang$type = true;
cljs.core.async.t34873.cljs$lang$ctorStr = "cljs.core.async/t34873";
cljs.core.async.t34873.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34873");
});
cljs.core.async.t34873.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34873.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34873.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34873.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34876 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34876 = (function (fn1,_,meta34874,ch,f,map_LT_,meta34877){
this.fn1 = fn1;
this._ = _;
this.meta34874 = meta34874;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34877 = meta34877;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34876.cljs$lang$type = true;
cljs.core.async.t34876.cljs$lang$ctorStr = "cljs.core.async/t34876";
cljs.core.async.t34876.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34876");
});
cljs.core.async.t34876.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34876.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34876.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34876.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34866_SHARP_){return f1.call(null,(((p1__34866_SHARP_ == null))?null:self__.f.call(null,p1__34866_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34876.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34878){var self__ = this;
var _34878__$1 = this;return self__.meta34877;
});
cljs.core.async.t34876.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34878,meta34877__$1){var self__ = this;
var _34878__$1 = this;return (new cljs.core.async.t34876(self__.fn1,self__._,self__.meta34874,self__.ch,self__.f,self__.map_LT_,meta34877__$1));
});
cljs.core.async.__GT_t34876 = (function __GT_t34876(fn1__$1,___$2,meta34874__$1,ch__$2,f__$2,map_LT___$2,meta34877){return (new cljs.core.async.t34876(fn1__$1,___$2,meta34874__$1,ch__$2,f__$2,map_LT___$2,meta34877));
});
}
return (new cljs.core.async.t34876(fn1,___$1,self__.meta34874,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34873.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34873.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34873.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34875){var self__ = this;
var _34875__$1 = this;return self__.meta34874;
});
cljs.core.async.t34873.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34875,meta34874__$1){var self__ = this;
var _34875__$1 = this;return (new cljs.core.async.t34873(self__.ch,self__.f,self__.map_LT_,meta34874__$1));
});
cljs.core.async.__GT_t34873 = (function __GT_t34873(ch__$1,f__$1,map_LT___$1,meta34874){return (new cljs.core.async.t34873(ch__$1,f__$1,map_LT___$1,meta34874));
});
}
return (new cljs.core.async.t34873(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34882 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34882 = (function (ch,f,map_GT_,meta34883){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34883 = meta34883;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34882.cljs$lang$type = true;
cljs.core.async.t34882.cljs$lang$ctorStr = "cljs.core.async/t34882";
cljs.core.async.t34882.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34882");
});
cljs.core.async.t34882.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34882.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34882.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34882.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34882.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34882.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34882.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34884){var self__ = this;
var _34884__$1 = this;return self__.meta34883;
});
cljs.core.async.t34882.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34884,meta34883__$1){var self__ = this;
var _34884__$1 = this;return (new cljs.core.async.t34882(self__.ch,self__.f,self__.map_GT_,meta34883__$1));
});
cljs.core.async.__GT_t34882 = (function __GT_t34882(ch__$1,f__$1,map_GT___$1,meta34883){return (new cljs.core.async.t34882(ch__$1,f__$1,map_GT___$1,meta34883));
});
}
return (new cljs.core.async.t34882(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34888 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34888 = (function (ch,p,filter_GT_,meta34889){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34889 = meta34889;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34888.cljs$lang$type = true;
cljs.core.async.t34888.cljs$lang$ctorStr = "cljs.core.async/t34888";
cljs.core.async.t34888.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34888");
});
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34888.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34890){var self__ = this;
var _34890__$1 = this;return self__.meta34889;
});
cljs.core.async.t34888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34890,meta34889__$1){var self__ = this;
var _34890__$1 = this;return (new cljs.core.async.t34888(self__.ch,self__.p,self__.filter_GT_,meta34889__$1));
});
cljs.core.async.__GT_t34888 = (function __GT_t34888(ch__$1,p__$1,filter_GT___$1,meta34889){return (new cljs.core.async.t34888(ch__$1,p__$1,filter_GT___$1,meta34889));
});
}
return (new cljs.core.async.t34888(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34973 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34952){var state_val_34953 = (state_34952[1]);if((state_val_34953 === 1))
{var state_34952__$1 = state_34952;var statearr_34954_34974 = state_34952__$1;(statearr_34954_34974[2] = null);
(statearr_34954_34974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34953 === 2))
{var state_34952__$1 = state_34952;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34952__$1,4,ch);
} else
{if((state_val_34953 === 3))
{var inst_34950 = (state_34952[2]);var state_34952__$1 = state_34952;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34952__$1,inst_34950);
} else
{if((state_val_34953 === 4))
{var inst_34934 = (state_34952[7]);var inst_34934__$1 = (state_34952[2]);var inst_34935 = (inst_34934__$1 == null);var state_34952__$1 = (function (){var statearr_34955 = state_34952;(statearr_34955[7] = inst_34934__$1);
return statearr_34955;
})();if(cljs.core.truth_(inst_34935))
{var statearr_34956_34975 = state_34952__$1;(statearr_34956_34975[1] = 5);
} else
{var statearr_34957_34976 = state_34952__$1;(statearr_34957_34976[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34953 === 5))
{var inst_34937 = cljs.core.async.close_BANG_.call(null,out);var state_34952__$1 = state_34952;var statearr_34958_34977 = state_34952__$1;(statearr_34958_34977[2] = inst_34937);
(statearr_34958_34977[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34953 === 6))
{var inst_34934 = (state_34952[7]);var inst_34939 = p.call(null,inst_34934);var state_34952__$1 = state_34952;if(cljs.core.truth_(inst_34939))
{var statearr_34959_34978 = state_34952__$1;(statearr_34959_34978[1] = 8);
} else
{var statearr_34960_34979 = state_34952__$1;(statearr_34960_34979[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34953 === 7))
{var inst_34948 = (state_34952[2]);var state_34952__$1 = state_34952;var statearr_34961_34980 = state_34952__$1;(statearr_34961_34980[2] = inst_34948);
(statearr_34961_34980[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34953 === 8))
{var inst_34934 = (state_34952[7]);var state_34952__$1 = state_34952;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34952__$1,11,out,inst_34934);
} else
{if((state_val_34953 === 9))
{var state_34952__$1 = state_34952;var statearr_34962_34981 = state_34952__$1;(statearr_34962_34981[2] = null);
(statearr_34962_34981[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34953 === 10))
{var inst_34945 = (state_34952[2]);var state_34952__$1 = (function (){var statearr_34963 = state_34952;(statearr_34963[8] = inst_34945);
return statearr_34963;
})();var statearr_34964_34982 = state_34952__$1;(statearr_34964_34982[2] = null);
(statearr_34964_34982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34953 === 11))
{var inst_34942 = (state_34952[2]);var state_34952__$1 = state_34952;var statearr_34965_34983 = state_34952__$1;(statearr_34965_34983[2] = inst_34942);
(statearr_34965_34983[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_34969 = [null,null,null,null,null,null,null,null,null];(statearr_34969[0] = state_machine__5507__auto__);
(statearr_34969[1] = 1);
return statearr_34969;
});
var state_machine__5507__auto____1 = (function (state_34952){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34952);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34970){if((e34970 instanceof Object))
{var ex__5510__auto__ = e34970;var statearr_34971_34984 = state_34952;(statearr_34971_34984[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34952);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34970;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34985 = state_34952;
state_34952 = G__34985;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34952){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34952);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34972 = f__5522__auto__.call(null);(statearr_34972[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34973);
return statearr_34972;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35137){var state_val_35138 = (state_35137[1]);if((state_val_35138 === 1))
{var state_35137__$1 = state_35137;var statearr_35139_35176 = state_35137__$1;(statearr_35139_35176[2] = null);
(statearr_35139_35176[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 2))
{var state_35137__$1 = state_35137;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35137__$1,4,in$);
} else
{if((state_val_35138 === 3))
{var inst_35135 = (state_35137[2]);var state_35137__$1 = state_35137;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35137__$1,inst_35135);
} else
{if((state_val_35138 === 4))
{var inst_35083 = (state_35137[7]);var inst_35083__$1 = (state_35137[2]);var inst_35084 = (inst_35083__$1 == null);var state_35137__$1 = (function (){var statearr_35140 = state_35137;(statearr_35140[7] = inst_35083__$1);
return statearr_35140;
})();if(cljs.core.truth_(inst_35084))
{var statearr_35141_35177 = state_35137__$1;(statearr_35141_35177[1] = 5);
} else
{var statearr_35142_35178 = state_35137__$1;(statearr_35142_35178[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 5))
{var inst_35086 = cljs.core.async.close_BANG_.call(null,out);var state_35137__$1 = state_35137;var statearr_35143_35179 = state_35137__$1;(statearr_35143_35179[2] = inst_35086);
(statearr_35143_35179[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 6))
{var inst_35083 = (state_35137[7]);var inst_35088 = f.call(null,inst_35083);var inst_35093 = cljs.core.seq.call(null,inst_35088);var inst_35094 = inst_35093;var inst_35095 = null;var inst_35096 = 0;var inst_35097 = 0;var state_35137__$1 = (function (){var statearr_35144 = state_35137;(statearr_35144[8] = inst_35095);
(statearr_35144[9] = inst_35094);
(statearr_35144[10] = inst_35097);
(statearr_35144[11] = inst_35096);
return statearr_35144;
})();var statearr_35145_35180 = state_35137__$1;(statearr_35145_35180[2] = null);
(statearr_35145_35180[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 7))
{var inst_35133 = (state_35137[2]);var state_35137__$1 = state_35137;var statearr_35146_35181 = state_35137__$1;(statearr_35146_35181[2] = inst_35133);
(statearr_35146_35181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 8))
{var inst_35097 = (state_35137[10]);var inst_35096 = (state_35137[11]);var inst_35099 = (inst_35097 < inst_35096);var inst_35100 = inst_35099;var state_35137__$1 = state_35137;if(cljs.core.truth_(inst_35100))
{var statearr_35147_35182 = state_35137__$1;(statearr_35147_35182[1] = 10);
} else
{var statearr_35148_35183 = state_35137__$1;(statearr_35148_35183[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 9))
{var inst_35130 = (state_35137[2]);var state_35137__$1 = (function (){var statearr_35149 = state_35137;(statearr_35149[12] = inst_35130);
return statearr_35149;
})();var statearr_35150_35184 = state_35137__$1;(statearr_35150_35184[2] = null);
(statearr_35150_35184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 10))
{var inst_35095 = (state_35137[8]);var inst_35097 = (state_35137[10]);var inst_35102 = cljs.core._nth.call(null,inst_35095,inst_35097);var state_35137__$1 = state_35137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35137__$1,13,out,inst_35102);
} else
{if((state_val_35138 === 11))
{var inst_35094 = (state_35137[9]);var inst_35108 = (state_35137[13]);var inst_35108__$1 = cljs.core.seq.call(null,inst_35094);var state_35137__$1 = (function (){var statearr_35154 = state_35137;(statearr_35154[13] = inst_35108__$1);
return statearr_35154;
})();if(inst_35108__$1)
{var statearr_35155_35185 = state_35137__$1;(statearr_35155_35185[1] = 14);
} else
{var statearr_35156_35186 = state_35137__$1;(statearr_35156_35186[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 12))
{var inst_35128 = (state_35137[2]);var state_35137__$1 = state_35137;var statearr_35157_35187 = state_35137__$1;(statearr_35157_35187[2] = inst_35128);
(statearr_35157_35187[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 13))
{var inst_35095 = (state_35137[8]);var inst_35094 = (state_35137[9]);var inst_35097 = (state_35137[10]);var inst_35096 = (state_35137[11]);var inst_35104 = (state_35137[2]);var inst_35105 = (inst_35097 + 1);var tmp35151 = inst_35095;var tmp35152 = inst_35094;var tmp35153 = inst_35096;var inst_35094__$1 = tmp35152;var inst_35095__$1 = tmp35151;var inst_35096__$1 = tmp35153;var inst_35097__$1 = inst_35105;var state_35137__$1 = (function (){var statearr_35158 = state_35137;(statearr_35158[8] = inst_35095__$1);
(statearr_35158[14] = inst_35104);
(statearr_35158[9] = inst_35094__$1);
(statearr_35158[10] = inst_35097__$1);
(statearr_35158[11] = inst_35096__$1);
return statearr_35158;
})();var statearr_35159_35188 = state_35137__$1;(statearr_35159_35188[2] = null);
(statearr_35159_35188[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 14))
{var inst_35108 = (state_35137[13]);var inst_35110 = cljs.core.chunked_seq_QMARK_.call(null,inst_35108);var state_35137__$1 = state_35137;if(inst_35110)
{var statearr_35160_35189 = state_35137__$1;(statearr_35160_35189[1] = 17);
} else
{var statearr_35161_35190 = state_35137__$1;(statearr_35161_35190[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 15))
{var state_35137__$1 = state_35137;var statearr_35162_35191 = state_35137__$1;(statearr_35162_35191[2] = null);
(statearr_35162_35191[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 16))
{var inst_35126 = (state_35137[2]);var state_35137__$1 = state_35137;var statearr_35163_35192 = state_35137__$1;(statearr_35163_35192[2] = inst_35126);
(statearr_35163_35192[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 17))
{var inst_35108 = (state_35137[13]);var inst_35112 = cljs.core.chunk_first.call(null,inst_35108);var inst_35113 = cljs.core.chunk_rest.call(null,inst_35108);var inst_35114 = cljs.core.count.call(null,inst_35112);var inst_35094 = inst_35113;var inst_35095 = inst_35112;var inst_35096 = inst_35114;var inst_35097 = 0;var state_35137__$1 = (function (){var statearr_35164 = state_35137;(statearr_35164[8] = inst_35095);
(statearr_35164[9] = inst_35094);
(statearr_35164[10] = inst_35097);
(statearr_35164[11] = inst_35096);
return statearr_35164;
})();var statearr_35165_35193 = state_35137__$1;(statearr_35165_35193[2] = null);
(statearr_35165_35193[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 18))
{var inst_35108 = (state_35137[13]);var inst_35117 = cljs.core.first.call(null,inst_35108);var state_35137__$1 = state_35137;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35137__$1,20,out,inst_35117);
} else
{if((state_val_35138 === 19))
{var inst_35123 = (state_35137[2]);var state_35137__$1 = state_35137;var statearr_35166_35194 = state_35137__$1;(statearr_35166_35194[2] = inst_35123);
(statearr_35166_35194[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35138 === 20))
{var inst_35108 = (state_35137[13]);var inst_35119 = (state_35137[2]);var inst_35120 = cljs.core.next.call(null,inst_35108);var inst_35094 = inst_35120;var inst_35095 = null;var inst_35096 = 0;var inst_35097 = 0;var state_35137__$1 = (function (){var statearr_35167 = state_35137;(statearr_35167[8] = inst_35095);
(statearr_35167[9] = inst_35094);
(statearr_35167[10] = inst_35097);
(statearr_35167[11] = inst_35096);
(statearr_35167[15] = inst_35119);
return statearr_35167;
})();var statearr_35168_35195 = state_35137__$1;(statearr_35168_35195[2] = null);
(statearr_35168_35195[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_35172 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35172[0] = state_machine__5507__auto__);
(statearr_35172[1] = 1);
return statearr_35172;
});
var state_machine__5507__auto____1 = (function (state_35137){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35137);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35173){if((e35173 instanceof Object))
{var ex__5510__auto__ = e35173;var statearr_35174_35196 = state_35137;(statearr_35174_35196[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35137);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35173;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35197 = state_35137;
state_35137 = G__35197;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35137){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35137);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35175 = f__5522__auto__.call(null);(statearr_35175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35175;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___35278 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35257){var state_val_35258 = (state_35257[1]);if((state_val_35258 === 1))
{var state_35257__$1 = state_35257;var statearr_35259_35279 = state_35257__$1;(statearr_35259_35279[2] = null);
(statearr_35259_35279[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35258 === 2))
{var state_35257__$1 = state_35257;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35257__$1,4,from);
} else
{if((state_val_35258 === 3))
{var inst_35255 = (state_35257[2]);var state_35257__$1 = state_35257;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35257__$1,inst_35255);
} else
{if((state_val_35258 === 4))
{var inst_35240 = (state_35257[7]);var inst_35240__$1 = (state_35257[2]);var inst_35241 = (inst_35240__$1 == null);var state_35257__$1 = (function (){var statearr_35260 = state_35257;(statearr_35260[7] = inst_35240__$1);
return statearr_35260;
})();if(cljs.core.truth_(inst_35241))
{var statearr_35261_35280 = state_35257__$1;(statearr_35261_35280[1] = 5);
} else
{var statearr_35262_35281 = state_35257__$1;(statearr_35262_35281[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35258 === 5))
{var state_35257__$1 = state_35257;if(cljs.core.truth_(close_QMARK_))
{var statearr_35263_35282 = state_35257__$1;(statearr_35263_35282[1] = 8);
} else
{var statearr_35264_35283 = state_35257__$1;(statearr_35264_35283[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35258 === 6))
{var inst_35240 = (state_35257[7]);var state_35257__$1 = state_35257;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35257__$1,11,to,inst_35240);
} else
{if((state_val_35258 === 7))
{var inst_35253 = (state_35257[2]);var state_35257__$1 = state_35257;var statearr_35265_35284 = state_35257__$1;(statearr_35265_35284[2] = inst_35253);
(statearr_35265_35284[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35258 === 8))
{var inst_35244 = cljs.core.async.close_BANG_.call(null,to);var state_35257__$1 = state_35257;var statearr_35266_35285 = state_35257__$1;(statearr_35266_35285[2] = inst_35244);
(statearr_35266_35285[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35258 === 9))
{var state_35257__$1 = state_35257;var statearr_35267_35286 = state_35257__$1;(statearr_35267_35286[2] = null);
(statearr_35267_35286[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35258 === 10))
{var inst_35247 = (state_35257[2]);var state_35257__$1 = state_35257;var statearr_35268_35287 = state_35257__$1;(statearr_35268_35287[2] = inst_35247);
(statearr_35268_35287[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35258 === 11))
{var inst_35250 = (state_35257[2]);var state_35257__$1 = (function (){var statearr_35269 = state_35257;(statearr_35269[8] = inst_35250);
return statearr_35269;
})();var statearr_35270_35288 = state_35257__$1;(statearr_35270_35288[2] = null);
(statearr_35270_35288[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35274 = [null,null,null,null,null,null,null,null,null];(statearr_35274[0] = state_machine__5507__auto__);
(statearr_35274[1] = 1);
return statearr_35274;
});
var state_machine__5507__auto____1 = (function (state_35257){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35257);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35275){if((e35275 instanceof Object))
{var ex__5510__auto__ = e35275;var statearr_35276_35289 = state_35257;(statearr_35276_35289[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35257);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35275;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35290 = state_35257;
state_35257 = G__35290;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35257){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35277 = f__5522__auto__.call(null);(statearr_35277[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35278);
return statearr_35277;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___35377 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35355){var state_val_35356 = (state_35355[1]);if((state_val_35356 === 1))
{var state_35355__$1 = state_35355;var statearr_35357_35378 = state_35355__$1;(statearr_35357_35378[2] = null);
(statearr_35357_35378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35356 === 2))
{var state_35355__$1 = state_35355;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35355__$1,4,ch);
} else
{if((state_val_35356 === 3))
{var inst_35353 = (state_35355[2]);var state_35355__$1 = state_35355;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35355__$1,inst_35353);
} else
{if((state_val_35356 === 4))
{var inst_35336 = (state_35355[7]);var inst_35336__$1 = (state_35355[2]);var inst_35337 = (inst_35336__$1 == null);var state_35355__$1 = (function (){var statearr_35358 = state_35355;(statearr_35358[7] = inst_35336__$1);
return statearr_35358;
})();if(cljs.core.truth_(inst_35337))
{var statearr_35359_35379 = state_35355__$1;(statearr_35359_35379[1] = 5);
} else
{var statearr_35360_35380 = state_35355__$1;(statearr_35360_35380[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35356 === 5))
{var inst_35339 = cljs.core.async.close_BANG_.call(null,tc);var inst_35340 = cljs.core.async.close_BANG_.call(null,fc);var state_35355__$1 = (function (){var statearr_35361 = state_35355;(statearr_35361[8] = inst_35339);
return statearr_35361;
})();var statearr_35362_35381 = state_35355__$1;(statearr_35362_35381[2] = inst_35340);
(statearr_35362_35381[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35356 === 6))
{var inst_35336 = (state_35355[7]);var inst_35342 = p.call(null,inst_35336);var state_35355__$1 = state_35355;if(cljs.core.truth_(inst_35342))
{var statearr_35363_35382 = state_35355__$1;(statearr_35363_35382[1] = 9);
} else
{var statearr_35364_35383 = state_35355__$1;(statearr_35364_35383[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35356 === 7))
{var inst_35351 = (state_35355[2]);var state_35355__$1 = state_35355;var statearr_35365_35384 = state_35355__$1;(statearr_35365_35384[2] = inst_35351);
(statearr_35365_35384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35356 === 8))
{var inst_35348 = (state_35355[2]);var state_35355__$1 = (function (){var statearr_35366 = state_35355;(statearr_35366[9] = inst_35348);
return statearr_35366;
})();var statearr_35367_35385 = state_35355__$1;(statearr_35367_35385[2] = null);
(statearr_35367_35385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35356 === 9))
{var state_35355__$1 = state_35355;var statearr_35368_35386 = state_35355__$1;(statearr_35368_35386[2] = tc);
(statearr_35368_35386[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35356 === 10))
{var state_35355__$1 = state_35355;var statearr_35369_35387 = state_35355__$1;(statearr_35369_35387[2] = fc);
(statearr_35369_35387[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35356 === 11))
{var inst_35336 = (state_35355[7]);var inst_35346 = (state_35355[2]);var state_35355__$1 = state_35355;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35355__$1,8,inst_35346,inst_35336);
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
var state_machine__5507__auto____0 = (function (){var statearr_35373 = [null,null,null,null,null,null,null,null,null,null];(statearr_35373[0] = state_machine__5507__auto__);
(statearr_35373[1] = 1);
return statearr_35373;
});
var state_machine__5507__auto____1 = (function (state_35355){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35355);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35374){if((e35374 instanceof Object))
{var ex__5510__auto__ = e35374;var statearr_35375_35388 = state_35355;(statearr_35375_35388[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35355);
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
var G__35389 = state_35355;
state_35355 = G__35389;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35355){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35355);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35436){var state_val_35437 = (state_35436[1]);if((state_val_35437 === 7))
{var inst_35432 = (state_35436[2]);var state_35436__$1 = state_35436;var statearr_35438_35454 = state_35436__$1;(statearr_35438_35454[2] = inst_35432);
(statearr_35438_35454[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35437 === 6))
{var inst_35422 = (state_35436[7]);var inst_35425 = (state_35436[8]);var inst_35429 = f.call(null,inst_35422,inst_35425);var inst_35422__$1 = inst_35429;var state_35436__$1 = (function (){var statearr_35439 = state_35436;(statearr_35439[7] = inst_35422__$1);
return statearr_35439;
})();var statearr_35440_35455 = state_35436__$1;(statearr_35440_35455[2] = null);
(statearr_35440_35455[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35437 === 5))
{var inst_35422 = (state_35436[7]);var state_35436__$1 = state_35436;var statearr_35441_35456 = state_35436__$1;(statearr_35441_35456[2] = inst_35422);
(statearr_35441_35456[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35437 === 4))
{var inst_35425 = (state_35436[8]);var inst_35425__$1 = (state_35436[2]);var inst_35426 = (inst_35425__$1 == null);var state_35436__$1 = (function (){var statearr_35442 = state_35436;(statearr_35442[8] = inst_35425__$1);
return statearr_35442;
})();if(cljs.core.truth_(inst_35426))
{var statearr_35443_35457 = state_35436__$1;(statearr_35443_35457[1] = 5);
} else
{var statearr_35444_35458 = state_35436__$1;(statearr_35444_35458[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35437 === 3))
{var inst_35434 = (state_35436[2]);var state_35436__$1 = state_35436;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35436__$1,inst_35434);
} else
{if((state_val_35437 === 2))
{var state_35436__$1 = state_35436;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35436__$1,4,ch);
} else
{if((state_val_35437 === 1))
{var inst_35422 = init;var state_35436__$1 = (function (){var statearr_35445 = state_35436;(statearr_35445[7] = inst_35422);
return statearr_35445;
})();var statearr_35446_35459 = state_35436__$1;(statearr_35446_35459[2] = null);
(statearr_35446_35459[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35450 = [null,null,null,null,null,null,null,null,null];(statearr_35450[0] = state_machine__5507__auto__);
(statearr_35450[1] = 1);
return statearr_35450;
});
var state_machine__5507__auto____1 = (function (state_35436){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35436);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35451){if((e35451 instanceof Object))
{var ex__5510__auto__ = e35451;var statearr_35452_35460 = state_35436;(statearr_35452_35460[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35436);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35461 = state_35436;
state_35436 = G__35461;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35436){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35436);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35453 = f__5522__auto__.call(null);(statearr_35453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35453;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35523){var state_val_35524 = (state_35523[1]);if((state_val_35524 === 1))
{var inst_35503 = cljs.core.seq.call(null,coll);var inst_35504 = inst_35503;var state_35523__$1 = (function (){var statearr_35525 = state_35523;(statearr_35525[7] = inst_35504);
return statearr_35525;
})();var statearr_35526_35544 = state_35523__$1;(statearr_35526_35544[2] = null);
(statearr_35526_35544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35524 === 2))
{var inst_35504 = (state_35523[7]);var state_35523__$1 = state_35523;if(cljs.core.truth_(inst_35504))
{var statearr_35527_35545 = state_35523__$1;(statearr_35527_35545[1] = 4);
} else
{var statearr_35528_35546 = state_35523__$1;(statearr_35528_35546[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35524 === 3))
{var inst_35521 = (state_35523[2]);var state_35523__$1 = state_35523;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35523__$1,inst_35521);
} else
{if((state_val_35524 === 4))
{var inst_35504 = (state_35523[7]);var inst_35507 = cljs.core.first.call(null,inst_35504);var state_35523__$1 = state_35523;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35523__$1,7,ch,inst_35507);
} else
{if((state_val_35524 === 5))
{var state_35523__$1 = state_35523;if(cljs.core.truth_(close_QMARK_))
{var statearr_35529_35547 = state_35523__$1;(statearr_35529_35547[1] = 8);
} else
{var statearr_35530_35548 = state_35523__$1;(statearr_35530_35548[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35524 === 6))
{var inst_35519 = (state_35523[2]);var state_35523__$1 = state_35523;var statearr_35531_35549 = state_35523__$1;(statearr_35531_35549[2] = inst_35519);
(statearr_35531_35549[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35524 === 7))
{var inst_35504 = (state_35523[7]);var inst_35509 = (state_35523[2]);var inst_35510 = cljs.core.next.call(null,inst_35504);var inst_35504__$1 = inst_35510;var state_35523__$1 = (function (){var statearr_35532 = state_35523;(statearr_35532[8] = inst_35509);
(statearr_35532[7] = inst_35504__$1);
return statearr_35532;
})();var statearr_35533_35550 = state_35523__$1;(statearr_35533_35550[2] = null);
(statearr_35533_35550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35524 === 8))
{var inst_35514 = cljs.core.async.close_BANG_.call(null,ch);var state_35523__$1 = state_35523;var statearr_35534_35551 = state_35523__$1;(statearr_35534_35551[2] = inst_35514);
(statearr_35534_35551[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35524 === 9))
{var state_35523__$1 = state_35523;var statearr_35535_35552 = state_35523__$1;(statearr_35535_35552[2] = null);
(statearr_35535_35552[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35524 === 10))
{var inst_35517 = (state_35523[2]);var state_35523__$1 = state_35523;var statearr_35536_35553 = state_35523__$1;(statearr_35536_35553[2] = inst_35517);
(statearr_35536_35553[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35540 = [null,null,null,null,null,null,null,null,null];(statearr_35540[0] = state_machine__5507__auto__);
(statearr_35540[1] = 1);
return statearr_35540;
});
var state_machine__5507__auto____1 = (function (state_35523){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35523);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35541){if((e35541 instanceof Object))
{var ex__5510__auto__ = e35541;var statearr_35542_35554 = state_35523;(statearr_35542_35554[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35523);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35541;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35555 = state_35523;
state_35523 = G__35555;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35523){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35523);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35543 = f__5522__auto__.call(null);(statearr_35543[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35543;
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
cljs.core.async.Mux = (function (){var obj35557 = {};return obj35557;
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
cljs.core.async.Mult = (function (){var obj35559 = {};return obj35559;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35783 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35783 = (function (cs,ch,mult,meta35784){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35784 = meta35784;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35783.cljs$lang$type = true;
cljs.core.async.t35783.cljs$lang$ctorStr = "cljs.core.async/t35783";
cljs.core.async.t35783.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35783");
});})(cs))
;
cljs.core.async.t35783.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35783.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35783.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35783.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35783.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35783.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35783.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35785){var self__ = this;
var _35785__$1 = this;return self__.meta35784;
});})(cs))
;
cljs.core.async.t35783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35785,meta35784__$1){var self__ = this;
var _35785__$1 = this;return (new cljs.core.async.t35783(self__.cs,self__.ch,self__.mult,meta35784__$1));
});})(cs))
;
cljs.core.async.__GT_t35783 = ((function (cs){
return (function __GT_t35783(cs__$1,ch__$1,mult__$1,meta35784){return (new cljs.core.async.t35783(cs__$1,ch__$1,mult__$1,meta35784));
});})(cs))
;
}
return (new cljs.core.async.t35783(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___36006 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35920){var state_val_35921 = (state_35920[1]);if((state_val_35921 === 32))
{var inst_35864 = (state_35920[7]);var inst_35788 = (state_35920[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35920,31,Object,null,30);var inst_35871 = cljs.core.async.put_BANG_.call(null,inst_35864,inst_35788,done);var state_35920__$1 = state_35920;var statearr_35922_36007 = state_35920__$1;(statearr_35922_36007[2] = inst_35871);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35920__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 1))
{var state_35920__$1 = state_35920;var statearr_35923_36008 = state_35920__$1;(statearr_35923_36008[2] = null);
(statearr_35923_36008[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 33))
{var inst_35877 = (state_35920[9]);var inst_35879 = cljs.core.chunked_seq_QMARK_.call(null,inst_35877);var state_35920__$1 = state_35920;if(inst_35879)
{var statearr_35924_36009 = state_35920__$1;(statearr_35924_36009[1] = 36);
} else
{var statearr_35925_36010 = state_35920__$1;(statearr_35925_36010[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 2))
{var state_35920__$1 = state_35920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35920__$1,4,ch);
} else
{if((state_val_35921 === 34))
{var state_35920__$1 = state_35920;var statearr_35926_36011 = state_35920__$1;(statearr_35926_36011[2] = null);
(statearr_35926_36011[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 3))
{var inst_35918 = (state_35920[2]);var state_35920__$1 = state_35920;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35920__$1,inst_35918);
} else
{if((state_val_35921 === 35))
{var inst_35902 = (state_35920[2]);var state_35920__$1 = state_35920;var statearr_35927_36012 = state_35920__$1;(statearr_35927_36012[2] = inst_35902);
(statearr_35927_36012[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 4))
{var inst_35788 = (state_35920[8]);var inst_35788__$1 = (state_35920[2]);var inst_35789 = (inst_35788__$1 == null);var state_35920__$1 = (function (){var statearr_35928 = state_35920;(statearr_35928[8] = inst_35788__$1);
return statearr_35928;
})();if(cljs.core.truth_(inst_35789))
{var statearr_35929_36013 = state_35920__$1;(statearr_35929_36013[1] = 5);
} else
{var statearr_35930_36014 = state_35920__$1;(statearr_35930_36014[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 36))
{var inst_35877 = (state_35920[9]);var inst_35881 = cljs.core.chunk_first.call(null,inst_35877);var inst_35882 = cljs.core.chunk_rest.call(null,inst_35877);var inst_35883 = cljs.core.count.call(null,inst_35881);var inst_35856 = inst_35882;var inst_35857 = inst_35881;var inst_35858 = inst_35883;var inst_35859 = 0;var state_35920__$1 = (function (){var statearr_35931 = state_35920;(statearr_35931[10] = inst_35856);
(statearr_35931[11] = inst_35857);
(statearr_35931[12] = inst_35859);
(statearr_35931[13] = inst_35858);
return statearr_35931;
})();var statearr_35932_36015 = state_35920__$1;(statearr_35932_36015[2] = null);
(statearr_35932_36015[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 5))
{var inst_35795 = cljs.core.deref.call(null,cs);var inst_35796 = cljs.core.seq.call(null,inst_35795);var inst_35797 = inst_35796;var inst_35798 = null;var inst_35799 = 0;var inst_35800 = 0;var state_35920__$1 = (function (){var statearr_35933 = state_35920;(statearr_35933[14] = inst_35800);
(statearr_35933[15] = inst_35799);
(statearr_35933[16] = inst_35798);
(statearr_35933[17] = inst_35797);
return statearr_35933;
})();var statearr_35934_36016 = state_35920__$1;(statearr_35934_36016[2] = null);
(statearr_35934_36016[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 37))
{var inst_35877 = (state_35920[9]);var inst_35886 = cljs.core.first.call(null,inst_35877);var state_35920__$1 = (function (){var statearr_35935 = state_35920;(statearr_35935[18] = inst_35886);
return statearr_35935;
})();var statearr_35936_36017 = state_35920__$1;(statearr_35936_36017[2] = null);
(statearr_35936_36017[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 6))
{var inst_35848 = (state_35920[19]);var inst_35847 = cljs.core.deref.call(null,cs);var inst_35848__$1 = cljs.core.keys.call(null,inst_35847);var inst_35849 = cljs.core.count.call(null,inst_35848__$1);var inst_35850 = cljs.core.reset_BANG_.call(null,dctr,inst_35849);var inst_35855 = cljs.core.seq.call(null,inst_35848__$1);var inst_35856 = inst_35855;var inst_35857 = null;var inst_35858 = 0;var inst_35859 = 0;var state_35920__$1 = (function (){var statearr_35937 = state_35920;(statearr_35937[10] = inst_35856);
(statearr_35937[11] = inst_35857);
(statearr_35937[20] = inst_35850);
(statearr_35937[19] = inst_35848__$1);
(statearr_35937[12] = inst_35859);
(statearr_35937[13] = inst_35858);
return statearr_35937;
})();var statearr_35938_36018 = state_35920__$1;(statearr_35938_36018[2] = null);
(statearr_35938_36018[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 38))
{var inst_35899 = (state_35920[2]);var state_35920__$1 = state_35920;var statearr_35939_36019 = state_35920__$1;(statearr_35939_36019[2] = inst_35899);
(statearr_35939_36019[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 7))
{var inst_35916 = (state_35920[2]);var state_35920__$1 = state_35920;var statearr_35940_36020 = state_35920__$1;(statearr_35940_36020[2] = inst_35916);
(statearr_35940_36020[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 39))
{var inst_35877 = (state_35920[9]);var inst_35895 = (state_35920[2]);var inst_35896 = cljs.core.next.call(null,inst_35877);var inst_35856 = inst_35896;var inst_35857 = null;var inst_35858 = 0;var inst_35859 = 0;var state_35920__$1 = (function (){var statearr_35941 = state_35920;(statearr_35941[10] = inst_35856);
(statearr_35941[11] = inst_35857);
(statearr_35941[21] = inst_35895);
(statearr_35941[12] = inst_35859);
(statearr_35941[13] = inst_35858);
return statearr_35941;
})();var statearr_35942_36021 = state_35920__$1;(statearr_35942_36021[2] = null);
(statearr_35942_36021[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 8))
{var inst_35800 = (state_35920[14]);var inst_35799 = (state_35920[15]);var inst_35802 = (inst_35800 < inst_35799);var inst_35803 = inst_35802;var state_35920__$1 = state_35920;if(cljs.core.truth_(inst_35803))
{var statearr_35943_36022 = state_35920__$1;(statearr_35943_36022[1] = 10);
} else
{var statearr_35944_36023 = state_35920__$1;(statearr_35944_36023[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 40))
{var inst_35886 = (state_35920[18]);var inst_35887 = (state_35920[2]);var inst_35888 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35889 = cljs.core.async.untap_STAR_.call(null,m,inst_35886);var state_35920__$1 = (function (){var statearr_35945 = state_35920;(statearr_35945[22] = inst_35887);
(statearr_35945[23] = inst_35888);
return statearr_35945;
})();var statearr_35946_36024 = state_35920__$1;(statearr_35946_36024[2] = inst_35889);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35920__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 9))
{var inst_35845 = (state_35920[2]);var state_35920__$1 = state_35920;var statearr_35947_36025 = state_35920__$1;(statearr_35947_36025[2] = inst_35845);
(statearr_35947_36025[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 41))
{var inst_35886 = (state_35920[18]);var inst_35788 = (state_35920[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35920,40,Object,null,39);var inst_35893 = cljs.core.async.put_BANG_.call(null,inst_35886,inst_35788,done);var state_35920__$1 = state_35920;var statearr_35948_36026 = state_35920__$1;(statearr_35948_36026[2] = inst_35893);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35920__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 10))
{var inst_35800 = (state_35920[14]);var inst_35798 = (state_35920[16]);var inst_35806 = cljs.core._nth.call(null,inst_35798,inst_35800);var inst_35807 = cljs.core.nth.call(null,inst_35806,0,null);var inst_35808 = cljs.core.nth.call(null,inst_35806,1,null);var state_35920__$1 = (function (){var statearr_35949 = state_35920;(statearr_35949[24] = inst_35807);
return statearr_35949;
})();if(cljs.core.truth_(inst_35808))
{var statearr_35950_36027 = state_35920__$1;(statearr_35950_36027[1] = 13);
} else
{var statearr_35951_36028 = state_35920__$1;(statearr_35951_36028[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 42))
{var state_35920__$1 = state_35920;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35920__$1,45,dchan);
} else
{if((state_val_35921 === 11))
{var inst_35817 = (state_35920[25]);var inst_35797 = (state_35920[17]);var inst_35817__$1 = cljs.core.seq.call(null,inst_35797);var state_35920__$1 = (function (){var statearr_35952 = state_35920;(statearr_35952[25] = inst_35817__$1);
return statearr_35952;
})();if(inst_35817__$1)
{var statearr_35953_36029 = state_35920__$1;(statearr_35953_36029[1] = 16);
} else
{var statearr_35954_36030 = state_35920__$1;(statearr_35954_36030[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 43))
{var state_35920__$1 = state_35920;var statearr_35955_36031 = state_35920__$1;(statearr_35955_36031[2] = null);
(statearr_35955_36031[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 12))
{var inst_35843 = (state_35920[2]);var state_35920__$1 = state_35920;var statearr_35956_36032 = state_35920__$1;(statearr_35956_36032[2] = inst_35843);
(statearr_35956_36032[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 44))
{var inst_35913 = (state_35920[2]);var state_35920__$1 = (function (){var statearr_35957 = state_35920;(statearr_35957[26] = inst_35913);
return statearr_35957;
})();var statearr_35958_36033 = state_35920__$1;(statearr_35958_36033[2] = null);
(statearr_35958_36033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 13))
{var inst_35807 = (state_35920[24]);var inst_35810 = cljs.core.async.close_BANG_.call(null,inst_35807);var state_35920__$1 = state_35920;var statearr_35959_36034 = state_35920__$1;(statearr_35959_36034[2] = inst_35810);
(statearr_35959_36034[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 45))
{var inst_35910 = (state_35920[2]);var state_35920__$1 = state_35920;var statearr_35963_36035 = state_35920__$1;(statearr_35963_36035[2] = inst_35910);
(statearr_35963_36035[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 14))
{var state_35920__$1 = state_35920;var statearr_35964_36036 = state_35920__$1;(statearr_35964_36036[2] = null);
(statearr_35964_36036[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 15))
{var inst_35800 = (state_35920[14]);var inst_35799 = (state_35920[15]);var inst_35798 = (state_35920[16]);var inst_35797 = (state_35920[17]);var inst_35813 = (state_35920[2]);var inst_35814 = (inst_35800 + 1);var tmp35960 = inst_35799;var tmp35961 = inst_35798;var tmp35962 = inst_35797;var inst_35797__$1 = tmp35962;var inst_35798__$1 = tmp35961;var inst_35799__$1 = tmp35960;var inst_35800__$1 = inst_35814;var state_35920__$1 = (function (){var statearr_35965 = state_35920;(statearr_35965[27] = inst_35813);
(statearr_35965[14] = inst_35800__$1);
(statearr_35965[15] = inst_35799__$1);
(statearr_35965[16] = inst_35798__$1);
(statearr_35965[17] = inst_35797__$1);
return statearr_35965;
})();var statearr_35966_36037 = state_35920__$1;(statearr_35966_36037[2] = null);
(statearr_35966_36037[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 16))
{var inst_35817 = (state_35920[25]);var inst_35819 = cljs.core.chunked_seq_QMARK_.call(null,inst_35817);var state_35920__$1 = state_35920;if(inst_35819)
{var statearr_35967_36038 = state_35920__$1;(statearr_35967_36038[1] = 19);
} else
{var statearr_35968_36039 = state_35920__$1;(statearr_35968_36039[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 17))
{var state_35920__$1 = state_35920;var statearr_35969_36040 = state_35920__$1;(statearr_35969_36040[2] = null);
(statearr_35969_36040[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 18))
{var inst_35841 = (state_35920[2]);var state_35920__$1 = state_35920;var statearr_35970_36041 = state_35920__$1;(statearr_35970_36041[2] = inst_35841);
(statearr_35970_36041[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 19))
{var inst_35817 = (state_35920[25]);var inst_35821 = cljs.core.chunk_first.call(null,inst_35817);var inst_35822 = cljs.core.chunk_rest.call(null,inst_35817);var inst_35823 = cljs.core.count.call(null,inst_35821);var inst_35797 = inst_35822;var inst_35798 = inst_35821;var inst_35799 = inst_35823;var inst_35800 = 0;var state_35920__$1 = (function (){var statearr_35971 = state_35920;(statearr_35971[14] = inst_35800);
(statearr_35971[15] = inst_35799);
(statearr_35971[16] = inst_35798);
(statearr_35971[17] = inst_35797);
return statearr_35971;
})();var statearr_35972_36042 = state_35920__$1;(statearr_35972_36042[2] = null);
(statearr_35972_36042[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 20))
{var inst_35817 = (state_35920[25]);var inst_35827 = cljs.core.first.call(null,inst_35817);var inst_35828 = cljs.core.nth.call(null,inst_35827,0,null);var inst_35829 = cljs.core.nth.call(null,inst_35827,1,null);var state_35920__$1 = (function (){var statearr_35973 = state_35920;(statearr_35973[28] = inst_35828);
return statearr_35973;
})();if(cljs.core.truth_(inst_35829))
{var statearr_35974_36043 = state_35920__$1;(statearr_35974_36043[1] = 22);
} else
{var statearr_35975_36044 = state_35920__$1;(statearr_35975_36044[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 21))
{var inst_35838 = (state_35920[2]);var state_35920__$1 = state_35920;var statearr_35976_36045 = state_35920__$1;(statearr_35976_36045[2] = inst_35838);
(statearr_35976_36045[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 22))
{var inst_35828 = (state_35920[28]);var inst_35831 = cljs.core.async.close_BANG_.call(null,inst_35828);var state_35920__$1 = state_35920;var statearr_35977_36046 = state_35920__$1;(statearr_35977_36046[2] = inst_35831);
(statearr_35977_36046[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 23))
{var state_35920__$1 = state_35920;var statearr_35978_36047 = state_35920__$1;(statearr_35978_36047[2] = null);
(statearr_35978_36047[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 24))
{var inst_35817 = (state_35920[25]);var inst_35834 = (state_35920[2]);var inst_35835 = cljs.core.next.call(null,inst_35817);var inst_35797 = inst_35835;var inst_35798 = null;var inst_35799 = 0;var inst_35800 = 0;var state_35920__$1 = (function (){var statearr_35979 = state_35920;(statearr_35979[14] = inst_35800);
(statearr_35979[15] = inst_35799);
(statearr_35979[29] = inst_35834);
(statearr_35979[16] = inst_35798);
(statearr_35979[17] = inst_35797);
return statearr_35979;
})();var statearr_35980_36048 = state_35920__$1;(statearr_35980_36048[2] = null);
(statearr_35980_36048[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 25))
{var inst_35859 = (state_35920[12]);var inst_35858 = (state_35920[13]);var inst_35861 = (inst_35859 < inst_35858);var inst_35862 = inst_35861;var state_35920__$1 = state_35920;if(cljs.core.truth_(inst_35862))
{var statearr_35981_36049 = state_35920__$1;(statearr_35981_36049[1] = 27);
} else
{var statearr_35982_36050 = state_35920__$1;(statearr_35982_36050[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 26))
{var inst_35848 = (state_35920[19]);var inst_35906 = (state_35920[2]);var inst_35907 = cljs.core.seq.call(null,inst_35848);var state_35920__$1 = (function (){var statearr_35983 = state_35920;(statearr_35983[30] = inst_35906);
return statearr_35983;
})();if(inst_35907)
{var statearr_35984_36051 = state_35920__$1;(statearr_35984_36051[1] = 42);
} else
{var statearr_35985_36052 = state_35920__$1;(statearr_35985_36052[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 27))
{var inst_35857 = (state_35920[11]);var inst_35859 = (state_35920[12]);var inst_35864 = cljs.core._nth.call(null,inst_35857,inst_35859);var state_35920__$1 = (function (){var statearr_35986 = state_35920;(statearr_35986[7] = inst_35864);
return statearr_35986;
})();var statearr_35987_36053 = state_35920__$1;(statearr_35987_36053[2] = null);
(statearr_35987_36053[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 28))
{var inst_35856 = (state_35920[10]);var inst_35877 = (state_35920[9]);var inst_35877__$1 = cljs.core.seq.call(null,inst_35856);var state_35920__$1 = (function (){var statearr_35991 = state_35920;(statearr_35991[9] = inst_35877__$1);
return statearr_35991;
})();if(inst_35877__$1)
{var statearr_35992_36054 = state_35920__$1;(statearr_35992_36054[1] = 33);
} else
{var statearr_35993_36055 = state_35920__$1;(statearr_35993_36055[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 29))
{var inst_35904 = (state_35920[2]);var state_35920__$1 = state_35920;var statearr_35994_36056 = state_35920__$1;(statearr_35994_36056[2] = inst_35904);
(statearr_35994_36056[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 30))
{var inst_35856 = (state_35920[10]);var inst_35857 = (state_35920[11]);var inst_35859 = (state_35920[12]);var inst_35858 = (state_35920[13]);var inst_35873 = (state_35920[2]);var inst_35874 = (inst_35859 + 1);var tmp35988 = inst_35856;var tmp35989 = inst_35857;var tmp35990 = inst_35858;var inst_35856__$1 = tmp35988;var inst_35857__$1 = tmp35989;var inst_35858__$1 = tmp35990;var inst_35859__$1 = inst_35874;var state_35920__$1 = (function (){var statearr_35995 = state_35920;(statearr_35995[10] = inst_35856__$1);
(statearr_35995[11] = inst_35857__$1);
(statearr_35995[12] = inst_35859__$1);
(statearr_35995[13] = inst_35858__$1);
(statearr_35995[31] = inst_35873);
return statearr_35995;
})();var statearr_35996_36057 = state_35920__$1;(statearr_35996_36057[2] = null);
(statearr_35996_36057[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35921 === 31))
{var inst_35864 = (state_35920[7]);var inst_35865 = (state_35920[2]);var inst_35866 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35867 = cljs.core.async.untap_STAR_.call(null,m,inst_35864);var state_35920__$1 = (function (){var statearr_35997 = state_35920;(statearr_35997[32] = inst_35865);
(statearr_35997[33] = inst_35866);
return statearr_35997;
})();var statearr_35998_36058 = state_35920__$1;(statearr_35998_36058[2] = inst_35867);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35920__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36002 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36002[0] = state_machine__5507__auto__);
(statearr_36002[1] = 1);
return statearr_36002;
});
var state_machine__5507__auto____1 = (function (state_35920){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35920);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36003){if((e36003 instanceof Object))
{var ex__5510__auto__ = e36003;var statearr_36004_36059 = state_35920;(statearr_36004_36059[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35920);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36060 = state_35920;
state_35920 = G__36060;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35920){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35920);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36005 = f__5522__auto__.call(null);(statearr_36005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36006);
return statearr_36005;
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
cljs.core.async.Mix = (function (){var obj36062 = {};return obj36062;
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
;var m = (function (){if(typeof cljs.core.async.t36172 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36172 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36173){
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
this.meta36173 = meta36173;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36172.cljs$lang$type = true;
cljs.core.async.t36172.cljs$lang$ctorStr = "cljs.core.async/t36172";
cljs.core.async.t36172.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36172");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36172.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36172.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36172.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36172.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36172.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36172.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36172.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36172.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36172.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36174){var self__ = this;
var _36174__$1 = this;return self__.meta36173;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36174,meta36173__$1){var self__ = this;
var _36174__$1 = this;return (new cljs.core.async.t36172(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36173__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36172 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36172(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36173){return (new cljs.core.async.t36172(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36173));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36172(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___36281 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36239){var state_val_36240 = (state_36239[1]);if((state_val_36240 === 1))
{var inst_36178 = (state_36239[7]);var inst_36178__$1 = calc_state.call(null);var inst_36179 = cljs.core.seq_QMARK_.call(null,inst_36178__$1);var state_36239__$1 = (function (){var statearr_36241 = state_36239;(statearr_36241[7] = inst_36178__$1);
return statearr_36241;
})();if(inst_36179)
{var statearr_36242_36282 = state_36239__$1;(statearr_36242_36282[1] = 2);
} else
{var statearr_36243_36283 = state_36239__$1;(statearr_36243_36283[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 2))
{var inst_36178 = (state_36239[7]);var inst_36181 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36178);var state_36239__$1 = state_36239;var statearr_36244_36284 = state_36239__$1;(statearr_36244_36284[2] = inst_36181);
(statearr_36244_36284[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 3))
{var inst_36178 = (state_36239[7]);var state_36239__$1 = state_36239;var statearr_36245_36285 = state_36239__$1;(statearr_36245_36285[2] = inst_36178);
(statearr_36245_36285[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 4))
{var inst_36178 = (state_36239[7]);var inst_36184 = (state_36239[2]);var inst_36185 = cljs.core.get.call(null,inst_36184,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36186 = cljs.core.get.call(null,inst_36184,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36187 = cljs.core.get.call(null,inst_36184,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36188 = inst_36178;var state_36239__$1 = (function (){var statearr_36246 = state_36239;(statearr_36246[8] = inst_36187);
(statearr_36246[9] = inst_36188);
(statearr_36246[10] = inst_36186);
(statearr_36246[11] = inst_36185);
return statearr_36246;
})();var statearr_36247_36286 = state_36239__$1;(statearr_36247_36286[2] = null);
(statearr_36247_36286[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 5))
{var inst_36188 = (state_36239[9]);var inst_36191 = cljs.core.seq_QMARK_.call(null,inst_36188);var state_36239__$1 = state_36239;if(inst_36191)
{var statearr_36248_36287 = state_36239__$1;(statearr_36248_36287[1] = 7);
} else
{var statearr_36249_36288 = state_36239__$1;(statearr_36249_36288[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 6))
{var inst_36237 = (state_36239[2]);var state_36239__$1 = state_36239;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36239__$1,inst_36237);
} else
{if((state_val_36240 === 7))
{var inst_36188 = (state_36239[9]);var inst_36193 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36188);var state_36239__$1 = state_36239;var statearr_36250_36289 = state_36239__$1;(statearr_36250_36289[2] = inst_36193);
(statearr_36250_36289[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 8))
{var inst_36188 = (state_36239[9]);var state_36239__$1 = state_36239;var statearr_36251_36290 = state_36239__$1;(statearr_36251_36290[2] = inst_36188);
(statearr_36251_36290[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 9))
{var inst_36196 = (state_36239[12]);var inst_36196__$1 = (state_36239[2]);var inst_36197 = cljs.core.get.call(null,inst_36196__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36198 = cljs.core.get.call(null,inst_36196__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36199 = cljs.core.get.call(null,inst_36196__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36239__$1 = (function (){var statearr_36252 = state_36239;(statearr_36252[13] = inst_36198);
(statearr_36252[14] = inst_36199);
(statearr_36252[12] = inst_36196__$1);
return statearr_36252;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36239__$1,10,inst_36197);
} else
{if((state_val_36240 === 10))
{var inst_36204 = (state_36239[15]);var inst_36203 = (state_36239[16]);var inst_36202 = (state_36239[2]);var inst_36203__$1 = cljs.core.nth.call(null,inst_36202,0,null);var inst_36204__$1 = cljs.core.nth.call(null,inst_36202,1,null);var inst_36205 = (inst_36203__$1 == null);var inst_36206 = cljs.core._EQ_.call(null,inst_36204__$1,change);var inst_36207 = (inst_36205) || (inst_36206);var state_36239__$1 = (function (){var statearr_36253 = state_36239;(statearr_36253[15] = inst_36204__$1);
(statearr_36253[16] = inst_36203__$1);
return statearr_36253;
})();if(cljs.core.truth_(inst_36207))
{var statearr_36254_36291 = state_36239__$1;(statearr_36254_36291[1] = 11);
} else
{var statearr_36255_36292 = state_36239__$1;(statearr_36255_36292[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 11))
{var inst_36203 = (state_36239[16]);var inst_36209 = (inst_36203 == null);var state_36239__$1 = state_36239;if(cljs.core.truth_(inst_36209))
{var statearr_36256_36293 = state_36239__$1;(statearr_36256_36293[1] = 14);
} else
{var statearr_36257_36294 = state_36239__$1;(statearr_36257_36294[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 12))
{var inst_36199 = (state_36239[14]);var inst_36218 = (state_36239[17]);var inst_36204 = (state_36239[15]);var inst_36218__$1 = inst_36199.call(null,inst_36204);var state_36239__$1 = (function (){var statearr_36258 = state_36239;(statearr_36258[17] = inst_36218__$1);
return statearr_36258;
})();if(cljs.core.truth_(inst_36218__$1))
{var statearr_36259_36295 = state_36239__$1;(statearr_36259_36295[1] = 17);
} else
{var statearr_36260_36296 = state_36239__$1;(statearr_36260_36296[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 13))
{var inst_36235 = (state_36239[2]);var state_36239__$1 = state_36239;var statearr_36261_36297 = state_36239__$1;(statearr_36261_36297[2] = inst_36235);
(statearr_36261_36297[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 14))
{var inst_36204 = (state_36239[15]);var inst_36211 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36204);var state_36239__$1 = state_36239;var statearr_36262_36298 = state_36239__$1;(statearr_36262_36298[2] = inst_36211);
(statearr_36262_36298[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 15))
{var state_36239__$1 = state_36239;var statearr_36263_36299 = state_36239__$1;(statearr_36263_36299[2] = null);
(statearr_36263_36299[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 16))
{var inst_36214 = (state_36239[2]);var inst_36215 = calc_state.call(null);var inst_36188 = inst_36215;var state_36239__$1 = (function (){var statearr_36264 = state_36239;(statearr_36264[9] = inst_36188);
(statearr_36264[18] = inst_36214);
return statearr_36264;
})();var statearr_36265_36300 = state_36239__$1;(statearr_36265_36300[2] = null);
(statearr_36265_36300[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 17))
{var inst_36218 = (state_36239[17]);var state_36239__$1 = state_36239;var statearr_36266_36301 = state_36239__$1;(statearr_36266_36301[2] = inst_36218);
(statearr_36266_36301[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 18))
{var inst_36198 = (state_36239[13]);var inst_36199 = (state_36239[14]);var inst_36204 = (state_36239[15]);var inst_36221 = cljs.core.empty_QMARK_.call(null,inst_36199);var inst_36222 = inst_36198.call(null,inst_36204);var inst_36223 = cljs.core.not.call(null,inst_36222);var inst_36224 = (inst_36221) && (inst_36223);var state_36239__$1 = state_36239;var statearr_36267_36302 = state_36239__$1;(statearr_36267_36302[2] = inst_36224);
(statearr_36267_36302[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 19))
{var inst_36226 = (state_36239[2]);var state_36239__$1 = state_36239;if(cljs.core.truth_(inst_36226))
{var statearr_36268_36303 = state_36239__$1;(statearr_36268_36303[1] = 20);
} else
{var statearr_36269_36304 = state_36239__$1;(statearr_36269_36304[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 20))
{var inst_36203 = (state_36239[16]);var state_36239__$1 = state_36239;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36239__$1,23,out,inst_36203);
} else
{if((state_val_36240 === 21))
{var state_36239__$1 = state_36239;var statearr_36270_36305 = state_36239__$1;(statearr_36270_36305[2] = null);
(statearr_36270_36305[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 22))
{var inst_36196 = (state_36239[12]);var inst_36232 = (state_36239[2]);var inst_36188 = inst_36196;var state_36239__$1 = (function (){var statearr_36271 = state_36239;(statearr_36271[9] = inst_36188);
(statearr_36271[19] = inst_36232);
return statearr_36271;
})();var statearr_36272_36306 = state_36239__$1;(statearr_36272_36306[2] = null);
(statearr_36272_36306[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36240 === 23))
{var inst_36229 = (state_36239[2]);var state_36239__$1 = state_36239;var statearr_36273_36307 = state_36239__$1;(statearr_36273_36307[2] = inst_36229);
(statearr_36273_36307[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_36277 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36277[0] = state_machine__5507__auto__);
(statearr_36277[1] = 1);
return statearr_36277;
});
var state_machine__5507__auto____1 = (function (state_36239){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36239);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36278){if((e36278 instanceof Object))
{var ex__5510__auto__ = e36278;var statearr_36279_36308 = state_36239;(statearr_36279_36308[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36239);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36278;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36309 = state_36239;
state_36239 = G__36309;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36239){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36239);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36280 = f__5522__auto__.call(null);(statearr_36280[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36281);
return statearr_36280;
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
cljs.core.async.Pub = (function (){var obj36311 = {};return obj36311;
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
return (function (p1__36312_SHARP_){if(cljs.core.truth_(p1__36312_SHARP_.call(null,topic)))
{return p1__36312_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36312_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36437 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36437 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36438){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36438 = meta36438;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36437.cljs$lang$type = true;
cljs.core.async.t36437.cljs$lang$ctorStr = "cljs.core.async/t36437";
cljs.core.async.t36437.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36437");
});})(mults,ensure_mult))
;
cljs.core.async.t36437.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36437.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36437.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36437.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36437.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36437.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36437.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36437.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36439){var self__ = this;
var _36439__$1 = this;return self__.meta36438;
});})(mults,ensure_mult))
;
cljs.core.async.t36437.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36439,meta36438__$1){var self__ = this;
var _36439__$1 = this;return (new cljs.core.async.t36437(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36438__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36437 = ((function (mults,ensure_mult){
return (function __GT_t36437(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36438){return (new cljs.core.async.t36437(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36438));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36437(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36561 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36513){var state_val_36514 = (state_36513[1]);if((state_val_36514 === 1))
{var state_36513__$1 = state_36513;var statearr_36515_36562 = state_36513__$1;(statearr_36515_36562[2] = null);
(statearr_36515_36562[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 2))
{var state_36513__$1 = state_36513;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36513__$1,4,ch);
} else
{if((state_val_36514 === 3))
{var inst_36511 = (state_36513[2]);var state_36513__$1 = state_36513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36513__$1,inst_36511);
} else
{if((state_val_36514 === 4))
{var inst_36442 = (state_36513[7]);var inst_36442__$1 = (state_36513[2]);var inst_36443 = (inst_36442__$1 == null);var state_36513__$1 = (function (){var statearr_36516 = state_36513;(statearr_36516[7] = inst_36442__$1);
return statearr_36516;
})();if(cljs.core.truth_(inst_36443))
{var statearr_36517_36563 = state_36513__$1;(statearr_36517_36563[1] = 5);
} else
{var statearr_36518_36564 = state_36513__$1;(statearr_36518_36564[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 5))
{var inst_36449 = cljs.core.deref.call(null,mults);var inst_36450 = cljs.core.vals.call(null,inst_36449);var inst_36451 = cljs.core.seq.call(null,inst_36450);var inst_36452 = inst_36451;var inst_36453 = null;var inst_36454 = 0;var inst_36455 = 0;var state_36513__$1 = (function (){var statearr_36519 = state_36513;(statearr_36519[8] = inst_36455);
(statearr_36519[9] = inst_36453);
(statearr_36519[10] = inst_36454);
(statearr_36519[11] = inst_36452);
return statearr_36519;
})();var statearr_36520_36565 = state_36513__$1;(statearr_36520_36565[2] = null);
(statearr_36520_36565[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 6))
{var inst_36490 = (state_36513[12]);var inst_36442 = (state_36513[7]);var inst_36492 = (state_36513[13]);var inst_36490__$1 = topic_fn.call(null,inst_36442);var inst_36491 = cljs.core.deref.call(null,mults);var inst_36492__$1 = cljs.core.get.call(null,inst_36491,inst_36490__$1);var state_36513__$1 = (function (){var statearr_36521 = state_36513;(statearr_36521[12] = inst_36490__$1);
(statearr_36521[13] = inst_36492__$1);
return statearr_36521;
})();if(cljs.core.truth_(inst_36492__$1))
{var statearr_36522_36566 = state_36513__$1;(statearr_36522_36566[1] = 19);
} else
{var statearr_36523_36567 = state_36513__$1;(statearr_36523_36567[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 7))
{var inst_36509 = (state_36513[2]);var state_36513__$1 = state_36513;var statearr_36524_36568 = state_36513__$1;(statearr_36524_36568[2] = inst_36509);
(statearr_36524_36568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 8))
{var inst_36455 = (state_36513[8]);var inst_36454 = (state_36513[10]);var inst_36457 = (inst_36455 < inst_36454);var inst_36458 = inst_36457;var state_36513__$1 = state_36513;if(cljs.core.truth_(inst_36458))
{var statearr_36528_36569 = state_36513__$1;(statearr_36528_36569[1] = 10);
} else
{var statearr_36529_36570 = state_36513__$1;(statearr_36529_36570[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 9))
{var inst_36488 = (state_36513[2]);var state_36513__$1 = state_36513;var statearr_36530_36571 = state_36513__$1;(statearr_36530_36571[2] = inst_36488);
(statearr_36530_36571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 10))
{var inst_36455 = (state_36513[8]);var inst_36453 = (state_36513[9]);var inst_36454 = (state_36513[10]);var inst_36452 = (state_36513[11]);var inst_36460 = cljs.core._nth.call(null,inst_36453,inst_36455);var inst_36461 = cljs.core.async.muxch_STAR_.call(null,inst_36460);var inst_36462 = cljs.core.async.close_BANG_.call(null,inst_36461);var inst_36463 = (inst_36455 + 1);var tmp36525 = inst_36453;var tmp36526 = inst_36454;var tmp36527 = inst_36452;var inst_36452__$1 = tmp36527;var inst_36453__$1 = tmp36525;var inst_36454__$1 = tmp36526;var inst_36455__$1 = inst_36463;var state_36513__$1 = (function (){var statearr_36531 = state_36513;(statearr_36531[14] = inst_36462);
(statearr_36531[8] = inst_36455__$1);
(statearr_36531[9] = inst_36453__$1);
(statearr_36531[10] = inst_36454__$1);
(statearr_36531[11] = inst_36452__$1);
return statearr_36531;
})();var statearr_36532_36572 = state_36513__$1;(statearr_36532_36572[2] = null);
(statearr_36532_36572[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 11))
{var inst_36466 = (state_36513[15]);var inst_36452 = (state_36513[11]);var inst_36466__$1 = cljs.core.seq.call(null,inst_36452);var state_36513__$1 = (function (){var statearr_36533 = state_36513;(statearr_36533[15] = inst_36466__$1);
return statearr_36533;
})();if(inst_36466__$1)
{var statearr_36534_36573 = state_36513__$1;(statearr_36534_36573[1] = 13);
} else
{var statearr_36535_36574 = state_36513__$1;(statearr_36535_36574[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 12))
{var inst_36486 = (state_36513[2]);var state_36513__$1 = state_36513;var statearr_36536_36575 = state_36513__$1;(statearr_36536_36575[2] = inst_36486);
(statearr_36536_36575[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 13))
{var inst_36466 = (state_36513[15]);var inst_36468 = cljs.core.chunked_seq_QMARK_.call(null,inst_36466);var state_36513__$1 = state_36513;if(inst_36468)
{var statearr_36537_36576 = state_36513__$1;(statearr_36537_36576[1] = 16);
} else
{var statearr_36538_36577 = state_36513__$1;(statearr_36538_36577[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 14))
{var state_36513__$1 = state_36513;var statearr_36539_36578 = state_36513__$1;(statearr_36539_36578[2] = null);
(statearr_36539_36578[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 15))
{var inst_36484 = (state_36513[2]);var state_36513__$1 = state_36513;var statearr_36540_36579 = state_36513__$1;(statearr_36540_36579[2] = inst_36484);
(statearr_36540_36579[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 16))
{var inst_36466 = (state_36513[15]);var inst_36470 = cljs.core.chunk_first.call(null,inst_36466);var inst_36471 = cljs.core.chunk_rest.call(null,inst_36466);var inst_36472 = cljs.core.count.call(null,inst_36470);var inst_36452 = inst_36471;var inst_36453 = inst_36470;var inst_36454 = inst_36472;var inst_36455 = 0;var state_36513__$1 = (function (){var statearr_36541 = state_36513;(statearr_36541[8] = inst_36455);
(statearr_36541[9] = inst_36453);
(statearr_36541[10] = inst_36454);
(statearr_36541[11] = inst_36452);
return statearr_36541;
})();var statearr_36542_36580 = state_36513__$1;(statearr_36542_36580[2] = null);
(statearr_36542_36580[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 17))
{var inst_36466 = (state_36513[15]);var inst_36475 = cljs.core.first.call(null,inst_36466);var inst_36476 = cljs.core.async.muxch_STAR_.call(null,inst_36475);var inst_36477 = cljs.core.async.close_BANG_.call(null,inst_36476);var inst_36478 = cljs.core.next.call(null,inst_36466);var inst_36452 = inst_36478;var inst_36453 = null;var inst_36454 = 0;var inst_36455 = 0;var state_36513__$1 = (function (){var statearr_36543 = state_36513;(statearr_36543[16] = inst_36477);
(statearr_36543[8] = inst_36455);
(statearr_36543[9] = inst_36453);
(statearr_36543[10] = inst_36454);
(statearr_36543[11] = inst_36452);
return statearr_36543;
})();var statearr_36544_36581 = state_36513__$1;(statearr_36544_36581[2] = null);
(statearr_36544_36581[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 18))
{var inst_36481 = (state_36513[2]);var state_36513__$1 = state_36513;var statearr_36545_36582 = state_36513__$1;(statearr_36545_36582[2] = inst_36481);
(statearr_36545_36582[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 19))
{var state_36513__$1 = state_36513;var statearr_36546_36583 = state_36513__$1;(statearr_36546_36583[2] = null);
(statearr_36546_36583[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 20))
{var state_36513__$1 = state_36513;var statearr_36547_36584 = state_36513__$1;(statearr_36547_36584[2] = null);
(statearr_36547_36584[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 21))
{var inst_36506 = (state_36513[2]);var state_36513__$1 = (function (){var statearr_36548 = state_36513;(statearr_36548[17] = inst_36506);
return statearr_36548;
})();var statearr_36549_36585 = state_36513__$1;(statearr_36549_36585[2] = null);
(statearr_36549_36585[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 22))
{var inst_36503 = (state_36513[2]);var state_36513__$1 = state_36513;var statearr_36550_36586 = state_36513__$1;(statearr_36550_36586[2] = inst_36503);
(statearr_36550_36586[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 23))
{var inst_36490 = (state_36513[12]);var inst_36494 = (state_36513[2]);var inst_36495 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36490);var state_36513__$1 = (function (){var statearr_36551 = state_36513;(statearr_36551[18] = inst_36494);
return statearr_36551;
})();var statearr_36552_36587 = state_36513__$1;(statearr_36552_36587[2] = inst_36495);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36513__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36514 === 24))
{var inst_36442 = (state_36513[7]);var inst_36492 = (state_36513[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36513,23,Object,null,22);var inst_36499 = cljs.core.async.muxch_STAR_.call(null,inst_36492);var state_36513__$1 = state_36513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36513__$1,25,inst_36499,inst_36442);
} else
{if((state_val_36514 === 25))
{var inst_36501 = (state_36513[2]);var state_36513__$1 = state_36513;var statearr_36553_36588 = state_36513__$1;(statearr_36553_36588[2] = inst_36501);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36513__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36557 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36557[0] = state_machine__5507__auto__);
(statearr_36557[1] = 1);
return statearr_36557;
});
var state_machine__5507__auto____1 = (function (state_36513){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36513);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36558){if((e36558 instanceof Object))
{var ex__5510__auto__ = e36558;var statearr_36559_36589 = state_36513;(statearr_36559_36589[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36513);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36558;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36590 = state_36513;
state_36513 = G__36590;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36513){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36560 = f__5522__auto__.call(null);(statearr_36560[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36561);
return statearr_36560;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36727 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36697){var state_val_36698 = (state_36697[1]);if((state_val_36698 === 1))
{var state_36697__$1 = state_36697;var statearr_36699_36728 = state_36697__$1;(statearr_36699_36728[2] = null);
(statearr_36699_36728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 2))
{var inst_36660 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36661 = 0;var state_36697__$1 = (function (){var statearr_36700 = state_36697;(statearr_36700[7] = inst_36660);
(statearr_36700[8] = inst_36661);
return statearr_36700;
})();var statearr_36701_36729 = state_36697__$1;(statearr_36701_36729[2] = null);
(statearr_36701_36729[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 3))
{var inst_36695 = (state_36697[2]);var state_36697__$1 = state_36697;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36697__$1,inst_36695);
} else
{if((state_val_36698 === 4))
{var inst_36661 = (state_36697[8]);var inst_36663 = (inst_36661 < cnt);var state_36697__$1 = state_36697;if(cljs.core.truth_(inst_36663))
{var statearr_36702_36730 = state_36697__$1;(statearr_36702_36730[1] = 6);
} else
{var statearr_36703_36731 = state_36697__$1;(statearr_36703_36731[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 5))
{var inst_36681 = (state_36697[2]);var state_36697__$1 = (function (){var statearr_36704 = state_36697;(statearr_36704[9] = inst_36681);
return statearr_36704;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36697__$1,12,dchan);
} else
{if((state_val_36698 === 6))
{var state_36697__$1 = state_36697;var statearr_36705_36732 = state_36697__$1;(statearr_36705_36732[2] = null);
(statearr_36705_36732[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 7))
{var state_36697__$1 = state_36697;var statearr_36706_36733 = state_36697__$1;(statearr_36706_36733[2] = null);
(statearr_36706_36733[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 8))
{var inst_36679 = (state_36697[2]);var state_36697__$1 = state_36697;var statearr_36707_36734 = state_36697__$1;(statearr_36707_36734[2] = inst_36679);
(statearr_36707_36734[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 9))
{var inst_36661 = (state_36697[8]);var inst_36674 = (state_36697[2]);var inst_36675 = (inst_36661 + 1);var inst_36661__$1 = inst_36675;var state_36697__$1 = (function (){var statearr_36708 = state_36697;(statearr_36708[8] = inst_36661__$1);
(statearr_36708[10] = inst_36674);
return statearr_36708;
})();var statearr_36709_36735 = state_36697__$1;(statearr_36709_36735[2] = null);
(statearr_36709_36735[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 10))
{var inst_36665 = (state_36697[2]);var inst_36666 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36697__$1 = (function (){var statearr_36710 = state_36697;(statearr_36710[11] = inst_36665);
return statearr_36710;
})();var statearr_36711_36736 = state_36697__$1;(statearr_36711_36736[2] = inst_36666);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36697__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 11))
{var inst_36661 = (state_36697[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36697,10,Object,null,9);var inst_36670 = chs__$1.call(null,inst_36661);var inst_36671 = done.call(null,inst_36661);var inst_36672 = cljs.core.async.take_BANG_.call(null,inst_36670,inst_36671);var state_36697__$1 = state_36697;var statearr_36712_36737 = state_36697__$1;(statearr_36712_36737[2] = inst_36672);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36697__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 12))
{var inst_36683 = (state_36697[12]);var inst_36683__$1 = (state_36697[2]);var inst_36684 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36683__$1);var state_36697__$1 = (function (){var statearr_36713 = state_36697;(statearr_36713[12] = inst_36683__$1);
return statearr_36713;
})();if(cljs.core.truth_(inst_36684))
{var statearr_36714_36738 = state_36697__$1;(statearr_36714_36738[1] = 13);
} else
{var statearr_36715_36739 = state_36697__$1;(statearr_36715_36739[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 13))
{var inst_36686 = cljs.core.async.close_BANG_.call(null,out);var state_36697__$1 = state_36697;var statearr_36716_36740 = state_36697__$1;(statearr_36716_36740[2] = inst_36686);
(statearr_36716_36740[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 14))
{var inst_36683 = (state_36697[12]);var inst_36688 = cljs.core.apply.call(null,f,inst_36683);var state_36697__$1 = state_36697;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36697__$1,16,out,inst_36688);
} else
{if((state_val_36698 === 15))
{var inst_36693 = (state_36697[2]);var state_36697__$1 = state_36697;var statearr_36717_36741 = state_36697__$1;(statearr_36717_36741[2] = inst_36693);
(statearr_36717_36741[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36698 === 16))
{var inst_36690 = (state_36697[2]);var state_36697__$1 = (function (){var statearr_36718 = state_36697;(statearr_36718[13] = inst_36690);
return statearr_36718;
})();var statearr_36719_36742 = state_36697__$1;(statearr_36719_36742[2] = null);
(statearr_36719_36742[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36723[0] = state_machine__5507__auto__);
(statearr_36723[1] = 1);
return statearr_36723;
});
var state_machine__5507__auto____1 = (function (state_36697){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36697);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36724){if((e36724 instanceof Object))
{var ex__5510__auto__ = e36724;var statearr_36725_36743 = state_36697;(statearr_36725_36743[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36697);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36744 = state_36697;
state_36697 = G__36744;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36697){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36726 = f__5522__auto__.call(null);(statearr_36726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36727);
return statearr_36726;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36852 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36828){var state_val_36829 = (state_36828[1]);if((state_val_36829 === 1))
{var inst_36799 = cljs.core.vec.call(null,chs);var inst_36800 = inst_36799;var state_36828__$1 = (function (){var statearr_36830 = state_36828;(statearr_36830[7] = inst_36800);
return statearr_36830;
})();var statearr_36831_36853 = state_36828__$1;(statearr_36831_36853[2] = null);
(statearr_36831_36853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36829 === 2))
{var inst_36800 = (state_36828[7]);var inst_36802 = cljs.core.count.call(null,inst_36800);var inst_36803 = (inst_36802 > 0);var state_36828__$1 = state_36828;if(cljs.core.truth_(inst_36803))
{var statearr_36832_36854 = state_36828__$1;(statearr_36832_36854[1] = 4);
} else
{var statearr_36833_36855 = state_36828__$1;(statearr_36833_36855[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36829 === 3))
{var inst_36826 = (state_36828[2]);var state_36828__$1 = state_36828;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36828__$1,inst_36826);
} else
{if((state_val_36829 === 4))
{var inst_36800 = (state_36828[7]);var state_36828__$1 = state_36828;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36828__$1,7,inst_36800);
} else
{if((state_val_36829 === 5))
{var inst_36822 = cljs.core.async.close_BANG_.call(null,out);var state_36828__$1 = state_36828;var statearr_36834_36856 = state_36828__$1;(statearr_36834_36856[2] = inst_36822);
(statearr_36834_36856[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36829 === 6))
{var inst_36824 = (state_36828[2]);var state_36828__$1 = state_36828;var statearr_36835_36857 = state_36828__$1;(statearr_36835_36857[2] = inst_36824);
(statearr_36835_36857[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36829 === 7))
{var inst_36807 = (state_36828[8]);var inst_36808 = (state_36828[9]);var inst_36807__$1 = (state_36828[2]);var inst_36808__$1 = cljs.core.nth.call(null,inst_36807__$1,0,null);var inst_36809 = cljs.core.nth.call(null,inst_36807__$1,1,null);var inst_36810 = (inst_36808__$1 == null);var state_36828__$1 = (function (){var statearr_36836 = state_36828;(statearr_36836[8] = inst_36807__$1);
(statearr_36836[9] = inst_36808__$1);
(statearr_36836[10] = inst_36809);
return statearr_36836;
})();if(cljs.core.truth_(inst_36810))
{var statearr_36837_36858 = state_36828__$1;(statearr_36837_36858[1] = 8);
} else
{var statearr_36838_36859 = state_36828__$1;(statearr_36838_36859[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36829 === 8))
{var inst_36807 = (state_36828[8]);var inst_36808 = (state_36828[9]);var inst_36809 = (state_36828[10]);var inst_36800 = (state_36828[7]);var inst_36812 = (function (){var c = inst_36809;var v = inst_36808;var vec__36805 = inst_36807;var cs = inst_36800;return ((function (c,v,vec__36805,cs,inst_36807,inst_36808,inst_36809,inst_36800,state_val_36829){
return (function (p1__36745_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36745_SHARP_);
});
;})(c,v,vec__36805,cs,inst_36807,inst_36808,inst_36809,inst_36800,state_val_36829))
})();var inst_36813 = cljs.core.filterv.call(null,inst_36812,inst_36800);var inst_36800__$1 = inst_36813;var state_36828__$1 = (function (){var statearr_36839 = state_36828;(statearr_36839[7] = inst_36800__$1);
return statearr_36839;
})();var statearr_36840_36860 = state_36828__$1;(statearr_36840_36860[2] = null);
(statearr_36840_36860[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36829 === 9))
{var inst_36808 = (state_36828[9]);var state_36828__$1 = state_36828;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36828__$1,11,out,inst_36808);
} else
{if((state_val_36829 === 10))
{var inst_36820 = (state_36828[2]);var state_36828__$1 = state_36828;var statearr_36842_36861 = state_36828__$1;(statearr_36842_36861[2] = inst_36820);
(statearr_36842_36861[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36829 === 11))
{var inst_36800 = (state_36828[7]);var inst_36817 = (state_36828[2]);var tmp36841 = inst_36800;var inst_36800__$1 = tmp36841;var state_36828__$1 = (function (){var statearr_36843 = state_36828;(statearr_36843[11] = inst_36817);
(statearr_36843[7] = inst_36800__$1);
return statearr_36843;
})();var statearr_36844_36862 = state_36828__$1;(statearr_36844_36862[2] = null);
(statearr_36844_36862[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36848 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36848[0] = state_machine__5507__auto__);
(statearr_36848[1] = 1);
return statearr_36848;
});
var state_machine__5507__auto____1 = (function (state_36828){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36828);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36849){if((e36849 instanceof Object))
{var ex__5510__auto__ = e36849;var statearr_36850_36863 = state_36828;(statearr_36850_36863[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36828);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36849;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36864 = state_36828;
state_36828 = G__36864;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36828){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36851 = f__5522__auto__.call(null);(statearr_36851[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36852);
return statearr_36851;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36957 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36934){var state_val_36935 = (state_36934[1]);if((state_val_36935 === 1))
{var inst_36911 = 0;var state_36934__$1 = (function (){var statearr_36936 = state_36934;(statearr_36936[7] = inst_36911);
return statearr_36936;
})();var statearr_36937_36958 = state_36934__$1;(statearr_36937_36958[2] = null);
(statearr_36937_36958[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36935 === 2))
{var inst_36911 = (state_36934[7]);var inst_36913 = (inst_36911 < n);var state_36934__$1 = state_36934;if(cljs.core.truth_(inst_36913))
{var statearr_36938_36959 = state_36934__$1;(statearr_36938_36959[1] = 4);
} else
{var statearr_36939_36960 = state_36934__$1;(statearr_36939_36960[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36935 === 3))
{var inst_36931 = (state_36934[2]);var inst_36932 = cljs.core.async.close_BANG_.call(null,out);var state_36934__$1 = (function (){var statearr_36940 = state_36934;(statearr_36940[8] = inst_36931);
return statearr_36940;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36934__$1,inst_36932);
} else
{if((state_val_36935 === 4))
{var state_36934__$1 = state_36934;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36934__$1,7,ch);
} else
{if((state_val_36935 === 5))
{var state_36934__$1 = state_36934;var statearr_36941_36961 = state_36934__$1;(statearr_36941_36961[2] = null);
(statearr_36941_36961[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36935 === 6))
{var inst_36929 = (state_36934[2]);var state_36934__$1 = state_36934;var statearr_36942_36962 = state_36934__$1;(statearr_36942_36962[2] = inst_36929);
(statearr_36942_36962[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36935 === 7))
{var inst_36916 = (state_36934[9]);var inst_36916__$1 = (state_36934[2]);var inst_36917 = (inst_36916__$1 == null);var inst_36918 = cljs.core.not.call(null,inst_36917);var state_36934__$1 = (function (){var statearr_36943 = state_36934;(statearr_36943[9] = inst_36916__$1);
return statearr_36943;
})();if(inst_36918)
{var statearr_36944_36963 = state_36934__$1;(statearr_36944_36963[1] = 8);
} else
{var statearr_36945_36964 = state_36934__$1;(statearr_36945_36964[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36935 === 8))
{var inst_36916 = (state_36934[9]);var state_36934__$1 = state_36934;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36934__$1,11,out,inst_36916);
} else
{if((state_val_36935 === 9))
{var state_36934__$1 = state_36934;var statearr_36946_36965 = state_36934__$1;(statearr_36946_36965[2] = null);
(statearr_36946_36965[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36935 === 10))
{var inst_36926 = (state_36934[2]);var state_36934__$1 = state_36934;var statearr_36947_36966 = state_36934__$1;(statearr_36947_36966[2] = inst_36926);
(statearr_36947_36966[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36935 === 11))
{var inst_36911 = (state_36934[7]);var inst_36921 = (state_36934[2]);var inst_36922 = (inst_36911 + 1);var inst_36911__$1 = inst_36922;var state_36934__$1 = (function (){var statearr_36948 = state_36934;(statearr_36948[10] = inst_36921);
(statearr_36948[7] = inst_36911__$1);
return statearr_36948;
})();var statearr_36949_36967 = state_36934__$1;(statearr_36949_36967[2] = null);
(statearr_36949_36967[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36953 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36953[0] = state_machine__5507__auto__);
(statearr_36953[1] = 1);
return statearr_36953;
});
var state_machine__5507__auto____1 = (function (state_36934){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36934);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36954){if((e36954 instanceof Object))
{var ex__5510__auto__ = e36954;var statearr_36955_36968 = state_36934;(statearr_36955_36968[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36934);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36954;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36969 = state_36934;
state_36934 = G__36969;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36934){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36934);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36956 = f__5522__auto__.call(null);(statearr_36956[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36957);
return statearr_36956;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37066 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37041){var state_val_37042 = (state_37041[1]);if((state_val_37042 === 1))
{var inst_37018 = null;var state_37041__$1 = (function (){var statearr_37043 = state_37041;(statearr_37043[7] = inst_37018);
return statearr_37043;
})();var statearr_37044_37067 = state_37041__$1;(statearr_37044_37067[2] = null);
(statearr_37044_37067[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37042 === 2))
{var state_37041__$1 = state_37041;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37041__$1,4,ch);
} else
{if((state_val_37042 === 3))
{var inst_37038 = (state_37041[2]);var inst_37039 = cljs.core.async.close_BANG_.call(null,out);var state_37041__$1 = (function (){var statearr_37045 = state_37041;(statearr_37045[8] = inst_37038);
return statearr_37045;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37041__$1,inst_37039);
} else
{if((state_val_37042 === 4))
{var inst_37021 = (state_37041[9]);var inst_37021__$1 = (state_37041[2]);var inst_37022 = (inst_37021__$1 == null);var inst_37023 = cljs.core.not.call(null,inst_37022);var state_37041__$1 = (function (){var statearr_37046 = state_37041;(statearr_37046[9] = inst_37021__$1);
return statearr_37046;
})();if(inst_37023)
{var statearr_37047_37068 = state_37041__$1;(statearr_37047_37068[1] = 5);
} else
{var statearr_37048_37069 = state_37041__$1;(statearr_37048_37069[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37042 === 5))
{var inst_37018 = (state_37041[7]);var inst_37021 = (state_37041[9]);var inst_37025 = cljs.core._EQ_.call(null,inst_37021,inst_37018);var state_37041__$1 = state_37041;if(inst_37025)
{var statearr_37049_37070 = state_37041__$1;(statearr_37049_37070[1] = 8);
} else
{var statearr_37050_37071 = state_37041__$1;(statearr_37050_37071[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37042 === 6))
{var state_37041__$1 = state_37041;var statearr_37052_37072 = state_37041__$1;(statearr_37052_37072[2] = null);
(statearr_37052_37072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37042 === 7))
{var inst_37036 = (state_37041[2]);var state_37041__$1 = state_37041;var statearr_37053_37073 = state_37041__$1;(statearr_37053_37073[2] = inst_37036);
(statearr_37053_37073[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37042 === 8))
{var inst_37018 = (state_37041[7]);var tmp37051 = inst_37018;var inst_37018__$1 = tmp37051;var state_37041__$1 = (function (){var statearr_37054 = state_37041;(statearr_37054[7] = inst_37018__$1);
return statearr_37054;
})();var statearr_37055_37074 = state_37041__$1;(statearr_37055_37074[2] = null);
(statearr_37055_37074[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37042 === 9))
{var inst_37021 = (state_37041[9]);var state_37041__$1 = state_37041;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37041__$1,11,out,inst_37021);
} else
{if((state_val_37042 === 10))
{var inst_37033 = (state_37041[2]);var state_37041__$1 = state_37041;var statearr_37056_37075 = state_37041__$1;(statearr_37056_37075[2] = inst_37033);
(statearr_37056_37075[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37042 === 11))
{var inst_37021 = (state_37041[9]);var inst_37030 = (state_37041[2]);var inst_37018 = inst_37021;var state_37041__$1 = (function (){var statearr_37057 = state_37041;(statearr_37057[10] = inst_37030);
(statearr_37057[7] = inst_37018);
return statearr_37057;
})();var statearr_37058_37076 = state_37041__$1;(statearr_37058_37076[2] = null);
(statearr_37058_37076[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37062 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37062[0] = state_machine__5507__auto__);
(statearr_37062[1] = 1);
return statearr_37062;
});
var state_machine__5507__auto____1 = (function (state_37041){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37041);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37063){if((e37063 instanceof Object))
{var ex__5510__auto__ = e37063;var statearr_37064_37077 = state_37041;(statearr_37064_37077[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37041);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37063;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37078 = state_37041;
state_37041 = G__37078;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37041){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37065 = f__5522__auto__.call(null);(statearr_37065[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37066);
return statearr_37065;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37213 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37183){var state_val_37184 = (state_37183[1]);if((state_val_37184 === 1))
{var inst_37146 = (new Array(n));var inst_37147 = inst_37146;var inst_37148 = 0;var state_37183__$1 = (function (){var statearr_37185 = state_37183;(statearr_37185[7] = inst_37148);
(statearr_37185[8] = inst_37147);
return statearr_37185;
})();var statearr_37186_37214 = state_37183__$1;(statearr_37186_37214[2] = null);
(statearr_37186_37214[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 2))
{var state_37183__$1 = state_37183;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37183__$1,4,ch);
} else
{if((state_val_37184 === 3))
{var inst_37181 = (state_37183[2]);var state_37183__$1 = state_37183;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37183__$1,inst_37181);
} else
{if((state_val_37184 === 4))
{var inst_37151 = (state_37183[9]);var inst_37151__$1 = (state_37183[2]);var inst_37152 = (inst_37151__$1 == null);var inst_37153 = cljs.core.not.call(null,inst_37152);var state_37183__$1 = (function (){var statearr_37187 = state_37183;(statearr_37187[9] = inst_37151__$1);
return statearr_37187;
})();if(inst_37153)
{var statearr_37188_37215 = state_37183__$1;(statearr_37188_37215[1] = 5);
} else
{var statearr_37189_37216 = state_37183__$1;(statearr_37189_37216[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 5))
{var inst_37156 = (state_37183[10]);var inst_37151 = (state_37183[9]);var inst_37148 = (state_37183[7]);var inst_37147 = (state_37183[8]);var inst_37155 = (inst_37147[inst_37148] = inst_37151);var inst_37156__$1 = (inst_37148 + 1);var inst_37157 = (inst_37156__$1 < n);var state_37183__$1 = (function (){var statearr_37190 = state_37183;(statearr_37190[11] = inst_37155);
(statearr_37190[10] = inst_37156__$1);
return statearr_37190;
})();if(cljs.core.truth_(inst_37157))
{var statearr_37191_37217 = state_37183__$1;(statearr_37191_37217[1] = 8);
} else
{var statearr_37192_37218 = state_37183__$1;(statearr_37192_37218[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 6))
{var inst_37148 = (state_37183[7]);var inst_37169 = (inst_37148 > 0);var state_37183__$1 = state_37183;if(cljs.core.truth_(inst_37169))
{var statearr_37194_37219 = state_37183__$1;(statearr_37194_37219[1] = 12);
} else
{var statearr_37195_37220 = state_37183__$1;(statearr_37195_37220[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 7))
{var inst_37179 = (state_37183[2]);var state_37183__$1 = state_37183;var statearr_37196_37221 = state_37183__$1;(statearr_37196_37221[2] = inst_37179);
(statearr_37196_37221[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 8))
{var inst_37156 = (state_37183[10]);var inst_37147 = (state_37183[8]);var tmp37193 = inst_37147;var inst_37147__$1 = tmp37193;var inst_37148 = inst_37156;var state_37183__$1 = (function (){var statearr_37197 = state_37183;(statearr_37197[7] = inst_37148);
(statearr_37197[8] = inst_37147__$1);
return statearr_37197;
})();var statearr_37198_37222 = state_37183__$1;(statearr_37198_37222[2] = null);
(statearr_37198_37222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 9))
{var inst_37147 = (state_37183[8]);var inst_37161 = cljs.core.vec.call(null,inst_37147);var state_37183__$1 = state_37183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37183__$1,11,out,inst_37161);
} else
{if((state_val_37184 === 10))
{var inst_37167 = (state_37183[2]);var state_37183__$1 = state_37183;var statearr_37199_37223 = state_37183__$1;(statearr_37199_37223[2] = inst_37167);
(statearr_37199_37223[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 11))
{var inst_37163 = (state_37183[2]);var inst_37164 = (new Array(n));var inst_37147 = inst_37164;var inst_37148 = 0;var state_37183__$1 = (function (){var statearr_37200 = state_37183;(statearr_37200[12] = inst_37163);
(statearr_37200[7] = inst_37148);
(statearr_37200[8] = inst_37147);
return statearr_37200;
})();var statearr_37201_37224 = state_37183__$1;(statearr_37201_37224[2] = null);
(statearr_37201_37224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 12))
{var inst_37147 = (state_37183[8]);var inst_37171 = cljs.core.vec.call(null,inst_37147);var state_37183__$1 = state_37183;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37183__$1,15,out,inst_37171);
} else
{if((state_val_37184 === 13))
{var state_37183__$1 = state_37183;var statearr_37202_37225 = state_37183__$1;(statearr_37202_37225[2] = null);
(statearr_37202_37225[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 14))
{var inst_37176 = (state_37183[2]);var inst_37177 = cljs.core.async.close_BANG_.call(null,out);var state_37183__$1 = (function (){var statearr_37203 = state_37183;(statearr_37203[13] = inst_37176);
return statearr_37203;
})();var statearr_37204_37226 = state_37183__$1;(statearr_37204_37226[2] = inst_37177);
(statearr_37204_37226[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37184 === 15))
{var inst_37173 = (state_37183[2]);var state_37183__$1 = state_37183;var statearr_37205_37227 = state_37183__$1;(statearr_37205_37227[2] = inst_37173);
(statearr_37205_37227[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37209 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37209[0] = state_machine__5507__auto__);
(statearr_37209[1] = 1);
return statearr_37209;
});
var state_machine__5507__auto____1 = (function (state_37183){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37183);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37210){if((e37210 instanceof Object))
{var ex__5510__auto__ = e37210;var statearr_37211_37228 = state_37183;(statearr_37211_37228[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37183);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37210;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37229 = state_37183;
state_37183 = G__37229;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37183){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37183);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37212 = f__5522__auto__.call(null);(statearr_37212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37213);
return statearr_37212;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37372 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37342){var state_val_37343 = (state_37342[1]);if((state_val_37343 === 1))
{var inst_37301 = [];var inst_37302 = inst_37301;var inst_37303 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37342__$1 = (function (){var statearr_37344 = state_37342;(statearr_37344[7] = inst_37303);
(statearr_37344[8] = inst_37302);
return statearr_37344;
})();var statearr_37345_37373 = state_37342__$1;(statearr_37345_37373[2] = null);
(statearr_37345_37373[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 2))
{var state_37342__$1 = state_37342;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37342__$1,4,ch);
} else
{if((state_val_37343 === 3))
{var inst_37340 = (state_37342[2]);var state_37342__$1 = state_37342;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37342__$1,inst_37340);
} else
{if((state_val_37343 === 4))
{var inst_37306 = (state_37342[9]);var inst_37306__$1 = (state_37342[2]);var inst_37307 = (inst_37306__$1 == null);var inst_37308 = cljs.core.not.call(null,inst_37307);var state_37342__$1 = (function (){var statearr_37346 = state_37342;(statearr_37346[9] = inst_37306__$1);
return statearr_37346;
})();if(inst_37308)
{var statearr_37347_37374 = state_37342__$1;(statearr_37347_37374[1] = 5);
} else
{var statearr_37348_37375 = state_37342__$1;(statearr_37348_37375[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 5))
{var inst_37310 = (state_37342[10]);var inst_37306 = (state_37342[9]);var inst_37303 = (state_37342[7]);var inst_37310__$1 = f.call(null,inst_37306);var inst_37311 = cljs.core._EQ_.call(null,inst_37310__$1,inst_37303);var inst_37312 = cljs.core.keyword_identical_QMARK_.call(null,inst_37303,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37313 = (inst_37311) || (inst_37312);var state_37342__$1 = (function (){var statearr_37349 = state_37342;(statearr_37349[10] = inst_37310__$1);
return statearr_37349;
})();if(cljs.core.truth_(inst_37313))
{var statearr_37350_37376 = state_37342__$1;(statearr_37350_37376[1] = 8);
} else
{var statearr_37351_37377 = state_37342__$1;(statearr_37351_37377[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 6))
{var inst_37302 = (state_37342[8]);var inst_37327 = inst_37302.length;var inst_37328 = (inst_37327 > 0);var state_37342__$1 = state_37342;if(cljs.core.truth_(inst_37328))
{var statearr_37353_37378 = state_37342__$1;(statearr_37353_37378[1] = 12);
} else
{var statearr_37354_37379 = state_37342__$1;(statearr_37354_37379[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 7))
{var inst_37338 = (state_37342[2]);var state_37342__$1 = state_37342;var statearr_37355_37380 = state_37342__$1;(statearr_37355_37380[2] = inst_37338);
(statearr_37355_37380[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 8))
{var inst_37310 = (state_37342[10]);var inst_37306 = (state_37342[9]);var inst_37302 = (state_37342[8]);var inst_37315 = inst_37302.push(inst_37306);var tmp37352 = inst_37302;var inst_37302__$1 = tmp37352;var inst_37303 = inst_37310;var state_37342__$1 = (function (){var statearr_37356 = state_37342;(statearr_37356[11] = inst_37315);
(statearr_37356[7] = inst_37303);
(statearr_37356[8] = inst_37302__$1);
return statearr_37356;
})();var statearr_37357_37381 = state_37342__$1;(statearr_37357_37381[2] = null);
(statearr_37357_37381[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 9))
{var inst_37302 = (state_37342[8]);var inst_37318 = cljs.core.vec.call(null,inst_37302);var state_37342__$1 = state_37342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37342__$1,11,out,inst_37318);
} else
{if((state_val_37343 === 10))
{var inst_37325 = (state_37342[2]);var state_37342__$1 = state_37342;var statearr_37358_37382 = state_37342__$1;(statearr_37358_37382[2] = inst_37325);
(statearr_37358_37382[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 11))
{var inst_37310 = (state_37342[10]);var inst_37306 = (state_37342[9]);var inst_37320 = (state_37342[2]);var inst_37321 = [];var inst_37322 = inst_37321.push(inst_37306);var inst_37302 = inst_37321;var inst_37303 = inst_37310;var state_37342__$1 = (function (){var statearr_37359 = state_37342;(statearr_37359[12] = inst_37322);
(statearr_37359[13] = inst_37320);
(statearr_37359[7] = inst_37303);
(statearr_37359[8] = inst_37302);
return statearr_37359;
})();var statearr_37360_37383 = state_37342__$1;(statearr_37360_37383[2] = null);
(statearr_37360_37383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 12))
{var inst_37302 = (state_37342[8]);var inst_37330 = cljs.core.vec.call(null,inst_37302);var state_37342__$1 = state_37342;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37342__$1,15,out,inst_37330);
} else
{if((state_val_37343 === 13))
{var state_37342__$1 = state_37342;var statearr_37361_37384 = state_37342__$1;(statearr_37361_37384[2] = null);
(statearr_37361_37384[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 14))
{var inst_37335 = (state_37342[2]);var inst_37336 = cljs.core.async.close_BANG_.call(null,out);var state_37342__$1 = (function (){var statearr_37362 = state_37342;(statearr_37362[14] = inst_37335);
return statearr_37362;
})();var statearr_37363_37385 = state_37342__$1;(statearr_37363_37385[2] = inst_37336);
(statearr_37363_37385[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37343 === 15))
{var inst_37332 = (state_37342[2]);var state_37342__$1 = state_37342;var statearr_37364_37386 = state_37342__$1;(statearr_37364_37386[2] = inst_37332);
(statearr_37364_37386[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37368 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37368[0] = state_machine__5507__auto__);
(statearr_37368[1] = 1);
return statearr_37368;
});
var state_machine__5507__auto____1 = (function (state_37342){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37342);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37369){if((e37369 instanceof Object))
{var ex__5510__auto__ = e37369;var statearr_37370_37387 = state_37342;(statearr_37370_37387[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37342);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37369;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37388 = state_37342;
state_37342 = G__37388;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37342){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37371 = f__5522__auto__.call(null);(statearr_37371[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37372);
return statearr_37371;
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
