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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11599 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11599 = (function (f,fn_handler,meta11600){
this.f = f;
this.fn_handler = fn_handler;
this.meta11600 = meta11600;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11599.cljs$lang$type = true;
cljs.core.async.t11599.cljs$lang$ctorStr = "cljs.core.async/t11599";
cljs.core.async.t11599.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11599");
});
cljs.core.async.t11599.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11599.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11599.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11601){var self__ = this;
var _11601__$1 = this;return self__.meta11600;
});
cljs.core.async.t11599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11601,meta11600__$1){var self__ = this;
var _11601__$1 = this;return (new cljs.core.async.t11599(self__.f,self__.fn_handler,meta11600__$1));
});
cljs.core.async.__GT_t11599 = (function __GT_t11599(f__$1,fn_handler__$1,meta11600){return (new cljs.core.async.t11599(f__$1,fn_handler__$1,meta11600));
});
}
return (new cljs.core.async.t11599(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11603 = buff;if(G__11603)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__11603.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11603.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11603);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11603);
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
{var val_11604 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11604);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11604);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___11605 = n;var x_11606 = 0;while(true){
if((x_11606 < n__4248__auto___11605))
{(a[x_11606] = 0);
{
var G__11607 = (x_11606 + 1);
x_11606 = G__11607;
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
var G__11608 = (i + 1);
i = G__11608;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11612 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11612 = (function (flag,alt_flag,meta11613){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11613 = meta11613;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11612.cljs$lang$type = true;
cljs.core.async.t11612.cljs$lang$ctorStr = "cljs.core.async/t11612";
cljs.core.async.t11612.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11612");
});
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11612.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11612.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11614){var self__ = this;
var _11614__$1 = this;return self__.meta11613;
});
cljs.core.async.t11612.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11614,meta11613__$1){var self__ = this;
var _11614__$1 = this;return (new cljs.core.async.t11612(self__.flag,self__.alt_flag,meta11613__$1));
});
cljs.core.async.__GT_t11612 = (function __GT_t11612(flag__$1,alt_flag__$1,meta11613){return (new cljs.core.async.t11612(flag__$1,alt_flag__$1,meta11613));
});
}
return (new cljs.core.async.t11612(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11618 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11618 = (function (cb,flag,alt_handler,meta11619){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11619 = meta11619;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11618.cljs$lang$type = true;
cljs.core.async.t11618.cljs$lang$ctorStr = "cljs.core.async/t11618";
cljs.core.async.t11618.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11618");
});
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11618.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11618.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11620){var self__ = this;
var _11620__$1 = this;return self__.meta11619;
});
cljs.core.async.t11618.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11620,meta11619__$1){var self__ = this;
var _11620__$1 = this;return (new cljs.core.async.t11618(self__.cb,self__.flag,self__.alt_handler,meta11619__$1));
});
cljs.core.async.__GT_t11618 = (function __GT_t11618(cb__$1,flag__$1,alt_handler__$1,meta11619){return (new cljs.core.async.t11618(cb__$1,flag__$1,alt_handler__$1,meta11619));
});
}
return (new cljs.core.async.t11618(cb,flag,alt_handler,null));
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
return (function (p1__11621_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11621_SHARP_,port], null));
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
var G__11622 = (i + 1);
i = G__11622;
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
var alts_BANG___delegate = function (ports,p__11623){var map__11625 = p__11623;var map__11625__$1 = ((cljs.core.seq_QMARK_.call(null,map__11625))?cljs.core.apply.call(null,cljs.core.hash_map,map__11625):map__11625);var opts = map__11625__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11623 = null;if (arguments.length > 1) {
  p__11623 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11623);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11626){
var ports = cljs.core.first(arglist__11626);
var p__11623 = cljs.core.rest(arglist__11626);
return alts_BANG___delegate(ports,p__11623);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11634 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11634 = (function (ch,f,map_LT_,meta11635){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11635 = meta11635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11634.cljs$lang$type = true;
cljs.core.async.t11634.cljs$lang$ctorStr = "cljs.core.async/t11634";
cljs.core.async.t11634.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11634");
});
cljs.core.async.t11634.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11634.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11634.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11634.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11637 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11637 = (function (fn1,_,meta11635,ch,f,map_LT_,meta11638){
this.fn1 = fn1;
this._ = _;
this.meta11635 = meta11635;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11638 = meta11638;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11637.cljs$lang$type = true;
cljs.core.async.t11637.cljs$lang$ctorStr = "cljs.core.async/t11637";
cljs.core.async.t11637.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11637");
});
cljs.core.async.t11637.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11637.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11637.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11637.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11627_SHARP_){return f1.call(null,(((p1__11627_SHARP_ == null))?null:self__.f.call(null,p1__11627_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11637.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11639){var self__ = this;
var _11639__$1 = this;return self__.meta11638;
});
cljs.core.async.t11637.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11639,meta11638__$1){var self__ = this;
var _11639__$1 = this;return (new cljs.core.async.t11637(self__.fn1,self__._,self__.meta11635,self__.ch,self__.f,self__.map_LT_,meta11638__$1));
});
cljs.core.async.__GT_t11637 = (function __GT_t11637(fn1__$1,___$2,meta11635__$1,ch__$2,f__$2,map_LT___$2,meta11638){return (new cljs.core.async.t11637(fn1__$1,___$2,meta11635__$1,ch__$2,f__$2,map_LT___$2,meta11638));
});
}
return (new cljs.core.async.t11637(fn1,___$1,self__.meta11635,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11634.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11634.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11636){var self__ = this;
var _11636__$1 = this;return self__.meta11635;
});
cljs.core.async.t11634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11636,meta11635__$1){var self__ = this;
var _11636__$1 = this;return (new cljs.core.async.t11634(self__.ch,self__.f,self__.map_LT_,meta11635__$1));
});
cljs.core.async.__GT_t11634 = (function __GT_t11634(ch__$1,f__$1,map_LT___$1,meta11635){return (new cljs.core.async.t11634(ch__$1,f__$1,map_LT___$1,meta11635));
});
}
return (new cljs.core.async.t11634(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11643 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11643 = (function (ch,f,map_GT_,meta11644){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11644 = meta11644;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11643.cljs$lang$type = true;
cljs.core.async.t11643.cljs$lang$ctorStr = "cljs.core.async/t11643";
cljs.core.async.t11643.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11643");
});
cljs.core.async.t11643.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11643.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11643.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11643.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11643.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11643.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11643.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11645){var self__ = this;
var _11645__$1 = this;return self__.meta11644;
});
cljs.core.async.t11643.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11645,meta11644__$1){var self__ = this;
var _11645__$1 = this;return (new cljs.core.async.t11643(self__.ch,self__.f,self__.map_GT_,meta11644__$1));
});
cljs.core.async.__GT_t11643 = (function __GT_t11643(ch__$1,f__$1,map_GT___$1,meta11644){return (new cljs.core.async.t11643(ch__$1,f__$1,map_GT___$1,meta11644));
});
}
return (new cljs.core.async.t11643(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11649 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11649 = (function (ch,p,filter_GT_,meta11650){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11650 = meta11650;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11649.cljs$lang$type = true;
cljs.core.async.t11649.cljs$lang$ctorStr = "cljs.core.async/t11649";
cljs.core.async.t11649.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11649");
});
cljs.core.async.t11649.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11649.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11649.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11649.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11649.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11649.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11649.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11651){var self__ = this;
var _11651__$1 = this;return self__.meta11650;
});
cljs.core.async.t11649.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11651,meta11650__$1){var self__ = this;
var _11651__$1 = this;return (new cljs.core.async.t11649(self__.ch,self__.p,self__.filter_GT_,meta11650__$1));
});
cljs.core.async.__GT_t11649 = (function __GT_t11649(ch__$1,p__$1,filter_GT___$1,meta11650){return (new cljs.core.async.t11649(ch__$1,p__$1,filter_GT___$1,meta11650));
});
}
return (new cljs.core.async.t11649(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___11734 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11713){var state_val_11714 = (state_11713[1]);if((state_val_11714 === 1))
{var state_11713__$1 = state_11713;var statearr_11715_11735 = state_11713__$1;(statearr_11715_11735[2] = null);
(statearr_11715_11735[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11714 === 2))
{var state_11713__$1 = state_11713;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11713__$1,4,ch);
} else
{if((state_val_11714 === 3))
{var inst_11711 = (state_11713[2]);var state_11713__$1 = state_11713;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11713__$1,inst_11711);
} else
{if((state_val_11714 === 4))
{var inst_11695 = (state_11713[7]);var inst_11695__$1 = (state_11713[2]);var inst_11696 = (inst_11695__$1 == null);var state_11713__$1 = (function (){var statearr_11716 = state_11713;(statearr_11716[7] = inst_11695__$1);
return statearr_11716;
})();if(cljs.core.truth_(inst_11696))
{var statearr_11717_11736 = state_11713__$1;(statearr_11717_11736[1] = 5);
} else
{var statearr_11718_11737 = state_11713__$1;(statearr_11718_11737[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11714 === 5))
{var inst_11698 = cljs.core.async.close_BANG_.call(null,out);var state_11713__$1 = state_11713;var statearr_11719_11738 = state_11713__$1;(statearr_11719_11738[2] = inst_11698);
(statearr_11719_11738[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11714 === 6))
{var inst_11695 = (state_11713[7]);var inst_11700 = p.call(null,inst_11695);var state_11713__$1 = state_11713;if(cljs.core.truth_(inst_11700))
{var statearr_11720_11739 = state_11713__$1;(statearr_11720_11739[1] = 8);
} else
{var statearr_11721_11740 = state_11713__$1;(statearr_11721_11740[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11714 === 7))
{var inst_11709 = (state_11713[2]);var state_11713__$1 = state_11713;var statearr_11722_11741 = state_11713__$1;(statearr_11722_11741[2] = inst_11709);
(statearr_11722_11741[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11714 === 8))
{var inst_11695 = (state_11713[7]);var state_11713__$1 = state_11713;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11713__$1,11,out,inst_11695);
} else
{if((state_val_11714 === 9))
{var state_11713__$1 = state_11713;var statearr_11723_11742 = state_11713__$1;(statearr_11723_11742[2] = null);
(statearr_11723_11742[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11714 === 10))
{var inst_11706 = (state_11713[2]);var state_11713__$1 = (function (){var statearr_11724 = state_11713;(statearr_11724[8] = inst_11706);
return statearr_11724;
})();var statearr_11725_11743 = state_11713__$1;(statearr_11725_11743[2] = null);
(statearr_11725_11743[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11714 === 11))
{var inst_11703 = (state_11713[2]);var state_11713__$1 = state_11713;var statearr_11726_11744 = state_11713__$1;(statearr_11726_11744[2] = inst_11703);
(statearr_11726_11744[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_11730 = [null,null,null,null,null,null,null,null,null];(statearr_11730[0] = state_machine__5507__auto__);
(statearr_11730[1] = 1);
return statearr_11730;
});
var state_machine__5507__auto____1 = (function (state_11713){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11713);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11731){if((e11731 instanceof Object))
{var ex__5510__auto__ = e11731;var statearr_11732_11745 = state_11713;(statearr_11732_11745[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11713);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11746 = state_11713;
state_11713 = G__11746;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11713){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11713);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11733 = f__5522__auto__.call(null);(statearr_11733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11734);
return statearr_11733;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11898){var state_val_11899 = (state_11898[1]);if((state_val_11899 === 1))
{var state_11898__$1 = state_11898;var statearr_11900_11937 = state_11898__$1;(statearr_11900_11937[2] = null);
(statearr_11900_11937[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 2))
{var state_11898__$1 = state_11898;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11898__$1,4,in$);
} else
{if((state_val_11899 === 3))
{var inst_11896 = (state_11898[2]);var state_11898__$1 = state_11898;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11898__$1,inst_11896);
} else
{if((state_val_11899 === 4))
{var inst_11844 = (state_11898[7]);var inst_11844__$1 = (state_11898[2]);var inst_11845 = (inst_11844__$1 == null);var state_11898__$1 = (function (){var statearr_11901 = state_11898;(statearr_11901[7] = inst_11844__$1);
return statearr_11901;
})();if(cljs.core.truth_(inst_11845))
{var statearr_11902_11938 = state_11898__$1;(statearr_11902_11938[1] = 5);
} else
{var statearr_11903_11939 = state_11898__$1;(statearr_11903_11939[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 5))
{var inst_11847 = cljs.core.async.close_BANG_.call(null,out);var state_11898__$1 = state_11898;var statearr_11904_11940 = state_11898__$1;(statearr_11904_11940[2] = inst_11847);
(statearr_11904_11940[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 6))
{var inst_11844 = (state_11898[7]);var inst_11849 = f.call(null,inst_11844);var inst_11854 = cljs.core.seq.call(null,inst_11849);var inst_11855 = inst_11854;var inst_11856 = null;var inst_11857 = 0;var inst_11858 = 0;var state_11898__$1 = (function (){var statearr_11905 = state_11898;(statearr_11905[8] = inst_11855);
(statearr_11905[9] = inst_11857);
(statearr_11905[10] = inst_11856);
(statearr_11905[11] = inst_11858);
return statearr_11905;
})();var statearr_11906_11941 = state_11898__$1;(statearr_11906_11941[2] = null);
(statearr_11906_11941[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 7))
{var inst_11894 = (state_11898[2]);var state_11898__$1 = state_11898;var statearr_11907_11942 = state_11898__$1;(statearr_11907_11942[2] = inst_11894);
(statearr_11907_11942[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 8))
{var inst_11857 = (state_11898[9]);var inst_11858 = (state_11898[11]);var inst_11860 = (inst_11858 < inst_11857);var inst_11861 = inst_11860;var state_11898__$1 = state_11898;if(cljs.core.truth_(inst_11861))
{var statearr_11908_11943 = state_11898__$1;(statearr_11908_11943[1] = 10);
} else
{var statearr_11909_11944 = state_11898__$1;(statearr_11909_11944[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 9))
{var inst_11891 = (state_11898[2]);var state_11898__$1 = (function (){var statearr_11910 = state_11898;(statearr_11910[12] = inst_11891);
return statearr_11910;
})();var statearr_11911_11945 = state_11898__$1;(statearr_11911_11945[2] = null);
(statearr_11911_11945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 10))
{var inst_11856 = (state_11898[10]);var inst_11858 = (state_11898[11]);var inst_11863 = cljs.core._nth.call(null,inst_11856,inst_11858);var state_11898__$1 = state_11898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11898__$1,13,out,inst_11863);
} else
{if((state_val_11899 === 11))
{var inst_11869 = (state_11898[13]);var inst_11855 = (state_11898[8]);var inst_11869__$1 = cljs.core.seq.call(null,inst_11855);var state_11898__$1 = (function (){var statearr_11915 = state_11898;(statearr_11915[13] = inst_11869__$1);
return statearr_11915;
})();if(inst_11869__$1)
{var statearr_11916_11946 = state_11898__$1;(statearr_11916_11946[1] = 14);
} else
{var statearr_11917_11947 = state_11898__$1;(statearr_11917_11947[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 12))
{var inst_11889 = (state_11898[2]);var state_11898__$1 = state_11898;var statearr_11918_11948 = state_11898__$1;(statearr_11918_11948[2] = inst_11889);
(statearr_11918_11948[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 13))
{var inst_11855 = (state_11898[8]);var inst_11857 = (state_11898[9]);var inst_11856 = (state_11898[10]);var inst_11858 = (state_11898[11]);var inst_11865 = (state_11898[2]);var inst_11866 = (inst_11858 + 1);var tmp11912 = inst_11855;var tmp11913 = inst_11857;var tmp11914 = inst_11856;var inst_11855__$1 = tmp11912;var inst_11856__$1 = tmp11914;var inst_11857__$1 = tmp11913;var inst_11858__$1 = inst_11866;var state_11898__$1 = (function (){var statearr_11919 = state_11898;(statearr_11919[8] = inst_11855__$1);
(statearr_11919[9] = inst_11857__$1);
(statearr_11919[10] = inst_11856__$1);
(statearr_11919[11] = inst_11858__$1);
(statearr_11919[14] = inst_11865);
return statearr_11919;
})();var statearr_11920_11949 = state_11898__$1;(statearr_11920_11949[2] = null);
(statearr_11920_11949[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 14))
{var inst_11869 = (state_11898[13]);var inst_11871 = cljs.core.chunked_seq_QMARK_.call(null,inst_11869);var state_11898__$1 = state_11898;if(inst_11871)
{var statearr_11921_11950 = state_11898__$1;(statearr_11921_11950[1] = 17);
} else
{var statearr_11922_11951 = state_11898__$1;(statearr_11922_11951[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 15))
{var state_11898__$1 = state_11898;var statearr_11923_11952 = state_11898__$1;(statearr_11923_11952[2] = null);
(statearr_11923_11952[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 16))
{var inst_11887 = (state_11898[2]);var state_11898__$1 = state_11898;var statearr_11924_11953 = state_11898__$1;(statearr_11924_11953[2] = inst_11887);
(statearr_11924_11953[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 17))
{var inst_11869 = (state_11898[13]);var inst_11873 = cljs.core.chunk_first.call(null,inst_11869);var inst_11874 = cljs.core.chunk_rest.call(null,inst_11869);var inst_11875 = cljs.core.count.call(null,inst_11873);var inst_11855 = inst_11874;var inst_11856 = inst_11873;var inst_11857 = inst_11875;var inst_11858 = 0;var state_11898__$1 = (function (){var statearr_11925 = state_11898;(statearr_11925[8] = inst_11855);
(statearr_11925[9] = inst_11857);
(statearr_11925[10] = inst_11856);
(statearr_11925[11] = inst_11858);
return statearr_11925;
})();var statearr_11926_11954 = state_11898__$1;(statearr_11926_11954[2] = null);
(statearr_11926_11954[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 18))
{var inst_11869 = (state_11898[13]);var inst_11878 = cljs.core.first.call(null,inst_11869);var state_11898__$1 = state_11898;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11898__$1,20,out,inst_11878);
} else
{if((state_val_11899 === 19))
{var inst_11884 = (state_11898[2]);var state_11898__$1 = state_11898;var statearr_11927_11955 = state_11898__$1;(statearr_11927_11955[2] = inst_11884);
(statearr_11927_11955[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11899 === 20))
{var inst_11869 = (state_11898[13]);var inst_11880 = (state_11898[2]);var inst_11881 = cljs.core.next.call(null,inst_11869);var inst_11855 = inst_11881;var inst_11856 = null;var inst_11857 = 0;var inst_11858 = 0;var state_11898__$1 = (function (){var statearr_11928 = state_11898;(statearr_11928[8] = inst_11855);
(statearr_11928[9] = inst_11857);
(statearr_11928[15] = inst_11880);
(statearr_11928[10] = inst_11856);
(statearr_11928[11] = inst_11858);
return statearr_11928;
})();var statearr_11929_11956 = state_11898__$1;(statearr_11929_11956[2] = null);
(statearr_11929_11956[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_11933 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11933[0] = state_machine__5507__auto__);
(statearr_11933[1] = 1);
return statearr_11933;
});
var state_machine__5507__auto____1 = (function (state_11898){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11898);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11934){if((e11934 instanceof Object))
{var ex__5510__auto__ = e11934;var statearr_11935_11957 = state_11898;(statearr_11935_11957[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11898);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11934;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11958 = state_11898;
state_11898 = G__11958;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11898){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11898);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11936 = f__5522__auto__.call(null);(statearr_11936[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_11936;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12018){var state_val_12019 = (state_12018[1]);if((state_val_12019 === 1))
{var state_12018__$1 = state_12018;var statearr_12020_12040 = state_12018__$1;(statearr_12020_12040[2] = null);
(statearr_12020_12040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12019 === 2))
{var state_12018__$1 = state_12018;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12018__$1,4,from);
} else
{if((state_val_12019 === 3))
{var inst_12016 = (state_12018[2]);var state_12018__$1 = state_12018;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12018__$1,inst_12016);
} else
{if((state_val_12019 === 4))
{var inst_12001 = (state_12018[7]);var inst_12001__$1 = (state_12018[2]);var inst_12002 = (inst_12001__$1 == null);var state_12018__$1 = (function (){var statearr_12021 = state_12018;(statearr_12021[7] = inst_12001__$1);
return statearr_12021;
})();if(cljs.core.truth_(inst_12002))
{var statearr_12022_12041 = state_12018__$1;(statearr_12022_12041[1] = 5);
} else
{var statearr_12023_12042 = state_12018__$1;(statearr_12023_12042[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12019 === 5))
{var state_12018__$1 = state_12018;if(cljs.core.truth_(close_QMARK_))
{var statearr_12024_12043 = state_12018__$1;(statearr_12024_12043[1] = 8);
} else
{var statearr_12025_12044 = state_12018__$1;(statearr_12025_12044[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12019 === 6))
{var inst_12001 = (state_12018[7]);var state_12018__$1 = state_12018;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12018__$1,11,to,inst_12001);
} else
{if((state_val_12019 === 7))
{var inst_12014 = (state_12018[2]);var state_12018__$1 = state_12018;var statearr_12026_12045 = state_12018__$1;(statearr_12026_12045[2] = inst_12014);
(statearr_12026_12045[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12019 === 8))
{var inst_12005 = cljs.core.async.close_BANG_.call(null,to);var state_12018__$1 = state_12018;var statearr_12027_12046 = state_12018__$1;(statearr_12027_12046[2] = inst_12005);
(statearr_12027_12046[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12019 === 9))
{var state_12018__$1 = state_12018;var statearr_12028_12047 = state_12018__$1;(statearr_12028_12047[2] = null);
(statearr_12028_12047[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12019 === 10))
{var inst_12008 = (state_12018[2]);var state_12018__$1 = state_12018;var statearr_12029_12048 = state_12018__$1;(statearr_12029_12048[2] = inst_12008);
(statearr_12029_12048[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12019 === 11))
{var inst_12011 = (state_12018[2]);var state_12018__$1 = (function (){var statearr_12030 = state_12018;(statearr_12030[8] = inst_12011);
return statearr_12030;
})();var statearr_12031_12049 = state_12018__$1;(statearr_12031_12049[2] = null);
(statearr_12031_12049[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12035 = [null,null,null,null,null,null,null,null,null];(statearr_12035[0] = state_machine__5507__auto__);
(statearr_12035[1] = 1);
return statearr_12035;
});
var state_machine__5507__auto____1 = (function (state_12018){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12018);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12036){if((e12036 instanceof Object))
{var ex__5510__auto__ = e12036;var statearr_12037_12050 = state_12018;(statearr_12037_12050[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12018);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12051 = state_12018;
state_12018 = G__12051;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12018){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12038 = f__5522__auto__.call(null);(statearr_12038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12039);
return statearr_12038;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12138 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12116){var state_val_12117 = (state_12116[1]);if((state_val_12117 === 1))
{var state_12116__$1 = state_12116;var statearr_12118_12139 = state_12116__$1;(statearr_12118_12139[2] = null);
(statearr_12118_12139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12117 === 2))
{var state_12116__$1 = state_12116;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12116__$1,4,ch);
} else
{if((state_val_12117 === 3))
{var inst_12114 = (state_12116[2]);var state_12116__$1 = state_12116;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12116__$1,inst_12114);
} else
{if((state_val_12117 === 4))
{var inst_12097 = (state_12116[7]);var inst_12097__$1 = (state_12116[2]);var inst_12098 = (inst_12097__$1 == null);var state_12116__$1 = (function (){var statearr_12119 = state_12116;(statearr_12119[7] = inst_12097__$1);
return statearr_12119;
})();if(cljs.core.truth_(inst_12098))
{var statearr_12120_12140 = state_12116__$1;(statearr_12120_12140[1] = 5);
} else
{var statearr_12121_12141 = state_12116__$1;(statearr_12121_12141[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12117 === 5))
{var inst_12100 = cljs.core.async.close_BANG_.call(null,tc);var inst_12101 = cljs.core.async.close_BANG_.call(null,fc);var state_12116__$1 = (function (){var statearr_12122 = state_12116;(statearr_12122[8] = inst_12100);
return statearr_12122;
})();var statearr_12123_12142 = state_12116__$1;(statearr_12123_12142[2] = inst_12101);
(statearr_12123_12142[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12117 === 6))
{var inst_12097 = (state_12116[7]);var inst_12103 = p.call(null,inst_12097);var state_12116__$1 = state_12116;if(cljs.core.truth_(inst_12103))
{var statearr_12124_12143 = state_12116__$1;(statearr_12124_12143[1] = 9);
} else
{var statearr_12125_12144 = state_12116__$1;(statearr_12125_12144[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12117 === 7))
{var inst_12112 = (state_12116[2]);var state_12116__$1 = state_12116;var statearr_12126_12145 = state_12116__$1;(statearr_12126_12145[2] = inst_12112);
(statearr_12126_12145[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12117 === 8))
{var inst_12109 = (state_12116[2]);var state_12116__$1 = (function (){var statearr_12127 = state_12116;(statearr_12127[9] = inst_12109);
return statearr_12127;
})();var statearr_12128_12146 = state_12116__$1;(statearr_12128_12146[2] = null);
(statearr_12128_12146[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12117 === 9))
{var state_12116__$1 = state_12116;var statearr_12129_12147 = state_12116__$1;(statearr_12129_12147[2] = tc);
(statearr_12129_12147[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12117 === 10))
{var state_12116__$1 = state_12116;var statearr_12130_12148 = state_12116__$1;(statearr_12130_12148[2] = fc);
(statearr_12130_12148[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12117 === 11))
{var inst_12097 = (state_12116[7]);var inst_12107 = (state_12116[2]);var state_12116__$1 = state_12116;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12116__$1,8,inst_12107,inst_12097);
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
var state_machine__5507__auto____0 = (function (){var statearr_12134 = [null,null,null,null,null,null,null,null,null,null];(statearr_12134[0] = state_machine__5507__auto__);
(statearr_12134[1] = 1);
return statearr_12134;
});
var state_machine__5507__auto____1 = (function (state_12116){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12116);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12135){if((e12135 instanceof Object))
{var ex__5510__auto__ = e12135;var statearr_12136_12149 = state_12116;(statearr_12136_12149[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12116);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12135;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12150 = state_12116;
state_12116 = G__12150;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12116){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12116);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12137 = f__5522__auto__.call(null);(statearr_12137[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12138);
return statearr_12137;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12197){var state_val_12198 = (state_12197[1]);if((state_val_12198 === 7))
{var inst_12193 = (state_12197[2]);var state_12197__$1 = state_12197;var statearr_12199_12215 = state_12197__$1;(statearr_12199_12215[2] = inst_12193);
(statearr_12199_12215[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12198 === 6))
{var inst_12186 = (state_12197[7]);var inst_12183 = (state_12197[8]);var inst_12190 = f.call(null,inst_12183,inst_12186);var inst_12183__$1 = inst_12190;var state_12197__$1 = (function (){var statearr_12200 = state_12197;(statearr_12200[8] = inst_12183__$1);
return statearr_12200;
})();var statearr_12201_12216 = state_12197__$1;(statearr_12201_12216[2] = null);
(statearr_12201_12216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12198 === 5))
{var inst_12183 = (state_12197[8]);var state_12197__$1 = state_12197;var statearr_12202_12217 = state_12197__$1;(statearr_12202_12217[2] = inst_12183);
(statearr_12202_12217[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12198 === 4))
{var inst_12186 = (state_12197[7]);var inst_12186__$1 = (state_12197[2]);var inst_12187 = (inst_12186__$1 == null);var state_12197__$1 = (function (){var statearr_12203 = state_12197;(statearr_12203[7] = inst_12186__$1);
return statearr_12203;
})();if(cljs.core.truth_(inst_12187))
{var statearr_12204_12218 = state_12197__$1;(statearr_12204_12218[1] = 5);
} else
{var statearr_12205_12219 = state_12197__$1;(statearr_12205_12219[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12198 === 3))
{var inst_12195 = (state_12197[2]);var state_12197__$1 = state_12197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12197__$1,inst_12195);
} else
{if((state_val_12198 === 2))
{var state_12197__$1 = state_12197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12197__$1,4,ch);
} else
{if((state_val_12198 === 1))
{var inst_12183 = init;var state_12197__$1 = (function (){var statearr_12206 = state_12197;(statearr_12206[8] = inst_12183);
return statearr_12206;
})();var statearr_12207_12220 = state_12197__$1;(statearr_12207_12220[2] = null);
(statearr_12207_12220[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12211 = [null,null,null,null,null,null,null,null,null];(statearr_12211[0] = state_machine__5507__auto__);
(statearr_12211[1] = 1);
return statearr_12211;
});
var state_machine__5507__auto____1 = (function (state_12197){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12197);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12212){if((e12212 instanceof Object))
{var ex__5510__auto__ = e12212;var statearr_12213_12221 = state_12197;(statearr_12213_12221[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12197);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12212;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12222 = state_12197;
state_12197 = G__12222;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12197){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12214 = f__5522__auto__.call(null);(statearr_12214[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12214;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12284){var state_val_12285 = (state_12284[1]);if((state_val_12285 === 1))
{var inst_12264 = cljs.core.seq.call(null,coll);var inst_12265 = inst_12264;var state_12284__$1 = (function (){var statearr_12286 = state_12284;(statearr_12286[7] = inst_12265);
return statearr_12286;
})();var statearr_12287_12305 = state_12284__$1;(statearr_12287_12305[2] = null);
(statearr_12287_12305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12285 === 2))
{var inst_12265 = (state_12284[7]);var state_12284__$1 = state_12284;if(cljs.core.truth_(inst_12265))
{var statearr_12288_12306 = state_12284__$1;(statearr_12288_12306[1] = 4);
} else
{var statearr_12289_12307 = state_12284__$1;(statearr_12289_12307[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12285 === 3))
{var inst_12282 = (state_12284[2]);var state_12284__$1 = state_12284;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12284__$1,inst_12282);
} else
{if((state_val_12285 === 4))
{var inst_12265 = (state_12284[7]);var inst_12268 = cljs.core.first.call(null,inst_12265);var state_12284__$1 = state_12284;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12284__$1,7,ch,inst_12268);
} else
{if((state_val_12285 === 5))
{var state_12284__$1 = state_12284;if(cljs.core.truth_(close_QMARK_))
{var statearr_12290_12308 = state_12284__$1;(statearr_12290_12308[1] = 8);
} else
{var statearr_12291_12309 = state_12284__$1;(statearr_12291_12309[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12285 === 6))
{var inst_12280 = (state_12284[2]);var state_12284__$1 = state_12284;var statearr_12292_12310 = state_12284__$1;(statearr_12292_12310[2] = inst_12280);
(statearr_12292_12310[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12285 === 7))
{var inst_12265 = (state_12284[7]);var inst_12270 = (state_12284[2]);var inst_12271 = cljs.core.next.call(null,inst_12265);var inst_12265__$1 = inst_12271;var state_12284__$1 = (function (){var statearr_12293 = state_12284;(statearr_12293[7] = inst_12265__$1);
(statearr_12293[8] = inst_12270);
return statearr_12293;
})();var statearr_12294_12311 = state_12284__$1;(statearr_12294_12311[2] = null);
(statearr_12294_12311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12285 === 8))
{var inst_12275 = cljs.core.async.close_BANG_.call(null,ch);var state_12284__$1 = state_12284;var statearr_12295_12312 = state_12284__$1;(statearr_12295_12312[2] = inst_12275);
(statearr_12295_12312[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12285 === 9))
{var state_12284__$1 = state_12284;var statearr_12296_12313 = state_12284__$1;(statearr_12296_12313[2] = null);
(statearr_12296_12313[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12285 === 10))
{var inst_12278 = (state_12284[2]);var state_12284__$1 = state_12284;var statearr_12297_12314 = state_12284__$1;(statearr_12297_12314[2] = inst_12278);
(statearr_12297_12314[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12301 = [null,null,null,null,null,null,null,null,null];(statearr_12301[0] = state_machine__5507__auto__);
(statearr_12301[1] = 1);
return statearr_12301;
});
var state_machine__5507__auto____1 = (function (state_12284){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12284);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12302){if((e12302 instanceof Object))
{var ex__5510__auto__ = e12302;var statearr_12303_12315 = state_12284;(statearr_12303_12315[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12284);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12302;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12316 = state_12284;
state_12284 = G__12316;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12284){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12304 = f__5522__auto__.call(null);(statearr_12304[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12304;
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
cljs.core.async.Mux = (function (){var obj12318 = {};return obj12318;
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
cljs.core.async.Mult = (function (){var obj12320 = {};return obj12320;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12544 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12544 = (function (cs,ch,mult,meta12545){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12545 = meta12545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12544.cljs$lang$type = true;
cljs.core.async.t12544.cljs$lang$ctorStr = "cljs.core.async/t12544";
cljs.core.async.t12544.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12544");
});})(cs))
;
cljs.core.async.t12544.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12544.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12544.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12544.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12544.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12544.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12544.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12546){var self__ = this;
var _12546__$1 = this;return self__.meta12545;
});})(cs))
;
cljs.core.async.t12544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12546,meta12545__$1){var self__ = this;
var _12546__$1 = this;return (new cljs.core.async.t12544(self__.cs,self__.ch,self__.mult,meta12545__$1));
});})(cs))
;
cljs.core.async.__GT_t12544 = ((function (cs){
return (function __GT_t12544(cs__$1,ch__$1,mult__$1,meta12545){return (new cljs.core.async.t12544(cs__$1,ch__$1,mult__$1,meta12545));
});})(cs))
;
}
return (new cljs.core.async.t12544(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___12767 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12681){var state_val_12682 = (state_12681[1]);if((state_val_12682 === 32))
{var inst_12625 = (state_12681[7]);var inst_12549 = (state_12681[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12681,31,Object,null,30);var inst_12632 = cljs.core.async.put_BANG_.call(null,inst_12625,inst_12549,done);var state_12681__$1 = state_12681;var statearr_12683_12768 = state_12681__$1;(statearr_12683_12768[2] = inst_12632);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12681__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 1))
{var state_12681__$1 = state_12681;var statearr_12684_12769 = state_12681__$1;(statearr_12684_12769[2] = null);
(statearr_12684_12769[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 33))
{var inst_12638 = (state_12681[9]);var inst_12640 = cljs.core.chunked_seq_QMARK_.call(null,inst_12638);var state_12681__$1 = state_12681;if(inst_12640)
{var statearr_12685_12770 = state_12681__$1;(statearr_12685_12770[1] = 36);
} else
{var statearr_12686_12771 = state_12681__$1;(statearr_12686_12771[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 2))
{var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12681__$1,4,ch);
} else
{if((state_val_12682 === 34))
{var state_12681__$1 = state_12681;var statearr_12687_12772 = state_12681__$1;(statearr_12687_12772[2] = null);
(statearr_12687_12772[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 3))
{var inst_12679 = (state_12681[2]);var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12681__$1,inst_12679);
} else
{if((state_val_12682 === 35))
{var inst_12663 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12688_12773 = state_12681__$1;(statearr_12688_12773[2] = inst_12663);
(statearr_12688_12773[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 4))
{var inst_12549 = (state_12681[8]);var inst_12549__$1 = (state_12681[2]);var inst_12550 = (inst_12549__$1 == null);var state_12681__$1 = (function (){var statearr_12689 = state_12681;(statearr_12689[8] = inst_12549__$1);
return statearr_12689;
})();if(cljs.core.truth_(inst_12550))
{var statearr_12690_12774 = state_12681__$1;(statearr_12690_12774[1] = 5);
} else
{var statearr_12691_12775 = state_12681__$1;(statearr_12691_12775[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 36))
{var inst_12638 = (state_12681[9]);var inst_12642 = cljs.core.chunk_first.call(null,inst_12638);var inst_12643 = cljs.core.chunk_rest.call(null,inst_12638);var inst_12644 = cljs.core.count.call(null,inst_12642);var inst_12617 = inst_12643;var inst_12618 = inst_12642;var inst_12619 = inst_12644;var inst_12620 = 0;var state_12681__$1 = (function (){var statearr_12692 = state_12681;(statearr_12692[10] = inst_12620);
(statearr_12692[11] = inst_12618);
(statearr_12692[12] = inst_12617);
(statearr_12692[13] = inst_12619);
return statearr_12692;
})();var statearr_12693_12776 = state_12681__$1;(statearr_12693_12776[2] = null);
(statearr_12693_12776[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 5))
{var inst_12556 = cljs.core.deref.call(null,cs);var inst_12557 = cljs.core.seq.call(null,inst_12556);var inst_12558 = inst_12557;var inst_12559 = null;var inst_12560 = 0;var inst_12561 = 0;var state_12681__$1 = (function (){var statearr_12694 = state_12681;(statearr_12694[14] = inst_12561);
(statearr_12694[15] = inst_12560);
(statearr_12694[16] = inst_12558);
(statearr_12694[17] = inst_12559);
return statearr_12694;
})();var statearr_12695_12777 = state_12681__$1;(statearr_12695_12777[2] = null);
(statearr_12695_12777[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 37))
{var inst_12638 = (state_12681[9]);var inst_12647 = cljs.core.first.call(null,inst_12638);var state_12681__$1 = (function (){var statearr_12696 = state_12681;(statearr_12696[18] = inst_12647);
return statearr_12696;
})();var statearr_12697_12778 = state_12681__$1;(statearr_12697_12778[2] = null);
(statearr_12697_12778[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 6))
{var inst_12609 = (state_12681[19]);var inst_12608 = cljs.core.deref.call(null,cs);var inst_12609__$1 = cljs.core.keys.call(null,inst_12608);var inst_12610 = cljs.core.count.call(null,inst_12609__$1);var inst_12611 = cljs.core.reset_BANG_.call(null,dctr,inst_12610);var inst_12616 = cljs.core.seq.call(null,inst_12609__$1);var inst_12617 = inst_12616;var inst_12618 = null;var inst_12619 = 0;var inst_12620 = 0;var state_12681__$1 = (function (){var statearr_12698 = state_12681;(statearr_12698[20] = inst_12611);
(statearr_12698[10] = inst_12620);
(statearr_12698[19] = inst_12609__$1);
(statearr_12698[11] = inst_12618);
(statearr_12698[12] = inst_12617);
(statearr_12698[13] = inst_12619);
return statearr_12698;
})();var statearr_12699_12779 = state_12681__$1;(statearr_12699_12779[2] = null);
(statearr_12699_12779[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 38))
{var inst_12660 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12700_12780 = state_12681__$1;(statearr_12700_12780[2] = inst_12660);
(statearr_12700_12780[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 7))
{var inst_12677 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12701_12781 = state_12681__$1;(statearr_12701_12781[2] = inst_12677);
(statearr_12701_12781[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 39))
{var inst_12638 = (state_12681[9]);var inst_12656 = (state_12681[2]);var inst_12657 = cljs.core.next.call(null,inst_12638);var inst_12617 = inst_12657;var inst_12618 = null;var inst_12619 = 0;var inst_12620 = 0;var state_12681__$1 = (function (){var statearr_12702 = state_12681;(statearr_12702[10] = inst_12620);
(statearr_12702[21] = inst_12656);
(statearr_12702[11] = inst_12618);
(statearr_12702[12] = inst_12617);
(statearr_12702[13] = inst_12619);
return statearr_12702;
})();var statearr_12703_12782 = state_12681__$1;(statearr_12703_12782[2] = null);
(statearr_12703_12782[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 8))
{var inst_12561 = (state_12681[14]);var inst_12560 = (state_12681[15]);var inst_12563 = (inst_12561 < inst_12560);var inst_12564 = inst_12563;var state_12681__$1 = state_12681;if(cljs.core.truth_(inst_12564))
{var statearr_12704_12783 = state_12681__$1;(statearr_12704_12783[1] = 10);
} else
{var statearr_12705_12784 = state_12681__$1;(statearr_12705_12784[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 40))
{var inst_12647 = (state_12681[18]);var inst_12648 = (state_12681[2]);var inst_12649 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12650 = cljs.core.async.untap_STAR_.call(null,m,inst_12647);var state_12681__$1 = (function (){var statearr_12706 = state_12681;(statearr_12706[22] = inst_12649);
(statearr_12706[23] = inst_12648);
return statearr_12706;
})();var statearr_12707_12785 = state_12681__$1;(statearr_12707_12785[2] = inst_12650);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12681__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 9))
{var inst_12606 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12708_12786 = state_12681__$1;(statearr_12708_12786[2] = inst_12606);
(statearr_12708_12786[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 41))
{var inst_12647 = (state_12681[18]);var inst_12549 = (state_12681[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12681,40,Object,null,39);var inst_12654 = cljs.core.async.put_BANG_.call(null,inst_12647,inst_12549,done);var state_12681__$1 = state_12681;var statearr_12709_12787 = state_12681__$1;(statearr_12709_12787[2] = inst_12654);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12681__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 10))
{var inst_12561 = (state_12681[14]);var inst_12559 = (state_12681[17]);var inst_12567 = cljs.core._nth.call(null,inst_12559,inst_12561);var inst_12568 = cljs.core.nth.call(null,inst_12567,0,null);var inst_12569 = cljs.core.nth.call(null,inst_12567,1,null);var state_12681__$1 = (function (){var statearr_12710 = state_12681;(statearr_12710[24] = inst_12568);
return statearr_12710;
})();if(cljs.core.truth_(inst_12569))
{var statearr_12711_12788 = state_12681__$1;(statearr_12711_12788[1] = 13);
} else
{var statearr_12712_12789 = state_12681__$1;(statearr_12712_12789[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 42))
{var state_12681__$1 = state_12681;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12681__$1,45,dchan);
} else
{if((state_val_12682 === 11))
{var inst_12578 = (state_12681[25]);var inst_12558 = (state_12681[16]);var inst_12578__$1 = cljs.core.seq.call(null,inst_12558);var state_12681__$1 = (function (){var statearr_12713 = state_12681;(statearr_12713[25] = inst_12578__$1);
return statearr_12713;
})();if(inst_12578__$1)
{var statearr_12714_12790 = state_12681__$1;(statearr_12714_12790[1] = 16);
} else
{var statearr_12715_12791 = state_12681__$1;(statearr_12715_12791[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 43))
{var state_12681__$1 = state_12681;var statearr_12716_12792 = state_12681__$1;(statearr_12716_12792[2] = null);
(statearr_12716_12792[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 12))
{var inst_12604 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12717_12793 = state_12681__$1;(statearr_12717_12793[2] = inst_12604);
(statearr_12717_12793[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 44))
{var inst_12674 = (state_12681[2]);var state_12681__$1 = (function (){var statearr_12718 = state_12681;(statearr_12718[26] = inst_12674);
return statearr_12718;
})();var statearr_12719_12794 = state_12681__$1;(statearr_12719_12794[2] = null);
(statearr_12719_12794[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 13))
{var inst_12568 = (state_12681[24]);var inst_12571 = cljs.core.async.close_BANG_.call(null,inst_12568);var state_12681__$1 = state_12681;var statearr_12720_12795 = state_12681__$1;(statearr_12720_12795[2] = inst_12571);
(statearr_12720_12795[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 45))
{var inst_12671 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12724_12796 = state_12681__$1;(statearr_12724_12796[2] = inst_12671);
(statearr_12724_12796[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 14))
{var state_12681__$1 = state_12681;var statearr_12725_12797 = state_12681__$1;(statearr_12725_12797[2] = null);
(statearr_12725_12797[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 15))
{var inst_12561 = (state_12681[14]);var inst_12560 = (state_12681[15]);var inst_12558 = (state_12681[16]);var inst_12559 = (state_12681[17]);var inst_12574 = (state_12681[2]);var inst_12575 = (inst_12561 + 1);var tmp12721 = inst_12560;var tmp12722 = inst_12558;var tmp12723 = inst_12559;var inst_12558__$1 = tmp12722;var inst_12559__$1 = tmp12723;var inst_12560__$1 = tmp12721;var inst_12561__$1 = inst_12575;var state_12681__$1 = (function (){var statearr_12726 = state_12681;(statearr_12726[14] = inst_12561__$1);
(statearr_12726[15] = inst_12560__$1);
(statearr_12726[27] = inst_12574);
(statearr_12726[16] = inst_12558__$1);
(statearr_12726[17] = inst_12559__$1);
return statearr_12726;
})();var statearr_12727_12798 = state_12681__$1;(statearr_12727_12798[2] = null);
(statearr_12727_12798[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 16))
{var inst_12578 = (state_12681[25]);var inst_12580 = cljs.core.chunked_seq_QMARK_.call(null,inst_12578);var state_12681__$1 = state_12681;if(inst_12580)
{var statearr_12728_12799 = state_12681__$1;(statearr_12728_12799[1] = 19);
} else
{var statearr_12729_12800 = state_12681__$1;(statearr_12729_12800[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 17))
{var state_12681__$1 = state_12681;var statearr_12730_12801 = state_12681__$1;(statearr_12730_12801[2] = null);
(statearr_12730_12801[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 18))
{var inst_12602 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12731_12802 = state_12681__$1;(statearr_12731_12802[2] = inst_12602);
(statearr_12731_12802[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 19))
{var inst_12578 = (state_12681[25]);var inst_12582 = cljs.core.chunk_first.call(null,inst_12578);var inst_12583 = cljs.core.chunk_rest.call(null,inst_12578);var inst_12584 = cljs.core.count.call(null,inst_12582);var inst_12558 = inst_12583;var inst_12559 = inst_12582;var inst_12560 = inst_12584;var inst_12561 = 0;var state_12681__$1 = (function (){var statearr_12732 = state_12681;(statearr_12732[14] = inst_12561);
(statearr_12732[15] = inst_12560);
(statearr_12732[16] = inst_12558);
(statearr_12732[17] = inst_12559);
return statearr_12732;
})();var statearr_12733_12803 = state_12681__$1;(statearr_12733_12803[2] = null);
(statearr_12733_12803[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 20))
{var inst_12578 = (state_12681[25]);var inst_12588 = cljs.core.first.call(null,inst_12578);var inst_12589 = cljs.core.nth.call(null,inst_12588,0,null);var inst_12590 = cljs.core.nth.call(null,inst_12588,1,null);var state_12681__$1 = (function (){var statearr_12734 = state_12681;(statearr_12734[28] = inst_12589);
return statearr_12734;
})();if(cljs.core.truth_(inst_12590))
{var statearr_12735_12804 = state_12681__$1;(statearr_12735_12804[1] = 22);
} else
{var statearr_12736_12805 = state_12681__$1;(statearr_12736_12805[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 21))
{var inst_12599 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12737_12806 = state_12681__$1;(statearr_12737_12806[2] = inst_12599);
(statearr_12737_12806[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 22))
{var inst_12589 = (state_12681[28]);var inst_12592 = cljs.core.async.close_BANG_.call(null,inst_12589);var state_12681__$1 = state_12681;var statearr_12738_12807 = state_12681__$1;(statearr_12738_12807[2] = inst_12592);
(statearr_12738_12807[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 23))
{var state_12681__$1 = state_12681;var statearr_12739_12808 = state_12681__$1;(statearr_12739_12808[2] = null);
(statearr_12739_12808[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 24))
{var inst_12578 = (state_12681[25]);var inst_12595 = (state_12681[2]);var inst_12596 = cljs.core.next.call(null,inst_12578);var inst_12558 = inst_12596;var inst_12559 = null;var inst_12560 = 0;var inst_12561 = 0;var state_12681__$1 = (function (){var statearr_12740 = state_12681;(statearr_12740[29] = inst_12595);
(statearr_12740[14] = inst_12561);
(statearr_12740[15] = inst_12560);
(statearr_12740[16] = inst_12558);
(statearr_12740[17] = inst_12559);
return statearr_12740;
})();var statearr_12741_12809 = state_12681__$1;(statearr_12741_12809[2] = null);
(statearr_12741_12809[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 25))
{var inst_12620 = (state_12681[10]);var inst_12619 = (state_12681[13]);var inst_12622 = (inst_12620 < inst_12619);var inst_12623 = inst_12622;var state_12681__$1 = state_12681;if(cljs.core.truth_(inst_12623))
{var statearr_12742_12810 = state_12681__$1;(statearr_12742_12810[1] = 27);
} else
{var statearr_12743_12811 = state_12681__$1;(statearr_12743_12811[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 26))
{var inst_12609 = (state_12681[19]);var inst_12667 = (state_12681[2]);var inst_12668 = cljs.core.seq.call(null,inst_12609);var state_12681__$1 = (function (){var statearr_12744 = state_12681;(statearr_12744[30] = inst_12667);
return statearr_12744;
})();if(inst_12668)
{var statearr_12745_12812 = state_12681__$1;(statearr_12745_12812[1] = 42);
} else
{var statearr_12746_12813 = state_12681__$1;(statearr_12746_12813[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 27))
{var inst_12620 = (state_12681[10]);var inst_12618 = (state_12681[11]);var inst_12625 = cljs.core._nth.call(null,inst_12618,inst_12620);var state_12681__$1 = (function (){var statearr_12747 = state_12681;(statearr_12747[7] = inst_12625);
return statearr_12747;
})();var statearr_12748_12814 = state_12681__$1;(statearr_12748_12814[2] = null);
(statearr_12748_12814[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 28))
{var inst_12638 = (state_12681[9]);var inst_12617 = (state_12681[12]);var inst_12638__$1 = cljs.core.seq.call(null,inst_12617);var state_12681__$1 = (function (){var statearr_12752 = state_12681;(statearr_12752[9] = inst_12638__$1);
return statearr_12752;
})();if(inst_12638__$1)
{var statearr_12753_12815 = state_12681__$1;(statearr_12753_12815[1] = 33);
} else
{var statearr_12754_12816 = state_12681__$1;(statearr_12754_12816[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 29))
{var inst_12665 = (state_12681[2]);var state_12681__$1 = state_12681;var statearr_12755_12817 = state_12681__$1;(statearr_12755_12817[2] = inst_12665);
(statearr_12755_12817[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 30))
{var inst_12620 = (state_12681[10]);var inst_12618 = (state_12681[11]);var inst_12617 = (state_12681[12]);var inst_12619 = (state_12681[13]);var inst_12634 = (state_12681[2]);var inst_12635 = (inst_12620 + 1);var tmp12749 = inst_12618;var tmp12750 = inst_12617;var tmp12751 = inst_12619;var inst_12617__$1 = tmp12750;var inst_12618__$1 = tmp12749;var inst_12619__$1 = tmp12751;var inst_12620__$1 = inst_12635;var state_12681__$1 = (function (){var statearr_12756 = state_12681;(statearr_12756[10] = inst_12620__$1);
(statearr_12756[11] = inst_12618__$1);
(statearr_12756[12] = inst_12617__$1);
(statearr_12756[13] = inst_12619__$1);
(statearr_12756[31] = inst_12634);
return statearr_12756;
})();var statearr_12757_12818 = state_12681__$1;(statearr_12757_12818[2] = null);
(statearr_12757_12818[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12682 === 31))
{var inst_12625 = (state_12681[7]);var inst_12626 = (state_12681[2]);var inst_12627 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12628 = cljs.core.async.untap_STAR_.call(null,m,inst_12625);var state_12681__$1 = (function (){var statearr_12758 = state_12681;(statearr_12758[32] = inst_12627);
(statearr_12758[33] = inst_12626);
return statearr_12758;
})();var statearr_12759_12819 = state_12681__$1;(statearr_12759_12819[2] = inst_12628);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12681__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_12763 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12763[0] = state_machine__5507__auto__);
(statearr_12763[1] = 1);
return statearr_12763;
});
var state_machine__5507__auto____1 = (function (state_12681){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12681);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12764){if((e12764 instanceof Object))
{var ex__5510__auto__ = e12764;var statearr_12765_12820 = state_12681;(statearr_12765_12820[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12681);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12764;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12821 = state_12681;
state_12681 = G__12821;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12681){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12681);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12766 = f__5522__auto__.call(null);(statearr_12766[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12767);
return statearr_12766;
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
cljs.core.async.Mix = (function (){var obj12823 = {};return obj12823;
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
;var m = (function (){if(typeof cljs.core.async.t12933 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12933 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta12934){
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
this.meta12934 = meta12934;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12933.cljs$lang$type = true;
cljs.core.async.t12933.cljs$lang$ctorStr = "cljs.core.async/t12933";
cljs.core.async.t12933.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12933");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12933.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t12933.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12933.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12933.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12933.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12933.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12933.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12933.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12933.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12935){var self__ = this;
var _12935__$1 = this;return self__.meta12934;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t12933.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_12935,meta12934__$1){var self__ = this;
var _12935__$1 = this;return (new cljs.core.async.t12933(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta12934__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t12933 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t12933(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12934){return (new cljs.core.async.t12933(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta12934));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t12933(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13042 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13000){var state_val_13001 = (state_13000[1]);if((state_val_13001 === 1))
{var inst_12939 = (state_13000[7]);var inst_12939__$1 = calc_state.call(null);var inst_12940 = cljs.core.seq_QMARK_.call(null,inst_12939__$1);var state_13000__$1 = (function (){var statearr_13002 = state_13000;(statearr_13002[7] = inst_12939__$1);
return statearr_13002;
})();if(inst_12940)
{var statearr_13003_13043 = state_13000__$1;(statearr_13003_13043[1] = 2);
} else
{var statearr_13004_13044 = state_13000__$1;(statearr_13004_13044[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 2))
{var inst_12939 = (state_13000[7]);var inst_12942 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12939);var state_13000__$1 = state_13000;var statearr_13005_13045 = state_13000__$1;(statearr_13005_13045[2] = inst_12942);
(statearr_13005_13045[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 3))
{var inst_12939 = (state_13000[7]);var state_13000__$1 = state_13000;var statearr_13006_13046 = state_13000__$1;(statearr_13006_13046[2] = inst_12939);
(statearr_13006_13046[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 4))
{var inst_12939 = (state_13000[7]);var inst_12945 = (state_13000[2]);var inst_12946 = cljs.core.get.call(null,inst_12945,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12947 = cljs.core.get.call(null,inst_12945,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12948 = cljs.core.get.call(null,inst_12945,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_12949 = inst_12939;var state_13000__$1 = (function (){var statearr_13007 = state_13000;(statearr_13007[8] = inst_12946);
(statearr_13007[9] = inst_12948);
(statearr_13007[10] = inst_12947);
(statearr_13007[11] = inst_12949);
return statearr_13007;
})();var statearr_13008_13047 = state_13000__$1;(statearr_13008_13047[2] = null);
(statearr_13008_13047[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 5))
{var inst_12949 = (state_13000[11]);var inst_12952 = cljs.core.seq_QMARK_.call(null,inst_12949);var state_13000__$1 = state_13000;if(inst_12952)
{var statearr_13009_13048 = state_13000__$1;(statearr_13009_13048[1] = 7);
} else
{var statearr_13010_13049 = state_13000__$1;(statearr_13010_13049[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 6))
{var inst_12998 = (state_13000[2]);var state_13000__$1 = state_13000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13000__$1,inst_12998);
} else
{if((state_val_13001 === 7))
{var inst_12949 = (state_13000[11]);var inst_12954 = cljs.core.apply.call(null,cljs.core.hash_map,inst_12949);var state_13000__$1 = state_13000;var statearr_13011_13050 = state_13000__$1;(statearr_13011_13050[2] = inst_12954);
(statearr_13011_13050[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 8))
{var inst_12949 = (state_13000[11]);var state_13000__$1 = state_13000;var statearr_13012_13051 = state_13000__$1;(statearr_13012_13051[2] = inst_12949);
(statearr_13012_13051[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 9))
{var inst_12957 = (state_13000[12]);var inst_12957__$1 = (state_13000[2]);var inst_12958 = cljs.core.get.call(null,inst_12957__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_12959 = cljs.core.get.call(null,inst_12957__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_12960 = cljs.core.get.call(null,inst_12957__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13000__$1 = (function (){var statearr_13013 = state_13000;(statearr_13013[12] = inst_12957__$1);
(statearr_13013[13] = inst_12959);
(statearr_13013[14] = inst_12960);
return statearr_13013;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13000__$1,10,inst_12958);
} else
{if((state_val_13001 === 10))
{var inst_12964 = (state_13000[15]);var inst_12965 = (state_13000[16]);var inst_12963 = (state_13000[2]);var inst_12964__$1 = cljs.core.nth.call(null,inst_12963,0,null);var inst_12965__$1 = cljs.core.nth.call(null,inst_12963,1,null);var inst_12966 = (inst_12964__$1 == null);var inst_12967 = cljs.core._EQ_.call(null,inst_12965__$1,change);var inst_12968 = (inst_12966) || (inst_12967);var state_13000__$1 = (function (){var statearr_13014 = state_13000;(statearr_13014[15] = inst_12964__$1);
(statearr_13014[16] = inst_12965__$1);
return statearr_13014;
})();if(cljs.core.truth_(inst_12968))
{var statearr_13015_13052 = state_13000__$1;(statearr_13015_13052[1] = 11);
} else
{var statearr_13016_13053 = state_13000__$1;(statearr_13016_13053[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 11))
{var inst_12964 = (state_13000[15]);var inst_12970 = (inst_12964 == null);var state_13000__$1 = state_13000;if(cljs.core.truth_(inst_12970))
{var statearr_13017_13054 = state_13000__$1;(statearr_13017_13054[1] = 14);
} else
{var statearr_13018_13055 = state_13000__$1;(statearr_13018_13055[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 12))
{var inst_12979 = (state_13000[17]);var inst_12965 = (state_13000[16]);var inst_12960 = (state_13000[14]);var inst_12979__$1 = inst_12960.call(null,inst_12965);var state_13000__$1 = (function (){var statearr_13019 = state_13000;(statearr_13019[17] = inst_12979__$1);
return statearr_13019;
})();if(cljs.core.truth_(inst_12979__$1))
{var statearr_13020_13056 = state_13000__$1;(statearr_13020_13056[1] = 17);
} else
{var statearr_13021_13057 = state_13000__$1;(statearr_13021_13057[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 13))
{var inst_12996 = (state_13000[2]);var state_13000__$1 = state_13000;var statearr_13022_13058 = state_13000__$1;(statearr_13022_13058[2] = inst_12996);
(statearr_13022_13058[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 14))
{var inst_12965 = (state_13000[16]);var inst_12972 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_12965);var state_13000__$1 = state_13000;var statearr_13023_13059 = state_13000__$1;(statearr_13023_13059[2] = inst_12972);
(statearr_13023_13059[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 15))
{var state_13000__$1 = state_13000;var statearr_13024_13060 = state_13000__$1;(statearr_13024_13060[2] = null);
(statearr_13024_13060[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 16))
{var inst_12975 = (state_13000[2]);var inst_12976 = calc_state.call(null);var inst_12949 = inst_12976;var state_13000__$1 = (function (){var statearr_13025 = state_13000;(statearr_13025[18] = inst_12975);
(statearr_13025[11] = inst_12949);
return statearr_13025;
})();var statearr_13026_13061 = state_13000__$1;(statearr_13026_13061[2] = null);
(statearr_13026_13061[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 17))
{var inst_12979 = (state_13000[17]);var state_13000__$1 = state_13000;var statearr_13027_13062 = state_13000__$1;(statearr_13027_13062[2] = inst_12979);
(statearr_13027_13062[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 18))
{var inst_12959 = (state_13000[13]);var inst_12965 = (state_13000[16]);var inst_12960 = (state_13000[14]);var inst_12982 = cljs.core.empty_QMARK_.call(null,inst_12960);var inst_12983 = inst_12959.call(null,inst_12965);var inst_12984 = cljs.core.not.call(null,inst_12983);var inst_12985 = (inst_12982) && (inst_12984);var state_13000__$1 = state_13000;var statearr_13028_13063 = state_13000__$1;(statearr_13028_13063[2] = inst_12985);
(statearr_13028_13063[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 19))
{var inst_12987 = (state_13000[2]);var state_13000__$1 = state_13000;if(cljs.core.truth_(inst_12987))
{var statearr_13029_13064 = state_13000__$1;(statearr_13029_13064[1] = 20);
} else
{var statearr_13030_13065 = state_13000__$1;(statearr_13030_13065[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 20))
{var inst_12964 = (state_13000[15]);var state_13000__$1 = state_13000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13000__$1,23,out,inst_12964);
} else
{if((state_val_13001 === 21))
{var state_13000__$1 = state_13000;var statearr_13031_13066 = state_13000__$1;(statearr_13031_13066[2] = null);
(statearr_13031_13066[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 22))
{var inst_12957 = (state_13000[12]);var inst_12993 = (state_13000[2]);var inst_12949 = inst_12957;var state_13000__$1 = (function (){var statearr_13032 = state_13000;(statearr_13032[19] = inst_12993);
(statearr_13032[11] = inst_12949);
return statearr_13032;
})();var statearr_13033_13067 = state_13000__$1;(statearr_13033_13067[2] = null);
(statearr_13033_13067[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13001 === 23))
{var inst_12990 = (state_13000[2]);var state_13000__$1 = state_13000;var statearr_13034_13068 = state_13000__$1;(statearr_13034_13068[2] = inst_12990);
(statearr_13034_13068[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13038 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13038[0] = state_machine__5507__auto__);
(statearr_13038[1] = 1);
return statearr_13038;
});
var state_machine__5507__auto____1 = (function (state_13000){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13000);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13039){if((e13039 instanceof Object))
{var ex__5510__auto__ = e13039;var statearr_13040_13069 = state_13000;(statearr_13040_13069[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13000);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13039;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13070 = state_13000;
state_13000 = G__13070;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13000){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13041 = f__5522__auto__.call(null);(statearr_13041[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13042);
return statearr_13041;
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
cljs.core.async.Pub = (function (){var obj13072 = {};return obj13072;
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
return (function (p1__13073_SHARP_){if(cljs.core.truth_(p1__13073_SHARP_.call(null,topic)))
{return p1__13073_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13073_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13198 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13198 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13199){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13199 = meta13199;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13198.cljs$lang$type = true;
cljs.core.async.t13198.cljs$lang$ctorStr = "cljs.core.async/t13198";
cljs.core.async.t13198.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13198");
});})(mults,ensure_mult))
;
cljs.core.async.t13198.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13198.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13198.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13198.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13198.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13198.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13198.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13200){var self__ = this;
var _13200__$1 = this;return self__.meta13199;
});})(mults,ensure_mult))
;
cljs.core.async.t13198.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13200,meta13199__$1){var self__ = this;
var _13200__$1 = this;return (new cljs.core.async.t13198(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13199__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13198 = ((function (mults,ensure_mult){
return (function __GT_t13198(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13199){return (new cljs.core.async.t13198(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13199));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13198(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13322 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13274){var state_val_13275 = (state_13274[1]);if((state_val_13275 === 1))
{var state_13274__$1 = state_13274;var statearr_13276_13323 = state_13274__$1;(statearr_13276_13323[2] = null);
(statearr_13276_13323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 2))
{var state_13274__$1 = state_13274;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13274__$1,4,ch);
} else
{if((state_val_13275 === 3))
{var inst_13272 = (state_13274[2]);var state_13274__$1 = state_13274;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13274__$1,inst_13272);
} else
{if((state_val_13275 === 4))
{var inst_13203 = (state_13274[7]);var inst_13203__$1 = (state_13274[2]);var inst_13204 = (inst_13203__$1 == null);var state_13274__$1 = (function (){var statearr_13277 = state_13274;(statearr_13277[7] = inst_13203__$1);
return statearr_13277;
})();if(cljs.core.truth_(inst_13204))
{var statearr_13278_13324 = state_13274__$1;(statearr_13278_13324[1] = 5);
} else
{var statearr_13279_13325 = state_13274__$1;(statearr_13279_13325[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 5))
{var inst_13210 = cljs.core.deref.call(null,mults);var inst_13211 = cljs.core.vals.call(null,inst_13210);var inst_13212 = cljs.core.seq.call(null,inst_13211);var inst_13213 = inst_13212;var inst_13214 = null;var inst_13215 = 0;var inst_13216 = 0;var state_13274__$1 = (function (){var statearr_13280 = state_13274;(statearr_13280[8] = inst_13216);
(statearr_13280[9] = inst_13215);
(statearr_13280[10] = inst_13214);
(statearr_13280[11] = inst_13213);
return statearr_13280;
})();var statearr_13281_13326 = state_13274__$1;(statearr_13281_13326[2] = null);
(statearr_13281_13326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 6))
{var inst_13203 = (state_13274[7]);var inst_13253 = (state_13274[12]);var inst_13251 = (state_13274[13]);var inst_13251__$1 = topic_fn.call(null,inst_13203);var inst_13252 = cljs.core.deref.call(null,mults);var inst_13253__$1 = cljs.core.get.call(null,inst_13252,inst_13251__$1);var state_13274__$1 = (function (){var statearr_13282 = state_13274;(statearr_13282[12] = inst_13253__$1);
(statearr_13282[13] = inst_13251__$1);
return statearr_13282;
})();if(cljs.core.truth_(inst_13253__$1))
{var statearr_13283_13327 = state_13274__$1;(statearr_13283_13327[1] = 19);
} else
{var statearr_13284_13328 = state_13274__$1;(statearr_13284_13328[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 7))
{var inst_13270 = (state_13274[2]);var state_13274__$1 = state_13274;var statearr_13285_13329 = state_13274__$1;(statearr_13285_13329[2] = inst_13270);
(statearr_13285_13329[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 8))
{var inst_13216 = (state_13274[8]);var inst_13215 = (state_13274[9]);var inst_13218 = (inst_13216 < inst_13215);var inst_13219 = inst_13218;var state_13274__$1 = state_13274;if(cljs.core.truth_(inst_13219))
{var statearr_13289_13330 = state_13274__$1;(statearr_13289_13330[1] = 10);
} else
{var statearr_13290_13331 = state_13274__$1;(statearr_13290_13331[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 9))
{var inst_13249 = (state_13274[2]);var state_13274__$1 = state_13274;var statearr_13291_13332 = state_13274__$1;(statearr_13291_13332[2] = inst_13249);
(statearr_13291_13332[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 10))
{var inst_13216 = (state_13274[8]);var inst_13215 = (state_13274[9]);var inst_13214 = (state_13274[10]);var inst_13213 = (state_13274[11]);var inst_13221 = cljs.core._nth.call(null,inst_13214,inst_13216);var inst_13222 = cljs.core.async.muxch_STAR_.call(null,inst_13221);var inst_13223 = cljs.core.async.close_BANG_.call(null,inst_13222);var inst_13224 = (inst_13216 + 1);var tmp13286 = inst_13215;var tmp13287 = inst_13214;var tmp13288 = inst_13213;var inst_13213__$1 = tmp13288;var inst_13214__$1 = tmp13287;var inst_13215__$1 = tmp13286;var inst_13216__$1 = inst_13224;var state_13274__$1 = (function (){var statearr_13292 = state_13274;(statearr_13292[8] = inst_13216__$1);
(statearr_13292[14] = inst_13223);
(statearr_13292[9] = inst_13215__$1);
(statearr_13292[10] = inst_13214__$1);
(statearr_13292[11] = inst_13213__$1);
return statearr_13292;
})();var statearr_13293_13333 = state_13274__$1;(statearr_13293_13333[2] = null);
(statearr_13293_13333[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 11))
{var inst_13227 = (state_13274[15]);var inst_13213 = (state_13274[11]);var inst_13227__$1 = cljs.core.seq.call(null,inst_13213);var state_13274__$1 = (function (){var statearr_13294 = state_13274;(statearr_13294[15] = inst_13227__$1);
return statearr_13294;
})();if(inst_13227__$1)
{var statearr_13295_13334 = state_13274__$1;(statearr_13295_13334[1] = 13);
} else
{var statearr_13296_13335 = state_13274__$1;(statearr_13296_13335[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 12))
{var inst_13247 = (state_13274[2]);var state_13274__$1 = state_13274;var statearr_13297_13336 = state_13274__$1;(statearr_13297_13336[2] = inst_13247);
(statearr_13297_13336[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 13))
{var inst_13227 = (state_13274[15]);var inst_13229 = cljs.core.chunked_seq_QMARK_.call(null,inst_13227);var state_13274__$1 = state_13274;if(inst_13229)
{var statearr_13298_13337 = state_13274__$1;(statearr_13298_13337[1] = 16);
} else
{var statearr_13299_13338 = state_13274__$1;(statearr_13299_13338[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 14))
{var state_13274__$1 = state_13274;var statearr_13300_13339 = state_13274__$1;(statearr_13300_13339[2] = null);
(statearr_13300_13339[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 15))
{var inst_13245 = (state_13274[2]);var state_13274__$1 = state_13274;var statearr_13301_13340 = state_13274__$1;(statearr_13301_13340[2] = inst_13245);
(statearr_13301_13340[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 16))
{var inst_13227 = (state_13274[15]);var inst_13231 = cljs.core.chunk_first.call(null,inst_13227);var inst_13232 = cljs.core.chunk_rest.call(null,inst_13227);var inst_13233 = cljs.core.count.call(null,inst_13231);var inst_13213 = inst_13232;var inst_13214 = inst_13231;var inst_13215 = inst_13233;var inst_13216 = 0;var state_13274__$1 = (function (){var statearr_13302 = state_13274;(statearr_13302[8] = inst_13216);
(statearr_13302[9] = inst_13215);
(statearr_13302[10] = inst_13214);
(statearr_13302[11] = inst_13213);
return statearr_13302;
})();var statearr_13303_13341 = state_13274__$1;(statearr_13303_13341[2] = null);
(statearr_13303_13341[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 17))
{var inst_13227 = (state_13274[15]);var inst_13236 = cljs.core.first.call(null,inst_13227);var inst_13237 = cljs.core.async.muxch_STAR_.call(null,inst_13236);var inst_13238 = cljs.core.async.close_BANG_.call(null,inst_13237);var inst_13239 = cljs.core.next.call(null,inst_13227);var inst_13213 = inst_13239;var inst_13214 = null;var inst_13215 = 0;var inst_13216 = 0;var state_13274__$1 = (function (){var statearr_13304 = state_13274;(statearr_13304[16] = inst_13238);
(statearr_13304[8] = inst_13216);
(statearr_13304[9] = inst_13215);
(statearr_13304[10] = inst_13214);
(statearr_13304[11] = inst_13213);
return statearr_13304;
})();var statearr_13305_13342 = state_13274__$1;(statearr_13305_13342[2] = null);
(statearr_13305_13342[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 18))
{var inst_13242 = (state_13274[2]);var state_13274__$1 = state_13274;var statearr_13306_13343 = state_13274__$1;(statearr_13306_13343[2] = inst_13242);
(statearr_13306_13343[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 19))
{var state_13274__$1 = state_13274;var statearr_13307_13344 = state_13274__$1;(statearr_13307_13344[2] = null);
(statearr_13307_13344[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 20))
{var state_13274__$1 = state_13274;var statearr_13308_13345 = state_13274__$1;(statearr_13308_13345[2] = null);
(statearr_13308_13345[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 21))
{var inst_13267 = (state_13274[2]);var state_13274__$1 = (function (){var statearr_13309 = state_13274;(statearr_13309[17] = inst_13267);
return statearr_13309;
})();var statearr_13310_13346 = state_13274__$1;(statearr_13310_13346[2] = null);
(statearr_13310_13346[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 22))
{var inst_13264 = (state_13274[2]);var state_13274__$1 = state_13274;var statearr_13311_13347 = state_13274__$1;(statearr_13311_13347[2] = inst_13264);
(statearr_13311_13347[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 23))
{var inst_13251 = (state_13274[13]);var inst_13255 = (state_13274[2]);var inst_13256 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13251);var state_13274__$1 = (function (){var statearr_13312 = state_13274;(statearr_13312[18] = inst_13255);
return statearr_13312;
})();var statearr_13313_13348 = state_13274__$1;(statearr_13313_13348[2] = inst_13256);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13274__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13275 === 24))
{var inst_13203 = (state_13274[7]);var inst_13253 = (state_13274[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13274,23,Object,null,22);var inst_13260 = cljs.core.async.muxch_STAR_.call(null,inst_13253);var state_13274__$1 = state_13274;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13274__$1,25,inst_13260,inst_13203);
} else
{if((state_val_13275 === 25))
{var inst_13262 = (state_13274[2]);var state_13274__$1 = state_13274;var statearr_13314_13349 = state_13274__$1;(statearr_13314_13349[2] = inst_13262);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13274__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13318 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13318[0] = state_machine__5507__auto__);
(statearr_13318[1] = 1);
return statearr_13318;
});
var state_machine__5507__auto____1 = (function (state_13274){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13274);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13319){if((e13319 instanceof Object))
{var ex__5510__auto__ = e13319;var statearr_13320_13350 = state_13274;(statearr_13320_13350[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13274);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13319;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13351 = state_13274;
state_13274 = G__13351;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13274){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13274);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13321 = f__5522__auto__.call(null);(statearr_13321[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13322);
return statearr_13321;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13488 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13458){var state_val_13459 = (state_13458[1]);if((state_val_13459 === 1))
{var state_13458__$1 = state_13458;var statearr_13460_13489 = state_13458__$1;(statearr_13460_13489[2] = null);
(statearr_13460_13489[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 2))
{var inst_13421 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13422 = 0;var state_13458__$1 = (function (){var statearr_13461 = state_13458;(statearr_13461[7] = inst_13422);
(statearr_13461[8] = inst_13421);
return statearr_13461;
})();var statearr_13462_13490 = state_13458__$1;(statearr_13462_13490[2] = null);
(statearr_13462_13490[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 3))
{var inst_13456 = (state_13458[2]);var state_13458__$1 = state_13458;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13458__$1,inst_13456);
} else
{if((state_val_13459 === 4))
{var inst_13422 = (state_13458[7]);var inst_13424 = (inst_13422 < cnt);var state_13458__$1 = state_13458;if(cljs.core.truth_(inst_13424))
{var statearr_13463_13491 = state_13458__$1;(statearr_13463_13491[1] = 6);
} else
{var statearr_13464_13492 = state_13458__$1;(statearr_13464_13492[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 5))
{var inst_13442 = (state_13458[2]);var state_13458__$1 = (function (){var statearr_13465 = state_13458;(statearr_13465[9] = inst_13442);
return statearr_13465;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13458__$1,12,dchan);
} else
{if((state_val_13459 === 6))
{var state_13458__$1 = state_13458;var statearr_13466_13493 = state_13458__$1;(statearr_13466_13493[2] = null);
(statearr_13466_13493[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 7))
{var state_13458__$1 = state_13458;var statearr_13467_13494 = state_13458__$1;(statearr_13467_13494[2] = null);
(statearr_13467_13494[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 8))
{var inst_13440 = (state_13458[2]);var state_13458__$1 = state_13458;var statearr_13468_13495 = state_13458__$1;(statearr_13468_13495[2] = inst_13440);
(statearr_13468_13495[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 9))
{var inst_13422 = (state_13458[7]);var inst_13435 = (state_13458[2]);var inst_13436 = (inst_13422 + 1);var inst_13422__$1 = inst_13436;var state_13458__$1 = (function (){var statearr_13469 = state_13458;(statearr_13469[10] = inst_13435);
(statearr_13469[7] = inst_13422__$1);
return statearr_13469;
})();var statearr_13470_13496 = state_13458__$1;(statearr_13470_13496[2] = null);
(statearr_13470_13496[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 10))
{var inst_13426 = (state_13458[2]);var inst_13427 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13458__$1 = (function (){var statearr_13471 = state_13458;(statearr_13471[11] = inst_13426);
return statearr_13471;
})();var statearr_13472_13497 = state_13458__$1;(statearr_13472_13497[2] = inst_13427);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13458__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 11))
{var inst_13422 = (state_13458[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13458,10,Object,null,9);var inst_13431 = chs__$1.call(null,inst_13422);var inst_13432 = done.call(null,inst_13422);var inst_13433 = cljs.core.async.take_BANG_.call(null,inst_13431,inst_13432);var state_13458__$1 = state_13458;var statearr_13473_13498 = state_13458__$1;(statearr_13473_13498[2] = inst_13433);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13458__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 12))
{var inst_13444 = (state_13458[12]);var inst_13444__$1 = (state_13458[2]);var inst_13445 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13444__$1);var state_13458__$1 = (function (){var statearr_13474 = state_13458;(statearr_13474[12] = inst_13444__$1);
return statearr_13474;
})();if(cljs.core.truth_(inst_13445))
{var statearr_13475_13499 = state_13458__$1;(statearr_13475_13499[1] = 13);
} else
{var statearr_13476_13500 = state_13458__$1;(statearr_13476_13500[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 13))
{var inst_13447 = cljs.core.async.close_BANG_.call(null,out);var state_13458__$1 = state_13458;var statearr_13477_13501 = state_13458__$1;(statearr_13477_13501[2] = inst_13447);
(statearr_13477_13501[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 14))
{var inst_13444 = (state_13458[12]);var inst_13449 = cljs.core.apply.call(null,f,inst_13444);var state_13458__$1 = state_13458;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13458__$1,16,out,inst_13449);
} else
{if((state_val_13459 === 15))
{var inst_13454 = (state_13458[2]);var state_13458__$1 = state_13458;var statearr_13478_13502 = state_13458__$1;(statearr_13478_13502[2] = inst_13454);
(statearr_13478_13502[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13459 === 16))
{var inst_13451 = (state_13458[2]);var state_13458__$1 = (function (){var statearr_13479 = state_13458;(statearr_13479[13] = inst_13451);
return statearr_13479;
})();var statearr_13480_13503 = state_13458__$1;(statearr_13480_13503[2] = null);
(statearr_13480_13503[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13484 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13484[0] = state_machine__5507__auto__);
(statearr_13484[1] = 1);
return statearr_13484;
});
var state_machine__5507__auto____1 = (function (state_13458){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13458);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13485){if((e13485 instanceof Object))
{var ex__5510__auto__ = e13485;var statearr_13486_13504 = state_13458;(statearr_13486_13504[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13458);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13505 = state_13458;
state_13458 = G__13505;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13458){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13458);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13487 = f__5522__auto__.call(null);(statearr_13487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13488);
return statearr_13487;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13613 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13589){var state_val_13590 = (state_13589[1]);if((state_val_13590 === 1))
{var inst_13560 = cljs.core.vec.call(null,chs);var inst_13561 = inst_13560;var state_13589__$1 = (function (){var statearr_13591 = state_13589;(statearr_13591[7] = inst_13561);
return statearr_13591;
})();var statearr_13592_13614 = state_13589__$1;(statearr_13592_13614[2] = null);
(statearr_13592_13614[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 2))
{var inst_13561 = (state_13589[7]);var inst_13563 = cljs.core.count.call(null,inst_13561);var inst_13564 = (inst_13563 > 0);var state_13589__$1 = state_13589;if(cljs.core.truth_(inst_13564))
{var statearr_13593_13615 = state_13589__$1;(statearr_13593_13615[1] = 4);
} else
{var statearr_13594_13616 = state_13589__$1;(statearr_13594_13616[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 3))
{var inst_13587 = (state_13589[2]);var state_13589__$1 = state_13589;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13589__$1,inst_13587);
} else
{if((state_val_13590 === 4))
{var inst_13561 = (state_13589[7]);var state_13589__$1 = state_13589;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13589__$1,7,inst_13561);
} else
{if((state_val_13590 === 5))
{var inst_13583 = cljs.core.async.close_BANG_.call(null,out);var state_13589__$1 = state_13589;var statearr_13595_13617 = state_13589__$1;(statearr_13595_13617[2] = inst_13583);
(statearr_13595_13617[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 6))
{var inst_13585 = (state_13589[2]);var state_13589__$1 = state_13589;var statearr_13596_13618 = state_13589__$1;(statearr_13596_13618[2] = inst_13585);
(statearr_13596_13618[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 7))
{var inst_13568 = (state_13589[8]);var inst_13569 = (state_13589[9]);var inst_13568__$1 = (state_13589[2]);var inst_13569__$1 = cljs.core.nth.call(null,inst_13568__$1,0,null);var inst_13570 = cljs.core.nth.call(null,inst_13568__$1,1,null);var inst_13571 = (inst_13569__$1 == null);var state_13589__$1 = (function (){var statearr_13597 = state_13589;(statearr_13597[10] = inst_13570);
(statearr_13597[8] = inst_13568__$1);
(statearr_13597[9] = inst_13569__$1);
return statearr_13597;
})();if(cljs.core.truth_(inst_13571))
{var statearr_13598_13619 = state_13589__$1;(statearr_13598_13619[1] = 8);
} else
{var statearr_13599_13620 = state_13589__$1;(statearr_13599_13620[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 8))
{var inst_13561 = (state_13589[7]);var inst_13570 = (state_13589[10]);var inst_13568 = (state_13589[8]);var inst_13569 = (state_13589[9]);var inst_13573 = (function (){var c = inst_13570;var v = inst_13569;var vec__13566 = inst_13568;var cs = inst_13561;return ((function (c,v,vec__13566,cs,inst_13561,inst_13570,inst_13568,inst_13569,state_val_13590){
return (function (p1__13506_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13506_SHARP_);
});
;})(c,v,vec__13566,cs,inst_13561,inst_13570,inst_13568,inst_13569,state_val_13590))
})();var inst_13574 = cljs.core.filterv.call(null,inst_13573,inst_13561);var inst_13561__$1 = inst_13574;var state_13589__$1 = (function (){var statearr_13600 = state_13589;(statearr_13600[7] = inst_13561__$1);
return statearr_13600;
})();var statearr_13601_13621 = state_13589__$1;(statearr_13601_13621[2] = null);
(statearr_13601_13621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 9))
{var inst_13569 = (state_13589[9]);var state_13589__$1 = state_13589;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13589__$1,11,out,inst_13569);
} else
{if((state_val_13590 === 10))
{var inst_13581 = (state_13589[2]);var state_13589__$1 = state_13589;var statearr_13603_13622 = state_13589__$1;(statearr_13603_13622[2] = inst_13581);
(statearr_13603_13622[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13590 === 11))
{var inst_13561 = (state_13589[7]);var inst_13578 = (state_13589[2]);var tmp13602 = inst_13561;var inst_13561__$1 = tmp13602;var state_13589__$1 = (function (){var statearr_13604 = state_13589;(statearr_13604[7] = inst_13561__$1);
(statearr_13604[11] = inst_13578);
return statearr_13604;
})();var statearr_13605_13623 = state_13589__$1;(statearr_13605_13623[2] = null);
(statearr_13605_13623[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13609 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13609[0] = state_machine__5507__auto__);
(statearr_13609[1] = 1);
return statearr_13609;
});
var state_machine__5507__auto____1 = (function (state_13589){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13589);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13610){if((e13610 instanceof Object))
{var ex__5510__auto__ = e13610;var statearr_13611_13624 = state_13589;(statearr_13611_13624[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13589);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13610;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13625 = state_13589;
state_13589 = G__13625;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13589){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13589);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13612 = f__5522__auto__.call(null);(statearr_13612[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13613);
return statearr_13612;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13718 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13695){var state_val_13696 = (state_13695[1]);if((state_val_13696 === 1))
{var inst_13672 = 0;var state_13695__$1 = (function (){var statearr_13697 = state_13695;(statearr_13697[7] = inst_13672);
return statearr_13697;
})();var statearr_13698_13719 = state_13695__$1;(statearr_13698_13719[2] = null);
(statearr_13698_13719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 2))
{var inst_13672 = (state_13695[7]);var inst_13674 = (inst_13672 < n);var state_13695__$1 = state_13695;if(cljs.core.truth_(inst_13674))
{var statearr_13699_13720 = state_13695__$1;(statearr_13699_13720[1] = 4);
} else
{var statearr_13700_13721 = state_13695__$1;(statearr_13700_13721[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 3))
{var inst_13692 = (state_13695[2]);var inst_13693 = cljs.core.async.close_BANG_.call(null,out);var state_13695__$1 = (function (){var statearr_13701 = state_13695;(statearr_13701[8] = inst_13692);
return statearr_13701;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13695__$1,inst_13693);
} else
{if((state_val_13696 === 4))
{var state_13695__$1 = state_13695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13695__$1,7,ch);
} else
{if((state_val_13696 === 5))
{var state_13695__$1 = state_13695;var statearr_13702_13722 = state_13695__$1;(statearr_13702_13722[2] = null);
(statearr_13702_13722[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 6))
{var inst_13690 = (state_13695[2]);var state_13695__$1 = state_13695;var statearr_13703_13723 = state_13695__$1;(statearr_13703_13723[2] = inst_13690);
(statearr_13703_13723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 7))
{var inst_13677 = (state_13695[9]);var inst_13677__$1 = (state_13695[2]);var inst_13678 = (inst_13677__$1 == null);var inst_13679 = cljs.core.not.call(null,inst_13678);var state_13695__$1 = (function (){var statearr_13704 = state_13695;(statearr_13704[9] = inst_13677__$1);
return statearr_13704;
})();if(inst_13679)
{var statearr_13705_13724 = state_13695__$1;(statearr_13705_13724[1] = 8);
} else
{var statearr_13706_13725 = state_13695__$1;(statearr_13706_13725[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 8))
{var inst_13677 = (state_13695[9]);var state_13695__$1 = state_13695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13695__$1,11,out,inst_13677);
} else
{if((state_val_13696 === 9))
{var state_13695__$1 = state_13695;var statearr_13707_13726 = state_13695__$1;(statearr_13707_13726[2] = null);
(statearr_13707_13726[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 10))
{var inst_13687 = (state_13695[2]);var state_13695__$1 = state_13695;var statearr_13708_13727 = state_13695__$1;(statearr_13708_13727[2] = inst_13687);
(statearr_13708_13727[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13696 === 11))
{var inst_13672 = (state_13695[7]);var inst_13682 = (state_13695[2]);var inst_13683 = (inst_13672 + 1);var inst_13672__$1 = inst_13683;var state_13695__$1 = (function (){var statearr_13709 = state_13695;(statearr_13709[7] = inst_13672__$1);
(statearr_13709[10] = inst_13682);
return statearr_13709;
})();var statearr_13710_13728 = state_13695__$1;(statearr_13710_13728[2] = null);
(statearr_13710_13728[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13714 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13714[0] = state_machine__5507__auto__);
(statearr_13714[1] = 1);
return statearr_13714;
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
}catch (e13715){if((e13715 instanceof Object))
{var ex__5510__auto__ = e13715;var statearr_13716_13729 = state_13695;(statearr_13716_13729[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13715;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13730 = state_13695;
state_13695 = G__13730;
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
})();var state__5523__auto__ = (function (){var statearr_13717 = f__5522__auto__.call(null);(statearr_13717[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13718);
return statearr_13717;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13827 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13802){var state_val_13803 = (state_13802[1]);if((state_val_13803 === 1))
{var inst_13779 = null;var state_13802__$1 = (function (){var statearr_13804 = state_13802;(statearr_13804[7] = inst_13779);
return statearr_13804;
})();var statearr_13805_13828 = state_13802__$1;(statearr_13805_13828[2] = null);
(statearr_13805_13828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13803 === 2))
{var state_13802__$1 = state_13802;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13802__$1,4,ch);
} else
{if((state_val_13803 === 3))
{var inst_13799 = (state_13802[2]);var inst_13800 = cljs.core.async.close_BANG_.call(null,out);var state_13802__$1 = (function (){var statearr_13806 = state_13802;(statearr_13806[8] = inst_13799);
return statearr_13806;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13802__$1,inst_13800);
} else
{if((state_val_13803 === 4))
{var inst_13782 = (state_13802[9]);var inst_13782__$1 = (state_13802[2]);var inst_13783 = (inst_13782__$1 == null);var inst_13784 = cljs.core.not.call(null,inst_13783);var state_13802__$1 = (function (){var statearr_13807 = state_13802;(statearr_13807[9] = inst_13782__$1);
return statearr_13807;
})();if(inst_13784)
{var statearr_13808_13829 = state_13802__$1;(statearr_13808_13829[1] = 5);
} else
{var statearr_13809_13830 = state_13802__$1;(statearr_13809_13830[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13803 === 5))
{var inst_13779 = (state_13802[7]);var inst_13782 = (state_13802[9]);var inst_13786 = cljs.core._EQ_.call(null,inst_13782,inst_13779);var state_13802__$1 = state_13802;if(inst_13786)
{var statearr_13810_13831 = state_13802__$1;(statearr_13810_13831[1] = 8);
} else
{var statearr_13811_13832 = state_13802__$1;(statearr_13811_13832[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13803 === 6))
{var state_13802__$1 = state_13802;var statearr_13813_13833 = state_13802__$1;(statearr_13813_13833[2] = null);
(statearr_13813_13833[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13803 === 7))
{var inst_13797 = (state_13802[2]);var state_13802__$1 = state_13802;var statearr_13814_13834 = state_13802__$1;(statearr_13814_13834[2] = inst_13797);
(statearr_13814_13834[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13803 === 8))
{var inst_13779 = (state_13802[7]);var tmp13812 = inst_13779;var inst_13779__$1 = tmp13812;var state_13802__$1 = (function (){var statearr_13815 = state_13802;(statearr_13815[7] = inst_13779__$1);
return statearr_13815;
})();var statearr_13816_13835 = state_13802__$1;(statearr_13816_13835[2] = null);
(statearr_13816_13835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13803 === 9))
{var inst_13782 = (state_13802[9]);var state_13802__$1 = state_13802;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13802__$1,11,out,inst_13782);
} else
{if((state_val_13803 === 10))
{var inst_13794 = (state_13802[2]);var state_13802__$1 = state_13802;var statearr_13817_13836 = state_13802__$1;(statearr_13817_13836[2] = inst_13794);
(statearr_13817_13836[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13803 === 11))
{var inst_13782 = (state_13802[9]);var inst_13791 = (state_13802[2]);var inst_13779 = inst_13782;var state_13802__$1 = (function (){var statearr_13818 = state_13802;(statearr_13818[10] = inst_13791);
(statearr_13818[7] = inst_13779);
return statearr_13818;
})();var statearr_13819_13837 = state_13802__$1;(statearr_13819_13837[2] = null);
(statearr_13819_13837[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13823 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_13823[0] = state_machine__5507__auto__);
(statearr_13823[1] = 1);
return statearr_13823;
});
var state_machine__5507__auto____1 = (function (state_13802){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13802);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13824){if((e13824 instanceof Object))
{var ex__5510__auto__ = e13824;var statearr_13825_13838 = state_13802;(statearr_13825_13838[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13802);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13824;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13839 = state_13802;
state_13802 = G__13839;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13802){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13826 = f__5522__auto__.call(null);(statearr_13826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13827);
return statearr_13826;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13974 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13944){var state_val_13945 = (state_13944[1]);if((state_val_13945 === 1))
{var inst_13907 = (new Array(n));var inst_13908 = inst_13907;var inst_13909 = 0;var state_13944__$1 = (function (){var statearr_13946 = state_13944;(statearr_13946[7] = inst_13908);
(statearr_13946[8] = inst_13909);
return statearr_13946;
})();var statearr_13947_13975 = state_13944__$1;(statearr_13947_13975[2] = null);
(statearr_13947_13975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 2))
{var state_13944__$1 = state_13944;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13944__$1,4,ch);
} else
{if((state_val_13945 === 3))
{var inst_13942 = (state_13944[2]);var state_13944__$1 = state_13944;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13944__$1,inst_13942);
} else
{if((state_val_13945 === 4))
{var inst_13912 = (state_13944[9]);var inst_13912__$1 = (state_13944[2]);var inst_13913 = (inst_13912__$1 == null);var inst_13914 = cljs.core.not.call(null,inst_13913);var state_13944__$1 = (function (){var statearr_13948 = state_13944;(statearr_13948[9] = inst_13912__$1);
return statearr_13948;
})();if(inst_13914)
{var statearr_13949_13976 = state_13944__$1;(statearr_13949_13976[1] = 5);
} else
{var statearr_13950_13977 = state_13944__$1;(statearr_13950_13977[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 5))
{var inst_13912 = (state_13944[9]);var inst_13908 = (state_13944[7]);var inst_13909 = (state_13944[8]);var inst_13917 = (state_13944[10]);var inst_13916 = (inst_13908[inst_13909] = inst_13912);var inst_13917__$1 = (inst_13909 + 1);var inst_13918 = (inst_13917__$1 < n);var state_13944__$1 = (function (){var statearr_13951 = state_13944;(statearr_13951[11] = inst_13916);
(statearr_13951[10] = inst_13917__$1);
return statearr_13951;
})();if(cljs.core.truth_(inst_13918))
{var statearr_13952_13978 = state_13944__$1;(statearr_13952_13978[1] = 8);
} else
{var statearr_13953_13979 = state_13944__$1;(statearr_13953_13979[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 6))
{var inst_13909 = (state_13944[8]);var inst_13930 = (inst_13909 > 0);var state_13944__$1 = state_13944;if(cljs.core.truth_(inst_13930))
{var statearr_13955_13980 = state_13944__$1;(statearr_13955_13980[1] = 12);
} else
{var statearr_13956_13981 = state_13944__$1;(statearr_13956_13981[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 7))
{var inst_13940 = (state_13944[2]);var state_13944__$1 = state_13944;var statearr_13957_13982 = state_13944__$1;(statearr_13957_13982[2] = inst_13940);
(statearr_13957_13982[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 8))
{var inst_13908 = (state_13944[7]);var inst_13917 = (state_13944[10]);var tmp13954 = inst_13908;var inst_13908__$1 = tmp13954;var inst_13909 = inst_13917;var state_13944__$1 = (function (){var statearr_13958 = state_13944;(statearr_13958[7] = inst_13908__$1);
(statearr_13958[8] = inst_13909);
return statearr_13958;
})();var statearr_13959_13983 = state_13944__$1;(statearr_13959_13983[2] = null);
(statearr_13959_13983[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 9))
{var inst_13908 = (state_13944[7]);var inst_13922 = cljs.core.vec.call(null,inst_13908);var state_13944__$1 = state_13944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13944__$1,11,out,inst_13922);
} else
{if((state_val_13945 === 10))
{var inst_13928 = (state_13944[2]);var state_13944__$1 = state_13944;var statearr_13960_13984 = state_13944__$1;(statearr_13960_13984[2] = inst_13928);
(statearr_13960_13984[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 11))
{var inst_13924 = (state_13944[2]);var inst_13925 = (new Array(n));var inst_13908 = inst_13925;var inst_13909 = 0;var state_13944__$1 = (function (){var statearr_13961 = state_13944;(statearr_13961[12] = inst_13924);
(statearr_13961[7] = inst_13908);
(statearr_13961[8] = inst_13909);
return statearr_13961;
})();var statearr_13962_13985 = state_13944__$1;(statearr_13962_13985[2] = null);
(statearr_13962_13985[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 12))
{var inst_13908 = (state_13944[7]);var inst_13932 = cljs.core.vec.call(null,inst_13908);var state_13944__$1 = state_13944;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13944__$1,15,out,inst_13932);
} else
{if((state_val_13945 === 13))
{var state_13944__$1 = state_13944;var statearr_13963_13986 = state_13944__$1;(statearr_13963_13986[2] = null);
(statearr_13963_13986[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 14))
{var inst_13937 = (state_13944[2]);var inst_13938 = cljs.core.async.close_BANG_.call(null,out);var state_13944__$1 = (function (){var statearr_13964 = state_13944;(statearr_13964[13] = inst_13937);
return statearr_13964;
})();var statearr_13965_13987 = state_13944__$1;(statearr_13965_13987[2] = inst_13938);
(statearr_13965_13987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13945 === 15))
{var inst_13934 = (state_13944[2]);var state_13944__$1 = state_13944;var statearr_13966_13988 = state_13944__$1;(statearr_13966_13988[2] = inst_13934);
(statearr_13966_13988[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_13970 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13970[0] = state_machine__5507__auto__);
(statearr_13970[1] = 1);
return statearr_13970;
});
var state_machine__5507__auto____1 = (function (state_13944){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13944);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13971){if((e13971 instanceof Object))
{var ex__5510__auto__ = e13971;var statearr_13972_13989 = state_13944;(statearr_13972_13989[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13944);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13971;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13990 = state_13944;
state_13944 = G__13990;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13944){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13944);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13973 = f__5522__auto__.call(null);(statearr_13973[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13974);
return statearr_13973;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14133 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14103){var state_val_14104 = (state_14103[1]);if((state_val_14104 === 1))
{var inst_14062 = [];var inst_14063 = inst_14062;var inst_14064 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14103__$1 = (function (){var statearr_14105 = state_14103;(statearr_14105[7] = inst_14063);
(statearr_14105[8] = inst_14064);
return statearr_14105;
})();var statearr_14106_14134 = state_14103__$1;(statearr_14106_14134[2] = null);
(statearr_14106_14134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 2))
{var state_14103__$1 = state_14103;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14103__$1,4,ch);
} else
{if((state_val_14104 === 3))
{var inst_14101 = (state_14103[2]);var state_14103__$1 = state_14103;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14103__$1,inst_14101);
} else
{if((state_val_14104 === 4))
{var inst_14067 = (state_14103[9]);var inst_14067__$1 = (state_14103[2]);var inst_14068 = (inst_14067__$1 == null);var inst_14069 = cljs.core.not.call(null,inst_14068);var state_14103__$1 = (function (){var statearr_14107 = state_14103;(statearr_14107[9] = inst_14067__$1);
return statearr_14107;
})();if(inst_14069)
{var statearr_14108_14135 = state_14103__$1;(statearr_14108_14135[1] = 5);
} else
{var statearr_14109_14136 = state_14103__$1;(statearr_14109_14136[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 5))
{var inst_14071 = (state_14103[10]);var inst_14067 = (state_14103[9]);var inst_14064 = (state_14103[8]);var inst_14071__$1 = f.call(null,inst_14067);var inst_14072 = cljs.core._EQ_.call(null,inst_14071__$1,inst_14064);var inst_14073 = cljs.core.keyword_identical_QMARK_.call(null,inst_14064,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14074 = (inst_14072) || (inst_14073);var state_14103__$1 = (function (){var statearr_14110 = state_14103;(statearr_14110[10] = inst_14071__$1);
return statearr_14110;
})();if(cljs.core.truth_(inst_14074))
{var statearr_14111_14137 = state_14103__$1;(statearr_14111_14137[1] = 8);
} else
{var statearr_14112_14138 = state_14103__$1;(statearr_14112_14138[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 6))
{var inst_14063 = (state_14103[7]);var inst_14088 = inst_14063.length;var inst_14089 = (inst_14088 > 0);var state_14103__$1 = state_14103;if(cljs.core.truth_(inst_14089))
{var statearr_14114_14139 = state_14103__$1;(statearr_14114_14139[1] = 12);
} else
{var statearr_14115_14140 = state_14103__$1;(statearr_14115_14140[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 7))
{var inst_14099 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14116_14141 = state_14103__$1;(statearr_14116_14141[2] = inst_14099);
(statearr_14116_14141[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 8))
{var inst_14071 = (state_14103[10]);var inst_14067 = (state_14103[9]);var inst_14063 = (state_14103[7]);var inst_14076 = inst_14063.push(inst_14067);var tmp14113 = inst_14063;var inst_14063__$1 = tmp14113;var inst_14064 = inst_14071;var state_14103__$1 = (function (){var statearr_14117 = state_14103;(statearr_14117[7] = inst_14063__$1);
(statearr_14117[8] = inst_14064);
(statearr_14117[11] = inst_14076);
return statearr_14117;
})();var statearr_14118_14142 = state_14103__$1;(statearr_14118_14142[2] = null);
(statearr_14118_14142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 9))
{var inst_14063 = (state_14103[7]);var inst_14079 = cljs.core.vec.call(null,inst_14063);var state_14103__$1 = state_14103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14103__$1,11,out,inst_14079);
} else
{if((state_val_14104 === 10))
{var inst_14086 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14119_14143 = state_14103__$1;(statearr_14119_14143[2] = inst_14086);
(statearr_14119_14143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 11))
{var inst_14071 = (state_14103[10]);var inst_14067 = (state_14103[9]);var inst_14081 = (state_14103[2]);var inst_14082 = [];var inst_14083 = inst_14082.push(inst_14067);var inst_14063 = inst_14082;var inst_14064 = inst_14071;var state_14103__$1 = (function (){var statearr_14120 = state_14103;(statearr_14120[7] = inst_14063);
(statearr_14120[8] = inst_14064);
(statearr_14120[12] = inst_14081);
(statearr_14120[13] = inst_14083);
return statearr_14120;
})();var statearr_14121_14144 = state_14103__$1;(statearr_14121_14144[2] = null);
(statearr_14121_14144[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 12))
{var inst_14063 = (state_14103[7]);var inst_14091 = cljs.core.vec.call(null,inst_14063);var state_14103__$1 = state_14103;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14103__$1,15,out,inst_14091);
} else
{if((state_val_14104 === 13))
{var state_14103__$1 = state_14103;var statearr_14122_14145 = state_14103__$1;(statearr_14122_14145[2] = null);
(statearr_14122_14145[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 14))
{var inst_14096 = (state_14103[2]);var inst_14097 = cljs.core.async.close_BANG_.call(null,out);var state_14103__$1 = (function (){var statearr_14123 = state_14103;(statearr_14123[14] = inst_14096);
return statearr_14123;
})();var statearr_14124_14146 = state_14103__$1;(statearr_14124_14146[2] = inst_14097);
(statearr_14124_14146[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14104 === 15))
{var inst_14093 = (state_14103[2]);var state_14103__$1 = state_14103;var statearr_14125_14147 = state_14103__$1;(statearr_14125_14147[2] = inst_14093);
(statearr_14125_14147[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14129 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14129[0] = state_machine__5507__auto__);
(statearr_14129[1] = 1);
return statearr_14129;
});
var state_machine__5507__auto____1 = (function (state_14103){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14103);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14130){if((e14130 instanceof Object))
{var ex__5510__auto__ = e14130;var statearr_14131_14148 = state_14103;(statearr_14131_14148[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14103);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14130;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14149 = state_14103;
state_14103 = G__14149;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14103){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14103);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14132 = f__5522__auto__.call(null);(statearr_14132[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14133);
return statearr_14132;
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