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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11911 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11911 = (function (f,fn_handler,meta11912){
this.f = f;
this.fn_handler = fn_handler;
this.meta11912 = meta11912;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11911.cljs$lang$type = true;
cljs.core.async.t11911.cljs$lang$ctorStr = "cljs.core.async/t11911";
cljs.core.async.t11911.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11911");
});
cljs.core.async.t11911.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11911.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11911.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11911.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11913){var self__ = this;
var _11913__$1 = this;return self__.meta11912;
});
cljs.core.async.t11911.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11913,meta11912__$1){var self__ = this;
var _11913__$1 = this;return (new cljs.core.async.t11911(self__.f,self__.fn_handler,meta11912__$1));
});
cljs.core.async.__GT_t11911 = (function __GT_t11911(f__$1,fn_handler__$1,meta11912){return (new cljs.core.async.t11911(f__$1,fn_handler__$1,meta11912));
});
}
return (new cljs.core.async.t11911(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11915 = buff;if(G__11915)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__11915.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11915.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11915);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11915);
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
{var val_11916 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11916);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11916);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___11917 = n;var x_11918 = 0;while(true){
if((x_11918 < n__4248__auto___11917))
{(a[x_11918] = 0);
{
var G__11919 = (x_11918 + 1);
x_11918 = G__11919;
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
var G__11920 = (i + 1);
i = G__11920;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11924 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11924 = (function (flag,alt_flag,meta11925){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11925 = meta11925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11924.cljs$lang$type = true;
cljs.core.async.t11924.cljs$lang$ctorStr = "cljs.core.async/t11924";
cljs.core.async.t11924.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11924");
});
cljs.core.async.t11924.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11924.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11924.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11926){var self__ = this;
var _11926__$1 = this;return self__.meta11925;
});
cljs.core.async.t11924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11926,meta11925__$1){var self__ = this;
var _11926__$1 = this;return (new cljs.core.async.t11924(self__.flag,self__.alt_flag,meta11925__$1));
});
cljs.core.async.__GT_t11924 = (function __GT_t11924(flag__$1,alt_flag__$1,meta11925){return (new cljs.core.async.t11924(flag__$1,alt_flag__$1,meta11925));
});
}
return (new cljs.core.async.t11924(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11930 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11930 = (function (cb,flag,alt_handler,meta11931){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11931 = meta11931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11930.cljs$lang$type = true;
cljs.core.async.t11930.cljs$lang$ctorStr = "cljs.core.async/t11930";
cljs.core.async.t11930.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11930");
});
cljs.core.async.t11930.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11930.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11930.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11930.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11932){var self__ = this;
var _11932__$1 = this;return self__.meta11931;
});
cljs.core.async.t11930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11932,meta11931__$1){var self__ = this;
var _11932__$1 = this;return (new cljs.core.async.t11930(self__.cb,self__.flag,self__.alt_handler,meta11931__$1));
});
cljs.core.async.__GT_t11930 = (function __GT_t11930(cb__$1,flag__$1,alt_handler__$1,meta11931){return (new cljs.core.async.t11930(cb__$1,flag__$1,alt_handler__$1,meta11931));
});
}
return (new cljs.core.async.t11930(cb,flag,alt_handler,null));
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
return (function (p1__11933_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11933_SHARP_,port], null));
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
var G__11934 = (i + 1);
i = G__11934;
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
var alts_BANG___delegate = function (ports,p__11935){var map__11937 = p__11935;var map__11937__$1 = ((cljs.core.seq_QMARK_.call(null,map__11937))?cljs.core.apply.call(null,cljs.core.hash_map,map__11937):map__11937);var opts = map__11937__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11935 = null;if (arguments.length > 1) {
  p__11935 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11935);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11938){
var ports = cljs.core.first(arglist__11938);
var p__11935 = cljs.core.rest(arglist__11938);
return alts_BANG___delegate(ports,p__11935);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11946 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11946 = (function (ch,f,map_LT_,meta11947){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11947 = meta11947;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11946.cljs$lang$type = true;
cljs.core.async.t11946.cljs$lang$ctorStr = "cljs.core.async/t11946";
cljs.core.async.t11946.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11946");
});
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11949 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11949 = (function (fn1,_,meta11947,ch,f,map_LT_,meta11950){
this.fn1 = fn1;
this._ = _;
this.meta11947 = meta11947;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11950 = meta11950;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11949.cljs$lang$type = true;
cljs.core.async.t11949.cljs$lang$ctorStr = "cljs.core.async/t11949";
cljs.core.async.t11949.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11949");
});
cljs.core.async.t11949.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11949.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11949.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11949.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11939_SHARP_){return f1.call(null,(((p1__11939_SHARP_ == null))?null:self__.f.call(null,p1__11939_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11949.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11951){var self__ = this;
var _11951__$1 = this;return self__.meta11950;
});
cljs.core.async.t11949.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11951,meta11950__$1){var self__ = this;
var _11951__$1 = this;return (new cljs.core.async.t11949(self__.fn1,self__._,self__.meta11947,self__.ch,self__.f,self__.map_LT_,meta11950__$1));
});
cljs.core.async.__GT_t11949 = (function __GT_t11949(fn1__$1,___$2,meta11947__$1,ch__$2,f__$2,map_LT___$2,meta11950){return (new cljs.core.async.t11949(fn1__$1,___$2,meta11947__$1,ch__$2,f__$2,map_LT___$2,meta11950));
});
}
return (new cljs.core.async.t11949(fn1,___$1,self__.meta11947,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11946.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11946.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11948){var self__ = this;
var _11948__$1 = this;return self__.meta11947;
});
cljs.core.async.t11946.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11948,meta11947__$1){var self__ = this;
var _11948__$1 = this;return (new cljs.core.async.t11946(self__.ch,self__.f,self__.map_LT_,meta11947__$1));
});
cljs.core.async.__GT_t11946 = (function __GT_t11946(ch__$1,f__$1,map_LT___$1,meta11947){return (new cljs.core.async.t11946(ch__$1,f__$1,map_LT___$1,meta11947));
});
}
return (new cljs.core.async.t11946(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11955 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11955 = (function (ch,f,map_GT_,meta11956){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11956 = meta11956;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11955.cljs$lang$type = true;
cljs.core.async.t11955.cljs$lang$ctorStr = "cljs.core.async/t11955";
cljs.core.async.t11955.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11955");
});
cljs.core.async.t11955.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11955.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11955.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11955.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11955.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11955.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11955.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11957){var self__ = this;
var _11957__$1 = this;return self__.meta11956;
});
cljs.core.async.t11955.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11957,meta11956__$1){var self__ = this;
var _11957__$1 = this;return (new cljs.core.async.t11955(self__.ch,self__.f,self__.map_GT_,meta11956__$1));
});
cljs.core.async.__GT_t11955 = (function __GT_t11955(ch__$1,f__$1,map_GT___$1,meta11956){return (new cljs.core.async.t11955(ch__$1,f__$1,map_GT___$1,meta11956));
});
}
return (new cljs.core.async.t11955(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11961 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11961 = (function (ch,p,filter_GT_,meta11962){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11962 = meta11962;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11961.cljs$lang$type = true;
cljs.core.async.t11961.cljs$lang$ctorStr = "cljs.core.async/t11961";
cljs.core.async.t11961.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11961");
});
cljs.core.async.t11961.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11961.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11961.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11961.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11961.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11961.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11963){var self__ = this;
var _11963__$1 = this;return self__.meta11962;
});
cljs.core.async.t11961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11963,meta11962__$1){var self__ = this;
var _11963__$1 = this;return (new cljs.core.async.t11961(self__.ch,self__.p,self__.filter_GT_,meta11962__$1));
});
cljs.core.async.__GT_t11961 = (function __GT_t11961(ch__$1,p__$1,filter_GT___$1,meta11962){return (new cljs.core.async.t11961(ch__$1,p__$1,filter_GT___$1,meta11962));
});
}
return (new cljs.core.async.t11961(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12046 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12025){var state_val_12026 = (state_12025[1]);if((state_val_12026 === 1))
{var state_12025__$1 = state_12025;var statearr_12027_12047 = state_12025__$1;(statearr_12027_12047[2] = null);
(statearr_12027_12047[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12026 === 2))
{var state_12025__$1 = state_12025;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12025__$1,4,ch);
} else
{if((state_val_12026 === 3))
{var inst_12023 = (state_12025[2]);var state_12025__$1 = state_12025;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12025__$1,inst_12023);
} else
{if((state_val_12026 === 4))
{var inst_12007 = (state_12025[7]);var inst_12007__$1 = (state_12025[2]);var inst_12008 = (inst_12007__$1 == null);var state_12025__$1 = (function (){var statearr_12028 = state_12025;(statearr_12028[7] = inst_12007__$1);
return statearr_12028;
})();if(cljs.core.truth_(inst_12008))
{var statearr_12029_12048 = state_12025__$1;(statearr_12029_12048[1] = 5);
} else
{var statearr_12030_12049 = state_12025__$1;(statearr_12030_12049[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12026 === 5))
{var inst_12010 = cljs.core.async.close_BANG_.call(null,out);var state_12025__$1 = state_12025;var statearr_12031_12050 = state_12025__$1;(statearr_12031_12050[2] = inst_12010);
(statearr_12031_12050[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12026 === 6))
{var inst_12007 = (state_12025[7]);var inst_12012 = p.call(null,inst_12007);var state_12025__$1 = state_12025;if(cljs.core.truth_(inst_12012))
{var statearr_12032_12051 = state_12025__$1;(statearr_12032_12051[1] = 8);
} else
{var statearr_12033_12052 = state_12025__$1;(statearr_12033_12052[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12026 === 7))
{var inst_12021 = (state_12025[2]);var state_12025__$1 = state_12025;var statearr_12034_12053 = state_12025__$1;(statearr_12034_12053[2] = inst_12021);
(statearr_12034_12053[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12026 === 8))
{var inst_12007 = (state_12025[7]);var state_12025__$1 = state_12025;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12025__$1,11,out,inst_12007);
} else
{if((state_val_12026 === 9))
{var state_12025__$1 = state_12025;var statearr_12035_12054 = state_12025__$1;(statearr_12035_12054[2] = null);
(statearr_12035_12054[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12026 === 10))
{var inst_12018 = (state_12025[2]);var state_12025__$1 = (function (){var statearr_12036 = state_12025;(statearr_12036[8] = inst_12018);
return statearr_12036;
})();var statearr_12037_12055 = state_12025__$1;(statearr_12037_12055[2] = null);
(statearr_12037_12055[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12026 === 11))
{var inst_12015 = (state_12025[2]);var state_12025__$1 = state_12025;var statearr_12038_12056 = state_12025__$1;(statearr_12038_12056[2] = inst_12015);
(statearr_12038_12056[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12042 = [null,null,null,null,null,null,null,null,null];(statearr_12042[0] = state_machine__5507__auto__);
(statearr_12042[1] = 1);
return statearr_12042;
});
var state_machine__5507__auto____1 = (function (state_12025){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12025);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12043){if((e12043 instanceof Object))
{var ex__5510__auto__ = e12043;var statearr_12044_12057 = state_12025;(statearr_12044_12057[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12025);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12043;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12058 = state_12025;
state_12025 = G__12058;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12025){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12045 = f__5522__auto__.call(null);(statearr_12045[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12046);
return statearr_12045;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12210){var state_val_12211 = (state_12210[1]);if((state_val_12211 === 1))
{var state_12210__$1 = state_12210;var statearr_12212_12249 = state_12210__$1;(statearr_12212_12249[2] = null);
(statearr_12212_12249[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 2))
{var state_12210__$1 = state_12210;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12210__$1,4,in$);
} else
{if((state_val_12211 === 3))
{var inst_12208 = (state_12210[2]);var state_12210__$1 = state_12210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12210__$1,inst_12208);
} else
{if((state_val_12211 === 4))
{var inst_12156 = (state_12210[7]);var inst_12156__$1 = (state_12210[2]);var inst_12157 = (inst_12156__$1 == null);var state_12210__$1 = (function (){var statearr_12213 = state_12210;(statearr_12213[7] = inst_12156__$1);
return statearr_12213;
})();if(cljs.core.truth_(inst_12157))
{var statearr_12214_12250 = state_12210__$1;(statearr_12214_12250[1] = 5);
} else
{var statearr_12215_12251 = state_12210__$1;(statearr_12215_12251[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 5))
{var inst_12159 = cljs.core.async.close_BANG_.call(null,out);var state_12210__$1 = state_12210;var statearr_12216_12252 = state_12210__$1;(statearr_12216_12252[2] = inst_12159);
(statearr_12216_12252[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 6))
{var inst_12156 = (state_12210[7]);var inst_12161 = f.call(null,inst_12156);var inst_12166 = cljs.core.seq.call(null,inst_12161);var inst_12167 = inst_12166;var inst_12168 = null;var inst_12169 = 0;var inst_12170 = 0;var state_12210__$1 = (function (){var statearr_12217 = state_12210;(statearr_12217[8] = inst_12169);
(statearr_12217[9] = inst_12170);
(statearr_12217[10] = inst_12168);
(statearr_12217[11] = inst_12167);
return statearr_12217;
})();var statearr_12218_12253 = state_12210__$1;(statearr_12218_12253[2] = null);
(statearr_12218_12253[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 7))
{var inst_12206 = (state_12210[2]);var state_12210__$1 = state_12210;var statearr_12219_12254 = state_12210__$1;(statearr_12219_12254[2] = inst_12206);
(statearr_12219_12254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 8))
{var inst_12169 = (state_12210[8]);var inst_12170 = (state_12210[9]);var inst_12172 = (inst_12170 < inst_12169);var inst_12173 = inst_12172;var state_12210__$1 = state_12210;if(cljs.core.truth_(inst_12173))
{var statearr_12220_12255 = state_12210__$1;(statearr_12220_12255[1] = 10);
} else
{var statearr_12221_12256 = state_12210__$1;(statearr_12221_12256[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 9))
{var inst_12203 = (state_12210[2]);var state_12210__$1 = (function (){var statearr_12222 = state_12210;(statearr_12222[12] = inst_12203);
return statearr_12222;
})();var statearr_12223_12257 = state_12210__$1;(statearr_12223_12257[2] = null);
(statearr_12223_12257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 10))
{var inst_12170 = (state_12210[9]);var inst_12168 = (state_12210[10]);var inst_12175 = cljs.core._nth.call(null,inst_12168,inst_12170);var state_12210__$1 = state_12210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12210__$1,13,out,inst_12175);
} else
{if((state_val_12211 === 11))
{var inst_12181 = (state_12210[13]);var inst_12167 = (state_12210[11]);var inst_12181__$1 = cljs.core.seq.call(null,inst_12167);var state_12210__$1 = (function (){var statearr_12227 = state_12210;(statearr_12227[13] = inst_12181__$1);
return statearr_12227;
})();if(inst_12181__$1)
{var statearr_12228_12258 = state_12210__$1;(statearr_12228_12258[1] = 14);
} else
{var statearr_12229_12259 = state_12210__$1;(statearr_12229_12259[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 12))
{var inst_12201 = (state_12210[2]);var state_12210__$1 = state_12210;var statearr_12230_12260 = state_12210__$1;(statearr_12230_12260[2] = inst_12201);
(statearr_12230_12260[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 13))
{var inst_12169 = (state_12210[8]);var inst_12170 = (state_12210[9]);var inst_12168 = (state_12210[10]);var inst_12167 = (state_12210[11]);var inst_12177 = (state_12210[2]);var inst_12178 = (inst_12170 + 1);var tmp12224 = inst_12169;var tmp12225 = inst_12168;var tmp12226 = inst_12167;var inst_12167__$1 = tmp12226;var inst_12168__$1 = tmp12225;var inst_12169__$1 = tmp12224;var inst_12170__$1 = inst_12178;var state_12210__$1 = (function (){var statearr_12231 = state_12210;(statearr_12231[14] = inst_12177);
(statearr_12231[8] = inst_12169__$1);
(statearr_12231[9] = inst_12170__$1);
(statearr_12231[10] = inst_12168__$1);
(statearr_12231[11] = inst_12167__$1);
return statearr_12231;
})();var statearr_12232_12261 = state_12210__$1;(statearr_12232_12261[2] = null);
(statearr_12232_12261[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 14))
{var inst_12181 = (state_12210[13]);var inst_12183 = cljs.core.chunked_seq_QMARK_.call(null,inst_12181);var state_12210__$1 = state_12210;if(inst_12183)
{var statearr_12233_12262 = state_12210__$1;(statearr_12233_12262[1] = 17);
} else
{var statearr_12234_12263 = state_12210__$1;(statearr_12234_12263[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 15))
{var state_12210__$1 = state_12210;var statearr_12235_12264 = state_12210__$1;(statearr_12235_12264[2] = null);
(statearr_12235_12264[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 16))
{var inst_12199 = (state_12210[2]);var state_12210__$1 = state_12210;var statearr_12236_12265 = state_12210__$1;(statearr_12236_12265[2] = inst_12199);
(statearr_12236_12265[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 17))
{var inst_12181 = (state_12210[13]);var inst_12185 = cljs.core.chunk_first.call(null,inst_12181);var inst_12186 = cljs.core.chunk_rest.call(null,inst_12181);var inst_12187 = cljs.core.count.call(null,inst_12185);var inst_12167 = inst_12186;var inst_12168 = inst_12185;var inst_12169 = inst_12187;var inst_12170 = 0;var state_12210__$1 = (function (){var statearr_12237 = state_12210;(statearr_12237[8] = inst_12169);
(statearr_12237[9] = inst_12170);
(statearr_12237[10] = inst_12168);
(statearr_12237[11] = inst_12167);
return statearr_12237;
})();var statearr_12238_12266 = state_12210__$1;(statearr_12238_12266[2] = null);
(statearr_12238_12266[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 18))
{var inst_12181 = (state_12210[13]);var inst_12190 = cljs.core.first.call(null,inst_12181);var state_12210__$1 = state_12210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12210__$1,20,out,inst_12190);
} else
{if((state_val_12211 === 19))
{var inst_12196 = (state_12210[2]);var state_12210__$1 = state_12210;var statearr_12239_12267 = state_12210__$1;(statearr_12239_12267[2] = inst_12196);
(statearr_12239_12267[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12211 === 20))
{var inst_12181 = (state_12210[13]);var inst_12192 = (state_12210[2]);var inst_12193 = cljs.core.next.call(null,inst_12181);var inst_12167 = inst_12193;var inst_12168 = null;var inst_12169 = 0;var inst_12170 = 0;var state_12210__$1 = (function (){var statearr_12240 = state_12210;(statearr_12240[15] = inst_12192);
(statearr_12240[8] = inst_12169);
(statearr_12240[9] = inst_12170);
(statearr_12240[10] = inst_12168);
(statearr_12240[11] = inst_12167);
return statearr_12240;
})();var statearr_12241_12268 = state_12210__$1;(statearr_12241_12268[2] = null);
(statearr_12241_12268[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12245 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12245[0] = state_machine__5507__auto__);
(statearr_12245[1] = 1);
return statearr_12245;
});
var state_machine__5507__auto____1 = (function (state_12210){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12210);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12246){if((e12246 instanceof Object))
{var ex__5510__auto__ = e12246;var statearr_12247_12269 = state_12210;(statearr_12247_12269[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12210);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12270 = state_12210;
state_12210 = G__12270;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12210){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12248 = f__5522__auto__.call(null);(statearr_12248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12248;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12351 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12330){var state_val_12331 = (state_12330[1]);if((state_val_12331 === 1))
{var state_12330__$1 = state_12330;var statearr_12332_12352 = state_12330__$1;(statearr_12332_12352[2] = null);
(statearr_12332_12352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12331 === 2))
{var state_12330__$1 = state_12330;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12330__$1,4,from);
} else
{if((state_val_12331 === 3))
{var inst_12328 = (state_12330[2]);var state_12330__$1 = state_12330;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12330__$1,inst_12328);
} else
{if((state_val_12331 === 4))
{var inst_12313 = (state_12330[7]);var inst_12313__$1 = (state_12330[2]);var inst_12314 = (inst_12313__$1 == null);var state_12330__$1 = (function (){var statearr_12333 = state_12330;(statearr_12333[7] = inst_12313__$1);
return statearr_12333;
})();if(cljs.core.truth_(inst_12314))
{var statearr_12334_12353 = state_12330__$1;(statearr_12334_12353[1] = 5);
} else
{var statearr_12335_12354 = state_12330__$1;(statearr_12335_12354[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12331 === 5))
{var state_12330__$1 = state_12330;if(cljs.core.truth_(close_QMARK_))
{var statearr_12336_12355 = state_12330__$1;(statearr_12336_12355[1] = 8);
} else
{var statearr_12337_12356 = state_12330__$1;(statearr_12337_12356[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12331 === 6))
{var inst_12313 = (state_12330[7]);var state_12330__$1 = state_12330;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12330__$1,11,to,inst_12313);
} else
{if((state_val_12331 === 7))
{var inst_12326 = (state_12330[2]);var state_12330__$1 = state_12330;var statearr_12338_12357 = state_12330__$1;(statearr_12338_12357[2] = inst_12326);
(statearr_12338_12357[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12331 === 8))
{var inst_12317 = cljs.core.async.close_BANG_.call(null,to);var state_12330__$1 = state_12330;var statearr_12339_12358 = state_12330__$1;(statearr_12339_12358[2] = inst_12317);
(statearr_12339_12358[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12331 === 9))
{var state_12330__$1 = state_12330;var statearr_12340_12359 = state_12330__$1;(statearr_12340_12359[2] = null);
(statearr_12340_12359[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12331 === 10))
{var inst_12320 = (state_12330[2]);var state_12330__$1 = state_12330;var statearr_12341_12360 = state_12330__$1;(statearr_12341_12360[2] = inst_12320);
(statearr_12341_12360[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12331 === 11))
{var inst_12323 = (state_12330[2]);var state_12330__$1 = (function (){var statearr_12342 = state_12330;(statearr_12342[8] = inst_12323);
return statearr_12342;
})();var statearr_12343_12361 = state_12330__$1;(statearr_12343_12361[2] = null);
(statearr_12343_12361[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12347 = [null,null,null,null,null,null,null,null,null];(statearr_12347[0] = state_machine__5507__auto__);
(statearr_12347[1] = 1);
return statearr_12347;
});
var state_machine__5507__auto____1 = (function (state_12330){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12330);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12348){if((e12348 instanceof Object))
{var ex__5510__auto__ = e12348;var statearr_12349_12362 = state_12330;(statearr_12349_12362[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12330);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12348;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12363 = state_12330;
state_12330 = G__12363;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12330){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12330);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12350 = f__5522__auto__.call(null);(statearr_12350[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12351);
return statearr_12350;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12450 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12428){var state_val_12429 = (state_12428[1]);if((state_val_12429 === 1))
{var state_12428__$1 = state_12428;var statearr_12430_12451 = state_12428__$1;(statearr_12430_12451[2] = null);
(statearr_12430_12451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12429 === 2))
{var state_12428__$1 = state_12428;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12428__$1,4,ch);
} else
{if((state_val_12429 === 3))
{var inst_12426 = (state_12428[2]);var state_12428__$1 = state_12428;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12428__$1,inst_12426);
} else
{if((state_val_12429 === 4))
{var inst_12409 = (state_12428[7]);var inst_12409__$1 = (state_12428[2]);var inst_12410 = (inst_12409__$1 == null);var state_12428__$1 = (function (){var statearr_12431 = state_12428;(statearr_12431[7] = inst_12409__$1);
return statearr_12431;
})();if(cljs.core.truth_(inst_12410))
{var statearr_12432_12452 = state_12428__$1;(statearr_12432_12452[1] = 5);
} else
{var statearr_12433_12453 = state_12428__$1;(statearr_12433_12453[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12429 === 5))
{var inst_12412 = cljs.core.async.close_BANG_.call(null,tc);var inst_12413 = cljs.core.async.close_BANG_.call(null,fc);var state_12428__$1 = (function (){var statearr_12434 = state_12428;(statearr_12434[8] = inst_12412);
return statearr_12434;
})();var statearr_12435_12454 = state_12428__$1;(statearr_12435_12454[2] = inst_12413);
(statearr_12435_12454[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12429 === 6))
{var inst_12409 = (state_12428[7]);var inst_12415 = p.call(null,inst_12409);var state_12428__$1 = state_12428;if(cljs.core.truth_(inst_12415))
{var statearr_12436_12455 = state_12428__$1;(statearr_12436_12455[1] = 9);
} else
{var statearr_12437_12456 = state_12428__$1;(statearr_12437_12456[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12429 === 7))
{var inst_12424 = (state_12428[2]);var state_12428__$1 = state_12428;var statearr_12438_12457 = state_12428__$1;(statearr_12438_12457[2] = inst_12424);
(statearr_12438_12457[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12429 === 8))
{var inst_12421 = (state_12428[2]);var state_12428__$1 = (function (){var statearr_12439 = state_12428;(statearr_12439[9] = inst_12421);
return statearr_12439;
})();var statearr_12440_12458 = state_12428__$1;(statearr_12440_12458[2] = null);
(statearr_12440_12458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12429 === 9))
{var state_12428__$1 = state_12428;var statearr_12441_12459 = state_12428__$1;(statearr_12441_12459[2] = tc);
(statearr_12441_12459[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12429 === 10))
{var state_12428__$1 = state_12428;var statearr_12442_12460 = state_12428__$1;(statearr_12442_12460[2] = fc);
(statearr_12442_12460[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12429 === 11))
{var inst_12409 = (state_12428[7]);var inst_12419 = (state_12428[2]);var state_12428__$1 = state_12428;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12428__$1,8,inst_12419,inst_12409);
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
var state_machine__5507__auto____0 = (function (){var statearr_12446 = [null,null,null,null,null,null,null,null,null,null];(statearr_12446[0] = state_machine__5507__auto__);
(statearr_12446[1] = 1);
return statearr_12446;
});
var state_machine__5507__auto____1 = (function (state_12428){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12428);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12447){if((e12447 instanceof Object))
{var ex__5510__auto__ = e12447;var statearr_12448_12461 = state_12428;(statearr_12448_12461[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12428);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12462 = state_12428;
state_12428 = G__12462;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12428){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12449 = f__5522__auto__.call(null);(statearr_12449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12450);
return statearr_12449;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12509){var state_val_12510 = (state_12509[1]);if((state_val_12510 === 7))
{var inst_12505 = (state_12509[2]);var state_12509__$1 = state_12509;var statearr_12511_12527 = state_12509__$1;(statearr_12511_12527[2] = inst_12505);
(statearr_12511_12527[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12510 === 6))
{var inst_12498 = (state_12509[7]);var inst_12495 = (state_12509[8]);var inst_12502 = f.call(null,inst_12495,inst_12498);var inst_12495__$1 = inst_12502;var state_12509__$1 = (function (){var statearr_12512 = state_12509;(statearr_12512[8] = inst_12495__$1);
return statearr_12512;
})();var statearr_12513_12528 = state_12509__$1;(statearr_12513_12528[2] = null);
(statearr_12513_12528[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12510 === 5))
{var inst_12495 = (state_12509[8]);var state_12509__$1 = state_12509;var statearr_12514_12529 = state_12509__$1;(statearr_12514_12529[2] = inst_12495);
(statearr_12514_12529[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12510 === 4))
{var inst_12498 = (state_12509[7]);var inst_12498__$1 = (state_12509[2]);var inst_12499 = (inst_12498__$1 == null);var state_12509__$1 = (function (){var statearr_12515 = state_12509;(statearr_12515[7] = inst_12498__$1);
return statearr_12515;
})();if(cljs.core.truth_(inst_12499))
{var statearr_12516_12530 = state_12509__$1;(statearr_12516_12530[1] = 5);
} else
{var statearr_12517_12531 = state_12509__$1;(statearr_12517_12531[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12510 === 3))
{var inst_12507 = (state_12509[2]);var state_12509__$1 = state_12509;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12509__$1,inst_12507);
} else
{if((state_val_12510 === 2))
{var state_12509__$1 = state_12509;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12509__$1,4,ch);
} else
{if((state_val_12510 === 1))
{var inst_12495 = init;var state_12509__$1 = (function (){var statearr_12518 = state_12509;(statearr_12518[8] = inst_12495);
return statearr_12518;
})();var statearr_12519_12532 = state_12509__$1;(statearr_12519_12532[2] = null);
(statearr_12519_12532[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12523 = [null,null,null,null,null,null,null,null,null];(statearr_12523[0] = state_machine__5507__auto__);
(statearr_12523[1] = 1);
return statearr_12523;
});
var state_machine__5507__auto____1 = (function (state_12509){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12509);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12524){if((e12524 instanceof Object))
{var ex__5510__auto__ = e12524;var statearr_12525_12533 = state_12509;(statearr_12525_12533[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12509);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12524;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12534 = state_12509;
state_12509 = G__12534;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12509){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12509);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12526 = f__5522__auto__.call(null);(statearr_12526[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12526;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12596){var state_val_12597 = (state_12596[1]);if((state_val_12597 === 1))
{var inst_12576 = cljs.core.seq.call(null,coll);var inst_12577 = inst_12576;var state_12596__$1 = (function (){var statearr_12598 = state_12596;(statearr_12598[7] = inst_12577);
return statearr_12598;
})();var statearr_12599_12617 = state_12596__$1;(statearr_12599_12617[2] = null);
(statearr_12599_12617[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12597 === 2))
{var inst_12577 = (state_12596[7]);var state_12596__$1 = state_12596;if(cljs.core.truth_(inst_12577))
{var statearr_12600_12618 = state_12596__$1;(statearr_12600_12618[1] = 4);
} else
{var statearr_12601_12619 = state_12596__$1;(statearr_12601_12619[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12597 === 3))
{var inst_12594 = (state_12596[2]);var state_12596__$1 = state_12596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12596__$1,inst_12594);
} else
{if((state_val_12597 === 4))
{var inst_12577 = (state_12596[7]);var inst_12580 = cljs.core.first.call(null,inst_12577);var state_12596__$1 = state_12596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12596__$1,7,ch,inst_12580);
} else
{if((state_val_12597 === 5))
{var state_12596__$1 = state_12596;if(cljs.core.truth_(close_QMARK_))
{var statearr_12602_12620 = state_12596__$1;(statearr_12602_12620[1] = 8);
} else
{var statearr_12603_12621 = state_12596__$1;(statearr_12603_12621[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12597 === 6))
{var inst_12592 = (state_12596[2]);var state_12596__$1 = state_12596;var statearr_12604_12622 = state_12596__$1;(statearr_12604_12622[2] = inst_12592);
(statearr_12604_12622[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12597 === 7))
{var inst_12577 = (state_12596[7]);var inst_12582 = (state_12596[2]);var inst_12583 = cljs.core.next.call(null,inst_12577);var inst_12577__$1 = inst_12583;var state_12596__$1 = (function (){var statearr_12605 = state_12596;(statearr_12605[8] = inst_12582);
(statearr_12605[7] = inst_12577__$1);
return statearr_12605;
})();var statearr_12606_12623 = state_12596__$1;(statearr_12606_12623[2] = null);
(statearr_12606_12623[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12597 === 8))
{var inst_12587 = cljs.core.async.close_BANG_.call(null,ch);var state_12596__$1 = state_12596;var statearr_12607_12624 = state_12596__$1;(statearr_12607_12624[2] = inst_12587);
(statearr_12607_12624[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12597 === 9))
{var state_12596__$1 = state_12596;var statearr_12608_12625 = state_12596__$1;(statearr_12608_12625[2] = null);
(statearr_12608_12625[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12597 === 10))
{var inst_12590 = (state_12596[2]);var state_12596__$1 = state_12596;var statearr_12609_12626 = state_12596__$1;(statearr_12609_12626[2] = inst_12590);
(statearr_12609_12626[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12613 = [null,null,null,null,null,null,null,null,null];(statearr_12613[0] = state_machine__5507__auto__);
(statearr_12613[1] = 1);
return statearr_12613;
});
var state_machine__5507__auto____1 = (function (state_12596){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12596);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12614){if((e12614 instanceof Object))
{var ex__5510__auto__ = e12614;var statearr_12615_12627 = state_12596;(statearr_12615_12627[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12596);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12628 = state_12596;
state_12596 = G__12628;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12596){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12616 = f__5522__auto__.call(null);(statearr_12616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12616;
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
cljs.core.async.Mux = (function (){var obj12630 = {};return obj12630;
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
cljs.core.async.Mult = (function (){var obj12632 = {};return obj12632;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12856 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12856 = (function (cs,ch,mult,meta12857){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12857 = meta12857;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12856.cljs$lang$type = true;
cljs.core.async.t12856.cljs$lang$ctorStr = "cljs.core.async/t12856";
cljs.core.async.t12856.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12856");
});})(cs))
;
cljs.core.async.t12856.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12856.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12856.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12856.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12856.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12856.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12856.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12858){var self__ = this;
var _12858__$1 = this;return self__.meta12857;
});})(cs))
;
cljs.core.async.t12856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12858,meta12857__$1){var self__ = this;
var _12858__$1 = this;return (new cljs.core.async.t12856(self__.cs,self__.ch,self__.mult,meta12857__$1));
});})(cs))
;
cljs.core.async.__GT_t12856 = ((function (cs){
return (function __GT_t12856(cs__$1,ch__$1,mult__$1,meta12857){return (new cljs.core.async.t12856(cs__$1,ch__$1,mult__$1,meta12857));
});})(cs))
;
}
return (new cljs.core.async.t12856(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13079 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12993){var state_val_12994 = (state_12993[1]);if((state_val_12994 === 32))
{var inst_12861 = (state_12993[7]);var inst_12937 = (state_12993[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12993,31,Object,null,30);var inst_12944 = cljs.core.async.put_BANG_.call(null,inst_12937,inst_12861,done);var state_12993__$1 = state_12993;var statearr_12995_13080 = state_12993__$1;(statearr_12995_13080[2] = inst_12944);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12993__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 1))
{var state_12993__$1 = state_12993;var statearr_12996_13081 = state_12993__$1;(statearr_12996_13081[2] = null);
(statearr_12996_13081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 33))
{var inst_12950 = (state_12993[9]);var inst_12952 = cljs.core.chunked_seq_QMARK_.call(null,inst_12950);var state_12993__$1 = state_12993;if(inst_12952)
{var statearr_12997_13082 = state_12993__$1;(statearr_12997_13082[1] = 36);
} else
{var statearr_12998_13083 = state_12993__$1;(statearr_12998_13083[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 2))
{var state_12993__$1 = state_12993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12993__$1,4,ch);
} else
{if((state_val_12994 === 34))
{var state_12993__$1 = state_12993;var statearr_12999_13084 = state_12993__$1;(statearr_12999_13084[2] = null);
(statearr_12999_13084[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 3))
{var inst_12991 = (state_12993[2]);var state_12993__$1 = state_12993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12993__$1,inst_12991);
} else
{if((state_val_12994 === 35))
{var inst_12975 = (state_12993[2]);var state_12993__$1 = state_12993;var statearr_13000_13085 = state_12993__$1;(statearr_13000_13085[2] = inst_12975);
(statearr_13000_13085[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 4))
{var inst_12861 = (state_12993[7]);var inst_12861__$1 = (state_12993[2]);var inst_12862 = (inst_12861__$1 == null);var state_12993__$1 = (function (){var statearr_13001 = state_12993;(statearr_13001[7] = inst_12861__$1);
return statearr_13001;
})();if(cljs.core.truth_(inst_12862))
{var statearr_13002_13086 = state_12993__$1;(statearr_13002_13086[1] = 5);
} else
{var statearr_13003_13087 = state_12993__$1;(statearr_13003_13087[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 36))
{var inst_12950 = (state_12993[9]);var inst_12954 = cljs.core.chunk_first.call(null,inst_12950);var inst_12955 = cljs.core.chunk_rest.call(null,inst_12950);var inst_12956 = cljs.core.count.call(null,inst_12954);var inst_12929 = inst_12955;var inst_12930 = inst_12954;var inst_12931 = inst_12956;var inst_12932 = 0;var state_12993__$1 = (function (){var statearr_13004 = state_12993;(statearr_13004[10] = inst_12930);
(statearr_13004[11] = inst_12929);
(statearr_13004[12] = inst_12931);
(statearr_13004[13] = inst_12932);
return statearr_13004;
})();var statearr_13005_13088 = state_12993__$1;(statearr_13005_13088[2] = null);
(statearr_13005_13088[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 5))
{var inst_12868 = cljs.core.deref.call(null,cs);var inst_12869 = cljs.core.seq.call(null,inst_12868);var inst_12870 = inst_12869;var inst_12871 = null;var inst_12872 = 0;var inst_12873 = 0;var state_12993__$1 = (function (){var statearr_13006 = state_12993;(statearr_13006[14] = inst_12873);
(statearr_13006[15] = inst_12872);
(statearr_13006[16] = inst_12871);
(statearr_13006[17] = inst_12870);
return statearr_13006;
})();var statearr_13007_13089 = state_12993__$1;(statearr_13007_13089[2] = null);
(statearr_13007_13089[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 37))
{var inst_12950 = (state_12993[9]);var inst_12959 = cljs.core.first.call(null,inst_12950);var state_12993__$1 = (function (){var statearr_13008 = state_12993;(statearr_13008[18] = inst_12959);
return statearr_13008;
})();var statearr_13009_13090 = state_12993__$1;(statearr_13009_13090[2] = null);
(statearr_13009_13090[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 6))
{var inst_12921 = (state_12993[19]);var inst_12920 = cljs.core.deref.call(null,cs);var inst_12921__$1 = cljs.core.keys.call(null,inst_12920);var inst_12922 = cljs.core.count.call(null,inst_12921__$1);var inst_12923 = cljs.core.reset_BANG_.call(null,dctr,inst_12922);var inst_12928 = cljs.core.seq.call(null,inst_12921__$1);var inst_12929 = inst_12928;var inst_12930 = null;var inst_12931 = 0;var inst_12932 = 0;var state_12993__$1 = (function (){var statearr_13010 = state_12993;(statearr_13010[20] = inst_12923);
(statearr_13010[10] = inst_12930);
(statearr_13010[11] = inst_12929);
(statearr_13010[12] = inst_12931);
(statearr_13010[13] = inst_12932);
(statearr_13010[19] = inst_12921__$1);
return statearr_13010;
})();var statearr_13011_13091 = state_12993__$1;(statearr_13011_13091[2] = null);
(statearr_13011_13091[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 38))
{var inst_12972 = (state_12993[2]);var state_12993__$1 = state_12993;var statearr_13012_13092 = state_12993__$1;(statearr_13012_13092[2] = inst_12972);
(statearr_13012_13092[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 7))
{var inst_12989 = (state_12993[2]);var state_12993__$1 = state_12993;var statearr_13013_13093 = state_12993__$1;(statearr_13013_13093[2] = inst_12989);
(statearr_13013_13093[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 39))
{var inst_12950 = (state_12993[9]);var inst_12968 = (state_12993[2]);var inst_12969 = cljs.core.next.call(null,inst_12950);var inst_12929 = inst_12969;var inst_12930 = null;var inst_12931 = 0;var inst_12932 = 0;var state_12993__$1 = (function (){var statearr_13014 = state_12993;(statearr_13014[21] = inst_12968);
(statearr_13014[10] = inst_12930);
(statearr_13014[11] = inst_12929);
(statearr_13014[12] = inst_12931);
(statearr_13014[13] = inst_12932);
return statearr_13014;
})();var statearr_13015_13094 = state_12993__$1;(statearr_13015_13094[2] = null);
(statearr_13015_13094[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 8))
{var inst_12873 = (state_12993[14]);var inst_12872 = (state_12993[15]);var inst_12875 = (inst_12873 < inst_12872);var inst_12876 = inst_12875;var state_12993__$1 = state_12993;if(cljs.core.truth_(inst_12876))
{var statearr_13016_13095 = state_12993__$1;(statearr_13016_13095[1] = 10);
} else
{var statearr_13017_13096 = state_12993__$1;(statearr_13017_13096[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 40))
{var inst_12959 = (state_12993[18]);var inst_12960 = (state_12993[2]);var inst_12961 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12962 = cljs.core.async.untap_STAR_.call(null,m,inst_12959);var state_12993__$1 = (function (){var statearr_13018 = state_12993;(statearr_13018[22] = inst_12961);
(statearr_13018[23] = inst_12960);
return statearr_13018;
})();var statearr_13019_13097 = state_12993__$1;(statearr_13019_13097[2] = inst_12962);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12993__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 9))
{var inst_12918 = (state_12993[2]);var state_12993__$1 = state_12993;var statearr_13020_13098 = state_12993__$1;(statearr_13020_13098[2] = inst_12918);
(statearr_13020_13098[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 41))
{var inst_12959 = (state_12993[18]);var inst_12861 = (state_12993[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_12993,40,Object,null,39);var inst_12966 = cljs.core.async.put_BANG_.call(null,inst_12959,inst_12861,done);var state_12993__$1 = state_12993;var statearr_13021_13099 = state_12993__$1;(statearr_13021_13099[2] = inst_12966);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12993__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 10))
{var inst_12873 = (state_12993[14]);var inst_12871 = (state_12993[16]);var inst_12879 = cljs.core._nth.call(null,inst_12871,inst_12873);var inst_12880 = cljs.core.nth.call(null,inst_12879,0,null);var inst_12881 = cljs.core.nth.call(null,inst_12879,1,null);var state_12993__$1 = (function (){var statearr_13022 = state_12993;(statearr_13022[24] = inst_12880);
return statearr_13022;
})();if(cljs.core.truth_(inst_12881))
{var statearr_13023_13100 = state_12993__$1;(statearr_13023_13100[1] = 13);
} else
{var statearr_13024_13101 = state_12993__$1;(statearr_13024_13101[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 42))
{var state_12993__$1 = state_12993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12993__$1,45,dchan);
} else
{if((state_val_12994 === 11))
{var inst_12870 = (state_12993[17]);var inst_12890 = (state_12993[25]);var inst_12890__$1 = cljs.core.seq.call(null,inst_12870);var state_12993__$1 = (function (){var statearr_13025 = state_12993;(statearr_13025[25] = inst_12890__$1);
return statearr_13025;
})();if(inst_12890__$1)
{var statearr_13026_13102 = state_12993__$1;(statearr_13026_13102[1] = 16);
} else
{var statearr_13027_13103 = state_12993__$1;(statearr_13027_13103[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 43))
{var state_12993__$1 = state_12993;var statearr_13028_13104 = state_12993__$1;(statearr_13028_13104[2] = null);
(statearr_13028_13104[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 12))
{var inst_12916 = (state_12993[2]);var state_12993__$1 = state_12993;var statearr_13029_13105 = state_12993__$1;(statearr_13029_13105[2] = inst_12916);
(statearr_13029_13105[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 44))
{var inst_12986 = (state_12993[2]);var state_12993__$1 = (function (){var statearr_13030 = state_12993;(statearr_13030[26] = inst_12986);
return statearr_13030;
})();var statearr_13031_13106 = state_12993__$1;(statearr_13031_13106[2] = null);
(statearr_13031_13106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 13))
{var inst_12880 = (state_12993[24]);var inst_12883 = cljs.core.async.close_BANG_.call(null,inst_12880);var state_12993__$1 = state_12993;var statearr_13032_13107 = state_12993__$1;(statearr_13032_13107[2] = inst_12883);
(statearr_13032_13107[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 45))
{var inst_12983 = (state_12993[2]);var state_12993__$1 = state_12993;var statearr_13036_13108 = state_12993__$1;(statearr_13036_13108[2] = inst_12983);
(statearr_13036_13108[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 14))
{var state_12993__$1 = state_12993;var statearr_13037_13109 = state_12993__$1;(statearr_13037_13109[2] = null);
(statearr_13037_13109[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 15))
{var inst_12873 = (state_12993[14]);var inst_12872 = (state_12993[15]);var inst_12871 = (state_12993[16]);var inst_12870 = (state_12993[17]);var inst_12886 = (state_12993[2]);var inst_12887 = (inst_12873 + 1);var tmp13033 = inst_12872;var tmp13034 = inst_12871;var tmp13035 = inst_12870;var inst_12870__$1 = tmp13035;var inst_12871__$1 = tmp13034;var inst_12872__$1 = tmp13033;var inst_12873__$1 = inst_12887;var state_12993__$1 = (function (){var statearr_13038 = state_12993;(statearr_13038[14] = inst_12873__$1);
(statearr_13038[15] = inst_12872__$1);
(statearr_13038[16] = inst_12871__$1);
(statearr_13038[17] = inst_12870__$1);
(statearr_13038[27] = inst_12886);
return statearr_13038;
})();var statearr_13039_13110 = state_12993__$1;(statearr_13039_13110[2] = null);
(statearr_13039_13110[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 16))
{var inst_12890 = (state_12993[25]);var inst_12892 = cljs.core.chunked_seq_QMARK_.call(null,inst_12890);var state_12993__$1 = state_12993;if(inst_12892)
{var statearr_13040_13111 = state_12993__$1;(statearr_13040_13111[1] = 19);
} else
{var statearr_13041_13112 = state_12993__$1;(statearr_13041_13112[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 17))
{var state_12993__$1 = state_12993;var statearr_13042_13113 = state_12993__$1;(statearr_13042_13113[2] = null);
(statearr_13042_13113[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 18))
{var inst_12914 = (state_12993[2]);var state_12993__$1 = state_12993;var statearr_13043_13114 = state_12993__$1;(statearr_13043_13114[2] = inst_12914);
(statearr_13043_13114[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 19))
{var inst_12890 = (state_12993[25]);var inst_12894 = cljs.core.chunk_first.call(null,inst_12890);var inst_12895 = cljs.core.chunk_rest.call(null,inst_12890);var inst_12896 = cljs.core.count.call(null,inst_12894);var inst_12870 = inst_12895;var inst_12871 = inst_12894;var inst_12872 = inst_12896;var inst_12873 = 0;var state_12993__$1 = (function (){var statearr_13044 = state_12993;(statearr_13044[14] = inst_12873);
(statearr_13044[15] = inst_12872);
(statearr_13044[16] = inst_12871);
(statearr_13044[17] = inst_12870);
return statearr_13044;
})();var statearr_13045_13115 = state_12993__$1;(statearr_13045_13115[2] = null);
(statearr_13045_13115[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 20))
{var inst_12890 = (state_12993[25]);var inst_12900 = cljs.core.first.call(null,inst_12890);var inst_12901 = cljs.core.nth.call(null,inst_12900,0,null);var inst_12902 = cljs.core.nth.call(null,inst_12900,1,null);var state_12993__$1 = (function (){var statearr_13046 = state_12993;(statearr_13046[28] = inst_12901);
return statearr_13046;
})();if(cljs.core.truth_(inst_12902))
{var statearr_13047_13116 = state_12993__$1;(statearr_13047_13116[1] = 22);
} else
{var statearr_13048_13117 = state_12993__$1;(statearr_13048_13117[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 21))
{var inst_12911 = (state_12993[2]);var state_12993__$1 = state_12993;var statearr_13049_13118 = state_12993__$1;(statearr_13049_13118[2] = inst_12911);
(statearr_13049_13118[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 22))
{var inst_12901 = (state_12993[28]);var inst_12904 = cljs.core.async.close_BANG_.call(null,inst_12901);var state_12993__$1 = state_12993;var statearr_13050_13119 = state_12993__$1;(statearr_13050_13119[2] = inst_12904);
(statearr_13050_13119[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 23))
{var state_12993__$1 = state_12993;var statearr_13051_13120 = state_12993__$1;(statearr_13051_13120[2] = null);
(statearr_13051_13120[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 24))
{var inst_12890 = (state_12993[25]);var inst_12907 = (state_12993[2]);var inst_12908 = cljs.core.next.call(null,inst_12890);var inst_12870 = inst_12908;var inst_12871 = null;var inst_12872 = 0;var inst_12873 = 0;var state_12993__$1 = (function (){var statearr_13052 = state_12993;(statearr_13052[14] = inst_12873);
(statearr_13052[15] = inst_12872);
(statearr_13052[16] = inst_12871);
(statearr_13052[17] = inst_12870);
(statearr_13052[29] = inst_12907);
return statearr_13052;
})();var statearr_13053_13121 = state_12993__$1;(statearr_13053_13121[2] = null);
(statearr_13053_13121[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 25))
{var inst_12931 = (state_12993[12]);var inst_12932 = (state_12993[13]);var inst_12934 = (inst_12932 < inst_12931);var inst_12935 = inst_12934;var state_12993__$1 = state_12993;if(cljs.core.truth_(inst_12935))
{var statearr_13054_13122 = state_12993__$1;(statearr_13054_13122[1] = 27);
} else
{var statearr_13055_13123 = state_12993__$1;(statearr_13055_13123[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 26))
{var inst_12921 = (state_12993[19]);var inst_12979 = (state_12993[2]);var inst_12980 = cljs.core.seq.call(null,inst_12921);var state_12993__$1 = (function (){var statearr_13056 = state_12993;(statearr_13056[30] = inst_12979);
return statearr_13056;
})();if(inst_12980)
{var statearr_13057_13124 = state_12993__$1;(statearr_13057_13124[1] = 42);
} else
{var statearr_13058_13125 = state_12993__$1;(statearr_13058_13125[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 27))
{var inst_12930 = (state_12993[10]);var inst_12932 = (state_12993[13]);var inst_12937 = cljs.core._nth.call(null,inst_12930,inst_12932);var state_12993__$1 = (function (){var statearr_13059 = state_12993;(statearr_13059[8] = inst_12937);
return statearr_13059;
})();var statearr_13060_13126 = state_12993__$1;(statearr_13060_13126[2] = null);
(statearr_13060_13126[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 28))
{var inst_12950 = (state_12993[9]);var inst_12929 = (state_12993[11]);var inst_12950__$1 = cljs.core.seq.call(null,inst_12929);var state_12993__$1 = (function (){var statearr_13064 = state_12993;(statearr_13064[9] = inst_12950__$1);
return statearr_13064;
})();if(inst_12950__$1)
{var statearr_13065_13127 = state_12993__$1;(statearr_13065_13127[1] = 33);
} else
{var statearr_13066_13128 = state_12993__$1;(statearr_13066_13128[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 29))
{var inst_12977 = (state_12993[2]);var state_12993__$1 = state_12993;var statearr_13067_13129 = state_12993__$1;(statearr_13067_13129[2] = inst_12977);
(statearr_13067_13129[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 30))
{var inst_12930 = (state_12993[10]);var inst_12929 = (state_12993[11]);var inst_12931 = (state_12993[12]);var inst_12932 = (state_12993[13]);var inst_12946 = (state_12993[2]);var inst_12947 = (inst_12932 + 1);var tmp13061 = inst_12930;var tmp13062 = inst_12929;var tmp13063 = inst_12931;var inst_12929__$1 = tmp13062;var inst_12930__$1 = tmp13061;var inst_12931__$1 = tmp13063;var inst_12932__$1 = inst_12947;var state_12993__$1 = (function (){var statearr_13068 = state_12993;(statearr_13068[10] = inst_12930__$1);
(statearr_13068[11] = inst_12929__$1);
(statearr_13068[12] = inst_12931__$1);
(statearr_13068[13] = inst_12932__$1);
(statearr_13068[31] = inst_12946);
return statearr_13068;
})();var statearr_13069_13130 = state_12993__$1;(statearr_13069_13130[2] = null);
(statearr_13069_13130[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12994 === 31))
{var inst_12937 = (state_12993[8]);var inst_12938 = (state_12993[2]);var inst_12939 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12940 = cljs.core.async.untap_STAR_.call(null,m,inst_12937);var state_12993__$1 = (function (){var statearr_13070 = state_12993;(statearr_13070[32] = inst_12938);
(statearr_13070[33] = inst_12939);
return statearr_13070;
})();var statearr_13071_13131 = state_12993__$1;(statearr_13071_13131[2] = inst_12940);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12993__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13075 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13075[0] = state_machine__5507__auto__);
(statearr_13075[1] = 1);
return statearr_13075;
});
var state_machine__5507__auto____1 = (function (state_12993){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12993);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13076){if((e13076 instanceof Object))
{var ex__5510__auto__ = e13076;var statearr_13077_13132 = state_12993;(statearr_13077_13132[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13076;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13133 = state_12993;
state_12993 = G__13133;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12993){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13078 = f__5522__auto__.call(null);(statearr_13078[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13079);
return statearr_13078;
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
cljs.core.async.Mix = (function (){var obj13135 = {};return obj13135;
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
;var m = (function (){if(typeof cljs.core.async.t13245 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13245 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13246){
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
this.meta13246 = meta13246;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13245.cljs$lang$type = true;
cljs.core.async.t13245.cljs$lang$ctorStr = "cljs.core.async/t13245";
cljs.core.async.t13245.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13245");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13245.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13245.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13245.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13245.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13245.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13245.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13245.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13245.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13245.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13247){var self__ = this;
var _13247__$1 = this;return self__.meta13246;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13245.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13247,meta13246__$1){var self__ = this;
var _13247__$1 = this;return (new cljs.core.async.t13245(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13246__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13245 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13245(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13246){return (new cljs.core.async.t13245(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13246));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13245(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13354 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13312){var state_val_13313 = (state_13312[1]);if((state_val_13313 === 1))
{var inst_13251 = (state_13312[7]);var inst_13251__$1 = calc_state.call(null);var inst_13252 = cljs.core.seq_QMARK_.call(null,inst_13251__$1);var state_13312__$1 = (function (){var statearr_13314 = state_13312;(statearr_13314[7] = inst_13251__$1);
return statearr_13314;
})();if(inst_13252)
{var statearr_13315_13355 = state_13312__$1;(statearr_13315_13355[1] = 2);
} else
{var statearr_13316_13356 = state_13312__$1;(statearr_13316_13356[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 2))
{var inst_13251 = (state_13312[7]);var inst_13254 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13251);var state_13312__$1 = state_13312;var statearr_13317_13357 = state_13312__$1;(statearr_13317_13357[2] = inst_13254);
(statearr_13317_13357[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 3))
{var inst_13251 = (state_13312[7]);var state_13312__$1 = state_13312;var statearr_13318_13358 = state_13312__$1;(statearr_13318_13358[2] = inst_13251);
(statearr_13318_13358[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 4))
{var inst_13251 = (state_13312[7]);var inst_13257 = (state_13312[2]);var inst_13258 = cljs.core.get.call(null,inst_13257,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13259 = cljs.core.get.call(null,inst_13257,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13260 = cljs.core.get.call(null,inst_13257,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13261 = inst_13251;var state_13312__$1 = (function (){var statearr_13319 = state_13312;(statearr_13319[8] = inst_13260);
(statearr_13319[9] = inst_13259);
(statearr_13319[10] = inst_13258);
(statearr_13319[11] = inst_13261);
return statearr_13319;
})();var statearr_13320_13359 = state_13312__$1;(statearr_13320_13359[2] = null);
(statearr_13320_13359[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 5))
{var inst_13261 = (state_13312[11]);var inst_13264 = cljs.core.seq_QMARK_.call(null,inst_13261);var state_13312__$1 = state_13312;if(inst_13264)
{var statearr_13321_13360 = state_13312__$1;(statearr_13321_13360[1] = 7);
} else
{var statearr_13322_13361 = state_13312__$1;(statearr_13322_13361[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 6))
{var inst_13310 = (state_13312[2]);var state_13312__$1 = state_13312;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13312__$1,inst_13310);
} else
{if((state_val_13313 === 7))
{var inst_13261 = (state_13312[11]);var inst_13266 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13261);var state_13312__$1 = state_13312;var statearr_13323_13362 = state_13312__$1;(statearr_13323_13362[2] = inst_13266);
(statearr_13323_13362[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 8))
{var inst_13261 = (state_13312[11]);var state_13312__$1 = state_13312;var statearr_13324_13363 = state_13312__$1;(statearr_13324_13363[2] = inst_13261);
(statearr_13324_13363[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 9))
{var inst_13269 = (state_13312[12]);var inst_13269__$1 = (state_13312[2]);var inst_13270 = cljs.core.get.call(null,inst_13269__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13271 = cljs.core.get.call(null,inst_13269__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13272 = cljs.core.get.call(null,inst_13269__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13312__$1 = (function (){var statearr_13325 = state_13312;(statearr_13325[13] = inst_13271);
(statearr_13325[14] = inst_13272);
(statearr_13325[12] = inst_13269__$1);
return statearr_13325;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13312__$1,10,inst_13270);
} else
{if((state_val_13313 === 10))
{var inst_13276 = (state_13312[15]);var inst_13277 = (state_13312[16]);var inst_13275 = (state_13312[2]);var inst_13276__$1 = cljs.core.nth.call(null,inst_13275,0,null);var inst_13277__$1 = cljs.core.nth.call(null,inst_13275,1,null);var inst_13278 = (inst_13276__$1 == null);var inst_13279 = cljs.core._EQ_.call(null,inst_13277__$1,change);var inst_13280 = (inst_13278) || (inst_13279);var state_13312__$1 = (function (){var statearr_13326 = state_13312;(statearr_13326[15] = inst_13276__$1);
(statearr_13326[16] = inst_13277__$1);
return statearr_13326;
})();if(cljs.core.truth_(inst_13280))
{var statearr_13327_13364 = state_13312__$1;(statearr_13327_13364[1] = 11);
} else
{var statearr_13328_13365 = state_13312__$1;(statearr_13328_13365[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 11))
{var inst_13276 = (state_13312[15]);var inst_13282 = (inst_13276 == null);var state_13312__$1 = state_13312;if(cljs.core.truth_(inst_13282))
{var statearr_13329_13366 = state_13312__$1;(statearr_13329_13366[1] = 14);
} else
{var statearr_13330_13367 = state_13312__$1;(statearr_13330_13367[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 12))
{var inst_13277 = (state_13312[16]);var inst_13272 = (state_13312[14]);var inst_13291 = (state_13312[17]);var inst_13291__$1 = inst_13272.call(null,inst_13277);var state_13312__$1 = (function (){var statearr_13331 = state_13312;(statearr_13331[17] = inst_13291__$1);
return statearr_13331;
})();if(cljs.core.truth_(inst_13291__$1))
{var statearr_13332_13368 = state_13312__$1;(statearr_13332_13368[1] = 17);
} else
{var statearr_13333_13369 = state_13312__$1;(statearr_13333_13369[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 13))
{var inst_13308 = (state_13312[2]);var state_13312__$1 = state_13312;var statearr_13334_13370 = state_13312__$1;(statearr_13334_13370[2] = inst_13308);
(statearr_13334_13370[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 14))
{var inst_13277 = (state_13312[16]);var inst_13284 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13277);var state_13312__$1 = state_13312;var statearr_13335_13371 = state_13312__$1;(statearr_13335_13371[2] = inst_13284);
(statearr_13335_13371[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 15))
{var state_13312__$1 = state_13312;var statearr_13336_13372 = state_13312__$1;(statearr_13336_13372[2] = null);
(statearr_13336_13372[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 16))
{var inst_13287 = (state_13312[2]);var inst_13288 = calc_state.call(null);var inst_13261 = inst_13288;var state_13312__$1 = (function (){var statearr_13337 = state_13312;(statearr_13337[18] = inst_13287);
(statearr_13337[11] = inst_13261);
return statearr_13337;
})();var statearr_13338_13373 = state_13312__$1;(statearr_13338_13373[2] = null);
(statearr_13338_13373[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 17))
{var inst_13291 = (state_13312[17]);var state_13312__$1 = state_13312;var statearr_13339_13374 = state_13312__$1;(statearr_13339_13374[2] = inst_13291);
(statearr_13339_13374[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 18))
{var inst_13277 = (state_13312[16]);var inst_13271 = (state_13312[13]);var inst_13272 = (state_13312[14]);var inst_13294 = cljs.core.empty_QMARK_.call(null,inst_13272);var inst_13295 = inst_13271.call(null,inst_13277);var inst_13296 = cljs.core.not.call(null,inst_13295);var inst_13297 = (inst_13294) && (inst_13296);var state_13312__$1 = state_13312;var statearr_13340_13375 = state_13312__$1;(statearr_13340_13375[2] = inst_13297);
(statearr_13340_13375[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 19))
{var inst_13299 = (state_13312[2]);var state_13312__$1 = state_13312;if(cljs.core.truth_(inst_13299))
{var statearr_13341_13376 = state_13312__$1;(statearr_13341_13376[1] = 20);
} else
{var statearr_13342_13377 = state_13312__$1;(statearr_13342_13377[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 20))
{var inst_13276 = (state_13312[15]);var state_13312__$1 = state_13312;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13312__$1,23,out,inst_13276);
} else
{if((state_val_13313 === 21))
{var state_13312__$1 = state_13312;var statearr_13343_13378 = state_13312__$1;(statearr_13343_13378[2] = null);
(statearr_13343_13378[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 22))
{var inst_13269 = (state_13312[12]);var inst_13305 = (state_13312[2]);var inst_13261 = inst_13269;var state_13312__$1 = (function (){var statearr_13344 = state_13312;(statearr_13344[19] = inst_13305);
(statearr_13344[11] = inst_13261);
return statearr_13344;
})();var statearr_13345_13379 = state_13312__$1;(statearr_13345_13379[2] = null);
(statearr_13345_13379[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13313 === 23))
{var inst_13302 = (state_13312[2]);var state_13312__$1 = state_13312;var statearr_13346_13380 = state_13312__$1;(statearr_13346_13380[2] = inst_13302);
(statearr_13346_13380[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13350 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13350[0] = state_machine__5507__auto__);
(statearr_13350[1] = 1);
return statearr_13350;
});
var state_machine__5507__auto____1 = (function (state_13312){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13312);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13351){if((e13351 instanceof Object))
{var ex__5510__auto__ = e13351;var statearr_13352_13381 = state_13312;(statearr_13352_13381[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13312);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13351;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13382 = state_13312;
state_13312 = G__13382;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13312){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13312);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13353 = f__5522__auto__.call(null);(statearr_13353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13354);
return statearr_13353;
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
cljs.core.async.Pub = (function (){var obj13384 = {};return obj13384;
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
return (function (p1__13385_SHARP_){if(cljs.core.truth_(p1__13385_SHARP_.call(null,topic)))
{return p1__13385_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13385_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13510 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13510 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13511){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13511 = meta13511;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13510.cljs$lang$type = true;
cljs.core.async.t13510.cljs$lang$ctorStr = "cljs.core.async/t13510";
cljs.core.async.t13510.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13510");
});})(mults,ensure_mult))
;
cljs.core.async.t13510.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13510.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13510.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13510.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13510.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13510.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13510.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13512){var self__ = this;
var _13512__$1 = this;return self__.meta13511;
});})(mults,ensure_mult))
;
cljs.core.async.t13510.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13512,meta13511__$1){var self__ = this;
var _13512__$1 = this;return (new cljs.core.async.t13510(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13511__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13510 = ((function (mults,ensure_mult){
return (function __GT_t13510(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13511){return (new cljs.core.async.t13510(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13511));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13510(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13634 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13586){var state_val_13587 = (state_13586[1]);if((state_val_13587 === 1))
{var state_13586__$1 = state_13586;var statearr_13588_13635 = state_13586__$1;(statearr_13588_13635[2] = null);
(statearr_13588_13635[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 2))
{var state_13586__$1 = state_13586;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13586__$1,4,ch);
} else
{if((state_val_13587 === 3))
{var inst_13584 = (state_13586[2]);var state_13586__$1 = state_13586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13586__$1,inst_13584);
} else
{if((state_val_13587 === 4))
{var inst_13515 = (state_13586[7]);var inst_13515__$1 = (state_13586[2]);var inst_13516 = (inst_13515__$1 == null);var state_13586__$1 = (function (){var statearr_13589 = state_13586;(statearr_13589[7] = inst_13515__$1);
return statearr_13589;
})();if(cljs.core.truth_(inst_13516))
{var statearr_13590_13636 = state_13586__$1;(statearr_13590_13636[1] = 5);
} else
{var statearr_13591_13637 = state_13586__$1;(statearr_13591_13637[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 5))
{var inst_13522 = cljs.core.deref.call(null,mults);var inst_13523 = cljs.core.vals.call(null,inst_13522);var inst_13524 = cljs.core.seq.call(null,inst_13523);var inst_13525 = inst_13524;var inst_13526 = null;var inst_13527 = 0;var inst_13528 = 0;var state_13586__$1 = (function (){var statearr_13592 = state_13586;(statearr_13592[8] = inst_13528);
(statearr_13592[9] = inst_13525);
(statearr_13592[10] = inst_13526);
(statearr_13592[11] = inst_13527);
return statearr_13592;
})();var statearr_13593_13638 = state_13586__$1;(statearr_13593_13638[2] = null);
(statearr_13593_13638[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 6))
{var inst_13565 = (state_13586[12]);var inst_13515 = (state_13586[7]);var inst_13563 = (state_13586[13]);var inst_13563__$1 = topic_fn.call(null,inst_13515);var inst_13564 = cljs.core.deref.call(null,mults);var inst_13565__$1 = cljs.core.get.call(null,inst_13564,inst_13563__$1);var state_13586__$1 = (function (){var statearr_13594 = state_13586;(statearr_13594[12] = inst_13565__$1);
(statearr_13594[13] = inst_13563__$1);
return statearr_13594;
})();if(cljs.core.truth_(inst_13565__$1))
{var statearr_13595_13639 = state_13586__$1;(statearr_13595_13639[1] = 19);
} else
{var statearr_13596_13640 = state_13586__$1;(statearr_13596_13640[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 7))
{var inst_13582 = (state_13586[2]);var state_13586__$1 = state_13586;var statearr_13597_13641 = state_13586__$1;(statearr_13597_13641[2] = inst_13582);
(statearr_13597_13641[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 8))
{var inst_13528 = (state_13586[8]);var inst_13527 = (state_13586[11]);var inst_13530 = (inst_13528 < inst_13527);var inst_13531 = inst_13530;var state_13586__$1 = state_13586;if(cljs.core.truth_(inst_13531))
{var statearr_13601_13642 = state_13586__$1;(statearr_13601_13642[1] = 10);
} else
{var statearr_13602_13643 = state_13586__$1;(statearr_13602_13643[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 9))
{var inst_13561 = (state_13586[2]);var state_13586__$1 = state_13586;var statearr_13603_13644 = state_13586__$1;(statearr_13603_13644[2] = inst_13561);
(statearr_13603_13644[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 10))
{var inst_13528 = (state_13586[8]);var inst_13525 = (state_13586[9]);var inst_13526 = (state_13586[10]);var inst_13527 = (state_13586[11]);var inst_13533 = cljs.core._nth.call(null,inst_13526,inst_13528);var inst_13534 = cljs.core.async.muxch_STAR_.call(null,inst_13533);var inst_13535 = cljs.core.async.close_BANG_.call(null,inst_13534);var inst_13536 = (inst_13528 + 1);var tmp13598 = inst_13525;var tmp13599 = inst_13526;var tmp13600 = inst_13527;var inst_13525__$1 = tmp13598;var inst_13526__$1 = tmp13599;var inst_13527__$1 = tmp13600;var inst_13528__$1 = inst_13536;var state_13586__$1 = (function (){var statearr_13604 = state_13586;(statearr_13604[8] = inst_13528__$1);
(statearr_13604[14] = inst_13535);
(statearr_13604[9] = inst_13525__$1);
(statearr_13604[10] = inst_13526__$1);
(statearr_13604[11] = inst_13527__$1);
return statearr_13604;
})();var statearr_13605_13645 = state_13586__$1;(statearr_13605_13645[2] = null);
(statearr_13605_13645[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 11))
{var inst_13539 = (state_13586[15]);var inst_13525 = (state_13586[9]);var inst_13539__$1 = cljs.core.seq.call(null,inst_13525);var state_13586__$1 = (function (){var statearr_13606 = state_13586;(statearr_13606[15] = inst_13539__$1);
return statearr_13606;
})();if(inst_13539__$1)
{var statearr_13607_13646 = state_13586__$1;(statearr_13607_13646[1] = 13);
} else
{var statearr_13608_13647 = state_13586__$1;(statearr_13608_13647[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 12))
{var inst_13559 = (state_13586[2]);var state_13586__$1 = state_13586;var statearr_13609_13648 = state_13586__$1;(statearr_13609_13648[2] = inst_13559);
(statearr_13609_13648[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 13))
{var inst_13539 = (state_13586[15]);var inst_13541 = cljs.core.chunked_seq_QMARK_.call(null,inst_13539);var state_13586__$1 = state_13586;if(inst_13541)
{var statearr_13610_13649 = state_13586__$1;(statearr_13610_13649[1] = 16);
} else
{var statearr_13611_13650 = state_13586__$1;(statearr_13611_13650[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 14))
{var state_13586__$1 = state_13586;var statearr_13612_13651 = state_13586__$1;(statearr_13612_13651[2] = null);
(statearr_13612_13651[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 15))
{var inst_13557 = (state_13586[2]);var state_13586__$1 = state_13586;var statearr_13613_13652 = state_13586__$1;(statearr_13613_13652[2] = inst_13557);
(statearr_13613_13652[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 16))
{var inst_13539 = (state_13586[15]);var inst_13543 = cljs.core.chunk_first.call(null,inst_13539);var inst_13544 = cljs.core.chunk_rest.call(null,inst_13539);var inst_13545 = cljs.core.count.call(null,inst_13543);var inst_13525 = inst_13544;var inst_13526 = inst_13543;var inst_13527 = inst_13545;var inst_13528 = 0;var state_13586__$1 = (function (){var statearr_13614 = state_13586;(statearr_13614[8] = inst_13528);
(statearr_13614[9] = inst_13525);
(statearr_13614[10] = inst_13526);
(statearr_13614[11] = inst_13527);
return statearr_13614;
})();var statearr_13615_13653 = state_13586__$1;(statearr_13615_13653[2] = null);
(statearr_13615_13653[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 17))
{var inst_13539 = (state_13586[15]);var inst_13548 = cljs.core.first.call(null,inst_13539);var inst_13549 = cljs.core.async.muxch_STAR_.call(null,inst_13548);var inst_13550 = cljs.core.async.close_BANG_.call(null,inst_13549);var inst_13551 = cljs.core.next.call(null,inst_13539);var inst_13525 = inst_13551;var inst_13526 = null;var inst_13527 = 0;var inst_13528 = 0;var state_13586__$1 = (function (){var statearr_13616 = state_13586;(statearr_13616[8] = inst_13528);
(statearr_13616[16] = inst_13550);
(statearr_13616[9] = inst_13525);
(statearr_13616[10] = inst_13526);
(statearr_13616[11] = inst_13527);
return statearr_13616;
})();var statearr_13617_13654 = state_13586__$1;(statearr_13617_13654[2] = null);
(statearr_13617_13654[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 18))
{var inst_13554 = (state_13586[2]);var state_13586__$1 = state_13586;var statearr_13618_13655 = state_13586__$1;(statearr_13618_13655[2] = inst_13554);
(statearr_13618_13655[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 19))
{var state_13586__$1 = state_13586;var statearr_13619_13656 = state_13586__$1;(statearr_13619_13656[2] = null);
(statearr_13619_13656[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 20))
{var state_13586__$1 = state_13586;var statearr_13620_13657 = state_13586__$1;(statearr_13620_13657[2] = null);
(statearr_13620_13657[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 21))
{var inst_13579 = (state_13586[2]);var state_13586__$1 = (function (){var statearr_13621 = state_13586;(statearr_13621[17] = inst_13579);
return statearr_13621;
})();var statearr_13622_13658 = state_13586__$1;(statearr_13622_13658[2] = null);
(statearr_13622_13658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 22))
{var inst_13576 = (state_13586[2]);var state_13586__$1 = state_13586;var statearr_13623_13659 = state_13586__$1;(statearr_13623_13659[2] = inst_13576);
(statearr_13623_13659[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 23))
{var inst_13563 = (state_13586[13]);var inst_13567 = (state_13586[2]);var inst_13568 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13563);var state_13586__$1 = (function (){var statearr_13624 = state_13586;(statearr_13624[18] = inst_13567);
return statearr_13624;
})();var statearr_13625_13660 = state_13586__$1;(statearr_13625_13660[2] = inst_13568);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13586__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13587 === 24))
{var inst_13565 = (state_13586[12]);var inst_13515 = (state_13586[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13586,23,Object,null,22);var inst_13572 = cljs.core.async.muxch_STAR_.call(null,inst_13565);var state_13586__$1 = state_13586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13586__$1,25,inst_13572,inst_13515);
} else
{if((state_val_13587 === 25))
{var inst_13574 = (state_13586[2]);var state_13586__$1 = state_13586;var statearr_13626_13661 = state_13586__$1;(statearr_13626_13661[2] = inst_13574);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13586__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13630 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13630[0] = state_machine__5507__auto__);
(statearr_13630[1] = 1);
return statearr_13630;
});
var state_machine__5507__auto____1 = (function (state_13586){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13586);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13631){if((e13631 instanceof Object))
{var ex__5510__auto__ = e13631;var statearr_13632_13662 = state_13586;(statearr_13632_13662[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13631;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13663 = state_13586;
state_13586 = G__13663;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13586){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13633 = f__5522__auto__.call(null);(statearr_13633[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13634);
return statearr_13633;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13800 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13770){var state_val_13771 = (state_13770[1]);if((state_val_13771 === 1))
{var state_13770__$1 = state_13770;var statearr_13772_13801 = state_13770__$1;(statearr_13772_13801[2] = null);
(statearr_13772_13801[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 2))
{var inst_13733 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13734 = 0;var state_13770__$1 = (function (){var statearr_13773 = state_13770;(statearr_13773[7] = inst_13733);
(statearr_13773[8] = inst_13734);
return statearr_13773;
})();var statearr_13774_13802 = state_13770__$1;(statearr_13774_13802[2] = null);
(statearr_13774_13802[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 3))
{var inst_13768 = (state_13770[2]);var state_13770__$1 = state_13770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13770__$1,inst_13768);
} else
{if((state_val_13771 === 4))
{var inst_13734 = (state_13770[8]);var inst_13736 = (inst_13734 < cnt);var state_13770__$1 = state_13770;if(cljs.core.truth_(inst_13736))
{var statearr_13775_13803 = state_13770__$1;(statearr_13775_13803[1] = 6);
} else
{var statearr_13776_13804 = state_13770__$1;(statearr_13776_13804[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 5))
{var inst_13754 = (state_13770[2]);var state_13770__$1 = (function (){var statearr_13777 = state_13770;(statearr_13777[9] = inst_13754);
return statearr_13777;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13770__$1,12,dchan);
} else
{if((state_val_13771 === 6))
{var state_13770__$1 = state_13770;var statearr_13778_13805 = state_13770__$1;(statearr_13778_13805[2] = null);
(statearr_13778_13805[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 7))
{var state_13770__$1 = state_13770;var statearr_13779_13806 = state_13770__$1;(statearr_13779_13806[2] = null);
(statearr_13779_13806[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 8))
{var inst_13752 = (state_13770[2]);var state_13770__$1 = state_13770;var statearr_13780_13807 = state_13770__$1;(statearr_13780_13807[2] = inst_13752);
(statearr_13780_13807[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 9))
{var inst_13734 = (state_13770[8]);var inst_13747 = (state_13770[2]);var inst_13748 = (inst_13734 + 1);var inst_13734__$1 = inst_13748;var state_13770__$1 = (function (){var statearr_13781 = state_13770;(statearr_13781[10] = inst_13747);
(statearr_13781[8] = inst_13734__$1);
return statearr_13781;
})();var statearr_13782_13808 = state_13770__$1;(statearr_13782_13808[2] = null);
(statearr_13782_13808[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 10))
{var inst_13738 = (state_13770[2]);var inst_13739 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13770__$1 = (function (){var statearr_13783 = state_13770;(statearr_13783[11] = inst_13738);
return statearr_13783;
})();var statearr_13784_13809 = state_13770__$1;(statearr_13784_13809[2] = inst_13739);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13770__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 11))
{var inst_13734 = (state_13770[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13770,10,Object,null,9);var inst_13743 = chs__$1.call(null,inst_13734);var inst_13744 = done.call(null,inst_13734);var inst_13745 = cljs.core.async.take_BANG_.call(null,inst_13743,inst_13744);var state_13770__$1 = state_13770;var statearr_13785_13810 = state_13770__$1;(statearr_13785_13810[2] = inst_13745);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13770__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 12))
{var inst_13756 = (state_13770[12]);var inst_13756__$1 = (state_13770[2]);var inst_13757 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13756__$1);var state_13770__$1 = (function (){var statearr_13786 = state_13770;(statearr_13786[12] = inst_13756__$1);
return statearr_13786;
})();if(cljs.core.truth_(inst_13757))
{var statearr_13787_13811 = state_13770__$1;(statearr_13787_13811[1] = 13);
} else
{var statearr_13788_13812 = state_13770__$1;(statearr_13788_13812[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 13))
{var inst_13759 = cljs.core.async.close_BANG_.call(null,out);var state_13770__$1 = state_13770;var statearr_13789_13813 = state_13770__$1;(statearr_13789_13813[2] = inst_13759);
(statearr_13789_13813[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 14))
{var inst_13756 = (state_13770[12]);var inst_13761 = cljs.core.apply.call(null,f,inst_13756);var state_13770__$1 = state_13770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13770__$1,16,out,inst_13761);
} else
{if((state_val_13771 === 15))
{var inst_13766 = (state_13770[2]);var state_13770__$1 = state_13770;var statearr_13790_13814 = state_13770__$1;(statearr_13790_13814[2] = inst_13766);
(statearr_13790_13814[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13771 === 16))
{var inst_13763 = (state_13770[2]);var state_13770__$1 = (function (){var statearr_13791 = state_13770;(statearr_13791[13] = inst_13763);
return statearr_13791;
})();var statearr_13792_13815 = state_13770__$1;(statearr_13792_13815[2] = null);
(statearr_13792_13815[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13796[0] = state_machine__5507__auto__);
(statearr_13796[1] = 1);
return statearr_13796;
});
var state_machine__5507__auto____1 = (function (state_13770){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13770);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13797){if((e13797 instanceof Object))
{var ex__5510__auto__ = e13797;var statearr_13798_13816 = state_13770;(statearr_13798_13816[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13770);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13817 = state_13770;
state_13770 = G__13817;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13770){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13799 = f__5522__auto__.call(null);(statearr_13799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13800);
return statearr_13799;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13925 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13901){var state_val_13902 = (state_13901[1]);if((state_val_13902 === 1))
{var inst_13872 = cljs.core.vec.call(null,chs);var inst_13873 = inst_13872;var state_13901__$1 = (function (){var statearr_13903 = state_13901;(statearr_13903[7] = inst_13873);
return statearr_13903;
})();var statearr_13904_13926 = state_13901__$1;(statearr_13904_13926[2] = null);
(statearr_13904_13926[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 2))
{var inst_13873 = (state_13901[7]);var inst_13875 = cljs.core.count.call(null,inst_13873);var inst_13876 = (inst_13875 > 0);var state_13901__$1 = state_13901;if(cljs.core.truth_(inst_13876))
{var statearr_13905_13927 = state_13901__$1;(statearr_13905_13927[1] = 4);
} else
{var statearr_13906_13928 = state_13901__$1;(statearr_13906_13928[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 3))
{var inst_13899 = (state_13901[2]);var state_13901__$1 = state_13901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13901__$1,inst_13899);
} else
{if((state_val_13902 === 4))
{var inst_13873 = (state_13901[7]);var state_13901__$1 = state_13901;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13901__$1,7,inst_13873);
} else
{if((state_val_13902 === 5))
{var inst_13895 = cljs.core.async.close_BANG_.call(null,out);var state_13901__$1 = state_13901;var statearr_13907_13929 = state_13901__$1;(statearr_13907_13929[2] = inst_13895);
(statearr_13907_13929[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 6))
{var inst_13897 = (state_13901[2]);var state_13901__$1 = state_13901;var statearr_13908_13930 = state_13901__$1;(statearr_13908_13930[2] = inst_13897);
(statearr_13908_13930[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 7))
{var inst_13881 = (state_13901[8]);var inst_13880 = (state_13901[9]);var inst_13880__$1 = (state_13901[2]);var inst_13881__$1 = cljs.core.nth.call(null,inst_13880__$1,0,null);var inst_13882 = cljs.core.nth.call(null,inst_13880__$1,1,null);var inst_13883 = (inst_13881__$1 == null);var state_13901__$1 = (function (){var statearr_13909 = state_13901;(statearr_13909[8] = inst_13881__$1);
(statearr_13909[10] = inst_13882);
(statearr_13909[9] = inst_13880__$1);
return statearr_13909;
})();if(cljs.core.truth_(inst_13883))
{var statearr_13910_13931 = state_13901__$1;(statearr_13910_13931[1] = 8);
} else
{var statearr_13911_13932 = state_13901__$1;(statearr_13911_13932[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 8))
{var inst_13881 = (state_13901[8]);var inst_13882 = (state_13901[10]);var inst_13880 = (state_13901[9]);var inst_13873 = (state_13901[7]);var inst_13885 = (function (){var c = inst_13882;var v = inst_13881;var vec__13878 = inst_13880;var cs = inst_13873;return ((function (c,v,vec__13878,cs,inst_13881,inst_13882,inst_13880,inst_13873,state_val_13902){
return (function (p1__13818_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13818_SHARP_);
});
;})(c,v,vec__13878,cs,inst_13881,inst_13882,inst_13880,inst_13873,state_val_13902))
})();var inst_13886 = cljs.core.filterv.call(null,inst_13885,inst_13873);var inst_13873__$1 = inst_13886;var state_13901__$1 = (function (){var statearr_13912 = state_13901;(statearr_13912[7] = inst_13873__$1);
return statearr_13912;
})();var statearr_13913_13933 = state_13901__$1;(statearr_13913_13933[2] = null);
(statearr_13913_13933[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 9))
{var inst_13881 = (state_13901[8]);var state_13901__$1 = state_13901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13901__$1,11,out,inst_13881);
} else
{if((state_val_13902 === 10))
{var inst_13893 = (state_13901[2]);var state_13901__$1 = state_13901;var statearr_13915_13934 = state_13901__$1;(statearr_13915_13934[2] = inst_13893);
(statearr_13915_13934[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13902 === 11))
{var inst_13873 = (state_13901[7]);var inst_13890 = (state_13901[2]);var tmp13914 = inst_13873;var inst_13873__$1 = tmp13914;var state_13901__$1 = (function (){var statearr_13916 = state_13901;(statearr_13916[7] = inst_13873__$1);
(statearr_13916[11] = inst_13890);
return statearr_13916;
})();var statearr_13917_13935 = state_13901__$1;(statearr_13917_13935[2] = null);
(statearr_13917_13935[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13921 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13921[0] = state_machine__5507__auto__);
(statearr_13921[1] = 1);
return statearr_13921;
});
var state_machine__5507__auto____1 = (function (state_13901){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13922){if((e13922 instanceof Object))
{var ex__5510__auto__ = e13922;var statearr_13923_13936 = state_13901;(statearr_13923_13936[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13937 = state_13901;
state_13901 = G__13937;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13901){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13924 = f__5522__auto__.call(null);(statearr_13924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13925);
return statearr_13924;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14030 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14007){var state_val_14008 = (state_14007[1]);if((state_val_14008 === 1))
{var inst_13984 = 0;var state_14007__$1 = (function (){var statearr_14009 = state_14007;(statearr_14009[7] = inst_13984);
return statearr_14009;
})();var statearr_14010_14031 = state_14007__$1;(statearr_14010_14031[2] = null);
(statearr_14010_14031[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 2))
{var inst_13984 = (state_14007[7]);var inst_13986 = (inst_13984 < n);var state_14007__$1 = state_14007;if(cljs.core.truth_(inst_13986))
{var statearr_14011_14032 = state_14007__$1;(statearr_14011_14032[1] = 4);
} else
{var statearr_14012_14033 = state_14007__$1;(statearr_14012_14033[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 3))
{var inst_14004 = (state_14007[2]);var inst_14005 = cljs.core.async.close_BANG_.call(null,out);var state_14007__$1 = (function (){var statearr_14013 = state_14007;(statearr_14013[8] = inst_14004);
return statearr_14013;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14007__$1,inst_14005);
} else
{if((state_val_14008 === 4))
{var state_14007__$1 = state_14007;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14007__$1,7,ch);
} else
{if((state_val_14008 === 5))
{var state_14007__$1 = state_14007;var statearr_14014_14034 = state_14007__$1;(statearr_14014_14034[2] = null);
(statearr_14014_14034[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 6))
{var inst_14002 = (state_14007[2]);var state_14007__$1 = state_14007;var statearr_14015_14035 = state_14007__$1;(statearr_14015_14035[2] = inst_14002);
(statearr_14015_14035[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 7))
{var inst_13989 = (state_14007[9]);var inst_13989__$1 = (state_14007[2]);var inst_13990 = (inst_13989__$1 == null);var inst_13991 = cljs.core.not.call(null,inst_13990);var state_14007__$1 = (function (){var statearr_14016 = state_14007;(statearr_14016[9] = inst_13989__$1);
return statearr_14016;
})();if(inst_13991)
{var statearr_14017_14036 = state_14007__$1;(statearr_14017_14036[1] = 8);
} else
{var statearr_14018_14037 = state_14007__$1;(statearr_14018_14037[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 8))
{var inst_13989 = (state_14007[9]);var state_14007__$1 = state_14007;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14007__$1,11,out,inst_13989);
} else
{if((state_val_14008 === 9))
{var state_14007__$1 = state_14007;var statearr_14019_14038 = state_14007__$1;(statearr_14019_14038[2] = null);
(statearr_14019_14038[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 10))
{var inst_13999 = (state_14007[2]);var state_14007__$1 = state_14007;var statearr_14020_14039 = state_14007__$1;(statearr_14020_14039[2] = inst_13999);
(statearr_14020_14039[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14008 === 11))
{var inst_13984 = (state_14007[7]);var inst_13994 = (state_14007[2]);var inst_13995 = (inst_13984 + 1);var inst_13984__$1 = inst_13995;var state_14007__$1 = (function (){var statearr_14021 = state_14007;(statearr_14021[10] = inst_13994);
(statearr_14021[7] = inst_13984__$1);
return statearr_14021;
})();var statearr_14022_14040 = state_14007__$1;(statearr_14022_14040[2] = null);
(statearr_14022_14040[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14026 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14026[0] = state_machine__5507__auto__);
(statearr_14026[1] = 1);
return statearr_14026;
});
var state_machine__5507__auto____1 = (function (state_14007){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14007);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14027){if((e14027 instanceof Object))
{var ex__5510__auto__ = e14027;var statearr_14028_14041 = state_14007;(statearr_14028_14041[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14007);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14027;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14042 = state_14007;
state_14007 = G__14042;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14007){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14007);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14029 = f__5522__auto__.call(null);(statearr_14029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14030);
return statearr_14029;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14139 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14114){var state_val_14115 = (state_14114[1]);if((state_val_14115 === 1))
{var inst_14091 = null;var state_14114__$1 = (function (){var statearr_14116 = state_14114;(statearr_14116[7] = inst_14091);
return statearr_14116;
})();var statearr_14117_14140 = state_14114__$1;(statearr_14117_14140[2] = null);
(statearr_14117_14140[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 2))
{var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14114__$1,4,ch);
} else
{if((state_val_14115 === 3))
{var inst_14111 = (state_14114[2]);var inst_14112 = cljs.core.async.close_BANG_.call(null,out);var state_14114__$1 = (function (){var statearr_14118 = state_14114;(statearr_14118[8] = inst_14111);
return statearr_14118;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14114__$1,inst_14112);
} else
{if((state_val_14115 === 4))
{var inst_14094 = (state_14114[9]);var inst_14094__$1 = (state_14114[2]);var inst_14095 = (inst_14094__$1 == null);var inst_14096 = cljs.core.not.call(null,inst_14095);var state_14114__$1 = (function (){var statearr_14119 = state_14114;(statearr_14119[9] = inst_14094__$1);
return statearr_14119;
})();if(inst_14096)
{var statearr_14120_14141 = state_14114__$1;(statearr_14120_14141[1] = 5);
} else
{var statearr_14121_14142 = state_14114__$1;(statearr_14121_14142[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 5))
{var inst_14091 = (state_14114[7]);var inst_14094 = (state_14114[9]);var inst_14098 = cljs.core._EQ_.call(null,inst_14094,inst_14091);var state_14114__$1 = state_14114;if(inst_14098)
{var statearr_14122_14143 = state_14114__$1;(statearr_14122_14143[1] = 8);
} else
{var statearr_14123_14144 = state_14114__$1;(statearr_14123_14144[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 6))
{var state_14114__$1 = state_14114;var statearr_14125_14145 = state_14114__$1;(statearr_14125_14145[2] = null);
(statearr_14125_14145[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 7))
{var inst_14109 = (state_14114[2]);var state_14114__$1 = state_14114;var statearr_14126_14146 = state_14114__$1;(statearr_14126_14146[2] = inst_14109);
(statearr_14126_14146[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 8))
{var inst_14091 = (state_14114[7]);var tmp14124 = inst_14091;var inst_14091__$1 = tmp14124;var state_14114__$1 = (function (){var statearr_14127 = state_14114;(statearr_14127[7] = inst_14091__$1);
return statearr_14127;
})();var statearr_14128_14147 = state_14114__$1;(statearr_14128_14147[2] = null);
(statearr_14128_14147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 9))
{var inst_14094 = (state_14114[9]);var state_14114__$1 = state_14114;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14114__$1,11,out,inst_14094);
} else
{if((state_val_14115 === 10))
{var inst_14106 = (state_14114[2]);var state_14114__$1 = state_14114;var statearr_14129_14148 = state_14114__$1;(statearr_14129_14148[2] = inst_14106);
(statearr_14129_14148[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14115 === 11))
{var inst_14094 = (state_14114[9]);var inst_14103 = (state_14114[2]);var inst_14091 = inst_14094;var state_14114__$1 = (function (){var statearr_14130 = state_14114;(statearr_14130[7] = inst_14091);
(statearr_14130[10] = inst_14103);
return statearr_14130;
})();var statearr_14131_14149 = state_14114__$1;(statearr_14131_14149[2] = null);
(statearr_14131_14149[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14135 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14135[0] = state_machine__5507__auto__);
(statearr_14135[1] = 1);
return statearr_14135;
});
var state_machine__5507__auto____1 = (function (state_14114){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14114);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14136){if((e14136 instanceof Object))
{var ex__5510__auto__ = e14136;var statearr_14137_14150 = state_14114;(statearr_14137_14150[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14114);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14136;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14151 = state_14114;
state_14114 = G__14151;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14114){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14138 = f__5522__auto__.call(null);(statearr_14138[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14139);
return statearr_14138;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14286 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14256){var state_val_14257 = (state_14256[1]);if((state_val_14257 === 1))
{var inst_14219 = (new Array(n));var inst_14220 = inst_14219;var inst_14221 = 0;var state_14256__$1 = (function (){var statearr_14258 = state_14256;(statearr_14258[7] = inst_14220);
(statearr_14258[8] = inst_14221);
return statearr_14258;
})();var statearr_14259_14287 = state_14256__$1;(statearr_14259_14287[2] = null);
(statearr_14259_14287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 2))
{var state_14256__$1 = state_14256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14256__$1,4,ch);
} else
{if((state_val_14257 === 3))
{var inst_14254 = (state_14256[2]);var state_14256__$1 = state_14256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14256__$1,inst_14254);
} else
{if((state_val_14257 === 4))
{var inst_14224 = (state_14256[9]);var inst_14224__$1 = (state_14256[2]);var inst_14225 = (inst_14224__$1 == null);var inst_14226 = cljs.core.not.call(null,inst_14225);var state_14256__$1 = (function (){var statearr_14260 = state_14256;(statearr_14260[9] = inst_14224__$1);
return statearr_14260;
})();if(inst_14226)
{var statearr_14261_14288 = state_14256__$1;(statearr_14261_14288[1] = 5);
} else
{var statearr_14262_14289 = state_14256__$1;(statearr_14262_14289[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 5))
{var inst_14220 = (state_14256[7]);var inst_14221 = (state_14256[8]);var inst_14229 = (state_14256[10]);var inst_14224 = (state_14256[9]);var inst_14228 = (inst_14220[inst_14221] = inst_14224);var inst_14229__$1 = (inst_14221 + 1);var inst_14230 = (inst_14229__$1 < n);var state_14256__$1 = (function (){var statearr_14263 = state_14256;(statearr_14263[11] = inst_14228);
(statearr_14263[10] = inst_14229__$1);
return statearr_14263;
})();if(cljs.core.truth_(inst_14230))
{var statearr_14264_14290 = state_14256__$1;(statearr_14264_14290[1] = 8);
} else
{var statearr_14265_14291 = state_14256__$1;(statearr_14265_14291[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 6))
{var inst_14221 = (state_14256[8]);var inst_14242 = (inst_14221 > 0);var state_14256__$1 = state_14256;if(cljs.core.truth_(inst_14242))
{var statearr_14267_14292 = state_14256__$1;(statearr_14267_14292[1] = 12);
} else
{var statearr_14268_14293 = state_14256__$1;(statearr_14268_14293[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 7))
{var inst_14252 = (state_14256[2]);var state_14256__$1 = state_14256;var statearr_14269_14294 = state_14256__$1;(statearr_14269_14294[2] = inst_14252);
(statearr_14269_14294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 8))
{var inst_14220 = (state_14256[7]);var inst_14229 = (state_14256[10]);var tmp14266 = inst_14220;var inst_14220__$1 = tmp14266;var inst_14221 = inst_14229;var state_14256__$1 = (function (){var statearr_14270 = state_14256;(statearr_14270[7] = inst_14220__$1);
(statearr_14270[8] = inst_14221);
return statearr_14270;
})();var statearr_14271_14295 = state_14256__$1;(statearr_14271_14295[2] = null);
(statearr_14271_14295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 9))
{var inst_14220 = (state_14256[7]);var inst_14234 = cljs.core.vec.call(null,inst_14220);var state_14256__$1 = state_14256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14256__$1,11,out,inst_14234);
} else
{if((state_val_14257 === 10))
{var inst_14240 = (state_14256[2]);var state_14256__$1 = state_14256;var statearr_14272_14296 = state_14256__$1;(statearr_14272_14296[2] = inst_14240);
(statearr_14272_14296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 11))
{var inst_14236 = (state_14256[2]);var inst_14237 = (new Array(n));var inst_14220 = inst_14237;var inst_14221 = 0;var state_14256__$1 = (function (){var statearr_14273 = state_14256;(statearr_14273[7] = inst_14220);
(statearr_14273[8] = inst_14221);
(statearr_14273[12] = inst_14236);
return statearr_14273;
})();var statearr_14274_14297 = state_14256__$1;(statearr_14274_14297[2] = null);
(statearr_14274_14297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 12))
{var inst_14220 = (state_14256[7]);var inst_14244 = cljs.core.vec.call(null,inst_14220);var state_14256__$1 = state_14256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14256__$1,15,out,inst_14244);
} else
{if((state_val_14257 === 13))
{var state_14256__$1 = state_14256;var statearr_14275_14298 = state_14256__$1;(statearr_14275_14298[2] = null);
(statearr_14275_14298[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 14))
{var inst_14249 = (state_14256[2]);var inst_14250 = cljs.core.async.close_BANG_.call(null,out);var state_14256__$1 = (function (){var statearr_14276 = state_14256;(statearr_14276[13] = inst_14249);
return statearr_14276;
})();var statearr_14277_14299 = state_14256__$1;(statearr_14277_14299[2] = inst_14250);
(statearr_14277_14299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14257 === 15))
{var inst_14246 = (state_14256[2]);var state_14256__$1 = state_14256;var statearr_14278_14300 = state_14256__$1;(statearr_14278_14300[2] = inst_14246);
(statearr_14278_14300[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14282[0] = state_machine__5507__auto__);
(statearr_14282[1] = 1);
return statearr_14282;
});
var state_machine__5507__auto____1 = (function (state_14256){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14256);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14283){if((e14283 instanceof Object))
{var ex__5510__auto__ = e14283;var statearr_14284_14301 = state_14256;(statearr_14284_14301[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14302 = state_14256;
state_14256 = G__14302;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14256){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14285 = f__5522__auto__.call(null);(statearr_14285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14286);
return statearr_14285;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14445 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14415){var state_val_14416 = (state_14415[1]);if((state_val_14416 === 1))
{var inst_14374 = [];var inst_14375 = inst_14374;var inst_14376 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14415__$1 = (function (){var statearr_14417 = state_14415;(statearr_14417[7] = inst_14376);
(statearr_14417[8] = inst_14375);
return statearr_14417;
})();var statearr_14418_14446 = state_14415__$1;(statearr_14418_14446[2] = null);
(statearr_14418_14446[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 2))
{var state_14415__$1 = state_14415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14415__$1,4,ch);
} else
{if((state_val_14416 === 3))
{var inst_14413 = (state_14415[2]);var state_14415__$1 = state_14415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14415__$1,inst_14413);
} else
{if((state_val_14416 === 4))
{var inst_14379 = (state_14415[9]);var inst_14379__$1 = (state_14415[2]);var inst_14380 = (inst_14379__$1 == null);var inst_14381 = cljs.core.not.call(null,inst_14380);var state_14415__$1 = (function (){var statearr_14419 = state_14415;(statearr_14419[9] = inst_14379__$1);
return statearr_14419;
})();if(inst_14381)
{var statearr_14420_14447 = state_14415__$1;(statearr_14420_14447[1] = 5);
} else
{var statearr_14421_14448 = state_14415__$1;(statearr_14421_14448[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 5))
{var inst_14379 = (state_14415[9]);var inst_14376 = (state_14415[7]);var inst_14383 = (state_14415[10]);var inst_14383__$1 = f.call(null,inst_14379);var inst_14384 = cljs.core._EQ_.call(null,inst_14383__$1,inst_14376);var inst_14385 = cljs.core.keyword_identical_QMARK_.call(null,inst_14376,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14386 = (inst_14384) || (inst_14385);var state_14415__$1 = (function (){var statearr_14422 = state_14415;(statearr_14422[10] = inst_14383__$1);
return statearr_14422;
})();if(cljs.core.truth_(inst_14386))
{var statearr_14423_14449 = state_14415__$1;(statearr_14423_14449[1] = 8);
} else
{var statearr_14424_14450 = state_14415__$1;(statearr_14424_14450[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 6))
{var inst_14375 = (state_14415[8]);var inst_14400 = inst_14375.length;var inst_14401 = (inst_14400 > 0);var state_14415__$1 = state_14415;if(cljs.core.truth_(inst_14401))
{var statearr_14426_14451 = state_14415__$1;(statearr_14426_14451[1] = 12);
} else
{var statearr_14427_14452 = state_14415__$1;(statearr_14427_14452[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 7))
{var inst_14411 = (state_14415[2]);var state_14415__$1 = state_14415;var statearr_14428_14453 = state_14415__$1;(statearr_14428_14453[2] = inst_14411);
(statearr_14428_14453[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 8))
{var inst_14379 = (state_14415[9]);var inst_14375 = (state_14415[8]);var inst_14383 = (state_14415[10]);var inst_14388 = inst_14375.push(inst_14379);var tmp14425 = inst_14375;var inst_14375__$1 = tmp14425;var inst_14376 = inst_14383;var state_14415__$1 = (function (){var statearr_14429 = state_14415;(statearr_14429[7] = inst_14376);
(statearr_14429[8] = inst_14375__$1);
(statearr_14429[11] = inst_14388);
return statearr_14429;
})();var statearr_14430_14454 = state_14415__$1;(statearr_14430_14454[2] = null);
(statearr_14430_14454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 9))
{var inst_14375 = (state_14415[8]);var inst_14391 = cljs.core.vec.call(null,inst_14375);var state_14415__$1 = state_14415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14415__$1,11,out,inst_14391);
} else
{if((state_val_14416 === 10))
{var inst_14398 = (state_14415[2]);var state_14415__$1 = state_14415;var statearr_14431_14455 = state_14415__$1;(statearr_14431_14455[2] = inst_14398);
(statearr_14431_14455[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 11))
{var inst_14379 = (state_14415[9]);var inst_14383 = (state_14415[10]);var inst_14393 = (state_14415[2]);var inst_14394 = [];var inst_14395 = inst_14394.push(inst_14379);var inst_14375 = inst_14394;var inst_14376 = inst_14383;var state_14415__$1 = (function (){var statearr_14432 = state_14415;(statearr_14432[7] = inst_14376);
(statearr_14432[8] = inst_14375);
(statearr_14432[12] = inst_14393);
(statearr_14432[13] = inst_14395);
return statearr_14432;
})();var statearr_14433_14456 = state_14415__$1;(statearr_14433_14456[2] = null);
(statearr_14433_14456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 12))
{var inst_14375 = (state_14415[8]);var inst_14403 = cljs.core.vec.call(null,inst_14375);var state_14415__$1 = state_14415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14415__$1,15,out,inst_14403);
} else
{if((state_val_14416 === 13))
{var state_14415__$1 = state_14415;var statearr_14434_14457 = state_14415__$1;(statearr_14434_14457[2] = null);
(statearr_14434_14457[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 14))
{var inst_14408 = (state_14415[2]);var inst_14409 = cljs.core.async.close_BANG_.call(null,out);var state_14415__$1 = (function (){var statearr_14435 = state_14415;(statearr_14435[14] = inst_14408);
return statearr_14435;
})();var statearr_14436_14458 = state_14415__$1;(statearr_14436_14458[2] = inst_14409);
(statearr_14436_14458[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14416 === 15))
{var inst_14405 = (state_14415[2]);var state_14415__$1 = state_14415;var statearr_14437_14459 = state_14415__$1;(statearr_14437_14459[2] = inst_14405);
(statearr_14437_14459[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14441 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14441[0] = state_machine__5507__auto__);
(statearr_14441[1] = 1);
return statearr_14441;
});
var state_machine__5507__auto____1 = (function (state_14415){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14415);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14442){if((e14442 instanceof Object))
{var ex__5510__auto__ = e14442;var statearr_14443_14460 = state_14415;(statearr_14443_14460[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14415);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14442;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14461 = state_14415;
state_14415 = G__14461;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14415){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14444 = f__5522__auto__.call(null);(statearr_14444[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14445);
return statearr_14444;
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