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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34916 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34916 = (function (f,fn_handler,meta34917){
this.f = f;
this.fn_handler = fn_handler;
this.meta34917 = meta34917;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34916.cljs$lang$type = true;
cljs.core.async.t34916.cljs$lang$ctorStr = "cljs.core.async/t34916";
cljs.core.async.t34916.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34916");
});
cljs.core.async.t34916.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34916.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34916.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34916.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34918){var self__ = this;
var _34918__$1 = this;return self__.meta34917;
});
cljs.core.async.t34916.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34918,meta34917__$1){var self__ = this;
var _34918__$1 = this;return (new cljs.core.async.t34916(self__.f,self__.fn_handler,meta34917__$1));
});
cljs.core.async.__GT_t34916 = (function __GT_t34916(f__$1,fn_handler__$1,meta34917){return (new cljs.core.async.t34916(f__$1,fn_handler__$1,meta34917));
});
}
return (new cljs.core.async.t34916(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34920 = buff;if(G__34920)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34920.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34920.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34920);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34920);
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
{var val_34921 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34921);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34921);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34922 = n;var x_34923 = 0;while(true){
if((x_34923 < n__4248__auto___34922))
{(a[x_34923] = 0);
{
var G__34924 = (x_34923 + 1);
x_34923 = G__34924;
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
var G__34925 = (i + 1);
i = G__34925;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34929 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34929 = (function (flag,alt_flag,meta34930){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34930 = meta34930;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34929.cljs$lang$type = true;
cljs.core.async.t34929.cljs$lang$ctorStr = "cljs.core.async/t34929";
cljs.core.async.t34929.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34929");
});
cljs.core.async.t34929.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34929.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34929.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34929.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34931){var self__ = this;
var _34931__$1 = this;return self__.meta34930;
});
cljs.core.async.t34929.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34931,meta34930__$1){var self__ = this;
var _34931__$1 = this;return (new cljs.core.async.t34929(self__.flag,self__.alt_flag,meta34930__$1));
});
cljs.core.async.__GT_t34929 = (function __GT_t34929(flag__$1,alt_flag__$1,meta34930){return (new cljs.core.async.t34929(flag__$1,alt_flag__$1,meta34930));
});
}
return (new cljs.core.async.t34929(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34935 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34935 = (function (cb,flag,alt_handler,meta34936){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34936 = meta34936;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34935.cljs$lang$type = true;
cljs.core.async.t34935.cljs$lang$ctorStr = "cljs.core.async/t34935";
cljs.core.async.t34935.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34935");
});
cljs.core.async.t34935.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34935.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34935.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34937){var self__ = this;
var _34937__$1 = this;return self__.meta34936;
});
cljs.core.async.t34935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34937,meta34936__$1){var self__ = this;
var _34937__$1 = this;return (new cljs.core.async.t34935(self__.cb,self__.flag,self__.alt_handler,meta34936__$1));
});
cljs.core.async.__GT_t34935 = (function __GT_t34935(cb__$1,flag__$1,alt_handler__$1,meta34936){return (new cljs.core.async.t34935(cb__$1,flag__$1,alt_handler__$1,meta34936));
});
}
return (new cljs.core.async.t34935(cb,flag,alt_handler,null));
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
return (function (p1__34938_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34938_SHARP_,port], null));
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
var G__34939 = (i + 1);
i = G__34939;
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
var alts_BANG___delegate = function (ports,p__34940){var map__34942 = p__34940;var map__34942__$1 = ((cljs.core.seq_QMARK_.call(null,map__34942))?cljs.core.apply.call(null,cljs.core.hash_map,map__34942):map__34942);var opts = map__34942__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34940 = null;if (arguments.length > 1) {
  p__34940 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34940);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34943){
var ports = cljs.core.first(arglist__34943);
var p__34940 = cljs.core.rest(arglist__34943);
return alts_BANG___delegate(ports,p__34940);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34951 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34951 = (function (ch,f,map_LT_,meta34952){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34952 = meta34952;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34951.cljs$lang$type = true;
cljs.core.async.t34951.cljs$lang$ctorStr = "cljs.core.async/t34951";
cljs.core.async.t34951.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34951");
});
cljs.core.async.t34951.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34951.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34951.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34951.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34954 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34954 = (function (fn1,_,meta34952,ch,f,map_LT_,meta34955){
this.fn1 = fn1;
this._ = _;
this.meta34952 = meta34952;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34955 = meta34955;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34954.cljs$lang$type = true;
cljs.core.async.t34954.cljs$lang$ctorStr = "cljs.core.async/t34954";
cljs.core.async.t34954.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34954");
});
cljs.core.async.t34954.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34954.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34954.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34954.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34944_SHARP_){return f1.call(null,(((p1__34944_SHARP_ == null))?null:self__.f.call(null,p1__34944_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34954.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34956){var self__ = this;
var _34956__$1 = this;return self__.meta34955;
});
cljs.core.async.t34954.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34956,meta34955__$1){var self__ = this;
var _34956__$1 = this;return (new cljs.core.async.t34954(self__.fn1,self__._,self__.meta34952,self__.ch,self__.f,self__.map_LT_,meta34955__$1));
});
cljs.core.async.__GT_t34954 = (function __GT_t34954(fn1__$1,___$2,meta34952__$1,ch__$2,f__$2,map_LT___$2,meta34955){return (new cljs.core.async.t34954(fn1__$1,___$2,meta34952__$1,ch__$2,f__$2,map_LT___$2,meta34955));
});
}
return (new cljs.core.async.t34954(fn1,___$1,self__.meta34952,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34951.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34951.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34951.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34953){var self__ = this;
var _34953__$1 = this;return self__.meta34952;
});
cljs.core.async.t34951.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34953,meta34952__$1){var self__ = this;
var _34953__$1 = this;return (new cljs.core.async.t34951(self__.ch,self__.f,self__.map_LT_,meta34952__$1));
});
cljs.core.async.__GT_t34951 = (function __GT_t34951(ch__$1,f__$1,map_LT___$1,meta34952){return (new cljs.core.async.t34951(ch__$1,f__$1,map_LT___$1,meta34952));
});
}
return (new cljs.core.async.t34951(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34960 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34960 = (function (ch,f,map_GT_,meta34961){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34961 = meta34961;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34960.cljs$lang$type = true;
cljs.core.async.t34960.cljs$lang$ctorStr = "cljs.core.async/t34960";
cljs.core.async.t34960.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34960");
});
cljs.core.async.t34960.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34960.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34960.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34960.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34960.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34960.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34960.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34962){var self__ = this;
var _34962__$1 = this;return self__.meta34961;
});
cljs.core.async.t34960.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34962,meta34961__$1){var self__ = this;
var _34962__$1 = this;return (new cljs.core.async.t34960(self__.ch,self__.f,self__.map_GT_,meta34961__$1));
});
cljs.core.async.__GT_t34960 = (function __GT_t34960(ch__$1,f__$1,map_GT___$1,meta34961){return (new cljs.core.async.t34960(ch__$1,f__$1,map_GT___$1,meta34961));
});
}
return (new cljs.core.async.t34960(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34966 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34966 = (function (ch,p,filter_GT_,meta34967){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34967 = meta34967;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34966.cljs$lang$type = true;
cljs.core.async.t34966.cljs$lang$ctorStr = "cljs.core.async/t34966";
cljs.core.async.t34966.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34966");
});
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34966.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34966.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34968){var self__ = this;
var _34968__$1 = this;return self__.meta34967;
});
cljs.core.async.t34966.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34968,meta34967__$1){var self__ = this;
var _34968__$1 = this;return (new cljs.core.async.t34966(self__.ch,self__.p,self__.filter_GT_,meta34967__$1));
});
cljs.core.async.__GT_t34966 = (function __GT_t34966(ch__$1,p__$1,filter_GT___$1,meta34967){return (new cljs.core.async.t34966(ch__$1,p__$1,filter_GT___$1,meta34967));
});
}
return (new cljs.core.async.t34966(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35051 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35030){var state_val_35031 = (state_35030[1]);if((state_val_35031 === 1))
{var state_35030__$1 = state_35030;var statearr_35032_35052 = state_35030__$1;(statearr_35032_35052[2] = null);
(statearr_35032_35052[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35031 === 2))
{var state_35030__$1 = state_35030;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35030__$1,4,ch);
} else
{if((state_val_35031 === 3))
{var inst_35028 = (state_35030[2]);var state_35030__$1 = state_35030;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35030__$1,inst_35028);
} else
{if((state_val_35031 === 4))
{var inst_35012 = (state_35030[7]);var inst_35012__$1 = (state_35030[2]);var inst_35013 = (inst_35012__$1 == null);var state_35030__$1 = (function (){var statearr_35033 = state_35030;(statearr_35033[7] = inst_35012__$1);
return statearr_35033;
})();if(cljs.core.truth_(inst_35013))
{var statearr_35034_35053 = state_35030__$1;(statearr_35034_35053[1] = 5);
} else
{var statearr_35035_35054 = state_35030__$1;(statearr_35035_35054[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35031 === 5))
{var inst_35015 = cljs.core.async.close_BANG_.call(null,out);var state_35030__$1 = state_35030;var statearr_35036_35055 = state_35030__$1;(statearr_35036_35055[2] = inst_35015);
(statearr_35036_35055[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35031 === 6))
{var inst_35012 = (state_35030[7]);var inst_35017 = p.call(null,inst_35012);var state_35030__$1 = state_35030;if(cljs.core.truth_(inst_35017))
{var statearr_35037_35056 = state_35030__$1;(statearr_35037_35056[1] = 8);
} else
{var statearr_35038_35057 = state_35030__$1;(statearr_35038_35057[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35031 === 7))
{var inst_35026 = (state_35030[2]);var state_35030__$1 = state_35030;var statearr_35039_35058 = state_35030__$1;(statearr_35039_35058[2] = inst_35026);
(statearr_35039_35058[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35031 === 8))
{var inst_35012 = (state_35030[7]);var state_35030__$1 = state_35030;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35030__$1,11,out,inst_35012);
} else
{if((state_val_35031 === 9))
{var state_35030__$1 = state_35030;var statearr_35040_35059 = state_35030__$1;(statearr_35040_35059[2] = null);
(statearr_35040_35059[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35031 === 10))
{var inst_35023 = (state_35030[2]);var state_35030__$1 = (function (){var statearr_35041 = state_35030;(statearr_35041[8] = inst_35023);
return statearr_35041;
})();var statearr_35042_35060 = state_35030__$1;(statearr_35042_35060[2] = null);
(statearr_35042_35060[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35031 === 11))
{var inst_35020 = (state_35030[2]);var state_35030__$1 = state_35030;var statearr_35043_35061 = state_35030__$1;(statearr_35043_35061[2] = inst_35020);
(statearr_35043_35061[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_35047 = [null,null,null,null,null,null,null,null,null];(statearr_35047[0] = state_machine__5507__auto__);
(statearr_35047[1] = 1);
return statearr_35047;
});
var state_machine__5507__auto____1 = (function (state_35030){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35030);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35048){if((e35048 instanceof Object))
{var ex__5510__auto__ = e35048;var statearr_35049_35062 = state_35030;(statearr_35049_35062[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35030);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35048;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35063 = state_35030;
state_35030 = G__35063;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35030){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35030);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35050 = f__5522__auto__.call(null);(statearr_35050[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35051);
return statearr_35050;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35215){var state_val_35216 = (state_35215[1]);if((state_val_35216 === 1))
{var state_35215__$1 = state_35215;var statearr_35217_35254 = state_35215__$1;(statearr_35217_35254[2] = null);
(statearr_35217_35254[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 2))
{var state_35215__$1 = state_35215;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35215__$1,4,in$);
} else
{if((state_val_35216 === 3))
{var inst_35213 = (state_35215[2]);var state_35215__$1 = state_35215;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35215__$1,inst_35213);
} else
{if((state_val_35216 === 4))
{var inst_35161 = (state_35215[7]);var inst_35161__$1 = (state_35215[2]);var inst_35162 = (inst_35161__$1 == null);var state_35215__$1 = (function (){var statearr_35218 = state_35215;(statearr_35218[7] = inst_35161__$1);
return statearr_35218;
})();if(cljs.core.truth_(inst_35162))
{var statearr_35219_35255 = state_35215__$1;(statearr_35219_35255[1] = 5);
} else
{var statearr_35220_35256 = state_35215__$1;(statearr_35220_35256[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 5))
{var inst_35164 = cljs.core.async.close_BANG_.call(null,out);var state_35215__$1 = state_35215;var statearr_35221_35257 = state_35215__$1;(statearr_35221_35257[2] = inst_35164);
(statearr_35221_35257[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 6))
{var inst_35161 = (state_35215[7]);var inst_35166 = f.call(null,inst_35161);var inst_35171 = cljs.core.seq.call(null,inst_35166);var inst_35172 = inst_35171;var inst_35173 = null;var inst_35174 = 0;var inst_35175 = 0;var state_35215__$1 = (function (){var statearr_35222 = state_35215;(statearr_35222[8] = inst_35175);
(statearr_35222[9] = inst_35172);
(statearr_35222[10] = inst_35174);
(statearr_35222[11] = inst_35173);
return statearr_35222;
})();var statearr_35223_35258 = state_35215__$1;(statearr_35223_35258[2] = null);
(statearr_35223_35258[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 7))
{var inst_35211 = (state_35215[2]);var state_35215__$1 = state_35215;var statearr_35224_35259 = state_35215__$1;(statearr_35224_35259[2] = inst_35211);
(statearr_35224_35259[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 8))
{var inst_35175 = (state_35215[8]);var inst_35174 = (state_35215[10]);var inst_35177 = (inst_35175 < inst_35174);var inst_35178 = inst_35177;var state_35215__$1 = state_35215;if(cljs.core.truth_(inst_35178))
{var statearr_35225_35260 = state_35215__$1;(statearr_35225_35260[1] = 10);
} else
{var statearr_35226_35261 = state_35215__$1;(statearr_35226_35261[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 9))
{var inst_35208 = (state_35215[2]);var state_35215__$1 = (function (){var statearr_35227 = state_35215;(statearr_35227[12] = inst_35208);
return statearr_35227;
})();var statearr_35228_35262 = state_35215__$1;(statearr_35228_35262[2] = null);
(statearr_35228_35262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 10))
{var inst_35175 = (state_35215[8]);var inst_35173 = (state_35215[11]);var inst_35180 = cljs.core._nth.call(null,inst_35173,inst_35175);var state_35215__$1 = state_35215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35215__$1,13,out,inst_35180);
} else
{if((state_val_35216 === 11))
{var inst_35172 = (state_35215[9]);var inst_35186 = (state_35215[13]);var inst_35186__$1 = cljs.core.seq.call(null,inst_35172);var state_35215__$1 = (function (){var statearr_35232 = state_35215;(statearr_35232[13] = inst_35186__$1);
return statearr_35232;
})();if(inst_35186__$1)
{var statearr_35233_35263 = state_35215__$1;(statearr_35233_35263[1] = 14);
} else
{var statearr_35234_35264 = state_35215__$1;(statearr_35234_35264[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 12))
{var inst_35206 = (state_35215[2]);var state_35215__$1 = state_35215;var statearr_35235_35265 = state_35215__$1;(statearr_35235_35265[2] = inst_35206);
(statearr_35235_35265[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 13))
{var inst_35175 = (state_35215[8]);var inst_35172 = (state_35215[9]);var inst_35174 = (state_35215[10]);var inst_35173 = (state_35215[11]);var inst_35182 = (state_35215[2]);var inst_35183 = (inst_35175 + 1);var tmp35229 = inst_35172;var tmp35230 = inst_35174;var tmp35231 = inst_35173;var inst_35172__$1 = tmp35229;var inst_35173__$1 = tmp35231;var inst_35174__$1 = tmp35230;var inst_35175__$1 = inst_35183;var state_35215__$1 = (function (){var statearr_35236 = state_35215;(statearr_35236[8] = inst_35175__$1);
(statearr_35236[9] = inst_35172__$1);
(statearr_35236[10] = inst_35174__$1);
(statearr_35236[11] = inst_35173__$1);
(statearr_35236[14] = inst_35182);
return statearr_35236;
})();var statearr_35237_35266 = state_35215__$1;(statearr_35237_35266[2] = null);
(statearr_35237_35266[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 14))
{var inst_35186 = (state_35215[13]);var inst_35188 = cljs.core.chunked_seq_QMARK_.call(null,inst_35186);var state_35215__$1 = state_35215;if(inst_35188)
{var statearr_35238_35267 = state_35215__$1;(statearr_35238_35267[1] = 17);
} else
{var statearr_35239_35268 = state_35215__$1;(statearr_35239_35268[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 15))
{var state_35215__$1 = state_35215;var statearr_35240_35269 = state_35215__$1;(statearr_35240_35269[2] = null);
(statearr_35240_35269[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 16))
{var inst_35204 = (state_35215[2]);var state_35215__$1 = state_35215;var statearr_35241_35270 = state_35215__$1;(statearr_35241_35270[2] = inst_35204);
(statearr_35241_35270[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 17))
{var inst_35186 = (state_35215[13]);var inst_35190 = cljs.core.chunk_first.call(null,inst_35186);var inst_35191 = cljs.core.chunk_rest.call(null,inst_35186);var inst_35192 = cljs.core.count.call(null,inst_35190);var inst_35172 = inst_35191;var inst_35173 = inst_35190;var inst_35174 = inst_35192;var inst_35175 = 0;var state_35215__$1 = (function (){var statearr_35242 = state_35215;(statearr_35242[8] = inst_35175);
(statearr_35242[9] = inst_35172);
(statearr_35242[10] = inst_35174);
(statearr_35242[11] = inst_35173);
return statearr_35242;
})();var statearr_35243_35271 = state_35215__$1;(statearr_35243_35271[2] = null);
(statearr_35243_35271[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 18))
{var inst_35186 = (state_35215[13]);var inst_35195 = cljs.core.first.call(null,inst_35186);var state_35215__$1 = state_35215;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35215__$1,20,out,inst_35195);
} else
{if((state_val_35216 === 19))
{var inst_35201 = (state_35215[2]);var state_35215__$1 = state_35215;var statearr_35244_35272 = state_35215__$1;(statearr_35244_35272[2] = inst_35201);
(statearr_35244_35272[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35216 === 20))
{var inst_35186 = (state_35215[13]);var inst_35197 = (state_35215[2]);var inst_35198 = cljs.core.next.call(null,inst_35186);var inst_35172 = inst_35198;var inst_35173 = null;var inst_35174 = 0;var inst_35175 = 0;var state_35215__$1 = (function (){var statearr_35245 = state_35215;(statearr_35245[8] = inst_35175);
(statearr_35245[9] = inst_35172);
(statearr_35245[10] = inst_35174);
(statearr_35245[11] = inst_35173);
(statearr_35245[15] = inst_35197);
return statearr_35245;
})();var statearr_35246_35273 = state_35215__$1;(statearr_35246_35273[2] = null);
(statearr_35246_35273[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_35250 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35250[0] = state_machine__5507__auto__);
(statearr_35250[1] = 1);
return statearr_35250;
});
var state_machine__5507__auto____1 = (function (state_35215){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35215);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35251){if((e35251 instanceof Object))
{var ex__5510__auto__ = e35251;var statearr_35252_35274 = state_35215;(statearr_35252_35274[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35215);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35251;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35275 = state_35215;
state_35215 = G__35275;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35215){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35253 = f__5522__auto__.call(null);(statearr_35253[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35253;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___35356 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35335){var state_val_35336 = (state_35335[1]);if((state_val_35336 === 1))
{var state_35335__$1 = state_35335;var statearr_35337_35357 = state_35335__$1;(statearr_35337_35357[2] = null);
(statearr_35337_35357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35336 === 2))
{var state_35335__$1 = state_35335;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35335__$1,4,from);
} else
{if((state_val_35336 === 3))
{var inst_35333 = (state_35335[2]);var state_35335__$1 = state_35335;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35335__$1,inst_35333);
} else
{if((state_val_35336 === 4))
{var inst_35318 = (state_35335[7]);var inst_35318__$1 = (state_35335[2]);var inst_35319 = (inst_35318__$1 == null);var state_35335__$1 = (function (){var statearr_35338 = state_35335;(statearr_35338[7] = inst_35318__$1);
return statearr_35338;
})();if(cljs.core.truth_(inst_35319))
{var statearr_35339_35358 = state_35335__$1;(statearr_35339_35358[1] = 5);
} else
{var statearr_35340_35359 = state_35335__$1;(statearr_35340_35359[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35336 === 5))
{var state_35335__$1 = state_35335;if(cljs.core.truth_(close_QMARK_))
{var statearr_35341_35360 = state_35335__$1;(statearr_35341_35360[1] = 8);
} else
{var statearr_35342_35361 = state_35335__$1;(statearr_35342_35361[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35336 === 6))
{var inst_35318 = (state_35335[7]);var state_35335__$1 = state_35335;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35335__$1,11,to,inst_35318);
} else
{if((state_val_35336 === 7))
{var inst_35331 = (state_35335[2]);var state_35335__$1 = state_35335;var statearr_35343_35362 = state_35335__$1;(statearr_35343_35362[2] = inst_35331);
(statearr_35343_35362[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35336 === 8))
{var inst_35322 = cljs.core.async.close_BANG_.call(null,to);var state_35335__$1 = state_35335;var statearr_35344_35363 = state_35335__$1;(statearr_35344_35363[2] = inst_35322);
(statearr_35344_35363[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35336 === 9))
{var state_35335__$1 = state_35335;var statearr_35345_35364 = state_35335__$1;(statearr_35345_35364[2] = null);
(statearr_35345_35364[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35336 === 10))
{var inst_35325 = (state_35335[2]);var state_35335__$1 = state_35335;var statearr_35346_35365 = state_35335__$1;(statearr_35346_35365[2] = inst_35325);
(statearr_35346_35365[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35336 === 11))
{var inst_35328 = (state_35335[2]);var state_35335__$1 = (function (){var statearr_35347 = state_35335;(statearr_35347[8] = inst_35328);
return statearr_35347;
})();var statearr_35348_35366 = state_35335__$1;(statearr_35348_35366[2] = null);
(statearr_35348_35366[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35352 = [null,null,null,null,null,null,null,null,null];(statearr_35352[0] = state_machine__5507__auto__);
(statearr_35352[1] = 1);
return statearr_35352;
});
var state_machine__5507__auto____1 = (function (state_35335){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35335);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35353){if((e35353 instanceof Object))
{var ex__5510__auto__ = e35353;var statearr_35354_35367 = state_35335;(statearr_35354_35367[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35335);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35368 = state_35335;
state_35335 = G__35368;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35335){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35335);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35355 = f__5522__auto__.call(null);(statearr_35355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35356);
return statearr_35355;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___35455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35433){var state_val_35434 = (state_35433[1]);if((state_val_35434 === 1))
{var state_35433__$1 = state_35433;var statearr_35435_35456 = state_35433__$1;(statearr_35435_35456[2] = null);
(statearr_35435_35456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35434 === 2))
{var state_35433__$1 = state_35433;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35433__$1,4,ch);
} else
{if((state_val_35434 === 3))
{var inst_35431 = (state_35433[2]);var state_35433__$1 = state_35433;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35433__$1,inst_35431);
} else
{if((state_val_35434 === 4))
{var inst_35414 = (state_35433[7]);var inst_35414__$1 = (state_35433[2]);var inst_35415 = (inst_35414__$1 == null);var state_35433__$1 = (function (){var statearr_35436 = state_35433;(statearr_35436[7] = inst_35414__$1);
return statearr_35436;
})();if(cljs.core.truth_(inst_35415))
{var statearr_35437_35457 = state_35433__$1;(statearr_35437_35457[1] = 5);
} else
{var statearr_35438_35458 = state_35433__$1;(statearr_35438_35458[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35434 === 5))
{var inst_35417 = cljs.core.async.close_BANG_.call(null,tc);var inst_35418 = cljs.core.async.close_BANG_.call(null,fc);var state_35433__$1 = (function (){var statearr_35439 = state_35433;(statearr_35439[8] = inst_35417);
return statearr_35439;
})();var statearr_35440_35459 = state_35433__$1;(statearr_35440_35459[2] = inst_35418);
(statearr_35440_35459[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35434 === 6))
{var inst_35414 = (state_35433[7]);var inst_35420 = p.call(null,inst_35414);var state_35433__$1 = state_35433;if(cljs.core.truth_(inst_35420))
{var statearr_35441_35460 = state_35433__$1;(statearr_35441_35460[1] = 9);
} else
{var statearr_35442_35461 = state_35433__$1;(statearr_35442_35461[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35434 === 7))
{var inst_35429 = (state_35433[2]);var state_35433__$1 = state_35433;var statearr_35443_35462 = state_35433__$1;(statearr_35443_35462[2] = inst_35429);
(statearr_35443_35462[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35434 === 8))
{var inst_35426 = (state_35433[2]);var state_35433__$1 = (function (){var statearr_35444 = state_35433;(statearr_35444[9] = inst_35426);
return statearr_35444;
})();var statearr_35445_35463 = state_35433__$1;(statearr_35445_35463[2] = null);
(statearr_35445_35463[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35434 === 9))
{var state_35433__$1 = state_35433;var statearr_35446_35464 = state_35433__$1;(statearr_35446_35464[2] = tc);
(statearr_35446_35464[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35434 === 10))
{var state_35433__$1 = state_35433;var statearr_35447_35465 = state_35433__$1;(statearr_35447_35465[2] = fc);
(statearr_35447_35465[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35434 === 11))
{var inst_35414 = (state_35433[7]);var inst_35424 = (state_35433[2]);var state_35433__$1 = state_35433;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35433__$1,8,inst_35424,inst_35414);
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
var state_machine__5507__auto____0 = (function (){var statearr_35451 = [null,null,null,null,null,null,null,null,null,null];(statearr_35451[0] = state_machine__5507__auto__);
(statearr_35451[1] = 1);
return statearr_35451;
});
var state_machine__5507__auto____1 = (function (state_35433){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35433);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35452){if((e35452 instanceof Object))
{var ex__5510__auto__ = e35452;var statearr_35453_35466 = state_35433;(statearr_35453_35466[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35433);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35467 = state_35433;
state_35433 = G__35467;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35433){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35433);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35454 = f__5522__auto__.call(null);(statearr_35454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35455);
return statearr_35454;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35514){var state_val_35515 = (state_35514[1]);if((state_val_35515 === 7))
{var inst_35510 = (state_35514[2]);var state_35514__$1 = state_35514;var statearr_35516_35532 = state_35514__$1;(statearr_35516_35532[2] = inst_35510);
(statearr_35516_35532[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35515 === 6))
{var inst_35500 = (state_35514[7]);var inst_35503 = (state_35514[8]);var inst_35507 = f.call(null,inst_35500,inst_35503);var inst_35500__$1 = inst_35507;var state_35514__$1 = (function (){var statearr_35517 = state_35514;(statearr_35517[7] = inst_35500__$1);
return statearr_35517;
})();var statearr_35518_35533 = state_35514__$1;(statearr_35518_35533[2] = null);
(statearr_35518_35533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35515 === 5))
{var inst_35500 = (state_35514[7]);var state_35514__$1 = state_35514;var statearr_35519_35534 = state_35514__$1;(statearr_35519_35534[2] = inst_35500);
(statearr_35519_35534[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35515 === 4))
{var inst_35503 = (state_35514[8]);var inst_35503__$1 = (state_35514[2]);var inst_35504 = (inst_35503__$1 == null);var state_35514__$1 = (function (){var statearr_35520 = state_35514;(statearr_35520[8] = inst_35503__$1);
return statearr_35520;
})();if(cljs.core.truth_(inst_35504))
{var statearr_35521_35535 = state_35514__$1;(statearr_35521_35535[1] = 5);
} else
{var statearr_35522_35536 = state_35514__$1;(statearr_35522_35536[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35515 === 3))
{var inst_35512 = (state_35514[2]);var state_35514__$1 = state_35514;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35514__$1,inst_35512);
} else
{if((state_val_35515 === 2))
{var state_35514__$1 = state_35514;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35514__$1,4,ch);
} else
{if((state_val_35515 === 1))
{var inst_35500 = init;var state_35514__$1 = (function (){var statearr_35523 = state_35514;(statearr_35523[7] = inst_35500);
return statearr_35523;
})();var statearr_35524_35537 = state_35514__$1;(statearr_35524_35537[2] = null);
(statearr_35524_35537[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35528 = [null,null,null,null,null,null,null,null,null];(statearr_35528[0] = state_machine__5507__auto__);
(statearr_35528[1] = 1);
return statearr_35528;
});
var state_machine__5507__auto____1 = (function (state_35514){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35514);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35529){if((e35529 instanceof Object))
{var ex__5510__auto__ = e35529;var statearr_35530_35538 = state_35514;(statearr_35530_35538[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35514);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35539 = state_35514;
state_35514 = G__35539;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35514){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35514);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35531 = f__5522__auto__.call(null);(statearr_35531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35531;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35601){var state_val_35602 = (state_35601[1]);if((state_val_35602 === 1))
{var inst_35581 = cljs.core.seq.call(null,coll);var inst_35582 = inst_35581;var state_35601__$1 = (function (){var statearr_35603 = state_35601;(statearr_35603[7] = inst_35582);
return statearr_35603;
})();var statearr_35604_35622 = state_35601__$1;(statearr_35604_35622[2] = null);
(statearr_35604_35622[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35602 === 2))
{var inst_35582 = (state_35601[7]);var state_35601__$1 = state_35601;if(cljs.core.truth_(inst_35582))
{var statearr_35605_35623 = state_35601__$1;(statearr_35605_35623[1] = 4);
} else
{var statearr_35606_35624 = state_35601__$1;(statearr_35606_35624[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35602 === 3))
{var inst_35599 = (state_35601[2]);var state_35601__$1 = state_35601;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35601__$1,inst_35599);
} else
{if((state_val_35602 === 4))
{var inst_35582 = (state_35601[7]);var inst_35585 = cljs.core.first.call(null,inst_35582);var state_35601__$1 = state_35601;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35601__$1,7,ch,inst_35585);
} else
{if((state_val_35602 === 5))
{var state_35601__$1 = state_35601;if(cljs.core.truth_(close_QMARK_))
{var statearr_35607_35625 = state_35601__$1;(statearr_35607_35625[1] = 8);
} else
{var statearr_35608_35626 = state_35601__$1;(statearr_35608_35626[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35602 === 6))
{var inst_35597 = (state_35601[2]);var state_35601__$1 = state_35601;var statearr_35609_35627 = state_35601__$1;(statearr_35609_35627[2] = inst_35597);
(statearr_35609_35627[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35602 === 7))
{var inst_35582 = (state_35601[7]);var inst_35587 = (state_35601[2]);var inst_35588 = cljs.core.next.call(null,inst_35582);var inst_35582__$1 = inst_35588;var state_35601__$1 = (function (){var statearr_35610 = state_35601;(statearr_35610[8] = inst_35587);
(statearr_35610[7] = inst_35582__$1);
return statearr_35610;
})();var statearr_35611_35628 = state_35601__$1;(statearr_35611_35628[2] = null);
(statearr_35611_35628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35602 === 8))
{var inst_35592 = cljs.core.async.close_BANG_.call(null,ch);var state_35601__$1 = state_35601;var statearr_35612_35629 = state_35601__$1;(statearr_35612_35629[2] = inst_35592);
(statearr_35612_35629[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35602 === 9))
{var state_35601__$1 = state_35601;var statearr_35613_35630 = state_35601__$1;(statearr_35613_35630[2] = null);
(statearr_35613_35630[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35602 === 10))
{var inst_35595 = (state_35601[2]);var state_35601__$1 = state_35601;var statearr_35614_35631 = state_35601__$1;(statearr_35614_35631[2] = inst_35595);
(statearr_35614_35631[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35618 = [null,null,null,null,null,null,null,null,null];(statearr_35618[0] = state_machine__5507__auto__);
(statearr_35618[1] = 1);
return statearr_35618;
});
var state_machine__5507__auto____1 = (function (state_35601){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35601);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35619){if((e35619 instanceof Object))
{var ex__5510__auto__ = e35619;var statearr_35620_35632 = state_35601;(statearr_35620_35632[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35601);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35619;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35633 = state_35601;
state_35601 = G__35633;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35601){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35601);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35621 = f__5522__auto__.call(null);(statearr_35621[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35621;
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
cljs.core.async.Mux = (function (){var obj35635 = {};return obj35635;
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
cljs.core.async.Mult = (function (){var obj35637 = {};return obj35637;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35861 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35861 = (function (cs,ch,mult,meta35862){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35862 = meta35862;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35861.cljs$lang$type = true;
cljs.core.async.t35861.cljs$lang$ctorStr = "cljs.core.async/t35861";
cljs.core.async.t35861.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35861");
});})(cs))
;
cljs.core.async.t35861.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35861.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35861.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35861.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35861.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35863){var self__ = this;
var _35863__$1 = this;return self__.meta35862;
});})(cs))
;
cljs.core.async.t35861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35863,meta35862__$1){var self__ = this;
var _35863__$1 = this;return (new cljs.core.async.t35861(self__.cs,self__.ch,self__.mult,meta35862__$1));
});})(cs))
;
cljs.core.async.__GT_t35861 = ((function (cs){
return (function __GT_t35861(cs__$1,ch__$1,mult__$1,meta35862){return (new cljs.core.async.t35861(cs__$1,ch__$1,mult__$1,meta35862));
});})(cs))
;
}
return (new cljs.core.async.t35861(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___36084 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35998){var state_val_35999 = (state_35998[1]);if((state_val_35999 === 32))
{var inst_35942 = (state_35998[7]);var inst_35866 = (state_35998[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35998,31,Object,null,30);var inst_35949 = cljs.core.async.put_BANG_.call(null,inst_35942,inst_35866,done);var state_35998__$1 = state_35998;var statearr_36000_36085 = state_35998__$1;(statearr_36000_36085[2] = inst_35949);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35998__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 1))
{var state_35998__$1 = state_35998;var statearr_36001_36086 = state_35998__$1;(statearr_36001_36086[2] = null);
(statearr_36001_36086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 33))
{var inst_35955 = (state_35998[9]);var inst_35957 = cljs.core.chunked_seq_QMARK_.call(null,inst_35955);var state_35998__$1 = state_35998;if(inst_35957)
{var statearr_36002_36087 = state_35998__$1;(statearr_36002_36087[1] = 36);
} else
{var statearr_36003_36088 = state_35998__$1;(statearr_36003_36088[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 2))
{var state_35998__$1 = state_35998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35998__$1,4,ch);
} else
{if((state_val_35999 === 34))
{var state_35998__$1 = state_35998;var statearr_36004_36089 = state_35998__$1;(statearr_36004_36089[2] = null);
(statearr_36004_36089[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 3))
{var inst_35996 = (state_35998[2]);var state_35998__$1 = state_35998;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35998__$1,inst_35996);
} else
{if((state_val_35999 === 35))
{var inst_35980 = (state_35998[2]);var state_35998__$1 = state_35998;var statearr_36005_36090 = state_35998__$1;(statearr_36005_36090[2] = inst_35980);
(statearr_36005_36090[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 4))
{var inst_35866 = (state_35998[8]);var inst_35866__$1 = (state_35998[2]);var inst_35867 = (inst_35866__$1 == null);var state_35998__$1 = (function (){var statearr_36006 = state_35998;(statearr_36006[8] = inst_35866__$1);
return statearr_36006;
})();if(cljs.core.truth_(inst_35867))
{var statearr_36007_36091 = state_35998__$1;(statearr_36007_36091[1] = 5);
} else
{var statearr_36008_36092 = state_35998__$1;(statearr_36008_36092[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 36))
{var inst_35955 = (state_35998[9]);var inst_35959 = cljs.core.chunk_first.call(null,inst_35955);var inst_35960 = cljs.core.chunk_rest.call(null,inst_35955);var inst_35961 = cljs.core.count.call(null,inst_35959);var inst_35934 = inst_35960;var inst_35935 = inst_35959;var inst_35936 = inst_35961;var inst_35937 = 0;var state_35998__$1 = (function (){var statearr_36009 = state_35998;(statearr_36009[10] = inst_35934);
(statearr_36009[11] = inst_35936);
(statearr_36009[12] = inst_35935);
(statearr_36009[13] = inst_35937);
return statearr_36009;
})();var statearr_36010_36093 = state_35998__$1;(statearr_36010_36093[2] = null);
(statearr_36010_36093[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 5))
{var inst_35873 = cljs.core.deref.call(null,cs);var inst_35874 = cljs.core.seq.call(null,inst_35873);var inst_35875 = inst_35874;var inst_35876 = null;var inst_35877 = 0;var inst_35878 = 0;var state_35998__$1 = (function (){var statearr_36011 = state_35998;(statearr_36011[14] = inst_35876);
(statearr_36011[15] = inst_35877);
(statearr_36011[16] = inst_35878);
(statearr_36011[17] = inst_35875);
return statearr_36011;
})();var statearr_36012_36094 = state_35998__$1;(statearr_36012_36094[2] = null);
(statearr_36012_36094[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 37))
{var inst_35955 = (state_35998[9]);var inst_35964 = cljs.core.first.call(null,inst_35955);var state_35998__$1 = (function (){var statearr_36013 = state_35998;(statearr_36013[18] = inst_35964);
return statearr_36013;
})();var statearr_36014_36095 = state_35998__$1;(statearr_36014_36095[2] = null);
(statearr_36014_36095[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 6))
{var inst_35926 = (state_35998[19]);var inst_35925 = cljs.core.deref.call(null,cs);var inst_35926__$1 = cljs.core.keys.call(null,inst_35925);var inst_35927 = cljs.core.count.call(null,inst_35926__$1);var inst_35928 = cljs.core.reset_BANG_.call(null,dctr,inst_35927);var inst_35933 = cljs.core.seq.call(null,inst_35926__$1);var inst_35934 = inst_35933;var inst_35935 = null;var inst_35936 = 0;var inst_35937 = 0;var state_35998__$1 = (function (){var statearr_36015 = state_35998;(statearr_36015[10] = inst_35934);
(statearr_36015[19] = inst_35926__$1);
(statearr_36015[20] = inst_35928);
(statearr_36015[11] = inst_35936);
(statearr_36015[12] = inst_35935);
(statearr_36015[13] = inst_35937);
return statearr_36015;
})();var statearr_36016_36096 = state_35998__$1;(statearr_36016_36096[2] = null);
(statearr_36016_36096[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 38))
{var inst_35977 = (state_35998[2]);var state_35998__$1 = state_35998;var statearr_36017_36097 = state_35998__$1;(statearr_36017_36097[2] = inst_35977);
(statearr_36017_36097[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 7))
{var inst_35994 = (state_35998[2]);var state_35998__$1 = state_35998;var statearr_36018_36098 = state_35998__$1;(statearr_36018_36098[2] = inst_35994);
(statearr_36018_36098[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 39))
{var inst_35955 = (state_35998[9]);var inst_35973 = (state_35998[2]);var inst_35974 = cljs.core.next.call(null,inst_35955);var inst_35934 = inst_35974;var inst_35935 = null;var inst_35936 = 0;var inst_35937 = 0;var state_35998__$1 = (function (){var statearr_36019 = state_35998;(statearr_36019[10] = inst_35934);
(statearr_36019[21] = inst_35973);
(statearr_36019[11] = inst_35936);
(statearr_36019[12] = inst_35935);
(statearr_36019[13] = inst_35937);
return statearr_36019;
})();var statearr_36020_36099 = state_35998__$1;(statearr_36020_36099[2] = null);
(statearr_36020_36099[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 8))
{var inst_35877 = (state_35998[15]);var inst_35878 = (state_35998[16]);var inst_35880 = (inst_35878 < inst_35877);var inst_35881 = inst_35880;var state_35998__$1 = state_35998;if(cljs.core.truth_(inst_35881))
{var statearr_36021_36100 = state_35998__$1;(statearr_36021_36100[1] = 10);
} else
{var statearr_36022_36101 = state_35998__$1;(statearr_36022_36101[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 40))
{var inst_35964 = (state_35998[18]);var inst_35965 = (state_35998[2]);var inst_35966 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35967 = cljs.core.async.untap_STAR_.call(null,m,inst_35964);var state_35998__$1 = (function (){var statearr_36023 = state_35998;(statearr_36023[22] = inst_35965);
(statearr_36023[23] = inst_35966);
return statearr_36023;
})();var statearr_36024_36102 = state_35998__$1;(statearr_36024_36102[2] = inst_35967);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35998__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 9))
{var inst_35923 = (state_35998[2]);var state_35998__$1 = state_35998;var statearr_36025_36103 = state_35998__$1;(statearr_36025_36103[2] = inst_35923);
(statearr_36025_36103[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 41))
{var inst_35964 = (state_35998[18]);var inst_35866 = (state_35998[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35998,40,Object,null,39);var inst_35971 = cljs.core.async.put_BANG_.call(null,inst_35964,inst_35866,done);var state_35998__$1 = state_35998;var statearr_36026_36104 = state_35998__$1;(statearr_36026_36104[2] = inst_35971);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35998__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 10))
{var inst_35876 = (state_35998[14]);var inst_35878 = (state_35998[16]);var inst_35884 = cljs.core._nth.call(null,inst_35876,inst_35878);var inst_35885 = cljs.core.nth.call(null,inst_35884,0,null);var inst_35886 = cljs.core.nth.call(null,inst_35884,1,null);var state_35998__$1 = (function (){var statearr_36027 = state_35998;(statearr_36027[24] = inst_35885);
return statearr_36027;
})();if(cljs.core.truth_(inst_35886))
{var statearr_36028_36105 = state_35998__$1;(statearr_36028_36105[1] = 13);
} else
{var statearr_36029_36106 = state_35998__$1;(statearr_36029_36106[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 42))
{var state_35998__$1 = state_35998;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35998__$1,45,dchan);
} else
{if((state_val_35999 === 11))
{var inst_35895 = (state_35998[25]);var inst_35875 = (state_35998[17]);var inst_35895__$1 = cljs.core.seq.call(null,inst_35875);var state_35998__$1 = (function (){var statearr_36030 = state_35998;(statearr_36030[25] = inst_35895__$1);
return statearr_36030;
})();if(inst_35895__$1)
{var statearr_36031_36107 = state_35998__$1;(statearr_36031_36107[1] = 16);
} else
{var statearr_36032_36108 = state_35998__$1;(statearr_36032_36108[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 43))
{var state_35998__$1 = state_35998;var statearr_36033_36109 = state_35998__$1;(statearr_36033_36109[2] = null);
(statearr_36033_36109[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 12))
{var inst_35921 = (state_35998[2]);var state_35998__$1 = state_35998;var statearr_36034_36110 = state_35998__$1;(statearr_36034_36110[2] = inst_35921);
(statearr_36034_36110[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 44))
{var inst_35991 = (state_35998[2]);var state_35998__$1 = (function (){var statearr_36035 = state_35998;(statearr_36035[26] = inst_35991);
return statearr_36035;
})();var statearr_36036_36111 = state_35998__$1;(statearr_36036_36111[2] = null);
(statearr_36036_36111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 13))
{var inst_35885 = (state_35998[24]);var inst_35888 = cljs.core.async.close_BANG_.call(null,inst_35885);var state_35998__$1 = state_35998;var statearr_36037_36112 = state_35998__$1;(statearr_36037_36112[2] = inst_35888);
(statearr_36037_36112[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 45))
{var inst_35988 = (state_35998[2]);var state_35998__$1 = state_35998;var statearr_36041_36113 = state_35998__$1;(statearr_36041_36113[2] = inst_35988);
(statearr_36041_36113[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 14))
{var state_35998__$1 = state_35998;var statearr_36042_36114 = state_35998__$1;(statearr_36042_36114[2] = null);
(statearr_36042_36114[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 15))
{var inst_35876 = (state_35998[14]);var inst_35877 = (state_35998[15]);var inst_35878 = (state_35998[16]);var inst_35875 = (state_35998[17]);var inst_35891 = (state_35998[2]);var inst_35892 = (inst_35878 + 1);var tmp36038 = inst_35876;var tmp36039 = inst_35877;var tmp36040 = inst_35875;var inst_35875__$1 = tmp36040;var inst_35876__$1 = tmp36038;var inst_35877__$1 = tmp36039;var inst_35878__$1 = inst_35892;var state_35998__$1 = (function (){var statearr_36043 = state_35998;(statearr_36043[27] = inst_35891);
(statearr_36043[14] = inst_35876__$1);
(statearr_36043[15] = inst_35877__$1);
(statearr_36043[16] = inst_35878__$1);
(statearr_36043[17] = inst_35875__$1);
return statearr_36043;
})();var statearr_36044_36115 = state_35998__$1;(statearr_36044_36115[2] = null);
(statearr_36044_36115[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 16))
{var inst_35895 = (state_35998[25]);var inst_35897 = cljs.core.chunked_seq_QMARK_.call(null,inst_35895);var state_35998__$1 = state_35998;if(inst_35897)
{var statearr_36045_36116 = state_35998__$1;(statearr_36045_36116[1] = 19);
} else
{var statearr_36046_36117 = state_35998__$1;(statearr_36046_36117[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 17))
{var state_35998__$1 = state_35998;var statearr_36047_36118 = state_35998__$1;(statearr_36047_36118[2] = null);
(statearr_36047_36118[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 18))
{var inst_35919 = (state_35998[2]);var state_35998__$1 = state_35998;var statearr_36048_36119 = state_35998__$1;(statearr_36048_36119[2] = inst_35919);
(statearr_36048_36119[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 19))
{var inst_35895 = (state_35998[25]);var inst_35899 = cljs.core.chunk_first.call(null,inst_35895);var inst_35900 = cljs.core.chunk_rest.call(null,inst_35895);var inst_35901 = cljs.core.count.call(null,inst_35899);var inst_35875 = inst_35900;var inst_35876 = inst_35899;var inst_35877 = inst_35901;var inst_35878 = 0;var state_35998__$1 = (function (){var statearr_36049 = state_35998;(statearr_36049[14] = inst_35876);
(statearr_36049[15] = inst_35877);
(statearr_36049[16] = inst_35878);
(statearr_36049[17] = inst_35875);
return statearr_36049;
})();var statearr_36050_36120 = state_35998__$1;(statearr_36050_36120[2] = null);
(statearr_36050_36120[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 20))
{var inst_35895 = (state_35998[25]);var inst_35905 = cljs.core.first.call(null,inst_35895);var inst_35906 = cljs.core.nth.call(null,inst_35905,0,null);var inst_35907 = cljs.core.nth.call(null,inst_35905,1,null);var state_35998__$1 = (function (){var statearr_36051 = state_35998;(statearr_36051[28] = inst_35906);
return statearr_36051;
})();if(cljs.core.truth_(inst_35907))
{var statearr_36052_36121 = state_35998__$1;(statearr_36052_36121[1] = 22);
} else
{var statearr_36053_36122 = state_35998__$1;(statearr_36053_36122[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 21))
{var inst_35916 = (state_35998[2]);var state_35998__$1 = state_35998;var statearr_36054_36123 = state_35998__$1;(statearr_36054_36123[2] = inst_35916);
(statearr_36054_36123[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 22))
{var inst_35906 = (state_35998[28]);var inst_35909 = cljs.core.async.close_BANG_.call(null,inst_35906);var state_35998__$1 = state_35998;var statearr_36055_36124 = state_35998__$1;(statearr_36055_36124[2] = inst_35909);
(statearr_36055_36124[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 23))
{var state_35998__$1 = state_35998;var statearr_36056_36125 = state_35998__$1;(statearr_36056_36125[2] = null);
(statearr_36056_36125[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 24))
{var inst_35895 = (state_35998[25]);var inst_35912 = (state_35998[2]);var inst_35913 = cljs.core.next.call(null,inst_35895);var inst_35875 = inst_35913;var inst_35876 = null;var inst_35877 = 0;var inst_35878 = 0;var state_35998__$1 = (function (){var statearr_36057 = state_35998;(statearr_36057[14] = inst_35876);
(statearr_36057[15] = inst_35877);
(statearr_36057[16] = inst_35878);
(statearr_36057[29] = inst_35912);
(statearr_36057[17] = inst_35875);
return statearr_36057;
})();var statearr_36058_36126 = state_35998__$1;(statearr_36058_36126[2] = null);
(statearr_36058_36126[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 25))
{var inst_35936 = (state_35998[11]);var inst_35937 = (state_35998[13]);var inst_35939 = (inst_35937 < inst_35936);var inst_35940 = inst_35939;var state_35998__$1 = state_35998;if(cljs.core.truth_(inst_35940))
{var statearr_36059_36127 = state_35998__$1;(statearr_36059_36127[1] = 27);
} else
{var statearr_36060_36128 = state_35998__$1;(statearr_36060_36128[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 26))
{var inst_35926 = (state_35998[19]);var inst_35984 = (state_35998[2]);var inst_35985 = cljs.core.seq.call(null,inst_35926);var state_35998__$1 = (function (){var statearr_36061 = state_35998;(statearr_36061[30] = inst_35984);
return statearr_36061;
})();if(inst_35985)
{var statearr_36062_36129 = state_35998__$1;(statearr_36062_36129[1] = 42);
} else
{var statearr_36063_36130 = state_35998__$1;(statearr_36063_36130[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 27))
{var inst_35935 = (state_35998[12]);var inst_35937 = (state_35998[13]);var inst_35942 = cljs.core._nth.call(null,inst_35935,inst_35937);var state_35998__$1 = (function (){var statearr_36064 = state_35998;(statearr_36064[7] = inst_35942);
return statearr_36064;
})();var statearr_36065_36131 = state_35998__$1;(statearr_36065_36131[2] = null);
(statearr_36065_36131[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 28))
{var inst_35934 = (state_35998[10]);var inst_35955 = (state_35998[9]);var inst_35955__$1 = cljs.core.seq.call(null,inst_35934);var state_35998__$1 = (function (){var statearr_36069 = state_35998;(statearr_36069[9] = inst_35955__$1);
return statearr_36069;
})();if(inst_35955__$1)
{var statearr_36070_36132 = state_35998__$1;(statearr_36070_36132[1] = 33);
} else
{var statearr_36071_36133 = state_35998__$1;(statearr_36071_36133[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 29))
{var inst_35982 = (state_35998[2]);var state_35998__$1 = state_35998;var statearr_36072_36134 = state_35998__$1;(statearr_36072_36134[2] = inst_35982);
(statearr_36072_36134[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 30))
{var inst_35934 = (state_35998[10]);var inst_35936 = (state_35998[11]);var inst_35935 = (state_35998[12]);var inst_35937 = (state_35998[13]);var inst_35951 = (state_35998[2]);var inst_35952 = (inst_35937 + 1);var tmp36066 = inst_35934;var tmp36067 = inst_35936;var tmp36068 = inst_35935;var inst_35934__$1 = tmp36066;var inst_35935__$1 = tmp36068;var inst_35936__$1 = tmp36067;var inst_35937__$1 = inst_35952;var state_35998__$1 = (function (){var statearr_36073 = state_35998;(statearr_36073[10] = inst_35934__$1);
(statearr_36073[11] = inst_35936__$1);
(statearr_36073[12] = inst_35935__$1);
(statearr_36073[13] = inst_35937__$1);
(statearr_36073[31] = inst_35951);
return statearr_36073;
})();var statearr_36074_36135 = state_35998__$1;(statearr_36074_36135[2] = null);
(statearr_36074_36135[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35999 === 31))
{var inst_35942 = (state_35998[7]);var inst_35943 = (state_35998[2]);var inst_35944 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35945 = cljs.core.async.untap_STAR_.call(null,m,inst_35942);var state_35998__$1 = (function (){var statearr_36075 = state_35998;(statearr_36075[32] = inst_35943);
(statearr_36075[33] = inst_35944);
return statearr_36075;
})();var statearr_36076_36136 = state_35998__$1;(statearr_36076_36136[2] = inst_35945);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35998__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36080 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36080[0] = state_machine__5507__auto__);
(statearr_36080[1] = 1);
return statearr_36080;
});
var state_machine__5507__auto____1 = (function (state_35998){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35998);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36081){if((e36081 instanceof Object))
{var ex__5510__auto__ = e36081;var statearr_36082_36137 = state_35998;(statearr_36082_36137[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35998);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36081;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36138 = state_35998;
state_35998 = G__36138;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35998){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35998);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36083 = f__5522__auto__.call(null);(statearr_36083[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36084);
return statearr_36083;
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
cljs.core.async.Mix = (function (){var obj36140 = {};return obj36140;
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
;var m = (function (){if(typeof cljs.core.async.t36250 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36250 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta36251){
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
this.meta36251 = meta36251;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36250.cljs$lang$type = true;
cljs.core.async.t36250.cljs$lang$ctorStr = "cljs.core.async/t36250";
cljs.core.async.t36250.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36250");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36250.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t36250.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36250.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36250.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36250.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36250.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36250.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36250.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36250.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36252){var self__ = this;
var _36252__$1 = this;return self__.meta36251;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t36250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36252,meta36251__$1){var self__ = this;
var _36252__$1 = this;return (new cljs.core.async.t36250(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta36251__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t36250 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t36250(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36251){return (new cljs.core.async.t36250(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta36251));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t36250(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___36359 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36317){var state_val_36318 = (state_36317[1]);if((state_val_36318 === 1))
{var inst_36256 = (state_36317[7]);var inst_36256__$1 = calc_state.call(null);var inst_36257 = cljs.core.seq_QMARK_.call(null,inst_36256__$1);var state_36317__$1 = (function (){var statearr_36319 = state_36317;(statearr_36319[7] = inst_36256__$1);
return statearr_36319;
})();if(inst_36257)
{var statearr_36320_36360 = state_36317__$1;(statearr_36320_36360[1] = 2);
} else
{var statearr_36321_36361 = state_36317__$1;(statearr_36321_36361[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 2))
{var inst_36256 = (state_36317[7]);var inst_36259 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36256);var state_36317__$1 = state_36317;var statearr_36322_36362 = state_36317__$1;(statearr_36322_36362[2] = inst_36259);
(statearr_36322_36362[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 3))
{var inst_36256 = (state_36317[7]);var state_36317__$1 = state_36317;var statearr_36323_36363 = state_36317__$1;(statearr_36323_36363[2] = inst_36256);
(statearr_36323_36363[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 4))
{var inst_36256 = (state_36317[7]);var inst_36262 = (state_36317[2]);var inst_36263 = cljs.core.get.call(null,inst_36262,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36264 = cljs.core.get.call(null,inst_36262,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36265 = cljs.core.get.call(null,inst_36262,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_36266 = inst_36256;var state_36317__$1 = (function (){var statearr_36324 = state_36317;(statearr_36324[8] = inst_36266);
(statearr_36324[9] = inst_36264);
(statearr_36324[10] = inst_36265);
(statearr_36324[11] = inst_36263);
return statearr_36324;
})();var statearr_36325_36364 = state_36317__$1;(statearr_36325_36364[2] = null);
(statearr_36325_36364[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 5))
{var inst_36266 = (state_36317[8]);var inst_36269 = cljs.core.seq_QMARK_.call(null,inst_36266);var state_36317__$1 = state_36317;if(inst_36269)
{var statearr_36326_36365 = state_36317__$1;(statearr_36326_36365[1] = 7);
} else
{var statearr_36327_36366 = state_36317__$1;(statearr_36327_36366[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 6))
{var inst_36315 = (state_36317[2]);var state_36317__$1 = state_36317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36317__$1,inst_36315);
} else
{if((state_val_36318 === 7))
{var inst_36266 = (state_36317[8]);var inst_36271 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36266);var state_36317__$1 = state_36317;var statearr_36328_36367 = state_36317__$1;(statearr_36328_36367[2] = inst_36271);
(statearr_36328_36367[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 8))
{var inst_36266 = (state_36317[8]);var state_36317__$1 = state_36317;var statearr_36329_36368 = state_36317__$1;(statearr_36329_36368[2] = inst_36266);
(statearr_36329_36368[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 9))
{var inst_36274 = (state_36317[12]);var inst_36274__$1 = (state_36317[2]);var inst_36275 = cljs.core.get.call(null,inst_36274__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_36276 = cljs.core.get.call(null,inst_36274__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_36277 = cljs.core.get.call(null,inst_36274__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_36317__$1 = (function (){var statearr_36330 = state_36317;(statearr_36330[13] = inst_36277);
(statearr_36330[14] = inst_36276);
(statearr_36330[12] = inst_36274__$1);
return statearr_36330;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36317__$1,10,inst_36275);
} else
{if((state_val_36318 === 10))
{var inst_36281 = (state_36317[15]);var inst_36282 = (state_36317[16]);var inst_36280 = (state_36317[2]);var inst_36281__$1 = cljs.core.nth.call(null,inst_36280,0,null);var inst_36282__$1 = cljs.core.nth.call(null,inst_36280,1,null);var inst_36283 = (inst_36281__$1 == null);var inst_36284 = cljs.core._EQ_.call(null,inst_36282__$1,change);var inst_36285 = (inst_36283) || (inst_36284);var state_36317__$1 = (function (){var statearr_36331 = state_36317;(statearr_36331[15] = inst_36281__$1);
(statearr_36331[16] = inst_36282__$1);
return statearr_36331;
})();if(cljs.core.truth_(inst_36285))
{var statearr_36332_36369 = state_36317__$1;(statearr_36332_36369[1] = 11);
} else
{var statearr_36333_36370 = state_36317__$1;(statearr_36333_36370[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 11))
{var inst_36281 = (state_36317[15]);var inst_36287 = (inst_36281 == null);var state_36317__$1 = state_36317;if(cljs.core.truth_(inst_36287))
{var statearr_36334_36371 = state_36317__$1;(statearr_36334_36371[1] = 14);
} else
{var statearr_36335_36372 = state_36317__$1;(statearr_36335_36372[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 12))
{var inst_36277 = (state_36317[13]);var inst_36282 = (state_36317[16]);var inst_36296 = (state_36317[17]);var inst_36296__$1 = inst_36277.call(null,inst_36282);var state_36317__$1 = (function (){var statearr_36336 = state_36317;(statearr_36336[17] = inst_36296__$1);
return statearr_36336;
})();if(cljs.core.truth_(inst_36296__$1))
{var statearr_36337_36373 = state_36317__$1;(statearr_36337_36373[1] = 17);
} else
{var statearr_36338_36374 = state_36317__$1;(statearr_36338_36374[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 13))
{var inst_36313 = (state_36317[2]);var state_36317__$1 = state_36317;var statearr_36339_36375 = state_36317__$1;(statearr_36339_36375[2] = inst_36313);
(statearr_36339_36375[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 14))
{var inst_36282 = (state_36317[16]);var inst_36289 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36282);var state_36317__$1 = state_36317;var statearr_36340_36376 = state_36317__$1;(statearr_36340_36376[2] = inst_36289);
(statearr_36340_36376[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 15))
{var state_36317__$1 = state_36317;var statearr_36341_36377 = state_36317__$1;(statearr_36341_36377[2] = null);
(statearr_36341_36377[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 16))
{var inst_36292 = (state_36317[2]);var inst_36293 = calc_state.call(null);var inst_36266 = inst_36293;var state_36317__$1 = (function (){var statearr_36342 = state_36317;(statearr_36342[8] = inst_36266);
(statearr_36342[18] = inst_36292);
return statearr_36342;
})();var statearr_36343_36378 = state_36317__$1;(statearr_36343_36378[2] = null);
(statearr_36343_36378[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 17))
{var inst_36296 = (state_36317[17]);var state_36317__$1 = state_36317;var statearr_36344_36379 = state_36317__$1;(statearr_36344_36379[2] = inst_36296);
(statearr_36344_36379[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 18))
{var inst_36277 = (state_36317[13]);var inst_36276 = (state_36317[14]);var inst_36282 = (state_36317[16]);var inst_36299 = cljs.core.empty_QMARK_.call(null,inst_36277);var inst_36300 = inst_36276.call(null,inst_36282);var inst_36301 = cljs.core.not.call(null,inst_36300);var inst_36302 = (inst_36299) && (inst_36301);var state_36317__$1 = state_36317;var statearr_36345_36380 = state_36317__$1;(statearr_36345_36380[2] = inst_36302);
(statearr_36345_36380[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 19))
{var inst_36304 = (state_36317[2]);var state_36317__$1 = state_36317;if(cljs.core.truth_(inst_36304))
{var statearr_36346_36381 = state_36317__$1;(statearr_36346_36381[1] = 20);
} else
{var statearr_36347_36382 = state_36317__$1;(statearr_36347_36382[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 20))
{var inst_36281 = (state_36317[15]);var state_36317__$1 = state_36317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36317__$1,23,out,inst_36281);
} else
{if((state_val_36318 === 21))
{var state_36317__$1 = state_36317;var statearr_36348_36383 = state_36317__$1;(statearr_36348_36383[2] = null);
(statearr_36348_36383[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 22))
{var inst_36274 = (state_36317[12]);var inst_36310 = (state_36317[2]);var inst_36266 = inst_36274;var state_36317__$1 = (function (){var statearr_36349 = state_36317;(statearr_36349[8] = inst_36266);
(statearr_36349[19] = inst_36310);
return statearr_36349;
})();var statearr_36350_36384 = state_36317__$1;(statearr_36350_36384[2] = null);
(statearr_36350_36384[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36318 === 23))
{var inst_36307 = (state_36317[2]);var state_36317__$1 = state_36317;var statearr_36351_36385 = state_36317__$1;(statearr_36351_36385[2] = inst_36307);
(statearr_36351_36385[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_36355 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36355[0] = state_machine__5507__auto__);
(statearr_36355[1] = 1);
return statearr_36355;
});
var state_machine__5507__auto____1 = (function (state_36317){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36317);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36356){if((e36356 instanceof Object))
{var ex__5510__auto__ = e36356;var statearr_36357_36386 = state_36317;(statearr_36357_36386[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36356;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36387 = state_36317;
state_36317 = G__36387;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36317){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36358 = f__5522__auto__.call(null);(statearr_36358[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36359);
return statearr_36358;
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
cljs.core.async.Pub = (function (){var obj36389 = {};return obj36389;
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
return (function (p1__36390_SHARP_){if(cljs.core.truth_(p1__36390_SHARP_.call(null,topic)))
{return p1__36390_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36390_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36515 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36515 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36516){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36516 = meta36516;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36515.cljs$lang$type = true;
cljs.core.async.t36515.cljs$lang$ctorStr = "cljs.core.async/t36515";
cljs.core.async.t36515.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36515");
});})(mults,ensure_mult))
;
cljs.core.async.t36515.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36515.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36515.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36515.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36515.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36515.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36515.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36517){var self__ = this;
var _36517__$1 = this;return self__.meta36516;
});})(mults,ensure_mult))
;
cljs.core.async.t36515.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36517,meta36516__$1){var self__ = this;
var _36517__$1 = this;return (new cljs.core.async.t36515(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36516__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36515 = ((function (mults,ensure_mult){
return (function __GT_t36515(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36516){return (new cljs.core.async.t36515(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36516));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36515(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36639 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36591){var state_val_36592 = (state_36591[1]);if((state_val_36592 === 1))
{var state_36591__$1 = state_36591;var statearr_36593_36640 = state_36591__$1;(statearr_36593_36640[2] = null);
(statearr_36593_36640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 2))
{var state_36591__$1 = state_36591;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36591__$1,4,ch);
} else
{if((state_val_36592 === 3))
{var inst_36589 = (state_36591[2]);var state_36591__$1 = state_36591;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36591__$1,inst_36589);
} else
{if((state_val_36592 === 4))
{var inst_36520 = (state_36591[7]);var inst_36520__$1 = (state_36591[2]);var inst_36521 = (inst_36520__$1 == null);var state_36591__$1 = (function (){var statearr_36594 = state_36591;(statearr_36594[7] = inst_36520__$1);
return statearr_36594;
})();if(cljs.core.truth_(inst_36521))
{var statearr_36595_36641 = state_36591__$1;(statearr_36595_36641[1] = 5);
} else
{var statearr_36596_36642 = state_36591__$1;(statearr_36596_36642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 5))
{var inst_36527 = cljs.core.deref.call(null,mults);var inst_36528 = cljs.core.vals.call(null,inst_36527);var inst_36529 = cljs.core.seq.call(null,inst_36528);var inst_36530 = inst_36529;var inst_36531 = null;var inst_36532 = 0;var inst_36533 = 0;var state_36591__$1 = (function (){var statearr_36597 = state_36591;(statearr_36597[8] = inst_36533);
(statearr_36597[9] = inst_36532);
(statearr_36597[10] = inst_36530);
(statearr_36597[11] = inst_36531);
return statearr_36597;
})();var statearr_36598_36643 = state_36591__$1;(statearr_36598_36643[2] = null);
(statearr_36598_36643[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 6))
{var inst_36520 = (state_36591[7]);var inst_36568 = (state_36591[12]);var inst_36570 = (state_36591[13]);var inst_36568__$1 = topic_fn.call(null,inst_36520);var inst_36569 = cljs.core.deref.call(null,mults);var inst_36570__$1 = cljs.core.get.call(null,inst_36569,inst_36568__$1);var state_36591__$1 = (function (){var statearr_36599 = state_36591;(statearr_36599[12] = inst_36568__$1);
(statearr_36599[13] = inst_36570__$1);
return statearr_36599;
})();if(cljs.core.truth_(inst_36570__$1))
{var statearr_36600_36644 = state_36591__$1;(statearr_36600_36644[1] = 19);
} else
{var statearr_36601_36645 = state_36591__$1;(statearr_36601_36645[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 7))
{var inst_36587 = (state_36591[2]);var state_36591__$1 = state_36591;var statearr_36602_36646 = state_36591__$1;(statearr_36602_36646[2] = inst_36587);
(statearr_36602_36646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 8))
{var inst_36533 = (state_36591[8]);var inst_36532 = (state_36591[9]);var inst_36535 = (inst_36533 < inst_36532);var inst_36536 = inst_36535;var state_36591__$1 = state_36591;if(cljs.core.truth_(inst_36536))
{var statearr_36606_36647 = state_36591__$1;(statearr_36606_36647[1] = 10);
} else
{var statearr_36607_36648 = state_36591__$1;(statearr_36607_36648[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 9))
{var inst_36566 = (state_36591[2]);var state_36591__$1 = state_36591;var statearr_36608_36649 = state_36591__$1;(statearr_36608_36649[2] = inst_36566);
(statearr_36608_36649[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 10))
{var inst_36533 = (state_36591[8]);var inst_36532 = (state_36591[9]);var inst_36530 = (state_36591[10]);var inst_36531 = (state_36591[11]);var inst_36538 = cljs.core._nth.call(null,inst_36531,inst_36533);var inst_36539 = cljs.core.async.muxch_STAR_.call(null,inst_36538);var inst_36540 = cljs.core.async.close_BANG_.call(null,inst_36539);var inst_36541 = (inst_36533 + 1);var tmp36603 = inst_36532;var tmp36604 = inst_36530;var tmp36605 = inst_36531;var inst_36530__$1 = tmp36604;var inst_36531__$1 = tmp36605;var inst_36532__$1 = tmp36603;var inst_36533__$1 = inst_36541;var state_36591__$1 = (function (){var statearr_36609 = state_36591;(statearr_36609[14] = inst_36540);
(statearr_36609[8] = inst_36533__$1);
(statearr_36609[9] = inst_36532__$1);
(statearr_36609[10] = inst_36530__$1);
(statearr_36609[11] = inst_36531__$1);
return statearr_36609;
})();var statearr_36610_36650 = state_36591__$1;(statearr_36610_36650[2] = null);
(statearr_36610_36650[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 11))
{var inst_36544 = (state_36591[15]);var inst_36530 = (state_36591[10]);var inst_36544__$1 = cljs.core.seq.call(null,inst_36530);var state_36591__$1 = (function (){var statearr_36611 = state_36591;(statearr_36611[15] = inst_36544__$1);
return statearr_36611;
})();if(inst_36544__$1)
{var statearr_36612_36651 = state_36591__$1;(statearr_36612_36651[1] = 13);
} else
{var statearr_36613_36652 = state_36591__$1;(statearr_36613_36652[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 12))
{var inst_36564 = (state_36591[2]);var state_36591__$1 = state_36591;var statearr_36614_36653 = state_36591__$1;(statearr_36614_36653[2] = inst_36564);
(statearr_36614_36653[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 13))
{var inst_36544 = (state_36591[15]);var inst_36546 = cljs.core.chunked_seq_QMARK_.call(null,inst_36544);var state_36591__$1 = state_36591;if(inst_36546)
{var statearr_36615_36654 = state_36591__$1;(statearr_36615_36654[1] = 16);
} else
{var statearr_36616_36655 = state_36591__$1;(statearr_36616_36655[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 14))
{var state_36591__$1 = state_36591;var statearr_36617_36656 = state_36591__$1;(statearr_36617_36656[2] = null);
(statearr_36617_36656[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 15))
{var inst_36562 = (state_36591[2]);var state_36591__$1 = state_36591;var statearr_36618_36657 = state_36591__$1;(statearr_36618_36657[2] = inst_36562);
(statearr_36618_36657[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 16))
{var inst_36544 = (state_36591[15]);var inst_36548 = cljs.core.chunk_first.call(null,inst_36544);var inst_36549 = cljs.core.chunk_rest.call(null,inst_36544);var inst_36550 = cljs.core.count.call(null,inst_36548);var inst_36530 = inst_36549;var inst_36531 = inst_36548;var inst_36532 = inst_36550;var inst_36533 = 0;var state_36591__$1 = (function (){var statearr_36619 = state_36591;(statearr_36619[8] = inst_36533);
(statearr_36619[9] = inst_36532);
(statearr_36619[10] = inst_36530);
(statearr_36619[11] = inst_36531);
return statearr_36619;
})();var statearr_36620_36658 = state_36591__$1;(statearr_36620_36658[2] = null);
(statearr_36620_36658[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 17))
{var inst_36544 = (state_36591[15]);var inst_36553 = cljs.core.first.call(null,inst_36544);var inst_36554 = cljs.core.async.muxch_STAR_.call(null,inst_36553);var inst_36555 = cljs.core.async.close_BANG_.call(null,inst_36554);var inst_36556 = cljs.core.next.call(null,inst_36544);var inst_36530 = inst_36556;var inst_36531 = null;var inst_36532 = 0;var inst_36533 = 0;var state_36591__$1 = (function (){var statearr_36621 = state_36591;(statearr_36621[16] = inst_36555);
(statearr_36621[8] = inst_36533);
(statearr_36621[9] = inst_36532);
(statearr_36621[10] = inst_36530);
(statearr_36621[11] = inst_36531);
return statearr_36621;
})();var statearr_36622_36659 = state_36591__$1;(statearr_36622_36659[2] = null);
(statearr_36622_36659[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 18))
{var inst_36559 = (state_36591[2]);var state_36591__$1 = state_36591;var statearr_36623_36660 = state_36591__$1;(statearr_36623_36660[2] = inst_36559);
(statearr_36623_36660[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 19))
{var state_36591__$1 = state_36591;var statearr_36624_36661 = state_36591__$1;(statearr_36624_36661[2] = null);
(statearr_36624_36661[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 20))
{var state_36591__$1 = state_36591;var statearr_36625_36662 = state_36591__$1;(statearr_36625_36662[2] = null);
(statearr_36625_36662[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 21))
{var inst_36584 = (state_36591[2]);var state_36591__$1 = (function (){var statearr_36626 = state_36591;(statearr_36626[17] = inst_36584);
return statearr_36626;
})();var statearr_36627_36663 = state_36591__$1;(statearr_36627_36663[2] = null);
(statearr_36627_36663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 22))
{var inst_36581 = (state_36591[2]);var state_36591__$1 = state_36591;var statearr_36628_36664 = state_36591__$1;(statearr_36628_36664[2] = inst_36581);
(statearr_36628_36664[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 23))
{var inst_36568 = (state_36591[12]);var inst_36572 = (state_36591[2]);var inst_36573 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36568);var state_36591__$1 = (function (){var statearr_36629 = state_36591;(statearr_36629[18] = inst_36572);
return statearr_36629;
})();var statearr_36630_36665 = state_36591__$1;(statearr_36630_36665[2] = inst_36573);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36591__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36592 === 24))
{var inst_36520 = (state_36591[7]);var inst_36570 = (state_36591[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36591,23,Object,null,22);var inst_36577 = cljs.core.async.muxch_STAR_.call(null,inst_36570);var state_36591__$1 = state_36591;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36591__$1,25,inst_36577,inst_36520);
} else
{if((state_val_36592 === 25))
{var inst_36579 = (state_36591[2]);var state_36591__$1 = state_36591;var statearr_36631_36666 = state_36591__$1;(statearr_36631_36666[2] = inst_36579);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36591__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36635 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36635[0] = state_machine__5507__auto__);
(statearr_36635[1] = 1);
return statearr_36635;
});
var state_machine__5507__auto____1 = (function (state_36591){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36591);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36636){if((e36636 instanceof Object))
{var ex__5510__auto__ = e36636;var statearr_36637_36667 = state_36591;(statearr_36637_36667[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36591);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36668 = state_36591;
state_36591 = G__36668;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36591){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36591);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36638 = f__5522__auto__.call(null);(statearr_36638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36639);
return statearr_36638;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36775){var state_val_36776 = (state_36775[1]);if((state_val_36776 === 1))
{var state_36775__$1 = state_36775;var statearr_36777_36806 = state_36775__$1;(statearr_36777_36806[2] = null);
(statearr_36777_36806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 2))
{var inst_36738 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36739 = 0;var state_36775__$1 = (function (){var statearr_36778 = state_36775;(statearr_36778[7] = inst_36739);
(statearr_36778[8] = inst_36738);
return statearr_36778;
})();var statearr_36779_36807 = state_36775__$1;(statearr_36779_36807[2] = null);
(statearr_36779_36807[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 3))
{var inst_36773 = (state_36775[2]);var state_36775__$1 = state_36775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36775__$1,inst_36773);
} else
{if((state_val_36776 === 4))
{var inst_36739 = (state_36775[7]);var inst_36741 = (inst_36739 < cnt);var state_36775__$1 = state_36775;if(cljs.core.truth_(inst_36741))
{var statearr_36780_36808 = state_36775__$1;(statearr_36780_36808[1] = 6);
} else
{var statearr_36781_36809 = state_36775__$1;(statearr_36781_36809[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 5))
{var inst_36759 = (state_36775[2]);var state_36775__$1 = (function (){var statearr_36782 = state_36775;(statearr_36782[9] = inst_36759);
return statearr_36782;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36775__$1,12,dchan);
} else
{if((state_val_36776 === 6))
{var state_36775__$1 = state_36775;var statearr_36783_36810 = state_36775__$1;(statearr_36783_36810[2] = null);
(statearr_36783_36810[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 7))
{var state_36775__$1 = state_36775;var statearr_36784_36811 = state_36775__$1;(statearr_36784_36811[2] = null);
(statearr_36784_36811[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 8))
{var inst_36757 = (state_36775[2]);var state_36775__$1 = state_36775;var statearr_36785_36812 = state_36775__$1;(statearr_36785_36812[2] = inst_36757);
(statearr_36785_36812[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 9))
{var inst_36739 = (state_36775[7]);var inst_36752 = (state_36775[2]);var inst_36753 = (inst_36739 + 1);var inst_36739__$1 = inst_36753;var state_36775__$1 = (function (){var statearr_36786 = state_36775;(statearr_36786[10] = inst_36752);
(statearr_36786[7] = inst_36739__$1);
return statearr_36786;
})();var statearr_36787_36813 = state_36775__$1;(statearr_36787_36813[2] = null);
(statearr_36787_36813[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 10))
{var inst_36743 = (state_36775[2]);var inst_36744 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36775__$1 = (function (){var statearr_36788 = state_36775;(statearr_36788[11] = inst_36743);
return statearr_36788;
})();var statearr_36789_36814 = state_36775__$1;(statearr_36789_36814[2] = inst_36744);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36775__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 11))
{var inst_36739 = (state_36775[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36775,10,Object,null,9);var inst_36748 = chs__$1.call(null,inst_36739);var inst_36749 = done.call(null,inst_36739);var inst_36750 = cljs.core.async.take_BANG_.call(null,inst_36748,inst_36749);var state_36775__$1 = state_36775;var statearr_36790_36815 = state_36775__$1;(statearr_36790_36815[2] = inst_36750);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36775__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 12))
{var inst_36761 = (state_36775[12]);var inst_36761__$1 = (state_36775[2]);var inst_36762 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36761__$1);var state_36775__$1 = (function (){var statearr_36791 = state_36775;(statearr_36791[12] = inst_36761__$1);
return statearr_36791;
})();if(cljs.core.truth_(inst_36762))
{var statearr_36792_36816 = state_36775__$1;(statearr_36792_36816[1] = 13);
} else
{var statearr_36793_36817 = state_36775__$1;(statearr_36793_36817[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 13))
{var inst_36764 = cljs.core.async.close_BANG_.call(null,out);var state_36775__$1 = state_36775;var statearr_36794_36818 = state_36775__$1;(statearr_36794_36818[2] = inst_36764);
(statearr_36794_36818[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 14))
{var inst_36761 = (state_36775[12]);var inst_36766 = cljs.core.apply.call(null,f,inst_36761);var state_36775__$1 = state_36775;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36775__$1,16,out,inst_36766);
} else
{if((state_val_36776 === 15))
{var inst_36771 = (state_36775[2]);var state_36775__$1 = state_36775;var statearr_36795_36819 = state_36775__$1;(statearr_36795_36819[2] = inst_36771);
(statearr_36795_36819[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36776 === 16))
{var inst_36768 = (state_36775[2]);var state_36775__$1 = (function (){var statearr_36796 = state_36775;(statearr_36796[13] = inst_36768);
return statearr_36796;
})();var statearr_36797_36820 = state_36775__$1;(statearr_36797_36820[2] = null);
(statearr_36797_36820[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36801 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36801[0] = state_machine__5507__auto__);
(statearr_36801[1] = 1);
return statearr_36801;
});
var state_machine__5507__auto____1 = (function (state_36775){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36775);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36802){if((e36802 instanceof Object))
{var ex__5510__auto__ = e36802;var statearr_36803_36821 = state_36775;(statearr_36803_36821[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36775);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36822 = state_36775;
state_36775 = G__36822;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36775){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36804 = f__5522__auto__.call(null);(statearr_36804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36805);
return statearr_36804;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36930 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36906){var state_val_36907 = (state_36906[1]);if((state_val_36907 === 1))
{var inst_36877 = cljs.core.vec.call(null,chs);var inst_36878 = inst_36877;var state_36906__$1 = (function (){var statearr_36908 = state_36906;(statearr_36908[7] = inst_36878);
return statearr_36908;
})();var statearr_36909_36931 = state_36906__$1;(statearr_36909_36931[2] = null);
(statearr_36909_36931[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36907 === 2))
{var inst_36878 = (state_36906[7]);var inst_36880 = cljs.core.count.call(null,inst_36878);var inst_36881 = (inst_36880 > 0);var state_36906__$1 = state_36906;if(cljs.core.truth_(inst_36881))
{var statearr_36910_36932 = state_36906__$1;(statearr_36910_36932[1] = 4);
} else
{var statearr_36911_36933 = state_36906__$1;(statearr_36911_36933[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36907 === 3))
{var inst_36904 = (state_36906[2]);var state_36906__$1 = state_36906;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36906__$1,inst_36904);
} else
{if((state_val_36907 === 4))
{var inst_36878 = (state_36906[7]);var state_36906__$1 = state_36906;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36906__$1,7,inst_36878);
} else
{if((state_val_36907 === 5))
{var inst_36900 = cljs.core.async.close_BANG_.call(null,out);var state_36906__$1 = state_36906;var statearr_36912_36934 = state_36906__$1;(statearr_36912_36934[2] = inst_36900);
(statearr_36912_36934[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36907 === 6))
{var inst_36902 = (state_36906[2]);var state_36906__$1 = state_36906;var statearr_36913_36935 = state_36906__$1;(statearr_36913_36935[2] = inst_36902);
(statearr_36913_36935[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36907 === 7))
{var inst_36886 = (state_36906[8]);var inst_36885 = (state_36906[9]);var inst_36885__$1 = (state_36906[2]);var inst_36886__$1 = cljs.core.nth.call(null,inst_36885__$1,0,null);var inst_36887 = cljs.core.nth.call(null,inst_36885__$1,1,null);var inst_36888 = (inst_36886__$1 == null);var state_36906__$1 = (function (){var statearr_36914 = state_36906;(statearr_36914[10] = inst_36887);
(statearr_36914[8] = inst_36886__$1);
(statearr_36914[9] = inst_36885__$1);
return statearr_36914;
})();if(cljs.core.truth_(inst_36888))
{var statearr_36915_36936 = state_36906__$1;(statearr_36915_36936[1] = 8);
} else
{var statearr_36916_36937 = state_36906__$1;(statearr_36916_36937[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36907 === 8))
{var inst_36887 = (state_36906[10]);var inst_36886 = (state_36906[8]);var inst_36878 = (state_36906[7]);var inst_36885 = (state_36906[9]);var inst_36890 = (function (){var c = inst_36887;var v = inst_36886;var vec__36883 = inst_36885;var cs = inst_36878;return ((function (c,v,vec__36883,cs,inst_36887,inst_36886,inst_36878,inst_36885,state_val_36907){
return (function (p1__36823_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36823_SHARP_);
});
;})(c,v,vec__36883,cs,inst_36887,inst_36886,inst_36878,inst_36885,state_val_36907))
})();var inst_36891 = cljs.core.filterv.call(null,inst_36890,inst_36878);var inst_36878__$1 = inst_36891;var state_36906__$1 = (function (){var statearr_36917 = state_36906;(statearr_36917[7] = inst_36878__$1);
return statearr_36917;
})();var statearr_36918_36938 = state_36906__$1;(statearr_36918_36938[2] = null);
(statearr_36918_36938[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36907 === 9))
{var inst_36886 = (state_36906[8]);var state_36906__$1 = state_36906;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36906__$1,11,out,inst_36886);
} else
{if((state_val_36907 === 10))
{var inst_36898 = (state_36906[2]);var state_36906__$1 = state_36906;var statearr_36920_36939 = state_36906__$1;(statearr_36920_36939[2] = inst_36898);
(statearr_36920_36939[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36907 === 11))
{var inst_36878 = (state_36906[7]);var inst_36895 = (state_36906[2]);var tmp36919 = inst_36878;var inst_36878__$1 = tmp36919;var state_36906__$1 = (function (){var statearr_36921 = state_36906;(statearr_36921[11] = inst_36895);
(statearr_36921[7] = inst_36878__$1);
return statearr_36921;
})();var statearr_36922_36940 = state_36906__$1;(statearr_36922_36940[2] = null);
(statearr_36922_36940[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36926 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36926[0] = state_machine__5507__auto__);
(statearr_36926[1] = 1);
return statearr_36926;
});
var state_machine__5507__auto____1 = (function (state_36906){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36906);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36927){if((e36927 instanceof Object))
{var ex__5510__auto__ = e36927;var statearr_36928_36941 = state_36906;(statearr_36928_36941[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36906);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36927;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36942 = state_36906;
state_36906 = G__36942;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36906){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36906);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36929 = f__5522__auto__.call(null);(statearr_36929[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36930);
return statearr_36929;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37035 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37012){var state_val_37013 = (state_37012[1]);if((state_val_37013 === 1))
{var inst_36989 = 0;var state_37012__$1 = (function (){var statearr_37014 = state_37012;(statearr_37014[7] = inst_36989);
return statearr_37014;
})();var statearr_37015_37036 = state_37012__$1;(statearr_37015_37036[2] = null);
(statearr_37015_37036[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37013 === 2))
{var inst_36989 = (state_37012[7]);var inst_36991 = (inst_36989 < n);var state_37012__$1 = state_37012;if(cljs.core.truth_(inst_36991))
{var statearr_37016_37037 = state_37012__$1;(statearr_37016_37037[1] = 4);
} else
{var statearr_37017_37038 = state_37012__$1;(statearr_37017_37038[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37013 === 3))
{var inst_37009 = (state_37012[2]);var inst_37010 = cljs.core.async.close_BANG_.call(null,out);var state_37012__$1 = (function (){var statearr_37018 = state_37012;(statearr_37018[8] = inst_37009);
return statearr_37018;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37012__$1,inst_37010);
} else
{if((state_val_37013 === 4))
{var state_37012__$1 = state_37012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37012__$1,7,ch);
} else
{if((state_val_37013 === 5))
{var state_37012__$1 = state_37012;var statearr_37019_37039 = state_37012__$1;(statearr_37019_37039[2] = null);
(statearr_37019_37039[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37013 === 6))
{var inst_37007 = (state_37012[2]);var state_37012__$1 = state_37012;var statearr_37020_37040 = state_37012__$1;(statearr_37020_37040[2] = inst_37007);
(statearr_37020_37040[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37013 === 7))
{var inst_36994 = (state_37012[9]);var inst_36994__$1 = (state_37012[2]);var inst_36995 = (inst_36994__$1 == null);var inst_36996 = cljs.core.not.call(null,inst_36995);var state_37012__$1 = (function (){var statearr_37021 = state_37012;(statearr_37021[9] = inst_36994__$1);
return statearr_37021;
})();if(inst_36996)
{var statearr_37022_37041 = state_37012__$1;(statearr_37022_37041[1] = 8);
} else
{var statearr_37023_37042 = state_37012__$1;(statearr_37023_37042[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37013 === 8))
{var inst_36994 = (state_37012[9]);var state_37012__$1 = state_37012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37012__$1,11,out,inst_36994);
} else
{if((state_val_37013 === 9))
{var state_37012__$1 = state_37012;var statearr_37024_37043 = state_37012__$1;(statearr_37024_37043[2] = null);
(statearr_37024_37043[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37013 === 10))
{var inst_37004 = (state_37012[2]);var state_37012__$1 = state_37012;var statearr_37025_37044 = state_37012__$1;(statearr_37025_37044[2] = inst_37004);
(statearr_37025_37044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37013 === 11))
{var inst_36989 = (state_37012[7]);var inst_36999 = (state_37012[2]);var inst_37000 = (inst_36989 + 1);var inst_36989__$1 = inst_37000;var state_37012__$1 = (function (){var statearr_37026 = state_37012;(statearr_37026[7] = inst_36989__$1);
(statearr_37026[10] = inst_36999);
return statearr_37026;
})();var statearr_37027_37045 = state_37012__$1;(statearr_37027_37045[2] = null);
(statearr_37027_37045[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37031 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37031[0] = state_machine__5507__auto__);
(statearr_37031[1] = 1);
return statearr_37031;
});
var state_machine__5507__auto____1 = (function (state_37012){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37012);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37032){if((e37032 instanceof Object))
{var ex__5510__auto__ = e37032;var statearr_37033_37046 = state_37012;(statearr_37033_37046[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37032;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37047 = state_37012;
state_37012 = G__37047;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37012){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37034 = f__5522__auto__.call(null);(statearr_37034[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37035);
return statearr_37034;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37144 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37119){var state_val_37120 = (state_37119[1]);if((state_val_37120 === 1))
{var inst_37096 = null;var state_37119__$1 = (function (){var statearr_37121 = state_37119;(statearr_37121[7] = inst_37096);
return statearr_37121;
})();var statearr_37122_37145 = state_37119__$1;(statearr_37122_37145[2] = null);
(statearr_37122_37145[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37120 === 2))
{var state_37119__$1 = state_37119;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37119__$1,4,ch);
} else
{if((state_val_37120 === 3))
{var inst_37116 = (state_37119[2]);var inst_37117 = cljs.core.async.close_BANG_.call(null,out);var state_37119__$1 = (function (){var statearr_37123 = state_37119;(statearr_37123[8] = inst_37116);
return statearr_37123;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37119__$1,inst_37117);
} else
{if((state_val_37120 === 4))
{var inst_37099 = (state_37119[9]);var inst_37099__$1 = (state_37119[2]);var inst_37100 = (inst_37099__$1 == null);var inst_37101 = cljs.core.not.call(null,inst_37100);var state_37119__$1 = (function (){var statearr_37124 = state_37119;(statearr_37124[9] = inst_37099__$1);
return statearr_37124;
})();if(inst_37101)
{var statearr_37125_37146 = state_37119__$1;(statearr_37125_37146[1] = 5);
} else
{var statearr_37126_37147 = state_37119__$1;(statearr_37126_37147[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37120 === 5))
{var inst_37096 = (state_37119[7]);var inst_37099 = (state_37119[9]);var inst_37103 = cljs.core._EQ_.call(null,inst_37099,inst_37096);var state_37119__$1 = state_37119;if(inst_37103)
{var statearr_37127_37148 = state_37119__$1;(statearr_37127_37148[1] = 8);
} else
{var statearr_37128_37149 = state_37119__$1;(statearr_37128_37149[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37120 === 6))
{var state_37119__$1 = state_37119;var statearr_37130_37150 = state_37119__$1;(statearr_37130_37150[2] = null);
(statearr_37130_37150[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37120 === 7))
{var inst_37114 = (state_37119[2]);var state_37119__$1 = state_37119;var statearr_37131_37151 = state_37119__$1;(statearr_37131_37151[2] = inst_37114);
(statearr_37131_37151[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37120 === 8))
{var inst_37096 = (state_37119[7]);var tmp37129 = inst_37096;var inst_37096__$1 = tmp37129;var state_37119__$1 = (function (){var statearr_37132 = state_37119;(statearr_37132[7] = inst_37096__$1);
return statearr_37132;
})();var statearr_37133_37152 = state_37119__$1;(statearr_37133_37152[2] = null);
(statearr_37133_37152[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37120 === 9))
{var inst_37099 = (state_37119[9]);var state_37119__$1 = state_37119;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37119__$1,11,out,inst_37099);
} else
{if((state_val_37120 === 10))
{var inst_37111 = (state_37119[2]);var state_37119__$1 = state_37119;var statearr_37134_37153 = state_37119__$1;(statearr_37134_37153[2] = inst_37111);
(statearr_37134_37153[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37120 === 11))
{var inst_37099 = (state_37119[9]);var inst_37108 = (state_37119[2]);var inst_37096 = inst_37099;var state_37119__$1 = (function (){var statearr_37135 = state_37119;(statearr_37135[10] = inst_37108);
(statearr_37135[7] = inst_37096);
return statearr_37135;
})();var statearr_37136_37154 = state_37119__$1;(statearr_37136_37154[2] = null);
(statearr_37136_37154[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_37140 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_37140[0] = state_machine__5507__auto__);
(statearr_37140[1] = 1);
return statearr_37140;
});
var state_machine__5507__auto____1 = (function (state_37119){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37119);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37141){if((e37141 instanceof Object))
{var ex__5510__auto__ = e37141;var statearr_37142_37155 = state_37119;(statearr_37142_37155[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37119);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37141;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37156 = state_37119;
state_37119 = G__37156;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37119){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37119);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37143 = f__5522__auto__.call(null);(statearr_37143[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37144);
return statearr_37143;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37291 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37261){var state_val_37262 = (state_37261[1]);if((state_val_37262 === 1))
{var inst_37224 = (new Array(n));var inst_37225 = inst_37224;var inst_37226 = 0;var state_37261__$1 = (function (){var statearr_37263 = state_37261;(statearr_37263[7] = inst_37226);
(statearr_37263[8] = inst_37225);
return statearr_37263;
})();var statearr_37264_37292 = state_37261__$1;(statearr_37264_37292[2] = null);
(statearr_37264_37292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 2))
{var state_37261__$1 = state_37261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37261__$1,4,ch);
} else
{if((state_val_37262 === 3))
{var inst_37259 = (state_37261[2]);var state_37261__$1 = state_37261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37261__$1,inst_37259);
} else
{if((state_val_37262 === 4))
{var inst_37229 = (state_37261[9]);var inst_37229__$1 = (state_37261[2]);var inst_37230 = (inst_37229__$1 == null);var inst_37231 = cljs.core.not.call(null,inst_37230);var state_37261__$1 = (function (){var statearr_37265 = state_37261;(statearr_37265[9] = inst_37229__$1);
return statearr_37265;
})();if(inst_37231)
{var statearr_37266_37293 = state_37261__$1;(statearr_37266_37293[1] = 5);
} else
{var statearr_37267_37294 = state_37261__$1;(statearr_37267_37294[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 5))
{var inst_37234 = (state_37261[10]);var inst_37229 = (state_37261[9]);var inst_37226 = (state_37261[7]);var inst_37225 = (state_37261[8]);var inst_37233 = (inst_37225[inst_37226] = inst_37229);var inst_37234__$1 = (inst_37226 + 1);var inst_37235 = (inst_37234__$1 < n);var state_37261__$1 = (function (){var statearr_37268 = state_37261;(statearr_37268[10] = inst_37234__$1);
(statearr_37268[11] = inst_37233);
return statearr_37268;
})();if(cljs.core.truth_(inst_37235))
{var statearr_37269_37295 = state_37261__$1;(statearr_37269_37295[1] = 8);
} else
{var statearr_37270_37296 = state_37261__$1;(statearr_37270_37296[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 6))
{var inst_37226 = (state_37261[7]);var inst_37247 = (inst_37226 > 0);var state_37261__$1 = state_37261;if(cljs.core.truth_(inst_37247))
{var statearr_37272_37297 = state_37261__$1;(statearr_37272_37297[1] = 12);
} else
{var statearr_37273_37298 = state_37261__$1;(statearr_37273_37298[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 7))
{var inst_37257 = (state_37261[2]);var state_37261__$1 = state_37261;var statearr_37274_37299 = state_37261__$1;(statearr_37274_37299[2] = inst_37257);
(statearr_37274_37299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 8))
{var inst_37234 = (state_37261[10]);var inst_37225 = (state_37261[8]);var tmp37271 = inst_37225;var inst_37225__$1 = tmp37271;var inst_37226 = inst_37234;var state_37261__$1 = (function (){var statearr_37275 = state_37261;(statearr_37275[7] = inst_37226);
(statearr_37275[8] = inst_37225__$1);
return statearr_37275;
})();var statearr_37276_37300 = state_37261__$1;(statearr_37276_37300[2] = null);
(statearr_37276_37300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 9))
{var inst_37225 = (state_37261[8]);var inst_37239 = cljs.core.vec.call(null,inst_37225);var state_37261__$1 = state_37261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37261__$1,11,out,inst_37239);
} else
{if((state_val_37262 === 10))
{var inst_37245 = (state_37261[2]);var state_37261__$1 = state_37261;var statearr_37277_37301 = state_37261__$1;(statearr_37277_37301[2] = inst_37245);
(statearr_37277_37301[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 11))
{var inst_37241 = (state_37261[2]);var inst_37242 = (new Array(n));var inst_37225 = inst_37242;var inst_37226 = 0;var state_37261__$1 = (function (){var statearr_37278 = state_37261;(statearr_37278[12] = inst_37241);
(statearr_37278[7] = inst_37226);
(statearr_37278[8] = inst_37225);
return statearr_37278;
})();var statearr_37279_37302 = state_37261__$1;(statearr_37279_37302[2] = null);
(statearr_37279_37302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 12))
{var inst_37225 = (state_37261[8]);var inst_37249 = cljs.core.vec.call(null,inst_37225);var state_37261__$1 = state_37261;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37261__$1,15,out,inst_37249);
} else
{if((state_val_37262 === 13))
{var state_37261__$1 = state_37261;var statearr_37280_37303 = state_37261__$1;(statearr_37280_37303[2] = null);
(statearr_37280_37303[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 14))
{var inst_37254 = (state_37261[2]);var inst_37255 = cljs.core.async.close_BANG_.call(null,out);var state_37261__$1 = (function (){var statearr_37281 = state_37261;(statearr_37281[13] = inst_37254);
return statearr_37281;
})();var statearr_37282_37304 = state_37261__$1;(statearr_37282_37304[2] = inst_37255);
(statearr_37282_37304[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37262 === 15))
{var inst_37251 = (state_37261[2]);var state_37261__$1 = state_37261;var statearr_37283_37305 = state_37261__$1;(statearr_37283_37305[2] = inst_37251);
(statearr_37283_37305[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37287[0] = state_machine__5507__auto__);
(statearr_37287[1] = 1);
return statearr_37287;
});
var state_machine__5507__auto____1 = (function (state_37261){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37261);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37288){if((e37288 instanceof Object))
{var ex__5510__auto__ = e37288;var statearr_37289_37306 = state_37261;(statearr_37289_37306[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37261);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37307 = state_37261;
state_37261 = G__37307;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37261){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37290 = f__5522__auto__.call(null);(statearr_37290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37291);
return statearr_37290;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37450 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37420){var state_val_37421 = (state_37420[1]);if((state_val_37421 === 1))
{var inst_37379 = [];var inst_37380 = inst_37379;var inst_37381 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37420__$1 = (function (){var statearr_37422 = state_37420;(statearr_37422[7] = inst_37380);
(statearr_37422[8] = inst_37381);
return statearr_37422;
})();var statearr_37423_37451 = state_37420__$1;(statearr_37423_37451[2] = null);
(statearr_37423_37451[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 2))
{var state_37420__$1 = state_37420;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37420__$1,4,ch);
} else
{if((state_val_37421 === 3))
{var inst_37418 = (state_37420[2]);var state_37420__$1 = state_37420;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37420__$1,inst_37418);
} else
{if((state_val_37421 === 4))
{var inst_37384 = (state_37420[9]);var inst_37384__$1 = (state_37420[2]);var inst_37385 = (inst_37384__$1 == null);var inst_37386 = cljs.core.not.call(null,inst_37385);var state_37420__$1 = (function (){var statearr_37424 = state_37420;(statearr_37424[9] = inst_37384__$1);
return statearr_37424;
})();if(inst_37386)
{var statearr_37425_37452 = state_37420__$1;(statearr_37425_37452[1] = 5);
} else
{var statearr_37426_37453 = state_37420__$1;(statearr_37426_37453[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 5))
{var inst_37381 = (state_37420[8]);var inst_37388 = (state_37420[10]);var inst_37384 = (state_37420[9]);var inst_37388__$1 = f.call(null,inst_37384);var inst_37389 = cljs.core._EQ_.call(null,inst_37388__$1,inst_37381);var inst_37390 = cljs.core.keyword_identical_QMARK_.call(null,inst_37381,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37391 = (inst_37389) || (inst_37390);var state_37420__$1 = (function (){var statearr_37427 = state_37420;(statearr_37427[10] = inst_37388__$1);
return statearr_37427;
})();if(cljs.core.truth_(inst_37391))
{var statearr_37428_37454 = state_37420__$1;(statearr_37428_37454[1] = 8);
} else
{var statearr_37429_37455 = state_37420__$1;(statearr_37429_37455[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 6))
{var inst_37380 = (state_37420[7]);var inst_37405 = inst_37380.length;var inst_37406 = (inst_37405 > 0);var state_37420__$1 = state_37420;if(cljs.core.truth_(inst_37406))
{var statearr_37431_37456 = state_37420__$1;(statearr_37431_37456[1] = 12);
} else
{var statearr_37432_37457 = state_37420__$1;(statearr_37432_37457[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 7))
{var inst_37416 = (state_37420[2]);var state_37420__$1 = state_37420;var statearr_37433_37458 = state_37420__$1;(statearr_37433_37458[2] = inst_37416);
(statearr_37433_37458[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 8))
{var inst_37380 = (state_37420[7]);var inst_37388 = (state_37420[10]);var inst_37384 = (state_37420[9]);var inst_37393 = inst_37380.push(inst_37384);var tmp37430 = inst_37380;var inst_37380__$1 = tmp37430;var inst_37381 = inst_37388;var state_37420__$1 = (function (){var statearr_37434 = state_37420;(statearr_37434[7] = inst_37380__$1);
(statearr_37434[8] = inst_37381);
(statearr_37434[11] = inst_37393);
return statearr_37434;
})();var statearr_37435_37459 = state_37420__$1;(statearr_37435_37459[2] = null);
(statearr_37435_37459[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 9))
{var inst_37380 = (state_37420[7]);var inst_37396 = cljs.core.vec.call(null,inst_37380);var state_37420__$1 = state_37420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37420__$1,11,out,inst_37396);
} else
{if((state_val_37421 === 10))
{var inst_37403 = (state_37420[2]);var state_37420__$1 = state_37420;var statearr_37436_37460 = state_37420__$1;(statearr_37436_37460[2] = inst_37403);
(statearr_37436_37460[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 11))
{var inst_37388 = (state_37420[10]);var inst_37384 = (state_37420[9]);var inst_37398 = (state_37420[2]);var inst_37399 = [];var inst_37400 = inst_37399.push(inst_37384);var inst_37380 = inst_37399;var inst_37381 = inst_37388;var state_37420__$1 = (function (){var statearr_37437 = state_37420;(statearr_37437[7] = inst_37380);
(statearr_37437[8] = inst_37381);
(statearr_37437[12] = inst_37398);
(statearr_37437[13] = inst_37400);
return statearr_37437;
})();var statearr_37438_37461 = state_37420__$1;(statearr_37438_37461[2] = null);
(statearr_37438_37461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 12))
{var inst_37380 = (state_37420[7]);var inst_37408 = cljs.core.vec.call(null,inst_37380);var state_37420__$1 = state_37420;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37420__$1,15,out,inst_37408);
} else
{if((state_val_37421 === 13))
{var state_37420__$1 = state_37420;var statearr_37439_37462 = state_37420__$1;(statearr_37439_37462[2] = null);
(statearr_37439_37462[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 14))
{var inst_37413 = (state_37420[2]);var inst_37414 = cljs.core.async.close_BANG_.call(null,out);var state_37420__$1 = (function (){var statearr_37440 = state_37420;(statearr_37440[14] = inst_37413);
return statearr_37440;
})();var statearr_37441_37463 = state_37420__$1;(statearr_37441_37463[2] = inst_37414);
(statearr_37441_37463[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37421 === 15))
{var inst_37410 = (state_37420[2]);var state_37420__$1 = state_37420;var statearr_37442_37464 = state_37420__$1;(statearr_37442_37464[2] = inst_37410);
(statearr_37442_37464[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37446[0] = state_machine__5507__auto__);
(statearr_37446[1] = 1);
return statearr_37446;
});
var state_machine__5507__auto____1 = (function (state_37420){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37420);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37447){if((e37447 instanceof Object))
{var ex__5510__auto__ = e37447;var statearr_37448_37465 = state_37420;(statearr_37448_37465[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37420);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37466 = state_37420;
state_37420 = G__37466;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37420){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37420);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37449 = f__5522__auto__.call(null);(statearr_37449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37450);
return statearr_37449;
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
