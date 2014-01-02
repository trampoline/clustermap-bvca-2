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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t30504 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30504 = (function (f,fn_handler,meta30505){
this.f = f;
this.fn_handler = fn_handler;
this.meta30505 = meta30505;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30504.cljs$lang$type = true;
cljs.core.async.t30504.cljs$lang$ctorStr = "cljs.core.async/t30504";
cljs.core.async.t30504.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30504");
});
cljs.core.async.t30504.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30504.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t30504.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t30504.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30506){var self__ = this;
var _30506__$1 = this;return self__.meta30505;
});
cljs.core.async.t30504.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30506,meta30505__$1){var self__ = this;
var _30506__$1 = this;return (new cljs.core.async.t30504(self__.f,self__.fn_handler,meta30505__$1));
});
cljs.core.async.__GT_t30504 = (function __GT_t30504(f__$1,fn_handler__$1,meta30505){return (new cljs.core.async.t30504(f__$1,fn_handler__$1,meta30505));
});
}
return (new cljs.core.async.t30504(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__30508 = buff;if(G__30508)
{var bit__3917__auto__ = null;if(cljs.core.truth_((function (){var or__3291__auto__ = bit__3917__auto__;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return G__30508.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__30508.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30508);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__30508);
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
{var val_30509 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_30509);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_30509);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4114__auto___30510 = n;var x_30511 = 0;while(true){
if((x_30511 < n__4114__auto___30510))
{(a[x_30511] = 0);
{
var G__30512 = (x_30511 + 1);
x_30511 = G__30512;
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
var G__30513 = (i + 1);
i = G__30513;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t30517 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30517 = (function (flag,alt_flag,meta30518){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta30518 = meta30518;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30517.cljs$lang$type = true;
cljs.core.async.t30517.cljs$lang$ctorStr = "cljs.core.async/t30517";
cljs.core.async.t30517.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30517");
});
cljs.core.async.t30517.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30517.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t30517.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t30517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30519){var self__ = this;
var _30519__$1 = this;return self__.meta30518;
});
cljs.core.async.t30517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30519,meta30518__$1){var self__ = this;
var _30519__$1 = this;return (new cljs.core.async.t30517(self__.flag,self__.alt_flag,meta30518__$1));
});
cljs.core.async.__GT_t30517 = (function __GT_t30517(flag__$1,alt_flag__$1,meta30518){return (new cljs.core.async.t30517(flag__$1,alt_flag__$1,meta30518));
});
}
return (new cljs.core.async.t30517(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t30523 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30523 = (function (cb,flag,alt_handler,meta30524){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta30524 = meta30524;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30523.cljs$lang$type = true;
cljs.core.async.t30523.cljs$lang$ctorStr = "cljs.core.async/t30523";
cljs.core.async.t30523.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30523");
});
cljs.core.async.t30523.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30523.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t30523.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t30523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30525){var self__ = this;
var _30525__$1 = this;return self__.meta30524;
});
cljs.core.async.t30523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30525,meta30524__$1){var self__ = this;
var _30525__$1 = this;return (new cljs.core.async.t30523(self__.cb,self__.flag,self__.alt_handler,meta30524__$1));
});
cljs.core.async.__GT_t30523 = (function __GT_t30523(cb__$1,flag__$1,alt_handler__$1,meta30524){return (new cljs.core.async.t30523(cb__$1,flag__$1,alt_handler__$1,meta30524));
});
}
return (new cljs.core.async.t30523(cb,flag,alt_handler,null));
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
return (function (p1__30526_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__30526_SHARP_,port], null));
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
var G__30527 = (i + 1);
i = G__30527;
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
var alts_BANG___delegate = function (ports,p__30528){var map__30530 = p__30528;var map__30530__$1 = ((cljs.core.seq_QMARK_.call(null,map__30530))?cljs.core.apply.call(null,cljs.core.hash_map,map__30530):map__30530);var opts = map__30530__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__30528 = null;if (arguments.length > 1) {
  p__30528 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__30528);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__30531){
var ports = cljs.core.first(arglist__30531);
var p__30528 = cljs.core.rest(arglist__30531);
return alts_BANG___delegate(ports,p__30528);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t30539 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30539 = (function (ch,f,map_LT_,meta30540){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30540 = meta30540;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30539.cljs$lang$type = true;
cljs.core.async.t30539.cljs$lang$ctorStr = "cljs.core.async/t30539";
cljs.core.async.t30539.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30539");
});
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t30542 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30542 = (function (fn1,_,meta30540,ch,f,map_LT_,meta30543){
this.fn1 = fn1;
this._ = _;
this.meta30540 = meta30540;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta30543 = meta30543;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30542.cljs$lang$type = true;
cljs.core.async.t30542.cljs$lang$ctorStr = "cljs.core.async/t30542";
cljs.core.async.t30542.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30542");
});
cljs.core.async.t30542.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t30542.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t30542.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t30542.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__30532_SHARP_){return f1.call(null,(((p1__30532_SHARP_ == null))?null:self__.f.call(null,p1__30532_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t30542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30544){var self__ = this;
var _30544__$1 = this;return self__.meta30543;
});
cljs.core.async.t30542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30544,meta30543__$1){var self__ = this;
var _30544__$1 = this;return (new cljs.core.async.t30542(self__.fn1,self__._,self__.meta30540,self__.ch,self__.f,self__.map_LT_,meta30543__$1));
});
cljs.core.async.__GT_t30542 = (function __GT_t30542(fn1__$1,___$2,meta30540__$1,ch__$2,f__$2,map_LT___$2,meta30543){return (new cljs.core.async.t30542(fn1__$1,___$2,meta30540__$1,ch__$2,f__$2,map_LT___$2,meta30543));
});
}
return (new cljs.core.async.t30542(fn1,___$1,self__.meta30540,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30539.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30539.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30541){var self__ = this;
var _30541__$1 = this;return self__.meta30540;
});
cljs.core.async.t30539.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30541,meta30540__$1){var self__ = this;
var _30541__$1 = this;return (new cljs.core.async.t30539(self__.ch,self__.f,self__.map_LT_,meta30540__$1));
});
cljs.core.async.__GT_t30539 = (function __GT_t30539(ch__$1,f__$1,map_LT___$1,meta30540){return (new cljs.core.async.t30539(ch__$1,f__$1,map_LT___$1,meta30540));
});
}
return (new cljs.core.async.t30539(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t30548 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30548 = (function (ch,f,map_GT_,meta30549){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta30549 = meta30549;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30548.cljs$lang$type = true;
cljs.core.async.t30548.cljs$lang$ctorStr = "cljs.core.async/t30548";
cljs.core.async.t30548.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30548");
});
cljs.core.async.t30548.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30548.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t30548.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30548.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30548.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30548.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30550){var self__ = this;
var _30550__$1 = this;return self__.meta30549;
});
cljs.core.async.t30548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30550,meta30549__$1){var self__ = this;
var _30550__$1 = this;return (new cljs.core.async.t30548(self__.ch,self__.f,self__.map_GT_,meta30549__$1));
});
cljs.core.async.__GT_t30548 = (function __GT_t30548(ch__$1,f__$1,map_GT___$1,meta30549){return (new cljs.core.async.t30548(ch__$1,f__$1,map_GT___$1,meta30549));
});
}
return (new cljs.core.async.t30548(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t30554 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t30554 = (function (ch,p,filter_GT_,meta30555){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta30555 = meta30555;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t30554.cljs$lang$type = true;
cljs.core.async.t30554.cljs$lang$ctorStr = "cljs.core.async/t30554";
cljs.core.async.t30554.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t30554");
});
cljs.core.async.t30554.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t30554.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t30554.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t30554.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t30554.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t30554.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t30554.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30556){var self__ = this;
var _30556__$1 = this;return self__.meta30555;
});
cljs.core.async.t30554.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30556,meta30555__$1){var self__ = this;
var _30556__$1 = this;return (new cljs.core.async.t30554(self__.ch,self__.p,self__.filter_GT_,meta30555__$1));
});
cljs.core.async.__GT_t30554 = (function __GT_t30554(ch__$1,p__$1,filter_GT___$1,meta30555){return (new cljs.core.async.t30554(ch__$1,p__$1,filter_GT___$1,meta30555));
});
}
return (new cljs.core.async.t30554(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___30639 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_30618){var state_val_30619 = (state_30618[1]);if((state_val_30619 === 1))
{var state_30618__$1 = state_30618;var statearr_30620_30640 = state_30618__$1;(statearr_30620_30640[2] = null);
(statearr_30620_30640[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30619 === 2))
{var state_30618__$1 = state_30618;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30618__$1,4,ch);
} else
{if((state_val_30619 === 3))
{var inst_30616 = (state_30618[2]);var state_30618__$1 = state_30618;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30618__$1,inst_30616);
} else
{if((state_val_30619 === 4))
{var inst_30600 = (state_30618[7]);var inst_30600__$1 = (state_30618[2]);var inst_30601 = (inst_30600__$1 == null);var state_30618__$1 = (function (){var statearr_30621 = state_30618;(statearr_30621[7] = inst_30600__$1);
return statearr_30621;
})();if(cljs.core.truth_(inst_30601))
{var statearr_30622_30641 = state_30618__$1;(statearr_30622_30641[1] = 5);
} else
{var statearr_30623_30642 = state_30618__$1;(statearr_30623_30642[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30619 === 5))
{var inst_30603 = cljs.core.async.close_BANG_.call(null,out);var state_30618__$1 = state_30618;var statearr_30624_30643 = state_30618__$1;(statearr_30624_30643[2] = inst_30603);
(statearr_30624_30643[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30619 === 6))
{var inst_30600 = (state_30618[7]);var inst_30605 = p.call(null,inst_30600);var state_30618__$1 = state_30618;if(cljs.core.truth_(inst_30605))
{var statearr_30625_30644 = state_30618__$1;(statearr_30625_30644[1] = 8);
} else
{var statearr_30626_30645 = state_30618__$1;(statearr_30626_30645[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30619 === 7))
{var inst_30614 = (state_30618[2]);var state_30618__$1 = state_30618;var statearr_30627_30646 = state_30618__$1;(statearr_30627_30646[2] = inst_30614);
(statearr_30627_30646[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30619 === 8))
{var inst_30600 = (state_30618[7]);var state_30618__$1 = state_30618;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30618__$1,11,out,inst_30600);
} else
{if((state_val_30619 === 9))
{var state_30618__$1 = state_30618;var statearr_30628_30647 = state_30618__$1;(statearr_30628_30647[2] = null);
(statearr_30628_30647[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30619 === 10))
{var inst_30611 = (state_30618[2]);var state_30618__$1 = (function (){var statearr_30629 = state_30618;(statearr_30629[8] = inst_30611);
return statearr_30629;
})();var statearr_30630_30648 = state_30618__$1;(statearr_30630_30648[2] = null);
(statearr_30630_30648[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30619 === 11))
{var inst_30608 = (state_30618[2]);var state_30618__$1 = state_30618;var statearr_30631_30649 = state_30618__$1;(statearr_30631_30649[2] = inst_30608);
(statearr_30631_30649[1] = 10);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_30635 = (new Array(9));(statearr_30635[0] = state_machine__5985__auto__);
(statearr_30635[1] = 1);
return statearr_30635;
});
var state_machine__5985__auto____1 = (function (state_30618){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_30618);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e30636){if((e30636 instanceof Object))
{var ex__5988__auto__ = e30636;var statearr_30637_30650 = state_30618;(statearr_30637_30650[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30618);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30636;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30651 = state_30618;
state_30618 = G__30651;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_30618){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_30618);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_30638 = f__6055__auto__.call(null);(statearr_30638[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___30639);
return statearr_30638;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__6054__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_30803){var state_val_30804 = (state_30803[1]);if((state_val_30804 === 1))
{var state_30803__$1 = state_30803;var statearr_30805_30842 = state_30803__$1;(statearr_30805_30842[2] = null);
(statearr_30805_30842[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 2))
{var state_30803__$1 = state_30803;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30803__$1,4,in$);
} else
{if((state_val_30804 === 3))
{var inst_30801 = (state_30803[2]);var state_30803__$1 = state_30803;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30803__$1,inst_30801);
} else
{if((state_val_30804 === 4))
{var inst_30749 = (state_30803[7]);var inst_30749__$1 = (state_30803[2]);var inst_30750 = (inst_30749__$1 == null);var state_30803__$1 = (function (){var statearr_30806 = state_30803;(statearr_30806[7] = inst_30749__$1);
return statearr_30806;
})();if(cljs.core.truth_(inst_30750))
{var statearr_30807_30843 = state_30803__$1;(statearr_30807_30843[1] = 5);
} else
{var statearr_30808_30844 = state_30803__$1;(statearr_30808_30844[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 5))
{var inst_30752 = cljs.core.async.close_BANG_.call(null,out);var state_30803__$1 = state_30803;var statearr_30809_30845 = state_30803__$1;(statearr_30809_30845[2] = inst_30752);
(statearr_30809_30845[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 6))
{var inst_30749 = (state_30803[7]);var inst_30754 = f.call(null,inst_30749);var inst_30759 = cljs.core.seq.call(null,inst_30754);var inst_30760 = inst_30759;var inst_30761 = null;var inst_30762 = 0;var inst_30763 = 0;var state_30803__$1 = (function (){var statearr_30810 = state_30803;(statearr_30810[8] = inst_30761);
(statearr_30810[9] = inst_30762);
(statearr_30810[10] = inst_30763);
(statearr_30810[11] = inst_30760);
return statearr_30810;
})();var statearr_30811_30846 = state_30803__$1;(statearr_30811_30846[2] = null);
(statearr_30811_30846[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 7))
{var inst_30799 = (state_30803[2]);var state_30803__$1 = state_30803;var statearr_30812_30847 = state_30803__$1;(statearr_30812_30847[2] = inst_30799);
(statearr_30812_30847[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 8))
{var inst_30762 = (state_30803[9]);var inst_30763 = (state_30803[10]);var inst_30765 = (inst_30763 < inst_30762);var inst_30766 = inst_30765;var state_30803__$1 = state_30803;if(cljs.core.truth_(inst_30766))
{var statearr_30813_30848 = state_30803__$1;(statearr_30813_30848[1] = 10);
} else
{var statearr_30814_30849 = state_30803__$1;(statearr_30814_30849[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 9))
{var inst_30796 = (state_30803[2]);var state_30803__$1 = (function (){var statearr_30815 = state_30803;(statearr_30815[12] = inst_30796);
return statearr_30815;
})();var statearr_30816_30850 = state_30803__$1;(statearr_30816_30850[2] = null);
(statearr_30816_30850[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 10))
{var inst_30761 = (state_30803[8]);var inst_30763 = (state_30803[10]);var inst_30768 = cljs.core._nth.call(null,inst_30761,inst_30763);var state_30803__$1 = state_30803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30803__$1,13,out,inst_30768);
} else
{if((state_val_30804 === 11))
{var inst_30760 = (state_30803[11]);var inst_30774 = (state_30803[13]);var inst_30774__$1 = cljs.core.seq.call(null,inst_30760);var state_30803__$1 = (function (){var statearr_30820 = state_30803;(statearr_30820[13] = inst_30774__$1);
return statearr_30820;
})();if(inst_30774__$1)
{var statearr_30821_30851 = state_30803__$1;(statearr_30821_30851[1] = 14);
} else
{var statearr_30822_30852 = state_30803__$1;(statearr_30822_30852[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 12))
{var inst_30794 = (state_30803[2]);var state_30803__$1 = state_30803;var statearr_30823_30853 = state_30803__$1;(statearr_30823_30853[2] = inst_30794);
(statearr_30823_30853[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 13))
{var inst_30761 = (state_30803[8]);var inst_30762 = (state_30803[9]);var inst_30763 = (state_30803[10]);var inst_30760 = (state_30803[11]);var inst_30770 = (state_30803[2]);var inst_30771 = (inst_30763 + 1);var tmp30817 = inst_30761;var tmp30818 = inst_30762;var tmp30819 = inst_30760;var inst_30760__$1 = tmp30819;var inst_30761__$1 = tmp30817;var inst_30762__$1 = tmp30818;var inst_30763__$1 = inst_30771;var state_30803__$1 = (function (){var statearr_30824 = state_30803;(statearr_30824[8] = inst_30761__$1);
(statearr_30824[14] = inst_30770);
(statearr_30824[9] = inst_30762__$1);
(statearr_30824[10] = inst_30763__$1);
(statearr_30824[11] = inst_30760__$1);
return statearr_30824;
})();var statearr_30825_30854 = state_30803__$1;(statearr_30825_30854[2] = null);
(statearr_30825_30854[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 14))
{var inst_30774 = (state_30803[13]);var inst_30776 = cljs.core.chunked_seq_QMARK_.call(null,inst_30774);var state_30803__$1 = state_30803;if(inst_30776)
{var statearr_30826_30855 = state_30803__$1;(statearr_30826_30855[1] = 17);
} else
{var statearr_30827_30856 = state_30803__$1;(statearr_30827_30856[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 15))
{var state_30803__$1 = state_30803;var statearr_30828_30857 = state_30803__$1;(statearr_30828_30857[2] = null);
(statearr_30828_30857[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 16))
{var inst_30792 = (state_30803[2]);var state_30803__$1 = state_30803;var statearr_30829_30858 = state_30803__$1;(statearr_30829_30858[2] = inst_30792);
(statearr_30829_30858[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 17))
{var inst_30774 = (state_30803[13]);var inst_30778 = cljs.core.chunk_first.call(null,inst_30774);var inst_30779 = cljs.core.chunk_rest.call(null,inst_30774);var inst_30780 = cljs.core.count.call(null,inst_30778);var inst_30760 = inst_30779;var inst_30761 = inst_30778;var inst_30762 = inst_30780;var inst_30763 = 0;var state_30803__$1 = (function (){var statearr_30830 = state_30803;(statearr_30830[8] = inst_30761);
(statearr_30830[9] = inst_30762);
(statearr_30830[10] = inst_30763);
(statearr_30830[11] = inst_30760);
return statearr_30830;
})();var statearr_30831_30859 = state_30803__$1;(statearr_30831_30859[2] = null);
(statearr_30831_30859[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 18))
{var inst_30774 = (state_30803[13]);var inst_30783 = cljs.core.first.call(null,inst_30774);var state_30803__$1 = state_30803;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30803__$1,20,out,inst_30783);
} else
{if((state_val_30804 === 19))
{var inst_30789 = (state_30803[2]);var state_30803__$1 = state_30803;var statearr_30832_30860 = state_30803__$1;(statearr_30832_30860[2] = inst_30789);
(statearr_30832_30860[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30804 === 20))
{var inst_30774 = (state_30803[13]);var inst_30785 = (state_30803[2]);var inst_30786 = cljs.core.next.call(null,inst_30774);var inst_30760 = inst_30786;var inst_30761 = null;var inst_30762 = 0;var inst_30763 = 0;var state_30803__$1 = (function (){var statearr_30833 = state_30803;(statearr_30833[8] = inst_30761);
(statearr_30833[9] = inst_30762);
(statearr_30833[10] = inst_30763);
(statearr_30833[11] = inst_30760);
(statearr_30833[15] = inst_30785);
return statearr_30833;
})();var statearr_30834_30861 = state_30803__$1;(statearr_30834_30861[2] = null);
(statearr_30834_30861[1] = 8);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_30838 = (new Array(16));(statearr_30838[0] = state_machine__5985__auto__);
(statearr_30838[1] = 1);
return statearr_30838;
});
var state_machine__5985__auto____1 = (function (state_30803){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_30803);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e30839){if((e30839 instanceof Object))
{var ex__5988__auto__ = e30839;var statearr_30840_30862 = state_30803;(statearr_30840_30862[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30803);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30839;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30863 = state_30803;
state_30803 = G__30863;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_30803){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_30803);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_30841 = f__6055__auto__.call(null);(statearr_30841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto__);
return statearr_30841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
}));
return c__6054__auto__;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__6054__auto___30944 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_30923){var state_val_30924 = (state_30923[1]);if((state_val_30924 === 1))
{var state_30923__$1 = state_30923;var statearr_30925_30945 = state_30923__$1;(statearr_30925_30945[2] = null);
(statearr_30925_30945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30924 === 2))
{var state_30923__$1 = state_30923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30923__$1,4,from);
} else
{if((state_val_30924 === 3))
{var inst_30921 = (state_30923[2]);var state_30923__$1 = state_30923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30923__$1,inst_30921);
} else
{if((state_val_30924 === 4))
{var inst_30906 = (state_30923[7]);var inst_30906__$1 = (state_30923[2]);var inst_30907 = (inst_30906__$1 == null);var state_30923__$1 = (function (){var statearr_30926 = state_30923;(statearr_30926[7] = inst_30906__$1);
return statearr_30926;
})();if(cljs.core.truth_(inst_30907))
{var statearr_30927_30946 = state_30923__$1;(statearr_30927_30946[1] = 5);
} else
{var statearr_30928_30947 = state_30923__$1;(statearr_30928_30947[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30924 === 5))
{var state_30923__$1 = state_30923;if(cljs.core.truth_(close_QMARK_))
{var statearr_30929_30948 = state_30923__$1;(statearr_30929_30948[1] = 8);
} else
{var statearr_30930_30949 = state_30923__$1;(statearr_30930_30949[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30924 === 6))
{var inst_30906 = (state_30923[7]);var state_30923__$1 = state_30923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_30923__$1,11,to,inst_30906);
} else
{if((state_val_30924 === 7))
{var inst_30919 = (state_30923[2]);var state_30923__$1 = state_30923;var statearr_30931_30950 = state_30923__$1;(statearr_30931_30950[2] = inst_30919);
(statearr_30931_30950[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30924 === 8))
{var inst_30910 = cljs.core.async.close_BANG_.call(null,to);var state_30923__$1 = state_30923;var statearr_30932_30951 = state_30923__$1;(statearr_30932_30951[2] = inst_30910);
(statearr_30932_30951[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30924 === 9))
{var state_30923__$1 = state_30923;var statearr_30933_30952 = state_30923__$1;(statearr_30933_30952[2] = null);
(statearr_30933_30952[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30924 === 10))
{var inst_30913 = (state_30923[2]);var state_30923__$1 = state_30923;var statearr_30934_30953 = state_30923__$1;(statearr_30934_30953[2] = inst_30913);
(statearr_30934_30953[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_30924 === 11))
{var inst_30916 = (state_30923[2]);var state_30923__$1 = (function (){var statearr_30935 = state_30923;(statearr_30935[8] = inst_30916);
return statearr_30935;
})();var statearr_30936_30954 = state_30923__$1;(statearr_30936_30954[2] = null);
(statearr_30936_30954[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_30940 = (new Array(9));(statearr_30940[0] = state_machine__5985__auto__);
(statearr_30940[1] = 1);
return statearr_30940;
});
var state_machine__5985__auto____1 = (function (state_30923){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_30923);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e30941){if((e30941 instanceof Object))
{var ex__5988__auto__ = e30941;var statearr_30942_30955 = state_30923;(statearr_30942_30955[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30923);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e30941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__30956 = state_30923;
state_30923 = G__30956;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_30923){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_30923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_30943 = f__6055__auto__.call(null);(statearr_30943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___30944);
return statearr_30943;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__6054__auto___31043 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_31021){var state_val_31022 = (state_31021[1]);if((state_val_31022 === 1))
{var state_31021__$1 = state_31021;var statearr_31023_31044 = state_31021__$1;(statearr_31023_31044[2] = null);
(statearr_31023_31044[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31022 === 2))
{var state_31021__$1 = state_31021;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31021__$1,4,ch);
} else
{if((state_val_31022 === 3))
{var inst_31019 = (state_31021[2]);var state_31021__$1 = state_31021;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31021__$1,inst_31019);
} else
{if((state_val_31022 === 4))
{var inst_31002 = (state_31021[7]);var inst_31002__$1 = (state_31021[2]);var inst_31003 = (inst_31002__$1 == null);var state_31021__$1 = (function (){var statearr_31024 = state_31021;(statearr_31024[7] = inst_31002__$1);
return statearr_31024;
})();if(cljs.core.truth_(inst_31003))
{var statearr_31025_31045 = state_31021__$1;(statearr_31025_31045[1] = 5);
} else
{var statearr_31026_31046 = state_31021__$1;(statearr_31026_31046[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31022 === 5))
{var inst_31005 = cljs.core.async.close_BANG_.call(null,tc);var inst_31006 = cljs.core.async.close_BANG_.call(null,fc);var state_31021__$1 = (function (){var statearr_31027 = state_31021;(statearr_31027[8] = inst_31005);
return statearr_31027;
})();var statearr_31028_31047 = state_31021__$1;(statearr_31028_31047[2] = inst_31006);
(statearr_31028_31047[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31022 === 6))
{var inst_31002 = (state_31021[7]);var inst_31008 = p.call(null,inst_31002);var state_31021__$1 = state_31021;if(cljs.core.truth_(inst_31008))
{var statearr_31029_31048 = state_31021__$1;(statearr_31029_31048[1] = 9);
} else
{var statearr_31030_31049 = state_31021__$1;(statearr_31030_31049[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31022 === 7))
{var inst_31017 = (state_31021[2]);var state_31021__$1 = state_31021;var statearr_31031_31050 = state_31021__$1;(statearr_31031_31050[2] = inst_31017);
(statearr_31031_31050[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31022 === 8))
{var inst_31014 = (state_31021[2]);var state_31021__$1 = (function (){var statearr_31032 = state_31021;(statearr_31032[9] = inst_31014);
return statearr_31032;
})();var statearr_31033_31051 = state_31021__$1;(statearr_31033_31051[2] = null);
(statearr_31033_31051[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31022 === 9))
{var state_31021__$1 = state_31021;var statearr_31034_31052 = state_31021__$1;(statearr_31034_31052[2] = tc);
(statearr_31034_31052[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31022 === 10))
{var state_31021__$1 = state_31021;var statearr_31035_31053 = state_31021__$1;(statearr_31035_31053[2] = fc);
(statearr_31035_31053[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31022 === 11))
{var inst_31002 = (state_31021[7]);var inst_31012 = (state_31021[2]);var state_31021__$1 = state_31021;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31021__$1,8,inst_31012,inst_31002);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_31039 = (new Array(10));(statearr_31039[0] = state_machine__5985__auto__);
(statearr_31039[1] = 1);
return statearr_31039;
});
var state_machine__5985__auto____1 = (function (state_31021){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_31021);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e31040){if((e31040 instanceof Object))
{var ex__5988__auto__ = e31040;var statearr_31041_31054 = state_31021;(statearr_31041_31054[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31021);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31040;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31055 = state_31021;
state_31021 = G__31055;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_31021){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_31021);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_31042 = f__6055__auto__.call(null);(statearr_31042[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___31043);
return statearr_31042;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__6054__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_31102){var state_val_31103 = (state_31102[1]);if((state_val_31103 === 7))
{var inst_31098 = (state_31102[2]);var state_31102__$1 = state_31102;var statearr_31104_31120 = state_31102__$1;(statearr_31104_31120[2] = inst_31098);
(statearr_31104_31120[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31103 === 6))
{var inst_31091 = (state_31102[7]);var inst_31088 = (state_31102[8]);var inst_31095 = f.call(null,inst_31088,inst_31091);var inst_31088__$1 = inst_31095;var state_31102__$1 = (function (){var statearr_31105 = state_31102;(statearr_31105[8] = inst_31088__$1);
return statearr_31105;
})();var statearr_31106_31121 = state_31102__$1;(statearr_31106_31121[2] = null);
(statearr_31106_31121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31103 === 5))
{var inst_31088 = (state_31102[8]);var state_31102__$1 = state_31102;var statearr_31107_31122 = state_31102__$1;(statearr_31107_31122[2] = inst_31088);
(statearr_31107_31122[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31103 === 4))
{var inst_31091 = (state_31102[7]);var inst_31091__$1 = (state_31102[2]);var inst_31092 = (inst_31091__$1 == null);var state_31102__$1 = (function (){var statearr_31108 = state_31102;(statearr_31108[7] = inst_31091__$1);
return statearr_31108;
})();if(cljs.core.truth_(inst_31092))
{var statearr_31109_31123 = state_31102__$1;(statearr_31109_31123[1] = 5);
} else
{var statearr_31110_31124 = state_31102__$1;(statearr_31110_31124[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31103 === 3))
{var inst_31100 = (state_31102[2]);var state_31102__$1 = state_31102;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31102__$1,inst_31100);
} else
{if((state_val_31103 === 2))
{var state_31102__$1 = state_31102;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31102__$1,4,ch);
} else
{if((state_val_31103 === 1))
{var inst_31088 = init;var state_31102__$1 = (function (){var statearr_31111 = state_31102;(statearr_31111[8] = inst_31088);
return statearr_31111;
})();var statearr_31112_31125 = state_31102__$1;(statearr_31112_31125[2] = null);
(statearr_31112_31125[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_31116 = (new Array(9));(statearr_31116[0] = state_machine__5985__auto__);
(statearr_31116[1] = 1);
return statearr_31116;
});
var state_machine__5985__auto____1 = (function (state_31102){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_31102);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e31117){if((e31117 instanceof Object))
{var ex__5988__auto__ = e31117;var statearr_31118_31126 = state_31102;(statearr_31118_31126[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31102);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31127 = state_31102;
state_31102 = G__31127;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_31102){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_31102);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_31119 = f__6055__auto__.call(null);(statearr_31119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto__);
return statearr_31119;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
}));
return c__6054__auto__;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__6054__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_31189){var state_val_31190 = (state_31189[1]);if((state_val_31190 === 1))
{var inst_31169 = cljs.core.seq.call(null,coll);var inst_31170 = inst_31169;var state_31189__$1 = (function (){var statearr_31191 = state_31189;(statearr_31191[7] = inst_31170);
return statearr_31191;
})();var statearr_31192_31210 = state_31189__$1;(statearr_31192_31210[2] = null);
(statearr_31192_31210[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31190 === 2))
{var inst_31170 = (state_31189[7]);var state_31189__$1 = state_31189;if(cljs.core.truth_(inst_31170))
{var statearr_31193_31211 = state_31189__$1;(statearr_31193_31211[1] = 4);
} else
{var statearr_31194_31212 = state_31189__$1;(statearr_31194_31212[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31190 === 3))
{var inst_31187 = (state_31189[2]);var state_31189__$1 = state_31189;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31189__$1,inst_31187);
} else
{if((state_val_31190 === 4))
{var inst_31170 = (state_31189[7]);var inst_31173 = cljs.core.first.call(null,inst_31170);var state_31189__$1 = state_31189;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31189__$1,7,ch,inst_31173);
} else
{if((state_val_31190 === 5))
{var state_31189__$1 = state_31189;if(cljs.core.truth_(close_QMARK_))
{var statearr_31195_31213 = state_31189__$1;(statearr_31195_31213[1] = 8);
} else
{var statearr_31196_31214 = state_31189__$1;(statearr_31196_31214[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31190 === 6))
{var inst_31185 = (state_31189[2]);var state_31189__$1 = state_31189;var statearr_31197_31215 = state_31189__$1;(statearr_31197_31215[2] = inst_31185);
(statearr_31197_31215[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31190 === 7))
{var inst_31170 = (state_31189[7]);var inst_31175 = (state_31189[2]);var inst_31176 = cljs.core.next.call(null,inst_31170);var inst_31170__$1 = inst_31176;var state_31189__$1 = (function (){var statearr_31198 = state_31189;(statearr_31198[7] = inst_31170__$1);
(statearr_31198[8] = inst_31175);
return statearr_31198;
})();var statearr_31199_31216 = state_31189__$1;(statearr_31199_31216[2] = null);
(statearr_31199_31216[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31190 === 8))
{var inst_31180 = cljs.core.async.close_BANG_.call(null,ch);var state_31189__$1 = state_31189;var statearr_31200_31217 = state_31189__$1;(statearr_31200_31217[2] = inst_31180);
(statearr_31200_31217[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31190 === 9))
{var state_31189__$1 = state_31189;var statearr_31201_31218 = state_31189__$1;(statearr_31201_31218[2] = null);
(statearr_31201_31218[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31190 === 10))
{var inst_31183 = (state_31189[2]);var state_31189__$1 = state_31189;var statearr_31202_31219 = state_31189__$1;(statearr_31202_31219[2] = inst_31183);
(statearr_31202_31219[1] = 6);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_31206 = (new Array(9));(statearr_31206[0] = state_machine__5985__auto__);
(statearr_31206[1] = 1);
return statearr_31206;
});
var state_machine__5985__auto____1 = (function (state_31189){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_31189);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e31207){if((e31207 instanceof Object))
{var ex__5988__auto__ = e31207;var statearr_31208_31220 = state_31189;(statearr_31208_31220[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31189);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31207;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31221 = state_31189;
state_31189 = G__31221;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_31189){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_31189);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_31209 = f__6055__auto__.call(null);(statearr_31209[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto__);
return statearr_31209;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
}));
return c__6054__auto__;
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
cljs.core.async.Mux = (function (){var obj31223 = {};return obj31223;
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
cljs.core.async.Mult = (function (){var obj31225 = {};return obj31225;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t31440 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31440 = (function (cs,ch,mult,meta31441){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta31441 = meta31441;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31440.cljs$lang$type = true;
cljs.core.async.t31440.cljs$lang$ctorStr = "cljs.core.async/t31440";
cljs.core.async.t31440.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31440");
});})(cs))
;
cljs.core.async.t31440.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t31440.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t31440.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t31440.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t31440.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31440.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t31440.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_31442){var self__ = this;
var _31442__$1 = this;return self__.meta31441;
});})(cs))
;
cljs.core.async.t31440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_31442,meta31441__$1){var self__ = this;
var _31442__$1 = this;return (new cljs.core.async.t31440(self__.cs,self__.ch,self__.mult,meta31441__$1));
});})(cs))
;
cljs.core.async.__GT_t31440 = ((function (cs){
return (function __GT_t31440(cs__$1,ch__$1,mult__$1,meta31441){return (new cljs.core.async.t31440(cs__$1,ch__$1,mult__$1,meta31441));
});})(cs))
;
}
return (new cljs.core.async.t31440(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__6054__auto___31654 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_31572){var state_val_31573 = (state_31572[1]);if((state_val_31573 === 32))
{var inst_31521 = (state_31572[7]);var inst_31445 = (state_31572[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31572,31,Object,null,30);var inst_31528 = cljs.core.async.put_BANG_.call(null,inst_31521,inst_31445,done);var state_31572__$1 = state_31572;var statearr_31574_31655 = state_31572__$1;(statearr_31574_31655[2] = inst_31528);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31572__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 1))
{var state_31572__$1 = state_31572;var statearr_31575_31656 = state_31572__$1;(statearr_31575_31656[2] = null);
(statearr_31575_31656[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 33))
{var inst_31534 = (state_31572[9]);var inst_31536 = cljs.core.chunked_seq_QMARK_.call(null,inst_31534);var state_31572__$1 = state_31572;if(inst_31536)
{var statearr_31576_31657 = state_31572__$1;(statearr_31576_31657[1] = 36);
} else
{var statearr_31577_31658 = state_31572__$1;(statearr_31577_31658[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 2))
{var state_31572__$1 = state_31572;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31572__$1,4,ch);
} else
{if((state_val_31573 === 34))
{var state_31572__$1 = state_31572;var statearr_31578_31659 = state_31572__$1;(statearr_31578_31659[2] = null);
(statearr_31578_31659[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 3))
{var inst_31570 = (state_31572[2]);var state_31572__$1 = state_31572;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31572__$1,inst_31570);
} else
{if((state_val_31573 === 35))
{var inst_31559 = (state_31572[2]);var state_31572__$1 = state_31572;var statearr_31579_31660 = state_31572__$1;(statearr_31579_31660[2] = inst_31559);
(statearr_31579_31660[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 4))
{var inst_31445 = (state_31572[8]);var inst_31445__$1 = (state_31572[2]);var inst_31446 = (inst_31445__$1 == null);var state_31572__$1 = (function (){var statearr_31580 = state_31572;(statearr_31580[8] = inst_31445__$1);
return statearr_31580;
})();if(cljs.core.truth_(inst_31446))
{var statearr_31581_31661 = state_31572__$1;(statearr_31581_31661[1] = 5);
} else
{var statearr_31582_31662 = state_31572__$1;(statearr_31582_31662[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 36))
{var inst_31534 = (state_31572[9]);var inst_31538 = cljs.core.chunk_first.call(null,inst_31534);var inst_31539 = cljs.core.chunk_rest.call(null,inst_31534);var inst_31540 = cljs.core.count.call(null,inst_31538);var inst_31513 = inst_31539;var inst_31514 = inst_31538;var inst_31515 = inst_31540;var inst_31516 = 0;var state_31572__$1 = (function (){var statearr_31583 = state_31572;(statearr_31583[10] = inst_31514);
(statearr_31583[11] = inst_31513);
(statearr_31583[12] = inst_31516);
(statearr_31583[13] = inst_31515);
return statearr_31583;
})();var statearr_31584_31663 = state_31572__$1;(statearr_31584_31663[2] = null);
(statearr_31584_31663[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 5))
{var inst_31452 = cljs.core.deref.call(null,cs);var inst_31453 = cljs.core.seq.call(null,inst_31452);var inst_31454 = inst_31453;var inst_31455 = null;var inst_31456 = 0;var inst_31457 = 0;var state_31572__$1 = (function (){var statearr_31585 = state_31572;(statearr_31585[14] = inst_31454);
(statearr_31585[15] = inst_31455);
(statearr_31585[16] = inst_31456);
(statearr_31585[17] = inst_31457);
return statearr_31585;
})();var statearr_31586_31664 = state_31572__$1;(statearr_31586_31664[2] = null);
(statearr_31586_31664[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 37))
{var inst_31534 = (state_31572[9]);var inst_31543 = cljs.core.first.call(null,inst_31534);var state_31572__$1 = (function (){var statearr_31587 = state_31572;(statearr_31587[18] = inst_31543);
return statearr_31587;
})();var statearr_31588_31665 = state_31572__$1;(statearr_31588_31665[2] = null);
(statearr_31588_31665[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 6))
{var inst_31504 = cljs.core.deref.call(null,cs);var inst_31505 = cljs.core.keys.call(null,inst_31504);var inst_31506 = cljs.core.count.call(null,inst_31505);var inst_31507 = cljs.core.reset_BANG_.call(null,dctr,inst_31506);var inst_31512 = cljs.core.seq.call(null,inst_31505);var inst_31513 = inst_31512;var inst_31514 = null;var inst_31515 = 0;var inst_31516 = 0;var state_31572__$1 = (function (){var statearr_31589 = state_31572;(statearr_31589[19] = inst_31507);
(statearr_31589[10] = inst_31514);
(statearr_31589[11] = inst_31513);
(statearr_31589[12] = inst_31516);
(statearr_31589[13] = inst_31515);
return statearr_31589;
})();var statearr_31590_31666 = state_31572__$1;(statearr_31590_31666[2] = null);
(statearr_31590_31666[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 38))
{var inst_31556 = (state_31572[2]);var state_31572__$1 = state_31572;var statearr_31591_31667 = state_31572__$1;(statearr_31591_31667[2] = inst_31556);
(statearr_31591_31667[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 7))
{var inst_31568 = (state_31572[2]);var state_31572__$1 = state_31572;var statearr_31592_31668 = state_31572__$1;(statearr_31592_31668[2] = inst_31568);
(statearr_31592_31668[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 39))
{var inst_31534 = (state_31572[9]);var inst_31552 = (state_31572[2]);var inst_31553 = cljs.core.next.call(null,inst_31534);var inst_31513 = inst_31553;var inst_31514 = null;var inst_31515 = 0;var inst_31516 = 0;var state_31572__$1 = (function (){var statearr_31593 = state_31572;(statearr_31593[10] = inst_31514);
(statearr_31593[11] = inst_31513);
(statearr_31593[12] = inst_31516);
(statearr_31593[13] = inst_31515);
(statearr_31593[20] = inst_31552);
return statearr_31593;
})();var statearr_31594_31669 = state_31572__$1;(statearr_31594_31669[2] = null);
(statearr_31594_31669[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 8))
{var inst_31456 = (state_31572[16]);var inst_31457 = (state_31572[17]);var inst_31459 = (inst_31457 < inst_31456);var inst_31460 = inst_31459;var state_31572__$1 = state_31572;if(cljs.core.truth_(inst_31460))
{var statearr_31595_31670 = state_31572__$1;(statearr_31595_31670[1] = 10);
} else
{var statearr_31596_31671 = state_31572__$1;(statearr_31596_31671[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 40))
{var inst_31543 = (state_31572[18]);var inst_31544 = (state_31572[2]);var inst_31545 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31546 = cljs.core.async.untap_STAR_.call(null,m,inst_31543);var state_31572__$1 = (function (){var statearr_31597 = state_31572;(statearr_31597[21] = inst_31544);
(statearr_31597[22] = inst_31545);
return statearr_31597;
})();var statearr_31598_31672 = state_31572__$1;(statearr_31598_31672[2] = inst_31546);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31572__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 9))
{var inst_31502 = (state_31572[2]);var state_31572__$1 = state_31572;var statearr_31599_31673 = state_31572__$1;(statearr_31599_31673[2] = inst_31502);
(statearr_31599_31673[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 41))
{var inst_31445 = (state_31572[8]);var inst_31543 = (state_31572[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_31572,40,Object,null,39);var inst_31550 = cljs.core.async.put_BANG_.call(null,inst_31543,inst_31445,done);var state_31572__$1 = state_31572;var statearr_31600_31674 = state_31572__$1;(statearr_31600_31674[2] = inst_31550);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31572__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 10))
{var inst_31455 = (state_31572[15]);var inst_31457 = (state_31572[17]);var inst_31463 = cljs.core._nth.call(null,inst_31455,inst_31457);var inst_31464 = cljs.core.nth.call(null,inst_31463,0,null);var inst_31465 = cljs.core.nth.call(null,inst_31463,1,null);var state_31572__$1 = (function (){var statearr_31601 = state_31572;(statearr_31601[23] = inst_31464);
return statearr_31601;
})();if(cljs.core.truth_(inst_31465))
{var statearr_31602_31675 = state_31572__$1;(statearr_31602_31675[1] = 13);
} else
{var statearr_31603_31676 = state_31572__$1;(statearr_31603_31676[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 42))
{var inst_31565 = (state_31572[2]);var state_31572__$1 = (function (){var statearr_31604 = state_31572;(statearr_31604[24] = inst_31565);
return statearr_31604;
})();var statearr_31605_31677 = state_31572__$1;(statearr_31605_31677[2] = null);
(statearr_31605_31677[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 11))
{var inst_31454 = (state_31572[14]);var inst_31474 = (state_31572[25]);var inst_31474__$1 = cljs.core.seq.call(null,inst_31454);var state_31572__$1 = (function (){var statearr_31606 = state_31572;(statearr_31606[25] = inst_31474__$1);
return statearr_31606;
})();if(inst_31474__$1)
{var statearr_31607_31678 = state_31572__$1;(statearr_31607_31678[1] = 16);
} else
{var statearr_31608_31679 = state_31572__$1;(statearr_31608_31679[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 12))
{var inst_31500 = (state_31572[2]);var state_31572__$1 = state_31572;var statearr_31609_31680 = state_31572__$1;(statearr_31609_31680[2] = inst_31500);
(statearr_31609_31680[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 13))
{var inst_31464 = (state_31572[23]);var inst_31467 = cljs.core.async.close_BANG_.call(null,inst_31464);var state_31572__$1 = state_31572;var statearr_31613_31681 = state_31572__$1;(statearr_31613_31681[2] = inst_31467);
(statearr_31613_31681[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 14))
{var state_31572__$1 = state_31572;var statearr_31614_31682 = state_31572__$1;(statearr_31614_31682[2] = null);
(statearr_31614_31682[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 15))
{var inst_31454 = (state_31572[14]);var inst_31455 = (state_31572[15]);var inst_31456 = (state_31572[16]);var inst_31457 = (state_31572[17]);var inst_31470 = (state_31572[2]);var inst_31471 = (inst_31457 + 1);var tmp31610 = inst_31454;var tmp31611 = inst_31455;var tmp31612 = inst_31456;var inst_31454__$1 = tmp31610;var inst_31455__$1 = tmp31611;var inst_31456__$1 = tmp31612;var inst_31457__$1 = inst_31471;var state_31572__$1 = (function (){var statearr_31615 = state_31572;(statearr_31615[14] = inst_31454__$1);
(statearr_31615[15] = inst_31455__$1);
(statearr_31615[16] = inst_31456__$1);
(statearr_31615[17] = inst_31457__$1);
(statearr_31615[26] = inst_31470);
return statearr_31615;
})();var statearr_31616_31683 = state_31572__$1;(statearr_31616_31683[2] = null);
(statearr_31616_31683[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 16))
{var inst_31474 = (state_31572[25]);var inst_31476 = cljs.core.chunked_seq_QMARK_.call(null,inst_31474);var state_31572__$1 = state_31572;if(inst_31476)
{var statearr_31617_31684 = state_31572__$1;(statearr_31617_31684[1] = 19);
} else
{var statearr_31618_31685 = state_31572__$1;(statearr_31618_31685[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 17))
{var state_31572__$1 = state_31572;var statearr_31619_31686 = state_31572__$1;(statearr_31619_31686[2] = null);
(statearr_31619_31686[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 18))
{var inst_31498 = (state_31572[2]);var state_31572__$1 = state_31572;var statearr_31620_31687 = state_31572__$1;(statearr_31620_31687[2] = inst_31498);
(statearr_31620_31687[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 19))
{var inst_31474 = (state_31572[25]);var inst_31478 = cljs.core.chunk_first.call(null,inst_31474);var inst_31479 = cljs.core.chunk_rest.call(null,inst_31474);var inst_31480 = cljs.core.count.call(null,inst_31478);var inst_31454 = inst_31479;var inst_31455 = inst_31478;var inst_31456 = inst_31480;var inst_31457 = 0;var state_31572__$1 = (function (){var statearr_31621 = state_31572;(statearr_31621[14] = inst_31454);
(statearr_31621[15] = inst_31455);
(statearr_31621[16] = inst_31456);
(statearr_31621[17] = inst_31457);
return statearr_31621;
})();var statearr_31622_31688 = state_31572__$1;(statearr_31622_31688[2] = null);
(statearr_31622_31688[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 20))
{var inst_31474 = (state_31572[25]);var inst_31484 = cljs.core.first.call(null,inst_31474);var inst_31485 = cljs.core.nth.call(null,inst_31484,0,null);var inst_31486 = cljs.core.nth.call(null,inst_31484,1,null);var state_31572__$1 = (function (){var statearr_31623 = state_31572;(statearr_31623[27] = inst_31485);
return statearr_31623;
})();if(cljs.core.truth_(inst_31486))
{var statearr_31624_31689 = state_31572__$1;(statearr_31624_31689[1] = 22);
} else
{var statearr_31625_31690 = state_31572__$1;(statearr_31625_31690[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 21))
{var inst_31495 = (state_31572[2]);var state_31572__$1 = state_31572;var statearr_31626_31691 = state_31572__$1;(statearr_31626_31691[2] = inst_31495);
(statearr_31626_31691[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 22))
{var inst_31485 = (state_31572[27]);var inst_31488 = cljs.core.async.close_BANG_.call(null,inst_31485);var state_31572__$1 = state_31572;var statearr_31627_31692 = state_31572__$1;(statearr_31627_31692[2] = inst_31488);
(statearr_31627_31692[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 23))
{var state_31572__$1 = state_31572;var statearr_31628_31693 = state_31572__$1;(statearr_31628_31693[2] = null);
(statearr_31628_31693[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 24))
{var inst_31474 = (state_31572[25]);var inst_31491 = (state_31572[2]);var inst_31492 = cljs.core.next.call(null,inst_31474);var inst_31454 = inst_31492;var inst_31455 = null;var inst_31456 = 0;var inst_31457 = 0;var state_31572__$1 = (function (){var statearr_31629 = state_31572;(statearr_31629[28] = inst_31491);
(statearr_31629[14] = inst_31454);
(statearr_31629[15] = inst_31455);
(statearr_31629[16] = inst_31456);
(statearr_31629[17] = inst_31457);
return statearr_31629;
})();var statearr_31630_31694 = state_31572__$1;(statearr_31630_31694[2] = null);
(statearr_31630_31694[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 25))
{var inst_31516 = (state_31572[12]);var inst_31515 = (state_31572[13]);var inst_31518 = (inst_31516 < inst_31515);var inst_31519 = inst_31518;var state_31572__$1 = state_31572;if(cljs.core.truth_(inst_31519))
{var statearr_31631_31695 = state_31572__$1;(statearr_31631_31695[1] = 27);
} else
{var statearr_31632_31696 = state_31572__$1;(statearr_31632_31696[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 26))
{var inst_31563 = (state_31572[2]);var state_31572__$1 = (function (){var statearr_31633 = state_31572;(statearr_31633[29] = inst_31563);
return statearr_31633;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31572__$1,42,dchan);
} else
{if((state_val_31573 === 27))
{var inst_31514 = (state_31572[10]);var inst_31516 = (state_31572[12]);var inst_31521 = cljs.core._nth.call(null,inst_31514,inst_31516);var state_31572__$1 = (function (){var statearr_31634 = state_31572;(statearr_31634[7] = inst_31521);
return statearr_31634;
})();var statearr_31635_31697 = state_31572__$1;(statearr_31635_31697[2] = null);
(statearr_31635_31697[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 28))
{var inst_31534 = (state_31572[9]);var inst_31513 = (state_31572[11]);var inst_31534__$1 = cljs.core.seq.call(null,inst_31513);var state_31572__$1 = (function (){var statearr_31639 = state_31572;(statearr_31639[9] = inst_31534__$1);
return statearr_31639;
})();if(inst_31534__$1)
{var statearr_31640_31698 = state_31572__$1;(statearr_31640_31698[1] = 33);
} else
{var statearr_31641_31699 = state_31572__$1;(statearr_31641_31699[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 29))
{var inst_31561 = (state_31572[2]);var state_31572__$1 = state_31572;var statearr_31642_31700 = state_31572__$1;(statearr_31642_31700[2] = inst_31561);
(statearr_31642_31700[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 30))
{var inst_31514 = (state_31572[10]);var inst_31513 = (state_31572[11]);var inst_31516 = (state_31572[12]);var inst_31515 = (state_31572[13]);var inst_31530 = (state_31572[2]);var inst_31531 = (inst_31516 + 1);var tmp31636 = inst_31514;var tmp31637 = inst_31513;var tmp31638 = inst_31515;var inst_31513__$1 = tmp31637;var inst_31514__$1 = tmp31636;var inst_31515__$1 = tmp31638;var inst_31516__$1 = inst_31531;var state_31572__$1 = (function (){var statearr_31643 = state_31572;(statearr_31643[10] = inst_31514__$1);
(statearr_31643[11] = inst_31513__$1);
(statearr_31643[12] = inst_31516__$1);
(statearr_31643[13] = inst_31515__$1);
(statearr_31643[30] = inst_31530);
return statearr_31643;
})();var statearr_31644_31701 = state_31572__$1;(statearr_31644_31701[2] = null);
(statearr_31644_31701[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31573 === 31))
{var inst_31521 = (state_31572[7]);var inst_31522 = (state_31572[2]);var inst_31523 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_31524 = cljs.core.async.untap_STAR_.call(null,m,inst_31521);var state_31572__$1 = (function (){var statearr_31645 = state_31572;(statearr_31645[31] = inst_31522);
(statearr_31645[32] = inst_31523);
return statearr_31645;
})();var statearr_31646_31702 = state_31572__$1;(statearr_31646_31702[2] = inst_31524);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31572__$1);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_31650 = (new Array(33));(statearr_31650[0] = state_machine__5985__auto__);
(statearr_31650[1] = 1);
return statearr_31650;
});
var state_machine__5985__auto____1 = (function (state_31572){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_31572);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e31651){if((e31651 instanceof Object))
{var ex__5988__auto__ = e31651;var statearr_31652_31703 = state_31572;(statearr_31652_31703[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31572);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31651;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31704 = state_31572;
state_31572 = G__31704;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_31572){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_31572);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_31653 = f__6055__auto__.call(null);(statearr_31653[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___31654);
return statearr_31653;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
cljs.core.async.Mix = (function (){var obj31706 = {};return obj31706;
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
;var m = (function (){if(typeof cljs.core.async.t31816 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31816 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta31817){
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
this.meta31817 = meta31817;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31816.cljs$lang$type = true;
cljs.core.async.t31816.cljs$lang$ctorStr = "cljs.core.async/t31816";
cljs.core.async.t31816.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t31816");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31816.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t31816.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31816.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31816.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31816.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31816.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31816.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t31816.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31816.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31818){var self__ = this;
var _31818__$1 = this;return self__.meta31817;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t31816.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_31818,meta31817__$1){var self__ = this;
var _31818__$1 = this;return (new cljs.core.async.t31816(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta31817__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t31816 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t31816(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31817){return (new cljs.core.async.t31816(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta31817));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t31816(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__6054__auto___31925 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_31883){var state_val_31884 = (state_31883[1]);if((state_val_31884 === 1))
{var inst_31822 = (state_31883[7]);var inst_31822__$1 = calc_state.call(null);var inst_31823 = cljs.core.seq_QMARK_.call(null,inst_31822__$1);var state_31883__$1 = (function (){var statearr_31885 = state_31883;(statearr_31885[7] = inst_31822__$1);
return statearr_31885;
})();if(inst_31823)
{var statearr_31886_31926 = state_31883__$1;(statearr_31886_31926[1] = 2);
} else
{var statearr_31887_31927 = state_31883__$1;(statearr_31887_31927[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 2))
{var inst_31822 = (state_31883[7]);var inst_31825 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31822);var state_31883__$1 = state_31883;var statearr_31888_31928 = state_31883__$1;(statearr_31888_31928[2] = inst_31825);
(statearr_31888_31928[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 3))
{var inst_31822 = (state_31883[7]);var state_31883__$1 = state_31883;var statearr_31889_31929 = state_31883__$1;(statearr_31889_31929[2] = inst_31822);
(statearr_31889_31929[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 4))
{var inst_31822 = (state_31883[7]);var inst_31828 = (state_31883[2]);var inst_31829 = cljs.core.get.call(null,inst_31828,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31830 = cljs.core.get.call(null,inst_31828,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31831 = cljs.core.get.call(null,inst_31828,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_31832 = inst_31822;var state_31883__$1 = (function (){var statearr_31890 = state_31883;(statearr_31890[8] = inst_31832);
(statearr_31890[9] = inst_31829);
(statearr_31890[10] = inst_31830);
(statearr_31890[11] = inst_31831);
return statearr_31890;
})();var statearr_31891_31930 = state_31883__$1;(statearr_31891_31930[2] = null);
(statearr_31891_31930[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 5))
{var inst_31832 = (state_31883[8]);var inst_31835 = cljs.core.seq_QMARK_.call(null,inst_31832);var state_31883__$1 = state_31883;if(inst_31835)
{var statearr_31892_31931 = state_31883__$1;(statearr_31892_31931[1] = 7);
} else
{var statearr_31893_31932 = state_31883__$1;(statearr_31893_31932[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 6))
{var inst_31881 = (state_31883[2]);var state_31883__$1 = state_31883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31883__$1,inst_31881);
} else
{if((state_val_31884 === 7))
{var inst_31832 = (state_31883[8]);var inst_31837 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31832);var state_31883__$1 = state_31883;var statearr_31894_31933 = state_31883__$1;(statearr_31894_31933[2] = inst_31837);
(statearr_31894_31933[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 8))
{var inst_31832 = (state_31883[8]);var state_31883__$1 = state_31883;var statearr_31895_31934 = state_31883__$1;(statearr_31895_31934[2] = inst_31832);
(statearr_31895_31934[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 9))
{var inst_31840 = (state_31883[12]);var inst_31840__$1 = (state_31883[2]);var inst_31841 = cljs.core.get.call(null,inst_31840__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_31842 = cljs.core.get.call(null,inst_31840__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_31843 = cljs.core.get.call(null,inst_31840__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_31883__$1 = (function (){var statearr_31896 = state_31883;(statearr_31896[12] = inst_31840__$1);
(statearr_31896[13] = inst_31842);
(statearr_31896[14] = inst_31843);
return statearr_31896;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_31883__$1,10,inst_31841);
} else
{if((state_val_31884 === 10))
{var inst_31847 = (state_31883[15]);var inst_31848 = (state_31883[16]);var inst_31846 = (state_31883[2]);var inst_31847__$1 = cljs.core.nth.call(null,inst_31846,0,null);var inst_31848__$1 = cljs.core.nth.call(null,inst_31846,1,null);var inst_31849 = (inst_31847__$1 == null);var inst_31850 = cljs.core._EQ_.call(null,inst_31848__$1,change);var inst_31851 = (inst_31849) || (inst_31850);var state_31883__$1 = (function (){var statearr_31897 = state_31883;(statearr_31897[15] = inst_31847__$1);
(statearr_31897[16] = inst_31848__$1);
return statearr_31897;
})();if(cljs.core.truth_(inst_31851))
{var statearr_31898_31935 = state_31883__$1;(statearr_31898_31935[1] = 11);
} else
{var statearr_31899_31936 = state_31883__$1;(statearr_31899_31936[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 11))
{var inst_31847 = (state_31883[15]);var inst_31853 = (inst_31847 == null);var state_31883__$1 = state_31883;if(cljs.core.truth_(inst_31853))
{var statearr_31900_31937 = state_31883__$1;(statearr_31900_31937[1] = 14);
} else
{var statearr_31901_31938 = state_31883__$1;(statearr_31901_31938[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 12))
{var inst_31843 = (state_31883[14]);var inst_31848 = (state_31883[16]);var inst_31862 = (state_31883[17]);var inst_31862__$1 = inst_31843.call(null,inst_31848);var state_31883__$1 = (function (){var statearr_31902 = state_31883;(statearr_31902[17] = inst_31862__$1);
return statearr_31902;
})();if(cljs.core.truth_(inst_31862__$1))
{var statearr_31903_31939 = state_31883__$1;(statearr_31903_31939[1] = 17);
} else
{var statearr_31904_31940 = state_31883__$1;(statearr_31904_31940[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 13))
{var inst_31879 = (state_31883[2]);var state_31883__$1 = state_31883;var statearr_31905_31941 = state_31883__$1;(statearr_31905_31941[2] = inst_31879);
(statearr_31905_31941[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 14))
{var inst_31848 = (state_31883[16]);var inst_31855 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_31848);var state_31883__$1 = state_31883;var statearr_31906_31942 = state_31883__$1;(statearr_31906_31942[2] = inst_31855);
(statearr_31906_31942[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 15))
{var state_31883__$1 = state_31883;var statearr_31907_31943 = state_31883__$1;(statearr_31907_31943[2] = null);
(statearr_31907_31943[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 16))
{var inst_31858 = (state_31883[2]);var inst_31859 = calc_state.call(null);var inst_31832 = inst_31859;var state_31883__$1 = (function (){var statearr_31908 = state_31883;(statearr_31908[8] = inst_31832);
(statearr_31908[18] = inst_31858);
return statearr_31908;
})();var statearr_31909_31944 = state_31883__$1;(statearr_31909_31944[2] = null);
(statearr_31909_31944[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 17))
{var inst_31862 = (state_31883[17]);var state_31883__$1 = state_31883;var statearr_31910_31945 = state_31883__$1;(statearr_31910_31945[2] = inst_31862);
(statearr_31910_31945[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 18))
{var inst_31842 = (state_31883[13]);var inst_31843 = (state_31883[14]);var inst_31848 = (state_31883[16]);var inst_31865 = cljs.core.empty_QMARK_.call(null,inst_31843);var inst_31866 = inst_31842.call(null,inst_31848);var inst_31867 = cljs.core.not.call(null,inst_31866);var inst_31868 = (inst_31865) && (inst_31867);var state_31883__$1 = state_31883;var statearr_31911_31946 = state_31883__$1;(statearr_31911_31946[2] = inst_31868);
(statearr_31911_31946[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 19))
{var inst_31870 = (state_31883[2]);var state_31883__$1 = state_31883;if(cljs.core.truth_(inst_31870))
{var statearr_31912_31947 = state_31883__$1;(statearr_31912_31947[1] = 20);
} else
{var statearr_31913_31948 = state_31883__$1;(statearr_31913_31948[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 20))
{var inst_31847 = (state_31883[15]);var state_31883__$1 = state_31883;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31883__$1,23,out,inst_31847);
} else
{if((state_val_31884 === 21))
{var state_31883__$1 = state_31883;var statearr_31914_31949 = state_31883__$1;(statearr_31914_31949[2] = null);
(statearr_31914_31949[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 22))
{var inst_31840 = (state_31883[12]);var inst_31876 = (state_31883[2]);var inst_31832 = inst_31840;var state_31883__$1 = (function (){var statearr_31915 = state_31883;(statearr_31915[8] = inst_31832);
(statearr_31915[19] = inst_31876);
return statearr_31915;
})();var statearr_31916_31950 = state_31883__$1;(statearr_31916_31950[2] = null);
(statearr_31916_31950[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31884 === 23))
{var inst_31873 = (state_31883[2]);var state_31883__$1 = state_31883;var statearr_31917_31951 = state_31883__$1;(statearr_31917_31951[2] = inst_31873);
(statearr_31917_31951[1] = 22);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_31921 = (new Array(20));(statearr_31921[0] = state_machine__5985__auto__);
(statearr_31921[1] = 1);
return statearr_31921;
});
var state_machine__5985__auto____1 = (function (state_31883){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_31883);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e31922){if((e31922 instanceof Object))
{var ex__5988__auto__ = e31922;var statearr_31923_31952 = state_31883;(statearr_31923_31952[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31883);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31922;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31953 = state_31883;
state_31883 = G__31953;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_31883){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_31883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_31924 = f__6055__auto__.call(null);(statearr_31924[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___31925);
return statearr_31924;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
cljs.core.async.Pub = (function (){var obj31955 = {};return obj31955;
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
return (function (p1__31956_SHARP_){if(cljs.core.truth_(p1__31956_SHARP_.call(null,topic)))
{return p1__31956_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__31956_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3291__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t32081 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32081 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta32082){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta32082 = meta32082;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32081.cljs$lang$type = true;
cljs.core.async.t32081.cljs$lang$ctorStr = "cljs.core.async/t32081";
cljs.core.async.t32081.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write.call(null,writer__3836__auto__,"cljs.core.async/t32081");
});})(mults,ensure_mult))
;
cljs.core.async.t32081.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t32081.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t32081.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t32081.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t32081.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t32081.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32081.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t32081.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_32083){var self__ = this;
var _32083__$1 = this;return self__.meta32082;
});})(mults,ensure_mult))
;
cljs.core.async.t32081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_32083,meta32082__$1){var self__ = this;
var _32083__$1 = this;return (new cljs.core.async.t32081(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta32082__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t32081 = ((function (mults,ensure_mult){
return (function __GT_t32081(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32082){return (new cljs.core.async.t32081(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta32082));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t32081(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__6054__auto___32205 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_32157){var state_val_32158 = (state_32157[1]);if((state_val_32158 === 1))
{var state_32157__$1 = state_32157;var statearr_32159_32206 = state_32157__$1;(statearr_32159_32206[2] = null);
(statearr_32159_32206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 2))
{var state_32157__$1 = state_32157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32157__$1,4,ch);
} else
{if((state_val_32158 === 3))
{var inst_32155 = (state_32157[2]);var state_32157__$1 = state_32157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32157__$1,inst_32155);
} else
{if((state_val_32158 === 4))
{var inst_32086 = (state_32157[7]);var inst_32086__$1 = (state_32157[2]);var inst_32087 = (inst_32086__$1 == null);var state_32157__$1 = (function (){var statearr_32160 = state_32157;(statearr_32160[7] = inst_32086__$1);
return statearr_32160;
})();if(cljs.core.truth_(inst_32087))
{var statearr_32161_32207 = state_32157__$1;(statearr_32161_32207[1] = 5);
} else
{var statearr_32162_32208 = state_32157__$1;(statearr_32162_32208[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 5))
{var inst_32093 = cljs.core.deref.call(null,mults);var inst_32094 = cljs.core.vals.call(null,inst_32093);var inst_32095 = cljs.core.seq.call(null,inst_32094);var inst_32096 = inst_32095;var inst_32097 = null;var inst_32098 = 0;var inst_32099 = 0;var state_32157__$1 = (function (){var statearr_32163 = state_32157;(statearr_32163[8] = inst_32099);
(statearr_32163[9] = inst_32097);
(statearr_32163[10] = inst_32098);
(statearr_32163[11] = inst_32096);
return statearr_32163;
})();var statearr_32164_32209 = state_32157__$1;(statearr_32164_32209[2] = null);
(statearr_32164_32209[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 6))
{var inst_32136 = (state_32157[12]);var inst_32086 = (state_32157[7]);var inst_32134 = (state_32157[13]);var inst_32134__$1 = topic_fn.call(null,inst_32086);var inst_32135 = cljs.core.deref.call(null,mults);var inst_32136__$1 = cljs.core.get.call(null,inst_32135,inst_32134__$1);var state_32157__$1 = (function (){var statearr_32165 = state_32157;(statearr_32165[12] = inst_32136__$1);
(statearr_32165[13] = inst_32134__$1);
return statearr_32165;
})();if(cljs.core.truth_(inst_32136__$1))
{var statearr_32166_32210 = state_32157__$1;(statearr_32166_32210[1] = 19);
} else
{var statearr_32167_32211 = state_32157__$1;(statearr_32167_32211[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 7))
{var inst_32153 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32168_32212 = state_32157__$1;(statearr_32168_32212[2] = inst_32153);
(statearr_32168_32212[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 8))
{var inst_32099 = (state_32157[8]);var inst_32098 = (state_32157[10]);var inst_32101 = (inst_32099 < inst_32098);var inst_32102 = inst_32101;var state_32157__$1 = state_32157;if(cljs.core.truth_(inst_32102))
{var statearr_32172_32213 = state_32157__$1;(statearr_32172_32213[1] = 10);
} else
{var statearr_32173_32214 = state_32157__$1;(statearr_32173_32214[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 9))
{var inst_32132 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32174_32215 = state_32157__$1;(statearr_32174_32215[2] = inst_32132);
(statearr_32174_32215[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 10))
{var inst_32099 = (state_32157[8]);var inst_32097 = (state_32157[9]);var inst_32098 = (state_32157[10]);var inst_32096 = (state_32157[11]);var inst_32104 = cljs.core._nth.call(null,inst_32097,inst_32099);var inst_32105 = cljs.core.async.muxch_STAR_.call(null,inst_32104);var inst_32106 = cljs.core.async.close_BANG_.call(null,inst_32105);var inst_32107 = (inst_32099 + 1);var tmp32169 = inst_32097;var tmp32170 = inst_32098;var tmp32171 = inst_32096;var inst_32096__$1 = tmp32171;var inst_32097__$1 = tmp32169;var inst_32098__$1 = tmp32170;var inst_32099__$1 = inst_32107;var state_32157__$1 = (function (){var statearr_32175 = state_32157;(statearr_32175[14] = inst_32106);
(statearr_32175[8] = inst_32099__$1);
(statearr_32175[9] = inst_32097__$1);
(statearr_32175[10] = inst_32098__$1);
(statearr_32175[11] = inst_32096__$1);
return statearr_32175;
})();var statearr_32176_32216 = state_32157__$1;(statearr_32176_32216[2] = null);
(statearr_32176_32216[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 11))
{var inst_32110 = (state_32157[15]);var inst_32096 = (state_32157[11]);var inst_32110__$1 = cljs.core.seq.call(null,inst_32096);var state_32157__$1 = (function (){var statearr_32177 = state_32157;(statearr_32177[15] = inst_32110__$1);
return statearr_32177;
})();if(inst_32110__$1)
{var statearr_32178_32217 = state_32157__$1;(statearr_32178_32217[1] = 13);
} else
{var statearr_32179_32218 = state_32157__$1;(statearr_32179_32218[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 12))
{var inst_32130 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32180_32219 = state_32157__$1;(statearr_32180_32219[2] = inst_32130);
(statearr_32180_32219[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 13))
{var inst_32110 = (state_32157[15]);var inst_32112 = cljs.core.chunked_seq_QMARK_.call(null,inst_32110);var state_32157__$1 = state_32157;if(inst_32112)
{var statearr_32181_32220 = state_32157__$1;(statearr_32181_32220[1] = 16);
} else
{var statearr_32182_32221 = state_32157__$1;(statearr_32182_32221[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 14))
{var state_32157__$1 = state_32157;var statearr_32183_32222 = state_32157__$1;(statearr_32183_32222[2] = null);
(statearr_32183_32222[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 15))
{var inst_32128 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32184_32223 = state_32157__$1;(statearr_32184_32223[2] = inst_32128);
(statearr_32184_32223[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 16))
{var inst_32110 = (state_32157[15]);var inst_32114 = cljs.core.chunk_first.call(null,inst_32110);var inst_32115 = cljs.core.chunk_rest.call(null,inst_32110);var inst_32116 = cljs.core.count.call(null,inst_32114);var inst_32096 = inst_32115;var inst_32097 = inst_32114;var inst_32098 = inst_32116;var inst_32099 = 0;var state_32157__$1 = (function (){var statearr_32185 = state_32157;(statearr_32185[8] = inst_32099);
(statearr_32185[9] = inst_32097);
(statearr_32185[10] = inst_32098);
(statearr_32185[11] = inst_32096);
return statearr_32185;
})();var statearr_32186_32224 = state_32157__$1;(statearr_32186_32224[2] = null);
(statearr_32186_32224[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 17))
{var inst_32110 = (state_32157[15]);var inst_32119 = cljs.core.first.call(null,inst_32110);var inst_32120 = cljs.core.async.muxch_STAR_.call(null,inst_32119);var inst_32121 = cljs.core.async.close_BANG_.call(null,inst_32120);var inst_32122 = cljs.core.next.call(null,inst_32110);var inst_32096 = inst_32122;var inst_32097 = null;var inst_32098 = 0;var inst_32099 = 0;var state_32157__$1 = (function (){var statearr_32187 = state_32157;(statearr_32187[8] = inst_32099);
(statearr_32187[9] = inst_32097);
(statearr_32187[10] = inst_32098);
(statearr_32187[11] = inst_32096);
(statearr_32187[16] = inst_32121);
return statearr_32187;
})();var statearr_32188_32225 = state_32157__$1;(statearr_32188_32225[2] = null);
(statearr_32188_32225[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 18))
{var inst_32125 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32189_32226 = state_32157__$1;(statearr_32189_32226[2] = inst_32125);
(statearr_32189_32226[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 19))
{var state_32157__$1 = state_32157;var statearr_32190_32227 = state_32157__$1;(statearr_32190_32227[2] = null);
(statearr_32190_32227[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 20))
{var state_32157__$1 = state_32157;var statearr_32191_32228 = state_32157__$1;(statearr_32191_32228[2] = null);
(statearr_32191_32228[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 21))
{var inst_32150 = (state_32157[2]);var state_32157__$1 = (function (){var statearr_32192 = state_32157;(statearr_32192[17] = inst_32150);
return statearr_32192;
})();var statearr_32193_32229 = state_32157__$1;(statearr_32193_32229[2] = null);
(statearr_32193_32229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 22))
{var inst_32147 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32194_32230 = state_32157__$1;(statearr_32194_32230[2] = inst_32147);
(statearr_32194_32230[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 23))
{var inst_32134 = (state_32157[13]);var inst_32138 = (state_32157[2]);var inst_32139 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_32134);var state_32157__$1 = (function (){var statearr_32195 = state_32157;(statearr_32195[18] = inst_32138);
return statearr_32195;
})();var statearr_32196_32231 = state_32157__$1;(statearr_32196_32231[2] = inst_32139);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32157__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32158 === 24))
{var inst_32136 = (state_32157[12]);var inst_32086 = (state_32157[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32157,23,Object,null,22);var inst_32143 = cljs.core.async.muxch_STAR_.call(null,inst_32136);var state_32157__$1 = state_32157;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32157__$1,25,inst_32143,inst_32086);
} else
{if((state_val_32158 === 25))
{var inst_32145 = (state_32157[2]);var state_32157__$1 = state_32157;var statearr_32197_32232 = state_32157__$1;(statearr_32197_32232[2] = inst_32145);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32157__$1);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_32201 = (new Array(19));(statearr_32201[0] = state_machine__5985__auto__);
(statearr_32201[1] = 1);
return statearr_32201;
});
var state_machine__5985__auto____1 = (function (state_32157){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_32157);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e32202){if((e32202 instanceof Object))
{var ex__5988__auto__ = e32202;var statearr_32203_32233 = state_32157;(statearr_32203_32233[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32202;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32234 = state_32157;
state_32157 = G__32234;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_32157){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_32157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_32204 = f__6055__auto__.call(null);(statearr_32204[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___32205);
return statearr_32204;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
,cljs.core.range.call(null,cnt));var c__6054__auto___32371 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_32341){var state_val_32342 = (state_32341[1]);if((state_val_32342 === 1))
{var state_32341__$1 = state_32341;var statearr_32343_32372 = state_32341__$1;(statearr_32343_32372[2] = null);
(statearr_32343_32372[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 2))
{var inst_32304 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_32305 = 0;var state_32341__$1 = (function (){var statearr_32344 = state_32341;(statearr_32344[7] = inst_32304);
(statearr_32344[8] = inst_32305);
return statearr_32344;
})();var statearr_32345_32373 = state_32341__$1;(statearr_32345_32373[2] = null);
(statearr_32345_32373[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 3))
{var inst_32339 = (state_32341[2]);var state_32341__$1 = state_32341;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32341__$1,inst_32339);
} else
{if((state_val_32342 === 4))
{var inst_32305 = (state_32341[8]);var inst_32307 = (inst_32305 < cnt);var state_32341__$1 = state_32341;if(cljs.core.truth_(inst_32307))
{var statearr_32346_32374 = state_32341__$1;(statearr_32346_32374[1] = 6);
} else
{var statearr_32347_32375 = state_32341__$1;(statearr_32347_32375[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 5))
{var inst_32325 = (state_32341[2]);var state_32341__$1 = (function (){var statearr_32348 = state_32341;(statearr_32348[9] = inst_32325);
return statearr_32348;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32341__$1,12,dchan);
} else
{if((state_val_32342 === 6))
{var state_32341__$1 = state_32341;var statearr_32349_32376 = state_32341__$1;(statearr_32349_32376[2] = null);
(statearr_32349_32376[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 7))
{var state_32341__$1 = state_32341;var statearr_32350_32377 = state_32341__$1;(statearr_32350_32377[2] = null);
(statearr_32350_32377[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 8))
{var inst_32323 = (state_32341[2]);var state_32341__$1 = state_32341;var statearr_32351_32378 = state_32341__$1;(statearr_32351_32378[2] = inst_32323);
(statearr_32351_32378[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 9))
{var inst_32305 = (state_32341[8]);var inst_32318 = (state_32341[2]);var inst_32319 = (inst_32305 + 1);var inst_32305__$1 = inst_32319;var state_32341__$1 = (function (){var statearr_32352 = state_32341;(statearr_32352[10] = inst_32318);
(statearr_32352[8] = inst_32305__$1);
return statearr_32352;
})();var statearr_32353_32379 = state_32341__$1;(statearr_32353_32379[2] = null);
(statearr_32353_32379[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 10))
{var inst_32309 = (state_32341[2]);var inst_32310 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_32341__$1 = (function (){var statearr_32354 = state_32341;(statearr_32354[11] = inst_32309);
return statearr_32354;
})();var statearr_32355_32380 = state_32341__$1;(statearr_32355_32380[2] = inst_32310);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32341__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 11))
{var inst_32305 = (state_32341[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32341,10,Object,null,9);var inst_32314 = chs__$1.call(null,inst_32305);var inst_32315 = done.call(null,inst_32305);var inst_32316 = cljs.core.async.take_BANG_.call(null,inst_32314,inst_32315);var state_32341__$1 = state_32341;var statearr_32356_32381 = state_32341__$1;(statearr_32356_32381[2] = inst_32316);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32341__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 12))
{var inst_32327 = (state_32341[12]);var inst_32327__$1 = (state_32341[2]);var inst_32328 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_32327__$1);var state_32341__$1 = (function (){var statearr_32357 = state_32341;(statearr_32357[12] = inst_32327__$1);
return statearr_32357;
})();if(cljs.core.truth_(inst_32328))
{var statearr_32358_32382 = state_32341__$1;(statearr_32358_32382[1] = 13);
} else
{var statearr_32359_32383 = state_32341__$1;(statearr_32359_32383[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 13))
{var inst_32330 = cljs.core.async.close_BANG_.call(null,out);var state_32341__$1 = state_32341;var statearr_32360_32384 = state_32341__$1;(statearr_32360_32384[2] = inst_32330);
(statearr_32360_32384[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 14))
{var inst_32327 = (state_32341[12]);var inst_32332 = cljs.core.apply.call(null,f,inst_32327);var state_32341__$1 = state_32341;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32341__$1,16,out,inst_32332);
} else
{if((state_val_32342 === 15))
{var inst_32337 = (state_32341[2]);var state_32341__$1 = state_32341;var statearr_32361_32385 = state_32341__$1;(statearr_32361_32385[2] = inst_32337);
(statearr_32361_32385[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32342 === 16))
{var inst_32334 = (state_32341[2]);var state_32341__$1 = (function (){var statearr_32362 = state_32341;(statearr_32362[13] = inst_32334);
return statearr_32362;
})();var statearr_32363_32386 = state_32341__$1;(statearr_32363_32386[2] = null);
(statearr_32363_32386[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_32367 = (new Array(14));(statearr_32367[0] = state_machine__5985__auto__);
(statearr_32367[1] = 1);
return statearr_32367;
});
var state_machine__5985__auto____1 = (function (state_32341){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_32341);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e32368){if((e32368 instanceof Object))
{var ex__5988__auto__ = e32368;var statearr_32369_32387 = state_32341;(statearr_32369_32387[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32341);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32368;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32388 = state_32341;
state_32341 = G__32388;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_32341){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_32341);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_32370 = f__6055__auto__.call(null);(statearr_32370[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___32371);
return statearr_32370;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___32496 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_32472){var state_val_32473 = (state_32472[1]);if((state_val_32473 === 1))
{var inst_32443 = cljs.core.vec.call(null,chs);var inst_32444 = inst_32443;var state_32472__$1 = (function (){var statearr_32474 = state_32472;(statearr_32474[7] = inst_32444);
return statearr_32474;
})();var statearr_32475_32497 = state_32472__$1;(statearr_32475_32497[2] = null);
(statearr_32475_32497[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32473 === 2))
{var inst_32444 = (state_32472[7]);var inst_32446 = cljs.core.count.call(null,inst_32444);var inst_32447 = (inst_32446 > 0);var state_32472__$1 = state_32472;if(cljs.core.truth_(inst_32447))
{var statearr_32476_32498 = state_32472__$1;(statearr_32476_32498[1] = 4);
} else
{var statearr_32477_32499 = state_32472__$1;(statearr_32477_32499[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32473 === 3))
{var inst_32470 = (state_32472[2]);var state_32472__$1 = state_32472;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32472__$1,inst_32470);
} else
{if((state_val_32473 === 4))
{var inst_32444 = (state_32472[7]);var state_32472__$1 = state_32472;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32472__$1,7,inst_32444);
} else
{if((state_val_32473 === 5))
{var inst_32466 = cljs.core.async.close_BANG_.call(null,out);var state_32472__$1 = state_32472;var statearr_32478_32500 = state_32472__$1;(statearr_32478_32500[2] = inst_32466);
(statearr_32478_32500[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32473 === 6))
{var inst_32468 = (state_32472[2]);var state_32472__$1 = state_32472;var statearr_32479_32501 = state_32472__$1;(statearr_32479_32501[2] = inst_32468);
(statearr_32479_32501[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32473 === 7))
{var inst_32452 = (state_32472[8]);var inst_32451 = (state_32472[9]);var inst_32451__$1 = (state_32472[2]);var inst_32452__$1 = cljs.core.nth.call(null,inst_32451__$1,0,null);var inst_32453 = cljs.core.nth.call(null,inst_32451__$1,1,null);var inst_32454 = (inst_32452__$1 == null);var state_32472__$1 = (function (){var statearr_32480 = state_32472;(statearr_32480[10] = inst_32453);
(statearr_32480[8] = inst_32452__$1);
(statearr_32480[9] = inst_32451__$1);
return statearr_32480;
})();if(cljs.core.truth_(inst_32454))
{var statearr_32481_32502 = state_32472__$1;(statearr_32481_32502[1] = 8);
} else
{var statearr_32482_32503 = state_32472__$1;(statearr_32482_32503[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32473 === 8))
{var inst_32444 = (state_32472[7]);var inst_32453 = (state_32472[10]);var inst_32452 = (state_32472[8]);var inst_32451 = (state_32472[9]);var inst_32456 = (function (){var c = inst_32453;var v = inst_32452;var vec__32449 = inst_32451;var cs = inst_32444;return ((function (c,v,vec__32449,cs,inst_32444,inst_32453,inst_32452,inst_32451,state_val_32473){
return (function (p1__32389_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__32389_SHARP_);
});
;})(c,v,vec__32449,cs,inst_32444,inst_32453,inst_32452,inst_32451,state_val_32473))
})();var inst_32457 = cljs.core.filterv.call(null,inst_32456,inst_32444);var inst_32444__$1 = inst_32457;var state_32472__$1 = (function (){var statearr_32483 = state_32472;(statearr_32483[7] = inst_32444__$1);
return statearr_32483;
})();var statearr_32484_32504 = state_32472__$1;(statearr_32484_32504[2] = null);
(statearr_32484_32504[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32473 === 9))
{var inst_32452 = (state_32472[8]);var state_32472__$1 = state_32472;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32472__$1,11,out,inst_32452);
} else
{if((state_val_32473 === 10))
{var inst_32464 = (state_32472[2]);var state_32472__$1 = state_32472;var statearr_32486_32505 = state_32472__$1;(statearr_32486_32505[2] = inst_32464);
(statearr_32486_32505[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32473 === 11))
{var inst_32444 = (state_32472[7]);var inst_32461 = (state_32472[2]);var tmp32485 = inst_32444;var inst_32444__$1 = tmp32485;var state_32472__$1 = (function (){var statearr_32487 = state_32472;(statearr_32487[11] = inst_32461);
(statearr_32487[7] = inst_32444__$1);
return statearr_32487;
})();var statearr_32488_32506 = state_32472__$1;(statearr_32488_32506[2] = null);
(statearr_32488_32506[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_32492 = (new Array(12));(statearr_32492[0] = state_machine__5985__auto__);
(statearr_32492[1] = 1);
return statearr_32492;
});
var state_machine__5985__auto____1 = (function (state_32472){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_32472);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e32493){if((e32493 instanceof Object))
{var ex__5988__auto__ = e32493;var statearr_32494_32507 = state_32472;(statearr_32494_32507[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32472);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32493;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32508 = state_32472;
state_32472 = G__32508;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_32472){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_32472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_32495 = f__6055__auto__.call(null);(statearr_32495[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___32496);
return statearr_32495;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___32601 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_32578){var state_val_32579 = (state_32578[1]);if((state_val_32579 === 1))
{var inst_32555 = 0;var state_32578__$1 = (function (){var statearr_32580 = state_32578;(statearr_32580[7] = inst_32555);
return statearr_32580;
})();var statearr_32581_32602 = state_32578__$1;(statearr_32581_32602[2] = null);
(statearr_32581_32602[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32579 === 2))
{var inst_32555 = (state_32578[7]);var inst_32557 = (inst_32555 < n);var state_32578__$1 = state_32578;if(cljs.core.truth_(inst_32557))
{var statearr_32582_32603 = state_32578__$1;(statearr_32582_32603[1] = 4);
} else
{var statearr_32583_32604 = state_32578__$1;(statearr_32583_32604[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32579 === 3))
{var inst_32575 = (state_32578[2]);var inst_32576 = cljs.core.async.close_BANG_.call(null,out);var state_32578__$1 = (function (){var statearr_32584 = state_32578;(statearr_32584[8] = inst_32575);
return statearr_32584;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32578__$1,inst_32576);
} else
{if((state_val_32579 === 4))
{var state_32578__$1 = state_32578;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32578__$1,7,ch);
} else
{if((state_val_32579 === 5))
{var state_32578__$1 = state_32578;var statearr_32585_32605 = state_32578__$1;(statearr_32585_32605[2] = null);
(statearr_32585_32605[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32579 === 6))
{var inst_32573 = (state_32578[2]);var state_32578__$1 = state_32578;var statearr_32586_32606 = state_32578__$1;(statearr_32586_32606[2] = inst_32573);
(statearr_32586_32606[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32579 === 7))
{var inst_32560 = (state_32578[9]);var inst_32560__$1 = (state_32578[2]);var inst_32561 = (inst_32560__$1 == null);var inst_32562 = cljs.core.not.call(null,inst_32561);var state_32578__$1 = (function (){var statearr_32587 = state_32578;(statearr_32587[9] = inst_32560__$1);
return statearr_32587;
})();if(inst_32562)
{var statearr_32588_32607 = state_32578__$1;(statearr_32588_32607[1] = 8);
} else
{var statearr_32589_32608 = state_32578__$1;(statearr_32589_32608[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32579 === 8))
{var inst_32560 = (state_32578[9]);var state_32578__$1 = state_32578;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32578__$1,11,out,inst_32560);
} else
{if((state_val_32579 === 9))
{var state_32578__$1 = state_32578;var statearr_32590_32609 = state_32578__$1;(statearr_32590_32609[2] = null);
(statearr_32590_32609[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32579 === 10))
{var inst_32570 = (state_32578[2]);var state_32578__$1 = state_32578;var statearr_32591_32610 = state_32578__$1;(statearr_32591_32610[2] = inst_32570);
(statearr_32591_32610[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32579 === 11))
{var inst_32555 = (state_32578[7]);var inst_32565 = (state_32578[2]);var inst_32566 = (inst_32555 + 1);var inst_32555__$1 = inst_32566;var state_32578__$1 = (function (){var statearr_32592 = state_32578;(statearr_32592[10] = inst_32565);
(statearr_32592[7] = inst_32555__$1);
return statearr_32592;
})();var statearr_32593_32611 = state_32578__$1;(statearr_32593_32611[2] = null);
(statearr_32593_32611[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_32597 = (new Array(11));(statearr_32597[0] = state_machine__5985__auto__);
(statearr_32597[1] = 1);
return statearr_32597;
});
var state_machine__5985__auto____1 = (function (state_32578){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_32578);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e32598){if((e32598 instanceof Object))
{var ex__5988__auto__ = e32598;var statearr_32599_32612 = state_32578;(statearr_32599_32612[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32578);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32598;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32613 = state_32578;
state_32578 = G__32613;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_32578){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_32578);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_32600 = f__6055__auto__.call(null);(statearr_32600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___32601);
return statearr_32600;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___32710 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_32685){var state_val_32686 = (state_32685[1]);if((state_val_32686 === 1))
{var inst_32662 = null;var state_32685__$1 = (function (){var statearr_32687 = state_32685;(statearr_32687[7] = inst_32662);
return statearr_32687;
})();var statearr_32688_32711 = state_32685__$1;(statearr_32688_32711[2] = null);
(statearr_32688_32711[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32686 === 2))
{var state_32685__$1 = state_32685;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32685__$1,4,ch);
} else
{if((state_val_32686 === 3))
{var inst_32682 = (state_32685[2]);var inst_32683 = cljs.core.async.close_BANG_.call(null,out);var state_32685__$1 = (function (){var statearr_32689 = state_32685;(statearr_32689[8] = inst_32682);
return statearr_32689;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32685__$1,inst_32683);
} else
{if((state_val_32686 === 4))
{var inst_32665 = (state_32685[9]);var inst_32665__$1 = (state_32685[2]);var inst_32666 = (inst_32665__$1 == null);var inst_32667 = cljs.core.not.call(null,inst_32666);var state_32685__$1 = (function (){var statearr_32690 = state_32685;(statearr_32690[9] = inst_32665__$1);
return statearr_32690;
})();if(inst_32667)
{var statearr_32691_32712 = state_32685__$1;(statearr_32691_32712[1] = 5);
} else
{var statearr_32692_32713 = state_32685__$1;(statearr_32692_32713[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32686 === 5))
{var inst_32665 = (state_32685[9]);var inst_32662 = (state_32685[7]);var inst_32669 = cljs.core._EQ_.call(null,inst_32665,inst_32662);var state_32685__$1 = state_32685;if(inst_32669)
{var statearr_32693_32714 = state_32685__$1;(statearr_32693_32714[1] = 8);
} else
{var statearr_32694_32715 = state_32685__$1;(statearr_32694_32715[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32686 === 6))
{var state_32685__$1 = state_32685;var statearr_32696_32716 = state_32685__$1;(statearr_32696_32716[2] = null);
(statearr_32696_32716[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32686 === 7))
{var inst_32680 = (state_32685[2]);var state_32685__$1 = state_32685;var statearr_32697_32717 = state_32685__$1;(statearr_32697_32717[2] = inst_32680);
(statearr_32697_32717[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32686 === 8))
{var inst_32662 = (state_32685[7]);var tmp32695 = inst_32662;var inst_32662__$1 = tmp32695;var state_32685__$1 = (function (){var statearr_32698 = state_32685;(statearr_32698[7] = inst_32662__$1);
return statearr_32698;
})();var statearr_32699_32718 = state_32685__$1;(statearr_32699_32718[2] = null);
(statearr_32699_32718[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32686 === 9))
{var inst_32665 = (state_32685[9]);var state_32685__$1 = state_32685;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32685__$1,11,out,inst_32665);
} else
{if((state_val_32686 === 10))
{var inst_32677 = (state_32685[2]);var state_32685__$1 = state_32685;var statearr_32700_32719 = state_32685__$1;(statearr_32700_32719[2] = inst_32677);
(statearr_32700_32719[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32686 === 11))
{var inst_32665 = (state_32685[9]);var inst_32674 = (state_32685[2]);var inst_32662 = inst_32665;var state_32685__$1 = (function (){var statearr_32701 = state_32685;(statearr_32701[10] = inst_32674);
(statearr_32701[7] = inst_32662);
return statearr_32701;
})();var statearr_32702_32720 = state_32685__$1;(statearr_32702_32720[2] = null);
(statearr_32702_32720[1] = 2);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_32706 = (new Array(11));(statearr_32706[0] = state_machine__5985__auto__);
(statearr_32706[1] = 1);
return statearr_32706;
});
var state_machine__5985__auto____1 = (function (state_32685){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_32685);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e32707){if((e32707 instanceof Object))
{var ex__5988__auto__ = e32707;var statearr_32708_32721 = state_32685;(statearr_32708_32721[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32685);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32707;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32722 = state_32685;
state_32685 = G__32722;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_32685){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_32685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_32709 = f__6055__auto__.call(null);(statearr_32709[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___32710);
return statearr_32709;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___32857 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_32827){var state_val_32828 = (state_32827[1]);if((state_val_32828 === 1))
{var inst_32790 = (new Array(n));var inst_32791 = inst_32790;var inst_32792 = 0;var state_32827__$1 = (function (){var statearr_32829 = state_32827;(statearr_32829[7] = inst_32792);
(statearr_32829[8] = inst_32791);
return statearr_32829;
})();var statearr_32830_32858 = state_32827__$1;(statearr_32830_32858[2] = null);
(statearr_32830_32858[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 2))
{var state_32827__$1 = state_32827;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32827__$1,4,ch);
} else
{if((state_val_32828 === 3))
{var inst_32825 = (state_32827[2]);var state_32827__$1 = state_32827;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32827__$1,inst_32825);
} else
{if((state_val_32828 === 4))
{var inst_32795 = (state_32827[9]);var inst_32795__$1 = (state_32827[2]);var inst_32796 = (inst_32795__$1 == null);var inst_32797 = cljs.core.not.call(null,inst_32796);var state_32827__$1 = (function (){var statearr_32831 = state_32827;(statearr_32831[9] = inst_32795__$1);
return statearr_32831;
})();if(inst_32797)
{var statearr_32832_32859 = state_32827__$1;(statearr_32832_32859[1] = 5);
} else
{var statearr_32833_32860 = state_32827__$1;(statearr_32833_32860[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 5))
{var inst_32795 = (state_32827[9]);var inst_32792 = (state_32827[7]);var inst_32791 = (state_32827[8]);var inst_32800 = (state_32827[10]);var inst_32799 = (inst_32791[inst_32792] = inst_32795);var inst_32800__$1 = (inst_32792 + 1);var inst_32801 = (inst_32800__$1 < n);var state_32827__$1 = (function (){var statearr_32834 = state_32827;(statearr_32834[10] = inst_32800__$1);
(statearr_32834[11] = inst_32799);
return statearr_32834;
})();if(cljs.core.truth_(inst_32801))
{var statearr_32835_32861 = state_32827__$1;(statearr_32835_32861[1] = 8);
} else
{var statearr_32836_32862 = state_32827__$1;(statearr_32836_32862[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 6))
{var inst_32792 = (state_32827[7]);var inst_32813 = (inst_32792 > 0);var state_32827__$1 = state_32827;if(cljs.core.truth_(inst_32813))
{var statearr_32838_32863 = state_32827__$1;(statearr_32838_32863[1] = 12);
} else
{var statearr_32839_32864 = state_32827__$1;(statearr_32839_32864[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 7))
{var inst_32823 = (state_32827[2]);var state_32827__$1 = state_32827;var statearr_32840_32865 = state_32827__$1;(statearr_32840_32865[2] = inst_32823);
(statearr_32840_32865[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 8))
{var inst_32791 = (state_32827[8]);var inst_32800 = (state_32827[10]);var tmp32837 = inst_32791;var inst_32791__$1 = tmp32837;var inst_32792 = inst_32800;var state_32827__$1 = (function (){var statearr_32841 = state_32827;(statearr_32841[7] = inst_32792);
(statearr_32841[8] = inst_32791__$1);
return statearr_32841;
})();var statearr_32842_32866 = state_32827__$1;(statearr_32842_32866[2] = null);
(statearr_32842_32866[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 9))
{var inst_32791 = (state_32827[8]);var inst_32805 = cljs.core.vec.call(null,inst_32791);var state_32827__$1 = state_32827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32827__$1,11,out,inst_32805);
} else
{if((state_val_32828 === 10))
{var inst_32811 = (state_32827[2]);var state_32827__$1 = state_32827;var statearr_32843_32867 = state_32827__$1;(statearr_32843_32867[2] = inst_32811);
(statearr_32843_32867[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 11))
{var inst_32807 = (state_32827[2]);var inst_32808 = (new Array(n));var inst_32791 = inst_32808;var inst_32792 = 0;var state_32827__$1 = (function (){var statearr_32844 = state_32827;(statearr_32844[7] = inst_32792);
(statearr_32844[8] = inst_32791);
(statearr_32844[12] = inst_32807);
return statearr_32844;
})();var statearr_32845_32868 = state_32827__$1;(statearr_32845_32868[2] = null);
(statearr_32845_32868[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 12))
{var inst_32791 = (state_32827[8]);var inst_32815 = cljs.core.vec.call(null,inst_32791);var state_32827__$1 = state_32827;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32827__$1,15,out,inst_32815);
} else
{if((state_val_32828 === 13))
{var state_32827__$1 = state_32827;var statearr_32846_32869 = state_32827__$1;(statearr_32846_32869[2] = null);
(statearr_32846_32869[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 14))
{var inst_32820 = (state_32827[2]);var inst_32821 = cljs.core.async.close_BANG_.call(null,out);var state_32827__$1 = (function (){var statearr_32847 = state_32827;(statearr_32847[13] = inst_32820);
return statearr_32847;
})();var statearr_32848_32870 = state_32827__$1;(statearr_32848_32870[2] = inst_32821);
(statearr_32848_32870[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32828 === 15))
{var inst_32817 = (state_32827[2]);var state_32827__$1 = state_32827;var statearr_32849_32871 = state_32827__$1;(statearr_32849_32871[2] = inst_32817);
(statearr_32849_32871[1] = 14);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_32853 = (new Array(14));(statearr_32853[0] = state_machine__5985__auto__);
(statearr_32853[1] = 1);
return statearr_32853;
});
var state_machine__5985__auto____1 = (function (state_32827){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_32827);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e32854){if((e32854 instanceof Object))
{var ex__5988__auto__ = e32854;var statearr_32855_32872 = state_32827;(statearr_32855_32872[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32827);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32854;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32873 = state_32827;
state_32827 = G__32873;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_32827){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_32827);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_32856 = f__6055__auto__.call(null);(statearr_32856[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___32857);
return statearr_32856;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__6054__auto___33016 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__6055__auto__ = (function (){var switch__5984__auto__ = (function (state_32986){var state_val_32987 = (state_32986[1]);if((state_val_32987 === 1))
{var inst_32945 = (new Array(0));var inst_32946 = inst_32945;var inst_32947 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_32986__$1 = (function (){var statearr_32988 = state_32986;(statearr_32988[7] = inst_32946);
(statearr_32988[8] = inst_32947);
return statearr_32988;
})();var statearr_32989_33017 = state_32986__$1;(statearr_32989_33017[2] = null);
(statearr_32989_33017[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 2))
{var state_32986__$1 = state_32986;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32986__$1,4,ch);
} else
{if((state_val_32987 === 3))
{var inst_32984 = (state_32986[2]);var state_32986__$1 = state_32986;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32986__$1,inst_32984);
} else
{if((state_val_32987 === 4))
{var inst_32950 = (state_32986[9]);var inst_32950__$1 = (state_32986[2]);var inst_32951 = (inst_32950__$1 == null);var inst_32952 = cljs.core.not.call(null,inst_32951);var state_32986__$1 = (function (){var statearr_32990 = state_32986;(statearr_32990[9] = inst_32950__$1);
return statearr_32990;
})();if(inst_32952)
{var statearr_32991_33018 = state_32986__$1;(statearr_32991_33018[1] = 5);
} else
{var statearr_32992_33019 = state_32986__$1;(statearr_32992_33019[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 5))
{var inst_32954 = (state_32986[10]);var inst_32950 = (state_32986[9]);var inst_32947 = (state_32986[8]);var inst_32954__$1 = f.call(null,inst_32950);var inst_32955 = cljs.core._EQ_.call(null,inst_32954__$1,inst_32947);var inst_32956 = cljs.core.keyword_identical_QMARK_.call(null,inst_32947,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_32957 = (inst_32955) || (inst_32956);var state_32986__$1 = (function (){var statearr_32993 = state_32986;(statearr_32993[10] = inst_32954__$1);
return statearr_32993;
})();if(cljs.core.truth_(inst_32957))
{var statearr_32994_33020 = state_32986__$1;(statearr_32994_33020[1] = 8);
} else
{var statearr_32995_33021 = state_32986__$1;(statearr_32995_33021[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 6))
{var inst_32946 = (state_32986[7]);var inst_32971 = inst_32946.length;var inst_32972 = (inst_32971 > 0);var state_32986__$1 = state_32986;if(cljs.core.truth_(inst_32972))
{var statearr_32997_33022 = state_32986__$1;(statearr_32997_33022[1] = 12);
} else
{var statearr_32998_33023 = state_32986__$1;(statearr_32998_33023[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 7))
{var inst_32982 = (state_32986[2]);var state_32986__$1 = state_32986;var statearr_32999_33024 = state_32986__$1;(statearr_32999_33024[2] = inst_32982);
(statearr_32999_33024[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 8))
{var inst_32954 = (state_32986[10]);var inst_32946 = (state_32986[7]);var inst_32950 = (state_32986[9]);var inst_32959 = inst_32946.push(inst_32950);var tmp32996 = inst_32946;var inst_32946__$1 = tmp32996;var inst_32947 = inst_32954;var state_32986__$1 = (function (){var statearr_33000 = state_32986;(statearr_33000[11] = inst_32959);
(statearr_33000[7] = inst_32946__$1);
(statearr_33000[8] = inst_32947);
return statearr_33000;
})();var statearr_33001_33025 = state_32986__$1;(statearr_33001_33025[2] = null);
(statearr_33001_33025[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 9))
{var inst_32946 = (state_32986[7]);var inst_32962 = cljs.core.vec.call(null,inst_32946);var state_32986__$1 = state_32986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32986__$1,11,out,inst_32962);
} else
{if((state_val_32987 === 10))
{var inst_32969 = (state_32986[2]);var state_32986__$1 = state_32986;var statearr_33002_33026 = state_32986__$1;(statearr_33002_33026[2] = inst_32969);
(statearr_33002_33026[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 11))
{var inst_32954 = (state_32986[10]);var inst_32950 = (state_32986[9]);var inst_32964 = (state_32986[2]);var inst_32965 = (new Array(0));var inst_32966 = inst_32965.push(inst_32950);var inst_32946 = inst_32965;var inst_32947 = inst_32954;var state_32986__$1 = (function (){var statearr_33003 = state_32986;(statearr_33003[12] = inst_32966);
(statearr_33003[13] = inst_32964);
(statearr_33003[7] = inst_32946);
(statearr_33003[8] = inst_32947);
return statearr_33003;
})();var statearr_33004_33027 = state_32986__$1;(statearr_33004_33027[2] = null);
(statearr_33004_33027[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 12))
{var inst_32946 = (state_32986[7]);var inst_32974 = cljs.core.vec.call(null,inst_32946);var state_32986__$1 = state_32986;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32986__$1,15,out,inst_32974);
} else
{if((state_val_32987 === 13))
{var state_32986__$1 = state_32986;var statearr_33005_33028 = state_32986__$1;(statearr_33005_33028[2] = null);
(statearr_33005_33028[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 14))
{var inst_32979 = (state_32986[2]);var inst_32980 = cljs.core.async.close_BANG_.call(null,out);var state_32986__$1 = (function (){var statearr_33006 = state_32986;(statearr_33006[14] = inst_32979);
return statearr_33006;
})();var statearr_33007_33029 = state_32986__$1;(statearr_33007_33029[2] = inst_32980);
(statearr_33007_33029[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32987 === 15))
{var inst_32976 = (state_32986[2]);var state_32986__$1 = state_32986;var statearr_33008_33030 = state_32986__$1;(statearr_33008_33030[2] = inst_32976);
(statearr_33008_33030[1] = 14);
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
});return ((function (switch__5984__auto__){
return (function() {
var state_machine__5985__auto__ = null;
var state_machine__5985__auto____0 = (function (){var statearr_33012 = (new Array(15));(statearr_33012[0] = state_machine__5985__auto__);
(statearr_33012[1] = 1);
return statearr_33012;
});
var state_machine__5985__auto____1 = (function (state_32986){while(true){
var ret_value__5986__auto__ = (function (){try{while(true){
var result__5987__auto__ = switch__5984__auto__.call(null,state_32986);if(cljs.core.keyword_identical_QMARK_.call(null,result__5987__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5987__auto__;
}
break;
}
}catch (e33013){if((e33013 instanceof Object))
{var ex__5988__auto__ = e33013;var statearr_33014_33031 = state_32986;(statearr_33014_33031[5] = ex__5988__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32986);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33013;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5986__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33032 = state_32986;
state_32986 = G__33032;
continue;
}
} else
{return ret_value__5986__auto__;
}
break;
}
});
state_machine__5985__auto__ = function(state_32986){
switch(arguments.length){
case 0:
return state_machine__5985__auto____0.call(this);
case 1:
return state_machine__5985__auto____1.call(this,state_32986);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5985__auto____0;
state_machine__5985__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5985__auto____1;
return state_machine__5985__auto__;
})()
;})(switch__5984__auto__))
})();var state__6056__auto__ = (function (){var statearr_33015 = f__6055__auto__.call(null);(statearr_33015[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__6054__auto___33016);
return statearr_33015;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__6056__auto__);
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
