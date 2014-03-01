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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13972 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13972 = (function (f,fn_handler,meta13973){
this.f = f;
this.fn_handler = fn_handler;
this.meta13973 = meta13973;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13972.cljs$lang$type = true;
cljs.core.async.t13972.cljs$lang$ctorStr = "cljs.core.async/t13972";
cljs.core.async.t13972.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13972");
});
cljs.core.async.t13972.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13972.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13972.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13972.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13974){var self__ = this;
var _13974__$1 = this;return self__.meta13973;
});
cljs.core.async.t13972.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13974,meta13973__$1){var self__ = this;
var _13974__$1 = this;return (new cljs.core.async.t13972(self__.f,self__.fn_handler,meta13973__$1));
});
cljs.core.async.__GT_t13972 = (function __GT_t13972(f__$1,fn_handler__$1,meta13973){return (new cljs.core.async.t13972(f__$1,fn_handler__$1,meta13973));
});
}
return (new cljs.core.async.t13972(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13976 = buff;if(G__13976)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13976.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13976.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13976);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13976);
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
{var val_13977 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13977);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13977);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13978 = n;var x_13979 = 0;while(true){
if((x_13979 < n__4248__auto___13978))
{(a[x_13979] = 0);
{
var G__13980 = (x_13979 + 1);
x_13979 = G__13980;
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
var G__13981 = (i + 1);
i = G__13981;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13985 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13985 = (function (flag,alt_flag,meta13986){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13986 = meta13986;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13985.cljs$lang$type = true;
cljs.core.async.t13985.cljs$lang$ctorStr = "cljs.core.async/t13985";
cljs.core.async.t13985.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13985");
});
cljs.core.async.t13985.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13985.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13985.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13985.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13987){var self__ = this;
var _13987__$1 = this;return self__.meta13986;
});
cljs.core.async.t13985.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13987,meta13986__$1){var self__ = this;
var _13987__$1 = this;return (new cljs.core.async.t13985(self__.flag,self__.alt_flag,meta13986__$1));
});
cljs.core.async.__GT_t13985 = (function __GT_t13985(flag__$1,alt_flag__$1,meta13986){return (new cljs.core.async.t13985(flag__$1,alt_flag__$1,meta13986));
});
}
return (new cljs.core.async.t13985(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13991 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13991 = (function (cb,flag,alt_handler,meta13992){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13992 = meta13992;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13991.cljs$lang$type = true;
cljs.core.async.t13991.cljs$lang$ctorStr = "cljs.core.async/t13991";
cljs.core.async.t13991.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13991");
});
cljs.core.async.t13991.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13991.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13991.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13991.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13993){var self__ = this;
var _13993__$1 = this;return self__.meta13992;
});
cljs.core.async.t13991.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13993,meta13992__$1){var self__ = this;
var _13993__$1 = this;return (new cljs.core.async.t13991(self__.cb,self__.flag,self__.alt_handler,meta13992__$1));
});
cljs.core.async.__GT_t13991 = (function __GT_t13991(cb__$1,flag__$1,alt_handler__$1,meta13992){return (new cljs.core.async.t13991(cb__$1,flag__$1,alt_handler__$1,meta13992));
});
}
return (new cljs.core.async.t13991(cb,flag,alt_handler,null));
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
return (function (p1__13994_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13994_SHARP_,port], null));
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
var G__13995 = (i + 1);
i = G__13995;
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
var alts_BANG___delegate = function (ports,p__13996){var map__13998 = p__13996;var map__13998__$1 = ((cljs.core.seq_QMARK_.call(null,map__13998))?cljs.core.apply.call(null,cljs.core.hash_map,map__13998):map__13998);var opts = map__13998__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13996 = null;if (arguments.length > 1) {
  p__13996 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13996);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13999){
var ports = cljs.core.first(arglist__13999);
var p__13996 = cljs.core.rest(arglist__13999);
return alts_BANG___delegate(ports,p__13996);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t14007 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14007 = (function (ch,f,map_LT_,meta14008){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14008 = meta14008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14007.cljs$lang$type = true;
cljs.core.async.t14007.cljs$lang$ctorStr = "cljs.core.async/t14007";
cljs.core.async.t14007.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14007");
});
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t14010 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14010 = (function (fn1,_,meta14008,ch,f,map_LT_,meta14011){
this.fn1 = fn1;
this._ = _;
this.meta14008 = meta14008;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta14011 = meta14011;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14010.cljs$lang$type = true;
cljs.core.async.t14010.cljs$lang$ctorStr = "cljs.core.async/t14010";
cljs.core.async.t14010.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14010");
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t14010.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__14000_SHARP_){return f1.call(null,(((p1__14000_SHARP_ == null))?null:self__.f.call(null,p1__14000_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t14010.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14012){var self__ = this;
var _14012__$1 = this;return self__.meta14011;
});
cljs.core.async.t14010.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14012,meta14011__$1){var self__ = this;
var _14012__$1 = this;return (new cljs.core.async.t14010(self__.fn1,self__._,self__.meta14008,self__.ch,self__.f,self__.map_LT_,meta14011__$1));
});
cljs.core.async.__GT_t14010 = (function __GT_t14010(fn1__$1,___$2,meta14008__$1,ch__$2,f__$2,map_LT___$2,meta14011){return (new cljs.core.async.t14010(fn1__$1,___$2,meta14008__$1,ch__$2,f__$2,map_LT___$2,meta14011));
});
}
return (new cljs.core.async.t14010(fn1,___$1,self__.meta14008,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14007.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14009){var self__ = this;
var _14009__$1 = this;return self__.meta14008;
});
cljs.core.async.t14007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14009,meta14008__$1){var self__ = this;
var _14009__$1 = this;return (new cljs.core.async.t14007(self__.ch,self__.f,self__.map_LT_,meta14008__$1));
});
cljs.core.async.__GT_t14007 = (function __GT_t14007(ch__$1,f__$1,map_LT___$1,meta14008){return (new cljs.core.async.t14007(ch__$1,f__$1,map_LT___$1,meta14008));
});
}
return (new cljs.core.async.t14007(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t14016 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14016 = (function (ch,f,map_GT_,meta14017){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta14017 = meta14017;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14016.cljs$lang$type = true;
cljs.core.async.t14016.cljs$lang$ctorStr = "cljs.core.async/t14016";
cljs.core.async.t14016.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14016");
});
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14016.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14016.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14018){var self__ = this;
var _14018__$1 = this;return self__.meta14017;
});
cljs.core.async.t14016.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14018,meta14017__$1){var self__ = this;
var _14018__$1 = this;return (new cljs.core.async.t14016(self__.ch,self__.f,self__.map_GT_,meta14017__$1));
});
cljs.core.async.__GT_t14016 = (function __GT_t14016(ch__$1,f__$1,map_GT___$1,meta14017){return (new cljs.core.async.t14016(ch__$1,f__$1,map_GT___$1,meta14017));
});
}
return (new cljs.core.async.t14016(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t14022 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14022 = (function (ch,p,filter_GT_,meta14023){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta14023 = meta14023;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14022.cljs$lang$type = true;
cljs.core.async.t14022.cljs$lang$ctorStr = "cljs.core.async/t14022";
cljs.core.async.t14022.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14022");
});
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t14022.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t14022.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_14024){var self__ = this;
var _14024__$1 = this;return self__.meta14023;
});
cljs.core.async.t14022.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_14024,meta14023__$1){var self__ = this;
var _14024__$1 = this;return (new cljs.core.async.t14022(self__.ch,self__.p,self__.filter_GT_,meta14023__$1));
});
cljs.core.async.__GT_t14022 = (function __GT_t14022(ch__$1,p__$1,filter_GT___$1,meta14023){return (new cljs.core.async.t14022(ch__$1,p__$1,filter_GT___$1,meta14023));
});
}
return (new cljs.core.async.t14022(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___14107 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14086){var state_val_14087 = (state_14086[1]);if((state_val_14087 === 1))
{var state_14086__$1 = state_14086;var statearr_14088_14108 = state_14086__$1;(statearr_14088_14108[2] = null);
(statearr_14088_14108[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14087 === 2))
{var state_14086__$1 = state_14086;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14086__$1,4,ch);
} else
{if((state_val_14087 === 3))
{var inst_14084 = (state_14086[2]);var state_14086__$1 = state_14086;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14086__$1,inst_14084);
} else
{if((state_val_14087 === 4))
{var inst_14068 = (state_14086[7]);var inst_14068__$1 = (state_14086[2]);var inst_14069 = (inst_14068__$1 == null);var state_14086__$1 = (function (){var statearr_14089 = state_14086;(statearr_14089[7] = inst_14068__$1);
return statearr_14089;
})();if(cljs.core.truth_(inst_14069))
{var statearr_14090_14109 = state_14086__$1;(statearr_14090_14109[1] = 5);
} else
{var statearr_14091_14110 = state_14086__$1;(statearr_14091_14110[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14087 === 5))
{var inst_14071 = cljs.core.async.close_BANG_.call(null,out);var state_14086__$1 = state_14086;var statearr_14092_14111 = state_14086__$1;(statearr_14092_14111[2] = inst_14071);
(statearr_14092_14111[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14087 === 6))
{var inst_14068 = (state_14086[7]);var inst_14073 = p.call(null,inst_14068);var state_14086__$1 = state_14086;if(cljs.core.truth_(inst_14073))
{var statearr_14093_14112 = state_14086__$1;(statearr_14093_14112[1] = 8);
} else
{var statearr_14094_14113 = state_14086__$1;(statearr_14094_14113[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14087 === 7))
{var inst_14082 = (state_14086[2]);var state_14086__$1 = state_14086;var statearr_14095_14114 = state_14086__$1;(statearr_14095_14114[2] = inst_14082);
(statearr_14095_14114[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14087 === 8))
{var inst_14068 = (state_14086[7]);var state_14086__$1 = state_14086;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14086__$1,11,out,inst_14068);
} else
{if((state_val_14087 === 9))
{var state_14086__$1 = state_14086;var statearr_14096_14115 = state_14086__$1;(statearr_14096_14115[2] = null);
(statearr_14096_14115[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14087 === 10))
{var inst_14079 = (state_14086[2]);var state_14086__$1 = (function (){var statearr_14097 = state_14086;(statearr_14097[8] = inst_14079);
return statearr_14097;
})();var statearr_14098_14116 = state_14086__$1;(statearr_14098_14116[2] = null);
(statearr_14098_14116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14087 === 11))
{var inst_14076 = (state_14086[2]);var state_14086__$1 = state_14086;var statearr_14099_14117 = state_14086__$1;(statearr_14099_14117[2] = inst_14076);
(statearr_14099_14117[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_14103 = [null,null,null,null,null,null,null,null,null];(statearr_14103[0] = state_machine__5507__auto__);
(statearr_14103[1] = 1);
return statearr_14103;
});
var state_machine__5507__auto____1 = (function (state_14086){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14086);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14104){if((e14104 instanceof Object))
{var ex__5510__auto__ = e14104;var statearr_14105_14118 = state_14086;(statearr_14105_14118[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14086);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14104;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14119 = state_14086;
state_14086 = G__14119;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14086){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14086);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14106 = f__5522__auto__.call(null);(statearr_14106[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14107);
return statearr_14106;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14271){var state_val_14272 = (state_14271[1]);if((state_val_14272 === 1))
{var state_14271__$1 = state_14271;var statearr_14273_14310 = state_14271__$1;(statearr_14273_14310[2] = null);
(statearr_14273_14310[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 2))
{var state_14271__$1 = state_14271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14271__$1,4,in$);
} else
{if((state_val_14272 === 3))
{var inst_14269 = (state_14271[2]);var state_14271__$1 = state_14271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14271__$1,inst_14269);
} else
{if((state_val_14272 === 4))
{var inst_14217 = (state_14271[7]);var inst_14217__$1 = (state_14271[2]);var inst_14218 = (inst_14217__$1 == null);var state_14271__$1 = (function (){var statearr_14274 = state_14271;(statearr_14274[7] = inst_14217__$1);
return statearr_14274;
})();if(cljs.core.truth_(inst_14218))
{var statearr_14275_14311 = state_14271__$1;(statearr_14275_14311[1] = 5);
} else
{var statearr_14276_14312 = state_14271__$1;(statearr_14276_14312[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 5))
{var inst_14220 = cljs.core.async.close_BANG_.call(null,out);var state_14271__$1 = state_14271;var statearr_14277_14313 = state_14271__$1;(statearr_14277_14313[2] = inst_14220);
(statearr_14277_14313[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 6))
{var inst_14217 = (state_14271[7]);var inst_14222 = f.call(null,inst_14217);var inst_14227 = cljs.core.seq.call(null,inst_14222);var inst_14228 = inst_14227;var inst_14229 = null;var inst_14230 = 0;var inst_14231 = 0;var state_14271__$1 = (function (){var statearr_14278 = state_14271;(statearr_14278[8] = inst_14228);
(statearr_14278[9] = inst_14229);
(statearr_14278[10] = inst_14231);
(statearr_14278[11] = inst_14230);
return statearr_14278;
})();var statearr_14279_14314 = state_14271__$1;(statearr_14279_14314[2] = null);
(statearr_14279_14314[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 7))
{var inst_14267 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14280_14315 = state_14271__$1;(statearr_14280_14315[2] = inst_14267);
(statearr_14280_14315[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 8))
{var inst_14231 = (state_14271[10]);var inst_14230 = (state_14271[11]);var inst_14233 = (inst_14231 < inst_14230);var inst_14234 = inst_14233;var state_14271__$1 = state_14271;if(cljs.core.truth_(inst_14234))
{var statearr_14281_14316 = state_14271__$1;(statearr_14281_14316[1] = 10);
} else
{var statearr_14282_14317 = state_14271__$1;(statearr_14282_14317[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 9))
{var inst_14264 = (state_14271[2]);var state_14271__$1 = (function (){var statearr_14283 = state_14271;(statearr_14283[12] = inst_14264);
return statearr_14283;
})();var statearr_14284_14318 = state_14271__$1;(statearr_14284_14318[2] = null);
(statearr_14284_14318[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 10))
{var inst_14229 = (state_14271[9]);var inst_14231 = (state_14271[10]);var inst_14236 = cljs.core._nth.call(null,inst_14229,inst_14231);var state_14271__$1 = state_14271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14271__$1,13,out,inst_14236);
} else
{if((state_val_14272 === 11))
{var inst_14242 = (state_14271[13]);var inst_14228 = (state_14271[8]);var inst_14242__$1 = cljs.core.seq.call(null,inst_14228);var state_14271__$1 = (function (){var statearr_14288 = state_14271;(statearr_14288[13] = inst_14242__$1);
return statearr_14288;
})();if(inst_14242__$1)
{var statearr_14289_14319 = state_14271__$1;(statearr_14289_14319[1] = 14);
} else
{var statearr_14290_14320 = state_14271__$1;(statearr_14290_14320[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 12))
{var inst_14262 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14291_14321 = state_14271__$1;(statearr_14291_14321[2] = inst_14262);
(statearr_14291_14321[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 13))
{var inst_14228 = (state_14271[8]);var inst_14229 = (state_14271[9]);var inst_14231 = (state_14271[10]);var inst_14230 = (state_14271[11]);var inst_14238 = (state_14271[2]);var inst_14239 = (inst_14231 + 1);var tmp14285 = inst_14228;var tmp14286 = inst_14229;var tmp14287 = inst_14230;var inst_14228__$1 = tmp14285;var inst_14229__$1 = tmp14286;var inst_14230__$1 = tmp14287;var inst_14231__$1 = inst_14239;var state_14271__$1 = (function (){var statearr_14292 = state_14271;(statearr_14292[8] = inst_14228__$1);
(statearr_14292[14] = inst_14238);
(statearr_14292[9] = inst_14229__$1);
(statearr_14292[10] = inst_14231__$1);
(statearr_14292[11] = inst_14230__$1);
return statearr_14292;
})();var statearr_14293_14322 = state_14271__$1;(statearr_14293_14322[2] = null);
(statearr_14293_14322[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 14))
{var inst_14242 = (state_14271[13]);var inst_14244 = cljs.core.chunked_seq_QMARK_.call(null,inst_14242);var state_14271__$1 = state_14271;if(inst_14244)
{var statearr_14294_14323 = state_14271__$1;(statearr_14294_14323[1] = 17);
} else
{var statearr_14295_14324 = state_14271__$1;(statearr_14295_14324[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 15))
{var state_14271__$1 = state_14271;var statearr_14296_14325 = state_14271__$1;(statearr_14296_14325[2] = null);
(statearr_14296_14325[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 16))
{var inst_14260 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14297_14326 = state_14271__$1;(statearr_14297_14326[2] = inst_14260);
(statearr_14297_14326[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 17))
{var inst_14242 = (state_14271[13]);var inst_14246 = cljs.core.chunk_first.call(null,inst_14242);var inst_14247 = cljs.core.chunk_rest.call(null,inst_14242);var inst_14248 = cljs.core.count.call(null,inst_14246);var inst_14228 = inst_14247;var inst_14229 = inst_14246;var inst_14230 = inst_14248;var inst_14231 = 0;var state_14271__$1 = (function (){var statearr_14298 = state_14271;(statearr_14298[8] = inst_14228);
(statearr_14298[9] = inst_14229);
(statearr_14298[10] = inst_14231);
(statearr_14298[11] = inst_14230);
return statearr_14298;
})();var statearr_14299_14327 = state_14271__$1;(statearr_14299_14327[2] = null);
(statearr_14299_14327[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 18))
{var inst_14242 = (state_14271[13]);var inst_14251 = cljs.core.first.call(null,inst_14242);var state_14271__$1 = state_14271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14271__$1,20,out,inst_14251);
} else
{if((state_val_14272 === 19))
{var inst_14257 = (state_14271[2]);var state_14271__$1 = state_14271;var statearr_14300_14328 = state_14271__$1;(statearr_14300_14328[2] = inst_14257);
(statearr_14300_14328[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14272 === 20))
{var inst_14242 = (state_14271[13]);var inst_14253 = (state_14271[2]);var inst_14254 = cljs.core.next.call(null,inst_14242);var inst_14228 = inst_14254;var inst_14229 = null;var inst_14230 = 0;var inst_14231 = 0;var state_14271__$1 = (function (){var statearr_14301 = state_14271;(statearr_14301[15] = inst_14253);
(statearr_14301[8] = inst_14228);
(statearr_14301[9] = inst_14229);
(statearr_14301[10] = inst_14231);
(statearr_14301[11] = inst_14230);
return statearr_14301;
})();var statearr_14302_14329 = state_14271__$1;(statearr_14302_14329[2] = null);
(statearr_14302_14329[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_14306 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14306[0] = state_machine__5507__auto__);
(statearr_14306[1] = 1);
return statearr_14306;
});
var state_machine__5507__auto____1 = (function (state_14271){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14271);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14307){if((e14307 instanceof Object))
{var ex__5510__auto__ = e14307;var statearr_14308_14330 = state_14271;(statearr_14308_14330[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14331 = state_14271;
state_14271 = G__14331;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14271){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14309 = f__5522__auto__.call(null);(statearr_14309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14309;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14412 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14391){var state_val_14392 = (state_14391[1]);if((state_val_14392 === 1))
{var state_14391__$1 = state_14391;var statearr_14393_14413 = state_14391__$1;(statearr_14393_14413[2] = null);
(statearr_14393_14413[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 2))
{var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14391__$1,4,from);
} else
{if((state_val_14392 === 3))
{var inst_14389 = (state_14391[2]);var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14391__$1,inst_14389);
} else
{if((state_val_14392 === 4))
{var inst_14374 = (state_14391[7]);var inst_14374__$1 = (state_14391[2]);var inst_14375 = (inst_14374__$1 == null);var state_14391__$1 = (function (){var statearr_14394 = state_14391;(statearr_14394[7] = inst_14374__$1);
return statearr_14394;
})();if(cljs.core.truth_(inst_14375))
{var statearr_14395_14414 = state_14391__$1;(statearr_14395_14414[1] = 5);
} else
{var statearr_14396_14415 = state_14391__$1;(statearr_14396_14415[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 5))
{var state_14391__$1 = state_14391;if(cljs.core.truth_(close_QMARK_))
{var statearr_14397_14416 = state_14391__$1;(statearr_14397_14416[1] = 8);
} else
{var statearr_14398_14417 = state_14391__$1;(statearr_14398_14417[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 6))
{var inst_14374 = (state_14391[7]);var state_14391__$1 = state_14391;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14391__$1,11,to,inst_14374);
} else
{if((state_val_14392 === 7))
{var inst_14387 = (state_14391[2]);var state_14391__$1 = state_14391;var statearr_14399_14418 = state_14391__$1;(statearr_14399_14418[2] = inst_14387);
(statearr_14399_14418[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 8))
{var inst_14378 = cljs.core.async.close_BANG_.call(null,to);var state_14391__$1 = state_14391;var statearr_14400_14419 = state_14391__$1;(statearr_14400_14419[2] = inst_14378);
(statearr_14400_14419[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 9))
{var state_14391__$1 = state_14391;var statearr_14401_14420 = state_14391__$1;(statearr_14401_14420[2] = null);
(statearr_14401_14420[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 10))
{var inst_14381 = (state_14391[2]);var state_14391__$1 = state_14391;var statearr_14402_14421 = state_14391__$1;(statearr_14402_14421[2] = inst_14381);
(statearr_14402_14421[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14392 === 11))
{var inst_14384 = (state_14391[2]);var state_14391__$1 = (function (){var statearr_14403 = state_14391;(statearr_14403[8] = inst_14384);
return statearr_14403;
})();var statearr_14404_14422 = state_14391__$1;(statearr_14404_14422[2] = null);
(statearr_14404_14422[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14408 = [null,null,null,null,null,null,null,null,null];(statearr_14408[0] = state_machine__5507__auto__);
(statearr_14408[1] = 1);
return statearr_14408;
});
var state_machine__5507__auto____1 = (function (state_14391){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14391);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14409){if((e14409 instanceof Object))
{var ex__5510__auto__ = e14409;var statearr_14410_14423 = state_14391;(statearr_14410_14423[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14391);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14409;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14424 = state_14391;
state_14391 = G__14424;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14391){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14391);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14411 = f__5522__auto__.call(null);(statearr_14411[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14412);
return statearr_14411;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14511 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14489){var state_val_14490 = (state_14489[1]);if((state_val_14490 === 1))
{var state_14489__$1 = state_14489;var statearr_14491_14512 = state_14489__$1;(statearr_14491_14512[2] = null);
(statearr_14491_14512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14490 === 2))
{var state_14489__$1 = state_14489;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14489__$1,4,ch);
} else
{if((state_val_14490 === 3))
{var inst_14487 = (state_14489[2]);var state_14489__$1 = state_14489;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14489__$1,inst_14487);
} else
{if((state_val_14490 === 4))
{var inst_14470 = (state_14489[7]);var inst_14470__$1 = (state_14489[2]);var inst_14471 = (inst_14470__$1 == null);var state_14489__$1 = (function (){var statearr_14492 = state_14489;(statearr_14492[7] = inst_14470__$1);
return statearr_14492;
})();if(cljs.core.truth_(inst_14471))
{var statearr_14493_14513 = state_14489__$1;(statearr_14493_14513[1] = 5);
} else
{var statearr_14494_14514 = state_14489__$1;(statearr_14494_14514[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14490 === 5))
{var inst_14473 = cljs.core.async.close_BANG_.call(null,tc);var inst_14474 = cljs.core.async.close_BANG_.call(null,fc);var state_14489__$1 = (function (){var statearr_14495 = state_14489;(statearr_14495[8] = inst_14473);
return statearr_14495;
})();var statearr_14496_14515 = state_14489__$1;(statearr_14496_14515[2] = inst_14474);
(statearr_14496_14515[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14490 === 6))
{var inst_14470 = (state_14489[7]);var inst_14476 = p.call(null,inst_14470);var state_14489__$1 = state_14489;if(cljs.core.truth_(inst_14476))
{var statearr_14497_14516 = state_14489__$1;(statearr_14497_14516[1] = 9);
} else
{var statearr_14498_14517 = state_14489__$1;(statearr_14498_14517[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14490 === 7))
{var inst_14485 = (state_14489[2]);var state_14489__$1 = state_14489;var statearr_14499_14518 = state_14489__$1;(statearr_14499_14518[2] = inst_14485);
(statearr_14499_14518[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14490 === 8))
{var inst_14482 = (state_14489[2]);var state_14489__$1 = (function (){var statearr_14500 = state_14489;(statearr_14500[9] = inst_14482);
return statearr_14500;
})();var statearr_14501_14519 = state_14489__$1;(statearr_14501_14519[2] = null);
(statearr_14501_14519[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14490 === 9))
{var state_14489__$1 = state_14489;var statearr_14502_14520 = state_14489__$1;(statearr_14502_14520[2] = tc);
(statearr_14502_14520[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14490 === 10))
{var state_14489__$1 = state_14489;var statearr_14503_14521 = state_14489__$1;(statearr_14503_14521[2] = fc);
(statearr_14503_14521[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14490 === 11))
{var inst_14470 = (state_14489[7]);var inst_14480 = (state_14489[2]);var state_14489__$1 = state_14489;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14489__$1,8,inst_14480,inst_14470);
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
var state_machine__5507__auto____0 = (function (){var statearr_14507 = [null,null,null,null,null,null,null,null,null,null];(statearr_14507[0] = state_machine__5507__auto__);
(statearr_14507[1] = 1);
return statearr_14507;
});
var state_machine__5507__auto____1 = (function (state_14489){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14489);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14508){if((e14508 instanceof Object))
{var ex__5510__auto__ = e14508;var statearr_14509_14522 = state_14489;(statearr_14509_14522[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14489);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14508;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14523 = state_14489;
state_14489 = G__14523;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14489){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14510 = f__5522__auto__.call(null);(statearr_14510[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14511);
return statearr_14510;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14570){var state_val_14571 = (state_14570[1]);if((state_val_14571 === 7))
{var inst_14566 = (state_14570[2]);var state_14570__$1 = state_14570;var statearr_14572_14588 = state_14570__$1;(statearr_14572_14588[2] = inst_14566);
(statearr_14572_14588[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14571 === 6))
{var inst_14559 = (state_14570[7]);var inst_14556 = (state_14570[8]);var inst_14563 = f.call(null,inst_14556,inst_14559);var inst_14556__$1 = inst_14563;var state_14570__$1 = (function (){var statearr_14573 = state_14570;(statearr_14573[8] = inst_14556__$1);
return statearr_14573;
})();var statearr_14574_14589 = state_14570__$1;(statearr_14574_14589[2] = null);
(statearr_14574_14589[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14571 === 5))
{var inst_14556 = (state_14570[8]);var state_14570__$1 = state_14570;var statearr_14575_14590 = state_14570__$1;(statearr_14575_14590[2] = inst_14556);
(statearr_14575_14590[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14571 === 4))
{var inst_14559 = (state_14570[7]);var inst_14559__$1 = (state_14570[2]);var inst_14560 = (inst_14559__$1 == null);var state_14570__$1 = (function (){var statearr_14576 = state_14570;(statearr_14576[7] = inst_14559__$1);
return statearr_14576;
})();if(cljs.core.truth_(inst_14560))
{var statearr_14577_14591 = state_14570__$1;(statearr_14577_14591[1] = 5);
} else
{var statearr_14578_14592 = state_14570__$1;(statearr_14578_14592[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14571 === 3))
{var inst_14568 = (state_14570[2]);var state_14570__$1 = state_14570;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14570__$1,inst_14568);
} else
{if((state_val_14571 === 2))
{var state_14570__$1 = state_14570;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14570__$1,4,ch);
} else
{if((state_val_14571 === 1))
{var inst_14556 = init;var state_14570__$1 = (function (){var statearr_14579 = state_14570;(statearr_14579[8] = inst_14556);
return statearr_14579;
})();var statearr_14580_14593 = state_14570__$1;(statearr_14580_14593[2] = null);
(statearr_14580_14593[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14584 = [null,null,null,null,null,null,null,null,null];(statearr_14584[0] = state_machine__5507__auto__);
(statearr_14584[1] = 1);
return statearr_14584;
});
var state_machine__5507__auto____1 = (function (state_14570){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14570);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14585){if((e14585 instanceof Object))
{var ex__5510__auto__ = e14585;var statearr_14586_14594 = state_14570;(statearr_14586_14594[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14570);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14585;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14595 = state_14570;
state_14570 = G__14595;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14570){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14587 = f__5522__auto__.call(null);(statearr_14587[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14587;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14657){var state_val_14658 = (state_14657[1]);if((state_val_14658 === 1))
{var inst_14637 = cljs.core.seq.call(null,coll);var inst_14638 = inst_14637;var state_14657__$1 = (function (){var statearr_14659 = state_14657;(statearr_14659[7] = inst_14638);
return statearr_14659;
})();var statearr_14660_14678 = state_14657__$1;(statearr_14660_14678[2] = null);
(statearr_14660_14678[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 2))
{var inst_14638 = (state_14657[7]);var state_14657__$1 = state_14657;if(cljs.core.truth_(inst_14638))
{var statearr_14661_14679 = state_14657__$1;(statearr_14661_14679[1] = 4);
} else
{var statearr_14662_14680 = state_14657__$1;(statearr_14662_14680[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 3))
{var inst_14655 = (state_14657[2]);var state_14657__$1 = state_14657;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14657__$1,inst_14655);
} else
{if((state_val_14658 === 4))
{var inst_14638 = (state_14657[7]);var inst_14641 = cljs.core.first.call(null,inst_14638);var state_14657__$1 = state_14657;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14657__$1,7,ch,inst_14641);
} else
{if((state_val_14658 === 5))
{var state_14657__$1 = state_14657;if(cljs.core.truth_(close_QMARK_))
{var statearr_14663_14681 = state_14657__$1;(statearr_14663_14681[1] = 8);
} else
{var statearr_14664_14682 = state_14657__$1;(statearr_14664_14682[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 6))
{var inst_14653 = (state_14657[2]);var state_14657__$1 = state_14657;var statearr_14665_14683 = state_14657__$1;(statearr_14665_14683[2] = inst_14653);
(statearr_14665_14683[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 7))
{var inst_14638 = (state_14657[7]);var inst_14643 = (state_14657[2]);var inst_14644 = cljs.core.next.call(null,inst_14638);var inst_14638__$1 = inst_14644;var state_14657__$1 = (function (){var statearr_14666 = state_14657;(statearr_14666[8] = inst_14643);
(statearr_14666[7] = inst_14638__$1);
return statearr_14666;
})();var statearr_14667_14684 = state_14657__$1;(statearr_14667_14684[2] = null);
(statearr_14667_14684[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 8))
{var inst_14648 = cljs.core.async.close_BANG_.call(null,ch);var state_14657__$1 = state_14657;var statearr_14668_14685 = state_14657__$1;(statearr_14668_14685[2] = inst_14648);
(statearr_14668_14685[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 9))
{var state_14657__$1 = state_14657;var statearr_14669_14686 = state_14657__$1;(statearr_14669_14686[2] = null);
(statearr_14669_14686[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14658 === 10))
{var inst_14651 = (state_14657[2]);var state_14657__$1 = state_14657;var statearr_14670_14687 = state_14657__$1;(statearr_14670_14687[2] = inst_14651);
(statearr_14670_14687[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14674 = [null,null,null,null,null,null,null,null,null];(statearr_14674[0] = state_machine__5507__auto__);
(statearr_14674[1] = 1);
return statearr_14674;
});
var state_machine__5507__auto____1 = (function (state_14657){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14657);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14675){if((e14675 instanceof Object))
{var ex__5510__auto__ = e14675;var statearr_14676_14688 = state_14657;(statearr_14676_14688[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14657);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14675;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14689 = state_14657;
state_14657 = G__14689;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14657){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14677 = f__5522__auto__.call(null);(statearr_14677[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14677;
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
cljs.core.async.Mux = (function (){var obj14691 = {};return obj14691;
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
cljs.core.async.Mult = (function (){var obj14693 = {};return obj14693;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14917 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14917 = (function (cs,ch,mult,meta14918){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14918 = meta14918;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14917.cljs$lang$type = true;
cljs.core.async.t14917.cljs$lang$ctorStr = "cljs.core.async/t14917";
cljs.core.async.t14917.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14917");
});})(cs))
;
cljs.core.async.t14917.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14917.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14917.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14917.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14917.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14917.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14917.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14919){var self__ = this;
var _14919__$1 = this;return self__.meta14918;
});})(cs))
;
cljs.core.async.t14917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14919,meta14918__$1){var self__ = this;
var _14919__$1 = this;return (new cljs.core.async.t14917(self__.cs,self__.ch,self__.mult,meta14918__$1));
});})(cs))
;
cljs.core.async.__GT_t14917 = ((function (cs){
return (function __GT_t14917(cs__$1,ch__$1,mult__$1,meta14918){return (new cljs.core.async.t14917(cs__$1,ch__$1,mult__$1,meta14918));
});})(cs))
;
}
return (new cljs.core.async.t14917(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___15140 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15054){var state_val_15055 = (state_15054[1]);if((state_val_15055 === 32))
{var inst_14922 = (state_15054[7]);var inst_14998 = (state_15054[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15054,31,Object,null,30);var inst_15005 = cljs.core.async.put_BANG_.call(null,inst_14998,inst_14922,done);var state_15054__$1 = state_15054;var statearr_15056_15141 = state_15054__$1;(statearr_15056_15141[2] = inst_15005);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15054__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 1))
{var state_15054__$1 = state_15054;var statearr_15057_15142 = state_15054__$1;(statearr_15057_15142[2] = null);
(statearr_15057_15142[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 33))
{var inst_15011 = (state_15054[9]);var inst_15013 = cljs.core.chunked_seq_QMARK_.call(null,inst_15011);var state_15054__$1 = state_15054;if(inst_15013)
{var statearr_15058_15143 = state_15054__$1;(statearr_15058_15143[1] = 36);
} else
{var statearr_15059_15144 = state_15054__$1;(statearr_15059_15144[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 2))
{var state_15054__$1 = state_15054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15054__$1,4,ch);
} else
{if((state_val_15055 === 34))
{var state_15054__$1 = state_15054;var statearr_15060_15145 = state_15054__$1;(statearr_15060_15145[2] = null);
(statearr_15060_15145[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 3))
{var inst_15052 = (state_15054[2]);var state_15054__$1 = state_15054;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15054__$1,inst_15052);
} else
{if((state_val_15055 === 35))
{var inst_15036 = (state_15054[2]);var state_15054__$1 = state_15054;var statearr_15061_15146 = state_15054__$1;(statearr_15061_15146[2] = inst_15036);
(statearr_15061_15146[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 4))
{var inst_14922 = (state_15054[7]);var inst_14922__$1 = (state_15054[2]);var inst_14923 = (inst_14922__$1 == null);var state_15054__$1 = (function (){var statearr_15062 = state_15054;(statearr_15062[7] = inst_14922__$1);
return statearr_15062;
})();if(cljs.core.truth_(inst_14923))
{var statearr_15063_15147 = state_15054__$1;(statearr_15063_15147[1] = 5);
} else
{var statearr_15064_15148 = state_15054__$1;(statearr_15064_15148[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 36))
{var inst_15011 = (state_15054[9]);var inst_15015 = cljs.core.chunk_first.call(null,inst_15011);var inst_15016 = cljs.core.chunk_rest.call(null,inst_15011);var inst_15017 = cljs.core.count.call(null,inst_15015);var inst_14990 = inst_15016;var inst_14991 = inst_15015;var inst_14992 = inst_15017;var inst_14993 = 0;var state_15054__$1 = (function (){var statearr_15065 = state_15054;(statearr_15065[10] = inst_14992);
(statearr_15065[11] = inst_14993);
(statearr_15065[12] = inst_14990);
(statearr_15065[13] = inst_14991);
return statearr_15065;
})();var statearr_15066_15149 = state_15054__$1;(statearr_15066_15149[2] = null);
(statearr_15066_15149[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 5))
{var inst_14929 = cljs.core.deref.call(null,cs);var inst_14930 = cljs.core.seq.call(null,inst_14929);var inst_14931 = inst_14930;var inst_14932 = null;var inst_14933 = 0;var inst_14934 = 0;var state_15054__$1 = (function (){var statearr_15067 = state_15054;(statearr_15067[14] = inst_14931);
(statearr_15067[15] = inst_14932);
(statearr_15067[16] = inst_14933);
(statearr_15067[17] = inst_14934);
return statearr_15067;
})();var statearr_15068_15150 = state_15054__$1;(statearr_15068_15150[2] = null);
(statearr_15068_15150[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 37))
{var inst_15011 = (state_15054[9]);var inst_15020 = cljs.core.first.call(null,inst_15011);var state_15054__$1 = (function (){var statearr_15069 = state_15054;(statearr_15069[18] = inst_15020);
return statearr_15069;
})();var statearr_15070_15151 = state_15054__$1;(statearr_15070_15151[2] = null);
(statearr_15070_15151[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 6))
{var inst_14982 = (state_15054[19]);var inst_14981 = cljs.core.deref.call(null,cs);var inst_14982__$1 = cljs.core.keys.call(null,inst_14981);var inst_14983 = cljs.core.count.call(null,inst_14982__$1);var inst_14984 = cljs.core.reset_BANG_.call(null,dctr,inst_14983);var inst_14989 = cljs.core.seq.call(null,inst_14982__$1);var inst_14990 = inst_14989;var inst_14991 = null;var inst_14992 = 0;var inst_14993 = 0;var state_15054__$1 = (function (){var statearr_15071 = state_15054;(statearr_15071[19] = inst_14982__$1);
(statearr_15071[10] = inst_14992);
(statearr_15071[11] = inst_14993);
(statearr_15071[12] = inst_14990);
(statearr_15071[13] = inst_14991);
(statearr_15071[20] = inst_14984);
return statearr_15071;
})();var statearr_15072_15152 = state_15054__$1;(statearr_15072_15152[2] = null);
(statearr_15072_15152[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 38))
{var inst_15033 = (state_15054[2]);var state_15054__$1 = state_15054;var statearr_15073_15153 = state_15054__$1;(statearr_15073_15153[2] = inst_15033);
(statearr_15073_15153[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 7))
{var inst_15050 = (state_15054[2]);var state_15054__$1 = state_15054;var statearr_15074_15154 = state_15054__$1;(statearr_15074_15154[2] = inst_15050);
(statearr_15074_15154[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 39))
{var inst_15011 = (state_15054[9]);var inst_15029 = (state_15054[2]);var inst_15030 = cljs.core.next.call(null,inst_15011);var inst_14990 = inst_15030;var inst_14991 = null;var inst_14992 = 0;var inst_14993 = 0;var state_15054__$1 = (function (){var statearr_15075 = state_15054;(statearr_15075[21] = inst_15029);
(statearr_15075[10] = inst_14992);
(statearr_15075[11] = inst_14993);
(statearr_15075[12] = inst_14990);
(statearr_15075[13] = inst_14991);
return statearr_15075;
})();var statearr_15076_15155 = state_15054__$1;(statearr_15076_15155[2] = null);
(statearr_15076_15155[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 8))
{var inst_14933 = (state_15054[16]);var inst_14934 = (state_15054[17]);var inst_14936 = (inst_14934 < inst_14933);var inst_14937 = inst_14936;var state_15054__$1 = state_15054;if(cljs.core.truth_(inst_14937))
{var statearr_15077_15156 = state_15054__$1;(statearr_15077_15156[1] = 10);
} else
{var statearr_15078_15157 = state_15054__$1;(statearr_15078_15157[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 40))
{var inst_15020 = (state_15054[18]);var inst_15021 = (state_15054[2]);var inst_15022 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15023 = cljs.core.async.untap_STAR_.call(null,m,inst_15020);var state_15054__$1 = (function (){var statearr_15079 = state_15054;(statearr_15079[22] = inst_15022);
(statearr_15079[23] = inst_15021);
return statearr_15079;
})();var statearr_15080_15158 = state_15054__$1;(statearr_15080_15158[2] = inst_15023);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15054__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 9))
{var inst_14979 = (state_15054[2]);var state_15054__$1 = state_15054;var statearr_15081_15159 = state_15054__$1;(statearr_15081_15159[2] = inst_14979);
(statearr_15081_15159[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 41))
{var inst_14922 = (state_15054[7]);var inst_15020 = (state_15054[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15054,40,Object,null,39);var inst_15027 = cljs.core.async.put_BANG_.call(null,inst_15020,inst_14922,done);var state_15054__$1 = state_15054;var statearr_15082_15160 = state_15054__$1;(statearr_15082_15160[2] = inst_15027);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15054__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 10))
{var inst_14932 = (state_15054[15]);var inst_14934 = (state_15054[17]);var inst_14940 = cljs.core._nth.call(null,inst_14932,inst_14934);var inst_14941 = cljs.core.nth.call(null,inst_14940,0,null);var inst_14942 = cljs.core.nth.call(null,inst_14940,1,null);var state_15054__$1 = (function (){var statearr_15083 = state_15054;(statearr_15083[24] = inst_14941);
return statearr_15083;
})();if(cljs.core.truth_(inst_14942))
{var statearr_15084_15161 = state_15054__$1;(statearr_15084_15161[1] = 13);
} else
{var statearr_15085_15162 = state_15054__$1;(statearr_15085_15162[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 42))
{var state_15054__$1 = state_15054;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15054__$1,45,dchan);
} else
{if((state_val_15055 === 11))
{var inst_14931 = (state_15054[14]);var inst_14951 = (state_15054[25]);var inst_14951__$1 = cljs.core.seq.call(null,inst_14931);var state_15054__$1 = (function (){var statearr_15086 = state_15054;(statearr_15086[25] = inst_14951__$1);
return statearr_15086;
})();if(inst_14951__$1)
{var statearr_15087_15163 = state_15054__$1;(statearr_15087_15163[1] = 16);
} else
{var statearr_15088_15164 = state_15054__$1;(statearr_15088_15164[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 43))
{var state_15054__$1 = state_15054;var statearr_15089_15165 = state_15054__$1;(statearr_15089_15165[2] = null);
(statearr_15089_15165[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 12))
{var inst_14977 = (state_15054[2]);var state_15054__$1 = state_15054;var statearr_15090_15166 = state_15054__$1;(statearr_15090_15166[2] = inst_14977);
(statearr_15090_15166[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 44))
{var inst_15047 = (state_15054[2]);var state_15054__$1 = (function (){var statearr_15091 = state_15054;(statearr_15091[26] = inst_15047);
return statearr_15091;
})();var statearr_15092_15167 = state_15054__$1;(statearr_15092_15167[2] = null);
(statearr_15092_15167[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 13))
{var inst_14941 = (state_15054[24]);var inst_14944 = cljs.core.async.close_BANG_.call(null,inst_14941);var state_15054__$1 = state_15054;var statearr_15093_15168 = state_15054__$1;(statearr_15093_15168[2] = inst_14944);
(statearr_15093_15168[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 45))
{var inst_15044 = (state_15054[2]);var state_15054__$1 = state_15054;var statearr_15097_15169 = state_15054__$1;(statearr_15097_15169[2] = inst_15044);
(statearr_15097_15169[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 14))
{var state_15054__$1 = state_15054;var statearr_15098_15170 = state_15054__$1;(statearr_15098_15170[2] = null);
(statearr_15098_15170[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 15))
{var inst_14931 = (state_15054[14]);var inst_14932 = (state_15054[15]);var inst_14933 = (state_15054[16]);var inst_14934 = (state_15054[17]);var inst_14947 = (state_15054[2]);var inst_14948 = (inst_14934 + 1);var tmp15094 = inst_14931;var tmp15095 = inst_14932;var tmp15096 = inst_14933;var inst_14931__$1 = tmp15094;var inst_14932__$1 = tmp15095;var inst_14933__$1 = tmp15096;var inst_14934__$1 = inst_14948;var state_15054__$1 = (function (){var statearr_15099 = state_15054;(statearr_15099[14] = inst_14931__$1);
(statearr_15099[27] = inst_14947);
(statearr_15099[15] = inst_14932__$1);
(statearr_15099[16] = inst_14933__$1);
(statearr_15099[17] = inst_14934__$1);
return statearr_15099;
})();var statearr_15100_15171 = state_15054__$1;(statearr_15100_15171[2] = null);
(statearr_15100_15171[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 16))
{var inst_14951 = (state_15054[25]);var inst_14953 = cljs.core.chunked_seq_QMARK_.call(null,inst_14951);var state_15054__$1 = state_15054;if(inst_14953)
{var statearr_15101_15172 = state_15054__$1;(statearr_15101_15172[1] = 19);
} else
{var statearr_15102_15173 = state_15054__$1;(statearr_15102_15173[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 17))
{var state_15054__$1 = state_15054;var statearr_15103_15174 = state_15054__$1;(statearr_15103_15174[2] = null);
(statearr_15103_15174[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 18))
{var inst_14975 = (state_15054[2]);var state_15054__$1 = state_15054;var statearr_15104_15175 = state_15054__$1;(statearr_15104_15175[2] = inst_14975);
(statearr_15104_15175[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 19))
{var inst_14951 = (state_15054[25]);var inst_14955 = cljs.core.chunk_first.call(null,inst_14951);var inst_14956 = cljs.core.chunk_rest.call(null,inst_14951);var inst_14957 = cljs.core.count.call(null,inst_14955);var inst_14931 = inst_14956;var inst_14932 = inst_14955;var inst_14933 = inst_14957;var inst_14934 = 0;var state_15054__$1 = (function (){var statearr_15105 = state_15054;(statearr_15105[14] = inst_14931);
(statearr_15105[15] = inst_14932);
(statearr_15105[16] = inst_14933);
(statearr_15105[17] = inst_14934);
return statearr_15105;
})();var statearr_15106_15176 = state_15054__$1;(statearr_15106_15176[2] = null);
(statearr_15106_15176[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 20))
{var inst_14951 = (state_15054[25]);var inst_14961 = cljs.core.first.call(null,inst_14951);var inst_14962 = cljs.core.nth.call(null,inst_14961,0,null);var inst_14963 = cljs.core.nth.call(null,inst_14961,1,null);var state_15054__$1 = (function (){var statearr_15107 = state_15054;(statearr_15107[28] = inst_14962);
return statearr_15107;
})();if(cljs.core.truth_(inst_14963))
{var statearr_15108_15177 = state_15054__$1;(statearr_15108_15177[1] = 22);
} else
{var statearr_15109_15178 = state_15054__$1;(statearr_15109_15178[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 21))
{var inst_14972 = (state_15054[2]);var state_15054__$1 = state_15054;var statearr_15110_15179 = state_15054__$1;(statearr_15110_15179[2] = inst_14972);
(statearr_15110_15179[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 22))
{var inst_14962 = (state_15054[28]);var inst_14965 = cljs.core.async.close_BANG_.call(null,inst_14962);var state_15054__$1 = state_15054;var statearr_15111_15180 = state_15054__$1;(statearr_15111_15180[2] = inst_14965);
(statearr_15111_15180[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 23))
{var state_15054__$1 = state_15054;var statearr_15112_15181 = state_15054__$1;(statearr_15112_15181[2] = null);
(statearr_15112_15181[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 24))
{var inst_14951 = (state_15054[25]);var inst_14968 = (state_15054[2]);var inst_14969 = cljs.core.next.call(null,inst_14951);var inst_14931 = inst_14969;var inst_14932 = null;var inst_14933 = 0;var inst_14934 = 0;var state_15054__$1 = (function (){var statearr_15113 = state_15054;(statearr_15113[14] = inst_14931);
(statearr_15113[29] = inst_14968);
(statearr_15113[15] = inst_14932);
(statearr_15113[16] = inst_14933);
(statearr_15113[17] = inst_14934);
return statearr_15113;
})();var statearr_15114_15182 = state_15054__$1;(statearr_15114_15182[2] = null);
(statearr_15114_15182[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 25))
{var inst_14992 = (state_15054[10]);var inst_14993 = (state_15054[11]);var inst_14995 = (inst_14993 < inst_14992);var inst_14996 = inst_14995;var state_15054__$1 = state_15054;if(cljs.core.truth_(inst_14996))
{var statearr_15115_15183 = state_15054__$1;(statearr_15115_15183[1] = 27);
} else
{var statearr_15116_15184 = state_15054__$1;(statearr_15116_15184[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 26))
{var inst_14982 = (state_15054[19]);var inst_15040 = (state_15054[2]);var inst_15041 = cljs.core.seq.call(null,inst_14982);var state_15054__$1 = (function (){var statearr_15117 = state_15054;(statearr_15117[30] = inst_15040);
return statearr_15117;
})();if(inst_15041)
{var statearr_15118_15185 = state_15054__$1;(statearr_15118_15185[1] = 42);
} else
{var statearr_15119_15186 = state_15054__$1;(statearr_15119_15186[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 27))
{var inst_14993 = (state_15054[11]);var inst_14991 = (state_15054[13]);var inst_14998 = cljs.core._nth.call(null,inst_14991,inst_14993);var state_15054__$1 = (function (){var statearr_15120 = state_15054;(statearr_15120[8] = inst_14998);
return statearr_15120;
})();var statearr_15121_15187 = state_15054__$1;(statearr_15121_15187[2] = null);
(statearr_15121_15187[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 28))
{var inst_15011 = (state_15054[9]);var inst_14990 = (state_15054[12]);var inst_15011__$1 = cljs.core.seq.call(null,inst_14990);var state_15054__$1 = (function (){var statearr_15125 = state_15054;(statearr_15125[9] = inst_15011__$1);
return statearr_15125;
})();if(inst_15011__$1)
{var statearr_15126_15188 = state_15054__$1;(statearr_15126_15188[1] = 33);
} else
{var statearr_15127_15189 = state_15054__$1;(statearr_15127_15189[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 29))
{var inst_15038 = (state_15054[2]);var state_15054__$1 = state_15054;var statearr_15128_15190 = state_15054__$1;(statearr_15128_15190[2] = inst_15038);
(statearr_15128_15190[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 30))
{var inst_14992 = (state_15054[10]);var inst_14993 = (state_15054[11]);var inst_14990 = (state_15054[12]);var inst_14991 = (state_15054[13]);var inst_15007 = (state_15054[2]);var inst_15008 = (inst_14993 + 1);var tmp15122 = inst_14992;var tmp15123 = inst_14990;var tmp15124 = inst_14991;var inst_14990__$1 = tmp15123;var inst_14991__$1 = tmp15124;var inst_14992__$1 = tmp15122;var inst_14993__$1 = inst_15008;var state_15054__$1 = (function (){var statearr_15129 = state_15054;(statearr_15129[31] = inst_15007);
(statearr_15129[10] = inst_14992__$1);
(statearr_15129[11] = inst_14993__$1);
(statearr_15129[12] = inst_14990__$1);
(statearr_15129[13] = inst_14991__$1);
return statearr_15129;
})();var statearr_15130_15191 = state_15054__$1;(statearr_15130_15191[2] = null);
(statearr_15130_15191[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15055 === 31))
{var inst_14998 = (state_15054[8]);var inst_14999 = (state_15054[2]);var inst_15000 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_15001 = cljs.core.async.untap_STAR_.call(null,m,inst_14998);var state_15054__$1 = (function (){var statearr_15131 = state_15054;(statearr_15131[32] = inst_14999);
(statearr_15131[33] = inst_15000);
return statearr_15131;
})();var statearr_15132_15192 = state_15054__$1;(statearr_15132_15192[2] = inst_15001);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15054__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15136 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15136[0] = state_machine__5507__auto__);
(statearr_15136[1] = 1);
return statearr_15136;
});
var state_machine__5507__auto____1 = (function (state_15054){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15054);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15137){if((e15137 instanceof Object))
{var ex__5510__auto__ = e15137;var statearr_15138_15193 = state_15054;(statearr_15138_15193[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15054);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15137;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15194 = state_15054;
state_15054 = G__15194;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15054){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15139 = f__5522__auto__.call(null);(statearr_15139[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15140);
return statearr_15139;
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
cljs.core.async.Mix = (function (){var obj15196 = {};return obj15196;
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
;var m = (function (){if(typeof cljs.core.async.t15306 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15306 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15307){
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
this.meta15307 = meta15307;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15306.cljs$lang$type = true;
cljs.core.async.t15306.cljs$lang$ctorStr = "cljs.core.async/t15306";
cljs.core.async.t15306.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15306");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15306.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15306.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15306.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15306.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15306.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15306.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15306.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15306.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15306.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15308){var self__ = this;
var _15308__$1 = this;return self__.meta15307;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15308,meta15307__$1){var self__ = this;
var _15308__$1 = this;return (new cljs.core.async.t15306(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15307__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15306 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15306(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15307){return (new cljs.core.async.t15306(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15307));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15306(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15415 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15373){var state_val_15374 = (state_15373[1]);if((state_val_15374 === 1))
{var inst_15312 = (state_15373[7]);var inst_15312__$1 = calc_state.call(null);var inst_15313 = cljs.core.seq_QMARK_.call(null,inst_15312__$1);var state_15373__$1 = (function (){var statearr_15375 = state_15373;(statearr_15375[7] = inst_15312__$1);
return statearr_15375;
})();if(inst_15313)
{var statearr_15376_15416 = state_15373__$1;(statearr_15376_15416[1] = 2);
} else
{var statearr_15377_15417 = state_15373__$1;(statearr_15377_15417[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 2))
{var inst_15312 = (state_15373[7]);var inst_15315 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15312);var state_15373__$1 = state_15373;var statearr_15378_15418 = state_15373__$1;(statearr_15378_15418[2] = inst_15315);
(statearr_15378_15418[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 3))
{var inst_15312 = (state_15373[7]);var state_15373__$1 = state_15373;var statearr_15379_15419 = state_15373__$1;(statearr_15379_15419[2] = inst_15312);
(statearr_15379_15419[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 4))
{var inst_15312 = (state_15373[7]);var inst_15318 = (state_15373[2]);var inst_15319 = cljs.core.get.call(null,inst_15318,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15320 = cljs.core.get.call(null,inst_15318,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15321 = cljs.core.get.call(null,inst_15318,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15322 = inst_15312;var state_15373__$1 = (function (){var statearr_15380 = state_15373;(statearr_15380[8] = inst_15319);
(statearr_15380[9] = inst_15322);
(statearr_15380[10] = inst_15320);
(statearr_15380[11] = inst_15321);
return statearr_15380;
})();var statearr_15381_15420 = state_15373__$1;(statearr_15381_15420[2] = null);
(statearr_15381_15420[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 5))
{var inst_15322 = (state_15373[9]);var inst_15325 = cljs.core.seq_QMARK_.call(null,inst_15322);var state_15373__$1 = state_15373;if(inst_15325)
{var statearr_15382_15421 = state_15373__$1;(statearr_15382_15421[1] = 7);
} else
{var statearr_15383_15422 = state_15373__$1;(statearr_15383_15422[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 6))
{var inst_15371 = (state_15373[2]);var state_15373__$1 = state_15373;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15373__$1,inst_15371);
} else
{if((state_val_15374 === 7))
{var inst_15322 = (state_15373[9]);var inst_15327 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15322);var state_15373__$1 = state_15373;var statearr_15384_15423 = state_15373__$1;(statearr_15384_15423[2] = inst_15327);
(statearr_15384_15423[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 8))
{var inst_15322 = (state_15373[9]);var state_15373__$1 = state_15373;var statearr_15385_15424 = state_15373__$1;(statearr_15385_15424[2] = inst_15322);
(statearr_15385_15424[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 9))
{var inst_15330 = (state_15373[12]);var inst_15330__$1 = (state_15373[2]);var inst_15331 = cljs.core.get.call(null,inst_15330__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15332 = cljs.core.get.call(null,inst_15330__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15333 = cljs.core.get.call(null,inst_15330__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15373__$1 = (function (){var statearr_15386 = state_15373;(statearr_15386[13] = inst_15333);
(statearr_15386[14] = inst_15332);
(statearr_15386[12] = inst_15330__$1);
return statearr_15386;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15373__$1,10,inst_15331);
} else
{if((state_val_15374 === 10))
{var inst_15338 = (state_15373[15]);var inst_15337 = (state_15373[16]);var inst_15336 = (state_15373[2]);var inst_15337__$1 = cljs.core.nth.call(null,inst_15336,0,null);var inst_15338__$1 = cljs.core.nth.call(null,inst_15336,1,null);var inst_15339 = (inst_15337__$1 == null);var inst_15340 = cljs.core._EQ_.call(null,inst_15338__$1,change);var inst_15341 = (inst_15339) || (inst_15340);var state_15373__$1 = (function (){var statearr_15387 = state_15373;(statearr_15387[15] = inst_15338__$1);
(statearr_15387[16] = inst_15337__$1);
return statearr_15387;
})();if(cljs.core.truth_(inst_15341))
{var statearr_15388_15425 = state_15373__$1;(statearr_15388_15425[1] = 11);
} else
{var statearr_15389_15426 = state_15373__$1;(statearr_15389_15426[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 11))
{var inst_15337 = (state_15373[16]);var inst_15343 = (inst_15337 == null);var state_15373__$1 = state_15373;if(cljs.core.truth_(inst_15343))
{var statearr_15390_15427 = state_15373__$1;(statearr_15390_15427[1] = 14);
} else
{var statearr_15391_15428 = state_15373__$1;(statearr_15391_15428[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 12))
{var inst_15333 = (state_15373[13]);var inst_15338 = (state_15373[15]);var inst_15352 = (state_15373[17]);var inst_15352__$1 = inst_15333.call(null,inst_15338);var state_15373__$1 = (function (){var statearr_15392 = state_15373;(statearr_15392[17] = inst_15352__$1);
return statearr_15392;
})();if(cljs.core.truth_(inst_15352__$1))
{var statearr_15393_15429 = state_15373__$1;(statearr_15393_15429[1] = 17);
} else
{var statearr_15394_15430 = state_15373__$1;(statearr_15394_15430[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 13))
{var inst_15369 = (state_15373[2]);var state_15373__$1 = state_15373;var statearr_15395_15431 = state_15373__$1;(statearr_15395_15431[2] = inst_15369);
(statearr_15395_15431[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 14))
{var inst_15338 = (state_15373[15]);var inst_15345 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15338);var state_15373__$1 = state_15373;var statearr_15396_15432 = state_15373__$1;(statearr_15396_15432[2] = inst_15345);
(statearr_15396_15432[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 15))
{var state_15373__$1 = state_15373;var statearr_15397_15433 = state_15373__$1;(statearr_15397_15433[2] = null);
(statearr_15397_15433[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 16))
{var inst_15348 = (state_15373[2]);var inst_15349 = calc_state.call(null);var inst_15322 = inst_15349;var state_15373__$1 = (function (){var statearr_15398 = state_15373;(statearr_15398[18] = inst_15348);
(statearr_15398[9] = inst_15322);
return statearr_15398;
})();var statearr_15399_15434 = state_15373__$1;(statearr_15399_15434[2] = null);
(statearr_15399_15434[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 17))
{var inst_15352 = (state_15373[17]);var state_15373__$1 = state_15373;var statearr_15400_15435 = state_15373__$1;(statearr_15400_15435[2] = inst_15352);
(statearr_15400_15435[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 18))
{var inst_15333 = (state_15373[13]);var inst_15332 = (state_15373[14]);var inst_15338 = (state_15373[15]);var inst_15355 = cljs.core.empty_QMARK_.call(null,inst_15333);var inst_15356 = inst_15332.call(null,inst_15338);var inst_15357 = cljs.core.not.call(null,inst_15356);var inst_15358 = (inst_15355) && (inst_15357);var state_15373__$1 = state_15373;var statearr_15401_15436 = state_15373__$1;(statearr_15401_15436[2] = inst_15358);
(statearr_15401_15436[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 19))
{var inst_15360 = (state_15373[2]);var state_15373__$1 = state_15373;if(cljs.core.truth_(inst_15360))
{var statearr_15402_15437 = state_15373__$1;(statearr_15402_15437[1] = 20);
} else
{var statearr_15403_15438 = state_15373__$1;(statearr_15403_15438[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 20))
{var inst_15337 = (state_15373[16]);var state_15373__$1 = state_15373;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15373__$1,23,out,inst_15337);
} else
{if((state_val_15374 === 21))
{var state_15373__$1 = state_15373;var statearr_15404_15439 = state_15373__$1;(statearr_15404_15439[2] = null);
(statearr_15404_15439[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 22))
{var inst_15330 = (state_15373[12]);var inst_15366 = (state_15373[2]);var inst_15322 = inst_15330;var state_15373__$1 = (function (){var statearr_15405 = state_15373;(statearr_15405[9] = inst_15322);
(statearr_15405[19] = inst_15366);
return statearr_15405;
})();var statearr_15406_15440 = state_15373__$1;(statearr_15406_15440[2] = null);
(statearr_15406_15440[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15374 === 23))
{var inst_15363 = (state_15373[2]);var state_15373__$1 = state_15373;var statearr_15407_15441 = state_15373__$1;(statearr_15407_15441[2] = inst_15363);
(statearr_15407_15441[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15411 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15411[0] = state_machine__5507__auto__);
(statearr_15411[1] = 1);
return statearr_15411;
});
var state_machine__5507__auto____1 = (function (state_15373){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15373);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15412){if((e15412 instanceof Object))
{var ex__5510__auto__ = e15412;var statearr_15413_15442 = state_15373;(statearr_15413_15442[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15373);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15412;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15443 = state_15373;
state_15373 = G__15443;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15373){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15373);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15414 = f__5522__auto__.call(null);(statearr_15414[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15415);
return statearr_15414;
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
cljs.core.async.Pub = (function (){var obj15445 = {};return obj15445;
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
return (function (p1__15446_SHARP_){if(cljs.core.truth_(p1__15446_SHARP_.call(null,topic)))
{return p1__15446_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15446_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15571 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15571 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15572){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15572 = meta15572;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15571.cljs$lang$type = true;
cljs.core.async.t15571.cljs$lang$ctorStr = "cljs.core.async/t15571";
cljs.core.async.t15571.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15571");
});})(mults,ensure_mult))
;
cljs.core.async.t15571.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15571.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15571.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15571.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15571.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15571.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15571.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15573){var self__ = this;
var _15573__$1 = this;return self__.meta15572;
});})(mults,ensure_mult))
;
cljs.core.async.t15571.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15573,meta15572__$1){var self__ = this;
var _15573__$1 = this;return (new cljs.core.async.t15571(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15572__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15571 = ((function (mults,ensure_mult){
return (function __GT_t15571(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15572){return (new cljs.core.async.t15571(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15572));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15571(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15695 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15647){var state_val_15648 = (state_15647[1]);if((state_val_15648 === 1))
{var state_15647__$1 = state_15647;var statearr_15649_15696 = state_15647__$1;(statearr_15649_15696[2] = null);
(statearr_15649_15696[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 2))
{var state_15647__$1 = state_15647;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15647__$1,4,ch);
} else
{if((state_val_15648 === 3))
{var inst_15645 = (state_15647[2]);var state_15647__$1 = state_15647;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15647__$1,inst_15645);
} else
{if((state_val_15648 === 4))
{var inst_15576 = (state_15647[7]);var inst_15576__$1 = (state_15647[2]);var inst_15577 = (inst_15576__$1 == null);var state_15647__$1 = (function (){var statearr_15650 = state_15647;(statearr_15650[7] = inst_15576__$1);
return statearr_15650;
})();if(cljs.core.truth_(inst_15577))
{var statearr_15651_15697 = state_15647__$1;(statearr_15651_15697[1] = 5);
} else
{var statearr_15652_15698 = state_15647__$1;(statearr_15652_15698[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 5))
{var inst_15583 = cljs.core.deref.call(null,mults);var inst_15584 = cljs.core.vals.call(null,inst_15583);var inst_15585 = cljs.core.seq.call(null,inst_15584);var inst_15586 = inst_15585;var inst_15587 = null;var inst_15588 = 0;var inst_15589 = 0;var state_15647__$1 = (function (){var statearr_15653 = state_15647;(statearr_15653[8] = inst_15589);
(statearr_15653[9] = inst_15588);
(statearr_15653[10] = inst_15586);
(statearr_15653[11] = inst_15587);
return statearr_15653;
})();var statearr_15654_15699 = state_15647__$1;(statearr_15654_15699[2] = null);
(statearr_15654_15699[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 6))
{var inst_15576 = (state_15647[7]);var inst_15624 = (state_15647[12]);var inst_15626 = (state_15647[13]);var inst_15624__$1 = topic_fn.call(null,inst_15576);var inst_15625 = cljs.core.deref.call(null,mults);var inst_15626__$1 = cljs.core.get.call(null,inst_15625,inst_15624__$1);var state_15647__$1 = (function (){var statearr_15655 = state_15647;(statearr_15655[12] = inst_15624__$1);
(statearr_15655[13] = inst_15626__$1);
return statearr_15655;
})();if(cljs.core.truth_(inst_15626__$1))
{var statearr_15656_15700 = state_15647__$1;(statearr_15656_15700[1] = 19);
} else
{var statearr_15657_15701 = state_15647__$1;(statearr_15657_15701[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 7))
{var inst_15643 = (state_15647[2]);var state_15647__$1 = state_15647;var statearr_15658_15702 = state_15647__$1;(statearr_15658_15702[2] = inst_15643);
(statearr_15658_15702[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 8))
{var inst_15589 = (state_15647[8]);var inst_15588 = (state_15647[9]);var inst_15591 = (inst_15589 < inst_15588);var inst_15592 = inst_15591;var state_15647__$1 = state_15647;if(cljs.core.truth_(inst_15592))
{var statearr_15662_15703 = state_15647__$1;(statearr_15662_15703[1] = 10);
} else
{var statearr_15663_15704 = state_15647__$1;(statearr_15663_15704[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 9))
{var inst_15622 = (state_15647[2]);var state_15647__$1 = state_15647;var statearr_15664_15705 = state_15647__$1;(statearr_15664_15705[2] = inst_15622);
(statearr_15664_15705[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 10))
{var inst_15589 = (state_15647[8]);var inst_15588 = (state_15647[9]);var inst_15586 = (state_15647[10]);var inst_15587 = (state_15647[11]);var inst_15594 = cljs.core._nth.call(null,inst_15587,inst_15589);var inst_15595 = cljs.core.async.muxch_STAR_.call(null,inst_15594);var inst_15596 = cljs.core.async.close_BANG_.call(null,inst_15595);var inst_15597 = (inst_15589 + 1);var tmp15659 = inst_15588;var tmp15660 = inst_15586;var tmp15661 = inst_15587;var inst_15586__$1 = tmp15660;var inst_15587__$1 = tmp15661;var inst_15588__$1 = tmp15659;var inst_15589__$1 = inst_15597;var state_15647__$1 = (function (){var statearr_15665 = state_15647;(statearr_15665[8] = inst_15589__$1);
(statearr_15665[9] = inst_15588__$1);
(statearr_15665[10] = inst_15586__$1);
(statearr_15665[11] = inst_15587__$1);
(statearr_15665[14] = inst_15596);
return statearr_15665;
})();var statearr_15666_15706 = state_15647__$1;(statearr_15666_15706[2] = null);
(statearr_15666_15706[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 11))
{var inst_15586 = (state_15647[10]);var inst_15600 = (state_15647[15]);var inst_15600__$1 = cljs.core.seq.call(null,inst_15586);var state_15647__$1 = (function (){var statearr_15667 = state_15647;(statearr_15667[15] = inst_15600__$1);
return statearr_15667;
})();if(inst_15600__$1)
{var statearr_15668_15707 = state_15647__$1;(statearr_15668_15707[1] = 13);
} else
{var statearr_15669_15708 = state_15647__$1;(statearr_15669_15708[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 12))
{var inst_15620 = (state_15647[2]);var state_15647__$1 = state_15647;var statearr_15670_15709 = state_15647__$1;(statearr_15670_15709[2] = inst_15620);
(statearr_15670_15709[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 13))
{var inst_15600 = (state_15647[15]);var inst_15602 = cljs.core.chunked_seq_QMARK_.call(null,inst_15600);var state_15647__$1 = state_15647;if(inst_15602)
{var statearr_15671_15710 = state_15647__$1;(statearr_15671_15710[1] = 16);
} else
{var statearr_15672_15711 = state_15647__$1;(statearr_15672_15711[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 14))
{var state_15647__$1 = state_15647;var statearr_15673_15712 = state_15647__$1;(statearr_15673_15712[2] = null);
(statearr_15673_15712[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 15))
{var inst_15618 = (state_15647[2]);var state_15647__$1 = state_15647;var statearr_15674_15713 = state_15647__$1;(statearr_15674_15713[2] = inst_15618);
(statearr_15674_15713[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 16))
{var inst_15600 = (state_15647[15]);var inst_15604 = cljs.core.chunk_first.call(null,inst_15600);var inst_15605 = cljs.core.chunk_rest.call(null,inst_15600);var inst_15606 = cljs.core.count.call(null,inst_15604);var inst_15586 = inst_15605;var inst_15587 = inst_15604;var inst_15588 = inst_15606;var inst_15589 = 0;var state_15647__$1 = (function (){var statearr_15675 = state_15647;(statearr_15675[8] = inst_15589);
(statearr_15675[9] = inst_15588);
(statearr_15675[10] = inst_15586);
(statearr_15675[11] = inst_15587);
return statearr_15675;
})();var statearr_15676_15714 = state_15647__$1;(statearr_15676_15714[2] = null);
(statearr_15676_15714[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 17))
{var inst_15600 = (state_15647[15]);var inst_15609 = cljs.core.first.call(null,inst_15600);var inst_15610 = cljs.core.async.muxch_STAR_.call(null,inst_15609);var inst_15611 = cljs.core.async.close_BANG_.call(null,inst_15610);var inst_15612 = cljs.core.next.call(null,inst_15600);var inst_15586 = inst_15612;var inst_15587 = null;var inst_15588 = 0;var inst_15589 = 0;var state_15647__$1 = (function (){var statearr_15677 = state_15647;(statearr_15677[8] = inst_15589);
(statearr_15677[9] = inst_15588);
(statearr_15677[10] = inst_15586);
(statearr_15677[11] = inst_15587);
(statearr_15677[16] = inst_15611);
return statearr_15677;
})();var statearr_15678_15715 = state_15647__$1;(statearr_15678_15715[2] = null);
(statearr_15678_15715[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 18))
{var inst_15615 = (state_15647[2]);var state_15647__$1 = state_15647;var statearr_15679_15716 = state_15647__$1;(statearr_15679_15716[2] = inst_15615);
(statearr_15679_15716[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 19))
{var state_15647__$1 = state_15647;var statearr_15680_15717 = state_15647__$1;(statearr_15680_15717[2] = null);
(statearr_15680_15717[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 20))
{var state_15647__$1 = state_15647;var statearr_15681_15718 = state_15647__$1;(statearr_15681_15718[2] = null);
(statearr_15681_15718[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 21))
{var inst_15640 = (state_15647[2]);var state_15647__$1 = (function (){var statearr_15682 = state_15647;(statearr_15682[17] = inst_15640);
return statearr_15682;
})();var statearr_15683_15719 = state_15647__$1;(statearr_15683_15719[2] = null);
(statearr_15683_15719[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 22))
{var inst_15637 = (state_15647[2]);var state_15647__$1 = state_15647;var statearr_15684_15720 = state_15647__$1;(statearr_15684_15720[2] = inst_15637);
(statearr_15684_15720[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 23))
{var inst_15624 = (state_15647[12]);var inst_15628 = (state_15647[2]);var inst_15629 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15624);var state_15647__$1 = (function (){var statearr_15685 = state_15647;(statearr_15685[18] = inst_15628);
return statearr_15685;
})();var statearr_15686_15721 = state_15647__$1;(statearr_15686_15721[2] = inst_15629);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15647__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15648 === 24))
{var inst_15576 = (state_15647[7]);var inst_15626 = (state_15647[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15647,23,Object,null,22);var inst_15633 = cljs.core.async.muxch_STAR_.call(null,inst_15626);var state_15647__$1 = state_15647;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15647__$1,25,inst_15633,inst_15576);
} else
{if((state_val_15648 === 25))
{var inst_15635 = (state_15647[2]);var state_15647__$1 = state_15647;var statearr_15687_15722 = state_15647__$1;(statearr_15687_15722[2] = inst_15635);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15647__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15691 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15691[0] = state_machine__5507__auto__);
(statearr_15691[1] = 1);
return statearr_15691;
});
var state_machine__5507__auto____1 = (function (state_15647){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15647);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15692){if((e15692 instanceof Object))
{var ex__5510__auto__ = e15692;var statearr_15693_15723 = state_15647;(statearr_15693_15723[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15647);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15692;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15724 = state_15647;
state_15647 = G__15724;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15647){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15647);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15694 = f__5522__auto__.call(null);(statearr_15694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15695);
return statearr_15694;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15861 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15831){var state_val_15832 = (state_15831[1]);if((state_val_15832 === 1))
{var state_15831__$1 = state_15831;var statearr_15833_15862 = state_15831__$1;(statearr_15833_15862[2] = null);
(statearr_15833_15862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 2))
{var inst_15794 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15795 = 0;var state_15831__$1 = (function (){var statearr_15834 = state_15831;(statearr_15834[7] = inst_15795);
(statearr_15834[8] = inst_15794);
return statearr_15834;
})();var statearr_15835_15863 = state_15831__$1;(statearr_15835_15863[2] = null);
(statearr_15835_15863[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 3))
{var inst_15829 = (state_15831[2]);var state_15831__$1 = state_15831;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15831__$1,inst_15829);
} else
{if((state_val_15832 === 4))
{var inst_15795 = (state_15831[7]);var inst_15797 = (inst_15795 < cnt);var state_15831__$1 = state_15831;if(cljs.core.truth_(inst_15797))
{var statearr_15836_15864 = state_15831__$1;(statearr_15836_15864[1] = 6);
} else
{var statearr_15837_15865 = state_15831__$1;(statearr_15837_15865[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 5))
{var inst_15815 = (state_15831[2]);var state_15831__$1 = (function (){var statearr_15838 = state_15831;(statearr_15838[9] = inst_15815);
return statearr_15838;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15831__$1,12,dchan);
} else
{if((state_val_15832 === 6))
{var state_15831__$1 = state_15831;var statearr_15839_15866 = state_15831__$1;(statearr_15839_15866[2] = null);
(statearr_15839_15866[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 7))
{var state_15831__$1 = state_15831;var statearr_15840_15867 = state_15831__$1;(statearr_15840_15867[2] = null);
(statearr_15840_15867[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 8))
{var inst_15813 = (state_15831[2]);var state_15831__$1 = state_15831;var statearr_15841_15868 = state_15831__$1;(statearr_15841_15868[2] = inst_15813);
(statearr_15841_15868[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 9))
{var inst_15795 = (state_15831[7]);var inst_15808 = (state_15831[2]);var inst_15809 = (inst_15795 + 1);var inst_15795__$1 = inst_15809;var state_15831__$1 = (function (){var statearr_15842 = state_15831;(statearr_15842[7] = inst_15795__$1);
(statearr_15842[10] = inst_15808);
return statearr_15842;
})();var statearr_15843_15869 = state_15831__$1;(statearr_15843_15869[2] = null);
(statearr_15843_15869[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 10))
{var inst_15799 = (state_15831[2]);var inst_15800 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15831__$1 = (function (){var statearr_15844 = state_15831;(statearr_15844[11] = inst_15799);
return statearr_15844;
})();var statearr_15845_15870 = state_15831__$1;(statearr_15845_15870[2] = inst_15800);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15831__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 11))
{var inst_15795 = (state_15831[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15831,10,Object,null,9);var inst_15804 = chs__$1.call(null,inst_15795);var inst_15805 = done.call(null,inst_15795);var inst_15806 = cljs.core.async.take_BANG_.call(null,inst_15804,inst_15805);var state_15831__$1 = state_15831;var statearr_15846_15871 = state_15831__$1;(statearr_15846_15871[2] = inst_15806);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15831__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 12))
{var inst_15817 = (state_15831[12]);var inst_15817__$1 = (state_15831[2]);var inst_15818 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15817__$1);var state_15831__$1 = (function (){var statearr_15847 = state_15831;(statearr_15847[12] = inst_15817__$1);
return statearr_15847;
})();if(cljs.core.truth_(inst_15818))
{var statearr_15848_15872 = state_15831__$1;(statearr_15848_15872[1] = 13);
} else
{var statearr_15849_15873 = state_15831__$1;(statearr_15849_15873[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 13))
{var inst_15820 = cljs.core.async.close_BANG_.call(null,out);var state_15831__$1 = state_15831;var statearr_15850_15874 = state_15831__$1;(statearr_15850_15874[2] = inst_15820);
(statearr_15850_15874[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 14))
{var inst_15817 = (state_15831[12]);var inst_15822 = cljs.core.apply.call(null,f,inst_15817);var state_15831__$1 = state_15831;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15831__$1,16,out,inst_15822);
} else
{if((state_val_15832 === 15))
{var inst_15827 = (state_15831[2]);var state_15831__$1 = state_15831;var statearr_15851_15875 = state_15831__$1;(statearr_15851_15875[2] = inst_15827);
(statearr_15851_15875[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15832 === 16))
{var inst_15824 = (state_15831[2]);var state_15831__$1 = (function (){var statearr_15852 = state_15831;(statearr_15852[13] = inst_15824);
return statearr_15852;
})();var statearr_15853_15876 = state_15831__$1;(statearr_15853_15876[2] = null);
(statearr_15853_15876[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15857 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15857[0] = state_machine__5507__auto__);
(statearr_15857[1] = 1);
return statearr_15857;
});
var state_machine__5507__auto____1 = (function (state_15831){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15831);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15858){if((e15858 instanceof Object))
{var ex__5510__auto__ = e15858;var statearr_15859_15877 = state_15831;(statearr_15859_15877[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15831);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15858;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15878 = state_15831;
state_15831 = G__15878;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15831){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15860 = f__5522__auto__.call(null);(statearr_15860[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15861);
return statearr_15860;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15986 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15962){var state_val_15963 = (state_15962[1]);if((state_val_15963 === 1))
{var inst_15933 = cljs.core.vec.call(null,chs);var inst_15934 = inst_15933;var state_15962__$1 = (function (){var statearr_15964 = state_15962;(statearr_15964[7] = inst_15934);
return statearr_15964;
})();var statearr_15965_15987 = state_15962__$1;(statearr_15965_15987[2] = null);
(statearr_15965_15987[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15963 === 2))
{var inst_15934 = (state_15962[7]);var inst_15936 = cljs.core.count.call(null,inst_15934);var inst_15937 = (inst_15936 > 0);var state_15962__$1 = state_15962;if(cljs.core.truth_(inst_15937))
{var statearr_15966_15988 = state_15962__$1;(statearr_15966_15988[1] = 4);
} else
{var statearr_15967_15989 = state_15962__$1;(statearr_15967_15989[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15963 === 3))
{var inst_15960 = (state_15962[2]);var state_15962__$1 = state_15962;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15962__$1,inst_15960);
} else
{if((state_val_15963 === 4))
{var inst_15934 = (state_15962[7]);var state_15962__$1 = state_15962;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15962__$1,7,inst_15934);
} else
{if((state_val_15963 === 5))
{var inst_15956 = cljs.core.async.close_BANG_.call(null,out);var state_15962__$1 = state_15962;var statearr_15968_15990 = state_15962__$1;(statearr_15968_15990[2] = inst_15956);
(statearr_15968_15990[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15963 === 6))
{var inst_15958 = (state_15962[2]);var state_15962__$1 = state_15962;var statearr_15969_15991 = state_15962__$1;(statearr_15969_15991[2] = inst_15958);
(statearr_15969_15991[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15963 === 7))
{var inst_15942 = (state_15962[8]);var inst_15941 = (state_15962[9]);var inst_15941__$1 = (state_15962[2]);var inst_15942__$1 = cljs.core.nth.call(null,inst_15941__$1,0,null);var inst_15943 = cljs.core.nth.call(null,inst_15941__$1,1,null);var inst_15944 = (inst_15942__$1 == null);var state_15962__$1 = (function (){var statearr_15970 = state_15962;(statearr_15970[10] = inst_15943);
(statearr_15970[8] = inst_15942__$1);
(statearr_15970[9] = inst_15941__$1);
return statearr_15970;
})();if(cljs.core.truth_(inst_15944))
{var statearr_15971_15992 = state_15962__$1;(statearr_15971_15992[1] = 8);
} else
{var statearr_15972_15993 = state_15962__$1;(statearr_15972_15993[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15963 === 8))
{var inst_15943 = (state_15962[10]);var inst_15942 = (state_15962[8]);var inst_15934 = (state_15962[7]);var inst_15941 = (state_15962[9]);var inst_15946 = (function (){var c = inst_15943;var v = inst_15942;var vec__15939 = inst_15941;var cs = inst_15934;return ((function (c,v,vec__15939,cs,inst_15943,inst_15942,inst_15934,inst_15941,state_val_15963){
return (function (p1__15879_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15879_SHARP_);
});
;})(c,v,vec__15939,cs,inst_15943,inst_15942,inst_15934,inst_15941,state_val_15963))
})();var inst_15947 = cljs.core.filterv.call(null,inst_15946,inst_15934);var inst_15934__$1 = inst_15947;var state_15962__$1 = (function (){var statearr_15973 = state_15962;(statearr_15973[7] = inst_15934__$1);
return statearr_15973;
})();var statearr_15974_15994 = state_15962__$1;(statearr_15974_15994[2] = null);
(statearr_15974_15994[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15963 === 9))
{var inst_15942 = (state_15962[8]);var state_15962__$1 = state_15962;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15962__$1,11,out,inst_15942);
} else
{if((state_val_15963 === 10))
{var inst_15954 = (state_15962[2]);var state_15962__$1 = state_15962;var statearr_15976_15995 = state_15962__$1;(statearr_15976_15995[2] = inst_15954);
(statearr_15976_15995[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15963 === 11))
{var inst_15934 = (state_15962[7]);var inst_15951 = (state_15962[2]);var tmp15975 = inst_15934;var inst_15934__$1 = tmp15975;var state_15962__$1 = (function (){var statearr_15977 = state_15962;(statearr_15977[7] = inst_15934__$1);
(statearr_15977[11] = inst_15951);
return statearr_15977;
})();var statearr_15978_15996 = state_15962__$1;(statearr_15978_15996[2] = null);
(statearr_15978_15996[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15982 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15982[0] = state_machine__5507__auto__);
(statearr_15982[1] = 1);
return statearr_15982;
});
var state_machine__5507__auto____1 = (function (state_15962){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15962);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15983){if((e15983 instanceof Object))
{var ex__5510__auto__ = e15983;var statearr_15984_15997 = state_15962;(statearr_15984_15997[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15962);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15983;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15998 = state_15962;
state_15962 = G__15998;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15962){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15985 = f__5522__auto__.call(null);(statearr_15985[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15986);
return statearr_15985;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16091 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16068){var state_val_16069 = (state_16068[1]);if((state_val_16069 === 1))
{var inst_16045 = 0;var state_16068__$1 = (function (){var statearr_16070 = state_16068;(statearr_16070[7] = inst_16045);
return statearr_16070;
})();var statearr_16071_16092 = state_16068__$1;(statearr_16071_16092[2] = null);
(statearr_16071_16092[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16069 === 2))
{var inst_16045 = (state_16068[7]);var inst_16047 = (inst_16045 < n);var state_16068__$1 = state_16068;if(cljs.core.truth_(inst_16047))
{var statearr_16072_16093 = state_16068__$1;(statearr_16072_16093[1] = 4);
} else
{var statearr_16073_16094 = state_16068__$1;(statearr_16073_16094[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16069 === 3))
{var inst_16065 = (state_16068[2]);var inst_16066 = cljs.core.async.close_BANG_.call(null,out);var state_16068__$1 = (function (){var statearr_16074 = state_16068;(statearr_16074[8] = inst_16065);
return statearr_16074;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16068__$1,inst_16066);
} else
{if((state_val_16069 === 4))
{var state_16068__$1 = state_16068;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16068__$1,7,ch);
} else
{if((state_val_16069 === 5))
{var state_16068__$1 = state_16068;var statearr_16075_16095 = state_16068__$1;(statearr_16075_16095[2] = null);
(statearr_16075_16095[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16069 === 6))
{var inst_16063 = (state_16068[2]);var state_16068__$1 = state_16068;var statearr_16076_16096 = state_16068__$1;(statearr_16076_16096[2] = inst_16063);
(statearr_16076_16096[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16069 === 7))
{var inst_16050 = (state_16068[9]);var inst_16050__$1 = (state_16068[2]);var inst_16051 = (inst_16050__$1 == null);var inst_16052 = cljs.core.not.call(null,inst_16051);var state_16068__$1 = (function (){var statearr_16077 = state_16068;(statearr_16077[9] = inst_16050__$1);
return statearr_16077;
})();if(inst_16052)
{var statearr_16078_16097 = state_16068__$1;(statearr_16078_16097[1] = 8);
} else
{var statearr_16079_16098 = state_16068__$1;(statearr_16079_16098[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16069 === 8))
{var inst_16050 = (state_16068[9]);var state_16068__$1 = state_16068;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16068__$1,11,out,inst_16050);
} else
{if((state_val_16069 === 9))
{var state_16068__$1 = state_16068;var statearr_16080_16099 = state_16068__$1;(statearr_16080_16099[2] = null);
(statearr_16080_16099[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16069 === 10))
{var inst_16060 = (state_16068[2]);var state_16068__$1 = state_16068;var statearr_16081_16100 = state_16068__$1;(statearr_16081_16100[2] = inst_16060);
(statearr_16081_16100[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16069 === 11))
{var inst_16045 = (state_16068[7]);var inst_16055 = (state_16068[2]);var inst_16056 = (inst_16045 + 1);var inst_16045__$1 = inst_16056;var state_16068__$1 = (function (){var statearr_16082 = state_16068;(statearr_16082[7] = inst_16045__$1);
(statearr_16082[10] = inst_16055);
return statearr_16082;
})();var statearr_16083_16101 = state_16068__$1;(statearr_16083_16101[2] = null);
(statearr_16083_16101[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_16087 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16087[0] = state_machine__5507__auto__);
(statearr_16087[1] = 1);
return statearr_16087;
});
var state_machine__5507__auto____1 = (function (state_16068){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16068);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16088){if((e16088 instanceof Object))
{var ex__5510__auto__ = e16088;var statearr_16089_16102 = state_16068;(statearr_16089_16102[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16068);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16088;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16103 = state_16068;
state_16068 = G__16103;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16068){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16068);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16090 = f__5522__auto__.call(null);(statearr_16090[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16091);
return statearr_16090;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16200 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16175){var state_val_16176 = (state_16175[1]);if((state_val_16176 === 1))
{var inst_16152 = null;var state_16175__$1 = (function (){var statearr_16177 = state_16175;(statearr_16177[7] = inst_16152);
return statearr_16177;
})();var statearr_16178_16201 = state_16175__$1;(statearr_16178_16201[2] = null);
(statearr_16178_16201[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16176 === 2))
{var state_16175__$1 = state_16175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16175__$1,4,ch);
} else
{if((state_val_16176 === 3))
{var inst_16172 = (state_16175[2]);var inst_16173 = cljs.core.async.close_BANG_.call(null,out);var state_16175__$1 = (function (){var statearr_16179 = state_16175;(statearr_16179[8] = inst_16172);
return statearr_16179;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16175__$1,inst_16173);
} else
{if((state_val_16176 === 4))
{var inst_16155 = (state_16175[9]);var inst_16155__$1 = (state_16175[2]);var inst_16156 = (inst_16155__$1 == null);var inst_16157 = cljs.core.not.call(null,inst_16156);var state_16175__$1 = (function (){var statearr_16180 = state_16175;(statearr_16180[9] = inst_16155__$1);
return statearr_16180;
})();if(inst_16157)
{var statearr_16181_16202 = state_16175__$1;(statearr_16181_16202[1] = 5);
} else
{var statearr_16182_16203 = state_16175__$1;(statearr_16182_16203[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16176 === 5))
{var inst_16152 = (state_16175[7]);var inst_16155 = (state_16175[9]);var inst_16159 = cljs.core._EQ_.call(null,inst_16155,inst_16152);var state_16175__$1 = state_16175;if(inst_16159)
{var statearr_16183_16204 = state_16175__$1;(statearr_16183_16204[1] = 8);
} else
{var statearr_16184_16205 = state_16175__$1;(statearr_16184_16205[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16176 === 6))
{var state_16175__$1 = state_16175;var statearr_16186_16206 = state_16175__$1;(statearr_16186_16206[2] = null);
(statearr_16186_16206[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16176 === 7))
{var inst_16170 = (state_16175[2]);var state_16175__$1 = state_16175;var statearr_16187_16207 = state_16175__$1;(statearr_16187_16207[2] = inst_16170);
(statearr_16187_16207[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16176 === 8))
{var inst_16152 = (state_16175[7]);var tmp16185 = inst_16152;var inst_16152__$1 = tmp16185;var state_16175__$1 = (function (){var statearr_16188 = state_16175;(statearr_16188[7] = inst_16152__$1);
return statearr_16188;
})();var statearr_16189_16208 = state_16175__$1;(statearr_16189_16208[2] = null);
(statearr_16189_16208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16176 === 9))
{var inst_16155 = (state_16175[9]);var state_16175__$1 = state_16175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16175__$1,11,out,inst_16155);
} else
{if((state_val_16176 === 10))
{var inst_16167 = (state_16175[2]);var state_16175__$1 = state_16175;var statearr_16190_16209 = state_16175__$1;(statearr_16190_16209[2] = inst_16167);
(statearr_16190_16209[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16176 === 11))
{var inst_16155 = (state_16175[9]);var inst_16164 = (state_16175[2]);var inst_16152 = inst_16155;var state_16175__$1 = (function (){var statearr_16191 = state_16175;(statearr_16191[7] = inst_16152);
(statearr_16191[10] = inst_16164);
return statearr_16191;
})();var statearr_16192_16210 = state_16175__$1;(statearr_16192_16210[2] = null);
(statearr_16192_16210[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_16196 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_16196[0] = state_machine__5507__auto__);
(statearr_16196[1] = 1);
return statearr_16196;
});
var state_machine__5507__auto____1 = (function (state_16175){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16175);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16197){if((e16197 instanceof Object))
{var ex__5510__auto__ = e16197;var statearr_16198_16211 = state_16175;(statearr_16198_16211[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16175);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16197;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16212 = state_16175;
state_16175 = G__16212;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16175){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16199 = f__5522__auto__.call(null);(statearr_16199[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16200);
return statearr_16199;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16347 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16317){var state_val_16318 = (state_16317[1]);if((state_val_16318 === 1))
{var inst_16280 = (new Array(n));var inst_16281 = inst_16280;var inst_16282 = 0;var state_16317__$1 = (function (){var statearr_16319 = state_16317;(statearr_16319[7] = inst_16281);
(statearr_16319[8] = inst_16282);
return statearr_16319;
})();var statearr_16320_16348 = state_16317__$1;(statearr_16320_16348[2] = null);
(statearr_16320_16348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 2))
{var state_16317__$1 = state_16317;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16317__$1,4,ch);
} else
{if((state_val_16318 === 3))
{var inst_16315 = (state_16317[2]);var state_16317__$1 = state_16317;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16317__$1,inst_16315);
} else
{if((state_val_16318 === 4))
{var inst_16285 = (state_16317[9]);var inst_16285__$1 = (state_16317[2]);var inst_16286 = (inst_16285__$1 == null);var inst_16287 = cljs.core.not.call(null,inst_16286);var state_16317__$1 = (function (){var statearr_16321 = state_16317;(statearr_16321[9] = inst_16285__$1);
return statearr_16321;
})();if(inst_16287)
{var statearr_16322_16349 = state_16317__$1;(statearr_16322_16349[1] = 5);
} else
{var statearr_16323_16350 = state_16317__$1;(statearr_16323_16350[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 5))
{var inst_16290 = (state_16317[10]);var inst_16281 = (state_16317[7]);var inst_16282 = (state_16317[8]);var inst_16285 = (state_16317[9]);var inst_16289 = (inst_16281[inst_16282] = inst_16285);var inst_16290__$1 = (inst_16282 + 1);var inst_16291 = (inst_16290__$1 < n);var state_16317__$1 = (function (){var statearr_16324 = state_16317;(statearr_16324[10] = inst_16290__$1);
(statearr_16324[11] = inst_16289);
return statearr_16324;
})();if(cljs.core.truth_(inst_16291))
{var statearr_16325_16351 = state_16317__$1;(statearr_16325_16351[1] = 8);
} else
{var statearr_16326_16352 = state_16317__$1;(statearr_16326_16352[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 6))
{var inst_16282 = (state_16317[8]);var inst_16303 = (inst_16282 > 0);var state_16317__$1 = state_16317;if(cljs.core.truth_(inst_16303))
{var statearr_16328_16353 = state_16317__$1;(statearr_16328_16353[1] = 12);
} else
{var statearr_16329_16354 = state_16317__$1;(statearr_16329_16354[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 7))
{var inst_16313 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16330_16355 = state_16317__$1;(statearr_16330_16355[2] = inst_16313);
(statearr_16330_16355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 8))
{var inst_16290 = (state_16317[10]);var inst_16281 = (state_16317[7]);var tmp16327 = inst_16281;var inst_16281__$1 = tmp16327;var inst_16282 = inst_16290;var state_16317__$1 = (function (){var statearr_16331 = state_16317;(statearr_16331[7] = inst_16281__$1);
(statearr_16331[8] = inst_16282);
return statearr_16331;
})();var statearr_16332_16356 = state_16317__$1;(statearr_16332_16356[2] = null);
(statearr_16332_16356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 9))
{var inst_16281 = (state_16317[7]);var inst_16295 = cljs.core.vec.call(null,inst_16281);var state_16317__$1 = state_16317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16317__$1,11,out,inst_16295);
} else
{if((state_val_16318 === 10))
{var inst_16301 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16333_16357 = state_16317__$1;(statearr_16333_16357[2] = inst_16301);
(statearr_16333_16357[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 11))
{var inst_16297 = (state_16317[2]);var inst_16298 = (new Array(n));var inst_16281 = inst_16298;var inst_16282 = 0;var state_16317__$1 = (function (){var statearr_16334 = state_16317;(statearr_16334[7] = inst_16281);
(statearr_16334[8] = inst_16282);
(statearr_16334[12] = inst_16297);
return statearr_16334;
})();var statearr_16335_16358 = state_16317__$1;(statearr_16335_16358[2] = null);
(statearr_16335_16358[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 12))
{var inst_16281 = (state_16317[7]);var inst_16305 = cljs.core.vec.call(null,inst_16281);var state_16317__$1 = state_16317;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16317__$1,15,out,inst_16305);
} else
{if((state_val_16318 === 13))
{var state_16317__$1 = state_16317;var statearr_16336_16359 = state_16317__$1;(statearr_16336_16359[2] = null);
(statearr_16336_16359[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 14))
{var inst_16310 = (state_16317[2]);var inst_16311 = cljs.core.async.close_BANG_.call(null,out);var state_16317__$1 = (function (){var statearr_16337 = state_16317;(statearr_16337[13] = inst_16310);
return statearr_16337;
})();var statearr_16338_16360 = state_16317__$1;(statearr_16338_16360[2] = inst_16311);
(statearr_16338_16360[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16318 === 15))
{var inst_16307 = (state_16317[2]);var state_16317__$1 = state_16317;var statearr_16339_16361 = state_16317__$1;(statearr_16339_16361[2] = inst_16307);
(statearr_16339_16361[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16343 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16343[0] = state_machine__5507__auto__);
(statearr_16343[1] = 1);
return statearr_16343;
});
var state_machine__5507__auto____1 = (function (state_16317){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16317);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16344){if((e16344 instanceof Object))
{var ex__5510__auto__ = e16344;var statearr_16345_16362 = state_16317;(statearr_16345_16362[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16317);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16344;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16363 = state_16317;
state_16317 = G__16363;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16317){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16317);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16346 = f__5522__auto__.call(null);(statearr_16346[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16347);
return statearr_16346;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16506 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16476){var state_val_16477 = (state_16476[1]);if((state_val_16477 === 1))
{var inst_16435 = [];var inst_16436 = inst_16435;var inst_16437 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16476__$1 = (function (){var statearr_16478 = state_16476;(statearr_16478[7] = inst_16437);
(statearr_16478[8] = inst_16436);
return statearr_16478;
})();var statearr_16479_16507 = state_16476__$1;(statearr_16479_16507[2] = null);
(statearr_16479_16507[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 2))
{var state_16476__$1 = state_16476;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16476__$1,4,ch);
} else
{if((state_val_16477 === 3))
{var inst_16474 = (state_16476[2]);var state_16476__$1 = state_16476;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16476__$1,inst_16474);
} else
{if((state_val_16477 === 4))
{var inst_16440 = (state_16476[9]);var inst_16440__$1 = (state_16476[2]);var inst_16441 = (inst_16440__$1 == null);var inst_16442 = cljs.core.not.call(null,inst_16441);var state_16476__$1 = (function (){var statearr_16480 = state_16476;(statearr_16480[9] = inst_16440__$1);
return statearr_16480;
})();if(inst_16442)
{var statearr_16481_16508 = state_16476__$1;(statearr_16481_16508[1] = 5);
} else
{var statearr_16482_16509 = state_16476__$1;(statearr_16482_16509[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 5))
{var inst_16437 = (state_16476[7]);var inst_16444 = (state_16476[10]);var inst_16440 = (state_16476[9]);var inst_16444__$1 = f.call(null,inst_16440);var inst_16445 = cljs.core._EQ_.call(null,inst_16444__$1,inst_16437);var inst_16446 = cljs.core.keyword_identical_QMARK_.call(null,inst_16437,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16447 = (inst_16445) || (inst_16446);var state_16476__$1 = (function (){var statearr_16483 = state_16476;(statearr_16483[10] = inst_16444__$1);
return statearr_16483;
})();if(cljs.core.truth_(inst_16447))
{var statearr_16484_16510 = state_16476__$1;(statearr_16484_16510[1] = 8);
} else
{var statearr_16485_16511 = state_16476__$1;(statearr_16485_16511[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 6))
{var inst_16436 = (state_16476[8]);var inst_16461 = inst_16436.length;var inst_16462 = (inst_16461 > 0);var state_16476__$1 = state_16476;if(cljs.core.truth_(inst_16462))
{var statearr_16487_16512 = state_16476__$1;(statearr_16487_16512[1] = 12);
} else
{var statearr_16488_16513 = state_16476__$1;(statearr_16488_16513[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 7))
{var inst_16472 = (state_16476[2]);var state_16476__$1 = state_16476;var statearr_16489_16514 = state_16476__$1;(statearr_16489_16514[2] = inst_16472);
(statearr_16489_16514[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 8))
{var inst_16436 = (state_16476[8]);var inst_16444 = (state_16476[10]);var inst_16440 = (state_16476[9]);var inst_16449 = inst_16436.push(inst_16440);var tmp16486 = inst_16436;var inst_16436__$1 = tmp16486;var inst_16437 = inst_16444;var state_16476__$1 = (function (){var statearr_16490 = state_16476;(statearr_16490[7] = inst_16437);
(statearr_16490[8] = inst_16436__$1);
(statearr_16490[11] = inst_16449);
return statearr_16490;
})();var statearr_16491_16515 = state_16476__$1;(statearr_16491_16515[2] = null);
(statearr_16491_16515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 9))
{var inst_16436 = (state_16476[8]);var inst_16452 = cljs.core.vec.call(null,inst_16436);var state_16476__$1 = state_16476;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16476__$1,11,out,inst_16452);
} else
{if((state_val_16477 === 10))
{var inst_16459 = (state_16476[2]);var state_16476__$1 = state_16476;var statearr_16492_16516 = state_16476__$1;(statearr_16492_16516[2] = inst_16459);
(statearr_16492_16516[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 11))
{var inst_16444 = (state_16476[10]);var inst_16440 = (state_16476[9]);var inst_16454 = (state_16476[2]);var inst_16455 = [];var inst_16456 = inst_16455.push(inst_16440);var inst_16436 = inst_16455;var inst_16437 = inst_16444;var state_16476__$1 = (function (){var statearr_16493 = state_16476;(statearr_16493[7] = inst_16437);
(statearr_16493[8] = inst_16436);
(statearr_16493[12] = inst_16456);
(statearr_16493[13] = inst_16454);
return statearr_16493;
})();var statearr_16494_16517 = state_16476__$1;(statearr_16494_16517[2] = null);
(statearr_16494_16517[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 12))
{var inst_16436 = (state_16476[8]);var inst_16464 = cljs.core.vec.call(null,inst_16436);var state_16476__$1 = state_16476;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16476__$1,15,out,inst_16464);
} else
{if((state_val_16477 === 13))
{var state_16476__$1 = state_16476;var statearr_16495_16518 = state_16476__$1;(statearr_16495_16518[2] = null);
(statearr_16495_16518[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 14))
{var inst_16469 = (state_16476[2]);var inst_16470 = cljs.core.async.close_BANG_.call(null,out);var state_16476__$1 = (function (){var statearr_16496 = state_16476;(statearr_16496[14] = inst_16469);
return statearr_16496;
})();var statearr_16497_16519 = state_16476__$1;(statearr_16497_16519[2] = inst_16470);
(statearr_16497_16519[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16477 === 15))
{var inst_16466 = (state_16476[2]);var state_16476__$1 = state_16476;var statearr_16498_16520 = state_16476__$1;(statearr_16498_16520[2] = inst_16466);
(statearr_16498_16520[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16502 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16502[0] = state_machine__5507__auto__);
(statearr_16502[1] = 1);
return statearr_16502;
});
var state_machine__5507__auto____1 = (function (state_16476){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16476);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16503){if((e16503 instanceof Object))
{var ex__5510__auto__ = e16503;var statearr_16504_16521 = state_16476;(statearr_16504_16521[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16476);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16503;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16522 = state_16476;
state_16476 = G__16522;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16476){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16476);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16505 = f__5522__auto__.call(null);(statearr_16505[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16506);
return statearr_16505;
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