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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t23953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23953 = (function (f,fn_handler,meta23954){
this.f = f;
this.fn_handler = fn_handler;
this.meta23954 = meta23954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23953.cljs$lang$type = true;
cljs.core.async.t23953.cljs$lang$ctorStr = "cljs.core.async/t23953";
cljs.core.async.t23953.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t23953");
});
cljs.core.async.t23953.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23953.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t23953.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t23953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23955){var self__ = this;
var _23955__$1 = this;return self__.meta23954;
});
cljs.core.async.t23953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23955,meta23954__$1){var self__ = this;
var _23955__$1 = this;return (new cljs.core.async.t23953(self__.f,self__.fn_handler,meta23954__$1));
});
cljs.core.async.__GT_t23953 = (function __GT_t23953(f__$1,fn_handler__$1,meta23954){return (new cljs.core.async.t23953(f__$1,fn_handler__$1,meta23954));
});
}
return (new cljs.core.async.t23953(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__23957 = buff;if(G__23957)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__23957.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__23957.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23957);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__23957);
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
{var val_23958 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_23958);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_23958);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___23959 = n;var x_23960 = 0;while(true){
if((x_23960 < n__4248__auto___23959))
{(a[x_23960] = 0);
{
var G__23961 = (x_23960 + 1);
x_23960 = G__23961;
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
var G__23962 = (i + 1);
i = G__23962;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t23966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23966 = (function (flag,alt_flag,meta23967){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta23967 = meta23967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23966.cljs$lang$type = true;
cljs.core.async.t23966.cljs$lang$ctorStr = "cljs.core.async/t23966";
cljs.core.async.t23966.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t23966");
});
cljs.core.async.t23966.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23966.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t23966.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t23966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23968){var self__ = this;
var _23968__$1 = this;return self__.meta23967;
});
cljs.core.async.t23966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23968,meta23967__$1){var self__ = this;
var _23968__$1 = this;return (new cljs.core.async.t23966(self__.flag,self__.alt_flag,meta23967__$1));
});
cljs.core.async.__GT_t23966 = (function __GT_t23966(flag__$1,alt_flag__$1,meta23967){return (new cljs.core.async.t23966(flag__$1,alt_flag__$1,meta23967));
});
}
return (new cljs.core.async.t23966(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t23972 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23972 = (function (cb,flag,alt_handler,meta23973){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta23973 = meta23973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23972.cljs$lang$type = true;
cljs.core.async.t23972.cljs$lang$ctorStr = "cljs.core.async/t23972";
cljs.core.async.t23972.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t23972");
});
cljs.core.async.t23972.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t23972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t23972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23974){var self__ = this;
var _23974__$1 = this;return self__.meta23973;
});
cljs.core.async.t23972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23974,meta23973__$1){var self__ = this;
var _23974__$1 = this;return (new cljs.core.async.t23972(self__.cb,self__.flag,self__.alt_handler,meta23973__$1));
});
cljs.core.async.__GT_t23972 = (function __GT_t23972(cb__$1,flag__$1,alt_handler__$1,meta23973){return (new cljs.core.async.t23972(cb__$1,flag__$1,alt_handler__$1,meta23973));
});
}
return (new cljs.core.async.t23972(cb,flag,alt_handler,null));
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
return (function (p1__23975_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__23975_SHARP_,port], null));
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
var G__23976 = (i + 1);
i = G__23976;
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
var alts_BANG___delegate = function (ports,p__23977){var map__23979 = p__23977;var map__23979__$1 = ((cljs.core.seq_QMARK_.call(null,map__23979))?cljs.core.apply.call(null,cljs.core.hash_map,map__23979):map__23979);var opts = map__23979__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__23977 = null;if (arguments.length > 1) {
  p__23977 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__23977);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__23980){
var ports = cljs.core.first(arglist__23980);
var p__23977 = cljs.core.rest(arglist__23980);
return alts_BANG___delegate(ports,p__23977);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t23988 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23988 = (function (ch,f,map_LT_,meta23989){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23989 = meta23989;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23988.cljs$lang$type = true;
cljs.core.async.t23988.cljs$lang$ctorStr = "cljs.core.async/t23988";
cljs.core.async.t23988.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t23988");
});
cljs.core.async.t23988.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23988.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t23988.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23988.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t23991 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23991 = (function (fn1,_,meta23989,ch,f,map_LT_,meta23992){
this.fn1 = fn1;
this._ = _;
this.meta23989 = meta23989;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta23992 = meta23992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23991.cljs$lang$type = true;
cljs.core.async.t23991.cljs$lang$ctorStr = "cljs.core.async/t23991";
cljs.core.async.t23991.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t23991");
});
cljs.core.async.t23991.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t23991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t23991.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t23991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__23981_SHARP_){return f1.call(null,(((p1__23981_SHARP_ == null))?null:self__.f.call(null,p1__23981_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t23991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23993){var self__ = this;
var _23993__$1 = this;return self__.meta23992;
});
cljs.core.async.t23991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23993,meta23992__$1){var self__ = this;
var _23993__$1 = this;return (new cljs.core.async.t23991(self__.fn1,self__._,self__.meta23989,self__.ch,self__.f,self__.map_LT_,meta23992__$1));
});
cljs.core.async.__GT_t23991 = (function __GT_t23991(fn1__$1,___$2,meta23989__$1,ch__$2,f__$2,map_LT___$2,meta23992){return (new cljs.core.async.t23991(fn1__$1,___$2,meta23989__$1,ch__$2,f__$2,map_LT___$2,meta23992));
});
}
return (new cljs.core.async.t23991(fn1,___$1,self__.meta23989,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t23988.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23988.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23988.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23990){var self__ = this;
var _23990__$1 = this;return self__.meta23989;
});
cljs.core.async.t23988.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23990,meta23989__$1){var self__ = this;
var _23990__$1 = this;return (new cljs.core.async.t23988(self__.ch,self__.f,self__.map_LT_,meta23989__$1));
});
cljs.core.async.__GT_t23988 = (function __GT_t23988(ch__$1,f__$1,map_LT___$1,meta23989){return (new cljs.core.async.t23988(ch__$1,f__$1,map_LT___$1,meta23989));
});
}
return (new cljs.core.async.t23988(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t23997 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t23997 = (function (ch,f,map_GT_,meta23998){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta23998 = meta23998;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t23997.cljs$lang$type = true;
cljs.core.async.t23997.cljs$lang$ctorStr = "cljs.core.async/t23997";
cljs.core.async.t23997.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t23997");
});
cljs.core.async.t23997.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t23997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t23997.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t23997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t23997.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t23997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t23997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_23999){var self__ = this;
var _23999__$1 = this;return self__.meta23998;
});
cljs.core.async.t23997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_23999,meta23998__$1){var self__ = this;
var _23999__$1 = this;return (new cljs.core.async.t23997(self__.ch,self__.f,self__.map_GT_,meta23998__$1));
});
cljs.core.async.__GT_t23997 = (function __GT_t23997(ch__$1,f__$1,map_GT___$1,meta23998){return (new cljs.core.async.t23997(ch__$1,f__$1,map_GT___$1,meta23998));
});
}
return (new cljs.core.async.t23997(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t24003 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24003 = (function (ch,p,filter_GT_,meta24004){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta24004 = meta24004;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24003.cljs$lang$type = true;
cljs.core.async.t24003.cljs$lang$ctorStr = "cljs.core.async/t24003";
cljs.core.async.t24003.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t24003");
});
cljs.core.async.t24003.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t24003.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t24003.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t24003.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t24003.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t24003.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t24003.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24005){var self__ = this;
var _24005__$1 = this;return self__.meta24004;
});
cljs.core.async.t24003.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24005,meta24004__$1){var self__ = this;
var _24005__$1 = this;return (new cljs.core.async.t24003(self__.ch,self__.p,self__.filter_GT_,meta24004__$1));
});
cljs.core.async.__GT_t24003 = (function __GT_t24003(ch__$1,p__$1,filter_GT___$1,meta24004){return (new cljs.core.async.t24003(ch__$1,p__$1,filter_GT___$1,meta24004));
});
}
return (new cljs.core.async.t24003(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___24088 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24067){var state_val_24068 = (state_24067[1]);if((state_val_24068 === 1))
{var state_24067__$1 = state_24067;var statearr_24069_24089 = state_24067__$1;(statearr_24069_24089[2] = null);
(statearr_24069_24089[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24068 === 2))
{var state_24067__$1 = state_24067;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24067__$1,4,ch);
} else
{if((state_val_24068 === 3))
{var inst_24065 = (state_24067[2]);var state_24067__$1 = state_24067;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24067__$1,inst_24065);
} else
{if((state_val_24068 === 4))
{var inst_24049 = (state_24067[7]);var inst_24049__$1 = (state_24067[2]);var inst_24050 = (inst_24049__$1 == null);var state_24067__$1 = (function (){var statearr_24070 = state_24067;(statearr_24070[7] = inst_24049__$1);
return statearr_24070;
})();if(cljs.core.truth_(inst_24050))
{var statearr_24071_24090 = state_24067__$1;(statearr_24071_24090[1] = 5);
} else
{var statearr_24072_24091 = state_24067__$1;(statearr_24072_24091[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24068 === 5))
{var inst_24052 = cljs.core.async.close_BANG_.call(null,out);var state_24067__$1 = state_24067;var statearr_24073_24092 = state_24067__$1;(statearr_24073_24092[2] = inst_24052);
(statearr_24073_24092[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24068 === 6))
{var inst_24049 = (state_24067[7]);var inst_24054 = p.call(null,inst_24049);var state_24067__$1 = state_24067;if(cljs.core.truth_(inst_24054))
{var statearr_24074_24093 = state_24067__$1;(statearr_24074_24093[1] = 8);
} else
{var statearr_24075_24094 = state_24067__$1;(statearr_24075_24094[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24068 === 7))
{var inst_24063 = (state_24067[2]);var state_24067__$1 = state_24067;var statearr_24076_24095 = state_24067__$1;(statearr_24076_24095[2] = inst_24063);
(statearr_24076_24095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24068 === 8))
{var inst_24049 = (state_24067[7]);var state_24067__$1 = state_24067;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24067__$1,11,out,inst_24049);
} else
{if((state_val_24068 === 9))
{var state_24067__$1 = state_24067;var statearr_24077_24096 = state_24067__$1;(statearr_24077_24096[2] = null);
(statearr_24077_24096[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24068 === 10))
{var inst_24060 = (state_24067[2]);var state_24067__$1 = (function (){var statearr_24078 = state_24067;(statearr_24078[8] = inst_24060);
return statearr_24078;
})();var statearr_24079_24097 = state_24067__$1;(statearr_24079_24097[2] = null);
(statearr_24079_24097[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24068 === 11))
{var inst_24057 = (state_24067[2]);var state_24067__$1 = state_24067;var statearr_24080_24098 = state_24067__$1;(statearr_24080_24098[2] = inst_24057);
(statearr_24080_24098[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_24084 = [null,null,null,null,null,null,null,null,null];(statearr_24084[0] = state_machine__5507__auto__);
(statearr_24084[1] = 1);
return statearr_24084;
});
var state_machine__5507__auto____1 = (function (state_24067){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_24067);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24085){if((e24085 instanceof Object))
{var ex__5510__auto__ = e24085;var statearr_24086_24099 = state_24067;(statearr_24086_24099[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24067);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24085;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24100 = state_24067;
state_24067 = G__24100;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24067){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24087 = f__5522__auto__.call(null);(statearr_24087[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24088);
return statearr_24087;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24252){var state_val_24253 = (state_24252[1]);if((state_val_24253 === 1))
{var state_24252__$1 = state_24252;var statearr_24254_24291 = state_24252__$1;(statearr_24254_24291[2] = null);
(statearr_24254_24291[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 2))
{var state_24252__$1 = state_24252;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24252__$1,4,in$);
} else
{if((state_val_24253 === 3))
{var inst_24250 = (state_24252[2]);var state_24252__$1 = state_24252;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24252__$1,inst_24250);
} else
{if((state_val_24253 === 4))
{var inst_24198 = (state_24252[7]);var inst_24198__$1 = (state_24252[2]);var inst_24199 = (inst_24198__$1 == null);var state_24252__$1 = (function (){var statearr_24255 = state_24252;(statearr_24255[7] = inst_24198__$1);
return statearr_24255;
})();if(cljs.core.truth_(inst_24199))
{var statearr_24256_24292 = state_24252__$1;(statearr_24256_24292[1] = 5);
} else
{var statearr_24257_24293 = state_24252__$1;(statearr_24257_24293[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 5))
{var inst_24201 = cljs.core.async.close_BANG_.call(null,out);var state_24252__$1 = state_24252;var statearr_24258_24294 = state_24252__$1;(statearr_24258_24294[2] = inst_24201);
(statearr_24258_24294[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 6))
{var inst_24198 = (state_24252[7]);var inst_24203 = f.call(null,inst_24198);var inst_24208 = cljs.core.seq.call(null,inst_24203);var inst_24209 = inst_24208;var inst_24210 = null;var inst_24211 = 0;var inst_24212 = 0;var state_24252__$1 = (function (){var statearr_24259 = state_24252;(statearr_24259[8] = inst_24212);
(statearr_24259[9] = inst_24210);
(statearr_24259[10] = inst_24211);
(statearr_24259[11] = inst_24209);
return statearr_24259;
})();var statearr_24260_24295 = state_24252__$1;(statearr_24260_24295[2] = null);
(statearr_24260_24295[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 7))
{var inst_24248 = (state_24252[2]);var state_24252__$1 = state_24252;var statearr_24261_24296 = state_24252__$1;(statearr_24261_24296[2] = inst_24248);
(statearr_24261_24296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 8))
{var inst_24212 = (state_24252[8]);var inst_24211 = (state_24252[10]);var inst_24214 = (inst_24212 < inst_24211);var inst_24215 = inst_24214;var state_24252__$1 = state_24252;if(cljs.core.truth_(inst_24215))
{var statearr_24262_24297 = state_24252__$1;(statearr_24262_24297[1] = 10);
} else
{var statearr_24263_24298 = state_24252__$1;(statearr_24263_24298[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 9))
{var inst_24245 = (state_24252[2]);var state_24252__$1 = (function (){var statearr_24264 = state_24252;(statearr_24264[12] = inst_24245);
return statearr_24264;
})();var statearr_24265_24299 = state_24252__$1;(statearr_24265_24299[2] = null);
(statearr_24265_24299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 10))
{var inst_24212 = (state_24252[8]);var inst_24210 = (state_24252[9]);var inst_24217 = cljs.core._nth.call(null,inst_24210,inst_24212);var state_24252__$1 = state_24252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24252__$1,13,out,inst_24217);
} else
{if((state_val_24253 === 11))
{var inst_24209 = (state_24252[11]);var inst_24223 = (state_24252[13]);var inst_24223__$1 = cljs.core.seq.call(null,inst_24209);var state_24252__$1 = (function (){var statearr_24269 = state_24252;(statearr_24269[13] = inst_24223__$1);
return statearr_24269;
})();if(inst_24223__$1)
{var statearr_24270_24300 = state_24252__$1;(statearr_24270_24300[1] = 14);
} else
{var statearr_24271_24301 = state_24252__$1;(statearr_24271_24301[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 12))
{var inst_24243 = (state_24252[2]);var state_24252__$1 = state_24252;var statearr_24272_24302 = state_24252__$1;(statearr_24272_24302[2] = inst_24243);
(statearr_24272_24302[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 13))
{var inst_24212 = (state_24252[8]);var inst_24210 = (state_24252[9]);var inst_24211 = (state_24252[10]);var inst_24209 = (state_24252[11]);var inst_24219 = (state_24252[2]);var inst_24220 = (inst_24212 + 1);var tmp24266 = inst_24210;var tmp24267 = inst_24211;var tmp24268 = inst_24209;var inst_24209__$1 = tmp24268;var inst_24210__$1 = tmp24266;var inst_24211__$1 = tmp24267;var inst_24212__$1 = inst_24220;var state_24252__$1 = (function (){var statearr_24273 = state_24252;(statearr_24273[8] = inst_24212__$1);
(statearr_24273[9] = inst_24210__$1);
(statearr_24273[10] = inst_24211__$1);
(statearr_24273[11] = inst_24209__$1);
(statearr_24273[14] = inst_24219);
return statearr_24273;
})();var statearr_24274_24303 = state_24252__$1;(statearr_24274_24303[2] = null);
(statearr_24274_24303[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 14))
{var inst_24223 = (state_24252[13]);var inst_24225 = cljs.core.chunked_seq_QMARK_.call(null,inst_24223);var state_24252__$1 = state_24252;if(inst_24225)
{var statearr_24275_24304 = state_24252__$1;(statearr_24275_24304[1] = 17);
} else
{var statearr_24276_24305 = state_24252__$1;(statearr_24276_24305[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 15))
{var state_24252__$1 = state_24252;var statearr_24277_24306 = state_24252__$1;(statearr_24277_24306[2] = null);
(statearr_24277_24306[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 16))
{var inst_24241 = (state_24252[2]);var state_24252__$1 = state_24252;var statearr_24278_24307 = state_24252__$1;(statearr_24278_24307[2] = inst_24241);
(statearr_24278_24307[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 17))
{var inst_24223 = (state_24252[13]);var inst_24227 = cljs.core.chunk_first.call(null,inst_24223);var inst_24228 = cljs.core.chunk_rest.call(null,inst_24223);var inst_24229 = cljs.core.count.call(null,inst_24227);var inst_24209 = inst_24228;var inst_24210 = inst_24227;var inst_24211 = inst_24229;var inst_24212 = 0;var state_24252__$1 = (function (){var statearr_24279 = state_24252;(statearr_24279[8] = inst_24212);
(statearr_24279[9] = inst_24210);
(statearr_24279[10] = inst_24211);
(statearr_24279[11] = inst_24209);
return statearr_24279;
})();var statearr_24280_24308 = state_24252__$1;(statearr_24280_24308[2] = null);
(statearr_24280_24308[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 18))
{var inst_24223 = (state_24252[13]);var inst_24232 = cljs.core.first.call(null,inst_24223);var state_24252__$1 = state_24252;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24252__$1,20,out,inst_24232);
} else
{if((state_val_24253 === 19))
{var inst_24238 = (state_24252[2]);var state_24252__$1 = state_24252;var statearr_24281_24309 = state_24252__$1;(statearr_24281_24309[2] = inst_24238);
(statearr_24281_24309[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24253 === 20))
{var inst_24223 = (state_24252[13]);var inst_24234 = (state_24252[2]);var inst_24235 = cljs.core.next.call(null,inst_24223);var inst_24209 = inst_24235;var inst_24210 = null;var inst_24211 = 0;var inst_24212 = 0;var state_24252__$1 = (function (){var statearr_24282 = state_24252;(statearr_24282[8] = inst_24212);
(statearr_24282[9] = inst_24210);
(statearr_24282[10] = inst_24211);
(statearr_24282[15] = inst_24234);
(statearr_24282[11] = inst_24209);
return statearr_24282;
})();var statearr_24283_24310 = state_24252__$1;(statearr_24283_24310[2] = null);
(statearr_24283_24310[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_24287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24287[0] = state_machine__5507__auto__);
(statearr_24287[1] = 1);
return statearr_24287;
});
var state_machine__5507__auto____1 = (function (state_24252){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_24252);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24288){if((e24288 instanceof Object))
{var ex__5510__auto__ = e24288;var statearr_24289_24311 = state_24252;(statearr_24289_24311[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24252);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24312 = state_24252;
state_24252 = G__24312;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24252){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24252);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24290 = f__5522__auto__.call(null);(statearr_24290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24290;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___24393 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24372){var state_val_24373 = (state_24372[1]);if((state_val_24373 === 1))
{var state_24372__$1 = state_24372;var statearr_24374_24394 = state_24372__$1;(statearr_24374_24394[2] = null);
(statearr_24374_24394[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24373 === 2))
{var state_24372__$1 = state_24372;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24372__$1,4,from);
} else
{if((state_val_24373 === 3))
{var inst_24370 = (state_24372[2]);var state_24372__$1 = state_24372;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24372__$1,inst_24370);
} else
{if((state_val_24373 === 4))
{var inst_24355 = (state_24372[7]);var inst_24355__$1 = (state_24372[2]);var inst_24356 = (inst_24355__$1 == null);var state_24372__$1 = (function (){var statearr_24375 = state_24372;(statearr_24375[7] = inst_24355__$1);
return statearr_24375;
})();if(cljs.core.truth_(inst_24356))
{var statearr_24376_24395 = state_24372__$1;(statearr_24376_24395[1] = 5);
} else
{var statearr_24377_24396 = state_24372__$1;(statearr_24377_24396[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24373 === 5))
{var state_24372__$1 = state_24372;if(cljs.core.truth_(close_QMARK_))
{var statearr_24378_24397 = state_24372__$1;(statearr_24378_24397[1] = 8);
} else
{var statearr_24379_24398 = state_24372__$1;(statearr_24379_24398[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24373 === 6))
{var inst_24355 = (state_24372[7]);var state_24372__$1 = state_24372;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24372__$1,11,to,inst_24355);
} else
{if((state_val_24373 === 7))
{var inst_24368 = (state_24372[2]);var state_24372__$1 = state_24372;var statearr_24380_24399 = state_24372__$1;(statearr_24380_24399[2] = inst_24368);
(statearr_24380_24399[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24373 === 8))
{var inst_24359 = cljs.core.async.close_BANG_.call(null,to);var state_24372__$1 = state_24372;var statearr_24381_24400 = state_24372__$1;(statearr_24381_24400[2] = inst_24359);
(statearr_24381_24400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24373 === 9))
{var state_24372__$1 = state_24372;var statearr_24382_24401 = state_24372__$1;(statearr_24382_24401[2] = null);
(statearr_24382_24401[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24373 === 10))
{var inst_24362 = (state_24372[2]);var state_24372__$1 = state_24372;var statearr_24383_24402 = state_24372__$1;(statearr_24383_24402[2] = inst_24362);
(statearr_24383_24402[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24373 === 11))
{var inst_24365 = (state_24372[2]);var state_24372__$1 = (function (){var statearr_24384 = state_24372;(statearr_24384[8] = inst_24365);
return statearr_24384;
})();var statearr_24385_24403 = state_24372__$1;(statearr_24385_24403[2] = null);
(statearr_24385_24403[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_24389 = [null,null,null,null,null,null,null,null,null];(statearr_24389[0] = state_machine__5507__auto__);
(statearr_24389[1] = 1);
return statearr_24389;
});
var state_machine__5507__auto____1 = (function (state_24372){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_24372);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24390){if((e24390 instanceof Object))
{var ex__5510__auto__ = e24390;var statearr_24391_24404 = state_24372;(statearr_24391_24404[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24372);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24390;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24405 = state_24372;
state_24372 = G__24405;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24372){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24372);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24392 = f__5522__auto__.call(null);(statearr_24392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24393);
return statearr_24392;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___24492 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24470){var state_val_24471 = (state_24470[1]);if((state_val_24471 === 1))
{var state_24470__$1 = state_24470;var statearr_24472_24493 = state_24470__$1;(statearr_24472_24493[2] = null);
(statearr_24472_24493[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24471 === 2))
{var state_24470__$1 = state_24470;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24470__$1,4,ch);
} else
{if((state_val_24471 === 3))
{var inst_24468 = (state_24470[2]);var state_24470__$1 = state_24470;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24470__$1,inst_24468);
} else
{if((state_val_24471 === 4))
{var inst_24451 = (state_24470[7]);var inst_24451__$1 = (state_24470[2]);var inst_24452 = (inst_24451__$1 == null);var state_24470__$1 = (function (){var statearr_24473 = state_24470;(statearr_24473[7] = inst_24451__$1);
return statearr_24473;
})();if(cljs.core.truth_(inst_24452))
{var statearr_24474_24494 = state_24470__$1;(statearr_24474_24494[1] = 5);
} else
{var statearr_24475_24495 = state_24470__$1;(statearr_24475_24495[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24471 === 5))
{var inst_24454 = cljs.core.async.close_BANG_.call(null,tc);var inst_24455 = cljs.core.async.close_BANG_.call(null,fc);var state_24470__$1 = (function (){var statearr_24476 = state_24470;(statearr_24476[8] = inst_24454);
return statearr_24476;
})();var statearr_24477_24496 = state_24470__$1;(statearr_24477_24496[2] = inst_24455);
(statearr_24477_24496[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24471 === 6))
{var inst_24451 = (state_24470[7]);var inst_24457 = p.call(null,inst_24451);var state_24470__$1 = state_24470;if(cljs.core.truth_(inst_24457))
{var statearr_24478_24497 = state_24470__$1;(statearr_24478_24497[1] = 9);
} else
{var statearr_24479_24498 = state_24470__$1;(statearr_24479_24498[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24471 === 7))
{var inst_24466 = (state_24470[2]);var state_24470__$1 = state_24470;var statearr_24480_24499 = state_24470__$1;(statearr_24480_24499[2] = inst_24466);
(statearr_24480_24499[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24471 === 8))
{var inst_24463 = (state_24470[2]);var state_24470__$1 = (function (){var statearr_24481 = state_24470;(statearr_24481[9] = inst_24463);
return statearr_24481;
})();var statearr_24482_24500 = state_24470__$1;(statearr_24482_24500[2] = null);
(statearr_24482_24500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24471 === 9))
{var state_24470__$1 = state_24470;var statearr_24483_24501 = state_24470__$1;(statearr_24483_24501[2] = tc);
(statearr_24483_24501[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24471 === 10))
{var state_24470__$1 = state_24470;var statearr_24484_24502 = state_24470__$1;(statearr_24484_24502[2] = fc);
(statearr_24484_24502[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24471 === 11))
{var inst_24451 = (state_24470[7]);var inst_24461 = (state_24470[2]);var state_24470__$1 = state_24470;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24470__$1,8,inst_24461,inst_24451);
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
var state_machine__5507__auto____0 = (function (){var statearr_24488 = [null,null,null,null,null,null,null,null,null,null];(statearr_24488[0] = state_machine__5507__auto__);
(statearr_24488[1] = 1);
return statearr_24488;
});
var state_machine__5507__auto____1 = (function (state_24470){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_24470);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24489){if((e24489 instanceof Object))
{var ex__5510__auto__ = e24489;var statearr_24490_24503 = state_24470;(statearr_24490_24503[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24470);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24489;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24504 = state_24470;
state_24470 = G__24504;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24470){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24491 = f__5522__auto__.call(null);(statearr_24491[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___24492);
return statearr_24491;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24551){var state_val_24552 = (state_24551[1]);if((state_val_24552 === 7))
{var inst_24547 = (state_24551[2]);var state_24551__$1 = state_24551;var statearr_24553_24569 = state_24551__$1;(statearr_24553_24569[2] = inst_24547);
(statearr_24553_24569[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24552 === 6))
{var inst_24540 = (state_24551[7]);var inst_24537 = (state_24551[8]);var inst_24544 = f.call(null,inst_24537,inst_24540);var inst_24537__$1 = inst_24544;var state_24551__$1 = (function (){var statearr_24554 = state_24551;(statearr_24554[8] = inst_24537__$1);
return statearr_24554;
})();var statearr_24555_24570 = state_24551__$1;(statearr_24555_24570[2] = null);
(statearr_24555_24570[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24552 === 5))
{var inst_24537 = (state_24551[8]);var state_24551__$1 = state_24551;var statearr_24556_24571 = state_24551__$1;(statearr_24556_24571[2] = inst_24537);
(statearr_24556_24571[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24552 === 4))
{var inst_24540 = (state_24551[7]);var inst_24540__$1 = (state_24551[2]);var inst_24541 = (inst_24540__$1 == null);var state_24551__$1 = (function (){var statearr_24557 = state_24551;(statearr_24557[7] = inst_24540__$1);
return statearr_24557;
})();if(cljs.core.truth_(inst_24541))
{var statearr_24558_24572 = state_24551__$1;(statearr_24558_24572[1] = 5);
} else
{var statearr_24559_24573 = state_24551__$1;(statearr_24559_24573[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24552 === 3))
{var inst_24549 = (state_24551[2]);var state_24551__$1 = state_24551;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24551__$1,inst_24549);
} else
{if((state_val_24552 === 2))
{var state_24551__$1 = state_24551;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24551__$1,4,ch);
} else
{if((state_val_24552 === 1))
{var inst_24537 = init;var state_24551__$1 = (function (){var statearr_24560 = state_24551;(statearr_24560[8] = inst_24537);
return statearr_24560;
})();var statearr_24561_24574 = state_24551__$1;(statearr_24561_24574[2] = null);
(statearr_24561_24574[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_24565 = [null,null,null,null,null,null,null,null,null];(statearr_24565[0] = state_machine__5507__auto__);
(statearr_24565[1] = 1);
return statearr_24565;
});
var state_machine__5507__auto____1 = (function (state_24551){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_24551);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24566){if((e24566 instanceof Object))
{var ex__5510__auto__ = e24566;var statearr_24567_24575 = state_24551;(statearr_24567_24575[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24551);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24566;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24576 = state_24551;
state_24551 = G__24576;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24551){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24568 = f__5522__auto__.call(null);(statearr_24568[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24568;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_24638){var state_val_24639 = (state_24638[1]);if((state_val_24639 === 1))
{var inst_24618 = cljs.core.seq.call(null,coll);var inst_24619 = inst_24618;var state_24638__$1 = (function (){var statearr_24640 = state_24638;(statearr_24640[7] = inst_24619);
return statearr_24640;
})();var statearr_24641_24659 = state_24638__$1;(statearr_24641_24659[2] = null);
(statearr_24641_24659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24639 === 2))
{var inst_24619 = (state_24638[7]);var state_24638__$1 = state_24638;if(cljs.core.truth_(inst_24619))
{var statearr_24642_24660 = state_24638__$1;(statearr_24642_24660[1] = 4);
} else
{var statearr_24643_24661 = state_24638__$1;(statearr_24643_24661[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24639 === 3))
{var inst_24636 = (state_24638[2]);var state_24638__$1 = state_24638;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24638__$1,inst_24636);
} else
{if((state_val_24639 === 4))
{var inst_24619 = (state_24638[7]);var inst_24622 = cljs.core.first.call(null,inst_24619);var state_24638__$1 = state_24638;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_24638__$1,7,ch,inst_24622);
} else
{if((state_val_24639 === 5))
{var state_24638__$1 = state_24638;if(cljs.core.truth_(close_QMARK_))
{var statearr_24644_24662 = state_24638__$1;(statearr_24644_24662[1] = 8);
} else
{var statearr_24645_24663 = state_24638__$1;(statearr_24645_24663[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24639 === 6))
{var inst_24634 = (state_24638[2]);var state_24638__$1 = state_24638;var statearr_24646_24664 = state_24638__$1;(statearr_24646_24664[2] = inst_24634);
(statearr_24646_24664[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24639 === 7))
{var inst_24619 = (state_24638[7]);var inst_24624 = (state_24638[2]);var inst_24625 = cljs.core.next.call(null,inst_24619);var inst_24619__$1 = inst_24625;var state_24638__$1 = (function (){var statearr_24647 = state_24638;(statearr_24647[7] = inst_24619__$1);
(statearr_24647[8] = inst_24624);
return statearr_24647;
})();var statearr_24648_24665 = state_24638__$1;(statearr_24648_24665[2] = null);
(statearr_24648_24665[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24639 === 8))
{var inst_24629 = cljs.core.async.close_BANG_.call(null,ch);var state_24638__$1 = state_24638;var statearr_24649_24666 = state_24638__$1;(statearr_24649_24666[2] = inst_24629);
(statearr_24649_24666[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24639 === 9))
{var state_24638__$1 = state_24638;var statearr_24650_24667 = state_24638__$1;(statearr_24650_24667[2] = null);
(statearr_24650_24667[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_24639 === 10))
{var inst_24632 = (state_24638[2]);var state_24638__$1 = state_24638;var statearr_24651_24668 = state_24638__$1;(statearr_24651_24668[2] = inst_24632);
(statearr_24651_24668[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_24655 = [null,null,null,null,null,null,null,null,null];(statearr_24655[0] = state_machine__5507__auto__);
(statearr_24655[1] = 1);
return statearr_24655;
});
var state_machine__5507__auto____1 = (function (state_24638){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_24638);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e24656){if((e24656 instanceof Object))
{var ex__5510__auto__ = e24656;var statearr_24657_24669 = state_24638;(statearr_24657_24669[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24638);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e24656;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__24670 = state_24638;
state_24638 = G__24670;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_24638){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_24638);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_24658 = f__5522__auto__.call(null);(statearr_24658[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_24658;
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
cljs.core.async.Mux = (function (){var obj24672 = {};return obj24672;
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
cljs.core.async.Mult = (function (){var obj24674 = {};return obj24674;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t24898 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t24898 = (function (cs,ch,mult,meta24899){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta24899 = meta24899;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t24898.cljs$lang$type = true;
cljs.core.async.t24898.cljs$lang$ctorStr = "cljs.core.async/t24898";
cljs.core.async.t24898.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t24898");
});})(cs))
;
cljs.core.async.t24898.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t24898.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t24898.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t24898.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t24898.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t24898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t24898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_24900){var self__ = this;
var _24900__$1 = this;return self__.meta24899;
});})(cs))
;
cljs.core.async.t24898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_24900,meta24899__$1){var self__ = this;
var _24900__$1 = this;return (new cljs.core.async.t24898(self__.cs,self__.ch,self__.mult,meta24899__$1));
});})(cs))
;
cljs.core.async.__GT_t24898 = ((function (cs){
return (function __GT_t24898(cs__$1,ch__$1,mult__$1,meta24899){return (new cljs.core.async.t24898(cs__$1,ch__$1,mult__$1,meta24899));
});})(cs))
;
}
return (new cljs.core.async.t24898(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___25121 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25035){var state_val_25036 = (state_25035[1]);if((state_val_25036 === 32))
{var inst_24979 = (state_25035[7]);var inst_24903 = (state_25035[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25035,31,Object,null,30);var inst_24986 = cljs.core.async.put_BANG_.call(null,inst_24979,inst_24903,done);var state_25035__$1 = state_25035;var statearr_25037_25122 = state_25035__$1;(statearr_25037_25122[2] = inst_24986);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25035__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 1))
{var state_25035__$1 = state_25035;var statearr_25038_25123 = state_25035__$1;(statearr_25038_25123[2] = null);
(statearr_25038_25123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 33))
{var inst_24992 = (state_25035[9]);var inst_24994 = cljs.core.chunked_seq_QMARK_.call(null,inst_24992);var state_25035__$1 = state_25035;if(inst_24994)
{var statearr_25039_25124 = state_25035__$1;(statearr_25039_25124[1] = 36);
} else
{var statearr_25040_25125 = state_25035__$1;(statearr_25040_25125[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 2))
{var state_25035__$1 = state_25035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25035__$1,4,ch);
} else
{if((state_val_25036 === 34))
{var state_25035__$1 = state_25035;var statearr_25041_25126 = state_25035__$1;(statearr_25041_25126[2] = null);
(statearr_25041_25126[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 3))
{var inst_25033 = (state_25035[2]);var state_25035__$1 = state_25035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25035__$1,inst_25033);
} else
{if((state_val_25036 === 35))
{var inst_25017 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25042_25127 = state_25035__$1;(statearr_25042_25127[2] = inst_25017);
(statearr_25042_25127[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 4))
{var inst_24903 = (state_25035[8]);var inst_24903__$1 = (state_25035[2]);var inst_24904 = (inst_24903__$1 == null);var state_25035__$1 = (function (){var statearr_25043 = state_25035;(statearr_25043[8] = inst_24903__$1);
return statearr_25043;
})();if(cljs.core.truth_(inst_24904))
{var statearr_25044_25128 = state_25035__$1;(statearr_25044_25128[1] = 5);
} else
{var statearr_25045_25129 = state_25035__$1;(statearr_25045_25129[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 36))
{var inst_24992 = (state_25035[9]);var inst_24996 = cljs.core.chunk_first.call(null,inst_24992);var inst_24997 = cljs.core.chunk_rest.call(null,inst_24992);var inst_24998 = cljs.core.count.call(null,inst_24996);var inst_24971 = inst_24997;var inst_24972 = inst_24996;var inst_24973 = inst_24998;var inst_24974 = 0;var state_25035__$1 = (function (){var statearr_25046 = state_25035;(statearr_25046[10] = inst_24974);
(statearr_25046[11] = inst_24973);
(statearr_25046[12] = inst_24972);
(statearr_25046[13] = inst_24971);
return statearr_25046;
})();var statearr_25047_25130 = state_25035__$1;(statearr_25047_25130[2] = null);
(statearr_25047_25130[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 5))
{var inst_24910 = cljs.core.deref.call(null,cs);var inst_24911 = cljs.core.seq.call(null,inst_24910);var inst_24912 = inst_24911;var inst_24913 = null;var inst_24914 = 0;var inst_24915 = 0;var state_25035__$1 = (function (){var statearr_25048 = state_25035;(statearr_25048[14] = inst_24912);
(statearr_25048[15] = inst_24914);
(statearr_25048[16] = inst_24913);
(statearr_25048[17] = inst_24915);
return statearr_25048;
})();var statearr_25049_25131 = state_25035__$1;(statearr_25049_25131[2] = null);
(statearr_25049_25131[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 37))
{var inst_24992 = (state_25035[9]);var inst_25001 = cljs.core.first.call(null,inst_24992);var state_25035__$1 = (function (){var statearr_25050 = state_25035;(statearr_25050[18] = inst_25001);
return statearr_25050;
})();var statearr_25051_25132 = state_25035__$1;(statearr_25051_25132[2] = null);
(statearr_25051_25132[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 6))
{var inst_24963 = (state_25035[19]);var inst_24962 = cljs.core.deref.call(null,cs);var inst_24963__$1 = cljs.core.keys.call(null,inst_24962);var inst_24964 = cljs.core.count.call(null,inst_24963__$1);var inst_24965 = cljs.core.reset_BANG_.call(null,dctr,inst_24964);var inst_24970 = cljs.core.seq.call(null,inst_24963__$1);var inst_24971 = inst_24970;var inst_24972 = null;var inst_24973 = 0;var inst_24974 = 0;var state_25035__$1 = (function (){var statearr_25052 = state_25035;(statearr_25052[10] = inst_24974);
(statearr_25052[11] = inst_24973);
(statearr_25052[20] = inst_24965);
(statearr_25052[12] = inst_24972);
(statearr_25052[13] = inst_24971);
(statearr_25052[19] = inst_24963__$1);
return statearr_25052;
})();var statearr_25053_25133 = state_25035__$1;(statearr_25053_25133[2] = null);
(statearr_25053_25133[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 38))
{var inst_25014 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25054_25134 = state_25035__$1;(statearr_25054_25134[2] = inst_25014);
(statearr_25054_25134[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 7))
{var inst_25031 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25055_25135 = state_25035__$1;(statearr_25055_25135[2] = inst_25031);
(statearr_25055_25135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 39))
{var inst_24992 = (state_25035[9]);var inst_25010 = (state_25035[2]);var inst_25011 = cljs.core.next.call(null,inst_24992);var inst_24971 = inst_25011;var inst_24972 = null;var inst_24973 = 0;var inst_24974 = 0;var state_25035__$1 = (function (){var statearr_25056 = state_25035;(statearr_25056[10] = inst_24974);
(statearr_25056[11] = inst_24973);
(statearr_25056[12] = inst_24972);
(statearr_25056[21] = inst_25010);
(statearr_25056[13] = inst_24971);
return statearr_25056;
})();var statearr_25057_25136 = state_25035__$1;(statearr_25057_25136[2] = null);
(statearr_25057_25136[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 8))
{var inst_24914 = (state_25035[15]);var inst_24915 = (state_25035[17]);var inst_24917 = (inst_24915 < inst_24914);var inst_24918 = inst_24917;var state_25035__$1 = state_25035;if(cljs.core.truth_(inst_24918))
{var statearr_25058_25137 = state_25035__$1;(statearr_25058_25137[1] = 10);
} else
{var statearr_25059_25138 = state_25035__$1;(statearr_25059_25138[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 40))
{var inst_25001 = (state_25035[18]);var inst_25002 = (state_25035[2]);var inst_25003 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_25004 = cljs.core.async.untap_STAR_.call(null,m,inst_25001);var state_25035__$1 = (function (){var statearr_25060 = state_25035;(statearr_25060[22] = inst_25002);
(statearr_25060[23] = inst_25003);
return statearr_25060;
})();var statearr_25061_25139 = state_25035__$1;(statearr_25061_25139[2] = inst_25004);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25035__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 9))
{var inst_24960 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25062_25140 = state_25035__$1;(statearr_25062_25140[2] = inst_24960);
(statearr_25062_25140[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 41))
{var inst_24903 = (state_25035[8]);var inst_25001 = (state_25035[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25035,40,Object,null,39);var inst_25008 = cljs.core.async.put_BANG_.call(null,inst_25001,inst_24903,done);var state_25035__$1 = state_25035;var statearr_25063_25141 = state_25035__$1;(statearr_25063_25141[2] = inst_25008);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25035__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 10))
{var inst_24913 = (state_25035[16]);var inst_24915 = (state_25035[17]);var inst_24921 = cljs.core._nth.call(null,inst_24913,inst_24915);var inst_24922 = cljs.core.nth.call(null,inst_24921,0,null);var inst_24923 = cljs.core.nth.call(null,inst_24921,1,null);var state_25035__$1 = (function (){var statearr_25064 = state_25035;(statearr_25064[24] = inst_24922);
return statearr_25064;
})();if(cljs.core.truth_(inst_24923))
{var statearr_25065_25142 = state_25035__$1;(statearr_25065_25142[1] = 13);
} else
{var statearr_25066_25143 = state_25035__$1;(statearr_25066_25143[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 42))
{var state_25035__$1 = state_25035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25035__$1,45,dchan);
} else
{if((state_val_25036 === 11))
{var inst_24912 = (state_25035[14]);var inst_24932 = (state_25035[25]);var inst_24932__$1 = cljs.core.seq.call(null,inst_24912);var state_25035__$1 = (function (){var statearr_25067 = state_25035;(statearr_25067[25] = inst_24932__$1);
return statearr_25067;
})();if(inst_24932__$1)
{var statearr_25068_25144 = state_25035__$1;(statearr_25068_25144[1] = 16);
} else
{var statearr_25069_25145 = state_25035__$1;(statearr_25069_25145[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 43))
{var state_25035__$1 = state_25035;var statearr_25070_25146 = state_25035__$1;(statearr_25070_25146[2] = null);
(statearr_25070_25146[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 12))
{var inst_24958 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25071_25147 = state_25035__$1;(statearr_25071_25147[2] = inst_24958);
(statearr_25071_25147[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 44))
{var inst_25028 = (state_25035[2]);var state_25035__$1 = (function (){var statearr_25072 = state_25035;(statearr_25072[26] = inst_25028);
return statearr_25072;
})();var statearr_25073_25148 = state_25035__$1;(statearr_25073_25148[2] = null);
(statearr_25073_25148[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 13))
{var inst_24922 = (state_25035[24]);var inst_24925 = cljs.core.async.close_BANG_.call(null,inst_24922);var state_25035__$1 = state_25035;var statearr_25074_25149 = state_25035__$1;(statearr_25074_25149[2] = inst_24925);
(statearr_25074_25149[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 45))
{var inst_25025 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25078_25150 = state_25035__$1;(statearr_25078_25150[2] = inst_25025);
(statearr_25078_25150[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 14))
{var state_25035__$1 = state_25035;var statearr_25079_25151 = state_25035__$1;(statearr_25079_25151[2] = null);
(statearr_25079_25151[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 15))
{var inst_24912 = (state_25035[14]);var inst_24914 = (state_25035[15]);var inst_24913 = (state_25035[16]);var inst_24915 = (state_25035[17]);var inst_24928 = (state_25035[2]);var inst_24929 = (inst_24915 + 1);var tmp25075 = inst_24912;var tmp25076 = inst_24914;var tmp25077 = inst_24913;var inst_24912__$1 = tmp25075;var inst_24913__$1 = tmp25077;var inst_24914__$1 = tmp25076;var inst_24915__$1 = inst_24929;var state_25035__$1 = (function (){var statearr_25080 = state_25035;(statearr_25080[14] = inst_24912__$1);
(statearr_25080[15] = inst_24914__$1);
(statearr_25080[16] = inst_24913__$1);
(statearr_25080[17] = inst_24915__$1);
(statearr_25080[27] = inst_24928);
return statearr_25080;
})();var statearr_25081_25152 = state_25035__$1;(statearr_25081_25152[2] = null);
(statearr_25081_25152[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 16))
{var inst_24932 = (state_25035[25]);var inst_24934 = cljs.core.chunked_seq_QMARK_.call(null,inst_24932);var state_25035__$1 = state_25035;if(inst_24934)
{var statearr_25082_25153 = state_25035__$1;(statearr_25082_25153[1] = 19);
} else
{var statearr_25083_25154 = state_25035__$1;(statearr_25083_25154[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 17))
{var state_25035__$1 = state_25035;var statearr_25084_25155 = state_25035__$1;(statearr_25084_25155[2] = null);
(statearr_25084_25155[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 18))
{var inst_24956 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25085_25156 = state_25035__$1;(statearr_25085_25156[2] = inst_24956);
(statearr_25085_25156[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 19))
{var inst_24932 = (state_25035[25]);var inst_24936 = cljs.core.chunk_first.call(null,inst_24932);var inst_24937 = cljs.core.chunk_rest.call(null,inst_24932);var inst_24938 = cljs.core.count.call(null,inst_24936);var inst_24912 = inst_24937;var inst_24913 = inst_24936;var inst_24914 = inst_24938;var inst_24915 = 0;var state_25035__$1 = (function (){var statearr_25086 = state_25035;(statearr_25086[14] = inst_24912);
(statearr_25086[15] = inst_24914);
(statearr_25086[16] = inst_24913);
(statearr_25086[17] = inst_24915);
return statearr_25086;
})();var statearr_25087_25157 = state_25035__$1;(statearr_25087_25157[2] = null);
(statearr_25087_25157[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 20))
{var inst_24932 = (state_25035[25]);var inst_24942 = cljs.core.first.call(null,inst_24932);var inst_24943 = cljs.core.nth.call(null,inst_24942,0,null);var inst_24944 = cljs.core.nth.call(null,inst_24942,1,null);var state_25035__$1 = (function (){var statearr_25088 = state_25035;(statearr_25088[28] = inst_24943);
return statearr_25088;
})();if(cljs.core.truth_(inst_24944))
{var statearr_25089_25158 = state_25035__$1;(statearr_25089_25158[1] = 22);
} else
{var statearr_25090_25159 = state_25035__$1;(statearr_25090_25159[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 21))
{var inst_24953 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25091_25160 = state_25035__$1;(statearr_25091_25160[2] = inst_24953);
(statearr_25091_25160[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 22))
{var inst_24943 = (state_25035[28]);var inst_24946 = cljs.core.async.close_BANG_.call(null,inst_24943);var state_25035__$1 = state_25035;var statearr_25092_25161 = state_25035__$1;(statearr_25092_25161[2] = inst_24946);
(statearr_25092_25161[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 23))
{var state_25035__$1 = state_25035;var statearr_25093_25162 = state_25035__$1;(statearr_25093_25162[2] = null);
(statearr_25093_25162[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 24))
{var inst_24932 = (state_25035[25]);var inst_24949 = (state_25035[2]);var inst_24950 = cljs.core.next.call(null,inst_24932);var inst_24912 = inst_24950;var inst_24913 = null;var inst_24914 = 0;var inst_24915 = 0;var state_25035__$1 = (function (){var statearr_25094 = state_25035;(statearr_25094[29] = inst_24949);
(statearr_25094[14] = inst_24912);
(statearr_25094[15] = inst_24914);
(statearr_25094[16] = inst_24913);
(statearr_25094[17] = inst_24915);
return statearr_25094;
})();var statearr_25095_25163 = state_25035__$1;(statearr_25095_25163[2] = null);
(statearr_25095_25163[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 25))
{var inst_24974 = (state_25035[10]);var inst_24973 = (state_25035[11]);var inst_24976 = (inst_24974 < inst_24973);var inst_24977 = inst_24976;var state_25035__$1 = state_25035;if(cljs.core.truth_(inst_24977))
{var statearr_25096_25164 = state_25035__$1;(statearr_25096_25164[1] = 27);
} else
{var statearr_25097_25165 = state_25035__$1;(statearr_25097_25165[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 26))
{var inst_24963 = (state_25035[19]);var inst_25021 = (state_25035[2]);var inst_25022 = cljs.core.seq.call(null,inst_24963);var state_25035__$1 = (function (){var statearr_25098 = state_25035;(statearr_25098[30] = inst_25021);
return statearr_25098;
})();if(inst_25022)
{var statearr_25099_25166 = state_25035__$1;(statearr_25099_25166[1] = 42);
} else
{var statearr_25100_25167 = state_25035__$1;(statearr_25100_25167[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 27))
{var inst_24974 = (state_25035[10]);var inst_24972 = (state_25035[12]);var inst_24979 = cljs.core._nth.call(null,inst_24972,inst_24974);var state_25035__$1 = (function (){var statearr_25101 = state_25035;(statearr_25101[7] = inst_24979);
return statearr_25101;
})();var statearr_25102_25168 = state_25035__$1;(statearr_25102_25168[2] = null);
(statearr_25102_25168[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 28))
{var inst_24971 = (state_25035[13]);var inst_24992 = (state_25035[9]);var inst_24992__$1 = cljs.core.seq.call(null,inst_24971);var state_25035__$1 = (function (){var statearr_25106 = state_25035;(statearr_25106[9] = inst_24992__$1);
return statearr_25106;
})();if(inst_24992__$1)
{var statearr_25107_25169 = state_25035__$1;(statearr_25107_25169[1] = 33);
} else
{var statearr_25108_25170 = state_25035__$1;(statearr_25108_25170[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 29))
{var inst_25019 = (state_25035[2]);var state_25035__$1 = state_25035;var statearr_25109_25171 = state_25035__$1;(statearr_25109_25171[2] = inst_25019);
(statearr_25109_25171[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 30))
{var inst_24974 = (state_25035[10]);var inst_24973 = (state_25035[11]);var inst_24972 = (state_25035[12]);var inst_24971 = (state_25035[13]);var inst_24988 = (state_25035[2]);var inst_24989 = (inst_24974 + 1);var tmp25103 = inst_24973;var tmp25104 = inst_24972;var tmp25105 = inst_24971;var inst_24971__$1 = tmp25105;var inst_24972__$1 = tmp25104;var inst_24973__$1 = tmp25103;var inst_24974__$1 = inst_24989;var state_25035__$1 = (function (){var statearr_25110 = state_25035;(statearr_25110[10] = inst_24974__$1);
(statearr_25110[11] = inst_24973__$1);
(statearr_25110[12] = inst_24972__$1);
(statearr_25110[13] = inst_24971__$1);
(statearr_25110[31] = inst_24988);
return statearr_25110;
})();var statearr_25111_25172 = state_25035__$1;(statearr_25111_25172[2] = null);
(statearr_25111_25172[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25036 === 31))
{var inst_24979 = (state_25035[7]);var inst_24980 = (state_25035[2]);var inst_24981 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_24982 = cljs.core.async.untap_STAR_.call(null,m,inst_24979);var state_25035__$1 = (function (){var statearr_25112 = state_25035;(statearr_25112[32] = inst_24980);
(statearr_25112[33] = inst_24981);
return statearr_25112;
})();var statearr_25113_25173 = state_25035__$1;(statearr_25113_25173[2] = inst_24982);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25035__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_25117 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25117[0] = state_machine__5507__auto__);
(statearr_25117[1] = 1);
return statearr_25117;
});
var state_machine__5507__auto____1 = (function (state_25035){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_25035);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25118){if((e25118 instanceof Object))
{var ex__5510__auto__ = e25118;var statearr_25119_25174 = state_25035;(statearr_25119_25174[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25118;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25175 = state_25035;
state_25035 = G__25175;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25035){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25120 = f__5522__auto__.call(null);(statearr_25120[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25121);
return statearr_25120;
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
cljs.core.async.Mix = (function (){var obj25177 = {};return obj25177;
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
;var m = (function (){if(typeof cljs.core.async.t25287 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25287 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta25288){
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
this.meta25288 = meta25288;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25287.cljs$lang$type = true;
cljs.core.async.t25287.cljs$lang$ctorStr = "cljs.core.async/t25287";
cljs.core.async.t25287.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t25287");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t25287.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25287.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25287.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25287.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25289){var self__ = this;
var _25289__$1 = this;return self__.meta25288;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t25287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_25289,meta25288__$1){var self__ = this;
var _25289__$1 = this;return (new cljs.core.async.t25287(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta25288__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t25287 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t25287(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25288){return (new cljs.core.async.t25287(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta25288));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t25287(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___25396 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25354){var state_val_25355 = (state_25354[1]);if((state_val_25355 === 1))
{var inst_25293 = (state_25354[7]);var inst_25293__$1 = calc_state.call(null);var inst_25294 = cljs.core.seq_QMARK_.call(null,inst_25293__$1);var state_25354__$1 = (function (){var statearr_25356 = state_25354;(statearr_25356[7] = inst_25293__$1);
return statearr_25356;
})();if(inst_25294)
{var statearr_25357_25397 = state_25354__$1;(statearr_25357_25397[1] = 2);
} else
{var statearr_25358_25398 = state_25354__$1;(statearr_25358_25398[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 2))
{var inst_25293 = (state_25354[7]);var inst_25296 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25293);var state_25354__$1 = state_25354;var statearr_25359_25399 = state_25354__$1;(statearr_25359_25399[2] = inst_25296);
(statearr_25359_25399[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 3))
{var inst_25293 = (state_25354[7]);var state_25354__$1 = state_25354;var statearr_25360_25400 = state_25354__$1;(statearr_25360_25400[2] = inst_25293);
(statearr_25360_25400[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 4))
{var inst_25293 = (state_25354[7]);var inst_25299 = (state_25354[2]);var inst_25300 = cljs.core.get.call(null,inst_25299,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_25301 = cljs.core.get.call(null,inst_25299,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_25302 = cljs.core.get.call(null,inst_25299,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_25303 = inst_25293;var state_25354__$1 = (function (){var statearr_25361 = state_25354;(statearr_25361[8] = inst_25303);
(statearr_25361[9] = inst_25302);
(statearr_25361[10] = inst_25301);
(statearr_25361[11] = inst_25300);
return statearr_25361;
})();var statearr_25362_25401 = state_25354__$1;(statearr_25362_25401[2] = null);
(statearr_25362_25401[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 5))
{var inst_25303 = (state_25354[8]);var inst_25306 = cljs.core.seq_QMARK_.call(null,inst_25303);var state_25354__$1 = state_25354;if(inst_25306)
{var statearr_25363_25402 = state_25354__$1;(statearr_25363_25402[1] = 7);
} else
{var statearr_25364_25403 = state_25354__$1;(statearr_25364_25403[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 6))
{var inst_25352 = (state_25354[2]);var state_25354__$1 = state_25354;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25354__$1,inst_25352);
} else
{if((state_val_25355 === 7))
{var inst_25303 = (state_25354[8]);var inst_25308 = cljs.core.apply.call(null,cljs.core.hash_map,inst_25303);var state_25354__$1 = state_25354;var statearr_25365_25404 = state_25354__$1;(statearr_25365_25404[2] = inst_25308);
(statearr_25365_25404[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 8))
{var inst_25303 = (state_25354[8]);var state_25354__$1 = state_25354;var statearr_25366_25405 = state_25354__$1;(statearr_25366_25405[2] = inst_25303);
(statearr_25366_25405[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 9))
{var inst_25311 = (state_25354[12]);var inst_25311__$1 = (state_25354[2]);var inst_25312 = cljs.core.get.call(null,inst_25311__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_25313 = cljs.core.get.call(null,inst_25311__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_25314 = cljs.core.get.call(null,inst_25311__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_25354__$1 = (function (){var statearr_25367 = state_25354;(statearr_25367[12] = inst_25311__$1);
(statearr_25367[13] = inst_25314);
(statearr_25367[14] = inst_25313);
return statearr_25367;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25354__$1,10,inst_25312);
} else
{if((state_val_25355 === 10))
{var inst_25318 = (state_25354[15]);var inst_25319 = (state_25354[16]);var inst_25317 = (state_25354[2]);var inst_25318__$1 = cljs.core.nth.call(null,inst_25317,0,null);var inst_25319__$1 = cljs.core.nth.call(null,inst_25317,1,null);var inst_25320 = (inst_25318__$1 == null);var inst_25321 = cljs.core._EQ_.call(null,inst_25319__$1,change);var inst_25322 = (inst_25320) || (inst_25321);var state_25354__$1 = (function (){var statearr_25368 = state_25354;(statearr_25368[15] = inst_25318__$1);
(statearr_25368[16] = inst_25319__$1);
return statearr_25368;
})();if(cljs.core.truth_(inst_25322))
{var statearr_25369_25406 = state_25354__$1;(statearr_25369_25406[1] = 11);
} else
{var statearr_25370_25407 = state_25354__$1;(statearr_25370_25407[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 11))
{var inst_25318 = (state_25354[15]);var inst_25324 = (inst_25318 == null);var state_25354__$1 = state_25354;if(cljs.core.truth_(inst_25324))
{var statearr_25371_25408 = state_25354__$1;(statearr_25371_25408[1] = 14);
} else
{var statearr_25372_25409 = state_25354__$1;(statearr_25372_25409[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 12))
{var inst_25333 = (state_25354[17]);var inst_25319 = (state_25354[16]);var inst_25314 = (state_25354[13]);var inst_25333__$1 = inst_25314.call(null,inst_25319);var state_25354__$1 = (function (){var statearr_25373 = state_25354;(statearr_25373[17] = inst_25333__$1);
return statearr_25373;
})();if(cljs.core.truth_(inst_25333__$1))
{var statearr_25374_25410 = state_25354__$1;(statearr_25374_25410[1] = 17);
} else
{var statearr_25375_25411 = state_25354__$1;(statearr_25375_25411[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 13))
{var inst_25350 = (state_25354[2]);var state_25354__$1 = state_25354;var statearr_25376_25412 = state_25354__$1;(statearr_25376_25412[2] = inst_25350);
(statearr_25376_25412[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 14))
{var inst_25319 = (state_25354[16]);var inst_25326 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_25319);var state_25354__$1 = state_25354;var statearr_25377_25413 = state_25354__$1;(statearr_25377_25413[2] = inst_25326);
(statearr_25377_25413[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 15))
{var state_25354__$1 = state_25354;var statearr_25378_25414 = state_25354__$1;(statearr_25378_25414[2] = null);
(statearr_25378_25414[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 16))
{var inst_25329 = (state_25354[2]);var inst_25330 = calc_state.call(null);var inst_25303 = inst_25330;var state_25354__$1 = (function (){var statearr_25379 = state_25354;(statearr_25379[8] = inst_25303);
(statearr_25379[18] = inst_25329);
return statearr_25379;
})();var statearr_25380_25415 = state_25354__$1;(statearr_25380_25415[2] = null);
(statearr_25380_25415[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 17))
{var inst_25333 = (state_25354[17]);var state_25354__$1 = state_25354;var statearr_25381_25416 = state_25354__$1;(statearr_25381_25416[2] = inst_25333);
(statearr_25381_25416[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 18))
{var inst_25319 = (state_25354[16]);var inst_25314 = (state_25354[13]);var inst_25313 = (state_25354[14]);var inst_25336 = cljs.core.empty_QMARK_.call(null,inst_25314);var inst_25337 = inst_25313.call(null,inst_25319);var inst_25338 = cljs.core.not.call(null,inst_25337);var inst_25339 = (inst_25336) && (inst_25338);var state_25354__$1 = state_25354;var statearr_25382_25417 = state_25354__$1;(statearr_25382_25417[2] = inst_25339);
(statearr_25382_25417[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 19))
{var inst_25341 = (state_25354[2]);var state_25354__$1 = state_25354;if(cljs.core.truth_(inst_25341))
{var statearr_25383_25418 = state_25354__$1;(statearr_25383_25418[1] = 20);
} else
{var statearr_25384_25419 = state_25354__$1;(statearr_25384_25419[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 20))
{var inst_25318 = (state_25354[15]);var state_25354__$1 = state_25354;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25354__$1,23,out,inst_25318);
} else
{if((state_val_25355 === 21))
{var state_25354__$1 = state_25354;var statearr_25385_25420 = state_25354__$1;(statearr_25385_25420[2] = null);
(statearr_25385_25420[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 22))
{var inst_25311 = (state_25354[12]);var inst_25347 = (state_25354[2]);var inst_25303 = inst_25311;var state_25354__$1 = (function (){var statearr_25386 = state_25354;(statearr_25386[19] = inst_25347);
(statearr_25386[8] = inst_25303);
return statearr_25386;
})();var statearr_25387_25421 = state_25354__$1;(statearr_25387_25421[2] = null);
(statearr_25387_25421[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25355 === 23))
{var inst_25344 = (state_25354[2]);var state_25354__$1 = state_25354;var statearr_25388_25422 = state_25354__$1;(statearr_25388_25422[2] = inst_25344);
(statearr_25388_25422[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_25392 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25392[0] = state_machine__5507__auto__);
(statearr_25392[1] = 1);
return statearr_25392;
});
var state_machine__5507__auto____1 = (function (state_25354){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_25354);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25393){if((e25393 instanceof Object))
{var ex__5510__auto__ = e25393;var statearr_25394_25423 = state_25354;(statearr_25394_25423[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25354);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25393;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25424 = state_25354;
state_25354 = G__25424;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25354){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25354);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25395 = f__5522__auto__.call(null);(statearr_25395[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25396);
return statearr_25395;
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
cljs.core.async.Pub = (function (){var obj25426 = {};return obj25426;
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
return (function (p1__25427_SHARP_){if(cljs.core.truth_(p1__25427_SHARP_.call(null,topic)))
{return p1__25427_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__25427_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t25552 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t25552 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta25553){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta25553 = meta25553;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t25552.cljs$lang$type = true;
cljs.core.async.t25552.cljs$lang$ctorStr = "cljs.core.async/t25552";
cljs.core.async.t25552.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t25552");
});})(mults,ensure_mult))
;
cljs.core.async.t25552.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t25552.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t25552.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t25552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t25552.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t25552.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t25552.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t25552.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_25554){var self__ = this;
var _25554__$1 = this;return self__.meta25553;
});})(mults,ensure_mult))
;
cljs.core.async.t25552.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_25554,meta25553__$1){var self__ = this;
var _25554__$1 = this;return (new cljs.core.async.t25552(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta25553__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t25552 = ((function (mults,ensure_mult){
return (function __GT_t25552(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25553){return (new cljs.core.async.t25552(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta25553));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t25552(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___25676 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25628){var state_val_25629 = (state_25628[1]);if((state_val_25629 === 1))
{var state_25628__$1 = state_25628;var statearr_25630_25677 = state_25628__$1;(statearr_25630_25677[2] = null);
(statearr_25630_25677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 2))
{var state_25628__$1 = state_25628;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25628__$1,4,ch);
} else
{if((state_val_25629 === 3))
{var inst_25626 = (state_25628[2]);var state_25628__$1 = state_25628;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25628__$1,inst_25626);
} else
{if((state_val_25629 === 4))
{var inst_25557 = (state_25628[7]);var inst_25557__$1 = (state_25628[2]);var inst_25558 = (inst_25557__$1 == null);var state_25628__$1 = (function (){var statearr_25631 = state_25628;(statearr_25631[7] = inst_25557__$1);
return statearr_25631;
})();if(cljs.core.truth_(inst_25558))
{var statearr_25632_25678 = state_25628__$1;(statearr_25632_25678[1] = 5);
} else
{var statearr_25633_25679 = state_25628__$1;(statearr_25633_25679[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 5))
{var inst_25564 = cljs.core.deref.call(null,mults);var inst_25565 = cljs.core.vals.call(null,inst_25564);var inst_25566 = cljs.core.seq.call(null,inst_25565);var inst_25567 = inst_25566;var inst_25568 = null;var inst_25569 = 0;var inst_25570 = 0;var state_25628__$1 = (function (){var statearr_25634 = state_25628;(statearr_25634[8] = inst_25570);
(statearr_25634[9] = inst_25569);
(statearr_25634[10] = inst_25568);
(statearr_25634[11] = inst_25567);
return statearr_25634;
})();var statearr_25635_25680 = state_25628__$1;(statearr_25635_25680[2] = null);
(statearr_25635_25680[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 6))
{var inst_25605 = (state_25628[12]);var inst_25607 = (state_25628[13]);var inst_25557 = (state_25628[7]);var inst_25605__$1 = topic_fn.call(null,inst_25557);var inst_25606 = cljs.core.deref.call(null,mults);var inst_25607__$1 = cljs.core.get.call(null,inst_25606,inst_25605__$1);var state_25628__$1 = (function (){var statearr_25636 = state_25628;(statearr_25636[12] = inst_25605__$1);
(statearr_25636[13] = inst_25607__$1);
return statearr_25636;
})();if(cljs.core.truth_(inst_25607__$1))
{var statearr_25637_25681 = state_25628__$1;(statearr_25637_25681[1] = 19);
} else
{var statearr_25638_25682 = state_25628__$1;(statearr_25638_25682[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 7))
{var inst_25624 = (state_25628[2]);var state_25628__$1 = state_25628;var statearr_25639_25683 = state_25628__$1;(statearr_25639_25683[2] = inst_25624);
(statearr_25639_25683[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 8))
{var inst_25570 = (state_25628[8]);var inst_25569 = (state_25628[9]);var inst_25572 = (inst_25570 < inst_25569);var inst_25573 = inst_25572;var state_25628__$1 = state_25628;if(cljs.core.truth_(inst_25573))
{var statearr_25643_25684 = state_25628__$1;(statearr_25643_25684[1] = 10);
} else
{var statearr_25644_25685 = state_25628__$1;(statearr_25644_25685[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 9))
{var inst_25603 = (state_25628[2]);var state_25628__$1 = state_25628;var statearr_25645_25686 = state_25628__$1;(statearr_25645_25686[2] = inst_25603);
(statearr_25645_25686[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 10))
{var inst_25570 = (state_25628[8]);var inst_25569 = (state_25628[9]);var inst_25568 = (state_25628[10]);var inst_25567 = (state_25628[11]);var inst_25575 = cljs.core._nth.call(null,inst_25568,inst_25570);var inst_25576 = cljs.core.async.muxch_STAR_.call(null,inst_25575);var inst_25577 = cljs.core.async.close_BANG_.call(null,inst_25576);var inst_25578 = (inst_25570 + 1);var tmp25640 = inst_25569;var tmp25641 = inst_25568;var tmp25642 = inst_25567;var inst_25567__$1 = tmp25642;var inst_25568__$1 = tmp25641;var inst_25569__$1 = tmp25640;var inst_25570__$1 = inst_25578;var state_25628__$1 = (function (){var statearr_25646 = state_25628;(statearr_25646[8] = inst_25570__$1);
(statearr_25646[9] = inst_25569__$1);
(statearr_25646[14] = inst_25577);
(statearr_25646[10] = inst_25568__$1);
(statearr_25646[11] = inst_25567__$1);
return statearr_25646;
})();var statearr_25647_25687 = state_25628__$1;(statearr_25647_25687[2] = null);
(statearr_25647_25687[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 11))
{var inst_25581 = (state_25628[15]);var inst_25567 = (state_25628[11]);var inst_25581__$1 = cljs.core.seq.call(null,inst_25567);var state_25628__$1 = (function (){var statearr_25648 = state_25628;(statearr_25648[15] = inst_25581__$1);
return statearr_25648;
})();if(inst_25581__$1)
{var statearr_25649_25688 = state_25628__$1;(statearr_25649_25688[1] = 13);
} else
{var statearr_25650_25689 = state_25628__$1;(statearr_25650_25689[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 12))
{var inst_25601 = (state_25628[2]);var state_25628__$1 = state_25628;var statearr_25651_25690 = state_25628__$1;(statearr_25651_25690[2] = inst_25601);
(statearr_25651_25690[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 13))
{var inst_25581 = (state_25628[15]);var inst_25583 = cljs.core.chunked_seq_QMARK_.call(null,inst_25581);var state_25628__$1 = state_25628;if(inst_25583)
{var statearr_25652_25691 = state_25628__$1;(statearr_25652_25691[1] = 16);
} else
{var statearr_25653_25692 = state_25628__$1;(statearr_25653_25692[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 14))
{var state_25628__$1 = state_25628;var statearr_25654_25693 = state_25628__$1;(statearr_25654_25693[2] = null);
(statearr_25654_25693[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 15))
{var inst_25599 = (state_25628[2]);var state_25628__$1 = state_25628;var statearr_25655_25694 = state_25628__$1;(statearr_25655_25694[2] = inst_25599);
(statearr_25655_25694[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 16))
{var inst_25581 = (state_25628[15]);var inst_25585 = cljs.core.chunk_first.call(null,inst_25581);var inst_25586 = cljs.core.chunk_rest.call(null,inst_25581);var inst_25587 = cljs.core.count.call(null,inst_25585);var inst_25567 = inst_25586;var inst_25568 = inst_25585;var inst_25569 = inst_25587;var inst_25570 = 0;var state_25628__$1 = (function (){var statearr_25656 = state_25628;(statearr_25656[8] = inst_25570);
(statearr_25656[9] = inst_25569);
(statearr_25656[10] = inst_25568);
(statearr_25656[11] = inst_25567);
return statearr_25656;
})();var statearr_25657_25695 = state_25628__$1;(statearr_25657_25695[2] = null);
(statearr_25657_25695[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 17))
{var inst_25581 = (state_25628[15]);var inst_25590 = cljs.core.first.call(null,inst_25581);var inst_25591 = cljs.core.async.muxch_STAR_.call(null,inst_25590);var inst_25592 = cljs.core.async.close_BANG_.call(null,inst_25591);var inst_25593 = cljs.core.next.call(null,inst_25581);var inst_25567 = inst_25593;var inst_25568 = null;var inst_25569 = 0;var inst_25570 = 0;var state_25628__$1 = (function (){var statearr_25658 = state_25628;(statearr_25658[8] = inst_25570);
(statearr_25658[9] = inst_25569);
(statearr_25658[10] = inst_25568);
(statearr_25658[11] = inst_25567);
(statearr_25658[16] = inst_25592);
return statearr_25658;
})();var statearr_25659_25696 = state_25628__$1;(statearr_25659_25696[2] = null);
(statearr_25659_25696[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 18))
{var inst_25596 = (state_25628[2]);var state_25628__$1 = state_25628;var statearr_25660_25697 = state_25628__$1;(statearr_25660_25697[2] = inst_25596);
(statearr_25660_25697[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 19))
{var state_25628__$1 = state_25628;var statearr_25661_25698 = state_25628__$1;(statearr_25661_25698[2] = null);
(statearr_25661_25698[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 20))
{var state_25628__$1 = state_25628;var statearr_25662_25699 = state_25628__$1;(statearr_25662_25699[2] = null);
(statearr_25662_25699[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 21))
{var inst_25621 = (state_25628[2]);var state_25628__$1 = (function (){var statearr_25663 = state_25628;(statearr_25663[17] = inst_25621);
return statearr_25663;
})();var statearr_25664_25700 = state_25628__$1;(statearr_25664_25700[2] = null);
(statearr_25664_25700[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 22))
{var inst_25618 = (state_25628[2]);var state_25628__$1 = state_25628;var statearr_25665_25701 = state_25628__$1;(statearr_25665_25701[2] = inst_25618);
(statearr_25665_25701[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 23))
{var inst_25605 = (state_25628[12]);var inst_25609 = (state_25628[2]);var inst_25610 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_25605);var state_25628__$1 = (function (){var statearr_25666 = state_25628;(statearr_25666[18] = inst_25609);
return statearr_25666;
})();var statearr_25667_25702 = state_25628__$1;(statearr_25667_25702[2] = inst_25610);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25628__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25629 === 24))
{var inst_25607 = (state_25628[13]);var inst_25557 = (state_25628[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25628,23,Object,null,22);var inst_25614 = cljs.core.async.muxch_STAR_.call(null,inst_25607);var state_25628__$1 = state_25628;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25628__$1,25,inst_25614,inst_25557);
} else
{if((state_val_25629 === 25))
{var inst_25616 = (state_25628[2]);var state_25628__$1 = state_25628;var statearr_25668_25703 = state_25628__$1;(statearr_25668_25703[2] = inst_25616);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25628__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_25672 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25672[0] = state_machine__5507__auto__);
(statearr_25672[1] = 1);
return statearr_25672;
});
var state_machine__5507__auto____1 = (function (state_25628){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_25628);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25673){if((e25673 instanceof Object))
{var ex__5510__auto__ = e25673;var statearr_25674_25704 = state_25628;(statearr_25674_25704[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25628);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25673;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25705 = state_25628;
state_25628 = G__25705;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25628){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25628);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25675 = f__5522__auto__.call(null);(statearr_25675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25676);
return statearr_25675;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___25842 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25812){var state_val_25813 = (state_25812[1]);if((state_val_25813 === 1))
{var state_25812__$1 = state_25812;var statearr_25814_25843 = state_25812__$1;(statearr_25814_25843[2] = null);
(statearr_25814_25843[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 2))
{var inst_25775 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_25776 = 0;var state_25812__$1 = (function (){var statearr_25815 = state_25812;(statearr_25815[7] = inst_25776);
(statearr_25815[8] = inst_25775);
return statearr_25815;
})();var statearr_25816_25844 = state_25812__$1;(statearr_25816_25844[2] = null);
(statearr_25816_25844[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 3))
{var inst_25810 = (state_25812[2]);var state_25812__$1 = state_25812;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25812__$1,inst_25810);
} else
{if((state_val_25813 === 4))
{var inst_25776 = (state_25812[7]);var inst_25778 = (inst_25776 < cnt);var state_25812__$1 = state_25812;if(cljs.core.truth_(inst_25778))
{var statearr_25817_25845 = state_25812__$1;(statearr_25817_25845[1] = 6);
} else
{var statearr_25818_25846 = state_25812__$1;(statearr_25818_25846[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 5))
{var inst_25796 = (state_25812[2]);var state_25812__$1 = (function (){var statearr_25819 = state_25812;(statearr_25819[9] = inst_25796);
return statearr_25819;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_25812__$1,12,dchan);
} else
{if((state_val_25813 === 6))
{var state_25812__$1 = state_25812;var statearr_25820_25847 = state_25812__$1;(statearr_25820_25847[2] = null);
(statearr_25820_25847[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 7))
{var state_25812__$1 = state_25812;var statearr_25821_25848 = state_25812__$1;(statearr_25821_25848[2] = null);
(statearr_25821_25848[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 8))
{var inst_25794 = (state_25812[2]);var state_25812__$1 = state_25812;var statearr_25822_25849 = state_25812__$1;(statearr_25822_25849[2] = inst_25794);
(statearr_25822_25849[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 9))
{var inst_25776 = (state_25812[7]);var inst_25789 = (state_25812[2]);var inst_25790 = (inst_25776 + 1);var inst_25776__$1 = inst_25790;var state_25812__$1 = (function (){var statearr_25823 = state_25812;(statearr_25823[7] = inst_25776__$1);
(statearr_25823[10] = inst_25789);
return statearr_25823;
})();var statearr_25824_25850 = state_25812__$1;(statearr_25824_25850[2] = null);
(statearr_25824_25850[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 10))
{var inst_25780 = (state_25812[2]);var inst_25781 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_25812__$1 = (function (){var statearr_25825 = state_25812;(statearr_25825[11] = inst_25780);
return statearr_25825;
})();var statearr_25826_25851 = state_25812__$1;(statearr_25826_25851[2] = inst_25781);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25812__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 11))
{var inst_25776 = (state_25812[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_25812,10,Object,null,9);var inst_25785 = chs__$1.call(null,inst_25776);var inst_25786 = done.call(null,inst_25776);var inst_25787 = cljs.core.async.take_BANG_.call(null,inst_25785,inst_25786);var state_25812__$1 = state_25812;var statearr_25827_25852 = state_25812__$1;(statearr_25827_25852[2] = inst_25787);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25812__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 12))
{var inst_25798 = (state_25812[12]);var inst_25798__$1 = (state_25812[2]);var inst_25799 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_25798__$1);var state_25812__$1 = (function (){var statearr_25828 = state_25812;(statearr_25828[12] = inst_25798__$1);
return statearr_25828;
})();if(cljs.core.truth_(inst_25799))
{var statearr_25829_25853 = state_25812__$1;(statearr_25829_25853[1] = 13);
} else
{var statearr_25830_25854 = state_25812__$1;(statearr_25830_25854[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 13))
{var inst_25801 = cljs.core.async.close_BANG_.call(null,out);var state_25812__$1 = state_25812;var statearr_25831_25855 = state_25812__$1;(statearr_25831_25855[2] = inst_25801);
(statearr_25831_25855[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 14))
{var inst_25798 = (state_25812[12]);var inst_25803 = cljs.core.apply.call(null,f,inst_25798);var state_25812__$1 = state_25812;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25812__$1,16,out,inst_25803);
} else
{if((state_val_25813 === 15))
{var inst_25808 = (state_25812[2]);var state_25812__$1 = state_25812;var statearr_25832_25856 = state_25812__$1;(statearr_25832_25856[2] = inst_25808);
(statearr_25832_25856[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25813 === 16))
{var inst_25805 = (state_25812[2]);var state_25812__$1 = (function (){var statearr_25833 = state_25812;(statearr_25833[13] = inst_25805);
return statearr_25833;
})();var statearr_25834_25857 = state_25812__$1;(statearr_25834_25857[2] = null);
(statearr_25834_25857[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_25838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25838[0] = state_machine__5507__auto__);
(statearr_25838[1] = 1);
return statearr_25838;
});
var state_machine__5507__auto____1 = (function (state_25812){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_25812);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25839){if((e25839 instanceof Object))
{var ex__5510__auto__ = e25839;var statearr_25840_25858 = state_25812;(statearr_25840_25858[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25812);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25859 = state_25812;
state_25812 = G__25859;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25812){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25812);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25841 = f__5522__auto__.call(null);(statearr_25841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25842);
return statearr_25841;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___25967 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_25943){var state_val_25944 = (state_25943[1]);if((state_val_25944 === 1))
{var inst_25914 = cljs.core.vec.call(null,chs);var inst_25915 = inst_25914;var state_25943__$1 = (function (){var statearr_25945 = state_25943;(statearr_25945[7] = inst_25915);
return statearr_25945;
})();var statearr_25946_25968 = state_25943__$1;(statearr_25946_25968[2] = null);
(statearr_25946_25968[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25944 === 2))
{var inst_25915 = (state_25943[7]);var inst_25917 = cljs.core.count.call(null,inst_25915);var inst_25918 = (inst_25917 > 0);var state_25943__$1 = state_25943;if(cljs.core.truth_(inst_25918))
{var statearr_25947_25969 = state_25943__$1;(statearr_25947_25969[1] = 4);
} else
{var statearr_25948_25970 = state_25943__$1;(statearr_25948_25970[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25944 === 3))
{var inst_25941 = (state_25943[2]);var state_25943__$1 = state_25943;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_25943__$1,inst_25941);
} else
{if((state_val_25944 === 4))
{var inst_25915 = (state_25943[7]);var state_25943__$1 = state_25943;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_25943__$1,7,inst_25915);
} else
{if((state_val_25944 === 5))
{var inst_25937 = cljs.core.async.close_BANG_.call(null,out);var state_25943__$1 = state_25943;var statearr_25949_25971 = state_25943__$1;(statearr_25949_25971[2] = inst_25937);
(statearr_25949_25971[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25944 === 6))
{var inst_25939 = (state_25943[2]);var state_25943__$1 = state_25943;var statearr_25950_25972 = state_25943__$1;(statearr_25950_25972[2] = inst_25939);
(statearr_25950_25972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25944 === 7))
{var inst_25922 = (state_25943[8]);var inst_25923 = (state_25943[9]);var inst_25922__$1 = (state_25943[2]);var inst_25923__$1 = cljs.core.nth.call(null,inst_25922__$1,0,null);var inst_25924 = cljs.core.nth.call(null,inst_25922__$1,1,null);var inst_25925 = (inst_25923__$1 == null);var state_25943__$1 = (function (){var statearr_25951 = state_25943;(statearr_25951[8] = inst_25922__$1);
(statearr_25951[9] = inst_25923__$1);
(statearr_25951[10] = inst_25924);
return statearr_25951;
})();if(cljs.core.truth_(inst_25925))
{var statearr_25952_25973 = state_25943__$1;(statearr_25952_25973[1] = 8);
} else
{var statearr_25953_25974 = state_25943__$1;(statearr_25953_25974[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25944 === 8))
{var inst_25915 = (state_25943[7]);var inst_25922 = (state_25943[8]);var inst_25923 = (state_25943[9]);var inst_25924 = (state_25943[10]);var inst_25927 = (function (){var c = inst_25924;var v = inst_25923;var vec__25920 = inst_25922;var cs = inst_25915;return ((function (c,v,vec__25920,cs,inst_25915,inst_25922,inst_25923,inst_25924,state_val_25944){
return (function (p1__25860_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__25860_SHARP_);
});
;})(c,v,vec__25920,cs,inst_25915,inst_25922,inst_25923,inst_25924,state_val_25944))
})();var inst_25928 = cljs.core.filterv.call(null,inst_25927,inst_25915);var inst_25915__$1 = inst_25928;var state_25943__$1 = (function (){var statearr_25954 = state_25943;(statearr_25954[7] = inst_25915__$1);
return statearr_25954;
})();var statearr_25955_25975 = state_25943__$1;(statearr_25955_25975[2] = null);
(statearr_25955_25975[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25944 === 9))
{var inst_25923 = (state_25943[9]);var state_25943__$1 = state_25943;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_25943__$1,11,out,inst_25923);
} else
{if((state_val_25944 === 10))
{var inst_25935 = (state_25943[2]);var state_25943__$1 = state_25943;var statearr_25957_25976 = state_25943__$1;(statearr_25957_25976[2] = inst_25935);
(statearr_25957_25976[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_25944 === 11))
{var inst_25915 = (state_25943[7]);var inst_25932 = (state_25943[2]);var tmp25956 = inst_25915;var inst_25915__$1 = tmp25956;var state_25943__$1 = (function (){var statearr_25958 = state_25943;(statearr_25958[11] = inst_25932);
(statearr_25958[7] = inst_25915__$1);
return statearr_25958;
})();var statearr_25959_25977 = state_25943__$1;(statearr_25959_25977[2] = null);
(statearr_25959_25977[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_25963 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_25963[0] = state_machine__5507__auto__);
(statearr_25963[1] = 1);
return statearr_25963;
});
var state_machine__5507__auto____1 = (function (state_25943){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_25943);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e25964){if((e25964 instanceof Object))
{var ex__5510__auto__ = e25964;var statearr_25965_25978 = state_25943;(statearr_25965_25978[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_25943);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e25964;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__25979 = state_25943;
state_25943 = G__25979;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_25943){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_25943);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_25966 = f__5522__auto__.call(null);(statearr_25966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___25967);
return statearr_25966;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___26072 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26049){var state_val_26050 = (state_26049[1]);if((state_val_26050 === 1))
{var inst_26026 = 0;var state_26049__$1 = (function (){var statearr_26051 = state_26049;(statearr_26051[7] = inst_26026);
return statearr_26051;
})();var statearr_26052_26073 = state_26049__$1;(statearr_26052_26073[2] = null);
(statearr_26052_26073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26050 === 2))
{var inst_26026 = (state_26049[7]);var inst_26028 = (inst_26026 < n);var state_26049__$1 = state_26049;if(cljs.core.truth_(inst_26028))
{var statearr_26053_26074 = state_26049__$1;(statearr_26053_26074[1] = 4);
} else
{var statearr_26054_26075 = state_26049__$1;(statearr_26054_26075[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26050 === 3))
{var inst_26046 = (state_26049[2]);var inst_26047 = cljs.core.async.close_BANG_.call(null,out);var state_26049__$1 = (function (){var statearr_26055 = state_26049;(statearr_26055[8] = inst_26046);
return statearr_26055;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26049__$1,inst_26047);
} else
{if((state_val_26050 === 4))
{var state_26049__$1 = state_26049;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26049__$1,7,ch);
} else
{if((state_val_26050 === 5))
{var state_26049__$1 = state_26049;var statearr_26056_26076 = state_26049__$1;(statearr_26056_26076[2] = null);
(statearr_26056_26076[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26050 === 6))
{var inst_26044 = (state_26049[2]);var state_26049__$1 = state_26049;var statearr_26057_26077 = state_26049__$1;(statearr_26057_26077[2] = inst_26044);
(statearr_26057_26077[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26050 === 7))
{var inst_26031 = (state_26049[9]);var inst_26031__$1 = (state_26049[2]);var inst_26032 = (inst_26031__$1 == null);var inst_26033 = cljs.core.not.call(null,inst_26032);var state_26049__$1 = (function (){var statearr_26058 = state_26049;(statearr_26058[9] = inst_26031__$1);
return statearr_26058;
})();if(inst_26033)
{var statearr_26059_26078 = state_26049__$1;(statearr_26059_26078[1] = 8);
} else
{var statearr_26060_26079 = state_26049__$1;(statearr_26060_26079[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26050 === 8))
{var inst_26031 = (state_26049[9]);var state_26049__$1 = state_26049;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26049__$1,11,out,inst_26031);
} else
{if((state_val_26050 === 9))
{var state_26049__$1 = state_26049;var statearr_26061_26080 = state_26049__$1;(statearr_26061_26080[2] = null);
(statearr_26061_26080[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26050 === 10))
{var inst_26041 = (state_26049[2]);var state_26049__$1 = state_26049;var statearr_26062_26081 = state_26049__$1;(statearr_26062_26081[2] = inst_26041);
(statearr_26062_26081[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26050 === 11))
{var inst_26026 = (state_26049[7]);var inst_26036 = (state_26049[2]);var inst_26037 = (inst_26026 + 1);var inst_26026__$1 = inst_26037;var state_26049__$1 = (function (){var statearr_26063 = state_26049;(statearr_26063[7] = inst_26026__$1);
(statearr_26063[10] = inst_26036);
return statearr_26063;
})();var statearr_26064_26082 = state_26049__$1;(statearr_26064_26082[2] = null);
(statearr_26064_26082[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_26068 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26068[0] = state_machine__5507__auto__);
(statearr_26068[1] = 1);
return statearr_26068;
});
var state_machine__5507__auto____1 = (function (state_26049){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26049);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26069){if((e26069 instanceof Object))
{var ex__5510__auto__ = e26069;var statearr_26070_26083 = state_26049;(statearr_26070_26083[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26049);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26084 = state_26049;
state_26049 = G__26084;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26049){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26049);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26071 = f__5522__auto__.call(null);(statearr_26071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26072);
return statearr_26071;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___26181 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26156){var state_val_26157 = (state_26156[1]);if((state_val_26157 === 1))
{var inst_26133 = null;var state_26156__$1 = (function (){var statearr_26158 = state_26156;(statearr_26158[7] = inst_26133);
return statearr_26158;
})();var statearr_26159_26182 = state_26156__$1;(statearr_26159_26182[2] = null);
(statearr_26159_26182[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 2))
{var state_26156__$1 = state_26156;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26156__$1,4,ch);
} else
{if((state_val_26157 === 3))
{var inst_26153 = (state_26156[2]);var inst_26154 = cljs.core.async.close_BANG_.call(null,out);var state_26156__$1 = (function (){var statearr_26160 = state_26156;(statearr_26160[8] = inst_26153);
return statearr_26160;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26156__$1,inst_26154);
} else
{if((state_val_26157 === 4))
{var inst_26136 = (state_26156[9]);var inst_26136__$1 = (state_26156[2]);var inst_26137 = (inst_26136__$1 == null);var inst_26138 = cljs.core.not.call(null,inst_26137);var state_26156__$1 = (function (){var statearr_26161 = state_26156;(statearr_26161[9] = inst_26136__$1);
return statearr_26161;
})();if(inst_26138)
{var statearr_26162_26183 = state_26156__$1;(statearr_26162_26183[1] = 5);
} else
{var statearr_26163_26184 = state_26156__$1;(statearr_26163_26184[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 5))
{var inst_26136 = (state_26156[9]);var inst_26133 = (state_26156[7]);var inst_26140 = cljs.core._EQ_.call(null,inst_26136,inst_26133);var state_26156__$1 = state_26156;if(inst_26140)
{var statearr_26164_26185 = state_26156__$1;(statearr_26164_26185[1] = 8);
} else
{var statearr_26165_26186 = state_26156__$1;(statearr_26165_26186[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 6))
{var state_26156__$1 = state_26156;var statearr_26167_26187 = state_26156__$1;(statearr_26167_26187[2] = null);
(statearr_26167_26187[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 7))
{var inst_26151 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26168_26188 = state_26156__$1;(statearr_26168_26188[2] = inst_26151);
(statearr_26168_26188[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 8))
{var inst_26133 = (state_26156[7]);var tmp26166 = inst_26133;var inst_26133__$1 = tmp26166;var state_26156__$1 = (function (){var statearr_26169 = state_26156;(statearr_26169[7] = inst_26133__$1);
return statearr_26169;
})();var statearr_26170_26189 = state_26156__$1;(statearr_26170_26189[2] = null);
(statearr_26170_26189[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 9))
{var inst_26136 = (state_26156[9]);var state_26156__$1 = state_26156;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26156__$1,11,out,inst_26136);
} else
{if((state_val_26157 === 10))
{var inst_26148 = (state_26156[2]);var state_26156__$1 = state_26156;var statearr_26171_26190 = state_26156__$1;(statearr_26171_26190[2] = inst_26148);
(statearr_26171_26190[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26157 === 11))
{var inst_26136 = (state_26156[9]);var inst_26145 = (state_26156[2]);var inst_26133 = inst_26136;var state_26156__$1 = (function (){var statearr_26172 = state_26156;(statearr_26172[10] = inst_26145);
(statearr_26172[7] = inst_26133);
return statearr_26172;
})();var statearr_26173_26191 = state_26156__$1;(statearr_26173_26191[2] = null);
(statearr_26173_26191[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_26177 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_26177[0] = state_machine__5507__auto__);
(statearr_26177[1] = 1);
return statearr_26177;
});
var state_machine__5507__auto____1 = (function (state_26156){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26156);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26178){if((e26178 instanceof Object))
{var ex__5510__auto__ = e26178;var statearr_26179_26192 = state_26156;(statearr_26179_26192[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26156);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26178;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26193 = state_26156;
state_26156 = G__26193;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26156){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26156);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26180 = f__5522__auto__.call(null);(statearr_26180[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26181);
return statearr_26180;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___26328 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26298){var state_val_26299 = (state_26298[1]);if((state_val_26299 === 1))
{var inst_26261 = (new Array(n));var inst_26262 = inst_26261;var inst_26263 = 0;var state_26298__$1 = (function (){var statearr_26300 = state_26298;(statearr_26300[7] = inst_26262);
(statearr_26300[8] = inst_26263);
return statearr_26300;
})();var statearr_26301_26329 = state_26298__$1;(statearr_26301_26329[2] = null);
(statearr_26301_26329[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 2))
{var state_26298__$1 = state_26298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26298__$1,4,ch);
} else
{if((state_val_26299 === 3))
{var inst_26296 = (state_26298[2]);var state_26298__$1 = state_26298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26298__$1,inst_26296);
} else
{if((state_val_26299 === 4))
{var inst_26266 = (state_26298[9]);var inst_26266__$1 = (state_26298[2]);var inst_26267 = (inst_26266__$1 == null);var inst_26268 = cljs.core.not.call(null,inst_26267);var state_26298__$1 = (function (){var statearr_26302 = state_26298;(statearr_26302[9] = inst_26266__$1);
return statearr_26302;
})();if(inst_26268)
{var statearr_26303_26330 = state_26298__$1;(statearr_26303_26330[1] = 5);
} else
{var statearr_26304_26331 = state_26298__$1;(statearr_26304_26331[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 5))
{var inst_26266 = (state_26298[9]);var inst_26262 = (state_26298[7]);var inst_26263 = (state_26298[8]);var inst_26271 = (state_26298[10]);var inst_26270 = (inst_26262[inst_26263] = inst_26266);var inst_26271__$1 = (inst_26263 + 1);var inst_26272 = (inst_26271__$1 < n);var state_26298__$1 = (function (){var statearr_26305 = state_26298;(statearr_26305[11] = inst_26270);
(statearr_26305[10] = inst_26271__$1);
return statearr_26305;
})();if(cljs.core.truth_(inst_26272))
{var statearr_26306_26332 = state_26298__$1;(statearr_26306_26332[1] = 8);
} else
{var statearr_26307_26333 = state_26298__$1;(statearr_26307_26333[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 6))
{var inst_26263 = (state_26298[8]);var inst_26284 = (inst_26263 > 0);var state_26298__$1 = state_26298;if(cljs.core.truth_(inst_26284))
{var statearr_26309_26334 = state_26298__$1;(statearr_26309_26334[1] = 12);
} else
{var statearr_26310_26335 = state_26298__$1;(statearr_26310_26335[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 7))
{var inst_26294 = (state_26298[2]);var state_26298__$1 = state_26298;var statearr_26311_26336 = state_26298__$1;(statearr_26311_26336[2] = inst_26294);
(statearr_26311_26336[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 8))
{var inst_26262 = (state_26298[7]);var inst_26271 = (state_26298[10]);var tmp26308 = inst_26262;var inst_26262__$1 = tmp26308;var inst_26263 = inst_26271;var state_26298__$1 = (function (){var statearr_26312 = state_26298;(statearr_26312[7] = inst_26262__$1);
(statearr_26312[8] = inst_26263);
return statearr_26312;
})();var statearr_26313_26337 = state_26298__$1;(statearr_26313_26337[2] = null);
(statearr_26313_26337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 9))
{var inst_26262 = (state_26298[7]);var inst_26276 = cljs.core.vec.call(null,inst_26262);var state_26298__$1 = state_26298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26298__$1,11,out,inst_26276);
} else
{if((state_val_26299 === 10))
{var inst_26282 = (state_26298[2]);var state_26298__$1 = state_26298;var statearr_26314_26338 = state_26298__$1;(statearr_26314_26338[2] = inst_26282);
(statearr_26314_26338[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 11))
{var inst_26278 = (state_26298[2]);var inst_26279 = (new Array(n));var inst_26262 = inst_26279;var inst_26263 = 0;var state_26298__$1 = (function (){var statearr_26315 = state_26298;(statearr_26315[7] = inst_26262);
(statearr_26315[8] = inst_26263);
(statearr_26315[12] = inst_26278);
return statearr_26315;
})();var statearr_26316_26339 = state_26298__$1;(statearr_26316_26339[2] = null);
(statearr_26316_26339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 12))
{var inst_26262 = (state_26298[7]);var inst_26286 = cljs.core.vec.call(null,inst_26262);var state_26298__$1 = state_26298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26298__$1,15,out,inst_26286);
} else
{if((state_val_26299 === 13))
{var state_26298__$1 = state_26298;var statearr_26317_26340 = state_26298__$1;(statearr_26317_26340[2] = null);
(statearr_26317_26340[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 14))
{var inst_26291 = (state_26298[2]);var inst_26292 = cljs.core.async.close_BANG_.call(null,out);var state_26298__$1 = (function (){var statearr_26318 = state_26298;(statearr_26318[13] = inst_26291);
return statearr_26318;
})();var statearr_26319_26341 = state_26298__$1;(statearr_26319_26341[2] = inst_26292);
(statearr_26319_26341[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26299 === 15))
{var inst_26288 = (state_26298[2]);var state_26298__$1 = state_26298;var statearr_26320_26342 = state_26298__$1;(statearr_26320_26342[2] = inst_26288);
(statearr_26320_26342[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_26324 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26324[0] = state_machine__5507__auto__);
(statearr_26324[1] = 1);
return statearr_26324;
});
var state_machine__5507__auto____1 = (function (state_26298){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26298);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26325){if((e26325 instanceof Object))
{var ex__5510__auto__ = e26325;var statearr_26326_26343 = state_26298;(statearr_26326_26343[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26298);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26325;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26344 = state_26298;
state_26298 = G__26344;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26298){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26327 = f__5522__auto__.call(null);(statearr_26327[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26328);
return statearr_26327;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___26487 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_26457){var state_val_26458 = (state_26457[1]);if((state_val_26458 === 1))
{var inst_26416 = [];var inst_26417 = inst_26416;var inst_26418 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_26457__$1 = (function (){var statearr_26459 = state_26457;(statearr_26459[7] = inst_26417);
(statearr_26459[8] = inst_26418);
return statearr_26459;
})();var statearr_26460_26488 = state_26457__$1;(statearr_26460_26488[2] = null);
(statearr_26460_26488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 2))
{var state_26457__$1 = state_26457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26457__$1,4,ch);
} else
{if((state_val_26458 === 3))
{var inst_26455 = (state_26457[2]);var state_26457__$1 = state_26457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26457__$1,inst_26455);
} else
{if((state_val_26458 === 4))
{var inst_26421 = (state_26457[9]);var inst_26421__$1 = (state_26457[2]);var inst_26422 = (inst_26421__$1 == null);var inst_26423 = cljs.core.not.call(null,inst_26422);var state_26457__$1 = (function (){var statearr_26461 = state_26457;(statearr_26461[9] = inst_26421__$1);
return statearr_26461;
})();if(inst_26423)
{var statearr_26462_26489 = state_26457__$1;(statearr_26462_26489[1] = 5);
} else
{var statearr_26463_26490 = state_26457__$1;(statearr_26463_26490[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 5))
{var inst_26421 = (state_26457[9]);var inst_26425 = (state_26457[10]);var inst_26418 = (state_26457[8]);var inst_26425__$1 = f.call(null,inst_26421);var inst_26426 = cljs.core._EQ_.call(null,inst_26425__$1,inst_26418);var inst_26427 = cljs.core.keyword_identical_QMARK_.call(null,inst_26418,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_26428 = (inst_26426) || (inst_26427);var state_26457__$1 = (function (){var statearr_26464 = state_26457;(statearr_26464[10] = inst_26425__$1);
return statearr_26464;
})();if(cljs.core.truth_(inst_26428))
{var statearr_26465_26491 = state_26457__$1;(statearr_26465_26491[1] = 8);
} else
{var statearr_26466_26492 = state_26457__$1;(statearr_26466_26492[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 6))
{var inst_26417 = (state_26457[7]);var inst_26442 = inst_26417.length;var inst_26443 = (inst_26442 > 0);var state_26457__$1 = state_26457;if(cljs.core.truth_(inst_26443))
{var statearr_26468_26493 = state_26457__$1;(statearr_26468_26493[1] = 12);
} else
{var statearr_26469_26494 = state_26457__$1;(statearr_26469_26494[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 7))
{var inst_26453 = (state_26457[2]);var state_26457__$1 = state_26457;var statearr_26470_26495 = state_26457__$1;(statearr_26470_26495[2] = inst_26453);
(statearr_26470_26495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 8))
{var inst_26421 = (state_26457[9]);var inst_26417 = (state_26457[7]);var inst_26425 = (state_26457[10]);var inst_26430 = inst_26417.push(inst_26421);var tmp26467 = inst_26417;var inst_26417__$1 = tmp26467;var inst_26418 = inst_26425;var state_26457__$1 = (function (){var statearr_26471 = state_26457;(statearr_26471[11] = inst_26430);
(statearr_26471[7] = inst_26417__$1);
(statearr_26471[8] = inst_26418);
return statearr_26471;
})();var statearr_26472_26496 = state_26457__$1;(statearr_26472_26496[2] = null);
(statearr_26472_26496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 9))
{var inst_26417 = (state_26457[7]);var inst_26433 = cljs.core.vec.call(null,inst_26417);var state_26457__$1 = state_26457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26457__$1,11,out,inst_26433);
} else
{if((state_val_26458 === 10))
{var inst_26440 = (state_26457[2]);var state_26457__$1 = state_26457;var statearr_26473_26497 = state_26457__$1;(statearr_26473_26497[2] = inst_26440);
(statearr_26473_26497[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 11))
{var inst_26421 = (state_26457[9]);var inst_26425 = (state_26457[10]);var inst_26435 = (state_26457[2]);var inst_26436 = [];var inst_26437 = inst_26436.push(inst_26421);var inst_26417 = inst_26436;var inst_26418 = inst_26425;var state_26457__$1 = (function (){var statearr_26474 = state_26457;(statearr_26474[12] = inst_26437);
(statearr_26474[13] = inst_26435);
(statearr_26474[7] = inst_26417);
(statearr_26474[8] = inst_26418);
return statearr_26474;
})();var statearr_26475_26498 = state_26457__$1;(statearr_26475_26498[2] = null);
(statearr_26475_26498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 12))
{var inst_26417 = (state_26457[7]);var inst_26445 = cljs.core.vec.call(null,inst_26417);var state_26457__$1 = state_26457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26457__$1,15,out,inst_26445);
} else
{if((state_val_26458 === 13))
{var state_26457__$1 = state_26457;var statearr_26476_26499 = state_26457__$1;(statearr_26476_26499[2] = null);
(statearr_26476_26499[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 14))
{var inst_26450 = (state_26457[2]);var inst_26451 = cljs.core.async.close_BANG_.call(null,out);var state_26457__$1 = (function (){var statearr_26477 = state_26457;(statearr_26477[14] = inst_26450);
return statearr_26477;
})();var statearr_26478_26500 = state_26457__$1;(statearr_26478_26500[2] = inst_26451);
(statearr_26478_26500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_26458 === 15))
{var inst_26447 = (state_26457[2]);var state_26457__$1 = state_26457;var statearr_26479_26501 = state_26457__$1;(statearr_26479_26501[2] = inst_26447);
(statearr_26479_26501[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_26483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_26483[0] = state_machine__5507__auto__);
(statearr_26483[1] = 1);
return statearr_26483;
});
var state_machine__5507__auto____1 = (function (state_26457){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_26457);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e26484){if((e26484 instanceof Object))
{var ex__5510__auto__ = e26484;var statearr_26485_26502 = state_26457;(statearr_26485_26502[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26457);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e26484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__26503 = state_26457;
state_26457 = G__26503;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_26457){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_26457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_26486 = f__5522__auto__.call(null);(statearr_26486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___26487);
return statearr_26486;
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
