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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13566 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13566 = (function (f,fn_handler,meta13567){
this.f = f;
this.fn_handler = fn_handler;
this.meta13567 = meta13567;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13566.cljs$lang$type = true;
cljs.core.async.t13566.cljs$lang$ctorStr = "cljs.core.async/t13566";
cljs.core.async.t13566.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13566");
});
cljs.core.async.t13566.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13566.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13566.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13566.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13568){var self__ = this;
var _13568__$1 = this;return self__.meta13567;
});
cljs.core.async.t13566.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13568,meta13567__$1){var self__ = this;
var _13568__$1 = this;return (new cljs.core.async.t13566(self__.f,self__.fn_handler,meta13567__$1));
});
cljs.core.async.__GT_t13566 = (function __GT_t13566(f__$1,fn_handler__$1,meta13567){return (new cljs.core.async.t13566(f__$1,fn_handler__$1,meta13567));
});
}
return (new cljs.core.async.t13566(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13570 = buff;if(G__13570)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13570.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13570.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13570);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13570);
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
{var val_13571 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13571);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13571);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13572 = n;var x_13573 = 0;while(true){
if((x_13573 < n__4248__auto___13572))
{(a[x_13573] = 0);
{
var G__13574 = (x_13573 + 1);
x_13573 = G__13574;
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
var G__13575 = (i + 1);
i = G__13575;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13579 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13579 = (function (flag,alt_flag,meta13580){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13580 = meta13580;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13579.cljs$lang$type = true;
cljs.core.async.t13579.cljs$lang$ctorStr = "cljs.core.async/t13579";
cljs.core.async.t13579.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13579");
});
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13579.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13579.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13581){var self__ = this;
var _13581__$1 = this;return self__.meta13580;
});
cljs.core.async.t13579.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13581,meta13580__$1){var self__ = this;
var _13581__$1 = this;return (new cljs.core.async.t13579(self__.flag,self__.alt_flag,meta13580__$1));
});
cljs.core.async.__GT_t13579 = (function __GT_t13579(flag__$1,alt_flag__$1,meta13580){return (new cljs.core.async.t13579(flag__$1,alt_flag__$1,meta13580));
});
}
return (new cljs.core.async.t13579(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13585 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13585 = (function (cb,flag,alt_handler,meta13586){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13586 = meta13586;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13585.cljs$lang$type = true;
cljs.core.async.t13585.cljs$lang$ctorStr = "cljs.core.async/t13585";
cljs.core.async.t13585.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13585");
});
cljs.core.async.t13585.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13585.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13585.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13585.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13587){var self__ = this;
var _13587__$1 = this;return self__.meta13586;
});
cljs.core.async.t13585.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13587,meta13586__$1){var self__ = this;
var _13587__$1 = this;return (new cljs.core.async.t13585(self__.cb,self__.flag,self__.alt_handler,meta13586__$1));
});
cljs.core.async.__GT_t13585 = (function __GT_t13585(cb__$1,flag__$1,alt_handler__$1,meta13586){return (new cljs.core.async.t13585(cb__$1,flag__$1,alt_handler__$1,meta13586));
});
}
return (new cljs.core.async.t13585(cb,flag,alt_handler,null));
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
return (function (p1__13588_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13588_SHARP_,port], null));
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
var G__13589 = (i + 1);
i = G__13589;
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
var alts_BANG___delegate = function (ports,p__13590){var map__13592 = p__13590;var map__13592__$1 = ((cljs.core.seq_QMARK_.call(null,map__13592))?cljs.core.apply.call(null,cljs.core.hash_map,map__13592):map__13592);var opts = map__13592__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13590 = null;if (arguments.length > 1) {
  p__13590 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13590);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13593){
var ports = cljs.core.first(arglist__13593);
var p__13590 = cljs.core.rest(arglist__13593);
return alts_BANG___delegate(ports,p__13590);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13601 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13601 = (function (ch,f,map_LT_,meta13602){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13602 = meta13602;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13601.cljs$lang$type = true;
cljs.core.async.t13601.cljs$lang$ctorStr = "cljs.core.async/t13601";
cljs.core.async.t13601.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13601");
});
cljs.core.async.t13601.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13601.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13604 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13604 = (function (fn1,_,meta13602,ch,f,map_LT_,meta13605){
this.fn1 = fn1;
this._ = _;
this.meta13602 = meta13602;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13605 = meta13605;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13604.cljs$lang$type = true;
cljs.core.async.t13604.cljs$lang$ctorStr = "cljs.core.async/t13604";
cljs.core.async.t13604.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13604");
});
cljs.core.async.t13604.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13604.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13604.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13604.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13594_SHARP_){return f1.call(null,(((p1__13594_SHARP_ == null))?null:self__.f.call(null,p1__13594_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13604.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13606){var self__ = this;
var _13606__$1 = this;return self__.meta13605;
});
cljs.core.async.t13604.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13606,meta13605__$1){var self__ = this;
var _13606__$1 = this;return (new cljs.core.async.t13604(self__.fn1,self__._,self__.meta13602,self__.ch,self__.f,self__.map_LT_,meta13605__$1));
});
cljs.core.async.__GT_t13604 = (function __GT_t13604(fn1__$1,___$2,meta13602__$1,ch__$2,f__$2,map_LT___$2,meta13605){return (new cljs.core.async.t13604(fn1__$1,___$2,meta13602__$1,ch__$2,f__$2,map_LT___$2,meta13605));
});
}
return (new cljs.core.async.t13604(fn1,___$1,self__.meta13602,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13601.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13603){var self__ = this;
var _13603__$1 = this;return self__.meta13602;
});
cljs.core.async.t13601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13603,meta13602__$1){var self__ = this;
var _13603__$1 = this;return (new cljs.core.async.t13601(self__.ch,self__.f,self__.map_LT_,meta13602__$1));
});
cljs.core.async.__GT_t13601 = (function __GT_t13601(ch__$1,f__$1,map_LT___$1,meta13602){return (new cljs.core.async.t13601(ch__$1,f__$1,map_LT___$1,meta13602));
});
}
return (new cljs.core.async.t13601(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13610 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13610 = (function (ch,f,map_GT_,meta13611){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13611 = meta13611;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13610.cljs$lang$type = true;
cljs.core.async.t13610.cljs$lang$ctorStr = "cljs.core.async/t13610";
cljs.core.async.t13610.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13610");
});
cljs.core.async.t13610.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13610.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13610.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13610.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13610.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13610.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13610.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13612){var self__ = this;
var _13612__$1 = this;return self__.meta13611;
});
cljs.core.async.t13610.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13612,meta13611__$1){var self__ = this;
var _13612__$1 = this;return (new cljs.core.async.t13610(self__.ch,self__.f,self__.map_GT_,meta13611__$1));
});
cljs.core.async.__GT_t13610 = (function __GT_t13610(ch__$1,f__$1,map_GT___$1,meta13611){return (new cljs.core.async.t13610(ch__$1,f__$1,map_GT___$1,meta13611));
});
}
return (new cljs.core.async.t13610(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13616 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13616 = (function (ch,p,filter_GT_,meta13617){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13617 = meta13617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13616.cljs$lang$type = true;
cljs.core.async.t13616.cljs$lang$ctorStr = "cljs.core.async/t13616";
cljs.core.async.t13616.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13616");
});
cljs.core.async.t13616.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13616.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13616.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13618){var self__ = this;
var _13618__$1 = this;return self__.meta13617;
});
cljs.core.async.t13616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13618,meta13617__$1){var self__ = this;
var _13618__$1 = this;return (new cljs.core.async.t13616(self__.ch,self__.p,self__.filter_GT_,meta13617__$1));
});
cljs.core.async.__GT_t13616 = (function __GT_t13616(ch__$1,p__$1,filter_GT___$1,meta13617){return (new cljs.core.async.t13616(ch__$1,p__$1,filter_GT___$1,meta13617));
});
}
return (new cljs.core.async.t13616(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13701 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13680){var state_val_13681 = (state_13680[1]);if((state_val_13681 === 1))
{var state_13680__$1 = state_13680;var statearr_13682_13702 = state_13680__$1;(statearr_13682_13702[2] = null);
(statearr_13682_13702[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 2))
{var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13680__$1,4,ch);
} else
{if((state_val_13681 === 3))
{var inst_13678 = (state_13680[2]);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13680__$1,inst_13678);
} else
{if((state_val_13681 === 4))
{var inst_13662 = (state_13680[7]);var inst_13662__$1 = (state_13680[2]);var inst_13663 = (inst_13662__$1 == null);var state_13680__$1 = (function (){var statearr_13683 = state_13680;(statearr_13683[7] = inst_13662__$1);
return statearr_13683;
})();if(cljs.core.truth_(inst_13663))
{var statearr_13684_13703 = state_13680__$1;(statearr_13684_13703[1] = 5);
} else
{var statearr_13685_13704 = state_13680__$1;(statearr_13685_13704[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 5))
{var inst_13665 = cljs.core.async.close_BANG_.call(null,out);var state_13680__$1 = state_13680;var statearr_13686_13705 = state_13680__$1;(statearr_13686_13705[2] = inst_13665);
(statearr_13686_13705[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 6))
{var inst_13662 = (state_13680[7]);var inst_13667 = p.call(null,inst_13662);var state_13680__$1 = state_13680;if(cljs.core.truth_(inst_13667))
{var statearr_13687_13706 = state_13680__$1;(statearr_13687_13706[1] = 8);
} else
{var statearr_13688_13707 = state_13680__$1;(statearr_13688_13707[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 7))
{var inst_13676 = (state_13680[2]);var state_13680__$1 = state_13680;var statearr_13689_13708 = state_13680__$1;(statearr_13689_13708[2] = inst_13676);
(statearr_13689_13708[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 8))
{var inst_13662 = (state_13680[7]);var state_13680__$1 = state_13680;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13680__$1,11,out,inst_13662);
} else
{if((state_val_13681 === 9))
{var state_13680__$1 = state_13680;var statearr_13690_13709 = state_13680__$1;(statearr_13690_13709[2] = null);
(statearr_13690_13709[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 10))
{var inst_13673 = (state_13680[2]);var state_13680__$1 = (function (){var statearr_13691 = state_13680;(statearr_13691[8] = inst_13673);
return statearr_13691;
})();var statearr_13692_13710 = state_13680__$1;(statearr_13692_13710[2] = null);
(statearr_13692_13710[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13681 === 11))
{var inst_13670 = (state_13680[2]);var state_13680__$1 = state_13680;var statearr_13693_13711 = state_13680__$1;(statearr_13693_13711[2] = inst_13670);
(statearr_13693_13711[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13697 = [null,null,null,null,null,null,null,null,null];(statearr_13697[0] = state_machine__5507__auto__);
(statearr_13697[1] = 1);
return statearr_13697;
});
var state_machine__5507__auto____1 = (function (state_13680){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13680);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13698){if((e13698 instanceof Object))
{var ex__5510__auto__ = e13698;var statearr_13699_13712 = state_13680;(statearr_13699_13712[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13680);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13698;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13713 = state_13680;
state_13680 = G__13713;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13680){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13700 = f__5522__auto__.call(null);(statearr_13700[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13701);
return statearr_13700;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13865){var state_val_13866 = (state_13865[1]);if((state_val_13866 === 1))
{var state_13865__$1 = state_13865;var statearr_13867_13904 = state_13865__$1;(statearr_13867_13904[2] = null);
(statearr_13867_13904[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 2))
{var state_13865__$1 = state_13865;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13865__$1,4,in$);
} else
{if((state_val_13866 === 3))
{var inst_13863 = (state_13865[2]);var state_13865__$1 = state_13865;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13865__$1,inst_13863);
} else
{if((state_val_13866 === 4))
{var inst_13811 = (state_13865[7]);var inst_13811__$1 = (state_13865[2]);var inst_13812 = (inst_13811__$1 == null);var state_13865__$1 = (function (){var statearr_13868 = state_13865;(statearr_13868[7] = inst_13811__$1);
return statearr_13868;
})();if(cljs.core.truth_(inst_13812))
{var statearr_13869_13905 = state_13865__$1;(statearr_13869_13905[1] = 5);
} else
{var statearr_13870_13906 = state_13865__$1;(statearr_13870_13906[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 5))
{var inst_13814 = cljs.core.async.close_BANG_.call(null,out);var state_13865__$1 = state_13865;var statearr_13871_13907 = state_13865__$1;(statearr_13871_13907[2] = inst_13814);
(statearr_13871_13907[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 6))
{var inst_13811 = (state_13865[7]);var inst_13816 = f.call(null,inst_13811);var inst_13821 = cljs.core.seq.call(null,inst_13816);var inst_13822 = inst_13821;var inst_13823 = null;var inst_13824 = 0;var inst_13825 = 0;var state_13865__$1 = (function (){var statearr_13872 = state_13865;(statearr_13872[8] = inst_13822);
(statearr_13872[9] = inst_13823);
(statearr_13872[10] = inst_13824);
(statearr_13872[11] = inst_13825);
return statearr_13872;
})();var statearr_13873_13908 = state_13865__$1;(statearr_13873_13908[2] = null);
(statearr_13873_13908[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 7))
{var inst_13861 = (state_13865[2]);var state_13865__$1 = state_13865;var statearr_13874_13909 = state_13865__$1;(statearr_13874_13909[2] = inst_13861);
(statearr_13874_13909[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 8))
{var inst_13824 = (state_13865[10]);var inst_13825 = (state_13865[11]);var inst_13827 = (inst_13825 < inst_13824);var inst_13828 = inst_13827;var state_13865__$1 = state_13865;if(cljs.core.truth_(inst_13828))
{var statearr_13875_13910 = state_13865__$1;(statearr_13875_13910[1] = 10);
} else
{var statearr_13876_13911 = state_13865__$1;(statearr_13876_13911[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 9))
{var inst_13858 = (state_13865[2]);var state_13865__$1 = (function (){var statearr_13877 = state_13865;(statearr_13877[12] = inst_13858);
return statearr_13877;
})();var statearr_13878_13912 = state_13865__$1;(statearr_13878_13912[2] = null);
(statearr_13878_13912[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 10))
{var inst_13823 = (state_13865[9]);var inst_13825 = (state_13865[11]);var inst_13830 = cljs.core._nth.call(null,inst_13823,inst_13825);var state_13865__$1 = state_13865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13865__$1,13,out,inst_13830);
} else
{if((state_val_13866 === 11))
{var inst_13822 = (state_13865[8]);var inst_13836 = (state_13865[13]);var inst_13836__$1 = cljs.core.seq.call(null,inst_13822);var state_13865__$1 = (function (){var statearr_13882 = state_13865;(statearr_13882[13] = inst_13836__$1);
return statearr_13882;
})();if(inst_13836__$1)
{var statearr_13883_13913 = state_13865__$1;(statearr_13883_13913[1] = 14);
} else
{var statearr_13884_13914 = state_13865__$1;(statearr_13884_13914[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 12))
{var inst_13856 = (state_13865[2]);var state_13865__$1 = state_13865;var statearr_13885_13915 = state_13865__$1;(statearr_13885_13915[2] = inst_13856);
(statearr_13885_13915[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 13))
{var inst_13822 = (state_13865[8]);var inst_13823 = (state_13865[9]);var inst_13824 = (state_13865[10]);var inst_13825 = (state_13865[11]);var inst_13832 = (state_13865[2]);var inst_13833 = (inst_13825 + 1);var tmp13879 = inst_13822;var tmp13880 = inst_13823;var tmp13881 = inst_13824;var inst_13822__$1 = tmp13879;var inst_13823__$1 = tmp13880;var inst_13824__$1 = tmp13881;var inst_13825__$1 = inst_13833;var state_13865__$1 = (function (){var statearr_13886 = state_13865;(statearr_13886[14] = inst_13832);
(statearr_13886[8] = inst_13822__$1);
(statearr_13886[9] = inst_13823__$1);
(statearr_13886[10] = inst_13824__$1);
(statearr_13886[11] = inst_13825__$1);
return statearr_13886;
})();var statearr_13887_13916 = state_13865__$1;(statearr_13887_13916[2] = null);
(statearr_13887_13916[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 14))
{var inst_13836 = (state_13865[13]);var inst_13838 = cljs.core.chunked_seq_QMARK_.call(null,inst_13836);var state_13865__$1 = state_13865;if(inst_13838)
{var statearr_13888_13917 = state_13865__$1;(statearr_13888_13917[1] = 17);
} else
{var statearr_13889_13918 = state_13865__$1;(statearr_13889_13918[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 15))
{var state_13865__$1 = state_13865;var statearr_13890_13919 = state_13865__$1;(statearr_13890_13919[2] = null);
(statearr_13890_13919[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 16))
{var inst_13854 = (state_13865[2]);var state_13865__$1 = state_13865;var statearr_13891_13920 = state_13865__$1;(statearr_13891_13920[2] = inst_13854);
(statearr_13891_13920[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 17))
{var inst_13836 = (state_13865[13]);var inst_13840 = cljs.core.chunk_first.call(null,inst_13836);var inst_13841 = cljs.core.chunk_rest.call(null,inst_13836);var inst_13842 = cljs.core.count.call(null,inst_13840);var inst_13822 = inst_13841;var inst_13823 = inst_13840;var inst_13824 = inst_13842;var inst_13825 = 0;var state_13865__$1 = (function (){var statearr_13892 = state_13865;(statearr_13892[8] = inst_13822);
(statearr_13892[9] = inst_13823);
(statearr_13892[10] = inst_13824);
(statearr_13892[11] = inst_13825);
return statearr_13892;
})();var statearr_13893_13921 = state_13865__$1;(statearr_13893_13921[2] = null);
(statearr_13893_13921[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 18))
{var inst_13836 = (state_13865[13]);var inst_13845 = cljs.core.first.call(null,inst_13836);var state_13865__$1 = state_13865;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13865__$1,20,out,inst_13845);
} else
{if((state_val_13866 === 19))
{var inst_13851 = (state_13865[2]);var state_13865__$1 = state_13865;var statearr_13894_13922 = state_13865__$1;(statearr_13894_13922[2] = inst_13851);
(statearr_13894_13922[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13866 === 20))
{var inst_13836 = (state_13865[13]);var inst_13847 = (state_13865[2]);var inst_13848 = cljs.core.next.call(null,inst_13836);var inst_13822 = inst_13848;var inst_13823 = null;var inst_13824 = 0;var inst_13825 = 0;var state_13865__$1 = (function (){var statearr_13895 = state_13865;(statearr_13895[15] = inst_13847);
(statearr_13895[8] = inst_13822);
(statearr_13895[9] = inst_13823);
(statearr_13895[10] = inst_13824);
(statearr_13895[11] = inst_13825);
return statearr_13895;
})();var statearr_13896_13923 = state_13865__$1;(statearr_13896_13923[2] = null);
(statearr_13896_13923[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13900 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13900[0] = state_machine__5507__auto__);
(statearr_13900[1] = 1);
return statearr_13900;
});
var state_machine__5507__auto____1 = (function (state_13865){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13865);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13901){if((e13901 instanceof Object))
{var ex__5510__auto__ = e13901;var statearr_13902_13924 = state_13865;(statearr_13902_13924[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13865);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13901;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13925 = state_13865;
state_13865 = G__13925;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13865){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13865);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13903 = f__5522__auto__.call(null);(statearr_13903[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13903;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14006 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13985){var state_val_13986 = (state_13985[1]);if((state_val_13986 === 1))
{var state_13985__$1 = state_13985;var statearr_13987_14007 = state_13985__$1;(statearr_13987_14007[2] = null);
(statearr_13987_14007[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 2))
{var state_13985__$1 = state_13985;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13985__$1,4,from);
} else
{if((state_val_13986 === 3))
{var inst_13983 = (state_13985[2]);var state_13985__$1 = state_13985;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13985__$1,inst_13983);
} else
{if((state_val_13986 === 4))
{var inst_13968 = (state_13985[7]);var inst_13968__$1 = (state_13985[2]);var inst_13969 = (inst_13968__$1 == null);var state_13985__$1 = (function (){var statearr_13988 = state_13985;(statearr_13988[7] = inst_13968__$1);
return statearr_13988;
})();if(cljs.core.truth_(inst_13969))
{var statearr_13989_14008 = state_13985__$1;(statearr_13989_14008[1] = 5);
} else
{var statearr_13990_14009 = state_13985__$1;(statearr_13990_14009[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 5))
{var state_13985__$1 = state_13985;if(cljs.core.truth_(close_QMARK_))
{var statearr_13991_14010 = state_13985__$1;(statearr_13991_14010[1] = 8);
} else
{var statearr_13992_14011 = state_13985__$1;(statearr_13992_14011[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 6))
{var inst_13968 = (state_13985[7]);var state_13985__$1 = state_13985;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13985__$1,11,to,inst_13968);
} else
{if((state_val_13986 === 7))
{var inst_13981 = (state_13985[2]);var state_13985__$1 = state_13985;var statearr_13993_14012 = state_13985__$1;(statearr_13993_14012[2] = inst_13981);
(statearr_13993_14012[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 8))
{var inst_13972 = cljs.core.async.close_BANG_.call(null,to);var state_13985__$1 = state_13985;var statearr_13994_14013 = state_13985__$1;(statearr_13994_14013[2] = inst_13972);
(statearr_13994_14013[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 9))
{var state_13985__$1 = state_13985;var statearr_13995_14014 = state_13985__$1;(statearr_13995_14014[2] = null);
(statearr_13995_14014[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 10))
{var inst_13975 = (state_13985[2]);var state_13985__$1 = state_13985;var statearr_13996_14015 = state_13985__$1;(statearr_13996_14015[2] = inst_13975);
(statearr_13996_14015[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13986 === 11))
{var inst_13978 = (state_13985[2]);var state_13985__$1 = (function (){var statearr_13997 = state_13985;(statearr_13997[8] = inst_13978);
return statearr_13997;
})();var statearr_13998_14016 = state_13985__$1;(statearr_13998_14016[2] = null);
(statearr_13998_14016[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14002 = [null,null,null,null,null,null,null,null,null];(statearr_14002[0] = state_machine__5507__auto__);
(statearr_14002[1] = 1);
return statearr_14002;
});
var state_machine__5507__auto____1 = (function (state_13985){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13985);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14003){if((e14003 instanceof Object))
{var ex__5510__auto__ = e14003;var statearr_14004_14017 = state_13985;(statearr_14004_14017[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13985);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14003;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14018 = state_13985;
state_13985 = G__14018;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13985){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14005 = f__5522__auto__.call(null);(statearr_14005[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14006);
return statearr_14005;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14105 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14083){var state_val_14084 = (state_14083[1]);if((state_val_14084 === 1))
{var state_14083__$1 = state_14083;var statearr_14085_14106 = state_14083__$1;(statearr_14085_14106[2] = null);
(statearr_14085_14106[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14084 === 2))
{var state_14083__$1 = state_14083;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14083__$1,4,ch);
} else
{if((state_val_14084 === 3))
{var inst_14081 = (state_14083[2]);var state_14083__$1 = state_14083;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14083__$1,inst_14081);
} else
{if((state_val_14084 === 4))
{var inst_14064 = (state_14083[7]);var inst_14064__$1 = (state_14083[2]);var inst_14065 = (inst_14064__$1 == null);var state_14083__$1 = (function (){var statearr_14086 = state_14083;(statearr_14086[7] = inst_14064__$1);
return statearr_14086;
})();if(cljs.core.truth_(inst_14065))
{var statearr_14087_14107 = state_14083__$1;(statearr_14087_14107[1] = 5);
} else
{var statearr_14088_14108 = state_14083__$1;(statearr_14088_14108[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14084 === 5))
{var inst_14067 = cljs.core.async.close_BANG_.call(null,tc);var inst_14068 = cljs.core.async.close_BANG_.call(null,fc);var state_14083__$1 = (function (){var statearr_14089 = state_14083;(statearr_14089[8] = inst_14067);
return statearr_14089;
})();var statearr_14090_14109 = state_14083__$1;(statearr_14090_14109[2] = inst_14068);
(statearr_14090_14109[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14084 === 6))
{var inst_14064 = (state_14083[7]);var inst_14070 = p.call(null,inst_14064);var state_14083__$1 = state_14083;if(cljs.core.truth_(inst_14070))
{var statearr_14091_14110 = state_14083__$1;(statearr_14091_14110[1] = 9);
} else
{var statearr_14092_14111 = state_14083__$1;(statearr_14092_14111[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14084 === 7))
{var inst_14079 = (state_14083[2]);var state_14083__$1 = state_14083;var statearr_14093_14112 = state_14083__$1;(statearr_14093_14112[2] = inst_14079);
(statearr_14093_14112[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14084 === 8))
{var inst_14076 = (state_14083[2]);var state_14083__$1 = (function (){var statearr_14094 = state_14083;(statearr_14094[9] = inst_14076);
return statearr_14094;
})();var statearr_14095_14113 = state_14083__$1;(statearr_14095_14113[2] = null);
(statearr_14095_14113[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14084 === 9))
{var state_14083__$1 = state_14083;var statearr_14096_14114 = state_14083__$1;(statearr_14096_14114[2] = tc);
(statearr_14096_14114[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14084 === 10))
{var state_14083__$1 = state_14083;var statearr_14097_14115 = state_14083__$1;(statearr_14097_14115[2] = fc);
(statearr_14097_14115[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14084 === 11))
{var inst_14064 = (state_14083[7]);var inst_14074 = (state_14083[2]);var state_14083__$1 = state_14083;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14083__$1,8,inst_14074,inst_14064);
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
var state_machine__5507__auto____0 = (function (){var statearr_14101 = [null,null,null,null,null,null,null,null,null,null];(statearr_14101[0] = state_machine__5507__auto__);
(statearr_14101[1] = 1);
return statearr_14101;
});
var state_machine__5507__auto____1 = (function (state_14083){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14083);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14102){if((e14102 instanceof Object))
{var ex__5510__auto__ = e14102;var statearr_14103_14116 = state_14083;(statearr_14103_14116[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14083);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14102;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14117 = state_14083;
state_14083 = G__14117;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14083){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14083);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14104 = f__5522__auto__.call(null);(statearr_14104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14105);
return statearr_14104;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14164){var state_val_14165 = (state_14164[1]);if((state_val_14165 === 7))
{var inst_14160 = (state_14164[2]);var state_14164__$1 = state_14164;var statearr_14166_14182 = state_14164__$1;(statearr_14166_14182[2] = inst_14160);
(statearr_14166_14182[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14165 === 6))
{var inst_14150 = (state_14164[7]);var inst_14153 = (state_14164[8]);var inst_14157 = f.call(null,inst_14150,inst_14153);var inst_14150__$1 = inst_14157;var state_14164__$1 = (function (){var statearr_14167 = state_14164;(statearr_14167[7] = inst_14150__$1);
return statearr_14167;
})();var statearr_14168_14183 = state_14164__$1;(statearr_14168_14183[2] = null);
(statearr_14168_14183[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14165 === 5))
{var inst_14150 = (state_14164[7]);var state_14164__$1 = state_14164;var statearr_14169_14184 = state_14164__$1;(statearr_14169_14184[2] = inst_14150);
(statearr_14169_14184[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14165 === 4))
{var inst_14153 = (state_14164[8]);var inst_14153__$1 = (state_14164[2]);var inst_14154 = (inst_14153__$1 == null);var state_14164__$1 = (function (){var statearr_14170 = state_14164;(statearr_14170[8] = inst_14153__$1);
return statearr_14170;
})();if(cljs.core.truth_(inst_14154))
{var statearr_14171_14185 = state_14164__$1;(statearr_14171_14185[1] = 5);
} else
{var statearr_14172_14186 = state_14164__$1;(statearr_14172_14186[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14165 === 3))
{var inst_14162 = (state_14164[2]);var state_14164__$1 = state_14164;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14164__$1,inst_14162);
} else
{if((state_val_14165 === 2))
{var state_14164__$1 = state_14164;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14164__$1,4,ch);
} else
{if((state_val_14165 === 1))
{var inst_14150 = init;var state_14164__$1 = (function (){var statearr_14173 = state_14164;(statearr_14173[7] = inst_14150);
return statearr_14173;
})();var statearr_14174_14187 = state_14164__$1;(statearr_14174_14187[2] = null);
(statearr_14174_14187[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14178 = [null,null,null,null,null,null,null,null,null];(statearr_14178[0] = state_machine__5507__auto__);
(statearr_14178[1] = 1);
return statearr_14178;
});
var state_machine__5507__auto____1 = (function (state_14164){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14164);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14179){if((e14179 instanceof Object))
{var ex__5510__auto__ = e14179;var statearr_14180_14188 = state_14164;(statearr_14180_14188[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14164);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14179;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14189 = state_14164;
state_14164 = G__14189;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14164){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14181 = f__5522__auto__.call(null);(statearr_14181[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14181;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14251){var state_val_14252 = (state_14251[1]);if((state_val_14252 === 1))
{var inst_14231 = cljs.core.seq.call(null,coll);var inst_14232 = inst_14231;var state_14251__$1 = (function (){var statearr_14253 = state_14251;(statearr_14253[7] = inst_14232);
return statearr_14253;
})();var statearr_14254_14272 = state_14251__$1;(statearr_14254_14272[2] = null);
(statearr_14254_14272[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 2))
{var inst_14232 = (state_14251[7]);var state_14251__$1 = state_14251;if(cljs.core.truth_(inst_14232))
{var statearr_14255_14273 = state_14251__$1;(statearr_14255_14273[1] = 4);
} else
{var statearr_14256_14274 = state_14251__$1;(statearr_14256_14274[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 3))
{var inst_14249 = (state_14251[2]);var state_14251__$1 = state_14251;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14251__$1,inst_14249);
} else
{if((state_val_14252 === 4))
{var inst_14232 = (state_14251[7]);var inst_14235 = cljs.core.first.call(null,inst_14232);var state_14251__$1 = state_14251;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14251__$1,7,ch,inst_14235);
} else
{if((state_val_14252 === 5))
{var state_14251__$1 = state_14251;if(cljs.core.truth_(close_QMARK_))
{var statearr_14257_14275 = state_14251__$1;(statearr_14257_14275[1] = 8);
} else
{var statearr_14258_14276 = state_14251__$1;(statearr_14258_14276[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 6))
{var inst_14247 = (state_14251[2]);var state_14251__$1 = state_14251;var statearr_14259_14277 = state_14251__$1;(statearr_14259_14277[2] = inst_14247);
(statearr_14259_14277[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 7))
{var inst_14232 = (state_14251[7]);var inst_14237 = (state_14251[2]);var inst_14238 = cljs.core.next.call(null,inst_14232);var inst_14232__$1 = inst_14238;var state_14251__$1 = (function (){var statearr_14260 = state_14251;(statearr_14260[8] = inst_14237);
(statearr_14260[7] = inst_14232__$1);
return statearr_14260;
})();var statearr_14261_14278 = state_14251__$1;(statearr_14261_14278[2] = null);
(statearr_14261_14278[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 8))
{var inst_14242 = cljs.core.async.close_BANG_.call(null,ch);var state_14251__$1 = state_14251;var statearr_14262_14279 = state_14251__$1;(statearr_14262_14279[2] = inst_14242);
(statearr_14262_14279[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 9))
{var state_14251__$1 = state_14251;var statearr_14263_14280 = state_14251__$1;(statearr_14263_14280[2] = null);
(statearr_14263_14280[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14252 === 10))
{var inst_14245 = (state_14251[2]);var state_14251__$1 = state_14251;var statearr_14264_14281 = state_14251__$1;(statearr_14264_14281[2] = inst_14245);
(statearr_14264_14281[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14268 = [null,null,null,null,null,null,null,null,null];(statearr_14268[0] = state_machine__5507__auto__);
(statearr_14268[1] = 1);
return statearr_14268;
});
var state_machine__5507__auto____1 = (function (state_14251){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14251);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14269){if((e14269 instanceof Object))
{var ex__5510__auto__ = e14269;var statearr_14270_14282 = state_14251;(statearr_14270_14282[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14251);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14269;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14283 = state_14251;
state_14251 = G__14283;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14251){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14271 = f__5522__auto__.call(null);(statearr_14271[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14271;
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
cljs.core.async.Mux = (function (){var obj14285 = {};return obj14285;
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
cljs.core.async.Mult = (function (){var obj14287 = {};return obj14287;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14511 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14511 = (function (cs,ch,mult,meta14512){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14512 = meta14512;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14511.cljs$lang$type = true;
cljs.core.async.t14511.cljs$lang$ctorStr = "cljs.core.async/t14511";
cljs.core.async.t14511.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14511");
});})(cs))
;
cljs.core.async.t14511.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14511.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14511.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14511.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14511.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14511.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14513){var self__ = this;
var _14513__$1 = this;return self__.meta14512;
});})(cs))
;
cljs.core.async.t14511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14513,meta14512__$1){var self__ = this;
var _14513__$1 = this;return (new cljs.core.async.t14511(self__.cs,self__.ch,self__.mult,meta14512__$1));
});})(cs))
;
cljs.core.async.__GT_t14511 = ((function (cs){
return (function __GT_t14511(cs__$1,ch__$1,mult__$1,meta14512){return (new cljs.core.async.t14511(cs__$1,ch__$1,mult__$1,meta14512));
});})(cs))
;
}
return (new cljs.core.async.t14511(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14734 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14648){var state_val_14649 = (state_14648[1]);if((state_val_14649 === 32))
{var inst_14516 = (state_14648[7]);var inst_14592 = (state_14648[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14648,31,Object,null,30);var inst_14599 = cljs.core.async.put_BANG_.call(null,inst_14592,inst_14516,done);var state_14648__$1 = state_14648;var statearr_14650_14735 = state_14648__$1;(statearr_14650_14735[2] = inst_14599);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14648__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 1))
{var state_14648__$1 = state_14648;var statearr_14651_14736 = state_14648__$1;(statearr_14651_14736[2] = null);
(statearr_14651_14736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 33))
{var inst_14605 = (state_14648[9]);var inst_14607 = cljs.core.chunked_seq_QMARK_.call(null,inst_14605);var state_14648__$1 = state_14648;if(inst_14607)
{var statearr_14652_14737 = state_14648__$1;(statearr_14652_14737[1] = 36);
} else
{var statearr_14653_14738 = state_14648__$1;(statearr_14653_14738[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 2))
{var state_14648__$1 = state_14648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14648__$1,4,ch);
} else
{if((state_val_14649 === 34))
{var state_14648__$1 = state_14648;var statearr_14654_14739 = state_14648__$1;(statearr_14654_14739[2] = null);
(statearr_14654_14739[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 3))
{var inst_14646 = (state_14648[2]);var state_14648__$1 = state_14648;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14648__$1,inst_14646);
} else
{if((state_val_14649 === 35))
{var inst_14630 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14655_14740 = state_14648__$1;(statearr_14655_14740[2] = inst_14630);
(statearr_14655_14740[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 4))
{var inst_14516 = (state_14648[7]);var inst_14516__$1 = (state_14648[2]);var inst_14517 = (inst_14516__$1 == null);var state_14648__$1 = (function (){var statearr_14656 = state_14648;(statearr_14656[7] = inst_14516__$1);
return statearr_14656;
})();if(cljs.core.truth_(inst_14517))
{var statearr_14657_14741 = state_14648__$1;(statearr_14657_14741[1] = 5);
} else
{var statearr_14658_14742 = state_14648__$1;(statearr_14658_14742[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 36))
{var inst_14605 = (state_14648[9]);var inst_14609 = cljs.core.chunk_first.call(null,inst_14605);var inst_14610 = cljs.core.chunk_rest.call(null,inst_14605);var inst_14611 = cljs.core.count.call(null,inst_14609);var inst_14584 = inst_14610;var inst_14585 = inst_14609;var inst_14586 = inst_14611;var inst_14587 = 0;var state_14648__$1 = (function (){var statearr_14659 = state_14648;(statearr_14659[10] = inst_14585);
(statearr_14659[11] = inst_14586);
(statearr_14659[12] = inst_14584);
(statearr_14659[13] = inst_14587);
return statearr_14659;
})();var statearr_14660_14743 = state_14648__$1;(statearr_14660_14743[2] = null);
(statearr_14660_14743[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 5))
{var inst_14523 = cljs.core.deref.call(null,cs);var inst_14524 = cljs.core.seq.call(null,inst_14523);var inst_14525 = inst_14524;var inst_14526 = null;var inst_14527 = 0;var inst_14528 = 0;var state_14648__$1 = (function (){var statearr_14661 = state_14648;(statearr_14661[14] = inst_14525);
(statearr_14661[15] = inst_14526);
(statearr_14661[16] = inst_14527);
(statearr_14661[17] = inst_14528);
return statearr_14661;
})();var statearr_14662_14744 = state_14648__$1;(statearr_14662_14744[2] = null);
(statearr_14662_14744[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 37))
{var inst_14605 = (state_14648[9]);var inst_14614 = cljs.core.first.call(null,inst_14605);var state_14648__$1 = (function (){var statearr_14663 = state_14648;(statearr_14663[18] = inst_14614);
return statearr_14663;
})();var statearr_14664_14745 = state_14648__$1;(statearr_14664_14745[2] = null);
(statearr_14664_14745[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 6))
{var inst_14576 = (state_14648[19]);var inst_14575 = cljs.core.deref.call(null,cs);var inst_14576__$1 = cljs.core.keys.call(null,inst_14575);var inst_14577 = cljs.core.count.call(null,inst_14576__$1);var inst_14578 = cljs.core.reset_BANG_.call(null,dctr,inst_14577);var inst_14583 = cljs.core.seq.call(null,inst_14576__$1);var inst_14584 = inst_14583;var inst_14585 = null;var inst_14586 = 0;var inst_14587 = 0;var state_14648__$1 = (function (){var statearr_14665 = state_14648;(statearr_14665[20] = inst_14578);
(statearr_14665[19] = inst_14576__$1);
(statearr_14665[10] = inst_14585);
(statearr_14665[11] = inst_14586);
(statearr_14665[12] = inst_14584);
(statearr_14665[13] = inst_14587);
return statearr_14665;
})();var statearr_14666_14746 = state_14648__$1;(statearr_14666_14746[2] = null);
(statearr_14666_14746[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 38))
{var inst_14627 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14667_14747 = state_14648__$1;(statearr_14667_14747[2] = inst_14627);
(statearr_14667_14747[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 7))
{var inst_14644 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14668_14748 = state_14648__$1;(statearr_14668_14748[2] = inst_14644);
(statearr_14668_14748[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 39))
{var inst_14605 = (state_14648[9]);var inst_14623 = (state_14648[2]);var inst_14624 = cljs.core.next.call(null,inst_14605);var inst_14584 = inst_14624;var inst_14585 = null;var inst_14586 = 0;var inst_14587 = 0;var state_14648__$1 = (function (){var statearr_14669 = state_14648;(statearr_14669[10] = inst_14585);
(statearr_14669[11] = inst_14586);
(statearr_14669[12] = inst_14584);
(statearr_14669[21] = inst_14623);
(statearr_14669[13] = inst_14587);
return statearr_14669;
})();var statearr_14670_14749 = state_14648__$1;(statearr_14670_14749[2] = null);
(statearr_14670_14749[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 8))
{var inst_14527 = (state_14648[16]);var inst_14528 = (state_14648[17]);var inst_14530 = (inst_14528 < inst_14527);var inst_14531 = inst_14530;var state_14648__$1 = state_14648;if(cljs.core.truth_(inst_14531))
{var statearr_14671_14750 = state_14648__$1;(statearr_14671_14750[1] = 10);
} else
{var statearr_14672_14751 = state_14648__$1;(statearr_14672_14751[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 40))
{var inst_14614 = (state_14648[18]);var inst_14615 = (state_14648[2]);var inst_14616 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14617 = cljs.core.async.untap_STAR_.call(null,m,inst_14614);var state_14648__$1 = (function (){var statearr_14673 = state_14648;(statearr_14673[22] = inst_14615);
(statearr_14673[23] = inst_14616);
return statearr_14673;
})();var statearr_14674_14752 = state_14648__$1;(statearr_14674_14752[2] = inst_14617);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14648__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 9))
{var inst_14573 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14675_14753 = state_14648__$1;(statearr_14675_14753[2] = inst_14573);
(statearr_14675_14753[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 41))
{var inst_14516 = (state_14648[7]);var inst_14614 = (state_14648[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14648,40,Object,null,39);var inst_14621 = cljs.core.async.put_BANG_.call(null,inst_14614,inst_14516,done);var state_14648__$1 = state_14648;var statearr_14676_14754 = state_14648__$1;(statearr_14676_14754[2] = inst_14621);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14648__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 10))
{var inst_14526 = (state_14648[15]);var inst_14528 = (state_14648[17]);var inst_14534 = cljs.core._nth.call(null,inst_14526,inst_14528);var inst_14535 = cljs.core.nth.call(null,inst_14534,0,null);var inst_14536 = cljs.core.nth.call(null,inst_14534,1,null);var state_14648__$1 = (function (){var statearr_14677 = state_14648;(statearr_14677[24] = inst_14535);
return statearr_14677;
})();if(cljs.core.truth_(inst_14536))
{var statearr_14678_14755 = state_14648__$1;(statearr_14678_14755[1] = 13);
} else
{var statearr_14679_14756 = state_14648__$1;(statearr_14679_14756[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 42))
{var state_14648__$1 = state_14648;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14648__$1,45,dchan);
} else
{if((state_val_14649 === 11))
{var inst_14525 = (state_14648[14]);var inst_14545 = (state_14648[25]);var inst_14545__$1 = cljs.core.seq.call(null,inst_14525);var state_14648__$1 = (function (){var statearr_14680 = state_14648;(statearr_14680[25] = inst_14545__$1);
return statearr_14680;
})();if(inst_14545__$1)
{var statearr_14681_14757 = state_14648__$1;(statearr_14681_14757[1] = 16);
} else
{var statearr_14682_14758 = state_14648__$1;(statearr_14682_14758[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 43))
{var state_14648__$1 = state_14648;var statearr_14683_14759 = state_14648__$1;(statearr_14683_14759[2] = null);
(statearr_14683_14759[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 12))
{var inst_14571 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14684_14760 = state_14648__$1;(statearr_14684_14760[2] = inst_14571);
(statearr_14684_14760[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 44))
{var inst_14641 = (state_14648[2]);var state_14648__$1 = (function (){var statearr_14685 = state_14648;(statearr_14685[26] = inst_14641);
return statearr_14685;
})();var statearr_14686_14761 = state_14648__$1;(statearr_14686_14761[2] = null);
(statearr_14686_14761[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 13))
{var inst_14535 = (state_14648[24]);var inst_14538 = cljs.core.async.close_BANG_.call(null,inst_14535);var state_14648__$1 = state_14648;var statearr_14687_14762 = state_14648__$1;(statearr_14687_14762[2] = inst_14538);
(statearr_14687_14762[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 45))
{var inst_14638 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14691_14763 = state_14648__$1;(statearr_14691_14763[2] = inst_14638);
(statearr_14691_14763[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 14))
{var state_14648__$1 = state_14648;var statearr_14692_14764 = state_14648__$1;(statearr_14692_14764[2] = null);
(statearr_14692_14764[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 15))
{var inst_14525 = (state_14648[14]);var inst_14526 = (state_14648[15]);var inst_14527 = (state_14648[16]);var inst_14528 = (state_14648[17]);var inst_14541 = (state_14648[2]);var inst_14542 = (inst_14528 + 1);var tmp14688 = inst_14525;var tmp14689 = inst_14526;var tmp14690 = inst_14527;var inst_14525__$1 = tmp14688;var inst_14526__$1 = tmp14689;var inst_14527__$1 = tmp14690;var inst_14528__$1 = inst_14542;var state_14648__$1 = (function (){var statearr_14693 = state_14648;(statearr_14693[14] = inst_14525__$1);
(statearr_14693[15] = inst_14526__$1);
(statearr_14693[16] = inst_14527__$1);
(statearr_14693[17] = inst_14528__$1);
(statearr_14693[27] = inst_14541);
return statearr_14693;
})();var statearr_14694_14765 = state_14648__$1;(statearr_14694_14765[2] = null);
(statearr_14694_14765[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 16))
{var inst_14545 = (state_14648[25]);var inst_14547 = cljs.core.chunked_seq_QMARK_.call(null,inst_14545);var state_14648__$1 = state_14648;if(inst_14547)
{var statearr_14695_14766 = state_14648__$1;(statearr_14695_14766[1] = 19);
} else
{var statearr_14696_14767 = state_14648__$1;(statearr_14696_14767[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 17))
{var state_14648__$1 = state_14648;var statearr_14697_14768 = state_14648__$1;(statearr_14697_14768[2] = null);
(statearr_14697_14768[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 18))
{var inst_14569 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14698_14769 = state_14648__$1;(statearr_14698_14769[2] = inst_14569);
(statearr_14698_14769[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 19))
{var inst_14545 = (state_14648[25]);var inst_14549 = cljs.core.chunk_first.call(null,inst_14545);var inst_14550 = cljs.core.chunk_rest.call(null,inst_14545);var inst_14551 = cljs.core.count.call(null,inst_14549);var inst_14525 = inst_14550;var inst_14526 = inst_14549;var inst_14527 = inst_14551;var inst_14528 = 0;var state_14648__$1 = (function (){var statearr_14699 = state_14648;(statearr_14699[14] = inst_14525);
(statearr_14699[15] = inst_14526);
(statearr_14699[16] = inst_14527);
(statearr_14699[17] = inst_14528);
return statearr_14699;
})();var statearr_14700_14770 = state_14648__$1;(statearr_14700_14770[2] = null);
(statearr_14700_14770[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 20))
{var inst_14545 = (state_14648[25]);var inst_14555 = cljs.core.first.call(null,inst_14545);var inst_14556 = cljs.core.nth.call(null,inst_14555,0,null);var inst_14557 = cljs.core.nth.call(null,inst_14555,1,null);var state_14648__$1 = (function (){var statearr_14701 = state_14648;(statearr_14701[28] = inst_14556);
return statearr_14701;
})();if(cljs.core.truth_(inst_14557))
{var statearr_14702_14771 = state_14648__$1;(statearr_14702_14771[1] = 22);
} else
{var statearr_14703_14772 = state_14648__$1;(statearr_14703_14772[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 21))
{var inst_14566 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14704_14773 = state_14648__$1;(statearr_14704_14773[2] = inst_14566);
(statearr_14704_14773[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 22))
{var inst_14556 = (state_14648[28]);var inst_14559 = cljs.core.async.close_BANG_.call(null,inst_14556);var state_14648__$1 = state_14648;var statearr_14705_14774 = state_14648__$1;(statearr_14705_14774[2] = inst_14559);
(statearr_14705_14774[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 23))
{var state_14648__$1 = state_14648;var statearr_14706_14775 = state_14648__$1;(statearr_14706_14775[2] = null);
(statearr_14706_14775[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 24))
{var inst_14545 = (state_14648[25]);var inst_14562 = (state_14648[2]);var inst_14563 = cljs.core.next.call(null,inst_14545);var inst_14525 = inst_14563;var inst_14526 = null;var inst_14527 = 0;var inst_14528 = 0;var state_14648__$1 = (function (){var statearr_14707 = state_14648;(statearr_14707[29] = inst_14562);
(statearr_14707[14] = inst_14525);
(statearr_14707[15] = inst_14526);
(statearr_14707[16] = inst_14527);
(statearr_14707[17] = inst_14528);
return statearr_14707;
})();var statearr_14708_14776 = state_14648__$1;(statearr_14708_14776[2] = null);
(statearr_14708_14776[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 25))
{var inst_14586 = (state_14648[11]);var inst_14587 = (state_14648[13]);var inst_14589 = (inst_14587 < inst_14586);var inst_14590 = inst_14589;var state_14648__$1 = state_14648;if(cljs.core.truth_(inst_14590))
{var statearr_14709_14777 = state_14648__$1;(statearr_14709_14777[1] = 27);
} else
{var statearr_14710_14778 = state_14648__$1;(statearr_14710_14778[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 26))
{var inst_14576 = (state_14648[19]);var inst_14634 = (state_14648[2]);var inst_14635 = cljs.core.seq.call(null,inst_14576);var state_14648__$1 = (function (){var statearr_14711 = state_14648;(statearr_14711[30] = inst_14634);
return statearr_14711;
})();if(inst_14635)
{var statearr_14712_14779 = state_14648__$1;(statearr_14712_14779[1] = 42);
} else
{var statearr_14713_14780 = state_14648__$1;(statearr_14713_14780[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 27))
{var inst_14585 = (state_14648[10]);var inst_14587 = (state_14648[13]);var inst_14592 = cljs.core._nth.call(null,inst_14585,inst_14587);var state_14648__$1 = (function (){var statearr_14714 = state_14648;(statearr_14714[8] = inst_14592);
return statearr_14714;
})();var statearr_14715_14781 = state_14648__$1;(statearr_14715_14781[2] = null);
(statearr_14715_14781[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 28))
{var inst_14605 = (state_14648[9]);var inst_14584 = (state_14648[12]);var inst_14605__$1 = cljs.core.seq.call(null,inst_14584);var state_14648__$1 = (function (){var statearr_14719 = state_14648;(statearr_14719[9] = inst_14605__$1);
return statearr_14719;
})();if(inst_14605__$1)
{var statearr_14720_14782 = state_14648__$1;(statearr_14720_14782[1] = 33);
} else
{var statearr_14721_14783 = state_14648__$1;(statearr_14721_14783[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 29))
{var inst_14632 = (state_14648[2]);var state_14648__$1 = state_14648;var statearr_14722_14784 = state_14648__$1;(statearr_14722_14784[2] = inst_14632);
(statearr_14722_14784[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 30))
{var inst_14585 = (state_14648[10]);var inst_14586 = (state_14648[11]);var inst_14584 = (state_14648[12]);var inst_14587 = (state_14648[13]);var inst_14601 = (state_14648[2]);var inst_14602 = (inst_14587 + 1);var tmp14716 = inst_14585;var tmp14717 = inst_14586;var tmp14718 = inst_14584;var inst_14584__$1 = tmp14718;var inst_14585__$1 = tmp14716;var inst_14586__$1 = tmp14717;var inst_14587__$1 = inst_14602;var state_14648__$1 = (function (){var statearr_14723 = state_14648;(statearr_14723[31] = inst_14601);
(statearr_14723[10] = inst_14585__$1);
(statearr_14723[11] = inst_14586__$1);
(statearr_14723[12] = inst_14584__$1);
(statearr_14723[13] = inst_14587__$1);
return statearr_14723;
})();var statearr_14724_14785 = state_14648__$1;(statearr_14724_14785[2] = null);
(statearr_14724_14785[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14649 === 31))
{var inst_14592 = (state_14648[8]);var inst_14593 = (state_14648[2]);var inst_14594 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14595 = cljs.core.async.untap_STAR_.call(null,m,inst_14592);var state_14648__$1 = (function (){var statearr_14725 = state_14648;(statearr_14725[32] = inst_14594);
(statearr_14725[33] = inst_14593);
return statearr_14725;
})();var statearr_14726_14786 = state_14648__$1;(statearr_14726_14786[2] = inst_14595);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14648__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14730 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14730[0] = state_machine__5507__auto__);
(statearr_14730[1] = 1);
return statearr_14730;
});
var state_machine__5507__auto____1 = (function (state_14648){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14648);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14731){if((e14731 instanceof Object))
{var ex__5510__auto__ = e14731;var statearr_14732_14787 = state_14648;(statearr_14732_14787[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14648);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14731;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14788 = state_14648;
state_14648 = G__14788;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14648){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14648);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14733 = f__5522__auto__.call(null);(statearr_14733[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14734);
return statearr_14733;
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
cljs.core.async.Mix = (function (){var obj14790 = {};return obj14790;
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
;var m = (function (){if(typeof cljs.core.async.t14900 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14900 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14901){
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
this.meta14901 = meta14901;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14900.cljs$lang$type = true;
cljs.core.async.t14900.cljs$lang$ctorStr = "cljs.core.async/t14900";
cljs.core.async.t14900.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14900");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14900.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14900.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14900.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14900.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14900.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14900.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14900.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14900.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14900.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14902){var self__ = this;
var _14902__$1 = this;return self__.meta14901;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14900.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14902,meta14901__$1){var self__ = this;
var _14902__$1 = this;return (new cljs.core.async.t14900(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14901__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14900 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14900(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14901){return (new cljs.core.async.t14900(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14901));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14900(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15009 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14967){var state_val_14968 = (state_14967[1]);if((state_val_14968 === 1))
{var inst_14906 = (state_14967[7]);var inst_14906__$1 = calc_state.call(null);var inst_14907 = cljs.core.seq_QMARK_.call(null,inst_14906__$1);var state_14967__$1 = (function (){var statearr_14969 = state_14967;(statearr_14969[7] = inst_14906__$1);
return statearr_14969;
})();if(inst_14907)
{var statearr_14970_15010 = state_14967__$1;(statearr_14970_15010[1] = 2);
} else
{var statearr_14971_15011 = state_14967__$1;(statearr_14971_15011[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 2))
{var inst_14906 = (state_14967[7]);var inst_14909 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14906);var state_14967__$1 = state_14967;var statearr_14972_15012 = state_14967__$1;(statearr_14972_15012[2] = inst_14909);
(statearr_14972_15012[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 3))
{var inst_14906 = (state_14967[7]);var state_14967__$1 = state_14967;var statearr_14973_15013 = state_14967__$1;(statearr_14973_15013[2] = inst_14906);
(statearr_14973_15013[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 4))
{var inst_14906 = (state_14967[7]);var inst_14912 = (state_14967[2]);var inst_14913 = cljs.core.get.call(null,inst_14912,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14914 = cljs.core.get.call(null,inst_14912,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14915 = cljs.core.get.call(null,inst_14912,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14916 = inst_14906;var state_14967__$1 = (function (){var statearr_14974 = state_14967;(statearr_14974[8] = inst_14913);
(statearr_14974[9] = inst_14915);
(statearr_14974[10] = inst_14914);
(statearr_14974[11] = inst_14916);
return statearr_14974;
})();var statearr_14975_15014 = state_14967__$1;(statearr_14975_15014[2] = null);
(statearr_14975_15014[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 5))
{var inst_14916 = (state_14967[11]);var inst_14919 = cljs.core.seq_QMARK_.call(null,inst_14916);var state_14967__$1 = state_14967;if(inst_14919)
{var statearr_14976_15015 = state_14967__$1;(statearr_14976_15015[1] = 7);
} else
{var statearr_14977_15016 = state_14967__$1;(statearr_14977_15016[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 6))
{var inst_14965 = (state_14967[2]);var state_14967__$1 = state_14967;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14967__$1,inst_14965);
} else
{if((state_val_14968 === 7))
{var inst_14916 = (state_14967[11]);var inst_14921 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14916);var state_14967__$1 = state_14967;var statearr_14978_15017 = state_14967__$1;(statearr_14978_15017[2] = inst_14921);
(statearr_14978_15017[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 8))
{var inst_14916 = (state_14967[11]);var state_14967__$1 = state_14967;var statearr_14979_15018 = state_14967__$1;(statearr_14979_15018[2] = inst_14916);
(statearr_14979_15018[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 9))
{var inst_14924 = (state_14967[12]);var inst_14924__$1 = (state_14967[2]);var inst_14925 = cljs.core.get.call(null,inst_14924__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14926 = cljs.core.get.call(null,inst_14924__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14927 = cljs.core.get.call(null,inst_14924__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14967__$1 = (function (){var statearr_14980 = state_14967;(statearr_14980[12] = inst_14924__$1);
(statearr_14980[13] = inst_14926);
(statearr_14980[14] = inst_14927);
return statearr_14980;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14967__$1,10,inst_14925);
} else
{if((state_val_14968 === 10))
{var inst_14931 = (state_14967[15]);var inst_14932 = (state_14967[16]);var inst_14930 = (state_14967[2]);var inst_14931__$1 = cljs.core.nth.call(null,inst_14930,0,null);var inst_14932__$1 = cljs.core.nth.call(null,inst_14930,1,null);var inst_14933 = (inst_14931__$1 == null);var inst_14934 = cljs.core._EQ_.call(null,inst_14932__$1,change);var inst_14935 = (inst_14933) || (inst_14934);var state_14967__$1 = (function (){var statearr_14981 = state_14967;(statearr_14981[15] = inst_14931__$1);
(statearr_14981[16] = inst_14932__$1);
return statearr_14981;
})();if(cljs.core.truth_(inst_14935))
{var statearr_14982_15019 = state_14967__$1;(statearr_14982_15019[1] = 11);
} else
{var statearr_14983_15020 = state_14967__$1;(statearr_14983_15020[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 11))
{var inst_14931 = (state_14967[15]);var inst_14937 = (inst_14931 == null);var state_14967__$1 = state_14967;if(cljs.core.truth_(inst_14937))
{var statearr_14984_15021 = state_14967__$1;(statearr_14984_15021[1] = 14);
} else
{var statearr_14985_15022 = state_14967__$1;(statearr_14985_15022[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 12))
{var inst_14946 = (state_14967[17]);var inst_14927 = (state_14967[14]);var inst_14932 = (state_14967[16]);var inst_14946__$1 = inst_14927.call(null,inst_14932);var state_14967__$1 = (function (){var statearr_14986 = state_14967;(statearr_14986[17] = inst_14946__$1);
return statearr_14986;
})();if(cljs.core.truth_(inst_14946__$1))
{var statearr_14987_15023 = state_14967__$1;(statearr_14987_15023[1] = 17);
} else
{var statearr_14988_15024 = state_14967__$1;(statearr_14988_15024[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 13))
{var inst_14963 = (state_14967[2]);var state_14967__$1 = state_14967;var statearr_14989_15025 = state_14967__$1;(statearr_14989_15025[2] = inst_14963);
(statearr_14989_15025[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 14))
{var inst_14932 = (state_14967[16]);var inst_14939 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14932);var state_14967__$1 = state_14967;var statearr_14990_15026 = state_14967__$1;(statearr_14990_15026[2] = inst_14939);
(statearr_14990_15026[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 15))
{var state_14967__$1 = state_14967;var statearr_14991_15027 = state_14967__$1;(statearr_14991_15027[2] = null);
(statearr_14991_15027[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 16))
{var inst_14942 = (state_14967[2]);var inst_14943 = calc_state.call(null);var inst_14916 = inst_14943;var state_14967__$1 = (function (){var statearr_14992 = state_14967;(statearr_14992[11] = inst_14916);
(statearr_14992[18] = inst_14942);
return statearr_14992;
})();var statearr_14993_15028 = state_14967__$1;(statearr_14993_15028[2] = null);
(statearr_14993_15028[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 17))
{var inst_14946 = (state_14967[17]);var state_14967__$1 = state_14967;var statearr_14994_15029 = state_14967__$1;(statearr_14994_15029[2] = inst_14946);
(statearr_14994_15029[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 18))
{var inst_14926 = (state_14967[13]);var inst_14927 = (state_14967[14]);var inst_14932 = (state_14967[16]);var inst_14949 = cljs.core.empty_QMARK_.call(null,inst_14927);var inst_14950 = inst_14926.call(null,inst_14932);var inst_14951 = cljs.core.not.call(null,inst_14950);var inst_14952 = (inst_14949) && (inst_14951);var state_14967__$1 = state_14967;var statearr_14995_15030 = state_14967__$1;(statearr_14995_15030[2] = inst_14952);
(statearr_14995_15030[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 19))
{var inst_14954 = (state_14967[2]);var state_14967__$1 = state_14967;if(cljs.core.truth_(inst_14954))
{var statearr_14996_15031 = state_14967__$1;(statearr_14996_15031[1] = 20);
} else
{var statearr_14997_15032 = state_14967__$1;(statearr_14997_15032[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 20))
{var inst_14931 = (state_14967[15]);var state_14967__$1 = state_14967;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14967__$1,23,out,inst_14931);
} else
{if((state_val_14968 === 21))
{var state_14967__$1 = state_14967;var statearr_14998_15033 = state_14967__$1;(statearr_14998_15033[2] = null);
(statearr_14998_15033[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 22))
{var inst_14924 = (state_14967[12]);var inst_14960 = (state_14967[2]);var inst_14916 = inst_14924;var state_14967__$1 = (function (){var statearr_14999 = state_14967;(statearr_14999[19] = inst_14960);
(statearr_14999[11] = inst_14916);
return statearr_14999;
})();var statearr_15000_15034 = state_14967__$1;(statearr_15000_15034[2] = null);
(statearr_15000_15034[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14968 === 23))
{var inst_14957 = (state_14967[2]);var state_14967__$1 = state_14967;var statearr_15001_15035 = state_14967__$1;(statearr_15001_15035[2] = inst_14957);
(statearr_15001_15035[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15005[0] = state_machine__5507__auto__);
(statearr_15005[1] = 1);
return statearr_15005;
});
var state_machine__5507__auto____1 = (function (state_14967){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14967);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15006){if((e15006 instanceof Object))
{var ex__5510__auto__ = e15006;var statearr_15007_15036 = state_14967;(statearr_15007_15036[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14967);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15006;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15037 = state_14967;
state_14967 = G__15037;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14967){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14967);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15008 = f__5522__auto__.call(null);(statearr_15008[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15009);
return statearr_15008;
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
cljs.core.async.Pub = (function (){var obj15039 = {};return obj15039;
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
return (function (p1__15040_SHARP_){if(cljs.core.truth_(p1__15040_SHARP_.call(null,topic)))
{return p1__15040_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15040_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15165 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15165 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15166){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15166 = meta15166;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15165.cljs$lang$type = true;
cljs.core.async.t15165.cljs$lang$ctorStr = "cljs.core.async/t15165";
cljs.core.async.t15165.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15165");
});})(mults,ensure_mult))
;
cljs.core.async.t15165.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15165.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15165.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15165.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15165.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15165.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15165.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15167){var self__ = this;
var _15167__$1 = this;return self__.meta15166;
});})(mults,ensure_mult))
;
cljs.core.async.t15165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15167,meta15166__$1){var self__ = this;
var _15167__$1 = this;return (new cljs.core.async.t15165(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15166__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15165 = ((function (mults,ensure_mult){
return (function __GT_t15165(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15166){return (new cljs.core.async.t15165(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15166));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15165(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15289 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15241){var state_val_15242 = (state_15241[1]);if((state_val_15242 === 1))
{var state_15241__$1 = state_15241;var statearr_15243_15290 = state_15241__$1;(statearr_15243_15290[2] = null);
(statearr_15243_15290[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 2))
{var state_15241__$1 = state_15241;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15241__$1,4,ch);
} else
{if((state_val_15242 === 3))
{var inst_15239 = (state_15241[2]);var state_15241__$1 = state_15241;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15241__$1,inst_15239);
} else
{if((state_val_15242 === 4))
{var inst_15170 = (state_15241[7]);var inst_15170__$1 = (state_15241[2]);var inst_15171 = (inst_15170__$1 == null);var state_15241__$1 = (function (){var statearr_15244 = state_15241;(statearr_15244[7] = inst_15170__$1);
return statearr_15244;
})();if(cljs.core.truth_(inst_15171))
{var statearr_15245_15291 = state_15241__$1;(statearr_15245_15291[1] = 5);
} else
{var statearr_15246_15292 = state_15241__$1;(statearr_15246_15292[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 5))
{var inst_15177 = cljs.core.deref.call(null,mults);var inst_15178 = cljs.core.vals.call(null,inst_15177);var inst_15179 = cljs.core.seq.call(null,inst_15178);var inst_15180 = inst_15179;var inst_15181 = null;var inst_15182 = 0;var inst_15183 = 0;var state_15241__$1 = (function (){var statearr_15247 = state_15241;(statearr_15247[8] = inst_15180);
(statearr_15247[9] = inst_15181);
(statearr_15247[10] = inst_15182);
(statearr_15247[11] = inst_15183);
return statearr_15247;
})();var statearr_15248_15293 = state_15241__$1;(statearr_15248_15293[2] = null);
(statearr_15248_15293[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 6))
{var inst_15218 = (state_15241[12]);var inst_15220 = (state_15241[13]);var inst_15170 = (state_15241[7]);var inst_15218__$1 = topic_fn.call(null,inst_15170);var inst_15219 = cljs.core.deref.call(null,mults);var inst_15220__$1 = cljs.core.get.call(null,inst_15219,inst_15218__$1);var state_15241__$1 = (function (){var statearr_15249 = state_15241;(statearr_15249[12] = inst_15218__$1);
(statearr_15249[13] = inst_15220__$1);
return statearr_15249;
})();if(cljs.core.truth_(inst_15220__$1))
{var statearr_15250_15294 = state_15241__$1;(statearr_15250_15294[1] = 19);
} else
{var statearr_15251_15295 = state_15241__$1;(statearr_15251_15295[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 7))
{var inst_15237 = (state_15241[2]);var state_15241__$1 = state_15241;var statearr_15252_15296 = state_15241__$1;(statearr_15252_15296[2] = inst_15237);
(statearr_15252_15296[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 8))
{var inst_15182 = (state_15241[10]);var inst_15183 = (state_15241[11]);var inst_15185 = (inst_15183 < inst_15182);var inst_15186 = inst_15185;var state_15241__$1 = state_15241;if(cljs.core.truth_(inst_15186))
{var statearr_15256_15297 = state_15241__$1;(statearr_15256_15297[1] = 10);
} else
{var statearr_15257_15298 = state_15241__$1;(statearr_15257_15298[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 9))
{var inst_15216 = (state_15241[2]);var state_15241__$1 = state_15241;var statearr_15258_15299 = state_15241__$1;(statearr_15258_15299[2] = inst_15216);
(statearr_15258_15299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 10))
{var inst_15180 = (state_15241[8]);var inst_15181 = (state_15241[9]);var inst_15182 = (state_15241[10]);var inst_15183 = (state_15241[11]);var inst_15188 = cljs.core._nth.call(null,inst_15181,inst_15183);var inst_15189 = cljs.core.async.muxch_STAR_.call(null,inst_15188);var inst_15190 = cljs.core.async.close_BANG_.call(null,inst_15189);var inst_15191 = (inst_15183 + 1);var tmp15253 = inst_15180;var tmp15254 = inst_15181;var tmp15255 = inst_15182;var inst_15180__$1 = tmp15253;var inst_15181__$1 = tmp15254;var inst_15182__$1 = tmp15255;var inst_15183__$1 = inst_15191;var state_15241__$1 = (function (){var statearr_15259 = state_15241;(statearr_15259[14] = inst_15190);
(statearr_15259[8] = inst_15180__$1);
(statearr_15259[9] = inst_15181__$1);
(statearr_15259[10] = inst_15182__$1);
(statearr_15259[11] = inst_15183__$1);
return statearr_15259;
})();var statearr_15260_15300 = state_15241__$1;(statearr_15260_15300[2] = null);
(statearr_15260_15300[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 11))
{var inst_15194 = (state_15241[15]);var inst_15180 = (state_15241[8]);var inst_15194__$1 = cljs.core.seq.call(null,inst_15180);var state_15241__$1 = (function (){var statearr_15261 = state_15241;(statearr_15261[15] = inst_15194__$1);
return statearr_15261;
})();if(inst_15194__$1)
{var statearr_15262_15301 = state_15241__$1;(statearr_15262_15301[1] = 13);
} else
{var statearr_15263_15302 = state_15241__$1;(statearr_15263_15302[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 12))
{var inst_15214 = (state_15241[2]);var state_15241__$1 = state_15241;var statearr_15264_15303 = state_15241__$1;(statearr_15264_15303[2] = inst_15214);
(statearr_15264_15303[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 13))
{var inst_15194 = (state_15241[15]);var inst_15196 = cljs.core.chunked_seq_QMARK_.call(null,inst_15194);var state_15241__$1 = state_15241;if(inst_15196)
{var statearr_15265_15304 = state_15241__$1;(statearr_15265_15304[1] = 16);
} else
{var statearr_15266_15305 = state_15241__$1;(statearr_15266_15305[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 14))
{var state_15241__$1 = state_15241;var statearr_15267_15306 = state_15241__$1;(statearr_15267_15306[2] = null);
(statearr_15267_15306[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 15))
{var inst_15212 = (state_15241[2]);var state_15241__$1 = state_15241;var statearr_15268_15307 = state_15241__$1;(statearr_15268_15307[2] = inst_15212);
(statearr_15268_15307[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 16))
{var inst_15194 = (state_15241[15]);var inst_15198 = cljs.core.chunk_first.call(null,inst_15194);var inst_15199 = cljs.core.chunk_rest.call(null,inst_15194);var inst_15200 = cljs.core.count.call(null,inst_15198);var inst_15180 = inst_15199;var inst_15181 = inst_15198;var inst_15182 = inst_15200;var inst_15183 = 0;var state_15241__$1 = (function (){var statearr_15269 = state_15241;(statearr_15269[8] = inst_15180);
(statearr_15269[9] = inst_15181);
(statearr_15269[10] = inst_15182);
(statearr_15269[11] = inst_15183);
return statearr_15269;
})();var statearr_15270_15308 = state_15241__$1;(statearr_15270_15308[2] = null);
(statearr_15270_15308[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 17))
{var inst_15194 = (state_15241[15]);var inst_15203 = cljs.core.first.call(null,inst_15194);var inst_15204 = cljs.core.async.muxch_STAR_.call(null,inst_15203);var inst_15205 = cljs.core.async.close_BANG_.call(null,inst_15204);var inst_15206 = cljs.core.next.call(null,inst_15194);var inst_15180 = inst_15206;var inst_15181 = null;var inst_15182 = 0;var inst_15183 = 0;var state_15241__$1 = (function (){var statearr_15271 = state_15241;(statearr_15271[8] = inst_15180);
(statearr_15271[9] = inst_15181);
(statearr_15271[10] = inst_15182);
(statearr_15271[11] = inst_15183);
(statearr_15271[16] = inst_15205);
return statearr_15271;
})();var statearr_15272_15309 = state_15241__$1;(statearr_15272_15309[2] = null);
(statearr_15272_15309[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 18))
{var inst_15209 = (state_15241[2]);var state_15241__$1 = state_15241;var statearr_15273_15310 = state_15241__$1;(statearr_15273_15310[2] = inst_15209);
(statearr_15273_15310[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 19))
{var state_15241__$1 = state_15241;var statearr_15274_15311 = state_15241__$1;(statearr_15274_15311[2] = null);
(statearr_15274_15311[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 20))
{var state_15241__$1 = state_15241;var statearr_15275_15312 = state_15241__$1;(statearr_15275_15312[2] = null);
(statearr_15275_15312[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 21))
{var inst_15234 = (state_15241[2]);var state_15241__$1 = (function (){var statearr_15276 = state_15241;(statearr_15276[17] = inst_15234);
return statearr_15276;
})();var statearr_15277_15313 = state_15241__$1;(statearr_15277_15313[2] = null);
(statearr_15277_15313[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 22))
{var inst_15231 = (state_15241[2]);var state_15241__$1 = state_15241;var statearr_15278_15314 = state_15241__$1;(statearr_15278_15314[2] = inst_15231);
(statearr_15278_15314[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 23))
{var inst_15218 = (state_15241[12]);var inst_15222 = (state_15241[2]);var inst_15223 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15218);var state_15241__$1 = (function (){var statearr_15279 = state_15241;(statearr_15279[18] = inst_15222);
return statearr_15279;
})();var statearr_15280_15315 = state_15241__$1;(statearr_15280_15315[2] = inst_15223);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15241__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15242 === 24))
{var inst_15220 = (state_15241[13]);var inst_15170 = (state_15241[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15241,23,Object,null,22);var inst_15227 = cljs.core.async.muxch_STAR_.call(null,inst_15220);var state_15241__$1 = state_15241;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15241__$1,25,inst_15227,inst_15170);
} else
{if((state_val_15242 === 25))
{var inst_15229 = (state_15241[2]);var state_15241__$1 = state_15241;var statearr_15281_15316 = state_15241__$1;(statearr_15281_15316[2] = inst_15229);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15241__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15285 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15285[0] = state_machine__5507__auto__);
(statearr_15285[1] = 1);
return statearr_15285;
});
var state_machine__5507__auto____1 = (function (state_15241){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15241);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15286){if((e15286 instanceof Object))
{var ex__5510__auto__ = e15286;var statearr_15287_15317 = state_15241;(statearr_15287_15317[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15241);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15286;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15318 = state_15241;
state_15241 = G__15318;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15241){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15288 = f__5522__auto__.call(null);(statearr_15288[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15289);
return statearr_15288;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15455 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15425){var state_val_15426 = (state_15425[1]);if((state_val_15426 === 1))
{var state_15425__$1 = state_15425;var statearr_15427_15456 = state_15425__$1;(statearr_15427_15456[2] = null);
(statearr_15427_15456[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 2))
{var inst_15388 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15389 = 0;var state_15425__$1 = (function (){var statearr_15428 = state_15425;(statearr_15428[7] = inst_15388);
(statearr_15428[8] = inst_15389);
return statearr_15428;
})();var statearr_15429_15457 = state_15425__$1;(statearr_15429_15457[2] = null);
(statearr_15429_15457[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 3))
{var inst_15423 = (state_15425[2]);var state_15425__$1 = state_15425;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15425__$1,inst_15423);
} else
{if((state_val_15426 === 4))
{var inst_15389 = (state_15425[8]);var inst_15391 = (inst_15389 < cnt);var state_15425__$1 = state_15425;if(cljs.core.truth_(inst_15391))
{var statearr_15430_15458 = state_15425__$1;(statearr_15430_15458[1] = 6);
} else
{var statearr_15431_15459 = state_15425__$1;(statearr_15431_15459[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 5))
{var inst_15409 = (state_15425[2]);var state_15425__$1 = (function (){var statearr_15432 = state_15425;(statearr_15432[9] = inst_15409);
return statearr_15432;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15425__$1,12,dchan);
} else
{if((state_val_15426 === 6))
{var state_15425__$1 = state_15425;var statearr_15433_15460 = state_15425__$1;(statearr_15433_15460[2] = null);
(statearr_15433_15460[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 7))
{var state_15425__$1 = state_15425;var statearr_15434_15461 = state_15425__$1;(statearr_15434_15461[2] = null);
(statearr_15434_15461[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 8))
{var inst_15407 = (state_15425[2]);var state_15425__$1 = state_15425;var statearr_15435_15462 = state_15425__$1;(statearr_15435_15462[2] = inst_15407);
(statearr_15435_15462[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 9))
{var inst_15389 = (state_15425[8]);var inst_15402 = (state_15425[2]);var inst_15403 = (inst_15389 + 1);var inst_15389__$1 = inst_15403;var state_15425__$1 = (function (){var statearr_15436 = state_15425;(statearr_15436[8] = inst_15389__$1);
(statearr_15436[10] = inst_15402);
return statearr_15436;
})();var statearr_15437_15463 = state_15425__$1;(statearr_15437_15463[2] = null);
(statearr_15437_15463[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 10))
{var inst_15393 = (state_15425[2]);var inst_15394 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15425__$1 = (function (){var statearr_15438 = state_15425;(statearr_15438[11] = inst_15393);
return statearr_15438;
})();var statearr_15439_15464 = state_15425__$1;(statearr_15439_15464[2] = inst_15394);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15425__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 11))
{var inst_15389 = (state_15425[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15425,10,Object,null,9);var inst_15398 = chs__$1.call(null,inst_15389);var inst_15399 = done.call(null,inst_15389);var inst_15400 = cljs.core.async.take_BANG_.call(null,inst_15398,inst_15399);var state_15425__$1 = state_15425;var statearr_15440_15465 = state_15425__$1;(statearr_15440_15465[2] = inst_15400);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15425__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 12))
{var inst_15411 = (state_15425[12]);var inst_15411__$1 = (state_15425[2]);var inst_15412 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15411__$1);var state_15425__$1 = (function (){var statearr_15441 = state_15425;(statearr_15441[12] = inst_15411__$1);
return statearr_15441;
})();if(cljs.core.truth_(inst_15412))
{var statearr_15442_15466 = state_15425__$1;(statearr_15442_15466[1] = 13);
} else
{var statearr_15443_15467 = state_15425__$1;(statearr_15443_15467[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 13))
{var inst_15414 = cljs.core.async.close_BANG_.call(null,out);var state_15425__$1 = state_15425;var statearr_15444_15468 = state_15425__$1;(statearr_15444_15468[2] = inst_15414);
(statearr_15444_15468[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 14))
{var inst_15411 = (state_15425[12]);var inst_15416 = cljs.core.apply.call(null,f,inst_15411);var state_15425__$1 = state_15425;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15425__$1,16,out,inst_15416);
} else
{if((state_val_15426 === 15))
{var inst_15421 = (state_15425[2]);var state_15425__$1 = state_15425;var statearr_15445_15469 = state_15425__$1;(statearr_15445_15469[2] = inst_15421);
(statearr_15445_15469[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15426 === 16))
{var inst_15418 = (state_15425[2]);var state_15425__$1 = (function (){var statearr_15446 = state_15425;(statearr_15446[13] = inst_15418);
return statearr_15446;
})();var statearr_15447_15470 = state_15425__$1;(statearr_15447_15470[2] = null);
(statearr_15447_15470[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15451[0] = state_machine__5507__auto__);
(statearr_15451[1] = 1);
return statearr_15451;
});
var state_machine__5507__auto____1 = (function (state_15425){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15425);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15452){if((e15452 instanceof Object))
{var ex__5510__auto__ = e15452;var statearr_15453_15471 = state_15425;(statearr_15453_15471[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15425);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15452;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15472 = state_15425;
state_15425 = G__15472;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15425){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15425);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15454 = f__5522__auto__.call(null);(statearr_15454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15455);
return statearr_15454;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15580 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15556){var state_val_15557 = (state_15556[1]);if((state_val_15557 === 1))
{var inst_15527 = cljs.core.vec.call(null,chs);var inst_15528 = inst_15527;var state_15556__$1 = (function (){var statearr_15558 = state_15556;(statearr_15558[7] = inst_15528);
return statearr_15558;
})();var statearr_15559_15581 = state_15556__$1;(statearr_15559_15581[2] = null);
(statearr_15559_15581[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15557 === 2))
{var inst_15528 = (state_15556[7]);var inst_15530 = cljs.core.count.call(null,inst_15528);var inst_15531 = (inst_15530 > 0);var state_15556__$1 = state_15556;if(cljs.core.truth_(inst_15531))
{var statearr_15560_15582 = state_15556__$1;(statearr_15560_15582[1] = 4);
} else
{var statearr_15561_15583 = state_15556__$1;(statearr_15561_15583[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15557 === 3))
{var inst_15554 = (state_15556[2]);var state_15556__$1 = state_15556;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15556__$1,inst_15554);
} else
{if((state_val_15557 === 4))
{var inst_15528 = (state_15556[7]);var state_15556__$1 = state_15556;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15556__$1,7,inst_15528);
} else
{if((state_val_15557 === 5))
{var inst_15550 = cljs.core.async.close_BANG_.call(null,out);var state_15556__$1 = state_15556;var statearr_15562_15584 = state_15556__$1;(statearr_15562_15584[2] = inst_15550);
(statearr_15562_15584[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15557 === 6))
{var inst_15552 = (state_15556[2]);var state_15556__$1 = state_15556;var statearr_15563_15585 = state_15556__$1;(statearr_15563_15585[2] = inst_15552);
(statearr_15563_15585[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15557 === 7))
{var inst_15536 = (state_15556[8]);var inst_15535 = (state_15556[9]);var inst_15535__$1 = (state_15556[2]);var inst_15536__$1 = cljs.core.nth.call(null,inst_15535__$1,0,null);var inst_15537 = cljs.core.nth.call(null,inst_15535__$1,1,null);var inst_15538 = (inst_15536__$1 == null);var state_15556__$1 = (function (){var statearr_15564 = state_15556;(statearr_15564[10] = inst_15537);
(statearr_15564[8] = inst_15536__$1);
(statearr_15564[9] = inst_15535__$1);
return statearr_15564;
})();if(cljs.core.truth_(inst_15538))
{var statearr_15565_15586 = state_15556__$1;(statearr_15565_15586[1] = 8);
} else
{var statearr_15566_15587 = state_15556__$1;(statearr_15566_15587[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15557 === 8))
{var inst_15537 = (state_15556[10]);var inst_15536 = (state_15556[8]);var inst_15535 = (state_15556[9]);var inst_15528 = (state_15556[7]);var inst_15540 = (function (){var c = inst_15537;var v = inst_15536;var vec__15533 = inst_15535;var cs = inst_15528;return ((function (c,v,vec__15533,cs,inst_15537,inst_15536,inst_15535,inst_15528,state_val_15557){
return (function (p1__15473_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15473_SHARP_);
});
;})(c,v,vec__15533,cs,inst_15537,inst_15536,inst_15535,inst_15528,state_val_15557))
})();var inst_15541 = cljs.core.filterv.call(null,inst_15540,inst_15528);var inst_15528__$1 = inst_15541;var state_15556__$1 = (function (){var statearr_15567 = state_15556;(statearr_15567[7] = inst_15528__$1);
return statearr_15567;
})();var statearr_15568_15588 = state_15556__$1;(statearr_15568_15588[2] = null);
(statearr_15568_15588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15557 === 9))
{var inst_15536 = (state_15556[8]);var state_15556__$1 = state_15556;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15556__$1,11,out,inst_15536);
} else
{if((state_val_15557 === 10))
{var inst_15548 = (state_15556[2]);var state_15556__$1 = state_15556;var statearr_15570_15589 = state_15556__$1;(statearr_15570_15589[2] = inst_15548);
(statearr_15570_15589[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15557 === 11))
{var inst_15528 = (state_15556[7]);var inst_15545 = (state_15556[2]);var tmp15569 = inst_15528;var inst_15528__$1 = tmp15569;var state_15556__$1 = (function (){var statearr_15571 = state_15556;(statearr_15571[11] = inst_15545);
(statearr_15571[7] = inst_15528__$1);
return statearr_15571;
})();var statearr_15572_15590 = state_15556__$1;(statearr_15572_15590[2] = null);
(statearr_15572_15590[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15576 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15576[0] = state_machine__5507__auto__);
(statearr_15576[1] = 1);
return statearr_15576;
});
var state_machine__5507__auto____1 = (function (state_15556){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15556);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15577){if((e15577 instanceof Object))
{var ex__5510__auto__ = e15577;var statearr_15578_15591 = state_15556;(statearr_15578_15591[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15556);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15592 = state_15556;
state_15556 = G__15592;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15556){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15556);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15579 = f__5522__auto__.call(null);(statearr_15579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15580);
return statearr_15579;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15685 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15662){var state_val_15663 = (state_15662[1]);if((state_val_15663 === 1))
{var inst_15639 = 0;var state_15662__$1 = (function (){var statearr_15664 = state_15662;(statearr_15664[7] = inst_15639);
return statearr_15664;
})();var statearr_15665_15686 = state_15662__$1;(statearr_15665_15686[2] = null);
(statearr_15665_15686[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15663 === 2))
{var inst_15639 = (state_15662[7]);var inst_15641 = (inst_15639 < n);var state_15662__$1 = state_15662;if(cljs.core.truth_(inst_15641))
{var statearr_15666_15687 = state_15662__$1;(statearr_15666_15687[1] = 4);
} else
{var statearr_15667_15688 = state_15662__$1;(statearr_15667_15688[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15663 === 3))
{var inst_15659 = (state_15662[2]);var inst_15660 = cljs.core.async.close_BANG_.call(null,out);var state_15662__$1 = (function (){var statearr_15668 = state_15662;(statearr_15668[8] = inst_15659);
return statearr_15668;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15662__$1,inst_15660);
} else
{if((state_val_15663 === 4))
{var state_15662__$1 = state_15662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15662__$1,7,ch);
} else
{if((state_val_15663 === 5))
{var state_15662__$1 = state_15662;var statearr_15669_15689 = state_15662__$1;(statearr_15669_15689[2] = null);
(statearr_15669_15689[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15663 === 6))
{var inst_15657 = (state_15662[2]);var state_15662__$1 = state_15662;var statearr_15670_15690 = state_15662__$1;(statearr_15670_15690[2] = inst_15657);
(statearr_15670_15690[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15663 === 7))
{var inst_15644 = (state_15662[9]);var inst_15644__$1 = (state_15662[2]);var inst_15645 = (inst_15644__$1 == null);var inst_15646 = cljs.core.not.call(null,inst_15645);var state_15662__$1 = (function (){var statearr_15671 = state_15662;(statearr_15671[9] = inst_15644__$1);
return statearr_15671;
})();if(inst_15646)
{var statearr_15672_15691 = state_15662__$1;(statearr_15672_15691[1] = 8);
} else
{var statearr_15673_15692 = state_15662__$1;(statearr_15673_15692[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15663 === 8))
{var inst_15644 = (state_15662[9]);var state_15662__$1 = state_15662;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15662__$1,11,out,inst_15644);
} else
{if((state_val_15663 === 9))
{var state_15662__$1 = state_15662;var statearr_15674_15693 = state_15662__$1;(statearr_15674_15693[2] = null);
(statearr_15674_15693[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15663 === 10))
{var inst_15654 = (state_15662[2]);var state_15662__$1 = state_15662;var statearr_15675_15694 = state_15662__$1;(statearr_15675_15694[2] = inst_15654);
(statearr_15675_15694[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15663 === 11))
{var inst_15639 = (state_15662[7]);var inst_15649 = (state_15662[2]);var inst_15650 = (inst_15639 + 1);var inst_15639__$1 = inst_15650;var state_15662__$1 = (function (){var statearr_15676 = state_15662;(statearr_15676[10] = inst_15649);
(statearr_15676[7] = inst_15639__$1);
return statearr_15676;
})();var statearr_15677_15695 = state_15662__$1;(statearr_15677_15695[2] = null);
(statearr_15677_15695[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15681 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15681[0] = state_machine__5507__auto__);
(statearr_15681[1] = 1);
return statearr_15681;
});
var state_machine__5507__auto____1 = (function (state_15662){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15662);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15682){if((e15682 instanceof Object))
{var ex__5510__auto__ = e15682;var statearr_15683_15696 = state_15662;(statearr_15683_15696[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15662);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15697 = state_15662;
state_15662 = G__15697;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15662){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15684 = f__5522__auto__.call(null);(statearr_15684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15685);
return statearr_15684;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15794 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15769){var state_val_15770 = (state_15769[1]);if((state_val_15770 === 1))
{var inst_15746 = null;var state_15769__$1 = (function (){var statearr_15771 = state_15769;(statearr_15771[7] = inst_15746);
return statearr_15771;
})();var statearr_15772_15795 = state_15769__$1;(statearr_15772_15795[2] = null);
(statearr_15772_15795[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15770 === 2))
{var state_15769__$1 = state_15769;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15769__$1,4,ch);
} else
{if((state_val_15770 === 3))
{var inst_15766 = (state_15769[2]);var inst_15767 = cljs.core.async.close_BANG_.call(null,out);var state_15769__$1 = (function (){var statearr_15773 = state_15769;(statearr_15773[8] = inst_15766);
return statearr_15773;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15769__$1,inst_15767);
} else
{if((state_val_15770 === 4))
{var inst_15749 = (state_15769[9]);var inst_15749__$1 = (state_15769[2]);var inst_15750 = (inst_15749__$1 == null);var inst_15751 = cljs.core.not.call(null,inst_15750);var state_15769__$1 = (function (){var statearr_15774 = state_15769;(statearr_15774[9] = inst_15749__$1);
return statearr_15774;
})();if(inst_15751)
{var statearr_15775_15796 = state_15769__$1;(statearr_15775_15796[1] = 5);
} else
{var statearr_15776_15797 = state_15769__$1;(statearr_15776_15797[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15770 === 5))
{var inst_15746 = (state_15769[7]);var inst_15749 = (state_15769[9]);var inst_15753 = cljs.core._EQ_.call(null,inst_15749,inst_15746);var state_15769__$1 = state_15769;if(inst_15753)
{var statearr_15777_15798 = state_15769__$1;(statearr_15777_15798[1] = 8);
} else
{var statearr_15778_15799 = state_15769__$1;(statearr_15778_15799[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15770 === 6))
{var state_15769__$1 = state_15769;var statearr_15780_15800 = state_15769__$1;(statearr_15780_15800[2] = null);
(statearr_15780_15800[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15770 === 7))
{var inst_15764 = (state_15769[2]);var state_15769__$1 = state_15769;var statearr_15781_15801 = state_15769__$1;(statearr_15781_15801[2] = inst_15764);
(statearr_15781_15801[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15770 === 8))
{var inst_15746 = (state_15769[7]);var tmp15779 = inst_15746;var inst_15746__$1 = tmp15779;var state_15769__$1 = (function (){var statearr_15782 = state_15769;(statearr_15782[7] = inst_15746__$1);
return statearr_15782;
})();var statearr_15783_15802 = state_15769__$1;(statearr_15783_15802[2] = null);
(statearr_15783_15802[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15770 === 9))
{var inst_15749 = (state_15769[9]);var state_15769__$1 = state_15769;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15769__$1,11,out,inst_15749);
} else
{if((state_val_15770 === 10))
{var inst_15761 = (state_15769[2]);var state_15769__$1 = state_15769;var statearr_15784_15803 = state_15769__$1;(statearr_15784_15803[2] = inst_15761);
(statearr_15784_15803[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15770 === 11))
{var inst_15749 = (state_15769[9]);var inst_15758 = (state_15769[2]);var inst_15746 = inst_15749;var state_15769__$1 = (function (){var statearr_15785 = state_15769;(statearr_15785[10] = inst_15758);
(statearr_15785[7] = inst_15746);
return statearr_15785;
})();var statearr_15786_15804 = state_15769__$1;(statearr_15786_15804[2] = null);
(statearr_15786_15804[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15790 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15790[0] = state_machine__5507__auto__);
(statearr_15790[1] = 1);
return statearr_15790;
});
var state_machine__5507__auto____1 = (function (state_15769){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15769);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15791){if((e15791 instanceof Object))
{var ex__5510__auto__ = e15791;var statearr_15792_15805 = state_15769;(statearr_15792_15805[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15769);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15791;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15806 = state_15769;
state_15769 = G__15806;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15769){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15769);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15793 = f__5522__auto__.call(null);(statearr_15793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15794);
return statearr_15793;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15941 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15911){var state_val_15912 = (state_15911[1]);if((state_val_15912 === 1))
{var inst_15874 = (new Array(n));var inst_15875 = inst_15874;var inst_15876 = 0;var state_15911__$1 = (function (){var statearr_15913 = state_15911;(statearr_15913[7] = inst_15876);
(statearr_15913[8] = inst_15875);
return statearr_15913;
})();var statearr_15914_15942 = state_15911__$1;(statearr_15914_15942[2] = null);
(statearr_15914_15942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 2))
{var state_15911__$1 = state_15911;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15911__$1,4,ch);
} else
{if((state_val_15912 === 3))
{var inst_15909 = (state_15911[2]);var state_15911__$1 = state_15911;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15911__$1,inst_15909);
} else
{if((state_val_15912 === 4))
{var inst_15879 = (state_15911[9]);var inst_15879__$1 = (state_15911[2]);var inst_15880 = (inst_15879__$1 == null);var inst_15881 = cljs.core.not.call(null,inst_15880);var state_15911__$1 = (function (){var statearr_15915 = state_15911;(statearr_15915[9] = inst_15879__$1);
return statearr_15915;
})();if(inst_15881)
{var statearr_15916_15943 = state_15911__$1;(statearr_15916_15943[1] = 5);
} else
{var statearr_15917_15944 = state_15911__$1;(statearr_15917_15944[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 5))
{var inst_15879 = (state_15911[9]);var inst_15884 = (state_15911[10]);var inst_15876 = (state_15911[7]);var inst_15875 = (state_15911[8]);var inst_15883 = (inst_15875[inst_15876] = inst_15879);var inst_15884__$1 = (inst_15876 + 1);var inst_15885 = (inst_15884__$1 < n);var state_15911__$1 = (function (){var statearr_15918 = state_15911;(statearr_15918[11] = inst_15883);
(statearr_15918[10] = inst_15884__$1);
return statearr_15918;
})();if(cljs.core.truth_(inst_15885))
{var statearr_15919_15945 = state_15911__$1;(statearr_15919_15945[1] = 8);
} else
{var statearr_15920_15946 = state_15911__$1;(statearr_15920_15946[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 6))
{var inst_15876 = (state_15911[7]);var inst_15897 = (inst_15876 > 0);var state_15911__$1 = state_15911;if(cljs.core.truth_(inst_15897))
{var statearr_15922_15947 = state_15911__$1;(statearr_15922_15947[1] = 12);
} else
{var statearr_15923_15948 = state_15911__$1;(statearr_15923_15948[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 7))
{var inst_15907 = (state_15911[2]);var state_15911__$1 = state_15911;var statearr_15924_15949 = state_15911__$1;(statearr_15924_15949[2] = inst_15907);
(statearr_15924_15949[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 8))
{var inst_15884 = (state_15911[10]);var inst_15875 = (state_15911[8]);var tmp15921 = inst_15875;var inst_15875__$1 = tmp15921;var inst_15876 = inst_15884;var state_15911__$1 = (function (){var statearr_15925 = state_15911;(statearr_15925[7] = inst_15876);
(statearr_15925[8] = inst_15875__$1);
return statearr_15925;
})();var statearr_15926_15950 = state_15911__$1;(statearr_15926_15950[2] = null);
(statearr_15926_15950[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 9))
{var inst_15875 = (state_15911[8]);var inst_15889 = cljs.core.vec.call(null,inst_15875);var state_15911__$1 = state_15911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15911__$1,11,out,inst_15889);
} else
{if((state_val_15912 === 10))
{var inst_15895 = (state_15911[2]);var state_15911__$1 = state_15911;var statearr_15927_15951 = state_15911__$1;(statearr_15927_15951[2] = inst_15895);
(statearr_15927_15951[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 11))
{var inst_15891 = (state_15911[2]);var inst_15892 = (new Array(n));var inst_15875 = inst_15892;var inst_15876 = 0;var state_15911__$1 = (function (){var statearr_15928 = state_15911;(statearr_15928[12] = inst_15891);
(statearr_15928[7] = inst_15876);
(statearr_15928[8] = inst_15875);
return statearr_15928;
})();var statearr_15929_15952 = state_15911__$1;(statearr_15929_15952[2] = null);
(statearr_15929_15952[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 12))
{var inst_15875 = (state_15911[8]);var inst_15899 = cljs.core.vec.call(null,inst_15875);var state_15911__$1 = state_15911;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15911__$1,15,out,inst_15899);
} else
{if((state_val_15912 === 13))
{var state_15911__$1 = state_15911;var statearr_15930_15953 = state_15911__$1;(statearr_15930_15953[2] = null);
(statearr_15930_15953[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 14))
{var inst_15904 = (state_15911[2]);var inst_15905 = cljs.core.async.close_BANG_.call(null,out);var state_15911__$1 = (function (){var statearr_15931 = state_15911;(statearr_15931[13] = inst_15904);
return statearr_15931;
})();var statearr_15932_15954 = state_15911__$1;(statearr_15932_15954[2] = inst_15905);
(statearr_15932_15954[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15912 === 15))
{var inst_15901 = (state_15911[2]);var state_15911__$1 = state_15911;var statearr_15933_15955 = state_15911__$1;(statearr_15933_15955[2] = inst_15901);
(statearr_15933_15955[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15937 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15937[0] = state_machine__5507__auto__);
(statearr_15937[1] = 1);
return statearr_15937;
});
var state_machine__5507__auto____1 = (function (state_15911){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15911);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15938){if((e15938 instanceof Object))
{var ex__5510__auto__ = e15938;var statearr_15939_15956 = state_15911;(statearr_15939_15956[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15911);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15938;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15957 = state_15911;
state_15911 = G__15957;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15911){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15911);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15940 = f__5522__auto__.call(null);(statearr_15940[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15941);
return statearr_15940;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16100 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16070){var state_val_16071 = (state_16070[1]);if((state_val_16071 === 1))
{var inst_16029 = [];var inst_16030 = inst_16029;var inst_16031 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16070__$1 = (function (){var statearr_16072 = state_16070;(statearr_16072[7] = inst_16031);
(statearr_16072[8] = inst_16030);
return statearr_16072;
})();var statearr_16073_16101 = state_16070__$1;(statearr_16073_16101[2] = null);
(statearr_16073_16101[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 2))
{var state_16070__$1 = state_16070;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16070__$1,4,ch);
} else
{if((state_val_16071 === 3))
{var inst_16068 = (state_16070[2]);var state_16070__$1 = state_16070;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16070__$1,inst_16068);
} else
{if((state_val_16071 === 4))
{var inst_16034 = (state_16070[9]);var inst_16034__$1 = (state_16070[2]);var inst_16035 = (inst_16034__$1 == null);var inst_16036 = cljs.core.not.call(null,inst_16035);var state_16070__$1 = (function (){var statearr_16074 = state_16070;(statearr_16074[9] = inst_16034__$1);
return statearr_16074;
})();if(inst_16036)
{var statearr_16075_16102 = state_16070__$1;(statearr_16075_16102[1] = 5);
} else
{var statearr_16076_16103 = state_16070__$1;(statearr_16076_16103[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 5))
{var inst_16038 = (state_16070[10]);var inst_16031 = (state_16070[7]);var inst_16034 = (state_16070[9]);var inst_16038__$1 = f.call(null,inst_16034);var inst_16039 = cljs.core._EQ_.call(null,inst_16038__$1,inst_16031);var inst_16040 = cljs.core.keyword_identical_QMARK_.call(null,inst_16031,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16041 = (inst_16039) || (inst_16040);var state_16070__$1 = (function (){var statearr_16077 = state_16070;(statearr_16077[10] = inst_16038__$1);
return statearr_16077;
})();if(cljs.core.truth_(inst_16041))
{var statearr_16078_16104 = state_16070__$1;(statearr_16078_16104[1] = 8);
} else
{var statearr_16079_16105 = state_16070__$1;(statearr_16079_16105[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 6))
{var inst_16030 = (state_16070[8]);var inst_16055 = inst_16030.length;var inst_16056 = (inst_16055 > 0);var state_16070__$1 = state_16070;if(cljs.core.truth_(inst_16056))
{var statearr_16081_16106 = state_16070__$1;(statearr_16081_16106[1] = 12);
} else
{var statearr_16082_16107 = state_16070__$1;(statearr_16082_16107[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 7))
{var inst_16066 = (state_16070[2]);var state_16070__$1 = state_16070;var statearr_16083_16108 = state_16070__$1;(statearr_16083_16108[2] = inst_16066);
(statearr_16083_16108[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 8))
{var inst_16038 = (state_16070[10]);var inst_16034 = (state_16070[9]);var inst_16030 = (state_16070[8]);var inst_16043 = inst_16030.push(inst_16034);var tmp16080 = inst_16030;var inst_16030__$1 = tmp16080;var inst_16031 = inst_16038;var state_16070__$1 = (function (){var statearr_16084 = state_16070;(statearr_16084[7] = inst_16031);
(statearr_16084[8] = inst_16030__$1);
(statearr_16084[11] = inst_16043);
return statearr_16084;
})();var statearr_16085_16109 = state_16070__$1;(statearr_16085_16109[2] = null);
(statearr_16085_16109[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 9))
{var inst_16030 = (state_16070[8]);var inst_16046 = cljs.core.vec.call(null,inst_16030);var state_16070__$1 = state_16070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16070__$1,11,out,inst_16046);
} else
{if((state_val_16071 === 10))
{var inst_16053 = (state_16070[2]);var state_16070__$1 = state_16070;var statearr_16086_16110 = state_16070__$1;(statearr_16086_16110[2] = inst_16053);
(statearr_16086_16110[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 11))
{var inst_16038 = (state_16070[10]);var inst_16034 = (state_16070[9]);var inst_16048 = (state_16070[2]);var inst_16049 = [];var inst_16050 = inst_16049.push(inst_16034);var inst_16030 = inst_16049;var inst_16031 = inst_16038;var state_16070__$1 = (function (){var statearr_16087 = state_16070;(statearr_16087[12] = inst_16050);
(statearr_16087[7] = inst_16031);
(statearr_16087[13] = inst_16048);
(statearr_16087[8] = inst_16030);
return statearr_16087;
})();var statearr_16088_16111 = state_16070__$1;(statearr_16088_16111[2] = null);
(statearr_16088_16111[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 12))
{var inst_16030 = (state_16070[8]);var inst_16058 = cljs.core.vec.call(null,inst_16030);var state_16070__$1 = state_16070;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16070__$1,15,out,inst_16058);
} else
{if((state_val_16071 === 13))
{var state_16070__$1 = state_16070;var statearr_16089_16112 = state_16070__$1;(statearr_16089_16112[2] = null);
(statearr_16089_16112[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 14))
{var inst_16063 = (state_16070[2]);var inst_16064 = cljs.core.async.close_BANG_.call(null,out);var state_16070__$1 = (function (){var statearr_16090 = state_16070;(statearr_16090[14] = inst_16063);
return statearr_16090;
})();var statearr_16091_16113 = state_16070__$1;(statearr_16091_16113[2] = inst_16064);
(statearr_16091_16113[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16071 === 15))
{var inst_16060 = (state_16070[2]);var state_16070__$1 = state_16070;var statearr_16092_16114 = state_16070__$1;(statearr_16092_16114[2] = inst_16060);
(statearr_16092_16114[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16096 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16096[0] = state_machine__5507__auto__);
(statearr_16096[1] = 1);
return statearr_16096;
});
var state_machine__5507__auto____1 = (function (state_16070){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16070);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16097){if((e16097 instanceof Object))
{var ex__5510__auto__ = e16097;var statearr_16098_16115 = state_16070;(statearr_16098_16115[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16070);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16097;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16116 = state_16070;
state_16070 = G__16116;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16070){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16070);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16099 = f__5522__auto__.call(null);(statearr_16099[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16100);
return statearr_16099;
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