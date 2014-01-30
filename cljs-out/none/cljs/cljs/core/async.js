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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13112 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13112 = (function (f,fn_handler,meta13113){
this.f = f;
this.fn_handler = fn_handler;
this.meta13113 = meta13113;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13112.cljs$lang$type = true;
cljs.core.async.t13112.cljs$lang$ctorStr = "cljs.core.async/t13112";
cljs.core.async.t13112.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13112");
});
cljs.core.async.t13112.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13112.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13112.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13112.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13114){var self__ = this;
var _13114__$1 = this;return self__.meta13113;
});
cljs.core.async.t13112.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13114,meta13113__$1){var self__ = this;
var _13114__$1 = this;return (new cljs.core.async.t13112(self__.f,self__.fn_handler,meta13113__$1));
});
cljs.core.async.__GT_t13112 = (function __GT_t13112(f__$1,fn_handler__$1,meta13113){return (new cljs.core.async.t13112(f__$1,fn_handler__$1,meta13113));
});
}
return (new cljs.core.async.t13112(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13116 = buff;if(G__13116)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13116.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13116.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13116);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13116);
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
{var val_13117 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13117);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13117);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13118 = n;var x_13119 = 0;while(true){
if((x_13119 < n__4248__auto___13118))
{(a[x_13119] = 0);
{
var G__13120 = (x_13119 + 1);
x_13119 = G__13120;
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
var G__13121 = (i + 1);
i = G__13121;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13125 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13125 = (function (flag,alt_flag,meta13126){
this.flag = flag;
this.alt_flag = alt_flag;
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
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13125.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13127){var self__ = this;
var _13127__$1 = this;return self__.meta13126;
});
cljs.core.async.t13125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13127,meta13126__$1){var self__ = this;
var _13127__$1 = this;return (new cljs.core.async.t13125(self__.flag,self__.alt_flag,meta13126__$1));
});
cljs.core.async.__GT_t13125 = (function __GT_t13125(flag__$1,alt_flag__$1,meta13126){return (new cljs.core.async.t13125(flag__$1,alt_flag__$1,meta13126));
});
}
return (new cljs.core.async.t13125(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13131 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13131 = (function (cb,flag,alt_handler,meta13132){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13132 = meta13132;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13131.cljs$lang$type = true;
cljs.core.async.t13131.cljs$lang$ctorStr = "cljs.core.async/t13131";
cljs.core.async.t13131.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13131");
});
cljs.core.async.t13131.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13131.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13131.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13133){var self__ = this;
var _13133__$1 = this;return self__.meta13132;
});
cljs.core.async.t13131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13133,meta13132__$1){var self__ = this;
var _13133__$1 = this;return (new cljs.core.async.t13131(self__.cb,self__.flag,self__.alt_handler,meta13132__$1));
});
cljs.core.async.__GT_t13131 = (function __GT_t13131(cb__$1,flag__$1,alt_handler__$1,meta13132){return (new cljs.core.async.t13131(cb__$1,flag__$1,alt_handler__$1,meta13132));
});
}
return (new cljs.core.async.t13131(cb,flag,alt_handler,null));
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
return (function (p1__13134_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13134_SHARP_,port], null));
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
var G__13135 = (i + 1);
i = G__13135;
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
var alts_BANG___delegate = function (ports,p__13136){var map__13138 = p__13136;var map__13138__$1 = ((cljs.core.seq_QMARK_.call(null,map__13138))?cljs.core.apply.call(null,cljs.core.hash_map,map__13138):map__13138);var opts = map__13138__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13136 = null;if (arguments.length > 1) {
  p__13136 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13136);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13139){
var ports = cljs.core.first(arglist__13139);
var p__13136 = cljs.core.rest(arglist__13139);
return alts_BANG___delegate(ports,p__13136);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13147 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13147 = (function (ch,f,map_LT_,meta13148){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13148 = meta13148;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13147.cljs$lang$type = true;
cljs.core.async.t13147.cljs$lang$ctorStr = "cljs.core.async/t13147";
cljs.core.async.t13147.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13147");
});
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13150 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13150 = (function (fn1,_,meta13148,ch,f,map_LT_,meta13151){
this.fn1 = fn1;
this._ = _;
this.meta13148 = meta13148;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13151 = meta13151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13150.cljs$lang$type = true;
cljs.core.async.t13150.cljs$lang$ctorStr = "cljs.core.async/t13150";
cljs.core.async.t13150.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13150");
});
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13140_SHARP_){return f1.call(null,(((p1__13140_SHARP_ == null))?null:self__.f.call(null,p1__13140_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13152){var self__ = this;
var _13152__$1 = this;return self__.meta13151;
});
cljs.core.async.t13150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13152,meta13151__$1){var self__ = this;
var _13152__$1 = this;return (new cljs.core.async.t13150(self__.fn1,self__._,self__.meta13148,self__.ch,self__.f,self__.map_LT_,meta13151__$1));
});
cljs.core.async.__GT_t13150 = (function __GT_t13150(fn1__$1,___$2,meta13148__$1,ch__$2,f__$2,map_LT___$2,meta13151){return (new cljs.core.async.t13150(fn1__$1,___$2,meta13148__$1,ch__$2,f__$2,map_LT___$2,meta13151));
});
}
return (new cljs.core.async.t13150(fn1,___$1,self__.meta13148,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13147.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13147.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13149){var self__ = this;
var _13149__$1 = this;return self__.meta13148;
});
cljs.core.async.t13147.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13149,meta13148__$1){var self__ = this;
var _13149__$1 = this;return (new cljs.core.async.t13147(self__.ch,self__.f,self__.map_LT_,meta13148__$1));
});
cljs.core.async.__GT_t13147 = (function __GT_t13147(ch__$1,f__$1,map_LT___$1,meta13148){return (new cljs.core.async.t13147(ch__$1,f__$1,map_LT___$1,meta13148));
});
}
return (new cljs.core.async.t13147(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13156 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13156 = (function (ch,f,map_GT_,meta13157){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
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
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
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
var _13158__$1 = this;return (new cljs.core.async.t13156(self__.ch,self__.f,self__.map_GT_,meta13157__$1));
});
cljs.core.async.__GT_t13156 = (function __GT_t13156(ch__$1,f__$1,map_GT___$1,meta13157){return (new cljs.core.async.t13156(ch__$1,f__$1,map_GT___$1,meta13157));
});
}
return (new cljs.core.async.t13156(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13162 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13162 = (function (ch,p,filter_GT_,meta13163){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13163 = meta13163;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13162.cljs$lang$type = true;
cljs.core.async.t13162.cljs$lang$ctorStr = "cljs.core.async/t13162";
cljs.core.async.t13162.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13162");
});
cljs.core.async.t13162.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13162.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13162.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13162.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13162.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13162.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13162.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13164){var self__ = this;
var _13164__$1 = this;return self__.meta13163;
});
cljs.core.async.t13162.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13164,meta13163__$1){var self__ = this;
var _13164__$1 = this;return (new cljs.core.async.t13162(self__.ch,self__.p,self__.filter_GT_,meta13163__$1));
});
cljs.core.async.__GT_t13162 = (function __GT_t13162(ch__$1,p__$1,filter_GT___$1,meta13163){return (new cljs.core.async.t13162(ch__$1,p__$1,filter_GT___$1,meta13163));
});
}
return (new cljs.core.async.t13162(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13247 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13226){var state_val_13227 = (state_13226[1]);if((state_val_13227 === 1))
{var state_13226__$1 = state_13226;var statearr_13228_13248 = state_13226__$1;(statearr_13228_13248[2] = null);
(statearr_13228_13248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 2))
{var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13226__$1,4,ch);
} else
{if((state_val_13227 === 3))
{var inst_13224 = (state_13226[2]);var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13226__$1,inst_13224);
} else
{if((state_val_13227 === 4))
{var inst_13208 = (state_13226[7]);var inst_13208__$1 = (state_13226[2]);var inst_13209 = (inst_13208__$1 == null);var state_13226__$1 = (function (){var statearr_13229 = state_13226;(statearr_13229[7] = inst_13208__$1);
return statearr_13229;
})();if(cljs.core.truth_(inst_13209))
{var statearr_13230_13249 = state_13226__$1;(statearr_13230_13249[1] = 5);
} else
{var statearr_13231_13250 = state_13226__$1;(statearr_13231_13250[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 5))
{var inst_13211 = cljs.core.async.close_BANG_.call(null,out);var state_13226__$1 = state_13226;var statearr_13232_13251 = state_13226__$1;(statearr_13232_13251[2] = inst_13211);
(statearr_13232_13251[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 6))
{var inst_13208 = (state_13226[7]);var inst_13213 = p.call(null,inst_13208);var state_13226__$1 = state_13226;if(cljs.core.truth_(inst_13213))
{var statearr_13233_13252 = state_13226__$1;(statearr_13233_13252[1] = 8);
} else
{var statearr_13234_13253 = state_13226__$1;(statearr_13234_13253[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 7))
{var inst_13222 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13235_13254 = state_13226__$1;(statearr_13235_13254[2] = inst_13222);
(statearr_13235_13254[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 8))
{var inst_13208 = (state_13226[7]);var state_13226__$1 = state_13226;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13226__$1,11,out,inst_13208);
} else
{if((state_val_13227 === 9))
{var state_13226__$1 = state_13226;var statearr_13236_13255 = state_13226__$1;(statearr_13236_13255[2] = null);
(statearr_13236_13255[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 10))
{var inst_13219 = (state_13226[2]);var state_13226__$1 = (function (){var statearr_13237 = state_13226;(statearr_13237[8] = inst_13219);
return statearr_13237;
})();var statearr_13238_13256 = state_13226__$1;(statearr_13238_13256[2] = null);
(statearr_13238_13256[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13227 === 11))
{var inst_13216 = (state_13226[2]);var state_13226__$1 = state_13226;var statearr_13239_13257 = state_13226__$1;(statearr_13239_13257[2] = inst_13216);
(statearr_13239_13257[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13243 = [null,null,null,null,null,null,null,null,null];(statearr_13243[0] = state_machine__5507__auto__);
(statearr_13243[1] = 1);
return statearr_13243;
});
var state_machine__5507__auto____1 = (function (state_13226){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13226);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13244){if((e13244 instanceof Object))
{var ex__5510__auto__ = e13244;var statearr_13245_13258 = state_13226;(statearr_13245_13258[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13226);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13259 = state_13226;
state_13226 = G__13259;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13226){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13226);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13246 = f__5522__auto__.call(null);(statearr_13246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13247);
return statearr_13246;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13411){var state_val_13412 = (state_13411[1]);if((state_val_13412 === 1))
{var state_13411__$1 = state_13411;var statearr_13413_13450 = state_13411__$1;(statearr_13413_13450[2] = null);
(statearr_13413_13450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 2))
{var state_13411__$1 = state_13411;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13411__$1,4,in$);
} else
{if((state_val_13412 === 3))
{var inst_13409 = (state_13411[2]);var state_13411__$1 = state_13411;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13411__$1,inst_13409);
} else
{if((state_val_13412 === 4))
{var inst_13357 = (state_13411[7]);var inst_13357__$1 = (state_13411[2]);var inst_13358 = (inst_13357__$1 == null);var state_13411__$1 = (function (){var statearr_13414 = state_13411;(statearr_13414[7] = inst_13357__$1);
return statearr_13414;
})();if(cljs.core.truth_(inst_13358))
{var statearr_13415_13451 = state_13411__$1;(statearr_13415_13451[1] = 5);
} else
{var statearr_13416_13452 = state_13411__$1;(statearr_13416_13452[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 5))
{var inst_13360 = cljs.core.async.close_BANG_.call(null,out);var state_13411__$1 = state_13411;var statearr_13417_13453 = state_13411__$1;(statearr_13417_13453[2] = inst_13360);
(statearr_13417_13453[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 6))
{var inst_13357 = (state_13411[7]);var inst_13362 = f.call(null,inst_13357);var inst_13367 = cljs.core.seq.call(null,inst_13362);var inst_13368 = inst_13367;var inst_13369 = null;var inst_13370 = 0;var inst_13371 = 0;var state_13411__$1 = (function (){var statearr_13418 = state_13411;(statearr_13418[8] = inst_13369);
(statearr_13418[9] = inst_13368);
(statearr_13418[10] = inst_13370);
(statearr_13418[11] = inst_13371);
return statearr_13418;
})();var statearr_13419_13454 = state_13411__$1;(statearr_13419_13454[2] = null);
(statearr_13419_13454[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 7))
{var inst_13407 = (state_13411[2]);var state_13411__$1 = state_13411;var statearr_13420_13455 = state_13411__$1;(statearr_13420_13455[2] = inst_13407);
(statearr_13420_13455[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 8))
{var inst_13370 = (state_13411[10]);var inst_13371 = (state_13411[11]);var inst_13373 = (inst_13371 < inst_13370);var inst_13374 = inst_13373;var state_13411__$1 = state_13411;if(cljs.core.truth_(inst_13374))
{var statearr_13421_13456 = state_13411__$1;(statearr_13421_13456[1] = 10);
} else
{var statearr_13422_13457 = state_13411__$1;(statearr_13422_13457[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 9))
{var inst_13404 = (state_13411[2]);var state_13411__$1 = (function (){var statearr_13423 = state_13411;(statearr_13423[12] = inst_13404);
return statearr_13423;
})();var statearr_13424_13458 = state_13411__$1;(statearr_13424_13458[2] = null);
(statearr_13424_13458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 10))
{var inst_13369 = (state_13411[8]);var inst_13371 = (state_13411[11]);var inst_13376 = cljs.core._nth.call(null,inst_13369,inst_13371);var state_13411__$1 = state_13411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13411__$1,13,out,inst_13376);
} else
{if((state_val_13412 === 11))
{var inst_13368 = (state_13411[9]);var inst_13382 = (state_13411[13]);var inst_13382__$1 = cljs.core.seq.call(null,inst_13368);var state_13411__$1 = (function (){var statearr_13428 = state_13411;(statearr_13428[13] = inst_13382__$1);
return statearr_13428;
})();if(inst_13382__$1)
{var statearr_13429_13459 = state_13411__$1;(statearr_13429_13459[1] = 14);
} else
{var statearr_13430_13460 = state_13411__$1;(statearr_13430_13460[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 12))
{var inst_13402 = (state_13411[2]);var state_13411__$1 = state_13411;var statearr_13431_13461 = state_13411__$1;(statearr_13431_13461[2] = inst_13402);
(statearr_13431_13461[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 13))
{var inst_13369 = (state_13411[8]);var inst_13368 = (state_13411[9]);var inst_13370 = (state_13411[10]);var inst_13371 = (state_13411[11]);var inst_13378 = (state_13411[2]);var inst_13379 = (inst_13371 + 1);var tmp13425 = inst_13369;var tmp13426 = inst_13368;var tmp13427 = inst_13370;var inst_13368__$1 = tmp13426;var inst_13369__$1 = tmp13425;var inst_13370__$1 = tmp13427;var inst_13371__$1 = inst_13379;var state_13411__$1 = (function (){var statearr_13432 = state_13411;(statearr_13432[8] = inst_13369__$1);
(statearr_13432[9] = inst_13368__$1);
(statearr_13432[10] = inst_13370__$1);
(statearr_13432[11] = inst_13371__$1);
(statearr_13432[14] = inst_13378);
return statearr_13432;
})();var statearr_13433_13462 = state_13411__$1;(statearr_13433_13462[2] = null);
(statearr_13433_13462[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 14))
{var inst_13382 = (state_13411[13]);var inst_13384 = cljs.core.chunked_seq_QMARK_.call(null,inst_13382);var state_13411__$1 = state_13411;if(inst_13384)
{var statearr_13434_13463 = state_13411__$1;(statearr_13434_13463[1] = 17);
} else
{var statearr_13435_13464 = state_13411__$1;(statearr_13435_13464[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 15))
{var state_13411__$1 = state_13411;var statearr_13436_13465 = state_13411__$1;(statearr_13436_13465[2] = null);
(statearr_13436_13465[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 16))
{var inst_13400 = (state_13411[2]);var state_13411__$1 = state_13411;var statearr_13437_13466 = state_13411__$1;(statearr_13437_13466[2] = inst_13400);
(statearr_13437_13466[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 17))
{var inst_13382 = (state_13411[13]);var inst_13386 = cljs.core.chunk_first.call(null,inst_13382);var inst_13387 = cljs.core.chunk_rest.call(null,inst_13382);var inst_13388 = cljs.core.count.call(null,inst_13386);var inst_13368 = inst_13387;var inst_13369 = inst_13386;var inst_13370 = inst_13388;var inst_13371 = 0;var state_13411__$1 = (function (){var statearr_13438 = state_13411;(statearr_13438[8] = inst_13369);
(statearr_13438[9] = inst_13368);
(statearr_13438[10] = inst_13370);
(statearr_13438[11] = inst_13371);
return statearr_13438;
})();var statearr_13439_13467 = state_13411__$1;(statearr_13439_13467[2] = null);
(statearr_13439_13467[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 18))
{var inst_13382 = (state_13411[13]);var inst_13391 = cljs.core.first.call(null,inst_13382);var state_13411__$1 = state_13411;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13411__$1,20,out,inst_13391);
} else
{if((state_val_13412 === 19))
{var inst_13397 = (state_13411[2]);var state_13411__$1 = state_13411;var statearr_13440_13468 = state_13411__$1;(statearr_13440_13468[2] = inst_13397);
(statearr_13440_13468[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13412 === 20))
{var inst_13382 = (state_13411[13]);var inst_13393 = (state_13411[2]);var inst_13394 = cljs.core.next.call(null,inst_13382);var inst_13368 = inst_13394;var inst_13369 = null;var inst_13370 = 0;var inst_13371 = 0;var state_13411__$1 = (function (){var statearr_13441 = state_13411;(statearr_13441[8] = inst_13369);
(statearr_13441[9] = inst_13368);
(statearr_13441[15] = inst_13393);
(statearr_13441[10] = inst_13370);
(statearr_13441[11] = inst_13371);
return statearr_13441;
})();var statearr_13442_13469 = state_13411__$1;(statearr_13442_13469[2] = null);
(statearr_13442_13469[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13446 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13446[0] = state_machine__5507__auto__);
(statearr_13446[1] = 1);
return statearr_13446;
});
var state_machine__5507__auto____1 = (function (state_13411){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13411);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13447){if((e13447 instanceof Object))
{var ex__5510__auto__ = e13447;var statearr_13448_13470 = state_13411;(statearr_13448_13470[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13411);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13447;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13471 = state_13411;
state_13411 = G__13471;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13411){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13449 = f__5522__auto__.call(null);(statearr_13449[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13449;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13552 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13531){var state_val_13532 = (state_13531[1]);if((state_val_13532 === 1))
{var state_13531__$1 = state_13531;var statearr_13533_13553 = state_13531__$1;(statearr_13533_13553[2] = null);
(statearr_13533_13553[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13532 === 2))
{var state_13531__$1 = state_13531;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13531__$1,4,from);
} else
{if((state_val_13532 === 3))
{var inst_13529 = (state_13531[2]);var state_13531__$1 = state_13531;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13531__$1,inst_13529);
} else
{if((state_val_13532 === 4))
{var inst_13514 = (state_13531[7]);var inst_13514__$1 = (state_13531[2]);var inst_13515 = (inst_13514__$1 == null);var state_13531__$1 = (function (){var statearr_13534 = state_13531;(statearr_13534[7] = inst_13514__$1);
return statearr_13534;
})();if(cljs.core.truth_(inst_13515))
{var statearr_13535_13554 = state_13531__$1;(statearr_13535_13554[1] = 5);
} else
{var statearr_13536_13555 = state_13531__$1;(statearr_13536_13555[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13532 === 5))
{var state_13531__$1 = state_13531;if(cljs.core.truth_(close_QMARK_))
{var statearr_13537_13556 = state_13531__$1;(statearr_13537_13556[1] = 8);
} else
{var statearr_13538_13557 = state_13531__$1;(statearr_13538_13557[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13532 === 6))
{var inst_13514 = (state_13531[7]);var state_13531__$1 = state_13531;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13531__$1,11,to,inst_13514);
} else
{if((state_val_13532 === 7))
{var inst_13527 = (state_13531[2]);var state_13531__$1 = state_13531;var statearr_13539_13558 = state_13531__$1;(statearr_13539_13558[2] = inst_13527);
(statearr_13539_13558[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13532 === 8))
{var inst_13518 = cljs.core.async.close_BANG_.call(null,to);var state_13531__$1 = state_13531;var statearr_13540_13559 = state_13531__$1;(statearr_13540_13559[2] = inst_13518);
(statearr_13540_13559[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13532 === 9))
{var state_13531__$1 = state_13531;var statearr_13541_13560 = state_13531__$1;(statearr_13541_13560[2] = null);
(statearr_13541_13560[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13532 === 10))
{var inst_13521 = (state_13531[2]);var state_13531__$1 = state_13531;var statearr_13542_13561 = state_13531__$1;(statearr_13542_13561[2] = inst_13521);
(statearr_13542_13561[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13532 === 11))
{var inst_13524 = (state_13531[2]);var state_13531__$1 = (function (){var statearr_13543 = state_13531;(statearr_13543[8] = inst_13524);
return statearr_13543;
})();var statearr_13544_13562 = state_13531__$1;(statearr_13544_13562[2] = null);
(statearr_13544_13562[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13548 = [null,null,null,null,null,null,null,null,null];(statearr_13548[0] = state_machine__5507__auto__);
(statearr_13548[1] = 1);
return statearr_13548;
});
var state_machine__5507__auto____1 = (function (state_13531){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13531);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13549){if((e13549 instanceof Object))
{var ex__5510__auto__ = e13549;var statearr_13550_13563 = state_13531;(statearr_13550_13563[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13531);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13564 = state_13531;
state_13531 = G__13564;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13531){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13531);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13551 = f__5522__auto__.call(null);(statearr_13551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13552);
return statearr_13551;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13651 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13629){var state_val_13630 = (state_13629[1]);if((state_val_13630 === 1))
{var state_13629__$1 = state_13629;var statearr_13631_13652 = state_13629__$1;(statearr_13631_13652[2] = null);
(statearr_13631_13652[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 2))
{var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13629__$1,4,ch);
} else
{if((state_val_13630 === 3))
{var inst_13627 = (state_13629[2]);var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13629__$1,inst_13627);
} else
{if((state_val_13630 === 4))
{var inst_13610 = (state_13629[7]);var inst_13610__$1 = (state_13629[2]);var inst_13611 = (inst_13610__$1 == null);var state_13629__$1 = (function (){var statearr_13632 = state_13629;(statearr_13632[7] = inst_13610__$1);
return statearr_13632;
})();if(cljs.core.truth_(inst_13611))
{var statearr_13633_13653 = state_13629__$1;(statearr_13633_13653[1] = 5);
} else
{var statearr_13634_13654 = state_13629__$1;(statearr_13634_13654[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 5))
{var inst_13613 = cljs.core.async.close_BANG_.call(null,tc);var inst_13614 = cljs.core.async.close_BANG_.call(null,fc);var state_13629__$1 = (function (){var statearr_13635 = state_13629;(statearr_13635[8] = inst_13613);
return statearr_13635;
})();var statearr_13636_13655 = state_13629__$1;(statearr_13636_13655[2] = inst_13614);
(statearr_13636_13655[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 6))
{var inst_13610 = (state_13629[7]);var inst_13616 = p.call(null,inst_13610);var state_13629__$1 = state_13629;if(cljs.core.truth_(inst_13616))
{var statearr_13637_13656 = state_13629__$1;(statearr_13637_13656[1] = 9);
} else
{var statearr_13638_13657 = state_13629__$1;(statearr_13638_13657[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 7))
{var inst_13625 = (state_13629[2]);var state_13629__$1 = state_13629;var statearr_13639_13658 = state_13629__$1;(statearr_13639_13658[2] = inst_13625);
(statearr_13639_13658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 8))
{var inst_13622 = (state_13629[2]);var state_13629__$1 = (function (){var statearr_13640 = state_13629;(statearr_13640[9] = inst_13622);
return statearr_13640;
})();var statearr_13641_13659 = state_13629__$1;(statearr_13641_13659[2] = null);
(statearr_13641_13659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 9))
{var state_13629__$1 = state_13629;var statearr_13642_13660 = state_13629__$1;(statearr_13642_13660[2] = tc);
(statearr_13642_13660[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 10))
{var state_13629__$1 = state_13629;var statearr_13643_13661 = state_13629__$1;(statearr_13643_13661[2] = fc);
(statearr_13643_13661[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13630 === 11))
{var inst_13610 = (state_13629[7]);var inst_13620 = (state_13629[2]);var state_13629__$1 = state_13629;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13629__$1,8,inst_13620,inst_13610);
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
var state_machine__5507__auto____0 = (function (){var statearr_13647 = [null,null,null,null,null,null,null,null,null,null];(statearr_13647[0] = state_machine__5507__auto__);
(statearr_13647[1] = 1);
return statearr_13647;
});
var state_machine__5507__auto____1 = (function (state_13629){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13629);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13648){if((e13648 instanceof Object))
{var ex__5510__auto__ = e13648;var statearr_13649_13662 = state_13629;(statearr_13649_13662[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13629);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13648;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13663 = state_13629;
state_13629 = G__13663;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13629){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13629);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13650 = f__5522__auto__.call(null);(statearr_13650[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13651);
return statearr_13650;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13710){var state_val_13711 = (state_13710[1]);if((state_val_13711 === 7))
{var inst_13706 = (state_13710[2]);var state_13710__$1 = state_13710;var statearr_13712_13728 = state_13710__$1;(statearr_13712_13728[2] = inst_13706);
(statearr_13712_13728[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13711 === 6))
{var inst_13699 = (state_13710[7]);var inst_13696 = (state_13710[8]);var inst_13703 = f.call(null,inst_13696,inst_13699);var inst_13696__$1 = inst_13703;var state_13710__$1 = (function (){var statearr_13713 = state_13710;(statearr_13713[8] = inst_13696__$1);
return statearr_13713;
})();var statearr_13714_13729 = state_13710__$1;(statearr_13714_13729[2] = null);
(statearr_13714_13729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13711 === 5))
{var inst_13696 = (state_13710[8]);var state_13710__$1 = state_13710;var statearr_13715_13730 = state_13710__$1;(statearr_13715_13730[2] = inst_13696);
(statearr_13715_13730[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13711 === 4))
{var inst_13699 = (state_13710[7]);var inst_13699__$1 = (state_13710[2]);var inst_13700 = (inst_13699__$1 == null);var state_13710__$1 = (function (){var statearr_13716 = state_13710;(statearr_13716[7] = inst_13699__$1);
return statearr_13716;
})();if(cljs.core.truth_(inst_13700))
{var statearr_13717_13731 = state_13710__$1;(statearr_13717_13731[1] = 5);
} else
{var statearr_13718_13732 = state_13710__$1;(statearr_13718_13732[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13711 === 3))
{var inst_13708 = (state_13710[2]);var state_13710__$1 = state_13710;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13710__$1,inst_13708);
} else
{if((state_val_13711 === 2))
{var state_13710__$1 = state_13710;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13710__$1,4,ch);
} else
{if((state_val_13711 === 1))
{var inst_13696 = init;var state_13710__$1 = (function (){var statearr_13719 = state_13710;(statearr_13719[8] = inst_13696);
return statearr_13719;
})();var statearr_13720_13733 = state_13710__$1;(statearr_13720_13733[2] = null);
(statearr_13720_13733[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13724 = [null,null,null,null,null,null,null,null,null];(statearr_13724[0] = state_machine__5507__auto__);
(statearr_13724[1] = 1);
return statearr_13724;
});
var state_machine__5507__auto____1 = (function (state_13710){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13710);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13725){if((e13725 instanceof Object))
{var ex__5510__auto__ = e13725;var statearr_13726_13734 = state_13710;(statearr_13726_13734[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13710);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13735 = state_13710;
state_13710 = G__13735;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13710){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13727 = f__5522__auto__.call(null);(statearr_13727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13727;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13797){var state_val_13798 = (state_13797[1]);if((state_val_13798 === 1))
{var inst_13777 = cljs.core.seq.call(null,coll);var inst_13778 = inst_13777;var state_13797__$1 = (function (){var statearr_13799 = state_13797;(statearr_13799[7] = inst_13778);
return statearr_13799;
})();var statearr_13800_13818 = state_13797__$1;(statearr_13800_13818[2] = null);
(statearr_13800_13818[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13798 === 2))
{var inst_13778 = (state_13797[7]);var state_13797__$1 = state_13797;if(cljs.core.truth_(inst_13778))
{var statearr_13801_13819 = state_13797__$1;(statearr_13801_13819[1] = 4);
} else
{var statearr_13802_13820 = state_13797__$1;(statearr_13802_13820[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13798 === 3))
{var inst_13795 = (state_13797[2]);var state_13797__$1 = state_13797;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13797__$1,inst_13795);
} else
{if((state_val_13798 === 4))
{var inst_13778 = (state_13797[7]);var inst_13781 = cljs.core.first.call(null,inst_13778);var state_13797__$1 = state_13797;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13797__$1,7,ch,inst_13781);
} else
{if((state_val_13798 === 5))
{var state_13797__$1 = state_13797;if(cljs.core.truth_(close_QMARK_))
{var statearr_13803_13821 = state_13797__$1;(statearr_13803_13821[1] = 8);
} else
{var statearr_13804_13822 = state_13797__$1;(statearr_13804_13822[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13798 === 6))
{var inst_13793 = (state_13797[2]);var state_13797__$1 = state_13797;var statearr_13805_13823 = state_13797__$1;(statearr_13805_13823[2] = inst_13793);
(statearr_13805_13823[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13798 === 7))
{var inst_13778 = (state_13797[7]);var inst_13783 = (state_13797[2]);var inst_13784 = cljs.core.next.call(null,inst_13778);var inst_13778__$1 = inst_13784;var state_13797__$1 = (function (){var statearr_13806 = state_13797;(statearr_13806[7] = inst_13778__$1);
(statearr_13806[8] = inst_13783);
return statearr_13806;
})();var statearr_13807_13824 = state_13797__$1;(statearr_13807_13824[2] = null);
(statearr_13807_13824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13798 === 8))
{var inst_13788 = cljs.core.async.close_BANG_.call(null,ch);var state_13797__$1 = state_13797;var statearr_13808_13825 = state_13797__$1;(statearr_13808_13825[2] = inst_13788);
(statearr_13808_13825[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13798 === 9))
{var state_13797__$1 = state_13797;var statearr_13809_13826 = state_13797__$1;(statearr_13809_13826[2] = null);
(statearr_13809_13826[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13798 === 10))
{var inst_13791 = (state_13797[2]);var state_13797__$1 = state_13797;var statearr_13810_13827 = state_13797__$1;(statearr_13810_13827[2] = inst_13791);
(statearr_13810_13827[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13814 = [null,null,null,null,null,null,null,null,null];(statearr_13814[0] = state_machine__5507__auto__);
(statearr_13814[1] = 1);
return statearr_13814;
});
var state_machine__5507__auto____1 = (function (state_13797){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13797);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13815){if((e13815 instanceof Object))
{var ex__5510__auto__ = e13815;var statearr_13816_13828 = state_13797;(statearr_13816_13828[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13797);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13815;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13829 = state_13797;
state_13797 = G__13829;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13797){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13817 = f__5522__auto__.call(null);(statearr_13817[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13817;
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
cljs.core.async.Mux = (function (){var obj13831 = {};return obj13831;
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
cljs.core.async.Mult = (function (){var obj13833 = {};return obj13833;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14057 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14057 = (function (cs,ch,mult,meta14058){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14058 = meta14058;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14057.cljs$lang$type = true;
cljs.core.async.t14057.cljs$lang$ctorStr = "cljs.core.async/t14057";
cljs.core.async.t14057.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14057");
});})(cs))
;
cljs.core.async.t14057.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14057.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14057.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14057.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14057.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14057.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14057.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14059){var self__ = this;
var _14059__$1 = this;return self__.meta14058;
});})(cs))
;
cljs.core.async.t14057.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14059,meta14058__$1){var self__ = this;
var _14059__$1 = this;return (new cljs.core.async.t14057(self__.cs,self__.ch,self__.mult,meta14058__$1));
});})(cs))
;
cljs.core.async.__GT_t14057 = ((function (cs){
return (function __GT_t14057(cs__$1,ch__$1,mult__$1,meta14058){return (new cljs.core.async.t14057(cs__$1,ch__$1,mult__$1,meta14058));
});})(cs))
;
}
return (new cljs.core.async.t14057(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14280 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14194){var state_val_14195 = (state_14194[1]);if((state_val_14195 === 32))
{var inst_14138 = (state_14194[7]);var inst_14062 = (state_14194[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14194,31,Object,null,30);var inst_14145 = cljs.core.async.put_BANG_.call(null,inst_14138,inst_14062,done);var state_14194__$1 = state_14194;var statearr_14196_14281 = state_14194__$1;(statearr_14196_14281[2] = inst_14145);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14194__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 1))
{var state_14194__$1 = state_14194;var statearr_14197_14282 = state_14194__$1;(statearr_14197_14282[2] = null);
(statearr_14197_14282[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 33))
{var inst_14151 = (state_14194[9]);var inst_14153 = cljs.core.chunked_seq_QMARK_.call(null,inst_14151);var state_14194__$1 = state_14194;if(inst_14153)
{var statearr_14198_14283 = state_14194__$1;(statearr_14198_14283[1] = 36);
} else
{var statearr_14199_14284 = state_14194__$1;(statearr_14199_14284[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 2))
{var state_14194__$1 = state_14194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14194__$1,4,ch);
} else
{if((state_val_14195 === 34))
{var state_14194__$1 = state_14194;var statearr_14200_14285 = state_14194__$1;(statearr_14200_14285[2] = null);
(statearr_14200_14285[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 3))
{var inst_14192 = (state_14194[2]);var state_14194__$1 = state_14194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14194__$1,inst_14192);
} else
{if((state_val_14195 === 35))
{var inst_14176 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14201_14286 = state_14194__$1;(statearr_14201_14286[2] = inst_14176);
(statearr_14201_14286[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 4))
{var inst_14062 = (state_14194[8]);var inst_14062__$1 = (state_14194[2]);var inst_14063 = (inst_14062__$1 == null);var state_14194__$1 = (function (){var statearr_14202 = state_14194;(statearr_14202[8] = inst_14062__$1);
return statearr_14202;
})();if(cljs.core.truth_(inst_14063))
{var statearr_14203_14287 = state_14194__$1;(statearr_14203_14287[1] = 5);
} else
{var statearr_14204_14288 = state_14194__$1;(statearr_14204_14288[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 36))
{var inst_14151 = (state_14194[9]);var inst_14155 = cljs.core.chunk_first.call(null,inst_14151);var inst_14156 = cljs.core.chunk_rest.call(null,inst_14151);var inst_14157 = cljs.core.count.call(null,inst_14155);var inst_14130 = inst_14156;var inst_14131 = inst_14155;var inst_14132 = inst_14157;var inst_14133 = 0;var state_14194__$1 = (function (){var statearr_14205 = state_14194;(statearr_14205[10] = inst_14132);
(statearr_14205[11] = inst_14133);
(statearr_14205[12] = inst_14131);
(statearr_14205[13] = inst_14130);
return statearr_14205;
})();var statearr_14206_14289 = state_14194__$1;(statearr_14206_14289[2] = null);
(statearr_14206_14289[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 5))
{var inst_14069 = cljs.core.deref.call(null,cs);var inst_14070 = cljs.core.seq.call(null,inst_14069);var inst_14071 = inst_14070;var inst_14072 = null;var inst_14073 = 0;var inst_14074 = 0;var state_14194__$1 = (function (){var statearr_14207 = state_14194;(statearr_14207[14] = inst_14071);
(statearr_14207[15] = inst_14072);
(statearr_14207[16] = inst_14074);
(statearr_14207[17] = inst_14073);
return statearr_14207;
})();var statearr_14208_14290 = state_14194__$1;(statearr_14208_14290[2] = null);
(statearr_14208_14290[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 37))
{var inst_14151 = (state_14194[9]);var inst_14160 = cljs.core.first.call(null,inst_14151);var state_14194__$1 = (function (){var statearr_14209 = state_14194;(statearr_14209[18] = inst_14160);
return statearr_14209;
})();var statearr_14210_14291 = state_14194__$1;(statearr_14210_14291[2] = null);
(statearr_14210_14291[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 6))
{var inst_14122 = (state_14194[19]);var inst_14121 = cljs.core.deref.call(null,cs);var inst_14122__$1 = cljs.core.keys.call(null,inst_14121);var inst_14123 = cljs.core.count.call(null,inst_14122__$1);var inst_14124 = cljs.core.reset_BANG_.call(null,dctr,inst_14123);var inst_14129 = cljs.core.seq.call(null,inst_14122__$1);var inst_14130 = inst_14129;var inst_14131 = null;var inst_14132 = 0;var inst_14133 = 0;var state_14194__$1 = (function (){var statearr_14211 = state_14194;(statearr_14211[20] = inst_14124);
(statearr_14211[19] = inst_14122__$1);
(statearr_14211[10] = inst_14132);
(statearr_14211[11] = inst_14133);
(statearr_14211[12] = inst_14131);
(statearr_14211[13] = inst_14130);
return statearr_14211;
})();var statearr_14212_14292 = state_14194__$1;(statearr_14212_14292[2] = null);
(statearr_14212_14292[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 38))
{var inst_14173 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14213_14293 = state_14194__$1;(statearr_14213_14293[2] = inst_14173);
(statearr_14213_14293[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 7))
{var inst_14190 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14214_14294 = state_14194__$1;(statearr_14214_14294[2] = inst_14190);
(statearr_14214_14294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 39))
{var inst_14151 = (state_14194[9]);var inst_14169 = (state_14194[2]);var inst_14170 = cljs.core.next.call(null,inst_14151);var inst_14130 = inst_14170;var inst_14131 = null;var inst_14132 = 0;var inst_14133 = 0;var state_14194__$1 = (function (){var statearr_14215 = state_14194;(statearr_14215[10] = inst_14132);
(statearr_14215[11] = inst_14133);
(statearr_14215[12] = inst_14131);
(statearr_14215[21] = inst_14169);
(statearr_14215[13] = inst_14130);
return statearr_14215;
})();var statearr_14216_14295 = state_14194__$1;(statearr_14216_14295[2] = null);
(statearr_14216_14295[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 8))
{var inst_14074 = (state_14194[16]);var inst_14073 = (state_14194[17]);var inst_14076 = (inst_14074 < inst_14073);var inst_14077 = inst_14076;var state_14194__$1 = state_14194;if(cljs.core.truth_(inst_14077))
{var statearr_14217_14296 = state_14194__$1;(statearr_14217_14296[1] = 10);
} else
{var statearr_14218_14297 = state_14194__$1;(statearr_14218_14297[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 40))
{var inst_14160 = (state_14194[18]);var inst_14161 = (state_14194[2]);var inst_14162 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14163 = cljs.core.async.untap_STAR_.call(null,m,inst_14160);var state_14194__$1 = (function (){var statearr_14219 = state_14194;(statearr_14219[22] = inst_14162);
(statearr_14219[23] = inst_14161);
return statearr_14219;
})();var statearr_14220_14298 = state_14194__$1;(statearr_14220_14298[2] = inst_14163);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14194__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 9))
{var inst_14119 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14221_14299 = state_14194__$1;(statearr_14221_14299[2] = inst_14119);
(statearr_14221_14299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 41))
{var inst_14062 = (state_14194[8]);var inst_14160 = (state_14194[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14194,40,Object,null,39);var inst_14167 = cljs.core.async.put_BANG_.call(null,inst_14160,inst_14062,done);var state_14194__$1 = state_14194;var statearr_14222_14300 = state_14194__$1;(statearr_14222_14300[2] = inst_14167);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14194__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 10))
{var inst_14072 = (state_14194[15]);var inst_14074 = (state_14194[16]);var inst_14080 = cljs.core._nth.call(null,inst_14072,inst_14074);var inst_14081 = cljs.core.nth.call(null,inst_14080,0,null);var inst_14082 = cljs.core.nth.call(null,inst_14080,1,null);var state_14194__$1 = (function (){var statearr_14223 = state_14194;(statearr_14223[24] = inst_14081);
return statearr_14223;
})();if(cljs.core.truth_(inst_14082))
{var statearr_14224_14301 = state_14194__$1;(statearr_14224_14301[1] = 13);
} else
{var statearr_14225_14302 = state_14194__$1;(statearr_14225_14302[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 42))
{var state_14194__$1 = state_14194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14194__$1,45,dchan);
} else
{if((state_val_14195 === 11))
{var inst_14071 = (state_14194[14]);var inst_14091 = (state_14194[25]);var inst_14091__$1 = cljs.core.seq.call(null,inst_14071);var state_14194__$1 = (function (){var statearr_14226 = state_14194;(statearr_14226[25] = inst_14091__$1);
return statearr_14226;
})();if(inst_14091__$1)
{var statearr_14227_14303 = state_14194__$1;(statearr_14227_14303[1] = 16);
} else
{var statearr_14228_14304 = state_14194__$1;(statearr_14228_14304[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 43))
{var state_14194__$1 = state_14194;var statearr_14229_14305 = state_14194__$1;(statearr_14229_14305[2] = null);
(statearr_14229_14305[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 12))
{var inst_14117 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14230_14306 = state_14194__$1;(statearr_14230_14306[2] = inst_14117);
(statearr_14230_14306[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 44))
{var inst_14187 = (state_14194[2]);var state_14194__$1 = (function (){var statearr_14231 = state_14194;(statearr_14231[26] = inst_14187);
return statearr_14231;
})();var statearr_14232_14307 = state_14194__$1;(statearr_14232_14307[2] = null);
(statearr_14232_14307[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 13))
{var inst_14081 = (state_14194[24]);var inst_14084 = cljs.core.async.close_BANG_.call(null,inst_14081);var state_14194__$1 = state_14194;var statearr_14233_14308 = state_14194__$1;(statearr_14233_14308[2] = inst_14084);
(statearr_14233_14308[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 45))
{var inst_14184 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14237_14309 = state_14194__$1;(statearr_14237_14309[2] = inst_14184);
(statearr_14237_14309[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 14))
{var state_14194__$1 = state_14194;var statearr_14238_14310 = state_14194__$1;(statearr_14238_14310[2] = null);
(statearr_14238_14310[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 15))
{var inst_14071 = (state_14194[14]);var inst_14072 = (state_14194[15]);var inst_14074 = (state_14194[16]);var inst_14073 = (state_14194[17]);var inst_14087 = (state_14194[2]);var inst_14088 = (inst_14074 + 1);var tmp14234 = inst_14071;var tmp14235 = inst_14072;var tmp14236 = inst_14073;var inst_14071__$1 = tmp14234;var inst_14072__$1 = tmp14235;var inst_14073__$1 = tmp14236;var inst_14074__$1 = inst_14088;var state_14194__$1 = (function (){var statearr_14239 = state_14194;(statearr_14239[14] = inst_14071__$1);
(statearr_14239[15] = inst_14072__$1);
(statearr_14239[27] = inst_14087);
(statearr_14239[16] = inst_14074__$1);
(statearr_14239[17] = inst_14073__$1);
return statearr_14239;
})();var statearr_14240_14311 = state_14194__$1;(statearr_14240_14311[2] = null);
(statearr_14240_14311[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 16))
{var inst_14091 = (state_14194[25]);var inst_14093 = cljs.core.chunked_seq_QMARK_.call(null,inst_14091);var state_14194__$1 = state_14194;if(inst_14093)
{var statearr_14241_14312 = state_14194__$1;(statearr_14241_14312[1] = 19);
} else
{var statearr_14242_14313 = state_14194__$1;(statearr_14242_14313[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 17))
{var state_14194__$1 = state_14194;var statearr_14243_14314 = state_14194__$1;(statearr_14243_14314[2] = null);
(statearr_14243_14314[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 18))
{var inst_14115 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14244_14315 = state_14194__$1;(statearr_14244_14315[2] = inst_14115);
(statearr_14244_14315[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 19))
{var inst_14091 = (state_14194[25]);var inst_14095 = cljs.core.chunk_first.call(null,inst_14091);var inst_14096 = cljs.core.chunk_rest.call(null,inst_14091);var inst_14097 = cljs.core.count.call(null,inst_14095);var inst_14071 = inst_14096;var inst_14072 = inst_14095;var inst_14073 = inst_14097;var inst_14074 = 0;var state_14194__$1 = (function (){var statearr_14245 = state_14194;(statearr_14245[14] = inst_14071);
(statearr_14245[15] = inst_14072);
(statearr_14245[16] = inst_14074);
(statearr_14245[17] = inst_14073);
return statearr_14245;
})();var statearr_14246_14316 = state_14194__$1;(statearr_14246_14316[2] = null);
(statearr_14246_14316[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 20))
{var inst_14091 = (state_14194[25]);var inst_14101 = cljs.core.first.call(null,inst_14091);var inst_14102 = cljs.core.nth.call(null,inst_14101,0,null);var inst_14103 = cljs.core.nth.call(null,inst_14101,1,null);var state_14194__$1 = (function (){var statearr_14247 = state_14194;(statearr_14247[28] = inst_14102);
return statearr_14247;
})();if(cljs.core.truth_(inst_14103))
{var statearr_14248_14317 = state_14194__$1;(statearr_14248_14317[1] = 22);
} else
{var statearr_14249_14318 = state_14194__$1;(statearr_14249_14318[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 21))
{var inst_14112 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14250_14319 = state_14194__$1;(statearr_14250_14319[2] = inst_14112);
(statearr_14250_14319[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 22))
{var inst_14102 = (state_14194[28]);var inst_14105 = cljs.core.async.close_BANG_.call(null,inst_14102);var state_14194__$1 = state_14194;var statearr_14251_14320 = state_14194__$1;(statearr_14251_14320[2] = inst_14105);
(statearr_14251_14320[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 23))
{var state_14194__$1 = state_14194;var statearr_14252_14321 = state_14194__$1;(statearr_14252_14321[2] = null);
(statearr_14252_14321[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 24))
{var inst_14091 = (state_14194[25]);var inst_14108 = (state_14194[2]);var inst_14109 = cljs.core.next.call(null,inst_14091);var inst_14071 = inst_14109;var inst_14072 = null;var inst_14073 = 0;var inst_14074 = 0;var state_14194__$1 = (function (){var statearr_14253 = state_14194;(statearr_14253[14] = inst_14071);
(statearr_14253[15] = inst_14072);
(statearr_14253[29] = inst_14108);
(statearr_14253[16] = inst_14074);
(statearr_14253[17] = inst_14073);
return statearr_14253;
})();var statearr_14254_14322 = state_14194__$1;(statearr_14254_14322[2] = null);
(statearr_14254_14322[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 25))
{var inst_14132 = (state_14194[10]);var inst_14133 = (state_14194[11]);var inst_14135 = (inst_14133 < inst_14132);var inst_14136 = inst_14135;var state_14194__$1 = state_14194;if(cljs.core.truth_(inst_14136))
{var statearr_14255_14323 = state_14194__$1;(statearr_14255_14323[1] = 27);
} else
{var statearr_14256_14324 = state_14194__$1;(statearr_14256_14324[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 26))
{var inst_14122 = (state_14194[19]);var inst_14180 = (state_14194[2]);var inst_14181 = cljs.core.seq.call(null,inst_14122);var state_14194__$1 = (function (){var statearr_14257 = state_14194;(statearr_14257[30] = inst_14180);
return statearr_14257;
})();if(inst_14181)
{var statearr_14258_14325 = state_14194__$1;(statearr_14258_14325[1] = 42);
} else
{var statearr_14259_14326 = state_14194__$1;(statearr_14259_14326[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 27))
{var inst_14133 = (state_14194[11]);var inst_14131 = (state_14194[12]);var inst_14138 = cljs.core._nth.call(null,inst_14131,inst_14133);var state_14194__$1 = (function (){var statearr_14260 = state_14194;(statearr_14260[7] = inst_14138);
return statearr_14260;
})();var statearr_14261_14327 = state_14194__$1;(statearr_14261_14327[2] = null);
(statearr_14261_14327[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 28))
{var inst_14130 = (state_14194[13]);var inst_14151 = (state_14194[9]);var inst_14151__$1 = cljs.core.seq.call(null,inst_14130);var state_14194__$1 = (function (){var statearr_14265 = state_14194;(statearr_14265[9] = inst_14151__$1);
return statearr_14265;
})();if(inst_14151__$1)
{var statearr_14266_14328 = state_14194__$1;(statearr_14266_14328[1] = 33);
} else
{var statearr_14267_14329 = state_14194__$1;(statearr_14267_14329[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 29))
{var inst_14178 = (state_14194[2]);var state_14194__$1 = state_14194;var statearr_14268_14330 = state_14194__$1;(statearr_14268_14330[2] = inst_14178);
(statearr_14268_14330[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 30))
{var inst_14132 = (state_14194[10]);var inst_14133 = (state_14194[11]);var inst_14131 = (state_14194[12]);var inst_14130 = (state_14194[13]);var inst_14147 = (state_14194[2]);var inst_14148 = (inst_14133 + 1);var tmp14262 = inst_14132;var tmp14263 = inst_14131;var tmp14264 = inst_14130;var inst_14130__$1 = tmp14264;var inst_14131__$1 = tmp14263;var inst_14132__$1 = tmp14262;var inst_14133__$1 = inst_14148;var state_14194__$1 = (function (){var statearr_14269 = state_14194;(statearr_14269[10] = inst_14132__$1);
(statearr_14269[11] = inst_14133__$1);
(statearr_14269[12] = inst_14131__$1);
(statearr_14269[13] = inst_14130__$1);
(statearr_14269[31] = inst_14147);
return statearr_14269;
})();var statearr_14270_14331 = state_14194__$1;(statearr_14270_14331[2] = null);
(statearr_14270_14331[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14195 === 31))
{var inst_14138 = (state_14194[7]);var inst_14139 = (state_14194[2]);var inst_14140 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14141 = cljs.core.async.untap_STAR_.call(null,m,inst_14138);var state_14194__$1 = (function (){var statearr_14271 = state_14194;(statearr_14271[32] = inst_14139);
(statearr_14271[33] = inst_14140);
return statearr_14271;
})();var statearr_14272_14332 = state_14194__$1;(statearr_14272_14332[2] = inst_14141);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14194__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14276 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14276[0] = state_machine__5507__auto__);
(statearr_14276[1] = 1);
return statearr_14276;
});
var state_machine__5507__auto____1 = (function (state_14194){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14194);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14277){if((e14277 instanceof Object))
{var ex__5510__auto__ = e14277;var statearr_14278_14333 = state_14194;(statearr_14278_14333[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14277;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14334 = state_14194;
state_14194 = G__14334;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14194){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14279 = f__5522__auto__.call(null);(statearr_14279[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14280);
return statearr_14279;
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
cljs.core.async.Mix = (function (){var obj14336 = {};return obj14336;
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
;var m = (function (){if(typeof cljs.core.async.t14446 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14446 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14447){
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
this.meta14447 = meta14447;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14446.cljs$lang$type = true;
cljs.core.async.t14446.cljs$lang$ctorStr = "cljs.core.async/t14446";
cljs.core.async.t14446.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14446");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14446.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14446.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14446.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14446.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14446.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14446.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14446.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14446.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14446.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14448){var self__ = this;
var _14448__$1 = this;return self__.meta14447;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14448,meta14447__$1){var self__ = this;
var _14448__$1 = this;return (new cljs.core.async.t14446(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14447__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14446 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14446(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14447){return (new cljs.core.async.t14446(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14447));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14446(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14555 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14513){var state_val_14514 = (state_14513[1]);if((state_val_14514 === 1))
{var inst_14452 = (state_14513[7]);var inst_14452__$1 = calc_state.call(null);var inst_14453 = cljs.core.seq_QMARK_.call(null,inst_14452__$1);var state_14513__$1 = (function (){var statearr_14515 = state_14513;(statearr_14515[7] = inst_14452__$1);
return statearr_14515;
})();if(inst_14453)
{var statearr_14516_14556 = state_14513__$1;(statearr_14516_14556[1] = 2);
} else
{var statearr_14517_14557 = state_14513__$1;(statearr_14517_14557[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 2))
{var inst_14452 = (state_14513[7]);var inst_14455 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14452);var state_14513__$1 = state_14513;var statearr_14518_14558 = state_14513__$1;(statearr_14518_14558[2] = inst_14455);
(statearr_14518_14558[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 3))
{var inst_14452 = (state_14513[7]);var state_14513__$1 = state_14513;var statearr_14519_14559 = state_14513__$1;(statearr_14519_14559[2] = inst_14452);
(statearr_14519_14559[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 4))
{var inst_14452 = (state_14513[7]);var inst_14458 = (state_14513[2]);var inst_14459 = cljs.core.get.call(null,inst_14458,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14460 = cljs.core.get.call(null,inst_14458,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14461 = cljs.core.get.call(null,inst_14458,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14462 = inst_14452;var state_14513__$1 = (function (){var statearr_14520 = state_14513;(statearr_14520[8] = inst_14462);
(statearr_14520[9] = inst_14461);
(statearr_14520[10] = inst_14460);
(statearr_14520[11] = inst_14459);
return statearr_14520;
})();var statearr_14521_14560 = state_14513__$1;(statearr_14521_14560[2] = null);
(statearr_14521_14560[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 5))
{var inst_14462 = (state_14513[8]);var inst_14465 = cljs.core.seq_QMARK_.call(null,inst_14462);var state_14513__$1 = state_14513;if(inst_14465)
{var statearr_14522_14561 = state_14513__$1;(statearr_14522_14561[1] = 7);
} else
{var statearr_14523_14562 = state_14513__$1;(statearr_14523_14562[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 6))
{var inst_14511 = (state_14513[2]);var state_14513__$1 = state_14513;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14513__$1,inst_14511);
} else
{if((state_val_14514 === 7))
{var inst_14462 = (state_14513[8]);var inst_14467 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14462);var state_14513__$1 = state_14513;var statearr_14524_14563 = state_14513__$1;(statearr_14524_14563[2] = inst_14467);
(statearr_14524_14563[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 8))
{var inst_14462 = (state_14513[8]);var state_14513__$1 = state_14513;var statearr_14525_14564 = state_14513__$1;(statearr_14525_14564[2] = inst_14462);
(statearr_14525_14564[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 9))
{var inst_14470 = (state_14513[12]);var inst_14470__$1 = (state_14513[2]);var inst_14471 = cljs.core.get.call(null,inst_14470__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14472 = cljs.core.get.call(null,inst_14470__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14473 = cljs.core.get.call(null,inst_14470__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14513__$1 = (function (){var statearr_14526 = state_14513;(statearr_14526[13] = inst_14473);
(statearr_14526[12] = inst_14470__$1);
(statearr_14526[14] = inst_14472);
return statearr_14526;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14513__$1,10,inst_14471);
} else
{if((state_val_14514 === 10))
{var inst_14478 = (state_14513[15]);var inst_14477 = (state_14513[16]);var inst_14476 = (state_14513[2]);var inst_14477__$1 = cljs.core.nth.call(null,inst_14476,0,null);var inst_14478__$1 = cljs.core.nth.call(null,inst_14476,1,null);var inst_14479 = (inst_14477__$1 == null);var inst_14480 = cljs.core._EQ_.call(null,inst_14478__$1,change);var inst_14481 = (inst_14479) || (inst_14480);var state_14513__$1 = (function (){var statearr_14527 = state_14513;(statearr_14527[15] = inst_14478__$1);
(statearr_14527[16] = inst_14477__$1);
return statearr_14527;
})();if(cljs.core.truth_(inst_14481))
{var statearr_14528_14565 = state_14513__$1;(statearr_14528_14565[1] = 11);
} else
{var statearr_14529_14566 = state_14513__$1;(statearr_14529_14566[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 11))
{var inst_14477 = (state_14513[16]);var inst_14483 = (inst_14477 == null);var state_14513__$1 = state_14513;if(cljs.core.truth_(inst_14483))
{var statearr_14530_14567 = state_14513__$1;(statearr_14530_14567[1] = 14);
} else
{var statearr_14531_14568 = state_14513__$1;(statearr_14531_14568[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 12))
{var inst_14492 = (state_14513[17]);var inst_14478 = (state_14513[15]);var inst_14473 = (state_14513[13]);var inst_14492__$1 = inst_14473.call(null,inst_14478);var state_14513__$1 = (function (){var statearr_14532 = state_14513;(statearr_14532[17] = inst_14492__$1);
return statearr_14532;
})();if(cljs.core.truth_(inst_14492__$1))
{var statearr_14533_14569 = state_14513__$1;(statearr_14533_14569[1] = 17);
} else
{var statearr_14534_14570 = state_14513__$1;(statearr_14534_14570[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 13))
{var inst_14509 = (state_14513[2]);var state_14513__$1 = state_14513;var statearr_14535_14571 = state_14513__$1;(statearr_14535_14571[2] = inst_14509);
(statearr_14535_14571[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 14))
{var inst_14478 = (state_14513[15]);var inst_14485 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14478);var state_14513__$1 = state_14513;var statearr_14536_14572 = state_14513__$1;(statearr_14536_14572[2] = inst_14485);
(statearr_14536_14572[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 15))
{var state_14513__$1 = state_14513;var statearr_14537_14573 = state_14513__$1;(statearr_14537_14573[2] = null);
(statearr_14537_14573[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 16))
{var inst_14488 = (state_14513[2]);var inst_14489 = calc_state.call(null);var inst_14462 = inst_14489;var state_14513__$1 = (function (){var statearr_14538 = state_14513;(statearr_14538[18] = inst_14488);
(statearr_14538[8] = inst_14462);
return statearr_14538;
})();var statearr_14539_14574 = state_14513__$1;(statearr_14539_14574[2] = null);
(statearr_14539_14574[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 17))
{var inst_14492 = (state_14513[17]);var state_14513__$1 = state_14513;var statearr_14540_14575 = state_14513__$1;(statearr_14540_14575[2] = inst_14492);
(statearr_14540_14575[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 18))
{var inst_14478 = (state_14513[15]);var inst_14473 = (state_14513[13]);var inst_14472 = (state_14513[14]);var inst_14495 = cljs.core.empty_QMARK_.call(null,inst_14473);var inst_14496 = inst_14472.call(null,inst_14478);var inst_14497 = cljs.core.not.call(null,inst_14496);var inst_14498 = (inst_14495) && (inst_14497);var state_14513__$1 = state_14513;var statearr_14541_14576 = state_14513__$1;(statearr_14541_14576[2] = inst_14498);
(statearr_14541_14576[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 19))
{var inst_14500 = (state_14513[2]);var state_14513__$1 = state_14513;if(cljs.core.truth_(inst_14500))
{var statearr_14542_14577 = state_14513__$1;(statearr_14542_14577[1] = 20);
} else
{var statearr_14543_14578 = state_14513__$1;(statearr_14543_14578[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 20))
{var inst_14477 = (state_14513[16]);var state_14513__$1 = state_14513;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14513__$1,23,out,inst_14477);
} else
{if((state_val_14514 === 21))
{var state_14513__$1 = state_14513;var statearr_14544_14579 = state_14513__$1;(statearr_14544_14579[2] = null);
(statearr_14544_14579[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 22))
{var inst_14470 = (state_14513[12]);var inst_14506 = (state_14513[2]);var inst_14462 = inst_14470;var state_14513__$1 = (function (){var statearr_14545 = state_14513;(statearr_14545[8] = inst_14462);
(statearr_14545[19] = inst_14506);
return statearr_14545;
})();var statearr_14546_14580 = state_14513__$1;(statearr_14546_14580[2] = null);
(statearr_14546_14580[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14514 === 23))
{var inst_14503 = (state_14513[2]);var state_14513__$1 = state_14513;var statearr_14547_14581 = state_14513__$1;(statearr_14547_14581[2] = inst_14503);
(statearr_14547_14581[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14551 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14551[0] = state_machine__5507__auto__);
(statearr_14551[1] = 1);
return statearr_14551;
});
var state_machine__5507__auto____1 = (function (state_14513){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14513);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14552){if((e14552 instanceof Object))
{var ex__5510__auto__ = e14552;var statearr_14553_14582 = state_14513;(statearr_14553_14582[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14513);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14552;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14583 = state_14513;
state_14513 = G__14583;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14513){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14554 = f__5522__auto__.call(null);(statearr_14554[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14555);
return statearr_14554;
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
cljs.core.async.Pub = (function (){var obj14585 = {};return obj14585;
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
return (function (p1__14586_SHARP_){if(cljs.core.truth_(p1__14586_SHARP_.call(null,topic)))
{return p1__14586_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14586_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14711 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14712){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14712 = meta14712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14711.cljs$lang$type = true;
cljs.core.async.t14711.cljs$lang$ctorStr = "cljs.core.async/t14711";
cljs.core.async.t14711.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14711");
});})(mults,ensure_mult))
;
cljs.core.async.t14711.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14711.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14711.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14711.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14711.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14711.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14711.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14713){var self__ = this;
var _14713__$1 = this;return self__.meta14712;
});})(mults,ensure_mult))
;
cljs.core.async.t14711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14713,meta14712__$1){var self__ = this;
var _14713__$1 = this;return (new cljs.core.async.t14711(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14712__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14711 = ((function (mults,ensure_mult){
return (function __GT_t14711(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14712){return (new cljs.core.async.t14711(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14712));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14711(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14835 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14787){var state_val_14788 = (state_14787[1]);if((state_val_14788 === 1))
{var state_14787__$1 = state_14787;var statearr_14789_14836 = state_14787__$1;(statearr_14789_14836[2] = null);
(statearr_14789_14836[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 2))
{var state_14787__$1 = state_14787;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14787__$1,4,ch);
} else
{if((state_val_14788 === 3))
{var inst_14785 = (state_14787[2]);var state_14787__$1 = state_14787;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14787__$1,inst_14785);
} else
{if((state_val_14788 === 4))
{var inst_14716 = (state_14787[7]);var inst_14716__$1 = (state_14787[2]);var inst_14717 = (inst_14716__$1 == null);var state_14787__$1 = (function (){var statearr_14790 = state_14787;(statearr_14790[7] = inst_14716__$1);
return statearr_14790;
})();if(cljs.core.truth_(inst_14717))
{var statearr_14791_14837 = state_14787__$1;(statearr_14791_14837[1] = 5);
} else
{var statearr_14792_14838 = state_14787__$1;(statearr_14792_14838[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 5))
{var inst_14723 = cljs.core.deref.call(null,mults);var inst_14724 = cljs.core.vals.call(null,inst_14723);var inst_14725 = cljs.core.seq.call(null,inst_14724);var inst_14726 = inst_14725;var inst_14727 = null;var inst_14728 = 0;var inst_14729 = 0;var state_14787__$1 = (function (){var statearr_14793 = state_14787;(statearr_14793[8] = inst_14726);
(statearr_14793[9] = inst_14728);
(statearr_14793[10] = inst_14727);
(statearr_14793[11] = inst_14729);
return statearr_14793;
})();var statearr_14794_14839 = state_14787__$1;(statearr_14794_14839[2] = null);
(statearr_14794_14839[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 6))
{var inst_14766 = (state_14787[12]);var inst_14764 = (state_14787[13]);var inst_14716 = (state_14787[7]);var inst_14764__$1 = topic_fn.call(null,inst_14716);var inst_14765 = cljs.core.deref.call(null,mults);var inst_14766__$1 = cljs.core.get.call(null,inst_14765,inst_14764__$1);var state_14787__$1 = (function (){var statearr_14795 = state_14787;(statearr_14795[12] = inst_14766__$1);
(statearr_14795[13] = inst_14764__$1);
return statearr_14795;
})();if(cljs.core.truth_(inst_14766__$1))
{var statearr_14796_14840 = state_14787__$1;(statearr_14796_14840[1] = 19);
} else
{var statearr_14797_14841 = state_14787__$1;(statearr_14797_14841[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 7))
{var inst_14783 = (state_14787[2]);var state_14787__$1 = state_14787;var statearr_14798_14842 = state_14787__$1;(statearr_14798_14842[2] = inst_14783);
(statearr_14798_14842[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 8))
{var inst_14728 = (state_14787[9]);var inst_14729 = (state_14787[11]);var inst_14731 = (inst_14729 < inst_14728);var inst_14732 = inst_14731;var state_14787__$1 = state_14787;if(cljs.core.truth_(inst_14732))
{var statearr_14802_14843 = state_14787__$1;(statearr_14802_14843[1] = 10);
} else
{var statearr_14803_14844 = state_14787__$1;(statearr_14803_14844[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 9))
{var inst_14762 = (state_14787[2]);var state_14787__$1 = state_14787;var statearr_14804_14845 = state_14787__$1;(statearr_14804_14845[2] = inst_14762);
(statearr_14804_14845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 10))
{var inst_14726 = (state_14787[8]);var inst_14728 = (state_14787[9]);var inst_14727 = (state_14787[10]);var inst_14729 = (state_14787[11]);var inst_14734 = cljs.core._nth.call(null,inst_14727,inst_14729);var inst_14735 = cljs.core.async.muxch_STAR_.call(null,inst_14734);var inst_14736 = cljs.core.async.close_BANG_.call(null,inst_14735);var inst_14737 = (inst_14729 + 1);var tmp14799 = inst_14726;var tmp14800 = inst_14728;var tmp14801 = inst_14727;var inst_14726__$1 = tmp14799;var inst_14727__$1 = tmp14801;var inst_14728__$1 = tmp14800;var inst_14729__$1 = inst_14737;var state_14787__$1 = (function (){var statearr_14805 = state_14787;(statearr_14805[8] = inst_14726__$1);
(statearr_14805[9] = inst_14728__$1);
(statearr_14805[10] = inst_14727__$1);
(statearr_14805[11] = inst_14729__$1);
(statearr_14805[14] = inst_14736);
return statearr_14805;
})();var statearr_14806_14846 = state_14787__$1;(statearr_14806_14846[2] = null);
(statearr_14806_14846[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 11))
{var inst_14726 = (state_14787[8]);var inst_14740 = (state_14787[15]);var inst_14740__$1 = cljs.core.seq.call(null,inst_14726);var state_14787__$1 = (function (){var statearr_14807 = state_14787;(statearr_14807[15] = inst_14740__$1);
return statearr_14807;
})();if(inst_14740__$1)
{var statearr_14808_14847 = state_14787__$1;(statearr_14808_14847[1] = 13);
} else
{var statearr_14809_14848 = state_14787__$1;(statearr_14809_14848[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 12))
{var inst_14760 = (state_14787[2]);var state_14787__$1 = state_14787;var statearr_14810_14849 = state_14787__$1;(statearr_14810_14849[2] = inst_14760);
(statearr_14810_14849[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 13))
{var inst_14740 = (state_14787[15]);var inst_14742 = cljs.core.chunked_seq_QMARK_.call(null,inst_14740);var state_14787__$1 = state_14787;if(inst_14742)
{var statearr_14811_14850 = state_14787__$1;(statearr_14811_14850[1] = 16);
} else
{var statearr_14812_14851 = state_14787__$1;(statearr_14812_14851[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 14))
{var state_14787__$1 = state_14787;var statearr_14813_14852 = state_14787__$1;(statearr_14813_14852[2] = null);
(statearr_14813_14852[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 15))
{var inst_14758 = (state_14787[2]);var state_14787__$1 = state_14787;var statearr_14814_14853 = state_14787__$1;(statearr_14814_14853[2] = inst_14758);
(statearr_14814_14853[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 16))
{var inst_14740 = (state_14787[15]);var inst_14744 = cljs.core.chunk_first.call(null,inst_14740);var inst_14745 = cljs.core.chunk_rest.call(null,inst_14740);var inst_14746 = cljs.core.count.call(null,inst_14744);var inst_14726 = inst_14745;var inst_14727 = inst_14744;var inst_14728 = inst_14746;var inst_14729 = 0;var state_14787__$1 = (function (){var statearr_14815 = state_14787;(statearr_14815[8] = inst_14726);
(statearr_14815[9] = inst_14728);
(statearr_14815[10] = inst_14727);
(statearr_14815[11] = inst_14729);
return statearr_14815;
})();var statearr_14816_14854 = state_14787__$1;(statearr_14816_14854[2] = null);
(statearr_14816_14854[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 17))
{var inst_14740 = (state_14787[15]);var inst_14749 = cljs.core.first.call(null,inst_14740);var inst_14750 = cljs.core.async.muxch_STAR_.call(null,inst_14749);var inst_14751 = cljs.core.async.close_BANG_.call(null,inst_14750);var inst_14752 = cljs.core.next.call(null,inst_14740);var inst_14726 = inst_14752;var inst_14727 = null;var inst_14728 = 0;var inst_14729 = 0;var state_14787__$1 = (function (){var statearr_14817 = state_14787;(statearr_14817[8] = inst_14726);
(statearr_14817[9] = inst_14728);
(statearr_14817[16] = inst_14751);
(statearr_14817[10] = inst_14727);
(statearr_14817[11] = inst_14729);
return statearr_14817;
})();var statearr_14818_14855 = state_14787__$1;(statearr_14818_14855[2] = null);
(statearr_14818_14855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 18))
{var inst_14755 = (state_14787[2]);var state_14787__$1 = state_14787;var statearr_14819_14856 = state_14787__$1;(statearr_14819_14856[2] = inst_14755);
(statearr_14819_14856[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 19))
{var state_14787__$1 = state_14787;var statearr_14820_14857 = state_14787__$1;(statearr_14820_14857[2] = null);
(statearr_14820_14857[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 20))
{var state_14787__$1 = state_14787;var statearr_14821_14858 = state_14787__$1;(statearr_14821_14858[2] = null);
(statearr_14821_14858[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 21))
{var inst_14780 = (state_14787[2]);var state_14787__$1 = (function (){var statearr_14822 = state_14787;(statearr_14822[17] = inst_14780);
return statearr_14822;
})();var statearr_14823_14859 = state_14787__$1;(statearr_14823_14859[2] = null);
(statearr_14823_14859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 22))
{var inst_14777 = (state_14787[2]);var state_14787__$1 = state_14787;var statearr_14824_14860 = state_14787__$1;(statearr_14824_14860[2] = inst_14777);
(statearr_14824_14860[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 23))
{var inst_14764 = (state_14787[13]);var inst_14768 = (state_14787[2]);var inst_14769 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14764);var state_14787__$1 = (function (){var statearr_14825 = state_14787;(statearr_14825[18] = inst_14768);
return statearr_14825;
})();var statearr_14826_14861 = state_14787__$1;(statearr_14826_14861[2] = inst_14769);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14787__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14788 === 24))
{var inst_14766 = (state_14787[12]);var inst_14716 = (state_14787[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14787,23,Object,null,22);var inst_14773 = cljs.core.async.muxch_STAR_.call(null,inst_14766);var state_14787__$1 = state_14787;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14787__$1,25,inst_14773,inst_14716);
} else
{if((state_val_14788 === 25))
{var inst_14775 = (state_14787[2]);var state_14787__$1 = state_14787;var statearr_14827_14862 = state_14787__$1;(statearr_14827_14862[2] = inst_14775);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14787__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14831 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14831[0] = state_machine__5507__auto__);
(statearr_14831[1] = 1);
return statearr_14831;
});
var state_machine__5507__auto____1 = (function (state_14787){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14787);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14832){if((e14832 instanceof Object))
{var ex__5510__auto__ = e14832;var statearr_14833_14863 = state_14787;(statearr_14833_14863[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14787);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14832;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14864 = state_14787;
state_14787 = G__14864;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14787){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14787);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14834 = f__5522__auto__.call(null);(statearr_14834[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14835);
return statearr_14834;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15001 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14971){var state_val_14972 = (state_14971[1]);if((state_val_14972 === 1))
{var state_14971__$1 = state_14971;var statearr_14973_15002 = state_14971__$1;(statearr_14973_15002[2] = null);
(statearr_14973_15002[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 2))
{var inst_14934 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14935 = 0;var state_14971__$1 = (function (){var statearr_14974 = state_14971;(statearr_14974[7] = inst_14934);
(statearr_14974[8] = inst_14935);
return statearr_14974;
})();var statearr_14975_15003 = state_14971__$1;(statearr_14975_15003[2] = null);
(statearr_14975_15003[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 3))
{var inst_14969 = (state_14971[2]);var state_14971__$1 = state_14971;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14971__$1,inst_14969);
} else
{if((state_val_14972 === 4))
{var inst_14935 = (state_14971[8]);var inst_14937 = (inst_14935 < cnt);var state_14971__$1 = state_14971;if(cljs.core.truth_(inst_14937))
{var statearr_14976_15004 = state_14971__$1;(statearr_14976_15004[1] = 6);
} else
{var statearr_14977_15005 = state_14971__$1;(statearr_14977_15005[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 5))
{var inst_14955 = (state_14971[2]);var state_14971__$1 = (function (){var statearr_14978 = state_14971;(statearr_14978[9] = inst_14955);
return statearr_14978;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14971__$1,12,dchan);
} else
{if((state_val_14972 === 6))
{var state_14971__$1 = state_14971;var statearr_14979_15006 = state_14971__$1;(statearr_14979_15006[2] = null);
(statearr_14979_15006[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 7))
{var state_14971__$1 = state_14971;var statearr_14980_15007 = state_14971__$1;(statearr_14980_15007[2] = null);
(statearr_14980_15007[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 8))
{var inst_14953 = (state_14971[2]);var state_14971__$1 = state_14971;var statearr_14981_15008 = state_14971__$1;(statearr_14981_15008[2] = inst_14953);
(statearr_14981_15008[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 9))
{var inst_14935 = (state_14971[8]);var inst_14948 = (state_14971[2]);var inst_14949 = (inst_14935 + 1);var inst_14935__$1 = inst_14949;var state_14971__$1 = (function (){var statearr_14982 = state_14971;(statearr_14982[10] = inst_14948);
(statearr_14982[8] = inst_14935__$1);
return statearr_14982;
})();var statearr_14983_15009 = state_14971__$1;(statearr_14983_15009[2] = null);
(statearr_14983_15009[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 10))
{var inst_14939 = (state_14971[2]);var inst_14940 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14971__$1 = (function (){var statearr_14984 = state_14971;(statearr_14984[11] = inst_14939);
return statearr_14984;
})();var statearr_14985_15010 = state_14971__$1;(statearr_14985_15010[2] = inst_14940);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14971__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 11))
{var inst_14935 = (state_14971[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14971,10,Object,null,9);var inst_14944 = chs__$1.call(null,inst_14935);var inst_14945 = done.call(null,inst_14935);var inst_14946 = cljs.core.async.take_BANG_.call(null,inst_14944,inst_14945);var state_14971__$1 = state_14971;var statearr_14986_15011 = state_14971__$1;(statearr_14986_15011[2] = inst_14946);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14971__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 12))
{var inst_14957 = (state_14971[12]);var inst_14957__$1 = (state_14971[2]);var inst_14958 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14957__$1);var state_14971__$1 = (function (){var statearr_14987 = state_14971;(statearr_14987[12] = inst_14957__$1);
return statearr_14987;
})();if(cljs.core.truth_(inst_14958))
{var statearr_14988_15012 = state_14971__$1;(statearr_14988_15012[1] = 13);
} else
{var statearr_14989_15013 = state_14971__$1;(statearr_14989_15013[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 13))
{var inst_14960 = cljs.core.async.close_BANG_.call(null,out);var state_14971__$1 = state_14971;var statearr_14990_15014 = state_14971__$1;(statearr_14990_15014[2] = inst_14960);
(statearr_14990_15014[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 14))
{var inst_14957 = (state_14971[12]);var inst_14962 = cljs.core.apply.call(null,f,inst_14957);var state_14971__$1 = state_14971;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14971__$1,16,out,inst_14962);
} else
{if((state_val_14972 === 15))
{var inst_14967 = (state_14971[2]);var state_14971__$1 = state_14971;var statearr_14991_15015 = state_14971__$1;(statearr_14991_15015[2] = inst_14967);
(statearr_14991_15015[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14972 === 16))
{var inst_14964 = (state_14971[2]);var state_14971__$1 = (function (){var statearr_14992 = state_14971;(statearr_14992[13] = inst_14964);
return statearr_14992;
})();var statearr_14993_15016 = state_14971__$1;(statearr_14993_15016[2] = null);
(statearr_14993_15016[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14997 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14997[0] = state_machine__5507__auto__);
(statearr_14997[1] = 1);
return statearr_14997;
});
var state_machine__5507__auto____1 = (function (state_14971){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14971);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14998){if((e14998 instanceof Object))
{var ex__5510__auto__ = e14998;var statearr_14999_15017 = state_14971;(statearr_14999_15017[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14971);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14998;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15018 = state_14971;
state_14971 = G__15018;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14971){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14971);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15000 = f__5522__auto__.call(null);(statearr_15000[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15001);
return statearr_15000;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15126 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15102){var state_val_15103 = (state_15102[1]);if((state_val_15103 === 1))
{var inst_15073 = cljs.core.vec.call(null,chs);var inst_15074 = inst_15073;var state_15102__$1 = (function (){var statearr_15104 = state_15102;(statearr_15104[7] = inst_15074);
return statearr_15104;
})();var statearr_15105_15127 = state_15102__$1;(statearr_15105_15127[2] = null);
(statearr_15105_15127[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15103 === 2))
{var inst_15074 = (state_15102[7]);var inst_15076 = cljs.core.count.call(null,inst_15074);var inst_15077 = (inst_15076 > 0);var state_15102__$1 = state_15102;if(cljs.core.truth_(inst_15077))
{var statearr_15106_15128 = state_15102__$1;(statearr_15106_15128[1] = 4);
} else
{var statearr_15107_15129 = state_15102__$1;(statearr_15107_15129[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15103 === 3))
{var inst_15100 = (state_15102[2]);var state_15102__$1 = state_15102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15102__$1,inst_15100);
} else
{if((state_val_15103 === 4))
{var inst_15074 = (state_15102[7]);var state_15102__$1 = state_15102;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15102__$1,7,inst_15074);
} else
{if((state_val_15103 === 5))
{var inst_15096 = cljs.core.async.close_BANG_.call(null,out);var state_15102__$1 = state_15102;var statearr_15108_15130 = state_15102__$1;(statearr_15108_15130[2] = inst_15096);
(statearr_15108_15130[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15103 === 6))
{var inst_15098 = (state_15102[2]);var state_15102__$1 = state_15102;var statearr_15109_15131 = state_15102__$1;(statearr_15109_15131[2] = inst_15098);
(statearr_15109_15131[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15103 === 7))
{var inst_15081 = (state_15102[8]);var inst_15082 = (state_15102[9]);var inst_15081__$1 = (state_15102[2]);var inst_15082__$1 = cljs.core.nth.call(null,inst_15081__$1,0,null);var inst_15083 = cljs.core.nth.call(null,inst_15081__$1,1,null);var inst_15084 = (inst_15082__$1 == null);var state_15102__$1 = (function (){var statearr_15110 = state_15102;(statearr_15110[8] = inst_15081__$1);
(statearr_15110[9] = inst_15082__$1);
(statearr_15110[10] = inst_15083);
return statearr_15110;
})();if(cljs.core.truth_(inst_15084))
{var statearr_15111_15132 = state_15102__$1;(statearr_15111_15132[1] = 8);
} else
{var statearr_15112_15133 = state_15102__$1;(statearr_15112_15133[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15103 === 8))
{var inst_15081 = (state_15102[8]);var inst_15082 = (state_15102[9]);var inst_15083 = (state_15102[10]);var inst_15074 = (state_15102[7]);var inst_15086 = (function (){var c = inst_15083;var v = inst_15082;var vec__15079 = inst_15081;var cs = inst_15074;return ((function (c,v,vec__15079,cs,inst_15081,inst_15082,inst_15083,inst_15074,state_val_15103){
return (function (p1__15019_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15019_SHARP_);
});
;})(c,v,vec__15079,cs,inst_15081,inst_15082,inst_15083,inst_15074,state_val_15103))
})();var inst_15087 = cljs.core.filterv.call(null,inst_15086,inst_15074);var inst_15074__$1 = inst_15087;var state_15102__$1 = (function (){var statearr_15113 = state_15102;(statearr_15113[7] = inst_15074__$1);
return statearr_15113;
})();var statearr_15114_15134 = state_15102__$1;(statearr_15114_15134[2] = null);
(statearr_15114_15134[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15103 === 9))
{var inst_15082 = (state_15102[9]);var state_15102__$1 = state_15102;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15102__$1,11,out,inst_15082);
} else
{if((state_val_15103 === 10))
{var inst_15094 = (state_15102[2]);var state_15102__$1 = state_15102;var statearr_15116_15135 = state_15102__$1;(statearr_15116_15135[2] = inst_15094);
(statearr_15116_15135[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15103 === 11))
{var inst_15074 = (state_15102[7]);var inst_15091 = (state_15102[2]);var tmp15115 = inst_15074;var inst_15074__$1 = tmp15115;var state_15102__$1 = (function (){var statearr_15117 = state_15102;(statearr_15117[7] = inst_15074__$1);
(statearr_15117[11] = inst_15091);
return statearr_15117;
})();var statearr_15118_15136 = state_15102__$1;(statearr_15118_15136[2] = null);
(statearr_15118_15136[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15122 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15122[0] = state_machine__5507__auto__);
(statearr_15122[1] = 1);
return statearr_15122;
});
var state_machine__5507__auto____1 = (function (state_15102){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15102);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15123){if((e15123 instanceof Object))
{var ex__5510__auto__ = e15123;var statearr_15124_15137 = state_15102;(statearr_15124_15137[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15102);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15123;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15138 = state_15102;
state_15102 = G__15138;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15102){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15125 = f__5522__auto__.call(null);(statearr_15125[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15126);
return statearr_15125;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15231 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15208){var state_val_15209 = (state_15208[1]);if((state_val_15209 === 1))
{var inst_15185 = 0;var state_15208__$1 = (function (){var statearr_15210 = state_15208;(statearr_15210[7] = inst_15185);
return statearr_15210;
})();var statearr_15211_15232 = state_15208__$1;(statearr_15211_15232[2] = null);
(statearr_15211_15232[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15209 === 2))
{var inst_15185 = (state_15208[7]);var inst_15187 = (inst_15185 < n);var state_15208__$1 = state_15208;if(cljs.core.truth_(inst_15187))
{var statearr_15212_15233 = state_15208__$1;(statearr_15212_15233[1] = 4);
} else
{var statearr_15213_15234 = state_15208__$1;(statearr_15213_15234[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15209 === 3))
{var inst_15205 = (state_15208[2]);var inst_15206 = cljs.core.async.close_BANG_.call(null,out);var state_15208__$1 = (function (){var statearr_15214 = state_15208;(statearr_15214[8] = inst_15205);
return statearr_15214;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15208__$1,inst_15206);
} else
{if((state_val_15209 === 4))
{var state_15208__$1 = state_15208;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15208__$1,7,ch);
} else
{if((state_val_15209 === 5))
{var state_15208__$1 = state_15208;var statearr_15215_15235 = state_15208__$1;(statearr_15215_15235[2] = null);
(statearr_15215_15235[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15209 === 6))
{var inst_15203 = (state_15208[2]);var state_15208__$1 = state_15208;var statearr_15216_15236 = state_15208__$1;(statearr_15216_15236[2] = inst_15203);
(statearr_15216_15236[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15209 === 7))
{var inst_15190 = (state_15208[9]);var inst_15190__$1 = (state_15208[2]);var inst_15191 = (inst_15190__$1 == null);var inst_15192 = cljs.core.not.call(null,inst_15191);var state_15208__$1 = (function (){var statearr_15217 = state_15208;(statearr_15217[9] = inst_15190__$1);
return statearr_15217;
})();if(inst_15192)
{var statearr_15218_15237 = state_15208__$1;(statearr_15218_15237[1] = 8);
} else
{var statearr_15219_15238 = state_15208__$1;(statearr_15219_15238[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15209 === 8))
{var inst_15190 = (state_15208[9]);var state_15208__$1 = state_15208;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15208__$1,11,out,inst_15190);
} else
{if((state_val_15209 === 9))
{var state_15208__$1 = state_15208;var statearr_15220_15239 = state_15208__$1;(statearr_15220_15239[2] = null);
(statearr_15220_15239[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15209 === 10))
{var inst_15200 = (state_15208[2]);var state_15208__$1 = state_15208;var statearr_15221_15240 = state_15208__$1;(statearr_15221_15240[2] = inst_15200);
(statearr_15221_15240[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15209 === 11))
{var inst_15185 = (state_15208[7]);var inst_15195 = (state_15208[2]);var inst_15196 = (inst_15185 + 1);var inst_15185__$1 = inst_15196;var state_15208__$1 = (function (){var statearr_15222 = state_15208;(statearr_15222[7] = inst_15185__$1);
(statearr_15222[10] = inst_15195);
return statearr_15222;
})();var statearr_15223_15241 = state_15208__$1;(statearr_15223_15241[2] = null);
(statearr_15223_15241[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15227 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15227[0] = state_machine__5507__auto__);
(statearr_15227[1] = 1);
return statearr_15227;
});
var state_machine__5507__auto____1 = (function (state_15208){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15208);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15228){if((e15228 instanceof Object))
{var ex__5510__auto__ = e15228;var statearr_15229_15242 = state_15208;(statearr_15229_15242[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15208);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15228;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15243 = state_15208;
state_15208 = G__15243;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15208){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15208);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15230 = f__5522__auto__.call(null);(statearr_15230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15231);
return statearr_15230;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15340 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15315){var state_val_15316 = (state_15315[1]);if((state_val_15316 === 1))
{var inst_15292 = null;var state_15315__$1 = (function (){var statearr_15317 = state_15315;(statearr_15317[7] = inst_15292);
return statearr_15317;
})();var statearr_15318_15341 = state_15315__$1;(statearr_15318_15341[2] = null);
(statearr_15318_15341[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 2))
{var state_15315__$1 = state_15315;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15315__$1,4,ch);
} else
{if((state_val_15316 === 3))
{var inst_15312 = (state_15315[2]);var inst_15313 = cljs.core.async.close_BANG_.call(null,out);var state_15315__$1 = (function (){var statearr_15319 = state_15315;(statearr_15319[8] = inst_15312);
return statearr_15319;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15315__$1,inst_15313);
} else
{if((state_val_15316 === 4))
{var inst_15295 = (state_15315[9]);var inst_15295__$1 = (state_15315[2]);var inst_15296 = (inst_15295__$1 == null);var inst_15297 = cljs.core.not.call(null,inst_15296);var state_15315__$1 = (function (){var statearr_15320 = state_15315;(statearr_15320[9] = inst_15295__$1);
return statearr_15320;
})();if(inst_15297)
{var statearr_15321_15342 = state_15315__$1;(statearr_15321_15342[1] = 5);
} else
{var statearr_15322_15343 = state_15315__$1;(statearr_15322_15343[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 5))
{var inst_15295 = (state_15315[9]);var inst_15292 = (state_15315[7]);var inst_15299 = cljs.core._EQ_.call(null,inst_15295,inst_15292);var state_15315__$1 = state_15315;if(inst_15299)
{var statearr_15323_15344 = state_15315__$1;(statearr_15323_15344[1] = 8);
} else
{var statearr_15324_15345 = state_15315__$1;(statearr_15324_15345[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 6))
{var state_15315__$1 = state_15315;var statearr_15326_15346 = state_15315__$1;(statearr_15326_15346[2] = null);
(statearr_15326_15346[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 7))
{var inst_15310 = (state_15315[2]);var state_15315__$1 = state_15315;var statearr_15327_15347 = state_15315__$1;(statearr_15327_15347[2] = inst_15310);
(statearr_15327_15347[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 8))
{var inst_15292 = (state_15315[7]);var tmp15325 = inst_15292;var inst_15292__$1 = tmp15325;var state_15315__$1 = (function (){var statearr_15328 = state_15315;(statearr_15328[7] = inst_15292__$1);
return statearr_15328;
})();var statearr_15329_15348 = state_15315__$1;(statearr_15329_15348[2] = null);
(statearr_15329_15348[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 9))
{var inst_15295 = (state_15315[9]);var state_15315__$1 = state_15315;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15315__$1,11,out,inst_15295);
} else
{if((state_val_15316 === 10))
{var inst_15307 = (state_15315[2]);var state_15315__$1 = state_15315;var statearr_15330_15349 = state_15315__$1;(statearr_15330_15349[2] = inst_15307);
(statearr_15330_15349[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15316 === 11))
{var inst_15295 = (state_15315[9]);var inst_15304 = (state_15315[2]);var inst_15292 = inst_15295;var state_15315__$1 = (function (){var statearr_15331 = state_15315;(statearr_15331[10] = inst_15304);
(statearr_15331[7] = inst_15292);
return statearr_15331;
})();var statearr_15332_15350 = state_15315__$1;(statearr_15332_15350[2] = null);
(statearr_15332_15350[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15336 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15336[0] = state_machine__5507__auto__);
(statearr_15336[1] = 1);
return statearr_15336;
});
var state_machine__5507__auto____1 = (function (state_15315){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15315);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15337){if((e15337 instanceof Object))
{var ex__5510__auto__ = e15337;var statearr_15338_15351 = state_15315;(statearr_15338_15351[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15315);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15337;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15352 = state_15315;
state_15315 = G__15352;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15315){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15315);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15339 = f__5522__auto__.call(null);(statearr_15339[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15340);
return statearr_15339;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15487 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15457){var state_val_15458 = (state_15457[1]);if((state_val_15458 === 1))
{var inst_15420 = (new Array(n));var inst_15421 = inst_15420;var inst_15422 = 0;var state_15457__$1 = (function (){var statearr_15459 = state_15457;(statearr_15459[7] = inst_15421);
(statearr_15459[8] = inst_15422);
return statearr_15459;
})();var statearr_15460_15488 = state_15457__$1;(statearr_15460_15488[2] = null);
(statearr_15460_15488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 2))
{var state_15457__$1 = state_15457;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15457__$1,4,ch);
} else
{if((state_val_15458 === 3))
{var inst_15455 = (state_15457[2]);var state_15457__$1 = state_15457;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15457__$1,inst_15455);
} else
{if((state_val_15458 === 4))
{var inst_15425 = (state_15457[9]);var inst_15425__$1 = (state_15457[2]);var inst_15426 = (inst_15425__$1 == null);var inst_15427 = cljs.core.not.call(null,inst_15426);var state_15457__$1 = (function (){var statearr_15461 = state_15457;(statearr_15461[9] = inst_15425__$1);
return statearr_15461;
})();if(inst_15427)
{var statearr_15462_15489 = state_15457__$1;(statearr_15462_15489[1] = 5);
} else
{var statearr_15463_15490 = state_15457__$1;(statearr_15463_15490[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 5))
{var inst_15425 = (state_15457[9]);var inst_15421 = (state_15457[7]);var inst_15422 = (state_15457[8]);var inst_15430 = (state_15457[10]);var inst_15429 = (inst_15421[inst_15422] = inst_15425);var inst_15430__$1 = (inst_15422 + 1);var inst_15431 = (inst_15430__$1 < n);var state_15457__$1 = (function (){var statearr_15464 = state_15457;(statearr_15464[10] = inst_15430__$1);
(statearr_15464[11] = inst_15429);
return statearr_15464;
})();if(cljs.core.truth_(inst_15431))
{var statearr_15465_15491 = state_15457__$1;(statearr_15465_15491[1] = 8);
} else
{var statearr_15466_15492 = state_15457__$1;(statearr_15466_15492[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 6))
{var inst_15422 = (state_15457[8]);var inst_15443 = (inst_15422 > 0);var state_15457__$1 = state_15457;if(cljs.core.truth_(inst_15443))
{var statearr_15468_15493 = state_15457__$1;(statearr_15468_15493[1] = 12);
} else
{var statearr_15469_15494 = state_15457__$1;(statearr_15469_15494[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 7))
{var inst_15453 = (state_15457[2]);var state_15457__$1 = state_15457;var statearr_15470_15495 = state_15457__$1;(statearr_15470_15495[2] = inst_15453);
(statearr_15470_15495[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 8))
{var inst_15421 = (state_15457[7]);var inst_15430 = (state_15457[10]);var tmp15467 = inst_15421;var inst_15421__$1 = tmp15467;var inst_15422 = inst_15430;var state_15457__$1 = (function (){var statearr_15471 = state_15457;(statearr_15471[7] = inst_15421__$1);
(statearr_15471[8] = inst_15422);
return statearr_15471;
})();var statearr_15472_15496 = state_15457__$1;(statearr_15472_15496[2] = null);
(statearr_15472_15496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 9))
{var inst_15421 = (state_15457[7]);var inst_15435 = cljs.core.vec.call(null,inst_15421);var state_15457__$1 = state_15457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15457__$1,11,out,inst_15435);
} else
{if((state_val_15458 === 10))
{var inst_15441 = (state_15457[2]);var state_15457__$1 = state_15457;var statearr_15473_15497 = state_15457__$1;(statearr_15473_15497[2] = inst_15441);
(statearr_15473_15497[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 11))
{var inst_15437 = (state_15457[2]);var inst_15438 = (new Array(n));var inst_15421 = inst_15438;var inst_15422 = 0;var state_15457__$1 = (function (){var statearr_15474 = state_15457;(statearr_15474[7] = inst_15421);
(statearr_15474[8] = inst_15422);
(statearr_15474[12] = inst_15437);
return statearr_15474;
})();var statearr_15475_15498 = state_15457__$1;(statearr_15475_15498[2] = null);
(statearr_15475_15498[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 12))
{var inst_15421 = (state_15457[7]);var inst_15445 = cljs.core.vec.call(null,inst_15421);var state_15457__$1 = state_15457;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15457__$1,15,out,inst_15445);
} else
{if((state_val_15458 === 13))
{var state_15457__$1 = state_15457;var statearr_15476_15499 = state_15457__$1;(statearr_15476_15499[2] = null);
(statearr_15476_15499[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 14))
{var inst_15450 = (state_15457[2]);var inst_15451 = cljs.core.async.close_BANG_.call(null,out);var state_15457__$1 = (function (){var statearr_15477 = state_15457;(statearr_15477[13] = inst_15450);
return statearr_15477;
})();var statearr_15478_15500 = state_15457__$1;(statearr_15478_15500[2] = inst_15451);
(statearr_15478_15500[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15458 === 15))
{var inst_15447 = (state_15457[2]);var state_15457__$1 = state_15457;var statearr_15479_15501 = state_15457__$1;(statearr_15479_15501[2] = inst_15447);
(statearr_15479_15501[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15483 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15483[0] = state_machine__5507__auto__);
(statearr_15483[1] = 1);
return statearr_15483;
});
var state_machine__5507__auto____1 = (function (state_15457){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15457);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15484){if((e15484 instanceof Object))
{var ex__5510__auto__ = e15484;var statearr_15485_15502 = state_15457;(statearr_15485_15502[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15457);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15484;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15503 = state_15457;
state_15457 = G__15503;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15457){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15486 = f__5522__auto__.call(null);(statearr_15486[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15487);
return statearr_15486;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15646 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15616){var state_val_15617 = (state_15616[1]);if((state_val_15617 === 1))
{var inst_15575 = [];var inst_15576 = inst_15575;var inst_15577 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15616__$1 = (function (){var statearr_15618 = state_15616;(statearr_15618[7] = inst_15576);
(statearr_15618[8] = inst_15577);
return statearr_15618;
})();var statearr_15619_15647 = state_15616__$1;(statearr_15619_15647[2] = null);
(statearr_15619_15647[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 2))
{var state_15616__$1 = state_15616;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15616__$1,4,ch);
} else
{if((state_val_15617 === 3))
{var inst_15614 = (state_15616[2]);var state_15616__$1 = state_15616;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15616__$1,inst_15614);
} else
{if((state_val_15617 === 4))
{var inst_15580 = (state_15616[9]);var inst_15580__$1 = (state_15616[2]);var inst_15581 = (inst_15580__$1 == null);var inst_15582 = cljs.core.not.call(null,inst_15581);var state_15616__$1 = (function (){var statearr_15620 = state_15616;(statearr_15620[9] = inst_15580__$1);
return statearr_15620;
})();if(inst_15582)
{var statearr_15621_15648 = state_15616__$1;(statearr_15621_15648[1] = 5);
} else
{var statearr_15622_15649 = state_15616__$1;(statearr_15622_15649[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 5))
{var inst_15584 = (state_15616[10]);var inst_15580 = (state_15616[9]);var inst_15577 = (state_15616[8]);var inst_15584__$1 = f.call(null,inst_15580);var inst_15585 = cljs.core._EQ_.call(null,inst_15584__$1,inst_15577);var inst_15586 = cljs.core.keyword_identical_QMARK_.call(null,inst_15577,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15587 = (inst_15585) || (inst_15586);var state_15616__$1 = (function (){var statearr_15623 = state_15616;(statearr_15623[10] = inst_15584__$1);
return statearr_15623;
})();if(cljs.core.truth_(inst_15587))
{var statearr_15624_15650 = state_15616__$1;(statearr_15624_15650[1] = 8);
} else
{var statearr_15625_15651 = state_15616__$1;(statearr_15625_15651[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 6))
{var inst_15576 = (state_15616[7]);var inst_15601 = inst_15576.length;var inst_15602 = (inst_15601 > 0);var state_15616__$1 = state_15616;if(cljs.core.truth_(inst_15602))
{var statearr_15627_15652 = state_15616__$1;(statearr_15627_15652[1] = 12);
} else
{var statearr_15628_15653 = state_15616__$1;(statearr_15628_15653[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 7))
{var inst_15612 = (state_15616[2]);var state_15616__$1 = state_15616;var statearr_15629_15654 = state_15616__$1;(statearr_15629_15654[2] = inst_15612);
(statearr_15629_15654[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 8))
{var inst_15576 = (state_15616[7]);var inst_15584 = (state_15616[10]);var inst_15580 = (state_15616[9]);var inst_15589 = inst_15576.push(inst_15580);var tmp15626 = inst_15576;var inst_15576__$1 = tmp15626;var inst_15577 = inst_15584;var state_15616__$1 = (function (){var statearr_15630 = state_15616;(statearr_15630[7] = inst_15576__$1);
(statearr_15630[11] = inst_15589);
(statearr_15630[8] = inst_15577);
return statearr_15630;
})();var statearr_15631_15655 = state_15616__$1;(statearr_15631_15655[2] = null);
(statearr_15631_15655[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 9))
{var inst_15576 = (state_15616[7]);var inst_15592 = cljs.core.vec.call(null,inst_15576);var state_15616__$1 = state_15616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15616__$1,11,out,inst_15592);
} else
{if((state_val_15617 === 10))
{var inst_15599 = (state_15616[2]);var state_15616__$1 = state_15616;var statearr_15632_15656 = state_15616__$1;(statearr_15632_15656[2] = inst_15599);
(statearr_15632_15656[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 11))
{var inst_15584 = (state_15616[10]);var inst_15580 = (state_15616[9]);var inst_15594 = (state_15616[2]);var inst_15595 = [];var inst_15596 = inst_15595.push(inst_15580);var inst_15576 = inst_15595;var inst_15577 = inst_15584;var state_15616__$1 = (function (){var statearr_15633 = state_15616;(statearr_15633[7] = inst_15576);
(statearr_15633[8] = inst_15577);
(statearr_15633[12] = inst_15596);
(statearr_15633[13] = inst_15594);
return statearr_15633;
})();var statearr_15634_15657 = state_15616__$1;(statearr_15634_15657[2] = null);
(statearr_15634_15657[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 12))
{var inst_15576 = (state_15616[7]);var inst_15604 = cljs.core.vec.call(null,inst_15576);var state_15616__$1 = state_15616;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15616__$1,15,out,inst_15604);
} else
{if((state_val_15617 === 13))
{var state_15616__$1 = state_15616;var statearr_15635_15658 = state_15616__$1;(statearr_15635_15658[2] = null);
(statearr_15635_15658[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 14))
{var inst_15609 = (state_15616[2]);var inst_15610 = cljs.core.async.close_BANG_.call(null,out);var state_15616__$1 = (function (){var statearr_15636 = state_15616;(statearr_15636[14] = inst_15609);
return statearr_15636;
})();var statearr_15637_15659 = state_15616__$1;(statearr_15637_15659[2] = inst_15610);
(statearr_15637_15659[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15617 === 15))
{var inst_15606 = (state_15616[2]);var state_15616__$1 = state_15616;var statearr_15638_15660 = state_15616__$1;(statearr_15638_15660[2] = inst_15606);
(statearr_15638_15660[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15642 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15642[0] = state_machine__5507__auto__);
(statearr_15642[1] = 1);
return statearr_15642;
});
var state_machine__5507__auto____1 = (function (state_15616){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15616);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15643){if((e15643 instanceof Object))
{var ex__5510__auto__ = e15643;var statearr_15644_15661 = state_15616;(statearr_15644_15661[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15616);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15643;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15662 = state_15616;
state_15616 = G__15662;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15616){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15616);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15645 = f__5522__auto__.call(null);(statearr_15645[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15646);
return statearr_15645;
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