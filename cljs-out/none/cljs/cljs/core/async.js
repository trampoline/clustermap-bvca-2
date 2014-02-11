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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13242 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13242 = (function (f,fn_handler,meta13243){
this.f = f;
this.fn_handler = fn_handler;
this.meta13243 = meta13243;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13242.cljs$lang$type = true;
cljs.core.async.t13242.cljs$lang$ctorStr = "cljs.core.async/t13242";
cljs.core.async.t13242.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13242");
});
cljs.core.async.t13242.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13242.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13242.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13244){var self__ = this;
var _13244__$1 = this;return self__.meta13243;
});
cljs.core.async.t13242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13244,meta13243__$1){var self__ = this;
var _13244__$1 = this;return (new cljs.core.async.t13242(self__.f,self__.fn_handler,meta13243__$1));
});
cljs.core.async.__GT_t13242 = (function __GT_t13242(f__$1,fn_handler__$1,meta13243){return (new cljs.core.async.t13242(f__$1,fn_handler__$1,meta13243));
});
}
return (new cljs.core.async.t13242(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13246 = buff;if(G__13246)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13246.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13246.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13246);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13246);
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
{var val_13247 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13247);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13247);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13248 = n;var x_13249 = 0;while(true){
if((x_13249 < n__4248__auto___13248))
{(a[x_13249] = 0);
{
var G__13250 = (x_13249 + 1);
x_13249 = G__13250;
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
var G__13251 = (i + 1);
i = G__13251;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13255 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13255 = (function (flag,alt_flag,meta13256){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13256 = meta13256;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13255.cljs$lang$type = true;
cljs.core.async.t13255.cljs$lang$ctorStr = "cljs.core.async/t13255";
cljs.core.async.t13255.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13255");
});
cljs.core.async.t13255.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13255.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13255.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13255.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13257){var self__ = this;
var _13257__$1 = this;return self__.meta13256;
});
cljs.core.async.t13255.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13257,meta13256__$1){var self__ = this;
var _13257__$1 = this;return (new cljs.core.async.t13255(self__.flag,self__.alt_flag,meta13256__$1));
});
cljs.core.async.__GT_t13255 = (function __GT_t13255(flag__$1,alt_flag__$1,meta13256){return (new cljs.core.async.t13255(flag__$1,alt_flag__$1,meta13256));
});
}
return (new cljs.core.async.t13255(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13261 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13261 = (function (cb,flag,alt_handler,meta13262){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13262 = meta13262;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13261.cljs$lang$type = true;
cljs.core.async.t13261.cljs$lang$ctorStr = "cljs.core.async/t13261";
cljs.core.async.t13261.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13261");
});
cljs.core.async.t13261.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13261.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13261.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13261.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13263){var self__ = this;
var _13263__$1 = this;return self__.meta13262;
});
cljs.core.async.t13261.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13263,meta13262__$1){var self__ = this;
var _13263__$1 = this;return (new cljs.core.async.t13261(self__.cb,self__.flag,self__.alt_handler,meta13262__$1));
});
cljs.core.async.__GT_t13261 = (function __GT_t13261(cb__$1,flag__$1,alt_handler__$1,meta13262){return (new cljs.core.async.t13261(cb__$1,flag__$1,alt_handler__$1,meta13262));
});
}
return (new cljs.core.async.t13261(cb,flag,alt_handler,null));
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
return (function (p1__13264_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13264_SHARP_,port], null));
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
var G__13265 = (i + 1);
i = G__13265;
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
var alts_BANG___delegate = function (ports,p__13266){var map__13268 = p__13266;var map__13268__$1 = ((cljs.core.seq_QMARK_.call(null,map__13268))?cljs.core.apply.call(null,cljs.core.hash_map,map__13268):map__13268);var opts = map__13268__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13266 = null;if (arguments.length > 1) {
  p__13266 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13266);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13269){
var ports = cljs.core.first(arglist__13269);
var p__13266 = cljs.core.rest(arglist__13269);
return alts_BANG___delegate(ports,p__13266);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13277 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13277 = (function (ch,f,map_LT_,meta13278){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13278 = meta13278;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13277.cljs$lang$type = true;
cljs.core.async.t13277.cljs$lang$ctorStr = "cljs.core.async/t13277";
cljs.core.async.t13277.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13277");
});
cljs.core.async.t13277.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13277.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13277.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13277.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13280 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13280 = (function (fn1,_,meta13278,ch,f,map_LT_,meta13281){
this.fn1 = fn1;
this._ = _;
this.meta13278 = meta13278;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13281 = meta13281;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13280.cljs$lang$type = true;
cljs.core.async.t13280.cljs$lang$ctorStr = "cljs.core.async/t13280";
cljs.core.async.t13280.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13280");
});
cljs.core.async.t13280.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13280.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13280.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13280.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13270_SHARP_){return f1.call(null,(((p1__13270_SHARP_ == null))?null:self__.f.call(null,p1__13270_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13280.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13282){var self__ = this;
var _13282__$1 = this;return self__.meta13281;
});
cljs.core.async.t13280.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13282,meta13281__$1){var self__ = this;
var _13282__$1 = this;return (new cljs.core.async.t13280(self__.fn1,self__._,self__.meta13278,self__.ch,self__.f,self__.map_LT_,meta13281__$1));
});
cljs.core.async.__GT_t13280 = (function __GT_t13280(fn1__$1,___$2,meta13278__$1,ch__$2,f__$2,map_LT___$2,meta13281){return (new cljs.core.async.t13280(fn1__$1,___$2,meta13278__$1,ch__$2,f__$2,map_LT___$2,meta13281));
});
}
return (new cljs.core.async.t13280(fn1,___$1,self__.meta13278,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13277.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13277.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13277.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13279){var self__ = this;
var _13279__$1 = this;return self__.meta13278;
});
cljs.core.async.t13277.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13279,meta13278__$1){var self__ = this;
var _13279__$1 = this;return (new cljs.core.async.t13277(self__.ch,self__.f,self__.map_LT_,meta13278__$1));
});
cljs.core.async.__GT_t13277 = (function __GT_t13277(ch__$1,f__$1,map_LT___$1,meta13278){return (new cljs.core.async.t13277(ch__$1,f__$1,map_LT___$1,meta13278));
});
}
return (new cljs.core.async.t13277(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13286 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13286 = (function (ch,f,map_GT_,meta13287){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13287 = meta13287;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13286.cljs$lang$type = true;
cljs.core.async.t13286.cljs$lang$ctorStr = "cljs.core.async/t13286";
cljs.core.async.t13286.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13286");
});
cljs.core.async.t13286.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13286.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13286.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13288){var self__ = this;
var _13288__$1 = this;return self__.meta13287;
});
cljs.core.async.t13286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13288,meta13287__$1){var self__ = this;
var _13288__$1 = this;return (new cljs.core.async.t13286(self__.ch,self__.f,self__.map_GT_,meta13287__$1));
});
cljs.core.async.__GT_t13286 = (function __GT_t13286(ch__$1,f__$1,map_GT___$1,meta13287){return (new cljs.core.async.t13286(ch__$1,f__$1,map_GT___$1,meta13287));
});
}
return (new cljs.core.async.t13286(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13292 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13292 = (function (ch,p,filter_GT_,meta13293){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13293 = meta13293;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13292.cljs$lang$type = true;
cljs.core.async.t13292.cljs$lang$ctorStr = "cljs.core.async/t13292";
cljs.core.async.t13292.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13292");
});
cljs.core.async.t13292.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13292.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13292.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13292.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13292.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13292.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13294){var self__ = this;
var _13294__$1 = this;return self__.meta13293;
});
cljs.core.async.t13292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13294,meta13293__$1){var self__ = this;
var _13294__$1 = this;return (new cljs.core.async.t13292(self__.ch,self__.p,self__.filter_GT_,meta13293__$1));
});
cljs.core.async.__GT_t13292 = (function __GT_t13292(ch__$1,p__$1,filter_GT___$1,meta13293){return (new cljs.core.async.t13292(ch__$1,p__$1,filter_GT___$1,meta13293));
});
}
return (new cljs.core.async.t13292(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13377 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13356){var state_val_13357 = (state_13356[1]);if((state_val_13357 === 1))
{var state_13356__$1 = state_13356;var statearr_13358_13378 = state_13356__$1;(statearr_13358_13378[2] = null);
(statearr_13358_13378[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13357 === 2))
{var state_13356__$1 = state_13356;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13356__$1,4,ch);
} else
{if((state_val_13357 === 3))
{var inst_13354 = (state_13356[2]);var state_13356__$1 = state_13356;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13356__$1,inst_13354);
} else
{if((state_val_13357 === 4))
{var inst_13338 = (state_13356[7]);var inst_13338__$1 = (state_13356[2]);var inst_13339 = (inst_13338__$1 == null);var state_13356__$1 = (function (){var statearr_13359 = state_13356;(statearr_13359[7] = inst_13338__$1);
return statearr_13359;
})();if(cljs.core.truth_(inst_13339))
{var statearr_13360_13379 = state_13356__$1;(statearr_13360_13379[1] = 5);
} else
{var statearr_13361_13380 = state_13356__$1;(statearr_13361_13380[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13357 === 5))
{var inst_13341 = cljs.core.async.close_BANG_.call(null,out);var state_13356__$1 = state_13356;var statearr_13362_13381 = state_13356__$1;(statearr_13362_13381[2] = inst_13341);
(statearr_13362_13381[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13357 === 6))
{var inst_13338 = (state_13356[7]);var inst_13343 = p.call(null,inst_13338);var state_13356__$1 = state_13356;if(cljs.core.truth_(inst_13343))
{var statearr_13363_13382 = state_13356__$1;(statearr_13363_13382[1] = 8);
} else
{var statearr_13364_13383 = state_13356__$1;(statearr_13364_13383[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13357 === 7))
{var inst_13352 = (state_13356[2]);var state_13356__$1 = state_13356;var statearr_13365_13384 = state_13356__$1;(statearr_13365_13384[2] = inst_13352);
(statearr_13365_13384[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13357 === 8))
{var inst_13338 = (state_13356[7]);var state_13356__$1 = state_13356;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13356__$1,11,out,inst_13338);
} else
{if((state_val_13357 === 9))
{var state_13356__$1 = state_13356;var statearr_13366_13385 = state_13356__$1;(statearr_13366_13385[2] = null);
(statearr_13366_13385[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13357 === 10))
{var inst_13349 = (state_13356[2]);var state_13356__$1 = (function (){var statearr_13367 = state_13356;(statearr_13367[8] = inst_13349);
return statearr_13367;
})();var statearr_13368_13386 = state_13356__$1;(statearr_13368_13386[2] = null);
(statearr_13368_13386[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13357 === 11))
{var inst_13346 = (state_13356[2]);var state_13356__$1 = state_13356;var statearr_13369_13387 = state_13356__$1;(statearr_13369_13387[2] = inst_13346);
(statearr_13369_13387[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13373 = [null,null,null,null,null,null,null,null,null];(statearr_13373[0] = state_machine__5507__auto__);
(statearr_13373[1] = 1);
return statearr_13373;
});
var state_machine__5507__auto____1 = (function (state_13356){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13356);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13374){if((e13374 instanceof Object))
{var ex__5510__auto__ = e13374;var statearr_13375_13388 = state_13356;(statearr_13375_13388[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13356);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13374;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13389 = state_13356;
state_13356 = G__13389;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13356){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13356);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13376 = f__5522__auto__.call(null);(statearr_13376[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13377);
return statearr_13376;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13541){var state_val_13542 = (state_13541[1]);if((state_val_13542 === 1))
{var state_13541__$1 = state_13541;var statearr_13543_13580 = state_13541__$1;(statearr_13543_13580[2] = null);
(statearr_13543_13580[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 2))
{var state_13541__$1 = state_13541;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13541__$1,4,in$);
} else
{if((state_val_13542 === 3))
{var inst_13539 = (state_13541[2]);var state_13541__$1 = state_13541;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13541__$1,inst_13539);
} else
{if((state_val_13542 === 4))
{var inst_13487 = (state_13541[7]);var inst_13487__$1 = (state_13541[2]);var inst_13488 = (inst_13487__$1 == null);var state_13541__$1 = (function (){var statearr_13544 = state_13541;(statearr_13544[7] = inst_13487__$1);
return statearr_13544;
})();if(cljs.core.truth_(inst_13488))
{var statearr_13545_13581 = state_13541__$1;(statearr_13545_13581[1] = 5);
} else
{var statearr_13546_13582 = state_13541__$1;(statearr_13546_13582[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 5))
{var inst_13490 = cljs.core.async.close_BANG_.call(null,out);var state_13541__$1 = state_13541;var statearr_13547_13583 = state_13541__$1;(statearr_13547_13583[2] = inst_13490);
(statearr_13547_13583[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 6))
{var inst_13487 = (state_13541[7]);var inst_13492 = f.call(null,inst_13487);var inst_13497 = cljs.core.seq.call(null,inst_13492);var inst_13498 = inst_13497;var inst_13499 = null;var inst_13500 = 0;var inst_13501 = 0;var state_13541__$1 = (function (){var statearr_13548 = state_13541;(statearr_13548[8] = inst_13501);
(statearr_13548[9] = inst_13500);
(statearr_13548[10] = inst_13499);
(statearr_13548[11] = inst_13498);
return statearr_13548;
})();var statearr_13549_13584 = state_13541__$1;(statearr_13549_13584[2] = null);
(statearr_13549_13584[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 7))
{var inst_13537 = (state_13541[2]);var state_13541__$1 = state_13541;var statearr_13550_13585 = state_13541__$1;(statearr_13550_13585[2] = inst_13537);
(statearr_13550_13585[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 8))
{var inst_13501 = (state_13541[8]);var inst_13500 = (state_13541[9]);var inst_13503 = (inst_13501 < inst_13500);var inst_13504 = inst_13503;var state_13541__$1 = state_13541;if(cljs.core.truth_(inst_13504))
{var statearr_13551_13586 = state_13541__$1;(statearr_13551_13586[1] = 10);
} else
{var statearr_13552_13587 = state_13541__$1;(statearr_13552_13587[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 9))
{var inst_13534 = (state_13541[2]);var state_13541__$1 = (function (){var statearr_13553 = state_13541;(statearr_13553[12] = inst_13534);
return statearr_13553;
})();var statearr_13554_13588 = state_13541__$1;(statearr_13554_13588[2] = null);
(statearr_13554_13588[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 10))
{var inst_13501 = (state_13541[8]);var inst_13499 = (state_13541[10]);var inst_13506 = cljs.core._nth.call(null,inst_13499,inst_13501);var state_13541__$1 = state_13541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13541__$1,13,out,inst_13506);
} else
{if((state_val_13542 === 11))
{var inst_13512 = (state_13541[13]);var inst_13498 = (state_13541[11]);var inst_13512__$1 = cljs.core.seq.call(null,inst_13498);var state_13541__$1 = (function (){var statearr_13558 = state_13541;(statearr_13558[13] = inst_13512__$1);
return statearr_13558;
})();if(inst_13512__$1)
{var statearr_13559_13589 = state_13541__$1;(statearr_13559_13589[1] = 14);
} else
{var statearr_13560_13590 = state_13541__$1;(statearr_13560_13590[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 12))
{var inst_13532 = (state_13541[2]);var state_13541__$1 = state_13541;var statearr_13561_13591 = state_13541__$1;(statearr_13561_13591[2] = inst_13532);
(statearr_13561_13591[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 13))
{var inst_13501 = (state_13541[8]);var inst_13500 = (state_13541[9]);var inst_13499 = (state_13541[10]);var inst_13498 = (state_13541[11]);var inst_13508 = (state_13541[2]);var inst_13509 = (inst_13501 + 1);var tmp13555 = inst_13500;var tmp13556 = inst_13499;var tmp13557 = inst_13498;var inst_13498__$1 = tmp13557;var inst_13499__$1 = tmp13556;var inst_13500__$1 = tmp13555;var inst_13501__$1 = inst_13509;var state_13541__$1 = (function (){var statearr_13562 = state_13541;(statearr_13562[14] = inst_13508);
(statearr_13562[8] = inst_13501__$1);
(statearr_13562[9] = inst_13500__$1);
(statearr_13562[10] = inst_13499__$1);
(statearr_13562[11] = inst_13498__$1);
return statearr_13562;
})();var statearr_13563_13592 = state_13541__$1;(statearr_13563_13592[2] = null);
(statearr_13563_13592[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 14))
{var inst_13512 = (state_13541[13]);var inst_13514 = cljs.core.chunked_seq_QMARK_.call(null,inst_13512);var state_13541__$1 = state_13541;if(inst_13514)
{var statearr_13564_13593 = state_13541__$1;(statearr_13564_13593[1] = 17);
} else
{var statearr_13565_13594 = state_13541__$1;(statearr_13565_13594[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 15))
{var state_13541__$1 = state_13541;var statearr_13566_13595 = state_13541__$1;(statearr_13566_13595[2] = null);
(statearr_13566_13595[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 16))
{var inst_13530 = (state_13541[2]);var state_13541__$1 = state_13541;var statearr_13567_13596 = state_13541__$1;(statearr_13567_13596[2] = inst_13530);
(statearr_13567_13596[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 17))
{var inst_13512 = (state_13541[13]);var inst_13516 = cljs.core.chunk_first.call(null,inst_13512);var inst_13517 = cljs.core.chunk_rest.call(null,inst_13512);var inst_13518 = cljs.core.count.call(null,inst_13516);var inst_13498 = inst_13517;var inst_13499 = inst_13516;var inst_13500 = inst_13518;var inst_13501 = 0;var state_13541__$1 = (function (){var statearr_13568 = state_13541;(statearr_13568[8] = inst_13501);
(statearr_13568[9] = inst_13500);
(statearr_13568[10] = inst_13499);
(statearr_13568[11] = inst_13498);
return statearr_13568;
})();var statearr_13569_13597 = state_13541__$1;(statearr_13569_13597[2] = null);
(statearr_13569_13597[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 18))
{var inst_13512 = (state_13541[13]);var inst_13521 = cljs.core.first.call(null,inst_13512);var state_13541__$1 = state_13541;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13541__$1,20,out,inst_13521);
} else
{if((state_val_13542 === 19))
{var inst_13527 = (state_13541[2]);var state_13541__$1 = state_13541;var statearr_13570_13598 = state_13541__$1;(statearr_13570_13598[2] = inst_13527);
(statearr_13570_13598[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13542 === 20))
{var inst_13512 = (state_13541[13]);var inst_13523 = (state_13541[2]);var inst_13524 = cljs.core.next.call(null,inst_13512);var inst_13498 = inst_13524;var inst_13499 = null;var inst_13500 = 0;var inst_13501 = 0;var state_13541__$1 = (function (){var statearr_13571 = state_13541;(statearr_13571[15] = inst_13523);
(statearr_13571[8] = inst_13501);
(statearr_13571[9] = inst_13500);
(statearr_13571[10] = inst_13499);
(statearr_13571[11] = inst_13498);
return statearr_13571;
})();var statearr_13572_13599 = state_13541__$1;(statearr_13572_13599[2] = null);
(statearr_13572_13599[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_13576 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_13576[0] = state_machine__5507__auto__);
(statearr_13576[1] = 1);
return statearr_13576;
});
var state_machine__5507__auto____1 = (function (state_13541){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13541);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13577){if((e13577 instanceof Object))
{var ex__5510__auto__ = e13577;var statearr_13578_13600 = state_13541;(statearr_13578_13600[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13541);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13577;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13601 = state_13541;
state_13541 = G__13601;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13541){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13541);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13579 = f__5522__auto__.call(null);(statearr_13579[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13579;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___13682 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13661){var state_val_13662 = (state_13661[1]);if((state_val_13662 === 1))
{var state_13661__$1 = state_13661;var statearr_13663_13683 = state_13661__$1;(statearr_13663_13683[2] = null);
(statearr_13663_13683[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13662 === 2))
{var state_13661__$1 = state_13661;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13661__$1,4,from);
} else
{if((state_val_13662 === 3))
{var inst_13659 = (state_13661[2]);var state_13661__$1 = state_13661;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13661__$1,inst_13659);
} else
{if((state_val_13662 === 4))
{var inst_13644 = (state_13661[7]);var inst_13644__$1 = (state_13661[2]);var inst_13645 = (inst_13644__$1 == null);var state_13661__$1 = (function (){var statearr_13664 = state_13661;(statearr_13664[7] = inst_13644__$1);
return statearr_13664;
})();if(cljs.core.truth_(inst_13645))
{var statearr_13665_13684 = state_13661__$1;(statearr_13665_13684[1] = 5);
} else
{var statearr_13666_13685 = state_13661__$1;(statearr_13666_13685[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13662 === 5))
{var state_13661__$1 = state_13661;if(cljs.core.truth_(close_QMARK_))
{var statearr_13667_13686 = state_13661__$1;(statearr_13667_13686[1] = 8);
} else
{var statearr_13668_13687 = state_13661__$1;(statearr_13668_13687[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13662 === 6))
{var inst_13644 = (state_13661[7]);var state_13661__$1 = state_13661;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13661__$1,11,to,inst_13644);
} else
{if((state_val_13662 === 7))
{var inst_13657 = (state_13661[2]);var state_13661__$1 = state_13661;var statearr_13669_13688 = state_13661__$1;(statearr_13669_13688[2] = inst_13657);
(statearr_13669_13688[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13662 === 8))
{var inst_13648 = cljs.core.async.close_BANG_.call(null,to);var state_13661__$1 = state_13661;var statearr_13670_13689 = state_13661__$1;(statearr_13670_13689[2] = inst_13648);
(statearr_13670_13689[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13662 === 9))
{var state_13661__$1 = state_13661;var statearr_13671_13690 = state_13661__$1;(statearr_13671_13690[2] = null);
(statearr_13671_13690[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13662 === 10))
{var inst_13651 = (state_13661[2]);var state_13661__$1 = state_13661;var statearr_13672_13691 = state_13661__$1;(statearr_13672_13691[2] = inst_13651);
(statearr_13672_13691[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13662 === 11))
{var inst_13654 = (state_13661[2]);var state_13661__$1 = (function (){var statearr_13673 = state_13661;(statearr_13673[8] = inst_13654);
return statearr_13673;
})();var statearr_13674_13692 = state_13661__$1;(statearr_13674_13692[2] = null);
(statearr_13674_13692[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13678 = [null,null,null,null,null,null,null,null,null];(statearr_13678[0] = state_machine__5507__auto__);
(statearr_13678[1] = 1);
return statearr_13678;
});
var state_machine__5507__auto____1 = (function (state_13661){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13661);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13679){if((e13679 instanceof Object))
{var ex__5510__auto__ = e13679;var statearr_13680_13693 = state_13661;(statearr_13680_13693[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13661);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13679;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13694 = state_13661;
state_13661 = G__13694;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13661){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13661);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13681 = f__5522__auto__.call(null);(statearr_13681[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13682);
return statearr_13681;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___13781 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13759){var state_val_13760 = (state_13759[1]);if((state_val_13760 === 1))
{var state_13759__$1 = state_13759;var statearr_13761_13782 = state_13759__$1;(statearr_13761_13782[2] = null);
(statearr_13761_13782[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13760 === 2))
{var state_13759__$1 = state_13759;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13759__$1,4,ch);
} else
{if((state_val_13760 === 3))
{var inst_13757 = (state_13759[2]);var state_13759__$1 = state_13759;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13759__$1,inst_13757);
} else
{if((state_val_13760 === 4))
{var inst_13740 = (state_13759[7]);var inst_13740__$1 = (state_13759[2]);var inst_13741 = (inst_13740__$1 == null);var state_13759__$1 = (function (){var statearr_13762 = state_13759;(statearr_13762[7] = inst_13740__$1);
return statearr_13762;
})();if(cljs.core.truth_(inst_13741))
{var statearr_13763_13783 = state_13759__$1;(statearr_13763_13783[1] = 5);
} else
{var statearr_13764_13784 = state_13759__$1;(statearr_13764_13784[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13760 === 5))
{var inst_13743 = cljs.core.async.close_BANG_.call(null,tc);var inst_13744 = cljs.core.async.close_BANG_.call(null,fc);var state_13759__$1 = (function (){var statearr_13765 = state_13759;(statearr_13765[8] = inst_13743);
return statearr_13765;
})();var statearr_13766_13785 = state_13759__$1;(statearr_13766_13785[2] = inst_13744);
(statearr_13766_13785[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13760 === 6))
{var inst_13740 = (state_13759[7]);var inst_13746 = p.call(null,inst_13740);var state_13759__$1 = state_13759;if(cljs.core.truth_(inst_13746))
{var statearr_13767_13786 = state_13759__$1;(statearr_13767_13786[1] = 9);
} else
{var statearr_13768_13787 = state_13759__$1;(statearr_13768_13787[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13760 === 7))
{var inst_13755 = (state_13759[2]);var state_13759__$1 = state_13759;var statearr_13769_13788 = state_13759__$1;(statearr_13769_13788[2] = inst_13755);
(statearr_13769_13788[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13760 === 8))
{var inst_13752 = (state_13759[2]);var state_13759__$1 = (function (){var statearr_13770 = state_13759;(statearr_13770[9] = inst_13752);
return statearr_13770;
})();var statearr_13771_13789 = state_13759__$1;(statearr_13771_13789[2] = null);
(statearr_13771_13789[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13760 === 9))
{var state_13759__$1 = state_13759;var statearr_13772_13790 = state_13759__$1;(statearr_13772_13790[2] = tc);
(statearr_13772_13790[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13760 === 10))
{var state_13759__$1 = state_13759;var statearr_13773_13791 = state_13759__$1;(statearr_13773_13791[2] = fc);
(statearr_13773_13791[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13760 === 11))
{var inst_13740 = (state_13759[7]);var inst_13750 = (state_13759[2]);var state_13759__$1 = state_13759;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13759__$1,8,inst_13750,inst_13740);
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
var state_machine__5507__auto____0 = (function (){var statearr_13777 = [null,null,null,null,null,null,null,null,null,null];(statearr_13777[0] = state_machine__5507__auto__);
(statearr_13777[1] = 1);
return statearr_13777;
});
var state_machine__5507__auto____1 = (function (state_13759){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13759);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13778){if((e13778 instanceof Object))
{var ex__5510__auto__ = e13778;var statearr_13779_13792 = state_13759;(statearr_13779_13792[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13759);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13778;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13793 = state_13759;
state_13759 = G__13793;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13759){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13780 = f__5522__auto__.call(null);(statearr_13780[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13781);
return statearr_13780;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13840){var state_val_13841 = (state_13840[1]);if((state_val_13841 === 7))
{var inst_13836 = (state_13840[2]);var state_13840__$1 = state_13840;var statearr_13842_13858 = state_13840__$1;(statearr_13842_13858[2] = inst_13836);
(statearr_13842_13858[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13841 === 6))
{var inst_13826 = (state_13840[7]);var inst_13829 = (state_13840[8]);var inst_13833 = f.call(null,inst_13826,inst_13829);var inst_13826__$1 = inst_13833;var state_13840__$1 = (function (){var statearr_13843 = state_13840;(statearr_13843[7] = inst_13826__$1);
return statearr_13843;
})();var statearr_13844_13859 = state_13840__$1;(statearr_13844_13859[2] = null);
(statearr_13844_13859[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13841 === 5))
{var inst_13826 = (state_13840[7]);var state_13840__$1 = state_13840;var statearr_13845_13860 = state_13840__$1;(statearr_13845_13860[2] = inst_13826);
(statearr_13845_13860[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13841 === 4))
{var inst_13829 = (state_13840[8]);var inst_13829__$1 = (state_13840[2]);var inst_13830 = (inst_13829__$1 == null);var state_13840__$1 = (function (){var statearr_13846 = state_13840;(statearr_13846[8] = inst_13829__$1);
return statearr_13846;
})();if(cljs.core.truth_(inst_13830))
{var statearr_13847_13861 = state_13840__$1;(statearr_13847_13861[1] = 5);
} else
{var statearr_13848_13862 = state_13840__$1;(statearr_13848_13862[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13841 === 3))
{var inst_13838 = (state_13840[2]);var state_13840__$1 = state_13840;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13840__$1,inst_13838);
} else
{if((state_val_13841 === 2))
{var state_13840__$1 = state_13840;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13840__$1,4,ch);
} else
{if((state_val_13841 === 1))
{var inst_13826 = init;var state_13840__$1 = (function (){var statearr_13849 = state_13840;(statearr_13849[7] = inst_13826);
return statearr_13849;
})();var statearr_13850_13863 = state_13840__$1;(statearr_13850_13863[2] = null);
(statearr_13850_13863[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_13854 = [null,null,null,null,null,null,null,null,null];(statearr_13854[0] = state_machine__5507__auto__);
(statearr_13854[1] = 1);
return statearr_13854;
});
var state_machine__5507__auto____1 = (function (state_13840){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13840);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13855){if((e13855 instanceof Object))
{var ex__5510__auto__ = e13855;var statearr_13856_13864 = state_13840;(statearr_13856_13864[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13840);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13855;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13865 = state_13840;
state_13840 = G__13865;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13840){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13840);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13857 = f__5522__auto__.call(null);(statearr_13857[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13857;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13927){var state_val_13928 = (state_13927[1]);if((state_val_13928 === 1))
{var inst_13907 = cljs.core.seq.call(null,coll);var inst_13908 = inst_13907;var state_13927__$1 = (function (){var statearr_13929 = state_13927;(statearr_13929[7] = inst_13908);
return statearr_13929;
})();var statearr_13930_13948 = state_13927__$1;(statearr_13930_13948[2] = null);
(statearr_13930_13948[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 2))
{var inst_13908 = (state_13927[7]);var state_13927__$1 = state_13927;if(cljs.core.truth_(inst_13908))
{var statearr_13931_13949 = state_13927__$1;(statearr_13931_13949[1] = 4);
} else
{var statearr_13932_13950 = state_13927__$1;(statearr_13932_13950[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 3))
{var inst_13925 = (state_13927[2]);var state_13927__$1 = state_13927;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13927__$1,inst_13925);
} else
{if((state_val_13928 === 4))
{var inst_13908 = (state_13927[7]);var inst_13911 = cljs.core.first.call(null,inst_13908);var state_13927__$1 = state_13927;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13927__$1,7,ch,inst_13911);
} else
{if((state_val_13928 === 5))
{var state_13927__$1 = state_13927;if(cljs.core.truth_(close_QMARK_))
{var statearr_13933_13951 = state_13927__$1;(statearr_13933_13951[1] = 8);
} else
{var statearr_13934_13952 = state_13927__$1;(statearr_13934_13952[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 6))
{var inst_13923 = (state_13927[2]);var state_13927__$1 = state_13927;var statearr_13935_13953 = state_13927__$1;(statearr_13935_13953[2] = inst_13923);
(statearr_13935_13953[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 7))
{var inst_13908 = (state_13927[7]);var inst_13913 = (state_13927[2]);var inst_13914 = cljs.core.next.call(null,inst_13908);var inst_13908__$1 = inst_13914;var state_13927__$1 = (function (){var statearr_13936 = state_13927;(statearr_13936[7] = inst_13908__$1);
(statearr_13936[8] = inst_13913);
return statearr_13936;
})();var statearr_13937_13954 = state_13927__$1;(statearr_13937_13954[2] = null);
(statearr_13937_13954[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 8))
{var inst_13918 = cljs.core.async.close_BANG_.call(null,ch);var state_13927__$1 = state_13927;var statearr_13938_13955 = state_13927__$1;(statearr_13938_13955[2] = inst_13918);
(statearr_13938_13955[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 9))
{var state_13927__$1 = state_13927;var statearr_13939_13956 = state_13927__$1;(statearr_13939_13956[2] = null);
(statearr_13939_13956[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13928 === 10))
{var inst_13921 = (state_13927[2]);var state_13927__$1 = state_13927;var statearr_13940_13957 = state_13927__$1;(statearr_13940_13957[2] = inst_13921);
(statearr_13940_13957[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_13944 = [null,null,null,null,null,null,null,null,null];(statearr_13944[0] = state_machine__5507__auto__);
(statearr_13944[1] = 1);
return statearr_13944;
});
var state_machine__5507__auto____1 = (function (state_13927){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13927);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13945){if((e13945 instanceof Object))
{var ex__5510__auto__ = e13945;var statearr_13946_13958 = state_13927;(statearr_13946_13958[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13927);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13945;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13959 = state_13927;
state_13927 = G__13959;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13927){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13927);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13947 = f__5522__auto__.call(null);(statearr_13947[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_13947;
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
cljs.core.async.Mux = (function (){var obj13961 = {};return obj13961;
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
cljs.core.async.Mult = (function (){var obj13963 = {};return obj13963;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14187 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14187 = (function (cs,ch,mult,meta14188){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14188 = meta14188;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14187.cljs$lang$type = true;
cljs.core.async.t14187.cljs$lang$ctorStr = "cljs.core.async/t14187";
cljs.core.async.t14187.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14187");
});})(cs))
;
cljs.core.async.t14187.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14187.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14187.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14187.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14187.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14187.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14189){var self__ = this;
var _14189__$1 = this;return self__.meta14188;
});})(cs))
;
cljs.core.async.t14187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14189,meta14188__$1){var self__ = this;
var _14189__$1 = this;return (new cljs.core.async.t14187(self__.cs,self__.ch,self__.mult,meta14188__$1));
});})(cs))
;
cljs.core.async.__GT_t14187 = ((function (cs){
return (function __GT_t14187(cs__$1,ch__$1,mult__$1,meta14188){return (new cljs.core.async.t14187(cs__$1,ch__$1,mult__$1,meta14188));
});})(cs))
;
}
return (new cljs.core.async.t14187(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14410 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14324){var state_val_14325 = (state_14324[1]);if((state_val_14325 === 32))
{var inst_14192 = (state_14324[7]);var inst_14268 = (state_14324[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14324,31,Object,null,30);var inst_14275 = cljs.core.async.put_BANG_.call(null,inst_14268,inst_14192,done);var state_14324__$1 = state_14324;var statearr_14326_14411 = state_14324__$1;(statearr_14326_14411[2] = inst_14275);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14324__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 1))
{var state_14324__$1 = state_14324;var statearr_14327_14412 = state_14324__$1;(statearr_14327_14412[2] = null);
(statearr_14327_14412[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 33))
{var inst_14281 = (state_14324[9]);var inst_14283 = cljs.core.chunked_seq_QMARK_.call(null,inst_14281);var state_14324__$1 = state_14324;if(inst_14283)
{var statearr_14328_14413 = state_14324__$1;(statearr_14328_14413[1] = 36);
} else
{var statearr_14329_14414 = state_14324__$1;(statearr_14329_14414[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 2))
{var state_14324__$1 = state_14324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14324__$1,4,ch);
} else
{if((state_val_14325 === 34))
{var state_14324__$1 = state_14324;var statearr_14330_14415 = state_14324__$1;(statearr_14330_14415[2] = null);
(statearr_14330_14415[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 3))
{var inst_14322 = (state_14324[2]);var state_14324__$1 = state_14324;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14324__$1,inst_14322);
} else
{if((state_val_14325 === 35))
{var inst_14306 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14331_14416 = state_14324__$1;(statearr_14331_14416[2] = inst_14306);
(statearr_14331_14416[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 4))
{var inst_14192 = (state_14324[7]);var inst_14192__$1 = (state_14324[2]);var inst_14193 = (inst_14192__$1 == null);var state_14324__$1 = (function (){var statearr_14332 = state_14324;(statearr_14332[7] = inst_14192__$1);
return statearr_14332;
})();if(cljs.core.truth_(inst_14193))
{var statearr_14333_14417 = state_14324__$1;(statearr_14333_14417[1] = 5);
} else
{var statearr_14334_14418 = state_14324__$1;(statearr_14334_14418[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 36))
{var inst_14281 = (state_14324[9]);var inst_14285 = cljs.core.chunk_first.call(null,inst_14281);var inst_14286 = cljs.core.chunk_rest.call(null,inst_14281);var inst_14287 = cljs.core.count.call(null,inst_14285);var inst_14260 = inst_14286;var inst_14261 = inst_14285;var inst_14262 = inst_14287;var inst_14263 = 0;var state_14324__$1 = (function (){var statearr_14335 = state_14324;(statearr_14335[10] = inst_14261);
(statearr_14335[11] = inst_14260);
(statearr_14335[12] = inst_14263);
(statearr_14335[13] = inst_14262);
return statearr_14335;
})();var statearr_14336_14419 = state_14324__$1;(statearr_14336_14419[2] = null);
(statearr_14336_14419[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 5))
{var inst_14199 = cljs.core.deref.call(null,cs);var inst_14200 = cljs.core.seq.call(null,inst_14199);var inst_14201 = inst_14200;var inst_14202 = null;var inst_14203 = 0;var inst_14204 = 0;var state_14324__$1 = (function (){var statearr_14337 = state_14324;(statearr_14337[14] = inst_14201);
(statearr_14337[15] = inst_14204);
(statearr_14337[16] = inst_14203);
(statearr_14337[17] = inst_14202);
return statearr_14337;
})();var statearr_14338_14420 = state_14324__$1;(statearr_14338_14420[2] = null);
(statearr_14338_14420[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 37))
{var inst_14281 = (state_14324[9]);var inst_14290 = cljs.core.first.call(null,inst_14281);var state_14324__$1 = (function (){var statearr_14339 = state_14324;(statearr_14339[18] = inst_14290);
return statearr_14339;
})();var statearr_14340_14421 = state_14324__$1;(statearr_14340_14421[2] = null);
(statearr_14340_14421[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 6))
{var inst_14252 = (state_14324[19]);var inst_14251 = cljs.core.deref.call(null,cs);var inst_14252__$1 = cljs.core.keys.call(null,inst_14251);var inst_14253 = cljs.core.count.call(null,inst_14252__$1);var inst_14254 = cljs.core.reset_BANG_.call(null,dctr,inst_14253);var inst_14259 = cljs.core.seq.call(null,inst_14252__$1);var inst_14260 = inst_14259;var inst_14261 = null;var inst_14262 = 0;var inst_14263 = 0;var state_14324__$1 = (function (){var statearr_14341 = state_14324;(statearr_14341[20] = inst_14254);
(statearr_14341[19] = inst_14252__$1);
(statearr_14341[10] = inst_14261);
(statearr_14341[11] = inst_14260);
(statearr_14341[12] = inst_14263);
(statearr_14341[13] = inst_14262);
return statearr_14341;
})();var statearr_14342_14422 = state_14324__$1;(statearr_14342_14422[2] = null);
(statearr_14342_14422[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 38))
{var inst_14303 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14343_14423 = state_14324__$1;(statearr_14343_14423[2] = inst_14303);
(statearr_14343_14423[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 7))
{var inst_14320 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14344_14424 = state_14324__$1;(statearr_14344_14424[2] = inst_14320);
(statearr_14344_14424[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 39))
{var inst_14281 = (state_14324[9]);var inst_14299 = (state_14324[2]);var inst_14300 = cljs.core.next.call(null,inst_14281);var inst_14260 = inst_14300;var inst_14261 = null;var inst_14262 = 0;var inst_14263 = 0;var state_14324__$1 = (function (){var statearr_14345 = state_14324;(statearr_14345[21] = inst_14299);
(statearr_14345[10] = inst_14261);
(statearr_14345[11] = inst_14260);
(statearr_14345[12] = inst_14263);
(statearr_14345[13] = inst_14262);
return statearr_14345;
})();var statearr_14346_14425 = state_14324__$1;(statearr_14346_14425[2] = null);
(statearr_14346_14425[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 8))
{var inst_14204 = (state_14324[15]);var inst_14203 = (state_14324[16]);var inst_14206 = (inst_14204 < inst_14203);var inst_14207 = inst_14206;var state_14324__$1 = state_14324;if(cljs.core.truth_(inst_14207))
{var statearr_14347_14426 = state_14324__$1;(statearr_14347_14426[1] = 10);
} else
{var statearr_14348_14427 = state_14324__$1;(statearr_14348_14427[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 40))
{var inst_14290 = (state_14324[18]);var inst_14291 = (state_14324[2]);var inst_14292 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14293 = cljs.core.async.untap_STAR_.call(null,m,inst_14290);var state_14324__$1 = (function (){var statearr_14349 = state_14324;(statearr_14349[22] = inst_14291);
(statearr_14349[23] = inst_14292);
return statearr_14349;
})();var statearr_14350_14428 = state_14324__$1;(statearr_14350_14428[2] = inst_14293);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14324__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 9))
{var inst_14249 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14351_14429 = state_14324__$1;(statearr_14351_14429[2] = inst_14249);
(statearr_14351_14429[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 41))
{var inst_14192 = (state_14324[7]);var inst_14290 = (state_14324[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14324,40,Object,null,39);var inst_14297 = cljs.core.async.put_BANG_.call(null,inst_14290,inst_14192,done);var state_14324__$1 = state_14324;var statearr_14352_14430 = state_14324__$1;(statearr_14352_14430[2] = inst_14297);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14324__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 10))
{var inst_14204 = (state_14324[15]);var inst_14202 = (state_14324[17]);var inst_14210 = cljs.core._nth.call(null,inst_14202,inst_14204);var inst_14211 = cljs.core.nth.call(null,inst_14210,0,null);var inst_14212 = cljs.core.nth.call(null,inst_14210,1,null);var state_14324__$1 = (function (){var statearr_14353 = state_14324;(statearr_14353[24] = inst_14211);
return statearr_14353;
})();if(cljs.core.truth_(inst_14212))
{var statearr_14354_14431 = state_14324__$1;(statearr_14354_14431[1] = 13);
} else
{var statearr_14355_14432 = state_14324__$1;(statearr_14355_14432[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 42))
{var state_14324__$1 = state_14324;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14324__$1,45,dchan);
} else
{if((state_val_14325 === 11))
{var inst_14201 = (state_14324[14]);var inst_14221 = (state_14324[25]);var inst_14221__$1 = cljs.core.seq.call(null,inst_14201);var state_14324__$1 = (function (){var statearr_14356 = state_14324;(statearr_14356[25] = inst_14221__$1);
return statearr_14356;
})();if(inst_14221__$1)
{var statearr_14357_14433 = state_14324__$1;(statearr_14357_14433[1] = 16);
} else
{var statearr_14358_14434 = state_14324__$1;(statearr_14358_14434[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 43))
{var state_14324__$1 = state_14324;var statearr_14359_14435 = state_14324__$1;(statearr_14359_14435[2] = null);
(statearr_14359_14435[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 12))
{var inst_14247 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14360_14436 = state_14324__$1;(statearr_14360_14436[2] = inst_14247);
(statearr_14360_14436[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 44))
{var inst_14317 = (state_14324[2]);var state_14324__$1 = (function (){var statearr_14361 = state_14324;(statearr_14361[26] = inst_14317);
return statearr_14361;
})();var statearr_14362_14437 = state_14324__$1;(statearr_14362_14437[2] = null);
(statearr_14362_14437[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 13))
{var inst_14211 = (state_14324[24]);var inst_14214 = cljs.core.async.close_BANG_.call(null,inst_14211);var state_14324__$1 = state_14324;var statearr_14363_14438 = state_14324__$1;(statearr_14363_14438[2] = inst_14214);
(statearr_14363_14438[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 45))
{var inst_14314 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14367_14439 = state_14324__$1;(statearr_14367_14439[2] = inst_14314);
(statearr_14367_14439[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 14))
{var state_14324__$1 = state_14324;var statearr_14368_14440 = state_14324__$1;(statearr_14368_14440[2] = null);
(statearr_14368_14440[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 15))
{var inst_14201 = (state_14324[14]);var inst_14204 = (state_14324[15]);var inst_14203 = (state_14324[16]);var inst_14202 = (state_14324[17]);var inst_14217 = (state_14324[2]);var inst_14218 = (inst_14204 + 1);var tmp14364 = inst_14201;var tmp14365 = inst_14203;var tmp14366 = inst_14202;var inst_14201__$1 = tmp14364;var inst_14202__$1 = tmp14366;var inst_14203__$1 = tmp14365;var inst_14204__$1 = inst_14218;var state_14324__$1 = (function (){var statearr_14369 = state_14324;(statearr_14369[14] = inst_14201__$1);
(statearr_14369[15] = inst_14204__$1);
(statearr_14369[16] = inst_14203__$1);
(statearr_14369[17] = inst_14202__$1);
(statearr_14369[27] = inst_14217);
return statearr_14369;
})();var statearr_14370_14441 = state_14324__$1;(statearr_14370_14441[2] = null);
(statearr_14370_14441[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 16))
{var inst_14221 = (state_14324[25]);var inst_14223 = cljs.core.chunked_seq_QMARK_.call(null,inst_14221);var state_14324__$1 = state_14324;if(inst_14223)
{var statearr_14371_14442 = state_14324__$1;(statearr_14371_14442[1] = 19);
} else
{var statearr_14372_14443 = state_14324__$1;(statearr_14372_14443[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 17))
{var state_14324__$1 = state_14324;var statearr_14373_14444 = state_14324__$1;(statearr_14373_14444[2] = null);
(statearr_14373_14444[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 18))
{var inst_14245 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14374_14445 = state_14324__$1;(statearr_14374_14445[2] = inst_14245);
(statearr_14374_14445[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 19))
{var inst_14221 = (state_14324[25]);var inst_14225 = cljs.core.chunk_first.call(null,inst_14221);var inst_14226 = cljs.core.chunk_rest.call(null,inst_14221);var inst_14227 = cljs.core.count.call(null,inst_14225);var inst_14201 = inst_14226;var inst_14202 = inst_14225;var inst_14203 = inst_14227;var inst_14204 = 0;var state_14324__$1 = (function (){var statearr_14375 = state_14324;(statearr_14375[14] = inst_14201);
(statearr_14375[15] = inst_14204);
(statearr_14375[16] = inst_14203);
(statearr_14375[17] = inst_14202);
return statearr_14375;
})();var statearr_14376_14446 = state_14324__$1;(statearr_14376_14446[2] = null);
(statearr_14376_14446[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 20))
{var inst_14221 = (state_14324[25]);var inst_14231 = cljs.core.first.call(null,inst_14221);var inst_14232 = cljs.core.nth.call(null,inst_14231,0,null);var inst_14233 = cljs.core.nth.call(null,inst_14231,1,null);var state_14324__$1 = (function (){var statearr_14377 = state_14324;(statearr_14377[28] = inst_14232);
return statearr_14377;
})();if(cljs.core.truth_(inst_14233))
{var statearr_14378_14447 = state_14324__$1;(statearr_14378_14447[1] = 22);
} else
{var statearr_14379_14448 = state_14324__$1;(statearr_14379_14448[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 21))
{var inst_14242 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14380_14449 = state_14324__$1;(statearr_14380_14449[2] = inst_14242);
(statearr_14380_14449[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 22))
{var inst_14232 = (state_14324[28]);var inst_14235 = cljs.core.async.close_BANG_.call(null,inst_14232);var state_14324__$1 = state_14324;var statearr_14381_14450 = state_14324__$1;(statearr_14381_14450[2] = inst_14235);
(statearr_14381_14450[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 23))
{var state_14324__$1 = state_14324;var statearr_14382_14451 = state_14324__$1;(statearr_14382_14451[2] = null);
(statearr_14382_14451[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 24))
{var inst_14221 = (state_14324[25]);var inst_14238 = (state_14324[2]);var inst_14239 = cljs.core.next.call(null,inst_14221);var inst_14201 = inst_14239;var inst_14202 = null;var inst_14203 = 0;var inst_14204 = 0;var state_14324__$1 = (function (){var statearr_14383 = state_14324;(statearr_14383[14] = inst_14201);
(statearr_14383[15] = inst_14204);
(statearr_14383[16] = inst_14203);
(statearr_14383[17] = inst_14202);
(statearr_14383[29] = inst_14238);
return statearr_14383;
})();var statearr_14384_14452 = state_14324__$1;(statearr_14384_14452[2] = null);
(statearr_14384_14452[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 25))
{var inst_14263 = (state_14324[12]);var inst_14262 = (state_14324[13]);var inst_14265 = (inst_14263 < inst_14262);var inst_14266 = inst_14265;var state_14324__$1 = state_14324;if(cljs.core.truth_(inst_14266))
{var statearr_14385_14453 = state_14324__$1;(statearr_14385_14453[1] = 27);
} else
{var statearr_14386_14454 = state_14324__$1;(statearr_14386_14454[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 26))
{var inst_14252 = (state_14324[19]);var inst_14310 = (state_14324[2]);var inst_14311 = cljs.core.seq.call(null,inst_14252);var state_14324__$1 = (function (){var statearr_14387 = state_14324;(statearr_14387[30] = inst_14310);
return statearr_14387;
})();if(inst_14311)
{var statearr_14388_14455 = state_14324__$1;(statearr_14388_14455[1] = 42);
} else
{var statearr_14389_14456 = state_14324__$1;(statearr_14389_14456[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 27))
{var inst_14261 = (state_14324[10]);var inst_14263 = (state_14324[12]);var inst_14268 = cljs.core._nth.call(null,inst_14261,inst_14263);var state_14324__$1 = (function (){var statearr_14390 = state_14324;(statearr_14390[8] = inst_14268);
return statearr_14390;
})();var statearr_14391_14457 = state_14324__$1;(statearr_14391_14457[2] = null);
(statearr_14391_14457[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 28))
{var inst_14260 = (state_14324[11]);var inst_14281 = (state_14324[9]);var inst_14281__$1 = cljs.core.seq.call(null,inst_14260);var state_14324__$1 = (function (){var statearr_14395 = state_14324;(statearr_14395[9] = inst_14281__$1);
return statearr_14395;
})();if(inst_14281__$1)
{var statearr_14396_14458 = state_14324__$1;(statearr_14396_14458[1] = 33);
} else
{var statearr_14397_14459 = state_14324__$1;(statearr_14397_14459[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 29))
{var inst_14308 = (state_14324[2]);var state_14324__$1 = state_14324;var statearr_14398_14460 = state_14324__$1;(statearr_14398_14460[2] = inst_14308);
(statearr_14398_14460[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 30))
{var inst_14261 = (state_14324[10]);var inst_14260 = (state_14324[11]);var inst_14263 = (state_14324[12]);var inst_14262 = (state_14324[13]);var inst_14277 = (state_14324[2]);var inst_14278 = (inst_14263 + 1);var tmp14392 = inst_14261;var tmp14393 = inst_14260;var tmp14394 = inst_14262;var inst_14260__$1 = tmp14393;var inst_14261__$1 = tmp14392;var inst_14262__$1 = tmp14394;var inst_14263__$1 = inst_14278;var state_14324__$1 = (function (){var statearr_14399 = state_14324;(statearr_14399[10] = inst_14261__$1);
(statearr_14399[11] = inst_14260__$1);
(statearr_14399[12] = inst_14263__$1);
(statearr_14399[13] = inst_14262__$1);
(statearr_14399[31] = inst_14277);
return statearr_14399;
})();var statearr_14400_14461 = state_14324__$1;(statearr_14400_14461[2] = null);
(statearr_14400_14461[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14325 === 31))
{var inst_14268 = (state_14324[8]);var inst_14269 = (state_14324[2]);var inst_14270 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14271 = cljs.core.async.untap_STAR_.call(null,m,inst_14268);var state_14324__$1 = (function (){var statearr_14401 = state_14324;(statearr_14401[32] = inst_14270);
(statearr_14401[33] = inst_14269);
return statearr_14401;
})();var statearr_14402_14462 = state_14324__$1;(statearr_14402_14462[2] = inst_14271);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14324__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14406 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14406[0] = state_machine__5507__auto__);
(statearr_14406[1] = 1);
return statearr_14406;
});
var state_machine__5507__auto____1 = (function (state_14324){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14324);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14407){if((e14407 instanceof Object))
{var ex__5510__auto__ = e14407;var statearr_14408_14463 = state_14324;(statearr_14408_14463[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14324);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14407;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14464 = state_14324;
state_14324 = G__14464;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14324){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14409 = f__5522__auto__.call(null);(statearr_14409[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14410);
return statearr_14409;
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
cljs.core.async.Mix = (function (){var obj14466 = {};return obj14466;
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
;var m = (function (){if(typeof cljs.core.async.t14576 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14576 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta14577){
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
this.meta14577 = meta14577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14576.cljs$lang$type = true;
cljs.core.async.t14576.cljs$lang$ctorStr = "cljs.core.async/t14576";
cljs.core.async.t14576.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14576");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14576.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t14576.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14576.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14576.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14576.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14576.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14576.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14576.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14576.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14578){var self__ = this;
var _14578__$1 = this;return self__.meta14577;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t14576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_14578,meta14577__$1){var self__ = this;
var _14578__$1 = this;return (new cljs.core.async.t14576(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta14577__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t14576 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t14576(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14577){return (new cljs.core.async.t14576(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta14577));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t14576(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___14685 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14643){var state_val_14644 = (state_14643[1]);if((state_val_14644 === 1))
{var inst_14582 = (state_14643[7]);var inst_14582__$1 = calc_state.call(null);var inst_14583 = cljs.core.seq_QMARK_.call(null,inst_14582__$1);var state_14643__$1 = (function (){var statearr_14645 = state_14643;(statearr_14645[7] = inst_14582__$1);
return statearr_14645;
})();if(inst_14583)
{var statearr_14646_14686 = state_14643__$1;(statearr_14646_14686[1] = 2);
} else
{var statearr_14647_14687 = state_14643__$1;(statearr_14647_14687[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 2))
{var inst_14582 = (state_14643[7]);var inst_14585 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14582);var state_14643__$1 = state_14643;var statearr_14648_14688 = state_14643__$1;(statearr_14648_14688[2] = inst_14585);
(statearr_14648_14688[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 3))
{var inst_14582 = (state_14643[7]);var state_14643__$1 = state_14643;var statearr_14649_14689 = state_14643__$1;(statearr_14649_14689[2] = inst_14582);
(statearr_14649_14689[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 4))
{var inst_14582 = (state_14643[7]);var inst_14588 = (state_14643[2]);var inst_14589 = cljs.core.get.call(null,inst_14588,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14590 = cljs.core.get.call(null,inst_14588,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14591 = cljs.core.get.call(null,inst_14588,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_14592 = inst_14582;var state_14643__$1 = (function (){var statearr_14650 = state_14643;(statearr_14650[8] = inst_14591);
(statearr_14650[9] = inst_14590);
(statearr_14650[10] = inst_14589);
(statearr_14650[11] = inst_14592);
return statearr_14650;
})();var statearr_14651_14690 = state_14643__$1;(statearr_14651_14690[2] = null);
(statearr_14651_14690[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 5))
{var inst_14592 = (state_14643[11]);var inst_14595 = cljs.core.seq_QMARK_.call(null,inst_14592);var state_14643__$1 = state_14643;if(inst_14595)
{var statearr_14652_14691 = state_14643__$1;(statearr_14652_14691[1] = 7);
} else
{var statearr_14653_14692 = state_14643__$1;(statearr_14653_14692[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 6))
{var inst_14641 = (state_14643[2]);var state_14643__$1 = state_14643;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14643__$1,inst_14641);
} else
{if((state_val_14644 === 7))
{var inst_14592 = (state_14643[11]);var inst_14597 = cljs.core.apply.call(null,cljs.core.hash_map,inst_14592);var state_14643__$1 = state_14643;var statearr_14654_14693 = state_14643__$1;(statearr_14654_14693[2] = inst_14597);
(statearr_14654_14693[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 8))
{var inst_14592 = (state_14643[11]);var state_14643__$1 = state_14643;var statearr_14655_14694 = state_14643__$1;(statearr_14655_14694[2] = inst_14592);
(statearr_14655_14694[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 9))
{var inst_14600 = (state_14643[12]);var inst_14600__$1 = (state_14643[2]);var inst_14601 = cljs.core.get.call(null,inst_14600__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_14602 = cljs.core.get.call(null,inst_14600__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_14603 = cljs.core.get.call(null,inst_14600__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_14643__$1 = (function (){var statearr_14656 = state_14643;(statearr_14656[13] = inst_14602);
(statearr_14656[14] = inst_14603);
(statearr_14656[12] = inst_14600__$1);
return statearr_14656;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_14643__$1,10,inst_14601);
} else
{if((state_val_14644 === 10))
{var inst_14607 = (state_14643[15]);var inst_14608 = (state_14643[16]);var inst_14606 = (state_14643[2]);var inst_14607__$1 = cljs.core.nth.call(null,inst_14606,0,null);var inst_14608__$1 = cljs.core.nth.call(null,inst_14606,1,null);var inst_14609 = (inst_14607__$1 == null);var inst_14610 = cljs.core._EQ_.call(null,inst_14608__$1,change);var inst_14611 = (inst_14609) || (inst_14610);var state_14643__$1 = (function (){var statearr_14657 = state_14643;(statearr_14657[15] = inst_14607__$1);
(statearr_14657[16] = inst_14608__$1);
return statearr_14657;
})();if(cljs.core.truth_(inst_14611))
{var statearr_14658_14695 = state_14643__$1;(statearr_14658_14695[1] = 11);
} else
{var statearr_14659_14696 = state_14643__$1;(statearr_14659_14696[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 11))
{var inst_14607 = (state_14643[15]);var inst_14613 = (inst_14607 == null);var state_14643__$1 = state_14643;if(cljs.core.truth_(inst_14613))
{var statearr_14660_14697 = state_14643__$1;(statearr_14660_14697[1] = 14);
} else
{var statearr_14661_14698 = state_14643__$1;(statearr_14661_14698[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 12))
{var inst_14603 = (state_14643[14]);var inst_14608 = (state_14643[16]);var inst_14622 = (state_14643[17]);var inst_14622__$1 = inst_14603.call(null,inst_14608);var state_14643__$1 = (function (){var statearr_14662 = state_14643;(statearr_14662[17] = inst_14622__$1);
return statearr_14662;
})();if(cljs.core.truth_(inst_14622__$1))
{var statearr_14663_14699 = state_14643__$1;(statearr_14663_14699[1] = 17);
} else
{var statearr_14664_14700 = state_14643__$1;(statearr_14664_14700[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 13))
{var inst_14639 = (state_14643[2]);var state_14643__$1 = state_14643;var statearr_14665_14701 = state_14643__$1;(statearr_14665_14701[2] = inst_14639);
(statearr_14665_14701[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 14))
{var inst_14608 = (state_14643[16]);var inst_14615 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_14608);var state_14643__$1 = state_14643;var statearr_14666_14702 = state_14643__$1;(statearr_14666_14702[2] = inst_14615);
(statearr_14666_14702[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 15))
{var state_14643__$1 = state_14643;var statearr_14667_14703 = state_14643__$1;(statearr_14667_14703[2] = null);
(statearr_14667_14703[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 16))
{var inst_14618 = (state_14643[2]);var inst_14619 = calc_state.call(null);var inst_14592 = inst_14619;var state_14643__$1 = (function (){var statearr_14668 = state_14643;(statearr_14668[18] = inst_14618);
(statearr_14668[11] = inst_14592);
return statearr_14668;
})();var statearr_14669_14704 = state_14643__$1;(statearr_14669_14704[2] = null);
(statearr_14669_14704[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 17))
{var inst_14622 = (state_14643[17]);var state_14643__$1 = state_14643;var statearr_14670_14705 = state_14643__$1;(statearr_14670_14705[2] = inst_14622);
(statearr_14670_14705[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 18))
{var inst_14602 = (state_14643[13]);var inst_14603 = (state_14643[14]);var inst_14608 = (state_14643[16]);var inst_14625 = cljs.core.empty_QMARK_.call(null,inst_14603);var inst_14626 = inst_14602.call(null,inst_14608);var inst_14627 = cljs.core.not.call(null,inst_14626);var inst_14628 = (inst_14625) && (inst_14627);var state_14643__$1 = state_14643;var statearr_14671_14706 = state_14643__$1;(statearr_14671_14706[2] = inst_14628);
(statearr_14671_14706[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 19))
{var inst_14630 = (state_14643[2]);var state_14643__$1 = state_14643;if(cljs.core.truth_(inst_14630))
{var statearr_14672_14707 = state_14643__$1;(statearr_14672_14707[1] = 20);
} else
{var statearr_14673_14708 = state_14643__$1;(statearr_14673_14708[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 20))
{var inst_14607 = (state_14643[15]);var state_14643__$1 = state_14643;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14643__$1,23,out,inst_14607);
} else
{if((state_val_14644 === 21))
{var state_14643__$1 = state_14643;var statearr_14674_14709 = state_14643__$1;(statearr_14674_14709[2] = null);
(statearr_14674_14709[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 22))
{var inst_14600 = (state_14643[12]);var inst_14636 = (state_14643[2]);var inst_14592 = inst_14600;var state_14643__$1 = (function (){var statearr_14675 = state_14643;(statearr_14675[19] = inst_14636);
(statearr_14675[11] = inst_14592);
return statearr_14675;
})();var statearr_14676_14710 = state_14643__$1;(statearr_14676_14710[2] = null);
(statearr_14676_14710[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14644 === 23))
{var inst_14633 = (state_14643[2]);var state_14643__$1 = state_14643;var statearr_14677_14711 = state_14643__$1;(statearr_14677_14711[2] = inst_14633);
(statearr_14677_14711[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_14681 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14681[0] = state_machine__5507__auto__);
(statearr_14681[1] = 1);
return statearr_14681;
});
var state_machine__5507__auto____1 = (function (state_14643){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14643);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14682){if((e14682 instanceof Object))
{var ex__5510__auto__ = e14682;var statearr_14683_14712 = state_14643;(statearr_14683_14712[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14643);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14682;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14713 = state_14643;
state_14643 = G__14713;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14643){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14684 = f__5522__auto__.call(null);(statearr_14684[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14685);
return statearr_14684;
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
cljs.core.async.Pub = (function (){var obj14715 = {};return obj14715;
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
return (function (p1__14716_SHARP_){if(cljs.core.truth_(p1__14716_SHARP_.call(null,topic)))
{return p1__14716_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__14716_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t14841 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14841 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta14842){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta14842 = meta14842;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14841.cljs$lang$type = true;
cljs.core.async.t14841.cljs$lang$ctorStr = "cljs.core.async/t14841";
cljs.core.async.t14841.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14841");
});})(mults,ensure_mult))
;
cljs.core.async.t14841.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t14841.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t14841.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t14841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t14841.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t14841.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14841.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t14841.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_14843){var self__ = this;
var _14843__$1 = this;return self__.meta14842;
});})(mults,ensure_mult))
;
cljs.core.async.t14841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_14843,meta14842__$1){var self__ = this;
var _14843__$1 = this;return (new cljs.core.async.t14841(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta14842__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t14841 = ((function (mults,ensure_mult){
return (function __GT_t14841(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14842){return (new cljs.core.async.t14841(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta14842));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t14841(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___14965 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14917){var state_val_14918 = (state_14917[1]);if((state_val_14918 === 1))
{var state_14917__$1 = state_14917;var statearr_14919_14966 = state_14917__$1;(statearr_14919_14966[2] = null);
(statearr_14919_14966[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 2))
{var state_14917__$1 = state_14917;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14917__$1,4,ch);
} else
{if((state_val_14918 === 3))
{var inst_14915 = (state_14917[2]);var state_14917__$1 = state_14917;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14917__$1,inst_14915);
} else
{if((state_val_14918 === 4))
{var inst_14846 = (state_14917[7]);var inst_14846__$1 = (state_14917[2]);var inst_14847 = (inst_14846__$1 == null);var state_14917__$1 = (function (){var statearr_14920 = state_14917;(statearr_14920[7] = inst_14846__$1);
return statearr_14920;
})();if(cljs.core.truth_(inst_14847))
{var statearr_14921_14967 = state_14917__$1;(statearr_14921_14967[1] = 5);
} else
{var statearr_14922_14968 = state_14917__$1;(statearr_14922_14968[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 5))
{var inst_14853 = cljs.core.deref.call(null,mults);var inst_14854 = cljs.core.vals.call(null,inst_14853);var inst_14855 = cljs.core.seq.call(null,inst_14854);var inst_14856 = inst_14855;var inst_14857 = null;var inst_14858 = 0;var inst_14859 = 0;var state_14917__$1 = (function (){var statearr_14923 = state_14917;(statearr_14923[8] = inst_14859);
(statearr_14923[9] = inst_14856);
(statearr_14923[10] = inst_14857);
(statearr_14923[11] = inst_14858);
return statearr_14923;
})();var statearr_14924_14969 = state_14917__$1;(statearr_14924_14969[2] = null);
(statearr_14924_14969[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 6))
{var inst_14896 = (state_14917[12]);var inst_14846 = (state_14917[7]);var inst_14894 = (state_14917[13]);var inst_14894__$1 = topic_fn.call(null,inst_14846);var inst_14895 = cljs.core.deref.call(null,mults);var inst_14896__$1 = cljs.core.get.call(null,inst_14895,inst_14894__$1);var state_14917__$1 = (function (){var statearr_14925 = state_14917;(statearr_14925[12] = inst_14896__$1);
(statearr_14925[13] = inst_14894__$1);
return statearr_14925;
})();if(cljs.core.truth_(inst_14896__$1))
{var statearr_14926_14970 = state_14917__$1;(statearr_14926_14970[1] = 19);
} else
{var statearr_14927_14971 = state_14917__$1;(statearr_14927_14971[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 7))
{var inst_14913 = (state_14917[2]);var state_14917__$1 = state_14917;var statearr_14928_14972 = state_14917__$1;(statearr_14928_14972[2] = inst_14913);
(statearr_14928_14972[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 8))
{var inst_14859 = (state_14917[8]);var inst_14858 = (state_14917[11]);var inst_14861 = (inst_14859 < inst_14858);var inst_14862 = inst_14861;var state_14917__$1 = state_14917;if(cljs.core.truth_(inst_14862))
{var statearr_14932_14973 = state_14917__$1;(statearr_14932_14973[1] = 10);
} else
{var statearr_14933_14974 = state_14917__$1;(statearr_14933_14974[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 9))
{var inst_14892 = (state_14917[2]);var state_14917__$1 = state_14917;var statearr_14934_14975 = state_14917__$1;(statearr_14934_14975[2] = inst_14892);
(statearr_14934_14975[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 10))
{var inst_14859 = (state_14917[8]);var inst_14856 = (state_14917[9]);var inst_14857 = (state_14917[10]);var inst_14858 = (state_14917[11]);var inst_14864 = cljs.core._nth.call(null,inst_14857,inst_14859);var inst_14865 = cljs.core.async.muxch_STAR_.call(null,inst_14864);var inst_14866 = cljs.core.async.close_BANG_.call(null,inst_14865);var inst_14867 = (inst_14859 + 1);var tmp14929 = inst_14856;var tmp14930 = inst_14857;var tmp14931 = inst_14858;var inst_14856__$1 = tmp14929;var inst_14857__$1 = tmp14930;var inst_14858__$1 = tmp14931;var inst_14859__$1 = inst_14867;var state_14917__$1 = (function (){var statearr_14935 = state_14917;(statearr_14935[8] = inst_14859__$1);
(statearr_14935[14] = inst_14866);
(statearr_14935[9] = inst_14856__$1);
(statearr_14935[10] = inst_14857__$1);
(statearr_14935[11] = inst_14858__$1);
return statearr_14935;
})();var statearr_14936_14976 = state_14917__$1;(statearr_14936_14976[2] = null);
(statearr_14936_14976[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 11))
{var inst_14870 = (state_14917[15]);var inst_14856 = (state_14917[9]);var inst_14870__$1 = cljs.core.seq.call(null,inst_14856);var state_14917__$1 = (function (){var statearr_14937 = state_14917;(statearr_14937[15] = inst_14870__$1);
return statearr_14937;
})();if(inst_14870__$1)
{var statearr_14938_14977 = state_14917__$1;(statearr_14938_14977[1] = 13);
} else
{var statearr_14939_14978 = state_14917__$1;(statearr_14939_14978[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 12))
{var inst_14890 = (state_14917[2]);var state_14917__$1 = state_14917;var statearr_14940_14979 = state_14917__$1;(statearr_14940_14979[2] = inst_14890);
(statearr_14940_14979[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 13))
{var inst_14870 = (state_14917[15]);var inst_14872 = cljs.core.chunked_seq_QMARK_.call(null,inst_14870);var state_14917__$1 = state_14917;if(inst_14872)
{var statearr_14941_14980 = state_14917__$1;(statearr_14941_14980[1] = 16);
} else
{var statearr_14942_14981 = state_14917__$1;(statearr_14942_14981[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 14))
{var state_14917__$1 = state_14917;var statearr_14943_14982 = state_14917__$1;(statearr_14943_14982[2] = null);
(statearr_14943_14982[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 15))
{var inst_14888 = (state_14917[2]);var state_14917__$1 = state_14917;var statearr_14944_14983 = state_14917__$1;(statearr_14944_14983[2] = inst_14888);
(statearr_14944_14983[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 16))
{var inst_14870 = (state_14917[15]);var inst_14874 = cljs.core.chunk_first.call(null,inst_14870);var inst_14875 = cljs.core.chunk_rest.call(null,inst_14870);var inst_14876 = cljs.core.count.call(null,inst_14874);var inst_14856 = inst_14875;var inst_14857 = inst_14874;var inst_14858 = inst_14876;var inst_14859 = 0;var state_14917__$1 = (function (){var statearr_14945 = state_14917;(statearr_14945[8] = inst_14859);
(statearr_14945[9] = inst_14856);
(statearr_14945[10] = inst_14857);
(statearr_14945[11] = inst_14858);
return statearr_14945;
})();var statearr_14946_14984 = state_14917__$1;(statearr_14946_14984[2] = null);
(statearr_14946_14984[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 17))
{var inst_14870 = (state_14917[15]);var inst_14879 = cljs.core.first.call(null,inst_14870);var inst_14880 = cljs.core.async.muxch_STAR_.call(null,inst_14879);var inst_14881 = cljs.core.async.close_BANG_.call(null,inst_14880);var inst_14882 = cljs.core.next.call(null,inst_14870);var inst_14856 = inst_14882;var inst_14857 = null;var inst_14858 = 0;var inst_14859 = 0;var state_14917__$1 = (function (){var statearr_14947 = state_14917;(statearr_14947[8] = inst_14859);
(statearr_14947[16] = inst_14881);
(statearr_14947[9] = inst_14856);
(statearr_14947[10] = inst_14857);
(statearr_14947[11] = inst_14858);
return statearr_14947;
})();var statearr_14948_14985 = state_14917__$1;(statearr_14948_14985[2] = null);
(statearr_14948_14985[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 18))
{var inst_14885 = (state_14917[2]);var state_14917__$1 = state_14917;var statearr_14949_14986 = state_14917__$1;(statearr_14949_14986[2] = inst_14885);
(statearr_14949_14986[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 19))
{var state_14917__$1 = state_14917;var statearr_14950_14987 = state_14917__$1;(statearr_14950_14987[2] = null);
(statearr_14950_14987[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 20))
{var state_14917__$1 = state_14917;var statearr_14951_14988 = state_14917__$1;(statearr_14951_14988[2] = null);
(statearr_14951_14988[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 21))
{var inst_14910 = (state_14917[2]);var state_14917__$1 = (function (){var statearr_14952 = state_14917;(statearr_14952[17] = inst_14910);
return statearr_14952;
})();var statearr_14953_14989 = state_14917__$1;(statearr_14953_14989[2] = null);
(statearr_14953_14989[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 22))
{var inst_14907 = (state_14917[2]);var state_14917__$1 = state_14917;var statearr_14954_14990 = state_14917__$1;(statearr_14954_14990[2] = inst_14907);
(statearr_14954_14990[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 23))
{var inst_14894 = (state_14917[13]);var inst_14898 = (state_14917[2]);var inst_14899 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_14894);var state_14917__$1 = (function (){var statearr_14955 = state_14917;(statearr_14955[18] = inst_14898);
return statearr_14955;
})();var statearr_14956_14991 = state_14917__$1;(statearr_14956_14991[2] = inst_14899);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14917__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14918 === 24))
{var inst_14896 = (state_14917[12]);var inst_14846 = (state_14917[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14917,23,Object,null,22);var inst_14903 = cljs.core.async.muxch_STAR_.call(null,inst_14896);var state_14917__$1 = state_14917;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14917__$1,25,inst_14903,inst_14846);
} else
{if((state_val_14918 === 25))
{var inst_14905 = (state_14917[2]);var state_14917__$1 = state_14917;var statearr_14957_14992 = state_14917__$1;(statearr_14957_14992[2] = inst_14905);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14917__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14961 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14961[0] = state_machine__5507__auto__);
(statearr_14961[1] = 1);
return statearr_14961;
});
var state_machine__5507__auto____1 = (function (state_14917){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14917);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14962){if((e14962 instanceof Object))
{var ex__5510__auto__ = e14962;var statearr_14963_14993 = state_14917;(statearr_14963_14993[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14917);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14962;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14994 = state_14917;
state_14917 = G__14994;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14917){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14917);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14964 = f__5522__auto__.call(null);(statearr_14964[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14965);
return statearr_14964;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15131 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15101){var state_val_15102 = (state_15101[1]);if((state_val_15102 === 1))
{var state_15101__$1 = state_15101;var statearr_15103_15132 = state_15101__$1;(statearr_15103_15132[2] = null);
(statearr_15103_15132[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 2))
{var inst_15064 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15065 = 0;var state_15101__$1 = (function (){var statearr_15104 = state_15101;(statearr_15104[7] = inst_15064);
(statearr_15104[8] = inst_15065);
return statearr_15104;
})();var statearr_15105_15133 = state_15101__$1;(statearr_15105_15133[2] = null);
(statearr_15105_15133[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 3))
{var inst_15099 = (state_15101[2]);var state_15101__$1 = state_15101;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15101__$1,inst_15099);
} else
{if((state_val_15102 === 4))
{var inst_15065 = (state_15101[8]);var inst_15067 = (inst_15065 < cnt);var state_15101__$1 = state_15101;if(cljs.core.truth_(inst_15067))
{var statearr_15106_15134 = state_15101__$1;(statearr_15106_15134[1] = 6);
} else
{var statearr_15107_15135 = state_15101__$1;(statearr_15107_15135[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 5))
{var inst_15085 = (state_15101[2]);var state_15101__$1 = (function (){var statearr_15108 = state_15101;(statearr_15108[9] = inst_15085);
return statearr_15108;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15101__$1,12,dchan);
} else
{if((state_val_15102 === 6))
{var state_15101__$1 = state_15101;var statearr_15109_15136 = state_15101__$1;(statearr_15109_15136[2] = null);
(statearr_15109_15136[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 7))
{var state_15101__$1 = state_15101;var statearr_15110_15137 = state_15101__$1;(statearr_15110_15137[2] = null);
(statearr_15110_15137[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 8))
{var inst_15083 = (state_15101[2]);var state_15101__$1 = state_15101;var statearr_15111_15138 = state_15101__$1;(statearr_15111_15138[2] = inst_15083);
(statearr_15111_15138[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 9))
{var inst_15065 = (state_15101[8]);var inst_15078 = (state_15101[2]);var inst_15079 = (inst_15065 + 1);var inst_15065__$1 = inst_15079;var state_15101__$1 = (function (){var statearr_15112 = state_15101;(statearr_15112[8] = inst_15065__$1);
(statearr_15112[10] = inst_15078);
return statearr_15112;
})();var statearr_15113_15139 = state_15101__$1;(statearr_15113_15139[2] = null);
(statearr_15113_15139[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 10))
{var inst_15069 = (state_15101[2]);var inst_15070 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15101__$1 = (function (){var statearr_15114 = state_15101;(statearr_15114[11] = inst_15069);
return statearr_15114;
})();var statearr_15115_15140 = state_15101__$1;(statearr_15115_15140[2] = inst_15070);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15101__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 11))
{var inst_15065 = (state_15101[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15101,10,Object,null,9);var inst_15074 = chs__$1.call(null,inst_15065);var inst_15075 = done.call(null,inst_15065);var inst_15076 = cljs.core.async.take_BANG_.call(null,inst_15074,inst_15075);var state_15101__$1 = state_15101;var statearr_15116_15141 = state_15101__$1;(statearr_15116_15141[2] = inst_15076);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15101__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 12))
{var inst_15087 = (state_15101[12]);var inst_15087__$1 = (state_15101[2]);var inst_15088 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15087__$1);var state_15101__$1 = (function (){var statearr_15117 = state_15101;(statearr_15117[12] = inst_15087__$1);
return statearr_15117;
})();if(cljs.core.truth_(inst_15088))
{var statearr_15118_15142 = state_15101__$1;(statearr_15118_15142[1] = 13);
} else
{var statearr_15119_15143 = state_15101__$1;(statearr_15119_15143[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 13))
{var inst_15090 = cljs.core.async.close_BANG_.call(null,out);var state_15101__$1 = state_15101;var statearr_15120_15144 = state_15101__$1;(statearr_15120_15144[2] = inst_15090);
(statearr_15120_15144[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 14))
{var inst_15087 = (state_15101[12]);var inst_15092 = cljs.core.apply.call(null,f,inst_15087);var state_15101__$1 = state_15101;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15101__$1,16,out,inst_15092);
} else
{if((state_val_15102 === 15))
{var inst_15097 = (state_15101[2]);var state_15101__$1 = state_15101;var statearr_15121_15145 = state_15101__$1;(statearr_15121_15145[2] = inst_15097);
(statearr_15121_15145[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15102 === 16))
{var inst_15094 = (state_15101[2]);var state_15101__$1 = (function (){var statearr_15122 = state_15101;(statearr_15122[13] = inst_15094);
return statearr_15122;
})();var statearr_15123_15146 = state_15101__$1;(statearr_15123_15146[2] = null);
(statearr_15123_15146[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15127[0] = state_machine__5507__auto__);
(statearr_15127[1] = 1);
return statearr_15127;
});
var state_machine__5507__auto____1 = (function (state_15101){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15101);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15128){if((e15128 instanceof Object))
{var ex__5510__auto__ = e15128;var statearr_15129_15147 = state_15101;(statearr_15129_15147[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15101);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15128;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15148 = state_15101;
state_15101 = G__15148;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15101){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15101);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15130 = f__5522__auto__.call(null);(statearr_15130[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15131);
return statearr_15130;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15256 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15232){var state_val_15233 = (state_15232[1]);if((state_val_15233 === 1))
{var inst_15203 = cljs.core.vec.call(null,chs);var inst_15204 = inst_15203;var state_15232__$1 = (function (){var statearr_15234 = state_15232;(statearr_15234[7] = inst_15204);
return statearr_15234;
})();var statearr_15235_15257 = state_15232__$1;(statearr_15235_15257[2] = null);
(statearr_15235_15257[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15233 === 2))
{var inst_15204 = (state_15232[7]);var inst_15206 = cljs.core.count.call(null,inst_15204);var inst_15207 = (inst_15206 > 0);var state_15232__$1 = state_15232;if(cljs.core.truth_(inst_15207))
{var statearr_15236_15258 = state_15232__$1;(statearr_15236_15258[1] = 4);
} else
{var statearr_15237_15259 = state_15232__$1;(statearr_15237_15259[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15233 === 3))
{var inst_15230 = (state_15232[2]);var state_15232__$1 = state_15232;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15232__$1,inst_15230);
} else
{if((state_val_15233 === 4))
{var inst_15204 = (state_15232[7]);var state_15232__$1 = state_15232;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15232__$1,7,inst_15204);
} else
{if((state_val_15233 === 5))
{var inst_15226 = cljs.core.async.close_BANG_.call(null,out);var state_15232__$1 = state_15232;var statearr_15238_15260 = state_15232__$1;(statearr_15238_15260[2] = inst_15226);
(statearr_15238_15260[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15233 === 6))
{var inst_15228 = (state_15232[2]);var state_15232__$1 = state_15232;var statearr_15239_15261 = state_15232__$1;(statearr_15239_15261[2] = inst_15228);
(statearr_15239_15261[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15233 === 7))
{var inst_15212 = (state_15232[8]);var inst_15211 = (state_15232[9]);var inst_15211__$1 = (state_15232[2]);var inst_15212__$1 = cljs.core.nth.call(null,inst_15211__$1,0,null);var inst_15213 = cljs.core.nth.call(null,inst_15211__$1,1,null);var inst_15214 = (inst_15212__$1 == null);var state_15232__$1 = (function (){var statearr_15240 = state_15232;(statearr_15240[8] = inst_15212__$1);
(statearr_15240[10] = inst_15213);
(statearr_15240[9] = inst_15211__$1);
return statearr_15240;
})();if(cljs.core.truth_(inst_15214))
{var statearr_15241_15262 = state_15232__$1;(statearr_15241_15262[1] = 8);
} else
{var statearr_15242_15263 = state_15232__$1;(statearr_15242_15263[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15233 === 8))
{var inst_15212 = (state_15232[8]);var inst_15213 = (state_15232[10]);var inst_15211 = (state_15232[9]);var inst_15204 = (state_15232[7]);var inst_15216 = (function (){var c = inst_15213;var v = inst_15212;var vec__15209 = inst_15211;var cs = inst_15204;return ((function (c,v,vec__15209,cs,inst_15212,inst_15213,inst_15211,inst_15204,state_val_15233){
return (function (p1__15149_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15149_SHARP_);
});
;})(c,v,vec__15209,cs,inst_15212,inst_15213,inst_15211,inst_15204,state_val_15233))
})();var inst_15217 = cljs.core.filterv.call(null,inst_15216,inst_15204);var inst_15204__$1 = inst_15217;var state_15232__$1 = (function (){var statearr_15243 = state_15232;(statearr_15243[7] = inst_15204__$1);
return statearr_15243;
})();var statearr_15244_15264 = state_15232__$1;(statearr_15244_15264[2] = null);
(statearr_15244_15264[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15233 === 9))
{var inst_15212 = (state_15232[8]);var state_15232__$1 = state_15232;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15232__$1,11,out,inst_15212);
} else
{if((state_val_15233 === 10))
{var inst_15224 = (state_15232[2]);var state_15232__$1 = state_15232;var statearr_15246_15265 = state_15232__$1;(statearr_15246_15265[2] = inst_15224);
(statearr_15246_15265[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15233 === 11))
{var inst_15204 = (state_15232[7]);var inst_15221 = (state_15232[2]);var tmp15245 = inst_15204;var inst_15204__$1 = tmp15245;var state_15232__$1 = (function (){var statearr_15247 = state_15232;(statearr_15247[11] = inst_15221);
(statearr_15247[7] = inst_15204__$1);
return statearr_15247;
})();var statearr_15248_15266 = state_15232__$1;(statearr_15248_15266[2] = null);
(statearr_15248_15266[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15252 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15252[0] = state_machine__5507__auto__);
(statearr_15252[1] = 1);
return statearr_15252;
});
var state_machine__5507__auto____1 = (function (state_15232){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15232);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15253){if((e15253 instanceof Object))
{var ex__5510__auto__ = e15253;var statearr_15254_15267 = state_15232;(statearr_15254_15267[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15232);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15253;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15268 = state_15232;
state_15232 = G__15268;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15232){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15232);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15255 = f__5522__auto__.call(null);(statearr_15255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15256);
return statearr_15255;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15361 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15338){var state_val_15339 = (state_15338[1]);if((state_val_15339 === 1))
{var inst_15315 = 0;var state_15338__$1 = (function (){var statearr_15340 = state_15338;(statearr_15340[7] = inst_15315);
return statearr_15340;
})();var statearr_15341_15362 = state_15338__$1;(statearr_15341_15362[2] = null);
(statearr_15341_15362[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15339 === 2))
{var inst_15315 = (state_15338[7]);var inst_15317 = (inst_15315 < n);var state_15338__$1 = state_15338;if(cljs.core.truth_(inst_15317))
{var statearr_15342_15363 = state_15338__$1;(statearr_15342_15363[1] = 4);
} else
{var statearr_15343_15364 = state_15338__$1;(statearr_15343_15364[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15339 === 3))
{var inst_15335 = (state_15338[2]);var inst_15336 = cljs.core.async.close_BANG_.call(null,out);var state_15338__$1 = (function (){var statearr_15344 = state_15338;(statearr_15344[8] = inst_15335);
return statearr_15344;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15338__$1,inst_15336);
} else
{if((state_val_15339 === 4))
{var state_15338__$1 = state_15338;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15338__$1,7,ch);
} else
{if((state_val_15339 === 5))
{var state_15338__$1 = state_15338;var statearr_15345_15365 = state_15338__$1;(statearr_15345_15365[2] = null);
(statearr_15345_15365[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15339 === 6))
{var inst_15333 = (state_15338[2]);var state_15338__$1 = state_15338;var statearr_15346_15366 = state_15338__$1;(statearr_15346_15366[2] = inst_15333);
(statearr_15346_15366[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15339 === 7))
{var inst_15320 = (state_15338[9]);var inst_15320__$1 = (state_15338[2]);var inst_15321 = (inst_15320__$1 == null);var inst_15322 = cljs.core.not.call(null,inst_15321);var state_15338__$1 = (function (){var statearr_15347 = state_15338;(statearr_15347[9] = inst_15320__$1);
return statearr_15347;
})();if(inst_15322)
{var statearr_15348_15367 = state_15338__$1;(statearr_15348_15367[1] = 8);
} else
{var statearr_15349_15368 = state_15338__$1;(statearr_15349_15368[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15339 === 8))
{var inst_15320 = (state_15338[9]);var state_15338__$1 = state_15338;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15338__$1,11,out,inst_15320);
} else
{if((state_val_15339 === 9))
{var state_15338__$1 = state_15338;var statearr_15350_15369 = state_15338__$1;(statearr_15350_15369[2] = null);
(statearr_15350_15369[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15339 === 10))
{var inst_15330 = (state_15338[2]);var state_15338__$1 = state_15338;var statearr_15351_15370 = state_15338__$1;(statearr_15351_15370[2] = inst_15330);
(statearr_15351_15370[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15339 === 11))
{var inst_15315 = (state_15338[7]);var inst_15325 = (state_15338[2]);var inst_15326 = (inst_15315 + 1);var inst_15315__$1 = inst_15326;var state_15338__$1 = (function (){var statearr_15352 = state_15338;(statearr_15352[10] = inst_15325);
(statearr_15352[7] = inst_15315__$1);
return statearr_15352;
})();var statearr_15353_15371 = state_15338__$1;(statearr_15353_15371[2] = null);
(statearr_15353_15371[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15357 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15357[0] = state_machine__5507__auto__);
(statearr_15357[1] = 1);
return statearr_15357;
});
var state_machine__5507__auto____1 = (function (state_15338){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15338);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15358){if((e15358 instanceof Object))
{var ex__5510__auto__ = e15358;var statearr_15359_15372 = state_15338;(statearr_15359_15372[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15338);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15358;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15373 = state_15338;
state_15338 = G__15373;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15338){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15338);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15360 = f__5522__auto__.call(null);(statearr_15360[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15361);
return statearr_15360;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15470 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15445){var state_val_15446 = (state_15445[1]);if((state_val_15446 === 1))
{var inst_15422 = null;var state_15445__$1 = (function (){var statearr_15447 = state_15445;(statearr_15447[7] = inst_15422);
return statearr_15447;
})();var statearr_15448_15471 = state_15445__$1;(statearr_15448_15471[2] = null);
(statearr_15448_15471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 2))
{var state_15445__$1 = state_15445;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15445__$1,4,ch);
} else
{if((state_val_15446 === 3))
{var inst_15442 = (state_15445[2]);var inst_15443 = cljs.core.async.close_BANG_.call(null,out);var state_15445__$1 = (function (){var statearr_15449 = state_15445;(statearr_15449[8] = inst_15442);
return statearr_15449;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15445__$1,inst_15443);
} else
{if((state_val_15446 === 4))
{var inst_15425 = (state_15445[9]);var inst_15425__$1 = (state_15445[2]);var inst_15426 = (inst_15425__$1 == null);var inst_15427 = cljs.core.not.call(null,inst_15426);var state_15445__$1 = (function (){var statearr_15450 = state_15445;(statearr_15450[9] = inst_15425__$1);
return statearr_15450;
})();if(inst_15427)
{var statearr_15451_15472 = state_15445__$1;(statearr_15451_15472[1] = 5);
} else
{var statearr_15452_15473 = state_15445__$1;(statearr_15452_15473[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 5))
{var inst_15425 = (state_15445[9]);var inst_15422 = (state_15445[7]);var inst_15429 = cljs.core._EQ_.call(null,inst_15425,inst_15422);var state_15445__$1 = state_15445;if(inst_15429)
{var statearr_15453_15474 = state_15445__$1;(statearr_15453_15474[1] = 8);
} else
{var statearr_15454_15475 = state_15445__$1;(statearr_15454_15475[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 6))
{var state_15445__$1 = state_15445;var statearr_15456_15476 = state_15445__$1;(statearr_15456_15476[2] = null);
(statearr_15456_15476[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 7))
{var inst_15440 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15457_15477 = state_15445__$1;(statearr_15457_15477[2] = inst_15440);
(statearr_15457_15477[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 8))
{var inst_15422 = (state_15445[7]);var tmp15455 = inst_15422;var inst_15422__$1 = tmp15455;var state_15445__$1 = (function (){var statearr_15458 = state_15445;(statearr_15458[7] = inst_15422__$1);
return statearr_15458;
})();var statearr_15459_15478 = state_15445__$1;(statearr_15459_15478[2] = null);
(statearr_15459_15478[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 9))
{var inst_15425 = (state_15445[9]);var state_15445__$1 = state_15445;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15445__$1,11,out,inst_15425);
} else
{if((state_val_15446 === 10))
{var inst_15437 = (state_15445[2]);var state_15445__$1 = state_15445;var statearr_15460_15479 = state_15445__$1;(statearr_15460_15479[2] = inst_15437);
(statearr_15460_15479[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15446 === 11))
{var inst_15425 = (state_15445[9]);var inst_15434 = (state_15445[2]);var inst_15422 = inst_15425;var state_15445__$1 = (function (){var statearr_15461 = state_15445;(statearr_15461[7] = inst_15422);
(statearr_15461[10] = inst_15434);
return statearr_15461;
})();var statearr_15462_15480 = state_15445__$1;(statearr_15462_15480[2] = null);
(statearr_15462_15480[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15466 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15466[0] = state_machine__5507__auto__);
(statearr_15466[1] = 1);
return statearr_15466;
});
var state_machine__5507__auto____1 = (function (state_15445){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15445);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15467){if((e15467 instanceof Object))
{var ex__5510__auto__ = e15467;var statearr_15468_15481 = state_15445;(statearr_15468_15481[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15445);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15482 = state_15445;
state_15445 = G__15482;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15445){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15445);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15469 = f__5522__auto__.call(null);(statearr_15469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15470);
return statearr_15469;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15617 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15587){var state_val_15588 = (state_15587[1]);if((state_val_15588 === 1))
{var inst_15550 = (new Array(n));var inst_15551 = inst_15550;var inst_15552 = 0;var state_15587__$1 = (function (){var statearr_15589 = state_15587;(statearr_15589[7] = inst_15551);
(statearr_15589[8] = inst_15552);
return statearr_15589;
})();var statearr_15590_15618 = state_15587__$1;(statearr_15590_15618[2] = null);
(statearr_15590_15618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 2))
{var state_15587__$1 = state_15587;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15587__$1,4,ch);
} else
{if((state_val_15588 === 3))
{var inst_15585 = (state_15587[2]);var state_15587__$1 = state_15587;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15587__$1,inst_15585);
} else
{if((state_val_15588 === 4))
{var inst_15555 = (state_15587[9]);var inst_15555__$1 = (state_15587[2]);var inst_15556 = (inst_15555__$1 == null);var inst_15557 = cljs.core.not.call(null,inst_15556);var state_15587__$1 = (function (){var statearr_15591 = state_15587;(statearr_15591[9] = inst_15555__$1);
return statearr_15591;
})();if(inst_15557)
{var statearr_15592_15619 = state_15587__$1;(statearr_15592_15619[1] = 5);
} else
{var statearr_15593_15620 = state_15587__$1;(statearr_15593_15620[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 5))
{var inst_15551 = (state_15587[7]);var inst_15552 = (state_15587[8]);var inst_15555 = (state_15587[9]);var inst_15560 = (state_15587[10]);var inst_15559 = (inst_15551[inst_15552] = inst_15555);var inst_15560__$1 = (inst_15552 + 1);var inst_15561 = (inst_15560__$1 < n);var state_15587__$1 = (function (){var statearr_15594 = state_15587;(statearr_15594[11] = inst_15559);
(statearr_15594[10] = inst_15560__$1);
return statearr_15594;
})();if(cljs.core.truth_(inst_15561))
{var statearr_15595_15621 = state_15587__$1;(statearr_15595_15621[1] = 8);
} else
{var statearr_15596_15622 = state_15587__$1;(statearr_15596_15622[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 6))
{var inst_15552 = (state_15587[8]);var inst_15573 = (inst_15552 > 0);var state_15587__$1 = state_15587;if(cljs.core.truth_(inst_15573))
{var statearr_15598_15623 = state_15587__$1;(statearr_15598_15623[1] = 12);
} else
{var statearr_15599_15624 = state_15587__$1;(statearr_15599_15624[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 7))
{var inst_15583 = (state_15587[2]);var state_15587__$1 = state_15587;var statearr_15600_15625 = state_15587__$1;(statearr_15600_15625[2] = inst_15583);
(statearr_15600_15625[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 8))
{var inst_15551 = (state_15587[7]);var inst_15560 = (state_15587[10]);var tmp15597 = inst_15551;var inst_15551__$1 = tmp15597;var inst_15552 = inst_15560;var state_15587__$1 = (function (){var statearr_15601 = state_15587;(statearr_15601[7] = inst_15551__$1);
(statearr_15601[8] = inst_15552);
return statearr_15601;
})();var statearr_15602_15626 = state_15587__$1;(statearr_15602_15626[2] = null);
(statearr_15602_15626[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 9))
{var inst_15551 = (state_15587[7]);var inst_15565 = cljs.core.vec.call(null,inst_15551);var state_15587__$1 = state_15587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15587__$1,11,out,inst_15565);
} else
{if((state_val_15588 === 10))
{var inst_15571 = (state_15587[2]);var state_15587__$1 = state_15587;var statearr_15603_15627 = state_15587__$1;(statearr_15603_15627[2] = inst_15571);
(statearr_15603_15627[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 11))
{var inst_15567 = (state_15587[2]);var inst_15568 = (new Array(n));var inst_15551 = inst_15568;var inst_15552 = 0;var state_15587__$1 = (function (){var statearr_15604 = state_15587;(statearr_15604[7] = inst_15551);
(statearr_15604[8] = inst_15552);
(statearr_15604[12] = inst_15567);
return statearr_15604;
})();var statearr_15605_15628 = state_15587__$1;(statearr_15605_15628[2] = null);
(statearr_15605_15628[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 12))
{var inst_15551 = (state_15587[7]);var inst_15575 = cljs.core.vec.call(null,inst_15551);var state_15587__$1 = state_15587;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15587__$1,15,out,inst_15575);
} else
{if((state_val_15588 === 13))
{var state_15587__$1 = state_15587;var statearr_15606_15629 = state_15587__$1;(statearr_15606_15629[2] = null);
(statearr_15606_15629[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 14))
{var inst_15580 = (state_15587[2]);var inst_15581 = cljs.core.async.close_BANG_.call(null,out);var state_15587__$1 = (function (){var statearr_15607 = state_15587;(statearr_15607[13] = inst_15580);
return statearr_15607;
})();var statearr_15608_15630 = state_15587__$1;(statearr_15608_15630[2] = inst_15581);
(statearr_15608_15630[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15588 === 15))
{var inst_15577 = (state_15587[2]);var state_15587__$1 = state_15587;var statearr_15609_15631 = state_15587__$1;(statearr_15609_15631[2] = inst_15577);
(statearr_15609_15631[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15613 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15613[0] = state_machine__5507__auto__);
(statearr_15613[1] = 1);
return statearr_15613;
});
var state_machine__5507__auto____1 = (function (state_15587){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15587);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15614){if((e15614 instanceof Object))
{var ex__5510__auto__ = e15614;var statearr_15615_15632 = state_15587;(statearr_15615_15632[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15587);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15614;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15633 = state_15587;
state_15587 = G__15633;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15587){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15616 = f__5522__auto__.call(null);(statearr_15616[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15617);
return statearr_15616;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15776 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15746){var state_val_15747 = (state_15746[1]);if((state_val_15747 === 1))
{var inst_15705 = [];var inst_15706 = inst_15705;var inst_15707 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_15746__$1 = (function (){var statearr_15748 = state_15746;(statearr_15748[7] = inst_15707);
(statearr_15748[8] = inst_15706);
return statearr_15748;
})();var statearr_15749_15777 = state_15746__$1;(statearr_15749_15777[2] = null);
(statearr_15749_15777[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 2))
{var state_15746__$1 = state_15746;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15746__$1,4,ch);
} else
{if((state_val_15747 === 3))
{var inst_15744 = (state_15746[2]);var state_15746__$1 = state_15746;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15746__$1,inst_15744);
} else
{if((state_val_15747 === 4))
{var inst_15710 = (state_15746[9]);var inst_15710__$1 = (state_15746[2]);var inst_15711 = (inst_15710__$1 == null);var inst_15712 = cljs.core.not.call(null,inst_15711);var state_15746__$1 = (function (){var statearr_15750 = state_15746;(statearr_15750[9] = inst_15710__$1);
return statearr_15750;
})();if(inst_15712)
{var statearr_15751_15778 = state_15746__$1;(statearr_15751_15778[1] = 5);
} else
{var statearr_15752_15779 = state_15746__$1;(statearr_15752_15779[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 5))
{var inst_15707 = (state_15746[7]);var inst_15714 = (state_15746[10]);var inst_15710 = (state_15746[9]);var inst_15714__$1 = f.call(null,inst_15710);var inst_15715 = cljs.core._EQ_.call(null,inst_15714__$1,inst_15707);var inst_15716 = cljs.core.keyword_identical_QMARK_.call(null,inst_15707,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_15717 = (inst_15715) || (inst_15716);var state_15746__$1 = (function (){var statearr_15753 = state_15746;(statearr_15753[10] = inst_15714__$1);
return statearr_15753;
})();if(cljs.core.truth_(inst_15717))
{var statearr_15754_15780 = state_15746__$1;(statearr_15754_15780[1] = 8);
} else
{var statearr_15755_15781 = state_15746__$1;(statearr_15755_15781[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 6))
{var inst_15706 = (state_15746[8]);var inst_15731 = inst_15706.length;var inst_15732 = (inst_15731 > 0);var state_15746__$1 = state_15746;if(cljs.core.truth_(inst_15732))
{var statearr_15757_15782 = state_15746__$1;(statearr_15757_15782[1] = 12);
} else
{var statearr_15758_15783 = state_15746__$1;(statearr_15758_15783[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 7))
{var inst_15742 = (state_15746[2]);var state_15746__$1 = state_15746;var statearr_15759_15784 = state_15746__$1;(statearr_15759_15784[2] = inst_15742);
(statearr_15759_15784[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 8))
{var inst_15706 = (state_15746[8]);var inst_15714 = (state_15746[10]);var inst_15710 = (state_15746[9]);var inst_15719 = inst_15706.push(inst_15710);var tmp15756 = inst_15706;var inst_15706__$1 = tmp15756;var inst_15707 = inst_15714;var state_15746__$1 = (function (){var statearr_15760 = state_15746;(statearr_15760[7] = inst_15707);
(statearr_15760[8] = inst_15706__$1);
(statearr_15760[11] = inst_15719);
return statearr_15760;
})();var statearr_15761_15785 = state_15746__$1;(statearr_15761_15785[2] = null);
(statearr_15761_15785[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 9))
{var inst_15706 = (state_15746[8]);var inst_15722 = cljs.core.vec.call(null,inst_15706);var state_15746__$1 = state_15746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15746__$1,11,out,inst_15722);
} else
{if((state_val_15747 === 10))
{var inst_15729 = (state_15746[2]);var state_15746__$1 = state_15746;var statearr_15762_15786 = state_15746__$1;(statearr_15762_15786[2] = inst_15729);
(statearr_15762_15786[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 11))
{var inst_15714 = (state_15746[10]);var inst_15710 = (state_15746[9]);var inst_15724 = (state_15746[2]);var inst_15725 = [];var inst_15726 = inst_15725.push(inst_15710);var inst_15706 = inst_15725;var inst_15707 = inst_15714;var state_15746__$1 = (function (){var statearr_15763 = state_15746;(statearr_15763[7] = inst_15707);
(statearr_15763[8] = inst_15706);
(statearr_15763[12] = inst_15724);
(statearr_15763[13] = inst_15726);
return statearr_15763;
})();var statearr_15764_15787 = state_15746__$1;(statearr_15764_15787[2] = null);
(statearr_15764_15787[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 12))
{var inst_15706 = (state_15746[8]);var inst_15734 = cljs.core.vec.call(null,inst_15706);var state_15746__$1 = state_15746;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15746__$1,15,out,inst_15734);
} else
{if((state_val_15747 === 13))
{var state_15746__$1 = state_15746;var statearr_15765_15788 = state_15746__$1;(statearr_15765_15788[2] = null);
(statearr_15765_15788[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 14))
{var inst_15739 = (state_15746[2]);var inst_15740 = cljs.core.async.close_BANG_.call(null,out);var state_15746__$1 = (function (){var statearr_15766 = state_15746;(statearr_15766[14] = inst_15739);
return statearr_15766;
})();var statearr_15767_15789 = state_15746__$1;(statearr_15767_15789[2] = inst_15740);
(statearr_15767_15789[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15747 === 15))
{var inst_15736 = (state_15746[2]);var state_15746__$1 = state_15746;var statearr_15768_15790 = state_15746__$1;(statearr_15768_15790[2] = inst_15736);
(statearr_15768_15790[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_15772 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15772[0] = state_machine__5507__auto__);
(statearr_15772[1] = 1);
return statearr_15772;
});
var state_machine__5507__auto____1 = (function (state_15746){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15746);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15773){if((e15773 instanceof Object))
{var ex__5510__auto__ = e15773;var statearr_15774_15791 = state_15746;(statearr_15774_15791[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15746);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15773;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15792 = state_15746;
state_15746 = G__15792;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15746){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15746);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15775 = f__5522__auto__.call(null);(statearr_15775[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15776);
return statearr_15775;
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