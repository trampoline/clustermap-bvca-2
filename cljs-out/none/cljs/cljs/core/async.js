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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13106 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13106 = (function (f,fn_handler,meta13107){
this.f = f;
this.fn_handler = fn_handler;
this.meta13107 = meta13107;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13106.cljs$lang$type = true;
cljs.core.async.t13106.cljs$lang$ctorStr = "cljs.core.async/t13106";
cljs.core.async.t13106.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13106");
});
cljs.core.async.t13106.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13106.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13106.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13108){var self__ = this;
var _13108__$1 = this;return self__.meta13107;
});
cljs.core.async.t13106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13108,meta13107__$1){var self__ = this;
var _13108__$1 = this;return (new cljs.core.async.t13106(self__.f,self__.fn_handler,meta13107__$1));
});
cljs.core.async.__GT_t13106 = (function __GT_t13106(f__$1,fn_handler__$1,meta13107){return (new cljs.core.async.t13106(f__$1,fn_handler__$1,meta13107));
});
}
return (new cljs.core.async.t13106(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13110 = buff;if(G__13110)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13110.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13110.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13110);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13110);
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
{var val_13111 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13111);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13111);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13112 = n;var x_13113 = 0;while(true){
if((x_13113 < n__4248__auto___13112))
{(a[x_13113] = 0);
{
var G__13114 = (x_13113 + 1);
x_13113 = G__13114;
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
var G__13115 = (i + 1);
i = G__13115;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13119 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13119 = (function (flag,alt_flag,meta13120){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13120 = meta13120;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13119.cljs$lang$type = true;
cljs.core.async.t13119.cljs$lang$ctorStr = "cljs.core.async/t13119";
cljs.core.async.t13119.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13119");
});
cljs.core.async.t13119.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13119.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13119.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13119.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13121){var self__ = this;
var _13121__$1 = this;return self__.meta13120;
});
cljs.core.async.t13119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13121,meta13120__$1){var self__ = this;
var _13121__$1 = this;return (new cljs.core.async.t13119(self__.flag,self__.alt_flag,meta13120__$1));
});
cljs.core.async.__GT_t13119 = (function __GT_t13119(flag__$1,alt_flag__$1,meta13120){return (new cljs.core.async.t13119(flag__$1,alt_flag__$1,meta13120));
});
}
return (new cljs.core.async.t13119(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13125 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13125 = (function (cb,flag,alt_handler,meta13126){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13126 = meta13126;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13125.cljs$lang$type = true;
cljs.core.async.t13125.cljs$lang$ctorStr = "cljs.core.async/t13125";
cljs.core.async.t13125.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13125");
});
cljs.core.async.t13125.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13125.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13127){var self__ = this;
var _13127__$1 = this;return self__.meta13126;
});
cljs.core.async.t13125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13127,meta13126__$1){var self__ = this;
var _13127__$1 = this;return (new cljs.core.async.t13125(self__.cb,self__.flag,self__.alt_handler,meta13126__$1));
});
cljs.core.async.__GT_t13125 = (function __GT_t13125(cb__$1,flag__$1,alt_handler__$1,meta13126){return (new cljs.core.async.t13125(cb__$1,flag__$1,alt_handler__$1,meta13126));
});
}
return (new cljs.core.async.t13125(cb,flag,alt_handler,null));
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
return (function (p1__13128_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13128_SHARP_,port], null));
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
var G__13129 = (i + 1);
i = G__13129;
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
var alts_BANG___delegate = function (ports,p__13130){var map__13132 = p__13130;var map__13132__$1 = ((cljs.core.seq_QMARK_.call(null,map__13132))?cljs.core.apply.call(null,cljs.core.hash_map,map__13132):map__13132);var opts = map__13132__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13130 = null;if (arguments.length > 1) {
  p__13130 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13130);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13133){
var ports = cljs.core.first(arglist__13133);
var p__13130 = cljs.core.rest(arglist__13133);
return alts_BANG___delegate(ports,p__13130);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13141 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13141 = (function (ch,f,map_LT_,meta13142){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13142 = meta13142;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13141.cljs$lang$type = true;
cljs.core.async.t13141.cljs$lang$ctorStr = "cljs.core.async/t13141";
cljs.core.async.t13141.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13141");
});
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13144 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13144 = (function (fn1,_,meta13142,ch,f,map_LT_,meta13145){
this.fn1 = fn1;
this._ = _;
this.meta13142 = meta13142;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13145 = meta13145;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13144.cljs$lang$type = true;
cljs.core.async.t13144.cljs$lang$ctorStr = "cljs.core.async/t13144";
cljs.core.async.t13144.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13144");
});
cljs.core.async.t13144.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13144.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13144.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13144.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13134_SHARP_){return f1.call(null,(((p1__13134_SHARP_ == null))?null:self__.f.call(null,p1__13134_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13146){var self__ = this;
var _13146__$1 = this;return self__.meta13145;
});
cljs.core.async.t13144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13146,meta13145__$1){var self__ = this;
var _13146__$1 = this;return (new cljs.core.async.t13144(self__.fn1,self__._,self__.meta13142,self__.ch,self__.f,self__.map_LT_,meta13145__$1));
});
cljs.core.async.__GT_t13144 = (function __GT_t13144(fn1__$1,___$2,meta13142__$1,ch__$2,f__$2,map_LT___$2,meta13145){return (new cljs.core.async.t13144(fn1__$1,___$2,meta13142__$1,ch__$2,f__$2,map_LT___$2,meta13145));
});
}
return (new cljs.core.async.t13144(fn1,___$1,self__.meta13142,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13141.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13143){var self__ = this;
var _13143__$1 = this;return self__.meta13142;
});
cljs.core.async.t13141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13143,meta13142__$1){var self__ = this;
var _13143__$1 = this;return (new cljs.core.async.t13141(self__.ch,self__.f,self__.map_LT_,meta13142__$1));
});
cljs.core.async.__GT_t13141 = (function __GT_t13141(ch__$1,f__$1,map_LT___$1,meta13142){return (new cljs.core.async.t13141(ch__$1,f__$1,map_LT___$1,meta13142));
});
}
return (new cljs.core.async.t13141(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13150 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13150 = (function (ch,f,map_GT_,meta13151){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13151 = meta13151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13150.cljs$lang$type = true;
cljs.core.async.t13150.cljs$lang$ctorStr = "cljs.core.async/t13150";
cljs.core.async.t13150.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13150");
});
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13152){var self__ = this;
var _13152__$1 = this;return self__.meta13151;
});
cljs.core.async.t13150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13152,meta13151__$1){var self__ = this;
var _13152__$1 = this;return (new cljs.core.async.t13150(self__.ch,self__.f,self__.map_GT_,meta13151__$1));
});
cljs.core.async.__GT_t13150 = (function __GT_t13150(ch__$1,f__$1,map_GT___$1,meta13151){return (new cljs.core.async.t13150(ch__$1,f__$1,map_GT___$1,meta13151));
});
}
return (new cljs.core.async.t13150(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13156 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13156 = (function (ch,p,filter_GT_,meta13157){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13157 = meta13157;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13156.cljs$lang$type = true;
cljs.core.async.t13156.cljs$lang$ctorStr = "cljs.core.async/t13156";
cljs.core.async.t13156.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13156");
});
cljs.core.async.t13156.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13156.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13156.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13156.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13156.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13156.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13158){var self__ = this;
var _13158__$1 = this;return self__.meta13157;
});
cljs.core.async.t13156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13158,meta13157__$1){var self__ = this;
var _13158__$1 = this;return (new cljs.core.async.t13156(self__.ch,self__.p,self__.filter_GT_,meta13157__$1));
});
cljs.core.async.__GT_t13156 = (function __GT_t13156(ch__$1,p__$1,filter_GT___$1,meta13157){return (new cljs.core.async.t13156(ch__$1,p__$1,filter_GT___$1,meta13157));
});
}
return (new cljs.core.async.t13156(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13241 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13220){var state_val_13221 = (state_13220[1]);if((state_val_13221 === 1))
{var state_13220__$1 = state_13220;var statearr_13222_13242 = state_13220__$1;(statearr_13222_13242[2] = null);
(statearr_13222_13242[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13221 === 2))
{var state_13220__$1 = state_13220;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13220__$1,4,ch);
} else
{if((state_val_13221 === 3))
{var inst_13218 = (state_13220[2]);var state_13220__$1 = state_13220;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13220__$1,inst_13218);
} else
{if((state_val_13221 === 4))
{var inst_13202 = (state_13220[7]);var inst_13202__$1 = (state_13220[2]);var inst_13203 = (inst_13202__$1 == null);var state_13220__$1 = (function (){var statearr_13223 = state_13220;(statearr_13223[7] = inst_13202__$1);
return statearr_13223;
})();if(cljs.core.truth_(inst_13203))
{var statearr_13224_13243 = state_13220__$1;(statearr_13224_13243[1] = 5);
} else
{var statearr_13225_13244 = state_13220__$1;(statearr_13225_13244[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13221 === 5))
{var inst_13205 = cljs.core.async.close_BANG_.call(null,out);var state_13220__$1 = state_13220;var statearr_13226_13245 = state_13220__$1;(statearr_13226_13245[2] = inst_13205);
(statearr_13226_13245[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13221 === 6))
{var inst_13202 = (state_13220[7]);var inst_13207 = p.call(null,inst_13202);var state_13220__$1 = state_13220;if(cljs.core.truth_(inst_13207))
{var statearr_13227_13246 = state_13220__$1;(statearr_13227_13246[1] = 8);
} else
{var statearr_13228_13247 = state_13220__$1;(statearr_13228_13247[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13221 === 7))
{var inst_13216 = (state_13220[2]);var state_13220__$1 = state_13220;var statearr_13229_13248 = state_13220__$1;(statearr_13229_13248[2] = inst_13216);
(statearr_13229_13248[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13221 === 8))
{var inst_13202 = (state_13220[7]);var state_13220__$1 = state_13220;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13220__$1,11,out,inst_13202);
} else
{if((state_val_13221 === 9))
{var state_13220__$1 = state_13220;var statearr_13230_13249 = state_13220__$1;(statearr_13230_13249[2] = null);
(statearr_13230_13249[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13221 === 10))
{var inst_13213 = (state_13220[2]);var state_13220__$1 = (function (){var statearr_13231 = state_13220;(statearr_13231[8] = inst_13213);
return statearr_13231;
})();var statearr_13232_13250 = state_13220__$1;(statearr_13232_13250[2] = null);
(statearr_13232_13250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13221 === 11))
{var inst_13210 = (state_13220[2]);var state_13220__$1 = state_13220;var statearr_13233_13251 = state_13220__$1;(statearr_13233_13251[2] = inst_13210);
(statearr_13233_13251[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13237 = [null,null,null,null,null,null,null,null,null];(statearr_13237[0] = state_machine__5507__auto__);
(statearr_13237[1] = 1);
return statearr_13237;
});
var state_machine__5507__auto____1 = (function (state_13220){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13220);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13238){if((e13238 instanceof Object))
{var ex__5510__auto__ = e13238;var statearr_13239_13252 = state_13220;(statearr_13239_13252[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13220);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13238;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13253 = state_13220;
state_13220 = G__13253;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13220){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13220);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13240 = f__5522__auto__.call(null);(statearr_13240[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13241);
return statearr_13240;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13405){var state_val_13406 = (state_13405[1]);if((state_val_13406 === 1))
{var state_13405__$1 = state_13405;var statearr_13407_13444 = state_13405__$1;(statearr_13407_13444[2] = null);
(statearr_13407_13444[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 2))
{var state_13405__$1 = state_13405;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13405__$1,4,in$);
} else
{if((state_val_13406 === 3))
{var inst_13403 = (state_13405[2]);var state_13405__$1 = state_13405;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13405__$1,inst_13403);
} else
{if((state_val_13406 === 4))
{var inst_13351 = (state_13405[7]);var inst_13351__$1 = (state_13405[2]);var inst_13352 = (inst_13351__$1 == null);var state_13405__$1 = (function (){var statearr_13408 = state_13405;(statearr_13408[7] = inst_13351__$1);
return statearr_13408;
})();if(cljs.core.truth_(inst_13352))
{var statearr_13409_13445 = state_13405__$1;(statearr_13409_13445[1] = 5);
} else
{var statearr_13410_13446 = state_13405__$1;(statearr_13410_13446[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 5))
{var inst_13354 = cljs.core.async.close_BANG_.call(null,out);var state_13405__$1 = state_13405;var statearr_13411_13447 = state_13405__$1;(statearr_13411_13447[2] = inst_13354);
(statearr_13411_13447[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 6))
{var inst_13351 = (state_13405[7]);var inst_13356 = f.call(null,inst_13351);var inst_13361 = cljs.core.seq.call(null,inst_13356);var inst_13362 = inst_13361;var inst_13363 = null;var inst_13364 = 0;var inst_13365 = 0;var state_13405__$1 = (function (){var statearr_13412 = state_13405;(statearr_13412[8] = inst_13364);
(statearr_13412[9] = inst_13365);
(statearr_13412[10] = inst_13362);
(statearr_13412[11] = inst_13363);
return statearr_13412;
})();var statearr_13413_13448 = state_13405__$1;(statearr_13413_13448[2] = null);
(statearr_13413_13448[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 7))
{var inst_13401 = (state_13405[2]);var state_13405__$1 = state_13405;var statearr_13414_13449 = state_13405__$1;(statearr_13414_13449[2] = inst_13401);
(statearr_13414_13449[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 8))
{var inst_13364 = (state_13405[8]);var inst_13365 = (state_13405[9]);var inst_13367 = (inst_13365 < inst_13364);var inst_13368 = inst_13367;var state_13405__$1 = state_13405;if(cljs.core.truth_(inst_13368))
{var statearr_13415_13450 = state_13405__$1;(statearr_13415_13450[1] = 10);
} else
{var statearr_13416_13451 = state_13405__$1;(statearr_13416_13451[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 9))
{var inst_13398 = (state_13405[2]);var state_13405__$1 = (function (){var statearr_13417 = state_13405;(statearr_13417[12] = inst_13398);
return statearr_13417;
})();var statearr_13418_13452 = state_13405__$1;(statearr_13418_13452[2] = null);
(statearr_13418_13452[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 10))
{var inst_13365 = (state_13405[9]);var inst_13363 = (state_13405[11]);var inst_13370 = cljs.core._nth.call(null,inst_13363,inst_13365);var state_13405__$1 = state_13405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13405__$1,13,out,inst_13370);
} else
{if((state_val_13406 === 11))
{var inst_13362 = (state_13405[10]);var inst_13376 = (state_13405[13]);var inst_13376__$1 = cljs.core.seq.call(null,inst_13362);var state_13405__$1 = (function (){var statearr_13422 = state_13405;(statearr_13422[13] = inst_13376__$1);
return statearr_13422;
})();if(inst_13376__$1)
{var statearr_13423_13453 = state_13405__$1;(statearr_13423_13453[1] = 14);
} else
{var statearr_13424_13454 = state_13405__$1;(statearr_13424_13454[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 12))
{var inst_13396 = (state_13405[2]);var state_13405__$1 = state_13405;var statearr_13425_13455 = state_13405__$1;(statearr_13425_13455[2] = inst_13396);
(statearr_13425_13455[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 13))
{var inst_13364 = (state_13405[8]);var inst_13365 = (state_13405[9]);var inst_13362 = (state_13405[10]);var inst_13363 = (state_13405[11]);var inst_13372 = (state_13405[2]);var inst_13373 = (inst_13365 + 1);var tmp13419 = inst_13364;var tmp13420 = inst_13362;var tmp13421 = inst_13363;var inst_13362__$1 = tmp13420;var inst_13363__$1 = tmp13421;var inst_13364__$1 = tmp13419;var inst_13365__$1 = inst_13373;var state_13405__$1 = (function (){var statearr_13426 = state_13405;(statearr_13426[8] = inst_13364__$1);
(statearr_13426[9] = inst_13365__$1);
(statearr_13426[10] = inst_13362__$1);
(statearr_13426[11] = inst_13363__$1);
(statearr_13426[14] = inst_13372);
return statearr_13426;
})();var statearr_13427_13456 = state_13405__$1;(statearr_13427_13456[2] = null);
(statearr_13427_13456[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 14))
{var inst_13376 = (state_13405[13]);var inst_13378 = cljs.core.chunked_seq_QMARK_.call(null,inst_13376);var state_13405__$1 = state_13405;if(inst_13378)
{var statearr_13428_13457 = state_13405__$1;(statearr_13428_13457[1] = 17);
} else
{var statearr_13429_13458 = state_13405__$1;(statearr_13429_13458[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 15))
{var state_13405__$1 = state_13405;var statearr_13430_13459 = state_13405__$1;(statearr_13430_13459[2] = null);
(statearr_13430_13459[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 16))
{var inst_13394 = (state_13405[2]);var state_13405__$1 = state_13405;var statearr_13431_13460 = state_13405__$1;(statearr_13431_13460[2] = inst_13394);
(statearr_13431_13460[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 17))
{var inst_13376 = (state_13405[13]);var inst_13380 = cljs.core.chunk_first.call(null,inst_13376);var inst_13381 = cljs.core.chunk_rest.call(null,inst_13376);var inst_13382 = cljs.core.count.call(null,inst_13380);var inst_13362 = inst_13381;var inst_13363 = inst_13380;var inst_13364 = inst_13382;var inst_13365 = 0;var state_13405__$1 = (function (){var statearr_13432 = state_13405;(statearr_13432[8] = inst_13364);
(statearr_13432[9] = inst_13365);
(statearr_13432[10] = inst_13362);
(statearr_13432[11] = inst_13363);
return statearr_13432;
})();var statearr_13433_13461 = state_13405__$1;(statearr_13433_13461[2] = null);
(statearr_13433_13461[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 18))
{var inst_13376 = (state_13405[13]);var inst_13385 = cljs.core.first.call(null,inst_13376);var state_13405__$1 = state_13405;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13405__$1,20,out,inst_13385);
} else
{if((state_val_13406 === 19))
{var inst_13391 = (state_13405[2]);var state_13405__$1 = state_13405;var statearr_13434_13462 = state_13405__$1;(statearr_13434_13462[2] = inst_13391);
(statearr_13434_13462[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13406 === 20))
{var inst_13376 = (state_13405[13]);var inst_13387 = (state_13405[2]);var inst_13388 = cljs.core.next.call(null,inst_13376);var inst_13362 = inst_13388;var inst_13363 = null;var inst_13364 = 0;var inst_13365 = 0;var state_13405__$1 = (function (){var statearr_13435 = state_13405;(statearr_13435[8] = inst_13364);
(statearr_13435[9] = inst_13365);
(statearr_13435[10] = inst_13362);
(statearr_13435[11] = inst_13363);
(statearr_13435[15] = inst_13387);
return statearr_13435;
})();var statearr_13436_13463 = state_13405__$1;(statearr_13436_13463[2] = null);
(statearr_13436_13463[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13440[0] = state_machine__5507__auto__);
(statearr_13440[1] = 1);
return statearr_13440;
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
}catch (e13441){if((e13441 instanceof Object))
{var ex__5510__auto__ = e13441;var statearr_13442_13464 = state_13405;(statearr_13442_13464[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13405);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13441;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13465 = state_13405;
state_13405 = G__13465;
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
})();var state__5523__auto__ = (function (){var statearr_13443 = f__5522__auto__.call(null);(statearr_13443[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13443;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13546 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13525){var state_val_13526 = (state_13525[1]);if((state_val_13526 === 1))
{var state_13525__$1 = state_13525;var statearr_13527_13547 = state_13525__$1;(statearr_13527_13547[2] = null);
(statearr_13527_13547[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 2))
{var state_13525__$1 = state_13525;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13525__$1,4,from);
} else
{if((state_val_13526 === 3))
{var inst_13523 = (state_13525[2]);var state_13525__$1 = state_13525;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13525__$1,inst_13523);
} else
{if((state_val_13526 === 4))
{var inst_13508 = (state_13525[7]);var inst_13508__$1 = (state_13525[2]);var inst_13509 = (inst_13508__$1 == null);var state_13525__$1 = (function (){var statearr_13528 = state_13525;(statearr_13528[7] = inst_13508__$1);
return statearr_13528;
})();if(cljs.core.truth_(inst_13509))
{var statearr_13529_13548 = state_13525__$1;(statearr_13529_13548[1] = 5);
} else
{var statearr_13530_13549 = state_13525__$1;(statearr_13530_13549[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 5))
{var state_13525__$1 = state_13525;if(cljs.core.truth_(close_QMARK_))
{var statearr_13531_13550 = state_13525__$1;(statearr_13531_13550[1] = 8);
} else
{var statearr_13532_13551 = state_13525__$1;(statearr_13532_13551[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 6))
{var inst_13508 = (state_13525[7]);var state_13525__$1 = state_13525;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13525__$1,11,to,inst_13508);
} else
{if((state_val_13526 === 7))
{var inst_13521 = (state_13525[2]);var state_13525__$1 = state_13525;var statearr_13533_13552 = state_13525__$1;(statearr_13533_13552[2] = inst_13521);
(statearr_13533_13552[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 8))
{var inst_13512 = cljs.core.async.close_BANG_.call(null,to);var state_13525__$1 = state_13525;var statearr_13534_13553 = state_13525__$1;(statearr_13534_13553[2] = inst_13512);
(statearr_13534_13553[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 9))
{var state_13525__$1 = state_13525;var statearr_13535_13554 = state_13525__$1;(statearr_13535_13554[2] = null);
(statearr_13535_13554[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 10))
{var inst_13515 = (state_13525[2]);var state_13525__$1 = state_13525;var statearr_13536_13555 = state_13525__$1;(statearr_13536_13555[2] = inst_13515);
(statearr_13536_13555[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13526 === 11))
{var inst_13518 = (state_13525[2]);var state_13525__$1 = (function (){var statearr_13537 = state_13525;(statearr_13537[8] = inst_13518);
return statearr_13537;
})();var statearr_13538_13556 = state_13525__$1;(statearr_13538_13556[2] = null);
(statearr_13538_13556[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13542 = [null,null,null,null,null,null,null,null,null];(statearr_13542[0] = state_machine__5507__auto__);
(statearr_13542[1] = 1);
return statearr_13542;
});
var state_machine__5507__auto____1 = (function (state_13525){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13525);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13543){if((e13543 instanceof Object))
{var ex__5510__auto__ = e13543;var statearr_13544_13557 = state_13525;(statearr_13544_13557[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13525);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13543;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13558 = state_13525;
state_13525 = G__13558;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13525){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13525);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13545 = f__5522__auto__.call(null);(statearr_13545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13546);
return statearr_13545;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13645 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13623){var state_val_13624 = (state_13623[1]);if((state_val_13624 === 1))
{var state_13623__$1 = state_13623;var statearr_13625_13646 = state_13623__$1;(statearr_13625_13646[2] = null);
(statearr_13625_13646[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13624 === 2))
{var state_13623__$1 = state_13623;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13623__$1,4,ch);
} else
{if((state_val_13624 === 3))
{var inst_13621 = (state_13623[2]);var state_13623__$1 = state_13623;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13623__$1,inst_13621);
} else
{if((state_val_13624 === 4))
{var inst_13604 = (state_13623[7]);var inst_13604__$1 = (state_13623[2]);var inst_13605 = (inst_13604__$1 == null);var state_13623__$1 = (function (){var statearr_13626 = state_13623;(statearr_13626[7] = inst_13604__$1);
return statearr_13626;
})();if(cljs.core.truth_(inst_13605))
{var statearr_13627_13647 = state_13623__$1;(statearr_13627_13647[1] = 5);
} else
{var statearr_13628_13648 = state_13623__$1;(statearr_13628_13648[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13624 === 5))
{var inst_13607 = cljs.core.async.close_BANG_.call(null,tc);var inst_13608 = cljs.core.async.close_BANG_.call(null,fc);var state_13623__$1 = (function (){var statearr_13629 = state_13623;(statearr_13629[8] = inst_13607);
return statearr_13629;
})();var statearr_13630_13649 = state_13623__$1;(statearr_13630_13649[2] = inst_13608);
(statearr_13630_13649[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13624 === 6))
{var inst_13604 = (state_13623[7]);var inst_13610 = p.call(null,inst_13604);var state_13623__$1 = state_13623;if(cljs.core.truth_(inst_13610))
{var statearr_13631_13650 = state_13623__$1;(statearr_13631_13650[1] = 9);
} else
{var statearr_13632_13651 = state_13623__$1;(statearr_13632_13651[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13624 === 7))
{var inst_13619 = (state_13623[2]);var state_13623__$1 = state_13623;var statearr_13633_13652 = state_13623__$1;(statearr_13633_13652[2] = inst_13619);
(statearr_13633_13652[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13624 === 8))
{var inst_13616 = (state_13623[2]);var state_13623__$1 = (function (){var statearr_13634 = state_13623;(statearr_13634[9] = inst_13616);
return statearr_13634;
})();var statearr_13635_13653 = state_13623__$1;(statearr_13635_13653[2] = null);
(statearr_13635_13653[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13624 === 9))
{var state_13623__$1 = state_13623;var statearr_13636_13654 = state_13623__$1;(statearr_13636_13654[2] = tc);
(statearr_13636_13654[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13624 === 10))
{var state_13623__$1 = state_13623;var statearr_13637_13655 = state_13623__$1;(statearr_13637_13655[2] = fc);
(statearr_13637_13655[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13624 === 11))
{var inst_13604 = (state_13623[7]);var inst_13614 = (state_13623[2]);var state_13623__$1 = state_13623;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13623__$1,8,inst_13614,inst_13604);
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
var state_machine__5507__auto____0 = (function (){var statearr_13641 = [null,null,null,null,null,null,null,null,null,null];(statearr_13641[0] = state_machine__5507__auto__);
(statearr_13641[1] = 1);
return statearr_13641;
});
var state_machine__5507__auto____1 = (function (state_13623){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13623);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13642){if((e13642 instanceof Object))
{var ex__5510__auto__ = e13642;var statearr_13643_13656 = state_13623;(statearr_13643_13656[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13623);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13642;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13657 = state_13623;
state_13623 = G__13657;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13623){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13623);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13644 = f__5522__auto__.call(null);(statearr_13644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13645);
return statearr_13644;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13704){var state_val_13705 = (state_13704[1]);if((state_val_13705 === 7))
{var inst_13700 = (state_13704[2]);var state_13704__$1 = state_13704;var statearr_13706_13722 = state_13704__$1;(statearr_13706_13722[2] = inst_13700);
(statearr_13706_13722[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 6))
{var inst_13693 = (state_13704[7]);var inst_13690 = (state_13704[8]);var inst_13697 = f.call(null,inst_13690,inst_13693);var inst_13690__$1 = inst_13697;var state_13704__$1 = (function (){var statearr_13707 = state_13704;(statearr_13707[8] = inst_13690__$1);
return statearr_13707;
})();var statearr_13708_13723 = state_13704__$1;(statearr_13708_13723[2] = null);
(statearr_13708_13723[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 5))
{var inst_13690 = (state_13704[8]);var state_13704__$1 = state_13704;var statearr_13709_13724 = state_13704__$1;(statearr_13709_13724[2] = inst_13690);
(statearr_13709_13724[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 4))
{var inst_13693 = (state_13704[7]);var inst_13693__$1 = (state_13704[2]);var inst_13694 = (inst_13693__$1 == null);var state_13704__$1 = (function (){var statearr_13710 = state_13704;(statearr_13710[7] = inst_13693__$1);
return statearr_13710;
})();if(cljs.core.truth_(inst_13694))
{var statearr_13711_13725 = state_13704__$1;(statearr_13711_13725[1] = 5);
} else
{var statearr_13712_13726 = state_13704__$1;(statearr_13712_13726[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13705 === 3))
{var inst_13702 = (state_13704[2]);var state_13704__$1 = state_13704;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13704__$1,inst_13702);
} else
{if((state_val_13705 === 2))
{var state_13704__$1 = state_13704;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13704__$1,4,ch);
} else
{if((state_val_13705 === 1))
{var inst_13690 = init;var state_13704__$1 = (function (){var statearr_13713 = state_13704;(statearr_13713[8] = inst_13690);
return statearr_13713;
})();var statearr_13714_13727 = state_13704__$1;(statearr_13714_13727[2] = null);
(statearr_13714_13727[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13718 = [null,null,null,null,null,null,null,null,null];(statearr_13718[0] = state_machine__5507__auto__);
(statearr_13718[1] = 1);
return statearr_13718;
});
var state_machine__5507__auto____1 = (function (state_13704){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13704);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13719){if((e13719 instanceof Object))
{var ex__5510__auto__ = e13719;var statearr_13720_13728 = state_13704;(statearr_13720_13728[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13704);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13719;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13729 = state_13704;
state_13704 = G__13729;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13704){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13704);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13721 = f__5522__auto__.call(null);(statearr_13721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13721;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13791){var state_val_13792 = (state_13791[1]);if((state_val_13792 === 1))
{var inst_13771 = cljs.core.seq.call(null,coll);var inst_13772 = inst_13771;var state_13791__$1 = (function (){var statearr_13793 = state_13791;(statearr_13793[7] = inst_13772);
return statearr_13793;
})();var statearr_13794_13812 = state_13791__$1;(statearr_13794_13812[2] = null);
(statearr_13794_13812[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 2))
{var inst_13772 = (state_13791[7]);var state_13791__$1 = state_13791;if(cljs.core.truth_(inst_13772))
{var statearr_13795_13813 = state_13791__$1;(statearr_13795_13813[1] = 4);
} else
{var statearr_13796_13814 = state_13791__$1;(statearr_13796_13814[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 3))
{var inst_13789 = (state_13791[2]);var state_13791__$1 = state_13791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13791__$1,inst_13789);
} else
{if((state_val_13792 === 4))
{var inst_13772 = (state_13791[7]);var inst_13775 = cljs.core.first.call(null,inst_13772);var state_13791__$1 = state_13791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13791__$1,7,ch,inst_13775);
} else
{if((state_val_13792 === 5))
{var state_13791__$1 = state_13791;if(cljs.core.truth_(close_QMARK_))
{var statearr_13797_13815 = state_13791__$1;(statearr_13797_13815[1] = 8);
} else
{var statearr_13798_13816 = state_13791__$1;(statearr_13798_13816[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 6))
{var inst_13787 = (state_13791[2]);var state_13791__$1 = state_13791;var statearr_13799_13817 = state_13791__$1;(statearr_13799_13817[2] = inst_13787);
(statearr_13799_13817[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 7))
{var inst_13772 = (state_13791[7]);var inst_13777 = (state_13791[2]);var inst_13778 = cljs.core.next.call(null,inst_13772);var inst_13772__$1 = inst_13778;var state_13791__$1 = (function (){var statearr_13800 = state_13791;(statearr_13800[7] = inst_13772__$1);
(statearr_13800[8] = inst_13777);
return statearr_13800;
})();var statearr_13801_13818 = state_13791__$1;(statearr_13801_13818[2] = null);
(statearr_13801_13818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 8))
{var inst_13782 = cljs.core.async.close_BANG_.call(null,ch);var state_13791__$1 = state_13791;var statearr_13802_13819 = state_13791__$1;(statearr_13802_13819[2] = inst_13782);
(statearr_13802_13819[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 9))
{var state_13791__$1 = state_13791;var statearr_13803_13820 = state_13791__$1;(statearr_13803_13820[2] = null);
(statearr_13803_13820[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13792 === 10))
{var inst_13785 = (state_13791[2]);var state_13791__$1 = state_13791;var statearr_13804_13821 = state_13791__$1;(statearr_13804_13821[2] = inst_13785);
(statearr_13804_13821[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13808 = [null,null,null,null,null,null,null,null,null];(statearr_13808[0] = state_machine__5507__auto__);
(statearr_13808[1] = 1);
return statearr_13808;
});
var state_machine__5507__auto____1 = (function (state_13791){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13791);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13809){if((e13809 instanceof Object))
{var ex__5510__auto__ = e13809;var statearr_13810_13822 = state_13791;(statearr_13810_13822[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13791);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13809;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13823 = state_13791;
state_13791 = G__13823;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13791){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13811 = f__5522__auto__.call(null);(statearr_13811[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13811;
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
cljs.core.async.Mux = (function (){var obj13825 = {};return obj13825;
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
cljs.core.async.Mult = (function (){var obj13827 = {};return obj13827;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14051 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14051 = (function (cs,ch,mult,meta14052){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14052 = meta14052;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14051.cljs$lang$type = true;
cljs.core.async.t14051.cljs$lang$ctorStr = "cljs.core.async/t14051";
cljs.core.async.t14051.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14051");
});})(cs))
;
cljs.core.async.t14051.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14051.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14051.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14051.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14051.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14051.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14051.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14053){var self__ = this;
var _14053__$1 = this;return self__.meta14052;
});})(cs))
;
cljs.core.async.t14051.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14053,meta14052__$1){var self__ = this;
var _14053__$1 = this;return (new cljs.core.async.t14051(self__.cs,self__.ch,self__.mult,meta14052__$1));
});})(cs))
;
cljs.core.async.__GT_t14051 = ((function (cs){
return (function __GT_t14051(cs__$1,ch__$1,mult__$1,meta14052){return (new cljs.core.async.t14051(cs__$1,ch__$1,mult__$1,meta14052));
});})(cs))
;
}
return (new cljs.core.async.t14051(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14274 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14188){var state_val_14189 = (state_14188[1]);if((state_val_14189 === 32))
{var inst_14132 = (state_14188[7]);var inst_14056 = (state_14188[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14188,31,Object,null,30);var inst_14139 = cljs.core.async.put_BANG_.call(null,inst_14132,inst_14056,done);var state_14188__$1 = state_14188;var statearr_14190_14275 = state_14188__$1;(statearr_14190_14275[2] = inst_14139);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14188__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 1))
{var state_14188__$1 = state_14188;var statearr_14191_14276 = state_14188__$1;(statearr_14191_14276[2] = null);
(statearr_14191_14276[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 33))
{var inst_14145 = (state_14188[9]);var inst_14147 = cljs.core.chunked_seq_QMARK_.call(null,inst_14145);var state_14188__$1 = state_14188;if(inst_14147)
{var statearr_14192_14277 = state_14188__$1;(statearr_14192_14277[1] = 36);
} else
{var statearr_14193_14278 = state_14188__$1;(statearr_14193_14278[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 2))
{var state_14188__$1 = state_14188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14188__$1,4,ch);
} else
{if((state_val_14189 === 34))
{var state_14188__$1 = state_14188;var statearr_14194_14279 = state_14188__$1;(statearr_14194_14279[2] = null);
(statearr_14194_14279[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 3))
{var inst_14186 = (state_14188[2]);var state_14188__$1 = state_14188;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14188__$1,inst_14186);
} else
{if((state_val_14189 === 35))
{var inst_14170 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14195_14280 = state_14188__$1;(statearr_14195_14280[2] = inst_14170);
(statearr_14195_14280[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 4))
{var inst_14056 = (state_14188[8]);var inst_14056__$1 = (state_14188[2]);var inst_14057 = (inst_14056__$1 == null);var state_14188__$1 = (function (){var statearr_14196 = state_14188;(statearr_14196[8] = inst_14056__$1);
return statearr_14196;
})();if(cljs.core.truth_(inst_14057))
{var statearr_14197_14281 = state_14188__$1;(statearr_14197_14281[1] = 5);
} else
{var statearr_14198_14282 = state_14188__$1;(statearr_14198_14282[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 36))
{var inst_14145 = (state_14188[9]);var inst_14149 = cljs.core.chunk_first.call(null,inst_14145);var inst_14150 = cljs.core.chunk_rest.call(null,inst_14145);var inst_14151 = cljs.core.count.call(null,inst_14149);var inst_14124 = inst_14150;var inst_14125 = inst_14149;var inst_14126 = inst_14151;var inst_14127 = 0;var state_14188__$1 = (function (){var statearr_14199 = state_14188;(statearr_14199[10] = inst_14124);
(statearr_14199[11] = inst_14127);
(statearr_14199[12] = inst_14126);
(statearr_14199[13] = inst_14125);
return statearr_14199;
})();var statearr_14200_14283 = state_14188__$1;(statearr_14200_14283[2] = null);
(statearr_14200_14283[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 5))
{var inst_14063 = cljs.core.deref.call(null,cs);var inst_14064 = cljs.core.seq.call(null,inst_14063);var inst_14065 = inst_14064;var inst_14066 = null;var inst_14067 = 0;var inst_14068 = 0;var state_14188__$1 = (function (){var statearr_14201 = state_14188;(statearr_14201[14] = inst_14068);
(statearr_14201[15] = inst_14066);
(statearr_14201[16] = inst_14067);
(statearr_14201[17] = inst_14065);
return statearr_14201;
})();var statearr_14202_14284 = state_14188__$1;(statearr_14202_14284[2] = null);
(statearr_14202_14284[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 37))
{var inst_14145 = (state_14188[9]);var inst_14154 = cljs.core.first.call(null,inst_14145);var state_14188__$1 = (function (){var statearr_14203 = state_14188;(statearr_14203[18] = inst_14154);
return statearr_14203;
})();var statearr_14204_14285 = state_14188__$1;(statearr_14204_14285[2] = null);
(statearr_14204_14285[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 6))
{var inst_14116 = (state_14188[19]);var inst_14115 = cljs.core.deref.call(null,cs);var inst_14116__$1 = cljs.core.keys.call(null,inst_14115);var inst_14117 = cljs.core.count.call(null,inst_14116__$1);var inst_14118 = cljs.core.reset_BANG_.call(null,dctr,inst_14117);var inst_14123 = cljs.core.seq.call(null,inst_14116__$1);var inst_14124 = inst_14123;var inst_14125 = null;var inst_14126 = 0;var inst_14127 = 0;var state_14188__$1 = (function (){var statearr_14205 = state_14188;(statearr_14205[10] = inst_14124);
(statearr_14205[20] = inst_14118);
(statearr_14205[11] = inst_14127);
(statearr_14205[12] = inst_14126);
(statearr_14205[13] = inst_14125);
(statearr_14205[19] = inst_14116__$1);
return statearr_14205;
})();var statearr_14206_14286 = state_14188__$1;(statearr_14206_14286[2] = null);
(statearr_14206_14286[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 38))
{var inst_14167 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14207_14287 = state_14188__$1;(statearr_14207_14287[2] = inst_14167);
(statearr_14207_14287[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 7))
{var inst_14184 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14208_14288 = state_14188__$1;(statearr_14208_14288[2] = inst_14184);
(statearr_14208_14288[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 39))
{var inst_14145 = (state_14188[9]);var inst_14163 = (state_14188[2]);var inst_14164 = cljs.core.next.call(null,inst_14145);var inst_14124 = inst_14164;var inst_14125 = null;var inst_14126 = 0;var inst_14127 = 0;var state_14188__$1 = (function (){var statearr_14209 = state_14188;(statearr_14209[10] = inst_14124);
(statearr_14209[21] = inst_14163);
(statearr_14209[11] = inst_14127);
(statearr_14209[12] = inst_14126);
(statearr_14209[13] = inst_14125);
return statearr_14209;
})();var statearr_14210_14289 = state_14188__$1;(statearr_14210_14289[2] = null);
(statearr_14210_14289[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 8))
{var inst_14068 = (state_14188[14]);var inst_14067 = (state_14188[16]);var inst_14070 = (inst_14068 < inst_14067);var inst_14071 = inst_14070;var state_14188__$1 = state_14188;if(cljs.core.truth_(inst_14071))
{var statearr_14211_14290 = state_14188__$1;(statearr_14211_14290[1] = 10);
} else
{var statearr_14212_14291 = state_14188__$1;(statearr_14212_14291[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 40))
{var inst_14154 = (state_14188[18]);var inst_14155 = (state_14188[2]);var inst_14156 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14157 = cljs.core.async.untap_STAR_.call(null,m,inst_14154);var state_14188__$1 = (function (){var statearr_14213 = state_14188;(statearr_14213[22] = inst_14156);
(statearr_14213[23] = inst_14155);
return statearr_14213;
})();var statearr_14214_14292 = state_14188__$1;(statearr_14214_14292[2] = inst_14157);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14188__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 9))
{var inst_14113 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14215_14293 = state_14188__$1;(statearr_14215_14293[2] = inst_14113);
(statearr_14215_14293[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 41))
{var inst_14056 = (state_14188[8]);var inst_14154 = (state_14188[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14188,40,Object,null,39);var inst_14161 = cljs.core.async.put_BANG_.call(null,inst_14154,inst_14056,done);var state_14188__$1 = state_14188;var statearr_14216_14294 = state_14188__$1;(statearr_14216_14294[2] = inst_14161);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14188__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 10))
{var inst_14068 = (state_14188[14]);var inst_14066 = (state_14188[15]);var inst_14074 = cljs.core._nth.call(null,inst_14066,inst_14068);var inst_14075 = cljs.core.nth.call(null,inst_14074,0,null);var inst_14076 = cljs.core.nth.call(null,inst_14074,1,null);var state_14188__$1 = (function (){var statearr_14217 = state_14188;(statearr_14217[24] = inst_14075);
return statearr_14217;
})();if(cljs.core.truth_(inst_14076))
{var statearr_14218_14295 = state_14188__$1;(statearr_14218_14295[1] = 13);
} else
{var statearr_14219_14296 = state_14188__$1;(statearr_14219_14296[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 42))
{var state_14188__$1 = state_14188;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14188__$1,45,dchan);
} else
{if((state_val_14189 === 11))
{var inst_14085 = (state_14188[25]);var inst_14065 = (state_14188[17]);var inst_14085__$1 = cljs.core.seq.call(null,inst_14065);var state_14188__$1 = (function (){var statearr_14220 = state_14188;(statearr_14220[25] = inst_14085__$1);
return statearr_14220;
})();if(inst_14085__$1)
{var statearr_14221_14297 = state_14188__$1;(statearr_14221_14297[1] = 16);
} else
{var statearr_14222_14298 = state_14188__$1;(statearr_14222_14298[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 43))
{var state_14188__$1 = state_14188;var statearr_14223_14299 = state_14188__$1;(statearr_14223_14299[2] = null);
(statearr_14223_14299[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 12))
{var inst_14111 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14224_14300 = state_14188__$1;(statearr_14224_14300[2] = inst_14111);
(statearr_14224_14300[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 44))
{var inst_14181 = (state_14188[2]);var state_14188__$1 = (function (){var statearr_14225 = state_14188;(statearr_14225[26] = inst_14181);
return statearr_14225;
})();var statearr_14226_14301 = state_14188__$1;(statearr_14226_14301[2] = null);
(statearr_14226_14301[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 13))
{var inst_14075 = (state_14188[24]);var inst_14078 = cljs.core.async.close_BANG_.call(null,inst_14075);var state_14188__$1 = state_14188;var statearr_14227_14302 = state_14188__$1;(statearr_14227_14302[2] = inst_14078);
(statearr_14227_14302[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 45))
{var inst_14178 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14231_14303 = state_14188__$1;(statearr_14231_14303[2] = inst_14178);
(statearr_14231_14303[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 14))
{var state_14188__$1 = state_14188;var statearr_14232_14304 = state_14188__$1;(statearr_14232_14304[2] = null);
(statearr_14232_14304[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 15))
{var inst_14068 = (state_14188[14]);var inst_14066 = (state_14188[15]);var inst_14067 = (state_14188[16]);var inst_14065 = (state_14188[17]);var inst_14081 = (state_14188[2]);var inst_14082 = (inst_14068 + 1);var tmp14228 = inst_14066;var tmp14229 = inst_14067;var tmp14230 = inst_14065;var inst_14065__$1 = tmp14230;var inst_14066__$1 = tmp14228;var inst_14067__$1 = tmp14229;var inst_14068__$1 = inst_14082;var state_14188__$1 = (function (){var statearr_14233 = state_14188;(statearr_14233[14] = inst_14068__$1);
(statearr_14233[15] = inst_14066__$1);
(statearr_14233[16] = inst_14067__$1);
(statearr_14233[17] = inst_14065__$1);
(statearr_14233[27] = inst_14081);
return statearr_14233;
})();var statearr_14234_14305 = state_14188__$1;(statearr_14234_14305[2] = null);
(statearr_14234_14305[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 16))
{var inst_14085 = (state_14188[25]);var inst_14087 = cljs.core.chunked_seq_QMARK_.call(null,inst_14085);var state_14188__$1 = state_14188;if(inst_14087)
{var statearr_14235_14306 = state_14188__$1;(statearr_14235_14306[1] = 19);
} else
{var statearr_14236_14307 = state_14188__$1;(statearr_14236_14307[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 17))
{var state_14188__$1 = state_14188;var statearr_14237_14308 = state_14188__$1;(statearr_14237_14308[2] = null);
(statearr_14237_14308[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 18))
{var inst_14109 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14238_14309 = state_14188__$1;(statearr_14238_14309[2] = inst_14109);
(statearr_14238_14309[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 19))
{var inst_14085 = (state_14188[25]);var inst_14089 = cljs.core.chunk_first.call(null,inst_14085);var inst_14090 = cljs.core.chunk_rest.call(null,inst_14085);var inst_14091 = cljs.core.count.call(null,inst_14089);var inst_14065 = inst_14090;var inst_14066 = inst_14089;var inst_14067 = inst_14091;var inst_14068 = 0;var state_14188__$1 = (function (){var statearr_14239 = state_14188;(statearr_14239[14] = inst_14068);
(statearr_14239[15] = inst_14066);
(statearr_14239[16] = inst_14067);
(statearr_14239[17] = inst_14065);
return statearr_14239;
})();var statearr_14240_14310 = state_14188__$1;(statearr_14240_14310[2] = null);
(statearr_14240_14310[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 20))
{var inst_14085 = (state_14188[25]);var inst_14095 = cljs.core.first.call(null,inst_14085);var inst_14096 = cljs.core.nth.call(null,inst_14095,0,null);var inst_14097 = cljs.core.nth.call(null,inst_14095,1,null);var state_14188__$1 = (function (){var statearr_14241 = state_14188;(statearr_14241[28] = inst_14096);
return statearr_14241;
})();if(cljs.core.truth_(inst_14097))
{var statearr_14242_14311 = state_14188__$1;(statearr_14242_14311[1] = 22);
} else
{var statearr_14243_14312 = state_14188__$1;(statearr_14243_14312[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 21))
{var inst_14106 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14244_14313 = state_14188__$1;(statearr_14244_14313[2] = inst_14106);
(statearr_14244_14313[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 22))
{var inst_14096 = (state_14188[28]);var inst_14099 = cljs.core.async.close_BANG_.call(null,inst_14096);var state_14188__$1 = state_14188;var statearr_14245_14314 = state_14188__$1;(statearr_14245_14314[2] = inst_14099);
(statearr_14245_14314[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 23))
{var state_14188__$1 = state_14188;var statearr_14246_14315 = state_14188__$1;(statearr_14246_14315[2] = null);
(statearr_14246_14315[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 24))
{var inst_14085 = (state_14188[25]);var inst_14102 = (state_14188[2]);var inst_14103 = cljs.core.next.call(null,inst_14085);var inst_14065 = inst_14103;var inst_14066 = null;var inst_14067 = 0;var inst_14068 = 0;var state_14188__$1 = (function (){var statearr_14247 = state_14188;(statearr_14247[14] = inst_14068);
(statearr_14247[29] = inst_14102);
(statearr_14247[15] = inst_14066);
(statearr_14247[16] = inst_14067);
(statearr_14247[17] = inst_14065);
return statearr_14247;
})();var statearr_14248_14316 = state_14188__$1;(statearr_14248_14316[2] = null);
(statearr_14248_14316[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 25))
{var inst_14127 = (state_14188[11]);var inst_14126 = (state_14188[12]);var inst_14129 = (inst_14127 < inst_14126);var inst_14130 = inst_14129;var state_14188__$1 = state_14188;if(cljs.core.truth_(inst_14130))
{var statearr_14249_14317 = state_14188__$1;(statearr_14249_14317[1] = 27);
} else
{var statearr_14250_14318 = state_14188__$1;(statearr_14250_14318[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 26))
{var inst_14116 = (state_14188[19]);var inst_14174 = (state_14188[2]);var inst_14175 = cljs.core.seq.call(null,inst_14116);var state_14188__$1 = (function (){var statearr_14251 = state_14188;(statearr_14251[30] = inst_14174);
return statearr_14251;
})();if(inst_14175)
{var statearr_14252_14319 = state_14188__$1;(statearr_14252_14319[1] = 42);
} else
{var statearr_14253_14320 = state_14188__$1;(statearr_14253_14320[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 27))
{var inst_14127 = (state_14188[11]);var inst_14125 = (state_14188[13]);var inst_14132 = cljs.core._nth.call(null,inst_14125,inst_14127);var state_14188__$1 = (function (){var statearr_14254 = state_14188;(statearr_14254[7] = inst_14132);
return statearr_14254;
})();var statearr_14255_14321 = state_14188__$1;(statearr_14255_14321[2] = null);
(statearr_14255_14321[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 28))
{var inst_14124 = (state_14188[10]);var inst_14145 = (state_14188[9]);var inst_14145__$1 = cljs.core.seq.call(null,inst_14124);var state_14188__$1 = (function (){var statearr_14259 = state_14188;(statearr_14259[9] = inst_14145__$1);
return statearr_14259;
})();if(inst_14145__$1)
{var statearr_14260_14322 = state_14188__$1;(statearr_14260_14322[1] = 33);
} else
{var statearr_14261_14323 = state_14188__$1;(statearr_14261_14323[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 29))
{var inst_14172 = (state_14188[2]);var state_14188__$1 = state_14188;var statearr_14262_14324 = state_14188__$1;(statearr_14262_14324[2] = inst_14172);
(statearr_14262_14324[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 30))
{var inst_14124 = (state_14188[10]);var inst_14127 = (state_14188[11]);var inst_14126 = (state_14188[12]);var inst_14125 = (state_14188[13]);var inst_14141 = (state_14188[2]);var inst_14142 = (inst_14127 + 1);var tmp14256 = inst_14124;var tmp14257 = inst_14126;var tmp14258 = inst_14125;var inst_14124__$1 = tmp14256;var inst_14125__$1 = tmp14258;var inst_14126__$1 = tmp14257;var inst_14127__$1 = inst_14142;var state_14188__$1 = (function (){var statearr_14263 = state_14188;(statearr_14263[10] = inst_14124__$1);
(statearr_14263[11] = inst_14127__$1);
(statearr_14263[12] = inst_14126__$1);
(statearr_14263[13] = inst_14125__$1);
(statearr_14263[31] = inst_14141);
return statearr_14263;
})();var statearr_14264_14325 = state_14188__$1;(statearr_14264_14325[2] = null);
(statearr_14264_14325[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14189 === 31))
{var inst_14132 = (state_14188[7]);var inst_14133 = (state_14188[2]);var inst_14134 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14135 = cljs.core.async.untap_STAR_.call(null,m,inst_14132);var state_14188__$1 = (function (){var statearr_14265 = state_14188;(statearr_14265[32] = inst_14134);
(statearr_14265[33] = inst_14133);
return statearr_14265;
})();var statearr_14266_14326 = state_14188__$1;(statearr_14266_14326[2] = inst_14135);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14188__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14270 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14270[0] = state_machine__5507__auto__);
(statearr_14270[1] = 1);
return statearr_14270;
});
var state_machine__5507__auto____1 = (function (state_14188){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14188);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14271){if((e14271 instanceof Object))
{var ex__5510__auto__ = e14271;var statearr_14272_14327 = state_14188;(statearr_14272_14327[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14188);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14271;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14328 = state_14188;
state_14188 = G__14328;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14188){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14188);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14273 = f__5522__auto__.call(null);(statearr_14273[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14274);
return statearr_14273;
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
cljs.core.async.Mix = (function (){var obj14330 = {};return obj14330;
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
;var m = (function (){if(typeof cljs.core.async.t14440 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14440 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14441){
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
this.meta14441 = meta14441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14440.cljs$lang$type = true;
cljs.core.async.t14440.cljs$lang$ctorStr = "cljs.core.async/t14440";
cljs.core.async.t14440.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14440");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14440.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14440.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14440.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14440.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14440.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14440.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14440.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14442){var self__ = this;
var _14442__$1 = this;return self__.meta14441;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14442,meta14441__$1){var self__ = this;
var _14442__$1 = this;return (new cljs.core.async.t14440(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14441__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14440 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14440(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14441){return (new cljs.core.async.t14440(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14441));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14440(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14549 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14507){var state_val_14508 = (state_14507[1]);if((state_val_14508 === 1))
{var inst_14446 = (state_14507[7]);var inst_14446__$1 = calc_state.call(null);var inst_14447 = cljs.core.seq_QMARK_.call(null,inst_14446__$1);var state_14507__$1 = (function (){var statearr_14509 = state_14507;(statearr_14509[7] = inst_14446__$1);
return statearr_14509;
})();if(inst_14447)
{var statearr_14510_14550 = state_14507__$1;(statearr_14510_14550[1] = 2);
} else
{var statearr_14511_14551 = state_14507__$1;(statearr_14511_14551[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 2))
{var inst_14446 = (state_14507[7]);var inst_14449 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14446);var state_14507__$1 = state_14507;var statearr_14512_14552 = state_14507__$1;(statearr_14512_14552[2] = inst_14449);
(statearr_14512_14552[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 3))
{var inst_14446 = (state_14507[7]);var state_14507__$1 = state_14507;var statearr_14513_14553 = state_14507__$1;(statearr_14513_14553[2] = inst_14446);
(statearr_14513_14553[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 4))
{var inst_14446 = (state_14507[7]);var inst_14452 = (state_14507[2]);var inst_14453 = cljs.core.get.call(null,inst_14452,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14454 = cljs.core.get.call(null,inst_14452,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14455 = cljs.core.get.call(null,inst_14452,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14456 = inst_14446;var state_14507__$1 = (function (){var statearr_14514 = state_14507;(statearr_14514[8] = inst_14456);
(statearr_14514[9] = inst_14455);
(statearr_14514[10] = inst_14453);
(statearr_14514[11] = inst_14454);
return statearr_14514;
})();var statearr_14515_14554 = state_14507__$1;(statearr_14515_14554[2] = null);
(statearr_14515_14554[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 5))
{var inst_14456 = (state_14507[8]);var inst_14459 = cljs.core.seq_QMARK_.call(null,inst_14456);var state_14507__$1 = state_14507;if(inst_14459)
{var statearr_14516_14555 = state_14507__$1;(statearr_14516_14555[1] = 7);
} else
{var statearr_14517_14556 = state_14507__$1;(statearr_14517_14556[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 6))
{var inst_14505 = (state_14507[2]);var state_14507__$1 = state_14507;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14507__$1,inst_14505);
} else
{if((state_val_14508 === 7))
{var inst_14456 = (state_14507[8]);var inst_14461 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14456);var state_14507__$1 = state_14507;var statearr_14518_14557 = state_14507__$1;(statearr_14518_14557[2] = inst_14461);
(statearr_14518_14557[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 8))
{var inst_14456 = (state_14507[8]);var state_14507__$1 = state_14507;var statearr_14519_14558 = state_14507__$1;(statearr_14519_14558[2] = inst_14456);
(statearr_14519_14558[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 9))
{var inst_14464 = (state_14507[12]);var inst_14464__$1 = (state_14507[2]);var inst_14465 = cljs.core.get.call(null,inst_14464__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14466 = cljs.core.get.call(null,inst_14464__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14467 = cljs.core.get.call(null,inst_14464__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14507__$1 = (function (){var statearr_14520 = state_14507;(statearr_14520[12] = inst_14464__$1);
(statearr_14520[13] = inst_14467);
(statearr_14520[14] = inst_14466);
return statearr_14520;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14507__$1,10,inst_14465);
} else
{if((state_val_14508 === 10))
{var inst_14472 = (state_14507[15]);var inst_14471 = (state_14507[16]);var inst_14470 = (state_14507[2]);var inst_14471__$1 = cljs.core.nth.call(null,inst_14470,0,null);var inst_14472__$1 = cljs.core.nth.call(null,inst_14470,1,null);var inst_14473 = (inst_14471__$1 == null);var inst_14474 = cljs.core._EQ_.call(null,inst_14472__$1,change);var inst_14475 = (inst_14473) || (inst_14474);var state_14507__$1 = (function (){var statearr_14521 = state_14507;(statearr_14521[15] = inst_14472__$1);
(statearr_14521[16] = inst_14471__$1);
return statearr_14521;
})();if(cljs.core.truth_(inst_14475))
{var statearr_14522_14559 = state_14507__$1;(statearr_14522_14559[1] = 11);
} else
{var statearr_14523_14560 = state_14507__$1;(statearr_14523_14560[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 11))
{var inst_14471 = (state_14507[16]);var inst_14477 = (inst_14471 == null);var state_14507__$1 = state_14507;if(cljs.core.truth_(inst_14477))
{var statearr_14524_14561 = state_14507__$1;(statearr_14524_14561[1] = 14);
} else
{var statearr_14525_14562 = state_14507__$1;(statearr_14525_14562[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 12))
{var inst_14486 = (state_14507[17]);var inst_14472 = (state_14507[15]);var inst_14467 = (state_14507[13]);var inst_14486__$1 = inst_14467.call(null,inst_14472);var state_14507__$1 = (function (){var statearr_14526 = state_14507;(statearr_14526[17] = inst_14486__$1);
return statearr_14526;
})();if(cljs.core.truth_(inst_14486__$1))
{var statearr_14527_14563 = state_14507__$1;(statearr_14527_14563[1] = 17);
} else
{var statearr_14528_14564 = state_14507__$1;(statearr_14528_14564[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 13))
{var inst_14503 = (state_14507[2]);var state_14507__$1 = state_14507;var statearr_14529_14565 = state_14507__$1;(statearr_14529_14565[2] = inst_14503);
(statearr_14529_14565[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 14))
{var inst_14472 = (state_14507[15]);var inst_14479 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14472);var state_14507__$1 = state_14507;var statearr_14530_14566 = state_14507__$1;(statearr_14530_14566[2] = inst_14479);
(statearr_14530_14566[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 15))
{var state_14507__$1 = state_14507;var statearr_14531_14567 = state_14507__$1;(statearr_14531_14567[2] = null);
(statearr_14531_14567[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 16))
{var inst_14482 = (state_14507[2]);var inst_14483 = calc_state.call(null);var inst_14456 = inst_14483;var state_14507__$1 = (function (){var statearr_14532 = state_14507;(statearr_14532[8] = inst_14456);
(statearr_14532[18] = inst_14482);
return statearr_14532;
})();var statearr_14533_14568 = state_14507__$1;(statearr_14533_14568[2] = null);
(statearr_14533_14568[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 17))
{var inst_14486 = (state_14507[17]);var state_14507__$1 = state_14507;var statearr_14534_14569 = state_14507__$1;(statearr_14534_14569[2] = inst_14486);
(statearr_14534_14569[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 18))
{var inst_14472 = (state_14507[15]);var inst_14467 = (state_14507[13]);var inst_14466 = (state_14507[14]);var inst_14489 = cljs.core.empty_QMARK_.call(null,inst_14467);var inst_14490 = inst_14466.call(null,inst_14472);var inst_14491 = cljs.core.not.call(null,inst_14490);var inst_14492 = (inst_14489) && (inst_14491);var state_14507__$1 = state_14507;var statearr_14535_14570 = state_14507__$1;(statearr_14535_14570[2] = inst_14492);
(statearr_14535_14570[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 19))
{var inst_14494 = (state_14507[2]);var state_14507__$1 = state_14507;if(cljs.core.truth_(inst_14494))
{var statearr_14536_14571 = state_14507__$1;(statearr_14536_14571[1] = 20);
} else
{var statearr_14537_14572 = state_14507__$1;(statearr_14537_14572[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 20))
{var inst_14471 = (state_14507[16]);var state_14507__$1 = state_14507;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14507__$1,23,out,inst_14471);
} else
{if((state_val_14508 === 21))
{var state_14507__$1 = state_14507;var statearr_14538_14573 = state_14507__$1;(statearr_14538_14573[2] = null);
(statearr_14538_14573[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 22))
{var inst_14464 = (state_14507[12]);var inst_14500 = (state_14507[2]);var inst_14456 = inst_14464;var state_14507__$1 = (function (){var statearr_14539 = state_14507;(statearr_14539[8] = inst_14456);
(statearr_14539[19] = inst_14500);
return statearr_14539;
})();var statearr_14540_14574 = state_14507__$1;(statearr_14540_14574[2] = null);
(statearr_14540_14574[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14508 === 23))
{var inst_14497 = (state_14507[2]);var state_14507__$1 = state_14507;var statearr_14541_14575 = state_14507__$1;(statearr_14541_14575[2] = inst_14497);
(statearr_14541_14575[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14545 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14545[0] = state_machine__5507__auto__);
(statearr_14545[1] = 1);
return statearr_14545;
});
var state_machine__5507__auto____1 = (function (state_14507){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14507);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14546){if((e14546 instanceof Object))
{var ex__5510__auto__ = e14546;var statearr_14547_14576 = state_14507;(statearr_14547_14576[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14507);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14546;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14577 = state_14507;
state_14507 = G__14577;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14507){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14507);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14548 = f__5522__auto__.call(null);(statearr_14548[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14549);
return statearr_14548;
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
cljs.core.async.Pub = (function (){var obj14579 = {};return obj14579;
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
return (function (p1__14580_SHARP_){if(cljs.core.truth_(p1__14580_SHARP_.call(null,topic)))
{return p1__14580_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14580_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14705 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14706){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14706 = meta14706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14705.cljs$lang$type = true;
cljs.core.async.t14705.cljs$lang$ctorStr = "cljs.core.async/t14705";
cljs.core.async.t14705.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14705");
});})(mults,ensure_mult))
;
cljs.core.async.t14705.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14705.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14705.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14705.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14705.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14705.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14707){var self__ = this;
var _14707__$1 = this;return self__.meta14706;
});})(mults,ensure_mult))
;
cljs.core.async.t14705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14707,meta14706__$1){var self__ = this;
var _14707__$1 = this;return (new cljs.core.async.t14705(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14706__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14705 = ((function (mults,ensure_mult){
return (function __GT_t14705(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14706){return (new cljs.core.async.t14705(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14706));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14705(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14781){var state_val_14782 = (state_14781[1]);if((state_val_14782 === 1))
{var state_14781__$1 = state_14781;var statearr_14783_14830 = state_14781__$1;(statearr_14783_14830[2] = null);
(statearr_14783_14830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 2))
{var state_14781__$1 = state_14781;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14781__$1,4,ch);
} else
{if((state_val_14782 === 3))
{var inst_14779 = (state_14781[2]);var state_14781__$1 = state_14781;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14781__$1,inst_14779);
} else
{if((state_val_14782 === 4))
{var inst_14710 = (state_14781[7]);var inst_14710__$1 = (state_14781[2]);var inst_14711 = (inst_14710__$1 == null);var state_14781__$1 = (function (){var statearr_14784 = state_14781;(statearr_14784[7] = inst_14710__$1);
return statearr_14784;
})();if(cljs.core.truth_(inst_14711))
{var statearr_14785_14831 = state_14781__$1;(statearr_14785_14831[1] = 5);
} else
{var statearr_14786_14832 = state_14781__$1;(statearr_14786_14832[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 5))
{var inst_14717 = cljs.core.deref.call(null,mults);var inst_14718 = cljs.core.vals.call(null,inst_14717);var inst_14719 = cljs.core.seq.call(null,inst_14718);var inst_14720 = inst_14719;var inst_14721 = null;var inst_14722 = 0;var inst_14723 = 0;var state_14781__$1 = (function (){var statearr_14787 = state_14781;(statearr_14787[8] = inst_14723);
(statearr_14787[9] = inst_14722);
(statearr_14787[10] = inst_14721);
(statearr_14787[11] = inst_14720);
return statearr_14787;
})();var statearr_14788_14833 = state_14781__$1;(statearr_14788_14833[2] = null);
(statearr_14788_14833[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 6))
{var inst_14760 = (state_14781[12]);var inst_14758 = (state_14781[13]);var inst_14710 = (state_14781[7]);var inst_14758__$1 = topic_fn.call(null,inst_14710);var inst_14759 = cljs.core.deref.call(null,mults);var inst_14760__$1 = cljs.core.get.call(null,inst_14759,inst_14758__$1);var state_14781__$1 = (function (){var statearr_14789 = state_14781;(statearr_14789[12] = inst_14760__$1);
(statearr_14789[13] = inst_14758__$1);
return statearr_14789;
})();if(cljs.core.truth_(inst_14760__$1))
{var statearr_14790_14834 = state_14781__$1;(statearr_14790_14834[1] = 19);
} else
{var statearr_14791_14835 = state_14781__$1;(statearr_14791_14835[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 7))
{var inst_14777 = (state_14781[2]);var state_14781__$1 = state_14781;var statearr_14792_14836 = state_14781__$1;(statearr_14792_14836[2] = inst_14777);
(statearr_14792_14836[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 8))
{var inst_14723 = (state_14781[8]);var inst_14722 = (state_14781[9]);var inst_14725 = (inst_14723 < inst_14722);var inst_14726 = inst_14725;var state_14781__$1 = state_14781;if(cljs.core.truth_(inst_14726))
{var statearr_14796_14837 = state_14781__$1;(statearr_14796_14837[1] = 10);
} else
{var statearr_14797_14838 = state_14781__$1;(statearr_14797_14838[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 9))
{var inst_14756 = (state_14781[2]);var state_14781__$1 = state_14781;var statearr_14798_14839 = state_14781__$1;(statearr_14798_14839[2] = inst_14756);
(statearr_14798_14839[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 10))
{var inst_14723 = (state_14781[8]);var inst_14722 = (state_14781[9]);var inst_14721 = (state_14781[10]);var inst_14720 = (state_14781[11]);var inst_14728 = cljs.core._nth.call(null,inst_14721,inst_14723);var inst_14729 = cljs.core.async.muxch_STAR_.call(null,inst_14728);var inst_14730 = cljs.core.async.close_BANG_.call(null,inst_14729);var inst_14731 = (inst_14723 + 1);var tmp14793 = inst_14722;var tmp14794 = inst_14721;var tmp14795 = inst_14720;var inst_14720__$1 = tmp14795;var inst_14721__$1 = tmp14794;var inst_14722__$1 = tmp14793;var inst_14723__$1 = inst_14731;var state_14781__$1 = (function (){var statearr_14799 = state_14781;(statearr_14799[8] = inst_14723__$1);
(statearr_14799[14] = inst_14730);
(statearr_14799[9] = inst_14722__$1);
(statearr_14799[10] = inst_14721__$1);
(statearr_14799[11] = inst_14720__$1);
return statearr_14799;
})();var statearr_14800_14840 = state_14781__$1;(statearr_14800_14840[2] = null);
(statearr_14800_14840[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 11))
{var inst_14720 = (state_14781[11]);var inst_14734 = (state_14781[15]);var inst_14734__$1 = cljs.core.seq.call(null,inst_14720);var state_14781__$1 = (function (){var statearr_14801 = state_14781;(statearr_14801[15] = inst_14734__$1);
return statearr_14801;
})();if(inst_14734__$1)
{var statearr_14802_14841 = state_14781__$1;(statearr_14802_14841[1] = 13);
} else
{var statearr_14803_14842 = state_14781__$1;(statearr_14803_14842[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 12))
{var inst_14754 = (state_14781[2]);var state_14781__$1 = state_14781;var statearr_14804_14843 = state_14781__$1;(statearr_14804_14843[2] = inst_14754);
(statearr_14804_14843[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 13))
{var inst_14734 = (state_14781[15]);var inst_14736 = cljs.core.chunked_seq_QMARK_.call(null,inst_14734);var state_14781__$1 = state_14781;if(inst_14736)
{var statearr_14805_14844 = state_14781__$1;(statearr_14805_14844[1] = 16);
} else
{var statearr_14806_14845 = state_14781__$1;(statearr_14806_14845[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 14))
{var state_14781__$1 = state_14781;var statearr_14807_14846 = state_14781__$1;(statearr_14807_14846[2] = null);
(statearr_14807_14846[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 15))
{var inst_14752 = (state_14781[2]);var state_14781__$1 = state_14781;var statearr_14808_14847 = state_14781__$1;(statearr_14808_14847[2] = inst_14752);
(statearr_14808_14847[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 16))
{var inst_14734 = (state_14781[15]);var inst_14738 = cljs.core.chunk_first.call(null,inst_14734);var inst_14739 = cljs.core.chunk_rest.call(null,inst_14734);var inst_14740 = cljs.core.count.call(null,inst_14738);var inst_14720 = inst_14739;var inst_14721 = inst_14738;var inst_14722 = inst_14740;var inst_14723 = 0;var state_14781__$1 = (function (){var statearr_14809 = state_14781;(statearr_14809[8] = inst_14723);
(statearr_14809[9] = inst_14722);
(statearr_14809[10] = inst_14721);
(statearr_14809[11] = inst_14720);
return statearr_14809;
})();var statearr_14810_14848 = state_14781__$1;(statearr_14810_14848[2] = null);
(statearr_14810_14848[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 17))
{var inst_14734 = (state_14781[15]);var inst_14743 = cljs.core.first.call(null,inst_14734);var inst_14744 = cljs.core.async.muxch_STAR_.call(null,inst_14743);var inst_14745 = cljs.core.async.close_BANG_.call(null,inst_14744);var inst_14746 = cljs.core.next.call(null,inst_14734);var inst_14720 = inst_14746;var inst_14721 = null;var inst_14722 = 0;var inst_14723 = 0;var state_14781__$1 = (function (){var statearr_14811 = state_14781;(statearr_14811[8] = inst_14723);
(statearr_14811[9] = inst_14722);
(statearr_14811[10] = inst_14721);
(statearr_14811[11] = inst_14720);
(statearr_14811[16] = inst_14745);
return statearr_14811;
})();var statearr_14812_14849 = state_14781__$1;(statearr_14812_14849[2] = null);
(statearr_14812_14849[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 18))
{var inst_14749 = (state_14781[2]);var state_14781__$1 = state_14781;var statearr_14813_14850 = state_14781__$1;(statearr_14813_14850[2] = inst_14749);
(statearr_14813_14850[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 19))
{var state_14781__$1 = state_14781;var statearr_14814_14851 = state_14781__$1;(statearr_14814_14851[2] = null);
(statearr_14814_14851[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 20))
{var state_14781__$1 = state_14781;var statearr_14815_14852 = state_14781__$1;(statearr_14815_14852[2] = null);
(statearr_14815_14852[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 21))
{var inst_14774 = (state_14781[2]);var state_14781__$1 = (function (){var statearr_14816 = state_14781;(statearr_14816[17] = inst_14774);
return statearr_14816;
})();var statearr_14817_14853 = state_14781__$1;(statearr_14817_14853[2] = null);
(statearr_14817_14853[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 22))
{var inst_14771 = (state_14781[2]);var state_14781__$1 = state_14781;var statearr_14818_14854 = state_14781__$1;(statearr_14818_14854[2] = inst_14771);
(statearr_14818_14854[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 23))
{var inst_14758 = (state_14781[13]);var inst_14762 = (state_14781[2]);var inst_14763 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14758);var state_14781__$1 = (function (){var statearr_14819 = state_14781;(statearr_14819[18] = inst_14762);
return statearr_14819;
})();var statearr_14820_14855 = state_14781__$1;(statearr_14820_14855[2] = inst_14763);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14781__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14782 === 24))
{var inst_14760 = (state_14781[12]);var inst_14710 = (state_14781[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14781,23,Object,null,22);var inst_14767 = cljs.core.async.muxch_STAR_.call(null,inst_14760);var state_14781__$1 = state_14781;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14781__$1,25,inst_14767,inst_14710);
} else
{if((state_val_14782 === 25))
{var inst_14769 = (state_14781[2]);var state_14781__$1 = state_14781;var statearr_14821_14856 = state_14781__$1;(statearr_14821_14856[2] = inst_14769);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14781__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14825 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14825[0] = state_machine__5507__auto__);
(statearr_14825[1] = 1);
return statearr_14825;
});
var state_machine__5507__auto____1 = (function (state_14781){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14781);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14826){if((e14826 instanceof Object))
{var ex__5510__auto__ = e14826;var statearr_14827_14857 = state_14781;(statearr_14827_14857[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14781);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14858 = state_14781;
state_14781 = G__14858;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14781){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14781);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14828 = f__5522__auto__.call(null);(statearr_14828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14829);
return statearr_14828;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___14995 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14965){var state_val_14966 = (state_14965[1]);if((state_val_14966 === 1))
{var state_14965__$1 = state_14965;var statearr_14967_14996 = state_14965__$1;(statearr_14967_14996[2] = null);
(statearr_14967_14996[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 2))
{var inst_14928 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14929 = 0;var state_14965__$1 = (function (){var statearr_14968 = state_14965;(statearr_14968[7] = inst_14928);
(statearr_14968[8] = inst_14929);
return statearr_14968;
})();var statearr_14969_14997 = state_14965__$1;(statearr_14969_14997[2] = null);
(statearr_14969_14997[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 3))
{var inst_14963 = (state_14965[2]);var state_14965__$1 = state_14965;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14965__$1,inst_14963);
} else
{if((state_val_14966 === 4))
{var inst_14929 = (state_14965[8]);var inst_14931 = (inst_14929 < cnt);var state_14965__$1 = state_14965;if(cljs.core.truth_(inst_14931))
{var statearr_14970_14998 = state_14965__$1;(statearr_14970_14998[1] = 6);
} else
{var statearr_14971_14999 = state_14965__$1;(statearr_14971_14999[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 5))
{var inst_14949 = (state_14965[2]);var state_14965__$1 = (function (){var statearr_14972 = state_14965;(statearr_14972[9] = inst_14949);
return statearr_14972;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14965__$1,12,dchan);
} else
{if((state_val_14966 === 6))
{var state_14965__$1 = state_14965;var statearr_14973_15000 = state_14965__$1;(statearr_14973_15000[2] = null);
(statearr_14973_15000[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 7))
{var state_14965__$1 = state_14965;var statearr_14974_15001 = state_14965__$1;(statearr_14974_15001[2] = null);
(statearr_14974_15001[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 8))
{var inst_14947 = (state_14965[2]);var state_14965__$1 = state_14965;var statearr_14975_15002 = state_14965__$1;(statearr_14975_15002[2] = inst_14947);
(statearr_14975_15002[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 9))
{var inst_14929 = (state_14965[8]);var inst_14942 = (state_14965[2]);var inst_14943 = (inst_14929 + 1);var inst_14929__$1 = inst_14943;var state_14965__$1 = (function (){var statearr_14976 = state_14965;(statearr_14976[10] = inst_14942);
(statearr_14976[8] = inst_14929__$1);
return statearr_14976;
})();var statearr_14977_15003 = state_14965__$1;(statearr_14977_15003[2] = null);
(statearr_14977_15003[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 10))
{var inst_14933 = (state_14965[2]);var inst_14934 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14965__$1 = (function (){var statearr_14978 = state_14965;(statearr_14978[11] = inst_14933);
return statearr_14978;
})();var statearr_14979_15004 = state_14965__$1;(statearr_14979_15004[2] = inst_14934);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14965__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 11))
{var inst_14929 = (state_14965[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14965,10,Object,null,9);var inst_14938 = chs__$1.call(null,inst_14929);var inst_14939 = done.call(null,inst_14929);var inst_14940 = cljs.core.async.take_BANG_.call(null,inst_14938,inst_14939);var state_14965__$1 = state_14965;var statearr_14980_15005 = state_14965__$1;(statearr_14980_15005[2] = inst_14940);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14965__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 12))
{var inst_14951 = (state_14965[12]);var inst_14951__$1 = (state_14965[2]);var inst_14952 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14951__$1);var state_14965__$1 = (function (){var statearr_14981 = state_14965;(statearr_14981[12] = inst_14951__$1);
return statearr_14981;
})();if(cljs.core.truth_(inst_14952))
{var statearr_14982_15006 = state_14965__$1;(statearr_14982_15006[1] = 13);
} else
{var statearr_14983_15007 = state_14965__$1;(statearr_14983_15007[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 13))
{var inst_14954 = cljs.core.async.close_BANG_.call(null,out);var state_14965__$1 = state_14965;var statearr_14984_15008 = state_14965__$1;(statearr_14984_15008[2] = inst_14954);
(statearr_14984_15008[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 14))
{var inst_14951 = (state_14965[12]);var inst_14956 = cljs.core.apply.call(null,f,inst_14951);var state_14965__$1 = state_14965;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14965__$1,16,out,inst_14956);
} else
{if((state_val_14966 === 15))
{var inst_14961 = (state_14965[2]);var state_14965__$1 = state_14965;var statearr_14985_15009 = state_14965__$1;(statearr_14985_15009[2] = inst_14961);
(statearr_14985_15009[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14966 === 16))
{var inst_14958 = (state_14965[2]);var state_14965__$1 = (function (){var statearr_14986 = state_14965;(statearr_14986[13] = inst_14958);
return statearr_14986;
})();var statearr_14987_15010 = state_14965__$1;(statearr_14987_15010[2] = null);
(statearr_14987_15010[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14991 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14991[0] = state_machine__5507__auto__);
(statearr_14991[1] = 1);
return statearr_14991;
});
var state_machine__5507__auto____1 = (function (state_14965){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14965);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14992){if((e14992 instanceof Object))
{var ex__5510__auto__ = e14992;var statearr_14993_15011 = state_14965;(statearr_14993_15011[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14965);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14992;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15012 = state_14965;
state_14965 = G__15012;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14965){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14965);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14994 = f__5522__auto__.call(null);(statearr_14994[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14995);
return statearr_14994;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15120 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15096){var state_val_15097 = (state_15096[1]);if((state_val_15097 === 1))
{var inst_15067 = cljs.core.vec.call(null,chs);var inst_15068 = inst_15067;var state_15096__$1 = (function (){var statearr_15098 = state_15096;(statearr_15098[7] = inst_15068);
return statearr_15098;
})();var statearr_15099_15121 = state_15096__$1;(statearr_15099_15121[2] = null);
(statearr_15099_15121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15097 === 2))
{var inst_15068 = (state_15096[7]);var inst_15070 = cljs.core.count.call(null,inst_15068);var inst_15071 = (inst_15070 > 0);var state_15096__$1 = state_15096;if(cljs.core.truth_(inst_15071))
{var statearr_15100_15122 = state_15096__$1;(statearr_15100_15122[1] = 4);
} else
{var statearr_15101_15123 = state_15096__$1;(statearr_15101_15123[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15097 === 3))
{var inst_15094 = (state_15096[2]);var state_15096__$1 = state_15096;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15096__$1,inst_15094);
} else
{if((state_val_15097 === 4))
{var inst_15068 = (state_15096[7]);var state_15096__$1 = state_15096;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15096__$1,7,inst_15068);
} else
{if((state_val_15097 === 5))
{var inst_15090 = cljs.core.async.close_BANG_.call(null,out);var state_15096__$1 = state_15096;var statearr_15102_15124 = state_15096__$1;(statearr_15102_15124[2] = inst_15090);
(statearr_15102_15124[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15097 === 6))
{var inst_15092 = (state_15096[2]);var state_15096__$1 = state_15096;var statearr_15103_15125 = state_15096__$1;(statearr_15103_15125[2] = inst_15092);
(statearr_15103_15125[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15097 === 7))
{var inst_15075 = (state_15096[8]);var inst_15076 = (state_15096[9]);var inst_15075__$1 = (state_15096[2]);var inst_15076__$1 = cljs.core.nth.call(null,inst_15075__$1,0,null);var inst_15077 = cljs.core.nth.call(null,inst_15075__$1,1,null);var inst_15078 = (inst_15076__$1 == null);var state_15096__$1 = (function (){var statearr_15104 = state_15096;(statearr_15104[8] = inst_15075__$1);
(statearr_15104[10] = inst_15077);
(statearr_15104[9] = inst_15076__$1);
return statearr_15104;
})();if(cljs.core.truth_(inst_15078))
{var statearr_15105_15126 = state_15096__$1;(statearr_15105_15126[1] = 8);
} else
{var statearr_15106_15127 = state_15096__$1;(statearr_15106_15127[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15097 === 8))
{var inst_15068 = (state_15096[7]);var inst_15075 = (state_15096[8]);var inst_15077 = (state_15096[10]);var inst_15076 = (state_15096[9]);var inst_15080 = (function (){var c = inst_15077;var v = inst_15076;var vec__15073 = inst_15075;var cs = inst_15068;return ((function (c,v,vec__15073,cs,inst_15068,inst_15075,inst_15077,inst_15076,state_val_15097){
return (function (p1__15013_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15013_SHARP_);
});
;})(c,v,vec__15073,cs,inst_15068,inst_15075,inst_15077,inst_15076,state_val_15097))
})();var inst_15081 = cljs.core.filterv.call(null,inst_15080,inst_15068);var inst_15068__$1 = inst_15081;var state_15096__$1 = (function (){var statearr_15107 = state_15096;(statearr_15107[7] = inst_15068__$1);
return statearr_15107;
})();var statearr_15108_15128 = state_15096__$1;(statearr_15108_15128[2] = null);
(statearr_15108_15128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15097 === 9))
{var inst_15076 = (state_15096[9]);var state_15096__$1 = state_15096;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15096__$1,11,out,inst_15076);
} else
{if((state_val_15097 === 10))
{var inst_15088 = (state_15096[2]);var state_15096__$1 = state_15096;var statearr_15110_15129 = state_15096__$1;(statearr_15110_15129[2] = inst_15088);
(statearr_15110_15129[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15097 === 11))
{var inst_15068 = (state_15096[7]);var inst_15085 = (state_15096[2]);var tmp15109 = inst_15068;var inst_15068__$1 = tmp15109;var state_15096__$1 = (function (){var statearr_15111 = state_15096;(statearr_15111[7] = inst_15068__$1);
(statearr_15111[11] = inst_15085);
return statearr_15111;
})();var statearr_15112_15130 = state_15096__$1;(statearr_15112_15130[2] = null);
(statearr_15112_15130[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15116 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15116[0] = state_machine__5507__auto__);
(statearr_15116[1] = 1);
return statearr_15116;
});
var state_machine__5507__auto____1 = (function (state_15096){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15096);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15117){if((e15117 instanceof Object))
{var ex__5510__auto__ = e15117;var statearr_15118_15131 = state_15096;(statearr_15118_15131[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15096);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15132 = state_15096;
state_15096 = G__15132;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15096){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15096);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15119 = f__5522__auto__.call(null);(statearr_15119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15120);
return statearr_15119;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15225 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15202){var state_val_15203 = (state_15202[1]);if((state_val_15203 === 1))
{var inst_15179 = 0;var state_15202__$1 = (function (){var statearr_15204 = state_15202;(statearr_15204[7] = inst_15179);
return statearr_15204;
})();var statearr_15205_15226 = state_15202__$1;(statearr_15205_15226[2] = null);
(statearr_15205_15226[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 2))
{var inst_15179 = (state_15202[7]);var inst_15181 = (inst_15179 < n);var state_15202__$1 = state_15202;if(cljs.core.truth_(inst_15181))
{var statearr_15206_15227 = state_15202__$1;(statearr_15206_15227[1] = 4);
} else
{var statearr_15207_15228 = state_15202__$1;(statearr_15207_15228[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 3))
{var inst_15199 = (state_15202[2]);var inst_15200 = cljs.core.async.close_BANG_.call(null,out);var state_15202__$1 = (function (){var statearr_15208 = state_15202;(statearr_15208[8] = inst_15199);
return statearr_15208;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15202__$1,inst_15200);
} else
{if((state_val_15203 === 4))
{var state_15202__$1 = state_15202;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15202__$1,7,ch);
} else
{if((state_val_15203 === 5))
{var state_15202__$1 = state_15202;var statearr_15209_15229 = state_15202__$1;(statearr_15209_15229[2] = null);
(statearr_15209_15229[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 6))
{var inst_15197 = (state_15202[2]);var state_15202__$1 = state_15202;var statearr_15210_15230 = state_15202__$1;(statearr_15210_15230[2] = inst_15197);
(statearr_15210_15230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 7))
{var inst_15184 = (state_15202[9]);var inst_15184__$1 = (state_15202[2]);var inst_15185 = (inst_15184__$1 == null);var inst_15186 = cljs.core.not.call(null,inst_15185);var state_15202__$1 = (function (){var statearr_15211 = state_15202;(statearr_15211[9] = inst_15184__$1);
return statearr_15211;
})();if(inst_15186)
{var statearr_15212_15231 = state_15202__$1;(statearr_15212_15231[1] = 8);
} else
{var statearr_15213_15232 = state_15202__$1;(statearr_15213_15232[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 8))
{var inst_15184 = (state_15202[9]);var state_15202__$1 = state_15202;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15202__$1,11,out,inst_15184);
} else
{if((state_val_15203 === 9))
{var state_15202__$1 = state_15202;var statearr_15214_15233 = state_15202__$1;(statearr_15214_15233[2] = null);
(statearr_15214_15233[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 10))
{var inst_15194 = (state_15202[2]);var state_15202__$1 = state_15202;var statearr_15215_15234 = state_15202__$1;(statearr_15215_15234[2] = inst_15194);
(statearr_15215_15234[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15203 === 11))
{var inst_15179 = (state_15202[7]);var inst_15189 = (state_15202[2]);var inst_15190 = (inst_15179 + 1);var inst_15179__$1 = inst_15190;var state_15202__$1 = (function (){var statearr_15216 = state_15202;(statearr_15216[7] = inst_15179__$1);
(statearr_15216[10] = inst_15189);
return statearr_15216;
})();var statearr_15217_15235 = state_15202__$1;(statearr_15217_15235[2] = null);
(statearr_15217_15235[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15221 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15221[0] = state_machine__5507__auto__);
(statearr_15221[1] = 1);
return statearr_15221;
});
var state_machine__5507__auto____1 = (function (state_15202){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15202);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15222){if((e15222 instanceof Object))
{var ex__5510__auto__ = e15222;var statearr_15223_15236 = state_15202;(statearr_15223_15236[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15202);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15222;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15237 = state_15202;
state_15202 = G__15237;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15202){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15224 = f__5522__auto__.call(null);(statearr_15224[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15225);
return statearr_15224;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15334 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15309){var state_val_15310 = (state_15309[1]);if((state_val_15310 === 1))
{var inst_15286 = null;var state_15309__$1 = (function (){var statearr_15311 = state_15309;(statearr_15311[7] = inst_15286);
return statearr_15311;
})();var statearr_15312_15335 = state_15309__$1;(statearr_15312_15335[2] = null);
(statearr_15312_15335[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15310 === 2))
{var state_15309__$1 = state_15309;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15309__$1,4,ch);
} else
{if((state_val_15310 === 3))
{var inst_15306 = (state_15309[2]);var inst_15307 = cljs.core.async.close_BANG_.call(null,out);var state_15309__$1 = (function (){var statearr_15313 = state_15309;(statearr_15313[8] = inst_15306);
return statearr_15313;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15309__$1,inst_15307);
} else
{if((state_val_15310 === 4))
{var inst_15289 = (state_15309[9]);var inst_15289__$1 = (state_15309[2]);var inst_15290 = (inst_15289__$1 == null);var inst_15291 = cljs.core.not.call(null,inst_15290);var state_15309__$1 = (function (){var statearr_15314 = state_15309;(statearr_15314[9] = inst_15289__$1);
return statearr_15314;
})();if(inst_15291)
{var statearr_15315_15336 = state_15309__$1;(statearr_15315_15336[1] = 5);
} else
{var statearr_15316_15337 = state_15309__$1;(statearr_15316_15337[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15310 === 5))
{var inst_15289 = (state_15309[9]);var inst_15286 = (state_15309[7]);var inst_15293 = cljs.core._EQ_.call(null,inst_15289,inst_15286);var state_15309__$1 = state_15309;if(inst_15293)
{var statearr_15317_15338 = state_15309__$1;(statearr_15317_15338[1] = 8);
} else
{var statearr_15318_15339 = state_15309__$1;(statearr_15318_15339[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15310 === 6))
{var state_15309__$1 = state_15309;var statearr_15320_15340 = state_15309__$1;(statearr_15320_15340[2] = null);
(statearr_15320_15340[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15310 === 7))
{var inst_15304 = (state_15309[2]);var state_15309__$1 = state_15309;var statearr_15321_15341 = state_15309__$1;(statearr_15321_15341[2] = inst_15304);
(statearr_15321_15341[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15310 === 8))
{var inst_15286 = (state_15309[7]);var tmp15319 = inst_15286;var inst_15286__$1 = tmp15319;var state_15309__$1 = (function (){var statearr_15322 = state_15309;(statearr_15322[7] = inst_15286__$1);
return statearr_15322;
})();var statearr_15323_15342 = state_15309__$1;(statearr_15323_15342[2] = null);
(statearr_15323_15342[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15310 === 9))
{var inst_15289 = (state_15309[9]);var state_15309__$1 = state_15309;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15309__$1,11,out,inst_15289);
} else
{if((state_val_15310 === 10))
{var inst_15301 = (state_15309[2]);var state_15309__$1 = state_15309;var statearr_15324_15343 = state_15309__$1;(statearr_15324_15343[2] = inst_15301);
(statearr_15324_15343[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15310 === 11))
{var inst_15289 = (state_15309[9]);var inst_15298 = (state_15309[2]);var inst_15286 = inst_15289;var state_15309__$1 = (function (){var statearr_15325 = state_15309;(statearr_15325[10] = inst_15298);
(statearr_15325[7] = inst_15286);
return statearr_15325;
})();var statearr_15326_15344 = state_15309__$1;(statearr_15326_15344[2] = null);
(statearr_15326_15344[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15330 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15330[0] = state_machine__5507__auto__);
(statearr_15330[1] = 1);
return statearr_15330;
});
var state_machine__5507__auto____1 = (function (state_15309){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15309);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15331){if((e15331 instanceof Object))
{var ex__5510__auto__ = e15331;var statearr_15332_15345 = state_15309;(statearr_15332_15345[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15309);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15331;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15346 = state_15309;
state_15309 = G__15346;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15309){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15333 = f__5522__auto__.call(null);(statearr_15333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15334);
return statearr_15333;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15481 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15451){var state_val_15452 = (state_15451[1]);if((state_val_15452 === 1))
{var inst_15414 = (new Array(n));var inst_15415 = inst_15414;var inst_15416 = 0;var state_15451__$1 = (function (){var statearr_15453 = state_15451;(statearr_15453[7] = inst_15416);
(statearr_15453[8] = inst_15415);
return statearr_15453;
})();var statearr_15454_15482 = state_15451__$1;(statearr_15454_15482[2] = null);
(statearr_15454_15482[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 2))
{var state_15451__$1 = state_15451;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15451__$1,4,ch);
} else
{if((state_val_15452 === 3))
{var inst_15449 = (state_15451[2]);var state_15451__$1 = state_15451;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15451__$1,inst_15449);
} else
{if((state_val_15452 === 4))
{var inst_15419 = (state_15451[9]);var inst_15419__$1 = (state_15451[2]);var inst_15420 = (inst_15419__$1 == null);var inst_15421 = cljs.core.not.call(null,inst_15420);var state_15451__$1 = (function (){var statearr_15455 = state_15451;(statearr_15455[9] = inst_15419__$1);
return statearr_15455;
})();if(inst_15421)
{var statearr_15456_15483 = state_15451__$1;(statearr_15456_15483[1] = 5);
} else
{var statearr_15457_15484 = state_15451__$1;(statearr_15457_15484[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 5))
{var inst_15416 = (state_15451[7]);var inst_15424 = (state_15451[10]);var inst_15419 = (state_15451[9]);var inst_15415 = (state_15451[8]);var inst_15423 = (inst_15415[inst_15416] = inst_15419);var inst_15424__$1 = (inst_15416 + 1);var inst_15425 = (inst_15424__$1 < n);var state_15451__$1 = (function (){var statearr_15458 = state_15451;(statearr_15458[10] = inst_15424__$1);
(statearr_15458[11] = inst_15423);
return statearr_15458;
})();if(cljs.core.truth_(inst_15425))
{var statearr_15459_15485 = state_15451__$1;(statearr_15459_15485[1] = 8);
} else
{var statearr_15460_15486 = state_15451__$1;(statearr_15460_15486[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 6))
{var inst_15416 = (state_15451[7]);var inst_15437 = (inst_15416 > 0);var state_15451__$1 = state_15451;if(cljs.core.truth_(inst_15437))
{var statearr_15462_15487 = state_15451__$1;(statearr_15462_15487[1] = 12);
} else
{var statearr_15463_15488 = state_15451__$1;(statearr_15463_15488[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 7))
{var inst_15447 = (state_15451[2]);var state_15451__$1 = state_15451;var statearr_15464_15489 = state_15451__$1;(statearr_15464_15489[2] = inst_15447);
(statearr_15464_15489[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 8))
{var inst_15424 = (state_15451[10]);var inst_15415 = (state_15451[8]);var tmp15461 = inst_15415;var inst_15415__$1 = tmp15461;var inst_15416 = inst_15424;var state_15451__$1 = (function (){var statearr_15465 = state_15451;(statearr_15465[7] = inst_15416);
(statearr_15465[8] = inst_15415__$1);
return statearr_15465;
})();var statearr_15466_15490 = state_15451__$1;(statearr_15466_15490[2] = null);
(statearr_15466_15490[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 9))
{var inst_15415 = (state_15451[8]);var inst_15429 = cljs.core.vec.call(null,inst_15415);var state_15451__$1 = state_15451;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15451__$1,11,out,inst_15429);
} else
{if((state_val_15452 === 10))
{var inst_15435 = (state_15451[2]);var state_15451__$1 = state_15451;var statearr_15467_15491 = state_15451__$1;(statearr_15467_15491[2] = inst_15435);
(statearr_15467_15491[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 11))
{var inst_15431 = (state_15451[2]);var inst_15432 = (new Array(n));var inst_15415 = inst_15432;var inst_15416 = 0;var state_15451__$1 = (function (){var statearr_15468 = state_15451;(statearr_15468[7] = inst_15416);
(statearr_15468[8] = inst_15415);
(statearr_15468[12] = inst_15431);
return statearr_15468;
})();var statearr_15469_15492 = state_15451__$1;(statearr_15469_15492[2] = null);
(statearr_15469_15492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 12))
{var inst_15415 = (state_15451[8]);var inst_15439 = cljs.core.vec.call(null,inst_15415);var state_15451__$1 = state_15451;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15451__$1,15,out,inst_15439);
} else
{if((state_val_15452 === 13))
{var state_15451__$1 = state_15451;var statearr_15470_15493 = state_15451__$1;(statearr_15470_15493[2] = null);
(statearr_15470_15493[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 14))
{var inst_15444 = (state_15451[2]);var inst_15445 = cljs.core.async.close_BANG_.call(null,out);var state_15451__$1 = (function (){var statearr_15471 = state_15451;(statearr_15471[13] = inst_15444);
return statearr_15471;
})();var statearr_15472_15494 = state_15451__$1;(statearr_15472_15494[2] = inst_15445);
(statearr_15472_15494[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15452 === 15))
{var inst_15441 = (state_15451[2]);var state_15451__$1 = state_15451;var statearr_15473_15495 = state_15451__$1;(statearr_15473_15495[2] = inst_15441);
(statearr_15473_15495[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15477 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15477[0] = state_machine__5507__auto__);
(statearr_15477[1] = 1);
return statearr_15477;
});
var state_machine__5507__auto____1 = (function (state_15451){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15451);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15478){if((e15478 instanceof Object))
{var ex__5510__auto__ = e15478;var statearr_15479_15496 = state_15451;(statearr_15479_15496[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15451);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15478;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15497 = state_15451;
state_15451 = G__15497;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15451){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15451);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15480 = f__5522__auto__.call(null);(statearr_15480[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15481);
return statearr_15480;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15640 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15610){var state_val_15611 = (state_15610[1]);if((state_val_15611 === 1))
{var inst_15569 = [];var inst_15570 = inst_15569;var inst_15571 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15610__$1 = (function (){var statearr_15612 = state_15610;(statearr_15612[7] = inst_15570);
(statearr_15612[8] = inst_15571);
return statearr_15612;
})();var statearr_15613_15641 = state_15610__$1;(statearr_15613_15641[2] = null);
(statearr_15613_15641[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 2))
{var state_15610__$1 = state_15610;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15610__$1,4,ch);
} else
{if((state_val_15611 === 3))
{var inst_15608 = (state_15610[2]);var state_15610__$1 = state_15610;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15610__$1,inst_15608);
} else
{if((state_val_15611 === 4))
{var inst_15574 = (state_15610[9]);var inst_15574__$1 = (state_15610[2]);var inst_15575 = (inst_15574__$1 == null);var inst_15576 = cljs.core.not.call(null,inst_15575);var state_15610__$1 = (function (){var statearr_15614 = state_15610;(statearr_15614[9] = inst_15574__$1);
return statearr_15614;
})();if(inst_15576)
{var statearr_15615_15642 = state_15610__$1;(statearr_15615_15642[1] = 5);
} else
{var statearr_15616_15643 = state_15610__$1;(statearr_15616_15643[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 5))
{var inst_15574 = (state_15610[9]);var inst_15571 = (state_15610[8]);var inst_15578 = (state_15610[10]);var inst_15578__$1 = f.call(null,inst_15574);var inst_15579 = cljs.core._EQ_.call(null,inst_15578__$1,inst_15571);var inst_15580 = cljs.core.keyword_identical_QMARK_.call(null,inst_15571,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15581 = (inst_15579) || (inst_15580);var state_15610__$1 = (function (){var statearr_15617 = state_15610;(statearr_15617[10] = inst_15578__$1);
return statearr_15617;
})();if(cljs.core.truth_(inst_15581))
{var statearr_15618_15644 = state_15610__$1;(statearr_15618_15644[1] = 8);
} else
{var statearr_15619_15645 = state_15610__$1;(statearr_15619_15645[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 6))
{var inst_15570 = (state_15610[7]);var inst_15595 = inst_15570.length;var inst_15596 = (inst_15595 > 0);var state_15610__$1 = state_15610;if(cljs.core.truth_(inst_15596))
{var statearr_15621_15646 = state_15610__$1;(statearr_15621_15646[1] = 12);
} else
{var statearr_15622_15647 = state_15610__$1;(statearr_15622_15647[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 7))
{var inst_15606 = (state_15610[2]);var state_15610__$1 = state_15610;var statearr_15623_15648 = state_15610__$1;(statearr_15623_15648[2] = inst_15606);
(statearr_15623_15648[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 8))
{var inst_15574 = (state_15610[9]);var inst_15570 = (state_15610[7]);var inst_15578 = (state_15610[10]);var inst_15583 = inst_15570.push(inst_15574);var tmp15620 = inst_15570;var inst_15570__$1 = tmp15620;var inst_15571 = inst_15578;var state_15610__$1 = (function (){var statearr_15624 = state_15610;(statearr_15624[7] = inst_15570__$1);
(statearr_15624[8] = inst_15571);
(statearr_15624[11] = inst_15583);
return statearr_15624;
})();var statearr_15625_15649 = state_15610__$1;(statearr_15625_15649[2] = null);
(statearr_15625_15649[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 9))
{var inst_15570 = (state_15610[7]);var inst_15586 = cljs.core.vec.call(null,inst_15570);var state_15610__$1 = state_15610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15610__$1,11,out,inst_15586);
} else
{if((state_val_15611 === 10))
{var inst_15593 = (state_15610[2]);var state_15610__$1 = state_15610;var statearr_15626_15650 = state_15610__$1;(statearr_15626_15650[2] = inst_15593);
(statearr_15626_15650[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 11))
{var inst_15574 = (state_15610[9]);var inst_15578 = (state_15610[10]);var inst_15588 = (state_15610[2]);var inst_15589 = [];var inst_15590 = inst_15589.push(inst_15574);var inst_15570 = inst_15589;var inst_15571 = inst_15578;var state_15610__$1 = (function (){var statearr_15627 = state_15610;(statearr_15627[7] = inst_15570);
(statearr_15627[12] = inst_15588);
(statearr_15627[8] = inst_15571);
(statearr_15627[13] = inst_15590);
return statearr_15627;
})();var statearr_15628_15651 = state_15610__$1;(statearr_15628_15651[2] = null);
(statearr_15628_15651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 12))
{var inst_15570 = (state_15610[7]);var inst_15598 = cljs.core.vec.call(null,inst_15570);var state_15610__$1 = state_15610;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15610__$1,15,out,inst_15598);
} else
{if((state_val_15611 === 13))
{var state_15610__$1 = state_15610;var statearr_15629_15652 = state_15610__$1;(statearr_15629_15652[2] = null);
(statearr_15629_15652[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 14))
{var inst_15603 = (state_15610[2]);var inst_15604 = cljs.core.async.close_BANG_.call(null,out);var state_15610__$1 = (function (){var statearr_15630 = state_15610;(statearr_15630[14] = inst_15603);
return statearr_15630;
})();var statearr_15631_15653 = state_15610__$1;(statearr_15631_15653[2] = inst_15604);
(statearr_15631_15653[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15611 === 15))
{var inst_15600 = (state_15610[2]);var state_15610__$1 = state_15610;var statearr_15632_15654 = state_15610__$1;(statearr_15632_15654[2] = inst_15600);
(statearr_15632_15654[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15636 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15636[0] = state_machine__5507__auto__);
(statearr_15636[1] = 1);
return statearr_15636;
});
var state_machine__5507__auto____1 = (function (state_15610){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15610);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15637){if((e15637 instanceof Object))
{var ex__5510__auto__ = e15637;var statearr_15638_15655 = state_15610;(statearr_15638_15655[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15610);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15637;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15656 = state_15610;
state_15610 = G__15656;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15610){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15610);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15639 = f__5522__auto__.call(null);(statearr_15639[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15640);
return statearr_15639;
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