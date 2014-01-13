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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12004 = (function (f,fn_handler,meta12005){
this.f = f;
this.fn_handler = fn_handler;
this.meta12005 = meta12005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12004.cljs$lang$type = true;
cljs.core.async.t12004.cljs$lang$ctorStr = "cljs.core.async/t12004";
cljs.core.async.t12004.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12004");
});
cljs.core.async.t12004.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12004.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12004.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12004.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12006){var self__ = this;
var _12006__$1 = this;return self__.meta12005;
});
cljs.core.async.t12004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12006,meta12005__$1){var self__ = this;
var _12006__$1 = this;return (new cljs.core.async.t12004(self__.f,self__.fn_handler,meta12005__$1));
});
cljs.core.async.__GT_t12004 = (function __GT_t12004(f__$1,fn_handler__$1,meta12005){return (new cljs.core.async.t12004(f__$1,fn_handler__$1,meta12005));
});
}
return (new cljs.core.async.t12004(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12008 = buff;if(G__12008)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12008.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12008.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12008);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12008);
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
{var val_12009 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12009);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12009);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12010 = n;var x_12011 = 0;while(true){
if((x_12011 < n__4248__auto___12010))
{(a[x_12011] = 0);
{
var G__12012 = (x_12011 + 1);
x_12011 = G__12012;
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
var G__12013 = (i + 1);
i = G__12013;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12017 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12017 = (function (flag,alt_flag,meta12018){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12018 = meta12018;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12017.cljs$lang$type = true;
cljs.core.async.t12017.cljs$lang$ctorStr = "cljs.core.async/t12017";
cljs.core.async.t12017.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12017");
});
cljs.core.async.t12017.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12017.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12017.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12017.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12019){var self__ = this;
var _12019__$1 = this;return self__.meta12018;
});
cljs.core.async.t12017.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12019,meta12018__$1){var self__ = this;
var _12019__$1 = this;return (new cljs.core.async.t12017(self__.flag,self__.alt_flag,meta12018__$1));
});
cljs.core.async.__GT_t12017 = (function __GT_t12017(flag__$1,alt_flag__$1,meta12018){return (new cljs.core.async.t12017(flag__$1,alt_flag__$1,meta12018));
});
}
return (new cljs.core.async.t12017(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12023 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12023 = (function (cb,flag,alt_handler,meta12024){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12024 = meta12024;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12023.cljs$lang$type = true;
cljs.core.async.t12023.cljs$lang$ctorStr = "cljs.core.async/t12023";
cljs.core.async.t12023.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12023");
});
cljs.core.async.t12023.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12023.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12023.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12023.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12025){var self__ = this;
var _12025__$1 = this;return self__.meta12024;
});
cljs.core.async.t12023.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12025,meta12024__$1){var self__ = this;
var _12025__$1 = this;return (new cljs.core.async.t12023(self__.cb,self__.flag,self__.alt_handler,meta12024__$1));
});
cljs.core.async.__GT_t12023 = (function __GT_t12023(cb__$1,flag__$1,alt_handler__$1,meta12024){return (new cljs.core.async.t12023(cb__$1,flag__$1,alt_handler__$1,meta12024));
});
}
return (new cljs.core.async.t12023(cb,flag,alt_handler,null));
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
return (function (p1__12026_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12026_SHARP_,port], null));
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
var G__12027 = (i + 1);
i = G__12027;
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
var alts_BANG___delegate = function (ports,p__12028){var map__12030 = p__12028;var map__12030__$1 = ((cljs.core.seq_QMARK_.call(null,map__12030))?cljs.core.apply.call(null,cljs.core.hash_map,map__12030):map__12030);var opts = map__12030__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12028 = null;if (arguments.length > 1) {
  p__12028 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12028);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12031){
var ports = cljs.core.first(arglist__12031);
var p__12028 = cljs.core.rest(arglist__12031);
return alts_BANG___delegate(ports,p__12028);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12039 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12039 = (function (ch,f,map_LT_,meta12040){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12040 = meta12040;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12039.cljs$lang$type = true;
cljs.core.async.t12039.cljs$lang$ctorStr = "cljs.core.async/t12039";
cljs.core.async.t12039.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12039");
});
cljs.core.async.t12039.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12039.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12039.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12039.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12042 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12042 = (function (fn1,_,meta12040,ch,f,map_LT_,meta12043){
this.fn1 = fn1;
this._ = _;
this.meta12040 = meta12040;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12043 = meta12043;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12042.cljs$lang$type = true;
cljs.core.async.t12042.cljs$lang$ctorStr = "cljs.core.async/t12042";
cljs.core.async.t12042.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12042");
});
cljs.core.async.t12042.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12042.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12042.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12042.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12032_SHARP_){return f1.call(null,(((p1__12032_SHARP_ == null))?null:self__.f.call(null,p1__12032_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12042.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12044){var self__ = this;
var _12044__$1 = this;return self__.meta12043;
});
cljs.core.async.t12042.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12044,meta12043__$1){var self__ = this;
var _12044__$1 = this;return (new cljs.core.async.t12042(self__.fn1,self__._,self__.meta12040,self__.ch,self__.f,self__.map_LT_,meta12043__$1));
});
cljs.core.async.__GT_t12042 = (function __GT_t12042(fn1__$1,___$2,meta12040__$1,ch__$2,f__$2,map_LT___$2,meta12043){return (new cljs.core.async.t12042(fn1__$1,___$2,meta12040__$1,ch__$2,f__$2,map_LT___$2,meta12043));
});
}
return (new cljs.core.async.t12042(fn1,___$1,self__.meta12040,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12039.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12039.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12039.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12041){var self__ = this;
var _12041__$1 = this;return self__.meta12040;
});
cljs.core.async.t12039.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12041,meta12040__$1){var self__ = this;
var _12041__$1 = this;return (new cljs.core.async.t12039(self__.ch,self__.f,self__.map_LT_,meta12040__$1));
});
cljs.core.async.__GT_t12039 = (function __GT_t12039(ch__$1,f__$1,map_LT___$1,meta12040){return (new cljs.core.async.t12039(ch__$1,f__$1,map_LT___$1,meta12040));
});
}
return (new cljs.core.async.t12039(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12048 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12048 = (function (ch,f,map_GT_,meta12049){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12049 = meta12049;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12048.cljs$lang$type = true;
cljs.core.async.t12048.cljs$lang$ctorStr = "cljs.core.async/t12048";
cljs.core.async.t12048.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12048");
});
cljs.core.async.t12048.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12048.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12048.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12048.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12048.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12048.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12048.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12050){var self__ = this;
var _12050__$1 = this;return self__.meta12049;
});
cljs.core.async.t12048.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12050,meta12049__$1){var self__ = this;
var _12050__$1 = this;return (new cljs.core.async.t12048(self__.ch,self__.f,self__.map_GT_,meta12049__$1));
});
cljs.core.async.__GT_t12048 = (function __GT_t12048(ch__$1,f__$1,map_GT___$1,meta12049){return (new cljs.core.async.t12048(ch__$1,f__$1,map_GT___$1,meta12049));
});
}
return (new cljs.core.async.t12048(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t12054 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12054 = (function (ch,p,filter_GT_,meta12055){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta12055 = meta12055;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12054.cljs$lang$type = true;
cljs.core.async.t12054.cljs$lang$ctorStr = "cljs.core.async/t12054";
cljs.core.async.t12054.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12054");
});
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12054.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12054.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12056){var self__ = this;
var _12056__$1 = this;return self__.meta12055;
});
cljs.core.async.t12054.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12056,meta12055__$1){var self__ = this;
var _12056__$1 = this;return (new cljs.core.async.t12054(self__.ch,self__.p,self__.filter_GT_,meta12055__$1));
});
cljs.core.async.__GT_t12054 = (function __GT_t12054(ch__$1,p__$1,filter_GT___$1,meta12055){return (new cljs.core.async.t12054(ch__$1,p__$1,filter_GT___$1,meta12055));
});
}
return (new cljs.core.async.t12054(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12139 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12118){var state_val_12119 = (state_12118[1]);if((state_val_12119 === 1))
{var state_12118__$1 = state_12118;var statearr_12120_12140 = state_12118__$1;(statearr_12120_12140[2] = null);
(statearr_12120_12140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 2))
{var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12118__$1,4,ch);
} else
{if((state_val_12119 === 3))
{var inst_12116 = (state_12118[2]);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12118__$1,inst_12116);
} else
{if((state_val_12119 === 4))
{var inst_12100 = (state_12118[7]);var inst_12100__$1 = (state_12118[2]);var inst_12101 = (inst_12100__$1 == null);var state_12118__$1 = (function (){var statearr_12121 = state_12118;(statearr_12121[7] = inst_12100__$1);
return statearr_12121;
})();if(cljs.core.truth_(inst_12101))
{var statearr_12122_12141 = state_12118__$1;(statearr_12122_12141[1] = 5);
} else
{var statearr_12123_12142 = state_12118__$1;(statearr_12123_12142[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 5))
{var inst_12103 = cljs.core.async.close_BANG_.call(null,out);var state_12118__$1 = state_12118;var statearr_12124_12143 = state_12118__$1;(statearr_12124_12143[2] = inst_12103);
(statearr_12124_12143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 6))
{var inst_12100 = (state_12118[7]);var inst_12105 = p.call(null,inst_12100);var state_12118__$1 = state_12118;if(cljs.core.truth_(inst_12105))
{var statearr_12125_12144 = state_12118__$1;(statearr_12125_12144[1] = 8);
} else
{var statearr_12126_12145 = state_12118__$1;(statearr_12126_12145[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 7))
{var inst_12114 = (state_12118[2]);var state_12118__$1 = state_12118;var statearr_12127_12146 = state_12118__$1;(statearr_12127_12146[2] = inst_12114);
(statearr_12127_12146[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 8))
{var inst_12100 = (state_12118[7]);var state_12118__$1 = state_12118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12118__$1,11,out,inst_12100);
} else
{if((state_val_12119 === 9))
{var state_12118__$1 = state_12118;var statearr_12128_12147 = state_12118__$1;(statearr_12128_12147[2] = null);
(statearr_12128_12147[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 10))
{var inst_12111 = (state_12118[2]);var state_12118__$1 = (function (){var statearr_12129 = state_12118;(statearr_12129[8] = inst_12111);
return statearr_12129;
})();var statearr_12130_12148 = state_12118__$1;(statearr_12130_12148[2] = null);
(statearr_12130_12148[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12119 === 11))
{var inst_12108 = (state_12118[2]);var state_12118__$1 = state_12118;var statearr_12131_12149 = state_12118__$1;(statearr_12131_12149[2] = inst_12108);
(statearr_12131_12149[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12135 = [null,null,null,null,null,null,null,null,null];(statearr_12135[0] = state_machine__5507__auto__);
(statearr_12135[1] = 1);
return statearr_12135;
});
var state_machine__5507__auto____1 = (function (state_12118){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12118);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12136){if((e12136 instanceof Object))
{var ex__5510__auto__ = e12136;var statearr_12137_12150 = state_12118;(statearr_12137_12150[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12118);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12151 = state_12118;
state_12118 = G__12151;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12118){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12138 = f__5522__auto__.call(null);(statearr_12138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12139);
return statearr_12138;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12303){var state_val_12304 = (state_12303[1]);if((state_val_12304 === 1))
{var state_12303__$1 = state_12303;var statearr_12305_12342 = state_12303__$1;(statearr_12305_12342[2] = null);
(statearr_12305_12342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 2))
{var state_12303__$1 = state_12303;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12303__$1,4,in$);
} else
{if((state_val_12304 === 3))
{var inst_12301 = (state_12303[2]);var state_12303__$1 = state_12303;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12303__$1,inst_12301);
} else
{if((state_val_12304 === 4))
{var inst_12249 = (state_12303[7]);var inst_12249__$1 = (state_12303[2]);var inst_12250 = (inst_12249__$1 == null);var state_12303__$1 = (function (){var statearr_12306 = state_12303;(statearr_12306[7] = inst_12249__$1);
return statearr_12306;
})();if(cljs.core.truth_(inst_12250))
{var statearr_12307_12343 = state_12303__$1;(statearr_12307_12343[1] = 5);
} else
{var statearr_12308_12344 = state_12303__$1;(statearr_12308_12344[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 5))
{var inst_12252 = cljs.core.async.close_BANG_.call(null,out);var state_12303__$1 = state_12303;var statearr_12309_12345 = state_12303__$1;(statearr_12309_12345[2] = inst_12252);
(statearr_12309_12345[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 6))
{var inst_12249 = (state_12303[7]);var inst_12254 = f.call(null,inst_12249);var inst_12259 = cljs.core.seq.call(null,inst_12254);var inst_12260 = inst_12259;var inst_12261 = null;var inst_12262 = 0;var inst_12263 = 0;var state_12303__$1 = (function (){var statearr_12310 = state_12303;(statearr_12310[8] = inst_12262);
(statearr_12310[9] = inst_12263);
(statearr_12310[10] = inst_12261);
(statearr_12310[11] = inst_12260);
return statearr_12310;
})();var statearr_12311_12346 = state_12303__$1;(statearr_12311_12346[2] = null);
(statearr_12311_12346[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 7))
{var inst_12299 = (state_12303[2]);var state_12303__$1 = state_12303;var statearr_12312_12347 = state_12303__$1;(statearr_12312_12347[2] = inst_12299);
(statearr_12312_12347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 8))
{var inst_12262 = (state_12303[8]);var inst_12263 = (state_12303[9]);var inst_12265 = (inst_12263 < inst_12262);var inst_12266 = inst_12265;var state_12303__$1 = state_12303;if(cljs.core.truth_(inst_12266))
{var statearr_12313_12348 = state_12303__$1;(statearr_12313_12348[1] = 10);
} else
{var statearr_12314_12349 = state_12303__$1;(statearr_12314_12349[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 9))
{var inst_12296 = (state_12303[2]);var state_12303__$1 = (function (){var statearr_12315 = state_12303;(statearr_12315[12] = inst_12296);
return statearr_12315;
})();var statearr_12316_12350 = state_12303__$1;(statearr_12316_12350[2] = null);
(statearr_12316_12350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 10))
{var inst_12263 = (state_12303[9]);var inst_12261 = (state_12303[10]);var inst_12268 = cljs.core._nth.call(null,inst_12261,inst_12263);var state_12303__$1 = state_12303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12303__$1,13,out,inst_12268);
} else
{if((state_val_12304 === 11))
{var inst_12260 = (state_12303[11]);var inst_12274 = (state_12303[13]);var inst_12274__$1 = cljs.core.seq.call(null,inst_12260);var state_12303__$1 = (function (){var statearr_12320 = state_12303;(statearr_12320[13] = inst_12274__$1);
return statearr_12320;
})();if(inst_12274__$1)
{var statearr_12321_12351 = state_12303__$1;(statearr_12321_12351[1] = 14);
} else
{var statearr_12322_12352 = state_12303__$1;(statearr_12322_12352[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 12))
{var inst_12294 = (state_12303[2]);var state_12303__$1 = state_12303;var statearr_12323_12353 = state_12303__$1;(statearr_12323_12353[2] = inst_12294);
(statearr_12323_12353[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 13))
{var inst_12262 = (state_12303[8]);var inst_12263 = (state_12303[9]);var inst_12261 = (state_12303[10]);var inst_12260 = (state_12303[11]);var inst_12270 = (state_12303[2]);var inst_12271 = (inst_12263 + 1);var tmp12317 = inst_12262;var tmp12318 = inst_12261;var tmp12319 = inst_12260;var inst_12260__$1 = tmp12319;var inst_12261__$1 = tmp12318;var inst_12262__$1 = tmp12317;var inst_12263__$1 = inst_12271;var state_12303__$1 = (function (){var statearr_12324 = state_12303;(statearr_12324[8] = inst_12262__$1);
(statearr_12324[9] = inst_12263__$1);
(statearr_12324[10] = inst_12261__$1);
(statearr_12324[11] = inst_12260__$1);
(statearr_12324[14] = inst_12270);
return statearr_12324;
})();var statearr_12325_12354 = state_12303__$1;(statearr_12325_12354[2] = null);
(statearr_12325_12354[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 14))
{var inst_12274 = (state_12303[13]);var inst_12276 = cljs.core.chunked_seq_QMARK_.call(null,inst_12274);var state_12303__$1 = state_12303;if(inst_12276)
{var statearr_12326_12355 = state_12303__$1;(statearr_12326_12355[1] = 17);
} else
{var statearr_12327_12356 = state_12303__$1;(statearr_12327_12356[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 15))
{var state_12303__$1 = state_12303;var statearr_12328_12357 = state_12303__$1;(statearr_12328_12357[2] = null);
(statearr_12328_12357[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 16))
{var inst_12292 = (state_12303[2]);var state_12303__$1 = state_12303;var statearr_12329_12358 = state_12303__$1;(statearr_12329_12358[2] = inst_12292);
(statearr_12329_12358[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 17))
{var inst_12274 = (state_12303[13]);var inst_12278 = cljs.core.chunk_first.call(null,inst_12274);var inst_12279 = cljs.core.chunk_rest.call(null,inst_12274);var inst_12280 = cljs.core.count.call(null,inst_12278);var inst_12260 = inst_12279;var inst_12261 = inst_12278;var inst_12262 = inst_12280;var inst_12263 = 0;var state_12303__$1 = (function (){var statearr_12330 = state_12303;(statearr_12330[8] = inst_12262);
(statearr_12330[9] = inst_12263);
(statearr_12330[10] = inst_12261);
(statearr_12330[11] = inst_12260);
return statearr_12330;
})();var statearr_12331_12359 = state_12303__$1;(statearr_12331_12359[2] = null);
(statearr_12331_12359[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 18))
{var inst_12274 = (state_12303[13]);var inst_12283 = cljs.core.first.call(null,inst_12274);var state_12303__$1 = state_12303;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12303__$1,20,out,inst_12283);
} else
{if((state_val_12304 === 19))
{var inst_12289 = (state_12303[2]);var state_12303__$1 = state_12303;var statearr_12332_12360 = state_12303__$1;(statearr_12332_12360[2] = inst_12289);
(statearr_12332_12360[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12304 === 20))
{var inst_12274 = (state_12303[13]);var inst_12285 = (state_12303[2]);var inst_12286 = cljs.core.next.call(null,inst_12274);var inst_12260 = inst_12286;var inst_12261 = null;var inst_12262 = 0;var inst_12263 = 0;var state_12303__$1 = (function (){var statearr_12333 = state_12303;(statearr_12333[8] = inst_12262);
(statearr_12333[9] = inst_12263);
(statearr_12333[10] = inst_12261);
(statearr_12333[11] = inst_12260);
(statearr_12333[15] = inst_12285);
return statearr_12333;
})();var statearr_12334_12361 = state_12303__$1;(statearr_12334_12361[2] = null);
(statearr_12334_12361[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12338 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12338[0] = state_machine__5507__auto__);
(statearr_12338[1] = 1);
return statearr_12338;
});
var state_machine__5507__auto____1 = (function (state_12303){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12303);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12339){if((e12339 instanceof Object))
{var ex__5510__auto__ = e12339;var statearr_12340_12362 = state_12303;(statearr_12340_12362[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12303);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12339;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12363 = state_12303;
state_12303 = G__12363;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12303){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12303);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12341 = f__5522__auto__.call(null);(statearr_12341[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12341;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12444 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12423){var state_val_12424 = (state_12423[1]);if((state_val_12424 === 1))
{var state_12423__$1 = state_12423;var statearr_12425_12445 = state_12423__$1;(statearr_12425_12445[2] = null);
(statearr_12425_12445[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12424 === 2))
{var state_12423__$1 = state_12423;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12423__$1,4,from);
} else
{if((state_val_12424 === 3))
{var inst_12421 = (state_12423[2]);var state_12423__$1 = state_12423;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12423__$1,inst_12421);
} else
{if((state_val_12424 === 4))
{var inst_12406 = (state_12423[7]);var inst_12406__$1 = (state_12423[2]);var inst_12407 = (inst_12406__$1 == null);var state_12423__$1 = (function (){var statearr_12426 = state_12423;(statearr_12426[7] = inst_12406__$1);
return statearr_12426;
})();if(cljs.core.truth_(inst_12407))
{var statearr_12427_12446 = state_12423__$1;(statearr_12427_12446[1] = 5);
} else
{var statearr_12428_12447 = state_12423__$1;(statearr_12428_12447[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12424 === 5))
{var state_12423__$1 = state_12423;if(cljs.core.truth_(close_QMARK_))
{var statearr_12429_12448 = state_12423__$1;(statearr_12429_12448[1] = 8);
} else
{var statearr_12430_12449 = state_12423__$1;(statearr_12430_12449[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12424 === 6))
{var inst_12406 = (state_12423[7]);var state_12423__$1 = state_12423;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12423__$1,11,to,inst_12406);
} else
{if((state_val_12424 === 7))
{var inst_12419 = (state_12423[2]);var state_12423__$1 = state_12423;var statearr_12431_12450 = state_12423__$1;(statearr_12431_12450[2] = inst_12419);
(statearr_12431_12450[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12424 === 8))
{var inst_12410 = cljs.core.async.close_BANG_.call(null,to);var state_12423__$1 = state_12423;var statearr_12432_12451 = state_12423__$1;(statearr_12432_12451[2] = inst_12410);
(statearr_12432_12451[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12424 === 9))
{var state_12423__$1 = state_12423;var statearr_12433_12452 = state_12423__$1;(statearr_12433_12452[2] = null);
(statearr_12433_12452[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12424 === 10))
{var inst_12413 = (state_12423[2]);var state_12423__$1 = state_12423;var statearr_12434_12453 = state_12423__$1;(statearr_12434_12453[2] = inst_12413);
(statearr_12434_12453[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12424 === 11))
{var inst_12416 = (state_12423[2]);var state_12423__$1 = (function (){var statearr_12435 = state_12423;(statearr_12435[8] = inst_12416);
return statearr_12435;
})();var statearr_12436_12454 = state_12423__$1;(statearr_12436_12454[2] = null);
(statearr_12436_12454[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12440 = [null,null,null,null,null,null,null,null,null];(statearr_12440[0] = state_machine__5507__auto__);
(statearr_12440[1] = 1);
return statearr_12440;
});
var state_machine__5507__auto____1 = (function (state_12423){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12423);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12441){if((e12441 instanceof Object))
{var ex__5510__auto__ = e12441;var statearr_12442_12455 = state_12423;(statearr_12442_12455[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12423);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12456 = state_12423;
state_12423 = G__12456;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12423){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12423);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12443 = f__5522__auto__.call(null);(statearr_12443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12444);
return statearr_12443;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12543 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12521){var state_val_12522 = (state_12521[1]);if((state_val_12522 === 1))
{var state_12521__$1 = state_12521;var statearr_12523_12544 = state_12521__$1;(statearr_12523_12544[2] = null);
(statearr_12523_12544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12522 === 2))
{var state_12521__$1 = state_12521;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12521__$1,4,ch);
} else
{if((state_val_12522 === 3))
{var inst_12519 = (state_12521[2]);var state_12521__$1 = state_12521;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12521__$1,inst_12519);
} else
{if((state_val_12522 === 4))
{var inst_12502 = (state_12521[7]);var inst_12502__$1 = (state_12521[2]);var inst_12503 = (inst_12502__$1 == null);var state_12521__$1 = (function (){var statearr_12524 = state_12521;(statearr_12524[7] = inst_12502__$1);
return statearr_12524;
})();if(cljs.core.truth_(inst_12503))
{var statearr_12525_12545 = state_12521__$1;(statearr_12525_12545[1] = 5);
} else
{var statearr_12526_12546 = state_12521__$1;(statearr_12526_12546[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12522 === 5))
{var inst_12505 = cljs.core.async.close_BANG_.call(null,tc);var inst_12506 = cljs.core.async.close_BANG_.call(null,fc);var state_12521__$1 = (function (){var statearr_12527 = state_12521;(statearr_12527[8] = inst_12505);
return statearr_12527;
})();var statearr_12528_12547 = state_12521__$1;(statearr_12528_12547[2] = inst_12506);
(statearr_12528_12547[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12522 === 6))
{var inst_12502 = (state_12521[7]);var inst_12508 = p.call(null,inst_12502);var state_12521__$1 = state_12521;if(cljs.core.truth_(inst_12508))
{var statearr_12529_12548 = state_12521__$1;(statearr_12529_12548[1] = 9);
} else
{var statearr_12530_12549 = state_12521__$1;(statearr_12530_12549[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12522 === 7))
{var inst_12517 = (state_12521[2]);var state_12521__$1 = state_12521;var statearr_12531_12550 = state_12521__$1;(statearr_12531_12550[2] = inst_12517);
(statearr_12531_12550[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12522 === 8))
{var inst_12514 = (state_12521[2]);var state_12521__$1 = (function (){var statearr_12532 = state_12521;(statearr_12532[9] = inst_12514);
return statearr_12532;
})();var statearr_12533_12551 = state_12521__$1;(statearr_12533_12551[2] = null);
(statearr_12533_12551[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12522 === 9))
{var state_12521__$1 = state_12521;var statearr_12534_12552 = state_12521__$1;(statearr_12534_12552[2] = tc);
(statearr_12534_12552[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12522 === 10))
{var state_12521__$1 = state_12521;var statearr_12535_12553 = state_12521__$1;(statearr_12535_12553[2] = fc);
(statearr_12535_12553[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12522 === 11))
{var inst_12502 = (state_12521[7]);var inst_12512 = (state_12521[2]);var state_12521__$1 = state_12521;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12521__$1,8,inst_12512,inst_12502);
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
var state_machine__5507__auto____0 = (function (){var statearr_12539 = [null,null,null,null,null,null,null,null,null,null];(statearr_12539[0] = state_machine__5507__auto__);
(statearr_12539[1] = 1);
return statearr_12539;
});
var state_machine__5507__auto____1 = (function (state_12521){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12521);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12540){if((e12540 instanceof Object))
{var ex__5510__auto__ = e12540;var statearr_12541_12554 = state_12521;(statearr_12541_12554[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12521);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12540;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12555 = state_12521;
state_12521 = G__12555;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12521){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12542 = f__5522__auto__.call(null);(statearr_12542[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12543);
return statearr_12542;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12602){var state_val_12603 = (state_12602[1]);if((state_val_12603 === 7))
{var inst_12598 = (state_12602[2]);var state_12602__$1 = state_12602;var statearr_12604_12620 = state_12602__$1;(statearr_12604_12620[2] = inst_12598);
(statearr_12604_12620[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12603 === 6))
{var inst_12588 = (state_12602[7]);var inst_12591 = (state_12602[8]);var inst_12595 = f.call(null,inst_12588,inst_12591);var inst_12588__$1 = inst_12595;var state_12602__$1 = (function (){var statearr_12605 = state_12602;(statearr_12605[7] = inst_12588__$1);
return statearr_12605;
})();var statearr_12606_12621 = state_12602__$1;(statearr_12606_12621[2] = null);
(statearr_12606_12621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12603 === 5))
{var inst_12588 = (state_12602[7]);var state_12602__$1 = state_12602;var statearr_12607_12622 = state_12602__$1;(statearr_12607_12622[2] = inst_12588);
(statearr_12607_12622[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12603 === 4))
{var inst_12591 = (state_12602[8]);var inst_12591__$1 = (state_12602[2]);var inst_12592 = (inst_12591__$1 == null);var state_12602__$1 = (function (){var statearr_12608 = state_12602;(statearr_12608[8] = inst_12591__$1);
return statearr_12608;
})();if(cljs.core.truth_(inst_12592))
{var statearr_12609_12623 = state_12602__$1;(statearr_12609_12623[1] = 5);
} else
{var statearr_12610_12624 = state_12602__$1;(statearr_12610_12624[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12603 === 3))
{var inst_12600 = (state_12602[2]);var state_12602__$1 = state_12602;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12602__$1,inst_12600);
} else
{if((state_val_12603 === 2))
{var state_12602__$1 = state_12602;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12602__$1,4,ch);
} else
{if((state_val_12603 === 1))
{var inst_12588 = init;var state_12602__$1 = (function (){var statearr_12611 = state_12602;(statearr_12611[7] = inst_12588);
return statearr_12611;
})();var statearr_12612_12625 = state_12602__$1;(statearr_12612_12625[2] = null);
(statearr_12612_12625[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12616 = [null,null,null,null,null,null,null,null,null];(statearr_12616[0] = state_machine__5507__auto__);
(statearr_12616[1] = 1);
return statearr_12616;
});
var state_machine__5507__auto____1 = (function (state_12602){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12602);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12617){if((e12617 instanceof Object))
{var ex__5510__auto__ = e12617;var statearr_12618_12626 = state_12602;(statearr_12618_12626[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12602);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12617;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12627 = state_12602;
state_12602 = G__12627;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12602){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12619 = f__5522__auto__.call(null);(statearr_12619[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12619;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12689){var state_val_12690 = (state_12689[1]);if((state_val_12690 === 1))
{var inst_12669 = cljs.core.seq.call(null,coll);var inst_12670 = inst_12669;var state_12689__$1 = (function (){var statearr_12691 = state_12689;(statearr_12691[7] = inst_12670);
return statearr_12691;
})();var statearr_12692_12710 = state_12689__$1;(statearr_12692_12710[2] = null);
(statearr_12692_12710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12690 === 2))
{var inst_12670 = (state_12689[7]);var state_12689__$1 = state_12689;if(cljs.core.truth_(inst_12670))
{var statearr_12693_12711 = state_12689__$1;(statearr_12693_12711[1] = 4);
} else
{var statearr_12694_12712 = state_12689__$1;(statearr_12694_12712[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12690 === 3))
{var inst_12687 = (state_12689[2]);var state_12689__$1 = state_12689;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12689__$1,inst_12687);
} else
{if((state_val_12690 === 4))
{var inst_12670 = (state_12689[7]);var inst_12673 = cljs.core.first.call(null,inst_12670);var state_12689__$1 = state_12689;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12689__$1,7,ch,inst_12673);
} else
{if((state_val_12690 === 5))
{var state_12689__$1 = state_12689;if(cljs.core.truth_(close_QMARK_))
{var statearr_12695_12713 = state_12689__$1;(statearr_12695_12713[1] = 8);
} else
{var statearr_12696_12714 = state_12689__$1;(statearr_12696_12714[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12690 === 6))
{var inst_12685 = (state_12689[2]);var state_12689__$1 = state_12689;var statearr_12697_12715 = state_12689__$1;(statearr_12697_12715[2] = inst_12685);
(statearr_12697_12715[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12690 === 7))
{var inst_12670 = (state_12689[7]);var inst_12675 = (state_12689[2]);var inst_12676 = cljs.core.next.call(null,inst_12670);var inst_12670__$1 = inst_12676;var state_12689__$1 = (function (){var statearr_12698 = state_12689;(statearr_12698[8] = inst_12675);
(statearr_12698[7] = inst_12670__$1);
return statearr_12698;
})();var statearr_12699_12716 = state_12689__$1;(statearr_12699_12716[2] = null);
(statearr_12699_12716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12690 === 8))
{var inst_12680 = cljs.core.async.close_BANG_.call(null,ch);var state_12689__$1 = state_12689;var statearr_12700_12717 = state_12689__$1;(statearr_12700_12717[2] = inst_12680);
(statearr_12700_12717[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12690 === 9))
{var state_12689__$1 = state_12689;var statearr_12701_12718 = state_12689__$1;(statearr_12701_12718[2] = null);
(statearr_12701_12718[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12690 === 10))
{var inst_12683 = (state_12689[2]);var state_12689__$1 = state_12689;var statearr_12702_12719 = state_12689__$1;(statearr_12702_12719[2] = inst_12683);
(statearr_12702_12719[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12706 = [null,null,null,null,null,null,null,null,null];(statearr_12706[0] = state_machine__5507__auto__);
(statearr_12706[1] = 1);
return statearr_12706;
});
var state_machine__5507__auto____1 = (function (state_12689){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12689);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12707){if((e12707 instanceof Object))
{var ex__5510__auto__ = e12707;var statearr_12708_12720 = state_12689;(statearr_12708_12720[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12689);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12721 = state_12689;
state_12689 = G__12721;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12689){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12689);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12709 = f__5522__auto__.call(null);(statearr_12709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12709;
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
cljs.core.async.Mux = (function (){var obj12723 = {};return obj12723;
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
cljs.core.async.Mult = (function (){var obj12725 = {};return obj12725;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12949 = (function (cs,ch,mult,meta12950){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12950 = meta12950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12949.cljs$lang$type = true;
cljs.core.async.t12949.cljs$lang$ctorStr = "cljs.core.async/t12949";
cljs.core.async.t12949.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12949");
});})(cs))
;
cljs.core.async.t12949.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12949.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12949.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12949.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12949.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12949.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12949.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12951){var self__ = this;
var _12951__$1 = this;return self__.meta12950;
});})(cs))
;
cljs.core.async.t12949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12951,meta12950__$1){var self__ = this;
var _12951__$1 = this;return (new cljs.core.async.t12949(self__.cs,self__.ch,self__.mult,meta12950__$1));
});})(cs))
;
cljs.core.async.__GT_t12949 = ((function (cs){
return (function __GT_t12949(cs__$1,ch__$1,mult__$1,meta12950){return (new cljs.core.async.t12949(cs__$1,ch__$1,mult__$1,meta12950));
});})(cs))
;
}
return (new cljs.core.async.t12949(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13172 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13086){var state_val_13087 = (state_13086[1]);if((state_val_13087 === 32))
{var inst_13030 = (state_13086[7]);var inst_12954 = (state_13086[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13086,31,Object,null,30);var inst_13037 = cljs.core.async.put_BANG_.call(null,inst_13030,inst_12954,done);var state_13086__$1 = state_13086;var statearr_13088_13173 = state_13086__$1;(statearr_13088_13173[2] = inst_13037);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13086__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 1))
{var state_13086__$1 = state_13086;var statearr_13089_13174 = state_13086__$1;(statearr_13089_13174[2] = null);
(statearr_13089_13174[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 33))
{var inst_13043 = (state_13086[9]);var inst_13045 = cljs.core.chunked_seq_QMARK_.call(null,inst_13043);var state_13086__$1 = state_13086;if(inst_13045)
{var statearr_13090_13175 = state_13086__$1;(statearr_13090_13175[1] = 36);
} else
{var statearr_13091_13176 = state_13086__$1;(statearr_13091_13176[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 2))
{var state_13086__$1 = state_13086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13086__$1,4,ch);
} else
{if((state_val_13087 === 34))
{var state_13086__$1 = state_13086;var statearr_13092_13177 = state_13086__$1;(statearr_13092_13177[2] = null);
(statearr_13092_13177[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 3))
{var inst_13084 = (state_13086[2]);var state_13086__$1 = state_13086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13086__$1,inst_13084);
} else
{if((state_val_13087 === 35))
{var inst_13068 = (state_13086[2]);var state_13086__$1 = state_13086;var statearr_13093_13178 = state_13086__$1;(statearr_13093_13178[2] = inst_13068);
(statearr_13093_13178[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 4))
{var inst_12954 = (state_13086[8]);var inst_12954__$1 = (state_13086[2]);var inst_12955 = (inst_12954__$1 == null);var state_13086__$1 = (function (){var statearr_13094 = state_13086;(statearr_13094[8] = inst_12954__$1);
return statearr_13094;
})();if(cljs.core.truth_(inst_12955))
{var statearr_13095_13179 = state_13086__$1;(statearr_13095_13179[1] = 5);
} else
{var statearr_13096_13180 = state_13086__$1;(statearr_13096_13180[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 36))
{var inst_13043 = (state_13086[9]);var inst_13047 = cljs.core.chunk_first.call(null,inst_13043);var inst_13048 = cljs.core.chunk_rest.call(null,inst_13043);var inst_13049 = cljs.core.count.call(null,inst_13047);var inst_13022 = inst_13048;var inst_13023 = inst_13047;var inst_13024 = inst_13049;var inst_13025 = 0;var state_13086__$1 = (function (){var statearr_13097 = state_13086;(statearr_13097[10] = inst_13025);
(statearr_13097[11] = inst_13023);
(statearr_13097[12] = inst_13024);
(statearr_13097[13] = inst_13022);
return statearr_13097;
})();var statearr_13098_13181 = state_13086__$1;(statearr_13098_13181[2] = null);
(statearr_13098_13181[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 5))
{var inst_12961 = cljs.core.deref.call(null,cs);var inst_12962 = cljs.core.seq.call(null,inst_12961);var inst_12963 = inst_12962;var inst_12964 = null;var inst_12965 = 0;var inst_12966 = 0;var state_13086__$1 = (function (){var statearr_13099 = state_13086;(statearr_13099[14] = inst_12963);
(statearr_13099[15] = inst_12964);
(statearr_13099[16] = inst_12965);
(statearr_13099[17] = inst_12966);
return statearr_13099;
})();var statearr_13100_13182 = state_13086__$1;(statearr_13100_13182[2] = null);
(statearr_13100_13182[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 37))
{var inst_13043 = (state_13086[9]);var inst_13052 = cljs.core.first.call(null,inst_13043);var state_13086__$1 = (function (){var statearr_13101 = state_13086;(statearr_13101[18] = inst_13052);
return statearr_13101;
})();var statearr_13102_13183 = state_13086__$1;(statearr_13102_13183[2] = null);
(statearr_13102_13183[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 6))
{var inst_13014 = (state_13086[19]);var inst_13013 = cljs.core.deref.call(null,cs);var inst_13014__$1 = cljs.core.keys.call(null,inst_13013);var inst_13015 = cljs.core.count.call(null,inst_13014__$1);var inst_13016 = cljs.core.reset_BANG_.call(null,dctr,inst_13015);var inst_13021 = cljs.core.seq.call(null,inst_13014__$1);var inst_13022 = inst_13021;var inst_13023 = null;var inst_13024 = 0;var inst_13025 = 0;var state_13086__$1 = (function (){var statearr_13103 = state_13086;(statearr_13103[10] = inst_13025);
(statearr_13103[11] = inst_13023);
(statearr_13103[12] = inst_13024);
(statearr_13103[13] = inst_13022);
(statearr_13103[20] = inst_13016);
(statearr_13103[19] = inst_13014__$1);
return statearr_13103;
})();var statearr_13104_13184 = state_13086__$1;(statearr_13104_13184[2] = null);
(statearr_13104_13184[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 38))
{var inst_13065 = (state_13086[2]);var state_13086__$1 = state_13086;var statearr_13105_13185 = state_13086__$1;(statearr_13105_13185[2] = inst_13065);
(statearr_13105_13185[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 7))
{var inst_13082 = (state_13086[2]);var state_13086__$1 = state_13086;var statearr_13106_13186 = state_13086__$1;(statearr_13106_13186[2] = inst_13082);
(statearr_13106_13186[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 39))
{var inst_13043 = (state_13086[9]);var inst_13061 = (state_13086[2]);var inst_13062 = cljs.core.next.call(null,inst_13043);var inst_13022 = inst_13062;var inst_13023 = null;var inst_13024 = 0;var inst_13025 = 0;var state_13086__$1 = (function (){var statearr_13107 = state_13086;(statearr_13107[10] = inst_13025);
(statearr_13107[11] = inst_13023);
(statearr_13107[12] = inst_13024);
(statearr_13107[13] = inst_13022);
(statearr_13107[21] = inst_13061);
return statearr_13107;
})();var statearr_13108_13187 = state_13086__$1;(statearr_13108_13187[2] = null);
(statearr_13108_13187[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 8))
{var inst_12965 = (state_13086[16]);var inst_12966 = (state_13086[17]);var inst_12968 = (inst_12966 < inst_12965);var inst_12969 = inst_12968;var state_13086__$1 = state_13086;if(cljs.core.truth_(inst_12969))
{var statearr_13109_13188 = state_13086__$1;(statearr_13109_13188[1] = 10);
} else
{var statearr_13110_13189 = state_13086__$1;(statearr_13110_13189[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 40))
{var inst_13052 = (state_13086[18]);var inst_13053 = (state_13086[2]);var inst_13054 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13055 = cljs.core.async.untap_STAR_.call(null,m,inst_13052);var state_13086__$1 = (function (){var statearr_13111 = state_13086;(statearr_13111[22] = inst_13054);
(statearr_13111[23] = inst_13053);
return statearr_13111;
})();var statearr_13112_13190 = state_13086__$1;(statearr_13112_13190[2] = inst_13055);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13086__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 9))
{var inst_13011 = (state_13086[2]);var state_13086__$1 = state_13086;var statearr_13113_13191 = state_13086__$1;(statearr_13113_13191[2] = inst_13011);
(statearr_13113_13191[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 41))
{var inst_13052 = (state_13086[18]);var inst_12954 = (state_13086[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13086,40,Object,null,39);var inst_13059 = cljs.core.async.put_BANG_.call(null,inst_13052,inst_12954,done);var state_13086__$1 = state_13086;var statearr_13114_13192 = state_13086__$1;(statearr_13114_13192[2] = inst_13059);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13086__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 10))
{var inst_12964 = (state_13086[15]);var inst_12966 = (state_13086[17]);var inst_12972 = cljs.core._nth.call(null,inst_12964,inst_12966);var inst_12973 = cljs.core.nth.call(null,inst_12972,0,null);var inst_12974 = cljs.core.nth.call(null,inst_12972,1,null);var state_13086__$1 = (function (){var statearr_13115 = state_13086;(statearr_13115[24] = inst_12973);
return statearr_13115;
})();if(cljs.core.truth_(inst_12974))
{var statearr_13116_13193 = state_13086__$1;(statearr_13116_13193[1] = 13);
} else
{var statearr_13117_13194 = state_13086__$1;(statearr_13117_13194[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 42))
{var state_13086__$1 = state_13086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13086__$1,45,dchan);
} else
{if((state_val_13087 === 11))
{var inst_12983 = (state_13086[25]);var inst_12963 = (state_13086[14]);var inst_12983__$1 = cljs.core.seq.call(null,inst_12963);var state_13086__$1 = (function (){var statearr_13118 = state_13086;(statearr_13118[25] = inst_12983__$1);
return statearr_13118;
})();if(inst_12983__$1)
{var statearr_13119_13195 = state_13086__$1;(statearr_13119_13195[1] = 16);
} else
{var statearr_13120_13196 = state_13086__$1;(statearr_13120_13196[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 43))
{var state_13086__$1 = state_13086;var statearr_13121_13197 = state_13086__$1;(statearr_13121_13197[2] = null);
(statearr_13121_13197[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 12))
{var inst_13009 = (state_13086[2]);var state_13086__$1 = state_13086;var statearr_13122_13198 = state_13086__$1;(statearr_13122_13198[2] = inst_13009);
(statearr_13122_13198[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 44))
{var inst_13079 = (state_13086[2]);var state_13086__$1 = (function (){var statearr_13123 = state_13086;(statearr_13123[26] = inst_13079);
return statearr_13123;
})();var statearr_13124_13199 = state_13086__$1;(statearr_13124_13199[2] = null);
(statearr_13124_13199[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 13))
{var inst_12973 = (state_13086[24]);var inst_12976 = cljs.core.async.close_BANG_.call(null,inst_12973);var state_13086__$1 = state_13086;var statearr_13125_13200 = state_13086__$1;(statearr_13125_13200[2] = inst_12976);
(statearr_13125_13200[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 45))
{var inst_13076 = (state_13086[2]);var state_13086__$1 = state_13086;var statearr_13129_13201 = state_13086__$1;(statearr_13129_13201[2] = inst_13076);
(statearr_13129_13201[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 14))
{var state_13086__$1 = state_13086;var statearr_13130_13202 = state_13086__$1;(statearr_13130_13202[2] = null);
(statearr_13130_13202[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 15))
{var inst_12963 = (state_13086[14]);var inst_12964 = (state_13086[15]);var inst_12965 = (state_13086[16]);var inst_12966 = (state_13086[17]);var inst_12979 = (state_13086[2]);var inst_12980 = (inst_12966 + 1);var tmp13126 = inst_12963;var tmp13127 = inst_12964;var tmp13128 = inst_12965;var inst_12963__$1 = tmp13126;var inst_12964__$1 = tmp13127;var inst_12965__$1 = tmp13128;var inst_12966__$1 = inst_12980;var state_13086__$1 = (function (){var statearr_13131 = state_13086;(statearr_13131[27] = inst_12979);
(statearr_13131[14] = inst_12963__$1);
(statearr_13131[15] = inst_12964__$1);
(statearr_13131[16] = inst_12965__$1);
(statearr_13131[17] = inst_12966__$1);
return statearr_13131;
})();var statearr_13132_13203 = state_13086__$1;(statearr_13132_13203[2] = null);
(statearr_13132_13203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 16))
{var inst_12983 = (state_13086[25]);var inst_12985 = cljs.core.chunked_seq_QMARK_.call(null,inst_12983);var state_13086__$1 = state_13086;if(inst_12985)
{var statearr_13133_13204 = state_13086__$1;(statearr_13133_13204[1] = 19);
} else
{var statearr_13134_13205 = state_13086__$1;(statearr_13134_13205[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 17))
{var state_13086__$1 = state_13086;var statearr_13135_13206 = state_13086__$1;(statearr_13135_13206[2] = null);
(statearr_13135_13206[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 18))
{var inst_13007 = (state_13086[2]);var state_13086__$1 = state_13086;var statearr_13136_13207 = state_13086__$1;(statearr_13136_13207[2] = inst_13007);
(statearr_13136_13207[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 19))
{var inst_12983 = (state_13086[25]);var inst_12987 = cljs.core.chunk_first.call(null,inst_12983);var inst_12988 = cljs.core.chunk_rest.call(null,inst_12983);var inst_12989 = cljs.core.count.call(null,inst_12987);var inst_12963 = inst_12988;var inst_12964 = inst_12987;var inst_12965 = inst_12989;var inst_12966 = 0;var state_13086__$1 = (function (){var statearr_13137 = state_13086;(statearr_13137[14] = inst_12963);
(statearr_13137[15] = inst_12964);
(statearr_13137[16] = inst_12965);
(statearr_13137[17] = inst_12966);
return statearr_13137;
})();var statearr_13138_13208 = state_13086__$1;(statearr_13138_13208[2] = null);
(statearr_13138_13208[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 20))
{var inst_12983 = (state_13086[25]);var inst_12993 = cljs.core.first.call(null,inst_12983);var inst_12994 = cljs.core.nth.call(null,inst_12993,0,null);var inst_12995 = cljs.core.nth.call(null,inst_12993,1,null);var state_13086__$1 = (function (){var statearr_13139 = state_13086;(statearr_13139[28] = inst_12994);
return statearr_13139;
})();if(cljs.core.truth_(inst_12995))
{var statearr_13140_13209 = state_13086__$1;(statearr_13140_13209[1] = 22);
} else
{var statearr_13141_13210 = state_13086__$1;(statearr_13141_13210[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 21))
{var inst_13004 = (state_13086[2]);var state_13086__$1 = state_13086;var statearr_13142_13211 = state_13086__$1;(statearr_13142_13211[2] = inst_13004);
(statearr_13142_13211[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 22))
{var inst_12994 = (state_13086[28]);var inst_12997 = cljs.core.async.close_BANG_.call(null,inst_12994);var state_13086__$1 = state_13086;var statearr_13143_13212 = state_13086__$1;(statearr_13143_13212[2] = inst_12997);
(statearr_13143_13212[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 23))
{var state_13086__$1 = state_13086;var statearr_13144_13213 = state_13086__$1;(statearr_13144_13213[2] = null);
(statearr_13144_13213[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 24))
{var inst_12983 = (state_13086[25]);var inst_13000 = (state_13086[2]);var inst_13001 = cljs.core.next.call(null,inst_12983);var inst_12963 = inst_13001;var inst_12964 = null;var inst_12965 = 0;var inst_12966 = 0;var state_13086__$1 = (function (){var statearr_13145 = state_13086;(statearr_13145[29] = inst_13000);
(statearr_13145[14] = inst_12963);
(statearr_13145[15] = inst_12964);
(statearr_13145[16] = inst_12965);
(statearr_13145[17] = inst_12966);
return statearr_13145;
})();var statearr_13146_13214 = state_13086__$1;(statearr_13146_13214[2] = null);
(statearr_13146_13214[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 25))
{var inst_13025 = (state_13086[10]);var inst_13024 = (state_13086[12]);var inst_13027 = (inst_13025 < inst_13024);var inst_13028 = inst_13027;var state_13086__$1 = state_13086;if(cljs.core.truth_(inst_13028))
{var statearr_13147_13215 = state_13086__$1;(statearr_13147_13215[1] = 27);
} else
{var statearr_13148_13216 = state_13086__$1;(statearr_13148_13216[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 26))
{var inst_13014 = (state_13086[19]);var inst_13072 = (state_13086[2]);var inst_13073 = cljs.core.seq.call(null,inst_13014);var state_13086__$1 = (function (){var statearr_13149 = state_13086;(statearr_13149[30] = inst_13072);
return statearr_13149;
})();if(inst_13073)
{var statearr_13150_13217 = state_13086__$1;(statearr_13150_13217[1] = 42);
} else
{var statearr_13151_13218 = state_13086__$1;(statearr_13151_13218[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 27))
{var inst_13025 = (state_13086[10]);var inst_13023 = (state_13086[11]);var inst_13030 = cljs.core._nth.call(null,inst_13023,inst_13025);var state_13086__$1 = (function (){var statearr_13152 = state_13086;(statearr_13152[7] = inst_13030);
return statearr_13152;
})();var statearr_13153_13219 = state_13086__$1;(statearr_13153_13219[2] = null);
(statearr_13153_13219[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 28))
{var inst_13043 = (state_13086[9]);var inst_13022 = (state_13086[13]);var inst_13043__$1 = cljs.core.seq.call(null,inst_13022);var state_13086__$1 = (function (){var statearr_13157 = state_13086;(statearr_13157[9] = inst_13043__$1);
return statearr_13157;
})();if(inst_13043__$1)
{var statearr_13158_13220 = state_13086__$1;(statearr_13158_13220[1] = 33);
} else
{var statearr_13159_13221 = state_13086__$1;(statearr_13159_13221[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 29))
{var inst_13070 = (state_13086[2]);var state_13086__$1 = state_13086;var statearr_13160_13222 = state_13086__$1;(statearr_13160_13222[2] = inst_13070);
(statearr_13160_13222[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 30))
{var inst_13025 = (state_13086[10]);var inst_13023 = (state_13086[11]);var inst_13024 = (state_13086[12]);var inst_13022 = (state_13086[13]);var inst_13039 = (state_13086[2]);var inst_13040 = (inst_13025 + 1);var tmp13154 = inst_13023;var tmp13155 = inst_13024;var tmp13156 = inst_13022;var inst_13022__$1 = tmp13156;var inst_13023__$1 = tmp13154;var inst_13024__$1 = tmp13155;var inst_13025__$1 = inst_13040;var state_13086__$1 = (function (){var statearr_13161 = state_13086;(statearr_13161[31] = inst_13039);
(statearr_13161[10] = inst_13025__$1);
(statearr_13161[11] = inst_13023__$1);
(statearr_13161[12] = inst_13024__$1);
(statearr_13161[13] = inst_13022__$1);
return statearr_13161;
})();var statearr_13162_13223 = state_13086__$1;(statearr_13162_13223[2] = null);
(statearr_13162_13223[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13087 === 31))
{var inst_13030 = (state_13086[7]);var inst_13031 = (state_13086[2]);var inst_13032 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13033 = cljs.core.async.untap_STAR_.call(null,m,inst_13030);var state_13086__$1 = (function (){var statearr_13163 = state_13086;(statearr_13163[32] = inst_13032);
(statearr_13163[33] = inst_13031);
return statearr_13163;
})();var statearr_13164_13224 = state_13086__$1;(statearr_13164_13224[2] = inst_13033);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13086__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13168 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13168[0] = state_machine__5507__auto__);
(statearr_13168[1] = 1);
return statearr_13168;
});
var state_machine__5507__auto____1 = (function (state_13086){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13086);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13169){if((e13169 instanceof Object))
{var ex__5510__auto__ = e13169;var statearr_13170_13225 = state_13086;(statearr_13170_13225[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13086);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13169;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13226 = state_13086;
state_13086 = G__13226;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13086){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13171 = f__5522__auto__.call(null);(statearr_13171[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13172);
return statearr_13171;
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
cljs.core.async.Mix = (function (){var obj13228 = {};return obj13228;
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
;var m = (function (){if(typeof cljs.core.async.t13338 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13338 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13339){
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
this.meta13339 = meta13339;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13338.cljs$lang$type = true;
cljs.core.async.t13338.cljs$lang$ctorStr = "cljs.core.async/t13338";
cljs.core.async.t13338.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13338");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13338.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13338.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13338.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13338.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13338.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13338.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13338.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13338.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13338.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13340){var self__ = this;
var _13340__$1 = this;return self__.meta13339;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13340,meta13339__$1){var self__ = this;
var _13340__$1 = this;return (new cljs.core.async.t13338(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13339__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13338 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13338(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13339){return (new cljs.core.async.t13338(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13339));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13338(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13447 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13405){var state_val_13406 = (state_13405[1]);if((state_val_13406 === 1))
{var inst_13344 = (state_13405[7]);var inst_13344__$1 = calc_state.call(null);var inst_13345 = cljs.core.seq_QMARK_.call(null,inst_13344__$1);var state_13405__$1 = (function (){var statearr_13407 = state_13405;(statearr_13407[7] = inst_13344__$1);
return statearr_13407;
})();if(inst_13345)
{var statearr_13408_13448 = state_13405__$1;(statearr_13408_13448[1] = 2);
} else
{var statearr_13409_13449 = state_13405__$1;(statearr_13409_13449[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 2))
{var inst_13344 = (state_13405[7]);var inst_13347 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13344);var state_13405__$1 = state_13405;var statearr_13410_13450 = state_13405__$1;(statearr_13410_13450[2] = inst_13347);
(statearr_13410_13450[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 3))
{var inst_13344 = (state_13405[7]);var state_13405__$1 = state_13405;var statearr_13411_13451 = state_13405__$1;(statearr_13411_13451[2] = inst_13344);
(statearr_13411_13451[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 4))
{var inst_13344 = (state_13405[7]);var inst_13350 = (state_13405[2]);var inst_13351 = cljs.core.get.call(null,inst_13350,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13352 = cljs.core.get.call(null,inst_13350,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13353 = cljs.core.get.call(null,inst_13350,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13354 = inst_13344;var state_13405__$1 = (function (){var statearr_13412 = state_13405;(statearr_13412[8] = inst_13353);
(statearr_13412[9] = inst_13354);
(statearr_13412[10] = inst_13351);
(statearr_13412[11] = inst_13352);
return statearr_13412;
})();var statearr_13413_13452 = state_13405__$1;(statearr_13413_13452[2] = null);
(statearr_13413_13452[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 5))
{var inst_13354 = (state_13405[9]);var inst_13357 = cljs.core.seq_QMARK_.call(null,inst_13354);var state_13405__$1 = state_13405;if(inst_13357)
{var statearr_13414_13453 = state_13405__$1;(statearr_13414_13453[1] = 7);
} else
{var statearr_13415_13454 = state_13405__$1;(statearr_13415_13454[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 6))
{var inst_13403 = (state_13405[2]);var state_13405__$1 = state_13405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13405__$1,inst_13403);
} else
{if((state_val_13406 === 7))
{var inst_13354 = (state_13405[9]);var inst_13359 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13354);var state_13405__$1 = state_13405;var statearr_13416_13455 = state_13405__$1;(statearr_13416_13455[2] = inst_13359);
(statearr_13416_13455[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 8))
{var inst_13354 = (state_13405[9]);var state_13405__$1 = state_13405;var statearr_13417_13456 = state_13405__$1;(statearr_13417_13456[2] = inst_13354);
(statearr_13417_13456[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 9))
{var inst_13362 = (state_13405[12]);var inst_13362__$1 = (state_13405[2]);var inst_13363 = cljs.core.get.call(null,inst_13362__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13364 = cljs.core.get.call(null,inst_13362__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13365 = cljs.core.get.call(null,inst_13362__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13405__$1 = (function (){var statearr_13418 = state_13405;(statearr_13418[13] = inst_13364);
(statearr_13418[14] = inst_13365);
(statearr_13418[12] = inst_13362__$1);
return statearr_13418;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13405__$1,10,inst_13363);
} else
{if((state_val_13406 === 10))
{var inst_13369 = (state_13405[15]);var inst_13370 = (state_13405[16]);var inst_13368 = (state_13405[2]);var inst_13369__$1 = cljs.core.nth.call(null,inst_13368,0,null);var inst_13370__$1 = cljs.core.nth.call(null,inst_13368,1,null);var inst_13371 = (inst_13369__$1 == null);var inst_13372 = cljs.core._EQ_.call(null,inst_13370__$1,change);var inst_13373 = (inst_13371) || (inst_13372);var state_13405__$1 = (function (){var statearr_13419 = state_13405;(statearr_13419[15] = inst_13369__$1);
(statearr_13419[16] = inst_13370__$1);
return statearr_13419;
})();if(cljs.core.truth_(inst_13373))
{var statearr_13420_13457 = state_13405__$1;(statearr_13420_13457[1] = 11);
} else
{var statearr_13421_13458 = state_13405__$1;(statearr_13421_13458[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 11))
{var inst_13369 = (state_13405[15]);var inst_13375 = (inst_13369 == null);var state_13405__$1 = state_13405;if(cljs.core.truth_(inst_13375))
{var statearr_13422_13459 = state_13405__$1;(statearr_13422_13459[1] = 14);
} else
{var statearr_13423_13460 = state_13405__$1;(statearr_13423_13460[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 12))
{var inst_13365 = (state_13405[14]);var inst_13370 = (state_13405[16]);var inst_13384 = (state_13405[17]);var inst_13384__$1 = inst_13365.call(null,inst_13370);var state_13405__$1 = (function (){var statearr_13424 = state_13405;(statearr_13424[17] = inst_13384__$1);
return statearr_13424;
})();if(cljs.core.truth_(inst_13384__$1))
{var statearr_13425_13461 = state_13405__$1;(statearr_13425_13461[1] = 17);
} else
{var statearr_13426_13462 = state_13405__$1;(statearr_13426_13462[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 13))
{var inst_13401 = (state_13405[2]);var state_13405__$1 = state_13405;var statearr_13427_13463 = state_13405__$1;(statearr_13427_13463[2] = inst_13401);
(statearr_13427_13463[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 14))
{var inst_13370 = (state_13405[16]);var inst_13377 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13370);var state_13405__$1 = state_13405;var statearr_13428_13464 = state_13405__$1;(statearr_13428_13464[2] = inst_13377);
(statearr_13428_13464[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 15))
{var state_13405__$1 = state_13405;var statearr_13429_13465 = state_13405__$1;(statearr_13429_13465[2] = null);
(statearr_13429_13465[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 16))
{var inst_13380 = (state_13405[2]);var inst_13381 = calc_state.call(null);var inst_13354 = inst_13381;var state_13405__$1 = (function (){var statearr_13430 = state_13405;(statearr_13430[9] = inst_13354);
(statearr_13430[18] = inst_13380);
return statearr_13430;
})();var statearr_13431_13466 = state_13405__$1;(statearr_13431_13466[2] = null);
(statearr_13431_13466[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 17))
{var inst_13384 = (state_13405[17]);var state_13405__$1 = state_13405;var statearr_13432_13467 = state_13405__$1;(statearr_13432_13467[2] = inst_13384);
(statearr_13432_13467[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 18))
{var inst_13364 = (state_13405[13]);var inst_13365 = (state_13405[14]);var inst_13370 = (state_13405[16]);var inst_13387 = cljs.core.empty_QMARK_.call(null,inst_13365);var inst_13388 = inst_13364.call(null,inst_13370);var inst_13389 = cljs.core.not.call(null,inst_13388);var inst_13390 = (inst_13387) && (inst_13389);var state_13405__$1 = state_13405;var statearr_13433_13468 = state_13405__$1;(statearr_13433_13468[2] = inst_13390);
(statearr_13433_13468[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 19))
{var inst_13392 = (state_13405[2]);var state_13405__$1 = state_13405;if(cljs.core.truth_(inst_13392))
{var statearr_13434_13469 = state_13405__$1;(statearr_13434_13469[1] = 20);
} else
{var statearr_13435_13470 = state_13405__$1;(statearr_13435_13470[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 20))
{var inst_13369 = (state_13405[15]);var state_13405__$1 = state_13405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13405__$1,23,out,inst_13369);
} else
{if((state_val_13406 === 21))
{var state_13405__$1 = state_13405;var statearr_13436_13471 = state_13405__$1;(statearr_13436_13471[2] = null);
(statearr_13436_13471[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 22))
{var inst_13362 = (state_13405[12]);var inst_13398 = (state_13405[2]);var inst_13354 = inst_13362;var state_13405__$1 = (function (){var statearr_13437 = state_13405;(statearr_13437[19] = inst_13398);
(statearr_13437[9] = inst_13354);
return statearr_13437;
})();var statearr_13438_13472 = state_13405__$1;(statearr_13438_13472[2] = null);
(statearr_13438_13472[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 23))
{var inst_13395 = (state_13405[2]);var state_13405__$1 = state_13405;var statearr_13439_13473 = state_13405__$1;(statearr_13439_13473[2] = inst_13395);
(statearr_13439_13473[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13443 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13443[0] = state_machine__5507__auto__);
(statearr_13443[1] = 1);
return statearr_13443;
});
var state_machine__5507__auto____1 = (function (state_13405){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13405);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13444){if((e13444 instanceof Object))
{var ex__5510__auto__ = e13444;var statearr_13445_13474 = state_13405;(statearr_13445_13474[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13405);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13444;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13475 = state_13405;
state_13405 = G__13475;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13405){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13405);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13446 = f__5522__auto__.call(null);(statearr_13446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13447);
return statearr_13446;
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
cljs.core.async.Pub = (function (){var obj13477 = {};return obj13477;
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
return (function (p1__13478_SHARP_){if(cljs.core.truth_(p1__13478_SHARP_.call(null,topic)))
{return p1__13478_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13478_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13603 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13603 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13604){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13604 = meta13604;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13603.cljs$lang$type = true;
cljs.core.async.t13603.cljs$lang$ctorStr = "cljs.core.async/t13603";
cljs.core.async.t13603.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13603");
});})(mults,ensure_mult))
;
cljs.core.async.t13603.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13603.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13603.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13603.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13603.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13603.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13603.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13605){var self__ = this;
var _13605__$1 = this;return self__.meta13604;
});})(mults,ensure_mult))
;
cljs.core.async.t13603.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13605,meta13604__$1){var self__ = this;
var _13605__$1 = this;return (new cljs.core.async.t13603(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13604__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13603 = ((function (mults,ensure_mult){
return (function __GT_t13603(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13604){return (new cljs.core.async.t13603(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13604));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13603(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13727 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13679){var state_val_13680 = (state_13679[1]);if((state_val_13680 === 1))
{var state_13679__$1 = state_13679;var statearr_13681_13728 = state_13679__$1;(statearr_13681_13728[2] = null);
(statearr_13681_13728[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 2))
{var state_13679__$1 = state_13679;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13679__$1,4,ch);
} else
{if((state_val_13680 === 3))
{var inst_13677 = (state_13679[2]);var state_13679__$1 = state_13679;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13679__$1,inst_13677);
} else
{if((state_val_13680 === 4))
{var inst_13608 = (state_13679[7]);var inst_13608__$1 = (state_13679[2]);var inst_13609 = (inst_13608__$1 == null);var state_13679__$1 = (function (){var statearr_13682 = state_13679;(statearr_13682[7] = inst_13608__$1);
return statearr_13682;
})();if(cljs.core.truth_(inst_13609))
{var statearr_13683_13729 = state_13679__$1;(statearr_13683_13729[1] = 5);
} else
{var statearr_13684_13730 = state_13679__$1;(statearr_13684_13730[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 5))
{var inst_13615 = cljs.core.deref.call(null,mults);var inst_13616 = cljs.core.vals.call(null,inst_13615);var inst_13617 = cljs.core.seq.call(null,inst_13616);var inst_13618 = inst_13617;var inst_13619 = null;var inst_13620 = 0;var inst_13621 = 0;var state_13679__$1 = (function (){var statearr_13685 = state_13679;(statearr_13685[8] = inst_13619);
(statearr_13685[9] = inst_13618);
(statearr_13685[10] = inst_13621);
(statearr_13685[11] = inst_13620);
return statearr_13685;
})();var statearr_13686_13731 = state_13679__$1;(statearr_13686_13731[2] = null);
(statearr_13686_13731[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 6))
{var inst_13608 = (state_13679[7]);var inst_13656 = (state_13679[12]);var inst_13658 = (state_13679[13]);var inst_13656__$1 = topic_fn.call(null,inst_13608);var inst_13657 = cljs.core.deref.call(null,mults);var inst_13658__$1 = cljs.core.get.call(null,inst_13657,inst_13656__$1);var state_13679__$1 = (function (){var statearr_13687 = state_13679;(statearr_13687[12] = inst_13656__$1);
(statearr_13687[13] = inst_13658__$1);
return statearr_13687;
})();if(cljs.core.truth_(inst_13658__$1))
{var statearr_13688_13732 = state_13679__$1;(statearr_13688_13732[1] = 19);
} else
{var statearr_13689_13733 = state_13679__$1;(statearr_13689_13733[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 7))
{var inst_13675 = (state_13679[2]);var state_13679__$1 = state_13679;var statearr_13690_13734 = state_13679__$1;(statearr_13690_13734[2] = inst_13675);
(statearr_13690_13734[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 8))
{var inst_13621 = (state_13679[10]);var inst_13620 = (state_13679[11]);var inst_13623 = (inst_13621 < inst_13620);var inst_13624 = inst_13623;var state_13679__$1 = state_13679;if(cljs.core.truth_(inst_13624))
{var statearr_13694_13735 = state_13679__$1;(statearr_13694_13735[1] = 10);
} else
{var statearr_13695_13736 = state_13679__$1;(statearr_13695_13736[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 9))
{var inst_13654 = (state_13679[2]);var state_13679__$1 = state_13679;var statearr_13696_13737 = state_13679__$1;(statearr_13696_13737[2] = inst_13654);
(statearr_13696_13737[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 10))
{var inst_13619 = (state_13679[8]);var inst_13618 = (state_13679[9]);var inst_13621 = (state_13679[10]);var inst_13620 = (state_13679[11]);var inst_13626 = cljs.core._nth.call(null,inst_13619,inst_13621);var inst_13627 = cljs.core.async.muxch_STAR_.call(null,inst_13626);var inst_13628 = cljs.core.async.close_BANG_.call(null,inst_13627);var inst_13629 = (inst_13621 + 1);var tmp13691 = inst_13619;var tmp13692 = inst_13618;var tmp13693 = inst_13620;var inst_13618__$1 = tmp13692;var inst_13619__$1 = tmp13691;var inst_13620__$1 = tmp13693;var inst_13621__$1 = inst_13629;var state_13679__$1 = (function (){var statearr_13697 = state_13679;(statearr_13697[8] = inst_13619__$1);
(statearr_13697[9] = inst_13618__$1);
(statearr_13697[14] = inst_13628);
(statearr_13697[10] = inst_13621__$1);
(statearr_13697[11] = inst_13620__$1);
return statearr_13697;
})();var statearr_13698_13738 = state_13679__$1;(statearr_13698_13738[2] = null);
(statearr_13698_13738[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 11))
{var inst_13618 = (state_13679[9]);var inst_13632 = (state_13679[15]);var inst_13632__$1 = cljs.core.seq.call(null,inst_13618);var state_13679__$1 = (function (){var statearr_13699 = state_13679;(statearr_13699[15] = inst_13632__$1);
return statearr_13699;
})();if(inst_13632__$1)
{var statearr_13700_13739 = state_13679__$1;(statearr_13700_13739[1] = 13);
} else
{var statearr_13701_13740 = state_13679__$1;(statearr_13701_13740[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 12))
{var inst_13652 = (state_13679[2]);var state_13679__$1 = state_13679;var statearr_13702_13741 = state_13679__$1;(statearr_13702_13741[2] = inst_13652);
(statearr_13702_13741[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 13))
{var inst_13632 = (state_13679[15]);var inst_13634 = cljs.core.chunked_seq_QMARK_.call(null,inst_13632);var state_13679__$1 = state_13679;if(inst_13634)
{var statearr_13703_13742 = state_13679__$1;(statearr_13703_13742[1] = 16);
} else
{var statearr_13704_13743 = state_13679__$1;(statearr_13704_13743[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 14))
{var state_13679__$1 = state_13679;var statearr_13705_13744 = state_13679__$1;(statearr_13705_13744[2] = null);
(statearr_13705_13744[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 15))
{var inst_13650 = (state_13679[2]);var state_13679__$1 = state_13679;var statearr_13706_13745 = state_13679__$1;(statearr_13706_13745[2] = inst_13650);
(statearr_13706_13745[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 16))
{var inst_13632 = (state_13679[15]);var inst_13636 = cljs.core.chunk_first.call(null,inst_13632);var inst_13637 = cljs.core.chunk_rest.call(null,inst_13632);var inst_13638 = cljs.core.count.call(null,inst_13636);var inst_13618 = inst_13637;var inst_13619 = inst_13636;var inst_13620 = inst_13638;var inst_13621 = 0;var state_13679__$1 = (function (){var statearr_13707 = state_13679;(statearr_13707[8] = inst_13619);
(statearr_13707[9] = inst_13618);
(statearr_13707[10] = inst_13621);
(statearr_13707[11] = inst_13620);
return statearr_13707;
})();var statearr_13708_13746 = state_13679__$1;(statearr_13708_13746[2] = null);
(statearr_13708_13746[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 17))
{var inst_13632 = (state_13679[15]);var inst_13641 = cljs.core.first.call(null,inst_13632);var inst_13642 = cljs.core.async.muxch_STAR_.call(null,inst_13641);var inst_13643 = cljs.core.async.close_BANG_.call(null,inst_13642);var inst_13644 = cljs.core.next.call(null,inst_13632);var inst_13618 = inst_13644;var inst_13619 = null;var inst_13620 = 0;var inst_13621 = 0;var state_13679__$1 = (function (){var statearr_13709 = state_13679;(statearr_13709[16] = inst_13643);
(statearr_13709[8] = inst_13619);
(statearr_13709[9] = inst_13618);
(statearr_13709[10] = inst_13621);
(statearr_13709[11] = inst_13620);
return statearr_13709;
})();var statearr_13710_13747 = state_13679__$1;(statearr_13710_13747[2] = null);
(statearr_13710_13747[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 18))
{var inst_13647 = (state_13679[2]);var state_13679__$1 = state_13679;var statearr_13711_13748 = state_13679__$1;(statearr_13711_13748[2] = inst_13647);
(statearr_13711_13748[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 19))
{var state_13679__$1 = state_13679;var statearr_13712_13749 = state_13679__$1;(statearr_13712_13749[2] = null);
(statearr_13712_13749[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 20))
{var state_13679__$1 = state_13679;var statearr_13713_13750 = state_13679__$1;(statearr_13713_13750[2] = null);
(statearr_13713_13750[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 21))
{var inst_13672 = (state_13679[2]);var state_13679__$1 = (function (){var statearr_13714 = state_13679;(statearr_13714[17] = inst_13672);
return statearr_13714;
})();var statearr_13715_13751 = state_13679__$1;(statearr_13715_13751[2] = null);
(statearr_13715_13751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 22))
{var inst_13669 = (state_13679[2]);var state_13679__$1 = state_13679;var statearr_13716_13752 = state_13679__$1;(statearr_13716_13752[2] = inst_13669);
(statearr_13716_13752[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 23))
{var inst_13656 = (state_13679[12]);var inst_13660 = (state_13679[2]);var inst_13661 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13656);var state_13679__$1 = (function (){var statearr_13717 = state_13679;(statearr_13717[18] = inst_13660);
return statearr_13717;
})();var statearr_13718_13753 = state_13679__$1;(statearr_13718_13753[2] = inst_13661);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13679__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13680 === 24))
{var inst_13608 = (state_13679[7]);var inst_13658 = (state_13679[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13679,23,Object,null,22);var inst_13665 = cljs.core.async.muxch_STAR_.call(null,inst_13658);var state_13679__$1 = state_13679;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13679__$1,25,inst_13665,inst_13608);
} else
{if((state_val_13680 === 25))
{var inst_13667 = (state_13679[2]);var state_13679__$1 = state_13679;var statearr_13719_13754 = state_13679__$1;(statearr_13719_13754[2] = inst_13667);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13679__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13723[0] = state_machine__5507__auto__);
(statearr_13723[1] = 1);
return statearr_13723;
});
var state_machine__5507__auto____1 = (function (state_13679){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13679);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13724){if((e13724 instanceof Object))
{var ex__5510__auto__ = e13724;var statearr_13725_13755 = state_13679;(statearr_13725_13755[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13679);
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
var G__13756 = state_13679;
state_13679 = G__13756;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13679){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13679);
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13893 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13863){var state_val_13864 = (state_13863[1]);if((state_val_13864 === 1))
{var state_13863__$1 = state_13863;var statearr_13865_13894 = state_13863__$1;(statearr_13865_13894[2] = null);
(statearr_13865_13894[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 2))
{var inst_13826 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13827 = 0;var state_13863__$1 = (function (){var statearr_13866 = state_13863;(statearr_13866[7] = inst_13826);
(statearr_13866[8] = inst_13827);
return statearr_13866;
})();var statearr_13867_13895 = state_13863__$1;(statearr_13867_13895[2] = null);
(statearr_13867_13895[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 3))
{var inst_13861 = (state_13863[2]);var state_13863__$1 = state_13863;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13863__$1,inst_13861);
} else
{if((state_val_13864 === 4))
{var inst_13827 = (state_13863[8]);var inst_13829 = (inst_13827 < cnt);var state_13863__$1 = state_13863;if(cljs.core.truth_(inst_13829))
{var statearr_13868_13896 = state_13863__$1;(statearr_13868_13896[1] = 6);
} else
{var statearr_13869_13897 = state_13863__$1;(statearr_13869_13897[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 5))
{var inst_13847 = (state_13863[2]);var state_13863__$1 = (function (){var statearr_13870 = state_13863;(statearr_13870[9] = inst_13847);
return statearr_13870;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13863__$1,12,dchan);
} else
{if((state_val_13864 === 6))
{var state_13863__$1 = state_13863;var statearr_13871_13898 = state_13863__$1;(statearr_13871_13898[2] = null);
(statearr_13871_13898[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 7))
{var state_13863__$1 = state_13863;var statearr_13872_13899 = state_13863__$1;(statearr_13872_13899[2] = null);
(statearr_13872_13899[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 8))
{var inst_13845 = (state_13863[2]);var state_13863__$1 = state_13863;var statearr_13873_13900 = state_13863__$1;(statearr_13873_13900[2] = inst_13845);
(statearr_13873_13900[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 9))
{var inst_13827 = (state_13863[8]);var inst_13840 = (state_13863[2]);var inst_13841 = (inst_13827 + 1);var inst_13827__$1 = inst_13841;var state_13863__$1 = (function (){var statearr_13874 = state_13863;(statearr_13874[10] = inst_13840);
(statearr_13874[8] = inst_13827__$1);
return statearr_13874;
})();var statearr_13875_13901 = state_13863__$1;(statearr_13875_13901[2] = null);
(statearr_13875_13901[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 10))
{var inst_13831 = (state_13863[2]);var inst_13832 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13863__$1 = (function (){var statearr_13876 = state_13863;(statearr_13876[11] = inst_13831);
return statearr_13876;
})();var statearr_13877_13902 = state_13863__$1;(statearr_13877_13902[2] = inst_13832);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13863__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 11))
{var inst_13827 = (state_13863[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13863,10,Object,null,9);var inst_13836 = chs__$1.call(null,inst_13827);var inst_13837 = done.call(null,inst_13827);var inst_13838 = cljs.core.async.take_BANG_.call(null,inst_13836,inst_13837);var state_13863__$1 = state_13863;var statearr_13878_13903 = state_13863__$1;(statearr_13878_13903[2] = inst_13838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13863__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 12))
{var inst_13849 = (state_13863[12]);var inst_13849__$1 = (state_13863[2]);var inst_13850 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13849__$1);var state_13863__$1 = (function (){var statearr_13879 = state_13863;(statearr_13879[12] = inst_13849__$1);
return statearr_13879;
})();if(cljs.core.truth_(inst_13850))
{var statearr_13880_13904 = state_13863__$1;(statearr_13880_13904[1] = 13);
} else
{var statearr_13881_13905 = state_13863__$1;(statearr_13881_13905[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 13))
{var inst_13852 = cljs.core.async.close_BANG_.call(null,out);var state_13863__$1 = state_13863;var statearr_13882_13906 = state_13863__$1;(statearr_13882_13906[2] = inst_13852);
(statearr_13882_13906[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 14))
{var inst_13849 = (state_13863[12]);var inst_13854 = cljs.core.apply.call(null,f,inst_13849);var state_13863__$1 = state_13863;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13863__$1,16,out,inst_13854);
} else
{if((state_val_13864 === 15))
{var inst_13859 = (state_13863[2]);var state_13863__$1 = state_13863;var statearr_13883_13907 = state_13863__$1;(statearr_13883_13907[2] = inst_13859);
(statearr_13883_13907[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13864 === 16))
{var inst_13856 = (state_13863[2]);var state_13863__$1 = (function (){var statearr_13884 = state_13863;(statearr_13884[13] = inst_13856);
return statearr_13884;
})();var statearr_13885_13908 = state_13863__$1;(statearr_13885_13908[2] = null);
(statearr_13885_13908[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13889 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13889[0] = state_machine__5507__auto__);
(statearr_13889[1] = 1);
return statearr_13889;
});
var state_machine__5507__auto____1 = (function (state_13863){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13863);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13890){if((e13890 instanceof Object))
{var ex__5510__auto__ = e13890;var statearr_13891_13909 = state_13863;(statearr_13891_13909[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13863);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13890;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13910 = state_13863;
state_13863 = G__13910;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13863){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13863);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13892 = f__5522__auto__.call(null);(statearr_13892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13893);
return statearr_13892;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14018 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13994){var state_val_13995 = (state_13994[1]);if((state_val_13995 === 1))
{var inst_13965 = cljs.core.vec.call(null,chs);var inst_13966 = inst_13965;var state_13994__$1 = (function (){var statearr_13996 = state_13994;(statearr_13996[7] = inst_13966);
return statearr_13996;
})();var statearr_13997_14019 = state_13994__$1;(statearr_13997_14019[2] = null);
(statearr_13997_14019[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13995 === 2))
{var inst_13966 = (state_13994[7]);var inst_13968 = cljs.core.count.call(null,inst_13966);var inst_13969 = (inst_13968 > 0);var state_13994__$1 = state_13994;if(cljs.core.truth_(inst_13969))
{var statearr_13998_14020 = state_13994__$1;(statearr_13998_14020[1] = 4);
} else
{var statearr_13999_14021 = state_13994__$1;(statearr_13999_14021[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13995 === 3))
{var inst_13992 = (state_13994[2]);var state_13994__$1 = state_13994;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13994__$1,inst_13992);
} else
{if((state_val_13995 === 4))
{var inst_13966 = (state_13994[7]);var state_13994__$1 = state_13994;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13994__$1,7,inst_13966);
} else
{if((state_val_13995 === 5))
{var inst_13988 = cljs.core.async.close_BANG_.call(null,out);var state_13994__$1 = state_13994;var statearr_14000_14022 = state_13994__$1;(statearr_14000_14022[2] = inst_13988);
(statearr_14000_14022[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13995 === 6))
{var inst_13990 = (state_13994[2]);var state_13994__$1 = state_13994;var statearr_14001_14023 = state_13994__$1;(statearr_14001_14023[2] = inst_13990);
(statearr_14001_14023[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13995 === 7))
{var inst_13974 = (state_13994[8]);var inst_13973 = (state_13994[9]);var inst_13973__$1 = (state_13994[2]);var inst_13974__$1 = cljs.core.nth.call(null,inst_13973__$1,0,null);var inst_13975 = cljs.core.nth.call(null,inst_13973__$1,1,null);var inst_13976 = (inst_13974__$1 == null);var state_13994__$1 = (function (){var statearr_14002 = state_13994;(statearr_14002[10] = inst_13975);
(statearr_14002[8] = inst_13974__$1);
(statearr_14002[9] = inst_13973__$1);
return statearr_14002;
})();if(cljs.core.truth_(inst_13976))
{var statearr_14003_14024 = state_13994__$1;(statearr_14003_14024[1] = 8);
} else
{var statearr_14004_14025 = state_13994__$1;(statearr_14004_14025[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13995 === 8))
{var inst_13975 = (state_13994[10]);var inst_13974 = (state_13994[8]);var inst_13973 = (state_13994[9]);var inst_13966 = (state_13994[7]);var inst_13978 = (function (){var c = inst_13975;var v = inst_13974;var vec__13971 = inst_13973;var cs = inst_13966;return ((function (c,v,vec__13971,cs,inst_13975,inst_13974,inst_13973,inst_13966,state_val_13995){
return (function (p1__13911_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13911_SHARP_);
});
;})(c,v,vec__13971,cs,inst_13975,inst_13974,inst_13973,inst_13966,state_val_13995))
})();var inst_13979 = cljs.core.filterv.call(null,inst_13978,inst_13966);var inst_13966__$1 = inst_13979;var state_13994__$1 = (function (){var statearr_14005 = state_13994;(statearr_14005[7] = inst_13966__$1);
return statearr_14005;
})();var statearr_14006_14026 = state_13994__$1;(statearr_14006_14026[2] = null);
(statearr_14006_14026[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13995 === 9))
{var inst_13974 = (state_13994[8]);var state_13994__$1 = state_13994;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13994__$1,11,out,inst_13974);
} else
{if((state_val_13995 === 10))
{var inst_13986 = (state_13994[2]);var state_13994__$1 = state_13994;var statearr_14008_14027 = state_13994__$1;(statearr_14008_14027[2] = inst_13986);
(statearr_14008_14027[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13995 === 11))
{var inst_13966 = (state_13994[7]);var inst_13983 = (state_13994[2]);var tmp14007 = inst_13966;var inst_13966__$1 = tmp14007;var state_13994__$1 = (function (){var statearr_14009 = state_13994;(statearr_14009[11] = inst_13983);
(statearr_14009[7] = inst_13966__$1);
return statearr_14009;
})();var statearr_14010_14028 = state_13994__$1;(statearr_14010_14028[2] = null);
(statearr_14010_14028[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14014 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14014[0] = state_machine__5507__auto__);
(statearr_14014[1] = 1);
return statearr_14014;
});
var state_machine__5507__auto____1 = (function (state_13994){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13994);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14015){if((e14015 instanceof Object))
{var ex__5510__auto__ = e14015;var statearr_14016_14029 = state_13994;(statearr_14016_14029[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13994);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14015;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14030 = state_13994;
state_13994 = G__14030;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13994){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14017 = f__5522__auto__.call(null);(statearr_14017[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14018);
return statearr_14017;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14123 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14100){var state_val_14101 = (state_14100[1]);if((state_val_14101 === 1))
{var inst_14077 = 0;var state_14100__$1 = (function (){var statearr_14102 = state_14100;(statearr_14102[7] = inst_14077);
return statearr_14102;
})();var statearr_14103_14124 = state_14100__$1;(statearr_14103_14124[2] = null);
(statearr_14103_14124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14101 === 2))
{var inst_14077 = (state_14100[7]);var inst_14079 = (inst_14077 < n);var state_14100__$1 = state_14100;if(cljs.core.truth_(inst_14079))
{var statearr_14104_14125 = state_14100__$1;(statearr_14104_14125[1] = 4);
} else
{var statearr_14105_14126 = state_14100__$1;(statearr_14105_14126[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14101 === 3))
{var inst_14097 = (state_14100[2]);var inst_14098 = cljs.core.async.close_BANG_.call(null,out);var state_14100__$1 = (function (){var statearr_14106 = state_14100;(statearr_14106[8] = inst_14097);
return statearr_14106;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14100__$1,inst_14098);
} else
{if((state_val_14101 === 4))
{var state_14100__$1 = state_14100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14100__$1,7,ch);
} else
{if((state_val_14101 === 5))
{var state_14100__$1 = state_14100;var statearr_14107_14127 = state_14100__$1;(statearr_14107_14127[2] = null);
(statearr_14107_14127[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14101 === 6))
{var inst_14095 = (state_14100[2]);var state_14100__$1 = state_14100;var statearr_14108_14128 = state_14100__$1;(statearr_14108_14128[2] = inst_14095);
(statearr_14108_14128[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14101 === 7))
{var inst_14082 = (state_14100[9]);var inst_14082__$1 = (state_14100[2]);var inst_14083 = (inst_14082__$1 == null);var inst_14084 = cljs.core.not.call(null,inst_14083);var state_14100__$1 = (function (){var statearr_14109 = state_14100;(statearr_14109[9] = inst_14082__$1);
return statearr_14109;
})();if(inst_14084)
{var statearr_14110_14129 = state_14100__$1;(statearr_14110_14129[1] = 8);
} else
{var statearr_14111_14130 = state_14100__$1;(statearr_14111_14130[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14101 === 8))
{var inst_14082 = (state_14100[9]);var state_14100__$1 = state_14100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14100__$1,11,out,inst_14082);
} else
{if((state_val_14101 === 9))
{var state_14100__$1 = state_14100;var statearr_14112_14131 = state_14100__$1;(statearr_14112_14131[2] = null);
(statearr_14112_14131[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14101 === 10))
{var inst_14092 = (state_14100[2]);var state_14100__$1 = state_14100;var statearr_14113_14132 = state_14100__$1;(statearr_14113_14132[2] = inst_14092);
(statearr_14113_14132[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14101 === 11))
{var inst_14077 = (state_14100[7]);var inst_14087 = (state_14100[2]);var inst_14088 = (inst_14077 + 1);var inst_14077__$1 = inst_14088;var state_14100__$1 = (function (){var statearr_14114 = state_14100;(statearr_14114[10] = inst_14087);
(statearr_14114[7] = inst_14077__$1);
return statearr_14114;
})();var statearr_14115_14133 = state_14100__$1;(statearr_14115_14133[2] = null);
(statearr_14115_14133[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14119 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14119[0] = state_machine__5507__auto__);
(statearr_14119[1] = 1);
return statearr_14119;
});
var state_machine__5507__auto____1 = (function (state_14100){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14120){if((e14120 instanceof Object))
{var ex__5510__auto__ = e14120;var statearr_14121_14134 = state_14100;(statearr_14121_14134[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14100);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14120;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14135 = state_14100;
state_14100 = G__14135;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14100){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14122 = f__5522__auto__.call(null);(statearr_14122[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14123);
return statearr_14122;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14207){var state_val_14208 = (state_14207[1]);if((state_val_14208 === 1))
{var inst_14184 = null;var state_14207__$1 = (function (){var statearr_14209 = state_14207;(statearr_14209[7] = inst_14184);
return statearr_14209;
})();var statearr_14210_14233 = state_14207__$1;(statearr_14210_14233[2] = null);
(statearr_14210_14233[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14208 === 2))
{var state_14207__$1 = state_14207;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14207__$1,4,ch);
} else
{if((state_val_14208 === 3))
{var inst_14204 = (state_14207[2]);var inst_14205 = cljs.core.async.close_BANG_.call(null,out);var state_14207__$1 = (function (){var statearr_14211 = state_14207;(statearr_14211[8] = inst_14204);
return statearr_14211;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14207__$1,inst_14205);
} else
{if((state_val_14208 === 4))
{var inst_14187 = (state_14207[9]);var inst_14187__$1 = (state_14207[2]);var inst_14188 = (inst_14187__$1 == null);var inst_14189 = cljs.core.not.call(null,inst_14188);var state_14207__$1 = (function (){var statearr_14212 = state_14207;(statearr_14212[9] = inst_14187__$1);
return statearr_14212;
})();if(inst_14189)
{var statearr_14213_14234 = state_14207__$1;(statearr_14213_14234[1] = 5);
} else
{var statearr_14214_14235 = state_14207__$1;(statearr_14214_14235[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14208 === 5))
{var inst_14187 = (state_14207[9]);var inst_14184 = (state_14207[7]);var inst_14191 = cljs.core._EQ_.call(null,inst_14187,inst_14184);var state_14207__$1 = state_14207;if(inst_14191)
{var statearr_14215_14236 = state_14207__$1;(statearr_14215_14236[1] = 8);
} else
{var statearr_14216_14237 = state_14207__$1;(statearr_14216_14237[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14208 === 6))
{var state_14207__$1 = state_14207;var statearr_14218_14238 = state_14207__$1;(statearr_14218_14238[2] = null);
(statearr_14218_14238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14208 === 7))
{var inst_14202 = (state_14207[2]);var state_14207__$1 = state_14207;var statearr_14219_14239 = state_14207__$1;(statearr_14219_14239[2] = inst_14202);
(statearr_14219_14239[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14208 === 8))
{var inst_14184 = (state_14207[7]);var tmp14217 = inst_14184;var inst_14184__$1 = tmp14217;var state_14207__$1 = (function (){var statearr_14220 = state_14207;(statearr_14220[7] = inst_14184__$1);
return statearr_14220;
})();var statearr_14221_14240 = state_14207__$1;(statearr_14221_14240[2] = null);
(statearr_14221_14240[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14208 === 9))
{var inst_14187 = (state_14207[9]);var state_14207__$1 = state_14207;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14207__$1,11,out,inst_14187);
} else
{if((state_val_14208 === 10))
{var inst_14199 = (state_14207[2]);var state_14207__$1 = state_14207;var statearr_14222_14241 = state_14207__$1;(statearr_14222_14241[2] = inst_14199);
(statearr_14222_14241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14208 === 11))
{var inst_14187 = (state_14207[9]);var inst_14196 = (state_14207[2]);var inst_14184 = inst_14187;var state_14207__$1 = (function (){var statearr_14223 = state_14207;(statearr_14223[7] = inst_14184);
(statearr_14223[10] = inst_14196);
return statearr_14223;
})();var statearr_14224_14242 = state_14207__$1;(statearr_14224_14242[2] = null);
(statearr_14224_14242[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14228 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14228[0] = state_machine__5507__auto__);
(statearr_14228[1] = 1);
return statearr_14228;
});
var state_machine__5507__auto____1 = (function (state_14207){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14207);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14229){if((e14229 instanceof Object))
{var ex__5510__auto__ = e14229;var statearr_14230_14243 = state_14207;(statearr_14230_14243[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14207);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14244 = state_14207;
state_14207 = G__14244;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14207){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14207);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14231 = f__5522__auto__.call(null);(statearr_14231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14232);
return statearr_14231;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14379 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14349){var state_val_14350 = (state_14349[1]);if((state_val_14350 === 1))
{var inst_14312 = (new Array(n));var inst_14313 = inst_14312;var inst_14314 = 0;var state_14349__$1 = (function (){var statearr_14351 = state_14349;(statearr_14351[7] = inst_14314);
(statearr_14351[8] = inst_14313);
return statearr_14351;
})();var statearr_14352_14380 = state_14349__$1;(statearr_14352_14380[2] = null);
(statearr_14352_14380[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 2))
{var state_14349__$1 = state_14349;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14349__$1,4,ch);
} else
{if((state_val_14350 === 3))
{var inst_14347 = (state_14349[2]);var state_14349__$1 = state_14349;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14349__$1,inst_14347);
} else
{if((state_val_14350 === 4))
{var inst_14317 = (state_14349[9]);var inst_14317__$1 = (state_14349[2]);var inst_14318 = (inst_14317__$1 == null);var inst_14319 = cljs.core.not.call(null,inst_14318);var state_14349__$1 = (function (){var statearr_14353 = state_14349;(statearr_14353[9] = inst_14317__$1);
return statearr_14353;
})();if(inst_14319)
{var statearr_14354_14381 = state_14349__$1;(statearr_14354_14381[1] = 5);
} else
{var statearr_14355_14382 = state_14349__$1;(statearr_14355_14382[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 5))
{var inst_14322 = (state_14349[10]);var inst_14317 = (state_14349[9]);var inst_14314 = (state_14349[7]);var inst_14313 = (state_14349[8]);var inst_14321 = (inst_14313[inst_14314] = inst_14317);var inst_14322__$1 = (inst_14314 + 1);var inst_14323 = (inst_14322__$1 < n);var state_14349__$1 = (function (){var statearr_14356 = state_14349;(statearr_14356[11] = inst_14321);
(statearr_14356[10] = inst_14322__$1);
return statearr_14356;
})();if(cljs.core.truth_(inst_14323))
{var statearr_14357_14383 = state_14349__$1;(statearr_14357_14383[1] = 8);
} else
{var statearr_14358_14384 = state_14349__$1;(statearr_14358_14384[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 6))
{var inst_14314 = (state_14349[7]);var inst_14335 = (inst_14314 > 0);var state_14349__$1 = state_14349;if(cljs.core.truth_(inst_14335))
{var statearr_14360_14385 = state_14349__$1;(statearr_14360_14385[1] = 12);
} else
{var statearr_14361_14386 = state_14349__$1;(statearr_14361_14386[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 7))
{var inst_14345 = (state_14349[2]);var state_14349__$1 = state_14349;var statearr_14362_14387 = state_14349__$1;(statearr_14362_14387[2] = inst_14345);
(statearr_14362_14387[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 8))
{var inst_14322 = (state_14349[10]);var inst_14313 = (state_14349[8]);var tmp14359 = inst_14313;var inst_14313__$1 = tmp14359;var inst_14314 = inst_14322;var state_14349__$1 = (function (){var statearr_14363 = state_14349;(statearr_14363[7] = inst_14314);
(statearr_14363[8] = inst_14313__$1);
return statearr_14363;
})();var statearr_14364_14388 = state_14349__$1;(statearr_14364_14388[2] = null);
(statearr_14364_14388[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 9))
{var inst_14313 = (state_14349[8]);var inst_14327 = cljs.core.vec.call(null,inst_14313);var state_14349__$1 = state_14349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14349__$1,11,out,inst_14327);
} else
{if((state_val_14350 === 10))
{var inst_14333 = (state_14349[2]);var state_14349__$1 = state_14349;var statearr_14365_14389 = state_14349__$1;(statearr_14365_14389[2] = inst_14333);
(statearr_14365_14389[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 11))
{var inst_14329 = (state_14349[2]);var inst_14330 = (new Array(n));var inst_14313 = inst_14330;var inst_14314 = 0;var state_14349__$1 = (function (){var statearr_14366 = state_14349;(statearr_14366[12] = inst_14329);
(statearr_14366[7] = inst_14314);
(statearr_14366[8] = inst_14313);
return statearr_14366;
})();var statearr_14367_14390 = state_14349__$1;(statearr_14367_14390[2] = null);
(statearr_14367_14390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 12))
{var inst_14313 = (state_14349[8]);var inst_14337 = cljs.core.vec.call(null,inst_14313);var state_14349__$1 = state_14349;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14349__$1,15,out,inst_14337);
} else
{if((state_val_14350 === 13))
{var state_14349__$1 = state_14349;var statearr_14368_14391 = state_14349__$1;(statearr_14368_14391[2] = null);
(statearr_14368_14391[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 14))
{var inst_14342 = (state_14349[2]);var inst_14343 = cljs.core.async.close_BANG_.call(null,out);var state_14349__$1 = (function (){var statearr_14369 = state_14349;(statearr_14369[13] = inst_14342);
return statearr_14369;
})();var statearr_14370_14392 = state_14349__$1;(statearr_14370_14392[2] = inst_14343);
(statearr_14370_14392[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14350 === 15))
{var inst_14339 = (state_14349[2]);var state_14349__$1 = state_14349;var statearr_14371_14393 = state_14349__$1;(statearr_14371_14393[2] = inst_14339);
(statearr_14371_14393[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14375 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14375[0] = state_machine__5507__auto__);
(statearr_14375[1] = 1);
return statearr_14375;
});
var state_machine__5507__auto____1 = (function (state_14349){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14349);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14376){if((e14376 instanceof Object))
{var ex__5510__auto__ = e14376;var statearr_14377_14394 = state_14349;(statearr_14377_14394[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14349);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14376;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14395 = state_14349;
state_14349 = G__14395;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14349){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14349);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14378 = f__5522__auto__.call(null);(statearr_14378[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14379);
return statearr_14378;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14508){var state_val_14509 = (state_14508[1]);if((state_val_14509 === 1))
{var inst_14467 = [];var inst_14468 = inst_14467;var inst_14469 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14508__$1 = (function (){var statearr_14510 = state_14508;(statearr_14510[7] = inst_14469);
(statearr_14510[8] = inst_14468);
return statearr_14510;
})();var statearr_14511_14539 = state_14508__$1;(statearr_14511_14539[2] = null);
(statearr_14511_14539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 2))
{var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14508__$1,4,ch);
} else
{if((state_val_14509 === 3))
{var inst_14506 = (state_14508[2]);var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14508__$1,inst_14506);
} else
{if((state_val_14509 === 4))
{var inst_14472 = (state_14508[9]);var inst_14472__$1 = (state_14508[2]);var inst_14473 = (inst_14472__$1 == null);var inst_14474 = cljs.core.not.call(null,inst_14473);var state_14508__$1 = (function (){var statearr_14512 = state_14508;(statearr_14512[9] = inst_14472__$1);
return statearr_14512;
})();if(inst_14474)
{var statearr_14513_14540 = state_14508__$1;(statearr_14513_14540[1] = 5);
} else
{var statearr_14514_14541 = state_14508__$1;(statearr_14514_14541[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 5))
{var inst_14476 = (state_14508[10]);var inst_14469 = (state_14508[7]);var inst_14472 = (state_14508[9]);var inst_14476__$1 = f.call(null,inst_14472);var inst_14477 = cljs.core._EQ_.call(null,inst_14476__$1,inst_14469);var inst_14478 = cljs.core.keyword_identical_QMARK_.call(null,inst_14469,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14479 = (inst_14477) || (inst_14478);var state_14508__$1 = (function (){var statearr_14515 = state_14508;(statearr_14515[10] = inst_14476__$1);
return statearr_14515;
})();if(cljs.core.truth_(inst_14479))
{var statearr_14516_14542 = state_14508__$1;(statearr_14516_14542[1] = 8);
} else
{var statearr_14517_14543 = state_14508__$1;(statearr_14517_14543[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 6))
{var inst_14468 = (state_14508[8]);var inst_14493 = inst_14468.length;var inst_14494 = (inst_14493 > 0);var state_14508__$1 = state_14508;if(cljs.core.truth_(inst_14494))
{var statearr_14519_14544 = state_14508__$1;(statearr_14519_14544[1] = 12);
} else
{var statearr_14520_14545 = state_14508__$1;(statearr_14520_14545[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 7))
{var inst_14504 = (state_14508[2]);var state_14508__$1 = state_14508;var statearr_14521_14546 = state_14508__$1;(statearr_14521_14546[2] = inst_14504);
(statearr_14521_14546[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 8))
{var inst_14476 = (state_14508[10]);var inst_14468 = (state_14508[8]);var inst_14472 = (state_14508[9]);var inst_14481 = inst_14468.push(inst_14472);var tmp14518 = inst_14468;var inst_14468__$1 = tmp14518;var inst_14469 = inst_14476;var state_14508__$1 = (function (){var statearr_14522 = state_14508;(statearr_14522[11] = inst_14481);
(statearr_14522[7] = inst_14469);
(statearr_14522[8] = inst_14468__$1);
return statearr_14522;
})();var statearr_14523_14547 = state_14508__$1;(statearr_14523_14547[2] = null);
(statearr_14523_14547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 9))
{var inst_14468 = (state_14508[8]);var inst_14484 = cljs.core.vec.call(null,inst_14468);var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14508__$1,11,out,inst_14484);
} else
{if((state_val_14509 === 10))
{var inst_14491 = (state_14508[2]);var state_14508__$1 = state_14508;var statearr_14524_14548 = state_14508__$1;(statearr_14524_14548[2] = inst_14491);
(statearr_14524_14548[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 11))
{var inst_14476 = (state_14508[10]);var inst_14472 = (state_14508[9]);var inst_14486 = (state_14508[2]);var inst_14487 = [];var inst_14488 = inst_14487.push(inst_14472);var inst_14468 = inst_14487;var inst_14469 = inst_14476;var state_14508__$1 = (function (){var statearr_14525 = state_14508;(statearr_14525[12] = inst_14486);
(statearr_14525[13] = inst_14488);
(statearr_14525[7] = inst_14469);
(statearr_14525[8] = inst_14468);
return statearr_14525;
})();var statearr_14526_14549 = state_14508__$1;(statearr_14526_14549[2] = null);
(statearr_14526_14549[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 12))
{var inst_14468 = (state_14508[8]);var inst_14496 = cljs.core.vec.call(null,inst_14468);var state_14508__$1 = state_14508;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14508__$1,15,out,inst_14496);
} else
{if((state_val_14509 === 13))
{var state_14508__$1 = state_14508;var statearr_14527_14550 = state_14508__$1;(statearr_14527_14550[2] = null);
(statearr_14527_14550[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 14))
{var inst_14501 = (state_14508[2]);var inst_14502 = cljs.core.async.close_BANG_.call(null,out);var state_14508__$1 = (function (){var statearr_14528 = state_14508;(statearr_14528[14] = inst_14501);
return statearr_14528;
})();var statearr_14529_14551 = state_14508__$1;(statearr_14529_14551[2] = inst_14502);
(statearr_14529_14551[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14509 === 15))
{var inst_14498 = (state_14508[2]);var state_14508__$1 = state_14508;var statearr_14530_14552 = state_14508__$1;(statearr_14530_14552[2] = inst_14498);
(statearr_14530_14552[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14534 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14534[0] = state_machine__5507__auto__);
(statearr_14534[1] = 1);
return statearr_14534;
});
var state_machine__5507__auto____1 = (function (state_14508){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14508);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14535){if((e14535 instanceof Object))
{var ex__5510__auto__ = e14535;var statearr_14536_14553 = state_14508;(statearr_14536_14553[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14508);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14554 = state_14508;
state_14508 = G__14554;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14508){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14508);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14537 = f__5522__auto__.call(null);(statearr_14537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14538);
return statearr_14537;
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