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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13677 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13677 = (function (f,fn_handler,meta13678){
this.f = f;
this.fn_handler = fn_handler;
this.meta13678 = meta13678;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13677.cljs$lang$type = true;
cljs.core.async.t13677.cljs$lang$ctorStr = "cljs.core.async/t13677";
cljs.core.async.t13677.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13677");
});
cljs.core.async.t13677.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13677.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13677.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13677.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13679){var self__ = this;
var _13679__$1 = this;return self__.meta13678;
});
cljs.core.async.t13677.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13679,meta13678__$1){var self__ = this;
var _13679__$1 = this;return (new cljs.core.async.t13677(self__.f,self__.fn_handler,meta13678__$1));
});
cljs.core.async.__GT_t13677 = (function __GT_t13677(f__$1,fn_handler__$1,meta13678){return (new cljs.core.async.t13677(f__$1,fn_handler__$1,meta13678));
});
}
return (new cljs.core.async.t13677(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13681 = buff;if(G__13681)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13681.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13681.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13681);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13681);
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
{var val_13682 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13682);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13682);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13683 = n;var x_13684 = 0;while(true){
if((x_13684 < n__4248__auto___13683))
{(a[x_13684] = 0);
{
var G__13685 = (x_13684 + 1);
x_13684 = G__13685;
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
var G__13686 = (i + 1);
i = G__13686;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13690 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13690 = (function (flag,alt_flag,meta13691){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13691 = meta13691;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13690.cljs$lang$type = true;
cljs.core.async.t13690.cljs$lang$ctorStr = "cljs.core.async/t13690";
cljs.core.async.t13690.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13690");
});
cljs.core.async.t13690.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13690.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13690.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13690.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13692){var self__ = this;
var _13692__$1 = this;return self__.meta13691;
});
cljs.core.async.t13690.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13692,meta13691__$1){var self__ = this;
var _13692__$1 = this;return (new cljs.core.async.t13690(self__.flag,self__.alt_flag,meta13691__$1));
});
cljs.core.async.__GT_t13690 = (function __GT_t13690(flag__$1,alt_flag__$1,meta13691){return (new cljs.core.async.t13690(flag__$1,alt_flag__$1,meta13691));
});
}
return (new cljs.core.async.t13690(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13696 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13696 = (function (cb,flag,alt_handler,meta13697){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13697 = meta13697;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13696.cljs$lang$type = true;
cljs.core.async.t13696.cljs$lang$ctorStr = "cljs.core.async/t13696";
cljs.core.async.t13696.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13696");
});
cljs.core.async.t13696.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13696.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13696.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13696.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13698){var self__ = this;
var _13698__$1 = this;return self__.meta13697;
});
cljs.core.async.t13696.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13698,meta13697__$1){var self__ = this;
var _13698__$1 = this;return (new cljs.core.async.t13696(self__.cb,self__.flag,self__.alt_handler,meta13697__$1));
});
cljs.core.async.__GT_t13696 = (function __GT_t13696(cb__$1,flag__$1,alt_handler__$1,meta13697){return (new cljs.core.async.t13696(cb__$1,flag__$1,alt_handler__$1,meta13697));
});
}
return (new cljs.core.async.t13696(cb,flag,alt_handler,null));
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
return (function (p1__13699_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13699_SHARP_,port], null));
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
var G__13700 = (i + 1);
i = G__13700;
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
var alts_BANG___delegate = function (ports,p__13701){var map__13703 = p__13701;var map__13703__$1 = ((cljs.core.seq_QMARK_.call(null,map__13703))?cljs.core.apply.call(null,cljs.core.hash_map,map__13703):map__13703);var opts = map__13703__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13701 = null;if (arguments.length > 1) {
  p__13701 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13701);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13704){
var ports = cljs.core.first(arglist__13704);
var p__13701 = cljs.core.rest(arglist__13704);
return alts_BANG___delegate(ports,p__13701);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13712 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13712 = (function (ch,f,map_LT_,meta13713){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13713 = meta13713;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13712.cljs$lang$type = true;
cljs.core.async.t13712.cljs$lang$ctorStr = "cljs.core.async/t13712";
cljs.core.async.t13712.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13712");
});
cljs.core.async.t13712.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13712.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13712.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13712.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13715 = (function (fn1,_,meta13713,ch,f,map_LT_,meta13716){
this.fn1 = fn1;
this._ = _;
this.meta13713 = meta13713;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13716 = meta13716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13715.cljs$lang$type = true;
cljs.core.async.t13715.cljs$lang$ctorStr = "cljs.core.async/t13715";
cljs.core.async.t13715.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13715");
});
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13715.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13705_SHARP_){return f1.call(null,(((p1__13705_SHARP_ == null))?null:self__.f.call(null,p1__13705_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13715.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13717){var self__ = this;
var _13717__$1 = this;return self__.meta13716;
});
cljs.core.async.t13715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13717,meta13716__$1){var self__ = this;
var _13717__$1 = this;return (new cljs.core.async.t13715(self__.fn1,self__._,self__.meta13713,self__.ch,self__.f,self__.map_LT_,meta13716__$1));
});
cljs.core.async.__GT_t13715 = (function __GT_t13715(fn1__$1,___$2,meta13713__$1,ch__$2,f__$2,map_LT___$2,meta13716){return (new cljs.core.async.t13715(fn1__$1,___$2,meta13713__$1,ch__$2,f__$2,map_LT___$2,meta13716));
});
}
return (new cljs.core.async.t13715(fn1,___$1,self__.meta13713,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13712.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13712.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13712.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13714){var self__ = this;
var _13714__$1 = this;return self__.meta13713;
});
cljs.core.async.t13712.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13714,meta13713__$1){var self__ = this;
var _13714__$1 = this;return (new cljs.core.async.t13712(self__.ch,self__.f,self__.map_LT_,meta13713__$1));
});
cljs.core.async.__GT_t13712 = (function __GT_t13712(ch__$1,f__$1,map_LT___$1,meta13713){return (new cljs.core.async.t13712(ch__$1,f__$1,map_LT___$1,meta13713));
});
}
return (new cljs.core.async.t13712(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13721 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13721 = (function (ch,f,map_GT_,meta13722){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13722 = meta13722;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13721.cljs$lang$type = true;
cljs.core.async.t13721.cljs$lang$ctorStr = "cljs.core.async/t13721";
cljs.core.async.t13721.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13721");
});
cljs.core.async.t13721.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13721.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13721.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13721.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13721.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13721.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13721.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13723){var self__ = this;
var _13723__$1 = this;return self__.meta13722;
});
cljs.core.async.t13721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13723,meta13722__$1){var self__ = this;
var _13723__$1 = this;return (new cljs.core.async.t13721(self__.ch,self__.f,self__.map_GT_,meta13722__$1));
});
cljs.core.async.__GT_t13721 = (function __GT_t13721(ch__$1,f__$1,map_GT___$1,meta13722){return (new cljs.core.async.t13721(ch__$1,f__$1,map_GT___$1,meta13722));
});
}
return (new cljs.core.async.t13721(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13727 = (function (ch,p,filter_GT_,meta13728){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13728 = meta13728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13727.cljs$lang$type = true;
cljs.core.async.t13727.cljs$lang$ctorStr = "cljs.core.async/t13727";
cljs.core.async.t13727.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13727");
});
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13729){var self__ = this;
var _13729__$1 = this;return self__.meta13728;
});
cljs.core.async.t13727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13729,meta13728__$1){var self__ = this;
var _13729__$1 = this;return (new cljs.core.async.t13727(self__.ch,self__.p,self__.filter_GT_,meta13728__$1));
});
cljs.core.async.__GT_t13727 = (function __GT_t13727(ch__$1,p__$1,filter_GT___$1,meta13728){return (new cljs.core.async.t13727(ch__$1,p__$1,filter_GT___$1,meta13728));
});
}
return (new cljs.core.async.t13727(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13812 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13791){var state_val_13792 = (state_13791[1]);if((state_val_13792 === 1))
{var state_13791__$1 = state_13791;var statearr_13793_13813 = state_13791__$1;(statearr_13793_13813[2] = null);
(statearr_13793_13813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 2))
{var state_13791__$1 = state_13791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13791__$1,4,ch);
} else
{if((state_val_13792 === 3))
{var inst_13789 = (state_13791[2]);var state_13791__$1 = state_13791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13791__$1,inst_13789);
} else
{if((state_val_13792 === 4))
{var inst_13773 = (state_13791[7]);var inst_13773__$1 = (state_13791[2]);var inst_13774 = (inst_13773__$1 == null);var state_13791__$1 = (function (){var statearr_13794 = state_13791;(statearr_13794[7] = inst_13773__$1);
return statearr_13794;
})();if(cljs.core.truth_(inst_13774))
{var statearr_13795_13814 = state_13791__$1;(statearr_13795_13814[1] = 5);
} else
{var statearr_13796_13815 = state_13791__$1;(statearr_13796_13815[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 5))
{var inst_13776 = cljs.core.async.close_BANG_.call(null,out);var state_13791__$1 = state_13791;var statearr_13797_13816 = state_13791__$1;(statearr_13797_13816[2] = inst_13776);
(statearr_13797_13816[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 6))
{var inst_13773 = (state_13791[7]);var inst_13778 = p.call(null,inst_13773);var state_13791__$1 = state_13791;if(cljs.core.truth_(inst_13778))
{var statearr_13798_13817 = state_13791__$1;(statearr_13798_13817[1] = 8);
} else
{var statearr_13799_13818 = state_13791__$1;(statearr_13799_13818[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 7))
{var inst_13787 = (state_13791[2]);var state_13791__$1 = state_13791;var statearr_13800_13819 = state_13791__$1;(statearr_13800_13819[2] = inst_13787);
(statearr_13800_13819[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 8))
{var inst_13773 = (state_13791[7]);var state_13791__$1 = state_13791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13791__$1,11,out,inst_13773);
} else
{if((state_val_13792 === 9))
{var state_13791__$1 = state_13791;var statearr_13801_13820 = state_13791__$1;(statearr_13801_13820[2] = null);
(statearr_13801_13820[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 10))
{var inst_13784 = (state_13791[2]);var state_13791__$1 = (function (){var statearr_13802 = state_13791;(statearr_13802[8] = inst_13784);
return statearr_13802;
})();var statearr_13803_13821 = state_13791__$1;(statearr_13803_13821[2] = null);
(statearr_13803_13821[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 11))
{var inst_13781 = (state_13791[2]);var state_13791__$1 = state_13791;var statearr_13804_13822 = state_13791__$1;(statearr_13804_13822[2] = inst_13781);
(statearr_13804_13822[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13808 = [null,null,null,null,null,null,null,null,null];(statearr_13808[0] = state_machine__5507__auto__);
(statearr_13808[1] = 1);
return statearr_13808;
});
var state_machine__5507__auto____1 = (function (state_13791){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13791);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13809){if((e13809 instanceof Object))
{var ex__5510__auto__ = e13809;var statearr_13810_13823 = state_13791;(statearr_13810_13823[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13791);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13824 = state_13791;
state_13791 = G__13824;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13791){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13811 = f__5522__auto__.call(null);(statearr_13811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13812);
return statearr_13811;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13976){var state_val_13977 = (state_13976[1]);if((state_val_13977 === 1))
{var state_13976__$1 = state_13976;var statearr_13978_14015 = state_13976__$1;(statearr_13978_14015[2] = null);
(statearr_13978_14015[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 2))
{var state_13976__$1 = state_13976;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13976__$1,4,in$);
} else
{if((state_val_13977 === 3))
{var inst_13974 = (state_13976[2]);var state_13976__$1 = state_13976;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13976__$1,inst_13974);
} else
{if((state_val_13977 === 4))
{var inst_13922 = (state_13976[7]);var inst_13922__$1 = (state_13976[2]);var inst_13923 = (inst_13922__$1 == null);var state_13976__$1 = (function (){var statearr_13979 = state_13976;(statearr_13979[7] = inst_13922__$1);
return statearr_13979;
})();if(cljs.core.truth_(inst_13923))
{var statearr_13980_14016 = state_13976__$1;(statearr_13980_14016[1] = 5);
} else
{var statearr_13981_14017 = state_13976__$1;(statearr_13981_14017[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 5))
{var inst_13925 = cljs.core.async.close_BANG_.call(null,out);var state_13976__$1 = state_13976;var statearr_13982_14018 = state_13976__$1;(statearr_13982_14018[2] = inst_13925);
(statearr_13982_14018[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 6))
{var inst_13922 = (state_13976[7]);var inst_13927 = f.call(null,inst_13922);var inst_13932 = cljs.core.seq.call(null,inst_13927);var inst_13933 = inst_13932;var inst_13934 = null;var inst_13935 = 0;var inst_13936 = 0;var state_13976__$1 = (function (){var statearr_13983 = state_13976;(statearr_13983[8] = inst_13936);
(statearr_13983[9] = inst_13935);
(statearr_13983[10] = inst_13933);
(statearr_13983[11] = inst_13934);
return statearr_13983;
})();var statearr_13984_14019 = state_13976__$1;(statearr_13984_14019[2] = null);
(statearr_13984_14019[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 7))
{var inst_13972 = (state_13976[2]);var state_13976__$1 = state_13976;var statearr_13985_14020 = state_13976__$1;(statearr_13985_14020[2] = inst_13972);
(statearr_13985_14020[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 8))
{var inst_13936 = (state_13976[8]);var inst_13935 = (state_13976[9]);var inst_13938 = (inst_13936 < inst_13935);var inst_13939 = inst_13938;var state_13976__$1 = state_13976;if(cljs.core.truth_(inst_13939))
{var statearr_13986_14021 = state_13976__$1;(statearr_13986_14021[1] = 10);
} else
{var statearr_13987_14022 = state_13976__$1;(statearr_13987_14022[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 9))
{var inst_13969 = (state_13976[2]);var state_13976__$1 = (function (){var statearr_13988 = state_13976;(statearr_13988[12] = inst_13969);
return statearr_13988;
})();var statearr_13989_14023 = state_13976__$1;(statearr_13989_14023[2] = null);
(statearr_13989_14023[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 10))
{var inst_13936 = (state_13976[8]);var inst_13934 = (state_13976[11]);var inst_13941 = cljs.core._nth.call(null,inst_13934,inst_13936);var state_13976__$1 = state_13976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13976__$1,13,out,inst_13941);
} else
{if((state_val_13977 === 11))
{var inst_13947 = (state_13976[13]);var inst_13933 = (state_13976[10]);var inst_13947__$1 = cljs.core.seq.call(null,inst_13933);var state_13976__$1 = (function (){var statearr_13993 = state_13976;(statearr_13993[13] = inst_13947__$1);
return statearr_13993;
})();if(inst_13947__$1)
{var statearr_13994_14024 = state_13976__$1;(statearr_13994_14024[1] = 14);
} else
{var statearr_13995_14025 = state_13976__$1;(statearr_13995_14025[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 12))
{var inst_13967 = (state_13976[2]);var state_13976__$1 = state_13976;var statearr_13996_14026 = state_13976__$1;(statearr_13996_14026[2] = inst_13967);
(statearr_13996_14026[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 13))
{var inst_13936 = (state_13976[8]);var inst_13935 = (state_13976[9]);var inst_13933 = (state_13976[10]);var inst_13934 = (state_13976[11]);var inst_13943 = (state_13976[2]);var inst_13944 = (inst_13936 + 1);var tmp13990 = inst_13935;var tmp13991 = inst_13933;var tmp13992 = inst_13934;var inst_13933__$1 = tmp13991;var inst_13934__$1 = tmp13992;var inst_13935__$1 = tmp13990;var inst_13936__$1 = inst_13944;var state_13976__$1 = (function (){var statearr_13997 = state_13976;(statearr_13997[8] = inst_13936__$1);
(statearr_13997[9] = inst_13935__$1);
(statearr_13997[14] = inst_13943);
(statearr_13997[10] = inst_13933__$1);
(statearr_13997[11] = inst_13934__$1);
return statearr_13997;
})();var statearr_13998_14027 = state_13976__$1;(statearr_13998_14027[2] = null);
(statearr_13998_14027[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 14))
{var inst_13947 = (state_13976[13]);var inst_13949 = cljs.core.chunked_seq_QMARK_.call(null,inst_13947);var state_13976__$1 = state_13976;if(inst_13949)
{var statearr_13999_14028 = state_13976__$1;(statearr_13999_14028[1] = 17);
} else
{var statearr_14000_14029 = state_13976__$1;(statearr_14000_14029[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 15))
{var state_13976__$1 = state_13976;var statearr_14001_14030 = state_13976__$1;(statearr_14001_14030[2] = null);
(statearr_14001_14030[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 16))
{var inst_13965 = (state_13976[2]);var state_13976__$1 = state_13976;var statearr_14002_14031 = state_13976__$1;(statearr_14002_14031[2] = inst_13965);
(statearr_14002_14031[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 17))
{var inst_13947 = (state_13976[13]);var inst_13951 = cljs.core.chunk_first.call(null,inst_13947);var inst_13952 = cljs.core.chunk_rest.call(null,inst_13947);var inst_13953 = cljs.core.count.call(null,inst_13951);var inst_13933 = inst_13952;var inst_13934 = inst_13951;var inst_13935 = inst_13953;var inst_13936 = 0;var state_13976__$1 = (function (){var statearr_14003 = state_13976;(statearr_14003[8] = inst_13936);
(statearr_14003[9] = inst_13935);
(statearr_14003[10] = inst_13933);
(statearr_14003[11] = inst_13934);
return statearr_14003;
})();var statearr_14004_14032 = state_13976__$1;(statearr_14004_14032[2] = null);
(statearr_14004_14032[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 18))
{var inst_13947 = (state_13976[13]);var inst_13956 = cljs.core.first.call(null,inst_13947);var state_13976__$1 = state_13976;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13976__$1,20,out,inst_13956);
} else
{if((state_val_13977 === 19))
{var inst_13962 = (state_13976[2]);var state_13976__$1 = state_13976;var statearr_14005_14033 = state_13976__$1;(statearr_14005_14033[2] = inst_13962);
(statearr_14005_14033[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13977 === 20))
{var inst_13947 = (state_13976[13]);var inst_13958 = (state_13976[2]);var inst_13959 = cljs.core.next.call(null,inst_13947);var inst_13933 = inst_13959;var inst_13934 = null;var inst_13935 = 0;var inst_13936 = 0;var state_13976__$1 = (function (){var statearr_14006 = state_13976;(statearr_14006[8] = inst_13936);
(statearr_14006[9] = inst_13935);
(statearr_14006[10] = inst_13933);
(statearr_14006[11] = inst_13934);
(statearr_14006[15] = inst_13958);
return statearr_14006;
})();var statearr_14007_14034 = state_13976__$1;(statearr_14007_14034[2] = null);
(statearr_14007_14034[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_14011 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14011[0] = state_machine__5507__auto__);
(statearr_14011[1] = 1);
return statearr_14011;
});
var state_machine__5507__auto____1 = (function (state_13976){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13976);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14012){if((e14012 instanceof Object))
{var ex__5510__auto__ = e14012;var statearr_14013_14035 = state_13976;(statearr_14013_14035[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13976);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14012;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14036 = state_13976;
state_13976 = G__14036;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13976){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13976);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14014 = f__5522__auto__.call(null);(statearr_14014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14014;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14117 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14096){var state_val_14097 = (state_14096[1]);if((state_val_14097 === 1))
{var state_14096__$1 = state_14096;var statearr_14098_14118 = state_14096__$1;(statearr_14098_14118[2] = null);
(statearr_14098_14118[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14097 === 2))
{var state_14096__$1 = state_14096;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14096__$1,4,from);
} else
{if((state_val_14097 === 3))
{var inst_14094 = (state_14096[2]);var state_14096__$1 = state_14096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14096__$1,inst_14094);
} else
{if((state_val_14097 === 4))
{var inst_14079 = (state_14096[7]);var inst_14079__$1 = (state_14096[2]);var inst_14080 = (inst_14079__$1 == null);var state_14096__$1 = (function (){var statearr_14099 = state_14096;(statearr_14099[7] = inst_14079__$1);
return statearr_14099;
})();if(cljs.core.truth_(inst_14080))
{var statearr_14100_14119 = state_14096__$1;(statearr_14100_14119[1] = 5);
} else
{var statearr_14101_14120 = state_14096__$1;(statearr_14101_14120[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14097 === 5))
{var state_14096__$1 = state_14096;if(cljs.core.truth_(close_QMARK_))
{var statearr_14102_14121 = state_14096__$1;(statearr_14102_14121[1] = 8);
} else
{var statearr_14103_14122 = state_14096__$1;(statearr_14103_14122[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14097 === 6))
{var inst_14079 = (state_14096[7]);var state_14096__$1 = state_14096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14096__$1,11,to,inst_14079);
} else
{if((state_val_14097 === 7))
{var inst_14092 = (state_14096[2]);var state_14096__$1 = state_14096;var statearr_14104_14123 = state_14096__$1;(statearr_14104_14123[2] = inst_14092);
(statearr_14104_14123[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14097 === 8))
{var inst_14083 = cljs.core.async.close_BANG_.call(null,to);var state_14096__$1 = state_14096;var statearr_14105_14124 = state_14096__$1;(statearr_14105_14124[2] = inst_14083);
(statearr_14105_14124[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14097 === 9))
{var state_14096__$1 = state_14096;var statearr_14106_14125 = state_14096__$1;(statearr_14106_14125[2] = null);
(statearr_14106_14125[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14097 === 10))
{var inst_14086 = (state_14096[2]);var state_14096__$1 = state_14096;var statearr_14107_14126 = state_14096__$1;(statearr_14107_14126[2] = inst_14086);
(statearr_14107_14126[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14097 === 11))
{var inst_14089 = (state_14096[2]);var state_14096__$1 = (function (){var statearr_14108 = state_14096;(statearr_14108[8] = inst_14089);
return statearr_14108;
})();var statearr_14109_14127 = state_14096__$1;(statearr_14109_14127[2] = null);
(statearr_14109_14127[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14113 = [null,null,null,null,null,null,null,null,null];(statearr_14113[0] = state_machine__5507__auto__);
(statearr_14113[1] = 1);
return statearr_14113;
});
var state_machine__5507__auto____1 = (function (state_14096){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14096);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14114){if((e14114 instanceof Object))
{var ex__5510__auto__ = e14114;var statearr_14115_14128 = state_14096;(statearr_14115_14128[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14096);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14114;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14129 = state_14096;
state_14096 = G__14129;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14096){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14116 = f__5522__auto__.call(null);(statearr_14116[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14117);
return statearr_14116;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14216 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14194){var state_val_14195 = (state_14194[1]);if((state_val_14195 === 1))
{var state_14194__$1 = state_14194;var statearr_14196_14217 = state_14194__$1;(statearr_14196_14217[2] = null);
(statearr_14196_14217[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 2))
{var state_14194__$1 = state_14194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14194__$1,4,ch);
} else
{if((state_val_14195 === 3))
{var inst_14192 = (state_14194[2]);var state_14194__$1 = state_14194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14194__$1,inst_14192);
} else
{if((state_val_14195 === 4))
{var inst_14175 = (state_14194[7]);var inst_14175__$1 = (state_14194[2]);var inst_14176 = (inst_14175__$1 == null);var state_14194__$1 = (function (){var statearr_14197 = state_14194;(statearr_14197[7] = inst_14175__$1);
return statearr_14197;
})();if(cljs.core.truth_(inst_14176))
{var statearr_14198_14218 = state_14194__$1;(statearr_14198_14218[1] = 5);
} else
{var statearr_14199_14219 = state_14194__$1;(statearr_14199_14219[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 5))
{var inst_14178 = cljs.core.async.close_BANG_.call(null,tc);var inst_14179 = cljs.core.async.close_BANG_.call(null,fc);var state_14194__$1 = (function (){var statearr_14200 = state_14194;(statearr_14200[8] = inst_14178);
return statearr_14200;
})();var statearr_14201_14220 = state_14194__$1;(statearr_14201_14220[2] = inst_14179);
(statearr_14201_14220[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 6))
{var inst_14175 = (state_14194[7]);var inst_14181 = p.call(null,inst_14175);var state_14194__$1 = state_14194;if(cljs.core.truth_(inst_14181))
{var statearr_14202_14221 = state_14194__$1;(statearr_14202_14221[1] = 9);
} else
{var statearr_14203_14222 = state_14194__$1;(statearr_14203_14222[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 7))
{var inst_14190 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14204_14223 = state_14194__$1;(statearr_14204_14223[2] = inst_14190);
(statearr_14204_14223[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 8))
{var inst_14187 = (state_14194[2]);var state_14194__$1 = (function (){var statearr_14205 = state_14194;(statearr_14205[9] = inst_14187);
return statearr_14205;
})();var statearr_14206_14224 = state_14194__$1;(statearr_14206_14224[2] = null);
(statearr_14206_14224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 9))
{var state_14194__$1 = state_14194;var statearr_14207_14225 = state_14194__$1;(statearr_14207_14225[2] = tc);
(statearr_14207_14225[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 10))
{var state_14194__$1 = state_14194;var statearr_14208_14226 = state_14194__$1;(statearr_14208_14226[2] = fc);
(statearr_14208_14226[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 11))
{var inst_14175 = (state_14194[7]);var inst_14185 = (state_14194[2]);var state_14194__$1 = state_14194;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14194__$1,8,inst_14185,inst_14175);
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
var state_machine__5507__auto____0 = (function (){var statearr_14212 = [null,null,null,null,null,null,null,null,null,null];(statearr_14212[0] = state_machine__5507__auto__);
(statearr_14212[1] = 1);
return statearr_14212;
});
var state_machine__5507__auto____1 = (function (state_14194){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14194);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14213){if((e14213 instanceof Object))
{var ex__5510__auto__ = e14213;var statearr_14214_14227 = state_14194;(statearr_14214_14227[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14213;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14228 = state_14194;
state_14194 = G__14228;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14194){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14215 = f__5522__auto__.call(null);(statearr_14215[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14216);
return statearr_14215;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14275){var state_val_14276 = (state_14275[1]);if((state_val_14276 === 7))
{var inst_14271 = (state_14275[2]);var state_14275__$1 = state_14275;var statearr_14277_14293 = state_14275__$1;(statearr_14277_14293[2] = inst_14271);
(statearr_14277_14293[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 6))
{var inst_14264 = (state_14275[7]);var inst_14261 = (state_14275[8]);var inst_14268 = f.call(null,inst_14261,inst_14264);var inst_14261__$1 = inst_14268;var state_14275__$1 = (function (){var statearr_14278 = state_14275;(statearr_14278[8] = inst_14261__$1);
return statearr_14278;
})();var statearr_14279_14294 = state_14275__$1;(statearr_14279_14294[2] = null);
(statearr_14279_14294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 5))
{var inst_14261 = (state_14275[8]);var state_14275__$1 = state_14275;var statearr_14280_14295 = state_14275__$1;(statearr_14280_14295[2] = inst_14261);
(statearr_14280_14295[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 4))
{var inst_14264 = (state_14275[7]);var inst_14264__$1 = (state_14275[2]);var inst_14265 = (inst_14264__$1 == null);var state_14275__$1 = (function (){var statearr_14281 = state_14275;(statearr_14281[7] = inst_14264__$1);
return statearr_14281;
})();if(cljs.core.truth_(inst_14265))
{var statearr_14282_14296 = state_14275__$1;(statearr_14282_14296[1] = 5);
} else
{var statearr_14283_14297 = state_14275__$1;(statearr_14283_14297[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14276 === 3))
{var inst_14273 = (state_14275[2]);var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14275__$1,inst_14273);
} else
{if((state_val_14276 === 2))
{var state_14275__$1 = state_14275;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14275__$1,4,ch);
} else
{if((state_val_14276 === 1))
{var inst_14261 = init;var state_14275__$1 = (function (){var statearr_14284 = state_14275;(statearr_14284[8] = inst_14261);
return statearr_14284;
})();var statearr_14285_14298 = state_14275__$1;(statearr_14285_14298[2] = null);
(statearr_14285_14298[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14289 = [null,null,null,null,null,null,null,null,null];(statearr_14289[0] = state_machine__5507__auto__);
(statearr_14289[1] = 1);
return statearr_14289;
});
var state_machine__5507__auto____1 = (function (state_14275){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14275);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14290){if((e14290 instanceof Object))
{var ex__5510__auto__ = e14290;var statearr_14291_14299 = state_14275;(statearr_14291_14299[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14275);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14290;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14300 = state_14275;
state_14275 = G__14300;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14275){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14275);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14292 = f__5522__auto__.call(null);(statearr_14292[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14292;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14362){var state_val_14363 = (state_14362[1]);if((state_val_14363 === 1))
{var inst_14342 = cljs.core.seq.call(null,coll);var inst_14343 = inst_14342;var state_14362__$1 = (function (){var statearr_14364 = state_14362;(statearr_14364[7] = inst_14343);
return statearr_14364;
})();var statearr_14365_14383 = state_14362__$1;(statearr_14365_14383[2] = null);
(statearr_14365_14383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14363 === 2))
{var inst_14343 = (state_14362[7]);var state_14362__$1 = state_14362;if(cljs.core.truth_(inst_14343))
{var statearr_14366_14384 = state_14362__$1;(statearr_14366_14384[1] = 4);
} else
{var statearr_14367_14385 = state_14362__$1;(statearr_14367_14385[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14363 === 3))
{var inst_14360 = (state_14362[2]);var state_14362__$1 = state_14362;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14362__$1,inst_14360);
} else
{if((state_val_14363 === 4))
{var inst_14343 = (state_14362[7]);var inst_14346 = cljs.core.first.call(null,inst_14343);var state_14362__$1 = state_14362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14362__$1,7,ch,inst_14346);
} else
{if((state_val_14363 === 5))
{var state_14362__$1 = state_14362;if(cljs.core.truth_(close_QMARK_))
{var statearr_14368_14386 = state_14362__$1;(statearr_14368_14386[1] = 8);
} else
{var statearr_14369_14387 = state_14362__$1;(statearr_14369_14387[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14363 === 6))
{var inst_14358 = (state_14362[2]);var state_14362__$1 = state_14362;var statearr_14370_14388 = state_14362__$1;(statearr_14370_14388[2] = inst_14358);
(statearr_14370_14388[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14363 === 7))
{var inst_14343 = (state_14362[7]);var inst_14348 = (state_14362[2]);var inst_14349 = cljs.core.next.call(null,inst_14343);var inst_14343__$1 = inst_14349;var state_14362__$1 = (function (){var statearr_14371 = state_14362;(statearr_14371[7] = inst_14343__$1);
(statearr_14371[8] = inst_14348);
return statearr_14371;
})();var statearr_14372_14389 = state_14362__$1;(statearr_14372_14389[2] = null);
(statearr_14372_14389[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14363 === 8))
{var inst_14353 = cljs.core.async.close_BANG_.call(null,ch);var state_14362__$1 = state_14362;var statearr_14373_14390 = state_14362__$1;(statearr_14373_14390[2] = inst_14353);
(statearr_14373_14390[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14363 === 9))
{var state_14362__$1 = state_14362;var statearr_14374_14391 = state_14362__$1;(statearr_14374_14391[2] = null);
(statearr_14374_14391[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14363 === 10))
{var inst_14356 = (state_14362[2]);var state_14362__$1 = state_14362;var statearr_14375_14392 = state_14362__$1;(statearr_14375_14392[2] = inst_14356);
(statearr_14375_14392[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14379 = [null,null,null,null,null,null,null,null,null];(statearr_14379[0] = state_machine__5507__auto__);
(statearr_14379[1] = 1);
return statearr_14379;
});
var state_machine__5507__auto____1 = (function (state_14362){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14362);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14380){if((e14380 instanceof Object))
{var ex__5510__auto__ = e14380;var statearr_14381_14393 = state_14362;(statearr_14381_14393[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14380;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14394 = state_14362;
state_14362 = G__14394;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14362){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14382 = f__5522__auto__.call(null);(statearr_14382[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14382;
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
cljs.core.async.Mux = (function (){var obj14396 = {};return obj14396;
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
cljs.core.async.Mult = (function (){var obj14398 = {};return obj14398;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14622 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14622 = (function (cs,ch,mult,meta14623){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14623 = meta14623;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14622.cljs$lang$type = true;
cljs.core.async.t14622.cljs$lang$ctorStr = "cljs.core.async/t14622";
cljs.core.async.t14622.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14622");
});})(cs))
;
cljs.core.async.t14622.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14622.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14622.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14622.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14622.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14622.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14622.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14624){var self__ = this;
var _14624__$1 = this;return self__.meta14623;
});})(cs))
;
cljs.core.async.t14622.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14624,meta14623__$1){var self__ = this;
var _14624__$1 = this;return (new cljs.core.async.t14622(self__.cs,self__.ch,self__.mult,meta14623__$1));
});})(cs))
;
cljs.core.async.__GT_t14622 = ((function (cs){
return (function __GT_t14622(cs__$1,ch__$1,mult__$1,meta14623){return (new cljs.core.async.t14622(cs__$1,ch__$1,mult__$1,meta14623));
});})(cs))
;
}
return (new cljs.core.async.t14622(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14845 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14759){var state_val_14760 = (state_14759[1]);if((state_val_14760 === 32))
{var inst_14703 = (state_14759[7]);var inst_14627 = (state_14759[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14759,31,Object,null,30);var inst_14710 = cljs.core.async.put_BANG_.call(null,inst_14703,inst_14627,done);var state_14759__$1 = state_14759;var statearr_14761_14846 = state_14759__$1;(statearr_14761_14846[2] = inst_14710);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14759__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 1))
{var state_14759__$1 = state_14759;var statearr_14762_14847 = state_14759__$1;(statearr_14762_14847[2] = null);
(statearr_14762_14847[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 33))
{var inst_14716 = (state_14759[9]);var inst_14718 = cljs.core.chunked_seq_QMARK_.call(null,inst_14716);var state_14759__$1 = state_14759;if(inst_14718)
{var statearr_14763_14848 = state_14759__$1;(statearr_14763_14848[1] = 36);
} else
{var statearr_14764_14849 = state_14759__$1;(statearr_14764_14849[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 2))
{var state_14759__$1 = state_14759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14759__$1,4,ch);
} else
{if((state_val_14760 === 34))
{var state_14759__$1 = state_14759;var statearr_14765_14850 = state_14759__$1;(statearr_14765_14850[2] = null);
(statearr_14765_14850[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 3))
{var inst_14757 = (state_14759[2]);var state_14759__$1 = state_14759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14759__$1,inst_14757);
} else
{if((state_val_14760 === 35))
{var inst_14741 = (state_14759[2]);var state_14759__$1 = state_14759;var statearr_14766_14851 = state_14759__$1;(statearr_14766_14851[2] = inst_14741);
(statearr_14766_14851[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 4))
{var inst_14627 = (state_14759[8]);var inst_14627__$1 = (state_14759[2]);var inst_14628 = (inst_14627__$1 == null);var state_14759__$1 = (function (){var statearr_14767 = state_14759;(statearr_14767[8] = inst_14627__$1);
return statearr_14767;
})();if(cljs.core.truth_(inst_14628))
{var statearr_14768_14852 = state_14759__$1;(statearr_14768_14852[1] = 5);
} else
{var statearr_14769_14853 = state_14759__$1;(statearr_14769_14853[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 36))
{var inst_14716 = (state_14759[9]);var inst_14720 = cljs.core.chunk_first.call(null,inst_14716);var inst_14721 = cljs.core.chunk_rest.call(null,inst_14716);var inst_14722 = cljs.core.count.call(null,inst_14720);var inst_14695 = inst_14721;var inst_14696 = inst_14720;var inst_14697 = inst_14722;var inst_14698 = 0;var state_14759__$1 = (function (){var statearr_14770 = state_14759;(statearr_14770[10] = inst_14698);
(statearr_14770[11] = inst_14697);
(statearr_14770[12] = inst_14695);
(statearr_14770[13] = inst_14696);
return statearr_14770;
})();var statearr_14771_14854 = state_14759__$1;(statearr_14771_14854[2] = null);
(statearr_14771_14854[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 5))
{var inst_14634 = cljs.core.deref.call(null,cs);var inst_14635 = cljs.core.seq.call(null,inst_14634);var inst_14636 = inst_14635;var inst_14637 = null;var inst_14638 = 0;var inst_14639 = 0;var state_14759__$1 = (function (){var statearr_14772 = state_14759;(statearr_14772[14] = inst_14636);
(statearr_14772[15] = inst_14637);
(statearr_14772[16] = inst_14638);
(statearr_14772[17] = inst_14639);
return statearr_14772;
})();var statearr_14773_14855 = state_14759__$1;(statearr_14773_14855[2] = null);
(statearr_14773_14855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 37))
{var inst_14716 = (state_14759[9]);var inst_14725 = cljs.core.first.call(null,inst_14716);var state_14759__$1 = (function (){var statearr_14774 = state_14759;(statearr_14774[18] = inst_14725);
return statearr_14774;
})();var statearr_14775_14856 = state_14759__$1;(statearr_14775_14856[2] = null);
(statearr_14775_14856[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 6))
{var inst_14687 = (state_14759[19]);var inst_14686 = cljs.core.deref.call(null,cs);var inst_14687__$1 = cljs.core.keys.call(null,inst_14686);var inst_14688 = cljs.core.count.call(null,inst_14687__$1);var inst_14689 = cljs.core.reset_BANG_.call(null,dctr,inst_14688);var inst_14694 = cljs.core.seq.call(null,inst_14687__$1);var inst_14695 = inst_14694;var inst_14696 = null;var inst_14697 = 0;var inst_14698 = 0;var state_14759__$1 = (function (){var statearr_14776 = state_14759;(statearr_14776[10] = inst_14698);
(statearr_14776[11] = inst_14697);
(statearr_14776[12] = inst_14695);
(statearr_14776[13] = inst_14696);
(statearr_14776[20] = inst_14689);
(statearr_14776[19] = inst_14687__$1);
return statearr_14776;
})();var statearr_14777_14857 = state_14759__$1;(statearr_14777_14857[2] = null);
(statearr_14777_14857[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 38))
{var inst_14738 = (state_14759[2]);var state_14759__$1 = state_14759;var statearr_14778_14858 = state_14759__$1;(statearr_14778_14858[2] = inst_14738);
(statearr_14778_14858[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 7))
{var inst_14755 = (state_14759[2]);var state_14759__$1 = state_14759;var statearr_14779_14859 = state_14759__$1;(statearr_14779_14859[2] = inst_14755);
(statearr_14779_14859[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 39))
{var inst_14716 = (state_14759[9]);var inst_14734 = (state_14759[2]);var inst_14735 = cljs.core.next.call(null,inst_14716);var inst_14695 = inst_14735;var inst_14696 = null;var inst_14697 = 0;var inst_14698 = 0;var state_14759__$1 = (function (){var statearr_14780 = state_14759;(statearr_14780[10] = inst_14698);
(statearr_14780[11] = inst_14697);
(statearr_14780[12] = inst_14695);
(statearr_14780[13] = inst_14696);
(statearr_14780[21] = inst_14734);
return statearr_14780;
})();var statearr_14781_14860 = state_14759__$1;(statearr_14781_14860[2] = null);
(statearr_14781_14860[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 8))
{var inst_14638 = (state_14759[16]);var inst_14639 = (state_14759[17]);var inst_14641 = (inst_14639 < inst_14638);var inst_14642 = inst_14641;var state_14759__$1 = state_14759;if(cljs.core.truth_(inst_14642))
{var statearr_14782_14861 = state_14759__$1;(statearr_14782_14861[1] = 10);
} else
{var statearr_14783_14862 = state_14759__$1;(statearr_14783_14862[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 40))
{var inst_14725 = (state_14759[18]);var inst_14726 = (state_14759[2]);var inst_14727 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14728 = cljs.core.async.untap_STAR_.call(null,m,inst_14725);var state_14759__$1 = (function (){var statearr_14784 = state_14759;(statearr_14784[22] = inst_14726);
(statearr_14784[23] = inst_14727);
return statearr_14784;
})();var statearr_14785_14863 = state_14759__$1;(statearr_14785_14863[2] = inst_14728);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14759__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 9))
{var inst_14684 = (state_14759[2]);var state_14759__$1 = state_14759;var statearr_14786_14864 = state_14759__$1;(statearr_14786_14864[2] = inst_14684);
(statearr_14786_14864[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 41))
{var inst_14725 = (state_14759[18]);var inst_14627 = (state_14759[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14759,40,Object,null,39);var inst_14732 = cljs.core.async.put_BANG_.call(null,inst_14725,inst_14627,done);var state_14759__$1 = state_14759;var statearr_14787_14865 = state_14759__$1;(statearr_14787_14865[2] = inst_14732);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14759__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 10))
{var inst_14637 = (state_14759[15]);var inst_14639 = (state_14759[17]);var inst_14645 = cljs.core._nth.call(null,inst_14637,inst_14639);var inst_14646 = cljs.core.nth.call(null,inst_14645,0,null);var inst_14647 = cljs.core.nth.call(null,inst_14645,1,null);var state_14759__$1 = (function (){var statearr_14788 = state_14759;(statearr_14788[24] = inst_14646);
return statearr_14788;
})();if(cljs.core.truth_(inst_14647))
{var statearr_14789_14866 = state_14759__$1;(statearr_14789_14866[1] = 13);
} else
{var statearr_14790_14867 = state_14759__$1;(statearr_14790_14867[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 42))
{var state_14759__$1 = state_14759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14759__$1,45,dchan);
} else
{if((state_val_14760 === 11))
{var inst_14656 = (state_14759[25]);var inst_14636 = (state_14759[14]);var inst_14656__$1 = cljs.core.seq.call(null,inst_14636);var state_14759__$1 = (function (){var statearr_14791 = state_14759;(statearr_14791[25] = inst_14656__$1);
return statearr_14791;
})();if(inst_14656__$1)
{var statearr_14792_14868 = state_14759__$1;(statearr_14792_14868[1] = 16);
} else
{var statearr_14793_14869 = state_14759__$1;(statearr_14793_14869[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 43))
{var state_14759__$1 = state_14759;var statearr_14794_14870 = state_14759__$1;(statearr_14794_14870[2] = null);
(statearr_14794_14870[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 12))
{var inst_14682 = (state_14759[2]);var state_14759__$1 = state_14759;var statearr_14795_14871 = state_14759__$1;(statearr_14795_14871[2] = inst_14682);
(statearr_14795_14871[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 44))
{var inst_14752 = (state_14759[2]);var state_14759__$1 = (function (){var statearr_14796 = state_14759;(statearr_14796[26] = inst_14752);
return statearr_14796;
})();var statearr_14797_14872 = state_14759__$1;(statearr_14797_14872[2] = null);
(statearr_14797_14872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 13))
{var inst_14646 = (state_14759[24]);var inst_14649 = cljs.core.async.close_BANG_.call(null,inst_14646);var state_14759__$1 = state_14759;var statearr_14798_14873 = state_14759__$1;(statearr_14798_14873[2] = inst_14649);
(statearr_14798_14873[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 45))
{var inst_14749 = (state_14759[2]);var state_14759__$1 = state_14759;var statearr_14802_14874 = state_14759__$1;(statearr_14802_14874[2] = inst_14749);
(statearr_14802_14874[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 14))
{var state_14759__$1 = state_14759;var statearr_14803_14875 = state_14759__$1;(statearr_14803_14875[2] = null);
(statearr_14803_14875[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 15))
{var inst_14636 = (state_14759[14]);var inst_14637 = (state_14759[15]);var inst_14638 = (state_14759[16]);var inst_14639 = (state_14759[17]);var inst_14652 = (state_14759[2]);var inst_14653 = (inst_14639 + 1);var tmp14799 = inst_14636;var tmp14800 = inst_14637;var tmp14801 = inst_14638;var inst_14636__$1 = tmp14799;var inst_14637__$1 = tmp14800;var inst_14638__$1 = tmp14801;var inst_14639__$1 = inst_14653;var state_14759__$1 = (function (){var statearr_14804 = state_14759;(statearr_14804[27] = inst_14652);
(statearr_14804[14] = inst_14636__$1);
(statearr_14804[15] = inst_14637__$1);
(statearr_14804[16] = inst_14638__$1);
(statearr_14804[17] = inst_14639__$1);
return statearr_14804;
})();var statearr_14805_14876 = state_14759__$1;(statearr_14805_14876[2] = null);
(statearr_14805_14876[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 16))
{var inst_14656 = (state_14759[25]);var inst_14658 = cljs.core.chunked_seq_QMARK_.call(null,inst_14656);var state_14759__$1 = state_14759;if(inst_14658)
{var statearr_14806_14877 = state_14759__$1;(statearr_14806_14877[1] = 19);
} else
{var statearr_14807_14878 = state_14759__$1;(statearr_14807_14878[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 17))
{var state_14759__$1 = state_14759;var statearr_14808_14879 = state_14759__$1;(statearr_14808_14879[2] = null);
(statearr_14808_14879[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 18))
{var inst_14680 = (state_14759[2]);var state_14759__$1 = state_14759;var statearr_14809_14880 = state_14759__$1;(statearr_14809_14880[2] = inst_14680);
(statearr_14809_14880[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 19))
{var inst_14656 = (state_14759[25]);var inst_14660 = cljs.core.chunk_first.call(null,inst_14656);var inst_14661 = cljs.core.chunk_rest.call(null,inst_14656);var inst_14662 = cljs.core.count.call(null,inst_14660);var inst_14636 = inst_14661;var inst_14637 = inst_14660;var inst_14638 = inst_14662;var inst_14639 = 0;var state_14759__$1 = (function (){var statearr_14810 = state_14759;(statearr_14810[14] = inst_14636);
(statearr_14810[15] = inst_14637);
(statearr_14810[16] = inst_14638);
(statearr_14810[17] = inst_14639);
return statearr_14810;
})();var statearr_14811_14881 = state_14759__$1;(statearr_14811_14881[2] = null);
(statearr_14811_14881[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 20))
{var inst_14656 = (state_14759[25]);var inst_14666 = cljs.core.first.call(null,inst_14656);var inst_14667 = cljs.core.nth.call(null,inst_14666,0,null);var inst_14668 = cljs.core.nth.call(null,inst_14666,1,null);var state_14759__$1 = (function (){var statearr_14812 = state_14759;(statearr_14812[28] = inst_14667);
return statearr_14812;
})();if(cljs.core.truth_(inst_14668))
{var statearr_14813_14882 = state_14759__$1;(statearr_14813_14882[1] = 22);
} else
{var statearr_14814_14883 = state_14759__$1;(statearr_14814_14883[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 21))
{var inst_14677 = (state_14759[2]);var state_14759__$1 = state_14759;var statearr_14815_14884 = state_14759__$1;(statearr_14815_14884[2] = inst_14677);
(statearr_14815_14884[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 22))
{var inst_14667 = (state_14759[28]);var inst_14670 = cljs.core.async.close_BANG_.call(null,inst_14667);var state_14759__$1 = state_14759;var statearr_14816_14885 = state_14759__$1;(statearr_14816_14885[2] = inst_14670);
(statearr_14816_14885[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 23))
{var state_14759__$1 = state_14759;var statearr_14817_14886 = state_14759__$1;(statearr_14817_14886[2] = null);
(statearr_14817_14886[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 24))
{var inst_14656 = (state_14759[25]);var inst_14673 = (state_14759[2]);var inst_14674 = cljs.core.next.call(null,inst_14656);var inst_14636 = inst_14674;var inst_14637 = null;var inst_14638 = 0;var inst_14639 = 0;var state_14759__$1 = (function (){var statearr_14818 = state_14759;(statearr_14818[14] = inst_14636);
(statearr_14818[15] = inst_14637);
(statearr_14818[16] = inst_14638);
(statearr_14818[17] = inst_14639);
(statearr_14818[29] = inst_14673);
return statearr_14818;
})();var statearr_14819_14887 = state_14759__$1;(statearr_14819_14887[2] = null);
(statearr_14819_14887[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 25))
{var inst_14698 = (state_14759[10]);var inst_14697 = (state_14759[11]);var inst_14700 = (inst_14698 < inst_14697);var inst_14701 = inst_14700;var state_14759__$1 = state_14759;if(cljs.core.truth_(inst_14701))
{var statearr_14820_14888 = state_14759__$1;(statearr_14820_14888[1] = 27);
} else
{var statearr_14821_14889 = state_14759__$1;(statearr_14821_14889[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 26))
{var inst_14687 = (state_14759[19]);var inst_14745 = (state_14759[2]);var inst_14746 = cljs.core.seq.call(null,inst_14687);var state_14759__$1 = (function (){var statearr_14822 = state_14759;(statearr_14822[30] = inst_14745);
return statearr_14822;
})();if(inst_14746)
{var statearr_14823_14890 = state_14759__$1;(statearr_14823_14890[1] = 42);
} else
{var statearr_14824_14891 = state_14759__$1;(statearr_14824_14891[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 27))
{var inst_14698 = (state_14759[10]);var inst_14696 = (state_14759[13]);var inst_14703 = cljs.core._nth.call(null,inst_14696,inst_14698);var state_14759__$1 = (function (){var statearr_14825 = state_14759;(statearr_14825[7] = inst_14703);
return statearr_14825;
})();var statearr_14826_14892 = state_14759__$1;(statearr_14826_14892[2] = null);
(statearr_14826_14892[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 28))
{var inst_14695 = (state_14759[12]);var inst_14716 = (state_14759[9]);var inst_14716__$1 = cljs.core.seq.call(null,inst_14695);var state_14759__$1 = (function (){var statearr_14830 = state_14759;(statearr_14830[9] = inst_14716__$1);
return statearr_14830;
})();if(inst_14716__$1)
{var statearr_14831_14893 = state_14759__$1;(statearr_14831_14893[1] = 33);
} else
{var statearr_14832_14894 = state_14759__$1;(statearr_14832_14894[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 29))
{var inst_14743 = (state_14759[2]);var state_14759__$1 = state_14759;var statearr_14833_14895 = state_14759__$1;(statearr_14833_14895[2] = inst_14743);
(statearr_14833_14895[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 30))
{var inst_14698 = (state_14759[10]);var inst_14697 = (state_14759[11]);var inst_14695 = (state_14759[12]);var inst_14696 = (state_14759[13]);var inst_14712 = (state_14759[2]);var inst_14713 = (inst_14698 + 1);var tmp14827 = inst_14697;var tmp14828 = inst_14695;var tmp14829 = inst_14696;var inst_14695__$1 = tmp14828;var inst_14696__$1 = tmp14829;var inst_14697__$1 = tmp14827;var inst_14698__$1 = inst_14713;var state_14759__$1 = (function (){var statearr_14834 = state_14759;(statearr_14834[10] = inst_14698__$1);
(statearr_14834[11] = inst_14697__$1);
(statearr_14834[12] = inst_14695__$1);
(statearr_14834[13] = inst_14696__$1);
(statearr_14834[31] = inst_14712);
return statearr_14834;
})();var statearr_14835_14896 = state_14759__$1;(statearr_14835_14896[2] = null);
(statearr_14835_14896[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14760 === 31))
{var inst_14703 = (state_14759[7]);var inst_14704 = (state_14759[2]);var inst_14705 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14706 = cljs.core.async.untap_STAR_.call(null,m,inst_14703);var state_14759__$1 = (function (){var statearr_14836 = state_14759;(statearr_14836[32] = inst_14705);
(statearr_14836[33] = inst_14704);
return statearr_14836;
})();var statearr_14837_14897 = state_14759__$1;(statearr_14837_14897[2] = inst_14706);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14759__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14841 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14841[0] = state_machine__5507__auto__);
(statearr_14841[1] = 1);
return statearr_14841;
});
var state_machine__5507__auto____1 = (function (state_14759){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14842){if((e14842 instanceof Object))
{var ex__5510__auto__ = e14842;var statearr_14843_14898 = state_14759;(statearr_14843_14898[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14842;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14899 = state_14759;
state_14759 = G__14899;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14759){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14844 = f__5522__auto__.call(null);(statearr_14844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14845);
return statearr_14844;
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
cljs.core.async.Mix = (function (){var obj14901 = {};return obj14901;
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
;var m = (function (){if(typeof cljs.core.async.t15011 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15011 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15012){
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
this.meta15012 = meta15012;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15011.cljs$lang$type = true;
cljs.core.async.t15011.cljs$lang$ctorStr = "cljs.core.async/t15011";
cljs.core.async.t15011.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15011");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15011.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15011.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15011.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15011.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15011.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15011.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15011.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15011.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15011.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15013){var self__ = this;
var _15013__$1 = this;return self__.meta15012;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15011.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15013,meta15012__$1){var self__ = this;
var _15013__$1 = this;return (new cljs.core.async.t15011(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15012__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15011 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15011(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15012){return (new cljs.core.async.t15011(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15012));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15011(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15120 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15078){var state_val_15079 = (state_15078[1]);if((state_val_15079 === 1))
{var inst_15017 = (state_15078[7]);var inst_15017__$1 = calc_state.call(null);var inst_15018 = cljs.core.seq_QMARK_.call(null,inst_15017__$1);var state_15078__$1 = (function (){var statearr_15080 = state_15078;(statearr_15080[7] = inst_15017__$1);
return statearr_15080;
})();if(inst_15018)
{var statearr_15081_15121 = state_15078__$1;(statearr_15081_15121[1] = 2);
} else
{var statearr_15082_15122 = state_15078__$1;(statearr_15082_15122[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 2))
{var inst_15017 = (state_15078[7]);var inst_15020 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15017);var state_15078__$1 = state_15078;var statearr_15083_15123 = state_15078__$1;(statearr_15083_15123[2] = inst_15020);
(statearr_15083_15123[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 3))
{var inst_15017 = (state_15078[7]);var state_15078__$1 = state_15078;var statearr_15084_15124 = state_15078__$1;(statearr_15084_15124[2] = inst_15017);
(statearr_15084_15124[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 4))
{var inst_15017 = (state_15078[7]);var inst_15023 = (state_15078[2]);var inst_15024 = cljs.core.get.call(null,inst_15023,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15025 = cljs.core.get.call(null,inst_15023,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15026 = cljs.core.get.call(null,inst_15023,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15027 = inst_15017;var state_15078__$1 = (function (){var statearr_15085 = state_15078;(statearr_15085[8] = inst_15027);
(statearr_15085[9] = inst_15025);
(statearr_15085[10] = inst_15026);
(statearr_15085[11] = inst_15024);
return statearr_15085;
})();var statearr_15086_15125 = state_15078__$1;(statearr_15086_15125[2] = null);
(statearr_15086_15125[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 5))
{var inst_15027 = (state_15078[8]);var inst_15030 = cljs.core.seq_QMARK_.call(null,inst_15027);var state_15078__$1 = state_15078;if(inst_15030)
{var statearr_15087_15126 = state_15078__$1;(statearr_15087_15126[1] = 7);
} else
{var statearr_15088_15127 = state_15078__$1;(statearr_15088_15127[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 6))
{var inst_15076 = (state_15078[2]);var state_15078__$1 = state_15078;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15078__$1,inst_15076);
} else
{if((state_val_15079 === 7))
{var inst_15027 = (state_15078[8]);var inst_15032 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15027);var state_15078__$1 = state_15078;var statearr_15089_15128 = state_15078__$1;(statearr_15089_15128[2] = inst_15032);
(statearr_15089_15128[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 8))
{var inst_15027 = (state_15078[8]);var state_15078__$1 = state_15078;var statearr_15090_15129 = state_15078__$1;(statearr_15090_15129[2] = inst_15027);
(statearr_15090_15129[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 9))
{var inst_15035 = (state_15078[12]);var inst_15035__$1 = (state_15078[2]);var inst_15036 = cljs.core.get.call(null,inst_15035__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15037 = cljs.core.get.call(null,inst_15035__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15038 = cljs.core.get.call(null,inst_15035__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15078__$1 = (function (){var statearr_15091 = state_15078;(statearr_15091[13] = inst_15037);
(statearr_15091[12] = inst_15035__$1);
(statearr_15091[14] = inst_15038);
return statearr_15091;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15078__$1,10,inst_15036);
} else
{if((state_val_15079 === 10))
{var inst_15042 = (state_15078[15]);var inst_15043 = (state_15078[16]);var inst_15041 = (state_15078[2]);var inst_15042__$1 = cljs.core.nth.call(null,inst_15041,0,null);var inst_15043__$1 = cljs.core.nth.call(null,inst_15041,1,null);var inst_15044 = (inst_15042__$1 == null);var inst_15045 = cljs.core._EQ_.call(null,inst_15043__$1,change);var inst_15046 = (inst_15044) || (inst_15045);var state_15078__$1 = (function (){var statearr_15092 = state_15078;(statearr_15092[15] = inst_15042__$1);
(statearr_15092[16] = inst_15043__$1);
return statearr_15092;
})();if(cljs.core.truth_(inst_15046))
{var statearr_15093_15130 = state_15078__$1;(statearr_15093_15130[1] = 11);
} else
{var statearr_15094_15131 = state_15078__$1;(statearr_15094_15131[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 11))
{var inst_15042 = (state_15078[15]);var inst_15048 = (inst_15042 == null);var state_15078__$1 = state_15078;if(cljs.core.truth_(inst_15048))
{var statearr_15095_15132 = state_15078__$1;(statearr_15095_15132[1] = 14);
} else
{var statearr_15096_15133 = state_15078__$1;(statearr_15096_15133[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 12))
{var inst_15057 = (state_15078[17]);var inst_15038 = (state_15078[14]);var inst_15043 = (state_15078[16]);var inst_15057__$1 = inst_15038.call(null,inst_15043);var state_15078__$1 = (function (){var statearr_15097 = state_15078;(statearr_15097[17] = inst_15057__$1);
return statearr_15097;
})();if(cljs.core.truth_(inst_15057__$1))
{var statearr_15098_15134 = state_15078__$1;(statearr_15098_15134[1] = 17);
} else
{var statearr_15099_15135 = state_15078__$1;(statearr_15099_15135[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 13))
{var inst_15074 = (state_15078[2]);var state_15078__$1 = state_15078;var statearr_15100_15136 = state_15078__$1;(statearr_15100_15136[2] = inst_15074);
(statearr_15100_15136[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 14))
{var inst_15043 = (state_15078[16]);var inst_15050 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15043);var state_15078__$1 = state_15078;var statearr_15101_15137 = state_15078__$1;(statearr_15101_15137[2] = inst_15050);
(statearr_15101_15137[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 15))
{var state_15078__$1 = state_15078;var statearr_15102_15138 = state_15078__$1;(statearr_15102_15138[2] = null);
(statearr_15102_15138[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 16))
{var inst_15053 = (state_15078[2]);var inst_15054 = calc_state.call(null);var inst_15027 = inst_15054;var state_15078__$1 = (function (){var statearr_15103 = state_15078;(statearr_15103[18] = inst_15053);
(statearr_15103[8] = inst_15027);
return statearr_15103;
})();var statearr_15104_15139 = state_15078__$1;(statearr_15104_15139[2] = null);
(statearr_15104_15139[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 17))
{var inst_15057 = (state_15078[17]);var state_15078__$1 = state_15078;var statearr_15105_15140 = state_15078__$1;(statearr_15105_15140[2] = inst_15057);
(statearr_15105_15140[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 18))
{var inst_15037 = (state_15078[13]);var inst_15038 = (state_15078[14]);var inst_15043 = (state_15078[16]);var inst_15060 = cljs.core.empty_QMARK_.call(null,inst_15038);var inst_15061 = inst_15037.call(null,inst_15043);var inst_15062 = cljs.core.not.call(null,inst_15061);var inst_15063 = (inst_15060) && (inst_15062);var state_15078__$1 = state_15078;var statearr_15106_15141 = state_15078__$1;(statearr_15106_15141[2] = inst_15063);
(statearr_15106_15141[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 19))
{var inst_15065 = (state_15078[2]);var state_15078__$1 = state_15078;if(cljs.core.truth_(inst_15065))
{var statearr_15107_15142 = state_15078__$1;(statearr_15107_15142[1] = 20);
} else
{var statearr_15108_15143 = state_15078__$1;(statearr_15108_15143[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 20))
{var inst_15042 = (state_15078[15]);var state_15078__$1 = state_15078;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15078__$1,23,out,inst_15042);
} else
{if((state_val_15079 === 21))
{var state_15078__$1 = state_15078;var statearr_15109_15144 = state_15078__$1;(statearr_15109_15144[2] = null);
(statearr_15109_15144[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 22))
{var inst_15035 = (state_15078[12]);var inst_15071 = (state_15078[2]);var inst_15027 = inst_15035;var state_15078__$1 = (function (){var statearr_15110 = state_15078;(statearr_15110[8] = inst_15027);
(statearr_15110[19] = inst_15071);
return statearr_15110;
})();var statearr_15111_15145 = state_15078__$1;(statearr_15111_15145[2] = null);
(statearr_15111_15145[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15079 === 23))
{var inst_15068 = (state_15078[2]);var state_15078__$1 = state_15078;var statearr_15112_15146 = state_15078__$1;(statearr_15112_15146[2] = inst_15068);
(statearr_15112_15146[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15116[0] = state_machine__5507__auto__);
(statearr_15116[1] = 1);
return statearr_15116;
});
var state_machine__5507__auto____1 = (function (state_15078){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15078);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15117){if((e15117 instanceof Object))
{var ex__5510__auto__ = e15117;var statearr_15118_15147 = state_15078;(statearr_15118_15147[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15078);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15148 = state_15078;
state_15078 = G__15148;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15078){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15078);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15119 = f__5522__auto__.call(null);(statearr_15119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15120);
return statearr_15119;
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
cljs.core.async.Pub = (function (){var obj15150 = {};return obj15150;
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
return (function (p1__15151_SHARP_){if(cljs.core.truth_(p1__15151_SHARP_.call(null,topic)))
{return p1__15151_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15151_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15276 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15276 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15277){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15277 = meta15277;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15276.cljs$lang$type = true;
cljs.core.async.t15276.cljs$lang$ctorStr = "cljs.core.async/t15276";
cljs.core.async.t15276.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15276");
});})(mults,ensure_mult))
;
cljs.core.async.t15276.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15276.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15276.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15276.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15276.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15276.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15276.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15276.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15278){var self__ = this;
var _15278__$1 = this;return self__.meta15277;
});})(mults,ensure_mult))
;
cljs.core.async.t15276.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15278,meta15277__$1){var self__ = this;
var _15278__$1 = this;return (new cljs.core.async.t15276(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15277__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15276 = ((function (mults,ensure_mult){
return (function __GT_t15276(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15277){return (new cljs.core.async.t15276(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15277));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15276(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15400 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15352){var state_val_15353 = (state_15352[1]);if((state_val_15353 === 1))
{var state_15352__$1 = state_15352;var statearr_15354_15401 = state_15352__$1;(statearr_15354_15401[2] = null);
(statearr_15354_15401[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 2))
{var state_15352__$1 = state_15352;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15352__$1,4,ch);
} else
{if((state_val_15353 === 3))
{var inst_15350 = (state_15352[2]);var state_15352__$1 = state_15352;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15352__$1,inst_15350);
} else
{if((state_val_15353 === 4))
{var inst_15281 = (state_15352[7]);var inst_15281__$1 = (state_15352[2]);var inst_15282 = (inst_15281__$1 == null);var state_15352__$1 = (function (){var statearr_15355 = state_15352;(statearr_15355[7] = inst_15281__$1);
return statearr_15355;
})();if(cljs.core.truth_(inst_15282))
{var statearr_15356_15402 = state_15352__$1;(statearr_15356_15402[1] = 5);
} else
{var statearr_15357_15403 = state_15352__$1;(statearr_15357_15403[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 5))
{var inst_15288 = cljs.core.deref.call(null,mults);var inst_15289 = cljs.core.vals.call(null,inst_15288);var inst_15290 = cljs.core.seq.call(null,inst_15289);var inst_15291 = inst_15290;var inst_15292 = null;var inst_15293 = 0;var inst_15294 = 0;var state_15352__$1 = (function (){var statearr_15358 = state_15352;(statearr_15358[8] = inst_15294);
(statearr_15358[9] = inst_15291);
(statearr_15358[10] = inst_15292);
(statearr_15358[11] = inst_15293);
return statearr_15358;
})();var statearr_15359_15404 = state_15352__$1;(statearr_15359_15404[2] = null);
(statearr_15359_15404[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 6))
{var inst_15281 = (state_15352[7]);var inst_15331 = (state_15352[12]);var inst_15329 = (state_15352[13]);var inst_15329__$1 = topic_fn.call(null,inst_15281);var inst_15330 = cljs.core.deref.call(null,mults);var inst_15331__$1 = cljs.core.get.call(null,inst_15330,inst_15329__$1);var state_15352__$1 = (function (){var statearr_15360 = state_15352;(statearr_15360[12] = inst_15331__$1);
(statearr_15360[13] = inst_15329__$1);
return statearr_15360;
})();if(cljs.core.truth_(inst_15331__$1))
{var statearr_15361_15405 = state_15352__$1;(statearr_15361_15405[1] = 19);
} else
{var statearr_15362_15406 = state_15352__$1;(statearr_15362_15406[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 7))
{var inst_15348 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15363_15407 = state_15352__$1;(statearr_15363_15407[2] = inst_15348);
(statearr_15363_15407[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 8))
{var inst_15294 = (state_15352[8]);var inst_15293 = (state_15352[11]);var inst_15296 = (inst_15294 < inst_15293);var inst_15297 = inst_15296;var state_15352__$1 = state_15352;if(cljs.core.truth_(inst_15297))
{var statearr_15367_15408 = state_15352__$1;(statearr_15367_15408[1] = 10);
} else
{var statearr_15368_15409 = state_15352__$1;(statearr_15368_15409[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 9))
{var inst_15327 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15369_15410 = state_15352__$1;(statearr_15369_15410[2] = inst_15327);
(statearr_15369_15410[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 10))
{var inst_15294 = (state_15352[8]);var inst_15291 = (state_15352[9]);var inst_15292 = (state_15352[10]);var inst_15293 = (state_15352[11]);var inst_15299 = cljs.core._nth.call(null,inst_15292,inst_15294);var inst_15300 = cljs.core.async.muxch_STAR_.call(null,inst_15299);var inst_15301 = cljs.core.async.close_BANG_.call(null,inst_15300);var inst_15302 = (inst_15294 + 1);var tmp15364 = inst_15291;var tmp15365 = inst_15292;var tmp15366 = inst_15293;var inst_15291__$1 = tmp15364;var inst_15292__$1 = tmp15365;var inst_15293__$1 = tmp15366;var inst_15294__$1 = inst_15302;var state_15352__$1 = (function (){var statearr_15370 = state_15352;(statearr_15370[8] = inst_15294__$1);
(statearr_15370[14] = inst_15301);
(statearr_15370[9] = inst_15291__$1);
(statearr_15370[10] = inst_15292__$1);
(statearr_15370[11] = inst_15293__$1);
return statearr_15370;
})();var statearr_15371_15411 = state_15352__$1;(statearr_15371_15411[2] = null);
(statearr_15371_15411[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 11))
{var inst_15305 = (state_15352[15]);var inst_15291 = (state_15352[9]);var inst_15305__$1 = cljs.core.seq.call(null,inst_15291);var state_15352__$1 = (function (){var statearr_15372 = state_15352;(statearr_15372[15] = inst_15305__$1);
return statearr_15372;
})();if(inst_15305__$1)
{var statearr_15373_15412 = state_15352__$1;(statearr_15373_15412[1] = 13);
} else
{var statearr_15374_15413 = state_15352__$1;(statearr_15374_15413[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 12))
{var inst_15325 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15375_15414 = state_15352__$1;(statearr_15375_15414[2] = inst_15325);
(statearr_15375_15414[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 13))
{var inst_15305 = (state_15352[15]);var inst_15307 = cljs.core.chunked_seq_QMARK_.call(null,inst_15305);var state_15352__$1 = state_15352;if(inst_15307)
{var statearr_15376_15415 = state_15352__$1;(statearr_15376_15415[1] = 16);
} else
{var statearr_15377_15416 = state_15352__$1;(statearr_15377_15416[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 14))
{var state_15352__$1 = state_15352;var statearr_15378_15417 = state_15352__$1;(statearr_15378_15417[2] = null);
(statearr_15378_15417[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 15))
{var inst_15323 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15379_15418 = state_15352__$1;(statearr_15379_15418[2] = inst_15323);
(statearr_15379_15418[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 16))
{var inst_15305 = (state_15352[15]);var inst_15309 = cljs.core.chunk_first.call(null,inst_15305);var inst_15310 = cljs.core.chunk_rest.call(null,inst_15305);var inst_15311 = cljs.core.count.call(null,inst_15309);var inst_15291 = inst_15310;var inst_15292 = inst_15309;var inst_15293 = inst_15311;var inst_15294 = 0;var state_15352__$1 = (function (){var statearr_15380 = state_15352;(statearr_15380[8] = inst_15294);
(statearr_15380[9] = inst_15291);
(statearr_15380[10] = inst_15292);
(statearr_15380[11] = inst_15293);
return statearr_15380;
})();var statearr_15381_15419 = state_15352__$1;(statearr_15381_15419[2] = null);
(statearr_15381_15419[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 17))
{var inst_15305 = (state_15352[15]);var inst_15314 = cljs.core.first.call(null,inst_15305);var inst_15315 = cljs.core.async.muxch_STAR_.call(null,inst_15314);var inst_15316 = cljs.core.async.close_BANG_.call(null,inst_15315);var inst_15317 = cljs.core.next.call(null,inst_15305);var inst_15291 = inst_15317;var inst_15292 = null;var inst_15293 = 0;var inst_15294 = 0;var state_15352__$1 = (function (){var statearr_15382 = state_15352;(statearr_15382[8] = inst_15294);
(statearr_15382[9] = inst_15291);
(statearr_15382[10] = inst_15292);
(statearr_15382[11] = inst_15293);
(statearr_15382[16] = inst_15316);
return statearr_15382;
})();var statearr_15383_15420 = state_15352__$1;(statearr_15383_15420[2] = null);
(statearr_15383_15420[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 18))
{var inst_15320 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15384_15421 = state_15352__$1;(statearr_15384_15421[2] = inst_15320);
(statearr_15384_15421[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 19))
{var state_15352__$1 = state_15352;var statearr_15385_15422 = state_15352__$1;(statearr_15385_15422[2] = null);
(statearr_15385_15422[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 20))
{var state_15352__$1 = state_15352;var statearr_15386_15423 = state_15352__$1;(statearr_15386_15423[2] = null);
(statearr_15386_15423[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 21))
{var inst_15345 = (state_15352[2]);var state_15352__$1 = (function (){var statearr_15387 = state_15352;(statearr_15387[17] = inst_15345);
return statearr_15387;
})();var statearr_15388_15424 = state_15352__$1;(statearr_15388_15424[2] = null);
(statearr_15388_15424[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 22))
{var inst_15342 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15389_15425 = state_15352__$1;(statearr_15389_15425[2] = inst_15342);
(statearr_15389_15425[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 23))
{var inst_15329 = (state_15352[13]);var inst_15333 = (state_15352[2]);var inst_15334 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15329);var state_15352__$1 = (function (){var statearr_15390 = state_15352;(statearr_15390[18] = inst_15333);
return statearr_15390;
})();var statearr_15391_15426 = state_15352__$1;(statearr_15391_15426[2] = inst_15334);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15353 === 24))
{var inst_15281 = (state_15352[7]);var inst_15331 = (state_15352[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15352,23,Object,null,22);var inst_15338 = cljs.core.async.muxch_STAR_.call(null,inst_15331);var state_15352__$1 = state_15352;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15352__$1,25,inst_15338,inst_15281);
} else
{if((state_val_15353 === 25))
{var inst_15340 = (state_15352[2]);var state_15352__$1 = state_15352;var statearr_15392_15427 = state_15352__$1;(statearr_15392_15427[2] = inst_15340);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15396 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15396[0] = state_machine__5507__auto__);
(statearr_15396[1] = 1);
return statearr_15396;
});
var state_machine__5507__auto____1 = (function (state_15352){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15352);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15397){if((e15397 instanceof Object))
{var ex__5510__auto__ = e15397;var statearr_15398_15428 = state_15352;(statearr_15398_15428[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15352);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15429 = state_15352;
state_15352 = G__15429;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15352){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15352);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15399 = f__5522__auto__.call(null);(statearr_15399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15400);
return statearr_15399;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15566 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15536){var state_val_15537 = (state_15536[1]);if((state_val_15537 === 1))
{var state_15536__$1 = state_15536;var statearr_15538_15567 = state_15536__$1;(statearr_15538_15567[2] = null);
(statearr_15538_15567[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 2))
{var inst_15499 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15500 = 0;var state_15536__$1 = (function (){var statearr_15539 = state_15536;(statearr_15539[7] = inst_15499);
(statearr_15539[8] = inst_15500);
return statearr_15539;
})();var statearr_15540_15568 = state_15536__$1;(statearr_15540_15568[2] = null);
(statearr_15540_15568[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 3))
{var inst_15534 = (state_15536[2]);var state_15536__$1 = state_15536;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15536__$1,inst_15534);
} else
{if((state_val_15537 === 4))
{var inst_15500 = (state_15536[8]);var inst_15502 = (inst_15500 < cnt);var state_15536__$1 = state_15536;if(cljs.core.truth_(inst_15502))
{var statearr_15541_15569 = state_15536__$1;(statearr_15541_15569[1] = 6);
} else
{var statearr_15542_15570 = state_15536__$1;(statearr_15542_15570[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 5))
{var inst_15520 = (state_15536[2]);var state_15536__$1 = (function (){var statearr_15543 = state_15536;(statearr_15543[9] = inst_15520);
return statearr_15543;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15536__$1,12,dchan);
} else
{if((state_val_15537 === 6))
{var state_15536__$1 = state_15536;var statearr_15544_15571 = state_15536__$1;(statearr_15544_15571[2] = null);
(statearr_15544_15571[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 7))
{var state_15536__$1 = state_15536;var statearr_15545_15572 = state_15536__$1;(statearr_15545_15572[2] = null);
(statearr_15545_15572[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 8))
{var inst_15518 = (state_15536[2]);var state_15536__$1 = state_15536;var statearr_15546_15573 = state_15536__$1;(statearr_15546_15573[2] = inst_15518);
(statearr_15546_15573[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 9))
{var inst_15500 = (state_15536[8]);var inst_15513 = (state_15536[2]);var inst_15514 = (inst_15500 + 1);var inst_15500__$1 = inst_15514;var state_15536__$1 = (function (){var statearr_15547 = state_15536;(statearr_15547[8] = inst_15500__$1);
(statearr_15547[10] = inst_15513);
return statearr_15547;
})();var statearr_15548_15574 = state_15536__$1;(statearr_15548_15574[2] = null);
(statearr_15548_15574[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 10))
{var inst_15504 = (state_15536[2]);var inst_15505 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15536__$1 = (function (){var statearr_15549 = state_15536;(statearr_15549[11] = inst_15504);
return statearr_15549;
})();var statearr_15550_15575 = state_15536__$1;(statearr_15550_15575[2] = inst_15505);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15536__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 11))
{var inst_15500 = (state_15536[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15536,10,Object,null,9);var inst_15509 = chs__$1.call(null,inst_15500);var inst_15510 = done.call(null,inst_15500);var inst_15511 = cljs.core.async.take_BANG_.call(null,inst_15509,inst_15510);var state_15536__$1 = state_15536;var statearr_15551_15576 = state_15536__$1;(statearr_15551_15576[2] = inst_15511);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15536__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 12))
{var inst_15522 = (state_15536[12]);var inst_15522__$1 = (state_15536[2]);var inst_15523 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15522__$1);var state_15536__$1 = (function (){var statearr_15552 = state_15536;(statearr_15552[12] = inst_15522__$1);
return statearr_15552;
})();if(cljs.core.truth_(inst_15523))
{var statearr_15553_15577 = state_15536__$1;(statearr_15553_15577[1] = 13);
} else
{var statearr_15554_15578 = state_15536__$1;(statearr_15554_15578[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 13))
{var inst_15525 = cljs.core.async.close_BANG_.call(null,out);var state_15536__$1 = state_15536;var statearr_15555_15579 = state_15536__$1;(statearr_15555_15579[2] = inst_15525);
(statearr_15555_15579[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 14))
{var inst_15522 = (state_15536[12]);var inst_15527 = cljs.core.apply.call(null,f,inst_15522);var state_15536__$1 = state_15536;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15536__$1,16,out,inst_15527);
} else
{if((state_val_15537 === 15))
{var inst_15532 = (state_15536[2]);var state_15536__$1 = state_15536;var statearr_15556_15580 = state_15536__$1;(statearr_15556_15580[2] = inst_15532);
(statearr_15556_15580[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15537 === 16))
{var inst_15529 = (state_15536[2]);var state_15536__$1 = (function (){var statearr_15557 = state_15536;(statearr_15557[13] = inst_15529);
return statearr_15557;
})();var statearr_15558_15581 = state_15536__$1;(statearr_15558_15581[2] = null);
(statearr_15558_15581[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15562[0] = state_machine__5507__auto__);
(statearr_15562[1] = 1);
return statearr_15562;
});
var state_machine__5507__auto____1 = (function (state_15536){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15536);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15563){if((e15563 instanceof Object))
{var ex__5510__auto__ = e15563;var statearr_15564_15582 = state_15536;(statearr_15564_15582[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15536);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15563;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15583 = state_15536;
state_15536 = G__15583;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15536){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15565 = f__5522__auto__.call(null);(statearr_15565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15566);
return statearr_15565;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15691 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15667){var state_val_15668 = (state_15667[1]);if((state_val_15668 === 1))
{var inst_15638 = cljs.core.vec.call(null,chs);var inst_15639 = inst_15638;var state_15667__$1 = (function (){var statearr_15669 = state_15667;(statearr_15669[7] = inst_15639);
return statearr_15669;
})();var statearr_15670_15692 = state_15667__$1;(statearr_15670_15692[2] = null);
(statearr_15670_15692[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 2))
{var inst_15639 = (state_15667[7]);var inst_15641 = cljs.core.count.call(null,inst_15639);var inst_15642 = (inst_15641 > 0);var state_15667__$1 = state_15667;if(cljs.core.truth_(inst_15642))
{var statearr_15671_15693 = state_15667__$1;(statearr_15671_15693[1] = 4);
} else
{var statearr_15672_15694 = state_15667__$1;(statearr_15672_15694[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 3))
{var inst_15665 = (state_15667[2]);var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15667__$1,inst_15665);
} else
{if((state_val_15668 === 4))
{var inst_15639 = (state_15667[7]);var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15667__$1,7,inst_15639);
} else
{if((state_val_15668 === 5))
{var inst_15661 = cljs.core.async.close_BANG_.call(null,out);var state_15667__$1 = state_15667;var statearr_15673_15695 = state_15667__$1;(statearr_15673_15695[2] = inst_15661);
(statearr_15673_15695[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 6))
{var inst_15663 = (state_15667[2]);var state_15667__$1 = state_15667;var statearr_15674_15696 = state_15667__$1;(statearr_15674_15696[2] = inst_15663);
(statearr_15674_15696[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 7))
{var inst_15647 = (state_15667[8]);var inst_15646 = (state_15667[9]);var inst_15646__$1 = (state_15667[2]);var inst_15647__$1 = cljs.core.nth.call(null,inst_15646__$1,0,null);var inst_15648 = cljs.core.nth.call(null,inst_15646__$1,1,null);var inst_15649 = (inst_15647__$1 == null);var state_15667__$1 = (function (){var statearr_15675 = state_15667;(statearr_15675[8] = inst_15647__$1);
(statearr_15675[10] = inst_15648);
(statearr_15675[9] = inst_15646__$1);
return statearr_15675;
})();if(cljs.core.truth_(inst_15649))
{var statearr_15676_15697 = state_15667__$1;(statearr_15676_15697[1] = 8);
} else
{var statearr_15677_15698 = state_15667__$1;(statearr_15677_15698[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 8))
{var inst_15647 = (state_15667[8]);var inst_15648 = (state_15667[10]);var inst_15646 = (state_15667[9]);var inst_15639 = (state_15667[7]);var inst_15651 = (function (){var c = inst_15648;var v = inst_15647;var vec__15644 = inst_15646;var cs = inst_15639;return ((function (c,v,vec__15644,cs,inst_15647,inst_15648,inst_15646,inst_15639,state_val_15668){
return (function (p1__15584_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15584_SHARP_);
});
;})(c,v,vec__15644,cs,inst_15647,inst_15648,inst_15646,inst_15639,state_val_15668))
})();var inst_15652 = cljs.core.filterv.call(null,inst_15651,inst_15639);var inst_15639__$1 = inst_15652;var state_15667__$1 = (function (){var statearr_15678 = state_15667;(statearr_15678[7] = inst_15639__$1);
return statearr_15678;
})();var statearr_15679_15699 = state_15667__$1;(statearr_15679_15699[2] = null);
(statearr_15679_15699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 9))
{var inst_15647 = (state_15667[8]);var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15667__$1,11,out,inst_15647);
} else
{if((state_val_15668 === 10))
{var inst_15659 = (state_15667[2]);var state_15667__$1 = state_15667;var statearr_15681_15700 = state_15667__$1;(statearr_15681_15700[2] = inst_15659);
(statearr_15681_15700[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 11))
{var inst_15639 = (state_15667[7]);var inst_15656 = (state_15667[2]);var tmp15680 = inst_15639;var inst_15639__$1 = tmp15680;var state_15667__$1 = (function (){var statearr_15682 = state_15667;(statearr_15682[11] = inst_15656);
(statearr_15682[7] = inst_15639__$1);
return statearr_15682;
})();var statearr_15683_15701 = state_15667__$1;(statearr_15683_15701[2] = null);
(statearr_15683_15701[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15687 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15687[0] = state_machine__5507__auto__);
(statearr_15687[1] = 1);
return statearr_15687;
});
var state_machine__5507__auto____1 = (function (state_15667){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15667);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15688){if((e15688 instanceof Object))
{var ex__5510__auto__ = e15688;var statearr_15689_15702 = state_15667;(statearr_15689_15702[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15688;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15703 = state_15667;
state_15667 = G__15703;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15667){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15690 = f__5522__auto__.call(null);(statearr_15690[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15691);
return statearr_15690;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15796 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15773){var state_val_15774 = (state_15773[1]);if((state_val_15774 === 1))
{var inst_15750 = 0;var state_15773__$1 = (function (){var statearr_15775 = state_15773;(statearr_15775[7] = inst_15750);
return statearr_15775;
})();var statearr_15776_15797 = state_15773__$1;(statearr_15776_15797[2] = null);
(statearr_15776_15797[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 2))
{var inst_15750 = (state_15773[7]);var inst_15752 = (inst_15750 < n);var state_15773__$1 = state_15773;if(cljs.core.truth_(inst_15752))
{var statearr_15777_15798 = state_15773__$1;(statearr_15777_15798[1] = 4);
} else
{var statearr_15778_15799 = state_15773__$1;(statearr_15778_15799[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 3))
{var inst_15770 = (state_15773[2]);var inst_15771 = cljs.core.async.close_BANG_.call(null,out);var state_15773__$1 = (function (){var statearr_15779 = state_15773;(statearr_15779[8] = inst_15770);
return statearr_15779;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15773__$1,inst_15771);
} else
{if((state_val_15774 === 4))
{var state_15773__$1 = state_15773;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15773__$1,7,ch);
} else
{if((state_val_15774 === 5))
{var state_15773__$1 = state_15773;var statearr_15780_15800 = state_15773__$1;(statearr_15780_15800[2] = null);
(statearr_15780_15800[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 6))
{var inst_15768 = (state_15773[2]);var state_15773__$1 = state_15773;var statearr_15781_15801 = state_15773__$1;(statearr_15781_15801[2] = inst_15768);
(statearr_15781_15801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 7))
{var inst_15755 = (state_15773[9]);var inst_15755__$1 = (state_15773[2]);var inst_15756 = (inst_15755__$1 == null);var inst_15757 = cljs.core.not.call(null,inst_15756);var state_15773__$1 = (function (){var statearr_15782 = state_15773;(statearr_15782[9] = inst_15755__$1);
return statearr_15782;
})();if(inst_15757)
{var statearr_15783_15802 = state_15773__$1;(statearr_15783_15802[1] = 8);
} else
{var statearr_15784_15803 = state_15773__$1;(statearr_15784_15803[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 8))
{var inst_15755 = (state_15773[9]);var state_15773__$1 = state_15773;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15773__$1,11,out,inst_15755);
} else
{if((state_val_15774 === 9))
{var state_15773__$1 = state_15773;var statearr_15785_15804 = state_15773__$1;(statearr_15785_15804[2] = null);
(statearr_15785_15804[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 10))
{var inst_15765 = (state_15773[2]);var state_15773__$1 = state_15773;var statearr_15786_15805 = state_15773__$1;(statearr_15786_15805[2] = inst_15765);
(statearr_15786_15805[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15774 === 11))
{var inst_15750 = (state_15773[7]);var inst_15760 = (state_15773[2]);var inst_15761 = (inst_15750 + 1);var inst_15750__$1 = inst_15761;var state_15773__$1 = (function (){var statearr_15787 = state_15773;(statearr_15787[7] = inst_15750__$1);
(statearr_15787[10] = inst_15760);
return statearr_15787;
})();var statearr_15788_15806 = state_15773__$1;(statearr_15788_15806[2] = null);
(statearr_15788_15806[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15792 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15792[0] = state_machine__5507__auto__);
(statearr_15792[1] = 1);
return statearr_15792;
});
var state_machine__5507__auto____1 = (function (state_15773){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15773);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15793){if((e15793 instanceof Object))
{var ex__5510__auto__ = e15793;var statearr_15794_15807 = state_15773;(statearr_15794_15807[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15773);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15793;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15808 = state_15773;
state_15773 = G__15808;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15773){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15773);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15795 = f__5522__auto__.call(null);(statearr_15795[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15796);
return statearr_15795;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15905 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15880){var state_val_15881 = (state_15880[1]);if((state_val_15881 === 1))
{var inst_15857 = null;var state_15880__$1 = (function (){var statearr_15882 = state_15880;(statearr_15882[7] = inst_15857);
return statearr_15882;
})();var statearr_15883_15906 = state_15880__$1;(statearr_15883_15906[2] = null);
(statearr_15883_15906[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15881 === 2))
{var state_15880__$1 = state_15880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15880__$1,4,ch);
} else
{if((state_val_15881 === 3))
{var inst_15877 = (state_15880[2]);var inst_15878 = cljs.core.async.close_BANG_.call(null,out);var state_15880__$1 = (function (){var statearr_15884 = state_15880;(statearr_15884[8] = inst_15877);
return statearr_15884;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15880__$1,inst_15878);
} else
{if((state_val_15881 === 4))
{var inst_15860 = (state_15880[9]);var inst_15860__$1 = (state_15880[2]);var inst_15861 = (inst_15860__$1 == null);var inst_15862 = cljs.core.not.call(null,inst_15861);var state_15880__$1 = (function (){var statearr_15885 = state_15880;(statearr_15885[9] = inst_15860__$1);
return statearr_15885;
})();if(inst_15862)
{var statearr_15886_15907 = state_15880__$1;(statearr_15886_15907[1] = 5);
} else
{var statearr_15887_15908 = state_15880__$1;(statearr_15887_15908[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15881 === 5))
{var inst_15857 = (state_15880[7]);var inst_15860 = (state_15880[9]);var inst_15864 = cljs.core._EQ_.call(null,inst_15860,inst_15857);var state_15880__$1 = state_15880;if(inst_15864)
{var statearr_15888_15909 = state_15880__$1;(statearr_15888_15909[1] = 8);
} else
{var statearr_15889_15910 = state_15880__$1;(statearr_15889_15910[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15881 === 6))
{var state_15880__$1 = state_15880;var statearr_15891_15911 = state_15880__$1;(statearr_15891_15911[2] = null);
(statearr_15891_15911[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15881 === 7))
{var inst_15875 = (state_15880[2]);var state_15880__$1 = state_15880;var statearr_15892_15912 = state_15880__$1;(statearr_15892_15912[2] = inst_15875);
(statearr_15892_15912[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15881 === 8))
{var inst_15857 = (state_15880[7]);var tmp15890 = inst_15857;var inst_15857__$1 = tmp15890;var state_15880__$1 = (function (){var statearr_15893 = state_15880;(statearr_15893[7] = inst_15857__$1);
return statearr_15893;
})();var statearr_15894_15913 = state_15880__$1;(statearr_15894_15913[2] = null);
(statearr_15894_15913[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15881 === 9))
{var inst_15860 = (state_15880[9]);var state_15880__$1 = state_15880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15880__$1,11,out,inst_15860);
} else
{if((state_val_15881 === 10))
{var inst_15872 = (state_15880[2]);var state_15880__$1 = state_15880;var statearr_15895_15914 = state_15880__$1;(statearr_15895_15914[2] = inst_15872);
(statearr_15895_15914[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15881 === 11))
{var inst_15860 = (state_15880[9]);var inst_15869 = (state_15880[2]);var inst_15857 = inst_15860;var state_15880__$1 = (function (){var statearr_15896 = state_15880;(statearr_15896[7] = inst_15857);
(statearr_15896[10] = inst_15869);
return statearr_15896;
})();var statearr_15897_15915 = state_15880__$1;(statearr_15897_15915[2] = null);
(statearr_15897_15915[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15901 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15901[0] = state_machine__5507__auto__);
(statearr_15901[1] = 1);
return statearr_15901;
});
var state_machine__5507__auto____1 = (function (state_15880){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15880);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15902){if((e15902 instanceof Object))
{var ex__5510__auto__ = e15902;var statearr_15903_15916 = state_15880;(statearr_15903_15916[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15902;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15917 = state_15880;
state_15880 = G__15917;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15880){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15904 = f__5522__auto__.call(null);(statearr_15904[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15905);
return statearr_15904;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16052 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16022){var state_val_16023 = (state_16022[1]);if((state_val_16023 === 1))
{var inst_15985 = (new Array(n));var inst_15986 = inst_15985;var inst_15987 = 0;var state_16022__$1 = (function (){var statearr_16024 = state_16022;(statearr_16024[7] = inst_15987);
(statearr_16024[8] = inst_15986);
return statearr_16024;
})();var statearr_16025_16053 = state_16022__$1;(statearr_16025_16053[2] = null);
(statearr_16025_16053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 2))
{var state_16022__$1 = state_16022;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16022__$1,4,ch);
} else
{if((state_val_16023 === 3))
{var inst_16020 = (state_16022[2]);var state_16022__$1 = state_16022;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16022__$1,inst_16020);
} else
{if((state_val_16023 === 4))
{var inst_15990 = (state_16022[9]);var inst_15990__$1 = (state_16022[2]);var inst_15991 = (inst_15990__$1 == null);var inst_15992 = cljs.core.not.call(null,inst_15991);var state_16022__$1 = (function (){var statearr_16026 = state_16022;(statearr_16026[9] = inst_15990__$1);
return statearr_16026;
})();if(inst_15992)
{var statearr_16027_16054 = state_16022__$1;(statearr_16027_16054[1] = 5);
} else
{var statearr_16028_16055 = state_16022__$1;(statearr_16028_16055[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 5))
{var inst_15987 = (state_16022[7]);var inst_15986 = (state_16022[8]);var inst_15990 = (state_16022[9]);var inst_15995 = (state_16022[10]);var inst_15994 = (inst_15986[inst_15987] = inst_15990);var inst_15995__$1 = (inst_15987 + 1);var inst_15996 = (inst_15995__$1 < n);var state_16022__$1 = (function (){var statearr_16029 = state_16022;(statearr_16029[11] = inst_15994);
(statearr_16029[10] = inst_15995__$1);
return statearr_16029;
})();if(cljs.core.truth_(inst_15996))
{var statearr_16030_16056 = state_16022__$1;(statearr_16030_16056[1] = 8);
} else
{var statearr_16031_16057 = state_16022__$1;(statearr_16031_16057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 6))
{var inst_15987 = (state_16022[7]);var inst_16008 = (inst_15987 > 0);var state_16022__$1 = state_16022;if(cljs.core.truth_(inst_16008))
{var statearr_16033_16058 = state_16022__$1;(statearr_16033_16058[1] = 12);
} else
{var statearr_16034_16059 = state_16022__$1;(statearr_16034_16059[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 7))
{var inst_16018 = (state_16022[2]);var state_16022__$1 = state_16022;var statearr_16035_16060 = state_16022__$1;(statearr_16035_16060[2] = inst_16018);
(statearr_16035_16060[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 8))
{var inst_15986 = (state_16022[8]);var inst_15995 = (state_16022[10]);var tmp16032 = inst_15986;var inst_15986__$1 = tmp16032;var inst_15987 = inst_15995;var state_16022__$1 = (function (){var statearr_16036 = state_16022;(statearr_16036[7] = inst_15987);
(statearr_16036[8] = inst_15986__$1);
return statearr_16036;
})();var statearr_16037_16061 = state_16022__$1;(statearr_16037_16061[2] = null);
(statearr_16037_16061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 9))
{var inst_15986 = (state_16022[8]);var inst_16000 = cljs.core.vec.call(null,inst_15986);var state_16022__$1 = state_16022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16022__$1,11,out,inst_16000);
} else
{if((state_val_16023 === 10))
{var inst_16006 = (state_16022[2]);var state_16022__$1 = state_16022;var statearr_16038_16062 = state_16022__$1;(statearr_16038_16062[2] = inst_16006);
(statearr_16038_16062[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 11))
{var inst_16002 = (state_16022[2]);var inst_16003 = (new Array(n));var inst_15986 = inst_16003;var inst_15987 = 0;var state_16022__$1 = (function (){var statearr_16039 = state_16022;(statearr_16039[7] = inst_15987);
(statearr_16039[8] = inst_15986);
(statearr_16039[12] = inst_16002);
return statearr_16039;
})();var statearr_16040_16063 = state_16022__$1;(statearr_16040_16063[2] = null);
(statearr_16040_16063[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 12))
{var inst_15986 = (state_16022[8]);var inst_16010 = cljs.core.vec.call(null,inst_15986);var state_16022__$1 = state_16022;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16022__$1,15,out,inst_16010);
} else
{if((state_val_16023 === 13))
{var state_16022__$1 = state_16022;var statearr_16041_16064 = state_16022__$1;(statearr_16041_16064[2] = null);
(statearr_16041_16064[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 14))
{var inst_16015 = (state_16022[2]);var inst_16016 = cljs.core.async.close_BANG_.call(null,out);var state_16022__$1 = (function (){var statearr_16042 = state_16022;(statearr_16042[13] = inst_16015);
return statearr_16042;
})();var statearr_16043_16065 = state_16022__$1;(statearr_16043_16065[2] = inst_16016);
(statearr_16043_16065[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16023 === 15))
{var inst_16012 = (state_16022[2]);var state_16022__$1 = state_16022;var statearr_16044_16066 = state_16022__$1;(statearr_16044_16066[2] = inst_16012);
(statearr_16044_16066[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16048 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16048[0] = state_machine__5507__auto__);
(statearr_16048[1] = 1);
return statearr_16048;
});
var state_machine__5507__auto____1 = (function (state_16022){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16022);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16049){if((e16049 instanceof Object))
{var ex__5510__auto__ = e16049;var statearr_16050_16067 = state_16022;(statearr_16050_16067[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16022);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16049;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16068 = state_16022;
state_16022 = G__16068;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16022){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16051 = f__5522__auto__.call(null);(statearr_16051[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16052);
return statearr_16051;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16211 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16181){var state_val_16182 = (state_16181[1]);if((state_val_16182 === 1))
{var inst_16140 = [];var inst_16141 = inst_16140;var inst_16142 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16181__$1 = (function (){var statearr_16183 = state_16181;(statearr_16183[7] = inst_16142);
(statearr_16183[8] = inst_16141);
return statearr_16183;
})();var statearr_16184_16212 = state_16181__$1;(statearr_16184_16212[2] = null);
(statearr_16184_16212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 2))
{var state_16181__$1 = state_16181;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16181__$1,4,ch);
} else
{if((state_val_16182 === 3))
{var inst_16179 = (state_16181[2]);var state_16181__$1 = state_16181;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16181__$1,inst_16179);
} else
{if((state_val_16182 === 4))
{var inst_16145 = (state_16181[9]);var inst_16145__$1 = (state_16181[2]);var inst_16146 = (inst_16145__$1 == null);var inst_16147 = cljs.core.not.call(null,inst_16146);var state_16181__$1 = (function (){var statearr_16185 = state_16181;(statearr_16185[9] = inst_16145__$1);
return statearr_16185;
})();if(inst_16147)
{var statearr_16186_16213 = state_16181__$1;(statearr_16186_16213[1] = 5);
} else
{var statearr_16187_16214 = state_16181__$1;(statearr_16187_16214[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 5))
{var inst_16145 = (state_16181[9]);var inst_16142 = (state_16181[7]);var inst_16149 = (state_16181[10]);var inst_16149__$1 = f.call(null,inst_16145);var inst_16150 = cljs.core._EQ_.call(null,inst_16149__$1,inst_16142);var inst_16151 = cljs.core.keyword_identical_QMARK_.call(null,inst_16142,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16152 = (inst_16150) || (inst_16151);var state_16181__$1 = (function (){var statearr_16188 = state_16181;(statearr_16188[10] = inst_16149__$1);
return statearr_16188;
})();if(cljs.core.truth_(inst_16152))
{var statearr_16189_16215 = state_16181__$1;(statearr_16189_16215[1] = 8);
} else
{var statearr_16190_16216 = state_16181__$1;(statearr_16190_16216[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 6))
{var inst_16141 = (state_16181[8]);var inst_16166 = inst_16141.length;var inst_16167 = (inst_16166 > 0);var state_16181__$1 = state_16181;if(cljs.core.truth_(inst_16167))
{var statearr_16192_16217 = state_16181__$1;(statearr_16192_16217[1] = 12);
} else
{var statearr_16193_16218 = state_16181__$1;(statearr_16193_16218[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 7))
{var inst_16177 = (state_16181[2]);var state_16181__$1 = state_16181;var statearr_16194_16219 = state_16181__$1;(statearr_16194_16219[2] = inst_16177);
(statearr_16194_16219[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 8))
{var inst_16145 = (state_16181[9]);var inst_16141 = (state_16181[8]);var inst_16149 = (state_16181[10]);var inst_16154 = inst_16141.push(inst_16145);var tmp16191 = inst_16141;var inst_16141__$1 = tmp16191;var inst_16142 = inst_16149;var state_16181__$1 = (function (){var statearr_16195 = state_16181;(statearr_16195[7] = inst_16142);
(statearr_16195[8] = inst_16141__$1);
(statearr_16195[11] = inst_16154);
return statearr_16195;
})();var statearr_16196_16220 = state_16181__$1;(statearr_16196_16220[2] = null);
(statearr_16196_16220[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 9))
{var inst_16141 = (state_16181[8]);var inst_16157 = cljs.core.vec.call(null,inst_16141);var state_16181__$1 = state_16181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16181__$1,11,out,inst_16157);
} else
{if((state_val_16182 === 10))
{var inst_16164 = (state_16181[2]);var state_16181__$1 = state_16181;var statearr_16197_16221 = state_16181__$1;(statearr_16197_16221[2] = inst_16164);
(statearr_16197_16221[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 11))
{var inst_16145 = (state_16181[9]);var inst_16149 = (state_16181[10]);var inst_16159 = (state_16181[2]);var inst_16160 = [];var inst_16161 = inst_16160.push(inst_16145);var inst_16141 = inst_16160;var inst_16142 = inst_16149;var state_16181__$1 = (function (){var statearr_16198 = state_16181;(statearr_16198[7] = inst_16142);
(statearr_16198[8] = inst_16141);
(statearr_16198[12] = inst_16159);
(statearr_16198[13] = inst_16161);
return statearr_16198;
})();var statearr_16199_16222 = state_16181__$1;(statearr_16199_16222[2] = null);
(statearr_16199_16222[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 12))
{var inst_16141 = (state_16181[8]);var inst_16169 = cljs.core.vec.call(null,inst_16141);var state_16181__$1 = state_16181;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16181__$1,15,out,inst_16169);
} else
{if((state_val_16182 === 13))
{var state_16181__$1 = state_16181;var statearr_16200_16223 = state_16181__$1;(statearr_16200_16223[2] = null);
(statearr_16200_16223[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 14))
{var inst_16174 = (state_16181[2]);var inst_16175 = cljs.core.async.close_BANG_.call(null,out);var state_16181__$1 = (function (){var statearr_16201 = state_16181;(statearr_16201[14] = inst_16174);
return statearr_16201;
})();var statearr_16202_16224 = state_16181__$1;(statearr_16202_16224[2] = inst_16175);
(statearr_16202_16224[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16182 === 15))
{var inst_16171 = (state_16181[2]);var state_16181__$1 = state_16181;var statearr_16203_16225 = state_16181__$1;(statearr_16203_16225[2] = inst_16171);
(statearr_16203_16225[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16207 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16207[0] = state_machine__5507__auto__);
(statearr_16207[1] = 1);
return statearr_16207;
});
var state_machine__5507__auto____1 = (function (state_16181){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16181);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16208){if((e16208 instanceof Object))
{var ex__5510__auto__ = e16208;var statearr_16209_16226 = state_16181;(statearr_16209_16226[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16181);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16208;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16227 = state_16181;
state_16181 = G__16227;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16181){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16181);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16210 = f__5522__auto__.call(null);(statearr_16210[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16211);
return statearr_16210;
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