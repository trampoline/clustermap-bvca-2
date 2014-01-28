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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t12952 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12952 = (function (f,fn_handler,meta12953){
this.f = f;
this.fn_handler = fn_handler;
this.meta12953 = meta12953;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12952.cljs$lang$type = true;
cljs.core.async.t12952.cljs$lang$ctorStr = "cljs.core.async/t12952";
cljs.core.async.t12952.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12952");
});
cljs.core.async.t12952.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12952.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t12952.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t12952.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12954){var self__ = this;
var _12954__$1 = this;return self__.meta12953;
});
cljs.core.async.t12952.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12954,meta12953__$1){var self__ = this;
var _12954__$1 = this;return (new cljs.core.async.t12952(self__.f,self__.fn_handler,meta12953__$1));
});
cljs.core.async.__GT_t12952 = (function __GT_t12952(f__$1,fn_handler__$1,meta12953){return (new cljs.core.async.t12952(f__$1,fn_handler__$1,meta12953));
});
}
return (new cljs.core.async.t12952(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__12956 = buff;if(G__12956)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__12956.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__12956.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12956);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__12956);
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
{var val_12957 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_12957);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_12957);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___12958 = n;var x_12959 = 0;while(true){
if((x_12959 < n__4248__auto___12958))
{(a[x_12959] = 0);
{
var G__12960 = (x_12959 + 1);
x_12959 = G__12960;
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
var G__12961 = (i + 1);
i = G__12961;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t12965 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12965 = (function (flag,alt_flag,meta12966){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta12966 = meta12966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12965.cljs$lang$type = true;
cljs.core.async.t12965.cljs$lang$ctorStr = "cljs.core.async/t12965";
cljs.core.async.t12965.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12965");
});
cljs.core.async.t12965.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12965.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t12965.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t12965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12967){var self__ = this;
var _12967__$1 = this;return self__.meta12966;
});
cljs.core.async.t12965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12967,meta12966__$1){var self__ = this;
var _12967__$1 = this;return (new cljs.core.async.t12965(self__.flag,self__.alt_flag,meta12966__$1));
});
cljs.core.async.__GT_t12965 = (function __GT_t12965(flag__$1,alt_flag__$1,meta12966){return (new cljs.core.async.t12965(flag__$1,alt_flag__$1,meta12966));
});
}
return (new cljs.core.async.t12965(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t12971 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12971 = (function (cb,flag,alt_handler,meta12972){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta12972 = meta12972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12971.cljs$lang$type = true;
cljs.core.async.t12971.cljs$lang$ctorStr = "cljs.core.async/t12971";
cljs.core.async.t12971.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12971");
});
cljs.core.async.t12971.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12971.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t12971.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t12971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12973){var self__ = this;
var _12973__$1 = this;return self__.meta12972;
});
cljs.core.async.t12971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12973,meta12972__$1){var self__ = this;
var _12973__$1 = this;return (new cljs.core.async.t12971(self__.cb,self__.flag,self__.alt_handler,meta12972__$1));
});
cljs.core.async.__GT_t12971 = (function __GT_t12971(cb__$1,flag__$1,alt_handler__$1,meta12972){return (new cljs.core.async.t12971(cb__$1,flag__$1,alt_handler__$1,meta12972));
});
}
return (new cljs.core.async.t12971(cb,flag,alt_handler,null));
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
return (function (p1__12974_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__12974_SHARP_,port], null));
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
var G__12975 = (i + 1);
i = G__12975;
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
var alts_BANG___delegate = function (ports,p__12976){var map__12978 = p__12976;var map__12978__$1 = ((cljs.core.seq_QMARK_.call(null,map__12978))?cljs.core.apply.call(null,cljs.core.hash_map,map__12978):map__12978);var opts = map__12978__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__12976 = null;if (arguments.length > 1) {
  p__12976 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__12976);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__12979){
var ports = cljs.core.first(arglist__12979);
var p__12976 = cljs.core.rest(arglist__12979);
return alts_BANG___delegate(ports,p__12976);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t12987 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12987 = (function (ch,f,map_LT_,meta12988){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12988 = meta12988;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12987.cljs$lang$type = true;
cljs.core.async.t12987.cljs$lang$ctorStr = "cljs.core.async/t12987";
cljs.core.async.t12987.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12987");
});
cljs.core.async.t12987.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12987.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t12987.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12987.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t12990 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12990 = (function (fn1,_,meta12988,ch,f,map_LT_,meta12991){
this.fn1 = fn1;
this._ = _;
this.meta12988 = meta12988;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta12991 = meta12991;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12990.cljs$lang$type = true;
cljs.core.async.t12990.cljs$lang$ctorStr = "cljs.core.async/t12990";
cljs.core.async.t12990.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12990");
});
cljs.core.async.t12990.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t12990.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t12990.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t12990.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__12980_SHARP_){return f1.call(null,(((p1__12980_SHARP_ == null))?null:self__.f.call(null,p1__12980_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t12990.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12992){var self__ = this;
var _12992__$1 = this;return self__.meta12991;
});
cljs.core.async.t12990.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12992,meta12991__$1){var self__ = this;
var _12992__$1 = this;return (new cljs.core.async.t12990(self__.fn1,self__._,self__.meta12988,self__.ch,self__.f,self__.map_LT_,meta12991__$1));
});
cljs.core.async.__GT_t12990 = (function __GT_t12990(fn1__$1,___$2,meta12988__$1,ch__$2,f__$2,map_LT___$2,meta12991){return (new cljs.core.async.t12990(fn1__$1,___$2,meta12988__$1,ch__$2,f__$2,map_LT___$2,meta12991));
});
}
return (new cljs.core.async.t12990(fn1,___$1,self__.meta12988,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t12987.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12987.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12987.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12989){var self__ = this;
var _12989__$1 = this;return self__.meta12988;
});
cljs.core.async.t12987.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12989,meta12988__$1){var self__ = this;
var _12989__$1 = this;return (new cljs.core.async.t12987(self__.ch,self__.f,self__.map_LT_,meta12988__$1));
});
cljs.core.async.__GT_t12987 = (function __GT_t12987(ch__$1,f__$1,map_LT___$1,meta12988){return (new cljs.core.async.t12987(ch__$1,f__$1,map_LT___$1,meta12988));
});
}
return (new cljs.core.async.t12987(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t12996 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12996 = (function (ch,f,map_GT_,meta12997){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta12997 = meta12997;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12996.cljs$lang$type = true;
cljs.core.async.t12996.cljs$lang$ctorStr = "cljs.core.async/t12996";
cljs.core.async.t12996.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12996");
});
cljs.core.async.t12996.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t12996.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t12996.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t12996.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t12996.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t12996.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t12996.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12998){var self__ = this;
var _12998__$1 = this;return self__.meta12997;
});
cljs.core.async.t12996.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12998,meta12997__$1){var self__ = this;
var _12998__$1 = this;return (new cljs.core.async.t12996(self__.ch,self__.f,self__.map_GT_,meta12997__$1));
});
cljs.core.async.__GT_t12996 = (function __GT_t12996(ch__$1,f__$1,map_GT___$1,meta12997){return (new cljs.core.async.t12996(ch__$1,f__$1,map_GT___$1,meta12997));
});
}
return (new cljs.core.async.t12996(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13002 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13002 = (function (ch,p,filter_GT_,meta13003){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13003 = meta13003;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13002.cljs$lang$type = true;
cljs.core.async.t13002.cljs$lang$ctorStr = "cljs.core.async/t13002";
cljs.core.async.t13002.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13002");
});
cljs.core.async.t13002.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13002.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13002.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13002.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13002.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13002.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13002.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13004){var self__ = this;
var _13004__$1 = this;return self__.meta13003;
});
cljs.core.async.t13002.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13004,meta13003__$1){var self__ = this;
var _13004__$1 = this;return (new cljs.core.async.t13002(self__.ch,self__.p,self__.filter_GT_,meta13003__$1));
});
cljs.core.async.__GT_t13002 = (function __GT_t13002(ch__$1,p__$1,filter_GT___$1,meta13003){return (new cljs.core.async.t13002(ch__$1,p__$1,filter_GT___$1,meta13003));
});
}
return (new cljs.core.async.t13002(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13087 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13066){var state_val_13067 = (state_13066[1]);if((state_val_13067 === 1))
{var state_13066__$1 = state_13066;var statearr_13068_13088 = state_13066__$1;(statearr_13068_13088[2] = null);
(statearr_13068_13088[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 2))
{var state_13066__$1 = state_13066;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13066__$1,4,ch);
} else
{if((state_val_13067 === 3))
{var inst_13064 = (state_13066[2]);var state_13066__$1 = state_13066;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13066__$1,inst_13064);
} else
{if((state_val_13067 === 4))
{var inst_13048 = (state_13066[7]);var inst_13048__$1 = (state_13066[2]);var inst_13049 = (inst_13048__$1 == null);var state_13066__$1 = (function (){var statearr_13069 = state_13066;(statearr_13069[7] = inst_13048__$1);
return statearr_13069;
})();if(cljs.core.truth_(inst_13049))
{var statearr_13070_13089 = state_13066__$1;(statearr_13070_13089[1] = 5);
} else
{var statearr_13071_13090 = state_13066__$1;(statearr_13071_13090[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 5))
{var inst_13051 = cljs.core.async.close_BANG_.call(null,out);var state_13066__$1 = state_13066;var statearr_13072_13091 = state_13066__$1;(statearr_13072_13091[2] = inst_13051);
(statearr_13072_13091[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 6))
{var inst_13048 = (state_13066[7]);var inst_13053 = p.call(null,inst_13048);var state_13066__$1 = state_13066;if(cljs.core.truth_(inst_13053))
{var statearr_13073_13092 = state_13066__$1;(statearr_13073_13092[1] = 8);
} else
{var statearr_13074_13093 = state_13066__$1;(statearr_13074_13093[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 7))
{var inst_13062 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13075_13094 = state_13066__$1;(statearr_13075_13094[2] = inst_13062);
(statearr_13075_13094[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 8))
{var inst_13048 = (state_13066[7]);var state_13066__$1 = state_13066;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13066__$1,11,out,inst_13048);
} else
{if((state_val_13067 === 9))
{var state_13066__$1 = state_13066;var statearr_13076_13095 = state_13066__$1;(statearr_13076_13095[2] = null);
(statearr_13076_13095[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 10))
{var inst_13059 = (state_13066[2]);var state_13066__$1 = (function (){var statearr_13077 = state_13066;(statearr_13077[8] = inst_13059);
return statearr_13077;
})();var statearr_13078_13096 = state_13066__$1;(statearr_13078_13096[2] = null);
(statearr_13078_13096[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13067 === 11))
{var inst_13056 = (state_13066[2]);var state_13066__$1 = state_13066;var statearr_13079_13097 = state_13066__$1;(statearr_13079_13097[2] = inst_13056);
(statearr_13079_13097[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13083 = [null,null,null,null,null,null,null,null,null];(statearr_13083[0] = state_machine__5507__auto__);
(statearr_13083[1] = 1);
return statearr_13083;
});
var state_machine__5507__auto____1 = (function (state_13066){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13066);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13084){if((e13084 instanceof Object))
{var ex__5510__auto__ = e13084;var statearr_13085_13098 = state_13066;(statearr_13085_13098[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13066);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13084;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13099 = state_13066;
state_13066 = G__13099;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13066){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13066);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13086 = f__5522__auto__.call(null);(statearr_13086[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13087);
return statearr_13086;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13251){var state_val_13252 = (state_13251[1]);if((state_val_13252 === 1))
{var state_13251__$1 = state_13251;var statearr_13253_13290 = state_13251__$1;(statearr_13253_13290[2] = null);
(statearr_13253_13290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 2))
{var state_13251__$1 = state_13251;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13251__$1,4,in$);
} else
{if((state_val_13252 === 3))
{var inst_13249 = (state_13251[2]);var state_13251__$1 = state_13251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13251__$1,inst_13249);
} else
{if((state_val_13252 === 4))
{var inst_13197 = (state_13251[7]);var inst_13197__$1 = (state_13251[2]);var inst_13198 = (inst_13197__$1 == null);var state_13251__$1 = (function (){var statearr_13254 = state_13251;(statearr_13254[7] = inst_13197__$1);
return statearr_13254;
})();if(cljs.core.truth_(inst_13198))
{var statearr_13255_13291 = state_13251__$1;(statearr_13255_13291[1] = 5);
} else
{var statearr_13256_13292 = state_13251__$1;(statearr_13256_13292[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 5))
{var inst_13200 = cljs.core.async.close_BANG_.call(null,out);var state_13251__$1 = state_13251;var statearr_13257_13293 = state_13251__$1;(statearr_13257_13293[2] = inst_13200);
(statearr_13257_13293[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 6))
{var inst_13197 = (state_13251[7]);var inst_13202 = f.call(null,inst_13197);var inst_13207 = cljs.core.seq.call(null,inst_13202);var inst_13208 = inst_13207;var inst_13209 = null;var inst_13210 = 0;var inst_13211 = 0;var state_13251__$1 = (function (){var statearr_13258 = state_13251;(statearr_13258[8] = inst_13209);
(statearr_13258[9] = inst_13210);
(statearr_13258[10] = inst_13211);
(statearr_13258[11] = inst_13208);
return statearr_13258;
})();var statearr_13259_13294 = state_13251__$1;(statearr_13259_13294[2] = null);
(statearr_13259_13294[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 7))
{var inst_13247 = (state_13251[2]);var state_13251__$1 = state_13251;var statearr_13260_13295 = state_13251__$1;(statearr_13260_13295[2] = inst_13247);
(statearr_13260_13295[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 8))
{var inst_13210 = (state_13251[9]);var inst_13211 = (state_13251[10]);var inst_13213 = (inst_13211 < inst_13210);var inst_13214 = inst_13213;var state_13251__$1 = state_13251;if(cljs.core.truth_(inst_13214))
{var statearr_13261_13296 = state_13251__$1;(statearr_13261_13296[1] = 10);
} else
{var statearr_13262_13297 = state_13251__$1;(statearr_13262_13297[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 9))
{var inst_13244 = (state_13251[2]);var state_13251__$1 = (function (){var statearr_13263 = state_13251;(statearr_13263[12] = inst_13244);
return statearr_13263;
})();var statearr_13264_13298 = state_13251__$1;(statearr_13264_13298[2] = null);
(statearr_13264_13298[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 10))
{var inst_13209 = (state_13251[8]);var inst_13211 = (state_13251[10]);var inst_13216 = cljs.core._nth.call(null,inst_13209,inst_13211);var state_13251__$1 = state_13251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13251__$1,13,out,inst_13216);
} else
{if((state_val_13252 === 11))
{var inst_13222 = (state_13251[13]);var inst_13208 = (state_13251[11]);var inst_13222__$1 = cljs.core.seq.call(null,inst_13208);var state_13251__$1 = (function (){var statearr_13268 = state_13251;(statearr_13268[13] = inst_13222__$1);
return statearr_13268;
})();if(inst_13222__$1)
{var statearr_13269_13299 = state_13251__$1;(statearr_13269_13299[1] = 14);
} else
{var statearr_13270_13300 = state_13251__$1;(statearr_13270_13300[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 12))
{var inst_13242 = (state_13251[2]);var state_13251__$1 = state_13251;var statearr_13271_13301 = state_13251__$1;(statearr_13271_13301[2] = inst_13242);
(statearr_13271_13301[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 13))
{var inst_13209 = (state_13251[8]);var inst_13210 = (state_13251[9]);var inst_13211 = (state_13251[10]);var inst_13208 = (state_13251[11]);var inst_13218 = (state_13251[2]);var inst_13219 = (inst_13211 + 1);var tmp13265 = inst_13209;var tmp13266 = inst_13210;var tmp13267 = inst_13208;var inst_13208__$1 = tmp13267;var inst_13209__$1 = tmp13265;var inst_13210__$1 = tmp13266;var inst_13211__$1 = inst_13219;var state_13251__$1 = (function (){var statearr_13272 = state_13251;(statearr_13272[8] = inst_13209__$1);
(statearr_13272[9] = inst_13210__$1);
(statearr_13272[10] = inst_13211__$1);
(statearr_13272[14] = inst_13218);
(statearr_13272[11] = inst_13208__$1);
return statearr_13272;
})();var statearr_13273_13302 = state_13251__$1;(statearr_13273_13302[2] = null);
(statearr_13273_13302[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 14))
{var inst_13222 = (state_13251[13]);var inst_13224 = cljs.core.chunked_seq_QMARK_.call(null,inst_13222);var state_13251__$1 = state_13251;if(inst_13224)
{var statearr_13274_13303 = state_13251__$1;(statearr_13274_13303[1] = 17);
} else
{var statearr_13275_13304 = state_13251__$1;(statearr_13275_13304[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 15))
{var state_13251__$1 = state_13251;var statearr_13276_13305 = state_13251__$1;(statearr_13276_13305[2] = null);
(statearr_13276_13305[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 16))
{var inst_13240 = (state_13251[2]);var state_13251__$1 = state_13251;var statearr_13277_13306 = state_13251__$1;(statearr_13277_13306[2] = inst_13240);
(statearr_13277_13306[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 17))
{var inst_13222 = (state_13251[13]);var inst_13226 = cljs.core.chunk_first.call(null,inst_13222);var inst_13227 = cljs.core.chunk_rest.call(null,inst_13222);var inst_13228 = cljs.core.count.call(null,inst_13226);var inst_13208 = inst_13227;var inst_13209 = inst_13226;var inst_13210 = inst_13228;var inst_13211 = 0;var state_13251__$1 = (function (){var statearr_13278 = state_13251;(statearr_13278[8] = inst_13209);
(statearr_13278[9] = inst_13210);
(statearr_13278[10] = inst_13211);
(statearr_13278[11] = inst_13208);
return statearr_13278;
})();var statearr_13279_13307 = state_13251__$1;(statearr_13279_13307[2] = null);
(statearr_13279_13307[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 18))
{var inst_13222 = (state_13251[13]);var inst_13231 = cljs.core.first.call(null,inst_13222);var state_13251__$1 = state_13251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13251__$1,20,out,inst_13231);
} else
{if((state_val_13252 === 19))
{var inst_13237 = (state_13251[2]);var state_13251__$1 = state_13251;var statearr_13280_13308 = state_13251__$1;(statearr_13280_13308[2] = inst_13237);
(statearr_13280_13308[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13252 === 20))
{var inst_13222 = (state_13251[13]);var inst_13233 = (state_13251[2]);var inst_13234 = cljs.core.next.call(null,inst_13222);var inst_13208 = inst_13234;var inst_13209 = null;var inst_13210 = 0;var inst_13211 = 0;var state_13251__$1 = (function (){var statearr_13281 = state_13251;(statearr_13281[8] = inst_13209);
(statearr_13281[15] = inst_13233);
(statearr_13281[9] = inst_13210);
(statearr_13281[10] = inst_13211);
(statearr_13281[11] = inst_13208);
return statearr_13281;
})();var statearr_13282_13309 = state_13251__$1;(statearr_13282_13309[2] = null);
(statearr_13282_13309[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13286 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13286[0] = state_machine__5507__auto__);
(statearr_13286[1] = 1);
return statearr_13286;
});
var state_machine__5507__auto____1 = (function (state_13251){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13251);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13287){if((e13287 instanceof Object))
{var ex__5510__auto__ = e13287;var statearr_13288_13310 = state_13251;(statearr_13288_13310[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13287;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13311 = state_13251;
state_13251 = G__13311;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13251){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13289 = f__5522__auto__.call(null);(statearr_13289[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13289;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13392 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13371){var state_val_13372 = (state_13371[1]);if((state_val_13372 === 1))
{var state_13371__$1 = state_13371;var statearr_13373_13393 = state_13371__$1;(statearr_13373_13393[2] = null);
(statearr_13373_13393[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13372 === 2))
{var state_13371__$1 = state_13371;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13371__$1,4,from);
} else
{if((state_val_13372 === 3))
{var inst_13369 = (state_13371[2]);var state_13371__$1 = state_13371;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13371__$1,inst_13369);
} else
{if((state_val_13372 === 4))
{var inst_13354 = (state_13371[7]);var inst_13354__$1 = (state_13371[2]);var inst_13355 = (inst_13354__$1 == null);var state_13371__$1 = (function (){var statearr_13374 = state_13371;(statearr_13374[7] = inst_13354__$1);
return statearr_13374;
})();if(cljs.core.truth_(inst_13355))
{var statearr_13375_13394 = state_13371__$1;(statearr_13375_13394[1] = 5);
} else
{var statearr_13376_13395 = state_13371__$1;(statearr_13376_13395[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13372 === 5))
{var state_13371__$1 = state_13371;if(cljs.core.truth_(close_QMARK_))
{var statearr_13377_13396 = state_13371__$1;(statearr_13377_13396[1] = 8);
} else
{var statearr_13378_13397 = state_13371__$1;(statearr_13378_13397[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13372 === 6))
{var inst_13354 = (state_13371[7]);var state_13371__$1 = state_13371;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13371__$1,11,to,inst_13354);
} else
{if((state_val_13372 === 7))
{var inst_13367 = (state_13371[2]);var state_13371__$1 = state_13371;var statearr_13379_13398 = state_13371__$1;(statearr_13379_13398[2] = inst_13367);
(statearr_13379_13398[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13372 === 8))
{var inst_13358 = cljs.core.async.close_BANG_.call(null,to);var state_13371__$1 = state_13371;var statearr_13380_13399 = state_13371__$1;(statearr_13380_13399[2] = inst_13358);
(statearr_13380_13399[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13372 === 9))
{var state_13371__$1 = state_13371;var statearr_13381_13400 = state_13371__$1;(statearr_13381_13400[2] = null);
(statearr_13381_13400[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13372 === 10))
{var inst_13361 = (state_13371[2]);var state_13371__$1 = state_13371;var statearr_13382_13401 = state_13371__$1;(statearr_13382_13401[2] = inst_13361);
(statearr_13382_13401[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13372 === 11))
{var inst_13364 = (state_13371[2]);var state_13371__$1 = (function (){var statearr_13383 = state_13371;(statearr_13383[8] = inst_13364);
return statearr_13383;
})();var statearr_13384_13402 = state_13371__$1;(statearr_13384_13402[2] = null);
(statearr_13384_13402[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13388 = [null,null,null,null,null,null,null,null,null];(statearr_13388[0] = state_machine__5507__auto__);
(statearr_13388[1] = 1);
return statearr_13388;
});
var state_machine__5507__auto____1 = (function (state_13371){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13371);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13389){if((e13389 instanceof Object))
{var ex__5510__auto__ = e13389;var statearr_13390_13403 = state_13371;(statearr_13390_13403[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13371);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13389;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13404 = state_13371;
state_13371 = G__13404;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13371){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13371);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13391 = f__5522__auto__.call(null);(statearr_13391[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13392);
return statearr_13391;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13469){var state_val_13470 = (state_13469[1]);if((state_val_13470 === 1))
{var state_13469__$1 = state_13469;var statearr_13471_13492 = state_13469__$1;(statearr_13471_13492[2] = null);
(statearr_13471_13492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13470 === 2))
{var state_13469__$1 = state_13469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13469__$1,4,ch);
} else
{if((state_val_13470 === 3))
{var inst_13467 = (state_13469[2]);var state_13469__$1 = state_13469;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13469__$1,inst_13467);
} else
{if((state_val_13470 === 4))
{var inst_13450 = (state_13469[7]);var inst_13450__$1 = (state_13469[2]);var inst_13451 = (inst_13450__$1 == null);var state_13469__$1 = (function (){var statearr_13472 = state_13469;(statearr_13472[7] = inst_13450__$1);
return statearr_13472;
})();if(cljs.core.truth_(inst_13451))
{var statearr_13473_13493 = state_13469__$1;(statearr_13473_13493[1] = 5);
} else
{var statearr_13474_13494 = state_13469__$1;(statearr_13474_13494[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13470 === 5))
{var inst_13453 = cljs.core.async.close_BANG_.call(null,tc);var inst_13454 = cljs.core.async.close_BANG_.call(null,fc);var state_13469__$1 = (function (){var statearr_13475 = state_13469;(statearr_13475[8] = inst_13453);
return statearr_13475;
})();var statearr_13476_13495 = state_13469__$1;(statearr_13476_13495[2] = inst_13454);
(statearr_13476_13495[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13470 === 6))
{var inst_13450 = (state_13469[7]);var inst_13456 = p.call(null,inst_13450);var state_13469__$1 = state_13469;if(cljs.core.truth_(inst_13456))
{var statearr_13477_13496 = state_13469__$1;(statearr_13477_13496[1] = 9);
} else
{var statearr_13478_13497 = state_13469__$1;(statearr_13478_13497[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13470 === 7))
{var inst_13465 = (state_13469[2]);var state_13469__$1 = state_13469;var statearr_13479_13498 = state_13469__$1;(statearr_13479_13498[2] = inst_13465);
(statearr_13479_13498[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13470 === 8))
{var inst_13462 = (state_13469[2]);var state_13469__$1 = (function (){var statearr_13480 = state_13469;(statearr_13480[9] = inst_13462);
return statearr_13480;
})();var statearr_13481_13499 = state_13469__$1;(statearr_13481_13499[2] = null);
(statearr_13481_13499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13470 === 9))
{var state_13469__$1 = state_13469;var statearr_13482_13500 = state_13469__$1;(statearr_13482_13500[2] = tc);
(statearr_13482_13500[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13470 === 10))
{var state_13469__$1 = state_13469;var statearr_13483_13501 = state_13469__$1;(statearr_13483_13501[2] = fc);
(statearr_13483_13501[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13470 === 11))
{var inst_13450 = (state_13469[7]);var inst_13460 = (state_13469[2]);var state_13469__$1 = state_13469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13469__$1,8,inst_13460,inst_13450);
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
var state_machine__5507__auto____0 = (function (){var statearr_13487 = [null,null,null,null,null,null,null,null,null,null];(statearr_13487[0] = state_machine__5507__auto__);
(statearr_13487[1] = 1);
return statearr_13487;
});
var state_machine__5507__auto____1 = (function (state_13469){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13469);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13488){if((e13488 instanceof Object))
{var ex__5510__auto__ = e13488;var statearr_13489_13502 = state_13469;(statearr_13489_13502[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13503 = state_13469;
state_13469 = G__13503;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13469){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13490 = f__5522__auto__.call(null);(statearr_13490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13491);
return statearr_13490;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13550){var state_val_13551 = (state_13550[1]);if((state_val_13551 === 7))
{var inst_13546 = (state_13550[2]);var state_13550__$1 = state_13550;var statearr_13552_13568 = state_13550__$1;(statearr_13552_13568[2] = inst_13546);
(statearr_13552_13568[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13551 === 6))
{var inst_13539 = (state_13550[7]);var inst_13536 = (state_13550[8]);var inst_13543 = f.call(null,inst_13536,inst_13539);var inst_13536__$1 = inst_13543;var state_13550__$1 = (function (){var statearr_13553 = state_13550;(statearr_13553[8] = inst_13536__$1);
return statearr_13553;
})();var statearr_13554_13569 = state_13550__$1;(statearr_13554_13569[2] = null);
(statearr_13554_13569[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13551 === 5))
{var inst_13536 = (state_13550[8]);var state_13550__$1 = state_13550;var statearr_13555_13570 = state_13550__$1;(statearr_13555_13570[2] = inst_13536);
(statearr_13555_13570[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13551 === 4))
{var inst_13539 = (state_13550[7]);var inst_13539__$1 = (state_13550[2]);var inst_13540 = (inst_13539__$1 == null);var state_13550__$1 = (function (){var statearr_13556 = state_13550;(statearr_13556[7] = inst_13539__$1);
return statearr_13556;
})();if(cljs.core.truth_(inst_13540))
{var statearr_13557_13571 = state_13550__$1;(statearr_13557_13571[1] = 5);
} else
{var statearr_13558_13572 = state_13550__$1;(statearr_13558_13572[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13551 === 3))
{var inst_13548 = (state_13550[2]);var state_13550__$1 = state_13550;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13550__$1,inst_13548);
} else
{if((state_val_13551 === 2))
{var state_13550__$1 = state_13550;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13550__$1,4,ch);
} else
{if((state_val_13551 === 1))
{var inst_13536 = init;var state_13550__$1 = (function (){var statearr_13559 = state_13550;(statearr_13559[8] = inst_13536);
return statearr_13559;
})();var statearr_13560_13573 = state_13550__$1;(statearr_13560_13573[2] = null);
(statearr_13560_13573[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13564 = [null,null,null,null,null,null,null,null,null];(statearr_13564[0] = state_machine__5507__auto__);
(statearr_13564[1] = 1);
return statearr_13564;
});
var state_machine__5507__auto____1 = (function (state_13550){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13550);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13565){if((e13565 instanceof Object))
{var ex__5510__auto__ = e13565;var statearr_13566_13574 = state_13550;(statearr_13566_13574[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13550);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13565;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13575 = state_13550;
state_13550 = G__13575;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13550){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13550);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13567 = f__5522__auto__.call(null);(statearr_13567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13567;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13637){var state_val_13638 = (state_13637[1]);if((state_val_13638 === 1))
{var inst_13617 = cljs.core.seq.call(null,coll);var inst_13618 = inst_13617;var state_13637__$1 = (function (){var statearr_13639 = state_13637;(statearr_13639[7] = inst_13618);
return statearr_13639;
})();var statearr_13640_13658 = state_13637__$1;(statearr_13640_13658[2] = null);
(statearr_13640_13658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13638 === 2))
{var inst_13618 = (state_13637[7]);var state_13637__$1 = state_13637;if(cljs.core.truth_(inst_13618))
{var statearr_13641_13659 = state_13637__$1;(statearr_13641_13659[1] = 4);
} else
{var statearr_13642_13660 = state_13637__$1;(statearr_13642_13660[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13638 === 3))
{var inst_13635 = (state_13637[2]);var state_13637__$1 = state_13637;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13637__$1,inst_13635);
} else
{if((state_val_13638 === 4))
{var inst_13618 = (state_13637[7]);var inst_13621 = cljs.core.first.call(null,inst_13618);var state_13637__$1 = state_13637;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13637__$1,7,ch,inst_13621);
} else
{if((state_val_13638 === 5))
{var state_13637__$1 = state_13637;if(cljs.core.truth_(close_QMARK_))
{var statearr_13643_13661 = state_13637__$1;(statearr_13643_13661[1] = 8);
} else
{var statearr_13644_13662 = state_13637__$1;(statearr_13644_13662[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13638 === 6))
{var inst_13633 = (state_13637[2]);var state_13637__$1 = state_13637;var statearr_13645_13663 = state_13637__$1;(statearr_13645_13663[2] = inst_13633);
(statearr_13645_13663[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13638 === 7))
{var inst_13618 = (state_13637[7]);var inst_13623 = (state_13637[2]);var inst_13624 = cljs.core.next.call(null,inst_13618);var inst_13618__$1 = inst_13624;var state_13637__$1 = (function (){var statearr_13646 = state_13637;(statearr_13646[7] = inst_13618__$1);
(statearr_13646[8] = inst_13623);
return statearr_13646;
})();var statearr_13647_13664 = state_13637__$1;(statearr_13647_13664[2] = null);
(statearr_13647_13664[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13638 === 8))
{var inst_13628 = cljs.core.async.close_BANG_.call(null,ch);var state_13637__$1 = state_13637;var statearr_13648_13665 = state_13637__$1;(statearr_13648_13665[2] = inst_13628);
(statearr_13648_13665[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13638 === 9))
{var state_13637__$1 = state_13637;var statearr_13649_13666 = state_13637__$1;(statearr_13649_13666[2] = null);
(statearr_13649_13666[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13638 === 10))
{var inst_13631 = (state_13637[2]);var state_13637__$1 = state_13637;var statearr_13650_13667 = state_13637__$1;(statearr_13650_13667[2] = inst_13631);
(statearr_13650_13667[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13654 = [null,null,null,null,null,null,null,null,null];(statearr_13654[0] = state_machine__5507__auto__);
(statearr_13654[1] = 1);
return statearr_13654;
});
var state_machine__5507__auto____1 = (function (state_13637){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13637);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13655){if((e13655 instanceof Object))
{var ex__5510__auto__ = e13655;var statearr_13656_13668 = state_13637;(statearr_13656_13668[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13637);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13655;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13669 = state_13637;
state_13637 = G__13669;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13637){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13637);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13657 = f__5522__auto__.call(null);(statearr_13657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13657;
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
cljs.core.async.Mux = (function (){var obj13671 = {};return obj13671;
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
cljs.core.async.Mult = (function (){var obj13673 = {};return obj13673;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t13897 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13897 = (function (cs,ch,mult,meta13898){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta13898 = meta13898;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13897.cljs$lang$type = true;
cljs.core.async.t13897.cljs$lang$ctorStr = "cljs.core.async/t13897";
cljs.core.async.t13897.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13897");
});})(cs))
;
cljs.core.async.t13897.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t13897.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t13897.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t13897.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t13897.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13897.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t13897.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_13899){var self__ = this;
var _13899__$1 = this;return self__.meta13898;
});})(cs))
;
cljs.core.async.t13897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_13899,meta13898__$1){var self__ = this;
var _13899__$1 = this;return (new cljs.core.async.t13897(self__.cs,self__.ch,self__.mult,meta13898__$1));
});})(cs))
;
cljs.core.async.__GT_t13897 = ((function (cs){
return (function __GT_t13897(cs__$1,ch__$1,mult__$1,meta13898){return (new cljs.core.async.t13897(cs__$1,ch__$1,mult__$1,meta13898));
});})(cs))
;
}
return (new cljs.core.async.t13897(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14120 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14034){var state_val_14035 = (state_14034[1]);if((state_val_14035 === 32))
{var inst_13902 = (state_14034[7]);var inst_13978 = (state_14034[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14034,31,Object,null,30);var inst_13985 = cljs.core.async.put_BANG_.call(null,inst_13978,inst_13902,done);var state_14034__$1 = state_14034;var statearr_14036_14121 = state_14034__$1;(statearr_14036_14121[2] = inst_13985);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14034__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 1))
{var state_14034__$1 = state_14034;var statearr_14037_14122 = state_14034__$1;(statearr_14037_14122[2] = null);
(statearr_14037_14122[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 33))
{var inst_13991 = (state_14034[9]);var inst_13993 = cljs.core.chunked_seq_QMARK_.call(null,inst_13991);var state_14034__$1 = state_14034;if(inst_13993)
{var statearr_14038_14123 = state_14034__$1;(statearr_14038_14123[1] = 36);
} else
{var statearr_14039_14124 = state_14034__$1;(statearr_14039_14124[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 2))
{var state_14034__$1 = state_14034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14034__$1,4,ch);
} else
{if((state_val_14035 === 34))
{var state_14034__$1 = state_14034;var statearr_14040_14125 = state_14034__$1;(statearr_14040_14125[2] = null);
(statearr_14040_14125[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 3))
{var inst_14032 = (state_14034[2]);var state_14034__$1 = state_14034;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14034__$1,inst_14032);
} else
{if((state_val_14035 === 35))
{var inst_14016 = (state_14034[2]);var state_14034__$1 = state_14034;var statearr_14041_14126 = state_14034__$1;(statearr_14041_14126[2] = inst_14016);
(statearr_14041_14126[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 4))
{var inst_13902 = (state_14034[7]);var inst_13902__$1 = (state_14034[2]);var inst_13903 = (inst_13902__$1 == null);var state_14034__$1 = (function (){var statearr_14042 = state_14034;(statearr_14042[7] = inst_13902__$1);
return statearr_14042;
})();if(cljs.core.truth_(inst_13903))
{var statearr_14043_14127 = state_14034__$1;(statearr_14043_14127[1] = 5);
} else
{var statearr_14044_14128 = state_14034__$1;(statearr_14044_14128[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 36))
{var inst_13991 = (state_14034[9]);var inst_13995 = cljs.core.chunk_first.call(null,inst_13991);var inst_13996 = cljs.core.chunk_rest.call(null,inst_13991);var inst_13997 = cljs.core.count.call(null,inst_13995);var inst_13970 = inst_13996;var inst_13971 = inst_13995;var inst_13972 = inst_13997;var inst_13973 = 0;var state_14034__$1 = (function (){var statearr_14045 = state_14034;(statearr_14045[10] = inst_13970);
(statearr_14045[11] = inst_13973);
(statearr_14045[12] = inst_13972);
(statearr_14045[13] = inst_13971);
return statearr_14045;
})();var statearr_14046_14129 = state_14034__$1;(statearr_14046_14129[2] = null);
(statearr_14046_14129[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 5))
{var inst_13909 = cljs.core.deref.call(null,cs);var inst_13910 = cljs.core.seq.call(null,inst_13909);var inst_13911 = inst_13910;var inst_13912 = null;var inst_13913 = 0;var inst_13914 = 0;var state_14034__$1 = (function (){var statearr_14047 = state_14034;(statearr_14047[14] = inst_13911);
(statearr_14047[15] = inst_13912);
(statearr_14047[16] = inst_13914);
(statearr_14047[17] = inst_13913);
return statearr_14047;
})();var statearr_14048_14130 = state_14034__$1;(statearr_14048_14130[2] = null);
(statearr_14048_14130[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 37))
{var inst_13991 = (state_14034[9]);var inst_14000 = cljs.core.first.call(null,inst_13991);var state_14034__$1 = (function (){var statearr_14049 = state_14034;(statearr_14049[18] = inst_14000);
return statearr_14049;
})();var statearr_14050_14131 = state_14034__$1;(statearr_14050_14131[2] = null);
(statearr_14050_14131[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 6))
{var inst_13962 = (state_14034[19]);var inst_13961 = cljs.core.deref.call(null,cs);var inst_13962__$1 = cljs.core.keys.call(null,inst_13961);var inst_13963 = cljs.core.count.call(null,inst_13962__$1);var inst_13964 = cljs.core.reset_BANG_.call(null,dctr,inst_13963);var inst_13969 = cljs.core.seq.call(null,inst_13962__$1);var inst_13970 = inst_13969;var inst_13971 = null;var inst_13972 = 0;var inst_13973 = 0;var state_14034__$1 = (function (){var statearr_14051 = state_14034;(statearr_14051[19] = inst_13962__$1);
(statearr_14051[10] = inst_13970);
(statearr_14051[20] = inst_13964);
(statearr_14051[11] = inst_13973);
(statearr_14051[12] = inst_13972);
(statearr_14051[13] = inst_13971);
return statearr_14051;
})();var statearr_14052_14132 = state_14034__$1;(statearr_14052_14132[2] = null);
(statearr_14052_14132[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 38))
{var inst_14013 = (state_14034[2]);var state_14034__$1 = state_14034;var statearr_14053_14133 = state_14034__$1;(statearr_14053_14133[2] = inst_14013);
(statearr_14053_14133[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 7))
{var inst_14030 = (state_14034[2]);var state_14034__$1 = state_14034;var statearr_14054_14134 = state_14034__$1;(statearr_14054_14134[2] = inst_14030);
(statearr_14054_14134[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 39))
{var inst_13991 = (state_14034[9]);var inst_14009 = (state_14034[2]);var inst_14010 = cljs.core.next.call(null,inst_13991);var inst_13970 = inst_14010;var inst_13971 = null;var inst_13972 = 0;var inst_13973 = 0;var state_14034__$1 = (function (){var statearr_14055 = state_14034;(statearr_14055[21] = inst_14009);
(statearr_14055[10] = inst_13970);
(statearr_14055[11] = inst_13973);
(statearr_14055[12] = inst_13972);
(statearr_14055[13] = inst_13971);
return statearr_14055;
})();var statearr_14056_14135 = state_14034__$1;(statearr_14056_14135[2] = null);
(statearr_14056_14135[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 8))
{var inst_13914 = (state_14034[16]);var inst_13913 = (state_14034[17]);var inst_13916 = (inst_13914 < inst_13913);var inst_13917 = inst_13916;var state_14034__$1 = state_14034;if(cljs.core.truth_(inst_13917))
{var statearr_14057_14136 = state_14034__$1;(statearr_14057_14136[1] = 10);
} else
{var statearr_14058_14137 = state_14034__$1;(statearr_14058_14137[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 40))
{var inst_14000 = (state_14034[18]);var inst_14001 = (state_14034[2]);var inst_14002 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14003 = cljs.core.async.untap_STAR_.call(null,m,inst_14000);var state_14034__$1 = (function (){var statearr_14059 = state_14034;(statearr_14059[22] = inst_14002);
(statearr_14059[23] = inst_14001);
return statearr_14059;
})();var statearr_14060_14138 = state_14034__$1;(statearr_14060_14138[2] = inst_14003);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14034__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 9))
{var inst_13959 = (state_14034[2]);var state_14034__$1 = state_14034;var statearr_14061_14139 = state_14034__$1;(statearr_14061_14139[2] = inst_13959);
(statearr_14061_14139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 41))
{var inst_14000 = (state_14034[18]);var inst_13902 = (state_14034[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14034,40,Object,null,39);var inst_14007 = cljs.core.async.put_BANG_.call(null,inst_14000,inst_13902,done);var state_14034__$1 = state_14034;var statearr_14062_14140 = state_14034__$1;(statearr_14062_14140[2] = inst_14007);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14034__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 10))
{var inst_13912 = (state_14034[15]);var inst_13914 = (state_14034[16]);var inst_13920 = cljs.core._nth.call(null,inst_13912,inst_13914);var inst_13921 = cljs.core.nth.call(null,inst_13920,0,null);var inst_13922 = cljs.core.nth.call(null,inst_13920,1,null);var state_14034__$1 = (function (){var statearr_14063 = state_14034;(statearr_14063[24] = inst_13921);
return statearr_14063;
})();if(cljs.core.truth_(inst_13922))
{var statearr_14064_14141 = state_14034__$1;(statearr_14064_14141[1] = 13);
} else
{var statearr_14065_14142 = state_14034__$1;(statearr_14065_14142[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 42))
{var state_14034__$1 = state_14034;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14034__$1,45,dchan);
} else
{if((state_val_14035 === 11))
{var inst_13911 = (state_14034[14]);var inst_13931 = (state_14034[25]);var inst_13931__$1 = cljs.core.seq.call(null,inst_13911);var state_14034__$1 = (function (){var statearr_14066 = state_14034;(statearr_14066[25] = inst_13931__$1);
return statearr_14066;
})();if(inst_13931__$1)
{var statearr_14067_14143 = state_14034__$1;(statearr_14067_14143[1] = 16);
} else
{var statearr_14068_14144 = state_14034__$1;(statearr_14068_14144[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 43))
{var state_14034__$1 = state_14034;var statearr_14069_14145 = state_14034__$1;(statearr_14069_14145[2] = null);
(statearr_14069_14145[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 12))
{var inst_13957 = (state_14034[2]);var state_14034__$1 = state_14034;var statearr_14070_14146 = state_14034__$1;(statearr_14070_14146[2] = inst_13957);
(statearr_14070_14146[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 44))
{var inst_14027 = (state_14034[2]);var state_14034__$1 = (function (){var statearr_14071 = state_14034;(statearr_14071[26] = inst_14027);
return statearr_14071;
})();var statearr_14072_14147 = state_14034__$1;(statearr_14072_14147[2] = null);
(statearr_14072_14147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 13))
{var inst_13921 = (state_14034[24]);var inst_13924 = cljs.core.async.close_BANG_.call(null,inst_13921);var state_14034__$1 = state_14034;var statearr_14073_14148 = state_14034__$1;(statearr_14073_14148[2] = inst_13924);
(statearr_14073_14148[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 45))
{var inst_14024 = (state_14034[2]);var state_14034__$1 = state_14034;var statearr_14077_14149 = state_14034__$1;(statearr_14077_14149[2] = inst_14024);
(statearr_14077_14149[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 14))
{var state_14034__$1 = state_14034;var statearr_14078_14150 = state_14034__$1;(statearr_14078_14150[2] = null);
(statearr_14078_14150[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 15))
{var inst_13911 = (state_14034[14]);var inst_13912 = (state_14034[15]);var inst_13914 = (state_14034[16]);var inst_13913 = (state_14034[17]);var inst_13927 = (state_14034[2]);var inst_13928 = (inst_13914 + 1);var tmp14074 = inst_13911;var tmp14075 = inst_13912;var tmp14076 = inst_13913;var inst_13911__$1 = tmp14074;var inst_13912__$1 = tmp14075;var inst_13913__$1 = tmp14076;var inst_13914__$1 = inst_13928;var state_14034__$1 = (function (){var statearr_14079 = state_14034;(statearr_14079[27] = inst_13927);
(statearr_14079[14] = inst_13911__$1);
(statearr_14079[15] = inst_13912__$1);
(statearr_14079[16] = inst_13914__$1);
(statearr_14079[17] = inst_13913__$1);
return statearr_14079;
})();var statearr_14080_14151 = state_14034__$1;(statearr_14080_14151[2] = null);
(statearr_14080_14151[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 16))
{var inst_13931 = (state_14034[25]);var inst_13933 = cljs.core.chunked_seq_QMARK_.call(null,inst_13931);var state_14034__$1 = state_14034;if(inst_13933)
{var statearr_14081_14152 = state_14034__$1;(statearr_14081_14152[1] = 19);
} else
{var statearr_14082_14153 = state_14034__$1;(statearr_14082_14153[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 17))
{var state_14034__$1 = state_14034;var statearr_14083_14154 = state_14034__$1;(statearr_14083_14154[2] = null);
(statearr_14083_14154[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 18))
{var inst_13955 = (state_14034[2]);var state_14034__$1 = state_14034;var statearr_14084_14155 = state_14034__$1;(statearr_14084_14155[2] = inst_13955);
(statearr_14084_14155[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 19))
{var inst_13931 = (state_14034[25]);var inst_13935 = cljs.core.chunk_first.call(null,inst_13931);var inst_13936 = cljs.core.chunk_rest.call(null,inst_13931);var inst_13937 = cljs.core.count.call(null,inst_13935);var inst_13911 = inst_13936;var inst_13912 = inst_13935;var inst_13913 = inst_13937;var inst_13914 = 0;var state_14034__$1 = (function (){var statearr_14085 = state_14034;(statearr_14085[14] = inst_13911);
(statearr_14085[15] = inst_13912);
(statearr_14085[16] = inst_13914);
(statearr_14085[17] = inst_13913);
return statearr_14085;
})();var statearr_14086_14156 = state_14034__$1;(statearr_14086_14156[2] = null);
(statearr_14086_14156[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 20))
{var inst_13931 = (state_14034[25]);var inst_13941 = cljs.core.first.call(null,inst_13931);var inst_13942 = cljs.core.nth.call(null,inst_13941,0,null);var inst_13943 = cljs.core.nth.call(null,inst_13941,1,null);var state_14034__$1 = (function (){var statearr_14087 = state_14034;(statearr_14087[28] = inst_13942);
return statearr_14087;
})();if(cljs.core.truth_(inst_13943))
{var statearr_14088_14157 = state_14034__$1;(statearr_14088_14157[1] = 22);
} else
{var statearr_14089_14158 = state_14034__$1;(statearr_14089_14158[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 21))
{var inst_13952 = (state_14034[2]);var state_14034__$1 = state_14034;var statearr_14090_14159 = state_14034__$1;(statearr_14090_14159[2] = inst_13952);
(statearr_14090_14159[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 22))
{var inst_13942 = (state_14034[28]);var inst_13945 = cljs.core.async.close_BANG_.call(null,inst_13942);var state_14034__$1 = state_14034;var statearr_14091_14160 = state_14034__$1;(statearr_14091_14160[2] = inst_13945);
(statearr_14091_14160[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 23))
{var state_14034__$1 = state_14034;var statearr_14092_14161 = state_14034__$1;(statearr_14092_14161[2] = null);
(statearr_14092_14161[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 24))
{var inst_13931 = (state_14034[25]);var inst_13948 = (state_14034[2]);var inst_13949 = cljs.core.next.call(null,inst_13931);var inst_13911 = inst_13949;var inst_13912 = null;var inst_13913 = 0;var inst_13914 = 0;var state_14034__$1 = (function (){var statearr_14093 = state_14034;(statearr_14093[14] = inst_13911);
(statearr_14093[15] = inst_13912);
(statearr_14093[29] = inst_13948);
(statearr_14093[16] = inst_13914);
(statearr_14093[17] = inst_13913);
return statearr_14093;
})();var statearr_14094_14162 = state_14034__$1;(statearr_14094_14162[2] = null);
(statearr_14094_14162[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 25))
{var inst_13973 = (state_14034[11]);var inst_13972 = (state_14034[12]);var inst_13975 = (inst_13973 < inst_13972);var inst_13976 = inst_13975;var state_14034__$1 = state_14034;if(cljs.core.truth_(inst_13976))
{var statearr_14095_14163 = state_14034__$1;(statearr_14095_14163[1] = 27);
} else
{var statearr_14096_14164 = state_14034__$1;(statearr_14096_14164[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 26))
{var inst_13962 = (state_14034[19]);var inst_14020 = (state_14034[2]);var inst_14021 = cljs.core.seq.call(null,inst_13962);var state_14034__$1 = (function (){var statearr_14097 = state_14034;(statearr_14097[30] = inst_14020);
return statearr_14097;
})();if(inst_14021)
{var statearr_14098_14165 = state_14034__$1;(statearr_14098_14165[1] = 42);
} else
{var statearr_14099_14166 = state_14034__$1;(statearr_14099_14166[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 27))
{var inst_13973 = (state_14034[11]);var inst_13971 = (state_14034[13]);var inst_13978 = cljs.core._nth.call(null,inst_13971,inst_13973);var state_14034__$1 = (function (){var statearr_14100 = state_14034;(statearr_14100[8] = inst_13978);
return statearr_14100;
})();var statearr_14101_14167 = state_14034__$1;(statearr_14101_14167[2] = null);
(statearr_14101_14167[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 28))
{var inst_13991 = (state_14034[9]);var inst_13970 = (state_14034[10]);var inst_13991__$1 = cljs.core.seq.call(null,inst_13970);var state_14034__$1 = (function (){var statearr_14105 = state_14034;(statearr_14105[9] = inst_13991__$1);
return statearr_14105;
})();if(inst_13991__$1)
{var statearr_14106_14168 = state_14034__$1;(statearr_14106_14168[1] = 33);
} else
{var statearr_14107_14169 = state_14034__$1;(statearr_14107_14169[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 29))
{var inst_14018 = (state_14034[2]);var state_14034__$1 = state_14034;var statearr_14108_14170 = state_14034__$1;(statearr_14108_14170[2] = inst_14018);
(statearr_14108_14170[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 30))
{var inst_13970 = (state_14034[10]);var inst_13973 = (state_14034[11]);var inst_13972 = (state_14034[12]);var inst_13971 = (state_14034[13]);var inst_13987 = (state_14034[2]);var inst_13988 = (inst_13973 + 1);var tmp14102 = inst_13970;var tmp14103 = inst_13972;var tmp14104 = inst_13971;var inst_13970__$1 = tmp14102;var inst_13971__$1 = tmp14104;var inst_13972__$1 = tmp14103;var inst_13973__$1 = inst_13988;var state_14034__$1 = (function (){var statearr_14109 = state_14034;(statearr_14109[31] = inst_13987);
(statearr_14109[10] = inst_13970__$1);
(statearr_14109[11] = inst_13973__$1);
(statearr_14109[12] = inst_13972__$1);
(statearr_14109[13] = inst_13971__$1);
return statearr_14109;
})();var statearr_14110_14171 = state_14034__$1;(statearr_14110_14171[2] = null);
(statearr_14110_14171[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14035 === 31))
{var inst_13978 = (state_14034[8]);var inst_13979 = (state_14034[2]);var inst_13980 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_13981 = cljs.core.async.untap_STAR_.call(null,m,inst_13978);var state_14034__$1 = (function (){var statearr_14111 = state_14034;(statearr_14111[32] = inst_13979);
(statearr_14111[33] = inst_13980);
return statearr_14111;
})();var statearr_14112_14172 = state_14034__$1;(statearr_14112_14172[2] = inst_13981);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14034__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14116 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14116[0] = state_machine__5507__auto__);
(statearr_14116[1] = 1);
return statearr_14116;
});
var state_machine__5507__auto____1 = (function (state_14034){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14034);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14117){if((e14117 instanceof Object))
{var ex__5510__auto__ = e14117;var statearr_14118_14173 = state_14034;(statearr_14118_14173[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14034);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14174 = state_14034;
state_14034 = G__14174;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14034){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14034);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14119 = f__5522__auto__.call(null);(statearr_14119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14120);
return statearr_14119;
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
cljs.core.async.Mix = (function (){var obj14176 = {};return obj14176;
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
;var m = (function (){if(typeof cljs.core.async.t14286 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14286 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14287){
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
this.meta14287 = meta14287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14286.cljs$lang$type = true;
cljs.core.async.t14286.cljs$lang$ctorStr = "cljs.core.async/t14286";
cljs.core.async.t14286.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14286");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14286.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14286.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14286.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14286.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14286.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14286.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14286.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14286.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14286.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14288){var self__ = this;
var _14288__$1 = this;return self__.meta14287;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14288,meta14287__$1){var self__ = this;
var _14288__$1 = this;return (new cljs.core.async.t14286(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14287__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14286 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14286(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14287){return (new cljs.core.async.t14286(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14287));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14286(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14395 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14353){var state_val_14354 = (state_14353[1]);if((state_val_14354 === 1))
{var inst_14292 = (state_14353[7]);var inst_14292__$1 = calc_state.call(null);var inst_14293 = cljs.core.seq_QMARK_.call(null,inst_14292__$1);var state_14353__$1 = (function (){var statearr_14355 = state_14353;(statearr_14355[7] = inst_14292__$1);
return statearr_14355;
})();if(inst_14293)
{var statearr_14356_14396 = state_14353__$1;(statearr_14356_14396[1] = 2);
} else
{var statearr_14357_14397 = state_14353__$1;(statearr_14357_14397[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 2))
{var inst_14292 = (state_14353[7]);var inst_14295 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14292);var state_14353__$1 = state_14353;var statearr_14358_14398 = state_14353__$1;(statearr_14358_14398[2] = inst_14295);
(statearr_14358_14398[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 3))
{var inst_14292 = (state_14353[7]);var state_14353__$1 = state_14353;var statearr_14359_14399 = state_14353__$1;(statearr_14359_14399[2] = inst_14292);
(statearr_14359_14399[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 4))
{var inst_14292 = (state_14353[7]);var inst_14298 = (state_14353[2]);var inst_14299 = cljs.core.get.call(null,inst_14298,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14300 = cljs.core.get.call(null,inst_14298,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14301 = cljs.core.get.call(null,inst_14298,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14302 = inst_14292;var state_14353__$1 = (function (){var statearr_14360 = state_14353;(statearr_14360[8] = inst_14299);
(statearr_14360[9] = inst_14300);
(statearr_14360[10] = inst_14302);
(statearr_14360[11] = inst_14301);
return statearr_14360;
})();var statearr_14361_14400 = state_14353__$1;(statearr_14361_14400[2] = null);
(statearr_14361_14400[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 5))
{var inst_14302 = (state_14353[10]);var inst_14305 = cljs.core.seq_QMARK_.call(null,inst_14302);var state_14353__$1 = state_14353;if(inst_14305)
{var statearr_14362_14401 = state_14353__$1;(statearr_14362_14401[1] = 7);
} else
{var statearr_14363_14402 = state_14353__$1;(statearr_14363_14402[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 6))
{var inst_14351 = (state_14353[2]);var state_14353__$1 = state_14353;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14353__$1,inst_14351);
} else
{if((state_val_14354 === 7))
{var inst_14302 = (state_14353[10]);var inst_14307 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14302);var state_14353__$1 = state_14353;var statearr_14364_14403 = state_14353__$1;(statearr_14364_14403[2] = inst_14307);
(statearr_14364_14403[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 8))
{var inst_14302 = (state_14353[10]);var state_14353__$1 = state_14353;var statearr_14365_14404 = state_14353__$1;(statearr_14365_14404[2] = inst_14302);
(statearr_14365_14404[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 9))
{var inst_14310 = (state_14353[12]);var inst_14310__$1 = (state_14353[2]);var inst_14311 = cljs.core.get.call(null,inst_14310__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14312 = cljs.core.get.call(null,inst_14310__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14313 = cljs.core.get.call(null,inst_14310__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14353__$1 = (function (){var statearr_14366 = state_14353;(statearr_14366[13] = inst_14313);
(statearr_14366[14] = inst_14312);
(statearr_14366[12] = inst_14310__$1);
return statearr_14366;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14353__$1,10,inst_14311);
} else
{if((state_val_14354 === 10))
{var inst_14317 = (state_14353[15]);var inst_14318 = (state_14353[16]);var inst_14316 = (state_14353[2]);var inst_14317__$1 = cljs.core.nth.call(null,inst_14316,0,null);var inst_14318__$1 = cljs.core.nth.call(null,inst_14316,1,null);var inst_14319 = (inst_14317__$1 == null);var inst_14320 = cljs.core._EQ_.call(null,inst_14318__$1,change);var inst_14321 = (inst_14319) || (inst_14320);var state_14353__$1 = (function (){var statearr_14367 = state_14353;(statearr_14367[15] = inst_14317__$1);
(statearr_14367[16] = inst_14318__$1);
return statearr_14367;
})();if(cljs.core.truth_(inst_14321))
{var statearr_14368_14405 = state_14353__$1;(statearr_14368_14405[1] = 11);
} else
{var statearr_14369_14406 = state_14353__$1;(statearr_14369_14406[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 11))
{var inst_14317 = (state_14353[15]);var inst_14323 = (inst_14317 == null);var state_14353__$1 = state_14353;if(cljs.core.truth_(inst_14323))
{var statearr_14370_14407 = state_14353__$1;(statearr_14370_14407[1] = 14);
} else
{var statearr_14371_14408 = state_14353__$1;(statearr_14371_14408[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 12))
{var inst_14332 = (state_14353[17]);var inst_14318 = (state_14353[16]);var inst_14313 = (state_14353[13]);var inst_14332__$1 = inst_14313.call(null,inst_14318);var state_14353__$1 = (function (){var statearr_14372 = state_14353;(statearr_14372[17] = inst_14332__$1);
return statearr_14372;
})();if(cljs.core.truth_(inst_14332__$1))
{var statearr_14373_14409 = state_14353__$1;(statearr_14373_14409[1] = 17);
} else
{var statearr_14374_14410 = state_14353__$1;(statearr_14374_14410[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 13))
{var inst_14349 = (state_14353[2]);var state_14353__$1 = state_14353;var statearr_14375_14411 = state_14353__$1;(statearr_14375_14411[2] = inst_14349);
(statearr_14375_14411[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 14))
{var inst_14318 = (state_14353[16]);var inst_14325 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14318);var state_14353__$1 = state_14353;var statearr_14376_14412 = state_14353__$1;(statearr_14376_14412[2] = inst_14325);
(statearr_14376_14412[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 15))
{var state_14353__$1 = state_14353;var statearr_14377_14413 = state_14353__$1;(statearr_14377_14413[2] = null);
(statearr_14377_14413[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 16))
{var inst_14328 = (state_14353[2]);var inst_14329 = calc_state.call(null);var inst_14302 = inst_14329;var state_14353__$1 = (function (){var statearr_14378 = state_14353;(statearr_14378[18] = inst_14328);
(statearr_14378[10] = inst_14302);
return statearr_14378;
})();var statearr_14379_14414 = state_14353__$1;(statearr_14379_14414[2] = null);
(statearr_14379_14414[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 17))
{var inst_14332 = (state_14353[17]);var state_14353__$1 = state_14353;var statearr_14380_14415 = state_14353__$1;(statearr_14380_14415[2] = inst_14332);
(statearr_14380_14415[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 18))
{var inst_14318 = (state_14353[16]);var inst_14313 = (state_14353[13]);var inst_14312 = (state_14353[14]);var inst_14335 = cljs.core.empty_QMARK_.call(null,inst_14313);var inst_14336 = inst_14312.call(null,inst_14318);var inst_14337 = cljs.core.not.call(null,inst_14336);var inst_14338 = (inst_14335) && (inst_14337);var state_14353__$1 = state_14353;var statearr_14381_14416 = state_14353__$1;(statearr_14381_14416[2] = inst_14338);
(statearr_14381_14416[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 19))
{var inst_14340 = (state_14353[2]);var state_14353__$1 = state_14353;if(cljs.core.truth_(inst_14340))
{var statearr_14382_14417 = state_14353__$1;(statearr_14382_14417[1] = 20);
} else
{var statearr_14383_14418 = state_14353__$1;(statearr_14383_14418[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 20))
{var inst_14317 = (state_14353[15]);var state_14353__$1 = state_14353;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14353__$1,23,out,inst_14317);
} else
{if((state_val_14354 === 21))
{var state_14353__$1 = state_14353;var statearr_14384_14419 = state_14353__$1;(statearr_14384_14419[2] = null);
(statearr_14384_14419[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 22))
{var inst_14310 = (state_14353[12]);var inst_14346 = (state_14353[2]);var inst_14302 = inst_14310;var state_14353__$1 = (function (){var statearr_14385 = state_14353;(statearr_14385[10] = inst_14302);
(statearr_14385[19] = inst_14346);
return statearr_14385;
})();var statearr_14386_14420 = state_14353__$1;(statearr_14386_14420[2] = null);
(statearr_14386_14420[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14354 === 23))
{var inst_14343 = (state_14353[2]);var state_14353__$1 = state_14353;var statearr_14387_14421 = state_14353__$1;(statearr_14387_14421[2] = inst_14343);
(statearr_14387_14421[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14391 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14391[0] = state_machine__5507__auto__);
(statearr_14391[1] = 1);
return statearr_14391;
});
var state_machine__5507__auto____1 = (function (state_14353){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14353);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14392){if((e14392 instanceof Object))
{var ex__5510__auto__ = e14392;var statearr_14393_14422 = state_14353;(statearr_14393_14422[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14353);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14392;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14423 = state_14353;
state_14353 = G__14423;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14353){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14353);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14394 = f__5522__auto__.call(null);(statearr_14394[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14395);
return statearr_14394;
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
cljs.core.async.Pub = (function (){var obj14425 = {};return obj14425;
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
return (function (p1__14426_SHARP_){if(cljs.core.truth_(p1__14426_SHARP_.call(null,topic)))
{return p1__14426_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14426_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14551 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14552){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14552 = meta14552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14551.cljs$lang$type = true;
cljs.core.async.t14551.cljs$lang$ctorStr = "cljs.core.async/t14551";
cljs.core.async.t14551.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14551");
});})(mults,ensure_mult))
;
cljs.core.async.t14551.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14551.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14551.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14551.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14551.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14551.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14551.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14553){var self__ = this;
var _14553__$1 = this;return self__.meta14552;
});})(mults,ensure_mult))
;
cljs.core.async.t14551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14553,meta14552__$1){var self__ = this;
var _14553__$1 = this;return (new cljs.core.async.t14551(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14552__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14551 = ((function (mults,ensure_mult){
return (function __GT_t14551(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14552){return (new cljs.core.async.t14551(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14552));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14551(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14675 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14627){var state_val_14628 = (state_14627[1]);if((state_val_14628 === 1))
{var state_14627__$1 = state_14627;var statearr_14629_14676 = state_14627__$1;(statearr_14629_14676[2] = null);
(statearr_14629_14676[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 2))
{var state_14627__$1 = state_14627;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14627__$1,4,ch);
} else
{if((state_val_14628 === 3))
{var inst_14625 = (state_14627[2]);var state_14627__$1 = state_14627;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14627__$1,inst_14625);
} else
{if((state_val_14628 === 4))
{var inst_14556 = (state_14627[7]);var inst_14556__$1 = (state_14627[2]);var inst_14557 = (inst_14556__$1 == null);var state_14627__$1 = (function (){var statearr_14630 = state_14627;(statearr_14630[7] = inst_14556__$1);
return statearr_14630;
})();if(cljs.core.truth_(inst_14557))
{var statearr_14631_14677 = state_14627__$1;(statearr_14631_14677[1] = 5);
} else
{var statearr_14632_14678 = state_14627__$1;(statearr_14632_14678[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 5))
{var inst_14563 = cljs.core.deref.call(null,mults);var inst_14564 = cljs.core.vals.call(null,inst_14563);var inst_14565 = cljs.core.seq.call(null,inst_14564);var inst_14566 = inst_14565;var inst_14567 = null;var inst_14568 = 0;var inst_14569 = 0;var state_14627__$1 = (function (){var statearr_14633 = state_14627;(statearr_14633[8] = inst_14569);
(statearr_14633[9] = inst_14568);
(statearr_14633[10] = inst_14567);
(statearr_14633[11] = inst_14566);
return statearr_14633;
})();var statearr_14634_14679 = state_14627__$1;(statearr_14634_14679[2] = null);
(statearr_14634_14679[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 6))
{var inst_14604 = (state_14627[12]);var inst_14556 = (state_14627[7]);var inst_14606 = (state_14627[13]);var inst_14604__$1 = topic_fn.call(null,inst_14556);var inst_14605 = cljs.core.deref.call(null,mults);var inst_14606__$1 = cljs.core.get.call(null,inst_14605,inst_14604__$1);var state_14627__$1 = (function (){var statearr_14635 = state_14627;(statearr_14635[12] = inst_14604__$1);
(statearr_14635[13] = inst_14606__$1);
return statearr_14635;
})();if(cljs.core.truth_(inst_14606__$1))
{var statearr_14636_14680 = state_14627__$1;(statearr_14636_14680[1] = 19);
} else
{var statearr_14637_14681 = state_14627__$1;(statearr_14637_14681[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 7))
{var inst_14623 = (state_14627[2]);var state_14627__$1 = state_14627;var statearr_14638_14682 = state_14627__$1;(statearr_14638_14682[2] = inst_14623);
(statearr_14638_14682[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 8))
{var inst_14569 = (state_14627[8]);var inst_14568 = (state_14627[9]);var inst_14571 = (inst_14569 < inst_14568);var inst_14572 = inst_14571;var state_14627__$1 = state_14627;if(cljs.core.truth_(inst_14572))
{var statearr_14642_14683 = state_14627__$1;(statearr_14642_14683[1] = 10);
} else
{var statearr_14643_14684 = state_14627__$1;(statearr_14643_14684[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 9))
{var inst_14602 = (state_14627[2]);var state_14627__$1 = state_14627;var statearr_14644_14685 = state_14627__$1;(statearr_14644_14685[2] = inst_14602);
(statearr_14644_14685[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 10))
{var inst_14569 = (state_14627[8]);var inst_14568 = (state_14627[9]);var inst_14567 = (state_14627[10]);var inst_14566 = (state_14627[11]);var inst_14574 = cljs.core._nth.call(null,inst_14567,inst_14569);var inst_14575 = cljs.core.async.muxch_STAR_.call(null,inst_14574);var inst_14576 = cljs.core.async.close_BANG_.call(null,inst_14575);var inst_14577 = (inst_14569 + 1);var tmp14639 = inst_14568;var tmp14640 = inst_14567;var tmp14641 = inst_14566;var inst_14566__$1 = tmp14641;var inst_14567__$1 = tmp14640;var inst_14568__$1 = tmp14639;var inst_14569__$1 = inst_14577;var state_14627__$1 = (function (){var statearr_14645 = state_14627;(statearr_14645[8] = inst_14569__$1);
(statearr_14645[14] = inst_14576);
(statearr_14645[9] = inst_14568__$1);
(statearr_14645[10] = inst_14567__$1);
(statearr_14645[11] = inst_14566__$1);
return statearr_14645;
})();var statearr_14646_14686 = state_14627__$1;(statearr_14646_14686[2] = null);
(statearr_14646_14686[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 11))
{var inst_14566 = (state_14627[11]);var inst_14580 = (state_14627[15]);var inst_14580__$1 = cljs.core.seq.call(null,inst_14566);var state_14627__$1 = (function (){var statearr_14647 = state_14627;(statearr_14647[15] = inst_14580__$1);
return statearr_14647;
})();if(inst_14580__$1)
{var statearr_14648_14687 = state_14627__$1;(statearr_14648_14687[1] = 13);
} else
{var statearr_14649_14688 = state_14627__$1;(statearr_14649_14688[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 12))
{var inst_14600 = (state_14627[2]);var state_14627__$1 = state_14627;var statearr_14650_14689 = state_14627__$1;(statearr_14650_14689[2] = inst_14600);
(statearr_14650_14689[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 13))
{var inst_14580 = (state_14627[15]);var inst_14582 = cljs.core.chunked_seq_QMARK_.call(null,inst_14580);var state_14627__$1 = state_14627;if(inst_14582)
{var statearr_14651_14690 = state_14627__$1;(statearr_14651_14690[1] = 16);
} else
{var statearr_14652_14691 = state_14627__$1;(statearr_14652_14691[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 14))
{var state_14627__$1 = state_14627;var statearr_14653_14692 = state_14627__$1;(statearr_14653_14692[2] = null);
(statearr_14653_14692[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 15))
{var inst_14598 = (state_14627[2]);var state_14627__$1 = state_14627;var statearr_14654_14693 = state_14627__$1;(statearr_14654_14693[2] = inst_14598);
(statearr_14654_14693[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 16))
{var inst_14580 = (state_14627[15]);var inst_14584 = cljs.core.chunk_first.call(null,inst_14580);var inst_14585 = cljs.core.chunk_rest.call(null,inst_14580);var inst_14586 = cljs.core.count.call(null,inst_14584);var inst_14566 = inst_14585;var inst_14567 = inst_14584;var inst_14568 = inst_14586;var inst_14569 = 0;var state_14627__$1 = (function (){var statearr_14655 = state_14627;(statearr_14655[8] = inst_14569);
(statearr_14655[9] = inst_14568);
(statearr_14655[10] = inst_14567);
(statearr_14655[11] = inst_14566);
return statearr_14655;
})();var statearr_14656_14694 = state_14627__$1;(statearr_14656_14694[2] = null);
(statearr_14656_14694[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 17))
{var inst_14580 = (state_14627[15]);var inst_14589 = cljs.core.first.call(null,inst_14580);var inst_14590 = cljs.core.async.muxch_STAR_.call(null,inst_14589);var inst_14591 = cljs.core.async.close_BANG_.call(null,inst_14590);var inst_14592 = cljs.core.next.call(null,inst_14580);var inst_14566 = inst_14592;var inst_14567 = null;var inst_14568 = 0;var inst_14569 = 0;var state_14627__$1 = (function (){var statearr_14657 = state_14627;(statearr_14657[8] = inst_14569);
(statearr_14657[9] = inst_14568);
(statearr_14657[10] = inst_14567);
(statearr_14657[11] = inst_14566);
(statearr_14657[16] = inst_14591);
return statearr_14657;
})();var statearr_14658_14695 = state_14627__$1;(statearr_14658_14695[2] = null);
(statearr_14658_14695[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 18))
{var inst_14595 = (state_14627[2]);var state_14627__$1 = state_14627;var statearr_14659_14696 = state_14627__$1;(statearr_14659_14696[2] = inst_14595);
(statearr_14659_14696[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 19))
{var state_14627__$1 = state_14627;var statearr_14660_14697 = state_14627__$1;(statearr_14660_14697[2] = null);
(statearr_14660_14697[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 20))
{var state_14627__$1 = state_14627;var statearr_14661_14698 = state_14627__$1;(statearr_14661_14698[2] = null);
(statearr_14661_14698[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 21))
{var inst_14620 = (state_14627[2]);var state_14627__$1 = (function (){var statearr_14662 = state_14627;(statearr_14662[17] = inst_14620);
return statearr_14662;
})();var statearr_14663_14699 = state_14627__$1;(statearr_14663_14699[2] = null);
(statearr_14663_14699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 22))
{var inst_14617 = (state_14627[2]);var state_14627__$1 = state_14627;var statearr_14664_14700 = state_14627__$1;(statearr_14664_14700[2] = inst_14617);
(statearr_14664_14700[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 23))
{var inst_14604 = (state_14627[12]);var inst_14608 = (state_14627[2]);var inst_14609 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14604);var state_14627__$1 = (function (){var statearr_14665 = state_14627;(statearr_14665[18] = inst_14608);
return statearr_14665;
})();var statearr_14666_14701 = state_14627__$1;(statearr_14666_14701[2] = inst_14609);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14627__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14628 === 24))
{var inst_14556 = (state_14627[7]);var inst_14606 = (state_14627[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14627,23,Object,null,22);var inst_14613 = cljs.core.async.muxch_STAR_.call(null,inst_14606);var state_14627__$1 = state_14627;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14627__$1,25,inst_14613,inst_14556);
} else
{if((state_val_14628 === 25))
{var inst_14615 = (state_14627[2]);var state_14627__$1 = state_14627;var statearr_14667_14702 = state_14627__$1;(statearr_14667_14702[2] = inst_14615);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14627__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14671 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14671[0] = state_machine__5507__auto__);
(statearr_14671[1] = 1);
return statearr_14671;
});
var state_machine__5507__auto____1 = (function (state_14627){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14627);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14672){if((e14672 instanceof Object))
{var ex__5510__auto__ = e14672;var statearr_14673_14703 = state_14627;(statearr_14673_14703[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14627);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14672;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14704 = state_14627;
state_14627 = G__14704;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14627){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14674 = f__5522__auto__.call(null);(statearr_14674[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14675);
return statearr_14674;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14841 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14811){var state_val_14812 = (state_14811[1]);if((state_val_14812 === 1))
{var state_14811__$1 = state_14811;var statearr_14813_14842 = state_14811__$1;(statearr_14813_14842[2] = null);
(statearr_14813_14842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 2))
{var inst_14774 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14775 = 0;var state_14811__$1 = (function (){var statearr_14814 = state_14811;(statearr_14814[7] = inst_14775);
(statearr_14814[8] = inst_14774);
return statearr_14814;
})();var statearr_14815_14843 = state_14811__$1;(statearr_14815_14843[2] = null);
(statearr_14815_14843[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 3))
{var inst_14809 = (state_14811[2]);var state_14811__$1 = state_14811;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14811__$1,inst_14809);
} else
{if((state_val_14812 === 4))
{var inst_14775 = (state_14811[7]);var inst_14777 = (inst_14775 < cnt);var state_14811__$1 = state_14811;if(cljs.core.truth_(inst_14777))
{var statearr_14816_14844 = state_14811__$1;(statearr_14816_14844[1] = 6);
} else
{var statearr_14817_14845 = state_14811__$1;(statearr_14817_14845[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 5))
{var inst_14795 = (state_14811[2]);var state_14811__$1 = (function (){var statearr_14818 = state_14811;(statearr_14818[9] = inst_14795);
return statearr_14818;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14811__$1,12,dchan);
} else
{if((state_val_14812 === 6))
{var state_14811__$1 = state_14811;var statearr_14819_14846 = state_14811__$1;(statearr_14819_14846[2] = null);
(statearr_14819_14846[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 7))
{var state_14811__$1 = state_14811;var statearr_14820_14847 = state_14811__$1;(statearr_14820_14847[2] = null);
(statearr_14820_14847[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 8))
{var inst_14793 = (state_14811[2]);var state_14811__$1 = state_14811;var statearr_14821_14848 = state_14811__$1;(statearr_14821_14848[2] = inst_14793);
(statearr_14821_14848[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 9))
{var inst_14775 = (state_14811[7]);var inst_14788 = (state_14811[2]);var inst_14789 = (inst_14775 + 1);var inst_14775__$1 = inst_14789;var state_14811__$1 = (function (){var statearr_14822 = state_14811;(statearr_14822[7] = inst_14775__$1);
(statearr_14822[10] = inst_14788);
return statearr_14822;
})();var statearr_14823_14849 = state_14811__$1;(statearr_14823_14849[2] = null);
(statearr_14823_14849[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 10))
{var inst_14779 = (state_14811[2]);var inst_14780 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14811__$1 = (function (){var statearr_14824 = state_14811;(statearr_14824[11] = inst_14779);
return statearr_14824;
})();var statearr_14825_14850 = state_14811__$1;(statearr_14825_14850[2] = inst_14780);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14811__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 11))
{var inst_14775 = (state_14811[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14811,10,Object,null,9);var inst_14784 = chs__$1.call(null,inst_14775);var inst_14785 = done.call(null,inst_14775);var inst_14786 = cljs.core.async.take_BANG_.call(null,inst_14784,inst_14785);var state_14811__$1 = state_14811;var statearr_14826_14851 = state_14811__$1;(statearr_14826_14851[2] = inst_14786);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14811__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 12))
{var inst_14797 = (state_14811[12]);var inst_14797__$1 = (state_14811[2]);var inst_14798 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14797__$1);var state_14811__$1 = (function (){var statearr_14827 = state_14811;(statearr_14827[12] = inst_14797__$1);
return statearr_14827;
})();if(cljs.core.truth_(inst_14798))
{var statearr_14828_14852 = state_14811__$1;(statearr_14828_14852[1] = 13);
} else
{var statearr_14829_14853 = state_14811__$1;(statearr_14829_14853[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 13))
{var inst_14800 = cljs.core.async.close_BANG_.call(null,out);var state_14811__$1 = state_14811;var statearr_14830_14854 = state_14811__$1;(statearr_14830_14854[2] = inst_14800);
(statearr_14830_14854[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 14))
{var inst_14797 = (state_14811[12]);var inst_14802 = cljs.core.apply.call(null,f,inst_14797);var state_14811__$1 = state_14811;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14811__$1,16,out,inst_14802);
} else
{if((state_val_14812 === 15))
{var inst_14807 = (state_14811[2]);var state_14811__$1 = state_14811;var statearr_14831_14855 = state_14811__$1;(statearr_14831_14855[2] = inst_14807);
(statearr_14831_14855[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14812 === 16))
{var inst_14804 = (state_14811[2]);var state_14811__$1 = (function (){var statearr_14832 = state_14811;(statearr_14832[13] = inst_14804);
return statearr_14832;
})();var statearr_14833_14856 = state_14811__$1;(statearr_14833_14856[2] = null);
(statearr_14833_14856[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14837 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14837[0] = state_machine__5507__auto__);
(statearr_14837[1] = 1);
return statearr_14837;
});
var state_machine__5507__auto____1 = (function (state_14811){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14811);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14838){if((e14838 instanceof Object))
{var ex__5510__auto__ = e14838;var statearr_14839_14857 = state_14811;(statearr_14839_14857[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14811);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14838;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14858 = state_14811;
state_14811 = G__14858;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14811){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14840 = f__5522__auto__.call(null);(statearr_14840[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14841);
return statearr_14840;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14966 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14942){var state_val_14943 = (state_14942[1]);if((state_val_14943 === 1))
{var inst_14913 = cljs.core.vec.call(null,chs);var inst_14914 = inst_14913;var state_14942__$1 = (function (){var statearr_14944 = state_14942;(statearr_14944[7] = inst_14914);
return statearr_14944;
})();var statearr_14945_14967 = state_14942__$1;(statearr_14945_14967[2] = null);
(statearr_14945_14967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14943 === 2))
{var inst_14914 = (state_14942[7]);var inst_14916 = cljs.core.count.call(null,inst_14914);var inst_14917 = (inst_14916 > 0);var state_14942__$1 = state_14942;if(cljs.core.truth_(inst_14917))
{var statearr_14946_14968 = state_14942__$1;(statearr_14946_14968[1] = 4);
} else
{var statearr_14947_14969 = state_14942__$1;(statearr_14947_14969[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14943 === 3))
{var inst_14940 = (state_14942[2]);var state_14942__$1 = state_14942;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14942__$1,inst_14940);
} else
{if((state_val_14943 === 4))
{var inst_14914 = (state_14942[7]);var state_14942__$1 = state_14942;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14942__$1,7,inst_14914);
} else
{if((state_val_14943 === 5))
{var inst_14936 = cljs.core.async.close_BANG_.call(null,out);var state_14942__$1 = state_14942;var statearr_14948_14970 = state_14942__$1;(statearr_14948_14970[2] = inst_14936);
(statearr_14948_14970[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14943 === 6))
{var inst_14938 = (state_14942[2]);var state_14942__$1 = state_14942;var statearr_14949_14971 = state_14942__$1;(statearr_14949_14971[2] = inst_14938);
(statearr_14949_14971[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14943 === 7))
{var inst_14921 = (state_14942[8]);var inst_14922 = (state_14942[9]);var inst_14921__$1 = (state_14942[2]);var inst_14922__$1 = cljs.core.nth.call(null,inst_14921__$1,0,null);var inst_14923 = cljs.core.nth.call(null,inst_14921__$1,1,null);var inst_14924 = (inst_14922__$1 == null);var state_14942__$1 = (function (){var statearr_14950 = state_14942;(statearr_14950[8] = inst_14921__$1);
(statearr_14950[9] = inst_14922__$1);
(statearr_14950[10] = inst_14923);
return statearr_14950;
})();if(cljs.core.truth_(inst_14924))
{var statearr_14951_14972 = state_14942__$1;(statearr_14951_14972[1] = 8);
} else
{var statearr_14952_14973 = state_14942__$1;(statearr_14952_14973[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14943 === 8))
{var inst_14921 = (state_14942[8]);var inst_14922 = (state_14942[9]);var inst_14923 = (state_14942[10]);var inst_14914 = (state_14942[7]);var inst_14926 = (function (){var c = inst_14923;var v = inst_14922;var vec__14919 = inst_14921;var cs = inst_14914;return ((function (c,v,vec__14919,cs,inst_14921,inst_14922,inst_14923,inst_14914,state_val_14943){
return (function (p1__14859_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__14859_SHARP_);
});
;})(c,v,vec__14919,cs,inst_14921,inst_14922,inst_14923,inst_14914,state_val_14943))
})();var inst_14927 = cljs.core.filterv.call(null,inst_14926,inst_14914);var inst_14914__$1 = inst_14927;var state_14942__$1 = (function (){var statearr_14953 = state_14942;(statearr_14953[7] = inst_14914__$1);
return statearr_14953;
})();var statearr_14954_14974 = state_14942__$1;(statearr_14954_14974[2] = null);
(statearr_14954_14974[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14943 === 9))
{var inst_14922 = (state_14942[9]);var state_14942__$1 = state_14942;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14942__$1,11,out,inst_14922);
} else
{if((state_val_14943 === 10))
{var inst_14934 = (state_14942[2]);var state_14942__$1 = state_14942;var statearr_14956_14975 = state_14942__$1;(statearr_14956_14975[2] = inst_14934);
(statearr_14956_14975[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14943 === 11))
{var inst_14914 = (state_14942[7]);var inst_14931 = (state_14942[2]);var tmp14955 = inst_14914;var inst_14914__$1 = tmp14955;var state_14942__$1 = (function (){var statearr_14957 = state_14942;(statearr_14957[11] = inst_14931);
(statearr_14957[7] = inst_14914__$1);
return statearr_14957;
})();var statearr_14958_14976 = state_14942__$1;(statearr_14958_14976[2] = null);
(statearr_14958_14976[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14962 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14962[0] = state_machine__5507__auto__);
(statearr_14962[1] = 1);
return statearr_14962;
});
var state_machine__5507__auto____1 = (function (state_14942){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14942);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14963){if((e14963 instanceof Object))
{var ex__5510__auto__ = e14963;var statearr_14964_14977 = state_14942;(statearr_14964_14977[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14942);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14963;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14978 = state_14942;
state_14942 = G__14978;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14942){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14942);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14965 = f__5522__auto__.call(null);(statearr_14965[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14966);
return statearr_14965;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15071 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15048){var state_val_15049 = (state_15048[1]);if((state_val_15049 === 1))
{var inst_15025 = 0;var state_15048__$1 = (function (){var statearr_15050 = state_15048;(statearr_15050[7] = inst_15025);
return statearr_15050;
})();var statearr_15051_15072 = state_15048__$1;(statearr_15051_15072[2] = null);
(statearr_15051_15072[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 2))
{var inst_15025 = (state_15048[7]);var inst_15027 = (inst_15025 < n);var state_15048__$1 = state_15048;if(cljs.core.truth_(inst_15027))
{var statearr_15052_15073 = state_15048__$1;(statearr_15052_15073[1] = 4);
} else
{var statearr_15053_15074 = state_15048__$1;(statearr_15053_15074[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 3))
{var inst_15045 = (state_15048[2]);var inst_15046 = cljs.core.async.close_BANG_.call(null,out);var state_15048__$1 = (function (){var statearr_15054 = state_15048;(statearr_15054[8] = inst_15045);
return statearr_15054;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15048__$1,inst_15046);
} else
{if((state_val_15049 === 4))
{var state_15048__$1 = state_15048;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15048__$1,7,ch);
} else
{if((state_val_15049 === 5))
{var state_15048__$1 = state_15048;var statearr_15055_15075 = state_15048__$1;(statearr_15055_15075[2] = null);
(statearr_15055_15075[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 6))
{var inst_15043 = (state_15048[2]);var state_15048__$1 = state_15048;var statearr_15056_15076 = state_15048__$1;(statearr_15056_15076[2] = inst_15043);
(statearr_15056_15076[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 7))
{var inst_15030 = (state_15048[9]);var inst_15030__$1 = (state_15048[2]);var inst_15031 = (inst_15030__$1 == null);var inst_15032 = cljs.core.not.call(null,inst_15031);var state_15048__$1 = (function (){var statearr_15057 = state_15048;(statearr_15057[9] = inst_15030__$1);
return statearr_15057;
})();if(inst_15032)
{var statearr_15058_15077 = state_15048__$1;(statearr_15058_15077[1] = 8);
} else
{var statearr_15059_15078 = state_15048__$1;(statearr_15059_15078[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 8))
{var inst_15030 = (state_15048[9]);var state_15048__$1 = state_15048;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15048__$1,11,out,inst_15030);
} else
{if((state_val_15049 === 9))
{var state_15048__$1 = state_15048;var statearr_15060_15079 = state_15048__$1;(statearr_15060_15079[2] = null);
(statearr_15060_15079[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 10))
{var inst_15040 = (state_15048[2]);var state_15048__$1 = state_15048;var statearr_15061_15080 = state_15048__$1;(statearr_15061_15080[2] = inst_15040);
(statearr_15061_15080[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15049 === 11))
{var inst_15025 = (state_15048[7]);var inst_15035 = (state_15048[2]);var inst_15036 = (inst_15025 + 1);var inst_15025__$1 = inst_15036;var state_15048__$1 = (function (){var statearr_15062 = state_15048;(statearr_15062[7] = inst_15025__$1);
(statearr_15062[10] = inst_15035);
return statearr_15062;
})();var statearr_15063_15081 = state_15048__$1;(statearr_15063_15081[2] = null);
(statearr_15063_15081[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15067 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15067[0] = state_machine__5507__auto__);
(statearr_15067[1] = 1);
return statearr_15067;
});
var state_machine__5507__auto____1 = (function (state_15048){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15048);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15068){if((e15068 instanceof Object))
{var ex__5510__auto__ = e15068;var statearr_15069_15082 = state_15048;(statearr_15069_15082[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15048);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15068;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15083 = state_15048;
state_15048 = G__15083;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15048){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15070 = f__5522__auto__.call(null);(statearr_15070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15071);
return statearr_15070;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15180 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15155){var state_val_15156 = (state_15155[1]);if((state_val_15156 === 1))
{var inst_15132 = null;var state_15155__$1 = (function (){var statearr_15157 = state_15155;(statearr_15157[7] = inst_15132);
return statearr_15157;
})();var statearr_15158_15181 = state_15155__$1;(statearr_15158_15181[2] = null);
(statearr_15158_15181[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15156 === 2))
{var state_15155__$1 = state_15155;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15155__$1,4,ch);
} else
{if((state_val_15156 === 3))
{var inst_15152 = (state_15155[2]);var inst_15153 = cljs.core.async.close_BANG_.call(null,out);var state_15155__$1 = (function (){var statearr_15159 = state_15155;(statearr_15159[8] = inst_15152);
return statearr_15159;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15155__$1,inst_15153);
} else
{if((state_val_15156 === 4))
{var inst_15135 = (state_15155[9]);var inst_15135__$1 = (state_15155[2]);var inst_15136 = (inst_15135__$1 == null);var inst_15137 = cljs.core.not.call(null,inst_15136);var state_15155__$1 = (function (){var statearr_15160 = state_15155;(statearr_15160[9] = inst_15135__$1);
return statearr_15160;
})();if(inst_15137)
{var statearr_15161_15182 = state_15155__$1;(statearr_15161_15182[1] = 5);
} else
{var statearr_15162_15183 = state_15155__$1;(statearr_15162_15183[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15156 === 5))
{var inst_15135 = (state_15155[9]);var inst_15132 = (state_15155[7]);var inst_15139 = cljs.core._EQ_.call(null,inst_15135,inst_15132);var state_15155__$1 = state_15155;if(inst_15139)
{var statearr_15163_15184 = state_15155__$1;(statearr_15163_15184[1] = 8);
} else
{var statearr_15164_15185 = state_15155__$1;(statearr_15164_15185[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15156 === 6))
{var state_15155__$1 = state_15155;var statearr_15166_15186 = state_15155__$1;(statearr_15166_15186[2] = null);
(statearr_15166_15186[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15156 === 7))
{var inst_15150 = (state_15155[2]);var state_15155__$1 = state_15155;var statearr_15167_15187 = state_15155__$1;(statearr_15167_15187[2] = inst_15150);
(statearr_15167_15187[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15156 === 8))
{var inst_15132 = (state_15155[7]);var tmp15165 = inst_15132;var inst_15132__$1 = tmp15165;var state_15155__$1 = (function (){var statearr_15168 = state_15155;(statearr_15168[7] = inst_15132__$1);
return statearr_15168;
})();var statearr_15169_15188 = state_15155__$1;(statearr_15169_15188[2] = null);
(statearr_15169_15188[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15156 === 9))
{var inst_15135 = (state_15155[9]);var state_15155__$1 = state_15155;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15155__$1,11,out,inst_15135);
} else
{if((state_val_15156 === 10))
{var inst_15147 = (state_15155[2]);var state_15155__$1 = state_15155;var statearr_15170_15189 = state_15155__$1;(statearr_15170_15189[2] = inst_15147);
(statearr_15170_15189[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15156 === 11))
{var inst_15135 = (state_15155[9]);var inst_15144 = (state_15155[2]);var inst_15132 = inst_15135;var state_15155__$1 = (function (){var statearr_15171 = state_15155;(statearr_15171[7] = inst_15132);
(statearr_15171[10] = inst_15144);
return statearr_15171;
})();var statearr_15172_15190 = state_15155__$1;(statearr_15172_15190[2] = null);
(statearr_15172_15190[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15176 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15176[0] = state_machine__5507__auto__);
(statearr_15176[1] = 1);
return statearr_15176;
});
var state_machine__5507__auto____1 = (function (state_15155){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15155);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15177){if((e15177 instanceof Object))
{var ex__5510__auto__ = e15177;var statearr_15178_15191 = state_15155;(statearr_15178_15191[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15155);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15177;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15192 = state_15155;
state_15155 = G__15192;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15155){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15155);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15179 = f__5522__auto__.call(null);(statearr_15179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15180);
return statearr_15179;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15327 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15297){var state_val_15298 = (state_15297[1]);if((state_val_15298 === 1))
{var inst_15260 = (new Array(n));var inst_15261 = inst_15260;var inst_15262 = 0;var state_15297__$1 = (function (){var statearr_15299 = state_15297;(statearr_15299[7] = inst_15262);
(statearr_15299[8] = inst_15261);
return statearr_15299;
})();var statearr_15300_15328 = state_15297__$1;(statearr_15300_15328[2] = null);
(statearr_15300_15328[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 2))
{var state_15297__$1 = state_15297;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15297__$1,4,ch);
} else
{if((state_val_15298 === 3))
{var inst_15295 = (state_15297[2]);var state_15297__$1 = state_15297;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15297__$1,inst_15295);
} else
{if((state_val_15298 === 4))
{var inst_15265 = (state_15297[9]);var inst_15265__$1 = (state_15297[2]);var inst_15266 = (inst_15265__$1 == null);var inst_15267 = cljs.core.not.call(null,inst_15266);var state_15297__$1 = (function (){var statearr_15301 = state_15297;(statearr_15301[9] = inst_15265__$1);
return statearr_15301;
})();if(inst_15267)
{var statearr_15302_15329 = state_15297__$1;(statearr_15302_15329[1] = 5);
} else
{var statearr_15303_15330 = state_15297__$1;(statearr_15303_15330[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 5))
{var inst_15270 = (state_15297[10]);var inst_15265 = (state_15297[9]);var inst_15262 = (state_15297[7]);var inst_15261 = (state_15297[8]);var inst_15269 = (inst_15261[inst_15262] = inst_15265);var inst_15270__$1 = (inst_15262 + 1);var inst_15271 = (inst_15270__$1 < n);var state_15297__$1 = (function (){var statearr_15304 = state_15297;(statearr_15304[11] = inst_15269);
(statearr_15304[10] = inst_15270__$1);
return statearr_15304;
})();if(cljs.core.truth_(inst_15271))
{var statearr_15305_15331 = state_15297__$1;(statearr_15305_15331[1] = 8);
} else
{var statearr_15306_15332 = state_15297__$1;(statearr_15306_15332[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 6))
{var inst_15262 = (state_15297[7]);var inst_15283 = (inst_15262 > 0);var state_15297__$1 = state_15297;if(cljs.core.truth_(inst_15283))
{var statearr_15308_15333 = state_15297__$1;(statearr_15308_15333[1] = 12);
} else
{var statearr_15309_15334 = state_15297__$1;(statearr_15309_15334[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 7))
{var inst_15293 = (state_15297[2]);var state_15297__$1 = state_15297;var statearr_15310_15335 = state_15297__$1;(statearr_15310_15335[2] = inst_15293);
(statearr_15310_15335[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 8))
{var inst_15270 = (state_15297[10]);var inst_15261 = (state_15297[8]);var tmp15307 = inst_15261;var inst_15261__$1 = tmp15307;var inst_15262 = inst_15270;var state_15297__$1 = (function (){var statearr_15311 = state_15297;(statearr_15311[7] = inst_15262);
(statearr_15311[8] = inst_15261__$1);
return statearr_15311;
})();var statearr_15312_15336 = state_15297__$1;(statearr_15312_15336[2] = null);
(statearr_15312_15336[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 9))
{var inst_15261 = (state_15297[8]);var inst_15275 = cljs.core.vec.call(null,inst_15261);var state_15297__$1 = state_15297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15297__$1,11,out,inst_15275);
} else
{if((state_val_15298 === 10))
{var inst_15281 = (state_15297[2]);var state_15297__$1 = state_15297;var statearr_15313_15337 = state_15297__$1;(statearr_15313_15337[2] = inst_15281);
(statearr_15313_15337[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 11))
{var inst_15277 = (state_15297[2]);var inst_15278 = (new Array(n));var inst_15261 = inst_15278;var inst_15262 = 0;var state_15297__$1 = (function (){var statearr_15314 = state_15297;(statearr_15314[7] = inst_15262);
(statearr_15314[8] = inst_15261);
(statearr_15314[12] = inst_15277);
return statearr_15314;
})();var statearr_15315_15338 = state_15297__$1;(statearr_15315_15338[2] = null);
(statearr_15315_15338[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 12))
{var inst_15261 = (state_15297[8]);var inst_15285 = cljs.core.vec.call(null,inst_15261);var state_15297__$1 = state_15297;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15297__$1,15,out,inst_15285);
} else
{if((state_val_15298 === 13))
{var state_15297__$1 = state_15297;var statearr_15316_15339 = state_15297__$1;(statearr_15316_15339[2] = null);
(statearr_15316_15339[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 14))
{var inst_15290 = (state_15297[2]);var inst_15291 = cljs.core.async.close_BANG_.call(null,out);var state_15297__$1 = (function (){var statearr_15317 = state_15297;(statearr_15317[13] = inst_15290);
return statearr_15317;
})();var statearr_15318_15340 = state_15297__$1;(statearr_15318_15340[2] = inst_15291);
(statearr_15318_15340[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15298 === 15))
{var inst_15287 = (state_15297[2]);var state_15297__$1 = state_15297;var statearr_15319_15341 = state_15297__$1;(statearr_15319_15341[2] = inst_15287);
(statearr_15319_15341[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15323 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15323[0] = state_machine__5507__auto__);
(statearr_15323[1] = 1);
return statearr_15323;
});
var state_machine__5507__auto____1 = (function (state_15297){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15297);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15324){if((e15324 instanceof Object))
{var ex__5510__auto__ = e15324;var statearr_15325_15342 = state_15297;(statearr_15325_15342[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15297);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15324;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15343 = state_15297;
state_15297 = G__15343;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15297){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15297);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15326 = f__5522__auto__.call(null);(statearr_15326[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15327);
return statearr_15326;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15486 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15456){var state_val_15457 = (state_15456[1]);if((state_val_15457 === 1))
{var inst_15415 = [];var inst_15416 = inst_15415;var inst_15417 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15456__$1 = (function (){var statearr_15458 = state_15456;(statearr_15458[7] = inst_15416);
(statearr_15458[8] = inst_15417);
return statearr_15458;
})();var statearr_15459_15487 = state_15456__$1;(statearr_15459_15487[2] = null);
(statearr_15459_15487[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 2))
{var state_15456__$1 = state_15456;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15456__$1,4,ch);
} else
{if((state_val_15457 === 3))
{var inst_15454 = (state_15456[2]);var state_15456__$1 = state_15456;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15456__$1,inst_15454);
} else
{if((state_val_15457 === 4))
{var inst_15420 = (state_15456[9]);var inst_15420__$1 = (state_15456[2]);var inst_15421 = (inst_15420__$1 == null);var inst_15422 = cljs.core.not.call(null,inst_15421);var state_15456__$1 = (function (){var statearr_15460 = state_15456;(statearr_15460[9] = inst_15420__$1);
return statearr_15460;
})();if(inst_15422)
{var statearr_15461_15488 = state_15456__$1;(statearr_15461_15488[1] = 5);
} else
{var statearr_15462_15489 = state_15456__$1;(statearr_15462_15489[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 5))
{var inst_15417 = (state_15456[8]);var inst_15424 = (state_15456[10]);var inst_15420 = (state_15456[9]);var inst_15424__$1 = f.call(null,inst_15420);var inst_15425 = cljs.core._EQ_.call(null,inst_15424__$1,inst_15417);var inst_15426 = cljs.core.keyword_identical_QMARK_.call(null,inst_15417,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15427 = (inst_15425) || (inst_15426);var state_15456__$1 = (function (){var statearr_15463 = state_15456;(statearr_15463[10] = inst_15424__$1);
return statearr_15463;
})();if(cljs.core.truth_(inst_15427))
{var statearr_15464_15490 = state_15456__$1;(statearr_15464_15490[1] = 8);
} else
{var statearr_15465_15491 = state_15456__$1;(statearr_15465_15491[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 6))
{var inst_15416 = (state_15456[7]);var inst_15441 = inst_15416.length;var inst_15442 = (inst_15441 > 0);var state_15456__$1 = state_15456;if(cljs.core.truth_(inst_15442))
{var statearr_15467_15492 = state_15456__$1;(statearr_15467_15492[1] = 12);
} else
{var statearr_15468_15493 = state_15456__$1;(statearr_15468_15493[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 7))
{var inst_15452 = (state_15456[2]);var state_15456__$1 = state_15456;var statearr_15469_15494 = state_15456__$1;(statearr_15469_15494[2] = inst_15452);
(statearr_15469_15494[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 8))
{var inst_15416 = (state_15456[7]);var inst_15424 = (state_15456[10]);var inst_15420 = (state_15456[9]);var inst_15429 = inst_15416.push(inst_15420);var tmp15466 = inst_15416;var inst_15416__$1 = tmp15466;var inst_15417 = inst_15424;var state_15456__$1 = (function (){var statearr_15470 = state_15456;(statearr_15470[7] = inst_15416__$1);
(statearr_15470[8] = inst_15417);
(statearr_15470[11] = inst_15429);
return statearr_15470;
})();var statearr_15471_15495 = state_15456__$1;(statearr_15471_15495[2] = null);
(statearr_15471_15495[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 9))
{var inst_15416 = (state_15456[7]);var inst_15432 = cljs.core.vec.call(null,inst_15416);var state_15456__$1 = state_15456;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15456__$1,11,out,inst_15432);
} else
{if((state_val_15457 === 10))
{var inst_15439 = (state_15456[2]);var state_15456__$1 = state_15456;var statearr_15472_15496 = state_15456__$1;(statearr_15472_15496[2] = inst_15439);
(statearr_15472_15496[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 11))
{var inst_15424 = (state_15456[10]);var inst_15420 = (state_15456[9]);var inst_15434 = (state_15456[2]);var inst_15435 = [];var inst_15436 = inst_15435.push(inst_15420);var inst_15416 = inst_15435;var inst_15417 = inst_15424;var state_15456__$1 = (function (){var statearr_15473 = state_15456;(statearr_15473[7] = inst_15416);
(statearr_15473[8] = inst_15417);
(statearr_15473[12] = inst_15436);
(statearr_15473[13] = inst_15434);
return statearr_15473;
})();var statearr_15474_15497 = state_15456__$1;(statearr_15474_15497[2] = null);
(statearr_15474_15497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 12))
{var inst_15416 = (state_15456[7]);var inst_15444 = cljs.core.vec.call(null,inst_15416);var state_15456__$1 = state_15456;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15456__$1,15,out,inst_15444);
} else
{if((state_val_15457 === 13))
{var state_15456__$1 = state_15456;var statearr_15475_15498 = state_15456__$1;(statearr_15475_15498[2] = null);
(statearr_15475_15498[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 14))
{var inst_15449 = (state_15456[2]);var inst_15450 = cljs.core.async.close_BANG_.call(null,out);var state_15456__$1 = (function (){var statearr_15476 = state_15456;(statearr_15476[14] = inst_15449);
return statearr_15476;
})();var statearr_15477_15499 = state_15456__$1;(statearr_15477_15499[2] = inst_15450);
(statearr_15477_15499[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15457 === 15))
{var inst_15446 = (state_15456[2]);var state_15456__$1 = state_15456;var statearr_15478_15500 = state_15456__$1;(statearr_15478_15500[2] = inst_15446);
(statearr_15478_15500[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15482 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15482[0] = state_machine__5507__auto__);
(statearr_15482[1] = 1);
return statearr_15482;
});
var state_machine__5507__auto____1 = (function (state_15456){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15456);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15483){if((e15483 instanceof Object))
{var ex__5510__auto__ = e15483;var statearr_15484_15501 = state_15456;(statearr_15484_15501[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15456);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15483;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15502 = state_15456;
state_15456 = G__15502;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15456){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15456);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15485 = f__5522__auto__.call(null);(statearr_15485[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15486);
return statearr_15485;
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