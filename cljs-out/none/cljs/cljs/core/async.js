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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t11921 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11921 = (function (f,fn_handler,meta11922){
this.f = f;
this.fn_handler = fn_handler;
this.meta11922 = meta11922;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11921.cljs$lang$type = true;
cljs.core.async.t11921.cljs$lang$ctorStr = "cljs.core.async/t11921";
cljs.core.async.t11921.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11921");
});
cljs.core.async.t11921.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11921.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t11921.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t11921.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11923){var self__ = this;
var _11923__$1 = this;return self__.meta11922;
});
cljs.core.async.t11921.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11923,meta11922__$1){var self__ = this;
var _11923__$1 = this;return (new cljs.core.async.t11921(self__.f,self__.fn_handler,meta11922__$1));
});
cljs.core.async.__GT_t11921 = (function __GT_t11921(f__$1,fn_handler__$1,meta11922){return (new cljs.core.async.t11921(f__$1,fn_handler__$1,meta11922));
});
}
return (new cljs.core.async.t11921(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__11925 = buff;if(G__11925)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__11925.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__11925.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11925);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__11925);
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
{var val_11926 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_11926);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_11926);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___11927 = n;var x_11928 = 0;while(true){
if((x_11928 < n__4248__auto___11927))
{(a[x_11928] = 0);
{
var G__11929 = (x_11928 + 1);
x_11928 = G__11929;
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
var G__11930 = (i + 1);
i = G__11930;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t11934 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11934 = (function (flag,alt_flag,meta11935){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta11935 = meta11935;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11934.cljs$lang$type = true;
cljs.core.async.t11934.cljs$lang$ctorStr = "cljs.core.async/t11934";
cljs.core.async.t11934.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11934");
});
cljs.core.async.t11934.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11934.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t11934.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t11934.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11936){var self__ = this;
var _11936__$1 = this;return self__.meta11935;
});
cljs.core.async.t11934.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11936,meta11935__$1){var self__ = this;
var _11936__$1 = this;return (new cljs.core.async.t11934(self__.flag,self__.alt_flag,meta11935__$1));
});
cljs.core.async.__GT_t11934 = (function __GT_t11934(flag__$1,alt_flag__$1,meta11935){return (new cljs.core.async.t11934(flag__$1,alt_flag__$1,meta11935));
});
}
return (new cljs.core.async.t11934(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t11940 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11940 = (function (cb,flag,alt_handler,meta11941){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta11941 = meta11941;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11940.cljs$lang$type = true;
cljs.core.async.t11940.cljs$lang$ctorStr = "cljs.core.async/t11940";
cljs.core.async.t11940.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11940");
});
cljs.core.async.t11940.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11940.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t11940.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t11940.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11942){var self__ = this;
var _11942__$1 = this;return self__.meta11941;
});
cljs.core.async.t11940.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11942,meta11941__$1){var self__ = this;
var _11942__$1 = this;return (new cljs.core.async.t11940(self__.cb,self__.flag,self__.alt_handler,meta11941__$1));
});
cljs.core.async.__GT_t11940 = (function __GT_t11940(cb__$1,flag__$1,alt_handler__$1,meta11941){return (new cljs.core.async.t11940(cb__$1,flag__$1,alt_handler__$1,meta11941));
});
}
return (new cljs.core.async.t11940(cb,flag,alt_handler,null));
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
return (function (p1__11943_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11943_SHARP_,port], null));
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
var G__11944 = (i + 1);
i = G__11944;
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
var alts_BANG___delegate = function (ports,p__11945){var map__11947 = p__11945;var map__11947__$1 = ((cljs.core.seq_QMARK_.call(null,map__11947))?cljs.core.apply.call(null,cljs.core.hash_map,map__11947):map__11947);var opts = map__11947__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__11945 = null;if (arguments.length > 1) {
  p__11945 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__11945);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__11948){
var ports = cljs.core.first(arglist__11948);
var p__11945 = cljs.core.rest(arglist__11948);
return alts_BANG___delegate(ports,p__11945);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t11956 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11956 = (function (ch,f,map_LT_,meta11957){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11957 = meta11957;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11956.cljs$lang$type = true;
cljs.core.async.t11956.cljs$lang$ctorStr = "cljs.core.async/t11956";
cljs.core.async.t11956.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11956");
});
cljs.core.async.t11956.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11956.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t11956.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11956.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t11959 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11959 = (function (fn1,_,meta11957,ch,f,map_LT_,meta11960){
this.fn1 = fn1;
this._ = _;
this.meta11957 = meta11957;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta11960 = meta11960;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11959.cljs$lang$type = true;
cljs.core.async.t11959.cljs$lang$ctorStr = "cljs.core.async/t11959";
cljs.core.async.t11959.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11959");
});
cljs.core.async.t11959.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t11959.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t11959.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t11959.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__11949_SHARP_){return f1.call(null,(((p1__11949_SHARP_ == null))?null:self__.f.call(null,p1__11949_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t11959.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11961){var self__ = this;
var _11961__$1 = this;return self__.meta11960;
});
cljs.core.async.t11959.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11961,meta11960__$1){var self__ = this;
var _11961__$1 = this;return (new cljs.core.async.t11959(self__.fn1,self__._,self__.meta11957,self__.ch,self__.f,self__.map_LT_,meta11960__$1));
});
cljs.core.async.__GT_t11959 = (function __GT_t11959(fn1__$1,___$2,meta11957__$1,ch__$2,f__$2,map_LT___$2,meta11960){return (new cljs.core.async.t11959(fn1__$1,___$2,meta11957__$1,ch__$2,f__$2,map_LT___$2,meta11960));
});
}
return (new cljs.core.async.t11959(fn1,___$1,self__.meta11957,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t11956.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11956.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11956.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11958){var self__ = this;
var _11958__$1 = this;return self__.meta11957;
});
cljs.core.async.t11956.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11958,meta11957__$1){var self__ = this;
var _11958__$1 = this;return (new cljs.core.async.t11956(self__.ch,self__.f,self__.map_LT_,meta11957__$1));
});
cljs.core.async.__GT_t11956 = (function __GT_t11956(ch__$1,f__$1,map_LT___$1,meta11957){return (new cljs.core.async.t11956(ch__$1,f__$1,map_LT___$1,meta11957));
});
}
return (new cljs.core.async.t11956(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t11965 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11965 = (function (ch,f,map_GT_,meta11966){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta11966 = meta11966;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11965.cljs$lang$type = true;
cljs.core.async.t11965.cljs$lang$ctorStr = "cljs.core.async/t11965";
cljs.core.async.t11965.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11965");
});
cljs.core.async.t11965.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11965.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t11965.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11965.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11965.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11965.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11967){var self__ = this;
var _11967__$1 = this;return self__.meta11966;
});
cljs.core.async.t11965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11967,meta11966__$1){var self__ = this;
var _11967__$1 = this;return (new cljs.core.async.t11965(self__.ch,self__.f,self__.map_GT_,meta11966__$1));
});
cljs.core.async.__GT_t11965 = (function __GT_t11965(ch__$1,f__$1,map_GT___$1,meta11966){return (new cljs.core.async.t11965(ch__$1,f__$1,map_GT___$1,meta11966));
});
}
return (new cljs.core.async.t11965(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t11971 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11971 = (function (ch,p,filter_GT_,meta11972){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta11972 = meta11972;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11971.cljs$lang$type = true;
cljs.core.async.t11971.cljs$lang$ctorStr = "cljs.core.async/t11971";
cljs.core.async.t11971.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t11971");
});
cljs.core.async.t11971.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t11971.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t11971.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t11971.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t11971.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t11971.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t11971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11973){var self__ = this;
var _11973__$1 = this;return self__.meta11972;
});
cljs.core.async.t11971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11973,meta11972__$1){var self__ = this;
var _11973__$1 = this;return (new cljs.core.async.t11971(self__.ch,self__.p,self__.filter_GT_,meta11972__$1));
});
cljs.core.async.__GT_t11971 = (function __GT_t11971(ch__$1,p__$1,filter_GT___$1,meta11972){return (new cljs.core.async.t11971(ch__$1,p__$1,filter_GT___$1,meta11972));
});
}
return (new cljs.core.async.t11971(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___12056 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12035){var state_val_12036 = (state_12035[1]);if((state_val_12036 === 1))
{var state_12035__$1 = state_12035;var statearr_12037_12057 = state_12035__$1;(statearr_12037_12057[2] = null);
(statearr_12037_12057[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 2))
{var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12035__$1,4,ch);
} else
{if((state_val_12036 === 3))
{var inst_12033 = (state_12035[2]);var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12035__$1,inst_12033);
} else
{if((state_val_12036 === 4))
{var inst_12017 = (state_12035[7]);var inst_12017__$1 = (state_12035[2]);var inst_12018 = (inst_12017__$1 == null);var state_12035__$1 = (function (){var statearr_12038 = state_12035;(statearr_12038[7] = inst_12017__$1);
return statearr_12038;
})();if(cljs.core.truth_(inst_12018))
{var statearr_12039_12058 = state_12035__$1;(statearr_12039_12058[1] = 5);
} else
{var statearr_12040_12059 = state_12035__$1;(statearr_12040_12059[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 5))
{var inst_12020 = cljs.core.async.close_BANG_.call(null,out);var state_12035__$1 = state_12035;var statearr_12041_12060 = state_12035__$1;(statearr_12041_12060[2] = inst_12020);
(statearr_12041_12060[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 6))
{var inst_12017 = (state_12035[7]);var inst_12022 = p.call(null,inst_12017);var state_12035__$1 = state_12035;if(cljs.core.truth_(inst_12022))
{var statearr_12042_12061 = state_12035__$1;(statearr_12042_12061[1] = 8);
} else
{var statearr_12043_12062 = state_12035__$1;(statearr_12043_12062[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 7))
{var inst_12031 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12044_12063 = state_12035__$1;(statearr_12044_12063[2] = inst_12031);
(statearr_12044_12063[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 8))
{var inst_12017 = (state_12035[7]);var state_12035__$1 = state_12035;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12035__$1,11,out,inst_12017);
} else
{if((state_val_12036 === 9))
{var state_12035__$1 = state_12035;var statearr_12045_12064 = state_12035__$1;(statearr_12045_12064[2] = null);
(statearr_12045_12064[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 10))
{var inst_12028 = (state_12035[2]);var state_12035__$1 = (function (){var statearr_12046 = state_12035;(statearr_12046[8] = inst_12028);
return statearr_12046;
})();var statearr_12047_12065 = state_12035__$1;(statearr_12047_12065[2] = null);
(statearr_12047_12065[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12036 === 11))
{var inst_12025 = (state_12035[2]);var state_12035__$1 = state_12035;var statearr_12048_12066 = state_12035__$1;(statearr_12048_12066[2] = inst_12025);
(statearr_12048_12066[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_12052 = [null,null,null,null,null,null,null,null,null];(statearr_12052[0] = state_machine__5507__auto__);
(statearr_12052[1] = 1);
return statearr_12052;
});
var state_machine__5507__auto____1 = (function (state_12035){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12035);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12053){if((e12053 instanceof Object))
{var ex__5510__auto__ = e12053;var statearr_12054_12067 = state_12035;(statearr_12054_12067[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12035);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12053;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12068 = state_12035;
state_12035 = G__12068;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12035){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12035);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12055 = f__5522__auto__.call(null);(statearr_12055[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12056);
return statearr_12055;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12220){var state_val_12221 = (state_12220[1]);if((state_val_12221 === 1))
{var state_12220__$1 = state_12220;var statearr_12222_12259 = state_12220__$1;(statearr_12222_12259[2] = null);
(statearr_12222_12259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 2))
{var state_12220__$1 = state_12220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12220__$1,4,in$);
} else
{if((state_val_12221 === 3))
{var inst_12218 = (state_12220[2]);var state_12220__$1 = state_12220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12220__$1,inst_12218);
} else
{if((state_val_12221 === 4))
{var inst_12166 = (state_12220[7]);var inst_12166__$1 = (state_12220[2]);var inst_12167 = (inst_12166__$1 == null);var state_12220__$1 = (function (){var statearr_12223 = state_12220;(statearr_12223[7] = inst_12166__$1);
return statearr_12223;
})();if(cljs.core.truth_(inst_12167))
{var statearr_12224_12260 = state_12220__$1;(statearr_12224_12260[1] = 5);
} else
{var statearr_12225_12261 = state_12220__$1;(statearr_12225_12261[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 5))
{var inst_12169 = cljs.core.async.close_BANG_.call(null,out);var state_12220__$1 = state_12220;var statearr_12226_12262 = state_12220__$1;(statearr_12226_12262[2] = inst_12169);
(statearr_12226_12262[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 6))
{var inst_12166 = (state_12220[7]);var inst_12171 = f.call(null,inst_12166);var inst_12176 = cljs.core.seq.call(null,inst_12171);var inst_12177 = inst_12176;var inst_12178 = null;var inst_12179 = 0;var inst_12180 = 0;var state_12220__$1 = (function (){var statearr_12227 = state_12220;(statearr_12227[8] = inst_12179);
(statearr_12227[9] = inst_12178);
(statearr_12227[10] = inst_12177);
(statearr_12227[11] = inst_12180);
return statearr_12227;
})();var statearr_12228_12263 = state_12220__$1;(statearr_12228_12263[2] = null);
(statearr_12228_12263[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 7))
{var inst_12216 = (state_12220[2]);var state_12220__$1 = state_12220;var statearr_12229_12264 = state_12220__$1;(statearr_12229_12264[2] = inst_12216);
(statearr_12229_12264[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 8))
{var inst_12179 = (state_12220[8]);var inst_12180 = (state_12220[11]);var inst_12182 = (inst_12180 < inst_12179);var inst_12183 = inst_12182;var state_12220__$1 = state_12220;if(cljs.core.truth_(inst_12183))
{var statearr_12230_12265 = state_12220__$1;(statearr_12230_12265[1] = 10);
} else
{var statearr_12231_12266 = state_12220__$1;(statearr_12231_12266[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 9))
{var inst_12213 = (state_12220[2]);var state_12220__$1 = (function (){var statearr_12232 = state_12220;(statearr_12232[12] = inst_12213);
return statearr_12232;
})();var statearr_12233_12267 = state_12220__$1;(statearr_12233_12267[2] = null);
(statearr_12233_12267[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 10))
{var inst_12178 = (state_12220[9]);var inst_12180 = (state_12220[11]);var inst_12185 = cljs.core._nth.call(null,inst_12178,inst_12180);var state_12220__$1 = state_12220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12220__$1,13,out,inst_12185);
} else
{if((state_val_12221 === 11))
{var inst_12191 = (state_12220[13]);var inst_12177 = (state_12220[10]);var inst_12191__$1 = cljs.core.seq.call(null,inst_12177);var state_12220__$1 = (function (){var statearr_12237 = state_12220;(statearr_12237[13] = inst_12191__$1);
return statearr_12237;
})();if(inst_12191__$1)
{var statearr_12238_12268 = state_12220__$1;(statearr_12238_12268[1] = 14);
} else
{var statearr_12239_12269 = state_12220__$1;(statearr_12239_12269[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 12))
{var inst_12211 = (state_12220[2]);var state_12220__$1 = state_12220;var statearr_12240_12270 = state_12220__$1;(statearr_12240_12270[2] = inst_12211);
(statearr_12240_12270[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 13))
{var inst_12179 = (state_12220[8]);var inst_12178 = (state_12220[9]);var inst_12177 = (state_12220[10]);var inst_12180 = (state_12220[11]);var inst_12187 = (state_12220[2]);var inst_12188 = (inst_12180 + 1);var tmp12234 = inst_12179;var tmp12235 = inst_12178;var tmp12236 = inst_12177;var inst_12177__$1 = tmp12236;var inst_12178__$1 = tmp12235;var inst_12179__$1 = tmp12234;var inst_12180__$1 = inst_12188;var state_12220__$1 = (function (){var statearr_12241 = state_12220;(statearr_12241[14] = inst_12187);
(statearr_12241[8] = inst_12179__$1);
(statearr_12241[9] = inst_12178__$1);
(statearr_12241[10] = inst_12177__$1);
(statearr_12241[11] = inst_12180__$1);
return statearr_12241;
})();var statearr_12242_12271 = state_12220__$1;(statearr_12242_12271[2] = null);
(statearr_12242_12271[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 14))
{var inst_12191 = (state_12220[13]);var inst_12193 = cljs.core.chunked_seq_QMARK_.call(null,inst_12191);var state_12220__$1 = state_12220;if(inst_12193)
{var statearr_12243_12272 = state_12220__$1;(statearr_12243_12272[1] = 17);
} else
{var statearr_12244_12273 = state_12220__$1;(statearr_12244_12273[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 15))
{var state_12220__$1 = state_12220;var statearr_12245_12274 = state_12220__$1;(statearr_12245_12274[2] = null);
(statearr_12245_12274[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 16))
{var inst_12209 = (state_12220[2]);var state_12220__$1 = state_12220;var statearr_12246_12275 = state_12220__$1;(statearr_12246_12275[2] = inst_12209);
(statearr_12246_12275[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 17))
{var inst_12191 = (state_12220[13]);var inst_12195 = cljs.core.chunk_first.call(null,inst_12191);var inst_12196 = cljs.core.chunk_rest.call(null,inst_12191);var inst_12197 = cljs.core.count.call(null,inst_12195);var inst_12177 = inst_12196;var inst_12178 = inst_12195;var inst_12179 = inst_12197;var inst_12180 = 0;var state_12220__$1 = (function (){var statearr_12247 = state_12220;(statearr_12247[8] = inst_12179);
(statearr_12247[9] = inst_12178);
(statearr_12247[10] = inst_12177);
(statearr_12247[11] = inst_12180);
return statearr_12247;
})();var statearr_12248_12276 = state_12220__$1;(statearr_12248_12276[2] = null);
(statearr_12248_12276[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 18))
{var inst_12191 = (state_12220[13]);var inst_12200 = cljs.core.first.call(null,inst_12191);var state_12220__$1 = state_12220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12220__$1,20,out,inst_12200);
} else
{if((state_val_12221 === 19))
{var inst_12206 = (state_12220[2]);var state_12220__$1 = state_12220;var statearr_12249_12277 = state_12220__$1;(statearr_12249_12277[2] = inst_12206);
(statearr_12249_12277[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12221 === 20))
{var inst_12191 = (state_12220[13]);var inst_12202 = (state_12220[2]);var inst_12203 = cljs.core.next.call(null,inst_12191);var inst_12177 = inst_12203;var inst_12178 = null;var inst_12179 = 0;var inst_12180 = 0;var state_12220__$1 = (function (){var statearr_12250 = state_12220;(statearr_12250[8] = inst_12179);
(statearr_12250[9] = inst_12178);
(statearr_12250[10] = inst_12177);
(statearr_12250[11] = inst_12180);
(statearr_12250[15] = inst_12202);
return statearr_12250;
})();var statearr_12251_12278 = state_12220__$1;(statearr_12251_12278[2] = null);
(statearr_12251_12278[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_12255 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12255[0] = state_machine__5507__auto__);
(statearr_12255[1] = 1);
return statearr_12255;
});
var state_machine__5507__auto____1 = (function (state_12220){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12220);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12256){if((e12256 instanceof Object))
{var ex__5510__auto__ = e12256;var statearr_12257_12279 = state_12220;(statearr_12257_12279[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12220);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12256;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12280 = state_12220;
state_12220 = G__12280;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12220){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12258 = f__5522__auto__.call(null);(statearr_12258[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12258;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___12361 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12340){var state_val_12341 = (state_12340[1]);if((state_val_12341 === 1))
{var state_12340__$1 = state_12340;var statearr_12342_12362 = state_12340__$1;(statearr_12342_12362[2] = null);
(statearr_12342_12362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12341 === 2))
{var state_12340__$1 = state_12340;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12340__$1,4,from);
} else
{if((state_val_12341 === 3))
{var inst_12338 = (state_12340[2]);var state_12340__$1 = state_12340;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12340__$1,inst_12338);
} else
{if((state_val_12341 === 4))
{var inst_12323 = (state_12340[7]);var inst_12323__$1 = (state_12340[2]);var inst_12324 = (inst_12323__$1 == null);var state_12340__$1 = (function (){var statearr_12343 = state_12340;(statearr_12343[7] = inst_12323__$1);
return statearr_12343;
})();if(cljs.core.truth_(inst_12324))
{var statearr_12344_12363 = state_12340__$1;(statearr_12344_12363[1] = 5);
} else
{var statearr_12345_12364 = state_12340__$1;(statearr_12345_12364[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12341 === 5))
{var state_12340__$1 = state_12340;if(cljs.core.truth_(close_QMARK_))
{var statearr_12346_12365 = state_12340__$1;(statearr_12346_12365[1] = 8);
} else
{var statearr_12347_12366 = state_12340__$1;(statearr_12347_12366[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12341 === 6))
{var inst_12323 = (state_12340[7]);var state_12340__$1 = state_12340;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12340__$1,11,to,inst_12323);
} else
{if((state_val_12341 === 7))
{var inst_12336 = (state_12340[2]);var state_12340__$1 = state_12340;var statearr_12348_12367 = state_12340__$1;(statearr_12348_12367[2] = inst_12336);
(statearr_12348_12367[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12341 === 8))
{var inst_12327 = cljs.core.async.close_BANG_.call(null,to);var state_12340__$1 = state_12340;var statearr_12349_12368 = state_12340__$1;(statearr_12349_12368[2] = inst_12327);
(statearr_12349_12368[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12341 === 9))
{var state_12340__$1 = state_12340;var statearr_12350_12369 = state_12340__$1;(statearr_12350_12369[2] = null);
(statearr_12350_12369[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12341 === 10))
{var inst_12330 = (state_12340[2]);var state_12340__$1 = state_12340;var statearr_12351_12370 = state_12340__$1;(statearr_12351_12370[2] = inst_12330);
(statearr_12351_12370[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12341 === 11))
{var inst_12333 = (state_12340[2]);var state_12340__$1 = (function (){var statearr_12352 = state_12340;(statearr_12352[8] = inst_12333);
return statearr_12352;
})();var statearr_12353_12371 = state_12340__$1;(statearr_12353_12371[2] = null);
(statearr_12353_12371[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12357 = [null,null,null,null,null,null,null,null,null];(statearr_12357[0] = state_machine__5507__auto__);
(statearr_12357[1] = 1);
return statearr_12357;
});
var state_machine__5507__auto____1 = (function (state_12340){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12340);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12358){if((e12358 instanceof Object))
{var ex__5510__auto__ = e12358;var statearr_12359_12372 = state_12340;(statearr_12359_12372[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12340);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12373 = state_12340;
state_12340 = G__12373;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12340){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12340);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12360 = f__5522__auto__.call(null);(statearr_12360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12361);
return statearr_12360;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___12460 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12438){var state_val_12439 = (state_12438[1]);if((state_val_12439 === 1))
{var state_12438__$1 = state_12438;var statearr_12440_12461 = state_12438__$1;(statearr_12440_12461[2] = null);
(statearr_12440_12461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 2))
{var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12438__$1,4,ch);
} else
{if((state_val_12439 === 3))
{var inst_12436 = (state_12438[2]);var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12438__$1,inst_12436);
} else
{if((state_val_12439 === 4))
{var inst_12419 = (state_12438[7]);var inst_12419__$1 = (state_12438[2]);var inst_12420 = (inst_12419__$1 == null);var state_12438__$1 = (function (){var statearr_12441 = state_12438;(statearr_12441[7] = inst_12419__$1);
return statearr_12441;
})();if(cljs.core.truth_(inst_12420))
{var statearr_12442_12462 = state_12438__$1;(statearr_12442_12462[1] = 5);
} else
{var statearr_12443_12463 = state_12438__$1;(statearr_12443_12463[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 5))
{var inst_12422 = cljs.core.async.close_BANG_.call(null,tc);var inst_12423 = cljs.core.async.close_BANG_.call(null,fc);var state_12438__$1 = (function (){var statearr_12444 = state_12438;(statearr_12444[8] = inst_12422);
return statearr_12444;
})();var statearr_12445_12464 = state_12438__$1;(statearr_12445_12464[2] = inst_12423);
(statearr_12445_12464[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 6))
{var inst_12419 = (state_12438[7]);var inst_12425 = p.call(null,inst_12419);var state_12438__$1 = state_12438;if(cljs.core.truth_(inst_12425))
{var statearr_12446_12465 = state_12438__$1;(statearr_12446_12465[1] = 9);
} else
{var statearr_12447_12466 = state_12438__$1;(statearr_12447_12466[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 7))
{var inst_12434 = (state_12438[2]);var state_12438__$1 = state_12438;var statearr_12448_12467 = state_12438__$1;(statearr_12448_12467[2] = inst_12434);
(statearr_12448_12467[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 8))
{var inst_12431 = (state_12438[2]);var state_12438__$1 = (function (){var statearr_12449 = state_12438;(statearr_12449[9] = inst_12431);
return statearr_12449;
})();var statearr_12450_12468 = state_12438__$1;(statearr_12450_12468[2] = null);
(statearr_12450_12468[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 9))
{var state_12438__$1 = state_12438;var statearr_12451_12469 = state_12438__$1;(statearr_12451_12469[2] = tc);
(statearr_12451_12469[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 10))
{var state_12438__$1 = state_12438;var statearr_12452_12470 = state_12438__$1;(statearr_12452_12470[2] = fc);
(statearr_12452_12470[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12439 === 11))
{var inst_12419 = (state_12438[7]);var inst_12429 = (state_12438[2]);var state_12438__$1 = state_12438;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12438__$1,8,inst_12429,inst_12419);
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
var state_machine__5507__auto____0 = (function (){var statearr_12456 = [null,null,null,null,null,null,null,null,null,null];(statearr_12456[0] = state_machine__5507__auto__);
(statearr_12456[1] = 1);
return statearr_12456;
});
var state_machine__5507__auto____1 = (function (state_12438){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12438);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12457){if((e12457 instanceof Object))
{var ex__5510__auto__ = e12457;var statearr_12458_12471 = state_12438;(statearr_12458_12471[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12438);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12457;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12472 = state_12438;
state_12438 = G__12472;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12438){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12438);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12459 = f__5522__auto__.call(null);(statearr_12459[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___12460);
return statearr_12459;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12519){var state_val_12520 = (state_12519[1]);if((state_val_12520 === 7))
{var inst_12515 = (state_12519[2]);var state_12519__$1 = state_12519;var statearr_12521_12537 = state_12519__$1;(statearr_12521_12537[2] = inst_12515);
(statearr_12521_12537[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12520 === 6))
{var inst_12505 = (state_12519[7]);var inst_12508 = (state_12519[8]);var inst_12512 = f.call(null,inst_12505,inst_12508);var inst_12505__$1 = inst_12512;var state_12519__$1 = (function (){var statearr_12522 = state_12519;(statearr_12522[7] = inst_12505__$1);
return statearr_12522;
})();var statearr_12523_12538 = state_12519__$1;(statearr_12523_12538[2] = null);
(statearr_12523_12538[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12520 === 5))
{var inst_12505 = (state_12519[7]);var state_12519__$1 = state_12519;var statearr_12524_12539 = state_12519__$1;(statearr_12524_12539[2] = inst_12505);
(statearr_12524_12539[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12520 === 4))
{var inst_12508 = (state_12519[8]);var inst_12508__$1 = (state_12519[2]);var inst_12509 = (inst_12508__$1 == null);var state_12519__$1 = (function (){var statearr_12525 = state_12519;(statearr_12525[8] = inst_12508__$1);
return statearr_12525;
})();if(cljs.core.truth_(inst_12509))
{var statearr_12526_12540 = state_12519__$1;(statearr_12526_12540[1] = 5);
} else
{var statearr_12527_12541 = state_12519__$1;(statearr_12527_12541[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12520 === 3))
{var inst_12517 = (state_12519[2]);var state_12519__$1 = state_12519;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12519__$1,inst_12517);
} else
{if((state_val_12520 === 2))
{var state_12519__$1 = state_12519;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12519__$1,4,ch);
} else
{if((state_val_12520 === 1))
{var inst_12505 = init;var state_12519__$1 = (function (){var statearr_12528 = state_12519;(statearr_12528[7] = inst_12505);
return statearr_12528;
})();var statearr_12529_12542 = state_12519__$1;(statearr_12529_12542[2] = null);
(statearr_12529_12542[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_12533 = [null,null,null,null,null,null,null,null,null];(statearr_12533[0] = state_machine__5507__auto__);
(statearr_12533[1] = 1);
return statearr_12533;
});
var state_machine__5507__auto____1 = (function (state_12519){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12519);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12534){if((e12534 instanceof Object))
{var ex__5510__auto__ = e12534;var statearr_12535_12543 = state_12519;(statearr_12535_12543[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12519);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12534;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12544 = state_12519;
state_12519 = G__12544;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12519){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12519);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12536 = f__5522__auto__.call(null);(statearr_12536[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12536;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_12606){var state_val_12607 = (state_12606[1]);if((state_val_12607 === 1))
{var inst_12586 = cljs.core.seq.call(null,coll);var inst_12587 = inst_12586;var state_12606__$1 = (function (){var statearr_12608 = state_12606;(statearr_12608[7] = inst_12587);
return statearr_12608;
})();var statearr_12609_12627 = state_12606__$1;(statearr_12609_12627[2] = null);
(statearr_12609_12627[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12607 === 2))
{var inst_12587 = (state_12606[7]);var state_12606__$1 = state_12606;if(cljs.core.truth_(inst_12587))
{var statearr_12610_12628 = state_12606__$1;(statearr_12610_12628[1] = 4);
} else
{var statearr_12611_12629 = state_12606__$1;(statearr_12611_12629[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12607 === 3))
{var inst_12604 = (state_12606[2]);var state_12606__$1 = state_12606;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12606__$1,inst_12604);
} else
{if((state_val_12607 === 4))
{var inst_12587 = (state_12606[7]);var inst_12590 = cljs.core.first.call(null,inst_12587);var state_12606__$1 = state_12606;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12606__$1,7,ch,inst_12590);
} else
{if((state_val_12607 === 5))
{var state_12606__$1 = state_12606;if(cljs.core.truth_(close_QMARK_))
{var statearr_12612_12630 = state_12606__$1;(statearr_12612_12630[1] = 8);
} else
{var statearr_12613_12631 = state_12606__$1;(statearr_12613_12631[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12607 === 6))
{var inst_12602 = (state_12606[2]);var state_12606__$1 = state_12606;var statearr_12614_12632 = state_12606__$1;(statearr_12614_12632[2] = inst_12602);
(statearr_12614_12632[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12607 === 7))
{var inst_12587 = (state_12606[7]);var inst_12592 = (state_12606[2]);var inst_12593 = cljs.core.next.call(null,inst_12587);var inst_12587__$1 = inst_12593;var state_12606__$1 = (function (){var statearr_12615 = state_12606;(statearr_12615[8] = inst_12592);
(statearr_12615[7] = inst_12587__$1);
return statearr_12615;
})();var statearr_12616_12633 = state_12606__$1;(statearr_12616_12633[2] = null);
(statearr_12616_12633[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12607 === 8))
{var inst_12597 = cljs.core.async.close_BANG_.call(null,ch);var state_12606__$1 = state_12606;var statearr_12617_12634 = state_12606__$1;(statearr_12617_12634[2] = inst_12597);
(statearr_12617_12634[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12607 === 9))
{var state_12606__$1 = state_12606;var statearr_12618_12635 = state_12606__$1;(statearr_12618_12635[2] = null);
(statearr_12618_12635[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_12607 === 10))
{var inst_12600 = (state_12606[2]);var state_12606__$1 = state_12606;var statearr_12619_12636 = state_12606__$1;(statearr_12619_12636[2] = inst_12600);
(statearr_12619_12636[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_12623 = [null,null,null,null,null,null,null,null,null];(statearr_12623[0] = state_machine__5507__auto__);
(statearr_12623[1] = 1);
return statearr_12623;
});
var state_machine__5507__auto____1 = (function (state_12606){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_12606);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e12624){if((e12624 instanceof Object))
{var ex__5510__auto__ = e12624;var statearr_12625_12637 = state_12606;(statearr_12625_12637[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12606);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e12624;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__12638 = state_12606;
state_12606 = G__12638;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_12606){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_12606);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_12626 = f__5522__auto__.call(null);(statearr_12626[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_12626;
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
cljs.core.async.Mux = (function (){var obj12640 = {};return obj12640;
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
cljs.core.async.Mult = (function (){var obj12642 = {};return obj12642;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t12866 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t12866 = (function (cs,ch,mult,meta12867){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta12867 = meta12867;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t12866.cljs$lang$type = true;
cljs.core.async.t12866.cljs$lang$ctorStr = "cljs.core.async/t12866";
cljs.core.async.t12866.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t12866");
});})(cs))
;
cljs.core.async.t12866.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t12866.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t12866.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t12866.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t12866.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t12866.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t12866.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_12868){var self__ = this;
var _12868__$1 = this;return self__.meta12867;
});})(cs))
;
cljs.core.async.t12866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_12868,meta12867__$1){var self__ = this;
var _12868__$1 = this;return (new cljs.core.async.t12866(self__.cs,self__.ch,self__.mult,meta12867__$1));
});})(cs))
;
cljs.core.async.__GT_t12866 = ((function (cs){
return (function __GT_t12866(cs__$1,ch__$1,mult__$1,meta12867){return (new cljs.core.async.t12866(cs__$1,ch__$1,mult__$1,meta12867));
});})(cs))
;
}
return (new cljs.core.async.t12866(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___13089 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13003){var state_val_13004 = (state_13003[1]);if((state_val_13004 === 32))
{var inst_12871 = (state_13003[7]);var inst_12947 = (state_13003[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13003,31,Object,null,30);var inst_12954 = cljs.core.async.put_BANG_.call(null,inst_12947,inst_12871,done);var state_13003__$1 = state_13003;var statearr_13005_13090 = state_13003__$1;(statearr_13005_13090[2] = inst_12954);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13003__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 1))
{var state_13003__$1 = state_13003;var statearr_13006_13091 = state_13003__$1;(statearr_13006_13091[2] = null);
(statearr_13006_13091[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 33))
{var inst_12960 = (state_13003[9]);var inst_12962 = cljs.core.chunked_seq_QMARK_.call(null,inst_12960);var state_13003__$1 = state_13003;if(inst_12962)
{var statearr_13007_13092 = state_13003__$1;(statearr_13007_13092[1] = 36);
} else
{var statearr_13008_13093 = state_13003__$1;(statearr_13008_13093[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 2))
{var state_13003__$1 = state_13003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13003__$1,4,ch);
} else
{if((state_val_13004 === 34))
{var state_13003__$1 = state_13003;var statearr_13009_13094 = state_13003__$1;(statearr_13009_13094[2] = null);
(statearr_13009_13094[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 3))
{var inst_13001 = (state_13003[2]);var state_13003__$1 = state_13003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13003__$1,inst_13001);
} else
{if((state_val_13004 === 35))
{var inst_12985 = (state_13003[2]);var state_13003__$1 = state_13003;var statearr_13010_13095 = state_13003__$1;(statearr_13010_13095[2] = inst_12985);
(statearr_13010_13095[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 4))
{var inst_12871 = (state_13003[7]);var inst_12871__$1 = (state_13003[2]);var inst_12872 = (inst_12871__$1 == null);var state_13003__$1 = (function (){var statearr_13011 = state_13003;(statearr_13011[7] = inst_12871__$1);
return statearr_13011;
})();if(cljs.core.truth_(inst_12872))
{var statearr_13012_13096 = state_13003__$1;(statearr_13012_13096[1] = 5);
} else
{var statearr_13013_13097 = state_13003__$1;(statearr_13013_13097[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 36))
{var inst_12960 = (state_13003[9]);var inst_12964 = cljs.core.chunk_first.call(null,inst_12960);var inst_12965 = cljs.core.chunk_rest.call(null,inst_12960);var inst_12966 = cljs.core.count.call(null,inst_12964);var inst_12939 = inst_12965;var inst_12940 = inst_12964;var inst_12941 = inst_12966;var inst_12942 = 0;var state_13003__$1 = (function (){var statearr_13014 = state_13003;(statearr_13014[10] = inst_12941);
(statearr_13014[11] = inst_12942);
(statearr_13014[12] = inst_12940);
(statearr_13014[13] = inst_12939);
return statearr_13014;
})();var statearr_13015_13098 = state_13003__$1;(statearr_13015_13098[2] = null);
(statearr_13015_13098[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 5))
{var inst_12878 = cljs.core.deref.call(null,cs);var inst_12879 = cljs.core.seq.call(null,inst_12878);var inst_12880 = inst_12879;var inst_12881 = null;var inst_12882 = 0;var inst_12883 = 0;var state_13003__$1 = (function (){var statearr_13016 = state_13003;(statearr_13016[14] = inst_12880);
(statearr_13016[15] = inst_12881);
(statearr_13016[16] = inst_12883);
(statearr_13016[17] = inst_12882);
return statearr_13016;
})();var statearr_13017_13099 = state_13003__$1;(statearr_13017_13099[2] = null);
(statearr_13017_13099[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 37))
{var inst_12960 = (state_13003[9]);var inst_12969 = cljs.core.first.call(null,inst_12960);var state_13003__$1 = (function (){var statearr_13018 = state_13003;(statearr_13018[18] = inst_12969);
return statearr_13018;
})();var statearr_13019_13100 = state_13003__$1;(statearr_13019_13100[2] = null);
(statearr_13019_13100[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 6))
{var inst_12931 = (state_13003[19]);var inst_12930 = cljs.core.deref.call(null,cs);var inst_12931__$1 = cljs.core.keys.call(null,inst_12930);var inst_12932 = cljs.core.count.call(null,inst_12931__$1);var inst_12933 = cljs.core.reset_BANG_.call(null,dctr,inst_12932);var inst_12938 = cljs.core.seq.call(null,inst_12931__$1);var inst_12939 = inst_12938;var inst_12940 = null;var inst_12941 = 0;var inst_12942 = 0;var state_13003__$1 = (function (){var statearr_13020 = state_13003;(statearr_13020[10] = inst_12941);
(statearr_13020[11] = inst_12942);
(statearr_13020[12] = inst_12940);
(statearr_13020[19] = inst_12931__$1);
(statearr_13020[20] = inst_12933);
(statearr_13020[13] = inst_12939);
return statearr_13020;
})();var statearr_13021_13101 = state_13003__$1;(statearr_13021_13101[2] = null);
(statearr_13021_13101[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 38))
{var inst_12982 = (state_13003[2]);var state_13003__$1 = state_13003;var statearr_13022_13102 = state_13003__$1;(statearr_13022_13102[2] = inst_12982);
(statearr_13022_13102[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 7))
{var inst_12999 = (state_13003[2]);var state_13003__$1 = state_13003;var statearr_13023_13103 = state_13003__$1;(statearr_13023_13103[2] = inst_12999);
(statearr_13023_13103[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 39))
{var inst_12960 = (state_13003[9]);var inst_12978 = (state_13003[2]);var inst_12979 = cljs.core.next.call(null,inst_12960);var inst_12939 = inst_12979;var inst_12940 = null;var inst_12941 = 0;var inst_12942 = 0;var state_13003__$1 = (function (){var statearr_13024 = state_13003;(statearr_13024[10] = inst_12941);
(statearr_13024[11] = inst_12942);
(statearr_13024[12] = inst_12940);
(statearr_13024[21] = inst_12978);
(statearr_13024[13] = inst_12939);
return statearr_13024;
})();var statearr_13025_13104 = state_13003__$1;(statearr_13025_13104[2] = null);
(statearr_13025_13104[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 8))
{var inst_12883 = (state_13003[16]);var inst_12882 = (state_13003[17]);var inst_12885 = (inst_12883 < inst_12882);var inst_12886 = inst_12885;var state_13003__$1 = state_13003;if(cljs.core.truth_(inst_12886))
{var statearr_13026_13105 = state_13003__$1;(statearr_13026_13105[1] = 10);
} else
{var statearr_13027_13106 = state_13003__$1;(statearr_13027_13106[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 40))
{var inst_12969 = (state_13003[18]);var inst_12970 = (state_13003[2]);var inst_12971 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12972 = cljs.core.async.untap_STAR_.call(null,m,inst_12969);var state_13003__$1 = (function (){var statearr_13028 = state_13003;(statearr_13028[22] = inst_12971);
(statearr_13028[23] = inst_12970);
return statearr_13028;
})();var statearr_13029_13107 = state_13003__$1;(statearr_13029_13107[2] = inst_12972);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13003__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 9))
{var inst_12928 = (state_13003[2]);var state_13003__$1 = state_13003;var statearr_13030_13108 = state_13003__$1;(statearr_13030_13108[2] = inst_12928);
(statearr_13030_13108[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 41))
{var inst_12871 = (state_13003[7]);var inst_12969 = (state_13003[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13003,40,Object,null,39);var inst_12976 = cljs.core.async.put_BANG_.call(null,inst_12969,inst_12871,done);var state_13003__$1 = state_13003;var statearr_13031_13109 = state_13003__$1;(statearr_13031_13109[2] = inst_12976);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13003__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 10))
{var inst_12881 = (state_13003[15]);var inst_12883 = (state_13003[16]);var inst_12889 = cljs.core._nth.call(null,inst_12881,inst_12883);var inst_12890 = cljs.core.nth.call(null,inst_12889,0,null);var inst_12891 = cljs.core.nth.call(null,inst_12889,1,null);var state_13003__$1 = (function (){var statearr_13032 = state_13003;(statearr_13032[24] = inst_12890);
return statearr_13032;
})();if(cljs.core.truth_(inst_12891))
{var statearr_13033_13110 = state_13003__$1;(statearr_13033_13110[1] = 13);
} else
{var statearr_13034_13111 = state_13003__$1;(statearr_13034_13111[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 42))
{var state_13003__$1 = state_13003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13003__$1,45,dchan);
} else
{if((state_val_13004 === 11))
{var inst_12900 = (state_13003[25]);var inst_12880 = (state_13003[14]);var inst_12900__$1 = cljs.core.seq.call(null,inst_12880);var state_13003__$1 = (function (){var statearr_13035 = state_13003;(statearr_13035[25] = inst_12900__$1);
return statearr_13035;
})();if(inst_12900__$1)
{var statearr_13036_13112 = state_13003__$1;(statearr_13036_13112[1] = 16);
} else
{var statearr_13037_13113 = state_13003__$1;(statearr_13037_13113[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 43))
{var state_13003__$1 = state_13003;var statearr_13038_13114 = state_13003__$1;(statearr_13038_13114[2] = null);
(statearr_13038_13114[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 12))
{var inst_12926 = (state_13003[2]);var state_13003__$1 = state_13003;var statearr_13039_13115 = state_13003__$1;(statearr_13039_13115[2] = inst_12926);
(statearr_13039_13115[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 44))
{var inst_12996 = (state_13003[2]);var state_13003__$1 = (function (){var statearr_13040 = state_13003;(statearr_13040[26] = inst_12996);
return statearr_13040;
})();var statearr_13041_13116 = state_13003__$1;(statearr_13041_13116[2] = null);
(statearr_13041_13116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 13))
{var inst_12890 = (state_13003[24]);var inst_12893 = cljs.core.async.close_BANG_.call(null,inst_12890);var state_13003__$1 = state_13003;var statearr_13042_13117 = state_13003__$1;(statearr_13042_13117[2] = inst_12893);
(statearr_13042_13117[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 45))
{var inst_12993 = (state_13003[2]);var state_13003__$1 = state_13003;var statearr_13046_13118 = state_13003__$1;(statearr_13046_13118[2] = inst_12993);
(statearr_13046_13118[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 14))
{var state_13003__$1 = state_13003;var statearr_13047_13119 = state_13003__$1;(statearr_13047_13119[2] = null);
(statearr_13047_13119[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 15))
{var inst_12880 = (state_13003[14]);var inst_12881 = (state_13003[15]);var inst_12883 = (state_13003[16]);var inst_12882 = (state_13003[17]);var inst_12896 = (state_13003[2]);var inst_12897 = (inst_12883 + 1);var tmp13043 = inst_12880;var tmp13044 = inst_12881;var tmp13045 = inst_12882;var inst_12880__$1 = tmp13043;var inst_12881__$1 = tmp13044;var inst_12882__$1 = tmp13045;var inst_12883__$1 = inst_12897;var state_13003__$1 = (function (){var statearr_13048 = state_13003;(statearr_13048[14] = inst_12880__$1);
(statearr_13048[15] = inst_12881__$1);
(statearr_13048[27] = inst_12896);
(statearr_13048[16] = inst_12883__$1);
(statearr_13048[17] = inst_12882__$1);
return statearr_13048;
})();var statearr_13049_13120 = state_13003__$1;(statearr_13049_13120[2] = null);
(statearr_13049_13120[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 16))
{var inst_12900 = (state_13003[25]);var inst_12902 = cljs.core.chunked_seq_QMARK_.call(null,inst_12900);var state_13003__$1 = state_13003;if(inst_12902)
{var statearr_13050_13121 = state_13003__$1;(statearr_13050_13121[1] = 19);
} else
{var statearr_13051_13122 = state_13003__$1;(statearr_13051_13122[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 17))
{var state_13003__$1 = state_13003;var statearr_13052_13123 = state_13003__$1;(statearr_13052_13123[2] = null);
(statearr_13052_13123[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 18))
{var inst_12924 = (state_13003[2]);var state_13003__$1 = state_13003;var statearr_13053_13124 = state_13003__$1;(statearr_13053_13124[2] = inst_12924);
(statearr_13053_13124[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 19))
{var inst_12900 = (state_13003[25]);var inst_12904 = cljs.core.chunk_first.call(null,inst_12900);var inst_12905 = cljs.core.chunk_rest.call(null,inst_12900);var inst_12906 = cljs.core.count.call(null,inst_12904);var inst_12880 = inst_12905;var inst_12881 = inst_12904;var inst_12882 = inst_12906;var inst_12883 = 0;var state_13003__$1 = (function (){var statearr_13054 = state_13003;(statearr_13054[14] = inst_12880);
(statearr_13054[15] = inst_12881);
(statearr_13054[16] = inst_12883);
(statearr_13054[17] = inst_12882);
return statearr_13054;
})();var statearr_13055_13125 = state_13003__$1;(statearr_13055_13125[2] = null);
(statearr_13055_13125[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 20))
{var inst_12900 = (state_13003[25]);var inst_12910 = cljs.core.first.call(null,inst_12900);var inst_12911 = cljs.core.nth.call(null,inst_12910,0,null);var inst_12912 = cljs.core.nth.call(null,inst_12910,1,null);var state_13003__$1 = (function (){var statearr_13056 = state_13003;(statearr_13056[28] = inst_12911);
return statearr_13056;
})();if(cljs.core.truth_(inst_12912))
{var statearr_13057_13126 = state_13003__$1;(statearr_13057_13126[1] = 22);
} else
{var statearr_13058_13127 = state_13003__$1;(statearr_13058_13127[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 21))
{var inst_12921 = (state_13003[2]);var state_13003__$1 = state_13003;var statearr_13059_13128 = state_13003__$1;(statearr_13059_13128[2] = inst_12921);
(statearr_13059_13128[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 22))
{var inst_12911 = (state_13003[28]);var inst_12914 = cljs.core.async.close_BANG_.call(null,inst_12911);var state_13003__$1 = state_13003;var statearr_13060_13129 = state_13003__$1;(statearr_13060_13129[2] = inst_12914);
(statearr_13060_13129[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 23))
{var state_13003__$1 = state_13003;var statearr_13061_13130 = state_13003__$1;(statearr_13061_13130[2] = null);
(statearr_13061_13130[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 24))
{var inst_12900 = (state_13003[25]);var inst_12917 = (state_13003[2]);var inst_12918 = cljs.core.next.call(null,inst_12900);var inst_12880 = inst_12918;var inst_12881 = null;var inst_12882 = 0;var inst_12883 = 0;var state_13003__$1 = (function (){var statearr_13062 = state_13003;(statearr_13062[29] = inst_12917);
(statearr_13062[14] = inst_12880);
(statearr_13062[15] = inst_12881);
(statearr_13062[16] = inst_12883);
(statearr_13062[17] = inst_12882);
return statearr_13062;
})();var statearr_13063_13131 = state_13003__$1;(statearr_13063_13131[2] = null);
(statearr_13063_13131[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 25))
{var inst_12941 = (state_13003[10]);var inst_12942 = (state_13003[11]);var inst_12944 = (inst_12942 < inst_12941);var inst_12945 = inst_12944;var state_13003__$1 = state_13003;if(cljs.core.truth_(inst_12945))
{var statearr_13064_13132 = state_13003__$1;(statearr_13064_13132[1] = 27);
} else
{var statearr_13065_13133 = state_13003__$1;(statearr_13065_13133[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 26))
{var inst_12931 = (state_13003[19]);var inst_12989 = (state_13003[2]);var inst_12990 = cljs.core.seq.call(null,inst_12931);var state_13003__$1 = (function (){var statearr_13066 = state_13003;(statearr_13066[30] = inst_12989);
return statearr_13066;
})();if(inst_12990)
{var statearr_13067_13134 = state_13003__$1;(statearr_13067_13134[1] = 42);
} else
{var statearr_13068_13135 = state_13003__$1;(statearr_13068_13135[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 27))
{var inst_12942 = (state_13003[11]);var inst_12940 = (state_13003[12]);var inst_12947 = cljs.core._nth.call(null,inst_12940,inst_12942);var state_13003__$1 = (function (){var statearr_13069 = state_13003;(statearr_13069[8] = inst_12947);
return statearr_13069;
})();var statearr_13070_13136 = state_13003__$1;(statearr_13070_13136[2] = null);
(statearr_13070_13136[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 28))
{var inst_12939 = (state_13003[13]);var inst_12960 = (state_13003[9]);var inst_12960__$1 = cljs.core.seq.call(null,inst_12939);var state_13003__$1 = (function (){var statearr_13074 = state_13003;(statearr_13074[9] = inst_12960__$1);
return statearr_13074;
})();if(inst_12960__$1)
{var statearr_13075_13137 = state_13003__$1;(statearr_13075_13137[1] = 33);
} else
{var statearr_13076_13138 = state_13003__$1;(statearr_13076_13138[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 29))
{var inst_12987 = (state_13003[2]);var state_13003__$1 = state_13003;var statearr_13077_13139 = state_13003__$1;(statearr_13077_13139[2] = inst_12987);
(statearr_13077_13139[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 30))
{var inst_12941 = (state_13003[10]);var inst_12942 = (state_13003[11]);var inst_12940 = (state_13003[12]);var inst_12939 = (state_13003[13]);var inst_12956 = (state_13003[2]);var inst_12957 = (inst_12942 + 1);var tmp13071 = inst_12941;var tmp13072 = inst_12940;var tmp13073 = inst_12939;var inst_12939__$1 = tmp13073;var inst_12940__$1 = tmp13072;var inst_12941__$1 = tmp13071;var inst_12942__$1 = inst_12957;var state_13003__$1 = (function (){var statearr_13078 = state_13003;(statearr_13078[31] = inst_12956);
(statearr_13078[10] = inst_12941__$1);
(statearr_13078[11] = inst_12942__$1);
(statearr_13078[12] = inst_12940__$1);
(statearr_13078[13] = inst_12939__$1);
return statearr_13078;
})();var statearr_13079_13140 = state_13003__$1;(statearr_13079_13140[2] = null);
(statearr_13079_13140[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13004 === 31))
{var inst_12947 = (state_13003[8]);var inst_12948 = (state_13003[2]);var inst_12949 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_12950 = cljs.core.async.untap_STAR_.call(null,m,inst_12947);var state_13003__$1 = (function (){var statearr_13080 = state_13003;(statearr_13080[32] = inst_12948);
(statearr_13080[33] = inst_12949);
return statearr_13080;
})();var statearr_13081_13141 = state_13003__$1;(statearr_13081_13141[2] = inst_12950);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13003__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13085 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13085[0] = state_machine__5507__auto__);
(statearr_13085[1] = 1);
return statearr_13085;
});
var state_machine__5507__auto____1 = (function (state_13003){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13003);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13086){if((e13086 instanceof Object))
{var ex__5510__auto__ = e13086;var statearr_13087_13142 = state_13003;(statearr_13087_13142[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13003);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13086;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13143 = state_13003;
state_13003 = G__13143;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13003){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13088 = f__5522__auto__.call(null);(statearr_13088[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13089);
return statearr_13088;
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
cljs.core.async.Mix = (function (){var obj13145 = {};return obj13145;
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
;var m = (function (){if(typeof cljs.core.async.t13255 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13255 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta13256){
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
this.meta13256 = meta13256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13255.cljs$lang$type = true;
cljs.core.async.t13255.cljs$lang$ctorStr = "cljs.core.async/t13255";
cljs.core.async.t13255.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13255");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13255.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t13255.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13255.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13255.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13255.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13255.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13255.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13255.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13255.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13257){var self__ = this;
var _13257__$1 = this;return self__.meta13256;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t13255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_13257,meta13256__$1){var self__ = this;
var _13257__$1 = this;return (new cljs.core.async.t13255(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta13256__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t13255 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t13255(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13256){return (new cljs.core.async.t13255(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta13256));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t13255(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___13364 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13322){var state_val_13323 = (state_13322[1]);if((state_val_13323 === 1))
{var inst_13261 = (state_13322[7]);var inst_13261__$1 = calc_state.call(null);var inst_13262 = cljs.core.seq_QMARK_.call(null,inst_13261__$1);var state_13322__$1 = (function (){var statearr_13324 = state_13322;(statearr_13324[7] = inst_13261__$1);
return statearr_13324;
})();if(inst_13262)
{var statearr_13325_13365 = state_13322__$1;(statearr_13325_13365[1] = 2);
} else
{var statearr_13326_13366 = state_13322__$1;(statearr_13326_13366[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 2))
{var inst_13261 = (state_13322[7]);var inst_13264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13261);var state_13322__$1 = state_13322;var statearr_13327_13367 = state_13322__$1;(statearr_13327_13367[2] = inst_13264);
(statearr_13327_13367[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 3))
{var inst_13261 = (state_13322[7]);var state_13322__$1 = state_13322;var statearr_13328_13368 = state_13322__$1;(statearr_13328_13368[2] = inst_13261);
(statearr_13328_13368[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 4))
{var inst_13261 = (state_13322[7]);var inst_13267 = (state_13322[2]);var inst_13268 = cljs.core.get.call(null,inst_13267,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13269 = cljs.core.get.call(null,inst_13267,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13270 = cljs.core.get.call(null,inst_13267,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_13271 = inst_13261;var state_13322__$1 = (function (){var statearr_13329 = state_13322;(statearr_13329[8] = inst_13271);
(statearr_13329[9] = inst_13270);
(statearr_13329[10] = inst_13269);
(statearr_13329[11] = inst_13268);
return statearr_13329;
})();var statearr_13330_13369 = state_13322__$1;(statearr_13330_13369[2] = null);
(statearr_13330_13369[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 5))
{var inst_13271 = (state_13322[8]);var inst_13274 = cljs.core.seq_QMARK_.call(null,inst_13271);var state_13322__$1 = state_13322;if(inst_13274)
{var statearr_13331_13370 = state_13322__$1;(statearr_13331_13370[1] = 7);
} else
{var statearr_13332_13371 = state_13322__$1;(statearr_13332_13371[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 6))
{var inst_13320 = (state_13322[2]);var state_13322__$1 = state_13322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13322__$1,inst_13320);
} else
{if((state_val_13323 === 7))
{var inst_13271 = (state_13322[8]);var inst_13276 = cljs.core.apply.call(null,cljs.core.hash_map,inst_13271);var state_13322__$1 = state_13322;var statearr_13333_13372 = state_13322__$1;(statearr_13333_13372[2] = inst_13276);
(statearr_13333_13372[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 8))
{var inst_13271 = (state_13322[8]);var state_13322__$1 = state_13322;var statearr_13334_13373 = state_13322__$1;(statearr_13334_13373[2] = inst_13271);
(statearr_13334_13373[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 9))
{var inst_13279 = (state_13322[12]);var inst_13279__$1 = (state_13322[2]);var inst_13280 = cljs.core.get.call(null,inst_13279__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_13281 = cljs.core.get.call(null,inst_13279__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_13282 = cljs.core.get.call(null,inst_13279__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_13322__$1 = (function (){var statearr_13335 = state_13322;(statearr_13335[13] = inst_13282);
(statearr_13335[14] = inst_13281);
(statearr_13335[12] = inst_13279__$1);
return statearr_13335;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13322__$1,10,inst_13280);
} else
{if((state_val_13323 === 10))
{var inst_13287 = (state_13322[15]);var inst_13286 = (state_13322[16]);var inst_13285 = (state_13322[2]);var inst_13286__$1 = cljs.core.nth.call(null,inst_13285,0,null);var inst_13287__$1 = cljs.core.nth.call(null,inst_13285,1,null);var inst_13288 = (inst_13286__$1 == null);var inst_13289 = cljs.core._EQ_.call(null,inst_13287__$1,change);var inst_13290 = (inst_13288) || (inst_13289);var state_13322__$1 = (function (){var statearr_13336 = state_13322;(statearr_13336[15] = inst_13287__$1);
(statearr_13336[16] = inst_13286__$1);
return statearr_13336;
})();if(cljs.core.truth_(inst_13290))
{var statearr_13337_13374 = state_13322__$1;(statearr_13337_13374[1] = 11);
} else
{var statearr_13338_13375 = state_13322__$1;(statearr_13338_13375[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 11))
{var inst_13286 = (state_13322[16]);var inst_13292 = (inst_13286 == null);var state_13322__$1 = state_13322;if(cljs.core.truth_(inst_13292))
{var statearr_13339_13376 = state_13322__$1;(statearr_13339_13376[1] = 14);
} else
{var statearr_13340_13377 = state_13322__$1;(statearr_13340_13377[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 12))
{var inst_13287 = (state_13322[15]);var inst_13282 = (state_13322[13]);var inst_13301 = (state_13322[17]);var inst_13301__$1 = inst_13282.call(null,inst_13287);var state_13322__$1 = (function (){var statearr_13341 = state_13322;(statearr_13341[17] = inst_13301__$1);
return statearr_13341;
})();if(cljs.core.truth_(inst_13301__$1))
{var statearr_13342_13378 = state_13322__$1;(statearr_13342_13378[1] = 17);
} else
{var statearr_13343_13379 = state_13322__$1;(statearr_13343_13379[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 13))
{var inst_13318 = (state_13322[2]);var state_13322__$1 = state_13322;var statearr_13344_13380 = state_13322__$1;(statearr_13344_13380[2] = inst_13318);
(statearr_13344_13380[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 14))
{var inst_13287 = (state_13322[15]);var inst_13294 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_13287);var state_13322__$1 = state_13322;var statearr_13345_13381 = state_13322__$1;(statearr_13345_13381[2] = inst_13294);
(statearr_13345_13381[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 15))
{var state_13322__$1 = state_13322;var statearr_13346_13382 = state_13322__$1;(statearr_13346_13382[2] = null);
(statearr_13346_13382[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 16))
{var inst_13297 = (state_13322[2]);var inst_13298 = calc_state.call(null);var inst_13271 = inst_13298;var state_13322__$1 = (function (){var statearr_13347 = state_13322;(statearr_13347[8] = inst_13271);
(statearr_13347[18] = inst_13297);
return statearr_13347;
})();var statearr_13348_13383 = state_13322__$1;(statearr_13348_13383[2] = null);
(statearr_13348_13383[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 17))
{var inst_13301 = (state_13322[17]);var state_13322__$1 = state_13322;var statearr_13349_13384 = state_13322__$1;(statearr_13349_13384[2] = inst_13301);
(statearr_13349_13384[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 18))
{var inst_13287 = (state_13322[15]);var inst_13282 = (state_13322[13]);var inst_13281 = (state_13322[14]);var inst_13304 = cljs.core.empty_QMARK_.call(null,inst_13282);var inst_13305 = inst_13281.call(null,inst_13287);var inst_13306 = cljs.core.not.call(null,inst_13305);var inst_13307 = (inst_13304) && (inst_13306);var state_13322__$1 = state_13322;var statearr_13350_13385 = state_13322__$1;(statearr_13350_13385[2] = inst_13307);
(statearr_13350_13385[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 19))
{var inst_13309 = (state_13322[2]);var state_13322__$1 = state_13322;if(cljs.core.truth_(inst_13309))
{var statearr_13351_13386 = state_13322__$1;(statearr_13351_13386[1] = 20);
} else
{var statearr_13352_13387 = state_13322__$1;(statearr_13352_13387[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 20))
{var inst_13286 = (state_13322[16]);var state_13322__$1 = state_13322;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13322__$1,23,out,inst_13286);
} else
{if((state_val_13323 === 21))
{var state_13322__$1 = state_13322;var statearr_13353_13388 = state_13322__$1;(statearr_13353_13388[2] = null);
(statearr_13353_13388[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 22))
{var inst_13279 = (state_13322[12]);var inst_13315 = (state_13322[2]);var inst_13271 = inst_13279;var state_13322__$1 = (function (){var statearr_13354 = state_13322;(statearr_13354[19] = inst_13315);
(statearr_13354[8] = inst_13271);
return statearr_13354;
})();var statearr_13355_13389 = state_13322__$1;(statearr_13355_13389[2] = null);
(statearr_13355_13389[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13323 === 23))
{var inst_13312 = (state_13322[2]);var state_13322__$1 = state_13322;var statearr_13356_13390 = state_13322__$1;(statearr_13356_13390[2] = inst_13312);
(statearr_13356_13390[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_13360 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13360[0] = state_machine__5507__auto__);
(statearr_13360[1] = 1);
return statearr_13360;
});
var state_machine__5507__auto____1 = (function (state_13322){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13322);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13361){if((e13361 instanceof Object))
{var ex__5510__auto__ = e13361;var statearr_13362_13391 = state_13322;(statearr_13362_13391[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13322);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13361;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13392 = state_13322;
state_13322 = G__13392;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13322){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13363 = f__5522__auto__.call(null);(statearr_13363[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13364);
return statearr_13363;
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
cljs.core.async.Pub = (function (){var obj13394 = {};return obj13394;
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
return (function (p1__13395_SHARP_){if(cljs.core.truth_(p1__13395_SHARP_.call(null,topic)))
{return p1__13395_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__13395_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t13520 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13520 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta13521){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta13521 = meta13521;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13520.cljs$lang$type = true;
cljs.core.async.t13520.cljs$lang$ctorStr = "cljs.core.async/t13520";
cljs.core.async.t13520.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13520");
});})(mults,ensure_mult))
;
cljs.core.async.t13520.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t13520.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t13520.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t13520.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t13520.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t13520.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t13520.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t13520.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_13522){var self__ = this;
var _13522__$1 = this;return self__.meta13521;
});})(mults,ensure_mult))
;
cljs.core.async.t13520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_13522,meta13521__$1){var self__ = this;
var _13522__$1 = this;return (new cljs.core.async.t13520(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta13521__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t13520 = ((function (mults,ensure_mult){
return (function __GT_t13520(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13521){return (new cljs.core.async.t13520(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta13521));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t13520(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___13644 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13596){var state_val_13597 = (state_13596[1]);if((state_val_13597 === 1))
{var state_13596__$1 = state_13596;var statearr_13598_13645 = state_13596__$1;(statearr_13598_13645[2] = null);
(statearr_13598_13645[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 2))
{var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13596__$1,4,ch);
} else
{if((state_val_13597 === 3))
{var inst_13594 = (state_13596[2]);var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13596__$1,inst_13594);
} else
{if((state_val_13597 === 4))
{var inst_13525 = (state_13596[7]);var inst_13525__$1 = (state_13596[2]);var inst_13526 = (inst_13525__$1 == null);var state_13596__$1 = (function (){var statearr_13599 = state_13596;(statearr_13599[7] = inst_13525__$1);
return statearr_13599;
})();if(cljs.core.truth_(inst_13526))
{var statearr_13600_13646 = state_13596__$1;(statearr_13600_13646[1] = 5);
} else
{var statearr_13601_13647 = state_13596__$1;(statearr_13601_13647[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 5))
{var inst_13532 = cljs.core.deref.call(null,mults);var inst_13533 = cljs.core.vals.call(null,inst_13532);var inst_13534 = cljs.core.seq.call(null,inst_13533);var inst_13535 = inst_13534;var inst_13536 = null;var inst_13537 = 0;var inst_13538 = 0;var state_13596__$1 = (function (){var statearr_13602 = state_13596;(statearr_13602[8] = inst_13535);
(statearr_13602[9] = inst_13536);
(statearr_13602[10] = inst_13537);
(statearr_13602[11] = inst_13538);
return statearr_13602;
})();var statearr_13603_13648 = state_13596__$1;(statearr_13603_13648[2] = null);
(statearr_13603_13648[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 6))
{var inst_13573 = (state_13596[12]);var inst_13525 = (state_13596[7]);var inst_13575 = (state_13596[13]);var inst_13573__$1 = topic_fn.call(null,inst_13525);var inst_13574 = cljs.core.deref.call(null,mults);var inst_13575__$1 = cljs.core.get.call(null,inst_13574,inst_13573__$1);var state_13596__$1 = (function (){var statearr_13604 = state_13596;(statearr_13604[12] = inst_13573__$1);
(statearr_13604[13] = inst_13575__$1);
return statearr_13604;
})();if(cljs.core.truth_(inst_13575__$1))
{var statearr_13605_13649 = state_13596__$1;(statearr_13605_13649[1] = 19);
} else
{var statearr_13606_13650 = state_13596__$1;(statearr_13606_13650[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 7))
{var inst_13592 = (state_13596[2]);var state_13596__$1 = state_13596;var statearr_13607_13651 = state_13596__$1;(statearr_13607_13651[2] = inst_13592);
(statearr_13607_13651[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 8))
{var inst_13537 = (state_13596[10]);var inst_13538 = (state_13596[11]);var inst_13540 = (inst_13538 < inst_13537);var inst_13541 = inst_13540;var state_13596__$1 = state_13596;if(cljs.core.truth_(inst_13541))
{var statearr_13611_13652 = state_13596__$1;(statearr_13611_13652[1] = 10);
} else
{var statearr_13612_13653 = state_13596__$1;(statearr_13612_13653[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 9))
{var inst_13571 = (state_13596[2]);var state_13596__$1 = state_13596;var statearr_13613_13654 = state_13596__$1;(statearr_13613_13654[2] = inst_13571);
(statearr_13613_13654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 10))
{var inst_13535 = (state_13596[8]);var inst_13536 = (state_13596[9]);var inst_13537 = (state_13596[10]);var inst_13538 = (state_13596[11]);var inst_13543 = cljs.core._nth.call(null,inst_13536,inst_13538);var inst_13544 = cljs.core.async.muxch_STAR_.call(null,inst_13543);var inst_13545 = cljs.core.async.close_BANG_.call(null,inst_13544);var inst_13546 = (inst_13538 + 1);var tmp13608 = inst_13535;var tmp13609 = inst_13536;var tmp13610 = inst_13537;var inst_13535__$1 = tmp13608;var inst_13536__$1 = tmp13609;var inst_13537__$1 = tmp13610;var inst_13538__$1 = inst_13546;var state_13596__$1 = (function (){var statearr_13614 = state_13596;(statearr_13614[8] = inst_13535__$1);
(statearr_13614[14] = inst_13545);
(statearr_13614[9] = inst_13536__$1);
(statearr_13614[10] = inst_13537__$1);
(statearr_13614[11] = inst_13538__$1);
return statearr_13614;
})();var statearr_13615_13655 = state_13596__$1;(statearr_13615_13655[2] = null);
(statearr_13615_13655[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 11))
{var inst_13549 = (state_13596[15]);var inst_13535 = (state_13596[8]);var inst_13549__$1 = cljs.core.seq.call(null,inst_13535);var state_13596__$1 = (function (){var statearr_13616 = state_13596;(statearr_13616[15] = inst_13549__$1);
return statearr_13616;
})();if(inst_13549__$1)
{var statearr_13617_13656 = state_13596__$1;(statearr_13617_13656[1] = 13);
} else
{var statearr_13618_13657 = state_13596__$1;(statearr_13618_13657[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 12))
{var inst_13569 = (state_13596[2]);var state_13596__$1 = state_13596;var statearr_13619_13658 = state_13596__$1;(statearr_13619_13658[2] = inst_13569);
(statearr_13619_13658[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 13))
{var inst_13549 = (state_13596[15]);var inst_13551 = cljs.core.chunked_seq_QMARK_.call(null,inst_13549);var state_13596__$1 = state_13596;if(inst_13551)
{var statearr_13620_13659 = state_13596__$1;(statearr_13620_13659[1] = 16);
} else
{var statearr_13621_13660 = state_13596__$1;(statearr_13621_13660[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 14))
{var state_13596__$1 = state_13596;var statearr_13622_13661 = state_13596__$1;(statearr_13622_13661[2] = null);
(statearr_13622_13661[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 15))
{var inst_13567 = (state_13596[2]);var state_13596__$1 = state_13596;var statearr_13623_13662 = state_13596__$1;(statearr_13623_13662[2] = inst_13567);
(statearr_13623_13662[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 16))
{var inst_13549 = (state_13596[15]);var inst_13553 = cljs.core.chunk_first.call(null,inst_13549);var inst_13554 = cljs.core.chunk_rest.call(null,inst_13549);var inst_13555 = cljs.core.count.call(null,inst_13553);var inst_13535 = inst_13554;var inst_13536 = inst_13553;var inst_13537 = inst_13555;var inst_13538 = 0;var state_13596__$1 = (function (){var statearr_13624 = state_13596;(statearr_13624[8] = inst_13535);
(statearr_13624[9] = inst_13536);
(statearr_13624[10] = inst_13537);
(statearr_13624[11] = inst_13538);
return statearr_13624;
})();var statearr_13625_13663 = state_13596__$1;(statearr_13625_13663[2] = null);
(statearr_13625_13663[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 17))
{var inst_13549 = (state_13596[15]);var inst_13558 = cljs.core.first.call(null,inst_13549);var inst_13559 = cljs.core.async.muxch_STAR_.call(null,inst_13558);var inst_13560 = cljs.core.async.close_BANG_.call(null,inst_13559);var inst_13561 = cljs.core.next.call(null,inst_13549);var inst_13535 = inst_13561;var inst_13536 = null;var inst_13537 = 0;var inst_13538 = 0;var state_13596__$1 = (function (){var statearr_13626 = state_13596;(statearr_13626[16] = inst_13560);
(statearr_13626[8] = inst_13535);
(statearr_13626[9] = inst_13536);
(statearr_13626[10] = inst_13537);
(statearr_13626[11] = inst_13538);
return statearr_13626;
})();var statearr_13627_13664 = state_13596__$1;(statearr_13627_13664[2] = null);
(statearr_13627_13664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 18))
{var inst_13564 = (state_13596[2]);var state_13596__$1 = state_13596;var statearr_13628_13665 = state_13596__$1;(statearr_13628_13665[2] = inst_13564);
(statearr_13628_13665[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 19))
{var state_13596__$1 = state_13596;var statearr_13629_13666 = state_13596__$1;(statearr_13629_13666[2] = null);
(statearr_13629_13666[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 20))
{var state_13596__$1 = state_13596;var statearr_13630_13667 = state_13596__$1;(statearr_13630_13667[2] = null);
(statearr_13630_13667[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 21))
{var inst_13589 = (state_13596[2]);var state_13596__$1 = (function (){var statearr_13631 = state_13596;(statearr_13631[17] = inst_13589);
return statearr_13631;
})();var statearr_13632_13668 = state_13596__$1;(statearr_13632_13668[2] = null);
(statearr_13632_13668[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 22))
{var inst_13586 = (state_13596[2]);var state_13596__$1 = state_13596;var statearr_13633_13669 = state_13596__$1;(statearr_13633_13669[2] = inst_13586);
(statearr_13633_13669[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 23))
{var inst_13573 = (state_13596[12]);var inst_13577 = (state_13596[2]);var inst_13578 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_13573);var state_13596__$1 = (function (){var statearr_13634 = state_13596;(statearr_13634[18] = inst_13577);
return statearr_13634;
})();var statearr_13635_13670 = state_13596__$1;(statearr_13635_13670[2] = inst_13578);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13596__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13597 === 24))
{var inst_13525 = (state_13596[7]);var inst_13575 = (state_13596[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13596,23,Object,null,22);var inst_13582 = cljs.core.async.muxch_STAR_.call(null,inst_13575);var state_13596__$1 = state_13596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13596__$1,25,inst_13582,inst_13525);
} else
{if((state_val_13597 === 25))
{var inst_13584 = (state_13596[2]);var state_13596__$1 = state_13596;var statearr_13636_13671 = state_13596__$1;(statearr_13636_13671[2] = inst_13584);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13596__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_13640 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13640[0] = state_machine__5507__auto__);
(statearr_13640[1] = 1);
return statearr_13640;
});
var state_machine__5507__auto____1 = (function (state_13596){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13596);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13641){if((e13641 instanceof Object))
{var ex__5510__auto__ = e13641;var statearr_13642_13672 = state_13596;(statearr_13642_13672[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13596);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13641;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13673 = state_13596;
state_13596 = G__13673;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13596){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13643 = f__5522__auto__.call(null);(statearr_13643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13644);
return statearr_13643;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___13810 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13780){var state_val_13781 = (state_13780[1]);if((state_val_13781 === 1))
{var state_13780__$1 = state_13780;var statearr_13782_13811 = state_13780__$1;(statearr_13782_13811[2] = null);
(statearr_13782_13811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 2))
{var inst_13743 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_13744 = 0;var state_13780__$1 = (function (){var statearr_13783 = state_13780;(statearr_13783[7] = inst_13744);
(statearr_13783[8] = inst_13743);
return statearr_13783;
})();var statearr_13784_13812 = state_13780__$1;(statearr_13784_13812[2] = null);
(statearr_13784_13812[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 3))
{var inst_13778 = (state_13780[2]);var state_13780__$1 = state_13780;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13780__$1,inst_13778);
} else
{if((state_val_13781 === 4))
{var inst_13744 = (state_13780[7]);var inst_13746 = (inst_13744 < cnt);var state_13780__$1 = state_13780;if(cljs.core.truth_(inst_13746))
{var statearr_13785_13813 = state_13780__$1;(statearr_13785_13813[1] = 6);
} else
{var statearr_13786_13814 = state_13780__$1;(statearr_13786_13814[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 5))
{var inst_13764 = (state_13780[2]);var state_13780__$1 = (function (){var statearr_13787 = state_13780;(statearr_13787[9] = inst_13764);
return statearr_13787;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13780__$1,12,dchan);
} else
{if((state_val_13781 === 6))
{var state_13780__$1 = state_13780;var statearr_13788_13815 = state_13780__$1;(statearr_13788_13815[2] = null);
(statearr_13788_13815[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 7))
{var state_13780__$1 = state_13780;var statearr_13789_13816 = state_13780__$1;(statearr_13789_13816[2] = null);
(statearr_13789_13816[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 8))
{var inst_13762 = (state_13780[2]);var state_13780__$1 = state_13780;var statearr_13790_13817 = state_13780__$1;(statearr_13790_13817[2] = inst_13762);
(statearr_13790_13817[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 9))
{var inst_13744 = (state_13780[7]);var inst_13757 = (state_13780[2]);var inst_13758 = (inst_13744 + 1);var inst_13744__$1 = inst_13758;var state_13780__$1 = (function (){var statearr_13791 = state_13780;(statearr_13791[10] = inst_13757);
(statearr_13791[7] = inst_13744__$1);
return statearr_13791;
})();var statearr_13792_13818 = state_13780__$1;(statearr_13792_13818[2] = null);
(statearr_13792_13818[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 10))
{var inst_13748 = (state_13780[2]);var inst_13749 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_13780__$1 = (function (){var statearr_13793 = state_13780;(statearr_13793[11] = inst_13748);
return statearr_13793;
})();var statearr_13794_13819 = state_13780__$1;(statearr_13794_13819[2] = inst_13749);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13780__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 11))
{var inst_13744 = (state_13780[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_13780,10,Object,null,9);var inst_13753 = chs__$1.call(null,inst_13744);var inst_13754 = done.call(null,inst_13744);var inst_13755 = cljs.core.async.take_BANG_.call(null,inst_13753,inst_13754);var state_13780__$1 = state_13780;var statearr_13795_13820 = state_13780__$1;(statearr_13795_13820[2] = inst_13755);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13780__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 12))
{var inst_13766 = (state_13780[12]);var inst_13766__$1 = (state_13780[2]);var inst_13767 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_13766__$1);var state_13780__$1 = (function (){var statearr_13796 = state_13780;(statearr_13796[12] = inst_13766__$1);
return statearr_13796;
})();if(cljs.core.truth_(inst_13767))
{var statearr_13797_13821 = state_13780__$1;(statearr_13797_13821[1] = 13);
} else
{var statearr_13798_13822 = state_13780__$1;(statearr_13798_13822[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 13))
{var inst_13769 = cljs.core.async.close_BANG_.call(null,out);var state_13780__$1 = state_13780;var statearr_13799_13823 = state_13780__$1;(statearr_13799_13823[2] = inst_13769);
(statearr_13799_13823[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 14))
{var inst_13766 = (state_13780[12]);var inst_13771 = cljs.core.apply.call(null,f,inst_13766);var state_13780__$1 = state_13780;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13780__$1,16,out,inst_13771);
} else
{if((state_val_13781 === 15))
{var inst_13776 = (state_13780[2]);var state_13780__$1 = state_13780;var statearr_13800_13824 = state_13780__$1;(statearr_13800_13824[2] = inst_13776);
(statearr_13800_13824[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13781 === 16))
{var inst_13773 = (state_13780[2]);var state_13780__$1 = (function (){var statearr_13801 = state_13780;(statearr_13801[13] = inst_13773);
return statearr_13801;
})();var statearr_13802_13825 = state_13780__$1;(statearr_13802_13825[2] = null);
(statearr_13802_13825[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13806 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13806[0] = state_machine__5507__auto__);
(statearr_13806[1] = 1);
return statearr_13806;
});
var state_machine__5507__auto____1 = (function (state_13780){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13780);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13807){if((e13807 instanceof Object))
{var ex__5510__auto__ = e13807;var statearr_13808_13826 = state_13780;(statearr_13808_13826[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13780);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13807;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13827 = state_13780;
state_13780 = G__13827;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13780){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13780);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13809 = f__5522__auto__.call(null);(statearr_13809[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13810);
return statearr_13809;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13935 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13911){var state_val_13912 = (state_13911[1]);if((state_val_13912 === 1))
{var inst_13882 = cljs.core.vec.call(null,chs);var inst_13883 = inst_13882;var state_13911__$1 = (function (){var statearr_13913 = state_13911;(statearr_13913[7] = inst_13883);
return statearr_13913;
})();var statearr_13914_13936 = state_13911__$1;(statearr_13914_13936[2] = null);
(statearr_13914_13936[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 2))
{var inst_13883 = (state_13911[7]);var inst_13885 = cljs.core.count.call(null,inst_13883);var inst_13886 = (inst_13885 > 0);var state_13911__$1 = state_13911;if(cljs.core.truth_(inst_13886))
{var statearr_13915_13937 = state_13911__$1;(statearr_13915_13937[1] = 4);
} else
{var statearr_13916_13938 = state_13911__$1;(statearr_13916_13938[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 3))
{var inst_13909 = (state_13911[2]);var state_13911__$1 = state_13911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13911__$1,inst_13909);
} else
{if((state_val_13912 === 4))
{var inst_13883 = (state_13911[7]);var state_13911__$1 = state_13911;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_13911__$1,7,inst_13883);
} else
{if((state_val_13912 === 5))
{var inst_13905 = cljs.core.async.close_BANG_.call(null,out);var state_13911__$1 = state_13911;var statearr_13917_13939 = state_13911__$1;(statearr_13917_13939[2] = inst_13905);
(statearr_13917_13939[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 6))
{var inst_13907 = (state_13911[2]);var state_13911__$1 = state_13911;var statearr_13918_13940 = state_13911__$1;(statearr_13918_13940[2] = inst_13907);
(statearr_13918_13940[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 7))
{var inst_13890 = (state_13911[8]);var inst_13891 = (state_13911[9]);var inst_13890__$1 = (state_13911[2]);var inst_13891__$1 = cljs.core.nth.call(null,inst_13890__$1,0,null);var inst_13892 = cljs.core.nth.call(null,inst_13890__$1,1,null);var inst_13893 = (inst_13891__$1 == null);var state_13911__$1 = (function (){var statearr_13919 = state_13911;(statearr_13919[10] = inst_13892);
(statearr_13919[8] = inst_13890__$1);
(statearr_13919[9] = inst_13891__$1);
return statearr_13919;
})();if(cljs.core.truth_(inst_13893))
{var statearr_13920_13941 = state_13911__$1;(statearr_13920_13941[1] = 8);
} else
{var statearr_13921_13942 = state_13911__$1;(statearr_13921_13942[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 8))
{var inst_13883 = (state_13911[7]);var inst_13892 = (state_13911[10]);var inst_13890 = (state_13911[8]);var inst_13891 = (state_13911[9]);var inst_13895 = (function (){var c = inst_13892;var v = inst_13891;var vec__13888 = inst_13890;var cs = inst_13883;return ((function (c,v,vec__13888,cs,inst_13883,inst_13892,inst_13890,inst_13891,state_val_13912){
return (function (p1__13828_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__13828_SHARP_);
});
;})(c,v,vec__13888,cs,inst_13883,inst_13892,inst_13890,inst_13891,state_val_13912))
})();var inst_13896 = cljs.core.filterv.call(null,inst_13895,inst_13883);var inst_13883__$1 = inst_13896;var state_13911__$1 = (function (){var statearr_13922 = state_13911;(statearr_13922[7] = inst_13883__$1);
return statearr_13922;
})();var statearr_13923_13943 = state_13911__$1;(statearr_13923_13943[2] = null);
(statearr_13923_13943[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 9))
{var inst_13891 = (state_13911[9]);var state_13911__$1 = state_13911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13911__$1,11,out,inst_13891);
} else
{if((state_val_13912 === 10))
{var inst_13903 = (state_13911[2]);var state_13911__$1 = state_13911;var statearr_13925_13944 = state_13911__$1;(statearr_13925_13944[2] = inst_13903);
(statearr_13925_13944[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13912 === 11))
{var inst_13883 = (state_13911[7]);var inst_13900 = (state_13911[2]);var tmp13924 = inst_13883;var inst_13883__$1 = tmp13924;var state_13911__$1 = (function (){var statearr_13926 = state_13911;(statearr_13926[7] = inst_13883__$1);
(statearr_13926[11] = inst_13900);
return statearr_13926;
})();var statearr_13927_13945 = state_13911__$1;(statearr_13927_13945[2] = null);
(statearr_13927_13945[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13931 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13931[0] = state_machine__5507__auto__);
(statearr_13931[1] = 1);
return statearr_13931;
});
var state_machine__5507__auto____1 = (function (state_13911){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13911);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13932){if((e13932 instanceof Object))
{var ex__5510__auto__ = e13932;var statearr_13933_13946 = state_13911;(statearr_13933_13946[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13932;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13947 = state_13911;
state_13911 = G__13947;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13911){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13934 = f__5522__auto__.call(null);(statearr_13934[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13935);
return statearr_13934;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14040 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14017){var state_val_14018 = (state_14017[1]);if((state_val_14018 === 1))
{var inst_13994 = 0;var state_14017__$1 = (function (){var statearr_14019 = state_14017;(statearr_14019[7] = inst_13994);
return statearr_14019;
})();var statearr_14020_14041 = state_14017__$1;(statearr_14020_14041[2] = null);
(statearr_14020_14041[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 2))
{var inst_13994 = (state_14017[7]);var inst_13996 = (inst_13994 < n);var state_14017__$1 = state_14017;if(cljs.core.truth_(inst_13996))
{var statearr_14021_14042 = state_14017__$1;(statearr_14021_14042[1] = 4);
} else
{var statearr_14022_14043 = state_14017__$1;(statearr_14022_14043[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 3))
{var inst_14014 = (state_14017[2]);var inst_14015 = cljs.core.async.close_BANG_.call(null,out);var state_14017__$1 = (function (){var statearr_14023 = state_14017;(statearr_14023[8] = inst_14014);
return statearr_14023;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14017__$1,inst_14015);
} else
{if((state_val_14018 === 4))
{var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14017__$1,7,ch);
} else
{if((state_val_14018 === 5))
{var state_14017__$1 = state_14017;var statearr_14024_14044 = state_14017__$1;(statearr_14024_14044[2] = null);
(statearr_14024_14044[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 6))
{var inst_14012 = (state_14017[2]);var state_14017__$1 = state_14017;var statearr_14025_14045 = state_14017__$1;(statearr_14025_14045[2] = inst_14012);
(statearr_14025_14045[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 7))
{var inst_13999 = (state_14017[9]);var inst_13999__$1 = (state_14017[2]);var inst_14000 = (inst_13999__$1 == null);var inst_14001 = cljs.core.not.call(null,inst_14000);var state_14017__$1 = (function (){var statearr_14026 = state_14017;(statearr_14026[9] = inst_13999__$1);
return statearr_14026;
})();if(inst_14001)
{var statearr_14027_14046 = state_14017__$1;(statearr_14027_14046[1] = 8);
} else
{var statearr_14028_14047 = state_14017__$1;(statearr_14028_14047[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 8))
{var inst_13999 = (state_14017[9]);var state_14017__$1 = state_14017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14017__$1,11,out,inst_13999);
} else
{if((state_val_14018 === 9))
{var state_14017__$1 = state_14017;var statearr_14029_14048 = state_14017__$1;(statearr_14029_14048[2] = null);
(statearr_14029_14048[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 10))
{var inst_14009 = (state_14017[2]);var state_14017__$1 = state_14017;var statearr_14030_14049 = state_14017__$1;(statearr_14030_14049[2] = inst_14009);
(statearr_14030_14049[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14018 === 11))
{var inst_13994 = (state_14017[7]);var inst_14004 = (state_14017[2]);var inst_14005 = (inst_13994 + 1);var inst_13994__$1 = inst_14005;var state_14017__$1 = (function (){var statearr_14031 = state_14017;(statearr_14031[7] = inst_13994__$1);
(statearr_14031[10] = inst_14004);
return statearr_14031;
})();var statearr_14032_14050 = state_14017__$1;(statearr_14032_14050[2] = null);
(statearr_14032_14050[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14036 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14036[0] = state_machine__5507__auto__);
(statearr_14036[1] = 1);
return statearr_14036;
});
var state_machine__5507__auto____1 = (function (state_14017){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14017);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14037){if((e14037 instanceof Object))
{var ex__5510__auto__ = e14037;var statearr_14038_14051 = state_14017;(statearr_14038_14051[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14037;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14052 = state_14017;
state_14017 = G__14052;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14017){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14039 = f__5522__auto__.call(null);(statearr_14039[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14040);
return statearr_14039;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14149 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14124){var state_val_14125 = (state_14124[1]);if((state_val_14125 === 1))
{var inst_14101 = null;var state_14124__$1 = (function (){var statearr_14126 = state_14124;(statearr_14126[7] = inst_14101);
return statearr_14126;
})();var statearr_14127_14150 = state_14124__$1;(statearr_14127_14150[2] = null);
(statearr_14127_14150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14125 === 2))
{var state_14124__$1 = state_14124;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14124__$1,4,ch);
} else
{if((state_val_14125 === 3))
{var inst_14121 = (state_14124[2]);var inst_14122 = cljs.core.async.close_BANG_.call(null,out);var state_14124__$1 = (function (){var statearr_14128 = state_14124;(statearr_14128[8] = inst_14121);
return statearr_14128;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14124__$1,inst_14122);
} else
{if((state_val_14125 === 4))
{var inst_14104 = (state_14124[9]);var inst_14104__$1 = (state_14124[2]);var inst_14105 = (inst_14104__$1 == null);var inst_14106 = cljs.core.not.call(null,inst_14105);var state_14124__$1 = (function (){var statearr_14129 = state_14124;(statearr_14129[9] = inst_14104__$1);
return statearr_14129;
})();if(inst_14106)
{var statearr_14130_14151 = state_14124__$1;(statearr_14130_14151[1] = 5);
} else
{var statearr_14131_14152 = state_14124__$1;(statearr_14131_14152[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14125 === 5))
{var inst_14101 = (state_14124[7]);var inst_14104 = (state_14124[9]);var inst_14108 = cljs.core._EQ_.call(null,inst_14104,inst_14101);var state_14124__$1 = state_14124;if(inst_14108)
{var statearr_14132_14153 = state_14124__$1;(statearr_14132_14153[1] = 8);
} else
{var statearr_14133_14154 = state_14124__$1;(statearr_14133_14154[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14125 === 6))
{var state_14124__$1 = state_14124;var statearr_14135_14155 = state_14124__$1;(statearr_14135_14155[2] = null);
(statearr_14135_14155[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14125 === 7))
{var inst_14119 = (state_14124[2]);var state_14124__$1 = state_14124;var statearr_14136_14156 = state_14124__$1;(statearr_14136_14156[2] = inst_14119);
(statearr_14136_14156[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14125 === 8))
{var inst_14101 = (state_14124[7]);var tmp14134 = inst_14101;var inst_14101__$1 = tmp14134;var state_14124__$1 = (function (){var statearr_14137 = state_14124;(statearr_14137[7] = inst_14101__$1);
return statearr_14137;
})();var statearr_14138_14157 = state_14124__$1;(statearr_14138_14157[2] = null);
(statearr_14138_14157[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14125 === 9))
{var inst_14104 = (state_14124[9]);var state_14124__$1 = state_14124;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14124__$1,11,out,inst_14104);
} else
{if((state_val_14125 === 10))
{var inst_14116 = (state_14124[2]);var state_14124__$1 = state_14124;var statearr_14139_14158 = state_14124__$1;(statearr_14139_14158[2] = inst_14116);
(statearr_14139_14158[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14125 === 11))
{var inst_14104 = (state_14124[9]);var inst_14113 = (state_14124[2]);var inst_14101 = inst_14104;var state_14124__$1 = (function (){var statearr_14140 = state_14124;(statearr_14140[7] = inst_14101);
(statearr_14140[10] = inst_14113);
return statearr_14140;
})();var statearr_14141_14159 = state_14124__$1;(statearr_14141_14159[2] = null);
(statearr_14141_14159[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14145 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_14145[0] = state_machine__5507__auto__);
(statearr_14145[1] = 1);
return statearr_14145;
});
var state_machine__5507__auto____1 = (function (state_14124){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14124);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14146){if((e14146 instanceof Object))
{var ex__5510__auto__ = e14146;var statearr_14147_14160 = state_14124;(statearr_14147_14160[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14124);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14146;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14161 = state_14124;
state_14124 = G__14161;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14124){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14124);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14148 = f__5522__auto__.call(null);(statearr_14148[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14149);
return statearr_14148;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14296 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14266){var state_val_14267 = (state_14266[1]);if((state_val_14267 === 1))
{var inst_14229 = (new Array(n));var inst_14230 = inst_14229;var inst_14231 = 0;var state_14266__$1 = (function (){var statearr_14268 = state_14266;(statearr_14268[7] = inst_14231);
(statearr_14268[8] = inst_14230);
return statearr_14268;
})();var statearr_14269_14297 = state_14266__$1;(statearr_14269_14297[2] = null);
(statearr_14269_14297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 2))
{var state_14266__$1 = state_14266;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14266__$1,4,ch);
} else
{if((state_val_14267 === 3))
{var inst_14264 = (state_14266[2]);var state_14266__$1 = state_14266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14266__$1,inst_14264);
} else
{if((state_val_14267 === 4))
{var inst_14234 = (state_14266[9]);var inst_14234__$1 = (state_14266[2]);var inst_14235 = (inst_14234__$1 == null);var inst_14236 = cljs.core.not.call(null,inst_14235);var state_14266__$1 = (function (){var statearr_14270 = state_14266;(statearr_14270[9] = inst_14234__$1);
return statearr_14270;
})();if(inst_14236)
{var statearr_14271_14298 = state_14266__$1;(statearr_14271_14298[1] = 5);
} else
{var statearr_14272_14299 = state_14266__$1;(statearr_14272_14299[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 5))
{var inst_14239 = (state_14266[10]);var inst_14234 = (state_14266[9]);var inst_14231 = (state_14266[7]);var inst_14230 = (state_14266[8]);var inst_14238 = (inst_14230[inst_14231] = inst_14234);var inst_14239__$1 = (inst_14231 + 1);var inst_14240 = (inst_14239__$1 < n);var state_14266__$1 = (function (){var statearr_14273 = state_14266;(statearr_14273[10] = inst_14239__$1);
(statearr_14273[11] = inst_14238);
return statearr_14273;
})();if(cljs.core.truth_(inst_14240))
{var statearr_14274_14300 = state_14266__$1;(statearr_14274_14300[1] = 8);
} else
{var statearr_14275_14301 = state_14266__$1;(statearr_14275_14301[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 6))
{var inst_14231 = (state_14266[7]);var inst_14252 = (inst_14231 > 0);var state_14266__$1 = state_14266;if(cljs.core.truth_(inst_14252))
{var statearr_14277_14302 = state_14266__$1;(statearr_14277_14302[1] = 12);
} else
{var statearr_14278_14303 = state_14266__$1;(statearr_14278_14303[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 7))
{var inst_14262 = (state_14266[2]);var state_14266__$1 = state_14266;var statearr_14279_14304 = state_14266__$1;(statearr_14279_14304[2] = inst_14262);
(statearr_14279_14304[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 8))
{var inst_14239 = (state_14266[10]);var inst_14230 = (state_14266[8]);var tmp14276 = inst_14230;var inst_14230__$1 = tmp14276;var inst_14231 = inst_14239;var state_14266__$1 = (function (){var statearr_14280 = state_14266;(statearr_14280[7] = inst_14231);
(statearr_14280[8] = inst_14230__$1);
return statearr_14280;
})();var statearr_14281_14305 = state_14266__$1;(statearr_14281_14305[2] = null);
(statearr_14281_14305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 9))
{var inst_14230 = (state_14266[8]);var inst_14244 = cljs.core.vec.call(null,inst_14230);var state_14266__$1 = state_14266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14266__$1,11,out,inst_14244);
} else
{if((state_val_14267 === 10))
{var inst_14250 = (state_14266[2]);var state_14266__$1 = state_14266;var statearr_14282_14306 = state_14266__$1;(statearr_14282_14306[2] = inst_14250);
(statearr_14282_14306[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 11))
{var inst_14246 = (state_14266[2]);var inst_14247 = (new Array(n));var inst_14230 = inst_14247;var inst_14231 = 0;var state_14266__$1 = (function (){var statearr_14283 = state_14266;(statearr_14283[12] = inst_14246);
(statearr_14283[7] = inst_14231);
(statearr_14283[8] = inst_14230);
return statearr_14283;
})();var statearr_14284_14307 = state_14266__$1;(statearr_14284_14307[2] = null);
(statearr_14284_14307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 12))
{var inst_14230 = (state_14266[8]);var inst_14254 = cljs.core.vec.call(null,inst_14230);var state_14266__$1 = state_14266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14266__$1,15,out,inst_14254);
} else
{if((state_val_14267 === 13))
{var state_14266__$1 = state_14266;var statearr_14285_14308 = state_14266__$1;(statearr_14285_14308[2] = null);
(statearr_14285_14308[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 14))
{var inst_14259 = (state_14266[2]);var inst_14260 = cljs.core.async.close_BANG_.call(null,out);var state_14266__$1 = (function (){var statearr_14286 = state_14266;(statearr_14286[13] = inst_14259);
return statearr_14286;
})();var statearr_14287_14309 = state_14266__$1;(statearr_14287_14309[2] = inst_14260);
(statearr_14287_14309[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14267 === 15))
{var inst_14256 = (state_14266[2]);var state_14266__$1 = state_14266;var statearr_14288_14310 = state_14266__$1;(statearr_14288_14310[2] = inst_14256);
(statearr_14288_14310[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14292 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14292[0] = state_machine__5507__auto__);
(statearr_14292[1] = 1);
return statearr_14292;
});
var state_machine__5507__auto____1 = (function (state_14266){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14266);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14293){if((e14293 instanceof Object))
{var ex__5510__auto__ = e14293;var statearr_14294_14311 = state_14266;(statearr_14294_14311[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14293;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14312 = state_14266;
state_14266 = G__14312;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14266){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14295 = f__5522__auto__.call(null);(statearr_14295[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14296);
return statearr_14295;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14425){var state_val_14426 = (state_14425[1]);if((state_val_14426 === 1))
{var inst_14384 = [];var inst_14385 = inst_14384;var inst_14386 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_14425__$1 = (function (){var statearr_14427 = state_14425;(statearr_14427[7] = inst_14385);
(statearr_14427[8] = inst_14386);
return statearr_14427;
})();var statearr_14428_14456 = state_14425__$1;(statearr_14428_14456[2] = null);
(statearr_14428_14456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 2))
{var state_14425__$1 = state_14425;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14425__$1,4,ch);
} else
{if((state_val_14426 === 3))
{var inst_14423 = (state_14425[2]);var state_14425__$1 = state_14425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14425__$1,inst_14423);
} else
{if((state_val_14426 === 4))
{var inst_14389 = (state_14425[9]);var inst_14389__$1 = (state_14425[2]);var inst_14390 = (inst_14389__$1 == null);var inst_14391 = cljs.core.not.call(null,inst_14390);var state_14425__$1 = (function (){var statearr_14429 = state_14425;(statearr_14429[9] = inst_14389__$1);
return statearr_14429;
})();if(inst_14391)
{var statearr_14430_14457 = state_14425__$1;(statearr_14430_14457[1] = 5);
} else
{var statearr_14431_14458 = state_14425__$1;(statearr_14431_14458[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 5))
{var inst_14386 = (state_14425[8]);var inst_14393 = (state_14425[10]);var inst_14389 = (state_14425[9]);var inst_14393__$1 = f.call(null,inst_14389);var inst_14394 = cljs.core._EQ_.call(null,inst_14393__$1,inst_14386);var inst_14395 = cljs.core.keyword_identical_QMARK_.call(null,inst_14386,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_14396 = (inst_14394) || (inst_14395);var state_14425__$1 = (function (){var statearr_14432 = state_14425;(statearr_14432[10] = inst_14393__$1);
return statearr_14432;
})();if(cljs.core.truth_(inst_14396))
{var statearr_14433_14459 = state_14425__$1;(statearr_14433_14459[1] = 8);
} else
{var statearr_14434_14460 = state_14425__$1;(statearr_14434_14460[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 6))
{var inst_14385 = (state_14425[7]);var inst_14410 = inst_14385.length;var inst_14411 = (inst_14410 > 0);var state_14425__$1 = state_14425;if(cljs.core.truth_(inst_14411))
{var statearr_14436_14461 = state_14425__$1;(statearr_14436_14461[1] = 12);
} else
{var statearr_14437_14462 = state_14425__$1;(statearr_14437_14462[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 7))
{var inst_14421 = (state_14425[2]);var state_14425__$1 = state_14425;var statearr_14438_14463 = state_14425__$1;(statearr_14438_14463[2] = inst_14421);
(statearr_14438_14463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 8))
{var inst_14385 = (state_14425[7]);var inst_14393 = (state_14425[10]);var inst_14389 = (state_14425[9]);var inst_14398 = inst_14385.push(inst_14389);var tmp14435 = inst_14385;var inst_14385__$1 = tmp14435;var inst_14386 = inst_14393;var state_14425__$1 = (function (){var statearr_14439 = state_14425;(statearr_14439[7] = inst_14385__$1);
(statearr_14439[8] = inst_14386);
(statearr_14439[11] = inst_14398);
return statearr_14439;
})();var statearr_14440_14464 = state_14425__$1;(statearr_14440_14464[2] = null);
(statearr_14440_14464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 9))
{var inst_14385 = (state_14425[7]);var inst_14401 = cljs.core.vec.call(null,inst_14385);var state_14425__$1 = state_14425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14425__$1,11,out,inst_14401);
} else
{if((state_val_14426 === 10))
{var inst_14408 = (state_14425[2]);var state_14425__$1 = state_14425;var statearr_14441_14465 = state_14425__$1;(statearr_14441_14465[2] = inst_14408);
(statearr_14441_14465[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 11))
{var inst_14393 = (state_14425[10]);var inst_14389 = (state_14425[9]);var inst_14403 = (state_14425[2]);var inst_14404 = [];var inst_14405 = inst_14404.push(inst_14389);var inst_14385 = inst_14404;var inst_14386 = inst_14393;var state_14425__$1 = (function (){var statearr_14442 = state_14425;(statearr_14442[12] = inst_14405);
(statearr_14442[13] = inst_14403);
(statearr_14442[7] = inst_14385);
(statearr_14442[8] = inst_14386);
return statearr_14442;
})();var statearr_14443_14466 = state_14425__$1;(statearr_14443_14466[2] = null);
(statearr_14443_14466[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 12))
{var inst_14385 = (state_14425[7]);var inst_14413 = cljs.core.vec.call(null,inst_14385);var state_14425__$1 = state_14425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14425__$1,15,out,inst_14413);
} else
{if((state_val_14426 === 13))
{var state_14425__$1 = state_14425;var statearr_14444_14467 = state_14425__$1;(statearr_14444_14467[2] = null);
(statearr_14444_14467[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 14))
{var inst_14418 = (state_14425[2]);var inst_14419 = cljs.core.async.close_BANG_.call(null,out);var state_14425__$1 = (function (){var statearr_14445 = state_14425;(statearr_14445[14] = inst_14418);
return statearr_14445;
})();var statearr_14446_14468 = state_14425__$1;(statearr_14446_14468[2] = inst_14419);
(statearr_14446_14468[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14426 === 15))
{var inst_14415 = (state_14425[2]);var state_14425__$1 = state_14425;var statearr_14447_14469 = state_14425__$1;(statearr_14447_14469[2] = inst_14415);
(statearr_14447_14469[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_14451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14451[0] = state_machine__5507__auto__);
(statearr_14451[1] = 1);
return statearr_14451;
});
var state_machine__5507__auto____1 = (function (state_14425){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14425);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14452){if((e14452 instanceof Object))
{var ex__5510__auto__ = e14452;var statearr_14453_14470 = state_14425;(statearr_14453_14470[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14425);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14471 = state_14425;
state_14425 = G__14471;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14425){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14454 = f__5522__auto__.call(null);(statearr_14454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14455);
return statearr_14454;
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