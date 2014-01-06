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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9999 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9999 = (function (f,fn_handler,meta10000){
this.f = f;
this.fn_handler = fn_handler;
this.meta10000 = meta10000;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9999.cljs$lang$type = true;
cljs.core.async.t9999.cljs$lang$ctorStr = "cljs.core.async/t9999";
cljs.core.async.t9999.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t9999");
});
cljs.core.async.t9999.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9999.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9999.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9999.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10001){var self__ = this;
var _10001__$1 = this;return self__.meta10000;
});
cljs.core.async.t9999.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10001,meta10000__$1){var self__ = this;
var _10001__$1 = this;return (new cljs.core.async.t9999(self__.f,self__.fn_handler,meta10000__$1));
});
cljs.core.async.__GT_t9999 = (function __GT_t9999(f__$1,fn_handler__$1,meta10000){return (new cljs.core.async.t9999(f__$1,fn_handler__$1,meta10000));
});
}
return (new cljs.core.async.t9999(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__10003 = buff;if(G__10003)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__10003.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__10003.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10003);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__10003);
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
{var val_10004 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_10004);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_10004);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___10005 = n;var x_10006 = 0;while(true){
if((x_10006 < n__4248__auto___10005))
{(a[x_10006] = 0);
{
var G__10007 = (x_10006 + 1);
x_10006 = G__10007;
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
var G__10008 = (i + 1);
i = G__10008;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t10012 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10012 = (function (flag,alt_flag,meta10013){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta10013 = meta10013;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10012.cljs$lang$type = true;
cljs.core.async.t10012.cljs$lang$ctorStr = "cljs.core.async/t10012";
cljs.core.async.t10012.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10012");
});
cljs.core.async.t10012.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10012.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t10012.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t10012.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10014){var self__ = this;
var _10014__$1 = this;return self__.meta10013;
});
cljs.core.async.t10012.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10014,meta10013__$1){var self__ = this;
var _10014__$1 = this;return (new cljs.core.async.t10012(self__.flag,self__.alt_flag,meta10013__$1));
});
cljs.core.async.__GT_t10012 = (function __GT_t10012(flag__$1,alt_flag__$1,meta10013){return (new cljs.core.async.t10012(flag__$1,alt_flag__$1,meta10013));
});
}
return (new cljs.core.async.t10012(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t10018 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10018 = (function (cb,flag,alt_handler,meta10019){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta10019 = meta10019;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10018.cljs$lang$type = true;
cljs.core.async.t10018.cljs$lang$ctorStr = "cljs.core.async/t10018";
cljs.core.async.t10018.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10018");
});
cljs.core.async.t10018.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10018.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t10018.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t10018.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10020){var self__ = this;
var _10020__$1 = this;return self__.meta10019;
});
cljs.core.async.t10018.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10020,meta10019__$1){var self__ = this;
var _10020__$1 = this;return (new cljs.core.async.t10018(self__.cb,self__.flag,self__.alt_handler,meta10019__$1));
});
cljs.core.async.__GT_t10018 = (function __GT_t10018(cb__$1,flag__$1,alt_handler__$1,meta10019){return (new cljs.core.async.t10018(cb__$1,flag__$1,alt_handler__$1,meta10019));
});
}
return (new cljs.core.async.t10018(cb,flag,alt_handler,null));
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
return (function (p1__10021_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__10021_SHARP_,port], null));
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
var G__10022 = (i + 1);
i = G__10022;
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
var alts_BANG___delegate = function (ports,p__10023){var map__10025 = p__10023;var map__10025__$1 = ((cljs.core.seq_QMARK_.call(null,map__10025))?cljs.core.apply.call(null,cljs.core.hash_map,map__10025):map__10025);var opts = map__10025__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__10023 = null;if (arguments.length > 1) {
  p__10023 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__10023);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__10026){
var ports = cljs.core.first(arglist__10026);
var p__10023 = cljs.core.rest(arglist__10026);
return alts_BANG___delegate(ports,p__10023);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t10034 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10034 = (function (ch,f,map_LT_,meta10035){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10035 = meta10035;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10034.cljs$lang$type = true;
cljs.core.async.t10034.cljs$lang$ctorStr = "cljs.core.async/t10034";
cljs.core.async.t10034.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10034");
});
cljs.core.async.t10034.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10034.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t10034.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10034.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t10037 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10037 = (function (fn1,_,meta10035,ch,f,map_LT_,meta10038){
this.fn1 = fn1;
this._ = _;
this.meta10035 = meta10035;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta10038 = meta10038;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10037.cljs$lang$type = true;
cljs.core.async.t10037.cljs$lang$ctorStr = "cljs.core.async/t10037";
cljs.core.async.t10037.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10037");
});
cljs.core.async.t10037.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t10037.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t10037.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t10037.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__10027_SHARP_){return f1.call(null,(((p1__10027_SHARP_ == null))?null:self__.f.call(null,p1__10027_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t10037.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10039){var self__ = this;
var _10039__$1 = this;return self__.meta10038;
});
cljs.core.async.t10037.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10039,meta10038__$1){var self__ = this;
var _10039__$1 = this;return (new cljs.core.async.t10037(self__.fn1,self__._,self__.meta10035,self__.ch,self__.f,self__.map_LT_,meta10038__$1));
});
cljs.core.async.__GT_t10037 = (function __GT_t10037(fn1__$1,___$2,meta10035__$1,ch__$2,f__$2,map_LT___$2,meta10038){return (new cljs.core.async.t10037(fn1__$1,___$2,meta10035__$1,ch__$2,f__$2,map_LT___$2,meta10038));
});
}
return (new cljs.core.async.t10037(fn1,___$1,self__.meta10035,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t10034.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10034.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10034.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10036){var self__ = this;
var _10036__$1 = this;return self__.meta10035;
});
cljs.core.async.t10034.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10036,meta10035__$1){var self__ = this;
var _10036__$1 = this;return (new cljs.core.async.t10034(self__.ch,self__.f,self__.map_LT_,meta10035__$1));
});
cljs.core.async.__GT_t10034 = (function __GT_t10034(ch__$1,f__$1,map_LT___$1,meta10035){return (new cljs.core.async.t10034(ch__$1,f__$1,map_LT___$1,meta10035));
});
}
return (new cljs.core.async.t10034(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t10043 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10043 = (function (ch,f,map_GT_,meta10044){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta10044 = meta10044;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10043.cljs$lang$type = true;
cljs.core.async.t10043.cljs$lang$ctorStr = "cljs.core.async/t10043";
cljs.core.async.t10043.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10043");
});
cljs.core.async.t10043.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10043.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t10043.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10043.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10043.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10043.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10043.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10045){var self__ = this;
var _10045__$1 = this;return self__.meta10044;
});
cljs.core.async.t10043.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10045,meta10044__$1){var self__ = this;
var _10045__$1 = this;return (new cljs.core.async.t10043(self__.ch,self__.f,self__.map_GT_,meta10044__$1));
});
cljs.core.async.__GT_t10043 = (function __GT_t10043(ch__$1,f__$1,map_GT___$1,meta10044){return (new cljs.core.async.t10043(ch__$1,f__$1,map_GT___$1,meta10044));
});
}
return (new cljs.core.async.t10043(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t10049 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10049 = (function (ch,p,filter_GT_,meta10050){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta10050 = meta10050;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10049.cljs$lang$type = true;
cljs.core.async.t10049.cljs$lang$ctorStr = "cljs.core.async/t10049";
cljs.core.async.t10049.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10049");
});
cljs.core.async.t10049.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t10049.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t10049.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t10049.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t10049.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t10049.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t10049.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_10051){var self__ = this;
var _10051__$1 = this;return self__.meta10050;
});
cljs.core.async.t10049.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_10051,meta10050__$1){var self__ = this;
var _10051__$1 = this;return (new cljs.core.async.t10049(self__.ch,self__.p,self__.filter_GT_,meta10050__$1));
});
cljs.core.async.__GT_t10049 = (function __GT_t10049(ch__$1,p__$1,filter_GT___$1,meta10050){return (new cljs.core.async.t10049(ch__$1,p__$1,filter_GT___$1,meta10050));
});
}
return (new cljs.core.async.t10049(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___10134 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10113){var state_val_10114 = (state_10113[1]);if((state_val_10114 === 1))
{var state_10113__$1 = state_10113;var statearr_10115_10135 = state_10113__$1;(statearr_10115_10135[2] = null);
(statearr_10115_10135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10114 === 2))
{var state_10113__$1 = state_10113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10113__$1,4,ch);
} else
{if((state_val_10114 === 3))
{var inst_10111 = (state_10113[2]);var state_10113__$1 = state_10113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10113__$1,inst_10111);
} else
{if((state_val_10114 === 4))
{var inst_10095 = (state_10113[7]);var inst_10095__$1 = (state_10113[2]);var inst_10096 = (inst_10095__$1 == null);var state_10113__$1 = (function (){var statearr_10116 = state_10113;(statearr_10116[7] = inst_10095__$1);
return statearr_10116;
})();if(cljs.core.truth_(inst_10096))
{var statearr_10117_10136 = state_10113__$1;(statearr_10117_10136[1] = 5);
} else
{var statearr_10118_10137 = state_10113__$1;(statearr_10118_10137[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10114 === 5))
{var inst_10098 = cljs.core.async.close_BANG_.call(null,out);var state_10113__$1 = state_10113;var statearr_10119_10138 = state_10113__$1;(statearr_10119_10138[2] = inst_10098);
(statearr_10119_10138[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10114 === 6))
{var inst_10095 = (state_10113[7]);var inst_10100 = p.call(null,inst_10095);var state_10113__$1 = state_10113;if(cljs.core.truth_(inst_10100))
{var statearr_10120_10139 = state_10113__$1;(statearr_10120_10139[1] = 8);
} else
{var statearr_10121_10140 = state_10113__$1;(statearr_10121_10140[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10114 === 7))
{var inst_10109 = (state_10113[2]);var state_10113__$1 = state_10113;var statearr_10122_10141 = state_10113__$1;(statearr_10122_10141[2] = inst_10109);
(statearr_10122_10141[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10114 === 8))
{var inst_10095 = (state_10113[7]);var state_10113__$1 = state_10113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10113__$1,11,out,inst_10095);
} else
{if((state_val_10114 === 9))
{var state_10113__$1 = state_10113;var statearr_10123_10142 = state_10113__$1;(statearr_10123_10142[2] = null);
(statearr_10123_10142[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10114 === 10))
{var inst_10106 = (state_10113[2]);var state_10113__$1 = (function (){var statearr_10124 = state_10113;(statearr_10124[8] = inst_10106);
return statearr_10124;
})();var statearr_10125_10143 = state_10113__$1;(statearr_10125_10143[2] = null);
(statearr_10125_10143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10114 === 11))
{var inst_10103 = (state_10113[2]);var state_10113__$1 = state_10113;var statearr_10126_10144 = state_10113__$1;(statearr_10126_10144[2] = inst_10103);
(statearr_10126_10144[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_10130 = [null,null,null,null,null,null,null,null,null];(statearr_10130[0] = state_machine__5507__auto__);
(statearr_10130[1] = 1);
return statearr_10130;
});
var state_machine__5507__auto____1 = (function (state_10113){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10113);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10131){if((e10131 instanceof Object))
{var ex__5510__auto__ = e10131;var statearr_10132_10145 = state_10113;(statearr_10132_10145[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10146 = state_10113;
state_10113 = G__10146;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10113){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10133 = f__5522__auto__.call(null);(statearr_10133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10134);
return statearr_10133;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10298){var state_val_10299 = (state_10298[1]);if((state_val_10299 === 1))
{var state_10298__$1 = state_10298;var statearr_10300_10337 = state_10298__$1;(statearr_10300_10337[2] = null);
(statearr_10300_10337[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 2))
{var state_10298__$1 = state_10298;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10298__$1,4,in$);
} else
{if((state_val_10299 === 3))
{var inst_10296 = (state_10298[2]);var state_10298__$1 = state_10298;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10298__$1,inst_10296);
} else
{if((state_val_10299 === 4))
{var inst_10244 = (state_10298[7]);var inst_10244__$1 = (state_10298[2]);var inst_10245 = (inst_10244__$1 == null);var state_10298__$1 = (function (){var statearr_10301 = state_10298;(statearr_10301[7] = inst_10244__$1);
return statearr_10301;
})();if(cljs.core.truth_(inst_10245))
{var statearr_10302_10338 = state_10298__$1;(statearr_10302_10338[1] = 5);
} else
{var statearr_10303_10339 = state_10298__$1;(statearr_10303_10339[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 5))
{var inst_10247 = cljs.core.async.close_BANG_.call(null,out);var state_10298__$1 = state_10298;var statearr_10304_10340 = state_10298__$1;(statearr_10304_10340[2] = inst_10247);
(statearr_10304_10340[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 6))
{var inst_10244 = (state_10298[7]);var inst_10249 = f.call(null,inst_10244);var inst_10254 = cljs.core.seq.call(null,inst_10249);var inst_10255 = inst_10254;var inst_10256 = null;var inst_10257 = 0;var inst_10258 = 0;var state_10298__$1 = (function (){var statearr_10305 = state_10298;(statearr_10305[8] = inst_10256);
(statearr_10305[9] = inst_10255);
(statearr_10305[10] = inst_10257);
(statearr_10305[11] = inst_10258);
return statearr_10305;
})();var statearr_10306_10341 = state_10298__$1;(statearr_10306_10341[2] = null);
(statearr_10306_10341[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 7))
{var inst_10294 = (state_10298[2]);var state_10298__$1 = state_10298;var statearr_10307_10342 = state_10298__$1;(statearr_10307_10342[2] = inst_10294);
(statearr_10307_10342[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 8))
{var inst_10257 = (state_10298[10]);var inst_10258 = (state_10298[11]);var inst_10260 = (inst_10258 < inst_10257);var inst_10261 = inst_10260;var state_10298__$1 = state_10298;if(cljs.core.truth_(inst_10261))
{var statearr_10308_10343 = state_10298__$1;(statearr_10308_10343[1] = 10);
} else
{var statearr_10309_10344 = state_10298__$1;(statearr_10309_10344[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 9))
{var inst_10291 = (state_10298[2]);var state_10298__$1 = (function (){var statearr_10310 = state_10298;(statearr_10310[12] = inst_10291);
return statearr_10310;
})();var statearr_10311_10345 = state_10298__$1;(statearr_10311_10345[2] = null);
(statearr_10311_10345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 10))
{var inst_10256 = (state_10298[8]);var inst_10258 = (state_10298[11]);var inst_10263 = cljs.core._nth.call(null,inst_10256,inst_10258);var state_10298__$1 = state_10298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10298__$1,13,out,inst_10263);
} else
{if((state_val_10299 === 11))
{var inst_10255 = (state_10298[9]);var inst_10269 = (state_10298[13]);var inst_10269__$1 = cljs.core.seq.call(null,inst_10255);var state_10298__$1 = (function (){var statearr_10315 = state_10298;(statearr_10315[13] = inst_10269__$1);
return statearr_10315;
})();if(inst_10269__$1)
{var statearr_10316_10346 = state_10298__$1;(statearr_10316_10346[1] = 14);
} else
{var statearr_10317_10347 = state_10298__$1;(statearr_10317_10347[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 12))
{var inst_10289 = (state_10298[2]);var state_10298__$1 = state_10298;var statearr_10318_10348 = state_10298__$1;(statearr_10318_10348[2] = inst_10289);
(statearr_10318_10348[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 13))
{var inst_10256 = (state_10298[8]);var inst_10255 = (state_10298[9]);var inst_10257 = (state_10298[10]);var inst_10258 = (state_10298[11]);var inst_10265 = (state_10298[2]);var inst_10266 = (inst_10258 + 1);var tmp10312 = inst_10256;var tmp10313 = inst_10255;var tmp10314 = inst_10257;var inst_10255__$1 = tmp10313;var inst_10256__$1 = tmp10312;var inst_10257__$1 = tmp10314;var inst_10258__$1 = inst_10266;var state_10298__$1 = (function (){var statearr_10319 = state_10298;(statearr_10319[8] = inst_10256__$1);
(statearr_10319[9] = inst_10255__$1);
(statearr_10319[10] = inst_10257__$1);
(statearr_10319[11] = inst_10258__$1);
(statearr_10319[14] = inst_10265);
return statearr_10319;
})();var statearr_10320_10349 = state_10298__$1;(statearr_10320_10349[2] = null);
(statearr_10320_10349[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 14))
{var inst_10269 = (state_10298[13]);var inst_10271 = cljs.core.chunked_seq_QMARK_.call(null,inst_10269);var state_10298__$1 = state_10298;if(inst_10271)
{var statearr_10321_10350 = state_10298__$1;(statearr_10321_10350[1] = 17);
} else
{var statearr_10322_10351 = state_10298__$1;(statearr_10322_10351[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 15))
{var state_10298__$1 = state_10298;var statearr_10323_10352 = state_10298__$1;(statearr_10323_10352[2] = null);
(statearr_10323_10352[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 16))
{var inst_10287 = (state_10298[2]);var state_10298__$1 = state_10298;var statearr_10324_10353 = state_10298__$1;(statearr_10324_10353[2] = inst_10287);
(statearr_10324_10353[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 17))
{var inst_10269 = (state_10298[13]);var inst_10273 = cljs.core.chunk_first.call(null,inst_10269);var inst_10274 = cljs.core.chunk_rest.call(null,inst_10269);var inst_10275 = cljs.core.count.call(null,inst_10273);var inst_10255 = inst_10274;var inst_10256 = inst_10273;var inst_10257 = inst_10275;var inst_10258 = 0;var state_10298__$1 = (function (){var statearr_10325 = state_10298;(statearr_10325[8] = inst_10256);
(statearr_10325[9] = inst_10255);
(statearr_10325[10] = inst_10257);
(statearr_10325[11] = inst_10258);
return statearr_10325;
})();var statearr_10326_10354 = state_10298__$1;(statearr_10326_10354[2] = null);
(statearr_10326_10354[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 18))
{var inst_10269 = (state_10298[13]);var inst_10278 = cljs.core.first.call(null,inst_10269);var state_10298__$1 = state_10298;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10298__$1,20,out,inst_10278);
} else
{if((state_val_10299 === 19))
{var inst_10284 = (state_10298[2]);var state_10298__$1 = state_10298;var statearr_10327_10355 = state_10298__$1;(statearr_10327_10355[2] = inst_10284);
(statearr_10327_10355[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10299 === 20))
{var inst_10269 = (state_10298[13]);var inst_10280 = (state_10298[2]);var inst_10281 = cljs.core.next.call(null,inst_10269);var inst_10255 = inst_10281;var inst_10256 = null;var inst_10257 = 0;var inst_10258 = 0;var state_10298__$1 = (function (){var statearr_10328 = state_10298;(statearr_10328[8] = inst_10256);
(statearr_10328[9] = inst_10255);
(statearr_10328[15] = inst_10280);
(statearr_10328[10] = inst_10257);
(statearr_10328[11] = inst_10258);
return statearr_10328;
})();var statearr_10329_10356 = state_10298__$1;(statearr_10329_10356[2] = null);
(statearr_10329_10356[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_10333 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10333[0] = state_machine__5507__auto__);
(statearr_10333[1] = 1);
return statearr_10333;
});
var state_machine__5507__auto____1 = (function (state_10298){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10298);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10334){if((e10334 instanceof Object))
{var ex__5510__auto__ = e10334;var statearr_10335_10357 = state_10298;(statearr_10335_10357[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10298);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10334;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10358 = state_10298;
state_10298 = G__10358;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10298){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10298);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10336 = f__5522__auto__.call(null);(statearr_10336[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10336;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___10439 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10418){var state_val_10419 = (state_10418[1]);if((state_val_10419 === 1))
{var state_10418__$1 = state_10418;var statearr_10420_10440 = state_10418__$1;(statearr_10420_10440[2] = null);
(statearr_10420_10440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 2))
{var state_10418__$1 = state_10418;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10418__$1,4,from);
} else
{if((state_val_10419 === 3))
{var inst_10416 = (state_10418[2]);var state_10418__$1 = state_10418;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10418__$1,inst_10416);
} else
{if((state_val_10419 === 4))
{var inst_10401 = (state_10418[7]);var inst_10401__$1 = (state_10418[2]);var inst_10402 = (inst_10401__$1 == null);var state_10418__$1 = (function (){var statearr_10421 = state_10418;(statearr_10421[7] = inst_10401__$1);
return statearr_10421;
})();if(cljs.core.truth_(inst_10402))
{var statearr_10422_10441 = state_10418__$1;(statearr_10422_10441[1] = 5);
} else
{var statearr_10423_10442 = state_10418__$1;(statearr_10423_10442[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 5))
{var state_10418__$1 = state_10418;if(cljs.core.truth_(close_QMARK_))
{var statearr_10424_10443 = state_10418__$1;(statearr_10424_10443[1] = 8);
} else
{var statearr_10425_10444 = state_10418__$1;(statearr_10425_10444[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 6))
{var inst_10401 = (state_10418[7]);var state_10418__$1 = state_10418;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10418__$1,11,to,inst_10401);
} else
{if((state_val_10419 === 7))
{var inst_10414 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10426_10445 = state_10418__$1;(statearr_10426_10445[2] = inst_10414);
(statearr_10426_10445[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 8))
{var inst_10405 = cljs.core.async.close_BANG_.call(null,to);var state_10418__$1 = state_10418;var statearr_10427_10446 = state_10418__$1;(statearr_10427_10446[2] = inst_10405);
(statearr_10427_10446[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 9))
{var state_10418__$1 = state_10418;var statearr_10428_10447 = state_10418__$1;(statearr_10428_10447[2] = null);
(statearr_10428_10447[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 10))
{var inst_10408 = (state_10418[2]);var state_10418__$1 = state_10418;var statearr_10429_10448 = state_10418__$1;(statearr_10429_10448[2] = inst_10408);
(statearr_10429_10448[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10419 === 11))
{var inst_10411 = (state_10418[2]);var state_10418__$1 = (function (){var statearr_10430 = state_10418;(statearr_10430[8] = inst_10411);
return statearr_10430;
})();var statearr_10431_10449 = state_10418__$1;(statearr_10431_10449[2] = null);
(statearr_10431_10449[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10435 = [null,null,null,null,null,null,null,null,null];(statearr_10435[0] = state_machine__5507__auto__);
(statearr_10435[1] = 1);
return statearr_10435;
});
var state_machine__5507__auto____1 = (function (state_10418){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10418);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10436){if((e10436 instanceof Object))
{var ex__5510__auto__ = e10436;var statearr_10437_10450 = state_10418;(statearr_10437_10450[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10418);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10451 = state_10418;
state_10418 = G__10451;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10418){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10418);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10438 = f__5522__auto__.call(null);(statearr_10438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10439);
return statearr_10438;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___10538 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10516){var state_val_10517 = (state_10516[1]);if((state_val_10517 === 1))
{var state_10516__$1 = state_10516;var statearr_10518_10539 = state_10516__$1;(statearr_10518_10539[2] = null);
(statearr_10518_10539[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10517 === 2))
{var state_10516__$1 = state_10516;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10516__$1,4,ch);
} else
{if((state_val_10517 === 3))
{var inst_10514 = (state_10516[2]);var state_10516__$1 = state_10516;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10516__$1,inst_10514);
} else
{if((state_val_10517 === 4))
{var inst_10497 = (state_10516[7]);var inst_10497__$1 = (state_10516[2]);var inst_10498 = (inst_10497__$1 == null);var state_10516__$1 = (function (){var statearr_10519 = state_10516;(statearr_10519[7] = inst_10497__$1);
return statearr_10519;
})();if(cljs.core.truth_(inst_10498))
{var statearr_10520_10540 = state_10516__$1;(statearr_10520_10540[1] = 5);
} else
{var statearr_10521_10541 = state_10516__$1;(statearr_10521_10541[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10517 === 5))
{var inst_10500 = cljs.core.async.close_BANG_.call(null,tc);var inst_10501 = cljs.core.async.close_BANG_.call(null,fc);var state_10516__$1 = (function (){var statearr_10522 = state_10516;(statearr_10522[8] = inst_10500);
return statearr_10522;
})();var statearr_10523_10542 = state_10516__$1;(statearr_10523_10542[2] = inst_10501);
(statearr_10523_10542[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10517 === 6))
{var inst_10497 = (state_10516[7]);var inst_10503 = p.call(null,inst_10497);var state_10516__$1 = state_10516;if(cljs.core.truth_(inst_10503))
{var statearr_10524_10543 = state_10516__$1;(statearr_10524_10543[1] = 9);
} else
{var statearr_10525_10544 = state_10516__$1;(statearr_10525_10544[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10517 === 7))
{var inst_10512 = (state_10516[2]);var state_10516__$1 = state_10516;var statearr_10526_10545 = state_10516__$1;(statearr_10526_10545[2] = inst_10512);
(statearr_10526_10545[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10517 === 8))
{var inst_10509 = (state_10516[2]);var state_10516__$1 = (function (){var statearr_10527 = state_10516;(statearr_10527[9] = inst_10509);
return statearr_10527;
})();var statearr_10528_10546 = state_10516__$1;(statearr_10528_10546[2] = null);
(statearr_10528_10546[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10517 === 9))
{var state_10516__$1 = state_10516;var statearr_10529_10547 = state_10516__$1;(statearr_10529_10547[2] = tc);
(statearr_10529_10547[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10517 === 10))
{var state_10516__$1 = state_10516;var statearr_10530_10548 = state_10516__$1;(statearr_10530_10548[2] = fc);
(statearr_10530_10548[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10517 === 11))
{var inst_10497 = (state_10516[7]);var inst_10507 = (state_10516[2]);var state_10516__$1 = state_10516;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10516__$1,8,inst_10507,inst_10497);
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
var state_machine__5507__auto____0 = (function (){var statearr_10534 = [null,null,null,null,null,null,null,null,null,null];(statearr_10534[0] = state_machine__5507__auto__);
(statearr_10534[1] = 1);
return statearr_10534;
});
var state_machine__5507__auto____1 = (function (state_10516){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10516);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10535){if((e10535 instanceof Object))
{var ex__5510__auto__ = e10535;var statearr_10536_10549 = state_10516;(statearr_10536_10549[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10516);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10535;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10550 = state_10516;
state_10516 = G__10550;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10516){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10516);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10537 = f__5522__auto__.call(null);(statearr_10537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___10538);
return statearr_10537;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10597){var state_val_10598 = (state_10597[1]);if((state_val_10598 === 7))
{var inst_10593 = (state_10597[2]);var state_10597__$1 = state_10597;var statearr_10599_10615 = state_10597__$1;(statearr_10599_10615[2] = inst_10593);
(statearr_10599_10615[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10598 === 6))
{var inst_10586 = (state_10597[7]);var inst_10583 = (state_10597[8]);var inst_10590 = f.call(null,inst_10583,inst_10586);var inst_10583__$1 = inst_10590;var state_10597__$1 = (function (){var statearr_10600 = state_10597;(statearr_10600[8] = inst_10583__$1);
return statearr_10600;
})();var statearr_10601_10616 = state_10597__$1;(statearr_10601_10616[2] = null);
(statearr_10601_10616[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10598 === 5))
{var inst_10583 = (state_10597[8]);var state_10597__$1 = state_10597;var statearr_10602_10617 = state_10597__$1;(statearr_10602_10617[2] = inst_10583);
(statearr_10602_10617[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10598 === 4))
{var inst_10586 = (state_10597[7]);var inst_10586__$1 = (state_10597[2]);var inst_10587 = (inst_10586__$1 == null);var state_10597__$1 = (function (){var statearr_10603 = state_10597;(statearr_10603[7] = inst_10586__$1);
return statearr_10603;
})();if(cljs.core.truth_(inst_10587))
{var statearr_10604_10618 = state_10597__$1;(statearr_10604_10618[1] = 5);
} else
{var statearr_10605_10619 = state_10597__$1;(statearr_10605_10619[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10598 === 3))
{var inst_10595 = (state_10597[2]);var state_10597__$1 = state_10597;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10597__$1,inst_10595);
} else
{if((state_val_10598 === 2))
{var state_10597__$1 = state_10597;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10597__$1,4,ch);
} else
{if((state_val_10598 === 1))
{var inst_10583 = init;var state_10597__$1 = (function (){var statearr_10606 = state_10597;(statearr_10606[8] = inst_10583);
return statearr_10606;
})();var statearr_10607_10620 = state_10597__$1;(statearr_10607_10620[2] = null);
(statearr_10607_10620[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_10611 = [null,null,null,null,null,null,null,null,null];(statearr_10611[0] = state_machine__5507__auto__);
(statearr_10611[1] = 1);
return statearr_10611;
});
var state_machine__5507__auto____1 = (function (state_10597){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10597);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10612){if((e10612 instanceof Object))
{var ex__5510__auto__ = e10612;var statearr_10613_10621 = state_10597;(statearr_10613_10621[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10597);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10622 = state_10597;
state_10597 = G__10622;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10597){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10597);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10614 = f__5522__auto__.call(null);(statearr_10614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10614;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_10684){var state_val_10685 = (state_10684[1]);if((state_val_10685 === 1))
{var inst_10664 = cljs.core.seq.call(null,coll);var inst_10665 = inst_10664;var state_10684__$1 = (function (){var statearr_10686 = state_10684;(statearr_10686[7] = inst_10665);
return statearr_10686;
})();var statearr_10687_10705 = state_10684__$1;(statearr_10687_10705[2] = null);
(statearr_10687_10705[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10685 === 2))
{var inst_10665 = (state_10684[7]);var state_10684__$1 = state_10684;if(cljs.core.truth_(inst_10665))
{var statearr_10688_10706 = state_10684__$1;(statearr_10688_10706[1] = 4);
} else
{var statearr_10689_10707 = state_10684__$1;(statearr_10689_10707[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10685 === 3))
{var inst_10682 = (state_10684[2]);var state_10684__$1 = state_10684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10684__$1,inst_10682);
} else
{if((state_val_10685 === 4))
{var inst_10665 = (state_10684[7]);var inst_10668 = cljs.core.first.call(null,inst_10665);var state_10684__$1 = state_10684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10684__$1,7,ch,inst_10668);
} else
{if((state_val_10685 === 5))
{var state_10684__$1 = state_10684;if(cljs.core.truth_(close_QMARK_))
{var statearr_10690_10708 = state_10684__$1;(statearr_10690_10708[1] = 8);
} else
{var statearr_10691_10709 = state_10684__$1;(statearr_10691_10709[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10685 === 6))
{var inst_10680 = (state_10684[2]);var state_10684__$1 = state_10684;var statearr_10692_10710 = state_10684__$1;(statearr_10692_10710[2] = inst_10680);
(statearr_10692_10710[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10685 === 7))
{var inst_10665 = (state_10684[7]);var inst_10670 = (state_10684[2]);var inst_10671 = cljs.core.next.call(null,inst_10665);var inst_10665__$1 = inst_10671;var state_10684__$1 = (function (){var statearr_10693 = state_10684;(statearr_10693[7] = inst_10665__$1);
(statearr_10693[8] = inst_10670);
return statearr_10693;
})();var statearr_10694_10711 = state_10684__$1;(statearr_10694_10711[2] = null);
(statearr_10694_10711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10685 === 8))
{var inst_10675 = cljs.core.async.close_BANG_.call(null,ch);var state_10684__$1 = state_10684;var statearr_10695_10712 = state_10684__$1;(statearr_10695_10712[2] = inst_10675);
(statearr_10695_10712[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10685 === 9))
{var state_10684__$1 = state_10684;var statearr_10696_10713 = state_10684__$1;(statearr_10696_10713[2] = null);
(statearr_10696_10713[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_10685 === 10))
{var inst_10678 = (state_10684[2]);var state_10684__$1 = state_10684;var statearr_10697_10714 = state_10684__$1;(statearr_10697_10714[2] = inst_10678);
(statearr_10697_10714[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_10701 = [null,null,null,null,null,null,null,null,null];(statearr_10701[0] = state_machine__5507__auto__);
(statearr_10701[1] = 1);
return statearr_10701;
});
var state_machine__5507__auto____1 = (function (state_10684){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_10684);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e10702){if((e10702 instanceof Object))
{var ex__5510__auto__ = e10702;var statearr_10703_10715 = state_10684;(statearr_10703_10715[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10684);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e10702;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__10716 = state_10684;
state_10684 = G__10716;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_10684){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_10684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_10704 = f__5522__auto__.call(null);(statearr_10704[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_10704;
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
cljs.core.async.Mux = (function (){var obj10718 = {};return obj10718;
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
cljs.core.async.Mult = (function (){var obj10720 = {};return obj10720;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10944 = (function (cs,ch,mult,meta10945){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10945 = meta10945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10944.cljs$lang$type = true;
cljs.core.async.t10944.cljs$lang$ctorStr = "cljs.core.async/t10944";
cljs.core.async.t10944.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t10944");
});})(cs))
;
cljs.core.async.t10944.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10944.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10944.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10944.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10944.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10944.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10944.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10946){var self__ = this;
var _10946__$1 = this;return self__.meta10945;
});})(cs))
;
cljs.core.async.t10944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10946,meta10945__$1){var self__ = this;
var _10946__$1 = this;return (new cljs.core.async.t10944(self__.cs,self__.ch,self__.mult,meta10945__$1));
});})(cs))
;
cljs.core.async.__GT_t10944 = ((function (cs){
return (function __GT_t10944(cs__$1,ch__$1,mult__$1,meta10945){return (new cljs.core.async.t10944(cs__$1,ch__$1,mult__$1,meta10945));
});})(cs))
;
}
return (new cljs.core.async.t10944(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___11167 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11081){var state_val_11082 = (state_11081[1]);if((state_val_11082 === 32))
{var inst_11025 = (state_11081[7]);var inst_10949 = (state_11081[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11081,31,Object,null,30);var inst_11032 = cljs.core.async.put_BANG_.call(null,inst_11025,inst_10949,done);var state_11081__$1 = state_11081;var statearr_11083_11168 = state_11081__$1;(statearr_11083_11168[2] = inst_11032);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11081__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 1))
{var state_11081__$1 = state_11081;var statearr_11084_11169 = state_11081__$1;(statearr_11084_11169[2] = null);
(statearr_11084_11169[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 33))
{var inst_11038 = (state_11081[9]);var inst_11040 = cljs.core.chunked_seq_QMARK_.call(null,inst_11038);var state_11081__$1 = state_11081;if(inst_11040)
{var statearr_11085_11170 = state_11081__$1;(statearr_11085_11170[1] = 36);
} else
{var statearr_11086_11171 = state_11081__$1;(statearr_11086_11171[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 2))
{var state_11081__$1 = state_11081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11081__$1,4,ch);
} else
{if((state_val_11082 === 34))
{var state_11081__$1 = state_11081;var statearr_11087_11172 = state_11081__$1;(statearr_11087_11172[2] = null);
(statearr_11087_11172[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 3))
{var inst_11079 = (state_11081[2]);var state_11081__$1 = state_11081;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11081__$1,inst_11079);
} else
{if((state_val_11082 === 35))
{var inst_11063 = (state_11081[2]);var state_11081__$1 = state_11081;var statearr_11088_11173 = state_11081__$1;(statearr_11088_11173[2] = inst_11063);
(statearr_11088_11173[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 4))
{var inst_10949 = (state_11081[8]);var inst_10949__$1 = (state_11081[2]);var inst_10950 = (inst_10949__$1 == null);var state_11081__$1 = (function (){var statearr_11089 = state_11081;(statearr_11089[8] = inst_10949__$1);
return statearr_11089;
})();if(cljs.core.truth_(inst_10950))
{var statearr_11090_11174 = state_11081__$1;(statearr_11090_11174[1] = 5);
} else
{var statearr_11091_11175 = state_11081__$1;(statearr_11091_11175[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 36))
{var inst_11038 = (state_11081[9]);var inst_11042 = cljs.core.chunk_first.call(null,inst_11038);var inst_11043 = cljs.core.chunk_rest.call(null,inst_11038);var inst_11044 = cljs.core.count.call(null,inst_11042);var inst_11017 = inst_11043;var inst_11018 = inst_11042;var inst_11019 = inst_11044;var inst_11020 = 0;var state_11081__$1 = (function (){var statearr_11092 = state_11081;(statearr_11092[10] = inst_11017);
(statearr_11092[11] = inst_11018);
(statearr_11092[12] = inst_11019);
(statearr_11092[13] = inst_11020);
return statearr_11092;
})();var statearr_11093_11176 = state_11081__$1;(statearr_11093_11176[2] = null);
(statearr_11093_11176[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 5))
{var inst_10956 = cljs.core.deref.call(null,cs);var inst_10957 = cljs.core.seq.call(null,inst_10956);var inst_10958 = inst_10957;var inst_10959 = null;var inst_10960 = 0;var inst_10961 = 0;var state_11081__$1 = (function (){var statearr_11094 = state_11081;(statearr_11094[14] = inst_10961);
(statearr_11094[15] = inst_10960);
(statearr_11094[16] = inst_10958);
(statearr_11094[17] = inst_10959);
return statearr_11094;
})();var statearr_11095_11177 = state_11081__$1;(statearr_11095_11177[2] = null);
(statearr_11095_11177[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 37))
{var inst_11038 = (state_11081[9]);var inst_11047 = cljs.core.first.call(null,inst_11038);var state_11081__$1 = (function (){var statearr_11096 = state_11081;(statearr_11096[18] = inst_11047);
return statearr_11096;
})();var statearr_11097_11178 = state_11081__$1;(statearr_11097_11178[2] = null);
(statearr_11097_11178[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 6))
{var inst_11009 = (state_11081[19]);var inst_11008 = cljs.core.deref.call(null,cs);var inst_11009__$1 = cljs.core.keys.call(null,inst_11008);var inst_11010 = cljs.core.count.call(null,inst_11009__$1);var inst_11011 = cljs.core.reset_BANG_.call(null,dctr,inst_11010);var inst_11016 = cljs.core.seq.call(null,inst_11009__$1);var inst_11017 = inst_11016;var inst_11018 = null;var inst_11019 = 0;var inst_11020 = 0;var state_11081__$1 = (function (){var statearr_11098 = state_11081;(statearr_11098[20] = inst_11011);
(statearr_11098[10] = inst_11017);
(statearr_11098[11] = inst_11018);
(statearr_11098[12] = inst_11019);
(statearr_11098[13] = inst_11020);
(statearr_11098[19] = inst_11009__$1);
return statearr_11098;
})();var statearr_11099_11179 = state_11081__$1;(statearr_11099_11179[2] = null);
(statearr_11099_11179[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 38))
{var inst_11060 = (state_11081[2]);var state_11081__$1 = state_11081;var statearr_11100_11180 = state_11081__$1;(statearr_11100_11180[2] = inst_11060);
(statearr_11100_11180[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 7))
{var inst_11077 = (state_11081[2]);var state_11081__$1 = state_11081;var statearr_11101_11181 = state_11081__$1;(statearr_11101_11181[2] = inst_11077);
(statearr_11101_11181[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 39))
{var inst_11038 = (state_11081[9]);var inst_11056 = (state_11081[2]);var inst_11057 = cljs.core.next.call(null,inst_11038);var inst_11017 = inst_11057;var inst_11018 = null;var inst_11019 = 0;var inst_11020 = 0;var state_11081__$1 = (function (){var statearr_11102 = state_11081;(statearr_11102[10] = inst_11017);
(statearr_11102[11] = inst_11018);
(statearr_11102[12] = inst_11019);
(statearr_11102[13] = inst_11020);
(statearr_11102[21] = inst_11056);
return statearr_11102;
})();var statearr_11103_11182 = state_11081__$1;(statearr_11103_11182[2] = null);
(statearr_11103_11182[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 8))
{var inst_10961 = (state_11081[14]);var inst_10960 = (state_11081[15]);var inst_10963 = (inst_10961 < inst_10960);var inst_10964 = inst_10963;var state_11081__$1 = state_11081;if(cljs.core.truth_(inst_10964))
{var statearr_11104_11183 = state_11081__$1;(statearr_11104_11183[1] = 10);
} else
{var statearr_11105_11184 = state_11081__$1;(statearr_11105_11184[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 40))
{var inst_11047 = (state_11081[18]);var inst_11048 = (state_11081[2]);var inst_11049 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11050 = cljs.core.async.untap_STAR_.call(null,m,inst_11047);var state_11081__$1 = (function (){var statearr_11106 = state_11081;(statearr_11106[22] = inst_11049);
(statearr_11106[23] = inst_11048);
return statearr_11106;
})();var statearr_11107_11185 = state_11081__$1;(statearr_11107_11185[2] = inst_11050);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11081__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 9))
{var inst_11006 = (state_11081[2]);var state_11081__$1 = state_11081;var statearr_11108_11186 = state_11081__$1;(statearr_11108_11186[2] = inst_11006);
(statearr_11108_11186[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 41))
{var inst_10949 = (state_11081[8]);var inst_11047 = (state_11081[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11081,40,Object,null,39);var inst_11054 = cljs.core.async.put_BANG_.call(null,inst_11047,inst_10949,done);var state_11081__$1 = state_11081;var statearr_11109_11187 = state_11081__$1;(statearr_11109_11187[2] = inst_11054);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11081__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 10))
{var inst_10961 = (state_11081[14]);var inst_10959 = (state_11081[17]);var inst_10967 = cljs.core._nth.call(null,inst_10959,inst_10961);var inst_10968 = cljs.core.nth.call(null,inst_10967,0,null);var inst_10969 = cljs.core.nth.call(null,inst_10967,1,null);var state_11081__$1 = (function (){var statearr_11110 = state_11081;(statearr_11110[24] = inst_10968);
return statearr_11110;
})();if(cljs.core.truth_(inst_10969))
{var statearr_11111_11188 = state_11081__$1;(statearr_11111_11188[1] = 13);
} else
{var statearr_11112_11189 = state_11081__$1;(statearr_11112_11189[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 42))
{var state_11081__$1 = state_11081;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11081__$1,45,dchan);
} else
{if((state_val_11082 === 11))
{var inst_10978 = (state_11081[25]);var inst_10958 = (state_11081[16]);var inst_10978__$1 = cljs.core.seq.call(null,inst_10958);var state_11081__$1 = (function (){var statearr_11113 = state_11081;(statearr_11113[25] = inst_10978__$1);
return statearr_11113;
})();if(inst_10978__$1)
{var statearr_11114_11190 = state_11081__$1;(statearr_11114_11190[1] = 16);
} else
{var statearr_11115_11191 = state_11081__$1;(statearr_11115_11191[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 43))
{var state_11081__$1 = state_11081;var statearr_11116_11192 = state_11081__$1;(statearr_11116_11192[2] = null);
(statearr_11116_11192[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 12))
{var inst_11004 = (state_11081[2]);var state_11081__$1 = state_11081;var statearr_11117_11193 = state_11081__$1;(statearr_11117_11193[2] = inst_11004);
(statearr_11117_11193[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 44))
{var inst_11074 = (state_11081[2]);var state_11081__$1 = (function (){var statearr_11118 = state_11081;(statearr_11118[26] = inst_11074);
return statearr_11118;
})();var statearr_11119_11194 = state_11081__$1;(statearr_11119_11194[2] = null);
(statearr_11119_11194[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 13))
{var inst_10968 = (state_11081[24]);var inst_10971 = cljs.core.async.close_BANG_.call(null,inst_10968);var state_11081__$1 = state_11081;var statearr_11120_11195 = state_11081__$1;(statearr_11120_11195[2] = inst_10971);
(statearr_11120_11195[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 45))
{var inst_11071 = (state_11081[2]);var state_11081__$1 = state_11081;var statearr_11124_11196 = state_11081__$1;(statearr_11124_11196[2] = inst_11071);
(statearr_11124_11196[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 14))
{var state_11081__$1 = state_11081;var statearr_11125_11197 = state_11081__$1;(statearr_11125_11197[2] = null);
(statearr_11125_11197[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 15))
{var inst_10961 = (state_11081[14]);var inst_10960 = (state_11081[15]);var inst_10958 = (state_11081[16]);var inst_10959 = (state_11081[17]);var inst_10974 = (state_11081[2]);var inst_10975 = (inst_10961 + 1);var tmp11121 = inst_10960;var tmp11122 = inst_10958;var tmp11123 = inst_10959;var inst_10958__$1 = tmp11122;var inst_10959__$1 = tmp11123;var inst_10960__$1 = tmp11121;var inst_10961__$1 = inst_10975;var state_11081__$1 = (function (){var statearr_11126 = state_11081;(statearr_11126[14] = inst_10961__$1);
(statearr_11126[15] = inst_10960__$1);
(statearr_11126[16] = inst_10958__$1);
(statearr_11126[17] = inst_10959__$1);
(statearr_11126[27] = inst_10974);
return statearr_11126;
})();var statearr_11127_11198 = state_11081__$1;(statearr_11127_11198[2] = null);
(statearr_11127_11198[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 16))
{var inst_10978 = (state_11081[25]);var inst_10980 = cljs.core.chunked_seq_QMARK_.call(null,inst_10978);var state_11081__$1 = state_11081;if(inst_10980)
{var statearr_11128_11199 = state_11081__$1;(statearr_11128_11199[1] = 19);
} else
{var statearr_11129_11200 = state_11081__$1;(statearr_11129_11200[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 17))
{var state_11081__$1 = state_11081;var statearr_11130_11201 = state_11081__$1;(statearr_11130_11201[2] = null);
(statearr_11130_11201[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 18))
{var inst_11002 = (state_11081[2]);var state_11081__$1 = state_11081;var statearr_11131_11202 = state_11081__$1;(statearr_11131_11202[2] = inst_11002);
(statearr_11131_11202[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 19))
{var inst_10978 = (state_11081[25]);var inst_10982 = cljs.core.chunk_first.call(null,inst_10978);var inst_10983 = cljs.core.chunk_rest.call(null,inst_10978);var inst_10984 = cljs.core.count.call(null,inst_10982);var inst_10958 = inst_10983;var inst_10959 = inst_10982;var inst_10960 = inst_10984;var inst_10961 = 0;var state_11081__$1 = (function (){var statearr_11132 = state_11081;(statearr_11132[14] = inst_10961);
(statearr_11132[15] = inst_10960);
(statearr_11132[16] = inst_10958);
(statearr_11132[17] = inst_10959);
return statearr_11132;
})();var statearr_11133_11203 = state_11081__$1;(statearr_11133_11203[2] = null);
(statearr_11133_11203[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 20))
{var inst_10978 = (state_11081[25]);var inst_10988 = cljs.core.first.call(null,inst_10978);var inst_10989 = cljs.core.nth.call(null,inst_10988,0,null);var inst_10990 = cljs.core.nth.call(null,inst_10988,1,null);var state_11081__$1 = (function (){var statearr_11134 = state_11081;(statearr_11134[28] = inst_10989);
return statearr_11134;
})();if(cljs.core.truth_(inst_10990))
{var statearr_11135_11204 = state_11081__$1;(statearr_11135_11204[1] = 22);
} else
{var statearr_11136_11205 = state_11081__$1;(statearr_11136_11205[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 21))
{var inst_10999 = (state_11081[2]);var state_11081__$1 = state_11081;var statearr_11137_11206 = state_11081__$1;(statearr_11137_11206[2] = inst_10999);
(statearr_11137_11206[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 22))
{var inst_10989 = (state_11081[28]);var inst_10992 = cljs.core.async.close_BANG_.call(null,inst_10989);var state_11081__$1 = state_11081;var statearr_11138_11207 = state_11081__$1;(statearr_11138_11207[2] = inst_10992);
(statearr_11138_11207[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 23))
{var state_11081__$1 = state_11081;var statearr_11139_11208 = state_11081__$1;(statearr_11139_11208[2] = null);
(statearr_11139_11208[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 24))
{var inst_10978 = (state_11081[25]);var inst_10995 = (state_11081[2]);var inst_10996 = cljs.core.next.call(null,inst_10978);var inst_10958 = inst_10996;var inst_10959 = null;var inst_10960 = 0;var inst_10961 = 0;var state_11081__$1 = (function (){var statearr_11140 = state_11081;(statearr_11140[14] = inst_10961);
(statearr_11140[15] = inst_10960);
(statearr_11140[29] = inst_10995);
(statearr_11140[16] = inst_10958);
(statearr_11140[17] = inst_10959);
return statearr_11140;
})();var statearr_11141_11209 = state_11081__$1;(statearr_11141_11209[2] = null);
(statearr_11141_11209[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 25))
{var inst_11019 = (state_11081[12]);var inst_11020 = (state_11081[13]);var inst_11022 = (inst_11020 < inst_11019);var inst_11023 = inst_11022;var state_11081__$1 = state_11081;if(cljs.core.truth_(inst_11023))
{var statearr_11142_11210 = state_11081__$1;(statearr_11142_11210[1] = 27);
} else
{var statearr_11143_11211 = state_11081__$1;(statearr_11143_11211[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 26))
{var inst_11009 = (state_11081[19]);var inst_11067 = (state_11081[2]);var inst_11068 = cljs.core.seq.call(null,inst_11009);var state_11081__$1 = (function (){var statearr_11144 = state_11081;(statearr_11144[30] = inst_11067);
return statearr_11144;
})();if(inst_11068)
{var statearr_11145_11212 = state_11081__$1;(statearr_11145_11212[1] = 42);
} else
{var statearr_11146_11213 = state_11081__$1;(statearr_11146_11213[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 27))
{var inst_11018 = (state_11081[11]);var inst_11020 = (state_11081[13]);var inst_11025 = cljs.core._nth.call(null,inst_11018,inst_11020);var state_11081__$1 = (function (){var statearr_11147 = state_11081;(statearr_11147[7] = inst_11025);
return statearr_11147;
})();var statearr_11148_11214 = state_11081__$1;(statearr_11148_11214[2] = null);
(statearr_11148_11214[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 28))
{var inst_11017 = (state_11081[10]);var inst_11038 = (state_11081[9]);var inst_11038__$1 = cljs.core.seq.call(null,inst_11017);var state_11081__$1 = (function (){var statearr_11152 = state_11081;(statearr_11152[9] = inst_11038__$1);
return statearr_11152;
})();if(inst_11038__$1)
{var statearr_11153_11215 = state_11081__$1;(statearr_11153_11215[1] = 33);
} else
{var statearr_11154_11216 = state_11081__$1;(statearr_11154_11216[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 29))
{var inst_11065 = (state_11081[2]);var state_11081__$1 = state_11081;var statearr_11155_11217 = state_11081__$1;(statearr_11155_11217[2] = inst_11065);
(statearr_11155_11217[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 30))
{var inst_11017 = (state_11081[10]);var inst_11018 = (state_11081[11]);var inst_11019 = (state_11081[12]);var inst_11020 = (state_11081[13]);var inst_11034 = (state_11081[2]);var inst_11035 = (inst_11020 + 1);var tmp11149 = inst_11017;var tmp11150 = inst_11018;var tmp11151 = inst_11019;var inst_11017__$1 = tmp11149;var inst_11018__$1 = tmp11150;var inst_11019__$1 = tmp11151;var inst_11020__$1 = inst_11035;var state_11081__$1 = (function (){var statearr_11156 = state_11081;(statearr_11156[10] = inst_11017__$1);
(statearr_11156[11] = inst_11018__$1);
(statearr_11156[12] = inst_11019__$1);
(statearr_11156[13] = inst_11020__$1);
(statearr_11156[31] = inst_11034);
return statearr_11156;
})();var statearr_11157_11218 = state_11081__$1;(statearr_11157_11218[2] = null);
(statearr_11157_11218[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11082 === 31))
{var inst_11025 = (state_11081[7]);var inst_11026 = (state_11081[2]);var inst_11027 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_11028 = cljs.core.async.untap_STAR_.call(null,m,inst_11025);var state_11081__$1 = (function (){var statearr_11158 = state_11081;(statearr_11158[32] = inst_11026);
(statearr_11158[33] = inst_11027);
return statearr_11158;
})();var statearr_11159_11219 = state_11081__$1;(statearr_11159_11219[2] = inst_11028);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11081__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_11163 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11163[0] = state_machine__5507__auto__);
(statearr_11163[1] = 1);
return statearr_11163;
});
var state_machine__5507__auto____1 = (function (state_11081){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11081);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11164){if((e11164 instanceof Object))
{var ex__5510__auto__ = e11164;var statearr_11165_11220 = state_11081;(statearr_11165_11220[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11081);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11164;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11221 = state_11081;
state_11081 = G__11221;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11081){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11081);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11166 = f__5522__auto__.call(null);(statearr_11166[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11167);
return statearr_11166;
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
cljs.core.async.Mix = (function (){var obj11223 = {};return obj11223;
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
;var m = (function (){if(typeof cljs.core.async.t11333 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11333 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta11334){
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
this.meta11334 = meta11334;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11333.cljs$lang$type = true;
cljs.core.async.t11333.cljs$lang$ctorStr = "cljs.core.async/t11333";
cljs.core.async.t11333.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11333");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11333.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11333.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11333.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11333.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11333.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11333.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11333.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11333.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11333.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11335){var self__ = this;
var _11335__$1 = this;return self__.meta11334;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11333.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11335,meta11334__$1){var self__ = this;
var _11335__$1 = this;return (new cljs.core.async.t11333(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta11334__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11333 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11333(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11334){return (new cljs.core.async.t11333(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta11334));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11333(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___11442 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11400){var state_val_11401 = (state_11400[1]);if((state_val_11401 === 1))
{var inst_11339 = (state_11400[7]);var inst_11339__$1 = calc_state.call(null);var inst_11340 = cljs.core.seq_QMARK_.call(null,inst_11339__$1);var state_11400__$1 = (function (){var statearr_11402 = state_11400;(statearr_11402[7] = inst_11339__$1);
return statearr_11402;
})();if(inst_11340)
{var statearr_11403_11443 = state_11400__$1;(statearr_11403_11443[1] = 2);
} else
{var statearr_11404_11444 = state_11400__$1;(statearr_11404_11444[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 2))
{var inst_11339 = (state_11400[7]);var inst_11342 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11339);var state_11400__$1 = state_11400;var statearr_11405_11445 = state_11400__$1;(statearr_11405_11445[2] = inst_11342);
(statearr_11405_11445[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 3))
{var inst_11339 = (state_11400[7]);var state_11400__$1 = state_11400;var statearr_11406_11446 = state_11400__$1;(statearr_11406_11446[2] = inst_11339);
(statearr_11406_11446[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 4))
{var inst_11339 = (state_11400[7]);var inst_11345 = (state_11400[2]);var inst_11346 = cljs.core.get.call(null,inst_11345,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11347 = cljs.core.get.call(null,inst_11345,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11348 = cljs.core.get.call(null,inst_11345,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_11349 = inst_11339;var state_11400__$1 = (function (){var statearr_11407 = state_11400;(statearr_11407[8] = inst_11346);
(statearr_11407[9] = inst_11347);
(statearr_11407[10] = inst_11348);
(statearr_11407[11] = inst_11349);
return statearr_11407;
})();var statearr_11408_11447 = state_11400__$1;(statearr_11408_11447[2] = null);
(statearr_11408_11447[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 5))
{var inst_11349 = (state_11400[11]);var inst_11352 = cljs.core.seq_QMARK_.call(null,inst_11349);var state_11400__$1 = state_11400;if(inst_11352)
{var statearr_11409_11448 = state_11400__$1;(statearr_11409_11448[1] = 7);
} else
{var statearr_11410_11449 = state_11400__$1;(statearr_11410_11449[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 6))
{var inst_11398 = (state_11400[2]);var state_11400__$1 = state_11400;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11400__$1,inst_11398);
} else
{if((state_val_11401 === 7))
{var inst_11349 = (state_11400[11]);var inst_11354 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11349);var state_11400__$1 = state_11400;var statearr_11411_11450 = state_11400__$1;(statearr_11411_11450[2] = inst_11354);
(statearr_11411_11450[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 8))
{var inst_11349 = (state_11400[11]);var state_11400__$1 = state_11400;var statearr_11412_11451 = state_11400__$1;(statearr_11412_11451[2] = inst_11349);
(statearr_11412_11451[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 9))
{var inst_11357 = (state_11400[12]);var inst_11357__$1 = (state_11400[2]);var inst_11358 = cljs.core.get.call(null,inst_11357__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_11359 = cljs.core.get.call(null,inst_11357__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_11360 = cljs.core.get.call(null,inst_11357__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_11400__$1 = (function (){var statearr_11413 = state_11400;(statearr_11413[12] = inst_11357__$1);
(statearr_11413[13] = inst_11359);
(statearr_11413[14] = inst_11360);
return statearr_11413;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11400__$1,10,inst_11358);
} else
{if((state_val_11401 === 10))
{var inst_11365 = (state_11400[15]);var inst_11364 = (state_11400[16]);var inst_11363 = (state_11400[2]);var inst_11364__$1 = cljs.core.nth.call(null,inst_11363,0,null);var inst_11365__$1 = cljs.core.nth.call(null,inst_11363,1,null);var inst_11366 = (inst_11364__$1 == null);var inst_11367 = cljs.core._EQ_.call(null,inst_11365__$1,change);var inst_11368 = (inst_11366) || (inst_11367);var state_11400__$1 = (function (){var statearr_11414 = state_11400;(statearr_11414[15] = inst_11365__$1);
(statearr_11414[16] = inst_11364__$1);
return statearr_11414;
})();if(cljs.core.truth_(inst_11368))
{var statearr_11415_11452 = state_11400__$1;(statearr_11415_11452[1] = 11);
} else
{var statearr_11416_11453 = state_11400__$1;(statearr_11416_11453[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 11))
{var inst_11364 = (state_11400[16]);var inst_11370 = (inst_11364 == null);var state_11400__$1 = state_11400;if(cljs.core.truth_(inst_11370))
{var statearr_11417_11454 = state_11400__$1;(statearr_11417_11454[1] = 14);
} else
{var statearr_11418_11455 = state_11400__$1;(statearr_11418_11455[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 12))
{var inst_11379 = (state_11400[17]);var inst_11365 = (state_11400[15]);var inst_11360 = (state_11400[14]);var inst_11379__$1 = inst_11360.call(null,inst_11365);var state_11400__$1 = (function (){var statearr_11419 = state_11400;(statearr_11419[17] = inst_11379__$1);
return statearr_11419;
})();if(cljs.core.truth_(inst_11379__$1))
{var statearr_11420_11456 = state_11400__$1;(statearr_11420_11456[1] = 17);
} else
{var statearr_11421_11457 = state_11400__$1;(statearr_11421_11457[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 13))
{var inst_11396 = (state_11400[2]);var state_11400__$1 = state_11400;var statearr_11422_11458 = state_11400__$1;(statearr_11422_11458[2] = inst_11396);
(statearr_11422_11458[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 14))
{var inst_11365 = (state_11400[15]);var inst_11372 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11365);var state_11400__$1 = state_11400;var statearr_11423_11459 = state_11400__$1;(statearr_11423_11459[2] = inst_11372);
(statearr_11423_11459[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 15))
{var state_11400__$1 = state_11400;var statearr_11424_11460 = state_11400__$1;(statearr_11424_11460[2] = null);
(statearr_11424_11460[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 16))
{var inst_11375 = (state_11400[2]);var inst_11376 = calc_state.call(null);var inst_11349 = inst_11376;var state_11400__$1 = (function (){var statearr_11425 = state_11400;(statearr_11425[18] = inst_11375);
(statearr_11425[11] = inst_11349);
return statearr_11425;
})();var statearr_11426_11461 = state_11400__$1;(statearr_11426_11461[2] = null);
(statearr_11426_11461[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 17))
{var inst_11379 = (state_11400[17]);var state_11400__$1 = state_11400;var statearr_11427_11462 = state_11400__$1;(statearr_11427_11462[2] = inst_11379);
(statearr_11427_11462[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 18))
{var inst_11365 = (state_11400[15]);var inst_11359 = (state_11400[13]);var inst_11360 = (state_11400[14]);var inst_11382 = cljs.core.empty_QMARK_.call(null,inst_11360);var inst_11383 = inst_11359.call(null,inst_11365);var inst_11384 = cljs.core.not.call(null,inst_11383);var inst_11385 = (inst_11382) && (inst_11384);var state_11400__$1 = state_11400;var statearr_11428_11463 = state_11400__$1;(statearr_11428_11463[2] = inst_11385);
(statearr_11428_11463[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 19))
{var inst_11387 = (state_11400[2]);var state_11400__$1 = state_11400;if(cljs.core.truth_(inst_11387))
{var statearr_11429_11464 = state_11400__$1;(statearr_11429_11464[1] = 20);
} else
{var statearr_11430_11465 = state_11400__$1;(statearr_11430_11465[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 20))
{var inst_11364 = (state_11400[16]);var state_11400__$1 = state_11400;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11400__$1,23,out,inst_11364);
} else
{if((state_val_11401 === 21))
{var state_11400__$1 = state_11400;var statearr_11431_11466 = state_11400__$1;(statearr_11431_11466[2] = null);
(statearr_11431_11466[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 22))
{var inst_11357 = (state_11400[12]);var inst_11393 = (state_11400[2]);var inst_11349 = inst_11357;var state_11400__$1 = (function (){var statearr_11432 = state_11400;(statearr_11432[19] = inst_11393);
(statearr_11432[11] = inst_11349);
return statearr_11432;
})();var statearr_11433_11467 = state_11400__$1;(statearr_11433_11467[2] = null);
(statearr_11433_11467[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11401 === 23))
{var inst_11390 = (state_11400[2]);var state_11400__$1 = state_11400;var statearr_11434_11468 = state_11400__$1;(statearr_11434_11468[2] = inst_11390);
(statearr_11434_11468[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_11438 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11438[0] = state_machine__5507__auto__);
(statearr_11438[1] = 1);
return statearr_11438;
});
var state_machine__5507__auto____1 = (function (state_11400){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11400);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11439){if((e11439 instanceof Object))
{var ex__5510__auto__ = e11439;var statearr_11440_11469 = state_11400;(statearr_11440_11469[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11400);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11439;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11470 = state_11400;
state_11400 = G__11470;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11400){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11400);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11441 = f__5522__auto__.call(null);(statearr_11441[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11442);
return statearr_11441;
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
cljs.core.async.Pub = (function (){var obj11472 = {};return obj11472;
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
return (function (p1__11473_SHARP_){if(cljs.core.truth_(p1__11473_SHARP_.call(null,topic)))
{return p1__11473_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11473_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11598 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11598 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11599){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11599 = meta11599;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11598.cljs$lang$type = true;
cljs.core.async.t11598.cljs$lang$ctorStr = "cljs.core.async/t11598";
cljs.core.async.t11598.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11598");
});})(mults,ensure_mult))
;
cljs.core.async.t11598.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11598.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11598.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11598.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11598.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11598.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11598.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11598.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11600){var self__ = this;
var _11600__$1 = this;return self__.meta11599;
});})(mults,ensure_mult))
;
cljs.core.async.t11598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11600,meta11599__$1){var self__ = this;
var _11600__$1 = this;return (new cljs.core.async.t11598(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11599__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11598 = ((function (mults,ensure_mult){
return (function __GT_t11598(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11599){return (new cljs.core.async.t11598(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11599));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11598(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___11722 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11674){var state_val_11675 = (state_11674[1]);if((state_val_11675 === 1))
{var state_11674__$1 = state_11674;var statearr_11676_11723 = state_11674__$1;(statearr_11676_11723[2] = null);
(statearr_11676_11723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 2))
{var state_11674__$1 = state_11674;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11674__$1,4,ch);
} else
{if((state_val_11675 === 3))
{var inst_11672 = (state_11674[2]);var state_11674__$1 = state_11674;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11674__$1,inst_11672);
} else
{if((state_val_11675 === 4))
{var inst_11603 = (state_11674[7]);var inst_11603__$1 = (state_11674[2]);var inst_11604 = (inst_11603__$1 == null);var state_11674__$1 = (function (){var statearr_11677 = state_11674;(statearr_11677[7] = inst_11603__$1);
return statearr_11677;
})();if(cljs.core.truth_(inst_11604))
{var statearr_11678_11724 = state_11674__$1;(statearr_11678_11724[1] = 5);
} else
{var statearr_11679_11725 = state_11674__$1;(statearr_11679_11725[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 5))
{var inst_11610 = cljs.core.deref.call(null,mults);var inst_11611 = cljs.core.vals.call(null,inst_11610);var inst_11612 = cljs.core.seq.call(null,inst_11611);var inst_11613 = inst_11612;var inst_11614 = null;var inst_11615 = 0;var inst_11616 = 0;var state_11674__$1 = (function (){var statearr_11680 = state_11674;(statearr_11680[8] = inst_11613);
(statearr_11680[9] = inst_11615);
(statearr_11680[10] = inst_11614);
(statearr_11680[11] = inst_11616);
return statearr_11680;
})();var statearr_11681_11726 = state_11674__$1;(statearr_11681_11726[2] = null);
(statearr_11681_11726[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 6))
{var inst_11653 = (state_11674[12]);var inst_11651 = (state_11674[13]);var inst_11603 = (state_11674[7]);var inst_11651__$1 = topic_fn.call(null,inst_11603);var inst_11652 = cljs.core.deref.call(null,mults);var inst_11653__$1 = cljs.core.get.call(null,inst_11652,inst_11651__$1);var state_11674__$1 = (function (){var statearr_11682 = state_11674;(statearr_11682[12] = inst_11653__$1);
(statearr_11682[13] = inst_11651__$1);
return statearr_11682;
})();if(cljs.core.truth_(inst_11653__$1))
{var statearr_11683_11727 = state_11674__$1;(statearr_11683_11727[1] = 19);
} else
{var statearr_11684_11728 = state_11674__$1;(statearr_11684_11728[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 7))
{var inst_11670 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11685_11729 = state_11674__$1;(statearr_11685_11729[2] = inst_11670);
(statearr_11685_11729[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 8))
{var inst_11615 = (state_11674[9]);var inst_11616 = (state_11674[11]);var inst_11618 = (inst_11616 < inst_11615);var inst_11619 = inst_11618;var state_11674__$1 = state_11674;if(cljs.core.truth_(inst_11619))
{var statearr_11689_11730 = state_11674__$1;(statearr_11689_11730[1] = 10);
} else
{var statearr_11690_11731 = state_11674__$1;(statearr_11690_11731[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 9))
{var inst_11649 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11691_11732 = state_11674__$1;(statearr_11691_11732[2] = inst_11649);
(statearr_11691_11732[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 10))
{var inst_11613 = (state_11674[8]);var inst_11615 = (state_11674[9]);var inst_11614 = (state_11674[10]);var inst_11616 = (state_11674[11]);var inst_11621 = cljs.core._nth.call(null,inst_11614,inst_11616);var inst_11622 = cljs.core.async.muxch_STAR_.call(null,inst_11621);var inst_11623 = cljs.core.async.close_BANG_.call(null,inst_11622);var inst_11624 = (inst_11616 + 1);var tmp11686 = inst_11613;var tmp11687 = inst_11615;var tmp11688 = inst_11614;var inst_11613__$1 = tmp11686;var inst_11614__$1 = tmp11688;var inst_11615__$1 = tmp11687;var inst_11616__$1 = inst_11624;var state_11674__$1 = (function (){var statearr_11692 = state_11674;(statearr_11692[8] = inst_11613__$1);
(statearr_11692[9] = inst_11615__$1);
(statearr_11692[10] = inst_11614__$1);
(statearr_11692[11] = inst_11616__$1);
(statearr_11692[14] = inst_11623);
return statearr_11692;
})();var statearr_11693_11733 = state_11674__$1;(statearr_11693_11733[2] = null);
(statearr_11693_11733[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 11))
{var inst_11627 = (state_11674[15]);var inst_11613 = (state_11674[8]);var inst_11627__$1 = cljs.core.seq.call(null,inst_11613);var state_11674__$1 = (function (){var statearr_11694 = state_11674;(statearr_11694[15] = inst_11627__$1);
return statearr_11694;
})();if(inst_11627__$1)
{var statearr_11695_11734 = state_11674__$1;(statearr_11695_11734[1] = 13);
} else
{var statearr_11696_11735 = state_11674__$1;(statearr_11696_11735[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 12))
{var inst_11647 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11697_11736 = state_11674__$1;(statearr_11697_11736[2] = inst_11647);
(statearr_11697_11736[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 13))
{var inst_11627 = (state_11674[15]);var inst_11629 = cljs.core.chunked_seq_QMARK_.call(null,inst_11627);var state_11674__$1 = state_11674;if(inst_11629)
{var statearr_11698_11737 = state_11674__$1;(statearr_11698_11737[1] = 16);
} else
{var statearr_11699_11738 = state_11674__$1;(statearr_11699_11738[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 14))
{var state_11674__$1 = state_11674;var statearr_11700_11739 = state_11674__$1;(statearr_11700_11739[2] = null);
(statearr_11700_11739[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 15))
{var inst_11645 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11701_11740 = state_11674__$1;(statearr_11701_11740[2] = inst_11645);
(statearr_11701_11740[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 16))
{var inst_11627 = (state_11674[15]);var inst_11631 = cljs.core.chunk_first.call(null,inst_11627);var inst_11632 = cljs.core.chunk_rest.call(null,inst_11627);var inst_11633 = cljs.core.count.call(null,inst_11631);var inst_11613 = inst_11632;var inst_11614 = inst_11631;var inst_11615 = inst_11633;var inst_11616 = 0;var state_11674__$1 = (function (){var statearr_11702 = state_11674;(statearr_11702[8] = inst_11613);
(statearr_11702[9] = inst_11615);
(statearr_11702[10] = inst_11614);
(statearr_11702[11] = inst_11616);
return statearr_11702;
})();var statearr_11703_11741 = state_11674__$1;(statearr_11703_11741[2] = null);
(statearr_11703_11741[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 17))
{var inst_11627 = (state_11674[15]);var inst_11636 = cljs.core.first.call(null,inst_11627);var inst_11637 = cljs.core.async.muxch_STAR_.call(null,inst_11636);var inst_11638 = cljs.core.async.close_BANG_.call(null,inst_11637);var inst_11639 = cljs.core.next.call(null,inst_11627);var inst_11613 = inst_11639;var inst_11614 = null;var inst_11615 = 0;var inst_11616 = 0;var state_11674__$1 = (function (){var statearr_11704 = state_11674;(statearr_11704[8] = inst_11613);
(statearr_11704[16] = inst_11638);
(statearr_11704[9] = inst_11615);
(statearr_11704[10] = inst_11614);
(statearr_11704[11] = inst_11616);
return statearr_11704;
})();var statearr_11705_11742 = state_11674__$1;(statearr_11705_11742[2] = null);
(statearr_11705_11742[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 18))
{var inst_11642 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11706_11743 = state_11674__$1;(statearr_11706_11743[2] = inst_11642);
(statearr_11706_11743[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 19))
{var state_11674__$1 = state_11674;var statearr_11707_11744 = state_11674__$1;(statearr_11707_11744[2] = null);
(statearr_11707_11744[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 20))
{var state_11674__$1 = state_11674;var statearr_11708_11745 = state_11674__$1;(statearr_11708_11745[2] = null);
(statearr_11708_11745[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 21))
{var inst_11667 = (state_11674[2]);var state_11674__$1 = (function (){var statearr_11709 = state_11674;(statearr_11709[17] = inst_11667);
return statearr_11709;
})();var statearr_11710_11746 = state_11674__$1;(statearr_11710_11746[2] = null);
(statearr_11710_11746[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 22))
{var inst_11664 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11711_11747 = state_11674__$1;(statearr_11711_11747[2] = inst_11664);
(statearr_11711_11747[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 23))
{var inst_11651 = (state_11674[13]);var inst_11655 = (state_11674[2]);var inst_11656 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11651);var state_11674__$1 = (function (){var statearr_11712 = state_11674;(statearr_11712[18] = inst_11655);
return statearr_11712;
})();var statearr_11713_11748 = state_11674__$1;(statearr_11713_11748[2] = inst_11656);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11674__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11675 === 24))
{var inst_11653 = (state_11674[12]);var inst_11603 = (state_11674[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11674,23,Object,null,22);var inst_11660 = cljs.core.async.muxch_STAR_.call(null,inst_11653);var state_11674__$1 = state_11674;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11674__$1,25,inst_11660,inst_11603);
} else
{if((state_val_11675 === 25))
{var inst_11662 = (state_11674[2]);var state_11674__$1 = state_11674;var statearr_11714_11749 = state_11674__$1;(statearr_11714_11749[2] = inst_11662);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11674__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_11718 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11718[0] = state_machine__5507__auto__);
(statearr_11718[1] = 1);
return statearr_11718;
});
var state_machine__5507__auto____1 = (function (state_11674){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11674);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11719){if((e11719 instanceof Object))
{var ex__5510__auto__ = e11719;var statearr_11720_11750 = state_11674;(statearr_11720_11750[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11674);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11751 = state_11674;
state_11674 = G__11751;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11674){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11674);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11721 = f__5522__auto__.call(null);(statearr_11721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11722);
return statearr_11721;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___11888 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11858){var state_val_11859 = (state_11858[1]);if((state_val_11859 === 1))
{var state_11858__$1 = state_11858;var statearr_11860_11889 = state_11858__$1;(statearr_11860_11889[2] = null);
(statearr_11860_11889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 2))
{var inst_11821 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11822 = 0;var state_11858__$1 = (function (){var statearr_11861 = state_11858;(statearr_11861[7] = inst_11821);
(statearr_11861[8] = inst_11822);
return statearr_11861;
})();var statearr_11862_11890 = state_11858__$1;(statearr_11862_11890[2] = null);
(statearr_11862_11890[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 3))
{var inst_11856 = (state_11858[2]);var state_11858__$1 = state_11858;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11858__$1,inst_11856);
} else
{if((state_val_11859 === 4))
{var inst_11822 = (state_11858[8]);var inst_11824 = (inst_11822 < cnt);var state_11858__$1 = state_11858;if(cljs.core.truth_(inst_11824))
{var statearr_11863_11891 = state_11858__$1;(statearr_11863_11891[1] = 6);
} else
{var statearr_11864_11892 = state_11858__$1;(statearr_11864_11892[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 5))
{var inst_11842 = (state_11858[2]);var state_11858__$1 = (function (){var statearr_11865 = state_11858;(statearr_11865[9] = inst_11842);
return statearr_11865;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11858__$1,12,dchan);
} else
{if((state_val_11859 === 6))
{var state_11858__$1 = state_11858;var statearr_11866_11893 = state_11858__$1;(statearr_11866_11893[2] = null);
(statearr_11866_11893[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 7))
{var state_11858__$1 = state_11858;var statearr_11867_11894 = state_11858__$1;(statearr_11867_11894[2] = null);
(statearr_11867_11894[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 8))
{var inst_11840 = (state_11858[2]);var state_11858__$1 = state_11858;var statearr_11868_11895 = state_11858__$1;(statearr_11868_11895[2] = inst_11840);
(statearr_11868_11895[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 9))
{var inst_11822 = (state_11858[8]);var inst_11835 = (state_11858[2]);var inst_11836 = (inst_11822 + 1);var inst_11822__$1 = inst_11836;var state_11858__$1 = (function (){var statearr_11869 = state_11858;(statearr_11869[10] = inst_11835);
(statearr_11869[8] = inst_11822__$1);
return statearr_11869;
})();var statearr_11870_11896 = state_11858__$1;(statearr_11870_11896[2] = null);
(statearr_11870_11896[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 10))
{var inst_11826 = (state_11858[2]);var inst_11827 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11858__$1 = (function (){var statearr_11871 = state_11858;(statearr_11871[11] = inst_11826);
return statearr_11871;
})();var statearr_11872_11897 = state_11858__$1;(statearr_11872_11897[2] = inst_11827);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11858__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 11))
{var inst_11822 = (state_11858[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11858,10,Object,null,9);var inst_11831 = chs__$1.call(null,inst_11822);var inst_11832 = done.call(null,inst_11822);var inst_11833 = cljs.core.async.take_BANG_.call(null,inst_11831,inst_11832);var state_11858__$1 = state_11858;var statearr_11873_11898 = state_11858__$1;(statearr_11873_11898[2] = inst_11833);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11858__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 12))
{var inst_11844 = (state_11858[12]);var inst_11844__$1 = (state_11858[2]);var inst_11845 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11844__$1);var state_11858__$1 = (function (){var statearr_11874 = state_11858;(statearr_11874[12] = inst_11844__$1);
return statearr_11874;
})();if(cljs.core.truth_(inst_11845))
{var statearr_11875_11899 = state_11858__$1;(statearr_11875_11899[1] = 13);
} else
{var statearr_11876_11900 = state_11858__$1;(statearr_11876_11900[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 13))
{var inst_11847 = cljs.core.async.close_BANG_.call(null,out);var state_11858__$1 = state_11858;var statearr_11877_11901 = state_11858__$1;(statearr_11877_11901[2] = inst_11847);
(statearr_11877_11901[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 14))
{var inst_11844 = (state_11858[12]);var inst_11849 = cljs.core.apply.call(null,f,inst_11844);var state_11858__$1 = state_11858;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11858__$1,16,out,inst_11849);
} else
{if((state_val_11859 === 15))
{var inst_11854 = (state_11858[2]);var state_11858__$1 = state_11858;var statearr_11878_11902 = state_11858__$1;(statearr_11878_11902[2] = inst_11854);
(statearr_11878_11902[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11859 === 16))
{var inst_11851 = (state_11858[2]);var state_11858__$1 = (function (){var statearr_11879 = state_11858;(statearr_11879[13] = inst_11851);
return statearr_11879;
})();var statearr_11880_11903 = state_11858__$1;(statearr_11880_11903[2] = null);
(statearr_11880_11903[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_11884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11884[0] = state_machine__5507__auto__);
(statearr_11884[1] = 1);
return statearr_11884;
});
var state_machine__5507__auto____1 = (function (state_11858){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11858);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e11885){if((e11885 instanceof Object))
{var ex__5510__auto__ = e11885;var statearr_11886_11904 = state_11858;(statearr_11886_11904[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11858);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e11885;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__11905 = state_11858;
state_11858 = G__11905;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11858){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11858);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_11887 = f__5522__auto__.call(null);(statearr_11887[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___11888);
return statearr_11887;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12013 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_11989){var state_val_11990 = (state_11989[1]);if((state_val_11990 === 1))
{var inst_11960 = cljs.core.vec.call(null,chs);var inst_11961 = inst_11960;var state_11989__$1 = (function (){var statearr_11991 = state_11989;(statearr_11991[7] = inst_11961);
return statearr_11991;
})();var statearr_11992_12014 = state_11989__$1;(statearr_11992_12014[2] = null);
(statearr_11992_12014[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11990 === 2))
{var inst_11961 = (state_11989[7]);var inst_11963 = cljs.core.count.call(null,inst_11961);var inst_11964 = (inst_11963 > 0);var state_11989__$1 = state_11989;if(cljs.core.truth_(inst_11964))
{var statearr_11993_12015 = state_11989__$1;(statearr_11993_12015[1] = 4);
} else
{var statearr_11994_12016 = state_11989__$1;(statearr_11994_12016[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11990 === 3))
{var inst_11987 = (state_11989[2]);var state_11989__$1 = state_11989;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11989__$1,inst_11987);
} else
{if((state_val_11990 === 4))
{var inst_11961 = (state_11989[7]);var state_11989__$1 = state_11989;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11989__$1,7,inst_11961);
} else
{if((state_val_11990 === 5))
{var inst_11983 = cljs.core.async.close_BANG_.call(null,out);var state_11989__$1 = state_11989;var statearr_11995_12017 = state_11989__$1;(statearr_11995_12017[2] = inst_11983);
(statearr_11995_12017[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11990 === 6))
{var inst_11985 = (state_11989[2]);var state_11989__$1 = state_11989;var statearr_11996_12018 = state_11989__$1;(statearr_11996_12018[2] = inst_11985);
(statearr_11996_12018[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11990 === 7))
{var inst_11969 = (state_11989[8]);var inst_11968 = (state_11989[9]);var inst_11968__$1 = (state_11989[2]);var inst_11969__$1 = cljs.core.nth.call(null,inst_11968__$1,0,null);var inst_11970 = cljs.core.nth.call(null,inst_11968__$1,1,null);var inst_11971 = (inst_11969__$1 == null);var state_11989__$1 = (function (){var statearr_11997 = state_11989;(statearr_11997[10] = inst_11970);
(statearr_11997[8] = inst_11969__$1);
(statearr_11997[9] = inst_11968__$1);
return statearr_11997;
})();if(cljs.core.truth_(inst_11971))
{var statearr_11998_12019 = state_11989__$1;(statearr_11998_12019[1] = 8);
} else
{var statearr_11999_12020 = state_11989__$1;(statearr_11999_12020[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11990 === 8))
{var inst_11970 = (state_11989[10]);var inst_11969 = (state_11989[8]);var inst_11968 = (state_11989[9]);var inst_11961 = (state_11989[7]);var inst_11973 = (function (){var c = inst_11970;var v = inst_11969;var vec__11966 = inst_11968;var cs = inst_11961;return ((function (c,v,vec__11966,cs,inst_11970,inst_11969,inst_11968,inst_11961,state_val_11990){
return (function (p1__11906_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11906_SHARP_);
});
;})(c,v,vec__11966,cs,inst_11970,inst_11969,inst_11968,inst_11961,state_val_11990))
})();var inst_11974 = cljs.core.filterv.call(null,inst_11973,inst_11961);var inst_11961__$1 = inst_11974;var state_11989__$1 = (function (){var statearr_12000 = state_11989;(statearr_12000[7] = inst_11961__$1);
return statearr_12000;
})();var statearr_12001_12021 = state_11989__$1;(statearr_12001_12021[2] = null);
(statearr_12001_12021[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11990 === 9))
{var inst_11969 = (state_11989[8]);var state_11989__$1 = state_11989;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11989__$1,11,out,inst_11969);
} else
{if((state_val_11990 === 10))
{var inst_11981 = (state_11989[2]);var state_11989__$1 = state_11989;var statearr_12003_12022 = state_11989__$1;(statearr_12003_12022[2] = inst_11981);
(statearr_12003_12022[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_11990 === 11))
{var inst_11961 = (state_11989[7]);var inst_11978 = (state_11989[2]);var tmp12002 = inst_11961;var inst_11961__$1 = tmp12002;var state_11989__$1 = (function (){var statearr_12004 = state_11989;(statearr_12004[7] = inst_11961__$1);
(statearr_12004[11] = inst_11978);
return statearr_12004;
})();var statearr_12005_12023 = state_11989__$1;(statearr_12005_12023[2] = null);
(statearr_12005_12023[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12009 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12009[0] = state_machine__5507__auto__);
(statearr_12009[1] = 1);
return statearr_12009;
});
var state_machine__5507__auto____1 = (function (state_11989){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_11989);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12010){if((e12010 instanceof Object))
{var ex__5510__auto__ = e12010;var statearr_12011_12024 = state_11989;(statearr_12011_12024[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11989);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12010;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12025 = state_11989;
state_11989 = G__12025;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_11989){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_11989);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12012 = f__5522__auto__.call(null);(statearr_12012[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12013);
return statearr_12012;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12118 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12095){var state_val_12096 = (state_12095[1]);if((state_val_12096 === 1))
{var inst_12072 = 0;var state_12095__$1 = (function (){var statearr_12097 = state_12095;(statearr_12097[7] = inst_12072);
return statearr_12097;
})();var statearr_12098_12119 = state_12095__$1;(statearr_12098_12119[2] = null);
(statearr_12098_12119[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12096 === 2))
{var inst_12072 = (state_12095[7]);var inst_12074 = (inst_12072 < n);var state_12095__$1 = state_12095;if(cljs.core.truth_(inst_12074))
{var statearr_12099_12120 = state_12095__$1;(statearr_12099_12120[1] = 4);
} else
{var statearr_12100_12121 = state_12095__$1;(statearr_12100_12121[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12096 === 3))
{var inst_12092 = (state_12095[2]);var inst_12093 = cljs.core.async.close_BANG_.call(null,out);var state_12095__$1 = (function (){var statearr_12101 = state_12095;(statearr_12101[8] = inst_12092);
return statearr_12101;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12095__$1,inst_12093);
} else
{if((state_val_12096 === 4))
{var state_12095__$1 = state_12095;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12095__$1,7,ch);
} else
{if((state_val_12096 === 5))
{var state_12095__$1 = state_12095;var statearr_12102_12122 = state_12095__$1;(statearr_12102_12122[2] = null);
(statearr_12102_12122[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12096 === 6))
{var inst_12090 = (state_12095[2]);var state_12095__$1 = state_12095;var statearr_12103_12123 = state_12095__$1;(statearr_12103_12123[2] = inst_12090);
(statearr_12103_12123[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12096 === 7))
{var inst_12077 = (state_12095[9]);var inst_12077__$1 = (state_12095[2]);var inst_12078 = (inst_12077__$1 == null);var inst_12079 = cljs.core.not.call(null,inst_12078);var state_12095__$1 = (function (){var statearr_12104 = state_12095;(statearr_12104[9] = inst_12077__$1);
return statearr_12104;
})();if(inst_12079)
{var statearr_12105_12124 = state_12095__$1;(statearr_12105_12124[1] = 8);
} else
{var statearr_12106_12125 = state_12095__$1;(statearr_12106_12125[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12096 === 8))
{var inst_12077 = (state_12095[9]);var state_12095__$1 = state_12095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12095__$1,11,out,inst_12077);
} else
{if((state_val_12096 === 9))
{var state_12095__$1 = state_12095;var statearr_12107_12126 = state_12095__$1;(statearr_12107_12126[2] = null);
(statearr_12107_12126[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12096 === 10))
{var inst_12087 = (state_12095[2]);var state_12095__$1 = state_12095;var statearr_12108_12127 = state_12095__$1;(statearr_12108_12127[2] = inst_12087);
(statearr_12108_12127[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12096 === 11))
{var inst_12072 = (state_12095[7]);var inst_12082 = (state_12095[2]);var inst_12083 = (inst_12072 + 1);var inst_12072__$1 = inst_12083;var state_12095__$1 = (function (){var statearr_12109 = state_12095;(statearr_12109[7] = inst_12072__$1);
(statearr_12109[10] = inst_12082);
return statearr_12109;
})();var statearr_12110_12128 = state_12095__$1;(statearr_12110_12128[2] = null);
(statearr_12110_12128[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12114 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12114[0] = state_machine__5507__auto__);
(statearr_12114[1] = 1);
return statearr_12114;
});
var state_machine__5507__auto____1 = (function (state_12095){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12095);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12115){if((e12115 instanceof Object))
{var ex__5510__auto__ = e12115;var statearr_12116_12129 = state_12095;(statearr_12116_12129[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12115;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12130 = state_12095;
state_12095 = G__12130;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12095){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12117 = f__5522__auto__.call(null);(statearr_12117[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12118);
return statearr_12117;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12227 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12202){var state_val_12203 = (state_12202[1]);if((state_val_12203 === 1))
{var inst_12179 = null;var state_12202__$1 = (function (){var statearr_12204 = state_12202;(statearr_12204[7] = inst_12179);
return statearr_12204;
})();var statearr_12205_12228 = state_12202__$1;(statearr_12205_12228[2] = null);
(statearr_12205_12228[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12203 === 2))
{var state_12202__$1 = state_12202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12202__$1,4,ch);
} else
{if((state_val_12203 === 3))
{var inst_12199 = (state_12202[2]);var inst_12200 = cljs.core.async.close_BANG_.call(null,out);var state_12202__$1 = (function (){var statearr_12206 = state_12202;(statearr_12206[8] = inst_12199);
return statearr_12206;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12202__$1,inst_12200);
} else
{if((state_val_12203 === 4))
{var inst_12182 = (state_12202[9]);var inst_12182__$1 = (state_12202[2]);var inst_12183 = (inst_12182__$1 == null);var inst_12184 = cljs.core.not.call(null,inst_12183);var state_12202__$1 = (function (){var statearr_12207 = state_12202;(statearr_12207[9] = inst_12182__$1);
return statearr_12207;
})();if(inst_12184)
{var statearr_12208_12229 = state_12202__$1;(statearr_12208_12229[1] = 5);
} else
{var statearr_12209_12230 = state_12202__$1;(statearr_12209_12230[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12203 === 5))
{var inst_12182 = (state_12202[9]);var inst_12179 = (state_12202[7]);var inst_12186 = cljs.core._EQ_.call(null,inst_12182,inst_12179);var state_12202__$1 = state_12202;if(inst_12186)
{var statearr_12210_12231 = state_12202__$1;(statearr_12210_12231[1] = 8);
} else
{var statearr_12211_12232 = state_12202__$1;(statearr_12211_12232[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12203 === 6))
{var state_12202__$1 = state_12202;var statearr_12213_12233 = state_12202__$1;(statearr_12213_12233[2] = null);
(statearr_12213_12233[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12203 === 7))
{var inst_12197 = (state_12202[2]);var state_12202__$1 = state_12202;var statearr_12214_12234 = state_12202__$1;(statearr_12214_12234[2] = inst_12197);
(statearr_12214_12234[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12203 === 8))
{var inst_12179 = (state_12202[7]);var tmp12212 = inst_12179;var inst_12179__$1 = tmp12212;var state_12202__$1 = (function (){var statearr_12215 = state_12202;(statearr_12215[7] = inst_12179__$1);
return statearr_12215;
})();var statearr_12216_12235 = state_12202__$1;(statearr_12216_12235[2] = null);
(statearr_12216_12235[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12203 === 9))
{var inst_12182 = (state_12202[9]);var state_12202__$1 = state_12202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12202__$1,11,out,inst_12182);
} else
{if((state_val_12203 === 10))
{var inst_12194 = (state_12202[2]);var state_12202__$1 = state_12202;var statearr_12217_12236 = state_12202__$1;(statearr_12217_12236[2] = inst_12194);
(statearr_12217_12236[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12203 === 11))
{var inst_12182 = (state_12202[9]);var inst_12191 = (state_12202[2]);var inst_12179 = inst_12182;var state_12202__$1 = (function (){var statearr_12218 = state_12202;(statearr_12218[10] = inst_12191);
(statearr_12218[7] = inst_12179);
return statearr_12218;
})();var statearr_12219_12237 = state_12202__$1;(statearr_12219_12237[2] = null);
(statearr_12219_12237[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12223 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_12223[0] = state_machine__5507__auto__);
(statearr_12223[1] = 1);
return statearr_12223;
});
var state_machine__5507__auto____1 = (function (state_12202){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12202);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12224){if((e12224 instanceof Object))
{var ex__5510__auto__ = e12224;var statearr_12225_12238 = state_12202;(statearr_12225_12238[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12202);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12224;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12239 = state_12202;
state_12202 = G__12239;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12202){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12226 = f__5522__auto__.call(null);(statearr_12226[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12227);
return statearr_12226;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12374 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12344){var state_val_12345 = (state_12344[1]);if((state_val_12345 === 1))
{var inst_12307 = (new Array(n));var inst_12308 = inst_12307;var inst_12309 = 0;var state_12344__$1 = (function (){var statearr_12346 = state_12344;(statearr_12346[7] = inst_12308);
(statearr_12346[8] = inst_12309);
return statearr_12346;
})();var statearr_12347_12375 = state_12344__$1;(statearr_12347_12375[2] = null);
(statearr_12347_12375[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 2))
{var state_12344__$1 = state_12344;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12344__$1,4,ch);
} else
{if((state_val_12345 === 3))
{var inst_12342 = (state_12344[2]);var state_12344__$1 = state_12344;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12344__$1,inst_12342);
} else
{if((state_val_12345 === 4))
{var inst_12312 = (state_12344[9]);var inst_12312__$1 = (state_12344[2]);var inst_12313 = (inst_12312__$1 == null);var inst_12314 = cljs.core.not.call(null,inst_12313);var state_12344__$1 = (function (){var statearr_12348 = state_12344;(statearr_12348[9] = inst_12312__$1);
return statearr_12348;
})();if(inst_12314)
{var statearr_12349_12376 = state_12344__$1;(statearr_12349_12376[1] = 5);
} else
{var statearr_12350_12377 = state_12344__$1;(statearr_12350_12377[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 5))
{var inst_12312 = (state_12344[9]);var inst_12308 = (state_12344[7]);var inst_12309 = (state_12344[8]);var inst_12317 = (state_12344[10]);var inst_12316 = (inst_12308[inst_12309] = inst_12312);var inst_12317__$1 = (inst_12309 + 1);var inst_12318 = (inst_12317__$1 < n);var state_12344__$1 = (function (){var statearr_12351 = state_12344;(statearr_12351[11] = inst_12316);
(statearr_12351[10] = inst_12317__$1);
return statearr_12351;
})();if(cljs.core.truth_(inst_12318))
{var statearr_12352_12378 = state_12344__$1;(statearr_12352_12378[1] = 8);
} else
{var statearr_12353_12379 = state_12344__$1;(statearr_12353_12379[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 6))
{var inst_12309 = (state_12344[8]);var inst_12330 = (inst_12309 > 0);var state_12344__$1 = state_12344;if(cljs.core.truth_(inst_12330))
{var statearr_12355_12380 = state_12344__$1;(statearr_12355_12380[1] = 12);
} else
{var statearr_12356_12381 = state_12344__$1;(statearr_12356_12381[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 7))
{var inst_12340 = (state_12344[2]);var state_12344__$1 = state_12344;var statearr_12357_12382 = state_12344__$1;(statearr_12357_12382[2] = inst_12340);
(statearr_12357_12382[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 8))
{var inst_12308 = (state_12344[7]);var inst_12317 = (state_12344[10]);var tmp12354 = inst_12308;var inst_12308__$1 = tmp12354;var inst_12309 = inst_12317;var state_12344__$1 = (function (){var statearr_12358 = state_12344;(statearr_12358[7] = inst_12308__$1);
(statearr_12358[8] = inst_12309);
return statearr_12358;
})();var statearr_12359_12383 = state_12344__$1;(statearr_12359_12383[2] = null);
(statearr_12359_12383[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 9))
{var inst_12308 = (state_12344[7]);var inst_12322 = cljs.core.vec.call(null,inst_12308);var state_12344__$1 = state_12344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12344__$1,11,out,inst_12322);
} else
{if((state_val_12345 === 10))
{var inst_12328 = (state_12344[2]);var state_12344__$1 = state_12344;var statearr_12360_12384 = state_12344__$1;(statearr_12360_12384[2] = inst_12328);
(statearr_12360_12384[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 11))
{var inst_12324 = (state_12344[2]);var inst_12325 = (new Array(n));var inst_12308 = inst_12325;var inst_12309 = 0;var state_12344__$1 = (function (){var statearr_12361 = state_12344;(statearr_12361[7] = inst_12308);
(statearr_12361[8] = inst_12309);
(statearr_12361[12] = inst_12324);
return statearr_12361;
})();var statearr_12362_12385 = state_12344__$1;(statearr_12362_12385[2] = null);
(statearr_12362_12385[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 12))
{var inst_12308 = (state_12344[7]);var inst_12332 = cljs.core.vec.call(null,inst_12308);var state_12344__$1 = state_12344;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12344__$1,15,out,inst_12332);
} else
{if((state_val_12345 === 13))
{var state_12344__$1 = state_12344;var statearr_12363_12386 = state_12344__$1;(statearr_12363_12386[2] = null);
(statearr_12363_12386[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 14))
{var inst_12337 = (state_12344[2]);var inst_12338 = cljs.core.async.close_BANG_.call(null,out);var state_12344__$1 = (function (){var statearr_12364 = state_12344;(statearr_12364[13] = inst_12337);
return statearr_12364;
})();var statearr_12365_12387 = state_12344__$1;(statearr_12365_12387[2] = inst_12338);
(statearr_12365_12387[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12345 === 15))
{var inst_12334 = (state_12344[2]);var state_12344__$1 = state_12344;var statearr_12366_12388 = state_12344__$1;(statearr_12366_12388[2] = inst_12334);
(statearr_12366_12388[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_12370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12370[0] = state_machine__5507__auto__);
(statearr_12370[1] = 1);
return statearr_12370;
});
var state_machine__5507__auto____1 = (function (state_12344){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12344);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12371){if((e12371 instanceof Object))
{var ex__5510__auto__ = e12371;var statearr_12372_12389 = state_12344;(statearr_12372_12389[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12344);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12371;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12390 = state_12344;
state_12344 = G__12390;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12344){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12373 = f__5522__auto__.call(null);(statearr_12373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12374);
return statearr_12373;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12533 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12503){var state_val_12504 = (state_12503[1]);if((state_val_12504 === 1))
{var inst_12462 = [];var inst_12463 = inst_12462;var inst_12464 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_12503__$1 = (function (){var statearr_12505 = state_12503;(statearr_12505[7] = inst_12463);
(statearr_12505[8] = inst_12464);
return statearr_12505;
})();var statearr_12506_12534 = state_12503__$1;(statearr_12506_12534[2] = null);
(statearr_12506_12534[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 2))
{var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12503__$1,4,ch);
} else
{if((state_val_12504 === 3))
{var inst_12501 = (state_12503[2]);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12503__$1,inst_12501);
} else
{if((state_val_12504 === 4))
{var inst_12467 = (state_12503[9]);var inst_12467__$1 = (state_12503[2]);var inst_12468 = (inst_12467__$1 == null);var inst_12469 = cljs.core.not.call(null,inst_12468);var state_12503__$1 = (function (){var statearr_12507 = state_12503;(statearr_12507[9] = inst_12467__$1);
return statearr_12507;
})();if(inst_12469)
{var statearr_12508_12535 = state_12503__$1;(statearr_12508_12535[1] = 5);
} else
{var statearr_12509_12536 = state_12503__$1;(statearr_12509_12536[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 5))
{var inst_12471 = (state_12503[10]);var inst_12467 = (state_12503[9]);var inst_12464 = (state_12503[8]);var inst_12471__$1 = f.call(null,inst_12467);var inst_12472 = cljs.core._EQ_.call(null,inst_12471__$1,inst_12464);var inst_12473 = cljs.core.keyword_identical_QMARK_.call(null,inst_12464,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_12474 = (inst_12472) || (inst_12473);var state_12503__$1 = (function (){var statearr_12510 = state_12503;(statearr_12510[10] = inst_12471__$1);
return statearr_12510;
})();if(cljs.core.truth_(inst_12474))
{var statearr_12511_12537 = state_12503__$1;(statearr_12511_12537[1] = 8);
} else
{var statearr_12512_12538 = state_12503__$1;(statearr_12512_12538[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 6))
{var inst_12463 = (state_12503[7]);var inst_12488 = inst_12463.length;var inst_12489 = (inst_12488 > 0);var state_12503__$1 = state_12503;if(cljs.core.truth_(inst_12489))
{var statearr_12514_12539 = state_12503__$1;(statearr_12514_12539[1] = 12);
} else
{var statearr_12515_12540 = state_12503__$1;(statearr_12515_12540[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 7))
{var inst_12499 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12516_12541 = state_12503__$1;(statearr_12516_12541[2] = inst_12499);
(statearr_12516_12541[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 8))
{var inst_12463 = (state_12503[7]);var inst_12471 = (state_12503[10]);var inst_12467 = (state_12503[9]);var inst_12476 = inst_12463.push(inst_12467);var tmp12513 = inst_12463;var inst_12463__$1 = tmp12513;var inst_12464 = inst_12471;var state_12503__$1 = (function (){var statearr_12517 = state_12503;(statearr_12517[7] = inst_12463__$1);
(statearr_12517[11] = inst_12476);
(statearr_12517[8] = inst_12464);
return statearr_12517;
})();var statearr_12518_12542 = state_12503__$1;(statearr_12518_12542[2] = null);
(statearr_12518_12542[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 9))
{var inst_12463 = (state_12503[7]);var inst_12479 = cljs.core.vec.call(null,inst_12463);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12503__$1,11,out,inst_12479);
} else
{if((state_val_12504 === 10))
{var inst_12486 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12519_12543 = state_12503__$1;(statearr_12519_12543[2] = inst_12486);
(statearr_12519_12543[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 11))
{var inst_12471 = (state_12503[10]);var inst_12467 = (state_12503[9]);var inst_12481 = (state_12503[2]);var inst_12482 = [];var inst_12483 = inst_12482.push(inst_12467);var inst_12463 = inst_12482;var inst_12464 = inst_12471;var state_12503__$1 = (function (){var statearr_12520 = state_12503;(statearr_12520[7] = inst_12463);
(statearr_12520[8] = inst_12464);
(statearr_12520[12] = inst_12483);
(statearr_12520[13] = inst_12481);
return statearr_12520;
})();var statearr_12521_12544 = state_12503__$1;(statearr_12521_12544[2] = null);
(statearr_12521_12544[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 12))
{var inst_12463 = (state_12503[7]);var inst_12491 = cljs.core.vec.call(null,inst_12463);var state_12503__$1 = state_12503;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12503__$1,15,out,inst_12491);
} else
{if((state_val_12504 === 13))
{var state_12503__$1 = state_12503;var statearr_12522_12545 = state_12503__$1;(statearr_12522_12545[2] = null);
(statearr_12522_12545[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 14))
{var inst_12496 = (state_12503[2]);var inst_12497 = cljs.core.async.close_BANG_.call(null,out);var state_12503__$1 = (function (){var statearr_12523 = state_12503;(statearr_12523[14] = inst_12496);
return statearr_12523;
})();var statearr_12524_12546 = state_12503__$1;(statearr_12524_12546[2] = inst_12497);
(statearr_12524_12546[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12504 === 15))
{var inst_12493 = (state_12503[2]);var state_12503__$1 = state_12503;var statearr_12525_12547 = state_12503__$1;(statearr_12525_12547[2] = inst_12493);
(statearr_12525_12547[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_12529 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12529[0] = state_machine__5507__auto__);
(statearr_12529[1] = 1);
return statearr_12529;
});
var state_machine__5507__auto____1 = (function (state_12503){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12503);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12530){if((e12530 instanceof Object))
{var ex__5510__auto__ = e12530;var statearr_12531_12548 = state_12503;(statearr_12531_12548[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12503);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12530;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12549 = state_12503;
state_12503 = G__12549;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12503){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12532 = f__5522__auto__.call(null);(statearr_12532[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12533);
return statearr_12532;
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