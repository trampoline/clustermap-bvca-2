// Compiled by ClojureScript 0.0-2080
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15909 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15909 = (function (f,fn_handler,meta15910){
this.f = f;
this.fn_handler = fn_handler;
this.meta15910 = meta15910;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15909.cljs$lang$type = true;
cljs.core.async.t15909.cljs$lang$ctorStr = "cljs.core.async/t15909";
cljs.core.async.t15909.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15909");
});
cljs.core.async.t15909.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15909.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15909.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15911){var self__ = this;
var _15911__$1 = this;return self__.meta15910;
});
cljs.core.async.t15909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15911,meta15910__$1){var self__ = this;
var _15911__$1 = this;return (new cljs.core.async.t15909(self__.f,self__.fn_handler,meta15910__$1));
});
cljs.core.async.__GT_t15909 = (function __GT_t15909(f__$1,fn_handler__$1,meta15910){return (new cljs.core.async.t15909(f__$1,fn_handler__$1,meta15910));
});
}
return (new cljs.core.async.t15909(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15913 = buff;if(G__15913)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15913.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15913.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15913);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15913);
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
{var val_15914 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15914);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15914);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3279__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___15915 = n;var x_15916 = 0;while(true){
if((x_15916 < n__4114__auto___15915))
{(a[x_15916] = 0);
{
var G__15917 = (x_15916 + 1);
x_15916 = G__15917;
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
var G__15918 = (i + 1);
i = G__15918;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15922 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15922 = (function (flag,alt_flag,meta15923){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15923 = meta15923;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15922.cljs$lang$type = true;
cljs.core.async.t15922.cljs$lang$ctorStr = "cljs.core.async/t15922";
cljs.core.async.t15922.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15922");
});
cljs.core.async.t15922.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15922.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15922.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15922.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15924){var self__ = this;
var _15924__$1 = this;return self__.meta15923;
});
cljs.core.async.t15922.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15924,meta15923__$1){var self__ = this;
var _15924__$1 = this;return (new cljs.core.async.t15922(self__.flag,self__.alt_flag,meta15923__$1));
});
cljs.core.async.__GT_t15922 = (function __GT_t15922(flag__$1,alt_flag__$1,meta15923){return (new cljs.core.async.t15922(flag__$1,alt_flag__$1,meta15923));
});
}
return (new cljs.core.async.t15922(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15928 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15928 = (function (cb,flag,alt_handler,meta15929){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15929 = meta15929;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15928.cljs$lang$type = true;
cljs.core.async.t15928.cljs$lang$ctorStr = "cljs.core.async/t15928";
cljs.core.async.t15928.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15928");
});
cljs.core.async.t15928.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15928.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15928.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15928.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15930){var self__ = this;
var _15930__$1 = this;return self__.meta15929;
});
cljs.core.async.t15928.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15930,meta15929__$1){var self__ = this;
var _15930__$1 = this;return (new cljs.core.async.t15928(self__.cb,self__.flag,self__.alt_handler,meta15929__$1));
});
cljs.core.async.__GT_t15928 = (function __GT_t15928(cb__$1,flag__$1,alt_handler__$1,meta15929){return (new cljs.core.async.t15928(cb__$1,flag__$1,alt_handler__$1,meta15929));
});
}
return (new cljs.core.async.t15928(cb,flag,alt_handler,null));
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
return (function (p1__15931_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15931_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3291__auto__ = wport;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15932 = (i + 1);
i = G__15932;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3291__auto__ = ret;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3279__auto__;
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
var alts_BANG___delegate = function (ports,p__15933){var map__15935 = p__15933;var map__15935__$1 = ((cljs.core.seq_QMARK_.call(null,map__15935))?cljs.core.apply.call(null,cljs.core.hash_map,map__15935):map__15935);var opts = map__15935__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15933 = null;if (arguments.length > 1) {
  p__15933 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15933);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15936){
var ports = cljs.core.first(arglist__15936);
var p__15933 = cljs.core.rest(arglist__15936);
return alts_BANG___delegate(ports,p__15933);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15944 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15944 = (function (ch,f,map_LT_,meta15945){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15945 = meta15945;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15944.cljs$lang$type = true;
cljs.core.async.t15944.cljs$lang$ctorStr = "cljs.core.async/t15944";
cljs.core.async.t15944.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15944");
});
cljs.core.async.t15944.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15944.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15944.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15944.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15947 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15947 = (function (fn1,_,meta15945,ch,f,map_LT_,meta15948){
this.fn1 = fn1;
this._ = _;
this.meta15945 = meta15945;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15948 = meta15948;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15947.cljs$lang$type = true;
cljs.core.async.t15947.cljs$lang$ctorStr = "cljs.core.async/t15947";
cljs.core.async.t15947.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15947");
});
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15947.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15937_SHARP_){return f1.call(null,(((p1__15937_SHARP_ == null))?null:self__.f.call(null,p1__15937_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15947.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15949){var self__ = this;
var _15949__$1 = this;return self__.meta15948;
});
cljs.core.async.t15947.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15949,meta15948__$1){var self__ = this;
var _15949__$1 = this;return (new cljs.core.async.t15947(self__.fn1,self__._,self__.meta15945,self__.ch,self__.f,self__.map_LT_,meta15948__$1));
});
cljs.core.async.__GT_t15947 = (function __GT_t15947(fn1__$1,___$2,meta15945__$1,ch__$2,f__$2,map_LT___$2,meta15948){return (new cljs.core.async.t15947(fn1__$1,___$2,meta15945__$1,ch__$2,f__$2,map_LT___$2,meta15948));
});
}
return (new cljs.core.async.t15947(fn1,___$1,self__.meta15945,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15944.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15944.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15944.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15946){var self__ = this;
var _15946__$1 = this;return self__.meta15945;
});
cljs.core.async.t15944.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15946,meta15945__$1){var self__ = this;
var _15946__$1 = this;return (new cljs.core.async.t15944(self__.ch,self__.f,self__.map_LT_,meta15945__$1));
});
cljs.core.async.__GT_t15944 = (function __GT_t15944(ch__$1,f__$1,map_LT___$1,meta15945){return (new cljs.core.async.t15944(ch__$1,f__$1,map_LT___$1,meta15945));
});
}
return (new cljs.core.async.t15944(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15953 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15953 = (function (ch,f,map_GT_,meta15954){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15954 = meta15954;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15953.cljs$lang$type = true;
cljs.core.async.t15953.cljs$lang$ctorStr = "cljs.core.async/t15953";
cljs.core.async.t15953.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15953");
});
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15953.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15955){var self__ = this;
var _15955__$1 = this;return self__.meta15954;
});
cljs.core.async.t15953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15955,meta15954__$1){var self__ = this;
var _15955__$1 = this;return (new cljs.core.async.t15953(self__.ch,self__.f,self__.map_GT_,meta15954__$1));
});
cljs.core.async.__GT_t15953 = (function __GT_t15953(ch__$1,f__$1,map_GT___$1,meta15954){return (new cljs.core.async.t15953(ch__$1,f__$1,map_GT___$1,meta15954));
});
}
return (new cljs.core.async.t15953(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15959 = (function (ch,p,filter_GT_,meta15960){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15960 = meta15960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15959.cljs$lang$type = true;
cljs.core.async.t15959.cljs$lang$ctorStr = "cljs.core.async/t15959";
cljs.core.async.t15959.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15959");
});
cljs.core.async.t15959.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15959.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15959.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15959.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15959.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15959.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15961){var self__ = this;
var _15961__$1 = this;return self__.meta15960;
});
cljs.core.async.t15959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15961,meta15960__$1){var self__ = this;
var _15961__$1 = this;return (new cljs.core.async.t15959(self__.ch,self__.p,self__.filter_GT_,meta15960__$1));
});
cljs.core.async.__GT_t15959 = (function __GT_t15959(ch__$1,p__$1,filter_GT___$1,meta15960){return (new cljs.core.async.t15959(ch__$1,p__$1,filter_GT___$1,meta15960));
});
}
return (new cljs.core.async.t15959(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___16044 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_16023){var state_val_16024 = (state_16023[1]);if((state_val_16024 === 1))
{var state_16023__$1 = state_16023;var statearr_16025_16045 = state_16023__$1;(statearr_16025_16045[2] = null);
(statearr_16025_16045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16024 === 2))
{var state_16023__$1 = state_16023;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16023__$1,4,ch);
} else
{if((state_val_16024 === 3))
{var inst_16021 = (state_16023[2]);var state_16023__$1 = state_16023;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16023__$1,inst_16021);
} else
{if((state_val_16024 === 4))
{var inst_16005 = (state_16023[7]);var inst_16005__$1 = (state_16023[2]);var inst_16006 = (inst_16005__$1 == null);var state_16023__$1 = (function (){var statearr_16026 = state_16023;(statearr_16026[7] = inst_16005__$1);
return statearr_16026;
})();if(cljs.core.truth_(inst_16006))
{var statearr_16027_16046 = state_16023__$1;(statearr_16027_16046[1] = 5);
} else
{var statearr_16028_16047 = state_16023__$1;(statearr_16028_16047[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16024 === 5))
{var inst_16008 = cljs.core.async.close_BANG_.call(null,out);var state_16023__$1 = state_16023;var statearr_16029_16048 = state_16023__$1;(statearr_16029_16048[2] = inst_16008);
(statearr_16029_16048[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16024 === 6))
{var inst_16005 = (state_16023[7]);var inst_16010 = p.call(null,inst_16005);var state_16023__$1 = state_16023;if(cljs.core.truth_(inst_16010))
{var statearr_16030_16049 = state_16023__$1;(statearr_16030_16049[1] = 8);
} else
{var statearr_16031_16050 = state_16023__$1;(statearr_16031_16050[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16024 === 7))
{var inst_16019 = (state_16023[2]);var state_16023__$1 = state_16023;var statearr_16032_16051 = state_16023__$1;(statearr_16032_16051[2] = inst_16019);
(statearr_16032_16051[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16024 === 8))
{var inst_16005 = (state_16023[7]);var state_16023__$1 = state_16023;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16023__$1,11,out,inst_16005);
} else
{if((state_val_16024 === 9))
{var state_16023__$1 = state_16023;var statearr_16033_16052 = state_16023__$1;(statearr_16033_16052[2] = null);
(statearr_16033_16052[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16024 === 10))
{var inst_16016 = (state_16023[2]);var state_16023__$1 = (function (){var statearr_16034 = state_16023;(statearr_16034[8] = inst_16016);
return statearr_16034;
})();var statearr_16035_16053 = state_16023__$1;(statearr_16035_16053[2] = null);
(statearr_16035_16053[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16024 === 11))
{var inst_16013 = (state_16023[2]);var state_16023__$1 = state_16023;var statearr_16036_16054 = state_16023__$1;(statearr_16036_16054[2] = inst_16013);
(statearr_16036_16054[1] = 10);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_16040 = (new Array(9));(statearr_16040[0] = state_machine__6013__auto__);
(statearr_16040[1] = 1);
return statearr_16040;
});
var state_machine__6013__auto____1 = (function (state_16023){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_16023);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e16041){if((e16041 instanceof Object))
{var ex__6016__auto__ = e16041;var statearr_16042_16055 = state_16023;(statearr_16042_16055[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16023);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16041;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16056 = state_16023;
state_16023 = G__16056;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_16023){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_16023);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_16043 = f__6083__auto__.call(null);(statearr_16043[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___16044);
return statearr_16043;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6082__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_16208){var state_val_16209 = (state_16208[1]);if((state_val_16209 === 1))
{var state_16208__$1 = state_16208;var statearr_16210_16247 = state_16208__$1;(statearr_16210_16247[2] = null);
(statearr_16210_16247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 2))
{var state_16208__$1 = state_16208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16208__$1,4,in$);
} else
{if((state_val_16209 === 3))
{var inst_16206 = (state_16208[2]);var state_16208__$1 = state_16208;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16208__$1,inst_16206);
} else
{if((state_val_16209 === 4))
{var inst_16154 = (state_16208[7]);var inst_16154__$1 = (state_16208[2]);var inst_16155 = (inst_16154__$1 == null);var state_16208__$1 = (function (){var statearr_16211 = state_16208;(statearr_16211[7] = inst_16154__$1);
return statearr_16211;
})();if(cljs.core.truth_(inst_16155))
{var statearr_16212_16248 = state_16208__$1;(statearr_16212_16248[1] = 5);
} else
{var statearr_16213_16249 = state_16208__$1;(statearr_16213_16249[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 5))
{var inst_16157 = cljs.core.async.close_BANG_.call(null,out);var state_16208__$1 = state_16208;var statearr_16214_16250 = state_16208__$1;(statearr_16214_16250[2] = inst_16157);
(statearr_16214_16250[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 6))
{var inst_16154 = (state_16208[7]);var inst_16159 = f.call(null,inst_16154);var inst_16164 = cljs.core.seq.call(null,inst_16159);var inst_16165 = inst_16164;var inst_16166 = null;var inst_16167 = 0;var inst_16168 = 0;var state_16208__$1 = (function (){var statearr_16215 = state_16208;(statearr_16215[8] = inst_16167);
(statearr_16215[9] = inst_16168);
(statearr_16215[10] = inst_16166);
(statearr_16215[11] = inst_16165);
return statearr_16215;
})();var statearr_16216_16251 = state_16208__$1;(statearr_16216_16251[2] = null);
(statearr_16216_16251[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 7))
{var inst_16204 = (state_16208[2]);var state_16208__$1 = state_16208;var statearr_16217_16252 = state_16208__$1;(statearr_16217_16252[2] = inst_16204);
(statearr_16217_16252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 8))
{var inst_16167 = (state_16208[8]);var inst_16168 = (state_16208[9]);var inst_16170 = (inst_16168 < inst_16167);var inst_16171 = inst_16170;var state_16208__$1 = state_16208;if(cljs.core.truth_(inst_16171))
{var statearr_16218_16253 = state_16208__$1;(statearr_16218_16253[1] = 10);
} else
{var statearr_16219_16254 = state_16208__$1;(statearr_16219_16254[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 9))
{var inst_16201 = (state_16208[2]);var state_16208__$1 = (function (){var statearr_16220 = state_16208;(statearr_16220[12] = inst_16201);
return statearr_16220;
})();var statearr_16221_16255 = state_16208__$1;(statearr_16221_16255[2] = null);
(statearr_16221_16255[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 10))
{var inst_16168 = (state_16208[9]);var inst_16166 = (state_16208[10]);var inst_16173 = cljs.core._nth.call(null,inst_16166,inst_16168);var state_16208__$1 = state_16208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16208__$1,13,out,inst_16173);
} else
{if((state_val_16209 === 11))
{var inst_16165 = (state_16208[11]);var inst_16179 = (state_16208[13]);var inst_16179__$1 = cljs.core.seq.call(null,inst_16165);var state_16208__$1 = (function (){var statearr_16225 = state_16208;(statearr_16225[13] = inst_16179__$1);
return statearr_16225;
})();if(inst_16179__$1)
{var statearr_16226_16256 = state_16208__$1;(statearr_16226_16256[1] = 14);
} else
{var statearr_16227_16257 = state_16208__$1;(statearr_16227_16257[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 12))
{var inst_16199 = (state_16208[2]);var state_16208__$1 = state_16208;var statearr_16228_16258 = state_16208__$1;(statearr_16228_16258[2] = inst_16199);
(statearr_16228_16258[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 13))
{var inst_16167 = (state_16208[8]);var inst_16168 = (state_16208[9]);var inst_16166 = (state_16208[10]);var inst_16165 = (state_16208[11]);var inst_16175 = (state_16208[2]);var inst_16176 = (inst_16168 + 1);var tmp16222 = inst_16167;var tmp16223 = inst_16166;var tmp16224 = inst_16165;var inst_16165__$1 = tmp16224;var inst_16166__$1 = tmp16223;var inst_16167__$1 = tmp16222;var inst_16168__$1 = inst_16176;var state_16208__$1 = (function (){var statearr_16229 = state_16208;(statearr_16229[8] = inst_16167__$1);
(statearr_16229[9] = inst_16168__$1);
(statearr_16229[10] = inst_16166__$1);
(statearr_16229[11] = inst_16165__$1);
(statearr_16229[14] = inst_16175);
return statearr_16229;
})();var statearr_16230_16259 = state_16208__$1;(statearr_16230_16259[2] = null);
(statearr_16230_16259[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 14))
{var inst_16179 = (state_16208[13]);var inst_16181 = cljs.core.chunked_seq_QMARK_.call(null,inst_16179);var state_16208__$1 = state_16208;if(inst_16181)
{var statearr_16231_16260 = state_16208__$1;(statearr_16231_16260[1] = 17);
} else
{var statearr_16232_16261 = state_16208__$1;(statearr_16232_16261[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 15))
{var state_16208__$1 = state_16208;var statearr_16233_16262 = state_16208__$1;(statearr_16233_16262[2] = null);
(statearr_16233_16262[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 16))
{var inst_16197 = (state_16208[2]);var state_16208__$1 = state_16208;var statearr_16234_16263 = state_16208__$1;(statearr_16234_16263[2] = inst_16197);
(statearr_16234_16263[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 17))
{var inst_16179 = (state_16208[13]);var inst_16183 = cljs.core.chunk_first.call(null,inst_16179);var inst_16184 = cljs.core.chunk_rest.call(null,inst_16179);var inst_16185 = cljs.core.count.call(null,inst_16183);var inst_16165 = inst_16184;var inst_16166 = inst_16183;var inst_16167 = inst_16185;var inst_16168 = 0;var state_16208__$1 = (function (){var statearr_16235 = state_16208;(statearr_16235[8] = inst_16167);
(statearr_16235[9] = inst_16168);
(statearr_16235[10] = inst_16166);
(statearr_16235[11] = inst_16165);
return statearr_16235;
})();var statearr_16236_16264 = state_16208__$1;(statearr_16236_16264[2] = null);
(statearr_16236_16264[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 18))
{var inst_16179 = (state_16208[13]);var inst_16188 = cljs.core.first.call(null,inst_16179);var state_16208__$1 = state_16208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16208__$1,20,out,inst_16188);
} else
{if((state_val_16209 === 19))
{var inst_16194 = (state_16208[2]);var state_16208__$1 = state_16208;var statearr_16237_16265 = state_16208__$1;(statearr_16237_16265[2] = inst_16194);
(statearr_16237_16265[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16209 === 20))
{var inst_16179 = (state_16208[13]);var inst_16190 = (state_16208[2]);var inst_16191 = cljs.core.next.call(null,inst_16179);var inst_16165 = inst_16191;var inst_16166 = null;var inst_16167 = 0;var inst_16168 = 0;var state_16208__$1 = (function (){var statearr_16238 = state_16208;(statearr_16238[15] = inst_16190);
(statearr_16238[8] = inst_16167);
(statearr_16238[9] = inst_16168);
(statearr_16238[10] = inst_16166);
(statearr_16238[11] = inst_16165);
return statearr_16238;
})();var statearr_16239_16266 = state_16208__$1;(statearr_16239_16266[2] = null);
(statearr_16239_16266[1] = 8);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_16243 = (new Array(16));(statearr_16243[0] = state_machine__6013__auto__);
(statearr_16243[1] = 1);
return statearr_16243;
});
var state_machine__6013__auto____1 = (function (state_16208){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_16208);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e16244){if((e16244 instanceof Object))
{var ex__6016__auto__ = e16244;var statearr_16245_16267 = state_16208;(statearr_16245_16267[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16208);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16268 = state_16208;
state_16208 = G__16268;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_16208){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_16208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_16246 = f__6083__auto__.call(null);(statearr_16246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto__);
return statearr_16246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
}));
return c__6082__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6082__auto___16349 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_16328){var state_val_16329 = (state_16328[1]);if((state_val_16329 === 1))
{var state_16328__$1 = state_16328;var statearr_16330_16350 = state_16328__$1;(statearr_16330_16350[2] = null);
(statearr_16330_16350[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16329 === 2))
{var state_16328__$1 = state_16328;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16328__$1,4,from);
} else
{if((state_val_16329 === 3))
{var inst_16326 = (state_16328[2]);var state_16328__$1 = state_16328;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16328__$1,inst_16326);
} else
{if((state_val_16329 === 4))
{var inst_16311 = (state_16328[7]);var inst_16311__$1 = (state_16328[2]);var inst_16312 = (inst_16311__$1 == null);var state_16328__$1 = (function (){var statearr_16331 = state_16328;(statearr_16331[7] = inst_16311__$1);
return statearr_16331;
})();if(cljs.core.truth_(inst_16312))
{var statearr_16332_16351 = state_16328__$1;(statearr_16332_16351[1] = 5);
} else
{var statearr_16333_16352 = state_16328__$1;(statearr_16333_16352[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16329 === 5))
{var state_16328__$1 = state_16328;if(cljs.core.truth_(close_QMARK_))
{var statearr_16334_16353 = state_16328__$1;(statearr_16334_16353[1] = 8);
} else
{var statearr_16335_16354 = state_16328__$1;(statearr_16335_16354[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16329 === 6))
{var inst_16311 = (state_16328[7]);var state_16328__$1 = state_16328;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16328__$1,11,to,inst_16311);
} else
{if((state_val_16329 === 7))
{var inst_16324 = (state_16328[2]);var state_16328__$1 = state_16328;var statearr_16336_16355 = state_16328__$1;(statearr_16336_16355[2] = inst_16324);
(statearr_16336_16355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16329 === 8))
{var inst_16315 = cljs.core.async.close_BANG_.call(null,to);var state_16328__$1 = state_16328;var statearr_16337_16356 = state_16328__$1;(statearr_16337_16356[2] = inst_16315);
(statearr_16337_16356[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16329 === 9))
{var state_16328__$1 = state_16328;var statearr_16338_16357 = state_16328__$1;(statearr_16338_16357[2] = null);
(statearr_16338_16357[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16329 === 10))
{var inst_16318 = (state_16328[2]);var state_16328__$1 = state_16328;var statearr_16339_16358 = state_16328__$1;(statearr_16339_16358[2] = inst_16318);
(statearr_16339_16358[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16329 === 11))
{var inst_16321 = (state_16328[2]);var state_16328__$1 = (function (){var statearr_16340 = state_16328;(statearr_16340[8] = inst_16321);
return statearr_16340;
})();var statearr_16341_16359 = state_16328__$1;(statearr_16341_16359[2] = null);
(statearr_16341_16359[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_16345 = (new Array(9));(statearr_16345[0] = state_machine__6013__auto__);
(statearr_16345[1] = 1);
return statearr_16345;
});
var state_machine__6013__auto____1 = (function (state_16328){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_16328);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e16346){if((e16346 instanceof Object))
{var ex__6016__auto__ = e16346;var statearr_16347_16360 = state_16328;(statearr_16347_16360[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16328);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16346;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16361 = state_16328;
state_16328 = G__16361;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_16328){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_16328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_16348 = f__6083__auto__.call(null);(statearr_16348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___16349);
return statearr_16348;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6082__auto___16448 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_16426){var state_val_16427 = (state_16426[1]);if((state_val_16427 === 1))
{var state_16426__$1 = state_16426;var statearr_16428_16449 = state_16426__$1;(statearr_16428_16449[2] = null);
(statearr_16428_16449[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16427 === 2))
{var state_16426__$1 = state_16426;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16426__$1,4,ch);
} else
{if((state_val_16427 === 3))
{var inst_16424 = (state_16426[2]);var state_16426__$1 = state_16426;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16426__$1,inst_16424);
} else
{if((state_val_16427 === 4))
{var inst_16407 = (state_16426[7]);var inst_16407__$1 = (state_16426[2]);var inst_16408 = (inst_16407__$1 == null);var state_16426__$1 = (function (){var statearr_16429 = state_16426;(statearr_16429[7] = inst_16407__$1);
return statearr_16429;
})();if(cljs.core.truth_(inst_16408))
{var statearr_16430_16450 = state_16426__$1;(statearr_16430_16450[1] = 5);
} else
{var statearr_16431_16451 = state_16426__$1;(statearr_16431_16451[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16427 === 5))
{var inst_16410 = cljs.core.async.close_BANG_.call(null,tc);var inst_16411 = cljs.core.async.close_BANG_.call(null,fc);var state_16426__$1 = (function (){var statearr_16432 = state_16426;(statearr_16432[8] = inst_16410);
return statearr_16432;
})();var statearr_16433_16452 = state_16426__$1;(statearr_16433_16452[2] = inst_16411);
(statearr_16433_16452[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16427 === 6))
{var inst_16407 = (state_16426[7]);var inst_16413 = p.call(null,inst_16407);var state_16426__$1 = state_16426;if(cljs.core.truth_(inst_16413))
{var statearr_16434_16453 = state_16426__$1;(statearr_16434_16453[1] = 9);
} else
{var statearr_16435_16454 = state_16426__$1;(statearr_16435_16454[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16427 === 7))
{var inst_16422 = (state_16426[2]);var state_16426__$1 = state_16426;var statearr_16436_16455 = state_16426__$1;(statearr_16436_16455[2] = inst_16422);
(statearr_16436_16455[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16427 === 8))
{var inst_16419 = (state_16426[2]);var state_16426__$1 = (function (){var statearr_16437 = state_16426;(statearr_16437[9] = inst_16419);
return statearr_16437;
})();var statearr_16438_16456 = state_16426__$1;(statearr_16438_16456[2] = null);
(statearr_16438_16456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16427 === 9))
{var state_16426__$1 = state_16426;var statearr_16439_16457 = state_16426__$1;(statearr_16439_16457[2] = tc);
(statearr_16439_16457[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16427 === 10))
{var state_16426__$1 = state_16426;var statearr_16440_16458 = state_16426__$1;(statearr_16440_16458[2] = fc);
(statearr_16440_16458[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16427 === 11))
{var inst_16407 = (state_16426[7]);var inst_16417 = (state_16426[2]);var state_16426__$1 = state_16426;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16426__$1,8,inst_16417,inst_16407);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_16444 = (new Array(10));(statearr_16444[0] = state_machine__6013__auto__);
(statearr_16444[1] = 1);
return statearr_16444;
});
var state_machine__6013__auto____1 = (function (state_16426){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_16426);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e16445){if((e16445 instanceof Object))
{var ex__6016__auto__ = e16445;var statearr_16446_16459 = state_16426;(statearr_16446_16459[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16426);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16445;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16460 = state_16426;
state_16426 = G__16460;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_16426){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_16426);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_16447 = f__6083__auto__.call(null);(statearr_16447[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___16448);
return statearr_16447;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6082__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_16507){var state_val_16508 = (state_16507[1]);if((state_val_16508 === 7))
{var inst_16503 = (state_16507[2]);var state_16507__$1 = state_16507;var statearr_16509_16525 = state_16507__$1;(statearr_16509_16525[2] = inst_16503);
(statearr_16509_16525[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16508 === 6))
{var inst_16493 = (state_16507[7]);var inst_16496 = (state_16507[8]);var inst_16500 = f.call(null,inst_16493,inst_16496);var inst_16493__$1 = inst_16500;var state_16507__$1 = (function (){var statearr_16510 = state_16507;(statearr_16510[7] = inst_16493__$1);
return statearr_16510;
})();var statearr_16511_16526 = state_16507__$1;(statearr_16511_16526[2] = null);
(statearr_16511_16526[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16508 === 5))
{var inst_16493 = (state_16507[7]);var state_16507__$1 = state_16507;var statearr_16512_16527 = state_16507__$1;(statearr_16512_16527[2] = inst_16493);
(statearr_16512_16527[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16508 === 4))
{var inst_16496 = (state_16507[8]);var inst_16496__$1 = (state_16507[2]);var inst_16497 = (inst_16496__$1 == null);var state_16507__$1 = (function (){var statearr_16513 = state_16507;(statearr_16513[8] = inst_16496__$1);
return statearr_16513;
})();if(cljs.core.truth_(inst_16497))
{var statearr_16514_16528 = state_16507__$1;(statearr_16514_16528[1] = 5);
} else
{var statearr_16515_16529 = state_16507__$1;(statearr_16515_16529[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16508 === 3))
{var inst_16505 = (state_16507[2]);var state_16507__$1 = state_16507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16507__$1,inst_16505);
} else
{if((state_val_16508 === 2))
{var state_16507__$1 = state_16507;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16507__$1,4,ch);
} else
{if((state_val_16508 === 1))
{var inst_16493 = init;var state_16507__$1 = (function (){var statearr_16516 = state_16507;(statearr_16516[7] = inst_16493);
return statearr_16516;
})();var statearr_16517_16530 = state_16507__$1;(statearr_16517_16530[2] = null);
(statearr_16517_16530[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_16521 = (new Array(9));(statearr_16521[0] = state_machine__6013__auto__);
(statearr_16521[1] = 1);
return statearr_16521;
});
var state_machine__6013__auto____1 = (function (state_16507){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_16507);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e16522){if((e16522 instanceof Object))
{var ex__6016__auto__ = e16522;var statearr_16523_16531 = state_16507;(statearr_16523_16531[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16522;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16532 = state_16507;
state_16507 = G__16532;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_16507){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_16507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_16524 = f__6083__auto__.call(null);(statearr_16524[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto__);
return statearr_16524;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
}));
return c__6082__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6082__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_16594){var state_val_16595 = (state_16594[1]);if((state_val_16595 === 1))
{var inst_16574 = cljs.core.seq.call(null,coll);var inst_16575 = inst_16574;var state_16594__$1 = (function (){var statearr_16596 = state_16594;(statearr_16596[7] = inst_16575);
return statearr_16596;
})();var statearr_16597_16615 = state_16594__$1;(statearr_16597_16615[2] = null);
(statearr_16597_16615[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16595 === 2))
{var inst_16575 = (state_16594[7]);var state_16594__$1 = state_16594;if(cljs.core.truth_(inst_16575))
{var statearr_16598_16616 = state_16594__$1;(statearr_16598_16616[1] = 4);
} else
{var statearr_16599_16617 = state_16594__$1;(statearr_16599_16617[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16595 === 3))
{var inst_16592 = (state_16594[2]);var state_16594__$1 = state_16594;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16594__$1,inst_16592);
} else
{if((state_val_16595 === 4))
{var inst_16575 = (state_16594[7]);var inst_16578 = cljs.core.first.call(null,inst_16575);var state_16594__$1 = state_16594;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16594__$1,7,ch,inst_16578);
} else
{if((state_val_16595 === 5))
{var state_16594__$1 = state_16594;if(cljs.core.truth_(close_QMARK_))
{var statearr_16600_16618 = state_16594__$1;(statearr_16600_16618[1] = 8);
} else
{var statearr_16601_16619 = state_16594__$1;(statearr_16601_16619[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16595 === 6))
{var inst_16590 = (state_16594[2]);var state_16594__$1 = state_16594;var statearr_16602_16620 = state_16594__$1;(statearr_16602_16620[2] = inst_16590);
(statearr_16602_16620[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16595 === 7))
{var inst_16575 = (state_16594[7]);var inst_16580 = (state_16594[2]);var inst_16581 = cljs.core.next.call(null,inst_16575);var inst_16575__$1 = inst_16581;var state_16594__$1 = (function (){var statearr_16603 = state_16594;(statearr_16603[8] = inst_16580);
(statearr_16603[7] = inst_16575__$1);
return statearr_16603;
})();var statearr_16604_16621 = state_16594__$1;(statearr_16604_16621[2] = null);
(statearr_16604_16621[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16595 === 8))
{var inst_16585 = cljs.core.async.close_BANG_.call(null,ch);var state_16594__$1 = state_16594;var statearr_16605_16622 = state_16594__$1;(statearr_16605_16622[2] = inst_16585);
(statearr_16605_16622[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16595 === 9))
{var state_16594__$1 = state_16594;var statearr_16606_16623 = state_16594__$1;(statearr_16606_16623[2] = null);
(statearr_16606_16623[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16595 === 10))
{var inst_16588 = (state_16594[2]);var state_16594__$1 = state_16594;var statearr_16607_16624 = state_16594__$1;(statearr_16607_16624[2] = inst_16588);
(statearr_16607_16624[1] = 6);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_16611 = (new Array(9));(statearr_16611[0] = state_machine__6013__auto__);
(statearr_16611[1] = 1);
return statearr_16611;
});
var state_machine__6013__auto____1 = (function (state_16594){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_16594);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e16612){if((e16612 instanceof Object))
{var ex__6016__auto__ = e16612;var statearr_16613_16625 = state_16594;(statearr_16613_16625[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16594);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16612;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16626 = state_16594;
state_16594 = G__16626;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_16594){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_16594);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_16614 = f__6083__auto__.call(null);(statearr_16614[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto__);
return statearr_16614;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
}));
return c__6082__auto__;
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
cljs.core.async.Mux = (function (){var obj16628 = {};return obj16628;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3279__auto__ = _;if(and__3279__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3894__auto__ = (((_ == null))?null:_);return (function (){var or__3291__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj16630 = {};return obj16630;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16845 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16845 = (function (cs,ch,mult,meta16846){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16846 = meta16846;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16845.cljs$lang$type = true;
cljs.core.async.t16845.cljs$lang$ctorStr = "cljs.core.async/t16845";
cljs.core.async.t16845.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16845");
});})(cs))
;
cljs.core.async.t16845.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16845.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16845.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16845.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16845.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16845.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16845.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16847){var self__ = this;
var _16847__$1 = this;return self__.meta16846;
});})(cs))
;
cljs.core.async.t16845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16847,meta16846__$1){var self__ = this;
var _16847__$1 = this;return (new cljs.core.async.t16845(self__.cs,self__.ch,self__.mult,meta16846__$1));
});})(cs))
;
cljs.core.async.__GT_t16845 = ((function (cs){
return (function __GT_t16845(cs__$1,ch__$1,mult__$1,meta16846){return (new cljs.core.async.t16845(cs__$1,ch__$1,mult__$1,meta16846));
});})(cs))
;
}
return (new cljs.core.async.t16845(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6082__auto___17059 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_16977){var state_val_16978 = (state_16977[1]);if((state_val_16978 === 32))
{var inst_16926 = (state_16977[7]);var inst_16850 = (state_16977[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16977,31,Object,null,30);var inst_16933 = cljs.core.async.put_BANG_.call(null,inst_16926,inst_16850,done);var state_16977__$1 = state_16977;var statearr_16979_17060 = state_16977__$1;(statearr_16979_17060[2] = inst_16933);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16977__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 1))
{var state_16977__$1 = state_16977;var statearr_16980_17061 = state_16977__$1;(statearr_16980_17061[2] = null);
(statearr_16980_17061[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 33))
{var inst_16939 = (state_16977[9]);var inst_16941 = cljs.core.chunked_seq_QMARK_.call(null,inst_16939);var state_16977__$1 = state_16977;if(inst_16941)
{var statearr_16981_17062 = state_16977__$1;(statearr_16981_17062[1] = 36);
} else
{var statearr_16982_17063 = state_16977__$1;(statearr_16982_17063[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 2))
{var state_16977__$1 = state_16977;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16977__$1,4,ch);
} else
{if((state_val_16978 === 34))
{var state_16977__$1 = state_16977;var statearr_16983_17064 = state_16977__$1;(statearr_16983_17064[2] = null);
(statearr_16983_17064[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 3))
{var inst_16975 = (state_16977[2]);var state_16977__$1 = state_16977;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16977__$1,inst_16975);
} else
{if((state_val_16978 === 35))
{var inst_16964 = (state_16977[2]);var state_16977__$1 = state_16977;var statearr_16984_17065 = state_16977__$1;(statearr_16984_17065[2] = inst_16964);
(statearr_16984_17065[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 4))
{var inst_16850 = (state_16977[8]);var inst_16850__$1 = (state_16977[2]);var inst_16851 = (inst_16850__$1 == null);var state_16977__$1 = (function (){var statearr_16985 = state_16977;(statearr_16985[8] = inst_16850__$1);
return statearr_16985;
})();if(cljs.core.truth_(inst_16851))
{var statearr_16986_17066 = state_16977__$1;(statearr_16986_17066[1] = 5);
} else
{var statearr_16987_17067 = state_16977__$1;(statearr_16987_17067[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 36))
{var inst_16939 = (state_16977[9]);var inst_16943 = cljs.core.chunk_first.call(null,inst_16939);var inst_16944 = cljs.core.chunk_rest.call(null,inst_16939);var inst_16945 = cljs.core.count.call(null,inst_16943);var inst_16918 = inst_16944;var inst_16919 = inst_16943;var inst_16920 = inst_16945;var inst_16921 = 0;var state_16977__$1 = (function (){var statearr_16988 = state_16977;(statearr_16988[10] = inst_16919);
(statearr_16988[11] = inst_16918);
(statearr_16988[12] = inst_16921);
(statearr_16988[13] = inst_16920);
return statearr_16988;
})();var statearr_16989_17068 = state_16977__$1;(statearr_16989_17068[2] = null);
(statearr_16989_17068[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 5))
{var inst_16857 = cljs.core.deref.call(null,cs);var inst_16858 = cljs.core.seq.call(null,inst_16857);var inst_16859 = inst_16858;var inst_16860 = null;var inst_16861 = 0;var inst_16862 = 0;var state_16977__$1 = (function (){var statearr_16990 = state_16977;(statearr_16990[14] = inst_16862);
(statearr_16990[15] = inst_16860);
(statearr_16990[16] = inst_16861);
(statearr_16990[17] = inst_16859);
return statearr_16990;
})();var statearr_16991_17069 = state_16977__$1;(statearr_16991_17069[2] = null);
(statearr_16991_17069[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 37))
{var inst_16939 = (state_16977[9]);var inst_16948 = cljs.core.first.call(null,inst_16939);var state_16977__$1 = (function (){var statearr_16992 = state_16977;(statearr_16992[18] = inst_16948);
return statearr_16992;
})();var statearr_16993_17070 = state_16977__$1;(statearr_16993_17070[2] = null);
(statearr_16993_17070[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 6))
{var inst_16909 = cljs.core.deref.call(null,cs);var inst_16910 = cljs.core.keys.call(null,inst_16909);var inst_16911 = cljs.core.count.call(null,inst_16910);var inst_16912 = cljs.core.reset_BANG_.call(null,dctr,inst_16911);var inst_16917 = cljs.core.seq.call(null,inst_16910);var inst_16918 = inst_16917;var inst_16919 = null;var inst_16920 = 0;var inst_16921 = 0;var state_16977__$1 = (function (){var statearr_16994 = state_16977;(statearr_16994[10] = inst_16919);
(statearr_16994[11] = inst_16918);
(statearr_16994[19] = inst_16912);
(statearr_16994[12] = inst_16921);
(statearr_16994[13] = inst_16920);
return statearr_16994;
})();var statearr_16995_17071 = state_16977__$1;(statearr_16995_17071[2] = null);
(statearr_16995_17071[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 38))
{var inst_16961 = (state_16977[2]);var state_16977__$1 = state_16977;var statearr_16996_17072 = state_16977__$1;(statearr_16996_17072[2] = inst_16961);
(statearr_16996_17072[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 7))
{var inst_16973 = (state_16977[2]);var state_16977__$1 = state_16977;var statearr_16997_17073 = state_16977__$1;(statearr_16997_17073[2] = inst_16973);
(statearr_16997_17073[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 39))
{var inst_16939 = (state_16977[9]);var inst_16957 = (state_16977[2]);var inst_16958 = cljs.core.next.call(null,inst_16939);var inst_16918 = inst_16958;var inst_16919 = null;var inst_16920 = 0;var inst_16921 = 0;var state_16977__$1 = (function (){var statearr_16998 = state_16977;(statearr_16998[10] = inst_16919);
(statearr_16998[11] = inst_16918);
(statearr_16998[12] = inst_16921);
(statearr_16998[20] = inst_16957);
(statearr_16998[13] = inst_16920);
return statearr_16998;
})();var statearr_16999_17074 = state_16977__$1;(statearr_16999_17074[2] = null);
(statearr_16999_17074[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 8))
{var inst_16862 = (state_16977[14]);var inst_16861 = (state_16977[16]);var inst_16864 = (inst_16862 < inst_16861);var inst_16865 = inst_16864;var state_16977__$1 = state_16977;if(cljs.core.truth_(inst_16865))
{var statearr_17000_17075 = state_16977__$1;(statearr_17000_17075[1] = 10);
} else
{var statearr_17001_17076 = state_16977__$1;(statearr_17001_17076[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 40))
{var inst_16948 = (state_16977[18]);var inst_16949 = (state_16977[2]);var inst_16950 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16951 = cljs.core.async.untap_STAR_.call(null,m,inst_16948);var state_16977__$1 = (function (){var statearr_17002 = state_16977;(statearr_17002[21] = inst_16950);
(statearr_17002[22] = inst_16949);
return statearr_17002;
})();var statearr_17003_17077 = state_16977__$1;(statearr_17003_17077[2] = inst_16951);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16977__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 9))
{var inst_16907 = (state_16977[2]);var state_16977__$1 = state_16977;var statearr_17004_17078 = state_16977__$1;(statearr_17004_17078[2] = inst_16907);
(statearr_17004_17078[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 41))
{var inst_16948 = (state_16977[18]);var inst_16850 = (state_16977[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16977,40,Object,null,39);var inst_16955 = cljs.core.async.put_BANG_.call(null,inst_16948,inst_16850,done);var state_16977__$1 = state_16977;var statearr_17005_17079 = state_16977__$1;(statearr_17005_17079[2] = inst_16955);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16977__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 10))
{var inst_16862 = (state_16977[14]);var inst_16860 = (state_16977[15]);var inst_16868 = cljs.core._nth.call(null,inst_16860,inst_16862);var inst_16869 = cljs.core.nth.call(null,inst_16868,0,null);var inst_16870 = cljs.core.nth.call(null,inst_16868,1,null);var state_16977__$1 = (function (){var statearr_17006 = state_16977;(statearr_17006[23] = inst_16869);
return statearr_17006;
})();if(cljs.core.truth_(inst_16870))
{var statearr_17007_17080 = state_16977__$1;(statearr_17007_17080[1] = 13);
} else
{var statearr_17008_17081 = state_16977__$1;(statearr_17008_17081[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 42))
{var inst_16970 = (state_16977[2]);var state_16977__$1 = (function (){var statearr_17009 = state_16977;(statearr_17009[24] = inst_16970);
return statearr_17009;
})();var statearr_17010_17082 = state_16977__$1;(statearr_17010_17082[2] = null);
(statearr_17010_17082[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 11))
{var inst_16859 = (state_16977[17]);var inst_16879 = (state_16977[25]);var inst_16879__$1 = cljs.core.seq.call(null,inst_16859);var state_16977__$1 = (function (){var statearr_17011 = state_16977;(statearr_17011[25] = inst_16879__$1);
return statearr_17011;
})();if(inst_16879__$1)
{var statearr_17012_17083 = state_16977__$1;(statearr_17012_17083[1] = 16);
} else
{var statearr_17013_17084 = state_16977__$1;(statearr_17013_17084[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 12))
{var inst_16905 = (state_16977[2]);var state_16977__$1 = state_16977;var statearr_17014_17085 = state_16977__$1;(statearr_17014_17085[2] = inst_16905);
(statearr_17014_17085[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 13))
{var inst_16869 = (state_16977[23]);var inst_16872 = cljs.core.async.close_BANG_.call(null,inst_16869);var state_16977__$1 = state_16977;var statearr_17018_17086 = state_16977__$1;(statearr_17018_17086[2] = inst_16872);
(statearr_17018_17086[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 14))
{var state_16977__$1 = state_16977;var statearr_17019_17087 = state_16977__$1;(statearr_17019_17087[2] = null);
(statearr_17019_17087[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 15))
{var inst_16862 = (state_16977[14]);var inst_16860 = (state_16977[15]);var inst_16861 = (state_16977[16]);var inst_16859 = (state_16977[17]);var inst_16875 = (state_16977[2]);var inst_16876 = (inst_16862 + 1);var tmp17015 = inst_16860;var tmp17016 = inst_16861;var tmp17017 = inst_16859;var inst_16859__$1 = tmp17017;var inst_16860__$1 = tmp17015;var inst_16861__$1 = tmp17016;var inst_16862__$1 = inst_16876;var state_16977__$1 = (function (){var statearr_17020 = state_16977;(statearr_17020[14] = inst_16862__$1);
(statearr_17020[15] = inst_16860__$1);
(statearr_17020[16] = inst_16861__$1);
(statearr_17020[26] = inst_16875);
(statearr_17020[17] = inst_16859__$1);
return statearr_17020;
})();var statearr_17021_17088 = state_16977__$1;(statearr_17021_17088[2] = null);
(statearr_17021_17088[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 16))
{var inst_16879 = (state_16977[25]);var inst_16881 = cljs.core.chunked_seq_QMARK_.call(null,inst_16879);var state_16977__$1 = state_16977;if(inst_16881)
{var statearr_17022_17089 = state_16977__$1;(statearr_17022_17089[1] = 19);
} else
{var statearr_17023_17090 = state_16977__$1;(statearr_17023_17090[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 17))
{var state_16977__$1 = state_16977;var statearr_17024_17091 = state_16977__$1;(statearr_17024_17091[2] = null);
(statearr_17024_17091[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 18))
{var inst_16903 = (state_16977[2]);var state_16977__$1 = state_16977;var statearr_17025_17092 = state_16977__$1;(statearr_17025_17092[2] = inst_16903);
(statearr_17025_17092[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 19))
{var inst_16879 = (state_16977[25]);var inst_16883 = cljs.core.chunk_first.call(null,inst_16879);var inst_16884 = cljs.core.chunk_rest.call(null,inst_16879);var inst_16885 = cljs.core.count.call(null,inst_16883);var inst_16859 = inst_16884;var inst_16860 = inst_16883;var inst_16861 = inst_16885;var inst_16862 = 0;var state_16977__$1 = (function (){var statearr_17026 = state_16977;(statearr_17026[14] = inst_16862);
(statearr_17026[15] = inst_16860);
(statearr_17026[16] = inst_16861);
(statearr_17026[17] = inst_16859);
return statearr_17026;
})();var statearr_17027_17093 = state_16977__$1;(statearr_17027_17093[2] = null);
(statearr_17027_17093[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 20))
{var inst_16879 = (state_16977[25]);var inst_16889 = cljs.core.first.call(null,inst_16879);var inst_16890 = cljs.core.nth.call(null,inst_16889,0,null);var inst_16891 = cljs.core.nth.call(null,inst_16889,1,null);var state_16977__$1 = (function (){var statearr_17028 = state_16977;(statearr_17028[27] = inst_16890);
return statearr_17028;
})();if(cljs.core.truth_(inst_16891))
{var statearr_17029_17094 = state_16977__$1;(statearr_17029_17094[1] = 22);
} else
{var statearr_17030_17095 = state_16977__$1;(statearr_17030_17095[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 21))
{var inst_16900 = (state_16977[2]);var state_16977__$1 = state_16977;var statearr_17031_17096 = state_16977__$1;(statearr_17031_17096[2] = inst_16900);
(statearr_17031_17096[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 22))
{var inst_16890 = (state_16977[27]);var inst_16893 = cljs.core.async.close_BANG_.call(null,inst_16890);var state_16977__$1 = state_16977;var statearr_17032_17097 = state_16977__$1;(statearr_17032_17097[2] = inst_16893);
(statearr_17032_17097[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 23))
{var state_16977__$1 = state_16977;var statearr_17033_17098 = state_16977__$1;(statearr_17033_17098[2] = null);
(statearr_17033_17098[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 24))
{var inst_16879 = (state_16977[25]);var inst_16896 = (state_16977[2]);var inst_16897 = cljs.core.next.call(null,inst_16879);var inst_16859 = inst_16897;var inst_16860 = null;var inst_16861 = 0;var inst_16862 = 0;var state_16977__$1 = (function (){var statearr_17034 = state_16977;(statearr_17034[14] = inst_16862);
(statearr_17034[15] = inst_16860);
(statearr_17034[16] = inst_16861);
(statearr_17034[17] = inst_16859);
(statearr_17034[28] = inst_16896);
return statearr_17034;
})();var statearr_17035_17099 = state_16977__$1;(statearr_17035_17099[2] = null);
(statearr_17035_17099[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 25))
{var inst_16921 = (state_16977[12]);var inst_16920 = (state_16977[13]);var inst_16923 = (inst_16921 < inst_16920);var inst_16924 = inst_16923;var state_16977__$1 = state_16977;if(cljs.core.truth_(inst_16924))
{var statearr_17036_17100 = state_16977__$1;(statearr_17036_17100[1] = 27);
} else
{var statearr_17037_17101 = state_16977__$1;(statearr_17037_17101[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 26))
{var inst_16968 = (state_16977[2]);var state_16977__$1 = (function (){var statearr_17038 = state_16977;(statearr_17038[29] = inst_16968);
return statearr_17038;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16977__$1,42,dchan);
} else
{if((state_val_16978 === 27))
{var inst_16919 = (state_16977[10]);var inst_16921 = (state_16977[12]);var inst_16926 = cljs.core._nth.call(null,inst_16919,inst_16921);var state_16977__$1 = (function (){var statearr_17039 = state_16977;(statearr_17039[7] = inst_16926);
return statearr_17039;
})();var statearr_17040_17102 = state_16977__$1;(statearr_17040_17102[2] = null);
(statearr_17040_17102[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 28))
{var inst_16918 = (state_16977[11]);var inst_16939 = (state_16977[9]);var inst_16939__$1 = cljs.core.seq.call(null,inst_16918);var state_16977__$1 = (function (){var statearr_17044 = state_16977;(statearr_17044[9] = inst_16939__$1);
return statearr_17044;
})();if(inst_16939__$1)
{var statearr_17045_17103 = state_16977__$1;(statearr_17045_17103[1] = 33);
} else
{var statearr_17046_17104 = state_16977__$1;(statearr_17046_17104[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 29))
{var inst_16966 = (state_16977[2]);var state_16977__$1 = state_16977;var statearr_17047_17105 = state_16977__$1;(statearr_17047_17105[2] = inst_16966);
(statearr_17047_17105[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 30))
{var inst_16919 = (state_16977[10]);var inst_16918 = (state_16977[11]);var inst_16921 = (state_16977[12]);var inst_16920 = (state_16977[13]);var inst_16935 = (state_16977[2]);var inst_16936 = (inst_16921 + 1);var tmp17041 = inst_16919;var tmp17042 = inst_16918;var tmp17043 = inst_16920;var inst_16918__$1 = tmp17042;var inst_16919__$1 = tmp17041;var inst_16920__$1 = tmp17043;var inst_16921__$1 = inst_16936;var state_16977__$1 = (function (){var statearr_17048 = state_16977;(statearr_17048[10] = inst_16919__$1);
(statearr_17048[11] = inst_16918__$1);
(statearr_17048[30] = inst_16935);
(statearr_17048[12] = inst_16921__$1);
(statearr_17048[13] = inst_16920__$1);
return statearr_17048;
})();var statearr_17049_17106 = state_16977__$1;(statearr_17049_17106[2] = null);
(statearr_17049_17106[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16978 === 31))
{var inst_16926 = (state_16977[7]);var inst_16927 = (state_16977[2]);var inst_16928 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16929 = cljs.core.async.untap_STAR_.call(null,m,inst_16926);var state_16977__$1 = (function (){var statearr_17050 = state_16977;(statearr_17050[31] = inst_16928);
(statearr_17050[32] = inst_16927);
return statearr_17050;
})();var statearr_17051_17107 = state_16977__$1;(statearr_17051_17107[2] = inst_16929);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16977__$1);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_17055 = (new Array(33));(statearr_17055[0] = state_machine__6013__auto__);
(statearr_17055[1] = 1);
return statearr_17055;
});
var state_machine__6013__auto____1 = (function (state_16977){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_16977);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e17056){if((e17056 instanceof Object))
{var ex__6016__auto__ = e17056;var statearr_17057_17108 = state_16977;(statearr_17057_17108[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16977);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17056;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17109 = state_16977;
state_16977 = G__17109;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_16977){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_16977);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_17058 = f__6083__auto__.call(null);(statearr_17058[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___17059);
return statearr_17058;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
cljs.core.async.Mix = (function (){var obj17111 = {};return obj17111;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t17221 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17221 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta17222){
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
this.meta17222 = meta17222;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17221.cljs$lang$type = true;
cljs.core.async.t17221.cljs$lang$ctorStr = "cljs.core.async/t17221";
cljs.core.async.t17221.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t17221");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17221.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t17221.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17221.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17221.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17221.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17221.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17221.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17221.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17221.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17223){var self__ = this;
var _17223__$1 = this;return self__.meta17222;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t17221.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_17223,meta17222__$1){var self__ = this;
var _17223__$1 = this;return (new cljs.core.async.t17221(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta17222__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t17221 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t17221(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17222){return (new cljs.core.async.t17221(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta17222));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t17221(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6082__auto___17330 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_17288){var state_val_17289 = (state_17288[1]);if((state_val_17289 === 1))
{var inst_17227 = (state_17288[7]);var inst_17227__$1 = calc_state.call(null);var inst_17228 = cljs.core.seq_QMARK_.call(null,inst_17227__$1);var state_17288__$1 = (function (){var statearr_17290 = state_17288;(statearr_17290[7] = inst_17227__$1);
return statearr_17290;
})();if(inst_17228)
{var statearr_17291_17331 = state_17288__$1;(statearr_17291_17331[1] = 2);
} else
{var statearr_17292_17332 = state_17288__$1;(statearr_17292_17332[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 2))
{var inst_17227 = (state_17288[7]);var inst_17230 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17227);var state_17288__$1 = state_17288;var statearr_17293_17333 = state_17288__$1;(statearr_17293_17333[2] = inst_17230);
(statearr_17293_17333[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 3))
{var inst_17227 = (state_17288[7]);var state_17288__$1 = state_17288;var statearr_17294_17334 = state_17288__$1;(statearr_17294_17334[2] = inst_17227);
(statearr_17294_17334[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 4))
{var inst_17227 = (state_17288[7]);var inst_17233 = (state_17288[2]);var inst_17234 = cljs.core.get.call(null,inst_17233,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17235 = cljs.core.get.call(null,inst_17233,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17236 = cljs.core.get.call(null,inst_17233,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_17237 = inst_17227;var state_17288__$1 = (function (){var statearr_17295 = state_17288;(statearr_17295[8] = inst_17236);
(statearr_17295[9] = inst_17237);
(statearr_17295[10] = inst_17234);
(statearr_17295[11] = inst_17235);
return statearr_17295;
})();var statearr_17296_17335 = state_17288__$1;(statearr_17296_17335[2] = null);
(statearr_17296_17335[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 5))
{var inst_17237 = (state_17288[9]);var inst_17240 = cljs.core.seq_QMARK_.call(null,inst_17237);var state_17288__$1 = state_17288;if(inst_17240)
{var statearr_17297_17336 = state_17288__$1;(statearr_17297_17336[1] = 7);
} else
{var statearr_17298_17337 = state_17288__$1;(statearr_17298_17337[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 6))
{var inst_17286 = (state_17288[2]);var state_17288__$1 = state_17288;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17288__$1,inst_17286);
} else
{if((state_val_17289 === 7))
{var inst_17237 = (state_17288[9]);var inst_17242 = cljs.core.apply.call(null,cljs.core.hash_map,inst_17237);var state_17288__$1 = state_17288;var statearr_17299_17338 = state_17288__$1;(statearr_17299_17338[2] = inst_17242);
(statearr_17299_17338[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 8))
{var inst_17237 = (state_17288[9]);var state_17288__$1 = state_17288;var statearr_17300_17339 = state_17288__$1;(statearr_17300_17339[2] = inst_17237);
(statearr_17300_17339[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 9))
{var inst_17245 = (state_17288[12]);var inst_17245__$1 = (state_17288[2]);var inst_17246 = cljs.core.get.call(null,inst_17245__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_17247 = cljs.core.get.call(null,inst_17245__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_17248 = cljs.core.get.call(null,inst_17245__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_17288__$1 = (function (){var statearr_17301 = state_17288;(statearr_17301[13] = inst_17247);
(statearr_17301[14] = inst_17248);
(statearr_17301[12] = inst_17245__$1);
return statearr_17301;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17288__$1,10,inst_17246);
} else
{if((state_val_17289 === 10))
{var inst_17253 = (state_17288[15]);var inst_17252 = (state_17288[16]);var inst_17251 = (state_17288[2]);var inst_17252__$1 = cljs.core.nth.call(null,inst_17251,0,null);var inst_17253__$1 = cljs.core.nth.call(null,inst_17251,1,null);var inst_17254 = (inst_17252__$1 == null);var inst_17255 = cljs.core._EQ_.call(null,inst_17253__$1,change);var inst_17256 = (inst_17254) || (inst_17255);var state_17288__$1 = (function (){var statearr_17302 = state_17288;(statearr_17302[15] = inst_17253__$1);
(statearr_17302[16] = inst_17252__$1);
return statearr_17302;
})();if(cljs.core.truth_(inst_17256))
{var statearr_17303_17340 = state_17288__$1;(statearr_17303_17340[1] = 11);
} else
{var statearr_17304_17341 = state_17288__$1;(statearr_17304_17341[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 11))
{var inst_17252 = (state_17288[16]);var inst_17258 = (inst_17252 == null);var state_17288__$1 = state_17288;if(cljs.core.truth_(inst_17258))
{var statearr_17305_17342 = state_17288__$1;(statearr_17305_17342[1] = 14);
} else
{var statearr_17306_17343 = state_17288__$1;(statearr_17306_17343[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 12))
{var inst_17248 = (state_17288[14]);var inst_17253 = (state_17288[15]);var inst_17267 = (state_17288[17]);var inst_17267__$1 = inst_17248.call(null,inst_17253);var state_17288__$1 = (function (){var statearr_17307 = state_17288;(statearr_17307[17] = inst_17267__$1);
return statearr_17307;
})();if(cljs.core.truth_(inst_17267__$1))
{var statearr_17308_17344 = state_17288__$1;(statearr_17308_17344[1] = 17);
} else
{var statearr_17309_17345 = state_17288__$1;(statearr_17309_17345[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 13))
{var inst_17284 = (state_17288[2]);var state_17288__$1 = state_17288;var statearr_17310_17346 = state_17288__$1;(statearr_17310_17346[2] = inst_17284);
(statearr_17310_17346[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 14))
{var inst_17253 = (state_17288[15]);var inst_17260 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_17253);var state_17288__$1 = state_17288;var statearr_17311_17347 = state_17288__$1;(statearr_17311_17347[2] = inst_17260);
(statearr_17311_17347[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 15))
{var state_17288__$1 = state_17288;var statearr_17312_17348 = state_17288__$1;(statearr_17312_17348[2] = null);
(statearr_17312_17348[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 16))
{var inst_17263 = (state_17288[2]);var inst_17264 = calc_state.call(null);var inst_17237 = inst_17264;var state_17288__$1 = (function (){var statearr_17313 = state_17288;(statearr_17313[9] = inst_17237);
(statearr_17313[18] = inst_17263);
return statearr_17313;
})();var statearr_17314_17349 = state_17288__$1;(statearr_17314_17349[2] = null);
(statearr_17314_17349[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 17))
{var inst_17267 = (state_17288[17]);var state_17288__$1 = state_17288;var statearr_17315_17350 = state_17288__$1;(statearr_17315_17350[2] = inst_17267);
(statearr_17315_17350[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 18))
{var inst_17247 = (state_17288[13]);var inst_17248 = (state_17288[14]);var inst_17253 = (state_17288[15]);var inst_17270 = cljs.core.empty_QMARK_.call(null,inst_17248);var inst_17271 = inst_17247.call(null,inst_17253);var inst_17272 = cljs.core.not.call(null,inst_17271);var inst_17273 = (inst_17270) && (inst_17272);var state_17288__$1 = state_17288;var statearr_17316_17351 = state_17288__$1;(statearr_17316_17351[2] = inst_17273);
(statearr_17316_17351[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 19))
{var inst_17275 = (state_17288[2]);var state_17288__$1 = state_17288;if(cljs.core.truth_(inst_17275))
{var statearr_17317_17352 = state_17288__$1;(statearr_17317_17352[1] = 20);
} else
{var statearr_17318_17353 = state_17288__$1;(statearr_17318_17353[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 20))
{var inst_17252 = (state_17288[16]);var state_17288__$1 = state_17288;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17288__$1,23,out,inst_17252);
} else
{if((state_val_17289 === 21))
{var state_17288__$1 = state_17288;var statearr_17319_17354 = state_17288__$1;(statearr_17319_17354[2] = null);
(statearr_17319_17354[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 22))
{var inst_17245 = (state_17288[12]);var inst_17281 = (state_17288[2]);var inst_17237 = inst_17245;var state_17288__$1 = (function (){var statearr_17320 = state_17288;(statearr_17320[9] = inst_17237);
(statearr_17320[19] = inst_17281);
return statearr_17320;
})();var statearr_17321_17355 = state_17288__$1;(statearr_17321_17355[2] = null);
(statearr_17321_17355[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17289 === 23))
{var inst_17278 = (state_17288[2]);var state_17288__$1 = state_17288;var statearr_17322_17356 = state_17288__$1;(statearr_17322_17356[2] = inst_17278);
(statearr_17322_17356[1] = 22);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_17326 = (new Array(20));(statearr_17326[0] = state_machine__6013__auto__);
(statearr_17326[1] = 1);
return statearr_17326;
});
var state_machine__6013__auto____1 = (function (state_17288){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_17288);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e17327){if((e17327 instanceof Object))
{var ex__6016__auto__ = e17327;var statearr_17328_17357 = state_17288;(statearr_17328_17357[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17288);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17327;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17358 = state_17288;
state_17288 = G__17358;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_17288){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_17288);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_17329 = f__6083__auto__.call(null);(statearr_17329[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___17330);
return statearr_17329;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
cljs.core.async.Pub = (function (){var obj17360 = {};return obj17360;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
return (function (topic){var or__3291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3291__auto__,mults){
return (function (p1__17361_SHARP_){if(cljs.core.truth_(p1__17361_SHARP_.call(null,topic)))
{return p1__17361_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__17361_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t17486 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t17486 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta17487){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta17487 = meta17487;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t17486.cljs$lang$type = true;
cljs.core.async.t17486.cljs$lang$ctorStr = "cljs.core.async/t17486";
cljs.core.async.t17486.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t17486");
});})(mults,ensure_mult))
;
cljs.core.async.t17486.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t17486.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t17486.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t17486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t17486.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t17486.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t17486.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t17486.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_17488){var self__ = this;
var _17488__$1 = this;return self__.meta17487;
});})(mults,ensure_mult))
;
cljs.core.async.t17486.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_17488,meta17487__$1){var self__ = this;
var _17488__$1 = this;return (new cljs.core.async.t17486(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta17487__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t17486 = ((function (mults,ensure_mult){
return (function __GT_t17486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17487){return (new cljs.core.async.t17486(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta17487));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t17486(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6082__auto___17610 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_17562){var state_val_17563 = (state_17562[1]);if((state_val_17563 === 1))
{var state_17562__$1 = state_17562;var statearr_17564_17611 = state_17562__$1;(statearr_17564_17611[2] = null);
(statearr_17564_17611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 2))
{var state_17562__$1 = state_17562;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17562__$1,4,ch);
} else
{if((state_val_17563 === 3))
{var inst_17560 = (state_17562[2]);var state_17562__$1 = state_17562;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17562__$1,inst_17560);
} else
{if((state_val_17563 === 4))
{var inst_17491 = (state_17562[7]);var inst_17491__$1 = (state_17562[2]);var inst_17492 = (inst_17491__$1 == null);var state_17562__$1 = (function (){var statearr_17565 = state_17562;(statearr_17565[7] = inst_17491__$1);
return statearr_17565;
})();if(cljs.core.truth_(inst_17492))
{var statearr_17566_17612 = state_17562__$1;(statearr_17566_17612[1] = 5);
} else
{var statearr_17567_17613 = state_17562__$1;(statearr_17567_17613[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 5))
{var inst_17498 = cljs.core.deref.call(null,mults);var inst_17499 = cljs.core.vals.call(null,inst_17498);var inst_17500 = cljs.core.seq.call(null,inst_17499);var inst_17501 = inst_17500;var inst_17502 = null;var inst_17503 = 0;var inst_17504 = 0;var state_17562__$1 = (function (){var statearr_17568 = state_17562;(statearr_17568[8] = inst_17504);
(statearr_17568[9] = inst_17503);
(statearr_17568[10] = inst_17502);
(statearr_17568[11] = inst_17501);
return statearr_17568;
})();var statearr_17569_17614 = state_17562__$1;(statearr_17569_17614[2] = null);
(statearr_17569_17614[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 6))
{var inst_17491 = (state_17562[7]);var inst_17539 = (state_17562[12]);var inst_17541 = (state_17562[13]);var inst_17539__$1 = topic_fn.call(null,inst_17491);var inst_17540 = cljs.core.deref.call(null,mults);var inst_17541__$1 = cljs.core.get.call(null,inst_17540,inst_17539__$1);var state_17562__$1 = (function (){var statearr_17570 = state_17562;(statearr_17570[12] = inst_17539__$1);
(statearr_17570[13] = inst_17541__$1);
return statearr_17570;
})();if(cljs.core.truth_(inst_17541__$1))
{var statearr_17571_17615 = state_17562__$1;(statearr_17571_17615[1] = 19);
} else
{var statearr_17572_17616 = state_17562__$1;(statearr_17572_17616[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 7))
{var inst_17558 = (state_17562[2]);var state_17562__$1 = state_17562;var statearr_17573_17617 = state_17562__$1;(statearr_17573_17617[2] = inst_17558);
(statearr_17573_17617[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 8))
{var inst_17504 = (state_17562[8]);var inst_17503 = (state_17562[9]);var inst_17506 = (inst_17504 < inst_17503);var inst_17507 = inst_17506;var state_17562__$1 = state_17562;if(cljs.core.truth_(inst_17507))
{var statearr_17577_17618 = state_17562__$1;(statearr_17577_17618[1] = 10);
} else
{var statearr_17578_17619 = state_17562__$1;(statearr_17578_17619[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 9))
{var inst_17537 = (state_17562[2]);var state_17562__$1 = state_17562;var statearr_17579_17620 = state_17562__$1;(statearr_17579_17620[2] = inst_17537);
(statearr_17579_17620[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 10))
{var inst_17504 = (state_17562[8]);var inst_17503 = (state_17562[9]);var inst_17502 = (state_17562[10]);var inst_17501 = (state_17562[11]);var inst_17509 = cljs.core._nth.call(null,inst_17502,inst_17504);var inst_17510 = cljs.core.async.muxch_STAR_.call(null,inst_17509);var inst_17511 = cljs.core.async.close_BANG_.call(null,inst_17510);var inst_17512 = (inst_17504 + 1);var tmp17574 = inst_17503;var tmp17575 = inst_17502;var tmp17576 = inst_17501;var inst_17501__$1 = tmp17576;var inst_17502__$1 = tmp17575;var inst_17503__$1 = tmp17574;var inst_17504__$1 = inst_17512;var state_17562__$1 = (function (){var statearr_17580 = state_17562;(statearr_17580[14] = inst_17511);
(statearr_17580[8] = inst_17504__$1);
(statearr_17580[9] = inst_17503__$1);
(statearr_17580[10] = inst_17502__$1);
(statearr_17580[11] = inst_17501__$1);
return statearr_17580;
})();var statearr_17581_17621 = state_17562__$1;(statearr_17581_17621[2] = null);
(statearr_17581_17621[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 11))
{var inst_17515 = (state_17562[15]);var inst_17501 = (state_17562[11]);var inst_17515__$1 = cljs.core.seq.call(null,inst_17501);var state_17562__$1 = (function (){var statearr_17582 = state_17562;(statearr_17582[15] = inst_17515__$1);
return statearr_17582;
})();if(inst_17515__$1)
{var statearr_17583_17622 = state_17562__$1;(statearr_17583_17622[1] = 13);
} else
{var statearr_17584_17623 = state_17562__$1;(statearr_17584_17623[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 12))
{var inst_17535 = (state_17562[2]);var state_17562__$1 = state_17562;var statearr_17585_17624 = state_17562__$1;(statearr_17585_17624[2] = inst_17535);
(statearr_17585_17624[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 13))
{var inst_17515 = (state_17562[15]);var inst_17517 = cljs.core.chunked_seq_QMARK_.call(null,inst_17515);var state_17562__$1 = state_17562;if(inst_17517)
{var statearr_17586_17625 = state_17562__$1;(statearr_17586_17625[1] = 16);
} else
{var statearr_17587_17626 = state_17562__$1;(statearr_17587_17626[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 14))
{var state_17562__$1 = state_17562;var statearr_17588_17627 = state_17562__$1;(statearr_17588_17627[2] = null);
(statearr_17588_17627[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 15))
{var inst_17533 = (state_17562[2]);var state_17562__$1 = state_17562;var statearr_17589_17628 = state_17562__$1;(statearr_17589_17628[2] = inst_17533);
(statearr_17589_17628[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 16))
{var inst_17515 = (state_17562[15]);var inst_17519 = cljs.core.chunk_first.call(null,inst_17515);var inst_17520 = cljs.core.chunk_rest.call(null,inst_17515);var inst_17521 = cljs.core.count.call(null,inst_17519);var inst_17501 = inst_17520;var inst_17502 = inst_17519;var inst_17503 = inst_17521;var inst_17504 = 0;var state_17562__$1 = (function (){var statearr_17590 = state_17562;(statearr_17590[8] = inst_17504);
(statearr_17590[9] = inst_17503);
(statearr_17590[10] = inst_17502);
(statearr_17590[11] = inst_17501);
return statearr_17590;
})();var statearr_17591_17629 = state_17562__$1;(statearr_17591_17629[2] = null);
(statearr_17591_17629[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 17))
{var inst_17515 = (state_17562[15]);var inst_17524 = cljs.core.first.call(null,inst_17515);var inst_17525 = cljs.core.async.muxch_STAR_.call(null,inst_17524);var inst_17526 = cljs.core.async.close_BANG_.call(null,inst_17525);var inst_17527 = cljs.core.next.call(null,inst_17515);var inst_17501 = inst_17527;var inst_17502 = null;var inst_17503 = 0;var inst_17504 = 0;var state_17562__$1 = (function (){var statearr_17592 = state_17562;(statearr_17592[16] = inst_17526);
(statearr_17592[8] = inst_17504);
(statearr_17592[9] = inst_17503);
(statearr_17592[10] = inst_17502);
(statearr_17592[11] = inst_17501);
return statearr_17592;
})();var statearr_17593_17630 = state_17562__$1;(statearr_17593_17630[2] = null);
(statearr_17593_17630[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 18))
{var inst_17530 = (state_17562[2]);var state_17562__$1 = state_17562;var statearr_17594_17631 = state_17562__$1;(statearr_17594_17631[2] = inst_17530);
(statearr_17594_17631[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 19))
{var state_17562__$1 = state_17562;var statearr_17595_17632 = state_17562__$1;(statearr_17595_17632[2] = null);
(statearr_17595_17632[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 20))
{var state_17562__$1 = state_17562;var statearr_17596_17633 = state_17562__$1;(statearr_17596_17633[2] = null);
(statearr_17596_17633[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 21))
{var inst_17555 = (state_17562[2]);var state_17562__$1 = (function (){var statearr_17597 = state_17562;(statearr_17597[17] = inst_17555);
return statearr_17597;
})();var statearr_17598_17634 = state_17562__$1;(statearr_17598_17634[2] = null);
(statearr_17598_17634[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 22))
{var inst_17552 = (state_17562[2]);var state_17562__$1 = state_17562;var statearr_17599_17635 = state_17562__$1;(statearr_17599_17635[2] = inst_17552);
(statearr_17599_17635[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 23))
{var inst_17539 = (state_17562[12]);var inst_17543 = (state_17562[2]);var inst_17544 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_17539);var state_17562__$1 = (function (){var statearr_17600 = state_17562;(statearr_17600[18] = inst_17543);
return statearr_17600;
})();var statearr_17601_17636 = state_17562__$1;(statearr_17601_17636[2] = inst_17544);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17562__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17563 === 24))
{var inst_17491 = (state_17562[7]);var inst_17541 = (state_17562[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17562,23,Object,null,22);var inst_17548 = cljs.core.async.muxch_STAR_.call(null,inst_17541);var state_17562__$1 = state_17562;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17562__$1,25,inst_17548,inst_17491);
} else
{if((state_val_17563 === 25))
{var inst_17550 = (state_17562[2]);var state_17562__$1 = state_17562;var statearr_17602_17637 = state_17562__$1;(statearr_17602_17637[2] = inst_17550);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17562__$1);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_17606 = (new Array(19));(statearr_17606[0] = state_machine__6013__auto__);
(statearr_17606[1] = 1);
return statearr_17606;
});
var state_machine__6013__auto____1 = (function (state_17562){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_17562);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e17607){if((e17607 instanceof Object))
{var ex__6016__auto__ = e17607;var statearr_17608_17638 = state_17562;(statearr_17608_17638[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17562);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17639 = state_17562;
state_17562 = G__17639;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_17562){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_17562);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_17609 = f__6083__auto__.call(null);(statearr_17609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___17610);
return statearr_17609;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
,cljs.core.range.call(null,cnt));var c__6082__auto___17776 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_17746){var state_val_17747 = (state_17746[1]);if((state_val_17747 === 1))
{var state_17746__$1 = state_17746;var statearr_17748_17777 = state_17746__$1;(statearr_17748_17777[2] = null);
(statearr_17748_17777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 2))
{var inst_17709 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_17710 = 0;var state_17746__$1 = (function (){var statearr_17749 = state_17746;(statearr_17749[7] = inst_17710);
(statearr_17749[8] = inst_17709);
return statearr_17749;
})();var statearr_17750_17778 = state_17746__$1;(statearr_17750_17778[2] = null);
(statearr_17750_17778[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 3))
{var inst_17744 = (state_17746[2]);var state_17746__$1 = state_17746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17746__$1,inst_17744);
} else
{if((state_val_17747 === 4))
{var inst_17710 = (state_17746[7]);var inst_17712 = (inst_17710 < cnt);var state_17746__$1 = state_17746;if(cljs.core.truth_(inst_17712))
{var statearr_17751_17779 = state_17746__$1;(statearr_17751_17779[1] = 6);
} else
{var statearr_17752_17780 = state_17746__$1;(statearr_17752_17780[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 5))
{var inst_17730 = (state_17746[2]);var state_17746__$1 = (function (){var statearr_17753 = state_17746;(statearr_17753[9] = inst_17730);
return statearr_17753;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17746__$1,12,dchan);
} else
{if((state_val_17747 === 6))
{var state_17746__$1 = state_17746;var statearr_17754_17781 = state_17746__$1;(statearr_17754_17781[2] = null);
(statearr_17754_17781[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 7))
{var state_17746__$1 = state_17746;var statearr_17755_17782 = state_17746__$1;(statearr_17755_17782[2] = null);
(statearr_17755_17782[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 8))
{var inst_17728 = (state_17746[2]);var state_17746__$1 = state_17746;var statearr_17756_17783 = state_17746__$1;(statearr_17756_17783[2] = inst_17728);
(statearr_17756_17783[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 9))
{var inst_17710 = (state_17746[7]);var inst_17723 = (state_17746[2]);var inst_17724 = (inst_17710 + 1);var inst_17710__$1 = inst_17724;var state_17746__$1 = (function (){var statearr_17757 = state_17746;(statearr_17757[7] = inst_17710__$1);
(statearr_17757[10] = inst_17723);
return statearr_17757;
})();var statearr_17758_17784 = state_17746__$1;(statearr_17758_17784[2] = null);
(statearr_17758_17784[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 10))
{var inst_17714 = (state_17746[2]);var inst_17715 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_17746__$1 = (function (){var statearr_17759 = state_17746;(statearr_17759[11] = inst_17714);
return statearr_17759;
})();var statearr_17760_17785 = state_17746__$1;(statearr_17760_17785[2] = inst_17715);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17746__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 11))
{var inst_17710 = (state_17746[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_17746,10,Object,null,9);var inst_17719 = chs__$1.call(null,inst_17710);var inst_17720 = done.call(null,inst_17710);var inst_17721 = cljs.core.async.take_BANG_.call(null,inst_17719,inst_17720);var state_17746__$1 = state_17746;var statearr_17761_17786 = state_17746__$1;(statearr_17761_17786[2] = inst_17721);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17746__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 12))
{var inst_17732 = (state_17746[12]);var inst_17732__$1 = (state_17746[2]);var inst_17733 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_17732__$1);var state_17746__$1 = (function (){var statearr_17762 = state_17746;(statearr_17762[12] = inst_17732__$1);
return statearr_17762;
})();if(cljs.core.truth_(inst_17733))
{var statearr_17763_17787 = state_17746__$1;(statearr_17763_17787[1] = 13);
} else
{var statearr_17764_17788 = state_17746__$1;(statearr_17764_17788[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 13))
{var inst_17735 = cljs.core.async.close_BANG_.call(null,out);var state_17746__$1 = state_17746;var statearr_17765_17789 = state_17746__$1;(statearr_17765_17789[2] = inst_17735);
(statearr_17765_17789[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 14))
{var inst_17732 = (state_17746[12]);var inst_17737 = cljs.core.apply.call(null,f,inst_17732);var state_17746__$1 = state_17746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17746__$1,16,out,inst_17737);
} else
{if((state_val_17747 === 15))
{var inst_17742 = (state_17746[2]);var state_17746__$1 = state_17746;var statearr_17766_17790 = state_17746__$1;(statearr_17766_17790[2] = inst_17742);
(statearr_17766_17790[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17747 === 16))
{var inst_17739 = (state_17746[2]);var state_17746__$1 = (function (){var statearr_17767 = state_17746;(statearr_17767[13] = inst_17739);
return statearr_17767;
})();var statearr_17768_17791 = state_17746__$1;(statearr_17768_17791[2] = null);
(statearr_17768_17791[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_17772 = (new Array(14));(statearr_17772[0] = state_machine__6013__auto__);
(statearr_17772[1] = 1);
return statearr_17772;
});
var state_machine__6013__auto____1 = (function (state_17746){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_17746);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e17773){if((e17773 instanceof Object))
{var ex__6016__auto__ = e17773;var statearr_17774_17792 = state_17746;(statearr_17774_17792[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17746);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17793 = state_17746;
state_17746 = G__17793;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_17746){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_17746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_17775 = f__6083__auto__.call(null);(statearr_17775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___17776);
return statearr_17775;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___17901 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_17877){var state_val_17878 = (state_17877[1]);if((state_val_17878 === 1))
{var inst_17848 = cljs.core.vec.call(null,chs);var inst_17849 = inst_17848;var state_17877__$1 = (function (){var statearr_17879 = state_17877;(statearr_17879[7] = inst_17849);
return statearr_17879;
})();var statearr_17880_17902 = state_17877__$1;(statearr_17880_17902[2] = null);
(statearr_17880_17902[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17878 === 2))
{var inst_17849 = (state_17877[7]);var inst_17851 = cljs.core.count.call(null,inst_17849);var inst_17852 = (inst_17851 > 0);var state_17877__$1 = state_17877;if(cljs.core.truth_(inst_17852))
{var statearr_17881_17903 = state_17877__$1;(statearr_17881_17903[1] = 4);
} else
{var statearr_17882_17904 = state_17877__$1;(statearr_17882_17904[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17878 === 3))
{var inst_17875 = (state_17877[2]);var state_17877__$1 = state_17877;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17877__$1,inst_17875);
} else
{if((state_val_17878 === 4))
{var inst_17849 = (state_17877[7]);var state_17877__$1 = state_17877;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17877__$1,7,inst_17849);
} else
{if((state_val_17878 === 5))
{var inst_17871 = cljs.core.async.close_BANG_.call(null,out);var state_17877__$1 = state_17877;var statearr_17883_17905 = state_17877__$1;(statearr_17883_17905[2] = inst_17871);
(statearr_17883_17905[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17878 === 6))
{var inst_17873 = (state_17877[2]);var state_17877__$1 = state_17877;var statearr_17884_17906 = state_17877__$1;(statearr_17884_17906[2] = inst_17873);
(statearr_17884_17906[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17878 === 7))
{var inst_17857 = (state_17877[8]);var inst_17856 = (state_17877[9]);var inst_17856__$1 = (state_17877[2]);var inst_17857__$1 = cljs.core.nth.call(null,inst_17856__$1,0,null);var inst_17858 = cljs.core.nth.call(null,inst_17856__$1,1,null);var inst_17859 = (inst_17857__$1 == null);var state_17877__$1 = (function (){var statearr_17885 = state_17877;(statearr_17885[10] = inst_17858);
(statearr_17885[8] = inst_17857__$1);
(statearr_17885[9] = inst_17856__$1);
return statearr_17885;
})();if(cljs.core.truth_(inst_17859))
{var statearr_17886_17907 = state_17877__$1;(statearr_17886_17907[1] = 8);
} else
{var statearr_17887_17908 = state_17877__$1;(statearr_17887_17908[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17878 === 8))
{var inst_17858 = (state_17877[10]);var inst_17857 = (state_17877[8]);var inst_17856 = (state_17877[9]);var inst_17849 = (state_17877[7]);var inst_17861 = (function (){var c = inst_17858;var v = inst_17857;var vec__17854 = inst_17856;var cs = inst_17849;return ((function (c,v,vec__17854,cs,inst_17858,inst_17857,inst_17856,inst_17849,state_val_17878){
return (function (p1__17794_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17794_SHARP_);
});
;})(c,v,vec__17854,cs,inst_17858,inst_17857,inst_17856,inst_17849,state_val_17878))
})();var inst_17862 = cljs.core.filterv.call(null,inst_17861,inst_17849);var inst_17849__$1 = inst_17862;var state_17877__$1 = (function (){var statearr_17888 = state_17877;(statearr_17888[7] = inst_17849__$1);
return statearr_17888;
})();var statearr_17889_17909 = state_17877__$1;(statearr_17889_17909[2] = null);
(statearr_17889_17909[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17878 === 9))
{var inst_17857 = (state_17877[8]);var state_17877__$1 = state_17877;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17877__$1,11,out,inst_17857);
} else
{if((state_val_17878 === 10))
{var inst_17869 = (state_17877[2]);var state_17877__$1 = state_17877;var statearr_17891_17910 = state_17877__$1;(statearr_17891_17910[2] = inst_17869);
(statearr_17891_17910[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17878 === 11))
{var inst_17849 = (state_17877[7]);var inst_17866 = (state_17877[2]);var tmp17890 = inst_17849;var inst_17849__$1 = tmp17890;var state_17877__$1 = (function (){var statearr_17892 = state_17877;(statearr_17892[11] = inst_17866);
(statearr_17892[7] = inst_17849__$1);
return statearr_17892;
})();var statearr_17893_17911 = state_17877__$1;(statearr_17893_17911[2] = null);
(statearr_17893_17911[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_17897 = (new Array(12));(statearr_17897[0] = state_machine__6013__auto__);
(statearr_17897[1] = 1);
return statearr_17897;
});
var state_machine__6013__auto____1 = (function (state_17877){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_17877);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e17898){if((e17898 instanceof Object))
{var ex__6016__auto__ = e17898;var statearr_17899_17912 = state_17877;(statearr_17899_17912[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17877);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17898;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17913 = state_17877;
state_17877 = G__17913;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_17877){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_17877);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_17900 = f__6083__auto__.call(null);(statearr_17900[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___17901);
return statearr_17900;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___18006 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_17983){var state_val_17984 = (state_17983[1]);if((state_val_17984 === 1))
{var inst_17960 = 0;var state_17983__$1 = (function (){var statearr_17985 = state_17983;(statearr_17985[7] = inst_17960);
return statearr_17985;
})();var statearr_17986_18007 = state_17983__$1;(statearr_17986_18007[2] = null);
(statearr_17986_18007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17984 === 2))
{var inst_17960 = (state_17983[7]);var inst_17962 = (inst_17960 < n);var state_17983__$1 = state_17983;if(cljs.core.truth_(inst_17962))
{var statearr_17987_18008 = state_17983__$1;(statearr_17987_18008[1] = 4);
} else
{var statearr_17988_18009 = state_17983__$1;(statearr_17988_18009[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17984 === 3))
{var inst_17980 = (state_17983[2]);var inst_17981 = cljs.core.async.close_BANG_.call(null,out);var state_17983__$1 = (function (){var statearr_17989 = state_17983;(statearr_17989[8] = inst_17980);
return statearr_17989;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17983__$1,inst_17981);
} else
{if((state_val_17984 === 4))
{var state_17983__$1 = state_17983;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17983__$1,7,ch);
} else
{if((state_val_17984 === 5))
{var state_17983__$1 = state_17983;var statearr_17990_18010 = state_17983__$1;(statearr_17990_18010[2] = null);
(statearr_17990_18010[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17984 === 6))
{var inst_17978 = (state_17983[2]);var state_17983__$1 = state_17983;var statearr_17991_18011 = state_17983__$1;(statearr_17991_18011[2] = inst_17978);
(statearr_17991_18011[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17984 === 7))
{var inst_17965 = (state_17983[9]);var inst_17965__$1 = (state_17983[2]);var inst_17966 = (inst_17965__$1 == null);var inst_17967 = cljs.core.not.call(null,inst_17966);var state_17983__$1 = (function (){var statearr_17992 = state_17983;(statearr_17992[9] = inst_17965__$1);
return statearr_17992;
})();if(inst_17967)
{var statearr_17993_18012 = state_17983__$1;(statearr_17993_18012[1] = 8);
} else
{var statearr_17994_18013 = state_17983__$1;(statearr_17994_18013[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17984 === 8))
{var inst_17965 = (state_17983[9]);var state_17983__$1 = state_17983;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17983__$1,11,out,inst_17965);
} else
{if((state_val_17984 === 9))
{var state_17983__$1 = state_17983;var statearr_17995_18014 = state_17983__$1;(statearr_17995_18014[2] = null);
(statearr_17995_18014[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17984 === 10))
{var inst_17975 = (state_17983[2]);var state_17983__$1 = state_17983;var statearr_17996_18015 = state_17983__$1;(statearr_17996_18015[2] = inst_17975);
(statearr_17996_18015[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17984 === 11))
{var inst_17960 = (state_17983[7]);var inst_17970 = (state_17983[2]);var inst_17971 = (inst_17960 + 1);var inst_17960__$1 = inst_17971;var state_17983__$1 = (function (){var statearr_17997 = state_17983;(statearr_17997[7] = inst_17960__$1);
(statearr_17997[10] = inst_17970);
return statearr_17997;
})();var statearr_17998_18016 = state_17983__$1;(statearr_17998_18016[2] = null);
(statearr_17998_18016[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_18002 = (new Array(11));(statearr_18002[0] = state_machine__6013__auto__);
(statearr_18002[1] = 1);
return statearr_18002;
});
var state_machine__6013__auto____1 = (function (state_17983){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_17983);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e18003){if((e18003 instanceof Object))
{var ex__6016__auto__ = e18003;var statearr_18004_18017 = state_17983;(statearr_18004_18017[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17983);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18018 = state_17983;
state_17983 = G__18018;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_17983){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_17983);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_18005 = f__6083__auto__.call(null);(statearr_18005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___18006);
return statearr_18005;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___18115 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_18090){var state_val_18091 = (state_18090[1]);if((state_val_18091 === 1))
{var inst_18067 = null;var state_18090__$1 = (function (){var statearr_18092 = state_18090;(statearr_18092[7] = inst_18067);
return statearr_18092;
})();var statearr_18093_18116 = state_18090__$1;(statearr_18093_18116[2] = null);
(statearr_18093_18116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18091 === 2))
{var state_18090__$1 = state_18090;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18090__$1,4,ch);
} else
{if((state_val_18091 === 3))
{var inst_18087 = (state_18090[2]);var inst_18088 = cljs.core.async.close_BANG_.call(null,out);var state_18090__$1 = (function (){var statearr_18094 = state_18090;(statearr_18094[8] = inst_18087);
return statearr_18094;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18090__$1,inst_18088);
} else
{if((state_val_18091 === 4))
{var inst_18070 = (state_18090[9]);var inst_18070__$1 = (state_18090[2]);var inst_18071 = (inst_18070__$1 == null);var inst_18072 = cljs.core.not.call(null,inst_18071);var state_18090__$1 = (function (){var statearr_18095 = state_18090;(statearr_18095[9] = inst_18070__$1);
return statearr_18095;
})();if(inst_18072)
{var statearr_18096_18117 = state_18090__$1;(statearr_18096_18117[1] = 5);
} else
{var statearr_18097_18118 = state_18090__$1;(statearr_18097_18118[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18091 === 5))
{var inst_18070 = (state_18090[9]);var inst_18067 = (state_18090[7]);var inst_18074 = cljs.core._EQ_.call(null,inst_18070,inst_18067);var state_18090__$1 = state_18090;if(inst_18074)
{var statearr_18098_18119 = state_18090__$1;(statearr_18098_18119[1] = 8);
} else
{var statearr_18099_18120 = state_18090__$1;(statearr_18099_18120[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18091 === 6))
{var state_18090__$1 = state_18090;var statearr_18101_18121 = state_18090__$1;(statearr_18101_18121[2] = null);
(statearr_18101_18121[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18091 === 7))
{var inst_18085 = (state_18090[2]);var state_18090__$1 = state_18090;var statearr_18102_18122 = state_18090__$1;(statearr_18102_18122[2] = inst_18085);
(statearr_18102_18122[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18091 === 8))
{var inst_18067 = (state_18090[7]);var tmp18100 = inst_18067;var inst_18067__$1 = tmp18100;var state_18090__$1 = (function (){var statearr_18103 = state_18090;(statearr_18103[7] = inst_18067__$1);
return statearr_18103;
})();var statearr_18104_18123 = state_18090__$1;(statearr_18104_18123[2] = null);
(statearr_18104_18123[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18091 === 9))
{var inst_18070 = (state_18090[9]);var state_18090__$1 = state_18090;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18090__$1,11,out,inst_18070);
} else
{if((state_val_18091 === 10))
{var inst_18082 = (state_18090[2]);var state_18090__$1 = state_18090;var statearr_18105_18124 = state_18090__$1;(statearr_18105_18124[2] = inst_18082);
(statearr_18105_18124[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18091 === 11))
{var inst_18070 = (state_18090[9]);var inst_18079 = (state_18090[2]);var inst_18067 = inst_18070;var state_18090__$1 = (function (){var statearr_18106 = state_18090;(statearr_18106[7] = inst_18067);
(statearr_18106[10] = inst_18079);
return statearr_18106;
})();var statearr_18107_18125 = state_18090__$1;(statearr_18107_18125[2] = null);
(statearr_18107_18125[1] = 2);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_18111 = (new Array(11));(statearr_18111[0] = state_machine__6013__auto__);
(statearr_18111[1] = 1);
return statearr_18111;
});
var state_machine__6013__auto____1 = (function (state_18090){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_18090);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e18112){if((e18112 instanceof Object))
{var ex__6016__auto__ = e18112;var statearr_18113_18126 = state_18090;(statearr_18113_18126[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18090);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18127 = state_18090;
state_18090 = G__18127;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_18090){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_18090);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_18114 = f__6083__auto__.call(null);(statearr_18114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___18115);
return statearr_18114;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___18262 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_18232){var state_val_18233 = (state_18232[1]);if((state_val_18233 === 1))
{var inst_18195 = (new Array(n));var inst_18196 = inst_18195;var inst_18197 = 0;var state_18232__$1 = (function (){var statearr_18234 = state_18232;(statearr_18234[7] = inst_18196);
(statearr_18234[8] = inst_18197);
return statearr_18234;
})();var statearr_18235_18263 = state_18232__$1;(statearr_18235_18263[2] = null);
(statearr_18235_18263[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 2))
{var state_18232__$1 = state_18232;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18232__$1,4,ch);
} else
{if((state_val_18233 === 3))
{var inst_18230 = (state_18232[2]);var state_18232__$1 = state_18232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18232__$1,inst_18230);
} else
{if((state_val_18233 === 4))
{var inst_18200 = (state_18232[9]);var inst_18200__$1 = (state_18232[2]);var inst_18201 = (inst_18200__$1 == null);var inst_18202 = cljs.core.not.call(null,inst_18201);var state_18232__$1 = (function (){var statearr_18236 = state_18232;(statearr_18236[9] = inst_18200__$1);
return statearr_18236;
})();if(inst_18202)
{var statearr_18237_18264 = state_18232__$1;(statearr_18237_18264[1] = 5);
} else
{var statearr_18238_18265 = state_18232__$1;(statearr_18238_18265[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 5))
{var inst_18205 = (state_18232[10]);var inst_18196 = (state_18232[7]);var inst_18197 = (state_18232[8]);var inst_18200 = (state_18232[9]);var inst_18204 = (inst_18196[inst_18197] = inst_18200);var inst_18205__$1 = (inst_18197 + 1);var inst_18206 = (inst_18205__$1 < n);var state_18232__$1 = (function (){var statearr_18239 = state_18232;(statearr_18239[11] = inst_18204);
(statearr_18239[10] = inst_18205__$1);
return statearr_18239;
})();if(cljs.core.truth_(inst_18206))
{var statearr_18240_18266 = state_18232__$1;(statearr_18240_18266[1] = 8);
} else
{var statearr_18241_18267 = state_18232__$1;(statearr_18241_18267[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 6))
{var inst_18197 = (state_18232[8]);var inst_18218 = (inst_18197 > 0);var state_18232__$1 = state_18232;if(cljs.core.truth_(inst_18218))
{var statearr_18243_18268 = state_18232__$1;(statearr_18243_18268[1] = 12);
} else
{var statearr_18244_18269 = state_18232__$1;(statearr_18244_18269[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 7))
{var inst_18228 = (state_18232[2]);var state_18232__$1 = state_18232;var statearr_18245_18270 = state_18232__$1;(statearr_18245_18270[2] = inst_18228);
(statearr_18245_18270[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 8))
{var inst_18205 = (state_18232[10]);var inst_18196 = (state_18232[7]);var tmp18242 = inst_18196;var inst_18196__$1 = tmp18242;var inst_18197 = inst_18205;var state_18232__$1 = (function (){var statearr_18246 = state_18232;(statearr_18246[7] = inst_18196__$1);
(statearr_18246[8] = inst_18197);
return statearr_18246;
})();var statearr_18247_18271 = state_18232__$1;(statearr_18247_18271[2] = null);
(statearr_18247_18271[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 9))
{var inst_18196 = (state_18232[7]);var inst_18210 = cljs.core.vec.call(null,inst_18196);var state_18232__$1 = state_18232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18232__$1,11,out,inst_18210);
} else
{if((state_val_18233 === 10))
{var inst_18216 = (state_18232[2]);var state_18232__$1 = state_18232;var statearr_18248_18272 = state_18232__$1;(statearr_18248_18272[2] = inst_18216);
(statearr_18248_18272[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 11))
{var inst_18212 = (state_18232[2]);var inst_18213 = (new Array(n));var inst_18196 = inst_18213;var inst_18197 = 0;var state_18232__$1 = (function (){var statearr_18249 = state_18232;(statearr_18249[7] = inst_18196);
(statearr_18249[8] = inst_18197);
(statearr_18249[12] = inst_18212);
return statearr_18249;
})();var statearr_18250_18273 = state_18232__$1;(statearr_18250_18273[2] = null);
(statearr_18250_18273[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 12))
{var inst_18196 = (state_18232[7]);var inst_18220 = cljs.core.vec.call(null,inst_18196);var state_18232__$1 = state_18232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18232__$1,15,out,inst_18220);
} else
{if((state_val_18233 === 13))
{var state_18232__$1 = state_18232;var statearr_18251_18274 = state_18232__$1;(statearr_18251_18274[2] = null);
(statearr_18251_18274[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 14))
{var inst_18225 = (state_18232[2]);var inst_18226 = cljs.core.async.close_BANG_.call(null,out);var state_18232__$1 = (function (){var statearr_18252 = state_18232;(statearr_18252[13] = inst_18225);
return statearr_18252;
})();var statearr_18253_18275 = state_18232__$1;(statearr_18253_18275[2] = inst_18226);
(statearr_18253_18275[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18233 === 15))
{var inst_18222 = (state_18232[2]);var state_18232__$1 = state_18232;var statearr_18254_18276 = state_18232__$1;(statearr_18254_18276[2] = inst_18222);
(statearr_18254_18276[1] = 14);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_18258 = (new Array(14));(statearr_18258[0] = state_machine__6013__auto__);
(statearr_18258[1] = 1);
return statearr_18258;
});
var state_machine__6013__auto____1 = (function (state_18232){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_18232);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e18259){if((e18259 instanceof Object))
{var ex__6016__auto__ = e18259;var statearr_18260_18277 = state_18232;(statearr_18260_18277[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18232);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18259;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18278 = state_18232;
state_18232 = G__18278;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_18232){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_18232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_18261 = f__6083__auto__.call(null);(statearr_18261[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___18262);
return statearr_18261;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6082__auto___18421 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6083__auto__ = (function (){var switch__6012__auto__ = (function (state_18391){var state_val_18392 = (state_18391[1]);if((state_val_18392 === 1))
{var inst_18350 = (new Array(0));var inst_18351 = inst_18350;var inst_18352 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_18391__$1 = (function (){var statearr_18393 = state_18391;(statearr_18393[7] = inst_18351);
(statearr_18393[8] = inst_18352);
return statearr_18393;
})();var statearr_18394_18422 = state_18391__$1;(statearr_18394_18422[2] = null);
(statearr_18394_18422[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 2))
{var state_18391__$1 = state_18391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_18391__$1,4,ch);
} else
{if((state_val_18392 === 3))
{var inst_18389 = (state_18391[2]);var state_18391__$1 = state_18391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_18391__$1,inst_18389);
} else
{if((state_val_18392 === 4))
{var inst_18355 = (state_18391[9]);var inst_18355__$1 = (state_18391[2]);var inst_18356 = (inst_18355__$1 == null);var inst_18357 = cljs.core.not.call(null,inst_18356);var state_18391__$1 = (function (){var statearr_18395 = state_18391;(statearr_18395[9] = inst_18355__$1);
return statearr_18395;
})();if(inst_18357)
{var statearr_18396_18423 = state_18391__$1;(statearr_18396_18423[1] = 5);
} else
{var statearr_18397_18424 = state_18391__$1;(statearr_18397_18424[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 5))
{var inst_18359 = (state_18391[10]);var inst_18352 = (state_18391[8]);var inst_18355 = (state_18391[9]);var inst_18359__$1 = f.call(null,inst_18355);var inst_18360 = cljs.core._EQ_.call(null,inst_18359__$1,inst_18352);var inst_18361 = cljs.core.keyword_identical_QMARK_.call(null,inst_18352,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_18362 = (inst_18360) || (inst_18361);var state_18391__$1 = (function (){var statearr_18398 = state_18391;(statearr_18398[10] = inst_18359__$1);
return statearr_18398;
})();if(cljs.core.truth_(inst_18362))
{var statearr_18399_18425 = state_18391__$1;(statearr_18399_18425[1] = 8);
} else
{var statearr_18400_18426 = state_18391__$1;(statearr_18400_18426[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 6))
{var inst_18351 = (state_18391[7]);var inst_18376 = inst_18351.length;var inst_18377 = (inst_18376 > 0);var state_18391__$1 = state_18391;if(cljs.core.truth_(inst_18377))
{var statearr_18402_18427 = state_18391__$1;(statearr_18402_18427[1] = 12);
} else
{var statearr_18403_18428 = state_18391__$1;(statearr_18403_18428[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 7))
{var inst_18387 = (state_18391[2]);var state_18391__$1 = state_18391;var statearr_18404_18429 = state_18391__$1;(statearr_18404_18429[2] = inst_18387);
(statearr_18404_18429[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 8))
{var inst_18351 = (state_18391[7]);var inst_18359 = (state_18391[10]);var inst_18355 = (state_18391[9]);var inst_18364 = inst_18351.push(inst_18355);var tmp18401 = inst_18351;var inst_18351__$1 = tmp18401;var inst_18352 = inst_18359;var state_18391__$1 = (function (){var statearr_18405 = state_18391;(statearr_18405[7] = inst_18351__$1);
(statearr_18405[11] = inst_18364);
(statearr_18405[8] = inst_18352);
return statearr_18405;
})();var statearr_18406_18430 = state_18391__$1;(statearr_18406_18430[2] = null);
(statearr_18406_18430[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 9))
{var inst_18351 = (state_18391[7]);var inst_18367 = cljs.core.vec.call(null,inst_18351);var state_18391__$1 = state_18391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18391__$1,11,out,inst_18367);
} else
{if((state_val_18392 === 10))
{var inst_18374 = (state_18391[2]);var state_18391__$1 = state_18391;var statearr_18407_18431 = state_18391__$1;(statearr_18407_18431[2] = inst_18374);
(statearr_18407_18431[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 11))
{var inst_18359 = (state_18391[10]);var inst_18355 = (state_18391[9]);var inst_18369 = (state_18391[2]);var inst_18370 = (new Array(0));var inst_18371 = inst_18370.push(inst_18355);var inst_18351 = inst_18370;var inst_18352 = inst_18359;var state_18391__$1 = (function (){var statearr_18408 = state_18391;(statearr_18408[12] = inst_18369);
(statearr_18408[7] = inst_18351);
(statearr_18408[13] = inst_18371);
(statearr_18408[8] = inst_18352);
return statearr_18408;
})();var statearr_18409_18432 = state_18391__$1;(statearr_18409_18432[2] = null);
(statearr_18409_18432[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 12))
{var inst_18351 = (state_18391[7]);var inst_18379 = cljs.core.vec.call(null,inst_18351);var state_18391__$1 = state_18391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_18391__$1,15,out,inst_18379);
} else
{if((state_val_18392 === 13))
{var state_18391__$1 = state_18391;var statearr_18410_18433 = state_18391__$1;(statearr_18410_18433[2] = null);
(statearr_18410_18433[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 14))
{var inst_18384 = (state_18391[2]);var inst_18385 = cljs.core.async.close_BANG_.call(null,out);var state_18391__$1 = (function (){var statearr_18411 = state_18391;(statearr_18411[14] = inst_18384);
return statearr_18411;
})();var statearr_18412_18434 = state_18391__$1;(statearr_18412_18434[2] = inst_18385);
(statearr_18412_18434[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_18392 === 15))
{var inst_18381 = (state_18391[2]);var state_18391__$1 = state_18391;var statearr_18413_18435 = state_18391__$1;(statearr_18413_18435[2] = inst_18381);
(statearr_18413_18435[1] = 14);
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
});return ((function (switch__6012__auto__){
return (function() {
var state_machine__6013__auto__ = null;
var state_machine__6013__auto____0 = (function (){var statearr_18417 = (new Array(15));(statearr_18417[0] = state_machine__6013__auto__);
(statearr_18417[1] = 1);
return statearr_18417;
});
var state_machine__6013__auto____1 = (function (state_18391){while(true){
var ret_value__6014__auto__ = (function (){try{while(true){
var result__6015__auto__ = switch__6012__auto__.call(null,state_18391);if(cljs.core.keyword_identical_QMARK_.call(null,result__6015__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__6015__auto__;
}
break;
}
}catch (e18418){if((e18418 instanceof Object))
{var ex__6016__auto__ = e18418;var statearr_18419_18436 = state_18391;(statearr_18419_18436[5] = ex__6016__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_18391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e18418;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__6014__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__18437 = state_18391;
state_18391 = G__18437;
continue;
}
} else
{return ret_value__6014__auto__;
}
break;
}
});
state_machine__6013__auto__ = function(state_18391){
switch(arguments.length){
case 0:
return state_machine__6013__auto____0.call(this);
case 1:
return state_machine__6013__auto____1.call(this,state_18391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__6013__auto____0;
state_machine__6013__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__6013__auto____1;
return state_machine__6013__auto__;
})()
;})(switch__6012__auto__))
})();var state__6084__auto__ = (function (){var statearr_18420 = f__6083__auto__.call(null);(statearr_18420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6082__auto___18421);
return statearr_18420;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6084__auto__);
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