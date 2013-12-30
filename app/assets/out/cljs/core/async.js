// Compiled by ClojureScript 0.0-2080
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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t15150 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15150 = (function (f,fn_handler,meta15151){
this.f = f;
this.fn_handler = fn_handler;
this.meta15151 = meta15151;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15150.cljs$lang$type = true;
cljs.core.async.t15150.cljs$lang$ctorStr = "cljs.core.async/t15150";
cljs.core.async.t15150.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15150");
});
cljs.core.async.t15150.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15150.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t15150.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t15150.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15152){var self__ = this;
var _15152__$1 = this;return self__.meta15151;
});
cljs.core.async.t15150.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15152,meta15151__$1){var self__ = this;
var _15152__$1 = this;return (new cljs.core.async.t15150(self__.f,self__.fn_handler,meta15151__$1));
});
cljs.core.async.__GT_t15150 = (function __GT_t15150(f__$1,fn_handler__$1,meta15151){return (new cljs.core.async.t15150(f__$1,fn_handler__$1,meta15151));
});
}
return (new cljs.core.async.t15150(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__15154 = buff;if(G__15154)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__15154.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__15154.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15154);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__15154);
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
{var val_15155 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_15155);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_15155);
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
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3279__auto__;
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___15156 = n;var x_15157 = 0;while(true){
if((x_15157 < n__4114__auto___15156))
{(a[x_15157] = 0);
{
var G__15158 = (x_15157 + 1);
x_15157 = G__15158;
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
var G__15159 = (i + 1);
i = G__15159;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t15163 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15163 = (function (flag,alt_flag,meta15164){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta15164 = meta15164;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15163.cljs$lang$type = true;
cljs.core.async.t15163.cljs$lang$ctorStr = "cljs.core.async/t15163";
cljs.core.async.t15163.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15163");
});
cljs.core.async.t15163.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15163.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t15163.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t15163.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15165){var self__ = this;
var _15165__$1 = this;return self__.meta15164;
});
cljs.core.async.t15163.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15165,meta15164__$1){var self__ = this;
var _15165__$1 = this;return (new cljs.core.async.t15163(self__.flag,self__.alt_flag,meta15164__$1));
});
cljs.core.async.__GT_t15163 = (function __GT_t15163(flag__$1,alt_flag__$1,meta15164){return (new cljs.core.async.t15163(flag__$1,alt_flag__$1,meta15164));
});
}
return (new cljs.core.async.t15163(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t15169 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15169 = (function (cb,flag,alt_handler,meta15170){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta15170 = meta15170;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15169.cljs$lang$type = true;
cljs.core.async.t15169.cljs$lang$ctorStr = "cljs.core.async/t15169";
cljs.core.async.t15169.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15169");
});
cljs.core.async.t15169.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15169.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t15169.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t15169.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15171){var self__ = this;
var _15171__$1 = this;return self__.meta15170;
});
cljs.core.async.t15169.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15171,meta15170__$1){var self__ = this;
var _15171__$1 = this;return (new cljs.core.async.t15169(self__.cb,self__.flag,self__.alt_handler,meta15170__$1));
});
cljs.core.async.__GT_t15169 = (function __GT_t15169(cb__$1,flag__$1,alt_handler__$1,meta15170){return (new cljs.core.async.t15169(cb__$1,flag__$1,alt_handler__$1,meta15170));
});
}
return (new cljs.core.async.t15169(cb,flag,alt_handler,null));
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
return (function (p1__15172_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__15172_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3291__auto__ = wport;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__15173 = (i + 1);
i = G__15173;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3291__auto__ = ret;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3279__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3279__auto__;
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
var alts_BANG___delegate = function (ports,p__15174){var map__15176 = p__15174;var map__15176__$1 = ((cljs.core.seq_QMARK_.call(null,map__15176))?cljs.core.apply.call(null,cljs.core.hash_map,map__15176):map__15176);var opts = map__15176__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__15174 = null;if (arguments.length > 1) {
  p__15174 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__15174);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__15177){
var ports = cljs.core.first(arglist__15177);
var p__15174 = cljs.core.rest(arglist__15177);
return alts_BANG___delegate(ports,p__15174);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t15185 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15185 = (function (ch,f,map_LT_,meta15186){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15186 = meta15186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15185.cljs$lang$type = true;
cljs.core.async.t15185.cljs$lang$ctorStr = "cljs.core.async/t15185";
cljs.core.async.t15185.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15185");
});
cljs.core.async.t15185.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15185.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t15185.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15185.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t15188 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15188 = (function (fn1,_,meta15186,ch,f,map_LT_,meta15189){
this.fn1 = fn1;
this._ = _;
this.meta15186 = meta15186;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta15189 = meta15189;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15188.cljs$lang$type = true;
cljs.core.async.t15188.cljs$lang$ctorStr = "cljs.core.async/t15188";
cljs.core.async.t15188.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15188");
});
cljs.core.async.t15188.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t15188.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t15188.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t15188.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__15178_SHARP_){return f1.call(null,(((p1__15178_SHARP_ == null))?null:self__.f.call(null,p1__15178_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t15188.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15190){var self__ = this;
var _15190__$1 = this;return self__.meta15189;
});
cljs.core.async.t15188.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15190,meta15189__$1){var self__ = this;
var _15190__$1 = this;return (new cljs.core.async.t15188(self__.fn1,self__._,self__.meta15186,self__.ch,self__.f,self__.map_LT_,meta15189__$1));
});
cljs.core.async.__GT_t15188 = (function __GT_t15188(fn1__$1,___$2,meta15186__$1,ch__$2,f__$2,map_LT___$2,meta15189){return (new cljs.core.async.t15188(fn1__$1,___$2,meta15186__$1,ch__$2,f__$2,map_LT___$2,meta15189));
});
}
return (new cljs.core.async.t15188(fn1,___$1,self__.meta15186,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3279__auto__ = ret;if(cljs.core.truth_(and__3279__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3279__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t15185.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15185.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15187){var self__ = this;
var _15187__$1 = this;return self__.meta15186;
});
cljs.core.async.t15185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15187,meta15186__$1){var self__ = this;
var _15187__$1 = this;return (new cljs.core.async.t15185(self__.ch,self__.f,self__.map_LT_,meta15186__$1));
});
cljs.core.async.__GT_t15185 = (function __GT_t15185(ch__$1,f__$1,map_LT___$1,meta15186){return (new cljs.core.async.t15185(ch__$1,f__$1,map_LT___$1,meta15186));
});
}
return (new cljs.core.async.t15185(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t15194 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15194 = (function (ch,f,map_GT_,meta15195){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta15195 = meta15195;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15194.cljs$lang$type = true;
cljs.core.async.t15194.cljs$lang$ctorStr = "cljs.core.async/t15194";
cljs.core.async.t15194.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15194");
});
cljs.core.async.t15194.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15194.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t15194.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15194.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15194.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15194.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15196){var self__ = this;
var _15196__$1 = this;return self__.meta15195;
});
cljs.core.async.t15194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15196,meta15195__$1){var self__ = this;
var _15196__$1 = this;return (new cljs.core.async.t15194(self__.ch,self__.f,self__.map_GT_,meta15195__$1));
});
cljs.core.async.__GT_t15194 = (function __GT_t15194(ch__$1,f__$1,map_GT___$1,meta15195){return (new cljs.core.async.t15194(ch__$1,f__$1,map_GT___$1,meta15195));
});
}
return (new cljs.core.async.t15194(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t15200 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15200 = (function (ch,p,filter_GT_,meta15201){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta15201 = meta15201;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15200.cljs$lang$type = true;
cljs.core.async.t15200.cljs$lang$ctorStr = "cljs.core.async/t15200";
cljs.core.async.t15200.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t15200");
});
cljs.core.async.t15200.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t15200.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t15200.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t15200.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t15200.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t15200.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t15200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_15202){var self__ = this;
var _15202__$1 = this;return self__.meta15201;
});
cljs.core.async.t15200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_15202,meta15201__$1){var self__ = this;
var _15202__$1 = this;return (new cljs.core.async.t15200(self__.ch,self__.p,self__.filter_GT_,meta15201__$1));
});
cljs.core.async.__GT_t15200 = (function __GT_t15200(ch__$1,p__$1,filter_GT___$1,meta15201){return (new cljs.core.async.t15200(ch__$1,p__$1,filter_GT___$1,meta15201));
});
}
return (new cljs.core.async.t15200(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5850__auto___15285 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_15264){var state_val_15265 = (state_15264[1]);if((state_val_15265 === 1))
{var state_15264__$1 = state_15264;var statearr_15266_15286 = state_15264__$1;(statearr_15266_15286[2] = null);
(statearr_15266_15286[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 2))
{var state_15264__$1 = state_15264;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15264__$1,4,ch);
} else
{if((state_val_15265 === 3))
{var inst_15262 = (state_15264[2]);var state_15264__$1 = state_15264;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15264__$1,inst_15262);
} else
{if((state_val_15265 === 4))
{var inst_15246 = (state_15264[7]);var inst_15246__$1 = (state_15264[2]);var inst_15247 = (inst_15246__$1 == null);var state_15264__$1 = (function (){var statearr_15267 = state_15264;(statearr_15267[7] = inst_15246__$1);
return statearr_15267;
})();if(cljs.core.truth_(inst_15247))
{var statearr_15268_15287 = state_15264__$1;(statearr_15268_15287[1] = 5);
} else
{var statearr_15269_15288 = state_15264__$1;(statearr_15269_15288[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 5))
{var inst_15249 = cljs.core.async.close_BANG_.call(null,out);var state_15264__$1 = state_15264;var statearr_15270_15289 = state_15264__$1;(statearr_15270_15289[2] = inst_15249);
(statearr_15270_15289[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 6))
{var inst_15246 = (state_15264[7]);var inst_15251 = p.call(null,inst_15246);var state_15264__$1 = state_15264;if(cljs.core.truth_(inst_15251))
{var statearr_15271_15290 = state_15264__$1;(statearr_15271_15290[1] = 8);
} else
{var statearr_15272_15291 = state_15264__$1;(statearr_15272_15291[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 7))
{var inst_15260 = (state_15264[2]);var state_15264__$1 = state_15264;var statearr_15273_15292 = state_15264__$1;(statearr_15273_15292[2] = inst_15260);
(statearr_15273_15292[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 8))
{var inst_15246 = (state_15264[7]);var state_15264__$1 = state_15264;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15264__$1,11,out,inst_15246);
} else
{if((state_val_15265 === 9))
{var state_15264__$1 = state_15264;var statearr_15274_15293 = state_15264__$1;(statearr_15274_15293[2] = null);
(statearr_15274_15293[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 10))
{var inst_15257 = (state_15264[2]);var state_15264__$1 = (function (){var statearr_15275 = state_15264;(statearr_15275[8] = inst_15257);
return statearr_15275;
})();var statearr_15276_15294 = state_15264__$1;(statearr_15276_15294[2] = null);
(statearr_15276_15294[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15265 === 11))
{var inst_15254 = (state_15264[2]);var state_15264__$1 = state_15264;var statearr_15277_15295 = state_15264__$1;(statearr_15277_15295[2] = inst_15254);
(statearr_15277_15295[1] = 10);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_15281 = (new Array(9));(statearr_15281[0] = state_machine__5781__auto__);
(statearr_15281[1] = 1);
return statearr_15281;
});
var state_machine__5781__auto____1 = (function (state_15264){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_15264);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e15282){if((e15282 instanceof Object))
{var ex__5784__auto__ = e15282;var statearr_15283_15296 = state_15264;(statearr_15283_15296[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15264);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15282;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15297 = state_15264;
state_15264 = G__15297;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_15264){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_15264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_15284 = f__5851__auto__.call(null);(statearr_15284[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___15285);
return statearr_15284;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5850__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_15449){var state_val_15450 = (state_15449[1]);if((state_val_15450 === 1))
{var state_15449__$1 = state_15449;var statearr_15451_15488 = state_15449__$1;(statearr_15451_15488[2] = null);
(statearr_15451_15488[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 2))
{var state_15449__$1 = state_15449;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15449__$1,4,in$);
} else
{if((state_val_15450 === 3))
{var inst_15447 = (state_15449[2]);var state_15449__$1 = state_15449;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15449__$1,inst_15447);
} else
{if((state_val_15450 === 4))
{var inst_15395 = (state_15449[7]);var inst_15395__$1 = (state_15449[2]);var inst_15396 = (inst_15395__$1 == null);var state_15449__$1 = (function (){var statearr_15452 = state_15449;(statearr_15452[7] = inst_15395__$1);
return statearr_15452;
})();if(cljs.core.truth_(inst_15396))
{var statearr_15453_15489 = state_15449__$1;(statearr_15453_15489[1] = 5);
} else
{var statearr_15454_15490 = state_15449__$1;(statearr_15454_15490[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 5))
{var inst_15398 = cljs.core.async.close_BANG_.call(null,out);var state_15449__$1 = state_15449;var statearr_15455_15491 = state_15449__$1;(statearr_15455_15491[2] = inst_15398);
(statearr_15455_15491[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 6))
{var inst_15395 = (state_15449[7]);var inst_15400 = f.call(null,inst_15395);var inst_15405 = cljs.core.seq.call(null,inst_15400);var inst_15406 = inst_15405;var inst_15407 = null;var inst_15408 = 0;var inst_15409 = 0;var state_15449__$1 = (function (){var statearr_15456 = state_15449;(statearr_15456[8] = inst_15406);
(statearr_15456[9] = inst_15407);
(statearr_15456[10] = inst_15408);
(statearr_15456[11] = inst_15409);
return statearr_15456;
})();var statearr_15457_15492 = state_15449__$1;(statearr_15457_15492[2] = null);
(statearr_15457_15492[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 7))
{var inst_15445 = (state_15449[2]);var state_15449__$1 = state_15449;var statearr_15458_15493 = state_15449__$1;(statearr_15458_15493[2] = inst_15445);
(statearr_15458_15493[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 8))
{var inst_15408 = (state_15449[10]);var inst_15409 = (state_15449[11]);var inst_15411 = (inst_15409 < inst_15408);var inst_15412 = inst_15411;var state_15449__$1 = state_15449;if(cljs.core.truth_(inst_15412))
{var statearr_15459_15494 = state_15449__$1;(statearr_15459_15494[1] = 10);
} else
{var statearr_15460_15495 = state_15449__$1;(statearr_15460_15495[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 9))
{var inst_15442 = (state_15449[2]);var state_15449__$1 = (function (){var statearr_15461 = state_15449;(statearr_15461[12] = inst_15442);
return statearr_15461;
})();var statearr_15462_15496 = state_15449__$1;(statearr_15462_15496[2] = null);
(statearr_15462_15496[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 10))
{var inst_15407 = (state_15449[9]);var inst_15409 = (state_15449[11]);var inst_15414 = cljs.core._nth.call(null,inst_15407,inst_15409);var state_15449__$1 = state_15449;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15449__$1,13,out,inst_15414);
} else
{if((state_val_15450 === 11))
{var inst_15420 = (state_15449[13]);var inst_15406 = (state_15449[8]);var inst_15420__$1 = cljs.core.seq.call(null,inst_15406);var state_15449__$1 = (function (){var statearr_15466 = state_15449;(statearr_15466[13] = inst_15420__$1);
return statearr_15466;
})();if(inst_15420__$1)
{var statearr_15467_15497 = state_15449__$1;(statearr_15467_15497[1] = 14);
} else
{var statearr_15468_15498 = state_15449__$1;(statearr_15468_15498[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 12))
{var inst_15440 = (state_15449[2]);var state_15449__$1 = state_15449;var statearr_15469_15499 = state_15449__$1;(statearr_15469_15499[2] = inst_15440);
(statearr_15469_15499[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 13))
{var inst_15406 = (state_15449[8]);var inst_15407 = (state_15449[9]);var inst_15408 = (state_15449[10]);var inst_15409 = (state_15449[11]);var inst_15416 = (state_15449[2]);var inst_15417 = (inst_15409 + 1);var tmp15463 = inst_15406;var tmp15464 = inst_15407;var tmp15465 = inst_15408;var inst_15406__$1 = tmp15463;var inst_15407__$1 = tmp15464;var inst_15408__$1 = tmp15465;var inst_15409__$1 = inst_15417;var state_15449__$1 = (function (){var statearr_15470 = state_15449;(statearr_15470[14] = inst_15416);
(statearr_15470[8] = inst_15406__$1);
(statearr_15470[9] = inst_15407__$1);
(statearr_15470[10] = inst_15408__$1);
(statearr_15470[11] = inst_15409__$1);
return statearr_15470;
})();var statearr_15471_15500 = state_15449__$1;(statearr_15471_15500[2] = null);
(statearr_15471_15500[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 14))
{var inst_15420 = (state_15449[13]);var inst_15422 = cljs.core.chunked_seq_QMARK_.call(null,inst_15420);var state_15449__$1 = state_15449;if(inst_15422)
{var statearr_15472_15501 = state_15449__$1;(statearr_15472_15501[1] = 17);
} else
{var statearr_15473_15502 = state_15449__$1;(statearr_15473_15502[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 15))
{var state_15449__$1 = state_15449;var statearr_15474_15503 = state_15449__$1;(statearr_15474_15503[2] = null);
(statearr_15474_15503[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 16))
{var inst_15438 = (state_15449[2]);var state_15449__$1 = state_15449;var statearr_15475_15504 = state_15449__$1;(statearr_15475_15504[2] = inst_15438);
(statearr_15475_15504[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 17))
{var inst_15420 = (state_15449[13]);var inst_15424 = cljs.core.chunk_first.call(null,inst_15420);var inst_15425 = cljs.core.chunk_rest.call(null,inst_15420);var inst_15426 = cljs.core.count.call(null,inst_15424);var inst_15406 = inst_15425;var inst_15407 = inst_15424;var inst_15408 = inst_15426;var inst_15409 = 0;var state_15449__$1 = (function (){var statearr_15476 = state_15449;(statearr_15476[8] = inst_15406);
(statearr_15476[9] = inst_15407);
(statearr_15476[10] = inst_15408);
(statearr_15476[11] = inst_15409);
return statearr_15476;
})();var statearr_15477_15505 = state_15449__$1;(statearr_15477_15505[2] = null);
(statearr_15477_15505[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 18))
{var inst_15420 = (state_15449[13]);var inst_15429 = cljs.core.first.call(null,inst_15420);var state_15449__$1 = state_15449;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15449__$1,20,out,inst_15429);
} else
{if((state_val_15450 === 19))
{var inst_15435 = (state_15449[2]);var state_15449__$1 = state_15449;var statearr_15478_15506 = state_15449__$1;(statearr_15478_15506[2] = inst_15435);
(statearr_15478_15506[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15450 === 20))
{var inst_15420 = (state_15449[13]);var inst_15431 = (state_15449[2]);var inst_15432 = cljs.core.next.call(null,inst_15420);var inst_15406 = inst_15432;var inst_15407 = null;var inst_15408 = 0;var inst_15409 = 0;var state_15449__$1 = (function (){var statearr_15479 = state_15449;(statearr_15479[8] = inst_15406);
(statearr_15479[9] = inst_15407);
(statearr_15479[10] = inst_15408);
(statearr_15479[11] = inst_15409);
(statearr_15479[15] = inst_15431);
return statearr_15479;
})();var statearr_15480_15507 = state_15449__$1;(statearr_15480_15507[2] = null);
(statearr_15480_15507[1] = 8);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_15484 = (new Array(16));(statearr_15484[0] = state_machine__5781__auto__);
(statearr_15484[1] = 1);
return statearr_15484;
});
var state_machine__5781__auto____1 = (function (state_15449){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_15449);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e15485){if((e15485 instanceof Object))
{var ex__5784__auto__ = e15485;var statearr_15486_15508 = state_15449;(statearr_15486_15508[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15449);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15485;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15509 = state_15449;
state_15449 = G__15509;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_15449){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_15449);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_15487 = f__5851__auto__.call(null);(statearr_15487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto__);
return statearr_15487;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
}));
return c__5850__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5850__auto___15590 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_15569){var state_val_15570 = (state_15569[1]);if((state_val_15570 === 1))
{var state_15569__$1 = state_15569;var statearr_15571_15591 = state_15569__$1;(statearr_15571_15591[2] = null);
(statearr_15571_15591[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15570 === 2))
{var state_15569__$1 = state_15569;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15569__$1,4,from);
} else
{if((state_val_15570 === 3))
{var inst_15567 = (state_15569[2]);var state_15569__$1 = state_15569;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15569__$1,inst_15567);
} else
{if((state_val_15570 === 4))
{var inst_15552 = (state_15569[7]);var inst_15552__$1 = (state_15569[2]);var inst_15553 = (inst_15552__$1 == null);var state_15569__$1 = (function (){var statearr_15572 = state_15569;(statearr_15572[7] = inst_15552__$1);
return statearr_15572;
})();if(cljs.core.truth_(inst_15553))
{var statearr_15573_15592 = state_15569__$1;(statearr_15573_15592[1] = 5);
} else
{var statearr_15574_15593 = state_15569__$1;(statearr_15574_15593[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15570 === 5))
{var state_15569__$1 = state_15569;if(cljs.core.truth_(close_QMARK_))
{var statearr_15575_15594 = state_15569__$1;(statearr_15575_15594[1] = 8);
} else
{var statearr_15576_15595 = state_15569__$1;(statearr_15576_15595[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15570 === 6))
{var inst_15552 = (state_15569[7]);var state_15569__$1 = state_15569;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15569__$1,11,to,inst_15552);
} else
{if((state_val_15570 === 7))
{var inst_15565 = (state_15569[2]);var state_15569__$1 = state_15569;var statearr_15577_15596 = state_15569__$1;(statearr_15577_15596[2] = inst_15565);
(statearr_15577_15596[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15570 === 8))
{var inst_15556 = cljs.core.async.close_BANG_.call(null,to);var state_15569__$1 = state_15569;var statearr_15578_15597 = state_15569__$1;(statearr_15578_15597[2] = inst_15556);
(statearr_15578_15597[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15570 === 9))
{var state_15569__$1 = state_15569;var statearr_15579_15598 = state_15569__$1;(statearr_15579_15598[2] = null);
(statearr_15579_15598[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15570 === 10))
{var inst_15559 = (state_15569[2]);var state_15569__$1 = state_15569;var statearr_15580_15599 = state_15569__$1;(statearr_15580_15599[2] = inst_15559);
(statearr_15580_15599[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15570 === 11))
{var inst_15562 = (state_15569[2]);var state_15569__$1 = (function (){var statearr_15581 = state_15569;(statearr_15581[8] = inst_15562);
return statearr_15581;
})();var statearr_15582_15600 = state_15569__$1;(statearr_15582_15600[2] = null);
(statearr_15582_15600[1] = 2);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_15586 = (new Array(9));(statearr_15586[0] = state_machine__5781__auto__);
(statearr_15586[1] = 1);
return statearr_15586;
});
var state_machine__5781__auto____1 = (function (state_15569){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_15569);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e15587){if((e15587 instanceof Object))
{var ex__5784__auto__ = e15587;var statearr_15588_15601 = state_15569;(statearr_15588_15601[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15569);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15587;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15602 = state_15569;
state_15569 = G__15602;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_15569){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_15569);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_15589 = f__5851__auto__.call(null);(statearr_15589[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___15590);
return statearr_15589;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5850__auto___15689 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_15667){var state_val_15668 = (state_15667[1]);if((state_val_15668 === 1))
{var state_15667__$1 = state_15667;var statearr_15669_15690 = state_15667__$1;(statearr_15669_15690[2] = null);
(statearr_15669_15690[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 2))
{var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15667__$1,4,ch);
} else
{if((state_val_15668 === 3))
{var inst_15665 = (state_15667[2]);var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15667__$1,inst_15665);
} else
{if((state_val_15668 === 4))
{var inst_15648 = (state_15667[7]);var inst_15648__$1 = (state_15667[2]);var inst_15649 = (inst_15648__$1 == null);var state_15667__$1 = (function (){var statearr_15670 = state_15667;(statearr_15670[7] = inst_15648__$1);
return statearr_15670;
})();if(cljs.core.truth_(inst_15649))
{var statearr_15671_15691 = state_15667__$1;(statearr_15671_15691[1] = 5);
} else
{var statearr_15672_15692 = state_15667__$1;(statearr_15672_15692[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 5))
{var inst_15651 = cljs.core.async.close_BANG_.call(null,tc);var inst_15652 = cljs.core.async.close_BANG_.call(null,fc);var state_15667__$1 = (function (){var statearr_15673 = state_15667;(statearr_15673[8] = inst_15651);
return statearr_15673;
})();var statearr_15674_15693 = state_15667__$1;(statearr_15674_15693[2] = inst_15652);
(statearr_15674_15693[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 6))
{var inst_15648 = (state_15667[7]);var inst_15654 = p.call(null,inst_15648);var state_15667__$1 = state_15667;if(cljs.core.truth_(inst_15654))
{var statearr_15675_15694 = state_15667__$1;(statearr_15675_15694[1] = 9);
} else
{var statearr_15676_15695 = state_15667__$1;(statearr_15676_15695[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 7))
{var inst_15663 = (state_15667[2]);var state_15667__$1 = state_15667;var statearr_15677_15696 = state_15667__$1;(statearr_15677_15696[2] = inst_15663);
(statearr_15677_15696[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 8))
{var inst_15660 = (state_15667[2]);var state_15667__$1 = (function (){var statearr_15678 = state_15667;(statearr_15678[9] = inst_15660);
return statearr_15678;
})();var statearr_15679_15697 = state_15667__$1;(statearr_15679_15697[2] = null);
(statearr_15679_15697[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 9))
{var state_15667__$1 = state_15667;var statearr_15680_15698 = state_15667__$1;(statearr_15680_15698[2] = tc);
(statearr_15680_15698[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 10))
{var state_15667__$1 = state_15667;var statearr_15681_15699 = state_15667__$1;(statearr_15681_15699[2] = fc);
(statearr_15681_15699[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15668 === 11))
{var inst_15648 = (state_15667[7]);var inst_15658 = (state_15667[2]);var state_15667__$1 = state_15667;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15667__$1,8,inst_15658,inst_15648);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_15685 = (new Array(10));(statearr_15685[0] = state_machine__5781__auto__);
(statearr_15685[1] = 1);
return statearr_15685;
});
var state_machine__5781__auto____1 = (function (state_15667){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_15667);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e15686){if((e15686 instanceof Object))
{var ex__5784__auto__ = e15686;var statearr_15687_15700 = state_15667;(statearr_15687_15700[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15667);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15686;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15701 = state_15667;
state_15667 = G__15701;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_15667){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_15667);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_15688 = f__5851__auto__.call(null);(statearr_15688[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___15689);
return statearr_15688;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5850__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_15748){var state_val_15749 = (state_15748[1]);if((state_val_15749 === 7))
{var inst_15744 = (state_15748[2]);var state_15748__$1 = state_15748;var statearr_15750_15766 = state_15748__$1;(statearr_15750_15766[2] = inst_15744);
(statearr_15750_15766[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15749 === 6))
{var inst_15737 = (state_15748[7]);var inst_15734 = (state_15748[8]);var inst_15741 = f.call(null,inst_15734,inst_15737);var inst_15734__$1 = inst_15741;var state_15748__$1 = (function (){var statearr_15751 = state_15748;(statearr_15751[8] = inst_15734__$1);
return statearr_15751;
})();var statearr_15752_15767 = state_15748__$1;(statearr_15752_15767[2] = null);
(statearr_15752_15767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15749 === 5))
{var inst_15734 = (state_15748[8]);var state_15748__$1 = state_15748;var statearr_15753_15768 = state_15748__$1;(statearr_15753_15768[2] = inst_15734);
(statearr_15753_15768[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15749 === 4))
{var inst_15737 = (state_15748[7]);var inst_15737__$1 = (state_15748[2]);var inst_15738 = (inst_15737__$1 == null);var state_15748__$1 = (function (){var statearr_15754 = state_15748;(statearr_15754[7] = inst_15737__$1);
return statearr_15754;
})();if(cljs.core.truth_(inst_15738))
{var statearr_15755_15769 = state_15748__$1;(statearr_15755_15769[1] = 5);
} else
{var statearr_15756_15770 = state_15748__$1;(statearr_15756_15770[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15749 === 3))
{var inst_15746 = (state_15748[2]);var state_15748__$1 = state_15748;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15748__$1,inst_15746);
} else
{if((state_val_15749 === 2))
{var state_15748__$1 = state_15748;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15748__$1,4,ch);
} else
{if((state_val_15749 === 1))
{var inst_15734 = init;var state_15748__$1 = (function (){var statearr_15757 = state_15748;(statearr_15757[8] = inst_15734);
return statearr_15757;
})();var statearr_15758_15771 = state_15748__$1;(statearr_15758_15771[2] = null);
(statearr_15758_15771[1] = 2);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_15762 = (new Array(9));(statearr_15762[0] = state_machine__5781__auto__);
(statearr_15762[1] = 1);
return statearr_15762;
});
var state_machine__5781__auto____1 = (function (state_15748){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_15748);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e15763){if((e15763 instanceof Object))
{var ex__5784__auto__ = e15763;var statearr_15764_15772 = state_15748;(statearr_15764_15772[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15748);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15773 = state_15748;
state_15748 = G__15773;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_15748){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_15748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_15765 = f__5851__auto__.call(null);(statearr_15765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto__);
return statearr_15765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
}));
return c__5850__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5850__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_15835){var state_val_15836 = (state_15835[1]);if((state_val_15836 === 1))
{var inst_15815 = cljs.core.seq.call(null,coll);var inst_15816 = inst_15815;var state_15835__$1 = (function (){var statearr_15837 = state_15835;(statearr_15837[7] = inst_15816);
return statearr_15837;
})();var statearr_15838_15856 = state_15835__$1;(statearr_15838_15856[2] = null);
(statearr_15838_15856[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15836 === 2))
{var inst_15816 = (state_15835[7]);var state_15835__$1 = state_15835;if(cljs.core.truth_(inst_15816))
{var statearr_15839_15857 = state_15835__$1;(statearr_15839_15857[1] = 4);
} else
{var statearr_15840_15858 = state_15835__$1;(statearr_15840_15858[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15836 === 3))
{var inst_15833 = (state_15835[2]);var state_15835__$1 = state_15835;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15835__$1,inst_15833);
} else
{if((state_val_15836 === 4))
{var inst_15816 = (state_15835[7]);var inst_15819 = cljs.core.first.call(null,inst_15816);var state_15835__$1 = state_15835;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15835__$1,7,ch,inst_15819);
} else
{if((state_val_15836 === 5))
{var state_15835__$1 = state_15835;if(cljs.core.truth_(close_QMARK_))
{var statearr_15841_15859 = state_15835__$1;(statearr_15841_15859[1] = 8);
} else
{var statearr_15842_15860 = state_15835__$1;(statearr_15842_15860[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15836 === 6))
{var inst_15831 = (state_15835[2]);var state_15835__$1 = state_15835;var statearr_15843_15861 = state_15835__$1;(statearr_15843_15861[2] = inst_15831);
(statearr_15843_15861[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15836 === 7))
{var inst_15816 = (state_15835[7]);var inst_15821 = (state_15835[2]);var inst_15822 = cljs.core.next.call(null,inst_15816);var inst_15816__$1 = inst_15822;var state_15835__$1 = (function (){var statearr_15844 = state_15835;(statearr_15844[8] = inst_15821);
(statearr_15844[7] = inst_15816__$1);
return statearr_15844;
})();var statearr_15845_15862 = state_15835__$1;(statearr_15845_15862[2] = null);
(statearr_15845_15862[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15836 === 8))
{var inst_15826 = cljs.core.async.close_BANG_.call(null,ch);var state_15835__$1 = state_15835;var statearr_15846_15863 = state_15835__$1;(statearr_15846_15863[2] = inst_15826);
(statearr_15846_15863[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15836 === 9))
{var state_15835__$1 = state_15835;var statearr_15847_15864 = state_15835__$1;(statearr_15847_15864[2] = null);
(statearr_15847_15864[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15836 === 10))
{var inst_15829 = (state_15835[2]);var state_15835__$1 = state_15835;var statearr_15848_15865 = state_15835__$1;(statearr_15848_15865[2] = inst_15829);
(statearr_15848_15865[1] = 6);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_15852 = (new Array(9));(statearr_15852[0] = state_machine__5781__auto__);
(statearr_15852[1] = 1);
return statearr_15852;
});
var state_machine__5781__auto____1 = (function (state_15835){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_15835);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e15853){if((e15853 instanceof Object))
{var ex__5784__auto__ = e15853;var statearr_15854_15866 = state_15835;(statearr_15854_15866[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15835);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15853;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15867 = state_15835;
state_15835 = G__15867;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_15835){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_15835);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_15855 = f__5851__auto__.call(null);(statearr_15855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto__);
return statearr_15855;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
}));
return c__5850__auto__;
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
cljs.core.async.Mux = (function (){var obj15869 = {};return obj15869;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3279__auto__ = _;if(and__3279__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__3894__auto__ = (((_ == null))?null:_);return (function (){var or__3291__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj15871 = {};return obj15871;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t16086 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16086 = (function (cs,ch,mult,meta16087){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta16087 = meta16087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16086.cljs$lang$type = true;
cljs.core.async.t16086.cljs$lang$ctorStr = "cljs.core.async/t16086";
cljs.core.async.t16086.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16086");
});})(cs))
;
cljs.core.async.t16086.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t16086.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t16086.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t16086.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t16086.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t16086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_16088){var self__ = this;
var _16088__$1 = this;return self__.meta16087;
});})(cs))
;
cljs.core.async.t16086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_16088,meta16087__$1){var self__ = this;
var _16088__$1 = this;return (new cljs.core.async.t16086(self__.cs,self__.ch,self__.mult,meta16087__$1));
});})(cs))
;
cljs.core.async.__GT_t16086 = ((function (cs){
return (function __GT_t16086(cs__$1,ch__$1,mult__$1,meta16087){return (new cljs.core.async.t16086(cs__$1,ch__$1,mult__$1,meta16087));
});})(cs))
;
}
return (new cljs.core.async.t16086(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5850__auto___16300 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_16218){var state_val_16219 = (state_16218[1]);if((state_val_16219 === 32))
{var inst_16091 = (state_16218[7]);var inst_16167 = (state_16218[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16218,31,Object,null,30);var inst_16174 = cljs.core.async.put_BANG_.call(null,inst_16167,inst_16091,done);var state_16218__$1 = state_16218;var statearr_16220_16301 = state_16218__$1;(statearr_16220_16301[2] = inst_16174);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16218__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 1))
{var state_16218__$1 = state_16218;var statearr_16221_16302 = state_16218__$1;(statearr_16221_16302[2] = null);
(statearr_16221_16302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 33))
{var inst_16180 = (state_16218[9]);var inst_16182 = cljs.core.chunked_seq_QMARK_.call(null,inst_16180);var state_16218__$1 = state_16218;if(inst_16182)
{var statearr_16222_16303 = state_16218__$1;(statearr_16222_16303[1] = 36);
} else
{var statearr_16223_16304 = state_16218__$1;(statearr_16223_16304[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 2))
{var state_16218__$1 = state_16218;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16218__$1,4,ch);
} else
{if((state_val_16219 === 34))
{var state_16218__$1 = state_16218;var statearr_16224_16305 = state_16218__$1;(statearr_16224_16305[2] = null);
(statearr_16224_16305[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 3))
{var inst_16216 = (state_16218[2]);var state_16218__$1 = state_16218;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16218__$1,inst_16216);
} else
{if((state_val_16219 === 35))
{var inst_16205 = (state_16218[2]);var state_16218__$1 = state_16218;var statearr_16225_16306 = state_16218__$1;(statearr_16225_16306[2] = inst_16205);
(statearr_16225_16306[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 4))
{var inst_16091 = (state_16218[7]);var inst_16091__$1 = (state_16218[2]);var inst_16092 = (inst_16091__$1 == null);var state_16218__$1 = (function (){var statearr_16226 = state_16218;(statearr_16226[7] = inst_16091__$1);
return statearr_16226;
})();if(cljs.core.truth_(inst_16092))
{var statearr_16227_16307 = state_16218__$1;(statearr_16227_16307[1] = 5);
} else
{var statearr_16228_16308 = state_16218__$1;(statearr_16228_16308[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 36))
{var inst_16180 = (state_16218[9]);var inst_16184 = cljs.core.chunk_first.call(null,inst_16180);var inst_16185 = cljs.core.chunk_rest.call(null,inst_16180);var inst_16186 = cljs.core.count.call(null,inst_16184);var inst_16159 = inst_16185;var inst_16160 = inst_16184;var inst_16161 = inst_16186;var inst_16162 = 0;var state_16218__$1 = (function (){var statearr_16229 = state_16218;(statearr_16229[10] = inst_16160);
(statearr_16229[11] = inst_16159);
(statearr_16229[12] = inst_16161);
(statearr_16229[13] = inst_16162);
return statearr_16229;
})();var statearr_16230_16309 = state_16218__$1;(statearr_16230_16309[2] = null);
(statearr_16230_16309[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 5))
{var inst_16098 = cljs.core.deref.call(null,cs);var inst_16099 = cljs.core.seq.call(null,inst_16098);var inst_16100 = inst_16099;var inst_16101 = null;var inst_16102 = 0;var inst_16103 = 0;var state_16218__$1 = (function (){var statearr_16231 = state_16218;(statearr_16231[14] = inst_16103);
(statearr_16231[15] = inst_16101);
(statearr_16231[16] = inst_16102);
(statearr_16231[17] = inst_16100);
return statearr_16231;
})();var statearr_16232_16310 = state_16218__$1;(statearr_16232_16310[2] = null);
(statearr_16232_16310[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 37))
{var inst_16180 = (state_16218[9]);var inst_16189 = cljs.core.first.call(null,inst_16180);var state_16218__$1 = (function (){var statearr_16233 = state_16218;(statearr_16233[18] = inst_16189);
return statearr_16233;
})();var statearr_16234_16311 = state_16218__$1;(statearr_16234_16311[2] = null);
(statearr_16234_16311[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 6))
{var inst_16150 = cljs.core.deref.call(null,cs);var inst_16151 = cljs.core.keys.call(null,inst_16150);var inst_16152 = cljs.core.count.call(null,inst_16151);var inst_16153 = cljs.core.reset_BANG_.call(null,dctr,inst_16152);var inst_16158 = cljs.core.seq.call(null,inst_16151);var inst_16159 = inst_16158;var inst_16160 = null;var inst_16161 = 0;var inst_16162 = 0;var state_16218__$1 = (function (){var statearr_16235 = state_16218;(statearr_16235[10] = inst_16160);
(statearr_16235[11] = inst_16159);
(statearr_16235[12] = inst_16161);
(statearr_16235[13] = inst_16162);
(statearr_16235[19] = inst_16153);
return statearr_16235;
})();var statearr_16236_16312 = state_16218__$1;(statearr_16236_16312[2] = null);
(statearr_16236_16312[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 38))
{var inst_16202 = (state_16218[2]);var state_16218__$1 = state_16218;var statearr_16237_16313 = state_16218__$1;(statearr_16237_16313[2] = inst_16202);
(statearr_16237_16313[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 7))
{var inst_16214 = (state_16218[2]);var state_16218__$1 = state_16218;var statearr_16238_16314 = state_16218__$1;(statearr_16238_16314[2] = inst_16214);
(statearr_16238_16314[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 39))
{var inst_16180 = (state_16218[9]);var inst_16198 = (state_16218[2]);var inst_16199 = cljs.core.next.call(null,inst_16180);var inst_16159 = inst_16199;var inst_16160 = null;var inst_16161 = 0;var inst_16162 = 0;var state_16218__$1 = (function (){var statearr_16239 = state_16218;(statearr_16239[10] = inst_16160);
(statearr_16239[11] = inst_16159);
(statearr_16239[12] = inst_16161);
(statearr_16239[13] = inst_16162);
(statearr_16239[20] = inst_16198);
return statearr_16239;
})();var statearr_16240_16315 = state_16218__$1;(statearr_16240_16315[2] = null);
(statearr_16240_16315[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 8))
{var inst_16103 = (state_16218[14]);var inst_16102 = (state_16218[16]);var inst_16105 = (inst_16103 < inst_16102);var inst_16106 = inst_16105;var state_16218__$1 = state_16218;if(cljs.core.truth_(inst_16106))
{var statearr_16241_16316 = state_16218__$1;(statearr_16241_16316[1] = 10);
} else
{var statearr_16242_16317 = state_16218__$1;(statearr_16242_16317[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 40))
{var inst_16189 = (state_16218[18]);var inst_16190 = (state_16218[2]);var inst_16191 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16192 = cljs.core.async.untap_STAR_.call(null,m,inst_16189);var state_16218__$1 = (function (){var statearr_16243 = state_16218;(statearr_16243[21] = inst_16191);
(statearr_16243[22] = inst_16190);
return statearr_16243;
})();var statearr_16244_16318 = state_16218__$1;(statearr_16244_16318[2] = inst_16192);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16218__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 9))
{var inst_16148 = (state_16218[2]);var state_16218__$1 = state_16218;var statearr_16245_16319 = state_16218__$1;(statearr_16245_16319[2] = inst_16148);
(statearr_16245_16319[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 41))
{var inst_16091 = (state_16218[7]);var inst_16189 = (state_16218[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16218,40,Object,null,39);var inst_16196 = cljs.core.async.put_BANG_.call(null,inst_16189,inst_16091,done);var state_16218__$1 = state_16218;var statearr_16246_16320 = state_16218__$1;(statearr_16246_16320[2] = inst_16196);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16218__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 10))
{var inst_16103 = (state_16218[14]);var inst_16101 = (state_16218[15]);var inst_16109 = cljs.core._nth.call(null,inst_16101,inst_16103);var inst_16110 = cljs.core.nth.call(null,inst_16109,0,null);var inst_16111 = cljs.core.nth.call(null,inst_16109,1,null);var state_16218__$1 = (function (){var statearr_16247 = state_16218;(statearr_16247[23] = inst_16110);
return statearr_16247;
})();if(cljs.core.truth_(inst_16111))
{var statearr_16248_16321 = state_16218__$1;(statearr_16248_16321[1] = 13);
} else
{var statearr_16249_16322 = state_16218__$1;(statearr_16249_16322[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 42))
{var inst_16211 = (state_16218[2]);var state_16218__$1 = (function (){var statearr_16250 = state_16218;(statearr_16250[24] = inst_16211);
return statearr_16250;
})();var statearr_16251_16323 = state_16218__$1;(statearr_16251_16323[2] = null);
(statearr_16251_16323[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 11))
{var inst_16100 = (state_16218[17]);var inst_16120 = (state_16218[25]);var inst_16120__$1 = cljs.core.seq.call(null,inst_16100);var state_16218__$1 = (function (){var statearr_16252 = state_16218;(statearr_16252[25] = inst_16120__$1);
return statearr_16252;
})();if(inst_16120__$1)
{var statearr_16253_16324 = state_16218__$1;(statearr_16253_16324[1] = 16);
} else
{var statearr_16254_16325 = state_16218__$1;(statearr_16254_16325[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 12))
{var inst_16146 = (state_16218[2]);var state_16218__$1 = state_16218;var statearr_16255_16326 = state_16218__$1;(statearr_16255_16326[2] = inst_16146);
(statearr_16255_16326[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 13))
{var inst_16110 = (state_16218[23]);var inst_16113 = cljs.core.async.close_BANG_.call(null,inst_16110);var state_16218__$1 = state_16218;var statearr_16259_16327 = state_16218__$1;(statearr_16259_16327[2] = inst_16113);
(statearr_16259_16327[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 14))
{var state_16218__$1 = state_16218;var statearr_16260_16328 = state_16218__$1;(statearr_16260_16328[2] = null);
(statearr_16260_16328[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 15))
{var inst_16103 = (state_16218[14]);var inst_16101 = (state_16218[15]);var inst_16102 = (state_16218[16]);var inst_16100 = (state_16218[17]);var inst_16116 = (state_16218[2]);var inst_16117 = (inst_16103 + 1);var tmp16256 = inst_16101;var tmp16257 = inst_16102;var tmp16258 = inst_16100;var inst_16100__$1 = tmp16258;var inst_16101__$1 = tmp16256;var inst_16102__$1 = tmp16257;var inst_16103__$1 = inst_16117;var state_16218__$1 = (function (){var statearr_16261 = state_16218;(statearr_16261[14] = inst_16103__$1);
(statearr_16261[15] = inst_16101__$1);
(statearr_16261[16] = inst_16102__$1);
(statearr_16261[17] = inst_16100__$1);
(statearr_16261[26] = inst_16116);
return statearr_16261;
})();var statearr_16262_16329 = state_16218__$1;(statearr_16262_16329[2] = null);
(statearr_16262_16329[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 16))
{var inst_16120 = (state_16218[25]);var inst_16122 = cljs.core.chunked_seq_QMARK_.call(null,inst_16120);var state_16218__$1 = state_16218;if(inst_16122)
{var statearr_16263_16330 = state_16218__$1;(statearr_16263_16330[1] = 19);
} else
{var statearr_16264_16331 = state_16218__$1;(statearr_16264_16331[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 17))
{var state_16218__$1 = state_16218;var statearr_16265_16332 = state_16218__$1;(statearr_16265_16332[2] = null);
(statearr_16265_16332[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 18))
{var inst_16144 = (state_16218[2]);var state_16218__$1 = state_16218;var statearr_16266_16333 = state_16218__$1;(statearr_16266_16333[2] = inst_16144);
(statearr_16266_16333[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 19))
{var inst_16120 = (state_16218[25]);var inst_16124 = cljs.core.chunk_first.call(null,inst_16120);var inst_16125 = cljs.core.chunk_rest.call(null,inst_16120);var inst_16126 = cljs.core.count.call(null,inst_16124);var inst_16100 = inst_16125;var inst_16101 = inst_16124;var inst_16102 = inst_16126;var inst_16103 = 0;var state_16218__$1 = (function (){var statearr_16267 = state_16218;(statearr_16267[14] = inst_16103);
(statearr_16267[15] = inst_16101);
(statearr_16267[16] = inst_16102);
(statearr_16267[17] = inst_16100);
return statearr_16267;
})();var statearr_16268_16334 = state_16218__$1;(statearr_16268_16334[2] = null);
(statearr_16268_16334[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 20))
{var inst_16120 = (state_16218[25]);var inst_16130 = cljs.core.first.call(null,inst_16120);var inst_16131 = cljs.core.nth.call(null,inst_16130,0,null);var inst_16132 = cljs.core.nth.call(null,inst_16130,1,null);var state_16218__$1 = (function (){var statearr_16269 = state_16218;(statearr_16269[27] = inst_16131);
return statearr_16269;
})();if(cljs.core.truth_(inst_16132))
{var statearr_16270_16335 = state_16218__$1;(statearr_16270_16335[1] = 22);
} else
{var statearr_16271_16336 = state_16218__$1;(statearr_16271_16336[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 21))
{var inst_16141 = (state_16218[2]);var state_16218__$1 = state_16218;var statearr_16272_16337 = state_16218__$1;(statearr_16272_16337[2] = inst_16141);
(statearr_16272_16337[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 22))
{var inst_16131 = (state_16218[27]);var inst_16134 = cljs.core.async.close_BANG_.call(null,inst_16131);var state_16218__$1 = state_16218;var statearr_16273_16338 = state_16218__$1;(statearr_16273_16338[2] = inst_16134);
(statearr_16273_16338[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 23))
{var state_16218__$1 = state_16218;var statearr_16274_16339 = state_16218__$1;(statearr_16274_16339[2] = null);
(statearr_16274_16339[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 24))
{var inst_16120 = (state_16218[25]);var inst_16137 = (state_16218[2]);var inst_16138 = cljs.core.next.call(null,inst_16120);var inst_16100 = inst_16138;var inst_16101 = null;var inst_16102 = 0;var inst_16103 = 0;var state_16218__$1 = (function (){var statearr_16275 = state_16218;(statearr_16275[14] = inst_16103);
(statearr_16275[15] = inst_16101);
(statearr_16275[16] = inst_16102);
(statearr_16275[17] = inst_16100);
(statearr_16275[28] = inst_16137);
return statearr_16275;
})();var statearr_16276_16340 = state_16218__$1;(statearr_16276_16340[2] = null);
(statearr_16276_16340[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 25))
{var inst_16161 = (state_16218[12]);var inst_16162 = (state_16218[13]);var inst_16164 = (inst_16162 < inst_16161);var inst_16165 = inst_16164;var state_16218__$1 = state_16218;if(cljs.core.truth_(inst_16165))
{var statearr_16277_16341 = state_16218__$1;(statearr_16277_16341[1] = 27);
} else
{var statearr_16278_16342 = state_16218__$1;(statearr_16278_16342[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 26))
{var inst_16209 = (state_16218[2]);var state_16218__$1 = (function (){var statearr_16279 = state_16218;(statearr_16279[29] = inst_16209);
return statearr_16279;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16218__$1,42,dchan);
} else
{if((state_val_16219 === 27))
{var inst_16160 = (state_16218[10]);var inst_16162 = (state_16218[13]);var inst_16167 = cljs.core._nth.call(null,inst_16160,inst_16162);var state_16218__$1 = (function (){var statearr_16280 = state_16218;(statearr_16280[8] = inst_16167);
return statearr_16280;
})();var statearr_16281_16343 = state_16218__$1;(statearr_16281_16343[2] = null);
(statearr_16281_16343[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 28))
{var inst_16159 = (state_16218[11]);var inst_16180 = (state_16218[9]);var inst_16180__$1 = cljs.core.seq.call(null,inst_16159);var state_16218__$1 = (function (){var statearr_16285 = state_16218;(statearr_16285[9] = inst_16180__$1);
return statearr_16285;
})();if(inst_16180__$1)
{var statearr_16286_16344 = state_16218__$1;(statearr_16286_16344[1] = 33);
} else
{var statearr_16287_16345 = state_16218__$1;(statearr_16287_16345[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 29))
{var inst_16207 = (state_16218[2]);var state_16218__$1 = state_16218;var statearr_16288_16346 = state_16218__$1;(statearr_16288_16346[2] = inst_16207);
(statearr_16288_16346[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 30))
{var inst_16160 = (state_16218[10]);var inst_16159 = (state_16218[11]);var inst_16161 = (state_16218[12]);var inst_16162 = (state_16218[13]);var inst_16176 = (state_16218[2]);var inst_16177 = (inst_16162 + 1);var tmp16282 = inst_16160;var tmp16283 = inst_16159;var tmp16284 = inst_16161;var inst_16159__$1 = tmp16283;var inst_16160__$1 = tmp16282;var inst_16161__$1 = tmp16284;var inst_16162__$1 = inst_16177;var state_16218__$1 = (function (){var statearr_16289 = state_16218;(statearr_16289[10] = inst_16160__$1);
(statearr_16289[11] = inst_16159__$1);
(statearr_16289[12] = inst_16161__$1);
(statearr_16289[13] = inst_16162__$1);
(statearr_16289[30] = inst_16176);
return statearr_16289;
})();var statearr_16290_16347 = state_16218__$1;(statearr_16290_16347[2] = null);
(statearr_16290_16347[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16219 === 31))
{var inst_16167 = (state_16218[8]);var inst_16168 = (state_16218[2]);var inst_16169 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_16170 = cljs.core.async.untap_STAR_.call(null,m,inst_16167);var state_16218__$1 = (function (){var statearr_16291 = state_16218;(statearr_16291[31] = inst_16169);
(statearr_16291[32] = inst_16168);
return statearr_16291;
})();var statearr_16292_16348 = state_16218__$1;(statearr_16292_16348[2] = inst_16170);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16218__$1);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_16296 = (new Array(33));(statearr_16296[0] = state_machine__5781__auto__);
(statearr_16296[1] = 1);
return statearr_16296;
});
var state_machine__5781__auto____1 = (function (state_16218){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_16218);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e16297){if((e16297 instanceof Object))
{var ex__5784__auto__ = e16297;var statearr_16298_16349 = state_16218;(statearr_16298_16349[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16218);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16297;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16350 = state_16218;
state_16218 = G__16350;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_16218){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_16218);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_16299 = f__5851__auto__.call(null);(statearr_16299[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___16300);
return statearr_16299;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
cljs.core.async.Mix = (function (){var obj16352 = {};return obj16352;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3279__auto__ = m;if(and__3279__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__3894__auto__ = (((m == null))?null:m);return (function (){var or__3291__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
;var m = (function (){if(typeof cljs.core.async.t16462 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16462 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta16463){
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
this.meta16463 = meta16463;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16462.cljs$lang$type = true;
cljs.core.async.t16462.cljs$lang$ctorStr = "cljs.core.async/t16462";
cljs.core.async.t16462.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16462");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16462.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t16462.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16462.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16462.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16462.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16462.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16462.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16462.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16462.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16464){var self__ = this;
var _16464__$1 = this;return self__.meta16463;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t16462.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_16464,meta16463__$1){var self__ = this;
var _16464__$1 = this;return (new cljs.core.async.t16462(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta16463__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t16462 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t16462(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16463){return (new cljs.core.async.t16462(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta16463));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t16462(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5850__auto___16571 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_16529){var state_val_16530 = (state_16529[1]);if((state_val_16530 === 1))
{var inst_16468 = (state_16529[7]);var inst_16468__$1 = calc_state.call(null);var inst_16469 = cljs.core.seq_QMARK_.call(null,inst_16468__$1);var state_16529__$1 = (function (){var statearr_16531 = state_16529;(statearr_16531[7] = inst_16468__$1);
return statearr_16531;
})();if(inst_16469)
{var statearr_16532_16572 = state_16529__$1;(statearr_16532_16572[1] = 2);
} else
{var statearr_16533_16573 = state_16529__$1;(statearr_16533_16573[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 2))
{var inst_16468 = (state_16529[7]);var inst_16471 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16468);var state_16529__$1 = state_16529;var statearr_16534_16574 = state_16529__$1;(statearr_16534_16574[2] = inst_16471);
(statearr_16534_16574[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 3))
{var inst_16468 = (state_16529[7]);var state_16529__$1 = state_16529;var statearr_16535_16575 = state_16529__$1;(statearr_16535_16575[2] = inst_16468);
(statearr_16535_16575[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 4))
{var inst_16468 = (state_16529[7]);var inst_16474 = (state_16529[2]);var inst_16475 = cljs.core.get.call(null,inst_16474,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16476 = cljs.core.get.call(null,inst_16474,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16477 = cljs.core.get.call(null,inst_16474,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_16478 = inst_16468;var state_16529__$1 = (function (){var statearr_16536 = state_16529;(statearr_16536[8] = inst_16477);
(statearr_16536[9] = inst_16478);
(statearr_16536[10] = inst_16475);
(statearr_16536[11] = inst_16476);
return statearr_16536;
})();var statearr_16537_16576 = state_16529__$1;(statearr_16537_16576[2] = null);
(statearr_16537_16576[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 5))
{var inst_16478 = (state_16529[9]);var inst_16481 = cljs.core.seq_QMARK_.call(null,inst_16478);var state_16529__$1 = state_16529;if(inst_16481)
{var statearr_16538_16577 = state_16529__$1;(statearr_16538_16577[1] = 7);
} else
{var statearr_16539_16578 = state_16529__$1;(statearr_16539_16578[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 6))
{var inst_16527 = (state_16529[2]);var state_16529__$1 = state_16529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16529__$1,inst_16527);
} else
{if((state_val_16530 === 7))
{var inst_16478 = (state_16529[9]);var inst_16483 = cljs.core.apply.call(null,cljs.core.hash_map,inst_16478);var state_16529__$1 = state_16529;var statearr_16540_16579 = state_16529__$1;(statearr_16540_16579[2] = inst_16483);
(statearr_16540_16579[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 8))
{var inst_16478 = (state_16529[9]);var state_16529__$1 = state_16529;var statearr_16541_16580 = state_16529__$1;(statearr_16541_16580[2] = inst_16478);
(statearr_16541_16580[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 9))
{var inst_16486 = (state_16529[12]);var inst_16486__$1 = (state_16529[2]);var inst_16487 = cljs.core.get.call(null,inst_16486__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_16488 = cljs.core.get.call(null,inst_16486__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_16489 = cljs.core.get.call(null,inst_16486__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_16529__$1 = (function (){var statearr_16542 = state_16529;(statearr_16542[13] = inst_16488);
(statearr_16542[14] = inst_16489);
(statearr_16542[12] = inst_16486__$1);
return statearr_16542;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_16529__$1,10,inst_16487);
} else
{if((state_val_16530 === 10))
{var inst_16494 = (state_16529[15]);var inst_16493 = (state_16529[16]);var inst_16492 = (state_16529[2]);var inst_16493__$1 = cljs.core.nth.call(null,inst_16492,0,null);var inst_16494__$1 = cljs.core.nth.call(null,inst_16492,1,null);var inst_16495 = (inst_16493__$1 == null);var inst_16496 = cljs.core._EQ_.call(null,inst_16494__$1,change);var inst_16497 = (inst_16495) || (inst_16496);var state_16529__$1 = (function (){var statearr_16543 = state_16529;(statearr_16543[15] = inst_16494__$1);
(statearr_16543[16] = inst_16493__$1);
return statearr_16543;
})();if(cljs.core.truth_(inst_16497))
{var statearr_16544_16581 = state_16529__$1;(statearr_16544_16581[1] = 11);
} else
{var statearr_16545_16582 = state_16529__$1;(statearr_16545_16582[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 11))
{var inst_16493 = (state_16529[16]);var inst_16499 = (inst_16493 == null);var state_16529__$1 = state_16529;if(cljs.core.truth_(inst_16499))
{var statearr_16546_16583 = state_16529__$1;(statearr_16546_16583[1] = 14);
} else
{var statearr_16547_16584 = state_16529__$1;(statearr_16547_16584[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 12))
{var inst_16508 = (state_16529[17]);var inst_16489 = (state_16529[14]);var inst_16494 = (state_16529[15]);var inst_16508__$1 = inst_16489.call(null,inst_16494);var state_16529__$1 = (function (){var statearr_16548 = state_16529;(statearr_16548[17] = inst_16508__$1);
return statearr_16548;
})();if(cljs.core.truth_(inst_16508__$1))
{var statearr_16549_16585 = state_16529__$1;(statearr_16549_16585[1] = 17);
} else
{var statearr_16550_16586 = state_16529__$1;(statearr_16550_16586[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 13))
{var inst_16525 = (state_16529[2]);var state_16529__$1 = state_16529;var statearr_16551_16587 = state_16529__$1;(statearr_16551_16587[2] = inst_16525);
(statearr_16551_16587[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 14))
{var inst_16494 = (state_16529[15]);var inst_16501 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_16494);var state_16529__$1 = state_16529;var statearr_16552_16588 = state_16529__$1;(statearr_16552_16588[2] = inst_16501);
(statearr_16552_16588[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 15))
{var state_16529__$1 = state_16529;var statearr_16553_16589 = state_16529__$1;(statearr_16553_16589[2] = null);
(statearr_16553_16589[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 16))
{var inst_16504 = (state_16529[2]);var inst_16505 = calc_state.call(null);var inst_16478 = inst_16505;var state_16529__$1 = (function (){var statearr_16554 = state_16529;(statearr_16554[9] = inst_16478);
(statearr_16554[18] = inst_16504);
return statearr_16554;
})();var statearr_16555_16590 = state_16529__$1;(statearr_16555_16590[2] = null);
(statearr_16555_16590[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 17))
{var inst_16508 = (state_16529[17]);var state_16529__$1 = state_16529;var statearr_16556_16591 = state_16529__$1;(statearr_16556_16591[2] = inst_16508);
(statearr_16556_16591[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 18))
{var inst_16488 = (state_16529[13]);var inst_16489 = (state_16529[14]);var inst_16494 = (state_16529[15]);var inst_16511 = cljs.core.empty_QMARK_.call(null,inst_16489);var inst_16512 = inst_16488.call(null,inst_16494);var inst_16513 = cljs.core.not.call(null,inst_16512);var inst_16514 = (inst_16511) && (inst_16513);var state_16529__$1 = state_16529;var statearr_16557_16592 = state_16529__$1;(statearr_16557_16592[2] = inst_16514);
(statearr_16557_16592[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 19))
{var inst_16516 = (state_16529[2]);var state_16529__$1 = state_16529;if(cljs.core.truth_(inst_16516))
{var statearr_16558_16593 = state_16529__$1;(statearr_16558_16593[1] = 20);
} else
{var statearr_16559_16594 = state_16529__$1;(statearr_16559_16594[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 20))
{var inst_16493 = (state_16529[16]);var state_16529__$1 = state_16529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16529__$1,23,out,inst_16493);
} else
{if((state_val_16530 === 21))
{var state_16529__$1 = state_16529;var statearr_16560_16595 = state_16529__$1;(statearr_16560_16595[2] = null);
(statearr_16560_16595[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 22))
{var inst_16486 = (state_16529[12]);var inst_16522 = (state_16529[2]);var inst_16478 = inst_16486;var state_16529__$1 = (function (){var statearr_16561 = state_16529;(statearr_16561[9] = inst_16478);
(statearr_16561[19] = inst_16522);
return statearr_16561;
})();var statearr_16562_16596 = state_16529__$1;(statearr_16562_16596[2] = null);
(statearr_16562_16596[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16530 === 23))
{var inst_16519 = (state_16529[2]);var state_16529__$1 = state_16529;var statearr_16563_16597 = state_16529__$1;(statearr_16563_16597[2] = inst_16519);
(statearr_16563_16597[1] = 22);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_16567 = (new Array(20));(statearr_16567[0] = state_machine__5781__auto__);
(statearr_16567[1] = 1);
return statearr_16567;
});
var state_machine__5781__auto____1 = (function (state_16529){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_16529);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e16568){if((e16568 instanceof Object))
{var ex__5784__auto__ = e16568;var statearr_16569_16598 = state_16529;(statearr_16569_16598[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16529);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16568;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16599 = state_16529;
state_16529 = G__16599;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_16529){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_16529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_16570 = f__5851__auto__.call(null);(statearr_16570[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___16571);
return statearr_16570;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
cljs.core.async.Pub = (function (){var obj16601 = {};return obj16601;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3279__auto__ = p;if(and__3279__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3279__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__3894__auto__ = (((p == null))?null:p);return (function (){var or__3291__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
return (function (topic){var or__3291__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3291__auto__,mults){
return (function (p1__16602_SHARP_){if(cljs.core.truth_(p1__16602_SHARP_.call(null,topic)))
{return p1__16602_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__16602_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t16727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t16727 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta16728){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta16728 = meta16728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t16727.cljs$lang$type = true;
cljs.core.async.t16727.cljs$lang$ctorStr = "cljs.core.async/t16727";
cljs.core.async.t16727.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t16727");
});})(mults,ensure_mult))
;
cljs.core.async.t16727.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t16727.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t16727.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t16727.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t16727.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t16727.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t16727.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t16727.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_16729){var self__ = this;
var _16729__$1 = this;return self__.meta16728;
});})(mults,ensure_mult))
;
cljs.core.async.t16727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_16729,meta16728__$1){var self__ = this;
var _16729__$1 = this;return (new cljs.core.async.t16727(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta16728__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t16727 = ((function (mults,ensure_mult){
return (function __GT_t16727(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16728){return (new cljs.core.async.t16727(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta16728));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t16727(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5850__auto___16851 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_16803){var state_val_16804 = (state_16803[1]);if((state_val_16804 === 1))
{var state_16803__$1 = state_16803;var statearr_16805_16852 = state_16803__$1;(statearr_16805_16852[2] = null);
(statearr_16805_16852[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 2))
{var state_16803__$1 = state_16803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16803__$1,4,ch);
} else
{if((state_val_16804 === 3))
{var inst_16801 = (state_16803[2]);var state_16803__$1 = state_16803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16803__$1,inst_16801);
} else
{if((state_val_16804 === 4))
{var inst_16732 = (state_16803[7]);var inst_16732__$1 = (state_16803[2]);var inst_16733 = (inst_16732__$1 == null);var state_16803__$1 = (function (){var statearr_16806 = state_16803;(statearr_16806[7] = inst_16732__$1);
return statearr_16806;
})();if(cljs.core.truth_(inst_16733))
{var statearr_16807_16853 = state_16803__$1;(statearr_16807_16853[1] = 5);
} else
{var statearr_16808_16854 = state_16803__$1;(statearr_16808_16854[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 5))
{var inst_16739 = cljs.core.deref.call(null,mults);var inst_16740 = cljs.core.vals.call(null,inst_16739);var inst_16741 = cljs.core.seq.call(null,inst_16740);var inst_16742 = inst_16741;var inst_16743 = null;var inst_16744 = 0;var inst_16745 = 0;var state_16803__$1 = (function (){var statearr_16809 = state_16803;(statearr_16809[8] = inst_16742);
(statearr_16809[9] = inst_16745);
(statearr_16809[10] = inst_16744);
(statearr_16809[11] = inst_16743);
return statearr_16809;
})();var statearr_16810_16855 = state_16803__$1;(statearr_16810_16855[2] = null);
(statearr_16810_16855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 6))
{var inst_16780 = (state_16803[12]);var inst_16782 = (state_16803[13]);var inst_16732 = (state_16803[7]);var inst_16780__$1 = topic_fn.call(null,inst_16732);var inst_16781 = cljs.core.deref.call(null,mults);var inst_16782__$1 = cljs.core.get.call(null,inst_16781,inst_16780__$1);var state_16803__$1 = (function (){var statearr_16811 = state_16803;(statearr_16811[12] = inst_16780__$1);
(statearr_16811[13] = inst_16782__$1);
return statearr_16811;
})();if(cljs.core.truth_(inst_16782__$1))
{var statearr_16812_16856 = state_16803__$1;(statearr_16812_16856[1] = 19);
} else
{var statearr_16813_16857 = state_16803__$1;(statearr_16813_16857[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 7))
{var inst_16799 = (state_16803[2]);var state_16803__$1 = state_16803;var statearr_16814_16858 = state_16803__$1;(statearr_16814_16858[2] = inst_16799);
(statearr_16814_16858[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 8))
{var inst_16745 = (state_16803[9]);var inst_16744 = (state_16803[10]);var inst_16747 = (inst_16745 < inst_16744);var inst_16748 = inst_16747;var state_16803__$1 = state_16803;if(cljs.core.truth_(inst_16748))
{var statearr_16818_16859 = state_16803__$1;(statearr_16818_16859[1] = 10);
} else
{var statearr_16819_16860 = state_16803__$1;(statearr_16819_16860[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 9))
{var inst_16778 = (state_16803[2]);var state_16803__$1 = state_16803;var statearr_16820_16861 = state_16803__$1;(statearr_16820_16861[2] = inst_16778);
(statearr_16820_16861[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 10))
{var inst_16742 = (state_16803[8]);var inst_16745 = (state_16803[9]);var inst_16744 = (state_16803[10]);var inst_16743 = (state_16803[11]);var inst_16750 = cljs.core._nth.call(null,inst_16743,inst_16745);var inst_16751 = cljs.core.async.muxch_STAR_.call(null,inst_16750);var inst_16752 = cljs.core.async.close_BANG_.call(null,inst_16751);var inst_16753 = (inst_16745 + 1);var tmp16815 = inst_16742;var tmp16816 = inst_16744;var tmp16817 = inst_16743;var inst_16742__$1 = tmp16815;var inst_16743__$1 = tmp16817;var inst_16744__$1 = tmp16816;var inst_16745__$1 = inst_16753;var state_16803__$1 = (function (){var statearr_16821 = state_16803;(statearr_16821[8] = inst_16742__$1);
(statearr_16821[14] = inst_16752);
(statearr_16821[9] = inst_16745__$1);
(statearr_16821[10] = inst_16744__$1);
(statearr_16821[11] = inst_16743__$1);
return statearr_16821;
})();var statearr_16822_16862 = state_16803__$1;(statearr_16822_16862[2] = null);
(statearr_16822_16862[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 11))
{var inst_16742 = (state_16803[8]);var inst_16756 = (state_16803[15]);var inst_16756__$1 = cljs.core.seq.call(null,inst_16742);var state_16803__$1 = (function (){var statearr_16823 = state_16803;(statearr_16823[15] = inst_16756__$1);
return statearr_16823;
})();if(inst_16756__$1)
{var statearr_16824_16863 = state_16803__$1;(statearr_16824_16863[1] = 13);
} else
{var statearr_16825_16864 = state_16803__$1;(statearr_16825_16864[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 12))
{var inst_16776 = (state_16803[2]);var state_16803__$1 = state_16803;var statearr_16826_16865 = state_16803__$1;(statearr_16826_16865[2] = inst_16776);
(statearr_16826_16865[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 13))
{var inst_16756 = (state_16803[15]);var inst_16758 = cljs.core.chunked_seq_QMARK_.call(null,inst_16756);var state_16803__$1 = state_16803;if(inst_16758)
{var statearr_16827_16866 = state_16803__$1;(statearr_16827_16866[1] = 16);
} else
{var statearr_16828_16867 = state_16803__$1;(statearr_16828_16867[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 14))
{var state_16803__$1 = state_16803;var statearr_16829_16868 = state_16803__$1;(statearr_16829_16868[2] = null);
(statearr_16829_16868[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 15))
{var inst_16774 = (state_16803[2]);var state_16803__$1 = state_16803;var statearr_16830_16869 = state_16803__$1;(statearr_16830_16869[2] = inst_16774);
(statearr_16830_16869[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 16))
{var inst_16756 = (state_16803[15]);var inst_16760 = cljs.core.chunk_first.call(null,inst_16756);var inst_16761 = cljs.core.chunk_rest.call(null,inst_16756);var inst_16762 = cljs.core.count.call(null,inst_16760);var inst_16742 = inst_16761;var inst_16743 = inst_16760;var inst_16744 = inst_16762;var inst_16745 = 0;var state_16803__$1 = (function (){var statearr_16831 = state_16803;(statearr_16831[8] = inst_16742);
(statearr_16831[9] = inst_16745);
(statearr_16831[10] = inst_16744);
(statearr_16831[11] = inst_16743);
return statearr_16831;
})();var statearr_16832_16870 = state_16803__$1;(statearr_16832_16870[2] = null);
(statearr_16832_16870[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 17))
{var inst_16756 = (state_16803[15]);var inst_16765 = cljs.core.first.call(null,inst_16756);var inst_16766 = cljs.core.async.muxch_STAR_.call(null,inst_16765);var inst_16767 = cljs.core.async.close_BANG_.call(null,inst_16766);var inst_16768 = cljs.core.next.call(null,inst_16756);var inst_16742 = inst_16768;var inst_16743 = null;var inst_16744 = 0;var inst_16745 = 0;var state_16803__$1 = (function (){var statearr_16833 = state_16803;(statearr_16833[8] = inst_16742);
(statearr_16833[9] = inst_16745);
(statearr_16833[10] = inst_16744);
(statearr_16833[11] = inst_16743);
(statearr_16833[16] = inst_16767);
return statearr_16833;
})();var statearr_16834_16871 = state_16803__$1;(statearr_16834_16871[2] = null);
(statearr_16834_16871[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 18))
{var inst_16771 = (state_16803[2]);var state_16803__$1 = state_16803;var statearr_16835_16872 = state_16803__$1;(statearr_16835_16872[2] = inst_16771);
(statearr_16835_16872[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 19))
{var state_16803__$1 = state_16803;var statearr_16836_16873 = state_16803__$1;(statearr_16836_16873[2] = null);
(statearr_16836_16873[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 20))
{var state_16803__$1 = state_16803;var statearr_16837_16874 = state_16803__$1;(statearr_16837_16874[2] = null);
(statearr_16837_16874[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 21))
{var inst_16796 = (state_16803[2]);var state_16803__$1 = (function (){var statearr_16838 = state_16803;(statearr_16838[17] = inst_16796);
return statearr_16838;
})();var statearr_16839_16875 = state_16803__$1;(statearr_16839_16875[2] = null);
(statearr_16839_16875[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 22))
{var inst_16793 = (state_16803[2]);var state_16803__$1 = state_16803;var statearr_16840_16876 = state_16803__$1;(statearr_16840_16876[2] = inst_16793);
(statearr_16840_16876[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 23))
{var inst_16780 = (state_16803[12]);var inst_16784 = (state_16803[2]);var inst_16785 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_16780);var state_16803__$1 = (function (){var statearr_16841 = state_16803;(statearr_16841[18] = inst_16784);
return statearr_16841;
})();var statearr_16842_16877 = state_16803__$1;(statearr_16842_16877[2] = inst_16785);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16803__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16804 === 24))
{var inst_16782 = (state_16803[13]);var inst_16732 = (state_16803[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16803,23,Object,null,22);var inst_16789 = cljs.core.async.muxch_STAR_.call(null,inst_16782);var state_16803__$1 = state_16803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16803__$1,25,inst_16789,inst_16732);
} else
{if((state_val_16804 === 25))
{var inst_16791 = (state_16803[2]);var state_16803__$1 = state_16803;var statearr_16843_16878 = state_16803__$1;(statearr_16843_16878[2] = inst_16791);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16803__$1);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_16847 = (new Array(19));(statearr_16847[0] = state_machine__5781__auto__);
(statearr_16847[1] = 1);
return statearr_16847;
});
var state_machine__5781__auto____1 = (function (state_16803){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_16803);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e16848){if((e16848 instanceof Object))
{var ex__5784__auto__ = e16848;var statearr_16849_16879 = state_16803;(statearr_16849_16879[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16848;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16880 = state_16803;
state_16803 = G__16880;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_16803){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_16803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_16850 = f__5851__auto__.call(null);(statearr_16850[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___16851);
return statearr_16850;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
,cljs.core.range.call(null,cnt));var c__5850__auto___17017 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_16987){var state_val_16988 = (state_16987[1]);if((state_val_16988 === 1))
{var state_16987__$1 = state_16987;var statearr_16989_17018 = state_16987__$1;(statearr_16989_17018[2] = null);
(statearr_16989_17018[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 2))
{var inst_16950 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_16951 = 0;var state_16987__$1 = (function (){var statearr_16990 = state_16987;(statearr_16990[7] = inst_16950);
(statearr_16990[8] = inst_16951);
return statearr_16990;
})();var statearr_16991_17019 = state_16987__$1;(statearr_16991_17019[2] = null);
(statearr_16991_17019[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 3))
{var inst_16985 = (state_16987[2]);var state_16987__$1 = state_16987;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16987__$1,inst_16985);
} else
{if((state_val_16988 === 4))
{var inst_16951 = (state_16987[8]);var inst_16953 = (inst_16951 < cnt);var state_16987__$1 = state_16987;if(cljs.core.truth_(inst_16953))
{var statearr_16992_17020 = state_16987__$1;(statearr_16992_17020[1] = 6);
} else
{var statearr_16993_17021 = state_16987__$1;(statearr_16993_17021[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 5))
{var inst_16971 = (state_16987[2]);var state_16987__$1 = (function (){var statearr_16994 = state_16987;(statearr_16994[9] = inst_16971);
return statearr_16994;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16987__$1,12,dchan);
} else
{if((state_val_16988 === 6))
{var state_16987__$1 = state_16987;var statearr_16995_17022 = state_16987__$1;(statearr_16995_17022[2] = null);
(statearr_16995_17022[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 7))
{var state_16987__$1 = state_16987;var statearr_16996_17023 = state_16987__$1;(statearr_16996_17023[2] = null);
(statearr_16996_17023[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 8))
{var inst_16969 = (state_16987[2]);var state_16987__$1 = state_16987;var statearr_16997_17024 = state_16987__$1;(statearr_16997_17024[2] = inst_16969);
(statearr_16997_17024[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 9))
{var inst_16951 = (state_16987[8]);var inst_16964 = (state_16987[2]);var inst_16965 = (inst_16951 + 1);var inst_16951__$1 = inst_16965;var state_16987__$1 = (function (){var statearr_16998 = state_16987;(statearr_16998[8] = inst_16951__$1);
(statearr_16998[10] = inst_16964);
return statearr_16998;
})();var statearr_16999_17025 = state_16987__$1;(statearr_16999_17025[2] = null);
(statearr_16999_17025[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 10))
{var inst_16955 = (state_16987[2]);var inst_16956 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_16987__$1 = (function (){var statearr_17000 = state_16987;(statearr_17000[11] = inst_16955);
return statearr_17000;
})();var statearr_17001_17026 = state_16987__$1;(statearr_17001_17026[2] = inst_16956);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16987__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 11))
{var inst_16951 = (state_16987[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_16987,10,Object,null,9);var inst_16960 = chs__$1.call(null,inst_16951);var inst_16961 = done.call(null,inst_16951);var inst_16962 = cljs.core.async.take_BANG_.call(null,inst_16960,inst_16961);var state_16987__$1 = state_16987;var statearr_17002_17027 = state_16987__$1;(statearr_17002_17027[2] = inst_16962);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16987__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 12))
{var inst_16973 = (state_16987[12]);var inst_16973__$1 = (state_16987[2]);var inst_16974 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_16973__$1);var state_16987__$1 = (function (){var statearr_17003 = state_16987;(statearr_17003[12] = inst_16973__$1);
return statearr_17003;
})();if(cljs.core.truth_(inst_16974))
{var statearr_17004_17028 = state_16987__$1;(statearr_17004_17028[1] = 13);
} else
{var statearr_17005_17029 = state_16987__$1;(statearr_17005_17029[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 13))
{var inst_16976 = cljs.core.async.close_BANG_.call(null,out);var state_16987__$1 = state_16987;var statearr_17006_17030 = state_16987__$1;(statearr_17006_17030[2] = inst_16976);
(statearr_17006_17030[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 14))
{var inst_16973 = (state_16987[12]);var inst_16978 = cljs.core.apply.call(null,f,inst_16973);var state_16987__$1 = state_16987;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16987__$1,16,out,inst_16978);
} else
{if((state_val_16988 === 15))
{var inst_16983 = (state_16987[2]);var state_16987__$1 = state_16987;var statearr_17007_17031 = state_16987__$1;(statearr_17007_17031[2] = inst_16983);
(statearr_17007_17031[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16988 === 16))
{var inst_16980 = (state_16987[2]);var state_16987__$1 = (function (){var statearr_17008 = state_16987;(statearr_17008[13] = inst_16980);
return statearr_17008;
})();var statearr_17009_17032 = state_16987__$1;(statearr_17009_17032[2] = null);
(statearr_17009_17032[1] = 2);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_17013 = (new Array(14));(statearr_17013[0] = state_machine__5781__auto__);
(statearr_17013[1] = 1);
return statearr_17013;
});
var state_machine__5781__auto____1 = (function (state_16987){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_16987);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e17014){if((e17014 instanceof Object))
{var ex__5784__auto__ = e17014;var statearr_17015_17033 = state_16987;(statearr_17015_17033[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16987);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17014;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17034 = state_16987;
state_16987 = G__17034;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_16987){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_16987);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_17016 = f__5851__auto__.call(null);(statearr_17016[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___17017);
return statearr_17016;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5850__auto___17142 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_17118){var state_val_17119 = (state_17118[1]);if((state_val_17119 === 1))
{var inst_17089 = cljs.core.vec.call(null,chs);var inst_17090 = inst_17089;var state_17118__$1 = (function (){var statearr_17120 = state_17118;(statearr_17120[7] = inst_17090);
return statearr_17120;
})();var statearr_17121_17143 = state_17118__$1;(statearr_17121_17143[2] = null);
(statearr_17121_17143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17119 === 2))
{var inst_17090 = (state_17118[7]);var inst_17092 = cljs.core.count.call(null,inst_17090);var inst_17093 = (inst_17092 > 0);var state_17118__$1 = state_17118;if(cljs.core.truth_(inst_17093))
{var statearr_17122_17144 = state_17118__$1;(statearr_17122_17144[1] = 4);
} else
{var statearr_17123_17145 = state_17118__$1;(statearr_17123_17145[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17119 === 3))
{var inst_17116 = (state_17118[2]);var state_17118__$1 = state_17118;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17118__$1,inst_17116);
} else
{if((state_val_17119 === 4))
{var inst_17090 = (state_17118[7]);var state_17118__$1 = state_17118;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_17118__$1,7,inst_17090);
} else
{if((state_val_17119 === 5))
{var inst_17112 = cljs.core.async.close_BANG_.call(null,out);var state_17118__$1 = state_17118;var statearr_17124_17146 = state_17118__$1;(statearr_17124_17146[2] = inst_17112);
(statearr_17124_17146[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17119 === 6))
{var inst_17114 = (state_17118[2]);var state_17118__$1 = state_17118;var statearr_17125_17147 = state_17118__$1;(statearr_17125_17147[2] = inst_17114);
(statearr_17125_17147[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17119 === 7))
{var inst_17097 = (state_17118[8]);var inst_17098 = (state_17118[9]);var inst_17097__$1 = (state_17118[2]);var inst_17098__$1 = cljs.core.nth.call(null,inst_17097__$1,0,null);var inst_17099 = cljs.core.nth.call(null,inst_17097__$1,1,null);var inst_17100 = (inst_17098__$1 == null);var state_17118__$1 = (function (){var statearr_17126 = state_17118;(statearr_17126[8] = inst_17097__$1);
(statearr_17126[10] = inst_17099);
(statearr_17126[9] = inst_17098__$1);
return statearr_17126;
})();if(cljs.core.truth_(inst_17100))
{var statearr_17127_17148 = state_17118__$1;(statearr_17127_17148[1] = 8);
} else
{var statearr_17128_17149 = state_17118__$1;(statearr_17128_17149[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17119 === 8))
{var inst_17090 = (state_17118[7]);var inst_17097 = (state_17118[8]);var inst_17099 = (state_17118[10]);var inst_17098 = (state_17118[9]);var inst_17102 = (function (){var c = inst_17099;var v = inst_17098;var vec__17095 = inst_17097;var cs = inst_17090;return ((function (c,v,vec__17095,cs,inst_17090,inst_17097,inst_17099,inst_17098,state_val_17119){
return (function (p1__17035_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__17035_SHARP_);
});
;})(c,v,vec__17095,cs,inst_17090,inst_17097,inst_17099,inst_17098,state_val_17119))
})();var inst_17103 = cljs.core.filterv.call(null,inst_17102,inst_17090);var inst_17090__$1 = inst_17103;var state_17118__$1 = (function (){var statearr_17129 = state_17118;(statearr_17129[7] = inst_17090__$1);
return statearr_17129;
})();var statearr_17130_17150 = state_17118__$1;(statearr_17130_17150[2] = null);
(statearr_17130_17150[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17119 === 9))
{var inst_17098 = (state_17118[9]);var state_17118__$1 = state_17118;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17118__$1,11,out,inst_17098);
} else
{if((state_val_17119 === 10))
{var inst_17110 = (state_17118[2]);var state_17118__$1 = state_17118;var statearr_17132_17151 = state_17118__$1;(statearr_17132_17151[2] = inst_17110);
(statearr_17132_17151[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17119 === 11))
{var inst_17090 = (state_17118[7]);var inst_17107 = (state_17118[2]);var tmp17131 = inst_17090;var inst_17090__$1 = tmp17131;var state_17118__$1 = (function (){var statearr_17133 = state_17118;(statearr_17133[7] = inst_17090__$1);
(statearr_17133[11] = inst_17107);
return statearr_17133;
})();var statearr_17134_17152 = state_17118__$1;(statearr_17134_17152[2] = null);
(statearr_17134_17152[1] = 2);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_17138 = (new Array(12));(statearr_17138[0] = state_machine__5781__auto__);
(statearr_17138[1] = 1);
return statearr_17138;
});
var state_machine__5781__auto____1 = (function (state_17118){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_17118);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e17139){if((e17139 instanceof Object))
{var ex__5784__auto__ = e17139;var statearr_17140_17153 = state_17118;(statearr_17140_17153[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17118);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17139;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17154 = state_17118;
state_17118 = G__17154;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_17118){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_17118);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_17141 = f__5851__auto__.call(null);(statearr_17141[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___17142);
return statearr_17141;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5850__auto___17247 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_17224){var state_val_17225 = (state_17224[1]);if((state_val_17225 === 1))
{var inst_17201 = 0;var state_17224__$1 = (function (){var statearr_17226 = state_17224;(statearr_17226[7] = inst_17201);
return statearr_17226;
})();var statearr_17227_17248 = state_17224__$1;(statearr_17227_17248[2] = null);
(statearr_17227_17248[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17225 === 2))
{var inst_17201 = (state_17224[7]);var inst_17203 = (inst_17201 < n);var state_17224__$1 = state_17224;if(cljs.core.truth_(inst_17203))
{var statearr_17228_17249 = state_17224__$1;(statearr_17228_17249[1] = 4);
} else
{var statearr_17229_17250 = state_17224__$1;(statearr_17229_17250[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17225 === 3))
{var inst_17221 = (state_17224[2]);var inst_17222 = cljs.core.async.close_BANG_.call(null,out);var state_17224__$1 = (function (){var statearr_17230 = state_17224;(statearr_17230[8] = inst_17221);
return statearr_17230;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17224__$1,inst_17222);
} else
{if((state_val_17225 === 4))
{var state_17224__$1 = state_17224;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17224__$1,7,ch);
} else
{if((state_val_17225 === 5))
{var state_17224__$1 = state_17224;var statearr_17231_17251 = state_17224__$1;(statearr_17231_17251[2] = null);
(statearr_17231_17251[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17225 === 6))
{var inst_17219 = (state_17224[2]);var state_17224__$1 = state_17224;var statearr_17232_17252 = state_17224__$1;(statearr_17232_17252[2] = inst_17219);
(statearr_17232_17252[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17225 === 7))
{var inst_17206 = (state_17224[9]);var inst_17206__$1 = (state_17224[2]);var inst_17207 = (inst_17206__$1 == null);var inst_17208 = cljs.core.not.call(null,inst_17207);var state_17224__$1 = (function (){var statearr_17233 = state_17224;(statearr_17233[9] = inst_17206__$1);
return statearr_17233;
})();if(inst_17208)
{var statearr_17234_17253 = state_17224__$1;(statearr_17234_17253[1] = 8);
} else
{var statearr_17235_17254 = state_17224__$1;(statearr_17235_17254[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17225 === 8))
{var inst_17206 = (state_17224[9]);var state_17224__$1 = state_17224;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17224__$1,11,out,inst_17206);
} else
{if((state_val_17225 === 9))
{var state_17224__$1 = state_17224;var statearr_17236_17255 = state_17224__$1;(statearr_17236_17255[2] = null);
(statearr_17236_17255[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17225 === 10))
{var inst_17216 = (state_17224[2]);var state_17224__$1 = state_17224;var statearr_17237_17256 = state_17224__$1;(statearr_17237_17256[2] = inst_17216);
(statearr_17237_17256[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17225 === 11))
{var inst_17201 = (state_17224[7]);var inst_17211 = (state_17224[2]);var inst_17212 = (inst_17201 + 1);var inst_17201__$1 = inst_17212;var state_17224__$1 = (function (){var statearr_17238 = state_17224;(statearr_17238[7] = inst_17201__$1);
(statearr_17238[10] = inst_17211);
return statearr_17238;
})();var statearr_17239_17257 = state_17224__$1;(statearr_17239_17257[2] = null);
(statearr_17239_17257[1] = 2);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_17243 = (new Array(11));(statearr_17243[0] = state_machine__5781__auto__);
(statearr_17243[1] = 1);
return statearr_17243;
});
var state_machine__5781__auto____1 = (function (state_17224){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_17224);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e17244){if((e17244 instanceof Object))
{var ex__5784__auto__ = e17244;var statearr_17245_17258 = state_17224;(statearr_17245_17258[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17224);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17244;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17259 = state_17224;
state_17224 = G__17259;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_17224){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_17224);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_17246 = f__5851__auto__.call(null);(statearr_17246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___17247);
return statearr_17246;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5850__auto___17356 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_17331){var state_val_17332 = (state_17331[1]);if((state_val_17332 === 1))
{var inst_17308 = null;var state_17331__$1 = (function (){var statearr_17333 = state_17331;(statearr_17333[7] = inst_17308);
return statearr_17333;
})();var statearr_17334_17357 = state_17331__$1;(statearr_17334_17357[2] = null);
(statearr_17334_17357[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17332 === 2))
{var state_17331__$1 = state_17331;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17331__$1,4,ch);
} else
{if((state_val_17332 === 3))
{var inst_17328 = (state_17331[2]);var inst_17329 = cljs.core.async.close_BANG_.call(null,out);var state_17331__$1 = (function (){var statearr_17335 = state_17331;(statearr_17335[8] = inst_17328);
return statearr_17335;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17331__$1,inst_17329);
} else
{if((state_val_17332 === 4))
{var inst_17311 = (state_17331[9]);var inst_17311__$1 = (state_17331[2]);var inst_17312 = (inst_17311__$1 == null);var inst_17313 = cljs.core.not.call(null,inst_17312);var state_17331__$1 = (function (){var statearr_17336 = state_17331;(statearr_17336[9] = inst_17311__$1);
return statearr_17336;
})();if(inst_17313)
{var statearr_17337_17358 = state_17331__$1;(statearr_17337_17358[1] = 5);
} else
{var statearr_17338_17359 = state_17331__$1;(statearr_17338_17359[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17332 === 5))
{var inst_17311 = (state_17331[9]);var inst_17308 = (state_17331[7]);var inst_17315 = cljs.core._EQ_.call(null,inst_17311,inst_17308);var state_17331__$1 = state_17331;if(inst_17315)
{var statearr_17339_17360 = state_17331__$1;(statearr_17339_17360[1] = 8);
} else
{var statearr_17340_17361 = state_17331__$1;(statearr_17340_17361[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17332 === 6))
{var state_17331__$1 = state_17331;var statearr_17342_17362 = state_17331__$1;(statearr_17342_17362[2] = null);
(statearr_17342_17362[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17332 === 7))
{var inst_17326 = (state_17331[2]);var state_17331__$1 = state_17331;var statearr_17343_17363 = state_17331__$1;(statearr_17343_17363[2] = inst_17326);
(statearr_17343_17363[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17332 === 8))
{var inst_17308 = (state_17331[7]);var tmp17341 = inst_17308;var inst_17308__$1 = tmp17341;var state_17331__$1 = (function (){var statearr_17344 = state_17331;(statearr_17344[7] = inst_17308__$1);
return statearr_17344;
})();var statearr_17345_17364 = state_17331__$1;(statearr_17345_17364[2] = null);
(statearr_17345_17364[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17332 === 9))
{var inst_17311 = (state_17331[9]);var state_17331__$1 = state_17331;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17331__$1,11,out,inst_17311);
} else
{if((state_val_17332 === 10))
{var inst_17323 = (state_17331[2]);var state_17331__$1 = state_17331;var statearr_17346_17365 = state_17331__$1;(statearr_17346_17365[2] = inst_17323);
(statearr_17346_17365[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17332 === 11))
{var inst_17311 = (state_17331[9]);var inst_17320 = (state_17331[2]);var inst_17308 = inst_17311;var state_17331__$1 = (function (){var statearr_17347 = state_17331;(statearr_17347[7] = inst_17308);
(statearr_17347[10] = inst_17320);
return statearr_17347;
})();var statearr_17348_17366 = state_17331__$1;(statearr_17348_17366[2] = null);
(statearr_17348_17366[1] = 2);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_17352 = (new Array(11));(statearr_17352[0] = state_machine__5781__auto__);
(statearr_17352[1] = 1);
return statearr_17352;
});
var state_machine__5781__auto____1 = (function (state_17331){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_17331);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e17353){if((e17353 instanceof Object))
{var ex__5784__auto__ = e17353;var statearr_17354_17367 = state_17331;(statearr_17354_17367[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17331);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17353;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17368 = state_17331;
state_17331 = G__17368;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_17331){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_17331);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_17355 = f__5851__auto__.call(null);(statearr_17355[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___17356);
return statearr_17355;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5850__auto___17503 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_17473){var state_val_17474 = (state_17473[1]);if((state_val_17474 === 1))
{var inst_17436 = (new Array(n));var inst_17437 = inst_17436;var inst_17438 = 0;var state_17473__$1 = (function (){var statearr_17475 = state_17473;(statearr_17475[7] = inst_17438);
(statearr_17475[8] = inst_17437);
return statearr_17475;
})();var statearr_17476_17504 = state_17473__$1;(statearr_17476_17504[2] = null);
(statearr_17476_17504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 2))
{var state_17473__$1 = state_17473;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17473__$1,4,ch);
} else
{if((state_val_17474 === 3))
{var inst_17471 = (state_17473[2]);var state_17473__$1 = state_17473;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17473__$1,inst_17471);
} else
{if((state_val_17474 === 4))
{var inst_17441 = (state_17473[9]);var inst_17441__$1 = (state_17473[2]);var inst_17442 = (inst_17441__$1 == null);var inst_17443 = cljs.core.not.call(null,inst_17442);var state_17473__$1 = (function (){var statearr_17477 = state_17473;(statearr_17477[9] = inst_17441__$1);
return statearr_17477;
})();if(inst_17443)
{var statearr_17478_17505 = state_17473__$1;(statearr_17478_17505[1] = 5);
} else
{var statearr_17479_17506 = state_17473__$1;(statearr_17479_17506[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 5))
{var inst_17446 = (state_17473[10]);var inst_17438 = (state_17473[7]);var inst_17437 = (state_17473[8]);var inst_17441 = (state_17473[9]);var inst_17445 = (inst_17437[inst_17438] = inst_17441);var inst_17446__$1 = (inst_17438 + 1);var inst_17447 = (inst_17446__$1 < n);var state_17473__$1 = (function (){var statearr_17480 = state_17473;(statearr_17480[11] = inst_17445);
(statearr_17480[10] = inst_17446__$1);
return statearr_17480;
})();if(cljs.core.truth_(inst_17447))
{var statearr_17481_17507 = state_17473__$1;(statearr_17481_17507[1] = 8);
} else
{var statearr_17482_17508 = state_17473__$1;(statearr_17482_17508[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 6))
{var inst_17438 = (state_17473[7]);var inst_17459 = (inst_17438 > 0);var state_17473__$1 = state_17473;if(cljs.core.truth_(inst_17459))
{var statearr_17484_17509 = state_17473__$1;(statearr_17484_17509[1] = 12);
} else
{var statearr_17485_17510 = state_17473__$1;(statearr_17485_17510[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 7))
{var inst_17469 = (state_17473[2]);var state_17473__$1 = state_17473;var statearr_17486_17511 = state_17473__$1;(statearr_17486_17511[2] = inst_17469);
(statearr_17486_17511[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 8))
{var inst_17446 = (state_17473[10]);var inst_17437 = (state_17473[8]);var tmp17483 = inst_17437;var inst_17437__$1 = tmp17483;var inst_17438 = inst_17446;var state_17473__$1 = (function (){var statearr_17487 = state_17473;(statearr_17487[7] = inst_17438);
(statearr_17487[8] = inst_17437__$1);
return statearr_17487;
})();var statearr_17488_17512 = state_17473__$1;(statearr_17488_17512[2] = null);
(statearr_17488_17512[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 9))
{var inst_17437 = (state_17473[8]);var inst_17451 = cljs.core.vec.call(null,inst_17437);var state_17473__$1 = state_17473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17473__$1,11,out,inst_17451);
} else
{if((state_val_17474 === 10))
{var inst_17457 = (state_17473[2]);var state_17473__$1 = state_17473;var statearr_17489_17513 = state_17473__$1;(statearr_17489_17513[2] = inst_17457);
(statearr_17489_17513[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 11))
{var inst_17453 = (state_17473[2]);var inst_17454 = (new Array(n));var inst_17437 = inst_17454;var inst_17438 = 0;var state_17473__$1 = (function (){var statearr_17490 = state_17473;(statearr_17490[7] = inst_17438);
(statearr_17490[8] = inst_17437);
(statearr_17490[12] = inst_17453);
return statearr_17490;
})();var statearr_17491_17514 = state_17473__$1;(statearr_17491_17514[2] = null);
(statearr_17491_17514[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 12))
{var inst_17437 = (state_17473[8]);var inst_17461 = cljs.core.vec.call(null,inst_17437);var state_17473__$1 = state_17473;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17473__$1,15,out,inst_17461);
} else
{if((state_val_17474 === 13))
{var state_17473__$1 = state_17473;var statearr_17492_17515 = state_17473__$1;(statearr_17492_17515[2] = null);
(statearr_17492_17515[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 14))
{var inst_17466 = (state_17473[2]);var inst_17467 = cljs.core.async.close_BANG_.call(null,out);var state_17473__$1 = (function (){var statearr_17493 = state_17473;(statearr_17493[13] = inst_17466);
return statearr_17493;
})();var statearr_17494_17516 = state_17473__$1;(statearr_17494_17516[2] = inst_17467);
(statearr_17494_17516[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17474 === 15))
{var inst_17463 = (state_17473[2]);var state_17473__$1 = state_17473;var statearr_17495_17517 = state_17473__$1;(statearr_17495_17517[2] = inst_17463);
(statearr_17495_17517[1] = 14);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_17499 = (new Array(14));(statearr_17499[0] = state_machine__5781__auto__);
(statearr_17499[1] = 1);
return statearr_17499;
});
var state_machine__5781__auto____1 = (function (state_17473){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_17473);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e17500){if((e17500 instanceof Object))
{var ex__5784__auto__ = e17500;var statearr_17501_17518 = state_17473;(statearr_17501_17518[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17473);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17500;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17519 = state_17473;
state_17473 = G__17519;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_17473){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_17473);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_17502 = f__5851__auto__.call(null);(statearr_17502[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___17503);
return statearr_17502;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5850__auto___17662 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5851__auto__ = (function (){var switch__5780__auto__ = (function (state_17632){var state_val_17633 = (state_17632[1]);if((state_val_17633 === 1))
{var inst_17591 = (new Array(0));var inst_17592 = inst_17591;var inst_17593 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_17632__$1 = (function (){var statearr_17634 = state_17632;(statearr_17634[7] = inst_17593);
(statearr_17634[8] = inst_17592);
return statearr_17634;
})();var statearr_17635_17663 = state_17632__$1;(statearr_17635_17663[2] = null);
(statearr_17635_17663[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 2))
{var state_17632__$1 = state_17632;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_17632__$1,4,ch);
} else
{if((state_val_17633 === 3))
{var inst_17630 = (state_17632[2]);var state_17632__$1 = state_17632;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_17632__$1,inst_17630);
} else
{if((state_val_17633 === 4))
{var inst_17596 = (state_17632[9]);var inst_17596__$1 = (state_17632[2]);var inst_17597 = (inst_17596__$1 == null);var inst_17598 = cljs.core.not.call(null,inst_17597);var state_17632__$1 = (function (){var statearr_17636 = state_17632;(statearr_17636[9] = inst_17596__$1);
return statearr_17636;
})();if(inst_17598)
{var statearr_17637_17664 = state_17632__$1;(statearr_17637_17664[1] = 5);
} else
{var statearr_17638_17665 = state_17632__$1;(statearr_17638_17665[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 5))
{var inst_17593 = (state_17632[7]);var inst_17596 = (state_17632[9]);var inst_17600 = (state_17632[10]);var inst_17600__$1 = f.call(null,inst_17596);var inst_17601 = cljs.core._EQ_.call(null,inst_17600__$1,inst_17593);var inst_17602 = cljs.core.keyword_identical_QMARK_.call(null,inst_17593,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_17603 = (inst_17601) || (inst_17602);var state_17632__$1 = (function (){var statearr_17639 = state_17632;(statearr_17639[10] = inst_17600__$1);
return statearr_17639;
})();if(cljs.core.truth_(inst_17603))
{var statearr_17640_17666 = state_17632__$1;(statearr_17640_17666[1] = 8);
} else
{var statearr_17641_17667 = state_17632__$1;(statearr_17641_17667[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 6))
{var inst_17592 = (state_17632[8]);var inst_17617 = inst_17592.length;var inst_17618 = (inst_17617 > 0);var state_17632__$1 = state_17632;if(cljs.core.truth_(inst_17618))
{var statearr_17643_17668 = state_17632__$1;(statearr_17643_17668[1] = 12);
} else
{var statearr_17644_17669 = state_17632__$1;(statearr_17644_17669[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 7))
{var inst_17628 = (state_17632[2]);var state_17632__$1 = state_17632;var statearr_17645_17670 = state_17632__$1;(statearr_17645_17670[2] = inst_17628);
(statearr_17645_17670[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 8))
{var inst_17596 = (state_17632[9]);var inst_17600 = (state_17632[10]);var inst_17592 = (state_17632[8]);var inst_17605 = inst_17592.push(inst_17596);var tmp17642 = inst_17592;var inst_17592__$1 = tmp17642;var inst_17593 = inst_17600;var state_17632__$1 = (function (){var statearr_17646 = state_17632;(statearr_17646[7] = inst_17593);
(statearr_17646[8] = inst_17592__$1);
(statearr_17646[11] = inst_17605);
return statearr_17646;
})();var statearr_17647_17671 = state_17632__$1;(statearr_17647_17671[2] = null);
(statearr_17647_17671[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 9))
{var inst_17592 = (state_17632[8]);var inst_17608 = cljs.core.vec.call(null,inst_17592);var state_17632__$1 = state_17632;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17632__$1,11,out,inst_17608);
} else
{if((state_val_17633 === 10))
{var inst_17615 = (state_17632[2]);var state_17632__$1 = state_17632;var statearr_17648_17672 = state_17632__$1;(statearr_17648_17672[2] = inst_17615);
(statearr_17648_17672[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 11))
{var inst_17596 = (state_17632[9]);var inst_17600 = (state_17632[10]);var inst_17610 = (state_17632[2]);var inst_17611 = (new Array(0));var inst_17612 = inst_17611.push(inst_17596);var inst_17592 = inst_17611;var inst_17593 = inst_17600;var state_17632__$1 = (function (){var statearr_17649 = state_17632;(statearr_17649[7] = inst_17593);
(statearr_17649[12] = inst_17610);
(statearr_17649[8] = inst_17592);
(statearr_17649[13] = inst_17612);
return statearr_17649;
})();var statearr_17650_17673 = state_17632__$1;(statearr_17650_17673[2] = null);
(statearr_17650_17673[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 12))
{var inst_17592 = (state_17632[8]);var inst_17620 = cljs.core.vec.call(null,inst_17592);var state_17632__$1 = state_17632;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_17632__$1,15,out,inst_17620);
} else
{if((state_val_17633 === 13))
{var state_17632__$1 = state_17632;var statearr_17651_17674 = state_17632__$1;(statearr_17651_17674[2] = null);
(statearr_17651_17674[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 14))
{var inst_17625 = (state_17632[2]);var inst_17626 = cljs.core.async.close_BANG_.call(null,out);var state_17632__$1 = (function (){var statearr_17652 = state_17632;(statearr_17652[14] = inst_17625);
return statearr_17652;
})();var statearr_17653_17675 = state_17632__$1;(statearr_17653_17675[2] = inst_17626);
(statearr_17653_17675[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_17633 === 15))
{var inst_17622 = (state_17632[2]);var state_17632__$1 = state_17632;var statearr_17654_17676 = state_17632__$1;(statearr_17654_17676[2] = inst_17622);
(statearr_17654_17676[1] = 14);
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
});return ((function (switch__5780__auto__){
return (function() {
var state_machine__5781__auto__ = null;
var state_machine__5781__auto____0 = (function (){var statearr_17658 = (new Array(15));(statearr_17658[0] = state_machine__5781__auto__);
(statearr_17658[1] = 1);
return statearr_17658;
});
var state_machine__5781__auto____1 = (function (state_17632){while(true){
var ret_value__5782__auto__ = (function (){try{while(true){
var result__5783__auto__ = switch__5780__auto__.call(null,state_17632);if(cljs.core.keyword_identical_QMARK_.call(null,result__5783__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5783__auto__;
}
break;
}
}catch (e17659){if((e17659 instanceof Object))
{var ex__5784__auto__ = e17659;var statearr_17660_17677 = state_17632;(statearr_17660_17677[5] = ex__5784__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_17632);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17659;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5782__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__17678 = state_17632;
state_17632 = G__17678;
continue;
}
} else
{return ret_value__5782__auto__;
}
break;
}
});
state_machine__5781__auto__ = function(state_17632){
switch(arguments.length){
case 0:
return state_machine__5781__auto____0.call(this);
case 1:
return state_machine__5781__auto____1.call(this,state_17632);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5781__auto____0;
state_machine__5781__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5781__auto____1;
return state_machine__5781__auto__;
})()
;})(switch__5780__auto__))
})();var state__5852__auto__ = (function (){var statearr_17661 = f__5851__auto__.call(null);(statearr_17661[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5850__auto___17662);
return statearr_17661;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5852__auto__);
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