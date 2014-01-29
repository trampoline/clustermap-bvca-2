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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13097 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13097 = (function (f,fn_handler,meta13098){
this.f = f;
this.fn_handler = fn_handler;
this.meta13098 = meta13098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13097.cljs$lang$type = true;
cljs.core.async.t13097.cljs$lang$ctorStr = "cljs.core.async/t13097";
cljs.core.async.t13097.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13097");
});
cljs.core.async.t13097.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13097.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13097.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13099){var self__ = this;
var _13099__$1 = this;return self__.meta13098;
});
cljs.core.async.t13097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13099,meta13098__$1){var self__ = this;
var _13099__$1 = this;return (new cljs.core.async.t13097(self__.f,self__.fn_handler,meta13098__$1));
});
cljs.core.async.__GT_t13097 = (function __GT_t13097(f__$1,fn_handler__$1,meta13098){return (new cljs.core.async.t13097(f__$1,fn_handler__$1,meta13098));
});
}
return (new cljs.core.async.t13097(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13101 = buff;if(G__13101)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13101.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13101.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13101);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13101);
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
{var val_13102 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13102);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13102);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13103 = n;var x_13104 = 0;while(true){
if((x_13104 < n__4248__auto___13103))
{(a[x_13104] = 0);
{
var G__13105 = (x_13104 + 1);
x_13104 = G__13105;
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
var G__13106 = (i + 1);
i = G__13106;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13110 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13110 = (function (flag,alt_flag,meta13111){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13111 = meta13111;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13110.cljs$lang$type = true;
cljs.core.async.t13110.cljs$lang$ctorStr = "cljs.core.async/t13110";
cljs.core.async.t13110.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13110");
});
cljs.core.async.t13110.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13110.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13110.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13110.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13112){var self__ = this;
var _13112__$1 = this;return self__.meta13111;
});
cljs.core.async.t13110.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13112,meta13111__$1){var self__ = this;
var _13112__$1 = this;return (new cljs.core.async.t13110(self__.flag,self__.alt_flag,meta13111__$1));
});
cljs.core.async.__GT_t13110 = (function __GT_t13110(flag__$1,alt_flag__$1,meta13111){return (new cljs.core.async.t13110(flag__$1,alt_flag__$1,meta13111));
});
}
return (new cljs.core.async.t13110(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13116 = (function (cb,flag,alt_handler,meta13117){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13117 = meta13117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13116.cljs$lang$type = true;
cljs.core.async.t13116.cljs$lang$ctorStr = "cljs.core.async/t13116";
cljs.core.async.t13116.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13116");
});
cljs.core.async.t13116.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13118){var self__ = this;
var _13118__$1 = this;return self__.meta13117;
});
cljs.core.async.t13116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13118,meta13117__$1){var self__ = this;
var _13118__$1 = this;return (new cljs.core.async.t13116(self__.cb,self__.flag,self__.alt_handler,meta13117__$1));
});
cljs.core.async.__GT_t13116 = (function __GT_t13116(cb__$1,flag__$1,alt_handler__$1,meta13117){return (new cljs.core.async.t13116(cb__$1,flag__$1,alt_handler__$1,meta13117));
});
}
return (new cljs.core.async.t13116(cb,flag,alt_handler,null));
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
return (function (p1__13119_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13119_SHARP_,port], null));
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
var G__13120 = (i + 1);
i = G__13120;
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
var alts_BANG___delegate = function (ports,p__13121){var map__13123 = p__13121;var map__13123__$1 = ((cljs.core.seq_QMARK_.call(null,map__13123))?cljs.core.apply.call(null,cljs.core.hash_map,map__13123):map__13123);var opts = map__13123__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13121 = null;if (arguments.length > 1) {
  p__13121 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13121);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13124){
var ports = cljs.core.first(arglist__13124);
var p__13121 = cljs.core.rest(arglist__13124);
return alts_BANG___delegate(ports,p__13121);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13132 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13132 = (function (ch,f,map_LT_,meta13133){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13133 = meta13133;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13132.cljs$lang$type = true;
cljs.core.async.t13132.cljs$lang$ctorStr = "cljs.core.async/t13132";
cljs.core.async.t13132.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13132");
});
cljs.core.async.t13132.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13132.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13132.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13132.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13135 = (function (fn1,_,meta13133,ch,f,map_LT_,meta13136){
this.fn1 = fn1;
this._ = _;
this.meta13133 = meta13133;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13136 = meta13136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13135.cljs$lang$type = true;
cljs.core.async.t13135.cljs$lang$ctorStr = "cljs.core.async/t13135";
cljs.core.async.t13135.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13135");
});
cljs.core.async.t13135.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13135.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13125_SHARP_){return f1.call(null,(((p1__13125_SHARP_ == null))?null:self__.f.call(null,p1__13125_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13137){var self__ = this;
var _13137__$1 = this;return self__.meta13136;
});
cljs.core.async.t13135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13137,meta13136__$1){var self__ = this;
var _13137__$1 = this;return (new cljs.core.async.t13135(self__.fn1,self__._,self__.meta13133,self__.ch,self__.f,self__.map_LT_,meta13136__$1));
});
cljs.core.async.__GT_t13135 = (function __GT_t13135(fn1__$1,___$2,meta13133__$1,ch__$2,f__$2,map_LT___$2,meta13136){return (new cljs.core.async.t13135(fn1__$1,___$2,meta13133__$1,ch__$2,f__$2,map_LT___$2,meta13136));
});
}
return (new cljs.core.async.t13135(fn1,___$1,self__.meta13133,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13132.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13132.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13132.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13134){var self__ = this;
var _13134__$1 = this;return self__.meta13133;
});
cljs.core.async.t13132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13134,meta13133__$1){var self__ = this;
var _13134__$1 = this;return (new cljs.core.async.t13132(self__.ch,self__.f,self__.map_LT_,meta13133__$1));
});
cljs.core.async.__GT_t13132 = (function __GT_t13132(ch__$1,f__$1,map_LT___$1,meta13133){return (new cljs.core.async.t13132(ch__$1,f__$1,map_LT___$1,meta13133));
});
}
return (new cljs.core.async.t13132(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13141 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13141 = (function (ch,f,map_GT_,meta13142){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13142 = meta13142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13141.cljs$lang$type = true;
cljs.core.async.t13141.cljs$lang$ctorStr = "cljs.core.async/t13141";
cljs.core.async.t13141.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13141");
});
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13143){var self__ = this;
var _13143__$1 = this;return self__.meta13142;
});
cljs.core.async.t13141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13143,meta13142__$1){var self__ = this;
var _13143__$1 = this;return (new cljs.core.async.t13141(self__.ch,self__.f,self__.map_GT_,meta13142__$1));
});
cljs.core.async.__GT_t13141 = (function __GT_t13141(ch__$1,f__$1,map_GT___$1,meta13142){return (new cljs.core.async.t13141(ch__$1,f__$1,map_GT___$1,meta13142));
});
}
return (new cljs.core.async.t13141(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13147 = (function (ch,p,filter_GT_,meta13148){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13148 = meta13148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13147.cljs$lang$type = true;
cljs.core.async.t13147.cljs$lang$ctorStr = "cljs.core.async/t13147";
cljs.core.async.t13147.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13147");
});
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13149){var self__ = this;
var _13149__$1 = this;return self__.meta13148;
});
cljs.core.async.t13147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13149,meta13148__$1){var self__ = this;
var _13149__$1 = this;return (new cljs.core.async.t13147(self__.ch,self__.p,self__.filter_GT_,meta13148__$1));
});
cljs.core.async.__GT_t13147 = (function __GT_t13147(ch__$1,p__$1,filter_GT___$1,meta13148){return (new cljs.core.async.t13147(ch__$1,p__$1,filter_GT___$1,meta13148));
});
}
return (new cljs.core.async.t13147(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13211){var state_val_13212 = (state_13211[1]);if((state_val_13212 === 1))
{var state_13211__$1 = state_13211;var statearr_13213_13233 = state_13211__$1;(statearr_13213_13233[2] = null);
(statearr_13213_13233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13212 === 2))
{var state_13211__$1 = state_13211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13211__$1,4,ch);
} else
{if((state_val_13212 === 3))
{var inst_13209 = (state_13211[2]);var state_13211__$1 = state_13211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13211__$1,inst_13209);
} else
{if((state_val_13212 === 4))
{var inst_13193 = (state_13211[7]);var inst_13193__$1 = (state_13211[2]);var inst_13194 = (inst_13193__$1 == null);var state_13211__$1 = (function (){var statearr_13214 = state_13211;(statearr_13214[7] = inst_13193__$1);
return statearr_13214;
})();if(cljs.core.truth_(inst_13194))
{var statearr_13215_13234 = state_13211__$1;(statearr_13215_13234[1] = 5);
} else
{var statearr_13216_13235 = state_13211__$1;(statearr_13216_13235[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13212 === 5))
{var inst_13196 = cljs.core.async.close_BANG_.call(null,out);var state_13211__$1 = state_13211;var statearr_13217_13236 = state_13211__$1;(statearr_13217_13236[2] = inst_13196);
(statearr_13217_13236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13212 === 6))
{var inst_13193 = (state_13211[7]);var inst_13198 = p.call(null,inst_13193);var state_13211__$1 = state_13211;if(cljs.core.truth_(inst_13198))
{var statearr_13218_13237 = state_13211__$1;(statearr_13218_13237[1] = 8);
} else
{var statearr_13219_13238 = state_13211__$1;(statearr_13219_13238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13212 === 7))
{var inst_13207 = (state_13211[2]);var state_13211__$1 = state_13211;var statearr_13220_13239 = state_13211__$1;(statearr_13220_13239[2] = inst_13207);
(statearr_13220_13239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13212 === 8))
{var inst_13193 = (state_13211[7]);var state_13211__$1 = state_13211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13211__$1,11,out,inst_13193);
} else
{if((state_val_13212 === 9))
{var state_13211__$1 = state_13211;var statearr_13221_13240 = state_13211__$1;(statearr_13221_13240[2] = null);
(statearr_13221_13240[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13212 === 10))
{var inst_13204 = (state_13211[2]);var state_13211__$1 = (function (){var statearr_13222 = state_13211;(statearr_13222[8] = inst_13204);
return statearr_13222;
})();var statearr_13223_13241 = state_13211__$1;(statearr_13223_13241[2] = null);
(statearr_13223_13241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13212 === 11))
{var inst_13201 = (state_13211[2]);var state_13211__$1 = state_13211;var statearr_13224_13242 = state_13211__$1;(statearr_13224_13242[2] = inst_13201);
(statearr_13224_13242[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13228 = [null,null,null,null,null,null,null,null,null];(statearr_13228[0] = state_machine__5507__auto__);
(statearr_13228[1] = 1);
return statearr_13228;
});
var state_machine__5507__auto____1 = (function (state_13211){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13211);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13229){if((e13229 instanceof Object))
{var ex__5510__auto__ = e13229;var statearr_13230_13243 = state_13211;(statearr_13230_13243[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13211);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13244 = state_13211;
state_13211 = G__13244;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13211){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13231 = f__5522__auto__.call(null);(statearr_13231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13232);
return statearr_13231;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13396){var state_val_13397 = (state_13396[1]);if((state_val_13397 === 1))
{var state_13396__$1 = state_13396;var statearr_13398_13435 = state_13396__$1;(statearr_13398_13435[2] = null);
(statearr_13398_13435[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 2))
{var state_13396__$1 = state_13396;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13396__$1,4,in$);
} else
{if((state_val_13397 === 3))
{var inst_13394 = (state_13396[2]);var state_13396__$1 = state_13396;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13396__$1,inst_13394);
} else
{if((state_val_13397 === 4))
{var inst_13342 = (state_13396[7]);var inst_13342__$1 = (state_13396[2]);var inst_13343 = (inst_13342__$1 == null);var state_13396__$1 = (function (){var statearr_13399 = state_13396;(statearr_13399[7] = inst_13342__$1);
return statearr_13399;
})();if(cljs.core.truth_(inst_13343))
{var statearr_13400_13436 = state_13396__$1;(statearr_13400_13436[1] = 5);
} else
{var statearr_13401_13437 = state_13396__$1;(statearr_13401_13437[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 5))
{var inst_13345 = cljs.core.async.close_BANG_.call(null,out);var state_13396__$1 = state_13396;var statearr_13402_13438 = state_13396__$1;(statearr_13402_13438[2] = inst_13345);
(statearr_13402_13438[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 6))
{var inst_13342 = (state_13396[7]);var inst_13347 = f.call(null,inst_13342);var inst_13352 = cljs.core.seq.call(null,inst_13347);var inst_13353 = inst_13352;var inst_13354 = null;var inst_13355 = 0;var inst_13356 = 0;var state_13396__$1 = (function (){var statearr_13403 = state_13396;(statearr_13403[8] = inst_13353);
(statearr_13403[9] = inst_13354);
(statearr_13403[10] = inst_13356);
(statearr_13403[11] = inst_13355);
return statearr_13403;
})();var statearr_13404_13439 = state_13396__$1;(statearr_13404_13439[2] = null);
(statearr_13404_13439[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 7))
{var inst_13392 = (state_13396[2]);var state_13396__$1 = state_13396;var statearr_13405_13440 = state_13396__$1;(statearr_13405_13440[2] = inst_13392);
(statearr_13405_13440[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 8))
{var inst_13356 = (state_13396[10]);var inst_13355 = (state_13396[11]);var inst_13358 = (inst_13356 < inst_13355);var inst_13359 = inst_13358;var state_13396__$1 = state_13396;if(cljs.core.truth_(inst_13359))
{var statearr_13406_13441 = state_13396__$1;(statearr_13406_13441[1] = 10);
} else
{var statearr_13407_13442 = state_13396__$1;(statearr_13407_13442[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 9))
{var inst_13389 = (state_13396[2]);var state_13396__$1 = (function (){var statearr_13408 = state_13396;(statearr_13408[12] = inst_13389);
return statearr_13408;
})();var statearr_13409_13443 = state_13396__$1;(statearr_13409_13443[2] = null);
(statearr_13409_13443[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 10))
{var inst_13354 = (state_13396[9]);var inst_13356 = (state_13396[10]);var inst_13361 = cljs.core._nth.call(null,inst_13354,inst_13356);var state_13396__$1 = state_13396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13396__$1,13,out,inst_13361);
} else
{if((state_val_13397 === 11))
{var inst_13353 = (state_13396[8]);var inst_13367 = (state_13396[13]);var inst_13367__$1 = cljs.core.seq.call(null,inst_13353);var state_13396__$1 = (function (){var statearr_13413 = state_13396;(statearr_13413[13] = inst_13367__$1);
return statearr_13413;
})();if(inst_13367__$1)
{var statearr_13414_13444 = state_13396__$1;(statearr_13414_13444[1] = 14);
} else
{var statearr_13415_13445 = state_13396__$1;(statearr_13415_13445[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 12))
{var inst_13387 = (state_13396[2]);var state_13396__$1 = state_13396;var statearr_13416_13446 = state_13396__$1;(statearr_13416_13446[2] = inst_13387);
(statearr_13416_13446[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 13))
{var inst_13353 = (state_13396[8]);var inst_13354 = (state_13396[9]);var inst_13356 = (state_13396[10]);var inst_13355 = (state_13396[11]);var inst_13363 = (state_13396[2]);var inst_13364 = (inst_13356 + 1);var tmp13410 = inst_13353;var tmp13411 = inst_13354;var tmp13412 = inst_13355;var inst_13353__$1 = tmp13410;var inst_13354__$1 = tmp13411;var inst_13355__$1 = tmp13412;var inst_13356__$1 = inst_13364;var state_13396__$1 = (function (){var statearr_13417 = state_13396;(statearr_13417[8] = inst_13353__$1);
(statearr_13417[9] = inst_13354__$1);
(statearr_13417[14] = inst_13363);
(statearr_13417[10] = inst_13356__$1);
(statearr_13417[11] = inst_13355__$1);
return statearr_13417;
})();var statearr_13418_13447 = state_13396__$1;(statearr_13418_13447[2] = null);
(statearr_13418_13447[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 14))
{var inst_13367 = (state_13396[13]);var inst_13369 = cljs.core.chunked_seq_QMARK_.call(null,inst_13367);var state_13396__$1 = state_13396;if(inst_13369)
{var statearr_13419_13448 = state_13396__$1;(statearr_13419_13448[1] = 17);
} else
{var statearr_13420_13449 = state_13396__$1;(statearr_13420_13449[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 15))
{var state_13396__$1 = state_13396;var statearr_13421_13450 = state_13396__$1;(statearr_13421_13450[2] = null);
(statearr_13421_13450[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 16))
{var inst_13385 = (state_13396[2]);var state_13396__$1 = state_13396;var statearr_13422_13451 = state_13396__$1;(statearr_13422_13451[2] = inst_13385);
(statearr_13422_13451[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 17))
{var inst_13367 = (state_13396[13]);var inst_13371 = cljs.core.chunk_first.call(null,inst_13367);var inst_13372 = cljs.core.chunk_rest.call(null,inst_13367);var inst_13373 = cljs.core.count.call(null,inst_13371);var inst_13353 = inst_13372;var inst_13354 = inst_13371;var inst_13355 = inst_13373;var inst_13356 = 0;var state_13396__$1 = (function (){var statearr_13423 = state_13396;(statearr_13423[8] = inst_13353);
(statearr_13423[9] = inst_13354);
(statearr_13423[10] = inst_13356);
(statearr_13423[11] = inst_13355);
return statearr_13423;
})();var statearr_13424_13452 = state_13396__$1;(statearr_13424_13452[2] = null);
(statearr_13424_13452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 18))
{var inst_13367 = (state_13396[13]);var inst_13376 = cljs.core.first.call(null,inst_13367);var state_13396__$1 = state_13396;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13396__$1,20,out,inst_13376);
} else
{if((state_val_13397 === 19))
{var inst_13382 = (state_13396[2]);var state_13396__$1 = state_13396;var statearr_13425_13453 = state_13396__$1;(statearr_13425_13453[2] = inst_13382);
(statearr_13425_13453[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13397 === 20))
{var inst_13367 = (state_13396[13]);var inst_13378 = (state_13396[2]);var inst_13379 = cljs.core.next.call(null,inst_13367);var inst_13353 = inst_13379;var inst_13354 = null;var inst_13355 = 0;var inst_13356 = 0;var state_13396__$1 = (function (){var statearr_13426 = state_13396;(statearr_13426[8] = inst_13353);
(statearr_13426[9] = inst_13354);
(statearr_13426[10] = inst_13356);
(statearr_13426[11] = inst_13355);
(statearr_13426[15] = inst_13378);
return statearr_13426;
})();var statearr_13427_13454 = state_13396__$1;(statearr_13427_13454[2] = null);
(statearr_13427_13454[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13431 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13431[0] = state_machine__5507__auto__);
(statearr_13431[1] = 1);
return statearr_13431;
});
var state_machine__5507__auto____1 = (function (state_13396){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13396);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13432){if((e13432 instanceof Object))
{var ex__5510__auto__ = e13432;var statearr_13433_13455 = state_13396;(statearr_13433_13455[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13396);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13432;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13456 = state_13396;
state_13396 = G__13456;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13396){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13434 = f__5522__auto__.call(null);(statearr_13434[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13434;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13537 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13516){var state_val_13517 = (state_13516[1]);if((state_val_13517 === 1))
{var state_13516__$1 = state_13516;var statearr_13518_13538 = state_13516__$1;(statearr_13518_13538[2] = null);
(statearr_13518_13538[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 2))
{var state_13516__$1 = state_13516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13516__$1,4,from);
} else
{if((state_val_13517 === 3))
{var inst_13514 = (state_13516[2]);var state_13516__$1 = state_13516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13516__$1,inst_13514);
} else
{if((state_val_13517 === 4))
{var inst_13499 = (state_13516[7]);var inst_13499__$1 = (state_13516[2]);var inst_13500 = (inst_13499__$1 == null);var state_13516__$1 = (function (){var statearr_13519 = state_13516;(statearr_13519[7] = inst_13499__$1);
return statearr_13519;
})();if(cljs.core.truth_(inst_13500))
{var statearr_13520_13539 = state_13516__$1;(statearr_13520_13539[1] = 5);
} else
{var statearr_13521_13540 = state_13516__$1;(statearr_13521_13540[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 5))
{var state_13516__$1 = state_13516;if(cljs.core.truth_(close_QMARK_))
{var statearr_13522_13541 = state_13516__$1;(statearr_13522_13541[1] = 8);
} else
{var statearr_13523_13542 = state_13516__$1;(statearr_13523_13542[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 6))
{var inst_13499 = (state_13516[7]);var state_13516__$1 = state_13516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13516__$1,11,to,inst_13499);
} else
{if((state_val_13517 === 7))
{var inst_13512 = (state_13516[2]);var state_13516__$1 = state_13516;var statearr_13524_13543 = state_13516__$1;(statearr_13524_13543[2] = inst_13512);
(statearr_13524_13543[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 8))
{var inst_13503 = cljs.core.async.close_BANG_.call(null,to);var state_13516__$1 = state_13516;var statearr_13525_13544 = state_13516__$1;(statearr_13525_13544[2] = inst_13503);
(statearr_13525_13544[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 9))
{var state_13516__$1 = state_13516;var statearr_13526_13545 = state_13516__$1;(statearr_13526_13545[2] = null);
(statearr_13526_13545[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 10))
{var inst_13506 = (state_13516[2]);var state_13516__$1 = state_13516;var statearr_13527_13546 = state_13516__$1;(statearr_13527_13546[2] = inst_13506);
(statearr_13527_13546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13517 === 11))
{var inst_13509 = (state_13516[2]);var state_13516__$1 = (function (){var statearr_13528 = state_13516;(statearr_13528[8] = inst_13509);
return statearr_13528;
})();var statearr_13529_13547 = state_13516__$1;(statearr_13529_13547[2] = null);
(statearr_13529_13547[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13533 = [null,null,null,null,null,null,null,null,null];(statearr_13533[0] = state_machine__5507__auto__);
(statearr_13533[1] = 1);
return statearr_13533;
});
var state_machine__5507__auto____1 = (function (state_13516){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13516);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13534){if((e13534 instanceof Object))
{var ex__5510__auto__ = e13534;var statearr_13535_13548 = state_13516;(statearr_13535_13548[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13516);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13549 = state_13516;
state_13516 = G__13549;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13516){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13536 = f__5522__auto__.call(null);(statearr_13536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13537);
return statearr_13536;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13636 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13614){var state_val_13615 = (state_13614[1]);if((state_val_13615 === 1))
{var state_13614__$1 = state_13614;var statearr_13616_13637 = state_13614__$1;(statearr_13616_13637[2] = null);
(statearr_13616_13637[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13615 === 2))
{var state_13614__$1 = state_13614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13614__$1,4,ch);
} else
{if((state_val_13615 === 3))
{var inst_13612 = (state_13614[2]);var state_13614__$1 = state_13614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13614__$1,inst_13612);
} else
{if((state_val_13615 === 4))
{var inst_13595 = (state_13614[7]);var inst_13595__$1 = (state_13614[2]);var inst_13596 = (inst_13595__$1 == null);var state_13614__$1 = (function (){var statearr_13617 = state_13614;(statearr_13617[7] = inst_13595__$1);
return statearr_13617;
})();if(cljs.core.truth_(inst_13596))
{var statearr_13618_13638 = state_13614__$1;(statearr_13618_13638[1] = 5);
} else
{var statearr_13619_13639 = state_13614__$1;(statearr_13619_13639[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13615 === 5))
{var inst_13598 = cljs.core.async.close_BANG_.call(null,tc);var inst_13599 = cljs.core.async.close_BANG_.call(null,fc);var state_13614__$1 = (function (){var statearr_13620 = state_13614;(statearr_13620[8] = inst_13598);
return statearr_13620;
})();var statearr_13621_13640 = state_13614__$1;(statearr_13621_13640[2] = inst_13599);
(statearr_13621_13640[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13615 === 6))
{var inst_13595 = (state_13614[7]);var inst_13601 = p.call(null,inst_13595);var state_13614__$1 = state_13614;if(cljs.core.truth_(inst_13601))
{var statearr_13622_13641 = state_13614__$1;(statearr_13622_13641[1] = 9);
} else
{var statearr_13623_13642 = state_13614__$1;(statearr_13623_13642[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13615 === 7))
{var inst_13610 = (state_13614[2]);var state_13614__$1 = state_13614;var statearr_13624_13643 = state_13614__$1;(statearr_13624_13643[2] = inst_13610);
(statearr_13624_13643[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13615 === 8))
{var inst_13607 = (state_13614[2]);var state_13614__$1 = (function (){var statearr_13625 = state_13614;(statearr_13625[9] = inst_13607);
return statearr_13625;
})();var statearr_13626_13644 = state_13614__$1;(statearr_13626_13644[2] = null);
(statearr_13626_13644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13615 === 9))
{var state_13614__$1 = state_13614;var statearr_13627_13645 = state_13614__$1;(statearr_13627_13645[2] = tc);
(statearr_13627_13645[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13615 === 10))
{var state_13614__$1 = state_13614;var statearr_13628_13646 = state_13614__$1;(statearr_13628_13646[2] = fc);
(statearr_13628_13646[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13615 === 11))
{var inst_13595 = (state_13614[7]);var inst_13605 = (state_13614[2]);var state_13614__$1 = state_13614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13614__$1,8,inst_13605,inst_13595);
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
var state_machine__5507__auto____0 = (function (){var statearr_13632 = [null,null,null,null,null,null,null,null,null,null];(statearr_13632[0] = state_machine__5507__auto__);
(statearr_13632[1] = 1);
return statearr_13632;
});
var state_machine__5507__auto____1 = (function (state_13614){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13614);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13633){if((e13633 instanceof Object))
{var ex__5510__auto__ = e13633;var statearr_13634_13647 = state_13614;(statearr_13634_13647[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13633;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13648 = state_13614;
state_13614 = G__13648;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13614){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13635 = f__5522__auto__.call(null);(statearr_13635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13636);
return statearr_13635;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13695){var state_val_13696 = (state_13695[1]);if((state_val_13696 === 7))
{var inst_13691 = (state_13695[2]);var state_13695__$1 = state_13695;var statearr_13697_13713 = state_13695__$1;(statearr_13697_13713[2] = inst_13691);
(statearr_13697_13713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 6))
{var inst_13684 = (state_13695[7]);var inst_13681 = (state_13695[8]);var inst_13688 = f.call(null,inst_13681,inst_13684);var inst_13681__$1 = inst_13688;var state_13695__$1 = (function (){var statearr_13698 = state_13695;(statearr_13698[8] = inst_13681__$1);
return statearr_13698;
})();var statearr_13699_13714 = state_13695__$1;(statearr_13699_13714[2] = null);
(statearr_13699_13714[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 5))
{var inst_13681 = (state_13695[8]);var state_13695__$1 = state_13695;var statearr_13700_13715 = state_13695__$1;(statearr_13700_13715[2] = inst_13681);
(statearr_13700_13715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 4))
{var inst_13684 = (state_13695[7]);var inst_13684__$1 = (state_13695[2]);var inst_13685 = (inst_13684__$1 == null);var state_13695__$1 = (function (){var statearr_13701 = state_13695;(statearr_13701[7] = inst_13684__$1);
return statearr_13701;
})();if(cljs.core.truth_(inst_13685))
{var statearr_13702_13716 = state_13695__$1;(statearr_13702_13716[1] = 5);
} else
{var statearr_13703_13717 = state_13695__$1;(statearr_13703_13717[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 3))
{var inst_13693 = (state_13695[2]);var state_13695__$1 = state_13695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13695__$1,inst_13693);
} else
{if((state_val_13696 === 2))
{var state_13695__$1 = state_13695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13695__$1,4,ch);
} else
{if((state_val_13696 === 1))
{var inst_13681 = init;var state_13695__$1 = (function (){var statearr_13704 = state_13695;(statearr_13704[8] = inst_13681);
return statearr_13704;
})();var statearr_13705_13718 = state_13695__$1;(statearr_13705_13718[2] = null);
(statearr_13705_13718[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13709 = [null,null,null,null,null,null,null,null,null];(statearr_13709[0] = state_machine__5507__auto__);
(statearr_13709[1] = 1);
return statearr_13709;
});
var state_machine__5507__auto____1 = (function (state_13695){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13695);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13710){if((e13710 instanceof Object))
{var ex__5510__auto__ = e13710;var statearr_13711_13719 = state_13695;(statearr_13711_13719[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13710;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13720 = state_13695;
state_13695 = G__13720;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13695){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13712 = f__5522__auto__.call(null);(statearr_13712[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13712;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13782){var state_val_13783 = (state_13782[1]);if((state_val_13783 === 1))
{var inst_13762 = cljs.core.seq.call(null,coll);var inst_13763 = inst_13762;var state_13782__$1 = (function (){var statearr_13784 = state_13782;(statearr_13784[7] = inst_13763);
return statearr_13784;
})();var statearr_13785_13803 = state_13782__$1;(statearr_13785_13803[2] = null);
(statearr_13785_13803[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13783 === 2))
{var inst_13763 = (state_13782[7]);var state_13782__$1 = state_13782;if(cljs.core.truth_(inst_13763))
{var statearr_13786_13804 = state_13782__$1;(statearr_13786_13804[1] = 4);
} else
{var statearr_13787_13805 = state_13782__$1;(statearr_13787_13805[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13783 === 3))
{var inst_13780 = (state_13782[2]);var state_13782__$1 = state_13782;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13782__$1,inst_13780);
} else
{if((state_val_13783 === 4))
{var inst_13763 = (state_13782[7]);var inst_13766 = cljs.core.first.call(null,inst_13763);var state_13782__$1 = state_13782;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13782__$1,7,ch,inst_13766);
} else
{if((state_val_13783 === 5))
{var state_13782__$1 = state_13782;if(cljs.core.truth_(close_QMARK_))
{var statearr_13788_13806 = state_13782__$1;(statearr_13788_13806[1] = 8);
} else
{var statearr_13789_13807 = state_13782__$1;(statearr_13789_13807[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13783 === 6))
{var inst_13778 = (state_13782[2]);var state_13782__$1 = state_13782;var statearr_13790_13808 = state_13782__$1;(statearr_13790_13808[2] = inst_13778);
(statearr_13790_13808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13783 === 7))
{var inst_13763 = (state_13782[7]);var inst_13768 = (state_13782[2]);var inst_13769 = cljs.core.next.call(null,inst_13763);var inst_13763__$1 = inst_13769;var state_13782__$1 = (function (){var statearr_13791 = state_13782;(statearr_13791[7] = inst_13763__$1);
(statearr_13791[8] = inst_13768);
return statearr_13791;
})();var statearr_13792_13809 = state_13782__$1;(statearr_13792_13809[2] = null);
(statearr_13792_13809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13783 === 8))
{var inst_13773 = cljs.core.async.close_BANG_.call(null,ch);var state_13782__$1 = state_13782;var statearr_13793_13810 = state_13782__$1;(statearr_13793_13810[2] = inst_13773);
(statearr_13793_13810[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13783 === 9))
{var state_13782__$1 = state_13782;var statearr_13794_13811 = state_13782__$1;(statearr_13794_13811[2] = null);
(statearr_13794_13811[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13783 === 10))
{var inst_13776 = (state_13782[2]);var state_13782__$1 = state_13782;var statearr_13795_13812 = state_13782__$1;(statearr_13795_13812[2] = inst_13776);
(statearr_13795_13812[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13799 = [null,null,null,null,null,null,null,null,null];(statearr_13799[0] = state_machine__5507__auto__);
(statearr_13799[1] = 1);
return statearr_13799;
});
var state_machine__5507__auto____1 = (function (state_13782){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13782);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13800){if((e13800 instanceof Object))
{var ex__5510__auto__ = e13800;var statearr_13801_13813 = state_13782;(statearr_13801_13813[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13782);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13800;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13814 = state_13782;
state_13782 = G__13814;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13782){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13802 = f__5522__auto__.call(null);(statearr_13802[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13802;
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
cljs.core.async.Mux = (function (){var obj13816 = {};return obj13816;
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
cljs.core.async.Mult = (function (){var obj13818 = {};return obj13818;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14042 = (function (cs,ch,mult,meta14043){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14043 = meta14043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14042.cljs$lang$type = true;
cljs.core.async.t14042.cljs$lang$ctorStr = "cljs.core.async/t14042";
cljs.core.async.t14042.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14042");
});})(cs))
;
cljs.core.async.t14042.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14042.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14042.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14042.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14042.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14042.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14042.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14044){var self__ = this;
var _14044__$1 = this;return self__.meta14043;
});})(cs))
;
cljs.core.async.t14042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14044,meta14043__$1){var self__ = this;
var _14044__$1 = this;return (new cljs.core.async.t14042(self__.cs,self__.ch,self__.mult,meta14043__$1));
});})(cs))
;
cljs.core.async.__GT_t14042 = ((function (cs){
return (function __GT_t14042(cs__$1,ch__$1,mult__$1,meta14043){return (new cljs.core.async.t14042(cs__$1,ch__$1,mult__$1,meta14043));
});})(cs))
;
}
return (new cljs.core.async.t14042(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14265 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14179){var state_val_14180 = (state_14179[1]);if((state_val_14180 === 32))
{var inst_14123 = (state_14179[7]);var inst_14047 = (state_14179[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14179,31,Object,null,30);var inst_14130 = cljs.core.async.put_BANG_.call(null,inst_14123,inst_14047,done);var state_14179__$1 = state_14179;var statearr_14181_14266 = state_14179__$1;(statearr_14181_14266[2] = inst_14130);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14179__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 1))
{var state_14179__$1 = state_14179;var statearr_14182_14267 = state_14179__$1;(statearr_14182_14267[2] = null);
(statearr_14182_14267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 33))
{var inst_14136 = (state_14179[9]);var inst_14138 = cljs.core.chunked_seq_QMARK_.call(null,inst_14136);var state_14179__$1 = state_14179;if(inst_14138)
{var statearr_14183_14268 = state_14179__$1;(statearr_14183_14268[1] = 36);
} else
{var statearr_14184_14269 = state_14179__$1;(statearr_14184_14269[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 2))
{var state_14179__$1 = state_14179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14179__$1,4,ch);
} else
{if((state_val_14180 === 34))
{var state_14179__$1 = state_14179;var statearr_14185_14270 = state_14179__$1;(statearr_14185_14270[2] = null);
(statearr_14185_14270[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 3))
{var inst_14177 = (state_14179[2]);var state_14179__$1 = state_14179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14179__$1,inst_14177);
} else
{if((state_val_14180 === 35))
{var inst_14161 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14186_14271 = state_14179__$1;(statearr_14186_14271[2] = inst_14161);
(statearr_14186_14271[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 4))
{var inst_14047 = (state_14179[8]);var inst_14047__$1 = (state_14179[2]);var inst_14048 = (inst_14047__$1 == null);var state_14179__$1 = (function (){var statearr_14187 = state_14179;(statearr_14187[8] = inst_14047__$1);
return statearr_14187;
})();if(cljs.core.truth_(inst_14048))
{var statearr_14188_14272 = state_14179__$1;(statearr_14188_14272[1] = 5);
} else
{var statearr_14189_14273 = state_14179__$1;(statearr_14189_14273[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 36))
{var inst_14136 = (state_14179[9]);var inst_14140 = cljs.core.chunk_first.call(null,inst_14136);var inst_14141 = cljs.core.chunk_rest.call(null,inst_14136);var inst_14142 = cljs.core.count.call(null,inst_14140);var inst_14115 = inst_14141;var inst_14116 = inst_14140;var inst_14117 = inst_14142;var inst_14118 = 0;var state_14179__$1 = (function (){var statearr_14190 = state_14179;(statearr_14190[10] = inst_14118);
(statearr_14190[11] = inst_14117);
(statearr_14190[12] = inst_14116);
(statearr_14190[13] = inst_14115);
return statearr_14190;
})();var statearr_14191_14274 = state_14179__$1;(statearr_14191_14274[2] = null);
(statearr_14191_14274[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 5))
{var inst_14054 = cljs.core.deref.call(null,cs);var inst_14055 = cljs.core.seq.call(null,inst_14054);var inst_14056 = inst_14055;var inst_14057 = null;var inst_14058 = 0;var inst_14059 = 0;var state_14179__$1 = (function (){var statearr_14192 = state_14179;(statearr_14192[14] = inst_14059);
(statearr_14192[15] = inst_14057);
(statearr_14192[16] = inst_14058);
(statearr_14192[17] = inst_14056);
return statearr_14192;
})();var statearr_14193_14275 = state_14179__$1;(statearr_14193_14275[2] = null);
(statearr_14193_14275[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 37))
{var inst_14136 = (state_14179[9]);var inst_14145 = cljs.core.first.call(null,inst_14136);var state_14179__$1 = (function (){var statearr_14194 = state_14179;(statearr_14194[18] = inst_14145);
return statearr_14194;
})();var statearr_14195_14276 = state_14179__$1;(statearr_14195_14276[2] = null);
(statearr_14195_14276[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 6))
{var inst_14107 = (state_14179[19]);var inst_14106 = cljs.core.deref.call(null,cs);var inst_14107__$1 = cljs.core.keys.call(null,inst_14106);var inst_14108 = cljs.core.count.call(null,inst_14107__$1);var inst_14109 = cljs.core.reset_BANG_.call(null,dctr,inst_14108);var inst_14114 = cljs.core.seq.call(null,inst_14107__$1);var inst_14115 = inst_14114;var inst_14116 = null;var inst_14117 = 0;var inst_14118 = 0;var state_14179__$1 = (function (){var statearr_14196 = state_14179;(statearr_14196[10] = inst_14118);
(statearr_14196[19] = inst_14107__$1);
(statearr_14196[11] = inst_14117);
(statearr_14196[12] = inst_14116);
(statearr_14196[20] = inst_14109);
(statearr_14196[13] = inst_14115);
return statearr_14196;
})();var statearr_14197_14277 = state_14179__$1;(statearr_14197_14277[2] = null);
(statearr_14197_14277[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 38))
{var inst_14158 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14198_14278 = state_14179__$1;(statearr_14198_14278[2] = inst_14158);
(statearr_14198_14278[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 7))
{var inst_14175 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14199_14279 = state_14179__$1;(statearr_14199_14279[2] = inst_14175);
(statearr_14199_14279[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 39))
{var inst_14136 = (state_14179[9]);var inst_14154 = (state_14179[2]);var inst_14155 = cljs.core.next.call(null,inst_14136);var inst_14115 = inst_14155;var inst_14116 = null;var inst_14117 = 0;var inst_14118 = 0;var state_14179__$1 = (function (){var statearr_14200 = state_14179;(statearr_14200[10] = inst_14118);
(statearr_14200[11] = inst_14117);
(statearr_14200[12] = inst_14116);
(statearr_14200[13] = inst_14115);
(statearr_14200[21] = inst_14154);
return statearr_14200;
})();var statearr_14201_14280 = state_14179__$1;(statearr_14201_14280[2] = null);
(statearr_14201_14280[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 8))
{var inst_14059 = (state_14179[14]);var inst_14058 = (state_14179[16]);var inst_14061 = (inst_14059 < inst_14058);var inst_14062 = inst_14061;var state_14179__$1 = state_14179;if(cljs.core.truth_(inst_14062))
{var statearr_14202_14281 = state_14179__$1;(statearr_14202_14281[1] = 10);
} else
{var statearr_14203_14282 = state_14179__$1;(statearr_14203_14282[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 40))
{var inst_14145 = (state_14179[18]);var inst_14146 = (state_14179[2]);var inst_14147 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14148 = cljs.core.async.untap_STAR_.call(null,m,inst_14145);var state_14179__$1 = (function (){var statearr_14204 = state_14179;(statearr_14204[22] = inst_14146);
(statearr_14204[23] = inst_14147);
return statearr_14204;
})();var statearr_14205_14283 = state_14179__$1;(statearr_14205_14283[2] = inst_14148);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14179__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 9))
{var inst_14104 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14206_14284 = state_14179__$1;(statearr_14206_14284[2] = inst_14104);
(statearr_14206_14284[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 41))
{var inst_14047 = (state_14179[8]);var inst_14145 = (state_14179[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14179,40,Object,null,39);var inst_14152 = cljs.core.async.put_BANG_.call(null,inst_14145,inst_14047,done);var state_14179__$1 = state_14179;var statearr_14207_14285 = state_14179__$1;(statearr_14207_14285[2] = inst_14152);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14179__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 10))
{var inst_14059 = (state_14179[14]);var inst_14057 = (state_14179[15]);var inst_14065 = cljs.core._nth.call(null,inst_14057,inst_14059);var inst_14066 = cljs.core.nth.call(null,inst_14065,0,null);var inst_14067 = cljs.core.nth.call(null,inst_14065,1,null);var state_14179__$1 = (function (){var statearr_14208 = state_14179;(statearr_14208[24] = inst_14066);
return statearr_14208;
})();if(cljs.core.truth_(inst_14067))
{var statearr_14209_14286 = state_14179__$1;(statearr_14209_14286[1] = 13);
} else
{var statearr_14210_14287 = state_14179__$1;(statearr_14210_14287[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 42))
{var state_14179__$1 = state_14179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14179__$1,45,dchan);
} else
{if((state_val_14180 === 11))
{var inst_14056 = (state_14179[17]);var inst_14076 = (state_14179[25]);var inst_14076__$1 = cljs.core.seq.call(null,inst_14056);var state_14179__$1 = (function (){var statearr_14211 = state_14179;(statearr_14211[25] = inst_14076__$1);
return statearr_14211;
})();if(inst_14076__$1)
{var statearr_14212_14288 = state_14179__$1;(statearr_14212_14288[1] = 16);
} else
{var statearr_14213_14289 = state_14179__$1;(statearr_14213_14289[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 43))
{var state_14179__$1 = state_14179;var statearr_14214_14290 = state_14179__$1;(statearr_14214_14290[2] = null);
(statearr_14214_14290[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 12))
{var inst_14102 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14215_14291 = state_14179__$1;(statearr_14215_14291[2] = inst_14102);
(statearr_14215_14291[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 44))
{var inst_14172 = (state_14179[2]);var state_14179__$1 = (function (){var statearr_14216 = state_14179;(statearr_14216[26] = inst_14172);
return statearr_14216;
})();var statearr_14217_14292 = state_14179__$1;(statearr_14217_14292[2] = null);
(statearr_14217_14292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 13))
{var inst_14066 = (state_14179[24]);var inst_14069 = cljs.core.async.close_BANG_.call(null,inst_14066);var state_14179__$1 = state_14179;var statearr_14218_14293 = state_14179__$1;(statearr_14218_14293[2] = inst_14069);
(statearr_14218_14293[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 45))
{var inst_14169 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14222_14294 = state_14179__$1;(statearr_14222_14294[2] = inst_14169);
(statearr_14222_14294[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 14))
{var state_14179__$1 = state_14179;var statearr_14223_14295 = state_14179__$1;(statearr_14223_14295[2] = null);
(statearr_14223_14295[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 15))
{var inst_14059 = (state_14179[14]);var inst_14057 = (state_14179[15]);var inst_14058 = (state_14179[16]);var inst_14056 = (state_14179[17]);var inst_14072 = (state_14179[2]);var inst_14073 = (inst_14059 + 1);var tmp14219 = inst_14057;var tmp14220 = inst_14058;var tmp14221 = inst_14056;var inst_14056__$1 = tmp14221;var inst_14057__$1 = tmp14219;var inst_14058__$1 = tmp14220;var inst_14059__$1 = inst_14073;var state_14179__$1 = (function (){var statearr_14224 = state_14179;(statearr_14224[27] = inst_14072);
(statearr_14224[14] = inst_14059__$1);
(statearr_14224[15] = inst_14057__$1);
(statearr_14224[16] = inst_14058__$1);
(statearr_14224[17] = inst_14056__$1);
return statearr_14224;
})();var statearr_14225_14296 = state_14179__$1;(statearr_14225_14296[2] = null);
(statearr_14225_14296[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 16))
{var inst_14076 = (state_14179[25]);var inst_14078 = cljs.core.chunked_seq_QMARK_.call(null,inst_14076);var state_14179__$1 = state_14179;if(inst_14078)
{var statearr_14226_14297 = state_14179__$1;(statearr_14226_14297[1] = 19);
} else
{var statearr_14227_14298 = state_14179__$1;(statearr_14227_14298[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 17))
{var state_14179__$1 = state_14179;var statearr_14228_14299 = state_14179__$1;(statearr_14228_14299[2] = null);
(statearr_14228_14299[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 18))
{var inst_14100 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14229_14300 = state_14179__$1;(statearr_14229_14300[2] = inst_14100);
(statearr_14229_14300[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 19))
{var inst_14076 = (state_14179[25]);var inst_14080 = cljs.core.chunk_first.call(null,inst_14076);var inst_14081 = cljs.core.chunk_rest.call(null,inst_14076);var inst_14082 = cljs.core.count.call(null,inst_14080);var inst_14056 = inst_14081;var inst_14057 = inst_14080;var inst_14058 = inst_14082;var inst_14059 = 0;var state_14179__$1 = (function (){var statearr_14230 = state_14179;(statearr_14230[14] = inst_14059);
(statearr_14230[15] = inst_14057);
(statearr_14230[16] = inst_14058);
(statearr_14230[17] = inst_14056);
return statearr_14230;
})();var statearr_14231_14301 = state_14179__$1;(statearr_14231_14301[2] = null);
(statearr_14231_14301[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 20))
{var inst_14076 = (state_14179[25]);var inst_14086 = cljs.core.first.call(null,inst_14076);var inst_14087 = cljs.core.nth.call(null,inst_14086,0,null);var inst_14088 = cljs.core.nth.call(null,inst_14086,1,null);var state_14179__$1 = (function (){var statearr_14232 = state_14179;(statearr_14232[28] = inst_14087);
return statearr_14232;
})();if(cljs.core.truth_(inst_14088))
{var statearr_14233_14302 = state_14179__$1;(statearr_14233_14302[1] = 22);
} else
{var statearr_14234_14303 = state_14179__$1;(statearr_14234_14303[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 21))
{var inst_14097 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14235_14304 = state_14179__$1;(statearr_14235_14304[2] = inst_14097);
(statearr_14235_14304[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 22))
{var inst_14087 = (state_14179[28]);var inst_14090 = cljs.core.async.close_BANG_.call(null,inst_14087);var state_14179__$1 = state_14179;var statearr_14236_14305 = state_14179__$1;(statearr_14236_14305[2] = inst_14090);
(statearr_14236_14305[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 23))
{var state_14179__$1 = state_14179;var statearr_14237_14306 = state_14179__$1;(statearr_14237_14306[2] = null);
(statearr_14237_14306[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 24))
{var inst_14076 = (state_14179[25]);var inst_14093 = (state_14179[2]);var inst_14094 = cljs.core.next.call(null,inst_14076);var inst_14056 = inst_14094;var inst_14057 = null;var inst_14058 = 0;var inst_14059 = 0;var state_14179__$1 = (function (){var statearr_14238 = state_14179;(statearr_14238[14] = inst_14059);
(statearr_14238[15] = inst_14057);
(statearr_14238[16] = inst_14058);
(statearr_14238[17] = inst_14056);
(statearr_14238[29] = inst_14093);
return statearr_14238;
})();var statearr_14239_14307 = state_14179__$1;(statearr_14239_14307[2] = null);
(statearr_14239_14307[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 25))
{var inst_14118 = (state_14179[10]);var inst_14117 = (state_14179[11]);var inst_14120 = (inst_14118 < inst_14117);var inst_14121 = inst_14120;var state_14179__$1 = state_14179;if(cljs.core.truth_(inst_14121))
{var statearr_14240_14308 = state_14179__$1;(statearr_14240_14308[1] = 27);
} else
{var statearr_14241_14309 = state_14179__$1;(statearr_14241_14309[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 26))
{var inst_14107 = (state_14179[19]);var inst_14165 = (state_14179[2]);var inst_14166 = cljs.core.seq.call(null,inst_14107);var state_14179__$1 = (function (){var statearr_14242 = state_14179;(statearr_14242[30] = inst_14165);
return statearr_14242;
})();if(inst_14166)
{var statearr_14243_14310 = state_14179__$1;(statearr_14243_14310[1] = 42);
} else
{var statearr_14244_14311 = state_14179__$1;(statearr_14244_14311[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 27))
{var inst_14118 = (state_14179[10]);var inst_14116 = (state_14179[12]);var inst_14123 = cljs.core._nth.call(null,inst_14116,inst_14118);var state_14179__$1 = (function (){var statearr_14245 = state_14179;(statearr_14245[7] = inst_14123);
return statearr_14245;
})();var statearr_14246_14312 = state_14179__$1;(statearr_14246_14312[2] = null);
(statearr_14246_14312[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 28))
{var inst_14136 = (state_14179[9]);var inst_14115 = (state_14179[13]);var inst_14136__$1 = cljs.core.seq.call(null,inst_14115);var state_14179__$1 = (function (){var statearr_14250 = state_14179;(statearr_14250[9] = inst_14136__$1);
return statearr_14250;
})();if(inst_14136__$1)
{var statearr_14251_14313 = state_14179__$1;(statearr_14251_14313[1] = 33);
} else
{var statearr_14252_14314 = state_14179__$1;(statearr_14252_14314[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 29))
{var inst_14163 = (state_14179[2]);var state_14179__$1 = state_14179;var statearr_14253_14315 = state_14179__$1;(statearr_14253_14315[2] = inst_14163);
(statearr_14253_14315[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 30))
{var inst_14118 = (state_14179[10]);var inst_14117 = (state_14179[11]);var inst_14116 = (state_14179[12]);var inst_14115 = (state_14179[13]);var inst_14132 = (state_14179[2]);var inst_14133 = (inst_14118 + 1);var tmp14247 = inst_14117;var tmp14248 = inst_14116;var tmp14249 = inst_14115;var inst_14115__$1 = tmp14249;var inst_14116__$1 = tmp14248;var inst_14117__$1 = tmp14247;var inst_14118__$1 = inst_14133;var state_14179__$1 = (function (){var statearr_14254 = state_14179;(statearr_14254[31] = inst_14132);
(statearr_14254[10] = inst_14118__$1);
(statearr_14254[11] = inst_14117__$1);
(statearr_14254[12] = inst_14116__$1);
(statearr_14254[13] = inst_14115__$1);
return statearr_14254;
})();var statearr_14255_14316 = state_14179__$1;(statearr_14255_14316[2] = null);
(statearr_14255_14316[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14180 === 31))
{var inst_14123 = (state_14179[7]);var inst_14124 = (state_14179[2]);var inst_14125 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14126 = cljs.core.async.untap_STAR_.call(null,m,inst_14123);var state_14179__$1 = (function (){var statearr_14256 = state_14179;(statearr_14256[32] = inst_14124);
(statearr_14256[33] = inst_14125);
return statearr_14256;
})();var statearr_14257_14317 = state_14179__$1;(statearr_14257_14317[2] = inst_14126);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14179__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14261 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14261[0] = state_machine__5507__auto__);
(statearr_14261[1] = 1);
return statearr_14261;
});
var state_machine__5507__auto____1 = (function (state_14179){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14179);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14262){if((e14262 instanceof Object))
{var ex__5510__auto__ = e14262;var statearr_14263_14318 = state_14179;(statearr_14263_14318[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14262;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14319 = state_14179;
state_14179 = G__14319;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14179){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14264 = f__5522__auto__.call(null);(statearr_14264[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14265);
return statearr_14264;
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
cljs.core.async.Mix = (function (){var obj14321 = {};return obj14321;
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
;var m = (function (){if(typeof cljs.core.async.t14431 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14431 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14432){
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
this.meta14432 = meta14432;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14431.cljs$lang$type = true;
cljs.core.async.t14431.cljs$lang$ctorStr = "cljs.core.async/t14431";
cljs.core.async.t14431.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14431");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14431.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14431.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14431.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14431.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14431.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14431.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14431.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14431.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14431.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14433){var self__ = this;
var _14433__$1 = this;return self__.meta14432;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14433,meta14432__$1){var self__ = this;
var _14433__$1 = this;return (new cljs.core.async.t14431(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14432__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14431 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14431(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14432){return (new cljs.core.async.t14431(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14432));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14431(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14540 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14498){var state_val_14499 = (state_14498[1]);if((state_val_14499 === 1))
{var inst_14437 = (state_14498[7]);var inst_14437__$1 = calc_state.call(null);var inst_14438 = cljs.core.seq_QMARK_.call(null,inst_14437__$1);var state_14498__$1 = (function (){var statearr_14500 = state_14498;(statearr_14500[7] = inst_14437__$1);
return statearr_14500;
})();if(inst_14438)
{var statearr_14501_14541 = state_14498__$1;(statearr_14501_14541[1] = 2);
} else
{var statearr_14502_14542 = state_14498__$1;(statearr_14502_14542[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 2))
{var inst_14437 = (state_14498[7]);var inst_14440 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14437);var state_14498__$1 = state_14498;var statearr_14503_14543 = state_14498__$1;(statearr_14503_14543[2] = inst_14440);
(statearr_14503_14543[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 3))
{var inst_14437 = (state_14498[7]);var state_14498__$1 = state_14498;var statearr_14504_14544 = state_14498__$1;(statearr_14504_14544[2] = inst_14437);
(statearr_14504_14544[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 4))
{var inst_14437 = (state_14498[7]);var inst_14443 = (state_14498[2]);var inst_14444 = cljs.core.get.call(null,inst_14443,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14445 = cljs.core.get.call(null,inst_14443,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14446 = cljs.core.get.call(null,inst_14443,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14447 = inst_14437;var state_14498__$1 = (function (){var statearr_14505 = state_14498;(statearr_14505[8] = inst_14447);
(statearr_14505[9] = inst_14446);
(statearr_14505[10] = inst_14445);
(statearr_14505[11] = inst_14444);
return statearr_14505;
})();var statearr_14506_14545 = state_14498__$1;(statearr_14506_14545[2] = null);
(statearr_14506_14545[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 5))
{var inst_14447 = (state_14498[8]);var inst_14450 = cljs.core.seq_QMARK_.call(null,inst_14447);var state_14498__$1 = state_14498;if(inst_14450)
{var statearr_14507_14546 = state_14498__$1;(statearr_14507_14546[1] = 7);
} else
{var statearr_14508_14547 = state_14498__$1;(statearr_14508_14547[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 6))
{var inst_14496 = (state_14498[2]);var state_14498__$1 = state_14498;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14498__$1,inst_14496);
} else
{if((state_val_14499 === 7))
{var inst_14447 = (state_14498[8]);var inst_14452 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14447);var state_14498__$1 = state_14498;var statearr_14509_14548 = state_14498__$1;(statearr_14509_14548[2] = inst_14452);
(statearr_14509_14548[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 8))
{var inst_14447 = (state_14498[8]);var state_14498__$1 = state_14498;var statearr_14510_14549 = state_14498__$1;(statearr_14510_14549[2] = inst_14447);
(statearr_14510_14549[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 9))
{var inst_14455 = (state_14498[12]);var inst_14455__$1 = (state_14498[2]);var inst_14456 = cljs.core.get.call(null,inst_14455__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14457 = cljs.core.get.call(null,inst_14455__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14458 = cljs.core.get.call(null,inst_14455__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14498__$1 = (function (){var statearr_14511 = state_14498;(statearr_14511[13] = inst_14458);
(statearr_14511[14] = inst_14457);
(statearr_14511[12] = inst_14455__$1);
return statearr_14511;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14498__$1,10,inst_14456);
} else
{if((state_val_14499 === 10))
{var inst_14462 = (state_14498[15]);var inst_14463 = (state_14498[16]);var inst_14461 = (state_14498[2]);var inst_14462__$1 = cljs.core.nth.call(null,inst_14461,0,null);var inst_14463__$1 = cljs.core.nth.call(null,inst_14461,1,null);var inst_14464 = (inst_14462__$1 == null);var inst_14465 = cljs.core._EQ_.call(null,inst_14463__$1,change);var inst_14466 = (inst_14464) || (inst_14465);var state_14498__$1 = (function (){var statearr_14512 = state_14498;(statearr_14512[15] = inst_14462__$1);
(statearr_14512[16] = inst_14463__$1);
return statearr_14512;
})();if(cljs.core.truth_(inst_14466))
{var statearr_14513_14550 = state_14498__$1;(statearr_14513_14550[1] = 11);
} else
{var statearr_14514_14551 = state_14498__$1;(statearr_14514_14551[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 11))
{var inst_14462 = (state_14498[15]);var inst_14468 = (inst_14462 == null);var state_14498__$1 = state_14498;if(cljs.core.truth_(inst_14468))
{var statearr_14515_14552 = state_14498__$1;(statearr_14515_14552[1] = 14);
} else
{var statearr_14516_14553 = state_14498__$1;(statearr_14516_14553[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 12))
{var inst_14458 = (state_14498[13]);var inst_14463 = (state_14498[16]);var inst_14477 = (state_14498[17]);var inst_14477__$1 = inst_14458.call(null,inst_14463);var state_14498__$1 = (function (){var statearr_14517 = state_14498;(statearr_14517[17] = inst_14477__$1);
return statearr_14517;
})();if(cljs.core.truth_(inst_14477__$1))
{var statearr_14518_14554 = state_14498__$1;(statearr_14518_14554[1] = 17);
} else
{var statearr_14519_14555 = state_14498__$1;(statearr_14519_14555[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 13))
{var inst_14494 = (state_14498[2]);var state_14498__$1 = state_14498;var statearr_14520_14556 = state_14498__$1;(statearr_14520_14556[2] = inst_14494);
(statearr_14520_14556[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 14))
{var inst_14463 = (state_14498[16]);var inst_14470 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14463);var state_14498__$1 = state_14498;var statearr_14521_14557 = state_14498__$1;(statearr_14521_14557[2] = inst_14470);
(statearr_14521_14557[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 15))
{var state_14498__$1 = state_14498;var statearr_14522_14558 = state_14498__$1;(statearr_14522_14558[2] = null);
(statearr_14522_14558[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 16))
{var inst_14473 = (state_14498[2]);var inst_14474 = calc_state.call(null);var inst_14447 = inst_14474;var state_14498__$1 = (function (){var statearr_14523 = state_14498;(statearr_14523[8] = inst_14447);
(statearr_14523[18] = inst_14473);
return statearr_14523;
})();var statearr_14524_14559 = state_14498__$1;(statearr_14524_14559[2] = null);
(statearr_14524_14559[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 17))
{var inst_14477 = (state_14498[17]);var state_14498__$1 = state_14498;var statearr_14525_14560 = state_14498__$1;(statearr_14525_14560[2] = inst_14477);
(statearr_14525_14560[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 18))
{var inst_14458 = (state_14498[13]);var inst_14457 = (state_14498[14]);var inst_14463 = (state_14498[16]);var inst_14480 = cljs.core.empty_QMARK_.call(null,inst_14458);var inst_14481 = inst_14457.call(null,inst_14463);var inst_14482 = cljs.core.not.call(null,inst_14481);var inst_14483 = (inst_14480) && (inst_14482);var state_14498__$1 = state_14498;var statearr_14526_14561 = state_14498__$1;(statearr_14526_14561[2] = inst_14483);
(statearr_14526_14561[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 19))
{var inst_14485 = (state_14498[2]);var state_14498__$1 = state_14498;if(cljs.core.truth_(inst_14485))
{var statearr_14527_14562 = state_14498__$1;(statearr_14527_14562[1] = 20);
} else
{var statearr_14528_14563 = state_14498__$1;(statearr_14528_14563[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 20))
{var inst_14462 = (state_14498[15]);var state_14498__$1 = state_14498;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14498__$1,23,out,inst_14462);
} else
{if((state_val_14499 === 21))
{var state_14498__$1 = state_14498;var statearr_14529_14564 = state_14498__$1;(statearr_14529_14564[2] = null);
(statearr_14529_14564[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 22))
{var inst_14455 = (state_14498[12]);var inst_14491 = (state_14498[2]);var inst_14447 = inst_14455;var state_14498__$1 = (function (){var statearr_14530 = state_14498;(statearr_14530[8] = inst_14447);
(statearr_14530[19] = inst_14491);
return statearr_14530;
})();var statearr_14531_14565 = state_14498__$1;(statearr_14531_14565[2] = null);
(statearr_14531_14565[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14499 === 23))
{var inst_14488 = (state_14498[2]);var state_14498__$1 = state_14498;var statearr_14532_14566 = state_14498__$1;(statearr_14532_14566[2] = inst_14488);
(statearr_14532_14566[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14536 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14536[0] = state_machine__5507__auto__);
(statearr_14536[1] = 1);
return statearr_14536;
});
var state_machine__5507__auto____1 = (function (state_14498){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14498);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14537){if((e14537 instanceof Object))
{var ex__5510__auto__ = e14537;var statearr_14538_14567 = state_14498;(statearr_14538_14567[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14498);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14537;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14568 = state_14498;
state_14498 = G__14568;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14498){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14498);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14539 = f__5522__auto__.call(null);(statearr_14539[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14540);
return statearr_14539;
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
cljs.core.async.Pub = (function (){var obj14570 = {};return obj14570;
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
return (function (p1__14571_SHARP_){if(cljs.core.truth_(p1__14571_SHARP_.call(null,topic)))
{return p1__14571_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14571_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14696 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14697){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14697 = meta14697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14696.cljs$lang$type = true;
cljs.core.async.t14696.cljs$lang$ctorStr = "cljs.core.async/t14696";
cljs.core.async.t14696.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14696");
});})(mults,ensure_mult))
;
cljs.core.async.t14696.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14696.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14696.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14696.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14696.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14696.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14696.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14698){var self__ = this;
var _14698__$1 = this;return self__.meta14697;
});})(mults,ensure_mult))
;
cljs.core.async.t14696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14698,meta14697__$1){var self__ = this;
var _14698__$1 = this;return (new cljs.core.async.t14696(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14697__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14696 = ((function (mults,ensure_mult){
return (function __GT_t14696(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14697){return (new cljs.core.async.t14696(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14697));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14696(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14820 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14772){var state_val_14773 = (state_14772[1]);if((state_val_14773 === 1))
{var state_14772__$1 = state_14772;var statearr_14774_14821 = state_14772__$1;(statearr_14774_14821[2] = null);
(statearr_14774_14821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 2))
{var state_14772__$1 = state_14772;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14772__$1,4,ch);
} else
{if((state_val_14773 === 3))
{var inst_14770 = (state_14772[2]);var state_14772__$1 = state_14772;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14772__$1,inst_14770);
} else
{if((state_val_14773 === 4))
{var inst_14701 = (state_14772[7]);var inst_14701__$1 = (state_14772[2]);var inst_14702 = (inst_14701__$1 == null);var state_14772__$1 = (function (){var statearr_14775 = state_14772;(statearr_14775[7] = inst_14701__$1);
return statearr_14775;
})();if(cljs.core.truth_(inst_14702))
{var statearr_14776_14822 = state_14772__$1;(statearr_14776_14822[1] = 5);
} else
{var statearr_14777_14823 = state_14772__$1;(statearr_14777_14823[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 5))
{var inst_14708 = cljs.core.deref.call(null,mults);var inst_14709 = cljs.core.vals.call(null,inst_14708);var inst_14710 = cljs.core.seq.call(null,inst_14709);var inst_14711 = inst_14710;var inst_14712 = null;var inst_14713 = 0;var inst_14714 = 0;var state_14772__$1 = (function (){var statearr_14778 = state_14772;(statearr_14778[8] = inst_14712);
(statearr_14778[9] = inst_14713);
(statearr_14778[10] = inst_14714);
(statearr_14778[11] = inst_14711);
return statearr_14778;
})();var statearr_14779_14824 = state_14772__$1;(statearr_14779_14824[2] = null);
(statearr_14779_14824[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 6))
{var inst_14749 = (state_14772[12]);var inst_14701 = (state_14772[7]);var inst_14751 = (state_14772[13]);var inst_14749__$1 = topic_fn.call(null,inst_14701);var inst_14750 = cljs.core.deref.call(null,mults);var inst_14751__$1 = cljs.core.get.call(null,inst_14750,inst_14749__$1);var state_14772__$1 = (function (){var statearr_14780 = state_14772;(statearr_14780[12] = inst_14749__$1);
(statearr_14780[13] = inst_14751__$1);
return statearr_14780;
})();if(cljs.core.truth_(inst_14751__$1))
{var statearr_14781_14825 = state_14772__$1;(statearr_14781_14825[1] = 19);
} else
{var statearr_14782_14826 = state_14772__$1;(statearr_14782_14826[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 7))
{var inst_14768 = (state_14772[2]);var state_14772__$1 = state_14772;var statearr_14783_14827 = state_14772__$1;(statearr_14783_14827[2] = inst_14768);
(statearr_14783_14827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 8))
{var inst_14713 = (state_14772[9]);var inst_14714 = (state_14772[10]);var inst_14716 = (inst_14714 < inst_14713);var inst_14717 = inst_14716;var state_14772__$1 = state_14772;if(cljs.core.truth_(inst_14717))
{var statearr_14787_14828 = state_14772__$1;(statearr_14787_14828[1] = 10);
} else
{var statearr_14788_14829 = state_14772__$1;(statearr_14788_14829[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 9))
{var inst_14747 = (state_14772[2]);var state_14772__$1 = state_14772;var statearr_14789_14830 = state_14772__$1;(statearr_14789_14830[2] = inst_14747);
(statearr_14789_14830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 10))
{var inst_14712 = (state_14772[8]);var inst_14713 = (state_14772[9]);var inst_14714 = (state_14772[10]);var inst_14711 = (state_14772[11]);var inst_14719 = cljs.core._nth.call(null,inst_14712,inst_14714);var inst_14720 = cljs.core.async.muxch_STAR_.call(null,inst_14719);var inst_14721 = cljs.core.async.close_BANG_.call(null,inst_14720);var inst_14722 = (inst_14714 + 1);var tmp14784 = inst_14712;var tmp14785 = inst_14713;var tmp14786 = inst_14711;var inst_14711__$1 = tmp14786;var inst_14712__$1 = tmp14784;var inst_14713__$1 = tmp14785;var inst_14714__$1 = inst_14722;var state_14772__$1 = (function (){var statearr_14790 = state_14772;(statearr_14790[8] = inst_14712__$1);
(statearr_14790[14] = inst_14721);
(statearr_14790[9] = inst_14713__$1);
(statearr_14790[10] = inst_14714__$1);
(statearr_14790[11] = inst_14711__$1);
return statearr_14790;
})();var statearr_14791_14831 = state_14772__$1;(statearr_14791_14831[2] = null);
(statearr_14791_14831[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 11))
{var inst_14725 = (state_14772[15]);var inst_14711 = (state_14772[11]);var inst_14725__$1 = cljs.core.seq.call(null,inst_14711);var state_14772__$1 = (function (){var statearr_14792 = state_14772;(statearr_14792[15] = inst_14725__$1);
return statearr_14792;
})();if(inst_14725__$1)
{var statearr_14793_14832 = state_14772__$1;(statearr_14793_14832[1] = 13);
} else
{var statearr_14794_14833 = state_14772__$1;(statearr_14794_14833[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 12))
{var inst_14745 = (state_14772[2]);var state_14772__$1 = state_14772;var statearr_14795_14834 = state_14772__$1;(statearr_14795_14834[2] = inst_14745);
(statearr_14795_14834[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 13))
{var inst_14725 = (state_14772[15]);var inst_14727 = cljs.core.chunked_seq_QMARK_.call(null,inst_14725);var state_14772__$1 = state_14772;if(inst_14727)
{var statearr_14796_14835 = state_14772__$1;(statearr_14796_14835[1] = 16);
} else
{var statearr_14797_14836 = state_14772__$1;(statearr_14797_14836[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 14))
{var state_14772__$1 = state_14772;var statearr_14798_14837 = state_14772__$1;(statearr_14798_14837[2] = null);
(statearr_14798_14837[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 15))
{var inst_14743 = (state_14772[2]);var state_14772__$1 = state_14772;var statearr_14799_14838 = state_14772__$1;(statearr_14799_14838[2] = inst_14743);
(statearr_14799_14838[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 16))
{var inst_14725 = (state_14772[15]);var inst_14729 = cljs.core.chunk_first.call(null,inst_14725);var inst_14730 = cljs.core.chunk_rest.call(null,inst_14725);var inst_14731 = cljs.core.count.call(null,inst_14729);var inst_14711 = inst_14730;var inst_14712 = inst_14729;var inst_14713 = inst_14731;var inst_14714 = 0;var state_14772__$1 = (function (){var statearr_14800 = state_14772;(statearr_14800[8] = inst_14712);
(statearr_14800[9] = inst_14713);
(statearr_14800[10] = inst_14714);
(statearr_14800[11] = inst_14711);
return statearr_14800;
})();var statearr_14801_14839 = state_14772__$1;(statearr_14801_14839[2] = null);
(statearr_14801_14839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 17))
{var inst_14725 = (state_14772[15]);var inst_14734 = cljs.core.first.call(null,inst_14725);var inst_14735 = cljs.core.async.muxch_STAR_.call(null,inst_14734);var inst_14736 = cljs.core.async.close_BANG_.call(null,inst_14735);var inst_14737 = cljs.core.next.call(null,inst_14725);var inst_14711 = inst_14737;var inst_14712 = null;var inst_14713 = 0;var inst_14714 = 0;var state_14772__$1 = (function (){var statearr_14802 = state_14772;(statearr_14802[8] = inst_14712);
(statearr_14802[9] = inst_14713);
(statearr_14802[10] = inst_14714);
(statearr_14802[11] = inst_14711);
(statearr_14802[16] = inst_14736);
return statearr_14802;
})();var statearr_14803_14840 = state_14772__$1;(statearr_14803_14840[2] = null);
(statearr_14803_14840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 18))
{var inst_14740 = (state_14772[2]);var state_14772__$1 = state_14772;var statearr_14804_14841 = state_14772__$1;(statearr_14804_14841[2] = inst_14740);
(statearr_14804_14841[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 19))
{var state_14772__$1 = state_14772;var statearr_14805_14842 = state_14772__$1;(statearr_14805_14842[2] = null);
(statearr_14805_14842[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 20))
{var state_14772__$1 = state_14772;var statearr_14806_14843 = state_14772__$1;(statearr_14806_14843[2] = null);
(statearr_14806_14843[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 21))
{var inst_14765 = (state_14772[2]);var state_14772__$1 = (function (){var statearr_14807 = state_14772;(statearr_14807[17] = inst_14765);
return statearr_14807;
})();var statearr_14808_14844 = state_14772__$1;(statearr_14808_14844[2] = null);
(statearr_14808_14844[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 22))
{var inst_14762 = (state_14772[2]);var state_14772__$1 = state_14772;var statearr_14809_14845 = state_14772__$1;(statearr_14809_14845[2] = inst_14762);
(statearr_14809_14845[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 23))
{var inst_14749 = (state_14772[12]);var inst_14753 = (state_14772[2]);var inst_14754 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14749);var state_14772__$1 = (function (){var statearr_14810 = state_14772;(statearr_14810[18] = inst_14753);
return statearr_14810;
})();var statearr_14811_14846 = state_14772__$1;(statearr_14811_14846[2] = inst_14754);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14772__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14773 === 24))
{var inst_14701 = (state_14772[7]);var inst_14751 = (state_14772[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14772,23,Object,null,22);var inst_14758 = cljs.core.async.muxch_STAR_.call(null,inst_14751);var state_14772__$1 = state_14772;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14772__$1,25,inst_14758,inst_14701);
} else
{if((state_val_14773 === 25))
{var inst_14760 = (state_14772[2]);var state_14772__$1 = state_14772;var statearr_14812_14847 = state_14772__$1;(statearr_14812_14847[2] = inst_14760);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14772__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14816[0] = state_machine__5507__auto__);
(statearr_14816[1] = 1);
return statearr_14816;
});
var state_machine__5507__auto____1 = (function (state_14772){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14772);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14817){if((e14817 instanceof Object))
{var ex__5510__auto__ = e14817;var statearr_14818_14848 = state_14772;(statearr_14818_14848[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14772);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14849 = state_14772;
state_14772 = G__14849;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14772){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14819 = f__5522__auto__.call(null);(statearr_14819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14820);
return statearr_14819;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14986 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14956){var state_val_14957 = (state_14956[1]);if((state_val_14957 === 1))
{var state_14956__$1 = state_14956;var statearr_14958_14987 = state_14956__$1;(statearr_14958_14987[2] = null);
(statearr_14958_14987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 2))
{var inst_14919 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14920 = 0;var state_14956__$1 = (function (){var statearr_14959 = state_14956;(statearr_14959[7] = inst_14920);
(statearr_14959[8] = inst_14919);
return statearr_14959;
})();var statearr_14960_14988 = state_14956__$1;(statearr_14960_14988[2] = null);
(statearr_14960_14988[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 3))
{var inst_14954 = (state_14956[2]);var state_14956__$1 = state_14956;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14956__$1,inst_14954);
} else
{if((state_val_14957 === 4))
{var inst_14920 = (state_14956[7]);var inst_14922 = (inst_14920 < cnt);var state_14956__$1 = state_14956;if(cljs.core.truth_(inst_14922))
{var statearr_14961_14989 = state_14956__$1;(statearr_14961_14989[1] = 6);
} else
{var statearr_14962_14990 = state_14956__$1;(statearr_14962_14990[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 5))
{var inst_14940 = (state_14956[2]);var state_14956__$1 = (function (){var statearr_14963 = state_14956;(statearr_14963[9] = inst_14940);
return statearr_14963;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14956__$1,12,dchan);
} else
{if((state_val_14957 === 6))
{var state_14956__$1 = state_14956;var statearr_14964_14991 = state_14956__$1;(statearr_14964_14991[2] = null);
(statearr_14964_14991[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 7))
{var state_14956__$1 = state_14956;var statearr_14965_14992 = state_14956__$1;(statearr_14965_14992[2] = null);
(statearr_14965_14992[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 8))
{var inst_14938 = (state_14956[2]);var state_14956__$1 = state_14956;var statearr_14966_14993 = state_14956__$1;(statearr_14966_14993[2] = inst_14938);
(statearr_14966_14993[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 9))
{var inst_14920 = (state_14956[7]);var inst_14933 = (state_14956[2]);var inst_14934 = (inst_14920 + 1);var inst_14920__$1 = inst_14934;var state_14956__$1 = (function (){var statearr_14967 = state_14956;(statearr_14967[7] = inst_14920__$1);
(statearr_14967[10] = inst_14933);
return statearr_14967;
})();var statearr_14968_14994 = state_14956__$1;(statearr_14968_14994[2] = null);
(statearr_14968_14994[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 10))
{var inst_14924 = (state_14956[2]);var inst_14925 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14956__$1 = (function (){var statearr_14969 = state_14956;(statearr_14969[11] = inst_14924);
return statearr_14969;
})();var statearr_14970_14995 = state_14956__$1;(statearr_14970_14995[2] = inst_14925);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14956__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 11))
{var inst_14920 = (state_14956[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14956,10,Object,null,9);var inst_14929 = chs__$1.call(null,inst_14920);var inst_14930 = done.call(null,inst_14920);var inst_14931 = cljs.core.async.take_BANG_.call(null,inst_14929,inst_14930);var state_14956__$1 = state_14956;var statearr_14971_14996 = state_14956__$1;(statearr_14971_14996[2] = inst_14931);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14956__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 12))
{var inst_14942 = (state_14956[12]);var inst_14942__$1 = (state_14956[2]);var inst_14943 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14942__$1);var state_14956__$1 = (function (){var statearr_14972 = state_14956;(statearr_14972[12] = inst_14942__$1);
return statearr_14972;
})();if(cljs.core.truth_(inst_14943))
{var statearr_14973_14997 = state_14956__$1;(statearr_14973_14997[1] = 13);
} else
{var statearr_14974_14998 = state_14956__$1;(statearr_14974_14998[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 13))
{var inst_14945 = cljs.core.async.close_BANG_.call(null,out);var state_14956__$1 = state_14956;var statearr_14975_14999 = state_14956__$1;(statearr_14975_14999[2] = inst_14945);
(statearr_14975_14999[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 14))
{var inst_14942 = (state_14956[12]);var inst_14947 = cljs.core.apply.call(null,f,inst_14942);var state_14956__$1 = state_14956;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14956__$1,16,out,inst_14947);
} else
{if((state_val_14957 === 15))
{var inst_14952 = (state_14956[2]);var state_14956__$1 = state_14956;var statearr_14976_15000 = state_14956__$1;(statearr_14976_15000[2] = inst_14952);
(statearr_14976_15000[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14957 === 16))
{var inst_14949 = (state_14956[2]);var state_14956__$1 = (function (){var statearr_14977 = state_14956;(statearr_14977[13] = inst_14949);
return statearr_14977;
})();var statearr_14978_15001 = state_14956__$1;(statearr_14978_15001[2] = null);
(statearr_14978_15001[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14982 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14982[0] = state_machine__5507__auto__);
(statearr_14982[1] = 1);
return statearr_14982;
});
var state_machine__5507__auto____1 = (function (state_14956){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14956);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14983){if((e14983 instanceof Object))
{var ex__5510__auto__ = e14983;var statearr_14984_15002 = state_14956;(statearr_14984_15002[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14956);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15003 = state_14956;
state_14956 = G__15003;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14956){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14956);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14985 = f__5522__auto__.call(null);(statearr_14985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14986);
return statearr_14985;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15111 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15087){var state_val_15088 = (state_15087[1]);if((state_val_15088 === 1))
{var inst_15058 = cljs.core.vec.call(null,chs);var inst_15059 = inst_15058;var state_15087__$1 = (function (){var statearr_15089 = state_15087;(statearr_15089[7] = inst_15059);
return statearr_15089;
})();var statearr_15090_15112 = state_15087__$1;(statearr_15090_15112[2] = null);
(statearr_15090_15112[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 2))
{var inst_15059 = (state_15087[7]);var inst_15061 = cljs.core.count.call(null,inst_15059);var inst_15062 = (inst_15061 > 0);var state_15087__$1 = state_15087;if(cljs.core.truth_(inst_15062))
{var statearr_15091_15113 = state_15087__$1;(statearr_15091_15113[1] = 4);
} else
{var statearr_15092_15114 = state_15087__$1;(statearr_15092_15114[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 3))
{var inst_15085 = (state_15087[2]);var state_15087__$1 = state_15087;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15087__$1,inst_15085);
} else
{if((state_val_15088 === 4))
{var inst_15059 = (state_15087[7]);var state_15087__$1 = state_15087;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15087__$1,7,inst_15059);
} else
{if((state_val_15088 === 5))
{var inst_15081 = cljs.core.async.close_BANG_.call(null,out);var state_15087__$1 = state_15087;var statearr_15093_15115 = state_15087__$1;(statearr_15093_15115[2] = inst_15081);
(statearr_15093_15115[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 6))
{var inst_15083 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15094_15116 = state_15087__$1;(statearr_15094_15116[2] = inst_15083);
(statearr_15094_15116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 7))
{var inst_15067 = (state_15087[8]);var inst_15066 = (state_15087[9]);var inst_15066__$1 = (state_15087[2]);var inst_15067__$1 = cljs.core.nth.call(null,inst_15066__$1,0,null);var inst_15068 = cljs.core.nth.call(null,inst_15066__$1,1,null);var inst_15069 = (inst_15067__$1 == null);var state_15087__$1 = (function (){var statearr_15095 = state_15087;(statearr_15095[8] = inst_15067__$1);
(statearr_15095[10] = inst_15068);
(statearr_15095[9] = inst_15066__$1);
return statearr_15095;
})();if(cljs.core.truth_(inst_15069))
{var statearr_15096_15117 = state_15087__$1;(statearr_15096_15117[1] = 8);
} else
{var statearr_15097_15118 = state_15087__$1;(statearr_15097_15118[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 8))
{var inst_15059 = (state_15087[7]);var inst_15067 = (state_15087[8]);var inst_15068 = (state_15087[10]);var inst_15066 = (state_15087[9]);var inst_15071 = (function (){var c = inst_15068;var v = inst_15067;var vec__15064 = inst_15066;var cs = inst_15059;return ((function (c,v,vec__15064,cs,inst_15059,inst_15067,inst_15068,inst_15066,state_val_15088){
return (function (p1__15004_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15004_SHARP_);
});
;})(c,v,vec__15064,cs,inst_15059,inst_15067,inst_15068,inst_15066,state_val_15088))
})();var inst_15072 = cljs.core.filterv.call(null,inst_15071,inst_15059);var inst_15059__$1 = inst_15072;var state_15087__$1 = (function (){var statearr_15098 = state_15087;(statearr_15098[7] = inst_15059__$1);
return statearr_15098;
})();var statearr_15099_15119 = state_15087__$1;(statearr_15099_15119[2] = null);
(statearr_15099_15119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 9))
{var inst_15067 = (state_15087[8]);var state_15087__$1 = state_15087;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15087__$1,11,out,inst_15067);
} else
{if((state_val_15088 === 10))
{var inst_15079 = (state_15087[2]);var state_15087__$1 = state_15087;var statearr_15101_15120 = state_15087__$1;(statearr_15101_15120[2] = inst_15079);
(statearr_15101_15120[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15088 === 11))
{var inst_15059 = (state_15087[7]);var inst_15076 = (state_15087[2]);var tmp15100 = inst_15059;var inst_15059__$1 = tmp15100;var state_15087__$1 = (function (){var statearr_15102 = state_15087;(statearr_15102[7] = inst_15059__$1);
(statearr_15102[11] = inst_15076);
return statearr_15102;
})();var statearr_15103_15121 = state_15087__$1;(statearr_15103_15121[2] = null);
(statearr_15103_15121[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15107 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15107[0] = state_machine__5507__auto__);
(statearr_15107[1] = 1);
return statearr_15107;
});
var state_machine__5507__auto____1 = (function (state_15087){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15087);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15108){if((e15108 instanceof Object))
{var ex__5510__auto__ = e15108;var statearr_15109_15122 = state_15087;(statearr_15109_15122[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15087);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15108;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15123 = state_15087;
state_15087 = G__15123;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15087){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15087);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15110 = f__5522__auto__.call(null);(statearr_15110[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15111);
return statearr_15110;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15216 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15193){var state_val_15194 = (state_15193[1]);if((state_val_15194 === 1))
{var inst_15170 = 0;var state_15193__$1 = (function (){var statearr_15195 = state_15193;(statearr_15195[7] = inst_15170);
return statearr_15195;
})();var statearr_15196_15217 = state_15193__$1;(statearr_15196_15217[2] = null);
(statearr_15196_15217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15194 === 2))
{var inst_15170 = (state_15193[7]);var inst_15172 = (inst_15170 < n);var state_15193__$1 = state_15193;if(cljs.core.truth_(inst_15172))
{var statearr_15197_15218 = state_15193__$1;(statearr_15197_15218[1] = 4);
} else
{var statearr_15198_15219 = state_15193__$1;(statearr_15198_15219[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15194 === 3))
{var inst_15190 = (state_15193[2]);var inst_15191 = cljs.core.async.close_BANG_.call(null,out);var state_15193__$1 = (function (){var statearr_15199 = state_15193;(statearr_15199[8] = inst_15190);
return statearr_15199;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15193__$1,inst_15191);
} else
{if((state_val_15194 === 4))
{var state_15193__$1 = state_15193;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15193__$1,7,ch);
} else
{if((state_val_15194 === 5))
{var state_15193__$1 = state_15193;var statearr_15200_15220 = state_15193__$1;(statearr_15200_15220[2] = null);
(statearr_15200_15220[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15194 === 6))
{var inst_15188 = (state_15193[2]);var state_15193__$1 = state_15193;var statearr_15201_15221 = state_15193__$1;(statearr_15201_15221[2] = inst_15188);
(statearr_15201_15221[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15194 === 7))
{var inst_15175 = (state_15193[9]);var inst_15175__$1 = (state_15193[2]);var inst_15176 = (inst_15175__$1 == null);var inst_15177 = cljs.core.not.call(null,inst_15176);var state_15193__$1 = (function (){var statearr_15202 = state_15193;(statearr_15202[9] = inst_15175__$1);
return statearr_15202;
})();if(inst_15177)
{var statearr_15203_15222 = state_15193__$1;(statearr_15203_15222[1] = 8);
} else
{var statearr_15204_15223 = state_15193__$1;(statearr_15204_15223[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15194 === 8))
{var inst_15175 = (state_15193[9]);var state_15193__$1 = state_15193;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15193__$1,11,out,inst_15175);
} else
{if((state_val_15194 === 9))
{var state_15193__$1 = state_15193;var statearr_15205_15224 = state_15193__$1;(statearr_15205_15224[2] = null);
(statearr_15205_15224[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15194 === 10))
{var inst_15185 = (state_15193[2]);var state_15193__$1 = state_15193;var statearr_15206_15225 = state_15193__$1;(statearr_15206_15225[2] = inst_15185);
(statearr_15206_15225[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15194 === 11))
{var inst_15170 = (state_15193[7]);var inst_15180 = (state_15193[2]);var inst_15181 = (inst_15170 + 1);var inst_15170__$1 = inst_15181;var state_15193__$1 = (function (){var statearr_15207 = state_15193;(statearr_15207[10] = inst_15180);
(statearr_15207[7] = inst_15170__$1);
return statearr_15207;
})();var statearr_15208_15226 = state_15193__$1;(statearr_15208_15226[2] = null);
(statearr_15208_15226[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15212 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15212[0] = state_machine__5507__auto__);
(statearr_15212[1] = 1);
return statearr_15212;
});
var state_machine__5507__auto____1 = (function (state_15193){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15193);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15213){if((e15213 instanceof Object))
{var ex__5510__auto__ = e15213;var statearr_15214_15227 = state_15193;(statearr_15214_15227[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15193);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15213;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15228 = state_15193;
state_15193 = G__15228;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15193){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15193);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15215 = f__5522__auto__.call(null);(statearr_15215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15216);
return statearr_15215;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15325 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15300){var state_val_15301 = (state_15300[1]);if((state_val_15301 === 1))
{var inst_15277 = null;var state_15300__$1 = (function (){var statearr_15302 = state_15300;(statearr_15302[7] = inst_15277);
return statearr_15302;
})();var statearr_15303_15326 = state_15300__$1;(statearr_15303_15326[2] = null);
(statearr_15303_15326[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15301 === 2))
{var state_15300__$1 = state_15300;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15300__$1,4,ch);
} else
{if((state_val_15301 === 3))
{var inst_15297 = (state_15300[2]);var inst_15298 = cljs.core.async.close_BANG_.call(null,out);var state_15300__$1 = (function (){var statearr_15304 = state_15300;(statearr_15304[8] = inst_15297);
return statearr_15304;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15300__$1,inst_15298);
} else
{if((state_val_15301 === 4))
{var inst_15280 = (state_15300[9]);var inst_15280__$1 = (state_15300[2]);var inst_15281 = (inst_15280__$1 == null);var inst_15282 = cljs.core.not.call(null,inst_15281);var state_15300__$1 = (function (){var statearr_15305 = state_15300;(statearr_15305[9] = inst_15280__$1);
return statearr_15305;
})();if(inst_15282)
{var statearr_15306_15327 = state_15300__$1;(statearr_15306_15327[1] = 5);
} else
{var statearr_15307_15328 = state_15300__$1;(statearr_15307_15328[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15301 === 5))
{var inst_15280 = (state_15300[9]);var inst_15277 = (state_15300[7]);var inst_15284 = cljs.core._EQ_.call(null,inst_15280,inst_15277);var state_15300__$1 = state_15300;if(inst_15284)
{var statearr_15308_15329 = state_15300__$1;(statearr_15308_15329[1] = 8);
} else
{var statearr_15309_15330 = state_15300__$1;(statearr_15309_15330[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15301 === 6))
{var state_15300__$1 = state_15300;var statearr_15311_15331 = state_15300__$1;(statearr_15311_15331[2] = null);
(statearr_15311_15331[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15301 === 7))
{var inst_15295 = (state_15300[2]);var state_15300__$1 = state_15300;var statearr_15312_15332 = state_15300__$1;(statearr_15312_15332[2] = inst_15295);
(statearr_15312_15332[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15301 === 8))
{var inst_15277 = (state_15300[7]);var tmp15310 = inst_15277;var inst_15277__$1 = tmp15310;var state_15300__$1 = (function (){var statearr_15313 = state_15300;(statearr_15313[7] = inst_15277__$1);
return statearr_15313;
})();var statearr_15314_15333 = state_15300__$1;(statearr_15314_15333[2] = null);
(statearr_15314_15333[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15301 === 9))
{var inst_15280 = (state_15300[9]);var state_15300__$1 = state_15300;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15300__$1,11,out,inst_15280);
} else
{if((state_val_15301 === 10))
{var inst_15292 = (state_15300[2]);var state_15300__$1 = state_15300;var statearr_15315_15334 = state_15300__$1;(statearr_15315_15334[2] = inst_15292);
(statearr_15315_15334[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15301 === 11))
{var inst_15280 = (state_15300[9]);var inst_15289 = (state_15300[2]);var inst_15277 = inst_15280;var state_15300__$1 = (function (){var statearr_15316 = state_15300;(statearr_15316[7] = inst_15277);
(statearr_15316[10] = inst_15289);
return statearr_15316;
})();var statearr_15317_15335 = state_15300__$1;(statearr_15317_15335[2] = null);
(statearr_15317_15335[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15321 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15321[0] = state_machine__5507__auto__);
(statearr_15321[1] = 1);
return statearr_15321;
});
var state_machine__5507__auto____1 = (function (state_15300){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15300);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15322){if((e15322 instanceof Object))
{var ex__5510__auto__ = e15322;var statearr_15323_15336 = state_15300;(statearr_15323_15336[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15300);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15322;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15337 = state_15300;
state_15300 = G__15337;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15300){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15324 = f__5522__auto__.call(null);(statearr_15324[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15325);
return statearr_15324;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15472 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15442){var state_val_15443 = (state_15442[1]);if((state_val_15443 === 1))
{var inst_15405 = (new Array(n));var inst_15406 = inst_15405;var inst_15407 = 0;var state_15442__$1 = (function (){var statearr_15444 = state_15442;(statearr_15444[7] = inst_15406);
(statearr_15444[8] = inst_15407);
return statearr_15444;
})();var statearr_15445_15473 = state_15442__$1;(statearr_15445_15473[2] = null);
(statearr_15445_15473[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 2))
{var state_15442__$1 = state_15442;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15442__$1,4,ch);
} else
{if((state_val_15443 === 3))
{var inst_15440 = (state_15442[2]);var state_15442__$1 = state_15442;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15442__$1,inst_15440);
} else
{if((state_val_15443 === 4))
{var inst_15410 = (state_15442[9]);var inst_15410__$1 = (state_15442[2]);var inst_15411 = (inst_15410__$1 == null);var inst_15412 = cljs.core.not.call(null,inst_15411);var state_15442__$1 = (function (){var statearr_15446 = state_15442;(statearr_15446[9] = inst_15410__$1);
return statearr_15446;
})();if(inst_15412)
{var statearr_15447_15474 = state_15442__$1;(statearr_15447_15474[1] = 5);
} else
{var statearr_15448_15475 = state_15442__$1;(statearr_15448_15475[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 5))
{var inst_15410 = (state_15442[9]);var inst_15415 = (state_15442[10]);var inst_15406 = (state_15442[7]);var inst_15407 = (state_15442[8]);var inst_15414 = (inst_15406[inst_15407] = inst_15410);var inst_15415__$1 = (inst_15407 + 1);var inst_15416 = (inst_15415__$1 < n);var state_15442__$1 = (function (){var statearr_15449 = state_15442;(statearr_15449[10] = inst_15415__$1);
(statearr_15449[11] = inst_15414);
return statearr_15449;
})();if(cljs.core.truth_(inst_15416))
{var statearr_15450_15476 = state_15442__$1;(statearr_15450_15476[1] = 8);
} else
{var statearr_15451_15477 = state_15442__$1;(statearr_15451_15477[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 6))
{var inst_15407 = (state_15442[8]);var inst_15428 = (inst_15407 > 0);var state_15442__$1 = state_15442;if(cljs.core.truth_(inst_15428))
{var statearr_15453_15478 = state_15442__$1;(statearr_15453_15478[1] = 12);
} else
{var statearr_15454_15479 = state_15442__$1;(statearr_15454_15479[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 7))
{var inst_15438 = (state_15442[2]);var state_15442__$1 = state_15442;var statearr_15455_15480 = state_15442__$1;(statearr_15455_15480[2] = inst_15438);
(statearr_15455_15480[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 8))
{var inst_15415 = (state_15442[10]);var inst_15406 = (state_15442[7]);var tmp15452 = inst_15406;var inst_15406__$1 = tmp15452;var inst_15407 = inst_15415;var state_15442__$1 = (function (){var statearr_15456 = state_15442;(statearr_15456[7] = inst_15406__$1);
(statearr_15456[8] = inst_15407);
return statearr_15456;
})();var statearr_15457_15481 = state_15442__$1;(statearr_15457_15481[2] = null);
(statearr_15457_15481[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 9))
{var inst_15406 = (state_15442[7]);var inst_15420 = cljs.core.vec.call(null,inst_15406);var state_15442__$1 = state_15442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15442__$1,11,out,inst_15420);
} else
{if((state_val_15443 === 10))
{var inst_15426 = (state_15442[2]);var state_15442__$1 = state_15442;var statearr_15458_15482 = state_15442__$1;(statearr_15458_15482[2] = inst_15426);
(statearr_15458_15482[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 11))
{var inst_15422 = (state_15442[2]);var inst_15423 = (new Array(n));var inst_15406 = inst_15423;var inst_15407 = 0;var state_15442__$1 = (function (){var statearr_15459 = state_15442;(statearr_15459[12] = inst_15422);
(statearr_15459[7] = inst_15406);
(statearr_15459[8] = inst_15407);
return statearr_15459;
})();var statearr_15460_15483 = state_15442__$1;(statearr_15460_15483[2] = null);
(statearr_15460_15483[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 12))
{var inst_15406 = (state_15442[7]);var inst_15430 = cljs.core.vec.call(null,inst_15406);var state_15442__$1 = state_15442;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15442__$1,15,out,inst_15430);
} else
{if((state_val_15443 === 13))
{var state_15442__$1 = state_15442;var statearr_15461_15484 = state_15442__$1;(statearr_15461_15484[2] = null);
(statearr_15461_15484[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 14))
{var inst_15435 = (state_15442[2]);var inst_15436 = cljs.core.async.close_BANG_.call(null,out);var state_15442__$1 = (function (){var statearr_15462 = state_15442;(statearr_15462[13] = inst_15435);
return statearr_15462;
})();var statearr_15463_15485 = state_15442__$1;(statearr_15463_15485[2] = inst_15436);
(statearr_15463_15485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15443 === 15))
{var inst_15432 = (state_15442[2]);var state_15442__$1 = state_15442;var statearr_15464_15486 = state_15442__$1;(statearr_15464_15486[2] = inst_15432);
(statearr_15464_15486[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15468 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15468[0] = state_machine__5507__auto__);
(statearr_15468[1] = 1);
return statearr_15468;
});
var state_machine__5507__auto____1 = (function (state_15442){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15442);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15469){if((e15469 instanceof Object))
{var ex__5510__auto__ = e15469;var statearr_15470_15487 = state_15442;(statearr_15470_15487[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15442);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15469;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15488 = state_15442;
state_15442 = G__15488;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15442){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15442);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15471 = f__5522__auto__.call(null);(statearr_15471[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15472);
return statearr_15471;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15631 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15601){var state_val_15602 = (state_15601[1]);if((state_val_15602 === 1))
{var inst_15560 = [];var inst_15561 = inst_15560;var inst_15562 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15601__$1 = (function (){var statearr_15603 = state_15601;(statearr_15603[7] = inst_15562);
(statearr_15603[8] = inst_15561);
return statearr_15603;
})();var statearr_15604_15632 = state_15601__$1;(statearr_15604_15632[2] = null);
(statearr_15604_15632[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 2))
{var state_15601__$1 = state_15601;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15601__$1,4,ch);
} else
{if((state_val_15602 === 3))
{var inst_15599 = (state_15601[2]);var state_15601__$1 = state_15601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15601__$1,inst_15599);
} else
{if((state_val_15602 === 4))
{var inst_15565 = (state_15601[9]);var inst_15565__$1 = (state_15601[2]);var inst_15566 = (inst_15565__$1 == null);var inst_15567 = cljs.core.not.call(null,inst_15566);var state_15601__$1 = (function (){var statearr_15605 = state_15601;(statearr_15605[9] = inst_15565__$1);
return statearr_15605;
})();if(inst_15567)
{var statearr_15606_15633 = state_15601__$1;(statearr_15606_15633[1] = 5);
} else
{var statearr_15607_15634 = state_15601__$1;(statearr_15607_15634[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 5))
{var inst_15569 = (state_15601[10]);var inst_15565 = (state_15601[9]);var inst_15562 = (state_15601[7]);var inst_15569__$1 = f.call(null,inst_15565);var inst_15570 = cljs.core._EQ_.call(null,inst_15569__$1,inst_15562);var inst_15571 = cljs.core.keyword_identical_QMARK_.call(null,inst_15562,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15572 = (inst_15570) || (inst_15571);var state_15601__$1 = (function (){var statearr_15608 = state_15601;(statearr_15608[10] = inst_15569__$1);
return statearr_15608;
})();if(cljs.core.truth_(inst_15572))
{var statearr_15609_15635 = state_15601__$1;(statearr_15609_15635[1] = 8);
} else
{var statearr_15610_15636 = state_15601__$1;(statearr_15610_15636[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 6))
{var inst_15561 = (state_15601[8]);var inst_15586 = inst_15561.length;var inst_15587 = (inst_15586 > 0);var state_15601__$1 = state_15601;if(cljs.core.truth_(inst_15587))
{var statearr_15612_15637 = state_15601__$1;(statearr_15612_15637[1] = 12);
} else
{var statearr_15613_15638 = state_15601__$1;(statearr_15613_15638[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 7))
{var inst_15597 = (state_15601[2]);var state_15601__$1 = state_15601;var statearr_15614_15639 = state_15601__$1;(statearr_15614_15639[2] = inst_15597);
(statearr_15614_15639[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 8))
{var inst_15569 = (state_15601[10]);var inst_15565 = (state_15601[9]);var inst_15561 = (state_15601[8]);var inst_15574 = inst_15561.push(inst_15565);var tmp15611 = inst_15561;var inst_15561__$1 = tmp15611;var inst_15562 = inst_15569;var state_15601__$1 = (function (){var statearr_15615 = state_15601;(statearr_15615[11] = inst_15574);
(statearr_15615[7] = inst_15562);
(statearr_15615[8] = inst_15561__$1);
return statearr_15615;
})();var statearr_15616_15640 = state_15601__$1;(statearr_15616_15640[2] = null);
(statearr_15616_15640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 9))
{var inst_15561 = (state_15601[8]);var inst_15577 = cljs.core.vec.call(null,inst_15561);var state_15601__$1 = state_15601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15601__$1,11,out,inst_15577);
} else
{if((state_val_15602 === 10))
{var inst_15584 = (state_15601[2]);var state_15601__$1 = state_15601;var statearr_15617_15641 = state_15601__$1;(statearr_15617_15641[2] = inst_15584);
(statearr_15617_15641[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 11))
{var inst_15569 = (state_15601[10]);var inst_15565 = (state_15601[9]);var inst_15579 = (state_15601[2]);var inst_15580 = [];var inst_15581 = inst_15580.push(inst_15565);var inst_15561 = inst_15580;var inst_15562 = inst_15569;var state_15601__$1 = (function (){var statearr_15618 = state_15601;(statearr_15618[12] = inst_15581);
(statearr_15618[13] = inst_15579);
(statearr_15618[7] = inst_15562);
(statearr_15618[8] = inst_15561);
return statearr_15618;
})();var statearr_15619_15642 = state_15601__$1;(statearr_15619_15642[2] = null);
(statearr_15619_15642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 12))
{var inst_15561 = (state_15601[8]);var inst_15589 = cljs.core.vec.call(null,inst_15561);var state_15601__$1 = state_15601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15601__$1,15,out,inst_15589);
} else
{if((state_val_15602 === 13))
{var state_15601__$1 = state_15601;var statearr_15620_15643 = state_15601__$1;(statearr_15620_15643[2] = null);
(statearr_15620_15643[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 14))
{var inst_15594 = (state_15601[2]);var inst_15595 = cljs.core.async.close_BANG_.call(null,out);var state_15601__$1 = (function (){var statearr_15621 = state_15601;(statearr_15621[14] = inst_15594);
return statearr_15621;
})();var statearr_15622_15644 = state_15601__$1;(statearr_15622_15644[2] = inst_15595);
(statearr_15622_15644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15602 === 15))
{var inst_15591 = (state_15601[2]);var state_15601__$1 = state_15601;var statearr_15623_15645 = state_15601__$1;(statearr_15623_15645[2] = inst_15591);
(statearr_15623_15645[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15627[0] = state_machine__5507__auto__);
(statearr_15627[1] = 1);
return statearr_15627;
});
var state_machine__5507__auto____1 = (function (state_15601){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15601);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15628){if((e15628 instanceof Object))
{var ex__5510__auto__ = e15628;var statearr_15629_15646 = state_15601;(statearr_15629_15646[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15628;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15647 = state_15601;
state_15601 = G__15647;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15601){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15630 = f__5522__auto__.call(null);(statearr_15630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15631);
return statearr_15630;
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