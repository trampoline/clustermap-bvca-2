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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13592 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13592 = (function (f,fn_handler,meta13593){
this.f = f;
this.fn_handler = fn_handler;
this.meta13593 = meta13593;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13592.cljs$lang$type = true;
cljs.core.async.t13592.cljs$lang$ctorStr = "cljs.core.async/t13592";
cljs.core.async.t13592.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13592");
});
cljs.core.async.t13592.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13592.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13592.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13594){var self__ = this;
var _13594__$1 = this;return self__.meta13593;
});
cljs.core.async.t13592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13594,meta13593__$1){var self__ = this;
var _13594__$1 = this;return (new cljs.core.async.t13592(self__.f,self__.fn_handler,meta13593__$1));
});
cljs.core.async.__GT_t13592 = (function __GT_t13592(f__$1,fn_handler__$1,meta13593){return (new cljs.core.async.t13592(f__$1,fn_handler__$1,meta13593));
});
}
return (new cljs.core.async.t13592(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13596 = buff;if(G__13596)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13596.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13596.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13596);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13596);
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
{var val_13597 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13597);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13597);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13598 = n;var x_13599 = 0;while(true){
if((x_13599 < n__4248__auto___13598))
{(a[x_13599] = 0);
{
var G__13600 = (x_13599 + 1);
x_13599 = G__13600;
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
var G__13601 = (i + 1);
i = G__13601;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13605 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13605 = (function (flag,alt_flag,meta13606){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13606 = meta13606;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13605.cljs$lang$type = true;
cljs.core.async.t13605.cljs$lang$ctorStr = "cljs.core.async/t13605";
cljs.core.async.t13605.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13605");
});
cljs.core.async.t13605.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13605.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13605.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13607){var self__ = this;
var _13607__$1 = this;return self__.meta13606;
});
cljs.core.async.t13605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13607,meta13606__$1){var self__ = this;
var _13607__$1 = this;return (new cljs.core.async.t13605(self__.flag,self__.alt_flag,meta13606__$1));
});
cljs.core.async.__GT_t13605 = (function __GT_t13605(flag__$1,alt_flag__$1,meta13606){return (new cljs.core.async.t13605(flag__$1,alt_flag__$1,meta13606));
});
}
return (new cljs.core.async.t13605(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13611 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13611 = (function (cb,flag,alt_handler,meta13612){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13612 = meta13612;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13611.cljs$lang$type = true;
cljs.core.async.t13611.cljs$lang$ctorStr = "cljs.core.async/t13611";
cljs.core.async.t13611.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13611");
});
cljs.core.async.t13611.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13611.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13611.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13613){var self__ = this;
var _13613__$1 = this;return self__.meta13612;
});
cljs.core.async.t13611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13613,meta13612__$1){var self__ = this;
var _13613__$1 = this;return (new cljs.core.async.t13611(self__.cb,self__.flag,self__.alt_handler,meta13612__$1));
});
cljs.core.async.__GT_t13611 = (function __GT_t13611(cb__$1,flag__$1,alt_handler__$1,meta13612){return (new cljs.core.async.t13611(cb__$1,flag__$1,alt_handler__$1,meta13612));
});
}
return (new cljs.core.async.t13611(cb,flag,alt_handler,null));
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
return (function (p1__13614_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13614_SHARP_,port], null));
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
var G__13615 = (i + 1);
i = G__13615;
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
var alts_BANG___delegate = function (ports,p__13616){var map__13618 = p__13616;var map__13618__$1 = ((cljs.core.seq_QMARK_.call(null,map__13618))?cljs.core.apply.call(null,cljs.core.hash_map,map__13618):map__13618);var opts = map__13618__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13616 = null;if (arguments.length > 1) {
  p__13616 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13616);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13619){
var ports = cljs.core.first(arglist__13619);
var p__13616 = cljs.core.rest(arglist__13619);
return alts_BANG___delegate(ports,p__13616);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13627 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13627 = (function (ch,f,map_LT_,meta13628){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13628 = meta13628;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13627.cljs$lang$type = true;
cljs.core.async.t13627.cljs$lang$ctorStr = "cljs.core.async/t13627";
cljs.core.async.t13627.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13627");
});
cljs.core.async.t13627.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13627.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13627.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13627.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13630 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13630 = (function (fn1,_,meta13628,ch,f,map_LT_,meta13631){
this.fn1 = fn1;
this._ = _;
this.meta13628 = meta13628;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13631 = meta13631;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13630.cljs$lang$type = true;
cljs.core.async.t13630.cljs$lang$ctorStr = "cljs.core.async/t13630";
cljs.core.async.t13630.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13630");
});
cljs.core.async.t13630.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13630.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13630.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13630.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13620_SHARP_){return f1.call(null,(((p1__13620_SHARP_ == null))?null:self__.f.call(null,p1__13620_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13632){var self__ = this;
var _13632__$1 = this;return self__.meta13631;
});
cljs.core.async.t13630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13632,meta13631__$1){var self__ = this;
var _13632__$1 = this;return (new cljs.core.async.t13630(self__.fn1,self__._,self__.meta13628,self__.ch,self__.f,self__.map_LT_,meta13631__$1));
});
cljs.core.async.__GT_t13630 = (function __GT_t13630(fn1__$1,___$2,meta13628__$1,ch__$2,f__$2,map_LT___$2,meta13631){return (new cljs.core.async.t13630(fn1__$1,___$2,meta13628__$1,ch__$2,f__$2,map_LT___$2,meta13631));
});
}
return (new cljs.core.async.t13630(fn1,___$1,self__.meta13628,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13627.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13627.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13627.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13629){var self__ = this;
var _13629__$1 = this;return self__.meta13628;
});
cljs.core.async.t13627.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13629,meta13628__$1){var self__ = this;
var _13629__$1 = this;return (new cljs.core.async.t13627(self__.ch,self__.f,self__.map_LT_,meta13628__$1));
});
cljs.core.async.__GT_t13627 = (function __GT_t13627(ch__$1,f__$1,map_LT___$1,meta13628){return (new cljs.core.async.t13627(ch__$1,f__$1,map_LT___$1,meta13628));
});
}
return (new cljs.core.async.t13627(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13636 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13636 = (function (ch,f,map_GT_,meta13637){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13637 = meta13637;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13636.cljs$lang$type = true;
cljs.core.async.t13636.cljs$lang$ctorStr = "cljs.core.async/t13636";
cljs.core.async.t13636.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13636");
});
cljs.core.async.t13636.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13636.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13636.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13636.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13636.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13636.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13636.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13638){var self__ = this;
var _13638__$1 = this;return self__.meta13637;
});
cljs.core.async.t13636.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13638,meta13637__$1){var self__ = this;
var _13638__$1 = this;return (new cljs.core.async.t13636(self__.ch,self__.f,self__.map_GT_,meta13637__$1));
});
cljs.core.async.__GT_t13636 = (function __GT_t13636(ch__$1,f__$1,map_GT___$1,meta13637){return (new cljs.core.async.t13636(ch__$1,f__$1,map_GT___$1,meta13637));
});
}
return (new cljs.core.async.t13636(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13642 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13642 = (function (ch,p,filter_GT_,meta13643){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13643 = meta13643;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13642.cljs$lang$type = true;
cljs.core.async.t13642.cljs$lang$ctorStr = "cljs.core.async/t13642";
cljs.core.async.t13642.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13642");
});
cljs.core.async.t13642.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13642.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13642.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13642.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13642.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13642.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13642.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13644){var self__ = this;
var _13644__$1 = this;return self__.meta13643;
});
cljs.core.async.t13642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13644,meta13643__$1){var self__ = this;
var _13644__$1 = this;return (new cljs.core.async.t13642(self__.ch,self__.p,self__.filter_GT_,meta13643__$1));
});
cljs.core.async.__GT_t13642 = (function __GT_t13642(ch__$1,p__$1,filter_GT___$1,meta13643){return (new cljs.core.async.t13642(ch__$1,p__$1,filter_GT___$1,meta13643));
});
}
return (new cljs.core.async.t13642(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13727 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13706){var state_val_13707 = (state_13706[1]);if((state_val_13707 === 1))
{var state_13706__$1 = state_13706;var statearr_13708_13728 = state_13706__$1;(statearr_13708_13728[2] = null);
(statearr_13708_13728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 2))
{var state_13706__$1 = state_13706;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13706__$1,4,ch);
} else
{if((state_val_13707 === 3))
{var inst_13704 = (state_13706[2]);var state_13706__$1 = state_13706;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13706__$1,inst_13704);
} else
{if((state_val_13707 === 4))
{var inst_13688 = (state_13706[7]);var inst_13688__$1 = (state_13706[2]);var inst_13689 = (inst_13688__$1 == null);var state_13706__$1 = (function (){var statearr_13709 = state_13706;(statearr_13709[7] = inst_13688__$1);
return statearr_13709;
})();if(cljs.core.truth_(inst_13689))
{var statearr_13710_13729 = state_13706__$1;(statearr_13710_13729[1] = 5);
} else
{var statearr_13711_13730 = state_13706__$1;(statearr_13711_13730[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 5))
{var inst_13691 = cljs.core.async.close_BANG_.call(null,out);var state_13706__$1 = state_13706;var statearr_13712_13731 = state_13706__$1;(statearr_13712_13731[2] = inst_13691);
(statearr_13712_13731[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 6))
{var inst_13688 = (state_13706[7]);var inst_13693 = p.call(null,inst_13688);var state_13706__$1 = state_13706;if(cljs.core.truth_(inst_13693))
{var statearr_13713_13732 = state_13706__$1;(statearr_13713_13732[1] = 8);
} else
{var statearr_13714_13733 = state_13706__$1;(statearr_13714_13733[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 7))
{var inst_13702 = (state_13706[2]);var state_13706__$1 = state_13706;var statearr_13715_13734 = state_13706__$1;(statearr_13715_13734[2] = inst_13702);
(statearr_13715_13734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 8))
{var inst_13688 = (state_13706[7]);var state_13706__$1 = state_13706;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13706__$1,11,out,inst_13688);
} else
{if((state_val_13707 === 9))
{var state_13706__$1 = state_13706;var statearr_13716_13735 = state_13706__$1;(statearr_13716_13735[2] = null);
(statearr_13716_13735[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 10))
{var inst_13699 = (state_13706[2]);var state_13706__$1 = (function (){var statearr_13717 = state_13706;(statearr_13717[8] = inst_13699);
return statearr_13717;
})();var statearr_13718_13736 = state_13706__$1;(statearr_13718_13736[2] = null);
(statearr_13718_13736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13707 === 11))
{var inst_13696 = (state_13706[2]);var state_13706__$1 = state_13706;var statearr_13719_13737 = state_13706__$1;(statearr_13719_13737[2] = inst_13696);
(statearr_13719_13737[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13723 = [null,null,null,null,null,null,null,null,null];(statearr_13723[0] = state_machine__5507__auto__);
(statearr_13723[1] = 1);
return statearr_13723;
});
var state_machine__5507__auto____1 = (function (state_13706){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13706);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13724){if((e13724 instanceof Object))
{var ex__5510__auto__ = e13724;var statearr_13725_13738 = state_13706;(statearr_13725_13738[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13706);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13724;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13739 = state_13706;
state_13706 = G__13739;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13706){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13706);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13726 = f__5522__auto__.call(null);(statearr_13726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13727);
return statearr_13726;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13891){var state_val_13892 = (state_13891[1]);if((state_val_13892 === 1))
{var state_13891__$1 = state_13891;var statearr_13893_13930 = state_13891__$1;(statearr_13893_13930[2] = null);
(statearr_13893_13930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 2))
{var state_13891__$1 = state_13891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13891__$1,4,in$);
} else
{if((state_val_13892 === 3))
{var inst_13889 = (state_13891[2]);var state_13891__$1 = state_13891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13891__$1,inst_13889);
} else
{if((state_val_13892 === 4))
{var inst_13837 = (state_13891[7]);var inst_13837__$1 = (state_13891[2]);var inst_13838 = (inst_13837__$1 == null);var state_13891__$1 = (function (){var statearr_13894 = state_13891;(statearr_13894[7] = inst_13837__$1);
return statearr_13894;
})();if(cljs.core.truth_(inst_13838))
{var statearr_13895_13931 = state_13891__$1;(statearr_13895_13931[1] = 5);
} else
{var statearr_13896_13932 = state_13891__$1;(statearr_13896_13932[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 5))
{var inst_13840 = cljs.core.async.close_BANG_.call(null,out);var state_13891__$1 = state_13891;var statearr_13897_13933 = state_13891__$1;(statearr_13897_13933[2] = inst_13840);
(statearr_13897_13933[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 6))
{var inst_13837 = (state_13891[7]);var inst_13842 = f.call(null,inst_13837);var inst_13847 = cljs.core.seq.call(null,inst_13842);var inst_13848 = inst_13847;var inst_13849 = null;var inst_13850 = 0;var inst_13851 = 0;var state_13891__$1 = (function (){var statearr_13898 = state_13891;(statearr_13898[8] = inst_13848);
(statearr_13898[9] = inst_13849);
(statearr_13898[10] = inst_13851);
(statearr_13898[11] = inst_13850);
return statearr_13898;
})();var statearr_13899_13934 = state_13891__$1;(statearr_13899_13934[2] = null);
(statearr_13899_13934[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 7))
{var inst_13887 = (state_13891[2]);var state_13891__$1 = state_13891;var statearr_13900_13935 = state_13891__$1;(statearr_13900_13935[2] = inst_13887);
(statearr_13900_13935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 8))
{var inst_13851 = (state_13891[10]);var inst_13850 = (state_13891[11]);var inst_13853 = (inst_13851 < inst_13850);var inst_13854 = inst_13853;var state_13891__$1 = state_13891;if(cljs.core.truth_(inst_13854))
{var statearr_13901_13936 = state_13891__$1;(statearr_13901_13936[1] = 10);
} else
{var statearr_13902_13937 = state_13891__$1;(statearr_13902_13937[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 9))
{var inst_13884 = (state_13891[2]);var state_13891__$1 = (function (){var statearr_13903 = state_13891;(statearr_13903[12] = inst_13884);
return statearr_13903;
})();var statearr_13904_13938 = state_13891__$1;(statearr_13904_13938[2] = null);
(statearr_13904_13938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 10))
{var inst_13849 = (state_13891[9]);var inst_13851 = (state_13891[10]);var inst_13856 = cljs.core._nth.call(null,inst_13849,inst_13851);var state_13891__$1 = state_13891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13891__$1,13,out,inst_13856);
} else
{if((state_val_13892 === 11))
{var inst_13848 = (state_13891[8]);var inst_13862 = (state_13891[13]);var inst_13862__$1 = cljs.core.seq.call(null,inst_13848);var state_13891__$1 = (function (){var statearr_13908 = state_13891;(statearr_13908[13] = inst_13862__$1);
return statearr_13908;
})();if(inst_13862__$1)
{var statearr_13909_13939 = state_13891__$1;(statearr_13909_13939[1] = 14);
} else
{var statearr_13910_13940 = state_13891__$1;(statearr_13910_13940[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 12))
{var inst_13882 = (state_13891[2]);var state_13891__$1 = state_13891;var statearr_13911_13941 = state_13891__$1;(statearr_13911_13941[2] = inst_13882);
(statearr_13911_13941[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 13))
{var inst_13848 = (state_13891[8]);var inst_13849 = (state_13891[9]);var inst_13851 = (state_13891[10]);var inst_13850 = (state_13891[11]);var inst_13858 = (state_13891[2]);var inst_13859 = (inst_13851 + 1);var tmp13905 = inst_13848;var tmp13906 = inst_13849;var tmp13907 = inst_13850;var inst_13848__$1 = tmp13905;var inst_13849__$1 = tmp13906;var inst_13850__$1 = tmp13907;var inst_13851__$1 = inst_13859;var state_13891__$1 = (function (){var statearr_13912 = state_13891;(statearr_13912[8] = inst_13848__$1);
(statearr_13912[9] = inst_13849__$1);
(statearr_13912[14] = inst_13858);
(statearr_13912[10] = inst_13851__$1);
(statearr_13912[11] = inst_13850__$1);
return statearr_13912;
})();var statearr_13913_13942 = state_13891__$1;(statearr_13913_13942[2] = null);
(statearr_13913_13942[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 14))
{var inst_13862 = (state_13891[13]);var inst_13864 = cljs.core.chunked_seq_QMARK_.call(null,inst_13862);var state_13891__$1 = state_13891;if(inst_13864)
{var statearr_13914_13943 = state_13891__$1;(statearr_13914_13943[1] = 17);
} else
{var statearr_13915_13944 = state_13891__$1;(statearr_13915_13944[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 15))
{var state_13891__$1 = state_13891;var statearr_13916_13945 = state_13891__$1;(statearr_13916_13945[2] = null);
(statearr_13916_13945[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 16))
{var inst_13880 = (state_13891[2]);var state_13891__$1 = state_13891;var statearr_13917_13946 = state_13891__$1;(statearr_13917_13946[2] = inst_13880);
(statearr_13917_13946[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 17))
{var inst_13862 = (state_13891[13]);var inst_13866 = cljs.core.chunk_first.call(null,inst_13862);var inst_13867 = cljs.core.chunk_rest.call(null,inst_13862);var inst_13868 = cljs.core.count.call(null,inst_13866);var inst_13848 = inst_13867;var inst_13849 = inst_13866;var inst_13850 = inst_13868;var inst_13851 = 0;var state_13891__$1 = (function (){var statearr_13918 = state_13891;(statearr_13918[8] = inst_13848);
(statearr_13918[9] = inst_13849);
(statearr_13918[10] = inst_13851);
(statearr_13918[11] = inst_13850);
return statearr_13918;
})();var statearr_13919_13947 = state_13891__$1;(statearr_13919_13947[2] = null);
(statearr_13919_13947[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 18))
{var inst_13862 = (state_13891[13]);var inst_13871 = cljs.core.first.call(null,inst_13862);var state_13891__$1 = state_13891;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13891__$1,20,out,inst_13871);
} else
{if((state_val_13892 === 19))
{var inst_13877 = (state_13891[2]);var state_13891__$1 = state_13891;var statearr_13920_13948 = state_13891__$1;(statearr_13920_13948[2] = inst_13877);
(statearr_13920_13948[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13892 === 20))
{var inst_13862 = (state_13891[13]);var inst_13873 = (state_13891[2]);var inst_13874 = cljs.core.next.call(null,inst_13862);var inst_13848 = inst_13874;var inst_13849 = null;var inst_13850 = 0;var inst_13851 = 0;var state_13891__$1 = (function (){var statearr_13921 = state_13891;(statearr_13921[8] = inst_13848);
(statearr_13921[9] = inst_13849);
(statearr_13921[15] = inst_13873);
(statearr_13921[10] = inst_13851);
(statearr_13921[11] = inst_13850);
return statearr_13921;
})();var statearr_13922_13949 = state_13891__$1;(statearr_13922_13949[2] = null);
(statearr_13922_13949[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13926 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13926[0] = state_machine__5507__auto__);
(statearr_13926[1] = 1);
return statearr_13926;
});
var state_machine__5507__auto____1 = (function (state_13891){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13891);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13927){if((e13927 instanceof Object))
{var ex__5510__auto__ = e13927;var statearr_13928_13950 = state_13891;(statearr_13928_13950[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13891);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13951 = state_13891;
state_13891 = G__13951;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13891){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13929 = f__5522__auto__.call(null);(statearr_13929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13929;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14032 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14011){var state_val_14012 = (state_14011[1]);if((state_val_14012 === 1))
{var state_14011__$1 = state_14011;var statearr_14013_14033 = state_14011__$1;(statearr_14013_14033[2] = null);
(statearr_14013_14033[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14012 === 2))
{var state_14011__$1 = state_14011;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14011__$1,4,from);
} else
{if((state_val_14012 === 3))
{var inst_14009 = (state_14011[2]);var state_14011__$1 = state_14011;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14011__$1,inst_14009);
} else
{if((state_val_14012 === 4))
{var inst_13994 = (state_14011[7]);var inst_13994__$1 = (state_14011[2]);var inst_13995 = (inst_13994__$1 == null);var state_14011__$1 = (function (){var statearr_14014 = state_14011;(statearr_14014[7] = inst_13994__$1);
return statearr_14014;
})();if(cljs.core.truth_(inst_13995))
{var statearr_14015_14034 = state_14011__$1;(statearr_14015_14034[1] = 5);
} else
{var statearr_14016_14035 = state_14011__$1;(statearr_14016_14035[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14012 === 5))
{var state_14011__$1 = state_14011;if(cljs.core.truth_(close_QMARK_))
{var statearr_14017_14036 = state_14011__$1;(statearr_14017_14036[1] = 8);
} else
{var statearr_14018_14037 = state_14011__$1;(statearr_14018_14037[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14012 === 6))
{var inst_13994 = (state_14011[7]);var state_14011__$1 = state_14011;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14011__$1,11,to,inst_13994);
} else
{if((state_val_14012 === 7))
{var inst_14007 = (state_14011[2]);var state_14011__$1 = state_14011;var statearr_14019_14038 = state_14011__$1;(statearr_14019_14038[2] = inst_14007);
(statearr_14019_14038[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14012 === 8))
{var inst_13998 = cljs.core.async.close_BANG_.call(null,to);var state_14011__$1 = state_14011;var statearr_14020_14039 = state_14011__$1;(statearr_14020_14039[2] = inst_13998);
(statearr_14020_14039[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14012 === 9))
{var state_14011__$1 = state_14011;var statearr_14021_14040 = state_14011__$1;(statearr_14021_14040[2] = null);
(statearr_14021_14040[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14012 === 10))
{var inst_14001 = (state_14011[2]);var state_14011__$1 = state_14011;var statearr_14022_14041 = state_14011__$1;(statearr_14022_14041[2] = inst_14001);
(statearr_14022_14041[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14012 === 11))
{var inst_14004 = (state_14011[2]);var state_14011__$1 = (function (){var statearr_14023 = state_14011;(statearr_14023[8] = inst_14004);
return statearr_14023;
})();var statearr_14024_14042 = state_14011__$1;(statearr_14024_14042[2] = null);
(statearr_14024_14042[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14028 = [null,null,null,null,null,null,null,null,null];(statearr_14028[0] = state_machine__5507__auto__);
(statearr_14028[1] = 1);
return statearr_14028;
});
var state_machine__5507__auto____1 = (function (state_14011){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14011);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14029){if((e14029 instanceof Object))
{var ex__5510__auto__ = e14029;var statearr_14030_14043 = state_14011;(statearr_14030_14043[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14011);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14044 = state_14011;
state_14011 = G__14044;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14011){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14011);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14031 = f__5522__auto__.call(null);(statearr_14031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14032);
return statearr_14031;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14131 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14109){var state_val_14110 = (state_14109[1]);if((state_val_14110 === 1))
{var state_14109__$1 = state_14109;var statearr_14111_14132 = state_14109__$1;(statearr_14111_14132[2] = null);
(statearr_14111_14132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 2))
{var state_14109__$1 = state_14109;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14109__$1,4,ch);
} else
{if((state_val_14110 === 3))
{var inst_14107 = (state_14109[2]);var state_14109__$1 = state_14109;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14109__$1,inst_14107);
} else
{if((state_val_14110 === 4))
{var inst_14090 = (state_14109[7]);var inst_14090__$1 = (state_14109[2]);var inst_14091 = (inst_14090__$1 == null);var state_14109__$1 = (function (){var statearr_14112 = state_14109;(statearr_14112[7] = inst_14090__$1);
return statearr_14112;
})();if(cljs.core.truth_(inst_14091))
{var statearr_14113_14133 = state_14109__$1;(statearr_14113_14133[1] = 5);
} else
{var statearr_14114_14134 = state_14109__$1;(statearr_14114_14134[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 5))
{var inst_14093 = cljs.core.async.close_BANG_.call(null,tc);var inst_14094 = cljs.core.async.close_BANG_.call(null,fc);var state_14109__$1 = (function (){var statearr_14115 = state_14109;(statearr_14115[8] = inst_14093);
return statearr_14115;
})();var statearr_14116_14135 = state_14109__$1;(statearr_14116_14135[2] = inst_14094);
(statearr_14116_14135[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 6))
{var inst_14090 = (state_14109[7]);var inst_14096 = p.call(null,inst_14090);var state_14109__$1 = state_14109;if(cljs.core.truth_(inst_14096))
{var statearr_14117_14136 = state_14109__$1;(statearr_14117_14136[1] = 9);
} else
{var statearr_14118_14137 = state_14109__$1;(statearr_14118_14137[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 7))
{var inst_14105 = (state_14109[2]);var state_14109__$1 = state_14109;var statearr_14119_14138 = state_14109__$1;(statearr_14119_14138[2] = inst_14105);
(statearr_14119_14138[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 8))
{var inst_14102 = (state_14109[2]);var state_14109__$1 = (function (){var statearr_14120 = state_14109;(statearr_14120[9] = inst_14102);
return statearr_14120;
})();var statearr_14121_14139 = state_14109__$1;(statearr_14121_14139[2] = null);
(statearr_14121_14139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 9))
{var state_14109__$1 = state_14109;var statearr_14122_14140 = state_14109__$1;(statearr_14122_14140[2] = tc);
(statearr_14122_14140[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 10))
{var state_14109__$1 = state_14109;var statearr_14123_14141 = state_14109__$1;(statearr_14123_14141[2] = fc);
(statearr_14123_14141[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14110 === 11))
{var inst_14090 = (state_14109[7]);var inst_14100 = (state_14109[2]);var state_14109__$1 = state_14109;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14109__$1,8,inst_14100,inst_14090);
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
var state_machine__5507__auto____0 = (function (){var statearr_14127 = [null,null,null,null,null,null,null,null,null,null];(statearr_14127[0] = state_machine__5507__auto__);
(statearr_14127[1] = 1);
return statearr_14127;
});
var state_machine__5507__auto____1 = (function (state_14109){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14109);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14128){if((e14128 instanceof Object))
{var ex__5510__auto__ = e14128;var statearr_14129_14142 = state_14109;(statearr_14129_14142[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14109);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14143 = state_14109;
state_14109 = G__14143;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14109){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14109);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14130 = f__5522__auto__.call(null);(statearr_14130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14131);
return statearr_14130;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14190){var state_val_14191 = (state_14190[1]);if((state_val_14191 === 7))
{var inst_14186 = (state_14190[2]);var state_14190__$1 = state_14190;var statearr_14192_14208 = state_14190__$1;(statearr_14192_14208[2] = inst_14186);
(statearr_14192_14208[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14191 === 6))
{var inst_14179 = (state_14190[7]);var inst_14176 = (state_14190[8]);var inst_14183 = f.call(null,inst_14176,inst_14179);var inst_14176__$1 = inst_14183;var state_14190__$1 = (function (){var statearr_14193 = state_14190;(statearr_14193[8] = inst_14176__$1);
return statearr_14193;
})();var statearr_14194_14209 = state_14190__$1;(statearr_14194_14209[2] = null);
(statearr_14194_14209[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14191 === 5))
{var inst_14176 = (state_14190[8]);var state_14190__$1 = state_14190;var statearr_14195_14210 = state_14190__$1;(statearr_14195_14210[2] = inst_14176);
(statearr_14195_14210[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14191 === 4))
{var inst_14179 = (state_14190[7]);var inst_14179__$1 = (state_14190[2]);var inst_14180 = (inst_14179__$1 == null);var state_14190__$1 = (function (){var statearr_14196 = state_14190;(statearr_14196[7] = inst_14179__$1);
return statearr_14196;
})();if(cljs.core.truth_(inst_14180))
{var statearr_14197_14211 = state_14190__$1;(statearr_14197_14211[1] = 5);
} else
{var statearr_14198_14212 = state_14190__$1;(statearr_14198_14212[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14191 === 3))
{var inst_14188 = (state_14190[2]);var state_14190__$1 = state_14190;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14190__$1,inst_14188);
} else
{if((state_val_14191 === 2))
{var state_14190__$1 = state_14190;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14190__$1,4,ch);
} else
{if((state_val_14191 === 1))
{var inst_14176 = init;var state_14190__$1 = (function (){var statearr_14199 = state_14190;(statearr_14199[8] = inst_14176);
return statearr_14199;
})();var statearr_14200_14213 = state_14190__$1;(statearr_14200_14213[2] = null);
(statearr_14200_14213[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14204 = [null,null,null,null,null,null,null,null,null];(statearr_14204[0] = state_machine__5507__auto__);
(statearr_14204[1] = 1);
return statearr_14204;
});
var state_machine__5507__auto____1 = (function (state_14190){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14190);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14205){if((e14205 instanceof Object))
{var ex__5510__auto__ = e14205;var statearr_14206_14214 = state_14190;(statearr_14206_14214[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14190);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14205;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14215 = state_14190;
state_14190 = G__14215;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14190){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14207 = f__5522__auto__.call(null);(statearr_14207[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14207;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14277){var state_val_14278 = (state_14277[1]);if((state_val_14278 === 1))
{var inst_14257 = cljs.core.seq.call(null,coll);var inst_14258 = inst_14257;var state_14277__$1 = (function (){var statearr_14279 = state_14277;(statearr_14279[7] = inst_14258);
return statearr_14279;
})();var statearr_14280_14298 = state_14277__$1;(statearr_14280_14298[2] = null);
(statearr_14280_14298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14278 === 2))
{var inst_14258 = (state_14277[7]);var state_14277__$1 = state_14277;if(cljs.core.truth_(inst_14258))
{var statearr_14281_14299 = state_14277__$1;(statearr_14281_14299[1] = 4);
} else
{var statearr_14282_14300 = state_14277__$1;(statearr_14282_14300[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14278 === 3))
{var inst_14275 = (state_14277[2]);var state_14277__$1 = state_14277;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14277__$1,inst_14275);
} else
{if((state_val_14278 === 4))
{var inst_14258 = (state_14277[7]);var inst_14261 = cljs.core.first.call(null,inst_14258);var state_14277__$1 = state_14277;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14277__$1,7,ch,inst_14261);
} else
{if((state_val_14278 === 5))
{var state_14277__$1 = state_14277;if(cljs.core.truth_(close_QMARK_))
{var statearr_14283_14301 = state_14277__$1;(statearr_14283_14301[1] = 8);
} else
{var statearr_14284_14302 = state_14277__$1;(statearr_14284_14302[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14278 === 6))
{var inst_14273 = (state_14277[2]);var state_14277__$1 = state_14277;var statearr_14285_14303 = state_14277__$1;(statearr_14285_14303[2] = inst_14273);
(statearr_14285_14303[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14278 === 7))
{var inst_14258 = (state_14277[7]);var inst_14263 = (state_14277[2]);var inst_14264 = cljs.core.next.call(null,inst_14258);var inst_14258__$1 = inst_14264;var state_14277__$1 = (function (){var statearr_14286 = state_14277;(statearr_14286[7] = inst_14258__$1);
(statearr_14286[8] = inst_14263);
return statearr_14286;
})();var statearr_14287_14304 = state_14277__$1;(statearr_14287_14304[2] = null);
(statearr_14287_14304[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14278 === 8))
{var inst_14268 = cljs.core.async.close_BANG_.call(null,ch);var state_14277__$1 = state_14277;var statearr_14288_14305 = state_14277__$1;(statearr_14288_14305[2] = inst_14268);
(statearr_14288_14305[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14278 === 9))
{var state_14277__$1 = state_14277;var statearr_14289_14306 = state_14277__$1;(statearr_14289_14306[2] = null);
(statearr_14289_14306[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14278 === 10))
{var inst_14271 = (state_14277[2]);var state_14277__$1 = state_14277;var statearr_14290_14307 = state_14277__$1;(statearr_14290_14307[2] = inst_14271);
(statearr_14290_14307[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14294 = [null,null,null,null,null,null,null,null,null];(statearr_14294[0] = state_machine__5507__auto__);
(statearr_14294[1] = 1);
return statearr_14294;
});
var state_machine__5507__auto____1 = (function (state_14277){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14277);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14295){if((e14295 instanceof Object))
{var ex__5510__auto__ = e14295;var statearr_14296_14308 = state_14277;(statearr_14296_14308[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14277);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14295;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14309 = state_14277;
state_14277 = G__14309;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14277){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14277);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14297 = f__5522__auto__.call(null);(statearr_14297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14297;
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
cljs.core.async.Mux = (function (){var obj14311 = {};return obj14311;
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
cljs.core.async.Mult = (function (){var obj14313 = {};return obj14313;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14537 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14537 = (function (cs,ch,mult,meta14538){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14538 = meta14538;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14537.cljs$lang$type = true;
cljs.core.async.t14537.cljs$lang$ctorStr = "cljs.core.async/t14537";
cljs.core.async.t14537.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14537");
});})(cs))
;
cljs.core.async.t14537.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14537.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14537.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14537.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14537.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14537.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14537.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14539){var self__ = this;
var _14539__$1 = this;return self__.meta14538;
});})(cs))
;
cljs.core.async.t14537.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14539,meta14538__$1){var self__ = this;
var _14539__$1 = this;return (new cljs.core.async.t14537(self__.cs,self__.ch,self__.mult,meta14538__$1));
});})(cs))
;
cljs.core.async.__GT_t14537 = ((function (cs){
return (function __GT_t14537(cs__$1,ch__$1,mult__$1,meta14538){return (new cljs.core.async.t14537(cs__$1,ch__$1,mult__$1,meta14538));
});})(cs))
;
}
return (new cljs.core.async.t14537(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14760 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14674){var state_val_14675 = (state_14674[1]);if((state_val_14675 === 32))
{var inst_14618 = (state_14674[7]);var inst_14542 = (state_14674[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14674,31,Object,null,30);var inst_14625 = cljs.core.async.put_BANG_.call(null,inst_14618,inst_14542,done);var state_14674__$1 = state_14674;var statearr_14676_14761 = state_14674__$1;(statearr_14676_14761[2] = inst_14625);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14674__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 1))
{var state_14674__$1 = state_14674;var statearr_14677_14762 = state_14674__$1;(statearr_14677_14762[2] = null);
(statearr_14677_14762[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 33))
{var inst_14631 = (state_14674[9]);var inst_14633 = cljs.core.chunked_seq_QMARK_.call(null,inst_14631);var state_14674__$1 = state_14674;if(inst_14633)
{var statearr_14678_14763 = state_14674__$1;(statearr_14678_14763[1] = 36);
} else
{var statearr_14679_14764 = state_14674__$1;(statearr_14679_14764[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 2))
{var state_14674__$1 = state_14674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14674__$1,4,ch);
} else
{if((state_val_14675 === 34))
{var state_14674__$1 = state_14674;var statearr_14680_14765 = state_14674__$1;(statearr_14680_14765[2] = null);
(statearr_14680_14765[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 3))
{var inst_14672 = (state_14674[2]);var state_14674__$1 = state_14674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14674__$1,inst_14672);
} else
{if((state_val_14675 === 35))
{var inst_14656 = (state_14674[2]);var state_14674__$1 = state_14674;var statearr_14681_14766 = state_14674__$1;(statearr_14681_14766[2] = inst_14656);
(statearr_14681_14766[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 4))
{var inst_14542 = (state_14674[8]);var inst_14542__$1 = (state_14674[2]);var inst_14543 = (inst_14542__$1 == null);var state_14674__$1 = (function (){var statearr_14682 = state_14674;(statearr_14682[8] = inst_14542__$1);
return statearr_14682;
})();if(cljs.core.truth_(inst_14543))
{var statearr_14683_14767 = state_14674__$1;(statearr_14683_14767[1] = 5);
} else
{var statearr_14684_14768 = state_14674__$1;(statearr_14684_14768[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 36))
{var inst_14631 = (state_14674[9]);var inst_14635 = cljs.core.chunk_first.call(null,inst_14631);var inst_14636 = cljs.core.chunk_rest.call(null,inst_14631);var inst_14637 = cljs.core.count.call(null,inst_14635);var inst_14610 = inst_14636;var inst_14611 = inst_14635;var inst_14612 = inst_14637;var inst_14613 = 0;var state_14674__$1 = (function (){var statearr_14685 = state_14674;(statearr_14685[10] = inst_14612);
(statearr_14685[11] = inst_14611);
(statearr_14685[12] = inst_14610);
(statearr_14685[13] = inst_14613);
return statearr_14685;
})();var statearr_14686_14769 = state_14674__$1;(statearr_14686_14769[2] = null);
(statearr_14686_14769[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 5))
{var inst_14549 = cljs.core.deref.call(null,cs);var inst_14550 = cljs.core.seq.call(null,inst_14549);var inst_14551 = inst_14550;var inst_14552 = null;var inst_14553 = 0;var inst_14554 = 0;var state_14674__$1 = (function (){var statearr_14687 = state_14674;(statearr_14687[14] = inst_14554);
(statearr_14687[15] = inst_14552);
(statearr_14687[16] = inst_14553);
(statearr_14687[17] = inst_14551);
return statearr_14687;
})();var statearr_14688_14770 = state_14674__$1;(statearr_14688_14770[2] = null);
(statearr_14688_14770[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 37))
{var inst_14631 = (state_14674[9]);var inst_14640 = cljs.core.first.call(null,inst_14631);var state_14674__$1 = (function (){var statearr_14689 = state_14674;(statearr_14689[18] = inst_14640);
return statearr_14689;
})();var statearr_14690_14771 = state_14674__$1;(statearr_14690_14771[2] = null);
(statearr_14690_14771[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 6))
{var inst_14602 = (state_14674[19]);var inst_14601 = cljs.core.deref.call(null,cs);var inst_14602__$1 = cljs.core.keys.call(null,inst_14601);var inst_14603 = cljs.core.count.call(null,inst_14602__$1);var inst_14604 = cljs.core.reset_BANG_.call(null,dctr,inst_14603);var inst_14609 = cljs.core.seq.call(null,inst_14602__$1);var inst_14610 = inst_14609;var inst_14611 = null;var inst_14612 = 0;var inst_14613 = 0;var state_14674__$1 = (function (){var statearr_14691 = state_14674;(statearr_14691[10] = inst_14612);
(statearr_14691[19] = inst_14602__$1);
(statearr_14691[11] = inst_14611);
(statearr_14691[12] = inst_14610);
(statearr_14691[20] = inst_14604);
(statearr_14691[13] = inst_14613);
return statearr_14691;
})();var statearr_14692_14772 = state_14674__$1;(statearr_14692_14772[2] = null);
(statearr_14692_14772[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 38))
{var inst_14653 = (state_14674[2]);var state_14674__$1 = state_14674;var statearr_14693_14773 = state_14674__$1;(statearr_14693_14773[2] = inst_14653);
(statearr_14693_14773[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 7))
{var inst_14670 = (state_14674[2]);var state_14674__$1 = state_14674;var statearr_14694_14774 = state_14674__$1;(statearr_14694_14774[2] = inst_14670);
(statearr_14694_14774[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 39))
{var inst_14631 = (state_14674[9]);var inst_14649 = (state_14674[2]);var inst_14650 = cljs.core.next.call(null,inst_14631);var inst_14610 = inst_14650;var inst_14611 = null;var inst_14612 = 0;var inst_14613 = 0;var state_14674__$1 = (function (){var statearr_14695 = state_14674;(statearr_14695[10] = inst_14612);
(statearr_14695[11] = inst_14611);
(statearr_14695[12] = inst_14610);
(statearr_14695[21] = inst_14649);
(statearr_14695[13] = inst_14613);
return statearr_14695;
})();var statearr_14696_14775 = state_14674__$1;(statearr_14696_14775[2] = null);
(statearr_14696_14775[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 8))
{var inst_14554 = (state_14674[14]);var inst_14553 = (state_14674[16]);var inst_14556 = (inst_14554 < inst_14553);var inst_14557 = inst_14556;var state_14674__$1 = state_14674;if(cljs.core.truth_(inst_14557))
{var statearr_14697_14776 = state_14674__$1;(statearr_14697_14776[1] = 10);
} else
{var statearr_14698_14777 = state_14674__$1;(statearr_14698_14777[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 40))
{var inst_14640 = (state_14674[18]);var inst_14641 = (state_14674[2]);var inst_14642 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14643 = cljs.core.async.untap_STAR_.call(null,m,inst_14640);var state_14674__$1 = (function (){var statearr_14699 = state_14674;(statearr_14699[22] = inst_14641);
(statearr_14699[23] = inst_14642);
return statearr_14699;
})();var statearr_14700_14778 = state_14674__$1;(statearr_14700_14778[2] = inst_14643);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14674__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 9))
{var inst_14599 = (state_14674[2]);var state_14674__$1 = state_14674;var statearr_14701_14779 = state_14674__$1;(statearr_14701_14779[2] = inst_14599);
(statearr_14701_14779[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 41))
{var inst_14640 = (state_14674[18]);var inst_14542 = (state_14674[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14674,40,Object,null,39);var inst_14647 = cljs.core.async.put_BANG_.call(null,inst_14640,inst_14542,done);var state_14674__$1 = state_14674;var statearr_14702_14780 = state_14674__$1;(statearr_14702_14780[2] = inst_14647);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14674__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 10))
{var inst_14554 = (state_14674[14]);var inst_14552 = (state_14674[15]);var inst_14560 = cljs.core._nth.call(null,inst_14552,inst_14554);var inst_14561 = cljs.core.nth.call(null,inst_14560,0,null);var inst_14562 = cljs.core.nth.call(null,inst_14560,1,null);var state_14674__$1 = (function (){var statearr_14703 = state_14674;(statearr_14703[24] = inst_14561);
return statearr_14703;
})();if(cljs.core.truth_(inst_14562))
{var statearr_14704_14781 = state_14674__$1;(statearr_14704_14781[1] = 13);
} else
{var statearr_14705_14782 = state_14674__$1;(statearr_14705_14782[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 42))
{var state_14674__$1 = state_14674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14674__$1,45,dchan);
} else
{if((state_val_14675 === 11))
{var inst_14571 = (state_14674[25]);var inst_14551 = (state_14674[17]);var inst_14571__$1 = cljs.core.seq.call(null,inst_14551);var state_14674__$1 = (function (){var statearr_14706 = state_14674;(statearr_14706[25] = inst_14571__$1);
return statearr_14706;
})();if(inst_14571__$1)
{var statearr_14707_14783 = state_14674__$1;(statearr_14707_14783[1] = 16);
} else
{var statearr_14708_14784 = state_14674__$1;(statearr_14708_14784[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 43))
{var state_14674__$1 = state_14674;var statearr_14709_14785 = state_14674__$1;(statearr_14709_14785[2] = null);
(statearr_14709_14785[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 12))
{var inst_14597 = (state_14674[2]);var state_14674__$1 = state_14674;var statearr_14710_14786 = state_14674__$1;(statearr_14710_14786[2] = inst_14597);
(statearr_14710_14786[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 44))
{var inst_14667 = (state_14674[2]);var state_14674__$1 = (function (){var statearr_14711 = state_14674;(statearr_14711[26] = inst_14667);
return statearr_14711;
})();var statearr_14712_14787 = state_14674__$1;(statearr_14712_14787[2] = null);
(statearr_14712_14787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 13))
{var inst_14561 = (state_14674[24]);var inst_14564 = cljs.core.async.close_BANG_.call(null,inst_14561);var state_14674__$1 = state_14674;var statearr_14713_14788 = state_14674__$1;(statearr_14713_14788[2] = inst_14564);
(statearr_14713_14788[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 45))
{var inst_14664 = (state_14674[2]);var state_14674__$1 = state_14674;var statearr_14717_14789 = state_14674__$1;(statearr_14717_14789[2] = inst_14664);
(statearr_14717_14789[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 14))
{var state_14674__$1 = state_14674;var statearr_14718_14790 = state_14674__$1;(statearr_14718_14790[2] = null);
(statearr_14718_14790[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 15))
{var inst_14554 = (state_14674[14]);var inst_14552 = (state_14674[15]);var inst_14553 = (state_14674[16]);var inst_14551 = (state_14674[17]);var inst_14567 = (state_14674[2]);var inst_14568 = (inst_14554 + 1);var tmp14714 = inst_14552;var tmp14715 = inst_14553;var tmp14716 = inst_14551;var inst_14551__$1 = tmp14716;var inst_14552__$1 = tmp14714;var inst_14553__$1 = tmp14715;var inst_14554__$1 = inst_14568;var state_14674__$1 = (function (){var statearr_14719 = state_14674;(statearr_14719[27] = inst_14567);
(statearr_14719[14] = inst_14554__$1);
(statearr_14719[15] = inst_14552__$1);
(statearr_14719[16] = inst_14553__$1);
(statearr_14719[17] = inst_14551__$1);
return statearr_14719;
})();var statearr_14720_14791 = state_14674__$1;(statearr_14720_14791[2] = null);
(statearr_14720_14791[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 16))
{var inst_14571 = (state_14674[25]);var inst_14573 = cljs.core.chunked_seq_QMARK_.call(null,inst_14571);var state_14674__$1 = state_14674;if(inst_14573)
{var statearr_14721_14792 = state_14674__$1;(statearr_14721_14792[1] = 19);
} else
{var statearr_14722_14793 = state_14674__$1;(statearr_14722_14793[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 17))
{var state_14674__$1 = state_14674;var statearr_14723_14794 = state_14674__$1;(statearr_14723_14794[2] = null);
(statearr_14723_14794[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 18))
{var inst_14595 = (state_14674[2]);var state_14674__$1 = state_14674;var statearr_14724_14795 = state_14674__$1;(statearr_14724_14795[2] = inst_14595);
(statearr_14724_14795[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 19))
{var inst_14571 = (state_14674[25]);var inst_14575 = cljs.core.chunk_first.call(null,inst_14571);var inst_14576 = cljs.core.chunk_rest.call(null,inst_14571);var inst_14577 = cljs.core.count.call(null,inst_14575);var inst_14551 = inst_14576;var inst_14552 = inst_14575;var inst_14553 = inst_14577;var inst_14554 = 0;var state_14674__$1 = (function (){var statearr_14725 = state_14674;(statearr_14725[14] = inst_14554);
(statearr_14725[15] = inst_14552);
(statearr_14725[16] = inst_14553);
(statearr_14725[17] = inst_14551);
return statearr_14725;
})();var statearr_14726_14796 = state_14674__$1;(statearr_14726_14796[2] = null);
(statearr_14726_14796[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 20))
{var inst_14571 = (state_14674[25]);var inst_14581 = cljs.core.first.call(null,inst_14571);var inst_14582 = cljs.core.nth.call(null,inst_14581,0,null);var inst_14583 = cljs.core.nth.call(null,inst_14581,1,null);var state_14674__$1 = (function (){var statearr_14727 = state_14674;(statearr_14727[28] = inst_14582);
return statearr_14727;
})();if(cljs.core.truth_(inst_14583))
{var statearr_14728_14797 = state_14674__$1;(statearr_14728_14797[1] = 22);
} else
{var statearr_14729_14798 = state_14674__$1;(statearr_14729_14798[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 21))
{var inst_14592 = (state_14674[2]);var state_14674__$1 = state_14674;var statearr_14730_14799 = state_14674__$1;(statearr_14730_14799[2] = inst_14592);
(statearr_14730_14799[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 22))
{var inst_14582 = (state_14674[28]);var inst_14585 = cljs.core.async.close_BANG_.call(null,inst_14582);var state_14674__$1 = state_14674;var statearr_14731_14800 = state_14674__$1;(statearr_14731_14800[2] = inst_14585);
(statearr_14731_14800[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 23))
{var state_14674__$1 = state_14674;var statearr_14732_14801 = state_14674__$1;(statearr_14732_14801[2] = null);
(statearr_14732_14801[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 24))
{var inst_14571 = (state_14674[25]);var inst_14588 = (state_14674[2]);var inst_14589 = cljs.core.next.call(null,inst_14571);var inst_14551 = inst_14589;var inst_14552 = null;var inst_14553 = 0;var inst_14554 = 0;var state_14674__$1 = (function (){var statearr_14733 = state_14674;(statearr_14733[14] = inst_14554);
(statearr_14733[15] = inst_14552);
(statearr_14733[16] = inst_14553);
(statearr_14733[17] = inst_14551);
(statearr_14733[29] = inst_14588);
return statearr_14733;
})();var statearr_14734_14802 = state_14674__$1;(statearr_14734_14802[2] = null);
(statearr_14734_14802[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 25))
{var inst_14612 = (state_14674[10]);var inst_14613 = (state_14674[13]);var inst_14615 = (inst_14613 < inst_14612);var inst_14616 = inst_14615;var state_14674__$1 = state_14674;if(cljs.core.truth_(inst_14616))
{var statearr_14735_14803 = state_14674__$1;(statearr_14735_14803[1] = 27);
} else
{var statearr_14736_14804 = state_14674__$1;(statearr_14736_14804[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 26))
{var inst_14602 = (state_14674[19]);var inst_14660 = (state_14674[2]);var inst_14661 = cljs.core.seq.call(null,inst_14602);var state_14674__$1 = (function (){var statearr_14737 = state_14674;(statearr_14737[30] = inst_14660);
return statearr_14737;
})();if(inst_14661)
{var statearr_14738_14805 = state_14674__$1;(statearr_14738_14805[1] = 42);
} else
{var statearr_14739_14806 = state_14674__$1;(statearr_14739_14806[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 27))
{var inst_14611 = (state_14674[11]);var inst_14613 = (state_14674[13]);var inst_14618 = cljs.core._nth.call(null,inst_14611,inst_14613);var state_14674__$1 = (function (){var statearr_14740 = state_14674;(statearr_14740[7] = inst_14618);
return statearr_14740;
})();var statearr_14741_14807 = state_14674__$1;(statearr_14741_14807[2] = null);
(statearr_14741_14807[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 28))
{var inst_14610 = (state_14674[12]);var inst_14631 = (state_14674[9]);var inst_14631__$1 = cljs.core.seq.call(null,inst_14610);var state_14674__$1 = (function (){var statearr_14745 = state_14674;(statearr_14745[9] = inst_14631__$1);
return statearr_14745;
})();if(inst_14631__$1)
{var statearr_14746_14808 = state_14674__$1;(statearr_14746_14808[1] = 33);
} else
{var statearr_14747_14809 = state_14674__$1;(statearr_14747_14809[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 29))
{var inst_14658 = (state_14674[2]);var state_14674__$1 = state_14674;var statearr_14748_14810 = state_14674__$1;(statearr_14748_14810[2] = inst_14658);
(statearr_14748_14810[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 30))
{var inst_14612 = (state_14674[10]);var inst_14611 = (state_14674[11]);var inst_14610 = (state_14674[12]);var inst_14613 = (state_14674[13]);var inst_14627 = (state_14674[2]);var inst_14628 = (inst_14613 + 1);var tmp14742 = inst_14612;var tmp14743 = inst_14611;var tmp14744 = inst_14610;var inst_14610__$1 = tmp14744;var inst_14611__$1 = tmp14743;var inst_14612__$1 = tmp14742;var inst_14613__$1 = inst_14628;var state_14674__$1 = (function (){var statearr_14749 = state_14674;(statearr_14749[10] = inst_14612__$1);
(statearr_14749[11] = inst_14611__$1);
(statearr_14749[12] = inst_14610__$1);
(statearr_14749[31] = inst_14627);
(statearr_14749[13] = inst_14613__$1);
return statearr_14749;
})();var statearr_14750_14811 = state_14674__$1;(statearr_14750_14811[2] = null);
(statearr_14750_14811[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14675 === 31))
{var inst_14618 = (state_14674[7]);var inst_14619 = (state_14674[2]);var inst_14620 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14621 = cljs.core.async.untap_STAR_.call(null,m,inst_14618);var state_14674__$1 = (function (){var statearr_14751 = state_14674;(statearr_14751[32] = inst_14619);
(statearr_14751[33] = inst_14620);
return statearr_14751;
})();var statearr_14752_14812 = state_14674__$1;(statearr_14752_14812[2] = inst_14621);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14674__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14756 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14756[0] = state_machine__5507__auto__);
(statearr_14756[1] = 1);
return statearr_14756;
});
var state_machine__5507__auto____1 = (function (state_14674){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14757){if((e14757 instanceof Object))
{var ex__5510__auto__ = e14757;var statearr_14758_14813 = state_14674;(statearr_14758_14813[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14757;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14814 = state_14674;
state_14674 = G__14814;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14674){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14759 = f__5522__auto__.call(null);(statearr_14759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14760);
return statearr_14759;
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
cljs.core.async.Mix = (function (){var obj14816 = {};return obj14816;
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
;var m = (function (){if(typeof cljs.core.async.t14926 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14926 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14927){
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
this.meta14927 = meta14927;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14926.cljs$lang$type = true;
cljs.core.async.t14926.cljs$lang$ctorStr = "cljs.core.async/t14926";
cljs.core.async.t14926.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14926");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14926.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14926.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14926.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14926.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14926.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14926.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14926.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14926.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14926.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14928){var self__ = this;
var _14928__$1 = this;return self__.meta14927;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14926.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14928,meta14927__$1){var self__ = this;
var _14928__$1 = this;return (new cljs.core.async.t14926(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14927__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14926 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14926(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14927){return (new cljs.core.async.t14926(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14927));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14926(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15035 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14993){var state_val_14994 = (state_14993[1]);if((state_val_14994 === 1))
{var inst_14932 = (state_14993[7]);var inst_14932__$1 = calc_state.call(null);var inst_14933 = cljs.core.seq_QMARK_.call(null,inst_14932__$1);var state_14993__$1 = (function (){var statearr_14995 = state_14993;(statearr_14995[7] = inst_14932__$1);
return statearr_14995;
})();if(inst_14933)
{var statearr_14996_15036 = state_14993__$1;(statearr_14996_15036[1] = 2);
} else
{var statearr_14997_15037 = state_14993__$1;(statearr_14997_15037[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 2))
{var inst_14932 = (state_14993[7]);var inst_14935 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14932);var state_14993__$1 = state_14993;var statearr_14998_15038 = state_14993__$1;(statearr_14998_15038[2] = inst_14935);
(statearr_14998_15038[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 3))
{var inst_14932 = (state_14993[7]);var state_14993__$1 = state_14993;var statearr_14999_15039 = state_14993__$1;(statearr_14999_15039[2] = inst_14932);
(statearr_14999_15039[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 4))
{var inst_14932 = (state_14993[7]);var inst_14938 = (state_14993[2]);var inst_14939 = cljs.core.get.call(null,inst_14938,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14940 = cljs.core.get.call(null,inst_14938,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14941 = cljs.core.get.call(null,inst_14938,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14942 = inst_14932;var state_14993__$1 = (function (){var statearr_15000 = state_14993;(statearr_15000[8] = inst_14939);
(statearr_15000[9] = inst_14942);
(statearr_15000[10] = inst_14941);
(statearr_15000[11] = inst_14940);
return statearr_15000;
})();var statearr_15001_15040 = state_14993__$1;(statearr_15001_15040[2] = null);
(statearr_15001_15040[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 5))
{var inst_14942 = (state_14993[9]);var inst_14945 = cljs.core.seq_QMARK_.call(null,inst_14942);var state_14993__$1 = state_14993;if(inst_14945)
{var statearr_15002_15041 = state_14993__$1;(statearr_15002_15041[1] = 7);
} else
{var statearr_15003_15042 = state_14993__$1;(statearr_15003_15042[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 6))
{var inst_14991 = (state_14993[2]);var state_14993__$1 = state_14993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14993__$1,inst_14991);
} else
{if((state_val_14994 === 7))
{var inst_14942 = (state_14993[9]);var inst_14947 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14942);var state_14993__$1 = state_14993;var statearr_15004_15043 = state_14993__$1;(statearr_15004_15043[2] = inst_14947);
(statearr_15004_15043[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 8))
{var inst_14942 = (state_14993[9]);var state_14993__$1 = state_14993;var statearr_15005_15044 = state_14993__$1;(statearr_15005_15044[2] = inst_14942);
(statearr_15005_15044[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 9))
{var inst_14950 = (state_14993[12]);var inst_14950__$1 = (state_14993[2]);var inst_14951 = cljs.core.get.call(null,inst_14950__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14952 = cljs.core.get.call(null,inst_14950__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14953 = cljs.core.get.call(null,inst_14950__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14993__$1 = (function (){var statearr_15006 = state_14993;(statearr_15006[13] = inst_14953);
(statearr_15006[14] = inst_14952);
(statearr_15006[12] = inst_14950__$1);
return statearr_15006;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14993__$1,10,inst_14951);
} else
{if((state_val_14994 === 10))
{var inst_14957 = (state_14993[15]);var inst_14958 = (state_14993[16]);var inst_14956 = (state_14993[2]);var inst_14957__$1 = cljs.core.nth.call(null,inst_14956,0,null);var inst_14958__$1 = cljs.core.nth.call(null,inst_14956,1,null);var inst_14959 = (inst_14957__$1 == null);var inst_14960 = cljs.core._EQ_.call(null,inst_14958__$1,change);var inst_14961 = (inst_14959) || (inst_14960);var state_14993__$1 = (function (){var statearr_15007 = state_14993;(statearr_15007[15] = inst_14957__$1);
(statearr_15007[16] = inst_14958__$1);
return statearr_15007;
})();if(cljs.core.truth_(inst_14961))
{var statearr_15008_15045 = state_14993__$1;(statearr_15008_15045[1] = 11);
} else
{var statearr_15009_15046 = state_14993__$1;(statearr_15009_15046[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 11))
{var inst_14957 = (state_14993[15]);var inst_14963 = (inst_14957 == null);var state_14993__$1 = state_14993;if(cljs.core.truth_(inst_14963))
{var statearr_15010_15047 = state_14993__$1;(statearr_15010_15047[1] = 14);
} else
{var statearr_15011_15048 = state_14993__$1;(statearr_15011_15048[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 12))
{var inst_14972 = (state_14993[17]);var inst_14958 = (state_14993[16]);var inst_14953 = (state_14993[13]);var inst_14972__$1 = inst_14953.call(null,inst_14958);var state_14993__$1 = (function (){var statearr_15012 = state_14993;(statearr_15012[17] = inst_14972__$1);
return statearr_15012;
})();if(cljs.core.truth_(inst_14972__$1))
{var statearr_15013_15049 = state_14993__$1;(statearr_15013_15049[1] = 17);
} else
{var statearr_15014_15050 = state_14993__$1;(statearr_15014_15050[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 13))
{var inst_14989 = (state_14993[2]);var state_14993__$1 = state_14993;var statearr_15015_15051 = state_14993__$1;(statearr_15015_15051[2] = inst_14989);
(statearr_15015_15051[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 14))
{var inst_14958 = (state_14993[16]);var inst_14965 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14958);var state_14993__$1 = state_14993;var statearr_15016_15052 = state_14993__$1;(statearr_15016_15052[2] = inst_14965);
(statearr_15016_15052[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 15))
{var state_14993__$1 = state_14993;var statearr_15017_15053 = state_14993__$1;(statearr_15017_15053[2] = null);
(statearr_15017_15053[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 16))
{var inst_14968 = (state_14993[2]);var inst_14969 = calc_state.call(null);var inst_14942 = inst_14969;var state_14993__$1 = (function (){var statearr_15018 = state_14993;(statearr_15018[18] = inst_14968);
(statearr_15018[9] = inst_14942);
return statearr_15018;
})();var statearr_15019_15054 = state_14993__$1;(statearr_15019_15054[2] = null);
(statearr_15019_15054[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 17))
{var inst_14972 = (state_14993[17]);var state_14993__$1 = state_14993;var statearr_15020_15055 = state_14993__$1;(statearr_15020_15055[2] = inst_14972);
(statearr_15020_15055[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 18))
{var inst_14958 = (state_14993[16]);var inst_14953 = (state_14993[13]);var inst_14952 = (state_14993[14]);var inst_14975 = cljs.core.empty_QMARK_.call(null,inst_14953);var inst_14976 = inst_14952.call(null,inst_14958);var inst_14977 = cljs.core.not.call(null,inst_14976);var inst_14978 = (inst_14975) && (inst_14977);var state_14993__$1 = state_14993;var statearr_15021_15056 = state_14993__$1;(statearr_15021_15056[2] = inst_14978);
(statearr_15021_15056[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 19))
{var inst_14980 = (state_14993[2]);var state_14993__$1 = state_14993;if(cljs.core.truth_(inst_14980))
{var statearr_15022_15057 = state_14993__$1;(statearr_15022_15057[1] = 20);
} else
{var statearr_15023_15058 = state_14993__$1;(statearr_15023_15058[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 20))
{var inst_14957 = (state_14993[15]);var state_14993__$1 = state_14993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14993__$1,23,out,inst_14957);
} else
{if((state_val_14994 === 21))
{var state_14993__$1 = state_14993;var statearr_15024_15059 = state_14993__$1;(statearr_15024_15059[2] = null);
(statearr_15024_15059[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 22))
{var inst_14950 = (state_14993[12]);var inst_14986 = (state_14993[2]);var inst_14942 = inst_14950;var state_14993__$1 = (function (){var statearr_15025 = state_14993;(statearr_15025[19] = inst_14986);
(statearr_15025[9] = inst_14942);
return statearr_15025;
})();var statearr_15026_15060 = state_14993__$1;(statearr_15026_15060[2] = null);
(statearr_15026_15060[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14994 === 23))
{var inst_14983 = (state_14993[2]);var state_14993__$1 = state_14993;var statearr_15027_15061 = state_14993__$1;(statearr_15027_15061[2] = inst_14983);
(statearr_15027_15061[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15031[0] = state_machine__5507__auto__);
(statearr_15031[1] = 1);
return statearr_15031;
});
var state_machine__5507__auto____1 = (function (state_14993){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14993);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15032){if((e15032 instanceof Object))
{var ex__5510__auto__ = e15032;var statearr_15033_15062 = state_14993;(statearr_15033_15062[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15063 = state_14993;
state_14993 = G__15063;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14993){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15034 = f__5522__auto__.call(null);(statearr_15034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15035);
return statearr_15034;
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
cljs.core.async.Pub = (function (){var obj15065 = {};return obj15065;
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
return (function (p1__15066_SHARP_){if(cljs.core.truth_(p1__15066_SHARP_.call(null,topic)))
{return p1__15066_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15066_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15191 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15191 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15192){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15192 = meta15192;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15191.cljs$lang$type = true;
cljs.core.async.t15191.cljs$lang$ctorStr = "cljs.core.async/t15191";
cljs.core.async.t15191.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15191");
});})(mults,ensure_mult))
;
cljs.core.async.t15191.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15191.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15191.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15191.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15191.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15191.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15191.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15193){var self__ = this;
var _15193__$1 = this;return self__.meta15192;
});})(mults,ensure_mult))
;
cljs.core.async.t15191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15193,meta15192__$1){var self__ = this;
var _15193__$1 = this;return (new cljs.core.async.t15191(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15192__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15191 = ((function (mults,ensure_mult){
return (function __GT_t15191(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15192){return (new cljs.core.async.t15191(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15192));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15191(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15315 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15267){var state_val_15268 = (state_15267[1]);if((state_val_15268 === 1))
{var state_15267__$1 = state_15267;var statearr_15269_15316 = state_15267__$1;(statearr_15269_15316[2] = null);
(statearr_15269_15316[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 2))
{var state_15267__$1 = state_15267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15267__$1,4,ch);
} else
{if((state_val_15268 === 3))
{var inst_15265 = (state_15267[2]);var state_15267__$1 = state_15267;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15267__$1,inst_15265);
} else
{if((state_val_15268 === 4))
{var inst_15196 = (state_15267[7]);var inst_15196__$1 = (state_15267[2]);var inst_15197 = (inst_15196__$1 == null);var state_15267__$1 = (function (){var statearr_15270 = state_15267;(statearr_15270[7] = inst_15196__$1);
return statearr_15270;
})();if(cljs.core.truth_(inst_15197))
{var statearr_15271_15317 = state_15267__$1;(statearr_15271_15317[1] = 5);
} else
{var statearr_15272_15318 = state_15267__$1;(statearr_15272_15318[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 5))
{var inst_15203 = cljs.core.deref.call(null,mults);var inst_15204 = cljs.core.vals.call(null,inst_15203);var inst_15205 = cljs.core.seq.call(null,inst_15204);var inst_15206 = inst_15205;var inst_15207 = null;var inst_15208 = 0;var inst_15209 = 0;var state_15267__$1 = (function (){var statearr_15273 = state_15267;(statearr_15273[8] = inst_15207);
(statearr_15273[9] = inst_15208);
(statearr_15273[10] = inst_15209);
(statearr_15273[11] = inst_15206);
return statearr_15273;
})();var statearr_15274_15319 = state_15267__$1;(statearr_15274_15319[2] = null);
(statearr_15274_15319[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 6))
{var inst_15196 = (state_15267[7]);var inst_15246 = (state_15267[12]);var inst_15244 = (state_15267[13]);var inst_15244__$1 = topic_fn.call(null,inst_15196);var inst_15245 = cljs.core.deref.call(null,mults);var inst_15246__$1 = cljs.core.get.call(null,inst_15245,inst_15244__$1);var state_15267__$1 = (function (){var statearr_15275 = state_15267;(statearr_15275[12] = inst_15246__$1);
(statearr_15275[13] = inst_15244__$1);
return statearr_15275;
})();if(cljs.core.truth_(inst_15246__$1))
{var statearr_15276_15320 = state_15267__$1;(statearr_15276_15320[1] = 19);
} else
{var statearr_15277_15321 = state_15267__$1;(statearr_15277_15321[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 7))
{var inst_15263 = (state_15267[2]);var state_15267__$1 = state_15267;var statearr_15278_15322 = state_15267__$1;(statearr_15278_15322[2] = inst_15263);
(statearr_15278_15322[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 8))
{var inst_15208 = (state_15267[9]);var inst_15209 = (state_15267[10]);var inst_15211 = (inst_15209 < inst_15208);var inst_15212 = inst_15211;var state_15267__$1 = state_15267;if(cljs.core.truth_(inst_15212))
{var statearr_15282_15323 = state_15267__$1;(statearr_15282_15323[1] = 10);
} else
{var statearr_15283_15324 = state_15267__$1;(statearr_15283_15324[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 9))
{var inst_15242 = (state_15267[2]);var state_15267__$1 = state_15267;var statearr_15284_15325 = state_15267__$1;(statearr_15284_15325[2] = inst_15242);
(statearr_15284_15325[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 10))
{var inst_15207 = (state_15267[8]);var inst_15208 = (state_15267[9]);var inst_15209 = (state_15267[10]);var inst_15206 = (state_15267[11]);var inst_15214 = cljs.core._nth.call(null,inst_15207,inst_15209);var inst_15215 = cljs.core.async.muxch_STAR_.call(null,inst_15214);var inst_15216 = cljs.core.async.close_BANG_.call(null,inst_15215);var inst_15217 = (inst_15209 + 1);var tmp15279 = inst_15207;var tmp15280 = inst_15208;var tmp15281 = inst_15206;var inst_15206__$1 = tmp15281;var inst_15207__$1 = tmp15279;var inst_15208__$1 = tmp15280;var inst_15209__$1 = inst_15217;var state_15267__$1 = (function (){var statearr_15285 = state_15267;(statearr_15285[8] = inst_15207__$1);
(statearr_15285[14] = inst_15216);
(statearr_15285[9] = inst_15208__$1);
(statearr_15285[10] = inst_15209__$1);
(statearr_15285[11] = inst_15206__$1);
return statearr_15285;
})();var statearr_15286_15326 = state_15267__$1;(statearr_15286_15326[2] = null);
(statearr_15286_15326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 11))
{var inst_15220 = (state_15267[15]);var inst_15206 = (state_15267[11]);var inst_15220__$1 = cljs.core.seq.call(null,inst_15206);var state_15267__$1 = (function (){var statearr_15287 = state_15267;(statearr_15287[15] = inst_15220__$1);
return statearr_15287;
})();if(inst_15220__$1)
{var statearr_15288_15327 = state_15267__$1;(statearr_15288_15327[1] = 13);
} else
{var statearr_15289_15328 = state_15267__$1;(statearr_15289_15328[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 12))
{var inst_15240 = (state_15267[2]);var state_15267__$1 = state_15267;var statearr_15290_15329 = state_15267__$1;(statearr_15290_15329[2] = inst_15240);
(statearr_15290_15329[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 13))
{var inst_15220 = (state_15267[15]);var inst_15222 = cljs.core.chunked_seq_QMARK_.call(null,inst_15220);var state_15267__$1 = state_15267;if(inst_15222)
{var statearr_15291_15330 = state_15267__$1;(statearr_15291_15330[1] = 16);
} else
{var statearr_15292_15331 = state_15267__$1;(statearr_15292_15331[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 14))
{var state_15267__$1 = state_15267;var statearr_15293_15332 = state_15267__$1;(statearr_15293_15332[2] = null);
(statearr_15293_15332[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 15))
{var inst_15238 = (state_15267[2]);var state_15267__$1 = state_15267;var statearr_15294_15333 = state_15267__$1;(statearr_15294_15333[2] = inst_15238);
(statearr_15294_15333[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 16))
{var inst_15220 = (state_15267[15]);var inst_15224 = cljs.core.chunk_first.call(null,inst_15220);var inst_15225 = cljs.core.chunk_rest.call(null,inst_15220);var inst_15226 = cljs.core.count.call(null,inst_15224);var inst_15206 = inst_15225;var inst_15207 = inst_15224;var inst_15208 = inst_15226;var inst_15209 = 0;var state_15267__$1 = (function (){var statearr_15295 = state_15267;(statearr_15295[8] = inst_15207);
(statearr_15295[9] = inst_15208);
(statearr_15295[10] = inst_15209);
(statearr_15295[11] = inst_15206);
return statearr_15295;
})();var statearr_15296_15334 = state_15267__$1;(statearr_15296_15334[2] = null);
(statearr_15296_15334[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 17))
{var inst_15220 = (state_15267[15]);var inst_15229 = cljs.core.first.call(null,inst_15220);var inst_15230 = cljs.core.async.muxch_STAR_.call(null,inst_15229);var inst_15231 = cljs.core.async.close_BANG_.call(null,inst_15230);var inst_15232 = cljs.core.next.call(null,inst_15220);var inst_15206 = inst_15232;var inst_15207 = null;var inst_15208 = 0;var inst_15209 = 0;var state_15267__$1 = (function (){var statearr_15297 = state_15267;(statearr_15297[8] = inst_15207);
(statearr_15297[9] = inst_15208);
(statearr_15297[10] = inst_15209);
(statearr_15297[11] = inst_15206);
(statearr_15297[16] = inst_15231);
return statearr_15297;
})();var statearr_15298_15335 = state_15267__$1;(statearr_15298_15335[2] = null);
(statearr_15298_15335[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 18))
{var inst_15235 = (state_15267[2]);var state_15267__$1 = state_15267;var statearr_15299_15336 = state_15267__$1;(statearr_15299_15336[2] = inst_15235);
(statearr_15299_15336[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 19))
{var state_15267__$1 = state_15267;var statearr_15300_15337 = state_15267__$1;(statearr_15300_15337[2] = null);
(statearr_15300_15337[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 20))
{var state_15267__$1 = state_15267;var statearr_15301_15338 = state_15267__$1;(statearr_15301_15338[2] = null);
(statearr_15301_15338[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 21))
{var inst_15260 = (state_15267[2]);var state_15267__$1 = (function (){var statearr_15302 = state_15267;(statearr_15302[17] = inst_15260);
return statearr_15302;
})();var statearr_15303_15339 = state_15267__$1;(statearr_15303_15339[2] = null);
(statearr_15303_15339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 22))
{var inst_15257 = (state_15267[2]);var state_15267__$1 = state_15267;var statearr_15304_15340 = state_15267__$1;(statearr_15304_15340[2] = inst_15257);
(statearr_15304_15340[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 23))
{var inst_15244 = (state_15267[13]);var inst_15248 = (state_15267[2]);var inst_15249 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15244);var state_15267__$1 = (function (){var statearr_15305 = state_15267;(statearr_15305[18] = inst_15248);
return statearr_15305;
})();var statearr_15306_15341 = state_15267__$1;(statearr_15306_15341[2] = inst_15249);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15267__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15268 === 24))
{var inst_15196 = (state_15267[7]);var inst_15246 = (state_15267[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15267,23,Object,null,22);var inst_15253 = cljs.core.async.muxch_STAR_.call(null,inst_15246);var state_15267__$1 = state_15267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15267__$1,25,inst_15253,inst_15196);
} else
{if((state_val_15268 === 25))
{var inst_15255 = (state_15267[2]);var state_15267__$1 = state_15267;var statearr_15307_15342 = state_15267__$1;(statearr_15307_15342[2] = inst_15255);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15267__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15311 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15311[0] = state_machine__5507__auto__);
(statearr_15311[1] = 1);
return statearr_15311;
});
var state_machine__5507__auto____1 = (function (state_15267){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15267);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15312){if((e15312 instanceof Object))
{var ex__5510__auto__ = e15312;var statearr_15313_15343 = state_15267;(statearr_15313_15343[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15267);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15312;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15344 = state_15267;
state_15267 = G__15344;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15267){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15314 = f__5522__auto__.call(null);(statearr_15314[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15315);
return statearr_15314;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15481 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15451){var state_val_15452 = (state_15451[1]);if((state_val_15452 === 1))
{var state_15451__$1 = state_15451;var statearr_15453_15482 = state_15451__$1;(statearr_15453_15482[2] = null);
(statearr_15453_15482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 2))
{var inst_15414 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15415 = 0;var state_15451__$1 = (function (){var statearr_15454 = state_15451;(statearr_15454[7] = inst_15415);
(statearr_15454[8] = inst_15414);
return statearr_15454;
})();var statearr_15455_15483 = state_15451__$1;(statearr_15455_15483[2] = null);
(statearr_15455_15483[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 3))
{var inst_15449 = (state_15451[2]);var state_15451__$1 = state_15451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15451__$1,inst_15449);
} else
{if((state_val_15452 === 4))
{var inst_15415 = (state_15451[7]);var inst_15417 = (inst_15415 < cnt);var state_15451__$1 = state_15451;if(cljs.core.truth_(inst_15417))
{var statearr_15456_15484 = state_15451__$1;(statearr_15456_15484[1] = 6);
} else
{var statearr_15457_15485 = state_15451__$1;(statearr_15457_15485[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 5))
{var inst_15435 = (state_15451[2]);var state_15451__$1 = (function (){var statearr_15458 = state_15451;(statearr_15458[9] = inst_15435);
return statearr_15458;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15451__$1,12,dchan);
} else
{if((state_val_15452 === 6))
{var state_15451__$1 = state_15451;var statearr_15459_15486 = state_15451__$1;(statearr_15459_15486[2] = null);
(statearr_15459_15486[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 7))
{var state_15451__$1 = state_15451;var statearr_15460_15487 = state_15451__$1;(statearr_15460_15487[2] = null);
(statearr_15460_15487[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 8))
{var inst_15433 = (state_15451[2]);var state_15451__$1 = state_15451;var statearr_15461_15488 = state_15451__$1;(statearr_15461_15488[2] = inst_15433);
(statearr_15461_15488[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 9))
{var inst_15415 = (state_15451[7]);var inst_15428 = (state_15451[2]);var inst_15429 = (inst_15415 + 1);var inst_15415__$1 = inst_15429;var state_15451__$1 = (function (){var statearr_15462 = state_15451;(statearr_15462[7] = inst_15415__$1);
(statearr_15462[10] = inst_15428);
return statearr_15462;
})();var statearr_15463_15489 = state_15451__$1;(statearr_15463_15489[2] = null);
(statearr_15463_15489[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 10))
{var inst_15419 = (state_15451[2]);var inst_15420 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15451__$1 = (function (){var statearr_15464 = state_15451;(statearr_15464[11] = inst_15419);
return statearr_15464;
})();var statearr_15465_15490 = state_15451__$1;(statearr_15465_15490[2] = inst_15420);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15451__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 11))
{var inst_15415 = (state_15451[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15451,10,Object,null,9);var inst_15424 = chs__$1.call(null,inst_15415);var inst_15425 = done.call(null,inst_15415);var inst_15426 = cljs.core.async.take_BANG_.call(null,inst_15424,inst_15425);var state_15451__$1 = state_15451;var statearr_15466_15491 = state_15451__$1;(statearr_15466_15491[2] = inst_15426);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15451__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 12))
{var inst_15437 = (state_15451[12]);var inst_15437__$1 = (state_15451[2]);var inst_15438 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15437__$1);var state_15451__$1 = (function (){var statearr_15467 = state_15451;(statearr_15467[12] = inst_15437__$1);
return statearr_15467;
})();if(cljs.core.truth_(inst_15438))
{var statearr_15468_15492 = state_15451__$1;(statearr_15468_15492[1] = 13);
} else
{var statearr_15469_15493 = state_15451__$1;(statearr_15469_15493[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 13))
{var inst_15440 = cljs.core.async.close_BANG_.call(null,out);var state_15451__$1 = state_15451;var statearr_15470_15494 = state_15451__$1;(statearr_15470_15494[2] = inst_15440);
(statearr_15470_15494[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 14))
{var inst_15437 = (state_15451[12]);var inst_15442 = cljs.core.apply.call(null,f,inst_15437);var state_15451__$1 = state_15451;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15451__$1,16,out,inst_15442);
} else
{if((state_val_15452 === 15))
{var inst_15447 = (state_15451[2]);var state_15451__$1 = state_15451;var statearr_15471_15495 = state_15451__$1;(statearr_15471_15495[2] = inst_15447);
(statearr_15471_15495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 16))
{var inst_15444 = (state_15451[2]);var state_15451__$1 = (function (){var statearr_15472 = state_15451;(statearr_15472[13] = inst_15444);
return statearr_15472;
})();var statearr_15473_15496 = state_15451__$1;(statearr_15473_15496[2] = null);
(statearr_15473_15496[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15477[0] = state_machine__5507__auto__);
(statearr_15477[1] = 1);
return statearr_15477;
});
var state_machine__5507__auto____1 = (function (state_15451){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15451);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15478){if((e15478 instanceof Object))
{var ex__5510__auto__ = e15478;var statearr_15479_15497 = state_15451;(statearr_15479_15497[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15498 = state_15451;
state_15451 = G__15498;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15451){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15480 = f__5522__auto__.call(null);(statearr_15480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15481);
return statearr_15480;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15606 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15582){var state_val_15583 = (state_15582[1]);if((state_val_15583 === 1))
{var inst_15553 = cljs.core.vec.call(null,chs);var inst_15554 = inst_15553;var state_15582__$1 = (function (){var statearr_15584 = state_15582;(statearr_15584[7] = inst_15554);
return statearr_15584;
})();var statearr_15585_15607 = state_15582__$1;(statearr_15585_15607[2] = null);
(statearr_15585_15607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15583 === 2))
{var inst_15554 = (state_15582[7]);var inst_15556 = cljs.core.count.call(null,inst_15554);var inst_15557 = (inst_15556 > 0);var state_15582__$1 = state_15582;if(cljs.core.truth_(inst_15557))
{var statearr_15586_15608 = state_15582__$1;(statearr_15586_15608[1] = 4);
} else
{var statearr_15587_15609 = state_15582__$1;(statearr_15587_15609[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15583 === 3))
{var inst_15580 = (state_15582[2]);var state_15582__$1 = state_15582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15582__$1,inst_15580);
} else
{if((state_val_15583 === 4))
{var inst_15554 = (state_15582[7]);var state_15582__$1 = state_15582;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15582__$1,7,inst_15554);
} else
{if((state_val_15583 === 5))
{var inst_15576 = cljs.core.async.close_BANG_.call(null,out);var state_15582__$1 = state_15582;var statearr_15588_15610 = state_15582__$1;(statearr_15588_15610[2] = inst_15576);
(statearr_15588_15610[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15583 === 6))
{var inst_15578 = (state_15582[2]);var state_15582__$1 = state_15582;var statearr_15589_15611 = state_15582__$1;(statearr_15589_15611[2] = inst_15578);
(statearr_15589_15611[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15583 === 7))
{var inst_15562 = (state_15582[8]);var inst_15561 = (state_15582[9]);var inst_15561__$1 = (state_15582[2]);var inst_15562__$1 = cljs.core.nth.call(null,inst_15561__$1,0,null);var inst_15563 = cljs.core.nth.call(null,inst_15561__$1,1,null);var inst_15564 = (inst_15562__$1 == null);var state_15582__$1 = (function (){var statearr_15590 = state_15582;(statearr_15590[8] = inst_15562__$1);
(statearr_15590[10] = inst_15563);
(statearr_15590[9] = inst_15561__$1);
return statearr_15590;
})();if(cljs.core.truth_(inst_15564))
{var statearr_15591_15612 = state_15582__$1;(statearr_15591_15612[1] = 8);
} else
{var statearr_15592_15613 = state_15582__$1;(statearr_15592_15613[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15583 === 8))
{var inst_15554 = (state_15582[7]);var inst_15562 = (state_15582[8]);var inst_15563 = (state_15582[10]);var inst_15561 = (state_15582[9]);var inst_15566 = (function (){var c = inst_15563;var v = inst_15562;var vec__15559 = inst_15561;var cs = inst_15554;return ((function (c,v,vec__15559,cs,inst_15554,inst_15562,inst_15563,inst_15561,state_val_15583){
return (function (p1__15499_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15499_SHARP_);
});
;})(c,v,vec__15559,cs,inst_15554,inst_15562,inst_15563,inst_15561,state_val_15583))
})();var inst_15567 = cljs.core.filterv.call(null,inst_15566,inst_15554);var inst_15554__$1 = inst_15567;var state_15582__$1 = (function (){var statearr_15593 = state_15582;(statearr_15593[7] = inst_15554__$1);
return statearr_15593;
})();var statearr_15594_15614 = state_15582__$1;(statearr_15594_15614[2] = null);
(statearr_15594_15614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15583 === 9))
{var inst_15562 = (state_15582[8]);var state_15582__$1 = state_15582;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15582__$1,11,out,inst_15562);
} else
{if((state_val_15583 === 10))
{var inst_15574 = (state_15582[2]);var state_15582__$1 = state_15582;var statearr_15596_15615 = state_15582__$1;(statearr_15596_15615[2] = inst_15574);
(statearr_15596_15615[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15583 === 11))
{var inst_15554 = (state_15582[7]);var inst_15571 = (state_15582[2]);var tmp15595 = inst_15554;var inst_15554__$1 = tmp15595;var state_15582__$1 = (function (){var statearr_15597 = state_15582;(statearr_15597[11] = inst_15571);
(statearr_15597[7] = inst_15554__$1);
return statearr_15597;
})();var statearr_15598_15616 = state_15582__$1;(statearr_15598_15616[2] = null);
(statearr_15598_15616[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15602 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15602[0] = state_machine__5507__auto__);
(statearr_15602[1] = 1);
return statearr_15602;
});
var state_machine__5507__auto____1 = (function (state_15582){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15582);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15603){if((e15603 instanceof Object))
{var ex__5510__auto__ = e15603;var statearr_15604_15617 = state_15582;(statearr_15604_15617[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15603;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15618 = state_15582;
state_15582 = G__15618;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15582){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15605 = f__5522__auto__.call(null);(statearr_15605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15606);
return statearr_15605;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15711 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15688){var state_val_15689 = (state_15688[1]);if((state_val_15689 === 1))
{var inst_15665 = 0;var state_15688__$1 = (function (){var statearr_15690 = state_15688;(statearr_15690[7] = inst_15665);
return statearr_15690;
})();var statearr_15691_15712 = state_15688__$1;(statearr_15691_15712[2] = null);
(statearr_15691_15712[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 2))
{var inst_15665 = (state_15688[7]);var inst_15667 = (inst_15665 < n);var state_15688__$1 = state_15688;if(cljs.core.truth_(inst_15667))
{var statearr_15692_15713 = state_15688__$1;(statearr_15692_15713[1] = 4);
} else
{var statearr_15693_15714 = state_15688__$1;(statearr_15693_15714[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 3))
{var inst_15685 = (state_15688[2]);var inst_15686 = cljs.core.async.close_BANG_.call(null,out);var state_15688__$1 = (function (){var statearr_15694 = state_15688;(statearr_15694[8] = inst_15685);
return statearr_15694;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15688__$1,inst_15686);
} else
{if((state_val_15689 === 4))
{var state_15688__$1 = state_15688;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15688__$1,7,ch);
} else
{if((state_val_15689 === 5))
{var state_15688__$1 = state_15688;var statearr_15695_15715 = state_15688__$1;(statearr_15695_15715[2] = null);
(statearr_15695_15715[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 6))
{var inst_15683 = (state_15688[2]);var state_15688__$1 = state_15688;var statearr_15696_15716 = state_15688__$1;(statearr_15696_15716[2] = inst_15683);
(statearr_15696_15716[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 7))
{var inst_15670 = (state_15688[9]);var inst_15670__$1 = (state_15688[2]);var inst_15671 = (inst_15670__$1 == null);var inst_15672 = cljs.core.not.call(null,inst_15671);var state_15688__$1 = (function (){var statearr_15697 = state_15688;(statearr_15697[9] = inst_15670__$1);
return statearr_15697;
})();if(inst_15672)
{var statearr_15698_15717 = state_15688__$1;(statearr_15698_15717[1] = 8);
} else
{var statearr_15699_15718 = state_15688__$1;(statearr_15699_15718[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 8))
{var inst_15670 = (state_15688[9]);var state_15688__$1 = state_15688;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15688__$1,11,out,inst_15670);
} else
{if((state_val_15689 === 9))
{var state_15688__$1 = state_15688;var statearr_15700_15719 = state_15688__$1;(statearr_15700_15719[2] = null);
(statearr_15700_15719[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 10))
{var inst_15680 = (state_15688[2]);var state_15688__$1 = state_15688;var statearr_15701_15720 = state_15688__$1;(statearr_15701_15720[2] = inst_15680);
(statearr_15701_15720[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15689 === 11))
{var inst_15665 = (state_15688[7]);var inst_15675 = (state_15688[2]);var inst_15676 = (inst_15665 + 1);var inst_15665__$1 = inst_15676;var state_15688__$1 = (function (){var statearr_15702 = state_15688;(statearr_15702[7] = inst_15665__$1);
(statearr_15702[10] = inst_15675);
return statearr_15702;
})();var statearr_15703_15721 = state_15688__$1;(statearr_15703_15721[2] = null);
(statearr_15703_15721[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15707 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15707[0] = state_machine__5507__auto__);
(statearr_15707[1] = 1);
return statearr_15707;
});
var state_machine__5507__auto____1 = (function (state_15688){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15688);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15708){if((e15708 instanceof Object))
{var ex__5510__auto__ = e15708;var statearr_15709_15722 = state_15688;(statearr_15709_15722[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15688);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15708;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15723 = state_15688;
state_15688 = G__15723;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15688){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15688);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15710 = f__5522__auto__.call(null);(statearr_15710[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15711);
return statearr_15710;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15820 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15795){var state_val_15796 = (state_15795[1]);if((state_val_15796 === 1))
{var inst_15772 = null;var state_15795__$1 = (function (){var statearr_15797 = state_15795;(statearr_15797[7] = inst_15772);
return statearr_15797;
})();var statearr_15798_15821 = state_15795__$1;(statearr_15798_15821[2] = null);
(statearr_15798_15821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15796 === 2))
{var state_15795__$1 = state_15795;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15795__$1,4,ch);
} else
{if((state_val_15796 === 3))
{var inst_15792 = (state_15795[2]);var inst_15793 = cljs.core.async.close_BANG_.call(null,out);var state_15795__$1 = (function (){var statearr_15799 = state_15795;(statearr_15799[8] = inst_15792);
return statearr_15799;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15795__$1,inst_15793);
} else
{if((state_val_15796 === 4))
{var inst_15775 = (state_15795[9]);var inst_15775__$1 = (state_15795[2]);var inst_15776 = (inst_15775__$1 == null);var inst_15777 = cljs.core.not.call(null,inst_15776);var state_15795__$1 = (function (){var statearr_15800 = state_15795;(statearr_15800[9] = inst_15775__$1);
return statearr_15800;
})();if(inst_15777)
{var statearr_15801_15822 = state_15795__$1;(statearr_15801_15822[1] = 5);
} else
{var statearr_15802_15823 = state_15795__$1;(statearr_15802_15823[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15796 === 5))
{var inst_15772 = (state_15795[7]);var inst_15775 = (state_15795[9]);var inst_15779 = cljs.core._EQ_.call(null,inst_15775,inst_15772);var state_15795__$1 = state_15795;if(inst_15779)
{var statearr_15803_15824 = state_15795__$1;(statearr_15803_15824[1] = 8);
} else
{var statearr_15804_15825 = state_15795__$1;(statearr_15804_15825[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15796 === 6))
{var state_15795__$1 = state_15795;var statearr_15806_15826 = state_15795__$1;(statearr_15806_15826[2] = null);
(statearr_15806_15826[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15796 === 7))
{var inst_15790 = (state_15795[2]);var state_15795__$1 = state_15795;var statearr_15807_15827 = state_15795__$1;(statearr_15807_15827[2] = inst_15790);
(statearr_15807_15827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15796 === 8))
{var inst_15772 = (state_15795[7]);var tmp15805 = inst_15772;var inst_15772__$1 = tmp15805;var state_15795__$1 = (function (){var statearr_15808 = state_15795;(statearr_15808[7] = inst_15772__$1);
return statearr_15808;
})();var statearr_15809_15828 = state_15795__$1;(statearr_15809_15828[2] = null);
(statearr_15809_15828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15796 === 9))
{var inst_15775 = (state_15795[9]);var state_15795__$1 = state_15795;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15795__$1,11,out,inst_15775);
} else
{if((state_val_15796 === 10))
{var inst_15787 = (state_15795[2]);var state_15795__$1 = state_15795;var statearr_15810_15829 = state_15795__$1;(statearr_15810_15829[2] = inst_15787);
(statearr_15810_15829[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15796 === 11))
{var inst_15775 = (state_15795[9]);var inst_15784 = (state_15795[2]);var inst_15772 = inst_15775;var state_15795__$1 = (function (){var statearr_15811 = state_15795;(statearr_15811[7] = inst_15772);
(statearr_15811[10] = inst_15784);
return statearr_15811;
})();var statearr_15812_15830 = state_15795__$1;(statearr_15812_15830[2] = null);
(statearr_15812_15830[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15816 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15816[0] = state_machine__5507__auto__);
(statearr_15816[1] = 1);
return statearr_15816;
});
var state_machine__5507__auto____1 = (function (state_15795){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15795);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15817){if((e15817 instanceof Object))
{var ex__5510__auto__ = e15817;var statearr_15818_15831 = state_15795;(statearr_15818_15831[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15795);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15817;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15832 = state_15795;
state_15795 = G__15832;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15795){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15819 = f__5522__auto__.call(null);(statearr_15819[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15820);
return statearr_15819;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15967 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15937){var state_val_15938 = (state_15937[1]);if((state_val_15938 === 1))
{var inst_15900 = (new Array(n));var inst_15901 = inst_15900;var inst_15902 = 0;var state_15937__$1 = (function (){var statearr_15939 = state_15937;(statearr_15939[7] = inst_15901);
(statearr_15939[8] = inst_15902);
return statearr_15939;
})();var statearr_15940_15968 = state_15937__$1;(statearr_15940_15968[2] = null);
(statearr_15940_15968[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 2))
{var state_15937__$1 = state_15937;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15937__$1,4,ch);
} else
{if((state_val_15938 === 3))
{var inst_15935 = (state_15937[2]);var state_15937__$1 = state_15937;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15937__$1,inst_15935);
} else
{if((state_val_15938 === 4))
{var inst_15905 = (state_15937[9]);var inst_15905__$1 = (state_15937[2]);var inst_15906 = (inst_15905__$1 == null);var inst_15907 = cljs.core.not.call(null,inst_15906);var state_15937__$1 = (function (){var statearr_15941 = state_15937;(statearr_15941[9] = inst_15905__$1);
return statearr_15941;
})();if(inst_15907)
{var statearr_15942_15969 = state_15937__$1;(statearr_15942_15969[1] = 5);
} else
{var statearr_15943_15970 = state_15937__$1;(statearr_15943_15970[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 5))
{var inst_15905 = (state_15937[9]);var inst_15910 = (state_15937[10]);var inst_15901 = (state_15937[7]);var inst_15902 = (state_15937[8]);var inst_15909 = (inst_15901[inst_15902] = inst_15905);var inst_15910__$1 = (inst_15902 + 1);var inst_15911 = (inst_15910__$1 < n);var state_15937__$1 = (function (){var statearr_15944 = state_15937;(statearr_15944[11] = inst_15909);
(statearr_15944[10] = inst_15910__$1);
return statearr_15944;
})();if(cljs.core.truth_(inst_15911))
{var statearr_15945_15971 = state_15937__$1;(statearr_15945_15971[1] = 8);
} else
{var statearr_15946_15972 = state_15937__$1;(statearr_15946_15972[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 6))
{var inst_15902 = (state_15937[8]);var inst_15923 = (inst_15902 > 0);var state_15937__$1 = state_15937;if(cljs.core.truth_(inst_15923))
{var statearr_15948_15973 = state_15937__$1;(statearr_15948_15973[1] = 12);
} else
{var statearr_15949_15974 = state_15937__$1;(statearr_15949_15974[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 7))
{var inst_15933 = (state_15937[2]);var state_15937__$1 = state_15937;var statearr_15950_15975 = state_15937__$1;(statearr_15950_15975[2] = inst_15933);
(statearr_15950_15975[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 8))
{var inst_15910 = (state_15937[10]);var inst_15901 = (state_15937[7]);var tmp15947 = inst_15901;var inst_15901__$1 = tmp15947;var inst_15902 = inst_15910;var state_15937__$1 = (function (){var statearr_15951 = state_15937;(statearr_15951[7] = inst_15901__$1);
(statearr_15951[8] = inst_15902);
return statearr_15951;
})();var statearr_15952_15976 = state_15937__$1;(statearr_15952_15976[2] = null);
(statearr_15952_15976[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 9))
{var inst_15901 = (state_15937[7]);var inst_15915 = cljs.core.vec.call(null,inst_15901);var state_15937__$1 = state_15937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15937__$1,11,out,inst_15915);
} else
{if((state_val_15938 === 10))
{var inst_15921 = (state_15937[2]);var state_15937__$1 = state_15937;var statearr_15953_15977 = state_15937__$1;(statearr_15953_15977[2] = inst_15921);
(statearr_15953_15977[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 11))
{var inst_15917 = (state_15937[2]);var inst_15918 = (new Array(n));var inst_15901 = inst_15918;var inst_15902 = 0;var state_15937__$1 = (function (){var statearr_15954 = state_15937;(statearr_15954[12] = inst_15917);
(statearr_15954[7] = inst_15901);
(statearr_15954[8] = inst_15902);
return statearr_15954;
})();var statearr_15955_15978 = state_15937__$1;(statearr_15955_15978[2] = null);
(statearr_15955_15978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 12))
{var inst_15901 = (state_15937[7]);var inst_15925 = cljs.core.vec.call(null,inst_15901);var state_15937__$1 = state_15937;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15937__$1,15,out,inst_15925);
} else
{if((state_val_15938 === 13))
{var state_15937__$1 = state_15937;var statearr_15956_15979 = state_15937__$1;(statearr_15956_15979[2] = null);
(statearr_15956_15979[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 14))
{var inst_15930 = (state_15937[2]);var inst_15931 = cljs.core.async.close_BANG_.call(null,out);var state_15937__$1 = (function (){var statearr_15957 = state_15937;(statearr_15957[13] = inst_15930);
return statearr_15957;
})();var statearr_15958_15980 = state_15937__$1;(statearr_15958_15980[2] = inst_15931);
(statearr_15958_15980[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15938 === 15))
{var inst_15927 = (state_15937[2]);var state_15937__$1 = state_15937;var statearr_15959_15981 = state_15937__$1;(statearr_15959_15981[2] = inst_15927);
(statearr_15959_15981[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15963[0] = state_machine__5507__auto__);
(statearr_15963[1] = 1);
return statearr_15963;
});
var state_machine__5507__auto____1 = (function (state_15937){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15937);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15964){if((e15964 instanceof Object))
{var ex__5510__auto__ = e15964;var statearr_15965_15982 = state_15937;(statearr_15965_15982[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15937);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15983 = state_15937;
state_15937 = G__15983;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15937){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15966 = f__5522__auto__.call(null);(statearr_15966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15967);
return statearr_15966;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16126 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16096){var state_val_16097 = (state_16096[1]);if((state_val_16097 === 1))
{var inst_16055 = [];var inst_16056 = inst_16055;var inst_16057 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16096__$1 = (function (){var statearr_16098 = state_16096;(statearr_16098[7] = inst_16057);
(statearr_16098[8] = inst_16056);
return statearr_16098;
})();var statearr_16099_16127 = state_16096__$1;(statearr_16099_16127[2] = null);
(statearr_16099_16127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 2))
{var state_16096__$1 = state_16096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16096__$1,4,ch);
} else
{if((state_val_16097 === 3))
{var inst_16094 = (state_16096[2]);var state_16096__$1 = state_16096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16096__$1,inst_16094);
} else
{if((state_val_16097 === 4))
{var inst_16060 = (state_16096[9]);var inst_16060__$1 = (state_16096[2]);var inst_16061 = (inst_16060__$1 == null);var inst_16062 = cljs.core.not.call(null,inst_16061);var state_16096__$1 = (function (){var statearr_16100 = state_16096;(statearr_16100[9] = inst_16060__$1);
return statearr_16100;
})();if(inst_16062)
{var statearr_16101_16128 = state_16096__$1;(statearr_16101_16128[1] = 5);
} else
{var statearr_16102_16129 = state_16096__$1;(statearr_16102_16129[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 5))
{var inst_16064 = (state_16096[10]);var inst_16060 = (state_16096[9]);var inst_16057 = (state_16096[7]);var inst_16064__$1 = f.call(null,inst_16060);var inst_16065 = cljs.core._EQ_.call(null,inst_16064__$1,inst_16057);var inst_16066 = cljs.core.keyword_identical_QMARK_.call(null,inst_16057,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16067 = (inst_16065) || (inst_16066);var state_16096__$1 = (function (){var statearr_16103 = state_16096;(statearr_16103[10] = inst_16064__$1);
return statearr_16103;
})();if(cljs.core.truth_(inst_16067))
{var statearr_16104_16130 = state_16096__$1;(statearr_16104_16130[1] = 8);
} else
{var statearr_16105_16131 = state_16096__$1;(statearr_16105_16131[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 6))
{var inst_16056 = (state_16096[8]);var inst_16081 = inst_16056.length;var inst_16082 = (inst_16081 > 0);var state_16096__$1 = state_16096;if(cljs.core.truth_(inst_16082))
{var statearr_16107_16132 = state_16096__$1;(statearr_16107_16132[1] = 12);
} else
{var statearr_16108_16133 = state_16096__$1;(statearr_16108_16133[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 7))
{var inst_16092 = (state_16096[2]);var state_16096__$1 = state_16096;var statearr_16109_16134 = state_16096__$1;(statearr_16109_16134[2] = inst_16092);
(statearr_16109_16134[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 8))
{var inst_16064 = (state_16096[10]);var inst_16060 = (state_16096[9]);var inst_16056 = (state_16096[8]);var inst_16069 = inst_16056.push(inst_16060);var tmp16106 = inst_16056;var inst_16056__$1 = tmp16106;var inst_16057 = inst_16064;var state_16096__$1 = (function (){var statearr_16110 = state_16096;(statearr_16110[11] = inst_16069);
(statearr_16110[7] = inst_16057);
(statearr_16110[8] = inst_16056__$1);
return statearr_16110;
})();var statearr_16111_16135 = state_16096__$1;(statearr_16111_16135[2] = null);
(statearr_16111_16135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 9))
{var inst_16056 = (state_16096[8]);var inst_16072 = cljs.core.vec.call(null,inst_16056);var state_16096__$1 = state_16096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16096__$1,11,out,inst_16072);
} else
{if((state_val_16097 === 10))
{var inst_16079 = (state_16096[2]);var state_16096__$1 = state_16096;var statearr_16112_16136 = state_16096__$1;(statearr_16112_16136[2] = inst_16079);
(statearr_16112_16136[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 11))
{var inst_16064 = (state_16096[10]);var inst_16060 = (state_16096[9]);var inst_16074 = (state_16096[2]);var inst_16075 = [];var inst_16076 = inst_16075.push(inst_16060);var inst_16056 = inst_16075;var inst_16057 = inst_16064;var state_16096__$1 = (function (){var statearr_16113 = state_16096;(statearr_16113[12] = inst_16076);
(statearr_16113[13] = inst_16074);
(statearr_16113[7] = inst_16057);
(statearr_16113[8] = inst_16056);
return statearr_16113;
})();var statearr_16114_16137 = state_16096__$1;(statearr_16114_16137[2] = null);
(statearr_16114_16137[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 12))
{var inst_16056 = (state_16096[8]);var inst_16084 = cljs.core.vec.call(null,inst_16056);var state_16096__$1 = state_16096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16096__$1,15,out,inst_16084);
} else
{if((state_val_16097 === 13))
{var state_16096__$1 = state_16096;var statearr_16115_16138 = state_16096__$1;(statearr_16115_16138[2] = null);
(statearr_16115_16138[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 14))
{var inst_16089 = (state_16096[2]);var inst_16090 = cljs.core.async.close_BANG_.call(null,out);var state_16096__$1 = (function (){var statearr_16116 = state_16096;(statearr_16116[14] = inst_16089);
return statearr_16116;
})();var statearr_16117_16139 = state_16096__$1;(statearr_16117_16139[2] = inst_16090);
(statearr_16117_16139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16097 === 15))
{var inst_16086 = (state_16096[2]);var state_16096__$1 = state_16096;var statearr_16118_16140 = state_16096__$1;(statearr_16118_16140[2] = inst_16086);
(statearr_16118_16140[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16122 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16122[0] = state_machine__5507__auto__);
(statearr_16122[1] = 1);
return statearr_16122;
});
var state_machine__5507__auto____1 = (function (state_16096){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16096);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16123){if((e16123 instanceof Object))
{var ex__5510__auto__ = e16123;var statearr_16124_16141 = state_16096;(statearr_16124_16141[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16096);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16142 = state_16096;
state_16096 = G__16142;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16096){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16125 = f__5522__auto__.call(null);(statearr_16125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16126);
return statearr_16125;
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