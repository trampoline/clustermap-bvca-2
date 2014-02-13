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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13266 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13266 = (function (f,fn_handler,meta13267){
this.f = f;
this.fn_handler = fn_handler;
this.meta13267 = meta13267;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13266.cljs$lang$type = true;
cljs.core.async.t13266.cljs$lang$ctorStr = "cljs.core.async/t13266";
cljs.core.async.t13266.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13266");
});
cljs.core.async.t13266.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13266.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13266.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13266.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13268){var self__ = this;
var _13268__$1 = this;return self__.meta13267;
});
cljs.core.async.t13266.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13268,meta13267__$1){var self__ = this;
var _13268__$1 = this;return (new cljs.core.async.t13266(self__.f,self__.fn_handler,meta13267__$1));
});
cljs.core.async.__GT_t13266 = (function __GT_t13266(f__$1,fn_handler__$1,meta13267){return (new cljs.core.async.t13266(f__$1,fn_handler__$1,meta13267));
});
}
return (new cljs.core.async.t13266(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13270 = buff;if(G__13270)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13270.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13270.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13270);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13270);
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
{var val_13271 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13271);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13271);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13272 = n;var x_13273 = 0;while(true){
if((x_13273 < n__4248__auto___13272))
{(a[x_13273] = 0);
{
var G__13274 = (x_13273 + 1);
x_13273 = G__13274;
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
var G__13275 = (i + 1);
i = G__13275;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13279 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13279 = (function (flag,alt_flag,meta13280){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13280 = meta13280;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13279.cljs$lang$type = true;
cljs.core.async.t13279.cljs$lang$ctorStr = "cljs.core.async/t13279";
cljs.core.async.t13279.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13279");
});
cljs.core.async.t13279.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13279.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13279.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13281){var self__ = this;
var _13281__$1 = this;return self__.meta13280;
});
cljs.core.async.t13279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13281,meta13280__$1){var self__ = this;
var _13281__$1 = this;return (new cljs.core.async.t13279(self__.flag,self__.alt_flag,meta13280__$1));
});
cljs.core.async.__GT_t13279 = (function __GT_t13279(flag__$1,alt_flag__$1,meta13280){return (new cljs.core.async.t13279(flag__$1,alt_flag__$1,meta13280));
});
}
return (new cljs.core.async.t13279(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13285 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13285 = (function (cb,flag,alt_handler,meta13286){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13286 = meta13286;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13285.cljs$lang$type = true;
cljs.core.async.t13285.cljs$lang$ctorStr = "cljs.core.async/t13285";
cljs.core.async.t13285.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13285");
});
cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13285.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13285.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13287){var self__ = this;
var _13287__$1 = this;return self__.meta13286;
});
cljs.core.async.t13285.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13287,meta13286__$1){var self__ = this;
var _13287__$1 = this;return (new cljs.core.async.t13285(self__.cb,self__.flag,self__.alt_handler,meta13286__$1));
});
cljs.core.async.__GT_t13285 = (function __GT_t13285(cb__$1,flag__$1,alt_handler__$1,meta13286){return (new cljs.core.async.t13285(cb__$1,flag__$1,alt_handler__$1,meta13286));
});
}
return (new cljs.core.async.t13285(cb,flag,alt_handler,null));
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
return (function (p1__13288_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13288_SHARP_,port], null));
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
var G__13289 = (i + 1);
i = G__13289;
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
var alts_BANG___delegate = function (ports,p__13290){var map__13292 = p__13290;var map__13292__$1 = ((cljs.core.seq_QMARK_.call(null,map__13292))?cljs.core.apply.call(null,cljs.core.hash_map,map__13292):map__13292);var opts = map__13292__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13290 = null;if (arguments.length > 1) {
  p__13290 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13290);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13293){
var ports = cljs.core.first(arglist__13293);
var p__13290 = cljs.core.rest(arglist__13293);
return alts_BANG___delegate(ports,p__13290);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13301 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13301 = (function (ch,f,map_LT_,meta13302){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13302 = meta13302;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13301.cljs$lang$type = true;
cljs.core.async.t13301.cljs$lang$ctorStr = "cljs.core.async/t13301";
cljs.core.async.t13301.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13301");
});
cljs.core.async.t13301.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13301.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13301.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13301.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13304 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13304 = (function (fn1,_,meta13302,ch,f,map_LT_,meta13305){
this.fn1 = fn1;
this._ = _;
this.meta13302 = meta13302;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13305 = meta13305;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13304.cljs$lang$type = true;
cljs.core.async.t13304.cljs$lang$ctorStr = "cljs.core.async/t13304";
cljs.core.async.t13304.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13304");
});
cljs.core.async.t13304.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13304.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13304.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13304.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13294_SHARP_){return f1.call(null,(((p1__13294_SHARP_ == null))?null:self__.f.call(null,p1__13294_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13304.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13306){var self__ = this;
var _13306__$1 = this;return self__.meta13305;
});
cljs.core.async.t13304.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13306,meta13305__$1){var self__ = this;
var _13306__$1 = this;return (new cljs.core.async.t13304(self__.fn1,self__._,self__.meta13302,self__.ch,self__.f,self__.map_LT_,meta13305__$1));
});
cljs.core.async.__GT_t13304 = (function __GT_t13304(fn1__$1,___$2,meta13302__$1,ch__$2,f__$2,map_LT___$2,meta13305){return (new cljs.core.async.t13304(fn1__$1,___$2,meta13302__$1,ch__$2,f__$2,map_LT___$2,meta13305));
});
}
return (new cljs.core.async.t13304(fn1,___$1,self__.meta13302,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13301.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13301.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13303){var self__ = this;
var _13303__$1 = this;return self__.meta13302;
});
cljs.core.async.t13301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13303,meta13302__$1){var self__ = this;
var _13303__$1 = this;return (new cljs.core.async.t13301(self__.ch,self__.f,self__.map_LT_,meta13302__$1));
});
cljs.core.async.__GT_t13301 = (function __GT_t13301(ch__$1,f__$1,map_LT___$1,meta13302){return (new cljs.core.async.t13301(ch__$1,f__$1,map_LT___$1,meta13302));
});
}
return (new cljs.core.async.t13301(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13310 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13310 = (function (ch,f,map_GT_,meta13311){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13311 = meta13311;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13310.cljs$lang$type = true;
cljs.core.async.t13310.cljs$lang$ctorStr = "cljs.core.async/t13310";
cljs.core.async.t13310.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13310");
});
cljs.core.async.t13310.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13310.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13310.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13310.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13310.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13310.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13310.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13312){var self__ = this;
var _13312__$1 = this;return self__.meta13311;
});
cljs.core.async.t13310.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13312,meta13311__$1){var self__ = this;
var _13312__$1 = this;return (new cljs.core.async.t13310(self__.ch,self__.f,self__.map_GT_,meta13311__$1));
});
cljs.core.async.__GT_t13310 = (function __GT_t13310(ch__$1,f__$1,map_GT___$1,meta13311){return (new cljs.core.async.t13310(ch__$1,f__$1,map_GT___$1,meta13311));
});
}
return (new cljs.core.async.t13310(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13316 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13316 = (function (ch,p,filter_GT_,meta13317){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13317 = meta13317;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13316.cljs$lang$type = true;
cljs.core.async.t13316.cljs$lang$ctorStr = "cljs.core.async/t13316";
cljs.core.async.t13316.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13316");
});
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13316.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13316.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13318){var self__ = this;
var _13318__$1 = this;return self__.meta13317;
});
cljs.core.async.t13316.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13318,meta13317__$1){var self__ = this;
var _13318__$1 = this;return (new cljs.core.async.t13316(self__.ch,self__.p,self__.filter_GT_,meta13317__$1));
});
cljs.core.async.__GT_t13316 = (function __GT_t13316(ch__$1,p__$1,filter_GT___$1,meta13317){return (new cljs.core.async.t13316(ch__$1,p__$1,filter_GT___$1,meta13317));
});
}
return (new cljs.core.async.t13316(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13401 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13380){var state_val_13381 = (state_13380[1]);if((state_val_13381 === 1))
{var state_13380__$1 = state_13380;var statearr_13382_13402 = state_13380__$1;(statearr_13382_13402[2] = null);
(statearr_13382_13402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 2))
{var state_13380__$1 = state_13380;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13380__$1,4,ch);
} else
{if((state_val_13381 === 3))
{var inst_13378 = (state_13380[2]);var state_13380__$1 = state_13380;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13380__$1,inst_13378);
} else
{if((state_val_13381 === 4))
{var inst_13362 = (state_13380[7]);var inst_13362__$1 = (state_13380[2]);var inst_13363 = (inst_13362__$1 == null);var state_13380__$1 = (function (){var statearr_13383 = state_13380;(statearr_13383[7] = inst_13362__$1);
return statearr_13383;
})();if(cljs.core.truth_(inst_13363))
{var statearr_13384_13403 = state_13380__$1;(statearr_13384_13403[1] = 5);
} else
{var statearr_13385_13404 = state_13380__$1;(statearr_13385_13404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 5))
{var inst_13365 = cljs.core.async.close_BANG_.call(null,out);var state_13380__$1 = state_13380;var statearr_13386_13405 = state_13380__$1;(statearr_13386_13405[2] = inst_13365);
(statearr_13386_13405[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 6))
{var inst_13362 = (state_13380[7]);var inst_13367 = p.call(null,inst_13362);var state_13380__$1 = state_13380;if(cljs.core.truth_(inst_13367))
{var statearr_13387_13406 = state_13380__$1;(statearr_13387_13406[1] = 8);
} else
{var statearr_13388_13407 = state_13380__$1;(statearr_13388_13407[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 7))
{var inst_13376 = (state_13380[2]);var state_13380__$1 = state_13380;var statearr_13389_13408 = state_13380__$1;(statearr_13389_13408[2] = inst_13376);
(statearr_13389_13408[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 8))
{var inst_13362 = (state_13380[7]);var state_13380__$1 = state_13380;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13380__$1,11,out,inst_13362);
} else
{if((state_val_13381 === 9))
{var state_13380__$1 = state_13380;var statearr_13390_13409 = state_13380__$1;(statearr_13390_13409[2] = null);
(statearr_13390_13409[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 10))
{var inst_13373 = (state_13380[2]);var state_13380__$1 = (function (){var statearr_13391 = state_13380;(statearr_13391[8] = inst_13373);
return statearr_13391;
})();var statearr_13392_13410 = state_13380__$1;(statearr_13392_13410[2] = null);
(statearr_13392_13410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13381 === 11))
{var inst_13370 = (state_13380[2]);var state_13380__$1 = state_13380;var statearr_13393_13411 = state_13380__$1;(statearr_13393_13411[2] = inst_13370);
(statearr_13393_13411[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13397 = [null,null,null,null,null,null,null,null,null];(statearr_13397[0] = state_machine__5507__auto__);
(statearr_13397[1] = 1);
return statearr_13397;
});
var state_machine__5507__auto____1 = (function (state_13380){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13380);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13398){if((e13398 instanceof Object))
{var ex__5510__auto__ = e13398;var statearr_13399_13412 = state_13380;(statearr_13399_13412[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13380);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13398;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13413 = state_13380;
state_13380 = G__13413;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13380){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13400 = f__5522__auto__.call(null);(statearr_13400[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13401);
return statearr_13400;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13565){var state_val_13566 = (state_13565[1]);if((state_val_13566 === 1))
{var state_13565__$1 = state_13565;var statearr_13567_13604 = state_13565__$1;(statearr_13567_13604[2] = null);
(statearr_13567_13604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 2))
{var state_13565__$1 = state_13565;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13565__$1,4,in$);
} else
{if((state_val_13566 === 3))
{var inst_13563 = (state_13565[2]);var state_13565__$1 = state_13565;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13565__$1,inst_13563);
} else
{if((state_val_13566 === 4))
{var inst_13511 = (state_13565[7]);var inst_13511__$1 = (state_13565[2]);var inst_13512 = (inst_13511__$1 == null);var state_13565__$1 = (function (){var statearr_13568 = state_13565;(statearr_13568[7] = inst_13511__$1);
return statearr_13568;
})();if(cljs.core.truth_(inst_13512))
{var statearr_13569_13605 = state_13565__$1;(statearr_13569_13605[1] = 5);
} else
{var statearr_13570_13606 = state_13565__$1;(statearr_13570_13606[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 5))
{var inst_13514 = cljs.core.async.close_BANG_.call(null,out);var state_13565__$1 = state_13565;var statearr_13571_13607 = state_13565__$1;(statearr_13571_13607[2] = inst_13514);
(statearr_13571_13607[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 6))
{var inst_13511 = (state_13565[7]);var inst_13516 = f.call(null,inst_13511);var inst_13521 = cljs.core.seq.call(null,inst_13516);var inst_13522 = inst_13521;var inst_13523 = null;var inst_13524 = 0;var inst_13525 = 0;var state_13565__$1 = (function (){var statearr_13572 = state_13565;(statearr_13572[8] = inst_13523);
(statearr_13572[9] = inst_13522);
(statearr_13572[10] = inst_13524);
(statearr_13572[11] = inst_13525);
return statearr_13572;
})();var statearr_13573_13608 = state_13565__$1;(statearr_13573_13608[2] = null);
(statearr_13573_13608[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 7))
{var inst_13561 = (state_13565[2]);var state_13565__$1 = state_13565;var statearr_13574_13609 = state_13565__$1;(statearr_13574_13609[2] = inst_13561);
(statearr_13574_13609[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 8))
{var inst_13524 = (state_13565[10]);var inst_13525 = (state_13565[11]);var inst_13527 = (inst_13525 < inst_13524);var inst_13528 = inst_13527;var state_13565__$1 = state_13565;if(cljs.core.truth_(inst_13528))
{var statearr_13575_13610 = state_13565__$1;(statearr_13575_13610[1] = 10);
} else
{var statearr_13576_13611 = state_13565__$1;(statearr_13576_13611[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 9))
{var inst_13558 = (state_13565[2]);var state_13565__$1 = (function (){var statearr_13577 = state_13565;(statearr_13577[12] = inst_13558);
return statearr_13577;
})();var statearr_13578_13612 = state_13565__$1;(statearr_13578_13612[2] = null);
(statearr_13578_13612[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 10))
{var inst_13523 = (state_13565[8]);var inst_13525 = (state_13565[11]);var inst_13530 = cljs.core._nth.call(null,inst_13523,inst_13525);var state_13565__$1 = state_13565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13565__$1,13,out,inst_13530);
} else
{if((state_val_13566 === 11))
{var inst_13522 = (state_13565[9]);var inst_13536 = (state_13565[13]);var inst_13536__$1 = cljs.core.seq.call(null,inst_13522);var state_13565__$1 = (function (){var statearr_13582 = state_13565;(statearr_13582[13] = inst_13536__$1);
return statearr_13582;
})();if(inst_13536__$1)
{var statearr_13583_13613 = state_13565__$1;(statearr_13583_13613[1] = 14);
} else
{var statearr_13584_13614 = state_13565__$1;(statearr_13584_13614[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 12))
{var inst_13556 = (state_13565[2]);var state_13565__$1 = state_13565;var statearr_13585_13615 = state_13565__$1;(statearr_13585_13615[2] = inst_13556);
(statearr_13585_13615[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 13))
{var inst_13523 = (state_13565[8]);var inst_13522 = (state_13565[9]);var inst_13524 = (state_13565[10]);var inst_13525 = (state_13565[11]);var inst_13532 = (state_13565[2]);var inst_13533 = (inst_13525 + 1);var tmp13579 = inst_13523;var tmp13580 = inst_13522;var tmp13581 = inst_13524;var inst_13522__$1 = tmp13580;var inst_13523__$1 = tmp13579;var inst_13524__$1 = tmp13581;var inst_13525__$1 = inst_13533;var state_13565__$1 = (function (){var statearr_13586 = state_13565;(statearr_13586[8] = inst_13523__$1);
(statearr_13586[9] = inst_13522__$1);
(statearr_13586[10] = inst_13524__$1);
(statearr_13586[11] = inst_13525__$1);
(statearr_13586[14] = inst_13532);
return statearr_13586;
})();var statearr_13587_13616 = state_13565__$1;(statearr_13587_13616[2] = null);
(statearr_13587_13616[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 14))
{var inst_13536 = (state_13565[13]);var inst_13538 = cljs.core.chunked_seq_QMARK_.call(null,inst_13536);var state_13565__$1 = state_13565;if(inst_13538)
{var statearr_13588_13617 = state_13565__$1;(statearr_13588_13617[1] = 17);
} else
{var statearr_13589_13618 = state_13565__$1;(statearr_13589_13618[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 15))
{var state_13565__$1 = state_13565;var statearr_13590_13619 = state_13565__$1;(statearr_13590_13619[2] = null);
(statearr_13590_13619[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 16))
{var inst_13554 = (state_13565[2]);var state_13565__$1 = state_13565;var statearr_13591_13620 = state_13565__$1;(statearr_13591_13620[2] = inst_13554);
(statearr_13591_13620[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 17))
{var inst_13536 = (state_13565[13]);var inst_13540 = cljs.core.chunk_first.call(null,inst_13536);var inst_13541 = cljs.core.chunk_rest.call(null,inst_13536);var inst_13542 = cljs.core.count.call(null,inst_13540);var inst_13522 = inst_13541;var inst_13523 = inst_13540;var inst_13524 = inst_13542;var inst_13525 = 0;var state_13565__$1 = (function (){var statearr_13592 = state_13565;(statearr_13592[8] = inst_13523);
(statearr_13592[9] = inst_13522);
(statearr_13592[10] = inst_13524);
(statearr_13592[11] = inst_13525);
return statearr_13592;
})();var statearr_13593_13621 = state_13565__$1;(statearr_13593_13621[2] = null);
(statearr_13593_13621[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 18))
{var inst_13536 = (state_13565[13]);var inst_13545 = cljs.core.first.call(null,inst_13536);var state_13565__$1 = state_13565;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13565__$1,20,out,inst_13545);
} else
{if((state_val_13566 === 19))
{var inst_13551 = (state_13565[2]);var state_13565__$1 = state_13565;var statearr_13594_13622 = state_13565__$1;(statearr_13594_13622[2] = inst_13551);
(statearr_13594_13622[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13566 === 20))
{var inst_13536 = (state_13565[13]);var inst_13547 = (state_13565[2]);var inst_13548 = cljs.core.next.call(null,inst_13536);var inst_13522 = inst_13548;var inst_13523 = null;var inst_13524 = 0;var inst_13525 = 0;var state_13565__$1 = (function (){var statearr_13595 = state_13565;(statearr_13595[8] = inst_13523);
(statearr_13595[9] = inst_13522);
(statearr_13595[15] = inst_13547);
(statearr_13595[10] = inst_13524);
(statearr_13595[11] = inst_13525);
return statearr_13595;
})();var statearr_13596_13623 = state_13565__$1;(statearr_13596_13623[2] = null);
(statearr_13596_13623[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13600 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13600[0] = state_machine__5507__auto__);
(statearr_13600[1] = 1);
return statearr_13600;
});
var state_machine__5507__auto____1 = (function (state_13565){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13565);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13601){if((e13601 instanceof Object))
{var ex__5510__auto__ = e13601;var statearr_13602_13624 = state_13565;(statearr_13602_13624[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13565);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13601;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13625 = state_13565;
state_13565 = G__13625;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13565){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13565);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13603 = f__5522__auto__.call(null);(statearr_13603[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13603;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13706 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13685){var state_val_13686 = (state_13685[1]);if((state_val_13686 === 1))
{var state_13685__$1 = state_13685;var statearr_13687_13707 = state_13685__$1;(statearr_13687_13707[2] = null);
(statearr_13687_13707[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13686 === 2))
{var state_13685__$1 = state_13685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13685__$1,4,from);
} else
{if((state_val_13686 === 3))
{var inst_13683 = (state_13685[2]);var state_13685__$1 = state_13685;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13685__$1,inst_13683);
} else
{if((state_val_13686 === 4))
{var inst_13668 = (state_13685[7]);var inst_13668__$1 = (state_13685[2]);var inst_13669 = (inst_13668__$1 == null);var state_13685__$1 = (function (){var statearr_13688 = state_13685;(statearr_13688[7] = inst_13668__$1);
return statearr_13688;
})();if(cljs.core.truth_(inst_13669))
{var statearr_13689_13708 = state_13685__$1;(statearr_13689_13708[1] = 5);
} else
{var statearr_13690_13709 = state_13685__$1;(statearr_13690_13709[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13686 === 5))
{var state_13685__$1 = state_13685;if(cljs.core.truth_(close_QMARK_))
{var statearr_13691_13710 = state_13685__$1;(statearr_13691_13710[1] = 8);
} else
{var statearr_13692_13711 = state_13685__$1;(statearr_13692_13711[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13686 === 6))
{var inst_13668 = (state_13685[7]);var state_13685__$1 = state_13685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13685__$1,11,to,inst_13668);
} else
{if((state_val_13686 === 7))
{var inst_13681 = (state_13685[2]);var state_13685__$1 = state_13685;var statearr_13693_13712 = state_13685__$1;(statearr_13693_13712[2] = inst_13681);
(statearr_13693_13712[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13686 === 8))
{var inst_13672 = cljs.core.async.close_BANG_.call(null,to);var state_13685__$1 = state_13685;var statearr_13694_13713 = state_13685__$1;(statearr_13694_13713[2] = inst_13672);
(statearr_13694_13713[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13686 === 9))
{var state_13685__$1 = state_13685;var statearr_13695_13714 = state_13685__$1;(statearr_13695_13714[2] = null);
(statearr_13695_13714[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13686 === 10))
{var inst_13675 = (state_13685[2]);var state_13685__$1 = state_13685;var statearr_13696_13715 = state_13685__$1;(statearr_13696_13715[2] = inst_13675);
(statearr_13696_13715[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13686 === 11))
{var inst_13678 = (state_13685[2]);var state_13685__$1 = (function (){var statearr_13697 = state_13685;(statearr_13697[8] = inst_13678);
return statearr_13697;
})();var statearr_13698_13716 = state_13685__$1;(statearr_13698_13716[2] = null);
(statearr_13698_13716[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13702 = [null,null,null,null,null,null,null,null,null];(statearr_13702[0] = state_machine__5507__auto__);
(statearr_13702[1] = 1);
return statearr_13702;
});
var state_machine__5507__auto____1 = (function (state_13685){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13703){if((e13703 instanceof Object))
{var ex__5510__auto__ = e13703;var statearr_13704_13717 = state_13685;(statearr_13704_13717[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13718 = state_13685;
state_13685 = G__13718;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13685){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13705 = f__5522__auto__.call(null);(statearr_13705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13706);
return statearr_13705;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13805 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13783){var state_val_13784 = (state_13783[1]);if((state_val_13784 === 1))
{var state_13783__$1 = state_13783;var statearr_13785_13806 = state_13783__$1;(statearr_13785_13806[2] = null);
(statearr_13785_13806[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13784 === 2))
{var state_13783__$1 = state_13783;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13783__$1,4,ch);
} else
{if((state_val_13784 === 3))
{var inst_13781 = (state_13783[2]);var state_13783__$1 = state_13783;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13783__$1,inst_13781);
} else
{if((state_val_13784 === 4))
{var inst_13764 = (state_13783[7]);var inst_13764__$1 = (state_13783[2]);var inst_13765 = (inst_13764__$1 == null);var state_13783__$1 = (function (){var statearr_13786 = state_13783;(statearr_13786[7] = inst_13764__$1);
return statearr_13786;
})();if(cljs.core.truth_(inst_13765))
{var statearr_13787_13807 = state_13783__$1;(statearr_13787_13807[1] = 5);
} else
{var statearr_13788_13808 = state_13783__$1;(statearr_13788_13808[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13784 === 5))
{var inst_13767 = cljs.core.async.close_BANG_.call(null,tc);var inst_13768 = cljs.core.async.close_BANG_.call(null,fc);var state_13783__$1 = (function (){var statearr_13789 = state_13783;(statearr_13789[8] = inst_13767);
return statearr_13789;
})();var statearr_13790_13809 = state_13783__$1;(statearr_13790_13809[2] = inst_13768);
(statearr_13790_13809[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13784 === 6))
{var inst_13764 = (state_13783[7]);var inst_13770 = p.call(null,inst_13764);var state_13783__$1 = state_13783;if(cljs.core.truth_(inst_13770))
{var statearr_13791_13810 = state_13783__$1;(statearr_13791_13810[1] = 9);
} else
{var statearr_13792_13811 = state_13783__$1;(statearr_13792_13811[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13784 === 7))
{var inst_13779 = (state_13783[2]);var state_13783__$1 = state_13783;var statearr_13793_13812 = state_13783__$1;(statearr_13793_13812[2] = inst_13779);
(statearr_13793_13812[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13784 === 8))
{var inst_13776 = (state_13783[2]);var state_13783__$1 = (function (){var statearr_13794 = state_13783;(statearr_13794[9] = inst_13776);
return statearr_13794;
})();var statearr_13795_13813 = state_13783__$1;(statearr_13795_13813[2] = null);
(statearr_13795_13813[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13784 === 9))
{var state_13783__$1 = state_13783;var statearr_13796_13814 = state_13783__$1;(statearr_13796_13814[2] = tc);
(statearr_13796_13814[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13784 === 10))
{var state_13783__$1 = state_13783;var statearr_13797_13815 = state_13783__$1;(statearr_13797_13815[2] = fc);
(statearr_13797_13815[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13784 === 11))
{var inst_13764 = (state_13783[7]);var inst_13774 = (state_13783[2]);var state_13783__$1 = state_13783;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13783__$1,8,inst_13774,inst_13764);
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
var state_machine__5507__auto____0 = (function (){var statearr_13801 = [null,null,null,null,null,null,null,null,null,null];(statearr_13801[0] = state_machine__5507__auto__);
(statearr_13801[1] = 1);
return statearr_13801;
});
var state_machine__5507__auto____1 = (function (state_13783){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13783);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13802){if((e13802 instanceof Object))
{var ex__5510__auto__ = e13802;var statearr_13803_13816 = state_13783;(statearr_13803_13816[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13783);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13802;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13817 = state_13783;
state_13783 = G__13817;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13783){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13804 = f__5522__auto__.call(null);(statearr_13804[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13805);
return statearr_13804;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13864){var state_val_13865 = (state_13864[1]);if((state_val_13865 === 7))
{var inst_13860 = (state_13864[2]);var state_13864__$1 = state_13864;var statearr_13866_13882 = state_13864__$1;(statearr_13866_13882[2] = inst_13860);
(statearr_13866_13882[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 6))
{var inst_13853 = (state_13864[7]);var inst_13850 = (state_13864[8]);var inst_13857 = f.call(null,inst_13850,inst_13853);var inst_13850__$1 = inst_13857;var state_13864__$1 = (function (){var statearr_13867 = state_13864;(statearr_13867[8] = inst_13850__$1);
return statearr_13867;
})();var statearr_13868_13883 = state_13864__$1;(statearr_13868_13883[2] = null);
(statearr_13868_13883[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 5))
{var inst_13850 = (state_13864[8]);var state_13864__$1 = state_13864;var statearr_13869_13884 = state_13864__$1;(statearr_13869_13884[2] = inst_13850);
(statearr_13869_13884[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 4))
{var inst_13853 = (state_13864[7]);var inst_13853__$1 = (state_13864[2]);var inst_13854 = (inst_13853__$1 == null);var state_13864__$1 = (function (){var statearr_13870 = state_13864;(statearr_13870[7] = inst_13853__$1);
return statearr_13870;
})();if(cljs.core.truth_(inst_13854))
{var statearr_13871_13885 = state_13864__$1;(statearr_13871_13885[1] = 5);
} else
{var statearr_13872_13886 = state_13864__$1;(statearr_13872_13886[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13865 === 3))
{var inst_13862 = (state_13864[2]);var state_13864__$1 = state_13864;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13864__$1,inst_13862);
} else
{if((state_val_13865 === 2))
{var state_13864__$1 = state_13864;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13864__$1,4,ch);
} else
{if((state_val_13865 === 1))
{var inst_13850 = init;var state_13864__$1 = (function (){var statearr_13873 = state_13864;(statearr_13873[8] = inst_13850);
return statearr_13873;
})();var statearr_13874_13887 = state_13864__$1;(statearr_13874_13887[2] = null);
(statearr_13874_13887[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13878 = [null,null,null,null,null,null,null,null,null];(statearr_13878[0] = state_machine__5507__auto__);
(statearr_13878[1] = 1);
return statearr_13878;
});
var state_machine__5507__auto____1 = (function (state_13864){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13864);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13879){if((e13879 instanceof Object))
{var ex__5510__auto__ = e13879;var statearr_13880_13888 = state_13864;(statearr_13880_13888[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13864);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13879;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13889 = state_13864;
state_13864 = G__13889;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13864){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13881 = f__5522__auto__.call(null);(statearr_13881[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13881;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13951){var state_val_13952 = (state_13951[1]);if((state_val_13952 === 1))
{var inst_13931 = cljs.core.seq.call(null,coll);var inst_13932 = inst_13931;var state_13951__$1 = (function (){var statearr_13953 = state_13951;(statearr_13953[7] = inst_13932);
return statearr_13953;
})();var statearr_13954_13972 = state_13951__$1;(statearr_13954_13972[2] = null);
(statearr_13954_13972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13952 === 2))
{var inst_13932 = (state_13951[7]);var state_13951__$1 = state_13951;if(cljs.core.truth_(inst_13932))
{var statearr_13955_13973 = state_13951__$1;(statearr_13955_13973[1] = 4);
} else
{var statearr_13956_13974 = state_13951__$1;(statearr_13956_13974[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13952 === 3))
{var inst_13949 = (state_13951[2]);var state_13951__$1 = state_13951;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13951__$1,inst_13949);
} else
{if((state_val_13952 === 4))
{var inst_13932 = (state_13951[7]);var inst_13935 = cljs.core.first.call(null,inst_13932);var state_13951__$1 = state_13951;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13951__$1,7,ch,inst_13935);
} else
{if((state_val_13952 === 5))
{var state_13951__$1 = state_13951;if(cljs.core.truth_(close_QMARK_))
{var statearr_13957_13975 = state_13951__$1;(statearr_13957_13975[1] = 8);
} else
{var statearr_13958_13976 = state_13951__$1;(statearr_13958_13976[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13952 === 6))
{var inst_13947 = (state_13951[2]);var state_13951__$1 = state_13951;var statearr_13959_13977 = state_13951__$1;(statearr_13959_13977[2] = inst_13947);
(statearr_13959_13977[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13952 === 7))
{var inst_13932 = (state_13951[7]);var inst_13937 = (state_13951[2]);var inst_13938 = cljs.core.next.call(null,inst_13932);var inst_13932__$1 = inst_13938;var state_13951__$1 = (function (){var statearr_13960 = state_13951;(statearr_13960[8] = inst_13937);
(statearr_13960[7] = inst_13932__$1);
return statearr_13960;
})();var statearr_13961_13978 = state_13951__$1;(statearr_13961_13978[2] = null);
(statearr_13961_13978[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13952 === 8))
{var inst_13942 = cljs.core.async.close_BANG_.call(null,ch);var state_13951__$1 = state_13951;var statearr_13962_13979 = state_13951__$1;(statearr_13962_13979[2] = inst_13942);
(statearr_13962_13979[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13952 === 9))
{var state_13951__$1 = state_13951;var statearr_13963_13980 = state_13951__$1;(statearr_13963_13980[2] = null);
(statearr_13963_13980[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13952 === 10))
{var inst_13945 = (state_13951[2]);var state_13951__$1 = state_13951;var statearr_13964_13981 = state_13951__$1;(statearr_13964_13981[2] = inst_13945);
(statearr_13964_13981[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13968 = [null,null,null,null,null,null,null,null,null];(statearr_13968[0] = state_machine__5507__auto__);
(statearr_13968[1] = 1);
return statearr_13968;
});
var state_machine__5507__auto____1 = (function (state_13951){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13951);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13969){if((e13969 instanceof Object))
{var ex__5510__auto__ = e13969;var statearr_13970_13982 = state_13951;(statearr_13970_13982[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13951);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13969;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13983 = state_13951;
state_13951 = G__13983;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13951){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13951);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13971 = f__5522__auto__.call(null);(statearr_13971[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13971;
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
cljs.core.async.Mux = (function (){var obj13985 = {};return obj13985;
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
cljs.core.async.Mult = (function (){var obj13987 = {};return obj13987;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14211 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14211 = (function (cs,ch,mult,meta14212){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14212 = meta14212;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14211.cljs$lang$type = true;
cljs.core.async.t14211.cljs$lang$ctorStr = "cljs.core.async/t14211";
cljs.core.async.t14211.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14211");
});})(cs))
;
cljs.core.async.t14211.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14211.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14211.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14211.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14211.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14211.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14211.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14213){var self__ = this;
var _14213__$1 = this;return self__.meta14212;
});})(cs))
;
cljs.core.async.t14211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14213,meta14212__$1){var self__ = this;
var _14213__$1 = this;return (new cljs.core.async.t14211(self__.cs,self__.ch,self__.mult,meta14212__$1));
});})(cs))
;
cljs.core.async.__GT_t14211 = ((function (cs){
return (function __GT_t14211(cs__$1,ch__$1,mult__$1,meta14212){return (new cljs.core.async.t14211(cs__$1,ch__$1,mult__$1,meta14212));
});})(cs))
;
}
return (new cljs.core.async.t14211(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14434 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14348){var state_val_14349 = (state_14348[1]);if((state_val_14349 === 32))
{var inst_14216 = (state_14348[7]);var inst_14292 = (state_14348[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14348,31,Object,null,30);var inst_14299 = cljs.core.async.put_BANG_.call(null,inst_14292,inst_14216,done);var state_14348__$1 = state_14348;var statearr_14350_14435 = state_14348__$1;(statearr_14350_14435[2] = inst_14299);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14348__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 1))
{var state_14348__$1 = state_14348;var statearr_14351_14436 = state_14348__$1;(statearr_14351_14436[2] = null);
(statearr_14351_14436[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 33))
{var inst_14305 = (state_14348[9]);var inst_14307 = cljs.core.chunked_seq_QMARK_.call(null,inst_14305);var state_14348__$1 = state_14348;if(inst_14307)
{var statearr_14352_14437 = state_14348__$1;(statearr_14352_14437[1] = 36);
} else
{var statearr_14353_14438 = state_14348__$1;(statearr_14353_14438[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 2))
{var state_14348__$1 = state_14348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14348__$1,4,ch);
} else
{if((state_val_14349 === 34))
{var state_14348__$1 = state_14348;var statearr_14354_14439 = state_14348__$1;(statearr_14354_14439[2] = null);
(statearr_14354_14439[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 3))
{var inst_14346 = (state_14348[2]);var state_14348__$1 = state_14348;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14348__$1,inst_14346);
} else
{if((state_val_14349 === 35))
{var inst_14330 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14355_14440 = state_14348__$1;(statearr_14355_14440[2] = inst_14330);
(statearr_14355_14440[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 4))
{var inst_14216 = (state_14348[7]);var inst_14216__$1 = (state_14348[2]);var inst_14217 = (inst_14216__$1 == null);var state_14348__$1 = (function (){var statearr_14356 = state_14348;(statearr_14356[7] = inst_14216__$1);
return statearr_14356;
})();if(cljs.core.truth_(inst_14217))
{var statearr_14357_14441 = state_14348__$1;(statearr_14357_14441[1] = 5);
} else
{var statearr_14358_14442 = state_14348__$1;(statearr_14358_14442[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 36))
{var inst_14305 = (state_14348[9]);var inst_14309 = cljs.core.chunk_first.call(null,inst_14305);var inst_14310 = cljs.core.chunk_rest.call(null,inst_14305);var inst_14311 = cljs.core.count.call(null,inst_14309);var inst_14284 = inst_14310;var inst_14285 = inst_14309;var inst_14286 = inst_14311;var inst_14287 = 0;var state_14348__$1 = (function (){var statearr_14359 = state_14348;(statearr_14359[10] = inst_14286);
(statearr_14359[11] = inst_14287);
(statearr_14359[12] = inst_14285);
(statearr_14359[13] = inst_14284);
return statearr_14359;
})();var statearr_14360_14443 = state_14348__$1;(statearr_14360_14443[2] = null);
(statearr_14360_14443[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 5))
{var inst_14223 = cljs.core.deref.call(null,cs);var inst_14224 = cljs.core.seq.call(null,inst_14223);var inst_14225 = inst_14224;var inst_14226 = null;var inst_14227 = 0;var inst_14228 = 0;var state_14348__$1 = (function (){var statearr_14361 = state_14348;(statearr_14361[14] = inst_14228);
(statearr_14361[15] = inst_14227);
(statearr_14361[16] = inst_14226);
(statearr_14361[17] = inst_14225);
return statearr_14361;
})();var statearr_14362_14444 = state_14348__$1;(statearr_14362_14444[2] = null);
(statearr_14362_14444[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 37))
{var inst_14305 = (state_14348[9]);var inst_14314 = cljs.core.first.call(null,inst_14305);var state_14348__$1 = (function (){var statearr_14363 = state_14348;(statearr_14363[18] = inst_14314);
return statearr_14363;
})();var statearr_14364_14445 = state_14348__$1;(statearr_14364_14445[2] = null);
(statearr_14364_14445[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 6))
{var inst_14276 = (state_14348[19]);var inst_14275 = cljs.core.deref.call(null,cs);var inst_14276__$1 = cljs.core.keys.call(null,inst_14275);var inst_14277 = cljs.core.count.call(null,inst_14276__$1);var inst_14278 = cljs.core.reset_BANG_.call(null,dctr,inst_14277);var inst_14283 = cljs.core.seq.call(null,inst_14276__$1);var inst_14284 = inst_14283;var inst_14285 = null;var inst_14286 = 0;var inst_14287 = 0;var state_14348__$1 = (function (){var statearr_14365 = state_14348;(statearr_14365[10] = inst_14286);
(statearr_14365[11] = inst_14287);
(statearr_14365[12] = inst_14285);
(statearr_14365[13] = inst_14284);
(statearr_14365[20] = inst_14278);
(statearr_14365[19] = inst_14276__$1);
return statearr_14365;
})();var statearr_14366_14446 = state_14348__$1;(statearr_14366_14446[2] = null);
(statearr_14366_14446[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 38))
{var inst_14327 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14367_14447 = state_14348__$1;(statearr_14367_14447[2] = inst_14327);
(statearr_14367_14447[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 7))
{var inst_14344 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14368_14448 = state_14348__$1;(statearr_14368_14448[2] = inst_14344);
(statearr_14368_14448[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 39))
{var inst_14305 = (state_14348[9]);var inst_14323 = (state_14348[2]);var inst_14324 = cljs.core.next.call(null,inst_14305);var inst_14284 = inst_14324;var inst_14285 = null;var inst_14286 = 0;var inst_14287 = 0;var state_14348__$1 = (function (){var statearr_14369 = state_14348;(statearr_14369[10] = inst_14286);
(statearr_14369[11] = inst_14287);
(statearr_14369[12] = inst_14285);
(statearr_14369[13] = inst_14284);
(statearr_14369[21] = inst_14323);
return statearr_14369;
})();var statearr_14370_14449 = state_14348__$1;(statearr_14370_14449[2] = null);
(statearr_14370_14449[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 8))
{var inst_14228 = (state_14348[14]);var inst_14227 = (state_14348[15]);var inst_14230 = (inst_14228 < inst_14227);var inst_14231 = inst_14230;var state_14348__$1 = state_14348;if(cljs.core.truth_(inst_14231))
{var statearr_14371_14450 = state_14348__$1;(statearr_14371_14450[1] = 10);
} else
{var statearr_14372_14451 = state_14348__$1;(statearr_14372_14451[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 40))
{var inst_14314 = (state_14348[18]);var inst_14315 = (state_14348[2]);var inst_14316 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14317 = cljs.core.async.untap_STAR_.call(null,m,inst_14314);var state_14348__$1 = (function (){var statearr_14373 = state_14348;(statearr_14373[22] = inst_14316);
(statearr_14373[23] = inst_14315);
return statearr_14373;
})();var statearr_14374_14452 = state_14348__$1;(statearr_14374_14452[2] = inst_14317);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14348__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 9))
{var inst_14273 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14375_14453 = state_14348__$1;(statearr_14375_14453[2] = inst_14273);
(statearr_14375_14453[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 41))
{var inst_14216 = (state_14348[7]);var inst_14314 = (state_14348[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14348,40,Object,null,39);var inst_14321 = cljs.core.async.put_BANG_.call(null,inst_14314,inst_14216,done);var state_14348__$1 = state_14348;var statearr_14376_14454 = state_14348__$1;(statearr_14376_14454[2] = inst_14321);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14348__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 10))
{var inst_14228 = (state_14348[14]);var inst_14226 = (state_14348[16]);var inst_14234 = cljs.core._nth.call(null,inst_14226,inst_14228);var inst_14235 = cljs.core.nth.call(null,inst_14234,0,null);var inst_14236 = cljs.core.nth.call(null,inst_14234,1,null);var state_14348__$1 = (function (){var statearr_14377 = state_14348;(statearr_14377[24] = inst_14235);
return statearr_14377;
})();if(cljs.core.truth_(inst_14236))
{var statearr_14378_14455 = state_14348__$1;(statearr_14378_14455[1] = 13);
} else
{var statearr_14379_14456 = state_14348__$1;(statearr_14379_14456[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 42))
{var state_14348__$1 = state_14348;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14348__$1,45,dchan);
} else
{if((state_val_14349 === 11))
{var inst_14245 = (state_14348[25]);var inst_14225 = (state_14348[17]);var inst_14245__$1 = cljs.core.seq.call(null,inst_14225);var state_14348__$1 = (function (){var statearr_14380 = state_14348;(statearr_14380[25] = inst_14245__$1);
return statearr_14380;
})();if(inst_14245__$1)
{var statearr_14381_14457 = state_14348__$1;(statearr_14381_14457[1] = 16);
} else
{var statearr_14382_14458 = state_14348__$1;(statearr_14382_14458[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 43))
{var state_14348__$1 = state_14348;var statearr_14383_14459 = state_14348__$1;(statearr_14383_14459[2] = null);
(statearr_14383_14459[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 12))
{var inst_14271 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14384_14460 = state_14348__$1;(statearr_14384_14460[2] = inst_14271);
(statearr_14384_14460[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 44))
{var inst_14341 = (state_14348[2]);var state_14348__$1 = (function (){var statearr_14385 = state_14348;(statearr_14385[26] = inst_14341);
return statearr_14385;
})();var statearr_14386_14461 = state_14348__$1;(statearr_14386_14461[2] = null);
(statearr_14386_14461[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 13))
{var inst_14235 = (state_14348[24]);var inst_14238 = cljs.core.async.close_BANG_.call(null,inst_14235);var state_14348__$1 = state_14348;var statearr_14387_14462 = state_14348__$1;(statearr_14387_14462[2] = inst_14238);
(statearr_14387_14462[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 45))
{var inst_14338 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14391_14463 = state_14348__$1;(statearr_14391_14463[2] = inst_14338);
(statearr_14391_14463[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 14))
{var state_14348__$1 = state_14348;var statearr_14392_14464 = state_14348__$1;(statearr_14392_14464[2] = null);
(statearr_14392_14464[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 15))
{var inst_14228 = (state_14348[14]);var inst_14227 = (state_14348[15]);var inst_14226 = (state_14348[16]);var inst_14225 = (state_14348[17]);var inst_14241 = (state_14348[2]);var inst_14242 = (inst_14228 + 1);var tmp14388 = inst_14227;var tmp14389 = inst_14226;var tmp14390 = inst_14225;var inst_14225__$1 = tmp14390;var inst_14226__$1 = tmp14389;var inst_14227__$1 = tmp14388;var inst_14228__$1 = inst_14242;var state_14348__$1 = (function (){var statearr_14393 = state_14348;(statearr_14393[27] = inst_14241);
(statearr_14393[14] = inst_14228__$1);
(statearr_14393[15] = inst_14227__$1);
(statearr_14393[16] = inst_14226__$1);
(statearr_14393[17] = inst_14225__$1);
return statearr_14393;
})();var statearr_14394_14465 = state_14348__$1;(statearr_14394_14465[2] = null);
(statearr_14394_14465[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 16))
{var inst_14245 = (state_14348[25]);var inst_14247 = cljs.core.chunked_seq_QMARK_.call(null,inst_14245);var state_14348__$1 = state_14348;if(inst_14247)
{var statearr_14395_14466 = state_14348__$1;(statearr_14395_14466[1] = 19);
} else
{var statearr_14396_14467 = state_14348__$1;(statearr_14396_14467[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 17))
{var state_14348__$1 = state_14348;var statearr_14397_14468 = state_14348__$1;(statearr_14397_14468[2] = null);
(statearr_14397_14468[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 18))
{var inst_14269 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14398_14469 = state_14348__$1;(statearr_14398_14469[2] = inst_14269);
(statearr_14398_14469[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 19))
{var inst_14245 = (state_14348[25]);var inst_14249 = cljs.core.chunk_first.call(null,inst_14245);var inst_14250 = cljs.core.chunk_rest.call(null,inst_14245);var inst_14251 = cljs.core.count.call(null,inst_14249);var inst_14225 = inst_14250;var inst_14226 = inst_14249;var inst_14227 = inst_14251;var inst_14228 = 0;var state_14348__$1 = (function (){var statearr_14399 = state_14348;(statearr_14399[14] = inst_14228);
(statearr_14399[15] = inst_14227);
(statearr_14399[16] = inst_14226);
(statearr_14399[17] = inst_14225);
return statearr_14399;
})();var statearr_14400_14470 = state_14348__$1;(statearr_14400_14470[2] = null);
(statearr_14400_14470[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 20))
{var inst_14245 = (state_14348[25]);var inst_14255 = cljs.core.first.call(null,inst_14245);var inst_14256 = cljs.core.nth.call(null,inst_14255,0,null);var inst_14257 = cljs.core.nth.call(null,inst_14255,1,null);var state_14348__$1 = (function (){var statearr_14401 = state_14348;(statearr_14401[28] = inst_14256);
return statearr_14401;
})();if(cljs.core.truth_(inst_14257))
{var statearr_14402_14471 = state_14348__$1;(statearr_14402_14471[1] = 22);
} else
{var statearr_14403_14472 = state_14348__$1;(statearr_14403_14472[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 21))
{var inst_14266 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14404_14473 = state_14348__$1;(statearr_14404_14473[2] = inst_14266);
(statearr_14404_14473[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 22))
{var inst_14256 = (state_14348[28]);var inst_14259 = cljs.core.async.close_BANG_.call(null,inst_14256);var state_14348__$1 = state_14348;var statearr_14405_14474 = state_14348__$1;(statearr_14405_14474[2] = inst_14259);
(statearr_14405_14474[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 23))
{var state_14348__$1 = state_14348;var statearr_14406_14475 = state_14348__$1;(statearr_14406_14475[2] = null);
(statearr_14406_14475[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 24))
{var inst_14245 = (state_14348[25]);var inst_14262 = (state_14348[2]);var inst_14263 = cljs.core.next.call(null,inst_14245);var inst_14225 = inst_14263;var inst_14226 = null;var inst_14227 = 0;var inst_14228 = 0;var state_14348__$1 = (function (){var statearr_14407 = state_14348;(statearr_14407[14] = inst_14228);
(statearr_14407[29] = inst_14262);
(statearr_14407[15] = inst_14227);
(statearr_14407[16] = inst_14226);
(statearr_14407[17] = inst_14225);
return statearr_14407;
})();var statearr_14408_14476 = state_14348__$1;(statearr_14408_14476[2] = null);
(statearr_14408_14476[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 25))
{var inst_14286 = (state_14348[10]);var inst_14287 = (state_14348[11]);var inst_14289 = (inst_14287 < inst_14286);var inst_14290 = inst_14289;var state_14348__$1 = state_14348;if(cljs.core.truth_(inst_14290))
{var statearr_14409_14477 = state_14348__$1;(statearr_14409_14477[1] = 27);
} else
{var statearr_14410_14478 = state_14348__$1;(statearr_14410_14478[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 26))
{var inst_14276 = (state_14348[19]);var inst_14334 = (state_14348[2]);var inst_14335 = cljs.core.seq.call(null,inst_14276);var state_14348__$1 = (function (){var statearr_14411 = state_14348;(statearr_14411[30] = inst_14334);
return statearr_14411;
})();if(inst_14335)
{var statearr_14412_14479 = state_14348__$1;(statearr_14412_14479[1] = 42);
} else
{var statearr_14413_14480 = state_14348__$1;(statearr_14413_14480[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 27))
{var inst_14287 = (state_14348[11]);var inst_14285 = (state_14348[12]);var inst_14292 = cljs.core._nth.call(null,inst_14285,inst_14287);var state_14348__$1 = (function (){var statearr_14414 = state_14348;(statearr_14414[8] = inst_14292);
return statearr_14414;
})();var statearr_14415_14481 = state_14348__$1;(statearr_14415_14481[2] = null);
(statearr_14415_14481[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 28))
{var inst_14284 = (state_14348[13]);var inst_14305 = (state_14348[9]);var inst_14305__$1 = cljs.core.seq.call(null,inst_14284);var state_14348__$1 = (function (){var statearr_14419 = state_14348;(statearr_14419[9] = inst_14305__$1);
return statearr_14419;
})();if(inst_14305__$1)
{var statearr_14420_14482 = state_14348__$1;(statearr_14420_14482[1] = 33);
} else
{var statearr_14421_14483 = state_14348__$1;(statearr_14421_14483[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 29))
{var inst_14332 = (state_14348[2]);var state_14348__$1 = state_14348;var statearr_14422_14484 = state_14348__$1;(statearr_14422_14484[2] = inst_14332);
(statearr_14422_14484[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 30))
{var inst_14286 = (state_14348[10]);var inst_14287 = (state_14348[11]);var inst_14285 = (state_14348[12]);var inst_14284 = (state_14348[13]);var inst_14301 = (state_14348[2]);var inst_14302 = (inst_14287 + 1);var tmp14416 = inst_14286;var tmp14417 = inst_14285;var tmp14418 = inst_14284;var inst_14284__$1 = tmp14418;var inst_14285__$1 = tmp14417;var inst_14286__$1 = tmp14416;var inst_14287__$1 = inst_14302;var state_14348__$1 = (function (){var statearr_14423 = state_14348;(statearr_14423[10] = inst_14286__$1);
(statearr_14423[11] = inst_14287__$1);
(statearr_14423[12] = inst_14285__$1);
(statearr_14423[13] = inst_14284__$1);
(statearr_14423[31] = inst_14301);
return statearr_14423;
})();var statearr_14424_14485 = state_14348__$1;(statearr_14424_14485[2] = null);
(statearr_14424_14485[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14349 === 31))
{var inst_14292 = (state_14348[8]);var inst_14293 = (state_14348[2]);var inst_14294 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14295 = cljs.core.async.untap_STAR_.call(null,m,inst_14292);var state_14348__$1 = (function (){var statearr_14425 = state_14348;(statearr_14425[32] = inst_14294);
(statearr_14425[33] = inst_14293);
return statearr_14425;
})();var statearr_14426_14486 = state_14348__$1;(statearr_14426_14486[2] = inst_14295);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14348__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14430[0] = state_machine__5507__auto__);
(statearr_14430[1] = 1);
return statearr_14430;
});
var state_machine__5507__auto____1 = (function (state_14348){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14348);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14431){if((e14431 instanceof Object))
{var ex__5510__auto__ = e14431;var statearr_14432_14487 = state_14348;(statearr_14432_14487[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14348);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14431;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14488 = state_14348;
state_14348 = G__14488;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14348){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14348);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14433 = f__5522__auto__.call(null);(statearr_14433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14434);
return statearr_14433;
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
cljs.core.async.Mix = (function (){var obj14490 = {};return obj14490;
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
;var m = (function (){if(typeof cljs.core.async.t14600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14600 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14601){
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
this.meta14601 = meta14601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14600.cljs$lang$type = true;
cljs.core.async.t14600.cljs$lang$ctorStr = "cljs.core.async/t14600";
cljs.core.async.t14600.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14600");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14600.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14600.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14600.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14600.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14600.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14600.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14600.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14602){var self__ = this;
var _14602__$1 = this;return self__.meta14601;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14602,meta14601__$1){var self__ = this;
var _14602__$1 = this;return (new cljs.core.async.t14600(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14601__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14600 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14600(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14601){return (new cljs.core.async.t14600(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14601));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14600(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14709 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14667){var state_val_14668 = (state_14667[1]);if((state_val_14668 === 1))
{var inst_14606 = (state_14667[7]);var inst_14606__$1 = calc_state.call(null);var inst_14607 = cljs.core.seq_QMARK_.call(null,inst_14606__$1);var state_14667__$1 = (function (){var statearr_14669 = state_14667;(statearr_14669[7] = inst_14606__$1);
return statearr_14669;
})();if(inst_14607)
{var statearr_14670_14710 = state_14667__$1;(statearr_14670_14710[1] = 2);
} else
{var statearr_14671_14711 = state_14667__$1;(statearr_14671_14711[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 2))
{var inst_14606 = (state_14667[7]);var inst_14609 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14606);var state_14667__$1 = state_14667;var statearr_14672_14712 = state_14667__$1;(statearr_14672_14712[2] = inst_14609);
(statearr_14672_14712[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 3))
{var inst_14606 = (state_14667[7]);var state_14667__$1 = state_14667;var statearr_14673_14713 = state_14667__$1;(statearr_14673_14713[2] = inst_14606);
(statearr_14673_14713[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 4))
{var inst_14606 = (state_14667[7]);var inst_14612 = (state_14667[2]);var inst_14613 = cljs.core.get.call(null,inst_14612,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14614 = cljs.core.get.call(null,inst_14612,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14615 = cljs.core.get.call(null,inst_14612,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14616 = inst_14606;var state_14667__$1 = (function (){var statearr_14674 = state_14667;(statearr_14674[8] = inst_14613);
(statearr_14674[9] = inst_14614);
(statearr_14674[10] = inst_14615);
(statearr_14674[11] = inst_14616);
return statearr_14674;
})();var statearr_14675_14714 = state_14667__$1;(statearr_14675_14714[2] = null);
(statearr_14675_14714[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 5))
{var inst_14616 = (state_14667[11]);var inst_14619 = cljs.core.seq_QMARK_.call(null,inst_14616);var state_14667__$1 = state_14667;if(inst_14619)
{var statearr_14676_14715 = state_14667__$1;(statearr_14676_14715[1] = 7);
} else
{var statearr_14677_14716 = state_14667__$1;(statearr_14677_14716[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 6))
{var inst_14665 = (state_14667[2]);var state_14667__$1 = state_14667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14667__$1,inst_14665);
} else
{if((state_val_14668 === 7))
{var inst_14616 = (state_14667[11]);var inst_14621 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14616);var state_14667__$1 = state_14667;var statearr_14678_14717 = state_14667__$1;(statearr_14678_14717[2] = inst_14621);
(statearr_14678_14717[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 8))
{var inst_14616 = (state_14667[11]);var state_14667__$1 = state_14667;var statearr_14679_14718 = state_14667__$1;(statearr_14679_14718[2] = inst_14616);
(statearr_14679_14718[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 9))
{var inst_14624 = (state_14667[12]);var inst_14624__$1 = (state_14667[2]);var inst_14625 = cljs.core.get.call(null,inst_14624__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14626 = cljs.core.get.call(null,inst_14624__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14627 = cljs.core.get.call(null,inst_14624__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14667__$1 = (function (){var statearr_14680 = state_14667;(statearr_14680[12] = inst_14624__$1);
(statearr_14680[13] = inst_14626);
(statearr_14680[14] = inst_14627);
return statearr_14680;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14667__$1,10,inst_14625);
} else
{if((state_val_14668 === 10))
{var inst_14632 = (state_14667[15]);var inst_14631 = (state_14667[16]);var inst_14630 = (state_14667[2]);var inst_14631__$1 = cljs.core.nth.call(null,inst_14630,0,null);var inst_14632__$1 = cljs.core.nth.call(null,inst_14630,1,null);var inst_14633 = (inst_14631__$1 == null);var inst_14634 = cljs.core._EQ_.call(null,inst_14632__$1,change);var inst_14635 = (inst_14633) || (inst_14634);var state_14667__$1 = (function (){var statearr_14681 = state_14667;(statearr_14681[15] = inst_14632__$1);
(statearr_14681[16] = inst_14631__$1);
return statearr_14681;
})();if(cljs.core.truth_(inst_14635))
{var statearr_14682_14719 = state_14667__$1;(statearr_14682_14719[1] = 11);
} else
{var statearr_14683_14720 = state_14667__$1;(statearr_14683_14720[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 11))
{var inst_14631 = (state_14667[16]);var inst_14637 = (inst_14631 == null);var state_14667__$1 = state_14667;if(cljs.core.truth_(inst_14637))
{var statearr_14684_14721 = state_14667__$1;(statearr_14684_14721[1] = 14);
} else
{var statearr_14685_14722 = state_14667__$1;(statearr_14685_14722[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 12))
{var inst_14646 = (state_14667[17]);var inst_14632 = (state_14667[15]);var inst_14627 = (state_14667[14]);var inst_14646__$1 = inst_14627.call(null,inst_14632);var state_14667__$1 = (function (){var statearr_14686 = state_14667;(statearr_14686[17] = inst_14646__$1);
return statearr_14686;
})();if(cljs.core.truth_(inst_14646__$1))
{var statearr_14687_14723 = state_14667__$1;(statearr_14687_14723[1] = 17);
} else
{var statearr_14688_14724 = state_14667__$1;(statearr_14688_14724[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 13))
{var inst_14663 = (state_14667[2]);var state_14667__$1 = state_14667;var statearr_14689_14725 = state_14667__$1;(statearr_14689_14725[2] = inst_14663);
(statearr_14689_14725[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 14))
{var inst_14632 = (state_14667[15]);var inst_14639 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14632);var state_14667__$1 = state_14667;var statearr_14690_14726 = state_14667__$1;(statearr_14690_14726[2] = inst_14639);
(statearr_14690_14726[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 15))
{var state_14667__$1 = state_14667;var statearr_14691_14727 = state_14667__$1;(statearr_14691_14727[2] = null);
(statearr_14691_14727[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 16))
{var inst_14642 = (state_14667[2]);var inst_14643 = calc_state.call(null);var inst_14616 = inst_14643;var state_14667__$1 = (function (){var statearr_14692 = state_14667;(statearr_14692[18] = inst_14642);
(statearr_14692[11] = inst_14616);
return statearr_14692;
})();var statearr_14693_14728 = state_14667__$1;(statearr_14693_14728[2] = null);
(statearr_14693_14728[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 17))
{var inst_14646 = (state_14667[17]);var state_14667__$1 = state_14667;var statearr_14694_14729 = state_14667__$1;(statearr_14694_14729[2] = inst_14646);
(statearr_14694_14729[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 18))
{var inst_14632 = (state_14667[15]);var inst_14626 = (state_14667[13]);var inst_14627 = (state_14667[14]);var inst_14649 = cljs.core.empty_QMARK_.call(null,inst_14627);var inst_14650 = inst_14626.call(null,inst_14632);var inst_14651 = cljs.core.not.call(null,inst_14650);var inst_14652 = (inst_14649) && (inst_14651);var state_14667__$1 = state_14667;var statearr_14695_14730 = state_14667__$1;(statearr_14695_14730[2] = inst_14652);
(statearr_14695_14730[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 19))
{var inst_14654 = (state_14667[2]);var state_14667__$1 = state_14667;if(cljs.core.truth_(inst_14654))
{var statearr_14696_14731 = state_14667__$1;(statearr_14696_14731[1] = 20);
} else
{var statearr_14697_14732 = state_14667__$1;(statearr_14697_14732[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 20))
{var inst_14631 = (state_14667[16]);var state_14667__$1 = state_14667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14667__$1,23,out,inst_14631);
} else
{if((state_val_14668 === 21))
{var state_14667__$1 = state_14667;var statearr_14698_14733 = state_14667__$1;(statearr_14698_14733[2] = null);
(statearr_14698_14733[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 22))
{var inst_14624 = (state_14667[12]);var inst_14660 = (state_14667[2]);var inst_14616 = inst_14624;var state_14667__$1 = (function (){var statearr_14699 = state_14667;(statearr_14699[19] = inst_14660);
(statearr_14699[11] = inst_14616);
return statearr_14699;
})();var statearr_14700_14734 = state_14667__$1;(statearr_14700_14734[2] = null);
(statearr_14700_14734[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14668 === 23))
{var inst_14657 = (state_14667[2]);var state_14667__$1 = state_14667;var statearr_14701_14735 = state_14667__$1;(statearr_14701_14735[2] = inst_14657);
(statearr_14701_14735[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14705 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14705[0] = state_machine__5507__auto__);
(statearr_14705[1] = 1);
return statearr_14705;
});
var state_machine__5507__auto____1 = (function (state_14667){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14667);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14706){if((e14706 instanceof Object))
{var ex__5510__auto__ = e14706;var statearr_14707_14736 = state_14667;(statearr_14707_14736[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14706;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14737 = state_14667;
state_14667 = G__14737;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14667){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14708 = f__5522__auto__.call(null);(statearr_14708[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14709);
return statearr_14708;
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
cljs.core.async.Pub = (function (){var obj14739 = {};return obj14739;
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
return (function (p1__14740_SHARP_){if(cljs.core.truth_(p1__14740_SHARP_.call(null,topic)))
{return p1__14740_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14740_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14865 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14865 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14866){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14866 = meta14866;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14865.cljs$lang$type = true;
cljs.core.async.t14865.cljs$lang$ctorStr = "cljs.core.async/t14865";
cljs.core.async.t14865.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14865");
});})(mults,ensure_mult))
;
cljs.core.async.t14865.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14865.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14865.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14865.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14865.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14865.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14865.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14867){var self__ = this;
var _14867__$1 = this;return self__.meta14866;
});})(mults,ensure_mult))
;
cljs.core.async.t14865.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14867,meta14866__$1){var self__ = this;
var _14867__$1 = this;return (new cljs.core.async.t14865(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14866__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14865 = ((function (mults,ensure_mult){
return (function __GT_t14865(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14866){return (new cljs.core.async.t14865(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14866));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14865(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14989 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14941){var state_val_14942 = (state_14941[1]);if((state_val_14942 === 1))
{var state_14941__$1 = state_14941;var statearr_14943_14990 = state_14941__$1;(statearr_14943_14990[2] = null);
(statearr_14943_14990[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 2))
{var state_14941__$1 = state_14941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14941__$1,4,ch);
} else
{if((state_val_14942 === 3))
{var inst_14939 = (state_14941[2]);var state_14941__$1 = state_14941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14941__$1,inst_14939);
} else
{if((state_val_14942 === 4))
{var inst_14870 = (state_14941[7]);var inst_14870__$1 = (state_14941[2]);var inst_14871 = (inst_14870__$1 == null);var state_14941__$1 = (function (){var statearr_14944 = state_14941;(statearr_14944[7] = inst_14870__$1);
return statearr_14944;
})();if(cljs.core.truth_(inst_14871))
{var statearr_14945_14991 = state_14941__$1;(statearr_14945_14991[1] = 5);
} else
{var statearr_14946_14992 = state_14941__$1;(statearr_14946_14992[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 5))
{var inst_14877 = cljs.core.deref.call(null,mults);var inst_14878 = cljs.core.vals.call(null,inst_14877);var inst_14879 = cljs.core.seq.call(null,inst_14878);var inst_14880 = inst_14879;var inst_14881 = null;var inst_14882 = 0;var inst_14883 = 0;var state_14941__$1 = (function (){var statearr_14947 = state_14941;(statearr_14947[8] = inst_14882);
(statearr_14947[9] = inst_14883);
(statearr_14947[10] = inst_14880);
(statearr_14947[11] = inst_14881);
return statearr_14947;
})();var statearr_14948_14993 = state_14941__$1;(statearr_14948_14993[2] = null);
(statearr_14948_14993[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 6))
{var inst_14920 = (state_14941[12]);var inst_14918 = (state_14941[13]);var inst_14870 = (state_14941[7]);var inst_14918__$1 = topic_fn.call(null,inst_14870);var inst_14919 = cljs.core.deref.call(null,mults);var inst_14920__$1 = cljs.core.get.call(null,inst_14919,inst_14918__$1);var state_14941__$1 = (function (){var statearr_14949 = state_14941;(statearr_14949[12] = inst_14920__$1);
(statearr_14949[13] = inst_14918__$1);
return statearr_14949;
})();if(cljs.core.truth_(inst_14920__$1))
{var statearr_14950_14994 = state_14941__$1;(statearr_14950_14994[1] = 19);
} else
{var statearr_14951_14995 = state_14941__$1;(statearr_14951_14995[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 7))
{var inst_14937 = (state_14941[2]);var state_14941__$1 = state_14941;var statearr_14952_14996 = state_14941__$1;(statearr_14952_14996[2] = inst_14937);
(statearr_14952_14996[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 8))
{var inst_14882 = (state_14941[8]);var inst_14883 = (state_14941[9]);var inst_14885 = (inst_14883 < inst_14882);var inst_14886 = inst_14885;var state_14941__$1 = state_14941;if(cljs.core.truth_(inst_14886))
{var statearr_14956_14997 = state_14941__$1;(statearr_14956_14997[1] = 10);
} else
{var statearr_14957_14998 = state_14941__$1;(statearr_14957_14998[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 9))
{var inst_14916 = (state_14941[2]);var state_14941__$1 = state_14941;var statearr_14958_14999 = state_14941__$1;(statearr_14958_14999[2] = inst_14916);
(statearr_14958_14999[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 10))
{var inst_14882 = (state_14941[8]);var inst_14883 = (state_14941[9]);var inst_14880 = (state_14941[10]);var inst_14881 = (state_14941[11]);var inst_14888 = cljs.core._nth.call(null,inst_14881,inst_14883);var inst_14889 = cljs.core.async.muxch_STAR_.call(null,inst_14888);var inst_14890 = cljs.core.async.close_BANG_.call(null,inst_14889);var inst_14891 = (inst_14883 + 1);var tmp14953 = inst_14882;var tmp14954 = inst_14880;var tmp14955 = inst_14881;var inst_14880__$1 = tmp14954;var inst_14881__$1 = tmp14955;var inst_14882__$1 = tmp14953;var inst_14883__$1 = inst_14891;var state_14941__$1 = (function (){var statearr_14959 = state_14941;(statearr_14959[8] = inst_14882__$1);
(statearr_14959[9] = inst_14883__$1);
(statearr_14959[10] = inst_14880__$1);
(statearr_14959[11] = inst_14881__$1);
(statearr_14959[14] = inst_14890);
return statearr_14959;
})();var statearr_14960_15000 = state_14941__$1;(statearr_14960_15000[2] = null);
(statearr_14960_15000[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 11))
{var inst_14880 = (state_14941[10]);var inst_14894 = (state_14941[15]);var inst_14894__$1 = cljs.core.seq.call(null,inst_14880);var state_14941__$1 = (function (){var statearr_14961 = state_14941;(statearr_14961[15] = inst_14894__$1);
return statearr_14961;
})();if(inst_14894__$1)
{var statearr_14962_15001 = state_14941__$1;(statearr_14962_15001[1] = 13);
} else
{var statearr_14963_15002 = state_14941__$1;(statearr_14963_15002[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 12))
{var inst_14914 = (state_14941[2]);var state_14941__$1 = state_14941;var statearr_14964_15003 = state_14941__$1;(statearr_14964_15003[2] = inst_14914);
(statearr_14964_15003[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 13))
{var inst_14894 = (state_14941[15]);var inst_14896 = cljs.core.chunked_seq_QMARK_.call(null,inst_14894);var state_14941__$1 = state_14941;if(inst_14896)
{var statearr_14965_15004 = state_14941__$1;(statearr_14965_15004[1] = 16);
} else
{var statearr_14966_15005 = state_14941__$1;(statearr_14966_15005[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 14))
{var state_14941__$1 = state_14941;var statearr_14967_15006 = state_14941__$1;(statearr_14967_15006[2] = null);
(statearr_14967_15006[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 15))
{var inst_14912 = (state_14941[2]);var state_14941__$1 = state_14941;var statearr_14968_15007 = state_14941__$1;(statearr_14968_15007[2] = inst_14912);
(statearr_14968_15007[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 16))
{var inst_14894 = (state_14941[15]);var inst_14898 = cljs.core.chunk_first.call(null,inst_14894);var inst_14899 = cljs.core.chunk_rest.call(null,inst_14894);var inst_14900 = cljs.core.count.call(null,inst_14898);var inst_14880 = inst_14899;var inst_14881 = inst_14898;var inst_14882 = inst_14900;var inst_14883 = 0;var state_14941__$1 = (function (){var statearr_14969 = state_14941;(statearr_14969[8] = inst_14882);
(statearr_14969[9] = inst_14883);
(statearr_14969[10] = inst_14880);
(statearr_14969[11] = inst_14881);
return statearr_14969;
})();var statearr_14970_15008 = state_14941__$1;(statearr_14970_15008[2] = null);
(statearr_14970_15008[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 17))
{var inst_14894 = (state_14941[15]);var inst_14903 = cljs.core.first.call(null,inst_14894);var inst_14904 = cljs.core.async.muxch_STAR_.call(null,inst_14903);var inst_14905 = cljs.core.async.close_BANG_.call(null,inst_14904);var inst_14906 = cljs.core.next.call(null,inst_14894);var inst_14880 = inst_14906;var inst_14881 = null;var inst_14882 = 0;var inst_14883 = 0;var state_14941__$1 = (function (){var statearr_14971 = state_14941;(statearr_14971[8] = inst_14882);
(statearr_14971[9] = inst_14883);
(statearr_14971[10] = inst_14880);
(statearr_14971[11] = inst_14881);
(statearr_14971[16] = inst_14905);
return statearr_14971;
})();var statearr_14972_15009 = state_14941__$1;(statearr_14972_15009[2] = null);
(statearr_14972_15009[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 18))
{var inst_14909 = (state_14941[2]);var state_14941__$1 = state_14941;var statearr_14973_15010 = state_14941__$1;(statearr_14973_15010[2] = inst_14909);
(statearr_14973_15010[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 19))
{var state_14941__$1 = state_14941;var statearr_14974_15011 = state_14941__$1;(statearr_14974_15011[2] = null);
(statearr_14974_15011[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 20))
{var state_14941__$1 = state_14941;var statearr_14975_15012 = state_14941__$1;(statearr_14975_15012[2] = null);
(statearr_14975_15012[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 21))
{var inst_14934 = (state_14941[2]);var state_14941__$1 = (function (){var statearr_14976 = state_14941;(statearr_14976[17] = inst_14934);
return statearr_14976;
})();var statearr_14977_15013 = state_14941__$1;(statearr_14977_15013[2] = null);
(statearr_14977_15013[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 22))
{var inst_14931 = (state_14941[2]);var state_14941__$1 = state_14941;var statearr_14978_15014 = state_14941__$1;(statearr_14978_15014[2] = inst_14931);
(statearr_14978_15014[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 23))
{var inst_14918 = (state_14941[13]);var inst_14922 = (state_14941[2]);var inst_14923 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14918);var state_14941__$1 = (function (){var statearr_14979 = state_14941;(statearr_14979[18] = inst_14922);
return statearr_14979;
})();var statearr_14980_15015 = state_14941__$1;(statearr_14980_15015[2] = inst_14923);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14941__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14942 === 24))
{var inst_14920 = (state_14941[12]);var inst_14870 = (state_14941[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14941,23,Object,null,22);var inst_14927 = cljs.core.async.muxch_STAR_.call(null,inst_14920);var state_14941__$1 = state_14941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14941__$1,25,inst_14927,inst_14870);
} else
{if((state_val_14942 === 25))
{var inst_14929 = (state_14941[2]);var state_14941__$1 = state_14941;var statearr_14981_15016 = state_14941__$1;(statearr_14981_15016[2] = inst_14929);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14941__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14985 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14985[0] = state_machine__5507__auto__);
(statearr_14985[1] = 1);
return statearr_14985;
});
var state_machine__5507__auto____1 = (function (state_14941){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14941);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14986){if((e14986 instanceof Object))
{var ex__5510__auto__ = e14986;var statearr_14987_15017 = state_14941;(statearr_14987_15017[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14986;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15018 = state_14941;
state_14941 = G__15018;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14941){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14988 = f__5522__auto__.call(null);(statearr_14988[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14989);
return statearr_14988;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15155 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15125){var state_val_15126 = (state_15125[1]);if((state_val_15126 === 1))
{var state_15125__$1 = state_15125;var statearr_15127_15156 = state_15125__$1;(statearr_15127_15156[2] = null);
(statearr_15127_15156[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 2))
{var inst_15088 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15089 = 0;var state_15125__$1 = (function (){var statearr_15128 = state_15125;(statearr_15128[7] = inst_15089);
(statearr_15128[8] = inst_15088);
return statearr_15128;
})();var statearr_15129_15157 = state_15125__$1;(statearr_15129_15157[2] = null);
(statearr_15129_15157[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 3))
{var inst_15123 = (state_15125[2]);var state_15125__$1 = state_15125;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15125__$1,inst_15123);
} else
{if((state_val_15126 === 4))
{var inst_15089 = (state_15125[7]);var inst_15091 = (inst_15089 < cnt);var state_15125__$1 = state_15125;if(cljs.core.truth_(inst_15091))
{var statearr_15130_15158 = state_15125__$1;(statearr_15130_15158[1] = 6);
} else
{var statearr_15131_15159 = state_15125__$1;(statearr_15131_15159[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 5))
{var inst_15109 = (state_15125[2]);var state_15125__$1 = (function (){var statearr_15132 = state_15125;(statearr_15132[9] = inst_15109);
return statearr_15132;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15125__$1,12,dchan);
} else
{if((state_val_15126 === 6))
{var state_15125__$1 = state_15125;var statearr_15133_15160 = state_15125__$1;(statearr_15133_15160[2] = null);
(statearr_15133_15160[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 7))
{var state_15125__$1 = state_15125;var statearr_15134_15161 = state_15125__$1;(statearr_15134_15161[2] = null);
(statearr_15134_15161[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 8))
{var inst_15107 = (state_15125[2]);var state_15125__$1 = state_15125;var statearr_15135_15162 = state_15125__$1;(statearr_15135_15162[2] = inst_15107);
(statearr_15135_15162[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 9))
{var inst_15089 = (state_15125[7]);var inst_15102 = (state_15125[2]);var inst_15103 = (inst_15089 + 1);var inst_15089__$1 = inst_15103;var state_15125__$1 = (function (){var statearr_15136 = state_15125;(statearr_15136[10] = inst_15102);
(statearr_15136[7] = inst_15089__$1);
return statearr_15136;
})();var statearr_15137_15163 = state_15125__$1;(statearr_15137_15163[2] = null);
(statearr_15137_15163[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 10))
{var inst_15093 = (state_15125[2]);var inst_15094 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15125__$1 = (function (){var statearr_15138 = state_15125;(statearr_15138[11] = inst_15093);
return statearr_15138;
})();var statearr_15139_15164 = state_15125__$1;(statearr_15139_15164[2] = inst_15094);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15125__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 11))
{var inst_15089 = (state_15125[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15125,10,Object,null,9);var inst_15098 = chs__$1.call(null,inst_15089);var inst_15099 = done.call(null,inst_15089);var inst_15100 = cljs.core.async.take_BANG_.call(null,inst_15098,inst_15099);var state_15125__$1 = state_15125;var statearr_15140_15165 = state_15125__$1;(statearr_15140_15165[2] = inst_15100);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15125__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 12))
{var inst_15111 = (state_15125[12]);var inst_15111__$1 = (state_15125[2]);var inst_15112 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15111__$1);var state_15125__$1 = (function (){var statearr_15141 = state_15125;(statearr_15141[12] = inst_15111__$1);
return statearr_15141;
})();if(cljs.core.truth_(inst_15112))
{var statearr_15142_15166 = state_15125__$1;(statearr_15142_15166[1] = 13);
} else
{var statearr_15143_15167 = state_15125__$1;(statearr_15143_15167[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 13))
{var inst_15114 = cljs.core.async.close_BANG_.call(null,out);var state_15125__$1 = state_15125;var statearr_15144_15168 = state_15125__$1;(statearr_15144_15168[2] = inst_15114);
(statearr_15144_15168[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 14))
{var inst_15111 = (state_15125[12]);var inst_15116 = cljs.core.apply.call(null,f,inst_15111);var state_15125__$1 = state_15125;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15125__$1,16,out,inst_15116);
} else
{if((state_val_15126 === 15))
{var inst_15121 = (state_15125[2]);var state_15125__$1 = state_15125;var statearr_15145_15169 = state_15125__$1;(statearr_15145_15169[2] = inst_15121);
(statearr_15145_15169[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15126 === 16))
{var inst_15118 = (state_15125[2]);var state_15125__$1 = (function (){var statearr_15146 = state_15125;(statearr_15146[13] = inst_15118);
return statearr_15146;
})();var statearr_15147_15170 = state_15125__$1;(statearr_15147_15170[2] = null);
(statearr_15147_15170[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15151 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15151[0] = state_machine__5507__auto__);
(statearr_15151[1] = 1);
return statearr_15151;
});
var state_machine__5507__auto____1 = (function (state_15125){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15125);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15152){if((e15152 instanceof Object))
{var ex__5510__auto__ = e15152;var statearr_15153_15171 = state_15125;(statearr_15153_15171[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15125);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15152;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15172 = state_15125;
state_15125 = G__15172;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15125){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15125);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15154 = f__5522__auto__.call(null);(statearr_15154[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15155);
return statearr_15154;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15280 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15256){var state_val_15257 = (state_15256[1]);if((state_val_15257 === 1))
{var inst_15227 = cljs.core.vec.call(null,chs);var inst_15228 = inst_15227;var state_15256__$1 = (function (){var statearr_15258 = state_15256;(statearr_15258[7] = inst_15228);
return statearr_15258;
})();var statearr_15259_15281 = state_15256__$1;(statearr_15259_15281[2] = null);
(statearr_15259_15281[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15257 === 2))
{var inst_15228 = (state_15256[7]);var inst_15230 = cljs.core.count.call(null,inst_15228);var inst_15231 = (inst_15230 > 0);var state_15256__$1 = state_15256;if(cljs.core.truth_(inst_15231))
{var statearr_15260_15282 = state_15256__$1;(statearr_15260_15282[1] = 4);
} else
{var statearr_15261_15283 = state_15256__$1;(statearr_15261_15283[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15257 === 3))
{var inst_15254 = (state_15256[2]);var state_15256__$1 = state_15256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15256__$1,inst_15254);
} else
{if((state_val_15257 === 4))
{var inst_15228 = (state_15256[7]);var state_15256__$1 = state_15256;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15256__$1,7,inst_15228);
} else
{if((state_val_15257 === 5))
{var inst_15250 = cljs.core.async.close_BANG_.call(null,out);var state_15256__$1 = state_15256;var statearr_15262_15284 = state_15256__$1;(statearr_15262_15284[2] = inst_15250);
(statearr_15262_15284[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15257 === 6))
{var inst_15252 = (state_15256[2]);var state_15256__$1 = state_15256;var statearr_15263_15285 = state_15256__$1;(statearr_15263_15285[2] = inst_15252);
(statearr_15263_15285[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15257 === 7))
{var inst_15235 = (state_15256[8]);var inst_15236 = (state_15256[9]);var inst_15235__$1 = (state_15256[2]);var inst_15236__$1 = cljs.core.nth.call(null,inst_15235__$1,0,null);var inst_15237 = cljs.core.nth.call(null,inst_15235__$1,1,null);var inst_15238 = (inst_15236__$1 == null);var state_15256__$1 = (function (){var statearr_15264 = state_15256;(statearr_15264[8] = inst_15235__$1);
(statearr_15264[10] = inst_15237);
(statearr_15264[9] = inst_15236__$1);
return statearr_15264;
})();if(cljs.core.truth_(inst_15238))
{var statearr_15265_15286 = state_15256__$1;(statearr_15265_15286[1] = 8);
} else
{var statearr_15266_15287 = state_15256__$1;(statearr_15266_15287[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15257 === 8))
{var inst_15228 = (state_15256[7]);var inst_15235 = (state_15256[8]);var inst_15237 = (state_15256[10]);var inst_15236 = (state_15256[9]);var inst_15240 = (function (){var c = inst_15237;var v = inst_15236;var vec__15233 = inst_15235;var cs = inst_15228;return ((function (c,v,vec__15233,cs,inst_15228,inst_15235,inst_15237,inst_15236,state_val_15257){
return (function (p1__15173_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15173_SHARP_);
});
;})(c,v,vec__15233,cs,inst_15228,inst_15235,inst_15237,inst_15236,state_val_15257))
})();var inst_15241 = cljs.core.filterv.call(null,inst_15240,inst_15228);var inst_15228__$1 = inst_15241;var state_15256__$1 = (function (){var statearr_15267 = state_15256;(statearr_15267[7] = inst_15228__$1);
return statearr_15267;
})();var statearr_15268_15288 = state_15256__$1;(statearr_15268_15288[2] = null);
(statearr_15268_15288[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15257 === 9))
{var inst_15236 = (state_15256[9]);var state_15256__$1 = state_15256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15256__$1,11,out,inst_15236);
} else
{if((state_val_15257 === 10))
{var inst_15248 = (state_15256[2]);var state_15256__$1 = state_15256;var statearr_15270_15289 = state_15256__$1;(statearr_15270_15289[2] = inst_15248);
(statearr_15270_15289[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15257 === 11))
{var inst_15228 = (state_15256[7]);var inst_15245 = (state_15256[2]);var tmp15269 = inst_15228;var inst_15228__$1 = tmp15269;var state_15256__$1 = (function (){var statearr_15271 = state_15256;(statearr_15271[7] = inst_15228__$1);
(statearr_15271[11] = inst_15245);
return statearr_15271;
})();var statearr_15272_15290 = state_15256__$1;(statearr_15272_15290[2] = null);
(statearr_15272_15290[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15276 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15276[0] = state_machine__5507__auto__);
(statearr_15276[1] = 1);
return statearr_15276;
});
var state_machine__5507__auto____1 = (function (state_15256){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15256);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15277){if((e15277 instanceof Object))
{var ex__5510__auto__ = e15277;var statearr_15278_15291 = state_15256;(statearr_15278_15291[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15292 = state_15256;
state_15256 = G__15292;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15256){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15279 = f__5522__auto__.call(null);(statearr_15279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15280);
return statearr_15279;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15385 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15362){var state_val_15363 = (state_15362[1]);if((state_val_15363 === 1))
{var inst_15339 = 0;var state_15362__$1 = (function (){var statearr_15364 = state_15362;(statearr_15364[7] = inst_15339);
return statearr_15364;
})();var statearr_15365_15386 = state_15362__$1;(statearr_15365_15386[2] = null);
(statearr_15365_15386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 2))
{var inst_15339 = (state_15362[7]);var inst_15341 = (inst_15339 < n);var state_15362__$1 = state_15362;if(cljs.core.truth_(inst_15341))
{var statearr_15366_15387 = state_15362__$1;(statearr_15366_15387[1] = 4);
} else
{var statearr_15367_15388 = state_15362__$1;(statearr_15367_15388[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 3))
{var inst_15359 = (state_15362[2]);var inst_15360 = cljs.core.async.close_BANG_.call(null,out);var state_15362__$1 = (function (){var statearr_15368 = state_15362;(statearr_15368[8] = inst_15359);
return statearr_15368;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15362__$1,inst_15360);
} else
{if((state_val_15363 === 4))
{var state_15362__$1 = state_15362;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15362__$1,7,ch);
} else
{if((state_val_15363 === 5))
{var state_15362__$1 = state_15362;var statearr_15369_15389 = state_15362__$1;(statearr_15369_15389[2] = null);
(statearr_15369_15389[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 6))
{var inst_15357 = (state_15362[2]);var state_15362__$1 = state_15362;var statearr_15370_15390 = state_15362__$1;(statearr_15370_15390[2] = inst_15357);
(statearr_15370_15390[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 7))
{var inst_15344 = (state_15362[9]);var inst_15344__$1 = (state_15362[2]);var inst_15345 = (inst_15344__$1 == null);var inst_15346 = cljs.core.not.call(null,inst_15345);var state_15362__$1 = (function (){var statearr_15371 = state_15362;(statearr_15371[9] = inst_15344__$1);
return statearr_15371;
})();if(inst_15346)
{var statearr_15372_15391 = state_15362__$1;(statearr_15372_15391[1] = 8);
} else
{var statearr_15373_15392 = state_15362__$1;(statearr_15373_15392[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 8))
{var inst_15344 = (state_15362[9]);var state_15362__$1 = state_15362;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15362__$1,11,out,inst_15344);
} else
{if((state_val_15363 === 9))
{var state_15362__$1 = state_15362;var statearr_15374_15393 = state_15362__$1;(statearr_15374_15393[2] = null);
(statearr_15374_15393[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 10))
{var inst_15354 = (state_15362[2]);var state_15362__$1 = state_15362;var statearr_15375_15394 = state_15362__$1;(statearr_15375_15394[2] = inst_15354);
(statearr_15375_15394[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15363 === 11))
{var inst_15339 = (state_15362[7]);var inst_15349 = (state_15362[2]);var inst_15350 = (inst_15339 + 1);var inst_15339__$1 = inst_15350;var state_15362__$1 = (function (){var statearr_15376 = state_15362;(statearr_15376[10] = inst_15349);
(statearr_15376[7] = inst_15339__$1);
return statearr_15376;
})();var statearr_15377_15395 = state_15362__$1;(statearr_15377_15395[2] = null);
(statearr_15377_15395[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15381 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15381[0] = state_machine__5507__auto__);
(statearr_15381[1] = 1);
return statearr_15381;
});
var state_machine__5507__auto____1 = (function (state_15362){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15362);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15382){if((e15382 instanceof Object))
{var ex__5510__auto__ = e15382;var statearr_15383_15396 = state_15362;(statearr_15383_15396[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15362);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15382;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15397 = state_15362;
state_15362 = G__15397;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15362){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15362);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15384 = f__5522__auto__.call(null);(statearr_15384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15385);
return statearr_15384;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15494 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15469){var state_val_15470 = (state_15469[1]);if((state_val_15470 === 1))
{var inst_15446 = null;var state_15469__$1 = (function (){var statearr_15471 = state_15469;(statearr_15471[7] = inst_15446);
return statearr_15471;
})();var statearr_15472_15495 = state_15469__$1;(statearr_15472_15495[2] = null);
(statearr_15472_15495[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15470 === 2))
{var state_15469__$1 = state_15469;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15469__$1,4,ch);
} else
{if((state_val_15470 === 3))
{var inst_15466 = (state_15469[2]);var inst_15467 = cljs.core.async.close_BANG_.call(null,out);var state_15469__$1 = (function (){var statearr_15473 = state_15469;(statearr_15473[8] = inst_15466);
return statearr_15473;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15469__$1,inst_15467);
} else
{if((state_val_15470 === 4))
{var inst_15449 = (state_15469[9]);var inst_15449__$1 = (state_15469[2]);var inst_15450 = (inst_15449__$1 == null);var inst_15451 = cljs.core.not.call(null,inst_15450);var state_15469__$1 = (function (){var statearr_15474 = state_15469;(statearr_15474[9] = inst_15449__$1);
return statearr_15474;
})();if(inst_15451)
{var statearr_15475_15496 = state_15469__$1;(statearr_15475_15496[1] = 5);
} else
{var statearr_15476_15497 = state_15469__$1;(statearr_15476_15497[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15470 === 5))
{var inst_15449 = (state_15469[9]);var inst_15446 = (state_15469[7]);var inst_15453 = cljs.core._EQ_.call(null,inst_15449,inst_15446);var state_15469__$1 = state_15469;if(inst_15453)
{var statearr_15477_15498 = state_15469__$1;(statearr_15477_15498[1] = 8);
} else
{var statearr_15478_15499 = state_15469__$1;(statearr_15478_15499[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15470 === 6))
{var state_15469__$1 = state_15469;var statearr_15480_15500 = state_15469__$1;(statearr_15480_15500[2] = null);
(statearr_15480_15500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15470 === 7))
{var inst_15464 = (state_15469[2]);var state_15469__$1 = state_15469;var statearr_15481_15501 = state_15469__$1;(statearr_15481_15501[2] = inst_15464);
(statearr_15481_15501[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15470 === 8))
{var inst_15446 = (state_15469[7]);var tmp15479 = inst_15446;var inst_15446__$1 = tmp15479;var state_15469__$1 = (function (){var statearr_15482 = state_15469;(statearr_15482[7] = inst_15446__$1);
return statearr_15482;
})();var statearr_15483_15502 = state_15469__$1;(statearr_15483_15502[2] = null);
(statearr_15483_15502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15470 === 9))
{var inst_15449 = (state_15469[9]);var state_15469__$1 = state_15469;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15469__$1,11,out,inst_15449);
} else
{if((state_val_15470 === 10))
{var inst_15461 = (state_15469[2]);var state_15469__$1 = state_15469;var statearr_15484_15503 = state_15469__$1;(statearr_15484_15503[2] = inst_15461);
(statearr_15484_15503[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15470 === 11))
{var inst_15449 = (state_15469[9]);var inst_15458 = (state_15469[2]);var inst_15446 = inst_15449;var state_15469__$1 = (function (){var statearr_15485 = state_15469;(statearr_15485[10] = inst_15458);
(statearr_15485[7] = inst_15446);
return statearr_15485;
})();var statearr_15486_15504 = state_15469__$1;(statearr_15486_15504[2] = null);
(statearr_15486_15504[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15490 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15490[0] = state_machine__5507__auto__);
(statearr_15490[1] = 1);
return statearr_15490;
});
var state_machine__5507__auto____1 = (function (state_15469){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15469);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15491){if((e15491 instanceof Object))
{var ex__5510__auto__ = e15491;var statearr_15492_15505 = state_15469;(statearr_15492_15505[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15469);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15491;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15506 = state_15469;
state_15469 = G__15506;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15469){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15469);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15493 = f__5522__auto__.call(null);(statearr_15493[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15494);
return statearr_15493;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15641 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15611){var state_val_15612 = (state_15611[1]);if((state_val_15612 === 1))
{var inst_15574 = (new Array(n));var inst_15575 = inst_15574;var inst_15576 = 0;var state_15611__$1 = (function (){var statearr_15613 = state_15611;(statearr_15613[7] = inst_15575);
(statearr_15613[8] = inst_15576);
return statearr_15613;
})();var statearr_15614_15642 = state_15611__$1;(statearr_15614_15642[2] = null);
(statearr_15614_15642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 2))
{var state_15611__$1 = state_15611;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15611__$1,4,ch);
} else
{if((state_val_15612 === 3))
{var inst_15609 = (state_15611[2]);var state_15611__$1 = state_15611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15611__$1,inst_15609);
} else
{if((state_val_15612 === 4))
{var inst_15579 = (state_15611[9]);var inst_15579__$1 = (state_15611[2]);var inst_15580 = (inst_15579__$1 == null);var inst_15581 = cljs.core.not.call(null,inst_15580);var state_15611__$1 = (function (){var statearr_15615 = state_15611;(statearr_15615[9] = inst_15579__$1);
return statearr_15615;
})();if(inst_15581)
{var statearr_15616_15643 = state_15611__$1;(statearr_15616_15643[1] = 5);
} else
{var statearr_15617_15644 = state_15611__$1;(statearr_15617_15644[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 5))
{var inst_15575 = (state_15611[7]);var inst_15576 = (state_15611[8]);var inst_15584 = (state_15611[10]);var inst_15579 = (state_15611[9]);var inst_15583 = (inst_15575[inst_15576] = inst_15579);var inst_15584__$1 = (inst_15576 + 1);var inst_15585 = (inst_15584__$1 < n);var state_15611__$1 = (function (){var statearr_15618 = state_15611;(statearr_15618[10] = inst_15584__$1);
(statearr_15618[11] = inst_15583);
return statearr_15618;
})();if(cljs.core.truth_(inst_15585))
{var statearr_15619_15645 = state_15611__$1;(statearr_15619_15645[1] = 8);
} else
{var statearr_15620_15646 = state_15611__$1;(statearr_15620_15646[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 6))
{var inst_15576 = (state_15611[8]);var inst_15597 = (inst_15576 > 0);var state_15611__$1 = state_15611;if(cljs.core.truth_(inst_15597))
{var statearr_15622_15647 = state_15611__$1;(statearr_15622_15647[1] = 12);
} else
{var statearr_15623_15648 = state_15611__$1;(statearr_15623_15648[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 7))
{var inst_15607 = (state_15611[2]);var state_15611__$1 = state_15611;var statearr_15624_15649 = state_15611__$1;(statearr_15624_15649[2] = inst_15607);
(statearr_15624_15649[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 8))
{var inst_15575 = (state_15611[7]);var inst_15584 = (state_15611[10]);var tmp15621 = inst_15575;var inst_15575__$1 = tmp15621;var inst_15576 = inst_15584;var state_15611__$1 = (function (){var statearr_15625 = state_15611;(statearr_15625[7] = inst_15575__$1);
(statearr_15625[8] = inst_15576);
return statearr_15625;
})();var statearr_15626_15650 = state_15611__$1;(statearr_15626_15650[2] = null);
(statearr_15626_15650[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 9))
{var inst_15575 = (state_15611[7]);var inst_15589 = cljs.core.vec.call(null,inst_15575);var state_15611__$1 = state_15611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15611__$1,11,out,inst_15589);
} else
{if((state_val_15612 === 10))
{var inst_15595 = (state_15611[2]);var state_15611__$1 = state_15611;var statearr_15627_15651 = state_15611__$1;(statearr_15627_15651[2] = inst_15595);
(statearr_15627_15651[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 11))
{var inst_15591 = (state_15611[2]);var inst_15592 = (new Array(n));var inst_15575 = inst_15592;var inst_15576 = 0;var state_15611__$1 = (function (){var statearr_15628 = state_15611;(statearr_15628[7] = inst_15575);
(statearr_15628[8] = inst_15576);
(statearr_15628[12] = inst_15591);
return statearr_15628;
})();var statearr_15629_15652 = state_15611__$1;(statearr_15629_15652[2] = null);
(statearr_15629_15652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 12))
{var inst_15575 = (state_15611[7]);var inst_15599 = cljs.core.vec.call(null,inst_15575);var state_15611__$1 = state_15611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15611__$1,15,out,inst_15599);
} else
{if((state_val_15612 === 13))
{var state_15611__$1 = state_15611;var statearr_15630_15653 = state_15611__$1;(statearr_15630_15653[2] = null);
(statearr_15630_15653[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 14))
{var inst_15604 = (state_15611[2]);var inst_15605 = cljs.core.async.close_BANG_.call(null,out);var state_15611__$1 = (function (){var statearr_15631 = state_15611;(statearr_15631[13] = inst_15604);
return statearr_15631;
})();var statearr_15632_15654 = state_15611__$1;(statearr_15632_15654[2] = inst_15605);
(statearr_15632_15654[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15612 === 15))
{var inst_15601 = (state_15611[2]);var state_15611__$1 = state_15611;var statearr_15633_15655 = state_15611__$1;(statearr_15633_15655[2] = inst_15601);
(statearr_15633_15655[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15637[0] = state_machine__5507__auto__);
(statearr_15637[1] = 1);
return statearr_15637;
});
var state_machine__5507__auto____1 = (function (state_15611){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15611);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15638){if((e15638 instanceof Object))
{var ex__5510__auto__ = e15638;var statearr_15639_15656 = state_15611;(statearr_15639_15656[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15611);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15657 = state_15611;
state_15611 = G__15657;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15611){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15640 = f__5522__auto__.call(null);(statearr_15640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15641);
return statearr_15640;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15800 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15770){var state_val_15771 = (state_15770[1]);if((state_val_15771 === 1))
{var inst_15729 = [];var inst_15730 = inst_15729;var inst_15731 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15770__$1 = (function (){var statearr_15772 = state_15770;(statearr_15772[7] = inst_15730);
(statearr_15772[8] = inst_15731);
return statearr_15772;
})();var statearr_15773_15801 = state_15770__$1;(statearr_15773_15801[2] = null);
(statearr_15773_15801[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 2))
{var state_15770__$1 = state_15770;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15770__$1,4,ch);
} else
{if((state_val_15771 === 3))
{var inst_15768 = (state_15770[2]);var state_15770__$1 = state_15770;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15770__$1,inst_15768);
} else
{if((state_val_15771 === 4))
{var inst_15734 = (state_15770[9]);var inst_15734__$1 = (state_15770[2]);var inst_15735 = (inst_15734__$1 == null);var inst_15736 = cljs.core.not.call(null,inst_15735);var state_15770__$1 = (function (){var statearr_15774 = state_15770;(statearr_15774[9] = inst_15734__$1);
return statearr_15774;
})();if(inst_15736)
{var statearr_15775_15802 = state_15770__$1;(statearr_15775_15802[1] = 5);
} else
{var statearr_15776_15803 = state_15770__$1;(statearr_15776_15803[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 5))
{var inst_15738 = (state_15770[10]);var inst_15734 = (state_15770[9]);var inst_15731 = (state_15770[8]);var inst_15738__$1 = f.call(null,inst_15734);var inst_15739 = cljs.core._EQ_.call(null,inst_15738__$1,inst_15731);var inst_15740 = cljs.core.keyword_identical_QMARK_.call(null,inst_15731,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15741 = (inst_15739) || (inst_15740);var state_15770__$1 = (function (){var statearr_15777 = state_15770;(statearr_15777[10] = inst_15738__$1);
return statearr_15777;
})();if(cljs.core.truth_(inst_15741))
{var statearr_15778_15804 = state_15770__$1;(statearr_15778_15804[1] = 8);
} else
{var statearr_15779_15805 = state_15770__$1;(statearr_15779_15805[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 6))
{var inst_15730 = (state_15770[7]);var inst_15755 = inst_15730.length;var inst_15756 = (inst_15755 > 0);var state_15770__$1 = state_15770;if(cljs.core.truth_(inst_15756))
{var statearr_15781_15806 = state_15770__$1;(statearr_15781_15806[1] = 12);
} else
{var statearr_15782_15807 = state_15770__$1;(statearr_15782_15807[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 7))
{var inst_15766 = (state_15770[2]);var state_15770__$1 = state_15770;var statearr_15783_15808 = state_15770__$1;(statearr_15783_15808[2] = inst_15766);
(statearr_15783_15808[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 8))
{var inst_15730 = (state_15770[7]);var inst_15738 = (state_15770[10]);var inst_15734 = (state_15770[9]);var inst_15743 = inst_15730.push(inst_15734);var tmp15780 = inst_15730;var inst_15730__$1 = tmp15780;var inst_15731 = inst_15738;var state_15770__$1 = (function (){var statearr_15784 = state_15770;(statearr_15784[7] = inst_15730__$1);
(statearr_15784[11] = inst_15743);
(statearr_15784[8] = inst_15731);
return statearr_15784;
})();var statearr_15785_15809 = state_15770__$1;(statearr_15785_15809[2] = null);
(statearr_15785_15809[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 9))
{var inst_15730 = (state_15770[7]);var inst_15746 = cljs.core.vec.call(null,inst_15730);var state_15770__$1 = state_15770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15770__$1,11,out,inst_15746);
} else
{if((state_val_15771 === 10))
{var inst_15753 = (state_15770[2]);var state_15770__$1 = state_15770;var statearr_15786_15810 = state_15770__$1;(statearr_15786_15810[2] = inst_15753);
(statearr_15786_15810[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 11))
{var inst_15738 = (state_15770[10]);var inst_15734 = (state_15770[9]);var inst_15748 = (state_15770[2]);var inst_15749 = [];var inst_15750 = inst_15749.push(inst_15734);var inst_15730 = inst_15749;var inst_15731 = inst_15738;var state_15770__$1 = (function (){var statearr_15787 = state_15770;(statearr_15787[7] = inst_15730);
(statearr_15787[8] = inst_15731);
(statearr_15787[12] = inst_15750);
(statearr_15787[13] = inst_15748);
return statearr_15787;
})();var statearr_15788_15811 = state_15770__$1;(statearr_15788_15811[2] = null);
(statearr_15788_15811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 12))
{var inst_15730 = (state_15770[7]);var inst_15758 = cljs.core.vec.call(null,inst_15730);var state_15770__$1 = state_15770;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15770__$1,15,out,inst_15758);
} else
{if((state_val_15771 === 13))
{var state_15770__$1 = state_15770;var statearr_15789_15812 = state_15770__$1;(statearr_15789_15812[2] = null);
(statearr_15789_15812[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 14))
{var inst_15763 = (state_15770[2]);var inst_15764 = cljs.core.async.close_BANG_.call(null,out);var state_15770__$1 = (function (){var statearr_15790 = state_15770;(statearr_15790[14] = inst_15763);
return statearr_15790;
})();var statearr_15791_15813 = state_15770__$1;(statearr_15791_15813[2] = inst_15764);
(statearr_15791_15813[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15771 === 15))
{var inst_15760 = (state_15770[2]);var state_15770__$1 = state_15770;var statearr_15792_15814 = state_15770__$1;(statearr_15792_15814[2] = inst_15760);
(statearr_15792_15814[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15796 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15796[0] = state_machine__5507__auto__);
(statearr_15796[1] = 1);
return statearr_15796;
});
var state_machine__5507__auto____1 = (function (state_15770){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15770);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15797){if((e15797 instanceof Object))
{var ex__5510__auto__ = e15797;var statearr_15798_15815 = state_15770;(statearr_15798_15815[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15770);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15797;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15816 = state_15770;
state_15770 = G__15816;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15770){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15770);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15799 = f__5522__auto__.call(null);(statearr_15799[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15800);
return statearr_15799;
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