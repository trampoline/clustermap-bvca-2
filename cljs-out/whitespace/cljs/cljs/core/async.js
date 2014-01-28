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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t32596 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32596 = (function (f,fn_handler,meta32597){
this.f = f;
this.fn_handler = fn_handler;
this.meta32597 = meta32597;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32596.cljs$lang$type = true;
cljs.core.async.t32596.cljs$lang$ctorStr = "cljs.core.async/t32596";
cljs.core.async.t32596.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32596");
});
cljs.core.async.t32596.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32596.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t32596.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t32596.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32598){var self__ = this;
var _32598__$1 = this;return self__.meta32597;
});
cljs.core.async.t32596.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32598,meta32597__$1){var self__ = this;
var _32598__$1 = this;return (new cljs.core.async.t32596(self__.f,self__.fn_handler,meta32597__$1));
});
cljs.core.async.__GT_t32596 = (function __GT_t32596(f__$1,fn_handler__$1,meta32597){return (new cljs.core.async.t32596(f__$1,fn_handler__$1,meta32597));
});
}
return (new cljs.core.async.t32596(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__32600 = buff;if(G__32600)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__32600.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__32600.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32600);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32600);
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
{var val_32601 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_32601);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_32601);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___32602 = n;var x_32603 = 0;while(true){
if((x_32603 < n__4248__auto___32602))
{(a[x_32603] = 0);
{
var G__32604 = (x_32603 + 1);
x_32603 = G__32604;
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
var G__32605 = (i + 1);
i = G__32605;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t32609 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32609 = (function (flag,alt_flag,meta32610){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32610 = meta32610;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32609.cljs$lang$type = true;
cljs.core.async.t32609.cljs$lang$ctorStr = "cljs.core.async/t32609";
cljs.core.async.t32609.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32609");
});
cljs.core.async.t32609.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32609.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t32609.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t32609.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32611){var self__ = this;
var _32611__$1 = this;return self__.meta32610;
});
cljs.core.async.t32609.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32611,meta32610__$1){var self__ = this;
var _32611__$1 = this;return (new cljs.core.async.t32609(self__.flag,self__.alt_flag,meta32610__$1));
});
cljs.core.async.__GT_t32609 = (function __GT_t32609(flag__$1,alt_flag__$1,meta32610){return (new cljs.core.async.t32609(flag__$1,alt_flag__$1,meta32610));
});
}
return (new cljs.core.async.t32609(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t32615 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32615 = (function (cb,flag,alt_handler,meta32616){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32616 = meta32616;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32615.cljs$lang$type = true;
cljs.core.async.t32615.cljs$lang$ctorStr = "cljs.core.async/t32615";
cljs.core.async.t32615.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32615");
});
cljs.core.async.t32615.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32615.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t32615.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t32615.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32617){var self__ = this;
var _32617__$1 = this;return self__.meta32616;
});
cljs.core.async.t32615.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32617,meta32616__$1){var self__ = this;
var _32617__$1 = this;return (new cljs.core.async.t32615(self__.cb,self__.flag,self__.alt_handler,meta32616__$1));
});
cljs.core.async.__GT_t32615 = (function __GT_t32615(cb__$1,flag__$1,alt_handler__$1,meta32616){return (new cljs.core.async.t32615(cb__$1,flag__$1,alt_handler__$1,meta32616));
});
}
return (new cljs.core.async.t32615(cb,flag,alt_handler,null));
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
return (function (p1__32618_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32618_SHARP_,port], null));
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
var G__32619 = (i + 1);
i = G__32619;
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
var alts_BANG___delegate = function (ports,p__32620){var map__32622 = p__32620;var map__32622__$1 = ((cljs.core.seq_QMARK_.call(null,map__32622))?cljs.core.apply.call(null,cljs.core.hash_map,map__32622):map__32622);var opts = map__32622__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__32620 = null;if (arguments.length > 1) {
  p__32620 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__32620);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32623){
var ports = cljs.core.first(arglist__32623);
var p__32620 = cljs.core.rest(arglist__32623);
return alts_BANG___delegate(ports,p__32620);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t32631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32631 = (function (ch,f,map_LT_,meta32632){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32632 = meta32632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32631.cljs$lang$type = true;
cljs.core.async.t32631.cljs$lang$ctorStr = "cljs.core.async/t32631";
cljs.core.async.t32631.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32631");
});
cljs.core.async.t32631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t32631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t32634 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32634 = (function (fn1,_,meta32632,ch,f,map_LT_,meta32635){
this.fn1 = fn1;
this._ = _;
this.meta32632 = meta32632;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32635 = meta32635;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32634.cljs$lang$type = true;
cljs.core.async.t32634.cljs$lang$ctorStr = "cljs.core.async/t32634";
cljs.core.async.t32634.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32634");
});
cljs.core.async.t32634.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32634.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t32634.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t32634.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__32624_SHARP_){return f1.call(null,(((p1__32624_SHARP_ == null))?null:self__.f.call(null,p1__32624_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t32634.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32636){var self__ = this;
var _32636__$1 = this;return self__.meta32635;
});
cljs.core.async.t32634.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32636,meta32635__$1){var self__ = this;
var _32636__$1 = this;return (new cljs.core.async.t32634(self__.fn1,self__._,self__.meta32632,self__.ch,self__.f,self__.map_LT_,meta32635__$1));
});
cljs.core.async.__GT_t32634 = (function __GT_t32634(fn1__$1,___$2,meta32632__$1,ch__$2,f__$2,map_LT___$2,meta32635){return (new cljs.core.async.t32634(fn1__$1,___$2,meta32632__$1,ch__$2,f__$2,map_LT___$2,meta32635));
});
}
return (new cljs.core.async.t32634(fn1,___$1,self__.meta32632,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t32631.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32633){var self__ = this;
var _32633__$1 = this;return self__.meta32632;
});
cljs.core.async.t32631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32633,meta32632__$1){var self__ = this;
var _32633__$1 = this;return (new cljs.core.async.t32631(self__.ch,self__.f,self__.map_LT_,meta32632__$1));
});
cljs.core.async.__GT_t32631 = (function __GT_t32631(ch__$1,f__$1,map_LT___$1,meta32632){return (new cljs.core.async.t32631(ch__$1,f__$1,map_LT___$1,meta32632));
});
}
return (new cljs.core.async.t32631(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t32640 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32640 = (function (ch,f,map_GT_,meta32641){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32641 = meta32641;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32640.cljs$lang$type = true;
cljs.core.async.t32640.cljs$lang$ctorStr = "cljs.core.async/t32640";
cljs.core.async.t32640.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32640");
});
cljs.core.async.t32640.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32640.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t32640.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32640.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32640.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32640.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32642){var self__ = this;
var _32642__$1 = this;return self__.meta32641;
});
cljs.core.async.t32640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32642,meta32641__$1){var self__ = this;
var _32642__$1 = this;return (new cljs.core.async.t32640(self__.ch,self__.f,self__.map_GT_,meta32641__$1));
});
cljs.core.async.__GT_t32640 = (function __GT_t32640(ch__$1,f__$1,map_GT___$1,meta32641){return (new cljs.core.async.t32640(ch__$1,f__$1,map_GT___$1,meta32641));
});
}
return (new cljs.core.async.t32640(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t32646 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32646 = (function (ch,p,filter_GT_,meta32647){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32647 = meta32647;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32646.cljs$lang$type = true;
cljs.core.async.t32646.cljs$lang$ctorStr = "cljs.core.async/t32646";
cljs.core.async.t32646.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32646");
});
cljs.core.async.t32646.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32646.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t32646.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32646.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32646.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32646.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32646.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32648){var self__ = this;
var _32648__$1 = this;return self__.meta32647;
});
cljs.core.async.t32646.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32648,meta32647__$1){var self__ = this;
var _32648__$1 = this;return (new cljs.core.async.t32646(self__.ch,self__.p,self__.filter_GT_,meta32647__$1));
});
cljs.core.async.__GT_t32646 = (function __GT_t32646(ch__$1,p__$1,filter_GT___$1,meta32647){return (new cljs.core.async.t32646(ch__$1,p__$1,filter_GT___$1,meta32647));
});
}
return (new cljs.core.async.t32646(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32731 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32710){var state_val_32711 = (state_32710[1]);if((state_val_32711 === 1))
{var state_32710__$1 = state_32710;var statearr_32712_32732 = state_32710__$1;(statearr_32712_32732[2] = null);
(statearr_32712_32732[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32711 === 2))
{var state_32710__$1 = state_32710;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32710__$1,4,ch);
} else
{if((state_val_32711 === 3))
{var inst_32708 = (state_32710[2]);var state_32710__$1 = state_32710;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32710__$1,inst_32708);
} else
{if((state_val_32711 === 4))
{var inst_32692 = (state_32710[7]);var inst_32692__$1 = (state_32710[2]);var inst_32693 = (inst_32692__$1 == null);var state_32710__$1 = (function (){var statearr_32713 = state_32710;(statearr_32713[7] = inst_32692__$1);
return statearr_32713;
})();if(cljs.core.truth_(inst_32693))
{var statearr_32714_32733 = state_32710__$1;(statearr_32714_32733[1] = 5);
} else
{var statearr_32715_32734 = state_32710__$1;(statearr_32715_32734[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32711 === 5))
{var inst_32695 = cljs.core.async.close_BANG_.call(null,out);var state_32710__$1 = state_32710;var statearr_32716_32735 = state_32710__$1;(statearr_32716_32735[2] = inst_32695);
(statearr_32716_32735[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32711 === 6))
{var inst_32692 = (state_32710[7]);var inst_32697 = p.call(null,inst_32692);var state_32710__$1 = state_32710;if(cljs.core.truth_(inst_32697))
{var statearr_32717_32736 = state_32710__$1;(statearr_32717_32736[1] = 8);
} else
{var statearr_32718_32737 = state_32710__$1;(statearr_32718_32737[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32711 === 7))
{var inst_32706 = (state_32710[2]);var state_32710__$1 = state_32710;var statearr_32719_32738 = state_32710__$1;(statearr_32719_32738[2] = inst_32706);
(statearr_32719_32738[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32711 === 8))
{var inst_32692 = (state_32710[7]);var state_32710__$1 = state_32710;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32710__$1,11,out,inst_32692);
} else
{if((state_val_32711 === 9))
{var state_32710__$1 = state_32710;var statearr_32720_32739 = state_32710__$1;(statearr_32720_32739[2] = null);
(statearr_32720_32739[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32711 === 10))
{var inst_32703 = (state_32710[2]);var state_32710__$1 = (function (){var statearr_32721 = state_32710;(statearr_32721[8] = inst_32703);
return statearr_32721;
})();var statearr_32722_32740 = state_32710__$1;(statearr_32722_32740[2] = null);
(statearr_32722_32740[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32711 === 11))
{var inst_32700 = (state_32710[2]);var state_32710__$1 = state_32710;var statearr_32723_32741 = state_32710__$1;(statearr_32723_32741[2] = inst_32700);
(statearr_32723_32741[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_32727 = [null,null,null,null,null,null,null,null,null];(statearr_32727[0] = state_machine__5507__auto__);
(statearr_32727[1] = 1);
return statearr_32727;
});
var state_machine__5507__auto____1 = (function (state_32710){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32710);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32728){if((e32728 instanceof Object))
{var ex__5510__auto__ = e32728;var statearr_32729_32742 = state_32710;(statearr_32729_32742[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32710);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32728;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32743 = state_32710;
state_32710 = G__32743;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32710){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32710);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32730 = f__5522__auto__.call(null);(statearr_32730[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32731);
return statearr_32730;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32895){var state_val_32896 = (state_32895[1]);if((state_val_32896 === 1))
{var state_32895__$1 = state_32895;var statearr_32897_32934 = state_32895__$1;(statearr_32897_32934[2] = null);
(statearr_32897_32934[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 2))
{var state_32895__$1 = state_32895;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32895__$1,4,in$);
} else
{if((state_val_32896 === 3))
{var inst_32893 = (state_32895[2]);var state_32895__$1 = state_32895;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32895__$1,inst_32893);
} else
{if((state_val_32896 === 4))
{var inst_32841 = (state_32895[7]);var inst_32841__$1 = (state_32895[2]);var inst_32842 = (inst_32841__$1 == null);var state_32895__$1 = (function (){var statearr_32898 = state_32895;(statearr_32898[7] = inst_32841__$1);
return statearr_32898;
})();if(cljs.core.truth_(inst_32842))
{var statearr_32899_32935 = state_32895__$1;(statearr_32899_32935[1] = 5);
} else
{var statearr_32900_32936 = state_32895__$1;(statearr_32900_32936[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 5))
{var inst_32844 = cljs.core.async.close_BANG_.call(null,out);var state_32895__$1 = state_32895;var statearr_32901_32937 = state_32895__$1;(statearr_32901_32937[2] = inst_32844);
(statearr_32901_32937[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 6))
{var inst_32841 = (state_32895[7]);var inst_32846 = f.call(null,inst_32841);var inst_32851 = cljs.core.seq.call(null,inst_32846);var inst_32852 = inst_32851;var inst_32853 = null;var inst_32854 = 0;var inst_32855 = 0;var state_32895__$1 = (function (){var statearr_32902 = state_32895;(statearr_32902[8] = inst_32852);
(statearr_32902[9] = inst_32853);
(statearr_32902[10] = inst_32854);
(statearr_32902[11] = inst_32855);
return statearr_32902;
})();var statearr_32903_32938 = state_32895__$1;(statearr_32903_32938[2] = null);
(statearr_32903_32938[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 7))
{var inst_32891 = (state_32895[2]);var state_32895__$1 = state_32895;var statearr_32904_32939 = state_32895__$1;(statearr_32904_32939[2] = inst_32891);
(statearr_32904_32939[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 8))
{var inst_32854 = (state_32895[10]);var inst_32855 = (state_32895[11]);var inst_32857 = (inst_32855 < inst_32854);var inst_32858 = inst_32857;var state_32895__$1 = state_32895;if(cljs.core.truth_(inst_32858))
{var statearr_32905_32940 = state_32895__$1;(statearr_32905_32940[1] = 10);
} else
{var statearr_32906_32941 = state_32895__$1;(statearr_32906_32941[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 9))
{var inst_32888 = (state_32895[2]);var state_32895__$1 = (function (){var statearr_32907 = state_32895;(statearr_32907[12] = inst_32888);
return statearr_32907;
})();var statearr_32908_32942 = state_32895__$1;(statearr_32908_32942[2] = null);
(statearr_32908_32942[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 10))
{var inst_32853 = (state_32895[9]);var inst_32855 = (state_32895[11]);var inst_32860 = cljs.core._nth.call(null,inst_32853,inst_32855);var state_32895__$1 = state_32895;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32895__$1,13,out,inst_32860);
} else
{if((state_val_32896 === 11))
{var inst_32852 = (state_32895[8]);var inst_32866 = (state_32895[13]);var inst_32866__$1 = cljs.core.seq.call(null,inst_32852);var state_32895__$1 = (function (){var statearr_32912 = state_32895;(statearr_32912[13] = inst_32866__$1);
return statearr_32912;
})();if(inst_32866__$1)
{var statearr_32913_32943 = state_32895__$1;(statearr_32913_32943[1] = 14);
} else
{var statearr_32914_32944 = state_32895__$1;(statearr_32914_32944[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 12))
{var inst_32886 = (state_32895[2]);var state_32895__$1 = state_32895;var statearr_32915_32945 = state_32895__$1;(statearr_32915_32945[2] = inst_32886);
(statearr_32915_32945[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 13))
{var inst_32852 = (state_32895[8]);var inst_32853 = (state_32895[9]);var inst_32854 = (state_32895[10]);var inst_32855 = (state_32895[11]);var inst_32862 = (state_32895[2]);var inst_32863 = (inst_32855 + 1);var tmp32909 = inst_32852;var tmp32910 = inst_32853;var tmp32911 = inst_32854;var inst_32852__$1 = tmp32909;var inst_32853__$1 = tmp32910;var inst_32854__$1 = tmp32911;var inst_32855__$1 = inst_32863;var state_32895__$1 = (function (){var statearr_32916 = state_32895;(statearr_32916[14] = inst_32862);
(statearr_32916[8] = inst_32852__$1);
(statearr_32916[9] = inst_32853__$1);
(statearr_32916[10] = inst_32854__$1);
(statearr_32916[11] = inst_32855__$1);
return statearr_32916;
})();var statearr_32917_32946 = state_32895__$1;(statearr_32917_32946[2] = null);
(statearr_32917_32946[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 14))
{var inst_32866 = (state_32895[13]);var inst_32868 = cljs.core.chunked_seq_QMARK_.call(null,inst_32866);var state_32895__$1 = state_32895;if(inst_32868)
{var statearr_32918_32947 = state_32895__$1;(statearr_32918_32947[1] = 17);
} else
{var statearr_32919_32948 = state_32895__$1;(statearr_32919_32948[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 15))
{var state_32895__$1 = state_32895;var statearr_32920_32949 = state_32895__$1;(statearr_32920_32949[2] = null);
(statearr_32920_32949[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 16))
{var inst_32884 = (state_32895[2]);var state_32895__$1 = state_32895;var statearr_32921_32950 = state_32895__$1;(statearr_32921_32950[2] = inst_32884);
(statearr_32921_32950[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 17))
{var inst_32866 = (state_32895[13]);var inst_32870 = cljs.core.chunk_first.call(null,inst_32866);var inst_32871 = cljs.core.chunk_rest.call(null,inst_32866);var inst_32872 = cljs.core.count.call(null,inst_32870);var inst_32852 = inst_32871;var inst_32853 = inst_32870;var inst_32854 = inst_32872;var inst_32855 = 0;var state_32895__$1 = (function (){var statearr_32922 = state_32895;(statearr_32922[8] = inst_32852);
(statearr_32922[9] = inst_32853);
(statearr_32922[10] = inst_32854);
(statearr_32922[11] = inst_32855);
return statearr_32922;
})();var statearr_32923_32951 = state_32895__$1;(statearr_32923_32951[2] = null);
(statearr_32923_32951[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 18))
{var inst_32866 = (state_32895[13]);var inst_32875 = cljs.core.first.call(null,inst_32866);var state_32895__$1 = state_32895;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32895__$1,20,out,inst_32875);
} else
{if((state_val_32896 === 19))
{var inst_32881 = (state_32895[2]);var state_32895__$1 = state_32895;var statearr_32924_32952 = state_32895__$1;(statearr_32924_32952[2] = inst_32881);
(statearr_32924_32952[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32896 === 20))
{var inst_32866 = (state_32895[13]);var inst_32877 = (state_32895[2]);var inst_32878 = cljs.core.next.call(null,inst_32866);var inst_32852 = inst_32878;var inst_32853 = null;var inst_32854 = 0;var inst_32855 = 0;var state_32895__$1 = (function (){var statearr_32925 = state_32895;(statearr_32925[15] = inst_32877);
(statearr_32925[8] = inst_32852);
(statearr_32925[9] = inst_32853);
(statearr_32925[10] = inst_32854);
(statearr_32925[11] = inst_32855);
return statearr_32925;
})();var statearr_32926_32953 = state_32895__$1;(statearr_32926_32953[2] = null);
(statearr_32926_32953[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_32930 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32930[0] = state_machine__5507__auto__);
(statearr_32930[1] = 1);
return statearr_32930;
});
var state_machine__5507__auto____1 = (function (state_32895){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32895);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32931){if((e32931 instanceof Object))
{var ex__5510__auto__ = e32931;var statearr_32932_32954 = state_32895;(statearr_32932_32954[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32895);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32931;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32955 = state_32895;
state_32895 = G__32955;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32895){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32895);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32933 = f__5522__auto__.call(null);(statearr_32933[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32933;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33036 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33015){var state_val_33016 = (state_33015[1]);if((state_val_33016 === 1))
{var state_33015__$1 = state_33015;var statearr_33017_33037 = state_33015__$1;(statearr_33017_33037[2] = null);
(statearr_33017_33037[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33016 === 2))
{var state_33015__$1 = state_33015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33015__$1,4,from);
} else
{if((state_val_33016 === 3))
{var inst_33013 = (state_33015[2]);var state_33015__$1 = state_33015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33015__$1,inst_33013);
} else
{if((state_val_33016 === 4))
{var inst_32998 = (state_33015[7]);var inst_32998__$1 = (state_33015[2]);var inst_32999 = (inst_32998__$1 == null);var state_33015__$1 = (function (){var statearr_33018 = state_33015;(statearr_33018[7] = inst_32998__$1);
return statearr_33018;
})();if(cljs.core.truth_(inst_32999))
{var statearr_33019_33038 = state_33015__$1;(statearr_33019_33038[1] = 5);
} else
{var statearr_33020_33039 = state_33015__$1;(statearr_33020_33039[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33016 === 5))
{var state_33015__$1 = state_33015;if(cljs.core.truth_(close_QMARK_))
{var statearr_33021_33040 = state_33015__$1;(statearr_33021_33040[1] = 8);
} else
{var statearr_33022_33041 = state_33015__$1;(statearr_33022_33041[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33016 === 6))
{var inst_32998 = (state_33015[7]);var state_33015__$1 = state_33015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33015__$1,11,to,inst_32998);
} else
{if((state_val_33016 === 7))
{var inst_33011 = (state_33015[2]);var state_33015__$1 = state_33015;var statearr_33023_33042 = state_33015__$1;(statearr_33023_33042[2] = inst_33011);
(statearr_33023_33042[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33016 === 8))
{var inst_33002 = cljs.core.async.close_BANG_.call(null,to);var state_33015__$1 = state_33015;var statearr_33024_33043 = state_33015__$1;(statearr_33024_33043[2] = inst_33002);
(statearr_33024_33043[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33016 === 9))
{var state_33015__$1 = state_33015;var statearr_33025_33044 = state_33015__$1;(statearr_33025_33044[2] = null);
(statearr_33025_33044[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33016 === 10))
{var inst_33005 = (state_33015[2]);var state_33015__$1 = state_33015;var statearr_33026_33045 = state_33015__$1;(statearr_33026_33045[2] = inst_33005);
(statearr_33026_33045[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33016 === 11))
{var inst_33008 = (state_33015[2]);var state_33015__$1 = (function (){var statearr_33027 = state_33015;(statearr_33027[8] = inst_33008);
return statearr_33027;
})();var statearr_33028_33046 = state_33015__$1;(statearr_33028_33046[2] = null);
(statearr_33028_33046[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33032 = [null,null,null,null,null,null,null,null,null];(statearr_33032[0] = state_machine__5507__auto__);
(statearr_33032[1] = 1);
return statearr_33032;
});
var state_machine__5507__auto____1 = (function (state_33015){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33015);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33033){if((e33033 instanceof Object))
{var ex__5510__auto__ = e33033;var statearr_33034_33047 = state_33015;(statearr_33034_33047[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33015);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33033;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33048 = state_33015;
state_33015 = G__33048;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33015){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33035 = f__5522__auto__.call(null);(statearr_33035[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33036);
return statearr_33035;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33135 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33113){var state_val_33114 = (state_33113[1]);if((state_val_33114 === 1))
{var state_33113__$1 = state_33113;var statearr_33115_33136 = state_33113__$1;(statearr_33115_33136[2] = null);
(statearr_33115_33136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33114 === 2))
{var state_33113__$1 = state_33113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33113__$1,4,ch);
} else
{if((state_val_33114 === 3))
{var inst_33111 = (state_33113[2]);var state_33113__$1 = state_33113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33113__$1,inst_33111);
} else
{if((state_val_33114 === 4))
{var inst_33094 = (state_33113[7]);var inst_33094__$1 = (state_33113[2]);var inst_33095 = (inst_33094__$1 == null);var state_33113__$1 = (function (){var statearr_33116 = state_33113;(statearr_33116[7] = inst_33094__$1);
return statearr_33116;
})();if(cljs.core.truth_(inst_33095))
{var statearr_33117_33137 = state_33113__$1;(statearr_33117_33137[1] = 5);
} else
{var statearr_33118_33138 = state_33113__$1;(statearr_33118_33138[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33114 === 5))
{var inst_33097 = cljs.core.async.close_BANG_.call(null,tc);var inst_33098 = cljs.core.async.close_BANG_.call(null,fc);var state_33113__$1 = (function (){var statearr_33119 = state_33113;(statearr_33119[8] = inst_33097);
return statearr_33119;
})();var statearr_33120_33139 = state_33113__$1;(statearr_33120_33139[2] = inst_33098);
(statearr_33120_33139[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33114 === 6))
{var inst_33094 = (state_33113[7]);var inst_33100 = p.call(null,inst_33094);var state_33113__$1 = state_33113;if(cljs.core.truth_(inst_33100))
{var statearr_33121_33140 = state_33113__$1;(statearr_33121_33140[1] = 9);
} else
{var statearr_33122_33141 = state_33113__$1;(statearr_33122_33141[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33114 === 7))
{var inst_33109 = (state_33113[2]);var state_33113__$1 = state_33113;var statearr_33123_33142 = state_33113__$1;(statearr_33123_33142[2] = inst_33109);
(statearr_33123_33142[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33114 === 8))
{var inst_33106 = (state_33113[2]);var state_33113__$1 = (function (){var statearr_33124 = state_33113;(statearr_33124[9] = inst_33106);
return statearr_33124;
})();var statearr_33125_33143 = state_33113__$1;(statearr_33125_33143[2] = null);
(statearr_33125_33143[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33114 === 9))
{var state_33113__$1 = state_33113;var statearr_33126_33144 = state_33113__$1;(statearr_33126_33144[2] = tc);
(statearr_33126_33144[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33114 === 10))
{var state_33113__$1 = state_33113;var statearr_33127_33145 = state_33113__$1;(statearr_33127_33145[2] = fc);
(statearr_33127_33145[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33114 === 11))
{var inst_33094 = (state_33113[7]);var inst_33104 = (state_33113[2]);var state_33113__$1 = state_33113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33113__$1,8,inst_33104,inst_33094);
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
var state_machine__5507__auto____0 = (function (){var statearr_33131 = [null,null,null,null,null,null,null,null,null,null];(statearr_33131[0] = state_machine__5507__auto__);
(statearr_33131[1] = 1);
return statearr_33131;
});
var state_machine__5507__auto____1 = (function (state_33113){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33113);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33132){if((e33132 instanceof Object))
{var ex__5510__auto__ = e33132;var statearr_33133_33146 = state_33113;(statearr_33133_33146[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33132;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33147 = state_33113;
state_33113 = G__33147;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33113){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33134 = f__5522__auto__.call(null);(statearr_33134[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33135);
return statearr_33134;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33194){var state_val_33195 = (state_33194[1]);if((state_val_33195 === 7))
{var inst_33190 = (state_33194[2]);var state_33194__$1 = state_33194;var statearr_33196_33212 = state_33194__$1;(statearr_33196_33212[2] = inst_33190);
(statearr_33196_33212[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33195 === 6))
{var inst_33180 = (state_33194[7]);var inst_33183 = (state_33194[8]);var inst_33187 = f.call(null,inst_33180,inst_33183);var inst_33180__$1 = inst_33187;var state_33194__$1 = (function (){var statearr_33197 = state_33194;(statearr_33197[7] = inst_33180__$1);
return statearr_33197;
})();var statearr_33198_33213 = state_33194__$1;(statearr_33198_33213[2] = null);
(statearr_33198_33213[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33195 === 5))
{var inst_33180 = (state_33194[7]);var state_33194__$1 = state_33194;var statearr_33199_33214 = state_33194__$1;(statearr_33199_33214[2] = inst_33180);
(statearr_33199_33214[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33195 === 4))
{var inst_33183 = (state_33194[8]);var inst_33183__$1 = (state_33194[2]);var inst_33184 = (inst_33183__$1 == null);var state_33194__$1 = (function (){var statearr_33200 = state_33194;(statearr_33200[8] = inst_33183__$1);
return statearr_33200;
})();if(cljs.core.truth_(inst_33184))
{var statearr_33201_33215 = state_33194__$1;(statearr_33201_33215[1] = 5);
} else
{var statearr_33202_33216 = state_33194__$1;(statearr_33202_33216[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33195 === 3))
{var inst_33192 = (state_33194[2]);var state_33194__$1 = state_33194;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33194__$1,inst_33192);
} else
{if((state_val_33195 === 2))
{var state_33194__$1 = state_33194;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33194__$1,4,ch);
} else
{if((state_val_33195 === 1))
{var inst_33180 = init;var state_33194__$1 = (function (){var statearr_33203 = state_33194;(statearr_33203[7] = inst_33180);
return statearr_33203;
})();var statearr_33204_33217 = state_33194__$1;(statearr_33204_33217[2] = null);
(statearr_33204_33217[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33208 = [null,null,null,null,null,null,null,null,null];(statearr_33208[0] = state_machine__5507__auto__);
(statearr_33208[1] = 1);
return statearr_33208;
});
var state_machine__5507__auto____1 = (function (state_33194){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33194);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33209){if((e33209 instanceof Object))
{var ex__5510__auto__ = e33209;var statearr_33210_33218 = state_33194;(statearr_33210_33218[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33194);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33209;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33219 = state_33194;
state_33194 = G__33219;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33194){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33194);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33211 = f__5522__auto__.call(null);(statearr_33211[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33211;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33281){var state_val_33282 = (state_33281[1]);if((state_val_33282 === 1))
{var inst_33261 = cljs.core.seq.call(null,coll);var inst_33262 = inst_33261;var state_33281__$1 = (function (){var statearr_33283 = state_33281;(statearr_33283[7] = inst_33262);
return statearr_33283;
})();var statearr_33284_33302 = state_33281__$1;(statearr_33284_33302[2] = null);
(statearr_33284_33302[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 2))
{var inst_33262 = (state_33281[7]);var state_33281__$1 = state_33281;if(cljs.core.truth_(inst_33262))
{var statearr_33285_33303 = state_33281__$1;(statearr_33285_33303[1] = 4);
} else
{var statearr_33286_33304 = state_33281__$1;(statearr_33286_33304[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 3))
{var inst_33279 = (state_33281[2]);var state_33281__$1 = state_33281;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33281__$1,inst_33279);
} else
{if((state_val_33282 === 4))
{var inst_33262 = (state_33281[7]);var inst_33265 = cljs.core.first.call(null,inst_33262);var state_33281__$1 = state_33281;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33281__$1,7,ch,inst_33265);
} else
{if((state_val_33282 === 5))
{var state_33281__$1 = state_33281;if(cljs.core.truth_(close_QMARK_))
{var statearr_33287_33305 = state_33281__$1;(statearr_33287_33305[1] = 8);
} else
{var statearr_33288_33306 = state_33281__$1;(statearr_33288_33306[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 6))
{var inst_33277 = (state_33281[2]);var state_33281__$1 = state_33281;var statearr_33289_33307 = state_33281__$1;(statearr_33289_33307[2] = inst_33277);
(statearr_33289_33307[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 7))
{var inst_33262 = (state_33281[7]);var inst_33267 = (state_33281[2]);var inst_33268 = cljs.core.next.call(null,inst_33262);var inst_33262__$1 = inst_33268;var state_33281__$1 = (function (){var statearr_33290 = state_33281;(statearr_33290[8] = inst_33267);
(statearr_33290[7] = inst_33262__$1);
return statearr_33290;
})();var statearr_33291_33308 = state_33281__$1;(statearr_33291_33308[2] = null);
(statearr_33291_33308[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 8))
{var inst_33272 = cljs.core.async.close_BANG_.call(null,ch);var state_33281__$1 = state_33281;var statearr_33292_33309 = state_33281__$1;(statearr_33292_33309[2] = inst_33272);
(statearr_33292_33309[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 9))
{var state_33281__$1 = state_33281;var statearr_33293_33310 = state_33281__$1;(statearr_33293_33310[2] = null);
(statearr_33293_33310[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33282 === 10))
{var inst_33275 = (state_33281[2]);var state_33281__$1 = state_33281;var statearr_33294_33311 = state_33281__$1;(statearr_33294_33311[2] = inst_33275);
(statearr_33294_33311[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_33298 = [null,null,null,null,null,null,null,null,null];(statearr_33298[0] = state_machine__5507__auto__);
(statearr_33298[1] = 1);
return statearr_33298;
});
var state_machine__5507__auto____1 = (function (state_33281){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33281);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33299){if((e33299 instanceof Object))
{var ex__5510__auto__ = e33299;var statearr_33300_33312 = state_33281;(statearr_33300_33312[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33281);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33299;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33313 = state_33281;
state_33281 = G__33313;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33281){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33281);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33301 = f__5522__auto__.call(null);(statearr_33301[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33301;
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
cljs.core.async.Mux = (function (){var obj33315 = {};return obj33315;
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
cljs.core.async.Mult = (function (){var obj33317 = {};return obj33317;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t33541 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33541 = (function (cs,ch,mult,meta33542){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33542 = meta33542;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33541.cljs$lang$type = true;
cljs.core.async.t33541.cljs$lang$ctorStr = "cljs.core.async/t33541";
cljs.core.async.t33541.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33541");
});})(cs))
;
cljs.core.async.t33541.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t33541.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t33541.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t33541.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t33541.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33541.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t33541.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33543){var self__ = this;
var _33543__$1 = this;return self__.meta33542;
});})(cs))
;
cljs.core.async.t33541.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33543,meta33542__$1){var self__ = this;
var _33543__$1 = this;return (new cljs.core.async.t33541(self__.cs,self__.ch,self__.mult,meta33542__$1));
});})(cs))
;
cljs.core.async.__GT_t33541 = ((function (cs){
return (function __GT_t33541(cs__$1,ch__$1,mult__$1,meta33542){return (new cljs.core.async.t33541(cs__$1,ch__$1,mult__$1,meta33542));
});})(cs))
;
}
return (new cljs.core.async.t33541(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___33764 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33678){var state_val_33679 = (state_33678[1]);if((state_val_33679 === 32))
{var inst_33622 = (state_33678[7]);var inst_33546 = (state_33678[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33678,31,Object,null,30);var inst_33629 = cljs.core.async.put_BANG_.call(null,inst_33622,inst_33546,done);var state_33678__$1 = state_33678;var statearr_33680_33765 = state_33678__$1;(statearr_33680_33765[2] = inst_33629);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33678__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 1))
{var state_33678__$1 = state_33678;var statearr_33681_33766 = state_33678__$1;(statearr_33681_33766[2] = null);
(statearr_33681_33766[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 33))
{var inst_33635 = (state_33678[9]);var inst_33637 = cljs.core.chunked_seq_QMARK_.call(null,inst_33635);var state_33678__$1 = state_33678;if(inst_33637)
{var statearr_33682_33767 = state_33678__$1;(statearr_33682_33767[1] = 36);
} else
{var statearr_33683_33768 = state_33678__$1;(statearr_33683_33768[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 2))
{var state_33678__$1 = state_33678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,4,ch);
} else
{if((state_val_33679 === 34))
{var state_33678__$1 = state_33678;var statearr_33684_33769 = state_33678__$1;(statearr_33684_33769[2] = null);
(statearr_33684_33769[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 3))
{var inst_33676 = (state_33678[2]);var state_33678__$1 = state_33678;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33678__$1,inst_33676);
} else
{if((state_val_33679 === 35))
{var inst_33660 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33685_33770 = state_33678__$1;(statearr_33685_33770[2] = inst_33660);
(statearr_33685_33770[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 4))
{var inst_33546 = (state_33678[8]);var inst_33546__$1 = (state_33678[2]);var inst_33547 = (inst_33546__$1 == null);var state_33678__$1 = (function (){var statearr_33686 = state_33678;(statearr_33686[8] = inst_33546__$1);
return statearr_33686;
})();if(cljs.core.truth_(inst_33547))
{var statearr_33687_33771 = state_33678__$1;(statearr_33687_33771[1] = 5);
} else
{var statearr_33688_33772 = state_33678__$1;(statearr_33688_33772[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 36))
{var inst_33635 = (state_33678[9]);var inst_33639 = cljs.core.chunk_first.call(null,inst_33635);var inst_33640 = cljs.core.chunk_rest.call(null,inst_33635);var inst_33641 = cljs.core.count.call(null,inst_33639);var inst_33614 = inst_33640;var inst_33615 = inst_33639;var inst_33616 = inst_33641;var inst_33617 = 0;var state_33678__$1 = (function (){var statearr_33689 = state_33678;(statearr_33689[10] = inst_33615);
(statearr_33689[11] = inst_33614);
(statearr_33689[12] = inst_33617);
(statearr_33689[13] = inst_33616);
return statearr_33689;
})();var statearr_33690_33773 = state_33678__$1;(statearr_33690_33773[2] = null);
(statearr_33690_33773[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 5))
{var inst_33553 = cljs.core.deref.call(null,cs);var inst_33554 = cljs.core.seq.call(null,inst_33553);var inst_33555 = inst_33554;var inst_33556 = null;var inst_33557 = 0;var inst_33558 = 0;var state_33678__$1 = (function (){var statearr_33691 = state_33678;(statearr_33691[14] = inst_33555);
(statearr_33691[15] = inst_33556);
(statearr_33691[16] = inst_33557);
(statearr_33691[17] = inst_33558);
return statearr_33691;
})();var statearr_33692_33774 = state_33678__$1;(statearr_33692_33774[2] = null);
(statearr_33692_33774[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 37))
{var inst_33635 = (state_33678[9]);var inst_33644 = cljs.core.first.call(null,inst_33635);var state_33678__$1 = (function (){var statearr_33693 = state_33678;(statearr_33693[18] = inst_33644);
return statearr_33693;
})();var statearr_33694_33775 = state_33678__$1;(statearr_33694_33775[2] = null);
(statearr_33694_33775[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 6))
{var inst_33606 = (state_33678[19]);var inst_33605 = cljs.core.deref.call(null,cs);var inst_33606__$1 = cljs.core.keys.call(null,inst_33605);var inst_33607 = cljs.core.count.call(null,inst_33606__$1);var inst_33608 = cljs.core.reset_BANG_.call(null,dctr,inst_33607);var inst_33613 = cljs.core.seq.call(null,inst_33606__$1);var inst_33614 = inst_33613;var inst_33615 = null;var inst_33616 = 0;var inst_33617 = 0;var state_33678__$1 = (function (){var statearr_33695 = state_33678;(statearr_33695[19] = inst_33606__$1);
(statearr_33695[20] = inst_33608);
(statearr_33695[10] = inst_33615);
(statearr_33695[11] = inst_33614);
(statearr_33695[12] = inst_33617);
(statearr_33695[13] = inst_33616);
return statearr_33695;
})();var statearr_33696_33776 = state_33678__$1;(statearr_33696_33776[2] = null);
(statearr_33696_33776[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 38))
{var inst_33657 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33697_33777 = state_33678__$1;(statearr_33697_33777[2] = inst_33657);
(statearr_33697_33777[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 7))
{var inst_33674 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33698_33778 = state_33678__$1;(statearr_33698_33778[2] = inst_33674);
(statearr_33698_33778[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 39))
{var inst_33635 = (state_33678[9]);var inst_33653 = (state_33678[2]);var inst_33654 = cljs.core.next.call(null,inst_33635);var inst_33614 = inst_33654;var inst_33615 = null;var inst_33616 = 0;var inst_33617 = 0;var state_33678__$1 = (function (){var statearr_33699 = state_33678;(statearr_33699[10] = inst_33615);
(statearr_33699[11] = inst_33614);
(statearr_33699[12] = inst_33617);
(statearr_33699[13] = inst_33616);
(statearr_33699[21] = inst_33653);
return statearr_33699;
})();var statearr_33700_33779 = state_33678__$1;(statearr_33700_33779[2] = null);
(statearr_33700_33779[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 8))
{var inst_33557 = (state_33678[16]);var inst_33558 = (state_33678[17]);var inst_33560 = (inst_33558 < inst_33557);var inst_33561 = inst_33560;var state_33678__$1 = state_33678;if(cljs.core.truth_(inst_33561))
{var statearr_33701_33780 = state_33678__$1;(statearr_33701_33780[1] = 10);
} else
{var statearr_33702_33781 = state_33678__$1;(statearr_33702_33781[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 40))
{var inst_33644 = (state_33678[18]);var inst_33645 = (state_33678[2]);var inst_33646 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33647 = cljs.core.async.untap_STAR_.call(null,m,inst_33644);var state_33678__$1 = (function (){var statearr_33703 = state_33678;(statearr_33703[22] = inst_33645);
(statearr_33703[23] = inst_33646);
return statearr_33703;
})();var statearr_33704_33782 = state_33678__$1;(statearr_33704_33782[2] = inst_33647);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33678__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 9))
{var inst_33603 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33705_33783 = state_33678__$1;(statearr_33705_33783[2] = inst_33603);
(statearr_33705_33783[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 41))
{var inst_33546 = (state_33678[8]);var inst_33644 = (state_33678[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33678,40,Object,null,39);var inst_33651 = cljs.core.async.put_BANG_.call(null,inst_33644,inst_33546,done);var state_33678__$1 = state_33678;var statearr_33706_33784 = state_33678__$1;(statearr_33706_33784[2] = inst_33651);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33678__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 10))
{var inst_33556 = (state_33678[15]);var inst_33558 = (state_33678[17]);var inst_33564 = cljs.core._nth.call(null,inst_33556,inst_33558);var inst_33565 = cljs.core.nth.call(null,inst_33564,0,null);var inst_33566 = cljs.core.nth.call(null,inst_33564,1,null);var state_33678__$1 = (function (){var statearr_33707 = state_33678;(statearr_33707[24] = inst_33565);
return statearr_33707;
})();if(cljs.core.truth_(inst_33566))
{var statearr_33708_33785 = state_33678__$1;(statearr_33708_33785[1] = 13);
} else
{var statearr_33709_33786 = state_33678__$1;(statearr_33709_33786[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 42))
{var state_33678__$1 = state_33678;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33678__$1,45,dchan);
} else
{if((state_val_33679 === 11))
{var inst_33555 = (state_33678[14]);var inst_33575 = (state_33678[25]);var inst_33575__$1 = cljs.core.seq.call(null,inst_33555);var state_33678__$1 = (function (){var statearr_33710 = state_33678;(statearr_33710[25] = inst_33575__$1);
return statearr_33710;
})();if(inst_33575__$1)
{var statearr_33711_33787 = state_33678__$1;(statearr_33711_33787[1] = 16);
} else
{var statearr_33712_33788 = state_33678__$1;(statearr_33712_33788[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 43))
{var state_33678__$1 = state_33678;var statearr_33713_33789 = state_33678__$1;(statearr_33713_33789[2] = null);
(statearr_33713_33789[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 12))
{var inst_33601 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33714_33790 = state_33678__$1;(statearr_33714_33790[2] = inst_33601);
(statearr_33714_33790[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 44))
{var inst_33671 = (state_33678[2]);var state_33678__$1 = (function (){var statearr_33715 = state_33678;(statearr_33715[26] = inst_33671);
return statearr_33715;
})();var statearr_33716_33791 = state_33678__$1;(statearr_33716_33791[2] = null);
(statearr_33716_33791[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 13))
{var inst_33565 = (state_33678[24]);var inst_33568 = cljs.core.async.close_BANG_.call(null,inst_33565);var state_33678__$1 = state_33678;var statearr_33717_33792 = state_33678__$1;(statearr_33717_33792[2] = inst_33568);
(statearr_33717_33792[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 45))
{var inst_33668 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33721_33793 = state_33678__$1;(statearr_33721_33793[2] = inst_33668);
(statearr_33721_33793[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 14))
{var state_33678__$1 = state_33678;var statearr_33722_33794 = state_33678__$1;(statearr_33722_33794[2] = null);
(statearr_33722_33794[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 15))
{var inst_33555 = (state_33678[14]);var inst_33556 = (state_33678[15]);var inst_33557 = (state_33678[16]);var inst_33558 = (state_33678[17]);var inst_33571 = (state_33678[2]);var inst_33572 = (inst_33558 + 1);var tmp33718 = inst_33555;var tmp33719 = inst_33556;var tmp33720 = inst_33557;var inst_33555__$1 = tmp33718;var inst_33556__$1 = tmp33719;var inst_33557__$1 = tmp33720;var inst_33558__$1 = inst_33572;var state_33678__$1 = (function (){var statearr_33723 = state_33678;(statearr_33723[14] = inst_33555__$1);
(statearr_33723[15] = inst_33556__$1);
(statearr_33723[16] = inst_33557__$1);
(statearr_33723[17] = inst_33558__$1);
(statearr_33723[27] = inst_33571);
return statearr_33723;
})();var statearr_33724_33795 = state_33678__$1;(statearr_33724_33795[2] = null);
(statearr_33724_33795[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 16))
{var inst_33575 = (state_33678[25]);var inst_33577 = cljs.core.chunked_seq_QMARK_.call(null,inst_33575);var state_33678__$1 = state_33678;if(inst_33577)
{var statearr_33725_33796 = state_33678__$1;(statearr_33725_33796[1] = 19);
} else
{var statearr_33726_33797 = state_33678__$1;(statearr_33726_33797[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 17))
{var state_33678__$1 = state_33678;var statearr_33727_33798 = state_33678__$1;(statearr_33727_33798[2] = null);
(statearr_33727_33798[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 18))
{var inst_33599 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33728_33799 = state_33678__$1;(statearr_33728_33799[2] = inst_33599);
(statearr_33728_33799[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 19))
{var inst_33575 = (state_33678[25]);var inst_33579 = cljs.core.chunk_first.call(null,inst_33575);var inst_33580 = cljs.core.chunk_rest.call(null,inst_33575);var inst_33581 = cljs.core.count.call(null,inst_33579);var inst_33555 = inst_33580;var inst_33556 = inst_33579;var inst_33557 = inst_33581;var inst_33558 = 0;var state_33678__$1 = (function (){var statearr_33729 = state_33678;(statearr_33729[14] = inst_33555);
(statearr_33729[15] = inst_33556);
(statearr_33729[16] = inst_33557);
(statearr_33729[17] = inst_33558);
return statearr_33729;
})();var statearr_33730_33800 = state_33678__$1;(statearr_33730_33800[2] = null);
(statearr_33730_33800[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 20))
{var inst_33575 = (state_33678[25]);var inst_33585 = cljs.core.first.call(null,inst_33575);var inst_33586 = cljs.core.nth.call(null,inst_33585,0,null);var inst_33587 = cljs.core.nth.call(null,inst_33585,1,null);var state_33678__$1 = (function (){var statearr_33731 = state_33678;(statearr_33731[28] = inst_33586);
return statearr_33731;
})();if(cljs.core.truth_(inst_33587))
{var statearr_33732_33801 = state_33678__$1;(statearr_33732_33801[1] = 22);
} else
{var statearr_33733_33802 = state_33678__$1;(statearr_33733_33802[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 21))
{var inst_33596 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33734_33803 = state_33678__$1;(statearr_33734_33803[2] = inst_33596);
(statearr_33734_33803[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 22))
{var inst_33586 = (state_33678[28]);var inst_33589 = cljs.core.async.close_BANG_.call(null,inst_33586);var state_33678__$1 = state_33678;var statearr_33735_33804 = state_33678__$1;(statearr_33735_33804[2] = inst_33589);
(statearr_33735_33804[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 23))
{var state_33678__$1 = state_33678;var statearr_33736_33805 = state_33678__$1;(statearr_33736_33805[2] = null);
(statearr_33736_33805[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 24))
{var inst_33575 = (state_33678[25]);var inst_33592 = (state_33678[2]);var inst_33593 = cljs.core.next.call(null,inst_33575);var inst_33555 = inst_33593;var inst_33556 = null;var inst_33557 = 0;var inst_33558 = 0;var state_33678__$1 = (function (){var statearr_33737 = state_33678;(statearr_33737[29] = inst_33592);
(statearr_33737[14] = inst_33555);
(statearr_33737[15] = inst_33556);
(statearr_33737[16] = inst_33557);
(statearr_33737[17] = inst_33558);
return statearr_33737;
})();var statearr_33738_33806 = state_33678__$1;(statearr_33738_33806[2] = null);
(statearr_33738_33806[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 25))
{var inst_33617 = (state_33678[12]);var inst_33616 = (state_33678[13]);var inst_33619 = (inst_33617 < inst_33616);var inst_33620 = inst_33619;var state_33678__$1 = state_33678;if(cljs.core.truth_(inst_33620))
{var statearr_33739_33807 = state_33678__$1;(statearr_33739_33807[1] = 27);
} else
{var statearr_33740_33808 = state_33678__$1;(statearr_33740_33808[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 26))
{var inst_33606 = (state_33678[19]);var inst_33664 = (state_33678[2]);var inst_33665 = cljs.core.seq.call(null,inst_33606);var state_33678__$1 = (function (){var statearr_33741 = state_33678;(statearr_33741[30] = inst_33664);
return statearr_33741;
})();if(inst_33665)
{var statearr_33742_33809 = state_33678__$1;(statearr_33742_33809[1] = 42);
} else
{var statearr_33743_33810 = state_33678__$1;(statearr_33743_33810[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 27))
{var inst_33615 = (state_33678[10]);var inst_33617 = (state_33678[12]);var inst_33622 = cljs.core._nth.call(null,inst_33615,inst_33617);var state_33678__$1 = (function (){var statearr_33744 = state_33678;(statearr_33744[7] = inst_33622);
return statearr_33744;
})();var statearr_33745_33811 = state_33678__$1;(statearr_33745_33811[2] = null);
(statearr_33745_33811[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 28))
{var inst_33635 = (state_33678[9]);var inst_33614 = (state_33678[11]);var inst_33635__$1 = cljs.core.seq.call(null,inst_33614);var state_33678__$1 = (function (){var statearr_33749 = state_33678;(statearr_33749[9] = inst_33635__$1);
return statearr_33749;
})();if(inst_33635__$1)
{var statearr_33750_33812 = state_33678__$1;(statearr_33750_33812[1] = 33);
} else
{var statearr_33751_33813 = state_33678__$1;(statearr_33751_33813[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 29))
{var inst_33662 = (state_33678[2]);var state_33678__$1 = state_33678;var statearr_33752_33814 = state_33678__$1;(statearr_33752_33814[2] = inst_33662);
(statearr_33752_33814[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 30))
{var inst_33615 = (state_33678[10]);var inst_33614 = (state_33678[11]);var inst_33617 = (state_33678[12]);var inst_33616 = (state_33678[13]);var inst_33631 = (state_33678[2]);var inst_33632 = (inst_33617 + 1);var tmp33746 = inst_33615;var tmp33747 = inst_33614;var tmp33748 = inst_33616;var inst_33614__$1 = tmp33747;var inst_33615__$1 = tmp33746;var inst_33616__$1 = tmp33748;var inst_33617__$1 = inst_33632;var state_33678__$1 = (function (){var statearr_33753 = state_33678;(statearr_33753[10] = inst_33615__$1);
(statearr_33753[11] = inst_33614__$1);
(statearr_33753[12] = inst_33617__$1);
(statearr_33753[13] = inst_33616__$1);
(statearr_33753[31] = inst_33631);
return statearr_33753;
})();var statearr_33754_33815 = state_33678__$1;(statearr_33754_33815[2] = null);
(statearr_33754_33815[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33679 === 31))
{var inst_33622 = (state_33678[7]);var inst_33623 = (state_33678[2]);var inst_33624 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33625 = cljs.core.async.untap_STAR_.call(null,m,inst_33622);var state_33678__$1 = (function (){var statearr_33755 = state_33678;(statearr_33755[32] = inst_33623);
(statearr_33755[33] = inst_33624);
return statearr_33755;
})();var statearr_33756_33816 = state_33678__$1;(statearr_33756_33816[2] = inst_33625);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33678__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_33760 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33760[0] = state_machine__5507__auto__);
(statearr_33760[1] = 1);
return statearr_33760;
});
var state_machine__5507__auto____1 = (function (state_33678){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33678);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33761){if((e33761 instanceof Object))
{var ex__5510__auto__ = e33761;var statearr_33762_33817 = state_33678;(statearr_33762_33817[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33678);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33761;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33818 = state_33678;
state_33678 = G__33818;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33678){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33678);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33763 = f__5522__auto__.call(null);(statearr_33763[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33764);
return statearr_33763;
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
cljs.core.async.Mix = (function (){var obj33820 = {};return obj33820;
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
;var m = (function (){if(typeof cljs.core.async.t33930 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33930 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta33931){
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
this.meta33931 = meta33931;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33930.cljs$lang$type = true;
cljs.core.async.t33930.cljs$lang$ctorStr = "cljs.core.async/t33930";
cljs.core.async.t33930.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33930");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33930.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t33930.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33930.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33930.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33930.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33930.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33930.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33930.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33930.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33932){var self__ = this;
var _33932__$1 = this;return self__.meta33931;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t33930.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_33932,meta33931__$1){var self__ = this;
var _33932__$1 = this;return (new cljs.core.async.t33930(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta33931__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t33930 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t33930(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33931){return (new cljs.core.async.t33930(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta33931));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t33930(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34039 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33997){var state_val_33998 = (state_33997[1]);if((state_val_33998 === 1))
{var inst_33936 = (state_33997[7]);var inst_33936__$1 = calc_state.call(null);var inst_33937 = cljs.core.seq_QMARK_.call(null,inst_33936__$1);var state_33997__$1 = (function (){var statearr_33999 = state_33997;(statearr_33999[7] = inst_33936__$1);
return statearr_33999;
})();if(inst_33937)
{var statearr_34000_34040 = state_33997__$1;(statearr_34000_34040[1] = 2);
} else
{var statearr_34001_34041 = state_33997__$1;(statearr_34001_34041[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 2))
{var inst_33936 = (state_33997[7]);var inst_33939 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33936);var state_33997__$1 = state_33997;var statearr_34002_34042 = state_33997__$1;(statearr_34002_34042[2] = inst_33939);
(statearr_34002_34042[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 3))
{var inst_33936 = (state_33997[7]);var state_33997__$1 = state_33997;var statearr_34003_34043 = state_33997__$1;(statearr_34003_34043[2] = inst_33936);
(statearr_34003_34043[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 4))
{var inst_33936 = (state_33997[7]);var inst_33942 = (state_33997[2]);var inst_33943 = cljs.core.get.call(null,inst_33942,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33944 = cljs.core.get.call(null,inst_33942,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33945 = cljs.core.get.call(null,inst_33942,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_33946 = inst_33936;var state_33997__$1 = (function (){var statearr_34004 = state_33997;(statearr_34004[8] = inst_33943);
(statearr_34004[9] = inst_33945);
(statearr_34004[10] = inst_33944);
(statearr_34004[11] = inst_33946);
return statearr_34004;
})();var statearr_34005_34044 = state_33997__$1;(statearr_34005_34044[2] = null);
(statearr_34005_34044[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 5))
{var inst_33946 = (state_33997[11]);var inst_33949 = cljs.core.seq_QMARK_.call(null,inst_33946);var state_33997__$1 = state_33997;if(inst_33949)
{var statearr_34006_34045 = state_33997__$1;(statearr_34006_34045[1] = 7);
} else
{var statearr_34007_34046 = state_33997__$1;(statearr_34007_34046[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 6))
{var inst_33995 = (state_33997[2]);var state_33997__$1 = state_33997;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33997__$1,inst_33995);
} else
{if((state_val_33998 === 7))
{var inst_33946 = (state_33997[11]);var inst_33951 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33946);var state_33997__$1 = state_33997;var statearr_34008_34047 = state_33997__$1;(statearr_34008_34047[2] = inst_33951);
(statearr_34008_34047[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 8))
{var inst_33946 = (state_33997[11]);var state_33997__$1 = state_33997;var statearr_34009_34048 = state_33997__$1;(statearr_34009_34048[2] = inst_33946);
(statearr_34009_34048[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 9))
{var inst_33954 = (state_33997[12]);var inst_33954__$1 = (state_33997[2]);var inst_33955 = cljs.core.get.call(null,inst_33954__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_33956 = cljs.core.get.call(null,inst_33954__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_33957 = cljs.core.get.call(null,inst_33954__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_33997__$1 = (function (){var statearr_34010 = state_33997;(statearr_34010[12] = inst_33954__$1);
(statearr_34010[13] = inst_33956);
(statearr_34010[14] = inst_33957);
return statearr_34010;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33997__$1,10,inst_33955);
} else
{if((state_val_33998 === 10))
{var inst_33961 = (state_33997[15]);var inst_33962 = (state_33997[16]);var inst_33960 = (state_33997[2]);var inst_33961__$1 = cljs.core.nth.call(null,inst_33960,0,null);var inst_33962__$1 = cljs.core.nth.call(null,inst_33960,1,null);var inst_33963 = (inst_33961__$1 == null);var inst_33964 = cljs.core._EQ_.call(null,inst_33962__$1,change);var inst_33965 = (inst_33963) || (inst_33964);var state_33997__$1 = (function (){var statearr_34011 = state_33997;(statearr_34011[15] = inst_33961__$1);
(statearr_34011[16] = inst_33962__$1);
return statearr_34011;
})();if(cljs.core.truth_(inst_33965))
{var statearr_34012_34049 = state_33997__$1;(statearr_34012_34049[1] = 11);
} else
{var statearr_34013_34050 = state_33997__$1;(statearr_34013_34050[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 11))
{var inst_33961 = (state_33997[15]);var inst_33967 = (inst_33961 == null);var state_33997__$1 = state_33997;if(cljs.core.truth_(inst_33967))
{var statearr_34014_34051 = state_33997__$1;(statearr_34014_34051[1] = 14);
} else
{var statearr_34015_34052 = state_33997__$1;(statearr_34015_34052[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 12))
{var inst_33976 = (state_33997[17]);var inst_33957 = (state_33997[14]);var inst_33962 = (state_33997[16]);var inst_33976__$1 = inst_33957.call(null,inst_33962);var state_33997__$1 = (function (){var statearr_34016 = state_33997;(statearr_34016[17] = inst_33976__$1);
return statearr_34016;
})();if(cljs.core.truth_(inst_33976__$1))
{var statearr_34017_34053 = state_33997__$1;(statearr_34017_34053[1] = 17);
} else
{var statearr_34018_34054 = state_33997__$1;(statearr_34018_34054[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 13))
{var inst_33993 = (state_33997[2]);var state_33997__$1 = state_33997;var statearr_34019_34055 = state_33997__$1;(statearr_34019_34055[2] = inst_33993);
(statearr_34019_34055[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 14))
{var inst_33962 = (state_33997[16]);var inst_33969 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_33962);var state_33997__$1 = state_33997;var statearr_34020_34056 = state_33997__$1;(statearr_34020_34056[2] = inst_33969);
(statearr_34020_34056[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 15))
{var state_33997__$1 = state_33997;var statearr_34021_34057 = state_33997__$1;(statearr_34021_34057[2] = null);
(statearr_34021_34057[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 16))
{var inst_33972 = (state_33997[2]);var inst_33973 = calc_state.call(null);var inst_33946 = inst_33973;var state_33997__$1 = (function (){var statearr_34022 = state_33997;(statearr_34022[11] = inst_33946);
(statearr_34022[18] = inst_33972);
return statearr_34022;
})();var statearr_34023_34058 = state_33997__$1;(statearr_34023_34058[2] = null);
(statearr_34023_34058[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 17))
{var inst_33976 = (state_33997[17]);var state_33997__$1 = state_33997;var statearr_34024_34059 = state_33997__$1;(statearr_34024_34059[2] = inst_33976);
(statearr_34024_34059[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 18))
{var inst_33956 = (state_33997[13]);var inst_33957 = (state_33997[14]);var inst_33962 = (state_33997[16]);var inst_33979 = cljs.core.empty_QMARK_.call(null,inst_33957);var inst_33980 = inst_33956.call(null,inst_33962);var inst_33981 = cljs.core.not.call(null,inst_33980);var inst_33982 = (inst_33979) && (inst_33981);var state_33997__$1 = state_33997;var statearr_34025_34060 = state_33997__$1;(statearr_34025_34060[2] = inst_33982);
(statearr_34025_34060[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 19))
{var inst_33984 = (state_33997[2]);var state_33997__$1 = state_33997;if(cljs.core.truth_(inst_33984))
{var statearr_34026_34061 = state_33997__$1;(statearr_34026_34061[1] = 20);
} else
{var statearr_34027_34062 = state_33997__$1;(statearr_34027_34062[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 20))
{var inst_33961 = (state_33997[15]);var state_33997__$1 = state_33997;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33997__$1,23,out,inst_33961);
} else
{if((state_val_33998 === 21))
{var state_33997__$1 = state_33997;var statearr_34028_34063 = state_33997__$1;(statearr_34028_34063[2] = null);
(statearr_34028_34063[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 22))
{var inst_33954 = (state_33997[12]);var inst_33990 = (state_33997[2]);var inst_33946 = inst_33954;var state_33997__$1 = (function (){var statearr_34029 = state_33997;(statearr_34029[19] = inst_33990);
(statearr_34029[11] = inst_33946);
return statearr_34029;
})();var statearr_34030_34064 = state_33997__$1;(statearr_34030_34064[2] = null);
(statearr_34030_34064[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33998 === 23))
{var inst_33987 = (state_33997[2]);var state_33997__$1 = state_33997;var statearr_34031_34065 = state_33997__$1;(statearr_34031_34065[2] = inst_33987);
(statearr_34031_34065[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34035 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34035[0] = state_machine__5507__auto__);
(statearr_34035[1] = 1);
return statearr_34035;
});
var state_machine__5507__auto____1 = (function (state_33997){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33997);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34036){if((e34036 instanceof Object))
{var ex__5510__auto__ = e34036;var statearr_34037_34066 = state_33997;(statearr_34037_34066[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33997);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34036;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34067 = state_33997;
state_33997 = G__34067;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33997){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33997);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34038 = f__5522__auto__.call(null);(statearr_34038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34039);
return statearr_34038;
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
cljs.core.async.Pub = (function (){var obj34069 = {};return obj34069;
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
return (function (p1__34070_SHARP_){if(cljs.core.truth_(p1__34070_SHARP_.call(null,topic)))
{return p1__34070_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34070_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34195 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34195 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34196){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34196 = meta34196;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34195.cljs$lang$type = true;
cljs.core.async.t34195.cljs$lang$ctorStr = "cljs.core.async/t34195";
cljs.core.async.t34195.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34195");
});})(mults,ensure_mult))
;
cljs.core.async.t34195.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34195.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34195.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34195.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34195.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34195.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34195.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34197){var self__ = this;
var _34197__$1 = this;return self__.meta34196;
});})(mults,ensure_mult))
;
cljs.core.async.t34195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34197,meta34196__$1){var self__ = this;
var _34197__$1 = this;return (new cljs.core.async.t34195(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34196__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34195 = ((function (mults,ensure_mult){
return (function __GT_t34195(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34196){return (new cljs.core.async.t34195(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34196));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34195(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34319 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34271){var state_val_34272 = (state_34271[1]);if((state_val_34272 === 1))
{var state_34271__$1 = state_34271;var statearr_34273_34320 = state_34271__$1;(statearr_34273_34320[2] = null);
(statearr_34273_34320[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 2))
{var state_34271__$1 = state_34271;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34271__$1,4,ch);
} else
{if((state_val_34272 === 3))
{var inst_34269 = (state_34271[2]);var state_34271__$1 = state_34271;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34271__$1,inst_34269);
} else
{if((state_val_34272 === 4))
{var inst_34200 = (state_34271[7]);var inst_34200__$1 = (state_34271[2]);var inst_34201 = (inst_34200__$1 == null);var state_34271__$1 = (function (){var statearr_34274 = state_34271;(statearr_34274[7] = inst_34200__$1);
return statearr_34274;
})();if(cljs.core.truth_(inst_34201))
{var statearr_34275_34321 = state_34271__$1;(statearr_34275_34321[1] = 5);
} else
{var statearr_34276_34322 = state_34271__$1;(statearr_34276_34322[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 5))
{var inst_34207 = cljs.core.deref.call(null,mults);var inst_34208 = cljs.core.vals.call(null,inst_34207);var inst_34209 = cljs.core.seq.call(null,inst_34208);var inst_34210 = inst_34209;var inst_34211 = null;var inst_34212 = 0;var inst_34213 = 0;var state_34271__$1 = (function (){var statearr_34277 = state_34271;(statearr_34277[8] = inst_34213);
(statearr_34277[9] = inst_34212);
(statearr_34277[10] = inst_34211);
(statearr_34277[11] = inst_34210);
return statearr_34277;
})();var statearr_34278_34323 = state_34271__$1;(statearr_34278_34323[2] = null);
(statearr_34278_34323[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 6))
{var inst_34248 = (state_34271[12]);var inst_34250 = (state_34271[13]);var inst_34200 = (state_34271[7]);var inst_34248__$1 = topic_fn.call(null,inst_34200);var inst_34249 = cljs.core.deref.call(null,mults);var inst_34250__$1 = cljs.core.get.call(null,inst_34249,inst_34248__$1);var state_34271__$1 = (function (){var statearr_34279 = state_34271;(statearr_34279[12] = inst_34248__$1);
(statearr_34279[13] = inst_34250__$1);
return statearr_34279;
})();if(cljs.core.truth_(inst_34250__$1))
{var statearr_34280_34324 = state_34271__$1;(statearr_34280_34324[1] = 19);
} else
{var statearr_34281_34325 = state_34271__$1;(statearr_34281_34325[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 7))
{var inst_34267 = (state_34271[2]);var state_34271__$1 = state_34271;var statearr_34282_34326 = state_34271__$1;(statearr_34282_34326[2] = inst_34267);
(statearr_34282_34326[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 8))
{var inst_34213 = (state_34271[8]);var inst_34212 = (state_34271[9]);var inst_34215 = (inst_34213 < inst_34212);var inst_34216 = inst_34215;var state_34271__$1 = state_34271;if(cljs.core.truth_(inst_34216))
{var statearr_34286_34327 = state_34271__$1;(statearr_34286_34327[1] = 10);
} else
{var statearr_34287_34328 = state_34271__$1;(statearr_34287_34328[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 9))
{var inst_34246 = (state_34271[2]);var state_34271__$1 = state_34271;var statearr_34288_34329 = state_34271__$1;(statearr_34288_34329[2] = inst_34246);
(statearr_34288_34329[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 10))
{var inst_34213 = (state_34271[8]);var inst_34212 = (state_34271[9]);var inst_34211 = (state_34271[10]);var inst_34210 = (state_34271[11]);var inst_34218 = cljs.core._nth.call(null,inst_34211,inst_34213);var inst_34219 = cljs.core.async.muxch_STAR_.call(null,inst_34218);var inst_34220 = cljs.core.async.close_BANG_.call(null,inst_34219);var inst_34221 = (inst_34213 + 1);var tmp34283 = inst_34212;var tmp34284 = inst_34211;var tmp34285 = inst_34210;var inst_34210__$1 = tmp34285;var inst_34211__$1 = tmp34284;var inst_34212__$1 = tmp34283;var inst_34213__$1 = inst_34221;var state_34271__$1 = (function (){var statearr_34289 = state_34271;(statearr_34289[8] = inst_34213__$1);
(statearr_34289[9] = inst_34212__$1);
(statearr_34289[10] = inst_34211__$1);
(statearr_34289[11] = inst_34210__$1);
(statearr_34289[14] = inst_34220);
return statearr_34289;
})();var statearr_34290_34330 = state_34271__$1;(statearr_34290_34330[2] = null);
(statearr_34290_34330[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 11))
{var inst_34210 = (state_34271[11]);var inst_34224 = (state_34271[15]);var inst_34224__$1 = cljs.core.seq.call(null,inst_34210);var state_34271__$1 = (function (){var statearr_34291 = state_34271;(statearr_34291[15] = inst_34224__$1);
return statearr_34291;
})();if(inst_34224__$1)
{var statearr_34292_34331 = state_34271__$1;(statearr_34292_34331[1] = 13);
} else
{var statearr_34293_34332 = state_34271__$1;(statearr_34293_34332[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 12))
{var inst_34244 = (state_34271[2]);var state_34271__$1 = state_34271;var statearr_34294_34333 = state_34271__$1;(statearr_34294_34333[2] = inst_34244);
(statearr_34294_34333[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 13))
{var inst_34224 = (state_34271[15]);var inst_34226 = cljs.core.chunked_seq_QMARK_.call(null,inst_34224);var state_34271__$1 = state_34271;if(inst_34226)
{var statearr_34295_34334 = state_34271__$1;(statearr_34295_34334[1] = 16);
} else
{var statearr_34296_34335 = state_34271__$1;(statearr_34296_34335[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 14))
{var state_34271__$1 = state_34271;var statearr_34297_34336 = state_34271__$1;(statearr_34297_34336[2] = null);
(statearr_34297_34336[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 15))
{var inst_34242 = (state_34271[2]);var state_34271__$1 = state_34271;var statearr_34298_34337 = state_34271__$1;(statearr_34298_34337[2] = inst_34242);
(statearr_34298_34337[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 16))
{var inst_34224 = (state_34271[15]);var inst_34228 = cljs.core.chunk_first.call(null,inst_34224);var inst_34229 = cljs.core.chunk_rest.call(null,inst_34224);var inst_34230 = cljs.core.count.call(null,inst_34228);var inst_34210 = inst_34229;var inst_34211 = inst_34228;var inst_34212 = inst_34230;var inst_34213 = 0;var state_34271__$1 = (function (){var statearr_34299 = state_34271;(statearr_34299[8] = inst_34213);
(statearr_34299[9] = inst_34212);
(statearr_34299[10] = inst_34211);
(statearr_34299[11] = inst_34210);
return statearr_34299;
})();var statearr_34300_34338 = state_34271__$1;(statearr_34300_34338[2] = null);
(statearr_34300_34338[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 17))
{var inst_34224 = (state_34271[15]);var inst_34233 = cljs.core.first.call(null,inst_34224);var inst_34234 = cljs.core.async.muxch_STAR_.call(null,inst_34233);var inst_34235 = cljs.core.async.close_BANG_.call(null,inst_34234);var inst_34236 = cljs.core.next.call(null,inst_34224);var inst_34210 = inst_34236;var inst_34211 = null;var inst_34212 = 0;var inst_34213 = 0;var state_34271__$1 = (function (){var statearr_34301 = state_34271;(statearr_34301[8] = inst_34213);
(statearr_34301[9] = inst_34212);
(statearr_34301[10] = inst_34211);
(statearr_34301[11] = inst_34210);
(statearr_34301[16] = inst_34235);
return statearr_34301;
})();var statearr_34302_34339 = state_34271__$1;(statearr_34302_34339[2] = null);
(statearr_34302_34339[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 18))
{var inst_34239 = (state_34271[2]);var state_34271__$1 = state_34271;var statearr_34303_34340 = state_34271__$1;(statearr_34303_34340[2] = inst_34239);
(statearr_34303_34340[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 19))
{var state_34271__$1 = state_34271;var statearr_34304_34341 = state_34271__$1;(statearr_34304_34341[2] = null);
(statearr_34304_34341[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 20))
{var state_34271__$1 = state_34271;var statearr_34305_34342 = state_34271__$1;(statearr_34305_34342[2] = null);
(statearr_34305_34342[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 21))
{var inst_34264 = (state_34271[2]);var state_34271__$1 = (function (){var statearr_34306 = state_34271;(statearr_34306[17] = inst_34264);
return statearr_34306;
})();var statearr_34307_34343 = state_34271__$1;(statearr_34307_34343[2] = null);
(statearr_34307_34343[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 22))
{var inst_34261 = (state_34271[2]);var state_34271__$1 = state_34271;var statearr_34308_34344 = state_34271__$1;(statearr_34308_34344[2] = inst_34261);
(statearr_34308_34344[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 23))
{var inst_34248 = (state_34271[12]);var inst_34252 = (state_34271[2]);var inst_34253 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34248);var state_34271__$1 = (function (){var statearr_34309 = state_34271;(statearr_34309[18] = inst_34252);
return statearr_34309;
})();var statearr_34310_34345 = state_34271__$1;(statearr_34310_34345[2] = inst_34253);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34271__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34272 === 24))
{var inst_34250 = (state_34271[13]);var inst_34200 = (state_34271[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34271,23,Object,null,22);var inst_34257 = cljs.core.async.muxch_STAR_.call(null,inst_34250);var state_34271__$1 = state_34271;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34271__$1,25,inst_34257,inst_34200);
} else
{if((state_val_34272 === 25))
{var inst_34259 = (state_34271[2]);var state_34271__$1 = state_34271;var statearr_34311_34346 = state_34271__$1;(statearr_34311_34346[2] = inst_34259);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34271__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34315 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34315[0] = state_machine__5507__auto__);
(statearr_34315[1] = 1);
return statearr_34315;
});
var state_machine__5507__auto____1 = (function (state_34271){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34271);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34316){if((e34316 instanceof Object))
{var ex__5510__auto__ = e34316;var statearr_34317_34347 = state_34271;(statearr_34317_34347[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34271);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34316;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34348 = state_34271;
state_34271 = G__34348;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34271){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34271);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34318 = f__5522__auto__.call(null);(statearr_34318[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34319);
return statearr_34318;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34485 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34455){var state_val_34456 = (state_34455[1]);if((state_val_34456 === 1))
{var state_34455__$1 = state_34455;var statearr_34457_34486 = state_34455__$1;(statearr_34457_34486[2] = null);
(statearr_34457_34486[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 2))
{var inst_34418 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34419 = 0;var state_34455__$1 = (function (){var statearr_34458 = state_34455;(statearr_34458[7] = inst_34418);
(statearr_34458[8] = inst_34419);
return statearr_34458;
})();var statearr_34459_34487 = state_34455__$1;(statearr_34459_34487[2] = null);
(statearr_34459_34487[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 3))
{var inst_34453 = (state_34455[2]);var state_34455__$1 = state_34455;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34455__$1,inst_34453);
} else
{if((state_val_34456 === 4))
{var inst_34419 = (state_34455[8]);var inst_34421 = (inst_34419 < cnt);var state_34455__$1 = state_34455;if(cljs.core.truth_(inst_34421))
{var statearr_34460_34488 = state_34455__$1;(statearr_34460_34488[1] = 6);
} else
{var statearr_34461_34489 = state_34455__$1;(statearr_34461_34489[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 5))
{var inst_34439 = (state_34455[2]);var state_34455__$1 = (function (){var statearr_34462 = state_34455;(statearr_34462[9] = inst_34439);
return statearr_34462;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34455__$1,12,dchan);
} else
{if((state_val_34456 === 6))
{var state_34455__$1 = state_34455;var statearr_34463_34490 = state_34455__$1;(statearr_34463_34490[2] = null);
(statearr_34463_34490[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 7))
{var state_34455__$1 = state_34455;var statearr_34464_34491 = state_34455__$1;(statearr_34464_34491[2] = null);
(statearr_34464_34491[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 8))
{var inst_34437 = (state_34455[2]);var state_34455__$1 = state_34455;var statearr_34465_34492 = state_34455__$1;(statearr_34465_34492[2] = inst_34437);
(statearr_34465_34492[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 9))
{var inst_34419 = (state_34455[8]);var inst_34432 = (state_34455[2]);var inst_34433 = (inst_34419 + 1);var inst_34419__$1 = inst_34433;var state_34455__$1 = (function (){var statearr_34466 = state_34455;(statearr_34466[8] = inst_34419__$1);
(statearr_34466[10] = inst_34432);
return statearr_34466;
})();var statearr_34467_34493 = state_34455__$1;(statearr_34467_34493[2] = null);
(statearr_34467_34493[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 10))
{var inst_34423 = (state_34455[2]);var inst_34424 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34455__$1 = (function (){var statearr_34468 = state_34455;(statearr_34468[11] = inst_34423);
return statearr_34468;
})();var statearr_34469_34494 = state_34455__$1;(statearr_34469_34494[2] = inst_34424);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34455__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 11))
{var inst_34419 = (state_34455[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34455,10,Object,null,9);var inst_34428 = chs__$1.call(null,inst_34419);var inst_34429 = done.call(null,inst_34419);var inst_34430 = cljs.core.async.take_BANG_.call(null,inst_34428,inst_34429);var state_34455__$1 = state_34455;var statearr_34470_34495 = state_34455__$1;(statearr_34470_34495[2] = inst_34430);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34455__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 12))
{var inst_34441 = (state_34455[12]);var inst_34441__$1 = (state_34455[2]);var inst_34442 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34441__$1);var state_34455__$1 = (function (){var statearr_34471 = state_34455;(statearr_34471[12] = inst_34441__$1);
return statearr_34471;
})();if(cljs.core.truth_(inst_34442))
{var statearr_34472_34496 = state_34455__$1;(statearr_34472_34496[1] = 13);
} else
{var statearr_34473_34497 = state_34455__$1;(statearr_34473_34497[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 13))
{var inst_34444 = cljs.core.async.close_BANG_.call(null,out);var state_34455__$1 = state_34455;var statearr_34474_34498 = state_34455__$1;(statearr_34474_34498[2] = inst_34444);
(statearr_34474_34498[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 14))
{var inst_34441 = (state_34455[12]);var inst_34446 = cljs.core.apply.call(null,f,inst_34441);var state_34455__$1 = state_34455;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34455__$1,16,out,inst_34446);
} else
{if((state_val_34456 === 15))
{var inst_34451 = (state_34455[2]);var state_34455__$1 = state_34455;var statearr_34475_34499 = state_34455__$1;(statearr_34475_34499[2] = inst_34451);
(statearr_34475_34499[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34456 === 16))
{var inst_34448 = (state_34455[2]);var state_34455__$1 = (function (){var statearr_34476 = state_34455;(statearr_34476[13] = inst_34448);
return statearr_34476;
})();var statearr_34477_34500 = state_34455__$1;(statearr_34477_34500[2] = null);
(statearr_34477_34500[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34481 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34481[0] = state_machine__5507__auto__);
(statearr_34481[1] = 1);
return statearr_34481;
});
var state_machine__5507__auto____1 = (function (state_34455){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34455);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34482){if((e34482 instanceof Object))
{var ex__5510__auto__ = e34482;var statearr_34483_34501 = state_34455;(statearr_34483_34501[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34455);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34482;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34502 = state_34455;
state_34455 = G__34502;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34455){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34455);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34484 = f__5522__auto__.call(null);(statearr_34484[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34485);
return statearr_34484;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34610 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34586){var state_val_34587 = (state_34586[1]);if((state_val_34587 === 1))
{var inst_34557 = cljs.core.vec.call(null,chs);var inst_34558 = inst_34557;var state_34586__$1 = (function (){var statearr_34588 = state_34586;(statearr_34588[7] = inst_34558);
return statearr_34588;
})();var statearr_34589_34611 = state_34586__$1;(statearr_34589_34611[2] = null);
(statearr_34589_34611[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34587 === 2))
{var inst_34558 = (state_34586[7]);var inst_34560 = cljs.core.count.call(null,inst_34558);var inst_34561 = (inst_34560 > 0);var state_34586__$1 = state_34586;if(cljs.core.truth_(inst_34561))
{var statearr_34590_34612 = state_34586__$1;(statearr_34590_34612[1] = 4);
} else
{var statearr_34591_34613 = state_34586__$1;(statearr_34591_34613[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34587 === 3))
{var inst_34584 = (state_34586[2]);var state_34586__$1 = state_34586;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34586__$1,inst_34584);
} else
{if((state_val_34587 === 4))
{var inst_34558 = (state_34586[7]);var state_34586__$1 = state_34586;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34586__$1,7,inst_34558);
} else
{if((state_val_34587 === 5))
{var inst_34580 = cljs.core.async.close_BANG_.call(null,out);var state_34586__$1 = state_34586;var statearr_34592_34614 = state_34586__$1;(statearr_34592_34614[2] = inst_34580);
(statearr_34592_34614[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34587 === 6))
{var inst_34582 = (state_34586[2]);var state_34586__$1 = state_34586;var statearr_34593_34615 = state_34586__$1;(statearr_34593_34615[2] = inst_34582);
(statearr_34593_34615[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34587 === 7))
{var inst_34566 = (state_34586[8]);var inst_34565 = (state_34586[9]);var inst_34565__$1 = (state_34586[2]);var inst_34566__$1 = cljs.core.nth.call(null,inst_34565__$1,0,null);var inst_34567 = cljs.core.nth.call(null,inst_34565__$1,1,null);var inst_34568 = (inst_34566__$1 == null);var state_34586__$1 = (function (){var statearr_34594 = state_34586;(statearr_34594[10] = inst_34567);
(statearr_34594[8] = inst_34566__$1);
(statearr_34594[9] = inst_34565__$1);
return statearr_34594;
})();if(cljs.core.truth_(inst_34568))
{var statearr_34595_34616 = state_34586__$1;(statearr_34595_34616[1] = 8);
} else
{var statearr_34596_34617 = state_34586__$1;(statearr_34596_34617[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34587 === 8))
{var inst_34567 = (state_34586[10]);var inst_34566 = (state_34586[8]);var inst_34565 = (state_34586[9]);var inst_34558 = (state_34586[7]);var inst_34570 = (function (){var c = inst_34567;var v = inst_34566;var vec__34563 = inst_34565;var cs = inst_34558;return ((function (c,v,vec__34563,cs,inst_34567,inst_34566,inst_34565,inst_34558,state_val_34587){
return (function (p1__34503_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34503_SHARP_);
});
;})(c,v,vec__34563,cs,inst_34567,inst_34566,inst_34565,inst_34558,state_val_34587))
})();var inst_34571 = cljs.core.filterv.call(null,inst_34570,inst_34558);var inst_34558__$1 = inst_34571;var state_34586__$1 = (function (){var statearr_34597 = state_34586;(statearr_34597[7] = inst_34558__$1);
return statearr_34597;
})();var statearr_34598_34618 = state_34586__$1;(statearr_34598_34618[2] = null);
(statearr_34598_34618[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34587 === 9))
{var inst_34566 = (state_34586[8]);var state_34586__$1 = state_34586;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34586__$1,11,out,inst_34566);
} else
{if((state_val_34587 === 10))
{var inst_34578 = (state_34586[2]);var state_34586__$1 = state_34586;var statearr_34600_34619 = state_34586__$1;(statearr_34600_34619[2] = inst_34578);
(statearr_34600_34619[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34587 === 11))
{var inst_34558 = (state_34586[7]);var inst_34575 = (state_34586[2]);var tmp34599 = inst_34558;var inst_34558__$1 = tmp34599;var state_34586__$1 = (function (){var statearr_34601 = state_34586;(statearr_34601[11] = inst_34575);
(statearr_34601[7] = inst_34558__$1);
return statearr_34601;
})();var statearr_34602_34620 = state_34586__$1;(statearr_34602_34620[2] = null);
(statearr_34602_34620[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34606 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34606[0] = state_machine__5507__auto__);
(statearr_34606[1] = 1);
return statearr_34606;
});
var state_machine__5507__auto____1 = (function (state_34586){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34586);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34607){if((e34607 instanceof Object))
{var ex__5510__auto__ = e34607;var statearr_34608_34621 = state_34586;(statearr_34608_34621[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34586);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34607;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34622 = state_34586;
state_34586 = G__34622;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34586){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34586);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34609 = f__5522__auto__.call(null);(statearr_34609[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34610);
return statearr_34609;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34715 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34692){var state_val_34693 = (state_34692[1]);if((state_val_34693 === 1))
{var inst_34669 = 0;var state_34692__$1 = (function (){var statearr_34694 = state_34692;(statearr_34694[7] = inst_34669);
return statearr_34694;
})();var statearr_34695_34716 = state_34692__$1;(statearr_34695_34716[2] = null);
(statearr_34695_34716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34693 === 2))
{var inst_34669 = (state_34692[7]);var inst_34671 = (inst_34669 < n);var state_34692__$1 = state_34692;if(cljs.core.truth_(inst_34671))
{var statearr_34696_34717 = state_34692__$1;(statearr_34696_34717[1] = 4);
} else
{var statearr_34697_34718 = state_34692__$1;(statearr_34697_34718[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34693 === 3))
{var inst_34689 = (state_34692[2]);var inst_34690 = cljs.core.async.close_BANG_.call(null,out);var state_34692__$1 = (function (){var statearr_34698 = state_34692;(statearr_34698[8] = inst_34689);
return statearr_34698;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34692__$1,inst_34690);
} else
{if((state_val_34693 === 4))
{var state_34692__$1 = state_34692;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34692__$1,7,ch);
} else
{if((state_val_34693 === 5))
{var state_34692__$1 = state_34692;var statearr_34699_34719 = state_34692__$1;(statearr_34699_34719[2] = null);
(statearr_34699_34719[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34693 === 6))
{var inst_34687 = (state_34692[2]);var state_34692__$1 = state_34692;var statearr_34700_34720 = state_34692__$1;(statearr_34700_34720[2] = inst_34687);
(statearr_34700_34720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34693 === 7))
{var inst_34674 = (state_34692[9]);var inst_34674__$1 = (state_34692[2]);var inst_34675 = (inst_34674__$1 == null);var inst_34676 = cljs.core.not.call(null,inst_34675);var state_34692__$1 = (function (){var statearr_34701 = state_34692;(statearr_34701[9] = inst_34674__$1);
return statearr_34701;
})();if(inst_34676)
{var statearr_34702_34721 = state_34692__$1;(statearr_34702_34721[1] = 8);
} else
{var statearr_34703_34722 = state_34692__$1;(statearr_34703_34722[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34693 === 8))
{var inst_34674 = (state_34692[9]);var state_34692__$1 = state_34692;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34692__$1,11,out,inst_34674);
} else
{if((state_val_34693 === 9))
{var state_34692__$1 = state_34692;var statearr_34704_34723 = state_34692__$1;(statearr_34704_34723[2] = null);
(statearr_34704_34723[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34693 === 10))
{var inst_34684 = (state_34692[2]);var state_34692__$1 = state_34692;var statearr_34705_34724 = state_34692__$1;(statearr_34705_34724[2] = inst_34684);
(statearr_34705_34724[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34693 === 11))
{var inst_34669 = (state_34692[7]);var inst_34679 = (state_34692[2]);var inst_34680 = (inst_34669 + 1);var inst_34669__$1 = inst_34680;var state_34692__$1 = (function (){var statearr_34706 = state_34692;(statearr_34706[10] = inst_34679);
(statearr_34706[7] = inst_34669__$1);
return statearr_34706;
})();var statearr_34707_34725 = state_34692__$1;(statearr_34707_34725[2] = null);
(statearr_34707_34725[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34711 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34711[0] = state_machine__5507__auto__);
(statearr_34711[1] = 1);
return statearr_34711;
});
var state_machine__5507__auto____1 = (function (state_34692){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34692);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34712){if((e34712 instanceof Object))
{var ex__5510__auto__ = e34712;var statearr_34713_34726 = state_34692;(statearr_34713_34726[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34692);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34712;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34727 = state_34692;
state_34692 = G__34727;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34692){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34692);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34714 = f__5522__auto__.call(null);(statearr_34714[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34715);
return statearr_34714;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34824 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34799){var state_val_34800 = (state_34799[1]);if((state_val_34800 === 1))
{var inst_34776 = null;var state_34799__$1 = (function (){var statearr_34801 = state_34799;(statearr_34801[7] = inst_34776);
return statearr_34801;
})();var statearr_34802_34825 = state_34799__$1;(statearr_34802_34825[2] = null);
(statearr_34802_34825[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 2))
{var state_34799__$1 = state_34799;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34799__$1,4,ch);
} else
{if((state_val_34800 === 3))
{var inst_34796 = (state_34799[2]);var inst_34797 = cljs.core.async.close_BANG_.call(null,out);var state_34799__$1 = (function (){var statearr_34803 = state_34799;(statearr_34803[8] = inst_34796);
return statearr_34803;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34799__$1,inst_34797);
} else
{if((state_val_34800 === 4))
{var inst_34779 = (state_34799[9]);var inst_34779__$1 = (state_34799[2]);var inst_34780 = (inst_34779__$1 == null);var inst_34781 = cljs.core.not.call(null,inst_34780);var state_34799__$1 = (function (){var statearr_34804 = state_34799;(statearr_34804[9] = inst_34779__$1);
return statearr_34804;
})();if(inst_34781)
{var statearr_34805_34826 = state_34799__$1;(statearr_34805_34826[1] = 5);
} else
{var statearr_34806_34827 = state_34799__$1;(statearr_34806_34827[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 5))
{var inst_34776 = (state_34799[7]);var inst_34779 = (state_34799[9]);var inst_34783 = cljs.core._EQ_.call(null,inst_34779,inst_34776);var state_34799__$1 = state_34799;if(inst_34783)
{var statearr_34807_34828 = state_34799__$1;(statearr_34807_34828[1] = 8);
} else
{var statearr_34808_34829 = state_34799__$1;(statearr_34808_34829[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 6))
{var state_34799__$1 = state_34799;var statearr_34810_34830 = state_34799__$1;(statearr_34810_34830[2] = null);
(statearr_34810_34830[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 7))
{var inst_34794 = (state_34799[2]);var state_34799__$1 = state_34799;var statearr_34811_34831 = state_34799__$1;(statearr_34811_34831[2] = inst_34794);
(statearr_34811_34831[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 8))
{var inst_34776 = (state_34799[7]);var tmp34809 = inst_34776;var inst_34776__$1 = tmp34809;var state_34799__$1 = (function (){var statearr_34812 = state_34799;(statearr_34812[7] = inst_34776__$1);
return statearr_34812;
})();var statearr_34813_34832 = state_34799__$1;(statearr_34813_34832[2] = null);
(statearr_34813_34832[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 9))
{var inst_34779 = (state_34799[9]);var state_34799__$1 = state_34799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34799__$1,11,out,inst_34779);
} else
{if((state_val_34800 === 10))
{var inst_34791 = (state_34799[2]);var state_34799__$1 = state_34799;var statearr_34814_34833 = state_34799__$1;(statearr_34814_34833[2] = inst_34791);
(statearr_34814_34833[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 11))
{var inst_34779 = (state_34799[9]);var inst_34788 = (state_34799[2]);var inst_34776 = inst_34779;var state_34799__$1 = (function (){var statearr_34815 = state_34799;(statearr_34815[10] = inst_34788);
(statearr_34815[7] = inst_34776);
return statearr_34815;
})();var statearr_34816_34834 = state_34799__$1;(statearr_34816_34834[2] = null);
(statearr_34816_34834[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34820 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34820[0] = state_machine__5507__auto__);
(statearr_34820[1] = 1);
return statearr_34820;
});
var state_machine__5507__auto____1 = (function (state_34799){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34799);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34821){if((e34821 instanceof Object))
{var ex__5510__auto__ = e34821;var statearr_34822_34835 = state_34799;(statearr_34822_34835[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34799);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34821;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34836 = state_34799;
state_34799 = G__34836;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34799){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34823 = f__5522__auto__.call(null);(statearr_34823[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34824);
return statearr_34823;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34971 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34941){var state_val_34942 = (state_34941[1]);if((state_val_34942 === 1))
{var inst_34904 = (new Array(n));var inst_34905 = inst_34904;var inst_34906 = 0;var state_34941__$1 = (function (){var statearr_34943 = state_34941;(statearr_34943[7] = inst_34905);
(statearr_34943[8] = inst_34906);
return statearr_34943;
})();var statearr_34944_34972 = state_34941__$1;(statearr_34944_34972[2] = null);
(statearr_34944_34972[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 2))
{var state_34941__$1 = state_34941;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34941__$1,4,ch);
} else
{if((state_val_34942 === 3))
{var inst_34939 = (state_34941[2]);var state_34941__$1 = state_34941;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34941__$1,inst_34939);
} else
{if((state_val_34942 === 4))
{var inst_34909 = (state_34941[9]);var inst_34909__$1 = (state_34941[2]);var inst_34910 = (inst_34909__$1 == null);var inst_34911 = cljs.core.not.call(null,inst_34910);var state_34941__$1 = (function (){var statearr_34945 = state_34941;(statearr_34945[9] = inst_34909__$1);
return statearr_34945;
})();if(inst_34911)
{var statearr_34946_34973 = state_34941__$1;(statearr_34946_34973[1] = 5);
} else
{var statearr_34947_34974 = state_34941__$1;(statearr_34947_34974[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 5))
{var inst_34909 = (state_34941[9]);var inst_34905 = (state_34941[7]);var inst_34906 = (state_34941[8]);var inst_34914 = (state_34941[10]);var inst_34913 = (inst_34905[inst_34906] = inst_34909);var inst_34914__$1 = (inst_34906 + 1);var inst_34915 = (inst_34914__$1 < n);var state_34941__$1 = (function (){var statearr_34948 = state_34941;(statearr_34948[11] = inst_34913);
(statearr_34948[10] = inst_34914__$1);
return statearr_34948;
})();if(cljs.core.truth_(inst_34915))
{var statearr_34949_34975 = state_34941__$1;(statearr_34949_34975[1] = 8);
} else
{var statearr_34950_34976 = state_34941__$1;(statearr_34950_34976[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 6))
{var inst_34906 = (state_34941[8]);var inst_34927 = (inst_34906 > 0);var state_34941__$1 = state_34941;if(cljs.core.truth_(inst_34927))
{var statearr_34952_34977 = state_34941__$1;(statearr_34952_34977[1] = 12);
} else
{var statearr_34953_34978 = state_34941__$1;(statearr_34953_34978[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 7))
{var inst_34937 = (state_34941[2]);var state_34941__$1 = state_34941;var statearr_34954_34979 = state_34941__$1;(statearr_34954_34979[2] = inst_34937);
(statearr_34954_34979[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 8))
{var inst_34905 = (state_34941[7]);var inst_34914 = (state_34941[10]);var tmp34951 = inst_34905;var inst_34905__$1 = tmp34951;var inst_34906 = inst_34914;var state_34941__$1 = (function (){var statearr_34955 = state_34941;(statearr_34955[7] = inst_34905__$1);
(statearr_34955[8] = inst_34906);
return statearr_34955;
})();var statearr_34956_34980 = state_34941__$1;(statearr_34956_34980[2] = null);
(statearr_34956_34980[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 9))
{var inst_34905 = (state_34941[7]);var inst_34919 = cljs.core.vec.call(null,inst_34905);var state_34941__$1 = state_34941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34941__$1,11,out,inst_34919);
} else
{if((state_val_34942 === 10))
{var inst_34925 = (state_34941[2]);var state_34941__$1 = state_34941;var statearr_34957_34981 = state_34941__$1;(statearr_34957_34981[2] = inst_34925);
(statearr_34957_34981[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 11))
{var inst_34921 = (state_34941[2]);var inst_34922 = (new Array(n));var inst_34905 = inst_34922;var inst_34906 = 0;var state_34941__$1 = (function (){var statearr_34958 = state_34941;(statearr_34958[12] = inst_34921);
(statearr_34958[7] = inst_34905);
(statearr_34958[8] = inst_34906);
return statearr_34958;
})();var statearr_34959_34982 = state_34941__$1;(statearr_34959_34982[2] = null);
(statearr_34959_34982[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 12))
{var inst_34905 = (state_34941[7]);var inst_34929 = cljs.core.vec.call(null,inst_34905);var state_34941__$1 = state_34941;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34941__$1,15,out,inst_34929);
} else
{if((state_val_34942 === 13))
{var state_34941__$1 = state_34941;var statearr_34960_34983 = state_34941__$1;(statearr_34960_34983[2] = null);
(statearr_34960_34983[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 14))
{var inst_34934 = (state_34941[2]);var inst_34935 = cljs.core.async.close_BANG_.call(null,out);var state_34941__$1 = (function (){var statearr_34961 = state_34941;(statearr_34961[13] = inst_34934);
return statearr_34961;
})();var statearr_34962_34984 = state_34941__$1;(statearr_34962_34984[2] = inst_34935);
(statearr_34962_34984[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34942 === 15))
{var inst_34931 = (state_34941[2]);var state_34941__$1 = state_34941;var statearr_34963_34985 = state_34941__$1;(statearr_34963_34985[2] = inst_34931);
(statearr_34963_34985[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_34967 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34967[0] = state_machine__5507__auto__);
(statearr_34967[1] = 1);
return statearr_34967;
});
var state_machine__5507__auto____1 = (function (state_34941){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34941);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34968){if((e34968 instanceof Object))
{var ex__5510__auto__ = e34968;var statearr_34969_34986 = state_34941;(statearr_34969_34986[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34941);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34968;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34987 = state_34941;
state_34941 = G__34987;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34941){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34941);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34970 = f__5522__auto__.call(null);(statearr_34970[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34971);
return statearr_34970;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35130 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35100){var state_val_35101 = (state_35100[1]);if((state_val_35101 === 1))
{var inst_35059 = [];var inst_35060 = inst_35059;var inst_35061 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35100__$1 = (function (){var statearr_35102 = state_35100;(statearr_35102[7] = inst_35061);
(statearr_35102[8] = inst_35060);
return statearr_35102;
})();var statearr_35103_35131 = state_35100__$1;(statearr_35103_35131[2] = null);
(statearr_35103_35131[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 2))
{var state_35100__$1 = state_35100;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35100__$1,4,ch);
} else
{if((state_val_35101 === 3))
{var inst_35098 = (state_35100[2]);var state_35100__$1 = state_35100;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35100__$1,inst_35098);
} else
{if((state_val_35101 === 4))
{var inst_35064 = (state_35100[9]);var inst_35064__$1 = (state_35100[2]);var inst_35065 = (inst_35064__$1 == null);var inst_35066 = cljs.core.not.call(null,inst_35065);var state_35100__$1 = (function (){var statearr_35104 = state_35100;(statearr_35104[9] = inst_35064__$1);
return statearr_35104;
})();if(inst_35066)
{var statearr_35105_35132 = state_35100__$1;(statearr_35105_35132[1] = 5);
} else
{var statearr_35106_35133 = state_35100__$1;(statearr_35106_35133[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 5))
{var inst_35068 = (state_35100[10]);var inst_35061 = (state_35100[7]);var inst_35064 = (state_35100[9]);var inst_35068__$1 = f.call(null,inst_35064);var inst_35069 = cljs.core._EQ_.call(null,inst_35068__$1,inst_35061);var inst_35070 = cljs.core.keyword_identical_QMARK_.call(null,inst_35061,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35071 = (inst_35069) || (inst_35070);var state_35100__$1 = (function (){var statearr_35107 = state_35100;(statearr_35107[10] = inst_35068__$1);
return statearr_35107;
})();if(cljs.core.truth_(inst_35071))
{var statearr_35108_35134 = state_35100__$1;(statearr_35108_35134[1] = 8);
} else
{var statearr_35109_35135 = state_35100__$1;(statearr_35109_35135[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 6))
{var inst_35060 = (state_35100[8]);var inst_35085 = inst_35060.length;var inst_35086 = (inst_35085 > 0);var state_35100__$1 = state_35100;if(cljs.core.truth_(inst_35086))
{var statearr_35111_35136 = state_35100__$1;(statearr_35111_35136[1] = 12);
} else
{var statearr_35112_35137 = state_35100__$1;(statearr_35112_35137[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 7))
{var inst_35096 = (state_35100[2]);var state_35100__$1 = state_35100;var statearr_35113_35138 = state_35100__$1;(statearr_35113_35138[2] = inst_35096);
(statearr_35113_35138[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 8))
{var inst_35068 = (state_35100[10]);var inst_35064 = (state_35100[9]);var inst_35060 = (state_35100[8]);var inst_35073 = inst_35060.push(inst_35064);var tmp35110 = inst_35060;var inst_35060__$1 = tmp35110;var inst_35061 = inst_35068;var state_35100__$1 = (function (){var statearr_35114 = state_35100;(statearr_35114[7] = inst_35061);
(statearr_35114[8] = inst_35060__$1);
(statearr_35114[11] = inst_35073);
return statearr_35114;
})();var statearr_35115_35139 = state_35100__$1;(statearr_35115_35139[2] = null);
(statearr_35115_35139[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 9))
{var inst_35060 = (state_35100[8]);var inst_35076 = cljs.core.vec.call(null,inst_35060);var state_35100__$1 = state_35100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35100__$1,11,out,inst_35076);
} else
{if((state_val_35101 === 10))
{var inst_35083 = (state_35100[2]);var state_35100__$1 = state_35100;var statearr_35116_35140 = state_35100__$1;(statearr_35116_35140[2] = inst_35083);
(statearr_35116_35140[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 11))
{var inst_35068 = (state_35100[10]);var inst_35064 = (state_35100[9]);var inst_35078 = (state_35100[2]);var inst_35079 = [];var inst_35080 = inst_35079.push(inst_35064);var inst_35060 = inst_35079;var inst_35061 = inst_35068;var state_35100__$1 = (function (){var statearr_35117 = state_35100;(statearr_35117[12] = inst_35080);
(statearr_35117[7] = inst_35061);
(statearr_35117[13] = inst_35078);
(statearr_35117[8] = inst_35060);
return statearr_35117;
})();var statearr_35118_35141 = state_35100__$1;(statearr_35118_35141[2] = null);
(statearr_35118_35141[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 12))
{var inst_35060 = (state_35100[8]);var inst_35088 = cljs.core.vec.call(null,inst_35060);var state_35100__$1 = state_35100;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35100__$1,15,out,inst_35088);
} else
{if((state_val_35101 === 13))
{var state_35100__$1 = state_35100;var statearr_35119_35142 = state_35100__$1;(statearr_35119_35142[2] = null);
(statearr_35119_35142[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 14))
{var inst_35093 = (state_35100[2]);var inst_35094 = cljs.core.async.close_BANG_.call(null,out);var state_35100__$1 = (function (){var statearr_35120 = state_35100;(statearr_35120[14] = inst_35093);
return statearr_35120;
})();var statearr_35121_35143 = state_35100__$1;(statearr_35121_35143[2] = inst_35094);
(statearr_35121_35143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35101 === 15))
{var inst_35090 = (state_35100[2]);var state_35100__$1 = state_35100;var statearr_35122_35144 = state_35100__$1;(statearr_35122_35144[2] = inst_35090);
(statearr_35122_35144[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35126 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35126[0] = state_machine__5507__auto__);
(statearr_35126[1] = 1);
return statearr_35126;
});
var state_machine__5507__auto____1 = (function (state_35100){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35100);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35127){if((e35127 instanceof Object))
{var ex__5510__auto__ = e35127;var statearr_35128_35145 = state_35100;(statearr_35128_35145[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35100);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35127;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35146 = state_35100;
state_35100 = G__35146;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35100){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35100);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35129 = f__5522__auto__.call(null);(statearr_35129[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35130);
return statearr_35129;
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
