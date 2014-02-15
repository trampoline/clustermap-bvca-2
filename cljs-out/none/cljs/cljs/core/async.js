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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13528 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13528 = (function (f,fn_handler,meta13529){
this.f = f;
this.fn_handler = fn_handler;
this.meta13529 = meta13529;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13528.cljs$lang$type = true;
cljs.core.async.t13528.cljs$lang$ctorStr = "cljs.core.async/t13528";
cljs.core.async.t13528.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13528");
});
cljs.core.async.t13528.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13528.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13528.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13530){var self__ = this;
var _13530__$1 = this;return self__.meta13529;
});
cljs.core.async.t13528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13530,meta13529__$1){var self__ = this;
var _13530__$1 = this;return (new cljs.core.async.t13528(self__.f,self__.fn_handler,meta13529__$1));
});
cljs.core.async.__GT_t13528 = (function __GT_t13528(f__$1,fn_handler__$1,meta13529){return (new cljs.core.async.t13528(f__$1,fn_handler__$1,meta13529));
});
}
return (new cljs.core.async.t13528(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13532 = buff;if(G__13532)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13532.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13532.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13532);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13532);
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
{var val_13533 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13533);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13533);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13534 = n;var x_13535 = 0;while(true){
if((x_13535 < n__4248__auto___13534))
{(a[x_13535] = 0);
{
var G__13536 = (x_13535 + 1);
x_13535 = G__13536;
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
var G__13537 = (i + 1);
i = G__13537;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13541 = (function (flag,alt_flag,meta13542){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13542 = meta13542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13541.cljs$lang$type = true;
cljs.core.async.t13541.cljs$lang$ctorStr = "cljs.core.async/t13541";
cljs.core.async.t13541.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13541");
});
cljs.core.async.t13541.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13541.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13541.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13541.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13543){var self__ = this;
var _13543__$1 = this;return self__.meta13542;
});
cljs.core.async.t13541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13543,meta13542__$1){var self__ = this;
var _13543__$1 = this;return (new cljs.core.async.t13541(self__.flag,self__.alt_flag,meta13542__$1));
});
cljs.core.async.__GT_t13541 = (function __GT_t13541(flag__$1,alt_flag__$1,meta13542){return (new cljs.core.async.t13541(flag__$1,alt_flag__$1,meta13542));
});
}
return (new cljs.core.async.t13541(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13547 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13547 = (function (cb,flag,alt_handler,meta13548){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13548 = meta13548;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13547.cljs$lang$type = true;
cljs.core.async.t13547.cljs$lang$ctorStr = "cljs.core.async/t13547";
cljs.core.async.t13547.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13547");
});
cljs.core.async.t13547.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13547.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13547.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13547.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13549){var self__ = this;
var _13549__$1 = this;return self__.meta13548;
});
cljs.core.async.t13547.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13549,meta13548__$1){var self__ = this;
var _13549__$1 = this;return (new cljs.core.async.t13547(self__.cb,self__.flag,self__.alt_handler,meta13548__$1));
});
cljs.core.async.__GT_t13547 = (function __GT_t13547(cb__$1,flag__$1,alt_handler__$1,meta13548){return (new cljs.core.async.t13547(cb__$1,flag__$1,alt_handler__$1,meta13548));
});
}
return (new cljs.core.async.t13547(cb,flag,alt_handler,null));
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
return (function (p1__13550_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13550_SHARP_,port], null));
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
var G__13551 = (i + 1);
i = G__13551;
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
var alts_BANG___delegate = function (ports,p__13552){var map__13554 = p__13552;var map__13554__$1 = ((cljs.core.seq_QMARK_.call(null,map__13554))?cljs.core.apply.call(null,cljs.core.hash_map,map__13554):map__13554);var opts = map__13554__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13552 = null;if (arguments.length > 1) {
  p__13552 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13552);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13555){
var ports = cljs.core.first(arglist__13555);
var p__13552 = cljs.core.rest(arglist__13555);
return alts_BANG___delegate(ports,p__13552);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13563 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13563 = (function (ch,f,map_LT_,meta13564){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13564 = meta13564;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13563.cljs$lang$type = true;
cljs.core.async.t13563.cljs$lang$ctorStr = "cljs.core.async/t13563";
cljs.core.async.t13563.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13563");
});
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13566 = (function (fn1,_,meta13564,ch,f,map_LT_,meta13567){
this.fn1 = fn1;
this._ = _;
this.meta13564 = meta13564;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13567 = meta13567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13566.cljs$lang$type = true;
cljs.core.async.t13566.cljs$lang$ctorStr = "cljs.core.async/t13566";
cljs.core.async.t13566.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13566");
});
cljs.core.async.t13566.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13566.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13556_SHARP_){return f1.call(null,(((p1__13556_SHARP_ == null))?null:self__.f.call(null,p1__13556_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13568){var self__ = this;
var _13568__$1 = this;return self__.meta13567;
});
cljs.core.async.t13566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13568,meta13567__$1){var self__ = this;
var _13568__$1 = this;return (new cljs.core.async.t13566(self__.fn1,self__._,self__.meta13564,self__.ch,self__.f,self__.map_LT_,meta13567__$1));
});
cljs.core.async.__GT_t13566 = (function __GT_t13566(fn1__$1,___$2,meta13564__$1,ch__$2,f__$2,map_LT___$2,meta13567){return (new cljs.core.async.t13566(fn1__$1,___$2,meta13564__$1,ch__$2,f__$2,map_LT___$2,meta13567));
});
}
return (new cljs.core.async.t13566(fn1,___$1,self__.meta13564,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13563.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13565){var self__ = this;
var _13565__$1 = this;return self__.meta13564;
});
cljs.core.async.t13563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13565,meta13564__$1){var self__ = this;
var _13565__$1 = this;return (new cljs.core.async.t13563(self__.ch,self__.f,self__.map_LT_,meta13564__$1));
});
cljs.core.async.__GT_t13563 = (function __GT_t13563(ch__$1,f__$1,map_LT___$1,meta13564){return (new cljs.core.async.t13563(ch__$1,f__$1,map_LT___$1,meta13564));
});
}
return (new cljs.core.async.t13563(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13572 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13572 = (function (ch,f,map_GT_,meta13573){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13573 = meta13573;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13572.cljs$lang$type = true;
cljs.core.async.t13572.cljs$lang$ctorStr = "cljs.core.async/t13572";
cljs.core.async.t13572.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13572");
});
cljs.core.async.t13572.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13572.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13572.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13572.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13572.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13572.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13572.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13574){var self__ = this;
var _13574__$1 = this;return self__.meta13573;
});
cljs.core.async.t13572.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13574,meta13573__$1){var self__ = this;
var _13574__$1 = this;return (new cljs.core.async.t13572(self__.ch,self__.f,self__.map_GT_,meta13573__$1));
});
cljs.core.async.__GT_t13572 = (function __GT_t13572(ch__$1,f__$1,map_GT___$1,meta13573){return (new cljs.core.async.t13572(ch__$1,f__$1,map_GT___$1,meta13573));
});
}
return (new cljs.core.async.t13572(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13578 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13578 = (function (ch,p,filter_GT_,meta13579){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13579 = meta13579;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13578.cljs$lang$type = true;
cljs.core.async.t13578.cljs$lang$ctorStr = "cljs.core.async/t13578";
cljs.core.async.t13578.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13578");
});
cljs.core.async.t13578.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13578.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13578.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13578.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13578.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13578.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13578.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13580){var self__ = this;
var _13580__$1 = this;return self__.meta13579;
});
cljs.core.async.t13578.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13580,meta13579__$1){var self__ = this;
var _13580__$1 = this;return (new cljs.core.async.t13578(self__.ch,self__.p,self__.filter_GT_,meta13579__$1));
});
cljs.core.async.__GT_t13578 = (function __GT_t13578(ch__$1,p__$1,filter_GT___$1,meta13579){return (new cljs.core.async.t13578(ch__$1,p__$1,filter_GT___$1,meta13579));
});
}
return (new cljs.core.async.t13578(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13663 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13642){var state_val_13643 = (state_13642[1]);if((state_val_13643 === 1))
{var state_13642__$1 = state_13642;var statearr_13644_13664 = state_13642__$1;(statearr_13644_13664[2] = null);
(statearr_13644_13664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13643 === 2))
{var state_13642__$1 = state_13642;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13642__$1,4,ch);
} else
{if((state_val_13643 === 3))
{var inst_13640 = (state_13642[2]);var state_13642__$1 = state_13642;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13642__$1,inst_13640);
} else
{if((state_val_13643 === 4))
{var inst_13624 = (state_13642[7]);var inst_13624__$1 = (state_13642[2]);var inst_13625 = (inst_13624__$1 == null);var state_13642__$1 = (function (){var statearr_13645 = state_13642;(statearr_13645[7] = inst_13624__$1);
return statearr_13645;
})();if(cljs.core.truth_(inst_13625))
{var statearr_13646_13665 = state_13642__$1;(statearr_13646_13665[1] = 5);
} else
{var statearr_13647_13666 = state_13642__$1;(statearr_13647_13666[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13643 === 5))
{var inst_13627 = cljs.core.async.close_BANG_.call(null,out);var state_13642__$1 = state_13642;var statearr_13648_13667 = state_13642__$1;(statearr_13648_13667[2] = inst_13627);
(statearr_13648_13667[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13643 === 6))
{var inst_13624 = (state_13642[7]);var inst_13629 = p.call(null,inst_13624);var state_13642__$1 = state_13642;if(cljs.core.truth_(inst_13629))
{var statearr_13649_13668 = state_13642__$1;(statearr_13649_13668[1] = 8);
} else
{var statearr_13650_13669 = state_13642__$1;(statearr_13650_13669[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13643 === 7))
{var inst_13638 = (state_13642[2]);var state_13642__$1 = state_13642;var statearr_13651_13670 = state_13642__$1;(statearr_13651_13670[2] = inst_13638);
(statearr_13651_13670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13643 === 8))
{var inst_13624 = (state_13642[7]);var state_13642__$1 = state_13642;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13642__$1,11,out,inst_13624);
} else
{if((state_val_13643 === 9))
{var state_13642__$1 = state_13642;var statearr_13652_13671 = state_13642__$1;(statearr_13652_13671[2] = null);
(statearr_13652_13671[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13643 === 10))
{var inst_13635 = (state_13642[2]);var state_13642__$1 = (function (){var statearr_13653 = state_13642;(statearr_13653[8] = inst_13635);
return statearr_13653;
})();var statearr_13654_13672 = state_13642__$1;(statearr_13654_13672[2] = null);
(statearr_13654_13672[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13643 === 11))
{var inst_13632 = (state_13642[2]);var state_13642__$1 = state_13642;var statearr_13655_13673 = state_13642__$1;(statearr_13655_13673[2] = inst_13632);
(statearr_13655_13673[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13659 = [null,null,null,null,null,null,null,null,null];(statearr_13659[0] = state_machine__5507__auto__);
(statearr_13659[1] = 1);
return statearr_13659;
});
var state_machine__5507__auto____1 = (function (state_13642){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13642);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13660){if((e13660 instanceof Object))
{var ex__5510__auto__ = e13660;var statearr_13661_13674 = state_13642;(statearr_13661_13674[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13642);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13660;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13675 = state_13642;
state_13642 = G__13675;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13642){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13642);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13662 = f__5522__auto__.call(null);(statearr_13662[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13663);
return statearr_13662;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13827){var state_val_13828 = (state_13827[1]);if((state_val_13828 === 1))
{var state_13827__$1 = state_13827;var statearr_13829_13866 = state_13827__$1;(statearr_13829_13866[2] = null);
(statearr_13829_13866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 2))
{var state_13827__$1 = state_13827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13827__$1,4,in$);
} else
{if((state_val_13828 === 3))
{var inst_13825 = (state_13827[2]);var state_13827__$1 = state_13827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13827__$1,inst_13825);
} else
{if((state_val_13828 === 4))
{var inst_13773 = (state_13827[7]);var inst_13773__$1 = (state_13827[2]);var inst_13774 = (inst_13773__$1 == null);var state_13827__$1 = (function (){var statearr_13830 = state_13827;(statearr_13830[7] = inst_13773__$1);
return statearr_13830;
})();if(cljs.core.truth_(inst_13774))
{var statearr_13831_13867 = state_13827__$1;(statearr_13831_13867[1] = 5);
} else
{var statearr_13832_13868 = state_13827__$1;(statearr_13832_13868[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 5))
{var inst_13776 = cljs.core.async.close_BANG_.call(null,out);var state_13827__$1 = state_13827;var statearr_13833_13869 = state_13827__$1;(statearr_13833_13869[2] = inst_13776);
(statearr_13833_13869[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 6))
{var inst_13773 = (state_13827[7]);var inst_13778 = f.call(null,inst_13773);var inst_13783 = cljs.core.seq.call(null,inst_13778);var inst_13784 = inst_13783;var inst_13785 = null;var inst_13786 = 0;var inst_13787 = 0;var state_13827__$1 = (function (){var statearr_13834 = state_13827;(statearr_13834[8] = inst_13787);
(statearr_13834[9] = inst_13786);
(statearr_13834[10] = inst_13785);
(statearr_13834[11] = inst_13784);
return statearr_13834;
})();var statearr_13835_13870 = state_13827__$1;(statearr_13835_13870[2] = null);
(statearr_13835_13870[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 7))
{var inst_13823 = (state_13827[2]);var state_13827__$1 = state_13827;var statearr_13836_13871 = state_13827__$1;(statearr_13836_13871[2] = inst_13823);
(statearr_13836_13871[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 8))
{var inst_13787 = (state_13827[8]);var inst_13786 = (state_13827[9]);var inst_13789 = (inst_13787 < inst_13786);var inst_13790 = inst_13789;var state_13827__$1 = state_13827;if(cljs.core.truth_(inst_13790))
{var statearr_13837_13872 = state_13827__$1;(statearr_13837_13872[1] = 10);
} else
{var statearr_13838_13873 = state_13827__$1;(statearr_13838_13873[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 9))
{var inst_13820 = (state_13827[2]);var state_13827__$1 = (function (){var statearr_13839 = state_13827;(statearr_13839[12] = inst_13820);
return statearr_13839;
})();var statearr_13840_13874 = state_13827__$1;(statearr_13840_13874[2] = null);
(statearr_13840_13874[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 10))
{var inst_13787 = (state_13827[8]);var inst_13785 = (state_13827[10]);var inst_13792 = cljs.core._nth.call(null,inst_13785,inst_13787);var state_13827__$1 = state_13827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13827__$1,13,out,inst_13792);
} else
{if((state_val_13828 === 11))
{var inst_13798 = (state_13827[13]);var inst_13784 = (state_13827[11]);var inst_13798__$1 = cljs.core.seq.call(null,inst_13784);var state_13827__$1 = (function (){var statearr_13844 = state_13827;(statearr_13844[13] = inst_13798__$1);
return statearr_13844;
})();if(inst_13798__$1)
{var statearr_13845_13875 = state_13827__$1;(statearr_13845_13875[1] = 14);
} else
{var statearr_13846_13876 = state_13827__$1;(statearr_13846_13876[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 12))
{var inst_13818 = (state_13827[2]);var state_13827__$1 = state_13827;var statearr_13847_13877 = state_13827__$1;(statearr_13847_13877[2] = inst_13818);
(statearr_13847_13877[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 13))
{var inst_13787 = (state_13827[8]);var inst_13786 = (state_13827[9]);var inst_13785 = (state_13827[10]);var inst_13784 = (state_13827[11]);var inst_13794 = (state_13827[2]);var inst_13795 = (inst_13787 + 1);var tmp13841 = inst_13786;var tmp13842 = inst_13785;var tmp13843 = inst_13784;var inst_13784__$1 = tmp13843;var inst_13785__$1 = tmp13842;var inst_13786__$1 = tmp13841;var inst_13787__$1 = inst_13795;var state_13827__$1 = (function (){var statearr_13848 = state_13827;(statearr_13848[14] = inst_13794);
(statearr_13848[8] = inst_13787__$1);
(statearr_13848[9] = inst_13786__$1);
(statearr_13848[10] = inst_13785__$1);
(statearr_13848[11] = inst_13784__$1);
return statearr_13848;
})();var statearr_13849_13878 = state_13827__$1;(statearr_13849_13878[2] = null);
(statearr_13849_13878[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 14))
{var inst_13798 = (state_13827[13]);var inst_13800 = cljs.core.chunked_seq_QMARK_.call(null,inst_13798);var state_13827__$1 = state_13827;if(inst_13800)
{var statearr_13850_13879 = state_13827__$1;(statearr_13850_13879[1] = 17);
} else
{var statearr_13851_13880 = state_13827__$1;(statearr_13851_13880[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 15))
{var state_13827__$1 = state_13827;var statearr_13852_13881 = state_13827__$1;(statearr_13852_13881[2] = null);
(statearr_13852_13881[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 16))
{var inst_13816 = (state_13827[2]);var state_13827__$1 = state_13827;var statearr_13853_13882 = state_13827__$1;(statearr_13853_13882[2] = inst_13816);
(statearr_13853_13882[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 17))
{var inst_13798 = (state_13827[13]);var inst_13802 = cljs.core.chunk_first.call(null,inst_13798);var inst_13803 = cljs.core.chunk_rest.call(null,inst_13798);var inst_13804 = cljs.core.count.call(null,inst_13802);var inst_13784 = inst_13803;var inst_13785 = inst_13802;var inst_13786 = inst_13804;var inst_13787 = 0;var state_13827__$1 = (function (){var statearr_13854 = state_13827;(statearr_13854[8] = inst_13787);
(statearr_13854[9] = inst_13786);
(statearr_13854[10] = inst_13785);
(statearr_13854[11] = inst_13784);
return statearr_13854;
})();var statearr_13855_13883 = state_13827__$1;(statearr_13855_13883[2] = null);
(statearr_13855_13883[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 18))
{var inst_13798 = (state_13827[13]);var inst_13807 = cljs.core.first.call(null,inst_13798);var state_13827__$1 = state_13827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13827__$1,20,out,inst_13807);
} else
{if((state_val_13828 === 19))
{var inst_13813 = (state_13827[2]);var state_13827__$1 = state_13827;var statearr_13856_13884 = state_13827__$1;(statearr_13856_13884[2] = inst_13813);
(statearr_13856_13884[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13828 === 20))
{var inst_13798 = (state_13827[13]);var inst_13809 = (state_13827[2]);var inst_13810 = cljs.core.next.call(null,inst_13798);var inst_13784 = inst_13810;var inst_13785 = null;var inst_13786 = 0;var inst_13787 = 0;var state_13827__$1 = (function (){var statearr_13857 = state_13827;(statearr_13857[15] = inst_13809);
(statearr_13857[8] = inst_13787);
(statearr_13857[9] = inst_13786);
(statearr_13857[10] = inst_13785);
(statearr_13857[11] = inst_13784);
return statearr_13857;
})();var statearr_13858_13885 = state_13827__$1;(statearr_13858_13885[2] = null);
(statearr_13858_13885[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13862[0] = state_machine__5507__auto__);
(statearr_13862[1] = 1);
return statearr_13862;
});
var state_machine__5507__auto____1 = (function (state_13827){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13827);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13863){if((e13863 instanceof Object))
{var ex__5510__auto__ = e13863;var statearr_13864_13886 = state_13827;(statearr_13864_13886[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13827);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13863;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13887 = state_13827;
state_13827 = G__13887;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13827){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13865 = f__5522__auto__.call(null);(statearr_13865[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13865;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13968 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13947){var state_val_13948 = (state_13947[1]);if((state_val_13948 === 1))
{var state_13947__$1 = state_13947;var statearr_13949_13969 = state_13947__$1;(statearr_13949_13969[2] = null);
(statearr_13949_13969[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 2))
{var state_13947__$1 = state_13947;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13947__$1,4,from);
} else
{if((state_val_13948 === 3))
{var inst_13945 = (state_13947[2]);var state_13947__$1 = state_13947;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13947__$1,inst_13945);
} else
{if((state_val_13948 === 4))
{var inst_13930 = (state_13947[7]);var inst_13930__$1 = (state_13947[2]);var inst_13931 = (inst_13930__$1 == null);var state_13947__$1 = (function (){var statearr_13950 = state_13947;(statearr_13950[7] = inst_13930__$1);
return statearr_13950;
})();if(cljs.core.truth_(inst_13931))
{var statearr_13951_13970 = state_13947__$1;(statearr_13951_13970[1] = 5);
} else
{var statearr_13952_13971 = state_13947__$1;(statearr_13952_13971[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 5))
{var state_13947__$1 = state_13947;if(cljs.core.truth_(close_QMARK_))
{var statearr_13953_13972 = state_13947__$1;(statearr_13953_13972[1] = 8);
} else
{var statearr_13954_13973 = state_13947__$1;(statearr_13954_13973[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 6))
{var inst_13930 = (state_13947[7]);var state_13947__$1 = state_13947;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13947__$1,11,to,inst_13930);
} else
{if((state_val_13948 === 7))
{var inst_13943 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13955_13974 = state_13947__$1;(statearr_13955_13974[2] = inst_13943);
(statearr_13955_13974[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 8))
{var inst_13934 = cljs.core.async.close_BANG_.call(null,to);var state_13947__$1 = state_13947;var statearr_13956_13975 = state_13947__$1;(statearr_13956_13975[2] = inst_13934);
(statearr_13956_13975[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 9))
{var state_13947__$1 = state_13947;var statearr_13957_13976 = state_13947__$1;(statearr_13957_13976[2] = null);
(statearr_13957_13976[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 10))
{var inst_13937 = (state_13947[2]);var state_13947__$1 = state_13947;var statearr_13958_13977 = state_13947__$1;(statearr_13958_13977[2] = inst_13937);
(statearr_13958_13977[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13948 === 11))
{var inst_13940 = (state_13947[2]);var state_13947__$1 = (function (){var statearr_13959 = state_13947;(statearr_13959[8] = inst_13940);
return statearr_13959;
})();var statearr_13960_13978 = state_13947__$1;(statearr_13960_13978[2] = null);
(statearr_13960_13978[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13964 = [null,null,null,null,null,null,null,null,null];(statearr_13964[0] = state_machine__5507__auto__);
(statearr_13964[1] = 1);
return statearr_13964;
});
var state_machine__5507__auto____1 = (function (state_13947){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13947);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13965){if((e13965 instanceof Object))
{var ex__5510__auto__ = e13965;var statearr_13966_13979 = state_13947;(statearr_13966_13979[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13947);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13965;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13980 = state_13947;
state_13947 = G__13980;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13947){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13947);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13967 = f__5522__auto__.call(null);(statearr_13967[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13968);
return statearr_13967;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14067 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14045){var state_val_14046 = (state_14045[1]);if((state_val_14046 === 1))
{var state_14045__$1 = state_14045;var statearr_14047_14068 = state_14045__$1;(statearr_14047_14068[2] = null);
(statearr_14047_14068[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 2))
{var state_14045__$1 = state_14045;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14045__$1,4,ch);
} else
{if((state_val_14046 === 3))
{var inst_14043 = (state_14045[2]);var state_14045__$1 = state_14045;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14045__$1,inst_14043);
} else
{if((state_val_14046 === 4))
{var inst_14026 = (state_14045[7]);var inst_14026__$1 = (state_14045[2]);var inst_14027 = (inst_14026__$1 == null);var state_14045__$1 = (function (){var statearr_14048 = state_14045;(statearr_14048[7] = inst_14026__$1);
return statearr_14048;
})();if(cljs.core.truth_(inst_14027))
{var statearr_14049_14069 = state_14045__$1;(statearr_14049_14069[1] = 5);
} else
{var statearr_14050_14070 = state_14045__$1;(statearr_14050_14070[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 5))
{var inst_14029 = cljs.core.async.close_BANG_.call(null,tc);var inst_14030 = cljs.core.async.close_BANG_.call(null,fc);var state_14045__$1 = (function (){var statearr_14051 = state_14045;(statearr_14051[8] = inst_14029);
return statearr_14051;
})();var statearr_14052_14071 = state_14045__$1;(statearr_14052_14071[2] = inst_14030);
(statearr_14052_14071[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 6))
{var inst_14026 = (state_14045[7]);var inst_14032 = p.call(null,inst_14026);var state_14045__$1 = state_14045;if(cljs.core.truth_(inst_14032))
{var statearr_14053_14072 = state_14045__$1;(statearr_14053_14072[1] = 9);
} else
{var statearr_14054_14073 = state_14045__$1;(statearr_14054_14073[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 7))
{var inst_14041 = (state_14045[2]);var state_14045__$1 = state_14045;var statearr_14055_14074 = state_14045__$1;(statearr_14055_14074[2] = inst_14041);
(statearr_14055_14074[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 8))
{var inst_14038 = (state_14045[2]);var state_14045__$1 = (function (){var statearr_14056 = state_14045;(statearr_14056[9] = inst_14038);
return statearr_14056;
})();var statearr_14057_14075 = state_14045__$1;(statearr_14057_14075[2] = null);
(statearr_14057_14075[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 9))
{var state_14045__$1 = state_14045;var statearr_14058_14076 = state_14045__$1;(statearr_14058_14076[2] = tc);
(statearr_14058_14076[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 10))
{var state_14045__$1 = state_14045;var statearr_14059_14077 = state_14045__$1;(statearr_14059_14077[2] = fc);
(statearr_14059_14077[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14046 === 11))
{var inst_14026 = (state_14045[7]);var inst_14036 = (state_14045[2]);var state_14045__$1 = state_14045;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14045__$1,8,inst_14036,inst_14026);
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
var state_machine__5507__auto____0 = (function (){var statearr_14063 = [null,null,null,null,null,null,null,null,null,null];(statearr_14063[0] = state_machine__5507__auto__);
(statearr_14063[1] = 1);
return statearr_14063;
});
var state_machine__5507__auto____1 = (function (state_14045){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14045);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14064){if((e14064 instanceof Object))
{var ex__5510__auto__ = e14064;var statearr_14065_14078 = state_14045;(statearr_14065_14078[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14045);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14064;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14079 = state_14045;
state_14045 = G__14079;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14045){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14066 = f__5522__auto__.call(null);(statearr_14066[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14067);
return statearr_14066;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14126){var state_val_14127 = (state_14126[1]);if((state_val_14127 === 7))
{var inst_14122 = (state_14126[2]);var state_14126__$1 = state_14126;var statearr_14128_14144 = state_14126__$1;(statearr_14128_14144[2] = inst_14122);
(statearr_14128_14144[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14127 === 6))
{var inst_14115 = (state_14126[7]);var inst_14112 = (state_14126[8]);var inst_14119 = f.call(null,inst_14112,inst_14115);var inst_14112__$1 = inst_14119;var state_14126__$1 = (function (){var statearr_14129 = state_14126;(statearr_14129[8] = inst_14112__$1);
return statearr_14129;
})();var statearr_14130_14145 = state_14126__$1;(statearr_14130_14145[2] = null);
(statearr_14130_14145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14127 === 5))
{var inst_14112 = (state_14126[8]);var state_14126__$1 = state_14126;var statearr_14131_14146 = state_14126__$1;(statearr_14131_14146[2] = inst_14112);
(statearr_14131_14146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14127 === 4))
{var inst_14115 = (state_14126[7]);var inst_14115__$1 = (state_14126[2]);var inst_14116 = (inst_14115__$1 == null);var state_14126__$1 = (function (){var statearr_14132 = state_14126;(statearr_14132[7] = inst_14115__$1);
return statearr_14132;
})();if(cljs.core.truth_(inst_14116))
{var statearr_14133_14147 = state_14126__$1;(statearr_14133_14147[1] = 5);
} else
{var statearr_14134_14148 = state_14126__$1;(statearr_14134_14148[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14127 === 3))
{var inst_14124 = (state_14126[2]);var state_14126__$1 = state_14126;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14126__$1,inst_14124);
} else
{if((state_val_14127 === 2))
{var state_14126__$1 = state_14126;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14126__$1,4,ch);
} else
{if((state_val_14127 === 1))
{var inst_14112 = init;var state_14126__$1 = (function (){var statearr_14135 = state_14126;(statearr_14135[8] = inst_14112);
return statearr_14135;
})();var statearr_14136_14149 = state_14126__$1;(statearr_14136_14149[2] = null);
(statearr_14136_14149[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14140 = [null,null,null,null,null,null,null,null,null];(statearr_14140[0] = state_machine__5507__auto__);
(statearr_14140[1] = 1);
return statearr_14140;
});
var state_machine__5507__auto____1 = (function (state_14126){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14126);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14141){if((e14141 instanceof Object))
{var ex__5510__auto__ = e14141;var statearr_14142_14150 = state_14126;(statearr_14142_14150[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14126);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14151 = state_14126;
state_14126 = G__14151;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14126){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14126);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14143 = f__5522__auto__.call(null);(statearr_14143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14143;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14213){var state_val_14214 = (state_14213[1]);if((state_val_14214 === 1))
{var inst_14193 = cljs.core.seq.call(null,coll);var inst_14194 = inst_14193;var state_14213__$1 = (function (){var statearr_14215 = state_14213;(statearr_14215[7] = inst_14194);
return statearr_14215;
})();var statearr_14216_14234 = state_14213__$1;(statearr_14216_14234[2] = null);
(statearr_14216_14234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 2))
{var inst_14194 = (state_14213[7]);var state_14213__$1 = state_14213;if(cljs.core.truth_(inst_14194))
{var statearr_14217_14235 = state_14213__$1;(statearr_14217_14235[1] = 4);
} else
{var statearr_14218_14236 = state_14213__$1;(statearr_14218_14236[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 3))
{var inst_14211 = (state_14213[2]);var state_14213__$1 = state_14213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14213__$1,inst_14211);
} else
{if((state_val_14214 === 4))
{var inst_14194 = (state_14213[7]);var inst_14197 = cljs.core.first.call(null,inst_14194);var state_14213__$1 = state_14213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14213__$1,7,ch,inst_14197);
} else
{if((state_val_14214 === 5))
{var state_14213__$1 = state_14213;if(cljs.core.truth_(close_QMARK_))
{var statearr_14219_14237 = state_14213__$1;(statearr_14219_14237[1] = 8);
} else
{var statearr_14220_14238 = state_14213__$1;(statearr_14220_14238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 6))
{var inst_14209 = (state_14213[2]);var state_14213__$1 = state_14213;var statearr_14221_14239 = state_14213__$1;(statearr_14221_14239[2] = inst_14209);
(statearr_14221_14239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 7))
{var inst_14194 = (state_14213[7]);var inst_14199 = (state_14213[2]);var inst_14200 = cljs.core.next.call(null,inst_14194);var inst_14194__$1 = inst_14200;var state_14213__$1 = (function (){var statearr_14222 = state_14213;(statearr_14222[8] = inst_14199);
(statearr_14222[7] = inst_14194__$1);
return statearr_14222;
})();var statearr_14223_14240 = state_14213__$1;(statearr_14223_14240[2] = null);
(statearr_14223_14240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 8))
{var inst_14204 = cljs.core.async.close_BANG_.call(null,ch);var state_14213__$1 = state_14213;var statearr_14224_14241 = state_14213__$1;(statearr_14224_14241[2] = inst_14204);
(statearr_14224_14241[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 9))
{var state_14213__$1 = state_14213;var statearr_14225_14242 = state_14213__$1;(statearr_14225_14242[2] = null);
(statearr_14225_14242[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14214 === 10))
{var inst_14207 = (state_14213[2]);var state_14213__$1 = state_14213;var statearr_14226_14243 = state_14213__$1;(statearr_14226_14243[2] = inst_14207);
(statearr_14226_14243[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14230 = [null,null,null,null,null,null,null,null,null];(statearr_14230[0] = state_machine__5507__auto__);
(statearr_14230[1] = 1);
return statearr_14230;
});
var state_machine__5507__auto____1 = (function (state_14213){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14213);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14231){if((e14231 instanceof Object))
{var ex__5510__auto__ = e14231;var statearr_14232_14244 = state_14213;(statearr_14232_14244[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14231;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14245 = state_14213;
state_14213 = G__14245;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14213){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14233 = f__5522__auto__.call(null);(statearr_14233[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14233;
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
cljs.core.async.Mux = (function (){var obj14247 = {};return obj14247;
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
cljs.core.async.Mult = (function (){var obj14249 = {};return obj14249;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14473 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14473 = (function (cs,ch,mult,meta14474){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14474 = meta14474;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14473.cljs$lang$type = true;
cljs.core.async.t14473.cljs$lang$ctorStr = "cljs.core.async/t14473";
cljs.core.async.t14473.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14473");
});})(cs))
;
cljs.core.async.t14473.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14473.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14473.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14473.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14473.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14473.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14473.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14475){var self__ = this;
var _14475__$1 = this;return self__.meta14474;
});})(cs))
;
cljs.core.async.t14473.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14475,meta14474__$1){var self__ = this;
var _14475__$1 = this;return (new cljs.core.async.t14473(self__.cs,self__.ch,self__.mult,meta14474__$1));
});})(cs))
;
cljs.core.async.__GT_t14473 = ((function (cs){
return (function __GT_t14473(cs__$1,ch__$1,mult__$1,meta14474){return (new cljs.core.async.t14473(cs__$1,ch__$1,mult__$1,meta14474));
});})(cs))
;
}
return (new cljs.core.async.t14473(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14696 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14610){var state_val_14611 = (state_14610[1]);if((state_val_14611 === 32))
{var inst_14478 = (state_14610[7]);var inst_14554 = (state_14610[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14610,31,Object,null,30);var inst_14561 = cljs.core.async.put_BANG_.call(null,inst_14554,inst_14478,done);var state_14610__$1 = state_14610;var statearr_14612_14697 = state_14610__$1;(statearr_14612_14697[2] = inst_14561);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14610__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 1))
{var state_14610__$1 = state_14610;var statearr_14613_14698 = state_14610__$1;(statearr_14613_14698[2] = null);
(statearr_14613_14698[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 33))
{var inst_14567 = (state_14610[9]);var inst_14569 = cljs.core.chunked_seq_QMARK_.call(null,inst_14567);var state_14610__$1 = state_14610;if(inst_14569)
{var statearr_14614_14699 = state_14610__$1;(statearr_14614_14699[1] = 36);
} else
{var statearr_14615_14700 = state_14610__$1;(statearr_14615_14700[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 2))
{var state_14610__$1 = state_14610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14610__$1,4,ch);
} else
{if((state_val_14611 === 34))
{var state_14610__$1 = state_14610;var statearr_14616_14701 = state_14610__$1;(statearr_14616_14701[2] = null);
(statearr_14616_14701[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 3))
{var inst_14608 = (state_14610[2]);var state_14610__$1 = state_14610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14610__$1,inst_14608);
} else
{if((state_val_14611 === 35))
{var inst_14592 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14617_14702 = state_14610__$1;(statearr_14617_14702[2] = inst_14592);
(statearr_14617_14702[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 4))
{var inst_14478 = (state_14610[7]);var inst_14478__$1 = (state_14610[2]);var inst_14479 = (inst_14478__$1 == null);var state_14610__$1 = (function (){var statearr_14618 = state_14610;(statearr_14618[7] = inst_14478__$1);
return statearr_14618;
})();if(cljs.core.truth_(inst_14479))
{var statearr_14619_14703 = state_14610__$1;(statearr_14619_14703[1] = 5);
} else
{var statearr_14620_14704 = state_14610__$1;(statearr_14620_14704[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 36))
{var inst_14567 = (state_14610[9]);var inst_14571 = cljs.core.chunk_first.call(null,inst_14567);var inst_14572 = cljs.core.chunk_rest.call(null,inst_14567);var inst_14573 = cljs.core.count.call(null,inst_14571);var inst_14546 = inst_14572;var inst_14547 = inst_14571;var inst_14548 = inst_14573;var inst_14549 = 0;var state_14610__$1 = (function (){var statearr_14621 = state_14610;(statearr_14621[10] = inst_14547);
(statearr_14621[11] = inst_14548);
(statearr_14621[12] = inst_14549);
(statearr_14621[13] = inst_14546);
return statearr_14621;
})();var statearr_14622_14705 = state_14610__$1;(statearr_14622_14705[2] = null);
(statearr_14622_14705[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 5))
{var inst_14485 = cljs.core.deref.call(null,cs);var inst_14486 = cljs.core.seq.call(null,inst_14485);var inst_14487 = inst_14486;var inst_14488 = null;var inst_14489 = 0;var inst_14490 = 0;var state_14610__$1 = (function (){var statearr_14623 = state_14610;(statearr_14623[14] = inst_14487);
(statearr_14623[15] = inst_14489);
(statearr_14623[16] = inst_14488);
(statearr_14623[17] = inst_14490);
return statearr_14623;
})();var statearr_14624_14706 = state_14610__$1;(statearr_14624_14706[2] = null);
(statearr_14624_14706[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 37))
{var inst_14567 = (state_14610[9]);var inst_14576 = cljs.core.first.call(null,inst_14567);var state_14610__$1 = (function (){var statearr_14625 = state_14610;(statearr_14625[18] = inst_14576);
return statearr_14625;
})();var statearr_14626_14707 = state_14610__$1;(statearr_14626_14707[2] = null);
(statearr_14626_14707[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 6))
{var inst_14538 = (state_14610[19]);var inst_14537 = cljs.core.deref.call(null,cs);var inst_14538__$1 = cljs.core.keys.call(null,inst_14537);var inst_14539 = cljs.core.count.call(null,inst_14538__$1);var inst_14540 = cljs.core.reset_BANG_.call(null,dctr,inst_14539);var inst_14545 = cljs.core.seq.call(null,inst_14538__$1);var inst_14546 = inst_14545;var inst_14547 = null;var inst_14548 = 0;var inst_14549 = 0;var state_14610__$1 = (function (){var statearr_14627 = state_14610;(statearr_14627[20] = inst_14540);
(statearr_14627[10] = inst_14547);
(statearr_14627[11] = inst_14548);
(statearr_14627[12] = inst_14549);
(statearr_14627[13] = inst_14546);
(statearr_14627[19] = inst_14538__$1);
return statearr_14627;
})();var statearr_14628_14708 = state_14610__$1;(statearr_14628_14708[2] = null);
(statearr_14628_14708[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 38))
{var inst_14589 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14629_14709 = state_14610__$1;(statearr_14629_14709[2] = inst_14589);
(statearr_14629_14709[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 7))
{var inst_14606 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14630_14710 = state_14610__$1;(statearr_14630_14710[2] = inst_14606);
(statearr_14630_14710[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 39))
{var inst_14567 = (state_14610[9]);var inst_14585 = (state_14610[2]);var inst_14586 = cljs.core.next.call(null,inst_14567);var inst_14546 = inst_14586;var inst_14547 = null;var inst_14548 = 0;var inst_14549 = 0;var state_14610__$1 = (function (){var statearr_14631 = state_14610;(statearr_14631[21] = inst_14585);
(statearr_14631[10] = inst_14547);
(statearr_14631[11] = inst_14548);
(statearr_14631[12] = inst_14549);
(statearr_14631[13] = inst_14546);
return statearr_14631;
})();var statearr_14632_14711 = state_14610__$1;(statearr_14632_14711[2] = null);
(statearr_14632_14711[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 8))
{var inst_14489 = (state_14610[15]);var inst_14490 = (state_14610[17]);var inst_14492 = (inst_14490 < inst_14489);var inst_14493 = inst_14492;var state_14610__$1 = state_14610;if(cljs.core.truth_(inst_14493))
{var statearr_14633_14712 = state_14610__$1;(statearr_14633_14712[1] = 10);
} else
{var statearr_14634_14713 = state_14610__$1;(statearr_14634_14713[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 40))
{var inst_14576 = (state_14610[18]);var inst_14577 = (state_14610[2]);var inst_14578 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14579 = cljs.core.async.untap_STAR_.call(null,m,inst_14576);var state_14610__$1 = (function (){var statearr_14635 = state_14610;(statearr_14635[22] = inst_14578);
(statearr_14635[23] = inst_14577);
return statearr_14635;
})();var statearr_14636_14714 = state_14610__$1;(statearr_14636_14714[2] = inst_14579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14610__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 9))
{var inst_14535 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14637_14715 = state_14610__$1;(statearr_14637_14715[2] = inst_14535);
(statearr_14637_14715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 41))
{var inst_14576 = (state_14610[18]);var inst_14478 = (state_14610[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14610,40,Object,null,39);var inst_14583 = cljs.core.async.put_BANG_.call(null,inst_14576,inst_14478,done);var state_14610__$1 = state_14610;var statearr_14638_14716 = state_14610__$1;(statearr_14638_14716[2] = inst_14583);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14610__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 10))
{var inst_14488 = (state_14610[16]);var inst_14490 = (state_14610[17]);var inst_14496 = cljs.core._nth.call(null,inst_14488,inst_14490);var inst_14497 = cljs.core.nth.call(null,inst_14496,0,null);var inst_14498 = cljs.core.nth.call(null,inst_14496,1,null);var state_14610__$1 = (function (){var statearr_14639 = state_14610;(statearr_14639[24] = inst_14497);
return statearr_14639;
})();if(cljs.core.truth_(inst_14498))
{var statearr_14640_14717 = state_14610__$1;(statearr_14640_14717[1] = 13);
} else
{var statearr_14641_14718 = state_14610__$1;(statearr_14641_14718[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 42))
{var state_14610__$1 = state_14610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14610__$1,45,dchan);
} else
{if((state_val_14611 === 11))
{var inst_14487 = (state_14610[14]);var inst_14507 = (state_14610[25]);var inst_14507__$1 = cljs.core.seq.call(null,inst_14487);var state_14610__$1 = (function (){var statearr_14642 = state_14610;(statearr_14642[25] = inst_14507__$1);
return statearr_14642;
})();if(inst_14507__$1)
{var statearr_14643_14719 = state_14610__$1;(statearr_14643_14719[1] = 16);
} else
{var statearr_14644_14720 = state_14610__$1;(statearr_14644_14720[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 43))
{var state_14610__$1 = state_14610;var statearr_14645_14721 = state_14610__$1;(statearr_14645_14721[2] = null);
(statearr_14645_14721[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 12))
{var inst_14533 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14646_14722 = state_14610__$1;(statearr_14646_14722[2] = inst_14533);
(statearr_14646_14722[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 44))
{var inst_14603 = (state_14610[2]);var state_14610__$1 = (function (){var statearr_14647 = state_14610;(statearr_14647[26] = inst_14603);
return statearr_14647;
})();var statearr_14648_14723 = state_14610__$1;(statearr_14648_14723[2] = null);
(statearr_14648_14723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 13))
{var inst_14497 = (state_14610[24]);var inst_14500 = cljs.core.async.close_BANG_.call(null,inst_14497);var state_14610__$1 = state_14610;var statearr_14649_14724 = state_14610__$1;(statearr_14649_14724[2] = inst_14500);
(statearr_14649_14724[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 45))
{var inst_14600 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14653_14725 = state_14610__$1;(statearr_14653_14725[2] = inst_14600);
(statearr_14653_14725[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 14))
{var state_14610__$1 = state_14610;var statearr_14654_14726 = state_14610__$1;(statearr_14654_14726[2] = null);
(statearr_14654_14726[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 15))
{var inst_14487 = (state_14610[14]);var inst_14489 = (state_14610[15]);var inst_14488 = (state_14610[16]);var inst_14490 = (state_14610[17]);var inst_14503 = (state_14610[2]);var inst_14504 = (inst_14490 + 1);var tmp14650 = inst_14487;var tmp14651 = inst_14489;var tmp14652 = inst_14488;var inst_14487__$1 = tmp14650;var inst_14488__$1 = tmp14652;var inst_14489__$1 = tmp14651;var inst_14490__$1 = inst_14504;var state_14610__$1 = (function (){var statearr_14655 = state_14610;(statearr_14655[14] = inst_14487__$1);
(statearr_14655[15] = inst_14489__$1);
(statearr_14655[16] = inst_14488__$1);
(statearr_14655[17] = inst_14490__$1);
(statearr_14655[27] = inst_14503);
return statearr_14655;
})();var statearr_14656_14727 = state_14610__$1;(statearr_14656_14727[2] = null);
(statearr_14656_14727[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 16))
{var inst_14507 = (state_14610[25]);var inst_14509 = cljs.core.chunked_seq_QMARK_.call(null,inst_14507);var state_14610__$1 = state_14610;if(inst_14509)
{var statearr_14657_14728 = state_14610__$1;(statearr_14657_14728[1] = 19);
} else
{var statearr_14658_14729 = state_14610__$1;(statearr_14658_14729[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 17))
{var state_14610__$1 = state_14610;var statearr_14659_14730 = state_14610__$1;(statearr_14659_14730[2] = null);
(statearr_14659_14730[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 18))
{var inst_14531 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14660_14731 = state_14610__$1;(statearr_14660_14731[2] = inst_14531);
(statearr_14660_14731[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 19))
{var inst_14507 = (state_14610[25]);var inst_14511 = cljs.core.chunk_first.call(null,inst_14507);var inst_14512 = cljs.core.chunk_rest.call(null,inst_14507);var inst_14513 = cljs.core.count.call(null,inst_14511);var inst_14487 = inst_14512;var inst_14488 = inst_14511;var inst_14489 = inst_14513;var inst_14490 = 0;var state_14610__$1 = (function (){var statearr_14661 = state_14610;(statearr_14661[14] = inst_14487);
(statearr_14661[15] = inst_14489);
(statearr_14661[16] = inst_14488);
(statearr_14661[17] = inst_14490);
return statearr_14661;
})();var statearr_14662_14732 = state_14610__$1;(statearr_14662_14732[2] = null);
(statearr_14662_14732[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 20))
{var inst_14507 = (state_14610[25]);var inst_14517 = cljs.core.first.call(null,inst_14507);var inst_14518 = cljs.core.nth.call(null,inst_14517,0,null);var inst_14519 = cljs.core.nth.call(null,inst_14517,1,null);var state_14610__$1 = (function (){var statearr_14663 = state_14610;(statearr_14663[28] = inst_14518);
return statearr_14663;
})();if(cljs.core.truth_(inst_14519))
{var statearr_14664_14733 = state_14610__$1;(statearr_14664_14733[1] = 22);
} else
{var statearr_14665_14734 = state_14610__$1;(statearr_14665_14734[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 21))
{var inst_14528 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14666_14735 = state_14610__$1;(statearr_14666_14735[2] = inst_14528);
(statearr_14666_14735[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 22))
{var inst_14518 = (state_14610[28]);var inst_14521 = cljs.core.async.close_BANG_.call(null,inst_14518);var state_14610__$1 = state_14610;var statearr_14667_14736 = state_14610__$1;(statearr_14667_14736[2] = inst_14521);
(statearr_14667_14736[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 23))
{var state_14610__$1 = state_14610;var statearr_14668_14737 = state_14610__$1;(statearr_14668_14737[2] = null);
(statearr_14668_14737[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 24))
{var inst_14507 = (state_14610[25]);var inst_14524 = (state_14610[2]);var inst_14525 = cljs.core.next.call(null,inst_14507);var inst_14487 = inst_14525;var inst_14488 = null;var inst_14489 = 0;var inst_14490 = 0;var state_14610__$1 = (function (){var statearr_14669 = state_14610;(statearr_14669[14] = inst_14487);
(statearr_14669[29] = inst_14524);
(statearr_14669[15] = inst_14489);
(statearr_14669[16] = inst_14488);
(statearr_14669[17] = inst_14490);
return statearr_14669;
})();var statearr_14670_14738 = state_14610__$1;(statearr_14670_14738[2] = null);
(statearr_14670_14738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 25))
{var inst_14548 = (state_14610[11]);var inst_14549 = (state_14610[12]);var inst_14551 = (inst_14549 < inst_14548);var inst_14552 = inst_14551;var state_14610__$1 = state_14610;if(cljs.core.truth_(inst_14552))
{var statearr_14671_14739 = state_14610__$1;(statearr_14671_14739[1] = 27);
} else
{var statearr_14672_14740 = state_14610__$1;(statearr_14672_14740[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 26))
{var inst_14538 = (state_14610[19]);var inst_14596 = (state_14610[2]);var inst_14597 = cljs.core.seq.call(null,inst_14538);var state_14610__$1 = (function (){var statearr_14673 = state_14610;(statearr_14673[30] = inst_14596);
return statearr_14673;
})();if(inst_14597)
{var statearr_14674_14741 = state_14610__$1;(statearr_14674_14741[1] = 42);
} else
{var statearr_14675_14742 = state_14610__$1;(statearr_14675_14742[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 27))
{var inst_14547 = (state_14610[10]);var inst_14549 = (state_14610[12]);var inst_14554 = cljs.core._nth.call(null,inst_14547,inst_14549);var state_14610__$1 = (function (){var statearr_14676 = state_14610;(statearr_14676[8] = inst_14554);
return statearr_14676;
})();var statearr_14677_14743 = state_14610__$1;(statearr_14677_14743[2] = null);
(statearr_14677_14743[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 28))
{var inst_14567 = (state_14610[9]);var inst_14546 = (state_14610[13]);var inst_14567__$1 = cljs.core.seq.call(null,inst_14546);var state_14610__$1 = (function (){var statearr_14681 = state_14610;(statearr_14681[9] = inst_14567__$1);
return statearr_14681;
})();if(inst_14567__$1)
{var statearr_14682_14744 = state_14610__$1;(statearr_14682_14744[1] = 33);
} else
{var statearr_14683_14745 = state_14610__$1;(statearr_14683_14745[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 29))
{var inst_14594 = (state_14610[2]);var state_14610__$1 = state_14610;var statearr_14684_14746 = state_14610__$1;(statearr_14684_14746[2] = inst_14594);
(statearr_14684_14746[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 30))
{var inst_14547 = (state_14610[10]);var inst_14548 = (state_14610[11]);var inst_14549 = (state_14610[12]);var inst_14546 = (state_14610[13]);var inst_14563 = (state_14610[2]);var inst_14564 = (inst_14549 + 1);var tmp14678 = inst_14547;var tmp14679 = inst_14548;var tmp14680 = inst_14546;var inst_14546__$1 = tmp14680;var inst_14547__$1 = tmp14678;var inst_14548__$1 = tmp14679;var inst_14549__$1 = inst_14564;var state_14610__$1 = (function (){var statearr_14685 = state_14610;(statearr_14685[31] = inst_14563);
(statearr_14685[10] = inst_14547__$1);
(statearr_14685[11] = inst_14548__$1);
(statearr_14685[12] = inst_14549__$1);
(statearr_14685[13] = inst_14546__$1);
return statearr_14685;
})();var statearr_14686_14747 = state_14610__$1;(statearr_14686_14747[2] = null);
(statearr_14686_14747[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14611 === 31))
{var inst_14554 = (state_14610[8]);var inst_14555 = (state_14610[2]);var inst_14556 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14557 = cljs.core.async.untap_STAR_.call(null,m,inst_14554);var state_14610__$1 = (function (){var statearr_14687 = state_14610;(statearr_14687[32] = inst_14556);
(statearr_14687[33] = inst_14555);
return statearr_14687;
})();var statearr_14688_14748 = state_14610__$1;(statearr_14688_14748[2] = inst_14557);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14610__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14692[0] = state_machine__5507__auto__);
(statearr_14692[1] = 1);
return statearr_14692;
});
var state_machine__5507__auto____1 = (function (state_14610){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14610);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14693){if((e14693 instanceof Object))
{var ex__5510__auto__ = e14693;var statearr_14694_14749 = state_14610;(statearr_14694_14749[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14610);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14693;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14750 = state_14610;
state_14610 = G__14750;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14610){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14695 = f__5522__auto__.call(null);(statearr_14695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14696);
return statearr_14695;
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
cljs.core.async.Mix = (function (){var obj14752 = {};return obj14752;
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
;var m = (function (){if(typeof cljs.core.async.t14862 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14862 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14863){
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
this.meta14863 = meta14863;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14862.cljs$lang$type = true;
cljs.core.async.t14862.cljs$lang$ctorStr = "cljs.core.async/t14862";
cljs.core.async.t14862.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14862");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14862.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14862.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14862.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14862.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14862.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14862.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14862.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14862.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14862.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14864){var self__ = this;
var _14864__$1 = this;return self__.meta14863;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14864,meta14863__$1){var self__ = this;
var _14864__$1 = this;return (new cljs.core.async.t14862(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14863__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14862 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14862(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14863){return (new cljs.core.async.t14862(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14863));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14862(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14971 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14929){var state_val_14930 = (state_14929[1]);if((state_val_14930 === 1))
{var inst_14868 = (state_14929[7]);var inst_14868__$1 = calc_state.call(null);var inst_14869 = cljs.core.seq_QMARK_.call(null,inst_14868__$1);var state_14929__$1 = (function (){var statearr_14931 = state_14929;(statearr_14931[7] = inst_14868__$1);
return statearr_14931;
})();if(inst_14869)
{var statearr_14932_14972 = state_14929__$1;(statearr_14932_14972[1] = 2);
} else
{var statearr_14933_14973 = state_14929__$1;(statearr_14933_14973[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 2))
{var inst_14868 = (state_14929[7]);var inst_14871 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14868);var state_14929__$1 = state_14929;var statearr_14934_14974 = state_14929__$1;(statearr_14934_14974[2] = inst_14871);
(statearr_14934_14974[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 3))
{var inst_14868 = (state_14929[7]);var state_14929__$1 = state_14929;var statearr_14935_14975 = state_14929__$1;(statearr_14935_14975[2] = inst_14868);
(statearr_14935_14975[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 4))
{var inst_14868 = (state_14929[7]);var inst_14874 = (state_14929[2]);var inst_14875 = cljs.core.get.call(null,inst_14874,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14876 = cljs.core.get.call(null,inst_14874,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14877 = cljs.core.get.call(null,inst_14874,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14878 = inst_14868;var state_14929__$1 = (function (){var statearr_14936 = state_14929;(statearr_14936[8] = inst_14877);
(statearr_14936[9] = inst_14878);
(statearr_14936[10] = inst_14876);
(statearr_14936[11] = inst_14875);
return statearr_14936;
})();var statearr_14937_14976 = state_14929__$1;(statearr_14937_14976[2] = null);
(statearr_14937_14976[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 5))
{var inst_14878 = (state_14929[9]);var inst_14881 = cljs.core.seq_QMARK_.call(null,inst_14878);var state_14929__$1 = state_14929;if(inst_14881)
{var statearr_14938_14977 = state_14929__$1;(statearr_14938_14977[1] = 7);
} else
{var statearr_14939_14978 = state_14929__$1;(statearr_14939_14978[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 6))
{var inst_14927 = (state_14929[2]);var state_14929__$1 = state_14929;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14929__$1,inst_14927);
} else
{if((state_val_14930 === 7))
{var inst_14878 = (state_14929[9]);var inst_14883 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14878);var state_14929__$1 = state_14929;var statearr_14940_14979 = state_14929__$1;(statearr_14940_14979[2] = inst_14883);
(statearr_14940_14979[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 8))
{var inst_14878 = (state_14929[9]);var state_14929__$1 = state_14929;var statearr_14941_14980 = state_14929__$1;(statearr_14941_14980[2] = inst_14878);
(statearr_14941_14980[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 9))
{var inst_14886 = (state_14929[12]);var inst_14886__$1 = (state_14929[2]);var inst_14887 = cljs.core.get.call(null,inst_14886__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14888 = cljs.core.get.call(null,inst_14886__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14889 = cljs.core.get.call(null,inst_14886__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14929__$1 = (function (){var statearr_14942 = state_14929;(statearr_14942[13] = inst_14888);
(statearr_14942[14] = inst_14889);
(statearr_14942[12] = inst_14886__$1);
return statearr_14942;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14929__$1,10,inst_14887);
} else
{if((state_val_14930 === 10))
{var inst_14893 = (state_14929[15]);var inst_14894 = (state_14929[16]);var inst_14892 = (state_14929[2]);var inst_14893__$1 = cljs.core.nth.call(null,inst_14892,0,null);var inst_14894__$1 = cljs.core.nth.call(null,inst_14892,1,null);var inst_14895 = (inst_14893__$1 == null);var inst_14896 = cljs.core._EQ_.call(null,inst_14894__$1,change);var inst_14897 = (inst_14895) || (inst_14896);var state_14929__$1 = (function (){var statearr_14943 = state_14929;(statearr_14943[15] = inst_14893__$1);
(statearr_14943[16] = inst_14894__$1);
return statearr_14943;
})();if(cljs.core.truth_(inst_14897))
{var statearr_14944_14981 = state_14929__$1;(statearr_14944_14981[1] = 11);
} else
{var statearr_14945_14982 = state_14929__$1;(statearr_14945_14982[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 11))
{var inst_14893 = (state_14929[15]);var inst_14899 = (inst_14893 == null);var state_14929__$1 = state_14929;if(cljs.core.truth_(inst_14899))
{var statearr_14946_14983 = state_14929__$1;(statearr_14946_14983[1] = 14);
} else
{var statearr_14947_14984 = state_14929__$1;(statearr_14947_14984[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 12))
{var inst_14889 = (state_14929[14]);var inst_14894 = (state_14929[16]);var inst_14908 = (state_14929[17]);var inst_14908__$1 = inst_14889.call(null,inst_14894);var state_14929__$1 = (function (){var statearr_14948 = state_14929;(statearr_14948[17] = inst_14908__$1);
return statearr_14948;
})();if(cljs.core.truth_(inst_14908__$1))
{var statearr_14949_14985 = state_14929__$1;(statearr_14949_14985[1] = 17);
} else
{var statearr_14950_14986 = state_14929__$1;(statearr_14950_14986[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 13))
{var inst_14925 = (state_14929[2]);var state_14929__$1 = state_14929;var statearr_14951_14987 = state_14929__$1;(statearr_14951_14987[2] = inst_14925);
(statearr_14951_14987[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 14))
{var inst_14894 = (state_14929[16]);var inst_14901 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14894);var state_14929__$1 = state_14929;var statearr_14952_14988 = state_14929__$1;(statearr_14952_14988[2] = inst_14901);
(statearr_14952_14988[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 15))
{var state_14929__$1 = state_14929;var statearr_14953_14989 = state_14929__$1;(statearr_14953_14989[2] = null);
(statearr_14953_14989[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 16))
{var inst_14904 = (state_14929[2]);var inst_14905 = calc_state.call(null);var inst_14878 = inst_14905;var state_14929__$1 = (function (){var statearr_14954 = state_14929;(statearr_14954[18] = inst_14904);
(statearr_14954[9] = inst_14878);
return statearr_14954;
})();var statearr_14955_14990 = state_14929__$1;(statearr_14955_14990[2] = null);
(statearr_14955_14990[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 17))
{var inst_14908 = (state_14929[17]);var state_14929__$1 = state_14929;var statearr_14956_14991 = state_14929__$1;(statearr_14956_14991[2] = inst_14908);
(statearr_14956_14991[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 18))
{var inst_14888 = (state_14929[13]);var inst_14889 = (state_14929[14]);var inst_14894 = (state_14929[16]);var inst_14911 = cljs.core.empty_QMARK_.call(null,inst_14889);var inst_14912 = inst_14888.call(null,inst_14894);var inst_14913 = cljs.core.not.call(null,inst_14912);var inst_14914 = (inst_14911) && (inst_14913);var state_14929__$1 = state_14929;var statearr_14957_14992 = state_14929__$1;(statearr_14957_14992[2] = inst_14914);
(statearr_14957_14992[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 19))
{var inst_14916 = (state_14929[2]);var state_14929__$1 = state_14929;if(cljs.core.truth_(inst_14916))
{var statearr_14958_14993 = state_14929__$1;(statearr_14958_14993[1] = 20);
} else
{var statearr_14959_14994 = state_14929__$1;(statearr_14959_14994[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 20))
{var inst_14893 = (state_14929[15]);var state_14929__$1 = state_14929;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14929__$1,23,out,inst_14893);
} else
{if((state_val_14930 === 21))
{var state_14929__$1 = state_14929;var statearr_14960_14995 = state_14929__$1;(statearr_14960_14995[2] = null);
(statearr_14960_14995[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 22))
{var inst_14886 = (state_14929[12]);var inst_14922 = (state_14929[2]);var inst_14878 = inst_14886;var state_14929__$1 = (function (){var statearr_14961 = state_14929;(statearr_14961[19] = inst_14922);
(statearr_14961[9] = inst_14878);
return statearr_14961;
})();var statearr_14962_14996 = state_14929__$1;(statearr_14962_14996[2] = null);
(statearr_14962_14996[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14930 === 23))
{var inst_14919 = (state_14929[2]);var state_14929__$1 = state_14929;var statearr_14963_14997 = state_14929__$1;(statearr_14963_14997[2] = inst_14919);
(statearr_14963_14997[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14967[0] = state_machine__5507__auto__);
(statearr_14967[1] = 1);
return statearr_14967;
});
var state_machine__5507__auto____1 = (function (state_14929){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14929);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14968){if((e14968 instanceof Object))
{var ex__5510__auto__ = e14968;var statearr_14969_14998 = state_14929;(statearr_14969_14998[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14929);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14999 = state_14929;
state_14929 = G__14999;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14929){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14929);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14970 = f__5522__auto__.call(null);(statearr_14970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14971);
return statearr_14970;
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
cljs.core.async.Pub = (function (){var obj15001 = {};return obj15001;
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
return (function (p1__15002_SHARP_){if(cljs.core.truth_(p1__15002_SHARP_.call(null,topic)))
{return p1__15002_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15002_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15127 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15127 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15128){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15128 = meta15128;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15127.cljs$lang$type = true;
cljs.core.async.t15127.cljs$lang$ctorStr = "cljs.core.async/t15127";
cljs.core.async.t15127.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15127");
});})(mults,ensure_mult))
;
cljs.core.async.t15127.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15127.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15127.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15127.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15127.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15129){var self__ = this;
var _15129__$1 = this;return self__.meta15128;
});})(mults,ensure_mult))
;
cljs.core.async.t15127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15129,meta15128__$1){var self__ = this;
var _15129__$1 = this;return (new cljs.core.async.t15127(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15128__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15127 = ((function (mults,ensure_mult){
return (function __GT_t15127(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15128){return (new cljs.core.async.t15127(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15128));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15127(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15251 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15203){var state_val_15204 = (state_15203[1]);if((state_val_15204 === 1))
{var state_15203__$1 = state_15203;var statearr_15205_15252 = state_15203__$1;(statearr_15205_15252[2] = null);
(statearr_15205_15252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 2))
{var state_15203__$1 = state_15203;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15203__$1,4,ch);
} else
{if((state_val_15204 === 3))
{var inst_15201 = (state_15203[2]);var state_15203__$1 = state_15203;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15203__$1,inst_15201);
} else
{if((state_val_15204 === 4))
{var inst_15132 = (state_15203[7]);var inst_15132__$1 = (state_15203[2]);var inst_15133 = (inst_15132__$1 == null);var state_15203__$1 = (function (){var statearr_15206 = state_15203;(statearr_15206[7] = inst_15132__$1);
return statearr_15206;
})();if(cljs.core.truth_(inst_15133))
{var statearr_15207_15253 = state_15203__$1;(statearr_15207_15253[1] = 5);
} else
{var statearr_15208_15254 = state_15203__$1;(statearr_15208_15254[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 5))
{var inst_15139 = cljs.core.deref.call(null,mults);var inst_15140 = cljs.core.vals.call(null,inst_15139);var inst_15141 = cljs.core.seq.call(null,inst_15140);var inst_15142 = inst_15141;var inst_15143 = null;var inst_15144 = 0;var inst_15145 = 0;var state_15203__$1 = (function (){var statearr_15209 = state_15203;(statearr_15209[8] = inst_15144);
(statearr_15209[9] = inst_15145);
(statearr_15209[10] = inst_15143);
(statearr_15209[11] = inst_15142);
return statearr_15209;
})();var statearr_15210_15255 = state_15203__$1;(statearr_15210_15255[2] = null);
(statearr_15210_15255[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 6))
{var inst_15132 = (state_15203[7]);var inst_15180 = (state_15203[12]);var inst_15182 = (state_15203[13]);var inst_15180__$1 = topic_fn.call(null,inst_15132);var inst_15181 = cljs.core.deref.call(null,mults);var inst_15182__$1 = cljs.core.get.call(null,inst_15181,inst_15180__$1);var state_15203__$1 = (function (){var statearr_15211 = state_15203;(statearr_15211[12] = inst_15180__$1);
(statearr_15211[13] = inst_15182__$1);
return statearr_15211;
})();if(cljs.core.truth_(inst_15182__$1))
{var statearr_15212_15256 = state_15203__$1;(statearr_15212_15256[1] = 19);
} else
{var statearr_15213_15257 = state_15203__$1;(statearr_15213_15257[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 7))
{var inst_15199 = (state_15203[2]);var state_15203__$1 = state_15203;var statearr_15214_15258 = state_15203__$1;(statearr_15214_15258[2] = inst_15199);
(statearr_15214_15258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 8))
{var inst_15144 = (state_15203[8]);var inst_15145 = (state_15203[9]);var inst_15147 = (inst_15145 < inst_15144);var inst_15148 = inst_15147;var state_15203__$1 = state_15203;if(cljs.core.truth_(inst_15148))
{var statearr_15218_15259 = state_15203__$1;(statearr_15218_15259[1] = 10);
} else
{var statearr_15219_15260 = state_15203__$1;(statearr_15219_15260[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 9))
{var inst_15178 = (state_15203[2]);var state_15203__$1 = state_15203;var statearr_15220_15261 = state_15203__$1;(statearr_15220_15261[2] = inst_15178);
(statearr_15220_15261[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 10))
{var inst_15144 = (state_15203[8]);var inst_15145 = (state_15203[9]);var inst_15143 = (state_15203[10]);var inst_15142 = (state_15203[11]);var inst_15150 = cljs.core._nth.call(null,inst_15143,inst_15145);var inst_15151 = cljs.core.async.muxch_STAR_.call(null,inst_15150);var inst_15152 = cljs.core.async.close_BANG_.call(null,inst_15151);var inst_15153 = (inst_15145 + 1);var tmp15215 = inst_15144;var tmp15216 = inst_15143;var tmp15217 = inst_15142;var inst_15142__$1 = tmp15217;var inst_15143__$1 = tmp15216;var inst_15144__$1 = tmp15215;var inst_15145__$1 = inst_15153;var state_15203__$1 = (function (){var statearr_15221 = state_15203;(statearr_15221[8] = inst_15144__$1);
(statearr_15221[9] = inst_15145__$1);
(statearr_15221[10] = inst_15143__$1);
(statearr_15221[11] = inst_15142__$1);
(statearr_15221[14] = inst_15152);
return statearr_15221;
})();var statearr_15222_15262 = state_15203__$1;(statearr_15222_15262[2] = null);
(statearr_15222_15262[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 11))
{var inst_15142 = (state_15203[11]);var inst_15156 = (state_15203[15]);var inst_15156__$1 = cljs.core.seq.call(null,inst_15142);var state_15203__$1 = (function (){var statearr_15223 = state_15203;(statearr_15223[15] = inst_15156__$1);
return statearr_15223;
})();if(inst_15156__$1)
{var statearr_15224_15263 = state_15203__$1;(statearr_15224_15263[1] = 13);
} else
{var statearr_15225_15264 = state_15203__$1;(statearr_15225_15264[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 12))
{var inst_15176 = (state_15203[2]);var state_15203__$1 = state_15203;var statearr_15226_15265 = state_15203__$1;(statearr_15226_15265[2] = inst_15176);
(statearr_15226_15265[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 13))
{var inst_15156 = (state_15203[15]);var inst_15158 = cljs.core.chunked_seq_QMARK_.call(null,inst_15156);var state_15203__$1 = state_15203;if(inst_15158)
{var statearr_15227_15266 = state_15203__$1;(statearr_15227_15266[1] = 16);
} else
{var statearr_15228_15267 = state_15203__$1;(statearr_15228_15267[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 14))
{var state_15203__$1 = state_15203;var statearr_15229_15268 = state_15203__$1;(statearr_15229_15268[2] = null);
(statearr_15229_15268[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 15))
{var inst_15174 = (state_15203[2]);var state_15203__$1 = state_15203;var statearr_15230_15269 = state_15203__$1;(statearr_15230_15269[2] = inst_15174);
(statearr_15230_15269[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 16))
{var inst_15156 = (state_15203[15]);var inst_15160 = cljs.core.chunk_first.call(null,inst_15156);var inst_15161 = cljs.core.chunk_rest.call(null,inst_15156);var inst_15162 = cljs.core.count.call(null,inst_15160);var inst_15142 = inst_15161;var inst_15143 = inst_15160;var inst_15144 = inst_15162;var inst_15145 = 0;var state_15203__$1 = (function (){var statearr_15231 = state_15203;(statearr_15231[8] = inst_15144);
(statearr_15231[9] = inst_15145);
(statearr_15231[10] = inst_15143);
(statearr_15231[11] = inst_15142);
return statearr_15231;
})();var statearr_15232_15270 = state_15203__$1;(statearr_15232_15270[2] = null);
(statearr_15232_15270[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 17))
{var inst_15156 = (state_15203[15]);var inst_15165 = cljs.core.first.call(null,inst_15156);var inst_15166 = cljs.core.async.muxch_STAR_.call(null,inst_15165);var inst_15167 = cljs.core.async.close_BANG_.call(null,inst_15166);var inst_15168 = cljs.core.next.call(null,inst_15156);var inst_15142 = inst_15168;var inst_15143 = null;var inst_15144 = 0;var inst_15145 = 0;var state_15203__$1 = (function (){var statearr_15233 = state_15203;(statearr_15233[8] = inst_15144);
(statearr_15233[9] = inst_15145);
(statearr_15233[10] = inst_15143);
(statearr_15233[11] = inst_15142);
(statearr_15233[16] = inst_15167);
return statearr_15233;
})();var statearr_15234_15271 = state_15203__$1;(statearr_15234_15271[2] = null);
(statearr_15234_15271[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 18))
{var inst_15171 = (state_15203[2]);var state_15203__$1 = state_15203;var statearr_15235_15272 = state_15203__$1;(statearr_15235_15272[2] = inst_15171);
(statearr_15235_15272[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 19))
{var state_15203__$1 = state_15203;var statearr_15236_15273 = state_15203__$1;(statearr_15236_15273[2] = null);
(statearr_15236_15273[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 20))
{var state_15203__$1 = state_15203;var statearr_15237_15274 = state_15203__$1;(statearr_15237_15274[2] = null);
(statearr_15237_15274[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 21))
{var inst_15196 = (state_15203[2]);var state_15203__$1 = (function (){var statearr_15238 = state_15203;(statearr_15238[17] = inst_15196);
return statearr_15238;
})();var statearr_15239_15275 = state_15203__$1;(statearr_15239_15275[2] = null);
(statearr_15239_15275[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 22))
{var inst_15193 = (state_15203[2]);var state_15203__$1 = state_15203;var statearr_15240_15276 = state_15203__$1;(statearr_15240_15276[2] = inst_15193);
(statearr_15240_15276[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 23))
{var inst_15180 = (state_15203[12]);var inst_15184 = (state_15203[2]);var inst_15185 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15180);var state_15203__$1 = (function (){var statearr_15241 = state_15203;(statearr_15241[18] = inst_15184);
return statearr_15241;
})();var statearr_15242_15277 = state_15203__$1;(statearr_15242_15277[2] = inst_15185);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15203__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15204 === 24))
{var inst_15132 = (state_15203[7]);var inst_15182 = (state_15203[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15203,23,Object,null,22);var inst_15189 = cljs.core.async.muxch_STAR_.call(null,inst_15182);var state_15203__$1 = state_15203;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15203__$1,25,inst_15189,inst_15132);
} else
{if((state_val_15204 === 25))
{var inst_15191 = (state_15203[2]);var state_15203__$1 = state_15203;var statearr_15243_15278 = state_15203__$1;(statearr_15243_15278[2] = inst_15191);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15203__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15247 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15247[0] = state_machine__5507__auto__);
(statearr_15247[1] = 1);
return statearr_15247;
});
var state_machine__5507__auto____1 = (function (state_15203){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15203);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15248){if((e15248 instanceof Object))
{var ex__5510__auto__ = e15248;var statearr_15249_15279 = state_15203;(statearr_15249_15279[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15203);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15280 = state_15203;
state_15203 = G__15280;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15203){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15203);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15250 = f__5522__auto__.call(null);(statearr_15250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15251);
return statearr_15250;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15417 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15387){var state_val_15388 = (state_15387[1]);if((state_val_15388 === 1))
{var state_15387__$1 = state_15387;var statearr_15389_15418 = state_15387__$1;(statearr_15389_15418[2] = null);
(statearr_15389_15418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 2))
{var inst_15350 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15351 = 0;var state_15387__$1 = (function (){var statearr_15390 = state_15387;(statearr_15390[7] = inst_15350);
(statearr_15390[8] = inst_15351);
return statearr_15390;
})();var statearr_15391_15419 = state_15387__$1;(statearr_15391_15419[2] = null);
(statearr_15391_15419[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 3))
{var inst_15385 = (state_15387[2]);var state_15387__$1 = state_15387;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15387__$1,inst_15385);
} else
{if((state_val_15388 === 4))
{var inst_15351 = (state_15387[8]);var inst_15353 = (inst_15351 < cnt);var state_15387__$1 = state_15387;if(cljs.core.truth_(inst_15353))
{var statearr_15392_15420 = state_15387__$1;(statearr_15392_15420[1] = 6);
} else
{var statearr_15393_15421 = state_15387__$1;(statearr_15393_15421[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 5))
{var inst_15371 = (state_15387[2]);var state_15387__$1 = (function (){var statearr_15394 = state_15387;(statearr_15394[9] = inst_15371);
return statearr_15394;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15387__$1,12,dchan);
} else
{if((state_val_15388 === 6))
{var state_15387__$1 = state_15387;var statearr_15395_15422 = state_15387__$1;(statearr_15395_15422[2] = null);
(statearr_15395_15422[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 7))
{var state_15387__$1 = state_15387;var statearr_15396_15423 = state_15387__$1;(statearr_15396_15423[2] = null);
(statearr_15396_15423[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 8))
{var inst_15369 = (state_15387[2]);var state_15387__$1 = state_15387;var statearr_15397_15424 = state_15387__$1;(statearr_15397_15424[2] = inst_15369);
(statearr_15397_15424[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 9))
{var inst_15351 = (state_15387[8]);var inst_15364 = (state_15387[2]);var inst_15365 = (inst_15351 + 1);var inst_15351__$1 = inst_15365;var state_15387__$1 = (function (){var statearr_15398 = state_15387;(statearr_15398[8] = inst_15351__$1);
(statearr_15398[10] = inst_15364);
return statearr_15398;
})();var statearr_15399_15425 = state_15387__$1;(statearr_15399_15425[2] = null);
(statearr_15399_15425[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 10))
{var inst_15355 = (state_15387[2]);var inst_15356 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15387__$1 = (function (){var statearr_15400 = state_15387;(statearr_15400[11] = inst_15355);
return statearr_15400;
})();var statearr_15401_15426 = state_15387__$1;(statearr_15401_15426[2] = inst_15356);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15387__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 11))
{var inst_15351 = (state_15387[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15387,10,Object,null,9);var inst_15360 = chs__$1.call(null,inst_15351);var inst_15361 = done.call(null,inst_15351);var inst_15362 = cljs.core.async.take_BANG_.call(null,inst_15360,inst_15361);var state_15387__$1 = state_15387;var statearr_15402_15427 = state_15387__$1;(statearr_15402_15427[2] = inst_15362);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15387__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 12))
{var inst_15373 = (state_15387[12]);var inst_15373__$1 = (state_15387[2]);var inst_15374 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15373__$1);var state_15387__$1 = (function (){var statearr_15403 = state_15387;(statearr_15403[12] = inst_15373__$1);
return statearr_15403;
})();if(cljs.core.truth_(inst_15374))
{var statearr_15404_15428 = state_15387__$1;(statearr_15404_15428[1] = 13);
} else
{var statearr_15405_15429 = state_15387__$1;(statearr_15405_15429[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 13))
{var inst_15376 = cljs.core.async.close_BANG_.call(null,out);var state_15387__$1 = state_15387;var statearr_15406_15430 = state_15387__$1;(statearr_15406_15430[2] = inst_15376);
(statearr_15406_15430[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 14))
{var inst_15373 = (state_15387[12]);var inst_15378 = cljs.core.apply.call(null,f,inst_15373);var state_15387__$1 = state_15387;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15387__$1,16,out,inst_15378);
} else
{if((state_val_15388 === 15))
{var inst_15383 = (state_15387[2]);var state_15387__$1 = state_15387;var statearr_15407_15431 = state_15387__$1;(statearr_15407_15431[2] = inst_15383);
(statearr_15407_15431[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15388 === 16))
{var inst_15380 = (state_15387[2]);var state_15387__$1 = (function (){var statearr_15408 = state_15387;(statearr_15408[13] = inst_15380);
return statearr_15408;
})();var statearr_15409_15432 = state_15387__$1;(statearr_15409_15432[2] = null);
(statearr_15409_15432[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15413[0] = state_machine__5507__auto__);
(statearr_15413[1] = 1);
return statearr_15413;
});
var state_machine__5507__auto____1 = (function (state_15387){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15387);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15414){if((e15414 instanceof Object))
{var ex__5510__auto__ = e15414;var statearr_15415_15433 = state_15387;(statearr_15415_15433[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15387);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15434 = state_15387;
state_15387 = G__15434;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15387){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15387);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15416 = f__5522__auto__.call(null);(statearr_15416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15417);
return statearr_15416;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15542 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15518){var state_val_15519 = (state_15518[1]);if((state_val_15519 === 1))
{var inst_15489 = cljs.core.vec.call(null,chs);var inst_15490 = inst_15489;var state_15518__$1 = (function (){var statearr_15520 = state_15518;(statearr_15520[7] = inst_15490);
return statearr_15520;
})();var statearr_15521_15543 = state_15518__$1;(statearr_15521_15543[2] = null);
(statearr_15521_15543[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15519 === 2))
{var inst_15490 = (state_15518[7]);var inst_15492 = cljs.core.count.call(null,inst_15490);var inst_15493 = (inst_15492 > 0);var state_15518__$1 = state_15518;if(cljs.core.truth_(inst_15493))
{var statearr_15522_15544 = state_15518__$1;(statearr_15522_15544[1] = 4);
} else
{var statearr_15523_15545 = state_15518__$1;(statearr_15523_15545[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15519 === 3))
{var inst_15516 = (state_15518[2]);var state_15518__$1 = state_15518;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15518__$1,inst_15516);
} else
{if((state_val_15519 === 4))
{var inst_15490 = (state_15518[7]);var state_15518__$1 = state_15518;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15518__$1,7,inst_15490);
} else
{if((state_val_15519 === 5))
{var inst_15512 = cljs.core.async.close_BANG_.call(null,out);var state_15518__$1 = state_15518;var statearr_15524_15546 = state_15518__$1;(statearr_15524_15546[2] = inst_15512);
(statearr_15524_15546[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15519 === 6))
{var inst_15514 = (state_15518[2]);var state_15518__$1 = state_15518;var statearr_15525_15547 = state_15518__$1;(statearr_15525_15547[2] = inst_15514);
(statearr_15525_15547[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15519 === 7))
{var inst_15498 = (state_15518[8]);var inst_15497 = (state_15518[9]);var inst_15497__$1 = (state_15518[2]);var inst_15498__$1 = cljs.core.nth.call(null,inst_15497__$1,0,null);var inst_15499 = cljs.core.nth.call(null,inst_15497__$1,1,null);var inst_15500 = (inst_15498__$1 == null);var state_15518__$1 = (function (){var statearr_15526 = state_15518;(statearr_15526[8] = inst_15498__$1);
(statearr_15526[10] = inst_15499);
(statearr_15526[9] = inst_15497__$1);
return statearr_15526;
})();if(cljs.core.truth_(inst_15500))
{var statearr_15527_15548 = state_15518__$1;(statearr_15527_15548[1] = 8);
} else
{var statearr_15528_15549 = state_15518__$1;(statearr_15528_15549[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15519 === 8))
{var inst_15498 = (state_15518[8]);var inst_15499 = (state_15518[10]);var inst_15497 = (state_15518[9]);var inst_15490 = (state_15518[7]);var inst_15502 = (function (){var c = inst_15499;var v = inst_15498;var vec__15495 = inst_15497;var cs = inst_15490;return ((function (c,v,vec__15495,cs,inst_15498,inst_15499,inst_15497,inst_15490,state_val_15519){
return (function (p1__15435_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15435_SHARP_);
});
;})(c,v,vec__15495,cs,inst_15498,inst_15499,inst_15497,inst_15490,state_val_15519))
})();var inst_15503 = cljs.core.filterv.call(null,inst_15502,inst_15490);var inst_15490__$1 = inst_15503;var state_15518__$1 = (function (){var statearr_15529 = state_15518;(statearr_15529[7] = inst_15490__$1);
return statearr_15529;
})();var statearr_15530_15550 = state_15518__$1;(statearr_15530_15550[2] = null);
(statearr_15530_15550[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15519 === 9))
{var inst_15498 = (state_15518[8]);var state_15518__$1 = state_15518;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15518__$1,11,out,inst_15498);
} else
{if((state_val_15519 === 10))
{var inst_15510 = (state_15518[2]);var state_15518__$1 = state_15518;var statearr_15532_15551 = state_15518__$1;(statearr_15532_15551[2] = inst_15510);
(statearr_15532_15551[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15519 === 11))
{var inst_15490 = (state_15518[7]);var inst_15507 = (state_15518[2]);var tmp15531 = inst_15490;var inst_15490__$1 = tmp15531;var state_15518__$1 = (function (){var statearr_15533 = state_15518;(statearr_15533[7] = inst_15490__$1);
(statearr_15533[11] = inst_15507);
return statearr_15533;
})();var statearr_15534_15552 = state_15518__$1;(statearr_15534_15552[2] = null);
(statearr_15534_15552[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15538 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15538[0] = state_machine__5507__auto__);
(statearr_15538[1] = 1);
return statearr_15538;
});
var state_machine__5507__auto____1 = (function (state_15518){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15518);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15539){if((e15539 instanceof Object))
{var ex__5510__auto__ = e15539;var statearr_15540_15553 = state_15518;(statearr_15540_15553[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15518);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15539;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15554 = state_15518;
state_15518 = G__15554;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15518){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15541 = f__5522__auto__.call(null);(statearr_15541[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15542);
return statearr_15541;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15647 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15624){var state_val_15625 = (state_15624[1]);if((state_val_15625 === 1))
{var inst_15601 = 0;var state_15624__$1 = (function (){var statearr_15626 = state_15624;(statearr_15626[7] = inst_15601);
return statearr_15626;
})();var statearr_15627_15648 = state_15624__$1;(statearr_15627_15648[2] = null);
(statearr_15627_15648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15625 === 2))
{var inst_15601 = (state_15624[7]);var inst_15603 = (inst_15601 < n);var state_15624__$1 = state_15624;if(cljs.core.truth_(inst_15603))
{var statearr_15628_15649 = state_15624__$1;(statearr_15628_15649[1] = 4);
} else
{var statearr_15629_15650 = state_15624__$1;(statearr_15629_15650[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15625 === 3))
{var inst_15621 = (state_15624[2]);var inst_15622 = cljs.core.async.close_BANG_.call(null,out);var state_15624__$1 = (function (){var statearr_15630 = state_15624;(statearr_15630[8] = inst_15621);
return statearr_15630;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15624__$1,inst_15622);
} else
{if((state_val_15625 === 4))
{var state_15624__$1 = state_15624;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15624__$1,7,ch);
} else
{if((state_val_15625 === 5))
{var state_15624__$1 = state_15624;var statearr_15631_15651 = state_15624__$1;(statearr_15631_15651[2] = null);
(statearr_15631_15651[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15625 === 6))
{var inst_15619 = (state_15624[2]);var state_15624__$1 = state_15624;var statearr_15632_15652 = state_15624__$1;(statearr_15632_15652[2] = inst_15619);
(statearr_15632_15652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15625 === 7))
{var inst_15606 = (state_15624[9]);var inst_15606__$1 = (state_15624[2]);var inst_15607 = (inst_15606__$1 == null);var inst_15608 = cljs.core.not.call(null,inst_15607);var state_15624__$1 = (function (){var statearr_15633 = state_15624;(statearr_15633[9] = inst_15606__$1);
return statearr_15633;
})();if(inst_15608)
{var statearr_15634_15653 = state_15624__$1;(statearr_15634_15653[1] = 8);
} else
{var statearr_15635_15654 = state_15624__$1;(statearr_15635_15654[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15625 === 8))
{var inst_15606 = (state_15624[9]);var state_15624__$1 = state_15624;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15624__$1,11,out,inst_15606);
} else
{if((state_val_15625 === 9))
{var state_15624__$1 = state_15624;var statearr_15636_15655 = state_15624__$1;(statearr_15636_15655[2] = null);
(statearr_15636_15655[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15625 === 10))
{var inst_15616 = (state_15624[2]);var state_15624__$1 = state_15624;var statearr_15637_15656 = state_15624__$1;(statearr_15637_15656[2] = inst_15616);
(statearr_15637_15656[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15625 === 11))
{var inst_15601 = (state_15624[7]);var inst_15611 = (state_15624[2]);var inst_15612 = (inst_15601 + 1);var inst_15601__$1 = inst_15612;var state_15624__$1 = (function (){var statearr_15638 = state_15624;(statearr_15638[10] = inst_15611);
(statearr_15638[7] = inst_15601__$1);
return statearr_15638;
})();var statearr_15639_15657 = state_15624__$1;(statearr_15639_15657[2] = null);
(statearr_15639_15657[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15643 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15643[0] = state_machine__5507__auto__);
(statearr_15643[1] = 1);
return statearr_15643;
});
var state_machine__5507__auto____1 = (function (state_15624){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15624);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15644){if((e15644 instanceof Object))
{var ex__5510__auto__ = e15644;var statearr_15645_15658 = state_15624;(statearr_15645_15658[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15624);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15644;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15659 = state_15624;
state_15624 = G__15659;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15624){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15624);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15646 = f__5522__auto__.call(null);(statearr_15646[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15647);
return statearr_15646;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15756 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15731){var state_val_15732 = (state_15731[1]);if((state_val_15732 === 1))
{var inst_15708 = null;var state_15731__$1 = (function (){var statearr_15733 = state_15731;(statearr_15733[7] = inst_15708);
return statearr_15733;
})();var statearr_15734_15757 = state_15731__$1;(statearr_15734_15757[2] = null);
(statearr_15734_15757[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15732 === 2))
{var state_15731__$1 = state_15731;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15731__$1,4,ch);
} else
{if((state_val_15732 === 3))
{var inst_15728 = (state_15731[2]);var inst_15729 = cljs.core.async.close_BANG_.call(null,out);var state_15731__$1 = (function (){var statearr_15735 = state_15731;(statearr_15735[8] = inst_15728);
return statearr_15735;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15731__$1,inst_15729);
} else
{if((state_val_15732 === 4))
{var inst_15711 = (state_15731[9]);var inst_15711__$1 = (state_15731[2]);var inst_15712 = (inst_15711__$1 == null);var inst_15713 = cljs.core.not.call(null,inst_15712);var state_15731__$1 = (function (){var statearr_15736 = state_15731;(statearr_15736[9] = inst_15711__$1);
return statearr_15736;
})();if(inst_15713)
{var statearr_15737_15758 = state_15731__$1;(statearr_15737_15758[1] = 5);
} else
{var statearr_15738_15759 = state_15731__$1;(statearr_15738_15759[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15732 === 5))
{var inst_15708 = (state_15731[7]);var inst_15711 = (state_15731[9]);var inst_15715 = cljs.core._EQ_.call(null,inst_15711,inst_15708);var state_15731__$1 = state_15731;if(inst_15715)
{var statearr_15739_15760 = state_15731__$1;(statearr_15739_15760[1] = 8);
} else
{var statearr_15740_15761 = state_15731__$1;(statearr_15740_15761[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15732 === 6))
{var state_15731__$1 = state_15731;var statearr_15742_15762 = state_15731__$1;(statearr_15742_15762[2] = null);
(statearr_15742_15762[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15732 === 7))
{var inst_15726 = (state_15731[2]);var state_15731__$1 = state_15731;var statearr_15743_15763 = state_15731__$1;(statearr_15743_15763[2] = inst_15726);
(statearr_15743_15763[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15732 === 8))
{var inst_15708 = (state_15731[7]);var tmp15741 = inst_15708;var inst_15708__$1 = tmp15741;var state_15731__$1 = (function (){var statearr_15744 = state_15731;(statearr_15744[7] = inst_15708__$1);
return statearr_15744;
})();var statearr_15745_15764 = state_15731__$1;(statearr_15745_15764[2] = null);
(statearr_15745_15764[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15732 === 9))
{var inst_15711 = (state_15731[9]);var state_15731__$1 = state_15731;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15731__$1,11,out,inst_15711);
} else
{if((state_val_15732 === 10))
{var inst_15723 = (state_15731[2]);var state_15731__$1 = state_15731;var statearr_15746_15765 = state_15731__$1;(statearr_15746_15765[2] = inst_15723);
(statearr_15746_15765[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15732 === 11))
{var inst_15711 = (state_15731[9]);var inst_15720 = (state_15731[2]);var inst_15708 = inst_15711;var state_15731__$1 = (function (){var statearr_15747 = state_15731;(statearr_15747[7] = inst_15708);
(statearr_15747[10] = inst_15720);
return statearr_15747;
})();var statearr_15748_15766 = state_15731__$1;(statearr_15748_15766[2] = null);
(statearr_15748_15766[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15752 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15752[0] = state_machine__5507__auto__);
(statearr_15752[1] = 1);
return statearr_15752;
});
var state_machine__5507__auto____1 = (function (state_15731){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15731);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15753){if((e15753 instanceof Object))
{var ex__5510__auto__ = e15753;var statearr_15754_15767 = state_15731;(statearr_15754_15767[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15731);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15753;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15768 = state_15731;
state_15731 = G__15768;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15731){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15731);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15755 = f__5522__auto__.call(null);(statearr_15755[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15756);
return statearr_15755;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15903 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15873){var state_val_15874 = (state_15873[1]);if((state_val_15874 === 1))
{var inst_15836 = (new Array(n));var inst_15837 = inst_15836;var inst_15838 = 0;var state_15873__$1 = (function (){var statearr_15875 = state_15873;(statearr_15875[7] = inst_15838);
(statearr_15875[8] = inst_15837);
return statearr_15875;
})();var statearr_15876_15904 = state_15873__$1;(statearr_15876_15904[2] = null);
(statearr_15876_15904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 2))
{var state_15873__$1 = state_15873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15873__$1,4,ch);
} else
{if((state_val_15874 === 3))
{var inst_15871 = (state_15873[2]);var state_15873__$1 = state_15873;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15873__$1,inst_15871);
} else
{if((state_val_15874 === 4))
{var inst_15841 = (state_15873[9]);var inst_15841__$1 = (state_15873[2]);var inst_15842 = (inst_15841__$1 == null);var inst_15843 = cljs.core.not.call(null,inst_15842);var state_15873__$1 = (function (){var statearr_15877 = state_15873;(statearr_15877[9] = inst_15841__$1);
return statearr_15877;
})();if(inst_15843)
{var statearr_15878_15905 = state_15873__$1;(statearr_15878_15905[1] = 5);
} else
{var statearr_15879_15906 = state_15873__$1;(statearr_15879_15906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 5))
{var inst_15838 = (state_15873[7]);var inst_15846 = (state_15873[10]);var inst_15837 = (state_15873[8]);var inst_15841 = (state_15873[9]);var inst_15845 = (inst_15837[inst_15838] = inst_15841);var inst_15846__$1 = (inst_15838 + 1);var inst_15847 = (inst_15846__$1 < n);var state_15873__$1 = (function (){var statearr_15880 = state_15873;(statearr_15880[11] = inst_15845);
(statearr_15880[10] = inst_15846__$1);
return statearr_15880;
})();if(cljs.core.truth_(inst_15847))
{var statearr_15881_15907 = state_15873__$1;(statearr_15881_15907[1] = 8);
} else
{var statearr_15882_15908 = state_15873__$1;(statearr_15882_15908[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 6))
{var inst_15838 = (state_15873[7]);var inst_15859 = (inst_15838 > 0);var state_15873__$1 = state_15873;if(cljs.core.truth_(inst_15859))
{var statearr_15884_15909 = state_15873__$1;(statearr_15884_15909[1] = 12);
} else
{var statearr_15885_15910 = state_15873__$1;(statearr_15885_15910[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 7))
{var inst_15869 = (state_15873[2]);var state_15873__$1 = state_15873;var statearr_15886_15911 = state_15873__$1;(statearr_15886_15911[2] = inst_15869);
(statearr_15886_15911[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 8))
{var inst_15846 = (state_15873[10]);var inst_15837 = (state_15873[8]);var tmp15883 = inst_15837;var inst_15837__$1 = tmp15883;var inst_15838 = inst_15846;var state_15873__$1 = (function (){var statearr_15887 = state_15873;(statearr_15887[7] = inst_15838);
(statearr_15887[8] = inst_15837__$1);
return statearr_15887;
})();var statearr_15888_15912 = state_15873__$1;(statearr_15888_15912[2] = null);
(statearr_15888_15912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 9))
{var inst_15837 = (state_15873[8]);var inst_15851 = cljs.core.vec.call(null,inst_15837);var state_15873__$1 = state_15873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15873__$1,11,out,inst_15851);
} else
{if((state_val_15874 === 10))
{var inst_15857 = (state_15873[2]);var state_15873__$1 = state_15873;var statearr_15889_15913 = state_15873__$1;(statearr_15889_15913[2] = inst_15857);
(statearr_15889_15913[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 11))
{var inst_15853 = (state_15873[2]);var inst_15854 = (new Array(n));var inst_15837 = inst_15854;var inst_15838 = 0;var state_15873__$1 = (function (){var statearr_15890 = state_15873;(statearr_15890[7] = inst_15838);
(statearr_15890[12] = inst_15853);
(statearr_15890[8] = inst_15837);
return statearr_15890;
})();var statearr_15891_15914 = state_15873__$1;(statearr_15891_15914[2] = null);
(statearr_15891_15914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 12))
{var inst_15837 = (state_15873[8]);var inst_15861 = cljs.core.vec.call(null,inst_15837);var state_15873__$1 = state_15873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15873__$1,15,out,inst_15861);
} else
{if((state_val_15874 === 13))
{var state_15873__$1 = state_15873;var statearr_15892_15915 = state_15873__$1;(statearr_15892_15915[2] = null);
(statearr_15892_15915[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 14))
{var inst_15866 = (state_15873[2]);var inst_15867 = cljs.core.async.close_BANG_.call(null,out);var state_15873__$1 = (function (){var statearr_15893 = state_15873;(statearr_15893[13] = inst_15866);
return statearr_15893;
})();var statearr_15894_15916 = state_15873__$1;(statearr_15894_15916[2] = inst_15867);
(statearr_15894_15916[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15874 === 15))
{var inst_15863 = (state_15873[2]);var state_15873__$1 = state_15873;var statearr_15895_15917 = state_15873__$1;(statearr_15895_15917[2] = inst_15863);
(statearr_15895_15917[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15899 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15899[0] = state_machine__5507__auto__);
(statearr_15899[1] = 1);
return statearr_15899;
});
var state_machine__5507__auto____1 = (function (state_15873){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15873);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15900){if((e15900 instanceof Object))
{var ex__5510__auto__ = e15900;var statearr_15901_15918 = state_15873;(statearr_15901_15918[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15873);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15900;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15919 = state_15873;
state_15873 = G__15919;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15873){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15902 = f__5522__auto__.call(null);(statearr_15902[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15903);
return statearr_15902;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16062 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16032){var state_val_16033 = (state_16032[1]);if((state_val_16033 === 1))
{var inst_15991 = [];var inst_15992 = inst_15991;var inst_15993 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16032__$1 = (function (){var statearr_16034 = state_16032;(statearr_16034[7] = inst_15993);
(statearr_16034[8] = inst_15992);
return statearr_16034;
})();var statearr_16035_16063 = state_16032__$1;(statearr_16035_16063[2] = null);
(statearr_16035_16063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 2))
{var state_16032__$1 = state_16032;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16032__$1,4,ch);
} else
{if((state_val_16033 === 3))
{var inst_16030 = (state_16032[2]);var state_16032__$1 = state_16032;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16032__$1,inst_16030);
} else
{if((state_val_16033 === 4))
{var inst_15996 = (state_16032[9]);var inst_15996__$1 = (state_16032[2]);var inst_15997 = (inst_15996__$1 == null);var inst_15998 = cljs.core.not.call(null,inst_15997);var state_16032__$1 = (function (){var statearr_16036 = state_16032;(statearr_16036[9] = inst_15996__$1);
return statearr_16036;
})();if(inst_15998)
{var statearr_16037_16064 = state_16032__$1;(statearr_16037_16064[1] = 5);
} else
{var statearr_16038_16065 = state_16032__$1;(statearr_16038_16065[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 5))
{var inst_15993 = (state_16032[7]);var inst_16000 = (state_16032[10]);var inst_15996 = (state_16032[9]);var inst_16000__$1 = f.call(null,inst_15996);var inst_16001 = cljs.core._EQ_.call(null,inst_16000__$1,inst_15993);var inst_16002 = cljs.core.keyword_identical_QMARK_.call(null,inst_15993,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16003 = (inst_16001) || (inst_16002);var state_16032__$1 = (function (){var statearr_16039 = state_16032;(statearr_16039[10] = inst_16000__$1);
return statearr_16039;
})();if(cljs.core.truth_(inst_16003))
{var statearr_16040_16066 = state_16032__$1;(statearr_16040_16066[1] = 8);
} else
{var statearr_16041_16067 = state_16032__$1;(statearr_16041_16067[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 6))
{var inst_15992 = (state_16032[8]);var inst_16017 = inst_15992.length;var inst_16018 = (inst_16017 > 0);var state_16032__$1 = state_16032;if(cljs.core.truth_(inst_16018))
{var statearr_16043_16068 = state_16032__$1;(statearr_16043_16068[1] = 12);
} else
{var statearr_16044_16069 = state_16032__$1;(statearr_16044_16069[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 7))
{var inst_16028 = (state_16032[2]);var state_16032__$1 = state_16032;var statearr_16045_16070 = state_16032__$1;(statearr_16045_16070[2] = inst_16028);
(statearr_16045_16070[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 8))
{var inst_15992 = (state_16032[8]);var inst_16000 = (state_16032[10]);var inst_15996 = (state_16032[9]);var inst_16005 = inst_15992.push(inst_15996);var tmp16042 = inst_15992;var inst_15992__$1 = tmp16042;var inst_15993 = inst_16000;var state_16032__$1 = (function (){var statearr_16046 = state_16032;(statearr_16046[7] = inst_15993);
(statearr_16046[11] = inst_16005);
(statearr_16046[8] = inst_15992__$1);
return statearr_16046;
})();var statearr_16047_16071 = state_16032__$1;(statearr_16047_16071[2] = null);
(statearr_16047_16071[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 9))
{var inst_15992 = (state_16032[8]);var inst_16008 = cljs.core.vec.call(null,inst_15992);var state_16032__$1 = state_16032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16032__$1,11,out,inst_16008);
} else
{if((state_val_16033 === 10))
{var inst_16015 = (state_16032[2]);var state_16032__$1 = state_16032;var statearr_16048_16072 = state_16032__$1;(statearr_16048_16072[2] = inst_16015);
(statearr_16048_16072[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 11))
{var inst_16000 = (state_16032[10]);var inst_15996 = (state_16032[9]);var inst_16010 = (state_16032[2]);var inst_16011 = [];var inst_16012 = inst_16011.push(inst_15996);var inst_15992 = inst_16011;var inst_15993 = inst_16000;var state_16032__$1 = (function (){var statearr_16049 = state_16032;(statearr_16049[7] = inst_15993);
(statearr_16049[8] = inst_15992);
(statearr_16049[12] = inst_16010);
(statearr_16049[13] = inst_16012);
return statearr_16049;
})();var statearr_16050_16073 = state_16032__$1;(statearr_16050_16073[2] = null);
(statearr_16050_16073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 12))
{var inst_15992 = (state_16032[8]);var inst_16020 = cljs.core.vec.call(null,inst_15992);var state_16032__$1 = state_16032;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16032__$1,15,out,inst_16020);
} else
{if((state_val_16033 === 13))
{var state_16032__$1 = state_16032;var statearr_16051_16074 = state_16032__$1;(statearr_16051_16074[2] = null);
(statearr_16051_16074[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 14))
{var inst_16025 = (state_16032[2]);var inst_16026 = cljs.core.async.close_BANG_.call(null,out);var state_16032__$1 = (function (){var statearr_16052 = state_16032;(statearr_16052[14] = inst_16025);
return statearr_16052;
})();var statearr_16053_16075 = state_16032__$1;(statearr_16053_16075[2] = inst_16026);
(statearr_16053_16075[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16033 === 15))
{var inst_16022 = (state_16032[2]);var state_16032__$1 = state_16032;var statearr_16054_16076 = state_16032__$1;(statearr_16054_16076[2] = inst_16022);
(statearr_16054_16076[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16058[0] = state_machine__5507__auto__);
(statearr_16058[1] = 1);
return statearr_16058;
});
var state_machine__5507__auto____1 = (function (state_16032){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16032);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16059){if((e16059 instanceof Object))
{var ex__5510__auto__ = e16059;var statearr_16060_16077 = state_16032;(statearr_16060_16077[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16032);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16059;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16078 = state_16032;
state_16032 = G__16078;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16032){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16032);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16061 = f__5522__auto__.call(null);(statearr_16061[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16062);
return statearr_16061;
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