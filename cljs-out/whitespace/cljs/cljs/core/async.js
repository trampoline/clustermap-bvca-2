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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t31581 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31581 = (function (f,fn_handler,meta31582){
this.f = f;
this.fn_handler = fn_handler;
this.meta31582 = meta31582;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31581.cljs$lang$type = true;
cljs.core.async.t31581.cljs$lang$ctorStr = "cljs.core.async/t31581";
cljs.core.async.t31581.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31581");
});
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t31581.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t31581.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31583){var self__ = this;
var _31583__$1 = this;return self__.meta31582;
});
cljs.core.async.t31581.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31583,meta31582__$1){var self__ = this;
var _31583__$1 = this;return (new cljs.core.async.t31581(self__.f,self__.fn_handler,meta31582__$1));
});
cljs.core.async.__GT_t31581 = (function __GT_t31581(f__$1,fn_handler__$1,meta31582){return (new cljs.core.async.t31581(f__$1,fn_handler__$1,meta31582));
});
}
return (new cljs.core.async.t31581(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__31585 = buff;if(G__31585)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__31585.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__31585.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31585);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__31585);
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
{var val_31586 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_31586);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_31586);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___31587 = n;var x_31588 = 0;while(true){
if((x_31588 < n__4248__auto___31587))
{(a[x_31588] = 0);
{
var G__31589 = (x_31588 + 1);
x_31588 = G__31589;
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
var G__31590 = (i + 1);
i = G__31590;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t31594 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31594 = (function (flag,alt_flag,meta31595){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta31595 = meta31595;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31594.cljs$lang$type = true;
cljs.core.async.t31594.cljs$lang$ctorStr = "cljs.core.async/t31594";
cljs.core.async.t31594.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31594");
});
cljs.core.async.t31594.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31594.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t31594.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t31594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31596){var self__ = this;
var _31596__$1 = this;return self__.meta31595;
});
cljs.core.async.t31594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31596,meta31595__$1){var self__ = this;
var _31596__$1 = this;return (new cljs.core.async.t31594(self__.flag,self__.alt_flag,meta31595__$1));
});
cljs.core.async.__GT_t31594 = (function __GT_t31594(flag__$1,alt_flag__$1,meta31595){return (new cljs.core.async.t31594(flag__$1,alt_flag__$1,meta31595));
});
}
return (new cljs.core.async.t31594(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t31600 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31600 = (function (cb,flag,alt_handler,meta31601){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta31601 = meta31601;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31600.cljs$lang$type = true;
cljs.core.async.t31600.cljs$lang$ctorStr = "cljs.core.async/t31600";
cljs.core.async.t31600.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31600");
});
cljs.core.async.t31600.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31600.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t31600.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t31600.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31602){var self__ = this;
var _31602__$1 = this;return self__.meta31601;
});
cljs.core.async.t31600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31602,meta31601__$1){var self__ = this;
var _31602__$1 = this;return (new cljs.core.async.t31600(self__.cb,self__.flag,self__.alt_handler,meta31601__$1));
});
cljs.core.async.__GT_t31600 = (function __GT_t31600(cb__$1,flag__$1,alt_handler__$1,meta31601){return (new cljs.core.async.t31600(cb__$1,flag__$1,alt_handler__$1,meta31601));
});
}
return (new cljs.core.async.t31600(cb,flag,alt_handler,null));
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
return (function (p1__31603_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__31603_SHARP_,port], null));
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
var G__31604 = (i + 1);
i = G__31604;
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
var alts_BANG___delegate = function (ports,p__31605){var map__31607 = p__31605;var map__31607__$1 = ((cljs.core.seq_QMARK_.call(null,map__31607))?cljs.core.apply.call(null,cljs.core.hash_map,map__31607):map__31607);var opts = map__31607__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__31605 = null;if (arguments.length > 1) {
  p__31605 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__31605);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__31608){
var ports = cljs.core.first(arglist__31608);
var p__31605 = cljs.core.rest(arglist__31608);
return alts_BANG___delegate(ports,p__31605);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t31616 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31616 = (function (ch,f,map_LT_,meta31617){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31617 = meta31617;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31616.cljs$lang$type = true;
cljs.core.async.t31616.cljs$lang$ctorStr = "cljs.core.async/t31616";
cljs.core.async.t31616.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31616");
});
cljs.core.async.t31616.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31616.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t31616.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31616.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t31619 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31619 = (function (fn1,_,meta31617,ch,f,map_LT_,meta31620){
this.fn1 = fn1;
this._ = _;
this.meta31617 = meta31617;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta31620 = meta31620;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31619.cljs$lang$type = true;
cljs.core.async.t31619.cljs$lang$ctorStr = "cljs.core.async/t31619";
cljs.core.async.t31619.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31619");
});
cljs.core.async.t31619.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t31619.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t31619.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t31619.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__31609_SHARP_){return f1.call(null,(((p1__31609_SHARP_ == null))?null:self__.f.call(null,p1__31609_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t31619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31621){var self__ = this;
var _31621__$1 = this;return self__.meta31620;
});
cljs.core.async.t31619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31621,meta31620__$1){var self__ = this;
var _31621__$1 = this;return (new cljs.core.async.t31619(self__.fn1,self__._,self__.meta31617,self__.ch,self__.f,self__.map_LT_,meta31620__$1));
});
cljs.core.async.__GT_t31619 = (function __GT_t31619(fn1__$1,___$2,meta31617__$1,ch__$2,f__$2,map_LT___$2,meta31620){return (new cljs.core.async.t31619(fn1__$1,___$2,meta31617__$1,ch__$2,f__$2,map_LT___$2,meta31620));
});
}
return (new cljs.core.async.t31619(fn1,___$1,self__.meta31617,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t31616.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31616.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31616.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31618){var self__ = this;
var _31618__$1 = this;return self__.meta31617;
});
cljs.core.async.t31616.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31618,meta31617__$1){var self__ = this;
var _31618__$1 = this;return (new cljs.core.async.t31616(self__.ch,self__.f,self__.map_LT_,meta31617__$1));
});
cljs.core.async.__GT_t31616 = (function __GT_t31616(ch__$1,f__$1,map_LT___$1,meta31617){return (new cljs.core.async.t31616(ch__$1,f__$1,map_LT___$1,meta31617));
});
}
return (new cljs.core.async.t31616(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t31625 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31625 = (function (ch,f,map_GT_,meta31626){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta31626 = meta31626;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31625.cljs$lang$type = true;
cljs.core.async.t31625.cljs$lang$ctorStr = "cljs.core.async/t31625";
cljs.core.async.t31625.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31625");
});
cljs.core.async.t31625.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31625.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t31625.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31625.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31625.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31625.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31625.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31627){var self__ = this;
var _31627__$1 = this;return self__.meta31626;
});
cljs.core.async.t31625.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31627,meta31626__$1){var self__ = this;
var _31627__$1 = this;return (new cljs.core.async.t31625(self__.ch,self__.f,self__.map_GT_,meta31626__$1));
});
cljs.core.async.__GT_t31625 = (function __GT_t31625(ch__$1,f__$1,map_GT___$1,meta31626){return (new cljs.core.async.t31625(ch__$1,f__$1,map_GT___$1,meta31626));
});
}
return (new cljs.core.async.t31625(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t31631 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t31631 = (function (ch,p,filter_GT_,meta31632){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta31632 = meta31632;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t31631.cljs$lang$type = true;
cljs.core.async.t31631.cljs$lang$ctorStr = "cljs.core.async/t31631";
cljs.core.async.t31631.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t31631");
});
cljs.core.async.t31631.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t31631.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t31631.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t31631.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t31631.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t31631.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t31631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31633){var self__ = this;
var _31633__$1 = this;return self__.meta31632;
});
cljs.core.async.t31631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31633,meta31632__$1){var self__ = this;
var _31633__$1 = this;return (new cljs.core.async.t31631(self__.ch,self__.p,self__.filter_GT_,meta31632__$1));
});
cljs.core.async.__GT_t31631 = (function __GT_t31631(ch__$1,p__$1,filter_GT___$1,meta31632){return (new cljs.core.async.t31631(ch__$1,p__$1,filter_GT___$1,meta31632));
});
}
return (new cljs.core.async.t31631(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___31716 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31695){var state_val_31696 = (state_31695[1]);if((state_val_31696 === 1))
{var state_31695__$1 = state_31695;var statearr_31697_31717 = state_31695__$1;(statearr_31697_31717[2] = null);
(statearr_31697_31717[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31696 === 2))
{var state_31695__$1 = state_31695;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31695__$1,4,ch);
} else
{if((state_val_31696 === 3))
{var inst_31693 = (state_31695[2]);var state_31695__$1 = state_31695;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31695__$1,inst_31693);
} else
{if((state_val_31696 === 4))
{var inst_31677 = (state_31695[7]);var inst_31677__$1 = (state_31695[2]);var inst_31678 = (inst_31677__$1 == null);var state_31695__$1 = (function (){var statearr_31698 = state_31695;(statearr_31698[7] = inst_31677__$1);
return statearr_31698;
})();if(cljs.core.truth_(inst_31678))
{var statearr_31699_31718 = state_31695__$1;(statearr_31699_31718[1] = 5);
} else
{var statearr_31700_31719 = state_31695__$1;(statearr_31700_31719[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31696 === 5))
{var inst_31680 = cljs.core.async.close_BANG_.call(null,out);var state_31695__$1 = state_31695;var statearr_31701_31720 = state_31695__$1;(statearr_31701_31720[2] = inst_31680);
(statearr_31701_31720[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31696 === 6))
{var inst_31677 = (state_31695[7]);var inst_31682 = p.call(null,inst_31677);var state_31695__$1 = state_31695;if(cljs.core.truth_(inst_31682))
{var statearr_31702_31721 = state_31695__$1;(statearr_31702_31721[1] = 8);
} else
{var statearr_31703_31722 = state_31695__$1;(statearr_31703_31722[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31696 === 7))
{var inst_31691 = (state_31695[2]);var state_31695__$1 = state_31695;var statearr_31704_31723 = state_31695__$1;(statearr_31704_31723[2] = inst_31691);
(statearr_31704_31723[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31696 === 8))
{var inst_31677 = (state_31695[7]);var state_31695__$1 = state_31695;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31695__$1,11,out,inst_31677);
} else
{if((state_val_31696 === 9))
{var state_31695__$1 = state_31695;var statearr_31705_31724 = state_31695__$1;(statearr_31705_31724[2] = null);
(statearr_31705_31724[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31696 === 10))
{var inst_31688 = (state_31695[2]);var state_31695__$1 = (function (){var statearr_31706 = state_31695;(statearr_31706[8] = inst_31688);
return statearr_31706;
})();var statearr_31707_31725 = state_31695__$1;(statearr_31707_31725[2] = null);
(statearr_31707_31725[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31696 === 11))
{var inst_31685 = (state_31695[2]);var state_31695__$1 = state_31695;var statearr_31708_31726 = state_31695__$1;(statearr_31708_31726[2] = inst_31685);
(statearr_31708_31726[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_31712 = [null,null,null,null,null,null,null,null,null];(statearr_31712[0] = state_machine__5507__auto__);
(statearr_31712[1] = 1);
return statearr_31712;
});
var state_machine__5507__auto____1 = (function (state_31695){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31695);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31713){if((e31713 instanceof Object))
{var ex__5510__auto__ = e31713;var statearr_31714_31727 = state_31695;(statearr_31714_31727[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31695);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31713;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31728 = state_31695;
state_31695 = G__31728;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31695){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31695);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31715 = f__5522__auto__.call(null);(statearr_31715[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___31716);
return statearr_31715;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_31880){var state_val_31881 = (state_31880[1]);if((state_val_31881 === 1))
{var state_31880__$1 = state_31880;var statearr_31882_31919 = state_31880__$1;(statearr_31882_31919[2] = null);
(statearr_31882_31919[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 2))
{var state_31880__$1 = state_31880;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31880__$1,4,in$);
} else
{if((state_val_31881 === 3))
{var inst_31878 = (state_31880[2]);var state_31880__$1 = state_31880;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31880__$1,inst_31878);
} else
{if((state_val_31881 === 4))
{var inst_31826 = (state_31880[7]);var inst_31826__$1 = (state_31880[2]);var inst_31827 = (inst_31826__$1 == null);var state_31880__$1 = (function (){var statearr_31883 = state_31880;(statearr_31883[7] = inst_31826__$1);
return statearr_31883;
})();if(cljs.core.truth_(inst_31827))
{var statearr_31884_31920 = state_31880__$1;(statearr_31884_31920[1] = 5);
} else
{var statearr_31885_31921 = state_31880__$1;(statearr_31885_31921[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 5))
{var inst_31829 = cljs.core.async.close_BANG_.call(null,out);var state_31880__$1 = state_31880;var statearr_31886_31922 = state_31880__$1;(statearr_31886_31922[2] = inst_31829);
(statearr_31886_31922[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 6))
{var inst_31826 = (state_31880[7]);var inst_31831 = f.call(null,inst_31826);var inst_31836 = cljs.core.seq.call(null,inst_31831);var inst_31837 = inst_31836;var inst_31838 = null;var inst_31839 = 0;var inst_31840 = 0;var state_31880__$1 = (function (){var statearr_31887 = state_31880;(statearr_31887[8] = inst_31838);
(statearr_31887[9] = inst_31839);
(statearr_31887[10] = inst_31840);
(statearr_31887[11] = inst_31837);
return statearr_31887;
})();var statearr_31888_31923 = state_31880__$1;(statearr_31888_31923[2] = null);
(statearr_31888_31923[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 7))
{var inst_31876 = (state_31880[2]);var state_31880__$1 = state_31880;var statearr_31889_31924 = state_31880__$1;(statearr_31889_31924[2] = inst_31876);
(statearr_31889_31924[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 8))
{var inst_31839 = (state_31880[9]);var inst_31840 = (state_31880[10]);var inst_31842 = (inst_31840 < inst_31839);var inst_31843 = inst_31842;var state_31880__$1 = state_31880;if(cljs.core.truth_(inst_31843))
{var statearr_31890_31925 = state_31880__$1;(statearr_31890_31925[1] = 10);
} else
{var statearr_31891_31926 = state_31880__$1;(statearr_31891_31926[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 9))
{var inst_31873 = (state_31880[2]);var state_31880__$1 = (function (){var statearr_31892 = state_31880;(statearr_31892[12] = inst_31873);
return statearr_31892;
})();var statearr_31893_31927 = state_31880__$1;(statearr_31893_31927[2] = null);
(statearr_31893_31927[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 10))
{var inst_31838 = (state_31880[8]);var inst_31840 = (state_31880[10]);var inst_31845 = cljs.core._nth.call(null,inst_31838,inst_31840);var state_31880__$1 = state_31880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31880__$1,13,out,inst_31845);
} else
{if((state_val_31881 === 11))
{var inst_31851 = (state_31880[13]);var inst_31837 = (state_31880[11]);var inst_31851__$1 = cljs.core.seq.call(null,inst_31837);var state_31880__$1 = (function (){var statearr_31897 = state_31880;(statearr_31897[13] = inst_31851__$1);
return statearr_31897;
})();if(inst_31851__$1)
{var statearr_31898_31928 = state_31880__$1;(statearr_31898_31928[1] = 14);
} else
{var statearr_31899_31929 = state_31880__$1;(statearr_31899_31929[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 12))
{var inst_31871 = (state_31880[2]);var state_31880__$1 = state_31880;var statearr_31900_31930 = state_31880__$1;(statearr_31900_31930[2] = inst_31871);
(statearr_31900_31930[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 13))
{var inst_31838 = (state_31880[8]);var inst_31839 = (state_31880[9]);var inst_31840 = (state_31880[10]);var inst_31837 = (state_31880[11]);var inst_31847 = (state_31880[2]);var inst_31848 = (inst_31840 + 1);var tmp31894 = inst_31838;var tmp31895 = inst_31839;var tmp31896 = inst_31837;var inst_31837__$1 = tmp31896;var inst_31838__$1 = tmp31894;var inst_31839__$1 = tmp31895;var inst_31840__$1 = inst_31848;var state_31880__$1 = (function (){var statearr_31901 = state_31880;(statearr_31901[8] = inst_31838__$1);
(statearr_31901[9] = inst_31839__$1);
(statearr_31901[10] = inst_31840__$1);
(statearr_31901[11] = inst_31837__$1);
(statearr_31901[14] = inst_31847);
return statearr_31901;
})();var statearr_31902_31931 = state_31880__$1;(statearr_31902_31931[2] = null);
(statearr_31902_31931[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 14))
{var inst_31851 = (state_31880[13]);var inst_31853 = cljs.core.chunked_seq_QMARK_.call(null,inst_31851);var state_31880__$1 = state_31880;if(inst_31853)
{var statearr_31903_31932 = state_31880__$1;(statearr_31903_31932[1] = 17);
} else
{var statearr_31904_31933 = state_31880__$1;(statearr_31904_31933[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 15))
{var state_31880__$1 = state_31880;var statearr_31905_31934 = state_31880__$1;(statearr_31905_31934[2] = null);
(statearr_31905_31934[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 16))
{var inst_31869 = (state_31880[2]);var state_31880__$1 = state_31880;var statearr_31906_31935 = state_31880__$1;(statearr_31906_31935[2] = inst_31869);
(statearr_31906_31935[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 17))
{var inst_31851 = (state_31880[13]);var inst_31855 = cljs.core.chunk_first.call(null,inst_31851);var inst_31856 = cljs.core.chunk_rest.call(null,inst_31851);var inst_31857 = cljs.core.count.call(null,inst_31855);var inst_31837 = inst_31856;var inst_31838 = inst_31855;var inst_31839 = inst_31857;var inst_31840 = 0;var state_31880__$1 = (function (){var statearr_31907 = state_31880;(statearr_31907[8] = inst_31838);
(statearr_31907[9] = inst_31839);
(statearr_31907[10] = inst_31840);
(statearr_31907[11] = inst_31837);
return statearr_31907;
})();var statearr_31908_31936 = state_31880__$1;(statearr_31908_31936[2] = null);
(statearr_31908_31936[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 18))
{var inst_31851 = (state_31880[13]);var inst_31860 = cljs.core.first.call(null,inst_31851);var state_31880__$1 = state_31880;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_31880__$1,20,out,inst_31860);
} else
{if((state_val_31881 === 19))
{var inst_31866 = (state_31880[2]);var state_31880__$1 = state_31880;var statearr_31909_31937 = state_31880__$1;(statearr_31909_31937[2] = inst_31866);
(statearr_31909_31937[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_31881 === 20))
{var inst_31851 = (state_31880[13]);var inst_31862 = (state_31880[2]);var inst_31863 = cljs.core.next.call(null,inst_31851);var inst_31837 = inst_31863;var inst_31838 = null;var inst_31839 = 0;var inst_31840 = 0;var state_31880__$1 = (function (){var statearr_31910 = state_31880;(statearr_31910[8] = inst_31838);
(statearr_31910[9] = inst_31839);
(statearr_31910[10] = inst_31840);
(statearr_31910[11] = inst_31837);
(statearr_31910[15] = inst_31862);
return statearr_31910;
})();var statearr_31911_31938 = state_31880__$1;(statearr_31911_31938[2] = null);
(statearr_31911_31938[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_31915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_31915[0] = state_machine__5507__auto__);
(statearr_31915[1] = 1);
return statearr_31915;
});
var state_machine__5507__auto____1 = (function (state_31880){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_31880);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e31916){if((e31916 instanceof Object))
{var ex__5510__auto__ = e31916;var statearr_31917_31939 = state_31880;(statearr_31917_31939[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31880);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e31916;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__31940 = state_31880;
state_31880 = G__31940;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_31880){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_31880);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_31918 = f__5522__auto__.call(null);(statearr_31918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_31918;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___32021 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32000){var state_val_32001 = (state_32000[1]);if((state_val_32001 === 1))
{var state_32000__$1 = state_32000;var statearr_32002_32022 = state_32000__$1;(statearr_32002_32022[2] = null);
(statearr_32002_32022[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32001 === 2))
{var state_32000__$1 = state_32000;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32000__$1,4,from);
} else
{if((state_val_32001 === 3))
{var inst_31998 = (state_32000[2]);var state_32000__$1 = state_32000;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32000__$1,inst_31998);
} else
{if((state_val_32001 === 4))
{var inst_31983 = (state_32000[7]);var inst_31983__$1 = (state_32000[2]);var inst_31984 = (inst_31983__$1 == null);var state_32000__$1 = (function (){var statearr_32003 = state_32000;(statearr_32003[7] = inst_31983__$1);
return statearr_32003;
})();if(cljs.core.truth_(inst_31984))
{var statearr_32004_32023 = state_32000__$1;(statearr_32004_32023[1] = 5);
} else
{var statearr_32005_32024 = state_32000__$1;(statearr_32005_32024[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32001 === 5))
{var state_32000__$1 = state_32000;if(cljs.core.truth_(close_QMARK_))
{var statearr_32006_32025 = state_32000__$1;(statearr_32006_32025[1] = 8);
} else
{var statearr_32007_32026 = state_32000__$1;(statearr_32007_32026[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32001 === 6))
{var inst_31983 = (state_32000[7]);var state_32000__$1 = state_32000;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32000__$1,11,to,inst_31983);
} else
{if((state_val_32001 === 7))
{var inst_31996 = (state_32000[2]);var state_32000__$1 = state_32000;var statearr_32008_32027 = state_32000__$1;(statearr_32008_32027[2] = inst_31996);
(statearr_32008_32027[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32001 === 8))
{var inst_31987 = cljs.core.async.close_BANG_.call(null,to);var state_32000__$1 = state_32000;var statearr_32009_32028 = state_32000__$1;(statearr_32009_32028[2] = inst_31987);
(statearr_32009_32028[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32001 === 9))
{var state_32000__$1 = state_32000;var statearr_32010_32029 = state_32000__$1;(statearr_32010_32029[2] = null);
(statearr_32010_32029[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32001 === 10))
{var inst_31990 = (state_32000[2]);var state_32000__$1 = state_32000;var statearr_32011_32030 = state_32000__$1;(statearr_32011_32030[2] = inst_31990);
(statearr_32011_32030[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32001 === 11))
{var inst_31993 = (state_32000[2]);var state_32000__$1 = (function (){var statearr_32012 = state_32000;(statearr_32012[8] = inst_31993);
return statearr_32012;
})();var statearr_32013_32031 = state_32000__$1;(statearr_32013_32031[2] = null);
(statearr_32013_32031[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32017 = [null,null,null,null,null,null,null,null,null];(statearr_32017[0] = state_machine__5507__auto__);
(statearr_32017[1] = 1);
return statearr_32017;
});
var state_machine__5507__auto____1 = (function (state_32000){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32000);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32018){if((e32018 instanceof Object))
{var ex__5510__auto__ = e32018;var statearr_32019_32032 = state_32000;(statearr_32019_32032[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32000);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32018;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32033 = state_32000;
state_32000 = G__32033;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32000){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32000);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32020 = f__5522__auto__.call(null);(statearr_32020[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32021);
return statearr_32020;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___32120 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32098){var state_val_32099 = (state_32098[1]);if((state_val_32099 === 1))
{var state_32098__$1 = state_32098;var statearr_32100_32121 = state_32098__$1;(statearr_32100_32121[2] = null);
(statearr_32100_32121[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 2))
{var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32098__$1,4,ch);
} else
{if((state_val_32099 === 3))
{var inst_32096 = (state_32098[2]);var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32098__$1,inst_32096);
} else
{if((state_val_32099 === 4))
{var inst_32079 = (state_32098[7]);var inst_32079__$1 = (state_32098[2]);var inst_32080 = (inst_32079__$1 == null);var state_32098__$1 = (function (){var statearr_32101 = state_32098;(statearr_32101[7] = inst_32079__$1);
return statearr_32101;
})();if(cljs.core.truth_(inst_32080))
{var statearr_32102_32122 = state_32098__$1;(statearr_32102_32122[1] = 5);
} else
{var statearr_32103_32123 = state_32098__$1;(statearr_32103_32123[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 5))
{var inst_32082 = cljs.core.async.close_BANG_.call(null,tc);var inst_32083 = cljs.core.async.close_BANG_.call(null,fc);var state_32098__$1 = (function (){var statearr_32104 = state_32098;(statearr_32104[8] = inst_32082);
return statearr_32104;
})();var statearr_32105_32124 = state_32098__$1;(statearr_32105_32124[2] = inst_32083);
(statearr_32105_32124[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 6))
{var inst_32079 = (state_32098[7]);var inst_32085 = p.call(null,inst_32079);var state_32098__$1 = state_32098;if(cljs.core.truth_(inst_32085))
{var statearr_32106_32125 = state_32098__$1;(statearr_32106_32125[1] = 9);
} else
{var statearr_32107_32126 = state_32098__$1;(statearr_32107_32126[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 7))
{var inst_32094 = (state_32098[2]);var state_32098__$1 = state_32098;var statearr_32108_32127 = state_32098__$1;(statearr_32108_32127[2] = inst_32094);
(statearr_32108_32127[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 8))
{var inst_32091 = (state_32098[2]);var state_32098__$1 = (function (){var statearr_32109 = state_32098;(statearr_32109[9] = inst_32091);
return statearr_32109;
})();var statearr_32110_32128 = state_32098__$1;(statearr_32110_32128[2] = null);
(statearr_32110_32128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 9))
{var state_32098__$1 = state_32098;var statearr_32111_32129 = state_32098__$1;(statearr_32111_32129[2] = tc);
(statearr_32111_32129[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 10))
{var state_32098__$1 = state_32098;var statearr_32112_32130 = state_32098__$1;(statearr_32112_32130[2] = fc);
(statearr_32112_32130[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32099 === 11))
{var inst_32079 = (state_32098[7]);var inst_32089 = (state_32098[2]);var state_32098__$1 = state_32098;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32098__$1,8,inst_32089,inst_32079);
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
var state_machine__5507__auto____0 = (function (){var statearr_32116 = [null,null,null,null,null,null,null,null,null,null];(statearr_32116[0] = state_machine__5507__auto__);
(statearr_32116[1] = 1);
return statearr_32116;
});
var state_machine__5507__auto____1 = (function (state_32098){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32098);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32117){if((e32117 instanceof Object))
{var ex__5510__auto__ = e32117;var statearr_32118_32131 = state_32098;(statearr_32118_32131[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32098);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32117;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32132 = state_32098;
state_32098 = G__32132;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32098){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32098);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32119 = f__5522__auto__.call(null);(statearr_32119[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32120);
return statearr_32119;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32179){var state_val_32180 = (state_32179[1]);if((state_val_32180 === 7))
{var inst_32175 = (state_32179[2]);var state_32179__$1 = state_32179;var statearr_32181_32197 = state_32179__$1;(statearr_32181_32197[2] = inst_32175);
(statearr_32181_32197[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32180 === 6))
{var inst_32168 = (state_32179[7]);var inst_32165 = (state_32179[8]);var inst_32172 = f.call(null,inst_32165,inst_32168);var inst_32165__$1 = inst_32172;var state_32179__$1 = (function (){var statearr_32182 = state_32179;(statearr_32182[8] = inst_32165__$1);
return statearr_32182;
})();var statearr_32183_32198 = state_32179__$1;(statearr_32183_32198[2] = null);
(statearr_32183_32198[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32180 === 5))
{var inst_32165 = (state_32179[8]);var state_32179__$1 = state_32179;var statearr_32184_32199 = state_32179__$1;(statearr_32184_32199[2] = inst_32165);
(statearr_32184_32199[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32180 === 4))
{var inst_32168 = (state_32179[7]);var inst_32168__$1 = (state_32179[2]);var inst_32169 = (inst_32168__$1 == null);var state_32179__$1 = (function (){var statearr_32185 = state_32179;(statearr_32185[7] = inst_32168__$1);
return statearr_32185;
})();if(cljs.core.truth_(inst_32169))
{var statearr_32186_32200 = state_32179__$1;(statearr_32186_32200[1] = 5);
} else
{var statearr_32187_32201 = state_32179__$1;(statearr_32187_32201[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32180 === 3))
{var inst_32177 = (state_32179[2]);var state_32179__$1 = state_32179;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32179__$1,inst_32177);
} else
{if((state_val_32180 === 2))
{var state_32179__$1 = state_32179;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32179__$1,4,ch);
} else
{if((state_val_32180 === 1))
{var inst_32165 = init;var state_32179__$1 = (function (){var statearr_32188 = state_32179;(statearr_32188[8] = inst_32165);
return statearr_32188;
})();var statearr_32189_32202 = state_32179__$1;(statearr_32189_32202[2] = null);
(statearr_32189_32202[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_32193 = [null,null,null,null,null,null,null,null,null];(statearr_32193[0] = state_machine__5507__auto__);
(statearr_32193[1] = 1);
return statearr_32193;
});
var state_machine__5507__auto____1 = (function (state_32179){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32179);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32194){if((e32194 instanceof Object))
{var ex__5510__auto__ = e32194;var statearr_32195_32203 = state_32179;(statearr_32195_32203[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32179);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32194;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32204 = state_32179;
state_32179 = G__32204;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32179){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32179);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32196 = f__5522__auto__.call(null);(statearr_32196[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32196;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32266){var state_val_32267 = (state_32266[1]);if((state_val_32267 === 1))
{var inst_32246 = cljs.core.seq.call(null,coll);var inst_32247 = inst_32246;var state_32266__$1 = (function (){var statearr_32268 = state_32266;(statearr_32268[7] = inst_32247);
return statearr_32268;
})();var statearr_32269_32287 = state_32266__$1;(statearr_32269_32287[2] = null);
(statearr_32269_32287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32267 === 2))
{var inst_32247 = (state_32266[7]);var state_32266__$1 = state_32266;if(cljs.core.truth_(inst_32247))
{var statearr_32270_32288 = state_32266__$1;(statearr_32270_32288[1] = 4);
} else
{var statearr_32271_32289 = state_32266__$1;(statearr_32271_32289[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32267 === 3))
{var inst_32264 = (state_32266[2]);var state_32266__$1 = state_32266;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32266__$1,inst_32264);
} else
{if((state_val_32267 === 4))
{var inst_32247 = (state_32266[7]);var inst_32250 = cljs.core.first.call(null,inst_32247);var state_32266__$1 = state_32266;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32266__$1,7,ch,inst_32250);
} else
{if((state_val_32267 === 5))
{var state_32266__$1 = state_32266;if(cljs.core.truth_(close_QMARK_))
{var statearr_32272_32290 = state_32266__$1;(statearr_32272_32290[1] = 8);
} else
{var statearr_32273_32291 = state_32266__$1;(statearr_32273_32291[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32267 === 6))
{var inst_32262 = (state_32266[2]);var state_32266__$1 = state_32266;var statearr_32274_32292 = state_32266__$1;(statearr_32274_32292[2] = inst_32262);
(statearr_32274_32292[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32267 === 7))
{var inst_32247 = (state_32266[7]);var inst_32252 = (state_32266[2]);var inst_32253 = cljs.core.next.call(null,inst_32247);var inst_32247__$1 = inst_32253;var state_32266__$1 = (function (){var statearr_32275 = state_32266;(statearr_32275[7] = inst_32247__$1);
(statearr_32275[8] = inst_32252);
return statearr_32275;
})();var statearr_32276_32293 = state_32266__$1;(statearr_32276_32293[2] = null);
(statearr_32276_32293[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32267 === 8))
{var inst_32257 = cljs.core.async.close_BANG_.call(null,ch);var state_32266__$1 = state_32266;var statearr_32277_32294 = state_32266__$1;(statearr_32277_32294[2] = inst_32257);
(statearr_32277_32294[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32267 === 9))
{var state_32266__$1 = state_32266;var statearr_32278_32295 = state_32266__$1;(statearr_32278_32295[2] = null);
(statearr_32278_32295[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32267 === 10))
{var inst_32260 = (state_32266[2]);var state_32266__$1 = state_32266;var statearr_32279_32296 = state_32266__$1;(statearr_32279_32296[2] = inst_32260);
(statearr_32279_32296[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_32283 = [null,null,null,null,null,null,null,null,null];(statearr_32283[0] = state_machine__5507__auto__);
(statearr_32283[1] = 1);
return statearr_32283;
});
var state_machine__5507__auto____1 = (function (state_32266){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32266);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32284){if((e32284 instanceof Object))
{var ex__5510__auto__ = e32284;var statearr_32285_32297 = state_32266;(statearr_32285_32297[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32266);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32284;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32298 = state_32266;
state_32266 = G__32298;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32266){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32286 = f__5522__auto__.call(null);(statearr_32286[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_32286;
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
cljs.core.async.Mux = (function (){var obj32300 = {};return obj32300;
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
cljs.core.async.Mult = (function (){var obj32302 = {};return obj32302;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t32526 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32526 = (function (cs,ch,mult,meta32527){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta32527 = meta32527;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32526.cljs$lang$type = true;
cljs.core.async.t32526.cljs$lang$ctorStr = "cljs.core.async/t32526";
cljs.core.async.t32526.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32526");
});})(cs))
;
cljs.core.async.t32526.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t32526.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t32526.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t32526.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t32526.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32526.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t32526.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_32528){var self__ = this;
var _32528__$1 = this;return self__.meta32527;
});})(cs))
;
cljs.core.async.t32526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_32528,meta32527__$1){var self__ = this;
var _32528__$1 = this;return (new cljs.core.async.t32526(self__.cs,self__.ch,self__.mult,meta32527__$1));
});})(cs))
;
cljs.core.async.__GT_t32526 = ((function (cs){
return (function __GT_t32526(cs__$1,ch__$1,mult__$1,meta32527){return (new cljs.core.async.t32526(cs__$1,ch__$1,mult__$1,meta32527));
});})(cs))
;
}
return (new cljs.core.async.t32526(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___32749 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32663){var state_val_32664 = (state_32663[1]);if((state_val_32664 === 32))
{var inst_32607 = (state_32663[7]);var inst_32531 = (state_32663[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32663,31,Object,null,30);var inst_32614 = cljs.core.async.put_BANG_.call(null,inst_32607,inst_32531,done);var state_32663__$1 = state_32663;var statearr_32665_32750 = state_32663__$1;(statearr_32665_32750[2] = inst_32614);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32663__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 1))
{var state_32663__$1 = state_32663;var statearr_32666_32751 = state_32663__$1;(statearr_32666_32751[2] = null);
(statearr_32666_32751[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 33))
{var inst_32620 = (state_32663[9]);var inst_32622 = cljs.core.chunked_seq_QMARK_.call(null,inst_32620);var state_32663__$1 = state_32663;if(inst_32622)
{var statearr_32667_32752 = state_32663__$1;(statearr_32667_32752[1] = 36);
} else
{var statearr_32668_32753 = state_32663__$1;(statearr_32668_32753[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 2))
{var state_32663__$1 = state_32663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32663__$1,4,ch);
} else
{if((state_val_32664 === 34))
{var state_32663__$1 = state_32663;var statearr_32669_32754 = state_32663__$1;(statearr_32669_32754[2] = null);
(statearr_32669_32754[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 3))
{var inst_32661 = (state_32663[2]);var state_32663__$1 = state_32663;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32663__$1,inst_32661);
} else
{if((state_val_32664 === 35))
{var inst_32645 = (state_32663[2]);var state_32663__$1 = state_32663;var statearr_32670_32755 = state_32663__$1;(statearr_32670_32755[2] = inst_32645);
(statearr_32670_32755[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 4))
{var inst_32531 = (state_32663[8]);var inst_32531__$1 = (state_32663[2]);var inst_32532 = (inst_32531__$1 == null);var state_32663__$1 = (function (){var statearr_32671 = state_32663;(statearr_32671[8] = inst_32531__$1);
return statearr_32671;
})();if(cljs.core.truth_(inst_32532))
{var statearr_32672_32756 = state_32663__$1;(statearr_32672_32756[1] = 5);
} else
{var statearr_32673_32757 = state_32663__$1;(statearr_32673_32757[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 36))
{var inst_32620 = (state_32663[9]);var inst_32624 = cljs.core.chunk_first.call(null,inst_32620);var inst_32625 = cljs.core.chunk_rest.call(null,inst_32620);var inst_32626 = cljs.core.count.call(null,inst_32624);var inst_32599 = inst_32625;var inst_32600 = inst_32624;var inst_32601 = inst_32626;var inst_32602 = 0;var state_32663__$1 = (function (){var statearr_32674 = state_32663;(statearr_32674[10] = inst_32602);
(statearr_32674[11] = inst_32600);
(statearr_32674[12] = inst_32601);
(statearr_32674[13] = inst_32599);
return statearr_32674;
})();var statearr_32675_32758 = state_32663__$1;(statearr_32675_32758[2] = null);
(statearr_32675_32758[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 5))
{var inst_32538 = cljs.core.deref.call(null,cs);var inst_32539 = cljs.core.seq.call(null,inst_32538);var inst_32540 = inst_32539;var inst_32541 = null;var inst_32542 = 0;var inst_32543 = 0;var state_32663__$1 = (function (){var statearr_32676 = state_32663;(statearr_32676[14] = inst_32543);
(statearr_32676[15] = inst_32542);
(statearr_32676[16] = inst_32541);
(statearr_32676[17] = inst_32540);
return statearr_32676;
})();var statearr_32677_32759 = state_32663__$1;(statearr_32677_32759[2] = null);
(statearr_32677_32759[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 37))
{var inst_32620 = (state_32663[9]);var inst_32629 = cljs.core.first.call(null,inst_32620);var state_32663__$1 = (function (){var statearr_32678 = state_32663;(statearr_32678[18] = inst_32629);
return statearr_32678;
})();var statearr_32679_32760 = state_32663__$1;(statearr_32679_32760[2] = null);
(statearr_32679_32760[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 6))
{var inst_32591 = (state_32663[19]);var inst_32590 = cljs.core.deref.call(null,cs);var inst_32591__$1 = cljs.core.keys.call(null,inst_32590);var inst_32592 = cljs.core.count.call(null,inst_32591__$1);var inst_32593 = cljs.core.reset_BANG_.call(null,dctr,inst_32592);var inst_32598 = cljs.core.seq.call(null,inst_32591__$1);var inst_32599 = inst_32598;var inst_32600 = null;var inst_32601 = 0;var inst_32602 = 0;var state_32663__$1 = (function (){var statearr_32680 = state_32663;(statearr_32680[20] = inst_32593);
(statearr_32680[10] = inst_32602);
(statearr_32680[19] = inst_32591__$1);
(statearr_32680[11] = inst_32600);
(statearr_32680[12] = inst_32601);
(statearr_32680[13] = inst_32599);
return statearr_32680;
})();var statearr_32681_32761 = state_32663__$1;(statearr_32681_32761[2] = null);
(statearr_32681_32761[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 38))
{var inst_32642 = (state_32663[2]);var state_32663__$1 = state_32663;var statearr_32682_32762 = state_32663__$1;(statearr_32682_32762[2] = inst_32642);
(statearr_32682_32762[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 7))
{var inst_32659 = (state_32663[2]);var state_32663__$1 = state_32663;var statearr_32683_32763 = state_32663__$1;(statearr_32683_32763[2] = inst_32659);
(statearr_32683_32763[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 39))
{var inst_32620 = (state_32663[9]);var inst_32638 = (state_32663[2]);var inst_32639 = cljs.core.next.call(null,inst_32620);var inst_32599 = inst_32639;var inst_32600 = null;var inst_32601 = 0;var inst_32602 = 0;var state_32663__$1 = (function (){var statearr_32684 = state_32663;(statearr_32684[21] = inst_32638);
(statearr_32684[10] = inst_32602);
(statearr_32684[11] = inst_32600);
(statearr_32684[12] = inst_32601);
(statearr_32684[13] = inst_32599);
return statearr_32684;
})();var statearr_32685_32764 = state_32663__$1;(statearr_32685_32764[2] = null);
(statearr_32685_32764[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 8))
{var inst_32543 = (state_32663[14]);var inst_32542 = (state_32663[15]);var inst_32545 = (inst_32543 < inst_32542);var inst_32546 = inst_32545;var state_32663__$1 = state_32663;if(cljs.core.truth_(inst_32546))
{var statearr_32686_32765 = state_32663__$1;(statearr_32686_32765[1] = 10);
} else
{var statearr_32687_32766 = state_32663__$1;(statearr_32687_32766[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 40))
{var inst_32629 = (state_32663[18]);var inst_32630 = (state_32663[2]);var inst_32631 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32632 = cljs.core.async.untap_STAR_.call(null,m,inst_32629);var state_32663__$1 = (function (){var statearr_32688 = state_32663;(statearr_32688[22] = inst_32630);
(statearr_32688[23] = inst_32631);
return statearr_32688;
})();var statearr_32689_32767 = state_32663__$1;(statearr_32689_32767[2] = inst_32632);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32663__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 9))
{var inst_32588 = (state_32663[2]);var state_32663__$1 = state_32663;var statearr_32690_32768 = state_32663__$1;(statearr_32690_32768[2] = inst_32588);
(statearr_32690_32768[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 41))
{var inst_32531 = (state_32663[8]);var inst_32629 = (state_32663[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_32663,40,Object,null,39);var inst_32636 = cljs.core.async.put_BANG_.call(null,inst_32629,inst_32531,done);var state_32663__$1 = state_32663;var statearr_32691_32769 = state_32663__$1;(statearr_32691_32769[2] = inst_32636);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32663__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 10))
{var inst_32543 = (state_32663[14]);var inst_32541 = (state_32663[16]);var inst_32549 = cljs.core._nth.call(null,inst_32541,inst_32543);var inst_32550 = cljs.core.nth.call(null,inst_32549,0,null);var inst_32551 = cljs.core.nth.call(null,inst_32549,1,null);var state_32663__$1 = (function (){var statearr_32692 = state_32663;(statearr_32692[24] = inst_32550);
return statearr_32692;
})();if(cljs.core.truth_(inst_32551))
{var statearr_32693_32770 = state_32663__$1;(statearr_32693_32770[1] = 13);
} else
{var statearr_32694_32771 = state_32663__$1;(statearr_32694_32771[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 42))
{var state_32663__$1 = state_32663;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32663__$1,45,dchan);
} else
{if((state_val_32664 === 11))
{var inst_32540 = (state_32663[17]);var inst_32560 = (state_32663[25]);var inst_32560__$1 = cljs.core.seq.call(null,inst_32540);var state_32663__$1 = (function (){var statearr_32695 = state_32663;(statearr_32695[25] = inst_32560__$1);
return statearr_32695;
})();if(inst_32560__$1)
{var statearr_32696_32772 = state_32663__$1;(statearr_32696_32772[1] = 16);
} else
{var statearr_32697_32773 = state_32663__$1;(statearr_32697_32773[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 43))
{var state_32663__$1 = state_32663;var statearr_32698_32774 = state_32663__$1;(statearr_32698_32774[2] = null);
(statearr_32698_32774[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 12))
{var inst_32586 = (state_32663[2]);var state_32663__$1 = state_32663;var statearr_32699_32775 = state_32663__$1;(statearr_32699_32775[2] = inst_32586);
(statearr_32699_32775[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 44))
{var inst_32656 = (state_32663[2]);var state_32663__$1 = (function (){var statearr_32700 = state_32663;(statearr_32700[26] = inst_32656);
return statearr_32700;
})();var statearr_32701_32776 = state_32663__$1;(statearr_32701_32776[2] = null);
(statearr_32701_32776[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 13))
{var inst_32550 = (state_32663[24]);var inst_32553 = cljs.core.async.close_BANG_.call(null,inst_32550);var state_32663__$1 = state_32663;var statearr_32702_32777 = state_32663__$1;(statearr_32702_32777[2] = inst_32553);
(statearr_32702_32777[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 45))
{var inst_32653 = (state_32663[2]);var state_32663__$1 = state_32663;var statearr_32706_32778 = state_32663__$1;(statearr_32706_32778[2] = inst_32653);
(statearr_32706_32778[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 14))
{var state_32663__$1 = state_32663;var statearr_32707_32779 = state_32663__$1;(statearr_32707_32779[2] = null);
(statearr_32707_32779[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 15))
{var inst_32543 = (state_32663[14]);var inst_32542 = (state_32663[15]);var inst_32541 = (state_32663[16]);var inst_32540 = (state_32663[17]);var inst_32556 = (state_32663[2]);var inst_32557 = (inst_32543 + 1);var tmp32703 = inst_32542;var tmp32704 = inst_32541;var tmp32705 = inst_32540;var inst_32540__$1 = tmp32705;var inst_32541__$1 = tmp32704;var inst_32542__$1 = tmp32703;var inst_32543__$1 = inst_32557;var state_32663__$1 = (function (){var statearr_32708 = state_32663;(statearr_32708[14] = inst_32543__$1);
(statearr_32708[15] = inst_32542__$1);
(statearr_32708[16] = inst_32541__$1);
(statearr_32708[17] = inst_32540__$1);
(statearr_32708[27] = inst_32556);
return statearr_32708;
})();var statearr_32709_32780 = state_32663__$1;(statearr_32709_32780[2] = null);
(statearr_32709_32780[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 16))
{var inst_32560 = (state_32663[25]);var inst_32562 = cljs.core.chunked_seq_QMARK_.call(null,inst_32560);var state_32663__$1 = state_32663;if(inst_32562)
{var statearr_32710_32781 = state_32663__$1;(statearr_32710_32781[1] = 19);
} else
{var statearr_32711_32782 = state_32663__$1;(statearr_32711_32782[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 17))
{var state_32663__$1 = state_32663;var statearr_32712_32783 = state_32663__$1;(statearr_32712_32783[2] = null);
(statearr_32712_32783[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 18))
{var inst_32584 = (state_32663[2]);var state_32663__$1 = state_32663;var statearr_32713_32784 = state_32663__$1;(statearr_32713_32784[2] = inst_32584);
(statearr_32713_32784[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 19))
{var inst_32560 = (state_32663[25]);var inst_32564 = cljs.core.chunk_first.call(null,inst_32560);var inst_32565 = cljs.core.chunk_rest.call(null,inst_32560);var inst_32566 = cljs.core.count.call(null,inst_32564);var inst_32540 = inst_32565;var inst_32541 = inst_32564;var inst_32542 = inst_32566;var inst_32543 = 0;var state_32663__$1 = (function (){var statearr_32714 = state_32663;(statearr_32714[14] = inst_32543);
(statearr_32714[15] = inst_32542);
(statearr_32714[16] = inst_32541);
(statearr_32714[17] = inst_32540);
return statearr_32714;
})();var statearr_32715_32785 = state_32663__$1;(statearr_32715_32785[2] = null);
(statearr_32715_32785[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 20))
{var inst_32560 = (state_32663[25]);var inst_32570 = cljs.core.first.call(null,inst_32560);var inst_32571 = cljs.core.nth.call(null,inst_32570,0,null);var inst_32572 = cljs.core.nth.call(null,inst_32570,1,null);var state_32663__$1 = (function (){var statearr_32716 = state_32663;(statearr_32716[28] = inst_32571);
return statearr_32716;
})();if(cljs.core.truth_(inst_32572))
{var statearr_32717_32786 = state_32663__$1;(statearr_32717_32786[1] = 22);
} else
{var statearr_32718_32787 = state_32663__$1;(statearr_32718_32787[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 21))
{var inst_32581 = (state_32663[2]);var state_32663__$1 = state_32663;var statearr_32719_32788 = state_32663__$1;(statearr_32719_32788[2] = inst_32581);
(statearr_32719_32788[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 22))
{var inst_32571 = (state_32663[28]);var inst_32574 = cljs.core.async.close_BANG_.call(null,inst_32571);var state_32663__$1 = state_32663;var statearr_32720_32789 = state_32663__$1;(statearr_32720_32789[2] = inst_32574);
(statearr_32720_32789[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 23))
{var state_32663__$1 = state_32663;var statearr_32721_32790 = state_32663__$1;(statearr_32721_32790[2] = null);
(statearr_32721_32790[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 24))
{var inst_32560 = (state_32663[25]);var inst_32577 = (state_32663[2]);var inst_32578 = cljs.core.next.call(null,inst_32560);var inst_32540 = inst_32578;var inst_32541 = null;var inst_32542 = 0;var inst_32543 = 0;var state_32663__$1 = (function (){var statearr_32722 = state_32663;(statearr_32722[14] = inst_32543);
(statearr_32722[15] = inst_32542);
(statearr_32722[29] = inst_32577);
(statearr_32722[16] = inst_32541);
(statearr_32722[17] = inst_32540);
return statearr_32722;
})();var statearr_32723_32791 = state_32663__$1;(statearr_32723_32791[2] = null);
(statearr_32723_32791[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 25))
{var inst_32602 = (state_32663[10]);var inst_32601 = (state_32663[12]);var inst_32604 = (inst_32602 < inst_32601);var inst_32605 = inst_32604;var state_32663__$1 = state_32663;if(cljs.core.truth_(inst_32605))
{var statearr_32724_32792 = state_32663__$1;(statearr_32724_32792[1] = 27);
} else
{var statearr_32725_32793 = state_32663__$1;(statearr_32725_32793[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 26))
{var inst_32591 = (state_32663[19]);var inst_32649 = (state_32663[2]);var inst_32650 = cljs.core.seq.call(null,inst_32591);var state_32663__$1 = (function (){var statearr_32726 = state_32663;(statearr_32726[30] = inst_32649);
return statearr_32726;
})();if(inst_32650)
{var statearr_32727_32794 = state_32663__$1;(statearr_32727_32794[1] = 42);
} else
{var statearr_32728_32795 = state_32663__$1;(statearr_32728_32795[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 27))
{var inst_32602 = (state_32663[10]);var inst_32600 = (state_32663[11]);var inst_32607 = cljs.core._nth.call(null,inst_32600,inst_32602);var state_32663__$1 = (function (){var statearr_32729 = state_32663;(statearr_32729[7] = inst_32607);
return statearr_32729;
})();var statearr_32730_32796 = state_32663__$1;(statearr_32730_32796[2] = null);
(statearr_32730_32796[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 28))
{var inst_32620 = (state_32663[9]);var inst_32599 = (state_32663[13]);var inst_32620__$1 = cljs.core.seq.call(null,inst_32599);var state_32663__$1 = (function (){var statearr_32734 = state_32663;(statearr_32734[9] = inst_32620__$1);
return statearr_32734;
})();if(inst_32620__$1)
{var statearr_32735_32797 = state_32663__$1;(statearr_32735_32797[1] = 33);
} else
{var statearr_32736_32798 = state_32663__$1;(statearr_32736_32798[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 29))
{var inst_32647 = (state_32663[2]);var state_32663__$1 = state_32663;var statearr_32737_32799 = state_32663__$1;(statearr_32737_32799[2] = inst_32647);
(statearr_32737_32799[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 30))
{var inst_32602 = (state_32663[10]);var inst_32600 = (state_32663[11]);var inst_32601 = (state_32663[12]);var inst_32599 = (state_32663[13]);var inst_32616 = (state_32663[2]);var inst_32617 = (inst_32602 + 1);var tmp32731 = inst_32600;var tmp32732 = inst_32601;var tmp32733 = inst_32599;var inst_32599__$1 = tmp32733;var inst_32600__$1 = tmp32731;var inst_32601__$1 = tmp32732;var inst_32602__$1 = inst_32617;var state_32663__$1 = (function (){var statearr_32738 = state_32663;(statearr_32738[10] = inst_32602__$1);
(statearr_32738[31] = inst_32616);
(statearr_32738[11] = inst_32600__$1);
(statearr_32738[12] = inst_32601__$1);
(statearr_32738[13] = inst_32599__$1);
return statearr_32738;
})();var statearr_32739_32800 = state_32663__$1;(statearr_32739_32800[2] = null);
(statearr_32739_32800[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32664 === 31))
{var inst_32607 = (state_32663[7]);var inst_32608 = (state_32663[2]);var inst_32609 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_32610 = cljs.core.async.untap_STAR_.call(null,m,inst_32607);var state_32663__$1 = (function (){var statearr_32740 = state_32663;(statearr_32740[32] = inst_32608);
(statearr_32740[33] = inst_32609);
return statearr_32740;
})();var statearr_32741_32801 = state_32663__$1;(statearr_32741_32801[2] = inst_32610);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32663__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_32745 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_32745[0] = state_machine__5507__auto__);
(statearr_32745[1] = 1);
return statearr_32745;
});
var state_machine__5507__auto____1 = (function (state_32663){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32663);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32746){if((e32746 instanceof Object))
{var ex__5510__auto__ = e32746;var statearr_32747_32802 = state_32663;(statearr_32747_32802[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32663);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32746;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32803 = state_32663;
state_32663 = G__32803;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32663){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32663);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32748 = f__5522__auto__.call(null);(statearr_32748[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32749);
return statearr_32748;
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
cljs.core.async.Mix = (function (){var obj32805 = {};return obj32805;
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
;var m = (function (){if(typeof cljs.core.async.t32915 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32915 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta32916){
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
this.meta32916 = meta32916;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32915.cljs$lang$type = true;
cljs.core.async.t32915.cljs$lang$ctorStr = "cljs.core.async/t32915";
cljs.core.async.t32915.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32915");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32915.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t32915.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32915.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32915.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32915.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32915.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32915.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t32915.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32915.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32917){var self__ = this;
var _32917__$1 = this;return self__.meta32916;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t32915.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_32917,meta32916__$1){var self__ = this;
var _32917__$1 = this;return (new cljs.core.async.t32915(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta32916__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t32915 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t32915(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32916){return (new cljs.core.async.t32915(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta32916));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t32915(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___33024 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32982){var state_val_32983 = (state_32982[1]);if((state_val_32983 === 1))
{var inst_32921 = (state_32982[7]);var inst_32921__$1 = calc_state.call(null);var inst_32922 = cljs.core.seq_QMARK_.call(null,inst_32921__$1);var state_32982__$1 = (function (){var statearr_32984 = state_32982;(statearr_32984[7] = inst_32921__$1);
return statearr_32984;
})();if(inst_32922)
{var statearr_32985_33025 = state_32982__$1;(statearr_32985_33025[1] = 2);
} else
{var statearr_32986_33026 = state_32982__$1;(statearr_32986_33026[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 2))
{var inst_32921 = (state_32982[7]);var inst_32924 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32921);var state_32982__$1 = state_32982;var statearr_32987_33027 = state_32982__$1;(statearr_32987_33027[2] = inst_32924);
(statearr_32987_33027[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 3))
{var inst_32921 = (state_32982[7]);var state_32982__$1 = state_32982;var statearr_32988_33028 = state_32982__$1;(statearr_32988_33028[2] = inst_32921);
(statearr_32988_33028[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 4))
{var inst_32921 = (state_32982[7]);var inst_32927 = (state_32982[2]);var inst_32928 = cljs.core.get.call(null,inst_32927,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32929 = cljs.core.get.call(null,inst_32927,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32930 = cljs.core.get.call(null,inst_32927,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_32931 = inst_32921;var state_32982__$1 = (function (){var statearr_32989 = state_32982;(statearr_32989[8] = inst_32929);
(statearr_32989[9] = inst_32928);
(statearr_32989[10] = inst_32930);
(statearr_32989[11] = inst_32931);
return statearr_32989;
})();var statearr_32990_33029 = state_32982__$1;(statearr_32990_33029[2] = null);
(statearr_32990_33029[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 5))
{var inst_32931 = (state_32982[11]);var inst_32934 = cljs.core.seq_QMARK_.call(null,inst_32931);var state_32982__$1 = state_32982;if(inst_32934)
{var statearr_32991_33030 = state_32982__$1;(statearr_32991_33030[1] = 7);
} else
{var statearr_32992_33031 = state_32982__$1;(statearr_32992_33031[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 6))
{var inst_32980 = (state_32982[2]);var state_32982__$1 = state_32982;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32982__$1,inst_32980);
} else
{if((state_val_32983 === 7))
{var inst_32931 = (state_32982[11]);var inst_32936 = cljs.core.apply.call(null,cljs.core.hash_map,inst_32931);var state_32982__$1 = state_32982;var statearr_32993_33032 = state_32982__$1;(statearr_32993_33032[2] = inst_32936);
(statearr_32993_33032[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 8))
{var inst_32931 = (state_32982[11]);var state_32982__$1 = state_32982;var statearr_32994_33033 = state_32982__$1;(statearr_32994_33033[2] = inst_32931);
(statearr_32994_33033[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 9))
{var inst_32939 = (state_32982[12]);var inst_32939__$1 = (state_32982[2]);var inst_32940 = cljs.core.get.call(null,inst_32939__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_32941 = cljs.core.get.call(null,inst_32939__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_32942 = cljs.core.get.call(null,inst_32939__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_32982__$1 = (function (){var statearr_32995 = state_32982;(statearr_32995[13] = inst_32941);
(statearr_32995[14] = inst_32942);
(statearr_32995[12] = inst_32939__$1);
return statearr_32995;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_32982__$1,10,inst_32940);
} else
{if((state_val_32983 === 10))
{var inst_32946 = (state_32982[15]);var inst_32947 = (state_32982[16]);var inst_32945 = (state_32982[2]);var inst_32946__$1 = cljs.core.nth.call(null,inst_32945,0,null);var inst_32947__$1 = cljs.core.nth.call(null,inst_32945,1,null);var inst_32948 = (inst_32946__$1 == null);var inst_32949 = cljs.core._EQ_.call(null,inst_32947__$1,change);var inst_32950 = (inst_32948) || (inst_32949);var state_32982__$1 = (function (){var statearr_32996 = state_32982;(statearr_32996[15] = inst_32946__$1);
(statearr_32996[16] = inst_32947__$1);
return statearr_32996;
})();if(cljs.core.truth_(inst_32950))
{var statearr_32997_33034 = state_32982__$1;(statearr_32997_33034[1] = 11);
} else
{var statearr_32998_33035 = state_32982__$1;(statearr_32998_33035[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 11))
{var inst_32946 = (state_32982[15]);var inst_32952 = (inst_32946 == null);var state_32982__$1 = state_32982;if(cljs.core.truth_(inst_32952))
{var statearr_32999_33036 = state_32982__$1;(statearr_32999_33036[1] = 14);
} else
{var statearr_33000_33037 = state_32982__$1;(statearr_33000_33037[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 12))
{var inst_32942 = (state_32982[14]);var inst_32961 = (state_32982[17]);var inst_32947 = (state_32982[16]);var inst_32961__$1 = inst_32942.call(null,inst_32947);var state_32982__$1 = (function (){var statearr_33001 = state_32982;(statearr_33001[17] = inst_32961__$1);
return statearr_33001;
})();if(cljs.core.truth_(inst_32961__$1))
{var statearr_33002_33038 = state_32982__$1;(statearr_33002_33038[1] = 17);
} else
{var statearr_33003_33039 = state_32982__$1;(statearr_33003_33039[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 13))
{var inst_32978 = (state_32982[2]);var state_32982__$1 = state_32982;var statearr_33004_33040 = state_32982__$1;(statearr_33004_33040[2] = inst_32978);
(statearr_33004_33040[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 14))
{var inst_32947 = (state_32982[16]);var inst_32954 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_32947);var state_32982__$1 = state_32982;var statearr_33005_33041 = state_32982__$1;(statearr_33005_33041[2] = inst_32954);
(statearr_33005_33041[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 15))
{var state_32982__$1 = state_32982;var statearr_33006_33042 = state_32982__$1;(statearr_33006_33042[2] = null);
(statearr_33006_33042[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 16))
{var inst_32957 = (state_32982[2]);var inst_32958 = calc_state.call(null);var inst_32931 = inst_32958;var state_32982__$1 = (function (){var statearr_33007 = state_32982;(statearr_33007[18] = inst_32957);
(statearr_33007[11] = inst_32931);
return statearr_33007;
})();var statearr_33008_33043 = state_32982__$1;(statearr_33008_33043[2] = null);
(statearr_33008_33043[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 17))
{var inst_32961 = (state_32982[17]);var state_32982__$1 = state_32982;var statearr_33009_33044 = state_32982__$1;(statearr_33009_33044[2] = inst_32961);
(statearr_33009_33044[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 18))
{var inst_32941 = (state_32982[13]);var inst_32942 = (state_32982[14]);var inst_32947 = (state_32982[16]);var inst_32964 = cljs.core.empty_QMARK_.call(null,inst_32942);var inst_32965 = inst_32941.call(null,inst_32947);var inst_32966 = cljs.core.not.call(null,inst_32965);var inst_32967 = (inst_32964) && (inst_32966);var state_32982__$1 = state_32982;var statearr_33010_33045 = state_32982__$1;(statearr_33010_33045[2] = inst_32967);
(statearr_33010_33045[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 19))
{var inst_32969 = (state_32982[2]);var state_32982__$1 = state_32982;if(cljs.core.truth_(inst_32969))
{var statearr_33011_33046 = state_32982__$1;(statearr_33011_33046[1] = 20);
} else
{var statearr_33012_33047 = state_32982__$1;(statearr_33012_33047[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 20))
{var inst_32946 = (state_32982[15]);var state_32982__$1 = state_32982;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32982__$1,23,out,inst_32946);
} else
{if((state_val_32983 === 21))
{var state_32982__$1 = state_32982;var statearr_33013_33048 = state_32982__$1;(statearr_33013_33048[2] = null);
(statearr_33013_33048[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 22))
{var inst_32939 = (state_32982[12]);var inst_32975 = (state_32982[2]);var inst_32931 = inst_32939;var state_32982__$1 = (function (){var statearr_33014 = state_32982;(statearr_33014[11] = inst_32931);
(statearr_33014[19] = inst_32975);
return statearr_33014;
})();var statearr_33015_33049 = state_32982__$1;(statearr_33015_33049[2] = null);
(statearr_33015_33049[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32983 === 23))
{var inst_32972 = (state_32982[2]);var state_32982__$1 = state_32982;var statearr_33016_33050 = state_32982__$1;(statearr_33016_33050[2] = inst_32972);
(statearr_33016_33050[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_33020 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33020[0] = state_machine__5507__auto__);
(statearr_33020[1] = 1);
return statearr_33020;
});
var state_machine__5507__auto____1 = (function (state_32982){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32982);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33021){if((e33021 instanceof Object))
{var ex__5510__auto__ = e33021;var statearr_33022_33051 = state_32982;(statearr_33022_33051[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32982);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33021;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33052 = state_32982;
state_32982 = G__33052;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32982){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32982);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33023 = f__5522__auto__.call(null);(statearr_33023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33024);
return statearr_33023;
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
cljs.core.async.Pub = (function (){var obj33054 = {};return obj33054;
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
return (function (p1__33055_SHARP_){if(cljs.core.truth_(p1__33055_SHARP_.call(null,topic)))
{return p1__33055_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__33055_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t33180 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33180 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta33181){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta33181 = meta33181;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33180.cljs$lang$type = true;
cljs.core.async.t33180.cljs$lang$ctorStr = "cljs.core.async/t33180";
cljs.core.async.t33180.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33180");
});})(mults,ensure_mult))
;
cljs.core.async.t33180.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t33180.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t33180.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t33180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t33180.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t33180.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33180.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t33180.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_33182){var self__ = this;
var _33182__$1 = this;return self__.meta33181;
});})(mults,ensure_mult))
;
cljs.core.async.t33180.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_33182,meta33181__$1){var self__ = this;
var _33182__$1 = this;return (new cljs.core.async.t33180(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta33181__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t33180 = ((function (mults,ensure_mult){
return (function __GT_t33180(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33181){return (new cljs.core.async.t33180(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta33181));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t33180(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___33304 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33256){var state_val_33257 = (state_33256[1]);if((state_val_33257 === 1))
{var state_33256__$1 = state_33256;var statearr_33258_33305 = state_33256__$1;(statearr_33258_33305[2] = null);
(statearr_33258_33305[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 2))
{var state_33256__$1 = state_33256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33256__$1,4,ch);
} else
{if((state_val_33257 === 3))
{var inst_33254 = (state_33256[2]);var state_33256__$1 = state_33256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33256__$1,inst_33254);
} else
{if((state_val_33257 === 4))
{var inst_33185 = (state_33256[7]);var inst_33185__$1 = (state_33256[2]);var inst_33186 = (inst_33185__$1 == null);var state_33256__$1 = (function (){var statearr_33259 = state_33256;(statearr_33259[7] = inst_33185__$1);
return statearr_33259;
})();if(cljs.core.truth_(inst_33186))
{var statearr_33260_33306 = state_33256__$1;(statearr_33260_33306[1] = 5);
} else
{var statearr_33261_33307 = state_33256__$1;(statearr_33261_33307[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 5))
{var inst_33192 = cljs.core.deref.call(null,mults);var inst_33193 = cljs.core.vals.call(null,inst_33192);var inst_33194 = cljs.core.seq.call(null,inst_33193);var inst_33195 = inst_33194;var inst_33196 = null;var inst_33197 = 0;var inst_33198 = 0;var state_33256__$1 = (function (){var statearr_33262 = state_33256;(statearr_33262[8] = inst_33197);
(statearr_33262[9] = inst_33198);
(statearr_33262[10] = inst_33195);
(statearr_33262[11] = inst_33196);
return statearr_33262;
})();var statearr_33263_33308 = state_33256__$1;(statearr_33263_33308[2] = null);
(statearr_33263_33308[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 6))
{var inst_33235 = (state_33256[12]);var inst_33233 = (state_33256[13]);var inst_33185 = (state_33256[7]);var inst_33233__$1 = topic_fn.call(null,inst_33185);var inst_33234 = cljs.core.deref.call(null,mults);var inst_33235__$1 = cljs.core.get.call(null,inst_33234,inst_33233__$1);var state_33256__$1 = (function (){var statearr_33264 = state_33256;(statearr_33264[12] = inst_33235__$1);
(statearr_33264[13] = inst_33233__$1);
return statearr_33264;
})();if(cljs.core.truth_(inst_33235__$1))
{var statearr_33265_33309 = state_33256__$1;(statearr_33265_33309[1] = 19);
} else
{var statearr_33266_33310 = state_33256__$1;(statearr_33266_33310[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 7))
{var inst_33252 = (state_33256[2]);var state_33256__$1 = state_33256;var statearr_33267_33311 = state_33256__$1;(statearr_33267_33311[2] = inst_33252);
(statearr_33267_33311[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 8))
{var inst_33197 = (state_33256[8]);var inst_33198 = (state_33256[9]);var inst_33200 = (inst_33198 < inst_33197);var inst_33201 = inst_33200;var state_33256__$1 = state_33256;if(cljs.core.truth_(inst_33201))
{var statearr_33271_33312 = state_33256__$1;(statearr_33271_33312[1] = 10);
} else
{var statearr_33272_33313 = state_33256__$1;(statearr_33272_33313[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 9))
{var inst_33231 = (state_33256[2]);var state_33256__$1 = state_33256;var statearr_33273_33314 = state_33256__$1;(statearr_33273_33314[2] = inst_33231);
(statearr_33273_33314[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 10))
{var inst_33197 = (state_33256[8]);var inst_33198 = (state_33256[9]);var inst_33195 = (state_33256[10]);var inst_33196 = (state_33256[11]);var inst_33203 = cljs.core._nth.call(null,inst_33196,inst_33198);var inst_33204 = cljs.core.async.muxch_STAR_.call(null,inst_33203);var inst_33205 = cljs.core.async.close_BANG_.call(null,inst_33204);var inst_33206 = (inst_33198 + 1);var tmp33268 = inst_33197;var tmp33269 = inst_33195;var tmp33270 = inst_33196;var inst_33195__$1 = tmp33269;var inst_33196__$1 = tmp33270;var inst_33197__$1 = tmp33268;var inst_33198__$1 = inst_33206;var state_33256__$1 = (function (){var statearr_33274 = state_33256;(statearr_33274[8] = inst_33197__$1);
(statearr_33274[9] = inst_33198__$1);
(statearr_33274[10] = inst_33195__$1);
(statearr_33274[11] = inst_33196__$1);
(statearr_33274[14] = inst_33205);
return statearr_33274;
})();var statearr_33275_33315 = state_33256__$1;(statearr_33275_33315[2] = null);
(statearr_33275_33315[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 11))
{var inst_33195 = (state_33256[10]);var inst_33209 = (state_33256[15]);var inst_33209__$1 = cljs.core.seq.call(null,inst_33195);var state_33256__$1 = (function (){var statearr_33276 = state_33256;(statearr_33276[15] = inst_33209__$1);
return statearr_33276;
})();if(inst_33209__$1)
{var statearr_33277_33316 = state_33256__$1;(statearr_33277_33316[1] = 13);
} else
{var statearr_33278_33317 = state_33256__$1;(statearr_33278_33317[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 12))
{var inst_33229 = (state_33256[2]);var state_33256__$1 = state_33256;var statearr_33279_33318 = state_33256__$1;(statearr_33279_33318[2] = inst_33229);
(statearr_33279_33318[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 13))
{var inst_33209 = (state_33256[15]);var inst_33211 = cljs.core.chunked_seq_QMARK_.call(null,inst_33209);var state_33256__$1 = state_33256;if(inst_33211)
{var statearr_33280_33319 = state_33256__$1;(statearr_33280_33319[1] = 16);
} else
{var statearr_33281_33320 = state_33256__$1;(statearr_33281_33320[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 14))
{var state_33256__$1 = state_33256;var statearr_33282_33321 = state_33256__$1;(statearr_33282_33321[2] = null);
(statearr_33282_33321[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 15))
{var inst_33227 = (state_33256[2]);var state_33256__$1 = state_33256;var statearr_33283_33322 = state_33256__$1;(statearr_33283_33322[2] = inst_33227);
(statearr_33283_33322[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 16))
{var inst_33209 = (state_33256[15]);var inst_33213 = cljs.core.chunk_first.call(null,inst_33209);var inst_33214 = cljs.core.chunk_rest.call(null,inst_33209);var inst_33215 = cljs.core.count.call(null,inst_33213);var inst_33195 = inst_33214;var inst_33196 = inst_33213;var inst_33197 = inst_33215;var inst_33198 = 0;var state_33256__$1 = (function (){var statearr_33284 = state_33256;(statearr_33284[8] = inst_33197);
(statearr_33284[9] = inst_33198);
(statearr_33284[10] = inst_33195);
(statearr_33284[11] = inst_33196);
return statearr_33284;
})();var statearr_33285_33323 = state_33256__$1;(statearr_33285_33323[2] = null);
(statearr_33285_33323[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 17))
{var inst_33209 = (state_33256[15]);var inst_33218 = cljs.core.first.call(null,inst_33209);var inst_33219 = cljs.core.async.muxch_STAR_.call(null,inst_33218);var inst_33220 = cljs.core.async.close_BANG_.call(null,inst_33219);var inst_33221 = cljs.core.next.call(null,inst_33209);var inst_33195 = inst_33221;var inst_33196 = null;var inst_33197 = 0;var inst_33198 = 0;var state_33256__$1 = (function (){var statearr_33286 = state_33256;(statearr_33286[8] = inst_33197);
(statearr_33286[9] = inst_33198);
(statearr_33286[10] = inst_33195);
(statearr_33286[11] = inst_33196);
(statearr_33286[16] = inst_33220);
return statearr_33286;
})();var statearr_33287_33324 = state_33256__$1;(statearr_33287_33324[2] = null);
(statearr_33287_33324[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 18))
{var inst_33224 = (state_33256[2]);var state_33256__$1 = state_33256;var statearr_33288_33325 = state_33256__$1;(statearr_33288_33325[2] = inst_33224);
(statearr_33288_33325[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 19))
{var state_33256__$1 = state_33256;var statearr_33289_33326 = state_33256__$1;(statearr_33289_33326[2] = null);
(statearr_33289_33326[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 20))
{var state_33256__$1 = state_33256;var statearr_33290_33327 = state_33256__$1;(statearr_33290_33327[2] = null);
(statearr_33290_33327[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 21))
{var inst_33249 = (state_33256[2]);var state_33256__$1 = (function (){var statearr_33291 = state_33256;(statearr_33291[17] = inst_33249);
return statearr_33291;
})();var statearr_33292_33328 = state_33256__$1;(statearr_33292_33328[2] = null);
(statearr_33292_33328[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 22))
{var inst_33246 = (state_33256[2]);var state_33256__$1 = state_33256;var statearr_33293_33329 = state_33256__$1;(statearr_33293_33329[2] = inst_33246);
(statearr_33293_33329[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 23))
{var inst_33233 = (state_33256[13]);var inst_33237 = (state_33256[2]);var inst_33238 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_33233);var state_33256__$1 = (function (){var statearr_33294 = state_33256;(statearr_33294[18] = inst_33237);
return statearr_33294;
})();var statearr_33295_33330 = state_33256__$1;(statearr_33295_33330[2] = inst_33238);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33256__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33257 === 24))
{var inst_33235 = (state_33256[12]);var inst_33185 = (state_33256[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33256,23,Object,null,22);var inst_33242 = cljs.core.async.muxch_STAR_.call(null,inst_33235);var state_33256__$1 = state_33256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33256__$1,25,inst_33242,inst_33185);
} else
{if((state_val_33257 === 25))
{var inst_33244 = (state_33256[2]);var state_33256__$1 = state_33256;var statearr_33296_33331 = state_33256__$1;(statearr_33296_33331[2] = inst_33244);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33256__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_33300 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33300[0] = state_machine__5507__auto__);
(statearr_33300[1] = 1);
return statearr_33300;
});
var state_machine__5507__auto____1 = (function (state_33256){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33256);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33301){if((e33301 instanceof Object))
{var ex__5510__auto__ = e33301;var statearr_33302_33332 = state_33256;(statearr_33302_33332[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33301;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33333 = state_33256;
state_33256 = G__33333;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33256){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33303 = f__5522__auto__.call(null);(statearr_33303[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33304);
return statearr_33303;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___33470 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33440){var state_val_33441 = (state_33440[1]);if((state_val_33441 === 1))
{var state_33440__$1 = state_33440;var statearr_33442_33471 = state_33440__$1;(statearr_33442_33471[2] = null);
(statearr_33442_33471[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 2))
{var inst_33403 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_33404 = 0;var state_33440__$1 = (function (){var statearr_33443 = state_33440;(statearr_33443[7] = inst_33403);
(statearr_33443[8] = inst_33404);
return statearr_33443;
})();var statearr_33444_33472 = state_33440__$1;(statearr_33444_33472[2] = null);
(statearr_33444_33472[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 3))
{var inst_33438 = (state_33440[2]);var state_33440__$1 = state_33440;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33440__$1,inst_33438);
} else
{if((state_val_33441 === 4))
{var inst_33404 = (state_33440[8]);var inst_33406 = (inst_33404 < cnt);var state_33440__$1 = state_33440;if(cljs.core.truth_(inst_33406))
{var statearr_33445_33473 = state_33440__$1;(statearr_33445_33473[1] = 6);
} else
{var statearr_33446_33474 = state_33440__$1;(statearr_33446_33474[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 5))
{var inst_33424 = (state_33440[2]);var state_33440__$1 = (function (){var statearr_33447 = state_33440;(statearr_33447[9] = inst_33424);
return statearr_33447;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33440__$1,12,dchan);
} else
{if((state_val_33441 === 6))
{var state_33440__$1 = state_33440;var statearr_33448_33475 = state_33440__$1;(statearr_33448_33475[2] = null);
(statearr_33448_33475[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 7))
{var state_33440__$1 = state_33440;var statearr_33449_33476 = state_33440__$1;(statearr_33449_33476[2] = null);
(statearr_33449_33476[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 8))
{var inst_33422 = (state_33440[2]);var state_33440__$1 = state_33440;var statearr_33450_33477 = state_33440__$1;(statearr_33450_33477[2] = inst_33422);
(statearr_33450_33477[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 9))
{var inst_33404 = (state_33440[8]);var inst_33417 = (state_33440[2]);var inst_33418 = (inst_33404 + 1);var inst_33404__$1 = inst_33418;var state_33440__$1 = (function (){var statearr_33451 = state_33440;(statearr_33451[10] = inst_33417);
(statearr_33451[8] = inst_33404__$1);
return statearr_33451;
})();var statearr_33452_33478 = state_33440__$1;(statearr_33452_33478[2] = null);
(statearr_33452_33478[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 10))
{var inst_33408 = (state_33440[2]);var inst_33409 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_33440__$1 = (function (){var statearr_33453 = state_33440;(statearr_33453[11] = inst_33408);
return statearr_33453;
})();var statearr_33454_33479 = state_33440__$1;(statearr_33454_33479[2] = inst_33409);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33440__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 11))
{var inst_33404 = (state_33440[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33440,10,Object,null,9);var inst_33413 = chs__$1.call(null,inst_33404);var inst_33414 = done.call(null,inst_33404);var inst_33415 = cljs.core.async.take_BANG_.call(null,inst_33413,inst_33414);var state_33440__$1 = state_33440;var statearr_33455_33480 = state_33440__$1;(statearr_33455_33480[2] = inst_33415);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33440__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 12))
{var inst_33426 = (state_33440[12]);var inst_33426__$1 = (state_33440[2]);var inst_33427 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_33426__$1);var state_33440__$1 = (function (){var statearr_33456 = state_33440;(statearr_33456[12] = inst_33426__$1);
return statearr_33456;
})();if(cljs.core.truth_(inst_33427))
{var statearr_33457_33481 = state_33440__$1;(statearr_33457_33481[1] = 13);
} else
{var statearr_33458_33482 = state_33440__$1;(statearr_33458_33482[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 13))
{var inst_33429 = cljs.core.async.close_BANG_.call(null,out);var state_33440__$1 = state_33440;var statearr_33459_33483 = state_33440__$1;(statearr_33459_33483[2] = inst_33429);
(statearr_33459_33483[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 14))
{var inst_33426 = (state_33440[12]);var inst_33431 = cljs.core.apply.call(null,f,inst_33426);var state_33440__$1 = state_33440;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33440__$1,16,out,inst_33431);
} else
{if((state_val_33441 === 15))
{var inst_33436 = (state_33440[2]);var state_33440__$1 = state_33440;var statearr_33460_33484 = state_33440__$1;(statearr_33460_33484[2] = inst_33436);
(statearr_33460_33484[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33441 === 16))
{var inst_33433 = (state_33440[2]);var state_33440__$1 = (function (){var statearr_33461 = state_33440;(statearr_33461[13] = inst_33433);
return statearr_33461;
})();var statearr_33462_33485 = state_33440__$1;(statearr_33462_33485[2] = null);
(statearr_33462_33485[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33466 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33466[0] = state_machine__5507__auto__);
(statearr_33466[1] = 1);
return statearr_33466;
});
var state_machine__5507__auto____1 = (function (state_33440){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33440);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33467){if((e33467 instanceof Object))
{var ex__5510__auto__ = e33467;var statearr_33468_33486 = state_33440;(statearr_33468_33486[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33440);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33467;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33487 = state_33440;
state_33440 = G__33487;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33440){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33440);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33469 = f__5522__auto__.call(null);(statearr_33469[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33470);
return statearr_33469;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33595 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33571){var state_val_33572 = (state_33571[1]);if((state_val_33572 === 1))
{var inst_33542 = cljs.core.vec.call(null,chs);var inst_33543 = inst_33542;var state_33571__$1 = (function (){var statearr_33573 = state_33571;(statearr_33573[7] = inst_33543);
return statearr_33573;
})();var statearr_33574_33596 = state_33571__$1;(statearr_33574_33596[2] = null);
(statearr_33574_33596[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33572 === 2))
{var inst_33543 = (state_33571[7]);var inst_33545 = cljs.core.count.call(null,inst_33543);var inst_33546 = (inst_33545 > 0);var state_33571__$1 = state_33571;if(cljs.core.truth_(inst_33546))
{var statearr_33575_33597 = state_33571__$1;(statearr_33575_33597[1] = 4);
} else
{var statearr_33576_33598 = state_33571__$1;(statearr_33576_33598[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33572 === 3))
{var inst_33569 = (state_33571[2]);var state_33571__$1 = state_33571;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33571__$1,inst_33569);
} else
{if((state_val_33572 === 4))
{var inst_33543 = (state_33571[7]);var state_33571__$1 = state_33571;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_33571__$1,7,inst_33543);
} else
{if((state_val_33572 === 5))
{var inst_33565 = cljs.core.async.close_BANG_.call(null,out);var state_33571__$1 = state_33571;var statearr_33577_33599 = state_33571__$1;(statearr_33577_33599[2] = inst_33565);
(statearr_33577_33599[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33572 === 6))
{var inst_33567 = (state_33571[2]);var state_33571__$1 = state_33571;var statearr_33578_33600 = state_33571__$1;(statearr_33578_33600[2] = inst_33567);
(statearr_33578_33600[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33572 === 7))
{var inst_33550 = (state_33571[8]);var inst_33551 = (state_33571[9]);var inst_33550__$1 = (state_33571[2]);var inst_33551__$1 = cljs.core.nth.call(null,inst_33550__$1,0,null);var inst_33552 = cljs.core.nth.call(null,inst_33550__$1,1,null);var inst_33553 = (inst_33551__$1 == null);var state_33571__$1 = (function (){var statearr_33579 = state_33571;(statearr_33579[8] = inst_33550__$1);
(statearr_33579[10] = inst_33552);
(statearr_33579[9] = inst_33551__$1);
return statearr_33579;
})();if(cljs.core.truth_(inst_33553))
{var statearr_33580_33601 = state_33571__$1;(statearr_33580_33601[1] = 8);
} else
{var statearr_33581_33602 = state_33571__$1;(statearr_33581_33602[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33572 === 8))
{var inst_33550 = (state_33571[8]);var inst_33552 = (state_33571[10]);var inst_33551 = (state_33571[9]);var inst_33543 = (state_33571[7]);var inst_33555 = (function (){var c = inst_33552;var v = inst_33551;var vec__33548 = inst_33550;var cs = inst_33543;return ((function (c,v,vec__33548,cs,inst_33550,inst_33552,inst_33551,inst_33543,state_val_33572){
return (function (p1__33488_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__33488_SHARP_);
});
;})(c,v,vec__33548,cs,inst_33550,inst_33552,inst_33551,inst_33543,state_val_33572))
})();var inst_33556 = cljs.core.filterv.call(null,inst_33555,inst_33543);var inst_33543__$1 = inst_33556;var state_33571__$1 = (function (){var statearr_33582 = state_33571;(statearr_33582[7] = inst_33543__$1);
return statearr_33582;
})();var statearr_33583_33603 = state_33571__$1;(statearr_33583_33603[2] = null);
(statearr_33583_33603[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33572 === 9))
{var inst_33551 = (state_33571[9]);var state_33571__$1 = state_33571;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33571__$1,11,out,inst_33551);
} else
{if((state_val_33572 === 10))
{var inst_33563 = (state_33571[2]);var state_33571__$1 = state_33571;var statearr_33585_33604 = state_33571__$1;(statearr_33585_33604[2] = inst_33563);
(statearr_33585_33604[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33572 === 11))
{var inst_33543 = (state_33571[7]);var inst_33560 = (state_33571[2]);var tmp33584 = inst_33543;var inst_33543__$1 = tmp33584;var state_33571__$1 = (function (){var statearr_33586 = state_33571;(statearr_33586[11] = inst_33560);
(statearr_33586[7] = inst_33543__$1);
return statearr_33586;
})();var statearr_33587_33605 = state_33571__$1;(statearr_33587_33605[2] = null);
(statearr_33587_33605[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33591 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33591[0] = state_machine__5507__auto__);
(statearr_33591[1] = 1);
return statearr_33591;
});
var state_machine__5507__auto____1 = (function (state_33571){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33571);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33592){if((e33592 instanceof Object))
{var ex__5510__auto__ = e33592;var statearr_33593_33606 = state_33571;(statearr_33593_33606[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33571);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33592;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33607 = state_33571;
state_33571 = G__33607;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33571){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33594 = f__5522__auto__.call(null);(statearr_33594[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33595);
return statearr_33594;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33700 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33677){var state_val_33678 = (state_33677[1]);if((state_val_33678 === 1))
{var inst_33654 = 0;var state_33677__$1 = (function (){var statearr_33679 = state_33677;(statearr_33679[7] = inst_33654);
return statearr_33679;
})();var statearr_33680_33701 = state_33677__$1;(statearr_33680_33701[2] = null);
(statearr_33680_33701[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33678 === 2))
{var inst_33654 = (state_33677[7]);var inst_33656 = (inst_33654 < n);var state_33677__$1 = state_33677;if(cljs.core.truth_(inst_33656))
{var statearr_33681_33702 = state_33677__$1;(statearr_33681_33702[1] = 4);
} else
{var statearr_33682_33703 = state_33677__$1;(statearr_33682_33703[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33678 === 3))
{var inst_33674 = (state_33677[2]);var inst_33675 = cljs.core.async.close_BANG_.call(null,out);var state_33677__$1 = (function (){var statearr_33683 = state_33677;(statearr_33683[8] = inst_33674);
return statearr_33683;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33677__$1,inst_33675);
} else
{if((state_val_33678 === 4))
{var state_33677__$1 = state_33677;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33677__$1,7,ch);
} else
{if((state_val_33678 === 5))
{var state_33677__$1 = state_33677;var statearr_33684_33704 = state_33677__$1;(statearr_33684_33704[2] = null);
(statearr_33684_33704[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33678 === 6))
{var inst_33672 = (state_33677[2]);var state_33677__$1 = state_33677;var statearr_33685_33705 = state_33677__$1;(statearr_33685_33705[2] = inst_33672);
(statearr_33685_33705[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33678 === 7))
{var inst_33659 = (state_33677[9]);var inst_33659__$1 = (state_33677[2]);var inst_33660 = (inst_33659__$1 == null);var inst_33661 = cljs.core.not.call(null,inst_33660);var state_33677__$1 = (function (){var statearr_33686 = state_33677;(statearr_33686[9] = inst_33659__$1);
return statearr_33686;
})();if(inst_33661)
{var statearr_33687_33706 = state_33677__$1;(statearr_33687_33706[1] = 8);
} else
{var statearr_33688_33707 = state_33677__$1;(statearr_33688_33707[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33678 === 8))
{var inst_33659 = (state_33677[9]);var state_33677__$1 = state_33677;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33677__$1,11,out,inst_33659);
} else
{if((state_val_33678 === 9))
{var state_33677__$1 = state_33677;var statearr_33689_33708 = state_33677__$1;(statearr_33689_33708[2] = null);
(statearr_33689_33708[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33678 === 10))
{var inst_33669 = (state_33677[2]);var state_33677__$1 = state_33677;var statearr_33690_33709 = state_33677__$1;(statearr_33690_33709[2] = inst_33669);
(statearr_33690_33709[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33678 === 11))
{var inst_33654 = (state_33677[7]);var inst_33664 = (state_33677[2]);var inst_33665 = (inst_33654 + 1);var inst_33654__$1 = inst_33665;var state_33677__$1 = (function (){var statearr_33691 = state_33677;(statearr_33691[7] = inst_33654__$1);
(statearr_33691[10] = inst_33664);
return statearr_33691;
})();var statearr_33692_33710 = state_33677__$1;(statearr_33692_33710[2] = null);
(statearr_33692_33710[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33696 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33696[0] = state_machine__5507__auto__);
(statearr_33696[1] = 1);
return statearr_33696;
});
var state_machine__5507__auto____1 = (function (state_33677){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33677);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33697){if((e33697 instanceof Object))
{var ex__5510__auto__ = e33697;var statearr_33698_33711 = state_33677;(statearr_33698_33711[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33677);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33697;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33712 = state_33677;
state_33677 = G__33712;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33677){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33677);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33699 = f__5522__auto__.call(null);(statearr_33699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33700);
return statearr_33699;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33809 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33784){var state_val_33785 = (state_33784[1]);if((state_val_33785 === 1))
{var inst_33761 = null;var state_33784__$1 = (function (){var statearr_33786 = state_33784;(statearr_33786[7] = inst_33761);
return statearr_33786;
})();var statearr_33787_33810 = state_33784__$1;(statearr_33787_33810[2] = null);
(statearr_33787_33810[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33785 === 2))
{var state_33784__$1 = state_33784;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33784__$1,4,ch);
} else
{if((state_val_33785 === 3))
{var inst_33781 = (state_33784[2]);var inst_33782 = cljs.core.async.close_BANG_.call(null,out);var state_33784__$1 = (function (){var statearr_33788 = state_33784;(statearr_33788[8] = inst_33781);
return statearr_33788;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33784__$1,inst_33782);
} else
{if((state_val_33785 === 4))
{var inst_33764 = (state_33784[9]);var inst_33764__$1 = (state_33784[2]);var inst_33765 = (inst_33764__$1 == null);var inst_33766 = cljs.core.not.call(null,inst_33765);var state_33784__$1 = (function (){var statearr_33789 = state_33784;(statearr_33789[9] = inst_33764__$1);
return statearr_33789;
})();if(inst_33766)
{var statearr_33790_33811 = state_33784__$1;(statearr_33790_33811[1] = 5);
} else
{var statearr_33791_33812 = state_33784__$1;(statearr_33791_33812[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33785 === 5))
{var inst_33761 = (state_33784[7]);var inst_33764 = (state_33784[9]);var inst_33768 = cljs.core._EQ_.call(null,inst_33764,inst_33761);var state_33784__$1 = state_33784;if(inst_33768)
{var statearr_33792_33813 = state_33784__$1;(statearr_33792_33813[1] = 8);
} else
{var statearr_33793_33814 = state_33784__$1;(statearr_33793_33814[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33785 === 6))
{var state_33784__$1 = state_33784;var statearr_33795_33815 = state_33784__$1;(statearr_33795_33815[2] = null);
(statearr_33795_33815[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33785 === 7))
{var inst_33779 = (state_33784[2]);var state_33784__$1 = state_33784;var statearr_33796_33816 = state_33784__$1;(statearr_33796_33816[2] = inst_33779);
(statearr_33796_33816[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33785 === 8))
{var inst_33761 = (state_33784[7]);var tmp33794 = inst_33761;var inst_33761__$1 = tmp33794;var state_33784__$1 = (function (){var statearr_33797 = state_33784;(statearr_33797[7] = inst_33761__$1);
return statearr_33797;
})();var statearr_33798_33817 = state_33784__$1;(statearr_33798_33817[2] = null);
(statearr_33798_33817[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33785 === 9))
{var inst_33764 = (state_33784[9]);var state_33784__$1 = state_33784;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33784__$1,11,out,inst_33764);
} else
{if((state_val_33785 === 10))
{var inst_33776 = (state_33784[2]);var state_33784__$1 = state_33784;var statearr_33799_33818 = state_33784__$1;(statearr_33799_33818[2] = inst_33776);
(statearr_33799_33818[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33785 === 11))
{var inst_33764 = (state_33784[9]);var inst_33773 = (state_33784[2]);var inst_33761 = inst_33764;var state_33784__$1 = (function (){var statearr_33800 = state_33784;(statearr_33800[7] = inst_33761);
(statearr_33800[10] = inst_33773);
return statearr_33800;
})();var statearr_33801_33819 = state_33784__$1;(statearr_33801_33819[2] = null);
(statearr_33801_33819[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33805 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_33805[0] = state_machine__5507__auto__);
(statearr_33805[1] = 1);
return statearr_33805;
});
var state_machine__5507__auto____1 = (function (state_33784){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33784);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33806){if((e33806 instanceof Object))
{var ex__5510__auto__ = e33806;var statearr_33807_33820 = state_33784;(statearr_33807_33820[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33784);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33806;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33821 = state_33784;
state_33784 = G__33821;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33784){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33808 = f__5522__auto__.call(null);(statearr_33808[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33809);
return statearr_33808;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33956 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33926){var state_val_33927 = (state_33926[1]);if((state_val_33927 === 1))
{var inst_33889 = (new Array(n));var inst_33890 = inst_33889;var inst_33891 = 0;var state_33926__$1 = (function (){var statearr_33928 = state_33926;(statearr_33928[7] = inst_33890);
(statearr_33928[8] = inst_33891);
return statearr_33928;
})();var statearr_33929_33957 = state_33926__$1;(statearr_33929_33957[2] = null);
(statearr_33929_33957[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 2))
{var state_33926__$1 = state_33926;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33926__$1,4,ch);
} else
{if((state_val_33927 === 3))
{var inst_33924 = (state_33926[2]);var state_33926__$1 = state_33926;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33926__$1,inst_33924);
} else
{if((state_val_33927 === 4))
{var inst_33894 = (state_33926[9]);var inst_33894__$1 = (state_33926[2]);var inst_33895 = (inst_33894__$1 == null);var inst_33896 = cljs.core.not.call(null,inst_33895);var state_33926__$1 = (function (){var statearr_33930 = state_33926;(statearr_33930[9] = inst_33894__$1);
return statearr_33930;
})();if(inst_33896)
{var statearr_33931_33958 = state_33926__$1;(statearr_33931_33958[1] = 5);
} else
{var statearr_33932_33959 = state_33926__$1;(statearr_33932_33959[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 5))
{var inst_33890 = (state_33926[7]);var inst_33891 = (state_33926[8]);var inst_33899 = (state_33926[10]);var inst_33894 = (state_33926[9]);var inst_33898 = (inst_33890[inst_33891] = inst_33894);var inst_33899__$1 = (inst_33891 + 1);var inst_33900 = (inst_33899__$1 < n);var state_33926__$1 = (function (){var statearr_33933 = state_33926;(statearr_33933[11] = inst_33898);
(statearr_33933[10] = inst_33899__$1);
return statearr_33933;
})();if(cljs.core.truth_(inst_33900))
{var statearr_33934_33960 = state_33926__$1;(statearr_33934_33960[1] = 8);
} else
{var statearr_33935_33961 = state_33926__$1;(statearr_33935_33961[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 6))
{var inst_33891 = (state_33926[8]);var inst_33912 = (inst_33891 > 0);var state_33926__$1 = state_33926;if(cljs.core.truth_(inst_33912))
{var statearr_33937_33962 = state_33926__$1;(statearr_33937_33962[1] = 12);
} else
{var statearr_33938_33963 = state_33926__$1;(statearr_33938_33963[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 7))
{var inst_33922 = (state_33926[2]);var state_33926__$1 = state_33926;var statearr_33939_33964 = state_33926__$1;(statearr_33939_33964[2] = inst_33922);
(statearr_33939_33964[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 8))
{var inst_33890 = (state_33926[7]);var inst_33899 = (state_33926[10]);var tmp33936 = inst_33890;var inst_33890__$1 = tmp33936;var inst_33891 = inst_33899;var state_33926__$1 = (function (){var statearr_33940 = state_33926;(statearr_33940[7] = inst_33890__$1);
(statearr_33940[8] = inst_33891);
return statearr_33940;
})();var statearr_33941_33965 = state_33926__$1;(statearr_33941_33965[2] = null);
(statearr_33941_33965[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 9))
{var inst_33890 = (state_33926[7]);var inst_33904 = cljs.core.vec.call(null,inst_33890);var state_33926__$1 = state_33926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33926__$1,11,out,inst_33904);
} else
{if((state_val_33927 === 10))
{var inst_33910 = (state_33926[2]);var state_33926__$1 = state_33926;var statearr_33942_33966 = state_33926__$1;(statearr_33942_33966[2] = inst_33910);
(statearr_33942_33966[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 11))
{var inst_33906 = (state_33926[2]);var inst_33907 = (new Array(n));var inst_33890 = inst_33907;var inst_33891 = 0;var state_33926__$1 = (function (){var statearr_33943 = state_33926;(statearr_33943[7] = inst_33890);
(statearr_33943[8] = inst_33891);
(statearr_33943[12] = inst_33906);
return statearr_33943;
})();var statearr_33944_33967 = state_33926__$1;(statearr_33944_33967[2] = null);
(statearr_33944_33967[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 12))
{var inst_33890 = (state_33926[7]);var inst_33914 = cljs.core.vec.call(null,inst_33890);var state_33926__$1 = state_33926;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33926__$1,15,out,inst_33914);
} else
{if((state_val_33927 === 13))
{var state_33926__$1 = state_33926;var statearr_33945_33968 = state_33926__$1;(statearr_33945_33968[2] = null);
(statearr_33945_33968[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 14))
{var inst_33919 = (state_33926[2]);var inst_33920 = cljs.core.async.close_BANG_.call(null,out);var state_33926__$1 = (function (){var statearr_33946 = state_33926;(statearr_33946[13] = inst_33919);
return statearr_33946;
})();var statearr_33947_33969 = state_33926__$1;(statearr_33947_33969[2] = inst_33920);
(statearr_33947_33969[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33927 === 15))
{var inst_33916 = (state_33926[2]);var state_33926__$1 = state_33926;var statearr_33948_33970 = state_33926__$1;(statearr_33948_33970[2] = inst_33916);
(statearr_33948_33970[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_33952 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33952[0] = state_machine__5507__auto__);
(statearr_33952[1] = 1);
return statearr_33952;
});
var state_machine__5507__auto____1 = (function (state_33926){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33926);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33953){if((e33953 instanceof Object))
{var ex__5510__auto__ = e33953;var statearr_33954_33971 = state_33926;(statearr_33954_33971[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33926);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33953;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33972 = state_33926;
state_33926 = G__33972;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33926){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33955 = f__5522__auto__.call(null);(statearr_33955[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33956);
return statearr_33955;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34115 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34085){var state_val_34086 = (state_34085[1]);if((state_val_34086 === 1))
{var inst_34044 = [];var inst_34045 = inst_34044;var inst_34046 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_34085__$1 = (function (){var statearr_34087 = state_34085;(statearr_34087[7] = inst_34045);
(statearr_34087[8] = inst_34046);
return statearr_34087;
})();var statearr_34088_34116 = state_34085__$1;(statearr_34088_34116[2] = null);
(statearr_34088_34116[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 2))
{var state_34085__$1 = state_34085;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34085__$1,4,ch);
} else
{if((state_val_34086 === 3))
{var inst_34083 = (state_34085[2]);var state_34085__$1 = state_34085;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34085__$1,inst_34083);
} else
{if((state_val_34086 === 4))
{var inst_34049 = (state_34085[9]);var inst_34049__$1 = (state_34085[2]);var inst_34050 = (inst_34049__$1 == null);var inst_34051 = cljs.core.not.call(null,inst_34050);var state_34085__$1 = (function (){var statearr_34089 = state_34085;(statearr_34089[9] = inst_34049__$1);
return statearr_34089;
})();if(inst_34051)
{var statearr_34090_34117 = state_34085__$1;(statearr_34090_34117[1] = 5);
} else
{var statearr_34091_34118 = state_34085__$1;(statearr_34091_34118[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 5))
{var inst_34053 = (state_34085[10]);var inst_34049 = (state_34085[9]);var inst_34046 = (state_34085[8]);var inst_34053__$1 = f.call(null,inst_34049);var inst_34054 = cljs.core._EQ_.call(null,inst_34053__$1,inst_34046);var inst_34055 = cljs.core.keyword_identical_QMARK_.call(null,inst_34046,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_34056 = (inst_34054) || (inst_34055);var state_34085__$1 = (function (){var statearr_34092 = state_34085;(statearr_34092[10] = inst_34053__$1);
return statearr_34092;
})();if(cljs.core.truth_(inst_34056))
{var statearr_34093_34119 = state_34085__$1;(statearr_34093_34119[1] = 8);
} else
{var statearr_34094_34120 = state_34085__$1;(statearr_34094_34120[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 6))
{var inst_34045 = (state_34085[7]);var inst_34070 = inst_34045.length;var inst_34071 = (inst_34070 > 0);var state_34085__$1 = state_34085;if(cljs.core.truth_(inst_34071))
{var statearr_34096_34121 = state_34085__$1;(statearr_34096_34121[1] = 12);
} else
{var statearr_34097_34122 = state_34085__$1;(statearr_34097_34122[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 7))
{var inst_34081 = (state_34085[2]);var state_34085__$1 = state_34085;var statearr_34098_34123 = state_34085__$1;(statearr_34098_34123[2] = inst_34081);
(statearr_34098_34123[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 8))
{var inst_34045 = (state_34085[7]);var inst_34053 = (state_34085[10]);var inst_34049 = (state_34085[9]);var inst_34058 = inst_34045.push(inst_34049);var tmp34095 = inst_34045;var inst_34045__$1 = tmp34095;var inst_34046 = inst_34053;var state_34085__$1 = (function (){var statearr_34099 = state_34085;(statearr_34099[7] = inst_34045__$1);
(statearr_34099[11] = inst_34058);
(statearr_34099[8] = inst_34046);
return statearr_34099;
})();var statearr_34100_34124 = state_34085__$1;(statearr_34100_34124[2] = null);
(statearr_34100_34124[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 9))
{var inst_34045 = (state_34085[7]);var inst_34061 = cljs.core.vec.call(null,inst_34045);var state_34085__$1 = state_34085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34085__$1,11,out,inst_34061);
} else
{if((state_val_34086 === 10))
{var inst_34068 = (state_34085[2]);var state_34085__$1 = state_34085;var statearr_34101_34125 = state_34085__$1;(statearr_34101_34125[2] = inst_34068);
(statearr_34101_34125[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 11))
{var inst_34053 = (state_34085[10]);var inst_34049 = (state_34085[9]);var inst_34063 = (state_34085[2]);var inst_34064 = [];var inst_34065 = inst_34064.push(inst_34049);var inst_34045 = inst_34064;var inst_34046 = inst_34053;var state_34085__$1 = (function (){var statearr_34102 = state_34085;(statearr_34102[7] = inst_34045);
(statearr_34102[8] = inst_34046);
(statearr_34102[12] = inst_34065);
(statearr_34102[13] = inst_34063);
return statearr_34102;
})();var statearr_34103_34126 = state_34085__$1;(statearr_34103_34126[2] = null);
(statearr_34103_34126[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 12))
{var inst_34045 = (state_34085[7]);var inst_34073 = cljs.core.vec.call(null,inst_34045);var state_34085__$1 = state_34085;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34085__$1,15,out,inst_34073);
} else
{if((state_val_34086 === 13))
{var state_34085__$1 = state_34085;var statearr_34104_34127 = state_34085__$1;(statearr_34104_34127[2] = null);
(statearr_34104_34127[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 14))
{var inst_34078 = (state_34085[2]);var inst_34079 = cljs.core.async.close_BANG_.call(null,out);var state_34085__$1 = (function (){var statearr_34105 = state_34085;(statearr_34105[14] = inst_34078);
return statearr_34105;
})();var statearr_34106_34128 = state_34085__$1;(statearr_34106_34128[2] = inst_34079);
(statearr_34106_34128[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34086 === 15))
{var inst_34075 = (state_34085[2]);var state_34085__$1 = state_34085;var statearr_34107_34129 = state_34085__$1;(statearr_34107_34129[2] = inst_34075);
(statearr_34107_34129[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_34111 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34111[0] = state_machine__5507__auto__);
(statearr_34111[1] = 1);
return statearr_34111;
});
var state_machine__5507__auto____1 = (function (state_34085){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34085);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34112){if((e34112 instanceof Object))
{var ex__5510__auto__ = e34112;var statearr_34113_34130 = state_34085;(statearr_34113_34130[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34085);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34112;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34131 = state_34085;
state_34085 = G__34131;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34085){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34085);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34114 = f__5522__auto__.call(null);(statearr_34114[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34115);
return statearr_34114;
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
