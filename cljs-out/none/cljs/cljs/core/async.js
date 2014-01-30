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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13116 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13116 = (function (f,fn_handler,meta13117){
this.f = f;
this.fn_handler = fn_handler;
this.meta13117 = meta13117;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13116.cljs$lang$type = true;
cljs.core.async.t13116.cljs$lang$ctorStr = "cljs.core.async/t13116";
cljs.core.async.t13116.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13116");
});
cljs.core.async.t13116.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13116.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13116.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13118){var self__ = this;
var _13118__$1 = this;return self__.meta13117;
});
cljs.core.async.t13116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13118,meta13117__$1){var self__ = this;
var _13118__$1 = this;return (new cljs.core.async.t13116(self__.f,self__.fn_handler,meta13117__$1));
});
cljs.core.async.__GT_t13116 = (function __GT_t13116(f__$1,fn_handler__$1,meta13117){return (new cljs.core.async.t13116(f__$1,fn_handler__$1,meta13117));
});
}
return (new cljs.core.async.t13116(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13120 = buff;if(G__13120)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13120.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13120.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13120);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13120);
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
{var val_13121 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13121);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13121);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13122 = n;var x_13123 = 0;while(true){
if((x_13123 < n__4248__auto___13122))
{(a[x_13123] = 0);
{
var G__13124 = (x_13123 + 1);
x_13123 = G__13124;
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
var G__13125 = (i + 1);
i = G__13125;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13129 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13129 = (function (flag,alt_flag,meta13130){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13130 = meta13130;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13129.cljs$lang$type = true;
cljs.core.async.t13129.cljs$lang$ctorStr = "cljs.core.async/t13129";
cljs.core.async.t13129.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13129");
});
cljs.core.async.t13129.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13129.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13129.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13131){var self__ = this;
var _13131__$1 = this;return self__.meta13130;
});
cljs.core.async.t13129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13131,meta13130__$1){var self__ = this;
var _13131__$1 = this;return (new cljs.core.async.t13129(self__.flag,self__.alt_flag,meta13130__$1));
});
cljs.core.async.__GT_t13129 = (function __GT_t13129(flag__$1,alt_flag__$1,meta13130){return (new cljs.core.async.t13129(flag__$1,alt_flag__$1,meta13130));
});
}
return (new cljs.core.async.t13129(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13135 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13135 = (function (cb,flag,alt_handler,meta13136){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13136 = meta13136;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13135.cljs$lang$type = true;
cljs.core.async.t13135.cljs$lang$ctorStr = "cljs.core.async/t13135";
cljs.core.async.t13135.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13135");
});
cljs.core.async.t13135.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13135.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13135.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13135.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13137){var self__ = this;
var _13137__$1 = this;return self__.meta13136;
});
cljs.core.async.t13135.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13137,meta13136__$1){var self__ = this;
var _13137__$1 = this;return (new cljs.core.async.t13135(self__.cb,self__.flag,self__.alt_handler,meta13136__$1));
});
cljs.core.async.__GT_t13135 = (function __GT_t13135(cb__$1,flag__$1,alt_handler__$1,meta13136){return (new cljs.core.async.t13135(cb__$1,flag__$1,alt_handler__$1,meta13136));
});
}
return (new cljs.core.async.t13135(cb,flag,alt_handler,null));
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
return (function (p1__13138_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13138_SHARP_,port], null));
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
var G__13139 = (i + 1);
i = G__13139;
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
var alts_BANG___delegate = function (ports,p__13140){var map__13142 = p__13140;var map__13142__$1 = ((cljs.core.seq_QMARK_.call(null,map__13142))?cljs.core.apply.call(null,cljs.core.hash_map,map__13142):map__13142);var opts = map__13142__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13140 = null;if (arguments.length > 1) {
  p__13140 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13140);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13143){
var ports = cljs.core.first(arglist__13143);
var p__13140 = cljs.core.rest(arglist__13143);
return alts_BANG___delegate(ports,p__13140);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13151 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13151 = (function (ch,f,map_LT_,meta13152){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13152 = meta13152;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13151.cljs$lang$type = true;
cljs.core.async.t13151.cljs$lang$ctorStr = "cljs.core.async/t13151";
cljs.core.async.t13151.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13151");
});
cljs.core.async.t13151.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13151.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13151.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13151.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13154 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13154 = (function (fn1,_,meta13152,ch,f,map_LT_,meta13155){
this.fn1 = fn1;
this._ = _;
this.meta13152 = meta13152;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13155 = meta13155;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13154.cljs$lang$type = true;
cljs.core.async.t13154.cljs$lang$ctorStr = "cljs.core.async/t13154";
cljs.core.async.t13154.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13154");
});
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13154.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13144_SHARP_){return f1.call(null,(((p1__13144_SHARP_ == null))?null:self__.f.call(null,p1__13144_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13156){var self__ = this;
var _13156__$1 = this;return self__.meta13155;
});
cljs.core.async.t13154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13156,meta13155__$1){var self__ = this;
var _13156__$1 = this;return (new cljs.core.async.t13154(self__.fn1,self__._,self__.meta13152,self__.ch,self__.f,self__.map_LT_,meta13155__$1));
});
cljs.core.async.__GT_t13154 = (function __GT_t13154(fn1__$1,___$2,meta13152__$1,ch__$2,f__$2,map_LT___$2,meta13155){return (new cljs.core.async.t13154(fn1__$1,___$2,meta13152__$1,ch__$2,f__$2,map_LT___$2,meta13155));
});
}
return (new cljs.core.async.t13154(fn1,___$1,self__.meta13152,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13151.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13151.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13151.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13153){var self__ = this;
var _13153__$1 = this;return self__.meta13152;
});
cljs.core.async.t13151.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13153,meta13152__$1){var self__ = this;
var _13153__$1 = this;return (new cljs.core.async.t13151(self__.ch,self__.f,self__.map_LT_,meta13152__$1));
});
cljs.core.async.__GT_t13151 = (function __GT_t13151(ch__$1,f__$1,map_LT___$1,meta13152){return (new cljs.core.async.t13151(ch__$1,f__$1,map_LT___$1,meta13152));
});
}
return (new cljs.core.async.t13151(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13160 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13160 = (function (ch,f,map_GT_,meta13161){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13161 = meta13161;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13160.cljs$lang$type = true;
cljs.core.async.t13160.cljs$lang$ctorStr = "cljs.core.async/t13160";
cljs.core.async.t13160.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13160");
});
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13160.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13162){var self__ = this;
var _13162__$1 = this;return self__.meta13161;
});
cljs.core.async.t13160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13162,meta13161__$1){var self__ = this;
var _13162__$1 = this;return (new cljs.core.async.t13160(self__.ch,self__.f,self__.map_GT_,meta13161__$1));
});
cljs.core.async.__GT_t13160 = (function __GT_t13160(ch__$1,f__$1,map_GT___$1,meta13161){return (new cljs.core.async.t13160(ch__$1,f__$1,map_GT___$1,meta13161));
});
}
return (new cljs.core.async.t13160(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13166 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13166 = (function (ch,p,filter_GT_,meta13167){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13167 = meta13167;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13166.cljs$lang$type = true;
cljs.core.async.t13166.cljs$lang$ctorStr = "cljs.core.async/t13166";
cljs.core.async.t13166.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13166");
});
cljs.core.async.t13166.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13166.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13166.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13166.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13166.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13166.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13166.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13168){var self__ = this;
var _13168__$1 = this;return self__.meta13167;
});
cljs.core.async.t13166.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13168,meta13167__$1){var self__ = this;
var _13168__$1 = this;return (new cljs.core.async.t13166(self__.ch,self__.p,self__.filter_GT_,meta13167__$1));
});
cljs.core.async.__GT_t13166 = (function __GT_t13166(ch__$1,p__$1,filter_GT___$1,meta13167){return (new cljs.core.async.t13166(ch__$1,p__$1,filter_GT___$1,meta13167));
});
}
return (new cljs.core.async.t13166(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13251 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13230){var state_val_13231 = (state_13230[1]);if((state_val_13231 === 1))
{var state_13230__$1 = state_13230;var statearr_13232_13252 = state_13230__$1;(statearr_13232_13252[2] = null);
(statearr_13232_13252[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13231 === 2))
{var state_13230__$1 = state_13230;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13230__$1,4,ch);
} else
{if((state_val_13231 === 3))
{var inst_13228 = (state_13230[2]);var state_13230__$1 = state_13230;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13230__$1,inst_13228);
} else
{if((state_val_13231 === 4))
{var inst_13212 = (state_13230[7]);var inst_13212__$1 = (state_13230[2]);var inst_13213 = (inst_13212__$1 == null);var state_13230__$1 = (function (){var statearr_13233 = state_13230;(statearr_13233[7] = inst_13212__$1);
return statearr_13233;
})();if(cljs.core.truth_(inst_13213))
{var statearr_13234_13253 = state_13230__$1;(statearr_13234_13253[1] = 5);
} else
{var statearr_13235_13254 = state_13230__$1;(statearr_13235_13254[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13231 === 5))
{var inst_13215 = cljs.core.async.close_BANG_.call(null,out);var state_13230__$1 = state_13230;var statearr_13236_13255 = state_13230__$1;(statearr_13236_13255[2] = inst_13215);
(statearr_13236_13255[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13231 === 6))
{var inst_13212 = (state_13230[7]);var inst_13217 = p.call(null,inst_13212);var state_13230__$1 = state_13230;if(cljs.core.truth_(inst_13217))
{var statearr_13237_13256 = state_13230__$1;(statearr_13237_13256[1] = 8);
} else
{var statearr_13238_13257 = state_13230__$1;(statearr_13238_13257[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13231 === 7))
{var inst_13226 = (state_13230[2]);var state_13230__$1 = state_13230;var statearr_13239_13258 = state_13230__$1;(statearr_13239_13258[2] = inst_13226);
(statearr_13239_13258[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13231 === 8))
{var inst_13212 = (state_13230[7]);var state_13230__$1 = state_13230;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13230__$1,11,out,inst_13212);
} else
{if((state_val_13231 === 9))
{var state_13230__$1 = state_13230;var statearr_13240_13259 = state_13230__$1;(statearr_13240_13259[2] = null);
(statearr_13240_13259[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13231 === 10))
{var inst_13223 = (state_13230[2]);var state_13230__$1 = (function (){var statearr_13241 = state_13230;(statearr_13241[8] = inst_13223);
return statearr_13241;
})();var statearr_13242_13260 = state_13230__$1;(statearr_13242_13260[2] = null);
(statearr_13242_13260[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13231 === 11))
{var inst_13220 = (state_13230[2]);var state_13230__$1 = state_13230;var statearr_13243_13261 = state_13230__$1;(statearr_13243_13261[2] = inst_13220);
(statearr_13243_13261[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13247 = [null,null,null,null,null,null,null,null,null];(statearr_13247[0] = state_machine__5507__auto__);
(statearr_13247[1] = 1);
return statearr_13247;
});
var state_machine__5507__auto____1 = (function (state_13230){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13230);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13248){if((e13248 instanceof Object))
{var ex__5510__auto__ = e13248;var statearr_13249_13262 = state_13230;(statearr_13249_13262[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13230);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13248;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13263 = state_13230;
state_13230 = G__13263;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13230){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13230);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13250 = f__5522__auto__.call(null);(statearr_13250[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13251);
return statearr_13250;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13415){var state_val_13416 = (state_13415[1]);if((state_val_13416 === 1))
{var state_13415__$1 = state_13415;var statearr_13417_13454 = state_13415__$1;(statearr_13417_13454[2] = null);
(statearr_13417_13454[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 2))
{var state_13415__$1 = state_13415;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13415__$1,4,in$);
} else
{if((state_val_13416 === 3))
{var inst_13413 = (state_13415[2]);var state_13415__$1 = state_13415;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13415__$1,inst_13413);
} else
{if((state_val_13416 === 4))
{var inst_13361 = (state_13415[7]);var inst_13361__$1 = (state_13415[2]);var inst_13362 = (inst_13361__$1 == null);var state_13415__$1 = (function (){var statearr_13418 = state_13415;(statearr_13418[7] = inst_13361__$1);
return statearr_13418;
})();if(cljs.core.truth_(inst_13362))
{var statearr_13419_13455 = state_13415__$1;(statearr_13419_13455[1] = 5);
} else
{var statearr_13420_13456 = state_13415__$1;(statearr_13420_13456[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 5))
{var inst_13364 = cljs.core.async.close_BANG_.call(null,out);var state_13415__$1 = state_13415;var statearr_13421_13457 = state_13415__$1;(statearr_13421_13457[2] = inst_13364);
(statearr_13421_13457[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 6))
{var inst_13361 = (state_13415[7]);var inst_13366 = f.call(null,inst_13361);var inst_13371 = cljs.core.seq.call(null,inst_13366);var inst_13372 = inst_13371;var inst_13373 = null;var inst_13374 = 0;var inst_13375 = 0;var state_13415__$1 = (function (){var statearr_13422 = state_13415;(statearr_13422[8] = inst_13375);
(statearr_13422[9] = inst_13373);
(statearr_13422[10] = inst_13374);
(statearr_13422[11] = inst_13372);
return statearr_13422;
})();var statearr_13423_13458 = state_13415__$1;(statearr_13423_13458[2] = null);
(statearr_13423_13458[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 7))
{var inst_13411 = (state_13415[2]);var state_13415__$1 = state_13415;var statearr_13424_13459 = state_13415__$1;(statearr_13424_13459[2] = inst_13411);
(statearr_13424_13459[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 8))
{var inst_13375 = (state_13415[8]);var inst_13374 = (state_13415[10]);var inst_13377 = (inst_13375 < inst_13374);var inst_13378 = inst_13377;var state_13415__$1 = state_13415;if(cljs.core.truth_(inst_13378))
{var statearr_13425_13460 = state_13415__$1;(statearr_13425_13460[1] = 10);
} else
{var statearr_13426_13461 = state_13415__$1;(statearr_13426_13461[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 9))
{var inst_13408 = (state_13415[2]);var state_13415__$1 = (function (){var statearr_13427 = state_13415;(statearr_13427[12] = inst_13408);
return statearr_13427;
})();var statearr_13428_13462 = state_13415__$1;(statearr_13428_13462[2] = null);
(statearr_13428_13462[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 10))
{var inst_13375 = (state_13415[8]);var inst_13373 = (state_13415[9]);var inst_13380 = cljs.core._nth.call(null,inst_13373,inst_13375);var state_13415__$1 = state_13415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13415__$1,13,out,inst_13380);
} else
{if((state_val_13416 === 11))
{var inst_13372 = (state_13415[11]);var inst_13386 = (state_13415[13]);var inst_13386__$1 = cljs.core.seq.call(null,inst_13372);var state_13415__$1 = (function (){var statearr_13432 = state_13415;(statearr_13432[13] = inst_13386__$1);
return statearr_13432;
})();if(inst_13386__$1)
{var statearr_13433_13463 = state_13415__$1;(statearr_13433_13463[1] = 14);
} else
{var statearr_13434_13464 = state_13415__$1;(statearr_13434_13464[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 12))
{var inst_13406 = (state_13415[2]);var state_13415__$1 = state_13415;var statearr_13435_13465 = state_13415__$1;(statearr_13435_13465[2] = inst_13406);
(statearr_13435_13465[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 13))
{var inst_13375 = (state_13415[8]);var inst_13373 = (state_13415[9]);var inst_13374 = (state_13415[10]);var inst_13372 = (state_13415[11]);var inst_13382 = (state_13415[2]);var inst_13383 = (inst_13375 + 1);var tmp13429 = inst_13373;var tmp13430 = inst_13374;var tmp13431 = inst_13372;var inst_13372__$1 = tmp13431;var inst_13373__$1 = tmp13429;var inst_13374__$1 = tmp13430;var inst_13375__$1 = inst_13383;var state_13415__$1 = (function (){var statearr_13436 = state_13415;(statearr_13436[8] = inst_13375__$1);
(statearr_13436[9] = inst_13373__$1);
(statearr_13436[10] = inst_13374__$1);
(statearr_13436[11] = inst_13372__$1);
(statearr_13436[14] = inst_13382);
return statearr_13436;
})();var statearr_13437_13466 = state_13415__$1;(statearr_13437_13466[2] = null);
(statearr_13437_13466[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 14))
{var inst_13386 = (state_13415[13]);var inst_13388 = cljs.core.chunked_seq_QMARK_.call(null,inst_13386);var state_13415__$1 = state_13415;if(inst_13388)
{var statearr_13438_13467 = state_13415__$1;(statearr_13438_13467[1] = 17);
} else
{var statearr_13439_13468 = state_13415__$1;(statearr_13439_13468[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 15))
{var state_13415__$1 = state_13415;var statearr_13440_13469 = state_13415__$1;(statearr_13440_13469[2] = null);
(statearr_13440_13469[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 16))
{var inst_13404 = (state_13415[2]);var state_13415__$1 = state_13415;var statearr_13441_13470 = state_13415__$1;(statearr_13441_13470[2] = inst_13404);
(statearr_13441_13470[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 17))
{var inst_13386 = (state_13415[13]);var inst_13390 = cljs.core.chunk_first.call(null,inst_13386);var inst_13391 = cljs.core.chunk_rest.call(null,inst_13386);var inst_13392 = cljs.core.count.call(null,inst_13390);var inst_13372 = inst_13391;var inst_13373 = inst_13390;var inst_13374 = inst_13392;var inst_13375 = 0;var state_13415__$1 = (function (){var statearr_13442 = state_13415;(statearr_13442[8] = inst_13375);
(statearr_13442[9] = inst_13373);
(statearr_13442[10] = inst_13374);
(statearr_13442[11] = inst_13372);
return statearr_13442;
})();var statearr_13443_13471 = state_13415__$1;(statearr_13443_13471[2] = null);
(statearr_13443_13471[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 18))
{var inst_13386 = (state_13415[13]);var inst_13395 = cljs.core.first.call(null,inst_13386);var state_13415__$1 = state_13415;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13415__$1,20,out,inst_13395);
} else
{if((state_val_13416 === 19))
{var inst_13401 = (state_13415[2]);var state_13415__$1 = state_13415;var statearr_13444_13472 = state_13415__$1;(statearr_13444_13472[2] = inst_13401);
(statearr_13444_13472[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13416 === 20))
{var inst_13386 = (state_13415[13]);var inst_13397 = (state_13415[2]);var inst_13398 = cljs.core.next.call(null,inst_13386);var inst_13372 = inst_13398;var inst_13373 = null;var inst_13374 = 0;var inst_13375 = 0;var state_13415__$1 = (function (){var statearr_13445 = state_13415;(statearr_13445[15] = inst_13397);
(statearr_13445[8] = inst_13375);
(statearr_13445[9] = inst_13373);
(statearr_13445[10] = inst_13374);
(statearr_13445[11] = inst_13372);
return statearr_13445;
})();var statearr_13446_13473 = state_13415__$1;(statearr_13446_13473[2] = null);
(statearr_13446_13473[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13450 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13450[0] = state_machine__5507__auto__);
(statearr_13450[1] = 1);
return statearr_13450;
});
var state_machine__5507__auto____1 = (function (state_13415){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13415);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13451){if((e13451 instanceof Object))
{var ex__5510__auto__ = e13451;var statearr_13452_13474 = state_13415;(statearr_13452_13474[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13415);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13451;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13475 = state_13415;
state_13415 = G__13475;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13415){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13453 = f__5522__auto__.call(null);(statearr_13453[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13453;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13556 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13535){var state_val_13536 = (state_13535[1]);if((state_val_13536 === 1))
{var state_13535__$1 = state_13535;var statearr_13537_13557 = state_13535__$1;(statearr_13537_13557[2] = null);
(statearr_13537_13557[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13536 === 2))
{var state_13535__$1 = state_13535;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13535__$1,4,from);
} else
{if((state_val_13536 === 3))
{var inst_13533 = (state_13535[2]);var state_13535__$1 = state_13535;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13535__$1,inst_13533);
} else
{if((state_val_13536 === 4))
{var inst_13518 = (state_13535[7]);var inst_13518__$1 = (state_13535[2]);var inst_13519 = (inst_13518__$1 == null);var state_13535__$1 = (function (){var statearr_13538 = state_13535;(statearr_13538[7] = inst_13518__$1);
return statearr_13538;
})();if(cljs.core.truth_(inst_13519))
{var statearr_13539_13558 = state_13535__$1;(statearr_13539_13558[1] = 5);
} else
{var statearr_13540_13559 = state_13535__$1;(statearr_13540_13559[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13536 === 5))
{var state_13535__$1 = state_13535;if(cljs.core.truth_(close_QMARK_))
{var statearr_13541_13560 = state_13535__$1;(statearr_13541_13560[1] = 8);
} else
{var statearr_13542_13561 = state_13535__$1;(statearr_13542_13561[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13536 === 6))
{var inst_13518 = (state_13535[7]);var state_13535__$1 = state_13535;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13535__$1,11,to,inst_13518);
} else
{if((state_val_13536 === 7))
{var inst_13531 = (state_13535[2]);var state_13535__$1 = state_13535;var statearr_13543_13562 = state_13535__$1;(statearr_13543_13562[2] = inst_13531);
(statearr_13543_13562[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13536 === 8))
{var inst_13522 = cljs.core.async.close_BANG_.call(null,to);var state_13535__$1 = state_13535;var statearr_13544_13563 = state_13535__$1;(statearr_13544_13563[2] = inst_13522);
(statearr_13544_13563[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13536 === 9))
{var state_13535__$1 = state_13535;var statearr_13545_13564 = state_13535__$1;(statearr_13545_13564[2] = null);
(statearr_13545_13564[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13536 === 10))
{var inst_13525 = (state_13535[2]);var state_13535__$1 = state_13535;var statearr_13546_13565 = state_13535__$1;(statearr_13546_13565[2] = inst_13525);
(statearr_13546_13565[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13536 === 11))
{var inst_13528 = (state_13535[2]);var state_13535__$1 = (function (){var statearr_13547 = state_13535;(statearr_13547[8] = inst_13528);
return statearr_13547;
})();var statearr_13548_13566 = state_13535__$1;(statearr_13548_13566[2] = null);
(statearr_13548_13566[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13552 = [null,null,null,null,null,null,null,null,null];(statearr_13552[0] = state_machine__5507__auto__);
(statearr_13552[1] = 1);
return statearr_13552;
});
var state_machine__5507__auto____1 = (function (state_13535){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13535);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13553){if((e13553 instanceof Object))
{var ex__5510__auto__ = e13553;var statearr_13554_13567 = state_13535;(statearr_13554_13567[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13535);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13553;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13568 = state_13535;
state_13535 = G__13568;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13535){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13535);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13555 = f__5522__auto__.call(null);(statearr_13555[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13556);
return statearr_13555;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13655 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13633){var state_val_13634 = (state_13633[1]);if((state_val_13634 === 1))
{var state_13633__$1 = state_13633;var statearr_13635_13656 = state_13633__$1;(statearr_13635_13656[2] = null);
(statearr_13635_13656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13634 === 2))
{var state_13633__$1 = state_13633;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13633__$1,4,ch);
} else
{if((state_val_13634 === 3))
{var inst_13631 = (state_13633[2]);var state_13633__$1 = state_13633;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13633__$1,inst_13631);
} else
{if((state_val_13634 === 4))
{var inst_13614 = (state_13633[7]);var inst_13614__$1 = (state_13633[2]);var inst_13615 = (inst_13614__$1 == null);var state_13633__$1 = (function (){var statearr_13636 = state_13633;(statearr_13636[7] = inst_13614__$1);
return statearr_13636;
})();if(cljs.core.truth_(inst_13615))
{var statearr_13637_13657 = state_13633__$1;(statearr_13637_13657[1] = 5);
} else
{var statearr_13638_13658 = state_13633__$1;(statearr_13638_13658[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13634 === 5))
{var inst_13617 = cljs.core.async.close_BANG_.call(null,tc);var inst_13618 = cljs.core.async.close_BANG_.call(null,fc);var state_13633__$1 = (function (){var statearr_13639 = state_13633;(statearr_13639[8] = inst_13617);
return statearr_13639;
})();var statearr_13640_13659 = state_13633__$1;(statearr_13640_13659[2] = inst_13618);
(statearr_13640_13659[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13634 === 6))
{var inst_13614 = (state_13633[7]);var inst_13620 = p.call(null,inst_13614);var state_13633__$1 = state_13633;if(cljs.core.truth_(inst_13620))
{var statearr_13641_13660 = state_13633__$1;(statearr_13641_13660[1] = 9);
} else
{var statearr_13642_13661 = state_13633__$1;(statearr_13642_13661[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13634 === 7))
{var inst_13629 = (state_13633[2]);var state_13633__$1 = state_13633;var statearr_13643_13662 = state_13633__$1;(statearr_13643_13662[2] = inst_13629);
(statearr_13643_13662[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13634 === 8))
{var inst_13626 = (state_13633[2]);var state_13633__$1 = (function (){var statearr_13644 = state_13633;(statearr_13644[9] = inst_13626);
return statearr_13644;
})();var statearr_13645_13663 = state_13633__$1;(statearr_13645_13663[2] = null);
(statearr_13645_13663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13634 === 9))
{var state_13633__$1 = state_13633;var statearr_13646_13664 = state_13633__$1;(statearr_13646_13664[2] = tc);
(statearr_13646_13664[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13634 === 10))
{var state_13633__$1 = state_13633;var statearr_13647_13665 = state_13633__$1;(statearr_13647_13665[2] = fc);
(statearr_13647_13665[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13634 === 11))
{var inst_13614 = (state_13633[7]);var inst_13624 = (state_13633[2]);var state_13633__$1 = state_13633;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13633__$1,8,inst_13624,inst_13614);
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
var state_machine__5507__auto____0 = (function (){var statearr_13651 = [null,null,null,null,null,null,null,null,null,null];(statearr_13651[0] = state_machine__5507__auto__);
(statearr_13651[1] = 1);
return statearr_13651;
});
var state_machine__5507__auto____1 = (function (state_13633){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13633);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13652){if((e13652 instanceof Object))
{var ex__5510__auto__ = e13652;var statearr_13653_13666 = state_13633;(statearr_13653_13666[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13633);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13652;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13667 = state_13633;
state_13633 = G__13667;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13633){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13654 = f__5522__auto__.call(null);(statearr_13654[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13655);
return statearr_13654;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13714){var state_val_13715 = (state_13714[1]);if((state_val_13715 === 7))
{var inst_13710 = (state_13714[2]);var state_13714__$1 = state_13714;var statearr_13716_13732 = state_13714__$1;(statearr_13716_13732[2] = inst_13710);
(statearr_13716_13732[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 6))
{var inst_13700 = (state_13714[7]);var inst_13703 = (state_13714[8]);var inst_13707 = f.call(null,inst_13700,inst_13703);var inst_13700__$1 = inst_13707;var state_13714__$1 = (function (){var statearr_13717 = state_13714;(statearr_13717[7] = inst_13700__$1);
return statearr_13717;
})();var statearr_13718_13733 = state_13714__$1;(statearr_13718_13733[2] = null);
(statearr_13718_13733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 5))
{var inst_13700 = (state_13714[7]);var state_13714__$1 = state_13714;var statearr_13719_13734 = state_13714__$1;(statearr_13719_13734[2] = inst_13700);
(statearr_13719_13734[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 4))
{var inst_13703 = (state_13714[8]);var inst_13703__$1 = (state_13714[2]);var inst_13704 = (inst_13703__$1 == null);var state_13714__$1 = (function (){var statearr_13720 = state_13714;(statearr_13720[8] = inst_13703__$1);
return statearr_13720;
})();if(cljs.core.truth_(inst_13704))
{var statearr_13721_13735 = state_13714__$1;(statearr_13721_13735[1] = 5);
} else
{var statearr_13722_13736 = state_13714__$1;(statearr_13722_13736[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13715 === 3))
{var inst_13712 = (state_13714[2]);var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13714__$1,inst_13712);
} else
{if((state_val_13715 === 2))
{var state_13714__$1 = state_13714;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13714__$1,4,ch);
} else
{if((state_val_13715 === 1))
{var inst_13700 = init;var state_13714__$1 = (function (){var statearr_13723 = state_13714;(statearr_13723[7] = inst_13700);
return statearr_13723;
})();var statearr_13724_13737 = state_13714__$1;(statearr_13724_13737[2] = null);
(statearr_13724_13737[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13728 = [null,null,null,null,null,null,null,null,null];(statearr_13728[0] = state_machine__5507__auto__);
(statearr_13728[1] = 1);
return statearr_13728;
});
var state_machine__5507__auto____1 = (function (state_13714){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13714);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13729){if((e13729 instanceof Object))
{var ex__5510__auto__ = e13729;var statearr_13730_13738 = state_13714;(statearr_13730_13738[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13714);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13729;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13739 = state_13714;
state_13714 = G__13739;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13714){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13731 = f__5522__auto__.call(null);(statearr_13731[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13731;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13801){var state_val_13802 = (state_13801[1]);if((state_val_13802 === 1))
{var inst_13781 = cljs.core.seq.call(null,coll);var inst_13782 = inst_13781;var state_13801__$1 = (function (){var statearr_13803 = state_13801;(statearr_13803[7] = inst_13782);
return statearr_13803;
})();var statearr_13804_13822 = state_13801__$1;(statearr_13804_13822[2] = null);
(statearr_13804_13822[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13802 === 2))
{var inst_13782 = (state_13801[7]);var state_13801__$1 = state_13801;if(cljs.core.truth_(inst_13782))
{var statearr_13805_13823 = state_13801__$1;(statearr_13805_13823[1] = 4);
} else
{var statearr_13806_13824 = state_13801__$1;(statearr_13806_13824[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13802 === 3))
{var inst_13799 = (state_13801[2]);var state_13801__$1 = state_13801;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13801__$1,inst_13799);
} else
{if((state_val_13802 === 4))
{var inst_13782 = (state_13801[7]);var inst_13785 = cljs.core.first.call(null,inst_13782);var state_13801__$1 = state_13801;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13801__$1,7,ch,inst_13785);
} else
{if((state_val_13802 === 5))
{var state_13801__$1 = state_13801;if(cljs.core.truth_(close_QMARK_))
{var statearr_13807_13825 = state_13801__$1;(statearr_13807_13825[1] = 8);
} else
{var statearr_13808_13826 = state_13801__$1;(statearr_13808_13826[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13802 === 6))
{var inst_13797 = (state_13801[2]);var state_13801__$1 = state_13801;var statearr_13809_13827 = state_13801__$1;(statearr_13809_13827[2] = inst_13797);
(statearr_13809_13827[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13802 === 7))
{var inst_13782 = (state_13801[7]);var inst_13787 = (state_13801[2]);var inst_13788 = cljs.core.next.call(null,inst_13782);var inst_13782__$1 = inst_13788;var state_13801__$1 = (function (){var statearr_13810 = state_13801;(statearr_13810[8] = inst_13787);
(statearr_13810[7] = inst_13782__$1);
return statearr_13810;
})();var statearr_13811_13828 = state_13801__$1;(statearr_13811_13828[2] = null);
(statearr_13811_13828[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13802 === 8))
{var inst_13792 = cljs.core.async.close_BANG_.call(null,ch);var state_13801__$1 = state_13801;var statearr_13812_13829 = state_13801__$1;(statearr_13812_13829[2] = inst_13792);
(statearr_13812_13829[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13802 === 9))
{var state_13801__$1 = state_13801;var statearr_13813_13830 = state_13801__$1;(statearr_13813_13830[2] = null);
(statearr_13813_13830[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13802 === 10))
{var inst_13795 = (state_13801[2]);var state_13801__$1 = state_13801;var statearr_13814_13831 = state_13801__$1;(statearr_13814_13831[2] = inst_13795);
(statearr_13814_13831[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13818 = [null,null,null,null,null,null,null,null,null];(statearr_13818[0] = state_machine__5507__auto__);
(statearr_13818[1] = 1);
return statearr_13818;
});
var state_machine__5507__auto____1 = (function (state_13801){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13801);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13819){if((e13819 instanceof Object))
{var ex__5510__auto__ = e13819;var statearr_13820_13832 = state_13801;(statearr_13820_13832[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13801);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13819;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13833 = state_13801;
state_13801 = G__13833;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13801){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13801);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13821 = f__5522__auto__.call(null);(statearr_13821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13821;
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
cljs.core.async.Mux = (function (){var obj13835 = {};return obj13835;
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
cljs.core.async.Mult = (function (){var obj13837 = {};return obj13837;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14061 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14061 = (function (cs,ch,mult,meta14062){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14062 = meta14062;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14061.cljs$lang$type = true;
cljs.core.async.t14061.cljs$lang$ctorStr = "cljs.core.async/t14061";
cljs.core.async.t14061.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14061");
});})(cs))
;
cljs.core.async.t14061.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14061.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14061.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14061.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14061.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14061.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14061.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14063){var self__ = this;
var _14063__$1 = this;return self__.meta14062;
});})(cs))
;
cljs.core.async.t14061.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14063,meta14062__$1){var self__ = this;
var _14063__$1 = this;return (new cljs.core.async.t14061(self__.cs,self__.ch,self__.mult,meta14062__$1));
});})(cs))
;
cljs.core.async.__GT_t14061 = ((function (cs){
return (function __GT_t14061(cs__$1,ch__$1,mult__$1,meta14062){return (new cljs.core.async.t14061(cs__$1,ch__$1,mult__$1,meta14062));
});})(cs))
;
}
return (new cljs.core.async.t14061(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14284 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14198){var state_val_14199 = (state_14198[1]);if((state_val_14199 === 32))
{var inst_14066 = (state_14198[7]);var inst_14142 = (state_14198[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14198,31,Object,null,30);var inst_14149 = cljs.core.async.put_BANG_.call(null,inst_14142,inst_14066,done);var state_14198__$1 = state_14198;var statearr_14200_14285 = state_14198__$1;(statearr_14200_14285[2] = inst_14149);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14198__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 1))
{var state_14198__$1 = state_14198;var statearr_14201_14286 = state_14198__$1;(statearr_14201_14286[2] = null);
(statearr_14201_14286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 33))
{var inst_14155 = (state_14198[9]);var inst_14157 = cljs.core.chunked_seq_QMARK_.call(null,inst_14155);var state_14198__$1 = state_14198;if(inst_14157)
{var statearr_14202_14287 = state_14198__$1;(statearr_14202_14287[1] = 36);
} else
{var statearr_14203_14288 = state_14198__$1;(statearr_14203_14288[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 2))
{var state_14198__$1 = state_14198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14198__$1,4,ch);
} else
{if((state_val_14199 === 34))
{var state_14198__$1 = state_14198;var statearr_14204_14289 = state_14198__$1;(statearr_14204_14289[2] = null);
(statearr_14204_14289[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 3))
{var inst_14196 = (state_14198[2]);var state_14198__$1 = state_14198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14198__$1,inst_14196);
} else
{if((state_val_14199 === 35))
{var inst_14180 = (state_14198[2]);var state_14198__$1 = state_14198;var statearr_14205_14290 = state_14198__$1;(statearr_14205_14290[2] = inst_14180);
(statearr_14205_14290[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 4))
{var inst_14066 = (state_14198[7]);var inst_14066__$1 = (state_14198[2]);var inst_14067 = (inst_14066__$1 == null);var state_14198__$1 = (function (){var statearr_14206 = state_14198;(statearr_14206[7] = inst_14066__$1);
return statearr_14206;
})();if(cljs.core.truth_(inst_14067))
{var statearr_14207_14291 = state_14198__$1;(statearr_14207_14291[1] = 5);
} else
{var statearr_14208_14292 = state_14198__$1;(statearr_14208_14292[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 36))
{var inst_14155 = (state_14198[9]);var inst_14159 = cljs.core.chunk_first.call(null,inst_14155);var inst_14160 = cljs.core.chunk_rest.call(null,inst_14155);var inst_14161 = cljs.core.count.call(null,inst_14159);var inst_14134 = inst_14160;var inst_14135 = inst_14159;var inst_14136 = inst_14161;var inst_14137 = 0;var state_14198__$1 = (function (){var statearr_14209 = state_14198;(statearr_14209[10] = inst_14137);
(statearr_14209[11] = inst_14136);
(statearr_14209[12] = inst_14134);
(statearr_14209[13] = inst_14135);
return statearr_14209;
})();var statearr_14210_14293 = state_14198__$1;(statearr_14210_14293[2] = null);
(statearr_14210_14293[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 5))
{var inst_14073 = cljs.core.deref.call(null,cs);var inst_14074 = cljs.core.seq.call(null,inst_14073);var inst_14075 = inst_14074;var inst_14076 = null;var inst_14077 = 0;var inst_14078 = 0;var state_14198__$1 = (function (){var statearr_14211 = state_14198;(statearr_14211[14] = inst_14077);
(statearr_14211[15] = inst_14078);
(statearr_14211[16] = inst_14076);
(statearr_14211[17] = inst_14075);
return statearr_14211;
})();var statearr_14212_14294 = state_14198__$1;(statearr_14212_14294[2] = null);
(statearr_14212_14294[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 37))
{var inst_14155 = (state_14198[9]);var inst_14164 = cljs.core.first.call(null,inst_14155);var state_14198__$1 = (function (){var statearr_14213 = state_14198;(statearr_14213[18] = inst_14164);
return statearr_14213;
})();var statearr_14214_14295 = state_14198__$1;(statearr_14214_14295[2] = null);
(statearr_14214_14295[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 6))
{var inst_14126 = (state_14198[19]);var inst_14125 = cljs.core.deref.call(null,cs);var inst_14126__$1 = cljs.core.keys.call(null,inst_14125);var inst_14127 = cljs.core.count.call(null,inst_14126__$1);var inst_14128 = cljs.core.reset_BANG_.call(null,dctr,inst_14127);var inst_14133 = cljs.core.seq.call(null,inst_14126__$1);var inst_14134 = inst_14133;var inst_14135 = null;var inst_14136 = 0;var inst_14137 = 0;var state_14198__$1 = (function (){var statearr_14215 = state_14198;(statearr_14215[10] = inst_14137);
(statearr_14215[11] = inst_14136);
(statearr_14215[12] = inst_14134);
(statearr_14215[13] = inst_14135);
(statearr_14215[20] = inst_14128);
(statearr_14215[19] = inst_14126__$1);
return statearr_14215;
})();var statearr_14216_14296 = state_14198__$1;(statearr_14216_14296[2] = null);
(statearr_14216_14296[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 38))
{var inst_14177 = (state_14198[2]);var state_14198__$1 = state_14198;var statearr_14217_14297 = state_14198__$1;(statearr_14217_14297[2] = inst_14177);
(statearr_14217_14297[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 7))
{var inst_14194 = (state_14198[2]);var state_14198__$1 = state_14198;var statearr_14218_14298 = state_14198__$1;(statearr_14218_14298[2] = inst_14194);
(statearr_14218_14298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 39))
{var inst_14155 = (state_14198[9]);var inst_14173 = (state_14198[2]);var inst_14174 = cljs.core.next.call(null,inst_14155);var inst_14134 = inst_14174;var inst_14135 = null;var inst_14136 = 0;var inst_14137 = 0;var state_14198__$1 = (function (){var statearr_14219 = state_14198;(statearr_14219[10] = inst_14137);
(statearr_14219[11] = inst_14136);
(statearr_14219[12] = inst_14134);
(statearr_14219[13] = inst_14135);
(statearr_14219[21] = inst_14173);
return statearr_14219;
})();var statearr_14220_14299 = state_14198__$1;(statearr_14220_14299[2] = null);
(statearr_14220_14299[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 8))
{var inst_14077 = (state_14198[14]);var inst_14078 = (state_14198[15]);var inst_14080 = (inst_14078 < inst_14077);var inst_14081 = inst_14080;var state_14198__$1 = state_14198;if(cljs.core.truth_(inst_14081))
{var statearr_14221_14300 = state_14198__$1;(statearr_14221_14300[1] = 10);
} else
{var statearr_14222_14301 = state_14198__$1;(statearr_14222_14301[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 40))
{var inst_14164 = (state_14198[18]);var inst_14165 = (state_14198[2]);var inst_14166 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14167 = cljs.core.async.untap_STAR_.call(null,m,inst_14164);var state_14198__$1 = (function (){var statearr_14223 = state_14198;(statearr_14223[22] = inst_14165);
(statearr_14223[23] = inst_14166);
return statearr_14223;
})();var statearr_14224_14302 = state_14198__$1;(statearr_14224_14302[2] = inst_14167);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14198__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 9))
{var inst_14123 = (state_14198[2]);var state_14198__$1 = state_14198;var statearr_14225_14303 = state_14198__$1;(statearr_14225_14303[2] = inst_14123);
(statearr_14225_14303[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 41))
{var inst_14164 = (state_14198[18]);var inst_14066 = (state_14198[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14198,40,Object,null,39);var inst_14171 = cljs.core.async.put_BANG_.call(null,inst_14164,inst_14066,done);var state_14198__$1 = state_14198;var statearr_14226_14304 = state_14198__$1;(statearr_14226_14304[2] = inst_14171);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14198__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 10))
{var inst_14078 = (state_14198[15]);var inst_14076 = (state_14198[16]);var inst_14084 = cljs.core._nth.call(null,inst_14076,inst_14078);var inst_14085 = cljs.core.nth.call(null,inst_14084,0,null);var inst_14086 = cljs.core.nth.call(null,inst_14084,1,null);var state_14198__$1 = (function (){var statearr_14227 = state_14198;(statearr_14227[24] = inst_14085);
return statearr_14227;
})();if(cljs.core.truth_(inst_14086))
{var statearr_14228_14305 = state_14198__$1;(statearr_14228_14305[1] = 13);
} else
{var statearr_14229_14306 = state_14198__$1;(statearr_14229_14306[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 42))
{var state_14198__$1 = state_14198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14198__$1,45,dchan);
} else
{if((state_val_14199 === 11))
{var inst_14095 = (state_14198[25]);var inst_14075 = (state_14198[17]);var inst_14095__$1 = cljs.core.seq.call(null,inst_14075);var state_14198__$1 = (function (){var statearr_14230 = state_14198;(statearr_14230[25] = inst_14095__$1);
return statearr_14230;
})();if(inst_14095__$1)
{var statearr_14231_14307 = state_14198__$1;(statearr_14231_14307[1] = 16);
} else
{var statearr_14232_14308 = state_14198__$1;(statearr_14232_14308[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 43))
{var state_14198__$1 = state_14198;var statearr_14233_14309 = state_14198__$1;(statearr_14233_14309[2] = null);
(statearr_14233_14309[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 12))
{var inst_14121 = (state_14198[2]);var state_14198__$1 = state_14198;var statearr_14234_14310 = state_14198__$1;(statearr_14234_14310[2] = inst_14121);
(statearr_14234_14310[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 44))
{var inst_14191 = (state_14198[2]);var state_14198__$1 = (function (){var statearr_14235 = state_14198;(statearr_14235[26] = inst_14191);
return statearr_14235;
})();var statearr_14236_14311 = state_14198__$1;(statearr_14236_14311[2] = null);
(statearr_14236_14311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 13))
{var inst_14085 = (state_14198[24]);var inst_14088 = cljs.core.async.close_BANG_.call(null,inst_14085);var state_14198__$1 = state_14198;var statearr_14237_14312 = state_14198__$1;(statearr_14237_14312[2] = inst_14088);
(statearr_14237_14312[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 45))
{var inst_14188 = (state_14198[2]);var state_14198__$1 = state_14198;var statearr_14241_14313 = state_14198__$1;(statearr_14241_14313[2] = inst_14188);
(statearr_14241_14313[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 14))
{var state_14198__$1 = state_14198;var statearr_14242_14314 = state_14198__$1;(statearr_14242_14314[2] = null);
(statearr_14242_14314[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 15))
{var inst_14077 = (state_14198[14]);var inst_14078 = (state_14198[15]);var inst_14076 = (state_14198[16]);var inst_14075 = (state_14198[17]);var inst_14091 = (state_14198[2]);var inst_14092 = (inst_14078 + 1);var tmp14238 = inst_14077;var tmp14239 = inst_14076;var tmp14240 = inst_14075;var inst_14075__$1 = tmp14240;var inst_14076__$1 = tmp14239;var inst_14077__$1 = tmp14238;var inst_14078__$1 = inst_14092;var state_14198__$1 = (function (){var statearr_14243 = state_14198;(statearr_14243[27] = inst_14091);
(statearr_14243[14] = inst_14077__$1);
(statearr_14243[15] = inst_14078__$1);
(statearr_14243[16] = inst_14076__$1);
(statearr_14243[17] = inst_14075__$1);
return statearr_14243;
})();var statearr_14244_14315 = state_14198__$1;(statearr_14244_14315[2] = null);
(statearr_14244_14315[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 16))
{var inst_14095 = (state_14198[25]);var inst_14097 = cljs.core.chunked_seq_QMARK_.call(null,inst_14095);var state_14198__$1 = state_14198;if(inst_14097)
{var statearr_14245_14316 = state_14198__$1;(statearr_14245_14316[1] = 19);
} else
{var statearr_14246_14317 = state_14198__$1;(statearr_14246_14317[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 17))
{var state_14198__$1 = state_14198;var statearr_14247_14318 = state_14198__$1;(statearr_14247_14318[2] = null);
(statearr_14247_14318[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 18))
{var inst_14119 = (state_14198[2]);var state_14198__$1 = state_14198;var statearr_14248_14319 = state_14198__$1;(statearr_14248_14319[2] = inst_14119);
(statearr_14248_14319[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 19))
{var inst_14095 = (state_14198[25]);var inst_14099 = cljs.core.chunk_first.call(null,inst_14095);var inst_14100 = cljs.core.chunk_rest.call(null,inst_14095);var inst_14101 = cljs.core.count.call(null,inst_14099);var inst_14075 = inst_14100;var inst_14076 = inst_14099;var inst_14077 = inst_14101;var inst_14078 = 0;var state_14198__$1 = (function (){var statearr_14249 = state_14198;(statearr_14249[14] = inst_14077);
(statearr_14249[15] = inst_14078);
(statearr_14249[16] = inst_14076);
(statearr_14249[17] = inst_14075);
return statearr_14249;
})();var statearr_14250_14320 = state_14198__$1;(statearr_14250_14320[2] = null);
(statearr_14250_14320[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 20))
{var inst_14095 = (state_14198[25]);var inst_14105 = cljs.core.first.call(null,inst_14095);var inst_14106 = cljs.core.nth.call(null,inst_14105,0,null);var inst_14107 = cljs.core.nth.call(null,inst_14105,1,null);var state_14198__$1 = (function (){var statearr_14251 = state_14198;(statearr_14251[28] = inst_14106);
return statearr_14251;
})();if(cljs.core.truth_(inst_14107))
{var statearr_14252_14321 = state_14198__$1;(statearr_14252_14321[1] = 22);
} else
{var statearr_14253_14322 = state_14198__$1;(statearr_14253_14322[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 21))
{var inst_14116 = (state_14198[2]);var state_14198__$1 = state_14198;var statearr_14254_14323 = state_14198__$1;(statearr_14254_14323[2] = inst_14116);
(statearr_14254_14323[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 22))
{var inst_14106 = (state_14198[28]);var inst_14109 = cljs.core.async.close_BANG_.call(null,inst_14106);var state_14198__$1 = state_14198;var statearr_14255_14324 = state_14198__$1;(statearr_14255_14324[2] = inst_14109);
(statearr_14255_14324[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 23))
{var state_14198__$1 = state_14198;var statearr_14256_14325 = state_14198__$1;(statearr_14256_14325[2] = null);
(statearr_14256_14325[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 24))
{var inst_14095 = (state_14198[25]);var inst_14112 = (state_14198[2]);var inst_14113 = cljs.core.next.call(null,inst_14095);var inst_14075 = inst_14113;var inst_14076 = null;var inst_14077 = 0;var inst_14078 = 0;var state_14198__$1 = (function (){var statearr_14257 = state_14198;(statearr_14257[29] = inst_14112);
(statearr_14257[14] = inst_14077);
(statearr_14257[15] = inst_14078);
(statearr_14257[16] = inst_14076);
(statearr_14257[17] = inst_14075);
return statearr_14257;
})();var statearr_14258_14326 = state_14198__$1;(statearr_14258_14326[2] = null);
(statearr_14258_14326[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 25))
{var inst_14137 = (state_14198[10]);var inst_14136 = (state_14198[11]);var inst_14139 = (inst_14137 < inst_14136);var inst_14140 = inst_14139;var state_14198__$1 = state_14198;if(cljs.core.truth_(inst_14140))
{var statearr_14259_14327 = state_14198__$1;(statearr_14259_14327[1] = 27);
} else
{var statearr_14260_14328 = state_14198__$1;(statearr_14260_14328[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 26))
{var inst_14126 = (state_14198[19]);var inst_14184 = (state_14198[2]);var inst_14185 = cljs.core.seq.call(null,inst_14126);var state_14198__$1 = (function (){var statearr_14261 = state_14198;(statearr_14261[30] = inst_14184);
return statearr_14261;
})();if(inst_14185)
{var statearr_14262_14329 = state_14198__$1;(statearr_14262_14329[1] = 42);
} else
{var statearr_14263_14330 = state_14198__$1;(statearr_14263_14330[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 27))
{var inst_14137 = (state_14198[10]);var inst_14135 = (state_14198[13]);var inst_14142 = cljs.core._nth.call(null,inst_14135,inst_14137);var state_14198__$1 = (function (){var statearr_14264 = state_14198;(statearr_14264[8] = inst_14142);
return statearr_14264;
})();var statearr_14265_14331 = state_14198__$1;(statearr_14265_14331[2] = null);
(statearr_14265_14331[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 28))
{var inst_14134 = (state_14198[12]);var inst_14155 = (state_14198[9]);var inst_14155__$1 = cljs.core.seq.call(null,inst_14134);var state_14198__$1 = (function (){var statearr_14269 = state_14198;(statearr_14269[9] = inst_14155__$1);
return statearr_14269;
})();if(inst_14155__$1)
{var statearr_14270_14332 = state_14198__$1;(statearr_14270_14332[1] = 33);
} else
{var statearr_14271_14333 = state_14198__$1;(statearr_14271_14333[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 29))
{var inst_14182 = (state_14198[2]);var state_14198__$1 = state_14198;var statearr_14272_14334 = state_14198__$1;(statearr_14272_14334[2] = inst_14182);
(statearr_14272_14334[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 30))
{var inst_14137 = (state_14198[10]);var inst_14136 = (state_14198[11]);var inst_14134 = (state_14198[12]);var inst_14135 = (state_14198[13]);var inst_14151 = (state_14198[2]);var inst_14152 = (inst_14137 + 1);var tmp14266 = inst_14136;var tmp14267 = inst_14134;var tmp14268 = inst_14135;var inst_14134__$1 = tmp14267;var inst_14135__$1 = tmp14268;var inst_14136__$1 = tmp14266;var inst_14137__$1 = inst_14152;var state_14198__$1 = (function (){var statearr_14273 = state_14198;(statearr_14273[10] = inst_14137__$1);
(statearr_14273[11] = inst_14136__$1);
(statearr_14273[12] = inst_14134__$1);
(statearr_14273[13] = inst_14135__$1);
(statearr_14273[31] = inst_14151);
return statearr_14273;
})();var statearr_14274_14335 = state_14198__$1;(statearr_14274_14335[2] = null);
(statearr_14274_14335[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14199 === 31))
{var inst_14142 = (state_14198[8]);var inst_14143 = (state_14198[2]);var inst_14144 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14145 = cljs.core.async.untap_STAR_.call(null,m,inst_14142);var state_14198__$1 = (function (){var statearr_14275 = state_14198;(statearr_14275[32] = inst_14143);
(statearr_14275[33] = inst_14144);
return statearr_14275;
})();var statearr_14276_14336 = state_14198__$1;(statearr_14276_14336[2] = inst_14145);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14198__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14280[0] = state_machine__5507__auto__);
(statearr_14280[1] = 1);
return statearr_14280;
});
var state_machine__5507__auto____1 = (function (state_14198){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14198);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14281){if((e14281 instanceof Object))
{var ex__5510__auto__ = e14281;var statearr_14282_14337 = state_14198;(statearr_14282_14337[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14281;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14338 = state_14198;
state_14198 = G__14338;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14198){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14283 = f__5522__auto__.call(null);(statearr_14283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14284);
return statearr_14283;
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
cljs.core.async.Mix = (function (){var obj14340 = {};return obj14340;
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
;var m = (function (){if(typeof cljs.core.async.t14450 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14450 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14451){
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
this.meta14451 = meta14451;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14450.cljs$lang$type = true;
cljs.core.async.t14450.cljs$lang$ctorStr = "cljs.core.async/t14450";
cljs.core.async.t14450.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14450");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14450.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14450.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14450.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14450.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14450.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14450.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14450.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14450.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14450.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14452){var self__ = this;
var _14452__$1 = this;return self__.meta14451;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14450.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14452,meta14451__$1){var self__ = this;
var _14452__$1 = this;return (new cljs.core.async.t14450(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14451__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14450 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14450(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14451){return (new cljs.core.async.t14450(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14451));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14450(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14559 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14517){var state_val_14518 = (state_14517[1]);if((state_val_14518 === 1))
{var inst_14456 = (state_14517[7]);var inst_14456__$1 = calc_state.call(null);var inst_14457 = cljs.core.seq_QMARK_.call(null,inst_14456__$1);var state_14517__$1 = (function (){var statearr_14519 = state_14517;(statearr_14519[7] = inst_14456__$1);
return statearr_14519;
})();if(inst_14457)
{var statearr_14520_14560 = state_14517__$1;(statearr_14520_14560[1] = 2);
} else
{var statearr_14521_14561 = state_14517__$1;(statearr_14521_14561[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 2))
{var inst_14456 = (state_14517[7]);var inst_14459 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14456);var state_14517__$1 = state_14517;var statearr_14522_14562 = state_14517__$1;(statearr_14522_14562[2] = inst_14459);
(statearr_14522_14562[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 3))
{var inst_14456 = (state_14517[7]);var state_14517__$1 = state_14517;var statearr_14523_14563 = state_14517__$1;(statearr_14523_14563[2] = inst_14456);
(statearr_14523_14563[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 4))
{var inst_14456 = (state_14517[7]);var inst_14462 = (state_14517[2]);var inst_14463 = cljs.core.get.call(null,inst_14462,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14464 = cljs.core.get.call(null,inst_14462,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14465 = cljs.core.get.call(null,inst_14462,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14466 = inst_14456;var state_14517__$1 = (function (){var statearr_14524 = state_14517;(statearr_14524[8] = inst_14464);
(statearr_14524[9] = inst_14465);
(statearr_14524[10] = inst_14463);
(statearr_14524[11] = inst_14466);
return statearr_14524;
})();var statearr_14525_14564 = state_14517__$1;(statearr_14525_14564[2] = null);
(statearr_14525_14564[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 5))
{var inst_14466 = (state_14517[11]);var inst_14469 = cljs.core.seq_QMARK_.call(null,inst_14466);var state_14517__$1 = state_14517;if(inst_14469)
{var statearr_14526_14565 = state_14517__$1;(statearr_14526_14565[1] = 7);
} else
{var statearr_14527_14566 = state_14517__$1;(statearr_14527_14566[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 6))
{var inst_14515 = (state_14517[2]);var state_14517__$1 = state_14517;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14517__$1,inst_14515);
} else
{if((state_val_14518 === 7))
{var inst_14466 = (state_14517[11]);var inst_14471 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14466);var state_14517__$1 = state_14517;var statearr_14528_14567 = state_14517__$1;(statearr_14528_14567[2] = inst_14471);
(statearr_14528_14567[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 8))
{var inst_14466 = (state_14517[11]);var state_14517__$1 = state_14517;var statearr_14529_14568 = state_14517__$1;(statearr_14529_14568[2] = inst_14466);
(statearr_14529_14568[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 9))
{var inst_14474 = (state_14517[12]);var inst_14474__$1 = (state_14517[2]);var inst_14475 = cljs.core.get.call(null,inst_14474__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14476 = cljs.core.get.call(null,inst_14474__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14477 = cljs.core.get.call(null,inst_14474__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14517__$1 = (function (){var statearr_14530 = state_14517;(statearr_14530[13] = inst_14477);
(statearr_14530[14] = inst_14476);
(statearr_14530[12] = inst_14474__$1);
return statearr_14530;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14517__$1,10,inst_14475);
} else
{if((state_val_14518 === 10))
{var inst_14481 = (state_14517[15]);var inst_14482 = (state_14517[16]);var inst_14480 = (state_14517[2]);var inst_14481__$1 = cljs.core.nth.call(null,inst_14480,0,null);var inst_14482__$1 = cljs.core.nth.call(null,inst_14480,1,null);var inst_14483 = (inst_14481__$1 == null);var inst_14484 = cljs.core._EQ_.call(null,inst_14482__$1,change);var inst_14485 = (inst_14483) || (inst_14484);var state_14517__$1 = (function (){var statearr_14531 = state_14517;(statearr_14531[15] = inst_14481__$1);
(statearr_14531[16] = inst_14482__$1);
return statearr_14531;
})();if(cljs.core.truth_(inst_14485))
{var statearr_14532_14569 = state_14517__$1;(statearr_14532_14569[1] = 11);
} else
{var statearr_14533_14570 = state_14517__$1;(statearr_14533_14570[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 11))
{var inst_14481 = (state_14517[15]);var inst_14487 = (inst_14481 == null);var state_14517__$1 = state_14517;if(cljs.core.truth_(inst_14487))
{var statearr_14534_14571 = state_14517__$1;(statearr_14534_14571[1] = 14);
} else
{var statearr_14535_14572 = state_14517__$1;(statearr_14535_14572[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 12))
{var inst_14482 = (state_14517[16]);var inst_14496 = (state_14517[17]);var inst_14477 = (state_14517[13]);var inst_14496__$1 = inst_14477.call(null,inst_14482);var state_14517__$1 = (function (){var statearr_14536 = state_14517;(statearr_14536[17] = inst_14496__$1);
return statearr_14536;
})();if(cljs.core.truth_(inst_14496__$1))
{var statearr_14537_14573 = state_14517__$1;(statearr_14537_14573[1] = 17);
} else
{var statearr_14538_14574 = state_14517__$1;(statearr_14538_14574[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 13))
{var inst_14513 = (state_14517[2]);var state_14517__$1 = state_14517;var statearr_14539_14575 = state_14517__$1;(statearr_14539_14575[2] = inst_14513);
(statearr_14539_14575[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 14))
{var inst_14482 = (state_14517[16]);var inst_14489 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14482);var state_14517__$1 = state_14517;var statearr_14540_14576 = state_14517__$1;(statearr_14540_14576[2] = inst_14489);
(statearr_14540_14576[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 15))
{var state_14517__$1 = state_14517;var statearr_14541_14577 = state_14517__$1;(statearr_14541_14577[2] = null);
(statearr_14541_14577[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 16))
{var inst_14492 = (state_14517[2]);var inst_14493 = calc_state.call(null);var inst_14466 = inst_14493;var state_14517__$1 = (function (){var statearr_14542 = state_14517;(statearr_14542[18] = inst_14492);
(statearr_14542[11] = inst_14466);
return statearr_14542;
})();var statearr_14543_14578 = state_14517__$1;(statearr_14543_14578[2] = null);
(statearr_14543_14578[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 17))
{var inst_14496 = (state_14517[17]);var state_14517__$1 = state_14517;var statearr_14544_14579 = state_14517__$1;(statearr_14544_14579[2] = inst_14496);
(statearr_14544_14579[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 18))
{var inst_14482 = (state_14517[16]);var inst_14477 = (state_14517[13]);var inst_14476 = (state_14517[14]);var inst_14499 = cljs.core.empty_QMARK_.call(null,inst_14477);var inst_14500 = inst_14476.call(null,inst_14482);var inst_14501 = cljs.core.not.call(null,inst_14500);var inst_14502 = (inst_14499) && (inst_14501);var state_14517__$1 = state_14517;var statearr_14545_14580 = state_14517__$1;(statearr_14545_14580[2] = inst_14502);
(statearr_14545_14580[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 19))
{var inst_14504 = (state_14517[2]);var state_14517__$1 = state_14517;if(cljs.core.truth_(inst_14504))
{var statearr_14546_14581 = state_14517__$1;(statearr_14546_14581[1] = 20);
} else
{var statearr_14547_14582 = state_14517__$1;(statearr_14547_14582[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 20))
{var inst_14481 = (state_14517[15]);var state_14517__$1 = state_14517;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14517__$1,23,out,inst_14481);
} else
{if((state_val_14518 === 21))
{var state_14517__$1 = state_14517;var statearr_14548_14583 = state_14517__$1;(statearr_14548_14583[2] = null);
(statearr_14548_14583[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 22))
{var inst_14474 = (state_14517[12]);var inst_14510 = (state_14517[2]);var inst_14466 = inst_14474;var state_14517__$1 = (function (){var statearr_14549 = state_14517;(statearr_14549[19] = inst_14510);
(statearr_14549[11] = inst_14466);
return statearr_14549;
})();var statearr_14550_14584 = state_14517__$1;(statearr_14550_14584[2] = null);
(statearr_14550_14584[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14518 === 23))
{var inst_14507 = (state_14517[2]);var state_14517__$1 = state_14517;var statearr_14551_14585 = state_14517__$1;(statearr_14551_14585[2] = inst_14507);
(statearr_14551_14585[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14555[0] = state_machine__5507__auto__);
(statearr_14555[1] = 1);
return statearr_14555;
});
var state_machine__5507__auto____1 = (function (state_14517){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14517);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14556){if((e14556 instanceof Object))
{var ex__5510__auto__ = e14556;var statearr_14557_14586 = state_14517;(statearr_14557_14586[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14517);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14556;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14587 = state_14517;
state_14517 = G__14587;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14517){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14558 = f__5522__auto__.call(null);(statearr_14558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14559);
return statearr_14558;
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
cljs.core.async.Pub = (function (){var obj14589 = {};return obj14589;
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
return (function (p1__14590_SHARP_){if(cljs.core.truth_(p1__14590_SHARP_.call(null,topic)))
{return p1__14590_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14590_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14715 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14715 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14716){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14716 = meta14716;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14715.cljs$lang$type = true;
cljs.core.async.t14715.cljs$lang$ctorStr = "cljs.core.async/t14715";
cljs.core.async.t14715.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14715");
});})(mults,ensure_mult))
;
cljs.core.async.t14715.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14715.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14715.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14715.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14715.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14715.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14715.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14715.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14717){var self__ = this;
var _14717__$1 = this;return self__.meta14716;
});})(mults,ensure_mult))
;
cljs.core.async.t14715.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14717,meta14716__$1){var self__ = this;
var _14717__$1 = this;return (new cljs.core.async.t14715(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14716__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14715 = ((function (mults,ensure_mult){
return (function __GT_t14715(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14716){return (new cljs.core.async.t14715(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14716));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14715(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14839 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14791){var state_val_14792 = (state_14791[1]);if((state_val_14792 === 1))
{var state_14791__$1 = state_14791;var statearr_14793_14840 = state_14791__$1;(statearr_14793_14840[2] = null);
(statearr_14793_14840[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 2))
{var state_14791__$1 = state_14791;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14791__$1,4,ch);
} else
{if((state_val_14792 === 3))
{var inst_14789 = (state_14791[2]);var state_14791__$1 = state_14791;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14791__$1,inst_14789);
} else
{if((state_val_14792 === 4))
{var inst_14720 = (state_14791[7]);var inst_14720__$1 = (state_14791[2]);var inst_14721 = (inst_14720__$1 == null);var state_14791__$1 = (function (){var statearr_14794 = state_14791;(statearr_14794[7] = inst_14720__$1);
return statearr_14794;
})();if(cljs.core.truth_(inst_14721))
{var statearr_14795_14841 = state_14791__$1;(statearr_14795_14841[1] = 5);
} else
{var statearr_14796_14842 = state_14791__$1;(statearr_14796_14842[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 5))
{var inst_14727 = cljs.core.deref.call(null,mults);var inst_14728 = cljs.core.vals.call(null,inst_14727);var inst_14729 = cljs.core.seq.call(null,inst_14728);var inst_14730 = inst_14729;var inst_14731 = null;var inst_14732 = 0;var inst_14733 = 0;var state_14791__$1 = (function (){var statearr_14797 = state_14791;(statearr_14797[8] = inst_14733);
(statearr_14797[9] = inst_14732);
(statearr_14797[10] = inst_14731);
(statearr_14797[11] = inst_14730);
return statearr_14797;
})();var statearr_14798_14843 = state_14791__$1;(statearr_14798_14843[2] = null);
(statearr_14798_14843[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 6))
{var inst_14768 = (state_14791[12]);var inst_14770 = (state_14791[13]);var inst_14720 = (state_14791[7]);var inst_14768__$1 = topic_fn.call(null,inst_14720);var inst_14769 = cljs.core.deref.call(null,mults);var inst_14770__$1 = cljs.core.get.call(null,inst_14769,inst_14768__$1);var state_14791__$1 = (function (){var statearr_14799 = state_14791;(statearr_14799[12] = inst_14768__$1);
(statearr_14799[13] = inst_14770__$1);
return statearr_14799;
})();if(cljs.core.truth_(inst_14770__$1))
{var statearr_14800_14844 = state_14791__$1;(statearr_14800_14844[1] = 19);
} else
{var statearr_14801_14845 = state_14791__$1;(statearr_14801_14845[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 7))
{var inst_14787 = (state_14791[2]);var state_14791__$1 = state_14791;var statearr_14802_14846 = state_14791__$1;(statearr_14802_14846[2] = inst_14787);
(statearr_14802_14846[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 8))
{var inst_14733 = (state_14791[8]);var inst_14732 = (state_14791[9]);var inst_14735 = (inst_14733 < inst_14732);var inst_14736 = inst_14735;var state_14791__$1 = state_14791;if(cljs.core.truth_(inst_14736))
{var statearr_14806_14847 = state_14791__$1;(statearr_14806_14847[1] = 10);
} else
{var statearr_14807_14848 = state_14791__$1;(statearr_14807_14848[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 9))
{var inst_14766 = (state_14791[2]);var state_14791__$1 = state_14791;var statearr_14808_14849 = state_14791__$1;(statearr_14808_14849[2] = inst_14766);
(statearr_14808_14849[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 10))
{var inst_14733 = (state_14791[8]);var inst_14732 = (state_14791[9]);var inst_14731 = (state_14791[10]);var inst_14730 = (state_14791[11]);var inst_14738 = cljs.core._nth.call(null,inst_14731,inst_14733);var inst_14739 = cljs.core.async.muxch_STAR_.call(null,inst_14738);var inst_14740 = cljs.core.async.close_BANG_.call(null,inst_14739);var inst_14741 = (inst_14733 + 1);var tmp14803 = inst_14732;var tmp14804 = inst_14731;var tmp14805 = inst_14730;var inst_14730__$1 = tmp14805;var inst_14731__$1 = tmp14804;var inst_14732__$1 = tmp14803;var inst_14733__$1 = inst_14741;var state_14791__$1 = (function (){var statearr_14809 = state_14791;(statearr_14809[8] = inst_14733__$1);
(statearr_14809[9] = inst_14732__$1);
(statearr_14809[10] = inst_14731__$1);
(statearr_14809[11] = inst_14730__$1);
(statearr_14809[14] = inst_14740);
return statearr_14809;
})();var statearr_14810_14850 = state_14791__$1;(statearr_14810_14850[2] = null);
(statearr_14810_14850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 11))
{var inst_14730 = (state_14791[11]);var inst_14744 = (state_14791[15]);var inst_14744__$1 = cljs.core.seq.call(null,inst_14730);var state_14791__$1 = (function (){var statearr_14811 = state_14791;(statearr_14811[15] = inst_14744__$1);
return statearr_14811;
})();if(inst_14744__$1)
{var statearr_14812_14851 = state_14791__$1;(statearr_14812_14851[1] = 13);
} else
{var statearr_14813_14852 = state_14791__$1;(statearr_14813_14852[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 12))
{var inst_14764 = (state_14791[2]);var state_14791__$1 = state_14791;var statearr_14814_14853 = state_14791__$1;(statearr_14814_14853[2] = inst_14764);
(statearr_14814_14853[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 13))
{var inst_14744 = (state_14791[15]);var inst_14746 = cljs.core.chunked_seq_QMARK_.call(null,inst_14744);var state_14791__$1 = state_14791;if(inst_14746)
{var statearr_14815_14854 = state_14791__$1;(statearr_14815_14854[1] = 16);
} else
{var statearr_14816_14855 = state_14791__$1;(statearr_14816_14855[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 14))
{var state_14791__$1 = state_14791;var statearr_14817_14856 = state_14791__$1;(statearr_14817_14856[2] = null);
(statearr_14817_14856[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 15))
{var inst_14762 = (state_14791[2]);var state_14791__$1 = state_14791;var statearr_14818_14857 = state_14791__$1;(statearr_14818_14857[2] = inst_14762);
(statearr_14818_14857[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 16))
{var inst_14744 = (state_14791[15]);var inst_14748 = cljs.core.chunk_first.call(null,inst_14744);var inst_14749 = cljs.core.chunk_rest.call(null,inst_14744);var inst_14750 = cljs.core.count.call(null,inst_14748);var inst_14730 = inst_14749;var inst_14731 = inst_14748;var inst_14732 = inst_14750;var inst_14733 = 0;var state_14791__$1 = (function (){var statearr_14819 = state_14791;(statearr_14819[8] = inst_14733);
(statearr_14819[9] = inst_14732);
(statearr_14819[10] = inst_14731);
(statearr_14819[11] = inst_14730);
return statearr_14819;
})();var statearr_14820_14858 = state_14791__$1;(statearr_14820_14858[2] = null);
(statearr_14820_14858[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 17))
{var inst_14744 = (state_14791[15]);var inst_14753 = cljs.core.first.call(null,inst_14744);var inst_14754 = cljs.core.async.muxch_STAR_.call(null,inst_14753);var inst_14755 = cljs.core.async.close_BANG_.call(null,inst_14754);var inst_14756 = cljs.core.next.call(null,inst_14744);var inst_14730 = inst_14756;var inst_14731 = null;var inst_14732 = 0;var inst_14733 = 0;var state_14791__$1 = (function (){var statearr_14821 = state_14791;(statearr_14821[8] = inst_14733);
(statearr_14821[9] = inst_14732);
(statearr_14821[10] = inst_14731);
(statearr_14821[11] = inst_14730);
(statearr_14821[16] = inst_14755);
return statearr_14821;
})();var statearr_14822_14859 = state_14791__$1;(statearr_14822_14859[2] = null);
(statearr_14822_14859[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 18))
{var inst_14759 = (state_14791[2]);var state_14791__$1 = state_14791;var statearr_14823_14860 = state_14791__$1;(statearr_14823_14860[2] = inst_14759);
(statearr_14823_14860[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 19))
{var state_14791__$1 = state_14791;var statearr_14824_14861 = state_14791__$1;(statearr_14824_14861[2] = null);
(statearr_14824_14861[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 20))
{var state_14791__$1 = state_14791;var statearr_14825_14862 = state_14791__$1;(statearr_14825_14862[2] = null);
(statearr_14825_14862[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 21))
{var inst_14784 = (state_14791[2]);var state_14791__$1 = (function (){var statearr_14826 = state_14791;(statearr_14826[17] = inst_14784);
return statearr_14826;
})();var statearr_14827_14863 = state_14791__$1;(statearr_14827_14863[2] = null);
(statearr_14827_14863[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 22))
{var inst_14781 = (state_14791[2]);var state_14791__$1 = state_14791;var statearr_14828_14864 = state_14791__$1;(statearr_14828_14864[2] = inst_14781);
(statearr_14828_14864[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 23))
{var inst_14768 = (state_14791[12]);var inst_14772 = (state_14791[2]);var inst_14773 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14768);var state_14791__$1 = (function (){var statearr_14829 = state_14791;(statearr_14829[18] = inst_14772);
return statearr_14829;
})();var statearr_14830_14865 = state_14791__$1;(statearr_14830_14865[2] = inst_14773);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14791__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14792 === 24))
{var inst_14770 = (state_14791[13]);var inst_14720 = (state_14791[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14791,23,Object,null,22);var inst_14777 = cljs.core.async.muxch_STAR_.call(null,inst_14770);var state_14791__$1 = state_14791;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14791__$1,25,inst_14777,inst_14720);
} else
{if((state_val_14792 === 25))
{var inst_14779 = (state_14791[2]);var state_14791__$1 = state_14791;var statearr_14831_14866 = state_14791__$1;(statearr_14831_14866[2] = inst_14779);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14791__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14835[0] = state_machine__5507__auto__);
(statearr_14835[1] = 1);
return statearr_14835;
});
var state_machine__5507__auto____1 = (function (state_14791){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14791);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14836){if((e14836 instanceof Object))
{var ex__5510__auto__ = e14836;var statearr_14837_14867 = state_14791;(statearr_14837_14867[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14791);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14836;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14868 = state_14791;
state_14791 = G__14868;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14791){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14791);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14838 = f__5522__auto__.call(null);(statearr_14838[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14839);
return statearr_14838;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15005 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14975){var state_val_14976 = (state_14975[1]);if((state_val_14976 === 1))
{var state_14975__$1 = state_14975;var statearr_14977_15006 = state_14975__$1;(statearr_14977_15006[2] = null);
(statearr_14977_15006[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 2))
{var inst_14938 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_14939 = 0;var state_14975__$1 = (function (){var statearr_14978 = state_14975;(statearr_14978[7] = inst_14939);
(statearr_14978[8] = inst_14938);
return statearr_14978;
})();var statearr_14979_15007 = state_14975__$1;(statearr_14979_15007[2] = null);
(statearr_14979_15007[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 3))
{var inst_14973 = (state_14975[2]);var state_14975__$1 = state_14975;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14975__$1,inst_14973);
} else
{if((state_val_14976 === 4))
{var inst_14939 = (state_14975[7]);var inst_14941 = (inst_14939 < cnt);var state_14975__$1 = state_14975;if(cljs.core.truth_(inst_14941))
{var statearr_14980_15008 = state_14975__$1;(statearr_14980_15008[1] = 6);
} else
{var statearr_14981_15009 = state_14975__$1;(statearr_14981_15009[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 5))
{var inst_14959 = (state_14975[2]);var state_14975__$1 = (function (){var statearr_14982 = state_14975;(statearr_14982[9] = inst_14959);
return statearr_14982;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14975__$1,12,dchan);
} else
{if((state_val_14976 === 6))
{var state_14975__$1 = state_14975;var statearr_14983_15010 = state_14975__$1;(statearr_14983_15010[2] = null);
(statearr_14983_15010[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 7))
{var state_14975__$1 = state_14975;var statearr_14984_15011 = state_14975__$1;(statearr_14984_15011[2] = null);
(statearr_14984_15011[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 8))
{var inst_14957 = (state_14975[2]);var state_14975__$1 = state_14975;var statearr_14985_15012 = state_14975__$1;(statearr_14985_15012[2] = inst_14957);
(statearr_14985_15012[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 9))
{var inst_14939 = (state_14975[7]);var inst_14952 = (state_14975[2]);var inst_14953 = (inst_14939 + 1);var inst_14939__$1 = inst_14953;var state_14975__$1 = (function (){var statearr_14986 = state_14975;(statearr_14986[7] = inst_14939__$1);
(statearr_14986[10] = inst_14952);
return statearr_14986;
})();var statearr_14987_15013 = state_14975__$1;(statearr_14987_15013[2] = null);
(statearr_14987_15013[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 10))
{var inst_14943 = (state_14975[2]);var inst_14944 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_14975__$1 = (function (){var statearr_14988 = state_14975;(statearr_14988[11] = inst_14943);
return statearr_14988;
})();var statearr_14989_15014 = state_14975__$1;(statearr_14989_15014[2] = inst_14944);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14975__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 11))
{var inst_14939 = (state_14975[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14975,10,Object,null,9);var inst_14948 = chs__$1.call(null,inst_14939);var inst_14949 = done.call(null,inst_14939);var inst_14950 = cljs.core.async.take_BANG_.call(null,inst_14948,inst_14949);var state_14975__$1 = state_14975;var statearr_14990_15015 = state_14975__$1;(statearr_14990_15015[2] = inst_14950);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14975__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 12))
{var inst_14961 = (state_14975[12]);var inst_14961__$1 = (state_14975[2]);var inst_14962 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_14961__$1);var state_14975__$1 = (function (){var statearr_14991 = state_14975;(statearr_14991[12] = inst_14961__$1);
return statearr_14991;
})();if(cljs.core.truth_(inst_14962))
{var statearr_14992_15016 = state_14975__$1;(statearr_14992_15016[1] = 13);
} else
{var statearr_14993_15017 = state_14975__$1;(statearr_14993_15017[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 13))
{var inst_14964 = cljs.core.async.close_BANG_.call(null,out);var state_14975__$1 = state_14975;var statearr_14994_15018 = state_14975__$1;(statearr_14994_15018[2] = inst_14964);
(statearr_14994_15018[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 14))
{var inst_14961 = (state_14975[12]);var inst_14966 = cljs.core.apply.call(null,f,inst_14961);var state_14975__$1 = state_14975;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14975__$1,16,out,inst_14966);
} else
{if((state_val_14976 === 15))
{var inst_14971 = (state_14975[2]);var state_14975__$1 = state_14975;var statearr_14995_15019 = state_14975__$1;(statearr_14995_15019[2] = inst_14971);
(statearr_14995_15019[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14976 === 16))
{var inst_14968 = (state_14975[2]);var state_14975__$1 = (function (){var statearr_14996 = state_14975;(statearr_14996[13] = inst_14968);
return statearr_14996;
})();var statearr_14997_15020 = state_14975__$1;(statearr_14997_15020[2] = null);
(statearr_14997_15020[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15001 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15001[0] = state_machine__5507__auto__);
(statearr_15001[1] = 1);
return statearr_15001;
});
var state_machine__5507__auto____1 = (function (state_14975){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14975);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15002){if((e15002 instanceof Object))
{var ex__5510__auto__ = e15002;var statearr_15003_15021 = state_14975;(statearr_15003_15021[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14975);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15002;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15022 = state_14975;
state_14975 = G__15022;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14975){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14975);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15004 = f__5522__auto__.call(null);(statearr_15004[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15005);
return statearr_15004;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15106){var state_val_15107 = (state_15106[1]);if((state_val_15107 === 1))
{var inst_15077 = cljs.core.vec.call(null,chs);var inst_15078 = inst_15077;var state_15106__$1 = (function (){var statearr_15108 = state_15106;(statearr_15108[7] = inst_15078);
return statearr_15108;
})();var statearr_15109_15131 = state_15106__$1;(statearr_15109_15131[2] = null);
(statearr_15109_15131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15107 === 2))
{var inst_15078 = (state_15106[7]);var inst_15080 = cljs.core.count.call(null,inst_15078);var inst_15081 = (inst_15080 > 0);var state_15106__$1 = state_15106;if(cljs.core.truth_(inst_15081))
{var statearr_15110_15132 = state_15106__$1;(statearr_15110_15132[1] = 4);
} else
{var statearr_15111_15133 = state_15106__$1;(statearr_15111_15133[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15107 === 3))
{var inst_15104 = (state_15106[2]);var state_15106__$1 = state_15106;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15106__$1,inst_15104);
} else
{if((state_val_15107 === 4))
{var inst_15078 = (state_15106[7]);var state_15106__$1 = state_15106;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15106__$1,7,inst_15078);
} else
{if((state_val_15107 === 5))
{var inst_15100 = cljs.core.async.close_BANG_.call(null,out);var state_15106__$1 = state_15106;var statearr_15112_15134 = state_15106__$1;(statearr_15112_15134[2] = inst_15100);
(statearr_15112_15134[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15107 === 6))
{var inst_15102 = (state_15106[2]);var state_15106__$1 = state_15106;var statearr_15113_15135 = state_15106__$1;(statearr_15113_15135[2] = inst_15102);
(statearr_15113_15135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15107 === 7))
{var inst_15086 = (state_15106[8]);var inst_15085 = (state_15106[9]);var inst_15085__$1 = (state_15106[2]);var inst_15086__$1 = cljs.core.nth.call(null,inst_15085__$1,0,null);var inst_15087 = cljs.core.nth.call(null,inst_15085__$1,1,null);var inst_15088 = (inst_15086__$1 == null);var state_15106__$1 = (function (){var statearr_15114 = state_15106;(statearr_15114[8] = inst_15086__$1);
(statearr_15114[9] = inst_15085__$1);
(statearr_15114[10] = inst_15087);
return statearr_15114;
})();if(cljs.core.truth_(inst_15088))
{var statearr_15115_15136 = state_15106__$1;(statearr_15115_15136[1] = 8);
} else
{var statearr_15116_15137 = state_15106__$1;(statearr_15116_15137[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15107 === 8))
{var inst_15078 = (state_15106[7]);var inst_15086 = (state_15106[8]);var inst_15085 = (state_15106[9]);var inst_15087 = (state_15106[10]);var inst_15090 = (function (){var c = inst_15087;var v = inst_15086;var vec__15083 = inst_15085;var cs = inst_15078;return ((function (c,v,vec__15083,cs,inst_15078,inst_15086,inst_15085,inst_15087,state_val_15107){
return (function (p1__15023_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15023_SHARP_);
});
;})(c,v,vec__15083,cs,inst_15078,inst_15086,inst_15085,inst_15087,state_val_15107))
})();var inst_15091 = cljs.core.filterv.call(null,inst_15090,inst_15078);var inst_15078__$1 = inst_15091;var state_15106__$1 = (function (){var statearr_15117 = state_15106;(statearr_15117[7] = inst_15078__$1);
return statearr_15117;
})();var statearr_15118_15138 = state_15106__$1;(statearr_15118_15138[2] = null);
(statearr_15118_15138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15107 === 9))
{var inst_15086 = (state_15106[8]);var state_15106__$1 = state_15106;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15106__$1,11,out,inst_15086);
} else
{if((state_val_15107 === 10))
{var inst_15098 = (state_15106[2]);var state_15106__$1 = state_15106;var statearr_15120_15139 = state_15106__$1;(statearr_15120_15139[2] = inst_15098);
(statearr_15120_15139[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15107 === 11))
{var inst_15078 = (state_15106[7]);var inst_15095 = (state_15106[2]);var tmp15119 = inst_15078;var inst_15078__$1 = tmp15119;var state_15106__$1 = (function (){var statearr_15121 = state_15106;(statearr_15121[7] = inst_15078__$1);
(statearr_15121[11] = inst_15095);
return statearr_15121;
})();var statearr_15122_15140 = state_15106__$1;(statearr_15122_15140[2] = null);
(statearr_15122_15140[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15126 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15126[0] = state_machine__5507__auto__);
(statearr_15126[1] = 1);
return statearr_15126;
});
var state_machine__5507__auto____1 = (function (state_15106){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15106);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15127){if((e15127 instanceof Object))
{var ex__5510__auto__ = e15127;var statearr_15128_15141 = state_15106;(statearr_15128_15141[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15106);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15142 = state_15106;
state_15106 = G__15142;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15106){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15129 = f__5522__auto__.call(null);(statearr_15129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15130);
return statearr_15129;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15235 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15212){var state_val_15213 = (state_15212[1]);if((state_val_15213 === 1))
{var inst_15189 = 0;var state_15212__$1 = (function (){var statearr_15214 = state_15212;(statearr_15214[7] = inst_15189);
return statearr_15214;
})();var statearr_15215_15236 = state_15212__$1;(statearr_15215_15236[2] = null);
(statearr_15215_15236[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15213 === 2))
{var inst_15189 = (state_15212[7]);var inst_15191 = (inst_15189 < n);var state_15212__$1 = state_15212;if(cljs.core.truth_(inst_15191))
{var statearr_15216_15237 = state_15212__$1;(statearr_15216_15237[1] = 4);
} else
{var statearr_15217_15238 = state_15212__$1;(statearr_15217_15238[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15213 === 3))
{var inst_15209 = (state_15212[2]);var inst_15210 = cljs.core.async.close_BANG_.call(null,out);var state_15212__$1 = (function (){var statearr_15218 = state_15212;(statearr_15218[8] = inst_15209);
return statearr_15218;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15212__$1,inst_15210);
} else
{if((state_val_15213 === 4))
{var state_15212__$1 = state_15212;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15212__$1,7,ch);
} else
{if((state_val_15213 === 5))
{var state_15212__$1 = state_15212;var statearr_15219_15239 = state_15212__$1;(statearr_15219_15239[2] = null);
(statearr_15219_15239[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15213 === 6))
{var inst_15207 = (state_15212[2]);var state_15212__$1 = state_15212;var statearr_15220_15240 = state_15212__$1;(statearr_15220_15240[2] = inst_15207);
(statearr_15220_15240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15213 === 7))
{var inst_15194 = (state_15212[9]);var inst_15194__$1 = (state_15212[2]);var inst_15195 = (inst_15194__$1 == null);var inst_15196 = cljs.core.not.call(null,inst_15195);var state_15212__$1 = (function (){var statearr_15221 = state_15212;(statearr_15221[9] = inst_15194__$1);
return statearr_15221;
})();if(inst_15196)
{var statearr_15222_15241 = state_15212__$1;(statearr_15222_15241[1] = 8);
} else
{var statearr_15223_15242 = state_15212__$1;(statearr_15223_15242[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15213 === 8))
{var inst_15194 = (state_15212[9]);var state_15212__$1 = state_15212;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15212__$1,11,out,inst_15194);
} else
{if((state_val_15213 === 9))
{var state_15212__$1 = state_15212;var statearr_15224_15243 = state_15212__$1;(statearr_15224_15243[2] = null);
(statearr_15224_15243[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15213 === 10))
{var inst_15204 = (state_15212[2]);var state_15212__$1 = state_15212;var statearr_15225_15244 = state_15212__$1;(statearr_15225_15244[2] = inst_15204);
(statearr_15225_15244[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15213 === 11))
{var inst_15189 = (state_15212[7]);var inst_15199 = (state_15212[2]);var inst_15200 = (inst_15189 + 1);var inst_15189__$1 = inst_15200;var state_15212__$1 = (function (){var statearr_15226 = state_15212;(statearr_15226[7] = inst_15189__$1);
(statearr_15226[10] = inst_15199);
return statearr_15226;
})();var statearr_15227_15245 = state_15212__$1;(statearr_15227_15245[2] = null);
(statearr_15227_15245[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15231 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15231[0] = state_machine__5507__auto__);
(statearr_15231[1] = 1);
return statearr_15231;
});
var state_machine__5507__auto____1 = (function (state_15212){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15212);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15232){if((e15232 instanceof Object))
{var ex__5510__auto__ = e15232;var statearr_15233_15246 = state_15212;(statearr_15233_15246[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15212);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15232;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15247 = state_15212;
state_15212 = G__15247;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15212){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15212);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15234 = f__5522__auto__.call(null);(statearr_15234[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15235);
return statearr_15234;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15344 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15319){var state_val_15320 = (state_15319[1]);if((state_val_15320 === 1))
{var inst_15296 = null;var state_15319__$1 = (function (){var statearr_15321 = state_15319;(statearr_15321[7] = inst_15296);
return statearr_15321;
})();var statearr_15322_15345 = state_15319__$1;(statearr_15322_15345[2] = null);
(statearr_15322_15345[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 2))
{var state_15319__$1 = state_15319;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15319__$1,4,ch);
} else
{if((state_val_15320 === 3))
{var inst_15316 = (state_15319[2]);var inst_15317 = cljs.core.async.close_BANG_.call(null,out);var state_15319__$1 = (function (){var statearr_15323 = state_15319;(statearr_15323[8] = inst_15316);
return statearr_15323;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15319__$1,inst_15317);
} else
{if((state_val_15320 === 4))
{var inst_15299 = (state_15319[9]);var inst_15299__$1 = (state_15319[2]);var inst_15300 = (inst_15299__$1 == null);var inst_15301 = cljs.core.not.call(null,inst_15300);var state_15319__$1 = (function (){var statearr_15324 = state_15319;(statearr_15324[9] = inst_15299__$1);
return statearr_15324;
})();if(inst_15301)
{var statearr_15325_15346 = state_15319__$1;(statearr_15325_15346[1] = 5);
} else
{var statearr_15326_15347 = state_15319__$1;(statearr_15326_15347[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 5))
{var inst_15299 = (state_15319[9]);var inst_15296 = (state_15319[7]);var inst_15303 = cljs.core._EQ_.call(null,inst_15299,inst_15296);var state_15319__$1 = state_15319;if(inst_15303)
{var statearr_15327_15348 = state_15319__$1;(statearr_15327_15348[1] = 8);
} else
{var statearr_15328_15349 = state_15319__$1;(statearr_15328_15349[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 6))
{var state_15319__$1 = state_15319;var statearr_15330_15350 = state_15319__$1;(statearr_15330_15350[2] = null);
(statearr_15330_15350[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 7))
{var inst_15314 = (state_15319[2]);var state_15319__$1 = state_15319;var statearr_15331_15351 = state_15319__$1;(statearr_15331_15351[2] = inst_15314);
(statearr_15331_15351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 8))
{var inst_15296 = (state_15319[7]);var tmp15329 = inst_15296;var inst_15296__$1 = tmp15329;var state_15319__$1 = (function (){var statearr_15332 = state_15319;(statearr_15332[7] = inst_15296__$1);
return statearr_15332;
})();var statearr_15333_15352 = state_15319__$1;(statearr_15333_15352[2] = null);
(statearr_15333_15352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 9))
{var inst_15299 = (state_15319[9]);var state_15319__$1 = state_15319;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15319__$1,11,out,inst_15299);
} else
{if((state_val_15320 === 10))
{var inst_15311 = (state_15319[2]);var state_15319__$1 = state_15319;var statearr_15334_15353 = state_15319__$1;(statearr_15334_15353[2] = inst_15311);
(statearr_15334_15353[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15320 === 11))
{var inst_15299 = (state_15319[9]);var inst_15308 = (state_15319[2]);var inst_15296 = inst_15299;var state_15319__$1 = (function (){var statearr_15335 = state_15319;(statearr_15335[7] = inst_15296);
(statearr_15335[10] = inst_15308);
return statearr_15335;
})();var statearr_15336_15354 = state_15319__$1;(statearr_15336_15354[2] = null);
(statearr_15336_15354[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15340 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15340[0] = state_machine__5507__auto__);
(statearr_15340[1] = 1);
return statearr_15340;
});
var state_machine__5507__auto____1 = (function (state_15319){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15319);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15341){if((e15341 instanceof Object))
{var ex__5510__auto__ = e15341;var statearr_15342_15355 = state_15319;(statearr_15342_15355[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15319);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15341;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15356 = state_15319;
state_15319 = G__15356;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15319){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15319);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15343 = f__5522__auto__.call(null);(statearr_15343[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15344);
return statearr_15343;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15491 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15461){var state_val_15462 = (state_15461[1]);if((state_val_15462 === 1))
{var inst_15424 = (new Array(n));var inst_15425 = inst_15424;var inst_15426 = 0;var state_15461__$1 = (function (){var statearr_15463 = state_15461;(statearr_15463[7] = inst_15426);
(statearr_15463[8] = inst_15425);
return statearr_15463;
})();var statearr_15464_15492 = state_15461__$1;(statearr_15464_15492[2] = null);
(statearr_15464_15492[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 2))
{var state_15461__$1 = state_15461;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15461__$1,4,ch);
} else
{if((state_val_15462 === 3))
{var inst_15459 = (state_15461[2]);var state_15461__$1 = state_15461;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15461__$1,inst_15459);
} else
{if((state_val_15462 === 4))
{var inst_15429 = (state_15461[9]);var inst_15429__$1 = (state_15461[2]);var inst_15430 = (inst_15429__$1 == null);var inst_15431 = cljs.core.not.call(null,inst_15430);var state_15461__$1 = (function (){var statearr_15465 = state_15461;(statearr_15465[9] = inst_15429__$1);
return statearr_15465;
})();if(inst_15431)
{var statearr_15466_15493 = state_15461__$1;(statearr_15466_15493[1] = 5);
} else
{var statearr_15467_15494 = state_15461__$1;(statearr_15467_15494[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 5))
{var inst_15426 = (state_15461[7]);var inst_15425 = (state_15461[8]);var inst_15429 = (state_15461[9]);var inst_15434 = (state_15461[10]);var inst_15433 = (inst_15425[inst_15426] = inst_15429);var inst_15434__$1 = (inst_15426 + 1);var inst_15435 = (inst_15434__$1 < n);var state_15461__$1 = (function (){var statearr_15468 = state_15461;(statearr_15468[11] = inst_15433);
(statearr_15468[10] = inst_15434__$1);
return statearr_15468;
})();if(cljs.core.truth_(inst_15435))
{var statearr_15469_15495 = state_15461__$1;(statearr_15469_15495[1] = 8);
} else
{var statearr_15470_15496 = state_15461__$1;(statearr_15470_15496[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 6))
{var inst_15426 = (state_15461[7]);var inst_15447 = (inst_15426 > 0);var state_15461__$1 = state_15461;if(cljs.core.truth_(inst_15447))
{var statearr_15472_15497 = state_15461__$1;(statearr_15472_15497[1] = 12);
} else
{var statearr_15473_15498 = state_15461__$1;(statearr_15473_15498[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 7))
{var inst_15457 = (state_15461[2]);var state_15461__$1 = state_15461;var statearr_15474_15499 = state_15461__$1;(statearr_15474_15499[2] = inst_15457);
(statearr_15474_15499[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 8))
{var inst_15425 = (state_15461[8]);var inst_15434 = (state_15461[10]);var tmp15471 = inst_15425;var inst_15425__$1 = tmp15471;var inst_15426 = inst_15434;var state_15461__$1 = (function (){var statearr_15475 = state_15461;(statearr_15475[7] = inst_15426);
(statearr_15475[8] = inst_15425__$1);
return statearr_15475;
})();var statearr_15476_15500 = state_15461__$1;(statearr_15476_15500[2] = null);
(statearr_15476_15500[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 9))
{var inst_15425 = (state_15461[8]);var inst_15439 = cljs.core.vec.call(null,inst_15425);var state_15461__$1 = state_15461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15461__$1,11,out,inst_15439);
} else
{if((state_val_15462 === 10))
{var inst_15445 = (state_15461[2]);var state_15461__$1 = state_15461;var statearr_15477_15501 = state_15461__$1;(statearr_15477_15501[2] = inst_15445);
(statearr_15477_15501[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 11))
{var inst_15441 = (state_15461[2]);var inst_15442 = (new Array(n));var inst_15425 = inst_15442;var inst_15426 = 0;var state_15461__$1 = (function (){var statearr_15478 = state_15461;(statearr_15478[7] = inst_15426);
(statearr_15478[8] = inst_15425);
(statearr_15478[12] = inst_15441);
return statearr_15478;
})();var statearr_15479_15502 = state_15461__$1;(statearr_15479_15502[2] = null);
(statearr_15479_15502[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 12))
{var inst_15425 = (state_15461[8]);var inst_15449 = cljs.core.vec.call(null,inst_15425);var state_15461__$1 = state_15461;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15461__$1,15,out,inst_15449);
} else
{if((state_val_15462 === 13))
{var state_15461__$1 = state_15461;var statearr_15480_15503 = state_15461__$1;(statearr_15480_15503[2] = null);
(statearr_15480_15503[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 14))
{var inst_15454 = (state_15461[2]);var inst_15455 = cljs.core.async.close_BANG_.call(null,out);var state_15461__$1 = (function (){var statearr_15481 = state_15461;(statearr_15481[13] = inst_15454);
return statearr_15481;
})();var statearr_15482_15504 = state_15461__$1;(statearr_15482_15504[2] = inst_15455);
(statearr_15482_15504[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15462 === 15))
{var inst_15451 = (state_15461[2]);var state_15461__$1 = state_15461;var statearr_15483_15505 = state_15461__$1;(statearr_15483_15505[2] = inst_15451);
(statearr_15483_15505[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15487 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15487[0] = state_machine__5507__auto__);
(statearr_15487[1] = 1);
return statearr_15487;
});
var state_machine__5507__auto____1 = (function (state_15461){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15461);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15488){if((e15488 instanceof Object))
{var ex__5510__auto__ = e15488;var statearr_15489_15506 = state_15461;(statearr_15489_15506[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15461);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15488;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15507 = state_15461;
state_15461 = G__15507;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15461){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15490 = f__5522__auto__.call(null);(statearr_15490[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15491);
return statearr_15490;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15650 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15620){var state_val_15621 = (state_15620[1]);if((state_val_15621 === 1))
{var inst_15579 = [];var inst_15580 = inst_15579;var inst_15581 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15620__$1 = (function (){var statearr_15622 = state_15620;(statearr_15622[7] = inst_15581);
(statearr_15622[8] = inst_15580);
return statearr_15622;
})();var statearr_15623_15651 = state_15620__$1;(statearr_15623_15651[2] = null);
(statearr_15623_15651[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 2))
{var state_15620__$1 = state_15620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15620__$1,4,ch);
} else
{if((state_val_15621 === 3))
{var inst_15618 = (state_15620[2]);var state_15620__$1 = state_15620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15620__$1,inst_15618);
} else
{if((state_val_15621 === 4))
{var inst_15584 = (state_15620[9]);var inst_15584__$1 = (state_15620[2]);var inst_15585 = (inst_15584__$1 == null);var inst_15586 = cljs.core.not.call(null,inst_15585);var state_15620__$1 = (function (){var statearr_15624 = state_15620;(statearr_15624[9] = inst_15584__$1);
return statearr_15624;
})();if(inst_15586)
{var statearr_15625_15652 = state_15620__$1;(statearr_15625_15652[1] = 5);
} else
{var statearr_15626_15653 = state_15620__$1;(statearr_15626_15653[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 5))
{var inst_15588 = (state_15620[10]);var inst_15584 = (state_15620[9]);var inst_15581 = (state_15620[7]);var inst_15588__$1 = f.call(null,inst_15584);var inst_15589 = cljs.core._EQ_.call(null,inst_15588__$1,inst_15581);var inst_15590 = cljs.core.keyword_identical_QMARK_.call(null,inst_15581,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15591 = (inst_15589) || (inst_15590);var state_15620__$1 = (function (){var statearr_15627 = state_15620;(statearr_15627[10] = inst_15588__$1);
return statearr_15627;
})();if(cljs.core.truth_(inst_15591))
{var statearr_15628_15654 = state_15620__$1;(statearr_15628_15654[1] = 8);
} else
{var statearr_15629_15655 = state_15620__$1;(statearr_15629_15655[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 6))
{var inst_15580 = (state_15620[8]);var inst_15605 = inst_15580.length;var inst_15606 = (inst_15605 > 0);var state_15620__$1 = state_15620;if(cljs.core.truth_(inst_15606))
{var statearr_15631_15656 = state_15620__$1;(statearr_15631_15656[1] = 12);
} else
{var statearr_15632_15657 = state_15620__$1;(statearr_15632_15657[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 7))
{var inst_15616 = (state_15620[2]);var state_15620__$1 = state_15620;var statearr_15633_15658 = state_15620__$1;(statearr_15633_15658[2] = inst_15616);
(statearr_15633_15658[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 8))
{var inst_15588 = (state_15620[10]);var inst_15584 = (state_15620[9]);var inst_15580 = (state_15620[8]);var inst_15593 = inst_15580.push(inst_15584);var tmp15630 = inst_15580;var inst_15580__$1 = tmp15630;var inst_15581 = inst_15588;var state_15620__$1 = (function (){var statearr_15634 = state_15620;(statearr_15634[7] = inst_15581);
(statearr_15634[8] = inst_15580__$1);
(statearr_15634[11] = inst_15593);
return statearr_15634;
})();var statearr_15635_15659 = state_15620__$1;(statearr_15635_15659[2] = null);
(statearr_15635_15659[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 9))
{var inst_15580 = (state_15620[8]);var inst_15596 = cljs.core.vec.call(null,inst_15580);var state_15620__$1 = state_15620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15620__$1,11,out,inst_15596);
} else
{if((state_val_15621 === 10))
{var inst_15603 = (state_15620[2]);var state_15620__$1 = state_15620;var statearr_15636_15660 = state_15620__$1;(statearr_15636_15660[2] = inst_15603);
(statearr_15636_15660[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 11))
{var inst_15588 = (state_15620[10]);var inst_15584 = (state_15620[9]);var inst_15598 = (state_15620[2]);var inst_15599 = [];var inst_15600 = inst_15599.push(inst_15584);var inst_15580 = inst_15599;var inst_15581 = inst_15588;var state_15620__$1 = (function (){var statearr_15637 = state_15620;(statearr_15637[7] = inst_15581);
(statearr_15637[8] = inst_15580);
(statearr_15637[12] = inst_15598);
(statearr_15637[13] = inst_15600);
return statearr_15637;
})();var statearr_15638_15661 = state_15620__$1;(statearr_15638_15661[2] = null);
(statearr_15638_15661[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 12))
{var inst_15580 = (state_15620[8]);var inst_15608 = cljs.core.vec.call(null,inst_15580);var state_15620__$1 = state_15620;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15620__$1,15,out,inst_15608);
} else
{if((state_val_15621 === 13))
{var state_15620__$1 = state_15620;var statearr_15639_15662 = state_15620__$1;(statearr_15639_15662[2] = null);
(statearr_15639_15662[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 14))
{var inst_15613 = (state_15620[2]);var inst_15614 = cljs.core.async.close_BANG_.call(null,out);var state_15620__$1 = (function (){var statearr_15640 = state_15620;(statearr_15640[14] = inst_15613);
return statearr_15640;
})();var statearr_15641_15663 = state_15620__$1;(statearr_15641_15663[2] = inst_15614);
(statearr_15641_15663[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15621 === 15))
{var inst_15610 = (state_15620[2]);var state_15620__$1 = state_15620;var statearr_15642_15664 = state_15620__$1;(statearr_15642_15664[2] = inst_15610);
(statearr_15642_15664[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15646[0] = state_machine__5507__auto__);
(statearr_15646[1] = 1);
return statearr_15646;
});
var state_machine__5507__auto____1 = (function (state_15620){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15620);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15647){if((e15647 instanceof Object))
{var ex__5510__auto__ = e15647;var statearr_15648_15665 = state_15620;(statearr_15648_15665[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15647;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15666 = state_15620;
state_15620 = G__15666;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15620){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15649 = f__5522__auto__.call(null);(statearr_15649[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15650);
return statearr_15649;
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