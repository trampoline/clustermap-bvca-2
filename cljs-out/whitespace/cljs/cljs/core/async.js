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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33064 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33064 = (function (f,fn_handler,meta33065){
this.f = f;
this.fn_handler = fn_handler;
this.meta33065 = meta33065;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33064.cljs$lang$type = true;
cljs.core.async.t33064.cljs$lang$ctorStr = "cljs.core.async/t33064";
cljs.core.async.t33064.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33064");
});
cljs.core.async.t33064.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33066){var self__ = this;
var _33066__$1 = this;return self__.meta33065;
});
cljs.core.async.t33064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33066,meta33065__$1){var self__ = this;
var _33066__$1 = this;return (new cljs.core.async.t33064(self__.f,self__.fn_handler,meta33065__$1));
});
cljs.core.async.__GT_t33064 = (function __GT_t33064(f__$1,fn_handler__$1,meta33065){return (new cljs.core.async.t33064(f__$1,fn_handler__$1,meta33065));
});
}
return (new cljs.core.async.t33064(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33068 = buff;if(G__33068)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33068.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33068.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33068);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33068);
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
{var val_33069 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33069);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33069);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33070 = n;var x_33071 = 0;while(true){
if((x_33071 < n__4248__auto___33070))
{(a[x_33071] = 0);
{
var G__33072 = (x_33071 + 1);
x_33071 = G__33072;
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
var G__33073 = (i + 1);
i = G__33073;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33077 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33077 = (function (flag,alt_flag,meta33078){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33078 = meta33078;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33077.cljs$lang$type = true;
cljs.core.async.t33077.cljs$lang$ctorStr = "cljs.core.async/t33077";
cljs.core.async.t33077.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33077");
});
cljs.core.async.t33077.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33077.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33077.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33077.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33079){var self__ = this;
var _33079__$1 = this;return self__.meta33078;
});
cljs.core.async.t33077.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33079,meta33078__$1){var self__ = this;
var _33079__$1 = this;return (new cljs.core.async.t33077(self__.flag,self__.alt_flag,meta33078__$1));
});
cljs.core.async.__GT_t33077 = (function __GT_t33077(flag__$1,alt_flag__$1,meta33078){return (new cljs.core.async.t33077(flag__$1,alt_flag__$1,meta33078));
});
}
return (new cljs.core.async.t33077(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33083 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33083 = (function (cb,flag,alt_handler,meta33084){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33084 = meta33084;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33083.cljs$lang$type = true;
cljs.core.async.t33083.cljs$lang$ctorStr = "cljs.core.async/t33083";
cljs.core.async.t33083.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33083");
});
cljs.core.async.t33083.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33083.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33083.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33083.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33085){var self__ = this;
var _33085__$1 = this;return self__.meta33084;
});
cljs.core.async.t33083.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33085,meta33084__$1){var self__ = this;
var _33085__$1 = this;return (new cljs.core.async.t33083(self__.cb,self__.flag,self__.alt_handler,meta33084__$1));
});
cljs.core.async.__GT_t33083 = (function __GT_t33083(cb__$1,flag__$1,alt_handler__$1,meta33084){return (new cljs.core.async.t33083(cb__$1,flag__$1,alt_handler__$1,meta33084));
});
}
return (new cljs.core.async.t33083(cb,flag,alt_handler,null));
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
return (function (p1__33086_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33086_SHARP_,port], null));
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
var G__33087 = (i + 1);
i = G__33087;
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
var alts_BANG___delegate = function (ports,p__33088){var map__33090 = p__33088;var map__33090__$1 = ((cljs.core.seq_QMARK_.call(null,map__33090))?cljs.core.apply.call(null,cljs.core.hash_map,map__33090):map__33090);var opts = map__33090__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33088 = null;if (arguments.length > 1) {
  p__33088 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33088);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33091){
var ports = cljs.core.first(arglist__33091);
var p__33088 = cljs.core.rest(arglist__33091);
return alts_BANG___delegate(ports,p__33088);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33099 = (function (ch,f,map_LT_,meta33100){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33100 = meta33100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33099.cljs$lang$type = true;
cljs.core.async.t33099.cljs$lang$ctorStr = "cljs.core.async/t33099";
cljs.core.async.t33099.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33099");
});
cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33102 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33102 = (function (fn1,_,meta33100,ch,f,map_LT_,meta33103){
this.fn1 = fn1;
this._ = _;
this.meta33100 = meta33100;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33103 = meta33103;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33102.cljs$lang$type = true;
cljs.core.async.t33102.cljs$lang$ctorStr = "cljs.core.async/t33102";
cljs.core.async.t33102.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33102");
});
cljs.core.async.t33102.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33102.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33092_SHARP_){return f1.call(null,(((p1__33092_SHARP_ == null))?null:self__.f.call(null,p1__33092_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33104){var self__ = this;
var _33104__$1 = this;return self__.meta33103;
});
cljs.core.async.t33102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33104,meta33103__$1){var self__ = this;
var _33104__$1 = this;return (new cljs.core.async.t33102(self__.fn1,self__._,self__.meta33100,self__.ch,self__.f,self__.map_LT_,meta33103__$1));
});
cljs.core.async.__GT_t33102 = (function __GT_t33102(fn1__$1,___$2,meta33100__$1,ch__$2,f__$2,map_LT___$2,meta33103){return (new cljs.core.async.t33102(fn1__$1,___$2,meta33100__$1,ch__$2,f__$2,map_LT___$2,meta33103));
});
}
return (new cljs.core.async.t33102(fn1,___$1,self__.meta33100,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33099.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33099.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33101){var self__ = this;
var _33101__$1 = this;return self__.meta33100;
});
cljs.core.async.t33099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33101,meta33100__$1){var self__ = this;
var _33101__$1 = this;return (new cljs.core.async.t33099(self__.ch,self__.f,self__.map_LT_,meta33100__$1));
});
cljs.core.async.__GT_t33099 = (function __GT_t33099(ch__$1,f__$1,map_LT___$1,meta33100){return (new cljs.core.async.t33099(ch__$1,f__$1,map_LT___$1,meta33100));
});
}
return (new cljs.core.async.t33099(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33108 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33108 = (function (ch,f,map_GT_,meta33109){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33109 = meta33109;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33108.cljs$lang$type = true;
cljs.core.async.t33108.cljs$lang$ctorStr = "cljs.core.async/t33108";
cljs.core.async.t33108.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33108");
});
cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33108.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33108.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33110){var self__ = this;
var _33110__$1 = this;return self__.meta33109;
});
cljs.core.async.t33108.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33110,meta33109__$1){var self__ = this;
var _33110__$1 = this;return (new cljs.core.async.t33108(self__.ch,self__.f,self__.map_GT_,meta33109__$1));
});
cljs.core.async.__GT_t33108 = (function __GT_t33108(ch__$1,f__$1,map_GT___$1,meta33109){return (new cljs.core.async.t33108(ch__$1,f__$1,map_GT___$1,meta33109));
});
}
return (new cljs.core.async.t33108(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33114 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33114 = (function (ch,p,filter_GT_,meta33115){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33115 = meta33115;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33114.cljs$lang$type = true;
cljs.core.async.t33114.cljs$lang$ctorStr = "cljs.core.async/t33114";
cljs.core.async.t33114.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33114");
});
cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33114.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33116){var self__ = this;
var _33116__$1 = this;return self__.meta33115;
});
cljs.core.async.t33114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33116,meta33115__$1){var self__ = this;
var _33116__$1 = this;return (new cljs.core.async.t33114(self__.ch,self__.p,self__.filter_GT_,meta33115__$1));
});
cljs.core.async.__GT_t33114 = (function __GT_t33114(ch__$1,p__$1,filter_GT___$1,meta33115){return (new cljs.core.async.t33114(ch__$1,p__$1,filter_GT___$1,meta33115));
});
}
return (new cljs.core.async.t33114(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33199 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33178){var state_val_33179 = (state_33178[1]);if((state_val_33179 === 1))
{var state_33178__$1 = state_33178;var statearr_33180_33200 = state_33178__$1;(statearr_33180_33200[2] = null);
(statearr_33180_33200[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33179 === 2))
{var state_33178__$1 = state_33178;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33178__$1,4,ch);
} else
{if((state_val_33179 === 3))
{var inst_33176 = (state_33178[2]);var state_33178__$1 = state_33178;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33178__$1,inst_33176);
} else
{if((state_val_33179 === 4))
{var inst_33160 = (state_33178[7]);var inst_33160__$1 = (state_33178[2]);var inst_33161 = (inst_33160__$1 == null);var state_33178__$1 = (function (){var statearr_33181 = state_33178;(statearr_33181[7] = inst_33160__$1);
return statearr_33181;
})();if(cljs.core.truth_(inst_33161))
{var statearr_33182_33201 = state_33178__$1;(statearr_33182_33201[1] = 5);
} else
{var statearr_33183_33202 = state_33178__$1;(statearr_33183_33202[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33179 === 5))
{var inst_33163 = cljs.core.async.close_BANG_.call(null,out);var state_33178__$1 = state_33178;var statearr_33184_33203 = state_33178__$1;(statearr_33184_33203[2] = inst_33163);
(statearr_33184_33203[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33179 === 6))
{var inst_33160 = (state_33178[7]);var inst_33165 = p.call(null,inst_33160);var state_33178__$1 = state_33178;if(cljs.core.truth_(inst_33165))
{var statearr_33185_33204 = state_33178__$1;(statearr_33185_33204[1] = 8);
} else
{var statearr_33186_33205 = state_33178__$1;(statearr_33186_33205[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33179 === 7))
{var inst_33174 = (state_33178[2]);var state_33178__$1 = state_33178;var statearr_33187_33206 = state_33178__$1;(statearr_33187_33206[2] = inst_33174);
(statearr_33187_33206[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33179 === 8))
{var inst_33160 = (state_33178[7]);var state_33178__$1 = state_33178;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33178__$1,11,out,inst_33160);
} else
{if((state_val_33179 === 9))
{var state_33178__$1 = state_33178;var statearr_33188_33207 = state_33178__$1;(statearr_33188_33207[2] = null);
(statearr_33188_33207[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33179 === 10))
{var inst_33171 = (state_33178[2]);var state_33178__$1 = (function (){var statearr_33189 = state_33178;(statearr_33189[8] = inst_33171);
return statearr_33189;
})();var statearr_33190_33208 = state_33178__$1;(statearr_33190_33208[2] = null);
(statearr_33190_33208[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33179 === 11))
{var inst_33168 = (state_33178[2]);var state_33178__$1 = state_33178;var statearr_33191_33209 = state_33178__$1;(statearr_33191_33209[2] = inst_33168);
(statearr_33191_33209[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_33195 = [null,null,null,null,null,null,null,null,null];(statearr_33195[0] = state_machine__5507__auto__);
(statearr_33195[1] = 1);
return statearr_33195;
});
var state_machine__5507__auto____1 = (function (state_33178){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33178);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33196){if((e33196 instanceof Object))
{var ex__5510__auto__ = e33196;var statearr_33197_33210 = state_33178;(statearr_33197_33210[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33178);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33196;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33211 = state_33178;
state_33178 = G__33211;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33178){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33198 = f__5522__auto__.call(null);(statearr_33198[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33199);
return statearr_33198;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33363){var state_val_33364 = (state_33363[1]);if((state_val_33364 === 1))
{var state_33363__$1 = state_33363;var statearr_33365_33402 = state_33363__$1;(statearr_33365_33402[2] = null);
(statearr_33365_33402[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 2))
{var state_33363__$1 = state_33363;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33363__$1,4,in$);
} else
{if((state_val_33364 === 3))
{var inst_33361 = (state_33363[2]);var state_33363__$1 = state_33363;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33363__$1,inst_33361);
} else
{if((state_val_33364 === 4))
{var inst_33309 = (state_33363[7]);var inst_33309__$1 = (state_33363[2]);var inst_33310 = (inst_33309__$1 == null);var state_33363__$1 = (function (){var statearr_33366 = state_33363;(statearr_33366[7] = inst_33309__$1);
return statearr_33366;
})();if(cljs.core.truth_(inst_33310))
{var statearr_33367_33403 = state_33363__$1;(statearr_33367_33403[1] = 5);
} else
{var statearr_33368_33404 = state_33363__$1;(statearr_33368_33404[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 5))
{var inst_33312 = cljs.core.async.close_BANG_.call(null,out);var state_33363__$1 = state_33363;var statearr_33369_33405 = state_33363__$1;(statearr_33369_33405[2] = inst_33312);
(statearr_33369_33405[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 6))
{var inst_33309 = (state_33363[7]);var inst_33314 = f.call(null,inst_33309);var inst_33319 = cljs.core.seq.call(null,inst_33314);var inst_33320 = inst_33319;var inst_33321 = null;var inst_33322 = 0;var inst_33323 = 0;var state_33363__$1 = (function (){var statearr_33370 = state_33363;(statearr_33370[8] = inst_33323);
(statearr_33370[9] = inst_33322);
(statearr_33370[10] = inst_33321);
(statearr_33370[11] = inst_33320);
return statearr_33370;
})();var statearr_33371_33406 = state_33363__$1;(statearr_33371_33406[2] = null);
(statearr_33371_33406[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 7))
{var inst_33359 = (state_33363[2]);var state_33363__$1 = state_33363;var statearr_33372_33407 = state_33363__$1;(statearr_33372_33407[2] = inst_33359);
(statearr_33372_33407[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 8))
{var inst_33323 = (state_33363[8]);var inst_33322 = (state_33363[9]);var inst_33325 = (inst_33323 < inst_33322);var inst_33326 = inst_33325;var state_33363__$1 = state_33363;if(cljs.core.truth_(inst_33326))
{var statearr_33373_33408 = state_33363__$1;(statearr_33373_33408[1] = 10);
} else
{var statearr_33374_33409 = state_33363__$1;(statearr_33374_33409[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 9))
{var inst_33356 = (state_33363[2]);var state_33363__$1 = (function (){var statearr_33375 = state_33363;(statearr_33375[12] = inst_33356);
return statearr_33375;
})();var statearr_33376_33410 = state_33363__$1;(statearr_33376_33410[2] = null);
(statearr_33376_33410[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 10))
{var inst_33323 = (state_33363[8]);var inst_33321 = (state_33363[10]);var inst_33328 = cljs.core._nth.call(null,inst_33321,inst_33323);var state_33363__$1 = state_33363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33363__$1,13,out,inst_33328);
} else
{if((state_val_33364 === 11))
{var inst_33320 = (state_33363[11]);var inst_33334 = (state_33363[13]);var inst_33334__$1 = cljs.core.seq.call(null,inst_33320);var state_33363__$1 = (function (){var statearr_33380 = state_33363;(statearr_33380[13] = inst_33334__$1);
return statearr_33380;
})();if(inst_33334__$1)
{var statearr_33381_33411 = state_33363__$1;(statearr_33381_33411[1] = 14);
} else
{var statearr_33382_33412 = state_33363__$1;(statearr_33382_33412[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 12))
{var inst_33354 = (state_33363[2]);var state_33363__$1 = state_33363;var statearr_33383_33413 = state_33363__$1;(statearr_33383_33413[2] = inst_33354);
(statearr_33383_33413[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 13))
{var inst_33323 = (state_33363[8]);var inst_33322 = (state_33363[9]);var inst_33321 = (state_33363[10]);var inst_33320 = (state_33363[11]);var inst_33330 = (state_33363[2]);var inst_33331 = (inst_33323 + 1);var tmp33377 = inst_33322;var tmp33378 = inst_33321;var tmp33379 = inst_33320;var inst_33320__$1 = tmp33379;var inst_33321__$1 = tmp33378;var inst_33322__$1 = tmp33377;var inst_33323__$1 = inst_33331;var state_33363__$1 = (function (){var statearr_33384 = state_33363;(statearr_33384[8] = inst_33323__$1);
(statearr_33384[9] = inst_33322__$1);
(statearr_33384[10] = inst_33321__$1);
(statearr_33384[11] = inst_33320__$1);
(statearr_33384[14] = inst_33330);
return statearr_33384;
})();var statearr_33385_33414 = state_33363__$1;(statearr_33385_33414[2] = null);
(statearr_33385_33414[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 14))
{var inst_33334 = (state_33363[13]);var inst_33336 = cljs.core.chunked_seq_QMARK_.call(null,inst_33334);var state_33363__$1 = state_33363;if(inst_33336)
{var statearr_33386_33415 = state_33363__$1;(statearr_33386_33415[1] = 17);
} else
{var statearr_33387_33416 = state_33363__$1;(statearr_33387_33416[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 15))
{var state_33363__$1 = state_33363;var statearr_33388_33417 = state_33363__$1;(statearr_33388_33417[2] = null);
(statearr_33388_33417[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 16))
{var inst_33352 = (state_33363[2]);var state_33363__$1 = state_33363;var statearr_33389_33418 = state_33363__$1;(statearr_33389_33418[2] = inst_33352);
(statearr_33389_33418[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 17))
{var inst_33334 = (state_33363[13]);var inst_33338 = cljs.core.chunk_first.call(null,inst_33334);var inst_33339 = cljs.core.chunk_rest.call(null,inst_33334);var inst_33340 = cljs.core.count.call(null,inst_33338);var inst_33320 = inst_33339;var inst_33321 = inst_33338;var inst_33322 = inst_33340;var inst_33323 = 0;var state_33363__$1 = (function (){var statearr_33390 = state_33363;(statearr_33390[8] = inst_33323);
(statearr_33390[9] = inst_33322);
(statearr_33390[10] = inst_33321);
(statearr_33390[11] = inst_33320);
return statearr_33390;
})();var statearr_33391_33419 = state_33363__$1;(statearr_33391_33419[2] = null);
(statearr_33391_33419[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 18))
{var inst_33334 = (state_33363[13]);var inst_33343 = cljs.core.first.call(null,inst_33334);var state_33363__$1 = state_33363;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33363__$1,20,out,inst_33343);
} else
{if((state_val_33364 === 19))
{var inst_33349 = (state_33363[2]);var state_33363__$1 = state_33363;var statearr_33392_33420 = state_33363__$1;(statearr_33392_33420[2] = inst_33349);
(statearr_33392_33420[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33364 === 20))
{var inst_33334 = (state_33363[13]);var inst_33345 = (state_33363[2]);var inst_33346 = cljs.core.next.call(null,inst_33334);var inst_33320 = inst_33346;var inst_33321 = null;var inst_33322 = 0;var inst_33323 = 0;var state_33363__$1 = (function (){var statearr_33393 = state_33363;(statearr_33393[8] = inst_33323);
(statearr_33393[9] = inst_33322);
(statearr_33393[10] = inst_33321);
(statearr_33393[11] = inst_33320);
(statearr_33393[15] = inst_33345);
return statearr_33393;
})();var statearr_33394_33421 = state_33363__$1;(statearr_33394_33421[2] = null);
(statearr_33394_33421[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_33398 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33398[0] = state_machine__5507__auto__);
(statearr_33398[1] = 1);
return statearr_33398;
});
var state_machine__5507__auto____1 = (function (state_33363){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33363);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33399){if((e33399 instanceof Object))
{var ex__5510__auto__ = e33399;var statearr_33400_33422 = state_33363;(statearr_33400_33422[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33363);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33399;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33423 = state_33363;
state_33363 = G__33423;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33363){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33363);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33401 = f__5522__auto__.call(null);(statearr_33401[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33401;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33504 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33483){var state_val_33484 = (state_33483[1]);if((state_val_33484 === 1))
{var state_33483__$1 = state_33483;var statearr_33485_33505 = state_33483__$1;(statearr_33485_33505[2] = null);
(statearr_33485_33505[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33484 === 2))
{var state_33483__$1 = state_33483;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33483__$1,4,from);
} else
{if((state_val_33484 === 3))
{var inst_33481 = (state_33483[2]);var state_33483__$1 = state_33483;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33483__$1,inst_33481);
} else
{if((state_val_33484 === 4))
{var inst_33466 = (state_33483[7]);var inst_33466__$1 = (state_33483[2]);var inst_33467 = (inst_33466__$1 == null);var state_33483__$1 = (function (){var statearr_33486 = state_33483;(statearr_33486[7] = inst_33466__$1);
return statearr_33486;
})();if(cljs.core.truth_(inst_33467))
{var statearr_33487_33506 = state_33483__$1;(statearr_33487_33506[1] = 5);
} else
{var statearr_33488_33507 = state_33483__$1;(statearr_33488_33507[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33484 === 5))
{var state_33483__$1 = state_33483;if(cljs.core.truth_(close_QMARK_))
{var statearr_33489_33508 = state_33483__$1;(statearr_33489_33508[1] = 8);
} else
{var statearr_33490_33509 = state_33483__$1;(statearr_33490_33509[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33484 === 6))
{var inst_33466 = (state_33483[7]);var state_33483__$1 = state_33483;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33483__$1,11,to,inst_33466);
} else
{if((state_val_33484 === 7))
{var inst_33479 = (state_33483[2]);var state_33483__$1 = state_33483;var statearr_33491_33510 = state_33483__$1;(statearr_33491_33510[2] = inst_33479);
(statearr_33491_33510[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33484 === 8))
{var inst_33470 = cljs.core.async.close_BANG_.call(null,to);var state_33483__$1 = state_33483;var statearr_33492_33511 = state_33483__$1;(statearr_33492_33511[2] = inst_33470);
(statearr_33492_33511[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33484 === 9))
{var state_33483__$1 = state_33483;var statearr_33493_33512 = state_33483__$1;(statearr_33493_33512[2] = null);
(statearr_33493_33512[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33484 === 10))
{var inst_33473 = (state_33483[2]);var state_33483__$1 = state_33483;var statearr_33494_33513 = state_33483__$1;(statearr_33494_33513[2] = inst_33473);
(statearr_33494_33513[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33484 === 11))
{var inst_33476 = (state_33483[2]);var state_33483__$1 = (function (){var statearr_33495 = state_33483;(statearr_33495[8] = inst_33476);
return statearr_33495;
})();var statearr_33496_33514 = state_33483__$1;(statearr_33496_33514[2] = null);
(statearr_33496_33514[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33500 = [null,null,null,null,null,null,null,null,null];(statearr_33500[0] = state_machine__5507__auto__);
(statearr_33500[1] = 1);
return statearr_33500;
});
var state_machine__5507__auto____1 = (function (state_33483){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33483);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33501){if((e33501 instanceof Object))
{var ex__5510__auto__ = e33501;var statearr_33502_33515 = state_33483;(statearr_33502_33515[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33483);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33501;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33516 = state_33483;
state_33483 = G__33516;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33483){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33483);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33503 = f__5522__auto__.call(null);(statearr_33503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33504);
return statearr_33503;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33603 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33581){var state_val_33582 = (state_33581[1]);if((state_val_33582 === 1))
{var state_33581__$1 = state_33581;var statearr_33583_33604 = state_33581__$1;(statearr_33583_33604[2] = null);
(statearr_33583_33604[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33582 === 2))
{var state_33581__$1 = state_33581;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33581__$1,4,ch);
} else
{if((state_val_33582 === 3))
{var inst_33579 = (state_33581[2]);var state_33581__$1 = state_33581;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33581__$1,inst_33579);
} else
{if((state_val_33582 === 4))
{var inst_33562 = (state_33581[7]);var inst_33562__$1 = (state_33581[2]);var inst_33563 = (inst_33562__$1 == null);var state_33581__$1 = (function (){var statearr_33584 = state_33581;(statearr_33584[7] = inst_33562__$1);
return statearr_33584;
})();if(cljs.core.truth_(inst_33563))
{var statearr_33585_33605 = state_33581__$1;(statearr_33585_33605[1] = 5);
} else
{var statearr_33586_33606 = state_33581__$1;(statearr_33586_33606[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33582 === 5))
{var inst_33565 = cljs.core.async.close_BANG_.call(null,tc);var inst_33566 = cljs.core.async.close_BANG_.call(null,fc);var state_33581__$1 = (function (){var statearr_33587 = state_33581;(statearr_33587[8] = inst_33565);
return statearr_33587;
})();var statearr_33588_33607 = state_33581__$1;(statearr_33588_33607[2] = inst_33566);
(statearr_33588_33607[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33582 === 6))
{var inst_33562 = (state_33581[7]);var inst_33568 = p.call(null,inst_33562);var state_33581__$1 = state_33581;if(cljs.core.truth_(inst_33568))
{var statearr_33589_33608 = state_33581__$1;(statearr_33589_33608[1] = 9);
} else
{var statearr_33590_33609 = state_33581__$1;(statearr_33590_33609[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33582 === 7))
{var inst_33577 = (state_33581[2]);var state_33581__$1 = state_33581;var statearr_33591_33610 = state_33581__$1;(statearr_33591_33610[2] = inst_33577);
(statearr_33591_33610[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33582 === 8))
{var inst_33574 = (state_33581[2]);var state_33581__$1 = (function (){var statearr_33592 = state_33581;(statearr_33592[9] = inst_33574);
return statearr_33592;
})();var statearr_33593_33611 = state_33581__$1;(statearr_33593_33611[2] = null);
(statearr_33593_33611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33582 === 9))
{var state_33581__$1 = state_33581;var statearr_33594_33612 = state_33581__$1;(statearr_33594_33612[2] = tc);
(statearr_33594_33612[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33582 === 10))
{var state_33581__$1 = state_33581;var statearr_33595_33613 = state_33581__$1;(statearr_33595_33613[2] = fc);
(statearr_33595_33613[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33582 === 11))
{var inst_33562 = (state_33581[7]);var inst_33572 = (state_33581[2]);var state_33581__$1 = state_33581;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33581__$1,8,inst_33572,inst_33562);
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
var state_machine__5507__auto____0 = (function (){var statearr_33599 = [null,null,null,null,null,null,null,null,null,null];(statearr_33599[0] = state_machine__5507__auto__);
(statearr_33599[1] = 1);
return statearr_33599;
});
var state_machine__5507__auto____1 = (function (state_33581){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33581);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33600){if((e33600 instanceof Object))
{var ex__5510__auto__ = e33600;var statearr_33601_33614 = state_33581;(statearr_33601_33614[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33581);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33600;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33615 = state_33581;
state_33581 = G__33615;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33581){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33581);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33602 = f__5522__auto__.call(null);(statearr_33602[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33603);
return statearr_33602;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33662){var state_val_33663 = (state_33662[1]);if((state_val_33663 === 7))
{var inst_33658 = (state_33662[2]);var state_33662__$1 = state_33662;var statearr_33664_33680 = state_33662__$1;(statearr_33664_33680[2] = inst_33658);
(statearr_33664_33680[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33663 === 6))
{var inst_33648 = (state_33662[7]);var inst_33651 = (state_33662[8]);var inst_33655 = f.call(null,inst_33648,inst_33651);var inst_33648__$1 = inst_33655;var state_33662__$1 = (function (){var statearr_33665 = state_33662;(statearr_33665[7] = inst_33648__$1);
return statearr_33665;
})();var statearr_33666_33681 = state_33662__$1;(statearr_33666_33681[2] = null);
(statearr_33666_33681[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33663 === 5))
{var inst_33648 = (state_33662[7]);var state_33662__$1 = state_33662;var statearr_33667_33682 = state_33662__$1;(statearr_33667_33682[2] = inst_33648);
(statearr_33667_33682[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33663 === 4))
{var inst_33651 = (state_33662[8]);var inst_33651__$1 = (state_33662[2]);var inst_33652 = (inst_33651__$1 == null);var state_33662__$1 = (function (){var statearr_33668 = state_33662;(statearr_33668[8] = inst_33651__$1);
return statearr_33668;
})();if(cljs.core.truth_(inst_33652))
{var statearr_33669_33683 = state_33662__$1;(statearr_33669_33683[1] = 5);
} else
{var statearr_33670_33684 = state_33662__$1;(statearr_33670_33684[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33663 === 3))
{var inst_33660 = (state_33662[2]);var state_33662__$1 = state_33662;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33662__$1,inst_33660);
} else
{if((state_val_33663 === 2))
{var state_33662__$1 = state_33662;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33662__$1,4,ch);
} else
{if((state_val_33663 === 1))
{var inst_33648 = init;var state_33662__$1 = (function (){var statearr_33671 = state_33662;(statearr_33671[7] = inst_33648);
return statearr_33671;
})();var statearr_33672_33685 = state_33662__$1;(statearr_33672_33685[2] = null);
(statearr_33672_33685[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33676 = [null,null,null,null,null,null,null,null,null];(statearr_33676[0] = state_machine__5507__auto__);
(statearr_33676[1] = 1);
return statearr_33676;
});
var state_machine__5507__auto____1 = (function (state_33662){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33662);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33677){if((e33677 instanceof Object))
{var ex__5510__auto__ = e33677;var statearr_33678_33686 = state_33662;(statearr_33678_33686[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33662);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33677;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33687 = state_33662;
state_33662 = G__33687;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33662){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33662);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33679 = f__5522__auto__.call(null);(statearr_33679[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33679;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33749){var state_val_33750 = (state_33749[1]);if((state_val_33750 === 1))
{var inst_33729 = cljs.core.seq.call(null,coll);var inst_33730 = inst_33729;var state_33749__$1 = (function (){var statearr_33751 = state_33749;(statearr_33751[7] = inst_33730);
return statearr_33751;
})();var statearr_33752_33770 = state_33749__$1;(statearr_33752_33770[2] = null);
(statearr_33752_33770[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 2))
{var inst_33730 = (state_33749[7]);var state_33749__$1 = state_33749;if(cljs.core.truth_(inst_33730))
{var statearr_33753_33771 = state_33749__$1;(statearr_33753_33771[1] = 4);
} else
{var statearr_33754_33772 = state_33749__$1;(statearr_33754_33772[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 3))
{var inst_33747 = (state_33749[2]);var state_33749__$1 = state_33749;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33749__$1,inst_33747);
} else
{if((state_val_33750 === 4))
{var inst_33730 = (state_33749[7]);var inst_33733 = cljs.core.first.call(null,inst_33730);var state_33749__$1 = state_33749;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33749__$1,7,ch,inst_33733);
} else
{if((state_val_33750 === 5))
{var state_33749__$1 = state_33749;if(cljs.core.truth_(close_QMARK_))
{var statearr_33755_33773 = state_33749__$1;(statearr_33755_33773[1] = 8);
} else
{var statearr_33756_33774 = state_33749__$1;(statearr_33756_33774[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 6))
{var inst_33745 = (state_33749[2]);var state_33749__$1 = state_33749;var statearr_33757_33775 = state_33749__$1;(statearr_33757_33775[2] = inst_33745);
(statearr_33757_33775[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 7))
{var inst_33730 = (state_33749[7]);var inst_33735 = (state_33749[2]);var inst_33736 = cljs.core.next.call(null,inst_33730);var inst_33730__$1 = inst_33736;var state_33749__$1 = (function (){var statearr_33758 = state_33749;(statearr_33758[8] = inst_33735);
(statearr_33758[7] = inst_33730__$1);
return statearr_33758;
})();var statearr_33759_33776 = state_33749__$1;(statearr_33759_33776[2] = null);
(statearr_33759_33776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 8))
{var inst_33740 = cljs.core.async.close_BANG_.call(null,ch);var state_33749__$1 = state_33749;var statearr_33760_33777 = state_33749__$1;(statearr_33760_33777[2] = inst_33740);
(statearr_33760_33777[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 9))
{var state_33749__$1 = state_33749;var statearr_33761_33778 = state_33749__$1;(statearr_33761_33778[2] = null);
(statearr_33761_33778[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33750 === 10))
{var inst_33743 = (state_33749[2]);var state_33749__$1 = state_33749;var statearr_33762_33779 = state_33749__$1;(statearr_33762_33779[2] = inst_33743);
(statearr_33762_33779[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_33766 = [null,null,null,null,null,null,null,null,null];(statearr_33766[0] = state_machine__5507__auto__);
(statearr_33766[1] = 1);
return statearr_33766;
});
var state_machine__5507__auto____1 = (function (state_33749){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33749);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33767){if((e33767 instanceof Object))
{var ex__5510__auto__ = e33767;var statearr_33768_33780 = state_33749;(statearr_33768_33780[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33749);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33767;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33781 = state_33749;
state_33749 = G__33781;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33749){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33749);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33769 = f__5522__auto__.call(null);(statearr_33769[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33769;
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
cljs.core.async.Mux = (function (){var obj33783 = {};return obj33783;
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
cljs.core.async.Mult = (function (){var obj33785 = {};return obj33785;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34009 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34009 = (function (cs,ch,mult,meta34010){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34010 = meta34010;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34009.cljs$lang$type = true;
cljs.core.async.t34009.cljs$lang$ctorStr = "cljs.core.async/t34009";
cljs.core.async.t34009.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34009");
});})(cs))
;
cljs.core.async.t34009.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34009.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34009.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34009.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34009.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34009.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34009.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34011){var self__ = this;
var _34011__$1 = this;return self__.meta34010;
});})(cs))
;
cljs.core.async.t34009.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34011,meta34010__$1){var self__ = this;
var _34011__$1 = this;return (new cljs.core.async.t34009(self__.cs,self__.ch,self__.mult,meta34010__$1));
});})(cs))
;
cljs.core.async.__GT_t34009 = ((function (cs){
return (function __GT_t34009(cs__$1,ch__$1,mult__$1,meta34010){return (new cljs.core.async.t34009(cs__$1,ch__$1,mult__$1,meta34010));
});})(cs))
;
}
return (new cljs.core.async.t34009(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34232 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34146){var state_val_34147 = (state_34146[1]);if((state_val_34147 === 32))
{var inst_34014 = (state_34146[7]);var inst_34090 = (state_34146[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34146,31,Object,null,30);var inst_34097 = cljs.core.async.put_BANG_.call(null,inst_34090,inst_34014,done);var state_34146__$1 = state_34146;var statearr_34148_34233 = state_34146__$1;(statearr_34148_34233[2] = inst_34097);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34146__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 1))
{var state_34146__$1 = state_34146;var statearr_34149_34234 = state_34146__$1;(statearr_34149_34234[2] = null);
(statearr_34149_34234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 33))
{var inst_34103 = (state_34146[9]);var inst_34105 = cljs.core.chunked_seq_QMARK_.call(null,inst_34103);var state_34146__$1 = state_34146;if(inst_34105)
{var statearr_34150_34235 = state_34146__$1;(statearr_34150_34235[1] = 36);
} else
{var statearr_34151_34236 = state_34146__$1;(statearr_34151_34236[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 2))
{var state_34146__$1 = state_34146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34146__$1,4,ch);
} else
{if((state_val_34147 === 34))
{var state_34146__$1 = state_34146;var statearr_34152_34237 = state_34146__$1;(statearr_34152_34237[2] = null);
(statearr_34152_34237[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 3))
{var inst_34144 = (state_34146[2]);var state_34146__$1 = state_34146;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34146__$1,inst_34144);
} else
{if((state_val_34147 === 35))
{var inst_34128 = (state_34146[2]);var state_34146__$1 = state_34146;var statearr_34153_34238 = state_34146__$1;(statearr_34153_34238[2] = inst_34128);
(statearr_34153_34238[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 4))
{var inst_34014 = (state_34146[7]);var inst_34014__$1 = (state_34146[2]);var inst_34015 = (inst_34014__$1 == null);var state_34146__$1 = (function (){var statearr_34154 = state_34146;(statearr_34154[7] = inst_34014__$1);
return statearr_34154;
})();if(cljs.core.truth_(inst_34015))
{var statearr_34155_34239 = state_34146__$1;(statearr_34155_34239[1] = 5);
} else
{var statearr_34156_34240 = state_34146__$1;(statearr_34156_34240[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 36))
{var inst_34103 = (state_34146[9]);var inst_34107 = cljs.core.chunk_first.call(null,inst_34103);var inst_34108 = cljs.core.chunk_rest.call(null,inst_34103);var inst_34109 = cljs.core.count.call(null,inst_34107);var inst_34082 = inst_34108;var inst_34083 = inst_34107;var inst_34084 = inst_34109;var inst_34085 = 0;var state_34146__$1 = (function (){var statearr_34157 = state_34146;(statearr_34157[10] = inst_34083);
(statearr_34157[11] = inst_34082);
(statearr_34157[12] = inst_34085);
(statearr_34157[13] = inst_34084);
return statearr_34157;
})();var statearr_34158_34241 = state_34146__$1;(statearr_34158_34241[2] = null);
(statearr_34158_34241[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 5))
{var inst_34021 = cljs.core.deref.call(null,cs);var inst_34022 = cljs.core.seq.call(null,inst_34021);var inst_34023 = inst_34022;var inst_34024 = null;var inst_34025 = 0;var inst_34026 = 0;var state_34146__$1 = (function (){var statearr_34159 = state_34146;(statearr_34159[14] = inst_34023);
(statearr_34159[15] = inst_34026);
(statearr_34159[16] = inst_34025);
(statearr_34159[17] = inst_34024);
return statearr_34159;
})();var statearr_34160_34242 = state_34146__$1;(statearr_34160_34242[2] = null);
(statearr_34160_34242[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 37))
{var inst_34103 = (state_34146[9]);var inst_34112 = cljs.core.first.call(null,inst_34103);var state_34146__$1 = (function (){var statearr_34161 = state_34146;(statearr_34161[18] = inst_34112);
return statearr_34161;
})();var statearr_34162_34243 = state_34146__$1;(statearr_34162_34243[2] = null);
(statearr_34162_34243[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 6))
{var inst_34074 = (state_34146[19]);var inst_34073 = cljs.core.deref.call(null,cs);var inst_34074__$1 = cljs.core.keys.call(null,inst_34073);var inst_34075 = cljs.core.count.call(null,inst_34074__$1);var inst_34076 = cljs.core.reset_BANG_.call(null,dctr,inst_34075);var inst_34081 = cljs.core.seq.call(null,inst_34074__$1);var inst_34082 = inst_34081;var inst_34083 = null;var inst_34084 = 0;var inst_34085 = 0;var state_34146__$1 = (function (){var statearr_34163 = state_34146;(statearr_34163[10] = inst_34083);
(statearr_34163[11] = inst_34082);
(statearr_34163[12] = inst_34085);
(statearr_34163[13] = inst_34084);
(statearr_34163[20] = inst_34076);
(statearr_34163[19] = inst_34074__$1);
return statearr_34163;
})();var statearr_34164_34244 = state_34146__$1;(statearr_34164_34244[2] = null);
(statearr_34164_34244[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 38))
{var inst_34125 = (state_34146[2]);var state_34146__$1 = state_34146;var statearr_34165_34245 = state_34146__$1;(statearr_34165_34245[2] = inst_34125);
(statearr_34165_34245[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 7))
{var inst_34142 = (state_34146[2]);var state_34146__$1 = state_34146;var statearr_34166_34246 = state_34146__$1;(statearr_34166_34246[2] = inst_34142);
(statearr_34166_34246[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 39))
{var inst_34103 = (state_34146[9]);var inst_34121 = (state_34146[2]);var inst_34122 = cljs.core.next.call(null,inst_34103);var inst_34082 = inst_34122;var inst_34083 = null;var inst_34084 = 0;var inst_34085 = 0;var state_34146__$1 = (function (){var statearr_34167 = state_34146;(statearr_34167[21] = inst_34121);
(statearr_34167[10] = inst_34083);
(statearr_34167[11] = inst_34082);
(statearr_34167[12] = inst_34085);
(statearr_34167[13] = inst_34084);
return statearr_34167;
})();var statearr_34168_34247 = state_34146__$1;(statearr_34168_34247[2] = null);
(statearr_34168_34247[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 8))
{var inst_34026 = (state_34146[15]);var inst_34025 = (state_34146[16]);var inst_34028 = (inst_34026 < inst_34025);var inst_34029 = inst_34028;var state_34146__$1 = state_34146;if(cljs.core.truth_(inst_34029))
{var statearr_34169_34248 = state_34146__$1;(statearr_34169_34248[1] = 10);
} else
{var statearr_34170_34249 = state_34146__$1;(statearr_34170_34249[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 40))
{var inst_34112 = (state_34146[18]);var inst_34113 = (state_34146[2]);var inst_34114 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34115 = cljs.core.async.untap_STAR_.call(null,m,inst_34112);var state_34146__$1 = (function (){var statearr_34171 = state_34146;(statearr_34171[22] = inst_34114);
(statearr_34171[23] = inst_34113);
return statearr_34171;
})();var statearr_34172_34250 = state_34146__$1;(statearr_34172_34250[2] = inst_34115);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34146__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 9))
{var inst_34071 = (state_34146[2]);var state_34146__$1 = state_34146;var statearr_34173_34251 = state_34146__$1;(statearr_34173_34251[2] = inst_34071);
(statearr_34173_34251[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 41))
{var inst_34014 = (state_34146[7]);var inst_34112 = (state_34146[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34146,40,Object,null,39);var inst_34119 = cljs.core.async.put_BANG_.call(null,inst_34112,inst_34014,done);var state_34146__$1 = state_34146;var statearr_34174_34252 = state_34146__$1;(statearr_34174_34252[2] = inst_34119);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34146__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 10))
{var inst_34026 = (state_34146[15]);var inst_34024 = (state_34146[17]);var inst_34032 = cljs.core._nth.call(null,inst_34024,inst_34026);var inst_34033 = cljs.core.nth.call(null,inst_34032,0,null);var inst_34034 = cljs.core.nth.call(null,inst_34032,1,null);var state_34146__$1 = (function (){var statearr_34175 = state_34146;(statearr_34175[24] = inst_34033);
return statearr_34175;
})();if(cljs.core.truth_(inst_34034))
{var statearr_34176_34253 = state_34146__$1;(statearr_34176_34253[1] = 13);
} else
{var statearr_34177_34254 = state_34146__$1;(statearr_34177_34254[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 42))
{var state_34146__$1 = state_34146;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34146__$1,45,dchan);
} else
{if((state_val_34147 === 11))
{var inst_34043 = (state_34146[25]);var inst_34023 = (state_34146[14]);var inst_34043__$1 = cljs.core.seq.call(null,inst_34023);var state_34146__$1 = (function (){var statearr_34178 = state_34146;(statearr_34178[25] = inst_34043__$1);
return statearr_34178;
})();if(inst_34043__$1)
{var statearr_34179_34255 = state_34146__$1;(statearr_34179_34255[1] = 16);
} else
{var statearr_34180_34256 = state_34146__$1;(statearr_34180_34256[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 43))
{var state_34146__$1 = state_34146;var statearr_34181_34257 = state_34146__$1;(statearr_34181_34257[2] = null);
(statearr_34181_34257[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 12))
{var inst_34069 = (state_34146[2]);var state_34146__$1 = state_34146;var statearr_34182_34258 = state_34146__$1;(statearr_34182_34258[2] = inst_34069);
(statearr_34182_34258[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 44))
{var inst_34139 = (state_34146[2]);var state_34146__$1 = (function (){var statearr_34183 = state_34146;(statearr_34183[26] = inst_34139);
return statearr_34183;
})();var statearr_34184_34259 = state_34146__$1;(statearr_34184_34259[2] = null);
(statearr_34184_34259[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 13))
{var inst_34033 = (state_34146[24]);var inst_34036 = cljs.core.async.close_BANG_.call(null,inst_34033);var state_34146__$1 = state_34146;var statearr_34185_34260 = state_34146__$1;(statearr_34185_34260[2] = inst_34036);
(statearr_34185_34260[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 45))
{var inst_34136 = (state_34146[2]);var state_34146__$1 = state_34146;var statearr_34189_34261 = state_34146__$1;(statearr_34189_34261[2] = inst_34136);
(statearr_34189_34261[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 14))
{var state_34146__$1 = state_34146;var statearr_34190_34262 = state_34146__$1;(statearr_34190_34262[2] = null);
(statearr_34190_34262[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 15))
{var inst_34023 = (state_34146[14]);var inst_34026 = (state_34146[15]);var inst_34025 = (state_34146[16]);var inst_34024 = (state_34146[17]);var inst_34039 = (state_34146[2]);var inst_34040 = (inst_34026 + 1);var tmp34186 = inst_34023;var tmp34187 = inst_34025;var tmp34188 = inst_34024;var inst_34023__$1 = tmp34186;var inst_34024__$1 = tmp34188;var inst_34025__$1 = tmp34187;var inst_34026__$1 = inst_34040;var state_34146__$1 = (function (){var statearr_34191 = state_34146;(statearr_34191[27] = inst_34039);
(statearr_34191[14] = inst_34023__$1);
(statearr_34191[15] = inst_34026__$1);
(statearr_34191[16] = inst_34025__$1);
(statearr_34191[17] = inst_34024__$1);
return statearr_34191;
})();var statearr_34192_34263 = state_34146__$1;(statearr_34192_34263[2] = null);
(statearr_34192_34263[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 16))
{var inst_34043 = (state_34146[25]);var inst_34045 = cljs.core.chunked_seq_QMARK_.call(null,inst_34043);var state_34146__$1 = state_34146;if(inst_34045)
{var statearr_34193_34264 = state_34146__$1;(statearr_34193_34264[1] = 19);
} else
{var statearr_34194_34265 = state_34146__$1;(statearr_34194_34265[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 17))
{var state_34146__$1 = state_34146;var statearr_34195_34266 = state_34146__$1;(statearr_34195_34266[2] = null);
(statearr_34195_34266[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 18))
{var inst_34067 = (state_34146[2]);var state_34146__$1 = state_34146;var statearr_34196_34267 = state_34146__$1;(statearr_34196_34267[2] = inst_34067);
(statearr_34196_34267[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 19))
{var inst_34043 = (state_34146[25]);var inst_34047 = cljs.core.chunk_first.call(null,inst_34043);var inst_34048 = cljs.core.chunk_rest.call(null,inst_34043);var inst_34049 = cljs.core.count.call(null,inst_34047);var inst_34023 = inst_34048;var inst_34024 = inst_34047;var inst_34025 = inst_34049;var inst_34026 = 0;var state_34146__$1 = (function (){var statearr_34197 = state_34146;(statearr_34197[14] = inst_34023);
(statearr_34197[15] = inst_34026);
(statearr_34197[16] = inst_34025);
(statearr_34197[17] = inst_34024);
return statearr_34197;
})();var statearr_34198_34268 = state_34146__$1;(statearr_34198_34268[2] = null);
(statearr_34198_34268[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 20))
{var inst_34043 = (state_34146[25]);var inst_34053 = cljs.core.first.call(null,inst_34043);var inst_34054 = cljs.core.nth.call(null,inst_34053,0,null);var inst_34055 = cljs.core.nth.call(null,inst_34053,1,null);var state_34146__$1 = (function (){var statearr_34199 = state_34146;(statearr_34199[28] = inst_34054);
return statearr_34199;
})();if(cljs.core.truth_(inst_34055))
{var statearr_34200_34269 = state_34146__$1;(statearr_34200_34269[1] = 22);
} else
{var statearr_34201_34270 = state_34146__$1;(statearr_34201_34270[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 21))
{var inst_34064 = (state_34146[2]);var state_34146__$1 = state_34146;var statearr_34202_34271 = state_34146__$1;(statearr_34202_34271[2] = inst_34064);
(statearr_34202_34271[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 22))
{var inst_34054 = (state_34146[28]);var inst_34057 = cljs.core.async.close_BANG_.call(null,inst_34054);var state_34146__$1 = state_34146;var statearr_34203_34272 = state_34146__$1;(statearr_34203_34272[2] = inst_34057);
(statearr_34203_34272[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 23))
{var state_34146__$1 = state_34146;var statearr_34204_34273 = state_34146__$1;(statearr_34204_34273[2] = null);
(statearr_34204_34273[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 24))
{var inst_34043 = (state_34146[25]);var inst_34060 = (state_34146[2]);var inst_34061 = cljs.core.next.call(null,inst_34043);var inst_34023 = inst_34061;var inst_34024 = null;var inst_34025 = 0;var inst_34026 = 0;var state_34146__$1 = (function (){var statearr_34205 = state_34146;(statearr_34205[14] = inst_34023);
(statearr_34205[29] = inst_34060);
(statearr_34205[15] = inst_34026);
(statearr_34205[16] = inst_34025);
(statearr_34205[17] = inst_34024);
return statearr_34205;
})();var statearr_34206_34274 = state_34146__$1;(statearr_34206_34274[2] = null);
(statearr_34206_34274[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 25))
{var inst_34085 = (state_34146[12]);var inst_34084 = (state_34146[13]);var inst_34087 = (inst_34085 < inst_34084);var inst_34088 = inst_34087;var state_34146__$1 = state_34146;if(cljs.core.truth_(inst_34088))
{var statearr_34207_34275 = state_34146__$1;(statearr_34207_34275[1] = 27);
} else
{var statearr_34208_34276 = state_34146__$1;(statearr_34208_34276[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 26))
{var inst_34074 = (state_34146[19]);var inst_34132 = (state_34146[2]);var inst_34133 = cljs.core.seq.call(null,inst_34074);var state_34146__$1 = (function (){var statearr_34209 = state_34146;(statearr_34209[30] = inst_34132);
return statearr_34209;
})();if(inst_34133)
{var statearr_34210_34277 = state_34146__$1;(statearr_34210_34277[1] = 42);
} else
{var statearr_34211_34278 = state_34146__$1;(statearr_34211_34278[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 27))
{var inst_34083 = (state_34146[10]);var inst_34085 = (state_34146[12]);var inst_34090 = cljs.core._nth.call(null,inst_34083,inst_34085);var state_34146__$1 = (function (){var statearr_34212 = state_34146;(statearr_34212[8] = inst_34090);
return statearr_34212;
})();var statearr_34213_34279 = state_34146__$1;(statearr_34213_34279[2] = null);
(statearr_34213_34279[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 28))
{var inst_34082 = (state_34146[11]);var inst_34103 = (state_34146[9]);var inst_34103__$1 = cljs.core.seq.call(null,inst_34082);var state_34146__$1 = (function (){var statearr_34217 = state_34146;(statearr_34217[9] = inst_34103__$1);
return statearr_34217;
})();if(inst_34103__$1)
{var statearr_34218_34280 = state_34146__$1;(statearr_34218_34280[1] = 33);
} else
{var statearr_34219_34281 = state_34146__$1;(statearr_34219_34281[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 29))
{var inst_34130 = (state_34146[2]);var state_34146__$1 = state_34146;var statearr_34220_34282 = state_34146__$1;(statearr_34220_34282[2] = inst_34130);
(statearr_34220_34282[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 30))
{var inst_34083 = (state_34146[10]);var inst_34082 = (state_34146[11]);var inst_34085 = (state_34146[12]);var inst_34084 = (state_34146[13]);var inst_34099 = (state_34146[2]);var inst_34100 = (inst_34085 + 1);var tmp34214 = inst_34083;var tmp34215 = inst_34082;var tmp34216 = inst_34084;var inst_34082__$1 = tmp34215;var inst_34083__$1 = tmp34214;var inst_34084__$1 = tmp34216;var inst_34085__$1 = inst_34100;var state_34146__$1 = (function (){var statearr_34221 = state_34146;(statearr_34221[10] = inst_34083__$1);
(statearr_34221[11] = inst_34082__$1);
(statearr_34221[12] = inst_34085__$1);
(statearr_34221[13] = inst_34084__$1);
(statearr_34221[31] = inst_34099);
return statearr_34221;
})();var statearr_34222_34283 = state_34146__$1;(statearr_34222_34283[2] = null);
(statearr_34222_34283[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34147 === 31))
{var inst_34090 = (state_34146[8]);var inst_34091 = (state_34146[2]);var inst_34092 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34093 = cljs.core.async.untap_STAR_.call(null,m,inst_34090);var state_34146__$1 = (function (){var statearr_34223 = state_34146;(statearr_34223[32] = inst_34091);
(statearr_34223[33] = inst_34092);
return statearr_34223;
})();var statearr_34224_34284 = state_34146__$1;(statearr_34224_34284[2] = inst_34093);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34146__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34228 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34228[0] = state_machine__5507__auto__);
(statearr_34228[1] = 1);
return statearr_34228;
});
var state_machine__5507__auto____1 = (function (state_34146){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34146);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34229){if((e34229 instanceof Object))
{var ex__5510__auto__ = e34229;var statearr_34230_34285 = state_34146;(statearr_34230_34285[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34146);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34229;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34286 = state_34146;
state_34146 = G__34286;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34146){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34146);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34231 = f__5522__auto__.call(null);(statearr_34231[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34232);
return statearr_34231;
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
cljs.core.async.Mix = (function (){var obj34288 = {};return obj34288;
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
;var m = (function (){if(typeof cljs.core.async.t34398 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34398 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34399){
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
this.meta34399 = meta34399;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34398.cljs$lang$type = true;
cljs.core.async.t34398.cljs$lang$ctorStr = "cljs.core.async/t34398";
cljs.core.async.t34398.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34398");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34398.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34398.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34398.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34398.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34398.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34398.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34398.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34398.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34398.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34400){var self__ = this;
var _34400__$1 = this;return self__.meta34399;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34398.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34400,meta34399__$1){var self__ = this;
var _34400__$1 = this;return (new cljs.core.async.t34398(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34399__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34398 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34398(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34399){return (new cljs.core.async.t34398(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34399));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34398(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34507 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34465){var state_val_34466 = (state_34465[1]);if((state_val_34466 === 1))
{var inst_34404 = (state_34465[7]);var inst_34404__$1 = calc_state.call(null);var inst_34405 = cljs.core.seq_QMARK_.call(null,inst_34404__$1);var state_34465__$1 = (function (){var statearr_34467 = state_34465;(statearr_34467[7] = inst_34404__$1);
return statearr_34467;
})();if(inst_34405)
{var statearr_34468_34508 = state_34465__$1;(statearr_34468_34508[1] = 2);
} else
{var statearr_34469_34509 = state_34465__$1;(statearr_34469_34509[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 2))
{var inst_34404 = (state_34465[7]);var inst_34407 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34404);var state_34465__$1 = state_34465;var statearr_34470_34510 = state_34465__$1;(statearr_34470_34510[2] = inst_34407);
(statearr_34470_34510[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 3))
{var inst_34404 = (state_34465[7]);var state_34465__$1 = state_34465;var statearr_34471_34511 = state_34465__$1;(statearr_34471_34511[2] = inst_34404);
(statearr_34471_34511[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 4))
{var inst_34404 = (state_34465[7]);var inst_34410 = (state_34465[2]);var inst_34411 = cljs.core.get.call(null,inst_34410,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34412 = cljs.core.get.call(null,inst_34410,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34413 = cljs.core.get.call(null,inst_34410,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34414 = inst_34404;var state_34465__$1 = (function (){var statearr_34472 = state_34465;(statearr_34472[8] = inst_34412);
(statearr_34472[9] = inst_34411);
(statearr_34472[10] = inst_34413);
(statearr_34472[11] = inst_34414);
return statearr_34472;
})();var statearr_34473_34512 = state_34465__$1;(statearr_34473_34512[2] = null);
(statearr_34473_34512[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 5))
{var inst_34414 = (state_34465[11]);var inst_34417 = cljs.core.seq_QMARK_.call(null,inst_34414);var state_34465__$1 = state_34465;if(inst_34417)
{var statearr_34474_34513 = state_34465__$1;(statearr_34474_34513[1] = 7);
} else
{var statearr_34475_34514 = state_34465__$1;(statearr_34475_34514[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 6))
{var inst_34463 = (state_34465[2]);var state_34465__$1 = state_34465;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34465__$1,inst_34463);
} else
{if((state_val_34466 === 7))
{var inst_34414 = (state_34465[11]);var inst_34419 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34414);var state_34465__$1 = state_34465;var statearr_34476_34515 = state_34465__$1;(statearr_34476_34515[2] = inst_34419);
(statearr_34476_34515[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 8))
{var inst_34414 = (state_34465[11]);var state_34465__$1 = state_34465;var statearr_34477_34516 = state_34465__$1;(statearr_34477_34516[2] = inst_34414);
(statearr_34477_34516[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 9))
{var inst_34422 = (state_34465[12]);var inst_34422__$1 = (state_34465[2]);var inst_34423 = cljs.core.get.call(null,inst_34422__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34424 = cljs.core.get.call(null,inst_34422__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34425 = cljs.core.get.call(null,inst_34422__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34465__$1 = (function (){var statearr_34478 = state_34465;(statearr_34478[13] = inst_34424);
(statearr_34478[14] = inst_34425);
(statearr_34478[12] = inst_34422__$1);
return statearr_34478;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34465__$1,10,inst_34423);
} else
{if((state_val_34466 === 10))
{var inst_34429 = (state_34465[15]);var inst_34430 = (state_34465[16]);var inst_34428 = (state_34465[2]);var inst_34429__$1 = cljs.core.nth.call(null,inst_34428,0,null);var inst_34430__$1 = cljs.core.nth.call(null,inst_34428,1,null);var inst_34431 = (inst_34429__$1 == null);var inst_34432 = cljs.core._EQ_.call(null,inst_34430__$1,change);var inst_34433 = (inst_34431) || (inst_34432);var state_34465__$1 = (function (){var statearr_34479 = state_34465;(statearr_34479[15] = inst_34429__$1);
(statearr_34479[16] = inst_34430__$1);
return statearr_34479;
})();if(cljs.core.truth_(inst_34433))
{var statearr_34480_34517 = state_34465__$1;(statearr_34480_34517[1] = 11);
} else
{var statearr_34481_34518 = state_34465__$1;(statearr_34481_34518[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 11))
{var inst_34429 = (state_34465[15]);var inst_34435 = (inst_34429 == null);var state_34465__$1 = state_34465;if(cljs.core.truth_(inst_34435))
{var statearr_34482_34519 = state_34465__$1;(statearr_34482_34519[1] = 14);
} else
{var statearr_34483_34520 = state_34465__$1;(statearr_34483_34520[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 12))
{var inst_34444 = (state_34465[17]);var inst_34425 = (state_34465[14]);var inst_34430 = (state_34465[16]);var inst_34444__$1 = inst_34425.call(null,inst_34430);var state_34465__$1 = (function (){var statearr_34484 = state_34465;(statearr_34484[17] = inst_34444__$1);
return statearr_34484;
})();if(cljs.core.truth_(inst_34444__$1))
{var statearr_34485_34521 = state_34465__$1;(statearr_34485_34521[1] = 17);
} else
{var statearr_34486_34522 = state_34465__$1;(statearr_34486_34522[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 13))
{var inst_34461 = (state_34465[2]);var state_34465__$1 = state_34465;var statearr_34487_34523 = state_34465__$1;(statearr_34487_34523[2] = inst_34461);
(statearr_34487_34523[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 14))
{var inst_34430 = (state_34465[16]);var inst_34437 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34430);var state_34465__$1 = state_34465;var statearr_34488_34524 = state_34465__$1;(statearr_34488_34524[2] = inst_34437);
(statearr_34488_34524[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 15))
{var state_34465__$1 = state_34465;var statearr_34489_34525 = state_34465__$1;(statearr_34489_34525[2] = null);
(statearr_34489_34525[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 16))
{var inst_34440 = (state_34465[2]);var inst_34441 = calc_state.call(null);var inst_34414 = inst_34441;var state_34465__$1 = (function (){var statearr_34490 = state_34465;(statearr_34490[18] = inst_34440);
(statearr_34490[11] = inst_34414);
return statearr_34490;
})();var statearr_34491_34526 = state_34465__$1;(statearr_34491_34526[2] = null);
(statearr_34491_34526[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 17))
{var inst_34444 = (state_34465[17]);var state_34465__$1 = state_34465;var statearr_34492_34527 = state_34465__$1;(statearr_34492_34527[2] = inst_34444);
(statearr_34492_34527[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 18))
{var inst_34424 = (state_34465[13]);var inst_34425 = (state_34465[14]);var inst_34430 = (state_34465[16]);var inst_34447 = cljs.core.empty_QMARK_.call(null,inst_34425);var inst_34448 = inst_34424.call(null,inst_34430);var inst_34449 = cljs.core.not.call(null,inst_34448);var inst_34450 = (inst_34447) && (inst_34449);var state_34465__$1 = state_34465;var statearr_34493_34528 = state_34465__$1;(statearr_34493_34528[2] = inst_34450);
(statearr_34493_34528[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 19))
{var inst_34452 = (state_34465[2]);var state_34465__$1 = state_34465;if(cljs.core.truth_(inst_34452))
{var statearr_34494_34529 = state_34465__$1;(statearr_34494_34529[1] = 20);
} else
{var statearr_34495_34530 = state_34465__$1;(statearr_34495_34530[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 20))
{var inst_34429 = (state_34465[15]);var state_34465__$1 = state_34465;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34465__$1,23,out,inst_34429);
} else
{if((state_val_34466 === 21))
{var state_34465__$1 = state_34465;var statearr_34496_34531 = state_34465__$1;(statearr_34496_34531[2] = null);
(statearr_34496_34531[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 22))
{var inst_34422 = (state_34465[12]);var inst_34458 = (state_34465[2]);var inst_34414 = inst_34422;var state_34465__$1 = (function (){var statearr_34497 = state_34465;(statearr_34497[11] = inst_34414);
(statearr_34497[19] = inst_34458);
return statearr_34497;
})();var statearr_34498_34532 = state_34465__$1;(statearr_34498_34532[2] = null);
(statearr_34498_34532[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34466 === 23))
{var inst_34455 = (state_34465[2]);var state_34465__$1 = state_34465;var statearr_34499_34533 = state_34465__$1;(statearr_34499_34533[2] = inst_34455);
(statearr_34499_34533[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34503 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34503[0] = state_machine__5507__auto__);
(statearr_34503[1] = 1);
return statearr_34503;
});
var state_machine__5507__auto____1 = (function (state_34465){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34465);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34504){if((e34504 instanceof Object))
{var ex__5510__auto__ = e34504;var statearr_34505_34534 = state_34465;(statearr_34505_34534[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34465);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34504;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34535 = state_34465;
state_34465 = G__34535;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34465){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34465);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34506 = f__5522__auto__.call(null);(statearr_34506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34507);
return statearr_34506;
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
cljs.core.async.Pub = (function (){var obj34537 = {};return obj34537;
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
return (function (p1__34538_SHARP_){if(cljs.core.truth_(p1__34538_SHARP_.call(null,topic)))
{return p1__34538_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34538_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34663 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34663 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34664){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34664 = meta34664;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34663.cljs$lang$type = true;
cljs.core.async.t34663.cljs$lang$ctorStr = "cljs.core.async/t34663";
cljs.core.async.t34663.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34663");
});})(mults,ensure_mult))
;
cljs.core.async.t34663.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34663.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34663.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34663.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34663.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34663.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34663.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34665){var self__ = this;
var _34665__$1 = this;return self__.meta34664;
});})(mults,ensure_mult))
;
cljs.core.async.t34663.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34665,meta34664__$1){var self__ = this;
var _34665__$1 = this;return (new cljs.core.async.t34663(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34664__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34663 = ((function (mults,ensure_mult){
return (function __GT_t34663(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34664){return (new cljs.core.async.t34663(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34664));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34663(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34787 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34739){var state_val_34740 = (state_34739[1]);if((state_val_34740 === 1))
{var state_34739__$1 = state_34739;var statearr_34741_34788 = state_34739__$1;(statearr_34741_34788[2] = null);
(statearr_34741_34788[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 2))
{var state_34739__$1 = state_34739;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34739__$1,4,ch);
} else
{if((state_val_34740 === 3))
{var inst_34737 = (state_34739[2]);var state_34739__$1 = state_34739;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34739__$1,inst_34737);
} else
{if((state_val_34740 === 4))
{var inst_34668 = (state_34739[7]);var inst_34668__$1 = (state_34739[2]);var inst_34669 = (inst_34668__$1 == null);var state_34739__$1 = (function (){var statearr_34742 = state_34739;(statearr_34742[7] = inst_34668__$1);
return statearr_34742;
})();if(cljs.core.truth_(inst_34669))
{var statearr_34743_34789 = state_34739__$1;(statearr_34743_34789[1] = 5);
} else
{var statearr_34744_34790 = state_34739__$1;(statearr_34744_34790[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 5))
{var inst_34675 = cljs.core.deref.call(null,mults);var inst_34676 = cljs.core.vals.call(null,inst_34675);var inst_34677 = cljs.core.seq.call(null,inst_34676);var inst_34678 = inst_34677;var inst_34679 = null;var inst_34680 = 0;var inst_34681 = 0;var state_34739__$1 = (function (){var statearr_34745 = state_34739;(statearr_34745[8] = inst_34680);
(statearr_34745[9] = inst_34681);
(statearr_34745[10] = inst_34678);
(statearr_34745[11] = inst_34679);
return statearr_34745;
})();var statearr_34746_34791 = state_34739__$1;(statearr_34746_34791[2] = null);
(statearr_34746_34791[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 6))
{var inst_34716 = (state_34739[12]);var inst_34718 = (state_34739[13]);var inst_34668 = (state_34739[7]);var inst_34716__$1 = topic_fn.call(null,inst_34668);var inst_34717 = cljs.core.deref.call(null,mults);var inst_34718__$1 = cljs.core.get.call(null,inst_34717,inst_34716__$1);var state_34739__$1 = (function (){var statearr_34747 = state_34739;(statearr_34747[12] = inst_34716__$1);
(statearr_34747[13] = inst_34718__$1);
return statearr_34747;
})();if(cljs.core.truth_(inst_34718__$1))
{var statearr_34748_34792 = state_34739__$1;(statearr_34748_34792[1] = 19);
} else
{var statearr_34749_34793 = state_34739__$1;(statearr_34749_34793[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 7))
{var inst_34735 = (state_34739[2]);var state_34739__$1 = state_34739;var statearr_34750_34794 = state_34739__$1;(statearr_34750_34794[2] = inst_34735);
(statearr_34750_34794[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 8))
{var inst_34680 = (state_34739[8]);var inst_34681 = (state_34739[9]);var inst_34683 = (inst_34681 < inst_34680);var inst_34684 = inst_34683;var state_34739__$1 = state_34739;if(cljs.core.truth_(inst_34684))
{var statearr_34754_34795 = state_34739__$1;(statearr_34754_34795[1] = 10);
} else
{var statearr_34755_34796 = state_34739__$1;(statearr_34755_34796[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 9))
{var inst_34714 = (state_34739[2]);var state_34739__$1 = state_34739;var statearr_34756_34797 = state_34739__$1;(statearr_34756_34797[2] = inst_34714);
(statearr_34756_34797[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 10))
{var inst_34680 = (state_34739[8]);var inst_34681 = (state_34739[9]);var inst_34678 = (state_34739[10]);var inst_34679 = (state_34739[11]);var inst_34686 = cljs.core._nth.call(null,inst_34679,inst_34681);var inst_34687 = cljs.core.async.muxch_STAR_.call(null,inst_34686);var inst_34688 = cljs.core.async.close_BANG_.call(null,inst_34687);var inst_34689 = (inst_34681 + 1);var tmp34751 = inst_34680;var tmp34752 = inst_34678;var tmp34753 = inst_34679;var inst_34678__$1 = tmp34752;var inst_34679__$1 = tmp34753;var inst_34680__$1 = tmp34751;var inst_34681__$1 = inst_34689;var state_34739__$1 = (function (){var statearr_34757 = state_34739;(statearr_34757[8] = inst_34680__$1);
(statearr_34757[9] = inst_34681__$1);
(statearr_34757[14] = inst_34688);
(statearr_34757[10] = inst_34678__$1);
(statearr_34757[11] = inst_34679__$1);
return statearr_34757;
})();var statearr_34758_34798 = state_34739__$1;(statearr_34758_34798[2] = null);
(statearr_34758_34798[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 11))
{var inst_34692 = (state_34739[15]);var inst_34678 = (state_34739[10]);var inst_34692__$1 = cljs.core.seq.call(null,inst_34678);var state_34739__$1 = (function (){var statearr_34759 = state_34739;(statearr_34759[15] = inst_34692__$1);
return statearr_34759;
})();if(inst_34692__$1)
{var statearr_34760_34799 = state_34739__$1;(statearr_34760_34799[1] = 13);
} else
{var statearr_34761_34800 = state_34739__$1;(statearr_34761_34800[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 12))
{var inst_34712 = (state_34739[2]);var state_34739__$1 = state_34739;var statearr_34762_34801 = state_34739__$1;(statearr_34762_34801[2] = inst_34712);
(statearr_34762_34801[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 13))
{var inst_34692 = (state_34739[15]);var inst_34694 = cljs.core.chunked_seq_QMARK_.call(null,inst_34692);var state_34739__$1 = state_34739;if(inst_34694)
{var statearr_34763_34802 = state_34739__$1;(statearr_34763_34802[1] = 16);
} else
{var statearr_34764_34803 = state_34739__$1;(statearr_34764_34803[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 14))
{var state_34739__$1 = state_34739;var statearr_34765_34804 = state_34739__$1;(statearr_34765_34804[2] = null);
(statearr_34765_34804[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 15))
{var inst_34710 = (state_34739[2]);var state_34739__$1 = state_34739;var statearr_34766_34805 = state_34739__$1;(statearr_34766_34805[2] = inst_34710);
(statearr_34766_34805[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 16))
{var inst_34692 = (state_34739[15]);var inst_34696 = cljs.core.chunk_first.call(null,inst_34692);var inst_34697 = cljs.core.chunk_rest.call(null,inst_34692);var inst_34698 = cljs.core.count.call(null,inst_34696);var inst_34678 = inst_34697;var inst_34679 = inst_34696;var inst_34680 = inst_34698;var inst_34681 = 0;var state_34739__$1 = (function (){var statearr_34767 = state_34739;(statearr_34767[8] = inst_34680);
(statearr_34767[9] = inst_34681);
(statearr_34767[10] = inst_34678);
(statearr_34767[11] = inst_34679);
return statearr_34767;
})();var statearr_34768_34806 = state_34739__$1;(statearr_34768_34806[2] = null);
(statearr_34768_34806[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 17))
{var inst_34692 = (state_34739[15]);var inst_34701 = cljs.core.first.call(null,inst_34692);var inst_34702 = cljs.core.async.muxch_STAR_.call(null,inst_34701);var inst_34703 = cljs.core.async.close_BANG_.call(null,inst_34702);var inst_34704 = cljs.core.next.call(null,inst_34692);var inst_34678 = inst_34704;var inst_34679 = null;var inst_34680 = 0;var inst_34681 = 0;var state_34739__$1 = (function (){var statearr_34769 = state_34739;(statearr_34769[8] = inst_34680);
(statearr_34769[9] = inst_34681);
(statearr_34769[16] = inst_34703);
(statearr_34769[10] = inst_34678);
(statearr_34769[11] = inst_34679);
return statearr_34769;
})();var statearr_34770_34807 = state_34739__$1;(statearr_34770_34807[2] = null);
(statearr_34770_34807[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 18))
{var inst_34707 = (state_34739[2]);var state_34739__$1 = state_34739;var statearr_34771_34808 = state_34739__$1;(statearr_34771_34808[2] = inst_34707);
(statearr_34771_34808[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 19))
{var state_34739__$1 = state_34739;var statearr_34772_34809 = state_34739__$1;(statearr_34772_34809[2] = null);
(statearr_34772_34809[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 20))
{var state_34739__$1 = state_34739;var statearr_34773_34810 = state_34739__$1;(statearr_34773_34810[2] = null);
(statearr_34773_34810[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 21))
{var inst_34732 = (state_34739[2]);var state_34739__$1 = (function (){var statearr_34774 = state_34739;(statearr_34774[17] = inst_34732);
return statearr_34774;
})();var statearr_34775_34811 = state_34739__$1;(statearr_34775_34811[2] = null);
(statearr_34775_34811[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 22))
{var inst_34729 = (state_34739[2]);var state_34739__$1 = state_34739;var statearr_34776_34812 = state_34739__$1;(statearr_34776_34812[2] = inst_34729);
(statearr_34776_34812[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 23))
{var inst_34716 = (state_34739[12]);var inst_34720 = (state_34739[2]);var inst_34721 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34716);var state_34739__$1 = (function (){var statearr_34777 = state_34739;(statearr_34777[18] = inst_34720);
return statearr_34777;
})();var statearr_34778_34813 = state_34739__$1;(statearr_34778_34813[2] = inst_34721);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34739__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34740 === 24))
{var inst_34718 = (state_34739[13]);var inst_34668 = (state_34739[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34739,23,Object,null,22);var inst_34725 = cljs.core.async.muxch_STAR_.call(null,inst_34718);var state_34739__$1 = state_34739;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34739__$1,25,inst_34725,inst_34668);
} else
{if((state_val_34740 === 25))
{var inst_34727 = (state_34739[2]);var state_34739__$1 = state_34739;var statearr_34779_34814 = state_34739__$1;(statearr_34779_34814[2] = inst_34727);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34739__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34783 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34783[0] = state_machine__5507__auto__);
(statearr_34783[1] = 1);
return statearr_34783;
});
var state_machine__5507__auto____1 = (function (state_34739){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34739);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34784){if((e34784 instanceof Object))
{var ex__5510__auto__ = e34784;var statearr_34785_34815 = state_34739;(statearr_34785_34815[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34739);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34784;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34816 = state_34739;
state_34739 = G__34816;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34739){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34739);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34786 = f__5522__auto__.call(null);(statearr_34786[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34787);
return statearr_34786;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34953 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34923){var state_val_34924 = (state_34923[1]);if((state_val_34924 === 1))
{var state_34923__$1 = state_34923;var statearr_34925_34954 = state_34923__$1;(statearr_34925_34954[2] = null);
(statearr_34925_34954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 2))
{var inst_34886 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34887 = 0;var state_34923__$1 = (function (){var statearr_34926 = state_34923;(statearr_34926[7] = inst_34886);
(statearr_34926[8] = inst_34887);
return statearr_34926;
})();var statearr_34927_34955 = state_34923__$1;(statearr_34927_34955[2] = null);
(statearr_34927_34955[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 3))
{var inst_34921 = (state_34923[2]);var state_34923__$1 = state_34923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34923__$1,inst_34921);
} else
{if((state_val_34924 === 4))
{var inst_34887 = (state_34923[8]);var inst_34889 = (inst_34887 < cnt);var state_34923__$1 = state_34923;if(cljs.core.truth_(inst_34889))
{var statearr_34928_34956 = state_34923__$1;(statearr_34928_34956[1] = 6);
} else
{var statearr_34929_34957 = state_34923__$1;(statearr_34929_34957[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 5))
{var inst_34907 = (state_34923[2]);var state_34923__$1 = (function (){var statearr_34930 = state_34923;(statearr_34930[9] = inst_34907);
return statearr_34930;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34923__$1,12,dchan);
} else
{if((state_val_34924 === 6))
{var state_34923__$1 = state_34923;var statearr_34931_34958 = state_34923__$1;(statearr_34931_34958[2] = null);
(statearr_34931_34958[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 7))
{var state_34923__$1 = state_34923;var statearr_34932_34959 = state_34923__$1;(statearr_34932_34959[2] = null);
(statearr_34932_34959[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 8))
{var inst_34905 = (state_34923[2]);var state_34923__$1 = state_34923;var statearr_34933_34960 = state_34923__$1;(statearr_34933_34960[2] = inst_34905);
(statearr_34933_34960[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 9))
{var inst_34887 = (state_34923[8]);var inst_34900 = (state_34923[2]);var inst_34901 = (inst_34887 + 1);var inst_34887__$1 = inst_34901;var state_34923__$1 = (function (){var statearr_34934 = state_34923;(statearr_34934[8] = inst_34887__$1);
(statearr_34934[10] = inst_34900);
return statearr_34934;
})();var statearr_34935_34961 = state_34923__$1;(statearr_34935_34961[2] = null);
(statearr_34935_34961[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 10))
{var inst_34891 = (state_34923[2]);var inst_34892 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34923__$1 = (function (){var statearr_34936 = state_34923;(statearr_34936[11] = inst_34891);
return statearr_34936;
})();var statearr_34937_34962 = state_34923__$1;(statearr_34937_34962[2] = inst_34892);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34923__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 11))
{var inst_34887 = (state_34923[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34923,10,Object,null,9);var inst_34896 = chs__$1.call(null,inst_34887);var inst_34897 = done.call(null,inst_34887);var inst_34898 = cljs.core.async.take_BANG_.call(null,inst_34896,inst_34897);var state_34923__$1 = state_34923;var statearr_34938_34963 = state_34923__$1;(statearr_34938_34963[2] = inst_34898);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34923__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 12))
{var inst_34909 = (state_34923[12]);var inst_34909__$1 = (state_34923[2]);var inst_34910 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34909__$1);var state_34923__$1 = (function (){var statearr_34939 = state_34923;(statearr_34939[12] = inst_34909__$1);
return statearr_34939;
})();if(cljs.core.truth_(inst_34910))
{var statearr_34940_34964 = state_34923__$1;(statearr_34940_34964[1] = 13);
} else
{var statearr_34941_34965 = state_34923__$1;(statearr_34941_34965[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 13))
{var inst_34912 = cljs.core.async.close_BANG_.call(null,out);var state_34923__$1 = state_34923;var statearr_34942_34966 = state_34923__$1;(statearr_34942_34966[2] = inst_34912);
(statearr_34942_34966[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 14))
{var inst_34909 = (state_34923[12]);var inst_34914 = cljs.core.apply.call(null,f,inst_34909);var state_34923__$1 = state_34923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34923__$1,16,out,inst_34914);
} else
{if((state_val_34924 === 15))
{var inst_34919 = (state_34923[2]);var state_34923__$1 = state_34923;var statearr_34943_34967 = state_34923__$1;(statearr_34943_34967[2] = inst_34919);
(statearr_34943_34967[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34924 === 16))
{var inst_34916 = (state_34923[2]);var state_34923__$1 = (function (){var statearr_34944 = state_34923;(statearr_34944[13] = inst_34916);
return statearr_34944;
})();var statearr_34945_34968 = state_34923__$1;(statearr_34945_34968[2] = null);
(statearr_34945_34968[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34949 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34949[0] = state_machine__5507__auto__);
(statearr_34949[1] = 1);
return statearr_34949;
});
var state_machine__5507__auto____1 = (function (state_34923){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34923);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34950){if((e34950 instanceof Object))
{var ex__5510__auto__ = e34950;var statearr_34951_34969 = state_34923;(statearr_34951_34969[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34923);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34950;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34970 = state_34923;
state_34923 = G__34970;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34923){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34952 = f__5522__auto__.call(null);(statearr_34952[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34953);
return statearr_34952;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35078 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35054){var state_val_35055 = (state_35054[1]);if((state_val_35055 === 1))
{var inst_35025 = cljs.core.vec.call(null,chs);var inst_35026 = inst_35025;var state_35054__$1 = (function (){var statearr_35056 = state_35054;(statearr_35056[7] = inst_35026);
return statearr_35056;
})();var statearr_35057_35079 = state_35054__$1;(statearr_35057_35079[2] = null);
(statearr_35057_35079[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35055 === 2))
{var inst_35026 = (state_35054[7]);var inst_35028 = cljs.core.count.call(null,inst_35026);var inst_35029 = (inst_35028 > 0);var state_35054__$1 = state_35054;if(cljs.core.truth_(inst_35029))
{var statearr_35058_35080 = state_35054__$1;(statearr_35058_35080[1] = 4);
} else
{var statearr_35059_35081 = state_35054__$1;(statearr_35059_35081[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35055 === 3))
{var inst_35052 = (state_35054[2]);var state_35054__$1 = state_35054;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35054__$1,inst_35052);
} else
{if((state_val_35055 === 4))
{var inst_35026 = (state_35054[7]);var state_35054__$1 = state_35054;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35054__$1,7,inst_35026);
} else
{if((state_val_35055 === 5))
{var inst_35048 = cljs.core.async.close_BANG_.call(null,out);var state_35054__$1 = state_35054;var statearr_35060_35082 = state_35054__$1;(statearr_35060_35082[2] = inst_35048);
(statearr_35060_35082[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35055 === 6))
{var inst_35050 = (state_35054[2]);var state_35054__$1 = state_35054;var statearr_35061_35083 = state_35054__$1;(statearr_35061_35083[2] = inst_35050);
(statearr_35061_35083[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35055 === 7))
{var inst_35034 = (state_35054[8]);var inst_35033 = (state_35054[9]);var inst_35033__$1 = (state_35054[2]);var inst_35034__$1 = cljs.core.nth.call(null,inst_35033__$1,0,null);var inst_35035 = cljs.core.nth.call(null,inst_35033__$1,1,null);var inst_35036 = (inst_35034__$1 == null);var state_35054__$1 = (function (){var statearr_35062 = state_35054;(statearr_35062[8] = inst_35034__$1);
(statearr_35062[10] = inst_35035);
(statearr_35062[9] = inst_35033__$1);
return statearr_35062;
})();if(cljs.core.truth_(inst_35036))
{var statearr_35063_35084 = state_35054__$1;(statearr_35063_35084[1] = 8);
} else
{var statearr_35064_35085 = state_35054__$1;(statearr_35064_35085[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35055 === 8))
{var inst_35026 = (state_35054[7]);var inst_35034 = (state_35054[8]);var inst_35035 = (state_35054[10]);var inst_35033 = (state_35054[9]);var inst_35038 = (function (){var c = inst_35035;var v = inst_35034;var vec__35031 = inst_35033;var cs = inst_35026;return ((function (c,v,vec__35031,cs,inst_35026,inst_35034,inst_35035,inst_35033,state_val_35055){
return (function (p1__34971_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34971_SHARP_);
});
;})(c,v,vec__35031,cs,inst_35026,inst_35034,inst_35035,inst_35033,state_val_35055))
})();var inst_35039 = cljs.core.filterv.call(null,inst_35038,inst_35026);var inst_35026__$1 = inst_35039;var state_35054__$1 = (function (){var statearr_35065 = state_35054;(statearr_35065[7] = inst_35026__$1);
return statearr_35065;
})();var statearr_35066_35086 = state_35054__$1;(statearr_35066_35086[2] = null);
(statearr_35066_35086[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35055 === 9))
{var inst_35034 = (state_35054[8]);var state_35054__$1 = state_35054;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35054__$1,11,out,inst_35034);
} else
{if((state_val_35055 === 10))
{var inst_35046 = (state_35054[2]);var state_35054__$1 = state_35054;var statearr_35068_35087 = state_35054__$1;(statearr_35068_35087[2] = inst_35046);
(statearr_35068_35087[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35055 === 11))
{var inst_35026 = (state_35054[7]);var inst_35043 = (state_35054[2]);var tmp35067 = inst_35026;var inst_35026__$1 = tmp35067;var state_35054__$1 = (function (){var statearr_35069 = state_35054;(statearr_35069[7] = inst_35026__$1);
(statearr_35069[11] = inst_35043);
return statearr_35069;
})();var statearr_35070_35088 = state_35054__$1;(statearr_35070_35088[2] = null);
(statearr_35070_35088[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35074 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35074[0] = state_machine__5507__auto__);
(statearr_35074[1] = 1);
return statearr_35074;
});
var state_machine__5507__auto____1 = (function (state_35054){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35054);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35075){if((e35075 instanceof Object))
{var ex__5510__auto__ = e35075;var statearr_35076_35089 = state_35054;(statearr_35076_35089[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35054);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35075;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35090 = state_35054;
state_35054 = G__35090;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35054){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35054);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35077 = f__5522__auto__.call(null);(statearr_35077[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35078);
return statearr_35077;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35183 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35160){var state_val_35161 = (state_35160[1]);if((state_val_35161 === 1))
{var inst_35137 = 0;var state_35160__$1 = (function (){var statearr_35162 = state_35160;(statearr_35162[7] = inst_35137);
return statearr_35162;
})();var statearr_35163_35184 = state_35160__$1;(statearr_35163_35184[2] = null);
(statearr_35163_35184[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35161 === 2))
{var inst_35137 = (state_35160[7]);var inst_35139 = (inst_35137 < n);var state_35160__$1 = state_35160;if(cljs.core.truth_(inst_35139))
{var statearr_35164_35185 = state_35160__$1;(statearr_35164_35185[1] = 4);
} else
{var statearr_35165_35186 = state_35160__$1;(statearr_35165_35186[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35161 === 3))
{var inst_35157 = (state_35160[2]);var inst_35158 = cljs.core.async.close_BANG_.call(null,out);var state_35160__$1 = (function (){var statearr_35166 = state_35160;(statearr_35166[8] = inst_35157);
return statearr_35166;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35160__$1,inst_35158);
} else
{if((state_val_35161 === 4))
{var state_35160__$1 = state_35160;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35160__$1,7,ch);
} else
{if((state_val_35161 === 5))
{var state_35160__$1 = state_35160;var statearr_35167_35187 = state_35160__$1;(statearr_35167_35187[2] = null);
(statearr_35167_35187[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35161 === 6))
{var inst_35155 = (state_35160[2]);var state_35160__$1 = state_35160;var statearr_35168_35188 = state_35160__$1;(statearr_35168_35188[2] = inst_35155);
(statearr_35168_35188[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35161 === 7))
{var inst_35142 = (state_35160[9]);var inst_35142__$1 = (state_35160[2]);var inst_35143 = (inst_35142__$1 == null);var inst_35144 = cljs.core.not.call(null,inst_35143);var state_35160__$1 = (function (){var statearr_35169 = state_35160;(statearr_35169[9] = inst_35142__$1);
return statearr_35169;
})();if(inst_35144)
{var statearr_35170_35189 = state_35160__$1;(statearr_35170_35189[1] = 8);
} else
{var statearr_35171_35190 = state_35160__$1;(statearr_35171_35190[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35161 === 8))
{var inst_35142 = (state_35160[9]);var state_35160__$1 = state_35160;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35160__$1,11,out,inst_35142);
} else
{if((state_val_35161 === 9))
{var state_35160__$1 = state_35160;var statearr_35172_35191 = state_35160__$1;(statearr_35172_35191[2] = null);
(statearr_35172_35191[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35161 === 10))
{var inst_35152 = (state_35160[2]);var state_35160__$1 = state_35160;var statearr_35173_35192 = state_35160__$1;(statearr_35173_35192[2] = inst_35152);
(statearr_35173_35192[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35161 === 11))
{var inst_35137 = (state_35160[7]);var inst_35147 = (state_35160[2]);var inst_35148 = (inst_35137 + 1);var inst_35137__$1 = inst_35148;var state_35160__$1 = (function (){var statearr_35174 = state_35160;(statearr_35174[10] = inst_35147);
(statearr_35174[7] = inst_35137__$1);
return statearr_35174;
})();var statearr_35175_35193 = state_35160__$1;(statearr_35175_35193[2] = null);
(statearr_35175_35193[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35179 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35179[0] = state_machine__5507__auto__);
(statearr_35179[1] = 1);
return statearr_35179;
});
var state_machine__5507__auto____1 = (function (state_35160){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35160);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35180){if((e35180 instanceof Object))
{var ex__5510__auto__ = e35180;var statearr_35181_35194 = state_35160;(statearr_35181_35194[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35160);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35180;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35195 = state_35160;
state_35160 = G__35195;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35160){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35160);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35182 = f__5522__auto__.call(null);(statearr_35182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35183);
return statearr_35182;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35292 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35267){var state_val_35268 = (state_35267[1]);if((state_val_35268 === 1))
{var inst_35244 = null;var state_35267__$1 = (function (){var statearr_35269 = state_35267;(statearr_35269[7] = inst_35244);
return statearr_35269;
})();var statearr_35270_35293 = state_35267__$1;(statearr_35270_35293[2] = null);
(statearr_35270_35293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35268 === 2))
{var state_35267__$1 = state_35267;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35267__$1,4,ch);
} else
{if((state_val_35268 === 3))
{var inst_35264 = (state_35267[2]);var inst_35265 = cljs.core.async.close_BANG_.call(null,out);var state_35267__$1 = (function (){var statearr_35271 = state_35267;(statearr_35271[8] = inst_35264);
return statearr_35271;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35267__$1,inst_35265);
} else
{if((state_val_35268 === 4))
{var inst_35247 = (state_35267[9]);var inst_35247__$1 = (state_35267[2]);var inst_35248 = (inst_35247__$1 == null);var inst_35249 = cljs.core.not.call(null,inst_35248);var state_35267__$1 = (function (){var statearr_35272 = state_35267;(statearr_35272[9] = inst_35247__$1);
return statearr_35272;
})();if(inst_35249)
{var statearr_35273_35294 = state_35267__$1;(statearr_35273_35294[1] = 5);
} else
{var statearr_35274_35295 = state_35267__$1;(statearr_35274_35295[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35268 === 5))
{var inst_35247 = (state_35267[9]);var inst_35244 = (state_35267[7]);var inst_35251 = cljs.core._EQ_.call(null,inst_35247,inst_35244);var state_35267__$1 = state_35267;if(inst_35251)
{var statearr_35275_35296 = state_35267__$1;(statearr_35275_35296[1] = 8);
} else
{var statearr_35276_35297 = state_35267__$1;(statearr_35276_35297[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35268 === 6))
{var state_35267__$1 = state_35267;var statearr_35278_35298 = state_35267__$1;(statearr_35278_35298[2] = null);
(statearr_35278_35298[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35268 === 7))
{var inst_35262 = (state_35267[2]);var state_35267__$1 = state_35267;var statearr_35279_35299 = state_35267__$1;(statearr_35279_35299[2] = inst_35262);
(statearr_35279_35299[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35268 === 8))
{var inst_35244 = (state_35267[7]);var tmp35277 = inst_35244;var inst_35244__$1 = tmp35277;var state_35267__$1 = (function (){var statearr_35280 = state_35267;(statearr_35280[7] = inst_35244__$1);
return statearr_35280;
})();var statearr_35281_35300 = state_35267__$1;(statearr_35281_35300[2] = null);
(statearr_35281_35300[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35268 === 9))
{var inst_35247 = (state_35267[9]);var state_35267__$1 = state_35267;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35267__$1,11,out,inst_35247);
} else
{if((state_val_35268 === 10))
{var inst_35259 = (state_35267[2]);var state_35267__$1 = state_35267;var statearr_35282_35301 = state_35267__$1;(statearr_35282_35301[2] = inst_35259);
(statearr_35282_35301[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35268 === 11))
{var inst_35247 = (state_35267[9]);var inst_35256 = (state_35267[2]);var inst_35244 = inst_35247;var state_35267__$1 = (function (){var statearr_35283 = state_35267;(statearr_35283[10] = inst_35256);
(statearr_35283[7] = inst_35244);
return statearr_35283;
})();var statearr_35284_35302 = state_35267__$1;(statearr_35284_35302[2] = null);
(statearr_35284_35302[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35288 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35288[0] = state_machine__5507__auto__);
(statearr_35288[1] = 1);
return statearr_35288;
});
var state_machine__5507__auto____1 = (function (state_35267){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35267);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35289){if((e35289 instanceof Object))
{var ex__5510__auto__ = e35289;var statearr_35290_35303 = state_35267;(statearr_35290_35303[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35267);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35289;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35304 = state_35267;
state_35267 = G__35304;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35267){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35267);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35291 = f__5522__auto__.call(null);(statearr_35291[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35292);
return statearr_35291;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35439 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35409){var state_val_35410 = (state_35409[1]);if((state_val_35410 === 1))
{var inst_35372 = (new Array(n));var inst_35373 = inst_35372;var inst_35374 = 0;var state_35409__$1 = (function (){var statearr_35411 = state_35409;(statearr_35411[7] = inst_35373);
(statearr_35411[8] = inst_35374);
return statearr_35411;
})();var statearr_35412_35440 = state_35409__$1;(statearr_35412_35440[2] = null);
(statearr_35412_35440[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 2))
{var state_35409__$1 = state_35409;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35409__$1,4,ch);
} else
{if((state_val_35410 === 3))
{var inst_35407 = (state_35409[2]);var state_35409__$1 = state_35409;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35409__$1,inst_35407);
} else
{if((state_val_35410 === 4))
{var inst_35377 = (state_35409[9]);var inst_35377__$1 = (state_35409[2]);var inst_35378 = (inst_35377__$1 == null);var inst_35379 = cljs.core.not.call(null,inst_35378);var state_35409__$1 = (function (){var statearr_35413 = state_35409;(statearr_35413[9] = inst_35377__$1);
return statearr_35413;
})();if(inst_35379)
{var statearr_35414_35441 = state_35409__$1;(statearr_35414_35441[1] = 5);
} else
{var statearr_35415_35442 = state_35409__$1;(statearr_35415_35442[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 5))
{var inst_35373 = (state_35409[7]);var inst_35374 = (state_35409[8]);var inst_35382 = (state_35409[10]);var inst_35377 = (state_35409[9]);var inst_35381 = (inst_35373[inst_35374] = inst_35377);var inst_35382__$1 = (inst_35374 + 1);var inst_35383 = (inst_35382__$1 < n);var state_35409__$1 = (function (){var statearr_35416 = state_35409;(statearr_35416[11] = inst_35381);
(statearr_35416[10] = inst_35382__$1);
return statearr_35416;
})();if(cljs.core.truth_(inst_35383))
{var statearr_35417_35443 = state_35409__$1;(statearr_35417_35443[1] = 8);
} else
{var statearr_35418_35444 = state_35409__$1;(statearr_35418_35444[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 6))
{var inst_35374 = (state_35409[8]);var inst_35395 = (inst_35374 > 0);var state_35409__$1 = state_35409;if(cljs.core.truth_(inst_35395))
{var statearr_35420_35445 = state_35409__$1;(statearr_35420_35445[1] = 12);
} else
{var statearr_35421_35446 = state_35409__$1;(statearr_35421_35446[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 7))
{var inst_35405 = (state_35409[2]);var state_35409__$1 = state_35409;var statearr_35422_35447 = state_35409__$1;(statearr_35422_35447[2] = inst_35405);
(statearr_35422_35447[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 8))
{var inst_35373 = (state_35409[7]);var inst_35382 = (state_35409[10]);var tmp35419 = inst_35373;var inst_35373__$1 = tmp35419;var inst_35374 = inst_35382;var state_35409__$1 = (function (){var statearr_35423 = state_35409;(statearr_35423[7] = inst_35373__$1);
(statearr_35423[8] = inst_35374);
return statearr_35423;
})();var statearr_35424_35448 = state_35409__$1;(statearr_35424_35448[2] = null);
(statearr_35424_35448[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 9))
{var inst_35373 = (state_35409[7]);var inst_35387 = cljs.core.vec.call(null,inst_35373);var state_35409__$1 = state_35409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35409__$1,11,out,inst_35387);
} else
{if((state_val_35410 === 10))
{var inst_35393 = (state_35409[2]);var state_35409__$1 = state_35409;var statearr_35425_35449 = state_35409__$1;(statearr_35425_35449[2] = inst_35393);
(statearr_35425_35449[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 11))
{var inst_35389 = (state_35409[2]);var inst_35390 = (new Array(n));var inst_35373 = inst_35390;var inst_35374 = 0;var state_35409__$1 = (function (){var statearr_35426 = state_35409;(statearr_35426[7] = inst_35373);
(statearr_35426[8] = inst_35374);
(statearr_35426[12] = inst_35389);
return statearr_35426;
})();var statearr_35427_35450 = state_35409__$1;(statearr_35427_35450[2] = null);
(statearr_35427_35450[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 12))
{var inst_35373 = (state_35409[7]);var inst_35397 = cljs.core.vec.call(null,inst_35373);var state_35409__$1 = state_35409;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35409__$1,15,out,inst_35397);
} else
{if((state_val_35410 === 13))
{var state_35409__$1 = state_35409;var statearr_35428_35451 = state_35409__$1;(statearr_35428_35451[2] = null);
(statearr_35428_35451[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 14))
{var inst_35402 = (state_35409[2]);var inst_35403 = cljs.core.async.close_BANG_.call(null,out);var state_35409__$1 = (function (){var statearr_35429 = state_35409;(statearr_35429[13] = inst_35402);
return statearr_35429;
})();var statearr_35430_35452 = state_35409__$1;(statearr_35430_35452[2] = inst_35403);
(statearr_35430_35452[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35410 === 15))
{var inst_35399 = (state_35409[2]);var state_35409__$1 = state_35409;var statearr_35431_35453 = state_35409__$1;(statearr_35431_35453[2] = inst_35399);
(statearr_35431_35453[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35435 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35435[0] = state_machine__5507__auto__);
(statearr_35435[1] = 1);
return statearr_35435;
});
var state_machine__5507__auto____1 = (function (state_35409){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35409);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35436){if((e35436 instanceof Object))
{var ex__5510__auto__ = e35436;var statearr_35437_35454 = state_35409;(statearr_35437_35454[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35409);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35436;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35455 = state_35409;
state_35409 = G__35455;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35409){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35409);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35438 = f__5522__auto__.call(null);(statearr_35438[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35439);
return statearr_35438;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35598 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35568){var state_val_35569 = (state_35568[1]);if((state_val_35569 === 1))
{var inst_35527 = [];var inst_35528 = inst_35527;var inst_35529 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35568__$1 = (function (){var statearr_35570 = state_35568;(statearr_35570[7] = inst_35529);
(statearr_35570[8] = inst_35528);
return statearr_35570;
})();var statearr_35571_35599 = state_35568__$1;(statearr_35571_35599[2] = null);
(statearr_35571_35599[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 2))
{var state_35568__$1 = state_35568;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35568__$1,4,ch);
} else
{if((state_val_35569 === 3))
{var inst_35566 = (state_35568[2]);var state_35568__$1 = state_35568;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35568__$1,inst_35566);
} else
{if((state_val_35569 === 4))
{var inst_35532 = (state_35568[9]);var inst_35532__$1 = (state_35568[2]);var inst_35533 = (inst_35532__$1 == null);var inst_35534 = cljs.core.not.call(null,inst_35533);var state_35568__$1 = (function (){var statearr_35572 = state_35568;(statearr_35572[9] = inst_35532__$1);
return statearr_35572;
})();if(inst_35534)
{var statearr_35573_35600 = state_35568__$1;(statearr_35573_35600[1] = 5);
} else
{var statearr_35574_35601 = state_35568__$1;(statearr_35574_35601[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 5))
{var inst_35536 = (state_35568[10]);var inst_35532 = (state_35568[9]);var inst_35529 = (state_35568[7]);var inst_35536__$1 = f.call(null,inst_35532);var inst_35537 = cljs.core._EQ_.call(null,inst_35536__$1,inst_35529);var inst_35538 = cljs.core.keyword_identical_QMARK_.call(null,inst_35529,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35539 = (inst_35537) || (inst_35538);var state_35568__$1 = (function (){var statearr_35575 = state_35568;(statearr_35575[10] = inst_35536__$1);
return statearr_35575;
})();if(cljs.core.truth_(inst_35539))
{var statearr_35576_35602 = state_35568__$1;(statearr_35576_35602[1] = 8);
} else
{var statearr_35577_35603 = state_35568__$1;(statearr_35577_35603[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 6))
{var inst_35528 = (state_35568[8]);var inst_35553 = inst_35528.length;var inst_35554 = (inst_35553 > 0);var state_35568__$1 = state_35568;if(cljs.core.truth_(inst_35554))
{var statearr_35579_35604 = state_35568__$1;(statearr_35579_35604[1] = 12);
} else
{var statearr_35580_35605 = state_35568__$1;(statearr_35580_35605[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 7))
{var inst_35564 = (state_35568[2]);var state_35568__$1 = state_35568;var statearr_35581_35606 = state_35568__$1;(statearr_35581_35606[2] = inst_35564);
(statearr_35581_35606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 8))
{var inst_35536 = (state_35568[10]);var inst_35532 = (state_35568[9]);var inst_35528 = (state_35568[8]);var inst_35541 = inst_35528.push(inst_35532);var tmp35578 = inst_35528;var inst_35528__$1 = tmp35578;var inst_35529 = inst_35536;var state_35568__$1 = (function (){var statearr_35582 = state_35568;(statearr_35582[11] = inst_35541);
(statearr_35582[7] = inst_35529);
(statearr_35582[8] = inst_35528__$1);
return statearr_35582;
})();var statearr_35583_35607 = state_35568__$1;(statearr_35583_35607[2] = null);
(statearr_35583_35607[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 9))
{var inst_35528 = (state_35568[8]);var inst_35544 = cljs.core.vec.call(null,inst_35528);var state_35568__$1 = state_35568;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35568__$1,11,out,inst_35544);
} else
{if((state_val_35569 === 10))
{var inst_35551 = (state_35568[2]);var state_35568__$1 = state_35568;var statearr_35584_35608 = state_35568__$1;(statearr_35584_35608[2] = inst_35551);
(statearr_35584_35608[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 11))
{var inst_35536 = (state_35568[10]);var inst_35532 = (state_35568[9]);var inst_35546 = (state_35568[2]);var inst_35547 = [];var inst_35548 = inst_35547.push(inst_35532);var inst_35528 = inst_35547;var inst_35529 = inst_35536;var state_35568__$1 = (function (){var statearr_35585 = state_35568;(statearr_35585[7] = inst_35529);
(statearr_35585[8] = inst_35528);
(statearr_35585[12] = inst_35546);
(statearr_35585[13] = inst_35548);
return statearr_35585;
})();var statearr_35586_35609 = state_35568__$1;(statearr_35586_35609[2] = null);
(statearr_35586_35609[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 12))
{var inst_35528 = (state_35568[8]);var inst_35556 = cljs.core.vec.call(null,inst_35528);var state_35568__$1 = state_35568;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35568__$1,15,out,inst_35556);
} else
{if((state_val_35569 === 13))
{var state_35568__$1 = state_35568;var statearr_35587_35610 = state_35568__$1;(statearr_35587_35610[2] = null);
(statearr_35587_35610[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 14))
{var inst_35561 = (state_35568[2]);var inst_35562 = cljs.core.async.close_BANG_.call(null,out);var state_35568__$1 = (function (){var statearr_35588 = state_35568;(statearr_35588[14] = inst_35561);
return statearr_35588;
})();var statearr_35589_35611 = state_35568__$1;(statearr_35589_35611[2] = inst_35562);
(statearr_35589_35611[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35569 === 15))
{var inst_35558 = (state_35568[2]);var state_35568__$1 = state_35568;var statearr_35590_35612 = state_35568__$1;(statearr_35590_35612[2] = inst_35558);
(statearr_35590_35612[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35594 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35594[0] = state_machine__5507__auto__);
(statearr_35594[1] = 1);
return statearr_35594;
});
var state_machine__5507__auto____1 = (function (state_35568){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35568);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35595){if((e35595 instanceof Object))
{var ex__5510__auto__ = e35595;var statearr_35596_35613 = state_35568;(statearr_35596_35613[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35568);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35595;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35614 = state_35568;
state_35568 = G__35614;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35568){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35568);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35597 = f__5522__auto__.call(null);(statearr_35597[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35598);
return statearr_35597;
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
