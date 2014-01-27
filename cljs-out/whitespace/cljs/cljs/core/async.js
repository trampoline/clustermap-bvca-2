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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t32500 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32500 = (function (f,fn_handler,meta32501){
this.f = f;
this.fn_handler = fn_handler;
this.meta32501 = meta32501;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32500.cljs$lang$type = true;
cljs.core.async.t32500.cljs$lang$ctorStr = "cljs.core.async/t32500";
cljs.core.async.t32500.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32500");
});
cljs.core.async.t32500.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32500.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t32500.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t32500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32502){var self__ = this;
var _32502__$1 = this;return self__.meta32501;
});
cljs.core.async.t32500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32502,meta32501__$1){var self__ = this;
var _32502__$1 = this;return (new cljs.core.async.t32500(self__.f,self__.fn_handler,meta32501__$1));
});
cljs.core.async.__GT_t32500 = (function __GT_t32500(f__$1,fn_handler__$1,meta32501){return (new cljs.core.async.t32500(f__$1,fn_handler__$1,meta32501));
});
}
return (new cljs.core.async.t32500(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__32504 = buff;if(G__32504)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__32504.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__32504.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32504);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32504);
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
{var val_32505 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_32505);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_32505);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___32506 = n;var x_32507 = 0;while(true){
if((x_32507 < n__4248__auto___32506))
{(a[x_32507] = 0);
{
var G__32508 = (x_32507 + 1);
x_32507 = G__32508;
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
var G__32509 = (i + 1);
i = G__32509;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t32513 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32513 = (function (flag,alt_flag,meta32514){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32514 = meta32514;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32513.cljs$lang$type = true;
cljs.core.async.t32513.cljs$lang$ctorStr = "cljs.core.async/t32513";
cljs.core.async.t32513.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32513");
});
cljs.core.async.t32513.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32513.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t32513.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t32513.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32515){var self__ = this;
var _32515__$1 = this;return self__.meta32514;
});
cljs.core.async.t32513.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32515,meta32514__$1){var self__ = this;
var _32515__$1 = this;return (new cljs.core.async.t32513(self__.flag,self__.alt_flag,meta32514__$1));
});
cljs.core.async.__GT_t32513 = (function __GT_t32513(flag__$1,alt_flag__$1,meta32514){return (new cljs.core.async.t32513(flag__$1,alt_flag__$1,meta32514));
});
}
return (new cljs.core.async.t32513(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t32519 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32519 = (function (cb,flag,alt_handler,meta32520){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32520 = meta32520;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32519.cljs$lang$type = true;
cljs.core.async.t32519.cljs$lang$ctorStr = "cljs.core.async/t32519";
cljs.core.async.t32519.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32519");
});
cljs.core.async.t32519.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32519.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t32519.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t32519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32521){var self__ = this;
var _32521__$1 = this;return self__.meta32520;
});
cljs.core.async.t32519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32521,meta32520__$1){var self__ = this;
var _32521__$1 = this;return (new cljs.core.async.t32519(self__.cb,self__.flag,self__.alt_handler,meta32520__$1));
});
cljs.core.async.__GT_t32519 = (function __GT_t32519(cb__$1,flag__$1,alt_handler__$1,meta32520){return (new cljs.core.async.t32519(cb__$1,flag__$1,alt_handler__$1,meta32520));
});
}
return (new cljs.core.async.t32519(cb,flag,alt_handler,null));
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
return (function (p1__32522_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32522_SHARP_,port], null));
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
var G__32523 = (i + 1);
i = G__32523;
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
var alts_BANG___delegate = function (ports,p__32524){var map__32526 = p__32524;var map__32526__$1 = ((cljs.core.seq_QMARK_.call(null,map__32526))?cljs.core.apply.call(null,cljs.core.hash_map,map__32526):map__32526);var opts = map__32526__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__32524 = null;if (arguments.length > 1) {
  p__32524 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__32524);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32527){
var ports = cljs.core.first(arglist__32527);
var p__32524 = cljs.core.rest(arglist__32527);
return alts_BANG___delegate(ports,p__32524);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t32535 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32535 = (function (ch,f,map_LT_,meta32536){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32536 = meta32536;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32535.cljs$lang$type = true;
cljs.core.async.t32535.cljs$lang$ctorStr = "cljs.core.async/t32535";
cljs.core.async.t32535.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32535");
});
cljs.core.async.t32535.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32535.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t32535.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32535.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t32538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32538 = (function (fn1,_,meta32536,ch,f,map_LT_,meta32539){
this.fn1 = fn1;
this._ = _;
this.meta32536 = meta32536;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32539 = meta32539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32538.cljs$lang$type = true;
cljs.core.async.t32538.cljs$lang$ctorStr = "cljs.core.async/t32538";
cljs.core.async.t32538.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32538");
});
cljs.core.async.t32538.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t32538.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t32538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__32528_SHARP_){return f1.call(null,(((p1__32528_SHARP_ == null))?null:self__.f.call(null,p1__32528_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t32538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32540){var self__ = this;
var _32540__$1 = this;return self__.meta32539;
});
cljs.core.async.t32538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32540,meta32539__$1){var self__ = this;
var _32540__$1 = this;return (new cljs.core.async.t32538(self__.fn1,self__._,self__.meta32536,self__.ch,self__.f,self__.map_LT_,meta32539__$1));
});
cljs.core.async.__GT_t32538 = (function __GT_t32538(fn1__$1,___$2,meta32536__$1,ch__$2,f__$2,map_LT___$2,meta32539){return (new cljs.core.async.t32538(fn1__$1,___$2,meta32536__$1,ch__$2,f__$2,map_LT___$2,meta32539));
});
}
return (new cljs.core.async.t32538(fn1,___$1,self__.meta32536,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t32535.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32535.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32535.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32537){var self__ = this;
var _32537__$1 = this;return self__.meta32536;
});
cljs.core.async.t32535.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32537,meta32536__$1){var self__ = this;
var _32537__$1 = this;return (new cljs.core.async.t32535(self__.ch,self__.f,self__.map_LT_,meta32536__$1));
});
cljs.core.async.__GT_t32535 = (function __GT_t32535(ch__$1,f__$1,map_LT___$1,meta32536){return (new cljs.core.async.t32535(ch__$1,f__$1,map_LT___$1,meta32536));
});
}
return (new cljs.core.async.t32535(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t32544 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32544 = (function (ch,f,map_GT_,meta32545){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32545 = meta32545;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32544.cljs$lang$type = true;
cljs.core.async.t32544.cljs$lang$ctorStr = "cljs.core.async/t32544";
cljs.core.async.t32544.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32544");
});
cljs.core.async.t32544.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32544.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t32544.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32544.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32544.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32544.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32546){var self__ = this;
var _32546__$1 = this;return self__.meta32545;
});
cljs.core.async.t32544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32546,meta32545__$1){var self__ = this;
var _32546__$1 = this;return (new cljs.core.async.t32544(self__.ch,self__.f,self__.map_GT_,meta32545__$1));
});
cljs.core.async.__GT_t32544 = (function __GT_t32544(ch__$1,f__$1,map_GT___$1,meta32545){return (new cljs.core.async.t32544(ch__$1,f__$1,map_GT___$1,meta32545));
});
}
return (new cljs.core.async.t32544(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t32550 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32550 = (function (ch,p,filter_GT_,meta32551){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32551 = meta32551;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32550.cljs$lang$type = true;
cljs.core.async.t32550.cljs$lang$ctorStr = "cljs.core.async/t32550";
cljs.core.async.t32550.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32550");
});
cljs.core.async.t32550.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32550.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t32550.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32550.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32550.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32550.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32550.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32552){var self__ = this;
var _32552__$1 = this;return self__.meta32551;
});
cljs.core.async.t32550.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32552,meta32551__$1){var self__ = this;
var _32552__$1 = this;return (new cljs.core.async.t32550(self__.ch,self__.p,self__.filter_GT_,meta32551__$1));
});
cljs.core.async.__GT_t32550 = (function __GT_t32550(ch__$1,p__$1,filter_GT___$1,meta32551){return (new cljs.core.async.t32550(ch__$1,p__$1,filter_GT___$1,meta32551));
});
}
return (new cljs.core.async.t32550(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32635 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32614){var state_val_32615 = (state_32614[1]);if((state_val_32615 === 1))
{var state_32614__$1 = state_32614;var statearr_32616_32636 = state_32614__$1;(statearr_32616_32636[2] = null);
(statearr_32616_32636[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32615 === 2))
{var state_32614__$1 = state_32614;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32614__$1,4,ch);
} else
{if((state_val_32615 === 3))
{var inst_32612 = (state_32614[2]);var state_32614__$1 = state_32614;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32614__$1,inst_32612);
} else
{if((state_val_32615 === 4))
{var inst_32596 = (state_32614[7]);var inst_32596__$1 = (state_32614[2]);var inst_32597 = (inst_32596__$1 == null);var state_32614__$1 = (function (){var statearr_32617 = state_32614;(statearr_32617[7] = inst_32596__$1);
return statearr_32617;
})();if(cljs.core.truth_(inst_32597))
{var statearr_32618_32637 = state_32614__$1;(statearr_32618_32637[1] = 5);
} else
{var statearr_32619_32638 = state_32614__$1;(statearr_32619_32638[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32615 === 5))
{var inst_32599 = cljs.core.async.close_BANG_.call(null,out);var state_32614__$1 = state_32614;var statearr_32620_32639 = state_32614__$1;(statearr_32620_32639[2] = inst_32599);
(statearr_32620_32639[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32615 === 6))
{var inst_32596 = (state_32614[7]);var inst_32601 = p.call(null,inst_32596);var state_32614__$1 = state_32614;if(cljs.core.truth_(inst_32601))
{var statearr_32621_32640 = state_32614__$1;(statearr_32621_32640[1] = 8);
} else
{var statearr_32622_32641 = state_32614__$1;(statearr_32622_32641[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32615 === 7))
{var inst_32610 = (state_32614[2]);var state_32614__$1 = state_32614;var statearr_32623_32642 = state_32614__$1;(statearr_32623_32642[2] = inst_32610);
(statearr_32623_32642[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32615 === 8))
{var inst_32596 = (state_32614[7]);var state_32614__$1 = state_32614;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32614__$1,11,out,inst_32596);
} else
{if((state_val_32615 === 9))
{var state_32614__$1 = state_32614;var statearr_32624_32643 = state_32614__$1;(statearr_32624_32643[2] = null);
(statearr_32624_32643[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32615 === 10))
{var inst_32607 = (state_32614[2]);var state_32614__$1 = (function (){var statearr_32625 = state_32614;(statearr_32625[8] = inst_32607);
return statearr_32625;
})();var statearr_32626_32644 = state_32614__$1;(statearr_32626_32644[2] = null);
(statearr_32626_32644[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32615 === 11))
{var inst_32604 = (state_32614[2]);var state_32614__$1 = state_32614;var statearr_32627_32645 = state_32614__$1;(statearr_32627_32645[2] = inst_32604);
(statearr_32627_32645[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_32631 = [null,null,null,null,null,null,null,null,null];(statearr_32631[0] = state_machine__5507__auto__);
(statearr_32631[1] = 1);
return statearr_32631;
});
var state_machine__5507__auto____1 = (function (state_32614){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32614);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32632){if((e32632 instanceof Object))
{var ex__5510__auto__ = e32632;var statearr_32633_32646 = state_32614;(statearr_32633_32646[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32614);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32632;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32647 = state_32614;
state_32614 = G__32647;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32614){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32614);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32634 = f__5522__auto__.call(null);(statearr_32634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32635);
return statearr_32634;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32799){var state_val_32800 = (state_32799[1]);if((state_val_32800 === 1))
{var state_32799__$1 = state_32799;var statearr_32801_32838 = state_32799__$1;(statearr_32801_32838[2] = null);
(statearr_32801_32838[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 2))
{var state_32799__$1 = state_32799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32799__$1,4,in$);
} else
{if((state_val_32800 === 3))
{var inst_32797 = (state_32799[2]);var state_32799__$1 = state_32799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32799__$1,inst_32797);
} else
{if((state_val_32800 === 4))
{var inst_32745 = (state_32799[7]);var inst_32745__$1 = (state_32799[2]);var inst_32746 = (inst_32745__$1 == null);var state_32799__$1 = (function (){var statearr_32802 = state_32799;(statearr_32802[7] = inst_32745__$1);
return statearr_32802;
})();if(cljs.core.truth_(inst_32746))
{var statearr_32803_32839 = state_32799__$1;(statearr_32803_32839[1] = 5);
} else
{var statearr_32804_32840 = state_32799__$1;(statearr_32804_32840[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 5))
{var inst_32748 = cljs.core.async.close_BANG_.call(null,out);var state_32799__$1 = state_32799;var statearr_32805_32841 = state_32799__$1;(statearr_32805_32841[2] = inst_32748);
(statearr_32805_32841[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 6))
{var inst_32745 = (state_32799[7]);var inst_32750 = f.call(null,inst_32745);var inst_32755 = cljs.core.seq.call(null,inst_32750);var inst_32756 = inst_32755;var inst_32757 = null;var inst_32758 = 0;var inst_32759 = 0;var state_32799__$1 = (function (){var statearr_32806 = state_32799;(statearr_32806[8] = inst_32757);
(statearr_32806[9] = inst_32756);
(statearr_32806[10] = inst_32759);
(statearr_32806[11] = inst_32758);
return statearr_32806;
})();var statearr_32807_32842 = state_32799__$1;(statearr_32807_32842[2] = null);
(statearr_32807_32842[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 7))
{var inst_32795 = (state_32799[2]);var state_32799__$1 = state_32799;var statearr_32808_32843 = state_32799__$1;(statearr_32808_32843[2] = inst_32795);
(statearr_32808_32843[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 8))
{var inst_32759 = (state_32799[10]);var inst_32758 = (state_32799[11]);var inst_32761 = (inst_32759 < inst_32758);var inst_32762 = inst_32761;var state_32799__$1 = state_32799;if(cljs.core.truth_(inst_32762))
{var statearr_32809_32844 = state_32799__$1;(statearr_32809_32844[1] = 10);
} else
{var statearr_32810_32845 = state_32799__$1;(statearr_32810_32845[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 9))
{var inst_32792 = (state_32799[2]);var state_32799__$1 = (function (){var statearr_32811 = state_32799;(statearr_32811[12] = inst_32792);
return statearr_32811;
})();var statearr_32812_32846 = state_32799__$1;(statearr_32812_32846[2] = null);
(statearr_32812_32846[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 10))
{var inst_32757 = (state_32799[8]);var inst_32759 = (state_32799[10]);var inst_32764 = cljs.core._nth.call(null,inst_32757,inst_32759);var state_32799__$1 = state_32799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32799__$1,13,out,inst_32764);
} else
{if((state_val_32800 === 11))
{var inst_32756 = (state_32799[9]);var inst_32770 = (state_32799[13]);var inst_32770__$1 = cljs.core.seq.call(null,inst_32756);var state_32799__$1 = (function (){var statearr_32816 = state_32799;(statearr_32816[13] = inst_32770__$1);
return statearr_32816;
})();if(inst_32770__$1)
{var statearr_32817_32847 = state_32799__$1;(statearr_32817_32847[1] = 14);
} else
{var statearr_32818_32848 = state_32799__$1;(statearr_32818_32848[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 12))
{var inst_32790 = (state_32799[2]);var state_32799__$1 = state_32799;var statearr_32819_32849 = state_32799__$1;(statearr_32819_32849[2] = inst_32790);
(statearr_32819_32849[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 13))
{var inst_32757 = (state_32799[8]);var inst_32756 = (state_32799[9]);var inst_32759 = (state_32799[10]);var inst_32758 = (state_32799[11]);var inst_32766 = (state_32799[2]);var inst_32767 = (inst_32759 + 1);var tmp32813 = inst_32757;var tmp32814 = inst_32756;var tmp32815 = inst_32758;var inst_32756__$1 = tmp32814;var inst_32757__$1 = tmp32813;var inst_32758__$1 = tmp32815;var inst_32759__$1 = inst_32767;var state_32799__$1 = (function (){var statearr_32820 = state_32799;(statearr_32820[8] = inst_32757__$1);
(statearr_32820[9] = inst_32756__$1);
(statearr_32820[10] = inst_32759__$1);
(statearr_32820[11] = inst_32758__$1);
(statearr_32820[14] = inst_32766);
return statearr_32820;
})();var statearr_32821_32850 = state_32799__$1;(statearr_32821_32850[2] = null);
(statearr_32821_32850[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 14))
{var inst_32770 = (state_32799[13]);var inst_32772 = cljs.core.chunked_seq_QMARK_.call(null,inst_32770);var state_32799__$1 = state_32799;if(inst_32772)
{var statearr_32822_32851 = state_32799__$1;(statearr_32822_32851[1] = 17);
} else
{var statearr_32823_32852 = state_32799__$1;(statearr_32823_32852[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 15))
{var state_32799__$1 = state_32799;var statearr_32824_32853 = state_32799__$1;(statearr_32824_32853[2] = null);
(statearr_32824_32853[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 16))
{var inst_32788 = (state_32799[2]);var state_32799__$1 = state_32799;var statearr_32825_32854 = state_32799__$1;(statearr_32825_32854[2] = inst_32788);
(statearr_32825_32854[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 17))
{var inst_32770 = (state_32799[13]);var inst_32774 = cljs.core.chunk_first.call(null,inst_32770);var inst_32775 = cljs.core.chunk_rest.call(null,inst_32770);var inst_32776 = cljs.core.count.call(null,inst_32774);var inst_32756 = inst_32775;var inst_32757 = inst_32774;var inst_32758 = inst_32776;var inst_32759 = 0;var state_32799__$1 = (function (){var statearr_32826 = state_32799;(statearr_32826[8] = inst_32757);
(statearr_32826[9] = inst_32756);
(statearr_32826[10] = inst_32759);
(statearr_32826[11] = inst_32758);
return statearr_32826;
})();var statearr_32827_32855 = state_32799__$1;(statearr_32827_32855[2] = null);
(statearr_32827_32855[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 18))
{var inst_32770 = (state_32799[13]);var inst_32779 = cljs.core.first.call(null,inst_32770);var state_32799__$1 = state_32799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32799__$1,20,out,inst_32779);
} else
{if((state_val_32800 === 19))
{var inst_32785 = (state_32799[2]);var state_32799__$1 = state_32799;var statearr_32828_32856 = state_32799__$1;(statearr_32828_32856[2] = inst_32785);
(statearr_32828_32856[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32800 === 20))
{var inst_32770 = (state_32799[13]);var inst_32781 = (state_32799[2]);var inst_32782 = cljs.core.next.call(null,inst_32770);var inst_32756 = inst_32782;var inst_32757 = null;var inst_32758 = 0;var inst_32759 = 0;var state_32799__$1 = (function (){var statearr_32829 = state_32799;(statearr_32829[8] = inst_32757);
(statearr_32829[9] = inst_32756);
(statearr_32829[10] = inst_32759);
(statearr_32829[11] = inst_32758);
(statearr_32829[15] = inst_32781);
return statearr_32829;
})();var statearr_32830_32857 = state_32799__$1;(statearr_32830_32857[2] = null);
(statearr_32830_32857[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_32834 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32834[0] = state_machine__5507__auto__);
(statearr_32834[1] = 1);
return statearr_32834;
});
var state_machine__5507__auto____1 = (function (state_32799){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32799);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32835){if((e32835 instanceof Object))
{var ex__5510__auto__ = e32835;var statearr_32836_32858 = state_32799;(statearr_32836_32858[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32799);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32835;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32859 = state_32799;
state_32799 = G__32859;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32799){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32837 = f__5522__auto__.call(null);(statearr_32837[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32837;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___32940 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32919){var state_val_32920 = (state_32919[1]);if((state_val_32920 === 1))
{var state_32919__$1 = state_32919;var statearr_32921_32941 = state_32919__$1;(statearr_32921_32941[2] = null);
(statearr_32921_32941[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32920 === 2))
{var state_32919__$1 = state_32919;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32919__$1,4,from);
} else
{if((state_val_32920 === 3))
{var inst_32917 = (state_32919[2]);var state_32919__$1 = state_32919;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32919__$1,inst_32917);
} else
{if((state_val_32920 === 4))
{var inst_32902 = (state_32919[7]);var inst_32902__$1 = (state_32919[2]);var inst_32903 = (inst_32902__$1 == null);var state_32919__$1 = (function (){var statearr_32922 = state_32919;(statearr_32922[7] = inst_32902__$1);
return statearr_32922;
})();if(cljs.core.truth_(inst_32903))
{var statearr_32923_32942 = state_32919__$1;(statearr_32923_32942[1] = 5);
} else
{var statearr_32924_32943 = state_32919__$1;(statearr_32924_32943[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32920 === 5))
{var state_32919__$1 = state_32919;if(cljs.core.truth_(close_QMARK_))
{var statearr_32925_32944 = state_32919__$1;(statearr_32925_32944[1] = 8);
} else
{var statearr_32926_32945 = state_32919__$1;(statearr_32926_32945[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32920 === 6))
{var inst_32902 = (state_32919[7]);var state_32919__$1 = state_32919;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32919__$1,11,to,inst_32902);
} else
{if((state_val_32920 === 7))
{var inst_32915 = (state_32919[2]);var state_32919__$1 = state_32919;var statearr_32927_32946 = state_32919__$1;(statearr_32927_32946[2] = inst_32915);
(statearr_32927_32946[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32920 === 8))
{var inst_32906 = cljs.core.async.close_BANG_.call(null,to);var state_32919__$1 = state_32919;var statearr_32928_32947 = state_32919__$1;(statearr_32928_32947[2] = inst_32906);
(statearr_32928_32947[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32920 === 9))
{var state_32919__$1 = state_32919;var statearr_32929_32948 = state_32919__$1;(statearr_32929_32948[2] = null);
(statearr_32929_32948[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32920 === 10))
{var inst_32909 = (state_32919[2]);var state_32919__$1 = state_32919;var statearr_32930_32949 = state_32919__$1;(statearr_32930_32949[2] = inst_32909);
(statearr_32930_32949[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32920 === 11))
{var inst_32912 = (state_32919[2]);var state_32919__$1 = (function (){var statearr_32931 = state_32919;(statearr_32931[8] = inst_32912);
return statearr_32931;
})();var statearr_32932_32950 = state_32919__$1;(statearr_32932_32950[2] = null);
(statearr_32932_32950[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32936 = [null,null,null,null,null,null,null,null,null];(statearr_32936[0] = state_machine__5507__auto__);
(statearr_32936[1] = 1);
return statearr_32936;
});
var state_machine__5507__auto____1 = (function (state_32919){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32919);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32937){if((e32937 instanceof Object))
{var ex__5510__auto__ = e32937;var statearr_32938_32951 = state_32919;(statearr_32938_32951[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32919);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32937;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32952 = state_32919;
state_32919 = G__32952;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32919){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32919);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32939 = f__5522__auto__.call(null);(statearr_32939[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32940);
return statearr_32939;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33017){var state_val_33018 = (state_33017[1]);if((state_val_33018 === 1))
{var state_33017__$1 = state_33017;var statearr_33019_33040 = state_33017__$1;(statearr_33019_33040[2] = null);
(statearr_33019_33040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33018 === 2))
{var state_33017__$1 = state_33017;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33017__$1,4,ch);
} else
{if((state_val_33018 === 3))
{var inst_33015 = (state_33017[2]);var state_33017__$1 = state_33017;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33017__$1,inst_33015);
} else
{if((state_val_33018 === 4))
{var inst_32998 = (state_33017[7]);var inst_32998__$1 = (state_33017[2]);var inst_32999 = (inst_32998__$1 == null);var state_33017__$1 = (function (){var statearr_33020 = state_33017;(statearr_33020[7] = inst_32998__$1);
return statearr_33020;
})();if(cljs.core.truth_(inst_32999))
{var statearr_33021_33041 = state_33017__$1;(statearr_33021_33041[1] = 5);
} else
{var statearr_33022_33042 = state_33017__$1;(statearr_33022_33042[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33018 === 5))
{var inst_33001 = cljs.core.async.close_BANG_.call(null,tc);var inst_33002 = cljs.core.async.close_BANG_.call(null,fc);var state_33017__$1 = (function (){var statearr_33023 = state_33017;(statearr_33023[8] = inst_33001);
return statearr_33023;
})();var statearr_33024_33043 = state_33017__$1;(statearr_33024_33043[2] = inst_33002);
(statearr_33024_33043[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33018 === 6))
{var inst_32998 = (state_33017[7]);var inst_33004 = p.call(null,inst_32998);var state_33017__$1 = state_33017;if(cljs.core.truth_(inst_33004))
{var statearr_33025_33044 = state_33017__$1;(statearr_33025_33044[1] = 9);
} else
{var statearr_33026_33045 = state_33017__$1;(statearr_33026_33045[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33018 === 7))
{var inst_33013 = (state_33017[2]);var state_33017__$1 = state_33017;var statearr_33027_33046 = state_33017__$1;(statearr_33027_33046[2] = inst_33013);
(statearr_33027_33046[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33018 === 8))
{var inst_33010 = (state_33017[2]);var state_33017__$1 = (function (){var statearr_33028 = state_33017;(statearr_33028[9] = inst_33010);
return statearr_33028;
})();var statearr_33029_33047 = state_33017__$1;(statearr_33029_33047[2] = null);
(statearr_33029_33047[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33018 === 9))
{var state_33017__$1 = state_33017;var statearr_33030_33048 = state_33017__$1;(statearr_33030_33048[2] = tc);
(statearr_33030_33048[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33018 === 10))
{var state_33017__$1 = state_33017;var statearr_33031_33049 = state_33017__$1;(statearr_33031_33049[2] = fc);
(statearr_33031_33049[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33018 === 11))
{var inst_32998 = (state_33017[7]);var inst_33008 = (state_33017[2]);var state_33017__$1 = state_33017;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33017__$1,8,inst_33008,inst_32998);
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
var state_machine__5507__auto____0 = (function (){var statearr_33035 = [null,null,null,null,null,null,null,null,null,null];(statearr_33035[0] = state_machine__5507__auto__);
(statearr_33035[1] = 1);
return statearr_33035;
});
var state_machine__5507__auto____1 = (function (state_33017){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33017);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33036){if((e33036 instanceof Object))
{var ex__5510__auto__ = e33036;var statearr_33037_33050 = state_33017;(statearr_33037_33050[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33017);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33051 = state_33017;
state_33017 = G__33051;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33017){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33017);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33038 = f__5522__auto__.call(null);(statearr_33038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33039);
return statearr_33038;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33098){var state_val_33099 = (state_33098[1]);if((state_val_33099 === 7))
{var inst_33094 = (state_33098[2]);var state_33098__$1 = state_33098;var statearr_33100_33116 = state_33098__$1;(statearr_33100_33116[2] = inst_33094);
(statearr_33100_33116[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33099 === 6))
{var inst_33087 = (state_33098[7]);var inst_33084 = (state_33098[8]);var inst_33091 = f.call(null,inst_33084,inst_33087);var inst_33084__$1 = inst_33091;var state_33098__$1 = (function (){var statearr_33101 = state_33098;(statearr_33101[8] = inst_33084__$1);
return statearr_33101;
})();var statearr_33102_33117 = state_33098__$1;(statearr_33102_33117[2] = null);
(statearr_33102_33117[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33099 === 5))
{var inst_33084 = (state_33098[8]);var state_33098__$1 = state_33098;var statearr_33103_33118 = state_33098__$1;(statearr_33103_33118[2] = inst_33084);
(statearr_33103_33118[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33099 === 4))
{var inst_33087 = (state_33098[7]);var inst_33087__$1 = (state_33098[2]);var inst_33088 = (inst_33087__$1 == null);var state_33098__$1 = (function (){var statearr_33104 = state_33098;(statearr_33104[7] = inst_33087__$1);
return statearr_33104;
})();if(cljs.core.truth_(inst_33088))
{var statearr_33105_33119 = state_33098__$1;(statearr_33105_33119[1] = 5);
} else
{var statearr_33106_33120 = state_33098__$1;(statearr_33106_33120[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33099 === 3))
{var inst_33096 = (state_33098[2]);var state_33098__$1 = state_33098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33098__$1,inst_33096);
} else
{if((state_val_33099 === 2))
{var state_33098__$1 = state_33098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33098__$1,4,ch);
} else
{if((state_val_33099 === 1))
{var inst_33084 = init;var state_33098__$1 = (function (){var statearr_33107 = state_33098;(statearr_33107[8] = inst_33084);
return statearr_33107;
})();var statearr_33108_33121 = state_33098__$1;(statearr_33108_33121[2] = null);
(statearr_33108_33121[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33112 = [null,null,null,null,null,null,null,null,null];(statearr_33112[0] = state_machine__5507__auto__);
(statearr_33112[1] = 1);
return statearr_33112;
});
var state_machine__5507__auto____1 = (function (state_33098){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33098);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33113){if((e33113 instanceof Object))
{var ex__5510__auto__ = e33113;var statearr_33114_33122 = state_33098;(statearr_33114_33122[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33113;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33123 = state_33098;
state_33098 = G__33123;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33098){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33115 = f__5522__auto__.call(null);(statearr_33115[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33115;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33185){var state_val_33186 = (state_33185[1]);if((state_val_33186 === 1))
{var inst_33165 = cljs.core.seq.call(null,coll);var inst_33166 = inst_33165;var state_33185__$1 = (function (){var statearr_33187 = state_33185;(statearr_33187[7] = inst_33166);
return statearr_33187;
})();var statearr_33188_33206 = state_33185__$1;(statearr_33188_33206[2] = null);
(statearr_33188_33206[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33186 === 2))
{var inst_33166 = (state_33185[7]);var state_33185__$1 = state_33185;if(cljs.core.truth_(inst_33166))
{var statearr_33189_33207 = state_33185__$1;(statearr_33189_33207[1] = 4);
} else
{var statearr_33190_33208 = state_33185__$1;(statearr_33190_33208[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33186 === 3))
{var inst_33183 = (state_33185[2]);var state_33185__$1 = state_33185;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33185__$1,inst_33183);
} else
{if((state_val_33186 === 4))
{var inst_33166 = (state_33185[7]);var inst_33169 = cljs.core.first.call(null,inst_33166);var state_33185__$1 = state_33185;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33185__$1,7,ch,inst_33169);
} else
{if((state_val_33186 === 5))
{var state_33185__$1 = state_33185;if(cljs.core.truth_(close_QMARK_))
{var statearr_33191_33209 = state_33185__$1;(statearr_33191_33209[1] = 8);
} else
{var statearr_33192_33210 = state_33185__$1;(statearr_33192_33210[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33186 === 6))
{var inst_33181 = (state_33185[2]);var state_33185__$1 = state_33185;var statearr_33193_33211 = state_33185__$1;(statearr_33193_33211[2] = inst_33181);
(statearr_33193_33211[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33186 === 7))
{var inst_33166 = (state_33185[7]);var inst_33171 = (state_33185[2]);var inst_33172 = cljs.core.next.call(null,inst_33166);var inst_33166__$1 = inst_33172;var state_33185__$1 = (function (){var statearr_33194 = state_33185;(statearr_33194[7] = inst_33166__$1);
(statearr_33194[8] = inst_33171);
return statearr_33194;
})();var statearr_33195_33212 = state_33185__$1;(statearr_33195_33212[2] = null);
(statearr_33195_33212[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33186 === 8))
{var inst_33176 = cljs.core.async.close_BANG_.call(null,ch);var state_33185__$1 = state_33185;var statearr_33196_33213 = state_33185__$1;(statearr_33196_33213[2] = inst_33176);
(statearr_33196_33213[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33186 === 9))
{var state_33185__$1 = state_33185;var statearr_33197_33214 = state_33185__$1;(statearr_33197_33214[2] = null);
(statearr_33197_33214[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33186 === 10))
{var inst_33179 = (state_33185[2]);var state_33185__$1 = state_33185;var statearr_33198_33215 = state_33185__$1;(statearr_33198_33215[2] = inst_33179);
(statearr_33198_33215[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_33202 = [null,null,null,null,null,null,null,null,null];(statearr_33202[0] = state_machine__5507__auto__);
(statearr_33202[1] = 1);
return statearr_33202;
});
var state_machine__5507__auto____1 = (function (state_33185){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33185);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33203){if((e33203 instanceof Object))
{var ex__5510__auto__ = e33203;var statearr_33204_33216 = state_33185;(statearr_33204_33216[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33185);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33203;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33217 = state_33185;
state_33185 = G__33217;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33185){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33185);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33205 = f__5522__auto__.call(null);(statearr_33205[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33205;
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
cljs.core.async.Mux = (function (){var obj33219 = {};return obj33219;
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
cljs.core.async.Mult = (function (){var obj33221 = {};return obj33221;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t33445 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33445 = (function (cs,ch,mult,meta33446){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33446 = meta33446;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33445.cljs$lang$type = true;
cljs.core.async.t33445.cljs$lang$ctorStr = "cljs.core.async/t33445";
cljs.core.async.t33445.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33445");
});})(cs))
;
cljs.core.async.t33445.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t33445.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t33445.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t33445.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t33445.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33445.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t33445.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33447){var self__ = this;
var _33447__$1 = this;return self__.meta33446;
});})(cs))
;
cljs.core.async.t33445.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33447,meta33446__$1){var self__ = this;
var _33447__$1 = this;return (new cljs.core.async.t33445(self__.cs,self__.ch,self__.mult,meta33446__$1));
});})(cs))
;
cljs.core.async.__GT_t33445 = ((function (cs){
return (function __GT_t33445(cs__$1,ch__$1,mult__$1,meta33446){return (new cljs.core.async.t33445(cs__$1,ch__$1,mult__$1,meta33446));
});})(cs))
;
}
return (new cljs.core.async.t33445(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___33668 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33582){var state_val_33583 = (state_33582[1]);if((state_val_33583 === 32))
{var inst_33526 = (state_33582[7]);var inst_33450 = (state_33582[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33582,31,Object,null,30);var inst_33533 = cljs.core.async.put_BANG_.call(null,inst_33526,inst_33450,done);var state_33582__$1 = state_33582;var statearr_33584_33669 = state_33582__$1;(statearr_33584_33669[2] = inst_33533);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33582__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 1))
{var state_33582__$1 = state_33582;var statearr_33585_33670 = state_33582__$1;(statearr_33585_33670[2] = null);
(statearr_33585_33670[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 33))
{var inst_33539 = (state_33582[9]);var inst_33541 = cljs.core.chunked_seq_QMARK_.call(null,inst_33539);var state_33582__$1 = state_33582;if(inst_33541)
{var statearr_33586_33671 = state_33582__$1;(statearr_33586_33671[1] = 36);
} else
{var statearr_33587_33672 = state_33582__$1;(statearr_33587_33672[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 2))
{var state_33582__$1 = state_33582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33582__$1,4,ch);
} else
{if((state_val_33583 === 34))
{var state_33582__$1 = state_33582;var statearr_33588_33673 = state_33582__$1;(statearr_33588_33673[2] = null);
(statearr_33588_33673[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 3))
{var inst_33580 = (state_33582[2]);var state_33582__$1 = state_33582;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33582__$1,inst_33580);
} else
{if((state_val_33583 === 35))
{var inst_33564 = (state_33582[2]);var state_33582__$1 = state_33582;var statearr_33589_33674 = state_33582__$1;(statearr_33589_33674[2] = inst_33564);
(statearr_33589_33674[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 4))
{var inst_33450 = (state_33582[8]);var inst_33450__$1 = (state_33582[2]);var inst_33451 = (inst_33450__$1 == null);var state_33582__$1 = (function (){var statearr_33590 = state_33582;(statearr_33590[8] = inst_33450__$1);
return statearr_33590;
})();if(cljs.core.truth_(inst_33451))
{var statearr_33591_33675 = state_33582__$1;(statearr_33591_33675[1] = 5);
} else
{var statearr_33592_33676 = state_33582__$1;(statearr_33592_33676[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 36))
{var inst_33539 = (state_33582[9]);var inst_33543 = cljs.core.chunk_first.call(null,inst_33539);var inst_33544 = cljs.core.chunk_rest.call(null,inst_33539);var inst_33545 = cljs.core.count.call(null,inst_33543);var inst_33518 = inst_33544;var inst_33519 = inst_33543;var inst_33520 = inst_33545;var inst_33521 = 0;var state_33582__$1 = (function (){var statearr_33593 = state_33582;(statearr_33593[10] = inst_33521);
(statearr_33593[11] = inst_33520);
(statearr_33593[12] = inst_33518);
(statearr_33593[13] = inst_33519);
return statearr_33593;
})();var statearr_33594_33677 = state_33582__$1;(statearr_33594_33677[2] = null);
(statearr_33594_33677[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 5))
{var inst_33457 = cljs.core.deref.call(null,cs);var inst_33458 = cljs.core.seq.call(null,inst_33457);var inst_33459 = inst_33458;var inst_33460 = null;var inst_33461 = 0;var inst_33462 = 0;var state_33582__$1 = (function (){var statearr_33595 = state_33582;(statearr_33595[14] = inst_33459);
(statearr_33595[15] = inst_33461);
(statearr_33595[16] = inst_33462);
(statearr_33595[17] = inst_33460);
return statearr_33595;
})();var statearr_33596_33678 = state_33582__$1;(statearr_33596_33678[2] = null);
(statearr_33596_33678[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 37))
{var inst_33539 = (state_33582[9]);var inst_33548 = cljs.core.first.call(null,inst_33539);var state_33582__$1 = (function (){var statearr_33597 = state_33582;(statearr_33597[18] = inst_33548);
return statearr_33597;
})();var statearr_33598_33679 = state_33582__$1;(statearr_33598_33679[2] = null);
(statearr_33598_33679[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 6))
{var inst_33510 = (state_33582[19]);var inst_33509 = cljs.core.deref.call(null,cs);var inst_33510__$1 = cljs.core.keys.call(null,inst_33509);var inst_33511 = cljs.core.count.call(null,inst_33510__$1);var inst_33512 = cljs.core.reset_BANG_.call(null,dctr,inst_33511);var inst_33517 = cljs.core.seq.call(null,inst_33510__$1);var inst_33518 = inst_33517;var inst_33519 = null;var inst_33520 = 0;var inst_33521 = 0;var state_33582__$1 = (function (){var statearr_33599 = state_33582;(statearr_33599[10] = inst_33521);
(statearr_33599[11] = inst_33520);
(statearr_33599[20] = inst_33512);
(statearr_33599[19] = inst_33510__$1);
(statearr_33599[12] = inst_33518);
(statearr_33599[13] = inst_33519);
return statearr_33599;
})();var statearr_33600_33680 = state_33582__$1;(statearr_33600_33680[2] = null);
(statearr_33600_33680[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 38))
{var inst_33561 = (state_33582[2]);var state_33582__$1 = state_33582;var statearr_33601_33681 = state_33582__$1;(statearr_33601_33681[2] = inst_33561);
(statearr_33601_33681[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 7))
{var inst_33578 = (state_33582[2]);var state_33582__$1 = state_33582;var statearr_33602_33682 = state_33582__$1;(statearr_33602_33682[2] = inst_33578);
(statearr_33602_33682[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 39))
{var inst_33539 = (state_33582[9]);var inst_33557 = (state_33582[2]);var inst_33558 = cljs.core.next.call(null,inst_33539);var inst_33518 = inst_33558;var inst_33519 = null;var inst_33520 = 0;var inst_33521 = 0;var state_33582__$1 = (function (){var statearr_33603 = state_33582;(statearr_33603[10] = inst_33521);
(statearr_33603[11] = inst_33520);
(statearr_33603[21] = inst_33557);
(statearr_33603[12] = inst_33518);
(statearr_33603[13] = inst_33519);
return statearr_33603;
})();var statearr_33604_33683 = state_33582__$1;(statearr_33604_33683[2] = null);
(statearr_33604_33683[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 8))
{var inst_33461 = (state_33582[15]);var inst_33462 = (state_33582[16]);var inst_33464 = (inst_33462 < inst_33461);var inst_33465 = inst_33464;var state_33582__$1 = state_33582;if(cljs.core.truth_(inst_33465))
{var statearr_33605_33684 = state_33582__$1;(statearr_33605_33684[1] = 10);
} else
{var statearr_33606_33685 = state_33582__$1;(statearr_33606_33685[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 40))
{var inst_33548 = (state_33582[18]);var inst_33549 = (state_33582[2]);var inst_33550 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33551 = cljs.core.async.untap_STAR_.call(null,m,inst_33548);var state_33582__$1 = (function (){var statearr_33607 = state_33582;(statearr_33607[22] = inst_33550);
(statearr_33607[23] = inst_33549);
return statearr_33607;
})();var statearr_33608_33686 = state_33582__$1;(statearr_33608_33686[2] = inst_33551);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33582__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 9))
{var inst_33507 = (state_33582[2]);var state_33582__$1 = state_33582;var statearr_33609_33687 = state_33582__$1;(statearr_33609_33687[2] = inst_33507);
(statearr_33609_33687[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 41))
{var inst_33450 = (state_33582[8]);var inst_33548 = (state_33582[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33582,40,Object,null,39);var inst_33555 = cljs.core.async.put_BANG_.call(null,inst_33548,inst_33450,done);var state_33582__$1 = state_33582;var statearr_33610_33688 = state_33582__$1;(statearr_33610_33688[2] = inst_33555);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33582__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 10))
{var inst_33462 = (state_33582[16]);var inst_33460 = (state_33582[17]);var inst_33468 = cljs.core._nth.call(null,inst_33460,inst_33462);var inst_33469 = cljs.core.nth.call(null,inst_33468,0,null);var inst_33470 = cljs.core.nth.call(null,inst_33468,1,null);var state_33582__$1 = (function (){var statearr_33611 = state_33582;(statearr_33611[24] = inst_33469);
return statearr_33611;
})();if(cljs.core.truth_(inst_33470))
{var statearr_33612_33689 = state_33582__$1;(statearr_33612_33689[1] = 13);
} else
{var statearr_33613_33690 = state_33582__$1;(statearr_33613_33690[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 42))
{var state_33582__$1 = state_33582;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33582__$1,45,dchan);
} else
{if((state_val_33583 === 11))
{var inst_33479 = (state_33582[25]);var inst_33459 = (state_33582[14]);var inst_33479__$1 = cljs.core.seq.call(null,inst_33459);var state_33582__$1 = (function (){var statearr_33614 = state_33582;(statearr_33614[25] = inst_33479__$1);
return statearr_33614;
})();if(inst_33479__$1)
{var statearr_33615_33691 = state_33582__$1;(statearr_33615_33691[1] = 16);
} else
{var statearr_33616_33692 = state_33582__$1;(statearr_33616_33692[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 43))
{var state_33582__$1 = state_33582;var statearr_33617_33693 = state_33582__$1;(statearr_33617_33693[2] = null);
(statearr_33617_33693[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 12))
{var inst_33505 = (state_33582[2]);var state_33582__$1 = state_33582;var statearr_33618_33694 = state_33582__$1;(statearr_33618_33694[2] = inst_33505);
(statearr_33618_33694[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 44))
{var inst_33575 = (state_33582[2]);var state_33582__$1 = (function (){var statearr_33619 = state_33582;(statearr_33619[26] = inst_33575);
return statearr_33619;
})();var statearr_33620_33695 = state_33582__$1;(statearr_33620_33695[2] = null);
(statearr_33620_33695[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 13))
{var inst_33469 = (state_33582[24]);var inst_33472 = cljs.core.async.close_BANG_.call(null,inst_33469);var state_33582__$1 = state_33582;var statearr_33621_33696 = state_33582__$1;(statearr_33621_33696[2] = inst_33472);
(statearr_33621_33696[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 45))
{var inst_33572 = (state_33582[2]);var state_33582__$1 = state_33582;var statearr_33625_33697 = state_33582__$1;(statearr_33625_33697[2] = inst_33572);
(statearr_33625_33697[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 14))
{var state_33582__$1 = state_33582;var statearr_33626_33698 = state_33582__$1;(statearr_33626_33698[2] = null);
(statearr_33626_33698[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 15))
{var inst_33459 = (state_33582[14]);var inst_33461 = (state_33582[15]);var inst_33462 = (state_33582[16]);var inst_33460 = (state_33582[17]);var inst_33475 = (state_33582[2]);var inst_33476 = (inst_33462 + 1);var tmp33622 = inst_33459;var tmp33623 = inst_33461;var tmp33624 = inst_33460;var inst_33459__$1 = tmp33622;var inst_33460__$1 = tmp33624;var inst_33461__$1 = tmp33623;var inst_33462__$1 = inst_33476;var state_33582__$1 = (function (){var statearr_33627 = state_33582;(statearr_33627[27] = inst_33475);
(statearr_33627[14] = inst_33459__$1);
(statearr_33627[15] = inst_33461__$1);
(statearr_33627[16] = inst_33462__$1);
(statearr_33627[17] = inst_33460__$1);
return statearr_33627;
})();var statearr_33628_33699 = state_33582__$1;(statearr_33628_33699[2] = null);
(statearr_33628_33699[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 16))
{var inst_33479 = (state_33582[25]);var inst_33481 = cljs.core.chunked_seq_QMARK_.call(null,inst_33479);var state_33582__$1 = state_33582;if(inst_33481)
{var statearr_33629_33700 = state_33582__$1;(statearr_33629_33700[1] = 19);
} else
{var statearr_33630_33701 = state_33582__$1;(statearr_33630_33701[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 17))
{var state_33582__$1 = state_33582;var statearr_33631_33702 = state_33582__$1;(statearr_33631_33702[2] = null);
(statearr_33631_33702[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 18))
{var inst_33503 = (state_33582[2]);var state_33582__$1 = state_33582;var statearr_33632_33703 = state_33582__$1;(statearr_33632_33703[2] = inst_33503);
(statearr_33632_33703[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 19))
{var inst_33479 = (state_33582[25]);var inst_33483 = cljs.core.chunk_first.call(null,inst_33479);var inst_33484 = cljs.core.chunk_rest.call(null,inst_33479);var inst_33485 = cljs.core.count.call(null,inst_33483);var inst_33459 = inst_33484;var inst_33460 = inst_33483;var inst_33461 = inst_33485;var inst_33462 = 0;var state_33582__$1 = (function (){var statearr_33633 = state_33582;(statearr_33633[14] = inst_33459);
(statearr_33633[15] = inst_33461);
(statearr_33633[16] = inst_33462);
(statearr_33633[17] = inst_33460);
return statearr_33633;
})();var statearr_33634_33704 = state_33582__$1;(statearr_33634_33704[2] = null);
(statearr_33634_33704[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 20))
{var inst_33479 = (state_33582[25]);var inst_33489 = cljs.core.first.call(null,inst_33479);var inst_33490 = cljs.core.nth.call(null,inst_33489,0,null);var inst_33491 = cljs.core.nth.call(null,inst_33489,1,null);var state_33582__$1 = (function (){var statearr_33635 = state_33582;(statearr_33635[28] = inst_33490);
return statearr_33635;
})();if(cljs.core.truth_(inst_33491))
{var statearr_33636_33705 = state_33582__$1;(statearr_33636_33705[1] = 22);
} else
{var statearr_33637_33706 = state_33582__$1;(statearr_33637_33706[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 21))
{var inst_33500 = (state_33582[2]);var state_33582__$1 = state_33582;var statearr_33638_33707 = state_33582__$1;(statearr_33638_33707[2] = inst_33500);
(statearr_33638_33707[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 22))
{var inst_33490 = (state_33582[28]);var inst_33493 = cljs.core.async.close_BANG_.call(null,inst_33490);var state_33582__$1 = state_33582;var statearr_33639_33708 = state_33582__$1;(statearr_33639_33708[2] = inst_33493);
(statearr_33639_33708[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 23))
{var state_33582__$1 = state_33582;var statearr_33640_33709 = state_33582__$1;(statearr_33640_33709[2] = null);
(statearr_33640_33709[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 24))
{var inst_33479 = (state_33582[25]);var inst_33496 = (state_33582[2]);var inst_33497 = cljs.core.next.call(null,inst_33479);var inst_33459 = inst_33497;var inst_33460 = null;var inst_33461 = 0;var inst_33462 = 0;var state_33582__$1 = (function (){var statearr_33641 = state_33582;(statearr_33641[14] = inst_33459);
(statearr_33641[15] = inst_33461);
(statearr_33641[16] = inst_33462);
(statearr_33641[17] = inst_33460);
(statearr_33641[29] = inst_33496);
return statearr_33641;
})();var statearr_33642_33710 = state_33582__$1;(statearr_33642_33710[2] = null);
(statearr_33642_33710[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 25))
{var inst_33521 = (state_33582[10]);var inst_33520 = (state_33582[11]);var inst_33523 = (inst_33521 < inst_33520);var inst_33524 = inst_33523;var state_33582__$1 = state_33582;if(cljs.core.truth_(inst_33524))
{var statearr_33643_33711 = state_33582__$1;(statearr_33643_33711[1] = 27);
} else
{var statearr_33644_33712 = state_33582__$1;(statearr_33644_33712[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 26))
{var inst_33510 = (state_33582[19]);var inst_33568 = (state_33582[2]);var inst_33569 = cljs.core.seq.call(null,inst_33510);var state_33582__$1 = (function (){var statearr_33645 = state_33582;(statearr_33645[30] = inst_33568);
return statearr_33645;
})();if(inst_33569)
{var statearr_33646_33713 = state_33582__$1;(statearr_33646_33713[1] = 42);
} else
{var statearr_33647_33714 = state_33582__$1;(statearr_33647_33714[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 27))
{var inst_33521 = (state_33582[10]);var inst_33519 = (state_33582[13]);var inst_33526 = cljs.core._nth.call(null,inst_33519,inst_33521);var state_33582__$1 = (function (){var statearr_33648 = state_33582;(statearr_33648[7] = inst_33526);
return statearr_33648;
})();var statearr_33649_33715 = state_33582__$1;(statearr_33649_33715[2] = null);
(statearr_33649_33715[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 28))
{var inst_33539 = (state_33582[9]);var inst_33518 = (state_33582[12]);var inst_33539__$1 = cljs.core.seq.call(null,inst_33518);var state_33582__$1 = (function (){var statearr_33653 = state_33582;(statearr_33653[9] = inst_33539__$1);
return statearr_33653;
})();if(inst_33539__$1)
{var statearr_33654_33716 = state_33582__$1;(statearr_33654_33716[1] = 33);
} else
{var statearr_33655_33717 = state_33582__$1;(statearr_33655_33717[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 29))
{var inst_33566 = (state_33582[2]);var state_33582__$1 = state_33582;var statearr_33656_33718 = state_33582__$1;(statearr_33656_33718[2] = inst_33566);
(statearr_33656_33718[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 30))
{var inst_33521 = (state_33582[10]);var inst_33520 = (state_33582[11]);var inst_33518 = (state_33582[12]);var inst_33519 = (state_33582[13]);var inst_33535 = (state_33582[2]);var inst_33536 = (inst_33521 + 1);var tmp33650 = inst_33520;var tmp33651 = inst_33518;var tmp33652 = inst_33519;var inst_33518__$1 = tmp33651;var inst_33519__$1 = tmp33652;var inst_33520__$1 = tmp33650;var inst_33521__$1 = inst_33536;var state_33582__$1 = (function (){var statearr_33657 = state_33582;(statearr_33657[10] = inst_33521__$1);
(statearr_33657[11] = inst_33520__$1);
(statearr_33657[31] = inst_33535);
(statearr_33657[12] = inst_33518__$1);
(statearr_33657[13] = inst_33519__$1);
return statearr_33657;
})();var statearr_33658_33719 = state_33582__$1;(statearr_33658_33719[2] = null);
(statearr_33658_33719[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33583 === 31))
{var inst_33526 = (state_33582[7]);var inst_33527 = (state_33582[2]);var inst_33528 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33529 = cljs.core.async.untap_STAR_.call(null,m,inst_33526);var state_33582__$1 = (function (){var statearr_33659 = state_33582;(statearr_33659[32] = inst_33527);
(statearr_33659[33] = inst_33528);
return statearr_33659;
})();var statearr_33660_33720 = state_33582__$1;(statearr_33660_33720[2] = inst_33529);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33582__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_33664 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33664[0] = state_machine__5507__auto__);
(statearr_33664[1] = 1);
return statearr_33664;
});
var state_machine__5507__auto____1 = (function (state_33582){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33582);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33665){if((e33665 instanceof Object))
{var ex__5510__auto__ = e33665;var statearr_33666_33721 = state_33582;(statearr_33666_33721[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33582);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33665;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33722 = state_33582;
state_33582 = G__33722;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33582){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33582);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33667 = f__5522__auto__.call(null);(statearr_33667[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33668);
return statearr_33667;
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
cljs.core.async.Mix = (function (){var obj33724 = {};return obj33724;
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
;var m = (function (){if(typeof cljs.core.async.t33834 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33834 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta33835){
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
this.meta33835 = meta33835;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33834.cljs$lang$type = true;
cljs.core.async.t33834.cljs$lang$ctorStr = "cljs.core.async/t33834";
cljs.core.async.t33834.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33834");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33834.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33834.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33834.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33834.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33834.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33834.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33834.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33834.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33834.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33836){var self__ = this;
var _33836__$1 = this;return self__.meta33835;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33834.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33836,meta33835__$1){var self__ = this;
var _33836__$1 = this;return (new cljs.core.async.t33834(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta33835__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33834 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33834(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33835){return (new cljs.core.async.t33834(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33835));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33834(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___33943 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33901){var state_val_33902 = (state_33901[1]);if((state_val_33902 === 1))
{var inst_33840 = (state_33901[7]);var inst_33840__$1 = calc_state.call(null);var inst_33841 = cljs.core.seq_QMARK_.call(null,inst_33840__$1);var state_33901__$1 = (function (){var statearr_33903 = state_33901;(statearr_33903[7] = inst_33840__$1);
return statearr_33903;
})();if(inst_33841)
{var statearr_33904_33944 = state_33901__$1;(statearr_33904_33944[1] = 2);
} else
{var statearr_33905_33945 = state_33901__$1;(statearr_33905_33945[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 2))
{var inst_33840 = (state_33901[7]);var inst_33843 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33840);var state_33901__$1 = state_33901;var statearr_33906_33946 = state_33901__$1;(statearr_33906_33946[2] = inst_33843);
(statearr_33906_33946[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 3))
{var inst_33840 = (state_33901[7]);var state_33901__$1 = state_33901;var statearr_33907_33947 = state_33901__$1;(statearr_33907_33947[2] = inst_33840);
(statearr_33907_33947[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 4))
{var inst_33840 = (state_33901[7]);var inst_33846 = (state_33901[2]);var inst_33847 = cljs.core.get.call(null,inst_33846,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33848 = cljs.core.get.call(null,inst_33846,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33849 = cljs.core.get.call(null,inst_33846,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_33850 = inst_33840;var state_33901__$1 = (function (){var statearr_33908 = state_33901;(statearr_33908[8] = inst_33848);
(statearr_33908[9] = inst_33847);
(statearr_33908[10] = inst_33849);
(statearr_33908[11] = inst_33850);
return statearr_33908;
})();var statearr_33909_33948 = state_33901__$1;(statearr_33909_33948[2] = null);
(statearr_33909_33948[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 5))
{var inst_33850 = (state_33901[11]);var inst_33853 = cljs.core.seq_QMARK_.call(null,inst_33850);var state_33901__$1 = state_33901;if(inst_33853)
{var statearr_33910_33949 = state_33901__$1;(statearr_33910_33949[1] = 7);
} else
{var statearr_33911_33950 = state_33901__$1;(statearr_33911_33950[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 6))
{var inst_33899 = (state_33901[2]);var state_33901__$1 = state_33901;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33901__$1,inst_33899);
} else
{if((state_val_33902 === 7))
{var inst_33850 = (state_33901[11]);var inst_33855 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33850);var state_33901__$1 = state_33901;var statearr_33912_33951 = state_33901__$1;(statearr_33912_33951[2] = inst_33855);
(statearr_33912_33951[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 8))
{var inst_33850 = (state_33901[11]);var state_33901__$1 = state_33901;var statearr_33913_33952 = state_33901__$1;(statearr_33913_33952[2] = inst_33850);
(statearr_33913_33952[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 9))
{var inst_33858 = (state_33901[12]);var inst_33858__$1 = (state_33901[2]);var inst_33859 = cljs.core.get.call(null,inst_33858__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33860 = cljs.core.get.call(null,inst_33858__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33861 = cljs.core.get.call(null,inst_33858__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33901__$1 = (function (){var statearr_33914 = state_33901;(statearr_33914[12] = inst_33858__$1);
(statearr_33914[13] = inst_33861);
(statearr_33914[14] = inst_33860);
return statearr_33914;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33901__$1,10,inst_33859);
} else
{if((state_val_33902 === 10))
{var inst_33865 = (state_33901[15]);var inst_33866 = (state_33901[16]);var inst_33864 = (state_33901[2]);var inst_33865__$1 = cljs.core.nth.call(null,inst_33864,0,null);var inst_33866__$1 = cljs.core.nth.call(null,inst_33864,1,null);var inst_33867 = (inst_33865__$1 == null);var inst_33868 = cljs.core._EQ_.call(null,inst_33866__$1,change);var inst_33869 = (inst_33867) || (inst_33868);var state_33901__$1 = (function (){var statearr_33915 = state_33901;(statearr_33915[15] = inst_33865__$1);
(statearr_33915[16] = inst_33866__$1);
return statearr_33915;
})();if(cljs.core.truth_(inst_33869))
{var statearr_33916_33953 = state_33901__$1;(statearr_33916_33953[1] = 11);
} else
{var statearr_33917_33954 = state_33901__$1;(statearr_33917_33954[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 11))
{var inst_33865 = (state_33901[15]);var inst_33871 = (inst_33865 == null);var state_33901__$1 = state_33901;if(cljs.core.truth_(inst_33871))
{var statearr_33918_33955 = state_33901__$1;(statearr_33918_33955[1] = 14);
} else
{var statearr_33919_33956 = state_33901__$1;(statearr_33919_33956[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 12))
{var inst_33880 = (state_33901[17]);var inst_33866 = (state_33901[16]);var inst_33861 = (state_33901[13]);var inst_33880__$1 = inst_33861.call(null,inst_33866);var state_33901__$1 = (function (){var statearr_33920 = state_33901;(statearr_33920[17] = inst_33880__$1);
return statearr_33920;
})();if(cljs.core.truth_(inst_33880__$1))
{var statearr_33921_33957 = state_33901__$1;(statearr_33921_33957[1] = 17);
} else
{var statearr_33922_33958 = state_33901__$1;(statearr_33922_33958[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 13))
{var inst_33897 = (state_33901[2]);var state_33901__$1 = state_33901;var statearr_33923_33959 = state_33901__$1;(statearr_33923_33959[2] = inst_33897);
(statearr_33923_33959[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 14))
{var inst_33866 = (state_33901[16]);var inst_33873 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33866);var state_33901__$1 = state_33901;var statearr_33924_33960 = state_33901__$1;(statearr_33924_33960[2] = inst_33873);
(statearr_33924_33960[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 15))
{var state_33901__$1 = state_33901;var statearr_33925_33961 = state_33901__$1;(statearr_33925_33961[2] = null);
(statearr_33925_33961[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 16))
{var inst_33876 = (state_33901[2]);var inst_33877 = calc_state.call(null);var inst_33850 = inst_33877;var state_33901__$1 = (function (){var statearr_33926 = state_33901;(statearr_33926[18] = inst_33876);
(statearr_33926[11] = inst_33850);
return statearr_33926;
})();var statearr_33927_33962 = state_33901__$1;(statearr_33927_33962[2] = null);
(statearr_33927_33962[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 17))
{var inst_33880 = (state_33901[17]);var state_33901__$1 = state_33901;var statearr_33928_33963 = state_33901__$1;(statearr_33928_33963[2] = inst_33880);
(statearr_33928_33963[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 18))
{var inst_33866 = (state_33901[16]);var inst_33861 = (state_33901[13]);var inst_33860 = (state_33901[14]);var inst_33883 = cljs.core.empty_QMARK_.call(null,inst_33861);var inst_33884 = inst_33860.call(null,inst_33866);var inst_33885 = cljs.core.not.call(null,inst_33884);var inst_33886 = (inst_33883) && (inst_33885);var state_33901__$1 = state_33901;var statearr_33929_33964 = state_33901__$1;(statearr_33929_33964[2] = inst_33886);
(statearr_33929_33964[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 19))
{var inst_33888 = (state_33901[2]);var state_33901__$1 = state_33901;if(cljs.core.truth_(inst_33888))
{var statearr_33930_33965 = state_33901__$1;(statearr_33930_33965[1] = 20);
} else
{var statearr_33931_33966 = state_33901__$1;(statearr_33931_33966[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 20))
{var inst_33865 = (state_33901[15]);var state_33901__$1 = state_33901;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33901__$1,23,out,inst_33865);
} else
{if((state_val_33902 === 21))
{var state_33901__$1 = state_33901;var statearr_33932_33967 = state_33901__$1;(statearr_33932_33967[2] = null);
(statearr_33932_33967[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 22))
{var inst_33858 = (state_33901[12]);var inst_33894 = (state_33901[2]);var inst_33850 = inst_33858;var state_33901__$1 = (function (){var statearr_33933 = state_33901;(statearr_33933[11] = inst_33850);
(statearr_33933[19] = inst_33894);
return statearr_33933;
})();var statearr_33934_33968 = state_33901__$1;(statearr_33934_33968[2] = null);
(statearr_33934_33968[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33902 === 23))
{var inst_33891 = (state_33901[2]);var state_33901__$1 = state_33901;var statearr_33935_33969 = state_33901__$1;(statearr_33935_33969[2] = inst_33891);
(statearr_33935_33969[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_33939 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33939[0] = state_machine__5507__auto__);
(statearr_33939[1] = 1);
return statearr_33939;
});
var state_machine__5507__auto____1 = (function (state_33901){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33901);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33940){if((e33940 instanceof Object))
{var ex__5510__auto__ = e33940;var statearr_33941_33970 = state_33901;(statearr_33941_33970[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33901);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33940;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33971 = state_33901;
state_33901 = G__33971;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33901){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33901);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33942 = f__5522__auto__.call(null);(statearr_33942[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33943);
return statearr_33942;
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
cljs.core.async.Pub = (function (){var obj33973 = {};return obj33973;
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
return (function (p1__33974_SHARP_){if(cljs.core.truth_(p1__33974_SHARP_.call(null,topic)))
{return p1__33974_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33974_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34099 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34099 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34100){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34100 = meta34100;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34099.cljs$lang$type = true;
cljs.core.async.t34099.cljs$lang$ctorStr = "cljs.core.async/t34099";
cljs.core.async.t34099.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34099");
});})(mults,ensure_mult))
;
cljs.core.async.t34099.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34099.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34099.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34099.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34099.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34099.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34099.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34099.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34101){var self__ = this;
var _34101__$1 = this;return self__.meta34100;
});})(mults,ensure_mult))
;
cljs.core.async.t34099.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34101,meta34100__$1){var self__ = this;
var _34101__$1 = this;return (new cljs.core.async.t34099(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34100__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34099 = ((function (mults,ensure_mult){
return (function __GT_t34099(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34100){return (new cljs.core.async.t34099(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34100));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34099(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34223 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34175){var state_val_34176 = (state_34175[1]);if((state_val_34176 === 1))
{var state_34175__$1 = state_34175;var statearr_34177_34224 = state_34175__$1;(statearr_34177_34224[2] = null);
(statearr_34177_34224[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 2))
{var state_34175__$1 = state_34175;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34175__$1,4,ch);
} else
{if((state_val_34176 === 3))
{var inst_34173 = (state_34175[2]);var state_34175__$1 = state_34175;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34175__$1,inst_34173);
} else
{if((state_val_34176 === 4))
{var inst_34104 = (state_34175[7]);var inst_34104__$1 = (state_34175[2]);var inst_34105 = (inst_34104__$1 == null);var state_34175__$1 = (function (){var statearr_34178 = state_34175;(statearr_34178[7] = inst_34104__$1);
return statearr_34178;
})();if(cljs.core.truth_(inst_34105))
{var statearr_34179_34225 = state_34175__$1;(statearr_34179_34225[1] = 5);
} else
{var statearr_34180_34226 = state_34175__$1;(statearr_34180_34226[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 5))
{var inst_34111 = cljs.core.deref.call(null,mults);var inst_34112 = cljs.core.vals.call(null,inst_34111);var inst_34113 = cljs.core.seq.call(null,inst_34112);var inst_34114 = inst_34113;var inst_34115 = null;var inst_34116 = 0;var inst_34117 = 0;var state_34175__$1 = (function (){var statearr_34181 = state_34175;(statearr_34181[8] = inst_34116);
(statearr_34181[9] = inst_34117);
(statearr_34181[10] = inst_34115);
(statearr_34181[11] = inst_34114);
return statearr_34181;
})();var statearr_34182_34227 = state_34175__$1;(statearr_34182_34227[2] = null);
(statearr_34182_34227[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 6))
{var inst_34154 = (state_34175[12]);var inst_34152 = (state_34175[13]);var inst_34104 = (state_34175[7]);var inst_34152__$1 = topic_fn.call(null,inst_34104);var inst_34153 = cljs.core.deref.call(null,mults);var inst_34154__$1 = cljs.core.get.call(null,inst_34153,inst_34152__$1);var state_34175__$1 = (function (){var statearr_34183 = state_34175;(statearr_34183[12] = inst_34154__$1);
(statearr_34183[13] = inst_34152__$1);
return statearr_34183;
})();if(cljs.core.truth_(inst_34154__$1))
{var statearr_34184_34228 = state_34175__$1;(statearr_34184_34228[1] = 19);
} else
{var statearr_34185_34229 = state_34175__$1;(statearr_34185_34229[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 7))
{var inst_34171 = (state_34175[2]);var state_34175__$1 = state_34175;var statearr_34186_34230 = state_34175__$1;(statearr_34186_34230[2] = inst_34171);
(statearr_34186_34230[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 8))
{var inst_34116 = (state_34175[8]);var inst_34117 = (state_34175[9]);var inst_34119 = (inst_34117 < inst_34116);var inst_34120 = inst_34119;var state_34175__$1 = state_34175;if(cljs.core.truth_(inst_34120))
{var statearr_34190_34231 = state_34175__$1;(statearr_34190_34231[1] = 10);
} else
{var statearr_34191_34232 = state_34175__$1;(statearr_34191_34232[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 9))
{var inst_34150 = (state_34175[2]);var state_34175__$1 = state_34175;var statearr_34192_34233 = state_34175__$1;(statearr_34192_34233[2] = inst_34150);
(statearr_34192_34233[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 10))
{var inst_34116 = (state_34175[8]);var inst_34117 = (state_34175[9]);var inst_34115 = (state_34175[10]);var inst_34114 = (state_34175[11]);var inst_34122 = cljs.core._nth.call(null,inst_34115,inst_34117);var inst_34123 = cljs.core.async.muxch_STAR_.call(null,inst_34122);var inst_34124 = cljs.core.async.close_BANG_.call(null,inst_34123);var inst_34125 = (inst_34117 + 1);var tmp34187 = inst_34116;var tmp34188 = inst_34115;var tmp34189 = inst_34114;var inst_34114__$1 = tmp34189;var inst_34115__$1 = tmp34188;var inst_34116__$1 = tmp34187;var inst_34117__$1 = inst_34125;var state_34175__$1 = (function (){var statearr_34193 = state_34175;(statearr_34193[8] = inst_34116__$1);
(statearr_34193[9] = inst_34117__$1);
(statearr_34193[14] = inst_34124);
(statearr_34193[10] = inst_34115__$1);
(statearr_34193[11] = inst_34114__$1);
return statearr_34193;
})();var statearr_34194_34234 = state_34175__$1;(statearr_34194_34234[2] = null);
(statearr_34194_34234[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 11))
{var inst_34128 = (state_34175[15]);var inst_34114 = (state_34175[11]);var inst_34128__$1 = cljs.core.seq.call(null,inst_34114);var state_34175__$1 = (function (){var statearr_34195 = state_34175;(statearr_34195[15] = inst_34128__$1);
return statearr_34195;
})();if(inst_34128__$1)
{var statearr_34196_34235 = state_34175__$1;(statearr_34196_34235[1] = 13);
} else
{var statearr_34197_34236 = state_34175__$1;(statearr_34197_34236[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 12))
{var inst_34148 = (state_34175[2]);var state_34175__$1 = state_34175;var statearr_34198_34237 = state_34175__$1;(statearr_34198_34237[2] = inst_34148);
(statearr_34198_34237[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 13))
{var inst_34128 = (state_34175[15]);var inst_34130 = cljs.core.chunked_seq_QMARK_.call(null,inst_34128);var state_34175__$1 = state_34175;if(inst_34130)
{var statearr_34199_34238 = state_34175__$1;(statearr_34199_34238[1] = 16);
} else
{var statearr_34200_34239 = state_34175__$1;(statearr_34200_34239[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 14))
{var state_34175__$1 = state_34175;var statearr_34201_34240 = state_34175__$1;(statearr_34201_34240[2] = null);
(statearr_34201_34240[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 15))
{var inst_34146 = (state_34175[2]);var state_34175__$1 = state_34175;var statearr_34202_34241 = state_34175__$1;(statearr_34202_34241[2] = inst_34146);
(statearr_34202_34241[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 16))
{var inst_34128 = (state_34175[15]);var inst_34132 = cljs.core.chunk_first.call(null,inst_34128);var inst_34133 = cljs.core.chunk_rest.call(null,inst_34128);var inst_34134 = cljs.core.count.call(null,inst_34132);var inst_34114 = inst_34133;var inst_34115 = inst_34132;var inst_34116 = inst_34134;var inst_34117 = 0;var state_34175__$1 = (function (){var statearr_34203 = state_34175;(statearr_34203[8] = inst_34116);
(statearr_34203[9] = inst_34117);
(statearr_34203[10] = inst_34115);
(statearr_34203[11] = inst_34114);
return statearr_34203;
})();var statearr_34204_34242 = state_34175__$1;(statearr_34204_34242[2] = null);
(statearr_34204_34242[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 17))
{var inst_34128 = (state_34175[15]);var inst_34137 = cljs.core.first.call(null,inst_34128);var inst_34138 = cljs.core.async.muxch_STAR_.call(null,inst_34137);var inst_34139 = cljs.core.async.close_BANG_.call(null,inst_34138);var inst_34140 = cljs.core.next.call(null,inst_34128);var inst_34114 = inst_34140;var inst_34115 = null;var inst_34116 = 0;var inst_34117 = 0;var state_34175__$1 = (function (){var statearr_34205 = state_34175;(statearr_34205[8] = inst_34116);
(statearr_34205[9] = inst_34117);
(statearr_34205[10] = inst_34115);
(statearr_34205[11] = inst_34114);
(statearr_34205[16] = inst_34139);
return statearr_34205;
})();var statearr_34206_34243 = state_34175__$1;(statearr_34206_34243[2] = null);
(statearr_34206_34243[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 18))
{var inst_34143 = (state_34175[2]);var state_34175__$1 = state_34175;var statearr_34207_34244 = state_34175__$1;(statearr_34207_34244[2] = inst_34143);
(statearr_34207_34244[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 19))
{var state_34175__$1 = state_34175;var statearr_34208_34245 = state_34175__$1;(statearr_34208_34245[2] = null);
(statearr_34208_34245[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 20))
{var state_34175__$1 = state_34175;var statearr_34209_34246 = state_34175__$1;(statearr_34209_34246[2] = null);
(statearr_34209_34246[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 21))
{var inst_34168 = (state_34175[2]);var state_34175__$1 = (function (){var statearr_34210 = state_34175;(statearr_34210[17] = inst_34168);
return statearr_34210;
})();var statearr_34211_34247 = state_34175__$1;(statearr_34211_34247[2] = null);
(statearr_34211_34247[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 22))
{var inst_34165 = (state_34175[2]);var state_34175__$1 = state_34175;var statearr_34212_34248 = state_34175__$1;(statearr_34212_34248[2] = inst_34165);
(statearr_34212_34248[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 23))
{var inst_34152 = (state_34175[13]);var inst_34156 = (state_34175[2]);var inst_34157 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34152);var state_34175__$1 = (function (){var statearr_34213 = state_34175;(statearr_34213[18] = inst_34156);
return statearr_34213;
})();var statearr_34214_34249 = state_34175__$1;(statearr_34214_34249[2] = inst_34157);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34175__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34176 === 24))
{var inst_34154 = (state_34175[12]);var inst_34104 = (state_34175[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34175,23,Object,null,22);var inst_34161 = cljs.core.async.muxch_STAR_.call(null,inst_34154);var state_34175__$1 = state_34175;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34175__$1,25,inst_34161,inst_34104);
} else
{if((state_val_34176 === 25))
{var inst_34163 = (state_34175[2]);var state_34175__$1 = state_34175;var statearr_34215_34250 = state_34175__$1;(statearr_34215_34250[2] = inst_34163);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34175__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34219 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34219[0] = state_machine__5507__auto__);
(statearr_34219[1] = 1);
return statearr_34219;
});
var state_machine__5507__auto____1 = (function (state_34175){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34175);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34220){if((e34220 instanceof Object))
{var ex__5510__auto__ = e34220;var statearr_34221_34251 = state_34175;(statearr_34221_34251[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34175);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34220;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34252 = state_34175;
state_34175 = G__34252;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34175){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34222 = f__5522__auto__.call(null);(statearr_34222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34223);
return statearr_34222;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34389 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34359){var state_val_34360 = (state_34359[1]);if((state_val_34360 === 1))
{var state_34359__$1 = state_34359;var statearr_34361_34390 = state_34359__$1;(statearr_34361_34390[2] = null);
(statearr_34361_34390[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 2))
{var inst_34322 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34323 = 0;var state_34359__$1 = (function (){var statearr_34362 = state_34359;(statearr_34362[7] = inst_34323);
(statearr_34362[8] = inst_34322);
return statearr_34362;
})();var statearr_34363_34391 = state_34359__$1;(statearr_34363_34391[2] = null);
(statearr_34363_34391[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 3))
{var inst_34357 = (state_34359[2]);var state_34359__$1 = state_34359;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34359__$1,inst_34357);
} else
{if((state_val_34360 === 4))
{var inst_34323 = (state_34359[7]);var inst_34325 = (inst_34323 < cnt);var state_34359__$1 = state_34359;if(cljs.core.truth_(inst_34325))
{var statearr_34364_34392 = state_34359__$1;(statearr_34364_34392[1] = 6);
} else
{var statearr_34365_34393 = state_34359__$1;(statearr_34365_34393[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 5))
{var inst_34343 = (state_34359[2]);var state_34359__$1 = (function (){var statearr_34366 = state_34359;(statearr_34366[9] = inst_34343);
return statearr_34366;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34359__$1,12,dchan);
} else
{if((state_val_34360 === 6))
{var state_34359__$1 = state_34359;var statearr_34367_34394 = state_34359__$1;(statearr_34367_34394[2] = null);
(statearr_34367_34394[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 7))
{var state_34359__$1 = state_34359;var statearr_34368_34395 = state_34359__$1;(statearr_34368_34395[2] = null);
(statearr_34368_34395[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 8))
{var inst_34341 = (state_34359[2]);var state_34359__$1 = state_34359;var statearr_34369_34396 = state_34359__$1;(statearr_34369_34396[2] = inst_34341);
(statearr_34369_34396[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 9))
{var inst_34323 = (state_34359[7]);var inst_34336 = (state_34359[2]);var inst_34337 = (inst_34323 + 1);var inst_34323__$1 = inst_34337;var state_34359__$1 = (function (){var statearr_34370 = state_34359;(statearr_34370[7] = inst_34323__$1);
(statearr_34370[10] = inst_34336);
return statearr_34370;
})();var statearr_34371_34397 = state_34359__$1;(statearr_34371_34397[2] = null);
(statearr_34371_34397[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 10))
{var inst_34327 = (state_34359[2]);var inst_34328 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34359__$1 = (function (){var statearr_34372 = state_34359;(statearr_34372[11] = inst_34327);
return statearr_34372;
})();var statearr_34373_34398 = state_34359__$1;(statearr_34373_34398[2] = inst_34328);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34359__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 11))
{var inst_34323 = (state_34359[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34359,10,Object,null,9);var inst_34332 = chs__$1.call(null,inst_34323);var inst_34333 = done.call(null,inst_34323);var inst_34334 = cljs.core.async.take_BANG_.call(null,inst_34332,inst_34333);var state_34359__$1 = state_34359;var statearr_34374_34399 = state_34359__$1;(statearr_34374_34399[2] = inst_34334);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34359__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 12))
{var inst_34345 = (state_34359[12]);var inst_34345__$1 = (state_34359[2]);var inst_34346 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34345__$1);var state_34359__$1 = (function (){var statearr_34375 = state_34359;(statearr_34375[12] = inst_34345__$1);
return statearr_34375;
})();if(cljs.core.truth_(inst_34346))
{var statearr_34376_34400 = state_34359__$1;(statearr_34376_34400[1] = 13);
} else
{var statearr_34377_34401 = state_34359__$1;(statearr_34377_34401[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 13))
{var inst_34348 = cljs.core.async.close_BANG_.call(null,out);var state_34359__$1 = state_34359;var statearr_34378_34402 = state_34359__$1;(statearr_34378_34402[2] = inst_34348);
(statearr_34378_34402[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 14))
{var inst_34345 = (state_34359[12]);var inst_34350 = cljs.core.apply.call(null,f,inst_34345);var state_34359__$1 = state_34359;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34359__$1,16,out,inst_34350);
} else
{if((state_val_34360 === 15))
{var inst_34355 = (state_34359[2]);var state_34359__$1 = state_34359;var statearr_34379_34403 = state_34359__$1;(statearr_34379_34403[2] = inst_34355);
(statearr_34379_34403[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34360 === 16))
{var inst_34352 = (state_34359[2]);var state_34359__$1 = (function (){var statearr_34380 = state_34359;(statearr_34380[13] = inst_34352);
return statearr_34380;
})();var statearr_34381_34404 = state_34359__$1;(statearr_34381_34404[2] = null);
(statearr_34381_34404[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34385 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34385[0] = state_machine__5507__auto__);
(statearr_34385[1] = 1);
return statearr_34385;
});
var state_machine__5507__auto____1 = (function (state_34359){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34359);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34386){if((e34386 instanceof Object))
{var ex__5510__auto__ = e34386;var statearr_34387_34405 = state_34359;(statearr_34387_34405[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34359);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34386;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34406 = state_34359;
state_34359 = G__34406;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34359){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34388 = f__5522__auto__.call(null);(statearr_34388[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34389);
return statearr_34388;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34514 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34490){var state_val_34491 = (state_34490[1]);if((state_val_34491 === 1))
{var inst_34461 = cljs.core.vec.call(null,chs);var inst_34462 = inst_34461;var state_34490__$1 = (function (){var statearr_34492 = state_34490;(statearr_34492[7] = inst_34462);
return statearr_34492;
})();var statearr_34493_34515 = state_34490__$1;(statearr_34493_34515[2] = null);
(statearr_34493_34515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34491 === 2))
{var inst_34462 = (state_34490[7]);var inst_34464 = cljs.core.count.call(null,inst_34462);var inst_34465 = (inst_34464 > 0);var state_34490__$1 = state_34490;if(cljs.core.truth_(inst_34465))
{var statearr_34494_34516 = state_34490__$1;(statearr_34494_34516[1] = 4);
} else
{var statearr_34495_34517 = state_34490__$1;(statearr_34495_34517[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34491 === 3))
{var inst_34488 = (state_34490[2]);var state_34490__$1 = state_34490;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34490__$1,inst_34488);
} else
{if((state_val_34491 === 4))
{var inst_34462 = (state_34490[7]);var state_34490__$1 = state_34490;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34490__$1,7,inst_34462);
} else
{if((state_val_34491 === 5))
{var inst_34484 = cljs.core.async.close_BANG_.call(null,out);var state_34490__$1 = state_34490;var statearr_34496_34518 = state_34490__$1;(statearr_34496_34518[2] = inst_34484);
(statearr_34496_34518[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34491 === 6))
{var inst_34486 = (state_34490[2]);var state_34490__$1 = state_34490;var statearr_34497_34519 = state_34490__$1;(statearr_34497_34519[2] = inst_34486);
(statearr_34497_34519[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34491 === 7))
{var inst_34469 = (state_34490[8]);var inst_34470 = (state_34490[9]);var inst_34469__$1 = (state_34490[2]);var inst_34470__$1 = cljs.core.nth.call(null,inst_34469__$1,0,null);var inst_34471 = cljs.core.nth.call(null,inst_34469__$1,1,null);var inst_34472 = (inst_34470__$1 == null);var state_34490__$1 = (function (){var statearr_34498 = state_34490;(statearr_34498[8] = inst_34469__$1);
(statearr_34498[10] = inst_34471);
(statearr_34498[9] = inst_34470__$1);
return statearr_34498;
})();if(cljs.core.truth_(inst_34472))
{var statearr_34499_34520 = state_34490__$1;(statearr_34499_34520[1] = 8);
} else
{var statearr_34500_34521 = state_34490__$1;(statearr_34500_34521[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34491 === 8))
{var inst_34462 = (state_34490[7]);var inst_34469 = (state_34490[8]);var inst_34471 = (state_34490[10]);var inst_34470 = (state_34490[9]);var inst_34474 = (function (){var c = inst_34471;var v = inst_34470;var vec__34467 = inst_34469;var cs = inst_34462;return ((function (c,v,vec__34467,cs,inst_34462,inst_34469,inst_34471,inst_34470,state_val_34491){
return (function (p1__34407_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34407_SHARP_);
});
;})(c,v,vec__34467,cs,inst_34462,inst_34469,inst_34471,inst_34470,state_val_34491))
})();var inst_34475 = cljs.core.filterv.call(null,inst_34474,inst_34462);var inst_34462__$1 = inst_34475;var state_34490__$1 = (function (){var statearr_34501 = state_34490;(statearr_34501[7] = inst_34462__$1);
return statearr_34501;
})();var statearr_34502_34522 = state_34490__$1;(statearr_34502_34522[2] = null);
(statearr_34502_34522[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34491 === 9))
{var inst_34470 = (state_34490[9]);var state_34490__$1 = state_34490;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34490__$1,11,out,inst_34470);
} else
{if((state_val_34491 === 10))
{var inst_34482 = (state_34490[2]);var state_34490__$1 = state_34490;var statearr_34504_34523 = state_34490__$1;(statearr_34504_34523[2] = inst_34482);
(statearr_34504_34523[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34491 === 11))
{var inst_34462 = (state_34490[7]);var inst_34479 = (state_34490[2]);var tmp34503 = inst_34462;var inst_34462__$1 = tmp34503;var state_34490__$1 = (function (){var statearr_34505 = state_34490;(statearr_34505[11] = inst_34479);
(statearr_34505[7] = inst_34462__$1);
return statearr_34505;
})();var statearr_34506_34524 = state_34490__$1;(statearr_34506_34524[2] = null);
(statearr_34506_34524[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34510 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34510[0] = state_machine__5507__auto__);
(statearr_34510[1] = 1);
return statearr_34510;
});
var state_machine__5507__auto____1 = (function (state_34490){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34490);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34511){if((e34511 instanceof Object))
{var ex__5510__auto__ = e34511;var statearr_34512_34525 = state_34490;(statearr_34512_34525[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34490);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34511;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34526 = state_34490;
state_34490 = G__34526;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34490){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34513 = f__5522__auto__.call(null);(statearr_34513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34514);
return statearr_34513;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34619 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34596){var state_val_34597 = (state_34596[1]);if((state_val_34597 === 1))
{var inst_34573 = 0;var state_34596__$1 = (function (){var statearr_34598 = state_34596;(statearr_34598[7] = inst_34573);
return statearr_34598;
})();var statearr_34599_34620 = state_34596__$1;(statearr_34599_34620[2] = null);
(statearr_34599_34620[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34597 === 2))
{var inst_34573 = (state_34596[7]);var inst_34575 = (inst_34573 < n);var state_34596__$1 = state_34596;if(cljs.core.truth_(inst_34575))
{var statearr_34600_34621 = state_34596__$1;(statearr_34600_34621[1] = 4);
} else
{var statearr_34601_34622 = state_34596__$1;(statearr_34601_34622[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34597 === 3))
{var inst_34593 = (state_34596[2]);var inst_34594 = cljs.core.async.close_BANG_.call(null,out);var state_34596__$1 = (function (){var statearr_34602 = state_34596;(statearr_34602[8] = inst_34593);
return statearr_34602;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34596__$1,inst_34594);
} else
{if((state_val_34597 === 4))
{var state_34596__$1 = state_34596;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34596__$1,7,ch);
} else
{if((state_val_34597 === 5))
{var state_34596__$1 = state_34596;var statearr_34603_34623 = state_34596__$1;(statearr_34603_34623[2] = null);
(statearr_34603_34623[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34597 === 6))
{var inst_34591 = (state_34596[2]);var state_34596__$1 = state_34596;var statearr_34604_34624 = state_34596__$1;(statearr_34604_34624[2] = inst_34591);
(statearr_34604_34624[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34597 === 7))
{var inst_34578 = (state_34596[9]);var inst_34578__$1 = (state_34596[2]);var inst_34579 = (inst_34578__$1 == null);var inst_34580 = cljs.core.not.call(null,inst_34579);var state_34596__$1 = (function (){var statearr_34605 = state_34596;(statearr_34605[9] = inst_34578__$1);
return statearr_34605;
})();if(inst_34580)
{var statearr_34606_34625 = state_34596__$1;(statearr_34606_34625[1] = 8);
} else
{var statearr_34607_34626 = state_34596__$1;(statearr_34607_34626[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34597 === 8))
{var inst_34578 = (state_34596[9]);var state_34596__$1 = state_34596;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34596__$1,11,out,inst_34578);
} else
{if((state_val_34597 === 9))
{var state_34596__$1 = state_34596;var statearr_34608_34627 = state_34596__$1;(statearr_34608_34627[2] = null);
(statearr_34608_34627[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34597 === 10))
{var inst_34588 = (state_34596[2]);var state_34596__$1 = state_34596;var statearr_34609_34628 = state_34596__$1;(statearr_34609_34628[2] = inst_34588);
(statearr_34609_34628[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34597 === 11))
{var inst_34573 = (state_34596[7]);var inst_34583 = (state_34596[2]);var inst_34584 = (inst_34573 + 1);var inst_34573__$1 = inst_34584;var state_34596__$1 = (function (){var statearr_34610 = state_34596;(statearr_34610[7] = inst_34573__$1);
(statearr_34610[10] = inst_34583);
return statearr_34610;
})();var statearr_34611_34629 = state_34596__$1;(statearr_34611_34629[2] = null);
(statearr_34611_34629[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34615 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34615[0] = state_machine__5507__auto__);
(statearr_34615[1] = 1);
return statearr_34615;
});
var state_machine__5507__auto____1 = (function (state_34596){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34596);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34616){if((e34616 instanceof Object))
{var ex__5510__auto__ = e34616;var statearr_34617_34630 = state_34596;(statearr_34617_34630[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34596);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34616;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34631 = state_34596;
state_34596 = G__34631;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34596){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34596);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34618 = f__5522__auto__.call(null);(statearr_34618[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34619);
return statearr_34618;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34728 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34703){var state_val_34704 = (state_34703[1]);if((state_val_34704 === 1))
{var inst_34680 = null;var state_34703__$1 = (function (){var statearr_34705 = state_34703;(statearr_34705[7] = inst_34680);
return statearr_34705;
})();var statearr_34706_34729 = state_34703__$1;(statearr_34706_34729[2] = null);
(statearr_34706_34729[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34704 === 2))
{var state_34703__$1 = state_34703;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34703__$1,4,ch);
} else
{if((state_val_34704 === 3))
{var inst_34700 = (state_34703[2]);var inst_34701 = cljs.core.async.close_BANG_.call(null,out);var state_34703__$1 = (function (){var statearr_34707 = state_34703;(statearr_34707[8] = inst_34700);
return statearr_34707;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34703__$1,inst_34701);
} else
{if((state_val_34704 === 4))
{var inst_34683 = (state_34703[9]);var inst_34683__$1 = (state_34703[2]);var inst_34684 = (inst_34683__$1 == null);var inst_34685 = cljs.core.not.call(null,inst_34684);var state_34703__$1 = (function (){var statearr_34708 = state_34703;(statearr_34708[9] = inst_34683__$1);
return statearr_34708;
})();if(inst_34685)
{var statearr_34709_34730 = state_34703__$1;(statearr_34709_34730[1] = 5);
} else
{var statearr_34710_34731 = state_34703__$1;(statearr_34710_34731[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34704 === 5))
{var inst_34683 = (state_34703[9]);var inst_34680 = (state_34703[7]);var inst_34687 = cljs.core._EQ_.call(null,inst_34683,inst_34680);var state_34703__$1 = state_34703;if(inst_34687)
{var statearr_34711_34732 = state_34703__$1;(statearr_34711_34732[1] = 8);
} else
{var statearr_34712_34733 = state_34703__$1;(statearr_34712_34733[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34704 === 6))
{var state_34703__$1 = state_34703;var statearr_34714_34734 = state_34703__$1;(statearr_34714_34734[2] = null);
(statearr_34714_34734[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34704 === 7))
{var inst_34698 = (state_34703[2]);var state_34703__$1 = state_34703;var statearr_34715_34735 = state_34703__$1;(statearr_34715_34735[2] = inst_34698);
(statearr_34715_34735[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34704 === 8))
{var inst_34680 = (state_34703[7]);var tmp34713 = inst_34680;var inst_34680__$1 = tmp34713;var state_34703__$1 = (function (){var statearr_34716 = state_34703;(statearr_34716[7] = inst_34680__$1);
return statearr_34716;
})();var statearr_34717_34736 = state_34703__$1;(statearr_34717_34736[2] = null);
(statearr_34717_34736[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34704 === 9))
{var inst_34683 = (state_34703[9]);var state_34703__$1 = state_34703;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34703__$1,11,out,inst_34683);
} else
{if((state_val_34704 === 10))
{var inst_34695 = (state_34703[2]);var state_34703__$1 = state_34703;var statearr_34718_34737 = state_34703__$1;(statearr_34718_34737[2] = inst_34695);
(statearr_34718_34737[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34704 === 11))
{var inst_34683 = (state_34703[9]);var inst_34692 = (state_34703[2]);var inst_34680 = inst_34683;var state_34703__$1 = (function (){var statearr_34719 = state_34703;(statearr_34719[7] = inst_34680);
(statearr_34719[10] = inst_34692);
return statearr_34719;
})();var statearr_34720_34738 = state_34703__$1;(statearr_34720_34738[2] = null);
(statearr_34720_34738[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34724 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34724[0] = state_machine__5507__auto__);
(statearr_34724[1] = 1);
return statearr_34724;
});
var state_machine__5507__auto____1 = (function (state_34703){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34703);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34725){if((e34725 instanceof Object))
{var ex__5510__auto__ = e34725;var statearr_34726_34739 = state_34703;(statearr_34726_34739[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34703);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34725;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34740 = state_34703;
state_34703 = G__34740;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34703){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34703);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34727 = f__5522__auto__.call(null);(statearr_34727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34728);
return statearr_34727;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34875 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34845){var state_val_34846 = (state_34845[1]);if((state_val_34846 === 1))
{var inst_34808 = (new Array(n));var inst_34809 = inst_34808;var inst_34810 = 0;var state_34845__$1 = (function (){var statearr_34847 = state_34845;(statearr_34847[7] = inst_34810);
(statearr_34847[8] = inst_34809);
return statearr_34847;
})();var statearr_34848_34876 = state_34845__$1;(statearr_34848_34876[2] = null);
(statearr_34848_34876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 2))
{var state_34845__$1 = state_34845;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34845__$1,4,ch);
} else
{if((state_val_34846 === 3))
{var inst_34843 = (state_34845[2]);var state_34845__$1 = state_34845;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34845__$1,inst_34843);
} else
{if((state_val_34846 === 4))
{var inst_34813 = (state_34845[9]);var inst_34813__$1 = (state_34845[2]);var inst_34814 = (inst_34813__$1 == null);var inst_34815 = cljs.core.not.call(null,inst_34814);var state_34845__$1 = (function (){var statearr_34849 = state_34845;(statearr_34849[9] = inst_34813__$1);
return statearr_34849;
})();if(inst_34815)
{var statearr_34850_34877 = state_34845__$1;(statearr_34850_34877[1] = 5);
} else
{var statearr_34851_34878 = state_34845__$1;(statearr_34851_34878[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 5))
{var inst_34813 = (state_34845[9]);var inst_34818 = (state_34845[10]);var inst_34810 = (state_34845[7]);var inst_34809 = (state_34845[8]);var inst_34817 = (inst_34809[inst_34810] = inst_34813);var inst_34818__$1 = (inst_34810 + 1);var inst_34819 = (inst_34818__$1 < n);var state_34845__$1 = (function (){var statearr_34852 = state_34845;(statearr_34852[11] = inst_34817);
(statearr_34852[10] = inst_34818__$1);
return statearr_34852;
})();if(cljs.core.truth_(inst_34819))
{var statearr_34853_34879 = state_34845__$1;(statearr_34853_34879[1] = 8);
} else
{var statearr_34854_34880 = state_34845__$1;(statearr_34854_34880[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 6))
{var inst_34810 = (state_34845[7]);var inst_34831 = (inst_34810 > 0);var state_34845__$1 = state_34845;if(cljs.core.truth_(inst_34831))
{var statearr_34856_34881 = state_34845__$1;(statearr_34856_34881[1] = 12);
} else
{var statearr_34857_34882 = state_34845__$1;(statearr_34857_34882[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 7))
{var inst_34841 = (state_34845[2]);var state_34845__$1 = state_34845;var statearr_34858_34883 = state_34845__$1;(statearr_34858_34883[2] = inst_34841);
(statearr_34858_34883[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 8))
{var inst_34818 = (state_34845[10]);var inst_34809 = (state_34845[8]);var tmp34855 = inst_34809;var inst_34809__$1 = tmp34855;var inst_34810 = inst_34818;var state_34845__$1 = (function (){var statearr_34859 = state_34845;(statearr_34859[7] = inst_34810);
(statearr_34859[8] = inst_34809__$1);
return statearr_34859;
})();var statearr_34860_34884 = state_34845__$1;(statearr_34860_34884[2] = null);
(statearr_34860_34884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 9))
{var inst_34809 = (state_34845[8]);var inst_34823 = cljs.core.vec.call(null,inst_34809);var state_34845__$1 = state_34845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34845__$1,11,out,inst_34823);
} else
{if((state_val_34846 === 10))
{var inst_34829 = (state_34845[2]);var state_34845__$1 = state_34845;var statearr_34861_34885 = state_34845__$1;(statearr_34861_34885[2] = inst_34829);
(statearr_34861_34885[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 11))
{var inst_34825 = (state_34845[2]);var inst_34826 = (new Array(n));var inst_34809 = inst_34826;var inst_34810 = 0;var state_34845__$1 = (function (){var statearr_34862 = state_34845;(statearr_34862[12] = inst_34825);
(statearr_34862[7] = inst_34810);
(statearr_34862[8] = inst_34809);
return statearr_34862;
})();var statearr_34863_34886 = state_34845__$1;(statearr_34863_34886[2] = null);
(statearr_34863_34886[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 12))
{var inst_34809 = (state_34845[8]);var inst_34833 = cljs.core.vec.call(null,inst_34809);var state_34845__$1 = state_34845;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34845__$1,15,out,inst_34833);
} else
{if((state_val_34846 === 13))
{var state_34845__$1 = state_34845;var statearr_34864_34887 = state_34845__$1;(statearr_34864_34887[2] = null);
(statearr_34864_34887[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 14))
{var inst_34838 = (state_34845[2]);var inst_34839 = cljs.core.async.close_BANG_.call(null,out);var state_34845__$1 = (function (){var statearr_34865 = state_34845;(statearr_34865[13] = inst_34838);
return statearr_34865;
})();var statearr_34866_34888 = state_34845__$1;(statearr_34866_34888[2] = inst_34839);
(statearr_34866_34888[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34846 === 15))
{var inst_34835 = (state_34845[2]);var state_34845__$1 = state_34845;var statearr_34867_34889 = state_34845__$1;(statearr_34867_34889[2] = inst_34835);
(statearr_34867_34889[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_34871 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34871[0] = state_machine__5507__auto__);
(statearr_34871[1] = 1);
return statearr_34871;
});
var state_machine__5507__auto____1 = (function (state_34845){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34845);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34872){if((e34872 instanceof Object))
{var ex__5510__auto__ = e34872;var statearr_34873_34890 = state_34845;(statearr_34873_34890[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34845);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34872;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34891 = state_34845;
state_34845 = G__34891;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34845){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34845);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34874 = f__5522__auto__.call(null);(statearr_34874[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34875);
return statearr_34874;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35034 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35004){var state_val_35005 = (state_35004[1]);if((state_val_35005 === 1))
{var inst_34963 = [];var inst_34964 = inst_34963;var inst_34965 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35004__$1 = (function (){var statearr_35006 = state_35004;(statearr_35006[7] = inst_34964);
(statearr_35006[8] = inst_34965);
return statearr_35006;
})();var statearr_35007_35035 = state_35004__$1;(statearr_35007_35035[2] = null);
(statearr_35007_35035[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 2))
{var state_35004__$1 = state_35004;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35004__$1,4,ch);
} else
{if((state_val_35005 === 3))
{var inst_35002 = (state_35004[2]);var state_35004__$1 = state_35004;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35004__$1,inst_35002);
} else
{if((state_val_35005 === 4))
{var inst_34968 = (state_35004[9]);var inst_34968__$1 = (state_35004[2]);var inst_34969 = (inst_34968__$1 == null);var inst_34970 = cljs.core.not.call(null,inst_34969);var state_35004__$1 = (function (){var statearr_35008 = state_35004;(statearr_35008[9] = inst_34968__$1);
return statearr_35008;
})();if(inst_34970)
{var statearr_35009_35036 = state_35004__$1;(statearr_35009_35036[1] = 5);
} else
{var statearr_35010_35037 = state_35004__$1;(statearr_35010_35037[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 5))
{var inst_34972 = (state_35004[10]);var inst_34965 = (state_35004[8]);var inst_34968 = (state_35004[9]);var inst_34972__$1 = f.call(null,inst_34968);var inst_34973 = cljs.core._EQ_.call(null,inst_34972__$1,inst_34965);var inst_34974 = cljs.core.keyword_identical_QMARK_.call(null,inst_34965,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34975 = (inst_34973) || (inst_34974);var state_35004__$1 = (function (){var statearr_35011 = state_35004;(statearr_35011[10] = inst_34972__$1);
return statearr_35011;
})();if(cljs.core.truth_(inst_34975))
{var statearr_35012_35038 = state_35004__$1;(statearr_35012_35038[1] = 8);
} else
{var statearr_35013_35039 = state_35004__$1;(statearr_35013_35039[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 6))
{var inst_34964 = (state_35004[7]);var inst_34989 = inst_34964.length;var inst_34990 = (inst_34989 > 0);var state_35004__$1 = state_35004;if(cljs.core.truth_(inst_34990))
{var statearr_35015_35040 = state_35004__$1;(statearr_35015_35040[1] = 12);
} else
{var statearr_35016_35041 = state_35004__$1;(statearr_35016_35041[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 7))
{var inst_35000 = (state_35004[2]);var state_35004__$1 = state_35004;var statearr_35017_35042 = state_35004__$1;(statearr_35017_35042[2] = inst_35000);
(statearr_35017_35042[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 8))
{var inst_34972 = (state_35004[10]);var inst_34964 = (state_35004[7]);var inst_34968 = (state_35004[9]);var inst_34977 = inst_34964.push(inst_34968);var tmp35014 = inst_34964;var inst_34964__$1 = tmp35014;var inst_34965 = inst_34972;var state_35004__$1 = (function (){var statearr_35018 = state_35004;(statearr_35018[7] = inst_34964__$1);
(statearr_35018[8] = inst_34965);
(statearr_35018[11] = inst_34977);
return statearr_35018;
})();var statearr_35019_35043 = state_35004__$1;(statearr_35019_35043[2] = null);
(statearr_35019_35043[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 9))
{var inst_34964 = (state_35004[7]);var inst_34980 = cljs.core.vec.call(null,inst_34964);var state_35004__$1 = state_35004;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35004__$1,11,out,inst_34980);
} else
{if((state_val_35005 === 10))
{var inst_34987 = (state_35004[2]);var state_35004__$1 = state_35004;var statearr_35020_35044 = state_35004__$1;(statearr_35020_35044[2] = inst_34987);
(statearr_35020_35044[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 11))
{var inst_34972 = (state_35004[10]);var inst_34968 = (state_35004[9]);var inst_34982 = (state_35004[2]);var inst_34983 = [];var inst_34984 = inst_34983.push(inst_34968);var inst_34964 = inst_34983;var inst_34965 = inst_34972;var state_35004__$1 = (function (){var statearr_35021 = state_35004;(statearr_35021[7] = inst_34964);
(statearr_35021[8] = inst_34965);
(statearr_35021[12] = inst_34984);
(statearr_35021[13] = inst_34982);
return statearr_35021;
})();var statearr_35022_35045 = state_35004__$1;(statearr_35022_35045[2] = null);
(statearr_35022_35045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 12))
{var inst_34964 = (state_35004[7]);var inst_34992 = cljs.core.vec.call(null,inst_34964);var state_35004__$1 = state_35004;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35004__$1,15,out,inst_34992);
} else
{if((state_val_35005 === 13))
{var state_35004__$1 = state_35004;var statearr_35023_35046 = state_35004__$1;(statearr_35023_35046[2] = null);
(statearr_35023_35046[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 14))
{var inst_34997 = (state_35004[2]);var inst_34998 = cljs.core.async.close_BANG_.call(null,out);var state_35004__$1 = (function (){var statearr_35024 = state_35004;(statearr_35024[14] = inst_34997);
return statearr_35024;
})();var statearr_35025_35047 = state_35004__$1;(statearr_35025_35047[2] = inst_34998);
(statearr_35025_35047[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35005 === 15))
{var inst_34994 = (state_35004[2]);var state_35004__$1 = state_35004;var statearr_35026_35048 = state_35004__$1;(statearr_35026_35048[2] = inst_34994);
(statearr_35026_35048[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35030 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35030[0] = state_machine__5507__auto__);
(statearr_35030[1] = 1);
return statearr_35030;
});
var state_machine__5507__auto____1 = (function (state_35004){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35004);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35031){if((e35031 instanceof Object))
{var ex__5510__auto__ = e35031;var statearr_35032_35049 = state_35004;(statearr_35032_35049[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35004);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35031;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35050 = state_35004;
state_35004 = G__35050;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35004){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35004);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35033 = f__5522__auto__.call(null);(statearr_35033[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35034);
return statearr_35033;
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
